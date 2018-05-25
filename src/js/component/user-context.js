import React from "react";

export const UserContext = React.createContext({
  user_nicename: "anonymous",// default value
  token: "",
  avatar: "",
  loginUser: () => {}
});