import User from "./modules/user";
import System from "./modules/system";
import Zd from "./modules/zd";
import { createContext, useContext } from "react";

class Store {
  constructor() {
    this.user = new User();
    this.system = new System();
    this.zd = new Zd()
  }
}

export const store = new Store();

const RootStoreContext = createContext();

export const RootStoreProvider = ({ children }) => {
  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  );
};

export const useRootStore = () => {
  return useContext(RootStoreContext);
};
