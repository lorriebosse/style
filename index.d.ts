/**
  Checks if `value` is classified as an `Array` object.

  @param {any} value
  - The value to check.

  @returns {value is any[]}
  Returns `true` if `value` is an array, else `false`.
 */

export function isArr(value: any): value is any[];

/**
  Checks if `value` is classified as an `Array` object.

  @param {any} value
  - The value to check.

  @returns {value is boolean}
  Returns `true` if `value` is an array, else `false`.
 */

export function isBool(value: any): value is boolean;

/**
  Checks if `value` is classified as a `Function` object.

  @param {any} value
  - The value to check.

  @returns {value is AnyFunction}
  Returns `true` if `value` is a function, else `false`.
 */

export function isFn(value: any): value is AnyFunction;

/**
  Checks if `value` is a valid JSON object.

  @param {any} value
  - The value to check.

  @returns {boolean}
  Returns `true` if `value` is a valid JSON object, else `false`.
 */

export function isJSON(value: any): boolean;

/**
  Checks if `value` is `null`.

  @param {any} value
  - The value to check.

  @returns {value is null}
  Returns `true` if `value` is `null`, else `false`.
 */

export function isNull(value: any): value is null;

/**
  Checks if `value` is classified as a `Number` primitive or object.

  @param {any} value
  - The value to check.

  @returns {value is number}
  Returns `true` if `value` is a number, else `false`.
 */

export function isNum(value: any): value is number;

/**
  Checks if `value` is the language type of `Object`.

  @param {any} value
  - The value to check.

  @returns {value is PlainObject}
  Returns `true` if `value` is an object, else `false`.
 */

export function isObj(value: any): value is PlainObject;

/**
  Checks if `value` is classified as a `String` primitive or object.

  @param {any} value
  - The value to check.

  @returns {value is string}
  Returns `true` if `value` is a string, else `false`.
 */

export function isStr(value: any): value is string;

/**
  Checks if `value` is classified as a `Symbol` primitive or object.

  @param {any} value
  - The value to check.

  @returns {value is symbol}
  Returns `true` if `value` is a symbol, else `false`.
 */

export function isSym(value: any): value is symbol;

/**
  Checks if `value` is `undefined`.

  @param {any} [value]
  - The value to check.

  @returns {value is undefined}
  Returns `true` if `value` is `undefined`, else `false`.
 */

export function isUndef(value?: any): value is undefined;

/**
  Converts `string` to camel case.

  @param {string} [value]
  - The string to convert.

  @returns {string}
  The camel cased string.
 */

export function camelCase(value?: string | undefined): string;

/**
  Creates a debounced function that delays invoking `fn` until after `wait`
  milliseconds have elapsed since the last time the debounced function was
  invoked. The `fn` is invoked with the last arguments provided to the
  debounced function. Subsequent calls to the debounced function return the
  result of the last `fn` invocation.

  @param {Function} fn
  - The function to debounce.

  @param {number} wait
  - The number of milliseconds to delay.

  @returns {Function}
  The new debounced function.
 */

export function debounce(fn: Function, wait?: number): Function;

/**
  Gets the value at path of object. If the resolved value is undefined,
  the defaultValue is returned in its place.

  @param {object} object
  - The object to query.

  @param {string | string[]} path
  - The path of the property to get.

  @param {any} [defaultValue]
  - The value returned for undefined resolved values.

  @returns {any}
  Returns the resolved value.
 */

export function get(
  object: object,
  path: string | string[],
  defaultValue?: any
): any;

export type AnyFunction = (arg0: any[]) => any;

export type PlainObject = Record<string | number | symbol, any>;
