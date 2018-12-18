import { observable } from 'mobx';

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

  getLibrary(libraryName) {
    return this.libraries.find(lib => lib.name === libraryName);
  }

  fetchLibraries() {
    // TODO: Fetch library from API
    // Temp simulate network request
    this.loadingLibraries = true;
    setTimeout(() => {
      this.libraries = [new Library('Taylor Library', 0.85), new Library('Weldon Library', 0.6)];
      this.loadingLibraries = false;
    }, 1000);
  }
}
