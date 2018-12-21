import { observable, action, computed } from 'mobx';

class Library {
  @observable
  name;

  @observable
  overallCapacity;

  constructor(name, overallCapacity) {
    this.name = name;
    this.overallCapacity = overallCapacity;
  }
}

export default class LibraryStore {
  @observable
  loadingLibraries = false;

  @observable
  libraries = [];

  constructor(settingStore) {
    this.settingStore = settingStore;
  }

  getLibrary(libraryName) {
    return this.libraries.find(lib => lib.name === libraryName);
  }

  @computed
  get sortedLibraries() {
    return this.libraries.slice().sort(this.settingStore.librarySortFunction);
  }

  @action
  fetchLibraries() {
    // TODO: Fetch library from API
    this.loadingLibraries = true;

    //  Simulate network request
    setTimeout(
      action(() => {
        this.libraries = [
          new Library('Taylor Library', Math.round(Math.random() * 100)),
          new Library('Weldon Library', Math.round(Math.random() * 100)),
        ];
        this.loadingLibraries = false;
      }),
      1000,
    );
  }
}
