import { FC, useCallback, useEffect } from "react";
import classes from "./index.module.scss";
import classNames from "classnames";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { appSelectors } from "../../redux/app/appSelectors";
import { closeNotification } from "../../redux/app/appSlice";
import { NotificationType } from "../../types/notification";

const getTypeClass = (type: NotificationType) => {
  switch (type) {
    case "success":
      return "success";
    case "error":
      return "error";
    case "warning":
      return "warning";
    case "info":
      return "info";
    default:
      return "info";
  }
};

const getIcon = (type: NotificationType) => {
  switch (type) {
    case "success":
      return "fa fa-check-circle-o";
    case "error":
      return "fa fa-times-circle-o";
    case "warning":
      return "fa fa-exclamation-triangle";
    case "info":
      return "fa fa-info-circle";
    default:
      return "fa fa-info-circle";
  }
};

const Notification: FC = () => {
  const notificationsQueue = useAppSelector(
    appSelectors.selectNotificationsQueue
  );

  const dispatch = useAppDispatch();

  const closeNotificationHandler = useCallback(() => {
    if (notificationsQueue.length === 0) {
      return;
    }
    setTimeout(() => {
      dispatch(
        closeNotification(notificationsQueue[notificationsQueue.length - 1].id!)
      );
    }, 5000);
  }, [dispatch, notificationsQueue]);

  useEffect(() => {
    closeNotificationHandler();
  }, [closeNotificationHandler]);

  if (notificationsQueue.length === 0) {
    return null;
  }

  return (
    <div className={classes["root"]}>
      {notificationsQueue.map((notification) => (
        <div
          key={notification.id}
          className={classNames(
            classes["notification"],
            classes[getTypeClass(notification.type)],
            classes["animate"]
          )}
        >
          <i className={getIcon(notification.type)}></i>
          <p>{notification.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Notification;
