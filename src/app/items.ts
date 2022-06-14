export interface Item {
  id: number;
  title: string;
  description: string;
  picture: string;
  category: string;
  condition: string;
  messages: string;
  owner: string;
  postalCode: number;
}

export const items = [
  {
    id: 1,
    title: 'Drohne XL',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
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
    description: 'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.',
    picture: 'https://i.etsystatic.com/23210883/r/il/26bb7f/3111814620/il_fullxfull.3111814620_9g99.jpg',
    category: 'Kleider',
    condition: 'gebraucht',
    messages: 'Fragen an den Anbieter...',
    owner: 'Andy',
    postalCode: 6000
  },
  {
    id: 3,
    title: 'Bike Giant',
    description: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
    picture: 'https://cached-media.tsri.ch/Hgetk58BSpxagDm/t/w_1200/5942649639_fd86a80361_o.jpg',
    category: 'Bike',
    condition: 'gebraucht',
    messages: 'Fragen an den Anbieter...',
    owner: 'Alex',
    postalCode: 5706,
  }
];
