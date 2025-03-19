import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public setLocalStorageItem<T>(key: string, value: T): void {
    let stringifyValue: string = JSON.stringify(value);
    localStorage.setItem(key, stringifyValue);
  }

  public getLocalStorageItem<T>(key: string): T | null {
    let stringifyValue: string | null = localStorage.getItem(key);
    if (!stringifyValue) return null;
    let value: T = JSON.parse(stringifyValue);
    return value;
  }
}
