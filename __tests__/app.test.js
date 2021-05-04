import app from '../lib/app.js';
import supertest from 'supertest';
import client from '../lib/client.js';
import { execSync } from 'child_process';

const request = supertest(app);

describe('API Routes', () => {

  beforeAll(() => {
    execSync('npm run setup-db');
  });

  afterAll(async () => {
    return client.end();
  });

  const expectedDogs = [
    {
      id: expect.any(Number),
      name: 'Beethoven',
      type: 'St Bernard',
      media: 'Beethoven',
      year: 1992,
      isAnimated: false
    },
    {
      id: expect.any(Number),
      name: 'Benji',
      type: 'Mutt',
      media: 'Benji',
      year: 1974,
      isAnimated: false
    },
    {
      id: expect.any(Number),
      name: 'Rin Tin Tin',
      type: 'German Shepherd',
      media: 'The Adventures of Rin Tin Tin',
      year: 1954,
      isAnimated: false
    },
    {
      id: expect.any(Number),
      name: 'Hachiko',
      type: 'Akita',
      media: 'Hachi: A Dog\'s Tale',
      year: 2009,
      isAnimated: false
    },
    {
      id: expect.any(Number),
      name: 'K.K. Slider',
      type: 'Jack Russell Terrier',
      media: 'Animal Crossing',
      year: 2001,
      isAnimated: true
    },
    {
      id: expect.any(Number),
      name: 'Goofy',
      type: 'Coonhound',
      media: 'Mickey\'s Revue',
      year: 1932,
      isAnimated: true
    },
    {
      id: expect.any(Number),
      name: 'Bolt',
      type: 'German Shepherd',
      media: 'Bolt',
      year: 2008,
      isAnimated: true
    },
    {
      id: expect.any(Number),
      name: 'Pit Bull',
      type: 'Pit Bull',
      media: 'John Wick',
      year: 2014,
      isAnimated: false
    },
    {
      id: expect.any(Number),
      name: 'Slinky',
      type: 'Dachshund',
      media: 'Toy Story',
      year: 1995,
      isAnimated: true
    },
    {
      id: expect.any(Number),
      name: 'Lady',
      type: 'Cocker Spaniel',
      media: 'Lady and the Tramp',
      year: 1995,
      isAnimated: true
    },
    {
      id: expect.any(Number),
      name: 'Tramp',
      type: 'Irish Terrier',
      media: 'Lady and the Tramp',
      year: 1995,
      isAnimated: true
    },
    {
      id: expect.any(Number),
      name: 'Lassie',
      type: 'Rough Collie',
      media: 'Lassie Come Home',
      year: 1943,
      isAnimated: true
    },
    {
      id: expect.any(Number),
      name: 'Snoopy',
      type: 'Beagle',
      media: 'Peanuts',
      year: 1950,
      isAnimated: true
    },
    {
      id: expect.any(Number),
      name: 'Toto',
      type: 'Cairn Terrier',
      media: 'The Wizard of Oz',
      year: 1939,
      isAnimated: false
    },
    {
      id: expect.any(Number),
      name: 'Blue',
      type: 'Bull Terrier',
      media: 'Blue\'s Clues',
      year: 1996,
      isAnimated: true
    },
    {
      id: expect.any(Number),
      name: 'Wishbone',
      type: 'Jack Russell Terrier',
      media: 'Wishbone',
      year: 1995,
      isAnimated: false
    },
    {
      id: expect.any(Number),
      name: 'Buddy',
      type: 'Golden Retriever',
      media: 'Air Bud',
      year: 1997,
      isAnimated: false
    },
    {
      id: expect.any(Number),
      name: 'Dug',
      type: 'Golden Retriever',
      media: 'Up',
      year: 2009,
      isAnimated: true
    },
    {
      id: expect.any(Number),
      name: 'Marley',
      type: 'Labrador Retriever',
      media: 'Marley & Me',
      year: 2008,
      isAnimated: false
    },
    {
      id: expect.any(Number),
      name: 'Scooby-Doo',
      type: 'Great Dane',
      media: 'Scooby-Doo Where Are You!',
      year: 1969,
      isAnimated: true
    },
    {
      id: expect.any(Number),
      name: 'Santa\'s Little Helper',
      type: 'Greyhound',
      media: 'The Simpsons',
      year: 1989,
      isAnimated: true
    },
  ];

  // If a GET request is made to /api/cats, does:
  // 1) the server respond with status of 200
  // 2) the body match the expected API data?
  it('GET /api/dogs', async () => {
    // act - make the request
    const response = await request.get('/api/dogs');

    // was response OK (200)?
    expect(response.status).toBe(200);

    // did it return the data we expected?
    expect(response.body).toEqual(expectedDogs);

  });

  // If a GET request is made to /api/cats/:id, does:
  // 1) the server respond with status of 200
  // 2) the body match the expected API data for the cat with that id?
  test('GET /api/dogs/:id', async () => {
    const response = await request.get('/api/dogs/2');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedDogs[1]);
  });
});