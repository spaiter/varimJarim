/*!
 * Fotorama 4.5.0 | http://fotorama.io/license/
 */
! function (a, b, c, d, e) {
    "use strict";

    function f(a) {
        var b = "bez_" + d.makeArray(arguments).join("_").replace(".", "p");
        if ("function" != typeof d.easing[b]) {
            var c = function (a, b) {
                var c = [null, null],
                    d = [null, null],
                    e = [null, null],
                    f = function (f, g) {
                        return e[g] = 3 * a[g], d[g] = 3 * (b[g] - a[g]) - e[g], c[g] = 1 - e[g] - d[g], f * (e[g] + f * (d[g] + f * c[g]))
                    }, g = function (a) {
                        return e[0] + a * (2 * d[0] + 3 * c[0] * a)
                    }, h = function (a) {
                        for (var b, c = a, d = 0; ++d < 14 && (b = f(c, 0) - a, !(Math.abs(b) < .001));) c -= b / g(c);
                        return c
                    };
                return function (a) {
                    return f(h(a), 1)
                }
            };
            d.easing[b] = function (b, d, e, f, g) {
                return f * c([a[0], a[1]], [a[2], a[3]])(d / g) + e
            }
        }
        return b
    }

    function g() {}

    function h(a, b, c) {
        return Math.max(isNaN(b) ? -1 / 0 : b, Math.min(isNaN(c) ? 1 / 0 : c, a))
    }

    function i(a) {
        return a.match(/ma/) && a.match(/-?\d+(?!d)/g)[a.match(/3d/) ? 12 : 4]
    }

    function j(a) {
        return Cc ? +i(a.css("transform")) : +a.css("left").replace("px", "")
    }

    function k(a, b) {
        var c = {};
        return Cc ? c.transform = "translate3d(" + (a + (b ? .001 : 0)) + "px,0,0)" : c.left = a, c
    }

    function l(a) {
        return {
            "transition-duration": a + "ms"
        }
    }

    function m(a, b) {
        return +String(a).replace(b || "px", "") || e
    }

    function n(a) {
        return /%$/.test(a) && m(a, "%")
    }

    function o(a, b) {
        return n(a) / 100 * b || m(a)
    }

    function p(a) {
        return ( !! m(a) || !! m(a, "%")) && a
    }

    function q(a, b, c, d) {
        return (a - (d || 0)) * (b + (c || 0))
    }

    function r(a, b, c, d) {
        return -Math.round(a / (b + (c || 0)) - (d || 0))
    }

    function s(a) {
        var b = a.data();
        if (!b.tEnd) {
            var c = a[0],
                d = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    msTransition: "MSTransitionEnd",
                    transition: "transitionend"
                };
            c.addEventListener(d[kc.prefixed("transition")], function (a) {
                b.tProp && a.propertyName.match(b.tProp) && b.onEndFn()
            }, !1), b.tEnd = !0
        }
    }

    function t(a, b, c, d) {
        var e, f = a.data();
        f && (f.onEndFn = function () {
            e || (e = !0, clearTimeout(f.tT), c())
        }, f.tProp = b, clearTimeout(f.tT), f.tT = setTimeout(function () {
            f.onEndFn()
        }, 1.5 * d), s(a))
    }

    function u(a, b, c) {
        if (a.length) {
            var d = a.data();
            Cc ? (a.css(l(0)), d.onEndFn = g, clearTimeout(d.tT)) : a.stop();
            var e = v(b, function () {
                return j(a)
            });
            return a.css(k(e, c)), e
        }
    }

    function v() {
        for (var a, b = 0, c = arguments.length; c > b && (a = b ? arguments[b]() : arguments[b], "number" != typeof a); b++);
        return a
    }

    function w(a, b) {
        return Math.round(a + (b - a) / 1.5)
    }

    function x() {
        return x.p = x.p || ("https:" === c.protocol ? "https://" : "http://"), x.p
    }

    function y(a) {
        var c = b.createElement("a");
        return c.href = a, c
    }

    function z(a, b) {
        if ("string" != typeof a) return a;
        a = y(a);
        var c, d;
        if (a.host.match(/youtube\.com/) && a.search) {
            if (c = a.search.split("v=")[1]) {
                var e = c.indexOf("&"); - 1 !== e && (c = c.substring(0, e)), d = "youtube"
            }
        } else a.host.match(/youtube\.com|youtu\.be/) ? (c = a.pathname.replace(/^\/(embed\/|v\/)?/, "").replace(/\/.*/, ""), d = "youtube") : a.host.match(/vimeo\.com/) && (d = "vimeo", c = a.pathname.replace(/^\/(video\/)?/, "").replace(/\/.*/, ""));
        return c && d || !b || (c = a.href, d = "custom"), c ? {
            id: c,
            type: d,
            s: a.search.replace(/^\?/, "")
        } : !1
    }

    function A(a, b, c) {
        var e, f, g = a.video;
        return "youtube" === g.type ? (f = x() + "img.youtube.com/vi/" + g.id + "/default.jpg", e = f.replace(/\/default.jpg$/, "/hqdefault.jpg"), a.thumbsReady = !0) : "vimeo" === g.type ? d.ajax({
            url: x() + "vimeo.com/api/v2/video/" + g.id + ".json",
            dataType: "jsonp",
            success: function (d) {
                a.thumbsReady = !0, B(b, {
                    img: d[0].thumbnail_large,
                    thumb: d[0].thumbnail_small
                }, a.i, c)
            }
        }) : a.thumbsReady = !0, {
            img: e,
            thumb: f
        }
    }

    function B(a, b, c, e) {
        for (var f = 0, g = a.length; g > f; f++) {
            var h = a[f];
            if (h.i === c && h.thumbsReady) {
                var i = {
                    videoReady: !0
                };
                i[Sc] = i[Uc] = i[Tc] = !1, e.splice(f, 1, d.extend({}, h, i, b));
                break
            }
        }
    }

    function C(a) {
        function b(a, b, e) {
            var f = a.children("img").eq(0),
                g = a.attr("href"),
                h = a.attr("src"),
                i = f.attr("src"),
                j = b.video,
                k = e ? z(g, j === !0) : !1;
            k ? g = !1 : k = j, c(a, f, d.extend(b, {
                video: k,
                img: b.img || g || h || i,
                thumb: b.thumb || i || h || g
            }))
        }

        function c(a, b, c) {
            var e = c.thumb && c.img !== c.thumb,
                f = m(c.width || a.attr("width")),
                g = m(c.height || a.attr("height"));
            d.extend(c, {
                width: f,
                height: g,
                thumbratio: R(c.thumbratio || m(c.thumbwidth || b && b.attr("width") || e || f) / m(c.thumbheight || b && b.attr("height") || e || g))
            })
        }
        var e = [];
        return a.children().each(function () {
            var a = d(this),
                f = Q(d.extend(a.data(), {
                    id: a.attr("id")
                }));
            if (a.is("a, img")) b(a, f, !0);
            else {
                if (a.is(":empty")) return;
                c(a, null, d.extend(f, {
                    html: this,
                    _html: a.html()
                }))
            }
            e.push(f)
        }), e
    }

    function D(a) {
        return 0 === a.offsetWidth && 0 === a.offsetHeight
    }

    function E(a) {
        return !d.contains(b.documentElement, a)
    }

    function F(a, b, c) {
        a() ? b() : setTimeout(function () {
            F(a, b)
        }, c || 100)
    }

    function G(a) {
        c.replace(c.protocol + "//" + c.host + c.pathname.replace(/^\/?/, "/") + c.search + "#" + a)
    }

    function H(a, b, c) {
        var d = a.data(),
            e = d.measures;
        if (e && (!d.l || d.l.W !== e.width || d.l.H !== e.height || d.l.r !== e.ratio || d.l.w !== b.w || d.l.h !== b.h || d.l.m !== c)) {
            var f = e.width,
                g = e.height,
                i = b.w / b.h,
                j = e.ratio >= i,
                k = "scaledown" === c,
                l = "contain" === c,
                m = "cover" === c;
            j && (k || l) || !j && m ? (f = h(b.w, 0, k ? f : 1 / 0), g = f / e.ratio) : (j && m || !j && (k || l)) && (g = h(b.h, 0, k ? g : 1 / 0), f = g * e.ratio), a.css({
                width: Math.ceil(f),
                height: Math.ceil(g),
                marginLeft: Math.floor(-f / 2),
                marginTop: Math.floor(-g / 2)
            }), d.l = {
                W: e.width,
                H: e.height,
                r: e.ratio,
                w: b.w,
                h: b.h,
                m: c
            }
        }
        return !0
    }

    function I(a, b) {
        var c = a[0];
        c.styleSheet ? c.styleSheet.cssText = b : a.html(b)
    }

    function J(a, b, c) {
        return b === c ? !1 : b >= a ? "left" : a >= c ? "right" : "left right"
    }

    function K(a, b, c, d) {
        if (!c) return !1;
        if (!isNaN(a)) return a - (d ? 0 : 1);
        for (var e, f = 0, g = b.length; g > f; f++) {
            var h = b[f];
            if (h.id === a) {
                e = f;
                break
            }
        }
        return e
    }

    function L(a, b, c) {
        c = c || {}, a.each(function () {
            var a, e = d(this),
                f = e.data();
            f.clickOn || (f.clickOn = !0, d.extend(X(e, {
                onStart: function (b) {
                    a = b, (c.onStart || g).call(this, b)
                },
                onMove: c.onMove || g,
                onTouchEnd: c.onTouchEnd || g,
                onEnd: function (c) {
                    c.moved || b.call(this, a)
                }
            }), {
                noMove: !0
            }))
        })
    }

    function M(a, b) {
        return '<div class="' + a + '">' + (b || "") + "</div>"
    }

    function N(a) {
        for (var b = a.length; b;) {
            var c = Math.floor(Math.random() * b--),
                d = a[b];
            a[b] = a[c], a[c] = d
        }
        return a
    }

    function O(a) {
        return "[object Array]" == Object.prototype.toString.call(a) && d.map(a, function (a) {
            return d.extend({}, a)
        })
    }

    function P(a, b) {
        yc.scrollLeft(a).scrollTop(b)
    }

    function Q(a) {
        if (a) {
            var b = {};
            return d.each(a, function (a, c) {
                b[a.toLowerCase()] = c
            }), b
        }
    }

    function R(a) {
        if (a) {
            var b = +a;
            return isNaN(b) ? (b = a.split("/"), +b[0] / +b[1] || e) : b
        }
    }

    function S(a, b) {
        a.preventDefault(), b && a.stopPropagation()
    }

    function T(a) {
        return a ? ">" : "<"
    }

    function U(a, b) {
        var c = a.data(),
            e = Math.round(b.pos),
            f = function () {
                c.sliding = !1, (b.onEnd || g)()
            };
        "undefined" != typeof b.overPos && b.overPos !== b.pos && (e = b.overPos, f = function () {
            U(a, d.extend({}, b, {
                overPos: b.pos,
                time: Math.max(Lc, b.time / 2)
            }))
        });
        var h = d.extend(k(e, b._001), b.width && {
            width: b.width
        });
        c.sliding = !0, Cc ? (a.css(d.extend(l(b.time), h)), b.time > 10 ? t(a, "transform", f, b.time) : f()) : a.stop().animate(h, b.time, Vc, f)
    }

    function V(a, b, c, e, f, h) {
        var i = "undefined" != typeof h;
        if (i || (f.push(arguments), Array.prototype.push.call(arguments, f.length), !(f.length > 1))) {
            a = a || d(a), b = b || d(b);
            var j = a[0],
                k = b[0],
                l = "crossfade" === e.method,
                m = function () {
                    if (!m.done) {
                        m.done = !0;
                        var a = (i || f.shift()) && f.shift();
                        a && V.apply(this, a), (e.onEnd || g)( !! a)
                    }
                }, n = e.time / (h || 1);
            c.removeClass(Ib + " " + Hb), a.stop().addClass(Ib), b.stop().addClass(Hb), l && k && a.fadeTo(0, 0), a.fadeTo(l ? n : 0, 1, l && m), b.fadeTo(n, 0, m), j && l || k || m()
        }
    }

    function W(a) {
        var b = (a.touches || [])[0] || a;
        a._x = b.pageX, a._y = b.clientY, a._now = d.now()
    }

    function X(c, e) {
        function f(a) {
            return n = d(a.target), v.checked = q = r = t = !1, l || v.flow || a.touches && a.touches.length > 1 || a.which > 1 || uc && uc.type !== a.type && wc || (q = e.select && n.is(e.select, u)) ? q : (p = "touchstart" === a.type, r = n.is("a, a *", u), o = v.control, s = v.noMove || v.noSwipe || o ? 16 : v.snap ? 0 : 4, W(a), m = uc = a, vc = a.type.replace(/down|start/, "move").replace(/Down/, "Move"), (e.onStart || g).call(u, a, {
                control: o,
                $target: n
            }), l = v.flow = !0, void((!p || v.go) && S(a)))
        }

        function h(a) {
            if (a.touches && a.touches.length > 1 || Ic && !a.isPrimary || vc !== a.type || !l) return l && i(), void(e.onTouchEnd || g)();
            W(a);
            var b = Math.abs(a._x - m._x),
                c = Math.abs(a._y - m._y),
                d = b - c,
                f = (v.go || v.x || d >= 0) && !v.noSwipe,
                h = 0 > d;
            p && !v.checked ? (l = f) && S(a) : (S(a), (e.onMove || g).call(u, a, {
                touch: p
            })), !t && Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2)) > s && (t = !0), v.checked = v.checked || f || h
        }

        function i(a) {
            (e.onTouchEnd || g)();
            var b = l;
            v.control = l = !1, b && (v.flow = !1), !b || r && !v.checked || (a && S(a), wc = !0, clearTimeout(xc), xc = setTimeout(function () {
                wc = !1
            }, 1e3), (e.onEnd || g).call(u, {
                moved: t,
                $target: n,
                control: o,
                touch: p,
                startEvent: m,
                aborted: !a || "MSPointerCancel" === a.type
            }))
        }

        function j() {
            v.flow || setTimeout(function () {
                v.flow = !0
            }, 10)
        }

        function k() {
            v.flow && setTimeout(function () {
                v.flow = !1
            }, Kc)
        }
        var l, m, n, o, p, q, r, s, t, u = c[0],
            v = {};
        return Ic ? (u[Hc]("MSPointerDown", f, !1), b[Hc]("MSPointerMove", h, !1), b[Hc]("MSPointerCancel", i, !1), b[Hc]("MSPointerUp", i, !1)) : (u[Hc] && (u[Hc]("touchstart", f, !1), u[Hc]("touchmove", h, !1), u[Hc]("touchend", i, !1), b[Hc]("touchstart", j, !1), b[Hc]("touchend", k, !1), b[Hc]("touchcancel", k, !1), a[Hc]("scroll", k, !1)), c.on("mousedown", f), zc.on("mousemove", h).on("mouseup", i)), c.on("click", "a", function (a) {
            v.checked && S(a)
        }), v
    }

    function Y(a, b) {
        function c(c, d) {
            A = !0, j = l = c._x, q = c._now, p = [
                [q, j]
            ], m = n = D.noMove || d ? 0 : u(a, (b.getPos || g)(), b._001), (b.onStart || g).call(B, c)
        }

        function e(a, b) {
            s = D.min, t = D.max, v = D.snap, x = a.altKey, A = z = !1, y = b.control, y || C.sliding || c(a)
        }

        function f(d, e) {
            D.noSwipe || (A || c(d), l = d._x, p.push([d._now, l]), n = m - (j - l), o = J(n, s, t), s >= n ? n = w(n, s) : n >= t && (n = w(n, t)), D.noMove || (a.css(k(n, b._001)), z || (z = !0, e.touch || Ic || a.addClass(Xb)), (b.onMove || g).call(B, d, {
                pos: n,
                edge: o
            })))
        }

        function i(e) {
            if (!D.noSwipe || !e.moved) {
                A || c(e.startEvent, !0), e.touch || Ic || a.removeClass(Xb), r = d.now();
                for (var f, i, j, k, o, q, u, w, y, z = r - Kc, C = null, E = Lc, F = b.friction, G = p.length - 1; G >= 0; G--) {
                    if (f = p[G][0], i = Math.abs(f - z), null === C || j > i) C = f, k = p[G][1];
                    else if (C === z || i > j) break;
                    j = i
                }
                u = h(n, s, t);
                var H = k - l,
                    I = H >= 0,
                    J = r - C,
                    K = J > Kc,
                    L = !K && n !== m && u === n;
                v && (u = h(Math[L ? I ? "floor" : "ceil" : "round"](n / v) * v, s, t), s = t = u), L && (v || u === n) && (y = -(H / J), E *= h(Math.abs(y), b.timeLow, b.timeHigh), o = Math.round(n + y * E / F), v || (u = o), (!I && o > t || I && s > o) && (q = I ? s : t, w = o - q, v || (u = q), w = h(u + .03 * w, q - 50, q + 50), E = Math.abs((n - w) / (y / F)))), E *= x ? 10 : 1, (b.onEnd || g).call(B, d.extend(e, {
                    moved: e.moved || K && v,
                    pos: n,
                    newPos: u,
                    overPos: w,
                    time: E
                }))
            }
        }
        var j, l, m, n, o, p, q, r, s, t, v, x, y, z, A, B = a[0],
            C = a.data(),
            D = {};
        return D = d.extend(X(b.$wrap, {
            onStart: e,
            onMove: f,
            onTouchEnd: b.onTouchEnd,
            onEnd: i,
            select: b.select
        }), D)
    }

    function Z(a, b) {
        var c, e, f, h = a[0],
            i = {
                prevent: {}
            };
        return h[Hc] && h[Hc](Jc, function (a) {
            var h = a.wheelDeltaY || -1 * a.deltaY || 0,
                j = a.wheelDeltaX || -1 * a.deltaX || 0,
                k = Math.abs(j) > Math.abs(h),
                l = T(0 > j),
                m = e === l,
                n = d.now(),
                o = Kc > n - f;
            e = l, f = n, k && i.ok && (!i.prevent[l] || c) && (S(a, !0), c && m && o || (b.shift && (c = !0, clearTimeout(i.t), i.t = setTimeout(function () {
                c = !1
            }, Mc)), (b.onEnd || g)(a, b.shift ? l : j)))
        }, !1), i
    }

    function $() {
        d.each(d.Fotorama.instances, function (a, b) {
            b.index = a
        })
    }

    function _(a) {
        d.Fotorama.instances.push(a), $()
    }

    function ab(a) {
        d.Fotorama.instances.splice(a.index, 1), $()
    }
    var bb = "fotorama",
        cb = "fullscreen",
        db = bb + "__wrap",
        eb = db + "--css2",
        fb = db + "--css3",
        gb = db + "--video",
        hb = db + "--fade",
        ib = db + "--slide",
        jb = db + "--no-controls",
        kb = db + "--no-shadows",
        lb = db + "--pan-y",
        mb = db + "--rtl",
        nb = db + "--only-active",
        ob = bb + "__stage",
        pb = ob + "__frame",
        qb = pb + "--video",
        rb = ob + "__shaft",
        sb = bb + "__grab",
        tb = bb + "__pointer",
        ub = bb + "__arr",
        vb = ub + "--disabled",
        wb = ub + "--prev",
        xb = ub + "--next",
        yb = bb + "__nav",
        zb = yb + "-wrap",
        Ab = yb + "__shaft",
        Bb = yb + "--dots",
        Cb = yb + "--thumbs",
        Db = yb + "__frame",
        Eb = Db + "--dot",
        Fb = Db + "--thumb",
        Gb = bb + "__fade",
        Hb = Gb + "-front",
        Ib = Gb + "-rear",
        Jb = bb + "__shadow",
        Kb = Jb + "s",
        Lb = Kb + "--left",
        Mb = Kb + "--right",
        Nb = bb + "__active",
        Ob = bb + "__select",
        Pb = bb + "--hidden",
        Qb = bb + "--fullscreen",
        Rb = bb + "__fullscreen-icon",
        Sb = bb + "__error",
        Tb = bb + "__loading",
        Ub = bb + "__loaded",
        Vb = Ub + "--full",
        Wb = Ub + "--img",
        Xb = bb + "__grabbing",
        Yb = bb + "__img",
        Zb = Yb + "--full",
        $b = bb + "__dot",
        _b = bb + "__thumb",
        ac = _b + "-border",
        bc = bb + "__html",
        cc = bb + "__video",
        dc = cc + "-play",
        ec = cc + "-close",
        fc = bb + "__caption",
        gc = bb + "__caption__wrap",
        hc = bb + "__spinner",
        ic = d && d.fn.jquery.split(".");
    if (!ic || ic[0] < 1 || 1 == ic[0] && ic[1] < 8) throw "Fotorama requires jQuery 1.8 or later and will not run without it.";
    var jc = {}, kc = function (a, b, c) {
            function d(a) {
                r.cssText = a
            }

            function e(a, b) {
                return typeof a === b
            }

            function f(a, b) {
                return !!~("" + a).indexOf(b)
            }

            function g(a, b) {
                for (var d in a) {
                    var e = a[d];
                    if (!f(e, "-") && r[e] !== c) return "pfx" == b ? e : !0
                }
                return !1
            }

            function h(a, b, d) {
                for (var f in a) {
                    var g = b[a[f]];
                    if (g !== c) return d === !1 ? a[f] : e(g, "function") ? g.bind(d || b) : g
                }
                return !1
            }

            function i(a, b, c) {
                var d = a.charAt(0).toUpperCase() + a.slice(1),
                    f = (a + " " + u.join(d + " ") + d).split(" ");
                return e(b, "string") || e(b, "undefined") ? g(f, b) : (f = (a + " " + v.join(d + " ") + d).split(" "), h(f, b, c))
            }
            var j, k, l, m = "2.6.2",
                n = {}, o = b.documentElement,
                p = "modernizr",
                q = b.createElement(p),
                r = q.style,
                s = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
                t = "Webkit Moz O ms",
                u = t.split(" "),
                v = t.toLowerCase().split(" "),
                w = {}, x = [],
                y = x.slice,
                z = function (a, c, d, e) {
                    var f, g, h, i, j = b.createElement("div"),
                        k = b.body,
                        l = k || b.createElement("body");
                    if (parseInt(d, 10))
                        for (; d--;) h = b.createElement("div"), h.id = e ? e[d] : p + (d + 1), j.appendChild(h);
                    return f = ["&#173;", '<style id="s', p, '">', a, "</style>"].join(""), j.id = p, (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", i = o.style.overflow, o.style.overflow = "hidden", o.appendChild(l)), g = c(j, a), k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), o.style.overflow = i), !! g
                }, A = {}.hasOwnProperty;
            l = e(A, "undefined") || e(A.call, "undefined") ? function (a, b) {
                return b in a && e(a.constructor.prototype[b], "undefined")
            } : function (a, b) {
                return A.call(a, b)
            }, Function.prototype.bind || (Function.prototype.bind = function (a) {
                var b = this;
                if ("function" != typeof b) throw new TypeError;
                var c = y.call(arguments, 1),
                    d = function () {
                        if (this instanceof d) {
                            var e = function () {};
                            e.prototype = b.prototype;
                            var f = new e,
                                g = b.apply(f, c.concat(y.call(arguments)));
                            return Object(g) === g ? g : f
                        }
                        return b.apply(a, c.concat(y.call(arguments)))
                    };
                return d
            }), w.csstransforms3d = function () {
                var a = !! i("perspective");
                return a
            };
            for (var B in w) l(w, B) && (k = B.toLowerCase(), n[k] = w[B](), x.push((n[k] ? "" : "no-") + k));
            return n.addTest = function (a, b) {
                if ("object" == typeof a)
                    for (var d in a) l(a, d) && n.addTest(d, a[d]);
                else {
                    if (a = a.toLowerCase(), n[a] !== c) return n;
                    b = "function" == typeof b ? b() : b, "undefined" != typeof enableClasses && enableClasses && (o.className += " " + (b ? "" : "no-") + a), n[a] = b
                }
                return n
            }, d(""), q = j = null, n._version = m, n._prefixes = s, n._domPrefixes = v, n._cssomPrefixes = u, n.testProp = function (a) {
                return g([a])
            }, n.testAllProps = i, n.testStyles = z, n.prefixed = function (a, b, c) {
                return b ? i(a, b, c) : i(a, "pfx")
            }, n
        }(a, b),
        lc = {
            ok: !1,
            is: function () {
                return !1
            },
            request: function () {},
            cancel: function () {},
            event: "",
            prefix: ""
        }, mc = "webkit moz o ms khtml".split(" ");
    if ("undefined" != typeof b.cancelFullScreen) lc.ok = !0;
    else
        for (var nc = 0, oc = mc.length; oc > nc; nc++)
            if (lc.prefix = mc[nc], "undefined" != typeof b[lc.prefix + "CancelFullScreen"]) {
                lc.ok = !0;
                break
            } lc.ok && (lc.event = lc.prefix + "fullscreenchange", lc.is = function () {
        switch (this.prefix) {
            case "":
                return b.fullScreen;
            case "webkit":
                return b.webkitIsFullScreen;
            default:
                return b[this.prefix + "FullScreen"]
        }
    }, lc.request = function (a) {
        return "" === this.prefix ? a.requestFullScreen() : a[this.prefix + "RequestFullScreen"]()
    }, lc.cancel = function () {
        return "" === this.prefix ? b.cancelFullScreen() : b[this.prefix + "CancelFullScreen"]()
    });
    var pc, qc = {
        lines: 12,
        length: 5,
        width: 2,
        radius: 7,
        corners: 1,
        rotate: 15,
        color: "rgba(128, 128, 128, .75)",
        hwaccel: !0
    }, rc = {
        top: "auto",
        left: "auto",
        className: ""
    };
    ! function (a, b) {
        pc = b()
    }(this, function () {
        function a(a, c) {
            var d, e = b.createElement(a || "div");
            for (d in c) e[d] = c[d];
            return e
        }

        function c(a) {
            for (var b = 1, c = arguments.length; c > b; b++) a.appendChild(arguments[b]);
            return a
        }

        function d(a, b, c, d) {
            var e = ["opacity", b, ~~ (100 * a), c, d].join("-"),
                f = .01 + c / d * 100,
                g = Math.max(1 - (1 - a) / b * (100 - f), a),
                h = m.substring(0, m.indexOf("Animation")).toLowerCase(),
                i = h && "-" + h + "-" || "";
            return o[e] || (p.insertRule("@" + i + "keyframes " + e + "{0%{opacity:" + g + "}" + f + "%{opacity:" + a + "}" + (f + .01) + "%{opacity:1}" + (f + b) % 100 + "%{opacity:" + a + "}100%{opacity:" + g + "}}", p.cssRules.length), o[e] = 1), e
        }

        function f(a, b) {
            var c, d, f = a.style;
            for (b = b.charAt(0).toUpperCase() + b.slice(1), d = 0; d < n.length; d++)
                if (c = n[d] + b, f[c] !== e) return c;
            return f[b] !== e ? b : void 0
        }

        function g(a, b) {
            for (var c in b) a.style[f(a, c) || c] = b[c];
            return a
        }

        function h(a) {
            for (var b = 1; b < arguments.length; b++) {
                var c = arguments[b];
                for (var d in c) a[d] === e && (a[d] = c[d])
            }
            return a
        }

        function i(a) {
            for (var b = {
                x: a.offsetLeft,
                y: a.offsetTop
            }; a = a.offsetParent;) b.x += a.offsetLeft, b.y += a.offsetTop;
            return b
        }

        function j(a, b) {
            return "string" == typeof a ? a : a[b % a.length]
        }

        function k(a) {
            return "undefined" == typeof this ? new k(a) : void(this.opts = h(a || {}, k.defaults, q))
        }

        function l() {
            function b(b, c) {
                return a("<" + b + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', c)
            }
            p.addRule(".spin-vml", "behavior:url(#default#VML)"), k.prototype.lines = function (a, d) {
                function e() {
                    return g(b("group", {
                        coordsize: k + " " + k,
                        coordorigin: -i + " " + -i
                    }), {
                        width: k,
                        height: k
                    })
                }

                function f(a, f, h) {
                    c(m, c(g(e(), {
                        rotation: 360 / d.lines * a + "deg",
                        left: ~~f
                    }), c(g(b("roundrect", {
                        arcsize: d.corners
                    }), {
                        width: i,
                        height: d.width,
                        left: d.radius,
                        top: -d.width >> 1,
                        filter: h
                    }), b("fill", {
                        color: j(d.color, a),
                        opacity: d.opacity
                    }), b("stroke", {
                        opacity: 0
                    }))))
                }
                var h, i = d.length + d.width,
                    k = 2 * i,
                    l = 2 * -(d.width + d.length) + "px",
                    m = g(e(), {
                        position: "absolute",
                        top: l,
                        left: l
                    });
                if (d.shadow)
                    for (h = 1; h <= d.lines; h++) f(h, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                for (h = 1; h <= d.lines; h++) f(h);
                return c(a, m)
            }, k.prototype.opacity = function (a, b, c, d) {
                var e = a.firstChild;
                d = d.shadow && d.lines || 0, e && b + d < e.childNodes.length && (e = e.childNodes[b + d], e = e && e.firstChild, e = e && e.firstChild, e && (e.opacity = c))
            }
        }
        var m, n = ["webkit", "Moz", "ms", "O"],
            o = {}, p = function () {
                var d = a("style", {
                    type: "text/css"
                });
                return c(b.getElementsByTagName("head")[0], d), d.sheet || d.styleSheet
            }(),
            q = {
                lines: 12,
                length: 7,
                width: 5,
                radius: 10,
                rotate: 0,
                corners: 1,
                color: "#000",
                direction: 1,
                speed: 1,
                trail: 100,
                opacity: .25,
                fps: 20,
                zIndex: 2e9,
                className: "spinner",
                top: "auto",
                left: "auto",
                position: "relative"
            };
        k.defaults = {}, h(k.prototype, {
            spin: function (b) {
                this.stop();
                var c, d, e = this,
                    f = e.opts,
                    h = e.el = g(a(0, {
                        className: f.className
                    }), {
                        position: f.position,
                        width: 0,
                        zIndex: f.zIndex
                    }),
                    j = f.radius + f.length + f.width;
                if (b && (b.insertBefore(h, b.firstChild || null), d = i(b), c = i(h), g(h, {
                    left: ("auto" == f.left ? d.x - c.x + (b.offsetWidth >> 1) : parseInt(f.left, 10) + j) + "px",
                    top: ("auto" == f.top ? d.y - c.y + (b.offsetHeight >> 1) : parseInt(f.top, 10) + j) + "px"
                })), h.setAttribute("role", "progressbar"), e.lines(h, e.opts), !m) {
                    var k, l = 0,
                        n = (f.lines - 1) * (1 - f.direction) / 2,
                        o = f.fps,
                        p = o / f.speed,
                        q = (1 - f.opacity) / (p * f.trail / 100),
                        r = p / f.lines;
                    ! function s() {
                        l++;
                        for (var a = 0; a < f.lines; a++) k = Math.max(1 - (l + (f.lines - a) * r) % p * q, f.opacity), e.opacity(h, a * f.direction + n, k, f);
                        e.timeout = e.el && setTimeout(s, ~~ (1e3 / o))
                    }()
                }
                return e
            },
            stop: function () {
                var a = this.el;
                return a && (clearTimeout(this.timeout), a.parentNode && a.parentNode.removeChild(a), this.el = e), this
            },
            lines: function (b, e) {
                function f(b, c) {
                    return g(a(), {
                        position: "absolute",
                        width: e.length + e.width + "px",
                        height: e.width + "px",
                        background: b,
                        boxShadow: c,
                        transformOrigin: "left",
                        transform: "rotate(" + ~~(360 / e.lines * i + e.rotate) + "deg) translate(" + e.radius + "px,0)",
                        borderRadius: (e.corners * e.width >> 1) + "px"
                    })
                }
                for (var h, i = 0, k = (e.lines - 1) * (1 - e.direction) / 2; i < e.lines; i++) h = g(a(), {
                    position: "absolute",
                    top: 1 + ~(e.width / 2) + "px",
                    transform: e.hwaccel ? "translate3d(0,0,0)" : "",
                    opacity: e.opacity,
                    animation: m && d(e.opacity, e.trail, k + i * e.direction, e.lines) + " " + 1 / e.speed + "s linear infinite"
                }), e.shadow && c(h, g(f("#000", "0 0 4px #000"), {
                    top: "2px"
                })), c(b, c(h, f(j(e.color, i), "0 0 1px rgba(0,0,0,.1)")));
                return b
            },
            opacity: function (a, b, c) {
                b < a.childNodes.length && (a.childNodes[b].style.opacity = c)
            }
        });
        var r = g(a("group"), {
            behavior: "url(#default#VML)"
        });
        return !f(r, "transform") && r.adj ? l() : m = f(r, "animation"), k
    });
    var sc, tc, uc, vc, wc, xc, yc = d(a),
        zc = d(b),
        Ac = "quirks" === c.hash.replace("#", ""),
        Bc = kc.csstransforms3d,
        Cc = Bc && !Ac,
        Dc = Bc || "CSS1Compat" === b.compatMode,
        Ec = lc.ok,
        Fc = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),
        Gc = !Cc || Fc,
        Hc = "addEventListener",
        Ic = navigator.msPointerEnabled,
        Jc = "onwheel" in b.createElement("div") ? "wheel" : b.onmousewheel !== e ? "mousewheel" : "DOMMouseScroll",
        Kc = 250,
        Lc = 300,
        Mc = 1400,
        Nc = 5e3,
        Oc = 2,
        Pc = 64,
        Qc = 500,
        Rc = 333,
        Sc = "$stageFrame",
        Tc = "$navDotFrame",
        Uc = "$navThumbFrame",
        Vc = f([.1, 0, .25, 1]);
    jQuery.Fotorama = function (a, e) {
        function f() {
            d.each(ld, function (a, b) {
                if (!b.i) {
                    b.i = Zd++;
                    var c = z(b.video, !0);
                    if (c) {
                        var d = {};
                        b.video = c, b.img || b.thumb ? b.thumbsReady = !0 : d = A(b, ld, Vd), B(ld, {
                            img: d.img,
                            thumb: d.thumb
                        }, b.i, Vd)
                    }
                }
            })
        }

        function g(a) {
            var b = "keydown." + bb,
                c = "keydown." + bb + Wd,
                d = "resize." + bb + Wd;
            a ? (zc.on(c, function (a) {
                pd && 27 === a.keyCode ? (S(a), bd(pd, !0, !0)) : (Vd.fullScreen || e.keyboard && !Vd.index) && (27 === a.keyCode ? (S(a), Vd.cancelFullScreen()) : 39 === a.keyCode || 40 === a.keyCode && Vd.fullScreen ? (S(a), Vd.show({
                    index: ">",
                    slow: a.altKey,
                    user: !0
                })) : (37 === a.keyCode || 38 === a.keyCode && Vd.fullScreen) && (S(a), Vd.show({
                    index: "<",
                    slow: a.altKey,
                    user: !0
                })))
            }), Vd.index || zc.off(b).on(b, "textarea, input, select", function (a) {
                !tc.hasClass(cb) && a.stopPropagation()
            }), yc.on(d, Vd.resize)) : (zc.off(c), yc.off(d))
        }

        function i(b) {
            b !== i.f && (b ? (a.html("").addClass(bb + " " + Xd).append(be).before(_d).before(ae), _(Vd)) : (be.detach(), _d.detach(), ae.detach(), a.html($d.urtext).removeClass(Xd), ab(Vd)), g(b), i.f = b)
        }

        function j() {
            ld = Vd.data = ld || O(e.data) || C(a), md = Vd.size = ld.length, !kd.ok && e.shuffle && N(ld), f(), ue = y(ue), md && i(!0)
        }

        function n() {
            var a = 2 > md || pd;
            xe.noMove = a || Ed, xe.noSwipe = a || !e.swipe, !Id && de.toggleClass(sb, !xe.noMove && !xe.noSwipe), Ic && be.toggleClass(lb, !xe.noSwipe)
        }

        function s(a) {
            a === !0 && (a = ""), e.autoplay = Math.max(+a || Nc, 1.5 * Hd)
        }

        function t(a) {
            return a ? "add" : "remove"
        }

        function w() {
            Vd.options = e = Q(e), Ed = "crossfade" === e.transition || "dissolve" === e.transition, yd = e.loop && (md > 2 || Ed), Hd = +e.transitionduration || Lc, Kd = "rtl" === e.direction;
            var a = {
                add: [],
                remove: []
            };
            md > 1 ? (zd = e.nav, Bd = "top" === e.navposition, a.remove.push(Ob), he.toggle(e.arrows)) : (zd = !1, he.hide()), cc(), od = new pc(d.extend(qc, e.spinner, rc, {
                direction: Kd ? -1 : 1
            })), wc(), xc(), e.autoplay && s(e.autoplay), Fd = m(e.thumbwidth) || Pc, Gd = m(e.thumbheight) || Pc, ye.ok = Ae.ok = e.trackpad && !Gc, n(), Vc(e, !0), Ad = "thumbs" === zd, Ad ? (jc(md, "navThumb"), nd = me, Ud = Uc, I(_d, d.Fotorama.jst.style({
                w: Fd,
                h: Gd,
                b: e.thumbborderwidth,
                m: e.thumbmargin,
                s: Wd,
                q: !Dc
            })), je.addClass(Cb).removeClass(Bb)) : "dots" === zd ? (jc(md, "navDot"), nd = le, Ud = Tc, je.addClass(Bb).removeClass(Cb)) : (zd = !1, je.removeClass(Cb + " " + Bb)), zd && (Bd ? ie.insertBefore(ce) : ie.insertAfter(ce), oc.nav = !1, oc(nd, ke, "nav")), Cd = e.allowfullscreen, Cd ? (oe.appendTo(ce), Dd = Ec && "native" === Cd) : (oe.detach(), Dd = !1), a[t(Ed)].push(hb), a[t(!Ed)].push(ib), a[t(Kd)].push(mb), Jd = e.shadows && !Gc, a[t(!Jd)].push(kb), be.addClass(a.add.join(" ")).removeClass(a.remove.join(" ")), ve = d.extend({}, e)
        }

        function x(a) {
            return 0 > a ? (md + a % md) % md : a >= md ? a % md : a
        }

        function y(a) {
            return h(a, 0, md - 1)
        }

        function D(a) {
            return yd ? x(a) : y(a)
        }

        function W(a) {
            return a > 0 || yd ? a - 1 : !1
        }

        function X(a) {
            return md - 1 > a || yd ? a + 1 : !1
        }

        function $() {
            xe.min = yd ? -1 / 0 : -q(md - 1, we.w, e.margin, sd), xe.max = yd ? 1 / 0 : -q(0, we.w, e.margin, sd), xe.snap = we.w + e.margin
        }

        function Gb() {
            ze.min = Math.min(0, we.nw - ke.width()), ze.max = 0, ke.toggleClass(sb, !(ze.noMove = ze.min === ze.max))
        }

        function Hb(a, b, c) {
            if ("number" == typeof a) {
                a = new Array(a);
                var e = !0
            }
            return d.each(a, function (a, d) {
                if (e && (d = a), "number" == typeof d) {
                    var f = ld[x(d)];
                    if (f) {
                        var g = "$" + b + "Frame",
                            h = f[g];
                        c.call(this, a, d, f, h, g, h && h.data())
                    }
                }
            })
        }

        function Ib(a, b, c, d) {
            (!Ld || "*" === Ld && d === xd) && (a = p(e.width) || p(a) || Qc, b = p(e.height) || p(b) || Rc, Vd.resize({
                width: a,
                ratio: e.ratio || c || a / b
            }, 0, d === xd ? !0 : "*"))
        }

        function Jb(a, b, c, f, g) {
            Hb(a, b, function (a, h, i, j, k, l) {
                function m(a) {
                    var b = x(h);
                    Wc(a, {
                        index: b,
                        src: v,
                        frame: ld[b]
                    })
                }

                function n() {
                    s.remove(), d.Fotorama.cache[v] = "error", i.html && "stage" === b || !w || w === v ? (!v || i.html || q ? "stage" === b && (j.trigger("f:load").removeClass(Tb + " " + Sb).addClass(Ub), m("load"), Ib()) : (j.trigger("f:error").removeClass(Tb).addClass(Sb), m("error")), l.state = "error", !(md > 1 && ld[h] === i) || i.html || i.deleted || i.video || q || (i.deleted = !0, Vd.splice(h, 1))) : (i[u] = v = w, Jb([h], b, c, f, !0))
                }

                function o() {
                    d.Fotorama.measures[v] = t.measures = d.Fotorama.measures[v] || {
                        width: r.width,
                        height: r.height,
                        ratio: r.width / r.height
                    }, Ib(t.measures.width, t.measures.height, t.measures.ratio, h), s.off("load error").addClass(Yb + (q ? " " + Zb : "")).prependTo(j), H(s, c || we, f || i.fit || e.fit), d.Fotorama.cache[v] = l.state = "loaded", setTimeout(function () {
                        j.trigger("f:load").removeClass(Tb + " " + Sb).addClass(Ub + " " + (q ? Vb : Wb)), "stage" === b && m("load")
                    }, 5)
                }

                function p() {
                    var a = 10;
                    F(function () {
                        return !Sd || !a-- && !Gc
                    }, function () {
                        o()
                    })
                }
                if (j) {
                    var q = Vd.fullScreen && i.full && i.full !== i.img && !l.$full && "stage" === b;
                    if (!l.$img || g || q) {
                        var r = new Image,
                            s = d(r),
                            t = s.data();
                        l[q ? "$full" : "$img"] = s;
                        var u = "stage" === b ? q ? "full" : "img" : "thumb",
                            v = i[u],
                            w = q ? null : i["stage" === b ? "thumb" : "img"];
                        if ("navThumb" === b && (j = l.$wrap), !v) return void n();
                        d.Fotorama.cache[v] ? ! function y() {
                            "error" === d.Fotorama.cache[v] ? n() : "loaded" === d.Fotorama.cache[v] ? setTimeout(p, 0) : setTimeout(y, 100)
                        }() : (d.Fotorama.cache[v] = "*", s.on("load", p).on("error", n)), l.state = "", r.src = v
                    }
                }
            })
        }

        function Xb(a) {
            te.append(od.spin().el).appendTo(a)
        }

        function cc() {
            te.detach(), od && od.stop()
        }

        function ic() {
            var a = Vd.activeFrame[Sc];
            a && !a.data().state && (Xb(a), a.on("f:load f:error", function () {
                a.off("f:load f:error"), cc()
            }))
        }

        function jc(a, b) {
            Hb(a, b, function (a, c, f, g, h, i) {
                g || (g = f[h] = be[h].clone(), i = g.data(), i.data = f, "stage" === b ? (f.html && d('<div class="' + bc + '"></div>').append(f._html ? d(f.html).removeAttr("id").html(f._html) : f.html).appendTo(g), e.captions && f.caption && d(M(fc, M(gc, f.caption))).appendTo(g), f.video && g.addClass(qb).append(qe.clone()), ee = ee.add(g)) : "navDot" === b ? le = le.add(g) : "navThumb" === b && (i.$wrap = g.children(":first"), me = me.add(g), f.video && g.append(qe.clone())))
            })
        }

        function kc(a, b, c) {
            return a && a.length && H(a, b, c)
        }

        function mc(a) {
            Hb(a, "stage", function (a, b, c, f, g, h) {
                if (f) {
                    Ce[Sc][x(b)] = f.css(d.extend({
                        left: Ed ? 0 : q(b, we.w, e.margin, sd)
                    }, Ed && l(0))), E(f[0]) && (f.appendTo(de), bd(c.$video));
                    var i = c.fit || e.fit;
                    kc(h.$img, we, i), kc(h.$full, we, i)
                }
            })
        }

        function nc(a, b) {
            if ("thumbs" === zd && !isNaN(a)) {
                var c = -a,
                    e = -a + we.nw;
                me.each(function () {
                    var a = d(this),
                        f = a.data(),
                        g = f.eq,
                        h = {
                            h: Gd
                        }, i = "cover";
                    h.w = f.w, f.l + f.w < c || f.l > e || kc(f.$img, h, i) || b && Jb([g], "navThumb", h, i)
                })
            }
        }

        function oc(a, b, c) {
            if (!oc[c]) {
                var f = "nav" === c && Ad,
                    g = 0;
                b.append(a.filter(function () {
                    for (var a, b = d(this), c = b.data(), e = 0, f = ld.length; f > e; e++)
                        if (c.data === ld[e]) {
                            a = !0, c.eq = e;
                            break
                        }
                    return a || b.remove() && !1
                }).sort(function (a, b) {
                    return d(a).data().eq - d(b).data().eq
                }).each(function () {
                    if (f) {
                        var a = d(this),
                            b = a.data(),
                            c = Math.round(Gd * b.data.thumbratio) || Fd;
                        b.l = g, b.w = c, a.css({
                            width: c
                        }), g += c + e.thumbmargin
                    }
                })), oc[c] = !0
            }
        }

        function uc(a) {
            return a - De > we.w / 3
        }

        function vc(a) {
            return !(yd || ue + a && ue - md + a || pd)
        }

        function wc() {
            fe.toggleClass(vb, vc(0)), ge.toggleClass(vb, vc(1))
        }

        function xc() {
            ye.ok && (ye.prevent = {
                "<": vc(0),
                ">": vc(1)
            })
        }

        function Ac(a) {
            var b, c, d = a.data();
            return Ad ? (b = d.l, c = d.w) : (b = a.position().left, c = a.width()), {
                c: b + c / 2,
                min: -b + 10 * e.thumbmargin,
                max: -b + we.w - c - 10 * e.thumbmargin
            }
        }

        function Bc(a) {
            var b = Vd.activeFrame[Ud].data();
            U(ne, {
                time: .9 * a,
                pos: b.l,
                width: b.w - 2 * e.thumbborderwidth
            })
        }

        function Fc(a) {
            var b = ld[a.guessIndex][Ud];
            if (b) {
                var c = ze.min !== ze.max,
                    d = c && Ac(Vd.activeFrame[Ud]),
                    e = c && (a.keep && Fc.l ? Fc.l : h((a.coo || we.nw / 2) - Ac(b).c, d.min, d.max)),
                    f = c && h(e, ze.min, ze.max),
                    g = .9 * a.time;
                U(ke, {
                    time: g,
                    pos: f || 0,
                    onEnd: function () {
                        nc(f, !0)
                    }
                }), ad(je, J(f, ze.min, ze.max)), Fc.l = e
            }
        }

        function Hc() {
            Jc(Ud), Be[Ud].push(Vd.activeFrame[Ud].addClass(Nb))
        }

        function Jc(a) {
            for (var b = Be[a]; b.length;) b.shift().removeClass(Nb)
        }

        function Mc(a) {
            var b = Ce[a];
            d.each(rd, function (a, c) {
                delete b[x(c)]
            }), d.each(b, function (a, c) {
                delete b[a], c.detach()
            })
        }

        function Oc(a) {
            sd = td = ue;
            var b = Vd.activeFrame,
                c = b[Sc];
            c && (Jc(Sc), Be[Sc].push(c.addClass(Nb)), a || Vd.show.onEnd(!0), u(de, 0, !0), Mc(Sc), mc(rd), $(), Gb())
        }

        function Vc(a, b) {
            a && d.extend(we, {
                width: a.width || we.width,
                height: a.height,
                minwidth: a.minwidth,
                maxwidth: a.maxwidth,
                minheight: a.minheight,
                maxheight: a.maxheight,
                ratio: R(a.ratio)
            }) && !b && d.extend(e, {
                width: we.width,
                height: we.height,
                minwidth: we.minwidth,
                maxwidth: we.maxwidth,
                minheight: we.minheight,
                maxheight: we.maxheight,
                ratio: we.ratio
            })
        }

        function Wc(b, c) {
            a.trigger(bb + ":" + b, [Vd, c])
        }

        function Xc() {
            clearTimeout(Yc.t), Sd = 1, e.stopautoplayontouch ? Vd.stopAutoplay() : Pd = !0
        }

        function Yc() {
            e.stopautoplayontouch || (Zc(), $c()), Yc.t = setTimeout(function () {
                Sd = 0
            }, Lc + Kc)
        }

        function Zc() {
            Pd = !(!pd && !Qd)
        }

        function $c() {
            if (clearTimeout($c.t), !e.autoplay || Pd) return void(Vd.autoplay && (Vd.autoplay = !1, Wc("stopautoplay")));
            Vd.autoplay || (Vd.autoplay = !0, Wc("startautoplay"));
            var a = ue,
                b = Vd.activeFrame[Sc].data();
            F(function () {
                return b.state || a !== ue
            }, function () {
                $c.t = setTimeout(function () {
                    Pd || a !== ue || Vd.show(yd ? T(!Kd) : x(ue + (Kd ? -1 : 1)))
                }, e.autoplay)
            })
        }

        function _c() {
            Vd.fullScreen && (Vd.fullScreen = !1, Ec && lc.cancel(Yd), tc.removeClass(cb), sc.removeClass(cb), a.removeClass(Qb).insertAfter(ae), we = d.extend({}, Rd), bd(pd, !0, !0), gd("x", !1), Vd.resize(), Jb(rd, "stage"), P(Nd, Md), Wc("fullscreenexit"))
        }

        function ad(a, b) {
            Jd && (a.removeClass(Lb + " " + Mb), b && !pd && a.addClass(b.replace(/^|\s/g, " " + Kb + "--")))
        }

        function bd(a, b, c) {
            b && (be.removeClass(gb), pd = !1, n()), a && a !== pd && (a.remove(), Wc("unloadvideo")), c && (Zc(), $c())
        }

        function cd(a) {
            be.toggleClass(jb, a)
        }

        function dd(a) {
            if (!xe.flow) {
                var b = a ? a.pageX : dd.x,
                    c = b && !vc(uc(b)) && e.click;
                dd.p === c || !Ed && e.swipe || !ce.toggleClass(tb, c) || (dd.p = c, dd.x = b)
            }
        }

        function ed(a) {
            clearTimeout(ed.t), e.clicktransition && e.clicktransition !== e.transition ? (Id = e.transition, Vd.setOptions({
                transition: e.clicktransition
            }), ed.t = setTimeout(function () {
                Vd.show(a)
            }, 10)) : Vd.show(a)
        }

        function fd(a, b) {
            var c = a.target,
                f = d(c);
            f.hasClass(dc) ? Vd.playVideo() : c === pe ? Vd[(Vd.fullScreen ? "cancel" : "request") + "FullScreen"]() : pd ? c === se && bd(pd, !0, !0) : b ? cd() : e.click && ed({
                index: a.shiftKey || T(uc(a._x)),
                slow: a.altKey,
                user: !0
            })
        }

        function gd(a, b) {
            xe[a] = ze[a] = b
        }

        function hd(a, b) {
            var c = d(this).data().eq;
            ed({
                index: c,
                slow: a.altKey,
                user: !0,
                coo: a._x - je.offset().left,
                time: b
            })
        }

        function id() {
            if (j(), w(), !id.i) {
                id.i = !0;
                var a = e.startindex;
                (a || e.hash && c.hash) && (xd = K(a || c.hash.replace(/^#/, ""), ld, 0 === Vd.index || a, a)), ue = sd = td = ud = xd = D(xd) || 0
            }
            if (md) {
                if (jd()) return;
                pd && bd(pd, !0), rd = [], Mc(Sc), Vd.show({
                    index: ue,
                    time: 0,
                    reset: id.ok
                }), Vd.resize()
            } else Vd.destroy();
            id.ok = !0
        }

        function jd() {
            return !jd.f === Kd ? (jd.f = Kd, ue = md - 1 - ue, Vd.reverse(), !0) : void 0
        }

        function kd() {
            kd.ok || (kd.ok = !0, Wc("ready"))
        }
        sc = sc || d("html"), tc = tc || d("body");
        var ld, md, nd, od, pd, qd, rd, sd, td, ud, vd, wd, xd, yd, zd, Ad, Bd, Cd, Dd, Ed, Fd, Gd, Hd, Id, Jd, Kd, Ld, Md, Nd, Od, Pd, Qd, Rd, Sd, Td, Ud, Vd = this,
            Wd = d.now(),
            Xd = bb + Wd,
            Yd = a[0],
            Zd = 1,
            $d = a.data(),
            _d = d("<style></style>"),
            ae = d(M(Pb)),
            be = d(M(db)),
            ce = d(M(ob)).appendTo(be),
            de = (ce[0], d(M(rb)).appendTo(ce)),
            ee = d(),
            fe = d(M(ub + " " + wb)),
            ge = d(M(ub + " " + xb)),
            he = fe.add(ge).appendTo(ce),
            ie = d(M(zb)),
            je = d(M(yb)).appendTo(ie),
            ke = d(M(Ab)).appendTo(je),
            le = d(),
            me = d(),
            ne = (de.data(), ke.data(), d(M(ac)).appendTo(ke)),
            oe = d(M(Rb)),
            pe = oe[0],
            qe = d(M(dc)),
            re = d(M(ec)).appendTo(ce),
            se = re[0],
            te = d(M(hc)),
            ue = !1,
            ve = {}, we = {}, xe = {}, ye = {}, ze = {}, Ae = {}, Be = {}, Ce = {}, De = 0,
            Ee = [];
        be[Sc] = d(M(pb)), be[Uc] = d(M(Db + " " + Fb, M(_b))), be[Tc] = d(M(Db + " " + Eb, M($b))), Be[Sc] = [], Be[Uc] = [], Be[Tc] = [], Ce[Sc] = {}, be.addClass(Cc ? fb : eb), $d.fotorama = this, Vd.startAutoplay = function (a) {
            return Vd.autoplay ? this : (Pd = Qd = !1, s(a || e.autoplay), $c(), this)
        }, Vd.stopAutoplay = function () {
            return Vd.autoplay && (Pd = Qd = !0, $c()), this
        }, Vd.show = function (a) {
            var b;
            "object" != typeof a ? (b = a, a = {}) : b = a.index, b = ">" === b ? td + 1 : "<" === b ? td - 1 : "<<" === b ? 0 : ">>" === b ? md - 1 : b, b = isNaN(b) ? K(b, ld, !0) : b, b = "undefined" == typeof b ? ue || 0 : b, Vd.activeIndex = ue = D(b), vd = W(ue), wd = X(ue), rd = [ue, vd, wd], td = yd ? b : ue;
            var c = Math.abs(ud - td),
                d = v(a.time, function () {
                    return Math.min(Hd * (1 + (c - 1) / 12), 2 * Hd)
                }),
                f = a.overPos;
            a.slow && (d *= 10), Vd.activeFrame = qd = ld[ue], bd(pd, qd.i !== ld[x(sd)].i), jc(rd, "stage"), mc(Gc ? [td] : [td, W(td), X(td)]), gd("go", !0), a.reset || Wc("show", {
                user: a.user,
                time: d
            }), Pd = !0;
            var g = Vd.show.onEnd = function (b) {
                if (!g.ok) {
                    if (g.ok = !0, b || Oc(!0), !a.reset && (Wc("showend", {
                        user: a.user
                    }), !b && Id && Id !== e.transition)) return Vd.setOptions({
                        transition: Id
                    }), void(Id = !1);
                    ic(), Jb(rd, "stage"), gd("go", !1), xc(), dd(), Zc(), $c()
                }
            };
            if (Ed) {
                var i = qd[Sc],
                    j = ue !== ud ? ld[ud][Sc] : null;
                V(i, j, ee, {
                    time: d,
                    method: e.transition,
                    onEnd: g
                }, Ee)
            } else U(de, {
                pos: -q(td, we.w, e.margin, sd),
                overPos: f,
                time: d,
                onEnd: g,
                _001: !0
            }); if (wc(), zd) {
                Hc();
                var k = y(ue + h(td - ud, -1, 1));
                Fc({
                    time: d,
                    coo: k !== ue && a.coo,
                    guessIndex: "undefined" != typeof a.coo ? k : ue,
                    keep: a.reset
                }), Ad && Bc(d)
            }
            return Od = "undefined" != typeof ud && ud !== ue, ud = ue, e.hash && Od && !Vd.eq && G(qd.id || ue + 1), this
        }, Vd.requestFullScreen = function () {
            return Cd && !Vd.fullScreen && (Md = yc.scrollTop(), Nd = yc.scrollLeft(), P(0, 0), gd("x", !0), Rd = d.extend({}, we), a.addClass(Qb).appendTo(tc.addClass(cb)), sc.addClass(cb), bd(pd, !0, !0), Vd.fullScreen = !0, Dd && lc.request(Yd), Vd.resize(), Jb(rd, "stage"), ic(), Wc("fullscreenenter")), this
        }, Vd.cancelFullScreen = function () {
            return Dd && lc.is() ? lc.cancel(b) : _c(), this
        }, b.addEventListener && b.addEventListener(lc.event, function () {
            !ld || lc.is() || pd || _c()
        }, !1), Vd.resize = function (a) {
            if (!ld) return this;
            Vc(Vd.fullScreen ? {
                width: "100%",
                maxwidth: null,
                minwidth: null,
                height: "100%",
                maxheight: null,
                minheight: null
            } : Q(a), Vd.fullScreen);
            var b = arguments[1] || 0,
                c = arguments[2],
                d = we.width,
                f = we.height,
                g = we.ratio,
                i = yc.height() - (zd ? je.height() : 0);
            return p(d) && (be.addClass(nb).css({
                width: d,
                minWidth: we.minwidth,
                maxWidth: we.maxwidth
            }), d = we.W = we.w = be.width(), we.nw = zd && o(e.navwidth, d) || d, e.glimpse && (we.w -= Math.round(2 * (o(e.glimpse, d) || 0))), de.css({
                width: we.w,
                marginLeft: (we.W - we.w) / 2
            }), f = o(f, i), f = f || g && d / g, f && (d = Math.round(d), f = we.h = Math.round(h(f, o(we.minheight, i), o(we.maxheight, i))), ce.stop().animate({
                width: d,
                height: f
            }, b, function () {
                be.removeClass(nb)
            }), Oc(), zd && (je.stop().animate({
                width: we.nw
            }, b), Fc({
                guessIndex: ue,
                time: b,
                keep: !0
            }), Ad && oc.nav && Bc(b)), Ld = c || !0, kd())), De = ce.offset().left, this
        }, Vd.setOptions = function (a) {
            return d.extend(e, a), id(), this
        }, Vd.shuffle = function () {
            return ld && N(ld) && id(), this
        }, Vd.destroy = function () {
            return Vd.cancelFullScreen(), Vd.stopAutoplay(), ld = Vd.data = null, i(), rd = [], Mc(Sc), this
        }, Vd.playVideo = function () {
            var a = Vd.activeFrame,
                b = a.video,
                c = ue;
            return "object" == typeof b && a.videoReady && (Dd && Vd.fullScreen && Vd.cancelFullScreen(), F(function () {
                return !lc.is() || c !== ue
            }, function () {
                c === ue && (a.$video = a.$video || d(d.Fotorama.jst.video(b)), a.$video.appendTo(a[Sc]), be.addClass(gb), pd = a.$video, n(), Wc("loadvideo"))
            })), this
        }, Vd.stopVideo = function () {
            return bd(pd, !0, !0), this
        }, ce.on("mousemove", dd), xe = Y(de, {
            onStart: Xc,
            onMove: function (a, b) {
                ad(ce, b.edge)
            },
            onTouchEnd: Yc,
            onEnd: function (a) {
                ad(ce);
                var b = (Ic && !Td || a.touch) && e.arrows;
                if (a.moved || b && a.pos !== a.newPos && !a.control) {
                    var c = r(a.newPos, we.w, e.margin, sd);
                    Vd.show({
                        index: c,
                        time: Ed ? Hd : a.time,
                        overPos: a.overPos,
                        user: !0
                    })
                } else a.aborted || a.control || fd(a.startEvent, b)
            },
            _001: !0,
            timeLow: 1,
            timeHigh: 1,
            friction: 2,
            select: "." + Ob + ", ." + Ob + " *",
            $wrap: ce
        }), ze = Y(ke, {
            onStart: Xc,
            onMove: function (a, b) {
                ad(je, b.edge)
            },
            onTouchEnd: Yc,
            onEnd: function (a) {
                function b() {
                    Fc.l = a.newPos, Zc(), $c(), nc(a.newPos, !0)
                }
                if (a.moved) a.pos !== a.newPos ? (Pd = !0, U(ke, {
                    time: a.time,
                    pos: a.newPos,
                    overPos: a.overPos,
                    onEnd: b
                }), nc(a.newPos), Jd && ad(je, J(a.newPos, ze.min, ze.max))) : b();
                else {
                    var c = a.$target.closest("." + Db, ke)[0];
                    c && hd.call(c, a.startEvent)
                }
            },
            timeLow: .5,
            timeHigh: 2,
            friction: 5,
            $wrap: je
        }), ye = Z(ce, {
            shift: !0,
            onEnd: function (a, b) {
                Xc(), Yc(), Vd.show({
                    index: b,
                    slow: a.altKey
                })
            }
        }), Ae = Z(je, {
            onEnd: function (a, b) {
                Xc(), Yc();
                var c = u(ke) + .25 * b;
                ke.css(k(h(c, ze.min, ze.max))), Jd && ad(je, J(c, ze.min, ze.max)), Ae.prevent = {
                    "<": c >= ze.max,
                    ">": c <= ze.min
                }, clearTimeout(Ae.t), Ae.t = setTimeout(function () {
                    nc(c, !0)
                }, Kc), nc(c)
            }
        }), be.hover(function () {
            setTimeout(function () {
                Sd || (Td = !0, cd(!Td))
            }, 0)
        }, function () {
            Td && (Td = !1, cd(!Td))
        }), L(he, function (a) {
            S(a), ed({
                index: he.index(this) ? ">" : "<",
                slow: a.altKey,
                user: !0
            })
        }, {
            onStart: function () {
                Xc(), xe.control = !0
            },
            onTouchEnd: Yc
        }), d.each("load push pop shift unshift reverse sort splice".split(" "), function (a, b) {
            Vd[b] = function () {
                return ld = ld || [], "load" !== b ? Array.prototype[b].apply(ld, arguments) : arguments[0] && "object" == typeof arguments[0] && arguments[0].length && (ld = O(arguments[0])), id(), Vd
            }
        }), id()
    }, d.fn.fotorama = function (b) {
        return this.each(function () {
            var c = this,
                e = d(this),
                f = e.data(),
                g = f.fotorama;
            g ? g.setOptions(b) : F(function () {
                return !D(c)
            }, function () {
                f.urtext = e.html(), new d.Fotorama(e, d.extend({}, {
                    width: null,
                    minwidth: null,
                    maxwidth: "100%",
                    height: null,
                    minheight: null,
                    maxheight: null,
                    ratio: null,
                    margin: Oc,
                    glimpse: 0,
                    nav: "dots",
                    navposition: "bottom",
                    navwidth: null,
                    thumbwidth: Pc,
                    thumbheight: Pc,
                    thumbmargin: Oc,
                    thumbborderwidth: Oc,
                    allowfullscreen: !1,
                    fit: "contain",
                    transition: "slide",
                    clicktransition: null,
                    transitionduration: Lc,
                    captions: !0,
                    hash: !1,
                    startindex: 0,
                    loop: !1,
                    autoplay: !1,
                    stopautoplayontouch: !0,
                    keyboard: !1,
                    arrows: !0,
                    click: !0,
                    swipe: !0,
                    trackpad: !0,
                    shuffle: !1,
                    direction: "ltr",
                    shadows: !0,
                    spinner: null
                }, a.fotoramaDefaults, b, f))
            })
        })
    }, d.Fotorama.instances = [], d.Fotorama.cache = {}, d.Fotorama.measures = {}, d = d || {}, d.Fotorama = d.Fotorama || {}, d.Fotorama.jst = d.Fotorama.jst || {}, d.Fotorama.jst.style = function (a) {
        {
            var b, c = "";
            jc.escape
        }
        return c += ".fotorama" + (null == (b = a.s) ? "" : b) + " .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:" + (null == (b = a.m) ? "" : b) + "px;\nheight:" + (null == (b = a.h) ? "" : b) + "px}\n.fotorama" + (null == (b = a.s) ? "" : b) + " .fotorama__thumb-border{\nheight:" + (null == (b = a.h - a.b * (a.q ? 0 : 2)) ? "" : b) + "px;\nborder-width:" + (null == (b = a.b) ? "" : b) + "px;\nmargin-top:" + (null == (b = a.m) ? "" : b) + "px}"
    }, d.Fotorama.jst.video = function (a) {
        function b() {
            c += d.call(arguments, "")
        }
        var c = "",
            d = (jc.escape, Array.prototype.join);
        return c += '<div class="fotorama__video"><iframe src="', b(("youtube" == a.type ? "http://youtube.com/embed/" + a.id + "?autoplay=1" : "vimeo" == a.type ? "http://player.vimeo.com/video/" + a.id + "?autoplay=1&badge=0" : a.id) + (a.s && "custom" != a.type ? "&" + a.s : "")), c += '" frameborder="0" allowfullscreen></iframe></div>'
    }, d(function () {
        d("." + bb + ':not([data-auto="false"])').fotorama()
    })
}(window, document, location, "undefined" != typeof jQuery && jQuery);