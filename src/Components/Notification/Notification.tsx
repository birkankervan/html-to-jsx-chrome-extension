import { memo } from "react";

export const NotificationComponent = memo(
  ({ message, show }: { message: string; show: boolean }) => {
    if (!show) {
      return null;
    }
    return (
      <div className="fixed top-4 right-4 bg-gray-700 dark:bg-gray-900 text-white dark:text-gray-300 px-4 py-2 rounded shadow-md">
        {message}
      </div>
    );
  }
);
