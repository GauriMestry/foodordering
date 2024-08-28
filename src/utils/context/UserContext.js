import { createContext } from "react";

const UserContext = createContext({
  loaggedInUser: "Default User",
});
export default UserContext;
