/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-flexbox-flexboxlegacy-flexboxtweener-flexwrap-objectfit-printshiv-setclasses !*/ !(function (e, t, n) {
  function r(e, t) {
    return typeof e === t;
  }
  function o() {
    var e, t, n, o, i, a, s;
    for (var l in x)
      if (x.hasOwnProperty(l)) {
        if (((e = []), (t = x[l]), t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)))
          for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
        for (o = r(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++)
          (a = e[i]),
            (s = a.split(".")),
            1 === s.length ? (Modernizr[s[0]] = o) : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), (Modernizr[s[0]][s[1]] = o)),
            y.push((o ? "" : "no-") + s.join("-"));
      }
  }
  function i(e) {
    var t = b.className,
      n = Modernizr._config.classPrefix || "";
    if ((C && (t = t.baseVal), Modernizr._config.enableJSClass)) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(r, "$1" + n + "js$2");
    }
    Modernizr._config.enableClasses && ((t += " " + n + e.join(" " + n)), C ? (b.className.baseVal = t) : (b.className = t));
  }
  function a(e) {
    return e
      .replace(/([a-z])-([a-z])/g, function (e, t, n) {
        return t + n.toUpperCase();
      })
      .replace(/^-/, "");
  }
  function s(e, t) {
    return !!~("" + e).indexOf(t);
  }
  function l() {
    return "function" != typeof t.createElement ? t.createElement(arguments[0]) : C ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments);
  }
  function f(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  function u(e, t, n) {
    var o;
    for (var i in e) if (e[i] in t) return n === !1 ? e[i] : ((o = t[e[i]]), r(o, "function") ? f(o, n || t) : o);
    return !1;
  }
  function c(e) {
    return e
      .replace(/([A-Z])/g, function (e, t) {
        return "-" + t.toLowerCase();
      })
      .replace(/^ms-/, "-ms-");
  }
  function d() {
    var e = t.body;
    return e || ((e = l(C ? "svg" : "body")), (e.fake = !0)), e;
  }
  function p(e, n, r, o) {
    var i,
      a,
      s,
      f,
      u = "modernizr",
      c = l("div"),
      p = d();
    if (parseInt(r, 10)) for (; r--; ) (s = l("div")), (s.id = o ? o[r] : u + (r + 1)), c.appendChild(s);
    return (
      (i = l("style")),
      (i.type = "text/css"),
      (i.id = "s" + u),
      (p.fake ? p : c).appendChild(i),
      p.appendChild(c),
      i.styleSheet ? (i.styleSheet.cssText = e) : i.appendChild(t.createTextNode(e)),
      (c.id = u),
      p.fake && ((p.style.background = ""), (p.style.overflow = "hidden"), (f = b.style.overflow), (b.style.overflow = "hidden"), b.appendChild(p)),
      (a = n(c, e)),
      p.fake ? (p.parentNode.removeChild(p), (b.style.overflow = f), b.offsetHeight) : c.parentNode.removeChild(c),
      !!a
    );
  }
  function m(t, r) {
    var o = t.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--; ) if (e.CSS.supports(c(t[o]), r)) return !0;
      return !1;
    }
    if ("CSSSupportsRule" in e) {
      for (var i = []; o--; ) i.push("(" + c(t[o]) + ":" + r + ")");
      return (
        (i = i.join(" or ")),
        p("@supports (" + i + ") { #modernizr { position: absolute; } }", function (e) {
          return "absolute" == getComputedStyle(e, null).position;
        })
      );
    }
    return n;
  }
  function h(e, t, o, i) {
    function f() {
      c && (delete j.style, delete j.modElem);
    }
    if (((i = r(i, "undefined") ? !1 : i), !r(o, "undefined"))) {
      var u = m(e, o);
      if (!r(u, "undefined")) return u;
    }
    for (var c, d, p, h, v, g = ["modernizr", "tspan", "samp"]; !j.style && g.length; ) (c = !0), (j.modElem = l(g.shift())), (j.style = j.modElem.style);
    for (p = e.length, d = 0; p > d; d++)
      if (((h = e[d]), (v = j.style[h]), s(h, "-") && (h = a(h)), j.style[h] !== n)) {
        if (i || r(o, "undefined")) return f(), "pfx" == t ? h : !0;
        try {
          j.style[h] = o;
        } catch (y) {}
        if (j.style[h] != v) return f(), "pfx" == t ? h : !0;
      }
    return f(), !1;
  }
  function v(e, t, n, o, i) {
    var a = e.charAt(0).toUpperCase() + e.slice(1),
      s = (e + " " + w.join(a + " ") + a).split(" ");
    return r(t, "string") || r(t, "undefined") ? h(s, t, o, i) : ((s = (e + " " + _.join(a + " ") + a).split(" ")), u(s, t, n));
  }
  function g(e, t, r) {
    return v(e, n, n, t, r);
  }
  var y = [],
    x = [],
    E = {
      _version: "3.3.1",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, t) {
        var n = this;
        setTimeout(function () {
          t(n[e]);
        }, 0);
      },
      addTest: function (e, t, n) {
        x.push({ name: e, fn: t, options: n });
      },
      addAsyncTest: function (e) {
        x.push({ name: null, fn: e });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = E), (Modernizr = new Modernizr());
  var b = t.documentElement,
    C = "svg" === b.nodeName.toLowerCase(),
    S = "Moz O ms Webkit",
    w = E._config.usePrefixes ? S.split(" ") : [];
  E._cssomPrefixes = w;
  var T = function (t) {
    var r,
      o = prefixes.length,
      i = e.CSSRule;
    if ("undefined" == typeof i) return n;
    if (!t) return !1;
    if (((t = t.replace(/^@/, "")), (r = t.replace(/-/g, "_").toUpperCase() + "_RULE"), r in i)) return "@" + t;
    for (var a = 0; o > a; a++) {
      var s = prefixes[a],
        l = s.toUpperCase() + "_" + r;
      if (l in i) return "@-" + s.toLowerCase() + "-" + t;
    }
    return !1;
  };
  E.atRule = T;
  var _ = E._config.usePrefixes ? S.toLowerCase().split(" ") : [];
  E._domPrefixes = _;
  var N = { elem: l("modernizr") };
  Modernizr._q.push(function () {
    delete N.elem;
  });
  var j = { style: N.elem.style };
  Modernizr._q.unshift(function () {
    delete j.style;
  });
  C ||
    !(function (e, t) {
      function n(e, t) {
        var n = e.createElement("p"),
          r = e.getElementsByTagName("head")[0] || e.documentElement;
        return (n.innerHTML = "x<style>" + t + "</style>"), r.insertBefore(n.lastChild, r.firstChild);
      }
      function r() {
        var e = w.elements;
        return "string" == typeof e ? e.split(" ") : e;
      }
      function o(e, t) {
        var n = w.elements;
        "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), (w.elements = n + " " + e), f(t);
      }
      function i(e) {
        var t = S[e[b]];
        return t || ((t = {}), C++, (e[b] = C), (S[C] = t)), t;
      }
      function a(e, n, r) {
        if ((n || (n = t), v)) return n.createElement(e);
        r || (r = i(n));
        var o;
        return (
          (o = r.cache[e] ? r.cache[e].cloneNode() : E.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e)), !o.canHaveChildren || x.test(e) || o.tagUrn ? o : r.frag.appendChild(o)
        );
      }
      function s(e, n) {
        if ((e || (e = t), v)) return e.createDocumentFragment();
        n = n || i(e);
        for (var o = n.frag.cloneNode(), a = 0, s = r(), l = s.length; l > a; a++) o.createElement(s[a]);
        return o;
      }
      function l(e, t) {
        t.cache || ((t.cache = {}), (t.createElem = e.createElement), (t.createFrag = e.createDocumentFragment), (t.frag = t.createFrag())),
          (e.createElement = function (n) {
            return w.shivMethods ? a(n, e, t) : t.createElem(n);
          }),
          (e.createDocumentFragment = Function(
            "h,f",
            "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
              r()
                .join()
                .replace(/[\w\-:]+/g, function (e) {
                  return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")';
                }) +
              ");return n}"
          )(w, t.frag));
      }
      function f(e) {
        e || (e = t);
        var r = i(e);
        return (
          !w.shivCSS ||
            h ||
            r.hasCSS ||
            (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
          v || l(e, r),
          e
        );
      }
      function u(e) {
        for (var t, n = e.getElementsByTagName("*"), o = n.length, i = RegExp("^(?:" + r().join("|") + ")$", "i"), a = []; o--; ) (t = n[o]), i.test(t.nodeName) && a.push(t.applyElement(c(t)));
        return a;
      }
      function c(e) {
        for (var t, n = e.attributes, r = n.length, o = e.ownerDocument.createElement(_ + ":" + e.nodeName); r--; ) (t = n[r]), t.specified && o.setAttribute(t.nodeName, t.nodeValue);
        return (o.style.cssText = e.style.cssText), o;
      }
      function d(e) {
        for (var t, n = e.split("{"), o = n.length, i = RegExp("(^|[\\s,>+~])(" + r().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"), a = "$1" + _ + "\\:$2"; o--; )
          (t = n[o] = n[o].split("}")), (t[t.length - 1] = t[t.length - 1].replace(i, a)), (n[o] = t.join("}"));
        return n.join("{");
      }
      function p(e) {
        for (var t = e.length; t--; ) e[t].removeNode();
      }
      function m(e) {
        function t() {
          clearTimeout(a._removeSheetTimer), r && r.removeNode(!0), (r = null);
        }
        var r,
          o,
          a = i(e),
          s = e.namespaces,
          l = e.parentWindow;
        return !N || e.printShived
          ? e
          : ("undefined" == typeof s[_] && s.add(_),
            l.attachEvent("onbeforeprint", function () {
              t();
              for (var i, a, s, l = e.styleSheets, f = [], c = l.length, p = Array(c); c--; ) p[c] = l[c];
              for (; (s = p.pop()); )
                if (!s.disabled && T.test(s.media)) {
                  try {
                    (i = s.imports), (a = i.length);
                  } catch (m) {
                    a = 0;
                  }
                  for (c = 0; a > c; c++) p.push(i[c]);
                  try {
                    f.push(s.cssText);
                  } catch (m) {}
                }
              (f = d(f.reverse().join(""))), (o = u(e)), (r = n(e, f));
            }),
            l.attachEvent("onafterprint", function () {
              p(o), clearTimeout(a._removeSheetTimer), (a._removeSheetTimer = setTimeout(t, 500));
            }),
            (e.printShived = !0),
            e);
      }
      var h,
        v,
        g = "3.7.3",
        y = e.html5 || {},
        x = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        E = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        b = "_html5shiv",
        C = 0,
        S = {};
      !(function () {
        try {
          var e = t.createElement("a");
          (e.innerHTML = "<xyz></xyz>"),
            (h = "hidden" in e),
            (v =
              1 == e.childNodes.length ||
              (function () {
                t.createElement("a");
                var e = t.createDocumentFragment();
                return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement;
              })());
        } catch (n) {
          (h = !0), (v = !0);
        }
      })();
      var w = {
        elements:
          y.elements ||
          "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
        version: g,
        shivCSS: y.shivCSS !== !1,
        supportsUnknownElements: v,
        shivMethods: y.shivMethods !== !1,
        type: "default",
        shivDocument: f,
        createElement: a,
        createDocumentFragment: s,
        addElements: o,
      };
      (e.html5 = w), f(t);
      var T = /^$|\b(?:all|print)\b/,
        _ = "html5shiv",
        N =
          !v &&
          (function () {
            var n = t.documentElement;
            return !(
              "undefined" == typeof t.namespaces ||
              "undefined" == typeof t.parentWindow ||
              "undefined" == typeof n.applyElement ||
              "undefined" == typeof n.removeNode ||
              "undefined" == typeof e.attachEvent
            );
          })();
      (w.type += " print"), (w.shivPrint = m), m(t), "object" == typeof module && module.exports && (module.exports = w);
    })("undefined" != typeof e ? e : this, t),
    (E.testAllProps = v),
    (E.testAllProps = g),
    Modernizr.addTest("flexbox", g("flexBasis", "1px", !0)),
    Modernizr.addTest("flexboxlegacy", g("boxDirection", "reverse", !0)),
    Modernizr.addTest("flexboxtweener", g("flexAlign", "end", !0)),
    Modernizr.addTest("flexwrap", g("flexWrap", "wrap", !0));
  var F = (E.prefixed = function (e, t, n) {
    return 0 === e.indexOf("@") ? T(e) : (-1 != e.indexOf("-") && (e = a(e)), t ? v(e, t, n) : v(e, "pfx"));
  });
  Modernizr.addTest("objectfit", !!F("objectFit"), {
    aliases: ["object-fit"],
  }),
    o(),
    i(y),
    delete E.addTest,
    delete E.addAsyncTest;
  for (var k = 0; k < Modernizr._q.length; k++) Modernizr._q[k]();
  e.Modernizr = Modernizr;
})(window, document);
"function" !== typeof Object.create &&
  (Object.create = function (f) {
    function g() {}
    g.prototype = f;
    return new g();
  });
