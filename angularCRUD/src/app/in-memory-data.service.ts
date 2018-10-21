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
        name: 'Robert',
        keyWords: 'wind',
        bidAmount: 15000,
        campaignFund: 150000,
        status: true,
        town: 'Kraków',
        radius: 150
      },
      {
        id: 2,
        name: 'Magda',
        keyWords: 'sun',
        bidAmount: 25000,
        campaignFund: 250000,
        status: false,
        town: 'Krosno',
        radius: 100
      },
      {
        id: 3,
        name: 'Mikołaj',
        keyWords: 'snow',
        bidAmount: 28000,
        campaignFund: 290000,
        status: true,
        town: 'Szczecin',
        radius: 300
      },
      {
        id: 4,
        name: 'Zenek',
        keyWords: 'snow',
        bidAmount: 28000,
        campaignFund: 290000,
        status: true,
        town: 'Szczecin',
        radius: 300
      }];
    return { listEl };
  }
  genId(listEl: Elem[]): number {
    return listEl.length > 0 ? Math.max(...listEl.map(el => el.id)) + 1 : 11;
  }
}