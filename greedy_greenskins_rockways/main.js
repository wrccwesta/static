/*! @mascot-banner branch: master - commit: eec7ab288d9808d47857735ff89bf963ec3bdcf9 */
(() => {
    var t, e, i, s = {
            4549: (t, e, i) => {
                "use strict";
                var s = i(8826),
                    o = i(6866),
                    n = i(9076),
                    a = i(8594);
                window.PIXI = n;
                var r = i(3233),
                    h = i.n(r);

                function l(t) {
                    return t && "object" == typeof t && !Array.isArray(t)
                }

                function d(t) {
                    for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++) i[s - 1] = arguments[s];
                    if (!i.length) return t;
                    var o = i.shift();
                    if (l(t) && l(o))
                        for (var n in o) l(o[n]) ? (t[n] || Object.assign(t, {
                            [n]: {}
                        }), d(t[n], o[n])) : Object.assign(t, {
                            [n]: o[n]
                        });
                    return d(t, ...i)
                }
                class c {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.create(null);
                        (0, o.Z)(this, "subscribers", new Map), this.data = t
                    }
                    merge() {
                        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                        this.data = d({}, this.data, ...e)
                    }
                    subscribe(t, e) {
                        return this.subscribers.has(t) ? this.subscribers.get(t).add(e) : this.subscribers.set(t, new Set([e])), () => this.subscribers.get(t).delete(e)
                    }
                    set(t, e) {
                        return this.data[t] = e, this.subscribers.has(t) && this.subscribers.get(t).forEach((t => {
                            t(e)
                        })), e
                    }
                    get(t, e) {
                        return h()(this.data, t, e)
                    }
                }
                class u extends n.utils.EventEmitter {}
                var p = window.navigator.userAgent.match("CriOS") ? .86 : .96;
                class g extends u {
                    constructor() {
                        super(), (0, o.Z)(this, "locked", void 0), (0, o.Z)(this, "fullscreen", void 0), this.locked = !1, this.fullscreen = document.createElement("div"), this.fullscreen.setAttribute("style", "z-index: 1001;position: absolute;display: none;top: 0;left: 0;width: 1px;height: 99999px;overflow-y: scroll;"), document.body.appendChild(this.fullscreen), document.addEventListener("touchmove", (t => {
                            this.locked || (this.opened || t.touches.length > 1) && t.preventDefault()
                        }), {
                            passive: !1
                        })
                    }
                    get enabled() {
                        return !0
                    }
                    get opened() {
                        var t = window.innerWidth < window.innerHeight ? window.screen.height : window.screen.width;
                        return window.innerHeight === t || window.innerHeight / t >= p
                    }
                    lock() {
                        this.exit(), this.locked = !0
                    }
                    unlock() {
                        this.locked = !1, this.toggle()
                    }
                    open() {
                        this.fullscreen.style.display = "block"
                    }
                    exit() {
                        this.fullscreen.style.display = "none"
                    }
                    toggle() {
                        this.locked || (this.opened ? this.exit() : this.open(), window.scrollTo(0, 0))
                    }
                }
                class m extends u {
                    constructor(t) {
                        super(), (0, o.Z)(this, "locked", void 0), (0, o.Z)(this, "fullscreen", void 0), this.locked = !1, this.fullscreen = function() {
                            for (var t = [
                                    ["fullscreenEnabled", "fullscreenElement", "exitFullscreen", "requestFullscreen"],
                                    ["webkitFullscreenEnabled", "webkitFullscreenElement", "webkitExitFullscreen", "webkitRequestFullscreen"],
                                    ["mozFullScreenEnabled", "mozFullScreenElement", "mozCancelFullScreen", "mozRequestFullScreen"],
                                    ["msFullscreenEnabled", "msFullscreenElement", "msExitFullscreen", "msRequestFullscreen"]
                                ], e = 0, i = t.length; e < i; e += 1)
                                if (document[t[e][0]]) return t[e];
                            return t[0]
                        }(), window.addEventListener("resize", (() => {
                            this.emit("change", this.opened)
                        })), t.desktop || document.body.addEventListener("touchend", (() => {
                            this.open()
                        }))
                    }
                    get enabled() {
                        return Boolean(document[this.fullscreen[0]])
                    }
                    get opened() {
                        return window.screen.height === window.innerHeight
                    }
                    lock() {
                        this.locked = !0
                    }
                    unlock() {
                        this.locked = !1
                    }
                    open() {
                        document.documentElement[this.fullscreen[3]]()
                    }
                    exit() {
                        document[this.fullscreen[2]]()
                    }
                    toggle() {
                        this.opened ? this.exit() : this.open()
                    }
                }
                class A extends n.utils.EventEmitter {
                    constructor() {
                        super(...arguments), (0, o.Z)(this, "enabled", !1)
                    }
                    toggle() {
                        this.enabled = !this.enabled, this.emit("change", this.enabled)
                    }
                }
                var v = i(5992);
                class b extends v.v {}
                class w {
                    constructor(t) {
                        var e, i, s, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.navigator.userAgent.toLowerCase();
                        (0, o.Z)(this, "forceMobile", void 0), this.renderer = t, this.ua = n, this.forceMobile = null !== (e = null === (i = document.documentElement) || void 0 === i || null === (s = i.classList) || void 0 === s ? void 0 : s.contains("layout-mobile")) && void 0 !== e && e
                    }
                    match(t) {
                        return this.ua.includes(t)
                    }
                    get width() {
                        return window.innerWidth
                    }
                    get height() {
                        return window.innerHeight
                    }
                    get portrait() {
                        return this.height / this.width > 1
                    }
                    get landscape() {
                        return !this.portrait
                    }
                    get ios() {
                        return this.match("iphone") || this.match("ipad")
                    }
                    get android() {
                        return this.match("android")
                    }
                    get mobile() {
                        return this.match("iphone") || this.android && this.match("mobile") || this.forceMobile
                    }
                    get iPadPro() {
                        return "MacIntel" === window.navigator.platform && window.navigator.maxTouchPoints > 1
                    }
                    get tablet() {
                        return this.match("ipad") || this.android && !this.match("mobile") || this.iPadPro
                    }
                    get desktop() {
                        return !(this.mobile || this.tablet)
                    }
                    get platform() {
                        return this.mobile ? "phone" : this.tablet ? "tablet" : "desktop"
                    }
                    get supportsTouchEvents() {
                        return this.renderer.interaction.supportsTouchEvents
                    }
                    get supportsPointerEvents() {
                        return this.renderer.interaction.supportsPointerEvents
                    }
                }
                class f {}
                class y {
                    constructor(t) {
                        this.config = t
                    }
                    toFixedTruncate(t, e) {
                        var i = new RegExp("^-?\\d+(?:\\.\\d{0," + e + "})?", "g"),
                            s = t.toString().match(i)[0],
                            o = s.indexOf(".");
                        if (0 === e) return o > 0 ? s.slice(0, o) : s;
                        if (-1 === o) return s + "." + "0".repeat(e);
                        var n = e - (s.length - o) + 1;
                        return n > 0 ? s + "0".repeat(n) : s
                    }
                    delay(t) {
                        return new Promise((e => setTimeout(e, t)))
                    }
                    toMoney(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            i = parseInt(this.config.get("coinValue", "100")),
                            s = i >= 100 ? 2 : i >= 10 ? 1 : 0,
                            o = e > 0 && e >= i;
                        return this.toFixedTruncate(t / i, o ? 0 : s)
                    }
                    toMoneySS(t) {
                        var e = this.config.get("ss.multiplier", 0);
                        if (e > 0) {
                            var i = parseInt(this.config.get("coinValue", "100"));
                            return this.toFixedTruncate(t * e / i, 0)
                        }
                        return this.toMoney(t)
                    }
                    random(t, e) {
                        return t = Math.ceil(t), e = Math.floor(e), Math.floor(Math.random() * (e - t + 1)) + t
                    }
                }
                class S extends n.utils.EventEmitter {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["ru", "en", "ex", "de", "es", "fr", "it", "pt", "tr", "cn", "ja", "mt", "ro", "uk"];
                        super(), (0, o.Z)(this, "language", void 0), (0, o.Z)(this, "translations", {}), this.availableLanguages = t, this.language = t.includes(window.language) ? window.language : "en"
                    }
                    setTranslations(t) {
                        this.translations = t
                    }
                    get currencySign() {
                        return "NAN" !== window.currency && window.currency ? (t = window.currency, null !== (e = {
                            BTC: "µBTC",
                            ETH: "µETH",
                            BNB: "mBNB",
                            BCH: "mBCH",
                            BSV: "mBSV",
                            LTC: "mLTC",
                            UBC: "µBTC",
                            MBC: "mBTC",
                            UST: "USDT",
                            XUT: "USDT",
                            GOC: "GC",
                            FOC: "FC",
                            XMR: "mXMR"
                        }[t]) && void 0 !== e ? e : t) : "";
                        var t, e
                    }
                    hasCurrency() {
                        return "" !== this.currencySign
                    }
                    currency() {
                        var {
                            withSpace: t = !1,
                            withBrace: e = !1,
                            bitmap: i = !1
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (!this.currencySign || i) return "";
                        var s = t ? " " : "",
                            o = e ? "(".concat(this.currencySign, ")") : this.currencySign;
                        return "".concat(s).concat(o)
                    }
                    changeLanguage(t) {
                        this.availableLanguages.includes(t) ? (this.language = t, this.emit("changeLanguage", t)) : console.error("".concat(t, " not available. Use only: ").concat(this.availableLanguages))
                    }
                    t(t) {
                        for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++) i[s - 1] = arguments[s];
                        var o = this.translations || {};
                        return (o[t] || o.en || "").replace(/%s/g, (() => i.shift()))
                    }
                }
                class x {
                    constructor(t) {
                        (0, o.Z)(this, "pointerMoveEvent", void 0), (0, o.Z)(this, "pointerDownEvent", void 0), (0, o.Z)(this, "pointerTapEvent", void 0), (0, o.Z)(this, "pointerHoverEvent", void 0), (0, o.Z)(this, "pointerUpEvent", void 0), (0, o.Z)(this, "pointerOutEvent", void 0), (0, o.Z)(this, "_withPrimary", ((t, e) => i => {
                            i.data.isPrimary && t.call(e, i)
                        })), this.device = t, this.pointerMoveEvent = this.device.supportsPointerEvents ? "pointermove" : this.device.desktop ? "mousemove" : "touchmove", this.pointerDownEvent = this.device.supportsPointerEvents ? "pointerdown" : this.device.desktop ? "mousedown" : "touchstart", this.pointerTapEvent = this.device.supportsPointerEvents ? "pointertap" : this.device.desktop ? "tap" : "touchstart", this.pointerHoverEvent = this.device.desktop ? this.device.supportsPointerEvents ? "pointerover" : "mouseover" : this.device.supportsPointerEvents ? "pointerdown" : "mousedown", this.pointerUpEvent = this.device.supportsPointerEvents ? "pointerup" : this.device.desktop ? "mouseup" : "touchend", this.pointerOutEvent = this.device.supportsPointerEvents ? "pointerout" : this.device.desktop ? "mouseout" : "touchend"
                    }
                    hover(t, e, i) {
                        var s = this._withPrimary(e, i);
                        return t.on(this.pointerHoverEvent, s, i), () => {
                            t.off(this.pointerHoverEvent, s, i)
                        }
                    }
                    down(t, e, i) {
                        var s = this._withPrimary(e, i);
                        return t.on(this.pointerDownEvent, s, i), () => {
                            t.off(this.pointerDownEvent, s, i)
                        }
                    }
                    click(t, e, i) {
                        var s = this._withPrimary(e, i);
                        return t.on(this.pointerTapEvent, s, i), () => {
                            t.off(this.pointerTapEvent, s, i)
                        }
                    }
                    clickOnce(t, e, i) {
                        var s = this._withPrimary(e, i);
                        return t.once(this.pointerTapEvent, s, i), () => {
                            t.off(this.pointerTapEvent, s, i)
                        }
                    }
                    up(t, e, i) {
                        return t.on(this.pointerUpEvent, e, i), () => {
                            t.off(this.pointerUpEvent, e, i)
                        }
                    }
                    out(t, e, i) {
                        return t.on(this.pointerOutEvent, e, i), t.on("pointerupoutside", e, i), () => {
                            t.off(this.pointerOutEvent, e, i), t.off("pointerupoutside", e, i)
                        }
                    }
                    move(t, e, i) {
                        return t.on(this.pointerMoveEvent, e, i), () => {
                            t.off(this.pointerMoveEvent, e, i)
                        }
                    }
                    swipeX(t, e) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                threshold: 50
                            },
                            s = !1,
                            o = 0,
                            n = t => {
                                s || (s = !0, o = t.data.global.x)
                            },
                            a = t => {
                                if (s) {
                                    s = !1;
                                    var n = o - t.data.global.x;
                                    Math.abs(n) > i.threshold && e(n > 0 ? "right" : "left")
                                }
                            };
                        return t.on(this.pointerDownEvent, n), t.on(this.pointerUpEvent, a), () => {
                            t.off(this.pointerDownEvent, n), t.off(this.pointerUpEvent, a)
                        }
                    }
                }
                var k = i(7239),
                    C = i.n(k);
                class B {
                    constructor(t) {
                        (0, o.Z)(this, "pressed", void 0), (0, o.Z)(this, "disabled", void 0), (0, o.Z)(this, "prevent", void 0), (0, o.Z)(this, "canDispatch", void 0), (0, o.Z)(this, "onPress", void 0), this.keyCode = t, this.canDispatch = !0, this.pressed = !1, this.disabled = !1, this.prevent = !1, this.onPress = new(C()), window.addEventListener("keyup", (t => {
                            t.keyCode === this.keyCode && (this.pressed = !1)
                        })), window.addEventListener("keydown", (t => {
                            this.disabled || this.pressed || t.keyCode === this.keyCode && (this.prevent && t.preventDefault(), this.pressed = !0, this.canDispatch && this.onPress.dispatch(t))
                        }))
                    }
                    enable() {
                        this.disabled = !1
                    }
                    disable() {
                        this.disabled = !0
                    }
                }
                class P {
                    constructor() {
                        (0, o.Z)(this, "KEY_CODE", {
                            Enter: 13,
                            Space: 32,
                            Shift: 16,
                            Escape: 27
                        }), (0, o.Z)(this, "keys", [])
                    }
                    register(t) {
                        var e = new B(t);
                        return this.keys.push(e), e
                    }
                    stop() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        this.keys.forEach((e => {
                            e.canDispatch = t.includes(e)
                        }))
                    }
                    restore() {
                        this.keys.forEach((t => t.canDispatch = !0))
                    }
                }

                function T(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function E(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? T(Object(i), !0).forEach((function(e) {
                            (0, o.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : T(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class F extends n.utils.EventEmitter {
                    constructor(t) {
                        super(), (0, o.Z)(this, "loader", new n.Loader), this.device = t, this.loader.onError.add((t => this.emit("error", t))), this.loader.onComplete.add((t => this.emit("complete", t)))
                    }
                    load(t) {
                        var e = this;
                        return (0, s.Z)((function*() {
                            var i = yield e._getSizes(), s = Object.create(null), o = t.filter((t => {
                                var i, s, o;
                                return null === (i = null === (s = t.metadata) || void 0 === s || null === (o = s.platform) || void 0 === o ? void 0 : o.includes(e.device.platform)) || void 0 === i || i
                            })).map((t => (s = E(E({}, s), i[t.url]), E(E({}, t), {}, {
                                url: t.url
                            })))), n = 0, a = Object.keys(s).map((t => t)), r = Object.values(s).reduce(((t, e) => t + e), 0), h = Object.keys(i).length > 0 ? (t, i) => {
                                var o = i.url.split("?")[0];
                                n += s[o], e.emit("progress", {
                                    progress: n / r
                                }), a.includes(o) && a.splice(a.indexOf(o), 1)
                            } : t => {
                                e.emit("progress", {
                                    progress: t.progress / 100
                                })
                            };
                            return new Promise((t => {
                                var i = e.loader.onProgress.add(h);
                                e.loader.add(o), e.loader.load((() => {
                                    a.length > 0 && console.log("Assets not loaded: ", a), i.detach(), t()
                                }))
                            }))
                        }))()
                    }
                    reset() {
                        this.loader.reset()
                    }
                    getAsset(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        if (t) {
                            var i, s, o, a, r, h = this.loader.resources[t];
                            return h ? null !== (i = null !== (s = null !== (o = null !== (a = h.texture) && void 0 !== a ? a : h.spineData) && void 0 !== o ? o : h.sound) && void 0 !== s ? s : null === (r = h.textures) || void 0 === r ? void 0 : r[e]) && void 0 !== i ? i : h.textures : n.Texture.from(t)
                        }
                    }
                    destroy() {
                        this.loader.destroy()
                    }
                    _getSizes() {
                        return (0, s.Z)((function*() {
                            try {
                                return yield(yield fetch("assets/sizes.json")).json()
                            } catch (t) {
                                return {}
                            }
                        }))()
                    }
                }
                class R {}
                class Z {
                    constructor() {
                        (0, o.Z)(this, "renderer", void 0), n.settings.RENDER_OPTIONS.legacy = !0, n.settings.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !0, this.renderer = n.Renderer.create({
                            view: document.body.appendChild(document.createElement("canvas")),
                            width: 1,
                            height: 1,
                            autoDensity: !0,
                            backgroundAlpha: 0,
                            resolution: this.dpr
                        }), this.renderer.plugins.interaction.autoPreventDefault = !1, this.renderer.view.style.touchAction = "auto"
                    }
                    get dpr() {
                        return Math.min(window.devicePixelRatio || 1, 2)
                    }
                    get pixiRenderer() {
                        return this.renderer
                    }
                    get interaction() {
                        return this.renderer.plugins.interaction
                    }
                    get prepare() {
                        return this.renderer.plugins.prepare
                    }
                    get view() {
                        return this.renderer.view
                    }
                    uploadToGPU(t) {
                        return new Promise((e => {
                            this.renderer.plugins.prepare.upload(t, e)
                        }))
                    }
                    render(t, e) {
                        this.renderer.render(t, e)
                    }
                    resize(t, e) {
                        this.renderer.resize(t, e)
                    }
                    destroy() {
                        this.renderer.destroy(!0)
                    }
                }
                var O = i(1200),
                    M = {
                        SPENDING_BUDGET_EXCEEDED: "SPENDING_BUDGET_EXCEEDED",
                        MAX_BET_LIMIT_EXCEEDED: "MAX_BET_LIMIT_EXCEEDED",
                        INSUFFICIENT_BALANCE: "INSUFFICIENT_BALANCE",
                        BALANCE_CHANGE_ERROR: "BALANCE_CHANGE_ERROR"
                    };
                class I extends n.utils.EventEmitter {
                    constructor() {
                        super(...arguments), (0, o.Z)(this, "_response", void 0), (0, o.Z)(this, "_transformRequest", [])
                    }
                    transformRequest(t) {
                        this._transformRequest.push(...t)
                    }
                    request(t) {
                        var e = this;
                        return (0, s.Z)((function*() {
                            var i = e._transformRequest.reduce(((t, e) => e(t)), t),
                                s = yield O.ZP.post(window.serverUrl, i);
                            if (e._response = s.data, e.emit("response:".concat(t.action), e._response), e.emit("response", e._response, t.action), e._response.error) throw new Error(e._response.error);
                            return e._response
                        }))()
                    }
                    resetSession() {
                        return (0, s.Z)((function*() {
                            yield O.ZP.post("cs.php")
                        }))()
                    }
                    get response() {
                        return this._response
                    }
                }
                var D = {
                    to: ["*"],
                    name: "boot",
                    initialized: !0
                };
                class W {
                    constructor() {
                        (0, o.Z)(this, "transitions", Object.create(null)), (0, o.Z)(this, "transition", D)
                    }
                    is(t) {
                        var e;
                        return (null === (e = this.transition) || void 0 === e ? void 0 : e.name) === t
                    }
                    oneOf(t) {
                        var e;
                        return t.includes(null === (e = this.transition) || void 0 === e ? void 0 : e.name)
                    }
                    can(t) {
                        var e, i;
                        return (null === (e = this.transition) || void 0 === e ? void 0 : e.to.includes(t)) || (null === (i = this.transition) || void 0 === i ? void 0 : i.to.includes("*"))
                    }
                    add(t, e, i) {
                        var s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        return this.transitions[t] = {
                            state: e,
                            to: i,
                            name: t
                        }, s && this.goTo(t), e
                    }
                    goTo(t) {
                        var e, i, s, o, n;
                        if (this.can(t)) {
                            null === (e = this.transition) || void 0 === e || null === (i = e.state) || void 0 === i || i.exit(), this.transition = this.transitions[t], null !== (s = this.transition) && void 0 !== s && s.initialized || (this.transition.initialized = !0, this.transition.state.init());
                            for (var a = arguments.length, r = new Array(a > 1 ? a - 1 : 0), h = 1; h < a; h++) r[h - 1] = arguments[h];
                            null === (o = this.transition) || void 0 === o || null === (n = o.state) || void 0 === n || n.enter(...r)
                        } else {
                            var l;
                            console.error("[StateMachine]: Can't transition to ".concat(t, " from ").concat(null === (l = this.transition) || void 0 === l ? void 0 : l.name))
                        }
                    }
                }
                class L extends n.utils.EventEmitter {
                    constructor() {
                        super(...arguments), (0, o.Z)(this, "width", void 0), (0, o.Z)(this, "height", void 0), (0, o.Z)(this, "aspectRatio", void 0), (0, o.Z)(this, "propAspectRatio", void 0), (0, o.Z)(this, "paddingX", void 0), (0, o.Z)(this, "paddingY", void 0)
                    }
                    resize(t, e) {
                        this.width = t, this.height = e, this.aspectRatio = parseFloat(Math.min(window.innerWidth / t, window.innerHeight / e).toFixed(3)), this.paddingX = Math.max(Math.round((window.innerWidth / 2 - this.width / 2 * this.aspectRatio) / this.aspectRatio), 0), this.paddingY = Math.max(Math.round((window.innerHeight / 2 - this.height / 2 * this.aspectRatio) / this.aspectRatio), 0), this.propAspectRatio = parseFloat(Math.max((2 * this.paddingX + this.width) / this.width, (2 * this.paddingY + this.height) / this.height).toFixed(3))
                    }
                }
                class _ extends n.Container {}
                class N {
                    constructor(t) {
                        t.action.on("state:spin_enter", (() => this._sendMessage({
                            event: "play_start"
                        }))), t.action.on("state:stop_exit", (() => this._sendMessage({
                            event: "play_end"
                        }))), t.action.on("balance_updated", (t => this._sendMessage({
                            event: "balance_updated",
                            coins: t
                        })))
                    }
                    _sendMessage(t) {
                        try {
                            var e;
                            null === (e = window.parent) || void 0 === e || e.postMessage(JSON.stringify(t), "*")
                        } catch (t) {}
                    }
                }
                var U = {
                    gameId: "",
                    gameName: "",
                    colors: {
                        white: 16777215,
                        black: 0,
                        primary: 16777215,
                        primaryHover: 16777215,
                        secondary: 6642797,
                        secondaryHover: 6642797,
                        checkboxBackground: 3025203,
                        checkboxBackgroundHover: 5129814
                    },
                    coinValue: 100,
                    quickSpin: {
                        maxWatcherCount: 3
                    },
                    bigWin: {
                        bigMultiplier: 50,
                        giantMultiplier: 100
                    },
                    ss: {
                        multiplier: 0
                    }
                };
                class j extends n.utils.EventEmitter {
                    constructor(t, e) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        super(), this.bet = t, this.bets = e, this.betCoins = i
                    }
                    set(t) {
                        this.bets[t] && (this.bet = this.bets[t], this.emit("change", this.bet))
                    }
                    min() {
                        this.set(0)
                    }
                    max() {
                        this.set(this.bets.length - 1)
                    }
                    increment() {
                        var t = this.bets.indexOf(this.bet);
                        this.set(++t)
                    }
                    decrement() {
                        var t = this.bets.indexOf(this.bet);
                        this.set(--t)
                    }
                    toCoins() {
                        return this.bet * this.betCoins
                    }
                }
                class z extends(q(n.Sprite)) {
                    constructor() {
                        super(...arguments), (0, o.Z)(this, "interactive", !0)
                    }
                }
                class V {
                    constructor(t) {
                        (0, o.Z)(this, "popups", new Map), this.rootNode = t
                    }
                    add(t) {
                        t.forEach((t => this.popups.set(t.name, t)))
                    }
                    remove(t) {
                        return this.popups.delete(t)
                    }
                    show(t) {
                        var e = arguments,
                            i = this;
                        return (0, s.Z)((function*() {
                            var s = i.popups.get(t);
                            i.rootNode.addChild(s);
                            for (var o = e.length, n = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) n[a - 1] = e[a];
                            var r = yield s.show(...n);
                            return i.rootNode.removeChild(s), r
                        }))()
                    }
                }
                var G = i(899),
                    H = i.n(G);
                class Q {
                    constructor() {
                        (0, o.Z)(this, "prefix", "")
                    }
                    setPrefix(t) {
                        this.prefix = t
                    }
                    set(t, e) {
                        H().set("".concat(this.prefix, ":").concat(t), e)
                    }
                    get(t, e) {
                        return H().get("".concat(this.prefix, ":").concat(t), e)
                    }
                    clear() {
                        H().clearAll()
                    }
                }
                class Y extends n.utils.EventEmitter {
                    constructor() {
                        super(), document.addEventListener("visibilitychange", (() => {
                            this.emit("change", document.visibilityState), "hidden" === document.visibilityState ? this.emit("hide") : this.emit("show")
                        }))
                    }
                    get isVisible() {
                        return "visible" === document.visibilityState
                    }
                }
                var X, K = i(9193);
                n.Texture.WHITE.baseTexture.resource.source.getContext("2d").fillRect(0, 0, 1, 1);

                function q(t, e) {
                    return class extends t {
                        constructor() {
                            super(...arguments), (0, o.Z)(this, "game", X), (0, o.Z)(this, "preventAutoResize", !1), this.on("added", (() => {
                                (this.name || this.id) && this.game.set(this.name || this.id, this), null != e && e.preventResize || this.preventAutoResize || (this.game.viewport.on("resize", this.resize, this), this.game.leftHand.on("change", this.resize, this), this.resize())
                            })), this.on("removed", (() => {
                                this.game.viewport.off("resize", this.resize, this), this.game.leftHand.off("change", this.resize, this)
                            }))
                        }
                        show() {
                            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                            this.visible = t
                        }
                        hide() {
                            this.show(!1)
                        }
                        resize() {}
                    }
                }
                class J {
                    constructor(t) {
                        this.game = t
                    }
                    get(t) {
                        return this.game.get(t)
                    }
                    goTo(t) {
                        for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++) i[s - 1] = arguments[s];
                        return this.game.state.goTo(t, ...i)
                    }
                }
                const $ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAADECAMAAABJEswAAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAC3UExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFrln0MAAAA8dFJOU+XYgn369I3swRLTLsm6QyNhoGVdVaUzPh8aUZHFmTqwqQ5vdnLes5UKTveI2wGFBUsIKM1Ja7UreKs3KmHZN/QAAAQmSURBVHja7dfXUiJRFIbRPVkm52BAQRCYnEWc93+uabAQaAtpvNjnZi27itNN/15485XxBQBIF98AgHTxAwBIF0MAIF10hsPOsDMzXDpfZ7hmY29vb29vb99wH51Wq9Pq3FjL3t7e3t7efvt9tACAdAIMACUC/AEASCfAAFAiwO8BgHQCDAAlAvwMAEgnwABQIsA/AYB0cbrZ+el5dW1+Zm9vb29vb99wH48AgHQCDAAlAvwWAEgnwABQIsDtyaQ9ac9Mls7XmazZ2Nvb29vb2zfcRxsASBfvAIB0AgwAJQL8FABIJ8AAUCLAvwGAdPEdAEgXIwAgXYx2b2y0O6oue3t7e3t7+633sQsApIvXAEA6AQaAEgF+BQCkE2AAKBHg5wBAOgEGgBIBfgkApBNgACgR4D8AQLroAgDpotvrdXsX5+owM73vdVc/59/Xzz17e3t7e3v77ffRAwDSxTEAkC7Gi/P4eFxdF59Tx+PF8/n9unfs7e3t7e3tt9jHHQAgnQADQIkA3wYA0gkwAJQI8FcAIF18AgDSxX0AIJ0AA0CJAO8BAOmmAR7sDapr87vr3rO3t7e3t7ffch8DACBdHKwaHAyq6+q5KXt7e3t7e/sG+zgAANLFCwAgnQADQIkAvwEA0gkwAJQI8BEAkG4a4LOjs+pafC6rP7vuHXt7e3t7e/uG+zgEANLNA3xyeDJTHa6Yfjd/vnyuv2Nvb29vb2/fcB8nAEC6+AsApIsnAEA6AQaAEgHeAQDSCTAAlAjw/qqd/Z3qunpuyt7e3t7e3r7BPvYBgHTxGABIJ8AAUCLAvwCAdPEQAEgnwABQIsC3AIB0AgwAJQL8GQBIF30AIF1c6F/+zO8Xmj23t7e3t7e332q//HD5tj+/al/Unvdrv8He3t7e3t5+8x4AKOABAJAuqp+V6/L58v2Gd+zt7e3t7e2b7usTACDvP+B7AEA6AQaAEgH+CACki7sAQDoBBoASAf4HAKQTYAAQYAAQYABAgAFAgAEAAQYAAQYABBgABBgAEGAAEGAAEGAAQIABQIABAAEGAAEGAAQYAAQYABBgABBgABBgAECAAUCAAQABBgABBgAEGAAEGAAQYAAQYAAQYABAgAFAgAEAAQYAAQYABBgABBgAEGAAEGAAEGAAQIABQIABAAEGAAEGAAQYAAQYABBgABBgABBgAECAAUCAAQABBgABBgAEGAAEGAAQYAAQYAAQYABAgAFAgAEAAQYAAQYABBgABBgAEGAAEGAAEGAAQIABQIABAAEGAAEGAAQYAAQYABBgABBgABBgAECAAUCAAQABBgABBgAEGAAEGAAQYAAQYAAQYH8CABBgABBgAECAAUCAAQABBgABBgAEGAAEGAAQYAAQYAAQYABAgAFAgAEAAQYAAQYABBgABBgAmPkPtIA9BKeG90EAAAAASUVORK5CYII=",
                    tt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZ4AAAElCAMAAADjr3SLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACuUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF7IU6UAAAA5dFJOU8+h2vPke3X4TVfVbFxIIRyF6Qou7oC+lQ43F0NnjWETJSnfkTK1uVLKcJwCBok/O7Gppa3EwZnHZBUSEz4AAAQKSURBVHja7dHrUttWAIXR06QtbYAAgRiwiTHYuPd7uL3/i1WyY1CETRLXmtnTWR+akXyk/YdVflFwxb8gmudXBYcnm+eNgsOTzXMy783J/Hf1MHte3JedNe8n9l3uy4mCq3nOT86r6+PzZWersu9sX84VHJ5snv7znffPq6u/dvb/aV/6Cq709x7q783PqofZ817rXft82Tf2G92XPQWHJ5vntYLDE84zGr0ePT2vDmct3o0+fLfq3L6TfRkpuGU8F6OL6nr6u32+KvuN7cuFgsOTzXOo4PCE80wmh5P5c/Uwq/49Ofz4vni/OGt/Z9/JvkwUXDmdTE4np9X1eF+06nzxrm5i3+W+nCo4PNk8fyg4PNk8vys4PNk8AwWHJ5tndzDYHezOGjSel/1untfV7wb2Xe7LroLDk83znYLDg0dr8/yg4PBk83yv4PDg0do8OwoOTzbPcH4f7gxn7QyfflO/2xl++tl+4/syVHA1z93wrrq+bNfc2He2L3cKrpwpODzhPNuzzrbPqmt7aYt37W+av+072ZdtBYcnm+cnBYcnm+dbBYcHj9bm+UbB4cGjtXneKjg82Tz78/v+2/3qmt8XtX83z5sb+872ZV/B4cnm+U3B4cnmeafg8GTzjOe9G7+rrsf7uHXefm5n38m+jBVcGR8/ND6en1UPs+fj1rv2+bJv7De6L8cKrua5Ob6prsd7s/bZc9/Yb3xfbhRc+VnB4cnm+UrB4cGjtXn+VnB4snn+UnB4snn+UXB4snn+VHB4snmuFByebJ7pdHo1vaqu6We17Fv7zvZlquDKtPfQtDetrt5nVX9b17Pvcl96Cq5cz+/Xvevqmt/reo3zxe/FN4uav+072ZdrBVfeK7g2z+372+p6+rt53v7GvrN9uVVw5UcFhyebR5L+n716VT781Ve7VefNd/ad7VcslRGebJ4XCg5PPM/li8vq+rJdc2Pf2b5cKjg82TxfKzg8eLQ2z4GCw5PNc3RwcHRwVF2P90XLzptndQf2Xe7LkYLDk83zUsHhyebZWn6+9XKrup7fPveN/Ub2ZUvB4Ynnua/+1u++tb+339y+3Cs4PHiEB4/wCA8e4cEjPMKDR3jwCI/w4BEePMIjPHiEB49/AR7hwSM8woNHePAIj/DgER48wiM8eIQHj/AIDx7hwSM8woNHeIQHj/DgER7hwSM8eIRHePAIDx7hER48woNHeIQHj/AIDx7hwSM8woNHePAIj/DgER48wiM8eIQHj/AIDx7hER48woNHeIQHj/DgER7hwSM8eIRHePAIDx7hER48wiM8eIQHj/AIDx7hwSM8woNHePAIj/DgER48wiM8eIRHePAIDx7hER48woNHeIQHj/DgER7hwaNu+xdVr7rouE001AAAAABJRU5ErkJggg==";
                class et extends(q(n.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "onClick", void 0), (0, o.Z)(this, "useClickSound", !0), this.buttonMode = !0, this.interactive = !0, this.onClick = new(C()), this.onClick.add((() => {
                            var t;
                            this.useClickSound && (this.game.sound.handlers.has("click") ? this.game.sound.play("click") : null === (t = this.game.sound.get("clickNormal")) || void 0 === t || t.play())
                        }))
                    }
                    clear() {
                        this.onClick.detachAll()
                    }
                    enable() {
                        this.buttonMode = !0, this.interactive = !0
                    }
                    disable() {
                        this.buttonMode = !1, this.interactive = !1
                    }
                }
                class it extends et {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n.Texture.EMPTY,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 90,
                            i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        super(), (0, o.Z)(this, "wrapper", void 0), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "icon", void 0), this.wrapper = this.addChild(new n.Container), this.background = this.wrapper.addChild(n.Sprite.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACBUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wpM4qQAAAAqdFJOUwDSDuwsC4bvH7fzUOIGkBR01eUSgvnfUjPDkaHq9FN6AnU0BcjZ7tjHLX4Dw7IAAAHESURBVFjDxZnZYoIwEEWDIAEEWQSUXTa18/8f2M221o0lue35gPMQSObODGPDtFpZZYkSq1GkxkqSVaXWMnH2TW0WdENh1s1eSLxLc3pInu7meheeTwP43mKGeBNyGgEPNxPFS92ikVj6cop5a9ME7O1osWHSRExjnHnFaTJ8NULsrGkWa2fI7HY0k84dOOaeZnN8euBaQAIE2hPzgYQ4PHQbAQkSPDgTtydhjne/pdORBLp7/+CapLC+cwdJEjf30uCy1Pz6U5okDfPqFSWJ/Hpjl7ZMtX1ZG3SSin5RBy25auunXoYkmfA7FXDZav6VITySjndW+/LV/jl9EYDPzJYi1OlHFs0R6vw9xzYEoXlT1xh1LffNu3r/2gKjLlqmEQiNlSh1ySqUumIZSp2xBKVOmIJSKyxGqWOmotQqi1DqCKkGHgjwMwJ/PuCVAV504PMEfFSBpQBYwIBlFxkWgBEHGMyAcRIZgoHRHdlwANskYHOHbEmBjTSy/QcOLZCjFuSACDjWQg7jJI0QTw5q8Nm7fz2uZewFNmRGjsbFBvq9gVpDnNz/W54gVz7QRRVyvQZdCiJXmdAFLHRtjF12C63oXwGnIQ3G+GgEGQAAAABJRU5ErkJggg==")), this.background.anchor.set(.5), this.setBackgroundAlpha(.2), this.setBackgroundSize(e), this.showBackground(i), this.icon = this.wrapper.addChild(n.Sprite.from(t)), this.icon.anchor.set(.5), this.game.interaction.click(this, (() => this.onClick.dispatch()))
                    }
                    changeColor(t) {
                        this.icon.tint = t
                    }
                    changeIcon(t) {
                        this.icon.texture = t
                    }
                    showBackground(t) {
                        this.background.renderable = t
                    }
                    setBackgroundAlpha(t) {
                        this.background.alpha = t
                    }
                    setBackgroundSize(t) {
                        this.background.width = t, this.background.height = t
                    }
                    setBackgroundColor(t) {
                        this.background.tint = t
                    }
                    enable() {
                        super.enable(), this.wrapper.alpha = 1
                    }
                    disable() {
                        super.disable(), this.wrapper.alpha = .5
                    }
                }
                class st extends it {
                    constructor() {
                        super("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaBAMAAADKhlwxAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURUdwTP///////////////////////////////////////////////w2imYoAAAAMdFJOUwB/gO8Q33Cfr6C/b5qlnKIAAADTSURBVFjD7dUtEsIwFATgphYTfEUGHYvrBcBiERwAyRE4BkfgEqXDj9hDUUhfUve2puqtitj5ppPZSavKYrFYLEtlv/X5vGovSvuGLp8bfJQ2AMEd0CvtFhlvgKfSPmd8oPFQ2jUEH2gE7VLiiDN0wSlacI4WnKQTvibphIOlE87Sggd2iHEGne66Y8vu/yV+Bk3jbrxBT9MbFk8LiSSeFlJzuIyPw2V8FF52zeBl1z/8pbSPZSGRek/CZIpK+z4ZX8Rbae/6U9n54Wq/EYvFYlksXwyBk9qQ6NAVAAAAAElFTkSuQmCC")
                    }
                }
                class ot extends n.Container {
                    constructor() {
                        super(), this.visible = !1
                    }
                    get opened() {
                        return this.visible
                    }
                    toggle() {
                        this.opened ? this.close() : this.open()
                    }
                    open() {
                        this.visible = !0, this.emit("open")
                    }
                    close() {
                        this.opened && this.emit("close"), this.visible = !1
                    }
                }
                class nt extends(q(n.Sprite)) {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        super(n.Texture.WHITE), this.tint = e, this.alpha = t
                    }
                    resize() {
                        var {
                            viewport: t
                        } = this.game;
                        this.width = 2 * t.paddingX + t.width, this.height = 2 * t.paddingY + t.height, this.position.set(-t.paddingX, 0)
                    }
                }
                class at extends(q(n.Container, {
                    preventResize: !0
                })) {
                    constructor() {
                        super(), (0, o.Z)(this, "_dirty", void 0), (0, o.Z)(this, "_distance", void 0), (0, o.Z)(this, "_minY", void 0), (0, o.Z)(this, "_scrollContainer", void 0), (0, o.Z)(this, "_scrollMask", void 0), (0, o.Z)(this, "_speed", void 0), (0, o.Z)(this, "_startPosition", void 0), (0, o.Z)(this, "_targetPosition", void 0), (0, o.Z)(this, "hitAreaOffsetLeft", void 0), (0, o.Z)(this, "hitAreaOffsetRight", void 0), (0, o.Z)(this, "paddingBottom", void 0), (0, o.Z)(this, "scrollBar", void 0), this.paddingBottom = 0, this.hitAreaOffsetLeft = 0, this.hitAreaOffsetRight = 0, this.interactive = !0, this._width = 0, this._height = 0, this._minY = 0, this._speed = 0, this._dirty = !1, this._startPosition = null, this._distance = null, this._targetPosition = null, this._scrollMask = new n.Graphics, this._scrollContainer = new n.Container, this._scrollContainer.interactive = !0, this.scrollBar = null, super.addChild(this._scrollMask), super.addChild(this._scrollContainer), this.mask = this._scrollMask, this._setupEvents()
                    }
                    addScrollBar(t) {
                        this.scrollBar = t, super.addChild(this.scrollBar)
                    }
                    addChild() {
                        return this._scrollContainer.addChild(...arguments)
                    }
                    getAllChild() {
                        return this._scrollContainer.children
                    }
                    resize(t, e) {
                        this._width = t, this._height = e, this._scrollMask.clear().beginFill(16777215).drawRect(0, 0, t, e), setTimeout((() => {
                            var {
                                y: i
                            } = this._scrollContainer.getLocalBounds();
                            this._minY = this._height - i - this._scrollContainer.height - this.paddingBottom, this._height = e + this.paddingBottom - i, this._scrollContainer.hitArea = new n.Rectangle(0 | this.hitAreaOffsetLeft, 0 | i, t - this.hitAreaOffsetRight | 0, this._scrollContainer.height + this.paddingBottom | 0)
                        })), this.scrollTo(0, 0)
                    }
                    scrollTo(t, e) {
                        this._speed = 0, this._dirty = !1, this._startPosition = null, this._distance = null, this._targetPosition = null, this.update(t, e)
                    }
                    _touchEvents() {
                        this.on("touchstart", (t => {
                            t.data.getLocalPosition(this).y > this._scrollMask.height && (this._speed = 0, this._dirty = !1, this._startPosition = null, this._distance = null, this._targetPosition = null)
                        })), this._scrollContainer.on("touchstart", (t => {
                            t.data.originalEvent.preventDefault(), t.data.isPrimary && this._scrollContainer.hitArea.height > this._height && (this._dirty = !1, this._startPosition = t.data.getLocalPosition(this))
                        })).on("touchmove", (t => {
                            if (t.data.isPrimary) {
                                var e = t.data.getLocalPosition(this),
                                    i = 0 | e.x,
                                    s = 0 | e.y;
                                s < 0 || s > this._height || this.game.device.landscape && (i < this.hitAreaOffsetLeft || i > this._width - this.hitAreaOffsetRight) || (t.data.originalEvent.preventDefault(), this._startPosition && (this._targetPosition = e, this._speed = this._targetPosition.y - this._startPosition.y, this._startPosition = this._targetPosition, this._dirty = !0))
                            }
                        }));
                        var t = () => {
                            this._dirty && (this._speed -= .03 * this._speed, this._distance = Math.round(this._speed), this.update(0, this._scrollContainer.y + this._distance)), window.requestAnimationFrame(t)
                        };
                        window.requestAnimationFrame(t)
                    }
                    _wheelEvents() {
                        var t = t => {
                            if (t.preventDefault(), this._dirty) {
                                var e = (1 === t.deltaMode ? 16 : 1) * t.deltaY || -t.wheelDelta || t.detail;
                                "DOMMouseScroll" === t.type && (e *= 40), this.update(0, this._scrollContainer.y - e)
                            }
                        };
                        document.addEventListener("mousewheel", t, {
                            passive: !1
                        }), document.addEventListener("DOMMouseScroll", t, {
                            passive: !1
                        }), this._scrollContainer.on("mouseover", (() => {
                            this._dirty = !0
                        })).on("mouseout", (() => {
                            this._dirty = !1
                        }))
                    }
                    update(t, e) {
                        var i;
                        e >= 0 || (null === (i = this._scrollContainer.hitArea) || void 0 === i ? void 0 : i.height) < this._height ? this._scrollContainer.position.set(0, 0) : e <= this._minY ? this._scrollContainer.position.set(0, this._minY) : this._scrollContainer.position.set(0, e)
                    }
                    _setupEvents() {
                        !this.game.device.desktop && this.game.device.supportsTouchEvents ? this._touchEvents() : this._wheelEvents()
                    }
                }
                const rt = at;
                class ht extends(q(n.Container, {
                    preventResize: !0
                })) {
                    constructor(t) {
                        super(), (0, o.Z)(this, "value", void 0), this.value = t === 1 / 0 ? new n.Sprite(this.game.loader.getAsset("assets/autoplay-infinity-count.png")) : new n.Text(t, {
                            fill: 16777215,
                            fontSize: 28,
                            fontFamily: "Avenir-Bold"
                        }), this.value.anchor.set(.5), this.addChild(this.value)
                    }
                    setFill(t) {
                        this.value.style ? this.value.style.fill = t : this.value.tint = t
                    }
                }
                class lt extends et {
                    constructor(t, e) {
                        super(), (0, o.Z)(this, "actived", void 0), (0, o.Z)(this, "backgroundFill", void 0), (0, o.Z)(this, "backgroundOutline", void 0), (0, o.Z)(this, "realValue", void 0), (0, o.Z)(this, "selected", void 0), (0, o.Z)(this, "value", void 0), (0, o.Z)(this, "select", (() => {
                            this.actived = !0, this.value.setFill(this.game.config.get("colors.black")), this.backgroundFill.tint = this.game.config.get("colors.primary"), this.backgroundFill.alpha = 1, this.backgroundFill.renderable = !0, this.backgroundOutline.renderable = !1
                        })), this.realValue = t, this.selected = !1, this.backgroundFill = this.addChild(n.Sprite.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAAA9CAMAAADroBcaAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////x6CpFcAAAAcdFJOUwDJXBuIA27m9xg38dfoKWWOtUmi85QC/pPy/KNCsIVjAAABTUlEQVRo3uWbaXaDMAwGRVhs9j2BRPc/Z8NLl7RQmp9oOjeYh5Fl+bPINlXdtIWbL3o4LrMr2qau5HXirnd6eFzfxS/ppFGpRiij9G+dyash/LSvFCe5GiNPdhZeGKhBgvA3n8ypSVy27XPyahR/2tA5R2qY6LwSMu1zN1qtNzXOj1WXeetC/ltlCJ2axz1V7zhQAMHXDpsoguSzf8sZQvlHXzcqhPH9A3mKkE8JW+pqe41LjlC5FLpOQXR3oRtJqL8LOZKQE6kURSU1S6iWhiXUSMsSaqVgCRWsIreUuYElNMiVJXSlfaGZ9w/hqhxuH8J1CrheDtdt485D0tNOrLiZAm7qg5vL8SannNn2RL19wN0P8W7wcHesvFtwXk6BlyThZX1waSxgXo6XaORlTpe+brSVCh7T/5bbfiTrb6Rk/fPbh+GIbx+G3bcPb2ptD9yZnG4dAAAAAElFTkSuQmCC")), this.backgroundFill.anchor.set(.5), this.backgroundFill.width = 208, this.backgroundFill.height = 61, this.backgroundOutline = this.addChild(n.Sprite.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAAA9CAMAAADroBcaAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACBUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wpM4qQAAAAqdFJOUwAQcJ/v7t/+ASB/MI+gIUG/kECAEVExcVDens9vr1/OYI5Pvs2hYbCubp1/YlMAAAJPSURBVGje7ZrbmqJADIQD9AlBjoIooO7OHuv9H3AbdXZ0Rkf3juTbuuaC36SKxG6i20qGcjQKs5Tqi3JI6HkFVTRTlCusqHsSZzHRmGjo4oBmqSCphtEcXzJ+/PDSP1gMMc1e8aH3r/oIaapOVBETJf7X14vPoD1zERMjxR5pc/eNdwqmImZqDHR4p92AMiB2CkrYm22XAiGx1Br4cotHVcRUjfpItIBKiK1a9b7rBqAjxsphd1fpp7j6581H+jK9DUrePORK7C8NZALmQLQyqC8ariP2yqFfq7JExJ+HXIHtuUBALACIMthAUIF8iZZnFxkkIoBeXdShl8HjXWSrY8fthAD5r+sUC0pGJJxiQfs1FkYKDzljEwrxUw7Q0oZUch9Lr02UUoFKDlCDkXopX6FTKmx8yAVygFY+5gA5PORg/wPNHkich4ycyYeoxZ5GfJUDlONF3qQQCtlXj5kw+llO3LQtbh/yG6sYE/04bqwVCikd19spsQMlZYFo/aw9qZbzv9zpr9MAyGREgj3HWyTCRX8LdHRRLmH9fjvyqoWdDxHt/QzEvOHKc8SdFGusefOE12esdABvGzWw7+adGqpl/ElVH2/HpFAN137Llb2RASmwdkz9Y29mWm2Rrhjm9b3bWEShhukct3Yz0HdP7OINEGWMkFxWwH77bEGttUdqHZfqfH9w53QqUmSB/pC5mUM5l4W+Onb7eGaLo41nMmOYtys3S62yJlwawOrFkyNoF2lr532v3lq9rf5lok6G9GXvseYovfmV/r53TPcH+NF/0RiU6I8AAAAASUVORK5CYII=")), this.backgroundOutline.anchor.set(.5), this.backgroundOutline.width = 208, this.backgroundOutline.height = 61, this.value = this.addChild(new ht("function" == typeof e ? e(t) : t)), this.game.interaction.click(this, (() => this.onClick.dispatch())), this.game.interaction.hover(this, (() => {
                            this.actived ? this.backgroundFill.tint = this.game.config.get("colors.primaryHover") : (this.backgroundFill.tint = this.game.config.get("colors.white"), this.backgroundFill.alpha = .3, this.backgroundFill.renderable = !0)
                        })), this.game.interaction.out(this, (() => {
                            this.actived ? this.backgroundFill.tint = this.game.config.get("colors.primary") : (this.backgroundFill.tint = this.game.config.get("colors.white"), this.backgroundFill.alpha = 1, this.backgroundFill.renderable = !1)
                        }))
                    }
                    unselect() {
                        this.actived = !1, this.value.setFill(this.game.config.get("colors.white")), this.backgroundFill.tint = this.game.config.get("colors.white"), this.backgroundFill.alpha = 1, this.backgroundFill.renderable = !1, this.backgroundOutline.renderable = !0
                    }
                    enable() {
                        super.enable(), this.alpha = 1
                    }
                    disable() {
                        super.disable(), this.alpha = .5
                    }
                }
                class dt extends(q(n.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "_values", void 0), this._values = []
                    }
                    addValues(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        this.removeChildren(), this._values = t, this.addChild(...t.map((t => {
                            var i = new lt(t, e);
                            return i.onClick.add((() => this.emit("pick", t))), i
                        })))
                    }
                    select(t) {
                        var e = this._values.indexOf(t);
                        e > -1 && this.children.forEach(((t, i) => {
                            e === i ? t.select() : t.unselect()
                        }))
                    }
                    filter(t) {
                        this.children.forEach((e => {
                            e.realValue > t ? e.disable() : e.enable()
                        }))
                    }
                    get rowHeight() {
                        return this.game.device.desktop ? 90 : this.game.device.landscape ? 130 : 140
                    }
                    resize() {
                        var t = this.children.length,
                            {
                                device: e
                            } = this.game;
                        if (e.landscape || e.desktop) {
                            var i = e.desktop ? 4 : 3,
                                s = 0,
                                o = e.desktop ? 240 : 380;
                            this.children.forEach(((n, a) => {
                                a % i == 0 && (s = a + i > t ? o * (i - (t - a)) / 2 : 0), n.position.set(s, (a / i | 0) * this.rowHeight), n.scale.set(e.desktop ? 1 : 1.6), s += o
                            })), this.pivot.set((o * i - o) / 2, 0)
                        } else {
                            var n = 0,
                                a = 420;
                            this.children.forEach(((e, i) => {
                                i % 2 == 0 && (n = i + 2 > t ? a * (2 - (t - i)) / 2 : 0), e.scale.set(1.8), e.position.set(n, (i / 2 | 0) * this.rowHeight), n += a
                            })), this.pivot.set(210, 0)
                        }
                    }
                }

                function ct(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }
                class ut extends(q(n.Text)) {
                    constructor(t) {
                        super(t, function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? ct(Object(i), !0).forEach((function(e) {
                                    (0, o.Z)(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ct(Object(i)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                                }))
                            }
                            return t
                        }({
                            fill: 16777215,
                            fontSize: 24,
                            fontFamily: "Avenir-Regular",
                            wordWrap: !0,
                            align: "center"
                        }, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}))
                    }
                    resize() {
                        this.style.wordWrapWidth = this.game.viewport.width / 2
                    }
                }

                function pt(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }
                class gt extends(q(n.Text)) {
                    constructor(t) {
                        super(t, function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? pt(Object(i), !0).forEach((function(e) {
                                    (0, o.Z)(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : pt(Object(i)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                                }))
                            }
                            return t
                        }({
                            fill: 16777215,
                            fontSize: 36,
                            fontFamily: "Avenir-Bold",
                            wordWrapWidth: 380,
                            align: "center"
                        }, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})), this.anchor.set(.5)
                    }
                    withGameName() {
                        this.text = "".concat(this.game.config.get("gameName"), "\n\n").concat(this.text)
                    }
                    resize() {
                        this.style.wordWrap = this.game.device.portrait, this.game.device.desktop ? this.scale.set(1) : this.scale.set(1.6)
                    }
                }
                class mt extends et {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "AutoPlaySettingsStopCondButtonReset"), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "text", void 0), (0, o.Z)(this, "state", !1), this.background = this.addChild(new n.Sprite(this.game.loader.getAsset("assets/ui_2020/chip.png"))), this.background.anchor.set(.5), this.background.width = 200, this.background.height = 71, this.text = this.addChild(new n.Text(this.game.i18n.t("AutoPlaySettingsStopCondButtonReset"), {
                            fontFamily: "Avenir-Bold"
                        })), this.text.anchor.set(.5), this.game.interaction.click(this, (() => {
                            this.onClick.dispatch()
                        }))
                    }
                    resize() {
                        this.scale.set(this.game.device.desktop ? 1 : 1.6)
                    }
                    active(t) {
                        this.state = t, this.interactive = t, this.alpha = t ? 1 : .75
                    }
                }
                class At extends(q(n.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "items", void 0), (0, o.Z)(this, "resetButton", void 0), this.title = this.addChild(new ut(this.game.i18n.t("AutoPlaySettingsStopCondTitle").toUpperCase(), {
                            fontFamily: "Avenir-Bold",
                            fontSize: 28
                        })), this.title.anchor.set(.5, 0), this.items = this.addChild(new n.Container), this.resetButton = this.addChild(new mt), this.resetButton.onClick.add(this.reset, this), this.resetButton.active(this.itemsActive)
                    }
                    get itemsActive() {
                        return this.items.children.some((t => t.active))
                    }
                    addItem(t) {
                        var e = this.items.addChild(t);
                        return e.onChange.add((() => this.resetButton.active(this.itemsActive))), this.resize(), e
                    }
                    showItem(t) {
                        this.items.getChildByName(t).visible = !0, this.alignItems(), this.resize()
                    }
                    hideItem(t) {
                        this.items.getChildByName(t).visible = !1, this.alignItems(), this.resize()
                    }
                    reset() {
                        for (var t of this.items.children) t.reset();
                        this.resetButton.active(!1)
                    }
                    alignItems() {
                        var t = 0;
                        this.items.children.filter((t => t.visible)).forEach((e => {
                            e.resize(), e.position.set(0, t), t += e.height + 20
                        }))
                    }
                    resize() {
                        this.game.device.desktop ? (this.title.scale.set(1), this.title.position.set(0, 0), this.items.position.set(0, 80), this.items.pivot.set(466, 0)) : this.game.device.landscape ? (this.title.scale.set(1.6), this.title.position.set(0, 0), this.items.position.set(0, 180), this.items.pivot.set(this.game.leftHand.enabled ? 600 : 800, 0)) : (this.title.scale.set(1.6), this.title.position.set(0, 0), this.items.position.set(0, this.title.y + this.title.height + 30), this.items.pivot.set(418, 0)), this.alignItems(), this.resetButton.position.set(0, this.items.y + this.items.height + (this.game.device.desktop ? 80 : 100))
                    }
                }
                class vt extends(q(ot)) {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "AutoPlaySettings"), (0, o.Z)(this, "bottomBackgroundTexture", void 0), (0, o.Z)(this, "bottomBackgroundMobileTexture", void 0), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "scrollView", void 0), (0, o.Z)(this, "bottom", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "autoPlayValues", void 0), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "subTitle", void 0), (0, o.Z)(this, "stopSection", void 0), (0, o.Z)(this, "closeButton", void 0), (0, o.Z)(this, "spaceKey", void 0), this.bottomBackgroundTexture = n.Texture.from($), this.bottomBackgroundMobileTexture = n.Texture.from(tt), this.overlay = this.addChild(new nt), this.scrollView = this.addChild(new rt), this.bottom = this.addChild(new n.Sprite(this.bottomBackgroundMobileTexture)), this.content = this.scrollView.addChild(new n.Container), this.autoPlayValues = this.content.addChild(new dt), this.title = this.content.addChild(new gt(this.game.i18n.t("AutoPlaySettingsTitle").toUpperCase())), this.title.withGameName(), this.title.anchor.set(.5, 0), this.subTitle = this.content.addChild(new ut(this.game.i18n.t("AutoPlaySettingsSubTitle"))), this.subTitle.anchor.set(.5, 0), this.stopSection = this.content.addChild(new At), this.closeButton = this.addChild(new st), this.closeButton.onClick.add((() => this.close())), this.spaceKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Escape), this.spaceKey.onPress.add(this.close, this), this.spaceKey.disable()
                    }
                    get opened() {
                        return this.visible
                    }
                    setAutoPlayCounts(t) {
                        t.length < 1 || (this.autoPlayValues.on("pick", (t => this.emit("pickAutoPlayCount", t))), this.autoPlayValues.addValues(t), this.setAutoPlayCount(t[0]))
                    }
                    setAutoPlayCount(t) {
                        this.autoPlayValues.select(t)
                    }
                    open() {
                        super.open(), this.resize(), this.spaceKey.enable(), this.scrollView.scrollTo(0, 0), this.game.fullscreen.lock()
                    }
                    close() {
                        this.visible && (super.close(), this.spaceKey.disable(), this.game.fullscreen.unlock())
                    }
                    resize() {
                        var {
                            device: t,
                            viewport: e
                        } = this.game;
                        if (this.overlay.resize(), this.bottom.width = this.game.viewport.width + 2 * this.game.viewport.paddingX, this.bottom.position.x = -this.game.viewport.paddingX, t.desktop) this.bottom.texture = this.bottomBackgroundTexture, this.bottom.y = 860, this.closeButton.scale.set(.8), this.closeButton.position.set(1838, 60), this.title.position.set(0, 62), this.title.scale.set(1), this.subTitle.position.set(0, this.title.y + this.title.height + 60), this.subTitle.scale.set(1), this.autoPlayValues.position.set(0, this.subTitle.y + this.subTitle.height + 80), this.autoPlayValues.resize(), this.stopSection.position.set(0, this.autoPlayValues.y + this.autoPlayValues.height + 40), this.content.position.set(e.width / 2, 0), this.scrollView.paddingBottom = 100, this.scrollView.position.set(0, 0), this.scrollView.resize(e.width, 960);
                        else if (t.landscape) this.bottom.texture = this.bottomBackgroundTexture, this.bottom.y = 860, this.closeButton.scale.set(1.6), this.closeButton.position.set(this.game.leftHand.enabled ? 120 : 1780, 120), this.title.position.set(0, 120), this.title.scale.set(1.6), this.subTitle.position.set(0, this.title.y + this.title.height + 60), this.subTitle.scale.set(1.6), this.autoPlayValues.position.set(0, this.subTitle.y + this.subTitle.height + 120), this.autoPlayValues.resize(), this.stopSection.position.set(0, this.autoPlayValues.y + this.autoPlayValues.height + 40), this.content.position.set(e.width / 2, 0), this.scrollView.paddingBottom = 100, this.scrollView.position.set(0, 0), this.scrollView.resize(e.width, 960);
                        else {
                            var i = e.height + 2 * e.paddingY;
                            this.bottom.texture = this.bottomBackgroundMobileTexture, this.bottom.y = i - 830, this.closeButton.scale.set(1.6), this.closeButton.position.set(955, i - 318), this.title.position.set(0, 100), this.title.scale.set(1.6), this.subTitle.position.set(0, this.title.y + this.title.height + 60), this.subTitle.scale.set(1.6), this.autoPlayValues.position.set(0, this.subTitle.y + this.subTitle.height + 140), this.autoPlayValues.resize(), this.stopSection.position.set(0, this.autoPlayValues.y + this.autoPlayValues.height + 40), this.content.position.set(e.width / 2, 0), this.scrollView.paddingBottom = 100, this.scrollView.position.set(0, 0), this.scrollView.resize(e.width, i - 710)
                        }
                    }
                }
                var bt = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return (e ? t.toLowerCase() : t).replace(/(?:^|\s|[&"'([{])+\S/g, (t => t.toUpperCase()))
                };
                class wt extends et {
                    constructor(t) {
                        super(), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "mark", void 0), (0, o.Z)(this, "description", void 0), (0, o.Z)(this, "checked", !1), this.background = this.addChild(n.Sprite.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA9CAMAAAApvJHbAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABmUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////26W6sgAAAAhdFJOUwCPnzDvfxD+7iCAnt5v36BwzpBAX89Qr46/vt3NYE6ublTVHtYAAAFZSURBVEjHxZfJdsMgDEUxxgiP8ewmHfX/P1k7cU6dFgJIi779RU+AQBLCrrTul0YhoprOfZ2KcOlBbtxRSs6BbPYbvamRuZ89oVs+3hH3LpM9YfMJfaqc4UeFfpnW4RqDBFb3CYbqhQNb8CwC/mO+xijB+HBUKo5Gczy4BmPVEZPeVZB9X73rnT4hReUemgQjaEboe+YNkb5mPhNhhIFh/LZvikyb9eklwwipaBl0K3o6jYk4M+hFTAy6Ymz5tukMGOFfaV7eDYPuxMKgL8y7xrnnNbPGePXNfFsGsvGPrUtS5ArbVDCMr8GJxvdPWHL+MVrmP/8/IfNj69JF06/HvsVw+hbxHl0fDyqoSUf3ipAwWk0bvJoHRo8sRBuy82Z0zgaVN/Dbs9GkMPS5ZAsv3dlDqb0zVS4r2wJgMh020M3SwHEFAFMOOmKaTOvk0q1rgKk+ky/XHPoNshlvtQO8EbIAAAAASUVORK5CYII=")), this.background.width = 61, this.background.height = 61, this.mark = this.addChild(n.Sprite.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAMAAAB61OwbAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ5TOdIAAAAcdFJOUwCg7/5f3mAg35+/cL7uQIAwb38Qzs+vEU8hMVC5i/YxAAAAvUlEQVQoz6WT2RKDIAxFEcsiIFLtXv7/O9sSRkQIPjRv5GZykpuBEDT4TZ1II2b/jQHXhQ/h0AIJBQ9MP4PuBQagoKMzdKBLrAGPAGxNIf8E2AMAOQLMO4BVUonS4xUQ3tThAJhYPnces7WpgsT1nnucNph81rIrNlhYrJg2HrNs6jFW8ORxbpHrIUtfFUAIHVtIXQFkg+I3GLZ67QbLJemsemTBWoBsWYMd2cKyo0B/iv5V9LrxGblh5l1kP+dCHfNSyQUnAAAAAElFTkSuQmCC")), this.mark.width = 32, this.mark.height = 30, this.mark.anchor.set(.5), this.mark.position.set(this.background.width / 2, this.background.height / 2), t && (this.description = this.addChild(new n.Text(bt(this.game.i18n.t(t), !0), {
                            fill: 16777215,
                            fontSize: 28,
                            fontFamily: "Avenir-Bold"
                        })), this.description.anchor.set(0, .5), this.description.position.set(80, this.background.height / 2)), this.hitArea = new n.Rectangle(0, 0, this.width, 61), this.game.interaction.click(this, (() => {
                            var t = !this.checked;
                            this.setChecked(t), this.onClick.dispatch(t)
                        })), this.game.interaction.hover(this, (() => {
                            this.background.tint = this.game.config.get(this.checked ? "colors.primaryHover" : "colors.checkboxBackgroundHover")
                        })), this.game.interaction.out(this, (() => {
                            this.background.tint = this.game.config.get(this.checked ? "colors.primary" : "colors.checkboxBackground")
                        })), this.setChecked(!1)
                    }
                    setChecked(t) {
                        this.checked = t, this.mark.renderable = t, this.background.tint = this.game.config.get(t ? "colors.primary" : "colors.checkboxBackground")
                    }
                }

                function ft(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function yt(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? ft(Object(i), !0).forEach((function(e) {
                            (0, o.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ft(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class St extends et {
                    constructor(t, e, i) {
                        super(), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "text", void 0), (0, o.Z)(this, "state", !1), this.background = this.addChild(new n.Sprite(this.game.loader.getAsset("assets/ui_2020/chip.png"))), this.text = this.addChild(new n.Text(e, yt(yt({}, i), {}, {
                            fontFamily: "Avenir-Bold"
                        }))), this.text.anchor.set(.5), this.text.position.set(this.background.width / 2, this.background.height / 2), this.game.interaction.click(this, (() => this.onClick.dispatch(t))), this.active(!1), this.setInteractive(!1)
                    }
                    setInteractive(t) {
                        this.interactive = t, this.alpha = t ? 1 : .75
                    }
                    active(t) {
                        this.state = t, this.background.tint = t ? 16777215 : 3025203, this.text.style.fill = t ? 0 : 16777215
                    }
                }
                class xt extends(q(n.Container, {
                    preventResize: !0
                })) {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "StopItemBalance"), (0, o.Z)(this, "state", "inactive"), (0, o.Z)(this, "checkbox", void 0), (0, o.Z)(this, "chips", void 0), (0, o.Z)(this, "chipValue", 10), (0, o.Z)(this, "balance", 0), (0, o.Z)(this, "onClickCheckbox", new(C())), (0, o.Z)(this, "onClickChip", new(C())), (0, o.Z)(this, "onChange", new(C())), this.checkbox = this.addChild(new wt("AutoPlaySettingsStopCondCheckboxBalance")), this.chips = this.addChild(new n.Container), this.chips.addChild(new St(this.chipValue, "10%")).active(!0), this.chips.addChild(new St(25, "25%")), this.chips.addChild(new St(50, "50%")), this.chips.addChild(new St(75, "75%")), this.chips.addChild(new St(100, "100%")), this.checkbox.onClick.add((() => {
                            this.state = this.checked ? "active" : "inactive", this.chips.children.forEach((t => t.setInteractive(this.checked))), this.onClickCheckbox.dispatch(), this.onChange.dispatch(this.checked)
                        })), this.chips.children.forEach((t => t.onClick.add((e => {
                            this.state = this.checked ? "active" : "inactive", this.chips.children.forEach((t => t.active(!1))), this.chipValue = e, t.active(!0), this.onClickChip.dispatch(this.chipValue), this.onChange.dispatch(this.checked)
                        }))))
                    }
                    get checked() {
                        return this.checkbox.checked
                    }
                    get active() {
                        return "active" === this.state
                    }
                    get value() {
                        return this.balance + this.chipValue / 100 * this.balance
                    }
                    setStartBalance(t) {
                        this.balance = t
                    }
                    reset() {
                        this.state = "inactive", this.checkbox.setChecked(!1), this.chips.children.forEach(((t, e) => {
                            t.active(0 === e), t.setInteractive(!1)
                        }))
                    }
                    resize() {
                        this.scale.set(this.game.device.desktop ? 1 : 1.5), this.chips.position.set(0, 80), this.game.device.desktop || this.game.device.landscape ? this.chips.children.forEach(((t, e) => {
                            t.position.set(180 * e, 0)
                        })) : this.chips.children.forEach(((t, e) => {
                            t.position.set(e % 3 * 180, 80 * (e / 3 | 0))
                        }))
                    }
                }
                class kt extends(q(n.Container, {
                    preventResize: !0
                })) {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "StopItemBalanceDrop"), (0, o.Z)(this, "state", "inactive"), (0, o.Z)(this, "checkbox", void 0), (0, o.Z)(this, "chips", void 0), (0, o.Z)(this, "chipValue", 10), (0, o.Z)(this, "balance", 0), (0, o.Z)(this, "onClickCheckbox", new(C())), (0, o.Z)(this, "onClickChip", new(C())), (0, o.Z)(this, "onChange", new(C())), this.checkbox = this.addChild(new wt("AutoPlaySettingsStopCondCheckboxBalanceDrop")), this.chips = this.addChild(new n.Container), this.chips.addChild(new St(this.chipValue, "10%")).active(!0), this.chips.addChild(new St(25, "25%")), this.chips.addChild(new St(50, "50%")), this.chips.addChild(new St(75, "75%")), this.chips.addChild(new St(100, "100%")), this.checkbox.onClick.add((() => {
                            this.state = this.checked ? "active" : "inactive", this.chips.children.forEach((t => t.setInteractive(this.checked))), this.onClickCheckbox.dispatch(), this.onChange.dispatch(this.checked)
                        })), this.chips.children.forEach((t => t.onClick.add((e => {
                            this.state = this.checked ? "active" : "inactive", this.chips.children.forEach((t => t.active(!1))), this.chipValue = e, t.active(!0), this.onClickChip.dispatch(this.chipValue), this.onChange.dispatch(this.checked)
                        }))))
                    }
                    get checked() {
                        return this.checkbox.checked
                    }
                    get active() {
                        return "active" === this.state
                    }
                    get value() {
                        return this.balance - this.chipValue / 100 * this.balance
                    }
                    setStartBalance(t) {
                        this.balance = t
                    }
                    reset() {
                        this.state = "inactive", this.checkbox.setChecked(!1), this.chips.children.forEach(((t, e) => {
                            t.active(0 === e), t.setInteractive(!1)
                        }))
                    }
                    resize() {
                        this.scale.set(this.game.device.desktop ? 1 : 1.5), this.chips.position.set(0, 80), this.game.device.desktop || this.game.device.landscape ? this.chips.children.forEach(((t, e) => {
                            t.position.set(180 * e, 0)
                        })) : this.chips.children.forEach(((t, e) => {
                            t.position.set(e % 3 * 180, 80 * (e / 3 | 0))
                        }))
                    }
                }
                class Ct extends(q(n.Container, {
                    preventResize: !0
                })) {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "StopItemFeatureFreeSpin"), (0, o.Z)(this, "state", "inactive"), (0, o.Z)(this, "checkbox", void 0), (0, o.Z)(this, "onClickCheckbox", new(C())), (0, o.Z)(this, "onChange", new(C())), this.checkbox = this.addChild(new wt("AutoPlaySettingsStopCondCheckboxFeatureFreeSpin")), this.checkbox.onClick.add((() => {
                            this.state = this.checked ? "active" : "inactive", this.onClickCheckbox.dispatch(), this.onChange.dispatch(this.checked)
                        }))
                    }
                    get checked() {
                        return this.checkbox.checked
                    }
                    get active() {
                        return "active" === this.state
                    }
                    reset() {
                        this.state = "inactive", this.checkbox.setChecked(!1)
                    }
                    resize() {
                        this.scale.set(this.game.device.desktop ? 1 : 1.5)
                    }
                }
                var Bt = 0,
                    Pt = 1,
                    Tt = 2,
                    Et = {
                        fontSize: 22
                    };
                class Ft extends(q(n.Container, {
                    preventResize: !0
                })) {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "StopItemWin"), (0, o.Z)(this, "state", "inactive"), (0, o.Z)(this, "checkbox", void 0), (0, o.Z)(this, "chips", void 0), (0, o.Z)(this, "chipType", Bt), (0, o.Z)(this, "onClickCheckbox", new(C())), (0, o.Z)(this, "onClickChip", new(C())), (0, o.Z)(this, "onChange", new(C())), this.checkbox = this.addChild(new wt("AutoPlaySettingsStopCondCheckboxWin")), this.chips = this.addChild(new n.Container), this.chips.addChild(new St(this.chipType, bt(this.game.i18n.t("AutoPlaySettingsStopCondCheckboxWinAny")), Et)).active(!0), this.chips.addChild(new St(Pt, bt(this.game.i18n.t("AutoPlaySettingsStopCondCheckboxWinBig")), Et)), this.chips.addChild(new St(Tt, bt(this.game.i18n.t("AutoPlaySettingsStopCondCheckboxWinGiant")), Et)), this.checkbox.onClick.add((() => {
                            this.state = this.checked ? "active" : "inactive", this.chips.children.forEach((t => t.setInteractive(this.checked))), this.onClickCheckbox.dispatch(), this.onChange.dispatch(this.checked)
                        })), this.chips.children.forEach((t => t.onClick.add((e => {
                            this.state = this.checked ? "active" : "inactive", this.chips.children.forEach((t => t.active(!1))), this.chipType = e, t.active(!0), this.onClickChip.dispatch(this.chipType), this.onChange.dispatch(this.checked)
                        }))))
                    }
                    get checked() {
                        return this.checkbox.checked
                    }
                    get active() {
                        return "active" === this.state
                    }
                    get type() {
                        return this.chipType
                    }
                    reset() {
                        this.state = "inactive", this.chipType = Bt, this.checkbox.setChecked(!1), this.chips.children.forEach(((t, e) => {
                            t.active(0 === e), t.setInteractive(!1)
                        }))
                    }
                    resize() {
                        this.scale.set(this.game.device.desktop ? 1 : 1.5), this.game.device.desktop || this.game.device.landscape ? (this.chips.position.set(this.game.device.desktop ? 410 : 360, 0), this.chips.children.forEach(((t, e) => {
                            t.position.set(180 * e, 0)
                        }))) : (this.chips.position.set(0, 80), this.chips.children.forEach(((t, e) => {
                            t.position.set(180 * e, 0)
                        })))
                    }
                }
                var Rt = ["pointerover", "pointerenter", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerout", "pointerleave", "gotpointercapture", "lostpointercapture", "mouseover", "mouseenter", "mousedown", "mousemove", "mouseup", "mousecancel", "mouseout", "mouseleave", "touchover", "touchenter", "touchdown", "touchmove", "touchup", "touchcancel", "touchout", "touchleave"],
                    Zt = "bbcode",
                    Ot = {
                        bbcode: ["[", "]"],
                        xml: ["<", ">"]
                    };
                class Mt extends n.Text {
                    constructor(t, e) {
                        super(t), (0, o.Z)(this, "textStyles", void 0), (0, o.Z)(this, "hitboxes", void 0), this.styles = e, Rt.forEach((t => {
                            this.on(t, (t => this.handleInteraction(t)))
                        }))
                    }
                    handleInteraction(t) {
                        var e = t,
                            i = t.data.getLocalPosition(this),
                            s = this.hitboxes.reduce(((t, e) => void 0 !== t ? t : e.hitbox.contains(i.x, i.y) ? e : void 0), void 0);
                        e.targetTag = void 0 === s ? void 0 : s.tag
                    }
                    set styles(t) {
                        for (var e in this.textStyles = {}, this.textStyles.default = this.assign({}, Mt.DEFAULT_TAG_STYLE), t) "default" === e ? this.assign(this.textStyles.default, t[e]) : this.textStyles[e] = this.assign({}, t[e]);
                        this.textStyles.default.tagStyle === Zt && (this.textStyles.b = this.assign({}, {
                            fontStyle: "bold"
                        }), this.textStyles.i = this.assign({}, {
                            fontStyle: "italic"
                        }), this.textStyles.color = this.assign({}, {
                            fill: ""
                        }), this.textStyles.outline = this.assign({}, {
                            stroke: "",
                            strokeThickness: 6
                        }), this.textStyles.font = this.assign({}, {
                            fontFamily: ""
                        }), this.textStyles.shadow = this.assign({}, {
                            dropShadowColor: "",
                            dropShadow: !0,
                            dropShadowBlur: 3,
                            dropShadowDistance: 3,
                            dropShadowAngle: 2
                        }), this.textStyles.size = this.assign({}, {
                            fontSize: "px"
                        }), this.textStyles.spacing = this.assign({}, {
                            letterSpacing: ""
                        }), this.textStyles.align = this.assign({}, {
                            align: ""
                        })), this.withPrivateMembers()._style = new n.TextStyle(this.textStyles.default), this.withPrivateMembers().dirty = !0
                    }
                    setTagStyle(t, e) {
                        t in this.textStyles ? this.assign(this.textStyles[t], e) : this.textStyles[t] = this.assign({}, e), this.withPrivateMembers()._style = new n.TextStyle(this.textStyles.default), this.withPrivateMembers().dirty = !0
                    }
                    deleteTagStyle(t) {
                        "default" === t ? this.textStyles.default = this.assign({}, Mt.DEFAULT_TAG_STYLE) : delete this.textStyles[t], this.withPrivateMembers()._style = new n.TextStyle(this.textStyles.default), this.withPrivateMembers().dirty = !0
                    }
                    getTagRegex(t, e) {
                        var i = Object.keys(this.textStyles).map((t => [t, t.toUpperCase()].join("|"))).join("|"),
                            {
                                tagStyle: s
                            } = this.textStyles.default;
                        i = t ? "(".concat(i, ")") : "(?:".concat(i, ")");
                        var o = s === Zt ? "\\".concat(Ot.bbcode[0]).concat(i, "(?:\\=(?:[A-Za-z0-9_\\-\\#]+|'(?:[^']+|\\\\')*'))*\\s*\\").concat(Ot.bbcode[1], "|\\").concat(Ot.bbcode[0], "\\/").concat(i, "\\s*\\").concat(Ot.bbcode[1]) : "\\".concat(Ot.xml[0]).concat(i, "(?:\\s+[A-Za-z0-9_\\-]+=(?:\"(?:[^\"]+|\\\\\")*\"|'(?:[^']+|\\\\')*'))*\\s*\\").concat(Ot.xml[1], "|\\").concat(Ot.xml[0], "\\/").concat(i, "\\s*\\").concat(Ot.xml[1]);
                        return e && (o = "(".concat(o, ")")), new RegExp(o, "g")
                    }
                    getPropertyRegex() {
                        return new RegExp("([A-Za-z0-9_\\-]+)=(?:\"((?:[^\"]+|\\\\\")*)\"|'((?:[^']+|\\\\')*)')", "g")
                    }
                    getBBcodePropertyRegex() {
                        return new RegExp("[A-Za-z0-9_\\-]+=([A-Za-z0-9_\\-\\#]+)", "g")
                    }
                    _getTextDataPerLine(t) {
                        for (var e = this, i = [], s = this.getTagRegex(!0, !1), o = [this.assign({}, this.textStyles.default)], n = [{
                                name: "default",
                                properties: {}
                            }], a = 0; a < t.length; a++) {
                            for (var r = [], h = [], l = void 0; l = s.exec(t[a]);) h.push(l);
                            if (0 === h.length) r.push(this.createTextData(t[a], o[o.length - 1], n[n.length - 1]));
                            else {
                                for (var d = 0, c = 0; c < h.length; c++) {
                                    if (h[c].index > d && r.push(this.createTextData(t[a].substring(d, h[c].index), o[o.length - 1], n[n.length - 1])), "/" === h[c][0][1]) o.length > 1 && (o.pop(), n.pop());
                                    else {
                                        for (var u = {}, p = this.getPropertyRegex(), g = void 0; g = p.exec(h[c][0]);) u[g[1]] = g[2] || g[3];
                                        n.push({
                                            name: h[c][1],
                                            properties: u
                                        });
                                        var {
                                            tagStyle: m
                                        } = this.textStyles.default;
                                        if (m === Zt && h[c][0].includes("=") && this.textStyles[h[c][1]]) ! function() {
                                            var t = e.getBBcodePropertyRegex().exec(h[c][0]),
                                                i = {};
                                            Object.entries(e.textStyles[h[c][1]]).forEach((e => {
                                                i[e[0]] = "string" != typeof e[1] ? e[1] : t[1] + e[1]
                                            })), o.push(e.assign({}, o[o.length - 1], i))
                                        }();
                                        else {
                                            var A = h[c][1];
                                            o.push(this.assign({}, o[o.length - 1], this.textStyles[A], this.textStyles[A.toLowerCase()]))
                                        }
                                    }
                                    d = h[c].index + h[c][0].length
                                }
                                if (d < t[a].length) {
                                    var v = this.createTextData(d ? t[a].substring(d) : t[a], o[o.length - 1], n[n.length - 1]);
                                    r.push(v)
                                }
                            }
                            i.push(r)
                        }
                        var {
                            tagStyle: b
                        } = this.textStyles.default;
                        return i[i.length - 1].map((t => {
                            t.text.includes(Ot[b][0]) && (t.text = t.text.match(b === Zt ? /^(.*)\[/ : /^(.*)\</)[1])
                        })), i
                    }
                    getFontString(t) {
                        return new n.TextStyle(t).toFontString()
                    }
                    createTextData(t, e, i) {
                        return {
                            text: t,
                            style: e,
                            width: 0,
                            height: 0,
                            fontProperties: void 0,
                            tag: i
                        }
                    }
                    getDropShadowPadding() {
                        var t = 0,
                            e = 0;
                        return Object.keys(this.textStyles).forEach((i => {
                            var {
                                dropShadowDistance: s,
                                dropShadowBlur: o
                            } = this.textStyles[i];
                            t = Math.max(t, s || 0), e = Math.max(e, o || 0)
                        })), t + e
                    }
                    withPrivateMembers() {
                        return this
                    }
                    updateText() {
                        if (this.withPrivateMembers().dirty) {
                            this.hitboxes = [], this.texture.baseTexture.resolution = this.resolution;
                            var t = this.textStyles,
                                e = this.text;
                            this.withPrivateMembers()._style.wordWrap && (e = this.wordWrap(this.text));
                            for (var i = e.split(/(?:\r\n|\r|\n)/), s = this._getTextDataPerLine(i), o = [], a = [], r = [], h = 0, l = 0; l < i.length; l++) {
                                for (var d = 0, c = 0, u = 0, p = 0; p < s[l].length; p++) {
                                    var g = s[l][p].style;
                                    this.context.font = this.getFontString(g), s[l][p].width = this.context.measureText(s[l][p].text).width, 0 !== s[l][p].text.length && (s[l][p].width += (s[l][p].text.length - 1) * g.letterSpacing, p > 0 && (d += g.letterSpacing / 2), p < s[l].length - 1 && (d += g.letterSpacing / 2)), d += s[l][p].width, s[l][p].fontProperties = n.TextMetrics.measureFont(this.context.font), s[l][p].height = s[l][p].fontProperties.fontSize, "number" == typeof g.valign ? (c = Math.min(c, g.valign - s[l][p].fontProperties.descent), u = Math.max(u, g.valign + s[l][p].fontProperties.ascent)) : (c = Math.min(c, -s[l][p].fontProperties.descent), u = Math.max(u, s[l][p].fontProperties.ascent))
                                }
                                o[l] = d, a[l] = c, r[l] = u, h = Math.max(h, d)
                            }
                            var m = Object.keys(t).map((e => t[e])).reduce(((t, e) => Math.max(t, e.strokeThickness || 0)), 0),
                                A = this.getDropShadowPadding(),
                                v = h + 2 * m + 2 * A,
                                b = r.reduce(((t, e) => t + e), 0) - a.reduce(((t, e) => t + e), 0) + 2 * m + 2 * A;
                            this.canvas.width = v * this.resolution, this.canvas.height = b * this.resolution, this.context.scale(this.resolution, this.resolution), this.context.textBaseline = "alphabetic", this.context.lineJoin = "round";
                            for (var w = A + m, f = [], y = 0; y < s.length; y++) {
                                var S = s[y],
                                    x = void 0;
                                switch (this.withPrivateMembers()._style.align) {
                                    case "left":
                                        x = A + m;
                                        break;
                                    case "center":
                                        x = A + m + (h - o[y]) / 2;
                                        break;
                                    case "right":
                                        x = A + m + h - o[y]
                                }
                                for (var k = 0; k < S.length; k++) {
                                    var {
                                        style: C,
                                        text: B,
                                        fontProperties: P,
                                        width: T,
                                        height: E,
                                        tag: F
                                    } = S[k], R = w + P.ascent;
                                    switch (C.valign) {
                                        case "top":
                                            break;
                                        case "baseline":
                                            R += r[y] - P.ascent;
                                            break;
                                        case "middle":
                                            R += (r[y] - a[y] - P.ascent - P.descent) / 2;
                                            break;
                                        case "bottom":
                                            R += r[y] - a[y] - P.ascent - P.descent;
                                            break;
                                        default:
                                            R += r[y] - P.ascent - C.valign
                                    }
                                    if (0 === C.letterSpacing) f.push({
                                        text: B,
                                        style: C,
                                        x,
                                        y: R,
                                        width: T,
                                        ascent: P.ascent,
                                        descent: P.descent,
                                        tag: F
                                    }), x += S[k].width;
                                    else {
                                        this.context.font = this.getFontString(S[k].style);
                                        for (var Z = 0; Z < B.length; Z++) {
                                            (Z > 0 || k > 0) && (x += C.letterSpacing / 2);
                                            var O = this.context.measureText(B.charAt(Z)).width;
                                            f.push({
                                                text: B.charAt(Z),
                                                style: C,
                                                x,
                                                y: R,
                                                width: O,
                                                ascent: P.ascent,
                                                descent: P.descent,
                                                tag: F
                                            }), x += O, (Z < B.length - 1 || k < S.length - 1) && (x += C.letterSpacing / 2)
                                        }
                                    }
                                }
                                w += r[y] - a[y]
                            }
                            this.context.save(), f.forEach((t => {
                                var {
                                    style: e,
                                    text: i,
                                    x: s,
                                    y: o
                                } = t;
                                if (e.dropShadow) {
                                    this.context.font = this.getFontString(e);
                                    var a = e.dropShadowColor;
                                    "number" == typeof a && (a = n.utils.hex2string(a)), this.context.shadowColor = a, this.context.shadowBlur = e.dropShadowBlur, this.context.shadowOffsetX = Math.cos(e.dropShadowAngle) * e.dropShadowDistance * this.resolution, this.context.shadowOffsetY = Math.sin(e.dropShadowAngle) * e.dropShadowDistance * this.resolution, this.context.fillText(i, s, o)
                                }
                            })), this.context.restore(), f.forEach((t => {
                                var {
                                    style: e,
                                    text: i,
                                    x: s,
                                    y: o,
                                    width: a,
                                    ascent: r,
                                    descent: h,
                                    tag: l
                                } = t;
                                if (void 0 !== e.stroke && e.strokeThickness) {
                                    this.context.font = this.getFontString(e);
                                    var d = e.stroke;
                                    "number" == typeof d && (d = n.utils.hex2string(d)), this.context.strokeStyle = d, this.context.lineWidth = e.strokeThickness, this.context.strokeText(i, s, o)
                                }
                            })), f.forEach((t => {
                                var {
                                    style: e,
                                    text: i,
                                    x: s,
                                    y: o,
                                    width: a,
                                    ascent: r,
                                    descent: h,
                                    tag: l
                                } = t;
                                if (void 0 !== e.fill) {
                                    this.context.font = this.getFontString(e);
                                    var d = e.fill;
                                    if ("number" == typeof d) d = n.utils.hex2string(d);
                                    else if (Array.isArray(d))
                                        for (var c = 0; c < d.length; c++) {
                                            var u = d[c];
                                            "number" == typeof u && (d[c] = n.utils.hex2string(u))
                                        }
                                    var p = new n.TextStyle(e),
                                        g = n.TextMetrics.measureText(i || " ", p, p.wordWrap, this.canvas);
                                    this.context.fillStyle = this._generateFillStyle(p, [i], g), this.context.fillText(i, s, o)
                                }
                            })), f.forEach((t => {
                                var {
                                    style: e,
                                    text: i,
                                    x: s,
                                    y: o,
                                    width: a,
                                    ascent: r,
                                    descent: h,
                                    tag: l
                                } = t, d = -this.withPrivateMembers()._style.padding - this.getDropShadowPadding();
                                this.hitboxes.push({
                                    tag: l,
                                    hitbox: new n.Rectangle(s + d, o - r + d, a, r + h)
                                }), (void 0 === e.debug ? Mt.debugOptions.spans.enabled : e.debug) && (this.context.lineWidth = 1, Mt.debugOptions.spans.bounding && (this.context.fillStyle = Mt.debugOptions.spans.bounding, this.context.strokeStyle = Mt.debugOptions.spans.bounding, this.context.beginPath(), this.context.rect(s, o - r, a, r + h), this.context.fill(), this.context.stroke(), this.context.stroke()), Mt.debugOptions.spans.baseline && (this.context.strokeStyle = Mt.debugOptions.spans.baseline, this.context.beginPath(), this.context.moveTo(s, o), this.context.lineTo(s + a, o), this.context.closePath(), this.context.stroke()), Mt.debugOptions.spans.top && (this.context.strokeStyle = Mt.debugOptions.spans.top, this.context.beginPath(), this.context.moveTo(s, o - r), this.context.lineTo(s + a, o - r), this.context.closePath(), this.context.stroke()), Mt.debugOptions.spans.bottom && (this.context.strokeStyle = Mt.debugOptions.spans.bottom, this.context.beginPath(), this.context.moveTo(s, o + h), this.context.lineTo(s + a, o + h), this.context.closePath(), this.context.stroke()), Mt.debugOptions.spans.text && (this.context.fillStyle = "#ffffff", this.context.strokeStyle = "#000000", this.context.lineWidth = 2, this.context.font = "8px monospace", this.context.strokeText(l.name, s, o - r + 8), this.context.fillText(l.name, s, o - r + 8), this.context.strokeText("".concat(a.toFixed(2), "x").concat((r + h).toFixed(2)), s, o - r + 16), this.context.fillText("".concat(a.toFixed(2), "x").concat((r + h).toFixed(2)), s, o - r + 16)))
                            })), Mt.debugOptions.objects.enabled && (Mt.debugOptions.objects.bounding && (this.context.fillStyle = Mt.debugOptions.objects.bounding, this.context.beginPath(), this.context.rect(0, 0, v, b), this.context.fill()), Mt.debugOptions.objects.text && (this.context.fillStyle = "#ffffff", this.context.strokeStyle = "#000000", this.context.lineWidth = 2, this.context.font = "8px monospace", this.context.strokeText("".concat(v.toFixed(2), "x").concat(b.toFixed(2)), 0, 8, v), this.context.fillText("".concat(v.toFixed(2), "x").concat(b.toFixed(2)), 0, 8, v))), this.updateTexture()
                        }
                    }
                    wordWrap(t) {
                        var e = "",
                            i = this.getTagRegex(!0, !0),
                            s = t.split("\n"),
                            o = this.withPrivateMembers()._style.wordWrapWidth,
                            n = [this.assign({}, this.textStyles.default)];
                        this.context.font = this.getFontString(this.textStyles.default);
                        for (var a = 0; a < s.length; a++) {
                            for (var r = o, h = s[a].split(i), l = !0, d = 0; d < h.length; d++)
                                if (i.test(h[d])) {
                                    if (e += h[d], "/" === h[d][1]) d += 2, n.pop();
                                    else {
                                        var c = h[++d];
                                        n.push(this.assign({}, n[n.length - 1], this.textStyles[c], this.textStyles[c.toLowerCase()])), d++
                                    }
                                    this.context.font = this.getFontString(n[n.length - 1])
                                } else
                                    for (var u = h[d].split(" "), p = 0; p < u.length; p++) {
                                        var g = this.context.measureText(u[p]).width;
                                        if (this.withPrivateMembers()._style.breakWords && g > r) {
                                            for (var m = u[p].split(""), A = 0; A < m.length; A++) {
                                                var v = this.context.measureText(m[A]).width;
                                                v > r ? (e += "\n".concat(m[A]), r = o - v) : (e += m[A], r -= v)
                                            }
                                            p > 0 && (e += " ", r -= this.context.measureText(" ").width)
                                        } else if (this.withPrivateMembers()._style.breakWords) e += u[p], r -= g, p < u.length - 1 && (e += " ", r -= this.context.measureText(" ").width);
                                        else {
                                            var b = g + (p > 0 ? this.context.measureText(" ").width : 0);
                                            b > r ? (l || (e += "\n"), e += u[p], r = o - g) : (r -= b, p > 0 && (e += " "), e += u[p])
                                        }
                                        l = !1
                                    }
                            a < s.length - 1 && (e += "\n")
                        }
                        return e
                    }
                    updateTexture() {
                        var t = this.withPrivateMembers()._texture,
                            e = this.getDropShadowPadding();
                        t.baseTexture.setRealSize(this.canvas.width, this.canvas.height, this.resolution), t.trim.width = t.frame.width = this.canvas.width / this.resolution, t.trim.height = t.frame.height = this.canvas.height / this.resolution, t.trim.x = -this.withPrivateMembers()._style.padding - e, t.trim.y = -this.withPrivateMembers()._style.padding - e, t.orig.width = t.frame.width - 2 * (this.withPrivateMembers()._style.padding + e), t.orig.height = t.frame.height - 2 * (this.withPrivateMembers()._style.padding + e), this.withPrivateMembers()._onTextureUpdate(), t.baseTexture.emit("update", t.baseTexture), this.withPrivateMembers().dirty = !1
                    }
                    assign(t) {
                        for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++) i[s - 1] = arguments[s];
                        for (var o of i)
                            for (var n in o) t[n] = o[n];
                        return t
                    }
                }(0, o.Z)(Mt, "DEFAULT_TAG_STYLE", {
                    align: "left",
                    breakWords: !1,
                    dropShadow: !1,
                    dropShadowAngle: Math.PI / 6,
                    dropShadowBlur: 0,
                    dropShadowColor: "#000000",
                    dropShadowDistance: 5,
                    fill: "black",
                    fillGradientType: n.TEXT_GRADIENT.LINEAR_VERTICAL,
                    fontFamily: "Arial",
                    fontSize: 26,
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: "normal",
                    letterSpacing: 0,
                    lineHeight: 0,
                    lineJoin: "miter",
                    miterLimit: 10,
                    padding: 0,
                    stroke: "black",
                    strokeThickness: 0,
                    textBaseline: "alphabetic",
                    valign: "baseline",
                    wordWrap: !1,
                    wordWrapWidth: 100,
                    tagStyle: "xml"
                }), (0, o.Z)(Mt, "debugOptions", {
                    spans: {
                        enabled: !1,
                        baseline: "#44BB44",
                        top: "#BB4444",
                        bottom: "#4444BB",
                        bounding: "rgba(255, 255, 255, 0.1)",
                        text: !0
                    },
                    objects: {
                        enabled: !1,
                        bounding: "rgba(255, 255, 255, 0.05)",
                        text: !0
                    }
                });
                class It extends(q(ot)) {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "BetSettings"), (0, o.Z)(this, "bets", []), (0, o.Z)(this, "betCoins", 0), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "scrollView", void 0), (0, o.Z)(this, "bottom", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "betItems", void 0), (0, o.Z)(this, "paylines", void 0), (0, o.Z)(this, "currency", void 0), (0, o.Z)(this, "closeButton", void 0), (0, o.Z)(this, "bottomBackgroundTexture", void 0), (0, o.Z)(this, "bottomBackgroundMobileTexture", void 0), (0, o.Z)(this, "spaceKey", void 0), (0, o.Z)(this, "hasCurrency", !1), this.bottomBackgroundTexture = n.Texture.from($), this.bottomBackgroundMobileTexture = n.Texture.from(tt), this.overlay = this.addChild(new nt), this.scrollView = this.addChild(new rt), this.bottom = this.addChild(new n.Sprite(this.bottomBackgroundMobileTexture)), this.content = this.scrollView.addChild(new n.Container), this.title = this.content.addChild(new gt(this.game.i18n.t("BetSettingsTitle").toUpperCase())), this.title.withGameName(), this.title.anchor.set(.5, 0), this.betItems = this.content.addChild(new dt), this.paylines = this.content.addChild(new Mt("", {
                            default: {
                                align: "center",
                                fill: 16777215,
                                fontSize: 24,
                                fontFamily: "Avenir-Bold"
                            },
                            value: {
                                fontSize: 64,
                                fontFamily: "Avenir-Regular"
                            }
                        })), this.paylines.anchor.set(.5, 0), this.currency = new Mt(this.game.i18n.t("Currency", this.game.i18n.currency()), {
                            default: {
                                align: "center",
                                fill: 16777215,
                                fontSize: 24,
                                fontFamily: "Avenir-Bold"
                            },
                            value: {
                                fontSize: 64,
                                fontFamily: "Avenir-Regular"
                            }
                        }), this.currency.anchor.set(.5, 0), this.closeButton = this.addChild(new st), this.closeButton.onClick.add((() => this.close())), this.spaceKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Escape), this.spaceKey.onPress.add(this.close, this), this.spaceKey.disable(), this.game.i18n.hasCurrency() && (this.hasCurrency = !0, this.content.addChild(this.currency))
                    }
                    get opened() {
                        return this.visible
                    }
                    setPayLines(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "lines";
                        this.paylines.text = this.game.i18n.t("lines" === e ? "BetSettingsLines" : "BetSettingsWays", t)
                    }
                    setBet(t) {
                        this.betItems.select(t)
                    }
                    setBets(t, e) {
                        this.bets = t, this.betCoins = e, this.betItems.addValues(t, (t => "".concat(this.game.helpers.toMoneySS(t * e)))), this.betItems.on("pick", (t => this.emit("pickBet", t))), this.setBet(t[0])
                    }
                    toggle(t) {
                        this.betItems.filter(Math.max(...this.bets.filter((e => e * this.betCoins <= t)))), super.toggle()
                    }
                    open() {
                        super.open(), this.resize(), this.spaceKey.enable(), this.scrollView.scrollTo(0, 0), this.game.fullscreen.lock()
                    }
                    close() {
                        this.visible && (super.close(), this.spaceKey.disable(), this.game.fullscreen.unlock())
                    }
                    resize() {
                        var {
                            device: t,
                            viewport: e
                        } = this.game;
                        if (this.overlay.resize(), this.bottom.width = e.width + 2 * e.paddingX, this.bottom.position.x = -e.paddingX, t.desktop) this.bottom.texture = this.bottomBackgroundTexture, this.bottom.y = 900, this.closeButton.scale.set(.8), this.closeButton.position.set(1838, 60), this.title.position.set(0, 62), this.title.scale.set(1), this.betItems.position.set(1, this.title.y + this.title.height + 120), this.betItems.resize(), this.paylines.position.set(this.hasCurrency ? -240 : 0, this.betItems.y + this.betItems.height + 100), this.paylines.scale.set(1), this.currency.position.set(240, this.betItems.y + this.betItems.height + 100), this.currency.scale.set(1), this.content.position.set(e.width / 2, 0), this.scrollView.paddingBottom = 30, this.scrollView.position.set(0, 0), this.scrollView.resize(e.width, 960);
                        else if (t.landscape) this.bottom.texture = this.bottomBackgroundTexture, this.bottom.y = 900, this.closeButton.scale.set(1.6), this.closeButton.position.set(this.game.leftHand.enabled ? 120 : 1780, 120), this.title.position.set(0, 120), this.title.scale.set(1.6), this.betItems.resize(), this.betItems.position.set(1, this.title.y + this.title.height + 120), this.paylines.position.set(this.hasCurrency ? -240 : 0, this.betItems.y + this.betItems.height), this.paylines.scale.set(1.6), this.currency.position.set(240, this.betItems.y + this.betItems.height), this.currency.scale.set(1.6), this.content.position.set(e.width / 2, 0), this.scrollView.paddingBottom = 100, this.scrollView.position.set(0, 0), this.scrollView.resize(e.width, 960);
                        else {
                            var i = e.height + 2 * e.paddingY;
                            this.bottom.texture = this.bottomBackgroundMobileTexture, this.bottom.y = e.height + 2 * e.paddingY - 830, this.closeButton.scale.set(1.6), this.closeButton.position.set(955, i - 318), this.title.scale.set(1.6), this.title.position.set(0, 100), this.betItems.resize(), this.betItems.position.set(1, this.title.y + this.title.height + 120), this.paylines.position.set(this.hasCurrency ? -240 : 0, this.betItems.y + this.betItems.height), this.paylines.scale.set(1.8), this.currency.position.set(240, this.betItems.y + this.betItems.height), this.currency.scale.set(1.8), this.content.position.set(e.width / 2, 0), this.scrollView.paddingBottom = 100, this.scrollView.position.set(0, 0), this.scrollView.resize(e.width, i - 710)
                        }
                    }
                }
                class Dt extends nt {
                    constructor() {
                        super(1, 13421772), (0, o.Z)(this, "name", "FastStopLayout"), (0, o.Z)(this, "handlerRef", null), this.alpha = 0, this.interactive = !1
                    }
                    press(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        "function" == typeof this.handlerRef && this.handlerRef(), this.handlerRef = this.game.interaction.clickOnce(this, (() => {
                            this.interactive = !1, e && a.kX.to(this, .1, {
                                pixi: {
                                    alpha: .3
                                },
                                yoyo: !0,
                                repeat: 1
                            }), t()
                        })), this.interactive = !0
                    }
                    disable() {
                        this.interactive = !1
                    }
                }
                class Wt extends(q(Mt)) {
                    constructor(t) {
                        super(t, {
                            default: {
                                fill: "white",
                                fontSize: 21,
                                fontFamily: "Avenir-Regular",
                                wordWrap: !0,
                                wordWrapWidth: 940
                            },
                            bold: {
                                fontFamily: "Avenir-Bold"
                            }
                        }), this.scale.set(1.2), this.setTagStyle("default", {
                            breakWords: ["cn", "ja"].includes(this.game.i18n.language)
                        }), this.setTagStyle("bold", {
                            fill: this.game.config.get("colors.primary")
                        })
                    }
                    resize() {
                        this.game.device.desktop ? this.scale.set(1.2) : this.game.device.landscape ? (this.scale.set(2.2), this.setTagStyle("default", {
                            wordWrapWidth: 670
                        })) : (this.scale.set(2.2), this.setTagStyle("default", {
                            wordWrapWidth: 400
                        }))
                    }
                }
                class Lt extends(q(n.Text)) {
                    constructor(t) {
                        super(t.toUpperCase(), {
                            fontSize: 34,
                            fontFamily: "Avenir-Bold",
                            wordWrap: !0,
                            wordWrapWidth: 1150
                        }), this.style.fill = this.game.config.get("colors.primary")
                    }
                    resize() {
                        this.game.device.desktop ? (this.scale.set(1), this.style.wordWrapWidth = 1150) : this.game.device.landscape ? (this.scale.set(1.6), this.style.wordWrapWidth = 900) : (this.scale.set(1.6), this.style.wordWrapWidth = 600)
                    }
                }
                class _t extends(q(n.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "content", void 0), this.title = this.addChild(new Lt(this.game.i18n.t("GameRulesAdvancedAutoPlayTitle"))), this.content = this.addChild(new Wt(this.game.i18n.t("GameRulesAdvancedAutoPlayContent")))
                    }
                    resize() {
                        this.content.position.set(0, this.title.y + this.title.height + 30)
                    }
                }
                class Nt extends(q(n.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "content", void 0), this.title = this.addChild(new Lt(this.game.i18n.t("GameRulesAutoPlayTitle"))), this.content = this.addChild(new Wt(this.game.i18n.t("GameRulesAutoPlayContent")))
                    }
                    resize() {
                        this.content.position.set(0, this.title.y + this.title.height + 30)
                    }
                }
                class Ut extends(q(n.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "content", void 0), this.content = this.addChild(new Wt(this.game.i18n.t("GameRulesBestExperience")))
                    }
                    resize() {
                        this.content.position.set(0, 0)
                    }
                }
                class jt extends(q(n.Sprite)) {
                    constructor() {
                        super(n.Texture.WHITE), this.tint = 2763563
                    }
                    resize() {
                        this.game.device.desktop ? (this.height = 4, this.width = 1120) : this.game.device.landscape ? (this.height = 6, this.width = 1580) : (this.height = 6, this.width = 950)
                    }
                }
                class zt extends(q(n.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "gameName", void 0), (0, o.Z)(this, "gameTRTP", void 0), this.title = this.addChild(new Lt(this.game.i18n.t("GameRulesGeneralTitle"))), this.gameName = this.addChild(new Wt(this.game.config.get("gameName")));
                        var t = this.game.config.get("trtp");
                        this.gameTRTP = this.addChild(new Wt(this.game.i18n.t("GameRulesGeneralRTP", t))), this.gameTRTP.visible = !!t
                    }
                    resize() {
                        this.gameName.position.set(0, this.title.y + this.title.height + 30), this.gameTRTP.position.set(0, this.gameName.y + this.gameName.height + 30)
                    }
                }
                class Vt extends(q(n.Container, {
                    preventResize: !0
                })) {
                    constructor(t, e, i) {
                        super(), (0, o.Z)(this, "icon", void 0), (0, o.Z)(this, "text", void 0), this.name = i, this.icon = this.addChild(new n.Sprite(e)), this.text = this.addChild(new Wt(t))
                    }
                    resize() {
                        this.game.device.desktop ? (this.icon.scale.set(1), this.text.x = 260, this.text.style.wordWrapWidth = 740) : this.game.device.landscape ? (this.icon.scale.set(2), this.text.x = 380, this.text.style.wordWrapWidth = 500) : (this.icon.scale.set(1.8), this.text.x = this.icon.x + this.icon.width + 30, this.text.style.wordWrapWidth = 280), this.text.height >= this.icon.height ? (this.text.y = 0, this.icon.position.set(0, (this.text.height - this.icon.height) / 2)) : (this.icon.y = 0, this.text.y = (this.icon.height - this.text.height) / 2)
                    }
                }
                class Gt extends(q(n.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "content", void 0), this.title = this.addChild(new Lt(this.game.i18n.t("GameRulesInterfaceTitle"))), this.content = this.addChild(new Wt(this.game.i18n.t("GameRulesInterfaceContent"))), this.addItems()
                    }
                    addItems() {
                        this.addChild(new Vt(this.game.i18n.t("GameRulesInterfaceSpin"), this.game.loader.getAsset("gameRulesButtonSpin"), "itemSpin")), this.addChild(new Vt(this.game.i18n.t("GameRulesInterfaceMenu"), this.game.loader.getAsset("iconMenu"), "itemMenu"));
                        var t = new Vt(this.game.i18n.t("GameRulesInterfaceQuickSpin"), this.game.loader.getAsset("iconQuickSpin"), "itemQuickSpin");
                        this.game.config.get("quickSpin.available", !0) && this.addChild(t);
                        var e = new Vt(this.game.i18n.t("GameRulesInterfaceAutoPlay"), this.game.loader.getAsset("iconAuto"), "itemAutoPlay");
                        this.game.config.get("autoPlay.available", !0) && this.addChild(e), this.addChild(new Vt(this.game.i18n.t("GameRulesInterfaceBetLevel"), this.game.loader.getAsset("ex" === this.game.i18n.language ? "gameRulesButtonPlayLevel" : "gameRulesButtonBetLevel"), "itemBetLevel")), this.addChild(new Vt(this.game.i18n.t("GameRulesInterfaceWin"), this.game.loader.getAsset("gameRulesItemWin"), "itemWin")), this.game.config.get("balanceHide", !1) || this.addChild(new Vt(this.game.i18n.t("GameRulesInterfaceBalance"), this.game.loader.getAsset("gameRulesItemBalance"), "itemBalance")), this.addChild(new Vt(this.game.i18n.t("GameRulesInterfaceSound"), this.game.loader.getAsset("gameRulesButtonSound"), "itemSound"))
                    }
                    resize() {
                        var t = 0;
                        this.children.forEach((e => {
                            var i = "itemBalance" === e.name && this.game.device.mobile && this.game.device.portrait ? 12 : 0;
                            e.resize(), e.position.set(i, t), t += e.height + 30
                        }))
                    }
                }
                class Ht extends(q(n.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "itemQuickSpin", void 0), (0, o.Z)(this, "itemFullscreen", void 0), (0, o.Z)(this, "itemGameSound", void 0), (0, o.Z)(this, "itemBackgroundSound", void 0), this.title = this.addChild(new Lt(this.game.i18n.t("GameRulesSettingsTitle"))), this.content = this.addChild(new Wt(this.game.i18n.t("GameRulesSettingsContent"))), this.game.config.get("quickSpin.available", !0) && (this.itemQuickSpin = this.addChild(new Wt(this.game.i18n.t("GameRulesSettingsContentItemQuickSpin")))), this.itemFullscreen = this.addChild(new Wt(this.game.i18n.t("GameRulesSettingsContentItemFullscreen"))), this.itemGameSound = this.addChild(new Wt(this.game.i18n.t("GameRulesSettingsContentItemGameSound"))), this.itemBackgroundSound = this.addChild(new Wt(this.game.i18n.t("GameRulesSettingsContentItemBackgroundSound")))
                    }
                    resize() {
                        var t;
                        this.children.filter((t => t.visible)).forEach((e => {
                            t ? e.position.set(0, t.y + t.height + 30) : e.position.set(0), t = e
                        }))
                    }
                }
                class Qt extends(q(n.Container)) {
                    constructor() {
                        var t, e;
                        super(), (0, o.Z)(this, "content", void 0), this.content = this.addChild(new Wt("".concat(null !== (t = window.RELEASE_VERSION) && void 0 !== t ? t : "", "\n").concat(null !== (e = window.RELEASE_DATE) && void 0 !== e ? e : "")))
                    }
                    resize() {
                        var t;
                        null === (t = this.content) || void 0 === t || t.position.set(0, 0)
                    }
                }
                class Yt extends(q(n.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "GameRules"), (0, o.Z)(this, "scrollView", void 0), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "content", void 0), this.visible = !1, this.interactive = !0, this.scrollView = this.addChild(new rt), this.scrollView.paddingBottom = 120, this.title = this.scrollView.addChild(new gt(this.game.i18n.t("MenuGameRules").toUpperCase())), this.title.withGameName(), this.title.anchor.set(.5, 0), this.content = this.scrollView.addChild(new n.Container), this.addSections()
                    }
                    addSections() {
                        this.content.addChild(new zt), this.content.addChild(new Gt), this.content.addChild(new Ht), this.addAutoPlaySection(), this.content.addChild(new jt), this.content.addChild(new Ut), this.content.addChild(new Qt)
                    }
                    addAutoPlaySection() {
                        this.game.config.get("autoPlay.available", !0) && (this.content.addChild(new Nt), this.content.addChild(new _t))
                    }
                    open() {
                        this.visible = !0, this.scrollView.scrollTo(0, 0)
                    }
                    close() {
                        this.visible && (this.visible = !1)
                    }
                    alignSection() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            e = -t,
                            i = 0;
                        this.content.children.forEach((s => {
                            s.y = e + i + t, e = s.y, i = s.height
                        }))
                    }
                    resize() {
                        var {
                            device: t,
                            viewport: e,
                            leftHand: i
                        } = this.game;
                        t.desktop ? (this.title.position.set(e.width / 2, 62), this.scrollView.hitAreaOffsetLeft = 0, this.scrollView.hitAreaOffsetRight = 0, this.scrollView.resize(e.width, 960), this.scrollView.position.set(0, 0), this.content.position.set(380, this.title.y + this.title.height + 60)) : t.landscape ? (this.title.position.set(e.width / 2 + e.paddingX, 120), i.enabled ? (this.scrollView.hitAreaOffsetLeft = e.paddingX + 180, this.scrollView.hitAreaOffsetRight = e.paddingX, this.content.position.set(e.paddingX + 220, this.title.y + this.title.height + 60)) : (this.scrollView.hitAreaOffsetLeft = e.paddingX, this.scrollView.hitAreaOffsetRight = e.paddingX + 180, this.content.position.set(e.paddingX + 60, this.title.y + this.title.height + 60)), this.scrollView.resize(e.width + 2 * e.paddingX, 940), this.scrollView.position.set(-e.paddingX, 0)) : (this.title.position.set(e.width / 2 + e.paddingX, 100), this.scrollView.resize(e.width + 2 * e.paddingX, 2 * e.paddingY + e.height - 360), this.scrollView.position.set(-e.paddingX, 0), this.scrollView.hitAreaOffsetLeft = 0, this.scrollView.hitAreaOffsetRight = 0, this.content.position.set(e.paddingX + 60, this.title.y + this.title.height + 60)), this.alignSection(50)
                    }
                }
                class Xt extends(q(ot)) {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "GameSettings"), (0, o.Z)(this, "scrollView", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "title", void 0), this.scrollView = this.addChild(new rt), this.title = this.scrollView.addChild(new gt(this.game.i18n.t("GameSettingsTitle").toUpperCase())), this.title.withGameName(), this.title.anchor.set(.5, 0), this.content = this.scrollView.addChild(new n.Container)
                    }
                    addItem(t) {
                        t && this.content.addChild(t)
                    }
                    resize() {
                        if (this.game.device.desktop) {
                            for (var t = 0, e = 0; t < this.content.children.length; t++) {
                                var i = this.content.children[t];
                                i.visible && (i.position.set(e % 2 * 400, 100 * Math.floor(e / 2)), e++)
                            }
                            this.title.position.set(this.game.viewport.width / 2, 62), this.content.pivot.set(this.content.width / 2, 0), this.content.position.set(this.game.viewport.width / 2, this.title.y + this.title.height + 60), this.scrollView.paddingBottom = 100, this.scrollView.position.set(0, 0), this.scrollView.resize(this.game.viewport.width, 960)
                        } else if (this.game.device.landscape) {
                            for (var s = 0, o = 0; s < this.content.children.length; s++) {
                                var n = this.content.children[s];
                                n.visible && (n.position.set(o % 2 * 700, 140 * Math.floor(o / 2)), o++)
                            }
                            this.title.position.set(this.game.viewport.width / 2, 120), this.content.pivot.set(this.content.width / 2, 0), this.content.position.set(this.game.viewport.width / 2, this.title.y + this.title.height + 60), this.scrollView.paddingBottom = 100, this.scrollView.position.set(0, 0), this.scrollView.resize(this.game.viewport.width, 960)
                        } else {
                            for (var a = 0, r = 0; a < this.content.children.length; a++) {
                                var h = this.content.children[a];
                                h.visible && (h.position.set(0, 140 * r), r++)
                            }
                            this.title.position.set(this.game.viewport.width / 2, 100), this.content.pivot.set(this.content.width / 2, 0), this.content.position.set(this.game.viewport.width / 2, this.title.y + this.title.height + 60), this.scrollView.paddingBottom = 100, this.scrollView.position.set(0, 0), this.scrollView.resize(this.game.viewport.width, this.game.viewport.height + 2 * this.game.viewport.paddingY - 510)
                        }
                    }
                }
                class Kt extends it {
                    constructor() {
                        super("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTP///////////////////////////////////////////////////////////////////////////4/JsPUAAAATdFJOUwC/XzCfgO/fIH/Pj5BwQBCvb6Aufu5CAAAAu0lEQVRYw+3X3Q6DIAyGYVEExL9tvf97nVuGybKJpLZxyb73sCHPARw0VBVCCCGE0F8XvA9aMpGO/ZB17MbRM9doyfL2tMqLPUnKNb1Vq8mC9pU+GmXkjr7Uqcki9oYsYG/Kh+2MfNDuKVvPly3tZNVkrj0bKugyM+gbFWUYNBXGoE2ZHDkLa7B25yGXAwN7oYnfBehzade+cuK0TyMPGjToM2iTo+MhOsTktGk0rgtX6aeHEEIIIfTD3QFMQUQwK1KW1AAAAABJRU5ErkJggg==");
                        var t = this.game.config.get("homeURL.url", "javascript:history.back()"),
                            e = this.game.config.get("homeURL.target", "self");
                        this.visible = this.game.config.get("homeURL.show", !0), this.onClick.add((() => this.game.openUrl(t, e)))
                    }
                }
                class qt extends et {
                    constructor(t) {
                        super(), (0, o.Z)(this, "icon", void 0), (0, o.Z)(this, "border", void 0), this.preventAutoResize = !0, this.border = this.addChild(new n.Sprite(this.game.loader.getAsset("iconBorderV"))), this.icon = this.addChild(new n.Sprite(t)), this.game.interaction.click(this, (() => {
                            this.onClick.dispatch()
                        }))
                    }
                    setActive(t) {
                        this.icon.tint = t ? this.game.config.get("colors.primary") : this.game.config.get("colors.white"), this.border.tint = t ? this.game.config.get("colors.primary") : 3025203
                    }
                    resize() {
                        var {
                            device: t,
                            leftHand: e
                        } = this.game;
                        t.desktop ? (this.border.texture = this.game.loader.getAsset("iconBorderV"), this.icon.scale.set(1), this.icon.hitArea = new n.Rectangle(0, -30, 110, 150), this.icon.position.set(20, (this.border.height - this.icon.height) / 2)) : t.landscape ? (this.icon.scale.set(2), this.icon.hitArea = null, this.border.texture = this.game.loader.getAsset("iconBorderV"), e.enabled ? (this.border.position.set(0, 0), this.icon.position.set(0, 0)) : (this.icon.position.set(-100, 0), this.border.position.set(this.icon.width + this.icon.x, 0))) : (this.icon.scale.set(1.8), this.icon.position.set(0, 0), this.icon.hitArea = null, this.border.texture = this.game.loader.getAsset("iconBorderH"), this.border.position.set(0, this.icon.height))
                    }
                }
                class Jt extends(q(n.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "Menu"), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "contentItems", void 0), (0, o.Z)(this, "bottom", void 0), (0, o.Z)(this, "items", void 0), (0, o.Z)(this, "homeButton", void 0), (0, o.Z)(this, "closeButton", void 0), (0, o.Z)(this, "bottomBackgroundTexture", void 0), (0, o.Z)(this, "bottomBackgroundMobileTexture", void 0), (0, o.Z)(this, "spaceKey", void 0), (0, o.Z)(this, "currentIndex", 0), (0, o.Z)(this, "onClickHome", void 0), (0, o.Z)(this, "onClickClose", void 0), this.visible = !1, this.interactive = !0, this.bottomBackgroundTexture = n.Texture.from($), this.bottomBackgroundMobileTexture = n.Texture.from(tt), this.overlay = this.addChild(new nt), this.contentItems = this.addChild(new n.Container), this.bottom = this.addChild(new n.Sprite(this.bottomBackgroundMobileTexture)), this.items = this.addChild(new n.Container), this.homeButton = this.addChild(new Kt), this.closeButton = this.addChild(new st), this.closeButton.onClick.add((() => this.close())), this.spaceKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Escape), this.spaceKey.onPress.add(this.close, this), this.spaceKey.disable()
                    }
                    get opened() {
                        return this.visible
                    }
                    enable() {
                        this.interactive = !0
                    }
                    disable() {
                        this.interactive = !1
                    }
                    addItem(t, e) {
                        var i = this.items.addChild(new qt(t));
                        this.contentItems.addChild(e), i.onClick.add((() => {
                            this.open(this.contentItems.children.indexOf(e)), this.emit("pickItem")
                        })), this.resize()
                    }
                    open() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        t > -1 && (this.spaceKey.enable(), this.currentIndex = t, this.items.children.forEach(((t, e) => t.setActive(e === this.currentIndex))), this.contentItems.children.forEach(((t, e) => {
                            e === this.currentIndex ? t.open() : t.close()
                        })), this.visible = !0, this.emit("open")), this.resize()
                    }
                    close() {
                        this.spaceKey.disable(), this.items.children[this.currentIndex].setActive(!1), this.contentItems.children[this.currentIndex].close(), this.visible = !1, this.emit("close")
                    }
                    resize() {
                        var {
                            device: t,
                            viewport: e,
                            leftHand: i
                        } = this.game;
                        if (this.overlay.resize(), this.bottom.width = e.width + 2 * e.paddingX, this.bottom.position.x = -e.paddingX, t.desktop) this.bottom.texture = this.bottomBackgroundTexture, this.bottom.y = 860, this.homeButton.scale.set(.8), this.homeButton.position.set(77, 60), this.closeButton.scale.set(.8), this.closeButton.position.set(1838, 60), this.items.children.forEach(((t, e) => {
                            t.resize(), t.position.set(0, 150 * e)
                        })), this.items.position.set(0, (this.game.viewport.height - this.items.height) / 2);
                        else if (t.landscape) this.bottom.texture = this.bottomBackgroundTexture, this.bottom.y = 860, this.homeButton.scale.set(1.6), this.closeButton.scale.set(1.6), this.items.children.forEach(((t, e) => {
                            t.resize(), t.position.set(0, 150 * e)
                        })), null != i && i.enabled ? (this.homeButton.position.set(1780, 120), this.closeButton.position.set(120, 120), this.items.position.set(50, (this.game.viewport.height - this.items.height) / 2 - 80)) : (this.homeButton.position.set(120, 120), this.closeButton.position.set(1780, 120), this.items.position.set(1770, (this.game.viewport.height - this.items.height) / 2 - 80));
                        else {
                            var s = e.height + 2 * e.paddingY;
                            this.bottom.texture = this.bottomBackgroundMobileTexture, this.bottom.y = s - 480, this.homeButton.scale.set(1.6), this.homeButton.position.set(110, 100), this.closeButton.scale.set(1.6), this.closeButton.position.set(955, s - 318), this.items.children.forEach(((t, e) => {
                                t.resize(), t.position.set(150 * e, 0)
                            })), this.items.position.set((e.width - this.items.width) / 2, s - 420)
                        }
                    }
                }
                var $t = {
                    counts: [10, 25, 50, 100, 150, 300, 1 / 0]
                };
                class te extends n.utils.EventEmitter {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $t;
                        super(), (0, o.Z)(this, "count", void 0), (0, o.Z)(this, "enabled", void 0), this.config = t, this.count = this.config.counts[0], this.enabled = !1
                    }
                    get available() {
                        return this.counts.length > 0
                    }
                    get counts() {
                        return this.config.counts
                    }
                    get max() {
                        return Math.max(...this.config.counts)
                    }
                    toggle() {
                        this.enabled ? this.disable() : this.enable(), this.emit("toggle", this.enabled)
                    }
                    enable() {
                        this.enabled = !0, this.emit("enable")
                    }
                    disable() {
                        this.count = this.config.counts[0], this.enabled = !1, this.emit("disable")
                    }
                    setCount(t) {
                        this.count = t
                    }
                }
                class ee {
                    constructor(t, e, i) {
                        this.bigMul = t, this.giantMul = e, this.betLevel = i
                    }
                    available(t) {
                        return t >= this.bigMul * this.betLevel.toCoins()
                    }
                    type(t) {
                        return t >= this.giantMul * this.betLevel.toCoins() ? Tt : Pt
                    }
                }
                class ie extends class {
                    constructor() {
                        (0, o.Z)(this, "game", X)
                    }
                } {
                    constructor() {
                        super(), (0, o.Z)(this, "left", -1), (0, o.Z)(this, "enabled", !1), (0, o.Z)(this, "onStart", new(C())), (0, o.Z)(this, "onFinish", new(C())), this.update(this.game.server.response), this.game.server.on("response", this.update, this)
                    }
                    update(t) {
                        this.left = h()(t, "freeRounds", h()(t, "preSpin.freeRounds", -1)), this.enabled = this.left > -1
                    }
                    start() {
                        return new Promise((t => {
                            this.left >= 0 ? (this.enabled = !0, this.onStart.dispatch(this.left, t)) : t()
                        }))
                    }
                    finish() {
                        return new Promise((t => {
                            0 === this.left ? (this.enabled = !1, this.onFinish.dispatch(t)) : t()
                        }))
                    }
                }
                class se {
                    constructor(t) {
                        (0, o.Z)(this, "count", 0), (0, o.Z)(this, "active", !0), this.config = t
                    }
                    get isMax() {
                        return this.count >= this.config.get("quickSpin.maxWatcherCount", 3)
                    }
                    watch() {
                        this.active && this.count++
                    }
                    unwatch() {
                        this.count = 0, this.active = !1
                    }
                }
                class oe {
                    constructor(t) {
                        (0, o.Z)(this, "watcher", void 0), (0, o.Z)(this, "enabled", !1), (0, o.Z)(this, "onToggle", new(C())), (0, o.Z)(this, "onTryEnable", new(C())), this.config = t, this.watcher = new se(t)
                    }
                    get available() {
                        return !this.config.get("quickSpin.disabled", !1)
                    }
                    toggle() {
                        this.enabled ? this.disable() : this.enable()
                    }
                    enable() {
                        this.available && (this.clear(), this.enabled = !0, this.onToggle.dispatch(this.enabled))
                    }
                    disable() {
                        this.available && (this.enabled = !1, this.onToggle.dispatch(this.enabled))
                    }
                    tryEnable() {
                        return this.available && this.watcher.isMax ? new Promise((t => {
                            this.onTryEnable.dispatch((e => {
                                e ? this.enable() : this.clear(), t()
                            }))
                        })) : Promise.resolve()
                    }
                    update() {
                        this.enabled || this.watcher.watch()
                    }
                    clear() {
                        this.watcher.unwatch(), this.onTryEnable.detachAll()
                    }
                }
                class ne {
                    constructor(t) {
                        this.server = t
                    }
                    get balance() {
                        var t, e;
                        return null !== (t = null === (e = this.server.response) || void 0 === e ? void 0 : e.balance) && void 0 !== t ? t : 0
                    }
                    get coins() {
                        var t, e;
                        return null !== (t = null === (e = this.server.response) || void 0 === e ? void 0 : e.win) && void 0 !== t ? t : 0
                    }
                    get totalCoins() {
                        var t, e;
                        return null !== (t = null === (e = this.server.response) || void 0 === e ? void 0 : e.totalWin) && void 0 !== t ? t : 0
                    }
                    get bonusCoins() {
                        var t, e, i;
                        return null !== (t = null === (e = this.server.response) || void 0 === e || null === (i = e.bonus) || void 0 === i ? void 0 : i.win) && void 0 !== t ? t : 0
                    }
                    get specialCoins() {
                        var t, e, i;
                        return null !== (t = null === (e = this.server.response) || void 0 === e || null === (i = e.special) || void 0 === i ? void 0 : i.win) && void 0 !== t ? t : 0
                    }
                    get scatterCoins() {
                        var t, e, i;
                        return null !== (t = null === (e = this.server.response) || void 0 === e || null === (i = e.scatters) || void 0 === i ? void 0 : i.win) && void 0 !== t ? t : 0
                    }
                    get freespinCoins() {
                        var t, e, i;
                        return null !== (t = null === (e = this.server.response) || void 0 === e || null === (i = e.freespins) || void 0 === i ? void 0 : i.win) && void 0 !== t ? t : 0
                    }
                    get dropCoins() {
                        var t, e;
                        return null !== (t = null === (e = this.server.response) || void 0 === e ? void 0 : e.dropWin) && void 0 !== t ? t : 0
                    }
                    get progressCoinsWin() {
                        var t, e;
                        return null !== (t = null === (e = this.server.response) || void 0 === e ? void 0 : e.coinsWin) && void 0 !== t ? t : 0
                    }
                }
                class ae extends(q(n.Text)) {
                    constructor() {
                        super("", {
                            fill: 16777215,
                            fontSize: 14,
                            fontFamily: "Avenir-Medium"
                        }), this.text = "".concat(this.game.config.get("gameName").toUpperCase(), " | MASCOT GAMING"), this.alpha = .5, this.anchor.set(1, .5)
                    }
                    resize() {
                        var {
                            device: t,
                            viewport: e
                        } = this.game;
                        t.desktop ? (this.anchor.set(1, .5), this.scale.set(.82), this.position.set(1760, 1062)) : t.landscape ? (this.anchor.set(1, .5), this.scale.set(1.6), this.position.set(1740, 1055)) : (this.anchor.set(.5, 1), this.scale.set(1.8), this.position.set(540, 2 * e.paddingY + e.height - 70))
                    }
                }
                class re extends(q(n.Text)) {
                    constructor() {
                        super("", {
                            fill: 16777215,
                            fontSize: 14,
                            fontFamily: "Avenir-Medium"
                        }), this.alpha = .5, this.anchor.set(1, .5), this.updateTime(), setInterval((() => this.updateTime()), 1e3)
                    }
                    formatVal(t) {
                        return "0".concat(Math.floor(t)).slice(-2)
                    }
                    updateTime() {
                        var t = new Date;
                        this.text = "".concat(this.formatVal(t.getHours()), ":").concat(this.formatVal(t.getMinutes()), ":").concat(this.formatVal(t.getSeconds()))
                    }
                    resize() {
                        var {
                            device: t,
                            viewport: e
                        } = this.game;
                        t.desktop ? (this.anchor.set(1, .5), this.scale.set(.82), this.position.set(1860, 1062)) : t.landscape ? (this.anchor.set(1, .5), this.scale.set(1.6), this.position.set(1855, 1055)) : (this.anchor.set(.5, 1), this.scale.set(1.8), this.position.set(540, 2 * e.paddingY + e.height - 32))
                    }
                }
                class he extends(q(n.Text)) {
                    constructor() {
                        super("", {
                            fill: 16777215,
                            fontSize: 14,
                            fontFamily: "Avenir-Medium"
                        }), (0, o.Z)(this, "startDate", new Date), this.alpha = .5, this.anchor.set(0, .5), this.updateTime(), setInterval((() => this.updateTime()), 1e3)
                    }
                    formatVal(t) {
                        return "0".concat(Math.floor(t)).slice(-2)
                    }
                    updateTime() {
                        var t = (new Date).getTime() - this.startDate.getTime(),
                            e = Math.floor(t / 1e3 / 60 / 60);
                        t -= 1e3 * e * 60 * 60;
                        var i = Math.floor(t / 1e3 / 60);
                        t -= 1e3 * i * 60;
                        var s = Math.floor(t / 1e3);
                        t -= 1e3 * s, this.text = this.game.i18n.t("TimeElapsedTitle", "".concat(this.formatVal(e), ":").concat(this.formatVal(i), ":").concat(this.formatVal(s))).toUpperCase()
                    }
                    resize() {
                        var {
                            device: t,
                            viewport: e
                        } = this.game;
                        t.desktop ? (this.anchor.set(0, .5), this.scale.set(.82), this.position.set(282, 1062)) : t.landscape ? (this.anchor.set(0, .5), this.scale.set(1.6), this.position.set(238, 1055)) : (this.anchor.set(0, 1), this.scale.set(1.8), this.position.set(40, 2 * e.paddingY + e.height - 32))
                    }
                }
                class le extends(q(n.Text)) {
                    constructor() {
                        super("", {
                            fill: 16777215,
                            fontSize: 14,
                            fontFamily: "Avenir-Medium"
                        }), this.alpha = .5, this.anchor.set(0, .5)
                    }
                    update(t) {
                        this.text = this.game.i18n.t("NetPositionTitle", this.game.helpers.toMoney(t)).toUpperCase()
                    }
                    resize() {
                        var {
                            device: t,
                            viewport: e
                        } = this.game;
                        t.desktop ? (this.anchor.set(0, .5), this.scale.set(.82), this.position.set(442, 1062)) : t.landscape ? (this.anchor.set(0, .5), this.scale.set(1.6), this.position.set(562, 1055)) : (this.anchor.set(1, 1), this.scale.set(1.8), this.position.set(1030, 2 * e.paddingY + e.height - 32))
                    }
                }
                class de extends class {
                    constructor() {
                        (0, o.Z)(this, "view", void 0)
                    }
                    toView(t) {
                        return this.view = t, t
                    }
                } {
                    constructor() {
                        super(...arguments), (0, o.Z)(this, "_netPositionValue", 0), (0, o.Z)(this, "_enabled", !1)
                    }
                    get enabled() {
                        return this._enabled
                    }
                    setEnabled(t) {
                        this._enabled = t
                    }
                    save(t) {
                        this.enabled && (this._netPositionValue = t)
                    }
                    apply() {
                        var t;
                        this.enabled && (null === (t = this.view) || void 0 === t || t.update(this._netPositionValue))
                    }
                    toView(t) {
                        var e = super.toView(t);
                        return this.apply(), e
                    }
                }
                class ce extends wt {
                    constructor() {
                        super("GameSettingsBackgroundSounds"), (0, o.Z)(this, "name", "BackgroundSoundsCheckbox")
                    }
                    resize() {
                        this.game.device.desktop ? this.scale.set(1) : (this.game.device.landscape, this.scale.set(1.8))
                    }
                }
                class ue extends wt {
                    constructor() {
                        super("GameSettingsFullscreen"), (0, o.Z)(this, "name", "FullscreenCheckbox")
                    }
                    resize() {
                        this.game.device.desktop ? (this.scale.set(1), this.visible = !0) : this.visible = !1
                    }
                }
                class pe extends wt {
                    constructor() {
                        super("GameSettingsGameSounds"), (0, o.Z)(this, "name", "GameSoundsCheckbox"), this.description.style.wordWrapWidth = 220
                    }
                    resize() {
                        this.description.style.wordWrap = this.game.device.landscape || this.game.device.desktop, this.game.device.desktop ? this.scale.set(1) : (this.game.device.landscape, this.scale.set(1.8))
                    }
                }
                class ge extends wt {
                    constructor() {
                        super("GameSettingsIntroScreen"), (0, o.Z)(this, "name", "IntroScreenCheckbox"), this.description.style.wordWrapWidth = 220
                    }
                    resize() {
                        this.description.style.wordWrap = this.game.device.landscape || this.game.device.desktop, this.game.device.desktop ? (this.scale.set(1), this.position.set(-300, 350)) : (this.game.device.landscape, this.scale.set(1.8), this.position.set(-400, 760))
                    }
                }
                class me extends wt {
                    constructor() {
                        super("GameSettingsLeftHand"), (0, o.Z)(this, "name", "LeftHandCheckbox"), this.description.style.wordWrapWidth = 300
                    }
                    resize() {
                        this.description.style.wordWrap = this.game.device.landscape || this.game.device.desktop, this.game.device.desktop ? this.visible = !1 : (this.game.device.landscape, this.scale.set(1.8), this.visible = !0)
                    }
                }
                class Ae extends wt {
                    constructor() {
                        super("GameSettingsQuickSpin"), (0, o.Z)(this, "name", "QuickSpinCheckbox")
                    }
                    resize() {
                        this.game.device.desktop ? this.scale.set(1) : (this.game.device.landscape, this.scale.set(1.8))
                    }
                }
                class ve extends wt {
                    constructor() {
                        super("GameSettingsRiskFeatureCheckbox"), (0, o.Z)(this, "name", "RiskFeatureCheckbox")
                    }
                    resize() {
                        this.game.device.desktop ? this.scale.set(1) : (this.game.device.landscape, this.scale.set(1.8))
                    }
                }
                i(7859);
                class be extends(q(n.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "logo", void 0), (0, o.Z)(this, "progress", void 0), (0, o.Z)(this, "_tweeenProgress", void 0), this.logo = n.Sprite.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAADzBAMAAADTF1+6AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURUdwTP///////////////////////////////////////////////////////81e3QIAAAAOdFJOUwBovPELGCk/kVKoz+B7jzeedwAADjRJREFUeNrsnItvHEcdx/ece9hOjBwopY2K5YY2rdpgJSFuQhpOW1y1aZugK0HpI411VRInhNS65tEQESy3KIS+TpcSCBSwDIVCqHrKu0XQU0ApLaCeTB6Il6x6z4nPd+f9G9jZ3XnuvPa6ASF5FKV2erOf3Znf/Ob3+85vz7D/O+1DYxY0C5oFzYJmQf/HoNr8a9MWsKAJ49q02CzoGoIST9+4J9Q14/vnf68J0LqSbVd+GYKTes25zDtmWFCs7P7zL7Q5iaLb4fdhQE/+7OTzXje7kdMF7fYvdOy5kz/N6oF2kSv6Lk1OMk10snI6oAcp19HI6IGeoHrVTDUoUaKd1KgeqEj3OqMGPcR4w6t6I8f0qptKEHNrdlUL1Mp661EVKMX2qGiB5rDdplSglsBOktUBDbK9LBWoPwAq6IBGAt0yClBXVKBOBSgfFWhYAeqJCtQdGmRdp94gPm6HBhWDXSqXVY77IifsGQ09Rw7poJzzLV58pZqjEV6nSqcM9AluIFdQgPq4veqSbekb3B4VUwFq5QeaVVPEWSPooPIMiTS/41lRpFDif75X6b27BMGzYJpUHxeDBGMn2C6Un5Zs5eOCvrfwVmqP4MNjGqC2Mr9vnRM9bBRw/qQVBd0jmN8zwaUq+OQJUy+u6xc8UsDEHxI8UEYzgGzRnCXRDFm6kWobEaCR16oxoHby6nfgH6e1Y2989fPJIs+Wgvb5erzM7hAaoM2EayRJU7RTIDmEO65ktUFo7CZoc69QFr6eNucY93YUactu0pGssbmDQgyw53J9b1TJhQD5yY7vSb/LnWZsMhVv70mWOCmVKhED6VvlGAysy7yxwyP3R4h+LZgkqlPLbT/McjzNKCd/IHzTV49mP1JWjl3NVY7NnYkw/X8iuOhb9FK1kCCcOCKTGmJnKBpBYyhg4D0BdCSgDnaSUIo3E7FEU2IcK3KoxyMGDTIraT3PsUUBamXCmy7NFDc0KJ6mrQEO5fLIZTS4+VzxlrBgi4oA1Ed9MMaE2BGCWinf0K6rQoQHJSndYY6urtKE1FkidYchvVXUFGictO8uTVtoBjRIbklFXVmlCdAccrRKukJREyBoaEvAL2l+SBkadN/hv3/n5b8ezfAc+BVivdKu+xG31zOmLij+zcXQlN++Phj1XCVsnYiKkjecglvum0e0QE99hgyp3z/CBglTzM/ezb1KZVWfzSpBiX+xeTyMnxLEU7RRjs8X1ynN97IClOJkIh94gx7ngCa9Xps4SeJtUlAbN4Vb6RkF8UncHbRHuZLBb/igaTHHtr9gEiZNgs65sblAmniLBqVx+JwU5dj2Uv4TuTFqrCzqtYhYFBC0AlzpovgscBGeIwL0c+nd2ZUxDFpiuPfTAOb4NcmhoxOTBK2uKta2kONoRYPsTsu7oHNadrxpokWK19Fw4CQjqJ+0I1APDJ/zsi4NPK1T0DNUqYyG1xwPNRfFNEU/fP6i9LzWon1dHD7QbmmvKezzR8F+BoJAkQiC74313jVaKOC1SSyOjIFkelqi6mBPOo/Zj05LRDQcA3ah9H7Q3ZwT7Fiv/u3vSOM4x+yweXdeY7a81xi5Fc9xx4B+oPqze91E8UKa0Hy76JhhKqD0rvrHFjB9T79IakLwAYBZnGdVnWNow0u9hGODHjIfGgJ3Sx0BNQ6hjebhHmRBSWxMraBnO8/DEyeLFt4lvNi0z6IEFsc0yHws8W9odK14RbVV6UltMGcRO/wuHVSk2tLrDANhqDUmHLrJN5s+7E7ip6kxqFxiw4tdngGspcKEjk5qGOps2BW/6A1yF5F0ZPBFnHYrT6kHC62LCoIT1DBwlP5Ej2tkZTrZKdL7QUBlcJ4CqWQoCCYUcp4oHkv3Egu6wGgTDW7kuaabyJbHgjolX+bfWcBD5Wc3a1UiiEkoP5ng2RQ/AI8TjrrGKImWOK3qYeVOrDhOqI+Bp5jBPq2MbHEk16E6TCBV5ON0wi1RdTYHZIU+DUUjT9/LenVJAfa5hYByO6oehgbDFZ9Pol2xHpAD6qZaQJqgu0gS356A1hlTD0MqTY836nJe/UBY3JqrFhrwNp+juzgj94BCgMTKzxAxlnu5vXBUVaNzU+CW88O8LgfsoIXlsbknVmelJgeP4caxt0zZVlai1ZHZPiENtXAtfGPgGK6Eu6zleVUi5gUj9wjtHnOuLzrL8anU2UmBkI/83eMtdoKIwBKY6a8Cgg1YYwclh5mOkSV7sdHVofu6TXw+7cxgW52yoGl/K2DO08l8DgxDywTeJycQ8wThidrInNFyvXiGPDRbDpmUgv8wGY2CpTdew3HhFfyjBXPxxA+ocO+8u3QL5B4xin9cCUvRUhfYE9kUGK9+bAvIZdjLXj76zLbD/ywHip46/BU6jtce3p7//OzRgX2Hn0uzwTTQ50109TFFPuGlAiO+c+hB2UxcUc457H06h0KMHI4kBJlLxlP03by1jCxIEefP+CbaiR7DxIYuPobdCTNx7Idb5b06/XEehkPcUN0bMDl3W2K0oLnSXtPQa49Cx2BRrkYw1htZiWaaU0xFDXcOxn/dcLSrzLEq2z6PvPg0LUD1y3rdirahc9A7Vin3FBy4jD9DxGh4wyhLSZfilYBAwDq+LM7+wZymygHlZJI6agzcXRbriUsoLejHoi4HicNLVgtKiJafm5fAzIsWneICdeJ1Q6AFuYlzssgfhUsSdSt+k5gjVre4pMYluTD4SrDHtw1Kr2PniF/rZB1RSZ1PMYLDqgITSDPm7bVXGYt9J6vWVJMLiE71Q6aWpmrc/yJ5c9frydGJn7zhaV63f8oMBrikSkz2uv+Gxe4d3v3m90MI7PEN2wa+wj/XmSTmq8r2GhjIfGQlfy4pb5aZUDzKI4MvkVEx3viiB42QFXp53QLJJkDUtUfousAoQSi7ocKtJdGD2qjsbR6nNiQiUAtl0a2coqaIQIPUM6D4Ihs5qEidWaMZG40alGSS8KLmQWxoUAuTuo9oTlJoUBctGSCzk+gmTYGQjDPD5pu90YLQyC1n168VLShvsz4n+C9RgNqCxVv9tpZzCAkaCZbFttq2jgcPB8IiyPKgk3XD8uZBD7xwx/McVbMzaPDEIz3mdDLDgdwTT6ia43ymztnascnvIM5SNUF+YuHJvwkciN7FLRzziwTXcK8kB+XJEtgDgvrRcTrfQgcpw/qgVjKffJxfUksV6NYyRKJU1Qd1EQnlJiJufVcgtLpnz3mubCwFYcu1r24ng+qcQDMFNjBg2zz3JwURWXOFTbG5/oL55IwuaJ5EMzD4Q8we2uqBhsQiiFCbpFpOD7RL0H1MXJTEZmE5HZDo9HtCptWzp/GmGiQ8Yu6U7fA84UgBEtXZr1Co9XRr4j2+YMGwSHWm2qgKlNK3BKk9NPEen9veEx91lEV1CXLQoKSMht/W8acpqwBxzaiWke3Wj8uMNNQ7YjVFyrBDJCQaoV6vs1cqywK3p7lFEyFBJ5SZNyPd64GKMg9pqI/z2IX0v3/XciQqUEEB6oto6Jp4jy+jA+rnVFMpShNZS63rcIJ6fvj3+PS+TyEm2r303+NbrgWKpwXxhf57fJ1aIHYgxjRAtN+v6XGYg433tKKge0g3dIsmiKqVutnUDIn337jnABvOqJofPDX27J+/J0zG5yVF9YKh3X5EpEphctjEhbT9ds4I0b5espddbiZZjptGyHZvJJpqc20WFB2ovvDatDtZ0LVus6BZ0CxoFhQedPfCxWRAffJOMn5rLKR+/cvCUzqgLThhmVoHr/Q3IP2i+KbmRB1J9N0plWMmWQtlfdL57JPeZ+sDG7b6fzYFQBn8VvUo9O2XqEDPf2Ec5u2XqXowvzDP+82SbBO2icPnbIwWAjdSErGfoZylhN5KgbywHIQq+qpQWhzz4w0/w3Cudd8WmBOiamAv6gY3Ed8KSyylIJy19fogJ2FJvGQvK/iBdd0NEm++16Oedi684NTq23MxOKqbSu7344C+lV87LWe0O3+/wQG1oAC9DY7cTi+l6vMTBBBULkOnLm6BSuNFPxBwNXkggOdRdjCHZ3UVdF7YMH3QpF8fWfBSmWmy8GyaLgjqhknIClzULQb59zINJa5uH3jc++8UWUV2nBYKcnBanSeNyUENVL18HL/10+6XMyX94SkSWVMbnX6uRfJCXA2KwSw86c/VPJsYsxr5TQ0mlbXOUO8G9EhBdViyWkOnu/CTE15JEKjOhKJPndbbprC0M4NSRiHIielH3BWRRKCPQVAaCrL+l63U6FzyCq42xP9HDBpzDXzYeNSfdRbkvoXhvYFXpVPdD1EZFFirI1KQZcR7wZNUTOMFAciuZmDWHgDFCbtQgqrAwCeMZM3vFgDZq2ABYJUeuklcxKzzRHbWcQHnjHZLCLLr13mPZNHqz1Vc+qw0BvAY3Y6BF4xByx/xTiO1D7S9GAS+RSrhLe95tLoyHjBACWjKiJ90ViUGBaq7XR9TchdbBy1GrEcuA4ooAlDVuVNnIo+C4nL/wlxQzfMPw9TbR3YGcXMqFwRArpjXQoCSA6Bt4YCu0N+TOAzdE1G4KgOdc7XEmr/8GGOo7CDmwELHs3/w970H4V45rgGacN2QxQdVje1lUEAZh+MK3h+uH0rBwxXwjWKLiMMNAWgGgCruVmT5xsqAHBtO7MtC1+vmvBu2wsI0IBk99mlQjrhZB+Q5bAEIvmGwmRHKxqlTH1woIAX1ggVv+UuBAS31whH4vij8Xra4t10uDbwqIABNuKAqqP8XgOz3gVNNoiu5EaORggWdH2TI3yRb+ef+M2MQtQhEQJhAyg5ZCsjQuNuFPGq4q/fGakTCf7OiA2WVPEz7aLdl1KJRi0YtGkEWAQAla4PxKoWGqwAAAABJRU5ErkJggg=="), this.logo.width = 207, this.logo.height = 243, this.progress = new n.Graphics, this.progress.beginFill(16717864), this.progress.drawRect(0, 263, 207, 4), this.progress.endFill(), this.progress.scale.x = 0, this.addChild(this.logo), this.addChild(this.progress), this._tweeenProgress = new a.kX(this.progress, .5, {
                            onComplete: () => {
                                this.progress.scale.x >= 1 && this.emit("load")
                            }
                        })
                    }
                    resize() {
                        var {
                            device: t,
                            viewport: e
                        } = this.game;
                        t.desktop || t.landscape ? (this.scale.set(t.desktop ? 1 : 1.5), this.position.set((e.width - this.width) / 2, (e.height - this.height) / 2)) : (this.scale.set(1.5), this.position.set((e.width - this.width) / 2, (2 * e.paddingY + e.height - this.height) / 2))
                    }
                    updateProgress(t) {
                        this._tweeenProgress.updateTo({
                            pixi: {
                                scaleX: t
                            }
                        }, !0)
                    }
                    reset() {
                        this._tweeenProgress.kill(), this.game.loader.reset()
                    }
                }
                const we = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACHUExURUdwTF3XDV3aCl7YDVzQF13ZDGDXC1X/AFXUAF7YDGDYDl7XDV3YDV7YDV3XDF3XDF7YDFzYDF3XDF3YDV3YDF7XDV3YDF7XDV3XDF7WDF3ZC13YDVjSC13YDV7YDF7XDV3XDV/fD13XDV3YDVzUDmDbCF3YDV3XDF3YDF7ZDF3XDF3YDV7YDQaFSaEAAAAsdFJOUwB1MfkLKS0DBvQ1qNKtaMrsY9znVda5w6F5RIYXXYyCzxDiviQdmPBPPo5wBc1wAAAAA81JREFUWMO9WemaqjAMrbIvIosLMOi466jv/3x3pm1AoKUty+0v/WhDSU5OTlOEhMMyV1m69eNQ08LY36bZyrTQ4DHPNvd3a9w32XyQ1efpzR2nZ0/b1m75FozlTt0ndhC/JUYc2Gq7jZKaR/dRbhQ6Qnph5NG+5vUkUti1eyjXaZuX0Z5gvDZaOeXgynphXzkxOPJmHYMqBHspfxg+zPcEW3E9mOkbYrsrB8xKTDbAtLMSTf2mM9e5nN/yNV3w3Y2GlIYsk0aRndEwph3osBcUna4KNl2K+AV3Mxa1uziqJdMR1vH2nMp4qysyKfvpF3ka9CGWgKz9YuKMPIv6UdaOrGagznD677fas9MCv+3zv0VuEE/6TWgQfvCGlAWShfsGFkm66UMM6yQJazlgYZ7UzGH10cQ5ePhEc4TflQ2tvLMmrvSE6Xf1MokRkOiNN/0MFws/2NCshBre8AKNMDBrJHYta+ZjGDZrXsbFa4PQaFte0mTu62FjG7a4gSSEUXGer273cmKxzqFi3rgWSelxxeu0BwvLMVZ+ePNXVbsFraJJ830lEl5/P7aqdo+gPpbNJ1tI4kUfT+ggg05XZl6ff9Mw7AFi/QyS8NIW1ZjwLQJpR03n2htqN2TwoYVLkUnS7qzGNSCs7kz9gb9mRyrKTclwCoKNnVQ3UuM85dg9QTrnHazsEXQ8lItmx6IHwe+aCworZwnZDOzuuGctXD4RRtuFHSLGx77ALl+AXDBeEAZHwQm90wx7BHY7olLgwCI8TefEtgnU1VtCZut4BtI4hu+MlH3AUWmPxIZDjitucESsnuVwPOmGPXXFiRO8kmaWIMNdsJt2EwANns+DW0mMZ1J0TTiPLgTEQuHGT5Br/GnJCOm/jUjX0ATpSOlLWPn0Ag2GrVA40pTuIiEXvn5vxE2P8wcloU7azLVGG8EvxGRCabOb6FeN9oSEXSB6QWkKat0amVoOpUlUTLOPnsdFWiSfJco/pCCzwDFGWf6FgiXtKnBt9FfSVSSxSE12JFVjJbHEovCPNjTJ/gURhV+SMrbYJrJV8VPGTia8ab2Z4Kgw2eFmsuMYHCAHd4XJyfnjAEm9PBtquHXkne6QPllbASTkCI2Q5/9q3SBznGaTya1Cu7HbY9M19KZrQZZNU08Rdbon0l7Q5l0rZYrpi9q8H43pmXxjegaNaVvGW2O30tF0zf/KZb+mBUVlXl1XSAVlqgsWNNmVEGpeYoXNS6yw7yXWH+hlr93UKXyii0IS9kmuNmkcs7PTNuqcMxcNHuT6eB3+vsAJ17LXx/8A6kQS8eozSXoAAAAASUVORK5CYII=",
                    fe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACcUExURUdwTP8gIP8hIf8gIP8hIf8hIf8fH/8jI/8gIP8AAP8hIf8iIv8hIf8XF/8qKv8fH/8iIv8hIf8gIP8hIf8hIf8hIf8gIP8fH/8hIf8gIP8hIf8gIP8iIv8hIf8gIP8gIP8hIf8gIP8hIf8fH/8hIf8gIP8gIP8hIf8fH/8iIv8hIf8jI/8eHv8fH/8iIv8gIP8hIf8fH/8fH/8hIT5bvnQAAAAzdFJOUwDS9GXk5ykk4gODLM4LBjF4qXXWrrn6GDbcwY5pxl+kVPnuCInrJ59BHkUzEXA8TplYEFU3kgwAAAO2SURBVFjDxZlpm6IwDIADDFgGYXAQFTzxvubk//+31baIHL1g2e0nH0lfQpomaQogHLaz8g+xFq2TZB1p8cFfOTa0Hm9+qKeVoYf+WyvqFKXMgaYN2fainwpGf6Fuk80sSiVGNNuoaWuYT7PX4dY4W2MXwB1bZ2Mbrp8emoaC1pPcCKPww6oKWB/hKDfIRBLrTR9z5saVJXU15g+xqSfDtbRMfiBQ5TLI1NYsMXeVue1gLxbeDzLHXolEX6lkcJSz2zGgE1753nCgS+Z7sgvt+dQeB453eEPqnRcV37xQjx8ylbEpd/Crtpl+qaWHLJ2XMtbircyS+3TWJLDMODqtyLNFs5C1ILNrvM7Sm+ub66xXdopH9tu2efDekj1Ydg0SHwZt0gLxjWkpnmEvD9w2YBdvwlEhwNg4TiZOu/zoJDiKPnuzgb/Cb5t5fYwxnj7CrLP7VUwqidjYA8zcoO/4TZ8FobOZaj0+tqel5rnwzycGvT9cDSs8LL58d8/wXHLv5a5eMT7gaGN6hV1TrBLGpHboCbhpOi6uX8HKOHmFpXmagEy5/Tpnpn/uscSxfiKLTB+/lB9P8N/7PKpprKn1ZBYXoJ9HuaiwklJkNpd4WIQrPyxzAgVyDzG5cHp4wsf9R8wzZJnM4wLE2SYeMizBJPO5xBY3H7PXVSfmkgVcYlrdJi6t2yBLFnHBxqnIgR+2ievIQi418oJ48TdIkiW48E08eclZu4KSd7IMl6zekgSKL5AiS3HhC1fWEPCcokSW4hK3COAed1OBaEaW4kLvLrUDvRpUuWQhl4RyHbC0OO1nZDEXXCwIiRoYSYPXiqZAsqZAqouHJBdPU3A3U4pM3S1W2CCWFJluEKUtLUWmW1ochNATTIZMg5AwbKICSoJMw6Yo0KMSSEjOAr0gNaEKRkTOUhM/maIaiICcJVNu+ke1CD75kf45BQtiAHjkvGBhl1iIOT0jn3glFrMoRJwPZpOfisJGZSwlRydOGUteolp4U/KcU3jTw5jqUYGSXc5RoeHhBpMRcA43TY9jlpbujrzjWHaALAYMW5ivbgYrTemXDpCdHXm7O6R31lborhECm7/Vuqk0qp2WzSay/rrz79pj3TX0umtB5k1TRa9zRU3TR5s3UNopjiZq8+aN6USlMZ3QxrT3P1rpt/HTrPn/I2+ydLQUdNQvy8d1hdSibNQvWGQvnDq6EoLuLrGgs2s3rHU3F4Vk2flXmxdoMSZ+XHcZG/sTaD3w9fE82N1eoO+CueT18R9RSEyQxPodRgAAAABJRU5ErkJggg==",
                    ye = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACcUExURUdwTAOr8AOr8AOr7wSr7wWr7wWt7QC//wCq4gSr8AOr7wSt8ASq7wSr8ASq7wCv7wSr8AKr8ASq7wOq7wSq8ACm8wan8gOq8AOr8AWq7wOr8AKr8QSr8ASr8ASr7wOs8Aaq8QSr8AOq7gSq8AOr8ACq7gOr8AOr8ASr7wWq7wSq8AOq7wSs7gOr7wSq7wen8AOr7wSr7wSs8gSr8NIVJa4AAAAzdFJOUwDS34T6MSwECfTYNXXu5hCuVrnLZxcpjs9jmVy9q6hEJ3pOeIkew5+kYGrFPoBwI5PqOwkKd94AAAPzSURBVFjDtVnblqowDC2IgAioeFe8DV5mdNSZ4///24GkCKhtgwx9cq2mMSQ7O2nKmHJZZi867DXdMwxP1/aHqGdarPJqbsLW7Wm1wk2zktaxfhMuffymbmvevylWf17eJ/ZRvxGWfrTLWTv1c6e9YDtdjYaxCns4Wk23gZfb9KclrG5P7ueM4DJ6FhhdAuMuMmlTvTDOnDjoiKQ6gywEY5I/Rloqv1SY0l6mZmsjtd5eCtvlWi28XqbA7qlEz1zSWdH8tnL4gbMcDQcesogcaivi/jhIjlhdjs52GWy2OeK7Qs3WAiUWnXLJ1FkoNH/ifqN8+jfw5Kd0d/AOsQwkNvVw7+s9yvrC0y9QN0L8Ht+l2CPi+SlTbMy37fvkvcUcfMxu5IdFlbKA2Bg/YBFQ7nSqKO5AEhqFHLCAJw1TzHgfP6Hje05w/hZrNsG6SR7NU/iKSHRi95Ojdk2MmwgEpjl7oF5ogsSxG0axHgVDUeoCAvwsfi7ICz5yrT1VOkek+Ru23fsfgcFdgRWvimoocgawmJ9++hyEm1Lk38LNV28wS30t4nWz4GUoXoGQ8xLEzHbc3zNeDKVg5rtrmYcTK5x9Dps/qFnk5X+wu85YTSN3MuiND9H+JGM5vRBJ5erKSRAQpkPnB4I7suKZXPHujoRL8mPPSlosdAXbJ9ubVJDuCQT9TdyhuBzolicD8fNC0PviWg+ubVkI6Ra5jdj5qvbEglJkogVkF3eQODwZcYeJxBxRPCPqvTryjM5g08Bmghi7D4/SebjYYpzk4Mk7j2czYEn294nMiTlUUNgBvziorABYOOw3Iw354q1w/6oMRCL2y1oyrso3wrzxU98KhgBgBuKEso8OXhIAb4MkM4iKoSVvURoPrtgjumKMsSYs7gpg46ta3JU0wC+DpxHhNlffYIpw2xMTZIUMQMlPdBo1pXezeFHwnjqtFAnRa1cDfRf+pWJOmyWJnsBVnOjLliYaKBJLSxZTWuzCN8q/at3LP7Vhsa5Dit6sYSG2WJeYuPtNoid0elO4wfuhqVScawpVbSyUfT536ar05ttYReOdrx8xG1Jukf3CZaypJBaCYrMwQJBebjh58xtZQDE4u4+5ai/jFdxoUzzsEi+Q+FXnOHzatwLqk4cLJB+QRPIaaSqTKHoa0Sgv6aT14pKejhXsKnpt51UY/mAQsnw1CKlvdMPMisOmgZBM6hqP1TfQq28EeR/G/vnQtLYxb32DaVZhlK6MTF3D/zhT0nGYsVQU5Wb2XEGir9wDy0n2wHIq+cDCansSYvU9YrHant3A6noeCjHstTxt8jiKHmPbrPKyzN7mcHJ+4z9oec7psCE9H/8H7cYwlvfLO08AAAAASUVORK5CYII=",
                    Se = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAwUAAAFkBAMAAACDfIqcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURQ0NDf///////xEREREREf///////6uZoDAAAAAHdFJOU8whHsC+BBX9xfwkAAACKUlEQVR42u3RQQ2DUBRFwWcBBwULGGiDgc+CPZDg3wJpAA03IXMknKllH5TsaDV3ytZqMyHcWr0J4T4MGOgymEal+t0G31IqBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAgAEDBgwYMGDAgAEDBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgwYMGDAgAEDBgwYMGAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzE4M0G06hUj4GiMWCgv8FmQri1ZhPCtVr2QcmOdgK51GPO7vMFjAAAAABJRU5ErkJggg==";

                function xe(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }
                class ke extends n.Text {
                    constructor(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        super(t.toUpperCase(), function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? xe(Object(i), !0).forEach((function(e) {
                                    (0, o.Z)(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : xe(Object(i)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                                }))
                            }
                            return t
                        }({
                            fill: 16777215,
                            fontSize: 42,
                            fontFamily: "PT Sans Narrow Bold"
                        }, e)), this.buttonMode = !0, this.interactive = !0
                    }
                    setText(t) {
                        this.text = t.toUpperCase()
                    }
                }
                class Ce extends(q(n.Sprite)) {
                    constructor(t) {
                        var e;
                        super(), this.texture = null !== (e = this.game.loader.getAsset(t)) && void 0 !== e ? e : n.Texture.EMPTY
                    }
                }

                function Be(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }
                class Pe extends n.Text {
                    constructor(t) {
                        super(t, function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? Be(Object(i), !0).forEach((function(e) {
                                    (0, o.Z)(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Be(Object(i)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                                }))
                            }
                            return t
                        }({
                            fill: 16777215,
                            fontSize: 42,
                            fontFamily: "PT Sans Regular",
                            align: "center"
                        }, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}))
                    }
                    setText(t) {
                        this.text = t
                    }
                }

                function Te(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }
                class Ee extends n.Text {
                    constructor(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        super(t.toUpperCase(), function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? Te(Object(i), !0).forEach((function(e) {
                                    (0, o.Z)(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Te(Object(i)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                                }))
                            }
                            return t
                        }({
                            fill: 10066329,
                            fontSize: 48,
                            fontFamily: "PT Sans Narrow Bold"
                        }, e))
                    }
                    setText(t) {
                        this.text = t.toUpperCase()
                    }
                }
                const Fe = class extends z {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "PopupFreeRound"), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "icon", void 0), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "message", void 0), (0, o.Z)(this, "actionContinue", void 0), (0, o.Z)(this, "resolver", null), this.overlay = new nt, this.content = new n.Container, this.icon = new Ce(we), this.icon.anchor.x = .5, this.title = new Ee(this.game.i18n.t("PopupFreeRoundStartTitle")), this.title.anchor.x = .5, this.message = new Pe("", {
                            wordWrap: !0,
                            wordWrapWidth: 600
                        }), this.message.anchor.x = .5, this.actionContinue = new ke(this.game.i18n.t("PopupActionContinue"), {
                            fill: 16777215
                        }), this.actionContinue.anchor.x = .5, this.game.interaction.out(this.actionContinue, (() => this.actionContinue.style.fill = 16777215)), this.game.interaction.hover(this.actionContinue, (() => this.actionContinue.style.fill = 10066329)), this.game.interaction.click(this.actionContinue, (() => this.hide())), this.content.addChild(this.icon), this.content.addChild(this.title), this.content.addChild(this.message), this.content.addChild(this.actionContinue), this.addChild(this.overlay), this.addChild(this.content)
                    }
                    resize() {
                        this.icon.position.set(0, 0), this.title.position.set(0, this.icon.y + this.icon.height + 10), this.message.position.set(0, this.title.y + this.title.height + 10), this.message.style.wordWrap = this.game.device.portrait, this.message.style.breakWords = "ja" === this.game.i18n.language, this.message.style.wordWrapWidth = this.game.device.width * this.game.renderer.dpr - 150, this.actionContinue.position.set(0, this.message.y + this.message.height + 20), this.game.device.desktop || this.game.device.landscape ? (this.content.scale.set(this.game.device.desktop ? 1 : 1.5), this.content.position.set(.5 * this.game.viewport.width | 0, .5 * (this.game.viewport.height - this.content.height) | 0)) : (this.content.scale.set(1.6), this.content.position.set(.5 * this.game.viewport.width | 0, .5 * (2 * this.game.viewport.paddingY + this.game.viewport.height - this.content.height) | 0))
                    }
                    show() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                        return this.game.keyboard.stop(), this.title.setText(t > -1 ? this.game.i18n.t("PopupFreeRoundStartTitle") : this.game.i18n.t("PopupFreeRoundEndTitle")), this.message.setText(t > -1 ? this.game.i18n.t(0 === t ? "PopupFreeRoundLastMessage" : "PopupFreeRoundStartMessage", t) : this.game.i18n.t("PopupFreeRoundEndMessage")), this.actionContinue.setText(this.game.i18n.t("PopupActionContinue")), this.resize(), new Promise((t => this.resolver = t))
                    }
                    hide() {
                        this.game.keyboard.restore(), this.resolver && (this.resolver(), this.resolver = null)
                    }
                };
                const Re = class extends z {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "PopupMaxLimit"), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "message", void 0), (0, o.Z)(this, "actionContinue", void 0), (0, o.Z)(this, "resolver", null), this.overlay = new nt(.7), this.content = new n.Container, this.background = new n.Sprite(this.game.loader.getAsset(Se)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new Ee(this.game.i18n.t("PopupMaxLimitTitle")), this.title.anchor.x = .5, this.message = new Pe(this.game.i18n.t("PopupMaxLimitMessage"), {
                            wordWrap: !0
                        }), this.message.anchor.x = .5, this.actionContinue = new ke(this.game.i18n.t("PopupActionReload"), {
                            fill: 10066329
                        }), this.actionContinue.anchor.x = .5, this.game.interaction.out(this.actionContinue, (() => this.actionContinue.style.fill = 10066329)), this.game.interaction.hover(this.actionContinue, (() => this.actionContinue.style.fill = 16777215)), this.game.interaction.click(this.actionContinue, (() => this.hide())), this.content.addChild(this.title), this.content.addChild(this.message), this.content.addChild(this.actionContinue), this.addChild(this.overlay), this.addChild(this.background), this.addChild(this.content)
                    }
                    resize() {
                        this.title.position.set(0, 0), this.message.position.set(0, this.title.y + this.title.height + 40), this.actionContinue.position.set(0, this.message.y + this.message.height + 40), this.overlay.resize(), this.game.device.desktop || this.game.device.landscape ? (this.content.scale.set(this.game.device.desktop ? 1 : 1.5), this.background.scale.set(this.game.device.desktop ? 1 : 1.5), this.message.style.wordWrapWidth = 660, this.background.position.set(.5 * this.game.viewport.width | 0, .5 * this.game.viewport.height | 0), this.content.position.set(.5 * this.game.viewport.width | 0, .5 * (this.game.viewport.height - this.content.height) | 0)) : (this.content.scale.set(1.65), this.background.scale.set(1.65), this.message.style.wordWrapWidth = this.game.device.width + 200, this.background.position.set(.5 * this.game.viewport.width | 0, .5 * (2 * this.game.viewport.paddingY + this.game.viewport.height) | 0), this.content.position.set(.5 * this.game.viewport.width | 0, .5 * (2 * this.game.viewport.paddingY + this.game.viewport.height - this.content.height) | 0))
                    }
                    show() {
                        return this.game.keyboard.stop(), this.title.setText(this.game.i18n.t("PopupMaxLimitTitle")), this.message.setText(this.game.i18n.t("PopupMaxLimitMessage")), this.actionContinue.setText(this.game.i18n.t("PopupActionReload")), this.resize(), new Promise((t => this.resolver = t))
                    }
                    hide() {
                        window.location.reload()
                    }
                };
                const Ze = class extends z {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "PopupNetworkError"), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "icon", void 0), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "message", void 0), (0, o.Z)(this, "actionReload", void 0), (0, o.Z)(this, "_resolver", null), this.overlay = this.addChild(new nt), this.content = this.addChild(new n.Container), this.icon = new Ce(fe), this.icon.anchor.x = .5, this.title = new Ee(this.game.i18n.t("PopupNetworkErrorTitle"), {
                            align: "center"
                        }), this.title.anchor.x = .5, this.message = new Pe(this.game.i18n.t("PopupNetworkErrorMessage"), {
                            fontSize: 36
                        }), this.message.anchor.x = .5, this.actionReload = new ke(this.game.i18n.t("PopupActionReload"), {
                            fill: 16777215
                        }), this.actionReload.anchor.x = .5, this.game.interaction.out(this.actionReload, (() => this.actionReload.style.fill = 16777215)), this.game.interaction.hover(this.actionReload, (() => this.actionReload.style.fill = 10066329)), this.game.interaction.click(this.actionReload, (() => this.hide())), this.content.addChild(this.icon), this.content.addChild(this.title), this.content.addChild(this.message), this.content.addChild(this.actionReload), this.addChild(this.overlay), this.addChild(this.content)
                    }
                    resize() {
                        this.icon.position.set(0, 0), this.title.position.set(0, this.icon.y + this.icon.height + 10), this.title.style.wordWrap = this.game.device.portrait, this.title.style.wordWrapWidth = this.game.device.width * this.game.renderer.dpr - 150, this.message.position.set(0, this.title.y + this.title.height + 10), this.actionReload.position.set(0, this.message.y + this.message.height + 20), this.game.device.desktop || this.game.device.landscape ? (this.content.scale.set(this.game.device.desktop ? 1 : 1.5), this.content.position.set(.5 * this.game.viewport.width | 0, .5 * (this.game.viewport.height - this.content.height) | 0)) : (this.content.scale.set(1.65), this.content.position.set(.5 * this.game.viewport.width | 0, .5 * (2 * this.game.viewport.paddingY + this.game.viewport.height - this.content.height) | 0))
                    }
                    show() {
                        return this.title.setText(this.game.i18n.t("PopupNetworkErrorTitle")), this.message.setText(this.game.i18n.t("PopupNetworkErrorMessage")), this.actionReload.setText(this.game.i18n.t("PopupActionReload")), this.resize(), new Promise((t => this._resolver = t))
                    }
                    hide() {
                        window.location.reload()
                    }
                };
                class Oe extends z {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "PopupQuickSpin"), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "message", void 0), (0, o.Z)(this, "actionEnable", void 0), (0, o.Z)(this, "actionClose", void 0), (0, o.Z)(this, "escKey", void 0), (0, o.Z)(this, "enterKey", void 0), (0, o.Z)(this, "resolver", null), this.overlay = new nt(.7), this.content = new n.Container, this.background = new n.Sprite(this.game.loader.getAsset(Se)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new Ee(this.game.i18n.t("PopupQuickSpinTitle")), this.title.anchor.x = .5, this.message = new Pe(this.game.i18n.t("PopupQuickSpinMessage"), {
                            fontSize: 35,
                            wordWrap: !0,
                            wordWrapWidth: 600
                        }), this.message.anchor.x = .5, this.actionEnable = new ke(this.game.i18n.t("PopupActionEnable"), {
                            fill: 10066329
                        }), this.actionEnable.anchor.x = .5, this.game.interaction.out(this.actionEnable, (() => this.actionEnable.style.fill = 10066329)), this.game.interaction.hover(this.actionEnable, (() => this.actionEnable.style.fill = 16777215)), this.game.interaction.click(this.actionEnable, (() => this.hide(!0))), this.actionClose = new ke(this.game.i18n.t("PopupActionClose"), {
                            fill: 10066329
                        }), this.actionClose.anchor.x = .5, this.game.interaction.out(this.actionClose, (() => this.actionClose.style.fill = 10066329)), this.game.interaction.hover(this.actionClose, (() => this.actionClose.style.fill = 16777215)), this.game.interaction.click(this.actionClose, (() => this.hide(!1))), this.escKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Escape), this.escKey.disable(), this.escKey.onPress.add((() => this.hide(!1))), this.enterKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Enter), this.enterKey.disable(), this.enterKey.onPress.add((() => this.hide(!0))), this.content.addChild(this.title), this.content.addChild(this.message), this.content.addChild(this.actionEnable), this.content.addChild(this.actionClose), this.addChild(this.overlay), this.addChild(this.background), this.addChild(this.content)
                    }
                    resize() {
                        this.title.position.set(0, 0), this.message.position.set(0, this.title.y + this.title.height + 30);
                        var t = Math.max(this.actionEnable.width, this.actionClose.width) > 160 ? 126 : 100;
                        this.actionEnable.position.set(t, this.message.y + this.message.height + 30), this.actionClose.position.set(-t, this.message.y + this.message.height + 30), this.game.device.desktop || this.game.device.landscape ? (this.content.scale.set(this.game.device.desktop ? 1 : 1.5), this.background.scale.set(this.game.device.desktop ? 1.1 : 1.5), this.background.position.set(.5 * this.game.viewport.width | 0, .5 * this.game.viewport.height | 0), this.content.position.set(.5 * this.game.viewport.width | 0, .5 * (this.game.viewport.height - this.content.height) | 0)) : (this.content.scale.set(1.65), this.background.scale.set(1.75), this.background.position.set(.5 * this.game.viewport.width | 0, .5 * (2 * this.game.viewport.paddingY + this.game.viewport.height) | 0), this.content.position.set(.5 * this.game.viewport.width | 0, .5 * (2 * this.game.viewport.paddingY + this.game.viewport.height - this.content.height) | 0))
                    }
                    show() {
                        return this.game.keyboard.stop([this.escKey, this.enterKey]), this.title.setText(this.game.i18n.t("PopupQuickSpinTitle")), this.message.setText(this.game.i18n.t("PopupQuickSpinMessage")), this.actionEnable.setText(this.game.i18n.t("PopupActionEnable")), this.actionClose.setText(this.game.i18n.t("PopupActionClose")), this.resize(), this.escKey.enable(), this.enterKey.enable(), new Promise((t => this.resolver = t))
                    }
                    hide(t) {
                        this.game.keyboard.restore(), this.resolver && (this.resolver(t), this.resolver = null), this.escKey.disable(), this.enterKey.disable()
                    }
                }
                const Me = class extends z {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "PopupRestore"), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "icon", void 0), (0, o.Z)(this, "message", void 0), (0, o.Z)(this, "actionContinue", void 0), (0, o.Z)(this, "resolver", null), this.overlay = this.addChild(new nt), this.content = this.addChild(new n.Container), this.icon = new Ce(we), this.icon.anchor.x = .5, this.message = new Pe(this.game.i18n.t("PopupRestoreMessage"), {
                            wordWrap: !0,
                            wordWrapWidth: 320
                        }), this.message.anchor.x = .5, this.actionContinue = new ke(this.game.i18n.t("PopupActionContinue"), {
                            fill: 16777215
                        }), this.actionContinue.anchor.x = .5, this.game.interaction.out(this.actionContinue, (() => this.actionContinue.style.fill = 16777215)), this.game.interaction.hover(this.actionContinue, (() => this.actionContinue.style.fill = 10066329)), this.game.interaction.click(this.actionContinue, (() => this.hide())), this.content.addChild(this.icon), this.content.addChild(this.message), this.content.addChild(this.actionContinue), this.addChild(this.overlay), this.addChild(this.content)
                    }
                    resize() {
                        this.icon.position.set(0, 0), this.message.position.set(0, this.icon.y + this.icon.height + 10), this.actionContinue.position.set(0, this.message.y + this.message.height + 15), this.game.device.desktop || this.game.device.landscape ? (this.content.scale.set(this.game.device.desktop ? 1 : 1.5), this.content.position.set(.5 * this.game.viewport.width | 0, .5 * (this.game.viewport.height - this.content.height) | 0)) : (this.content.scale.set(1.65), this.content.position.set(.5 * this.game.viewport.width | 0, .5 * (2 * this.game.viewport.paddingY + this.game.viewport.height - this.content.height) | 0))
                    }
                    show() {
                        return this.game.keyboard.stop(), this.message.setText(this.game.i18n.t("PopupRestoreMessage")), this.actionContinue.setText(this.game.i18n.t("PopupActionContinue")), this.resize(), new Promise((t => this.resolver = t))
                    }
                    hide() {
                        this.game.keyboard.restore(), this.resolver && (this.resolver(), this.resolver = null)
                    }
                };
                const Ie = class extends z {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "PopupRiskNBuy"), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "message", void 0), (0, o.Z)(this, "actionYes", void 0), (0, o.Z)(this, "actionNo", void 0), (0, o.Z)(this, "escKey", void 0), (0, o.Z)(this, "enterKey", void 0), (0, o.Z)(this, "resolver", null), this.overlay = new nt(.7), this.content = new n.Container, this.background = new n.Sprite(this.game.loader.getAsset(Se)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new Ee("RISK FEATURE"), this.title.anchor.x = .5, this.message = new Pe("", {
                            wordWrap: !0,
                            whiteSpace: "normal",
                            breakWords: !0
                        }), this.message.anchor.x = .5, this.actionYes = new ke(this.game.i18n.t("PopupActionYes"), {
                            fill: 16777215
                        }), this.actionYes.anchor.x = .5, this.game.interaction.out(this.actionYes, (() => this.actionYes.style.fill = 16777215)), this.game.interaction.hover(this.actionYes, (() => this.actionYes.style.fill = 10066329)), this.game.interaction.click(this.actionYes, (() => {
                            this.hide(!0)
                        })), this.actionNo = new ke(this.game.i18n.t("PopupActionNo"), {
                            fill: 16777215
                        }), this.actionNo.anchor.x = .5, this.game.interaction.out(this.actionNo, (() => this.actionNo.style.fill = 16777215)), this.game.interaction.hover(this.actionNo, (() => this.actionNo.style.fill = 10066329)), this.game.interaction.click(this.actionNo, (() => {
                            this.hide(!1)
                        })), this.escKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Escape), this.escKey.disable(), this.escKey.onPress.add((() => this.hide(!1))), this.enterKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Enter), this.enterKey.disable(), this.enterKey.onPress.add((() => this.hide(!0))), this.content.addChild(this.title), this.content.addChild(this.message), this.content.addChild(this.actionNo), this.content.addChild(this.actionYes), this.addChild(this.overlay), this.addChild(this.background), this.addChild(this.content)
                    }
                    resize() {
                        this.title.position.set(0, 0), this.message.position.set(0, this.title.y + this.title.height + 10), this.game.device.desktop || this.game.device.landscape ? (this.content.scale.set(this.game.device.desktop ? 1 : 1.5), this.background.scale.set(this.game.device.desktop ? 1 : 1.5), this.background.position.set(.5 * this.game.viewport.width | 0, .5 * this.game.viewport.height | 0), this.message.style.wordWrapWidth = this.background.width - (this.game.device.desktop ? 100 : 550), this.actionNo.position.set(70, this.message.y + this.message.height + 10), this.actionYes.position.set(-70, this.message.y + this.message.height + 10), this.content.position.set(.5 * this.game.viewport.width | 0, .5 * (this.game.viewport.height - this.content.height) | 0)) : (this.content.scale.set(1.65), this.background.scale.set(1.65), this.background.position.set(.5 * this.game.viewport.width | 0, .5 * (2 * this.game.viewport.paddingY + this.game.viewport.height) | 0), this.message.style.wordWrapWidth = this.background.width - 650, this.actionNo.position.set(70, this.message.y + this.message.height + 10), this.actionYes.position.set(-70, this.message.y + this.message.height + 10), this.content.position.set(.5 * this.game.viewport.width | 0, .5 * (2 * this.game.viewport.paddingY + this.game.viewport.height - this.content.height) | 0))
                    }
                    show(t, e, i, s) {
                        this.game.keyboard.stop([this.escKey, this.enterKey]);
                        var o = this.game.i18n.currency({
                            withSpace: !0
                        });
                        return this.title.setText(this.game.i18n.t(i ? "PopupRiskNBuyTitleRisk" : "PopupRiskNBuyTitleBuy")), this.message.setText(this.game.i18n.t(i ? "PopupRiskNBuyContentRisk" : "PopupRiskNBuyContentBuy", "".concat(this.game.helpers.toMoneySS(i ? t : s.bet)).concat(o), "".concat(this.game.helpers.toMoneySS(e)).concat(o))), this.actionYes.setText(this.game.i18n.t("PopupActionYes")), this.actionNo.setText(this.game.i18n.t("PopupActionNo")), this.resize(), this.escKey.enable(), this.enterKey.enable(), new Promise((t => this.resolver = t))
                    }
                    hide() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this.game.keyboard.restore(), this.resolver && (this.resolver(t), this.resolver = null), this.actionYes.style.fill = 16777215, this.actionNo.style.fill = 16777215, this.escKey.disable(), this.enterKey.disable()
                    }
                };
                const De = class extends z {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "PopupSound"), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "icon", void 0), (0, o.Z)(this, "message", void 0), (0, o.Z)(this, "actionContainer", void 0), (0, o.Z)(this, "actionYes", void 0), (0, o.Z)(this, "actionNo", void 0), (0, o.Z)(this, "resolver", null), this.overlay = new nt, this.content = new n.Container, this.icon = new Ce(ye), this.icon.anchor.x = .5, this.message = new Pe(this.game.i18n.t("PopupSoundMessage"), {
                            wordWrap: !0
                        }), this.message.anchor.x = .5, this.actionContainer = new n.Container, this.actionYes = new ke(this.game.i18n.t("PopupActionYes"), {
                            fill: 16777215
                        }), this.game.interaction.out(this.actionYes, (() => this.actionYes.style.fill = 16777215)), this.game.interaction.hover(this.actionYes, (() => this.actionYes.style.fill = 10066329)), this.game.interaction.click(this.actionYes, (() => this.hide(!0))), this.actionNo = new ke(this.game.i18n.t("PopupActionNo"), {
                            fill: 16777215
                        }), this.game.interaction.out(this.actionNo, (() => this.actionNo.style.fill = 16777215)), this.game.interaction.hover(this.actionNo, (() => this.actionNo.style.fill = 10066329)), this.game.interaction.click(this.actionNo, (() => this.hide(!1))), this.content.addChild(this.icon), this.content.addChild(this.message), this.content.addChild(this.actionContainer), this.actionContainer.addChild(this.actionNo), this.actionContainer.addChild(this.actionYes), this.addChild(this.overlay), this.addChild(this.content)
                    }
                    resize() {
                        this.icon.position.set(0, 0), this.message.position.set(0, this.icon.y + this.icon.height + 10), this.message.style.wordWrapWidth = this.game.device.width, this.actionYes.position.set(0, this.message.y + this.message.height + 15), this.actionNo.position.set(this.actionYes.x + this.actionYes.width + 35, this.message.y + this.message.height + 15), this.actionContainer.pivot.set(this.actionContainer.width / 2, 0), this.game.device.desktop || this.game.device.landscape ? (this.content.scale.set(this.game.device.desktop ? 1 : 2), this.content.position.set(.5 * this.game.viewport.width | 0, .5 * (this.game.viewport.height - this.content.height) | 0)) : (this.content.scale.set(2), this.content.position.set(.5 * this.game.viewport.width | 0, .5 * (2 * this.game.viewport.paddingY + this.game.viewport.height - this.content.height) | 0))
                    }
                    show() {
                        return this.message.setText(this.game.i18n.t("PopupSoundMessage")), this.actionYes.setText(this.game.i18n.t("PopupActionYes")), this.actionNo.setText(this.game.i18n.t("PopupActionNo")), this.resize(), new Promise((t => this.resolver = t))
                    }
                    hide() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this.resolver && (this.resolver(t), this.resolver = null)
                    }
                };
                const We = class extends z {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "PopupSpendingBudget"), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "message", void 0), (0, o.Z)(this, "actionContinue", void 0), (0, o.Z)(this, "resolver", null), this.overlay = new nt(.7), this.content = new n.Container, this.background = new n.Sprite(this.game.loader.getAsset(Se)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new Ee(this.game.i18n.t("PopupSpendingBudgetTitle")), this.title.anchor.x = .5, this.message = new Pe(this.game.i18n.t("PopupSpendingBudgetMessage"), {
                            wordWrap: !0
                        }), this.message.anchor.x = .5, this.actionContinue = new ke(this.game.i18n.t("PopupActionContinue"), {
                            fill: 10066329
                        }), this.actionContinue.anchor.x = .5, this.game.interaction.out(this.actionContinue, (() => this.actionContinue.style.fill = 10066329)), this.game.interaction.hover(this.actionContinue, (() => this.actionContinue.style.fill = 16777215)), this.game.interaction.click(this.actionContinue, (() => this.hide())), this.content.addChild(this.title), this.content.addChild(this.message), this.content.addChild(this.actionContinue), this.addChild(this.overlay), this.addChild(this.background), this.addChild(this.content)
                    }
                    resize() {
                        this.title.position.set(0, 0), this.message.position.set(0, this.title.y + this.title.height + 10), this.message.style.wordWrapWidth = this.game.device.width + 200, this.actionContinue.position.set(0, this.message.y + this.message.height + 10), this.overlay.resize(), this.game.device.desktop || this.game.device.landscape ? (this.content.scale.set(this.game.device.desktop ? 1 : 1.5), this.background.scale.set(this.game.device.desktop ? 1 : 1.5), this.background.position.set(.5 * this.game.viewport.width | 0, .5 * this.game.viewport.height | 0), this.content.position.set(.5 * this.game.viewport.width | 0, .5 * (this.game.viewport.height - this.content.height) | 0)) : (this.content.scale.set(1.65), this.background.scale.set(1.65), this.background.position.set(.5 * this.game.viewport.width | 0, .5 * (2 * this.game.viewport.paddingY + this.game.viewport.height) | 0), this.content.position.set(.5 * this.game.viewport.width | 0, .5 * (2 * this.game.viewport.paddingY + this.game.viewport.height - this.content.height) | 0))
                    }
                    show() {
                        return this.game.keyboard.stop(), this.title.setText(this.game.i18n.t("PopupSpendingBudgetTitle")), this.message.setText(this.game.i18n.t("PopupSpendingBudgetMessage")), this.actionContinue.setText(this.game.i18n.t("PopupActionContinue")), this.resize(), new Promise((t => this.resolver = t))
                    }
                    hide() {
                        this.game.keyboard.restore(), this.resolver && (this.resolver(), this.resolver = null)
                    }
                };
                const Le = class extends z {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "PopupUnexpectedError"), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "message", void 0), (0, o.Z)(this, "actionContinue", void 0), (0, o.Z)(this, "_resolver", null), this.overlay = new nt(.7), this.content = new n.Container, this.background = new n.Sprite(this.game.loader.getAsset(Se)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new Ee(this.game.i18n.t("PopupUnexpectedErrorTitle")), this.title.anchor.x = .5, this.message = new Pe(this.game.i18n.t("PopupUnexpectedErrorMessage")), this.message.anchor.x = .5, this.actionContinue = new ke(this.game.i18n.t("PopupActionReload"), {
                            fill: 10066329
                        }), this.actionContinue.anchor.x = .5, this.game.interaction.out(this.actionContinue, (() => this.actionContinue.style.fill = 10066329)), this.game.interaction.hover(this.actionContinue, (() => this.actionContinue.style.fill = 16777215)), this.game.interaction.click(this.actionContinue, (() => this.hide())), this.content.addChild(this.title), this.content.addChild(this.message), this.content.addChild(this.actionContinue), this.addChild(this.overlay), this.addChild(this.background), this.addChild(this.content)
                    }
                    resize() {
                        this.title.position.set(0, 0), this.message.position.set(0, this.title.y + this.title.height + 10), this.actionContinue.position.set(0, this.message.y + this.message.height + 10), this.game.device.desktop || this.game.device.landscape ? (this.content.scale.set(this.game.device.desktop ? 1 : 1.5), this.background.scale.set(this.game.device.desktop ? 1 : 1.5), this.background.position.set(.5 * this.game.viewport.width | 0, .5 * this.game.viewport.height | 0), this.content.position.set(.5 * this.game.viewport.width | 0, .5 * (this.game.viewport.height - this.content.height) | 0)) : (this.content.scale.set(1.65), this.background.scale.set(1.65), this.background.position.set(.5 * this.game.viewport.width | 0, .5 * (2 * this.game.viewport.paddingY + this.game.viewport.height) | 0), this.content.position.set(.5 * this.game.viewport.width | 0, .5 * (2 * this.game.viewport.paddingY + this.game.viewport.height - this.content.height) | 0))
                    }
                    show() {
                        return this.title.setText(this.game.i18n.t("PopupUnexpectedErrorTitle")), this.message.setText(this.game.i18n.t("PopupUnexpectedErrorMessage")), this.actionContinue.setText(this.game.i18n.t("PopupActionReload")), this.resize(), new Promise((t => this._resolver = t))
                    }
                    hide() {
                        window.location.reload()
                    }
                };
                class _e extends z {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "PopupWilds"), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "message", void 0), (0, o.Z)(this, "actionEnable", void 0), (0, o.Z)(this, "actionClose", void 0), (0, o.Z)(this, "escKey", void 0), (0, o.Z)(this, "spaceKey", void 0), (0, o.Z)(this, "resolver", null), this.overlay = new nt(.7), this.content = new n.Container, this.background = new n.Sprite(this.game.loader.getAsset(Se)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new Ee(this.game.i18n.t("PopupWildsTitle"), {
                            fontSize: 40,
                            wordWrap: !0,
                            wordWrapWidth: 600,
                            breakWords: "ja" === this.game.i18n.language || "cn" === this.game.i18n.language,
                            align: "center"
                        }), this.title.anchor.x = .5, this.message = new Pe(this.game.i18n.t("PopupWildsMessage"), {
                            fontSize: 35,
                            wordWrap: !0,
                            wordWrapWidth: 600
                        }), this.message.anchor.x = .5, this.actionEnable = new ke(this.game.i18n.t("PopupActionYes"), {
                            fill: 10066329
                        }), this.actionEnable.anchor.x = .5, this.game.interaction.out(this.actionEnable, (() => this.actionEnable.style.fill = 10066329)), this.game.interaction.hover(this.actionEnable, (() => this.actionEnable.style.fill = 16777215)), this.game.interaction.click(this.actionEnable, (() => this.hide(!0))), this.actionClose = new ke(this.game.i18n.t("PopupActionNo"), {
                            fill: 10066329
                        }), this.actionClose.anchor.x = .5, this.game.interaction.out(this.actionClose, (() => this.actionClose.style.fill = 10066329)), this.game.interaction.hover(this.actionClose, (() => this.actionClose.style.fill = 16777215)), this.game.interaction.click(this.actionClose, (() => this.hide(!1))), this.escKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Escape), this.escKey.disable(), this.escKey.onPress.add((() => this.hide(!1))), this.spaceKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Enter), this.spaceKey.disable(), this.spaceKey.onPress.add((() => this.hide(!0))), this.content.addChild(this.title), this.content.addChild(this.message), this.content.addChild(this.actionEnable), this.content.addChild(this.actionClose), this.addChild(this.overlay), this.addChild(this.background), this.addChild(this.content)
                    }
                    resize() {
                        this.title.position.set(0, 0), this.message.position.set(0, this.title.y + this.title.height + 30);
                        var t = Math.max(this.actionEnable.width, this.actionClose.width) > 160 ? 126 : 100;
                        this.actionEnable.position.set(t, this.message.y + this.message.height + 30), this.actionClose.position.set(-t, this.message.y + this.message.height + 30), this.game.device.desktop || this.game.device.landscape ? (this.content.scale.set(this.game.device.desktop ? 1 : 1.5), this.background.scale.set(this.game.device.desktop ? 1.1 : 1.5), this.background.position.set(.5 * this.game.viewport.width | 0, .5 * this.game.viewport.height | 0), this.content.position.set(.5 * this.game.viewport.width | 0, .5 * (this.game.viewport.height - this.content.height) | 0)) : (this.content.scale.set(1.65), this.background.scale.set(1.75), this.background.position.set(.5 * this.game.viewport.width | 0, .5 * (2 * this.game.viewport.paddingY + this.game.viewport.height) | 0), this.content.position.set(.5 * this.game.viewport.width | 0, .5 * (2 * this.game.viewport.paddingY + this.game.viewport.height - this.content.height) | 0))
                    }
                    show() {
                        return this.game.keyboard.stop([this.escKey, this.spaceKey]), this.title.setText(this.game.i18n.t("PopupWildsTitle")), this.message.setText(this.game.i18n.t("PopupWildsMessage")), this.actionEnable.setText(this.game.i18n.t("PopupActionYes")), this.actionClose.setText(this.game.i18n.t("PopupActionNo")), this.resize(), this.escKey.enable(), this.spaceKey.enable(), new Promise((t => this.resolver = t))
                    }
                    hide(t) {
                        this.game.keyboard.restore(), this.resolver && (this.resolver(t), this.resolver = null), this.escKey.disable(), this.spaceKey.disable()
                    }
                }
                const Ne = class extends z {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "PopupZeroBalance"), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "message", void 0), (0, o.Z)(this, "actionContinue", void 0), (0, o.Z)(this, "resolver", null), this.overlay = new nt(.7), this.content = new n.Container, this.background = new n.Sprite(this.game.loader.getAsset(Se)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new Ee(this.game.i18n.t("PopupZeroBalanceTitle")), this.title.anchor.x = .5, this.message = new Pe(this.game.i18n.t("PopupZeroBalanceMessage"), {
                            wordWrap: !0
                        }), this.message.anchor.x = .5, this.actionContinue = new ke(this.game.i18n.t("PopupActionContinue"), {
                            fill: 10066329
                        }), this.actionContinue.anchor.x = .5, this.game.interaction.out(this.actionContinue, (() => this.actionContinue.style.fill = 10066329)), this.game.interaction.hover(this.actionContinue, (() => this.actionContinue.style.fill = 16777215)), this.game.interaction.click(this.actionContinue, (() => this.hide())), this.content.addChild(this.title), this.content.addChild(this.message), this.content.addChild(this.actionContinue), this.addChild(this.overlay), this.addChild(this.background), this.addChild(this.content)
                    }
                    resize() {
                        this.title.position.set(0, 0), this.message.position.set(0, this.title.y + this.title.height + 10), this.message.style.wordWrapWidth = this.game.device.desktop || this.game.device.landscape ? 700 : 600, this.actionContinue.position.set(0, this.message.y + this.message.height + 10), this.overlay.resize(), this.game.device.desktop || this.game.device.landscape ? (this.content.scale.set(this.game.device.desktop ? 1 : 1.5), this.background.scale.set(this.game.device.desktop ? 1 : 1.5), this.background.position.set(.5 * this.game.viewport.width | 0, .5 * this.game.viewport.height | 0), this.content.position.set(.5 * this.game.viewport.width | 0, .5 * (this.game.viewport.height - this.content.height) | 0)) : (this.content.scale.set(1.65), this.background.scale.set(1.65), this.background.position.set(.5 * this.game.viewport.width | 0, .5 * (2 * this.game.viewport.paddingY + this.game.viewport.height) | 0), this.content.position.set(.5 * this.game.viewport.width | 0, .5 * (2 * this.game.viewport.paddingY + this.game.viewport.height - this.content.height) | 0))
                    }
                    show() {
                        var {
                            action: t
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            action: "continue"
                        };
                        return this.game.keyboard.stop(), this.title.setText(this.game.i18n.t("PopupZeroBalanceTitle")), this.message.setText(this.game.i18n.t("PopupZeroBalanceMessage")), "reload" === t ? (this.actionContinue.setText(this.game.i18n.t("PopupActionReload")), this.game.interaction.clickOnce(this.actionContinue, (() => window.location.reload()))) : (this.actionContinue.setText(this.game.i18n.t("PopupActionContinue")), this.game.interaction.clickOnce(this.actionContinue, (() => this.hide()))), this.resize(), new Promise((t => this.resolver = t))
                    }
                    hide() {
                        this.game.keyboard.restore(), this.actionContinue.style.fill = 10066329, this.resolver && (this.resolver(), this.resolver = null)
                    }
                };

                function Ue(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function je(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Ue(Object(i), !0).forEach((function(e) {
                            (0, o.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Ue(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                const ze = [{
                    url: "assets/ui_2020/chip.png",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/ui_2020/paytable_betlines_normal.png",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/ui_2020/paytable_betlines_win.png",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/autoplay-infinity-count.png",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    name: "Avenir-Medium",
                    url: "assets/fonts/AvenirNextCyr-Medium.woff",
                    metadata: {}
                }, {
                    name: "Avenir-Regular",
                    url: "assets/fonts/AvenirNextCyr-Regular.woff",
                    metadata: {}
                }, {
                    name: "Avenir-Bold",
                    url: "assets/fonts/AvenirNextCyr-Bold.woff",
                    metadata: {}
                }, {
                    name: "Avenir-Heavy",
                    url: "assets/fonts/AvenirNextCyr-Heavy.woff",
                    metadata: {}
                }, {
                    name: "PT Sans Narrow Bold",
                    url: "assets/fonts/PT_Sans-Narrow-Web-Bold.ttf",
                    metadata: {}
                }, {
                    name: "PT Sans Regular",
                    url: "assets/fonts/PT_Sans-Web-Regular.ttf",
                    metadata: {}
                }, {
                    name: "iconBetLevel",
                    url: "assets/ui_2020/bet.png",
                    metadata: {}
                }, {
                    name: "iconPaytable",
                    url: "assets/ui_2020/paytable.png",
                    metadata: {}
                }, {
                    name: "iconSettings",
                    url: "assets/ui_2020/settings.png",
                    metadata: {}
                }, {
                    name: "iconRules",
                    url: "assets/ui_2020/rules.png",
                    metadata: {}
                }, {
                    name: "iconAuto",
                    url: "assets/ui_2020/auto.png",
                    metadata: {}
                }, {
                    name: "iconMenu",
                    url: "assets/ui_2020/menu.png",
                    metadata: {}
                }, {
                    name: "iconQuickSpin",
                    url: "assets/ui_2020/quick.png",
                    metadata: {}
                }, {
                    name: "iconBorderH",
                    url: "assets/ui_2020/menu-item-border-hor.png",
                    metadata: {}
                }, {
                    name: "iconBorderV",
                    url: "assets/ui_2020/menu-item-border-vert.jpg",
                    metadata: {}
                }, {
                    name: "gameRulesButtonSpin",
                    url: "assets/ui_2020/gameRules-buttonSpin.png",
                    metadata: {}
                }, {
                    name: "gameRulesButtonBetLevel",
                    url: "assets/ui_2020/gameRules-buttonBetLevel.png",
                    metadata: {}
                }, {
                    name: "gameRulesButtonPlayLevel",
                    url: "assets/ui_2020/gameRules-buttonPlayLevel.png",
                    metadata: {}
                }, {
                    name: "gameRulesButtonSound",
                    url: "assets/ui_2020/gameRules-ButtonSound.png",
                    metadata: {}
                }, {
                    name: "gameRulesItemBalance",
                    url: "assets/ui_2020/gameRules-itemBalance.png",
                    metadata: {}
                }, {
                    name: "gameRulesItemWin",
                    url: "assets/ui_2020/gameRules-itemWin.png",
                    metadata: {}
                }];
                var Ve = {
                        background_normal: .2,
                        background_free: .2,
                        big_win: 1,
                        giant_win: 1,
                        win_normal_1: .5,
                        win_normal_2: .5,
                        win_normal_3: .5,
                        win_free_1: .5,
                        win_free_2: .5,
                        win_free_3: .5,
                        spin_start: 1,
                        spin_fast: .2,
                        click_normal: .1,
                        wheel_stop: .2,
                        scatter_win: 1,
                        scatter_reel: 1
                    },
                    Ge = {
                        get: t => Ve[t],
                        set(t, e) {}
                    };
                const He = [{
                    url: "assets/audio/backgroundCommon.mp3",
                    name: "backgroundNormal",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "background",
                            volume: Ge.get("background_normal"),
                            loop: !0
                        }
                    }
                }, {
                    url: "assets/audio/backgroundFree.mp3",
                    name: "backgroundFree",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "background",
                            volume: Ge.get("background_free"),
                            loop: !0
                        }
                    }
                }, {
                    url: "assets/audio/freeEnd.mp3",
                    name: "freeEnd",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "background",
                            volume: .2,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/freeStart.mp3",
                    name: "freeStart",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "background",
                            volume: .2,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/clickNormal.mp3",
                    name: "clickNormal",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: Ge.get("click_normal"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/spinFast.mp3",
                    name: "spinFast",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: Ge.get("spin_fast"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/spinStart.mp3",
                    name: "spinStart",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: Ge.get("spin_start"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/wheelStop.mp3",
                    name: "wheelStop",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: Ge.get("wheel_stop"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/giantWin.mp3",
                    name: "giantWin",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "background",
                            volume: Ge.get("giant_win"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/bigWin.mp3",
                    name: "bigWin",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "background",
                            volume: Ge.get("big_win"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/win_normal_1.mp3",
                    name: "win_normal_1",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: Ge.get("win_normal_1"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/win_normal_2.mp3",
                    name: "win_normal_2",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: Ge.get("win_normal_2"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/win_normal_3.mp3",
                    name: "win_normal_3",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: Ge.get("win_normal_3"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/win_light_1.mp3",
                    name: "win_light_1",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: Ge.get("win_free_1"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/win_light_2.mp3",
                    name: "win_light_2",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: Ge.get("win_free_2"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/win_light_3.mp3",
                    name: "win_light_3",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: Ge.get("win_free_3"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/win_free_1.mp3",
                    name: "win_free_1",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: Ge.get("win_free_1"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/win_free_2.mp3",
                    name: "win_free_2",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: Ge.get("win_free_2"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/win_free_3.mp3",
                    name: "win_free_3",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: Ge.get("win_free_3"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/scatterWin.mp3",
                    name: "scatterWin",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: Ge.get("scatter_win"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/scatterReel.mp3",
                    name: "scatterReel",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: Ge.get("scatter_reel"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/symbolDrop.mp3",
                    name: "symbolDrop",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: .07,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/extraFree.mp3",
                    name: "extraFree",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: .6,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/multiplierChange.mp3",
                    name: "multiplierChange",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: .4,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/coinz.mp3",
                    name: "coinz",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: 1,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/crack.mp3",
                    name: "crack",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: 1,
                            loop: !1
                        }
                    }
                }];
                var Qe = [...ze, {
                    url: "assets/images/introScreen/texture.json",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/background/bgln.jpg",
                    name: "bgln",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/background/bglf.jpg",
                    name: "bglf",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/background/bgpn.jpg",
                    name: "bgpn",
                    metadata: {
                        platform: ["desktop", "phone", "tablet"]
                    }
                }, {
                    url: "assets/images/background/bgpf.jpg",
                    name: "bgpf",
                    metadata: {
                        platform: ["desktop", "phone", "tablet"]
                    }
                }, {
                    url: "assets/images/background/logo.png",
                    name: "logo",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/bgln/skeleton.json",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/bglf/skeleton.json",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }];
                const Ye = [...He, {
                        url: "assets/images/common/box.png",
                        metadata: {
                            platform: ["desktop", "phone", "tablet"]
                        }
                    }, {
                        url: "assets/images/background/frameGame.png",
                        metadata: {
                            platform: ["desktop", "phone", "tablet"]
                        }
                    }, {
                        url: "assets/images/labels/textFreeSpinLeft.png",
                        name: "textFreeSpinLeft",
                        metadata: {
                            platform: ["phone", "tablet", "desktop"]
                        }
                    }, {
                        url: "assets/images/labels/textLastFreeSpin.png",
                        name: "textLastFreeSpin",
                        metadata: {
                            platform: ["phone", "tablet", "desktop"]
                        }
                    }, {
                        url: "assets/images/labels/textExtraFree.png",
                        name: "textExtraFree",
                        metadata: {
                            platform: ["phone", "tablet", "desktop"]
                        }
                    }, {
                        url: "assets/images/labels/textBigWin.png",
                        name: "textBigWin",
                        metadata: {
                            platform: ["phone", "tablet", "desktop"]
                        }
                    }, {
                        url: "assets/images/labels/textGiantWin.png",
                        name: "textGiantWin",
                        metadata: {
                            platform: ["phone", "tablet", "desktop"]
                        }
                    }, {
                        url: "assets/images/labels/rockways.png",
                        metadata: {
                            platform: ["phone", "tablet", "desktop"]
                        }
                    }, {
                        url: "assets/images/common/wildText.png",
                        metadata: {
                            platform: ["phone", "tablet", "desktop"]
                        }
                    }, {
                        url: "assets/bitmapFont/winFont.xml",
                        name: "WinFont",
                        metadata: {
                            platform: ["phone", "tablet", "desktop"]
                        }
                    }, {
                        url: "assets/bitmapFont/rockwaysFont.xml",
                        name: "RockwaysFont",
                        metadata: {
                            platform: ["phone", "tablet", "desktop"]
                        }
                    }, {
                        url: "assets/images/effects/bigGiantWin/skeleton.json",
                        metadata: {
                            platform: ["phone", "tablet", "desktop"]
                        }
                    }, {
                        url: "assets/images/effects/spin/skeleton.json",
                        name: "effectSpinStatic",
                        metadata: {
                            platform: ["desktop"]
                        }
                    }, {
                        url: "assets/images/effects/symbols/sym/skeleton.json",
                        name: "symbolAnimation",
                        metadata: {
                            platform: ["phone", "tablet", "desktop"]
                        }
                    }, {
                        url: "assets/images/effects/multi/skeleton.json",
                        metadata: {
                            platform: ["phone", "tablet", "desktop"]
                        }
                    }, {
                        url: "assets/images/effects/riskBtn/skeleton.json",
                        metadata: {
                            platform: ["phone", "tablet", "desktop"]
                        }
                    }, {
                        url: "assets/images/effects/buyBtn/skeleton.json",
                        metadata: {
                            platform: ["phone", "tablet", "desktop"]
                        }
                    }, {
                        url: "assets/images/effects/riskBuyBg/skeleton.json",
                        metadata: {
                            platform: ["phone", "tablet", "desktop"]
                        }
                    }, {
                        url: "assets/images/effects/coinsCollect/skeleton.json",
                        metadata: {
                            platform: ["phone", "tablet", "desktop"]
                        }
                    }, {
                        url: "assets/images/symbols/static/texture.json",
                        name: "symbols_static",
                        metadata: {
                            platform: ["phone", "tablet", "desktop"]
                        }
                    }, {
                        url: "assets/images/risk/texture.json",
                        name: "risk",
                        metadata: {
                            platform: ["phone", "tablet", "desktop"]
                        }
                    }, {
                        url: "assets/images/paytable/paytable.json",
                        name: "paytable",
                        metadata: {
                            platform: ["phone", "tablet", "desktop"]
                        }
                    }, {
                        url: "assets/images/multiplier/texture.json",
                        metadata: {
                            platform: ["phone", "tablet", "desktop"]
                        }
                    }],
                    Xe = {
                        name: "greedy_greenskins_rockways",
                        application: {
                            view: "game",
                            width: 1920,
                            height: 1080
                        },
                        colors: {
                            primary: 16771346,
                            primaryHover: 16774819,
                            secondary: 4731433,
                            secondaryHover: 7822416
                        },
                        wheel: {
                            deltaStop: 80,
                            durationSpin: .08,
                            durationDelta: .12,
                            durationQuickDelta: .16,
                            durationStop: 120,
                            durationQuickStop: 40
                        },
                        symbol: {
                            x: 140,
                            y: 136,
                            width: 140,
                            height: 136
                        },
                        slot: {
                            size: [6, 6],
                            symbolsPositions: [
                                [
                                    [0, 0],
                                    [0, 136],
                                    [0, 272],
                                    [0, 408],
                                    [0, 544],
                                    [0, 680]
                                ],
                                [
                                    [140, 0],
                                    [140, 136],
                                    [140, 272],
                                    [140, 408],
                                    [140, 544],
                                    [140, 680]
                                ],
                                [
                                    [280, 0],
                                    [280, 136],
                                    [280, 272],
                                    [280, 408],
                                    [280, 544],
                                    [280, 680]
                                ],
                                [
                                    [420, 0],
                                    [420, 136],
                                    [420, 272],
                                    [420, 408],
                                    [420, 544],
                                    [420, 680]
                                ],
                                [
                                    [560, 0],
                                    [560, 136],
                                    [560, 272],
                                    [560, 408],
                                    [560, 544],
                                    [560, 680]
                                ],
                                [
                                    [700, 0],
                                    [700, 136],
                                    [700, 272],
                                    [700, 408],
                                    [700, 544],
                                    [700, 680]
                                ]
                            ],
                            layout: {
                                default: [{
                                    textureAtlas: "symbols_static",
                                    assetName: "scat",
                                    animation: {
                                        skin: "scat",
                                        assetName: "symbolAnimation",
                                        effectName: {
                                            normal: "win",
                                            drop: "wheelStop",
                                            idle: "idle",
                                            free: "winFreeSpins",
                                            extraFree: "winExtraFree",
                                            light: "light"
                                        }
                                    }
                                }, {
                                    textureAtlas: "symbols_static",
                                    assetName: "wild",
                                    animation: {
                                        skin: "wild",
                                        assetName: "symbolAnimation",
                                        effectName: {
                                            normal: "win",
                                            drop: "wheelStop",
                                            idle: "idle",
                                            free: "winFreeSpins",
                                            light: "light"
                                        }
                                    }
                                }, {
                                    textureAtlas: "symbols_static",
                                    assetName: "gobBlow",
                                    animation: {
                                        skin: "gobBlow",
                                        assetName: "symbolAnimation",
                                        effectName: {
                                            normal: "win",
                                            drop: "wheelStop",
                                            idle: "idle",
                                            free: "winFreeSpins",
                                            light: "light"
                                        }
                                    }
                                }, {
                                    textureAtlas: "symbols_static",
                                    assetName: "gobCape",
                                    animation: {
                                        skin: "gobCape",
                                        assetName: "symbolAnimation",
                                        effectName: {
                                            normal: "win",
                                            drop: "wheelStop",
                                            idle: "idle",
                                            free: "winFreeSpins",
                                            light: "light"
                                        }
                                    }
                                }, {
                                    textureAtlas: "symbols_static",
                                    assetName: "gobSmile",
                                    animation: {
                                        skin: "gobSmile",
                                        assetName: "symbolAnimation",
                                        effectName: {
                                            normal: "win",
                                            drop: "wheelStop",
                                            idle: "idle",
                                            free: "winFreeSpins",
                                            light: "light"
                                        }
                                    }
                                }, {
                                    textureAtlas: "symbols_static",
                                    assetName: "gobHands",
                                    animation: {
                                        skin: "gobHands",
                                        assetName: "symbolAnimation",
                                        effectName: {
                                            normal: "win",
                                            drop: "wheelStop",
                                            idle: "idle",
                                            free: "winFreeSpins",
                                            light: "light"
                                        }
                                    }
                                }, {
                                    textureAtlas: "symbols_static",
                                    assetName: "gobWarrior",
                                    animation: {
                                        skin: "gobWarrior",
                                        assetName: "symbolAnimation",
                                        effectName: {
                                            normal: "win",
                                            drop: "wheelStop",
                                            idle: "idle",
                                            free: "winFreeSpins",
                                            light: "light"
                                        }
                                    }
                                }, {
                                    textureAtlas: "symbols_static",
                                    assetName: "a",
                                    animation: {
                                        skin: "a",
                                        assetName: "symbolAnimation",
                                        effectName: {
                                            normal: "win",
                                            drop: "wheelStop",
                                            idle: "idle",
                                            free: "winFreeSpins",
                                            light: "light"
                                        }
                                    }
                                }, {
                                    textureAtlas: "symbols_static",
                                    assetName: "k",
                                    animation: {
                                        skin: "k",
                                        assetName: "symbolAnimation",
                                        effectName: {
                                            normal: "win",
                                            drop: "wheelStop",
                                            idle: "idle",
                                            free: "winFreeSpins",
                                            light: "light"
                                        }
                                    }
                                }, {
                                    textureAtlas: "symbols_static",
                                    assetName: "q",
                                    animation: {
                                        skin: "q",
                                        assetName: "symbolAnimation",
                                        effectName: {
                                            normal: "win",
                                            drop: "wheelStop",
                                            idle: "idle",
                                            free: "winFreeSpins",
                                            light: "light"
                                        }
                                    }
                                }, {
                                    textureAtlas: "symbols_static",
                                    assetName: "j",
                                    animation: {
                                        skin: "j",
                                        assetName: "symbolAnimation",
                                        effectName: {
                                            normal: "win",
                                            drop: "wheelStop",
                                            idle: "idle",
                                            free: "winFreeSpins",
                                            light: "light"
                                        }
                                    }
                                }, {
                                    textureAtlas: "symbols_static",
                                    assetName: "ten",
                                    animation: {
                                        skin: "ten",
                                        assetName: "symbolAnimation",
                                        effectName: {
                                            normal: "win",
                                            drop: "wheelStop",
                                            idle: "idle",
                                            free: "winFreeSpins",
                                            light: "light"
                                        }
                                    }
                                }, {}, {}, {}, {}, {}, {}, {}, {}, {
                                    textureAtlas: "symbols_static",
                                    assetName: "empty",
                                    animation: {
                                        skin: "empty",
                                        assetName: "symbolAnimation",
                                        effectName: {
                                            normal: "win",
                                            drop: "wheelStop",
                                            idle: "idle",
                                            free: "winFreeSpins",
                                            light: "light"
                                        }
                                    }
                                }, {
                                    textureAtlas: "symbols_static",
                                    assetName: "silhBone",
                                    animation: {
                                        skin: "silhBone",
                                        assetName: "symbolAnimation",
                                        effectName: {
                                            normal: "win",
                                            drop: "wheelStop",
                                            idle: "idle",
                                            free: "winFreeSpins",
                                            light: "light"
                                        }
                                    }
                                }, {
                                    textureAtlas: "symbols_static",
                                    assetName: "silhFish",
                                    animation: {
                                        skin: "silhFish",
                                        assetName: "symbolAnimation",
                                        effectName: {
                                            normal: "win",
                                            drop: "wheelStop",
                                            idle: "idle",
                                            free: "winFreeSpins",
                                            light: "light"
                                        }
                                    }
                                }, {
                                    textureAtlas: "symbols_static",
                                    assetName: "silhPlant",
                                    animation: {
                                        skin: "silhPlant",
                                        assetName: "symbolAnimation",
                                        effectName: {
                                            normal: "win",
                                            drop: "wheelStop",
                                            idle: "idle",
                                            free: "winFreeSpins",
                                            light: "light"
                                        }
                                    }
                                }, {
                                    textureAtlas: "symbols_static",
                                    assetName: "silhTrilobit",
                                    animation: {
                                        skin: "silhTrilobit",
                                        assetName: "symbolAnimation",
                                        effectName: {
                                            normal: "win",
                                            drop: "wheelStop",
                                            idle: "idle",
                                            free: "winFreeSpins",
                                            light: "light"
                                        }
                                    }
                                }]
                            },
                            width: 1e3,
                            height: 948
                        }
                    };
                var Ke = {
                        sort_line: 1500,
                        reward_scatter: 1500,
                        auto_play: 200,
                        afterFreeSpins: 700,
                        beforeFreeSpins: 300,
                        inFreeSpins: 200
                    },
                    qe = {
                        get: t => Ke[t],
                        set(t, e) {}
                    };
                const Je = {
                    init() {
                        function t(t) {
                            var e = h()(t, "freespins.win", 0),
                                i = h()(t, "feature", ""),
                                s = X.store.get("free:left", 0),
                                o = h()(t, "freespins.left", -1),
                                n = h()(t, "freespins.played", -1);
                            if (X.store.set("free:win", e), X.store.set("free:coins", h()(t, "freespins.coins", 0)), X.store.set("free:left", o), X.store.set("free:played", n), X.store.set("free:count", o + n), X.store.set("free:isStart", 0 === n), X.store.set("free:isEnd", 0 === o && "basic" === i), X.store.set("free:isFree", "freespin" === i), X.store.set("free:ways", h()(t, "freespins.ways", "")), n > 0) {
                                var a = t.scatters,
                                    r = 0;
                                a && a.forEach((t => {
                                    r += t.freespins ? t.freespins : 0
                                })), X.store.set("free:winAdditional", o > s), X.store.set("free:winAdditionalCount", r)
                            }
                            X.store.set("free:multiplier", h()(t, "freespins.multiplier", 1))
                        }
                        X.store.set("free:win", 0), X.store.set("free:coins", 0), X.store.set("free:count", 0), X.store.set("free:left", -1), X.store.set("free:played", -1), X.store.set("free:ways", ""), X.store.set("free:isStart", !1), X.store.set("free:isEnd", !1), X.store.set("free:isFree", !1), X.store.set("free:winAdditional", !1), X.store.set("free:multiplier", 1), X.server.on("response:init", t), X.server.on("response:spin", t), X.server.on("response:buyin", t), X.server.on("response:risk", t)
                    }
                };
                var $e;
                ! function(t) {
                    t.Basic = "basic", t.Auto = "auto", t.Respin = "respins", t.Freespin = "freespin", t.Bonus = "bonus"
                }($e || ($e = {}));
                var ti = new class {
                        constructor() {
                            (0, o.Z)(this, "currentFeature", void 0)
                        }
                        set(t) {
                            this.currentFeature = t
                        }
                        isBasic() {
                            return this.currentFeature.includes($e.Basic)
                        }
                        isAuto() {
                            return this.currentFeature === $e.Auto
                        }
                        isRespin() {
                            return this.currentFeature === $e.Respin
                        }
                        isFreespin() {
                            return this.currentFeature === $e.Freespin
                        }
                        isBonus() {
                            return this.currentFeature === $e.Bonus
                        }
                    },
                    ei = [
                        [8, 2, 9, 3, 4, 5],
                        [6, 8, 9, 5, 10, 5],
                        [7, 7, 10, 6, 2, 4],
                        [5, 7, 7, 0, 6, 3],
                        [3, 4, 6, 0, 9, 6],
                        [10, 1, 9, 10, 7, 7]
                    ],
                    ii = [];
                const si = {
                        init() {
                            function t(t) {
                                var e = h()(t, "buyin", !1),
                                    i = h()(t, "risk", !1);
                                X.store.set("isRiskNBuy", e || i), (i || e) && (X.store.set("risk", i), X.store.set("buy", e))
                            }

                            function e(e) {
                                var i = h()(e, "win", 0);
                                X.store.set("reward:win", i), X.store.set("reward:lines", h()(e, "lines", [])), X.store.set("reward:reels", h()(e, "reels", e.error ? ei : [])), X.store.set("reward:nReels", h()(e, "nReels", e.error ? ii : [])), X.store.set("reward:fsReels", h()(e, "fsReels", [])), X.store.set("reward:ways", h()(e, "ways", ""));
                                var s = h()(e, "feature", $e.Basic);
                                "freespin" === s && ti.set("freespin"), X.store.set("reward:feature", s), t(e)
                            }
                            X.store.set("reward:win", 0), X.store.set("reward:isWin", !1), X.store.set("reward:lines", []), X.store.set("reward:reels", []), X.store.set("reward:nReels", []), X.store.set("reward:fsReels", []), X.store.set("reward:preReels", []), X.store.set("reward:preSpin", []), X.store.set("reward:scatters", !1), X.store.set("reward:numberWinSymbol", 0), X.store.set("reward:wildReels", []), X.store.set("reward:multiplier", 1), X.store.set("reward:nextMultiplier", 1), X.store.set("reward:ways", ""), X.store.set("reward:wildReelsWays", ""), X.store.set("reward:feature", ""), X.server.on("response", (function(e) {
                                var i, s = h()(e, "win", 0),
                                    o = h()(e, "scatters", !1);
                                X.store.set("reward:win", s), X.store.set("reward:lines", h()(e, "lines", [])), X.store.set("reward:reels", h()(e, "reels", e.error ? ei : [])), X.store.set("reward:nReels", h()(e, "nReels", e.error ? ii : [])), X.store.set("reward:fsReels", h()(e, "fsReels", [])), X.store.set("reward:preReels", h()(e, "preSpin.reels", [])), X.store.set("reward:preSpin", h()(e, "preSpin", [])), X.store.set("reward:scatters", o), X.store.set("reward:isWin", s > 0 || o), X.store.set("reward:numberWinSymbol", h()(e, "winSyms", 0)), X.store.set("reward:wildReels", null !== (i = e.wildReels) && void 0 !== i ? i : []);
                                var n = h()(e, "feature", $e.Basic);
                                X.store.set("reward:feature", n), X.store.set("reward:multiplier", h()(e, "multiplier", X.store.get("free:isFree") ? 2 : 1)), X.store.set("reward:nextMultiplier", h()(e, "nextMultiplier", X.store.get("free:isFree") ? 2 : 1)), X.store.set("reward:ways", h()(e, "ways", "")), X.store.set("reward:wildReelsWays", h()(e, "wildReelsWays", "")), t(e)
                            })), X.server.on("response:buyin", e), X.server.on("response:risk", e)
                        }
                    },
                    oi = {
                        init() {
                            X.store.set("spin:isSpin", !1), X.store.set("spin:isFast", !1), X.action.on("spin:start", (function() {
                                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                X.store.get("spin:isSpin") ? t && !X.store.get("spin:isFast") && X.config.get("quickSpin.available", !0) && (X.store.set("spin:isFast", !0), X.action.emit("spin:fast")) : (X.store.set("spin:isSpin", !0), X.state.goTo("spin"))
                            })), X.action.on("state:stop_exit", (function() {
                                X.store.set("spin:isSpin", !1), X.store.set("spin:isFast", !1)
                            }))
                        }
                    },
                    ni = {
                        init() {
                            Je.init(), oi.init(), si.init()
                        }
                    };
                class ai extends K.$u {
                    constructor() {
                        super(...arguments), (0, o.Z)(this, "backgroundFree", void 0), (0, o.Z)(this, "backgroundNormal", void 0), (0, o.Z)(this, "bigWin", void 0), (0, o.Z)(this, "clickNormal", void 0), (0, o.Z)(this, "currentWinSound", void 0), (0, o.Z)(this, "extraFree", void 0), (0, o.Z)(this, "freeEnd", void 0), (0, o.Z)(this, "freeStart", void 0), (0, o.Z)(this, "giantWin", void 0), (0, o.Z)(this, "scatterReel", void 0), (0, o.Z)(this, "scatterWin", void 0), (0, o.Z)(this, "spinFast", void 0), (0, o.Z)(this, "spinStart", void 0), (0, o.Z)(this, "symbolDrop", void 0), (0, o.Z)(this, "wheelStop", void 0), (0, o.Z)(this, "wildReel", void 0), (0, o.Z)(this, "winFree1", void 0), (0, o.Z)(this, "winFree2", void 0), (0, o.Z)(this, "winFree3", void 0), (0, o.Z)(this, "winLight1", void 0), (0, o.Z)(this, "winLight2", void 0), (0, o.Z)(this, "winLight3", void 0), (0, o.Z)(this, "winNormal1", void 0), (0, o.Z)(this, "winNormal2", void 0), (0, o.Z)(this, "winNormal3", void 0), (0, o.Z)(this, "multiplierChange", void 0), (0, o.Z)(this, "crack", void 0), (0, o.Z)(this, "coinz", void 0)
                    }
                    init(t) {
                        this.backgroundNormal = this.get("backgroundNormal"), this.backgroundFree = this.get("backgroundFree"), this.freeStart = this.get("freeStart"), this.freeEnd = this.get("freeEnd"), this.winNormal1 = this.get("win_normal_1"), this.winNormal2 = this.get("win_normal_2"), this.winNormal3 = this.get("win_normal_3"), this.winFree1 = this.get("win_free_1"), this.winFree2 = this.get("win_free_2"), this.winFree3 = this.get("win_free_3"), this.winLight1 = this.get("win_light_1"), this.winLight2 = this.get("win_light_2"), this.winLight3 = this.get("win_light_3"), this.bigWin = this.get("bigWin"), this.giantWin = this.get("giantWin"), this.spinStart = this.get("spinStart"), this.spinFast = this.get("spinFast"), this.clickNormal = this.get("clickNormal"), this.wheelStop = this.get("wheelStop"), this.scatterWin = this.get("scatterWin"), this.scatterReel = this.get("scatterReel"), this.extraFree = this.get("extraFree"), this.symbolDrop = this.get("symbolDrop"), this.multiplierChange = this.get("multiplierChange"), this.coinz = this.get("coinz"), this.crack = this.get("crack"), super.init(t), this.currentWinSound = null, this._setupEvents()
                    }
                    _setupEvents() {
                        var t = this;
                        X.action.on("sound:win", (function(e) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "normal",
                                s = ti.isFreespin();
                            t.currentWinSound = t["".concat("light" === i ? "winLight" : s ? "winFree" : "winNormal").concat(e)], t.currentWinSound.play()
                        })), X.action.on("sound:bigWin", (() => {
                            this.bigWin.play()
                        })), X.action.on("sound:giantWin", (() => {
                            this.bigWin.stop(), this.giantWin.play()
                        })), X.action.on("sound:scatterWin", (() => {
                            this.scatterWin.play()
                        })), X.action.on("sound:scatterReel", (() => {
                            this.scatterReel.play()
                        })), X.action.on("sound:extraFree", (() => {
                            this.extraFree.play()
                        })), X.action.on("state:spin_enter", this._onSpinEnter, this), X.action.on("state:finish_enter", this._onFinishEnter, this), X.action.on("sound:wheelStop", this._onWheelStop, this), X.action.on("state:finish_enter", this._onFinishEnter, this), X.action.on("sound:click", this.click, this), X.action.on("sound:free_start", this._onFreeStart, this), X.action.on("sound:free_stop", this._onFreeStop, this), X.action.on("free:select_start", this._onSelectFreeStart, this), X.action.on("free:select_stop", this._onSelectFreeStop, this), X.action.on("sound:symbolDrop", (() => {
                            this.symbolDrop.play()
                        })), X.action.on("sound:multiplierChange", (() => {
                            this.multiplierChange.play()
                        })), X.action.on("sound:coinz", (() => {
                            this.coinz.play()
                        })), X.action.on("sound:crack", (() => {
                            this.crack.play()
                        }))
                    }
                    stopBigWin() {
                        this.bigWin.stop(), this.giantWin.stop()
                    }
                    _onSpinEnter() {
                        this.currentWinSound && (this.currentWinSound.stop(), this.currentWinSound = null);
                        var t = ti.isFreespin(),
                            e = X.autoPlay.enabled;
                        t || e || "drop" === X.store.get("server:nextAction") || this.spinStart.play()
                    }
                    _onWheelStop() {
                        this.wheelStop.play()
                    }
                    click() {
                        this.clickNormal.play()
                    }
                    _onFreeStart() {
                        this.currentWinSound && (this.currentWinSound.stop(), this.currentWinSound = null), this.backgroundNormal.stop(), this.freeStart.once("end", (() => {
                            !this.backgroundFree.playing() && this.backgroundFree.fade(1)
                        })), this.freeStart.play()
                    }
                    _onFreeStop() {
                        this.currentWinSound && (this.currentWinSound.stop(), this.currentWinSound = null), this.backgroundFree.stop(), this.freeEnd.once("end", (() => {
                            !this.backgroundNormal.playing() && this.backgroundNormal.fade(1)
                        })), this.freeEnd.play()
                    }
                    _onSelectFreeStart() {
                        this.freeStart.stop(), !this.backgroundFree.playing() && this.backgroundFree.fade(1)
                    }
                    _onSelectFreeStop() {
                        this.freeEnd.stop(), !this.backgroundNormal.playing() && this.backgroundNormal.fade(1)
                    }
                    _onFinishEnter() {
                        this.currentWinSound && (this.currentWinSound.stop(), this.currentWinSound = null)
                    }
                }
                class ri extends J {
                    init() {}
                    enter() {
                        this.game.action.emit("state:finish_enter"), this.game.applyNetPosition()
                    }
                    exit() {
                        this.game.action.emit("state:finish_exit")
                    }
                }
                class hi extends ri {}
                class li extends J {
                    init() {}
                    enter() {
                        this.game.action.emit("state:ready_enter")
                    }
                    exit() {
                        this.game.action.emit("state:ready_exit")
                    }
                }
                class di extends li {}
                class ci extends J {
                    constructor() {
                        super(...arguments), (0, o.Z)(this, "stopItemWin", this.get("StopItemWin")), (0, o.Z)(this, "stopItemFeatureFreeSpin", this.get("StopItemFeatureFreeSpin")), (0, o.Z)(this, "stopItemFeatureBonus", this.get("StopItemFeatureBonus")), (0, o.Z)(this, "stopItemBalance", this.get("StopItemBalance")), (0, o.Z)(this, "stopItemBalanceDrop", this.get("StopItemBalanceDrop"))
                    }
                    init() {}
                    enter() {
                        this.tryStopAutoPlay(), this.game.action.emit("state:reward_enter")
                    }
                    exit() {
                        this.game.action.emit("state:reward_exit")
                    }
                    tryStopAutoPlay() {
                        var t, e;
                        null !== (t = this.game.autoPlay) && void 0 !== t && t.enabled && ((this.stopIfWin || this.stopIfFreeSpins || this.stopIfBonus || this.stopIfBalanceInc || this.stopIfBalanceDec) && (null === (e = this.game.autoPlay) || void 0 === e || e.disable()))
                    }
                    get stopIfBalanceInc() {
                        var t;
                        return (null === (t = this.stopItemBalance) || void 0 === t ? void 0 : t.checked) && this.game.wallet.balance >= this.stopItemBalance.value
                    }
                    get stopIfBalanceDec() {
                        var t;
                        return (null === (t = this.stopItemBalanceDrop) || void 0 === t ? void 0 : t.checked) && this.game.wallet.balance <= this.stopItemBalanceDrop.value
                    }
                    get stopIfWin() {
                        var t, e, {
                            wallet: i
                        } = this.game;
                        return i.coins > 0 && (null === (t = this.stopItemWin) || void 0 === t ? void 0 : t.checked) && (this.stopItemWin.type === Bt || (null === (e = this.game.bigWin) || void 0 === e ? void 0 : e.available(i.coins)) && this.game.bigWin.type(i.coins) >= this.stopItemWin.type)
                    }
                    get stopIfBonus() {
                        var t, e, i;
                        return (null === (t = this.stopItemFeatureBonus) || void 0 === t ? void 0 : t.checked) && Boolean(null === (e = this.game.server.response) || void 0 === e || null === (i = e.feature) || void 0 === i ? void 0 : i.match(/bonus|feature|queen/g))
                    }
                    get stopIfFreeSpins() {
                        var t, e, i;
                        return (null === (t = this.stopItemFeatureFreeSpin) || void 0 === t ? void 0 : t.checked) && Boolean(null === (e = this.game.server.response) || void 0 === e || null === (i = e.feature) || void 0 === i ? void 0 : i.match(/freespin|WEREWOLF|VAMPIRE/g))
                    }
                }
                class ui extends ci {
                    get stopIfBonus() {
                        var t;
                        return (null === (t = this.stopItemFeatureBonus) || void 0 === t ? void 0 : t.checked) && this.game.store.get("bonus:isBonus", !1)
                    }
                }
                class pi extends J {
                    constructor() {
                        var t;
                        super(...arguments), t = this, (0, o.Z)(this, "slot", this.get("Slot")), (0, o.Z)(this, "menu", this.get("Menu")), (0, o.Z)(this, "betSettings", this.get("BetSettings")), (0, o.Z)(this, "autoPlaySettings", this.get("AutoPlaySettings")), (0, o.Z)(this, "riskFeature", this.get("RiskFeature")), (0, o.Z)(this, "controls", this.get("Controls")), (0, o.Z)(this, "buttonMenu", this.get("ButtonMenu")), (0, o.Z)(this, "buttonSound", this.get("ButtonSound")), (0, o.Z)(this, "buttonAutoPlay", this.get("ButtonAutoPlay")), (0, o.Z)(this, "buttonQuickSpin", this.get("ButtonQuickSpin")), (0, o.Z)(this, "buttonAutoPlayAccept", this.get("ButtonAutoPlayAccept")), (0, o.Z)(this, "stopItemBalance", this.get("StopItemBalance")), (0, o.Z)(this, "stopItemBalanceDrop", this.get("StopItemBalanceDrop")), (0, o.Z)(this, "checkboxQuickSpin", this.get("QuickSpinCheckbox")), (0, o.Z)(this, "checkboxLeftHand", this.get("LeftHandCheckbox")), (0, o.Z)(this, "checkboxFullscreen", this.get("FullscreenCheckbox")), (0, o.Z)(this, "checkboxGameSounds", this.get("GameSoundsCheckbox")), (0, o.Z)(this, "checkboxBackgroundSounds", this.get("BackgroundSoundsCheckbox")), (0, o.Z)(this, "checkboxRiskFeature", this.get("RiskFeatureCheckbox")), (0, o.Z)(this, "checkboxIntroScreen", this.get("IntroScreenCheckbox")), (0, o.Z)(this, "onMenuOpen", (() => {
                            var t, e;
                            null === (t = this.slot) || void 0 === t || null === (e = t.hide) || void 0 === e || e.call(t), this.betSettings.close(), this.autoPlaySettings.close(), this.controls.onMenuOpen(), this.game.fullscreen.lock()
                        })), (0, o.Z)(this, "onMenuClose", (() => {
                            var t, e;
                            null === (t = this.slot) || void 0 === t || null === (e = t.show) || void 0 === e || e.call(t), this.controls.onMenuClose(), this.game.fullscreen.unlock()
                        })), (0, o.Z)(this, "handleClickAutoPlayAccept", (0, s.Z)((function*() {
                            t.autoPlaySettings.opened && (t.autoPlaySettings.close(), yield t.game.checkBalance(), t.stopItemBalance.setStartBalance(t.game.wallet.balance), t.stopItemBalanceDrop.setStartBalance(t.game.wallet.balance), t.game.autoPlay.enable(), t.game.action.emit("spin:start", !1))
                        }))), (0, o.Z)(this, "handleClickAutoPlay", (() => {
                            var t;
                            this.game.autoPlay.enabled ? this.game.autoPlay.disable() : (this.menu.close(), this.betSettings.close(), null === (t = this.buttonAutoPlay) || void 0 === t || t.setCount(this.game.autoPlay.count), this.autoPlaySettings.setAutoPlayCount(this.game.autoPlay.count), this.autoPlaySettings.toggle())
                        })), (0, o.Z)(this, "handleClickEnterKey", (0, s.Z)((function*() {
                            t.game.autoPlay.enabled ? t.game.autoPlay.disable() : (t.menu.close(), t.betSettings.close(), t.autoPlaySettings.close(), yield t.game.checkBalance(), t.game.autoPlay.setCount(t.game.autoPlay.max), t.game.autoPlay.enable(), t.game.action.emit("spin:start", !1))
                        })))
                    }
                    init() {
                        this.setupSound(), this.setupQuickSpin(), this.bindAutoPlay(), this.setupMenu()
                    }
                    enter() {
                        this.game.action.emit("state:setup_enter")
                    }
                    exit() {
                        this.game.action.emit("state:setup_exit")
                    }
                    setupSound() {
                        var {
                            sound: t
                        } = this.game, e = (e, i) => {
                            var s = this.game.sound.volume;
                            "all" === e ? (this.buttonSound.toggle(!i, s), this.checkboxGameSounds.setChecked(!i), this.checkboxBackgroundSounds.setChecked(!i)) : "effects" === e ? (this.buttonSound.toggle(!t.mutedAll || !i, s), this.checkboxGameSounds.setChecked(!i)) : "background" === e && (this.buttonSound.toggle(!t.mutedAll || !i, s), this.checkboxBackgroundSounds.setChecked(!i))
                        };
                        this.buttonSound.onChangeVolume.add((t => {
                            this.game.sound.volume = t
                        })), this.buttonSound.onClick.add((() => {
                            this.game.sound.toggle("all")
                        })), t.onChangeMute.add(e), t.onChangeVolume.add((e => {
                            this.buttonSound.toggle(e > 0, this.game.sound.volume), this.checkboxGameSounds.setChecked(e > 0 && !t.muted("effects")), this.checkboxBackgroundSounds.setChecked(e > 0 && !t.muted("background"))
                        })), e("all", t.mutedAll)
                    }
                    setupQuickSpin() {
                        var t, e = this,
                            {
                                quickSpin: i
                            } = this.game;
                        null === (t = this.buttonQuickSpin) || void 0 === t || t.onClick.add((() => {
                            i.toggle()
                        })), i.onToggle.add((t => {
                            var e;
                            this.checkboxQuickSpin.setChecked(t), null === (e = this.buttonQuickSpin) || void 0 === e || e.setActive(t)
                        })), i.onTryEnable.once(function() {
                            var t = (0, s.Z)((function*(t) {
                                t(yield e.game.popupManager.show("PopupQuickSpin"))
                            }));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }())
                    }
                    bindAutoPlay() {
                        var t, e, i;
                        null === (t = this.buttonAutoPlayAccept) || void 0 === t || t.onClick.add(this.handleClickAutoPlayAccept), null === (e = this.buttonAutoPlay) || void 0 === e || e.onEnterClick.add(this.handleClickEnterKey), null === (i = this.buttonAutoPlay) || void 0 === i || i.onClick.add(this.handleClickAutoPlay)
                    }
                    setupMenu() {
                        this.menu.on("open", this.onMenuOpen), this.menu.on("close", this.onMenuClose), this.buttonMenu.onClick.add((() => {
                            this.menu.opened ? this.menu.close() : this.menu.open()
                        }))
                    }
                }
                class gi extends pi {}
                class mi extends J {
                    constructor() {
                        super(...arguments), (0, o.Z)(this, "fastStopLayout", void 0)
                    }
                    init() {
                        this.fastStopLayout = this.get("FastStopLayout")
                    }
                    enter() {
                        this.game.config.get("quickSpin.available", !0) && this.enableFastSpin(), this.game.action.emit("state:spin_enter")
                    }
                    exit() {
                        this.game.action.emit("state:spin_exit")
                    }
                    enableFastSpin() {
                        var t;
                        null === (t = this.fastStopLayout) || void 0 === t || t.press((() => {
                            this.game.action.emit("spin:start")
                        }), !0)
                    }
                }
                class Ai extends mi {
                    enter() {
                        var t;
                        null === (t = this.fastStopLayout) || void 0 === t || t.press((() => {
                            this.game.action.emit("spin:start")
                        }), !1), this.game.action.emit("state:spin_enter")
                    }
                }
                class vi extends J {
                    constructor() {
                        super(...arguments), (0, o.Z)(this, "fastStopLayout", void 0)
                    }
                    init() {
                        this.fastStopLayout = this.get("FastStopLayout")
                    }
                    enter() {
                        this.game.action.emit("state:stop_enter")
                    }
                    exit() {
                        var t;
                        null === (t = this.fastStopLayout) || void 0 === t || t.disable(), this.game.action.emit("state:stop_exit")
                    }
                }
                class bi extends vi {}
                const wi = JSON.parse('{"AutoPlaySettingsStopCondButtonReset":"Reset","AutoPlaySettingsStopCondCheckboxBalance":"If Balance Increases By","AutoPlaySettingsStopCondCheckboxBalanceDrop":"If Balance Decreases By","AutoPlaySettingsStopCondCheckboxFeatureBonus":"If Bonus Game Won","AutoPlaySettingsStopCondCheckboxFeatureFreeSpin":"If Free Spins Won","AutoPlaySettingsStopCondCheckboxWin":"If Win","AutoPlaySettingsStopCondCheckboxWinAny":"Any","AutoPlaySettingsStopCondCheckboxWinBig":"Big","AutoPlaySettingsStopCondCheckboxWinGiant":"Giant","AutoPlaySettingsStopCondTitle":"STOP AUTOPLAY","AutoPlaySettingsSubTitle":"Setup your best autoplay conditions","AutoPlaySettingsTitle":"AUTOPLAY","BetSettingsLines":"LINES\\n<value>%s</value>","BetSettingsTitle":"BET SETTINGS","BetSettingsWays":"WAYS\\n<value>%s</value>","ControlsDesktopAutoPlayStart":"AUTOPLAY","ControlsDesktopAutoPlayStop":"STOP AUTO","ControlsDesktopBalance":"BALANCE%s\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopBet":"BET %s\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopFreeRoundLeft":"FREE ROUND\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopFreeRoundWin":"TOTAL WIN %s\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopFreeRoundWinEmpty":"TOTAL WIN","ControlsDesktopFreeSpinsLast":"FREE SPINS LEFT\\n<delimiter> \\n</delimiter><value>LAST</value>","ControlsDesktopFreeSpinsLeft":"FREE SPINS LEFT\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopLines":"LINES\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopMaxBet":"MAX BET","ControlsDesktopTotalWin":"TOTAL WIN %s\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopWays":"WAYS\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopWin":"WIN %s\\n<delimiter> \\n</delimiter><value>%s</value>","Currency":"CURRENCY\\n<value>%s</value>","GameRulesAdvancedAutoPlayContent":"Advanced autoplay settings are available in the section with standard autoplay settings. You can set the conditions for stopping the game in automatic mode:\\n\\n<bold>if win any/big/giant</bold> - autoplay will be stopped after any/big/giant win\\n\\n<bold>if balance increased by 10%-100%</bold> - autoplay will stop when your balance increases by the selected %\\n\\n<bold>if balance decreased by 10%-100%</bold> - autoplay will be interrupted when your balance decreases by the selected %\\n\\nClick <bold>Reset</bold> to reset all autoplay settings","GameRulesAdvancedAutoPlayTitle":"Advanced Autoplay Settings","GameRulesAutoPlayContent":"Select the number of game rounds to play in automatic mode by pressing the button with the corresponding number, or press the button with the infinity sign to play in automatic mode until the autoplay is manually canceled or until the balance runs out. Your choice must be confirmed with the Start button.","GameRulesAutoPlayTitle":"Autoplay Options","GameRulesBestExperience":"Please note that you can only play one game at a time on each account. Therefore, you cannot play a game on more than one device, or multiple games on the same device simultaneously. Doing so may lead to various errors.\\n\\nFor the best gaming experience, we recommend using the latest version of the relevant software.","GameRulesGeneralRTP":"Theoretical RTP: %s %","GameRulesGeneralTitle":"General Info","GameRulesInterfaceAutoPlay":"Click to go to autoplay menu","GameRulesInterfaceBalance":"Here is your current balance","GameRulesInterfaceBetLevel":"Your current bet and a button to go to the bet size selection menu","GameRulesInterfaceContent":"All buttons of the game interface are listed below. Please note that the appearance and location of the buttons may differ slightly depending on the format in which the game is launched and what feature it is currently in.","GameRulesInterfaceMenu":"Click to access the game menu","GameRulesInterfaceQuickSpin":"Click to enable/disable quick spin","GameRulesInterfaceSound":"Turn game sound on/off and adjust sound volume","GameRulesInterfaceSpin":"Click to start the game round at the current bet. In the desktop version of the game, the button may have an alternative design","GameRulesInterfaceTitle":"Game Interface","GameRulesInterfaceWin":"Here is the win in the current game round","GameRulesSettingsContent":"To go to the settings menu, click the cogwheel icon in the game menu","GameRulesSettingsContentItemBackgroundSound":"<bold>Background music</bold> - turns on/off background music in the game","GameRulesSettingsContentItemFullscreen":"<bold>Full Screen</bold> - enables/disables full screen mode","GameRulesSettingsContentItemGameSound":"<bold>Game sound</bold> - turns on/off the sound effects of the game","GameRulesSettingsContentItemQuickSpin":"<bold>Quick Spin</bold> - turns on/off the function of the accelerated mode of rotation and stop of the reels","GameRulesSettingsTitle":"Game Settings","GameSettingsBackgroundSounds":"Background Music","GameSettingsFullscreen":"Full Screen","GameSettingsGameSounds":"Game Sounds","GameSettingsIntroScreen":"Intro Screen","GameSettingsLeftHand":"Left Hand Mode","GameSettingsQuickSpin":"Quick Spin","GameSettingsRiskFeatureCheckbox":"Risk&Buy","GameSettingsTitle":"GAME SETTINGS","IntroScreenHideButtonText":"Don\'t show next time","IntroScreenLoaderText":"LOADING","MenuDesktopButtonFullscreen":"FULLSCREEN","MenuDesktopButtonHome":"HOME","MenuDesktopButtonPaytable":"PAYTABLE","MenuDesktopButtonQuickspin":"QUICKSPIN","MenuDesktopButtonSound":"SOUND","MenuGameRules":"GAME INFORMATION","MenuMobileBetSettingsTitle":"BET SETTINGS","MenuMobileGameSettingsLeftHand":"Left Hand Mode","MenuMobileGameSettingsQuickspin":"Quick Spin","MenuMobileGameSettingsSounds":"Game Sounds","MenuMobileGameSettingsTitle":"GAME SETTINGS","MenuMobilePaytableTitle":"PAYTABLE","MenuPaytable":"PAYTABLE","MenuSettings":"SETTINGS","NetPositionTitle":"Net Position: %s","PopupActionClose":"Close","PopupActionContinue":"Continue","PopupActionEnable":"Enable","PopupActionNo":"No","PopupActionReload":"Reload","PopupActionYes":"Yes","PopupFreeRoundEndMessage":"The next spins will use your bonus amount","PopupFreeRoundEndTitle":"Free Rounds Finished","PopupFreeRoundLastMessage":"Congratulations, you have\\n last free round","PopupFreeRoundStartMessage":"Congratulations, you have\\n%s free rounds","PopupFreeRoundStartTitle":"Free Rounds Bonus","PopupFreeSpinsButton":"CLICK ANYWHERE TO CONTINUE","PopupFreeSpinsStopDescription":"<value>%s FREE SPINS</value> PLAYED","PopupFreeSpinsStopDescriptionNew":"%s Free Spins played","PopupFreeSpinsTitle":"CONGRATULATIONS","PopupFreeSpinsTitleNew":"CONGRATULATIONS! YOU WON","PopupFreeSpinsTitleRestore":"IN-GAME FEATURE RESTORED!","PopupFreeSpinsWinRestore":"<value>%s FREE SPINS</value> LEFT","PopupFreeSpinsWinRestoreLast":"<value>LAST FREE SPIN</value> LEFT","PopupFreeSpinsWinStart":"YOU WON <value>%s FREE SPINS</value>","PopupFreeSpinsWinStartNew":"%s FREE SPINS","PopupFreeSpinsWinStop":"YOU WON <value>%s</value>","PopupFreeSpinsWinStopNew":"<value>%s</value>","PopupMaxLimitMessage":"Bet exceeded max bet limit.","PopupMaxLimitTitle":"Max limit","PopupNetworkErrorMessage":"Please reload the game.","PopupNetworkErrorTitle":"Connection Lost","PopupQuickSpinMessage":"It seems you prefer to play a bit faster.\\nWould you like to enable Quick Spin?","PopupQuickSpinTitle":"Quick Spin","PopupRestoreMessage":"In-game feature restored!","PopupRiskNBuyContentBuy":"Buy in a feature for %s\\nthat will play at the bet %s","PopupRiskNBuyContentRisk":"Take the risk of winning %s\\nto get a feature at the bet %s","PopupRiskNBuyTitleBuy":"BUY IN FEATURE","PopupRiskNBuyTitleRisk":"RISK FEATURE","PopupSoundMessage":"Play with sound?","PopupSpendingBudgetMessage":"You have reached your play limit.\\nWelcome back later.","PopupSpendingBudgetTitle":"Play limit","PopupUnexpectedErrorMessage":"An unexpected situation.\\nReload the page.","PopupUnexpectedErrorTitle":"Unexpected situation","PopupZeroBalanceMessage":"Please change your BET LEVEL or top up your balance","PopupZeroBalanceTitle":"Insufficient funds","RiskNBuyBuyFor":"BUY FOR %s","RiskNBuyFreeSpinsText":"FREE SPINS","RiskNBuyOnBet":"ON BET %s","RiskNBuySubHeader":"RISK YOUR WIN\\nTO PLAY","StatusBarMobileBalance":"BALANCE %s\\n","StatusBarMobileBet":"BET %s\\n","StatusBarMobileFreeLast":"FREE SPINS LEFT\\n<value>LAST</value>","StatusBarMobileFreeLeft":"FREE SPINS LEFT\\n<value>%s</value>","StatusBarMobileFreePlayed":"FREE SPINS PLAYED\\n","StatusBarMobileFreeRoundLeft":"FREE ROUND\\n","StatusBarMobileTotalWin":"TOTAL WIN %s\\n","StatusBarMobileWin":"WIN %s\\n","TimeElapsedTitle":"Time Elapsed: %s"}'),
                    fi = JSON.parse('{"IntroScreenDescription0":"Rockfall feature with up to Х5 multiplier","IntroScreenDescription1":"Every spin can produce up to 46 656 ways to win","IntroScreenDescription2":"Buy Free Spins or risk your winnings for them","PaytableSectionBetLinesContent":"This Rockways slot can produce up to 6 symbols per reel on each spin. This means every spin can produce up to 46 656 Rockways to win! At the beginning of each spin, there are up to 4 Blocker symbols on each reel. Blocker symbols do not participate in winning combinations. Rockways wins are paid out when matching symbols appear anywhere on adjacent reels from left to right, regardless of the size of the reels.\\n\\nOnly the highest win per bet way is paid. The payout values are based on the currently selected bet and change proportionally with its changes. The game is played with the proposed number of bet ways. Malfunction voids all pays and plays.","PaytableSectionBetLinesTitle":"Rockways payouts","PaytableSectionFreeContent":"Free Spins play automatically at the bet at which they were won. All payments are made in accordance with the paytable and the actual Rockfall multiplier. Rockfall multipliers for Free Spins depend on the main game multiplier with which the Free Spins were won. Additional Free Spins can be won in the current Free Spins series according to the general rules.","PaytableSectionFreeTitle":"Free Spins feature","PaytableSectionPayoutTitle":"Symbol payout values","PaytableSectionRiskContent1":"The Risk\'n\'Buy feature is offered to the player in the main game after each spin, regardless of whether they win or not. The Risk\'n\'Buy feature allows the player to either risk the current win and immediately go to the Free Spins feature, or to buy the Free Spins feature at the specified cost and trigger it immediately.\\n\\nThe player has the freedom to choose whether they want to launch the suggested version of the Risk\'n\'Buy feature or continue to the main game. If they choose to risk their current winnings, these will be deducted from their balance in the form of a bet. If the player decides to buy the Free Spins feature, the cost of the feature will also be deducted from their balance in the form of a bet. Free Spins earned through the Risk\'n\'Buy feature will be triggered on the same bet that they were received by the player. The Risk’n’Buy feature is not available in autoplay mode.","PaytableSectionRiskTitle":"Risk\'n\'Buy feature","PaytableSectionRockfallContent":"The Rockfall feature will be activated along with any winning game round in the main game and in the Free Spins feature. All winning symbols are removed from the screen and replaced with new ones. The win multiplier grows with each new Rockfall. Rockfall multipliers for the main game: X1, X2, X3, X4, X5. To calculate the Rockfall multipliers for Free Spins, you need to multiply the current main game multiplier, at which Free Spins were won, by the basic set of multipliers for Free Spins: X1, X2, X3, X4, X5. The Rockfall feature ends when no new winning combinations appear on the reels.","PaytableSectionRockfallTitle":"Rockfall feature","PaytableSectionScatterContent":"5 Scatter symbols trigger 10 Free Spins. If there are more than 5 Scatters in the triggering combination, then each additional Scatter adds 2 Free Spins.","PaytableSectionScatterTitle":"Scatter symbol","PaytableSectionWildContent":"Wild symbols substitute for all symbols exсept for Scatter symbols. They appear on reels 2, 3, 4, 5 and 6.","PaytableSectionWildTitle":"Wild symbol","PopupFreeSpinsDescription":"ROCKFALL FEATURE WITH UP TO %s MULTIPLIER","RiskButton":"%s<currency> %s</currency>","RiskButtonTextBuy":"BUY\\nFEATURE","RiskButtonTextRisk":"RISK\\nWIN","RiskPopupDescriptionBuy":"BUY <free>%s FREE SPINS</free>\\n<bet>WITH UP TO %s MULTIPLIER\\nAT THE BET %s %s</bet>\\n\\n<valueText>FOR</valueText> <value>%s %s?</value>","RiskPopupDescriptionRisk":"RISK WINNINGS <value>%s %s FOR %s FREE SPINS</value><bet>\\nWITH UP TO %s MULTIPLIER\\n\\nAT THE BET %s %s?</bet>","RiskPopupNoPrimary":"NO, CANCEL","RiskPopupYesBuy":"YES, BUY","RiskPopupYesRisk":"YES, RISK"}');

                function yi(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function Si(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? yi(Object(i), !0).forEach((function(e) {
                            (0, o.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : yi(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                var xi = Si(Si({}, wi), fi),
                    ki = i(8442),
                    Ci = [0, 0, 0];
                class Bi extends ki.PY {
                    constructor(t) {
                        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        t.useRectangleMask = e, super(t), (0, o.Z)(this, "playing", void 0), (0, o.Z)(this, "skinName", ""), (0, o.Z)(this, "animationName", ""), this.playing = !1
                    }
                    stop() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        this.playing = !1, this.lastTime = 0, this.skeleton.setToSetupPose(), this.state.clearTrack(t)
                    }
                    play(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                            s = arguments.length > 3 ? arguments[3] : void 0;
                        return this.stop(), this.animationName = t, this.playing = !0, new Promise((o => {
                            this.state.addListener({
                                complete: () => {
                                    this.playing = !1, o(), null == s || s()
                                }
                            }), this.state.setAnimation(i, t, e)
                        }))
                    }
                    hasSkin(t) {
                        return this.spineData.skins.some((e => e.name === t))
                    }
                    changeSkin(t) {
                        this.skeleton.skin = null, this.skeleton.setSkinByName(t), this.skinName = t
                    }
                    update(t) {
                        var e = this.delayLimit;
                        if (t > e && (t = e), this.state.update(t), this.state.apply(this.skeleton), this.skeleton) {
                            this.skeleton.updateWorldTransform();
                            var i = this.skeleton.slots,
                                s = this.color,
                                o = null,
                                a = null;
                            s ? (o = s.light, a = s.dark) : o = this.tintRgb;
                            for (var r = 0, h = i.length; r < h; r++) {
                                var l = i[r],
                                    d = l.getAttachment(),
                                    c = this.slotContainers[r];
                                if (d) {
                                    var u = null,
                                        p = d.color;
                                    switch (d.type) {
                                        case ki.sf.Region:
                                            var g = d.region;
                                            if (g) {
                                                l.currentMesh && (l.currentMesh.visible = !1, l.currentMesh = null, l.currentMeshId = void 0, l.currentMeshName = void 0);
                                                var m = g;
                                                if (l.currentSpriteName && l.currentSpriteName === m.name) l.currentSpriteName !== m.name || l.hackRegion || this.setSpriteRegion(d, l.currentSprite, g);
                                                else {
                                                    var A = m.name;
                                                    if (l.currentSprite && (l.currentSprite.visible = !1), l.sprites = l.sprites || {}, void 0 !== l.sprites[A]) l.sprites[A].visible = !0;
                                                    else {
                                                        var v = this.createSprite(l, d, A);
                                                        c.addChild(v)
                                                    }
                                                    l.currentSprite = l.sprites[A], l.currentSpriteName = A
                                                }
                                            }
                                            c.transform.setFromMatrix(l.bone.matrix), l.currentSprite.color ? u = l.currentSprite.color : (Ci[0] = o[0] * l.color.r * p.r, Ci[1] = o[1] * l.color.g * p.g, Ci[2] = o[2] * l.color.b * p.b, l.currentSprite.tint = n.utils.rgb2hex(Ci)), l.currentSprite.blendMode = l.blendMode;
                                            break;
                                        case ki.sf.Mesh:
                                            if (l.currentSprite) {
                                                l.currentSprite.visible = !1, l.currentSprite = null, l.currentSpriteName = void 0;
                                                var b = new n.Transform;
                                                b._parentID = -1, b._worldID = c.transform._worldID, c.transform = b
                                            }
                                            var w = d.id;
                                            if (!l.currentMeshId || l.currentMeshId !== w) {
                                                var f = w;
                                                if (l.currentMesh && (l.currentMesh.visible = !1), l.meshes = l.meshes || {}, void 0 !== l.meshes[f]) l.meshes[f].visible = !0;
                                                else {
                                                    var y = this.createMesh(l, d);
                                                    c.addChild(y)
                                                }
                                                l.currentMesh = l.meshes[f], l.currentMeshName = d.name, l.currentMeshId = f
                                            }
                                            d.computeWorldVerticesOld(l, l.currentMesh.vertices), l.currentMesh.color ? u = l.currentMesh.color : (Ci[0] = o[0] * l.color.r * p.r, Ci[1] = o[1] * l.color.g * p.g, Ci[2] = o[2] * l.color.b * p.b, l.currentMesh.tint = n.utils.rgb2hex(Ci)), l.currentMesh.blendMode = l.blendMode;
                                            break;
                                        case ki.sf.Clipping:
                                            l.currentGraphics || (this.createGraphics(l, d), c.addChild(l.clippingContainer), c.addChild(l.currentGraphics)), this.updateGraphics(l, d), c.alpha = 1, c.visible = !0;
                                            continue;
                                        default:
                                            c.visible = !1;
                                            continue
                                    }
                                    if (c.visible = !0, u) {
                                        var S = l.color.r * p.r,
                                            x = l.color.g * p.g,
                                            k = l.color.b * p.b;
                                        u.setLight(o[0] * S + a[0] * (1 - S), o[1] * x + a[1] * (1 - x), o[2] * k + a[2] * (1 - k)), l.darkColor ? (S = l.darkColor.r, x = l.darkColor.g, k = l.darkColor.b) : (S = 0, x = 0, k = 0), u.setDark(o[0] * S + a[0] * (1 - S), o[1] * x + a[1] * (1 - x), o[2] * k + a[2] * (1 - k))
                                    }
                                    c.alpha = l.color.a
                                } else c.visible = !1
                            }
                            for (var C = this.skeleton.drawOrder, B = null, P = null, T = 0, E = C.length; T < E; T++) {
                                var F = i[C[T].data.index],
                                    R = this.slotContainers[C[T].data.index];
                                if (P || null !== R.parent && R.parent !== this && (R.parent.removeChild(R), R.parent = this), F.currentGraphics && F.getAttachment()) P = F.clippingContainer, B = F.getAttachment(), P.children.length = 0, this.children[T] = R, B.endSlot === F.data && (B.endSlot = null);
                                else if (P) {
                                    var Z = this.tempClipContainers[T];
                                    Z || ((Z = this.tempClipContainers[T] = this.newContainer()).visible = !1), this.children[T] = Z, R.parent = null, P.addChild(R), B.endSlot == F.data && (P.renderable = !0, P = null, B = null)
                                } else this.children[T] = R
                            }
                        }
                    }
                    createGraphics(t, e) {
                        if (!this.spineData.useRectangleMask) return super.createGraphics(t, e);
                        var i = this.newGraphics();
                        if (i.clear(), i.beginFill(16777215, 1), e.worldVerticesLength <= 8) {
                            var s = new n.Rectangle(0, 0, 0, 0);
                            i.drawRect(s.x, s.y, s.width, s.height)
                        } else {
                            var o = new n.Polygon;
                            i.drawPolygon(o)
                        }
                        return i.renderable = !1, t.currentGraphics = i, t.clippingContainer = this.newContainer(), t.clippingContainer.mask = t.currentGraphics, i
                    }
                    updateGraphics(t, e) {
                        if (!this.spineData.useRectangleMask) return super.updateGraphics(t, e);
                        var i = t.currentGraphics.geometry,
                            s = i.graphicsData[0].shape;
                        if (s instanceof n.Polygon) {
                            var o = s.points,
                                a = e.worldVerticesLength;
                            o.length = a, e.computeWorldVertices(t, 0, a, o, 0, 2)
                        } else {
                            var r = [...e.vertices],
                                h = e.worldVerticesLength;
                            r.length = h, e.computeWorldVertices(t, 0, h, r, 0, 2);
                            var l = r[4] - r[0],
                                d = r[5] - r[1],
                                c = l > 0 ? r[0] : r[0] - Math.abs(l),
                                u = d > 0 ? r[1] : r[1] - Math.abs(d);
                            s.x = c, s.y = u, s.width = Math.abs(l), s.height = Math.abs(d)
                        }
                        i.invalidate()
                    }
                }
                class Pi extends(q(n.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "RiskFeature"), (0, o.Z)(this, "currentBet", 0), (0, o.Z)(this, "onPress", new(C())), this.visible = !1, this.cursor = "pointer", this.game.interaction.click(this, (() => {
                            this.interactive = !1, this.onPress.dispatch()
                        }))
                    }
                    updateCurrentBet(t) {
                        this.currentBet = t
                    }
                    showRiskButton(t) {
                        this.interactive = !0, this.visible = this.game.preferences.get("showRiskFeature", !0) && this.currentBet === t
                    }
                    hide() {
                        this.interactive = !1, this.visible = !1, this.currentBet = 0
                    }
                }

                function Ti(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function Ei(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Ti(Object(i), !0).forEach((function(e) {
                            (0, o.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Ti(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                var Fi = {
                    fontFamily: "Avenir-Bold",
                    fill: 16777215,
                    align: "center"
                };
                const Ri = {
                    Currency: {
                        default: Ei(Ei({}, Fi), {}, {
                            fill: 3152394,
                            fontSize: 27
                        })
                    },
                    DescriptionRisk: {
                        default: Ei(Ei({}, Fi), {}, {
                            fontSize: 40,
                            fill: 16446148,
                            wordWrap: !0,
                            wordWrapWidth: 820,
                            lineHeight: -20
                        }),
                        value: {
                            fill: [16773032, 16768299],
                            fillGradientStops: [.3, .6],
                            fontSize: 50,
                            dropShadowColor: 11491610,
                            dropShadow: !0,
                            dropShadowAlpha: .4,
                            dropShadowAngle: .7,
                            dropShadowDistance: 10
                        },
                        bet: {
                            fontFamily: "Avenir-Medium",
                            fill: 16446148,
                            fontSize: 35
                        }
                    },
                    DescriptionBuy: {
                        default: Ei(Ei({}, Fi), {}, {
                            fontSize: 42,
                            fill: 16446148,
                            wordWrap: !0,
                            wordWrapWidth: 820,
                            lineHeight: -20
                        }),
                        free: {
                            fill: [16773032, 16768299],
                            fillGradientStops: [.3, .6],
                            dropShadowColor: 11491610,
                            dropShadow: !0,
                            dropShadowAlpha: .4,
                            dropShadowAngle: .7,
                            dropShadowDistance: 10
                        },
                        bet: {
                            fontFamily: "Avenir-Regular",
                            fill: 16446148,
                            fontSize: 38
                        },
                        valueText: {
                            fontSize: 68
                        },
                        value: {
                            fill: [16773032, 16768299],
                            fillGradientStops: [.3, .6],
                            fontSize: 50,
                            dropShadowColor: 11491610,
                            dropShadow: !0,
                            dropShadowAlpha: .4,
                            dropShadowAngle: .7,
                            dropShadowDistance: 10
                        }
                    },
                    YesRisk: {
                        default: Ei(Ei({}, Fi), {}, {
                            fontSize: 35,
                            dropShadowColor: 1392477,
                            dropShadow: !0,
                            dropShadowAlpha: .4,
                            dropShadowAngle: .7,
                            dropShadowDistance: 6,
                            dropShadowBlur: 6,
                            stroke: 1392477,
                            strokeThickness: 4
                        })
                    },
                    NoRisk: {
                        default: Ei(Ei({}, Fi), {}, {
                            fontSize: 35,
                            dropShadowColor: 1380425,
                            dropShadow: !0,
                            dropShadowAlpha: .4,
                            dropShadowAngle: .7,
                            dropShadowDistance: 6,
                            dropShadowBlur: 6,
                            stroke: 1380425,
                            strokeThickness: 4,
                            align: "left"
                        })
                    },
                    buttonText: {
                        default: Ei(Ei({}, Fi), {}, {
                            align: "center",
                            dropShadow: !0,
                            dropShadowAngle: .7,
                            dropShadowColor: "#ac0000",
                            dropShadowDistance: 6,
                            fill: "#fdff5c",
                            fontSize: 40,
                            lineJoin: "round",
                            miterLimit: 0,
                            stroke: "#ac0000",
                            strokeThickness: 6,
                            trim: !0,
                            whiteSpace: "normal"
                        })
                    },
                    valueText: {
                        default: Ei(Ei({}, Fi), {}, {
                            fontSize: 35,
                            dropShadow: !0,
                            dropShadowAlpha: .3,
                            dropShadowAngle: .7,
                            dropShadowDistance: 7
                        })
                    }
                };
                class Zi extends Pi {
                    constructor() {
                        super(), (0, o.Z)(this, "riskButton", void 0), (0, o.Z)(this, "buyButton", void 0), (0, o.Z)(this, "valueText", void 0), this.riskButton = this.addChild(new Bi(this.game.loader.getAsset("assets/images/effects/riskBtn/skeleton.json"))), this.riskButton.play("animation", !0), this.riskButton.visible = !1, this.buyButton = this.addChild(new Bi(this.game.loader.getAsset("assets/images/effects/buyBtn/skeleton.json"))), this.buyButton.play("animation", !0), this.buyButton.cursor = "pointer", this.riskButton.cursor = "pointer", this.buyButton.hitArea = new n.Rectangle(60, 160, 300, 100), this.riskButton.hitArea = new n.Rectangle(60, 160, 300, 100), this.riskButton.visible = !1, this.valueText = this.addChild(new Mt("", Ri.valueText)), this.valueText.anchor.x = .5, this.valueText.position.set(190, 264), this.valueText.setTagStyle("currency", {
                            fontSize: 20
                        })
                    }
                    showRiskButton(t) {
                        if (super.showRiskButton(t), this.visible) {
                            var e = this.game.store.get("risk", !1),
                                i = this.game.store.get("buy", !1);
                            super.showRiskButton(t), this.riskButton.visible = e, this.buyButton.visible = i, this.valueText.text = this.game.i18n.t("RiskButton", e ? this.game.helpers.toMoney(this.game.wallet.totalCoins) : this.game.helpers.toMoney(i.bet), this.game.i18n.currency({
                                withBrace: !0
                            })), this.valueText.position.set(190, 264)
                        }
                    }
                    hide() {
                        super.hide(), this.riskButton.visible = !1, this.buyButton.visible = !1, this.valueText.text = ""
                    }
                    resize() {
                        this.game.device.portrait && !this.game.device.desktop ? this.position.set(680, 1090) : this.game.device.landscape && !this.game.device.desktop ? this.game.leftHand.enabled ? this.position.set(1494, 520) : this.position.set(0, 520) : this.position.set(1494, 620)
                    }
                }
                class Oi extends(q(n.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "RiskPopup"), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "content", void 0), this.overlay = this.addChild(new nt(.75)), this.content = this.addChild(new n.Container)
                    }
                    show() {
                        this.visible = !0, a.kX.fromTo(this.content, .3, {
                            pixi: {
                                scale: 0
                            }
                        }, {
                            pixi: {
                                scale: 1
                            }
                        }), a.kX.fromTo(this.content, .3, {
                            pixi: {
                                x: this.game.viewport.width / 2
                            }
                        }, {
                            pixi: {
                                x: 0
                            }
                        }), a.kX.fromTo(this.content, .3, {
                            pixi: {
                                y: this.game.viewport.height / 2
                            }
                        }, {
                            pixi: {
                                y: 0
                            }
                        })
                    }
                    hide() {
                        this.visible = !1
                    }
                }
                class Mi extends n.Container {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        super(), (0, o.Z)(this, "validBlendModes", [n.BLEND_MODES.NORMAL, n.BLEND_MODES.ADD, n.BLEND_MODES.MULTIPLY, n.BLEND_MODES.SCREEN]), this.needDepth = t
                    }
                    traversTree(t, e, i) {
                        if (this.isElementVisible(t))
                            if (0 !== i)
                                for (var s of t.children) this.traversTree(s, e, i - 1);
                            else
                                for (var o of t.children) this.isElementVisible(o) && e.push(o)
                    }
                    isElementVisible(t) {
                        return t.visible && t.worldAlpha > 0 && t.renderable
                    }
                    buildStack(t, e, i) {
                        for (var s of t.children) {
                            if (s._mask) return i.push(s), void e.push(s);
                            this.isElementVisible(s) && (void 0 !== s.blendMode && e.push(s), this.buildStack(s, e, i))
                        }
                    }
                    extractRoots() {
                        var t = [];
                        return this.traversTree(this, t, this.needDepth), [t, []]
                    }
                    _render(t) {
                        var [e] = this.extractRoots(), i = [], s = [];
                        for (var o of e) {
                            var n = [],
                                a = [];
                            this.buildStack(o, n, a), a.length > 0 ? (n.forEach(((t, e) => {
                                s.push({
                                    stack: t,
                                    index: e,
                                    isComplete: !1
                                })
                            })), s.sort(((t, e) => t.index - e.index))) : i.push({
                                stack: n,
                                index: 0,
                                isComplete: !1
                            })
                        }
                        for (var r = 0, h = this.validBlendModes[r], l = !0; l;) {
                            for (var d of (l = !1, i)) {
                                var {
                                    stack: c
                                } = d;
                                if (!d.isComplete) {
                                    var u = void 0;
                                    for (u = d.index; u < c.length; ++u) {
                                        var p = c[u];
                                        if (p.blendMode !== h) {
                                            l = !0;
                                            break
                                        }
                                        p._render(t)
                                    }
                                    d.index = u, u === c.length && (d.isComplete = !0)
                                }
                            }
                            r = (r + 1) % this.validBlendModes.length, h = this.validBlendModes[r]
                        }
                        for (var g of s) {
                            var {
                                stack: m
                            } = g;
                            m.render(t)
                        }
                    }
                    render(t) {
                        !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._mask || this.filters && this.filters.length ? this.renderAdvanced(t) : this._render(t))
                    }
                }
                var Ii = i(7236);
                var Di = Symbol("Multiplier"),
                    Wi = {
                        1: ["x1", "x2", "x3", "x4", "x5"],
                        2: ["x2", "x4", "x6", "x8", "x10"],
                        3: ["x3", "x6", "x9", "x12", "x15"],
                        4: ["x4", "x8", "x12", "x16", "x20"],
                        5: ["x5", "x10", "x15", "x20", "x25"]
                    };
                class Li extends(q(n.Container)) {
                    constructor(t) {
                        super(), (0, o.Z)(this, "id", Di), (0, o.Z)(this, "mul1", void 0), (0, o.Z)(this, "mul2", void 0), (0, o.Z)(this, "mul3", void 0), (0, o.Z)(this, "mul4", void 0), (0, o.Z)(this, "mul5", void 0), (0, o.Z)(this, "mulList", void 0), (0, o.Z)(this, "freeMulList", void 0), (0, o.Z)(this, "currentFreeMulList", void 0), (0, o.Z)(this, "mulArr", void 0), (0, o.Z)(this, "currentMul", void 0), (0, o.Z)(this, "animation", void 0), (0, o.Z)(this, "positionPortraitX", 230), this.currentMul = t, this.mulList = ["x1", "x2", "x3", "x4", "x5"], this.mulArr = [], this.currentFreeMulList = [], this.mul1 = this.addChild(new n.Sprite(this.game.loader.getAsset("assets/images/multiplier/texture.json", "x1"))), this.mul1.anchor.set(.5), this.mul2 = this.addChild(new n.Sprite(this.game.loader.getAsset("assets/images/multiplier/texture.json", "x2"))), this.mul2.anchor.set(.5), this.mul3 = this.addChild(new n.Sprite(this.game.loader.getAsset("assets/images/multiplier/texture.json", "x3"))), this.mul3.anchor.set(.5), this.mul4 = this.addChild(new n.Sprite(this.game.loader.getAsset("assets/images/multiplier/texture.json", "x4"))), this.mul4.anchor.set(.5), this.mul5 = this.addChild(new n.Sprite(this.game.loader.getAsset("assets/images/multiplier/texture.json", "x5"))), this.mul5.anchor.set(.5), this.mulArr.push(this.mul1, this.mul2, this.mul3, this.mul4, this.mul5), this.animation = this.addChild(new Bi(this.game.loader.getAsset("assets/images/effects/multi/skeleton.json"))), this.animation.alpha = 0, this.setCurrentFree(this.game.store.get("free:multiplier", 1)), this.updateValue(t)
                    }
                    setCurrentFree(t) {
                        this.currentFreeMulList = Wi[t]
                    }
                    updateValue(t) {
                        var e = ti.isFreespin() || "freespin" === this.game.store.get("reward:feature");
                        this.mulArr.forEach(((t, i) => {
                            t.texture = this.game.loader.getAsset("assets/images/multiplier/texture.json", e && !this.game.store.get("free:isEnd") ? this.currentFreeMulList[i] : this.mulList[i])
                        }));
                        var i = e && !this.game.store.get("free:isEnd") ? this.currentFreeMulList : this.mulList,
                            s = i.indexOf("x".concat(t)),
                            o = this.mulArr[s];
                        o.texture = this.game.loader.getAsset("assets/images/multiplier/texture.json", "".concat(i[s], "active")), this.currentMul !== t && 1 === this.alpha && (this.animation.alpha = 1, this.animation.position.set(o.x - 60, o.y - 40), this.animation.play("win"), this.game.action.emit("sound:multiplierChange")), this.currentMul = t
                    }
                    hide() {
                        this.alpha = 0
                    }
                    show() {
                        this.alpha = 1
                    }
                    resize() {
                        this.mul1.position.set(0, 320), this.mul2.position.set(-6, 240), this.mul3.position.set(-11, 160), this.mul4.position.set(-16, 80), this.mul5.position.set(-16, 0), this.game.device.desktop || this.game.device.landscape ? (this.position.set(462, 370), this.scale.set(1)) : (this.position.set(112, 539), this.scale.set(.95))
                    }
                }
                var _i = new Mi;
                class Ni extends Oi {
                    constructor() {
                        super(), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "backgroundAnimation", void 0), (0, o.Z)(this, "descriptionRisk", void 0), (0, o.Z)(this, "descriptionBuy", void 0), (0, o.Z)(this, "yesButton", void 0), (0, o.Z)(this, "yesButtonText", void 0), (0, o.Z)(this, "noButton", void 0), (0, o.Z)(this, "noButtonText", void 0), (0, o.Z)(this, "enterKey", void 0), (0, o.Z)(this, "escKey", void 0), (0, o.Z)(this, "resolver", void 0), super.hide(), this.resolver = new(C()), this.background = this.content.addChild(new n.Sprite(this.game.loader.getAsset("risk", "riskBg"))), this.background.anchor.set(.5), this.background.addChild(_i), this.backgroundAnimation = _i.addChild(new Bi(this.game.loader.getAsset("assets/images/effects/riskBuyBg/skeleton.json"))), this.backgroundAnimation.play("animation", !0), this.backgroundAnimation.position.set(-510, -410), this.descriptionRisk = this.background.addChild(new Ii.Z("", Ri.DescriptionRisk)), this.descriptionRisk.anchor.x = .5, this.descriptionRisk.position.set(-413, -170), this.descriptionBuy = this.background.addChild(new Ii.Z("", Ri.DescriptionBuy)), this.descriptionBuy.anchor.x = .5, this.descriptionBuy.position.set(-417, -170), this.noButton = this.background.addChild(new n.Sprite(this.game.loader.getAsset("risk", "noRiskBtn"))), this.noButton.position.set(-410, 130), this.noButton.interactive = !0, this.noButton.cursor = "pointer", this.game.interaction.click(this.noButton, this.noClick, this), this.noButton.interactive = !0, this.noButtonText = this.noButton.addChild(new Mt(this.game.i18n.t("RiskPopupNoPrimary"), Ri.NoRisk)), this.noButtonText.anchor.set(.5), this.noButtonText.position.set(this.noButton.width / 2, this.noButton.height / 2),
                            function(t, e) {
                                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                    s = e.scale.x,
                                    o = e.scale.y,
                                    n = t.width - 2 * i,
                                    a = t.height - 2 * i,
                                    r = n - Math.round(e.width),
                                    h = a - Math.round(e.height);
                                r < 0 && (s = n / (e.width * s)), h < 0 && (o = a / (e.height * o)), (s <= 0 || o <= 0) && (e.visible = !1), e.scale.set(Math.min(s, o))
                            }(this.noButton, this.noButtonText, 35), this.yesButton = this.background.addChild(new n.Sprite(this.game.loader.getAsset("risk", "riskBtn"))), this.yesButton.position.set(40, 130), this.yesButton.interactive = !0, this.yesButton.cursor = "pointer", this.game.interaction.click(this.yesButton, this.yesClick, this), this.yesButtonText = this.yesButton.addChild(new Mt(this.game.i18n.t("RiskPopupYesRisk"), Ri.YesRisk)), this.yesButtonText.anchor.set(.5), this.yesButtonText.position.set(this.yesButton.width / 2, this.yesButton.height / 2), this.escKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Escape), this.escKey.onPress.add((() => this.noClick())), this.enterKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Enter), this.enterKey.onPress.add((() => this.yesClick()))
                    }
                    show() {
                        if (this.game.store.get("isRiskNBuy")) return super.show(), new Promise((t => {
                            this.resolver.once(t);
                            var e = this.game.store.get("risk", !1),
                                i = this.game.store.get("buy", !1),
                                s = Wi[e ? e.multiplier : i.multiplier],
                                o = s[s.length - 1].toUpperCase();
                            e ? (this.descriptionRisk.renderable = !0, this.descriptionBuy.renderable = !1, this.descriptionRisk.text = this.game.i18n.t("RiskPopupDescriptionRisk", this.game.helpers.toMoney(this.game.wallet.totalCoins), this.game.i18n.currency(), e.freespins, o, this.game.helpers.toMoney(this.game.betLevel.toCoins()), this.game.i18n.currency()), this.background.texture = this.game.loader.getAsset("risk", "riskBg"), this.noButton.texture = this.game.loader.getAsset("risk", "noRiskBtn"), this.yesButton.texture = this.game.loader.getAsset("risk", "riskBtn"), this.yesButtonText.text = this.game.i18n.t("RiskPopupYesRisk")) : (this.descriptionRisk.renderable = !1, this.descriptionBuy.renderable = !0, this.descriptionBuy.text = this.game.i18n.t("RiskPopupDescriptionBuy", i.freespins, o, this.game.helpers.toMoney(this.game.betLevel.toCoins()), this.game.i18n.currency(), this.game.helpers.toMoney(i.bet), this.game.i18n.currency()), this.background.texture = this.game.loader.getAsset("risk", "buyBg"), this.noButton.texture = this.game.loader.getAsset("risk", "noBuyBtn"), this.yesButton.texture = this.game.loader.getAsset("risk", "buyBtn"), this.yesButtonText.text = this.game.i18n.t("RiskPopupYesBuy"))
                        }))
                    }
                    hideRiskPopup(t) {
                        super.hide(), this.resolver.dispatch(t)
                    }
                    yesClick() {
                        this.hideRiskPopup(!0)
                    }
                    noClick() {
                        this.hideRiskPopup(!1)
                    }
                    resize() {
                        this.background.position.set(this.game.viewport.width / 2, this.game.viewport.height / 2)
                    }
                }
                var Ui = Symbol("WaysBadge");
                class ji extends(q(n.Container)) {
                    constructor(t) {
                        super(), (0, o.Z)(this, "id", Ui), (0, o.Z)(this, "currentWays", void 0), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "value", void 0), this.currentWays = t, this.background = this.addChild(new n.Sprite(this.game.loader.getAsset("assets/images/labels/rockways.png"))), this.value = this.addChild(new n.BitmapText("", {
                            fontName: "RockwaysFont"
                        })), this.value.text = "".concat(t), this.value.anchor.set(.5), this.value.position.set(122.5, -45)
                    }
                    updateValue(t) {
                        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        if (this.alpha = 1, t !== this.currentWays && t) {
                            this.currentWays = t, this.value.text = "".concat(t);
                            var i = this.value.scale.x;
                            e && a.kX.fromTo(this.value, .2, {
                                pixi: {
                                    scale: i
                                }
                            }, {
                                pixi: {
                                    scale: i + .04
                                },
                                yoyo: !0,
                                repeat: 1
                            })
                        }
                    }
                    hide() {
                        this.alpha = 0
                    }
                    resize() {
                        this.game.device.desktop || this.game.device.landscape ? (this.value.scale.set(1), this.position.set(846, 18)) : (this.value.scale.set(.9), this.position.set(448, 227))
                    }
                }
                class zi extends ne {
                    get dropCoins() {
                        var t, e;
                        return null !== (t = null === (e = this.server.response) || void 0 === e ? void 0 : e.dropWin) && void 0 !== t ? t : 0
                    }
                    get scatterCoins() {
                        var t, e;
                        return (null !== (t = null === (e = this.server.response) || void 0 === e ? void 0 : e.scatters) && void 0 !== t ? t : []).reduce(((t, e) => {
                            var i;
                            return t + parseInt(null !== (i = e.win) && void 0 !== i ? i : 0)
                        }), 0)
                    }
                    get bonusCoins() {
                        var t, e;
                        return null !== (t = null === (e = this.server.response) || void 0 === e ? void 0 : e.bonus.win) && void 0 !== t ? t : 0
                    }
                    get preSpinCoins() {
                        var t, e;
                        return null !== (t = null === (e = this.server.response) || void 0 === e ? void 0 : e.preSpin.win) && void 0 !== t ? t : 0
                    }
                    get preSpinTotalCoins() {
                        var t, e;
                        return null !== (t = null === (e = this.server.response) || void 0 === e ? void 0 : e.preSpin.totalWin) && void 0 !== t ? t : 0
                    }
                }
                var Vi = new Mi,
                    Gi = Symbol("BackgroundViewToken");
                class Hi extends(q(n.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "id", Gi), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "backgroundLTextureFree", void 0), (0, o.Z)(this, "backgroundLTextureNormal", void 0), (0, o.Z)(this, "backgroundPTextureFree", void 0), (0, o.Z)(this, "backgroundPTextureNormal", void 0), (0, o.Z)(this, "backgroundTextureLandscape", void 0), (0, o.Z)(this, "backgroundTexturePortrait", void 0), (0, o.Z)(this, "featureBackground", void 0), (0, o.Z)(this, "logo", void 0), (0, o.Z)(this, "bglnAnimation", void 0), (0, o.Z)(this, "bglfAnimation", void 0), this.backgroundLTextureNormal = this.game.loader.getAsset("bgln"), this.backgroundLTextureFree = this.game.loader.getAsset("bglf"), this.backgroundPTextureNormal = this.game.loader.getAsset("bgpn"), this.backgroundPTextureFree = this.game.loader.getAsset("bgpf"), this.backgroundTextureLandscape = this.backgroundLTextureNormal, this.backgroundTexturePortrait = this.backgroundPTextureNormal, this.background = new n.Sprite(this.backgroundTextureLandscape), this.featureBackground = new n.Sprite(this.backgroundLTextureFree), this.featureBackground.alpha = 0, this.logo = new n.Sprite(this.game.loader.getAsset("logo")), this.logo.alpha = 0, this.bglnAnimation = new Bi(this.game.loader.getAsset("assets/images/effects/bgln/skeleton.json")), this.bglnAnimation.play("animation", !0), this.bglfAnimation = new Bi(this.game.loader.getAsset("assets/images/effects/bglf/skeleton.json")), this.bglfAnimation.play("animation", !0), this.bglfAnimation.alpha = 0, this.addChild(this.background), this.addChild(this.featureBackground), this.addChild(Vi), Vi.addChild(this.bglnAnimation), Vi.addChild(this.bglfAnimation), this.addChild(this.logo), this.setupEvents()
                    }
                    setupEvents() {
                        this.game.action.on("state:setup_enter", (() => {
                            this.game.store.get("free:isFree", !1) && (this.featureBackground.alpha = 1, this.logo.alpha = 0, this.bglnAnimation.alpha = 0, this.bglfAnimation.alpha = 1)
                        })), this.game.action.on("free:select_start", (() => {
                            0 === this.featureBackground.alpha && a.kX.fromTo(this.featureBackground, .5, {
                                pixi: {
                                    alpha: 0
                                }
                            }, {
                                pixi: {
                                    alpha: 1
                                }
                            }), this.logo.alpha = 1, this.bglnAnimation.alpha = 0, this.bglfAnimation.alpha = 1
                        })), this.game.action.on("free:select_stop", (() => {
                            a.kX.fromTo(this.featureBackground, .5, {
                                pixi: {
                                    alpha: 1
                                }
                            }, {
                                pixi: {
                                    alpha: 0
                                }
                            }), this.logo.alpha = 1, this.bglnAnimation.alpha = 1, this.bglfAnimation.alpha = 0
                        }))
                    }
                    beforeFreeSpinsPopup() {
                        this.logo.alpha = 0
                    }
                    resize() {
                        this.game.device.portrait && !this.game.device.desktop ? (this.background.texture = this.backgroundTexturePortrait, this.background.anchor.set(.5), this.background.width = 2 * this.game.viewport.paddingX + this.game.viewport.width, this.background.height = 2 * this.game.viewport.paddingY + this.game.viewport.height, this.background.position.set(this.game.viewport.width / 2, this.game.viewport.height / 2 + this.game.viewport.paddingY), this.featureBackground.texture = this.backgroundPTextureFree, this.featureBackground.anchor.set(0), this.featureBackground.width = 2 * this.game.viewport.paddingX + this.game.viewport.width, this.featureBackground.height = 2 * this.game.viewport.paddingY + this.game.viewport.height, this.featureBackground.position.set(-this.game.viewport.paddingX, 0), this.logo.position.set((this.game.viewport.width - this.logo.width) / 2, 10), this.bglnAnimation.visible = !1, this.bglfAnimation.visible = !1) : (this.background.texture = this.backgroundTextureLandscape, this.background.anchor.set(.5), this.background.width = this.game.viewport.width, this.background.height = this.game.viewport.height, this.background.position.set(this.game.viewport.width / 2, this.game.viewport.height / 2), this.featureBackground.texture = this.backgroundLTextureFree, this.featureBackground.anchor.set(.5), this.featureBackground.width = this.game.viewport.width, this.featureBackground.height = this.game.viewport.height, this.featureBackground.position.set(this.game.viewport.width / 2, this.game.viewport.height / 2), this.logo.position.set(0), this.bglnAnimation.visible = !0, this.bglfAnimation.visible = !0)
                    }
                }
                const Qi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////1fUNLcAAAAWdFJOUwDPn4C/30AgEO+QcGCgf69fMI9vULAqgdwXAAACbklEQVRYw+1YyZaDIBCUHVxiTDL8/6eOTlzYQ6OZE3XKy8MSmurqbpumoqKioqIiB5I/MWJaa4UoecnriDlV2gK9i0s2fHN438Dnyfsg8YLHOXJBdRzsfibISidxK2Z+WjyzOGbYL0OFQbkZtLTfSORrYEZQirj7g5g4Su4PclYi8v0GSeDpgxwVcK8PsymsnWEXIZx6fCdedFNk4+7gml62PSQWdNtVwEMiesKTCzZu/AVDbFdu/gWvRasTAh7JTQQO3fak9OhfjWgxbt13rhJsIdJ4hHXuqkGsIsmkHoJn7MMippCIPMNqHcM3xgEREZttUu/kf47qvFGqfI0cpta58cDL6UkwIjnBNk3alMOiYL6kHzI1OmPVCJ9/phNeWDXE/p810roxoSAFTTK7aFspjd+nJ26aG0hQP5yl3LwB/jYk5bpT8JjxmuWUJ75SCvN9zhFnJLoH5O2jO7IIb3poXQfZkBK3H7x19XJhe69wJFMbPGK6Jjn66yM30FjNlfjgpkJMW784w05y7eWpqT+SkTUqJGqN8B+QbS9djjo8I5K2cCbj6jpvsZ26n6ppZ0WUmXb04yfZHVKVqEWNTTen3urcoq4cIUxMU2HUILs/bSFdJQHVaTnEmrfQYmCdhnRPw4kG91MR+4eOKz2scELgQ8HulyluHO++czquOLfE0HbP88tRxFssI0uLRpnQ5HlM16iAWqLoWGuO7UUTr8GtFb5P+6xAgSYd4h79aZfZvQcpljdJj+jqdWb+Zwlmeu6rhYxuXHXn/WQIfblQ5BLrkr3zwUXRC6c5ycmIlt0zNj75F7y2oqKioqIChF9HhmS5mMSV/gAAAABJRU5ErkJggg==";
                class Yi extends it {
                    constructor() {
                        super(Qi), (0, o.Z)(this, "name", "ButtonAutoPlay"), (0, o.Z)(this, "startTexture", void 0), (0, o.Z)(this, "stopTexture", void 0), (0, o.Z)(this, "counts", void 0), (0, o.Z)(this, "countsInfinity", void 0), (0, o.Z)(this, "enterKey", void 0), (0, o.Z)(this, "onEnterClick", void 0), this.startTexture = n.Texture.from(Qi), this.stopTexture = n.Texture.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTP////////////////////////////////////////////////////////////////////////////////////VtkI8AAAAVdFJOUwCAz2Dfv0AgEO9fkH9wn6CvMI9vUD+hasQAAAIqSURBVFjD7VhJkoMwDIyNVwhbEv//qwM1LMYbkoGb+5SaMj1CbrUkXq+CgoKCggIIlPh2lBljNOXkp+4jFlybA3gtbwn47fD+o7tOXgWJZ3yukUtu4mD1lSRrk8Q7m/l74JnEMeH4z2hmUt4WLa9WEvXrmZWULO5qJyaOkqudnOWIfLtBEnh6J6cZ3MvDbAxrp99EiKce/gsvGhRZuVu8puew+8SBdr0KfEpkRUTywMrdPWCIzcItHvBaujgh4hFoIQhs2KM2A/BqFgk2GGkA1SoXkbwwkQhUzQqM39lqrXXUpwUiI3Kl4V7Nb3Zl37iGa2Sn2QvYbQF+RiDJtk1anlArOWHRiJh+KsiNL36ZppYa09DUMaufJHXjN8sE9cc5KlLUrcdMIT3r2J7C1M4rTkhMD9SLo01do3D+nBK3n7wmKb4m9IonPcnRX/S2DsOVPHFTKcd1XpxwVjK2/gigarR323GNtRB1uK3cKAj1etgqXUA3bd332O8rUGQ1pivx4CA2B1j5p6FNXaMaXoOZKgmqT6s+NryFDiP7NGZ66i8MuLA+/ejElV5WBCH4pWDzyxR3F5++IRNXnFt12HHP88tBxkcspzLRq0xo89y3a5pBrWh0rbXX9qyN1+I2uqvHbVfgSJMOcQ/+tsuOJkiy5U3SK7r+Xdn/WYKZX/tqoaKB6/a6n/ShLxea3GJdqnI+uGh+4zanBBnoHD1jw1c84LUFBQUFBQUo/AH9SmgY+OEdcwAAAABJRU5ErkJggg=="), this.onEnterClick = new(C()), this.counts = this.addChild(new n.Text("", {
                            fontFamily: "Avenir-Bold",
                            fontSize: 28,
                            fill: this.game.config.get("colors.primary")
                        })), this.counts.anchor.set(1, .5), this.counts.position.set(-60, 0), this.countsInfinity = this.addChild(new n.Sprite(this.game.loader.getAsset("assets/autoplay-infinity-count.png"))), this.countsInfinity.anchor.set(.5), this.countsInfinity.position.set(-80, 0), this.countsInfinity.visible = !1, this.enterKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Enter), this.enterKey.onPress.add((() => this.onEnterClick.dispatch()))
                    }
                    enable() {
                        super.enable(), this.enterKey.enable()
                    }
                    disable() {
                        super.disable(), this.enterKey.disable()
                    }
                    setActive(t) {
                        var {
                            config: e
                        } = this.game;
                        this.countsInfinity.tint = t ? e.get("colors.primary") : e.get("colors.white"), this.changeColor(t ? e.get("colors.primary") : e.get("colors.white")), this.setBackgroundAlpha(t ? 1 : .2), this.setBackgroundColor(t ? e.get("colors.secondary") : e.get("colors.white"))
                    }
                    setCount(t) {
                        t === 1 / 0 ? (this.counts.visible = !1, this.countsInfinity.visible = !0) : (this.countsInfinity.visible = !1, this.counts.text = t > -1 ? t : "", this.counts.visible = !0)
                    }
                    start(t) {
                        this.setCount(t), this.changeIcon(this.stopTexture), this.setActive(!0)
                    }
                    stop() {
                        this.disable(), this.setCount(-1), this.changeIcon(this.startTexture), this.setActive(!1)
                    }
                    resize() {
                        this.scale.set(this.game.device.desktop ? 1 : 1.6), this.game.device.desktop || (this.game.device.landscape ? this.game.leftHand.enabled ? (this.counts.anchor.set(0, .5), this.counts.position.set(60, 0), this.countsInfinity.anchor.set(0, .5), this.countsInfinity.position.set(60, 0)) : (this.counts.anchor.set(1, .5), this.counts.position.set(-60, 0), this.countsInfinity.anchor.set(1, .5), this.countsInfinity.position.set(-60, 0)) : (this.counts.anchor.set(.5, 1), this.counts.position.set(0, -50), this.countsInfinity.anchor.set(.5, 1), this.countsInfinity.position.set(0, -50)))
                    }
                }
                class Xi extends it {
                    constructor() {
                        super("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAyCAMAAADLPWP6AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABjUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMgBvGIAAAAgdFJOUwDvnzC/EGAg34B/j3DeX0D+vqAhrxFxzq5Q7jHPQQGekWo0dwAAAS9JREFUSMe9lm13gyAMhQWhhFarzq5r127L//+VO8fTF1KBJfmwfATv4fHmGmwaSYWhbaTVOkQ01ssOMrgUSGQe8FZRoNreRWgEfPiswFaBRrVNREbDh5arOiQi4AJu0qP2XD7Q8L39G59X8e00fEHDR6LkVFFS8XXco5yGb1PmGw4Abv9nlLrc+159PUouD2ElfE+IWIsS5WuTnWM5Si/+DWlDLsVWhUobYS5EKdb6iPD+WI/p8sqoYUxl7vu2PGN9AHbpPu4yCNnBHonsuGoV5NN2IrKv1ygVvg//karMTKNUvHhCT41k8C0J+SRGci8QMvOQw5cxksO3yqrggpvEfIv/vZhv7T/7Am5HKV/Gf+DOv4iq3wor5qNB7iV/Zv60WDJOoRHV2U7Tz7n6yC/Xt2DiEf0QXwAAAABJRU5ErkJggg==", 115), (0, o.Z)(this, "name", "ButtonAutoPlayAccept"), this.setBackgroundAlpha(1), this.setBackgroundColor(this.game.config.get("colors.primary")), this.show(!1)
                    }
                    resize() {
                        this.scale.set(this.game.device.desktop ? 1 : 2)
                    }
                }
                class Ki extends it {
                    constructor() {
                        super("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTP///////////////////////////////////////////////////////////////////////////4/JsPUAAAATdFJOUwCQEIBgvyCfQN+gX1CvMH+wz28jjNZzAAAAj0lEQVRYw+3VSxLDIAwEUYMNFonz9f3vmivMUFZVFv0O0AuQYFkAAACABDUkE+U+TsmodrqcotVONzXd7PRNTe92OtT007/HY5cEu4TLRVFmr0yMdVdXJv5p0ROfp1VNF/+TUb+CPnGPx6ao7BIu9x2Kz8svb+o23u30Q02/89KJz5N/IOqD3Rh4AAAAZPgBCZoyk9uDJXUAAAAASUVORK5CYII=", 90, !1), (0, o.Z)(this, "name", "ButtonMenu")
                    }
                    resize() {
                        this.scale.set(this.game.device.desktop ? 1 : 1.6)
                    }
                }
                class qi extends it {
                    constructor() {
                        super("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////wV68vgAAAAXdFJOUwDvzzBAv2Ag3xCAn6+Qf6BvcFBfj0+w/1/ZxwAAAdhJREFUWMPtl8lygzAQRNG+m8VJ9P9/Ghkc1gEEkg+p0ju5TNEMrR4xqqpCoVAoFAqF/4DizjLbiOzCokZ+gJHMytJPfGWVxn4OVh+TzqpNl9LeZCybo6V2+6mFDCTlhHBtjG7oX67dQlretls9JgfsEyrc3lR+LK2Vj6EJW5lqt1hlrRdXQ1Om2b1esbf4YAufLkpOVVp/TFKDK3rRPM9LPvtdTC8uLPDAKDv8AfKxdsV7FO0584f0li/XGYmruwXSHaWd3jwKMbzqehYnXW9yKzTyJ9CYHpytkCVCiL2cD/VTwmLLBiRw34g1KP1TVd3w6zTfHC7ulQoLXQjFNpGN6fbiHKwCOxT/PZGfSbd+X5seruOpNFzaOy0sLSJi7/7QFYdlxzSNInCI2WHZMvIDC99N5mUjTeqLLdPTgY67qhrfx71iTEdxRuP3PqhBkKq4a3hAjx9i2mjd8GsDJq23jut881LjGGNyXnb4yxjjdJdlLFPw5nHB3QM0HJiEQVhRzikRajvtpWqP80K7Nzv4u4bj+Y4Kfwn4Ten5bKfg3fb7pjRbDRp6b965TrdWoS9TEA65tjjxHDYbYt6zl6JiTA9Ja5ounECZcU3mY2KhUCgUCoXCZ/kFkq5xr6AJFIIAAAAASUVORK5CYII="), (0, o.Z)(this, "name", "ButtonQuickSpin")
                    }
                    setActive(t) {
                        this.setBackgroundAlpha(t ? 1 : .2), this.setBackgroundColor(this.game.config.get("colors.".concat(t ? "secondary" : "white"))), this.changeColor(this.game.config.get("colors.".concat(t ? "primary" : "white")))
                    }
                    resize() {
                        this.scale.set(this.game.device.desktop ? 1 : 1.6)
                    }
                }
                const Ji = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTP////////////////////////////////////////////////////////////////////////////////////VtkI8AAAAVdFJOUwBwX1BAIIC/3+8QoDCvf5/PYJCwj2OlcKoAAAFKSURBVFjD7ZfRkoMgDEWxAgIqVXfz/7+6YK10ikop4WFncp5oOnNqrwEjYwRBEARBEEQFxKi1rWNW4LhVM8MPvnnQqxm66Ju2xTHH6l+Ae4m5fZpjtS8WXPcN4FTduaIyCOZYPfiq/NJs4UrNFlfVCOagtt3W4saXeYbQ2Ek9gEN1E3xdXrubN2Ok7t16eix5XiIWEmr+EoPOSmRKqdcYtg+jWzYfqyGpXi/b7LnfEdVM7TG0IXccdb/HIPyGxFT7GJZdDZjqOST8j9SyXiChmwfs2xiajx+eiChbRmadTyqpHoMvb6PLlHp+GUryjqePDtXt1rWZjxnRT5dq/7dE+JXv5gV5nHUzbiOCyH2AnbnjJuuzuvrCHalF2ZDZpEacgsFsPlfr0sl4Ph0nl+chVWMI5oyhuDtWgXovHH6DgpaMIAiCIAiCqMUf3ndCqqLsR7MAAAAASUVORK5CYII=",
                    $i = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAACXBAMAAADT+qdUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAqUExURUdwTP///////////////////////////////////////////////////4sGkswAAAANdFJOUwDfIBC/z4BfYP7ef86PIFKAAAAASklEQVQ4y2NgsPa9WsDAwCR79+5FBQbGu0AgzNALoq4xxIKoKwx3wWCUGqVGqWFG+YLIqwy5IOo6gxWIEmBgWgkuCxg4Tl5JZgAAzqb+eiBGXckAAAAASUVORK5CYII=";
                class ts extends n.Sprite {
                    constructor(t, e) {
                        super(t), (0, o.Z)(this, "draggable", !1), this.padding = e, this.anchor.set(.5), this.interactive = !0
                    }
                    dragStart() {
                        this.draggable = !0
                    }
                    dragEnd() {
                        this.draggable = !1
                    }
                }
                class es extends n.Container {
                    constructor() {
                        super(), this.interactive = !0
                    }
                }
                class is extends n.Sprite {
                    constructor(t, e) {
                        super(t), this.tint = e
                    }
                }
                class ss extends n.Graphics {
                    constructor(t, e, i, s) {
                        super(), this.beginFill(0), this.drawRect(t, e, i, s), this.endFill()
                    }
                }
                class os extends(q(n.Container)) {
                    constructor(t, e, i) {
                        super(), (0, o.Z)(this, "progress", void 0), (0, o.Z)(this, "minPosition", void 0), (0, o.Z)(this, "maxPosition", void 0), (0, o.Z)(this, "onChange", void 0), this.track = t, this.background = e, this.foreground = i, this.progress = new es, this.progress.mask = this.progress.addChild(new ss(0, 15, this.background.width, this.background.height - 25)), this.minPosition = new n.Point(0, this.track.padding), this.maxPosition = new n.Point(0, this.background.height - this.track.padding), this.onChange = new(C()), this.progress.addChild(this.background), this.progress.addChild(this.foreground), this.addChild(this.progress), this.addChild(this.track), this.track.x = this.progress.width / 2, this.handleProgress(), this.handleTrack()
                    }
                    handleProgress() {
                        this.game.interaction.click(this.progress, (t => {
                            var {
                                data: e
                            } = t;
                            this.trackPosition(e.getLocalPosition(this.progress))
                        }))
                    }
                    handleTrack() {
                        this.game.interaction.down(this.track, (() => {
                            this.track.dragStart()
                        })), this.game.interaction.move(this.track, (t => {
                            var {
                                data: e
                            } = t;
                            this.track.draggable && this.trackPosition(e.getLocalPosition(this.progress))
                        }))
                    }
                    getPosition(t) {
                        return 0 | Math.max(this.minPosition.y, Math.min(this.maxPosition.y, t.y))
                    }
                    setPosition(t) {
                        this.track.y = t, this.foreground.y = t
                    }
                    trackPosition(t) {
                        var e = this.getPosition(t);
                        this.setPosition(e), this.onChange.dispatch(e)
                    }
                    stopTrack() {
                        this.track.dragEnd()
                    }
                    get draggable() {
                        return this.track.draggable
                    }
                }
                class ns extends(q(n.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "slider", void 0), (0, o.Z)(this, "onChangeVolume", void 0), this.background = n.Sprite.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAD9CAMAAAAlKrH0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////1/RXMoAAAAddFJOUwCP794Q3zBAIP6/7pCfz75Qr3BvgKCwX2DOrn+eA25H2wAAAetJREFUeNrt3MdawzAQBGDLsmLJPYUUYN//NXELqW7y5DZz5PB/kjYELjtBMJYo3udbY6RNWCTZPo4Cz8RZIW9SZPFyy/6EMhiT22UHS2Qi2xiINUnmnTBSMjNzrlyFMjvmBDtaFzX6ubFGFsaMXHizWKu9zaAWikfCDVIb8ny195414p3XeUQrtNp7/rwoWRX1qJ1lZSrUw/XjuL/ul6zO3XWtAHL7AkwQXPL/dSmCPN4WwyXAl2tiUWPtcmg5g+JC4CCuw8hwXFZzBY4r6m8mASZCPl3zeDskt0NOov43A/Prf80ROdj6b0YQYjmBhhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSM3wRmkFmK5ArXH3CXBbR43ydAbquD9WfB2L3LjtcBvRoP3tnEbtKZdUj+guPwTG/mo2R4/02aAOV4ZQMsWLKyS4zbWvjAkXavphxKSai13+mQDSRDpVVd96dOxGvVwfbeM9zjS9101KVLz9dLhnh+P99ObkU4jjZjCfeOSW4I5NdXUdV5wwLSaUcqVO9TRerCcAbpyQTnXt8Nh3ZX1oOjSg/VoSVMX557M+gelin1716J4r8pL6tpo/f071eH2B6lgKFKZ54AhAAAAAElFTkSuQmCC"), this.background.alpha = .2;
                        var t = new ts(n.Texture.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAMAAABgOjJdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFQUExURUdwTAAAAP39/QAAAPj4+AAAAAAAAAAAAAAAAAAAAH9/f9jY2AAAAAAAAAAAAAAAABUVFQAAAFVVVQ8PDwAAAOLi4vz8/DMzM+Tk5AAAAAAAACoqKn19fYGBgXZ2dvz8/AsLC+np6f///wcHBxISEgAAAPv7+9zc3Pb29unp6ePj48fHx/n5+fj4+PX19c7OzvPz8+Xl5fn5+bu7u/Pz8+np6V5eXpeXl4ODg/z8/AAAABMTE+bm5vr6+qqqqgAAAMPDwwAAAO7u7gAAAFhYWN/f3+7u7lFRUePj4/X19V5eXgAAAAwMDAAAAAAAAFZWVuHh4ff39wAAAN/f3/r6+pGRkUxMTBwcHOnp6fn5+dTU1Pf3987Ozu/v7/j4+AgICPv7+/f39w4ODsPDwwAAAPHx8fb29gAAAPz8/PLy8gAAAA8PDwUFBREREQUFBf///7KU/iMAAABvdFJOUwAD4AblEgwBAgUCFAQHCBQMDQMRDyThBaEWGQZBP0exFr8BJA4okiWVJCUpk5SmFUNHw1fIri4bPsEODWqiYCArFcwRLqR4MrO2KxcUIiMyo7UkgHI4OQkj5HNjirrUHeLmEn0eutYQ0dorECwPKxinWNoAAAFMSURBVDjLfdTVlsIwEAbglEoSqKCL2wLr7s66u7u75f3vNoXlUEqS/3a+kzTpTABwBiJJkhCEgBmIfMdZDyHkPXt1LjHqwYFJUs9su9cNfD2kMW2+hr1gp4e444k4CIw0A0JaumB9CxagpL8mcC9hpyNaBaib8DKIKkLu44oh2f4U7zzhZ9xeBM8IxCqm4mxDIA4MCGDgViDutVaAwkSUIgIoJBRvVDwKhRqka1wIwGsIARi+EYiXIj2LdiQQl/QswNwUiBPTvtOFES4Yjev2r50e5oqJqUq7yvEYB8QSRrU/tGWFCZQx/3/H60tpFlHSql5rw+h2qpkoKcuot7Jhre27wMqeJTvHIamWM+uO+uLcjppsHCldSxxmnvIftPqQvz7d3fJj9+AiOZC7K5R+vz9LhedcALNmG2FTC6vq14/fxF4AeC9EsOn5+ANrFSqZBMENigAAAABJRU5ErkJggg=="), 14);
                        t.width = 33, t.height = 33;
                        var e = new is(n.Texture.from($i), 0);
                        e.width = 12, e.height = 151;
                        var i = new is(n.Texture.from($i), 4914792);
                        i.width = 12, i.height = 151, this.onChangeVolume = new(C()), this.slider = new os(t, e, i), this.slider.position.set(33, 30), this.slider.onChange.add((t => this.onChangeVolume.dispatch(this.convertToVolume(t)))), this.interactive = !0, this.hitArea = new n.Rectangle(0, 0, 78, 200), this.game.interaction.up(this, (() => {
                            this.cursor = "pointer", this.slider.stopTrack()
                        })), this.game.interaction.out(this, (() => this.slider.stopTrack())), this.game.interaction.move(this, (() => {
                            this.cursor = this.slider.draggable ? "grabbing" : "pointer"
                        })), this.addChild(this.background), this.addChild(this.slider)
                    }
                    convertToVolume(t) {
                        return (1 - (t - this.slider.minPosition.y) / (this.slider.maxPosition.y - this.slider.minPosition.y)).toFixed(1)
                    }
                    convertToPosition(t) {
                        return (this.slider.maxPosition.y - this.slider.minPosition.y) * (1 - t) + this.slider.minPosition.y
                    }
                    setVolume(t) {
                        this.slider.setPosition(this.convertToPosition(t))
                    }
                    show(t) {
                        this.visible = t, t || this.slider.stopTrack()
                    }
                }
                class as extends et {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "ButtonSound"), (0, o.Z)(this, "textureOn", void 0), (0, o.Z)(this, "textureOff", void 0), (0, o.Z)(this, "controls", void 0), (0, o.Z)(this, "volumeControl", void 0), (0, o.Z)(this, "onChangeVolume", void 0), this.textureOn = n.Texture.from(Ji), this.textureOff = n.Texture.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTP////////////////////////////////////////////////////////////////////////////////////VtkI8AAAAVdFJOUwC/zzAQf4DfIO+fX0BwoGCvUJCwj2iqfUcAAAGeSURBVFjD7dfbkoMgDAZg1Higntvl/V91CysQRDsG6cxe5L9yOs6nEwOkQnA4HA6Hw+FwvpBukbL+jtyqd/osVq0W2MvqlYV+Q6WzK2lkVUS3rSudnpBt5Zj+UeqRZrcdLscBrX9cs9gRXeh7gG4/IzuiK/1rk/ApG29DefwZ9eOlyGA7ui62Fgf9xIFAQt0f2pYevVfQ2h1at/BCu8Cd+Xc50CpSo0WN7cXSAyqDJFXEfDI1RraYcdNtz1n8rdcWuU7tbVmFd5jXBlf3B5X+ZLeuDKuvO4H+YE+uDJ0uGJ229hzZugxPR6sEOrDxPjT7CqfS2MaHTA76xG7uF8Tb5jxwtu/mKvEzntq++YbDHfEibYtqbNSP4K6u70/tJfuVstAbdWKbw8bafcr2BO0VW7h1Tjlmuqnc29vgENmTSpoXgtoc2x31ALtuT6SuJtny1pA5OhsPJX4dJb+03T7wpGps1+u3JuN5P05iG8StRENwVyb33InttyHIZ0d/OIy9QBZ7UjIYScMhMG9goRwv1AFcjoLD4XA4HA7n/+UXAfY3Afulub0AAAAASUVORK5CYII="), this.volumeControl = this.addChild(new ns), this.volumeControl.pivot.set(40, 214), this.volumeControl.show(!1), this.onChangeVolume = this.volumeControl.onChangeVolume, this.controls = this.addChild(new it(Ji)), this.controls.onClick.add((() => this.onClick.dispatch())), this.game.interaction.hover(this, (() => this.volumeControl.show(this.game.device.desktop))), this.game.interaction.out(this, (() => this.volumeControl.show(!1))), this.show(this.game.device.desktop)
                    }
                    toggle(t, e) {
                        this.controls.changeIcon(t ? this.textureOn : this.textureOff), this.volumeControl.setVolume(e)
                    }
                    resize() {
                        this.controls.showBackground(!this.game.device.desktop), this.scale.set(this.game.device.desktop ? 1 : 1.6)
                    }
                }
                class rs extends(q(n.Container)) {
                    constructor() {
                        super(...arguments), (0, o.Z)(this, "name", "Controls")
                    }
                    onAutoPlaySettingsOpen() {}
                    onAutoPlaySettingsClose() {}
                    onAutoPlayEnable(t) {}
                    onAutoPlayDisable() {}
                    setAutoPlayCount(t) {}
                    onBetLevelSettingsOpen() {}
                    onBetLevelSettingsClose() {}
                    setBetLevelBet(t) {}
                    onMenuOpen() {}
                    onMenuClose() {}
                    onFreeSpinsStart() {}
                    onFreeSpinsEnd() {}
                    onRNBStart() {}
                    onPopupShow() {}
                    onPopupHide() {}
                }
                class hs extends rs {
                    updateFreeLeft(t) {}
                    updateBonusLeft(t) {}
                }
                class ls extends it {
                    constructor() {
                        super("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTP////////////////////////////////////////////////////////////////////////////////////VtkI8AAAAVdFJOUwCfYO+/gBDfQCCQzzBfb1Cvf6CPcC3zwgoAAAJQSURBVFjD7Vhrk6MgEBQYHgMGTfb4/3/1eGg2ClqwelVbdfSXpEylhZ6eZnQYOjo6Ojo6On45EPF2TkH1LJmLMKCnu+4gnuD2ME+8g5i5IshV8lG6I0h1rXDMnWC8Qv06Y3ZwhVqeUrv/j5qfMpNLrj5btmx0thgpJxE8+BaPPQJNzGrT0zxeo+WFm0cT8S4rPPVLhOsvs5dCx06s9TVmIeSppUm7xokTACMlzMQuwSdIpUMw33egdvJo40rWmq+gqKcOO5EWC3kYNJJ1CeeK1GqpGbFq5ceR6kX7ukqqMvWmZ5j0yBz001UnSa/FtWBF6pDIFEr9EsSoJP9TpE7+QLpxtiRWxJ2yHydRNN/z7U6lKKXTu5yDZdXJl3V0pD4ydmzdOq1Vrqqn1kmA3eAhJs3qQ1WlhPR/AvZB/Q5VCZrTAO6HnbZQVY59b9zLqlQawhAuh2rwdVnVg1CV9aEaV8fIYztbTHFHrz07S6E6VS57lZjBrHkAmVZfL6HqM1UaIJwuSjxqzZen6tbXefjVhqrIVV19XSqXsP6num4cv4bsqOJri867CqCFFl+7r7V3rPZnFQAh6sPXqQLUck0Ma/V12U7i+rAgklexUIFy00D9dK2/j6pRJEX9xxy+ot4PCyb52rRxl4eFUIEZYgm0VenWAi6G6mFDU9Yyqe5kJcuwQPIHC4wPT2ZoANKPUGViPejl7CuwFBYnS2TLsLAdVkOojpgda2wzK9QOCy0DW7P7DjHN/4g4O9YcM5qKe18BxAoovJe1o6Ojo6Oj4zfiLwOjZY4OQxL5AAAAAElFTkSuQmCC"), (0, o.Z)(this, "name", "ButtonBetLevel")
                    }
                    setActive(t) {
                        this.changeColor(t ? this.game.config.get("colors.primary") : this.game.config.get("colors.white")), this.setBackgroundAlpha(t ? 1 : .2), this.setBackgroundColor(t ? this.game.config.get("colors.secondary") : this.game.config.get("colors.white"))
                    }
                    resize() {
                        this.scale.set(this.game.device.desktop ? 1 : 1.6)
                    }
                }

                function ds(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function cs(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? ds(Object(i), !0).forEach((function(e) {
                            (0, o.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ds(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                var us = {
                        fontFamily: "Avenir-Medium",
                        fill: 16777215,
                        align: "center"
                    },
                    ps = {
                        fontSize: 4
                    };
                const gs = {
                    Common: {
                        delimiter: ps,
                        default: cs(cs({}, us), {}, {
                            fontSize: 22
                        }),
                        value: {
                            fontFamily: "Avenir-Bold",
                            fontSize: 32
                        }
                    },
                    Button: {
                        default: cs(cs({}, us), {}, {
                            fontSize: 28,
                            dropShadow: !0,
                            dropShadowBlur: 4,
                            dropShadowColor: "black",
                            dropShadowAngle: Math.PI / 2,
                            dropShadowDistance: 2
                        })
                    },
                    FreeSpins: {
                        delimiter: ps,
                        default: cs(cs({}, us), {}, {
                            fontSize: 22
                        }),
                        value: {
                            fontSize: 32,
                            fontFamily: "Avenir-Bold",
                            fill: 16777215
                        }
                    }
                };

                function ms(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function As(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? ms(Object(i), !0).forEach((function(e) {
                            (0, o.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ms(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class vs extends ls {
                    constructor(t) {
                        super(), (0, o.Z)(this, "betLevel", void 0), (0, o.Z)(this, "betLevelText", void 0), (0, o.Z)(this, "updateAll", (() => {
                            this.updateText()
                        })), (0, o.Z)(this, "updateText", (() => {
                            var t = this.game.helpers.toMoneySS(this.betLevel.toCoins());
                            this.betLevelText.text = this.game.i18n.t("ControlsDesktopBet", this.game.i18n.currency({
                                withBrace: !0
                            }), t)
                        })), this.betLevel = t, this.betLevelText = this.addChild(new Mt("", As(As({}, gs.Common), {}, {
                            default: As(As({}, gs.Common.default), {}, {
                                align: "left"
                            })
                        }))), this.betLevelText.anchor.set(0, .5), this.betLevelText.position.set(70, 3), this.onClick.add((() => {
                            this.game.action.emit("clickMaxBet")
                        })), this.disable()
                    }
                }
                class bs extends n.Sprite {
                    constructor(t) {
                        var {
                            icon: e,
                            textures: i
                        } = t;
                        super(), (0, o.Z)(this, "_textures", void 0), (0, o.Z)(this, "isDisable", void 0), (0, o.Z)(this, "isHover", void 0), (0, o.Z)(this, "onClick", void 0), (0, o.Z)(this, "onHover", void 0), (0, o.Z)(this, "onLeave", void 0), this._textures = i, this.isHover = !1, this.isDisable = !1, this.buttonMode = !0, this.interactive = !0, this.onClick = new(C()), this.onHover = new(C()), this.onLeave = new(C()), i.normal && (this.texture = i.normal), e && this.addChild(e), this._setupEvents()
                    }
                    _setupEvents() {
                        var t;
                        t = t => {
                                t.data.originalEvent.preventDefault(), this.isDisable || (this.onClick.dispatch(t), this._textures.press && (this.texture = this._textures.press))
                            }, this.on("pointertap", t),
                            function(t, e) {
                                t.on("pointerup", e)
                            }(this, (() => {
                                this.isDisable || (this.isHover && this._textures.hover ? this.texture = this._textures.hover : this._textures.normal && (this.texture = this._textures.normal))
                            })),
                            function(t, e) {
                                var i = X.device.desktop ? "pointerover" : "pointerdown";
                                t.on(i, e)
                            }(this, (t => {
                                this.isHover = !0, this.isDisable || (this.onHover.dispatch(t), this._textures.hover && (this.texture = this._textures.hover))
                            })),
                            function(t, e) {
                                t.on("pointerout", e), t.on("pointerupoutside", e)
                            }(this, (t => {
                                this.isHover = !1, this.isDisable ? this._textures.disable && (this.texture = this._textures.disable) : this.onLeave.dispatch(t)
                            }))
                    }
                    disable() {
                        this.isDisable = !0, this.buttonMode = !1, this._textures.disable && (this.texture = this._textures.disable)
                    }
                    enable() {
                        this.isDisable = !1, this.buttonMode = !0, this.isHover && this._textures.hover ? this.texture = this._textures.hover : this._textures.normal && (this.texture = this._textures.normal)
                    }
                    hide() {
                        this.visible = !1
                    }
                    show() {
                        this.visible = !0
                    }
                    update(t) {
                        var {
                            textures: e
                        } = t;
                        this._textures = Object.assign({}, this._textures, e), this._textures.normal && (this.texture = this._textures.normal)
                    }
                }

                function ws(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function fs(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? ws(Object(i), !0).forEach((function(e) {
                            (0, o.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ws(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                const ys = function(t) {
                    var e = new Mt("", fs(fs({}, t), {}, {
                        default: fs(fs({}, t.default), {}, {
                            wordWrap: !0,
                            wordWrapWidth: 200
                        })
                    }));
                    return e.visible = !1, e.anchor.set(.5, 1), {
                        container: e,
                        hide: function() {
                            e.visible = !1
                        },
                        show: function() {
                            e.visible = !0
                        },
                        updateLeft: function(t) {
                            e.text = X.i18n.t("ControlsDesktopFreeRoundLeft", t)
                        }
                    }
                };
                const Ss = function(t) {
                    var e = new Mt("", t);

                    function i(t) {
                        e.text = X.i18n.t("ControlsDesktopFreeRoundWin", X.i18n.currency({
                            withBrace: !0
                        }), t > 0 ? X.helpers.toMoney(t) : "")
                    }
                    return e.visible = !1, e.anchor.x = .5, X.action.on("update:win", (() => {
                        i(X.wallet.totalCoins)
                    })), {
                        container: e,
                        hide: function() {
                            e.visible = !1
                        },
                        show: function() {
                            e.visible = !0
                        },
                        updateTotalWin: i
                    }
                };

                function xs(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function ks(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? xs(Object(i), !0).forEach((function(e) {
                            (0, o.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : xs(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class Cs extends Mt {
                    constructor() {
                        super("", ks(ks({}, gs.Common), {}, {
                            default: ks(ks({}, gs.Common.default), {}, {
                                align: "right"
                            })
                        }))
                    }
                    update(t) {
                        t >= 0 && (X.action.emit("balance_updated", t), this.text = X.i18n.t("ControlsDesktopBalance", X.i18n.currency({
                            withBrace: !0,
                            withSpace: !0
                        }), X.helpers.toMoney(t)))
                    }
                }
                class Bs extends Mt {
                    constructor() {
                        super("", gs.FreeSpins)
                    }
                    change(t) {
                        this.text = 0 === t ? X.i18n.t("ControlsDesktopFreeSpinsLast") : X.i18n.t("ControlsDesktopFreeSpinsLeft", t)
                    }
                }

                function Ps(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function Ts(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Ps(Object(i), !0).forEach((function(e) {
                            (0, o.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Ps(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class Es extends Mt {
                    constructor() {
                        super("", Ts(Ts({}, gs.Common), {}, {
                            default: Ts(Ts({}, gs.Common.default), {}, {
                                fill: X.config.get("colors.primary"),
                                fontFamily: "Avenir-Bold"
                            }),
                            value: Ts(Ts({}, gs.Common.value), {}, {
                                fontSize: 66
                            })
                        }))
                    }
                    update(t) {
                        this.text = X.i18n.t("ControlsDesktopTotalWin", X.i18n.currency({
                            withBrace: !0
                        }), X.helpers.toMoney(t))
                    }
                }
                class Fs extends Mt {
                    constructor() {
                        super("", gs.Common), this.anchor.x = .5
                    }
                    update(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        this.text = X.i18n.t("ControlsDesktopWin", X.i18n.currency({
                            withBrace: !0
                        }), t > 0 || e ? X.helpers.toMoney(t) : "")
                    }
                }
                class Rs extends hs {
                    constructor() {
                        var t;
                        super(), t = this, (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "buttonAccept", void 0), (0, o.Z)(this, "buttonAutoPlay", void 0), (0, o.Z)(this, "buttonMaxBet", void 0), (0, o.Z)(this, "buttonMenu", void 0), (0, o.Z)(this, "buttonQuickSpin", void 0), (0, o.Z)(this, "buttonSound", void 0), (0, o.Z)(this, "buttonSpin", void 0), (0, o.Z)(this, "freeRoundLeft", void 0), (0, o.Z)(this, "freeRoundTotalWin", void 0), (0, o.Z)(this, "textBalance", void 0), (0, o.Z)(this, "textFreeSpinLeft", void 0), (0, o.Z)(this, "textFreeSpinTotalWin", void 0), (0, o.Z)(this, "textWin", void 0), (0, o.Z)(this, "winAnimation", void 0), this.background = n.Sprite.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAACECAMAAABGSsZsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAC9UExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOvSc8wAAAA/dFJOUy0n8xNrIrX8ThhmXh1JcOLVMtmbsO7RyXpF3erNWeY2OlOFwaaijYnF95S+gbkFYg4+qpF0CEF+C5ifAXdWrYb9fjEAAA3OSURBVHja7JbZchrJEkCLQHLYYokg4AEeCJCMUIQ9A1zbWkDA/3/W7a7KWnpDIInqkXWOoLuWrMw8kmNq1DMAAABERy2ek5/0kT7NS/OsR3rLzM3us5k/h6EBkiQzkEgzkKQ25WKRK2P7sNuSpXhSrz8H4cFbhxsWru1nSWiz+DX88ccff/zxj+6vFgAAABAddX+/uNffRfq+t49kpodCMkv3F/d21R24X/jVhVlbhEEurw25D6MX7ukKBQO3J+VlZ1HowayaFu2q5JbNMLXect3jjz/++OOPfw3+6h4AAACio54AAAAgOupplb5Wq5V+JrOVGz/p6ZNZe9KjNGJlN3WojtUh5qQsyMei8wTPldQKXlJkJbWCDXcyfD+5DszM1Lc1bV8+UixWtgfXIP74448//vjX4K9WAAAAEB3VTB7Npv4202+6KK/02dQbemu1ykTpkT5pDjR91Modabqhi2r6wyvZaQYnbC6p5dIGH8nmMviObO+uUnNlq8jplW3HJcEff/w/sP8Kf/79f1h/1QQAAIDocAEDAADUcQF/exXNwiC/ULlRka752g6OCG1+e2/wxx9//PHH/23+6hsAAABER1/A7cJyuyS0NKpdHtw+XLV90ma7Mqx9Qs2TCuCPP/7444//ef1VGwAAAKLDBQwAAFDHBXx52b70tINZsN7W6+12YV0OtO2e7NrVy0zqzKxdvh0WMovppC0lfJDkb9uDbWmmbbNfBjlsyuxSWWP4448//vjjH8dfXQIAAEB0znsBNz75bxd//PHHH3/8qy7gBgAAAESHCxgAAKCOCzjFXMMqnemvjOz9rENk0+ybUybU7DXcSRPkVyRGAhv2qImSQkqSNpRvQ5K4Mg2/Lf/boHz6ooZdtnltjG/K/wLwxx9//PHHvwZ/15zzyNOwGna/EZ4qxlfkaqjsL0OFvyF1IGWjolD4h8vsNsK+w0mjWAB//PHHH3/86/AHAACAOuipXi99mnFm0NOzniz4XXcyePfKEoejnk+tp71cgsJUDxOCREG1Xi9Tt9fLvno9n0KevbCl0Ax//PHHH3/84/v3AAAAIDrFC3jiX5PDZydHV5m8sHEg08SHTF7OPnlLl/jjjz/++OMfzV9NzkBvUlfWXkXkeTrCH3/88ccf/9dW0xfwVCb59wdg+h794o8//vjjj39sfzWdTEuZVEwrws/KxNadHG6yusFJdeP4448//vjjX4O/mgIAAEB01P/egWlxZZrZnvrRNB8/Lc81Paneyw3ppqYnZ8Iff/zxxx//s/i/ywUMAAAAp6EeAAAAIDpq9DAajdJRMpC1kV4xq+Y1kk1ZTmdm3X9GPip82uPh4XDHx42KVR5cbyNbUwpJcw+uT7fiPUbugF9yjg8PQRD+YRD+/PvHH3/8Y/irEQAAAETHXMAd8zEvS0d/9VqnIxudUfDq+G9Hvn43COn4MF8grNXpBGWlYjDt+GyZLjuug2JvQeKOje10wpzhafzxxx9//PGP7K86AAAAEB0uYAAAgDou4K+aztf/OJ0PnR5//PHHH3/8c6ivAAAAEP8Cvs5MrwsB1xXrB85cn1D/uuxl964PpgzPvNDl9fWR3eOPP/74449/HH91DQAAANHRF/DupCO71y4duWn2d3a0C2Ynpjk2DH/88ccff/xj+6sdAAAAREeNk8fYsTOPYMVNd2O7vJPFnT/i13e5sy5il4kd73bZbR+Vb8eF7vyqtLALcmU2d5kEGR97zPWPP/74448//vH91RgAAACio1qt8bilSd/mawbpM/2Yt45o2V3zkkPBNIMPHLd8DptuHMbZabgjrdizbnUszblpvqgtnUnV8mmMhgv47P4t/PHHn//+8fevwV+1AAAAIDr6Al6a77K1XJqHnpsft5PSctuCHZtNc96+3Y/eDEdScWmPmxXJbxNKWqmvF3yAOxguL/3JpW+i5ZzCekHs3+S/xB9//D+tfwv/D+avlgAAABAddZU8rq7Sj/4mz6Ws+JcZmTAJlTAZ6PfVlZ27iU8sU5PUZV26PSl35crZRX/Gd+HS2+PSq+t+KT1IOtfJlbd1O/jjjz/++ONfg7+6AgAAgOhwAQMAANRxAV8EXF2chTOl/TCN4o8//vjjj38BdQEAAADR8RdwV39eSbcb5gkzSdpC6u5FLq576Fg33O9eFIq90PkxYvjjjz/++OMf0V91AQAAIDpcwAAAAHVcwH8M3eSnQPlS+pFvsN7NnermDpt5cK5bGqenLiR4lfRS1ma3MOyanrt/qmTwxx9//PHHP76/+nM021dv/pfYnuck/vjjjz/++J+E2gIAAEB01FCz1R/91dOtW07GWzfXO26c7uufzJrfy4aHKXRSV2cbbsonzbo1Uaa879A3GlaVYN9X7lTGzhptt0P88cf/I/kP+fvj/9f4qyEAAABERz0+Pg6TH80wGSXfdDocylMwMUP7GJqFoTllj8nb5vJJTZQEBuGSV0IkoyzrEpLFV3x8DJ6+A9tGcebtXPp8k/jjjz/++OMf3V89AgAAQHTUPwAAABAdLmAAAIA6LuCbm5t/bj43+OOPP/744x+9troBAACA6Ki7kJu7PDclW8Wo0jM3x++ekPwYXp0Of/zxxx9//OP45y5gAAAAiIKaz+/mGe4Kg4r9/Pqd273LR92VnatKVH3CFnmhp7vC7t2hcvjjjz/++OMf3T+9gAEAACA2av67yNw+5r/n4VIuonphPi+PCqPn2f15OJwXY0vqzA+UmLuX6WU+L2z8ruwRf/zxxx9//M/sP1e/6+fHX1wNf/zxxx9//EtRPwAAACA6XMAAAAB1XMBrAAAAiM0P1e/31/IV1utklm6mL7/az0zSbf1Ow/UR+eiZHDbnbS2Xbm2SrU2wLb729V2ivg2y376UtXXlqBTqr9e+5bV05DoPNNfu4Bp//PHHH3/8a/Bfqz4AAABERy7gzUY+6dh8LG5DxsmmhOmovnvp/Uxys5lG6qOSS1JlA01KqdOXc5t+Pwy2Z4KirnXJbDuUnBt3ahOU8EGbICX++H8u/1C4Vv/NJ/fn3//n9VcbAAAAiI66PYbN7RnYVMzOUuw9W8Uff/zxxx//NydVtwAAABAddTubzdJvBbflawdOBMduj0h2LG85+4IM/vjjjz/++Mf2v1UzAAAAiI76Vc3suLXZC0dKg2fha1aMmlUWnZVmmx3VfbH0L/zxx/8T+v/i749//f7uAt4HUfvCisz2hZXSyamUHN7vTz/zmnJ7/PHHH3/88a/DX+0BAAAgOmpQwj73zm/vw8j9wZh9xd5e/5gwF5o5Y1Pvs6VM4mwL7r0P02SLZ5z2VWr4448//vjjH8dfDQAAACA66svgS4J+OAZmOsg+zHvgRno2SJ6D3MCkGHyR1S/Bqj1n1iTIV3FtyGEJc5NBprXg5GCQXzKrYXTG0nWGP/74448//jX4JxcwAAAARIcLGAAAoI4L+F8AAACIDhcwAABAHRfwTwAAAIgNFzAAAEAdqO8Zfn5/A286/F78rO80/vjj/6H9v/P3/397ZbAbKQwD0IhLjyAkQIKIy1zo///gQhLHDjDbkVbN7HbfGwpJ7Dh+6iH419x8voABAACgBu6xvcLjlbTH3ecPeLxe4/Fq/HH2wR9//PHHH/83+D/cBgAAANVxU2SbbnmybNafZbzGVuzfikGObWV4e3bwlle3r056VRR//PHHH3/8v8U/X8AAAABQEecTk/dmeIRkcbLhqcyScZxMNiVPTGU7txHJ1UOlZEwrSsSM6dT0ZSZF/E37Uz5/wh9//PHHH/83+OsFDAAAAPXYL+Bx9OPxjq9jlp7xSBjj4ujT2pEsG2QiOYnTks+Vc9CM9QhvNozFob5c1R6lT4l6r917Pc2nQNzjiz7wxx9//PHH/w3+3o0AAABQHdd149jJqxOO6R6N3y4MxjiI0TjJm2JaN3ZpPaSMOTvVPL1GPcYsd6mSFJOCGg+H2z5yUDakpHSCdGPry4HSBP74448//vhX9T8uYAAAAKjNfgH3fZ71+2+f9538uvAXB5LXh1GaxbGs2kAK64buXE23aj99IlfoUlqq30sfvcR77cluj530Redd0bOUwh9//PHHH//q/p3rAQAAoDrhAp71Lz06Sy/9zpou4TmuziZHkfxUM6fJGedNucos37m3HcyzOdycaQ7MHV6YzXJZF3/88ccff/xr+rsZAAAAqnNzAbf6bXVmA+1Lpc9pba7ahvGlTJvWylPt7jb9Tg3dzZ639ZUD/vjjjz/++H+/v2sBAACgOlzAAAAA77iA17VdL+xLbSsjXbtZae2W42nXy45L7Wv8LrX93dnrF7UvRS4lcqv444//T/Vf+f/z//97/Y8LGAAAAGrjlmVZ5UmvYiGuyHA1KQXr6bPeBG9SV/N3qXk6X+PrYjoxs1WOvpy+angvuZYt4o8//vjjj39t/3ABAwAAQGXcMgzDEl5DZomv5QgcT47qdDGpS/6FR1MXjdvyMW6qXpJkY6oQqy7lieduzaT8Ltpw6rIshT/++OOPP/7V/Rc3AAAAQHXc0AzHc7z2XxP+lBBoYjTOm7AQE8OeIYYH2Z7ieVkjYSUWMcfkBDvSV6qW6urBKWVIOU0jkdRWLpcOldXcRdNow/jjjz/++ONf139wDQAAAFSHCxgAAOAdF/AnAAAA1IYLGAAA4B24j3+Ez4//G/zxxx9//H+WlvsAAACA6nABAwAAvIFf+31ecRZFRK0AAAAASUVORK5CYII="), this.background.alpha = .4, this.background.anchor.set(0, 1), this.background.position.set(0, this.game.viewport.height), this.buttonMenu = new Ki, this.buttonMenu.position.set(77, 1013), this.buttonMaxBet = new vs(this.game.betLevel), this.buttonMaxBet.position.set(213, 1013), this.buttonAutoPlay = new Yi, this.buttonAutoPlay.position.set(833, 1013), this.buttonQuickSpin = new qi, this.buttonQuickSpin.position.set(1084, 1014), this.buttonSound = new as, this.buttonSound.position.set(1840, 1012), this.buttonSpin = function() {
                            var t = new(C()),
                                e = new bs({
                                    textures: {
                                        normal: null,
                                        hover: null,
                                        press: null,
                                        disable: null
                                    }
                                });
                            e.name = "buttonSpin", e.hitArea = new n.Circle(90, 80, 85);
                            var i = new Bi(X.loader.getAsset("effectSpinStatic"));
                            i.position.set(6, 4), i.play("active", !1), e.addChild(i), e.onClick.add(o), e.onHover.add((() => {
                                i.play("hover", !1)
                            })), e.onLeave.add((() => {
                                i.play("active", !1)
                            }));
                            var s = X.keyboard.register(X.keyboard.KEY_CODE.Space);

                            function o() {
                                t.handlers(!0) ? t.dispatch() : (X.store.get("spin:isSpin", !1) || i.play("press", !1).then((() => {
                                    X.store.get("spin:isFast", !1) ? (e.disable(), s.disable()) : i.play("active", !0)
                                })), X.action.emit("clickSpin"))
                            }

                            function a() {
                                s.disable(), e.visible = !1
                            }
                            return s.onPress.add(o), s.disable(), X.action.on("spin:fast", (function() {
                                i.play("inactive", !1), e.disable(), s.disable()
                            })), X.action.on("state:ready_enter", (function() {
                                "drop" !== X.store.get("server:nextAction") && (s.enable(), ti.isFreespin() || ti.isBonus() || (e.visible = !0, e.enable(), i.play("active", !1)))
                            })), X.action.on("state:finish_exit", (function() {
                                ti.isFreespin() || (i.play("active", !1), e.enable(), s.enable())
                            })), X.action.on("free:start", a), X.action.on("free:restore", a), X.action.on("free:stop", (() => {
                                e.visible = !0, e.disable(), s.disable()
                            })), X.action.on("free:select_start", (function() {
                                s.enable()
                            })), X.action.on("free:select_stop", (() => {
                                i.play("inactive", !1)
                            })), X.action.on("bonus:start", a), X.action.on("bonus:restore", a), X.action.on("bonus:stop", (() => {
                                e.visible = !0, e.disable(), s.disable()
                            })), X.action.on("bonus:select_stop", (() => {
                                i.play("inactive", !1)
                            })), {
                                container: e,
                                hide() {
                                    e.visible = !1
                                },
                                show() {
                                    e.visible = !0
                                },
                                press(i) {
                                    e.enable(), s.enable(), t.once(i)
                                },
                                enable() {
                                    e.enable(), s.enable(), i.play("active", !1)
                                },
                                disable() {
                                    e.disable(), s.disable(), i.play("inactive", !1), t.handlers(!0) && t.detachAll()
                                }
                            }
                        }(), this.buttonSpin.container.position.set(878, 918), this.buttonAccept = new Xi, this.buttonAccept.position.set(958, 1013), this.textWin = new Fs, this.textWin.anchor.x = .5, this.textWin.position.set(1400, 980), this.winAnimation = new Bi(this.game.loader.getAsset("assets/images/effects/coinsCollect/skeleton.json")), this.winAnimation.position.set(1400, 980), this.textBalance = new Cs, this.textBalance.anchor.x = 1, this.textBalance.position.set(1760, 980), this.freeRoundLeft = ys(gs.Common), this.freeRoundLeft.container.position.set(1700, 1054), this.freeRoundTotalWin = Ss(gs.Common), this.freeRoundTotalWin.container.position.set(1400, 980), this.textFreeSpinLeft = new Bs, this.textFreeSpinLeft.visible = !1, this.textFreeSpinLeft.anchor.x = .5, this.textFreeSpinLeft.position.set(640, 980), this.textFreeSpinTotalWin = new Es, this.textFreeSpinTotalWin.visible = !1, this.textFreeSpinTotalWin.anchor.x = .5, this.textFreeSpinTotalWin.position.set(960, 955), this.addChild(this.background), this.addChild(this.textFreeSpinLeft), this.addChild(this.textFreeSpinTotalWin), this.addChild(this.buttonMenu), this.addChild(this.buttonMaxBet), this.game.config.get("autoPlay.available", !0) && this.addChild(this.buttonAutoPlay), this.game.config.get("quickSpin.available", !0) && this.addChild(this.buttonQuickSpin), this.addChild(this.buttonSound), this.addChild(this.buttonSpin.container), this.addChild(this.buttonAccept), this.addChild(this.textWin), this.addChild(this.winAnimation), this.game.config.get("balanceHide", !1) || this.addChild(this.textBalance), this.addChild(this.freeRoundTotalWin.container), this.addChild(this.freeRoundLeft.container), this.textWin.update(this.game.wallet.coins), this.textBalance.update(this.game.wallet.balance), this.game.freeRound.onStart.once((t => {
                            this.textBalance.visible = !1, this.freeRoundLeft.updateLeft(t), this.freeRoundLeft.show(), this.freeRoundTotalWin.updateTotalWin(this.game.wallet.totalCoins), this.game.store.get("free:isFree", !1) || (this.textWin.visible = !1, this.freeRoundTotalWin.show())
                        })), this.game.freeRound.onFinish.once((() => {
                            this.freeRoundLeft.hide(), this.freeRoundTotalWin.hide(), this.textWin.visible = !0, this.textWin.update(this.game.wallet.totalCoins, !0), this.textBalance.visible = !0, this.textBalance.update(this.game.wallet.balance)
                        })), this.game.action.on("state:spin_enter", (() => {
                            this.game.autoPlay.enabled || this.buttonAutoPlay.disable(), this.buttonMaxBet.disable(), this.game.store.get("free:isFree", !1) || "drop" === this.game.store.get("server:nextAction") || (this.freeRoundLeft.updateLeft(this.game.freeRound.left - 1), this.textBalance.update(this.game.wallet.balance - this.game.betLevel.toCoins()))
                        })), this.game.action.on("free:restore", (() => {
                            this.buttonAutoPlay.visible = !1, this.buttonAutoPlay.disable(), this.textFreeSpinTotalWin.update(this.game.wallet.totalCoins), this.textFreeSpinTotalWin.visible = !0, this.textFreeSpinLeft.visible = !0, this.game.freeRound.enabled && (this.freeRoundTotalWin.container.visible = !1, this.textWin.visible = !0), this.game.device.desktop && this.buttonQuickSpin.position.set(1233, 1014)
                        })), this.game.action.on("free:start", (() => {
                            this.buttonAutoPlay.visible = !1, this.buttonAutoPlay.disable(), this.textFreeSpinTotalWin.update(this.game.wallet.totalCoins), this.textFreeSpinTotalWin.visible = !0, this.textFreeSpinLeft.visible = !0, this.textWin.visible = !0, this.textWin.update(0), this.game.freeRound.enabled && (this.freeRoundTotalWin.container.visible = !1, this.textWin.visible = !0), this.game.device.desktop && this.buttonQuickSpin.position.set(1233, 1013)
                        })), this.game.action.on("free:stop", (() => {
                            this.buttonAutoPlay.visible = !0, this.textFreeSpinTotalWin.visible = !1, this.textFreeSpinTotalWin.text = "", this.textFreeSpinLeft.visible = !1, this.textFreeSpinLeft.text = "", this.textWin.update(this.game.wallet.totalCoins, !0), this.textBalance.update(this.game.wallet.balance), this.game.freeRound.enabled && (this.freeRoundTotalWin.container.visible = !0, this.textWin.visible = !1), this.game.device.desktop && this.buttonQuickSpin.position.set(1084, 1014)
                        })), this.game.action.on("state:setup_enter", (() => {
                            ti.isFreespin() && (this.y = this.y + this.height + 100), "drop" === this.game.store.get("server:nextAction") && (this.buttonMenu.disable(), this.buttonSpin.disable(), this.buttonAutoPlay.disable())
                        })), this.game.action.on("state:finish_exit", (() => {
                            ti.isBasic() && "drop" !== this.game.store.get("server:nextAction") && (this.game.autoPlay.enabled || this.buttonMenu.enable(), this.buttonAutoPlay.enable())
                        })), this.game.autoPlay.on("disable", (() => {
                            this.buttonAutoPlay.disable()
                        })), this.game.action.on("free:select_start", (() => {
                            a.kX.fromTo(this, .5, {
                                pixi: {
                                    y: this.y + this.height
                                }
                            }, {
                                pixi: {
                                    y: 0
                                }
                            }), this.buttonQuickSpin.enable()
                        })), this.game.action.on("free:select_stop", (() => {
                            a.kX.fromTo(this, .5, {
                                pixi: {
                                    y: this.y + this.height
                                }
                            }, {
                                pixi: {
                                    y: 0
                                }
                            })
                        })), this.game.action.on("free:updateLeft", (t => {
                            this.textFreeSpinLeft.change(t)
                        })), this.game.action.on("reward:reset", (() => {
                            this.textWin.update(0)
                        })), this.game.action.on("state:ready_enter", (() => {
                            !ti.isBasic() || this.game.autoPlay.enabled || this.game.freeRound.enabled || "drop" === this.game.store.get("server:nextAction") || this.buttonMaxBet.enable()
                        })), this.game.action.on("state:ready_exit", (() => {
                            "drop" !== this.game.store.get("server:nextAction") && this.textWin.update(0)
                        })), this.game.action.on("update:win", (function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            t.textWin.update(e), 0 === e && 0 === i || "init" === t.game.store.get("server:action") || (t.winAnimation.play("animation"), t.game.action.emit("sound:coinz")), (t.game.store.get("free:isFree", !1) || t.game.store.get("free:isEnd", !1)) && t.textFreeSpinTotalWin.update(i)
                        })), this.game.action.on("update:balance", (() => {
                            ti.isFreespin() || "drop" === this.game.store.get("server:nextAction") || this.textBalance.update(this.game.wallet.balance)
                        }))
                    }
                    lock() {
                        this.buttonSpin.disable(), this.buttonAutoPlay.disable()
                    }
                    unlock() {
                        this.buttonSpin.enable(), this.buttonAutoPlay.enable()
                    }
                    onSpinEnter() {
                        this.buttonMenu.disable()
                    }
                    onFinishEnter() {}
                    onRNBStart() {
                        this.textBalance.update(this.game.wallet.balance), this.game.store.get("risk", !1) && this.textWin.update(0)
                    }
                    onPopupShow() {
                        this.buttonAutoPlay.disable(), this.buttonMenu.disable(), this.buttonMaxBet.disable(), this.buttonSpin.disable(), this.buttonQuickSpin.disable(), this.buttonSound.disable()
                    }
                    onPopupHide() {
                        ti.isFreespin() || (this.buttonAutoPlay.enable(), this.buttonMenu.enable(), this.buttonMaxBet.enable()), this.buttonSpin.enable(), this.buttonQuickSpin.enable(), this.buttonSound.enable()
                    }
                    onMenuOpen() {}
                    onMenuClose() {}
                    onBetSettingsOpen() {
                        this.buttonMaxBet.setActive(!0)
                    }
                    onBetSettingsClose() {
                        this.buttonMaxBet.setActive(!1)
                    }
                    onAutoPlaySettingsOpen() {
                        this.buttonSpin.hide(), this.buttonAccept.show(), this.buttonAutoPlay.setActive(!0)
                    }
                    onAutoPlaySettingsClose() {
                        this.buttonSpin.show(), this.buttonSpin.enable(), this.buttonAccept.hide(), this.buttonAutoPlay.setActive(!1)
                    }
                    onAutoPlayEnable(t) {
                        this.buttonAutoPlay.start(t)
                    }
                    onAutoPlayDisable() {
                        this.buttonAutoPlay.stop()
                    }
                    setAutoPlayCount(t) {
                        this.buttonAutoPlay.setCount(t)
                    }
                    updateBet() {
                        this.buttonMaxBet.updateAll()
                    }
                    disableButtonSpin() {
                        this.buttonSpin.disable()
                    }
                    enableButtonSpin() {
                        this.buttonSpin.enable()
                    }
                    pressButtonSpin(t) {
                        return this.buttonSpin.press(t)
                    }
                    beforeFreeSpinsPopup() {
                        a.kX.fromTo(this, .5, {
                            pixi: {
                                y: this.y
                            }
                        }, {
                            pixi: {
                                y: this.y + this.height + 100
                            }
                        })
                    }
                    updateFreeLeft(t) {
                        this.textFreeSpinLeft.change(t)
                    }
                }
                class Zs extends n.Sprite {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16777215,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .75;
                        super(n.Texture.WHITE), this.height = 4, this.tint = t, this.alpha = e
                    }
                }

                function Os(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function Ms(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Os(Object(i), !0).forEach((function(e) {
                            (0, o.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Os(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                var Is, Ds;
                ! function(t) {
                    t.Bet = "bet", t.Win = "win", t.Balance = "balance", t.FreeLeft = "freeLeft", t.FreePlayed = "freePlayed", t.TotalWin = "totalWin", t.FreeRoundLeft = "freeRoundLeft", t.BonusLeft = "bonusLeft"
                }(Is || (Is = {})),
                function(t) {
                    t.Free = "free", t.Normal = "normal", t.Bonus = "bonus"
                }(Ds || (Ds = {}));
                var Ws, Ls = {
                        default: {
                            fontSize: 30,
                            fontFamily: "Avenir-Medium",
                            fill: 16777215,
                            align: "center"
                        },
                        value: {
                            fontSize: 50,
                            fontFamily: "Avenir-Bold"
                        }
                    },
                    _s = Ms(Ms({}, Ls), {}, {
                        value: Ms(Ms({}, Ls.value), {}, {
                            fill: 16777215
                        })
                    });
                class Ns extends(q(n.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "state", void 0), (0, o.Z)(this, "textBet", void 0), (0, o.Z)(this, "textWin", void 0), (0, o.Z)(this, "textBalance", void 0), (0, o.Z)(this, "textFreeRound", void 0), (0, o.Z)(this, "textFree", void 0), (0, o.Z)(this, "textTotalWin", void 0), (0, o.Z)(this, "textBonus", void 0), (0, o.Z)(this, "delimiter", void 0), this.state = Ds.Normal, this.textBet = new Mt("", Ms(Ms({}, Ls), {}, {
                            default: Ms(Ms({}, Ls.default), {}, {
                                align: "left"
                            })
                        })), this.textBet.anchor.set(0, 0), this.textWin = new Mt("", Ls), this.textWin.anchor.set(.5, 0), this.textBalance = new Mt("", Ms(Ms({}, Ls), {}, {
                            default: Ms(Ms({}, Ls.default), {}, {
                                align: "right"
                            })
                        })), this.textBalance.anchor.set(1, 0), this.textFreeRound = new Mt("", Ms(Ms({}, Ls), {}, {
                            default: Ms(Ms({}, Ls.default), {}, {
                                align: "center",
                                wordWrap: !0,
                                wordWrapWidth: 300
                            })
                        })), this.textFreeRound.anchor.set(1, 1), this.textFree = new Mt("", Ms(Ms({}, _s), {}, {
                            default: Ms(Ms({}, _s.default), {}, {
                                fontSize: 30,
                                wordWrapWidth: 340
                            })
                        })), this.textFree.anchor.set(0, 1), this.textTotalWin = new Mt("", Ms(Ms({}, _s), {}, {
                            default: Ms(Ms({}, _s.default), {}, {
                                fontFamily: "Avenir-Bold",
                                fill: this.game.config.get("colors.primary"),
                                fontSize: 30,
                                wordWrapWidth: 300
                            }),
                            value: Ms(Ms({}, _s.value), {}, {
                                fill: this.game.config.get("colors.primary")
                            })
                        })), this.textTotalWin.anchor.set(.5, 1), this.textBonus = new Mt("", Ms(Ms({}, _s), {}, {
                            default: Ms(Ms({}, _s.default), {}, {
                                fontSize: 27,
                                wordWrapWidth: 340
                            })
                        })), this.textBonus.anchor.set(0, 1), this.delimiter = new Zs(16777215, .5), this.addChild(...[this.textBet, this.textWin, !this.game.config.get("balanceHide", !1) && this.textBalance, this.textFreeRound, this.textFree, this.textTotalWin, this.textBonus, this.delimiter].filter(Boolean)), this.game.freeRound.onStart.once((() => {
                            this.textBalance.visible = !1, this.textFreeRound.visible = !0
                        })), this.game.freeRound.onFinish.once((() => {
                            this.textBalance.visible = !0, this.textFreeRound.visible = !1
                        }))
                    }
                    resize() {
                        var t = this.state === Ds.Free,
                            e = this.state === Ds.Bonus;
                        this.textTotalWin.setTagStyle("default", {
                            wordWrap: this.game.device.portrait
                        }), this.textFree.setTagStyle("default", {
                            wordWrap: this.game.device.portrait
                        }), this.textBonus.setTagStyle("default", {
                            wordWrap: this.game.device.portrait
                        }), this.textFreeRound.setTagStyle("default", {
                            wordWrap: this.game.device.portrait
                        }), this.game.device.landscape ? (this.delimiter.visible = !1, this.textBet.scale.set(1), this.textBet.position.set(t || e ? 60 : 240, 0), this.textWin.scale.set(1), this.textWin.position.set(t || e ? 1300 : 960, 0), this.textTotalWin.scale.set(1), this.textTotalWin.position.set(960, 99), this.textFree.scale.set(1), this.textFree.position.set(this.textTotalWin.x - this.textFree.width - 220, 99), this.textBonus.scale.set(1), this.textBonus.position.set(this.textTotalWin.x - this.textBonus.width - 220, 99), this.textBalance.scale.set(1), this.textBalance.position.set(1855, 0), this.textFreeRound.scale.set(1), this.textFreeRound.position.set(1855, 98), this.textFreeRound.setTagStyle("default", {
                            fontSize: 30
                        }), this.position.set(0, this.game.viewport.height), this.pivot.set(0, 140)) : (this.delimiter.width = 990, this.delimiter.position.set(44, -32), this.delimiter.visible = t || e, this.textBet.scale.set(1), this.textBet.position.set(44, 0), this.textWin.scale.set(1), this.textWin.position.set(540, 0), this.textFree.scale.set(1), this.textFree.position.set(44, -55), this.textTotalWin.scale.set(1), this.textTotalWin.position.set(540, -55), this.textBonus.scale.set(1), this.textBonus.position.set(44, -55), this.textBalance.scale.set(1), this.textBalance.position.set(1034, 0), this.textFreeRound.scale.set(1), this.textFreeRound.position.set(1034, 100), this.textFreeRound.setTagStyle("default", {
                            fontSize: "uk" === this.game.i18n.language ? 26 : 30
                        }), this.position.set(0, 2 * this.game.viewport.paddingY + this.game.viewport.height), this.pivot.set(0, 200))
                    }
                    update(t) {
                        switch (t.type) {
                            case Is.Bet:
                                var e = this.game.helpers.toMoneySS(t.value),
                                    i = this.game.i18n.t("StatusBarMobileBet", this.game.i18n.currency({
                                        withBrace: !0
                                    }));
                                this.textBet.text = "".concat(i, "<value>").concat(e, "</value>");
                                break;
                            case Is.Win:
                                var s = this.game.i18n.t("StatusBarMobileWin", this.game.i18n.currency({
                                    withBrace: !0
                                }));
                                t.value > 0 || t.disableZeroCheck ? this.textWin.text = "".concat(s, "<value>").concat(this.game.helpers.toMoney(t.value), "</value>") : this.textWin.text = s;
                                break;
                            case Is.Balance:
                                var o = this.game.i18n.t("StatusBarMobileBalance", this.game.i18n.currency({
                                    withBrace: !0,
                                    withSpace: !0
                                }));
                                this.textBalance.text = "".concat(o, "<value>").concat(this.game.helpers.toMoney(t.value), "</value>"), this.game.action.emit("balance_updated", t.value);
                                break;
                            case Is.FreeLeft:
                                var n = 0 === t.value;
                                this.textFree.text = n ? this.game.i18n.t("StatusBarMobileFreeLast") : this.game.i18n.t("StatusBarMobileFreeLeft", t.value);
                                break;
                            case Is.FreePlayed:
                                var a = this.game.i18n.t("StatusBarMobileFreePlayed");
                                this.textFree.text = "".concat(a, "<value>").concat(t.value, "</value>");
                                break;
                            case Is.FreeRoundLeft:
                                var r = this.game.i18n.t("StatusBarMobileFreeRoundLeft");
                                this.textFreeRound.text = "".concat(r, "<value>").concat(t.value, "</value>");
                                break;
                            case Is.BonusLeft:
                                var h = 0 === t.value,
                                    l = -1 === t.value;
                                this.textBonus.text = l ? "" : h ? this.game.i18n.t("StatusBarMobileBonusLast") : this.game.i18n.t("StatusBarMobileBonusLeft", t.value);
                                break;
                            case Is.TotalWin:
                                var d = this.game.i18n.t("StatusBarMobileTotalWin", this.game.i18n.currency({
                                    withBrace: !0
                                }));
                                this.textTotalWin.text = "".concat(d, "<value>").concat(this.game.helpers.toMoney(t.value), "</value>")
                        }
                        this.resize()
                    }
                    changeState(t) {
                        this.state = t, t === Ds.Free ? (this.textFree.visible = !0, this.textTotalWin.visible = !0, this.textWin.visible = !0, this.textBonus.visible = !1, this.visible = !0) : t === Ds.Normal ? (this.textFree.visible = !1, this.textTotalWin.visible = !1, this.textWin.visible = !0, this.textBonus.visible = !1, this.visible = !0) : t === Ds.Bonus && (this.textBonus.visible = !0, this.textTotalWin.visible = !0, this.textWin.visible = !1, this.visible = !0), this.resize()
                    }
                }
                class Us extends(q(n.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "buttonSpin", void 0), this.interactive = !0, this.buttonMode = !0, this.buttonSpin = this.addChild(new it("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACGCAMAAAAvpwKjAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAByUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////3C/CN8AAAAldFJOUwC/70DfEIBg/iDeb1AwkAFwX88hj3/uvp+voEERzjFPcWFRnrBEY9GsAAAE1UlEQVR42s2caXvqLBCGBRKWbJqoWaz2rPz/v/hq0/dcRgMMZIjOV5v27jMLzEDcbBZYqkomblYwptLN+laKakionlpDqpytRZCyijwCTGCqIrowKicaYCQvI+oAYxgtyVUUCObB8K1JjS9EowMsqzElSY9UB1pyRAMJhxhBUBKHJXqhZbYYKQjt3IIpohEsM/2h7eHrY5deOdUoJo+zv34//pPyxwpSmAX5+Pa3FDaKmmpEexZk9+8jG8ZBI1s/EeQ8aACGajS63Tvm8y4BzRgq0RGsLWZj34jBqI5icjeW5anDTRi1jmVfgbp/cLgBIx7FF8fvR6nnMWJS3Nb/ZzSxPsWcQjMYhX4HDEXfASNOvfDGeAXFM4bfOkKboec8zzmvBkLxMHL4o00lHpZuVVQEBQMcniQ37JeUGJZjwAKDcuueTYlkGcYRtNGu3RttX5AJhoIosYNt5/1AJhgAr1bwloMHYgi3P7yGF/skCMP51Mm3++IBGM743Pk3fD+9MVxrCS0C+s7twRfDIQYNmd6kB181HGIkIdOBfeMdGwJfi9/UP1PsYhTxwmKCYReDBziEhFRR60OVP8VHErKmWFeTxH9mtAtbYa2PeSfJuQ9c6BNMl+z9t7MjRolZMUTAnnTEsPmkjpinDxiWapd4avErfEusEMUg4RgFnhjbUzjGCU2Ma90Kx2gQa8amIIEYqfnjv0HHDcUpCcBgiD75dyKYey9tlqqx6ASCnby2PZW5U118QCgGCsUgmPuMGVGqBoRhjieso12nKDeMSKHxJAqxYphLOcU+ShamTL5ilPEiFJzJVwyGW7yCytsVo8DcCgeKcsUQcfMVJIpkFgwR/Q6GEqMo3ealGGMm97eR3qsxnE30m2Dw98Co1sQwl69+1atT5uH8mhjrLW12W2ehd5p52/NjTYzhPTL2tNaGIz0OhLPUf0KEGhz/j1/I/J1BS7uEWc4nzX7TF499qaV5xPTKU5N9qaGpQtM4YsxcbrG1bYi5MjtxaGvQ4uY9ZvEdA7UlKDjQGjfTTKy7+xkSPUi3pvi7v//G8WZw3gPCDlQ5QibmM+NrczK2oJTFSRaL3FIBTyo/l5dx20yBQbY+GG7Z2sSWJSxXtD4sxLAek8jJNNM6jPm5zCXWSU83+Vn7UOgjlku0rKGxfFvi9lGy5La6Paz2djmSfZTAeC4HjtsFoRyfjknk0+bHMUelQeXj0/Fb/3j68JYvW//+2EEhnw/d09bFcThjn7t1Xq19WIC4LyzM33Lv3DN2DhYE8hJH5tlU3wkiYBECOaSXRUil8QCBvdjzx/T4RcNA9jYS6BtOxrc0NqrVMBvEeZ4kZT3wcFyy4NI72Szzj/MjQu5xadS6q/O780DJwPntZUPOe+J33Hix59lFr2KZ44RXZWtQtM5z5rKNTyEBEwsho2NwhJ3KShR+N07jUVw55DtQXP0i34Hi2rhEypfvl4bgE/0o9aP1ni3GqGNZwIXP9IAdIF1YU75rXxkWcRyTLZnmoVWQw7IpieowQC7LB5tisWfa3QbD+CIQx+ssPp7hmXw5xBeICALBhRhjpJOeJMY3nBZKkmdwEsojfhVHmYM0SaroXweiiv4iLSxJL9RmHbs2aIfuaX6RNH3OXvAVLapkhRiNlYsk+A+HePiNW7TbtgAAAABJRU5ErkJggg==", 245)), this.buttonSpin.setBackgroundAlpha(.6), this.buttonSpin.setBackgroundColor(this.game.config.get("colors.primary")), this.buttonSpin.useClickSound = !1
                    }
                    hide() {
                        this.visible = !1
                    }
                    show() {
                        this.visible = !0
                    }
                    enable() {
                        this.buttonSpin.interactive = !0
                    }
                    disable() {
                        this.buttonSpin.interactive = !1
                    }
                }
                class js extends hs {
                    constructor() {
                        var t;
                        super(), t = this, (0, o.Z)(this, "autoPlayButton", void 0), (0, o.Z)(this, "betButton", void 0), (0, o.Z)(this, "buttonAccept", void 0), (0, o.Z)(this, "buttonMenu", void 0), (0, o.Z)(this, "buttonQuickSpin", void 0), (0, o.Z)(this, "buttonSound", void 0), (0, o.Z)(this, "buttonSpin", void 0), (0, o.Z)(this, "onPressButtonSpin", void 0), (0, o.Z)(this, "state", void 0), (0, o.Z)(this, "statusBar", void 0), this.state = Ds.Normal, this.onPressButtonSpin = new(C()), this.statusBar = new Ns, this.statusBar.changeState(this.state), this.game.freeRound.enabled ? (this.statusBar.update({
                            type: Is.Win,
                            value: this.game.store.get("free:isFree", !1) ? this.game.wallet.coins : this.game.wallet.totalCoins
                        }), this.statusBar.update({
                            type: Is.FreeRoundLeft,
                            value: this.game.freeRound.left
                        })) : (this.statusBar.update({
                            type: Is.Win,
                            value: this.game.wallet.coins
                        }), this.statusBar.update({
                            type: Is.Balance,
                            value: this.game.wallet.balance
                        })), this.buttonMenu = new Ki, this.buttonSound = new as, this.buttonSpin = new Us, this.game.interaction.hover(this.buttonSpin, (() => {
                            this.buttonSpin.scale.set(1), a.kX.to(this.buttonSpin, .2, {
                                pixi: {
                                    scale: 1.04
                                },
                                yoyo: !0,
                                repeat: 1
                            })
                        })), this.game.interaction.click(this.buttonSpin, (() => {
                            "drop" !== this.game.store.get("server:nextAction") && "drop" !== this.game.store.get("server:actionction") && (this.onPressButtonSpin.handlers(!0) ? this.onPressButtonSpin.dispatch() : this.game.action.emit("clickSpin"))
                        })), this.buttonAccept = new Xi, this.buttonQuickSpin = new qi, this.autoPlayButton = new Yi, this.autoPlayButton.scale.set(1.6), this.betButton = new ls, this.betButton.onClick.add((() => this.game.action.emit("clickMaxBet"))), this.game.action.on("update:win", (function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                s = t.game.store.get("free:isFree", !1) || t.game.store.get("free:isEnd", !1);
                            t.game.freeRound.enabled ? (t.statusBar.update({
                                type: Is.Win,
                                value: s ? e : i
                            }), t.statusBar.update({
                                type: Is.TotalWin,
                                value: i,
                                disableZeroCheck: !0
                            })) : s || ti.isBonus() ? (t.statusBar.update({
                                type: Is.Win,
                                value: e
                            }), t.statusBar.update({
                                type: Is.TotalWin,
                                value: i,
                                disableZeroCheck: !0
                            })) : (t.statusBar.update({
                                type: Is.Win,
                                value: e
                            }), t.statusBar.update({
                                type: Is.Balance,
                                value: t.game.wallet.balance
                            }))
                        })), this.game.action.on("update:balance", (() => {
                            this.game.freeRound.enabled || ti.isFreespin() || this.statusBar.update({
                                type: Is.Balance,
                                value: this.game.wallet.balance
                            })
                        })), this.game.action.on("reward:reset", (() => {
                            this.statusBar.update({
                                type: Is.Win,
                                value: 0
                            })
                        })), this.game.action.on("free:restore", (() => {
                            this.state = Ds.Free, this.buttonMenu.hide(), this.buttonSpin.visible = !1, this.betButton.hide(), this.autoPlayButton.hide(), this.buttonSound.show(), this.statusBar.changeState(this.state), this.statusBar.update({
                                type: Is.Win,
                                value: 0
                            }), this.statusBar.update({
                                type: Is.TotalWin,
                                value: this.game.wallet.totalCoins,
                                disableZeroCheck: !0
                            }), this.statusBar.update({
                                type: Is.FreeLeft,
                                value: this.game.store.get("free:left", 0)
                            }), this.resize()
                        })), this.game.action.on("free:start", (() => {
                            this.state = Ds.Free, this.buttonMenu.hide(), this.buttonSpin.visible = !1, this.betButton.hide(), this.autoPlayButton.hide(), this.buttonSound.show(), this.statusBar.changeState(this.state), this.statusBar.update({
                                type: Is.Win,
                                value: 0
                            }), this.statusBar.update({
                                type: Is.TotalWin,
                                value: this.game.wallet.totalCoins,
                                disableZeroCheck: !0
                            }), this.statusBar.update({
                                type: Is.FreeLeft,
                                value: this.game.store.get("free:left", 1) - 1
                            }), this.resize()
                        })), this.game.action.on("free:stop", (() => {
                            this.state = Ds.Normal, this.buttonMenu.show(), this.buttonSpin.visible = !0, this.betButton.show(), this.buttonQuickSpin.show(), this.autoPlayButton.show(), this.buttonSound.hide(), this.statusBar.changeState(this.state), this.game.freeRound.enabled || this.statusBar.update({
                                type: Is.Balance,
                                value: this.game.wallet.balance
                            }), this.statusBar.update({
                                type: Is.Win,
                                value: this.game.wallet.totalCoins,
                                disableZeroCheck: !0
                            }), this.resize()
                        })), this.game.action.on("bonus:restore", (() => {
                            this.state = Ds.Bonus, this.buttonMenu.hide(), this.buttonSpin.visible = !1, this.betButton.hide(), this.autoPlayButton.hide(), this.buttonSound.show(), this.statusBar.changeState(this.state), this.statusBar.update({
                                type: Is.TotalWin,
                                value: this.game.wallet.preSpinTotalCoins,
                                disableZeroCheck: !0
                            }), this.statusBar.update({
                                type: Is.BonusLeft,
                                value: this.game.store.get("bonus:left", 0)
                            }), this.resize()
                        })), this.game.action.on("bonus:start", (() => {
                            this.state = Ds.Bonus, this.buttonMenu.hide(), this.buttonSpin.visible = !1, this.betButton.hide(), this.autoPlayButton.hide(), this.buttonSound.show(), this.statusBar.changeState(this.state), this.statusBar.update({
                                type: Is.TotalWin,
                                value: this.game.wallet.totalCoins,
                                disableZeroCheck: !0
                            }), this.statusBar.update({
                                type: Is.BonusLeft,
                                value: this.game.store.get("bonus:left", 1)
                            }), this.resize()
                        })), this.game.action.on("bonus:stop", (() => {
                            this.state = Ds.Normal, this.buttonMenu.show(), this.buttonSpin.visible = !0, this.betButton.show(), this.buttonQuickSpin.show(), this.autoPlayButton.show(), this.buttonSound.hide(), this.statusBar.changeState(this.state), this.game.freeRound.enabled || this.statusBar.update({
                                type: Is.Balance,
                                value: this.game.wallet.balance
                            }), this.statusBar.update({
                                type: Is.Win,
                                value: this.game.wallet.totalCoins,
                                disableZeroCheck: !0
                            }), this.resize()
                        })), this.game.action.on("state:ready_exit", (() => {
                            "drop" !== this.game.store.get("server:nextAction") && this.statusBar.update({
                                type: Is.Win,
                                value: !ti.isFreespin() && this.game.freeRound.enabled ? this.game.wallet.totalCoins : 0
                            })
                        })), this.game.action.on("state:ready_enter", (() => {
                            !ti.isBasic() || this.game.autoPlay.enabled || this.game.freeRound.enabled || "drop" === this.game.store.get("server:nextAction") || (this.betButton.show(), this.betButton.enable())
                        })), this.game.action.on("state:spin_enter", (() => {
                            var t = this.game.autoPlay.enabled,
                                e = ti.isFreespin(),
                                i = ti.isBonus();
                            if (this.betButton.disable(), t || this.autoPlayButton.disable(), !e && !i)
                                if (this.game.freeRound.enabled) {
                                    var s = this.game.freeRound.left;
                                    this.statusBar.update({
                                        type: Is.FreeRoundLeft,
                                        value: "drop" === this.game.store.get("server:nextAction") ? s : s - 1
                                    })
                                } else {
                                    var o = this.game.wallet.balance,
                                        n = this.game.betLevel.toCoins();
                                    "drop" !== this.game.store.get("server:nextAction") && this.statusBar.update({
                                        type: Is.Balance,
                                        value: o - n
                                    })
                                }
                        })), this.game.action.on("state:stop_exit", (() => {
                            var t = this.game.autoPlay.enabled,
                                e = ti.isFreespin(),
                                i = ti.isBonus();
                            !t || e || i || "drop" === this.game.store.get("server:nextAction") || (this.buttonSpin.visible = !0, this.buttonSpin.interactive = !0)
                        })), this.game.action.on("state:setup_enter", (() => {
                            (ti.isFreespin() || ti.isBonus()) && (this.alpha = 0);
                            var t = "drop" === this.game.store.get("server:nextAction");
                            t && (this.buttonMenu.disable(), this.buttonSpin.visible = !1, this.buttonSpin.interactive = !1, this.autoPlayButton.disable()), (t || this.game.freeRound.enabled) && this.betButton.disable()
                        })), this.game.action.on("free:select_start", (() => {
                            a.kX.fromTo(this, .5, {
                                pixi: {
                                    alpha: 0
                                }
                            }, {
                                pixi: {
                                    alpha: 1
                                }
                            })
                        })), this.game.action.on("free:select_stop", (() => {
                            a.kX.fromTo(this, .5, {
                                pixi: {
                                    alpha: 0
                                }
                            }, {
                                pixi: {
                                    alpha: 1
                                }
                            })
                        })), this.game.action.on("bonus:select_start", (() => {
                            a.kX.fromTo(this, .5, {
                                pixi: {
                                    alpha: 0
                                }
                            }, {
                                pixi: {
                                    alpha: 1
                                }
                            })
                        })), this.game.action.on("bonus:select_stop", (() => {
                            a.kX.fromTo(this, .5, {
                                pixi: {
                                    alpha: 0
                                }
                            }, {
                                pixi: {
                                    alpha: 1
                                }
                            })
                        })), this.game.action.on("free:updateLeft", (t => {
                            this.statusBar.update({
                                type: Is.FreeLeft,
                                value: t
                            })
                        })), this.game.action.on("state:finish_exit", (() => {
                            var t = this.game.autoPlay.enabled,
                                e = ti.isFreespin(),
                                i = ti.isBonus();
                            e || t || i || "drop" === this.game.store.get("server:nextAction") || (this.buttonSpin.visible = !0, this.buttonSpin.interactive = !0, this.buttonQuickSpin.show(), this.autoPlayButton.show(), this.autoPlayButton.enable(), this.buttonMenu.show(), this.buttonMenu.enable())
                        })), this.game.freeRound.onFinish.once((() => {
                            this.statusBar.update({
                                type: Is.Balance,
                                value: this.game.wallet.balance
                            }), this.statusBar.update({
                                type: Is.Win,
                                value: this.game.wallet.totalCoins,
                                disableZeroCheck: !0
                            })
                        })), this.addChild(...[this.buttonSound, this.buttonMenu, this.game.config.get("autoPlay.available", !0) && this.autoPlayButton, this.game.config.get("quickSpin.available", !0) && this.buttonQuickSpin, this.betButton, this.buttonSpin, this.buttonAccept, this.statusBar].filter(Boolean))
                    }
                    resize() {
                        var t, e = this.game.menu.opened,
                            i = null === (t = this.game.leftHand) || void 0 === t ? void 0 : t.enabled;
                        if (this.game.device.landscape) this.betButton.position.set(120, 980), e && this.betButton.show(), i ? (this.buttonSound.position.set(120, this.state === Ds.Free || this.state === Ds.Bonus ? 300 : 780), this.buttonMenu.position.set(120, 120), this.buttonQuickSpin.position.set(120, 780), this.autoPlayButton.position.set(120, 300), this.buttonSpin.position.set(160, this.game.viewport.height / 2), this.buttonAccept.position.set(160, this.game.viewport.height / 2)) : (this.buttonSound.position.set(1780, this.state === Ds.Free || this.state === Ds.Bonus ? 300 : 780), this.buttonMenu.position.set(1780, 120), this.buttonQuickSpin.position.set(1780, 780), this.autoPlayButton.position.set(1780, 300), this.buttonSpin.position.set(1760, this.game.viewport.height / 2), this.buttonAccept.position.set(1760, this.game.viewport.height / 2));
                        else {
                            var s = 2 * this.game.viewport.paddingY + this.game.viewport.height;
                            this.buttonSound.position.set(110, this.state === Ds.Free || this.state === Ds.Bonus ? 100 : s - 318), this.autoPlayButton.position.set(540, s - 318), this.buttonQuickSpin.position.set(this.state === Ds.Normal ? 748 : 955, s - 318), this.buttonMenu.position.set(955, s - 318), this.betButton.position.set(332, s - 318), e && this.betButton.hide(), this.buttonSpin.scale.set(1), this.buttonSpin.position.set(this.game.viewport.width / 2, s - 590), this.buttonAccept.position.set(this.game.viewport.width / 2, s - 590)
                        }
                    }
                    lock() {
                        this.buttonSpin.interactive = !1, this.betButton.disable(), this.buttonMenu.disable(), this.autoPlayButton.disable(), this.buttonQuickSpin.disable()
                    }
                    unlock() {
                        this.buttonSpin.interactive = !0, this.betButton.enable(), this.buttonMenu.enable(), this.autoPlayButton.enable(), this.buttonQuickSpin.enable()
                    }
                    onSpinEnter() {
                        this.buttonMenu.disable()
                    }
                    onFinishEnter() {}
                    onRNBStart() {
                        this.statusBar.update({
                            type: Is.Balance,
                            value: this.game.wallet.balance
                        })
                    }
                    onPopupShow() {
                        this.autoPlayButton.disable(), this.buttonMenu.disable(), this.betButton.disable(), this.buttonSpin.interactive = !1, this.buttonQuickSpin.disable(), this.buttonSound.disable()
                    }
                    onPopupHide() {
                        ti.isFreespin() || (this.autoPlayButton.enable(), this.buttonMenu.enable(), this.betButton.enable()), this.buttonSpin.interactive = !0, this.buttonQuickSpin.enable(), this.buttonSound.enable()
                    }
                    onMenuOpen() {
                        this.buttonSound.show(), this.buttonMenu.hide(), this.buttonSpin.hide(), this.autoPlayButton.hide(), this.buttonQuickSpin.hide(), this.game.device.landscape ? this.betButton.show() : this.betButton.hide()
                    }
                    onMenuClose() {
                        this.buttonSound.hide(), this.buttonMenu.show(), this.buttonSpin.show(), this.betButton.show(), this.autoPlayButton.show(), this.buttonQuickSpin.show()
                    }
                    onBetSettingsOpen() {
                        this.buttonMenu.hide(), this.buttonSound.hide(), this.betButton.setActive(!0)
                    }
                    onBetSettingsClose() {
                        this.buttonSound.hide(), this.buttonMenu.show(), this.betButton.setActive(!1)
                    }
                    onAutoPlaySettingsOpen() {
                        this.buttonSpin.hide(), this.buttonMenu.hide(), this.buttonSound.hide(), this.buttonAccept.show(), this.autoPlayButton.setActive(!0)
                    }
                    onAutoPlaySettingsClose() {
                        this.buttonSpin.show(), this.buttonMenu.show(), this.buttonSound.hide(), this.buttonAccept.hide(), this.autoPlayButton.setActive(this.game.autoPlay.enabled)
                    }
                    onAutoPlayEnable(t) {
                        this.autoPlayButton.start(t)
                    }
                    onAutoPlayDisable() {
                        this.autoPlayButton.stop()
                    }
                    setAutoPlayCount(t) {
                        this.autoPlayButton.setCount(t)
                    }
                    updateBet() {
                        this.statusBar.update({
                            type: Is.Bet,
                            value: this.game.betLevel.toCoins()
                        })
                    }
                    enableButtonSpin() {
                        this.buttonSpin.interactive = !0
                    }
                    disableButtonSpin() {
                        this.buttonSpin.interactive = this.game.autoPlay.enabled, this.onPressButtonSpin.handlers(!0) && this.onPressButtonSpin.detachAll()
                    }
                    pressButtonSpin(t) {
                        this.buttonSpin.interactive = !0, this.onPressButtonSpin.once(t)
                    }
                    beforeFreeSpinsPopup() {
                        this.alpha = 0
                    }
                    updateFreeLeft(t) {
                        this.statusBar.update({
                            type: Is.FreeLeft,
                            value: t
                        })
                    }
                    updateBonusLeft(t) {
                        this.statusBar.update({
                            type: Is.BonusLeft,
                            value: t
                        })
                    }
                }! function(t) {
                    t[t.START = 0] = "START", t[t.END = 1] = "END", t[t.RESTORE = 2] = "RESTORE"
                }(Ws || (Ws = {}));
                class zs extends(q(n.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "_timeline", void 0), (0, o.Z)(this, "_keyboardSpace", void 0), (0, o.Z)(this, "_content", void 0), (0, o.Z)(this, "_overlay", void 0), (0, o.Z)(this, "_image", void 0), (0, o.Z)(this, "_title", void 0), (0, o.Z)(this, "_win", void 0), (0, o.Z)(this, "_description", void 0), (0, o.Z)(this, "_buttonText", void 0), (0, o.Z)(this, "completeResolve", void 0), (0, o.Z)(this, "tweenAutoTimeout", void 0), this.visible = !1, this.completeResolve = !1, this.cursor = "pointer", this.interactive = !1, this._overlay = this.addChild(new nt(.7)), this._content = this.addChild(new n.Container), this._content.interactive = !1, this._content.interactiveChildren = !1, this._title = this._content.addChild(new Mt("", {
                            default: {
                                fill: "#fffb91",
                                fontFamily: "Avenir-Bold",
                                fontSize: 45,
                                align: "center",
                                wordWrap: !0
                            }
                        })), this._title.anchor.set(.5, 0), this._title.position.set(0), this._image = this._content.addChild(new n.Sprite(this.game.loader.getAsset("assets/images/common/box.png"))), this._image.anchor.set(.5, 0), this._image.position.set(0, 100), this._win = this._content.addChild(new Mt("", {
                            default: {
                                fill: "#ffffff",
                                fontFamily: "Avenir-Bold",
                                align: "center",
                                fontSize: 130,
                                wordWrap: !0
                            },
                            value: {
                                fill: "#ffffff"
                            }
                        })), this._win.anchor.set(.5, 0), this._win.position.set(0, 360), this._description = this._content.addChild(new Mt("", {
                            default: {
                                fontFamily: "Avenir-Bold",
                                fill: "#ffffff",
                                align: "center",
                                fontSize: 43,
                                wordWrap: !0
                            },
                            value: {
                                fill: "#ffcc00"
                            }
                        })), this._description.anchor.set(.5, 0), this._description.position.set(0, 480), this._buttonText = this._content.addChild(new Mt("", {
                            default: {
                                fontFamily: "Avenir-Bold",
                                fill: "#faf2c4",
                                fontSize: this.game.device.portrait && !this.game.device.desktop ? 34 : 45,
                                align: "center",
                                wordWrap: !0
                            }
                        })), this._buttonText.anchor.set(.5, 0), this._buttonText.position.set(0, 600), this._timeline = new a.TY({
                            paused: !0
                        }), this._timeline.set([this._content], {
                            pixi: {
                                alpha: 0
                            }
                        }).to(this._content, .3, {
                            pixi: {
                                alpha: 1
                            }
                        }, .5), this._keyboardSpace = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Space), this._keyboardSpace.onPress.add((() => this.hide())), this._keyboardSpace.disable(), this.game.interaction.click(this, (() => this.hide()))
                    }
                    hide() {
                        this.interactive = !1, this._keyboardSpace.disable(), this._buttonText.scale.set(1), this.tweenAutoTimeout && (this.tweenAutoTimeout.kill(), this.tweenAutoTimeout = null);
                        var t = this.game.store.get("free:isEnd", !1);
                        this.game.action.emit("sound:click"), t ? this.game.action.emit("free:select_stop") : this.game.action.emit("free:select_start"), "function" == typeof this.completeResolve && (this.completeResolve(), this.completeResolve = null), this.visible = !1
                    }
                    show(t) {
                        this.visible = !0;
                        var e = Wi[this.game.store.get("free:multiplier", 1)],
                            i = e[e.length - 1].toUpperCase(),
                            s = this.game.autoPlay.enabled;
                        return new Promise((e => {
                            this.completeResolve = e;
                            var o = "";
                            if (t === Ws.START) {
                                o = "free:start", this.game.action.emit("sound:free_start");
                                var n = this.game.store.get("free:left", 0);
                                this._title.text = this.game.i18n.t("PopupFreeSpinsTitle"), this._win.text = this.game.i18n.t("PopupFreeSpinsWinStart", n), this._description.text = this.game.i18n.t("PopupFreeSpinsDescription", i), this._buttonText.text = this.game.i18n.t("PopupFreeSpinsButton"), s && (this.tweenAutoTimeout = a.kX.to(this._buttonText, 1, {
                                    pixi: {
                                        scale: 1.1
                                    },
                                    repeat: 5,
                                    yoyo: !0,
                                    onComplete: () => {
                                        this.hide()
                                    }
                                }))
                            } else if (t === Ws.END) {
                                o = "free:stop", this.game.action.emit("sound:free_stop");
                                var r = this.game.helpers.toMoney(this.game.wallet.freespinCoins),
                                    h = this.game.store.get("free:count", 0);
                                this._title.text = this.game.i18n.t("PopupFreeSpinsTitle"), this._win.text = this.game.i18n.t("PopupFreeSpinsWinStop", "".concat(r, "\t").concat(this.game.i18n.currency())), this._description.text = this.game.i18n.t("PopupFreeSpinsStopDescription", h), this._buttonText.text = this.game.i18n.t("PopupFreeSpinsButton"), s && (this.tweenAutoTimeout = a.kX.to(this._buttonText, 1, {
                                    pixi: {
                                        scale: 1.1
                                    },
                                    repeat: 5,
                                    yoyo: !0,
                                    onComplete: () => {
                                        this.hide()
                                    }
                                }))
                            } else if (t === Ws.RESTORE) {
                                o = "free:restore", this.game.action.emit("sound:free_start");
                                var l = this.game.store.get("free:left", 0);
                                this._title.text = this.game.i18n.t("PopupFreeSpinsTitleRestore"), this._win.text = 0 === l ? this.game.i18n.t("PopupFreeSpinsWinRestoreLast") : this.game.i18n.t("PopupFreeSpinsWinRestore", l), this._description.text = this.game.i18n.t("PopupFreeSpinsDescription", i), this._buttonText.text = this.game.i18n.t("PopupFreeSpinsButton")
                            }
                            this._image.position.set(0, this._title.y + this._title.height), this._win.position.set(0, this._image.y + this._image.height - 90), this._description.position.set(0, this._win.y + this._win.height), this._content.position.set(this.game.viewport.width / 2, this.game.viewport.height / 2), this._content.pivot.set(0, this._content.height / 2), this._buttonText.position.set(0, this.game.device.portrait && !this.game.device.desktop ? 1190 : 810), this.showContent(t).then((() => {
                                this.game.action.emit(o), this._keyboardSpace.enable(), this.interactive = !0
                            }))
                        }))
                    }
                    showContent(t) {
                        return t === Ws.RESTORE ? Promise.resolve() : new Promise((t => {
                            this._timeline.vars.onComplete = () => {
                                t(), this._timeline.vars.onComplete = null
                            }, this._timeline.restart()
                        }))
                    }
                    resize() {
                        this._overlay.width = this.game.viewport.width + 2 * this.game.viewport.paddingX, this._overlay.height = this.game.viewport.height + 2 * this.game.viewport.paddingY, this._overlay.position.set(-this.game.viewport.paddingX, 0), this.hitArea = new n.Rectangle(-this.game.viewport.paddingX, 0, this.game.viewport.width + 2 * this.game.viewport.paddingX, this.game.viewport.height), this._title.setTagStyle("default", {
                            wordWrapWidth: this.game.device.portrait ? this.game.viewport.width / 1.2 : this.game.viewport.width / 2.2,
                            breakWords: "ja" === window.language
                        }), this._win.setTagStyle("default", {
                            wordWrapWidth: this.game.viewport.width / 1.2
                        }), this._description.setTagStyle("default", {
                            wordWrapWidth: this.game.device.portrait ? this.game.viewport.width / 1.2 : this.game.viewport.width / 2.2
                        }), this._buttonText.setTagStyle("default", {
                            wordWrapWidth: this.game.viewport.width,
                            breakWords: "ja" === window.language
                        }), this._image.position.set(0, this._title.y + this._title.height), this._win.position.set(0, this._image.y + this._image.height - 90), this._description.position.set(0, this._win.y + this._win.height), this._buttonText.position.set(0, this.game.device.portrait && !this.game.device.desktop ? 1190 : 810), this._content.position.set(this.game.viewport.width / 2, this.game.viewport.height / 2), this._content.pivot.set(0, this._content.height / 2)
                    }
                }
                class Vs extends(q(Mt)) {
                    constructor(t) {
                        super("", {
                            default: {
                                fontSize: 50,
                                fill: t,
                                fontFamily: "Avenir-Bold",
                                align: "center"
                            }
                        }), this.anchor.set(.5), this.text = this.game.i18n.t("IntroScreenLoaderText")
                    }
                    resize() {
                        this.game.device.desktop || (this.game.device.portrait ? this.scale.set(1) : this.style.fontSize = 10)
                    }
                }
                class Gs extends(q(n.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "spaceKey", void 0), (0, o.Z)(this, "toggleInterval", void 0), (0, o.Z)(this, "currentViewIndex", void 0), (0, o.Z)(this, "hideTimeoutId", void 0), (0, o.Z)(this, "onEnd", void 0), (0, o.Z)(this, "pagination", void 0), (0, o.Z)(this, "arrows", void 0), (0, o.Z)(this, "slides", void 0), (0, o.Z)(this, "playButton", void 0), (0, o.Z)(this, "hideButton", void 0), (0, o.Z)(this, "loaderText", void 0), (0, o.Z)(this, "loaderAnimation", void 0), this.visible = !0, this.interactive = !0, this.currentViewIndex = 0, this.slides = [], this.hideTimeoutId = null, this.toggleInterval = setInterval((() => {
                            this.currentViewIndex !== this.visibleViewsCount - 1 ? this.toggleScreen(this.currentViewIndex + 1) : clearInterval(this.toggleInterval)
                        }), 4e3), this.game.interaction.click(this, (() => clearTimeout(this.hideTimeoutId)), this), this.onEnd = new(C()), this.spaceKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Space), this.game.interaction.swipeX(this, (t => {
                            clearInterval(this.toggleInterval), clearTimeout(this.hideTimeoutId), this.arrowClick(t)
                        })), this.loaderText = this.createLoadingText(0), this.loaderAnimation = a.kX.to(this.loaderText, .5, {
                            pixi: {
                                scale: 1.1
                            },
                            repeat: 1 / 0,
                            yoyo: !0
                        })
                    }
                    setupPagination() {
                        var t;
                        null === (t = this.pagination) || void 0 === t || t.buttons.forEach(((t, e) => {
                            this.game.interaction.click(t, (() => {
                                clearInterval(this.toggleInterval), clearTimeout(this.hideTimeoutId), this.toggleScreen(e)
                            }))
                        }))
                    }
                    setupArrows() {
                        var t;
                        null === (t = this.arrows) || void 0 === t || t.allArrows.forEach((t => {
                            this.game.interaction.click(t, (() => {
                                clearInterval(this.toggleInterval), clearTimeout(this.hideTimeoutId), this.arrowClick(t.side)
                            }))
                        }))
                    }
                    setupHideButton() {
                        this.hideButton.onClick.add((t => {
                            clearInterval(this.toggleInterval), clearTimeout(this.hideTimeoutId), this.game.preferences.set("showIntroScreen", t)
                        }))
                    }
                    setupSlides() {
                        this.toggleScreen(0)
                    }
                    arrowClick(t) {
                        "left" === t && 0 === this.currentViewIndex ? this.toggleScreen(this.visibleViewsCount - 1) : "right" === t && this.currentViewIndex === this.visibleViewsCount - 1 ? this.toggleScreen(0) : this.toggleScreen("left" === t ? this.currentViewIndex - 1 : this.currentViewIndex + 1)
                    }
                    toggleScreen(t) {
                        var e, i, s;
                        null === (e = this.visibleViews[this.currentViewIndex]) || void 0 === e || e.hide(), this.currentViewIndex = t, null === (i = this.visibleViews[this.currentViewIndex]) || void 0 === i || i.show(), null === (s = this.pagination) || void 0 === s || s.toggleButton(this.currentViewIndex)
                    }
                    updateProgress(t) {}
                    play() {
                        return new Promise((t => {
                            this.playButton.visible = !0, this.loaderText && (this.loaderText.visible = !1, this.loaderAnimation.kill()), this.spaceKey.onPress.add((() => this.onEnd.dispatch())), this.onEnd.once((() => {
                                clearTimeout(this.hideTimeoutId), clearInterval(this.toggleInterval), this.spaceKey.onPress.detachAll(), t(), a.kX.to(this, .5, {
                                    pixi: {
                                        alpha: 0
                                    },
                                    onComplete: () => {
                                        this.game.rootNode.removeChild(this)
                                    }
                                })
                            })), this.hideTimeoutId = setTimeout((() => this.onEnd.dispatch()), 4e3 * this.visibleViewsCount), this.game.interaction.click(this.playButton, (() => this.onEnd.dispatch()))
                        }))
                    }
                    get visibleViews() {
                        return this.slides.filter((t => t.visible))
                    }
                    get visibleViewsCount() {
                        return this.visibleViews.length
                    }
                    createDelimeter(t, e) {
                        var i = new n.Graphics;
                        return i.beginFill(t, 1), i.drawRect(0, 0, e, 4), i.endFill(), i
                    }
                    createLoadingText(t) {
                        return this.addChild(new Vs(t))
                    }
                }
                class Hs extends(q(n.Sprite)) {
                    constructor(t) {
                        super(), this.side = t, this.cursor = "pointer", this.interactive = !0, this.texture = this.game.loader.getAsset("assets/images/introScreen/texture.json", "chevron"), this.scale.x = "left" === t ? -1 : 1
                    }
                    disable() {
                        this.interactive = !1
                    }
                    enable() {
                        this.interactive = !0
                    }
                }
                class Qs extends(q(n.Container)) {
                    constructor(t) {
                        super(), (0, o.Z)(this, "left", void 0), (0, o.Z)(this, "right", void 0), this.renderable = t > 1, this.left = this.addChild(new Hs("left")), this.left.position.set(0, 0), this.right = this.addChild(new Hs("right")), this.right.position.set(910, 0)
                    }
                    get allArrows() {
                        return this.children.map((t => t))
                    }
                    disable() {
                        this.allArrows.forEach((t => t.disable()))
                    }
                    enable() {
                        this.allArrows.forEach((t => t.enable()))
                    }
                    resize() {
                        this.visible = this.game.device.desktop
                    }
                }
                class Ys extends(q(n.Sprite)) {
                    constructor() {
                        super(), (0, o.Z)(this, "enabled", void 0), this.interactive = !0, this.cursor = "pointer", this.enabled = !1, this.texture = this.game.loader.getAsset("assets/images/introScreen/texture.json", "btnOff")
                    }
                    btnOn(t) {
                        this.enabled = !0, this.texture = this.game.loader.getAsset("assets/images/introScreen/texture.json", "btnOn".concat(null != t ? t : ""))
                    }
                    btnOff() {
                        this.enabled = !1, this.texture = this.game.loader.getAsset("assets/images/introScreen/texture.json", "btnOff")
                    }
                    disable() {
                        this.interactive = !1, this.cursor = "default"
                    }
                    enable() {
                        this.enabled || (this.interactive = !0, this.cursor = "pointer")
                    }
                }
                class Xs extends(q(n.Container)) {
                    constructor(t, e) {
                        super(), (0, o.Z)(this, "buttonsContainer", void 0), this.buttonsContainer = this.addChild(new n.Container);
                        for (var i = 0; i < t; i++) {
                            var s = this.buttonsContainer.addChild(new Ys);
                            s.anchor.x = .5, s.x = i * e
                        }
                        this.toggleButton(0)
                    }
                    toggleButton(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        this.buttons.forEach((t => t.btnOff())), this.buttons[t].btnOn(e ? t : void 0)
                    }
                    disable() {
                        this.buttons.forEach((t => t.disable()))
                    }
                    enable() {
                        this.buttons.forEach((t => t.enable()))
                    }
                    get buttons() {
                        return this.buttonsContainer.children.map((t => t))
                    }
                }
                class Ks extends(q(n.Sprite)) {
                    constructor() {
                        super(), this.texture = this.game.loader.getAsset("assets/images/introScreen/texture.json", "btnPlay"), this.interactive = !0, this.buttonMode = !0
                    }
                }
                class qs extends(q(n.Container)) {
                    constructor(t) {
                        super(), (0, o.Z)(this, "button", void 0), (0, o.Z)(this, "buttonText", void 0), (0, o.Z)(this, "checked", void 0), (0, o.Z)(this, "onClick", void 0), this.interactive = !0, this.cursor = "pointer", this.checked = !1, this.onClick = new(C()), this.button = this.addChild(new Ys), this.buttonText = this.addChild(new Mt("", {
                            default: {
                                fill: t,
                                fontFamily: "Avenir-Bold",
                                fontSize: 20,
                                align: "center",
                                dropShadow: !0,
                                dropShadowAlpha: .5,
                                dropShadowAngle: .5,
                                dropShadowDistance: 4,
                                lineJoin: "round",
                                strokeThickness: 10
                            }
                        })), this.buttonText.text = this.game.i18n.t("IntroScreenHideButtonText"), this.buttonText.anchor.set(0, .5), this.game.interaction.click(this, (() => {
                            var t = !this.checked;
                            this.setChecked(t), this.onClick.dispatch(t)
                        })), this.setChecked(this.game.preferences.get("showIntroScreen", !0))
                    }
                    setChecked(t) {
                        this.checked = t, this.checked ? this.button.btnOff() : this.button.btnOn()
                    }
                }
                class Js extends qs {
                    resize() {
                        this.game.device.desktop ? (this.position.set(1250, 875), this.button.scale.set(1), this.buttonText.position.set(50, 37)) : (this.position.set(this.game.device.landscape ? 1180 : 500, this.game.device.landscape ? 875 : 1330), this.button.scale.set(1.6), this.buttonText.setTagStyle("default", {
                            wordWrap: !this.game.device.landscape,
                            wordWrapWidth: 300
                        }), this.buttonText.scale.set(1.5), this.buttonText.position.set(80, 60))
                    }
                }
                class $s extends(q(n.Container)) {
                    constructor(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        super(), (0, o.Z)(this, "description", void 0), (0, o.Z)(this, "featurePreview", void 0), this.alpha = 0, e && (this.visible = this.game.config.get("rnb", !0)), this.featurePreview = new n.Sprite(this.game.loader.getAsset("assets/images/introScreen/texture.json", "slide".concat(t))), this.featurePreview.anchor.x = .5, this.featurePreview.position.set(0, 0), this.description = new Mt("", {
                            default: {
                                fill: "#ffffff",
                                fontFamily: "Avenir-Bold",
                                fontSize: 25,
                                align: "left",
                                wordWrap: !0
                            }
                        }), this.description.text = this.game.i18n.t("IntroScreenDescription".concat(t)).toUpperCase(), this.description.position.set(-456, this.featurePreview.y + this.featurePreview.height - 20), this.addChild(this.description, this.featurePreview)
                    }
                    hide() {
                        a.kX.killTweensOf(this), a.kX.to(this, .3, {
                            pixi: {
                                alpha: 0
                            }
                        })
                    }
                    show() {
                        a.kX.killTweensOf(this), a.kX.to(this, .3, {
                            pixi: {
                                alpha: 1
                            }
                        })
                    }
                }
                class to extends $s {
                    constructor(t) {
                        super(t, arguments.length > 1 && void 0 !== arguments[1] && arguments[1]), this.featurePreview.anchor.x = .5, this.featurePreview.position.set(0, 0), this.description.anchor.x = .5, this.description.position.set(0, this.featurePreview.y + this.featurePreview.height - 40)
                    }
                    resize() {
                        this.description.setTagStyle("default", {
                            wordWrapWidth: this.game.viewport.width / 2.4
                        }), this.game.device.desktop ? (this.scale.set(1), this.position.set(960, 100)) : this.game.device.landscape ? (this.description.setTagStyle("default", {
                            wordWrapWidth: this.game.viewport.width / 2.4
                        }), this.scale.set(1), this.position.set(960, 160)) : (this.description.setTagStyle("default", {
                            wordWrapWidth: this.game.viewport.width / 1.5
                        }), this.scale.set(1.3), this.position.set(550, 380))
                    }
                }
                class eo extends Gs {
                    constructor() {
                        super(), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "logo", void 0), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "playButtonBg", void 0), this.overlay = this.addChildAt(new nt(.75), 0), this.content = this.addChild(new n.Container), this.slides.push(this.content.addChild(new to(0))), this.slides.push(this.content.addChild(new to(1))), this.slides.push(this.content.addChild(new to(2, !0))), this.logo = this.content.addChild(new n.Sprite(this.game.loader.getAsset("logo"))), this.logo.anchor.x = .5, this.pagination = this.content.addChild(new Xs(this.visibleViewsCount, 40)), this.hideButton = this.content.addChild(new Js("#29e6df")), this.arrows = this.content.addChild(new Qs(this.visibleViewsCount)), this.arrows.right.position.set(980, 0), this.arrows.position.set(470, 400), this.playButton = this.content.addChild(new Ks), this.playButton.visible = !1, this.playButton.anchor.set(.5), this.setupArrows(), this.setupPagination(), this.setupHideButton(), this.setupSlides()
                    }
                    createLoadingText() {
                        return super.createLoadingText(4716276)
                    }
                    resize() {
                        this.logo.position.set(this.game.viewport.width / 2, 0), this.content.scale.set(1), this.content.position.set(0, this.game.device.portrait && !this.game.device.desktop ? 40 : 0), this.game.device.desktop ? (this.pagination.scale.set(1), this.pagination.position.set(500, 876)) : (this.pagination.scale.set(1.6), this.pagination.position.set(this.game.device.landscape ? 500 : 140, this.game.device.landscape ? 876 : 1330)), this.game.device.portrait && !this.game.device.desktop ? (this.logo.scale.set(2), this.playButton.scale.set(1.4), this.playButton.position.set(this.game.viewport.width / 2, 1550), this.loaderText.position.set(this.game.viewport.width / 2, 1560)) : (this.logo.scale.set(.9), this.playButton.scale.set(1), this.playButton.position.set(this.game.viewport.width / 2, this.game.device.desktop ? 900 : 930), this.loaderText.position.set(this.game.viewport.width / 2, this.game.device.desktop ? 910 : 935))
                    }
                }
                class io extends(q(n.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "Paytable"), (0, o.Z)(this, "scrollView", void 0), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "content", void 0), this.visible = !1, this.interactive = !0, this.scrollView = this.addChild(new rt), this.scrollView.paddingBottom = 120, this.title = this.scrollView.addChild(new gt(this.game.i18n.t("MenuPaytable"))), this.title.withGameName(), this.title.anchor.set(.5, 0), this.content = this.scrollView.addChild(new n.Container)
                    }
                    open() {
                        this.visible = !0, this.scrollView.scrollTo(0, 0)
                    }
                    close() {
                        this.visible && (this.visible = !1)
                    }
                    alignSection() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            e = -t,
                            i = 0;
                        this.content.children.filter((t => t.visible)).forEach((s => {
                            s.y = e + i + t, e = s.y, i = s.height
                        }))
                    }
                    resize() {
                        var {
                            device: t,
                            viewport: e,
                            leftHand: i
                        } = this.game;
                        t.desktop ? (this.title.position.set(e.width / 2, 62), this.scrollView.hitAreaOffsetLeft = 0, this.scrollView.hitAreaOffsetRight = 0, this.scrollView.resize(e.width, 960), this.scrollView.position.set(0, 0), this.content.position.set(380, this.title.y + this.title.height + 60)) : t.landscape ? (this.title.position.set(e.width / 2 + e.paddingX, 120), i.enabled ? (this.scrollView.hitAreaOffsetLeft = e.paddingX + 180, this.scrollView.hitAreaOffsetRight = e.paddingX, this.content.position.set(e.paddingX + 220, this.title.y + this.title.height + 60)) : (this.scrollView.hitAreaOffsetLeft = e.paddingX, this.scrollView.hitAreaOffsetRight = e.paddingX + 180, this.content.position.set(e.paddingX + 60, this.title.y + this.title.height + 60)), this.scrollView.resize(e.width + 2 * e.paddingX, 940), this.scrollView.position.set(-e.paddingX, 0)) : (this.title.position.set(e.width / 2 + e.paddingX, 100), this.scrollView.resize(e.width + 2 * e.paddingX, 2 * e.paddingY + e.height - 360), this.scrollView.position.set(-e.paddingX, 0), this.scrollView.hitAreaOffsetLeft = 0, this.scrollView.hitAreaOffsetRight = 0, this.content.position.set(e.paddingX + 60, this.title.y + this.title.height + 60)), this.alignSection(50)
                    }
                }
                class so extends(q(n.Sprite)) {
                    constructor() {
                        super(n.Texture.WHITE), this.tint = 2763563
                    }
                    resize() {
                        this.game.device.desktop ? (this.height = 4, this.width = 1120) : this.game.device.landscape ? (this.height = 6, this.width = 1580) : (this.height = 6, this.width = 950)
                    }
                }

                function oo(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function no(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? oo(Object(i), !0).forEach((function(e) {
                            (0, o.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : oo(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class ao extends(q(n.Text)) {
                    constructor(t) {
                        super(t, {
                            fill: "white",
                            fontSize: 21,
                            fontFamily: "Avenir-Regular",
                            wordWrap: !0,
                            wordWrapWidth: 940,
                            breakWords: !0
                        }), this.scale.set(1.2)
                    }
                    setTagStyle(t, e) {
                        this.style = no(no({}, this.style), e)
                    }
                    resize() {
                        this.game.device.desktop ? this.scale.set(1.2) : this.game.device.landscape ? (this.scale.set(2.2), this.setTagStyle("default", {
                            wordWrapWidth: 670
                        })) : (this.scale.set(2.2), this.setTagStyle("default", {
                            wordWrapWidth: 400
                        }))
                    }
                }
                class ro extends(q(n.Text)) {
                    constructor(t) {
                        super(t, {
                            fontSize: 34,
                            fontFamily: "Avenir-Bold",
                            wordWrap: !0,
                            wordWrapWidth: 1150
                        }), this.style.fill = this.game.config.get("colors.primary")
                    }
                    resize() {
                        this.game.device.desktop ? (this.scale.set(1), this.style.wordWrapWidth = 1150) : this.game.device.landscape ? (this.scale.set(1.6), this.style.wordWrapWidth = 900) : (this.scale.set(1.6), this.style.wordWrapWidth = 600)
                    }
                }
                class ho extends(q(n.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "_sectionParagraph1", void 0), (0, o.Z)(this, "_sectionTitle", void 0), this.visible = this.game.config.get("rnb", !0), this._sectionTitle = new ro(this.game.i18n.t("PaytableSectionRiskTitle").toUpperCase()), this._sectionTitle.position.set(0, 0), this._sectionParagraph1 = new ao(this.game.i18n.t("PaytableSectionRiskContent1")), this._sectionParagraph1.position.set(0, this._sectionTitle.y + this._sectionTitle.height + 30), this.addChild(this._sectionTitle), this.addChild(this._sectionParagraph1)
                    }
                    resize() {
                        this.game.device.desktop || this._sectionParagraph1.position.set(0, this._sectionTitle.y + this._sectionTitle.height + 30)
                    }
                }
                class lo extends(q(n.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "_betWays", void 0), (0, o.Z)(this, "_payTableParagraph", void 0), (0, o.Z)(this, "_payTableTitle", void 0), (0, o.Z)(this, "_textureAtlas", void 0), this._payTableTitle = new ro(this.game.i18n.t("PaytableSectionBetLinesTitle").toUpperCase()), this._payTableParagraph = new ao(this.game.i18n.t("PaytableSectionBetLinesContent")), this._payTableParagraph.y = 190, this._textureAtlas = this.game.loader.getAsset("paytable"), this._betWays = new n.Sprite(this._textureAtlas.payways_scheme), this._betWays.scale.set(2), this._betWays.y = 60, this.addChild(this._payTableTitle, this._betWays, this._payTableParagraph)
                    }
                    resize() {
                        this.game.device.desktop || (this.game.device.landscape, this._betWays.scale.set(3), this._betWays.y = this._payTableTitle.y + this._payTableTitle.height + 30, this._payTableParagraph.y = this._betWays.y + this._betWays.height + 30)
                    }
                }
                const co = lo;
                class uo extends(q(n.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "_sectionParagraph", void 0), (0, o.Z)(this, "_sectionTitle", void 0), this._sectionTitle = new ro(this.game.i18n.t("PaytableSectionFreeTitle").toUpperCase()), this._sectionParagraph = new ao(this.game.i18n.t("PaytableSectionFreeContent")), this._sectionParagraph.position.set(0, this._sectionTitle.y + this._sectionTitle.height + 30), this.addChild(this._sectionTitle), this.addChild(this._sectionParagraph)
                    }
                    resize() {
                        this.game.device.desktop || this._sectionParagraph.position.set(0, this._sectionTitle.y + this._sectionTitle.height + 30)
                    }
                }
                class po extends(q(n.Container)) {
                    constructor(t) {
                        var e, i, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
                        super(), (0, o.Z)(this, "findIndex", void 0), (0, o.Z)(this, "findSymbol", void 0), (0, o.Z)(this, "foreground", void 0), (0, o.Z)(this, "layout", void 0), (0, o.Z)(this, "payoutSymbol", void 0), (0, o.Z)(this, "payoutText", void 0), (0, o.Z)(this, "payouts", void 0), this.payouts = null !== (e = null === (i = this.game.server.response) || void 0 === i ? void 0 : i.paytable) && void 0 !== e ? e : [], this.layout = this.game.config.get("slot.layout.".concat(s), []), this.findIndex = this.layout.findIndex((e => e.assetName === t)), this.findSymbol = this.layout[this.findIndex], this.foreground = this.addChild(n.Sprite.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAi8AAAFpCAMAAABj4ziaAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUdwTBcXFxUVFRUVFRUVFRUVFQ8PDxYWFg8PDxUVFRYWFhUVFRYWFhQUFBYWFhUVFRUVFRUVFRQUFBQUFBUVFRQUFBYWFhYWFvIqbjAAAAAXdFJOUwAg72De3yD+EI+fMM+f7+6QX6DPzp6gP4hhIQAAAyNJREFUeNrt2VluwkAQRdEyBtxtmylk2P9OAyRCJgQoonyes4Snq3JLjjgr7WqcfcDUbFztSlxbbrXCDavlj1pKNQp31Isbs1xYhLsWkxMzyIWHwQyuC3+4MEUupIL5esN46pJ89J6+RnYg6fhFejEDSdvD68UKZK1LtFYgrfU54gl97I1A2hj+MvLEAyZswBP0gl7QC3pBL+gF9IJe0At6QS/oBfSCXtALekEv6AX0gl7QC3pBL+gF9IJe0At6QS/oBfSCXtALekEv6AX0gl7QC3pBL+gF9IJe0At6QS+gF/SCXtALekEvoBf0gl7QC3pBL6AX9IJe0At6QS+gF/SCXtALekEvoBf0gl7QC3pBL6AX9IJe0At6QS+gF/SCXtALegG9oBf0gl7QC3oBvaAX9IJe0At6Ab2gF/SCXtALegG9oBf0gl7QC3oBvaAX9IJe0At6Ab2gF/SCXtALegG9oBf0gl7QC+gFvaAX9IJe0AvoBb2gF/SCXtAL6AW9oBf0gl7QC+gFvaAX9IJe0AvoBb2gF/SCXtAL6AW9oBf0gl7QC+gFvaAX9IJe0AvoBb2gF/SCXkAv6AW9oBf0gl5AL+gFvaAX9IJeQC/oBb2gF/SCXkAv6AW9oBf0gl5AL+gFvaAX9IJeQC/oBb2gF/SCXkAv6AW9oBf0AnpBL+gFvaAX9AJ6QS/oBb2gF/QCekEv6AW9oBf0AnpBL+gFvaAX9AJ6QS/oBb2gF/QCekEv6AW9oBf0AnpBL+gFvaAX0At6QS/oBb2gF9ALekEv6AW9oBfQC3pBL+gFvaAX0At6QS/oBb2gF9ALekEv6AW9oBfQC3pBL+gFvaAX0At6QS/oBb2gF9ALekEv6AW9gF7QC3pBL+gFvYBe0At6QS/oBb2AXtALekEv6AW9gF7QC3pBL+gFvYBe+LdeZjYgbR17I5A2xrsRSOujNQJpuygeMKSViK0VSH+OIhozkNQceolqB1LqMZcoc0uQMC+nXqIRDIlcmvg2CIaHuQxx5sKQvi6nN0ztTMJNXS1xqek7yfBrLJvaxLXS9q+bDqY2r2/t5LZ8Ag1+oBbvnKajAAAAAElFTkSuQmCC")), this.foreground.width = 559, this.foreground.height = 361, this.payoutSymbol = new n.Sprite(this.game.loader.getAsset(this.findSymbol.textureAtlas, this.findSymbol.assetName)), this.payoutSymbol.anchor.set(.5), this.payoutSymbol.position.set(this.foreground.width / 2 - 120, this.foreground.height / 2), this.payoutText = new Mt("", {
                            default: {
                                fill: "white",
                                fontSize: 36,
                                fontFamily: "Avenir-Medium",
                                aling: "center"
                            },
                            mul: {
                                fill: "#fbb907"
                            }
                        }), this.payoutText.anchor.y = .5, this.payoutText.position.set(340, this.foreground.height / 2), this.addChild(this.payoutSymbol, this.payoutText)
                    }
                    withoutPayout() {
                        this.foreground.width = 339
                    }
                    updateBet(t) {
                        this.payoutText.text = "\n", this.payouts.filter((t => t.sym === this.findIndex)).forEach((e => {
                            var i;
                            e.n > 0 && e.mul > 0 && (i = "scatter" === e.type ? t.toCoins() * e.mul : t.bet * e.mul, this.payoutText.text += "<mul>".concat(e.n, "</mul>\t\t").concat(this.game.helpers.toMoney(i, t.bet), "\n"))
                        }))
                    }
                    resize() {
                        this.game.device.desktop ? this.scale.set(1) : this.game.device.landscape ? this.scale.set(1.4) : this.scale.set(1.72)
                    }
                }
                class go extends(q(n.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "sectionTitle", void 0), (0, o.Z)(this, "symbol1", void 0), (0, o.Z)(this, "symbol2", void 0), (0, o.Z)(this, "symbol3", void 0), (0, o.Z)(this, "symbol4", void 0), (0, o.Z)(this, "symbol5", void 0), (0, o.Z)(this, "symbol6", void 0), (0, o.Z)(this, "symbol7", void 0), (0, o.Z)(this, "symbol8", void 0), (0, o.Z)(this, "symbol9", void 0), (0, o.Z)(this, "symbol10", void 0), (0, o.Z)(this, "symbols", void 0);
                        var t = this.game.i18n.t("PaytableSectionPayoutTitle");
                        this.sectionTitle = new ro(t.toUpperCase()), this.symbol1 = new po("gobBlow"), this.symbol1.position.set(0, this.sectionTitle.y + this.sectionTitle.height + 30), this.symbol2 = new po("gobCape"), this.symbol2.position.set(600, this.sectionTitle.y + this.sectionTitle.height + 30), this.symbol3 = new po("gobSmile"), this.symbol3.position.set(0, this.symbol1.y + this.symbol1.height + 30), this.symbol4 = new po("gobHands"), this.symbol4.position.set(600, this.symbol2.y + this.symbol2.height + 30), this.symbol5 = new po("gobWarrior"), this.symbol5.position.set(0, this.symbol3.y + this.symbol3.height + 30), this.symbol6 = new po("a"), this.symbol6.position.set(600, this.symbol4.y + this.symbol4.height + 30), this.symbol7 = new po("k"), this.symbol7.position.set(0, this.symbol5.y + this.symbol5.height + 30), this.symbol8 = new po("q"), this.symbol8.position.set(600, this.symbol6.y + this.symbol6.height + 30), this.symbol9 = new po("j"), this.symbol9.position.set(0, this.symbol7.y + this.symbol7.height + 30), this.symbol10 = new po("ten"), this.symbol10.position.set(600, this.symbol8.y + this.symbol8.height + 30), this.symbols = [this.symbol1, this.symbol2, this.symbol3, this.symbol4, this.symbol5, this.symbol6, this.symbol7, this.symbol8, this.symbol9, this.symbol10], this.addChild(this.sectionTitle, ...this.symbols)
                    }
                    updateBet(t) {
                        this.symbols.forEach((e => e.updateBet(t)))
                    }
                    resize() {
                        this.game.device.desktop || (this.game.device.landscape ? (this.symbol1.position.set(0, this.sectionTitle.y + this.sectionTitle.height + 30), this.symbol2.position.set(820, this.sectionTitle.y + this.sectionTitle.height + 30), this.symbol3.position.set(0, this.symbol1.y + this.symbol1.height + 30), this.symbol4.position.set(820, this.symbol2.y + this.symbol2.height + 30), this.symbol5.position.set(0, this.symbol3.y + this.symbol3.height + 30), this.symbol6.position.set(820, this.symbol4.y + this.symbol4.height + 30), this.symbol7.position.set(0, this.symbol5.y + this.symbol5.height + 30), this.symbol8.position.set(820, this.symbol6.y + this.symbol6.height + 30), this.symbol9.position.set(0, this.symbol7.y + this.symbol7.height + 30), this.symbol10.position.set(820, this.symbol8.y + this.symbol8.height + 30)) : (this.symbol1.position.set(0, this.sectionTitle.y + this.sectionTitle.height + 30), this.symbol2.position.set(0, this.symbol1.y + this.symbol1.height + 30), this.symbol3.position.set(0, this.symbol2.y + this.symbol2.height + 30), this.symbol4.position.set(0, this.symbol3.y + this.symbol3.height + 30), this.symbol5.position.set(0, this.symbol4.y + this.symbol4.height + 30), this.symbol6.position.set(0, this.symbol5.y + this.symbol5.height + 30), this.symbol7.position.set(0, this.symbol6.y + this.symbol6.height + 30), this.symbol8.position.set(0, this.symbol7.y + this.symbol7.height + 30), this.symbol9.position.set(0, this.symbol8.y + this.symbol8.height + 30), this.symbol10.position.set(0, this.symbol9.y + this.symbol9.height + 30)))
                    }
                }
                class mo extends(q(n.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "_sectionParagraph", void 0), (0, o.Z)(this, "_sectionTitle", void 0), this._sectionTitle = new ro(this.game.i18n.t("PaytableSectionRockfallTitle").toUpperCase()), this._sectionParagraph = new ao(this.game.i18n.t("PaytableSectionRockfallContent")), this._sectionParagraph.position.set(0, this._sectionTitle.y + this._sectionTitle.height + 30), this.addChild(this._sectionTitle), this.addChild(this._sectionParagraph)
                    }
                    resize() {
                        this.game.device.desktop || this._sectionParagraph.position.set(0, this._sectionTitle.y + this._sectionTitle.height + 30)
                    }
                }
                class Ao extends(q(n.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "_sectionParagraph", void 0), (0, o.Z)(this, "_sectionTitle", void 0), (0, o.Z)(this, "_symbolScatter", void 0);
                        var t = this.game.i18n.t("PaytableSectionScatterTitle");
                        this._sectionTitle = new ro(t.toUpperCase()), this._sectionTitle.position.set(0, 0), this._symbolScatter = new po("scat"), this._symbolScatter.position.set(0, this._sectionTitle.y + this._sectionTitle.height + 30), this._symbolScatter.withoutPayout(), this._sectionParagraph = new ao(this.game.i18n.t("PaytableSectionScatterContent")), this._sectionParagraph.setTagStyle("default", {
                            wordWrapWidth: 620
                        }), this._sectionParagraph.position.set(this._symbolScatter.x + this._symbolScatter.width + 30, this._symbolScatter.y + this._symbolScatter.height / 2 - this._sectionParagraph.height / 2), this.addChild(this._sectionTitle), this.addChild(this._sectionParagraph), this.addChild(this._symbolScatter)
                    }
                    resize() {
                        this.game.device.desktop || (this.game.device.landscape ? (this._sectionTitle.position.set(0, 0), this._symbolScatter.position.set(0, this._sectionTitle.y + this._sectionTitle.height + 30), this._sectionParagraph.setTagStyle("default", {
                            wordWrapWidth: 420
                        }), this._sectionParagraph.position.set(this._symbolScatter.x + this._symbolScatter.width + 30, this._symbolScatter.y + this._symbolScatter.height / 2 - this._sectionParagraph.height / 2)) : (this._sectionTitle.position.set(0, 0), this._symbolScatter.position.set(0, this._sectionTitle.y + this._sectionTitle.height + 30), this._sectionParagraph.position.set(0, this._symbolScatter.y + this._symbolScatter.height + 30)))
                    }
                }
                class vo extends(q(n.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "_sectionParagraph", void 0), (0, o.Z)(this, "_sectionTitle", void 0), (0, o.Z)(this, "_symbolWild", void 0);
                        var t = this.game.i18n.t("PaytableSectionWildTitle");
                        this._sectionTitle = new ro(t.toUpperCase()), this._sectionTitle.position.set(0, 0), this._symbolWild = new po("wild"), this._symbolWild.position.set(0, this._sectionTitle.y + this._sectionTitle.height + 30), this._symbolWild.withoutPayout(), this._sectionParagraph = new ao(this.game.i18n.t("PaytableSectionWildContent")), this._sectionParagraph.setTagStyle("default", {
                            wordWrapWidth: 620
                        }), this._sectionParagraph.position.set(this._symbolWild.x + this._symbolWild.width + 30, this._symbolWild.y + this._symbolWild.height / 2 - this._sectionParagraph.height / 2), this.addChild(this._sectionTitle), this.addChild(this._sectionParagraph), this.addChild(this._symbolWild)
                    }
                    resize() {
                        this.game.device.desktop || (this.game.device.landscape ? (this._sectionTitle.position.set(0, 0), this._symbolWild.position.set(0, this._sectionTitle.y + this._sectionTitle.height + 30), this._sectionParagraph.setTagStyle("default", {
                            wordWrapWidth: 420
                        }), this._sectionParagraph.position.set(this._symbolWild.x + this._symbolWild.width + 30, this._symbolWild.y + this._symbolWild.height / 2 - this._sectionParagraph.height / 2)) : (this._sectionTitle.position.set(0, 0), this._symbolWild.position.set(0, this._sectionTitle.y + this._sectionTitle.height + 30), this._sectionParagraph.position.set(0, this._symbolWild.y + this._symbolWild.height + 30)))
                    }
                }
                class bo extends io {
                    constructor() {
                        super(), (0, o.Z)(this, "_paytableSectionRisk", void 0), (0, o.Z)(this, "_paytableSectionPayout", void 0), (0, o.Z)(this, "_paytableSectionWild", void 0), (0, o.Z)(this, "_paytableSectionScatter", void 0), (0, o.Z)(this, "_paytableSectionFree", void 0), (0, o.Z)(this, "_paytableSectionRockfall", void 0), (0, o.Z)(this, "_payTableDelimiter", void 0), (0, o.Z)(this, "_paytableSectionBetLines", void 0), this._paytableSectionRisk = new ho, this._paytableSectionPayout = new go, this._paytableSectionWild = new vo, this._paytableSectionScatter = new Ao, this._paytableSectionFree = new uo, this._paytableSectionRockfall = new mo, this._payTableDelimiter = new so, this._paytableSectionBetLines = new co, this.content.addChild(this._paytableSectionRisk, this._paytableSectionPayout, this._paytableSectionWild, this._paytableSectionScatter, this._paytableSectionFree, this._paytableSectionRockfall, this._payTableDelimiter, this._paytableSectionBetLines)
                    }
                    updateBet(t) {
                        this._paytableSectionPayout.updateBet(t)
                    }
                }
                class wo extends(q(n.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "value", void 0), (0, o.Z)(this, "description", void 0), (0, o.Z)(this, "timeline", void 0), this.alpha = 0, this.value = this.addChild(new n.BitmapText("0", {
                            fontName: "WinFont"
                        })), this.value.anchor = .5, this.value.scale.set(.8), this.description = this.addChild(new n.Sprite(X.loader.getAsset("textExtraFree"))), this.value.position.set(this.description.width / 2, 0), this.description.position.set(0, 40), this.pivot.set(this.width / 2, this.height / 2), this.timeline = new a.TY
                    }
                    show(t) {
                        var e = this.y;
                        return new Promise((i => {
                            this.value.text = t, this.timeline.eventCallback("onComplete", (() => {
                                i(), this.y = e
                            })), this.timeline.set(this, {
                                pixi: {
                                    alpha: 0,
                                    y: e
                                }
                            }).to(this, .5, {
                                pixi: {
                                    alpha: 1,
                                    y: e + 50
                                }
                            }).to(this, .2, {
                                pixi: {
                                    alpha: 0
                                }
                            }, "+=0.75")
                        }))
                    }
                    setBackground(t) {
                        this.background = this.addChildAt(new n.Sprite(this.game.loader.getAsset(t)), 0)
                    }
                }
                class fo extends(q(n.Container)) {
                    constructor() {
                        super(...arguments), (0, o.Z)(this, "name", "Slot")
                    }
                    requestSpin() {
                        var t = arguments,
                            e = this;
                        return (0, s.Z)((function*() {
                            var i = !(t.length > 0 && void 0 !== t[0]) || t[0],
                                s = e.game.config.get("spinDelay", 0),
                                [o] = yield Promise.all([e.game.server.request({
                                    action: "spin",
                                    bet: e.game.betLevel.bet
                                }), i && s > 0 && e.game.delay(s)].filter(Boolean));
                            return o
                        }))()
                    }
                }
                class yo extends(q(n.Container)) {
                    constructor(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "+=1.75";
                        super(), (0, o.Z)(this, "timeline", void 0), (0, o.Z)(this, "textScale", void 0), (0, o.Z)(this, "delay", void 0), (0, o.Z)(this, "winText", void 0), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "textScaleEnabled", void 0), (0, o.Z)(this, "textScaleMultiplier", void 0), (0, o.Z)(this, "winTextScale", (t => "".concat(t).length < 4 ? this.textScale : this.textScale - ("".concat(t).length - 4) * this.textScaleMultiplier)), this.visible = !1, this.textScaleEnabled = !1, this.textScaleMultiplier = .16, this.textScale = t || .6, this.delay = e, this.winText = this.addChild(new n.BitmapText("", {
                            fontName: "WinFont"
                        })), this.winText.scale.set(this.textScale), this.winText.anchor.set(.5), this.timeline = new a.TY
                    }
                    show(t, e) {
                        var i = this;
                        return (0, s.Z)((function*() {
                            if (t > 0) {
                                i.winText.scale.set(i.textScaleEnabled ? i.winTextScale(t) : i.textScale), i.visible = !0;
                                var s = {
                                        coins: 0
                                    },
                                    o = i.y;
                                return new Promise((n => {
                                    i.timeline.eventCallback("onStart", (() => i.emit("show"))), i.timeline.eventCallback("onComplete", (() => {
                                        i.y = o, i.alpha = 1, i.scale.set(1), i.winText.text = "", i.visible = !1, i.timeline.clear(), n()
                                    })), i.timeline.to(s, 1, {
                                        coins: t,
                                        roundProps: ["coins"],
                                        onUpdate: () => {
                                            i.winText.text = "".concat(i.game.i18n.currency({
                                                bitmap: !0
                                            }), "<value>").concat(i.game.helpers.toMoney(s.coins), "</value>")
                                        },
                                        onComplete: e
                                    }).addLabel("break", i.delay).to(i, .2, {
                                        pixi: {
                                            y: o - 50,
                                            alpha: 0,
                                            scale: 1.1
                                        }
                                    }, "break+=0.5")
                                }))
                            }
                        }))()
                    }
                    break () {
                        var t = this.timeline.totalDuration(),
                            e = this.timeline.getLabelTime("break") / t;
                        "break" !== this.timeline.currentLabel() && e > 0 && this.timeline.progress(e)
                    }
                    setBackground(t) {
                        var e = this.game.loader.getAsset(t);
                        this.background ? this.background.texture = e : this.background = this.addChildAt(new n.Sprite(e), 0)
                    }
                }
                class So extends(q(n.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "TextFreeLeft"), (0, o.Z)(this, "timeline", void 0), (0, o.Z)(this, "textValue", void 0), (0, o.Z)(this, "textDescription", void 0), this.alpha = 0, this.timeline = new a.TY, this.textValue = new n.BitmapText("", {
                            fontName: "WinFont"
                        }), this.textValue.scale.set(.6), this.textValue.anchor.set(.5), this.textDescription = new n.Sprite(X.loader.getAsset("textLastFreeSpin")), this.addChild(this.textValue), this.addChild(this.textDescription)
                    }
                    show(t) {
                        var e = this.y;
                        return new Promise((i => {
                            this.timeline.clear(), this.timeline.vars = {
                                onComplete: () => {
                                    i(), this.y = e
                                }
                            }, t < 1 ? (this.textValue.text = "", this.textDescription.texture = X.loader.getAsset("textLastFreeSpin"), this.textDescription.pivot.set(this.textDescription.width / 2, 110), this.timeline.set(this, {
                                pixi: {
                                    y: e,
                                    alpha: 0,
                                    scale: 1
                                }
                            }).to(this, .5, {
                                pixi: {
                                    alpha: 1
                                }
                            }).to(this, .2, {
                                pixi: {
                                    y: e - 50,
                                    alpha: 0,
                                    scale: 1.1
                                }
                            }, "+=0.75")) : (this.textValue.text = "".concat(t), this.textDescription.texture = X.loader.getAsset("textFreeSpinLeft"), this.textValue.position.set(-10, -70), this.textDescription.pivot.set(this.textDescription.width / 2, 0), this.timeline.set(this, {
                                pixi: {
                                    y: e,
                                    alpha: 0,
                                    scale: 1
                                }
                            }).to(this, .5, {
                                pixi: {
                                    alpha: 1
                                }
                            }).to(this, .2, {
                                pixi: {
                                    y: e - 50,
                                    alpha: 0,
                                    scale: 1.1
                                }
                            }, "+=0.75"))
                        }))
                    }
                }
                class xo extends(q(n.Container)) {
                    constructor() {
                        super()
                    }
                    get isStop() {
                        return this.game.autoPlay.enabled && this.game.autoPlay.count > 0
                    }
                }
                const ko = class extends xo {
                    constructor(t) {
                        super(), (0, o.Z)(this, "_droppedSymbols", void 0), (0, o.Z)(this, "_wins", void 0), (0, o.Z)(this, "slot", void 0), this.slot = t, this._wins = [], this._droppedSymbols = new Set
                    }
                    stop() {
                        this._wins.length = 0, this._droppedSymbols.clear(), this.slot.reels.forEach((t => t.stopAnimation()))
                    }
                    _getWinSoundNumber() {
                        var t = this.game.store.get("reward:numberWinSymbol", 0);
                        return t <= 9 ? 1 : t > 9 && t <= 13 ? 2 : 3
                    }
                    allPayment(t) {
                        var e = this;
                        return (0, s.Z)((function*() {
                            if (!X.store.get("free:winAdditional", !1)) {
                                var i = e.game.store.get("free:isStart");
                                e.slot.reels.forEach((t => t.overlay()));
                                for (var s = 0, o = t.length; s < o; s++) {
                                    var n = t[s];
                                    e._wins.push(n), e._runSymbolAnimation(n, !1, i ? "light" : "normal")
                                }
                                var a = e._getWinSoundNumber();
                                e.game.action.emit("sound:win", a, i ? "light" : "normal"), yield e.slot.textTotalWin.show(e.game.wallet.coins, (() => {
                                    e.game.action.emit("update:win", e.game.wallet.dropCoins - e.game.wallet.scatterCoins, e.game.wallet.totalCoins - e.game.wallet.scatterCoins), e.game.action.emit("update:balance")
                                })), i || X.store.get("free:winAdditional", !1) || (yield e.dropAfterWin())
                            }
                        }))()
                    }
                    breakAllPayment() {
                        this.slot.textTotalWin.break()
                    }
                    scatterPayment(t) {
                        var e = this;
                        return (0, s.Z)((function*() {
                            e.slot.reels.forEach((t => t.overlay()));
                            var i = e.game.store.get("reward:lines", []).concat();
                            if (X.store.get("free:winAdditional", !1)) {
                                X.action.emit("sound:extraFree"), e._runScatterSymbolAnimation(t, "extraFree");
                                var s = X.store.get("free:left", 0);
                                if (X.action.emit("free:updateLeft", s), yield e.slot.textExtraFree.show(X.store.get("free:winAdditionalCount")), yield e.game.helpers.delay(300), i.length > 0) {
                                    for (var o = 0, n = i.length; o < n; o++) {
                                        var a = i[o];
                                        e._wins.push(a), e._runSymbolAnimation(a, !1, "normal")
                                    }
                                    var r = e._getWinSoundNumber();
                                    e.game.action.emit("sound:win", r, "normal"), yield e.slot.textTotalWin.show(e.game.wallet.coins, (() => {
                                        e.game.action.emit("update:win", e.game.wallet.dropCoins - e.game.wallet.scatterCoins, e.game.wallet.totalCoins - e.game.wallet.scatterCoins), e.game.action.emit("update:balance")
                                    }))
                                } else e.game.action.emit("sound:crack"), yield e.game.helpers.delay(1200);
                                yield e.dropAfterWin()
                            } else X.action.emit("sound:scatterWin"), e._runScatterSymbolAnimation(t, ti.isFreespin() ? "normal" : "free"), yield X.helpers.delay(qe.get("reward_scatter"));
                            "freespin" === X.store.get("server:nextAction", "spin") || ti.isFreespin() || e.slot.reels.forEach((t => t.stopAnimation()))
                        }))()
                    }
                    mixPayment(t, e) {
                        var i = this;
                        return (0, s.Z)((function*() {
                            var s = i._getWinSoundNumber();
                            i.slot.reels.forEach((t => t.overlay()));
                            for (var o = 0, n = t.length; o < n; o++) {
                                var a = t[o];
                                i._wins.push(a), i._runSymbolAnimation(a, !1)
                            }
                            t.length > 0 && (i.game.action.emit("sound:win", s, "normal"), yield i.slot.textTotalWin.show(i.game.wallet.coins, (() => {
                                i.game.action.emit("update:win", i.game.wallet.totalCoins - i.game.wallet.scatterCoins, i.game.wallet.totalCoins - i.game.wallet.scatterCoins), i.game.action.emit("update:balance")
                            }))), e && (i.slot.reels.forEach((t => t.overlay())), i._runScatterSymbolAnimation(e, "normal"), 0 === t.length && i.game.action.emit("sound:crack")), yield i.game.helpers.delay(qe.get("reward_scatter")), yield i.dropAfterWin()
                        }))()
                    }
                    complete() {}
                    _findSymbol(t, e) {
                        return this.slot.reels[t].visibleSymbols[e]
                    }
                    _runSymbolAnimation(t) {
                        var {
                            pos: e
                        } = t, i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "normal";
                        for (var o of (i && this.slot.reels.forEach((t => t.clearAnimation())), e)) {
                            var n = this.slot.findReelByPosition(o[0]),
                                a = this._findSymbol(o[0], o[1]),
                                r = this.game.config.get("slot.size[0]") * o[1] + o[0];
                            a.playAnimation({
                                animationName: s,
                                reelPosition: o[0],
                                symbolPosition: r
                            }), this._droppedSymbols.has(a) || n.setDropCount(n.dropCount + 1), this._droppedSymbols.add(a)
                        }
                    }
                    _runScatterSymbolAnimation(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "free";
                        t.forEach((t => {
                            var {
                                pos: i,
                                sym: s
                            } = t;
                            i.forEach((t => {
                                var [i, s] = t, o = this.slot.findReelByPosition(i), n = this._findSymbol(i, s), a = this.game.config.get("slot.size[0]") * s + i;
                                n.playAnimation({
                                    animationName: e,
                                    reelPosition: i,
                                    symbolPosition: a
                                }), this._droppedSymbols.has(n) || o.setDropCount(o.dropCount + 1), this._droppedSymbols.add(n)
                            }))
                        }))
                    }
                    dropAfterWin() {
                        var t = this;
                        return (0, s.Z)((function*() {
                            var e = t.game.config.get("symbol.y"),
                                i = !1;
                            t.slot.reels.forEach((t => t.removeOverlay())), t.slot.reels.forEach((s => {
                                for (var o = !1, n = 0, a = s.visibleSymbols.length - 1; a >= 0; a--) {
                                    var r = s.visibleSymbols[a];
                                    t._droppedSymbols.has(r) ? (o = !0, n -= e, i = !0, r.setDropPosition(-1)) : o && r.drop(n, a + Math.abs(n / e))
                                }
                            })), i && t.game.action.emit("sound:symbolDrop"), t._droppedSymbols.clear(), yield t.game.delay(600)
                        }))()
                    }
                };
                class Co extends(q(n.Sprite)) {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                        super(), this.currentTextureIndex = t
                    }
                    isTexture(t) {
                        return this.currentTextureIndex === t
                    }
                    overlay() {
                        this.tint = 6316128
                    }
                    removeOverlay() {
                        this.tint = 16777215
                    }
                    show() {
                        this.alpha = 1, this.tint = 16777215
                    }
                    hide() {
                        this.alpha = 0, this.tint = 16777215
                    }
                }

                function Bo(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function Po(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Bo(Object(i), !0).forEach((function(e) {
                            (0, o.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Bo(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                var To = new Mi,
                    Eo = new Mi,
                    Fo = new n.Container;
                class Ro extends Co {
                    constructor(t, e, i, s) {
                        super(i), (0, o.Z)(this, "data", void 0), (0, o.Z)(this, "layoutType", void 0), (0, o.Z)(this, "dropPosition", 0), (0, o.Z)(this, "symbolAnimation", void 0), (0, o.Z)(this, "wildAnimation", void 0), (0, o.Z)(this, "symbolText", void 0), this.position.set(t, e), this.layoutType = "default", this.symbolAnimation = To.addChildAt(new Bi(this.game.loader.getAsset("symbolAnimation")), 0), this.symbolAnimation.renderable = !1, this.wildAnimation = Eo.addChildAt(new Bi(this.game.loader.getAsset("symbolAnimation")), 0), this.wildAnimation.renderable = !1, this.symbolText = Fo.addChild(new n.Sprite(this.game.loader.getAsset("assets/images/common/wildText.png"))), this.symbolText.anchor.set(.5), this.symbolText.visible = !1, this.replaceTexture(i), this.setDropPosition(s)
                    }
                    setDropPosition(t) {
                        this.dropPosition = t
                    }
                    replaceTexture(t) {
                        this.currentTextureIndex = +(t > -1 ? t : function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 20,
                                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 24,
                                i = t + Math.random() * (e + 1 - t);
                            return Math.floor(i)
                        }()), this.data = this.game.config.get("slot.layout.".concat(this.layoutType, "[").concat(this.currentTextureIndex, "]"), null), this.texture = this.game.loader.getAsset(this.data.textureAtlas, this.data.assetName)
                    }
                    playAnimation(t) {
                        var e;
                        this.hide();
                        var i = Po(Po({}, this.data.animation), t);
                        if (!(!this.visible || this.symbolAnimation.renderable && this.symbolAnimation.playing && this.symbolAnimation.skinName === i.skin && this.symbolAnimation.animationName === i.effectName)) {
                            this.symbolAnimation.position.set(this.x, this.y), i.skin && this.symbolAnimation.changeSkin(i.skin);
                            var s, o = "string" == typeof i.effectName ? i.effectName : i.effectName[i.animationName] || i.effectName.normal;
                            if (this.symbolText.tint = 16777215, "wild" === i.skin) "idle" !== o && "wheelStop" !== o || (this.symbolText.visible = !0, this.symbolText.position.set(this.x + this.width / 2, this.y + 158)), this.wildAnimation.position.set(this.x, this.y), this.wildAnimation.changeSkin(i.skin), this.wildAnimation.renderable = !0, this.wildAnimation.play(o, "idle" === o, null !== (s = i.trackIndex) && void 0 !== s ? s : 0);
                            "win" !== o && "light" !== o || (this.symbolText.visible = !1), this.symbolAnimation.renderable = !0, this.symbolAnimation.play(o, "idle" === o, null !== (e = i.trackIndex) && void 0 !== e ? e : 0)
                        }
                    }
                    drop(t, e) {
                        this.setDropPosition(e), this.hide(), this.symbolAnimation.position.set(this.x, this.y), this.symbolAnimation.changeSkin(this.data.animation.skin), this.symbolAnimation.renderable = !0, this.symbolAnimation.play("idle"), "wild" === this.data.animation.skin && (this.symbolAnimation.position.set(this.x, this.y), this.symbolAnimation.changeSkin(this.data.animation.skin), this.symbolAnimation.renderable = !0, this.symbolAnimation.play("idle")), a.kX.fromTo([this.symbolAnimation, this.wildAnimation], .2, {
                            pixi: {
                                y: this.y
                            }
                        }, {
                            pixi: {
                                y: this.y - t
                            },
                            onCompleteParams: [this.y - t],
                            onComplete: t => {
                                this.y = t, this.symbolAnimation.play("spin"), "wild" === this.data.animation.skin && (this.symbolText.visible = !0, this.symbolText.position.set(this.x + this.width / 2, this.y + 158))
                            },
                            delay: .2
                        })
                    }
                    stopAnimation() {
                        this.show(), this.symbolAnimation.stop(), this.symbolAnimation.renderable = !1, this.wildAnimation.stop(), this.wildAnimation.renderable = !1
                    }
                    overlay() {
                        this.tint = 10000536, this.symbolText.tint = 10000536
                    }
                    removeOverlay() {
                        this.visible = !0, this.tint = 16777215, this.symbolText.tint = 16777215
                    }
                    get isPlaying() {
                        return this.symbolAnimation.playing
                    }
                    hideText() {
                        this.symbolText.visible = !1
                    }
                    showText() {
                        "wild" === this.data.animation.skin && (this.symbolText.tint = 16777215, this.symbolText.visible = !0, this.symbolText.position.set(this.x + this.width / 2, this.y + 158))
                    }
                    getCurrentTextureIndex() {
                        return this.currentTextureIndex
                    }
                }
                class Zo extends(q(n.Container)) {
                    constructor(t, e) {
                        super(), (0, o.Z)(this, "_dropCount", void 0), (0, o.Z)(this, "_reel", void 0), (0, o.Z)(this, "_reelIndex", void 0), (0, o.Z)(this, "_stopTimeout", void 0), (0, o.Z)(this, "_stopTimeoutDuration", void 0), (0, o.Z)(this, "isStop", void 0), (0, o.Z)(this, "symbols", void 0), (0, o.Z)(this, "symbolsPositions", void 0), this.interactiveChildren = !1, this.symbolsPositions = e, this._reel = [], this._reelIndex = t, this._dropCount = 0, this.isStop = !1, this._stopTimeout = null, this._stopTimeoutDuration = 0, this.symbols = this.addChild(new n.Container), this._setup()
                    }
                    get dropCount() {
                        return this._dropCount
                    }
                    get visibleSymbols() {
                        return this.symbols.children
                    }
                    sortDroppedSymbols() {
                        this.symbols.children.sort(((t, e) => t.dropPosition - e.dropPosition))
                    }
                    setDropCount(t) {
                        this._dropCount = t
                    }
                    start() {
                        var t = this;
                        return (0, s.Z)((function*() {
                            if ("drop" !== t.game.store.get("server:nextAction")) {
                                t.stopAnimation(), t.isStop = !1, t._stopTimeoutDuration = t.game.quickSpin.enabled ? t.game.config.get("wheel.durationQuickStop") : t.game.config.get("wheel.durationStop"), yield t.game.delay(t._stopTimeoutDuration * t._reelIndex);
                                var e = t.height;
                                for (yield t.rockfall(e); !t.isStop;) yield t.rockfall(e, .2);
                                t.game.action.emit("wheel:stopRockfall")
                            }
                        }))()
                    }
                    rockfall(t) {
                        var e = this,
                            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .04,
                            s = this.visibleSymbols.length - 1;
                        return new Promise((o => {
                            for (var n = function(n) {
                                    var r = e.visibleSymbols[n];
                                    a.kX.to(r, i, {
                                        pixi: {
                                            y: t
                                        },
                                        delay: (s - n) * i,
                                        onCompleteParams: [n],
                                        onStart: () => {
                                            r.symbolText.visible = !1
                                        },
                                        onComplete: t => {
                                            0 === t && (e.visibleSymbols.forEach((t => t.y = -500)), o())
                                        }
                                    })
                                }, r = s; r >= 0; r--) n(r)
                        }))
                    }
                    stop() {
                        var t = this;
                        return (0, s.Z)((function*() {
                            "drop" === t.game.store.get("server:action") ? t.game.action.emit("wheel:stopRockfall") : (yield t.game.delay(t._stopTimeoutDuration * t._reelIndex), t.isStop = !0)
                        }))()
                    }
                    stopRockfall() {
                        var t = this;
                        return (0, s.Z)((function*() {
                            yield t.game.delay("drop" === t.game.store.get("server:action") ? 0 : t._stopTimeoutDuration * t._reelIndex);
                            var e = t.game.store.get("reward:reels", []);
                            t._reel = e[t._reelIndex].concat();
                            var i = "drop" === t.game.store.get("server:action") ? t.dropCount - 1 : t.visibleSymbols.length - 1;
                            if (0 === t._reelIndex && "drop" !== t.game.store.get("server:action") && t.game.action.emit("sound:wheelStop", t._reelIndex), i < 0) t.setDropCount(0), t.game.action.emit("wheel:stop", t._reelIndex);
                            else {
                                t.sortDroppedSymbols();
                                for (var o = function(e) {
                                        var o, n = t._reel[e],
                                            r = t.visibleSymbols[e],
                                            [h, l] = t.symbolsPositions[e];
                                        r.replaceTexture(n), r.position.set(h, -500), r.show(), a.kX.to(r, .06, {
                                            pixi: {
                                                y: l
                                            },
                                            delay: .06 * (i - e),
                                            onCompleteParams: [e],
                                            onComplete: (o = (0, s.Z)((function*(e) {
                                                r.setDropPosition(e), r.playAnimation({
                                                    animationName: "drop",
                                                    symbolPosition: e
                                                }), "drop" === t.game.store.get("server:action") && t.game.action.emit("sound:symbolDrop"), yield t.game.delay(500), 0 === e && (t.setDropCount(0), t.game.action.emit("wheel:stop", t._reelIndex))
                                            })), function(t) {
                                                return o.apply(this, arguments)
                                            })
                                        })
                                    }, n = i; n >= 0; n--) o(n)
                            }
                        }))()
                    }
                    restore() {
                        "drop" === this.game.store.get("server:nextAction") && (this.setDropCount(6), this.visibleSymbols.forEach((t => {
                            t.alpha = 1, t.y = -500
                        })))
                    }
                    overlay() {
                        this.visibleSymbols.forEach((t => t.overlay()))
                    }
                    removeOverlay() {
                        this.visibleSymbols.forEach((t => t.removeOverlay()))
                    }
                    stopAnimation() {
                        this.visibleSymbols.forEach((t => t.stopAnimation()))
                    }
                    clearAnimation() {}
                    showSymbolText() {
                        this.visibleSymbols.forEach((t => t.showText()))
                    }
                    hideSymbolText() {
                        this.visibleSymbols.forEach((t => t.hideText()))
                    }
                    _setup() {
                        var t = this.game.store.get("reward:reels", []);
                        this._reel = t[this._reelIndex].concat();
                        for (var e = 0, i = this._reel.length; e < i; e++) {
                            var [s, o] = this.symbolsPositions[e], n = this._reel[e], a = new Ro(s, o, n, e);
                            this.symbols.addChildAt(a, 0)
                        }
                    }
                    update(t) {
                        for (var e = this.visibleSymbols.length, i = 0; i < e; i++) {
                            var s = t[i];
                            this.visibleSymbols[i].replaceTexture(s)
                        }
                    }
                }
                class Oo extends fo {
                    constructor() {
                        super(), (0, o.Z)(this, "animation", void 0), (0, o.Z)(this, "reels", void 0), (0, o.Z)(this, "reelsContainer", void 0), (0, o.Z)(this, "slotData", void 0), (0, o.Z)(this, "stopReelCounter", void 0), (0, o.Z)(this, "stopRockfallCounter", void 0), (0, o.Z)(this, "symbolsPositions", void 0), (0, o.Z)(this, "textFreeLeft", void 0), (0, o.Z)(this, "textExtraFree", void 0), (0, o.Z)(this, "textTotalWin", void 0), (0, o.Z)(this, "grid", void 0), this.pivot.set(500, 0), this.reels = [], this.stopReelCounter = 0, this.stopRockfallCounter = 0, this.symbolsPositions = this.game.config.get("slot.symbolsPositions", []), this.animation = new ko(this), this.init(), this.setupEvents()
                    }
                    createMask() {
                        var t = new n.Graphics;
                        return t.beginFill(16777215, .8), t.drawRect(0, 30, this.game.config.get("slot.width"), this.game.config.get("slot.height") - 124), t.endFill(), t
                    }
                    init() {
                        var t, e, i = this.createMask();
                        this.reelsContainer = new n.Container, this.reelsContainer.mask = i, this.reelsContainer.addChild(i);
                        for (var s = this.game.config.get("slot.size[0]"), o = 0; o < s; o++) {
                            var a = this.symbolsPositions[o],
                                r = new Zo(o, a);
                            this.reels.push(r), this.reelsContainer.addChild(r)
                        }
                        this.slotData = {
                            reels: this.reels.map((t => t.visibleSymbols)),
                            lines: null !== (t = null === (e = this.game.server) || void 0 === e ? void 0 : e.response.lines) && void 0 !== t ? t : []
                        }, this.textFreeLeft = new So, this.textFreeLeft.rotation = -.25, this.textFreeLeft.position.set(920, 740), this.textExtraFree = new wo, this.textExtraFree.rotation = -.25, this.textExtraFree.position.set(920, 740), this.textExtraFree.description.y = 90, this.textTotalWin = new yo(.8, "0.6"), this.textTotalWin.textScaleEnabled = !0, this.textTotalWin.position.set(450, 550), this.grid = new n.Sprite(this.game.loader.getAsset("assets/images/background/frameGame.png")), this.grid.position.set(-158, -67), this.addChild(this.grid), this.addChild(this.reelsContainer), this.addChild(To), this.addChild(Eo), this.addChild(Fo), this.addChild(this.textTotalWin), this.addChild(this.textFreeLeft), this.addChild(this.textExtraFree)
                    }
                    setupEvents() {
                        this.game.action.on("state:ready_enter", this._onReadyEnter, this), this.game.action.on("state:spin_enter", this._onSpinEnter, this), this.game.action.on("state:stop_enter", this._onStopEnter, this), this.game.action.on("state:finish_enter", this._onFinishEnter, this), this.game.action.on("free:start", (() => {
                            this.animation.stop(), this.reels.map((t => t.hideSymbolText())), this.reels.forEach(((t, e) => {
                                var i = this.game.store.get("reward:fsReels", []);
                                t.update(i[e], !0)
                            }))
                        })), this.game.action.on("free:stop", (() => {
                            var t = this.game.store.get("reward:preReels");
                            this.reels.forEach(((e, i) => {
                                e.update(t[i])
                            })), this.game.get(Di).updateValue("drop" === this.game.store.get("server:nextAction") ? this.game.store.get("reward:preSpin").multiplier : 1)
                        })), this.game.action.on("free:restore", (() => {
                            this.game.get(Ui).hide()
                        })), this.game.action.on("free:select_stop", (() => {
                            a.kX.fromTo(this, .5, {
                                pixi: {
                                    alpha: 0
                                }
                            }, {
                                pixi: {
                                    alpha: 1
                                }
                            }), this.game.get(Di).show(), this.game.get(Di).updateValue("drop" === this.game.store.get("server:nextAction") ? this.game.store.get("reward:preSpin").multiplier : 1), this.game.get(Ui).updateValue(this.game.store.get("reward:preSpin").ways, !1), this.reels.map((t => t.hideSymbolText()))
                        })), this.game.action.on("free:select_start", (() => {
                            this.reels.map((t => t.showSymbolText())), this.game.get(Di).show(), a.kX.fromTo(this, .5, {
                                pixi: {
                                    alpha: 0
                                }
                            }, {
                                pixi: {
                                    alpha: 1
                                }
                            }), this.game.store.get("free:isStart") && this.game.get(Di).updateValue(this.game.store.get("reward:nextMultiplier", 3)), this.game.get(Ui).updateValue(this.game.store.get(this.game.store.get("free:ways") ? "free:ways" : "reward:ways"), !1), this.resize()
                        })), this.game.action.on("wheel:stop", this.onStopWheel, this), this.game.action.on("wheel:stopRockfall", this.onStopRockfall, this)
                    }
                    restore() {
                        this.alpha = 1, this.reels.map((t => t.restore()))
                    }
                    _onReadyEnter() {
                        var t = this.game.store.get("reward:lines", []);
                        this.game.get(Di).updateValue(this.game.store.get("reward:nextMultiplier"));
                        var e = this.game.autoPlay.enabled,
                            i = "drop" === this.game.store.get("server:nextAction");
                        if (ti.isFreespin() || i) {
                            var s = this.game.store.get("free:isStart", !1) ? qe.get("beforeFreeSpins") : qe.get("inFreeSpins");
                            setTimeout((() => {
                                this.game.action.emit("spin:start")
                            }), s)
                        } else e ? setTimeout((() => {
                            this.game.action.emit("spin:start")
                        }), qe.get("auto_play")) : (t.length <= 0 || "init" === this.game.store.get("server:action")) && !i && this.runIdleSymbolAnimation({
                            animationName: "idle",
                            loop: !0
                        })
                    }
                    updateFreeLeft() {
                        if (ti.isFreespin() && "drop" !== this.game.store.get("server:nextAction")) {
                            var t = this.game.store.get("free:left", 0) - 1;
                            this.game.get("Controls").updateFreeLeft(t), this.textFreeLeft.show(t)
                        }
                    }
                    _onSpinEnter() {
                        var t = this;
                        return (0, s.Z)((function*() {
                            try {
                                yield t.game.beforeSpin(), t.reels.forEach((t => t.start())), t.updateFreeLeft();
                                var e = "drop" === t.game.store.get("server:nextAction");
                                yield t.requestSpin(e), t.game.state.goTo("stop")
                            } catch (e) {
                                yield t.game.catchError(e), (null == e ? void 0 : e.message) !== M.INSUFFICIENT_BALANCE && (null == e ? void 0 : e.message) !== M.SPENDING_BUDGET_EXCEEDED || t.game.state.goTo("stop")
                            }
                        }))()
                    }
                    _onStopEnter() {
                        this.reels.forEach((t => t.stop()))
                    }
                    _onFinishEnter() {
                        var t = this;
                        return (0, s.Z)((function*() {
                            t.stopReelCounter = 0, t.stopRockfallCounter = 0, ti.set(t.game.store.get("reward:feature")), t.game.store.get("free:isFree", !1) || "drop" === t.game.store.get("server:nextAction") || (yield t.game.freeRound.finish()), t.game.autoPlay.enabled ? t.game.checkBalance().then((() => {
                                t.game.state.goTo("ready")
                            })).catch((() => {
                                t.game.autoPlay.disable(), t.game.state.goTo("ready")
                            })) : t.game.state.goTo("ready")
                        }))()
                    }
                    onStopRockfall() {
                        this.stopRockfallCounter++, this.stopRockfallCounter >= this.reels.length && this.reels.forEach((t => t.stopRockfall()))
                    }
                    onStopWheel() {
                        var t = this;
                        return (0, s.Z)((function*() {
                            t.stopReelCounter++, t.game.get(Ui).updateValue(t.game.store.get("reward:ways")), t.stopReelCounter >= t.reels.length && (t.game.afterReelsStop(), yield t.animation.stop(), t.game.state.goTo("reward"))
                        }))()
                    }
                    _onResetReward() {}
                    beforeFreeSpinsPopup() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this.alpha = 0 : a.kX.fromTo(this, .5, {
                            pixi: {
                                alpha: 1
                            }
                        }, {
                            pixi: {
                                alpha: 0
                            }
                        })
                    }
                    findReelByPosition(t) {
                        return this.reels[t]
                    }
                    findSymbolByPosition(t, e) {
                        return this.reels[t].visibleSymbols[e]
                    }
                    runIdleSymbolAnimation(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                        e > -1 ? this.reels[e].visibleSymbols.forEach((e => e.playAnimation(t))) : this.reels.forEach((e => {
                            e.visibleSymbols.forEach(((e, i) => {
                                t.symbolPosition = i, e.playAnimation(t)
                            }))
                        }))
                    }
                    resize() {
                        this.game.device.desktop || this.game.device.landscape ? (this.scale.set(1), this.position.set(1016, 77), this.textTotalWin.position.set(450, 700), this.textFreeLeft.position.set(920, 650), this.textFreeLeft.rotation = -.25, this.textExtraFree.position.set(920, 650)) : (this.scale.set(.9), this.position.set(610, 280), this.textTotalWin.position.set(470, 550), this.textFreeLeft.position.set(470, 530), this.textFreeLeft.rotation = 0, this.textExtraFree.position.set(470, 530))
                    }
                }
                class Mo extends(q(n.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "timeline", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "value", void 0), (0, o.Z)(this, "light", void 0), (0, o.Z)(this, "coins", void 0), (0, o.Z)(this, "onPress", void 0), this.visible = !1, this.interactive = !0, this.onPress = new(C()), this.game.interaction.click(this, (() => this.onPress.dispatch())), this.timeline = new a.TY, this.content = new n.Container, this.overlay = new n.Graphics, this.overlay.beginFill(0, .75), this.overlay.drawRect(0, 0, this.game.config.get("application.width"), this.game.config.get("application.height")), this.overlay.endFill(), this.value = new n.BitmapText("", {
                            fontName: "WinFont"
                        }), this.value.anchor = .5, this.light = new Bi(this.game.loader.getAsset("assets/images/effects/bigGiantWin/skeleton.json")), this.light.alpha = 0, this.light.changeSkin("bigWin"), this.coins = new Bi(this.game.loader.getAsset("assets/images/effects/bigGiantWin/skeleton.json")), this.coins.alpha = 0, this.coins.changeSkin("giantWin"), this.content.addChild(this.light), this.content.addChild(this.coins), this.content.addChild(this.value), this.addChild(this.overlay), this.addChild(this.content)
                    }
                    show(t, e) {
                        var i = 0;
                        t === Pt ? (i = 9, this.game.action.emit("sound:bigWin")) : t === Tt && (i = 18, this.game.action.emit("sound:giantWin"));
                        var s = !1,
                            o = e > 1e6 ? .68 : .8;
                        return this.value.scale.set(o), new Promise((n => {
                            this.overlay.alpha = 0, this.content.alpha = 0, this.value.alpha = 0, this.timeline.eventCallback("onComplete", (() => {
                                this.hide(), n()
                            }));
                            var r = {
                                coins: 0
                            };
                            this.timeline.to(this.overlay, .35, {
                                pixi: {
                                    alpha: 1
                                }
                            }, 0).to(this.value, .5, {
                                pixi: {
                                    alpha: 1,
                                    scale: o
                                }
                            }, .35).to(this.content, .5, {
                                pixi: {
                                    alpha: 1
                                }
                            }, .35).to(r, i, {
                                coins: e,
                                ease: a.oY.Linear.easeNone,
                                roundProps: ["coins"],
                                onStart: () => {
                                    this.light.play("animation", !0), this.light.alpha = 1
                                },
                                onUpdate: () => {
                                    !s && t === Tt && r.coins > e / 2 && (s = !0, this.coins.play("animation", !0), this.coins.alpha = 1, a.kX.to(this.value, i / 2, {
                                        pixi: {
                                            scale: o + .2
                                        }
                                    })), this.value.text = "".concat(this.game.i18n.currency({
                                        bitmap: !0
                                    }), "<value>").concat(this.game.helpers.toMoney(r.coins), "</value>")
                                }
                            }, .35), this.timeline.addLabel("break", "+=0.75"), this.timeline.to([this.overlay, this.content], .2, {
                                pixi: {
                                    alpha: 0
                                }
                            }, "break+=1"), this.visible = !0, this.resize()
                        }))
                    }
                    hide() {
                        this.visible = !1, this.value.text = "", this.light.stop(), this.light.alpha = 0, this.coins.stop(), this.coins.alpha = 0, this.timeline.clear(), this.onPress.handlers(!0) && this.onPress.detachAll()
                    }
                    press(t) {
                        this.onPress.once(t)
                    }
                    break () {
                        var t = this.timeline.totalDuration(),
                            e = this.timeline.getLabelTime("break") / t;
                        e > 0 && this.timeline.progress(e)
                    }
                    resize() {
                        this.game.device.desktop || this.game.device.landscape ? (this.scale.set(1), this.overlay.height = this.game.viewport.height, this.overlay.width = this.game.viewport.width, this.overlay.position.set(0, 0), this.content.position.set(0), this.value.position.set(974, 654)) : (this.overlay.height = 2 * this.game.viewport.paddingY + this.game.viewport.height, this.overlay.width = 2 * this.game.viewport.paddingX + this.game.viewport.width, this.overlay.position.set(-this.game.viewport.paddingX, 0), this.content.position.set(-420, 0), this.value.position.set(970, this.content.width / 2 - 400))
                    }
                }
                new class extends class extends class extends class {
                    constructor(t) {
                        var {
                            availableLanguages: e
                        } = t;
                        (0, o.Z)(this, "rootNode", void 0), (0, o.Z)(this, "renderer", void 0), (0, o.Z)(this, "logger", void 0), (0, o.Z)(this, "i18n", void 0), (0, o.Z)(this, "helpers", void 0), (0, o.Z)(this, "keyboard", void 0), (0, o.Z)(this, "device", void 0), (0, o.Z)(this, "viewport", void 0), (0, o.Z)(this, "leftHand", void 0), (0, o.Z)(this, "fullscreen", void 0), (0, o.Z)(this, "visibility", void 0), (0, o.Z)(this, "preferences", void 0), (0, o.Z)(this, "sound", void 0), (0, o.Z)(this, "state", void 0), (0, o.Z)(this, "store", void 0), (0, o.Z)(this, "action", void 0), (0, o.Z)(this, "config", void 0), (0, o.Z)(this, "loader", void 0), (0, o.Z)(this, "error", void 0), (0, o.Z)(this, "interaction", void 0), (0, o.Z)(this, "popupManager", void 0), (0, o.Z)(this, "externalApi", void 0), (0, o.Z)(this, "_globals", new Map), (0, o.Z)(this, "settings", {
                            size: [1920, 1080]
                        }), (0, o.Z)(this, "tick", (() => {
                            n.Ticker.shared.update(), this.renderer.render(this.rootNode)
                        })), (0, o.Z)(this, "destroy", (() => {
                            a.vB.removeEventListener("tick", this.tick), n.Ticker.shared.destroy(), n.utils.destroyTextureCache(), this.renderer.destroy(), this.loader.destroy()
                        })), X = this, n.Ticker.shared.autoStart = !1, n.Ticker.shared.stop(), this.config = new c(U), this.logger = new R, this.rootNode = this.createRootNode(), this.renderer = new Z, this.i18n = new S(e), this.helpers = new y(this.config), this.keyboard = new P, this.device = new w(this.renderer), this.viewport = new L, this.leftHand = new A, this.fullscreen = this.device.ios || this.device.iPadPro ? new g : new m(this.device), this.visibility = new Y, this.preferences = new Q, this.sound = new K.$u(this.device, this.visibility, this.preferences), this.state = new W, this.store = new c, this.action = new b, this.loader = new F(this.device), this.error = new f, this.interaction = new x(this.device), this.externalApi = new N(this), this.popupManager = new V(this.rootNode), this.create(), this.initAnalytics()
                    }
                    initAnalytics() {
                        return (0, s.Z)((function*() {
                            try {
                                if (window.location.host.includes("mascot.games")) {
                                    var {
                                        ANALYTICS: t
                                    } = yield Promise.all([i.e(216), i.e(102)]).then(i.bind(i, 7102));
                                    t.ready((() => {
                                        t.page()
                                    }))
                                }
                            } catch (t) {
                                console.log("Analytic module load error")
                            }
                        }))()
                    }
                    createRootNode() {
                        return new _
                    }
                    create() {
                        var t = this.rootNode.addChild(new n.Graphics);
                        t.lineStyle(0), t.beginFill(0), t.drawRect(1, 1, this.settings.size[0] - 2, this.settings.size[1] - 2), t.endFill();
                        var e = () => {
                            this.device.ios && this.fullscreen.toggle(), this.renderer.resize(this.device.width, this.device.height), this.device.desktop || this.device.landscape ? (this.viewport.resize(this.settings.size[0], this.settings.size[1]), this.rootNode.scale.set(this.viewport.aspectRatio), this.rootNode.pivot.set(this.viewport.width / 2, this.viewport.height / 2), this.rootNode.position.set(this.device.width / 2, this.device.height / 2), this.rootNode.mask = t) : (this.viewport.resize(this.settings.size[1], this.settings.size[0]), this.rootNode.scale.set(this.viewport.aspectRatio), this.rootNode.pivot.set(this.viewport.width / 2, 0), this.rootNode.position.set(this.device.width / 2, 0), this.rootNode.mask = null), this.viewport.emit("resize"), this.renderer.render(this.rootNode)
                        };
                        a.vB.addEventListener("tick", this.tick), window.addEventListener("unload", this.destroy), window.addEventListener("resize", e), window.addEventListener("load", e), window.addEventListener("orientationchange", (() => setTimeout(e, 350))), document.addEventListener("keydown", (t => {
                            t.ctrlKey && [61, 107, 173, 109, 187, 189].includes(t.which) && t.preventDefault()
                        })), e(), this.device.ios && setTimeout(e, 250);
                        try {
                            window.__PIXI_APP__ = {
                                view: this.renderer.view,
                                renderer: this.renderer.pixiRenderer,
                                stage: this.rootNode
                            }
                        } catch (t) {}
                    }
                    get(t) {
                        return this._globals.get(t)
                    }
                    set(t, e) {
                        return this._globals.set(t, e), e
                    }
                    delay(t) {
                        return this.helpers.delay(t)
                    }
                    openUrl(t, e) {
                        try {
                            t.startsWith("javascript:") ? window.location.href = t : window.open(t, "_".concat(null != e ? e : "self"))
                        } catch (e) {
                            window.location.href = t
                        }
                    }
                } {
                    constructor(t) {
                        var e;
                        super(t), e = this, (0, o.Z)(this, "server", void 0), (0, o.Z)(this, "launcher", void 0), (0, o.Z)(this, "catchError", function() {
                            var t = (0, s.Z)((function*(t) {
                                var i, s;
                                if ([M.SPENDING_BUDGET_EXCEEDED, M.INSUFFICIENT_BALANCE, M.MAX_BET_LIMIT_EXCEEDED].includes(null == t ? void 0 : t.message)) {
                                    var o, [n] = yield Promise.all([null === (o = e.popupManager) || void 0 === o ? void 0 : o.show({
                                        [M.SPENDING_BUDGET_EXCEEDED]: "PopupSpendingBudget",
                                        [M.MAX_BET_LIMIT_EXCEEDED]: "PopupMaxLimit",
                                        [M.INSUFFICIENT_BALANCE]: "PopupZeroBalance"
                                    }[null == t ? void 0 : t.message]), e.onProcessError(null == t ? void 0 : t.message)]);
                                    return n
                                }
                                null === (s = e.sound) || void 0 === s || s.mute("all", !0, !1);
                                var [a] = yield Promise.all([null === (i = e.popupManager) || void 0 === i ? void 0 : i.show(window.navigator.onLine && "Network Error" !== (null == t ? void 0 : t.message) ? "PopupUnexpectedError" : "PopupNetworkError"), e.onProcessError(null == t ? void 0 : t.message)]);
                                return a
                            }));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()), this.server = this.enhanceServer(new I), this.server.on("response", this.onServerResponse, this)
                    }
                    init(t, e) {
                        var i = this;
                        return (0, s.Z)((function*() {
                            var s;
                            i.preferences.setPrefix(null !== (s = null == e ? void 0 : e.name) && void 0 !== s ? s : ""), i.initPopups(), yield i.connect(t), i.initModules(e), yield i.initSound(), yield i.showIntroScreen(), i.initViews(), i.mountViews(), i.initStates(), i.start()
                        }))()
                    }
                    initPopups() {
                        this.popupManager.add([new De, new Oe, new Me, new Fe, new Ne, new Ze, new We, new Le, new Ie, new Re, new _e])
                    }
                    loadAssets(t) {
                        return new Promise(((e, i) => {
                            this.loader.on("error", (t => i(t))), this.loader.on("progress", (t => {
                                var {
                                    progress: e
                                } = t;
                                return this.launcher.updateProgress(e)
                            })), this.launcher.on("load", e), this.loader.load(t)
                        }))
                    }
                    loadTranslations() {
                        var t = arguments,
                            e = this;
                        return (0, s.Z)((function*() {
                            var i = t.length > 0 && void 0 !== t[0] ? t[0] : {};
                            if ("en" !== e.i18n.language) {
                                var s = "cn" === e.i18n.language ? "zh_CN" : e.i18n.language;
                                try {
                                    var [o, n] = yield Promise.all([fetch("translations/strings_".concat(s, ".json")).then((t => t.json())), fetch("translations/shared/strings_".concat(s, ".json")).then((t => t.json()))]);
                                    e.i18n.setTranslations(je(je(je({}, i), n), o))
                                } catch (t) {
                                    e.i18n.setTranslations(i)
                                }
                            } else e.i18n.setTranslations(i)
                        }))()
                    }
                    initRequest() {
                        var t = this;
                        return (0, s.Z)((function*() {
                            try {
                                yield t.server.request({
                                    action: "init"
                                })
                            } catch (e) {
                                throw t.launcher.reset(), e
                            }
                        }))()
                    }
                    connect(t) {
                        var e = this;
                        return (0, s.Z)((function*() {
                            e.launcher = e.rootNode.addChild(new be);
                            try {
                                yield e.initRequest(), yield Promise.all([e.loadTranslations(), e.loadAssets(t)])
                            } catch (t) {
                                throw e.catchError(t), t
                            } finally {
                                e.rootNode.removeChild(e.launcher)
                            }
                        }))()
                    }
                    initModules(t) {
                        var e, i, s, o, n, a = this.store.get("server:response.init");
                        this.config.merge(t, je({
                            gameId: null !== (e = null == a ? void 0 : a.gameId) && void 0 !== e ? e : "",
                            gameName: null !== (i = null == a ? void 0 : a.gameName) && void 0 !== i ? i : "",
                            homeURL: null !== (s = null == a ? void 0 : a.homeURL) && void 0 !== s ? s : "javascript:history.back()"
                        }, null == a ? void 0 : a.gameConfig)), this.preferences.setPrefix(null !== (o = null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : null == a ? void 0 : a.gameId) && void 0 !== o ? o : "")
                    }
                    showIntroScreen() {
                        return (0, s.Z)((function*() {}))()
                    }
                    initSound() {
                        var t = this;
                        return (0, s.Z)((function*() {
                            if (t.device.desktop) t.sound.init(!1);
                            else {
                                var e = yield t.popupManager.show("PopupSound");
                                t.sound.init(!e)
                            }
                        }))()
                    }
                    initViews() {}
                    mountViews() {}
                    initStates() {}
                    start() {}
                    onProcessError(t) {
                        return (0, s.Z)((function*() {}))()
                    }
                    onServerResponse(t) {}
                    enhanceServer(t) {
                        return this.store.set("server:action", ""), this.store.set("server:nextAction", ""), this.store.set("server:availableActions", []), t.on("response", (t => {
                            this.store.set("server:action", t.action), this.store.set("server:response.current", t), this.store.set("server:response.".concat(t.action), t), t.nextAction && this.store.set("server:nextAction", t.nextAction), t.availableActions && this.store.set("server:availableActions", t.availableActions)
                        })), t.transformRequest([t => je(je({}, t), {}, {
                            action: "spin" === t.action ? this.store.get("server:nextAction") : t.action
                        })]), t
                    }
                } {
                    constructor() {
                        super(...arguments), (0, o.Z)(this, "wallet", void 0), (0, o.Z)(this, "bigWin", void 0), (0, o.Z)(this, "autoPlay", void 0), (0, o.Z)(this, "betLevel", void 0), (0, o.Z)(this, "freeRound", void 0), (0, o.Z)(this, "quickSpin", void 0), (0, o.Z)(this, "netPosition", new de), (0, o.Z)(this, "currentTime", void 0), (0, o.Z)(this, "elapsedTime", void 0), (0, o.Z)(this, "copyright", void 0), (0, o.Z)(this, "menu", void 0), (0, o.Z)(this, "betSettings", void 0), (0, o.Z)(this, "autoPlaySettings", void 0), (0, o.Z)(this, "controls", void 0), (0, o.Z)(this, "riskFeature", void 0), (0, o.Z)(this, "nextRiskFeature", void 0), (0, o.Z)(this, "gameSettings", void 0), (0, o.Z)(this, "checkboxLeftHand", void 0), (0, o.Z)(this, "checkboxGameSounds", void 0), (0, o.Z)(this, "checkboxBackgroundSounds", void 0), (0, o.Z)(this, "checkboxQuickSpin", void 0), (0, o.Z)(this, "checkboxFullscreen", void 0), (0, o.Z)(this, "checkboxRiskFeature", void 0), (0, o.Z)(this, "checkboxIntroScreen", void 0)
                    }
                    initModules(t) {
                        var e, i, s;
                        super.initModules(t);
                        var o = this.server.response;
                        this.wallet = new ne(this.server), this.betLevel = new j(null == o ? void 0 : o.bet, null == o ? void 0 : o.bets, null !== (e = null == o ? void 0 : o.betCoins) && void 0 !== e ? e : 1), this.autoPlay = new te({
                            counts: this.config.get("autoPlay.counts", [10, 25, 50, 100, 150, 300, -1]).map((t => {
                                var e = Number(t);
                                return -1 === e ? 1 / 0 : e
                            })).filter((t => t > 0))
                        }), this.freeRound = new ie, this.quickSpin = new oe(this.config), this.bigWin = new ee(this.config.get("bigWin.bigMultiplier"), this.config.get("bigWin.giantMultiplier"), this.betLevel), this.config.set("autoPlay.available", this.autoPlay.available), this.config.set("quickSpin.available", this.quickSpin.available), this.netPosition.setEnabled(null !== (i = null == o || null === (s = o.gameConfig) || void 0 === s ? void 0 : s.netPosition) && void 0 !== i && i)
                    }
                    initViews() {
                        super.initViews(), this.currentTime = new re, this.elapsedTime = new he, this.copyright = new ae
                    }
                    mountViews() {
                        super.mountViews(), this.netPosition.enabled && (this.rootNode.addChild(this.netPosition.toView(new le)), this.rootNode.addChild(this.elapsedTime)), this.rootNode.addChild(this.currentTime), this.rootNode.addChild(this.copyright)
                    }
                    start() {
                        super.start(), this.freeRound.enabled && (this.freeRound.onStart.once(this.onFreeRoundStart, this), this.freeRound.onFinish.once(this.onFreeRoundFinish, this))
                    }
                    checkBalance() {
                        return Promise.resolve()
                    }
                    applyNetPosition() {
                        this.netPosition.apply()
                    }
                    onServerResponse(t) {
                        super.onServerResponse(t), this.netPosition.save(null == t ? void 0 : t.netPosition)
                    }
                    onFreeRoundStart() {
                        this.autoPlaySettings.stopSection.hideItem("StopItemBalance"), this.autoPlaySettings.stopSection.hideItem("StopItemBalanceDrop")
                    }
                    onFreeRoundFinish() {
                        this.autoPlaySettings.stopSection.showItem("StopItemBalance"), this.autoPlaySettings.stopSection.showItem("StopItemBalanceDrop")
                    }
                    onRNBStart() {
                        this.applyNetPosition(), this.controls.onRNBStart()
                    }
                    onPopupShow() {
                        this.menu.close(), this.betSettings.close(), this.autoPlaySettings.close(), this.controls.onPopupShow()
                    }
                    onPopupHide() {
                        this.controls.onPopupHide()
                    }
                    onProcessError(t) {
                        var e = this;
                        return (0, s.Z)((function*() {
                            [M.SPENDING_BUDGET_EXCEEDED, M.INSUFFICIENT_BALANCE, M.MAX_BET_LIMIT_EXCEEDED].includes(t) && (e.autoPlay.disable(), e.action.emit("update:balance", e.wallet.balance))
                        }))()
                    }
                    createQuickSpinCheckbox() {
                        return this.checkboxQuickSpin = new Ae, this.checkboxQuickSpin.onClick.add((() => {
                            this.quickSpin.toggle()
                        })), this.checkboxQuickSpin
                    }
                    createFullscreenCheckbox() {
                        return this.checkboxFullscreen = new ue, this.checkboxFullscreen.onClick.add((() => {
                            this.fullscreen.toggle()
                        })), this.fullscreen.on("change", (t => {
                            var e;
                            return null === (e = this.checkboxFullscreen) || void 0 === e ? void 0 : e.setChecked(t)
                        })), this.checkboxFullscreen
                    }
                    createLeftHandCheckbox() {
                        return this.checkboxLeftHand = new me, this.checkboxLeftHand.onClick.add((() => {
                            this.leftHand.toggle()
                        })), this.checkboxLeftHand
                    }
                    createGameSoundsCheckbox() {
                        return this.checkboxGameSounds = new pe, this.checkboxGameSounds.onClick.add((() => {
                            this.sound.toggle("effects")
                        })), this.checkboxGameSounds
                    }
                    createBackgroundSoundsCheckbox() {
                        return this.checkboxBackgroundSounds = new ce, this.checkboxBackgroundSounds.onClick.add((() => {
                            this.sound.toggle("background")
                        })), this.checkboxBackgroundSounds
                    }
                    createRiskFeatureCheckbox() {
                        if (this.config.get("rnb", !0)) return this.checkboxRiskFeature = new ve, this.checkboxRiskFeature.setChecked(this.preferences.get("showRiskFeature", !0)), this.checkboxRiskFeature.onClick.add((t => {
                            var e, i;
                            this.preferences.set("showRiskFeature", t), null !== (e = this.riskFeature) && void 0 !== e && e.visible && this.riskFeature.hide(), null !== (i = this.nextRiskFeature) && void 0 !== i && i.visible && this.nextRiskFeature.hide()
                        })), this.checkboxRiskFeature
                    }
                    createIntroScreenCheckbox() {
                        return this.checkboxIntroScreen = new ge, this.checkboxIntroScreen.setChecked(this.preferences.get("showIntroScreen", !0)), this.checkboxIntroScreen.onClick.add((t => {
                            this.preferences.set("showIntroScreen", t)
                        })), this.checkboxIntroScreen
                    }
                } {
                    constructor() {
                        super({}), (0, o.Z)(this, "riskPopup", void 0), (0, o.Z)(this, "riskButton", void 0), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "bigWinAnimation", void 0), (0, o.Z)(this, "fastStopLayout", void 0), (0, o.Z)(this, "freeOverlay", void 0), (0, o.Z)(this, "gameRules", void 0), (0, o.Z)(this, "introScreen", void 0), (0, o.Z)(this, "multiplier", void 0), (0, o.Z)(this, "paytable", void 0), (0, o.Z)(this, "slot", void 0), (0, o.Z)(this, "waysBadge", void 0), (0, o.Z)(this, "_soundState", !1), ni.init(), this.init(Ye, Xe)
                    }
                    get canShowIntro() {
                        return this.preferences.get("showIntroScreen", !0) && "freespin" !== this.server.response.feature && "drop" !== this.server.response.nextAction
                    }
                    loadTranslations() {
                        var t = () => super.loadTranslations,
                            e = this;
                        return (0, s.Z)((function*() {
                            return t().call(e, xi)
                        }))()
                    }
                    loadAssets(t) {
                        var e = () => super.loadAssets,
                            i = this;
                        return (0, s.Z)((function*() {
                            return e().call(i, i.canShowIntro ? Qe : [...Qe, ...Ye])
                        }))()
                    }
                    initModules(t) {
                        super.initModules(t), this.wallet = new zi(this.server), this.sound = new ai(this.device, this.visibility, this.preferences)
                    }
                    initSound() {
                        var t = this;
                        return (0, s.Z)((function*() {
                            if (t.device.desktop) t._soundState = !1;
                            else {
                                var e = yield t.popupManager.show("PopupSound");
                                t._soundState = !e
                            }
                        }))()
                    }
                    showIntroScreen() {
                        var t = this;
                        return (0, s.Z)((function*() {
                            var e, i;
                            (t.background = t.rootNode.addChild(new Hi), t.canShowIntro) ? (t.introScreen = t.rootNode.addChild(new eo), t.loader.on("progress", (e => t.introScreen.updateProgress(e))), yield t.loader.load(Ye), t.sound.init(t._soundState), null === (e = t.sound.get("backgroundNormal")) || void 0 === e || e.fade(2), yield t.introScreen.play()) : (t.sound.init(t._soundState), null === (i = t.sound.get("backgroundNormal")) || void 0 === i || i.fade(2))
                        }))()
                    }
                    initViews() {
                        var t = this;
                        super.initViews(), this.background.logo.alpha = 1, this.slot = this.rootNode.addChild(new Oo), this.multiplier = this.rootNode.addChild(new Li(this.store.get(this.store.get("free:isFree") || "drop" === this.store.get("server:nextAction") ? "reward:nextMultiplier" : "reward:multiplier"))), this.waysBadge = this.rootNode.addChild(new ji(this.store.get("reward:ways"))), this.nextRiskFeature = this.rootNode.addChild(new Zi), this.paytable = new bo, this.gameSettings = new Xt, this.config.get("quickSpin.available", !0) && this.gameSettings.addItem(this.createQuickSpinCheckbox()), this.gameSettings.addItem(this.createFullscreenCheckbox()), this.gameSettings.addItem(this.createLeftHandCheckbox()), this.gameSettings.addItem(this.createGameSoundsCheckbox()), this.gameSettings.addItem(this.createBackgroundSoundsCheckbox()), this.gameSettings.addItem(this.createIntroScreenCheckbox()), this.gameSettings.addItem(this.createRiskFeatureCheckbox()), this.fastStopLayout = new Dt, this.bigWinAnimation = new Mo, this.controls = this.device.desktop ? new Rs : new js, this.betSettings = this.rootNode.addChild(new It), this.betSettings.setBets(this.betLevel.bets, this.betLevel.betCoins), this.betSettings.setPayLines("64-46656", "ways"), this.betSettings.setBet(this.betLevel.bet), this.autoPlaySettings = this.rootNode.addChild(new vt), this.autoPlaySettings.setAutoPlayCounts(this.autoPlay.counts), this.autoPlaySettings.stopSection.addItem(new Ft), this.autoPlaySettings.stopSection.addItem(new Ct), this.autoPlaySettings.stopSection.addItem(new xt), this.autoPlaySettings.stopSection.addItem(new kt), this.gameRules = new Yt, this.menu = new Jt, this.menu.addItem(this.loader.getAsset("iconPaytable"), this.paytable), this.menu.addItem(this.loader.getAsset("iconSettings"), this.gameSettings), this.menu.addItem(this.loader.getAsset("iconRules"), this.gameRules), this.rootNode.addChild(this.fastStopLayout), this.rootNode.addChild(this.menu), this.rootNode.addChild(this.controls), this.rootNode.addChild(this.bigWinAnimation), this.freeOverlay = this.rootNode.addChild(new zs), this.riskPopup = this.rootNode.addChild(new Ni), this.paytable.updateBet(this.betLevel), this.controls.updateBet(), this.betSettings.on("open", (() => {
                            this.menu.close(), this.autoPlaySettings.close(), this.controls.onBetSettingsOpen()
                        })), this.betSettings.on("close", (() => {
                            this.controls.onBetSettingsClose()
                        })), this.betSettings.on("pickBet", (t => {
                            this.betLevel.set(this.betLevel.bets.indexOf(t)), this.nextRiskFeature.showRiskButton(this.betLevel.bet)
                        })), this.autoPlaySettings.on("open", (() => {
                            this.menu.close(), this.betSettings.close(), this.controls.onAutoPlaySettingsOpen()
                        })), this.autoPlaySettings.on("close", (() => {
                            this.controls.setAutoPlayCount(-1), this.controls.onAutoPlaySettingsClose()
                        })), this.autoPlaySettings.on("pickAutoPlayCount", (t => {
                            this.autoPlay.setCount(t), this.controls.setAutoPlayCount(t), this.autoPlaySettings.setAutoPlayCount(t)
                        })), this.betLevel.on("change", (() => {
                            this.paytable.updateBet(this.betLevel), this.controls.updateBet(this.betLevel), this.betSettings.setBet(this.betLevel.bet)
                        })), this.action.on("clickSpin", (() => {
                            this.menu.close(), this.betSettings.close(), this.autoPlaySettings.close(), this.state.oneOf(["ready", "spin", "stop"]) && (this.store.get("spin:isSpin", !1) ? (this.fastStopLayout.disable(), this.action.emit("spin:start")) : this.checkBalance().then((() => {
                                this.autoPlay.enabled || (this.state.is("ready") && !this.config.get("quickSpin.available", !0) && this.controls.buttonSpin.disable(), this.action.emit("sound:click"), this.action.emit("spin:start"))
                            })))
                        })), this.action.on("clickMaxBet", (() => {
                            this.freeRound.enabled || (this.action.emit("reward:reset"), this.menu.close(), this.betSettings.toggle(this.wallet.balance))
                        })), this.autoPlay.on("enable", (() => {
                            this.controls.onAutoPlayEnable(this.autoPlay.count)
                        })), this.autoPlay.on("disable", (() => {
                            this.controls.onAutoPlayDisable()
                        })), this.freeRound.onStart.once(function() {
                            var e = (0, s.Z)((function*(e, i) {
                                yield t.popupManager.show("PopupFreeRound", e), i()
                            }));
                            return function(t, i) {
                                return e.apply(this, arguments)
                            }
                        }()), this.freeRound.onFinish.once(function() {
                            var e = (0, s.Z)((function*(e) {
                                t.autoPlay.disable(), yield t.popupManager.show("PopupFreeRound"), e()
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()), this.nextRiskFeature.onPress.add((0, s.Z)((function*() {
                            if (t.action.emit("sound:click"), t.onPopupShow(), t.nextRiskFeature.hide(), t.wallet.balance - t.store.get("buy").bet < 0) yield t.popupManager.show("PopupZeroBalance"), t.onPopupHide();
                            else {
                                var e = t.store.get("risk", !1),
                                    i = yield t.riskPopup.show();
                                try {
                                    if (i) {
                                        if (t.controls.lock(), yield t.server.request({
                                                action: t.store.get("risk") ? "risk" : "buyin"
                                            }), ti.set(t.store.get("reward:feature", $e.Basic)), t.onRNBStart(), t.beforeFreeSpinsPopup(), e) yield t.freeOverlay.show(Ws.START), t.afterFreeSpinsPopup();
                                        else {
                                            var s, o = t.store.get("buy", !1);
                                            if ((null !== (s = null == o ? void 0 : o.freespins) && void 0 !== s ? s : -1) > -1) {
                                                var n = t.store.get("free:left", 0);
                                                t.action.emit("free:updateLeft", n), yield t.freeOverlay.show(Ws.START)
                                            }
                                            t.afterFreeSpinsPopup(), yield t.delay(800)
                                        }
                                        setTimeout((() => {
                                            t.controls.unlock(), t.action.emit("spin:start")
                                        }), qe.get("beforeFreeSpins"))
                                    }
                                    t.onPopupHide()
                                } catch (e) {
                                    yield t.catchError(e), t.controls.unlock()
                                }
                            }
                        }))), this.action.on("state:ready_enter", (() => {
                            this.store.get("isRiskNBuy") && !this.autoPlay.enabled && this.nextRiskFeature.showRiskButton(this.betLevel.bet)
                        })), this.action.on("state:reward_enter", this.reward()), this.action.on("state:spin_enter", (() => {
                            this.nextRiskFeature.hide(), this.nextRiskFeature.updateCurrentBet(this.betLevel.bet), this.autoPlay.enabled && !this.store.get("free:isFree", !1) && "drop" !== this.store.get("server:nextAction") && (this.autoPlay.setCount(this.autoPlay.count - 1), this.controls.setAutoPlayCount(this.autoPlay.count)), this.controls.onSpinEnter()
                        })), this.action.on("state:finish_enter", (() => {
                            this.autoPlay.count <= 0 && "drop" !== this.server.response.nextAction && this.autoPlay.disable(), this.controls.onFinishEnter()
                        }))
                    }
                    initStates() {
                        super.initStates(), this.state.add("setup", new gi(this), ["ready"]), this.state.add("ready", new di(this), ["spin"]), this.state.add("spin", new Ai(this), ["stop"]), this.state.add("stop", new bi(this), ["reward"]), this.state.add("reward", new ui(this), ["finish"]), this.state.add("finish", new hi(this), ["ready"])
                    }
                    beforeFreeSpinsPopup() {
                        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        this.multiplier.setCurrentFree(this.store.get("free:multiplier", 1)), this.multiplier.hide(), this.waysBadge.hide(), this.slot.beforeFreeSpinsPopup(), this.background.beforeFreeSpinsPopup(), this.controls.beforeFreeSpinsPopup(), t && this.multiplier.updateValue(this.store.get("reward:nextMultiplier", 1)), this.device.portrait && (this.background.logo.alpha = 0)
                    }
                    afterFreeSpinsPopup() {
                        this.background.logo.alpha = 1
                    }
                    start() {
                        var t = () => super.start,
                            e = this;
                        return (0, s.Z)((function*() {
                            t().call(e), ti.set(e.store.get("reward:feature", $e.Basic));
                            var i = "freespin" === e.store.get("server:nextAction"),
                                s = "drop" === e.store.get("server:nextAction"),
                                o = "freespin" === e.store.get("reward:feature");
                            yield e.freeRound.start(), e.state.goTo("setup"), (i || s) && (i || o ? (e.multiplier.setCurrentFree(e.store.get("free:multiplier", 1)), e.slot.beforeFreeSpinsPopup(!0), e.device.portrait && (e.multiplier.hide(), e.background.logo.alpha = 0), e.multiplier.hide(), e.controls.updateFreeLeft(e.store.get("free:left", 0)), yield e.freeOverlay.show(Ws.RESTORE), e.multiplier.show(), e.afterFreeSpinsPopup()) : yield e.popupManager.show("PopupRestore"), e.action.emit("update:win", e.wallet.dropCoins, e.wallet.totalCoins), e.slot.restore()), e.state.goTo("ready")
                        }))()
                    }
                    reward() {
                        var t = this,
                            e = () => {
                                this.fastStopLayout.disable(), this.controls.disableButtonSpin()
                            },
                            i = () => {
                                e(), this.bigWinAnimation.break()
                            };
                        return (0, s.Z)((function*() {
                            var s;
                            e(), null !== (s = t.bigWin) && void 0 !== s && s.available(t.wallet.coins) && (t.bigWinAnimation.press(i), t.controls.pressButtonSpin(i), yield t.bigWinAnimation.show(t.bigWin.type(t.wallet.coins), t.wallet.coins), t.sound.stopBigWin(), e());
                            var o = t.store.get("reward:lines", []).concat(),
                                n = t.store.get("reward:scatters", !1);
                            o.length > 0 && (t.controls.disableButtonSpin(), yield t.slot.animation.allPayment(o), e()), n && (t.controls.disableButtonSpin(), yield t.slot.animation.scatterPayment(n)), yield t.checkFreeSpins(), t.slot.animation.complete(), t.action.emit("update:balance"), t.state.goTo("finish")
                        }))
                    }
                    checkFreeSpins() {
                        var t = this;
                        return (0, s.Z)((function*() {
                            t.store.get("free:isStart", !1) ? (t.controls.updateFreeLeft(t.store.get("free:left", 0)), t.beforeFreeSpinsPopup(), yield t.freeOverlay.show(Ws.START), t.afterFreeSpinsPopup()) : t.store.get("free:isEnd", !1) && (yield t.delay(qe.get("afterFreeSpins")), t.beforeFreeSpinsPopup(), yield t.freeOverlay.show(Ws.END), yield t.delay(200), yield t.playMixPayment(), t.afterFreeSpinsPopup())
                        }))()
                    }
                    playMixPayment() {
                        var t = this;
                        return (0, s.Z)((function*() {
                            var e, i, s = t.store.get("reward:preSpin", {
                                    lines: [],
                                    scatters: !1
                                }),
                                o = (null !== (e = s.lines) && void 0 !== e ? e : []).concat(),
                                n = null !== (i = s.scatters) && void 0 !== i && i;
                            (o.length > 0 || n) && (yield t.slot.animation.mixPayment(o, n, "normal"))
                        }))()
                    }
                    checkBalance() {
                        var t = this;
                        return (0, s.Z)((function*() {
                            if (!t.freeRound.enabled && !t.store.get("free:isFree", !1) && "drop" !== t.store.get("server:nextAction") && t.wallet.balance < t.betLevel.toCoins()) {
                                try {
                                    yield t.server.request({
                                        action: "balance"
                                    }), t.action.emit("update:balance")
                                } catch (e) {
                                    yield t.catchError(e)
                                }
                                if (t.wallet.balance < t.betLevel.toCoins()) throw yield t.popupManager.show("PopupZeroBalance"), new Error("Not enough balance")
                            }
                        }))()
                    }
                    beforeSpin() {
                        var t = this;
                        return (0, s.Z)((function*() {
                            "drop" === t.store.get("server:action") || "drop" === t.store.get("server:nextAction") || t.autoPlay.enabled || ti.isFreespin() || (yield t.quickSpin.tryEnable())
                        }))()
                    }
                    afterReelsStop() {
                        var t = this.store.get("spin:isFast", !1),
                            e = "drop" === this.store.get("server:action") || "drop" === this.store.get("server:nextAction");
                        !t || e || this.autoPlay.enabled || ti.isFreespin() || this.quickSpin.update()
                    }
                }
            },
            8594: (t, e, i) => {
                "use strict";
                i.d(e, {
                    TY: () => n,
                    kX: () => o,
                    oY: () => r,
                    vB: () => a
                });
                var s = i(4891),
                    o = (i(3306), i(8657).Z, s.Q3),
                    n = s.b_,
                    a = null === s.Q3 || void 0 === s.Q3 ? void 0 : s.Q3.ticker,
                    r = {
                        Linear: s.bJ,
                        Back: s.eJ,
                        Elastic: s.tQ,
                        Sine: s.Yv
                    }
            },
            9193: (t, e, i) => {
                "use strict";
                i.d(e, {
                    $u: () => g,
                    tj: () => m
                });
                var s = i(6866),
                    o = i(9900),
                    n = i(7239),
                    a = i.n(n),
                    r = i(6661),
                    h = i(9740),
                    l = i(8594);

                function d(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function c(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? d(Object(i), !0).forEach((function(e) {
                            (0, s.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : d(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                var u = new Map;
                class p extends o.Howl {
                    constructor(t) {
                        super(t), (0, s.Z)(this, "initialVolume", 1), (0, s.Z)(this, "data", {}), this.initialVolume = t.volume
                    }
                    fade(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        return this.volume(i), l.kX.to(this, t, {
                            volume: e > -1 ? e : this.initialVolume
                        }), this.play(), this
                    }
                }
                class g {
                    constructor(t, e, i) {
                        (0, s.Z)(this, "handlers", new Map), (0, s.Z)(this, "onChangeMute", void 0), (0, s.Z)(this, "onChangeVolume", void 0), (0, s.Z)(this, "savedVolume", 0), this.device = t, this.visibility = e, this.preferences = i, this.onChangeMute = new(a()), this.onChangeVolume = new(a()), this.visibility.on("change", (t => {
                            try {
                                var e, i;
                                if ("hidden" !== t || this.mutedAll) null === (e = o.Howler.ctx) || void 0 === e || e.resume();
                                else null === (i = o.Howler.ctx) || void 0 === i || i.suspend()
                            } catch (t) {
                                console.error(t)
                            }
                        }))
                    }
                    init(t) {
                        var e = this.preferences.get("volume", {
                            volume: 1
                        });
                        this.volume = this.device.desktop && !t ? e.volume : t ? 0 : 1
                    }
                    setGlobalVolume(t) {
                        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        o.Howler.volume(t), e && this.preferences.set("volume", {
                            volume: t
                        })
                    }
                    add(t) {
                        return this.get(t)
                    }
                    set volume(t) {
                        t <= 0 && !this.mutedAll ? u.forEach((t => this.setMuteBySound(t, !0))) : t > 0 && this.mutedAll && u.forEach((t => this.setMuteBySound(t, !1))), this.savedVolume = t, this.setGlobalVolume(t), this.onChangeVolume.dispatch(t)
                    }
                    get volume() {
                        return o.Howler.volume()
                    }
                    get mutedAll() {
                        return this.muted("all")
                    }
                    muted(t) {
                        return this.filterByType(t).every((t => {
                            var {
                                muted: e
                            } = t;
                            return e
                        })) || this.volume <= 0
                    }
                    mute(t) {
                        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        this.filterByType(t).forEach((t => this.setMuteBySound(t, e))), e ? this.mutedAll && this.setGlobalVolume(0, i) : this.setGlobalVolume(this.savedVolume <= 0 ? 1 : this.savedVolume, i), this.onChangeMute.dispatch(t, e)
                    }
                    toggle(t) {
                        var e = !this.muted(t);
                        return this.mute(t, e), e
                    }
                    filterByType(t) {
                        return Array.from(u.values()).filter((e => {
                            var {
                                type: i
                            } = e;
                            return "all" === t || t === i
                        }))
                    }
                    setMuteBySound(t, e) {
                        t.muted = e, t.sound.mute(e)
                    }
                    get(t) {
                        var e;
                        return null === (e = u.get(t)) || void 0 === e ? void 0 : e.sound
                    }
                    play(t) {
                        for (var e, i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) s[o - 1] = arguments[o];
                        return null === (e = this.handlers.get(t)) || void 0 === e ? void 0 : e(...s)
                    }
                }
                class m {
                    static pre(t, e) {
                        t && m.supportedSoundExtensions.includes(t.extension) ? (t.load = function(t) {
                            this.isLoading || (this.isComplete ? t && setTimeout((() => t(this)), 1) : (t && this.onComplete.once(t), this.data = new p({
                                src: this.url,
                                sprite: this.metadata.sprite || !1,
                                volume: this.metadata.audioMetadata.volume,
                                loop: this.metadata.audioMetadata.loop
                            }), this.type = h.kC.TYPE.AUDIO, this.loadType = h.kC.LOAD_TYPE.AUDIO, this._setFlag(h.kC.STATUS_FLAGS.LOADING, !0), this.onStart.dispatch(this), this.data.on("loaderror", this._boundOnError, !1), this.data.on("load", this._boundComplete, !1), this.sound = this.data))
                        }, t.complete = function() {
                            var t;
                            if (this.data && (this.data.off("loaderror", this._boundOnError, !1), this.data.off("load", this._boundComplete, !1)), this.isComplete) throw new Error("Complete called again for an already completed resource.");
                            this._setFlag(h.kC.STATUS_FLAGS.COMPLETE, !0), this._setFlag(h.kC.STATUS_FLAGS.LOADING, !1);
                            var e = null !== (t = this.name) && void 0 !== t ? t : this.url;
                            u.set(e, c(c({}, this.metadata.audioMetadata), {}, {
                                id: e,
                                sound: this.sound,
                                muted: !1
                            })), this.onComplete.dispatch(this)
                        }, t._boundComplete = t.complete.bind(t), e()) : e()
                    }
                }(0, s.Z)(m, "extension", r.n.Loader), (0, s.Z)(m, "supportedSoundExtensions", ["mp3"])
            },
            8442: (t, e, i) => {
                "use strict";
                i.d(e, {
                    Oc: () => A,
                    PY: () => u.PY,
                    sf: () => r.AttachmentType
                });
                var s, o = i(6866),
                    n = i(1293),
                    a = i(6661),
                    r = i(9534),
                    h = i(1162),
                    l = i(1368),
                    d = i(9685),
                    c = i(5083),
                    u = i(2339);
                i(3113);

                function p(t) {
                    var e = t.substr(0, 3),
                        i = Math.floor(10 * +e + .001);
                    return "3.7" === e ? s.VER37 : "3.8" === e ? s.VER38 : "4.0" === e ? s.VER40 : "4.1" === e ? s.VER41 : i < s.VER37 ? s.VER37 : s.UNKNOWN
                }
                n.Xd.BLEND_ADD_UNITY = !0, (0, n.Gu)(r.SpineBase.prototype),
                    function(t) {
                        t[t.UNKNOWN = 0] = "UNKNOWN", t[t.VER37 = 37] = "VER37", t[t.VER38 = 38] = "VER38", t[t.VER40 = 40] = "VER40", t[t.VER41 = 41] = "VER41"
                    }(s || (s = {}));
                class g {
                    constructor() {
                        (0, o.Z)(this, "scale", 1)
                    }
                    readSkeletonData(t, e) {
                        var i = new r.BinaryInput(e);
                        i.readString();
                        var o = i.readString(),
                            n = p(o),
                            a = null;
                        if (n === s.VER38 && (a = new d.SkeletonBinary(new d.AtlasAttachmentLoader(t))), (i = new r.BinaryInput(e)).readInt32(), i.readInt32(), (n = p(o = i.readString())) !== s.VER40 && n !== s.VER41 || (a = new c.SkeletonBinary(new c.AtlasAttachmentLoader(t))), !a) {
                            var h = "Unsupported version of spine model ".concat(o, ", please update pixi-spine");
                            console.error(h)
                        }
                        return a.scale = this.scale, a.readSkeletonData(e)
                    }
                }
                class m {
                    constructor() {
                        (0, o.Z)(this, "scale", 1)
                    }
                    readSkeletonData(t, e) {
                        var i = e.skeleton.spine,
                            o = p(i),
                            n = null;
                        if (o === s.VER37 && (n = new l.SkeletonJson(new l.AtlasAttachmentLoader(t))), o === s.VER38 && (n = new d.SkeletonJson(new d.AtlasAttachmentLoader(t))), o !== s.VER40 && o !== s.VER41 || (n = new c.SkeletonJson(new c.AtlasAttachmentLoader(t))), !n) {
                            var a = "Unsupported version of spine model ".concat(i, ", please update pixi-spine");
                            console.error(a)
                        }
                        return n.scale = this.scale, n.readSkeletonData(e)
                    }
                }
                class A extends h.go {
                    createBinaryParser() {
                        return new g
                    }
                    createJsonParser() {
                        return new m
                    }
                    parseData(t, e, i, s) {
                        var o = e;
                        t.spineData = o.readSkeletonData(i, s), t.spineAtlas = i
                    }
                }(0, o.Z)(A, "extension", a.n.Loader), (0, o.Z)(A, "use", (new A).genMiddleware().use)
            },
            9076: (t, e, i) => {
                "use strict";
                i.r(e), i.d(e, {
                    ALPHA_MODES: () => S.ALPHA_MODES,
                    AbstractBatchRenderer: () => r.eo,
                    AbstractMultiResource: () => r.M4,
                    AbstractRenderer: () => r.I8,
                    AppLoaderPlugin: () => v.LP,
                    ArrayResource: () => r.$N,
                    Attribute: () => r.ah,
                    BLEND_MODES: () => S.BLEND_MODES,
                    BUFFER_BITS: () => S.BUFFER_BITS,
                    BUFFER_TYPE: () => S.BUFFER_TYPE,
                    BaseImageResource: () => r.bg,
                    BasePrepare: () => c.Zq,
                    BaseRenderTexture: () => r.jd,
                    BaseTexture: () => r.VL,
                    BatchDrawCall: () => r.a$,
                    BatchGeometry: () => r.JZ,
                    BatchPluginFactory: () => r.TJ,
                    BatchRenderer: () => r.Bv,
                    BatchShaderGenerator: () => r.Zk,
                    BatchSystem: () => r.Sj,
                    BatchTextureArray: () => r.Ie,
                    BitmapFont: () => g.UP,
                    BitmapFontData: () => g.d0,
                    BitmapFontLoader: () => g.vl,
                    BitmapText: () => g.Xz,
                    Bounds: () => x.YZ,
                    BrowserAdapter: () => T.ZQ,
                    Buffer: () => r.lW,
                    BufferResource: () => r.qm,
                    CLEAR_MODES: () => S.CLEAR_MODES,
                    COLOR_MASK_BITS: () => S.COLOR_MASK_BITS,
                    CanvasResource: () => r.Y8,
                    Circle: () => C.Circle,
                    Container: () => x.W2,
                    ContextSystem: () => r.lH,
                    CountLimiter: () => c.fh,
                    CubeResource: () => r.TA,
                    DEG_TO_RAD: () => C.DEG_TO_RAD,
                    DRAW_MODES: () => S.DRAW_MODES,
                    DisplayObject: () => x.s$,
                    ENV: () => S.ENV,
                    Ellipse: () => C.Ellipse,
                    ExtensionType: () => r.nw,
                    FORMATS: () => S.FORMATS,
                    FillStyle: () => l.ft,
                    Filter: () => r.wn,
                    FilterState: () => r.jV,
                    FilterSystem: () => r.kV,
                    Framebuffer: () => r.AI,
                    FramebufferSystem: () => r.WB,
                    GC_MODES: () => S.GC_MODES,
                    GLFramebuffer: () => r.tT,
                    GLProgram: () => r.Ei,
                    GLTexture: () => r.fy,
                    GRAPHICS_CURVES: () => l.wA,
                    Geometry: () => r.ZX,
                    GeometrySystem: () => r.TO,
                    Graphics: () => l.TC,
                    GraphicsData: () => l.iM,
                    GraphicsGeometry: () => l.RB,
                    IGLUniformData: () => r.W1,
                    INSTALLED: () => r.e_,
                    ImageBitmapResource: () => r._w,
                    ImageResource: () => r.PA,
                    InteractionData: () => d.gU,
                    InteractionEvent: () => d.sm,
                    InteractionManager: () => d.bx,
                    InteractionTrackingData: () => d.s_,
                    LINE_CAP: () => l.$o,
                    LINE_JOIN: () => l.S,
                    LINE_SCALE_MODE: () => k.F4,
                    LineStyle: () => l.TD,
                    Loader: () => v.aN,
                    LoaderResource: () => v.kC,
                    MASK_TYPES: () => S.MASK_TYPES,
                    MIPMAP_MODES: () => S.MIPMAP_MODES,
                    MSAA_QUALITY: () => S.MSAA_QUALITY,
                    MaskData: () => r.HI,
                    MaskSystem: () => r.zj,
                    Matrix: () => C.Matrix,
                    Mesh: () => B.Kj,
                    MeshBatchUvs: () => B.wQ,
                    MeshGeometry: () => B.xc,
                    MeshMaterial: () => B.rY,
                    ObjectRenderer: () => r.bO,
                    ObservablePoint: () => C.ObservablePoint,
                    PI_2: () => C.PI_2,
                    PRECISION: () => S.PRECISION,
                    Point: () => C.Point,
                    Polygon: () => C.Polygon,
                    Prepare: () => c.B9,
                    Program: () => r.$r,
                    ProjectionSystem: () => r.NW,
                    Quad: () => r.lD,
                    QuadUv: () => r.ud,
                    RAD_TO_DEG: () => C.RAD_TO_DEG,
                    RENDERER_TYPE: () => S.RENDERER_TYPE,
                    Rectangle: () => C.Rectangle,
                    RenderTexture: () => r.TI,
                    RenderTexturePool: () => r.uW,
                    RenderTextureSystem: () => r.J$,
                    Renderer: () => r.Th,
                    Resource: () => r._z,
                    RoundedRectangle: () => C.RoundedRectangle,
                    Runner: () => P.R,
                    SAMPLER_TYPES: () => S.SAMPLER_TYPES,
                    SCALE_MODES: () => S.SCALE_MODES,
                    SHAPES: () => C.SHAPES,
                    SVGResource: () => r.pX,
                    ScissorSystem: () => r.id,
                    Shader: () => r.ex,
                    ShaderSystem: () => r.p,
                    SimpleRope: () => y.IE,
                    SmoothGraphics: () => k.K3,
                    Sprite: () => E.j,
                    SpriteMaskFilter: () => r.z9,
                    Spritesheet: () => u.c,
                    SpritesheetLoader: () => u.o,
                    State: () => r.ZM,
                    StateSystem: () => r.zI,
                    StencilSystem: () => r.Ld,
                    System: () => r.xP,
                    TARGETS: () => S.TARGETS,
                    TEXT_GRADIENT: () => p.M_,
                    TYPES: () => S.TYPES,
                    TemporaryDisplayObject: () => x.Ql,
                    Text: () => p.xv,
                    TextFormat: () => g.SQ,
                    TextMetrics: () => p._A,
                    TextStyle: () => p.pn,
                    Texture: () => r.xE,
                    TextureGCSystem: () => r.wr,
                    TextureLoader: () => v.dp,
                    TextureMatrix: () => r.UX,
                    TextureSystem: () => r.CT,
                    TextureUvs: () => r.aF,
                    Ticker: () => R.vB,
                    TickerPlugin: () => R.Sb,
                    TilingSprite: () => F.o,
                    TilingSpriteRenderer: () => F.S,
                    TimeLimiter: () => c.FI,
                    Transform: () => C.Transform,
                    UPDATE_PRIORITY: () => R.uF,
                    UniformGroup: () => r.oo,
                    VERSION: () => r.q4,
                    VideoResource: () => r.eH,
                    ViewableBuffer: () => r.Rv,
                    WRAP_MODES: () => S.WRAP_MODES,
                    XMLFormat: () => g.Lq,
                    XMLStringFormat: () => g.lx,
                    autoDetectFormat: () => g.jv,
                    autoDetectRenderer: () => r.e6,
                    autoDetectResource: () => r.pb,
                    checkMaxIfStatementsInShader: () => r.a7,
                    createUBOElements: () => r.TF,
                    defaultFilterVertex: () => r.Y9,
                    defaultVertex: () => r.kP,
                    extensions: () => r.Rw,
                    generateProgram: () => r.qw,
                    generateUniformBufferSync: () => r.K0,
                    getTestContext: () => r.Kc,
                    getUBOData: () => r.DL,
                    graphicsUtils: () => l.yR,
                    groupD8: () => C.groupD8,
                    interactiveTarget: () => d.Op,
                    isMobile: () => T.tq,
                    resources: () => r.Jb,
                    settings: () => T.Xd,
                    systems: () => r.eG,
                    uniformParsers: () => r.sg,
                    utils: () => Z
                });
                i(1509), i(2113), i(5008), i(1820), i(5717);
                var s = i(959),
                    o = i(3943),
                    n = i(9610),
                    a = i(447),
                    r = i(1778),
                    h = i(6661),
                    l = i(1290),
                    d = i(2699),
                    c = i(9447),
                    u = i(4877),
                    p = i(7955),
                    g = i(9079),
                    m = i(8826),
                    A = i(6866),
                    v = i(9740);
                class b {
                    static add() {
                        for (var t of b.supportedFontExtensions) v.kC.setExtensionLoadType(t, v.kC.LOAD_TYPE.XHR), v.kC.setExtensionXhrType(t, v.kC.XHR_RESPONSE_TYPE.BUFFER)
                    }
                    static use(t, e) {
                        b.supportedFontExtensions.some((e => t.extension.endsWith(e))) ? b.loadFromBuffer(t).finally((() => e())) : e()
                    }
                    static loadFromBuffer(t) {
                        var e, i, s, o, n, a, r, h, l, d, c, u, p, g, m, A, v, w, f, y = null !== (e = null === (i = t.metadata) || void 0 === i || null === (s = i.font) || void 0 === s ? void 0 : s.family) && void 0 !== e ? e : t.name;
                        return document.fonts.add(new FontFace(y, t.data, null === (o = t.metadata) || void 0 === o ? void 0 : o.font)), t.styles = [{
                            fontFamily: y.replace(/['|"]/gi, ""),
                            fontStyle: null === (n = t.metadata) || void 0 === n || null === (a = n.font) || void 0 === a ? void 0 : a.style,
                            fontWeight: null === (r = t.metadata) || void 0 === r || null === (h = r.font) || void 0 === h ? void 0 : h.weight
                        }], b.waitFont({
                            "font-family": y,
                            "font-stretch": null === (l = t.metadata) || void 0 === l || null === (d = l.font) || void 0 === d ? void 0 : d.stretch,
                            "font-style": null === (c = t.metadata) || void 0 === c || null === (u = c.font) || void 0 === u ? void 0 : u.style,
                            "font-weight": null === (p = t.metadata) || void 0 === p || null === (g = p.font) || void 0 === g ? void 0 : g.weight
                        }, null === (m = t.metadata) || void 0 === m || null === (A = m.font) || void 0 === A ? void 0 : A.testString, null !== (v = null === (w = t.metadata) || void 0 === w || null === (f = w.font) || void 0 === f ? void 0 : f.timeout) && void 0 !== v ? v : t.timeout)
                    }
                }(0, A.Z)(b, "extension", h.n.Loader), (0, A.Z)(b, "supportedFontExtensions", ["ttf", "otf", "woff", "woff2"]), (0, A.Z)(b, "waitFont", function() {
                    var t = (0, m.Z)((function*(t, e, i) {
                        var s, o, n, a = null !== (s = t["font-style"]) && void 0 !== s ? s : "",
                            r = null !== (o = t["font-weight"]) && void 0 !== o ? o : "",
                            h = null !== (n = t["font-stretch"]) && void 0 !== n ? n : "",
                            l = t["font-family"];
                        i = i || 1 / 0;
                        var d = (new Date).getTime(),
                            c = d,
                            u = [a, r, h, "100px", l].join(" ");
                        do {
                            if ((yield document.fonts.load(u, e)).length > 0) return;
                            yield new Promise((t => setTimeout(t, 16))), d = (new Date).getTime()
                        } while (d - c < i);
                        console.warn("Error loading font! Your font ".concat(t["font-family"], " timed out after ").concat(i, "ms"))
                    }));
                    return function(e, i, s) {
                        return t.apply(this, arguments)
                    }
                }());
                var w = i(9193),
                    f = i(8442),
                    y = i(512),
                    S = i(600),
                    x = i(9360),
                    k = i(3361),
                    C = i(3298),
                    B = i(8656),
                    P = i(3385),
                    T = i(6997),
                    E = i(736),
                    F = i(9504),
                    R = i(798),
                    Z = i(5277);
                l.TC.nextRoundedRectBehavior = !0, p.xv.nextLineHeightBehavior = !0, h.R.add(d.bx, c.B9, r.Bv, s.c, o.Q, n.T, a.O, g.vl, u.o, f.Oc, b, w.tj)
            },
            6599: () => {},
            6331: () => {},
            1368: () => {},
            9685: () => {},
            3113: () => {}
        },
        o = {};

    function n(t) {
        var e = o[t];
        if (void 0 !== e) return e.exports;
        var i = o[t] = {
            id: t,
            loaded: !1,
            exports: {}
        };
        return s[t].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports
    }
    n.m = s, t = [], n.O = (e, i, s, o) => {
        if (!i) {
            var a = 1 / 0;
            for (d = 0; d < t.length; d++) {
                for (var [i, s, o] = t[d], r = !0, h = 0; h < i.length; h++)(!1 & o || a >= o) && Object.keys(n.O).every((t => n.O[t](i[h]))) ? i.splice(h--, 1) : (r = !1, o < a && (a = o));
                if (r) {
                    t.splice(d--, 1);
                    var l = s();
                    void 0 !== l && (e = l)
                }
            }
            return e
        }
        o = o || 0;
        for (var d = t.length; d > 0 && t[d - 1][2] > o; d--) t[d] = t[d - 1];
        t[d] = [i, s, o]
    }, n.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return n.d(e, {
            a: e
        }), e
    }, n.d = (t, e) => {
        for (var i in e) n.o(e, i) && !n.o(t, i) && Object.defineProperty(t, i, {
            enumerable: !0,
            get: e[i]
        })
    }, n.f = {}, n.e = t => Promise.all(Object.keys(n.f).reduce(((e, i) => (n.f[i](t, e), e)), [])), n.u = t => t + ".js", n.miniCssF = t => "main.css", n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), n.hmd = t => ((t = Object.create(t)).children || (t.children = []), Object.defineProperty(t, "exports", {
        enumerable: !0,
        set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + t.id)
        }
    }), t), n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), e = {}, i = "greedy_greenskins_rockways:", n.l = (t, s, o, a) => {
        if (e[t]) e[t].push(s);
        else {
            var r, h;
            if (void 0 !== o)
                for (var l = document.getElementsByTagName("script"), d = 0; d < l.length; d++) {
                    var c = l[d];
                    if (c.getAttribute("src") == t || c.getAttribute("data-webpack") == i + o) {
                        r = c;
                        break
                    }
                }
            r || (h = !0, (r = document.createElement("script")).charset = "utf-8", r.timeout = 120, n.nc && r.setAttribute("nonce", n.nc), r.setAttribute("data-webpack", i + o), r.src = t), e[t] = [s];
            var u = (i, s) => {
                    r.onerror = r.onload = null, clearTimeout(p);
                    var o = e[t];
                    if (delete e[t], r.parentNode && r.parentNode.removeChild(r), o && o.forEach((t => t(s))), i) return i(s)
                },
                p = setTimeout(u.bind(null, void 0, {
                    type: "timeout",
                    target: r
                }), 12e4);
            r.onerror = u.bind(null, r.onerror), r.onload = u.bind(null, r.onload), h && document.head.appendChild(r)
        }
    }, n.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.nmd = t => (t.paths = [], t.children || (t.children = []), t), n.p = "", (() => {
        var t = {
            179: 0
        };
        n.f.j = (e, i) => {
            var s = n.o(t, e) ? t[e] : void 0;
            if (0 !== s)
                if (s) i.push(s[2]);
                else {
                    var o = new Promise(((i, o) => s = t[e] = [i, o]));
                    i.push(s[2] = o);
                    var a = n.p + n.u(e),
                        r = new Error;
                    n.l(a, (i => {
                        if (n.o(t, e) && (0 !== (s = t[e]) && (t[e] = void 0), s)) {
                            var o = i && ("load" === i.type ? "missing" : i.type),
                                a = i && i.target && i.target.src;
                            r.message = "Loading chunk " + e + " failed.\n(" + o + ": " + a + ")", r.name = "ChunkLoadError", r.type = o, r.request = a, s[1](r)
                        }
                    }), "chunk-" + e, e)
                }
        }, n.O.j = e => 0 === t[e];
        var e = (e, i) => {
                var s, o, [a, r, h] = i,
                    l = 0;
                if (a.some((e => 0 !== t[e]))) {
                    for (s in r) n.o(r, s) && (n.m[s] = r[s]);
                    if (h) var d = h(n)
                }
                for (e && e(i); l < a.length; l++) o = a[l], n.o(t, o) && t[o] && t[o][0](), t[o] = 0;
                return n.O(d)
            },
            i = self.webpackChunkgreedy_greenskins_rockways = self.webpackChunkgreedy_greenskins_rockways || [];
        i.forEach(e.bind(null, 0)), i.push = e.bind(null, i.push.bind(i))
    })();
    var a = n.O(void 0, [216], (() => n(4549)));
    a = n.O(a)
})();