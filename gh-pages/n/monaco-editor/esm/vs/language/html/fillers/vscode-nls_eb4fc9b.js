define("e351cc2",function(e,n){"use strict";function r(e,n){var r;return r=0===n.length?e:e.replace(/\{(\d+)\}/g,function(e,r){var t=r[0];return"undefined"!=typeof n[t]?n[t]:e})}function t(e,n){for(var t=[],u=2;u<arguments.length;u++)t[u-2]=arguments[u];return r(n,t)}function u(){return t}function c(){return u}Object.defineProperty(n,"__esModule",{value:!0}),n.loadMessageBundle=u,n.config=c});