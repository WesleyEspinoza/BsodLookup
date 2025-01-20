// local-storage.server.service.ts
import { Injectable } from '@angular/core';
import { LocalStorage } from '../interfaces/LocalStorage.interface'

@Injectable({
  providedIn: 'root'
})
export class ServerLocalStorageService implements LocalStorage {
  setItem(key: string, value: any): void {
    // No operation on the server
  }

  getItem<T>(key: string): T | null {
    // Always return null on the server
    return null;
  }

  removeItem(key: string): void {
    // No operation on the server
  }

  clear(): void {
    // No operation on the server
  }
}
