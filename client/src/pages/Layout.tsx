import { FC } from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import App from "../App";
import Notification from "../components/Notification";

const Layout: FC = () => (
  <Provider store={store}>
    <App />
    <Notification />
  </Provider>
);

export default Layout;
