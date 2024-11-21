import { RootState } from "../store";

export const appSelectors = {
  selectNotificationsQueue: (state: RootState) => state.app.notificationsQueue,
};
