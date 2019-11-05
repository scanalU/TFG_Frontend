import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Rest } from './restaurant';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const restaurants = [
      { id: 11, name: 'rest1' },
      { id: 12, name: 'rest2' },
      { id: 13, name: 'rest3' },
      { id: 14, name: 'rest4' },
      { id: 15, name: 'rest5' },
      { id: 16, name: 'rest6' },
      { id: 17, name: 'rest7' },
      { id: 18, name: 'rest8' },
      { id: 19, name: 'rest8' },
      { id: 20, name: 'rest9' }
    ];
    return {restaurants};
  }

  // Overrides the genId method to ensure that a restaurant always has an id.
  // If the restaurants array is empty,
  // the method below returns the initial number (11).
  // if the restaurants array is not empty, the method below returns the highest
  // rest id + 1.
 
  genId(restaurants: Rest[]): number {
    return restaurants.length > 0 ? Math.max(...restaurants.map(rest => rest.id)) + 1 : 11;
  }
}