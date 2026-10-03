import { InjectionToken } from '@angular/core';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage,
});
export class Storage {
  removeItem(key: string) {
    localStorage.removeItem(key);
  }
  setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  getItem(key: string): any {
    localStorage.getItem(key);
  }
}
