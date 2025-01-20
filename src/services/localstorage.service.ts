import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private isLocalStorageAvailable(): boolean {
    try {
      return typeof localStorage !== 'undefined' && localStorage !== null;
    } catch (e) {
      console.warn('localStorage is not available.', e);
      return false;
    }
  }

  setItem(key: string, value: any): void {
    if (this.isLocalStorageAvailable()) {
      const stringValue = JSON.stringify(value);
      localStorage.setItem(key, stringValue);
    } else {
      console.warn('localStorage is not available. Data not saved.');
    }
  }

  getItem<T>(key: string): T | null {
    if (this.isLocalStorageAvailable()) {
      const stringValue = localStorage.getItem(key);
      return stringValue ? JSON.parse(stringValue) : null;
    } else {
      console.warn('localStorage is not available. Returning null.');
      return null;
    }
  }

  removeItem(key: string): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem(key);
    } else {
      console.warn('localStorage is not available. Item not removed.');
    }
  }

  clear(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.clear();
    } else {
      console.warn('localStorage is not available. Clear operation failed.');
    }
  }
}
