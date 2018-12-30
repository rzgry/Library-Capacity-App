import { observable, action } from 'mobx';

const SORT_BY_NAME = 'NAME';
const SORT_BY_CAPACITY = 'CAPACITY';

const sortFunctions = {
  [SORT_BY_NAME]: (lib, lib2) => lib.name - lib2.name,
  [SORT_BY_CAPACITY]: (lib, lib2) => lib.overallCapacity - lib2.overallCapacity,
};

export default class SettingsStore {
  @observable
  librarySortFunction = sortFunctions[SORT_BY_NAME];

  @action
  changeSortFunction(sortType) {
    if (sortFunctions[sortType] !== undefined) {
      this.librarySortFunction = sortFunctions[sortType];
    }
  }
}
