import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NotificationType } from "../../types/notification";
import { createRandomId } from "../../utils/generalHelpers";

type Notification = {
  id?: string;
  message: string;
  type: NotificationType;
};

interface AppState {
  notificationsQueue: Notification[];
}

const initialState: AppState = {
  notificationsQueue: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addNotificationToQueue: (
      state: AppState,
      action: PayloadAction<Notification>
    ) => {
      state.notificationsQueue.push({
        id: createRandomId(),
        ...action.payload,
      });
    },
    closeNotification: (state: AppState, action: PayloadAction<string>) => {
      state.notificationsQueue = state.notificationsQueue.filter(
        (notification) => notification.id !== action.payload
      );
    },
  },
});

export const { addNotificationToQueue, closeNotification } = appSlice.actions;

export default appSlice.reducer;
