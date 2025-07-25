import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UuidService {
  generate(): string {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  UID() {
    // Generate a random 32-character hexadecimal string
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
