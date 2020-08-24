export type Iconset = 'Material' | 'FontAwesome';

export interface Icon {
  name: string;
  type: Iconset;
  category: string;
  tags: string[];
}
