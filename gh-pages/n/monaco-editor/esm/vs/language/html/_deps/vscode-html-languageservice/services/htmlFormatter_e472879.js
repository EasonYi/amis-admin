define("a3a46f9",function(e,t){"use strict";function n(e,t,n){var c=e.getText(),p=!0,v=0,_=n.tabSize||4;if(t){for(var h=e.offsetAt(t.start),g=h;g>0&&f(c,g-1);)g--;0===g||o(c,g-1)?h=g:h>g&&(h=g+1);for(var w=e.offsetAt(t.end),b=w;b<c.length&&f(c,b);)b++;(b===c.length||o(c,b))&&(w=b),t=u.Range.create(e.positionAt(h),e.positionAt(w));var m=c.substring(0,h);if(new RegExp(/.*[<][^>]*$/).test(m))return c=c.substring(h,w),[{range:t,newText:c}];if(p=w===c.length,c=c.substring(h,w),0!==h){var x=e.offsetAt(u.Position.create(t.start.line,0));v=s(e.getText(),x,n)}}else t=u.Range.create(u.Position.create(0,0),e.positionAt(c.length));var A={indent_size:_,indent_char:n.insertSpaces?" ":"	",wrap_line_length:i(n,"wrapLineLength",120),unformatted:a(n,"unformatted",void 0),content_unformatted:a(n,"contentUnformatted",void 0),indent_inner_html:i(n,"indentInnerHtml",!1),preserve_newlines:i(n,"preserveNewLines",!0),max_preserve_newlines:i(n,"maxPreserveNewLines",32786),indent_handlebars:i(n,"indentHandlebars",!1),end_with_newline:p&&i(n,"endWithNewline",!1),extra_liners:a(n,"extraLiners",void 0),wrap_attributes:i(n,"wrapAttributes","auto"),wrap_attributes_indent_size:i(n,"wrapAttributesIndentSize",void 0),eol:"\n"},L=l.html_beautify(r(c),A);if(v>0){var z=n.insertSpaces?d.repeat(" ",_*v):d.repeat("	",v);L=L.split("\n").join("\n"+z),0===t.start.character&&(L=z+L)}return[{range:t,newText:L}]}function r(e){return e.replace(/^\s+/,"")}function i(e,t,n){if(e&&e.hasOwnProperty(t)){var r=e[t];if(null!==r)return r}return n}function a(e,t,n){var r=i(e,t,null);return"string"==typeof r?r.length>0?r.split(",").map(function(e){return e.trim().toLowerCase()}):[]:n}function s(e,t,n){for(var r=t,i=0,a=n.tabSize||4;r<e.length;){var s=e.charAt(r);if(" "===s)i++;else{if("	"!==s)break;i+=a}r++}return Math.floor(i/a)}function o(e,t){return-1!=="\r\n".indexOf(e.charAt(t))}function f(e,t){return-1!==" 	".indexOf(e.charAt(t))}Object.defineProperty(t,"__esModule",{value:!0});var u=e("b1903ef"),l=e("87895d2"),d=e("99cd338");t.format=n});