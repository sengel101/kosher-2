import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  constructor() {
    console.log('Create a simple service that logs messages. Then use it to log whenever an object is constructed.')
  }
}
