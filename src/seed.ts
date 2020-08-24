import { seedModule } from '@spcy/lib.core.reflection';
import { IndexModule } from './index.schema';
import { Seed as Icons } from './icons/seed';

const collections = { ...Icons.collections };

export const Seed = {
  ...seedModule(IndexModule),
  ...Icons,
  collections
};
