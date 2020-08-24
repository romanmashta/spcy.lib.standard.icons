/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as r from '@spcy/lib.core.reflection';
import * as m from './icon.model';

const IconType: r.TypeInfo = {
  $id: 'Icon',
  $package: 'lib.standard.icons',
  type: 'object',
  required: ['name', 'type', 'category', 'tags'],
  properties: {
    name: {
      type: 'string'
    },
    type: {
      type: 'string'
    },
    category: {
      type: 'string'
    },
    tags: {
      type: 'array',
      items: {
        type: 'string'
      }
    }
  }
};

const Icon: r.Prototype<m.Icon> = {
  ref: { $ref: IconType.$id!, $refPackage: IconType.$package! },
  typeInfo: IconType
};

export const IconModule: r.Module = {
  $id: 'lib.standard.icons',
  $defs: {
    Icon: IconType
  }
};

export const Types = {
  Icon
};
