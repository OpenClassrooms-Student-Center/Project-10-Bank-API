import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import NavBar from "./components/NavBar";
import classNames from "classnames";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import classes from "./App.module.scss";
import { Routes } from "./router/routes";
import useCookies, { CookiesType } from "./hooks/useCookies";
import { authSelectors } from "./redux/auth/authSelectors";
import { setToken } from "./redux/auth/authSlice";

const App: FC = () => {
  const storedToken = useAppSelector(authSelectors.selectToken);
  const [currentToken, setCurrentToken] = useState<CookiesType | null>(null);

  const { cookies: token } = useCookies("token");

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setCurrentToken(token || storedToken);

    if (
      token === undefined &&
      storedToken === undefined &&
      (location.pathname === Routes.PROFILE ||
        location.pathname.includes(Routes.ACCOUNT))
    ) {
      navigate(Routes.LOGIN);
    }

    if ((token || storedToken) && location.pathname === Routes.LOGIN) {
      navigate(Routes.PROFILE);
    }
  }, [dispatch, location.pathname, navigate, storedToken, token]);

  useEffect(() => {
    if (!storedToken && token) {
      dispatch(setToken(token));
    }
  }, [dispatch, storedToken, token]);

  return (
    <div className={classes["root"]}>
      <NavBar />
      <main
        className={classNames(classes["main"], {
          [classes["bg-dark"]]:
            location.pathname === Routes.LOGIN ||
            location.pathname === Routes.PROFILE ||
            location.pathname.includes(Routes.ACCOUNT),
        })}
      >
        {currentToken! === null ? (
          <div className={classes["loader"]}>
            <span>
              <i className="fa fa-spinner fa-spin"></i>
            </span>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
