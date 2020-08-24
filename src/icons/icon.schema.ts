/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as r from '@spcy/lib.core.reflection';
import * as m from './icon.model';

const IconsetType: r.TypeInfo = {
  $id: 'Iconset',
  $package: 'lib.standard.icons',
  oneOf: [
    {
      const: 'Material'
    },
    {
      const: 'FontAwesome'
    }
  ]
};

const Iconset: r.Prototype<m.Iconset> = {
  ref: { $ref: IconsetType.$id!, $refPackage: IconsetType.$package! },
  typeInfo: IconsetType
};

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
      $ref: 'Iconset',
      $refPackage: 'lib.standard.icons'
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
    Iconset: IconsetType,
    Icon: IconType
  }
};

export const Types = {
  Iconset,
  Icon
};
