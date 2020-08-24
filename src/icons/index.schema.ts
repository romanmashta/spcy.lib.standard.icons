/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as r from '@spcy/lib.core.reflection';
import { IconModule, Types as IconTypes } from './icon.schema';

export const IndexModule: r.Module = {
  $id: 'lib.standard.icons',
  $defs: {
    ...IconModule.$defs
  }
};

export const Types = {
  ...IconTypes
};
