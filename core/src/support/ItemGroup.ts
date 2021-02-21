import { assertDefined } from '../assert';
import type Item from '../Item';
import type ItemMerger from '../ItemMerger';

export default class ItemGroup {
  top: Item;
  elements: Item[];

  constructor(top: Item, items: Item[] = []) {
    this.top = top;
    this.elements = items;
  }

  hasMany(): boolean {
    return this.elements.length > 0;
  }
}