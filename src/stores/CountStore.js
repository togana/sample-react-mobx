import { observable, action, computed } from 'mobx';

const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

export default class CountStore {
  @observable num = 0;

  @computed get getCount() {
    return this.num;
  }

  @action.bound onIncrement() {
    this.num = this.num + 1;
  }

  @action.bound onDecrement() {
    this.num = this.num - 1;
  }

  @action.bound async onAsyncIecrement() {
    await sleep(1000);
    this.onIncrement();
  }
}
