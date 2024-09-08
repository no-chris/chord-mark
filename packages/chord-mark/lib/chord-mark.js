(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["chord-mark"] = factory();
	else
		root["chord-mark"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 1651:
/***/ (function(module) {

/*! @license DOMPurify 3.1.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.6/LICENSE */

(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  const {
    entries,
    setPrototypeOf,
    isFrozen,
    getPrototypeOf,
    getOwnPropertyDescriptor
  } = Object;
  let {
    freeze,
    seal,
    create
  } = Object; // eslint-disable-line import/no-mutable-exports
  let {
    apply,
    construct
  } = typeof Reflect !== 'undefined' && Reflect;
  if (!freeze) {
    freeze = function freeze(x) {
      return x;
    };
  }
  if (!seal) {
    seal = function seal(x) {
      return x;
    };
  }
  if (!apply) {
    apply = function apply(fun, thisValue, args) {
      return fun.apply(thisValue, args);
    };
  }
  if (!construct) {
    construct = function construct(Func, args) {
      return new Func(...args);
    };
  }
  const arrayForEach = unapply(Array.prototype.forEach);
  const arrayPop = unapply(Array.prototype.pop);
  const arrayPush = unapply(Array.prototype.push);
  const stringToLowerCase = unapply(String.prototype.toLowerCase);
  const stringToString = unapply(String.prototype.toString);
  const stringMatch = unapply(String.prototype.match);
  const stringReplace = unapply(String.prototype.replace);
  const stringIndexOf = unapply(String.prototype.indexOf);
  const stringTrim = unapply(String.prototype.trim);
  const objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
  const regExpTest = unapply(RegExp.prototype.test);
  const typeErrorCreate = unconstruct(TypeError);

  /**
   * Creates a new function that calls the given function with a specified thisArg and arguments.
   *
   * @param {Function} func - The function to be wrapped and called.
   * @returns {Function} A new function that calls the given function with a specified thisArg and arguments.
   */
  function unapply(func) {
    return function (thisArg) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return apply(func, thisArg, args);
    };
  }

  /**
   * Creates a new function that constructs an instance of the given constructor function with the provided arguments.
   *
   * @param {Function} func - The constructor function to be wrapped and called.
   * @returns {Function} A new function that constructs an instance of the given constructor function with the provided arguments.
   */
  function unconstruct(func) {
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return construct(func, args);
    };
  }

  /**
   * Add properties to a lookup table
   *
   * @param {Object} set - The set to which elements will be added.
   * @param {Array} array - The array containing elements to be added to the set.
   * @param {Function} transformCaseFunc - An optional function to transform the case of each element before adding to the set.
   * @returns {Object} The modified set with added elements.
   */
  function addToSet(set, array) {
    let transformCaseFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : stringToLowerCase;
    if (setPrototypeOf) {
      // Make 'in' and truthy checks like Boolean(set.constructor)
      // independent of any properties defined on Object.prototype.
      // Prevent prototype setters from intercepting set as a this value.
      setPrototypeOf(set, null);
    }
    let l = array.length;
    while (l--) {
      let element = array[l];
      if (typeof element === 'string') {
        const lcElement = transformCaseFunc(element);
        if (lcElement !== element) {
          // Config presets (e.g. tags.js, attrs.js) are immutable.
          if (!isFrozen(array)) {
            array[l] = lcElement;
          }
          element = lcElement;
        }
      }
      set[element] = true;
    }
    return set;
  }

  /**
   * Clean up an array to harden against CSPP
   *
   * @param {Array} array - The array to be cleaned.
   * @returns {Array} The cleaned version of the array
   */
  function cleanArray(array) {
    for (let index = 0; index < array.length; index++) {
      const isPropertyExist = objectHasOwnProperty(array, index);
      if (!isPropertyExist) {
        array[index] = null;
      }
    }
    return array;
  }

  /**
   * Shallow clone an object
   *
   * @param {Object} object - The object to be cloned.
   * @returns {Object} A new object that copies the original.
   */
  function clone(object) {
    const newObject = create(null);
    for (const [property, value] of entries(object)) {
      const isPropertyExist = objectHasOwnProperty(object, property);
      if (isPropertyExist) {
        if (Array.isArray(value)) {
          newObject[property] = cleanArray(value);
        } else if (value && typeof value === 'object' && value.constructor === Object) {
          newObject[property] = clone(value);
        } else {
          newObject[property] = value;
        }
      }
    }
    return newObject;
  }

  /**
   * This method automatically checks if the prop is function or getter and behaves accordingly.
   *
   * @param {Object} object - The object to look up the getter function in its prototype chain.
   * @param {String} prop - The property name for which to find the getter function.
   * @returns {Function} The getter function found in the prototype chain or a fallback function.
   */
  function lookupGetter(object, prop) {
    while (object !== null) {
      const desc = getOwnPropertyDescriptor(object, prop);
      if (desc) {
        if (desc.get) {
          return unapply(desc.get);
        }
        if (typeof desc.value === 'function') {
          return unapply(desc.value);
        }
      }
      object = getPrototypeOf(object);
    }
    function fallbackValue() {
      return null;
    }
    return fallbackValue;
  }

  const html$1 = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']);

  // SVG
  const svg$1 = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'view', 'vkern']);
  const svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feDropShadow', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']);

  // List of SVG elements that are disallowed by default.
  // We still need to know them so that we can do namespace
  // checks properly in case one wants to add them to
  // allow-list.
  const svgDisallowed = freeze(['animate', 'color-profile', 'cursor', 'discard', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignobject', 'hatch', 'hatchpath', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'missing-glyph', 'script', 'set', 'solidcolor', 'unknown', 'use']);
  const mathMl$1 = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover', 'mprescripts']);

  // Similarly to SVG, we want to know all MathML elements,
  // even those that we disallow by default.
  const mathMlDisallowed = freeze(['maction', 'maligngroup', 'malignmark', 'mlongdiv', 'mscarries', 'mscarry', 'msgroup', 'mstack', 'msline', 'msrow', 'semantics', 'annotation', 'annotation-xml', 'mprescripts', 'none']);
  const text = freeze(['#text']);

  const html = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'nonce', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'popover', 'popovertarget', 'popovertargetaction', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'wrap', 'xmlns', 'slot']);
  const svg = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clippathunits', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'systemlanguage', 'tabindex', 'targetx', 'targety', 'transform', 'transform-origin', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);
  const mathMl = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);
  const xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

  // eslint-disable-next-line unicorn/better-regex
  const MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode
  const ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
  const TMPLIT_EXPR = seal(/\${[\w\W]*}/gm);
  const DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape
  const ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape
  const IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
  );
  const IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
  const ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
  );
  const DOCTYPE_NAME = seal(/^html$/i);
  const CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);

  var EXPRESSIONS = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MUSTACHE_EXPR: MUSTACHE_EXPR,
    ERB_EXPR: ERB_EXPR,
    TMPLIT_EXPR: TMPLIT_EXPR,
    DATA_ATTR: DATA_ATTR,
    ARIA_ATTR: ARIA_ATTR,
    IS_ALLOWED_URI: IS_ALLOWED_URI,
    IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA,
    ATTR_WHITESPACE: ATTR_WHITESPACE,
    DOCTYPE_NAME: DOCTYPE_NAME,
    CUSTOM_ELEMENT: CUSTOM_ELEMENT
  });

  // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
  const NODE_TYPE = {
    element: 1,
    attribute: 2,
    text: 3,
    cdataSection: 4,
    entityReference: 5,
    // Deprecated
    entityNode: 6,
    // Deprecated
    progressingInstruction: 7,
    comment: 8,
    document: 9,
    documentType: 10,
    documentFragment: 11,
    notation: 12 // Deprecated
  };
  const getGlobal = function getGlobal() {
    return typeof window === 'undefined' ? null : window;
  };

  /**
   * Creates a no-op policy for internal use only.
   * Don't export this function outside this module!
   * @param {TrustedTypePolicyFactory} trustedTypes The policy factory.
   * @param {HTMLScriptElement} purifyHostElement The Script element used to load DOMPurify (to determine policy name suffix).
   * @return {TrustedTypePolicy} The policy created (or null, if Trusted Types
   * are not supported or creating the policy failed).
   */
  const _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, purifyHostElement) {
    if (typeof trustedTypes !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
      return null;
    }

    // Allow the callers to control the unique policy name
    // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
    // Policy creation with duplicate names throws in Trusted Types.
    let suffix = null;
    const ATTR_NAME = 'data-tt-policy-suffix';
    if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
      suffix = purifyHostElement.getAttribute(ATTR_NAME);
    }
    const policyName = 'dompurify' + (suffix ? '#' + suffix : '');
    try {
      return trustedTypes.createPolicy(policyName, {
        createHTML(html) {
          return html;
        },
        createScriptURL(scriptUrl) {
          return scriptUrl;
        }
      });
    } catch (_) {
      // Policy creation failed (most likely another DOMPurify script has
      // already run). Skip creating the policy, as this will only cause errors
      // if TT are enforced.
      console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
      return null;
    }
  };
  function createDOMPurify() {
    let window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();
    const DOMPurify = root => createDOMPurify(root);

    /**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */
    DOMPurify.version = '3.1.6';

    /**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */
    DOMPurify.removed = [];
    if (!window || !window.document || window.document.nodeType !== NODE_TYPE.document) {
      // Not running in a browser, provide a factory function
      // so that you can pass your own Window
      DOMPurify.isSupported = false;
      return DOMPurify;
    }
    let {
      document
    } = window;
    const originalDocument = document;
    const currentScript = originalDocument.currentScript;
    const {
      DocumentFragment,
      HTMLTemplateElement,
      Node,
      Element,
      NodeFilter,
      NamedNodeMap = window.NamedNodeMap || window.MozNamedAttrMap,
      HTMLFormElement,
      DOMParser,
      trustedTypes
    } = window;
    const ElementPrototype = Element.prototype;
    const cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
    const remove = lookupGetter(ElementPrototype, 'remove');
    const getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
    const getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
    const getParentNode = lookupGetter(ElementPrototype, 'parentNode');

    // As per issue #47, the web-components registry is inherited by a
    // new document created via createHTMLDocument. As per the spec
    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
    // a new empty registry is used when creating a template contents owner
    // document, so we use that as our parent document to ensure nothing
    // is inherited.
    if (typeof HTMLTemplateElement === 'function') {
      const template = document.createElement('template');
      if (template.content && template.content.ownerDocument) {
        document = template.content.ownerDocument;
      }
    }
    let trustedTypesPolicy;
    let emptyHTML = '';
    const {
      implementation,
      createNodeIterator,
      createDocumentFragment,
      getElementsByTagName
    } = document;
    const {
      importNode
    } = originalDocument;
    let hooks = {};

    /**
     * Expose whether this browser supports running the full DOMPurify.
     */
    DOMPurify.isSupported = typeof entries === 'function' && typeof getParentNode === 'function' && implementation && implementation.createHTMLDocument !== undefined;
    const {
      MUSTACHE_EXPR,
      ERB_EXPR,
      TMPLIT_EXPR,
      DATA_ATTR,
      ARIA_ATTR,
      IS_SCRIPT_OR_DATA,
      ATTR_WHITESPACE,
      CUSTOM_ELEMENT
    } = EXPRESSIONS;
    let {
      IS_ALLOWED_URI: IS_ALLOWED_URI$1
    } = EXPRESSIONS;

    /**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */

    /* allowed element names */
    let ALLOWED_TAGS = null;
    const DEFAULT_ALLOWED_TAGS = addToSet({}, [...html$1, ...svg$1, ...svgFilters, ...mathMl$1, ...text]);

    /* Allowed attribute names */
    let ALLOWED_ATTR = null;
    const DEFAULT_ALLOWED_ATTR = addToSet({}, [...html, ...svg, ...mathMl, ...xml]);

    /*
     * Configure how DOMPUrify should handle custom elements and their attributes as well as customized built-in elements.
     * @property {RegExp|Function|null} tagNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any custom elements)
     * @property {RegExp|Function|null} attributeNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any attributes not on the allow list)
     * @property {boolean} allowCustomizedBuiltInElements allow custom elements derived from built-ins if they pass CUSTOM_ELEMENT_HANDLING.tagNameCheck. Default: `false`.
     */
    let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
      tagNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      attributeNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: false
      }
    }));

    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */
    let FORBID_TAGS = null;

    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */
    let FORBID_ATTR = null;

    /* Decide if ARIA attributes are okay */
    let ALLOW_ARIA_ATTR = true;

    /* Decide if custom data attributes are okay */
    let ALLOW_DATA_ATTR = true;

    /* Decide if unknown protocols are okay */
    let ALLOW_UNKNOWN_PROTOCOLS = false;

    /* Decide if self-closing tags in attributes are allowed.
     * Usually removed due to a mXSS issue in jQuery 3.0 */
    let ALLOW_SELF_CLOSE_IN_ATTR = true;

    /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */
    let SAFE_FOR_TEMPLATES = false;

    /* Output should be safe even for XML used within HTML and alike.
     * This means, DOMPurify removes comments when containing risky content.
     */
    let SAFE_FOR_XML = true;

    /* Decide if document with <html>... should be returned */
    let WHOLE_DOCUMENT = false;

    /* Track whether config is already set on this instance of DOMPurify. */
    let SET_CONFIG = false;

    /* Decide if all elements (e.g. style, script) must be children of
     * document.body. By default, browsers might move them to document.head */
    let FORCE_BODY = false;

    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
     * string (or a TrustedHTML object if Trusted Types are supported).
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */
    let RETURN_DOM = false;

    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
     * string  (or a TrustedHTML object if Trusted Types are supported) */
    let RETURN_DOM_FRAGMENT = false;

    /* Try to return a Trusted Type object instead of a string, return a string in
     * case Trusted Types are not supported  */
    let RETURN_TRUSTED_TYPE = false;

    /* Output should be free from DOM clobbering attacks?
     * This sanitizes markups named with colliding, clobberable built-in DOM APIs.
     */
    let SANITIZE_DOM = true;

    /* Achieve full DOM Clobbering protection by isolating the namespace of named
     * properties and JS variables, mitigating attacks that abuse the HTML/DOM spec rules.
     *
     * HTML/DOM spec rules that enable DOM Clobbering:
     *   - Named Access on Window (§7.3.3)
     *   - DOM Tree Accessors (§3.1.5)
     *   - Form Element Parent-Child Relations (§4.10.3)
     *   - Iframe srcdoc / Nested WindowProxies (§4.8.5)
     *   - HTMLCollection (§4.2.10.2)
     *
     * Namespace isolation is implemented by prefixing `id` and `name` attributes
     * with a constant string, i.e., `user-content-`
     */
    let SANITIZE_NAMED_PROPS = false;
    const SANITIZE_NAMED_PROPS_PREFIX = 'user-content-';

    /* Keep element content when removing element? */
    let KEEP_CONTENT = true;

    /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
     * of importing it into a new Document and returning a sanitized copy */
    let IN_PLACE = false;

    /* Allow usage of profiles like html, svg and mathMl */
    let USE_PROFILES = {};

    /* Tags to ignore content of when KEEP_CONTENT is true */
    let FORBID_CONTENTS = null;
    const DEFAULT_FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'noscript', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);

    /* Tags that are safe for data: URIs */
    let DATA_URI_TAGS = null;
    const DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);

    /* Attributes safe for values like "javascript:" */
    let URI_SAFE_ATTRIBUTES = null;
    const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'role', 'summary', 'title', 'value', 'style', 'xmlns']);
    const MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
    const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    const HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
    /* Document namespace */
    let NAMESPACE = HTML_NAMESPACE;
    let IS_EMPTY_INPUT = false;

    /* Allowed XHTML+XML namespaces */
    let ALLOWED_NAMESPACES = null;
    const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);

    /* Parsing of strict XHTML documents */
    let PARSER_MEDIA_TYPE = null;
    const SUPPORTED_PARSER_MEDIA_TYPES = ['application/xhtml+xml', 'text/html'];
    const DEFAULT_PARSER_MEDIA_TYPE = 'text/html';
    let transformCaseFunc = null;

    /* Keep a reference to config to pass to hooks */
    let CONFIG = null;

    /* Ideally, do not touch anything below this line */
    /* ______________________________________________ */

    const formElement = document.createElement('form');
    const isRegexOrFunction = function isRegexOrFunction(testValue) {
      return testValue instanceof RegExp || testValue instanceof Function;
    };

    /**
     * _parseConfig
     *
     * @param  {Object} cfg optional config literal
     */
    // eslint-disable-next-line complexity
    const _parseConfig = function _parseConfig() {
      let cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (CONFIG && CONFIG === cfg) {
        return;
      }

      /* Shield configuration object from tampering */
      if (!cfg || typeof cfg !== 'object') {
        cfg = {};
      }

      /* Shield configuration object from prototype pollution */
      cfg = clone(cfg);
      PARSER_MEDIA_TYPE =
      // eslint-disable-next-line unicorn/prefer-includes
      SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;

      // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.
      transformCaseFunc = PARSER_MEDIA_TYPE === 'application/xhtml+xml' ? stringToString : stringToLowerCase;

      /* Set configuration parameters */
      ALLOWED_TAGS = objectHasOwnProperty(cfg, 'ALLOWED_TAGS') ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
      ALLOWED_ATTR = objectHasOwnProperty(cfg, 'ALLOWED_ATTR') ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
      ALLOWED_NAMESPACES = objectHasOwnProperty(cfg, 'ALLOWED_NAMESPACES') ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
      URI_SAFE_ATTRIBUTES = objectHasOwnProperty(cfg, 'ADD_URI_SAFE_ATTR') ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES),
      // eslint-disable-line indent
      cfg.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      transformCaseFunc // eslint-disable-line indent
      ) // eslint-disable-line indent
      : DEFAULT_URI_SAFE_ATTRIBUTES;
      DATA_URI_TAGS = objectHasOwnProperty(cfg, 'ADD_DATA_URI_TAGS') ? addToSet(clone(DEFAULT_DATA_URI_TAGS),
      // eslint-disable-line indent
      cfg.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      transformCaseFunc // eslint-disable-line indent
      ) // eslint-disable-line indent
      : DEFAULT_DATA_URI_TAGS;
      FORBID_CONTENTS = objectHasOwnProperty(cfg, 'FORBID_CONTENTS') ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
      FORBID_TAGS = objectHasOwnProperty(cfg, 'FORBID_TAGS') ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
      FORBID_ATTR = objectHasOwnProperty(cfg, 'FORBID_ATTR') ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
      USE_PROFILES = objectHasOwnProperty(cfg, 'USE_PROFILES') ? cfg.USE_PROFILES : false;
      ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
      ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
      ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
      ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false; // Default true
      SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
      SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false; // Default true
      WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
      RETURN_DOM = cfg.RETURN_DOM || false; // Default false
      RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
      RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false
      FORCE_BODY = cfg.FORCE_BODY || false; // Default false
      SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
      SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false; // Default false
      KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true
      IN_PLACE = cfg.IN_PLACE || false; // Default false
      IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
      NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
      CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
      }
      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
      }
      if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === 'boolean') {
        CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
      }
      if (SAFE_FOR_TEMPLATES) {
        ALLOW_DATA_ATTR = false;
      }
      if (RETURN_DOM_FRAGMENT) {
        RETURN_DOM = true;
      }

      /* Parse profile info */
      if (USE_PROFILES) {
        ALLOWED_TAGS = addToSet({}, text);
        ALLOWED_ATTR = [];
        if (USE_PROFILES.html === true) {
          addToSet(ALLOWED_TAGS, html$1);
          addToSet(ALLOWED_ATTR, html);
        }
        if (USE_PROFILES.svg === true) {
          addToSet(ALLOWED_TAGS, svg$1);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }
        if (USE_PROFILES.svgFilters === true) {
          addToSet(ALLOWED_TAGS, svgFilters);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }
        if (USE_PROFILES.mathMl === true) {
          addToSet(ALLOWED_TAGS, mathMl$1);
          addToSet(ALLOWED_ATTR, mathMl);
          addToSet(ALLOWED_ATTR, xml);
        }
      }

      /* Merge configuration parameters */
      if (cfg.ADD_TAGS) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
          ALLOWED_TAGS = clone(ALLOWED_TAGS);
        }
        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
      }
      if (cfg.ADD_ATTR) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
          ALLOWED_ATTR = clone(ALLOWED_ATTR);
        }
        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
      }
      if (cfg.ADD_URI_SAFE_ATTR) {
        addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
      }
      if (cfg.FORBID_CONTENTS) {
        if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
          FORBID_CONTENTS = clone(FORBID_CONTENTS);
        }
        addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
      }

      /* Add #text in case KEEP_CONTENT is set to true */
      if (KEEP_CONTENT) {
        ALLOWED_TAGS['#text'] = true;
      }

      /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */
      if (WHOLE_DOCUMENT) {
        addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
      }

      /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */
      if (ALLOWED_TAGS.table) {
        addToSet(ALLOWED_TAGS, ['tbody']);
        delete FORBID_TAGS.tbody;
      }
      if (cfg.TRUSTED_TYPES_POLICY) {
        if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== 'function') {
          throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        }
        if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== 'function') {
          throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        }

        // Overwrite existing TrustedTypes policy.
        trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;

        // Sign local variables required by `sanitize`.
        emptyHTML = trustedTypesPolicy.createHTML('');
      } else {
        // Uninitialized policy, attempt to initialize the internal dompurify policy.
        if (trustedTypesPolicy === undefined) {
          trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
        }

        // If creating the internal policy succeeded sign internal variables.
        if (trustedTypesPolicy !== null && typeof emptyHTML === 'string') {
          emptyHTML = trustedTypesPolicy.createHTML('');
        }
      }

      // Prevent further manipulation of configuration.
      // Not available in IE8, Safari 5, etc.
      if (freeze) {
        freeze(cfg);
      }
      CONFIG = cfg;
    };
    const MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ['mi', 'mo', 'mn', 'ms', 'mtext']);
    const HTML_INTEGRATION_POINTS = addToSet({}, ['foreignobject', 'annotation-xml']);

    // Certain elements are allowed in both SVG and HTML
    // namespace. We need to specify them explicitly
    // so that they don't get erroneously deleted from
    // HTML namespace.
    const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ['title', 'style', 'font', 'a', 'script']);

    /* Keep track of all possible SVG and MathML tags
     * so that we can perform the namespace checks
     * correctly. */
    const ALL_SVG_TAGS = addToSet({}, [...svg$1, ...svgFilters, ...svgDisallowed]);
    const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);

    /**
     * @param  {Element} element a DOM element whose namespace is being checked
     * @returns {boolean} Return false if the element has a
     *  namespace that a spec-compliant parser would never
     *  return. Return true otherwise.
     */
    const _checkValidNamespace = function _checkValidNamespace(element) {
      let parent = getParentNode(element);

      // In JSDOM, if we're inside shadow DOM, then parentNode
      // can be null. We just simulate parent in this case.
      if (!parent || !parent.tagName) {
        parent = {
          namespaceURI: NAMESPACE,
          tagName: 'template'
        };
      }
      const tagName = stringToLowerCase(element.tagName);
      const parentTagName = stringToLowerCase(parent.tagName);
      if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
        return false;
      }
      if (element.namespaceURI === SVG_NAMESPACE) {
        // The only way to switch from HTML namespace to SVG
        // is via <svg>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'svg';
        }

        // The only way to switch from MathML to SVG is via`
        // svg if parent is either <annotation-xml> or MathML
        // text integration points.
        if (parent.namespaceURI === MATHML_NAMESPACE) {
          return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
        }

        // We only allow elements that are defined in SVG
        // spec. All others are disallowed in SVG namespace.
        return Boolean(ALL_SVG_TAGS[tagName]);
      }
      if (element.namespaceURI === MATHML_NAMESPACE) {
        // The only way to switch from HTML namespace to MathML
        // is via <math>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'math';
        }

        // The only way to switch from SVG to MathML is via
        // <math> and HTML integration points
        if (parent.namespaceURI === SVG_NAMESPACE) {
          return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
        }

        // We only allow elements that are defined in MathML
        // spec. All others are disallowed in MathML namespace.
        return Boolean(ALL_MATHML_TAGS[tagName]);
      }
      if (element.namespaceURI === HTML_NAMESPACE) {
        // The only way to switch from SVG to HTML is via
        // HTML integration points, and from MathML to HTML
        // is via MathML text integration points
        if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }
        if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }

        // We disallow tags that are specific for MathML
        // or SVG and should never appear in HTML namespace
        return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
      }

      // For XHTML and XML documents that support custom namespaces
      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && ALLOWED_NAMESPACES[element.namespaceURI]) {
        return true;
      }

      // The code should never reach this place (this means
      // that the element somehow got namespace that is not
      // HTML, SVG, MathML or allowed via ALLOWED_NAMESPACES).
      // Return false just in case.
      return false;
    };

    /**
     * _forceRemove
     *
     * @param  {Node} node a DOM node
     */
    const _forceRemove = function _forceRemove(node) {
      arrayPush(DOMPurify.removed, {
        element: node
      });
      try {
        // eslint-disable-next-line unicorn/prefer-dom-node-remove
        getParentNode(node).removeChild(node);
      } catch (_) {
        remove(node);
      }
    };

    /**
     * _removeAttribute
     *
     * @param  {String} name an Attribute name
     * @param  {Node} node a DOM node
     */
    const _removeAttribute = function _removeAttribute(name, node) {
      try {
        arrayPush(DOMPurify.removed, {
          attribute: node.getAttributeNode(name),
          from: node
        });
      } catch (_) {
        arrayPush(DOMPurify.removed, {
          attribute: null,
          from: node
        });
      }
      node.removeAttribute(name);

      // We void attribute values for unremovable "is"" attributes
      if (name === 'is' && !ALLOWED_ATTR[name]) {
        if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
          try {
            _forceRemove(node);
          } catch (_) {}
        } else {
          try {
            node.setAttribute(name, '');
          } catch (_) {}
        }
      }
    };

    /**
     * _initDocument
     *
     * @param  {String} dirty a string of dirty markup
     * @return {Document} a DOM, filled with the dirty markup
     */
    const _initDocument = function _initDocument(dirty) {
      /* Create a HTML document */
      let doc = null;
      let leadingWhitespace = null;
      if (FORCE_BODY) {
        dirty = '<remove></remove>' + dirty;
      } else {
        /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
        const matches = stringMatch(dirty, /^[\r\n\t ]+/);
        leadingWhitespace = matches && matches[0];
      }
      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && NAMESPACE === HTML_NAMESPACE) {
        // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
        dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + '</body></html>';
      }
      const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
      /*
       * Use the DOMParser API by default, fallback later if needs be
       * DOMParser not work for svg when has multiple root element.
       */
      if (NAMESPACE === HTML_NAMESPACE) {
        try {
          doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
        } catch (_) {}
      }

      /* Use createHTMLDocument in case DOMParser is not available */
      if (!doc || !doc.documentElement) {
        doc = implementation.createDocument(NAMESPACE, 'template', null);
        try {
          doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
        } catch (_) {
          // Syntax error if dirtyPayload is invalid xml
        }
      }
      const body = doc.body || doc.documentElement;
      if (dirty && leadingWhitespace) {
        body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
      }

      /* Work on whole document or just its body */
      if (NAMESPACE === HTML_NAMESPACE) {
        return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
      }
      return WHOLE_DOCUMENT ? doc.documentElement : body;
    };

    /**
     * Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document.
     *
     * @param  {Node} root The root element or node to start traversing on.
     * @return {NodeIterator} The created NodeIterator
     */
    const _createNodeIterator = function _createNodeIterator(root) {
      return createNodeIterator.call(root.ownerDocument || root, root,
      // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION, null);
    };

    /**
     * _isClobbered
     *
     * @param  {Node} elm element to check for clobbering attacks
     * @return {Boolean} true if clobbered, false if safe
     */
    const _isClobbered = function _isClobbered(elm) {
      return elm instanceof HTMLFormElement && (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string' || typeof elm.insertBefore !== 'function' || typeof elm.hasChildNodes !== 'function');
    };

    /**
     * Checks whether the given object is a DOM node.
     *
     * @param  {Node} object object to check whether it's a DOM node
     * @return {Boolean} true is object is a DOM node
     */
    const _isNode = function _isNode(object) {
      return typeof Node === 'function' && object instanceof Node;
    };

    /**
     * _executeHook
     * Execute user configurable hooks
     *
     * @param  {String} entryPoint  Name of the hook's entry point
     * @param  {Node} currentNode node to work on with the hook
     * @param  {Object} data additional hook parameters
     */
    const _executeHook = function _executeHook(entryPoint, currentNode, data) {
      if (!hooks[entryPoint]) {
        return;
      }
      arrayForEach(hooks[entryPoint], hook => {
        hook.call(DOMPurify, currentNode, data, CONFIG);
      });
    };

    /**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     *
     * @param   {Node} currentNode to check for permission to exist
     * @return  {Boolean} true if node was killed, false if left alive
     */
    const _sanitizeElements = function _sanitizeElements(currentNode) {
      let content = null;

      /* Execute a hook if present */
      _executeHook('beforeSanitizeElements', currentNode, null);

      /* Check if element is clobbered or can clobber */
      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Now let's check the element's type and name */
      const tagName = transformCaseFunc(currentNode.nodeName);

      /* Execute a hook if present */
      _executeHook('uponSanitizeElement', currentNode, {
        tagName,
        allowedTags: ALLOWED_TAGS
      });

      /* Detect mXSS attempts abusing namespace confusion */
      if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Remove any occurrence of processing instructions */
      if (currentNode.nodeType === NODE_TYPE.progressingInstruction) {
        _forceRemove(currentNode);
        return true;
      }

      /* Remove any kind of possibly harmful comments */
      if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(/<[/\w]/g, currentNode.data)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Remove element if anything forbids its presence */
      if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
        /* Check if we have a custom element to handle */
        if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) {
            return false;
          }
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) {
            return false;
          }
        }

        /* Keep content except for bad-listed elements */
        if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
          const parentNode = getParentNode(currentNode) || currentNode.parentNode;
          const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
          if (childNodes && parentNode) {
            const childCount = childNodes.length;
            for (let i = childCount - 1; i >= 0; --i) {
              const childClone = cloneNode(childNodes[i], true);
              childClone.__removalCount = (currentNode.__removalCount || 0) + 1;
              parentNode.insertBefore(childClone, getNextSibling(currentNode));
            }
          }
        }
        _forceRemove(currentNode);
        return true;
      }

      /* Check whether element has a valid namespace */
      if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Make sure that older browsers don't get fallback-tag mXSS */
      if ((tagName === 'noscript' || tagName === 'noembed' || tagName === 'noframes') && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Sanitize element content to be template-safe */
      if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
        /* Get the element's text content */
        content = currentNode.textContent;
        arrayForEach([MUSTACHE_EXPR, ERB_EXPR, TMPLIT_EXPR], expr => {
          content = stringReplace(content, expr, ' ');
        });
        if (currentNode.textContent !== content) {
          arrayPush(DOMPurify.removed, {
            element: currentNode.cloneNode()
          });
          currentNode.textContent = content;
        }
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeElements', currentNode, null);
      return false;
    };

    /**
     * _isValidAttribute
     *
     * @param  {string} lcTag Lowercase tag name of containing element.
     * @param  {string} lcName Lowercase attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid, otherwise false.
     */
    // eslint-disable-next-line complexity
    const _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
      /* Make sure attribute cannot clobber */
      if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
        return false;
      }

      /* Allow valid data-* attributes: At least one character after "-"
          (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
          XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
          We don't need to check the value; it's always URI safe. */
      if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR, lcName)) ; else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR, lcName)) ; else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
        if (
        // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        _isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) ||
        // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        lcName === 'is' && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))) ; else {
          return false;
        }
        /* Check value is safe. First, is attr inert? If so, is safe */
      } else if (URI_SAFE_ATTRIBUTES[lcName]) ; else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE, ''))) ; else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ; else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA, stringReplace(value, ATTR_WHITESPACE, ''))) ; else if (value) {
        return false;
      } else ;
      return true;
    };

    /**
     * _isBasicCustomElement
     * checks if at least one dash is included in tagName, and it's not the first char
     * for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
     *
     * @param {string} tagName name of the tag of the node to sanitize
     * @returns {boolean} Returns true if the tag name meets the basic criteria for a custom element, otherwise false.
     */
    const _isBasicCustomElement = function _isBasicCustomElement(tagName) {
      return tagName !== 'annotation-xml' && stringMatch(tagName, CUSTOM_ELEMENT);
    };

    /**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param  {Node} currentNode to sanitize
     */
    const _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
      /* Execute a hook if present */
      _executeHook('beforeSanitizeAttributes', currentNode, null);
      const {
        attributes
      } = currentNode;

      /* Check if we have attributes; if not we might have a text node */
      if (!attributes) {
        return;
      }
      const hookEvent = {
        attrName: '',
        attrValue: '',
        keepAttr: true,
        allowedAttributes: ALLOWED_ATTR
      };
      let l = attributes.length;

      /* Go backwards over all attributes; safely remove bad ones */
      while (l--) {
        const attr = attributes[l];
        const {
          name,
          namespaceURI,
          value: attrValue
        } = attr;
        const lcName = transformCaseFunc(name);
        let value = name === 'value' ? attrValue : stringTrim(attrValue);

        /* Execute a hook if present */
        hookEvent.attrName = lcName;
        hookEvent.attrValue = value;
        hookEvent.keepAttr = true;
        hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set
        _executeHook('uponSanitizeAttribute', currentNode, hookEvent);
        value = hookEvent.attrValue;

        /* Work around a security issue with comments inside attributes */
        if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|title)/i, value)) {
          _removeAttribute(name, currentNode);
          continue;
        }

        /* Did the hooks approve of the attribute? */
        if (hookEvent.forceKeepAttr) {
          continue;
        }

        /* Remove attribute */
        _removeAttribute(name, currentNode);

        /* Did the hooks approve of the attribute? */
        if (!hookEvent.keepAttr) {
          continue;
        }

        /* Work around a security issue in jQuery 3.0 */
        if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
          _removeAttribute(name, currentNode);
          continue;
        }

        /* Sanitize attribute content to be template-safe */
        if (SAFE_FOR_TEMPLATES) {
          arrayForEach([MUSTACHE_EXPR, ERB_EXPR, TMPLIT_EXPR], expr => {
            value = stringReplace(value, expr, ' ');
          });
        }

        /* Is `value` valid for this attribute? */
        const lcTag = transformCaseFunc(currentNode.nodeName);
        if (!_isValidAttribute(lcTag, lcName, value)) {
          continue;
        }

        /* Full DOM Clobbering protection via namespace isolation,
         * Prefix id and name attributes with `user-content-`
         */
        if (SANITIZE_NAMED_PROPS && (lcName === 'id' || lcName === 'name')) {
          // Remove the attribute with this value
          _removeAttribute(name, currentNode);

          // Prefix the value and later re-create the attribute with the sanitized value
          value = SANITIZE_NAMED_PROPS_PREFIX + value;
        }

        /* Handle attributes that require Trusted Types */
        if (trustedTypesPolicy && typeof trustedTypes === 'object' && typeof trustedTypes.getAttributeType === 'function') {
          if (namespaceURI) ; else {
            switch (trustedTypes.getAttributeType(lcTag, lcName)) {
              case 'TrustedHTML':
                {
                  value = trustedTypesPolicy.createHTML(value);
                  break;
                }
              case 'TrustedScriptURL':
                {
                  value = trustedTypesPolicy.createScriptURL(value);
                  break;
                }
            }
          }
        }

        /* Handle invalid data-* attribute set by try-catching it */
        try {
          if (namespaceURI) {
            currentNode.setAttributeNS(namespaceURI, name, value);
          } else {
            /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
            currentNode.setAttribute(name, value);
          }
          if (_isClobbered(currentNode)) {
            _forceRemove(currentNode);
          } else {
            arrayPop(DOMPurify.removed);
          }
        } catch (_) {}
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeAttributes', currentNode, null);
    };

    /**
     * _sanitizeShadowDOM
     *
     * @param  {DocumentFragment} fragment to iterate over recursively
     */
    const _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
      let shadowNode = null;
      const shadowIterator = _createNodeIterator(fragment);

      /* Execute a hook if present */
      _executeHook('beforeSanitizeShadowDOM', fragment, null);
      while (shadowNode = shadowIterator.nextNode()) {
        /* Execute a hook if present */
        _executeHook('uponSanitizeShadowNode', shadowNode, null);

        /* Sanitize tags and elements */
        if (_sanitizeElements(shadowNode)) {
          continue;
        }

        /* Deep shadow DOM detected */
        if (shadowNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(shadowNode.content);
        }

        /* Check attributes, sanitize if necessary */
        _sanitizeAttributes(shadowNode);
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeShadowDOM', fragment, null);
    };

    /**
     * Sanitize
     * Public method providing core sanitation functionality
     *
     * @param {String|Node} dirty string or DOM node
     * @param {Object} cfg object
     */
    // eslint-disable-next-line complexity
    DOMPurify.sanitize = function (dirty) {
      let cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      let body = null;
      let importedNode = null;
      let currentNode = null;
      let returnNode = null;
      /* Make sure we have a string to sanitize.
        DO NOT return early, as this will return the wrong type if
        the user has requested a DOM object rather than a string */
      IS_EMPTY_INPUT = !dirty;
      if (IS_EMPTY_INPUT) {
        dirty = '<!-->';
      }

      /* Stringify, in case dirty is an object */
      if (typeof dirty !== 'string' && !_isNode(dirty)) {
        if (typeof dirty.toString === 'function') {
          dirty = dirty.toString();
          if (typeof dirty !== 'string') {
            throw typeErrorCreate('dirty is not a string, aborting');
          }
        } else {
          throw typeErrorCreate('toString is not a function');
        }
      }

      /* Return dirty HTML if DOMPurify cannot run */
      if (!DOMPurify.isSupported) {
        return dirty;
      }

      /* Assign config vars */
      if (!SET_CONFIG) {
        _parseConfig(cfg);
      }

      /* Clean up removed elements */
      DOMPurify.removed = [];

      /* Check if dirty is correctly typed for IN_PLACE */
      if (typeof dirty === 'string') {
        IN_PLACE = false;
      }
      if (IN_PLACE) {
        /* Do some early pre-sanitization to avoid unsafe root nodes */
        if (dirty.nodeName) {
          const tagName = transformCaseFunc(dirty.nodeName);
          if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
            throw typeErrorCreate('root node is forbidden and cannot be sanitized in-place');
          }
        }
      } else if (dirty instanceof Node) {
        /* If dirty is a DOM element, append to an empty document to avoid
           elements being stripped by the parser */
        body = _initDocument('<!---->');
        importedNode = body.ownerDocument.importNode(dirty, true);
        if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === 'BODY') {
          /* Node is already a body, use as is */
          body = importedNode;
        } else if (importedNode.nodeName === 'HTML') {
          body = importedNode;
        } else {
          // eslint-disable-next-line unicorn/prefer-dom-node-append
          body.appendChild(importedNode);
        }
      } else {
        /* Exit directly if we have nothing to do */
        if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT &&
        // eslint-disable-next-line unicorn/prefer-includes
        dirty.indexOf('<') === -1) {
          return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
        }

        /* Initialize the document to work on */
        body = _initDocument(dirty);

        /* Check we have a DOM node from the data */
        if (!body) {
          return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : '';
        }
      }

      /* Remove first element node (ours) if FORCE_BODY is set */
      if (body && FORCE_BODY) {
        _forceRemove(body.firstChild);
      }

      /* Get node iterator */
      const nodeIterator = _createNodeIterator(IN_PLACE ? dirty : body);

      /* Now start iterating over the created document */
      while (currentNode = nodeIterator.nextNode()) {
        /* Sanitize tags and elements */
        if (_sanitizeElements(currentNode)) {
          continue;
        }

        /* Shadow DOM detected, sanitize it */
        if (currentNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(currentNode.content);
        }

        /* Check attributes, sanitize if necessary */
        _sanitizeAttributes(currentNode);
      }

      /* If we sanitized `dirty` in-place, return it. */
      if (IN_PLACE) {
        return dirty;
      }

      /* Return sanitized string or DOM */
      if (RETURN_DOM) {
        if (RETURN_DOM_FRAGMENT) {
          returnNode = createDocumentFragment.call(body.ownerDocument);
          while (body.firstChild) {
            // eslint-disable-next-line unicorn/prefer-dom-node-append
            returnNode.appendChild(body.firstChild);
          }
        } else {
          returnNode = body;
        }
        if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
          /*
            AdoptNode() is not used because internal state is not reset
            (e.g. the past names map of a HTMLFormElement), this is safe
            in theory but we would rather not risk another attack vector.
            The state that is cloned by importNode() is explicitly defined
            by the specs.
          */
          returnNode = importNode.call(originalDocument, returnNode, true);
        }
        return returnNode;
      }
      let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;

      /* Serialize doctype if allowed */
      if (WHOLE_DOCUMENT && ALLOWED_TAGS['!doctype'] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
        serializedHTML = '<!DOCTYPE ' + body.ownerDocument.doctype.name + '>\n' + serializedHTML;
      }

      /* Sanitize final string template-safe */
      if (SAFE_FOR_TEMPLATES) {
        arrayForEach([MUSTACHE_EXPR, ERB_EXPR, TMPLIT_EXPR], expr => {
          serializedHTML = stringReplace(serializedHTML, expr, ' ');
        });
      }
      return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
    };

    /**
     * Public method to set the configuration once
     * setConfig
     *
     * @param {Object} cfg configuration object
     */
    DOMPurify.setConfig = function () {
      let cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _parseConfig(cfg);
      SET_CONFIG = true;
    };

    /**
     * Public method to remove the configuration
     * clearConfig
     *
     */
    DOMPurify.clearConfig = function () {
      CONFIG = null;
      SET_CONFIG = false;
    };

    /**
     * Public method to check if an attribute value is valid.
     * Uses last set config, if any. Otherwise, uses config defaults.
     * isValidAttribute
     *
     * @param  {String} tag Tag name of containing element.
     * @param  {String} attr Attribute name.
     * @param  {String} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
     */
    DOMPurify.isValidAttribute = function (tag, attr, value) {
      /* Initialize shared config vars if necessary. */
      if (!CONFIG) {
        _parseConfig({});
      }
      const lcTag = transformCaseFunc(tag);
      const lcName = transformCaseFunc(attr);
      return _isValidAttribute(lcTag, lcName, value);
    };

    /**
     * AddHook
     * Public method to add DOMPurify hooks
     *
     * @param {String} entryPoint entry point for the hook to add
     * @param {Function} hookFunction function to execute
     */
    DOMPurify.addHook = function (entryPoint, hookFunction) {
      if (typeof hookFunction !== 'function') {
        return;
      }
      hooks[entryPoint] = hooks[entryPoint] || [];
      arrayPush(hooks[entryPoint], hookFunction);
    };

    /**
     * RemoveHook
     * Public method to remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {String} entryPoint entry point for the hook to remove
     * @return {Function} removed(popped) hook
     */
    DOMPurify.removeHook = function (entryPoint) {
      if (hooks[entryPoint]) {
        return arrayPop(hooks[entryPoint]);
      }
    };

    /**
     * RemoveHooks
     * Public method to remove all DOMPurify hooks at a given entryPoint
     *
     * @param  {String} entryPoint entry point for the hooks to remove
     */
    DOMPurify.removeHooks = function (entryPoint) {
      if (hooks[entryPoint]) {
        hooks[entryPoint] = [];
      }
    };

    /**
     * RemoveAllHooks
     * Public method to remove all DOMPurify hooks
     */
    DOMPurify.removeAllHooks = function () {
      hooks = {};
    };
    return DOMPurify;
  }
  var purify = createDOMPurify();

  return purify;

}));
//# sourceMappingURL=purify.js.map


