import '@spcy/lib.dev.tasty';
import { Seed } from '../src/seed';

test('Seed model', () => {
  expect(Seed).toMatchTastyShot('icons seed');
});
