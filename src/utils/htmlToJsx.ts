import { attributeMap } from "./attributeMap";

export function convertHTMLtoJSX(html: string): string {
  const cleanHtml = html.replace(/<!--[\s\S]*?-->/g, "");

  const parser = new DOMParser();
  const doc = parser.parseFromString(cleanHtml, "text/html");

  const convertAttributes = (element: Element): string => {
    let attributes = "";
    Array.from(element.attributes).forEach((attr) => {
      if (attr.name.startsWith("on") && attr.value) {
        const jsxEventName =
          attr.name.toLowerCase().replace(/^on/, "on") +
          attr.name.charAt(2).toUpperCase() +
          attr.name.slice(3);
        attributes += ` ${jsxEventName}={${attr.value}}`;
      } else if (attr.name === "style" && attr.value) {
        const styleObject = styleStringToObject(attr.value);
        const styleString = JSON.stringify(styleObject).replace(/"/g, "'");
        attributes += ` style={${styleString}}`;
      } else if (!attr.name.startsWith("data-")) {
        const jsxAttributeName = attributeMap[attr.name] || attr.name;
        attributes += ` ${jsxAttributeName}="${attr.value}"`;
      } else {
        attributes += ` ${attr.name}="${attr.value}"`;
      }
    });
    return attributes;
  };

  const convertElement = (element: Element, indent: string = ""): string => {
    const tagName = element.tagName.toLowerCase();
    const attributes = convertAttributes(element);
    let children = "";
    Array.from(element.childNodes).forEach((child) => {
      if (child.nodeType === Node.ELEMENT_NODE) {
        children += `\n${convertElement(child as Element, indent + "  ")}`;
      } else if (child.nodeType === Node.TEXT_NODE) {
        const text = child.textContent?.trim();
        if (text) {
          children += `\n${indent}  ${text}`;
        }
      }
    });

    if (children) {
      return `${indent}<${tagName}${attributes}>${children}\n${indent}</${tagName}>`;
    } else {
      return `${indent}<${tagName}${attributes} />`;
    }
  };

  const elementsToRemove = doc.querySelectorAll("script, link");
  elementsToRemove.forEach((el) => el.remove());

  correctSelfClosingTags(doc.body);

  let result = "";
  Array.from(doc.body.childNodes).forEach((node) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      result += `${convertElement(node as Element)}\n`;
    }
  });

  return result.trim();
}

function styleStringToObject(styleString: string): Record<string, string> {
  const styles = styleString.split(";").filter((style) => style.trim() !== "");
  return styles.reduce((acc, style) => {
    const [key, value] = style.split(":");
    if (key && value) {
      const formattedKey = key
        .trim()
        .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
      acc[formattedKey] = value.trim();
    }
    return acc;
  }, {} as Record<string, string>);
}

function correctSelfClosingTags(element: HTMLElement) {
  const selfClosingTags = ["img", "br", "hr", "input", "meta", "link"];
  selfClosingTags.forEach((tag) => {
    const elements = element.getElementsByTagName(tag);
    Array.from(elements).forEach((el) => {
      if (!el.outerHTML.endsWith("/>")) {
        el.outerHTML = el.outerHTML.replace(/>$/, "/>");
      }
    });
  });
}
