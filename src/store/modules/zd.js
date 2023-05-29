import { action, makeObservable, observable } from "mobx";
export default class User {
  constructor() {
    this.courseType = [];
    makeObservable(this, {
      courseType: observable,
      changeCourseType: action,
    });
    this.changeCourseType = this.changeCourseType.bind(this);
  }
  changeCourseType(data) {
    this.courseType = data;
  }
}
