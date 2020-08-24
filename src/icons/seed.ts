import * as Core from '@spcy/lib.standard.core';
import { Types } from '../index.schema';
import { Icons as Material } from './material.seed';

const collections = Core.createSet(Core.Seed.collections.collections, {
  icons: Core.collection('Icons', Types.Icon)
});

const icons = Core.createSet(collections.icons, Material);

export const Seed = {
  collections,
  icons
};
