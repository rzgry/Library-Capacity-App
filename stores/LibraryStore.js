import { observable, action, computed } from 'mobx';

class Library {
  @observable
  name;

  @observable
  overallCapacity;

  @observable
  floorCapacities;

  constructor(name, capacities) {
    const { overallCapacity, floorCapacities } = capacities;

    this.name = name;
    this.overallCapacity = overallCapacity;
    this.floorCapacities = floorCapacities;
  }
}

const randValue = () => Math.round(Math.random() * 100) / 100;

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

  // computed getter that returns the libraries sorted by the sort function
  // that the user has selected and stored in settings
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
          new Library('Taylor Library', {
            overallCapacity: randValue(),
            floorCapacities: {
              s1: randValue(),
              s2: randValue(),
              s3: randValue(),
            },
          }),
          new Library('Weldon Library', {
            overallCapacity: randValue(),
            floorCapacities: {
              s1: randValue(),
              s2: randValue(),
              s3: randValue(),
            },
          }),
        ];
        this.loadingLibraries = false;
      }),
      1000,
    );
  }
}
