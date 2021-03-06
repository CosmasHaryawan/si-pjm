!(function (d, p, f, c) {
    "use strict";
    var t,
        g,
        u,
        o,
        i,
        r,
        l,
        m = function () {
            this.reset();
        };
    function e() {
        (this.isMobile = function () {
            return /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }),
            (this.transitionEvent = function () {
                var t = f.createElement("fakeelement"),
                    o = { transition: "transitionend", OTransition: "otransitionend", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };
                for (var i in o) if (t.style[i] !== c) return o[i];
                return null;
            }),
            (this.animationEvent = function () {
                var t = f.createElement("fakeelement"),
                    o = { animation: "animationend", MSAnimationEnd: "msAnimationEnd", OAnimation: "oAnimationEnd", MozAnimation: "mozAnimationEnd", WebkitAnimation: "webkitAnimationEnd" };
                for (var i in o) if (t.style[i] !== c) return o[i];
                return null;
            });
    }
    (m.prototype = {
        reset: function () {
            return (this.m = [1, 0, 0, 1, 0, 0]), this;
        },
        multiply: function (t) {
            var o = this.m[0] * t.m[0] + this.m[2] * t.m[1],
                i = this.m[1] * t.m[0] + this.m[3] * t.m[1],
                e = this.m[0] * t.m[2] + this.m[2] * t.m[3],
                s = this.m[1] * t.m[2] + this.m[3] * t.m[3],
                a = this.m[0] * t.m[4] + this.m[2] * t.m[5] + this.m[4],
                n = this.m[1] * t.m[4] + this.m[3] * t.m[5] + this.m[5];
            return (this.m[0] = o), (this.m[1] = i), (this.m[2] = e), (this.m[3] = s), (this.m[4] = a), (this.m[5] = n), this;
        },
        inverse: function () {
            var t = new m();
            t.m = this.m.slice(0);
            var o = 1 / (t.m[0] * t.m[3] - t.m[1] * t.m[2]),
                i = t.m[3] * o,
                e = -t.m[1] * o,
                s = -t.m[2] * o,
                a = t.m[0] * o,
                n = o * (t.m[2] * t.m[5] - t.m[3] * t.m[4]),
                h = o * (t.m[1] * t.m[4] - t.m[0] * t.m[5]);
            return (t.m[0] = i), (t.m[1] = e), (t.m[2] = s), (t.m[3] = a), (t.m[4] = n), (t.m[5] = h), t;
        },
        rotate: function (t) {
            var o = Math.cos(t),
                i = Math.sin(t),
                e = this.m[0] * o + this.m[2] * i,
                s = this.m[1] * o + this.m[3] * i,
                a = this.m[0] * -i + this.m[2] * o,
                n = this.m[1] * -i + this.m[3] * o;
            return (this.m[0] = e), (this.m[1] = s), (this.m[2] = a), (this.m[3] = n), this;
        },
        translate: function (t, o) {
            return (this.m[4] += this.m[0] * t + this.m[2] * o), (this.m[5] += this.m[1] * t + this.m[3] * o), this;
        },
        scale: function (t, o) {
            return (this.m[0] *= t), (this.m[1] *= t), (this.m[2] *= o), (this.m[3] *= o), this;
        },
        transformPoint: function (t, o) {
            var i = t,
                e = o;
            return [(t = i * this.m[0] + e * this.m[2] + this.m[4]), (o = i * this.m[1] + e * this.m[3] + this.m[5])];
        },
        transformVector: function (t, o) {
            var i = t,
                e = o;
            return [(t = i * this.m[0] + e * this.m[2]), (o = i * this.m[1] + e * this.m[3])];
        },
        copy: function () {
            new m().m = this.m.slice(0);
        },
    }),
        (t = ("undefined" != typeof self && self) || (void 0 !== p && p) || this.content || this),
        (u = t.Uint8Array),
        (o = t.HTMLCanvasElement),
        (i = o && o.prototype),
        (r = /\s*;\s*base64\s*(?:;|$)/i),
        (l = "toDataURL"),
        u &&
            (g = new u([
                62,
                -1,
                -1,
                -1,
                63,
                52,
                53,
                54,
                55,
                56,
                57,
                58,
                59,
                60,
                61,
                -1,
                -1,
                -1,
                0,
                -1,
                -1,
                -1,
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                -1,
                -1,
                -1,
                -1,
                -1,
                -1,
                26,
                27,
                28,
                29,
                30,
                31,
                32,
                33,
                34,
                35,
                36,
                37,
                38,
                39,
                40,
                41,
                42,
                43,
                44,
                45,
                46,
                47,
                48,
                49,
                50,
                51,
            ])),
        !o ||
            (i.toBlob && i.toBlobHD) ||
            (i.toBlob ||
                (i.toBlob = function (t, o) {
                    if ((o || (o = "image/png"), this.mozGetAsFile)) t(this.mozGetAsFile("canvas", o));
                    else if (this.msToBlob && /^\s*image\/png\s*(?:$|;)/i.test(o)) t(this.msToBlob());
                    else {
                        var i,
                            e = Array.prototype.slice.call(arguments, 1),
                            s = this[l].apply(this, e),
                            a = s.indexOf(","),
                            n = s.substring(a + 1),
                            h = r.test(s.substring(0, a));
                        Blob.fake
                            ? (((i = new Blob()).encoding = h ? "base64" : "URI"), (i.data = n), (i.size = n.length))
                            : u &&
                              (i = h
                                  ? new Blob(
                                        [
                                            (function (t) {
                                                for (var o, i, e = t.length, s = new u(((e / 4) * 3) | 0), a = 0, n = 0, h = [0, 0], r = 0, l = 0; e--; )
                                                    (i = t.charCodeAt(a++)),
                                                        255 !== (o = g[i - 43]) &&
                                                            void 0 !== o &&
                                                            ((h[1] = h[0]), (h[0] = i), (l = (l << 6) | o), 4 == ++r && ((s[n++] = l >>> 16), 61 !== h[1] && (s[n++] = l >>> 8), 61 !== h[0] && (s[n++] = l), (r = 0)));
                                                return s;
                                            })(n),
                                        ],
                                        { type: o }
                                    )
                                  : new Blob([decodeURIComponent(n)], { type: o })),
                            t(i);
                    }
                }),
            !i.toBlobHD && i.toDataURLHD
                ? (i.toBlobHD = function () {
                      l = "toDataURLHD";
                      var t = this.toBlob();
                      return (l = "toDataURL"), t;
                  })
                : (i.toBlobHD = i.toBlob)),
        (function (r) {
            var l,
                g,
                t = ["wheel", "mousewheel", "DOMMouseScroll"],
                o = "onwheel" in f || 9 <= f.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"];
            if (r.event.fixHooks) for (var i = t.length; i; ) r.event.fixHooks[t[--i]] = r.event.mouseHooks;
            function e(t) {
                var o,
                    i,
                    e = t || p.event,
                    s = [].slice.call(arguments, 1),
                    a = 0,
                    n = 0,
                    h = 0;
                return (
                    ((t = r.event.fix(e)).type = "mousewheel"),
                    e.wheelDelta && (a = e.wheelDelta),
                    e.detail && (a = -1 * e.detail),
                    e.deltaY && (a = h = -1 * e.deltaY),
                    e.deltaX && (a = -1 * (n = e.deltaX)),
                    e.wheelDeltaY !== c && (h = e.wheelDeltaY),
                    e.wheelDeltaX !== c && (n = -1 * e.wheelDeltaX),
                    (o = Math.abs(a)),
                    (!l || o < l) && (l = o),
                    (i = Math.max(Math.abs(h), Math.abs(n))),
                    (!g || i < g) && (g = i),
                    s.unshift(t, Math.floor(a / l), Math.floor(n / g), Math.floor(h / g)),
                    (r.event.dispatch || r.event.handle).apply(this, s)
                );
            }
            (r.event.special.mousewheel = {
                setup: function () {
                    if (this.addEventListener) for (var t = o.length; t; ) this.addEventListener(o[--t], e, !1);
                    else this.onmousewheel = e;
                },
                teardown: function () {
                    if (this.removeEventListener) for (var t = o.length; t; ) this.removeEventListener(o[--t], e, !1);
                    else this.onmousewheel = null;
                },
            }),
                r.fn.extend({
                    mousewheel: function (t) {
                        return t ? this.bind("mousewheel", t) : this.trigger("mousewheel");
                    },
                    unmousewheel: function (t) {
                        return this.unbind("mousewheel", t);
                    },
                });
        })(d),
        d('<iframe id="ipgs-scrollbar-listener"/>')
            .on("load", function () {
                var t = function () {
                        if ("number" == typeof p.innerWidth) return p.innerWidth > f.documentElement.clientWidth;
                        var t,
                            o,
                            i = f.documentElement || f.body;
                        void 0 !== i.currentStyle && (t = i.currentStyle.overflow), (t = t || p.getComputedStyle(i, "").overflow), void 0 !== i.currentStyle && (o = i.currentStyle.overflowY), (o = o || p.getComputedStyle(i, "").overflowY);
                        var e = i.scrollHeight > i.clientHeight,
                            s = /^(visible|auto)$/.test(t) || /^(visible|auto)$/.test(o);
                        return (e && s) || "scroll" === t || "scroll" === o;
                    },
                    o = t(),
                    i = null;
                this.contentWindow.addEventListener("resize", function () {
                    clearTimeout(i),
                        (i = setTimeout(function () {
                            t() ? o || (d(top.window).trigger("scrollbar", [!0]), (o = !0)) : o && (d(top.window).trigger("scrollbar", [!1]), (o = !1));
                        }, 100));
                });
            })
            .appendTo("body");
    var v = "kurasa-instance",
        s = 0;
    function a(t, o) {
        (this.root = t),
            (this.config = o),
            (this.leftPage = null),
            (this.rightPage = null),
            (this.leftBackPage = null),
            (this.rightBackPage = null),
            (this.leftBelowPage = null),
            (this.rightBelowPage = null),
            (this.$animation = null),
            (this.swipe = { startY: 0, startX: 0, endY: 0, endX: 0, diffY: 0, diffX: 0, startTouch: !1, startAngle: 0, prevAngle: 0, angle: 0, angleThreshold: 30 });
    }
    function n(t, o) {
        (this.root = t),
            (this.config = o),
            (this.prevPage = null),
            (this.currPage = null),
            (this.nextPage = null),
            (this.$animation = null),
            (this.swipe = { startY: 0, startX: 0, endY: 0, endX: 0, diffY: 0, diffX: 0, startTouch: !1, startAngle: 0, prevAngle: 0, angle: 0, angleThreshold: 30 });
    }
    function h(t, o) {
        (this.root = t),
            (this.config = o),
            (this.prevPage = null),
            (this.currPage = null),
            (this.nextPage = null),
            (this.$animation = null),
            (this.swipe = { startY: 0, startX: 0, endY: 0, endX: 0, diffY: 0, diffX: 0, startTouch: !1, startOffset: 0, prevOffset: 0, offset: 0, offsetThreshold: 30 });
    }
    function b(t, o) {
        (this.id = s++),
            (this.util = new e()),
            (this.$body = null),
            (this.$container = null),
            (this.config = null),
            (this.bookWidth = 0),
            (this.bookHeight = 0),
            (this.pageWidth = 0),
            (this.pageHeight = 0),
            (this.currPage = 0),
            (this.pageIndexPrev = 0),
            (this.stagePadding = { top: 0, left: 0, right: 0, bottom: 0 }),
            (this.pdf = null),
            (this.matrix = new m()),
            (this.lastDelta = { x: 0, y: 0 }),
            (this.lastScale = 0),
            (this.tapped = null),
            (this.pinchZoom = { zoom: 0, startDate: !1, aStartX: 0, aStartY: 0, aCurX: 0, aCurY: 0, aIsMoving: !1, bStartX: 0, bStartY: 0, bCurX: 0, bCurY: 0, bIsMoving: !1 }),
            (this.dragNavigation = { target: null, startX: 0, startY: 0, x: 0, y: 0 }),
            (this.thumbnailsScrollTimerId = null),
            (this.thumbnailsScrollTimeout = 2e3),
            (this.themeClass = null),
            (this.engineClass = null),
            (this.engine = null),
            (this.ready = !1),
            (this.controls = {}),
            (this.pages = []),
            (this.bookTransitionTimerId = null),
            this._init(t, o);
    }
    (a.prototype = {
        _normalizePageIndex: function (t) {
            return t ? (t < 0 ? 0 : t > this.root.pages.length - 1 ? this.root.pages.length - 1 : t) : 0;
        },
        _isPageLeft: function (t) {
            return !!(t % 2);
        },
        _isPageRight: function (t) {
            return !this._isPageLeft(t);
        },
        _getLeftPageIndex: function (t) {
            return this._isPageRight(t) && (t += -1), t < 0 || t > this.root.pages.length - 1 ? null : t;
        },
        _getRightPageIndex: function (t) {
            return this._isPageLeft(t) && (t += 1), t < 0 || t > this.root.pages.length - 1 ? null : t;
        },
        _getBackPageIndex: function (t) {
            return (t || 0 == t) && (t += this._isPageLeft(t) ? -1 : 1), t < 0 || t > this.root.pages.length - 1 ? null : t;
        },
        _getBelowPageIndex: function (t) {
            return (t || 0 == t) && (t += this._isPageLeft(t) ? -2 : 2), t < 0 || t > this.root.pages.length - 1 ? null : t;
        },
        _clearSwipe: function () {
            (this.swipe.startY = 0),
                (this.swipe.startX = 0),
                (this.swipe.endY = 0),
                (this.swipe.endX = 0),
                (this.swipe.diffY = 0),
                (this.swipe.diffX = 0),
                (this.swipe.startAngle = 0),
                (this.swipe.prevAngle = 0),
                (this.swipe.angle = 0),
                (this.swipe.startTouch = !1);
        },
        _stopAnimation: function (t) {
            this.$animation && this.$animation.stop(!0, t || !1), (this.$animation = null);
        },
        _setAngle: function (t) {
            t <= -180 ? (t = -180) : 180 <= t && (t = 180);
            var o = Math.abs(t),
                i = (90 < o ? 180 - o : o) / 300;
            if (t < 0) {
                if (null == this.rightBackPage) return;
                if (
                    (null != this.rightBelowPage && (this.root.pages[this.rightBelowPage].css({ display: "block", transform: "", "z-index": 1 }), this.root._setShowHidePageState(this.rightBelowPage, !0)),
                    null != this.leftBelowPage && this.root.pages[this.leftBelowPage].css({ "z-index": 2 }),
                    null != this.leftBackPage && this.root.pages[this.leftBackPage].css({ "z-index": 3 }),
                    null != this.leftPage && this.root.pages[this.leftPage].css({ "z-index": 4 }),
                    90 < o
                        ? (null != this.rightPage && (this.root.pages[this.rightPage].css({ display: "none" }), this.root._setShowHidePageState(this.rightPage, !1)),
                          null != this.rightBackPage &&
                              (this.root.pages[this.rightBackPage].css({ display: "block", transform: "rotateY(" + (180 + t) + "deg) translateZ(0px)", "z-index": 7 }).$shadow.css({ opacity: i }),
                              this.root._setShowHidePageState(this.rightBackPage, !0)))
                        : (null != this.rightPage &&
                              (this.root.pages[this.rightPage].css({ display: "block", transform: "rotateY(" + t + "deg) translateZ(0px)", "z-index": 7 }).$shadow.css({ opacity: i }), this.root._setShowHidePageState(this.rightPage, !0)),
                          null != this.rightBackPage && (this.root.pages[this.rightBackPage].css({ display: "none" }), this.root._setShowHidePageState(this.rightBackPage, !1))),
                    null == this.leftPage)
                ) {
                    if (90 < o) {
                        var e = 1 - (o - 90) / 90,
                            s = s - ((this.root.pageWidth * this.root._getZoom()) / 2) * e;
                        this.root.controls.$book.css({ transform: "translateX(" + s + "px)" });
                    }
                } else if (null == this.rightBelowPage && o < 90) {
                    (e = 1 - (90 - o) / 90), (s = s + ((this.root.pageWidth * this.root._getZoom()) / 2) * e);
                    this.root.controls.$book.css({ transform: "translateX(" + s + "px)" });
                }
            } else if (0 <= t) {
                if (null == this.leftBackPage) return;
                if (
                    (null != this.leftBelowPage && (this.root.pages[this.leftBelowPage].css({ display: "block", transform: "", "z-index": 1 }), this.root._setShowHidePageState(this.leftBelowPage, !0)),
                    null != this.rightBelowPage && this.root.pages[this.rightBelowPage].css({ "z-index": 2 }),
                    null != this.rightBackPage && this.root.pages[this.rightBackPage].css({ "z-index": 3 }),
                    null != this.rightPage && this.root.pages[this.rightPage].css({ "z-index": 4 }),
                    90 < o
                        ? (null != this.leftPage && (this.root.pages[this.leftPage].css({ display: "none" }), this.root._setShowHidePageState(this.leftPage, !1)),
                          null != this.leftBackPage &&
                              (this.root.pages[this.leftBackPage].css({ display: "block", transform: "rotateY(" + (-180 + t) + "deg) translateZ(0px)", "z-index": 7 }).$shadow.css({ opacity: i }),
                              this.root._setShowHidePageState(this.leftBackPage, !0)))
                        : (null != this.leftPage &&
                              (this.root.pages[this.leftPage].css({ display: "block", transform: "rotateY(" + t + "deg) translateZ(0px)", "z-index": 7 }).$shadow.css({ opacity: i }), this.root._setShowHidePageState(this.leftPage, !0)),
                          null != this.leftBackPage && (this.root.pages[this.leftBackPage].css({ display: "none" }), this.root._setShowHidePageState(this.leftBackPage, !1))),
                    null == this.leftBelowPage)
                ) {
                    if (o < 90) {
                        (e = 1 - (90 - o) / 90), (s = s - ((this.root.pageWidth * this.root._getZoom()) / 2) * e);
                        this.root.controls.$book.css({ transform: "translateX(" + s + "px)" });
                    }
                } else if (null == this.rightPage && 90 < o) {
                    (e = 1 - (o - 90) / 90), (s = 0);
                    (s += ((this.root.pageWidth * this.root._getZoom()) / 2) * e), this.root.controls.$book.css({ transform: "translateX(" + s + "px)" });
                }
            }
        },
        _animateTurnPage: function (t, o) {
            var i = d.Deferred();
            this._stopAnimation();
            var e = this,
                s = (this.root.config.flipDuration / 180) * Math.abs(o - t);
            return (
                (this.$animation = d({ angle: t })),
                this.$animation.animate(
                    { angle: o },
                    {
                        duration: s,
                        easing: "linear",
                        done: function () {
                            e.swipe.startAngle = 0;
                            var t = (e.$animation = null);
                            null != (t = 180 == o ? e.leftBackPage : -180 == o ? e.rightBackPage : null != e.leftPage ? e.leftPage : null != e.rightPage ? e.rightPage : null) && e.showPage(t), i.resolve();
                        },
                        fail: function () {
                            i.reject();
                        },
                        step: function (t) {
                            (e.swipe.startAngle = t), e._setAngle(t);
                        },
                    }
                ),
                i.promise()
            );
        },
        updateBook: function (t) {
            for (var o = !0, i = 0, e = this.root.pages.length; i < e; i++) {
                var s = this.root.pages[i];
                s.toggleClass("ipgs-left", !o).toggleClass("ipgs-right", o).removeClass("ipgs-show").addClass("ipgs-hide"), (s.pageLeft = !o), (o = !(s.pageRight = o));
                d(".ipgs-page-data", s);
            }
            t && this.showPage(this.root.currPage);
        },
        updateBookLayout: function () {
            var t = 0;
            0 == this.rightPage ? (t -= (this.root.pageWidth * this.root._getZoom()) / 2) : this.leftPage == this.root.pages.length - 1 && (t += (this.root.pageWidth * this.root._getZoom()) / 2),
                this.root.controls.$book.css({ transform: "translateX(" + t + "px)" });
            for (var o = 0, i = this.root.pages.length; o < i; o++) {
                var e = this.root.pages[o];
                e.css({ left: e.pageRight ? this.root.pageWidth * this.root._getZoom() - 1 : 0 });
            }
        },
        showPage: function (t) {
            t = this._normalizePageIndex(t);
            var o = this._getLeftPageIndex(t),
                i = this._getRightPageIndex(t),
                e = this._getBackPageIndex(o),
                s = this._getBackPageIndex(i),
                a = this._getBelowPageIndex(o),
                n = this._getBelowPageIndex(i);
            this.root._loadPageData(o), this.root._loadPageData(i), this.root.config.preloadNeighbours && (this.root._loadPageData(e), this.root._loadPageData(s), this.root._loadPageData(a), this.root._loadPageData(n));
            for (var h = 0, r = this.root.pages.length; h < r; h++) {
                var l = this.root.pages[h],
                    g = "none",
                    p = 0,
                    c = !1;
                (h != o && h != i) || ((g = "block"), (p = 1), (c = !0)), l.css({ display: g, top: 0, left: l.pageRight ? this.root.pageWidth * this.root._getZoom() : 0, transform: "", "z-index": p }), this.root._setShowHidePageState(h, c);
            }
            (this.root.currPage = t),
                (this.leftPage = o),
                (this.rightPage = i),
                (this.leftBackPage = e),
                (this.rightBackPage = s),
                (this.leftBelowPage = a),
                (this.rightBelowPage = n),
                null != this.leftPage && this.root.pages[this.leftPage].$shadow.css({ opacity: 0 }),
                null != this.leftBackPage && this.root.pages[this.leftBackPage].$shadow.css({ opacity: 0 }),
                null != this.leftBelowPage && this.root.pages[this.leftBelowPage].$shadow.css({ opacity: 0 }),
                null != this.rightPage && this.root.pages[this.rightPage].$shadow.css({ opacity: 0 }),
                null != this.rightBackPage && this.root.pages[this.rightBackPage].$shadow.css({ opacity: 0 }),
                null != this.rightBelowPage && this.root.pages[this.rightBelowPage].$shadow.css({ opacity: 0 }),
                this.updateBookLayout(),
                this.root._onShowPage(t);
        },
        gotoPage: function (t) {
            if ((this._stopAnimation(!0), (t = this._normalizePageIndex(t)), this.leftPage != t && this.rightPage != t)) {
                var o = t,
                    i = o < this.root.currPage ? 180 : -180;
                i < 0
                    ? (null != this.rightBackPage && this.root.pages[this.rightBackPage].css({ display: "none", transform: "", "z-index": 0 }),
                      null != this.rightBelowPage && this.root.pages[this.rightBelowPage].css({ display: "none", transform: "", "z-index": 0 }),
                      this._isPageLeft(o) ? ((this.rightBackPage = o), (this.rightBelowPage = this._getRightPageIndex(o))) : ((this.rightBackPage = this._getLeftPageIndex(o)), (this.rightBelowPage = o)))
                    : (null != this.leftBackPage && this.root.pages[this.leftBackPage].css({ display: "none", transform: "", "z-index": 0 }),
                      null != this.leftBelowPage && this.root.pages[this.leftBelowPage].css({ display: "none", transform: "", "z-index": 0 }),
                      this._isPageRight(o) ? ((this.leftBackPage = o), (this.leftBelowPage = this._getLeftPageIndex(o))) : ((this.leftBackPage = this._getRightPageIndex(o)), (this.leftBelowPage = o))),
                    this._animateTurnPage(0, i);
            }
        },
        gotoNext: function () {
            null != this.rightBackPage && this.gotoPage(this.rightBackPage);
        },
        gotoPrev: function () {
            null != this.leftBackPage && this.gotoPage(this.leftBackPage);
        },
        onSwipeDown: function (t) {
            (this.swipe.startY = this.swipe.endY = t.pageY),
                (this.swipe.startX = this.swipe.endX = t.pageX),
                (this.swipe.startTouch = !0),
                this._stopAnimation(),
                (this.swipe.prevAngle = this.swipe.angle),
                (this.swipe.angle = this.swipe.startAngle);
        },
        onSwipeMove: function (t) {
            this.swipe.startTouch &&
                ((this.swipe.endY = t.pageY),
                (this.swipe.endX = t.pageX),
                (this.swipe.diffY = this.swipe.endY - this.swipe.startY),
                (this.swipe.diffX = this.swipe.endX - this.swipe.startX),
                (this.swipe.prevAngle = this.swipe.angle),
                (this.swipe.angle = this.swipe.startAngle + (this.swipe.diffX / (this.root.controls.$bookWrap.width() / 2)) * 180),
                this._setAngle(this.swipe.angle));
        },
        onSwipeUp: function (t) {
            if (this.swipe.startTouch) {
                this.swipe.startTouch = !1;
                var o = this.swipe.angle,
                    i = Math.abs(this.swipe.angle) < this.swipe.angleThreshold ? 0 : this.swipe.angle < 0 ? -180 : 180;
                if ((((i < 0 && 0 < this.swipe.angle - this.swipe.prevAngle) || (0 < i && this.swipe.angle - this.swipe.prevAngle < 0)) && (i = 0), i == o || (0 < i && null == this.leftPage) || (i < 0 && null == this.rightPage)))
                    return void this._clearSwipe();
                this._animateTurnPage(o, i).always(function () {});
            }
        },
    }),
        (n.prototype = {
            _normalizePageIndex: function (t) {
                return t ? (t < 0 ? 0 : t > this.root.pages.length - 1 ? this.root.pages.length - 1 : t) : 0;
            },
            _getPrevPageIndex: function (t) {
                return (t || 0 == t) && (t -= 1), t < 0 || t > this.root.pages.length - 1 ? null : t;
            },
            _getNextPageIndex: function (t) {
                return (t || 0 == t) && (t += 1), t < 0 || t > this.root.pages.length - 1 ? null : t;
            },
            _clearSwipe: function () {
                (this.swipe.startY = 0),
                    (this.swipe.startX = 0),
                    (this.swipe.endY = 0),
                    (this.swipe.endX = 0),
                    (this.swipe.diffY = 0),
                    (this.swipe.diffX = 0),
                    (this.swipe.startAngle = 0),
                    (this.swipe.prevAngle = 0),
                    (this.swipe.angle = 0),
                    (this.swipe.startTouch = !1);
            },
            _stopAnimation: function (t) {
                this.$animation && this.$animation.stop(!0, t || !1), (this.$animation = null);
            },
            _setAngle: function (t) {
                t <= -90 ? (t = -90) : 90 <= t && (t = 90);
                Math.abs(t);
                if (t < 0) {
                    if (null == this.nextPage) return;
                    null != this.prevPage && (this.root.pages[this.prevPage].css({ display: "none" }), this.root._setShowHidePageState(this.prevPage, !1)),
                        null != this.currPage &&
                            (this.root.pages[this.currPage].css({ display: "block", transform: "rotateY(" + t + "deg) translateZ(0px)", "z-index": 2 }).$shadow.css({ opacity: 0 }), this.root._setShowHidePageState(this.currPage, !0)),
                        null != this.nextPage && (this.root.pages[this.nextPage].css({ display: "block", transform: "", "z-index": 1 }), this.root._setShowHidePageState(this.nextPage, !0));
                } else if (0 <= t) {
                    if (null == this.prevPage) return;
                    null != this.prevPage &&
                        (this.root.pages[this.prevPage].css({ display: "block", transform: "rotateY(" + (-90 + t) + "deg) translateZ(0px)", "z-index": 2 }).$shadow.css({ opacity: 0 }), this.root._setShowHidePageState(this.prevPage, !0)),
                        null != this.currPage && (this.root.pages[this.currPage].css({ display: "block", transform: "", "z-index": 1 }), this.root._setShowHidePageState(this.currPage, !0)),
                        null != this.nextPage && (this.root.pages[this.nextPage].css({ display: "none" }), this.root._setShowHidePageState(this.nextPage, !1));
                }
            },
            _animateTurnPage: function (t, o) {
                var i = d.Deferred();
                this._stopAnimation();
                var e = this,
                    s = (this.root.config.flipDuration / 90) * Math.abs(o - t);
                return (
                    (this.$animation = d({ angle: t })),
                    this.$animation.animate(
                        { angle: o },
                        {
                            duration: s,
                            easing: "linear",
                            done: function () {
                                e.swipe.startAngle = 0;
                                var t = (e.$animation = null);
                                null != (t = 90 == o ? e.prevPage : -90 == o ? e.nextPage : null != e.currPage ? e.currPage : null) && e.showPage(t), i.resolve();
                            },
                            fail: function () {
                                i.reject();
                            },
                            step: function (t) {
                                (e.swipe.startAngle = t), e._setAngle(t);
                            },
                        }
                    ),
                    i.promise()
                );
            },
            updateBook: function (t) {
                for (var o = 0, i = this.root.pages.length; o < i; o++) {
                    var e = this.root.pages[o];
                    e.toggleClass("ipgs-right", !0).removeClass("ipgs-show").addClass("ipgs-hide"), (e.pageIndex = o);
                    d(".ipgs-page-data", e);
                }
                t && this.showPage(this.root.currPage);
            },
            updateBookLayout: function () {},
            showPage: function (t) {
                var o = (t = this._normalizePageIndex(t)),
                    i = this._getPrevPageIndex(o),
                    e = this._getNextPageIndex(o);
                this.root._loadPageData(o), this.root.config.preloadNeighbours && (this.root._loadPageData(i), this.root._loadPageData(e));
                for (var s = 0, a = this.root.pages.length; s < a; s++) {
                    var n = "none",
                        h = 0,
                        r = !1;
                    s == o && ((n = "block"), (h = 1), (r = !0)), this.root.pages[s].css({ display: n, top: 0, left: 0, transform: "", "z-index": h }), this.root._setShowHidePageState(s, r);
                }
                (this.root.currPage = t),
                    (this.currPage = o),
                    (this.prevPage = i),
                    (this.nextPage = e),
                    null != this.currPage && this.root.pages[this.currPage].$shadow.css({ opacity: 0 }),
                    null != this.prevPage && this.root.pages[this.prevPage].$shadow.css({ opacity: 0 }),
                    null != this.nextPage && this.root.pages[this.nextPage].$shadow.css({ opacity: 0 }),
                    this.updateBookLayout(),
                    this.root._onShowPage(t);
            },
            gotoPage: function (t) {
                if ((this._stopAnimation(!0), (t = this._normalizePageIndex(t)), this.currPage != t)) {
                    var o = t,
                        i = o < this.currPage ? 90 : -90;
                    i < 0
                        ? (null != this.prevPage && this.root.pages[this.prevPage].css({ display: "none", transform: "", "z-index": 0 }), (this.nextPage = o))
                        : (null != this.nextPage && this.root.pages[this.nextPage].css({ display: "none", transform: "", "z-index": 0 }), (this.prevPage = o)),
                        this._animateTurnPage(0, i);
                }
            },
            gotoNext: function () {
                null != this.nextPage && this.gotoPage(this.nextPage);
            },
            gotoPrev: function () {
                null != this.prevPage && this.gotoPage(this.prevPage);
            },
            onSwipeDown: function (t) {
                (this.swipe.startY = this.swipe.endY = t.pageY),
                    (this.swipe.startX = this.swipe.endX = t.pageX),
                    (this.swipe.startTouch = !0),
                    this._stopAnimation(),
                    (this.swipe.prevAngle = this.swipe.angle),
                    (this.swipe.angle = this.swipe.startAngle);
            },
            onSwipeMove: function (t) {
                this.swipe.startTouch &&
                    ((this.swipe.endY = t.pageY),
                    (this.swipe.endX = t.pageX),
                    (this.swipe.diffY = this.swipe.endY - this.swipe.startY),
                    (this.swipe.diffX = this.swipe.endX - this.swipe.startX),
                    (this.swipe.prevAngle = this.swipe.angle),
                    (this.swipe.angle = this.swipe.startAngle + (this.swipe.diffX / this.root.controls.$bookWrap.width()) * 180),
                    this._setAngle(this.swipe.angle));
            },
            onSwipeUp: function (t) {
                if (this.swipe.startTouch) {
                    this.swipe.startTouch = !1;
                    var o = this.swipe.angle,
                        i = Math.abs(this.swipe.angle) < this.swipe.angleThreshold ? 0 : this.swipe.angle < 0 ? -90 : 90;
                    if ((((i < 0 && 0 < this.swipe.angle - this.swipe.prevAngle) || (0 < i && this.swipe.angle - this.swipe.prevAngle < 0)) && (i = 0), i == o || (0 < i && null == this.prevPage) || (i < 0 && null == this.nextPage)))
                        return void this._clearSwipe();
                    this._animateTurnPage(o, i).always(function () {});
                }
            },
        }),
        (b.prototype = {
            VERSION: "1.3.4",
            defaults: {
                bookEngine: "TwoPageFlip",
                bookEnginePortrait: null,
                bookEngineLandscape: null,
                ratioPortraitToLandscape: 1.3,
                bookTheme: "default",
                pageWidth: 300,
                pageHeight: 360,
                pageStart: 1,
                pdfUrl: null,
                pdfAutoCreatePages: !(h.prototype = {
                    _normalizePageIndex: function (t) {
                        return t ? (t < 0 ? 0 : t > this.root.pages.length - 1 ? this.root.pages.length - 1 : t) : 0;
                    },
                    _getPrevPageIndex: function (t) {
                        return (t || 0 == t) && (t -= 1), t < 0 || t > this.root.pages.length - 1 ? null : t;
                    },
                    _getNextPageIndex: function (t) {
                        return (t || 0 == t) && (t += 1), t < 0 || t > this.root.pages.length - 1 ? null : t;
                    },
                    _clearSwipe: function () {
                        (this.swipe.startY = 0),
                            (this.swipe.startX = 0),
                            (this.swipe.endY = 0),
                            (this.swipe.endX = 0),
                            (this.swipe.diffY = 0),
                            (this.swipe.diffX = 0),
                            (this.swipe.startOffset = 0),
                            (this.swipe.prevOffset = 0),
                            (this.swipe.offset = 0),
                            (this.swipe.startTouch = !1);
                    },
                    _stopAnimation: function (t) {
                        this.$animation && this.$animation.stop(!0, t || !1), (this.$animation = null);
                    },
                    _setOffset: function (t) {
                        t <= -50 ? (t = -50) : 50 <= t && (t = 50);
                        var o = this.root.controls.$book.width(),
                            i = this.root.controls.$bookWrap.width() / o;
                        this.root.config.autoFit || (this.root.config.responsive && i < 1) || (i = 1);
                        var e = (e = this.root.$container.width() / 2 + (this.root.pageWidth * i) / 2) / i,
                            s = this.config.pageFade ? Math.abs(t) / 50 : 1,
                            a = this.config.pageFade ? 1 - s : 1;
                        if ((t = (e * t) / 50) < 0) {
                            if (null == this.nextPage) return;
                            null != this.prevPage && (this.root.pages[this.prevPage].css({ display: "none" }), this.root._setShowHidePageState(this.prevPage, !1)),
                                null != this.currPage &&
                                    (this.root.pages[this.currPage].css({ display: "block", transform: "translateX(" + t + "px) translateZ(0px)", "z-index": 2, opacity: a }), this.root._setShowHidePageState(this.currPage, !0)),
                                null != this.nextPage &&
                                    (this.root.pages[this.nextPage].css({ display: "block", transform: "translateX(" + (e + t) + "px) translateZ(0px)", "z-index": 1, opacity: s }), this.root._setShowHidePageState(this.nextPage, !0));
                        } else if (0 <= t) {
                            if (null == this.prevPage) return;
                            null != this.prevPage &&
                                (this.root.pages[this.prevPage].css({ display: "block", transform: "translateX(" + (-e + t) + "px) translateZ(0px)", "z-index": 1, opacity: s }), this.root._setShowHidePageState(this.prevPage, !0)),
                                null != this.currPage &&
                                    (this.root.pages[this.currPage].css({ display: "block", transform: "translateX(" + t + "px) translateZ(0px)", "z-index": 2, opacity: a }), this.root._setShowHidePageState(this.currPage, !0)),
                                null != this.nextPage && (this.root.pages[this.nextPage].css({ display: "none" }), this.root._setShowHidePageState(this.nextPage, !1));
                        }
                    },
                    _animateSwipePage: function (t, o) {
                        var i = d.Deferred();
                        this._stopAnimation();
                        var e = this,
                            s = (this.root.config.flipDuration / 90) * Math.abs(o - t);
                        return (
                            (this.$animation = d({ offset: t })),
                            this.$animation.animate(
                                { offset: o },
                                {
                                    duration: s,
                                    easing: "linear",
                                    done: function () {
                                        e.swipe.startOffset = 0;
                                        var t = (e.$animation = null);
                                        null != (t = 50 == o ? e.prevPage : -50 == o ? e.nextPage : null != e.currPage ? e.currPage : null) && e.showPage(t), i.resolve();
                                    },
                                    fail: function () {
                                        i.reject();
                                    },
                                    step: function (t) {
                                        (e.swipe.startOffset = t), e._setOffset(t);
                                    },
                                }
                            ),
                            i.promise()
                        );
                    },
                    updateBook: function (t) {
                        for (var o = 0, i = this.root.pages.length; o < i; o++) {
                            var e = this.root.pages[o];
                            e.removeClass("ipgs-show").addClass("ipgs-hide"), (e.pageIndex = o);
                            d(".ipgs-page-data", e);
                        }
                        t && this.showPage(this.root.currPage);
                    },
                    updateBookLayout: function () {},
                    showPage: function (t) {
                        var o = (t = this._normalizePageIndex(t)),
                            i = this._getPrevPageIndex(o),
                            e = this._getNextPageIndex(o);
                        this.root._loadPageData(o), this.root.config.preloadNeighbours && (this.root._loadPageData(i), this.root._loadPageData(e));
                        for (var s = 0, a = this.root.pages.length; s < a; s++) {
                            var n = "none",
                                h = 0,
                                r = !1;
                            s == o && ((n = "block"), (h = 1), (r = !0)), this.root.pages[s].css({ display: n, top: 0, left: 0, transform: "", opacity: "", "z-index": h }), this.root._setShowHidePageState(s, r);
                        }
                        (this.root.currPage = t),
                            (this.currPage = o),
                            (this.prevPage = i),
                            (this.nextPage = e),
                            null != this.currPage && this.root.pages[this.currPage].$shadow.css({ opacity: 0 }),
                            null != this.prevPage && this.root.pages[this.prevPage].$shadow.css({ opacity: 0 }),
                            null != this.nextPage && this.root.pages[this.nextPage].$shadow.css({ opacity: 0 }),
                            this.updateBookLayout(),
                            this.root._onShowPage(t);
                    },
                    gotoPage: function (t) {
                        if ((this._stopAnimation(!0), (t = this._normalizePageIndex(t)), this.currPage != t)) {
                            var o = t,
                                i = o < this.currPage ? 50 : -50;
                            i < 0
                                ? (null != this.prevPage && this.root.pages[this.prevPage].css({ display: "none", transform: "", "z-index": 0 }), (this.nextPage = o))
                                : (null != this.nextPage && this.root.pages[this.nextPage].css({ display: "none", transform: "", "z-index": 0 }), (this.prevPage = o)),
                                this._animateSwipePage(0, i);
                        }
                    },
                    gotoNext: function () {
                        null != this.nextPage && this.gotoPage(this.nextPage);
                    },
                    gotoPrev: function () {
                        null != this.prevPage && this.gotoPage(this.prevPage);
                    },
                    onSwipeDown: function (t) {
                        (this.swipe.startY = this.swipe.endY = t.pageY),
                            (this.swipe.startX = this.swipe.endX = t.pageX),
                            (this.swipe.startTouch = !0),
                            this._stopAnimation(),
                            (this.swipe.prevOffset = this.swipe.offset),
                            (this.swipe.offset = this.swipe.startOffset);
                    },
                    onSwipeMove: function (t) {
                        this.swipe.startTouch &&
                            ((this.swipe.endY = t.pageY),
                            (this.swipe.endX = t.pageX),
                            (this.swipe.diffY = this.swipe.endY - this.swipe.startY),
                            (this.swipe.diffX = this.swipe.endX - this.swipe.startX),
                            (this.swipe.prevOffset = this.swipe.offset),
                            (this.swipe.offset = this.swipe.startOffset + (this.swipe.diffX / this.root.controls.$bookWrap.width()) * 100),
                            this._setOffset(this.swipe.offset));
                    },
                    onSwipeUp: function (t) {
                        if (this.swipe.startTouch) {
                            this.swipe.startTouch = !1;
                            var o = ((this.root.controls.$bookWrap.width() / 2 + this.root.pageWidth / 2) * this.swipe.offset) / 50,
                                i = this.swipe.offset,
                                e = Math.abs(o) < this.swipe.offsetThreshold ? 0 : this.swipe.offset < 0 ? -50 : 50;
                            if (
                                (((e < 0 && 0 < this.swipe.offset - this.swipe.prevOffset) || (0 < e && this.swipe.offset - this.swipe.prevOffset < 0)) && (e = 0),
                                e == i || (0 < e && null == this.prevPage) || (e < 0 && null == this.nextPage))
                            )
                                return void this._clearSwipe();
                            this._animateSwipePage(i, e).always(function () {});
                        }
                    },
                }),
                pdfBookSizeFromDocument: !1,
                pdfDisableRangeRequests: !0,
                preloadNeighbours: !1,
                responsive: !0,
                autoFit: !1,
                autoHeight: !0,
                flipSound: !1,
                flipSoundUrl: null,
                perspective: 1500,
                padding: { top: 10, right: 10, bottom: 10, left: 10 },
                flipDuration: 300,
                pageNumbers: !0,
                pageNumbersFirst: 1,
                pageNumbersHidden: [],
                pageImagesUrl: null,
                pageImagesFirst: 1,
                pageImagesCount: 0,
                prevnextButtons: !0,
                touchNavigation: !0,
                keyboardNavigation: !0,
                mouseDragNavigation: !0,
                mousePageClickNavigation: !1,
                mouseWheelNavigation: !1,
                mouseWheelPreventDefault: !0,
                zoom: 1,
                zoomMax: 7,
                zoomMin: 1,
                zoomStep: 0.05,
                zoomFocal: !0,
                dblClickZoomDefault: !1,
                mouseWheelZoom: !0,
                keyboardZoom: !0,
                pinchZoom: !0,
                pinchZoomCoef: 0.005,
                toolbar: !0,
                toolbarControls: [
                    { type: "share", active: !0, title: "share", icon: "ipgs-icon-share", optional: !1 },
                    { type: "outline", active: !0, title: "toggle outline/bookmarks", icon: "ipgs-icon-outline", optional: !1 },
                    { type: "thumbnails", active: !0, title: "toggle thumbnails", icon: "ipgs-icon-thumbnails", optional: !1 },
                    { type: "gotofirst", active: !0, title: "goto first page", icon: "ipgs-icon-gotofirst", optional: !1 },
                    { type: "prev", active: !0, title: "prev page", icon: "ipgs-icon-prev", optional: !1 },
                    { type: "pagenumber", active: !0, title: "goto page number", icon: "ipgs-icon-pagenumber", optional: !1 },
                    { type: "next", active: !0, title: "next page", icon: "ipgs-icon-next", optional: !1 },
                    { type: "gotolast", active: !0, title: "goto last page", icon: "ipgs-icon-gotolast", optional: !1 },
                    { type: "zoom-in", active: !0, title: "zoom in", icon: "ipgs-icon-zoom-in", optional: !1 },
                    { type: "zoom-out", active: !0, title: "zoom out", icon: "ipgs-icon-zoom-out", optional: !1 },
                    { type: "zoom-default", active: !0, title: "zoom default", icon: "ipgs-icon-zoom-default", optional: !0 },
                    { type: "optional", active: !0, title: "optional", icon: "ipgs-icon-optional", optional: !1 },
                    { type: "fullscreen", active: !0, title: "toggle fullscreen", icon: "ipgs-icon-fullscreen", optional: !0 },
                    { type: "sound", active: !0, title: "turn on/off flip sound", icon: "ipgs-icon-sound", optional: !0 },
                    { type: "download", active: !1, title: "download pdf", icon: "ipgs-icon-download", optional: !0 },
                ],
                autoEnableThumbnails: !1,
                autoEnableOutline: !1,
                autoEnableShare: !1,
                bookmarks: [],
                shareControls: [
                    { type: "facebook", active: !0, title: "facebook", icon: "ipgs-share-icon-facebook" },
                    { type: "twitter", active: !0, title: "twitter", icon: "ipgs-share-icon-twitter" },
                    { type: "google", active: !0, title: "google+", icon: "ipgs-share-icon-google" },
                    { type: "linkedin", active: !0, title: "linkedin", icon: "ipgs-share-icon-linkedin" },
                    { type: "email", active: !0, title: "email", icon: "ipgs-share-icon-email" },
                ],
                twoPageFlip: {},
                onePageFlip: {},
                onePageSwipe: { pageFade: !0 },
                onLoad: null,
                txtFailedEngine: "Can not find the book engine module specified",
                txtPDFLoading: "Loading PDF document",
                txtPDFFailedToLoad: "Failed to load PDF document",
                txtShareDlgTitle: "Share",
            },
            touchMouseEvent: { down: "touchmousedown", up: "touchmouseup", move: "touchmousemove" },
            $body: null,
            util: null,
            _init: function (t, o) {
                (this.$body = d("body")), (this.$container = t), (this.config = o), (this.themeClass = o.bookTheme ? "ipgs-theme-" + o.bookTheme.toLowerCase() : null), this._create();
            },
            _create: function () {
                this._buildDOM(), this._bind();
                var i = this;
                function e() {
                    switch (((i.pageWidth = i.config.pageWidth), (i.pageHeight = i.config.pageHeight), (i.bookHeight = i.config.pageHeight), (i.engineClass = "ipgs-" + i.config.bookEngine.toLowerCase()), (i.engine = null), i.engineClass)) {
                        case "ipgs-twopageflip":
                            (i.bookWidth = 2 * i.config.pageWidth), (i.engine = new a(i, d.extend(!0, {}, i.config.twoPageFlip)));
                            break;
                        case "ipgs-onepageflip":
                            (i.bookWidth = i.config.pageWidth), (i.engine = new n(i, d.extend(!0, {}, i.config.onePageFlip)));
                            break;
                        case "ipgs-onepageswipe":
                            (i.bookWidth = i.config.pageWidth), (i.engine = new h(i, d.extend(!0, {}, i.config.onePageSwipe)));
                            break;
                        default:
                            return console.error(i.config.txtFailedEngine + " [" + i.engineClass + "]"), void i._updateLoadingInfo(i.config.txtFailedEngine);
                    }
                    i.controls.$book.css({ width: i.bookWidth, height: i.bookHeight }),
                        i._initPages(),
                        i._initThumbnails(),
                        i._initBookmarks(),
                        i._setZoom({ zoom: i.config.zoom }, !0, !0),
                        i._updateSize(),
                        i._updateBookEngine(),
                        i._ready();
                }
                if (this.config.pdfUrl) {
                    (PDFJS.disableAutoFetch = !0), (PDFJS.disableStream = !0), (PDFJS.disableRange = i.config.pdfDisableRangeRequests), (PDFJS.externalLinkTarget = PDFJS.LinkTarget.BLANK);
                    var t = PDFJS.getDocument(this.config.pdfUrl);
                    t.then(
                        function (t) {
                            (i.pdf = t),
                                i.config.pdfBookSizeFromDocument
                                    ? i.pdf.getPage(1).then(
                                          function (t) {
                                              var o = t.getViewport(1);
                                              (i.config.pageWidth = parseInt(o.width, 10)), (i.config.pageHeight = parseInt(o.height, 10)), e();
                                          },
                                          function () {
                                              e();
                                          }
                                      )
                                    : e();
                        },
                        function (t) {
                            console.error(t.message), i._updateLoadingInfo(i.config.txtPDFFailedToLoad);
                        }
                    ),
                        (t.onProgress = function (t) {
                            var o = (100 * t.loaded) / t.total;
                            isNaN(o)
                                ? t && t.loaded
                                    ? i._updateLoadingInfo(i.config.txtPDFLoading + " " + (Math.ceil(t.loaded / 1e4) / 100).toString() + "Mb")
                                    : i._updateLoadingInfo(i.config.txtPDFLoading)
                                : i._updateLoadingInfo(i.config.txtPDFLoading + " " + o.toString().split(".")[0] + "%");
                        });
                } else e();
            },
            _ready: function () {
                if (this.config.onLoad) {
                    var t = null;
                    if ("string" == typeof this.config.onLoad)
                        try {
                            t = new Function(this.config.onLoad);
                        } catch (t) {
                            console.error("Can not compile onLoad function: " + t.message);
                        }
                    else "function" == typeof this.config.onLoad && (t = this.config.onLoad);
                    t && t.call(this);
                }
                this.controls.$book.addClass("ipgs-no-transition"), this.$container.addClass("ipgs-ready"), (this.ready = !0), this.$container.trigger("kurasa:ready", [this]);
                var o = this;
                setTimeout(function () {
                    o.controls.$book.removeClass("ipgs-no-transition");
                }, 1);
                var i = this.config.flipSound;
                (this.config.flipSound = !1),
                    this._showPage(this.config.pageStart - 1),
                    (this.config.flipSound = i),
                    this.config.toolbar && (this.config.autoEnableThumbnails && this._onToggleThumbnails(), this.config.autoEnableOutline && this._onToggleOutline(), this.config.autoEnableShare && this._onToggleShare());
            },
            _buildDOM: function () {
                this.$container.addClass("ipgs").addClass(this.engineClass).addClass(this.themeClass),
                    this.$container.wrapInner(d("<div></div>").addClass("ipgs-pages").css("display", "none")),
                    (this.controls.$stage = d("<div></div>").addClass("ipgs-stage").attr("tabindex", "1")),
                    (this.controls.$audio = d("<audio preload></audio>").addClass("ipgs-audio")),
                    (this.controls.$prevBtn = d("<div></div>").addClass("ipgs-prev-page")),
                    (this.controls.$nextBtn = d("<div></div>").addClass("ipgs-next-page")),
                    (this.controls.$stageMove = d("<div></div>").addClass("ipgs-stage-move")),
                    (this.controls.$bookLoading = d("<div></div>").addClass("ipgs-book-loading")),
                    (this.controls.$bookLoadingInfo = d("<div></div>").addClass("ipgs-book-loading-info")),
                    (this.controls.$bookTransform = d("<div></div>").addClass("ipgs-book-transform")),
                    (this.controls.$bookWrap = d("<div></div>").addClass("ipgs-book-wrap")),
                    (this.controls.$bookSize = d("<div></div>").addClass("ipgs-book-size")),
                    (this.controls.$book = d("<div></div>").addClass("ipgs-book").css({ perspective: this.config.perspective })),
                    this.config.flipSoundUrl && this.controls.$audio.append(d('<source src="' + this.config.flipSoundUrl + '">')),
                    this.controls.$bookSize.append(this.controls.$book),
                    this.controls.$bookTransform.append(this.controls.$bookWrap),
                    this.controls.$bookWrap.append(this.controls.$bookSize),
                    this.controls.$stage.append(this.controls.$bookTransform, this.controls.$stageMove),
                    this._updateStagePadding(this.config.padding),
                    this.$container.append(this.controls.$stage, this.controls.$audio),
                    this.config.prevnextButtons && this.$container.append(this.controls.$prevBtn, this.controls.$nextBtn),
                    this._buildToolbarDOM(),
                    this.$container.append(this.controls.$bookLoading, this.controls.$bookLoadingInfo),
                    this.$container.is(":hidden") && this.$container.css("display", "block");
            },
            _updateStagePadding: function (t) {
                "number" == typeof t
                    ? ((this.stagePadding.top = t), (this.stagePadding.right = t), (this.stagePadding.bottom = t), (this.stagePadding.left = t))
                    : ((this.stagePadding.top = t.hasOwnProperty("top") ? t.top : 0),
                      (this.stagePadding.right = t.hasOwnProperty("right") ? t.right : 0),
                      (this.stagePadding.bottom = t.hasOwnProperty("bottom") ? t.bottom : 0),
                      (this.stagePadding.left = t.hasOwnProperty("left") ? t.left : 0));
            },
            _buildToolbarDOM: function () {
                if (this.config.toolbar) {
                    (this.controls.$toolbar = d("<div></div>").addClass("ipgs-toolbar")), (this.controls.toolbar = {});
                    for (var t = [], o = [], i = 0; i < this.config.toolbarControls.length; i++) {
                        var e = this.config.toolbarControls[i],
                            s = d("<i></i>").addClass(e.icon),
                            a = d("<div></div>")
                                .addClass("ipgs-control")
                                .addClass("ipgs-control-" + e.type)
                                .addClass(e.active ? "" : "ipgs-hidden")
                                .attr("title", e.title)
                                .append(s);
                        switch ((a.on("click", d.proxy(this._onToolbarControlClick, this)), e.type)) {
                            case "gotofirst":
                                (this.controls.toolbar.$gotofirst = a).on("click", d.proxy(this._onPageFirst, this));
                                break;
                            case "prev":
                                (this.controls.toolbar.$prev = a).on("click", d.proxy(this._onPagePrev, this));
                                break;
                            case "pagenumber":
                                (this.controls.toolbar.$pagenumber = a),
                                    this.controls.toolbar.$pagenumber.empty(),
                                    (this.controls.toolbar.$pagenumberLabel = d("<span></span>").addClass("ipgs-pagenumber-label")),
                                    (this.controls.toolbar.$pagenumberInput = d("<input>").addClass("ipgs-pagenumber-input").attr("type", "text")),
                                    this.controls.toolbar.$pagenumberLabel.on("click", d.proxy(this._onPageNumberLabelClick, this)),
                                    this.controls.toolbar.$pagenumberInput.on("click", d.proxy(this._onPageNumberInputClick, this)),
                                    this.controls.toolbar.$pagenumberInput.on("keyup", d.proxy(this._onPageNumberInputKeyup, this)),
                                    this.controls.toolbar.$pagenumber.append(this.controls.toolbar.$pagenumberLabel, this.controls.toolbar.$pagenumberInput);
                                break;
                            case "next":
                                (this.controls.toolbar.$next = a).on("click", d.proxy(this._onPageNext, this));
                                break;
                            case "gotolast":
                                (this.controls.toolbar.$gotolast = a).on("click", d.proxy(this._onPageLast, this));
                                break;
                            case "outline":
                                (this.controls.$outline = d("<div></div>").addClass("ipgs-outline")),
                                    this.$container.append(this.controls.$outline),
                                    this.controls.$outline.on("click", ".ipgs-bookmark", d.proxy(this._onBookmarkClick, this)),
                                    (this.controls.toolbar.$outline = a).on("click", d.proxy(this._onToggleOutline, this));
                                break;
                            case "thumbnails":
                                (this.controls.$thumbnails = d("<div></div>").addClass("ipgs-thumbnails")),
                                    this.$container.append(this.controls.$thumbnails),
                                    this.controls.$thumbnails.on("scroll", d.proxy(this._onThumbnailsScroll, this)),
                                    this.controls.$thumbnails.on("click", ".ipgs-thumb", d.proxy(this._onThumbClick, this)),
                                    (this.controls.toolbar.$thumbnails = a).on("click", d.proxy(this._onToggleThumbnails, this));
                                break;
                            case "zoom-in":
                                (this.controls.toolbar.$zoomin = a).on("click", d.proxy(this._onZoomIn, this));
                                break;
                            case "zoom-out":
                                (this.controls.toolbar.$zoomout = a).on("click", d.proxy(this._onZoomOut, this));
                                break;
                            case "zoom-default":
                                (this.controls.toolbar.$zoomdefault = a).on("click", d.proxy(this._onZoomDefault, this));
                                break;
                            case "fullscreen":
                                (this.controls.toolbar.$fullscreen = a).on("click", d.proxy(this._onToggleFullscreen, this));
                                break;
                            case "share":
                                (this.controls.$share = d("<div></div>").addClass("ipgs-share")),
                                    (this.controls.$shareDialog = d("<div></div>").addClass("ipgs-share-dialog")),
                                    (this.controls.$shareHeader = d("<div></div>").addClass("ipgs-share-header").html(this.config.txtShareDlgTitle)),
                                    (this.controls.$shareControls = d("<div></div>").addClass("ipgs-share-controls"));
                                for (var n = 0; n < this.config.shareControls.length; n++) {
                                    var h = this.config.shareControls[n];
                                    if (h.active) {
                                        var r = d("<i></i>").addClass(h.icon),
                                            l = d("<div></div>")
                                                .addClass("ipgs-share-control-" + e.type)
                                                .attr("title", h.title)
                                                .append(r);
                                        this.controls.$shareControls.append(l), l.on("click", d.proxy(this._onShareClick, this, h.type));
                                    }
                                }
                                this.controls.$shareDialog.append(this.controls.$shareHeader, this.controls.$shareControls),
                                    this.controls.$share.append(this.controls.$shareDialog),
                                    this.$container.append(this.controls.$share),
                                    this.controls.$share.on("click", d.proxy(this._onToggleShare, this)),
                                    (this.controls.toolbar.$share = a).on("click", d.proxy(this._onToggleShare, this));
                                break;
                            case "optional":
                                (this.controls.toolbar.$optional = a),
                                    (this.controls.toolbar.$optionalBar = d("<div></div>").addClass("ipgs-optional-bar")),
                                    this.controls.toolbar.$optional.append(this.controls.toolbar.$optionalBar),
                                    a.on("click", d.proxy(this._onToggleOptional, this));
                                break;
                            case "download":
                                (this.controls.toolbar.$download = a).on("click", d.proxy(this._onDownload, this));
                                break;
                            case "sound":
                                (this.controls.toolbar.$sound = a), this.controls.toolbar.$sound.toggleClass("ipgs-disable", !this.config.flipSound), a.on("click", d.proxy(this._onToggleSound, this));
                        }
                        e.optional ? o.push(a) : t.push(a);
                    }
                    for (i = 0; i < t.length; i++) this.controls.$toolbar.append(t[i]);
                    for (i = 0; i < o.length; i++) this.controls.toolbar.$optionalBar.append(o[i]);
                    this.$container.append(this.controls.$toolbar);
                }
            },
            _bind: function () {
                "ontouchstart" in p &&
                    this.config.touchNavigation &&
                    (this.controls.$stage.on("touchstart", d.proxy(this._onBookTouch, this)), this.controls.$stage.on("touchmove", d.proxy(this._onBookTouch, this)), this.controls.$stage.on("touchend", d.proxy(this._onBookTouch, this))),
                    this.config.mouseDragNavigation && this.controls.$stage.on("mousedown", d.proxy(this._onBookMouse, this)),
                    this.controls.$stage.on(this.touchMouseEvent.down, d.proxy(this._onSwipeDown, this)),
                    this.controls.$stage.on(this.touchMouseEvent.move, d.proxy(this._onSwipeMove, this)),
                    this.controls.$stage.on(this.touchMouseEvent.up, d.proxy(this._onSwipeUp, this)),
                    this.config.mousePageClickNavigation && this.controls.$stage.on("click", d.proxy(this._onBookMouseClick, this)),
                    this.config.mouseWheelNavigation && this.controls.$stage.on("mousewheel", d.proxy(this._onMouseWheelNavigation, this)),
                    this.config.keyboardNavigation && this.controls.$stage.on("keydown", d.proxy(this._onKeyboardNavigation, this)),
                    this.config.dblClickZoomDefault && (this.controls.$stage.on("dblclick", d.proxy(this._onDblClickZoomDefault, this)), this.controls.$stage.on("touchstart", d.proxy(this._onDblTapZoomDefault, this))),
                    this.config.mouseWheelZoom && this.controls.$stage.on("mousewheel", d.proxy(this._onMouseWheelZoom, this)),
                    this.config.keyboardZoom && this.controls.$stage.on("keydown", d.proxy(this._onKeyboardZoom, this)),
                    this.config.pinchZoom && (this.controls.$stage.on("touchstart", d.proxy(this._onPinchZoomTouchStart, this)), this.controls.$stage.on("touchend", d.proxy(this._onPinchZoomTouchEnd, this))),
                    this.config.prevnextButtons && (this.controls.$prevBtn.on("click", d.proxy(this._onPrevBtnClick, this)), this.controls.$nextBtn.on("click", d.proxy(this._onNextBtnClick, this))),
                    (this.config.bookEngineLandscape || this.config.bookEnginePortrait) && d(p).on("orientationchange", d.proxy(this._onOrientationChange, this)),
                    d(p).on("resize", d.proxy(this._onResize, this)),
                    d(p).on("scrollbar", d.proxy(this._onScrollbar, this)),
                    this.$container.on("fullscreenchange mozfullscreenchange webkitfullscreenchange msfullscreenchange", d.proxy(this._onFullScreenChange, this));
            },
            _unbind: function () {
                this.controls.$stage.off("touchstart", d.proxy(this._onBookTouch, this)),
                    this.controls.$stage.off("touchmove", d.proxy(this._onBookTouch, this)),
                    this.controls.$stage.off("touchend", d.proxy(this._onBookTouch, this)),
                    this.controls.$stage.off("mousedown", d.proxy(this._onBookMouse, this)),
                    this.controls.$stage.off(this.touchMouseEvent.down, d.proxy(this._onSwipeDown, this)),
                    this.controls.$stage.off(this.touchMouseEvent.move, d.proxy(this._onSwipeMove, this)),
                    this.controls.$stage.off(this.touchMouseEvent.up, d.proxy(this._onSwipeUp, this)),
                    this.controls.$stage.off("click", d.proxy(this._onBookMouseClick, this)),
                    this.controls.$stage.off("mousewheel", d.proxy(this._onMouseWheelNavigation, this)),
                    this.controls.$stage.off("keydown", d.proxy(this._onKeyboardNavigation, this)),
                    this.controls.$stage.off("dblclick", d.proxy(this._onDblClickZoomDefault, this)),
                    this.controls.$stage.off("mousewheel", d.proxy(this._onMouseWheelZoom, this)),
                    this.controls.$stage.off("keydown", d.proxy(this._onKeyboardZoom, this)),
                    this.controls.$stage.off("touchstart", d.proxy(this._onPinchZoomTouchStart, this)),
                    this.controls.$stage.off("touchend", d.proxy(this._onPinchZoomTouchEnd, this)),
                    this.controls.$prevBtn.off("click", d.proxy(this._onPrevBtnClick, this)),
                    this.controls.$nextBtn.off("click", d.proxy(this._onNextBtnClick, this)),
                    d(p).off("orientationchange", d.proxy(this._onOrientationChange, this)),
                    d(p).off("resize", d.proxy(this._onResize, this)),
                    d(p).off("scrollbar", d.proxy(this._onScrollbar, this)),
                    this.$container.off("fullscreenchange mozfullscreenchange webkitfullscreenchange msfullscreenchange", d.proxy(this._onFullScreenChange, this));
            },
            _replaceNumberTemplate: function (t, s) {
                if (t) {
                    return (
                        (s = "" + s),
                        t.replace(/\{\{(x+)\}\}/g, function (t, o) {
                            if (o.length > s.length) {
                                for (var i = "", e = 0; e < o.length; e++) i += "0";
                                return (i + s).slice(-i.length);
                            }
                            return s;
                        })
                    );
                }
                return t;
            },
            _createBlob: function (t, o) {
                return new Blob([t], { type: o });
            },
            _createObjectURL: function (t, o) {
                var i = this._createBlob(t, o);
                return URL.createObjectURL(i);
            },
            _initThumbnails: function () {
                if (this.controls.$thumbnails)
                    for (var t = this.pageHeight / this.pageWidth, o = 0.8 * this.controls.$thumbnails.outerWidth(), i = t * o, e = 0; e < this.pages.length; e++) {
                        var s = this.pages[e],
                            a = d("<div></div>").addClass("ipgs-preloader"),
                            n = d("<div></div>")
                                .addClass("ipgs-number")
                                .text(e + 1),
                            h = d("<div></div>")
                                .css({ width: o + "px", height: i + "px" })
                                .addClass("ipgs-thumb")
                                .addClass("ipgs-loading")
                                .attr("data-page-index", e)
                                .appendTo(this.controls.$thumbnails)
                                .append(a, n);
                        (h.$number = n), (h.thumbLoading = !1), (h.thumbLoaded = !1), (h.image = s.image), (h.pdfPage = s.pdfPage), (s.$thumb = h);
                    }
            },
            _addBookmarks: function (t, o) {
                if (o && 0 < o.length) {
                    var i = d("<div></div>").addClass("ipgs-bookmarks").appendTo(t);
                    t.addClass("ipgs-has-childs");
                    for (var e = 0; e < o.length; e++) {
                        var s = o[e],
                            a = d("<div></div>").addClass("ipgs-state"),
                            n = d("<div></div>").addClass("ipgs-link").html(s.text),
                            h = d("<div></div>").addClass("ipgs-bookmark"),
                            r = s.target ? s.target : "page",
                            l = 0 != s.folded;
                        h.attr("data-link", s.link).attr("data-target", r).toggleClass("ipgs-folded", l), h.append(a, n).appendTo(i), this._addBookmarks(h, s.bookmarks);
                    }
                }
            },
            _initBookmarks: function () {
                this.controls.$outline && this._addBookmarks(this.controls.$outline, this.config.bookmarks);
            },
            _initPages: function () {
                for (var t = this.$container.find(".ipgs-pages"), o = t.children(), i = 0, e = o.length; i < e; i++) d(o[i]).hasClass("ipgs-stage") || d(o[i]).hasClass("ipgs-toolbar") || this._addPage(o[i]);
                if ((t.remove(), this.config.pdfAutoCreatePages && this.pdf))
                    for (i = 0; i < this.pdf.numPages; i++) {
                        var s = d("<div></div>")
                            .addClass("ipgs-no-come-back")
                            .attr("data-ipgs-pdf-page", i + 1);
                        this._addPage(s);
                    }
                if (this.config.pageImagesUrl)
                    for (i = 0; i < this.config.pageImagesCount; i++) {
                        var a = this._replaceNumberTemplate(this.config.pageImagesUrl, this.config.pageImagesFirst + i);
                        s = d("<div></div>").addClass("ipgs-no-come-back").attr("data-ipgs-image", a);
                        this._addPage(s);
                    }
                0 < this.pages.length && (this.pages[0].addClass("ipgs-first"), this.pages[this.pages.length - 1].addClass("ipgs-last"));
                for (i = 0; i < this.pages.length; i++) this.pages[i].attr("data-page-number", i + 1);
                this._updateBook(!1);
            },
            _addPage: function (t) {
                var o = d(t),
                    i = d("<div></div>").addClass("ipgs-preloader"),
                    e = d("<div></div>").addClass("ipgs-image"),
                    s = d("<div></div>").addClass("ipgs-data"),
                    a = d("<div></div>").addClass("ipgs-number"),
                    n = d("<div></div>").addClass("ipgs-shadow"),
                    h = d("<div></div>")
                        .css({ display: "none", width: this.pageWidth + "px", height: this.pageHeight + "px" })
                        .addClass("ipgs-page")
                        .addClass("ipgs-loading")
                        .appendTo(this.controls.$book)
                        .append(e, s, a, n, i);
                (h.$image = e),
                    (h.$data = s),
                    (h.$number = a),
                    (h.$shadow = n),
                    (h.$thumb = null),
                    (h.pageLoading = !1),
                    (h.pageLoaded = !1),
                    (h.zoom = this._getZoom()),
                    (h.image = o.data("ipgs-image")),
                    (h.pdfPage = o.data("ipgs-pdf-page")),
                    (h.showCSSClass = o.data("ipgs-showcssclass")),
                    (h.hideCSSClass = o.data("ipgs-hidecssclass")),
                    o.hasClass("ipgs-no-come-back") || o.addClass("ipgs-come-back"),
                    s.append(o),
                    this.pages.push(h);
            },
            _updateLoadingInfo: function (t) {
                this.controls.$bookLoadingInfo.text(t).addClass("ipgs-active");
            },
            _updateBook: function (t) {
                for (var o = 0, i = this.pages.length; o < i; o++) {
                    var e = this.pages[o];
                    if (((e.pageIndex = o), (e.pageNumber = this.config.pageNumbersFirst + o), this.config.pageNumbers)) {
                        var s = o + 1,
                            a = o - this.pages.length;
                        -1 == d.inArray(s, this.config.pageNumbersHidden) && -1 == d.inArray(a, this.config.pageNumbersHidden) ? e.$number.addClass("ipgs-show").text(e.pageNumber) : e.$number.removeClass("ipgs-show").text("");
                    }
                }
                this.engine.updateBook(t);
            },
            _updateSize: function () {
                var t = this._getZoom(),
                    o = this.bookWidth,
                    i = this.bookHeight,
                    e = this.stagePadding.top,
                    s = this.stagePadding.bottom,
                    a = this.stagePadding.left,
                    n = this.stagePadding.right,
                    h = this.controls.$stage.outerWidth() - a - n;
                if (this.config.autoHeight) {
                    var r = (d = i / o) * (!this.config.autoFit && o < h ? o : h) + e + s;
                    this.$container.css({ height: r });
                }
                var l,
                    g,
                    p,
                    c,
                    u = this.controls.$stage.outerHeight() - e - s,
                    d = 1;
                ((u = u <= 0 ? i : u), this.config.responsive && !this.config.autoFit) && (h < o || u < i) && (d = (c = u / i) < (p = h / o) ? c : p);
                this.config.autoFit && (d = (c = u / i) < (p = h / o) ? c : p);
                (l = (u - i * d) / 2),
                    (g = (h - o * d) / 2),
                    this.controls.$bookTransform.css({ top: l + e + "px", left: g + a + "px" }),
                    this.controls.$bookWrap.css({ width: o * d + "px", height: i * d + "px" }),
                    this.controls.$bookWrap.get(0).offsetHeight,
                    this.controls.$bookSize.css({ transform: "scale(" + (1 / t) * d + ")" }),
                    this._updateThumbnails(),
                    this.engine.updateBookLayout();
            },
            _updateBookEngine: function () {
                var t = this.config.bookEngineLandscape || this.config.bookEngine,
                    o = this.config.bookEnginePortrait || this.config.bookEngine,
                    i = this.stagePadding.top,
                    e = this.stagePadding.bottom,
                    s = this.stagePadding.left,
                    a = this.stagePadding.right;
                (this.controls.$stage.outerWidth() - s - a) / (this.controls.$stage.outerHeight() - i - e) >= this.config.ratioPortraitToLandscape
                    ? (this.$container.addClass("ipgs-landscape").removeClass("ipgs-portrait"), this.setBookEngine(t))
                    : (this.$container.addClass("ipgs-portrait").removeClass("ipgs-landscape"), this.setBookEngine(o));
            },
            _updateThumbnails: function () {
                this.controls.$thumbnails && this._onThumbnailsRefresh();
            },
            _updateZoomPosition: function () {
                var t = this._getZoom();
                1 == t && this._setPosition({ x: 0, y: 0 }, !1);
                var o = this._getPosition();
                this.controls.$bookTransform.css({ transform: "translate3d(" + o.x + "px," + o.y + "px, 0) scale(" + t + ")" }),
                    this.controls.$book.addClass("ipgs-no-transition"),
                    this.controls.$book.css({ width: this.bookWidth * t + "px", height: this.bookHeight * t + "px" });
                for (var i = 0; i < this.pages.length; i++) {
                    var e = this.pages[i];
                    e.css({ width: this.pageWidth * t + "px", height: this.pageHeight * t + "px" }),
                        e.$data.css({ width: this.pageWidth + "px", height: this.pageHeight + "px", transform: "scale(" + t + ")" }),
                        e.hasClass("ipgs-show") && this._loadPageData(e.pageIndex);
                }
                this._updateSize();
                var s = this;
                clearTimeout(s.bookTransitionTimerId),
                    (s.bookTransitionTimerId = setTimeout(function () {
                        s.controls.$book.removeClass("ipgs-no-transition");
                    }, 300));
            },
            _getPosition: function () {
                return { x: this.matrix.m[4], y: this.matrix.m[5] };
            },
            _setPosition: function (t, o) {
                var i = t.x || 0,
                    e = t.y || 0;
                (this.matrix.m[4] = i), (this.matrix.m[5] = e), o && this._updateZoomPosition();
            },
            _setDeltaPosition: function (t) {
                var o = t.dx || 0,
                    i = t.dy || 0,
                    e = this.matrix.inverse().transformPoint(o, i),
                    s = this.matrix.inverse().transformPoint(0, 0),
                    a = e[0] - s[0],
                    n = e[1] - s[1];
                this.matrix.translate(a, n), this._updateZoomPosition();
            },
            _getZoom: function () {
                return this.matrix.m[0];
            },
            _setZoom: function (t, o, i) {
                var e = t.zoom || 1e-6;
                if ((null != this.config.zoomMin && (e = Math.max(this.config.zoomMin, e)), null != this.config.zoomMax && (e = Math.min(this.config.zoomMax, e)), i || e != this._getZoom())) {
                    var s = this.matrix.m[4],
                        a = this.matrix.m[5];
                    this.matrix.reset().translate(s, a).scale(e, e), o && this._updateZoomPosition();
                }
            },
            _setDeltaZoom: function (t) {
                var o = t.zoom || 1,
                    i = t.focalPoint || { x: this.matrix.m[4], y: this.matrix.m[5] };
                this.config.zoomFocal || (i = { x: this.matrix.m[4], y: this.matrix.m[5] });
                var e = this.matrix.m[0] * o;
                null != this.config.zoomMin && e < this.config.zoomMin ? (o = this.config.zoomMin / this.matrix.m[0]) : null != this.config.zoomMax && e > this.config.zoomMax && (o = this.config.zoomMax / this.matrix.m[0]);
                var s = this.matrix.inverse().transformPoint(i.x, i.y),
                    a = s[0],
                    n = s[1];
                this.matrix.translate(a, n).scale(o, o).translate(-a, -n), this._updateZoomPosition();
            },
            _zoomIn: function () {
                var t = this._getZoom() + this.config.zoomStep;
                this._setZoom({ zoom: t }, !0, !1);
            },
            _zoomOut: function () {
                var t = this._getZoom() - this.config.zoomStep;
                this._setZoom({ zoom: t }, !0, !1);
            },
            _setBackgroundImage: function (t, o) {
                t.$image ? (t.css({ "background-image": t.$image.css("background-image") }), t.$image.css({ "background-image": o ? "url(" + o + ")" : "none" })) : t.css({ "background-image": o ? "url(" + o + ")" : "none" }),
                    (t.pageLoading = !1),
                    (t.pageLoaded = !0),
                    t.toggleClass("ipgs-loading", !t.pageLoaded);
            },
            _loadPageData: function (t) {
                if (null != t) {
                    var a = this.pages[t];
                    if ((a.pdfPage && a.zoom != this._getZoom() && ((a.zoom = this._getZoom()), (a.pageLoaded = !1), (a.pageLoading = !1)), !a.pageLoaded && !a.pageLoading)) {
                        a.pageLoading = !0;
                        var n = this;
                        if (a.image) {
                            var o = new Image();
                            (o.onload = function () {
                                n._setBackgroundImage(a, this.src), !a.$thumb || a.$thumb.pageLoaded || a.$thumb.pageLoading || n._setBackgroundImage(a.$thumb, this.src);
                            }),
                                (o.src = a.image);
                        } else
                            a.pdfPage
                                ? n.pdf &&
                                  (a.updateTimerId && clearTimeout(a.updateTimerId),
                                  (a.updateTimerId = setTimeout(
                                      function () {
                                          n.pdf.getPage(a.pdfPage).then(function (t) {
                                              var o = t.getViewport((n.pageWidth * n._getZoom()) / t.getViewport(1).width),
                                                  i = d("<canvas>"),
                                                  e = i.get(0).getContext("2d");
                                              (i.get(0).width = o.width), (i.get(0).height = o.height);
                                              var s = { canvasContext: e, viewport: o };
                                              (a.renderTask = t.render(s)),
                                                  a.renderTask.then(function () {
                                                      i.get(0).toBlob(function (t) {
                                                          var o = n._createObjectURL(t, t.type);
                                                          n._setBackgroundImage(a, o), a.$thumb && n._loadThumbData(a.$thumb), i.remove();
                                                      });
                                                  });
                                          });
                                      },
                                      a.updateTimerId ? 300 : 1
                                  )))
                                : (n._setBackgroundImage(a, ""), !a.$thumb || a.$thumb.pageLoaded || a.$thumb.pageLoading || n._setBackgroundImage(a.$thumb, ""));
                    }
                }
            },
            _loadThumbData: function (a) {
                if (!a.pageLoaded && !a.pageLoading) {
                    a.pageLoading = !0;
                    var n = this;
                    if (a.image) {
                        var t = new Image();
                        (t.onload = function () {
                            n._setBackgroundImage(a, this.src);
                        }),
                            (t.src = a.image);
                    } else
                        a.pdfPage
                            ? n.pdf &&
                              n.pdf.getPage(a.pdfPage).then(function (t) {
                                  var o = t.getViewport(a.width() / t.getViewport(1).width),
                                      i = d("<canvas>"),
                                      e = i.get(0).getContext("2d");
                                  (i.get(0).width = a.width()), (i.get(0).height = a.height());
                                  var s = { canvasContext: e, viewport: o };
                                  t.render(s).then(function () {
                                      i.get(0).toBlob(function (t) {
                                          var o = n._createObjectURL(t, t.type);
                                          n._setBackgroundImage(a, o), i.remove();
                                      });
                                  });
                              })
                            : n._setBackgroundImage(a, "");
                }
            },
            _showPage: function (t) {
                0 != this.pages.length && this.engine.showPage(t);
            },
            _gotoPage: function (t) {
                0 != this.pages.length && this.engine.gotoPage(t);
            },
            _gotoPrev: function () {
                this.engine.gotoPrev();
            },
            _gotoNext: function () {
                this.engine.gotoNext();
            },
            _setShowHidePageState: function (t, o) {
                var i = this.pages[t];
                o
                    ? i.hasClass("ipgs-hide") &&
                      (i.removeClass("ipgs-hide"), i.get(0).offsetHeight, i.addClass("ipgs-show"), i.removeClass(i.hideCSSClass).addClass(i.showCSSClass), this._loadPageData(t), this.$container.trigger("kurasa:showpage", [this, t]))
                    : i.hasClass("ipgs-show") && (i.removeClass("ipgs-show"), i.get(0).offsetHeight, i.addClass("ipgs-hide"), i.removeClass(i.showCSSClass).addClass(i.hideCSSClass), this.$container.trigger("kurasa:hidepage", [this, t])),
                    this.config.prevnextButtons &&
                        0 < this.pages.length &&
                        (this.controls.$prevBtn.toggleClass("ipgs-active", !this.pages[0].hasClass("ipgs-show")), this.controls.$nextBtn.toggleClass("ipgs-active", !this.pages[this.pages.length - 1].hasClass("ipgs-show")));
            },
            _normalizeEvent: function (t, o, i, e) {
                return d.Event(t, { pageX: i, pageY: e, originalEvent: o });
            },
            _onShowPage: function (t) {
                if (this.config.flipSound && this.pageIndexPrev != t) {
                    var o = this.controls.$audio.get(0);
                    o.pause(), (o.currentTime = 0), o.play();
                }
                if (this.config.toolbar)
                    if ("ipgs-twopageflip" == this.engineClass) {
                        var i,
                            e = 0;
                        (i = 1 < (e = (t + 1) % 2 == 0 || t + 1 == 1 || t + 1 == this.pages.length ? t + 1 : t) && e < this.pages.length ? "-" + (e + 1) : ""), this.controls.toolbar.$pagenumberLabel.text(e + i + "/" + this.pages.length);
                    } else this.controls.toolbar.$pagenumberLabel.text(t + 1 + "/" + this.pages.length);
                this.pageIndexPrev = t;
            },
            _onResize: function () {
                this.ready && (this._updateSize(), this._updateBookEngine());
            },
            _onScrollbar: function (t, o) {
                o && this.ready && (this._updateSize(), this._updateBookEngine());
            },
            _onOrientationChange: function () {
                this._updateBookEngine();
            },
            _onBookTouch: function (t) {
                if (!d(t.target).is("a")) {
                    var o;
                    switch (t.type) {
                        case "touchstart":
                            o = this.touchMouseEvent.down;
                            break;
                        case "touchend":
                            o = this.touchMouseEvent.up;
                            break;
                        case "touchmove":
                            t.preventDefault(), t.stopPropagation(), (o = this.touchMouseEvent.move);
                            break;
                        default:
                            return;
                    }
                    var i,
                        e = t.originalEvent.touches[0];
                    (i = o == this.touchMouseEvent.up ? this._normalizeEvent(o, t, null, null) : this._normalizeEvent(o, t, e.pageX, e.pageY)), d(t.target).trigger(i);
                }
            },
            _onBookMouse: function (t) {
                if (!d(t.target).is("a")) {
                    t.preventDefault(), t.stopPropagation();
                    var o,
                        i = !1;
                    switch (t.type) {
                        case "mousedown":
                            (o = this.touchMouseEvent.down),
                                (this.dragNavigation.target = t.target),
                                (this.dragNavigation.startX = this.dragNavigation.x = t.pageX),
                                (this.dragNavigation.startY = this.dragNavigation.y = t.pageY),
                                this.controls.$stageMove.addClass("ipgs-active"),
                                this.controls.$stageMove.on("mouseup", d.proxy(this._onBookMouse, this)),
                                this.controls.$stageMove.on("mouseout", d.proxy(this._onBookMouse, this)),
                                this.controls.$stageMove.on("mousemove", d.proxy(this._onBookMouse, this)),
                                this.controls.$stage.focus();
                            break;
                        case "mouseup":
                            this.dragNavigation.startX == this.dragNavigation.x && this.dragNavigation.startY == this.dragNavigation.y && (i = !0);
                        case "mouseout":
                            (o = this.touchMouseEvent.up),
                                this.controls.$stageMove.removeClass("ipgs-active"),
                                this.controls.$stageMove.off("mouseup", d.proxy(this._onBookMouse, this)),
                                this.controls.$stageMove.off("mouseout", d.proxy(this._onBookMouse, this)),
                                this.controls.$stageMove.off("mousemove", d.proxy(this._onBookMouse, this));
                            break;
                        case "mousemove":
                            (o = this.touchMouseEvent.move), (this.dragNavigation.x = t.pageX), (this.dragNavigation.y = t.pageY);
                            break;
                        default:
                            return;
                    }
                    var e = this._normalizeEvent(o, t, t.pageX, t.pageY);
                    d(t.target).trigger(e), i && this.controls.$stage.trigger("click", [this.dragNavigation.target]);
                }
            },
            _onSwipeDown: function (t) {
                (this.lastDelta = { x: t.pageX, y: t.pageY }), this.controls.$bookTransform.addClass("ipgs-no-transition"), 1 == this._getZoom() && this.engine.onSwipeDown(t);
            },
            _onSwipeMove: function (t) {
                1 == this._getZoom() ? this.engine.onSwipeMove(t) : (this._setDeltaPosition({ dx: t.pageX - this.lastDelta.x, dy: t.pageY - this.lastDelta.y }), (this.lastDelta.x = t.pageX), (this.lastDelta.y = t.pageY));
            },
            _onSwipeUp: function (t) {
                this.controls.$bookTransform.removeClass("ipgs-no-transition"), 1 == this._getZoom() && this.engine.onSwipeUp(t);
            },
            _onBookMouseClick: function (t, o) {
                o = o || t.target;
                var i = d(o).closest(".ipgs-page");
                if (i.length)
                    switch (this.engineClass) {
                        case "ipgs-twopageflip":
                            i.data("page-number") % 2 == 0 ? this._gotoPrev() : this._gotoNext();
                            break;
                        case "ipgs-onepageflip":
                        case "ipgs-onepageswipe":
                            this._gotoNext();
                    }
            },
            _onPrevBtnClick: function (t) {
                t.preventDefault(), t.stopPropagation(), this.controls.$stage.focus(), this._gotoPrev();
            },
            _onNextBtnClick: function (t) {
                t.preventDefault(), t.stopPropagation(), this.controls.$stage.focus(), this._gotoNext();
            },
            _onKeyboardNavigation: function (t) {
                switch (t.which) {
                    case 37:
                        this.gotoPrev();
                        break;
                    case 39:
                        this.gotoNext();
                }
            },
            _onMouseWheelNavigation: function (t, o) {
                this.config.mouseWheelPreventDefault && (t.preventDefault(), t.stopPropagation()), o < 0 ? this.gotoPrev() : this.gotoNext();
            },
            _onDblClickZoomDefault: function (t) {
                this._setZoom({ zoom: 1 }, !0, !1);
            },
            _onDblTapZoomDefault: function (t) {
                if (this.tapped) clearTimeout(this.tapped), (this.tapped = null), this._setZoom({ zoom: 1 }, !0, !1);
                else {
                    var o = this;
                    this.tapped = setTimeout(function () {
                        o.tapped = null;
                    }, 300);
                }
            },
            _onMouseWheelZoom: function (t, o) {
                this.config.mouseWheelPreventDefault && (t.preventDefault(), t.stopPropagation());
                var i,
                    e = this.controls.$stage.get(0).getBoundingClientRect(),
                    s = t.clientX,
                    a = t.clientY,
                    n = 1 + 0.1 * o;
                (s -= e.left), (a -= e.top), (i = { x: s - (e.right - e.left) / 2, y: a - (e.bottom - e.top) / 2 }), this._setDeltaZoom({ zoom: n, focalPoint: i });
            },
            _onKeyboardZoom: function (t) {
                switch (t.which) {
                    case 189:
                    case 109:
                        var o = this._getZoom() - this.config.zoomStep;
                        this._setZoom({ zoom: o }, !0, !1);
                        break;
                    case 187:
                    case 107:
                        o = this._getZoom() + this.config.zoomStep;
                        this._setZoom({ zoom: o }, !0, !1);
                }
            },
            _onPinchZoomTouchStart: function (t) {
                (this.pinchZoom.aStart = t.originalEvent.touches[0] && 1 < t.originalEvent.touches.length),
                    (this.pinchZoom.bStart = t.originalEvent.touches[1]),
                    !this.pinchZoom.aIsMoving &&
                        !this.pinchZoom.bIsMoving &&
                        this.pinchZoom.aStart &&
                        this.pinchZoom.bStart &&
                        (t.preventDefault(),
                        t.stopPropagation(),
                        this.controls.$stage.focus(),
                        this.controls.$bookTransform.addClass("ipgs-no-transition"),
                        (this.pinchZoom.aStartX = t.originalEvent.touches[0].pageX),
                        (this.pinchZoom.aStartY = t.originalEvent.touches[0].pageY),
                        (this.pinchZoom.bStartX = t.originalEvent.touches[1].pageX),
                        (this.pinchZoom.bStartY = t.originalEvent.touches[1].pageY),
                        this.controls.$stage.on("touchmove", d.proxy(this._onPinchZoomTouchMove, this)),
                        (this.pinchZoom.zoom = this._getZoom()),
                        (this.pinchZoom.startDate = new Date().getTime()),
                        (this.pinchZoom.aCurX = this.pinchZoom.aStartX),
                        (this.pinchZoom.aCurY = this.pinchZoom.aStartY),
                        (this.pinchZoom.bCurX = this.pinchZoom.bStartX),
                        (this.pinchZoom.bCurY = this.pinchZoom.bStartY),
                        (this.pinchZoom.aIsMoving = !0),
                        (this.pinchZoom.bIsMoving = !0));
            },
            _onPinchZoomTouchMove: function (t) {
                if (this.pinchZoom.aIsMoving || this.pinchZoom.bIsMoving) {
                    (this.pinchZoom.aCurX = t.originalEvent.touches[0].pageX),
                        (this.pinchZoom.aCurY = t.originalEvent.touches[0].pageY),
                        (this.pinchZoom.bCurX = t.originalEvent.touches[1].pageX),
                        (this.pinchZoom.bCurY = t.originalEvent.touches[1].pageY);
                    var o = new Date().getTime(),
                        i = (this.pinchZoom.startDate, this.pinchZoom.aCurX),
                        e = this.pinchZoom.aCurY,
                        s = this.pinchZoom.bCurX,
                        a = this.pinchZoom.bCurY,
                        n = i - this.pinchZoom.aStartX,
                        h = e - this.pinchZoom.aStartY,
                        r = s - this.pinchZoom.bStartX,
                        l = a - this.pinchZoom.bStartY,
                        g =
                            (Math.abs(n),
                            Math.abs(h),
                            Math.abs(r),
                            Math.abs(l),
                            Math.sqrt(
                                (this.pinchZoom.aStartX - this.pinchZoom.bStartX) * (this.pinchZoom.aStartX - this.pinchZoom.bStartX) + (this.pinchZoom.aStartY - this.pinchZoom.bStartY) * (this.pinchZoom.aStartY - this.pinchZoom.bStartY)
                            ) - Math.sqrt((i - s) * (i - s) + (e - a) * (e - a))),
                        p = this.pinchZoom.zoom - g * this.config.pinchZoomCoef;
                    this._setZoom({ zoom: p }, !0, !1);
                }
            },
            _onPinchZoomTouchEnd: function (t) {
                t.preventDefault(), t.stopPropagation(), this.controls.$stage.off("touchmove", d.proxy(this._onPinchZoomTouchMove, this)), this.controls.$bookTransform.addClass("ipgs-no-transition"), this._pinchZoomReset();
            },
            _pinchZoomReset: function () {
                (this.pinchZoom.aStartX = !1), (this.pinchZoom.aStartY = !1), (this.pinchZoom.bStartX = !1), (this.pinchZoom.bStartY = !1), (this.pinchZoom.startDate = !1), (this.pinchZoom.aIsMoving = !1), (this.pinchZoom.bIsMoving = !1);
            },
            _onToolbarControlClick: function (t) {
                this.controls.$stage.focus();
            },
            _onPageFirst: function (t) {
                this.gotoPage(0);
            },
            _onPagePrev: function (t) {
                this.gotoPrev();
            },
            _pageNumberInputShow: function () {
                this.controls.toolbar.$pagenumber.addClass("ipgs-pagenumber-input"), this.controls.toolbar.$pagenumberInput.focus().val(this.currPage + 1);
            },
            _pageNumberInputHide: function () {
                this.controls.toolbar.$pagenumber.removeClass("ipgs-pagenumber-input");
            },
            _pageNumberInputUpdate: function () {
                var t = parseInt(this.controls.toolbar.$pagenumberInput.val(), 10);
                t <= 0 ? (t = 1) : t > this.pages.length ? (t = this.pages.length) : isNaN(t) && (t = this.currPage + 1), this.controls.toolbar.$pagenumberInput.val(t), this.gotoPage(t);
            },
            _onPageNumberLabelClick: function (t) {
                t.preventDefault(), t.stopPropagation(), this.$body.one("click", d.proxy(this._onPageNumberInputHide, this)), this._pageNumberInputShow();
            },
            _onPageNumberInputClick: function (t) {
                t.preventDefault(), t.stopPropagation();
            },
            _onPageNumberInputHide: function (t) {
                this._pageNumberInputUpdate(), this._pageNumberInputHide();
            },
            _onPageNumberInputKeyup: function (t) {
                13 == t.which && this._pageNumberInputUpdate(), 27 == t.which && (this.$body.off("click", d.proxy(this._onPageNumberInputHide, this)), this._pageNumberInputHide());
            },
            _onPageNext: function (t) {
                this.gotoNext();
            },
            _onPageLast: function (t) {
                this.gotoPage(this.pages.length);
            },
            _onToggleThumbnails: function (t) {
                this.controls.$thumbnails.toggleClass("ipgs-active"),
                    this.controls.toolbar.$thumbnails.toggleClass("ipgs-active"),
                    this.controls.$thumbnails.hasClass("ipgs-active") && this._onThumbnailsScroll(),
                    this.controls.$outline.hasClass("ipgs-active") && (this.controls.$outline.toggleClass("ipgs-active"), this.controls.toolbar.$outline.toggleClass("ipgs-active"));
            },
            _onThumbnailsScroll: function (t) {
                clearTimeout(this.thumbnailsScrollTimerId), (this.thumbnailsScrollTimerId = setTimeout(d.proxy(this._onThumbnailsRefresh, this), this.thumbnailsScrollTimeout));
            },
            _onThumbnailsRefresh: function () {
                if (this.controls.$thumbnails.hasClass("ipgs-active") && 0 != this.pages.length)
                    for (
                        var t = this.controls.$thumbnails.find(".ipgs-thumb:first-child").outerHeight(!0),
                            o = this.controls.$thumbnails.outerHeight(),
                            i = this.controls.$thumbnails.scrollTop(),
                            e = i + o,
                            s = Math.floor(i / t),
                            a = Math.floor(e / t),
                            n = s;
                        n <= a && n < this.pages.length;
                        n++
                    )
                        this._loadThumbData(this.pages[n].$thumb);
            },
            _onThumbClick: function (t) {
                t.preventDefault, t.stopPropagation();
                var o = d(t.target).data("page-index");
                this._gotoPage(o);
            },
            _onToggleOutline: function (t) {
                this.controls.$outline.toggleClass("ipgs-active"),
                    this.controls.toolbar.$outline.toggleClass("ipgs-active"),
                    this.controls.$thumbnails.hasClass("ipgs-active") && (this.controls.$thumbnails.toggleClass("ipgs-active"), this.controls.toolbar.$thumbnails.toggleClass("ipgs-active"));
            },
            _onBookmarkClick: function (t) {
                t.preventDefault, t.stopPropagation();
                var o = d(t.currentTarget);
                if (d(t.target).is(".ipgs-state")) o.toggleClass("ipgs-folded");
                else {
                    var i = o.data("link"),
                        e = o.data("target");
                    if (i)
                        if ("page" == e) {
                            var s = parseInt(i, 10);
                            if (isNaN(s)) return;
                            s < 0 ? (s += this.pages.length) : (s -= 1), this._gotoPage(s);
                        } else {
                            e = "_" + e;
                            var a = d("<a></a>").attr("href", i).attr("target", e);
                            this.$body.append(a), a.get(0).click(), a.remove();
                        }
                }
            },
            _onZoomIn: function (t) {
                this._zoomIn();
            },
            _onZoomOut: function (t) {
                this._zoomOut();
            },
            _onZoomDefault: function (t) {
                this._setZoom({ zoom: 1 }, !0, !1);
            },
            _onToggleOptional: function (t) {
                this.controls.toolbar.$optional.toggleClass("ipgs-active"), this.controls.toolbar.$optionalBar.toggleClass("ipgs-active");
            },
            _onToggleSound: function (t) {
                (this.config.flipSound = !this.config.flipSound), this.controls.toolbar.$sound.toggleClass("ipgs-disable", !this.config.flipSound);
            },
            _onFullScreenChange: function (t) {
                f.fullscreen || f.mozFullScreen || f.webkitIsFullScreen || f.msFullscreenElement
                    ? (this.$container.addClass("ipgs-fullscreen"), this.$container.get(0).offsetHeight, this.controls.toolbar.$fullscreen && this.controls.toolbar.$fullscreen.addClass("ipgs-active"))
                    : (this.$container.removeClass("ipgs-fullscreen"), this.$container.get(0).offsetHeight, this.controls.toolbar.$fullscreen && this.controls.toolbar.$fullscreen.removeClass("ipgs-active"));
                var o = this;
                setTimeout(function () {
                    o._onResize();
                }, 100);
            },
            _onToggleFullscreen: function (t) {
                if (this.$container.hasClass("ipgs-fullscreen"))
                    try {
                        f.exitFullscreen ? f.exitFullscreen() : f.mozCancelFullScreen ? f.mozCancelFullScreen() : f.webkitCancelFullScreen ? f.webkitCancelFullScreen() : f.msExitFullscreen && f.msExitFullscreen();
                    } catch (t) {
                        console.error("The browser does not support the fullscreen API");
                    }
                else
                    try {
                        var o = this.$container.get(0);
                        o.requestFullscreen ? o.requestFullscreen() : o.mozRequestFullScreen ? o.mozRequestFullScreen() : o.webkitRequestFullscreen ? o.webkitRequestFullscreen() : o.msRequestFullscreen && o.msRequestFullscreen();
                    } catch (t) {
                        console.error("The browser does not support the fullscreen API");
                    }
            },
            _onDownload: function (t) {
                if (this.config.pdfUrl) {
                    var o = this.config.pdfUrl.substring(this.config.pdfUrl.lastIndexOf("/") + 1, this.config.pdfUrl.length),
                        i = d("<a></a>").attr("href", this.config.pdfUrl).attr("download", o);
                    this.$body.append(i), i.get(0).click(), i.remove();
                }
            },
            _getShareUrl: function () {
                return p.location.href;
            },
            _buildUrl: function (t, o) {
                var i = 0;
                for (var e in o) (t += (i ? "&" : "") + e + "=" + encodeURIComponent(o[e])), i++;
                return t;
            },
            _onToggleShare: function (t) {
                if (t) {
                    t.preventDefault(), t.stopPropagation();
                    var o = t.toElement || t.relatedTarget;
                    0 !== this.controls.$shareDialog.has(o).length || this.controls.$shareDialog.is(o) || (this.controls.$share.toggleClass("ipgs-active"), this.controls.toolbar.$share.toggleClass("ipgs-active"));
                } else this.controls.$share.toggleClass("ipgs-active"), this.controls.toolbar.$share.toggleClass("ipgs-active");
            },
            _executeShareUrl: function (t) {
                var o = d("<a></a>").attr("href", t).attr("target", "_blank");
                this.$body.append(o), o.get(0).click(), o.remove();
            },
            _onShareClick: function (t, o) {
                var i = "",
                    e = {};
                switch (t) {
                    case "facebook":
                        (i = "http://www.facebook.com/sharer.php?"), (e = { u: this._getShareUrl() });
                        break;
                    case "twitter":
                        (i = "http://twitter.com/share?"), (e = { url: this._getShareUrl() });
                        break;
                    case "google":
                        (i = "https://plus.google.com/share?"), (e = { url: this._getShareUrl() });
                        break;
                    case "linkedin":
                        (i = "http://www.linkedin.com/shareArticle?"), (e = { mini: "true", url: this._getShareUrl() });
                        break;
                    case "email":
                        (i = "mailto:?"), (e = { subject: "", body: this._getShareUrl() });
                        break;
                    default:
                        return;
                }
                this._executeShareUrl(this._buildUrl(i, e));
            },
            _destroy: function () {
                var t = this.$container,
                    o = this.$container.find(".ipgs-come-back");
                t.removeClass("ipgs ipgs-ready").removeClass(this.engineClass).removeClass(this.themeClass).empty(),
                    d(o).each(function () {
                        t.append(d(this).removeClass("ipgs-come-back"));
                    }),
                    this._unbind();
            },
            gotoPage: function (t) {
                this._gotoPage(t - 1);
            },
            gotoNext: function () {
                this._gotoNext();
            },
            gotoPrev: function () {
                this._gotoPrev();
            },
            zoomIn: function () {
                this._zoomIn();
            },
            zoomOut: function () {
                this._zoomOut();
            },
            zoomDefault: function () {
                this._setZoom({ zoom: 1 }, !0, !1);
            },
            setBookEngine: function (t) {
                var o = t ? "ipgs-" + t.toLowerCase() : null;
                if (this.engineClass == o) return !1;
                switch (o) {
                    case "ipgs-twopageflip":
                    case "ipgs-onepageflip":
                    case "ipgs-onepageswipe":
                        break;
                    default:
                        return console.error(this.config.txtFailedEngine + " [" + t + "]"), !1;
                }
                this.controls.$bookTransform.addClass("ipgs-no-transition"),
                    this.controls.$book.addClass("ipgs-no-transition"),
                    this.$container.removeClass(this.engineClass),
                    (this.engineClass = o),
                    this.$container.addClass(this.engineClass);
                for (var i = 0, e = this.pages.length; i < e; i++) {
                    var s = this.pages[i];
                    s.removeClass("ipgs-left").removeClass("ipgs-right"), s.css({ left: "" });
                }
                switch ((this.controls.$book.css({ transform: "" }), this.engineClass)) {
                    case "ipgs-twopageflip":
                        (this.bookWidth = 2 * this.config.pageWidth), (this.engine = new a(this, d.extend(!0, {}, this.config.twoPageFlip)));
                        break;
                    case "ipgs-onepageflip":
                        (this.bookWidth = this.config.pageWidth), (this.engine = new n(this, d.extend(!0, {}, this.config.onePageFlip)));
                        break;
                    case "ipgs-onepageswipe":
                        (this.bookWidth = this.config.pageWidth), (this.engine = new h(this, d.extend(!0, {}, this.config.onePageSwipe)));
                }
                this.controls.$book.css({ width: this.bookWidth }),
                    0 < this.pages.length && this._updateBook(1),
                    this._updateSize(),
                    this.controls.$bookTransform.removeClass("ipgs-no-transition"),
                    this.controls.$book.removeClass("ipgs-no-transition");
            },
        }),
        (d.fn.kurasa = function (i, t) {
            if ("instance" == i) {
                var o = d(this).data(v);
                return o || void console.error('Calling "instance" method on not initialized instance is forbidden');
            }
            return this.each(function () {
                var n = d(this),
                    h = n.data(v),
                    t = n.data("json"),
                    r = n.data("pdf-src"),
                    l = n.data("pdf-disable-range-requests"),
                    g = n.data("book-engine"),
                    p = parseInt(n.data("page-width"), 10),
                    c = parseInt(n.data("page-height"), 10),
                    u = d.isPlainObject(i) ? i : t ? null : {};
                if ("destroy" == i) return h ? (n.removeData(v), void h._destroy()) : void console.error('Calling "destroy" method on not initialized instance is forbidden');
                function o() {
                    var t = d.extend(!0, {}, b.prototype.defaults, u);
                    function o(t, o) {
                        for (var i = [], e = 0; e < o.length; e++)
                            for (var s = o[e], a = 0; a < t.length; a++) {
                                if ((h = t[a]).type == s.type) {
                                    var n = d.extend(!0, {}, h, s);
                                    i.push(n);
                                }
                            }
                        for (e = 0; e < t.length; e++) {
                            var h = t[e],
                                r = !0;
                            for (a = 0; a < o.length; a++) {
                                s = o[a];
                                if (h.type == s.type) {
                                    r = !1;
                                    break;
                                }
                            }
                            if (r) {
                                n = d.extend(!0, {}, h);
                                i.push(n);
                            }
                        }
                        return i;
                    }
                    if (
                        ((t.bookEngine = g || t.bookEngine),
                        (t.pageWidth = isNaN(p) ? t.pageWidth : p),
                        (t.pageHeight = isNaN(c) ? t.pageHeight : c),
                        "boolean" == typeof l && (t.pdfDisableRangeRequests = l),
                        null == t.pdfUrl && r && ((t.pdfUrl = r), (t.pdfAutoCreatePages = !0), (t.pdfBookSizeFromDocument = !0)),
                        u.toolbarControls && u.toolbarControls instanceof Array && (t.toolbarControls = o(b.prototype.defaults.toolbarControls, u.toolbarControls)),
                        u.shareControls && u.shareControls instanceof Array && (t.shareControls = o(b.prototype.defaults.shareControls, u.shareControls)),
                        u.bookmarks && u.bookmarks instanceof Array && (t.bookmarks = d.extend(!0, [], u.bookmarks)),
                        null == t.flipSoundUrl)
                    ) {
                        var i = f.getElementsByTagName("script"),
                            e = "jquery.kurasa.min",
                            s = null;
                        if (i && 0 < i.length)
                            for (var a in i)
                                if (i[a].src && i[a].src.match(new RegExp(e + "\\.js$"))) {
                                    s = i[a].src.replace(new RegExp("(.*)" + e + "\\.js$"), "$1");
                                    break;
                                }
                        s && (t.flipSoundUrl = s + "page-flip.mp3");
                    }
                    (h = new b(n, t)), n.data(v, h);
                }
                h && (n.removeData(v), h._destroy(), (h = null)),
                    null == u
                        ? d
                              .ajax({ url: t, type: "GET", dataType: "json" })
                              .done(function (t) {
                                  u = d.isPlainObject(t) ? t : {};
                              })
                              .fail(function () {
                                  u = {};
                              })
                              .always(function () {
                                  o();
                              })
                        : o();
            });
        }),
        d(".ipgs-flipbook").kurasa();
})(jQuery, window, document);
