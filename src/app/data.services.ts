//src/app/data.services.ts

import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    return {
      items: [
        {
          id: 1,
          title: 'Drohne XL',
          description: 'Penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
          picture: 'https://ocdn.eu/pulscms-transforms/1/UC-ktkpTURBXy9mOTgyZmViN2YzNjBmMzZiNzcyODJiYTRjNDRkMDU3ZC5qcGeSlQMAAM0JrM0FcJMFzQNrzQHb',
          category: 'Tech',
          condition: 'neuwertig',
          messages: 'Fragen an den Anbieter...',
          owner: 'Ben',
          postalCode: 7000
        },
        {
          id: 2,
          title: 'Strohhut',
          description: 'Laoreet aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.',
          picture: 'https://www.par71.de/media/image/05/7e/eb/625000_greg_norman_signature_strohhut_b_01gsQuZTkDMr6FJ.jpg',
          category: 'Kleider',
          condition: 'gebraucht',
          messages: 'Fragen an den Anbieter...',
          owner: 'Andy',
          postalCode: 6000
        },
        {
          id: 3,
          title: 'Mountain Bike',
          description: 'Arcun enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. ',
          picture: 'https://cached-media.tsri.ch/Hgetk58BSpxagDm/t/w_1200/5942649639_fd86a80361_o.jpg',
          category: 'Bike',
          condition: 'gebraucht',
          messages: 'Fragen an den Anbieter...',
          owner: 'Alex',
          postalCode: 5706,
        }
      ]
    };
  }
}
