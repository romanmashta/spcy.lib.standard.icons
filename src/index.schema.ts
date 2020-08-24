/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as r from '@spcy/lib.core.reflection';
import { IndexModule as IconsIndexSchemaModule, Types as IconsIndexSchemaTypes } from './icons/index.schema';

export const IndexModule: r.Module = {
  $id: 'lib.standard.icons',
  $defs: {
    ...IconsIndexSchemaModule.$defs
  }
};

export const Types = {
  ...IconsIndexSchemaTypes
};