/***/ }),

/***/ 3103:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(4715),
    root = __webpack_require__(8942);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ 5098:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(3305),
    hashDelete = __webpack_require__(9361),
    hashGet = __webpack_require__(1112),
    hashHas = __webpack_require__(5276),
    hashSet = __webpack_require__(5071);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ 1386:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(2393),
    listCacheDelete = __webpack_require__(2049),
    listCacheGet = __webpack_require__(7144),
    listCacheHas = __webpack_require__(7452),
    listCacheSet = __webpack_require__(3964);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ 9770:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(4715),
    root = __webpack_require__(8942);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ 8250:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(9753),
    mapCacheDelete = __webpack_require__(5681),
    mapCacheGet = __webpack_require__(88),
    mapCacheHas = __webpack_require__(4732),
    mapCacheSet = __webpack_require__(9068);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ 9413:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(4715),
    root = __webpack_require__(8942);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ 4512:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(4715),
    root = __webpack_require__(8942);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ 3212:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(8250),
    setCacheAdd = __webpack_require__(1877),
    setCacheHas = __webpack_require__(8006);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ 1340:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(1386),
    stackClear = __webpack_require__(4103),
    stackDelete = __webpack_require__(1779),
    stackGet = __webpack_require__(4162),
    stackHas = __webpack_require__(7462),
    stackSet = __webpack_require__(6638);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ 5650:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(8942);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 1623:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(8942);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ 9270:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(4715),
    root = __webpack_require__(8942);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ 6912:
