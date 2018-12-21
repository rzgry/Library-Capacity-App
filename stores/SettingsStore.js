import { observable, action } from 'mobx';

const SORT_NAME = 'NAME';
const SORT_CAPACITY = 'CAPACITY';

const sortFunctions = {
  [SORT_NAME]: (lib, lib2) => lib.name - lib2.name,
  [SORT_CAPACITY]: (lib, lib2) => lib.overallCapacity - lib2.overallCapacity,
};

export default class SettingsStore {
  @observable
  librarySortFunction = sortFunctions[SORT_NAME];

  @action
  changeSortFunction(sortType) {
    if (sortFunctions[sortType] !== undefined) {
      this.librarySortFunction = sortFunctions[sortType];
    }
  }
}
