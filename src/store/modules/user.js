import { action, makeObservable, observable } from "mobx";
import { getToken, getUserInfo } from "utils/token";
export default class User {
  constructor() {
    this.userInfo = JSON.parse(getUserInfo()) || {
      avatar: "",
      isCompanyPersonnel: 1,
      isDefaultPassword: 1,
      nick: "",
      organizationName: "",
    };
    this.token = getToken() || "";
    this.menu = [];
    makeObservable(this, {
      userInfo: observable,
      token: observable,
      menu: observable,
      changeUserInfo: action,
      changeToken: action,
      changeMenu: action,
    });
    this.changeUserInfo = this.changeUserInfo.bind(this);
    this.changeToken = this.changeToken.bind(this);
    this.changeMenu = this.changeMenu.bind(this);
  }
  changeUserInfo(data) {
    this.userInfo = {
      ...this.userInfo,
      ...data,
    };
  }
  changeToken(data) {
    this.token = data;
  }
  changeMenu(data) {
    this.menu = data;
  }
}
