import LibraryStore from './LibraryStore';
import SettingsStore from './SettingsStore';

const settingsStore = new SettingsStore();

// give library store a reference to settings
const libraryStore = new LibraryStore(settingsStore);

export default {
  libraryStore,
  settingsStore,
};
