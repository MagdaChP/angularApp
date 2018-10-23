import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Elem } from './list';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const listEl: Elem[] = [
      {
        id: 1,
        name: 'Chrismas Decorations',
        keyWords: 'christmas decoration',
        bidAmount: 15000,
        campaignFund: 150000,
        status: true,
        town: 'Cracow',
        radius: 150
      },
      {
        id: 2,
        name: 'New Years Eve Accessories',
        keyWords: 'New Yesr Eve Accessories',
        bidAmount: 25000,
        campaignFund: 250000,
        status: false,
        town: 'New York',
        radius: 100
      },
      {
        id: 3,
        name: 'Wedding Party flowers',
        keyWords: 'Wedding Party flowers',
        bidAmount: 28000,
        campaignFund: 290000,
        status: true,
        town: 'London',
        radius: 300
      }];
    return { listEl };
  }
  genId(listEl: Elem[]): number {
    return listEl.length > 0 ? Math.max(...listEl.map(el => el.id)) + 1 : 11;
  }
}