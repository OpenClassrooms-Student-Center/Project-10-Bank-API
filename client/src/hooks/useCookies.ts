import Cookies, { CookieSetOptions } from "universal-cookie";

type Argument = string | string[];
export type CookiesType = Record<string, unknown> | string | undefined;

/**
 * A hook to manage cookies.
 * @param cookieName The name of the cookie to manage.
 * @returns An object with the cookies, a function to set a cookie, and a function to remove a cookie.
 * @example
 * const { cookies, setCookie, removeCookie } = useCookies("cookieName");
 * const { cookies, setCookie, removeCookie } = useCookies(["cookieName1", "cookieName2"]);
 */
const useCookies = (cookieName: Argument) => {
  const cookiesInstance = new Cookies();
  const cookies: () => CookiesType = () => {
    if (typeof cookieName === "string") {
      return cookiesInstance.get(cookieName);
    }

    if (Array.isArray(cookieName)) {
      return Object.fromEntries(
        cookieName.map((cookie) => [cookie, cookiesInstance.get(cookie)])
      );
    }

    throw new Error(`[useCookies]: Error, invalid argument: ${cookieName}`);
  };

  const setCookie = (name: string, value: string, options?: CookieSetOptions) =>
    cookiesInstance.set(name, value, options);
  const removeCookie = (name: string) => cookiesInstance.remove(name);

  return { cookies: cookies(), setCookie, removeCookie };
};

export default useCookies;
