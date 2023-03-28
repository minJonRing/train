import { action, makeObservable, observable } from "mobx";

export default class User {
  constructor() {
    this.openMenu = true;
    this.openItem = ["dashboard"];
    this.openComponent = "buttons";
    this.componentDrawerOpen = true;
    this.menuEnum = {};
    makeObservable(this, {
      openMenu: observable,
      openItem: observable,
      openComponent: observable,
      componentDrawerOpen: observable,
      menuEnum: observable,
      changeOpenMenu: action,
      changeOpenItem: action,
    });
    this.changeOpenMenu = this.changeOpenMenu.bind(this);
    this.changeOpenItem = this.changeOpenItem.bind(this);
    this.changeMenuEnum = this.changeMenuEnum.bind(this);
  }
  changeOpenMenu(data) {
    this.openMenu = data;
  }
  changeOpenItem(data) {
    this.openItem = data;
  }
  changeMenuEnum(data) {
    this.openItem = data;
  }
}
