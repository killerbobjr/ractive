import { Ractive } from 'src/Ractive/Ractive';
import Fragment from 'view/Fragment';
import Component from 'view/items/Component';

import { Macro } from './Macro';
import { ParseFn } from './Parse';

/**
 * A Ractive keypath string which contains a navigable set of keys divided by dots.
 *
 * @example foo.bar
 * @example foo.bar.*
 * @example foo.1.*
 *
 * TODO add some documentation for keypath and example for keypath
 */
export type Keypath = string;

// TODO convert in unknown?
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ValueMap = Record<string, any>;

export type Data = ValueMap;
export type DataFn<T extends Ractive = Ractive> = (this: T) => ValueMap;
export type DataGetFn = (keypath: string) => any;

export type Partial = string | unknown[] | ParseFn | Macro;

export type PartialMap = Record<string, Partial>;

export type Target = string | HTMLElement | ArrayLike<any>;

export interface Meta {
  ractive: Ractive;
  instance: Ractive;
  name: string;
  nameOption?: string;
  target: string | false;
  up?: Fragment;
  external?: boolean;
  anchor?: Component;
  bubble: () => void;
  findNextNode: () => any;
}

export interface ArrayPushPromise extends Promise<number> {
  /** The new length of the target array. */
  result: number;
}

export interface ArrayPopPromise extends Promise<any> {
  /** The value removed from the target array. */
  result: any;
}

export interface ArraySplicePromise extends Promise<any[]> {
  result: any[];
}

export type CssFn = (data: DataGetFn) => string;

export type PluginExtend = (PluginArgsExtend) => void;
export type PluginInstance = (PluginArgsInstance) => void;