/***/ ((module) => {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ 9968:
/***/ ((module) => {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ 9847:
/***/ ((module) => {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ 9756:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIndexOf = __webpack_require__(2478);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ 935:
/***/ ((module) => {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ 358:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(6137),
    isArguments = __webpack_require__(3283),
    isArray = __webpack_require__(3142),
    isBuffer = __webpack_require__(5853),
    isIndex = __webpack_require__(9632),
    isTypedArray = __webpack_require__(8666);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ 5111:
/***/ ((module) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ 1129:
/***/ ((module) => {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ 6465:
/***/ ((module) => {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ 3422:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(7073),
    eq = __webpack_require__(6285);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ 7034:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(6285);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ 7930:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(9032),
    keys = __webpack_require__(1211);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ 125:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(9032),
    keysIn = __webpack_require__(5288);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ 7073:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(2532);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ 9334:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(1340),
    arrayEach = __webpack_require__(9968),
    assignValue = __webpack_require__(3422),
    baseAssign = __webpack_require__(7930),
    baseAssignIn = __webpack_require__(125),
    cloneBuffer = __webpack_require__(7099),
    copyArray = __webpack_require__(4354),
    copySymbols = __webpack_require__(3546),
    copySymbolsIn = __webpack_require__(4733),
    getAllKeys = __webpack_require__(393),
    getAllKeysIn = __webpack_require__(3650),
    getTag = __webpack_require__(8486),
    initCloneArray = __webpack_require__(7350),
    initCloneByTag = __webpack_require__(424),
    initCloneObject = __webpack_require__(5964),
    isArray = __webpack_require__(3142),
    isBuffer = __webpack_require__(5853),
    isMap = __webpack_require__(7681),
    isObject = __webpack_require__(1580),
    isSet = __webpack_require__(3943),
    keys = __webpack_require__(1211),
    keysIn = __webpack_require__(5288);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ 9747:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(1580);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ 6576:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(3212),
    arrayIncludes = __webpack_require__(9756),
    arrayIncludesWith = __webpack_require__(935),
    arrayMap = __webpack_require__(5111),
    baseUnary = __webpack_require__(9460),
    cacheHas = __webpack_require__(5568);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),

/***/ 7250:
/***/ ((module) => {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ 313:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(1129),
    isFlattenable = __webpack_require__(714);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ 5636:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createBaseFor = __webpack_require__(6596);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ 7170:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFor = __webpack_require__(5636),
    keys = __webpack_require__(1211);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ 7923:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(3526),
    toKey = __webpack_require__(6040);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ 8244:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(1129),
    isArray = __webpack_require__(3142);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ 7379:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(5650),
    getRawTag = __webpack_require__(8870),
    objectToString = __webpack_require__(9005);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 3636:
/***/ ((module) => {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ 2478:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFindIndex = __webpack_require__(7250),
    baseIsNaN = __webpack_require__(9454),
    strictIndexOf = __webpack_require__(7706);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ 3854:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(3212),
    arrayIncludes = __webpack_require__(9756),
    arrayIncludesWith = __webpack_require__(935),
    arrayMap = __webpack_require__(5111),
    baseUnary = __webpack_require__(9460),
    cacheHas = __webpack_require__(5568);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * The base implementation of methods like `_.intersection`, without support
 * for iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of shared values.
 */
function baseIntersection(arrays, iteratee, comparator) {
  var includes = comparator ? arrayIncludesWith : arrayIncludes,
      length = arrays[0].length,
      othLength = arrays.length,
      othIndex = othLength,
      caches = Array(othLength),
      maxLength = Infinity,
      result = [];

  while (othIndex--) {
    var array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = arrayMap(array, baseUnary(iteratee));
    }
    maxLength = nativeMin(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
      ? new SetCache(othIndex && array)
      : undefined;
  }
  array = arrays[0];

  var index = -1,
      seen = caches[0];

  outer:
  while (++index < length && result.length < maxLength) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (!(seen
          ? cacheHas(seen, computed)
          : includes(result, computed, comparator)
        )) {
      othIndex = othLength;
      while (--othIndex) {
        var cache = caches[othIndex];
        if (!(cache
              ? cacheHas(cache, computed)
              : includes(arrays[othIndex], computed, comparator))
            ) {
          continue outer;
        }
      }
      if (seen) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseIntersection;


/***/ }),

/***/ 944:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseForOwn = __webpack_require__(7170);

/**
 * The base implementation of `_.invert` and `_.invertBy` which inverts
 * `object` with values transformed by `iteratee` and set by `setter`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform values.
 * @param {Object} accumulator The initial inverted object.
 * @returns {Function} Returns `accumulator`.
 */
function baseInverter(object, setter, iteratee, accumulator) {
  baseForOwn(object, function(value, key, object) {
    setter(accumulator, iteratee(value), key, object);
  });
  return accumulator;
}

module.exports = baseInverter;


/***/ }),

/***/ 6027:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(7379),
    isObjectLike = __webpack_require__(547);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ 4687:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqualDeep = __webpack_require__(353),
    isObjectLike = __webpack_require__(547);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ 353:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(1340),
    equalArrays = __webpack_require__(3934),
    equalByTag = __webpack_require__(8861),
    equalObjects = __webpack_require__(1182),
    getTag = __webpack_require__(8486),
    isArray = __webpack_require__(3142),
    isBuffer = __webpack_require__(5853),
    isTypedArray = __webpack_require__(8666);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ 777:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getTag = __webpack_require__(8486),
    isObjectLike = __webpack_require__(547);

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ 8330:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(1340),
    baseIsEqual = __webpack_require__(4687);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ 9454:
/***/ ((module) => {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ 9624:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(3655),
    isMasked = __webpack_require__(4759),
    isObject = __webpack_require__(1580),
    toSource = __webpack_require__(4066);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ 1935:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getTag = __webpack_require__(8486),
    isObjectLike = __webpack_require__(547);

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ 674:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(7379),
    isLength = __webpack_require__(5387),
    isObjectLike = __webpack_require__(547);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ 3334:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMatches = __webpack_require__(6526),
    baseMatchesProperty = __webpack_require__(2343),
    identity = __webpack_require__(2053),
    isArray = __webpack_require__(3142),
    property = __webpack_require__(3282);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ 195:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(4882),
    nativeKeys = __webpack_require__(8121);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ 7200:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(1580),
    isPrototype = __webpack_require__(4882),
    nativeKeysIn = __webpack_require__(8546);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ 6526:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsMatch = __webpack_require__(8330),
    getMatchData = __webpack_require__(4367),
    matchesStrictComparable = __webpack_require__(3904);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ 2343:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(4687),
    get = __webpack_require__(6123),
    hasIn = __webpack_require__(7276),
    isKey = __webpack_require__(5187),
    isStrictComparable = __webpack_require__(7267),
    matchesStrictComparable = __webpack_require__(3904),
    toKey = __webpack_require__(6040);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ 2762:
/***/ ((module) => {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ 8880:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(7923);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ 3945:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var identity = __webpack_require__(2053),
    overRest = __webpack_require__(5234),
    setToString = __webpack_require__(796);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ 7403:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var constant = __webpack_require__(2619),
    defineProperty = __webpack_require__(2532),
    identity = __webpack_require__(2053);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ 3501:
/***/ ((module) => {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ 6137:
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ 2291:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(5650),
    arrayMap = __webpack_require__(5111),
    isArray = __webpack_require__(3142),
    isSymbol = __webpack_require__(1187);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ 6403:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trimmedEndIndex = __webpack_require__(2945);

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ 9460:
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ 5630:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(3212),
    arrayIncludes = __webpack_require__(9756),
    arrayIncludesWith = __webpack_require__(935),
    cacheHas = __webpack_require__(5568),
    createSet = __webpack_require__(6208),
    setToArray = __webpack_require__(9828);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),

/***/ 1586:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(3526),
    last = __webpack_require__(8087),
    parent = __webpack_require__(3398),
    toKey = __webpack_require__(6040);

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),

/***/ 5568:
/***/ ((module) => {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ 7648:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLikeObject = __webpack_require__(5406);

/**
 * Casts `value` to an empty array if it's not an array like object.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array|Object} Returns the cast array-like object.
 */
function castArrayLikeObject(value) {
  return isArrayLikeObject(value) ? value : [];
}

module.exports = castArrayLikeObject;


/***/ }),

/***/ 3526:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(3142),
    isKey = __webpack_require__(5187),
    stringToPath = __webpack_require__(6493),
    toString = __webpack_require__(5243);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ 8898:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Uint8Array = __webpack_require__(1623);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ 7099:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(8942);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;


/***/ }),

/***/ 2480:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(8898);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ 8340:
/***/ ((module) => {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ 8069:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(5650);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ 2264:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(8898);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ 4354:
/***/ ((module) => {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ 9032:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(3422),
    baseAssignValue = __webpack_require__(7073);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ 3546:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(9032),
    getSymbols = __webpack_require__(7979);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ 4733:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(9032),
    getSymbolsIn = __webpack_require__(5832);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ 1950:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(8942);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ 6596:
/***/ ((module) => {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ 7317:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIteratee = __webpack_require__(3334),
    isArrayLike = __webpack_require__(6529),
    keys = __webpack_require__(1211);

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),

/***/ 9333:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseInverter = __webpack_require__(944);

/**
 * Creates a function like `_.invertBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} toIteratee The function to resolve iteratees.
 * @returns {Function} Returns the new inverter function.
 */
function createInverter(setter, toIteratee) {
  return function(object, iteratee) {
    return baseInverter(object, setter, toIteratee(iteratee), {});
  };
}

module.exports = createInverter;


/***/ }),

/***/ 6208:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Set = __webpack_require__(4512),
    noop = __webpack_require__(9071),
    setToArray = __webpack_require__(9828);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),

/***/ 9259:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPlainObject = __webpack_require__(8360);

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

module.exports = customOmitClone;


/***/ }),

/***/ 2532:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(4715);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ 3934:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(3212),
    arraySome = __webpack_require__(6465),
    cacheHas = __webpack_require__(5568);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ 8861:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(5650),
    Uint8Array = __webpack_require__(1623),
    eq = __webpack_require__(6285),
    equalArrays = __webpack_require__(3934),
    mapToArray = __webpack_require__(5894),
    setToArray = __webpack_require__(9828);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ 1182:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getAllKeys = __webpack_require__(393);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ 1439:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var flatten = __webpack_require__(5857),
    overRest = __webpack_require__(5234),
    setToString = __webpack_require__(796);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),

/***/ 4967:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ 393:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(8244),
    getSymbols = __webpack_require__(7979),
    keys = __webpack_require__(1211);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ 3650:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(8244),
    getSymbolsIn = __webpack_require__(5832),
    keysIn = __webpack_require__(5288);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ 4700:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(9067);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ 4367:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isStrictComparable = __webpack_require__(7267),
    keys = __webpack_require__(1211);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ 4715:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(9624),
    getValue = __webpack_require__(155);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ 4784:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(3766);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ 8870:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(5650);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ 7979:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(9847),
    stubArray = __webpack_require__(9306);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ 5832:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(1129),
    getPrototype = __webpack_require__(4784),
    getSymbols = __webpack_require__(7979),
    stubArray = __webpack_require__(9306);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ 8486:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(3103),
    Map = __webpack_require__(9770),
    Promise = __webpack_require__(9413),
    Set = __webpack_require__(4512),
    WeakMap = __webpack_require__(9270),
    baseGetTag = __webpack_require__(7379),
    toSource = __webpack_require__(4066);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ 155:
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ 5899:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(3526),
    isArguments = __webpack_require__(3283),
    isArray = __webpack_require__(3142),
    isIndex = __webpack_require__(9632),
    isLength = __webpack_require__(5387),
    toKey = __webpack_require__(6040);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ 3305:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(4497);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ 9361:
/***/ ((module) => {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ 1112:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(4497);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ 5276:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(4497);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ 5071:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(4497);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ 7350:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ 424:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(8898),
    cloneDataView = __webpack_require__(2480),
    cloneRegExp = __webpack_require__(8340),
    cloneSymbol = __webpack_require__(8069),
    cloneTypedArray = __webpack_require__(2264);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ 5964:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(9747),
    getPrototype = __webpack_require__(4784),
    isPrototype = __webpack_require__(4882);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ 714:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(5650),
    isArguments = __webpack_require__(3283),
    isArray = __webpack_require__(3142);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ 9632:
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ 5187:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(3142),
    isSymbol = __webpack_require__(1187);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ 9067:
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ 4759:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(1950);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ 4882:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ 7267:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(1580);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ 2393:
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ 2049:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(7034);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ 7144:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(7034);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ 7452:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(7034);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ 3964:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(7034);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ 9753:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(5098),
    ListCache = __webpack_require__(1386),
    Map = __webpack_require__(9770);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ 5681:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(4700);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ 88:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(4700);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ 4732:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(4700);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ 9068:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(4700);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ 5894:
/***/ ((module) => {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ 3904:
/***/ ((module) => {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ 6853:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoize = __webpack_require__(9011);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ 4497:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(4715);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ 8121:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(3766);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ 8546:
/***/ ((module) => {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ 2306:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(4967);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ 9005:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 3766:
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ 5234:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(6912);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ 3398:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(7923),
    baseSlice = __webpack_require__(3501);

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),

/***/ 8942:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(4967);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 1877:
/***/ ((module) => {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ 8006:
/***/ ((module) => {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ 9828:
/***/ ((module) => {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ 796:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSetToString = __webpack_require__(7403),
    shortOut = __webpack_require__(3316);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ 3316:
/***/ ((module) => {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ 4103:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(1386);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ 1779:
/***/ ((module) => {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ 4162:
/***/ ((module) => {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ 7462:
/***/ ((module) => {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ 6638:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(1386),
    Map = __webpack_require__(9770),
    MapCache = __webpack_require__(8250);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ 7706:
/***/ ((module) => {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ 6493:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoizeCapped = __webpack_require__(6853);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ 6040:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(1187);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ 4066:
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ 2945:
/***/ ((module) => {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ 2846:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseClone = __webpack_require__(9334);

/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}

module.exports = clone;


/***/ }),

/***/ 6108:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseClone = __webpack_require__(9334);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),

/***/ 2619:
/***/ ((module) => {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ 8088:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseDifference = __webpack_require__(6576),
    baseFlatten = __webpack_require__(313),
    baseRest = __webpack_require__(3945),
    isArrayLikeObject = __webpack_require__(5406);

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
});

module.exports = difference;


/***/ }),

/***/ 6285:
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ 3985:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toString = __webpack_require__(5243);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
    reHasRegExpChar = RegExp(reRegExpChar.source);

/**
 * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
 * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escapeRegExp('[lodash](https://lodash.com/)');
 * // => '\[lodash\]\(https://lodash\.com/\)'
 */
function escapeRegExp(string) {
  string = toString(string);
  return (string && reHasRegExpChar.test(string))
    ? string.replace(reRegExpChar, '\\$&')
    : string;
}

module.exports = escapeRegExp;


/***/ }),

/***/ 1936:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createFind = __webpack_require__(7317),
    findIndex = __webpack_require__(2154);

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),

/***/ 2154:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFindIndex = __webpack_require__(7250),
    baseIteratee = __webpack_require__(3334),
    toInteger = __webpack_require__(7642);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),

/***/ 5857:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(313);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ 6123:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(7923);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ 7276:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseHasIn = __webpack_require__(3636),
    hasPath = __webpack_require__(5899);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ 2053:
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ 8150:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(5111),
    baseIntersection = __webpack_require__(3854),
    baseRest = __webpack_require__(3945),
    castArrayLikeObject = __webpack_require__(7648);

/**
 * Creates an array of unique values that are included in all given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * _.intersection([2, 1], [2, 3]);
 * // => [2]
 */
var intersection = baseRest(function(arrays) {
  var mapped = arrayMap(arrays, castArrayLikeObject);
  return (mapped.length && mapped[0] === arrays[0])
    ? baseIntersection(mapped)
    : [];
});

module.exports = intersection;


/***/ }),

/***/ 9891:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var constant = __webpack_require__(2619),
    createInverter = __webpack_require__(9333),
    identity = __webpack_require__(2053);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Creates an object composed of the inverted keys and values of `object`.
 * If `object` contains duplicate values, subsequent values overwrite
 * property assignments of previous values.
 *
 * @static
 * @memberOf _
 * @since 0.7.0
 * @category Object
 * @param {Object} object The object to invert.
 * @returns {Object} Returns the new inverted object.
 * @example
 *
 * var object = { 'a': 1, 'b': 2, 'c': 1 };
 *
 * _.invert(object);
 * // => { '1': 'c', '2': 'b' }
 */
var invert = createInverter(function(result, value, key) {
  if (value != null &&
      typeof value.toString != 'function') {
    value = nativeObjectToString.call(value);
  }

  result[value] = key;
}, constant(identity));

module.exports = invert;


/***/ }),

/***/ 3283:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(6027),
    isObjectLike = __webpack_require__(547);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ 3142:
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ 6529:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(3655),
    isLength = __webpack_require__(5387);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ 5406:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(6529),
    isObjectLike = __webpack_require__(547);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ 5853:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(8942),
    stubFalse = __webpack_require__(4772);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ 6343:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(4687);

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),

/***/ 644:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(8942);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsFinite = root.isFinite;

/**
 * Checks if `value` is a finite primitive number.
 *
 * **Note:** This method is based on
 * [`Number.isFinite`](https://mdn.io/Number/isFinite).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
 * @example
 *
 * _.isFinite(3);
 * // => true
 *
 * _.isFinite(Number.MIN_VALUE);
 * // => true
 *
 * _.isFinite(Infinity);
 * // => false
 *
 * _.isFinite('3');
 * // => false
 */
function isFinite(value) {
  return typeof value == 'number' && nativeIsFinite(value);
}

module.exports = isFinite;


/***/ }),

/***/ 3655:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(7379),
    isObject = __webpack_require__(1580);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ 5387:
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ 7681:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsMap = __webpack_require__(777),
    baseUnary = __webpack_require__(9460),
    nodeUtil = __webpack_require__(2306);

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ 1580:
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 547:
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 8360:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(7379),
    getPrototype = __webpack_require__(4784),
    isObjectLike = __webpack_require__(547);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ 3943:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsSet = __webpack_require__(1935),
    baseUnary = __webpack_require__(9460),
    nodeUtil = __webpack_require__(2306);

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ 8138:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(7379),
    isArray = __webpack_require__(3142),
    isObjectLike = __webpack_require__(547);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ 1187:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(7379),
    isObjectLike = __webpack_require__(547);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ 8666:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(674),
    baseUnary = __webpack_require__(9460),
    nodeUtil = __webpack_require__(2306);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ 1211:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(358),
    baseKeys = __webpack_require__(195),
    isArrayLike = __webpack_require__(6529);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ 5288:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(358),
    baseKeysIn = __webpack_require__(7200),
    isArrayLike = __webpack_require__(6529);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ 8087:
/***/ ((module) => {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),

/***/ 9011:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(8250);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ 9071:
/***/ ((module) => {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ 3326:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(5111),
    baseClone = __webpack_require__(9334),
    baseUnset = __webpack_require__(1586),
    castPath = __webpack_require__(3526),
    copyObject = __webpack_require__(9032),
    customOmitClone = __webpack_require__(9259),
    flatRest = __webpack_require__(1439),
    getAllKeysIn = __webpack_require__(3650);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

module.exports = omit;


/***/ }),

/***/ 3282:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseProperty = __webpack_require__(2762),
    basePropertyDeep = __webpack_require__(8880),
    isKey = __webpack_require__(5187),
    toKey = __webpack_require__(6040);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ 9306:
/***/ ((module) => {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ 4772:
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ 3301:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toNumber = __webpack_require__(6131);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ 7642:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toFinite = __webpack_require__(3301);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ 6131:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTrim = __webpack_require__(6403),
    isObject = __webpack_require__(1580),
    isSymbol = __webpack_require__(1187);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ 5243:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseToString = __webpack_require__(2291);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ 2438:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseUniq = __webpack_require__(5630);

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;


/***/ }),

/***/ 795:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseDifference = __webpack_require__(6576),
    baseRest = __webpack_require__(3945),
    isArrayLikeObject = __webpack_require__(5406);

/**
 * Creates an array excluding all given values using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.pull`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...*} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.xor
 * @example
 *
 * _.without([2, 1, 2, 3], 1, 2);
 * // => [3]
 */
var without = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, values)
    : [];
});

module.exports = without;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  lineTypes: () => (/* reexport */ parser_lineTypes),
  parseSong: () => (/* reexport */ parseSong),
  renderSong: () => (/* reexport */ renderSong)
});

// EXTERNAL MODULE: ../../node_modules/lodash/isArray.js
var isArray = __webpack_require__(3142);
var isArray_default = /*#__PURE__*/__webpack_require__.n(isArray);
// EXTERNAL MODULE: ../../node_modules/dompurify/dist/purify.js
var purify = __webpack_require__(1651);
var purify_default = /*#__PURE__*/__webpack_require__.n(purify);
;// CONCATENATED MODULE: ./src/core/dom/getDomPurify.js

/* harmony default export */ const getDomPurify = (function (windowObject) {
  return windowObject ? purify_default()(windowObject) : (purify_default());
});
;// CONCATENATED MODULE: ./src/core/dom/escapeHTML.js

function escapeHTML(unescaped, windowObject) {
  return getDomPurify(windowObject).sanitize(unescaped);
}
;// CONCATENATED MODULE: ./src/core/dom/stripTags.js

function stripTags(html, windowObject) {
  return getDomPurify(windowObject).sanitize(html, {
    ALLOWED_TAGS: ['#text'],
    KEEP_CONTENT: true
  });
}
// EXTERNAL MODULE: ../../node_modules/lodash/cloneDeep.js
var cloneDeep = __webpack_require__(6108);
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep);
;// CONCATENATED MODULE: ./src/parser/lineTypes.js
/**
 * @enum {String}
 * @readonly
 */
/* harmony default export */ const parser_lineTypes = ({
  CHORD: 'chord',
  EMPTY_LINE: 'emptyLine',
  KEY_DECLARATION: 'keyDeclaration',
  LYRIC: 'lyric',
  SECTION_LABEL: 'sectionLabel',
  TIME_SIGNATURE: 'timeSignature'
});
// EXTERNAL MODULE: ../../node_modules/lodash/escapeRegExp.js
var escapeRegExp = __webpack_require__(3985);
var escapeRegExp_default = /*#__PURE__*/__webpack_require__.n(escapeRegExp);
;// CONCATENATED MODULE: ./src/parser/helper/clearSpaces.js
function clearSpaces(string) {
  return string.replace(/\t+/g, ' ').replace(/  +/g, ' ').trim();
}
;// CONCATENATED MODULE: ./src/parser/matchers/isTimeSignatureString.js
var allowedTimeSignatures = ['2/2', '3/2', '4/2', '2/4', '3/4', '4/4', '5/4', '6/4', '7/4', '9/4', '10/4', '3/8', '4/8', '5/8', '6/8', '7/8', '9/8', '12/8'];
function isTimeSignatureString(string) {
  return allowedTimeSignatures.includes(string);
}
;// CONCATENATED MODULE: ./src/parser/parseTimeSignature.js


/**
 * @typedef {Object} TimeSignature
 * @type {Object}
 * @property {String} string - original string
 * @property {Number} count - upper part of time signature
 * @property {Number} value - lower part of time signature
 * @property {Number} beatCount - number of beats per bar
 */

/**
 * @param {String} string
 * @returns {TimeSignature}
 */
function parseTimeSignature(string) {
  if (!isTimeSignatureString(string)) {
    throw new TypeError('Expected time signature string, received: ' + string);
  }
  var array = string.split('/');
  var count = Number.parseInt(array[0], 10);
  var value = Number.parseInt(array[1], 10);
  var beatCount = count;
  if (value === 2) {
    beatCount = count * 2;
  } else if (value === 8) {
    beatCount = count / 3;
  }
  return {
    string: string,
    count: count,
    value: value,
    beatCount: beatCount
  };
}
;// CONCATENATED MODULE: ./src/parser/syntax.js

/* harmony default export */ const syntax = ({
  barRepeat: '%',
  chordBeatCount: '.',
  chordLineRepeat: '%',
  chordPositionMarker: '_',
  lyricLine: ':',
  keyDeclarationPrefix: 'key ',
  noChord: 'NC',
  sectionLabel: '#',
  subBeatOpener: '[',
  subBeatCloser: ']'
});
var defaultTimeSignature = parseTimeSignature('4/4');
;// CONCATENATED MODULE: ../../node_modules/chord-symbol/src/helpers/chain.js
/**
 * Execute given functions in sequence, feeding the result of one as an input to the next.
 *
 * @param {Function[]} allFunctions
 * @param {*} input - parameter given to the first function
 * @returns {*} return value of the last function
 */
function chain(allFunctions, input) {
	return allFunctions.reduce((value, fn) => {
		return value ? fn(value) : null;
	}, input);
}

// EXTERNAL MODULE: ../../node_modules/lodash/isString.js
var isString = __webpack_require__(8138);
var isString_default = /*#__PURE__*/__webpack_require__.n(isString);
;// CONCATENATED MODULE: ../../node_modules/chord-symbol/src/helpers/checkCustomFilters.js
const checkCustomFilters = (customFilters) => {
	if (!Array.isArray(customFilters)) {
		throw new TypeError('customFilters should be given as an array');
	}
	if (customFilters.some((filter) => typeof filter !== 'function')) {
		throw new TypeError(`The given filter is not a function`);
	}
	return true;
};

/* harmony default export */ const helpers_checkCustomFilters = (checkCustomFilters);

// EXTERNAL MODULE: ../../node_modules/lodash/invert.js
var invert = __webpack_require__(9891);
var invert_default = /*#__PURE__*/__webpack_require__.n(invert);
// EXTERNAL MODULE: ../../node_modules/lodash/omit.js
var omit = __webpack_require__(3326);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
;// CONCATENATED MODULE: ../../node_modules/chord-symbol/src/dictionaries/notes.js



const notes = {
	AFlat: 'Ab',
	A: 'A',
	ASharp: 'A#',
	BFlat: 'Bb',
	B: 'B',
	C: 'C',
	CSharp: 'C#',
	DFlat: 'Db',
	D: 'D',
	DSharp: 'D#',
	EFlat: 'Eb',
	E: 'E',
	F: 'F',
	FSharp: 'F#',
	GFlat: 'Gb',
	G: 'G',
	GSharp: 'G#',
};

const english = {
	Ab: notes.AFlat,
	A: notes.A,
	'A#': notes.ASharp,
	Bb: notes.BFlat,
	B: notes.B,
	'B#': notes.C,
	Cb: notes.B,
	C: notes.C,
	'C#': notes.CSharp,
	Db: notes.DFlat,
	D: notes.D,
	'D#': notes.DSharp,
	Eb: notes.EFlat,
	E: notes.E,
	'E#': notes.F,
	Fb: notes.E,
	F: notes.F,
	'F#': notes.FSharp,
	Gb: notes.GFlat,
	G: notes.G,
	'G#': notes.GSharp,
};

const latin = {
	Lab: notes.AFlat,
	La: notes.A,
	'La#': notes.ASharp,
	Sib: notes.BFlat,
	Si: notes.B,
	'Si#': notes.C,
	Dob: notes.B,
	Do: notes.C,
	'Do#': notes.CSharp,
	Reb: notes.DFlat,
	Réb: notes.DFlat,
	Re: notes.D,
	Ré: notes.D,
	'Re#': notes.DSharp,
	'Ré#': notes.DSharp,
	Mib: notes.EFlat,
	Mi: notes.E,
	'Mi#': notes.F,
	Fab: notes.E,
	Fa: notes.F,
	'Fa#': notes.FSharp,
	Solb: notes.GFlat,
	Sol: notes.G,
	'Sol#': notes.GSharp,
};

const german = {
	...omit_default()(english, ['Bb', 'B', 'B#']),
	As: notes.AFlat,
	Ais: notes.ASharp,
	Hb: notes.BFlat,
	Hes: notes.BFlat,
	H: notes.B,
	His: notes.C,
	'H#': notes.C,
	Ces: notes.B,
	Cis: notes.CSharp,
	Des: notes.DFlat,
	Dis: notes.DSharp,
	Es: notes.EFlat,
	Eis: notes.F,
	Fes: notes.E,
	Fis: notes.FSharp,
	Ges: notes.GFlat,
	Gis: notes.GSharp,
};

function getAccidentalsVariation(source) {
	let variant;
	return Object.keys(source).reduce((acc, curr) => {
		if (curr.match(/.[b|#]$/)) {
			variant = curr.replace('#', '♯').replace('b', '♭');
			acc[variant] = source[curr];
		}
		return acc;
	}, {});
}

const englishVariantsToNotes = {
	...english,
	...getAccidentalsVariation(english),
};

const latinVariantsToNotes = {
	...latin,
	...getAccidentalsVariation(latin),
};

const germanVariantsToNotes = {
	...german,
	...getAccidentalsVariation(german),
};

const allVariantsToNotes = {
	...englishVariantsToNotes,
	...latinVariantsToNotes,
	...germanVariantsToNotes,
};

const allVariants = Object.keys(allVariantsToNotes).sort(
	(a, b) => b.length - a.length
);

const englishVariants = Object.keys(englishVariantsToNotes).sort(
	(a, b) => b.length - a.length
);

const latinVariants = Object.keys(latinVariantsToNotes).sort(
	(a, b) => b.length - a.length
);

const germanVariants = Object.keys(germanVariantsToNotes).sort(
	(a, b) => b.length - a.length
);

const allVariantsPerGroup = [
	{ name: 'english', notes: englishVariants },
	{ name: 'german', notes: germanVariants },
	{ name: 'latin', notes: latinVariants },
];

const notesSharp = [
	notes.A,
	notes.ASharp,
	notes.B,
	notes.C,
	notes.CSharp,
	notes.D,
	notes.DSharp,
	notes.E,
	notes.F,
	notes.FSharp,
	notes.G,
	notes.GSharp,
];

const notesFlat = [
	notes.A,
	notes.BFlat,
	notes.B,
	notes.C,
	notes.DFlat,
	notes.D,
	notes.EFlat,
	notes.E,
	notes.F,
	notes.GFlat,
	notes.G,
	notes.AFlat,
];

const sharpsToFlats = {
	[notes.CSharp]: notes.DFlat,
	[notes.DSharp]: notes.EFlat,
	[notes.FSharp]: notes.GFlat,
	[notes.GSharp]: notes.AFlat,
	[notes.ASharp]: notes.BFlat,
};

const flatsToSharps = invert_default()(sharpsToFlats);



;// CONCATENATED MODULE: ../../node_modules/chord-symbol/src/dictionaries/allKeys.js


const allKeys = [
	...Object.values(notes),
	...Object.values(notes).map((key) => key + 'm'),
];

;// CONCATENATED MODULE: ../../node_modules/chord-symbol/src/helpers/ChordParsingError.js
class InvalidInputError extends Error {
	/**
	 *  The parser was not given a valid string to parse
	 *  ex: `parseChord(null)`
	 */
	constructor() {
		super('The given symbol is not a valid string');
		this.name = 'InvalidInput';
	}
}

class UnexpectedError extends Error {
	/**
	 * This error is very unlikely to happen.
	 * If it does, it is probably in the context of a custom filter that returns `null` instead of throwing an exception.
	 */
	constructor() {
		const message =
			'An unexpected error happened. Maybe a custom filter returned null instead of throwing an exception?';
		super(message);
		this.name = 'UnexpectedError';
	}
}

class ChordSymbolError extends Error {
	constructor(message, chord, errorName) {
		super(message);
		this.name = errorName;
		this.chord = chord;
	}
}

class NoSymbolFoundError extends ChordSymbolError {
	/**
	 * The given string cannot be confused with a chord symbol in the current notation system
	 * ex: `parseChord('Ape')`
	 * @param {Chord} chord - the chord object, in the state that it was when the error occurred
	 */
	constructor(chord) {
		const message = `"${chord.input.symbol}" does not seems to be a chord`;
		super(message, chord, 'NoSymbolFound');
	}
}

class InvalidModifierError extends ChordSymbolError {
	/**
	 * The given string looks like a chord symbol, but `ChordSymbol` does not understand its descriptor.
	 * It can be either because of a typo, or just because the given word is not a symbol.
	 * ex: `parseChord('Amid')`
	 * @param {Chord} chord - the chord object, in the state that it was when the error occurred
	 * @param {String} invalidChars - the characters that proved problematic when parsing the symbol
	 */
	constructor(chord, invalidChars) {
		const message = `The chord descriptor "${chord.input.descriptor}" contains unknown or duplicated modifiers: "${invalidChars}"`;
		super(message, chord, 'InvalidModifier');
	}
}

class InvalidIntervalsError extends ChordSymbolError {
	/**
	 * The given string is a chord symbol, but the resulting interval list is not valid
	 * ex: `parseChord('A7M7')`
	 * @param {Chord} chord - the chord object, in the state that it was when the error occurred
	 * @param {String[]} forbiddenCombo - intervals that should not belong together in a chord
	 */
	constructor(chord, forbiddenCombo) {
		const message =
			`"${chord.input.symbol}" describes a chord with an invalid intervals combo: ` +
			forbiddenCombo.join(' and ');
		super(message, chord, 'InvalidIntervals');
	}
}



// EXTERNAL MODULE: ../../node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(6343);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
;// CONCATENATED MODULE: ../../node_modules/chord-symbol/src/helpers/hasElement.js



function hasExactly(allIntervals, search) {
	const arraySearch = isArray_default()(search) ? search : [search];
	return isEqual_default()(allIntervals, arraySearch);
}

function hasOneOf(allIntervals, search) {
	return has(allIntervals, search, 'oneOf');
}

function hasAll(allIntervals, search) {
	return has(allIntervals, search, 'all');
}

function hasNoneOf(allIntervals, search) {
	return has(allIntervals, search, 'none');
}

function has(allIntervals, search, require) {
	const arraySearch = isArray_default()(search) ? search : [search];

	const lookupMethod = require === 'oneOf' ? 'some' : 'every';

	return arraySearch[lookupMethod]((interval) => {
		return require === 'none'
			? !allIntervals.includes(interval)
			: allIntervals.includes(interval);
	});
}



;// CONCATENATED MODULE: ../../node_modules/chord-symbol/src/parser/filters/checkIntervalsConsistency.js



const allForbiddenCombos = [
	['2', '3'],
	['2', '9'],
	['3', 'b3'],
	//['3',  '4'], // valid in the Real Book: F#7SUS(add 3)
	['4', '11'],
	['5', 'b5'],
	['5', '#5'],
	['b6', '#5'],
	['b6', '6'],
	['b6', '13'],
	['6', '13'],
	['b7', 'bb7'],
	['7', 'b7'],
	['9', 'b9'],
	['9', '#9'],
	['11', '#11'],
	['13', 'b13'],
];

/**
 * Check parsed interval list to detect potential inconsistencies
 *
 * @param {Chord} chord
 * @returns {(Chord|Null)}
 */
function checkIntervalsConsistency(chord) {
	const intervals = chord.normalized.intervals;

	const forbiddenCombo = allForbiddenCombos.find((combo) =>
		hasAll(intervals, combo)
	);

	if (forbiddenCombo) {
		throw new InvalidIntervalsError(chord, forbiddenCombo);
	}

	return chord;
}

;// CONCATENATED MODULE: ../../node_modules/chord-symbol/src/parser/filters/formatSymbol.js
/**
 * Render the chord by assembling all its components
 *
 * @param {Chord} chord
 * @returns {Chord}
 */
function formatSymbol(chord) {
	const { rootNote, bassNote, descriptor, chordChanges } = chord.formatted;

	let symbol = rootNote;

	if (descriptor) {
		symbol += descriptor;
	}
	if (chordChanges && chordChanges.length) {
		symbol += '(' + chordChanges.join(',') + ')';
	}
	if (bassNote) {
		symbol += '/' + bassNote;
	}

	chord.formatted.symbol = symbol;

	return chord;
}

;// CONCATENATED MODULE: ../../node_modules/chord-symbol/src/dictionaries/qualities.js
const qualities = {
	ma: 'major',
	ma6: 'major6',
	ma7: 'major7',
	dom7: 'dominant7',

	mi: 'minor',
	mi6: 'minor6',
	mi7: 'minor7',
	miMa7: 'minorMajor7',

	aug: 'augmented',
	dim: 'diminished',
	dim7: 'diminished7',

	power: 'power',
	bass: 'bass',
};

const majorQualities = [
	qualities.ma,
	qualities.ma6,
	qualities.ma7,
	qualities.dom7,
	qualities.aug,
];

const minorQualities = [
	qualities.mi,
	qualities.mi6,
	qualities.mi7,
	qualities.miMa7,
	qualities.dim,
	qualities.dim7,
];



;// CONCATENATED MODULE: ../../node_modules/chord-symbol/src/parser/filters/formatSymbolParts.js



const qualityToDescriptor = {
	[qualities.ma]: () => '',
	[qualities.ma6]: (chord) =>
		chord.normalized.intervals.includes('9') ? '69' : '6',
	[qualities.ma7]: (chord) => 'ma' + getHighestExtension(chord),
	[qualities.dom7]: (chord) =>
		chord.normalized.intents.alt ? '7alt' : getHighestExtension(chord),

	[qualities.mi]: () => 'mi',
	[qualities.mi6]: (chord) =>
		chord.normalized.intervals.includes('9') ? 'mi69' : 'mi6',
	[qualities.mi7]: (chord) => 'mi' + getHighestExtension(chord),
	[qualities.miMa7]: (chord) => 'miMa' + getHighestExtension(chord),

	[qualities.aug]: () => '+',
	[qualities.dim]: () => 'dim',
	[qualities.dim7]: () => 'dim7',

	[qualities.power]: () => '5',
	[qualities.bass]: () => ' bass',
};

const chordChangesDescriptors = {
	add: 'add',
	add7: 'Ma7',
	omit: 'omit',
	sus: 'sus',
};

/**
 * Pre-render the chord by formatting all his components: root and bass notes, descriptor and changes
 *
 * @param {Chord} chord
 * @returns {Chord}
 */
function formatSymbolParts(chord) {
	chord.formatted = {
		rootNote: chord.normalized.rootNote,
		bassNote: chord.normalized.bassNote,
		descriptor: getDescriptor(chord),
		chordChanges: getChordChanges(chord),
	};
	return chord;
}

function getDescriptor(chord) {
	let descriptor = qualityToDescriptor[chord.normalized.quality](chord);
	if (chord.normalized.isSuspended) {
		descriptor += chordChangesDescriptors.sus;
	}
	return descriptor;
}

function getHighestExtension(chord) {
	const extensions = chord.normalized.extensions;

	let highestExtension = extensions[extensions.length - 1];

	if (highestExtension === '11' && chord.normalized.intents.major) {
		highestExtension = hasNoneOf(chord.normalized.alterations, ['b9', '#9'])
			? '9'
			: '7';
	}
	return highestExtension || '7';
}

function getChordChanges(chord) {
	const formattedOmits = formatOmits(chord.normalized.omits);

	if (isAltered(chord)) {
		return formattedOmits;
	}

	const formattedAdds = formatAdds(
		chord.normalized.quality,
		chord.normalized.adds
	);

	return [
		...chord.normalized.alterations,
		...formattedAdds,
		...formattedOmits,
	];
}

function isAltered(chord) {
	return (
		chord.normalized.intents.alt &&
		chord.normalized.quality === qualities.dom7
	);
}

function formatAdds(quality, adds) {
	return adds
		.filter((add) => {
			return !(
				[qualities.ma6, qualities.mi6].includes(quality) && add === '9'
			);
		})
		.map((add, index) => {
			let formatted = '';
			if (index === 0) {
				formatted += chordChangesDescriptors.add;
				if (['b', '#'].includes(add[0])) {
					formatted += ' ';
				}
			}
			formatted += add === '7' ? chordChangesDescriptors.add7 : add;
			return formatted;
		});
}

function formatOmits(omits) {
	return omits.map((omitted, index) => {
		let formatted = '';
		if (index === 0) {
			formatted += chordChangesDescriptors.omit;
		}
		formatted += omitted === 'b3' ? '3' : omitted;
		return formatted;
	});
}

;// CONCATENATED MODULE: ../../node_modules/chord-symbol/src/dictionaries/degrees.js
const u = {
	flat: `\u266D`, // ♭
	sharp: `\u266F`, // ♯
};

const semitonesToDegree = {
	major: {
		0: `I`,
		//1: `${u.flat}II`,
		2: `II`,
		3: `${u.flat}III`,
		4: `III`,
		5: `IV`,
		//6: `${u.flat}V`,
		7: `V`,
		8: `${u.flat}VI`,
		9: `VI`,
		10: `${u.flat}VII`,
		11: `VII`,
	},
	minor: {
		0: `I`,
		//1: `${u.sharp}I`,
		2: `II`,
		3: `III`,
		4: `${u.sharp}III`,
		5: `IV`,
		//6: `${u.sharp}IV`,
		7: `V`,
		8: `VI`,
		9: `${u.sharp}VI`,
		10: `VII`,
		11: `${u.sharp}VII`,
	},
};

;// CONCATENATED MODULE: ../../node_modules/chord-symbol/src/parser/filters/formatNumeralSymbol.js




const formatNumeralSymbol_u = {
	sup2: '\u00B2', // ²
	sup4: '\u2074', // ⁴
	sup5: '\u2075', // ⁵
	sup6: '\u2076', // ⁶
	sup7: '\u2077', // ⁷
	sub3: '\u2083', // ₃
	sub4: '\u2084', // ₄
	sub5: '\u2085', // ₅
	flat: '\u266D', // ♭
	sharp: '\u266F', // ♯
};

const diatonicChords = {
	major: [`I`, `ii`, `iii`, `IV`, `V`, `vi`, `vii°`],
	dom7: [
		`IΔ`,
		`ii${formatNumeralSymbol_u.sup7}`,
		`iii${formatNumeralSymbol_u.sup7}`,
		`IVΔ`,
		`V${formatNumeralSymbol_u.sup7}`,
		`vi${formatNumeralSymbol_u.sup7}`,
		`viiø`,
	],
	minor: [`i`, `ii°`, `III`, `iv`, `v`, `VI`, `VII`],
	minor7: [
		`i${formatNumeralSymbol_u.sup7}`,
		`iiø`,
		`IIIΔ`,
		`iv${formatNumeralSymbol_u.sup7}`,
		`v${formatNumeralSymbol_u.sup7}`,
		`VIΔ`,
		`VIIΔ`,
	],
};

const borrowedChords = {
	borrowedFromMinor: [
		`i`,
		`ii°`,
		`${formatNumeralSymbol_u.flat}III`,
		`iv`,
		`v`,
		`${formatNumeralSymbol_u.flat}VI`,
		`${formatNumeralSymbol_u.flat}VII`,
	],
	borrowedFromMinor7: [
		`i${formatNumeralSymbol_u.sup7}`,
		`iiø`,
		`${formatNumeralSymbol_u.flat}IIIΔ`,
		`iv${formatNumeralSymbol_u.sup7}`,
		`v${formatNumeralSymbol_u.sup7}`,
		`${formatNumeralSymbol_u.flat}VIΔ`,
		`${formatNumeralSymbol_u.flat}VIIΔ`,
	],
	borrowedFromMajor: [
		`I`,
		`ii`,
		`${formatNumeralSymbol_u.sharp}iii`,
		`IV`,
		`V`,
		`${formatNumeralSymbol_u.sharp}vi`,
		`${formatNumeralSymbol_u.sharp}vii°`,
	],
	borrowedFromDom7: [
		`IΔ`,
		`ii${formatNumeralSymbol_u.sup7}`,
		`${formatNumeralSymbol_u.sharp}iii${formatNumeralSymbol_u.sup7}`,
		`IVΔ`,
		`V${formatNumeralSymbol_u.sup7}`,
		`${formatNumeralSymbol_u.sharp}vi${formatNumeralSymbol_u.sup7}`,
		`${formatNumeralSymbol_u.sharp}viiø`,
	],
};

/**
 * Construct the roman numeral symbol for a chord
 * @param {String} key
 * @param {Chord} chord
 * @returns {Chord}
 */
function formatNumeralSymbol(key = '', chord) {
	let degree;
	let symbol;
	let type;

	if (!key) key = chord.normalized.rootNote;

	const keyQuality = key.indexOf('m') > -1 ? 'minor' : 'major';
	const thirdQuality = minorQualities.includes(chord.normalized.quality)
		? 'minor'
		: 'major';

	degree = getRomanDegree(key, keyQuality, chord, thirdQuality);

	const inversion = getInversion(chord);
	const descriptor = formatNumeralSymbol_qualityToDescriptor[chord.normalized.quality](
		chord,
		inversion
	);

	symbol = `${degree}${descriptor}`;

	if (isDiatonic(keyQuality, symbol)) {
		type = 'diatonic';
	} else if (isBorrowed(keyQuality, symbol)) {
		type = 'borrowed';
	} else {
		type = 'unknown';
		degree = '?';
		symbol = `${degree}${descriptor}`;
	}

	symbol += inversion;

	chord.numeral = {
		symbol,
		degree,
		descriptor,
		inversion,
		type,
		thirdQuality,
	};
	return chord;
}

function getRomanDegree(key, keyQuality, chord, thirdQuality) {
	const keyNote = key.replace('m', '');

	const interval = getIntervalBetweenNotes(
		keyNote,
		chord.normalized.rootNote
	);
	const romanDegree = semitonesToDegree[keyQuality][interval] || '?';

	return thirdQuality === 'minor' ? romanDegree.toLowerCase() : romanDegree;
}

function getIntervalBetweenNotes(note1, note2) {
	const note1Index = notesSharp.indexOf(flatsToSharps[note1] || note1);
	const note2Index = notesSharp.indexOf(flatsToSharps[note2] || note2);
	return (note2Index - note1Index + 12) % 12;
}

const formatNumeralSymbol_qualityToDescriptor = {
	[qualities.ma]: () => '',
	[qualities.ma6]: () => '',
	[qualities.ma7]: () => 'Δ',
	[qualities.dom7]: (chord, inversion) =>
		inversion === '' ? `${formatNumeralSymbol_u.sup7}` : '',

	[qualities.mi]: () => '',
	[qualities.mi6]: () => '',
	[qualities.mi7]: (chord, inversion) => {
		if (chord.normalized.intervals.includes('b5')) {
			return 'ø';
		} else {
			return inversion === '' ? `${formatNumeralSymbol_u.sup7}` : '';
		}
	},
	[qualities.miMa7]: () => 'mΔ',

	[qualities.aug]: () => '+',
	[qualities.dim]: () => '°',
	[qualities.dim7]: (chord, inversion) =>
		inversion === '' ? `°${formatNumeralSymbol_u.sup7}` : '°',

	[qualities.power]: () => '',
	[qualities.bass]: () => '',
};

function isDiatonic(keyQuality, symbol) {
	if (keyQuality === 'major') {
		return (
			diatonicChords.major.includes(symbol) ||
			diatonicChords.dom7.includes(symbol)
		);
	} else {
		return (
			diatonicChords.minor.includes(symbol) ||
			diatonicChords.minor7.includes(symbol)
		);
	}
}

function isBorrowed(keyQuality, symbol) {
	if (keyQuality === 'major') {
		return (
			borrowedChords.borrowedFromMinor.includes(symbol) ||
			borrowedChords.borrowedFromMinor7.includes(symbol)
		);
	} else {
		return (
			borrowedChords.borrowedFromMajor.includes(symbol) ||
			borrowedChords.borrowedFromDom7.includes(symbol)
		);
	}
}

function getInversion(chord) {
	let inversion = '';
	if (chord.normalized.bassNote) {
		if (bassIsThird(chord)) {
			inversion = isSeventh(chord) ? `${formatNumeralSymbol_u.sup6}${formatNumeralSymbol_u.sub5}` : `${formatNumeralSymbol_u.sup6}`;
		} else if (bassIsFifth(chord)) {
			inversion = isSeventh(chord)
				? `${formatNumeralSymbol_u.sup4}${formatNumeralSymbol_u.sub3}`
				: `${formatNumeralSymbol_u.sup6}${formatNumeralSymbol_u.sub4}`;
		} else if (bassIsSeventh(chord)) {
			inversion = `²`;
		}
	}
	return inversion;
}

function isSeventh(chord) {
	return [
		qualities.ma7,
		qualities.mi7,
		qualities.miMa7,
		qualities.dom7,
		qualities.dim7,
	].includes(chord.normalized.quality);
}

function bassIsThird(chord) {
	return bassIsIntervalNote(chord, 'b3') || bassIsIntervalNote(chord, '3');
}

function bassIsFifth(chord) {
	return (
		bassIsIntervalNote(chord, 'b5') ||
		bassIsIntervalNote(chord, '5') ||
		bassIsIntervalNote(chord, '#5')
	);
}

function bassIsSeventh(chord) {
	return (
		bassIsIntervalNote(chord, 'bb7') ||
		bassIsIntervalNote(chord, 'b7') ||
		bassIsIntervalNote(chord, '7')
	);
}

function bassIsIntervalNote(chord, interval) {
	const intervalNoteIndex = chord.normalized.intervals.indexOf(interval);
	if (intervalNoteIndex === -1) return false;

	const normalizedBassNote =
		flatsToSharps[chord.normalized.bassNote] || chord.normalized.bassNote;
	const normalizedIntervalNote =
		flatsToSharps[chord.normalized.notes[intervalNoteIndex]] ||
		chord.normalized.notes[intervalNoteIndex];

	return normalizedBassNote === normalizedIntervalNote;
}

;// CONCATENATED MODULE: ../../node_modules/chord-symbol/src/parser/filters/getParsableDescriptor.js


/**
 * Prepare whatever string has been identified as a descriptor so it is parsable by the next filter
 *
 * @param {Chord} chord
 * @returns {Chord}
 */
function getParsableDescriptor(chord) {
	const allFilters = [
		toLowerCaseExceptMajorM,
		removeSpaces,
		addDisambiguators,
		addMissingVerbs,
	];

	if (chord.input.descriptor) {
		chord.input.parsableDescriptor = chain(
			allFilters,
			chord.input.descriptor
		);
	}
	return chord;
}

function toLowerCaseExceptMajorM(descriptor) {
	return descriptor
		.replace(/[A-LN-Za-z]+/g, (match) => match.toLowerCase())
		.replace('oMit', 'omit')
		.replace('diM', 'dim')
		.replace('augMented', 'augmented');
}

function removeSpaces(descriptor) {
	return descriptor.replace(/ /g, '');
}

function addDisambiguators(descriptor) {
	return descriptor
		.replace(/(7?dim)(alt|add)/g, '$1 $2')
		.replace(/([m|M])(alt|add)/g, '$1 $2')
		.replace(/i(no[35])/g, 'i $1')
		.replace(/([b♭#♯]9)6/g, '$1 6')
		.replace(/(9\/?6)/g, ' $1')
		.replaceAll('+5', '#5')
		.replaceAll('-5', 'b5');
}

function addMissingVerbs(descriptor) {
	let allTokensWithVerbs;
	let currentVerb;
	let hasVerb;

	return descriptor.replace(/\((.*?)\)/g, (match, parenthesis) => {
		allTokensWithVerbs = [];
		currentVerb = '';

		parenthesis.split(',').forEach((token) => {
			hasVerb = true;
			if (token.startsWith('add')) {
				currentVerb = 'add';
			} else if (token.startsWith('omit')) {
				currentVerb = 'omit';
			} else if (token.startsWith('no')) {
				currentVerb = 'no';
			} else {
				hasVerb = false;
			}
			if (hasVerb) {
				allTokensWithVerbs.push(token);
			} else {
				allTokensWithVerbs.push(currentVerb + token);
			}
		});
		return ' ' + allTokensWithVerbs.join(' ') + ' ';
	});
}

;// CONCATENATED MODULE: ../../node_modules/chord-symbol/src/parser/filters/initChord.js


/**
 * @param {String} symbol
 * @param {Object} parserConfiguration
 * @returns {Chord}
 */
function initChord(parserConfiguration = {}, symbol) {
	return {
		input: {
			symbol,
		},
		normalized: {},
		formatted: {},
		parserConfiguration: cloneDeep_default()(parserConfiguration),
	};
}

;// CONCATENATED MODULE: ../../node_modules/chord-symbol/src/dictionaries/scales.js
const scaleToAccidental = {
	C: 'flat',
	D: 'sharp',
	E: 'sharp',
	F: 'flat',
	G: 'sharp',
	A: 'sharp',
	B: 'sharp',

	Cm: 'flat',
	Dm: 'flat',
	Em: 'sharp',
	Fm: 'flat',
	Gm: 'flat',
	Am: 'flat',
	Bm: 'sharp',
};

function getScaleAccidental(scale) {
	if (scale.indexOf('#') > -1) {
		return 'sharp';
	} else if (scale.indexOf('b') > -1) {
		return 'flat';
	} else return scaleToAccidental[scale];
}



;// CONCATENATED MODULE: ../../node_modules/chord-symbol/src/parser/filters/nameIndividualChordNotes.js




/**
 * Convert intervals in actual notes.
 *
 * @param {Chord} chord
 * @returns {Chord}
 */
function nameIndividualChordNotes(chord) {
	const rootNote = chord.normalized.rootNote;
	const semitones = chord.normalized.semitones;
	const quality = chord.normalized.quality;

	let scale = rootNote;
	if (minorQualities.includes(quality)) {
		scale += 'm';
	}
	const refNotes =
		getScaleAccidental(scale) === 'sharp' ? notesSharp : notesFlat;

	const rootNoteIndex = refNotes.indexOf(rootNote);
	const indexedNotes = [
		...refNotes.slice(rootNoteIndex),
		...refNotes.slice(0, rootNoteIndex),
		// repeating...
		...refNotes.slice(rootNoteIndex),
		...refNotes.slice(0, rootNoteIndex),
	];

	chord.normalized.notes = semitones.map((i) => indexedNotes[i]);

	return chord;
}

;// CONCATENATED MODULE: ../../node_modules/chord-symbol/src/parser/filters/normalizeNotes.js


/**
 * Convert root/bass notes to English names
 *
 * @param {Chord} chord
 * @returns {Chord}
 */
function normalizeNotes(chord) {
	chord.normalized.rootNote = allVariantsToNotes[chord.input.rootNote];

	if (chord.input.bassNote) {
		chord.normalized.bassNote = allVariantsToNotes[chord.input.bassNote];
	}

	return chord;
}

// EXTERNAL MODULE: ../../node_modules/lodash/clone.js
var clone = __webpack_require__(2846);
var clone_default = /*#__PURE__*/__webpack_require__.n(clone);
// EXTERNAL MODULE: ../../node_modules/lodash/find.js
var find = __webpack_require__(1936);
var find_default = /*#__PURE__*/__webpack_require__.n(find);
// EXTERNAL MODULE: ../../node_modules/lodash/uniq.js
var uniq = __webpack_require__(2438);
var uniq_default = /*#__PURE__*/__webpack_require__.n(uniq);
// EXTERNAL MODULE: ../../node_modules/lodash/without.js
var without = __webpack_require__(795);
var without_default = /*#__PURE__*/__webpack_require__.n(without);
;// CONCATENATED MODULE: ../../node_modules/chord-symbol/src/parser/filters/normalizeDescriptor.js











/**
 * Detect chord quality and changes (extensions, alterations, adds and omits)
 *
 * @param {Chord} chord
 * @returns {Chord}
 */
function normalizeDescriptor(chord) {
	let chordIntervals = clone_default()(chord.normalized.intervals);

	let normalized = {
		quality: '',
		isSuspended: false,
		extensions: [],
		alterations: [],
		adds: [],
		omits: [],
	};

	if (isPowerChord(chordIntervals)) {
		normalized.quality = qualities.power;
	} else if (isBass(chordIntervals)) {
		normalized.quality = qualities.bass;
	} else {
		const omits = getOmits(chordIntervals, chord.normalized.intents.major);

		const isSuspended = getIsSuspended(
			chordIntervals,
			chord.normalized.intents.major
		);

		const { qualityIntervals, quality } = getChordQuality(
			chordIntervals,
			chord,
			isSuspended,
			omits
		);

		const extensions = getExtensions(chordIntervals, quality);

		// to be able to detect adds and alterations, we build the "straight" version of the chord,
		// ie. the chord as if no alterations/adds/omits where present.
		// we will compare this to the actual intervals later on
		const baseIntervals = ['1', ...qualityIntervals, ...extensions];

		const { adds, alterations } = getAddsAndAlterations(
			chordIntervals,
			baseIntervals,
			quality
		);

		normalized = {
			...normalized,
			quality,
			isSuspended,
			extensions,
			alterations,
			adds,
			omits,
		};
	}

	return {
		...chord,
		normalized: {
			...chord.normalized,
			...normalized,
		},
	};
}

function isPowerChord(intervals) {
	return hasExactly(intervals, ['1', '5']);
}

function isBass(intervals) {
	return hasExactly(intervals, ['1']);
}

function getIsSuspended(intervals, hasMajorIntent) {
	return (
		intervals.includes('4') ||
		(intervals.includes('11') && hasMajorIntent && !intervals.includes('3'))
	);
}

function getOmits(intervals, hasMajorIntent) {
	const omits = [];

	if (
		hasNoneOf(intervals, ['b3', '3', '4', '11']) ||
		(!hasMajorIntent && hasNoneOf(intervals, ['b3', '4']))
	) {
		omits.push(hasMajorIntent ? '3' : 'b3');
	}

	if (hasNoneOf(intervals, ['b5', '5', '#5', 'b13'])) {
		omits.push('5');
	}
	return omits;
}

function getChordQuality(allIntervals, chord, isSuspended, omits) {
	const intervalsForQualityDetection = getIntervalsForQualityDetection(
		allIntervals,
		chord,
		isSuspended,
		omits
	);

	const intervalsToQualities = [
		// !!! do not change order without a good reason
		{ qualityIntervals: ['b3'], quality: qualities.mi },
		{ qualityIntervals: ['b3', '6'], quality: qualities.mi6 },
		{ qualityIntervals: ['b3', '7'], quality: qualities.miMa7 },
		{ qualityIntervals: ['b3', 'b7'], quality: qualities.mi7 },

		{ qualityIntervals: ['3'], quality: qualities.ma },
		{ qualityIntervals: ['3', '6'], quality: qualities.ma6 },
		{ qualityIntervals: ['3', '7'], quality: qualities.ma7 },
		{ qualityIntervals: ['3', 'b7'], quality: qualities.dom7 },

		{ qualityIntervals: ['3', '#5'], quality: qualities.aug },
		{ qualityIntervals: ['b3', 'b5'], quality: qualities.dim },
		{ qualityIntervals: ['b3', 'b5', 'bb7'], quality: qualities.dim7 },
	].sort((a, b) => b.qualityIntervals.length - a.qualityIntervals.length);

	return find_default()(intervalsToQualities, (o) =>
		hasAll(intervalsForQualityDetection, o.qualityIntervals)
	);
}

// To properly detect the chord quality, we need a "straight" version of the chord,
// meaning with a third interval (= un-suspended, no omit3)
function getIntervalsForQualityDetection(
	allIntervals,
	chord,
	isSuspended,
	omits
) {
	const allFilters = [
		undoOmit3.bind(null, omits),
		undoSuspension.bind(null, isSuspended, chord.normalized.intents.major),
		undoAlt5.bind(null, chord.normalized.intents.alt),
		(uniq_default()),
	];

	return chain(allFilters, clone_default()(allIntervals));
}

function undoOmit3(omits, allIntervals) {
	const with3rd = clone_default()(allIntervals);

	if (omits.includes('3')) {
		with3rd.push('3');
	} else if (omits.includes('b3')) {
		with3rd.push('b3');
	}
	return with3rd;
}

function undoSuspension(isSuspended, hasMajorIntent, allIntervals) {
	if (isSuspended) {
		const unSuspended = without_default()(allIntervals, '4');
		unSuspended.push(hasMajorIntent ? '3' : 'b3');
		return unSuspended;
	}
	return allIntervals;
}

function undoAlt5(isAlt, allIntervals) {
	if (isAlt) {
		const unaltered = without_default()(allIntervals, 'b5', '#5');
		unaltered.push('5');
		return unaltered;
	}
	return allIntervals;
}

function getExtensions(allIntervals, quality) {
	const extensions = [];

	if (canBeExtended(quality)) {
		if (isMinorExtended13th(allIntervals, quality)) {
			extensions.push('9', '11', '13');
		} else if (isMajorExtended13th(allIntervals, quality)) {
			extensions.push('9', '13');
		} else if (isExtended11th(allIntervals)) {
			extensions.push('9', '11');
		} else if (isExtended9th(allIntervals)) {
			extensions.push('9');
		}
	}
	return extensions;
}

function canBeExtended(quality) {
	return [
		qualities.ma7,
		qualities.dom7,
		qualities.mi7,
		qualities.miMa7,
	].includes(quality);
}

function canHave11th(quality) {
	return [qualities.mi7, qualities.miMa7].includes(quality);
}

function isMinorExtended13th(allIntervals, quality) {
	return (
		canHave11th(quality) &&
		hasOneOf(allIntervals, '13') &&
		hasOneOf(allIntervals, ['11', '#11']) &&
		hasOneOf(allIntervals, ['b9', '9', '#9'])
	);
}

function isMajorExtended13th(allIntervals, quality) {
	return (
		!canHave11th(quality) &&
		hasOneOf(allIntervals, '13') &&
		hasOneOf(allIntervals, ['b9', '9', '#9'])
	);
}

function isExtended11th(allIntervals) {
	return (
		hasOneOf(allIntervals, '11') &&
		hasOneOf(allIntervals, ['b9', '9', '#9'])
	);
}

function isExtended9th(allIntervals) {
	return allIntervals.includes('9');
}

function getAddsAndAlterations(chordIntervals, baseIntervals, quality) {
	const adds = [];
	const alterations = [];

	chordIntervals
		.filter((interval) => interval !== '5' && interval !== '4')
		.forEach((interval) => {
			if (!baseIntervals.includes(interval)) {
				if (isAlteration(quality, interval)) {
					alterations.push(interval);
				} else {
					adds.push(interval);
				}
			}
		});

	if (hasAdd3(chordIntervals)) {
		adds.push('3');
	}

	return {
		adds: sortIntervals(adds),
		alterations: sortIntervals(alterations),
	};
}

function isAlteration(quality, interval) {
	const qualityAlterations = {
		[qualities.ma]: ['b5', '#5', '#11', 'b13'],
		[qualities.ma6]: ['b5', '#5', '#11', 'b13'],
		[qualities.ma7]: ['b5', '#5', '#11', 'b13'],
		[qualities.dom7]: ['b5', '#5', 'b9', '#9', '#11', 'b13'],

		[qualities.mi]: ['b5', '#5', '#11', 'b13'],
		[qualities.mi6]: ['b5', '#5', '#11', 'b13'],
		[qualities.mi7]: ['b5', '#5', '#11', 'b13'],
		[qualities.miMa7]: ['b5', '#5', '#11', 'b13'],

		[qualities.aug]: [],
		[qualities.dim]: [],
		[qualities.dim7]: [],
	};

	return qualityAlterations[quality].includes(interval);
}

function hasAdd3(allIntervals) {
	return hasAll(allIntervals, ['3', '4']);
}

function sortIntervals(intervals) {
	return intervals.sort((a, b) => {
		const sortableA = Number.parseInt(a.replace(/[b#]/, ''));
		const sortableB = Number.parseInt(b.replace(/[b#]/, ''));
		return sortableA - sortableB;
	});
}

;// CONCATENATED MODULE: ../../node_modules/chord-symbol/src/parser/filters/parseBase.js


/**
 * Split symbol in root/bass note and descriptor.
 * Returns null if the given string does not seems to be a chord.
 *
 * @param {String[]} noteVariants - all notes within a given notation system (English, Latin, German...)
 * @param {Chord} chord
 * @returns {(Chord|Null)}
 */
function parseBase(noteVariants, chord) {
	const { symbol } = chord.input;
	const notesRegex = noteVariants.join('|');
	const notesAndDescriptorRegex = new RegExp(
		'^' +
			'(' +
			notesRegex +
			')' +
			'(.*?)' +
			'(/(' +
			notesRegex +
			'))?' +
			'$'
	);
	const result = symbol.match(notesAndDescriptorRegex);

	if (result && result[1]) {
		chord.input.rootNote = result[1];

		if (result[2]) {
			chord.input.descriptor = result[2];
		}
		if (result[4]) {
			chord.input.bassNote = result[4];
		}
		return chord;
	} else {
		throw new NoSymbolFoundError(chord);
	}
}

;// CONCATENATED MODULE: ../../node_modules/chord-symbol/src/dictionaries/modifiers.js
const allModifiers = {
	// base
	ma: 'ma',
	mi: 'mi',
	dim: 'dim',
	halfDim: 'halfDim',
	aug: 'aug',
	seventh: 'seventh',

	// suspended
	sus: 'sus',
	sus2: 'sus2',

	// extensions
	ninth: 'ninth',
	eleventh: 'eleventh',
	thirteenth: 'thirteenth',

	// alterations
	fifthFlat: 'b5',
	fifthSharp: '#5',
	ninthFlat: 'b9',
	ninthSharp: '#9',
	eleventhSharp: '#11',
	thirteenthFlat: 'b13',

	// added
	add3: 'add3',
	add4: 'add4',
	addb6: 'addb6',
	add6: 'add6',
	add69: 'add69',
	add7: 'add7',
	add9: 'add9',
	add11: 'add11',
	add13: 'add13',

	// special
	bass: 'bass',
	omit3: 'omit3',
	omit5: 'omit5',
	power: 'power',
	alt: 'alt',
};

/**
 * WARNING: when adding new modifiers symbols, be careful of possible edge cases that might arise with some combinations.
 * For example, without edge case handling, "madd9" would be parsed as "ma" instead of "m"+"add9"
 */

const major = {
	'^': [allModifiers.ma, allModifiers.add7],
	Δ: [allModifiers.ma, allModifiers.add7],
	M: allModifiers.ma,
	Ma: allModifiers.ma,
	Maj: allModifiers.ma,
	Major: allModifiers.ma,
	ma: allModifiers.ma,
	maj: allModifiers.ma,
	major: allModifiers.ma,
};

const major7th = getDerivedModifiers(
	major,
	allModifiers.add7,
	(symbol) => symbol + '7'
);
const add7 = getDerivedModifiers(
	major,
	allModifiers.add7,
	(symbol) => 'add' + symbol + '7'
);

const allSymbols = {
	// major
	...major,
	...major7th,

	// minor
	'-': allModifiers.mi,
	m: allModifiers.mi,
	Mi: allModifiers.mi,
	Min: allModifiers.mi,
	Minor: allModifiers.mi,
	mi: allModifiers.mi,
	min: allModifiers.mi,
	minor: allModifiers.mi,

	// diminished / augmented
	'°': allModifiers.dim,
	o: allModifiers.dim,
	0: allModifiers.dim,
	dim: allModifiers.dim,
	'dim.': allModifiers.dim,
	diminished: allModifiers.dim,

	Ø: allModifiers.halfDim,
	ø: allModifiers.halfDim,
	h: allModifiers.halfDim,

	'+': allModifiers.aug,
	aug: allModifiers.aug,
	augmented: allModifiers.aug,

	// seventh
	7: allModifiers.seventh,

	// suspended
	4: allModifiers.sus,
	sus: allModifiers.sus,
	sus4: allModifiers.sus,
	suspended: allModifiers.sus,
	suspended4: allModifiers.sus,
	sus2: allModifiers.sus2,
	suspended2: allModifiers.sus2,

	// extensions
	9: allModifiers.ninth,
	11: allModifiers.eleventh,
	13: allModifiers.thirteenth,

	// alterations
	b3: allModifiers.mi,
	b5: allModifiers.fifthFlat,
	'♭5': allModifiers.fifthFlat,
	'#5': allModifiers.fifthSharp,
	'♯5': allModifiers.fifthSharp,
	b9: allModifiers.ninthFlat,
	'♭9': allModifiers.ninthFlat,
	addb9: allModifiers.ninthFlat,
	'add♭9': allModifiers.ninthFlat,
	'#9': allModifiers.ninthSharp,
	'♯9': allModifiers.ninthSharp,
	'add#9': allModifiers.ninthSharp,
	'add♯9': allModifiers.ninthSharp,
	'#11': allModifiers.eleventhSharp,
	'♯11': allModifiers.eleventhSharp,
	'add#11': allModifiers.eleventhSharp,
	b13: allModifiers.thirteenthFlat,
	'♭13': allModifiers.thirteenthFlat,
	addb13: allModifiers.thirteenthFlat,
	'add♭13': allModifiers.thirteenthFlat,

	// added
	...add7,
	2: allModifiers.add9,
	add2: allModifiers.add9,
	add3: allModifiers.add3,
	add4: allModifiers.add4,
	addb6: allModifiers.addb6,
	b6: allModifiers.addb6,
	6: allModifiers.add6,
	add6: allModifiers.add6,
	'6/9': allModifiers.add69,
	69: allModifiers.add69,
	96: allModifiers.add69,
	'9/6': allModifiers.add69,
	add9: allModifiers.add9,
	add11: allModifiers.add11,
	add13: allModifiers.add13,

	// special
	bass: allModifiers.bass,
	omit3: allModifiers.omit3,
	no3: allModifiers.omit3,
	omit5: allModifiers.omit5,
	no5: allModifiers.omit5,
	5: allModifiers.power,
	alt: allModifiers.alt,
	'alt.': allModifiers.alt,
	altered: allModifiers.alt,
};

function getDerivedModifiers(source, modifierId, derivedFn) {
	return Object.keys(source)
		.map(derivedFn)
		.reduce((acc, curr) => {
			acc[curr] = modifierId;
			return acc;
		}, {});
}

const modifiers_allVariants = Object.keys(allSymbols).sort((a, b) => b.length - a.length);


/* harmony default export */ const modifiers = (allModifiers);

;// CONCATENATED MODULE: ../../node_modules/chord-symbol/src/dictionaries/intervalsToSemitones.js
/* harmony default export */ const intervalsToSemitones = ({
	1: 0,
	2: 2,
	b3: 3,
	3: 4,
	4: 5,
	b5: 6,
	5: 7,
	'#5': 8,
	b6: 8,
	6: 9,
	bb7: 9,
	b7: 10,
	7: 11,
	b9: 13,
	9: 14,
	'#9': 15,
	11: 17,
	'#11': 18,
	b13: 20,
	13: 21,
});

;// CONCATENATED MODULE: ../../node_modules/chord-symbol/src/parser/filters/parseDescriptor.js








/**
 * Convert the descriptor into a suite of intervals, semitones and intents
 *
 * @param {Array<('b5'|'#5'|'b9'|'#9'|'#11'|'b13')>} altIntervals
 * @param {Chord} chord
 * @returns {(Chord|Null)}
 */
function parseDescriptor(altIntervals, chord) {
	let allModifiers = [];

	if (chord.input.parsableDescriptor) {
		allModifiers = getModifiers(chord);
	}

	chord.input.modifiers = allModifiers;
	chord.normalized.intervals = getIntervals(allModifiers, altIntervals);
	chord.normalized.semitones = getSemitones(chord.normalized.intervals);
	chord.normalized.intents = getIntents(allModifiers);

	return chord;
}

function getModifiers(chord) {
	const { parsableDescriptor } = chord.input;
	const modifiers = [];

	const descriptorRegex = new RegExp(
		modifiers_allVariants.map(escapeRegex).join('|'),
		'g'
	);
	const descriptorMatches = parsableDescriptor.match(descriptorRegex);

	let remainingChars = parsableDescriptor;
	let allModifiersId;

	if (descriptorMatches) {
		descriptorMatches.forEach((match) => {
			allModifiersId = allSymbols[match];

			if (!Array.isArray(allModifiersId)) {
				allModifiersId = [allModifiersId];
			}

			allModifiersId.forEach((modifierId) => {
				if (modifiers.includes(modifierId)) {
					return;
				}
				modifiers.push(modifierId);

				remainingChars = remainingChars.replace(match, '');
			});
		});
	}

	if (modifiers.length === 0) {
		throw new NoSymbolFoundError(chord);
	}
	if (remainingChars.trim().length > 0) {
		throw new InvalidModifierError(chord, remainingChars);
	}

	return modifiers;
}

function getIntervals(allModifiers, altIntervals) {
	if (allModifiers.includes(modifiers.power)) {
		return ['1', '5'];
	} else if (allModifiers.includes(modifiers.bass)) {
		return ['1'];
	}

	return uniq_default()([
		'1',
		...getThird(allModifiers),
		...getFourth(allModifiers),
		...getFifths(allModifiers, altIntervals),
		...getSixth(allModifiers),
		...getSevenths(allModifiers),
		...getNinths(allModifiers, altIntervals),
		...getElevenths(allModifiers, altIntervals),
		...getThirteenths(allModifiers, altIntervals),
	]).sort((a, b) => intervalsToSemitones[a] - intervalsToSemitones[b]);
}

function getThird(allModifiers) {
	const third = [];
	if (allModifiers.includes(modifiers.omit3)) {
		return [];
	}
	if (!hasOneOf(allModifiers, [modifiers.sus, modifiers.sus2])) {
		if (!hasMajorIntent(allModifiers)) {
			third.push('b3');
		} else if (!allModifiers.includes(modifiers.eleventh)) {
			third.push('3');
		}
	}
	if (allModifiers.includes(modifiers.add3)) {
		third.push('3');
	}
	return third;
}

function getFourth(allModifiers) {
	const fourth = [];
	if (hasOneOf(allModifiers, [modifiers.sus, modifiers.add4])) {
		fourth.push('4');
	}
	return fourth;
}

function getFifths(allModifiers, altIntervals) {
	const fifths = [];
	if (allModifiers.includes(modifiers.omit5)) {
		return [];
	}
	if (
		hasOneOf(allModifiers, [modifiers.dim, modifiers.halfDim, modifiers.fifthFlat]) ||
		shouldAlter(allModifiers, altIntervals, 'b5')
	) {
		fifths.push('b5');
	}
	if (
		hasOneOf(allModifiers, [modifiers.aug, modifiers.fifthSharp]) ||
		shouldAlter(allModifiers, altIntervals, '#5')
	) {
		fifths.push('#5');
	}
	if (!fifths.length && !allModifiers.includes(modifiers.thirteenthFlat)) {
		fifths.push('5');
	}
	return fifths;
}

function getSixth(allModifiers) {
	const sixth = [];
	if (hasOneOf(allModifiers, [modifiers.addb6])) {
		sixth.push('b6');
	}
	if (
		hasOneOf(allModifiers, [modifiers.add6, modifiers.add69]) &&
		!isExtended(allModifiers) &&
		!hasOneOf(allModifiers, [modifiers.halfDim])
	) {
		sixth.push('6');
	}
	return sixth;
}

function getSevenths(allModifiers) {
	const sevenths = [];
	if (hasOneOf(allModifiers, [modifiers.alt])) {
		sevenths.push('b7');
	}
	if (hasOneOf(allModifiers, [modifiers.seventh, modifiers.halfDim])) {
		if (allModifiers.includes(modifiers.dim)) {
			sevenths.push('bb7');
		} else if (allModifiers.includes(modifiers.halfDim)) {
			sevenths.push('b7');
		} else {
			sevenths.push(getMinorOrMajorSeventh(allModifiers));
		}
	} else if (hasOneOf(allModifiers, [modifiers.ninth, modifiers.eleventh, modifiers.thirteenth])) {
		sevenths.push(getMinorOrMajorSeventh(allModifiers));
	}
	if (allModifiers.includes(modifiers.add7)) {
		sevenths.push('7');
	}
	return sevenths;
}

function getMinorOrMajorSeventh(allModifiers) {
	return allModifiers.includes(modifiers.ma) ? '7' : 'b7';
}

function getNinths(allModifiers, altIntervals) {
	const ninth = [];
	if (
		hasOneOf(allModifiers, [modifiers.add69, modifiers.ninth, modifiers.eleventh, modifiers.thirteenth]) &&
		hasNoneOf(allModifiers, [modifiers.ninthFlat, modifiers.ninthSharp])
	) {
		ninth.push('9');
	}
	if (hasOneOf(allModifiers, [modifiers.sus2, modifiers.add9])) {
		ninth.push('9');
	}
	if (
		hasOneOf(allModifiers, [modifiers.ninthFlat]) ||
		shouldAlter(allModifiers, altIntervals, 'b9')
	) {
		ninth.push('b9');
	}
	if (
		hasOneOf(allModifiers, [modifiers.ninthSharp]) ||
		shouldAlter(allModifiers, altIntervals, '#9')
	) {
		ninth.push('#9');
	}
	return ninth;
}

function getElevenths(allModifiers, altIntervals) {
	const elevenths = [];
	if (
		hasOneOf(allModifiers, [modifiers.thirteenth]) &&
		!hasMajorIntent(allModifiers)
	) {
		elevenths.push('11');
	} else if (hasOneOf(allModifiers, [modifiers.eleventh, modifiers.add11])) {
		elevenths.push('11');
	}
	if (
		hasOneOf(allModifiers, [modifiers.eleventhSharp]) ||
		shouldAlter(allModifiers, altIntervals, '#11')
	) {
		elevenths.push('#11');
	}
	return elevenths;
}

function getThirteenths(allModifiers, altIntervals) {
	const thirteenths = [];
	if (
		hasOneOf(allModifiers, [modifiers.add13, modifiers.thirteenth]) ||
		(hasOneOf(allModifiers, [modifiers.add6, modifiers.add69]) &&
			isExtended(allModifiers)) ||
		(hasOneOf(allModifiers, [modifiers.add6, modifiers.add69]) &&
			hasOneOf(allModifiers, [modifiers.halfDim]))
	) {
		thirteenths.push('13');
	}
	if (
		hasOneOf(allModifiers, [modifiers.thirteenthFlat]) ||
		shouldAlter(allModifiers, altIntervals, 'b13')
	) {
		thirteenths.push('b13');
	}
	return thirteenths;
}

function shouldAlter(allModifiers, altIntervals, interval) {
	return allModifiers.includes(modifiers.alt) && altIntervals.includes(interval);
}

function hasMajorIntent(allModifiers) {
	return hasNoneOf(allModifiers, [modifiers.mi, modifiers.dim, modifiers.dim7, modifiers.halfDim]);
}

function isExtended(allModifiers) {
	return hasOneOf(allModifiers, [
		modifiers.seventh,
		modifiers.ninth,
		modifiers.eleventh,
		modifiers.thirteenth,
	]);
}

// Based on https://stackoverflow.com/a/6969486
function escapeRegex(string) {
	return string.replace(/[.\-*+?^${}()|[\]\\]/g, '\\$&');
}

function getSemitones(allIntervals) {
	return allIntervals
		.map((interval) => intervalsToSemitones[interval])
		.sort((a, b) => a - b);
}

// intents will be used later at formatting for disambiguation of some potentially confusing cases
function getIntents(allModifiers) {
	return {
		major: hasMajorIntent(allModifiers),
		eleventh: allModifiers.includes(modifiers.eleventh),
		alt: allModifiers.includes(modifiers.alt),
	};
}

;// CONCATENATED MODULE: ../../node_modules/chord-symbol/src/parser/chordParserFactory.js






















/**
 * Create a chord parser function
 * @param {ParserConfiguration} [parserConfiguration]
 * @returns {function(String): MaybeChord}
 */
function chordParserFactory(parserConfiguration = {}) {
	const allAltIntervals = ['b5', '#5', 'b9', '#9', '#11', 'b13'];
	const allNotationSystems = ['english', 'german', 'latin'];

	const {
		notationSystems = cloneDeep_default()(allNotationSystems),
		altIntervals = cloneDeep_default()(allAltIntervals),
		customFilters = [],
		key = '',
	} = parserConfiguration;

	checkAltIntervals(altIntervals, allAltIntervals);
	checkNotationSystems(notationSystems, allNotationSystems);
	helpers_checkCustomFilters(customFilters);
	checkKey(key);

	return parseChord;

	/**
	 * Convert an input string into an abstract chord structure
	 * @param {String} symbol - the chord symbol candidate
	 * @returns {MaybeChord} A chord data object if the given string is successfully parsed.
	 *   A chord parse failure object with an `error` property otherwise.
	 */
	function parseChord(symbol) {
		const allErrors = [];

		if (!isInputValid(symbol)) {
			const e = new InvalidInputError();
			allErrors.push(formatError(e));
		}

		const allVariantsPerGroupCopy = cloneDeep_default()(allVariantsPerGroup).filter(
			(variantsGroup) => notationSystems.includes(variantsGroup.name)
		);

		let chord;
		let allFilters;
		let variants;

		if (!allErrors.length) {
			while (allVariantsPerGroupCopy.length && !chord) {
				variants = allVariantsPerGroupCopy.shift();

				allFilters = [
					initChord.bind(null, parserConfiguration),
					parseBase.bind(null, variants.notes),
					getParsableDescriptor,
					parseDescriptor.bind(null, altIntervals),
					checkIntervalsConsistency,
					normalizeNotes,
					normalizeDescriptor,
					formatSymbolParts,
					formatSymbol,
					nameIndividualChordNotes,
					formatNumeralSymbol.bind(null, key),
					...customFilters,
				];

				try {
					chord = chain(allFilters, symbol);
					if (chord) {
						chord.input.notationSystem = variants.name;
					} else {
						allErrors.push(getUnexpectedError(variants.name));
					}
				} catch (e) {
					allErrors.push(formatError(e, variants.name));
				}
			}
		}

		return chord ? chord : { error: allErrors };
	}
}

function checkAltIntervals(altIntervals, allAltIntervals) {
	checkArray('altIntervals', altIntervals, allAltIntervals, true);
}

function checkNotationSystems(notationSystems, allNotationSystems) {
	checkArray('notationSystems', notationSystems, allNotationSystems);
}

function checkArray(arrayName, arrayToTest, allowedValues, allowEmpty) {
	if (!Array.isArray(arrayToTest)) {
		throw new TypeError(`'${arrayName}' should be an array`);
	}
	if (!allowEmpty && arrayToTest.length === 0) {
		throw new TypeError(`'${arrayName}' cannot be empty`);
	}
	arrayToTest.forEach((system) => {
		if (!allowedValues.includes(system)) {
			throw new TypeError(
				`'${system}' is not a valid value for ${arrayName}`
			);
		}
	});
}

function checkKey(key) {
	if (key !== '' && (!isString_default()(key) || !allKeys.includes(key))) {
		throw new TypeError(`'${key}' is not a valid value for key`);
	}
}

function isInputValid(input) {
	return typeof input === 'string' && input.length > 0;
}

function getUnexpectedError(notationSystem) {
	const error = new UnexpectedError();
	return formatError(error, notationSystem);
}

function formatError(exceptionError, notationSystem) {
	return {
		type: exceptionError.name,
		chord: exceptionError.chord,
		message: exceptionError.message,
		notationSystem,
	};
}

/**
 * @module chordParserFactory
 * Expose the chordParserFactory() function
 */
/* harmony default export */ const parser_chordParserFactory = (chordParserFactory);

;// CONCATENATED MODULE: ../../node_modules/chord-symbol/src/renderer/filters/shortenNormalized.js


const shortDescriptors = {
	sus2: 'sus2',
	add2: '2',
	omit: 'no',
	ma: 'M',
	mi: 'm',
	dim: '°',
	aug7: '7+',
	eleventh: '11',
};

/**
 * @param {Chord} chord
 * @returns {Chord}
 */
function shortenNormalized(chord) {
	let descriptor;
	let chordChanges = chord.formatted.chordChanges;

	if (isSus2(chord)) {
		descriptor = shortDescriptors.sus2;
		chordChanges = [];
	} else if (isAdd2(chord)) {
		descriptor = shortDescriptors.add2;
		chordChanges = [];
	} else if (isAug7(chord)) {
		descriptor = shortDescriptors.aug7;
		chordChanges = [];
	} else {
		descriptor = chord.formatted.descriptor
			.replace('mi', shortDescriptors.mi)
			.replace(/[m|M]a/, shortDescriptors.ma)
			.replace('dim', shortDescriptors.dim);

		if (isEleventh(chord)) {
			descriptor = descriptor.replace(
				/7sus|9sus/,
				shortDescriptors.eleventh
			);
		}
	}

	chordChanges = chordChanges.map((change) => {
		return change
			.replace(/[m|M]a/, shortDescriptors.ma)
			.replace('omit', shortDescriptors.omit);
	});

	return {
		...chord,
		formatted: {
			...chord.formatted,
			descriptor,
			chordChanges,
		},
	};
}

function isSus2(chord) {
	return hasExactly(chord.normalized.intervals, ['1', '5', '9']);
}

function isAdd2(chord) {
	return hasExactly(chord.normalized.intervals, ['1', '3', '5', '9']);
}

function isAug7(chord) {
	return hasExactly(chord.normalized.intervals, ['1', '3', '#5', 'b7']);
}

function isEleventh(chord) {
	return chord.normalized.intents.eleventh;
}

// EXTERNAL MODULE: ../../node_modules/lodash/difference.js
var difference = __webpack_require__(8088);
var difference_default = /*#__PURE__*/__webpack_require__.n(difference);
;// CONCATENATED MODULE: ../../node_modules/chord-symbol/src/renderer/filters/simplify.js











/**
 * @param {Chord} chord
 * @param {('none'|'max'|'core')} level
 * @returns {Chord}
 */
function simplify_simplify(level = 'none', chord) {
	if (level === 'none') {
		return chord;
	}

	const intervalsToRemove = {
		max: [
			'4',
			'b5',
			'#5',
			'6',
			'bb7',
			'b7',
			'7',
			'b9',
			'9',
			'#9',
			'11',
			'#11',
			'b13',
			'13',
		],
		core: ['4', 'b9', '9', '#9', '11', '#11', 'b13', '13'],
	};

	const intervals = difference_default()(
		chord.normalized.intervals,
		intervalsToRemove[level]
	);

	if (hasNoneOf(intervals, ['b3', '3'])) {
		intervals.push(chord.normalized.intents.major ? '3' : 'b3');
	}

	if (hasNoneOf(intervals, ['b5', '5', '#5'])) {
		intervals.push('5');
	}

	chord.normalized.intervals = intervals;
	chord.normalized.semitones = intervals.map(
		(interval) => intervalsToSemitones[interval]
	);
	chord.normalized.intents.eleventh = false;
	chord.normalized.intents.alt = false;

	if (level === 'max') {
		delete chord.normalized.bassNote;
	}

	const allFilters = [
		normalizeDescriptor,
		formatSymbolParts,
		nameIndividualChordNotes,
	];

	return chain(allFilters, chord);
}

;// CONCATENATED MODULE: ../../node_modules/chord-symbol/src/renderer/filters/transpose.js




function transpose(transposeValue, accidental, chord) {
	const { rootNote, bassNote } = chord.normalized;

	const rootSharp = convertToSharp(rootNote);
	chord.normalized.rootNote = transposeNote(
		rootSharp,
		transposeValue,
		accidental
	);
	chord.formatted.rootNote = chord.normalized.rootNote;

	if (bassNote) {
		const bassSharp = convertToSharp(bassNote);
		chord.normalized.bassNote = transposeNote(
			bassSharp,
			transposeValue,
			accidental
		);
		chord.formatted.bassNote = chord.normalized.bassNote;
	}

	return nameIndividualChordNotes(chord);
}

function transposeNote(note, value, accidental) {
	const noteIndex = notesSharp.indexOf(note);
	const transposedIndex = noteIndex + value;

	const octaves = Math.floor(transposedIndex / 12);
	const correctedTransposedIndex = transposedIndex - octaves * 12;

	const transposed = notesSharp[correctedTransposedIndex];

	return accidental === 'flat'
		? sharpsToFlats[transposed] || transposed
		: transposed;
}

function convertToSharp(note) {
	return flatsToSharps[note] || note;
}

;// CONCATENATED MODULE: ../../node_modules/chord-symbol/src/renderer/filters/convertNotationSystem.js
const translationTables = {
	german: {
		Ab: 'As',
		A: 'A',
		'A#': 'Ais',
		Bb: 'Hes',
		B: 'H',
		C: 'C',
		'C#': 'Cis',
		Db: 'Des',
		D: 'D',
		'D#': 'Dis',
		Eb: 'Es',
		E: 'E',
		F: 'F',
		'F#': 'Fis',
		Gb: 'Ges',
		G: 'G',
		'G#': 'Gis',
	},
	latin: {
		Ab: 'Lab',
		A: 'La',
		'A#': 'La#',
		Bb: 'Sib',
		B: 'Si',
		C: 'Do',
		'C#': 'Do#',
		Db: 'Reb',
		D: 'Re',
		'D#': 'Re#',
		Eb: 'Mib',
		E: 'Mi',
		F: 'Fa',
		'F#': 'Fa#',
		Gb: 'Solb',
		G: 'Sol',
		'G#': 'Sol#',
	},
};
const allNotationSystems = Object.keys(translationTables);

/**
 * @param {('auto'|'english'|'german'|'latin')} notationSystem
 * @param {Chord} chord
 * @returns {Chord|Null}
 */
function convertNotationSystem(
	notationSystem = 'english',
	chord
) {
	const finalNotationSystem =
		notationSystem === 'auto' ? chord.input.notationSystem : notationSystem;

	if (finalNotationSystem === 'english') return chord;
	if (!allNotationSystems.includes(finalNotationSystem)) return null;

	chord.formatted.rootNote =
		translationTables[finalNotationSystem][chord.formatted.rootNote];

	if (chord.formatted.bassNote) {
		chord.formatted.bassNote =
			translationTables[finalNotationSystem][chord.formatted.bassNote];
	}
	return chord;
}

;// CONCATENATED MODULE: ../../node_modules/chord-symbol/src/renderer/printer/text.js
/**
 * @param {Chord} chord
 * @returns {String}
 */
function textPrinter(chord) {
	return chord && chord.formatted && chord.formatted.symbol
		? chord.formatted.symbol
		: null;
}

;// CONCATENATED MODULE: ../../node_modules/chord-symbol/src/renderer/printer/raw.js





/**
 * This printer returns a `chord` object reflecting the applied rendering filters. This object is very close to what would
 * be obtained by re-parsing the rendered chord.
 * It is basically the `chord` object in its current state, with 2 differences:
 * - a re-built `input` property to include all the changes applied during rendering (transposition, simplification, etc.)
 * - a removed `notationSystems` parser configuration since it may not be relevant anymore, especially if the rendering changed the notation system
 *
 * @param {Chord} chord
 * @returns {Chord}
 */
function rawPrinter(chord) {
	// make sure the chord can be re-parsed, whichever notation system was used for the rendering
	delete chord.parserConfiguration.notationSystems;

	const cloned = cloneDeep_default()(chord);

	// Re-parse the rendered chord to get the 'input' property right
	const textPrinted = textPrinter(chord);
	const parseChord = parser_chordParserFactory(chord.parserConfiguration);
	const reParsed = parseChord(textPrinted);
	cloned.input = reParsed.input;

	return cloned;
}

;// CONCATENATED MODULE: ../../node_modules/chord-symbol/src/renderer/chordRendererFactory.js













/**
 * Create a pre-configured chord rendering function
 * @param {RendererConfiguration} [rendererConfiguration]
 * @returns {function(Chord): String}
 */
function chordRendererFactory({
	accidental = 'original',
	customFilters = [],
	notationSystem = 'english',
	printer = 'text',
	simplify = 'none',
	transposeValue = 0,
	useShortNamings = false,
} = {}) {
	helpers_checkCustomFilters(customFilters);

	const allFilters = [];

	if (['max', 'core'].includes(simplify)) {
		allFilters.push(simplify_simplify.bind(null, simplify));
	}

	if (accidental !== 'original' || transposeValue !== 0) {
		allFilters.push(transpose.bind(null, transposeValue, accidental));
	}

	if (useShortNamings) {
		allFilters.push(shortenNormalized);
	}

	allFilters.push(
		convertNotationSystem.bind(null, notationSystem),
		formatSymbol,
		...customFilters
	);

	return renderChord;

	/**
	 * Render a chord structure
	 * @param {Chord} chord - the chord structure to render
	 * @returns {(String|Chord)} output depends on the selected printer: string for text printer (default), Chord for raw printer
	 */
	function renderChord(chord) {
		if (!isValidChord(chord)) {
			return null;
		}
		const filteredChord = chain(allFilters, cloneDeep_default()(chord));

		return printer === 'raw'
			? rawPrinter(filteredChord)
			: textPrinter(filteredChord);
	}
}

const isValidChord = (chord) => {
	return chord && typeof chord === 'object' && !chord.error && chord.input;
};

/**
 * @module chordRendererFactory
 * Expose the chordRendererFactory() function
 **/
/* harmony default export */ const renderer_chordRendererFactory = (chordRendererFactory);

;// CONCATENATED MODULE: ../../node_modules/chord-symbol/src/index.js







;// CONCATENATED MODULE: ./src/parser/matchers/isChord.js

function isChord(potentialChord) {
  var parseChord = parser_chordParserFactory();
  var parsed = parseChord(potentialChord);
  return !parsed.error;
}
;// CONCATENATED MODULE: ./src/parser/matchers/isChordLine.js





var chordBeatCountSymbols = new RegExp(escapeRegExp_default()(syntax.chordBeatCount) + '*$', 'g');
var barRepeatSymbols = new RegExp('^' + escapeRegExp_default()(syntax.barRepeat) + '+$');

/**
 * Check if the given line only contains chords and allowed characters.
 * The parsing might still fail at a later stage if some rules are not properly enforced,
 * like having proper chord durations or matching sub-beat openers/closers
 * @param {String} line
 * @returns {Boolean}
 */
function isChordLine() {
  var line = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return clearSpaces(getParseableChordLine(line)).split(' ').every(function (potentialChordToken, index, allTokens) {
    var clean = cleanToken(potentialChordToken);
    return isChord(clean) || potentialChordToken.match(barRepeatSymbols) && index > 0 || clean === syntax.noChord || isTimeSignatureString(potentialChordToken) && allTokens.length > 1;
  });
}
var getParseableChordLine = function getParseableChordLine(chordLine) {
  return chordLine.replaceAll('add ', 'add');
};
var cleanToken = function cleanToken(token) {
  return removeSubBeatDelimiters(removeBeatCount(token));
};
var removeBeatCount = function removeBeatCount(token) {
  return token.replace(chordBeatCountSymbols, '');
};
var removeSubBeatDelimiters = function removeSubBeatDelimiters(token) {
  var clean = token;
  if (token.startsWith(syntax.subBeatOpener)) {
    clean = clean.substring(syntax.subBeatOpener.length);
  }
  if (token.endsWith(syntax.subBeatCloser)) {
    clean = clean.substring(0, clean.length - syntax.subBeatCloser.length);
  }
  return clean;
};

;// CONCATENATED MODULE: ./src/parser/matchers/isChordLineRepeater.js


function isChordLineRepeater(string) {
  var candidate = clearSpaces(string);
  return candidate === syntax.chordLineRepeat || candidate === syntax.chordLineRepeat.repeat(2);
}
;// CONCATENATED MODULE: ./src/parser/matchers/isEmptyLine.js

function isEmptyLine(string) {
  return clearSpaces(string) === '';
}
;// CONCATENATED MODULE: ./src/parser/matchers/isSectionLabel.js



var sectionLabelRegexp = new RegExp('^' + escapeRegExp_default()(syntax.sectionLabel) + '([a-zA-Z]+)([1-9])?( x[1-9][0-9]?)?$');
function isSectionLabel(string) {
  var found = clearSpaces(string).match(sectionLabelRegexp);
  return found !== null;
}
;// CONCATENATED MODULE: ./src/parser/parseChord.js


/**
 * @param {String} chordString
 * @param {KeyDeclaration} key
 * @returns {Chord}
 */
function parseChordWrapper(chordString) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var parseChord = parser_chordParserFactory({
    key: key.string
  });
  return parseChord(chordString);
}
// EXTERNAL MODULE: ../../node_modules/lodash/isFinite.js
var lodash_isFinite = __webpack_require__(644);
var isFinite_default = /*#__PURE__*/__webpack_require__.n(lodash_isFinite);
;// CONCATENATED MODULE: ./src/parser/exceptions/InvalidBeatCountException.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }


var InvalidBeatCountException = /*#__PURE__*/function (_Error) {
  function InvalidBeatCountException() {
    var _this;
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      string = _ref.string,
      duration = _ref.duration,
      currentBeatCount = _ref.currentBeatCount,
      beatCount = _ref.beatCount;
    _classCallCheck(this, InvalidBeatCountException);
    if (!string || !isString_default()(string)) {
      throw new TypeError('InvalidBeatCountException cannot be created without chord string, received: ' + string);
    }
    if (!duration || !isFinite_default()(duration)) {
      throw new TypeError('InvalidBeatCountException cannot be created without chord duration, received: ' + duration);
    }
    if (!currentBeatCount || !isFinite_default()(currentBeatCount)) {
      throw new TypeError('InvalidBeatCountException cannot be created without currentBeatCount, received: ' + currentBeatCount);
    }
    if (!beatCount || !isFinite_default()(beatCount)) {
      throw new TypeError('InvalidBeatCountException cannot be created without beatCount, received: ' + beatCount);
    }
    _this = _callSuper(this, InvalidBeatCountException);
    _this.name = 'InvalidBeatCountException';
    _this.string = string;
    _this.duration = duration;
    _this.currentBeatCount = currentBeatCount;
    _this.beatCount = beatCount;
    return _this;
  }
  _inherits(InvalidBeatCountException, _Error);
  return _createClass(InvalidBeatCountException);
}(/*#__PURE__*/_wrapNativeSuper(Error));

;// CONCATENATED MODULE: ./src/parser/exceptions/InvalidChordRepetitionException.js
function InvalidChordRepetitionException_typeof(o) { "@babel/helpers - typeof"; return InvalidChordRepetitionException_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, InvalidChordRepetitionException_typeof(o); }
function InvalidChordRepetitionException_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, InvalidChordRepetitionException_toPropertyKey(o.key), o); } }
function InvalidChordRepetitionException_createClass(e, r, t) { return r && InvalidChordRepetitionException_defineProperties(e.prototype, r), t && InvalidChordRepetitionException_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function InvalidChordRepetitionException_toPropertyKey(t) { var i = InvalidChordRepetitionException_toPrimitive(t, "string"); return "symbol" == InvalidChordRepetitionException_typeof(i) ? i : i + ""; }
function InvalidChordRepetitionException_toPrimitive(t, r) { if ("object" != InvalidChordRepetitionException_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != InvalidChordRepetitionException_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function InvalidChordRepetitionException_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function InvalidChordRepetitionException_callSuper(t, o, e) { return o = InvalidChordRepetitionException_getPrototypeOf(o), InvalidChordRepetitionException_possibleConstructorReturn(t, InvalidChordRepetitionException_isNativeReflectConstruct() ? Reflect.construct(o, e || [], InvalidChordRepetitionException_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function InvalidChordRepetitionException_possibleConstructorReturn(t, e) { if (e && ("object" == InvalidChordRepetitionException_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return InvalidChordRepetitionException_assertThisInitialized(t); }
function InvalidChordRepetitionException_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function InvalidChordRepetitionException_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && InvalidChordRepetitionException_setPrototypeOf(t, e); }
function InvalidChordRepetitionException_wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return InvalidChordRepetitionException_wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !InvalidChordRepetitionException_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return InvalidChordRepetitionException_construct(t, arguments, InvalidChordRepetitionException_getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), InvalidChordRepetitionException_setPrototypeOf(Wrapper, t); }, InvalidChordRepetitionException_wrapNativeSuper(t); }
function InvalidChordRepetitionException_construct(t, e, r) { if (InvalidChordRepetitionException_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && InvalidChordRepetitionException_setPrototypeOf(p, r.prototype), p; }
function InvalidChordRepetitionException_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (InvalidChordRepetitionException_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function InvalidChordRepetitionException_isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function InvalidChordRepetitionException_setPrototypeOf(t, e) { return InvalidChordRepetitionException_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, InvalidChordRepetitionException_setPrototypeOf(t, e); }
function InvalidChordRepetitionException_getPrototypeOf(t) { return InvalidChordRepetitionException_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, InvalidChordRepetitionException_getPrototypeOf(t); }

var InvalidChordRepetitionException = /*#__PURE__*/function (_Error) {
  function InvalidChordRepetitionException() {
    var _this;
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      string = _ref.string;
    InvalidChordRepetitionException_classCallCheck(this, InvalidChordRepetitionException);
    if (!string || !isString_default()(string)) {
      throw new TypeError('InvalidChordRepetitionException cannot be created without chord string, received: ' + string);
    }
    _this = InvalidChordRepetitionException_callSuper(this, InvalidChordRepetitionException);
    _this.name = 'InvalidChordRepetitionException';
    _this.string = string;
    return _this;
  }
  InvalidChordRepetitionException_inherits(InvalidChordRepetitionException, _Error);
  return InvalidChordRepetitionException_createClass(InvalidChordRepetitionException);
}(/*#__PURE__*/InvalidChordRepetitionException_wrapNativeSuper(Error));

;// CONCATENATED MODULE: ./src/parser/exceptions/InvalidSubBeatGroupException.js
function InvalidSubBeatGroupException_typeof(o) { "@babel/helpers - typeof"; return InvalidSubBeatGroupException_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, InvalidSubBeatGroupException_typeof(o); }
function InvalidSubBeatGroupException_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, InvalidSubBeatGroupException_toPropertyKey(o.key), o); } }
function InvalidSubBeatGroupException_createClass(e, r, t) { return r && InvalidSubBeatGroupException_defineProperties(e.prototype, r), t && InvalidSubBeatGroupException_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function InvalidSubBeatGroupException_toPropertyKey(t) { var i = InvalidSubBeatGroupException_toPrimitive(t, "string"); return "symbol" == InvalidSubBeatGroupException_typeof(i) ? i : i + ""; }
function InvalidSubBeatGroupException_toPrimitive(t, r) { if ("object" != InvalidSubBeatGroupException_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != InvalidSubBeatGroupException_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function InvalidSubBeatGroupException_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function InvalidSubBeatGroupException_callSuper(t, o, e) { return o = InvalidSubBeatGroupException_getPrototypeOf(o), InvalidSubBeatGroupException_possibleConstructorReturn(t, InvalidSubBeatGroupException_isNativeReflectConstruct() ? Reflect.construct(o, e || [], InvalidSubBeatGroupException_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function InvalidSubBeatGroupException_possibleConstructorReturn(t, e) { if (e && ("object" == InvalidSubBeatGroupException_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return InvalidSubBeatGroupException_assertThisInitialized(t); }
function InvalidSubBeatGroupException_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function InvalidSubBeatGroupException_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && InvalidSubBeatGroupException_setPrototypeOf(t, e); }
function InvalidSubBeatGroupException_wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return InvalidSubBeatGroupException_wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !InvalidSubBeatGroupException_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return InvalidSubBeatGroupException_construct(t, arguments, InvalidSubBeatGroupException_getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), InvalidSubBeatGroupException_setPrototypeOf(Wrapper, t); }, InvalidSubBeatGroupException_wrapNativeSuper(t); }
function InvalidSubBeatGroupException_construct(t, e, r) { if (InvalidSubBeatGroupException_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && InvalidSubBeatGroupException_setPrototypeOf(p, r.prototype), p; }
function InvalidSubBeatGroupException_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (InvalidSubBeatGroupException_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function InvalidSubBeatGroupException_isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function InvalidSubBeatGroupException_setPrototypeOf(t, e) { return InvalidSubBeatGroupException_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, InvalidSubBeatGroupException_setPrototypeOf(t, e); }
function InvalidSubBeatGroupException_getPrototypeOf(t) { return InvalidSubBeatGroupException_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, InvalidSubBeatGroupException_getPrototypeOf(t); }


var InvalidSubBeatGroupException = /*#__PURE__*/function (_Error) {
  function InvalidSubBeatGroupException() {
    var _this;
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      chordLine = _ref.chordLine,
      symbol = _ref.symbol,
      position = _ref.position;
    InvalidSubBeatGroupException_classCallCheck(this, InvalidSubBeatGroupException);
    if (!chordLine || !isString_default()(chordLine)) {
      throw new TypeError('InvalidSubBeatGroupException cannot be created without a chordLine, received: ' + chordLine);
    }
    if (!symbol || !isString_default()(symbol)) {
      throw new TypeError('InvalidSubBeatGroupException cannot be created without symbol, received: ' + symbol);
    }
    if (!isFinite_default()(position)) {
      throw new TypeError('InvalidSubBeatGroupException cannot be created without symbol position, received: ' + position);
    }
    _this = InvalidSubBeatGroupException_callSuper(this, InvalidSubBeatGroupException);
    _this.name = 'InvalidSubBeatGroupException';
    _this.chordLine = chordLine;
    _this.symbol = symbol;
    _this.position = position;
    return _this;
  }
  InvalidSubBeatGroupException_inherits(InvalidSubBeatGroupException, _Error);
  return InvalidSubBeatGroupException_createClass(InvalidSubBeatGroupException);
}(/*#__PURE__*/InvalidSubBeatGroupException_wrapNativeSuper(Error));

;// CONCATENATED MODULE: ./src/parser/exceptions/InvalidBarRepeatException.js
function InvalidBarRepeatException_typeof(o) { "@babel/helpers - typeof"; return InvalidBarRepeatException_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, InvalidBarRepeatException_typeof(o); }
function InvalidBarRepeatException_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, InvalidBarRepeatException_toPropertyKey(o.key), o); } }
function InvalidBarRepeatException_createClass(e, r, t) { return r && InvalidBarRepeatException_defineProperties(e.prototype, r), t && InvalidBarRepeatException_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function InvalidBarRepeatException_toPropertyKey(t) { var i = InvalidBarRepeatException_toPrimitive(t, "string"); return "symbol" == InvalidBarRepeatException_typeof(i) ? i : i + ""; }
function InvalidBarRepeatException_toPrimitive(t, r) { if ("object" != InvalidBarRepeatException_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != InvalidBarRepeatException_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function InvalidBarRepeatException_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function InvalidBarRepeatException_callSuper(t, o, e) { return o = InvalidBarRepeatException_getPrototypeOf(o), InvalidBarRepeatException_possibleConstructorReturn(t, InvalidBarRepeatException_isNativeReflectConstruct() ? Reflect.construct(o, e || [], InvalidBarRepeatException_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function InvalidBarRepeatException_possibleConstructorReturn(t, e) { if (e && ("object" == InvalidBarRepeatException_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return InvalidBarRepeatException_assertThisInitialized(t); }
function InvalidBarRepeatException_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function InvalidBarRepeatException_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && InvalidBarRepeatException_setPrototypeOf(t, e); }
function InvalidBarRepeatException_wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return InvalidBarRepeatException_wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !InvalidBarRepeatException_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return InvalidBarRepeatException_construct(t, arguments, InvalidBarRepeatException_getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), InvalidBarRepeatException_setPrototypeOf(Wrapper, t); }, InvalidBarRepeatException_wrapNativeSuper(t); }
function InvalidBarRepeatException_construct(t, e, r) { if (InvalidBarRepeatException_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && InvalidBarRepeatException_setPrototypeOf(p, r.prototype), p; }
function InvalidBarRepeatException_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (InvalidBarRepeatException_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function InvalidBarRepeatException_isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function InvalidBarRepeatException_setPrototypeOf(t, e) { return InvalidBarRepeatException_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, InvalidBarRepeatException_setPrototypeOf(t, e); }
function InvalidBarRepeatException_getPrototypeOf(t) { return InvalidBarRepeatException_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, InvalidBarRepeatException_getPrototypeOf(t); }

var InvalidBarRepeatException = /*#__PURE__*/function (_Error) {
  function InvalidBarRepeatException() {
    var _this;
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      string = _ref.string;
    InvalidBarRepeatException_classCallCheck(this, InvalidBarRepeatException);
    if (!string || !isString_default()(string)) {
      throw new TypeError('InvalidBarRepeatException cannot be created without chord string, received: ' + string);
    }
    _this = InvalidBarRepeatException_callSuper(this, InvalidBarRepeatException);
    _this.name = 'InvalidBarRepeatException';
    _this.string = string;
    return _this;
  }
  InvalidBarRepeatException_inherits(InvalidBarRepeatException, _Error);
  return InvalidBarRepeatException_createClass(InvalidBarRepeatException);
}(/*#__PURE__*/InvalidBarRepeatException_wrapNativeSuper(Error));

;// CONCATENATED MODULE: ./src/parser/parseChordLine.js
/* eslint-disable max-lines-per-function */













var parseChordLine_chordBeatCountSymbols = new RegExp(escapeRegExp_default()(syntax.chordBeatCount), 'g');
var parseChordLine_barRepeatSymbols = new RegExp('^' + escapeRegExp_default()(syntax.barRepeat) + '+$');

/**
 * @typedef {Object} ChordLine
 * @type {Object}
 * @property {Bar[]} allBars
 * @property {KeyDeclaration} originalKey
 * @property {Boolean} hasPositionedChords
 */

/**
 * @typedef {Object} Bar
 * @type {Object}
 * @property {TimeSignature} timeSignature
 * @property {ChordLineChord[]} allChords
 * @property {Boolean} isRepeated - the bar has been created with the bar repeat symbol
 * @property {Boolean} hasUnevenChordsDurations - the chords in the bar do not have the same duration
 * @property {Boolean} lineHadTimeSignatureChange - there has been an inline time signature change.
 * This value will be `true` for all the bars after the time signature change occurred,
 * even if the TS is changed back again to the context one.
 */

/**
 * @typedef {Object} ChordLineChord
 * @type {Object}
 * @property {String} string - original chord string
 * @property {ChordDef|String} model - parsed chord or "NC" if "no chord" symbol
 * @property {Number} duration - number of beats the chord lasts
 * @property {Number} beat - beat on which the chord starts
 * @property {Boolean} isPositioned - whether this chord has been positioned over a specific lyric or not
 * @property {Boolean} isInSubBeatGroup - whether this chord has a sub-beat duration
 * @property {Boolean} [isFirstOfSubBeat] - Only present if `isInSubBeatGroup` is true.
 * @property {Boolean} [isLastOfSubBeat] - Only present if `isInSubBeatGroup` is true.
 */

/**
 * @param {String} chordLine
 * @param {Object} options
 * @param {TimeSignature} options.timeSignature
 * @param {KeyDeclaration} options.originalKey
 * @returns {ChordLine}
 */
function parseChordLine(chordLine) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$timeSignature = _ref.timeSignature,
    timeSignature = _ref$timeSignature === void 0 ? defaultTimeSignature : _ref$timeSignature,
    _ref$originalKey = _ref.originalKey,
    originalKey = _ref$originalKey === void 0 ? {} : _ref$originalKey;
  var _timeSignature = timeSignature,
    beatCount = _timeSignature.beatCount;
  var allBars = [];
  var emptyBar = {
    allChords: []
  };
  var subBeatGroupsChordCount = {};
  var bar = cloneDeep_default()(emptyBar);
  var chord = {};
  var cleanedToken;
  var currentBeatCount = 0;
  var previousBar;
  var isInSubBeatGroup = false;
  var subBeatGroupIndex = 0;
  var lineHadTimeSignatureChange = false;
  checkSubBeatConsistency(chordLine);
  var allTokens = clearSpaces(getParseableChordLine(chordLine)).split(' ');
  allTokens.forEach(function (token, tokenIndex) {
    if (token.match(parseChordLine_barRepeatSymbols)) {
      repeatPreviousBars(token);
    } else if (isTimeSignatureString(token)) {
      changeTimeSignature(token);
    } else {
      parseChordToken(token);
      if (shouldChangeBar(currentBeatCount, beatCount)) {
        changeBar();
      } else {
        checkInvalidBeatCount(chord, currentBeatCount, beatCount, allTokens.length === tokenIndex + 1);
      }
    }
  });
  setSubBeatInfo(allBars, subBeatGroupsChordCount);
  return {
    allBars: allBars,
    originalKey: originalKey
  };
  function repeatPreviousBars(token) {
    if (currentBeatCount === 0 && previousBar && isEqual_default()(timeSignature, previousBar.timeSignature)) {
      var repeatedBar = cloneDeep_default()(previousBar);
      repeatedBar.isRepeated = true;
      for (var i = 0; i < token.length; i++) {
        allBars.push(cloneDeep_default()(repeatedBar));
      }
    } else {
      throw new InvalidBarRepeatException({
        string: chordLine
      });
    }
  }
  function changeTimeSignature(token) {
    timeSignature = parseTimeSignature(token);
    beatCount = timeSignature.beatCount;
    lineHadTimeSignatureChange = true;
  }
  function parseChordToken(token) {
    if (token.startsWith(syntax.subBeatOpener)) {
      isInSubBeatGroup = true;
    }
    if (isInSubBeatGroup) {
      checkSubBeatGroupToken(chordLine, token);
      updateSubBeatGroupsChordCount(token);
    }
    cleanedToken = cleanToken(token);
    chord = {
      string: token,
      duration: getChordDuration(token, beatCount, isInSubBeatGroup),
      model: isNoChordSymbol(cleanedToken) ? syntax.noChord : parseChordWrapper(cleanedToken, originalKey),
      beat: currentBeatCount + 1,
      isInSubBeatGroup: isInSubBeatGroup
    };
    currentBeatCount += chord.duration;
    checkInvalidChordRepetition(bar, chord);
    bar.allChords.push(chord);
    if (token.endsWith(syntax.subBeatCloser)) {
      checkSubBeatGroupChordCount(token);
      isInSubBeatGroup = false;
      subBeatGroupIndex++;
      currentBeatCount += 1;
    }
  }
  function updateSubBeatGroupsChordCount() {
    if (subBeatGroupsChordCount[subBeatGroupIndex]) {
      subBeatGroupsChordCount[subBeatGroupIndex]++;
    } else {
      subBeatGroupsChordCount[subBeatGroupIndex] = 1;
    }
  }
  function checkSubBeatGroupChordCount(token) {
    if (subBeatGroupsChordCount[subBeatGroupIndex] === 1 || subBeatGroupsChordCount[subBeatGroupIndex] > 4) throw new InvalidSubBeatGroupException({
      chordLine: chordLine,
      symbol: token,
      position: 0 // duh
    });
  }
  function changeBar() {
    bar.timeSignature = timeSignature;
    bar.lineHadTimeSignatureChange = lineHadTimeSignatureChange;
    bar.hasUnevenChordsDurations = hasUnevenChordsDurations(bar);
    var barClone = cloneDeep_default()(bar);
    bar.isRepeated = isEqual_default()(bar, previousBar);
    allBars.push(cloneDeep_default()(bar));
    previousBar = barClone;
    bar = cloneDeep_default()(emptyBar);
    currentBeatCount = 0;
  }
}
function checkSubBeatGroupToken(chordLine, token) {
  if (hasBeatCount(token)) {
    throw new InvalidSubBeatGroupException({
      chordLine: chordLine,
      symbol: token,
      position: 0 // duh
    });
  }
}
function hasBeatCount(token) {
  return token.indexOf(syntax.chordBeatCount) > -1;
}
function isNoChordSymbol(token) {
  return token === syntax.noChord;
}
function getChordDuration(token, beatCount, isInSubBeatGroup) {
  if (isInSubBeatGroup) return 0; // duration is computed during post-processing for sub-beats duration
  return (token.match(parseChordLine_chordBeatCountSymbols) || []).length || beatCount;
}
function checkInvalidChordRepetition(bar, currentChord) {
  if (bar.allChords.length > 0) {
    var previousChord = bar.allChords[bar.allChords.length - 1];
    if (isEqual_default()(previousChord.model, currentChord.model) && !isChordRepetitionAllowed(previousChord, currentChord)) {
      throw new InvalidChordRepetitionException({
        string: currentChord.string
      });
    }
  }
}
function isChordRepetitionAllowed(previousChord, currentChord) {
  return currentChord.string.startsWith(syntax.subBeatOpener) || previousChord.string.endsWith(syntax.subBeatCloser) && !currentChord.model.isInSubBeatGroup;
}
function shouldChangeBar(currentBeatCount, beatCount) {
  return currentBeatCount === beatCount;
}
function checkInvalidBeatCount(chord, currentBeatCount, beatCount, isLast) {
  if (hasInvalidBeatCount(currentBeatCount, beatCount, isLast)) {
    throw new InvalidBeatCountException({
      string: chord.string,
      duration: chord.duration,
      currentBeatCount: currentBeatCount,
      beatCount: beatCount
    });
  }
}
function hasInvalidBeatCount(currentBeatCount, barBeatCount, isLast) {
  return hasTooManyBeats(currentBeatCount, barBeatCount) || hasTooFewBeats(currentBeatCount, barBeatCount, isLast);
}
function hasTooManyBeats(currentBeatCount, barBeatCount) {
  return currentBeatCount > barBeatCount;
}
function hasTooFewBeats(currentBeatCount, barBeatCount, isLast) {
  return isLast && currentBeatCount < barBeatCount;
}
function hasUnevenChordsDurations(bar) {
  var firstChordDuration = bar.allChords[0].duration;
  return bar.allChords.some(function (chord) {
    return chord.duration !== firstChordDuration;
  });
}
function setSubBeatInfo(allBars, subBeatGroupsChordCount) {
  var subBeatGroupIndex = -1;
  var subBeatChordIndex = 0;
  var previousChordBeatId = '';
  allBars.forEach(function (bar, barIndex) {
    bar.allChords.forEach(function (chord) {
      if (chord.isInSubBeatGroup) {
        var chordBeatId = '' + barIndex + chord.beat;
        if (chordBeatId !== previousChordBeatId) {
          subBeatGroupIndex++;
          subBeatChordIndex = 0;
        }
        var durationString = (1 / subBeatGroupsChordCount[subBeatGroupIndex]).toPrecision(2);
        chord.duration = Number.parseFloat(durationString);
        chord.isFirstOfSubBeat = subBeatChordIndex === 0;
        chord.isLastOfSubBeat = subBeatChordIndex === subBeatGroupsChordCount[subBeatGroupIndex] - 1;
        previousChordBeatId = chordBeatId;
        subBeatChordIndex++;
      }
    });
  });
}
function checkSubBeatConsistency(line) {
  var errorParameters = {};
  var inSubBeat = false;
  var match;
  var regexp = new RegExp(escapeRegExp_default()(syntax.subBeatOpener) + '|' + escapeRegExp_default()(syntax.subBeatCloser), 'g');
  while (match = regexp.exec(line)) {
    var symbol = match[0];
    errorParameters.chordLine = line;
    errorParameters.symbol = symbol;
    errorParameters.position = regexp.lastIndex - 1;
    if (match[0] === syntax.subBeatOpener) {
      if (inSubBeat) throw new InvalidSubBeatGroupException(errorParameters);
      inSubBeat = true;
    } else {
      if (!inSubBeat) throw new InvalidSubBeatGroupException(errorParameters);
      inSubBeat = false;
    }
  }
  if (inSubBeat) throw new InvalidSubBeatGroupException(errorParameters);
}
// EXTERNAL MODULE: ../../node_modules/lodash/findIndex.js
var findIndex = __webpack_require__(2154);
var findIndex_default = /*#__PURE__*/__webpack_require__.n(findIndex);
;// CONCATENATED MODULE: ./src/parser/helper/keyHelpers.js
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



var allNotesSharp = 'A,A#,B,C,C#,D,D#,E,F,F#,G,G#'.split(',');
var allFlats = 'Ab,Bb,Db,Eb,Gb'.split(',');
var allNotes = [].concat(_toConsumableArray(allNotesSharp), _toConsumableArray(allFlats));
var keyHelpers_allKeys = [].concat(_toConsumableArray(allNotes), _toConsumableArray(allNotes.map(function (note) {
  return note + 'm';
})));
var keyHelpers_flatsToSharps = {
  Ab: 'G#',
  Bb: 'A#',
  Db: 'C#',
  Eb: 'D#',
  Gb: 'F#'
};
var keyHelpers_sharpsToFlats = invert_default()(keyHelpers_flatsToSharps);

/**
 * Check if the given string is a valid key
 * @param {String} keyString
 * @returns {Boolean}
 */
function isKey(keyString) {
  return keyHelpers_allKeys.includes(keyString);
}

/**
 * Returns the accidental of a given key
 * @param {string} keyString
 * @returns {('flat'|'sharp')}
 */
function getKeyAccidental(keyString) {
  var sharpKeys = ['G',
  // 1 sharp
  'Em', 'D',
  // 2 sharps
  'Bm', 'A',
  // 3 sharps
  'F#m', 'E',
  // 4 sharps
  'C#m', 'B',
  // 5 sharps
  'G#m', 'F#',
  // 6 sharps
  'D#m', 'C#',
  // 7 sharps
  'A#m',
  // Theoretical keys
  'G#',
  // 8 sharps
  'D#',
  // 9 sharps
  'A#' // 10 sharps
  ];
  return sharpKeys.includes(keyString) ? 'sharp' : 'flat';
}

/**
 * Transpose a key, trying to avoid theoretical keys when `accidentalsType` is 'auto'.
 * Otherwise, the transposed key will use the given `accidentalsType`, e.g. 'sharp' or 'flat'.
 * @param {KeyDeclaration} keyModel
 * @param {number} transposeValue
 * @param {('auto'|'sharp'|'flat')} accidentalsType
 * @returns {KeyDeclaration}
 */
function transposeKey(keyModel, transposeValue, accidentalsType) {
  var theoreticalKeys = {
    'G#': 'Ab',
    'D#': 'Eb',
    'A#': 'Bb',
    Dbm: 'C#m',
    Gbm: 'F#m'
  };
  var keyTemp;
  if (transposeValue === 0 && accidentalsType === 'auto') {
    keyTemp = keyModel.string;
  } else {
    var accidental = accidentalsType === 'auto' ? transposeValue < 0 ? 'flat' : 'sharp' : accidentalsType;
    keyTemp = doTranspose(keyModel.string, transposeValue, accidental);
  }
  var transposedKey = accidentalsType === 'auto' && theoreticalKeys[keyTemp] ? theoreticalKeys[keyTemp] : keyTemp;
  return {
    string: transposedKey,
    accidental: getKeyAccidental(transposedKey)
  };
}
function doTranspose(key, value, accidental) {
  var isMinor = key.endsWith('m');
  var note = key.replace('m', '');
  var noteSharp = keyHelpers_flatsToSharps[note] || note;
  var noteIndex = allNotesSharp.indexOf(noteSharp);
  var transposedIndex = noteIndex + value;
  if (transposedIndex < 0) {
    transposedIndex += allNotesSharp.length;
  } else if (transposedIndex >= allNotesSharp.length) {
    transposedIndex -= allNotesSharp.length;
  }
  var transposedSharp = allNotesSharp[transposedIndex];
  var transposed = accidental === 'flat' ? keyHelpers_sharpsToFlats[transposedSharp] || transposedSharp : transposedSharp;
  return isMinor ? transposed + 'm' : transposed;
}

/**
 * Try to guess the key of a song based on its chords
 * @param {SongChord[]} allChords
 * @returns {(KeyDeclaration|undefined)}
 */
function guessKey(allChords) {
  var keyString = inferKeyFromChords(allChords);
  return keyString ? {
    string: keyString,
    accidental: getKeyAccidental(keyString)
  } : undefined;
}
function inferKeyFromChords(allChords) {
  var mostUsedChords = getMostUsedChordKeys(allChords);
  if (mostUsedChords.length === 0) return;
  if (mostUsedChords.length === 1) return mostUsedChords[0].keyString;
  var lastSongChord = mostUsedChords.find(function (chord) {
    return chord.isLast === true;
  });
  if (lastSongChord) return lastSongChord.keyString;
  var firstSongChord = mostUsedChords.find(function (chord) {
    return chord.isFirst === true;
  });
  if (firstSongChord) return firstSongChord.keyString;
  return mostUsedChords[0].keyString; // we give up!
}
function getMostUsedChordKeys(allChords) {
  var maxFoundDuration = 0;
  var mostUsedChordKeys = [];
  var allChordsKey = [];
  cloneDeep_default()(allChords).map(function (chord) {
    chord.keyString = chord2Key(chord);
    return chord;
  }).forEach(function (chord) {
    var i = findIndex_default()(allChordsKey, function (o) {
      return o.keyString === chord.keyString;
    });
    if (i === -1) {
      allChordsKey.push(chord);
    } else {
      allChordsKey[i].duration += chord.duration;
      if (chord.isLast) allChordsKey[i].isLast = true;
    }
  });
  allChordsKey.map(function (chord) {
    // give more weight to first and last chords
    if (chord.isLast) {
      chord.duration *= 1.25;
    }
    if (chord.isFirst) {
      chord.duration *= 1.25;
    }
    return chord;
  }).forEach(function (chord) {
    if (chord.duration > maxFoundDuration) {
      mostUsedChordKeys = [chord];
      maxFoundDuration = chord.duration;
    } else if (chord.duration === maxFoundDuration) {
      mostUsedChordKeys.push(chord);
    }
  });
  return mostUsedChordKeys;
}
function chord2Key(chord) {
  var chordModel = cloneDeep_default()(chord.model);

  // chord-symbol's qualities: https://github.com/no-chris/chord-symbol/blob/master/packages/chord-symbol/src/dictionaries/qualities.js
  var majorQualities = ['major', 'major6', 'major7', 'dominant7', 'augmented', 'power',
  // duh!
  'bass' // re-duh!
  ];
  var keyString = chordModel.formatted.rootNote;
  if (!majorQualities.includes(chordModel.normalized.quality)) {
    keyString += 'm';
  }
  return keyString;
}

/**
 * Return the number of semitones between two keys notes
 * @param {string} key1
 * @param {string} key2
 * @returns {Number}
 */
function getSemitonesBetweenKeys(key1, key2) {
  if (!key1 || !key2) return 0;
  return getSemitonesBetweenNotes(key1.replace('m', ''), key2.replace('m', ''));
}
function getSemitonesBetweenNotes(note1, note2) {
  var noteSharp1 = keyHelpers_flatsToSharps[note1] || note1;
  var noteSharp2 = keyHelpers_flatsToSharps[note2] || note2;
  var indexNote1 = allNotesSharp.indexOf(noteSharp1);
  var indexNote2 = allNotesSharp.indexOf(noteSharp2);
  if (indexNote1 === -1 || indexNote2 === -1) return 0;
  var semitones = indexNote2 - indexNote1;
  return semitones < 0 ? semitones + 12 : semitones;
}
;// CONCATENATED MODULE: ./src/parser/matchers/isKeyDeclaration.js




var keyDeclarationRegexp = new RegExp('^' + escapeRegExp_default()(syntax.keyDeclarationPrefix) + '([ABCDEFG].*)$');
function isKeyDeclaration(string) {
  var found = clearSpaces(string).match(keyDeclarationRegexp);
  if (found === null) return false;
  return isKey(found[1]);
}
;// CONCATENATED MODULE: ./src/parser/parseKeyDeclaration.js




/**
 * @typedef {Object} KeyDeclaration
 * @type {Object}
 * @property {String} string
 * @property {('flat'|'sharp')} accidental
 */

/**
 * @param {String} string
 * @returns {KeyDeclaration}
 */
function parseKeyDeclaration(string) {
  if (!isKeyDeclaration(string)) {
    throw new TypeError('Expected key declaration, received: ' + string);
  }
  var found = clearSpaces(string).match(keyDeclarationRegexp);
  var keyString = found[1];
  return {
    string: keyString,
    accidental: getKeyAccidental(keyString)
  };
}
;// CONCATENATED MODULE: ./src/parser/parseLyricLine.js


/**
 * @typedef {Object} LyricLine
 * @type {Object}
 * @property {String} lyrics
 * @property {Number[]} chordPositions
 */

/**
 * @param {String} string
 * @returns {LyricLine}
 */
function parseLyricLine(string) {
  var stringWithoutForceLyricSymbol = string.startsWith(syntax.lyricLine) ? string.substring(1) : string;
  var regexp = new RegExp(syntax.chordPositionMarker, 'g');
  var stringWithoutPositionMarkers = stringWithoutForceLyricSymbol.replace(regexp, '');
  var chordPositions = [];
  var tmpString = stringWithoutForceLyricSymbol;
  var position;
  while ((position = tmpString.indexOf(syntax.chordPositionMarker)) !== -1) {
    if (!chordPositions.includes(position)) {
      chordPositions.push(position);
    }
    tmpString = tmpString.replace(syntax.chordPositionMarker, '');
  }
  return {
    lyrics: stringWithoutPositionMarkers,
    chordPositions: chordPositions
  };
}
;// CONCATENATED MODULE: ./src/parser/parseSectionLabel.js



/**
 * @typedef {Object} SectionLabel
 * @type {Object}
 * @property {String} string - original string
 * @property {String} label - label of the section
 * @property {Number} multiplyTimes - number of times the section should be multiplied
 * @property {Number} copyIndex - index of the section that should be copied
 * Render-time properties
 * @property {Object} [rendered]
 * @property {String} [rendered.label]
 * @property {String} [rendered.multiplier]
 */

/**
 * @param {String} string
 * @returns {SectionLabel}
 */
function parseSectionLabel(string) {
  if (!isSectionLabel(string)) {
    throw new TypeError('Expected section identifier string, received: ' + string);
  }
  var found = clearSpaces(string).match(sectionLabelRegexp);
  return {
    string: string,
    label: found[1],
    copyIndex: found[2] ? Number.parseInt(found[2]) : 1,
    multiplyTimes: found[3] ? Number.parseInt(found[3].replace(' x', '')) : 0
  };
}
// EXTERNAL MODULE: ../../node_modules/lodash/last.js
var last = __webpack_require__(8087);
var last_default = /*#__PURE__*/__webpack_require__.n(last);
;// CONCATENATED MODULE: ./src/parser/helper/songs.js




/**
 * @param {SongLine[]} allLines
 * @param {Function} fn - to execute on each bar
 * @returns {SongLine[]}
 */
function forEachBarInSong(allLines, fn) {
  var newLines = _cloneDeep(allLines);
  newLines.forEach(function (line) {
    if (line.type === lineTypes.CHORD) {
      line.model.allBars.forEach(function (bar) {
        fn(bar);
      });
    }
  });
  return newLines;
}

/**
 * @param {SongLine[]} allLines
 * @param {Function} fn - to execute on each chord
 * @returns {SongLine[]}
 */
function forEachChordInSong(allLines, fn) {
  var newLines = cloneDeep_default()(allLines);
  newLines.forEach(function (line) {
    if (line.type === parser_lineTypes.CHORD) {
      line.model.allBars.forEach(function (bar) {
        bar.allChords.forEach(function (chord) {
          fn(chord);
        });
      });
    }
  });
  return newLines;
}

/**
 * @param {ChordLine} chordLine
 * @param {Function} fn - to execute on each chord
 * @returns {ChordLine}
 */
function forEachChordInChordLine(chordLine, fn) {
  var newChordLine = cloneDeep_default()(chordLine);
  newChordLine.allBars.forEach(function (bar, barIndex) {
    bar.allChords.forEach(function (chord, chordIndex) {
      fn(chord, chordIndex, barIndex);
    });
  });
  return newChordLine;
}

/**
 * @param {SongLine[]} allLines
 * @param {String} label - the label to select
 * @param {Number} n - the index of the section to select
 * @returns {SongLine[]} all lines of the requested section
 */
function getNthOfLabel(allLines, label, n) {
  var selected = [];
  var typesCount = {};
  var enableSelect = false;
  var currentLabel = '';
  allLines.forEach(function (line) {
    if (line.type === parser_lineTypes.SECTION_LABEL) {
      currentLabel = line.model.label;
      if (!typesCount[currentLabel]) {
        typesCount[currentLabel] = 1;
      } else {
        typesCount[currentLabel]++;
      }
      enableSelect = line.id === label + n;
    } else if (enableSelect) {
      selected.push(line);
    }
  });

  // remmove trailing directive lines
  // because they likely apply to the next section
  /**/
  while (last_default()(selected) && (last_default()(selected).type === parser_lineTypes.KEY_DECLARATION || last_default()(selected).type === parser_lineTypes.TIME_SIGNATURE)) {
    selected.pop();
  }
  /** */
  return selected;
}
;// CONCATENATED MODULE: ./src/parser/songLinesFactory.js
function songLinesFactory_typeof(o) { "@babel/helpers - typeof"; return songLinesFactory_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, songLinesFactory_typeof(o); }
function songLinesFactory_toConsumableArray(r) { return songLinesFactory_arrayWithoutHoles(r) || songLinesFactory_iterableToArray(r) || songLinesFactory_unsupportedIterableToArray(r) || songLinesFactory_nonIterableSpread(); }
function songLinesFactory_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function songLinesFactory_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return songLinesFactory_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? songLinesFactory_arrayLikeToArray(r, a) : void 0; } }
function songLinesFactory_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function songLinesFactory_arrayWithoutHoles(r) { if (Array.isArray(r)) return songLinesFactory_arrayLikeToArray(r); }
function songLinesFactory_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = songLinesFactory_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function songLinesFactory_toPropertyKey(t) { var i = songLinesFactory_toPrimitive(t, "string"); return "symbol" == songLinesFactory_typeof(i) ? i : i + ""; }
function songLinesFactory_toPrimitive(t, r) { if ("object" != songLinesFactory_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != songLinesFactory_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*eslint-disable max-lines-per-function,max-lines */















var songLinesFactory_defaultTimeSignature = '4/4';

/**
 * @typedef {Object} SongLine
 * @type {Object}
 * @property {String} string - original line in source file
 * @property {String} type - chord|lyric|timeSignature|sectionLabel...
 * @property {Boolean} [isFromSectionMultiply] - line created by a section multiply directive (#chorus x3, for ex)
 * @property {Boolean} [isFromSectionCopy] - line created by a section copy (eg empty # section)
 * @property {Boolean} [isFromAutoRepeatChords] - line created by auto repeats of chords from a section to another
 */

/**
 * @typedef {SongLine} SongChordLine
 * @type {Object}
 * @property {ChordLine} model
 * @property {Boolean} [isFromChordLineRepeater] - line created by the chordLine repeat symbol
 */

/**
 * @typedef {SongLine} SongTimeSignatureLine
 * @type {Object}
 * @property {TimeSignature} model
 */

/**
 * @typedef {SongLine} SongLyricLine
 * @type {Object}
 * @property {LyricLine} model
 */

/**
 * @typedef {SongLine} SongSectionLabelLine
 * @type {Object}
 * @property {SectionLabel} model
 * @property {Number} index - index of the section for a given label (#v, #v x2, #v => 1, 2, 3, 4)
 * @property {Number} indexWithoutMultiply - idem, but not taking repeats into account (#v, #v x2, #v => 1, 2, 3)
 * @property {String} id
 */

/**
 * @typedef {SongLine} SongKeyDeclarationLine
 * @type {Object}
 * @property {KeyDeclaration} model
 * @property {String} [symbol] - rendering property
 */

function songLinesFactory() {
  var allLines = [];
  var sectionsStats = {};
  var currentTimeSignature = parseTimeSignature(songLinesFactory_defaultTimeSignature);
  var currentSection;
  var currentSectionStats;
  var currentKey = {};
  var MAX_PREVIOUS_CHORD_LINES = 2;
  var previousChordLines = [];
  var previousSectionLabelLine;
  var blueprint = [];
  var blueprintIndex = 0;
  var shouldMultiplySection = false;
  var shouldCopySection = false;

  /**
   * @returns {SongTimeSignatureLine}
   */
  function getTimeSignatureLine(string) {
    currentTimeSignature = parseTimeSignature(string);
    return {
      string: string,
      type: parser_lineTypes.TIME_SIGNATURE,
      model: currentTimeSignature
    };
  }

  /**
   * @returns {SongKeyDeclarationLine}
   */
  function getKeyDeclarationLine(string) {
    currentKey = parseKeyDeclaration(string);
    return {
      string: string,
      type: parser_lineTypes.KEY_DECLARATION,
      model: cloneDeep_default()(currentKey)
    };
  }

  /**
   * @returns {SongSectionLabelLine}
   */
  function getSectionLabelLine(string, lineIndex, allSrcLines) {
    currentSection = parseSectionLabel(string);
    increaseSectionStats(currentSection.label);
    currentSectionStats = getSectionCount(currentSection.label);
    var line = {
      string: string,
      type: parser_lineTypes.SECTION_LABEL,
      model: currentSection,
      index: currentSectionStats.count,
      indexWithoutMultiply: currentSectionStats.withoutMultiply,
      id: currentSection.label + currentSectionStats.count
    };
    shouldCopySection = isCurrentSectionEmpty(lineIndex, allSrcLines) && currentSectionStats.count > 1;
    if (shouldCopySection) {
      line.isFromSectionCopy = true;
    }
    shouldMultiplySection = currentSection.multiplyTimes > 0;
    previousSectionLabelLine = cloneDeep_default()(line);
    blueprint = currentSectionStats.count > 1 ? getNthOfLabel(allLines, currentSection.label, 1) : [];
    blueprintIndex = 0;
    return line;
  }

  /**
   * @returns {SongLyricLine}
   */
  function getEmptyLine(string) {
    return {
      string: string,
      type: parser_lineTypes.EMPTY_LINE
    };
  }

  /**
   * @returns {SongChordLine|SongLyricLine}
   */
  function getChordLine(string) {
    var line;
    try {
      var lineModel = parseChordLine(string, {
        timeSignature: currentTimeSignature,
        originalKey: currentKey
      });
      line = {
        string: string,
        type: parser_lineTypes.CHORD,
        model: lineModel
      };
      addPreviousChordLine(line);
    } catch (_unused) {
      line = getLyricLine(string);
    }
    return line;
  }
  function addPreviousChordLine(line) {
    if (previousChordLines.length >= MAX_PREVIOUS_CHORD_LINES) {
      previousChordLines.shift();
    }
    previousChordLines.push(line);
  }

  /**
   * @returns {SongChordLine|SongLyricLine}
   */
  function getRepeatedChordLine(string) {
    var repeatString = clearSpaces(string);
    var sliceStart = -repeatString.length;
    var sliceEnd = sliceStart < -1 ? sliceStart + 1 : undefined;
    if (previousChordLines.length >= repeatString.length) {
      return _objectSpread(_objectSpread({}, cloneDeep_default().apply(void 0, songLinesFactory_toConsumableArray(previousChordLines.slice(sliceStart, sliceEnd)))), {}, {
        isFromChordLineRepeater: true
      });
    }
    return getLyricLine(string);
  }

  /**
   * @returns {SongLyricLine}
   */
  function getLyricLine(string) {
    return {
      string: string,
      type: parser_lineTypes.LYRIC,
      model: parseLyricLine(string)
    };
  }
  function increaseSectionStats(label) {
    var isMultiplied = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (!sectionsStats[label]) {
      sectionsStats[label] = {
        count: 1,
        withoutMultiply: 1
      };
    } else {
      sectionsStats[label].count++;
      if (!isMultiplied) {
        sectionsStats[label].withoutMultiply++;
      }
    }
  }
  function getSectionCount(label) {
    return sectionsStats[label];
  }
  function repeatLinesFromBlueprint(line) {
    if (blueprint.length && line.type !== parser_lineTypes.SECTION_LABEL) {
      var blueprintLine = blueprint[blueprintIndex];
      var repeatedLine;
      while (shouldRepeatLineFromBlueprint(blueprintLine, line)) {
        if (blueprintLine.type === parser_lineTypes.CHORD) {
          addPreviousChordLine(cloneDeep_default()(blueprintLine));
        }
        repeatedLine = _objectSpread(_objectSpread({}, cloneDeep_default()(blueprintLine)), {}, {
          isFromAutoRepeatChords: true
        });
        allLines.push(repeatedLine);
        blueprintIndex++;
        blueprintLine = blueprint[blueprintIndex];
      }
      blueprintIndex++;
    }
  }
  function shouldRepeatLineFromBlueprint(blueprintLine, currentLine) {
    var nonRepeatableLinesTypes = [parser_lineTypes.LYRIC, parser_lineTypes.EMPTY_LINE];
    return blueprintLine && !nonRepeatableLinesTypes.includes(blueprintLine.type) && blueprintLine.type !== currentLine.type && currentLine.type !== parser_lineTypes.EMPTY_LINE;
  }
  function copySection() {
    if (shouldCopySection) {
      var toCopy = getNthOfLabel(allLines, currentSection.label, currentSection.copyIndex).map(function (line) {
        return _objectSpread(_objectSpread({}, cloneDeep_default()(line)), {}, {
          isFromSectionCopy: true
        });
      });
      if (!toCopy.length) return;
      if (endsWithEmptyLine(toCopy)) {
        toCopy.pop();
      }
      allLines.push.apply(allLines, songLinesFactory_toConsumableArray(cloneDeep_default()(toCopy)));
      shouldCopySection = false;
    }
  }
  function isCurrentSectionEmpty(lineIndex, allSrcLines) {
    var remainingLines = allSrcLines.slice(lineIndex + 1);
    var nextSectionIndex = remainingLines.findIndex(function (line) {
      return isSectionLabel(line);
    });
    if (nextSectionIndex === 0) {
      return true;
    }
    var currentSectionContent = remainingLines.slice(0, nextSectionIndex !== -1 ? nextSectionIndex : undefined).filter(function (line) {
      return !(isTimeSignatureString(line) || isKeyDeclaration(line) || isEmptyLine(line));
    });
    return currentSectionContent.length === 0;
  }
  function multiplySection(lineIndex, allSrcLines) {
    if (shouldMultiplySection && isLastLineOfSection(lineIndex, allSrcLines)) {
      var toMultiply = getNthOfLabel(allLines, currentSection.label, currentSectionStats.count).map(function (line) {
        return _objectSpread(_objectSpread({}, cloneDeep_default()(line)), {}, {
          isFromSectionMultiply: true
        });
      });
      var sectionLabelLine;
      for (var i = 1; i < currentSection.multiplyTimes; i++) {
        increaseSectionStats(currentSection.label, true);
        currentSectionStats = getSectionCount(currentSection.label);
        sectionLabelLine = _objectSpread(_objectSpread({}, cloneDeep_default()(previousSectionLabelLine)), {}, {
          index: currentSectionStats.count,
          indexWithoutMultiply: currentSectionStats.withoutMultiply,
          id: currentSection.label + currentSectionStats.count,
          isFromSectionMultiply: true
        });
        allLines.push(sectionLabelLine);
        allLines.push.apply(allLines, songLinesFactory_toConsumableArray(cloneDeep_default()(toMultiply)));
      }
    }
  }
  return {
    addLine: function addLine(lineSrc, lineIndex, allSrcLines) {
      var line;
      if (isTimeSignatureString(lineSrc)) {
        line = getTimeSignatureLine(lineSrc);
      } else if (isSectionLabel(lineSrc)) {
        line = getSectionLabelLine(lineSrc, lineIndex, allSrcLines);
      } else if (isChordLine(lineSrc)) {
        line = getChordLine(lineSrc);
      } else if (isChordLineRepeater(lineSrc)) {
        line = getRepeatedChordLine(lineSrc);
      } else if (isEmptyLine(lineSrc)) {
        line = getEmptyLine(lineSrc);
      } else if (isKeyDeclaration(lineSrc)) {
        line = getKeyDeclarationLine(lineSrc);
      } else {
        line = getLyricLine(lineSrc);
      }
      repeatLinesFromBlueprint(line);
      allLines.push(line);
      copySection();
      multiplySection(lineIndex, allSrcLines);
    },
    /**
     * returns {SongLine[]}
     */
    asArray: function asArray() {
      return cloneDeep_default()(allLines);
    },
    flagPositionedChords: function flagPositionedChords() {
      var nextLine;
      var lineChordCount;
      allLines.forEach(function (line, lineIndex) {
        nextLine = allLines[lineIndex + 1];
        if (shouldPositionChords(line, nextLine)) {
          lineChordCount = 0;
          line.model.hasPositionedChords = true;
          line.model = forEachChordInChordLine(line.model, function (chord) {
            chord.isPositioned = lineChordCount < nextLine.model.chordPositions.length;
            lineChordCount++;
          });
        } else if (line.type === parser_lineTypes.CHORD) {
          line.model.hasPositionedChords = false;
          line.model = forEachChordInChordLine(line.model, function (chord) {
            chord.isPositioned = false;
          });
        }
      });
    }
  };
}
function isLastLineOfSection(lineIndex, allSrcLines) {
  var nextLine = allSrcLines[lineIndex + 1];
  return typeof nextLine === 'undefined' || isSectionLabel(nextLine);
}
function shouldPositionChords(line, nextLine) {
  return line.type === parser_lineTypes.CHORD && nextLine && nextLine.type === parser_lineTypes.LYRIC && nextLine.model.chordPositions.length > 0;
}
function endsWithEmptyLine(allLines) {
  var lastLine = allLines[allLines.length - 1];
  return lastLine.type === parser_lineTypes.EMPTY_LINE;
}
;// CONCATENATED MODULE: ./src/parser/getAllChordsInSong.js







/**
 * @param {SongLine[]} allLines
 * @returns {SongChord[]}
 */
function getAllChordsInSong(allLines) {
  var allChords = [];
  var i;
  forEachChordInSong(allLines, function (chord) {
    if (chord.model !== syntax.noChord) {
      i = findIndex_default()(allChords, function (o) {
        return isEqual_default()(omit_default()(o.model, ['numeral']), omit_default()(chord.model, ['numeral']));
      });
      if (i === -1) {
        allChords.push({
          model: cloneDeep_default()(chord.model),
          occurrences: 1,
          duration: chord.duration
        });
        i = allChords.length - 1;
      } else {
        allChords[i].occurrences++;
        allChords[i].duration += chord.duration;
      }
    }
  });
  if (allChords.length) {
    allChords[0].isFirst = true;
    allChords[i].isLast = true;
  }
  return allChords;
}
;// CONCATENATED MODULE: ./src/parser/getAllKeysInSong.js




/**
 * @param {SongLine[]} allLines
 * @param {SongChord[]} allChords
 * @returns {SongKeys}
 */
function getAllKeysInSong(allLines, allChords) {
  var allKeys = {
    auto: undefined,
    explicit: []
  };
  allLines.forEach(function (line) {
    if (line.type === parser_lineTypes.KEY_DECLARATION) {
      allKeys.explicit.push(cloneDeep_default()(line.model));
    }
  });
  if (allKeys.explicit.length === 0) {
    var autoDetectedKey = guessKey(allChords);
    if (autoDetectedKey) {
      allKeys.auto = autoDetectedKey;
    }
  }
  return allKeys;
}
;// CONCATENATED MODULE: ./src/parser/parseSong.js







/**
 * @typedef {Object} Song
 * @type {Object}
 * @property {SongLine[]} allLines
 * @property {SongChord[]} allChords
 * @property {SongKeys} allKeys
 */

/**
 * @typedef {Object} SongChord
 * @type {Object}
 * @property {ChordDef} model
 * @property {number} occurrences - number of times the chord appears in the song
 * @property {number} duration - in beats, cumulated duration of the chord
 */

/**
 * @typedef {Object} SongKeys
 * @type {Object}
 * @property {KeyDeclaration} auto - automatically detected key
 * @property {KeyDeclaration[]} explicit - explicitly declared keys
 */

/**
 * @param {string|array} songSrc
 * @param {Object} [options]
 * @param {Object} [options.windowObject] - A JSDOM window object for using chordmark in NodeJs
 * @returns {Song}
 */
function parseSong(songSrc) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    windowObject = _ref.windowObject;
  var songArray = !isArray_default()(songSrc) ? songSrc.split('\n') : songSrc;
  var songLines = songLinesFactory();

  /**
   * @type {SongLine[]}
   */
  songArray.map(function (line) {
    return escapeHTML(line, windowObject);
  }).map(function (line) {
    return stripTags(line, windowObject);
  }).forEach(songLines.addLine);
  songLines.flagPositionedChords();
  var allLines = songLines.asArray();
  var allChords = getAllChordsInSong(allLines);
  var allKeys = getAllKeysInSong(allLines, allChords);
  return {
    allLines: allLines,
    allChords: allChords,
    allKeys: allKeys
  };
}
;// CONCATENATED MODULE: ./src/renderer/symbols.js
/* harmony default export */ const symbols = ({
  barRepeat: '%',
  barSeparator: '|',
  chordBeat: '.',
  chordLineOffsetSpacer: ' ',
  emptyBeatSpaces: 1,
  keyDeclarationPrefix: 'key: ',
  lyricsSpacer: ' ',
  noChordSymbol: 'NC',
  spacesAfterDefault: 2,
  spacesAfterSubBeatDefault: 1,
  spacesAfterTimeSignature: 1,
  subBeatGroupOpener: '[',
  subBeatGroupCloser: ']'
});
;// CONCATENATED MODULE: ./src/renderer/spacers/chord/getBeatString.js


/**
 * Returns the rendered string of a given beat, e.g. a single chord or a sub-beat group of chords.
 * This is useful for the purpose of measuring a beat length (e.g. alignment)
 * @param {Bar} bar
 * @param {Number} beatIndex
 * @param {Object} options
 * @param {Boolean} options.shouldPrintSubBeatDelimiters
 * @param {('chord'|'roman')} options.symbolType
 * @returns {String}
 */
function getBeatString(bar, beatIndex) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref$shouldPrintSubBe = _ref.shouldPrintSubBeatDelimiters,
    shouldPrintSubBeatDelimiters = _ref$shouldPrintSubBe === void 0 ? true : _ref$shouldPrintSubBe,
    _ref$symbolType = _ref.symbolType,
    symbolType = _ref$symbolType === void 0 ? 'chord' : _ref$symbolType;
  var beatChords = bar.allChords.filter(function (chord) {
    return chord.beat === beatIndex;
  });
  switch (beatChords.length) {
    case 0:
      return '';
    case 1:
      {
        return getChordString(bar, beatChords[0], {
          shouldPrintSubBeatDelimiters: shouldPrintSubBeatDelimiters,
          symbolType: symbolType
        });
      }
    default:
      {
        return beatChords.reduce(function (allChords, chord, i) {
          var spacesBefore = i > 0 ? ' '.repeat(symbols.spacesAfterSubBeatDefault) : '';
          return allChords + spacesBefore + getChordString(bar, chord, {
            shouldPrintSubBeatDelimiters: shouldPrintSubBeatDelimiters,
            symbolType: symbolType
          });
        }, '');
      }
  }
}

/**
 * Returns the rendered string of a given chord
 * This is useful for the purpose of measuring a beat length (e.g. alignment)
 * @param {Bar} bar
 * @param {ChordDef} chord
 * @param {Object} options
 * @param {Boolean} options.shouldPrintSubBeatDelimiters
 * @param {('chord'|'roman')} options.symbolType
 * @returns {String}
 */
function getChordString(bar, chord, _ref2) {
  var shouldPrintSubBeatDelimiters = _ref2.shouldPrintSubBeatDelimiters,
    _ref2$symbolType = _ref2.symbolType,
    symbolType = _ref2$symbolType === void 0 ? 'chord' : _ref2$symbolType;
  var shouldPrintChordSymbol = symbolType === 'chord' || chord.model === symbols.barRepeat || chord.model === symbols.noChordSymbol;
  var symbol = shouldPrintChordSymbol ? chord.symbol : chord.model.numeral.symbol;
  if (!chord.isInSubBeatGroup) {
    var chordDuration = bar.shouldPrintChordsDuration ? symbols.chordBeat.repeat(chord.duration) : '';
    return symbol + chordDuration;
  } else {
    if (shouldPrintSubBeatDelimiters && chord.isFirstOfSubBeat) {
      return symbols.subBeatGroupOpener + symbol;
    } else if (shouldPrintSubBeatDelimiters && chord.isLastOfSubBeat) {
      return symbol + symbols.subBeatGroupCloser;
    } else {
      return symbol;
    }
  }
}
;// CONCATENATED MODULE: ./src/renderer/spacers/chord/getMaxBeatsWidth.js



/**
 * @param {SongLine[]} allLines
 * @param {Object} options
 * @param {Function} options.shouldAlignChordsWithLyrics
 * @param {Boolean} options.shouldPrintSubBeatDelimiters
 * @param {('chord'|'roman')} options.symbolType
 * @returns {Array}
 */
function getMaxBeatsWidth(allLines, _ref) {
  var shouldAlignChordsWithLyrics = _ref.shouldAlignChordsWithLyrics,
    _ref$shouldPrintSubBe = _ref.shouldPrintSubBeatDelimiters,
    shouldPrintSubBeatDelimiters = _ref$shouldPrintSubBe === void 0 ? true : _ref$shouldPrintSubBe,
    _ref$symbolType = _ref.symbolType,
    symbolType = _ref$symbolType === void 0 ? 'chord' : _ref$symbolType;
  var maxBeatsWidth = [];
  allLines.filter(function (line) {
    return line.type === parser_lineTypes.CHORD;
  }).filter(function (line) {
    return !shouldAlignChordsWithLyrics(line);
  }).forEach(function (line) {
    line.model.allBars.filter(function (bar) {
      return !bar.lineHadTimeSignatureChange;
    }).forEach(function (bar, barIndex) {
      if (!maxBeatsWidth[barIndex]) {
        maxBeatsWidth[barIndex] = {};
        for (var i = 1; i <= bar.timeSignature.beatCount; i++) {
          maxBeatsWidth[barIndex][i] = 0;
        }
      }
      bar.allChords.filter(function (chord) {
        return !chord.isInSubBeatGroup || chord.isLastOfSubBeat;
      }).forEach(function (chord) {
        var beatString = getBeatString(bar, chord.beat, {
          shouldPrintSubBeatDelimiters: shouldPrintSubBeatDelimiters,
          symbolType: symbolType
        });
        maxBeatsWidth[barIndex][chord.beat] = Math.max(maxBeatsWidth[barIndex][chord.beat], beatString.length);
      });
    });
  });
  return maxBeatsWidth;
}
;// CONCATENATED MODULE: ./src/renderer/spacers/chord/simple.js



/**
 * Simple spacer: simply happens default spaces value after each chord.
 * @param {ChordLine} chordLineInput
 */
function space(chordLineInput) {
  var chordLine = cloneDeep_default()(chordLineInput);
  chordLine.allBars.forEach(function (bar) {
    spaceBar(bar);
  });
  return chordLine;
}
function spaceBar(bar) {
  bar.allChords.forEach(function (chord) {
    chord.spacesAfter = chord.isInSubBeatGroup && !chord.isLastOfSubBeat ? symbols.spacesAfterSubBeatDefault : symbols.spacesAfterDefault;
    chord.spacesWithin = 0;
  });
}
;// CONCATENATED MODULE: ./src/renderer/spacers/chord/aligned.js





/**
 * @param {ChordLine} chordLineInput
 * @param {Array} maxBeatsWidth
 * @param {Object} options
 * @param {Boolean} options.shouldPrintBarSeparators
 * @param {Boolean} options.shouldPrintSubBeatDelimiters
 * @param {('chord'|'roman')} options.symbolType
 * @returns {ChordLine}
 */
function aligned_space(chordLineInput, maxBeatsWidth, _ref) {
  var _ref$shouldPrintBarSe = _ref.shouldPrintBarSeparators,
    shouldPrintBarSeparators = _ref$shouldPrintBarSe === void 0 ? true : _ref$shouldPrintBarSe,
    _ref$shouldPrintSubBe = _ref.shouldPrintSubBeatDelimiters,
    shouldPrintSubBeatDelimiters = _ref$shouldPrintSubBe === void 0 ? true : _ref$shouldPrintSubBe,
    _ref$symbolType = _ref.symbolType,
    symbolType = _ref$symbolType === void 0 ? 'chord' : _ref$symbolType;
  var chordLine = cloneDeep_default()(chordLineInput);
  chordLine.allBars.forEach(function (bar, barIndex) {
    if (bar.lineHadTimeSignatureChange) {
      spaceBar(bar);
    } else {
      bar.allChords.forEach(function (chord) {
        var beatString = getBeatString(bar, chord.beat, {
          shouldPrintSubBeatDelimiters: shouldPrintSubBeatDelimiters,
          symbolType: symbolType
        });
        if (chord.isInSubBeatGroup && !chord.isLastOfSubBeat) {
          chord.spacesWithin = 0;
          chord.spacesAfter = symbols.spacesAfterSubBeatDefault;
        } else {
          chord.spacesWithin = maxBeatsWidth[barIndex][chord.beat] - beatString.length;
          chord.spacesAfter = 0;
        }
        if (shouldFillEmptyBeats(bar, chord)) {
          chord.spacesAfter = symbols.spacesAfterDefault + getEmptyBeatsWidth(bar, chord, maxBeatsWidth[barIndex]);
        }
        if (shouldSpaceLastBeat(bar, chord, shouldPrintBarSeparators)) {
          chord.spacesAfter = symbols.spacesAfterDefault;
        }
      });
    }
  });
  return chordLine;
}
var shouldFillEmptyBeats = function shouldFillEmptyBeats(bar, chord) {
  return (!chord.isInSubBeatGroup || chord.isLastOfSubBeat) && !isLastBeatOfBar(bar, chord);
};
var getEmptyBeatsWidth = function getEmptyBeatsWidth(bar, chord, maxBeatsWidthForBar) {
  var spacesAfter = 0;
  for (var i = chord.beat + 1; i < chord.beat + chord.duration; i++) {
    var beatMaxWidth = maxBeatsWidthForBar[i];
    spacesAfter += beatMaxWidth ? beatMaxWidth : symbols.emptyBeatSpaces;
    if (i !== bar.timeSignature.beatCount && beatMaxWidth) {
      spacesAfter += symbols.spacesAfterDefault;
    }
  }
  return spacesAfter;
};
var isLastBeatOfBar = function isLastBeatOfBar(bar, chord) {
  return chord.beat === bar.timeSignature.beatCount;
};
var shouldSpaceLastBeat = function shouldSpaceLastBeat(bar, chord, shouldPrintBarSeparators) {
  return !shouldPrintBarSeparators && isLastBeatOfBar(bar, chord) && (!chord.isInSubBeatGroup || chord.isLastOfSubBeat);
};
;// CONCATENATED MODULE: ./src/renderer/spacers/chord/chordLyrics.js
/* eslint-disable max-lines-per-function */



var chordSpaceAfterDefault = 1;

/**
 * Space chords and lyrics, so they are aligned with each other:
 * - for chords: adjust the spaceAfter property of each chord object
 * - for lyrics: create a new string with extra spaces where needed
 *
 * @param {ChordLine} chordLineInput
 * @param {LyricLine} lyricsLineInput
 * @param {Boolean} shouldPrintBarSeparators
 * @param {Boolean} shouldPrintSubBeatDelimiters
 * @param {Boolean} shouldPrintInlineTimeSignatures
 * @param {('chord'|'roman')} symbolType
 * @returns {Object}
 */
function chordLyrics_space(chordLineInput, lyricsLineInput) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref$shouldPrintBarSe = _ref.shouldPrintBarSeparators,
    shouldPrintBarSeparators = _ref$shouldPrintBarSe === void 0 ? true : _ref$shouldPrintBarSe,
    _ref$shouldPrintSubBe = _ref.shouldPrintSubBeatDelimiters,
    shouldPrintSubBeatDelimiters = _ref$shouldPrintSubBe === void 0 ? true : _ref$shouldPrintSubBe,
    _ref$shouldPrintInlin = _ref.shouldPrintInlineTimeSignatures,
    shouldPrintInlineTimeSignatures = _ref$shouldPrintInlin === void 0 ? true : _ref$shouldPrintInlin,
    _ref$symbolType = _ref.symbolType,
    symbolType = _ref$symbolType === void 0 ? 'chord' : _ref$symbolType;
  if (hasNoPositionMarkers(lyricsLineInput)) {
    return {
      chordLine: chordLineInput,
      lyricsLine: lyricsLineInput
    };
  }
  var chordLine = cloneDeep_default()(chordLineInput);
  var lyricsLine = cloneDeep_default()(lyricsLineInput);
  var tokenizedLyrics = lyricsLine.chordPositions.map(function (position, i, allPositions) {
    return lyricsLine.lyrics.substring(position, allPositions[i + 1]);
  });
  var timeSignatureString = '';
  var spacedLyricsLine = '';
  var chordToken;
  var lyricToken;
  chordLine.allBars.forEach(function (bar, barIndex) {
    bar.allChords.forEach(function (chord, chordIndex, allChords) {
      lyricToken = tokenizedLyrics.shift(); // get next lyric token

      if (lyricToken) {
        timeSignatureString = chordIndex === 0 && shouldPrintInlineTimeSignatures && bar.shouldPrintBarTimeSignature ? bar.timeSignature.string + symbols.spacesAfterTimeSignature : '';
        var shouldOffsetLyricsLine = barIndex === 0 && chordIndex === 0 && lyricsLine.chordPositions[0] === 0;
        chordToken = getChordToken(bar, chord, shouldOffsetLyricsLine);
        lyricToken = getAdjustedLyricToken(shouldOffsetLyricsLine, chord.isFirstOfSubBeat);
        var isLastChordOfBar = chordIndex === allChords.length - 1;
        var isFollowedBySubBeatGroup = allChords[chordIndex + 1] && allChords[chordIndex + 1].isFirstOfSubBeat;
        if (lyricToken.length - chordToken.length > 0) {
          var isLastLyricToken = tokenizedLyrics.length === 0;
          // Warning: `getChordSpacesAfter()` has a side effect since its logic might result in updating
          // the lyricsToken with an extra space
          chord.spacesAfter = getChordSpacesAfter(isLastChordOfBar, isLastLyricToken, isFollowedBySubBeatGroup);
        } else {
          chord.spacesAfter = chordSpaceAfterDefault;
          lyricToken += symbols.lyricsSpacer.repeat(getLyricSpacesAfter(isLastChordOfBar, isFollowedBySubBeatGroup));
        }
        spacedLyricsLine += lyricToken;
      } else {
        chord.spacesAfter = chordSpaceAfterDefault;
      }
      chord.spacesWithin = 0;
    });
  });
  if (shouldOffsetChordLine(lyricsLine)) {
    var chordLineOffset = lyricsLine.chordPositions[0];
    chordLine.offset = chordLineOffset;
    if (shouldPrintBarSeparators) {
      chordLine.offset--;
    }
    spacedLyricsLine = lyricsLine.lyrics.substring(0, chordLineOffset) + spacedLyricsLine;
  }
  if (tokenizedLyrics.length) {
    spacedLyricsLine += tokenizedLyrics.join('');
  }
  lyricsLine.lyrics = trimEnd(spacedLyricsLine);
  return {
    chordLine: chordLine,
    lyricsLine: lyricsLine
  };
  function getChordToken(bar, chord, shouldOffsetLyricsLine) {
    var token = timeSignatureString + getChordString(bar, chord, {
      shouldPrintSubBeatDelimiters: chord.isLastOfSubBeat && shouldPrintSubBeatDelimiters,
      symbolType: symbolType
    });
    if (shouldOffsetLyricsLine) {
      if (shouldPrintSubBeatDelimiters && chord.isFirstOfSubBeat) token = symbols.subBeatGroupOpener + token;
      if (shouldPrintBarSeparators) token = symbols.barSeparator + token;
    }
    return token;
  }
  function getAdjustedLyricToken(shouldOffsetLyricsLine, isFistOfSubBeatGroup) {
    var token = lyricToken;
    if (startsWithSpace(token)) {
      token = symbols.lyricsSpacer.repeat(chordToken.length - 1) + token;
    } else {
      if (shouldOffsetLyricsLine) {
        var offset = 0;
        if (shouldPrintBarSeparators) offset++;
        if (shouldPrintSubBeatDelimiters && isFistOfSubBeatGroup) offset++;
        token = symbols.lyricsSpacer.repeat(offset) + token;
      }
      if (timeSignatureString.length) {
        token = ' '.repeat(timeSignatureString.length) + token;
      }
    }
    return token;
  }
  function getChordSpacesAfter(isLastChordOfBar, isLastLyricToken, isFollowedBySubBeatGroup) {
    var spacesAfter = lyricToken.length - chordToken.length;
    var shouldMakeRoomForBarSep = isLastChordOfBar && shouldPrintBarSeparators && !isLastLyricToken;
    var shouldMakeRoomForSubBeatOpener = !isLastChordOfBar && shouldPrintSubBeatDelimiters && isFollowedBySubBeatGroup;
    if (shouldMakeRoomForBarSep || shouldMakeRoomForSubBeatOpener) {
      if (spacesAfter > 1) {
        spacesAfter -= 1;
      } else {
        lyricToken += symbols.lyricsSpacer; //duh!
      }
    }
    return spacesAfter;
  }
  function getLyricSpacesAfter(isLastChordOfBar, isFollowedBySubBeatGroup) {
    var lyricsSpaceAfter = chordToken.length - lyricToken.length + chordSpaceAfterDefault;
    if (isLastChordOfBar && shouldPrintBarSeparators) {
      lyricsSpaceAfter++;
    } else if (isFollowedBySubBeatGroup) {
      lyricsSpaceAfter++;
    }
    return lyricsSpaceAfter;
  }
}
var hasNoPositionMarkers = function hasNoPositionMarkers(lyricsLine) {
  return lyricsLine.chordPositions.length === 0;
};
var shouldOffsetChordLine = function shouldOffsetChordLine(lyricsLine) {
  return lyricsLine.chordPositions[0] > 0;
};

// source: https://github.com/es-shims/String.prototype.trimEnd/blob/main/implementation.js
var trimEnd = function trimEnd(str) {
  var endWhitespace =
  // eslint-disable-next-line max-len,no-control-regex
  /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]*$/;
  return str.replace(endWhitespace, '');
};
var startsWithSpace = function startsWithSpace(str) {
  return str.indexOf(' ') === 0;
};
;// CONCATENATED MODULE: ./src/renderer/components/tpl/chordLine.js
var render = function render(_ref) {
  var chordLineOffset = _ref.chordLineOffset,
    chordLine = _ref.chordLine,
    symbolType = _ref.symbolType;
  var chordLineClasses = ['cmChordLine'];
  if (symbolType === 'roman') chordLineClasses.push('cmChordLine-romanNumeral');
  return "<span class=\"".concat(chordLineClasses.join(' '), "\">").concat(chordLineOffset ? "<span class=\"cmChordLineOffset\">".concat(chordLineOffset, "</span>") : '').concat(chordLine, "</span>");
};
/* harmony default export */ const tpl_chordLine = (render);
;// CONCATENATED MODULE: ./src/renderer/components/tpl/chordSymbol.js
var chordSymbol_render = function render(_ref) {
  var chordSymbol = _ref.chordSymbol,
    chordDuration = _ref.chordDuration,
    subBeatGroupOpener = _ref.subBeatGroupOpener,
    subBeatGroupCloser = _ref.subBeatGroupCloser,
    numeralType = _ref.numeralType;
  var groupOpen = subBeatGroupOpener ? "<span class=\"cmSubBeatGroupOpener\">".concat(subBeatGroupOpener, "</span>") : '';
  var groupClose = subBeatGroupCloser ? "<span class=\"cmSubBeatGroupCloser\">".concat(subBeatGroupCloser, "</span>") : '';
  var symbolClasses = ['cmChordSymbol'];
  if (numeralType) {
    symbolClasses.push("cmRomanNumeral", "cmRomanNumeral-".concat(numeralType));
  }
  return "".concat(groupOpen, "<span class=\"").concat(symbolClasses.join(' '), "\">").concat(chordSymbol).concat(chordDuration ? "<span class=\"cmChordDuration\">".concat(chordDuration, "</span>") : '', "</span>").concat(groupClose);
};
/* harmony default export */ const tpl_chordSymbol = (chordSymbol_render);
;// CONCATENATED MODULE: ./src/renderer/components/renderChordSymbol.js



/**
 * @param {ChordLineChord} chord
 * @param {Object} options
 * @param {Boolean} options.shouldPrintChordsDuration
 * @param {Boolean} options.shouldPrintSubBeatOpener
 * @param {Boolean} options.shouldPrintSubBeatCloser
 * @param {('chord'|'roman')} options.symbolType
 * @returns {String} rendered html
 */
function renderChordSymbol(chord, _ref) {
  var _ref$shouldPrintChord = _ref.shouldPrintChordsDuration,
    shouldPrintChordsDuration = _ref$shouldPrintChord === void 0 ? false : _ref$shouldPrintChord,
    _ref$shouldPrintSubBe = _ref.shouldPrintSubBeatOpener,
    shouldPrintSubBeatOpener = _ref$shouldPrintSubBe === void 0 ? false : _ref$shouldPrintSubBe,
    _ref$shouldPrintSubBe2 = _ref.shouldPrintSubBeatCloser,
    shouldPrintSubBeatCloser = _ref$shouldPrintSubBe2 === void 0 ? false : _ref$shouldPrintSubBe2,
    _ref$symbolType = _ref.symbolType,
    symbolType = _ref$symbolType === void 0 ? 'chord' : _ref$symbolType;
  var shouldPrintChordSymbol = symbolType === 'chord' || chord.model === symbols.barRepeat || chord.model === symbols.noChordSymbol;
  var chordSymbol = shouldPrintChordSymbol ? chord.symbol : chord.model.numeral.symbol;
  return tpl_chordSymbol({
    chordSymbol: chordSymbol,
    chordDuration: shouldPrintChordsDuration ? symbols.chordBeat.repeat(chord.duration) : false,
    subBeatGroupOpener: shouldPrintSubBeatOpener ? symbols.subBeatGroupOpener : '',
    subBeatGroupCloser: shouldPrintSubBeatCloser ? symbols.subBeatGroupCloser : '',
    numeralType: !shouldPrintChordSymbol ? chord.model.numeral.type : ''
  });
}
;// CONCATENATED MODULE: ./src/renderer/components/tpl/timeSignature.js
var timeSignature_render = function render(_ref) {
  var timeSignature = _ref.timeSignature;
  return "<span class=\"cmTimeSignature\">".concat(timeSignature, "</span>");
};
/* harmony default export */ const timeSignature = (timeSignature_render);
;// CONCATENATED MODULE: ./src/renderer/components/renderTimeSignature.js


/**
 * @param {SongTimeSignatureLine} timeSignatureLine
 * @returns {String} rendered html
 */
function renderTimeSignature_render(timeSignatureLine) {
  return timeSignature({
    timeSignature: timeSignatureLine.string
  });
}
;// CONCATENATED MODULE: ./src/renderer/components/tpl/barContent.js
var barContent_render = function render(_ref) {
  var barContent = _ref.barContent;
  return "".concat(barContent);
};
/* harmony default export */ const tpl_barContent = (barContent_render);
;// CONCATENATED MODULE: ./src/renderer/components/renderBarContent.js





var renderBarContent_space = ' ';
var defaultSpacesWithin = 0;
var defaultSpacesAfter = 2;

/**
 * @param {Bar} bar
 * @param {Boolean} isLastBar
 * @param {Boolean} shouldPrintBarSeparators
 * @param {Boolean} shouldPrintSubBeatDelimiters
 * @param {Boolean} shouldPrintTimeSignature
 * @param {('chord'|'roman')} options.symbolType
 * @returns {String} rendered html
 */
function renderBarContent(bar) {
  var isLastBar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref$shouldPrintBarSe = _ref.shouldPrintBarSeparators,
    shouldPrintBarSeparators = _ref$shouldPrintBarSe === void 0 ? true : _ref$shouldPrintBarSe,
    _ref$shouldPrintSubBe = _ref.shouldPrintSubBeatDelimiters,
    shouldPrintSubBeatDelimiters = _ref$shouldPrintSubBe === void 0 ? true : _ref$shouldPrintSubBe,
    _ref$shouldPrintTimeS = _ref.shouldPrintTimeSignature,
    shouldPrintTimeSignature = _ref$shouldPrintTimeS === void 0 ? false : _ref$shouldPrintTimeS,
    _ref$symbolType = _ref.symbolType,
    symbolType = _ref$symbolType === void 0 ? 'chord' : _ref$symbolType;
  var spacesWithin = 0;
  var spacesAfter = 0;
  var barContent = '';
  if (shouldPrintTimeSignature) {
    barContent += renderTimeSignature_render(bar.timeSignature) + ' '.repeat(symbols.spacesAfterTimeSignature);
  }
  barContent += bar.allChords.reduce(function (rendering, chord, i) {
    spacesWithin = isFinite_default()(chord.spacesWithin) ? chord.spacesWithin : defaultSpacesWithin;
    spacesAfter = isFinite_default()(chord.spacesAfter) ? chord.spacesAfter : defaultSpacesAfter;
    rendering += renderChordSymbol(chord, {
      shouldPrintChordsDuration: chord.isInSubBeatGroup ? false : bar.shouldPrintChordsDuration,
      shouldPrintSubBeatOpener: shouldPrintSubBeatDelimiters && chord.isFirstOfSubBeat,
      shouldPrintSubBeatCloser: shouldPrintSubBeatDelimiters && chord.isLastOfSubBeat,
      symbolType: symbolType
    });
    if (shouldPrintChordSpaces()) {
      rendering += renderBarContent_space.repeat(spacesWithin) + renderBarContent_space.repeat(spacesAfter);
    }
    function shouldPrintChordSpaces() {
      var isLastChordOfLine = isLastChordOfBar(bar, i) && isLastBar;
      return !isLastChordOfLine || isLastChordOfLine && shouldPrintBarSeparators;
    }
    return rendering;
  }, '');
  return tpl_barContent({
    barContent: barContent
  });
}
function isLastChordOfBar(bar, i) {
  return !bar.allChords[i + 1];
}
;// CONCATENATED MODULE: ./src/renderer/components/tpl/barSeparator.js
var barSeparator_render = function render(_ref) {
  var barSeparator = _ref.barSeparator;
  return "<span class=\"cmBarSeparator\">".concat(barSeparator, "</span>");
};
/* harmony default export */ const tpl_barSeparator = (barSeparator_render);
;// CONCATENATED MODULE: ./src/renderer/components/renderChordLine.js





/**
 * @param {ChordLine} chordLineModel
 * @param {Boolean} shouldPrintBarSeparators
 * @param {Boolean} shouldPrintSubBeatDelimiters
 * @param {Boolean} shouldPrintInlineTimeSignatures
 * @param {('chord'|'roman')} options.symbolType
 * @returns {String} rendered html
 */
function renderChordLine(chordLineModel) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$shouldPrintBarSe = _ref.shouldPrintBarSeparators,
    shouldPrintBarSeparators = _ref$shouldPrintBarSe === void 0 ? true : _ref$shouldPrintBarSe,
    _ref$shouldPrintSubBe = _ref.shouldPrintSubBeatDelimiters,
    shouldPrintSubBeatDelimiters = _ref$shouldPrintSubBe === void 0 ? true : _ref$shouldPrintSubBe,
    _ref$shouldPrintInlin = _ref.shouldPrintInlineTimeSignatures,
    shouldPrintInlineTimeSignatures = _ref$shouldPrintInlin === void 0 ? true : _ref$shouldPrintInlin,
    _ref$symbolType = _ref.symbolType,
    symbolType = _ref$symbolType === void 0 ? 'chord' : _ref$symbolType;
  var allBarsRendered = chordLineModel.allBars.map(function (bar, i) {
    var isLastBar = !chordLineModel.allBars[i + 1];
    var shouldPrintTimeSignature = shouldPrintInlineTimeSignatures && bar.shouldPrintBarTimeSignature;
    return renderBarContent(bar, isLastBar, {
      shouldPrintBarSeparators: shouldPrintBarSeparators,
      shouldPrintSubBeatDelimiters: shouldPrintSubBeatDelimiters,
      shouldPrintTimeSignature: shouldPrintTimeSignature,
      symbolType: symbolType
    });
  });
  var barSeparator = shouldPrintBarSeparators ? tpl_barSeparator({
    barSeparator: symbols.barSeparator
  }) : '';
  var chordLine = barSeparator + allBarsRendered.join(barSeparator) + barSeparator;
  var chordLineOffset = symbols.chordLineOffsetSpacer.repeat(chordLineModel.offset || 0);
  return tpl_chordLine({
    chordLineOffset: chordLineOffset,
    chordLine: chordLine,
    symbolType: symbolType
  });
}
;// CONCATENATED MODULE: ./src/renderer/components/tpl/chordLyricLine.js
var chordLyricLine_render = function render(_ref) {
  var chordLyricsPairs = _ref.chordLyricsPairs;
  var chordLyricLine = '<span class="cmChordLyricLine">';
  chordLyricsPairs.forEach(function (pair) {
    chordLyricLine += '<span class="cmChordLyricPair">' + "<span class=\"cmChordLine\">".concat(pair.chords || '&nbsp;', "</span>") + "<span class=\"cmLyricLine\">".concat(pair.lyrics, "</span>") + '</span>';
  });
  chordLyricLine += '</span>';
  return chordLyricLine;
};
/* harmony default export */ const chordLyricLine = (chordLyricLine_render);
// EXTERNAL MODULE: ../../node_modules/lodash/intersection.js
var intersection = __webpack_require__(8150);
var intersection_default = /*#__PURE__*/__webpack_require__.n(intersection);
;// CONCATENATED MODULE: ./src/core/dom/htmlToElement.js

function htmlToElement(html, windowObject) {
  return getDomPurify(windowObject).sanitize(html, {
    RETURN_DOM_FRAGMENT: true
  }).firstChild;
}
;// CONCATENATED MODULE: ./src/renderer/components/renderChordLyricLine.js
function renderChordLyricLine_toConsumableArray(r) { return renderChordLyricLine_arrayWithoutHoles(r) || renderChordLyricLine_iterableToArray(r) || renderChordLyricLine_unsupportedIterableToArray(r) || renderChordLyricLine_nonIterableSpread(); }
function renderChordLyricLine_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function renderChordLyricLine_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function renderChordLyricLine_arrayWithoutHoles(r) { if (Array.isArray(r)) return renderChordLyricLine_arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = renderChordLyricLine_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function renderChordLyricLine_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return renderChordLyricLine_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? renderChordLyricLine_arrayLikeToArray(r, a) : void 0; } }
function renderChordLyricLine_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }





var breakPointsClasses = ['cmChordSymbol', 'cmTimeSignature',
//fixme: consider smarter breakpoints rules at some point
// as it would be better not to always break on those symbols
'cmBarSeparator', 'cmSubBeatGroupOpener', 'cmSubBeatGroupCloser'];

/**
 * This is by far the most complex renderer.
 * It does not render from the model but from the HTML markup of previously rendered chords and lyrics lines.
 * The existing markup is split and combined into a new markup suitable for small screens,
 * e.g. wrappable chord/lyric lines as a single entity.
 * Although complex, this approach was chosen to avoid:
 * - duplicating the significant rendering business logic of chord lines and/or
 * - refactoring entirely the chord/lyrics line rendering to implement the small screen renderer
 * @param {String} chordLine - html of a rendered chord line
 * @param {String} lyricLine - html of a rendered lyric line
 * @param {Object} [windowObject] - A JSDOM window object for using chordmark in NodeJs
 * @returns {String} rendered html
 */
function renderChordLyricLine(chordLine, lyricLine, windowObject) {
  var allChordTokens = getAllChordTokens(chordLine, windowObject);
  var allLyricTokens = getAllLyricTokens(lyricLine, windowObject);
  var allBreakPoints = getAllBreakpoints(allChordTokens, allLyricTokens);
  var chordLyricsPairs = getChordLyricsPairs(allBreakPoints, allChordTokens, allLyricTokens);
  return chordLyricLine({
    chordLyricsPairs: chordLyricsPairs
  });
}
function getAllChordTokens(chordLine, windowObject) {
  var chordLineNodes = htmlToElement(chordLine, windowObject);
  var allChordTokens = [];
  // using an object as a counter instead of an integer
  // so the counter can be used in a recursive loop
  var textIndex = {
    i: 0
  };
  addChordTokens(chordLineNodes, allChordTokens, textIndex);
  return allChordTokens;
}

// recursive
function addChordTokens(startNode, allNodes, textIndex) {
  startNode.childNodes.forEach(function (childNode) {
    if (childNode.nodeType === Node.TEXT_NODE) {
      var textContent = childNode.textContent;
      // if we reach a text node, then it has to be composed of spaces only
      var _iterator = _createForOfIteratorHelper(textContent),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var space = _step.value;
          allNodes.push(getToken(space, textIndex.i));
          textIndex.i++;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else {
      if (breakPointsClasses.includes(childNode.classList.value)) {
        allNodes.push(getToken(childNode.textContent, textIndex.i, childNode.outerHTML));
        textIndex.i += childNode.textContent.length;
      } else {
        addChordTokens(childNode, allNodes, textIndex);
      }
    }
  });
}
function getToken(text, textIndex, html) {
  return {
    text: text,
    textIndex: textIndex,
    html: html
  };
}
function getAllLyricTokens(lyricLine, windowObject) {
  var allTextNodes = [];
  var textLyricLine = stripTags(lyricLine, windowObject);
  var textToken = '';
  Array.from(textLyricLine).forEach(function (char, charIndex) {
    if (char === ' ') {
      if (textToken) {
        allTextNodes.push(getToken(textToken, charIndex - textToken.length));
        textToken = '';
      }
      allTextNodes.push(getToken(' ', charIndex));
    } else {
      textToken += char;
    }
  });
  allTextNodes.push(getToken(textToken, textLyricLine.length - textToken.length));
  return allTextNodes;
}
function getAllBreakpoints(allChordTokens, allLyricTokens) {
  var chordLineBreakPoints = getBreakpointsFromTokens(allChordTokens);
  var lyricLineBreakPoints = getBreakpointsFromTokens(allLyricTokens);
  var allBreakpoints = intersection_default()(chordLineBreakPoints, lyricLineBreakPoints);
  var shortestLineBreakpoints;
  var longestLineBreakpoints;
  if (last_default()(chordLineBreakPoints) > last_default()(lyricLineBreakPoints)) {
    longestLineBreakpoints = chordLineBreakPoints;
    shortestLineBreakpoints = lyricLineBreakPoints;
  } else {
    longestLineBreakpoints = lyricLineBreakPoints;
    shortestLineBreakpoints = chordLineBreakPoints;
  }
  var remainingBreakpoints = longestLineBreakpoints.filter(function (bp) {
    return bp > last_default()(shortestLineBreakpoints);
  });
  if (remainingBreakpoints.length) {
    allBreakpoints.push.apply(allBreakpoints, renderChordLyricLine_toConsumableArray(remainingBreakpoints));
  }
  // remove the 0-index breakpoint of the first token
  allBreakpoints.shift();
  return allBreakpoints;
}
function getBreakpointsFromTokens(allTokens) {
  var allBreakPoints = allTokens.map(function (token) {
    return token.textIndex;
  });
  var lastBreakpoint = allTokens.reduce(function (originalLine, token) {
    return originalLine + token.text;
  }, '').length;
  allBreakPoints.push(lastBreakpoint);
  return allBreakPoints;
}
function getChordLyricsPairs(allBreakpoints, allChordTokens, allLyricTokens) {
  var chordLyricsPairs = [];
  allBreakpoints.forEach(function (breakpoint) {
    var chordLineFragment = '';
    var textLineFragment = '';
    while (allChordTokens.length && allChordTokens[0].textIndex < breakpoint) {
      var token = allChordTokens.shift();
      chordLineFragment += token.html || token.text;
    }
    while (allLyricTokens.length && allLyricTokens[0].textIndex < breakpoint) {
      var currentNode = allLyricTokens.shift();
      textLineFragment += currentNode.text;
    }
    chordLyricsPairs.push({
      chords: chordLineFragment,
      lyrics: textLineFragment
    });
  });
  return chordLyricsPairs;
}
;// CONCATENATED MODULE: ./src/renderer/components/tpl/emptyLine.js
var emptyLine_render = function render() {
  return "<span class=\"cmEmptyLine\">&nbsp;</span>";
};
/* harmony default export */ const emptyLine = (emptyLine_render);
;// CONCATENATED MODULE: ./src/renderer/components/renderEmptyLine.js


/**
 * @returns {String} rendered html
 */
function renderEmptyLine_render() {
  return emptyLine();
}
;// CONCATENATED MODULE: ./src/renderer/components/tpl/keyDeclaration.js
var keyDeclaration_render = function render(_ref) {
  var keyDeclarationPrefix = _ref.keyDeclarationPrefix,
    key = _ref.key;
  return "<span class=\"cmKeyDeclaration\">" + "".concat(keyDeclarationPrefix) + "".concat(key) + "</span>";
};
/* harmony default export */ const keyDeclaration = (keyDeclaration_render);
;// CONCATENATED MODULE: ./src/renderer/components/renderKeyDeclaration.js



/**
 * @param {SongKeyDeclarationLine} keyDeclarationLine
 * @returns {String} rendered html
 */
function renderSectionLabel(keyDeclarationLine) {
  return keyDeclaration({
    keyDeclarationPrefix: symbols.keyDeclarationPrefix,
    key: keyDeclarationLine.symbol
  });
}
;// CONCATENATED MODULE: ./src/renderer/components/tpl/line.js
var line_render = function render(_ref) {
  var line = _ref.line,
    lineClasses = _ref.lineClasses,
    shouldOpenSection = _ref.shouldOpenSection,
    sectionWrapperClasses = _ref.sectionWrapperClasses,
    shouldClosePriorSection = _ref.shouldClosePriorSection,
    shouldCloseFinalSection = _ref.shouldCloseFinalSection;
  var wrapper = '';
  if (shouldClosePriorSection) {
    wrapper += '</div>';
  }
  if (shouldOpenSection) {
    wrapper += "<div class=\"".concat(sectionWrapperClasses, "\">");
  }
  wrapper += "<p class=\"".concat(lineClasses, "\">").concat(line, "</p>");
  if (shouldCloseFinalSection) {
    wrapper += "</div>";
  }
  return wrapper;
};
/* harmony default export */ const tpl_line = (line_render);
;// CONCATENATED MODULE: ./src/renderer/components/renderLine.js


/**
 * @param {string} line
 * @param {Boolean} isFromAutoRepeatChords
 * @param {Boolean} isFromChordLineRepeater
 * @param {Boolean} isFromSectionCopy
 * @param {Boolean} isFromSectionMultiply
 * @param {Boolean} shouldOpenSection
 * @param {Boolean} shouldClosePriorSection
 * @param {Boolean} shouldCloseFinalSection
 * @param {Array} sectionWrapperClasses
 * @returns {String} rendered html
 */
// eslint-disable-next-line complexity
function renderLine_render(line) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$isFromAutoRepeat = _ref.isFromAutoRepeatChords,
    isFromAutoRepeatChords = _ref$isFromAutoRepeat === void 0 ? false : _ref$isFromAutoRepeat,
    _ref$isFromChordLineR = _ref.isFromChordLineRepeater,
    isFromChordLineRepeater = _ref$isFromChordLineR === void 0 ? false : _ref$isFromChordLineR,
    _ref$isFromSectionCop = _ref.isFromSectionCopy,
    isFromSectionCopy = _ref$isFromSectionCop === void 0 ? false : _ref$isFromSectionCop,
    _ref$isFromSectionMul = _ref.isFromSectionMultiply,
    isFromSectionMultiply = _ref$isFromSectionMul === void 0 ? false : _ref$isFromSectionMul,
    _ref$shouldOpenSectio = _ref.shouldOpenSection,
    shouldOpenSection = _ref$shouldOpenSectio === void 0 ? false : _ref$shouldOpenSectio,
    _ref$shouldClosePrior = _ref.shouldClosePriorSection,
    shouldClosePriorSection = _ref$shouldClosePrior === void 0 ? false : _ref$shouldClosePrior,
    _ref$shouldCloseFinal = _ref.shouldCloseFinalSection,
    shouldCloseFinalSection = _ref$shouldCloseFinal === void 0 ? false : _ref$shouldCloseFinal,
    _ref$sectionWrapperCl = _ref.sectionWrapperClasses,
    sectionWrapperClasses = _ref$sectionWrapperCl === void 0 ? [] : _ref$sectionWrapperCl;
  var lineClasses = ['cmLine'];
  if (isFromAutoRepeatChords) {
    lineClasses.push('cmLine--isFromAutoRepeatChords');
  }
  if (isFromChordLineRepeater) {
    lineClasses.push('cmLine--isFromChordLineRepeater');
  }
  if (isFromSectionCopy) {
    lineClasses.push('cmLine--isFromSectionCopy');
  }
  if (isFromSectionMultiply) {
    lineClasses.push('cmLine--isFromSectionMultiply');
  }
  return tpl_line({
    line: line,
    lineClasses: lineClasses.join(' '),
    shouldOpenSection: shouldOpenSection,
    sectionWrapperClasses: sectionWrapperClasses.join(' '),
    shouldClosePriorSection: shouldClosePriorSection,
    shouldCloseFinalSection: shouldCloseFinalSection
  });
}
;// CONCATENATED MODULE: ./src/renderer/components/tpl/lyricLine.js
var lyricLine_render = function render(_ref) {
  var lyricLine = _ref.lyricLine;
  return "<span class=\"cmLyricLine\">".concat(lyricLine, "</span>");
};
/* harmony default export */ const tpl_lyricLine = (lyricLine_render);
;// CONCATENATED MODULE: ./src/renderer/components/renderLyricLine.js


/**
 * @param {SongLyricLine} lyricLine
 * @param {Boolean} alignChordsWithLyrics
 * @param {('all'|'lyrics'|'chords'|'chordsFirstLyricLine')} chartType
 * @returns {String} rendered html
 */
function renderLyricLine_render(lyricLine) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$alignChordsWithL = _ref.alignChordsWithLyrics,
    alignChordsWithLyrics = _ref$alignChordsWithL === void 0 ? false : _ref$alignChordsWithL,
    _ref$chartType = _ref.chartType,
    chartType = _ref$chartType === void 0 ? 'all' : _ref$chartType;
  var trimmedLyricLine = shouldTrimLine(alignChordsWithLyrics, chartType) ? lyricLine.model.lyrics.trim() : lyricLine.model.lyrics;
  return tpl_lyricLine({
    lyricLine: trimmedLyricLine
  });
}
var shouldTrimLine = function shouldTrimLine(alignChordsWithLyrics, chartType) {
  return !alignChordsWithLyrics || chartType === 'lyrics';
};
;// CONCATENATED MODULE: ./src/renderer/components/tpl/sectionLabel.js
var sectionLabel_render = function render(_ref) {
  var label = _ref.label,
    multiplier = _ref.multiplier;
  return "<span class=\"cmSectionLabel\">".concat(label).concat(multiplier ? "<span class=\"cmSectionMultiplier\"> ".concat(multiplier, "</span>") : '', "</span>");
};
/* harmony default export */ const sectionLabel = (sectionLabel_render);
;// CONCATENATED MODULE: ./src/renderer/components/renderSectionLabel.js


/**
 * @param {SongSectionLabelLine} sectionLabelLine
 * @returns {String} rendered html
 */
function renderSectionLabel_renderSectionLabel(sectionLabelLine) {
  return sectionLabel(sectionLabelLine.model.rendered);
}
;// CONCATENATED MODULE: ./src/renderer/components/tpl/song.js
var song_render = function render(_ref) {
  var song = _ref.song;
  return "<div class=\"cmSong\">".concat(song, "</div>");
};
/* harmony default export */ const song = (song_render);
;// CONCATENATED MODULE: ./src/renderer/helpers/renderAllSectionLabels.js


// reminder: update converters whenever a new shortcut is added here!
var labelsMapping = {
  a: 'adlib',
  b: 'bridge',
  c: 'chorus',
  i: 'intro',
  o: 'outro',
  p: 'pre-chorus',
  s: 'solo',
  u: 'interlude',
  v: 'verse'
};
function renderAllSectionsLabels(allLines, _ref) {
  var expandSectionMultiply = _ref.expandSectionMultiply;
  var sectionsStats = getSectionsStats(allLines);
  allLines.forEach(function (/** SongSectionLabelLine */line) {
    if (line.type === parser_lineTypes.SECTION_LABEL) {
      var lineModel = line.model,
        index = line.index,
        indexWithoutMultiply = line.indexWithoutMultiply;
      var labelRaw = labelsMapping[lineModel.label] ? labelsMapping[lineModel.label] : lineModel.label;
      var rendered = labelRaw[0].toUpperCase() + labelRaw.substring(1);
      var multiplier;
      if (sectionsStats[lineModel.label] > 1) {
        rendered += ' ';
        rendered += expandSectionMultiply ? index : indexWithoutMultiply;
      }
      if (!expandSectionMultiply && lineModel.multiplyTimes) {
        multiplier = 'x' + lineModel.multiplyTimes;
      }
      line.model.rendered = {
        label: rendered,
        multiplier: multiplier
      };
    }
  });
  return allLines;
}

/**
 * Returns the number of usage of each section label
 *
 * @param {SongSectionLabelLine[]} allLines
 * @returns {Object} key = label, value = number of usage
 */
function getSectionsStats(allLines) {
  var stats = {};
  allLines.filter(function (line) {
    return line.type === parser_lineTypes.SECTION_LABEL;
  }).forEach(function (line) {
    if (!stats[line.model.label]) {
      stats[line.model.label] = 1;
    } else {
      stats[line.model.label]++;
    }
  });
  return stats;
}
;// CONCATENATED MODULE: ./src/renderer/helpers/getChordSymbol.js



var defaultRenderChord = renderer_chordRendererFactory();

/**
 * @param {Chord|String} lineModel
 * @param {Function} renderChord
 * @returns {string}
 */
/* harmony default export */ function getChordSymbol(lineModel) {
  var renderChord = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRenderChord;
  switch (lineModel) {
    case syntax.noChord:
      return symbols.noChordSymbol;
    case symbols.barRepeat:
      return symbols.barRepeat;
    default:
      return renderChord(lineModel);
  }
}
;// CONCATENATED MODULE: ./src/renderer/helpers/renderAllChords.js





// eslint-disable-next-line max-lines-per-function
function renderAllChords(allLines, detectedKey, _ref) {
  var transposeValue = _ref.transposeValue,
    accidentalsType = _ref.accidentalsType,
    chordSymbolRenderer = _ref.chordSymbolRenderer,
    simplifyChords = _ref.simplifyChords,
    useShortNamings = _ref.useShortNamings;
  var currentKey;
  var baseKey;
  if (detectedKey) {
    currentKey = transposeKey(detectedKey, transposeValue, accidentalsType);
  }
  var renderChord = getChordSymbolRenderer();
  function renderChords(line) {
    if (line.type === parser_lineTypes.KEY_DECLARATION) {
      currentKey = transposeKey(line.model, transposeValue, accidentalsType);
      line.symbol = currentKey.string;
      if (!baseKey) {
        baseKey = currentKey;
      }
    } else if (line.type === parser_lineTypes.CHORD) {
      var transposeOffSet = 0;
      if (shouldTransposeRepeatedChords(line)) {
        transposeOffSet = getSemitonesBetweenKeys(baseKey && baseKey.string, currentKey && currentKey.string);
      }
      renderChord = getChordSymbolRenderer(transposeOffSet);
      line.model.allBars.forEach(function (bar) {
        bar.allChords.forEach(function (chord) {
          chord.symbol = getChordSymbol(chord.model, renderChord);
        });
      });
    }
    return line;
  }
  function shouldTransposeRepeatedChords(line) {
    var currentKeyEqualsOriginalKey = currentKey && line.model.originalKey && line.model.originalKey.string === currentKey.string;
    return (line.isFromAutoRepeatChords || line.isFromSectionCopy || line.isFromChordLineRepeater) && !currentKeyEqualsOriginalKey;
  }
  function getChordSymbolRenderer(transposeOffSet) {
    if (typeof chordSymbolRenderer === 'function') {
      return chordSymbolRenderer;
    }
    var accidental = accidentalsType === 'auto' ? currentKey ? currentKey.accidental : 'sharp' : accidentalsType;
    return renderer_chordRendererFactory({
      simplify: simplifyChords,
      useShortNamings: useShortNamings,
      transposeValue: transposeValue + transposeOffSet,
      accidental: accidental
    });
  }
  return allLines.map(renderChords);
}
;// CONCATENATED MODULE: ./src/renderer/replaceRepeatedBars.js


var replaceRepeatedBars = function replaceRepeatedBars(line, _ref) {
  var alignChordsWithLyrics = _ref.alignChordsWithLyrics;
  if (line.type === parser_lineTypes.CHORD) {
    line.model.allBars.forEach(function (bar) {
      if (shouldReplaceWithBarRepeat(line, bar, alignChordsWithLyrics)) {
        bar.allChords = [{
          string: symbols.barRepeat,
          model: symbols.barRepeat,
          symbol: symbols.barRepeat,
          duration: bar.timeSignature.beatCount,
          beat: 1
        }];
        bar.shouldPrintChordsDuration = false;
      }
    });
  }
  return line;
};
var shouldReplaceWithBarRepeat = function shouldReplaceWithBarRepeat(line, bar, alignChordsWithLyrics) {
  return bar.isRepeated && !barHasMultiplePositionedChords(line, bar, alignChordsWithLyrics);
};
var barHasMultiplePositionedChords = function barHasMultiplePositionedChords(line, bar, alignChordsWithLyrics) {
  return alignChordsWithLyrics && line.model.hasPositionedChords && bar.allChords.length > 1 && bar.allChords.some(function (chord) {
    return chord.isPositioned;
  });
};
/* harmony default export */ const renderer_replaceRepeatedBars = (replaceRepeatedBars);
;// CONCATENATED MODULE: ./src/renderer/components/renderSong.js



















/**
 * @param {Song} parsedSong
 * @param {Object} options
 * @param {('auto'|'flat'|'sharp')} options.accidentalsType
 * @param {Boolean} options.alignBars
 * @param {Boolean} options.alignChordsWithLyrics
 * @param {Boolean} options.autoRepeatChords
 * @param {('all'|'lyrics'|'chords'|'chordsFirstLyricLine')} options.chartType
 * @param {Function|Boolean} options.chordSymbolRenderer - must be an instance of a ChordSymbol renderer, returned by chordRendererFactory()
 * @param {('chord'|'roman')} options.symbolType
 * @param {Function|Boolean} options.customRenderer
 * @param {Boolean} options.expandSectionCopy
 * @param {Boolean} options.expandSectionMultiply
 * @param {Boolean|('none'|'max'|'core')} options.simplifyChords
 * @param {('never'|'uneven'|'always')} options.printChordsDuration
 * @param {('never'|'grids'|'always')} options.printBarSeparators - mainly useful when converting a ChordMark file to a format that
 * do not allow bar separators to be printed (e.g. Ultimate Guitar)
 * @param {Boolean} options.printSubBeatDelimiters - mainly useful when converting a ChordMark file to a format that
 * do not allow sub-beat groups to be printed (e.g. Ultimate Guitar)
 * @param {Boolean} options.printInlineTimeSignatures - mainly useful when converting a ChordMark file to a format that
 * do not allow inline time signatures to be printed (e.g. Ultimate Guitar)
 * @param {Number} options.transposeValue
 * @param {Boolean} options.useShortNamings
 * @param {Object} [options.windowObject] - A JSDOM window object for using chordmark in NodeJs
 * @param {Boolean} options.wrapChordLyricLines
 * @returns {String} rendered HTML
 */
// eslint-disable-next-line max-lines-per-function,complexity
function renderSong(parsedSong) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$accidentalsType = _ref.accidentalsType,
    accidentalsType = _ref$accidentalsType === void 0 ? 'auto' : _ref$accidentalsType,
    _ref$alignBars = _ref.alignBars,
    alignBars = _ref$alignBars === void 0 ? true : _ref$alignBars,
    _ref$alignChordsWithL = _ref.alignChordsWithLyrics,
    alignChordsWithLyrics = _ref$alignChordsWithL === void 0 ? true : _ref$alignChordsWithL,
    _ref$autoRepeatChords = _ref.autoRepeatChords,
    autoRepeatChords = _ref$autoRepeatChords === void 0 ? true : _ref$autoRepeatChords,
    _ref$chartType = _ref.chartType,
    chartType = _ref$chartType === void 0 ? 'all' : _ref$chartType,
    _ref$chordSymbolRende = _ref.chordSymbolRenderer,
    chordSymbolRenderer = _ref$chordSymbolRende === void 0 ? false : _ref$chordSymbolRende,
    _ref$customRenderer = _ref.customRenderer,
    customRenderer = _ref$customRenderer === void 0 ? false : _ref$customRenderer,
    _ref$expandSectionCop = _ref.expandSectionCopy,
    expandSectionCopy = _ref$expandSectionCop === void 0 ? true : _ref$expandSectionCop,
    _ref$expandSectionMul = _ref.expandSectionMultiply,
    expandSectionMultiply = _ref$expandSectionMul === void 0 ? false : _ref$expandSectionMul,
    _ref$printChordsDurat = _ref.printChordsDuration,
    printChordsDuration = _ref$printChordsDurat === void 0 ? 'uneven' : _ref$printChordsDurat,
    _ref$printBarSeparato = _ref.printBarSeparators,
    printBarSeparators = _ref$printBarSeparato === void 0 ? 'always' : _ref$printBarSeparato,
    _ref$printSubBeatDeli = _ref.printSubBeatDelimiters,
    shouldPrintSubBeatDelimiters = _ref$printSubBeatDeli === void 0 ? true : _ref$printSubBeatDeli,
    _ref$printInlineTimeS = _ref.printInlineTimeSignatures,
    shouldPrintInlineTimeSignatures = _ref$printInlineTimeS === void 0 ? true : _ref$printInlineTimeS,
    _ref$simplifyChords = _ref.simplifyChords,
    simplifyChords = _ref$simplifyChords === void 0 ? 'none' : _ref$simplifyChords,
    _ref$symbolType = _ref.symbolType,
    symbolType = _ref$symbolType === void 0 ? 'chord' : _ref$symbolType,
    _ref$transposeValue = _ref.transposeValue,
    transposeValue = _ref$transposeValue === void 0 ? 0 : _ref$transposeValue,
    _ref$useShortNamings = _ref.useShortNamings,
    useShortNamings = _ref$useShortNamings === void 0 ? true : _ref$useShortNamings,
    _ref$windowObject = _ref.windowObject,
    windowObject = _ref$windowObject === void 0 ? undefined : _ref$windowObject,
    _ref$wrapChordLyricLi = _ref.wrapChordLyricLines,
    wrapChordLyricLines = _ref$wrapChordLyricLi === void 0 ? false : _ref$wrapChordLyricLi;
  var allLines = parsedSong.allLines,
    allKeys = parsedSong.allKeys;
  var isFirstLyricLineOfSection = false;
  var contextTimeSignature = defaultTimeSignature.string;
  var previousBarTimeSignature;
  allLines = renderAllChords(allLines, allKeys.auto, {
    transposeValue: transposeValue,
    accidentalsType: accidentalsType,
    chordSymbolRenderer: chordSymbolRenderer,
    simplifyChords: simplifyChords,
    useShortNamings: useShortNamings
  }).map(addPrintChordsDurationsFlag).map(addPrintBarTimeSignatureFlag).filter(shouldRenderLine).map(function (line) {
    return renderer_replaceRepeatedBars(line, {
      alignChordsWithLyrics: alignChordsWithLyrics
    });
  });
  var maxBeatsWidth = getMaxBeatsWidth(allLines, {
    shouldAlignChordsWithLyrics: shouldAlignChordsWithLyrics,
    shouldPrintSubBeatDelimiters: shouldPrintSubBeatDelimiters,
    symbolType: symbolType
  });
  allLines = renderAllSectionsLabels(allLines, {
    expandSectionMultiply: expandSectionMultiply
  });
  allLines.forEach(spaceChordLine);
  var allRenderedLines = renderAllLines();
  if (customRenderer) {
    return customRenderer(allLines, allRenderedLines, {
      alignChordsWithLyrics: alignChordsWithLyrics,
      alignBars: alignBars
    });
  } else {
    return song({
      song: allRenderedLines.join('')
    });
  }
  function getSectionWrapperClasses(line) {
    return ['cmSection', 'cmSection-' + line.model.rendered.label.replace(/[\d\s]/gi, '')];
  }
  function addPrintChordsDurationsFlag(line) {
    if (line.type === parser_lineTypes.CHORD) {
      line.model.allBars.forEach(function (bar) {
        bar.shouldPrintChordsDuration = shouldPrintChordsDuration(bar);
      });
    }
    return line;
  }
  function addPrintBarTimeSignatureFlag(line) {
    if (line.type === parser_lineTypes.TIME_SIGNATURE) {
      contextTimeSignature = line.string;
    } else if (line.type === parser_lineTypes.CHORD) {
      line.model.allBars.forEach(function (bar, barIndex) {
        bar.shouldPrintBarTimeSignature = barIndex === 0 && bar.timeSignature.string !== contextTimeSignature || barIndex > 0 && bar.timeSignature.string !== previousBarTimeSignature;
        previousBarTimeSignature = bar.timeSignature.string;
      });
    }
    return line;
  }
  function shouldPrintChordsDuration(bar) {
    return bar.allChords.length > 1 && (printChordsDuration === 'uneven' && bar.hasUnevenChordsDurations || printChordsDuration === 'always');
  }
  function shouldRenderLine(line) {
    return shouldRepeatLines(line) && !isFiltered(line);
  }
  function shouldRepeatLines(line) {
    var shouldSkipAutoRepeatChordLine = !autoRepeatChords && (line.isFromAutoRepeatChords || line.type === parser_lineTypes.CHORD && line.isFromSectionCopy);
    var shouldSkipSectionMultiplyLine = line.isFromSectionMultiply && !expandSectionMultiply;
    var shouldSkipSectionCopyLine = line.type !== parser_lineTypes.SECTION_LABEL && line.isFromSectionCopy && !expandSectionCopy;
    return !shouldSkipSectionMultiplyLine && !shouldSkipAutoRepeatChordLine && !shouldSkipSectionCopyLine;
  }
  function isLastLine(i) {
    return allLines.length - 1 === i;
  }
  function isFiltered(line) {
    if (chartType === 'chordsFirstLyricLine') {
      if (line.type === parser_lineTypes.SECTION_LABEL) {
        isFirstLyricLineOfSection = true;
        return false;
      }
      if (isFirstLyricLineOfSection && line.type === parser_lineTypes.LYRIC) {
        isFirstLyricLineOfSection = false;
        return false;
      }
    }
    return ['chords', 'chordsFirstLyricLine'].includes(chartType) && line.type === parser_lineTypes.LYRIC || chartType === 'lyrics' && line.type === parser_lineTypes.CHORD;
  }
  function spaceChordLine(line, lineIndex) {
    if (line.type === parser_lineTypes.CHORD) {
      var spaced = alignBars && !shouldAlignChordsWithLyrics(line) ? aligned_space(line.model, maxBeatsWidth, {
        shouldPrintBarSeparators: shouldPrintBarSeparators(line.model),
        shouldPrintSubBeatDelimiters: shouldPrintSubBeatDelimiters,
        symbolType: symbolType
      }) : space(line.model);
      var nextLine = allLines[lineIndex + 1];
      if (shouldAlignChordsWithLyrics(line)) {
        var _chordLyricsSpacer = chordLyrics_space(spaced, nextLine.model, {
            shouldPrintBarSeparators: shouldPrintBarSeparators(line.model),
            shouldPrintSubBeatDelimiters: shouldPrintSubBeatDelimiters,
            shouldPrintInlineTimeSignatures: shouldPrintInlineTimeSignatures,
            symbolType: symbolType
          }),
          chordLine = _chordLyricsSpacer.chordLine,
          lyricsLine = _chordLyricsSpacer.lyricsLine;
        allLines[lineIndex + 1].model = lyricsLine;
        spaced = chordLine;
      }
      allLines[lineIndex].model = spaced;
    }
  }

  // eslint-disable-next-line max-lines-per-function
  function renderAllLines() {
    var lineIsInASection = false;
    var chordLineToMerge;
    return allLines
    // eslint-disable-next-line max-lines-per-function
    .map(function (line, i) {
      var rendered;
      var shouldOpenSection = false;
      var sectionWrapperClasses = [];
      var shouldClosePriorSection;
      if (line.type === parser_lineTypes.CHORD) {
        rendered = renderChordLine(line.model, {
          symbolType: symbolType,
          shouldPrintBarSeparators: shouldPrintBarSeparators(line.model),
          shouldPrintSubBeatDelimiters: shouldPrintSubBeatDelimiters,
          shouldPrintInlineTimeSignatures: shouldPrintInlineTimeSignatures
        });
        if (shouldMergeChordLine(line, allLines[i + 1])) {
          chordLineToMerge = rendered;
          rendered = false;
        }
      } else if (line.type === parser_lineTypes.EMPTY_LINE) {
        rendered = renderEmptyLine_render();
      } else if (line.type === parser_lineTypes.SECTION_LABEL) {
        shouldOpenSection = true;
        shouldClosePriorSection = lineIsInASection;
        lineIsInASection = true;
        sectionWrapperClasses = getSectionWrapperClasses(line);
        rendered = renderSectionLabel_renderSectionLabel(line);
      } else if (line.type === parser_lineTypes.TIME_SIGNATURE) {
        rendered = renderTimeSignature_render(line);
      } else if (line.type === parser_lineTypes.KEY_DECLARATION) {
        rendered = renderSectionLabel(line);
      } else {
        rendered = renderLyricLine_render(line, {
          alignChordsWithLyrics: alignChordsWithLyrics,
          chartType: chartType
        });
        if (chordLineToMerge) {
          rendered = renderChordLyricLine(chordLineToMerge, rendered, windowObject);
          chordLineToMerge = '';
        }
      }
      return rendered && renderLine_render(rendered, {
        isFromSectionMultiply: line.isFromSectionMultiply,
        isFromAutoRepeatChords: line.isFromAutoRepeatChords,
        isFromChordLineRepeater: line.isFromChordLineRepeater,
        isFromSectionCopy: line.isFromSectionCopy,
        shouldOpenSection: shouldOpenSection,
        shouldClosePriorSection: shouldClosePriorSection,
        shouldCloseFinalSection: isLastLine(i) && lineIsInASection,
        sectionWrapperClasses: sectionWrapperClasses
      });
    }).filter(Boolean);
  }
  function shouldAlignChordsWithLyrics(line) {
    return chartType === 'all' && alignChordsWithLyrics && line.model.hasPositionedChords;
  }
  function shouldMergeChordLine(line, nextLine) {
    return nextLine && nextLine.type === parser_lineTypes.LYRIC && wrapChordLyricLines && shouldAlignChordsWithLyrics(line);
  }

  /**
   * @param {ChordLine} line
   * @returns {boolean}
   */
  function shouldPrintBarSeparators(line) {
    return printBarSeparators === 'always' || printBarSeparators === 'grids' && !line.hasPositionedChords;
  }
}
;// CONCATENATED MODULE: ./src/chordMark.js




})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=chord-mark.js.map