(function (f, g, k) {
  var l = {
    init: function (a, b) {
      this.$elem = f(b);
      this.options = f.extend({}, f.fn.owlCarousel.options, this.$elem.data(), a);
      this.userOptions = a;
      this.loadContent();
    },
    loadContent: function () {
      function a(a) {
        var d,
          e = "";
        if ("function" === typeof b.options.jsonSuccess) b.options.jsonSuccess.apply(this, [a]);
        else {
          for (d in a.owl) a.owl.hasOwnProperty(d) && (e += a.owl[d].item);
          b.$elem.html(e);
        }
        b.logIn();
      }
      var b = this,
        e;
      "function" === typeof b.options.beforeInit && b.options.beforeInit.apply(this, [b.$elem]);
      "string" === typeof b.options.jsonPath ? ((e = b.options.jsonPath), f.getJSON(e, a)) : b.logIn();
    },
    logIn: function () {
      this.$elem.data("owl-originalStyles", this.$elem.attr("style"));
      this.$elem.data("owl-originalClasses", this.$elem.attr("class"));
      this.$elem.css({ opacity: 0 });
      this.orignalItems = this.options.items;
      this.checkBrowser();
      this.wrapperWidth = 0;
      this.checkVisible = null;
      this.setVars();
    },
    setVars: function () {
      if (0 === this.$elem.children().length) return !1;
      this.baseClass();
      this.eventTypes();
      this.$userItems = this.$elem.children();
      this.itemsAmount = this.$userItems.length;
      this.wrapItems();
      this.$owlItems = this.$elem.find(".owl-item");
      this.$owlWrapper = this.$elem.find(".owl-wrapper");
      this.playDirection = "next";
      this.prevItem = 0;
      this.prevArr = [0];
      this.currentItem = 0;
      this.customEvents();
      this.onStartup();
    },
    onStartup: function () {
      this.updateItems();
      this.calculateAll();
      this.buildControls();
      this.updateControls();
      this.response();
      this.moveEvents();
      this.stopOnHover();
      this.owlStatus();
      !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle);
      !0 === this.options.autoPlay && (this.options.autoPlay = 5e3);
      this.play();
      this.$elem.find(".owl-wrapper").css("display", "block");
      this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility();
      this.onstartup = !1;
      this.eachMoveUpdate();
      "function" === typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem]);
    },
    eachMoveUpdate: function () {
      !0 === this.options.lazyLoad && this.lazyLoad();
      !0 === this.options.autoHeight && this.autoHeight();
      this.onVisibleItems();
      "function" === typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem]);
    },
    updateVars: function () {
      "function" === typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]);
      this.watchVisibility();
      this.updateItems();
      this.calculateAll();
      this.updatePosition();
      this.updateControls();
      this.eachMoveUpdate();
      "function" === typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem]);
    },
    reload: function () {
      var a = this;
      g.setTimeout(function () {
        a.updateVars();
      }, 0);
    },
    watchVisibility: function () {
      var a = this;
      if (!1 === a.$elem.is(":visible")) a.$elem.css({ opacity: 0 }), g.clearInterval(a.autoPlayInterval), g.clearInterval(a.checkVisible);
      else return !1;
      a.checkVisible = g.setInterval(function () {
        a.$elem.is(":visible") && (a.reload(), a.$elem.animate({ opacity: 1 }, 200), g.clearInterval(a.checkVisible));
      }, 500);
    },
    wrapItems: function () {
      this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');
      this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
      this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");
      this.$elem.css("display", "block");
    },
    baseClass: function () {
      var a = this.$elem.hasClass(this.options.baseClass),
        b = this.$elem.hasClass(this.options.theme);
      a || this.$elem.addClass(this.options.baseClass);
      b || this.$elem.addClass(this.options.theme);
    },
    updateItems: function () {
      var a, b;
      if (!1 === this.options.responsive) return !1;
      if (!0 === this.options.singleItem)
        return (
          (this.options.items = this.orignalItems = 1),
          (this.options.itemsCustom = !1),
          (this.options.itemsDesktop = !1),
          (this.options.itemsDesktopSmall = !1),
          (this.options.itemsTablet = !1),
          (this.options.itemsTabletSmall = !1),
          (this.options.itemsMobile = !1)
        );
      a = f(this.options.responsiveBaseWidth).width();
      a > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems);
      if (!1 !== this.options.itemsCustom)
        for (
          this.options.itemsCustom.sort(function (a, b) {
            return a[0] - b[0];
          }),
            b = 0;
          b < this.options.itemsCustom.length;
          b += 1
        )
          this.options.itemsCustom[b][0] <= a && (this.options.items = this.options.itemsCustom[b][1]);
      else
        a <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]),
          a <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]),
          a <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]),
          a <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]),
          a <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
      this.options.items > this.itemsAmount && !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount);
    },
    response: function () {
      var a = this,
        b,
        e;
      if (!0 !== a.options.responsive) return !1;
      e = f(g).width();
      a.resizer = function () {
        f(g).width() !== e &&
          (!1 !== a.options.autoPlay && g.clearInterval(a.autoPlayInterval),
          g.clearTimeout(b),
          (b = g.setTimeout(function () {
            e = f(g).width();
            a.updateVars();
          }, a.options.responsiveRefreshRate)));
      };
      f(g).resize(a.resizer);
    },
    updatePosition: function () {
      this.jumpTo(this.currentItem);
      !1 !== this.options.autoPlay && this.checkAp();
    },
    appendItemsSizes: function () {
      var a = this,
        b = 0,
        e = a.itemsAmount - a.options.items;
      a.$owlItems.each(function (c) {
        var d = f(this);
        d.css({ width: a.itemWidth }).data("owl-item", Number(c));
        if (0 === c % a.options.items || c === e) c > e || (b += 1);
        d.data("owl-roundPages", b);
      });
    },
    appendWrapperSizes: function () {
      this.$owlWrapper.css({
        width: this.$owlItems.length * this.itemWidth * 2,
        left: 0,
      });
      this.appendItemsSizes();
    },
    calculateAll: function () {
      this.calculateWidth();
      this.appendWrapperSizes();
      this.loops();
      this.max();
    },
    calculateWidth: function () {
      this.itemWidth = Math.round(this.$elem.width() / this.options.items);
    },
    max: function () {
      var a = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
      this.options.items > this.itemsAmount ? (this.maximumPixels = a = this.maximumItem = 0) : ((this.maximumItem = this.itemsAmount - this.options.items), (this.maximumPixels = a));
      return a;
    },
    min: function () {
      return 0;
    },
    loops: function () {
      var a = 0,
        b = 0,
        e,
        c;
      this.positionsInArray = [0];
      this.pagesInArray = [];
      for (e = 0; e < this.itemsAmount; e += 1)
        (b += this.itemWidth),
          this.positionsInArray.push(-b),
          !0 === this.options.scrollPerPage && ((c = f(this.$owlItems[e])), (c = c.data("owl-roundPages")), c !== a && ((this.pagesInArray[a] = this.positionsInArray[e]), (a = c)));
    },
    buildControls: function () {
      if (!0 === this.options.navigation || !0 === this.options.pagination) this.owlControls = f('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem);
      !0 === this.options.pagination && this.buildPagination();
      !0 === this.options.navigation && this.buildButtons();
    },
    buildButtons: function () {
      var a = this,
        b = f('<div class="owl-buttons"/>');
      a.owlControls.append(b);
      a.buttonPrev = f("<div/>", {
        class: "owl-prev",
        html: a.options.navigationText[0] || "",
      });
      a.buttonNext = f("<div/>", {
        class: "owl-next",
        html: a.options.navigationText[1] || "",
      });
      b.append(a.buttonPrev).append(a.buttonNext);
      b.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function (a) {
        a.preventDefault();
      });
      b.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function (b) {
        b.preventDefault();
        f(this).hasClass("owl-next") ? a.next() : a.prev();
      });
    },
    buildPagination: function () {
      var a = this;
      a.paginationWrapper = f('<div class="owl-pagination"/>');
      a.owlControls.append(a.paginationWrapper);
      a.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (b) {
        b.preventDefault();
        Number(f(this).data("owl-page")) !== a.currentItem && a.goTo(Number(f(this).data("owl-page")), !0);
      });
    },
    updatePagination: function () {
      var a, b, e, c, d, g;
      if (!1 === this.options.pagination) return !1;
      this.paginationWrapper.html("");
      a = 0;
      b = this.itemsAmount - (this.itemsAmount % this.options.items);
      for (c = 0; c < this.itemsAmount; c += 1)
        0 === c % this.options.items &&
          ((a += 1),
          b === c && (e = this.itemsAmount - this.options.items),
          (d = f("<div/>", { class: "owl-page" })),
          (g = f("<span></span>", {
            text: !0 === this.options.paginationNumbers ? a : "",
            class: !0 === this.options.paginationNumbers ? "owl-numbers" : "",
          })),
          d.append(g),
          d.data("owl-page", b === c ? e : c),
          d.data("owl-roundPages", a),
          this.paginationWrapper.append(d));
      this.checkPagination();
    },
    checkPagination: function () {
      var a = this;
      if (!1 === a.options.pagination) return !1;
      a.paginationWrapper.find(".owl-page").each(function () {
        f(this).data("owl-roundPages") === f(a.$owlItems[a.currentItem]).data("owl-roundPages") && (a.paginationWrapper.find(".owl-page").removeClass("active"), f(this).addClass("active"));
      });
    },
    checkNavigation: function () {
      if (!1 === this.options.navigation) return !1;
      !1 === this.options.rewindNav &&
        (0 === this.currentItem && 0 === this.maximumItem
          ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled"))
          : 0 === this.currentItem && 0 !== this.maximumItem
          ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled"))
          : this.currentItem === this.maximumItem
          ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled"))
          : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")));
    },
    updateControls: function () {
      this.updatePagination();
      this.checkNavigation();
      this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show());
    },
    destroyControls: function () {
      this.owlControls && this.owlControls.remove();
    },
    next: function (a) {
      if (this.isTransition) return !1;
      this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1;
      if (this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0))
        if (!0 === this.options.rewindNav) (this.currentItem = 0), (a = "rewind");
        else return (this.currentItem = this.maximumItem), !1;
      this.goTo(this.currentItem, a);
    },
    prev: function (a) {
      if (this.isTransition) return !1;
      this.currentItem =
        !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1);
      if (0 > this.currentItem)
        if (!0 === this.options.rewindNav) (this.currentItem = this.maximumItem), (a = "rewind");
        else return (this.currentItem = 0), !1;
      this.goTo(this.currentItem, a);
    },
    goTo: function (a, b, e) {
      var c = this;
      if (c.isTransition) return !1;
      "function" === typeof c.options.beforeMove && c.options.beforeMove.apply(this, [c.$elem]);
      a >= c.maximumItem ? (a = c.maximumItem) : 0 >= a && (a = 0);
      c.currentItem = c.owl.currentItem = a;
      if (!1 !== c.options.transitionStyle && "drag" !== e && 1 === c.options.items && !0 === c.browser.support3d)
        return c.swapSpeed(0), !0 === c.browser.support3d ? c.transition3d(c.positionsInArray[a]) : c.css2slide(c.positionsInArray[a], 1), c.afterGo(), c.singleItemTransition(), !1;
      a = c.positionsInArray[a];
      !0 === c.browser.support3d
        ? ((c.isCss3Finish = !1),
          !0 === b
            ? (c.swapSpeed("paginationSpeed"),
              g.setTimeout(function () {
                c.isCss3Finish = !0;
              }, c.options.paginationSpeed))
            : "rewind" === b
            ? (c.swapSpeed(c.options.rewindSpeed),
              g.setTimeout(function () {
                c.isCss3Finish = !0;
              }, c.options.rewindSpeed))
            : (c.swapSpeed("slideSpeed"),
              g.setTimeout(function () {
                c.isCss3Finish = !0;
              }, c.options.slideSpeed)),
          c.transition3d(a))
        : !0 === b
        ? c.css2slide(a, c.options.paginationSpeed)
        : "rewind" === b
        ? c.css2slide(a, c.options.rewindSpeed)
        : c.css2slide(a, c.options.slideSpeed);
      c.afterGo();
    },
    jumpTo: function (a) {
      "function" === typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]);
      a >= this.maximumItem || -1 === a ? (a = this.maximumItem) : 0 >= a && (a = 0);
      this.swapSpeed(0);
      !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[a]) : this.css2slide(this.positionsInArray[a], 1);
      this.currentItem = this.owl.currentItem = a;
      this.afterGo();
    },
    afterGo: function () {
      this.prevArr.push(this.currentItem);
      this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];
      this.prevArr.shift(0);
      this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp());
      "function" === typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem]);
    },
    stop: function () {
      this.apStatus = "stop";
      g.clearInterval(this.autoPlayInterval);
    },
    checkAp: function () {
      "stop" !== this.apStatus && this.play();
    },
    play: function () {
      var a = this;
      a.apStatus = "play";
      if (!1 === a.options.autoPlay) return !1;
      g.clearInterval(a.autoPlayInterval);
      a.autoPlayInterval = g.setInterval(function () {
        a.next(!0);
      }, a.options.autoPlay);
    },
    swapSpeed: function (a) {
      "slideSpeed" === a
        ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed))
        : "paginationSpeed" === a
        ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed))
        : "string" !== typeof a && this.$owlWrapper.css(this.addCssSpeed(a));
    },
    addCssSpeed: function (a) {
      return {
        "-webkit-transition": "all " + a + "ms ease",
        "-moz-transition": "all " + a + "ms ease",
        "-o-transition": "all " + a + "ms ease",
        transition: "all " + a + "ms ease",
      };
    },
    removeTransition: function () {
      return {
        "-webkit-transition": "",
        "-moz-transition": "",
        "-o-transition": "",
        transition: "",
      };
    },
    doTranslate: function (a) {
      return {
        "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)",
        "-moz-transform": "translate3d(" + a + "px, 0px, 0px)",
        "-o-transform": "translate3d(" + a + "px, 0px, 0px)",
        "-ms-transform": "translate3d(" + a + "px, 0px, 0px)",
        transform: "translate3d(" + a + "px, 0px,0px)",
      };
    },
    transition3d: function (a) {
      this.$owlWrapper.css(this.doTranslate(a));
    },
    css2move: function (a) {
      this.$owlWrapper.css({ left: a });
    },
    css2slide: function (a, b) {
      var e = this;
      e.isCssFinish = !1;
      e.$owlWrapper.stop(!0, !0).animate(
        { left: a },
        {
          duration: b || e.options.slideSpeed,
          complete: function () {
            e.isCssFinish = !0;
          },
        }
      );
    },
    checkBrowser: function () {
      var a = k.createElement("div");
      a.style.cssText =
        "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
      a = a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);
      this.browser = {
        support3d: null !== a && 1 === a.length,
        isTouch: "ontouchstart" in g || g.navigator.msMaxTouchPoints,
      };
    },
    moveEvents: function () {
      if (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) this.gestures(), this.disabledEvents();
    },
    eventTypes: function () {
      var a = ["s", "e", "x"];
      this.ev_types = {};
      !0 === this.options.mouseDrag && !0 === this.options.touchDrag
        ? (a = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"])
        : !1 === this.options.mouseDrag && !0 === this.options.touchDrag
        ? (a = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"])
        : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (a = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);
      this.ev_types.start = a[0];
      this.ev_types.move = a[1];
      this.ev_types.end = a[2];
    },
    disabledEvents: function () {
      this.$elem.on("dragstart.owl", function (a) {
        a.preventDefault();
      });
      this.$elem.on("mousedown.disableTextSelect", function (a) {
        return f(a.target).is("input, textarea, select, option");
      });
    },
    gestures: function () {
      function a(a) {
        if (void 0 !== a.touches) return { x: a.touches[0].pageX, y: a.touches[0].pageY };
        if (void 0 === a.touches) {
          if (void 0 !== a.pageX) return { x: a.pageX, y: a.pageY };
          if (void 0 === a.pageX) return { x: a.clientX, y: a.clientY };
        }
      }
      function b(a) {
        "on" === a ? (f(k).on(d.ev_types.move, e), f(k).on(d.ev_types.end, c)) : "off" === a && (f(k).off(d.ev_types.move), f(k).off(d.ev_types.end));
      }
      function e(b) {
        b = b.originalEvent || b || g.event;
        d.newPosX = a(b).x - h.offsetX;
        d.newPosY = a(b).y - h.offsetY;
        d.newRelativeX = d.newPosX - h.relativePos;
        "function" === typeof d.options.startDragging && !0 !== h.dragging && 0 !== d.newRelativeX && ((h.dragging = !0), d.options.startDragging.apply(d, [d.$elem]));
        (8 < d.newRelativeX || -8 > d.newRelativeX) && !0 === d.browser.isTouch && (void 0 !== b.preventDefault ? b.preventDefault() : (b.returnValue = !1), (h.sliding = !0));
        (10 < d.newPosY || -10 > d.newPosY) && !1 === h.sliding && f(k).off("touchmove.owl");
        d.newPosX = Math.max(Math.min(d.newPosX, d.newRelativeX / 5), d.maximumPixels + d.newRelativeX / 5);
        !0 === d.browser.support3d ? d.transition3d(d.newPosX) : d.css2move(d.newPosX);
      }
      function c(a) {
        a = a.originalEvent || a || g.event;
        var c;
        a.target = a.target || a.srcElement;
        h.dragging = !1;
        !0 !== d.browser.isTouch && d.$owlWrapper.removeClass("grabbing");
        d.dragDirection = 0 > d.newRelativeX ? (d.owl.dragDirection = "left") : (d.owl.dragDirection = "right");
        0 !== d.newRelativeX &&
          ((c = d.getNewPosition()),
          d.goTo(c, !1, "drag"),
          h.targetElement === a.target &&
            !0 !== d.browser.isTouch &&
            (f(a.target).on("click.disable", function (a) {
              a.stopImmediatePropagation();
              a.stopPropagation();
              a.preventDefault();
              f(a.target).off("click.disable");
            }),
            (a = f._data(a.target, "events").click),
            (c = a.pop()),
            a.splice(0, 0, c)));
        b("off");
      }
      var d = this,
        h = {
          offsetX: 0,
          offsetY: 0,
          baseElWidth: 0,
          relativePos: 0,
          position: null,
          minSwipe: null,
          maxSwipe: null,
          sliding: null,
          dargging: null,
          targetElement: null,
        };
      d.isCssFinish = !0;
      d.$elem.on(d.ev_types.start, ".owl-wrapper", function (c) {
        c = c.originalEvent || c || g.event;
        var e;
        if (3 === c.which) return !1;
        if (!(d.itemsAmount <= d.options.items)) {
          if ((!1 === d.isCssFinish && !d.options.dragBeforeAnimFinish) || (!1 === d.isCss3Finish && !d.options.dragBeforeAnimFinish)) return !1;
          !1 !== d.options.autoPlay && g.clearInterval(d.autoPlayInterval);
          !0 === d.browser.isTouch || d.$owlWrapper.hasClass("grabbing") || d.$owlWrapper.addClass("grabbing");
          d.newPosX = 0;
          d.newRelativeX = 0;
          f(this).css(d.removeTransition());
          e = f(this).position();
          h.relativePos = e.left;
          h.offsetX = a(c).x - e.left;
          h.offsetY = a(c).y - e.top;
          b("on");
          h.sliding = !1;
          h.targetElement = c.target || c.srcElement;
        }
      });
    },
    getNewPosition: function () {
      var a = this.closestItem();
      a > this.maximumItem ? (a = this.currentItem = this.maximumItem) : 0 <= this.newPosX && (this.currentItem = a = 0);
      return a;
    },
    closestItem: function () {
      var a = this,
        b = !0 === a.options.scrollPerPage ? a.pagesInArray : a.positionsInArray,
        e = a.newPosX,
        c = null;
      f.each(b, function (d, g) {
        e - a.itemWidth / 20 > b[d + 1] && e - a.itemWidth / 20 < g && "left" === a.moveDirection()
          ? ((c = g), (a.currentItem = !0 === a.options.scrollPerPage ? f.inArray(c, a.positionsInArray) : d))
          : e + a.itemWidth / 20 < g &&
            e + a.itemWidth / 20 > (b[d + 1] || b[d] - a.itemWidth) &&
            "right" === a.moveDirection() &&
            (!0 === a.options.scrollPerPage ? ((c = b[d + 1] || b[b.length - 1]), (a.currentItem = f.inArray(c, a.positionsInArray))) : ((c = b[d + 1]), (a.currentItem = d + 1)));
      });
      return a.currentItem;
    },
    moveDirection: function () {
      var a;
      0 > this.newRelativeX ? ((a = "right"), (this.playDirection = "next")) : ((a = "left"), (this.playDirection = "prev"));
      return a;
    },
    customEvents: function () {
      var a = this;
      a.$elem.on("owl.next", function () {
        a.next();
      });
      a.$elem.on("owl.prev", function () {
        a.prev();
      });
      a.$elem.on("owl.play", function (b, e) {
        a.options.autoPlay = e;
        a.play();
        a.hoverStatus = "play";
      });
      a.$elem.on("owl.stop", function () {
        a.stop();
        a.hoverStatus = "stop";
      });
      a.$elem.on("owl.goTo", function (b, e) {
        a.goTo(e);
      });
      a.$elem.on("owl.jumpTo", function (b, e) {
        a.jumpTo(e);
      });
    },
    stopOnHover: function () {
      var a = this;
      !0 === a.options.stopOnHover &&
        !0 !== a.browser.isTouch &&
        !1 !== a.options.autoPlay &&
        (a.$elem.on("mouseover", function () {
          a.stop();
        }),
        a.$elem.on("mouseout", function () {
          "stop" !== a.hoverStatus && a.play();
        }));
    },
    lazyLoad: function () {
      var a, b, e, c, d;
      if (!1 === this.options.lazyLoad) return !1;
      for (a = 0; a < this.itemsAmount; a += 1)
        (b = f(this.$owlItems[a])),
          "loaded" !== b.data("owl-loaded") &&
            ((e = b.data("owl-item")),
            (c = b.find(".lazyOwl")),
            "string" !== typeof c.data("src")
              ? b.data("owl-loaded", "loaded")
              : (void 0 === b.data("owl-loaded") && (c.hide(), b.addClass("loading").data("owl-loaded", "checked")),
                (d = !0 === this.options.lazyFollow ? e >= this.currentItem : !0) && e < this.currentItem + this.options.items && c.length && this.lazyPreload(b, c)));
    },
    lazyPreload: function (a, b) {
      function e() {
        a.data("owl-loaded", "loaded").removeClass("loading");
        b.removeAttr("data-src");
        "fade" === d.options.lazyEffect ? b.fadeIn(400) : b.show();
        "function" === typeof d.options.afterLazyLoad && d.options.afterLazyLoad.apply(this, [d.$elem]);
      }
      function c() {
        f += 1;
        d.completeImg(b.get(0)) || !0 === k ? e() : 100 >= f ? g.setTimeout(c, 100) : e();
      }
      var d = this,
        f = 0,
        k;
      "DIV" === b.prop("tagName") ? (b.css("background-image", "url(" + b.data("src") + ")"), (k = !0)) : (b[0].src = b.data("src"));
      c();
    },
    autoHeight: function () {
      function a() {
        var a = f(e.$owlItems[e.currentItem]).height();
        e.wrapperOuter.css("height", a + "px");
        e.wrapperOuter.hasClass("autoHeight") ||
          g.setTimeout(function () {
            e.wrapperOuter.addClass("autoHeight");
          }, 0);
      }
      function b() {
        d += 1;
        e.completeImg(c.get(0)) ? a() : 100 >= d ? g.setTimeout(b, 100) : e.wrapperOuter.css("height", "");
      }
      var e = this,
        c = f(e.$owlItems[e.currentItem]).find("img"),
        d;
      void 0 !== c.get(0) ? ((d = 0), b()) : a();
    },
    completeImg: function (a) {
      return !a.complete || ("undefined" !== typeof a.naturalWidth && 0 === a.naturalWidth) ? !1 : !0;
    },
    onVisibleItems: function () {
      var a;
      !0 === this.options.addClassActive && this.$owlItems.removeClass("active");
      this.visibleItems = [];
      for (a = this.currentItem; a < this.currentItem + this.options.items; a += 1) this.visibleItems.push(a), !0 === this.options.addClassActive && f(this.$owlItems[a]).addClass("active");
      this.owl.visibleItems = this.visibleItems;
    },
    transitionTypes: function (a) {
      this.outClass = "owl-" + a + "-out";
      this.inClass = "owl-" + a + "-in";
    },
    singleItemTransition: function () {
      var a = this,
        b = a.outClass,
        e = a.inClass,
        c = a.$owlItems.eq(a.currentItem),
        d = a.$owlItems.eq(a.prevItem),
        f = Math.abs(a.positionsInArray[a.currentItem]) + a.positionsInArray[a.prevItem],
        g = Math.abs(a.positionsInArray[a.currentItem]) + a.itemWidth / 2;
      a.isTransition = !0;
      a.$owlWrapper.addClass("owl-origin").css({
        "-webkit-transform-origin": g + "px",
        "-moz-perspective-origin": g + "px",
        "perspective-origin": g + "px",
      });
      d.css({ position: "relative", left: f + "px" })
        .addClass(b)
        .on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
          a.endPrev = !0;
          d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
          a.clearTransStyle(d, b);
        });
      c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
        a.endCurrent = !0;
        c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
        a.clearTransStyle(c, e);
      });
    },
    clearTransStyle: function (a, b) {
      a.css({ position: "", left: "" }).removeClass(b);
      this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), (this.isTransition = this.endCurrent = this.endPrev = !1));
    },
    owlStatus: function () {
      this.owl = {
        userOptions: this.userOptions,
        baseElement: this.$elem,
        userItems: this.$userItems,
        owlItems: this.$owlItems,
        currentItem: this.currentItem,
        prevItem: this.prevItem,
        visibleItems: this.visibleItems,
        isTouch: this.browser.isTouch,
        browser: this.browser,
        dragDirection: this.dragDirection,
      };
    },
    clearEvents: function () {
      this.$elem.off(".owl owl mousedown.disableTextSelect");
      f(k).off(".owl owl");
      f(g).off("resize", this.resizer);
    },
    unWrap: function () {
      0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove());
      this.clearEvents();
      this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"));
    },
    destroy: function () {
      this.stop();
      g.clearInterval(this.checkVisible);
      this.unWrap();
      this.$elem.removeData();
    },
    reinit: function (a) {
      a = f.extend({}, this.userOptions, a);
      this.unWrap();
      this.init(a, this.$elem);
    },
    addItem: function (a, b) {
      var e;
      if (!a) return !1;
      if (0 === this.$elem.children().length) return this.$elem.append(a), this.setVars(), !1;
      this.unWrap();
      e = void 0 === b || -1 === b ? -1 : b;
      e >= this.$userItems.length || -1 === e ? this.$userItems.eq(-1).after(a) : this.$userItems.eq(e).before(a);
      this.setVars();
    },
    removeItem: function (a) {
      if (0 === this.$elem.children().length) return !1;
      a = void 0 === a || -1 === a ? -1 : a;
      this.unWrap();
      this.$userItems.eq(a).remove();
      this.setVars();
    },
  };
  f.fn.owlCarousel = function (a) {
    return this.each(function () {
      if (!0 === f(this).data("owl-init")) return !1;
      f(this).data("owl-init", !0);
      var b = Object.create(l);
      b.init(a, this);
      f.data(this, "owlCarousel", b);
    });
  };
  f.fn.owlCarousel.options = {
    items: 5,
    itemsCustom: !1,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [979, 3],
    itemsTablet: [768, 2],
    itemsTabletSmall: !1,
    itemsMobile: [479, 1],
    singleItem: !1,
    itemsScaleUp: !1,
    slideSpeed: 200,
    paginationSpeed: 800,
    rewindSpeed: 1e3,
    autoPlay: !1,
    stopOnHover: !1,
    navigation: !1,
    navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    rewindNav: !0,
    scrollPerPage: !1,
    pagination: !0,
    paginationNumbers: !1,
    responsive: !0,
    responsiveRefreshRate: 200,
    responsiveBaseWidth: g,
    baseClass: "owl-carousel",
    theme: "owl-theme",
    lazyLoad: !1,
    lazyFollow: !0,
    lazyEffect: "fade",
    autoHeight: !1,
    jsonPath: !1,
    jsonSuccess: !1,
    dragBeforeAnimFinish: !0,
    mouseDrag: !0,
    touchDrag: !0,
    addClassActive: !1,
    transitionStyle: !1,
    beforeUpdate: !1,
    afterUpdate: !1,
    beforeInit: !1,
    afterInit: !1,
    beforeMove: !1,
    afterMove: !1,
    afterAction: !1,
    startDragging: !1,
    afterLazyLoad: !1,
  };
})(jQuery, window, document);
jQuery(document).ready(function ($) {
  $(".AAShwHdd-lnk").on("click", function () {
    var a = $(this).attr("data-shwhdd");
    $(this).toggleClass("on");
    $("#" + a).toggleClass("show");
  });
  $(".menu-item-has-children").prepend('<i class="fa-chevron-down"></i>');
  $(".menu-item-has-children>i").click(function (a) {
    a.preventDefault();
    var b = $(this);
    if (b.next().next().hasClass("show")) {
      b.next().next().removeClass("show");
      b.removeClass("On");
    } else {
      b.parent().parent().find("li .sub-menu").removeClass("show");
      b.parent().parent().find(".On").removeClass("On");
      b.next().next().toggleClass("show");
      b.addClass("On");
    }
  });
  $(window).scroll(function () {
    var scroll = $(this).scrollTop();
    if (scroll >= 90 && !$(".Header").hasClass("Pfx")) {
      $(".Header").addClass("Pfx");
    } else if (scroll <= 90 && $(".Header").hasClass("Pfx")) {
      $(".Header").removeClass("Pfx");
    }
  });
  var TpScroll;
  var lastScrollTp = 0;
  var delta = 5;
  var navbarHeight = $(".Header").outerHeight();
  $(window).scroll(function (event) {
    TpScroll = true;
  });
  setInterval(function () {
    if (TpScroll) {
      hasScrolled();
      TpScroll = false;
    }
  }, 250);
  function hasScrolled() {
    var st = $(this).scrollTop();
    if (Math.abs(lastScrollTp - st) <= delta) return;
    if (st > lastScrollTp && st > navbarHeight) {
      $(".Header").removeClass("HdOp1").addClass("HdOp0");
    } else {
      if (st + $(window).height() < $(document).height()) {
        $(".Header").removeClass("HdOp0").addClass("HdOp1");
      }
    }
    lastScrollTp = st;
  }
  function addClass(el, className) {
    if (el.classList) el.classList.add(className);
    else if (!hasClass(el, className)) el.className += " " + className;
  }
  var imgContainers, len;
  if (!Modernizr.objectfit) {
    imgContainers = document.querySelectorAll(".Objf");
    len = imgContainers.length;
    for (var i = 0; i < len; i++) {
      var $container = imgContainers[i],
        imgUrl = $container.querySelector("img").getAttribute("src");
      if (imgUrl) {
        $container.style.backgroundImage = "url(" + imgUrl + ")";
        addClass($container, "bgcvr");
      }
    }
  }
  $(".no-flexbox.no-flexboxlegacy.no-flexboxtweener .Row").wrap('<div class="RowCn"></div>');
  !(function (t) {
    t.fn.percircle = function (a) {
      var r = { animate: !0 };
      a || (a = {}), t.extend(a, r);
      var e = 3.6;
      return this.each(function () {
        var r = t(this);
        r.hasClass("percircle") || r.addClass("percircle"), "undefined" != typeof r.attr("data-animate") && (a.animate = "true" == r.attr("data-animate")), a.animate && r.addClass("animate");
        var s = r.attr("data-percent") || a.percent || 0,
          o = r.attr("data-perclock") || a.perclock || 0;
        if (o) {
          r.hasClass("perclock") || r.addClass("perclock");
          var n = function (t) {
            return 10 > t ? "0" + t : t;
          };
          setInterval(function () {
            var a = new Date(),
              e = n(a.getHours()) + ":" + n(a.getMinutes()) + ":" + n(a.getSeconds());
            r.html("<span>" + e + "</span>"), t('<div class="slice"><div class="bar"></div><div class="fill"></div></div>').appendTo(r);
            var s = a.getSeconds();
            0 === s && r.removeClass("gt50"),
              s > 30 &&
                (r.addClass("gt50"),
                t(".bar", r).css({
                  "-webkit-transform": "rotate(180deg)",
                  "-moz-transform": "rotate(180deg)",
                  "-ms-transform": "rotate(180deg)",
                  "-o-transform": "rotate(180deg)",
                  transform: "rotate(180deg)",
                }));
            var o = 6 * s;
            t(".bar", r).css({
              "-webkit-transform": "rotate(" + o + "deg)",
              "-moz-transform": "rotate(" + o + "deg)",
              "-ms-transform": "rotate(" + o + "deg)",
              "-o-transform": "rotate(" + o + "deg)",
              transform: "rotate(" + o + "deg)",
            });
          }, 1e3);
        } else {
          s > 50 && r.addClass("gt50");
          var d = r.attr("data-text") || a.text || s + "";
          t("<span>" + d + "</span>").appendTo(r),
            t('<div class="slice"><div class="bar"></div><div class="fill"></div></div>').appendTo(r),
            s > 50 &&
              t(".bar", r).css({
                "-webkit-transform": "rotate(180deg)",
                "-moz-transform": "rotate(180deg)",
                "-ms-transform": "rotate(180deg)",
                "-o-transform": "rotate(180deg)",
                transform: "rotate(180deg)",
              });
          var i = e * s;
          setTimeout(function () {
            t(".bar", r).css({
              "-webkit-transform": "rotate(" + i + "deg)",
              "-moz-transform": "rotate(" + i + "deg)",
              "-ms-transform": "rotate(" + i + "deg)",
              "-o-transform": "rotate(" + i + "deg)",
              transform: "rotate(" + i + "deg)",
            });
          }, 0);
        }
      });
    };
  })(jQuery);
  $("#TPVotes").percircle();
  $(".MovieListTop").owlCarousel({
    itemsCustom: [
      [0, 2],
      [450, 4],
      [768, 6],
      [1000, 8],
    ],
    autoPlay: true,
    slideSpeed: 5000,
    stopOnHover: true,
    navigation: true,
  });
  $(".MovieListRelated").owlCarousel({
    itemsCustom: [
      [0, 2],
      [450, 4],
      [768, 6],
      [1000, 6],
    ],
    navigation: true,
  });
  $(".MovieListSld").owlCarousel({
    navigation: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    autoHeight: true,
    singleItem: true,
    autoPlay: true,
    slideSpeed: 5000,
    stopOnHover: true,
  });
  $(".ImageMovieList").owlCarousel({
    navigation: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    autoHeight: true,
    singleItem: true,
  });
  $(document).keyup(function (a) {
    if (a.keyCode == 27) $(".lgtbx-on").toggleClass("lgtbx-on");
  });
  $(".lgtbx").click(function (event) {
    event.preventDefault();
    $("body").toggleClass("lgtbx-on");
  });
  $(".lgtbx-lnk").click(function (event) {
    event.preventDefault();
    $("body").toggleClass("lgtbx-on");
  });
  $(".MovieTabNav>div").click(function () {
    var tab_id = $(this).attr("data-Mvtab");
    $(".MovieTabNav>div").removeClass("on");
    $(".MvTbCn").removeClass("on");
    $(this).addClass("on");
    $("#" + tab_id).addClass("on");
  });
  $(".TPlayerNv>li").click(function () {
    var player_id = $(this).data("tplayernv");
    var player_text = $("#" + player_id).text();
    if (player_text != "") {
      $("#" + player_id).html(player_text);
    }
    var tab_id = $(this).attr("data-TPlayerNv");
    $(".TPlayerNv>li").removeClass("Current");
    $(".TPlayerTb").removeClass("Current");
    $(this).addClass("Current");
    $("#" + tab_id).addClass("Current");
  });
});
!(function (a, b) {
  "use strict";
  function c() {
    if (!e) {
      e = !0;
      var a,
        c,
        d,
        f,
        g = -1 !== navigator.appVersion.indexOf("MSIE 10"),
        h = !!navigator.userAgent.match(/Trident.*rv:11\./),
        i = b.querySelectorAll("iframe.wp-embedded-content");
      for (c = 0; c < i.length; c++) {
        if (((d = i[c]), !d.getAttribute("data-secret"))) (f = Math.random().toString(36).substr(2, 10)), (d.src += "#?secret=" + f), d.setAttribute("data-secret", f);
        if (g || h) (a = d.cloneNode(!0)), a.removeAttribute("security"), d.parentNode.replaceChild(a, d);
      }
    }
  }
  var d = !1,
    e = !1;
  if (b.querySelector) if (a.addEventListener) d = !0;
  if (((a.wp = a.wp || {}), !a.wp.receiveEmbedMessage))
    if (
      ((a.wp.receiveEmbedMessage = function (c) {
        var d = c.data;
        if (d.secret || d.message || d.value)
          if (!/[^a-zA-Z0-9]/.test(d.secret)) {
            var e,
              f,
              g,
              h,
              i,
              j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'),
              k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
            for (e = 0; e < k.length; e++) k[e].style.display = "none";
            for (e = 0; e < j.length; e++)
              if (((f = j[e]), c.source === f.contentWindow)) {
                if ((f.removeAttribute("style"), "height" === d.message)) {
                  if (((g = parseInt(d.value, 10)), g > 1e3)) g = 1e3;
                  else if (~~g < 200) g = 200;
                  f.height = g;
                }
                if ("link" === d.message)
                  if (((h = b.createElement("a")), (i = b.createElement("a")), (h.href = f.getAttribute("src")), (i.href = d.value), i.host === h.host))
                    if (b.activeElement === f) a.top.location.href = d.value;
              } else;
          }
      }),
      d)
    )
      a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1);
})(window, document);
(function ($, window, document) {
  "use strict";
  var SearchableOptionList = function ($element, options) {
    this.$originalElement = $element;
    this.options = options;
    this.metadata = this.$originalElement.data("sol-options");
  };
  SearchableOptionList.prototype = {
    SOL_OPTION_FORMAT: {
      type: "option",
      value: undefined,
      selected: false,
      disabled: false,
      label: undefined,
      tooltip: undefined,
      cssClass: "",
    },
    SOL_OPTIONGROUP_FORMAT: {
      type: "optiongroup",
      label: undefined,
      tooltip: undefined,
      disabled: false,
      children: undefined,
    },
    DATA_KEY: "sol-element",
    WINDOW_EVENTS_KEY: "sol-window-events",
    defaults: {
      data: undefined,
      name: undefined,
      texts: {
        noItemsAvailable: "No entries found",
        selectAll: "Select all",
        selectNone: "Select none",
        quickDelete: "&times;",
        searchplaceholder: "Click here to search",
        loadingData: "Still loading data...",
        itemsSelected: "{$a} items selected",
      },
      events: {
        onInitialized: undefined,
        onRendered: undefined,
        onOpen: undefined,
        onClose: undefined,
        onChange: undefined,
        onScroll: function () {
          var selectionContainerYPos = this.$input.offset().top - this.config.scrollTarget.scrollTop() + this.$input.outerHeight(false),
            selectionContainerHeight = this.$selectionContainer.outerHeight(false),
            selectionContainerBottom = selectionContainerYPos + selectionContainerHeight,
            displayContainerAboveInput = this.config.displayContainerAboveInput || document.documentElement.clientHeight - this.config.scrollTarget.scrollTop() < selectionContainerBottom,
            selectionContainerWidth =
              this.$innerContainer.outerWidth(false) - parseInt(this.$selectionContainer.css("border-left-width"), 10) - parseInt(this.$selectionContainer.css("border-right-width"), 10);
          if (displayContainerAboveInput) {
            selectionContainerYPos = this.$input.offset().top - selectionContainerHeight - this.config.scrollTarget.scrollTop() + parseInt(this.$selectionContainer.css("border-bottom-width"), 10);
            this.$container.removeClass("sol-selection-bottom").addClass("sol-selection-top");
          } else {
            this.$container.removeClass("sol-selection-top").addClass("sol-selection-bottom");
          }
          if (this.$innerContainer.css("display") !== "block") {
            selectionContainerWidth = selectionContainerWidth * 1.2;
          } else {
            var borderRadiusSelector = displayContainerAboveInput ? "border-bottom-right-radius" : "border-top-right-radius";
            this.$selectionContainer.css(borderRadiusSelector, "initial");
            if (this.$actionButtons) {
              this.$actionButtons.css(borderRadiusSelector, "initial");
            }
          }
          this.$selectionContainer.css("top", Math.floor(selectionContainerYPos)).css("left", Math.floor(this.$container.offset().left)).css("width", selectionContainerWidth);
          this.config.displayContainerAboveInput = displayContainerAboveInput;
        },
      },
      selectAllMaxItemsThreshold: 30,
      showSelectAll: function () {
        return this.config.multiple && this.config.selectAllMaxItemsThreshold && this.items && this.items.length <= this.config.selectAllMaxItemsThreshold;
      },
      useBracketParameters: false,
      multiple: undefined,
      showSelectionBelowList: false,
      allowNullSelection: false,
      scrollTarget: undefined,
      maxHeight: undefined,
      converter: undefined,
      asyncBatchSize: 300,
      maxShow: 0,
    },
    init: function () {
      this.config = $.extend(true, {}, this.defaults, this.options, this.metadata);
      var originalName = this._getNameAttribute(),
        sol = this;
      if (!originalName) {
        this._showErrorLabel("name attribute is required");
        return;
      }
      if (typeof String.prototype.trim !== "function") {
        String.prototype.trim = function () {
          return this.replace(/^\s+|\s+$/g, "");
        };
      }
      this.config.multiple = this.config.multiple || this.$originalElement.attr("multiple");
      if (!this.config.scrollTarget) {
        this.config.scrollTarget = $(window);
      }
      this._registerWindowEventsIfNeccessary();
      this._initializeUiElements();
      this._initializeInputEvents();
      setTimeout(function () {
        sol._initializeData();
        sol.$originalElement.data(sol.DATA_KEY, sol).removeAttr("name").data("sol-name", originalName);
      }, 0);
      this.$originalElement.hide();
      this.$container.css("visibility", "initial").show();
      return this;
    },
    _getNameAttribute: function () {
      return this.config.name || this.$originalElement.data("sol-name") || this.$originalElement.attr("name");
    },
    _showErrorLabel: function (message) {
      var $errorMessage = $('<div style="color: red; font-weight: bold;" />').html(message);
      if (!this.$container) {
        $errorMessage.insertAfter(this.$originalElement);
      } else {
        this.$container.append($errorMessage);
      }
    },
    _registerWindowEventsIfNeccessary: function () {
      if (!window[this.WINDOW_EVENTS_KEY]) {
        $(document).click(function (event) {
          var $clickedElement = $(event.target),
            $closestSelectionContainer = $clickedElement.closest(".sol-selection-container"),
            $closestInnerContainer = $clickedElement.closest(".sol-inner-container"),
            $clickedWithinThisSolContainer;
          if ($closestInnerContainer.length) {
            $clickedWithinThisSolContainer = $closestInnerContainer.first().parent(".sol-container");
          } else if ($closestSelectionContainer.length) {
            $clickedWithinThisSolContainer = $closestSelectionContainer.first().parent(".sol-container");
          }
          $(".sol-active")
            .not($clickedWithinThisSolContainer)
            .each(function (index, item) {
              $(item).data(SearchableOptionList.prototype.DATA_KEY).close();
            });
        });
        window[this.WINDOW_EVENTS_KEY] = true;
      }
    },
    _initializeUiElements: function () {
      var self = this;
      this.internalScrollWrapper = function () {
        if ($.isFunction(self.config.events.onScroll)) {
          self.config.events.onScroll.call(self);
        }
      };
      this.$input = $('<input type="text"/>').attr("placeholder", this.config.texts.searchplaceholder);
      this.$noResultsItem = $('<div class="sol-no-results"/>').html(this.config.texts.noItemsAvailable).hide();
      this.$loadingData = $('<div class="sol-loading-data"/>').html(this.config.texts.loadingData);
      this.$xItemsSelected = $('<div class="sol-results-count"/>');
      this.$caret = $('<div class="sol-caret-container"><b class="sol-caret"/></div>').click(function (e) {
        self.toggle();
        e.preventDefault();
        return false;
      });
      var $inputContainer = $('<div class="sol-input-container"/>').append(this.$input);
      this.$innerContainer = $('<div class="sol-inner-container"/>').append($inputContainer).append(this.$caret);
      this.$selection = $('<div class="sol-selection"/>');
      this.$selectionContainer = $('<div class="sol-selection-container"/>').append(this.$noResultsItem).append(this.$loadingData).append(this.$selection);
      this.$container = $('<div class="sol-container"/>').hide().data(this.DATA_KEY, this).append(this.$selectionContainer).append(this.$innerContainer).insertBefore(this.$originalElement);
      this.$showSelectionContainer = $('<div class="sol-current-selection"/>');
      if (this.config.showSelectionBelowList) {
        this.$showSelectionContainer.insertAfter(this.$innerContainer);
      } else {
        this.$showSelectionContainer.insertBefore(this.$innerContainer);
      }
      if (this.config.maxHeight) {
        this.$selection.css("max-height", this.config.maxHeight);
      }
      var cssClassesAsString = this.$originalElement.attr("class"),
        cssStylesAsString = this.$originalElement.attr("style"),
        cssClassList = [],
        stylesList = [];
      if (cssClassesAsString && cssClassesAsString.length > 0) {
        cssClassList = cssClassesAsString.split(/\s+/);
        for (var i = 0; i < cssClassList.length; i++) {
          this.$container.addClass(cssClassList[i]);
        }
      }
      if (cssStylesAsString && cssStylesAsString.length > 0) {
        stylesList = cssStylesAsString.split(/\;/);
        for (var i = 0; i < stylesList.length; i++) {
          var splitted = stylesList[i].split(/\s*\:\s*/g);
          if (splitted.length === 2) {
            if (splitted[0].toLowerCase().indexOf("height") >= 0) {
              this.$innerContainer.css(splitted[0].trim(), splitted[1].trim());
            } else {
              this.$container.css(splitted[0].trim(), splitted[1].trim());
            }
          }
        }
      }
      if (this.$originalElement.css("display") !== "block") {
        this.$container.css("width", this._getActualCssPropertyValue(this.$originalElement, "width"));
      }
      if ($.isFunction(this.config.events.onRendered)) {
        this.config.events.onRendered.call(this, this);
      }
    },
    _getActualCssPropertyValue: function ($element, property) {
      var domElement = $element.get(0),
        originalDisplayProperty = $element.css("display");
      $element.css("display", "none");
      if (domElement.currentStyle) {
        return domElement.currentStyle[property];
      } else if (window.getComputedStyle) {
        return document.defaultView.getComputedStyle(domElement, null).getPropertyValue(property);
      }
      $element.css("display", originalDisplayProperty);
      return $element.css(property);
    },
    _initializeInputEvents: function () {
      var self = this,
        $form = this.$input.parents("form").first();
      if ($form && $form.length === 1 && !$form.data(this.WINDOW_EVENTS_KEY)) {
        var resetFunction = function () {
          var $changedItems = [];
          $form.find(".sol-option input").each(function (index, item) {
            var $item = $(item),
              initialState = $item.data("sol-item").selected;
            if ($item.prop("checked") !== initialState) {
              $item.prop("checked", initialState).trigger("sol-change", true);
              $changedItems.push($item);
            }
          });
          if ($changedItems.length > 0 && $.isFunction(self.config.events.onChange)) {
            self.config.events.onChange.call(self, self, $changedItems);
          }
        };
        $form.on("reset", function (event) {
          resetFunction.call(self);
          setTimeout(function () {
            resetFunction.call(self);
          }, 100);
        });
        $form.data(this.WINDOW_EVENTS_KEY, true);
      }
      this.$input
        .focus(function () {
          self.open();
        })
        .on("propertychange input", function (e) {
          var valueChanged = true;
          if (e.type == "propertychange") {
            valueChanged = e.originalEvent.propertyName.toLowerCase() == "value";
          }
          if (valueChanged) {
            self._applySearchTermFilter();
          }
        });
      this.$container
        .on("keydown", function (e) {
          var keyCode = e.keyCode;
          if (!self.$noResultsItem.is(":visible")) {
            var $currentHighlightedOption,
              $nextHighlightedOption,
              directionValue,
              preventDefault = false,
              $allVisibleOptions = self.$selection.find(".sol-option:visible");
            if (keyCode === 40 || keyCode === 38) {
              self._setKeyBoardNavigationMode(true);
              $currentHighlightedOption = self.$selection.find(".sol-option.keyboard-selection");
              directionValue = keyCode === 38 ? -1 : 1;
              var indexOfNextHighlightedOption = $allVisibleOptions.index($currentHighlightedOption) + directionValue;
              if (indexOfNextHighlightedOption < 0) {
                indexOfNextHighlightedOption = $allVisibleOptions.length - 1;
              } else if (indexOfNextHighlightedOption >= $allVisibleOptions.length) {
                indexOfNextHighlightedOption = 0;
              }
              $currentHighlightedOption.removeClass("keyboard-selection");
              $nextHighlightedOption = $($allVisibleOptions[indexOfNextHighlightedOption]).addClass("keyboard-selection");
              self.$selection.scrollTop(self.$selection.scrollTop() + $nextHighlightedOption.position().top);
              preventDefault = true;
            } else if (self.keyboardNavigationMode === true && keyCode === 32) {
              $currentHighlightedOption = self.$selection.find(".sol-option.keyboard-selection input");
              $currentHighlightedOption.prop("checked", !$currentHighlightedOption.prop("checked")).trigger("change");
              preventDefault = true;
            }
            if (preventDefault) {
              e.preventDefault();
              return false;
            }
          }
        })
        .on("keyup", function (e) {
          var keyCode = e.keyCode;
          if (keyCode === 27) {
            if (self.keyboardNavigationMode === true) {
              self._setKeyBoardNavigationMode(false);
            } else if (self.$input.val() === "") {
              self.$caret.trigger("click");
              self.$input.trigger("blur");
            } else {
              self.$input.val("").trigger("input");
            }
          } else if (keyCode === 16 || keyCode === 17 || keyCode === 18 || keyCode === 20) {
            return;
          }
        });
    },
    _setKeyBoardNavigationMode: function (keyboardNavigationOn) {
      if (keyboardNavigationOn) {
        this.keyboardNavigationMode = true;
        this.$selection.addClass("sol-keyboard-navigation");
      } else {
        this.keyboardNavigationMode = false;
        this.$selection.find(".sol-option.keyboard-selection");
        this.$selection.removeClass("sol-keyboard-navigation");
        this.$selectionContainer.find(".sol-option.keyboard-selection").removeClass("keyboard-selection");
        this.$selection.scrollTop(0);
      }
    },
    _applySearchTermFilter: function () {
      if (!this.items || this.items.length === 0) {
        return;
      }
      var searchTerm = this.$input.val(),
        lowerCased = (searchTerm || "").toLowerCase();
      this.$selectionContainer.find(".sol-filtered-search").removeClass("sol-filtered-search");
      this._setNoResultsItemVisible(false);
      if (lowerCased.trim().length > 0) {
        this._findTerms(this.items, lowerCased);
      }
      if ($.isFunction(this.config.events.onScroll)) {
        this.config.events.onScroll.call(this);
      }
    },
    _findTerms: function (dataArray, searchTerm) {
      if (!dataArray || !$.isArray(dataArray) || dataArray.length === 0) {
        return;
      }
      var self = this;
      this._setKeyBoardNavigationMode(false);
      $.each(dataArray, function (index, item) {
        if (item.type === "option") {
          var $element = item.displayElement,
            elementSearchableTerms = (item.label + " " + item.tooltip).trim().toLowerCase();
          if (elementSearchableTerms.indexOf(searchTerm) === -1) {
            $element.addClass("sol-filtered-search");
          }
        } else {
          self._findTerms(item.children, searchTerm);
          var amountOfUnfilteredChildren = item.displayElement.find(".sol-option:not(.sol-filtered-search)");
          if (amountOfUnfilteredChildren.length === 0) {
            item.displayElement.addClass("sol-filtered-search");
          }
        }
      });
      this._setNoResultsItemVisible(this.$selectionContainer.find(".sol-option:not(.sol-filtered-search)").length === 0);
    },
    _initializeData: function () {
      if (!this.config.data) {
        this.items = this._detectDataFromOriginalElement();
      } else if ($.isFunction(this.config.data)) {
        this.items = this._fetchDataFromFunction(this.config.data);
      } else if ($.isArray(this.config.data)) {
        this.items = this._fetchDataFromArray(this.config.data);
      } else if (typeof this.config.data === typeof "a string") {
        this._loadItemsFromUrl(this.config.data);
      } else {
        this._showErrorLabel("Unknown data type");
      }
      if (this.items) {
        this._processDataItems(this.items);
      }
    },
    _detectDataFromOriginalElement: function () {
      if (this.$originalElement.prop("tagName").toLowerCase() === "select") {
        var self = this,
          solData = [];
        $.each(this.$originalElement.children(), function (index, item) {
          var $item = $(item),
            itemTagName = $item.prop("tagName").toLowerCase(),
            solDataItem;
          if (itemTagName === "option") {
            solDataItem = self._processSelectOption($item);
            if (solDataItem) {
              solData.push(solDataItem);
            }
          } else if (itemTagName === "optgroup") {
            solDataItem = self._processSelectOptgroup($item);
            if (solDataItem) {
              solData.push(solDataItem);
            }
          } else {
            self._showErrorLabel("Invalid element found in select: " + itemTagName + ". Only option and optgroup are allowed");
          }
        });
        return this._invokeConverterIfNeccessary(solData);
      } else if (this.$originalElement.data("sol-data")) {
        var solDataAttributeValue = this.$originalElement.data("sol-data");
        return this._invokeConverterIfNeccessary(solDataAttributeValue);
      } else {
        this._showErrorLabel('Could not determine data from original element. Must be a select or data must be provided as data-sol-data="" attribute');
      }
    },
    _processSelectOption: function ($option) {
      return $.extend({}, this.SOL_OPTION_FORMAT, {
        value: $option.val(),
        selected: $option.prop("selected"),
        disabled: $option.prop("disabled"),
        cssClass: $option.attr("class"),
        label: $option.html(),
        tooltip: $option.attr("title"),
        element: $option,
      });
    },
    _processSelectOptgroup: function ($optgroup) {
      var self = this,
        solOptiongroup = $.extend({}, this.SOL_OPTIONGROUP_FORMAT, {
          label: $optgroup.attr("label"),
          tooltip: $optgroup.attr("title"),
          disabled: $optgroup.prop("disabled"),
          children: [],
        }),
        optgroupChildren = $optgroup.children("option");
      $.each(optgroupChildren, function (index, item) {
        var $child = $(item),
          solOption = self._processSelectOption($child);
        if (solOptiongroup.disabled) {
          solOption.disabled = true;
        }
        solOptiongroup.children.push(solOption);
      });
      return solOptiongroup;
    },
    _fetchDataFromFunction: function (dataFunction) {
      return this._invokeConverterIfNeccessary(dataFunction(this));
    },
    _fetchDataFromArray: function (dataArray) {
      return this._invokeConverterIfNeccessary(dataArray);
    },
    _loadItemsFromUrl: function (url) {
      var self = this;
      $.ajax(url, {
        success: function (actualData) {
          self.items = self._invokeConverterIfNeccessary(actualData);
          if (self.items) {
            self._processDataItems(self.items);
          }
        },
        error: function (xhr, status, message) {
          self._showErrorLabel("Error loading from url " + url + ": " + message);
        },
        dataType: "json",
      });
    },
    _invokeConverterIfNeccessary: function (dataItems) {
      if ($.isFunction(this.config.converter)) {
        return this.config.converter.call(this, this, dataItems);
      }
      return dataItems;
    },
    _processDataItems: function (solItems) {
      if (!solItems) {
        this._showErrorLabel("Data items not present. Maybe the converter did not return any values");
        return;
      }
      if (solItems.length === 0) {
        this._setNoResultsItemVisible(true);
        this.$loadingData.remove();
        return;
      }
      var self = this,
        nextIndex = 0,
        dataProcessedFunction = function () {
          this.$loadingData.remove();
          this._initializeSelectAll();
          if ($.isFunction(this.config.events.onInitialized)) {
            this.config.events.onInitialized.call(this, this, solItems);
          }
        },
        loopFunction = function () {
          var currentBatch = 0,
            item;
          while (currentBatch++ < self.config.asyncBatchSize && nextIndex < solItems.length) {
            item = solItems[nextIndex++];
            if (item.type === self.SOL_OPTION_FORMAT.type) {
              self._renderOption(item);
            } else if (item.type === self.SOL_OPTIONGROUP_FORMAT.type) {
              self._renderOptiongroup(item);
            } else {
              self._showErrorLabel("Invalid item type found " + item.type);
              return;
            }
          }
          if (nextIndex >= solItems.length) {
            dataProcessedFunction.call(self);
          } else {
            setTimeout(loopFunction, 0);
          }
        };
      loopFunction.call(this);
    },
    _renderOption: function (solOption, $optionalTargetContainer) {
      var self = this,
        $actualTargetContainer = $optionalTargetContainer || this.$selection,
        $inputElement,
        $labelText = $('<div class="sol-label-text"/>')
          .html(solOption.label.trim().length === 0 ? "&nbsp;" : solOption.label)
          .addClass(solOption.cssClass),
        $label,
        $displayElement,
        inputName = this._getNameAttribute();
      if (this.config.multiple) {
        $inputElement = $('<input type="checkbox" class="sol-checkbox"/>');
        if (this.config.useBracketParameters) {
          inputName += "[]";
        }
      } else {
        $inputElement = $('<input type="radio" class="sol-radio"/>')
          .on("change", function () {
            self.$selectionContainer
              .find('input[type="radio"][name="' + inputName + '"]')
              .not($(this))
              .trigger("sol-deselect");
          })
          .on("sol-deselect", function () {
            self._removeSelectionDisplayItem($(this));
          });
      }
      $inputElement
        .on("change", function (event, skipCallback) {
          $(this).trigger("sol-change", skipCallback);
        })
        .on("sol-change", function (event, skipCallback) {
          self._selectionChange($(this), skipCallback);
        })
        .data("sol-item", solOption)
        .prop("checked", solOption.selected)
        .prop("disabled", solOption.disabled)
        .attr("name", inputName)
        .val(solOption.value);
      $label = $('<label class="sol-label"/>').attr("title", solOption.tooltip).append($inputElement).append($labelText);
      $displayElement = $('<div class="sol-option"/>').append($label);
      solOption.displayElement = $displayElement;
      $actualTargetContainer.append($displayElement);
      if (solOption.selected) {
        this._addSelectionDisplayItem($inputElement);
      }
    },
    _renderOptiongroup: function (solOptiongroup) {
      var self = this,
        $groupCaption = $('<div class="sol-optiongroup-label"/>').attr("title", solOptiongroup.tooltip).html(solOptiongroup.label),
        $groupItem = $('<div class="sol-optiongroup"/>').append($groupCaption);
      if (solOptiongroup.disabled) {
        $groupItem.addClass("disabled");
      }
      if ($.isArray(solOptiongroup.children)) {
        $.each(solOptiongroup.children, function (index, item) {
          self._renderOption(item, $groupItem);
        });
      }
      solOptiongroup.displayElement = $groupItem;
      this.$selection.append($groupItem);
    },
    _initializeSelectAll: function () {
      if (this.config.showSelectAll === true || ($.isFunction(this.config.showSelectAll) && this.config.showSelectAll.call(this))) {
        var self = this,
          $deselectAllButton = $('<a href="#" class="sol-deselect-all"/>')
            .html(this.config.texts.selectNone)
            .click(function (e) {
              self.deselectAll();
              e.preventDefault();
              return false;
            }),
          $selectAllButton = $('<a href="#" class="sol-select-all"/>')
            .html(this.config.texts.selectAll)
            .click(function (e) {
              self.selectAll();
              e.preventDefault();
              return false;
            });
        this.$actionButtons = $('<div class="sol-action-buttons"/>').append($selectAllButton).append($deselectAllButton).append('<div class="sol-clearfix"/>');
        this.$selectionContainer.prepend(this.$actionButtons);
      }
    },
    _selectionChange: function ($changeItem, skipCallback) {
      if (this.$originalElement && this.$originalElement.prop("tagName").toLowerCase() === "select") {
        var self = this;
        this.$originalElement.find("option").each(function (index, item) {
          var $currentOriginalOption = $(item);
          if ($currentOriginalOption.val() === $changeItem.val()) {
            $currentOriginalOption.prop("selected", $changeItem.prop("checked"));
            self.$originalElement.trigger("change");
            return;
          }
        });
      }
      if ($changeItem.prop("checked")) {
        this._addSelectionDisplayItem($changeItem);
      } else {
        this._removeSelectionDisplayItem($changeItem);
      }
      if (this.config.multiple) {
        this.config.scrollTarget.trigger("scroll");
      } else {
        this.close();
      }
      var selected = this.$showSelectionContainer.children(".sol-selected-display-item");
      if (this.config.maxShow != 0 && selected.length > this.config.maxShow) {
        selected.hide();
        var xitemstext = this.config.texts.itemsSelected.replace("{$a}", selected.length);
        this.$xItemsSelected.html('<div class="sol-selected-display-item-text">' + xitemstext + "<div>");
        this.$showSelectionContainer.append(this.$xItemsSelected);
        this.$xItemsSelected.show();
      } else {
        selected.show();
        this.$xItemsSelected.hide();
      }
      if (!skipCallback && $.isFunction(this.config.events.onChange)) {
        this.config.events.onChange.call(this, this, $changeItem);
      }
    },
    _addSelectionDisplayItem: function ($changedItem) {
      var solOptionItem = $changedItem.data("sol-item"),
        $existingDisplayItem = solOptionItem.displaySelectionItem,
        $displayItemText;
      if (!$existingDisplayItem) {
        $displayItemText = $('<span class="sol-selected-display-item-text" />').html(solOptionItem.label);
        $existingDisplayItem = $('<div class="sol-selected-display-item"/>').append($displayItemText).attr("title", solOptionItem.tooltip).appendTo(this.$showSelectionContainer);
        if ((this.config.multiple || this.config.allowNullSelection) && !$changedItem.prop("disabled")) {
          $('<span class="sol-quick-delete"/>')
            .html(this.config.texts.quickDelete)
            .click(function () {
              $changedItem.prop("checked", false).trigger("change");
            })
            .prependTo($existingDisplayItem);
        }
        solOptionItem.displaySelectionItem = $existingDisplayItem;
        this._setKeyBoardNavigationMode(false);
        this.$container.removeClass("sol-active");
        this.config.scrollTarget.unbind("scroll", this.internalScrollWrapper);
        $(window).off("resize");
        this.$input.val("");
        this._applySearchTermFilter();
        this.config.displayContainerAboveInput = undefined;
        if ($.isFunction(this.config.events.onClose)) {
          this.config.events.onClose.call(this, this);
        }
      }
    },
    _removeSelectionDisplayItem: function ($changedItem) {
      var solOptionItem = $changedItem.data("sol-item"),
        $myDisplayItem = solOptionItem.displaySelectionItem;
      if ($myDisplayItem) {
        $myDisplayItem.remove();
        solOptionItem.displaySelectionItem = undefined;
      }
    },
    _setNoResultsItemVisible: function (visible) {
      if (visible) {
        this.$noResultsItem.show();
        this.$selection.hide();
        if (this.$actionButtons) {
          this.$actionButtons.hide();
        }
      } else {
        this.$noResultsItem.hide();
        this.$selection.show();
        if (this.$actionButtons) {
          this.$actionButtons.show();
        }
      }
    },
    isOpen: function () {
      return this.$container.hasClass("sol-active");
    },
    isClosed: function () {
      return !this.isOpen();
    },
    toggle: function () {
      if (this.isOpen()) {
        this.close();
      } else {
        this.open();
      }
    },
    open: function () {
      if (this.isClosed()) {
        this.$container.addClass("sol-active");
        this.config.scrollTarget.bind("scroll", this.internalScrollWrapper).trigger("scroll");
        $(window).on("resize", this.internalScrollWrapper);
        if ($.isFunction(this.config.events.onOpen)) {
          this.config.events.onOpen.call(this, this);
        }
      }
    },
    close: function () {
      if (this.isOpen()) {
        this._setKeyBoardNavigationMode(false);
        this.$container.removeClass("sol-active");
        this.config.scrollTarget.unbind("scroll", this.internalScrollWrapper);
        $(window).off("resize");
        this.$input.val("");
        this._applySearchTermFilter();
        this.config.displayContainerAboveInput = undefined;
        if ($.isFunction(this.config.events.onClose)) {
          this.config.events.onClose.call(this, this);
        }
      }
    },
    selectAll: function () {
      if (this.config.multiple) {
        var $changedInputs = this.$selectionContainer.find('input[type="checkbox"]:not([disabled], :checked)').prop("checked", true).trigger("change", true);
        this.close();
        if ($.isFunction(this.config.events.onChange)) {
          this.config.events.onChange.call(this, this, $changedInputs);
        }
      }
    },
    deselectAll: function () {
      if (this.config.multiple) {
        var $changedInputs = this.$selectionContainer.find('input[type="checkbox"]:not([disabled]):checked').prop("checked", false).trigger("change", true);
        this.close();
        if ($.isFunction(this.config.events.onChange)) {
          this.config.events.onChange.call(this, this, $changedInputs);
        }
      }
    },
    getSelection: function () {
      return this.$selection.find("input:checked");
    },
  };
  SearchableOptionList.defaults = SearchableOptionList.prototype.defaults;
  window.SearchableOptionList = SearchableOptionList;
  $.fn.searchableOptionList = function (options) {
    var result = [];
    this.each(function () {
      var $this = $(this),
        $alreadyInitializedSol = $this.data(SearchableOptionList.prototype.DATA_KEY);
      if ($alreadyInitializedSol) {
        result.push($alreadyInitializedSol);
      } else {
        var newSol = new SearchableOptionList($this, options);
        result.push(newSol);
        setTimeout(function () {
          newSol.init();
        }, 0);
      }
    });
    if (result.length === 1) {
      return result[0];
    }
    return result;
  };
})(jQuery, window, document);
jQuery(document).ready(function ($) {
  function tp_suggets(strclass, strarray) {
    $("body").delegate("." + strclass, "keyup", function (event) {
      event.preventDefault();
      var value = $(this).attr("value").toLowerCase();
      var nameinput = $(this).data("name");
      var result = $(this);
      var items = strarray;
      var rm = "";
      if (value.length == 0) {
        result.next().hide();
      }
      if (value.length >= 3) {
        var re = new RegExp("^\\W?" + value + ".*$", "gi");
        var matches = [];
        for (var i = 0; i < items.length; i++) {
          if (items[i].split("|")[0].toLowerCase().indexOf(value) > -1)
            rm += '<label><button data-name="' + nameinput + '" data-id="' + items[i].split("|")[1] + '" type="button">' + items[i].split("|")[0] + "</button></label>";
        }
        if (rm == "") {
          rm = "<p>No results</p>";
        }
        result.parent().next().find("div").html(rm);
        result.parent().next().show();
      }
    });
    $(document).on("click", function (e) {
      if ($(e.target).closest(".trsrcbx div").length === 0) {
        $(".trsrcbx div").prev().val("");
        $(".tpsuggets").val("");
        $(".trsrcbx").hide();
      }
    });
    $(document.body).on("click", ".trsrcbx button", function (event) {
      event.preventDefault();
      var name = $(this).text();
      var id = $(this).data("id");
      var nameinput = $(this).data("name");
      if (!$("#" + nameinput + "-" + id + "").length) {
        $(this)
          .parent()
          .parent()
          .parent()
          .parent()
          .find("ul")
          .append(
            '<li id="' +
              nameinput +
              "-" +
              id +
              '"><span class="tr-selected">' +
              name +
              '</span><span class="tr-delete">&#xE5CD;</span><input name="' +
              nameinput +
              '[]" type="hidden" value="' +
              id +
              '"></li>'
          );
      }
      $(".tpsuggets").val("");
      $(".trsrcbx div").html("");
      $(".trsrcbx").hide();
    });
    $(document.body).on("click", ".trsrclst li", function (event) {
      event.preventDefault();
      $(this).remove();
    });
  }
});
