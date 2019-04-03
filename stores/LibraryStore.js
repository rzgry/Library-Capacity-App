import {
  observable, action, computed, runInAction,
} from 'mobx';
import API from '../constants/API';
import { capitalizeFirstLetter } from '../utils/string';

class Library {
  @observable
  name;

  @observable
  overallCapacity;

  @observable
  floors;

  constructor(name, capacities) {
    const { total, floors } = capacities;

    this.name = name;
    this.overallCapacity = total;
    this.floors = floors;
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

  @observable
  loadingAverageLibraries = false;

  @observable
  averageLibraries = [];

  @observable
  averageError = '';

  @observable
  lastUpdatedAverage = undefined;

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
          ([name, capacities]) => new Library(`${capitalizeFirstLetter(name)} Library`, capacities),
        );
        this.error = '';
        this.libraries = libraries;
      });
    } catch (e) {
      runInAction(() => {
        this.error = 'Unexpected error occured when loading libraries. Please try again later.';
        this.libraries = [];
      });
      console.log(e); // eslint-disable-line no-console
    } finally {
      runInAction(() => {
        this.loadingLibraries = false;
      });
    }
  }

  @action
  async fetchAverageLibraries() {
    this.loadingAverageLibraries = true;

    try {
      const date = new Date();

      date.setHours(date.getHours() - 3);

      const response = await API.get(`/libraries/averageCapacities?time=${date.getTime()}`);
      runInAction(() => {
        const { data } = response;

        this.lastUpdatedAverage = new Date(data.timestamp);
        delete data.timestamp;

        const averageLibraries = Object.entries(response.data).map(
          ([name, capacities]) => new Library(`${capitalizeFirstLetter(name)} Library`, capacities),
        );
        this.error = '';
        this.averageLibraries = averageLibraries;
      });
    } catch (e) {
      runInAction(() => {
        this.error = 'Unexpected error occured when loading libraries. Please try again later.';
        this.averageLibraries = [];
      });
      console.log(e); // eslint-disable-line no-console
    } finally {
      runInAction(() => {
        this.loadingAverageLibraries = false;
      });
    }
  }
}
