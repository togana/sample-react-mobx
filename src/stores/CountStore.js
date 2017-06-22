import { observable, action, computed } from 'mobx';

export default class CountStore {
  @observable num = 0;

  @computed get getCount() {
    return this.num;
  }

  @action.bound increment() {
    this.num = this.num + 1;
  }
  @action.bound decrement() {
    this.num = this.num - 1;
  }
}
