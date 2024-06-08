const prefixes = {
  base: "/api",
  user: "/user",
  transactions: "/transactions",
};

type Endpoint = string;

type EndpointsType = {
  user: {
    LOGIN: Endpoint;
    REGISTER: Endpoint;
    PROFILE: Endpoint;
  };
  transactions: {
    BASE: ({
      userId,
      transactionId,
    }: {
      userId?: string;
      transactionId?: string;
    }) => Endpoint;
  };
};

export const Endpoints: EndpointsType = {
  user: {
    LOGIN: `${prefixes.base}${prefixes.user}/login`,
    REGISTER: `${prefixes.base}${prefixes.user}/register`,
    PROFILE: `${prefixes.base}${prefixes.user}/profile`,
  },
  transactions: {
    BASE: ({
      userId,
      transactionId,
    }: {
      userId?: string;
      transactionId?: string;
    }) =>
      `${prefixes.base}user${userId ? `/${userId}` : ""}${
        prefixes.transactions
      }${transactionId ? `/${transactionId}` : ""}`,
  },
};
