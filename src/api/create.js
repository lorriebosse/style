import { css, isArr, isFn, isObj, toPairs } from "../index.js"

/**
  Creates a JavaScript object containing keys as identifiers and class
  names as values. If the value is a function, it is assigned to the
  value as is, without executing.

  @typedef {import ("..").PlainObject} PlainObject

  @param {PlainObject} params
  - Plain JavaScript object with keys containing CSS styles.

  @returns {PlainObject}
    Plain JavaScript object with keys as identifiers and class names or
    functions as values.
 */

export function create (params = {}) {
  return toPairs(params).reduce(
    /**
      Assigns resulting class names or functions to original keys.

      @param {PlainObject} styles
      - Object with keys as strings and values as class names or functions.

      @param {[string, PlainObject | PlainObject[]]} style
      - Key/value pair from original input.

      @returns {PlainObject}
        Object with keys as strings and values as class names or functions.
     */

    function (styles, style) {
      const property = style[0]
      const value = style[1]

      if (isFn(value)) {
        styles[property] = value
      }

      if (isArr(value) || isObj(value)) {
        styles[property] = css(value)
      }

      return styles
    },
    {}
  )
}
