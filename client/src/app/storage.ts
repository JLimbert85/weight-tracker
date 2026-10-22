import { InjectionToken } from '@angular/core';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage,
});
export class Storage {
  // Removes an item from the local storage.
  removeItem(key: string) {
    localStorage.removeItem(key);
  }
  // Sets an item in the local storage.
  setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  // Retrieves an item from the local storage.
  getItem(key: string): any {
    localStorage.getItem(key);
  }
}
