"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/nextjs-toploader";
exports.ids = ["vendor-chunks/nextjs-toploader"];
exports.modules = {

/***/ "(ssr)/./node_modules/nextjs-toploader/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/nextjs-toploader/dist/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* __next_internal_client_entry_do_not_use__  cjs */ \nvar I = Object.create;\nvar y = Object.defineProperty;\nvar J = Object.getOwnPropertyDescriptor;\nvar X = Object.getOwnPropertyNames;\nvar _ = Object.getPrototypeOf, D = Object.prototype.hasOwnProperty;\nvar a = (r, o)=>y(r, \"name\", {\n        value: o,\n        configurable: !0\n    });\nvar G = (r, o)=>{\n    for(var i in o)y(r, i, {\n        get: o[i],\n        enumerable: !0\n    });\n}, A = (r, o, i, g)=>{\n    if (o && typeof o == \"object\" || typeof o == \"function\") for (let l of X(o))!D.call(r, l) && l !== i && y(r, l, {\n        get: ()=>o[l],\n        enumerable: !(g = J(o, l)) || g.enumerable\n    });\n    return r;\n};\nvar N = (r, o, i)=>(i = r != null ? I(_(r)) : {}, A(o || !r || !r.__esModule ? y(i, \"default\", {\n        value: r,\n        enumerable: !0\n    }) : i, r)), Q = (r)=>A(y({}, \"__esModule\", {\n        value: !0\n    }), r);\nvar Y = {};\nG(Y, {\n    default: ()=>V\n});\nmodule.exports = Q(Y);\nvar t = N(__webpack_require__(/*! prop-types */ \"(ssr)/./node_modules/prop-types/index.js\")), v = N(__webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\")), s = N(__webpack_require__(/*! nprogress */ \"(ssr)/./node_modules/nprogress/nprogress.js\"));\nvar M = a(({ color: r, height: o, showSpinner: i, crawl: g, crawlSpeed: l, initialPosition: L, easing: T, speed: E, shadow: x, template: k, zIndex: S = 1600, showAtBottom: H = !1 })=>{\n    let O = \"#29d\", m = r != null ? r : O, z = o != null ? o : 3, C = !x && x !== void 0 ? \"\" : x ? `box-shadow:${x}` : `box-shadow:0 0 10px ${m},0 0 5px ${m}`, K = v.createElement(\"style\", null, `#nprogress{pointer-events:none}#nprogress .bar{background:${m};position:fixed;z-index:${S};${H ? \"bottom: 0;\" : \"top: 0;\"}left:0;width:100%;height:${z}px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;${C};opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:${S};${H ? \"bottom: 15px;\" : \"top: 15px;\"}right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:2px solid transparent;border-top-color:${m};border-left-color:${m};border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`), u = a((h)=>new URL(h, window.location.href).href, \"toAbsoluteURL\"), W = a((h, f)=>{\n        let c = new URL(u(h)), b = new URL(u(f));\n        return c.href.split(\"#\")[0] === b.href.split(\"#\")[0];\n    }, \"isHashAnchor\"), j = a((h, f)=>{\n        let c = new URL(u(h)), b = new URL(u(f));\n        return c.hostname.replace(/^www\\./, \"\") === b.hostname.replace(/^www\\./, \"\");\n    }, \"isSameHostName\");\n    return v.useEffect(()=>{\n        s.configure({\n            showSpinner: i != null ? i : !0,\n            trickle: g != null ? g : !0,\n            trickleSpeed: l != null ? l : 200,\n            minimum: L != null ? L : .08,\n            easing: T != null ? T : \"ease\",\n            speed: E != null ? E : 200,\n            template: k != null ? k : '<div class=\"bar\" role=\"bar\"><div class=\"peg\"></div></div><div class=\"spinner\" role=\"spinner\"><div class=\"spinner-icon\"></div></div>'\n        });\n        function h(e, d) {\n            let n = new URL(e), p = new URL(d);\n            if (n.hostname === p.hostname && n.pathname === p.pathname && n.search === p.search) {\n                let w = n.hash, P = p.hash;\n                return w !== P && n.href.replace(w, \"\") === p.href.replace(P, \"\");\n            }\n            return !1;\n        }\n        a(h, \"isAnchorOfCurrentUrl\");\n        var f = document.querySelectorAll(\"html\");\n        let c = a(()=>f.forEach((e)=>e.classList.remove(\"nprogress-busy\")), \"removeNProgressClass\");\n        function b(e) {\n            for(; e && e.tagName.toLowerCase() !== \"a\";)e = e.parentElement;\n            return e;\n        }\n        a(b, \"findClosestAnchor\");\n        function U(e) {\n            try {\n                let d = e.target, n = b(d), p = n == null ? void 0 : n.href;\n                if (p) {\n                    let w = window.location.href, P = n.target === \"_blank\", B = [\n                        \"tel:\",\n                        \"mailto:\",\n                        \"sms:\",\n                        \"blob:\",\n                        \"download:\"\n                    ].some((F)=>p.startsWith(F)), q = h(w, p);\n                    if (!j(window.location.href, n.href)) return;\n                    p === w || q || P || B || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || W(window.location.href, n.href) || !u(n.href).startsWith(\"http\") ? (s.start(), s.done(), c()) : s.start();\n                }\n            } catch (d) {\n                s.start(), s.done();\n            }\n        }\n        a(U, \"handleClick\"), ((e)=>{\n            let d = e.pushState;\n            e.pushState = (...n)=>(s.done(), c(), d.apply(e, n));\n        })(window.history), ((e)=>{\n            let d = e.replaceState;\n            e.replaceState = (...n)=>(s.done(), c(), d.apply(e, n));\n        })(window.history);\n        function R() {\n            s.done(), c();\n        }\n        a(R, \"handlePageHide\");\n        function $() {\n            s.done();\n        }\n        return a($, \"handleBackAndForth\"), window.addEventListener(\"popstate\", $), document.addEventListener(\"click\", U), window.addEventListener(\"pagehide\", R), ()=>{\n            document.removeEventListener(\"click\", U), window.removeEventListener(\"pagehide\", R), window.removeEventListener(\"popstate\", $);\n        };\n    }, []), K;\n}, \"NextTopLoader\"), V = M;\nM.propTypes = {\n    color: t.string,\n    height: t.number,\n    showSpinner: t.bool,\n    crawl: t.bool,\n    crawlSpeed: t.number,\n    initialPosition: t.number,\n    easing: t.string,\n    speed: t.number,\n    template: t.string,\n    shadow: t.oneOfType([\n        t.string,\n        t.bool\n    ]),\n    zIndex: t.number,\n    showAtBottom: t.bool\n}; //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmV4dGpzLXRvcGxvYWRlci9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBQUFBLENBQUE7SUFBQSxJQUFBQztBQUFBLElBQUFDLElBQUE7QUFBQUMsRUFBQUQsR0FBQUU7SUFBQUEsU0FBQSxJQUFBQztBQUFBO0FBQUFDLE9BT0FDLE9BQTJCLEdBQUFDLEVBQUFOO0FBQUEsSUFBQU8sSUFBQUMsRUFBQUMsbUJBQUFBLENBQUEsZ0VBQ0pDLElBQUFGLEVBQUFDLG1CQUFBQSxDQUNJLDRHQUFBRSxJQUFBSCxFQUFBQyxtQkFBQUEsQ0FBQTtBQWlGekIsSUFBT0csSUFDUEMsRUFBQSxHQUFBQyxPQUNBQyxDQUFBLEVBQUFDLFFBQUFDLENBQUFDLEVBQUFBLGFBRUFDLENBQUEsRUFBQUMsT0FBQUMsQ0FBQUEsRUFDQUEsWUFBQUMsQ0FBQSxFQUFBQyxpQkFFQUMsQ0FBQSxFQUFBQyxRQUNBQyxDQUFBLEVBQUFDLE9BQ0FDLENBQUEsRUFBQUMsUUFDQUMsQ0FBQSxFQUFBQyxVQUFTQyxDQUFBLEVBQUFDLFFBQ1RDLElBQUEsTUFBQUMsY0FFTUMsSUFBZTtJQUdmdEIsSUFBUUYsSUFBQSxRQUFhd0IsSUFDckJwQixLQUFTcUIsT0FBQXRCLElBQUFzQixHQUFjQyxJQUd2QkMsS0FDSFYsT0FBVUEsSUFBVyxHQUFBVyxJQUFBLENBQUFWLEtBQ2xCQSxNQUVFLGNBQUFBLElBQUEsQ0FBY0QsV0FDZCxFQUFBQyxFQUFBLHlCQUF1QmhCLEVBQWlCQSxFQUFBQSxTQVU5QyxFQUFBMkIsRUFBQSxHQUFBQyxJQUFBaEMsRUFBQWlDLGFBQUMsQ0FDRSwwRUFBNkQ3QixFQUFBQSxFQUFBQSx3QkFSN0IsRUFBQW9CLEVBQUEsR0FBQVUsSUFBZSxrREFRaUc1QixFQUFBQSxFQUFBQSxtRkFBNEZ1QixFQUFBQSxFQUFBQSxpTkFQck0sRUFBQUwsRUFBQSxHQUFBVSxJQUFBLGtCQUFrQiw0SUFPZ2pC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QUEyRSxnQkFBK0MsYUFDN0NGLElBQUF4QyxTQUFBMEMsZ0JBQ1QsVUFBT1QsSUFBQWxFLE9BQUEyRSxnQkFBMkMsYUFJaERILElBQUE7WUFBU3ZDLFNBQUEyQyxtQkFDVCxVQUFPVixJQUFBbEUsT0FBQTRFLG1CQUE4QyxhQUM5Q0osSUFBQXhFLE9BQUE0RSxtQkFBa0QsQ0FDM0QsWUF6T2tCSDtRQUFBO0lBQUEsUUFBQWhGO0FBQUEscUJBZ1BSdkMsSUFBQTJIO0FBQ1pBLEVBQUFDLFNBQWlCO0lBQUFqSCxPQUNqQlAsRUFBQXlILE1BQWtCO0lBQUFoSCxRQUNsQlQsRUFBQTBILE1BQXVCO0lBQUEvRyxhQUNOWCxFQUFBMkgsSUFBQTtJQUNqQjlHLE9BQUFiLEVBQUEySCxJQUFzQjtJQUFBN0csWUFDdEJkLEVBQUEwSCxNQUFBO0lBQUExRyxpQkFDQWhCLEVBQUEwSCxNQUFrQjtJQUFBeEcsUUFDbEJsQixFQUFpQnlILE1BQUE7SUFBQXJHLE9BQ2pCcEIsRUFBQTBILE1BQW9CO0lBQUFsRyxVQUNwQnhCLEVBQUF5SCxNQUFrQjtJQUFBbkcsUUFBcUJ0QixFQUFBNEgsU0FBa0I7UUFBQTVILEVBQUl5SCxNQUM3RDtRQUFBekgsRUFBQTJILElBQWtCO0tBQUE7SUFBQWpHLFFBQ2xCMUIsRUFBQTBILE1BQUE7SUFBd0I5RixjQUMxQjVCLEVBQUEySCxJQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLy4uL3NyYy9pbmRleC50c3g/ZDBlMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkZW5vLXRzLWlnbm9yZS1maWxlXG4vLyBkZW5vLWxpbnQtaWdub3JlLWZpbGVcbi8qIGVzbGludC1kaXNhYmxlIG5vLXZhciAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWNvbnN0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBxdW90ZXMgKi9cblxuaW1wb3J0ICogYXMgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XG4vLyBAZGVuby10eXBlcyA9XCJucG06cHJlYWN0QDEwLjE5LjZcIlxuXG4vLyBAZGVuby10eXBlcyA9XCJucG06bnByb2dyZXNzQDAuMi4yXCJcblxuLy8gQGRlbm8tdHlwZXMgPVwibnBtOkB0eXBlcy9yZWFjdEAxOC4yLjY2XCJcblxuZXhwb3J0IHR5cGUgTmV4dFRvcExvYWRlclByb3BzID0ge1xuICAvKipcbiAgICogQ29sb3IgZm9yIHRoZSBUb3BMb2FkZXIuXG4gICAqIEBkZWZhdWx0IFwiIzI5ZFwiXG4gICAqL1xuICBjb2xvcj86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBpbml0aWFsIHBvc2l0aW9uIGZvciB0aGUgVG9wTG9hZGVyIGluIHBlcmNlbnRhZ2UsIDAuMDggaXMgOCUuXG4gICAqIEBkZWZhdWx0IDAuMDhcbiAgICovXG4gIGluaXRpYWxQb3NpdGlvbj86IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBpbmNyZWFtZW50IGRlbGF5IHNwZWVkIGluIG1pbGxpc2Vjb25kcy5cbiAgICogQGRlZmF1bHQgMjAwXG4gICAqL1xuICBjcmF3bFNwZWVkPzogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIGhlaWdodCBmb3IgdGhlIFRvcExvYWRlciBpbiBwaXhlbHMgKHB4KS5cbiAgICogQGRlZmF1bHQgM1xuICAgKi9cbiAgaGVpZ2h0PzogbnVtYmVyO1xuICAvKipcbiAgICogQXV0byBpbmNyZWFtZW50aW5nIGJlaGF2aW91ciBmb3IgdGhlIFRvcExvYWRlci5cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgY3Jhd2w/OiBib29sZWFuO1xuICAvKipcbiAgICogVG8gc2hvdyBzcGlubmVyIG9yIG5vdC5cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgc2hvd1NwaW5uZXI/OiBib29sZWFuO1xuICAvKipcbiAgICogQW5pbWF0aW9uIHNldHRpbmdzIHVzaW5nIGVhc2luZyAoYSBDU1MgZWFzaW5nIHN0cmluZykuXG4gICAqIEBkZWZhdWx0IFwiZWFzZVwiXG4gICAqL1xuICBlYXNpbmc/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBbmltYXRpb24gc3BlZWQgaW4gbXMgZm9yIHRoZSBUb3BMb2FkZXIuXG4gICAqIEBkZWZhdWx0IDIwMFxuICAgKi9cbiAgc3BlZWQ/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBEZWZpbmVzIGEgc2hhZG93IGZvciB0aGUgVG9wTG9hZGVyLlxuICAgKiBAZGVmYXVsdCBcIjAgMCAxMHB4ICR7Y29sb3J9LDAgMCA1cHggJHtjb2xvcn1cIlxuICAgKlxuICAgKiBAIHlvdSBjYW4gZGlzYWJsZSBpdCBieSBzZXR0aW5nIGl0IHRvIGBmYWxzZWBcbiAgICovXG4gIHNoYWRvdz86IHN0cmluZyB8IGZhbHNlO1xuICAvKipcbiAgICogRGVmaW5lcyBhIHRlbXBsYXRlIGZvciB0aGUgVG9wTG9hZGVyLlxuICAgKiBAZGVmYXVsdCBcIjxkaXYgY2xhc3M9XCJiYXJcIiByb2xlPVwiYmFyXCI+PGRpdiBjbGFzcz1cInBlZ1wiPjwvZGl2PjwvZGl2PlxuICAgKiA8ZGl2IGNsYXNzPVwic3Bpbm5lclwiIHJvbGU9XCJzcGlubmVyXCI+PGRpdiBjbGFzcz1cInNwaW5uZXItaWNvblwiPjwvZGl2PjwvZGl2PlwiXG4gICAqL1xuICB0ZW1wbGF0ZT86IHN0cmluZztcbiAgLyoqXG4gICAqIERlZmluZXMgekluZGV4IGZvciB0aGUgVG9wTG9hZGVyLlxuICAgKiBAZGVmYXVsdCAxNjAwXG4gICAqXG4gICAqL1xuICB6SW5kZXg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBUbyBzaG93IHRoZSBUb3BMb2FkZXIgYXQgYm90dG9tLlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKlxuICAgKi9cbiAgc2hvd0F0Qm90dG9tPzogYm9vbGVhbjtcbn07XG5cbi8qKlxuICpcbiAqIE5leHRUb3BMb2FkZXJcbiAqXG4gKi9cbmNvbnN0IE5leHRUb3BMb2FkZXIgPSAoe1xuICBjb2xvcjogcHJvcENvbG9yLFxuICBoZWlnaHQ6IHByb3BIZWlnaHQsXG4gIHNob3dTcGlubmVyLFxuICBjcmF3bCxcbiAgY3Jhd2xTcGVlZCxcbiAgaW5pdGlhbFBvc2l0aW9uLFxuICBlYXNpbmcsXG4gIHNwZWVkLFxuICBzaGFkb3csXG4gIHRlbXBsYXRlLFxuICB6SW5kZXggPSAxNjAwLFxuICBzaG93QXRCb3R0b20gPSBmYWxzZSxcbn06IE5leHRUb3BMb2FkZXJQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3QgZGVmYXVsdENvbG9yID0gJyMyOWQnO1xuICBjb25zdCBkZWZhdWx0SGVpZ2h0ID0gMztcblxuICBjb25zdCBjb2xvciA9IHByb3BDb2xvciA/PyBkZWZhdWx0Q29sb3I7XG4gIGNvbnN0IGhlaWdodCA9IHByb3BIZWlnaHQgPz8gZGVmYXVsdEhlaWdodDtcblxuICAvLyBBbnkgZmFsc3kgKGV4Y2VwdCB1bmRlZmluZWQpIHdpbGwgZGlzYWJsZSB0aGUgc2hhZG93XG4gIGNvbnN0IGJveFNoYWRvdyA9XG4gICAgIXNoYWRvdyAmJiBzaGFkb3cgIT09IHVuZGVmaW5lZFxuICAgICAgPyAnJ1xuICAgICAgOiBzaGFkb3dcbiAgICAgICAgPyBgYm94LXNoYWRvdzoke3NoYWRvd31gXG4gICAgICAgIDogYGJveC1zaGFkb3c6MCAwIDEwcHggJHtjb2xvcn0sMCAwIDVweCAke2NvbG9yfWA7XG5cbiAgLy8gQ2hlY2sgaWYgdG8gc2hvdyBhdCBib3R0b21cbiAgY29uc3QgcG9zaXRpb25TdHlsZSA9IHNob3dBdEJvdHRvbSA/ICdib3R0b206IDA7JyA6ICd0b3A6IDA7JztcbiAgY29uc3Qgc3Bpbm5lclBvc2l0aW9uU3R5bGUgPSBzaG93QXRCb3R0b20gPyAnYm90dG9tOiAxNXB4OycgOiAndG9wOiAxNXB4Oyc7XG5cbiAgLyoqXG4gICAqIENTUyBTdHlsZXMgZm9yIHRoZSBOZXh0VG9wTG9hZGVyXG4gICAqL1xuICBjb25zdCBzdHlsZXMgPSAoXG4gICAgPHN0eWxlPlxuICAgICAge2AjbnByb2dyZXNze3BvaW50ZXItZXZlbnRzOm5vbmV9I25wcm9ncmVzcyAuYmFye2JhY2tncm91bmQ6JHtjb2xvcn07cG9zaXRpb246Zml4ZWQ7ei1pbmRleDoke3pJbmRleH07JHtwb3NpdGlvblN0eWxlfWxlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoke2hlaWdodH1weH0jbnByb2dyZXNzIC5wZWd7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3dpZHRoOjEwMHB4O2hlaWdodDoxMDAlOyR7Ym94U2hhZG93fTtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsLTRweCk7LW1zLXRyYW5zZm9ybTpyb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwtNHB4KTt0cmFuc2Zvcm06cm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsLTRweCl9I25wcm9ncmVzcyAuc3Bpbm5lcntkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6JHt6SW5kZXh9OyR7c3Bpbm5lclBvc2l0aW9uU3R5bGV9cmlnaHQ6MTVweH0jbnByb2dyZXNzIC5zcGlubmVyLWljb257d2lkdGg6MThweDtoZWlnaHQ6MThweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym9yZGVyOjJweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItdG9wLWNvbG9yOiR7Y29sb3J9O2JvcmRlci1sZWZ0LWNvbG9yOiR7Y29sb3J9O2JvcmRlci1yYWRpdXM6NTAlOy13ZWJraXQtYW5pbWF0aW9uOm5wcm9ncmVzcy1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTthbmltYXRpb246bnByb2dyZXNzLXNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlfS5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudHtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246cmVsYXRpdmV9Lm5wcm9ncmVzcy1jdXN0b20tcGFyZW50ICNucHJvZ3Jlc3MgLmJhciwubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQgI25wcm9ncmVzcyAuc3Bpbm5lcntwb3NpdGlvbjphYnNvbHV0ZX1ALXdlYmtpdC1rZXlmcmFtZXMgbnByb2dyZXNzLXNwaW5uZXJ7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDBkZWcpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgbnByb2dyZXNzLXNwaW5uZXJ7MCV7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX0xMDAle3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19YH1cbiAgICA8L3N0eWxlPlxuICApO1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHRoZSB1cmwgdG8gQWJzb2x1dGUgVVJMIGJhc2VkIG9uIHRoZSBjdXJyZW50IHdpbmRvdyBsb2NhdGlvbi5cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgY29uc3QgdG9BYnNvbHV0ZVVSTCA9ICh1cmw6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIG5ldyBVUkwodXJsLCB3aW5kb3cubG9jYXRpb24uaHJlZikuaHJlZjtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgaXQgaXMgaGFzaCBhbmNob3Igb3Igc2FtZSBwYWdlIGFuY2hvclxuICAgKiBAcGFyYW0gY3VycmVudFVybCB7c3RyaW5nfSBDdXJyZW50IFVybCBMb2NhdGlvblxuICAgKiBAcGFyYW0gbmV3VXJsIHtzdHJpbmd9IE5ldyBVcmwgZGV0ZWN0ZWQgd2l0aCBlYWNoIGFuY2hvclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbnN0IGlzSGFzaEFuY2hvciA9IChjdXJyZW50VXJsOiBzdHJpbmcsIG5ld1VybDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgY3VycmVudCA9IG5ldyBVUkwodG9BYnNvbHV0ZVVSTChjdXJyZW50VXJsKSk7XG4gICAgY29uc3QgbmV4dCA9IG5ldyBVUkwodG9BYnNvbHV0ZVVSTChuZXdVcmwpKTtcbiAgICByZXR1cm4gY3VycmVudC5ocmVmLnNwbGl0KCcjJylbMF0gPT09IG5leHQuaHJlZi5zcGxpdCgnIycpWzBdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBpdCBpcyBTYW1lIEhvc3QgbmFtZVxuICAgKiBAcGFyYW0gY3VycmVudFVybCB7c3RyaW5nfSBDdXJyZW50IFVybCBMb2NhdGlvblxuICAgKiBAcGFyYW0gbmV3VXJsIHtzdHJpbmd9IE5ldyBVcmwgZGV0ZWN0ZWQgd2l0aCBlYWNoIGFuY2hvclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbnN0IGlzU2FtZUhvc3ROYW1lID0gKGN1cnJlbnRVcmw6IHN0cmluZywgbmV3VXJsOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBjdXJyZW50ID0gbmV3IFVSTCh0b0Fic29sdXRlVVJMKGN1cnJlbnRVcmwpKTtcbiAgICBjb25zdCBuZXh0ID0gbmV3IFVSTCh0b0Fic29sdXRlVVJMKG5ld1VybCkpO1xuICAgIHJldHVybiBjdXJyZW50Lmhvc3RuYW1lLnJlcGxhY2UoL153d3dcXC4vLCAnJykgPT09IG5leHQuaG9zdG5hbWUucmVwbGFjZSgvXnd3d1xcLi8sICcnKTtcbiAgfTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCk6IFJldHVyblR5cGU8UmVhY3QuRWZmZWN0Q2FsbGJhY2s+ID0+IHtcbiAgICBOUHJvZ3Jlc3MuY29uZmlndXJlKHtcbiAgICAgIHNob3dTcGlubmVyOiBzaG93U3Bpbm5lciA/PyB0cnVlLFxuICAgICAgdHJpY2tsZTogY3Jhd2wgPz8gdHJ1ZSxcbiAgICAgIHRyaWNrbGVTcGVlZDogY3Jhd2xTcGVlZCA/PyAyMDAsXG4gICAgICBtaW5pbXVtOiBpbml0aWFsUG9zaXRpb24gPz8gMC4wOCxcbiAgICAgIGVhc2luZzogZWFzaW5nID8/ICdlYXNlJyxcbiAgICAgIHNwZWVkOiBzcGVlZCA/PyAyMDAsXG4gICAgICB0ZW1wbGF0ZTpcbiAgICAgICAgdGVtcGxhdGUgPz9cbiAgICAgICAgJzxkaXYgY2xhc3M9XCJiYXJcIiByb2xlPVwiYmFyXCI+PGRpdiBjbGFzcz1cInBlZ1wiPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJzcGlubmVyXCIgcm9sZT1cInNwaW5uZXJcIj48ZGl2IGNsYXNzPVwic3Bpbm5lci1pY29uXCI+PC9kaXY+PC9kaXY+JyxcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBDdXJyZW50IFVybCBpcyBzYW1lIGFzIE5ldyBVcmxcbiAgICAgKiBAcGFyYW0gY3VycmVudFVybCB7c3RyaW5nfVxuICAgICAqIEBwYXJhbSBuZXdVcmwge3N0cmluZ31cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpc0FuY2hvck9mQ3VycmVudFVybChjdXJyZW50VXJsOiBzdHJpbmcsIG5ld1VybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICBjb25zdCBjdXJyZW50VXJsT2JqID0gbmV3IFVSTChjdXJyZW50VXJsKTtcbiAgICAgIGNvbnN0IG5ld1VybE9iaiA9IG5ldyBVUkwobmV3VXJsKTtcbiAgICAgIC8vIENvbXBhcmUgaG9zdG5hbWUsIHBhdGhuYW1lLCBhbmQgc2VhcmNoIHBhcmFtZXRlcnNcbiAgICAgIGlmIChcbiAgICAgICAgY3VycmVudFVybE9iai5ob3N0bmFtZSA9PT0gbmV3VXJsT2JqLmhvc3RuYW1lICYmXG4gICAgICAgIGN1cnJlbnRVcmxPYmoucGF0aG5hbWUgPT09IG5ld1VybE9iai5wYXRobmFtZSAmJlxuICAgICAgICBjdXJyZW50VXJsT2JqLnNlYXJjaCA9PT0gbmV3VXJsT2JqLnNlYXJjaFxuICAgICAgKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBuZXcgVVJMIGlzIGp1c3QgYW4gYW5jaG9yIG9mIHRoZSBjdXJyZW50IFVSTCBwYWdlXG4gICAgICAgIGNvbnN0IGN1cnJlbnRIYXNoID0gY3VycmVudFVybE9iai5oYXNoO1xuICAgICAgICBjb25zdCBuZXdIYXNoID0gbmV3VXJsT2JqLmhhc2g7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgY3VycmVudEhhc2ggIT09IG5ld0hhc2ggJiYgY3VycmVudFVybE9iai5ocmVmLnJlcGxhY2UoY3VycmVudEhhc2gsICcnKSA9PT0gbmV3VXJsT2JqLmhyZWYucmVwbGFjZShuZXdIYXNoLCAnJylcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBkZW5vLWxpbnQtaWdub3JlIG5vLXZhclxuICAgIHZhciBuUHJvZ3Jlc3NDbGFzczogTm9kZUxpc3RPZjxIVE1MSHRtbEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaHRtbCcpO1xuXG4gICAgY29uc3QgcmVtb3ZlTlByb2dyZXNzQ2xhc3MgPSAoKTogdm9pZCA9PlxuICAgICAgblByb2dyZXNzQ2xhc3MuZm9yRWFjaCgoZWw6IEVsZW1lbnQpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ25wcm9ncmVzcy1idXN5JykpO1xuXG4gICAgLyoqXG4gICAgICogRmluZCB0aGUgY2xvc2VzdCBhbmNob3IgdG8gdHJpZ2dlclxuICAgICAqIEBwYXJhbSBlbGVtZW50IHtIVE1MRWxlbWVudCB8IG51bGx9XG4gICAgICogQHJldHVybnMgZWxlbWVudCB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBmaW5kQ2xvc2VzdEFuY2hvcihlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwpOiBIVE1MQW5jaG9yRWxlbWVudCB8IG51bGwge1xuICAgICAgd2hpbGUgKGVsZW1lbnQgJiYgZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdhJykge1xuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVsZW1lbnQgYXMgSFRNTEFuY2hvckVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnQge01vdXNlRXZlbnR9XG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgY29uc3QgYW5jaG9yID0gZmluZENsb3Nlc3RBbmNob3IodGFyZ2V0KTtcbiAgICAgICAgY29uc3QgbmV3VXJsID0gYW5jaG9yPy5ocmVmO1xuICAgICAgICBpZiAobmV3VXJsKSB7XG4gICAgICAgICAgY29uc3QgY3VycmVudFVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICAgIC8vIGNvbnN0IG5ld1VybCA9IChhbmNob3IgYXMgSFRNTEFuY2hvckVsZW1lbnQpLmhyZWY7XG4gICAgICAgICAgY29uc3QgaXNFeHRlcm5hbExpbmsgPSAoYW5jaG9yIGFzIEhUTUxBbmNob3JFbGVtZW50KS50YXJnZXQgPT09ICdfYmxhbmsnO1xuXG4gICAgICAgICAgLy8gQ2hlY2sgZm9yIFNwZWNpYWwgU2NoZW1lc1xuICAgICAgICAgIGNvbnN0IGlzU3BlY2lhbFNjaGVtZSA9IFsndGVsOicsICdtYWlsdG86JywgJ3NtczonLCAnYmxvYjonLCAnZG93bmxvYWQ6J10uc29tZSgoc2NoZW1lKSA9PlxuICAgICAgICAgICAgbmV3VXJsLnN0YXJ0c1dpdGgoc2NoZW1lKVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjb25zdCBpc0FuY2hvcjogYm9vbGVhbiA9IGlzQW5jaG9yT2ZDdXJyZW50VXJsKGN1cnJlbnRVcmwsIG5ld1VybCk7XG4gICAgICAgICAgY29uc3Qgbm90U2FtZUhvc3QgPSAhaXNTYW1lSG9zdE5hbWUod2luZG93LmxvY2F0aW9uLmhyZWYsIGFuY2hvci5ocmVmKTtcbiAgICAgICAgICBpZiAobm90U2FtZUhvc3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgbmV3VXJsID09PSBjdXJyZW50VXJsIHx8XG4gICAgICAgICAgICBpc0FuY2hvciB8fFxuICAgICAgICAgICAgaXNFeHRlcm5hbExpbmsgfHxcbiAgICAgICAgICAgIGlzU3BlY2lhbFNjaGVtZSB8fFxuICAgICAgICAgICAgZXZlbnQuY3RybEtleSB8fFxuICAgICAgICAgICAgZXZlbnQubWV0YUtleSB8fFxuICAgICAgICAgICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICAgICAgICAgIGV2ZW50LmFsdEtleSB8fFxuICAgICAgICAgICAgaXNIYXNoQW5jaG9yKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCBhbmNob3IuaHJlZikgfHxcbiAgICAgICAgICAgICF0b0Fic29sdXRlVVJMKGFuY2hvci5ocmVmKS5zdGFydHNXaXRoKCdodHRwJylcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xuICAgICAgICAgICAgTlByb2dyZXNzLmRvbmUoKTtcbiAgICAgICAgICAgIHJlbW92ZU5Qcm9ncmVzc0NsYXNzKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIExvZyB0aGUgZXJyb3IgaW4gZGV2ZWxvcG1lbnQgb25seSFcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ05leHRUb3BMb2FkZXIgZXJyb3I6ICcsIGVycik7XG4gICAgICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xuICAgICAgICBOUHJvZ3Jlc3MuZG9uZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbXBsZXRlIFRvcExvYWRlciBQcm9ncmVzcyBvbiBhZGRpbmcgbmV3IGVudHJ5IHRvIGhpc3Rvcnkgc3RhY2tcbiAgICAgKiBAcGFyYW0ge0hpc3Rvcnl9XG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgKChoaXN0b3J5OiBIaXN0b3J5KTogdm9pZCA9PiB7XG4gICAgICBjb25zdCBwdXNoU3RhdGUgPSBoaXN0b3J5LnB1c2hTdGF0ZTtcbiAgICAgIGhpc3RvcnkucHVzaFN0YXRlID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgTlByb2dyZXNzLmRvbmUoKTtcbiAgICAgICAgcmVtb3ZlTlByb2dyZXNzQ2xhc3MoKTtcbiAgICAgICAgcmV0dXJuIHB1c2hTdGF0ZS5hcHBseShoaXN0b3J5LCBhcmdzKTtcbiAgICAgIH07XG4gICAgfSkoKHdpbmRvdyBhcyBXaW5kb3cpLmhpc3RvcnkpO1xuXG4gICAgLyoqXG4gKiBDb21wbGV0ZSBUb3BMb2FkZXIgUHJvZ3Jlc3Mgb24gcmVwbGFjaW5nIGN1cnJlbnQgZW50cnkgb2YgaGlzdG9yeSBzdGFja1xuICogQHBhcmFtIHtIaXN0b3J5fVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbiAgICAoKGhpc3Rvcnk6IEhpc3RvcnkpOiB2b2lkID0+IHtcbiAgICAgIGNvbnN0IHJlcGxhY2VTdGF0ZSA9IGhpc3RvcnkucmVwbGFjZVN0YXRlO1xuICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUgPSAoLi4uYXJncykgPT4ge1xuICAgICAgICBOUHJvZ3Jlc3MuZG9uZSgpO1xuICAgICAgICByZW1vdmVOUHJvZ3Jlc3NDbGFzcygpO1xuICAgICAgICByZXR1cm4gcmVwbGFjZVN0YXRlLmFwcGx5KGhpc3RvcnksIGFyZ3MpO1xuICAgICAgfTtcbiAgICB9KSgod2luZG93IGFzIFdpbmRvdykuaGlzdG9yeSk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVQYWdlSGlkZSgpOiB2b2lkIHtcbiAgICAgIE5Qcm9ncmVzcy5kb25lKCk7XG4gICAgICByZW1vdmVOUHJvZ3Jlc3NDbGFzcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBCcm93c2VyIEJhY2sgYW5kIEZvcnRoIE5hdmlnYXRpb25cbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBoYW5kbGVCYWNrQW5kRm9ydGgoKTogdm9pZCB7XG4gICAgICBOUHJvZ3Jlc3MuZG9uZSgpO1xuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZ2xvYmFsIGNsaWNrIGV2ZW50IGxpc3RlbmVyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgaGFuZGxlQmFja0FuZEZvcnRoKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFnZWhpZGUnLCBoYW5kbGVQYWdlSGlkZSk7XG5cbiAgICAvLyBDbGVhbiB1cCB0aGUgZ2xvYmFsIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHdoZW4gdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWRcbiAgICByZXR1cm4gKCk6IHZvaWQgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGFnZWhpZGUnLCBoYW5kbGVQYWdlSGlkZSk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBoYW5kbGVCYWNrQW5kRm9ydGgpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gc3R5bGVzO1xufTtcbmV4cG9ydCBkZWZhdWx0IE5leHRUb3BMb2FkZXI7XG5cbk5leHRUb3BMb2FkZXIucHJvcFR5cGVzID0ge1xuICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBzaG93U3Bpbm5lcjogUHJvcFR5cGVzLmJvb2wsXG4gIGNyYXdsOiBQcm9wVHlwZXMuYm9vbCxcbiAgY3Jhd2xTcGVlZDogUHJvcFR5cGVzLm51bWJlcixcbiAgaW5pdGlhbFBvc2l0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuICBlYXNpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNwZWVkOiBQcm9wVHlwZXMubnVtYmVyLFxuICB0ZW1wbGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2hhZG93OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYm9vbF0pLFxuICB6SW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIHNob3dBdEJvdHRvbTogUHJvcFR5cGVzLmJvb2wsXG59O1xuIl0sIm5hbWVzIjpbInNyY19leHBvcnRzIiwiX19leHBvcnQiLCJZIiwiRyIsInNyY19kZWZhdWx0IiwiViIsIm1vZHVsZSIsImV4cG9ydHMiLCJRIiwidCIsIk4iLCJyZXF1aXJlIiwidiIsInMiLCJwcm9wQ29sb3IiLCJhIiwiY29sb3IiLCJyIiwiaGVpZ2h0IiwibyIsInNob3dTcGlubmVyIiwiaSIsImNyYXdsIiwiY3Jhd2xTcGVlZCIsImwiLCJpbml0aWFsUG9zaXRpb24iLCJMIiwiZWFzaW5nIiwiVCIsInNwZWVkIiwiRSIsInNoYWRvdyIsIngiLCJ0ZW1wbGF0ZSIsImsiLCJ6SW5kZXgiLCJTIiwic2hvd0F0Qm90dG9tIiwiZGVmYXVsdENvbG9yIiwicHJvcEhlaWdodCIsInoiLCJib3hTaGFkb3ciLCJDIiwibSIsIksiLCJjcmVhdGVFbGVtZW50IiwiSCIsInUiLCJ1cmwiLCJoIiwiVVJMIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiVyIsImN1cnJlbnQiLCJmIiwiYyIsImIiLCJzcGxpdCIsImoiLCJob3N0bmFtZSIsInJlcGxhY2UiLCJ1c2VFZmZlY3QiLCJjb25maWd1cmUiLCJ0cmlja2xlIiwiZyIsIm1pbmltdW0iLCJpc0FuY2hvck9mQ3VycmVudFVybCIsIm5ld1VybCIsImUiLCJkIiwibmV3VXJsT2JqIiwicCIsImN1cnJlbnRVcmxPYmoiLCJwYXRobmFtZSIsIm4iLCJzZWFyY2giLCJjdXJyZW50SGFzaCIsIm5ld0hhc2giLCJ3IiwiaGFzaCIsIlAiLCJfX25hbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZW1vdmVOUHJvZ3Jlc3NDbGFzcyIsIm5Qcm9ncmVzc0NsYXNzIiwiZWwiLCJmb3JFYWNoIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZWxlbWVudCIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsInBhcmVudEVsZW1lbnQiLCJmaW5kQ2xvc2VzdEFuY2hvciIsInRhcmdldCIsImV2ZW50IiwiYW5jaG9yIiwiaXNTcGVjaWFsU2NoZW1lIiwiQiIsInNvbWUiLCJGIiwic2NoZW1lIiwic3RhcnRzV2l0aCIsImlzU2FtZUhvc3ROYW1lIiwiY3VycmVudFVybCIsInEiLCJjdHJsS2V5IiwibWV0YUtleSIsInNoaWZ0S2V5IiwiaXNIYXNoQW5jaG9yIiwiYWx0S2V5Iiwic3RhcnQiLCJkb25lIiwiaGFuZGxlQ2xpY2siLCJVIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImFwcGx5IiwicmVwbGFjZVN0YXRlIiwiaGFuZGxlUGFnZUhpZGUiLCJSIiwiJCIsImhhbmRsZUJhY2tBbmRGb3J0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiTSIsInByb3BUeXBlcyIsInN0cmluZyIsIm51bWJlciIsImJvb2wiLCJvbmVPZlR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/nextjs-toploader/dist/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/nextjs-toploader/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/nextjs-toploader/dist/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");
module.exports = createProxy("C:\\Users\\Irfan\\Desktop\\goldys-pos\\node_modules\\nextjs-toploader\\dist\\index.js");
 //# sourceMappingURL=index.js.map


/***/ })

};
;