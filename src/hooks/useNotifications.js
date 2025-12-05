import { useEffect, useState } from "react";

const useNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    setNotifications([
        {
            type: "warning",
            message: "Grid instability detected",
            time: "10:32 AM"
        },
        {
            type: "info",
            message: "Charge session completed",
            time: "09:54 AM"
        }    
    ]);
  }, []);

  return notifications;
};

export default useNotifications;
