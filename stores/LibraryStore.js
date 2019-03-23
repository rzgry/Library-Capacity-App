import {
  observable, action, computed, runInAction,
} from 'mobx';
import API from '../constants/API';

class Library {
  @observable
  name;

  @observable
  overallCapacity;

  @observable
  floorCapacities;

  constructor(name, capacities) {
    const { total, floors } = capacities;

    this.name = name;
    this.overallCapacity = total;
    this.floorCapacities = floors;
  }
}

export default class LibraryStore {
  @observable
  loadingLibraries = false;

  @observable
  libraries = [];

  @observable
  error = '';

  @observable
  lastUpdated = undefined;

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
  async fetchLibraries() {
    this.loadingLibraries = true;

    try {
      const response = await API.get('/libraries/capacities');
      runInAction(() => {
        const { data } = response;

        this.lastUpdated = new Date(data.timestamp);
        delete data.timestamp;

        const libraries = Object.entries(response.data).map(
          ([name, capacities]) => new Library(name, capacities),
        );
        this.error = '';
        this.libraries = libraries;
      });
    } catch (e) {
      runInAction(() => {
        this.error = 'Unexpected error occured when loading libraries';
      });
      console.log(e); // eslint-disable-line no-console
    } finally {
      runInAction(() => {
        this.loadingLibraries = false;
      });
    }
  }
}
