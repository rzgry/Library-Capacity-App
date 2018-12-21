import LibraryStore from './LibraryStore';
import SettingsStore from './SettingsStore';

const settingsStore = new SettingsStore();

// give library store a referencce to settings
const libraryStore = new LibraryStore(settingsStore);

export default {
  libraryStore,
  settingsStore,
};
