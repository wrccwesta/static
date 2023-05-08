/*! @mascot-banner branch: master - commit: eec7ab288d9808d47857735ff89bf963ec3bdcf9 */
(() => {
    var t, e, i, s = {
            1774: (t, e, i) => {
                "use strict";
                var s = i(8826),
                    o = i(6866),
                    n = i(8157),
                    a = i(9076),
                    h = i(8594);
                window.PIXI = a;
                var r = i(3233),
                    l = i.n(r);

                function d(t) {
                    return t && "object" == typeof t && !Array.isArray(t)
                }

                function c(t) {
                    for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++) i[s - 1] = arguments[s];
                    if (!i.length) return t;
                    var o = i.shift();
                    if (d(t) && d(o))
                        for (var n in o) d(o[n]) ? (t[n] || Object.assign(t, {
                            [n]: {}
                        }), c(t[n], o[n])) : Object.assign(t, {
                            [n]: o[n]
                        });
                    return c(t, ...i)
                }
                class u {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.create(null);
                        (0, o.Z)(this, "subscribers", new Map), this.data = t
                    }
                    merge() {
                        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                        this.data = c({}, this.data, ...e)
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
                        return l()(this.data, t, e)
                    }
                }
                class p extends a.utils.EventEmitter {}
                var g = window.navigator.userAgent.match("CriOS") ? .86 : .96;
                class m extends p {
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
                        return window.innerHeight === t || window.innerHeight / t >= g
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
                class A extends p {
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
                class v extends a.utils.EventEmitter {
                    constructor() {
                        super(...arguments), (0, o.Z)(this, "enabled", !1)
                    }
                    toggle() {
                        this.enabled = !this.enabled, this.emit("change", this.enabled)
                    }
                }
                var b = i(5992);
                class w extends b.v {}
                class y {
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
                class S {
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
                class x extends a.utils.EventEmitter {
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
                class k {
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
                var B = i(7239),
                    C = i.n(B);
                class P {
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
                class T {
                    constructor() {
                        (0, o.Z)(this, "KEY_CODE", {
                            Enter: 13,
                            Space: 32,
                            Shift: 16,
                            Escape: 27
                        }), (0, o.Z)(this, "keys", [])
                    }
                    register(t) {
                        var e = new P(t);
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

                function E(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function Z(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? E(Object(i), !0).forEach((function(e) {
                            (0, o.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : E(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class O extends a.utils.EventEmitter {
                    constructor(t) {
                        super(), (0, o.Z)(this, "loader", new a.Loader), this.device = t, this.loader.onError.add((t => this.emit("error", t))), this.loader.onComplete.add((t => this.emit("complete", t)))
                    }
                    load(t) {
                        var e = this;
                        return (0, s.Z)((function*() {
                            var i = yield e._getSizes(), s = Object.create(null), o = t.filter((t => {
                                var i, s, o;
                                return null === (i = null === (s = t.metadata) || void 0 === s || null === (o = s.platform) || void 0 === o ? void 0 : o.includes(e.device.platform)) || void 0 === i || i
                            })).map((t => (s = Z(Z({}, s), i[t.url]), Z(Z({}, t), {}, {
                                url: t.url
                            })))), n = 0, a = Object.keys(s).map((t => t)), h = Object.values(s).reduce(((t, e) => t + e), 0), r = Object.keys(i).length > 0 ? (t, i) => {
                                var o = i.url.split("?")[0];
                                n += s[o], e.emit("progress", {
                                    progress: n / h
                                }), a.includes(o) && a.splice(a.indexOf(o), 1)
                            } : t => {
                                e.emit("progress", {
                                    progress: t.progress / 100
                                })
                            };
                            return new Promise((t => {
                                var i = e.loader.onProgress.add(r);
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
                            var i, s, o, n, h, r = this.loader.resources[t];
                            return r ? null !== (i = null !== (s = null !== (o = null !== (n = r.texture) && void 0 !== n ? n : r.spineData) && void 0 !== o ? o : r.sound) && void 0 !== s ? s : null === (h = r.textures) || void 0 === h ? void 0 : h[e]) && void 0 !== i ? i : r.textures : a.Texture.from(t)
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
                class F {
                    constructor() {
                        (0, o.Z)(this, "renderer", void 0), a.settings.RENDER_OPTIONS.legacy = !0, a.settings.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !0, this.renderer = a.Renderer.create({
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
                var M = i(1200),
                    I = {
                        SPENDING_BUDGET_EXCEEDED: "SPENDING_BUDGET_EXCEEDED",
                        MAX_BET_LIMIT_EXCEEDED: "MAX_BET_LIMIT_EXCEEDED",
                        INSUFFICIENT_BALANCE: "INSUFFICIENT_BALANCE",
                        BALANCE_CHANGE_ERROR: "BALANCE_CHANGE_ERROR"
                    };
                class W extends a.utils.EventEmitter {
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
                                s = yield M.ZP.post(window.serverUrl, i);
                            if (e._response = s.data, e.emit("response:".concat(t.action), e._response), e.emit("response", e._response, t.action), e._response.error) throw new Error(e._response.error);
                            return e._response
                        }))()
                    }
                    resetSession() {
                        return (0, s.Z)((function*() {
                            yield M.ZP.post("cs.php")
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
                class L {
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
                            for (var a = arguments.length, h = new Array(a > 1 ? a - 1 : 0), r = 1; r < a; r++) h[r - 1] = arguments[r];
                            null === (o = this.transition) || void 0 === o || null === (n = o.state) || void 0 === n || n.enter(...h)
                        } else {
                            var l;
                            console.error("[StateMachine]: Can't transition to ".concat(t, " from ").concat(null === (l = this.transition) || void 0 === l ? void 0 : l.name))
                        }
                    }
                }
                class N extends a.utils.EventEmitter {
                    constructor() {
                        super(...arguments), (0, o.Z)(this, "width", void 0), (0, o.Z)(this, "height", void 0), (0, o.Z)(this, "aspectRatio", void 0), (0, o.Z)(this, "propAspectRatio", void 0), (0, o.Z)(this, "paddingX", void 0), (0, o.Z)(this, "paddingY", void 0)
                    }
                    resize(t, e) {
                        this.width = t, this.height = e, this.aspectRatio = parseFloat(Math.min(window.innerWidth / t, window.innerHeight / e).toFixed(3)), this.paddingX = Math.max(Math.round((window.innerWidth / 2 - this.width / 2 * this.aspectRatio) / this.aspectRatio), 0), this.paddingY = Math.max(Math.round((window.innerHeight / 2 - this.height / 2 * this.aspectRatio) / this.aspectRatio), 0), this.propAspectRatio = parseFloat(Math.max((2 * this.paddingX + this.width) / this.width, (2 * this.paddingY + this.height) / this.height).toFixed(3))
                    }
                }
                class _ extends a.Container {}
                class U {
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
                var j = {
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
                class z extends a.utils.EventEmitter {
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
                class V extends(J(a.Sprite)) {
                    constructor() {
                        super(...arguments), (0, o.Z)(this, "interactive", !0)
                    }
                }
                class G {
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
                            var h = yield s.show(...n);
                            return i.rootNode.removeChild(s), h
                        }))()
                    }
                }
                var H = i(899),
                    Q = i.n(H);
                class Y {
                    constructor() {
                        (0, o.Z)(this, "prefix", "")
                    }
                    setPrefix(t) {
                        this.prefix = t
                    }
                    set(t, e) {
                        Q().set("".concat(this.prefix, ":").concat(t), e)
                    }
                    get(t, e) {
                        return Q().get("".concat(this.prefix, ":").concat(t), e)
                    }
                    clear() {
                        Q().clearAll()
                    }
                }
                class X extends a.utils.EventEmitter {
                    constructor() {
                        super(), document.addEventListener("visibilitychange", (() => {
                            this.emit("change", document.visibilityState), "hidden" === document.visibilityState ? this.emit("hide") : this.emit("show")
                        }))
                    }
                    get isVisible() {
                        return "visible" === document.visibilityState
                    }
                }
                var K, q = i(9193);
                a.Texture.WHITE.baseTexture.resource.source.getContext("2d").fillRect(0, 0, 1, 1);

                function J(t, e) {
                    return class extends t {
                        constructor() {
                            super(...arguments), (0, o.Z)(this, "game", K), (0, o.Z)(this, "preventAutoResize", !1), this.on("added", (() => {
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
                class $ {
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
                const tt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAADECAMAAABJEswAAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAC3UExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFrln0MAAAA8dFJOU+XYgn369I3swRLTLsm6QyNhoGVdVaUzPh8aUZHFmTqwqQ5vdnLes5UKTveI2wGFBUsIKM1Ja7UreKs3KmHZN/QAAAQmSURBVHja7dfXUiJRFIbRPVkm52BAQRCYnEWc93+uabAQaAtpvNjnZi27itNN/15485XxBQBIF98AgHTxAwBIF0MAIF10hsPOsDMzXDpfZ7hmY29vb29vb99wH51Wq9Pq3FjL3t7e3t7efvt9tACAdAIMACUC/AEASCfAAFAiwO8BgHQCDAAlAvwMAEgnwABQIsA/AYB0cbrZ+el5dW1+Zm9vb29vb99wH48AgHQCDAAlAvwWAEgnwABQIsDtyaQ9ac9Mls7XmazZ2Nvb29vb2zfcRxsASBfvAIB0AgwAJQL8FABIJ8AAUCLAvwGAdPEdAEgXIwAgXYx2b2y0O6oue3t7e3t7+633sQsApIvXAEA6AQaAEgF+BQCkE2AAKBHg5wBAOgEGgBIBfgkApBNgACgR4D8AQLroAgDpotvrdXsX5+owM73vdVc/59/Xzz17e3t7e3v77ffRAwDSxTEAkC7Gi/P4eFxdF59Tx+PF8/n9unfs7e3t7e3tt9jHHQAgnQADQIkA3wYA0gkwAJQI8FcAIF18AgDSxX0AIJ0AA0CJAO8BAOmmAR7sDapr87vr3rO3t7e3t7ffch8DACBdHKwaHAyq6+q5KXt7e3t7e/sG+zgAANLFCwAgnQADQIkAvwEA0gkwAJQI8BEAkG4a4LOjs+pafC6rP7vuHXt7e3t7e/uG+zgEANLNA3xyeDJTHa6Yfjd/vnyuv2Nvb29vb2/fcB8nAEC6+AsApIsnAEA6AQaAEgHeAQDSCTAAlAjw/qqd/Z3qunpuyt7e3t7e3r7BPvYBgHTxGABIJ8AAUCLAvwCAdPEQAEgnwABQIsC3AIB0AgwAJQL8GQBIF30AIF1c6F/+zO8Xmj23t7e3t7e332q//HD5tj+/al/Unvdrv8He3t7e3t5+8x4AKOABAJAuqp+V6/L58v2Gd+zt7e3t7e2b7usTACDvP+B7AEA6AQaAEgH+CACki7sAQDoBBoASAf4HAKQTYAAQYAAQYABAgAFAgAEAAQYAAQYABBgABBgAEGAAEGAAEGAAQIABQIABAAEGAAEGAAQYAAQYABBgABBgABBgAECAAUCAAQABBgABBgAEGAAEGAAQYAAQYAAQYABAgAFAgAEAAQYAAQYABBgABBgAEGAAEGAAEGAAQIABQIABAAEGAAEGAAQYAAQYABBgABBgABBgAECAAUCAAQABBgABBgAEGAAEGAAQYAAQYAAQYABAgAFAgAEAAQYAAQYABBgABBgAEGAAEGAAEGAAQIABQIABAAEGAAEGAAQYAAQYABBgABBgABBgAECAAUCAAQABBgABBgAEGAAEGAAQYAAQYAAQYH8CABBgABBgAECAAUCAAQABBgABBgAEGAAEGAAQYAAQYAAQYABAgAFAgAEAAQYAAQYABBgABBgAmPkPtIA9BKeG90EAAAAASUVORK5CYII=",
                    et = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZ4AAAElCAMAAADjr3SLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACuUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF7IU6UAAAA5dFJOU8+h2vPke3X4TVfVbFxIIRyF6Qou7oC+lQ43F0NnjWETJSnfkTK1uVLKcJwCBok/O7Gppa3EwZnHZBUSEz4AAAQKSURBVHja7dHrUttWAIXR06QtbYAAgRiwiTHYuPd7uL3/i1WyY1CETRLXmtnTWR+akXyk/YdVflFwxb8gmudXBYcnm+eNgsOTzXMy783J/Hf1MHte3JedNe8n9l3uy4mCq3nOT86r6+PzZWersu9sX84VHJ5snv7znffPq6u/dvb/aV/6Cq709x7q783PqofZ817rXft82Tf2G92XPQWHJ5vntYLDE84zGr0ePT2vDmct3o0+fLfq3L6TfRkpuGU8F6OL6nr6u32+KvuN7cuFgsOTzXOo4PCE80wmh5P5c/Uwq/49Ofz4vni/OGt/Z9/JvkwUXDmdTE4np9X1eF+06nzxrm5i3+W+nCo4PNk8fyg4PNk8vys4PNk8AwWHJ5tndzDYHezOGjSel/1untfV7wb2Xe7LroLDk83znYLDg0dr8/yg4PBk83yv4PDg0do8OwoOTzbPcH4f7gxn7QyfflO/2xl++tl+4/syVHA1z93wrrq+bNfc2He2L3cKrpwpODzhPNuzzrbPqmt7aYt37W+av+072ZdtBYcnm+cnBYcnm+dbBYcHj9bm+UbB4cGjtXneKjg82Tz78/v+2/3qmt8XtX83z5sb+872ZV/B4cnm+U3B4cnmeafg8GTzjOe9G7+rrsf7uHXefm5n38m+jBVcGR8/ND6en1UPs+fj1rv2+bJv7De6L8cKrua5Ob6prsd7s/bZc9/Yb3xfbhRc+VnB4cnm+UrB4cGjtXn+VnB4snn+UnB4snn+UXB4snn+VHB4snmuFByebJ7pdHo1vaqu6We17Fv7zvZlquDKtPfQtDetrt5nVX9b17Pvcl96Cq5cz+/Xvevqmt/reo3zxe/FN4uav+072ZdrBVfeK7g2z+372+p6+rt53v7GvrN9uVVw5UcFhyebR5L+n716VT781Ve7VefNd/ad7VcslRGebJ4XCg5PPM/li8vq+rJdc2Pf2b5cKjg82TxfKzg8eLQ2z4GCw5PNc3RwcHRwVF2P90XLzptndQf2Xe7LkYLDk83zUsHhyebZWn6+9XKrup7fPveN/Ub2ZUvB4Ynnua/+1u++tb+339y+3Cs4PHiEB4/wCA8e4cEjPMKDR3jwCI/w4BEePMIjPHiEB49/AR7hwSM8woNHePAIj/DgER48wiM8eIQHj/AIDx7hwSM8woNHeIQHj/DgER7hwSM8eIRHePAIDx7hER48woNHeIQHj/AIDx7hwSM8woNHePAIj/DgER48wiM8eIQHj/AIDx7hER48woNHeIQHj/DgER7hwSM8eIRHePAIDx7hER48wiM8eIQHj/AIDx7hwSM8woNHePAIj/DgER48wiM8eIRHePAIDx7hER48woNHeIQHj/DgER7hwaNu+xdVr7rouE001AAAAABJRU5ErkJggg==";
                class it extends(J(a.Container)) {
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
                class st extends it {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.Texture.EMPTY,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 90,
                            i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        super(), (0, o.Z)(this, "wrapper", void 0), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "icon", void 0), this.wrapper = this.addChild(new a.Container), this.background = this.wrapper.addChild(a.Sprite.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACBUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wpM4qQAAAAqdFJOUwDSDuwsC4bvH7fzUOIGkBR01eUSgvnfUjPDkaHq9FN6AnU0BcjZ7tjHLX4Dw7IAAAHESURBVFjDxZnZYoIwEEWDIAEEWQSUXTa18/8f2M221o0lue35gPMQSObODGPDtFpZZYkSq1GkxkqSVaXWMnH2TW0WdENh1s1eSLxLc3pInu7meheeTwP43mKGeBNyGgEPNxPFS92ikVj6cop5a9ME7O1osWHSRExjnHnFaTJ8NULsrGkWa2fI7HY0k84dOOaeZnN8euBaQAIE2hPzgYQ4PHQbAQkSPDgTtydhjne/pdORBLp7/+CapLC+cwdJEjf30uCy1Pz6U5okDfPqFSWJ/Hpjl7ZMtX1ZG3SSin5RBy25auunXoYkmfA7FXDZav6VITySjndW+/LV/jl9EYDPzJYi1OlHFs0R6vw9xzYEoXlT1xh1LffNu3r/2gKjLlqmEQiNlSh1ySqUumIZSp2xBKVOmIJSKyxGqWOmotQqi1DqCKkGHgjwMwJ/PuCVAV504PMEfFSBpQBYwIBlFxkWgBEHGMyAcRIZgoHRHdlwANskYHOHbEmBjTSy/QcOLZCjFuSACDjWQg7jJI0QTw5q8Nm7fz2uZewFNmRGjsbFBvq9gVpDnNz/W54gVz7QRRVyvQZdCiJXmdAFLHRtjF12C63oXwGnIQ3G+GgEGQAAAABJRU5ErkJggg==")), this.background.anchor.set(.5), this.setBackgroundAlpha(.2), this.setBackgroundSize(e), this.showBackground(i), this.icon = this.wrapper.addChild(a.Sprite.from(t)), this.icon.anchor.set(.5), this.game.interaction.click(this, (() => this.onClick.dispatch()))
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
                class ot extends st {
                    constructor() {
                        super("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaBAMAAADKhlwxAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURUdwTP///////////////////////////////////////////////w2imYoAAAAMdFJOUwB/gO8Q33Cfr6C/b5qlnKIAAADTSURBVFjD7dUtEsIwFATgphYTfEUGHYvrBcBiERwAyRE4BkfgEqXDj9hDUUhfUve2puqtitj5ppPZSavKYrFYLEtlv/X5vGovSvuGLp8bfJQ2AMEd0CvtFhlvgKfSPmd8oPFQ2jUEH2gE7VLiiDN0wSlacI4WnKQTvibphIOlE87Sggd2iHEGne66Y8vu/yV+Bk3jbrxBT9MbFk8LiSSeFlJzuIyPw2V8FF52zeBl1z/8pbSPZSGRek/CZIpK+z4ZX8Rbae/6U9n54Wq/EYvFYlksXwyBk9qQ6NAVAAAAAElFTkSuQmCC")
                    }
                }
                class nt extends a.Container {
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
                class at extends(J(a.Sprite)) {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        super(a.Texture.WHITE), this.tint = e, this.alpha = t
                    }
                    resize() {
                        var {
                            viewport: t
                        } = this.game;
                        this.width = 2 * t.paddingX + t.width, this.height = 2 * t.paddingY + t.height, this.position.set(-t.paddingX, 0)
                    }
                }
                class ht extends(J(a.Container, {
                    preventResize: !0
                })) {
                    constructor() {
                        super(), (0, o.Z)(this, "_dirty", void 0), (0, o.Z)(this, "_distance", void 0), (0, o.Z)(this, "_minY", void 0), (0, o.Z)(this, "_scrollContainer", void 0), (0, o.Z)(this, "_scrollMask", void 0), (0, o.Z)(this, "_speed", void 0), (0, o.Z)(this, "_startPosition", void 0), (0, o.Z)(this, "_targetPosition", void 0), (0, o.Z)(this, "hitAreaOffsetLeft", void 0), (0, o.Z)(this, "hitAreaOffsetRight", void 0), (0, o.Z)(this, "paddingBottom", void 0), (0, o.Z)(this, "scrollBar", void 0), this.paddingBottom = 0, this.hitAreaOffsetLeft = 0, this.hitAreaOffsetRight = 0, this.interactive = !0, this._width = 0, this._height = 0, this._minY = 0, this._speed = 0, this._dirty = !1, this._startPosition = null, this._distance = null, this._targetPosition = null, this._scrollMask = new a.Graphics, this._scrollContainer = new a.Container, this._scrollContainer.interactive = !0, this.scrollBar = null, super.addChild(this._scrollMask), super.addChild(this._scrollContainer), this.mask = this._scrollMask, this._setupEvents()
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
                            this._minY = this._height - i - this._scrollContainer.height - this.paddingBottom, this._height = e + this.paddingBottom - i, this._scrollContainer.hitArea = new a.Rectangle(0 | this.hitAreaOffsetLeft, 0 | i, t - this.hitAreaOffsetRight | 0, this._scrollContainer.height + this.paddingBottom | 0)
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
                const rt = ht;
                class lt extends(J(a.Container, {
                    preventResize: !0
                })) {
                    constructor(t) {
                        super(), (0, o.Z)(this, "value", void 0), this.value = t === 1 / 0 ? new a.Sprite(this.game.loader.getAsset("assets/autoplay-infinity-count.png")) : new a.Text(t, {
                            fill: 16777215,
                            fontSize: 28,
                            fontFamily: "Avenir-Bold"
                        }), this.value.anchor.set(.5), this.addChild(this.value)
                    }
                    setFill(t) {
                        this.value.style ? this.value.style.fill = t : this.value.tint = t
                    }
                }
                class dt extends it {
                    constructor(t, e) {
                        super(), (0, o.Z)(this, "actived", void 0), (0, o.Z)(this, "backgroundFill", void 0), (0, o.Z)(this, "backgroundOutline", void 0), (0, o.Z)(this, "realValue", void 0), (0, o.Z)(this, "selected", void 0), (0, o.Z)(this, "value", void 0), (0, o.Z)(this, "select", (() => {
                            this.actived = !0, this.value.setFill(this.game.config.get("colors.black")), this.backgroundFill.tint = this.game.config.get("colors.primary"), this.backgroundFill.alpha = 1, this.backgroundFill.renderable = !0, this.backgroundOutline.renderable = !1
                        })), this.realValue = t, this.selected = !1, this.backgroundFill = this.addChild(a.Sprite.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAAA9CAMAAADroBcaAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////x6CpFcAAAAcdFJOUwDJXBuIA27m9xg38dfoKWWOtUmi85QC/pPy/KNCsIVjAAABTUlEQVRo3uWbaXaDMAwGRVhs9j2BRPc/Z8NLl7RQmp9oOjeYh5Fl+bPINlXdtIWbL3o4LrMr2qau5HXirnd6eFzfxS/ppFGpRiij9G+dyash/LSvFCe5GiNPdhZeGKhBgvA3n8ypSVy27XPyahR/2tA5R2qY6LwSMu1zN1qtNzXOj1WXeetC/ltlCJ2axz1V7zhQAMHXDpsoguSzf8sZQvlHXzcqhPH9A3mKkE8JW+pqe41LjlC5FLpOQXR3oRtJqL8LOZKQE6kURSU1S6iWhiXUSMsSaqVgCRWsIreUuYElNMiVJXSlfaGZ9w/hqhxuH8J1CrheDtdt485D0tNOrLiZAm7qg5vL8SannNn2RL19wN0P8W7wcHesvFtwXk6BlyThZX1waSxgXo6XaORlTpe+brSVCh7T/5bbfiTrb6Rk/fPbh+GIbx+G3bcPb2ptD9yZnG4dAAAAAElFTkSuQmCC")), this.backgroundFill.anchor.set(.5), this.backgroundFill.width = 208, this.backgroundFill.height = 61, this.backgroundOutline = this.addChild(a.Sprite.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAAA9CAMAAADroBcaAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACBUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wpM4qQAAAAqdFJOUwAQcJ/v7t/+ASB/MI+gIUG/kECAEVExcVDens9vr1/OYI5Pvs2hYbCubp1/YlMAAAJPSURBVGje7ZrbmqJADIQD9AlBjoIooO7OHuv9H3AbdXZ0Rkf3juTbuuaC36SKxG6i20qGcjQKs5Tqi3JI6HkFVTRTlCusqHsSZzHRmGjo4oBmqSCphtEcXzJ+/PDSP1gMMc1e8aH3r/oIaapOVBETJf7X14vPoD1zERMjxR5pc/eNdwqmImZqDHR4p92AMiB2CkrYm22XAiGx1Br4cotHVcRUjfpItIBKiK1a9b7rBqAjxsphd1fpp7j6581H+jK9DUrePORK7C8NZALmQLQyqC8ariP2yqFfq7JExJ+HXIHtuUBALACIMthAUIF8iZZnFxkkIoBeXdShl8HjXWSrY8fthAD5r+sUC0pGJJxiQfs1FkYKDzljEwrxUw7Q0oZUch9Lr02UUoFKDlCDkXopX6FTKmx8yAVygFY+5gA5PORg/wPNHkich4ycyYeoxZ5GfJUDlONF3qQQCtlXj5kw+llO3LQtbh/yG6sYE/04bqwVCikd19spsQMlZYFo/aw9qZbzv9zpr9MAyGREgj3HWyTCRX8LdHRRLmH9fjvyqoWdDxHt/QzEvOHKc8SdFGusefOE12esdABvGzWw7+adGqpl/ElVH2/HpFAN137Llb2RASmwdkz9Y29mWm2Rrhjm9b3bWEShhukct3Yz0HdP7OINEGWMkFxWwH77bEGttUdqHZfqfH9w53QqUmSB/pC5mUM5l4W+Onb7eGaLo41nMmOYtys3S62yJlwawOrFkyNoF2lr532v3lq9rf5lok6G9GXvseYovfmV/r53TPcH+NF/0RiU6I8AAAAASUVORK5CYII=")), this.backgroundOutline.anchor.set(.5), this.backgroundOutline.width = 208, this.backgroundOutline.height = 61, this.value = this.addChild(new lt("function" == typeof e ? e(t) : t)), this.game.interaction.click(this, (() => this.onClick.dispatch())), this.game.interaction.hover(this, (() => {
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
                class ct extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "_values", void 0), this._values = []
                    }
                    addValues(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        this.removeChildren(), this._values = t, this.addChild(...t.map((t => {
                            var i = new dt(t, e);
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

                function ut(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }
                class pt extends(J(a.Text)) {
                    constructor(t) {
                        super(t, function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? ut(Object(i), !0).forEach((function(e) {
                                    (0, o.Z)(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ut(Object(i)).forEach((function(e) {
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

                function gt(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }
                class mt extends(J(a.Text)) {
                    constructor(t) {
                        super(t, function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? gt(Object(i), !0).forEach((function(e) {
                                    (0, o.Z)(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : gt(Object(i)).forEach((function(e) {
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
                class At extends it {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "AutoPlaySettingsStopCondButtonReset"), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "text", void 0), (0, o.Z)(this, "state", !1), this.background = this.addChild(new a.Sprite(this.game.loader.getAsset("assets/ui_2020/chip.png"))), this.background.anchor.set(.5), this.background.width = 200, this.background.height = 71, this.text = this.addChild(new a.Text(this.game.i18n.t("AutoPlaySettingsStopCondButtonReset"), {
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
                class vt extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "items", void 0), (0, o.Z)(this, "resetButton", void 0), this.title = this.addChild(new pt(this.game.i18n.t("AutoPlaySettingsStopCondTitle").toUpperCase(), {
                            fontFamily: "Avenir-Bold",
                            fontSize: 28
                        })), this.title.anchor.set(.5, 0), this.items = this.addChild(new a.Container), this.resetButton = this.addChild(new At), this.resetButton.onClick.add(this.reset, this), this.resetButton.active(this.itemsActive)
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
                class bt extends(J(nt)) {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "AutoPlaySettings"), (0, o.Z)(this, "bottomBackgroundTexture", void 0), (0, o.Z)(this, "bottomBackgroundMobileTexture", void 0), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "scrollView", void 0), (0, o.Z)(this, "bottom", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "autoPlayValues", void 0), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "subTitle", void 0), (0, o.Z)(this, "stopSection", void 0), (0, o.Z)(this, "closeButton", void 0), (0, o.Z)(this, "spaceKey", void 0), this.bottomBackgroundTexture = a.Texture.from(tt), this.bottomBackgroundMobileTexture = a.Texture.from(et), this.overlay = this.addChild(new at), this.scrollView = this.addChild(new rt), this.bottom = this.addChild(new a.Sprite(this.bottomBackgroundMobileTexture)), this.content = this.scrollView.addChild(new a.Container), this.autoPlayValues = this.content.addChild(new ct), this.title = this.content.addChild(new mt(this.game.i18n.t("AutoPlaySettingsTitle").toUpperCase())), this.title.withGameName(), this.title.anchor.set(.5, 0), this.subTitle = this.content.addChild(new pt(this.game.i18n.t("AutoPlaySettingsSubTitle"))), this.subTitle.anchor.set(.5, 0), this.stopSection = this.content.addChild(new vt), this.closeButton = this.addChild(new ot), this.closeButton.onClick.add((() => this.close())), this.spaceKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Escape), this.spaceKey.onPress.add(this.close, this), this.spaceKey.disable()
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
                var wt = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return (e ? t.toLowerCase() : t).replace(/(?:^|\s|[&"'([{])+\S/g, (t => t.toUpperCase()))
                };
                class yt extends it {
                    constructor(t) {
                        super(), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "mark", void 0), (0, o.Z)(this, "description", void 0), (0, o.Z)(this, "checked", !1), this.background = this.addChild(a.Sprite.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA9CAMAAAApvJHbAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABmUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////26W6sgAAAAhdFJOUwCPnzDvfxD+7iCAnt5v36BwzpBAX89Qr46/vt3NYE6ublTVHtYAAAFZSURBVEjHxZfJdsMgDEUxxgiP8ewmHfX/P1k7cU6dFgJIi779RU+AQBLCrrTul0YhoprOfZ2KcOlBbtxRSs6BbPYbvamRuZ89oVs+3hH3LpM9YfMJfaqc4UeFfpnW4RqDBFb3CYbqhQNb8CwC/mO+xijB+HBUKo5Gczy4BmPVEZPeVZB9X73rnT4hReUemgQjaEboe+YNkb5mPhNhhIFh/LZvikyb9eklwwipaBl0K3o6jYk4M+hFTAy6Ymz5tukMGOFfaV7eDYPuxMKgL8y7xrnnNbPGePXNfFsGsvGPrUtS5ArbVDCMr8GJxvdPWHL+MVrmP/8/IfNj69JF06/HvsVw+hbxHl0fDyqoSUf3ipAwWk0bvJoHRo8sRBuy82Z0zgaVN/Dbs9GkMPS5ZAsv3dlDqb0zVS4r2wJgMh020M3SwHEFAFMOOmKaTOvk0q1rgKk+ky/XHPoNshlvtQO8EbIAAAAASUVORK5CYII=")), this.background.width = 61, this.background.height = 61, this.mark = this.addChild(a.Sprite.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAMAAAB61OwbAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ5TOdIAAAAcdFJOUwCg7/5f3mAg35+/cL7uQIAwb38Qzs+vEU8hMVC5i/YxAAAAvUlEQVQoz6WT2RKDIAxFEcsiIFLtXv7/O9sSRkQIPjRv5GZykpuBEDT4TZ1II2b/jQHXhQ/h0AIJBQ9MP4PuBQagoKMzdKBLrAGPAGxNIf8E2AMAOQLMO4BVUonS4xUQ3tThAJhYPnces7WpgsT1nnucNph81rIrNlhYrJg2HrNs6jFW8ORxbpHrIUtfFUAIHVtIXQFkg+I3GLZ67QbLJemsemTBWoBsWYMd2cKyo0B/iv5V9LrxGblh5l1kP+dCHfNSyQUnAAAAAElFTkSuQmCC")), this.mark.width = 32, this.mark.height = 30, this.mark.anchor.set(.5), this.mark.position.set(this.background.width / 2, this.background.height / 2), t && (this.description = this.addChild(new a.Text(wt(this.game.i18n.t(t), !0), {
                            fill: 16777215,
                            fontSize: 28,
                            fontFamily: "Avenir-Bold"
                        })), this.description.anchor.set(0, .5), this.description.position.set(80, this.background.height / 2)), this.hitArea = new a.Rectangle(0, 0, this.width, 61), this.game.interaction.click(this, (() => {
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

                function St(t) {
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
                class xt extends it {
                    constructor(t, e, i) {
                        super(), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "text", void 0), (0, o.Z)(this, "state", !1), this.background = this.addChild(new a.Sprite(this.game.loader.getAsset("assets/ui_2020/chip.png"))), this.text = this.addChild(new a.Text(e, St(St({}, i), {}, {
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
                class kt extends(J(a.Container, {
                    preventResize: !0
                })) {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "StopItemBalance"), (0, o.Z)(this, "state", "inactive"), (0, o.Z)(this, "checkbox", void 0), (0, o.Z)(this, "chips", void 0), (0, o.Z)(this, "chipValue", 10), (0, o.Z)(this, "balance", 0), (0, o.Z)(this, "onClickCheckbox", new(C())), (0, o.Z)(this, "onClickChip", new(C())), (0, o.Z)(this, "onChange", new(C())), this.checkbox = this.addChild(new yt("AutoPlaySettingsStopCondCheckboxBalance")), this.chips = this.addChild(new a.Container), this.chips.addChild(new xt(this.chipValue, "10%")).active(!0), this.chips.addChild(new xt(25, "25%")), this.chips.addChild(new xt(50, "50%")), this.chips.addChild(new xt(75, "75%")), this.chips.addChild(new xt(100, "100%")), this.checkbox.onClick.add((() => {
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
                class Bt extends(J(a.Container, {
                    preventResize: !0
                })) {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "StopItemBalanceDrop"), (0, o.Z)(this, "state", "inactive"), (0, o.Z)(this, "checkbox", void 0), (0, o.Z)(this, "chips", void 0), (0, o.Z)(this, "chipValue", 10), (0, o.Z)(this, "balance", 0), (0, o.Z)(this, "onClickCheckbox", new(C())), (0, o.Z)(this, "onClickChip", new(C())), (0, o.Z)(this, "onChange", new(C())), this.checkbox = this.addChild(new yt("AutoPlaySettingsStopCondCheckboxBalanceDrop")), this.chips = this.addChild(new a.Container), this.chips.addChild(new xt(this.chipValue, "10%")).active(!0), this.chips.addChild(new xt(25, "25%")), this.chips.addChild(new xt(50, "50%")), this.chips.addChild(new xt(75, "75%")), this.chips.addChild(new xt(100, "100%")), this.checkbox.onClick.add((() => {
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
                class Ct extends(J(a.Container, {
                    preventResize: !0
                })) {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "StopItemFeatureBonus"), (0, o.Z)(this, "state", "inactive"), (0, o.Z)(this, "checkbox", void 0), (0, o.Z)(this, "onClickCheckbox", new(C())), (0, o.Z)(this, "onChange", new(C())), this.checkbox = this.addChild(new yt("AutoPlaySettingsStopCondCheckboxFeatureBonus")), this.checkbox.onClick.add((() => {
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
                var Pt = 0,
                    Tt = 1,
                    Et = 2,
                    Zt = {
                        fontSize: 22
                    };
                class Ot extends(J(a.Container, {
                    preventResize: !0
                })) {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "StopItemWin"), (0, o.Z)(this, "state", "inactive"), (0, o.Z)(this, "checkbox", void 0), (0, o.Z)(this, "chips", void 0), (0, o.Z)(this, "chipType", Pt), (0, o.Z)(this, "onClickCheckbox", new(C())), (0, o.Z)(this, "onClickChip", new(C())), (0, o.Z)(this, "onChange", new(C())), this.checkbox = this.addChild(new yt("AutoPlaySettingsStopCondCheckboxWin")), this.chips = this.addChild(new a.Container), this.chips.addChild(new xt(this.chipType, wt(this.game.i18n.t("AutoPlaySettingsStopCondCheckboxWinAny")), Zt)).active(!0), this.chips.addChild(new xt(Tt, wt(this.game.i18n.t("AutoPlaySettingsStopCondCheckboxWinBig")), Zt)), this.chips.addChild(new xt(Et, wt(this.game.i18n.t("AutoPlaySettingsStopCondCheckboxWinGiant")), Zt)), this.checkbox.onClick.add((() => {
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
                        this.state = "inactive", this.chipType = Pt, this.checkbox.setChecked(!1), this.chips.children.forEach(((t, e) => {
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
                    Ft = "bbcode",
                    Mt = {
                        bbcode: ["[", "]"],
                        xml: ["<", ">"]
                    };
                class It extends a.Text {
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
                        for (var e in this.textStyles = {}, this.textStyles.default = this.assign({}, It.DEFAULT_TAG_STYLE), t) "default" === e ? this.assign(this.textStyles.default, t[e]) : this.textStyles[e] = this.assign({}, t[e]);
                        this.textStyles.default.tagStyle === Ft && (this.textStyles.b = this.assign({}, {
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
                        })), this.withPrivateMembers()._style = new a.TextStyle(this.textStyles.default), this.withPrivateMembers().dirty = !0
                    }
                    setTagStyle(t, e) {
                        t in this.textStyles ? this.assign(this.textStyles[t], e) : this.textStyles[t] = this.assign({}, e), this.withPrivateMembers()._style = new a.TextStyle(this.textStyles.default), this.withPrivateMembers().dirty = !0
                    }
                    deleteTagStyle(t) {
                        "default" === t ? this.textStyles.default = this.assign({}, It.DEFAULT_TAG_STYLE) : delete this.textStyles[t], this.withPrivateMembers()._style = new a.TextStyle(this.textStyles.default), this.withPrivateMembers().dirty = !0
                    }
                    getTagRegex(t, e) {
                        var i = Object.keys(this.textStyles).map((t => [t, t.toUpperCase()].join("|"))).join("|"),
                            {
                                tagStyle: s
                            } = this.textStyles.default;
                        i = t ? "(".concat(i, ")") : "(?:".concat(i, ")");
                        var o = s === Ft ? "\\".concat(Mt.bbcode[0]).concat(i, "(?:\\=(?:[A-Za-z0-9_\\-\\#]+|'(?:[^']+|\\\\')*'))*\\s*\\").concat(Mt.bbcode[1], "|\\").concat(Mt.bbcode[0], "\\/").concat(i, "\\s*\\").concat(Mt.bbcode[1]) : "\\".concat(Mt.xml[0]).concat(i, "(?:\\s+[A-Za-z0-9_\\-]+=(?:\"(?:[^\"]+|\\\\\")*\"|'(?:[^']+|\\\\')*'))*\\s*\\").concat(Mt.xml[1], "|\\").concat(Mt.xml[0], "\\/").concat(i, "\\s*\\").concat(Mt.xml[1]);
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
                            for (var h = [], r = [], l = void 0; l = s.exec(t[a]);) r.push(l);
                            if (0 === r.length) h.push(this.createTextData(t[a], o[o.length - 1], n[n.length - 1]));
                            else {
                                for (var d = 0, c = 0; c < r.length; c++) {
                                    if (r[c].index > d && h.push(this.createTextData(t[a].substring(d, r[c].index), o[o.length - 1], n[n.length - 1])), "/" === r[c][0][1]) o.length > 1 && (o.pop(), n.pop());
                                    else {
                                        for (var u = {}, p = this.getPropertyRegex(), g = void 0; g = p.exec(r[c][0]);) u[g[1]] = g[2] || g[3];
                                        n.push({
                                            name: r[c][1],
                                            properties: u
                                        });
                                        var {
                                            tagStyle: m
                                        } = this.textStyles.default;
                                        if (m === Ft && r[c][0].includes("=") && this.textStyles[r[c][1]]) ! function() {
                                            var t = e.getBBcodePropertyRegex().exec(r[c][0]),
                                                i = {};
                                            Object.entries(e.textStyles[r[c][1]]).forEach((e => {
                                                i[e[0]] = "string" != typeof e[1] ? e[1] : t[1] + e[1]
                                            })), o.push(e.assign({}, o[o.length - 1], i))
                                        }();
                                        else {
                                            var A = r[c][1];
                                            o.push(this.assign({}, o[o.length - 1], this.textStyles[A], this.textStyles[A.toLowerCase()]))
                                        }
                                    }
                                    d = r[c].index + r[c][0].length
                                }
                                if (d < t[a].length) {
                                    var v = this.createTextData(d ? t[a].substring(d) : t[a], o[o.length - 1], n[n.length - 1]);
                                    h.push(v)
                                }
                            }
                            i.push(h)
                        }
                        var {
                            tagStyle: b
                        } = this.textStyles.default;
                        return i[i.length - 1].map((t => {
                            t.text.includes(Mt[b][0]) && (t.text = t.text.match(b === Ft ? /^(.*)\[/ : /^(.*)\</)[1])
                        })), i
                    }
                    getFontString(t) {
                        return new a.TextStyle(t).toFontString()
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
                            for (var i = e.split(/(?:\r\n|\r|\n)/), s = this._getTextDataPerLine(i), o = [], n = [], h = [], r = 0, l = 0; l < i.length; l++) {
                                for (var d = 0, c = 0, u = 0, p = 0; p < s[l].length; p++) {
                                    var g = s[l][p].style;
                                    this.context.font = this.getFontString(g), s[l][p].width = this.context.measureText(s[l][p].text).width, 0 !== s[l][p].text.length && (s[l][p].width += (s[l][p].text.length - 1) * g.letterSpacing, p > 0 && (d += g.letterSpacing / 2), p < s[l].length - 1 && (d += g.letterSpacing / 2)), d += s[l][p].width, s[l][p].fontProperties = a.TextMetrics.measureFont(this.context.font), s[l][p].height = s[l][p].fontProperties.fontSize, "number" == typeof g.valign ? (c = Math.min(c, g.valign - s[l][p].fontProperties.descent), u = Math.max(u, g.valign + s[l][p].fontProperties.ascent)) : (c = Math.min(c, -s[l][p].fontProperties.descent), u = Math.max(u, s[l][p].fontProperties.ascent))
                                }
                                o[l] = d, n[l] = c, h[l] = u, r = Math.max(r, d)
                            }
                            var m = Object.keys(t).map((e => t[e])).reduce(((t, e) => Math.max(t, e.strokeThickness || 0)), 0),
                                A = this.getDropShadowPadding(),
                                v = r + 2 * m + 2 * A,
                                b = h.reduce(((t, e) => t + e), 0) - n.reduce(((t, e) => t + e), 0) + 2 * m + 2 * A;
                            this.canvas.width = v * this.resolution, this.canvas.height = b * this.resolution, this.context.scale(this.resolution, this.resolution), this.context.textBaseline = "alphabetic", this.context.lineJoin = "round";
                            for (var w = A + m, y = [], f = 0; f < s.length; f++) {
                                var S = s[f],
                                    x = void 0;
                                switch (this.withPrivateMembers()._style.align) {
                                    case "left":
                                        x = A + m;
                                        break;
                                    case "center":
                                        x = A + m + (r - o[f]) / 2;
                                        break;
                                    case "right":
                                        x = A + m + r - o[f]
                                }
                                for (var k = 0; k < S.length; k++) {
                                    var {
                                        style: B,
                                        text: C,
                                        fontProperties: P,
                                        width: T,
                                        height: E,
                                        tag: Z
                                    } = S[k], O = w + P.ascent;
                                    switch (B.valign) {
                                        case "top":
                                            break;
                                        case "baseline":
                                            O += h[f] - P.ascent;
                                            break;
                                        case "middle":
                                            O += (h[f] - n[f] - P.ascent - P.descent) / 2;
                                            break;
                                        case "bottom":
                                            O += h[f] - n[f] - P.ascent - P.descent;
                                            break;
                                        default:
                                            O += h[f] - P.ascent - B.valign
                                    }
                                    if (0 === B.letterSpacing) y.push({
                                        text: C,
                                        style: B,
                                        x,
                                        y: O,
                                        width: T,
                                        ascent: P.ascent,
                                        descent: P.descent,
                                        tag: Z
                                    }), x += S[k].width;
                                    else {
                                        this.context.font = this.getFontString(S[k].style);
                                        for (var R = 0; R < C.length; R++) {
                                            (R > 0 || k > 0) && (x += B.letterSpacing / 2);
                                            var F = this.context.measureText(C.charAt(R)).width;
                                            y.push({
                                                text: C.charAt(R),
                                                style: B,
                                                x,
                                                y: O,
                                                width: F,
                                                ascent: P.ascent,
                                                descent: P.descent,
                                                tag: Z
                                            }), x += F, (R < C.length - 1 || k < S.length - 1) && (x += B.letterSpacing / 2)
                                        }
                                    }
                                }
                                w += h[f] - n[f]
                            }
                            this.context.save(), y.forEach((t => {
                                var {
                                    style: e,
                                    text: i,
                                    x: s,
                                    y: o
                                } = t;
                                if (e.dropShadow) {
                                    this.context.font = this.getFontString(e);
                                    var n = e.dropShadowColor;
                                    "number" == typeof n && (n = a.utils.hex2string(n)), this.context.shadowColor = n, this.context.shadowBlur = e.dropShadowBlur, this.context.shadowOffsetX = Math.cos(e.dropShadowAngle) * e.dropShadowDistance * this.resolution, this.context.shadowOffsetY = Math.sin(e.dropShadowAngle) * e.dropShadowDistance * this.resolution, this.context.fillText(i, s, o)
                                }
                            })), this.context.restore(), y.forEach((t => {
                                var {
                                    style: e,
                                    text: i,
                                    x: s,
                                    y: o,
                                    width: n,
                                    ascent: h,
                                    descent: r,
                                    tag: l
                                } = t;
                                if (void 0 !== e.stroke && e.strokeThickness) {
                                    this.context.font = this.getFontString(e);
                                    var d = e.stroke;
                                    "number" == typeof d && (d = a.utils.hex2string(d)), this.context.strokeStyle = d, this.context.lineWidth = e.strokeThickness, this.context.strokeText(i, s, o)
                                }
                            })), y.forEach((t => {
                                var {
                                    style: e,
                                    text: i,
                                    x: s,
                                    y: o,
                                    width: n,
                                    ascent: h,
                                    descent: r,
                                    tag: l
                                } = t;
                                if (void 0 !== e.fill) {
                                    this.context.font = this.getFontString(e);
                                    var d = e.fill;
                                    if ("number" == typeof d) d = a.utils.hex2string(d);
                                    else if (Array.isArray(d))
                                        for (var c = 0; c < d.length; c++) {
                                            var u = d[c];
                                            "number" == typeof u && (d[c] = a.utils.hex2string(u))
                                        }
                                    var p = new a.TextStyle(e),
                                        g = a.TextMetrics.measureText(i || " ", p, p.wordWrap, this.canvas);
                                    this.context.fillStyle = this._generateFillStyle(p, [i], g), this.context.fillText(i, s, o)
                                }
                            })), y.forEach((t => {
                                var {
                                    style: e,
                                    text: i,
                                    x: s,
                                    y: o,
                                    width: n,
                                    ascent: h,
                                    descent: r,
                                    tag: l
                                } = t, d = -this.withPrivateMembers()._style.padding - this.getDropShadowPadding();
                                this.hitboxes.push({
                                    tag: l,
                                    hitbox: new a.Rectangle(s + d, o - h + d, n, h + r)
                                }), (void 0 === e.debug ? It.debugOptions.spans.enabled : e.debug) && (this.context.lineWidth = 1, It.debugOptions.spans.bounding && (this.context.fillStyle = It.debugOptions.spans.bounding, this.context.strokeStyle = It.debugOptions.spans.bounding, this.context.beginPath(), this.context.rect(s, o - h, n, h + r), this.context.fill(), this.context.stroke(), this.context.stroke()), It.debugOptions.spans.baseline && (this.context.strokeStyle = It.debugOptions.spans.baseline, this.context.beginPath(), this.context.moveTo(s, o), this.context.lineTo(s + n, o), this.context.closePath(), this.context.stroke()), It.debugOptions.spans.top && (this.context.strokeStyle = It.debugOptions.spans.top, this.context.beginPath(), this.context.moveTo(s, o - h), this.context.lineTo(s + n, o - h), this.context.closePath(), this.context.stroke()), It.debugOptions.spans.bottom && (this.context.strokeStyle = It.debugOptions.spans.bottom, this.context.beginPath(), this.context.moveTo(s, o + r), this.context.lineTo(s + n, o + r), this.context.closePath(), this.context.stroke()), It.debugOptions.spans.text && (this.context.fillStyle = "#ffffff", this.context.strokeStyle = "#000000", this.context.lineWidth = 2, this.context.font = "8px monospace", this.context.strokeText(l.name, s, o - h + 8), this.context.fillText(l.name, s, o - h + 8), this.context.strokeText("".concat(n.toFixed(2), "x").concat((h + r).toFixed(2)), s, o - h + 16), this.context.fillText("".concat(n.toFixed(2), "x").concat((h + r).toFixed(2)), s, o - h + 16)))
                            })), It.debugOptions.objects.enabled && (It.debugOptions.objects.bounding && (this.context.fillStyle = It.debugOptions.objects.bounding, this.context.beginPath(), this.context.rect(0, 0, v, b), this.context.fill()), It.debugOptions.objects.text && (this.context.fillStyle = "#ffffff", this.context.strokeStyle = "#000000", this.context.lineWidth = 2, this.context.font = "8px monospace", this.context.strokeText("".concat(v.toFixed(2), "x").concat(b.toFixed(2)), 0, 8, v), this.context.fillText("".concat(v.toFixed(2), "x").concat(b.toFixed(2)), 0, 8, v))), this.updateTexture()
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
                            for (var h = o, r = s[a].split(i), l = !0, d = 0; d < r.length; d++)
                                if (i.test(r[d])) {
                                    if (e += r[d], "/" === r[d][1]) d += 2, n.pop();
                                    else {
                                        var c = r[++d];
                                        n.push(this.assign({}, n[n.length - 1], this.textStyles[c], this.textStyles[c.toLowerCase()])), d++
                                    }
                                    this.context.font = this.getFontString(n[n.length - 1])
                                } else
                                    for (var u = r[d].split(" "), p = 0; p < u.length; p++) {
                                        var g = this.context.measureText(u[p]).width;
                                        if (this.withPrivateMembers()._style.breakWords && g > h) {
                                            for (var m = u[p].split(""), A = 0; A < m.length; A++) {
                                                var v = this.context.measureText(m[A]).width;
                                                v > h ? (e += "\n".concat(m[A]), h = o - v) : (e += m[A], h -= v)
                                            }
                                            p > 0 && (e += " ", h -= this.context.measureText(" ").width)
                                        } else if (this.withPrivateMembers()._style.breakWords) e += u[p], h -= g, p < u.length - 1 && (e += " ", h -= this.context.measureText(" ").width);
                                        else {
                                            var b = g + (p > 0 ? this.context.measureText(" ").width : 0);
                                            b > h ? (l || (e += "\n"), e += u[p], h = o - g) : (h -= b, p > 0 && (e += " "), e += u[p])
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
                }(0, o.Z)(It, "DEFAULT_TAG_STYLE", {
                    align: "left",
                    breakWords: !1,
                    dropShadow: !1,
                    dropShadowAngle: Math.PI / 6,
                    dropShadowBlur: 0,
                    dropShadowColor: "#000000",
                    dropShadowDistance: 5,
                    fill: "black",
                    fillGradientType: a.TEXT_GRADIENT.LINEAR_VERTICAL,
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
                }), (0, o.Z)(It, "debugOptions", {
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
                class Wt extends(J(nt)) {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "BetSettings"), (0, o.Z)(this, "bets", []), (0, o.Z)(this, "betCoins", 0), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "scrollView", void 0), (0, o.Z)(this, "bottom", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "betItems", void 0), (0, o.Z)(this, "paylines", void 0), (0, o.Z)(this, "currency", void 0), (0, o.Z)(this, "closeButton", void 0), (0, o.Z)(this, "bottomBackgroundTexture", void 0), (0, o.Z)(this, "bottomBackgroundMobileTexture", void 0), (0, o.Z)(this, "spaceKey", void 0), (0, o.Z)(this, "hasCurrency", !1), this.bottomBackgroundTexture = a.Texture.from(tt), this.bottomBackgroundMobileTexture = a.Texture.from(et), this.overlay = this.addChild(new at), this.scrollView = this.addChild(new rt), this.bottom = this.addChild(new a.Sprite(this.bottomBackgroundMobileTexture)), this.content = this.scrollView.addChild(new a.Container), this.title = this.content.addChild(new mt(this.game.i18n.t("BetSettingsTitle").toUpperCase())), this.title.withGameName(), this.title.anchor.set(.5, 0), this.betItems = this.content.addChild(new ct), this.paylines = this.content.addChild(new It("", {
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
                        })), this.paylines.anchor.set(.5, 0), this.currency = new It(this.game.i18n.t("Currency", this.game.i18n.currency()), {
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
                        }), this.currency.anchor.set(.5, 0), this.closeButton = this.addChild(new ot), this.closeButton.onClick.add((() => this.close())), this.spaceKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Escape), this.spaceKey.onPress.add(this.close, this), this.spaceKey.disable(), this.game.i18n.hasCurrency() && (this.hasCurrency = !0, this.content.addChild(this.currency))
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
                class Dt extends at {
                    constructor() {
                        super(1, 13421772), (0, o.Z)(this, "name", "FastStopLayout"), (0, o.Z)(this, "handlerRef", null), this.alpha = 0, this.interactive = !1
                    }
                    press(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        "function" == typeof this.handlerRef && this.handlerRef(), this.handlerRef = this.game.interaction.clickOnce(this, (() => {
                            this.interactive = !1, e && h.kX.to(this, .1, {
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
                class Lt extends(J(It)) {
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
                class Nt extends(J(a.Text)) {
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
                class _t extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "content", void 0), this.title = this.addChild(new Nt(this.game.i18n.t("GameRulesAdvancedAutoPlayTitle"))), this.content = this.addChild(new Lt(this.game.i18n.t("GameRulesAdvancedAutoPlayContent")))
                    }
                    resize() {
                        this.content.position.set(0, this.title.y + this.title.height + 30)
                    }
                }
                class Ut extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "content", void 0), this.title = this.addChild(new Nt(this.game.i18n.t("GameRulesAutoPlayTitle"))), this.content = this.addChild(new Lt(this.game.i18n.t("GameRulesAutoPlayContent")))
                    }
                    resize() {
                        this.content.position.set(0, this.title.y + this.title.height + 30)
                    }
                }
                class jt extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "content", void 0), this.content = this.addChild(new Lt(this.game.i18n.t("GameRulesBestExperience")))
                    }
                    resize() {
                        this.content.position.set(0, 0)
                    }
                }
                class zt extends(J(a.Sprite)) {
                    constructor() {
                        super(a.Texture.WHITE), this.tint = 2763563
                    }
                    resize() {
                        this.game.device.desktop ? (this.height = 4, this.width = 1120) : this.game.device.landscape ? (this.height = 6, this.width = 1580) : (this.height = 6, this.width = 950)
                    }
                }
                class Vt extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "gameName", void 0), (0, o.Z)(this, "gameTRTP", void 0), this.title = this.addChild(new Nt(this.game.i18n.t("GameRulesGeneralTitle"))), this.gameName = this.addChild(new Lt(this.game.config.get("gameName")));
                        var t = this.game.config.get("trtp");
                        this.gameTRTP = this.addChild(new Lt(this.game.i18n.t("GameRulesGeneralRTP", t))), this.gameTRTP.visible = !!t
                    }
                    resize() {
                        this.gameName.position.set(0, this.title.y + this.title.height + 30), this.gameTRTP.position.set(0, this.gameName.y + this.gameName.height + 30)
                    }
                }
                class Gt extends(J(a.Container, {
                    preventResize: !0
                })) {
                    constructor(t, e, i) {
                        super(), (0, o.Z)(this, "icon", void 0), (0, o.Z)(this, "text", void 0), this.name = i, this.icon = this.addChild(new a.Sprite(e)), this.text = this.addChild(new Lt(t))
                    }
                    resize() {
                        this.game.device.desktop ? (this.icon.scale.set(1), this.text.x = 260, this.text.style.wordWrapWidth = 740) : this.game.device.landscape ? (this.icon.scale.set(2), this.text.x = 380, this.text.style.wordWrapWidth = 500) : (this.icon.scale.set(1.8), this.text.x = this.icon.x + this.icon.width + 30, this.text.style.wordWrapWidth = 280), this.text.height >= this.icon.height ? (this.text.y = 0, this.icon.position.set(0, (this.text.height - this.icon.height) / 2)) : (this.icon.y = 0, this.text.y = (this.icon.height - this.text.height) / 2)
                    }
                }
                class Ht extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "content", void 0), this.title = this.addChild(new Nt(this.game.i18n.t("GameRulesInterfaceTitle"))), this.content = this.addChild(new Lt(this.game.i18n.t("GameRulesInterfaceContent"))), this.addItems()
                    }
                    addItems() {
                        this.addChild(new Gt(this.game.i18n.t("GameRulesInterfaceSpin"), this.game.loader.getAsset("gameRulesButtonSpin"), "itemSpin")), this.addChild(new Gt(this.game.i18n.t("GameRulesInterfaceMenu"), this.game.loader.getAsset("iconMenu"), "itemMenu"));
                        var t = new Gt(this.game.i18n.t("GameRulesInterfaceQuickSpin"), this.game.loader.getAsset("iconQuickSpin"), "itemQuickSpin");
                        this.game.config.get("quickSpin.available", !0) && this.addChild(t);
                        var e = new Gt(this.game.i18n.t("GameRulesInterfaceAutoPlay"), this.game.loader.getAsset("iconAuto"), "itemAutoPlay");
                        this.game.config.get("autoPlay.available", !0) && this.addChild(e), this.addChild(new Gt(this.game.i18n.t("GameRulesInterfaceBetLevel"), this.game.loader.getAsset("ex" === this.game.i18n.language ? "gameRulesButtonPlayLevel" : "gameRulesButtonBetLevel"), "itemBetLevel")), this.addChild(new Gt(this.game.i18n.t("GameRulesInterfaceWin"), this.game.loader.getAsset("gameRulesItemWin"), "itemWin")), this.game.config.get("balanceHide", !1) || this.addChild(new Gt(this.game.i18n.t("GameRulesInterfaceBalance"), this.game.loader.getAsset("gameRulesItemBalance"), "itemBalance")), this.addChild(new Gt(this.game.i18n.t("GameRulesInterfaceSound"), this.game.loader.getAsset("gameRulesButtonSound"), "itemSound"))
                    }
                    resize() {
                        var t = 0;
                        this.children.forEach((e => {
                            var i = "itemBalance" === e.name && this.game.device.mobile && this.game.device.portrait ? 12 : 0;
                            e.resize(), e.position.set(i, t), t += e.height + 30
                        }))
                    }
                }
                class Qt extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "itemQuickSpin", void 0), (0, o.Z)(this, "itemFullscreen", void 0), (0, o.Z)(this, "itemGameSound", void 0), (0, o.Z)(this, "itemBackgroundSound", void 0), this.title = this.addChild(new Nt(this.game.i18n.t("GameRulesSettingsTitle"))), this.content = this.addChild(new Lt(this.game.i18n.t("GameRulesSettingsContent"))), this.game.config.get("quickSpin.available", !0) && (this.itemQuickSpin = this.addChild(new Lt(this.game.i18n.t("GameRulesSettingsContentItemQuickSpin")))), this.itemFullscreen = this.addChild(new Lt(this.game.i18n.t("GameRulesSettingsContentItemFullscreen"))), this.itemGameSound = this.addChild(new Lt(this.game.i18n.t("GameRulesSettingsContentItemGameSound"))), this.itemBackgroundSound = this.addChild(new Lt(this.game.i18n.t("GameRulesSettingsContentItemBackgroundSound")))
                    }
                    resize() {
                        var t;
                        this.children.filter((t => t.visible)).forEach((e => {
                            t ? e.position.set(0, t.y + t.height + 30) : e.position.set(0), t = e
                        }))
                    }
                }
                class Yt extends(J(a.Container)) {
                    constructor() {
                        var t, e;
                        super(), (0, o.Z)(this, "content", void 0), this.content = this.addChild(new Lt("".concat(null !== (t = window.RELEASE_VERSION) && void 0 !== t ? t : "", "\n").concat(null !== (e = window.RELEASE_DATE) && void 0 !== e ? e : "")))
                    }
                    resize() {
                        var t;
                        null === (t = this.content) || void 0 === t || t.position.set(0, 0)
                    }
                }
                class Xt extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "GameRules"), (0, o.Z)(this, "scrollView", void 0), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "content", void 0), this.visible = !1, this.interactive = !0, this.scrollView = this.addChild(new rt), this.scrollView.paddingBottom = 120, this.title = this.scrollView.addChild(new mt(this.game.i18n.t("MenuGameRules").toUpperCase())), this.title.withGameName(), this.title.anchor.set(.5, 0), this.content = this.scrollView.addChild(new a.Container), this.addSections()
                    }
                    addSections() {
                        this.content.addChild(new Vt), this.content.addChild(new Ht), this.content.addChild(new Qt), this.addAutoPlaySection(), this.content.addChild(new zt), this.content.addChild(new jt), this.content.addChild(new Yt)
                    }
                    addAutoPlaySection() {
                        this.game.config.get("autoPlay.available", !0) && (this.content.addChild(new Ut), this.content.addChild(new _t))
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
                class Kt extends(J(nt)) {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "GameSettings"), (0, o.Z)(this, "scrollView", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "title", void 0), this.scrollView = this.addChild(new rt), this.title = this.scrollView.addChild(new mt(this.game.i18n.t("GameSettingsTitle").toUpperCase())), this.title.withGameName(), this.title.anchor.set(.5, 0), this.content = this.scrollView.addChild(new a.Container)
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
                            for (var a = 0, h = 0; a < this.content.children.length; a++) {
                                var r = this.content.children[a];
                                r.visible && (r.position.set(0, 140 * h), h++)
                            }
                            this.title.position.set(this.game.viewport.width / 2, 100), this.content.pivot.set(this.content.width / 2, 0), this.content.position.set(this.game.viewport.width / 2, this.title.y + this.title.height + 60), this.scrollView.paddingBottom = 100, this.scrollView.position.set(0, 0), this.scrollView.resize(this.game.viewport.width, this.game.viewport.height + 2 * this.game.viewport.paddingY - 510)
                        }
                    }
                }
                class qt extends st {
                    constructor() {
                        super("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTP///////////////////////////////////////////////////////////////////////////4/JsPUAAAATdFJOUwC/XzCfgO/fIH/Pj5BwQBCvb6Aufu5CAAAAu0lEQVRYw+3X3Q6DIAyGYVEExL9tvf97nVuGybKJpLZxyb73sCHPARw0VBVCCCGE0F8XvA9aMpGO/ZB17MbRM9doyfL2tMqLPUnKNb1Vq8mC9pU+GmXkjr7Uqcki9oYsYG/Kh+2MfNDuKVvPly3tZNVkrj0bKugyM+gbFWUYNBXGoE2ZHDkLa7B25yGXAwN7oYnfBehzade+cuK0TyMPGjToM2iTo+MhOsTktGk0rgtX6aeHEEIIIfTD3QFMQUQwK1KW1AAAAABJRU5ErkJggg==");
                        var t = this.game.config.get("homeURL.url", "javascript:history.back()"),
                            e = this.game.config.get("homeURL.target", "self");
                        this.visible = this.game.config.get("homeURL.show", !0), this.onClick.add((() => this.game.openUrl(t, e)))
                    }
                }
                class Jt extends it {
                    constructor(t) {
                        super(), (0, o.Z)(this, "icon", void 0), (0, o.Z)(this, "border", void 0), this.preventAutoResize = !0, this.border = this.addChild(new a.Sprite(this.game.loader.getAsset("iconBorderV"))), this.icon = this.addChild(new a.Sprite(t)), this.game.interaction.click(this, (() => {
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
                        t.desktop ? (this.border.texture = this.game.loader.getAsset("iconBorderV"), this.icon.scale.set(1), this.icon.hitArea = new a.Rectangle(0, -30, 110, 150), this.icon.position.set(20, (this.border.height - this.icon.height) / 2)) : t.landscape ? (this.icon.scale.set(2), this.icon.hitArea = null, this.border.texture = this.game.loader.getAsset("iconBorderV"), e.enabled ? (this.border.position.set(0, 0), this.icon.position.set(0, 0)) : (this.icon.position.set(-100, 0), this.border.position.set(this.icon.width + this.icon.x, 0))) : (this.icon.scale.set(1.8), this.icon.position.set(0, 0), this.icon.hitArea = null, this.border.texture = this.game.loader.getAsset("iconBorderH"), this.border.position.set(0, this.icon.height))
                    }
                }
                class $t extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "Menu"), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "contentItems", void 0), (0, o.Z)(this, "bottom", void 0), (0, o.Z)(this, "items", void 0), (0, o.Z)(this, "homeButton", void 0), (0, o.Z)(this, "closeButton", void 0), (0, o.Z)(this, "bottomBackgroundTexture", void 0), (0, o.Z)(this, "bottomBackgroundMobileTexture", void 0), (0, o.Z)(this, "spaceKey", void 0), (0, o.Z)(this, "currentIndex", 0), (0, o.Z)(this, "onClickHome", void 0), (0, o.Z)(this, "onClickClose", void 0), this.visible = !1, this.interactive = !0, this.bottomBackgroundTexture = a.Texture.from(tt), this.bottomBackgroundMobileTexture = a.Texture.from(et), this.overlay = this.addChild(new at), this.contentItems = this.addChild(new a.Container), this.bottom = this.addChild(new a.Sprite(this.bottomBackgroundMobileTexture)), this.items = this.addChild(new a.Container), this.homeButton = this.addChild(new qt), this.closeButton = this.addChild(new ot), this.closeButton.onClick.add((() => this.close())), this.spaceKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Escape), this.spaceKey.onPress.add(this.close, this), this.spaceKey.disable()
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
                        var i = this.items.addChild(new Jt(t));
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
                var te = {
                    counts: [10, 25, 50, 100, 150, 300, 1 / 0]
                };
                class ee extends a.utils.EventEmitter {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : te;
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
                class ie {
                    constructor(t, e, i) {
                        this.bigMul = t, this.giantMul = e, this.betLevel = i
                    }
                    available(t) {
                        return t >= this.bigMul * this.betLevel.toCoins()
                    }
                    type(t) {
                        return t >= this.giantMul * this.betLevel.toCoins() ? Et : Tt
                    }
                }
                class se extends class {
                    constructor() {
                        (0, o.Z)(this, "game", K)
                    }
                } {
                    constructor() {
                        super(), (0, o.Z)(this, "left", -1), (0, o.Z)(this, "enabled", !1), (0, o.Z)(this, "onStart", new(C())), (0, o.Z)(this, "onFinish", new(C())), this.update(this.game.server.response), this.game.server.on("response", this.update, this)
                    }
                    update(t) {
                        this.left = l()(t, "freeRounds", l()(t, "preSpin.freeRounds", -1)), this.enabled = this.left > -1
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
                class oe {
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
                class ne {
                    constructor(t) {
                        (0, o.Z)(this, "watcher", void 0), (0, o.Z)(this, "enabled", !1), (0, o.Z)(this, "onToggle", new(C())), (0, o.Z)(this, "onTryEnable", new(C())), this.config = t, this.watcher = new oe(t)
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
                class ae {
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
                class he extends(J(a.Text)) {
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
                class re extends(J(a.Text)) {
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
                class le extends(J(a.Text)) {
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
                class de extends(J(a.Text)) {
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
                class ce extends class {
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
                class ue extends yt {
                    constructor() {
                        super("GameSettingsBackgroundSounds"), (0, o.Z)(this, "name", "BackgroundSoundsCheckbox")
                    }
                    resize() {
                        this.game.device.desktop ? this.scale.set(1) : (this.game.device.landscape, this.scale.set(1.8))
                    }
                }
                class pe extends yt {
                    constructor() {
                        super("GameSettingsFullscreen"), (0, o.Z)(this, "name", "FullscreenCheckbox")
                    }
                    resize() {
                        this.game.device.desktop ? (this.scale.set(1), this.visible = !0) : this.visible = !1
                    }
                }
                class ge extends yt {
                    constructor() {
                        super("GameSettingsGameSounds"), (0, o.Z)(this, "name", "GameSoundsCheckbox"), this.description.style.wordWrapWidth = 220
                    }
                    resize() {
                        this.description.style.wordWrap = this.game.device.landscape || this.game.device.desktop, this.game.device.desktop ? this.scale.set(1) : (this.game.device.landscape, this.scale.set(1.8))
                    }
                }
                class me extends yt {
                    constructor() {
                        super("GameSettingsIntroScreen"), (0, o.Z)(this, "name", "IntroScreenCheckbox"), this.description.style.wordWrapWidth = 220
                    }
                    resize() {
                        this.description.style.wordWrap = this.game.device.landscape || this.game.device.desktop, this.game.device.desktop ? (this.scale.set(1), this.position.set(-300, 350)) : (this.game.device.landscape, this.scale.set(1.8), this.position.set(-400, 760))
                    }
                }
                class Ae extends yt {
                    constructor() {
                        super("GameSettingsLeftHand"), (0, o.Z)(this, "name", "LeftHandCheckbox"), this.description.style.wordWrapWidth = 300
                    }
                    resize() {
                        this.description.style.wordWrap = this.game.device.landscape || this.game.device.desktop, this.game.device.desktop ? this.visible = !1 : (this.game.device.landscape, this.scale.set(1.8), this.visible = !0)
                    }
                }
                class ve extends yt {
                    constructor() {
                        super("GameSettingsQuickSpin"), (0, o.Z)(this, "name", "QuickSpinCheckbox")
                    }
                    resize() {
                        this.game.device.desktop ? this.scale.set(1) : (this.game.device.landscape, this.scale.set(1.8))
                    }
                }
                class be extends yt {
                    constructor() {
                        super("GameSettingsRiskFeatureCheckbox"), (0, o.Z)(this, "name", "RiskFeatureCheckbox")
                    }
                    resize() {
                        this.game.device.desktop ? this.scale.set(1) : (this.game.device.landscape, this.scale.set(1.8))
                    }
                }
                i(7859);
                class we extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "logo", void 0), (0, o.Z)(this, "progress", void 0), (0, o.Z)(this, "_tweeenProgress", void 0), this.logo = a.Sprite.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAADzBAMAAADTF1+6AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURUdwTP///////////////////////////////////////////////////////81e3QIAAAAOdFJOUwBovPELGCk/kVKoz+B7jzeedwAADjRJREFUeNrsnItvHEcdx/ece9hOjBwopY2K5YY2rdpgJSFuQhpOW1y1aZugK0HpI411VRInhNS65tEQESy3KIS+TpcSCBSwDIVCqHrKu0XQU0ApLaCeTB6Il6x6z4nPd+f9G9jZ3XnuvPa6ASF5FKV2erOf3Znf/Ob3+85vz7D/O+1DYxY0C5oFzYJmQf/HoNr8a9MWsKAJ49q02CzoGoIST9+4J9Q14/vnf68J0LqSbVd+GYKTes25zDtmWFCs7P7zL7Q5iaLb4fdhQE/+7OTzXje7kdMF7fYvdOy5kz/N6oF2kSv6Lk1OMk10snI6oAcp19HI6IGeoHrVTDUoUaKd1KgeqEj3OqMGPcR4w6t6I8f0qptKEHNrdlUL1Mp661EVKMX2qGiB5rDdplSglsBOktUBDbK9LBWoPwAq6IBGAt0yClBXVKBOBSgfFWhYAeqJCtQdGmRdp94gPm6HBhWDXSqXVY77IifsGQ09Rw7poJzzLV58pZqjEV6nSqcM9AluIFdQgPq4veqSbekb3B4VUwFq5QeaVVPEWSPooPIMiTS/41lRpFDif75X6b27BMGzYJpUHxeDBGMn2C6Un5Zs5eOCvrfwVmqP4MNjGqC2Mr9vnRM9bBRw/qQVBd0jmN8zwaUq+OQJUy+u6xc8UsDEHxI8UEYzgGzRnCXRDFm6kWobEaCR16oxoHby6nfgH6e1Y2989fPJIs+Wgvb5erzM7hAaoM2EayRJU7RTIDmEO65ktUFo7CZoc69QFr6eNucY93YUactu0pGssbmDQgyw53J9b1TJhQD5yY7vSb/LnWZsMhVv70mWOCmVKhED6VvlGAysy7yxwyP3R4h+LZgkqlPLbT/McjzNKCd/IHzTV49mP1JWjl3NVY7NnYkw/X8iuOhb9FK1kCCcOCKTGmJnKBpBYyhg4D0BdCSgDnaSUIo3E7FEU2IcK3KoxyMGDTIraT3PsUUBamXCmy7NFDc0KJ6mrQEO5fLIZTS4+VzxlrBgi4oA1Ed9MMaE2BGCWinf0K6rQoQHJSndYY6urtKE1FkidYchvVXUFGictO8uTVtoBjRIbklFXVmlCdAccrRKukJREyBoaEvAL2l+SBkadN/hv3/n5b8ezfAc+BVivdKu+xG31zOmLij+zcXQlN++Phj1XCVsnYiKkjecglvum0e0QE99hgyp3z/CBglTzM/ezb1KZVWfzSpBiX+xeTyMnxLEU7RRjs8X1ynN97IClOJkIh94gx7ngCa9Xps4SeJtUlAbN4Vb6RkF8UncHbRHuZLBb/igaTHHtr9gEiZNgs65sblAmniLBqVx+JwU5dj2Uv4TuTFqrCzqtYhYFBC0AlzpovgscBGeIwL0c+nd2ZUxDFpiuPfTAOb4NcmhoxOTBK2uKta2kONoRYPsTsu7oHNadrxpokWK19Fw4CQjqJ+0I1APDJ/zsi4NPK1T0DNUqYyG1xwPNRfFNEU/fP6i9LzWon1dHD7QbmmvKezzR8F+BoJAkQiC74313jVaKOC1SSyOjIFkelqi6mBPOo/Zj05LRDQcA3ah9H7Q3ZwT7Fiv/u3vSOM4x+yweXdeY7a81xi5Fc9xx4B+oPqze91E8UKa0Hy76JhhKqD0rvrHFjB9T79IakLwAYBZnGdVnWNow0u9hGODHjIfGgJ3Sx0BNQ6hjebhHmRBSWxMraBnO8/DEyeLFt4lvNi0z6IEFsc0yHws8W9odK14RbVV6UltMGcRO/wuHVSk2tLrDANhqDUmHLrJN5s+7E7ip6kxqFxiw4tdngGspcKEjk5qGOps2BW/6A1yF5F0ZPBFnHYrT6kHC62LCoIT1DBwlP5Ej2tkZTrZKdL7QUBlcJ4CqWQoCCYUcp4oHkv3Egu6wGgTDW7kuaabyJbHgjolX+bfWcBD5Wc3a1UiiEkoP5ng2RQ/AI8TjrrGKImWOK3qYeVOrDhOqI+Bp5jBPq2MbHEk16E6TCBV5ON0wi1RdTYHZIU+DUUjT9/LenVJAfa5hYByO6oehgbDFZ9Pol2xHpAD6qZaQJqgu0gS356A1hlTD0MqTY836nJe/UBY3JqrFhrwNp+juzgj94BCgMTKzxAxlnu5vXBUVaNzU+CW88O8LgfsoIXlsbknVmelJgeP4caxt0zZVlai1ZHZPiENtXAtfGPgGK6Eu6zleVUi5gUj9wjtHnOuLzrL8anU2UmBkI/83eMtdoKIwBKY6a8Cgg1YYwclh5mOkSV7sdHVofu6TXw+7cxgW52yoGl/K2DO08l8DgxDywTeJycQ8wThidrInNFyvXiGPDRbDpmUgv8wGY2CpTdew3HhFfyjBXPxxA+ocO+8u3QL5B4xin9cCUvRUhfYE9kUGK9+bAvIZdjLXj76zLbD/ywHip46/BU6jtce3p7//OzRgX2Hn0uzwTTQ50109TFFPuGlAiO+c+hB2UxcUc457H06h0KMHI4kBJlLxlP03by1jCxIEefP+CbaiR7DxIYuPobdCTNx7Idb5b06/XEehkPcUN0bMDl3W2K0oLnSXtPQa49Cx2BRrkYw1htZiWaaU0xFDXcOxn/dcLSrzLEq2z6PvPg0LUD1y3rdirahc9A7Vin3FBy4jD9DxGh4wyhLSZfilYBAwDq+LM7+wZymygHlZJI6agzcXRbriUsoLejHoi4HicNLVgtKiJafm5fAzIsWneICdeJ1Q6AFuYlzssgfhUsSdSt+k5gjVre4pMYluTD4SrDHtw1Kr2PniF/rZB1RSZ1PMYLDqgITSDPm7bVXGYt9J6vWVJMLiE71Q6aWpmrc/yJ5c9frydGJn7zhaV63f8oMBrikSkz2uv+Gxe4d3v3m90MI7PEN2wa+wj/XmSTmq8r2GhjIfGQlfy4pb5aZUDzKI4MvkVEx3viiB42QFXp53QLJJkDUtUfousAoQSi7ocKtJdGD2qjsbR6nNiQiUAtl0a2coqaIQIPUM6D4Ihs5qEidWaMZG40alGSS8KLmQWxoUAuTuo9oTlJoUBctGSCzk+gmTYGQjDPD5pu90YLQyC1n168VLShvsz4n+C9RgNqCxVv9tpZzCAkaCZbFttq2jgcPB8IiyPKgk3XD8uZBD7xwx/McVbMzaPDEIz3mdDLDgdwTT6ia43ymztnascnvIM5SNUF+YuHJvwkciN7FLRzziwTXcK8kB+XJEtgDgvrRcTrfQgcpw/qgVjKffJxfUksV6NYyRKJU1Qd1EQnlJiJufVcgtLpnz3mubCwFYcu1r24ng+qcQDMFNjBg2zz3JwURWXOFTbG5/oL55IwuaJ5EMzD4Q8we2uqBhsQiiFCbpFpOD7RL0H1MXJTEZmE5HZDo9HtCptWzp/GmGiQ8Yu6U7fA84UgBEtXZr1Co9XRr4j2+YMGwSHWm2qgKlNK3BKk9NPEen9veEx91lEV1CXLQoKSMht/W8acpqwBxzaiWke3Wj8uMNNQ7YjVFyrBDJCQaoV6vs1cqywK3p7lFEyFBJ5SZNyPd64GKMg9pqI/z2IX0v3/XciQqUEEB6oto6Jp4jy+jA+rnVFMpShNZS63rcIJ6fvj3+PS+TyEm2r303+NbrgWKpwXxhf57fJ1aIHYgxjRAtN+v6XGYg433tKKge0g3dIsmiKqVutnUDIn337jnABvOqJofPDX27J+/J0zG5yVF9YKh3X5EpEphctjEhbT9ds4I0b5espddbiZZjptGyHZvJJpqc20WFB2ovvDatDtZ0LVus6BZ0CxoFhQedPfCxWRAffJOMn5rLKR+/cvCUzqgLThhmVoHr/Q3IP2i+KbmRB1J9N0plWMmWQtlfdL57JPeZ+sDG7b6fzYFQBn8VvUo9O2XqEDPf2Ec5u2XqXowvzDP+82SbBO2icPnbIwWAjdSErGfoZylhN5KgbywHIQq+qpQWhzz4w0/w3Cudd8WmBOiamAv6gY3Ed8KSyylIJy19fogJ2FJvGQvK/iBdd0NEm++16Oedi684NTq23MxOKqbSu7344C+lV87LWe0O3+/wQG1oAC9DY7cTi+l6vMTBBBULkOnLm6BSuNFPxBwNXkggOdRdjCHZ3UVdF7YMH3QpF8fWfBSmWmy8GyaLgjqhknIClzULQb59zINJa5uH3jc++8UWUV2nBYKcnBanSeNyUENVL18HL/10+6XMyX94SkSWVMbnX6uRfJCXA2KwSw86c/VPJsYsxr5TQ0mlbXOUO8G9EhBdViyWkOnu/CTE15JEKjOhKJPndbbprC0M4NSRiHIielH3BWRRKCPQVAaCrL+l63U6FzyCq42xP9HDBpzDXzYeNSfdRbkvoXhvYFXpVPdD1EZFFirI1KQZcR7wZNUTOMFAciuZmDWHgDFCbtQgqrAwCeMZM3vFgDZq2ABYJUeuklcxKzzRHbWcQHnjHZLCLLr13mPZNHqz1Vc+qw0BvAY3Y6BF4xByx/xTiO1D7S9GAS+RSrhLe95tLoyHjBACWjKiJ90ViUGBaq7XR9TchdbBy1GrEcuA4ooAlDVuVNnIo+C4nL/wlxQzfMPw9TbR3YGcXMqFwRArpjXQoCSA6Bt4YCu0N+TOAzdE1G4KgOdc7XEmr/8GGOo7CDmwELHs3/w970H4V45rgGacN2QxQdVje1lUEAZh+MK3h+uH0rBwxXwjWKLiMMNAWgGgCruVmT5xsqAHBtO7MtC1+vmvBu2wsI0IBk99mlQjrhZB+Q5bAEIvmGwmRHKxqlTH1woIAX1ggVv+UuBAS31whH4vij8Xra4t10uDbwqIABNuKAqqP8XgOz3gVNNoiu5EaORggWdH2TI3yRb+ef+M2MQtQhEQJhAyg5ZCsjQuNuFPGq4q/fGakTCf7OiA2WVPEz7aLdl1KJRi0YtGkEWAQAla4PxKoWGqwAAAABJRU5ErkJggg=="), this.logo.width = 207, this.logo.height = 243, this.progress = new a.Graphics, this.progress.beginFill(16717864), this.progress.drawRect(0, 263, 207, 4), this.progress.endFill(), this.progress.scale.x = 0, this.addChild(this.logo), this.addChild(this.progress), this._tweeenProgress = new h.kX(this.progress, .5, {
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
                const ye = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACHUExURUdwTF3XDV3aCl7YDVzQF13ZDGDXC1X/AFXUAF7YDGDYDl7XDV3YDV7YDV3XDF3XDF7YDFzYDF3XDF3YDV3YDF7XDV3YDF7XDV3XDF7WDF3ZC13YDVjSC13YDV7YDF7XDV3XDV/fD13XDV3YDVzUDmDbCF3YDV3XDF3YDF7ZDF3XDF3YDV7YDQaFSaEAAAAsdFJOUwB1MfkLKS0DBvQ1qNKtaMrsY9znVda5w6F5RIYXXYyCzxDiviQdmPBPPo5wBc1wAAAAA81JREFUWMO9WemaqjAMrbIvIosLMOi466jv/3x3pm1AoKUty+0v/WhDSU5OTlOEhMMyV1m69eNQ08LY36bZyrTQ4DHPNvd3a9w32XyQ1efpzR2nZ0/b1m75FozlTt0ndhC/JUYc2Gq7jZKaR/dRbhQ6Qnph5NG+5vUkUti1eyjXaZuX0Z5gvDZaOeXgynphXzkxOPJmHYMqBHspfxg+zPcEW3E9mOkbYrsrB8xKTDbAtLMSTf2mM9e5nN/yNV3w3Y2GlIYsk0aRndEwph3osBcUna4KNl2K+AV3Mxa1uziqJdMR1vH2nMp4qysyKfvpF3ka9CGWgKz9YuKMPIv6UdaOrGagznD677fas9MCv+3zv0VuEE/6TWgQfvCGlAWShfsGFkm66UMM6yQJazlgYZ7UzGH10cQ5ePhEc4TflQ2tvLMmrvSE6Xf1MokRkOiNN/0MFws/2NCshBre8AKNMDBrJHYta+ZjGDZrXsbFa4PQaFte0mTu62FjG7a4gSSEUXGer273cmKxzqFi3rgWSelxxeu0BwvLMVZ+ePNXVbsFraJJ830lEl5/P7aqdo+gPpbNJ1tI4kUfT+ggg05XZl6ff9Mw7AFi/QyS8NIW1ZjwLQJpR03n2htqN2TwoYVLkUnS7qzGNSCs7kz9gb9mRyrKTclwCoKNnVQ3UuM85dg9QTrnHazsEXQ8lItmx6IHwe+aCworZwnZDOzuuGctXD4RRtuFHSLGx77ALl+AXDBeEAZHwQm90wx7BHY7olLgwCI8TefEtgnU1VtCZut4BtI4hu+MlH3AUWmPxIZDjitucESsnuVwPOmGPXXFiRO8kmaWIMNdsJt2EwANns+DW0mMZ1J0TTiPLgTEQuHGT5Br/GnJCOm/jUjX0ATpSOlLWPn0Ag2GrVA40pTuIiEXvn5vxE2P8wcloU7azLVGG8EvxGRCabOb6FeN9oSEXSB6QWkKat0amVoOpUlUTLOPnsdFWiSfJco/pCCzwDFGWf6FgiXtKnBt9FfSVSSxSE12JFVjJbHEovCPNjTJ/gURhV+SMrbYJrJV8VPGTia8ab2Z4Kgw2eFmsuMYHCAHd4XJyfnjAEm9PBtquHXkne6QPllbASTkCI2Q5/9q3SBznGaTya1Cu7HbY9M19KZrQZZNU08Rdbon0l7Q5l0rZYrpi9q8H43pmXxjegaNaVvGW2O30tF0zf/KZb+mBUVlXl1XSAVlqgsWNNmVEGpeYoXNS6yw7yXWH+hlr93UKXyii0IS9kmuNmkcs7PTNuqcMxcNHuT6eB3+vsAJ17LXx/8A6kQS8eozSXoAAAAASUVORK5CYII=",
                    fe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACcUExURUdwTP8gIP8hIf8gIP8hIf8hIf8fH/8jI/8gIP8AAP8hIf8iIv8hIf8XF/8qKv8fH/8iIv8hIf8gIP8hIf8hIf8hIf8gIP8fH/8hIf8gIP8hIf8gIP8iIv8hIf8gIP8gIP8hIf8gIP8hIf8fH/8hIf8gIP8gIP8hIf8fH/8iIv8hIf8jI/8eHv8fH/8iIv8gIP8hIf8fH/8fH/8hIT5bvnQAAAAzdFJOUwDS9GXk5ykk4gODLM4LBjF4qXXWrrn6GDbcwY5pxl+kVPnuCInrJ59BHkUzEXA8TplYEFU3kgwAAAO2SURBVFjDxZlpm6IwDIADDFgGYXAQFTzxvubk//+31baIHL1g2e0nH0lfQpomaQogHLaz8g+xFq2TZB1p8cFfOTa0Hm9+qKeVoYf+WyvqFKXMgaYN2fainwpGf6Fuk80sSiVGNNuoaWuYT7PX4dY4W2MXwB1bZ2Mbrp8emoaC1pPcCKPww6oKWB/hKDfIRBLrTR9z5saVJXU15g+xqSfDtbRMfiBQ5TLI1NYsMXeVue1gLxbeDzLHXolEX6lkcJSz2zGgE1753nCgS+Z7sgvt+dQeB453eEPqnRcV37xQjx8ylbEpd/Crtpl+qaWHLJ2XMtbircyS+3TWJLDMODqtyLNFs5C1ILNrvM7Sm+ub66xXdopH9tu2efDekj1Ydg0SHwZt0gLxjWkpnmEvD9w2YBdvwlEhwNg4TiZOu/zoJDiKPnuzgb/Cb5t5fYwxnj7CrLP7VUwqidjYA8zcoO/4TZ8FobOZaj0+tqel5rnwzycGvT9cDSs8LL58d8/wXHLv5a5eMT7gaGN6hV1TrBLGpHboCbhpOi6uX8HKOHmFpXmagEy5/Tpnpn/uscSxfiKLTB+/lB9P8N/7PKpprKn1ZBYXoJ9HuaiwklJkNpd4WIQrPyxzAgVyDzG5cHp4wsf9R8wzZJnM4wLE2SYeMizBJPO5xBY3H7PXVSfmkgVcYlrdJi6t2yBLFnHBxqnIgR+2ievIQi418oJ48TdIkiW48E08eclZu4KSd7IMl6zekgSKL5AiS3HhC1fWEPCcokSW4hK3COAed1OBaEaW4kLvLrUDvRpUuWQhl4RyHbC0OO1nZDEXXCwIiRoYSYPXiqZAsqZAqouHJBdPU3A3U4pM3S1W2CCWFJluEKUtLUWmW1ochNATTIZMg5AwbKICSoJMw6Yo0KMSSEjOAr0gNaEKRkTOUhM/maIaiICcJVNu+ke1CD75kf45BQtiAHjkvGBhl1iIOT0jn3glFrMoRJwPZpOfisJGZSwlRydOGUteolp4U/KcU3jTw5jqUYGSXc5RoeHhBpMRcA43TY9jlpbujrzjWHaALAYMW5ivbgYrTemXDpCdHXm7O6R31lborhECm7/Vuqk0qp2WzSay/rrz79pj3TX0umtB5k1TRa9zRU3TR5s3UNopjiZq8+aN6USlMZ3QxrT3P1rpt/HTrPn/I2+ydLQUdNQvy8d1hdSibNQvWGQvnDq6EoLuLrGgs2s3rHU3F4Vk2flXmxdoMSZ+XHcZG/sTaD3w9fE82N1eoO+CueT18R9RSEyQxPodRgAAAABJRU5ErkJggg==",
                    Se = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACcUExURUdwTAOr8AOr8AOr7wSr7wWr7wWt7QC//wCq4gSr8AOr7wSt8ASq7wSr8ASq7wCv7wSr8AKr8ASq7wOq7wSq8ACm8wan8gOq8AOr8AWq7wOr8AKr8QSr8ASr8ASr7wOs8Aaq8QSr8AOq7gSq8AOr8ACq7gOr8AOr8ASr7wWq7wSq8AOq7wSs7gOr7wSq7wen8AOr7wSr7wSs8gSr8NIVJa4AAAAzdFJOUwDS34T6MSwECfTYNXXu5hCuVrnLZxcpjs9jmVy9q6hEJ3pOeIkew5+kYGrFPoBwI5PqOwkKd94AAAPzSURBVFjDtVnblqowDC2IgAioeFe8DV5mdNSZ4///24GkCKhtgwx9cq2mMSQ7O2nKmHJZZi867DXdMwxP1/aHqGdarPJqbsLW7Wm1wk2zktaxfhMuffymbmvevylWf17eJ/ZRvxGWfrTLWTv1c6e9YDtdjYaxCns4Wk23gZfb9KclrG5P7ueM4DJ6FhhdAuMuMmlTvTDOnDjoiKQ6gywEY5I/Rloqv1SY0l6mZmsjtd5eCtvlWi28XqbA7qlEz1zSWdH8tnL4gbMcDQcesogcaivi/jhIjlhdjs52GWy2OeK7Qs3WAiUWnXLJ1FkoNH/ifqN8+jfw5Kd0d/AOsQwkNvVw7+s9yvrC0y9QN0L8Ht+l2CPi+SlTbMy37fvkvcUcfMxu5IdFlbKA2Bg/YBFQ7nSqKO5AEhqFHLCAJw1TzHgfP6Hje05w/hZrNsG6SR7NU/iKSHRi95Ojdk2MmwgEpjl7oF5ogsSxG0axHgVDUeoCAvwsfi7ICz5yrT1VOkek+Ru23fsfgcFdgRWvimoocgawmJ9++hyEm1Lk38LNV28wS30t4nWz4GUoXoGQ8xLEzHbc3zNeDKVg5rtrmYcTK5x9Dps/qFnk5X+wu85YTSN3MuiND9H+JGM5vRBJ5erKSRAQpkPnB4I7suKZXPHujoRL8mPPSlosdAXbJ9ubVJDuCQT9TdyhuBzolicD8fNC0PviWg+ubVkI6Ra5jdj5qvbEglJkogVkF3eQODwZcYeJxBxRPCPqvTryjM5g08Bmghi7D4/SebjYYpzk4Mk7j2czYEn294nMiTlUUNgBvziorABYOOw3Iw354q1w/6oMRCL2y1oyrso3wrzxU98KhgBgBuKEso8OXhIAb4MkM4iKoSVvURoPrtgjumKMsSYs7gpg46ta3JU0wC+DpxHhNlffYIpw2xMTZIUMQMlPdBo1pXezeFHwnjqtFAnRa1cDfRf+pWJOmyWJnsBVnOjLliYaKBJLSxZTWuzCN8q/at3LP7Vhsa5Dit6sYSG2WJeYuPtNoid0elO4wfuhqVScawpVbSyUfT536ar05ttYReOdrx8xG1Jukf3CZaypJBaCYrMwQJBebjh58xtZQDE4u4+5ai/jFdxoUzzsEi+Q+FXnOHzatwLqk4cLJB+QRPIaaSqTKHoa0Sgv6aT14pKejhXsKnpt51UY/mAQsnw1CKlvdMPMisOmgZBM6hqP1TfQq28EeR/G/vnQtLYxb32DaVZhlK6MTF3D/zhT0nGYsVQU5Wb2XEGir9wDy0n2wHIq+cDCansSYvU9YrHant3A6noeCjHstTxt8jiKHmPbrPKyzN7mcHJ+4z9oec7psCE9H/8H7cYwlvfLO08AAAAASUVORK5CYII=",
                    xe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAwUAAAFkBAMAAACDfIqcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURQ0NDf///////xEREREREf///////6uZoDAAAAAHdFJOU8whHsC+BBX9xfwkAAACKUlEQVR42u3RQQ2DUBRFwWcBBwULGGiDgc+CPZDg3wJpAA03IXMknKllH5TsaDV3ytZqMyHcWr0J4T4MGOgymEal+t0G31IqBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAgAEDBgwYMGDAgAEDBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgwYMGDAgAEDBgwYMGAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzE4M0G06hUj4GiMWCgv8FmQri1ZhPCtVr2QcmOdgK51GPO7vMFjAAAAABJRU5ErkJggg==";

                function ke(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }
                class Be extends a.Text {
                    constructor(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        super(t.toUpperCase(), function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? ke(Object(i), !0).forEach((function(e) {
                                    (0, o.Z)(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ke(Object(i)).forEach((function(e) {
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
                class Ce extends(J(a.Sprite)) {
                    constructor(t) {
                        var e;
                        super(), this.texture = null !== (e = this.game.loader.getAsset(t)) && void 0 !== e ? e : a.Texture.EMPTY
                    }
                }

                function Pe(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }
                class Te extends a.Text {
                    constructor(t) {
                        super(t, function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? Pe(Object(i), !0).forEach((function(e) {
                                    (0, o.Z)(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Pe(Object(i)).forEach((function(e) {
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

                function Ee(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }
                class Ze extends a.Text {
                    constructor(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        super(t.toUpperCase(), function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? Ee(Object(i), !0).forEach((function(e) {
                                    (0, o.Z)(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Ee(Object(i)).forEach((function(e) {
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
                const Oe = class extends V {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "PopupFreeRound"), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "icon", void 0), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "message", void 0), (0, o.Z)(this, "actionContinue", void 0), (0, o.Z)(this, "resolver", null), this.overlay = new at, this.content = new a.Container, this.icon = new Ce(ye), this.icon.anchor.x = .5, this.title = new Ze(this.game.i18n.t("PopupFreeRoundStartTitle")), this.title.anchor.x = .5, this.message = new Te("", {
                            wordWrap: !0,
                            wordWrapWidth: 600
                        }), this.message.anchor.x = .5, this.actionContinue = new Be(this.game.i18n.t("PopupActionContinue"), {
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
                const Re = class extends V {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "PopupMaxLimit"), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "message", void 0), (0, o.Z)(this, "actionContinue", void 0), (0, o.Z)(this, "resolver", null), this.overlay = new at(.7), this.content = new a.Container, this.background = new a.Sprite(this.game.loader.getAsset(xe)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new Ze(this.game.i18n.t("PopupMaxLimitTitle")), this.title.anchor.x = .5, this.message = new Te(this.game.i18n.t("PopupMaxLimitMessage"), {
                            wordWrap: !0
                        }), this.message.anchor.x = .5, this.actionContinue = new Be(this.game.i18n.t("PopupActionReload"), {
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
                const Fe = class extends V {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "PopupNetworkError"), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "icon", void 0), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "message", void 0), (0, o.Z)(this, "actionReload", void 0), (0, o.Z)(this, "_resolver", null), this.overlay = this.addChild(new at), this.content = this.addChild(new a.Container), this.icon = new Ce(fe), this.icon.anchor.x = .5, this.title = new Ze(this.game.i18n.t("PopupNetworkErrorTitle"), {
                            align: "center"
                        }), this.title.anchor.x = .5, this.message = new Te(this.game.i18n.t("PopupNetworkErrorMessage"), {
                            fontSize: 36
                        }), this.message.anchor.x = .5, this.actionReload = new Be(this.game.i18n.t("PopupActionReload"), {
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
                class Me extends V {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "PopupQuickSpin"), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "message", void 0), (0, o.Z)(this, "actionEnable", void 0), (0, o.Z)(this, "actionClose", void 0), (0, o.Z)(this, "escKey", void 0), (0, o.Z)(this, "enterKey", void 0), (0, o.Z)(this, "resolver", null), this.overlay = new at(.7), this.content = new a.Container, this.background = new a.Sprite(this.game.loader.getAsset(xe)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new Ze(this.game.i18n.t("PopupQuickSpinTitle")), this.title.anchor.x = .5, this.message = new Te(this.game.i18n.t("PopupQuickSpinMessage"), {
                            fontSize: 35,
                            wordWrap: !0,
                            wordWrapWidth: 600
                        }), this.message.anchor.x = .5, this.actionEnable = new Be(this.game.i18n.t("PopupActionEnable"), {
                            fill: 10066329
                        }), this.actionEnable.anchor.x = .5, this.game.interaction.out(this.actionEnable, (() => this.actionEnable.style.fill = 10066329)), this.game.interaction.hover(this.actionEnable, (() => this.actionEnable.style.fill = 16777215)), this.game.interaction.click(this.actionEnable, (() => this.hide(!0))), this.actionClose = new Be(this.game.i18n.t("PopupActionClose"), {
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
                const Ie = class extends V {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "PopupRestore"), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "icon", void 0), (0, o.Z)(this, "message", void 0), (0, o.Z)(this, "actionContinue", void 0), (0, o.Z)(this, "resolver", null), this.overlay = this.addChild(new at), this.content = this.addChild(new a.Container), this.icon = new Ce(ye), this.icon.anchor.x = .5, this.message = new Te(this.game.i18n.t("PopupRestoreMessage"), {
                            wordWrap: !0,
                            wordWrapWidth: 320
                        }), this.message.anchor.x = .5, this.actionContinue = new Be(this.game.i18n.t("PopupActionContinue"), {
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
                const We = class extends V {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "PopupRiskNBuy"), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "message", void 0), (0, o.Z)(this, "actionYes", void 0), (0, o.Z)(this, "actionNo", void 0), (0, o.Z)(this, "escKey", void 0), (0, o.Z)(this, "enterKey", void 0), (0, o.Z)(this, "resolver", null), this.overlay = new at(.7), this.content = new a.Container, this.background = new a.Sprite(this.game.loader.getAsset(xe)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new Ze("RISK FEATURE"), this.title.anchor.x = .5, this.message = new Te("", {
                            wordWrap: !0,
                            whiteSpace: "normal",
                            breakWords: !0
                        }), this.message.anchor.x = .5, this.actionYes = new Be(this.game.i18n.t("PopupActionYes"), {
                            fill: 16777215
                        }), this.actionYes.anchor.x = .5, this.game.interaction.out(this.actionYes, (() => this.actionYes.style.fill = 16777215)), this.game.interaction.hover(this.actionYes, (() => this.actionYes.style.fill = 10066329)), this.game.interaction.click(this.actionYes, (() => {
                            this.hide(!0)
                        })), this.actionNo = new Be(this.game.i18n.t("PopupActionNo"), {
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
                const De = class extends V {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "PopupSound"), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "icon", void 0), (0, o.Z)(this, "message", void 0), (0, o.Z)(this, "actionContainer", void 0), (0, o.Z)(this, "actionYes", void 0), (0, o.Z)(this, "actionNo", void 0), (0, o.Z)(this, "resolver", null), this.overlay = new at, this.content = new a.Container, this.icon = new Ce(Se), this.icon.anchor.x = .5, this.message = new Te(this.game.i18n.t("PopupSoundMessage"), {
                            wordWrap: !0
                        }), this.message.anchor.x = .5, this.actionContainer = new a.Container, this.actionYes = new Be(this.game.i18n.t("PopupActionYes"), {
                            fill: 16777215
                        }), this.game.interaction.out(this.actionYes, (() => this.actionYes.style.fill = 16777215)), this.game.interaction.hover(this.actionYes, (() => this.actionYes.style.fill = 10066329)), this.game.interaction.click(this.actionYes, (() => this.hide(!0))), this.actionNo = new Be(this.game.i18n.t("PopupActionNo"), {
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
                const Le = class extends V {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "PopupSpendingBudget"), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "message", void 0), (0, o.Z)(this, "actionContinue", void 0), (0, o.Z)(this, "resolver", null), this.overlay = new at(.7), this.content = new a.Container, this.background = new a.Sprite(this.game.loader.getAsset(xe)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new Ze(this.game.i18n.t("PopupSpendingBudgetTitle")), this.title.anchor.x = .5, this.message = new Te(this.game.i18n.t("PopupSpendingBudgetMessage"), {
                            wordWrap: !0
                        }), this.message.anchor.x = .5, this.actionContinue = new Be(this.game.i18n.t("PopupActionContinue"), {
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
                const Ne = class extends V {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "PopupUnexpectedError"), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "message", void 0), (0, o.Z)(this, "actionContinue", void 0), (0, o.Z)(this, "_resolver", null), this.overlay = new at(.7), this.content = new a.Container, this.background = new a.Sprite(this.game.loader.getAsset(xe)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new Ze(this.game.i18n.t("PopupUnexpectedErrorTitle")), this.title.anchor.x = .5, this.message = new Te(this.game.i18n.t("PopupUnexpectedErrorMessage")), this.message.anchor.x = .5, this.actionContinue = new Be(this.game.i18n.t("PopupActionReload"), {
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
                class _e extends V {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "PopupWilds"), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "message", void 0), (0, o.Z)(this, "actionEnable", void 0), (0, o.Z)(this, "actionClose", void 0), (0, o.Z)(this, "escKey", void 0), (0, o.Z)(this, "spaceKey", void 0), (0, o.Z)(this, "resolver", null), this.overlay = new at(.7), this.content = new a.Container, this.background = new a.Sprite(this.game.loader.getAsset(xe)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new Ze(this.game.i18n.t("PopupWildsTitle"), {
                            fontSize: 40,
                            wordWrap: !0,
                            wordWrapWidth: 600,
                            breakWords: "ja" === this.game.i18n.language || "cn" === this.game.i18n.language,
                            align: "center"
                        }), this.title.anchor.x = .5, this.message = new Te(this.game.i18n.t("PopupWildsMessage"), {
                            fontSize: 35,
                            wordWrap: !0,
                            wordWrapWidth: 600
                        }), this.message.anchor.x = .5, this.actionEnable = new Be(this.game.i18n.t("PopupActionYes"), {
                            fill: 10066329
                        }), this.actionEnable.anchor.x = .5, this.game.interaction.out(this.actionEnable, (() => this.actionEnable.style.fill = 10066329)), this.game.interaction.hover(this.actionEnable, (() => this.actionEnable.style.fill = 16777215)), this.game.interaction.click(this.actionEnable, (() => this.hide(!0))), this.actionClose = new Be(this.game.i18n.t("PopupActionNo"), {
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
                const Ue = class extends V {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "PopupZeroBalance"), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "message", void 0), (0, o.Z)(this, "actionContinue", void 0), (0, o.Z)(this, "resolver", null), this.overlay = new at(.7), this.content = new a.Container, this.background = new a.Sprite(this.game.loader.getAsset(xe)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new Ze(this.game.i18n.t("PopupZeroBalanceTitle")), this.title.anchor.x = .5, this.message = new Te(this.game.i18n.t("PopupZeroBalanceMessage"), {
                            wordWrap: !0
                        }), this.message.anchor.x = .5, this.actionContinue = new Be(this.game.i18n.t("PopupActionContinue"), {
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

                function je(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function ze(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? je(Object(i), !0).forEach((function(e) {
                            (0, o.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : je(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                const Ve = [{
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
                var Ge = {
                        background_normal: .4,
                        background_free: .2,
                        big_win: 1,
                        giant_win: 1,
                        win_normal_1: 1,
                        win_normal_2: 1,
                        win_normal_3: 1,
                        spin_start: .5,
                        spin_fast: .5,
                        click_normal: .1,
                        wheel_stop: .7
                    },
                    He = {
                        get: t => Ge[t],
                        set(t, e) {}
                    };
                const Qe = [{
                    url: "assets/audio/backgroundCommon.mp3",
                    name: "backgroundNormal",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "background",
                            volume: He.get("background_normal"),
                            loop: !0
                        }
                    }
                }, {
                    url: "assets/audio/backgroundBonus.mp3",
                    name: "backgroundBonus",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "background",
                            volume: He.get("background_free"),
                            loop: !0
                        }
                    }
                }, {
                    url: "assets/audio/bonusStart.mp3",
                    name: "bonusStart",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "background",
                            volume: He.get("background_normal"),
                            loop: !0
                        }
                    }
                }, {
                    url: "assets/audio/bonusEnd.mp3",
                    name: "bonusEnd",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "background",
                            volume: He.get("background_normal"),
                            loop: !0
                        }
                    }
                }, {
                    url: "assets/audio/clickNormal.mp3",
                    name: "clickNormal",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: He.get("click_normal"),
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
                            volume: He.get("spin_fast"),
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
                            volume: He.get("spin_start"),
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
                            volume: He.get("wheel_stop"),
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
                            volume: He.get("giant_win"),
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
                            volume: He.get("big_win"),
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
                            volume: He.get("win_normal_1"),
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
                            volume: He.get("win_normal_2"),
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
                            volume: He.get("win_normal_3"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/win_bonus_1.mp3",
                    name: "win_bonus_1",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: He.get("win_normal_1"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/win_bonus_2.mp3",
                    name: "win_bonus_2",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: He.get("win_normal_2"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/win_bonus_3.mp3",
                    name: "win_bonus_3",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: He.get("win_normal_3"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/bonusTotalWin.mp3",
                    name: "bonusTotalWin",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: He.get("win_normal_3"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/bonusWin.mp3",
                    name: "bonusWin",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: He.get("win_normal_3"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/bonusScaleDown.mp3",
                    name: "bonusScaleDown",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: He.get("win_normal_3"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/bonusScaleUp.mp3",
                    name: "bonusScaleUp",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: He.get("win_normal_3"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/stickyTransform.mp3",
                    name: "stickyTransform",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: .5,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/bonusWildTransform.mp3",
                    name: "bonusWildTransform",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: He.get("win_normal_3"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/extraBonus.mp3",
                    name: "extraBonus",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: He.get("win_normal_3"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/superBonus.mp3",
                    name: "superBonus",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: He.get("win_normal_3"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/bonusSymbol.mp3",
                    name: "bonusSymbol",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: .1,
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
                }];
                var Ye = [...Ve, {
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
                    url: "assets/images/background/bgpn.jpg",
                    name: "bgpn",
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
                }, {
                    url: "assets/images/effects/logo/skeleton.json",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/queen/skeleton.json",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/common/panel.png",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }];
                const Xe = [...Qe, {
                    url: "assets/images/background/cardsBack.png",
                    name: "field",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/labels/textSuperBonusGame.png",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/labels/textExtraBonusWin.png",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/labels/textTotalBonusWin.png",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/labels/textBigWin.png",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/labels/textGiantWin.png",
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
                    url: "assets/images/effects/bigGiantWin/skeleton.json",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/spin/skeleton.json",
                    name: "effectSpin",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/symbols/sym/skeleton.json",
                    name: "symbolAnimation",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/bottle/skeleton.json",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/riskBuyBtn/skeleton.json",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/coinsCollect/skeleton.json",
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
                    url: "assets/images/controls/desktop/desktop.json",
                    name: "controls",
                    metadata: {
                        platform: ["desktop"]
                    }
                }, {
                    url: "assets/images/symbols/static/texture.json",
                    name: "symbols_static",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/riskFeature/texture.json",
                    name: "risk",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }];
                var Ke = 90;
                const qe = {
                    name: "trump_card_queen",
                    application: {
                        view: "game",
                        width: 1920,
                        height: 1080
                    },
                    colors: {
                        primary: 16771346,
                        primaryHover: 16774819,
                        secondary: 5381207,
                        secondaryHover: 8799116
                    },
                    lines: {
                        points: [{
                            line: 1,
                            position: [{
                                x: -90,
                                y: Ke
                            }, {
                                x: 1540,
                                y: Ke
                            }]
                        }, {
                            line: 3,
                            position: [{
                                x: -90,
                                y: 160
                            }, {
                                x: 1540,
                                y: 160
                            }]
                        }, {
                            line: 5,
                            position: [{
                                x: -90,
                                y: 230
                            }, {
                                x: 1540,
                                y: 230
                            }]
                        }, {
                            line: 8,
                            position: [{
                                x: -90,
                                y: 300
                            }, {
                                x: 1540,
                                y: 300
                            }]
                        }, {
                            line: 0,
                            position: [{
                                x: -90,
                                y: 370
                            }, {
                                x: 1540,
                                y: 370
                            }]
                        }, {
                            line: 7,
                            position: [{
                                x: -90,
                                y: 440
                            }, {
                                x: 1540,
                                y: 440
                            }]
                        }, {
                            line: 9,
                            position: [{
                                x: -90,
                                y: 510
                            }, {
                                x: 1540,
                                y: 510
                            }]
                        }, {
                            line: 6,
                            position: [{
                                x: -90,
                                y: 580
                            }, {
                                x: 1540,
                                y: 580
                            }]
                        }, {
                            line: 4,
                            position: [{
                                x: -90,
                                y: 650
                            }, {
                                x: 1540,
                                y: 650
                            }]
                        }, {
                            line: 2,
                            position: [{
                                x: -90,
                                y: 720
                            }, {
                                x: 1540,
                                y: 720
                            }]
                        }]
                    },
                    wheel: {
                        deltaStop: 80,
                        durationSpin: .08,
                        durationDelta: .12,
                        durationQuickDelta: .16,
                        durationStop: 400,
                        durationQuickStop: 80
                    },
                    symbol: {
                        x: 210,
                        y: 290,
                        width: 210,
                        height: 290
                    },
                    slot: {
                        size: [6, 3],
                        symbolsPositions: [
                            [
                                [0, -290],
                                [0, 0],
                                [0, 290],
                                [0, 580],
                                [0, 870]
                            ],
                            [
                                [210, -290],
                                [210, 0],
                                [210, 290],
                                [210, 580],
                                [210, 870]
                            ],
                            [
                                [420, -290],
                                [420, 0],
                                [420, 290],
                                [420, 580],
                                [420, 870]
                            ],
                            [
                                [630, -290],
                                [630, 0],
                                [630, 290],
                                [630, 580],
                                [630, 870]
                            ],
                            [
                                [840, -290],
                                [840, 0],
                                [840, 290],
                                [840, 580],
                                [840, 870]
                            ],
                            [
                                [1050, -290],
                                [1050, 0],
                                [1050, 290],
                                [1050, 580],
                                [1050, 870]
                            ]
                        ],
                        layout: {
                            blur: [{
                                textureAtlas: "symbols_static",
                                assetName: "bonusBlur"
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "wildBlur"
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "p1Blur"
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "p2Blur"
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "p3Blur"
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "p4Blur"
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "heartsBlur"
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "clubsBlur"
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "spadesBlur"
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "diamondsBlur"
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "empty1Blur"
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "empty2Blur"
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "empty3Blur"
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "empty4Blur"
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "wildStickyBlur"
                            }],
                            default: [{
                                textureAtlas: "symbols_static",
                                assetName: "bonus",
                                animation: {
                                    assetName: "symbolAnimation",
                                    effectName: {
                                        normal: "win",
                                        spin: "spin",
                                        idle: "idle",
                                        winBonus: "winBonus"
                                    },
                                    skin: "bonus"
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "wild",
                                animation: {
                                    assetName: "symbolAnimation",
                                    effectName: {
                                        normal: "win",
                                        spin: "spin",
                                        idle: "idle",
                                        stickyIdle: "stickyIdle",
                                        stickyTransform: "stickyTransform"
                                    },
                                    skin: "wild"
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "p1",
                                animation: {
                                    assetName: "symbolAnimation",
                                    effectName: {
                                        normal: "win",
                                        spin: "spin",
                                        idle: "idle"
                                    },
                                    skin: "p1"
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "p2",
                                animation: {
                                    assetName: "symbolAnimation",
                                    effectName: {
                                        normal: "win",
                                        spin: "spin",
                                        idle: "idle"
                                    },
                                    skin: "p2"
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "p3",
                                animation: {
                                    assetName: "symbolAnimation",
                                    effectName: {
                                        normal: "win",
                                        spin: "spin",
                                        idle: "idle"
                                    },
                                    skin: "p3"
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "p4",
                                animation: {
                                    assetName: "symbolAnimation",
                                    effectName: {
                                        normal: "win",
                                        spin: "spin",
                                        idle: "idle"
                                    },
                                    skin: "p4"
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "hearts",
                                animation: {
                                    assetName: "symbolAnimation",
                                    effectName: {
                                        normal: "win",
                                        spin: "spin",
                                        idle: "idle"
                                    },
                                    skin: "hearts"
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "clubs",
                                animation: {
                                    assetName: "symbolAnimation",
                                    effectName: {
                                        normal: "win",
                                        spin: "spin",
                                        idle: "idle"
                                    },
                                    skin: "clubs"
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "spades",
                                animation: {
                                    assetName: "symbolAnimation",
                                    effectName: {
                                        normal: "win",
                                        spin: "spin",
                                        idle: "idle"
                                    },
                                    skin: "spades"
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "diamonds",
                                animation: {
                                    assetName: "symbolAnimation",
                                    effectName: {
                                        normal: "win",
                                        spin: "spin",
                                        idle: "idle"
                                    },
                                    skin: "diamonds"
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "empty1"
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "empty2"
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "empty3"
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "empty4"
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "wildSticky",
                                animation: {
                                    assetName: "symbolAnimation",
                                    effectName: {
                                        normal: "win",
                                        spin: "wheelStop",
                                        idle: "idle"
                                    },
                                    skin: "wild"
                                }
                            }]
                        },
                        width: 1260,
                        height: 940
                    },
                    winFeature: {
                        bigWinMultiplier: 50,
                        giantWinMultiplier: 100
                    }
                };
                var Je = {
                        reward_flush: 1500,
                        reward_sticky: 1e3,
                        reward_scatter: 3e3,
                        before_spin_auto: 200,
                        afterFreeSpins: 700,
                        beforeFreeSpins: 300,
                        inFreeSpins: 200
                    },
                    $e = {
                        get: t => Je[t],
                        set(t, e) {}
                    };
                const ti = {
                        init() {
                            function t(t) {
                                var e = l()(t, "feature", ""),
                                    i = l()(t, "action", ""),
                                    s = l()(t, "nextAction", "spin"),
                                    o = l()(t, "freespins.left", 3),
                                    n = l()(t, "overlayWilds", []);
                                K.store.set("bonus:left", "bonus" === s ? 1 : o), K.store.set("bonus:extraBonus", 18 === n.length), K.store.set("bonus:isStart", "bonus" === s && "bonus" !== i), K.store.set("bonus:isEnd", "spin" === s && ("bonus" === i || "freespin" === i)), K.store.set("bonus:nextLevel", "freespin" === s && "bonus" === i && 18 !== n.length), K.store.set("bonus:isBonus", "bonus" === e), K.store.set("bonus:overlayWilds", n), 0 !== n.length && K.store.set("bonus:extraSpins", n.some((t => t.isNew)) && 18 !== n.length)
                            }
                            K.store.set("bonus:win", 0), K.store.set("bonus:coins", 0), K.store.set("bonus:count", 0), K.store.set("bonus:left", -1), K.store.set("bonus:played", -1), K.store.set("bonus:isStart", !1), K.store.set("bonus:isEnd", !1), K.store.set("bonus:isBonus", !1), K.store.set("bonus:nextLevel", !1), K.store.set("bonus:overlayWilds", []), K.store.set("bonus:extraSpins", !1), K.server.on("response:init", t), K.server.on("response:spin", t), K.server.on("response:buyin", t), K.server.on("response:risk", t)
                        }
                    },
                    ei = {
                        init() {
                            function t(t) {
                                var e = l()(t, "freespins.win", 0),
                                    i = l()(t, "feature", "");
                                K.store.set("free:type", l()(t, "freespins.type", 2));
                                var s = K.store.get("free:left", 0),
                                    o = l()(t, "freespins.left", -1),
                                    n = l()(t, "freespins.played", -1);
                                K.store.set("free:win", e), K.store.set("free:winExtra", l()(t, "freespins.extraBonus", 0)), K.store.set("free:coins", l()(t, "freespins.coins", 0)), K.store.set("free:left", o), K.store.set("free:played", n), K.store.set("free:count", o + n), K.store.set("free:isStart", 0 === n), K.store.set("free:isEnd", 0 === o), K.store.set("free:isFree", "freespin" === i), n > 0 && (K.store.set("free:winAdditional", o >= s), K.store.set("free:winAdditionalCount", l()(t, "scatters.freespins", 0)))
                            }
                            K.store.set("free:win", 0), K.store.set("free:winExtra", 0), K.store.set("free:coins", 0), K.store.set("free:count", 0), K.store.set("free:left", -1), K.store.set("free:played", -1), K.store.set("free:isStart", !1), K.store.set("free:isEnd", !1), K.store.set("free:isFree", !1), K.store.set("free:winAdditional", !1), K.store.set("free:type", 2), K.server.on("response:init", t), K.server.on("response:spin", t), K.server.on("response:buyin", t), K.server.on("response:risk", t)
                        }
                    };
                var ii;
                ! function(t) {
                    t.Basic = "basic", t.Auto = "auto", t.Respin = "respin", t.Freespin = "freespin", t.Bonus = "bonus"
                }(ii || (ii = {}));
                var si = new class {
                        constructor() {
                            (0, o.Z)(this, "currentFeature", void 0)
                        }
                        set(t) {
                            this.currentFeature = t
                        }
                        isBasic() {
                            return this.currentFeature.includes(ii.Basic)
                        }
                        isAuto() {
                            return this.currentFeature === ii.Auto
                        }
                        isRespin() {
                            return this.currentFeature === ii.Respin
                        }
                        isFreespin() {
                            return this.currentFeature === ii.Freespin
                        }
                        isBonus() {
                            return this.currentFeature === ii.Bonus
                        }
                    },
                    oi = [
                        [2, 5, 4],
                        [9, 8, 7],
                        [2, 5, 8],
                        [6, 0, 5],
                        [6, 5, 7],
                        [7, 0, 6]
                    ],
                    ni = [
                        [9, 8, 7, 0, 6],
                        [8, 7, 6, 3, 4],
                        [1, 3, 5, 8, 1],
                        [3, 7, 6, 0, 5],
                        [7, 0, 4, 9, 8],
                        [4, 8, 9, 5, 1]
                    ];
                const ai = {
                        init() {
                            function t(t) {
                                var e = l()(t, "buyin", !1),
                                    i = l()(t, "risk", !1);
                                K.store.set("isRiskNBuy", e || i), (i || e) && (K.store.set("risk", i), K.store.set("buy", e))
                            }

                            function e(e) {
                                var i = l()(e, "win", 0),
                                    s = l()(e, "scatters", !1),
                                    o = l()(e, "overlayWilds", []),
                                    n = l()(e, "overlayWilds", []),
                                    a = [0, 0, 0, 0, 0, 0],
                                    h = [!1, !1, !1, !1, !1, !1],
                                    r = l()(e, "preSpin", !1);
                                if (K.store.set("reward:isWildReel", h), r) {
                                    var d = r.buyin || !1;
                                    (r.risk || !1 || d) && K.store.set("reward:preRisk", !0)
                                }
                                K.store.set("reward:win", i), K.store.set("reward:lines", l()(e, "lines", [])), K.store.set("reward:reels", l()(e, "reels", e.error ? oi : [])), K.store.set("reward:nReels", l()(e, "nReels", e.error ? ni : [])), K.store.set("reward:fsReels", l()(e, "fsReels", [])), K.store.set("reward:preReels", l()(e, "preSpin.reels", [])), K.store.set("reward:prenReels", l()(e, "preSpin.nReels", [])), K.store.set("reward:preWin", l()(e, "preSpin.win", 0)), K.store.set("reward:preSpin", l()(e, "preSpin", [])), K.store.set("reward:scatters", s), K.store.set("reward:isWin", i > 0 || s || o.length > 0), K.store.set("reward:numberWinSymbol", l()(e, "winSyms", 0));
                                var c = l()(e, "feature", ii.Basic);
                                K.store.set("reward:feature", c), K.store.set("reward:overlayWilds", n), n.length > 0 && (n.forEach((t => {
                                    a[t.pos[0]] += 1
                                })), a.forEach(((t, e) => {
                                    h[e] = 3 === t
                                })), K.store.set("reward:isWildReel", h)), t(e)
                            }

                            function i(e) {
                                var i = l()(e, "win", 0);
                                K.store.set("reward:win", i), K.store.set("reward:lines", l()(e, "lines", [])), K.store.set("reward:fsReels", l()(e, "fsReels", [])), K.store.set("reward:reels", l()(e, "reels", e.error ? oi : [])), K.store.set("reward:nReels", l()(e, "nReels", e.error ? ni : []));
                                var s = l()(e, "feature", ii.Basic);
                                "freespin" === s && si.set("freespin"), K.store.set("reward:feature", s), K.store.set("reward:overlayWilds", l()(e, "overlayWilds", [])), t(e)
                            }
                            K.store.set("reward:win", 0), K.store.set("reward:isWin", !1), K.store.set("reward:lines", []), K.store.set("reward:reels", []), K.store.set("reward:nReels", []), K.store.set("reward:fsReels", []), K.store.set("reward:preReels", []), K.store.set("reward:preWin", 0), K.store.set("reward:preRisk", !1), K.store.set("reward:prenReels", []), K.store.set("reward:preSpin", []), K.store.set("reward:scatters", !1), K.store.set("reward:numberWinSymbol", 0), K.store.set("isRiskNBuy", !1), K.store.set("risk", !1), K.store.set("buy", !1), K.store.set("reward:feature", ""), K.store.set("reward:overlayWilds", []), K.store.set("reward:extraBonus", !1), K.store.set("reward:isWildReel", [!1, !1, !1, !1, !1, !1]), K.server.on("response:init", e), K.server.on("response:spin", e), K.server.on("response:buyin", i), K.server.on("response:risk", i)
                        }
                    },
                    hi = {
                        init() {
                            K.store.set("spin:isSpin", !1), K.store.set("spin:isFast", !1), K.action.on("spin:start", (function() {
                                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                K.store.get("spin:isSpin") ? t && !K.store.get("spin:isFast") && (K.store.set("spin:isFast", !0), K.action.emit("spin:fast")) : (K.store.set("spin:isSpin", !0), K.state.goTo("spin"))
                            })), K.action.on("state:stop_exit", (function() {
                                K.store.set("spin:isSpin", !1), K.store.set("spin:isFast", !1)
                            }))
                        }
                    },
                    ri = {
                        init() {
                            hi.init(), ai.init(), ei.init(), ti.init()
                        }
                    };
                class li extends q.$u {
                    constructor() {
                        super(...arguments), (0, o.Z)(this, "backgroundNormal", void 0), (0, o.Z)(this, "backgroundBonus", void 0), (0, o.Z)(this, "bonusStart", void 0), (0, o.Z)(this, "bonusEnd", void 0), (0, o.Z)(this, "bigWin", void 0), (0, o.Z)(this, "clickNormal", void 0), (0, o.Z)(this, "currentWinSound", void 0), (0, o.Z)(this, "giantWin", void 0), (0, o.Z)(this, "spinFast", void 0), (0, o.Z)(this, "spinStart", void 0), (0, o.Z)(this, "wheelStop", void 0), (0, o.Z)(this, "winNormal1", void 0), (0, o.Z)(this, "winNormal2", void 0), (0, o.Z)(this, "winNormal3", void 0), (0, o.Z)(this, "winBonus1", void 0), (0, o.Z)(this, "winBonus2", void 0), (0, o.Z)(this, "winBonus3", void 0), (0, o.Z)(this, "bonusScaleDown", void 0), (0, o.Z)(this, "bonusScaleUp", void 0), (0, o.Z)(this, "bonusWildTransform", void 0), (0, o.Z)(this, "extraBonus", void 0), (0, o.Z)(this, "stickyTransform", void 0), (0, o.Z)(this, "bonusWin", void 0), (0, o.Z)(this, "superBonus", void 0), (0, o.Z)(this, "bonusTotalWin", void 0), (0, o.Z)(this, "bonusSymbol", void 0), (0, o.Z)(this, "coinz", void 0)
                    }
                    init(t) {
                        this.backgroundNormal = this.get("backgroundNormal"), this.backgroundBonus = this.get("backgroundBonus"), this.bonusStart = this.get("bonusStart"), this.bonusEnd = this.get("bonusEnd"), this.winNormal1 = this.get("win_normal_1"), this.winNormal2 = this.get("win_normal_2"), this.winNormal3 = this.get("win_normal_3"), this.winBonus1 = this.get("win_bonus_1"), this.winBonus2 = this.get("win_bonus_2"), this.winBonus3 = this.get("win_bonus_3"), this.bigWin = this.get("bigWin"), this.giantWin = this.get("giantWin"), this.spinStart = this.get("spinStart"), this.spinFast = this.get("spinFast"), this.clickNormal = this.get("clickNormal"), this.wheelStop = this.get("wheelStop"), this.bonusScaleDown = this.get("bonusScaleDown"), this.bonusScaleUp = this.get("bonusScaleUp"), this.bonusWildTransform = this.get("bonusWildTransform"), this.extraBonus = this.get("extraBonus"), this.stickyTransform = this.get("stickyTransform"), this.bonusWin = this.get("bonusWin"), this.superBonus = this.get("superBonus"), this.bonusTotalWin = this.get("bonusTotalWin"), this.bonusSymbol = this.get("bonusSymbol"), this.coinz = this.get("coinz"), super.init(t), this.currentWinSound = null, this._setupEvents()
                    }
                    _setupEvents() {
                        K.action.on("sound:win", (t => {
                            var e = si.isFreespin() || si.isBonus();
                            this.currentWinSound = this["".concat(e ? "winBonus" : "winNormal").concat(t)], this.currentWinSound.play()
                        })), K.action.on("sound:bigWin", (() => {
                            this.bigWin.play()
                        })), K.action.on("sound:giantWin", (() => {
                            this.bigWin.stop(), this.giantWin.play()
                        })), K.action.on("state:spin_enter", this._onSpinEnter, this), K.action.on("state:finish_enter", this._onFinishEnter, this), K.action.on("sound:spinFast", this._onFastSpin, this), K.action.on("wheel:stop_down", this._onWheelStop, this), K.action.on("sound:click", this.click, this), K.action.on("sound:bonus_start", this._onBonusStart, this), K.action.on("sound:bonus_stop", this._onBonusStop, this), K.action.on("bonus:select_start", this._onSelectBonusStart, this), K.action.on("bonus:select_stop", this._onSelectBonusStop, this), K.action.on("sound:bonusScaleDown", (() => {
                            this.bonusScaleDown.play()
                        })), K.action.on("sound:bonusScaleUp", (() => {
                            this.bonusScaleUp.play()
                        })), K.action.on("sound:bonusWildTransform", (() => {
                            this.bonusWildTransform.play()
                        })), K.action.on("sound:extraBonus", (() => {
                            this.extraBonus.play()
                        })), K.action.on("sound:stickyTransform", (() => {
                            this.stickyTransform.play()
                        })), K.action.on("sound:bonusWin", (() => {
                            this.bonusWin.play()
                        })), K.action.on("sound:superBonus", (() => {
                            this.superBonus.play()
                        })), K.action.on("sound:bonusTotalWin", (() => {
                            this.bonusTotalWin.play()
                        })), K.action.on("sound:bonusSymbol", (() => {
                            this.bonusSymbol.play()
                        })), K.action.on("sound:coinz", (() => {
                            this.coinz.play()
                        }))
                    }
                    stopBigWin() {
                        this.bigWin.stop(), this.giantWin.stop()
                    }
                    stopBonusTotalWin() {
                        this.bonusTotalWin.stop()
                    }
                    _onSpinEnter() {
                        this.currentWinSound && (this.currentWinSound.stop(), this.currentWinSound = null);
                        var t = si.isFreespin() || si.isBonus(),
                            e = K.autoPlay.enabled;
                        t || e || this.spinStart.play()
                    }
                    _onWheelStop() {
                        K.store.get("spin:isFast", !1) || this.wheelStop.play()
                    }
                    click() {
                        this.clickNormal.play()
                    }
                    _onFastSpin() {
                        this.spinFast.playing() || this.spinFast.play()
                    }
                    _onBonusStart() {
                        this.currentWinSound && (this.currentWinSound.stop(), this.currentWinSound = null), this.backgroundNormal.stop(), this.bonusStart.once("end", (() => {
                            this.backgroundBonus.fade(1), this.bonusStart.stop()
                        })), this.bonusStart.play()
                    }
                    _onBonusStop() {
                        this.currentWinSound && (this.currentWinSound.stop(), this.currentWinSound = null), this.backgroundBonus.stop(), this.bonusEnd.once("end", (() => {
                            this.backgroundNormal.fade(1), this.bonusEnd.stop()
                        })), this.bonusEnd.play()
                    }
                    _onSelectBonusStart() {
                        this.bonusStart.stop(), this.backgroundBonus.playing() || this.backgroundBonus.fade(1)
                    }
                    _onSelectBonusStop() {
                        this.bonusEnd.stop(), this.backgroundNormal.playing() || this.backgroundNormal.fade(2)
                    }
                    _onFinishEnter() {
                        this.currentWinSound && (this.currentWinSound.stop(), this.currentWinSound = null)
                    }
                }
                class di extends $ {
                    init() {}
                    enter() {
                        this.game.action.emit("state:finish_enter"), this.game.applyNetPosition()
                    }
                    exit() {
                        this.game.action.emit("state:finish_exit")
                    }
                }
                class ci extends di {}
                class ui extends $ {
                    init() {}
                    enter() {
                        this.game.action.emit("state:ready_enter")
                    }
                    exit() {
                        this.game.action.emit("state:ready_exit")
                    }
                }
                class pi extends ui {}
                class gi extends $ {
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
                        return i.coins > 0 && (null === (t = this.stopItemWin) || void 0 === t ? void 0 : t.checked) && (this.stopItemWin.type === Pt || (null === (e = this.game.bigWin) || void 0 === e ? void 0 : e.available(i.coins)) && this.game.bigWin.type(i.coins) >= this.stopItemWin.type)
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
                class mi extends gi {}
                class Ai extends $ {
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
                class vi extends Ai {}
                class bi extends $ {
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
                class wi extends bi {}
                class yi extends $ {
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
                class fi extends yi {}
                const Si = JSON.parse('{"AutoPlaySettingsStopCondButtonReset":"Reset","AutoPlaySettingsStopCondCheckboxBalance":"If Balance Increases By","AutoPlaySettingsStopCondCheckboxBalanceDrop":"If Balance Decreases By","AutoPlaySettingsStopCondCheckboxFeatureBonus":"If Bonus Game Won","AutoPlaySettingsStopCondCheckboxFeatureFreeSpin":"If Free Spins Won","AutoPlaySettingsStopCondCheckboxWin":"If Win","AutoPlaySettingsStopCondCheckboxWinAny":"Any","AutoPlaySettingsStopCondCheckboxWinBig":"Big","AutoPlaySettingsStopCondCheckboxWinGiant":"Giant","AutoPlaySettingsStopCondTitle":"STOP AUTOPLAY","AutoPlaySettingsSubTitle":"Setup your best autoplay conditions","AutoPlaySettingsTitle":"AUTOPLAY","BetSettingsLines":"LINES\\n<value>%s</value>","BetSettingsTitle":"BET SETTINGS","BetSettingsWays":"WAYS\\n<value>%s</value>","ControlsDesktopAutoPlayStart":"AUTOPLAY","ControlsDesktopAutoPlayStop":"STOP AUTO","ControlsDesktopBalance":"BALANCE%s\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopBet":"BET %s\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopFreeRoundLeft":"FREE ROUND\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopFreeRoundWin":"TOTAL WIN %s\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopFreeRoundWinEmpty":"TOTAL WIN","ControlsDesktopFreeSpinsLast":"FREE SPINS LEFT\\n<delimiter> \\n</delimiter><value>LAST</value>","ControlsDesktopFreeSpinsLeft":"FREE SPINS LEFT\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopLines":"LINES\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopMaxBet":"MAX BET","ControlsDesktopTotalWin":"TOTAL WIN %s\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopWays":"WAYS\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopWin":"WIN %s\\n<delimiter> \\n</delimiter><value>%s</value>","Currency":"CURRENCY\\n<value>%s</value>","GameRulesAdvancedAutoPlayContent":"Advanced autoplay settings are available in the section with standard autoplay settings. You can set the conditions for stopping the game in automatic mode:\\n\\n<bold>if win any/big/giant</bold> - autoplay will be stopped after any/big/giant win\\n\\n<bold>if balance increased by 10%-100%</bold> - autoplay will stop when your balance increases by the selected %\\n\\n<bold>if balance decreased by 10%-100%</bold> - autoplay will be interrupted when your balance decreases by the selected %\\n\\nClick <bold>Reset</bold> to reset all autoplay settings","GameRulesAdvancedAutoPlayTitle":"Advanced Autoplay Settings","GameRulesAutoPlayContent":"Select the number of game rounds to play in automatic mode by pressing the button with the corresponding number, or press the button with the infinity sign to play in automatic mode until the autoplay is manually canceled or until the balance runs out. Your choice must be confirmed with the Start button.","GameRulesAutoPlayTitle":"Autoplay Options","GameRulesBestExperience":"Please note that you can only play one game at a time on each account. Therefore, you cannot play a game on more than one device, or multiple games on the same device simultaneously. Doing so may lead to various errors.\\n\\nFor the best gaming experience, we recommend using the latest version of the relevant software.","GameRulesGeneralRTP":"Theoretical RTP: %s %","GameRulesGeneralTitle":"General Info","GameRulesInterfaceAutoPlay":"Click to go to autoplay menu","GameRulesInterfaceBalance":"Here is your current balance","GameRulesInterfaceBetLevel":"Your current bet and a button to go to the bet size selection menu","GameRulesInterfaceContent":"All buttons of the game interface are listed below. Please note that the appearance and location of the buttons may differ slightly depending on the format in which the game is launched and what feature it is currently in.","GameRulesInterfaceMenu":"Click to access the game menu","GameRulesInterfaceQuickSpin":"Click to enable/disable quick spin","GameRulesInterfaceSound":"Turn game sound on/off and adjust sound volume","GameRulesInterfaceSpin":"Click to start the game round at the current bet. In the desktop version of the game, the button may have an alternative design","GameRulesInterfaceTitle":"Game Interface","GameRulesInterfaceWin":"Here is the win in the current game round","GameRulesSettingsContent":"To go to the settings menu, click the cogwheel icon in the game menu","GameRulesSettingsContentItemBackgroundSound":"<bold>Background music</bold> - turns on/off background music in the game","GameRulesSettingsContentItemFullscreen":"<bold>Full Screen</bold> - enables/disables full screen mode","GameRulesSettingsContentItemGameSound":"<bold>Game sound</bold> - turns on/off the sound effects of the game","GameRulesSettingsContentItemQuickSpin":"<bold>Quick Spin</bold> - turns on/off the function of the accelerated mode of rotation and stop of the reels","GameRulesSettingsTitle":"Game Settings","GameSettingsBackgroundSounds":"Background Music","GameSettingsFullscreen":"Full Screen","GameSettingsGameSounds":"Game Sounds","GameSettingsIntroScreen":"Intro Screen","GameSettingsLeftHand":"Left Hand Mode","GameSettingsQuickSpin":"Quick Spin","GameSettingsRiskFeatureCheckbox":"Risk&Buy","GameSettingsTitle":"GAME SETTINGS","IntroScreenHideButtonText":"Don\'t show next time","IntroScreenLoaderText":"LOADING","MenuDesktopButtonFullscreen":"FULLSCREEN","MenuDesktopButtonHome":"HOME","MenuDesktopButtonPaytable":"PAYTABLE","MenuDesktopButtonQuickspin":"QUICKSPIN","MenuDesktopButtonSound":"SOUND","MenuGameRules":"GAME INFORMATION","MenuMobileBetSettingsTitle":"BET SETTINGS","MenuMobileGameSettingsLeftHand":"Left Hand Mode","MenuMobileGameSettingsQuickspin":"Quick Spin","MenuMobileGameSettingsSounds":"Game Sounds","MenuMobileGameSettingsTitle":"GAME SETTINGS","MenuMobilePaytableTitle":"PAYTABLE","MenuPaytable":"PAYTABLE","MenuSettings":"SETTINGS","NetPositionTitle":"Net Position: %s","PopupActionClose":"Close","PopupActionContinue":"Continue","PopupActionEnable":"Enable","PopupActionNo":"No","PopupActionReload":"Reload","PopupActionYes":"Yes","PopupFreeRoundEndMessage":"The next spins will use your bonus amount","PopupFreeRoundEndTitle":"Free Rounds Finished","PopupFreeRoundLastMessage":"Congratulations, you have\\n last free round","PopupFreeRoundStartMessage":"Congratulations, you have\\n%s free rounds","PopupFreeRoundStartTitle":"Free Rounds Bonus","PopupFreeSpinsButton":"CLICK ANYWHERE TO CONTINUE","PopupFreeSpinsStopDescription":"<value>%s FREE SPINS</value> PLAYED","PopupFreeSpinsStopDescriptionNew":"%s Free Spins played","PopupFreeSpinsTitle":"CONGRATULATIONS","PopupFreeSpinsTitleNew":"CONGRATULATIONS! YOU WON","PopupFreeSpinsTitleRestore":"IN-GAME FEATURE RESTORED!","PopupFreeSpinsWinRestore":"<value>%s FREE SPINS</value> LEFT","PopupFreeSpinsWinRestoreLast":"<value>LAST FREE SPIN</value> LEFT","PopupFreeSpinsWinStart":"YOU WON <value>%s FREE SPINS</value>","PopupFreeSpinsWinStartNew":"%s FREE SPINS","PopupFreeSpinsWinStop":"YOU WON <value>%s</value>","PopupFreeSpinsWinStopNew":"<value>%s</value>","PopupMaxLimitMessage":"Bet exceeded max bet limit.","PopupMaxLimitTitle":"Max limit","PopupNetworkErrorMessage":"Please reload the game.","PopupNetworkErrorTitle":"Connection Lost","PopupQuickSpinMessage":"It seems you prefer to play a bit faster.\\nWould you like to enable Quick Spin?","PopupQuickSpinTitle":"Quick Spin","PopupRestoreMessage":"In-game feature restored!","PopupRiskNBuyContentBuy":"Buy in a feature for %s\\nthat will play at the bet %s","PopupRiskNBuyContentRisk":"Take the risk of winning %s\\nto get a feature at the bet %s","PopupRiskNBuyTitleBuy":"BUY IN FEATURE","PopupRiskNBuyTitleRisk":"RISK FEATURE","PopupSoundMessage":"Play with sound?","PopupSpendingBudgetMessage":"You have reached your play limit.\\nWelcome back later.","PopupSpendingBudgetTitle":"Play limit","PopupUnexpectedErrorMessage":"An unexpected situation.\\nReload the page.","PopupUnexpectedErrorTitle":"Unexpected situation","PopupZeroBalanceMessage":"Please change your BET LEVEL or top up your balance","PopupZeroBalanceTitle":"Insufficient funds","RiskNBuyBuyFor":"BUY FOR %s","RiskNBuyFreeSpinsText":"FREE SPINS","RiskNBuyOnBet":"ON BET %s","RiskNBuySubHeader":"RISK YOUR WIN\\nTO PLAY","StatusBarMobileBalance":"BALANCE %s\\n","StatusBarMobileBet":"BET %s\\n","StatusBarMobileFreeLast":"FREE SPINS LEFT\\n<value>LAST</value>","StatusBarMobileFreeLeft":"FREE SPINS LEFT\\n<value>%s</value>","StatusBarMobileFreePlayed":"FREE SPINS PLAYED\\n","StatusBarMobileFreeRoundLeft":"FREE ROUND\\n","StatusBarMobileTotalWin":"TOTAL WIN %s\\n","StatusBarMobileWin":"WIN %s\\n","TimeElapsedTitle":"Time Elapsed: %s"}'),
                    xi = JSON.parse('{"BonusHintText":"NEW WILDS ARE STICKY AND RELOAD BONUS SPINS COUNTER","BonusNextLevelText":"NEXT BONUS\\nLEVEL","ControlsDesktopBonusLast":"BONUS SPINS LEFT\\n<delimiter> \\n</delimiter><value>LAST</value>","ControlsDesktopBonusLeft":"BONUS SPINS LEFT\\n<delimiter> \\n</delimiter><value>%s</value>","IntroScreenDescription0":"Bonus & Super Bonus games with sticky Wilds","IntroScreenDescription1":"Buy the Bonus game or risk your winnings for it","PaytableSectionBetLinesContent1":"Only the highest win per bet line is paid. All prizes are for combinations left to right, beginning from the leftmost reel. The payout values are based on the currently selected bet and change proportionally with its changes. The game is played with fixed bet lines. Malfunction voids all pays and plays.\\n","PaytableSectionBetLinesTitle":"Bet lines","PaytableSectionBonusContent":"5 and more scattered Bonus symbols in the main game will trigger the Bonus game. The Bonus symbols go into the Bonus game and become sticky Wild symbols.","PaytableSectionBonusGameContent1":"The Bonus game starts with 1 bonus spin. During the Bonus Game, only Wild symbols can appear on the reels. Every time a Wild symbol appears on the reels, it becomes sticky and a new bonus spin is triggered. During the Bonus Game, the symbols don\'t have their own payouts. The Bonus game ends if no new Wild symbols appear during the spin. After the end of the Bonus game, the Super Bonus game begins.","PaytableSectionBonusGameTitle":"Bonus game","PaytableSectionBonusTitle":"Bonus symbol","PaytableSectionExtraBonusContent1":"If all the reels are filled with sticky Wild symbols in the Bonus or Super Bonus games, the game will end and the player will receive a win equal to the payout for the highest value symbol across all paylines, multiplied by the number of bonus spins remaining in the Super Bonus Game.","PaytableSectionExtraBonusTitle":"Extra Bonus feature","PaytableSectionPayoutTitle":"Symbol payout values","PaytableSectionRiskContent1":"The Risk\'n\'Buy feature is offered to the player in the main game after each spin, regardless of whether they win or not. The Risk\'n\'Buy feature will offer to either risk the current win and immediately go to the Bonus game with 5 starting sticky Wild symbols, or buy the Bonus game with 5 starting sticky Wild symbols at the specified cost and immediately go to it.\\n\\nThe player has the freedom to choose whether they want to launch the suggested version of the Risk\'n\'Buy feature or continue to the main game. If they choose to risk their current winnings, these will be deducted from their balance in the form of a bet. If the player decides to buy the Bonus game, the cost of the feature will also be deducted from their balance in the form of a bet. Bonus game earned through the Risk\'n\'Buy feature will be triggered on the same bet that it was received by the player. The Risk’n’Buy feature is not available in autoplay mode.","PaytableSectionRiskTitle":"Risk\'n\'Buy Feature","PaytableSectionSuperBonusContent1":"The Super Bonus game starts with 3 bonus spins. Every time a Wild symbol appears on the reels, it becomes sticky and the number of bonus spins returns to 3. The Super Bonus game will be played on the bet on which it was won by the player. All winnings in the Super Bonus game are paid according to the paytable.","PaytableSectionSuperBonusTitle":"Super Bonus game","PaytableSectionWildContent1":"Wild symbols substitute for all symbols exсept for Bonus symbols. The Wild symbol becomes sticky in the Bonus and Super Bonus games.","PaytableSectionWildTitle":"Wild symbol","PopupBonusDescription":"THE SUPER BONUS GAME WILL START AT THE END OF THE BONUS GAME","PopupBonusTitle":"CONGRATULATIONS","PopupBonusWinRestore":"<value>%s</value> BONUS SPINS LEFT","PopupBonusWinStart":"YOU WON\\n<value>THE BONUS GAME\\nWITH STICKY WILDS</value>","PopupBonusWinStop":"YOU WON <value>%s</value>","PopupBonusWinStopDescription":"<value>%s</value> BONUS SPINS PLAYED","RiskButton":"%s<currency> %s</currency>","RiskButtonTextBuy":"BUY\\nFEATURE","RiskButtonTextRisk":"RISK\\nWIN","RiskPopupDescriptionBuy":"BUY <free>BONUS GAME</free>\\n<bet>WITH STICKY WILDS\\nAT THE BET %s %s</bet>\\n\\n<valueText>FOR</valueText> <value>%s %s?</value>","RiskPopupDescriptionRisk":"RISK WINNINGS <value>%s %s FOR BONUS GAME</value><bet>\\nWITH STICKY WILDS\\n\\nAT THE BET %s %s?</bet>","RiskPopupNoPrimary":"NO, CANCEL","RiskPopupYesBuy":"YES, BUY","RiskPopupYesRisk":"YES, RISK","StatusBarMobileBonusLast":"BONUS SPINS LEFT\\n<value>LAST</value>","StatusBarMobileBonusLeft":"BONUS SPINS LEFT\\n<value>%s</value>"}');

                function ki(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function Bi(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? ki(Object(i), !0).forEach((function(e) {
                            (0, o.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ki(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                var Ci = Bi(Bi({}, Si), xi);
                class Pi extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "timeline", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "value", void 0), (0, o.Z)(this, "coins", void 0), (0, o.Z)(this, "onPress", void 0), (0, o.Z)(this, "onBeforeEnd", void 0), this.alpha = 0, this.onPress = new(C()), this.onBeforeEnd = new(C()), this.timeline = new h.TY, this.content = new a.Container, this.title = new a.Sprite(this.game.loader.getAsset("assets/images/labels/textExtraBonusWin.png")), this.title.anchor.set(.5), this.value = new a.BitmapText("", {
                            fontName: "WinFont"
                        }), this.value.anchor.set(.5), this.content.addChild(this.title), this.content.addChild(this.value), this.addChild(this.content)
                    }
                    show(t) {
                        var e = this;
                        return (0, s.Z)((function*() {
                            e.alpha = 1, e.resize(), e.game.action.emit("sound:extraBonus"), e.value.text = "".concat(e.game.i18n.currency({
                                bitmap: !0
                            }), "<value>").concat(e.game.helpers.toMoney(t), "</value>"), e.game.action.emit("update:bonusWin"), yield e.game.helpers.delay(800)
                        }))()
                    }
                    hide() {
                        this.alpha = 0
                    }
                    resize() {
                        this.game.device.desktop || this.game.device.landscape, this.title.position.set(0, -150), this.value.scale.set(.6), this.value.position.set(-10, 0)
                    }
                }
                class Ti extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "timeline", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "value", void 0), (0, o.Z)(this, "coins", void 0), (0, o.Z)(this, "isExtra", void 0), (0, o.Z)(this, "extraCoins", void 0), (0, o.Z)(this, "onPress", void 0), (0, o.Z)(this, "onBeforeEnd", void 0), this.visible = !1, this.interactive = !0, this.isExtra = !1, this.onPress = new(C()), this.onBeforeEnd = new(C()), this.game.interaction.click(this, (() => this.onPress.dispatch())), this.timeline = new h.TY, this.content = new a.Container, this.overlay = new at(.75), this.title = new a.Sprite(this.game.loader.getAsset("assets/images/labels/textTotalBonusWin.png")), this.title.anchor.set(.5), this.title.alpha = 0, this.value = new a.BitmapText("", {
                            fontName: "WinFont"
                        }), this.value.anchor.set(.5), this.extraCoins = new Pi, this.content.addChild(this.title), this.content.addChild(this.value), this.content.addChild(this.extraCoins), this.addChild(this.overlay), this.addChild(this.content)
                    }
                    showExtra(t) {
                        var e = this;
                        return (0, s.Z)((function*() {
                            e.isExtra = !1, 0 !== t && (e.isExtra = !0, e.visible = !0, e.overlay.alpha = .75, yield e.extraCoins.show(t))
                        }))()
                    }
                    show(t, e) {
                        var i = this;
                        return (0, s.Z)((function*() {
                            return i.visible = !0, i.resize(), 0 !== e && (i.title.position.set(0, 320), i.value.position.set(-10, 470)), new Promise((e => {
                                i.timeline.eventCallback("onComplete", (() => {
                                    e()
                                })), 0 !== t && i.game.action.emit("sound:bonusTotalWin");
                                var s = {
                                    coins: 0
                                };
                                i.timeline.set([i.title, i.value], {
                                    pixi: {
                                        alpha: 0
                                    }
                                }).to(i.overlay, .35, {
                                    pixi: {
                                        alpha: .75
                                    }
                                }, 0).to(i.title, .25, {
                                    pixi: {
                                        alpha: 1
                                    }
                                }, 0).to(i.value, .5, {
                                    pixi: {
                                        alpha: 1,
                                        scale: .8
                                    }
                                }, 0).to(s, 0 === t ? 0 : 4, {
                                    coins: t,
                                    ease: h.oY.Linear.easeNone,
                                    roundProps: ["coins"],
                                    onStart: () => {
                                        i.interactive = !0
                                    },
                                    onUpdate: () => {
                                        h.kX.to(i.value, 2, {
                                            pixi: {
                                                scale: .6
                                            }
                                        }), i.value.text = "".concat(i.game.i18n.currency({
                                            bitmap: !0
                                        }), "<value>").concat(i.game.helpers.toMoney(s.coins), "</value>")
                                    },
                                    onComplete: () => {
                                        i.game.action.emit("update:bonusWin"), i.onBeforeEnd.dispatch(), i.interactive = !1
                                    }
                                }, 0), i.timeline.addLabel("break", "+=0"), i.timeline.to([i.title, i.value, i.extraCoins], .2, {
                                    pixi: {
                                        alpha: 0
                                    }
                                }, "break+=0.5")
                            }))
                        }))()
                    }
                    hide() {
                        this.visible = !1, this.title.alpha = 0, this.value.text = "", this.timeline.clear(), this.onPress.handlers(!0) && this.onPress.detachAll()
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
                        this.title.position.set(0, 100), this.value.scale.set(.6), this.value.position.set(-10, 250), this.isExtra && (this.title.position.set(0, 320), this.value.position.set(-10, 470)), this.game.device.desktop || this.game.device.landscape ? this.content.position.set(this.game.viewport.width / 2, 350) : this.content.position.set(this.game.viewport.width / 2, (this.game.viewport.height - 500) / 2)
                    }
                }
                var Ei = i(8442),
                    Zi = [0, 0, 0];
                class Oi extends Ei.PY {
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
                                n = null;
                            s ? (o = s.light, n = s.dark) : o = this.tintRgb;
                            for (var h = 0, r = i.length; h < r; h++) {
                                var l = i[h],
                                    d = l.getAttachment(),
                                    c = this.slotContainers[h];
                                if (d) {
                                    var u = null,
                                        p = d.color;
                                    switch (d.type) {
                                        case Ei.sf.Region:
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
                                            c.transform.setFromMatrix(l.bone.matrix), l.currentSprite.color ? u = l.currentSprite.color : (Zi[0] = o[0] * l.color.r * p.r, Zi[1] = o[1] * l.color.g * p.g, Zi[2] = o[2] * l.color.b * p.b, l.currentSprite.tint = a.utils.rgb2hex(Zi)), l.currentSprite.blendMode = l.blendMode;
                                            break;
                                        case Ei.sf.Mesh:
                                            if (l.currentSprite) {
                                                l.currentSprite.visible = !1, l.currentSprite = null, l.currentSpriteName = void 0;
                                                var b = new a.Transform;
                                                b._parentID = -1, b._worldID = c.transform._worldID, c.transform = b
                                            }
                                            var w = d.id;
                                            if (!l.currentMeshId || l.currentMeshId !== w) {
                                                var y = w;
                                                if (l.currentMesh && (l.currentMesh.visible = !1), l.meshes = l.meshes || {}, void 0 !== l.meshes[y]) l.meshes[y].visible = !0;
                                                else {
                                                    var f = this.createMesh(l, d);
                                                    c.addChild(f)
                                                }
                                                l.currentMesh = l.meshes[y], l.currentMeshName = d.name, l.currentMeshId = y
                                            }
                                            d.computeWorldVerticesOld(l, l.currentMesh.vertices), l.currentMesh.color ? u = l.currentMesh.color : (Zi[0] = o[0] * l.color.r * p.r, Zi[1] = o[1] * l.color.g * p.g, Zi[2] = o[2] * l.color.b * p.b, l.currentMesh.tint = a.utils.rgb2hex(Zi)), l.currentMesh.blendMode = l.blendMode;
                                            break;
                                        case Ei.sf.Clipping:
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
                                        u.setLight(o[0] * S + n[0] * (1 - S), o[1] * x + n[1] * (1 - x), o[2] * k + n[2] * (1 - k)), l.darkColor ? (S = l.darkColor.r, x = l.darkColor.g, k = l.darkColor.b) : (S = 0, x = 0, k = 0), u.setDark(o[0] * S + n[0] * (1 - S), o[1] * x + n[1] * (1 - x), o[2] * k + n[2] * (1 - k))
                                    }
                                    c.alpha = l.color.a
                                } else c.visible = !1
                            }
                            for (var B = this.skeleton.drawOrder, C = null, P = null, T = 0, E = B.length; T < E; T++) {
                                var Z = i[B[T].data.index],
                                    O = this.slotContainers[B[T].data.index];
                                if (P || null !== O.parent && O.parent !== this && (O.parent.removeChild(O), O.parent = this), Z.currentGraphics && Z.getAttachment()) P = Z.clippingContainer, C = Z.getAttachment(), P.children.length = 0, this.children[T] = O, C.endSlot === Z.data && (C.endSlot = null);
                                else if (P) {
                                    var R = this.tempClipContainers[T];
                                    R || ((R = this.tempClipContainers[T] = this.newContainer()).visible = !1), this.children[T] = R, O.parent = null, P.addChild(O), C.endSlot == Z.data && (P.renderable = !0, P = null, C = null)
                                } else this.children[T] = O
                            }
                        }
                    }
                    createGraphics(t, e) {
                        if (!this.spineData.useRectangleMask) return super.createGraphics(t, e);
                        var i = this.newGraphics();
                        if (i.clear(), i.beginFill(16777215, 1), e.worldVerticesLength <= 8) {
                            var s = new a.Rectangle(0, 0, 0, 0);
                            i.drawRect(s.x, s.y, s.width, s.height)
                        } else {
                            var o = new a.Polygon;
                            i.drawPolygon(o)
                        }
                        return i.renderable = !1, t.currentGraphics = i, t.clippingContainer = this.newContainer(), t.clippingContainer.mask = t.currentGraphics, i
                    }
                    updateGraphics(t, e) {
                        if (!this.spineData.useRectangleMask) return super.updateGraphics(t, e);
                        var i = t.currentGraphics.geometry,
                            s = i.graphicsData[0].shape;
                        if (s instanceof a.Polygon) {
                            var o = s.points,
                                n = e.worldVerticesLength;
                            o.length = n, e.computeWorldVertices(t, 0, n, o, 0, 2)
                        } else {
                            var h = [...e.vertices],
                                r = e.worldVerticesLength;
                            h.length = r, e.computeWorldVertices(t, 0, r, h, 0, 2);
                            var l = h[4] - h[0],
                                d = h[5] - h[1],
                                c = l > 0 ? h[0] : h[0] - Math.abs(l),
                                u = d > 0 ? h[1] : h[1] - Math.abs(d);
                            s.x = c, s.y = u, s.width = Math.abs(l), s.height = Math.abs(d)
                        }
                        i.invalidate()
                    }
                }
                class Ri extends(J(a.Container)) {
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

                function Fi(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function Mi(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Fi(Object(i), !0).forEach((function(e) {
                            (0, o.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Fi(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                var Ii = {
                    fontFamily: "Avenir-Bold",
                    fill: 16777215,
                    align: "center"
                };
                const Wi = {
                    Currency: {
                        default: Mi(Mi({}, Ii), {}, {
                            fill: 3152394,
                            fontSize: 27
                        })
                    },
                    DescriptionRisk: {
                        default: Mi(Mi({}, Ii), {}, {
                            fontSize: 40,
                            fill: 16446148,
                            wordWrap: !0,
                            wordWrapWidth: 760,
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
                        default: Mi(Mi({}, Ii), {}, {
                            fontSize: 50,
                            fill: 16446148,
                            wordWrap: !0,
                            wordWrapWidth: 760,
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
                            fontSize: 35
                        },
                        valueText: {
                            fontSize: 80
                        },
                        value: {
                            fill: [16773032, 16768299],
                            fillGradientStops: [.3, .6],
                            fontSize: 80,
                            dropShadowColor: 11491610,
                            dropShadow: !0,
                            dropShadowAlpha: .4,
                            dropShadowAngle: .7,
                            dropShadowDistance: 10
                        }
                    },
                    YesRisk: {
                        default: Mi(Mi({}, Ii), {}, {
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
                        default: Mi(Mi({}, Ii), {}, {
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
                        default: Mi(Mi({}, Ii), {}, {
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
                        default: Mi(Mi({}, Ii), {}, {
                            fontSize: 36,
                            dropShadow: !0,
                            dropShadowAlpha: .3,
                            dropShadowAngle: .7,
                            dropShadowDistance: 7
                        })
                    }
                };
                class Di extends Ri {
                    constructor() {
                        super(), (0, o.Z)(this, "riskButton", void 0), (0, o.Z)(this, "buyButton", void 0), (0, o.Z)(this, "valueText", void 0), this.riskButton = this.addChild(new Oi(this.game.loader.getAsset("assets/images/effects/riskBuyBtn/skeleton.json"))), this.riskButton.changeSkin("risk"), this.riskButton.play("animation", !0), this.riskButton.visible = !1, this.buyButton = this.addChild(new Oi(this.game.loader.getAsset("assets/images/effects/riskBuyBtn/skeleton.json"))), this.buyButton.changeSkin("buy"), this.buyButton.play("animation", !0), this.riskButton.visible = !1, this.valueText = this.addChild(new It("", Wi.valueText)), this.valueText.setTagStyle("default", {
                            dropShadow: !0,
                            dropShadowAlpha: .4,
                            dropShadowAngle: 5,
                            dropShadowBlur: 4,
                            dropShadowColor: "#7b470e",
                            dropShadowDistance: -4,
                            fill: "#ffffff",
                            fontSize: 35,
                            letterSpacing: 2,
                            lineJoin: "round",
                            miterLimit: 2,
                            stroke: "#7b470e",
                            strokeThickness: 7
                        }), this.valueText.setTagStyle("currency", {
                            fontSize: 20
                        }), this.valueText.anchor.x = .5, this.valueText.position.set(180, 230)
                    }
                    showRiskButton(t) {
                        if (super.showRiskButton(t), this.visible) {
                            var e = this.game.store.get("risk", !1),
                                i = this.game.store.get("buy", !1);
                            super.showRiskButton(t), this.riskButton.visible = e, this.buyButton.visible = i, this.valueText.text = this.game.i18n.t("RiskButton", e ? this.game.helpers.toMoney(this.game.wallet.totalCoins) : this.game.helpers.toMoney(i.bet), K.i18n.currency({
                                withBrace: !0
                            })), this.valueText.position.set(180, 227)
                        }
                    }
                    hide() {
                        super.hide(), this.riskButton.visible = !1, this.buyButton.visible = !1, this.valueText.text = ""
                    }
                    resize() {
                        this.scale.set(1), this.game.device.portrait && !this.game.device.desktop ? this.position.set(680, 980) : this.game.device.landscape && !this.game.device.desktop ? (this.scale.set(.9), this.game.leftHand.enabled ? this.position.set(1596, 590) : this.position.set(10, 590)) : (this.scale.set(.9), this.position.set(1594, 620))
                    }
                }
                class Li extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "RiskPopup"), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "content", void 0), this.overlay = this.addChild(new at(.75)), this.content = this.addChild(new a.Container)
                    }
                    show() {
                        this.visible = !0, h.kX.fromTo(this.content, .3, {
                            pixi: {
                                scale: 0
                            }
                        }, {
                            pixi: {
                                scale: 1
                            }
                        }), h.kX.fromTo(this.content, .3, {
                            pixi: {
                                x: this.game.viewport.width / 2
                            }
                        }, {
                            pixi: {
                                x: 0
                            }
                        }), h.kX.fromTo(this.content, .3, {
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
                class Ni extends a.Container {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        super(), (0, o.Z)(this, "validBlendModes", [a.BLEND_MODES.NORMAL, a.BLEND_MODES.ADD, a.BLEND_MODES.MULTIPLY, a.BLEND_MODES.SCREEN]), this.needDepth = t
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
                        for (var h = 0, r = this.validBlendModes[h], l = !0; l;) {
                            for (var d of (l = !1, i)) {
                                var {
                                    stack: c
                                } = d;
                                if (!d.isComplete) {
                                    var u = void 0;
                                    for (u = d.index; u < c.length; ++u) {
                                        var p = c[u];
                                        if (p.blendMode !== r) {
                                            l = !0;
                                            break
                                        }
                                        p._render(t)
                                    }
                                    d.index = u, u === c.length && (d.isComplete = !0)
                                }
                            }
                            h = (h + 1) % this.validBlendModes.length, r = this.validBlendModes[h]
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
                var _i, Ui = i(7236);
                new Ni;
                class ji extends Li {
                    constructor() {
                        super(), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "descriptionRisk", void 0), (0, o.Z)(this, "descriptionBuy", void 0), (0, o.Z)(this, "yesButton", void 0), (0, o.Z)(this, "yesButtonText", void 0), (0, o.Z)(this, "noButton", void 0), (0, o.Z)(this, "noButtonText", void 0), (0, o.Z)(this, "enterKey", void 0), (0, o.Z)(this, "escKey", void 0), (0, o.Z)(this, "resolver", void 0), super.hide(), this.resolver = new(C()), this.background = this.content.addChild(new a.Sprite(this.game.loader.getAsset("risk", "riskBg"))), this.background.anchor.set(.5), this.descriptionRisk = this.background.addChild(new Ui.Z("", Wi.DescriptionRisk)), this.descriptionRisk.anchor.x = .5, this.descriptionRisk.position.set(-380, -180), this.descriptionBuy = this.background.addChild(new Ui.Z("", Wi.DescriptionBuy)), this.descriptionBuy.anchor.x = .5, this.descriptionBuy.position.set(-380, -200), this.noButton = this.background.addChild(new a.Sprite(this.game.loader.getAsset("risk", "removeBtn"))), this.noButton.position.set(-380, 130), this.noButton.interactive = !0, this.noButton.cursor = "pointer", this.game.interaction.click(this.noButton, this.noClick, this), this.noButton.interactive = !0, this.noButtonText = this.noButton.addChild(new It(this.game.i18n.t("RiskPopupNoPrimary"), Wi.NoRisk)), this.noButtonText.anchor.set(.5), this.noButtonText.position.set(this.noButton.width / 2, this.noButton.height / 2), this.yesButton = this.background.addChild(new a.Sprite(this.game.loader.getAsset("risk", "buyBtn"))), this.yesButton.position.set(60, 130), this.yesButton.interactive = !0, this.yesButton.cursor = "pointer", this.game.interaction.click(this.yesButton, this.yesClick, this), this.yesButtonText = this.yesButton.addChild(new It(this.game.i18n.t("RiskPopupYesRisk"), Wi.YesRisk)), this.yesButtonText.anchor.set(.5), this.yesButtonText.position.set(this.yesButton.width / 2, this.yesButton.height / 2), this.escKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Escape), this.escKey.onPress.add((() => this.noClick())), this.enterKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Enter), this.enterKey.onPress.add((() => this.yesClick()))
                    }
                    show() {
                        if (this.game.store.get("isRiskNBuy")) return super.show(), new Promise((t => {
                            this.resolver.once(t);
                            var e = this.game.store.get("risk", !1),
                                i = this.game.store.get("buy", !1);
                            e ? (this.descriptionRisk.renderable = !0, this.descriptionBuy.renderable = !1, this.descriptionRisk.text = this.game.i18n.t("RiskPopupDescriptionRisk", this.game.helpers.toMoneySS(this.game.wallet.totalCoins), this.game.i18n.currency(), this.game.helpers.toMoneySS(this.game.betLevel.toCoins()), this.game.i18n.currency()), this.background.texture = this.game.loader.getAsset("risk", "riskBg"), this.noButton.texture = this.game.loader.getAsset("risk", "removeBtn"), this.yesButtonText.text = this.game.i18n.t("RiskPopupYesRisk")) : (this.descriptionRisk.renderable = !1, this.descriptionBuy.renderable = !0, this.descriptionBuy.text = this.game.i18n.t("RiskPopupDescriptionBuy", this.game.helpers.toMoneySS(this.game.betLevel.toCoins()), this.game.i18n.currency(), this.game.helpers.toMoneySS(i.bet), this.game.i18n.currency()), this.background.texture = this.game.loader.getAsset("risk", "buyBg"), this.noButton.texture = this.game.loader.getAsset("risk", "removeBtn"), this.yesButtonText.text = this.game.i18n.t("RiskPopupYesBuy"))
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
                class zi extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "hintText", void 0), (0, o.Z)(this, "background", void 0), this.background = this.addChild(new a.Sprite(this.game.loader.getAsset("assets/images/common/panel.png"))), this.background.anchor.set(.5), this.scale.set(1.4), this.hide(), this.hintText = this.addChild(new It(this.game.i18n.t("BonusHintText"), {
                            default: {
                                align: "center",
                                fill: "#ffffff",
                                fontFamily: "Avenir-Bold",
                                fontSize: 16,
                                letterSpacing: 1,
                                lineJoin: "round",
                                miterLimit: 2,
                                stroke: "#154900",
                                strokeThickness: 8,
                                trim: !0,
                                whiteSpace: "normal"
                            }
                        })), this.hintText.anchor.set(.5), this.background.width = this.hintText.width + 20
                    }
                    show() {
                        this.alpha = 1
                    }
                    hide() {
                        this.alpha = 0
                    }
                }
                class Vi extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "queenAnimation", void 0), (0, o.Z)(this, "initialHeight", void 0), this.position.set(0, 330), this.queenAnimation = new Oi(K.loader.getAsset("assets/images/effects/queen/skeleton.json")), this.initialHeight = this.queenAnimation.height, this.queenAnimation.play("idle", !0), setInterval((() => {
                            this.queenAnimation.play(function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                                    i = t + Math.random() * (e + 1 - t);
                                return "action".concat(Math.floor(i))
                            }(), !1).then((() => {
                                this.queenAnimation.play("idle", !0)
                            }))
                        }), 19e3), this.addChild(this.queenAnimation), this.game.action.on("bonus:select_start", (() => {
                            this.game.device.landscape && !this.game.device.desktop && (this.game.leftHand.enabled ? (this.scale.set(1, 1), this.position.set(0, 330)) : (this.scale.set(-1, 1), this.position.set(1930, 330)))
                        })), this.game.action.on("bonus:select_stop", (() => {
                            this.game.device.landscape && !this.game.device.desktop && (this.game.leftHand.enabled ? (this.scale.set(-1, 1), this.position.set(1930, 330)) : (this.scale.set(1, 1), this.position.set(0, 330)))
                        }))
                    }
                    resize() {
                        this.game.device.desktop || (this.game.device.portrait ? (this.scale.set(1.3), this.position.set(0, 2 * this.game.viewport.paddingY + this.game.viewport.height - this.initialHeight)) : si.isBonus() || si.isFreespin() ? this.game.leftHand.enabled ? (this.scale.set(1, 1), this.position.set(0, 330)) : (this.scale.set(-1, 1), this.position.set(1924, 330)) : this.game.leftHand.enabled ? (this.scale.set(-1, 1), this.position.set(1930, 330)) : (this.scale.set(1, 1), this.position.set(0, 330)))
                    }
                }
                class Gi extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "backgroundLTextureNormal", void 0), (0, o.Z)(this, "backgroundPTextureNormal", void 0), (0, o.Z)(this, "backgroundTextureLandscape", void 0), (0, o.Z)(this, "backgroundTexturePortrait", void 0), (0, o.Z)(this, "logo", void 0), (0, o.Z)(this, "bonusPanel", void 0), (0, o.Z)(this, "queen", void 0), (0, o.Z)(this, "bglnAnimation", void 0), (0, o.Z)(this, "bglfAnimation", void 0), this.backgroundLTextureNormal = this.game.loader.getAsset("bgln"), this.backgroundPTextureNormal = this.game.loader.getAsset("bgpn"), this.backgroundTextureLandscape = this.backgroundLTextureNormal, this.backgroundTexturePortrait = this.backgroundPTextureNormal, this.background = new a.Sprite(this.backgroundTextureLandscape), this.background.name = "background", this.bglnAnimation = new Oi(this.game.loader.getAsset("assets/images/effects/bgln/skeleton.json")), this.bglnAnimation.play("animation", !0), this.bglfAnimation = new Oi(this.game.loader.getAsset("assets/images/effects/bglf/skeleton.json")), this.bglfAnimation.play("animation", !0), this.bglfAnimation.alpha = 0, this.logo = new Oi(this.game.loader.getAsset("assets/images/effects/logo/skeleton.json")), this.logo.play("animation", !0), this.bonusPanel = new zi, this.queen = new Vi, this.addChild(this.background), this.addChild(this.bglnAnimation), this.addChild(this.bglfAnimation), this.addChild(this.logo), this.addChild(this.bonusPanel), this.addChild(this.queen), this.setupEvents()
                    }
                    setupEvents() {
                        this.game.action.on("state:setup_enter", (() => {
                            (si.isFreespin() || si.isBonus()) && (this.logo.alpha = 0, this.queen.alpha = 0, this.bglnAnimation.alpha = 0, this.bglfAnimation.alpha = 1)
                        })), this.game.action.on("bonus:start", (() => {
                            this.background.texture = this.game.device.portrait && !this.game.device.desktop ? this.backgroundTexturePortrait : this.backgroundTextureLandscape, this.bglnAnimation.alpha = 0, this.bglfAnimation.alpha = 1
                        })), this.game.action.on("bonus:restore", (() => {
                            this.background.texture = this.game.device.portrait && !this.game.device.desktop ? this.backgroundTexturePortrait : this.backgroundTextureLandscape
                        })), this.game.action.on("bonus:stop", (() => {
                            this.background.texture = this.game.device.portrait && !this.game.device.desktop ? this.backgroundTexturePortrait : this.backgroundTextureLandscape, this.bonusPanel.hide()
                        })), this.game.action.on("bonus:select_start", (() => {
                            this.logo.alpha = 1, this.queen.alpha = 1, this.bonusPanel.show()
                        })), this.game.action.on("bonus:select_stop", (() => {
                            this.logo.alpha = 1, this.queen.alpha = 1, this.bglnAnimation.alpha = 1, this.bglfAnimation.alpha = 0
                        }))
                    }
                    beforeFreeSpinsPopup() {
                        this.logo.alpha = 0, this.queen.alpha = 0, this.bonusPanel.hide(), this.bglnAnimation.alpha = 0, this.bglfAnimation.alpha = 1
                    }
                    gameStart() {
                        this.game.store.get("free:isFree", !1) || this.game.store.get("bonus:isBonus", !1) || (this.logo.alpha = 0, this.queen.alpha = 0)
                    }
                    resize() {
                        this.bonusPanel.position.set(this.game.viewport.width / 2, 20), this.game.device.portrait && !this.game.device.desktop ? (this.background.texture = this.game.loader.getAsset("bgpn"), this.background.anchor.set(0), console.log(this.background.height), console.log(2 * this.game.viewport.paddingY + this.game.viewport.height), this.background.width = 2 * this.game.viewport.paddingX + this.game.viewport.width, this.background.height = 2 * this.game.viewport.paddingY + this.game.viewport.height, this.background.position.set(-this.game.viewport.paddingX, 0), this.background.scale.set(Math.max(this.game.viewport.width / this.background.width * 1.4, this.game.viewport.height / this.background.height * 1.4)), this.bglnAnimation.height = 2 * this.game.viewport.paddingY + this.game.viewport.height, this.bglnAnimation.scale.x = this.bglnAnimation.scale.y, this.bglfAnimation.scale.set(3), this.logo.scale.set(1.2), this.logo.position.set(270, 0)) : (this.background.texture = this.game.loader.getAsset("bgln"), this.background.anchor.set(.5), this.background.width = this.game.viewport.width, this.background.height = this.game.viewport.height, this.background.position.set(this.game.viewport.width / 2, this.game.viewport.height / 2), this.bglnAnimation.scale.set(1), this.bglfAnimation.scale.set(1), this.logo.scale.set(1), this.logo.position.set(-35, 30))
                    }
                }! function(t) {
                    t[t.START = 0] = "START", t[t.END = 1] = "END", t[t.RESTORE = 2] = "RESTORE"
                }(_i || (_i = {}));
                class Hi extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "_timeline", void 0), (0, o.Z)(this, "_keyboardSpace", void 0), (0, o.Z)(this, "_content", void 0), (0, o.Z)(this, "_overlay", void 0), (0, o.Z)(this, "_title", void 0), (0, o.Z)(this, "_win", void 0), (0, o.Z)(this, "_description", void 0), (0, o.Z)(this, "_buttonText", void 0), (0, o.Z)(this, "completeResolve", void 0), (0, o.Z)(this, "tweenAutoTimeout", void 0), this.visible = !1, this.completeResolve = !1, this.cursor = "pointer", this.interactive = !1, this._overlay = this.addChild(new at(.3)), this._content = this.addChild(new a.Container), this._content.interactive = !1, this._content.interactiveChildren = !1, this._title = this._content.addChild(new It("", {
                            default: {
                                fill: "#fff",
                                fontFamily: "Avenir-Bold",
                                fontSize: 45,
                                align: "center",
                                wordWrap: !0,
                                strokeThickness: 8
                            }
                        })), this._title.anchor.set(.5, 1), this._title.position.set(0, 20), this._win = this._content.addChild(new It("", {
                            default: {
                                fill: "#ffffff",
                                fontFamily: "Avenir-Bold",
                                align: "center",
                                fontSize: 100,
                                wordWrap: !0,
                                lineJoin: "round",
                                miterLimit: 13,
                                stroke: "#000000",
                                strokeThickness: 8
                            },
                            value: {
                                fill: "#ffcc00"
                            }
                        })), this._win.anchor.set(.5), this._win.position.set(0, 250), this._description = this._content.addChild(new It("", {
                            default: {
                                fontFamily: "Avenir-Bold",
                                fill: "#ffffff",
                                align: "center",
                                fontSize: 45,
                                wordWrap: !0,
                                lineJoin: "round",
                                miterLimit: 13,
                                stroke: "#000000",
                                strokeThickness: 8
                            },
                            value: {
                                fill: "#ffcc00"
                            }
                        })), this._description.anchor.set(.5), this._description.position.set(0, 470), this._buttonText = this._content.addChild(new It("", {
                            default: {
                                fontFamily: "Avenir-Bold",
                                fill: "#fff",
                                fontSize: 45,
                                align: "center",
                                wordWrap: !0,
                                strokeThickness: 8
                            }
                        })), this._buttonText.anchor.set(.5, 0), this._buttonText.position.set(0, 600), this._timeline = new h.TY({
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
                        var t = this.game.store.get("bonus:isEnd", !1);
                        this.game.action.emit("sound:click"), t ? this.game.action.emit("bonus:select_stop") : this.game.action.emit("bonus:select_start"), "function" == typeof this.completeResolve && (this.completeResolve(), this.completeResolve = null), this.visible = !1
                    }
                    show(t) {
                        this.visible = !0, this._title.position.set(0, 0), this._description.position.set(0, 500), this._buttonText.position.set(0, 650);
                        var e = this.game.autoPlay.enabled;
                        return new Promise((i => {
                            this.completeResolve = i;
                            var s = "";
                            if (t === _i.START) s = "bonus:start", this.game.action.emit("sound:bonus_start"), this._title.text = this.game.i18n.t("PopupBonusTitle"), this._win.text = this.game.i18n.t("PopupBonusWinStart"), this._description.text = this.game.i18n.t("PopupBonusDescription"), this._buttonText.text = this.game.i18n.t("PopupFreeSpinsButton"), e && (this.tweenAutoTimeout = h.kX.to(this._buttonText, 1, {
                                pixi: {
                                    scale: 1.1
                                },
                                repeat: 5,
                                yoyo: !0,
                                onComplete: () => {
                                    this.hide()
                                }
                            }));
                            else if (t === _i.END) {
                                s = "bonus:stop", this.game.action.emit("sound:bonus_stop");
                                var o = this.game.helpers.toMoney(this.game.store.get("free:win", 0) + (this.game.freeRound.enabled ? this.game.store.get("reward:preWin", 0) : this.game.store.get("reward:preRisk", !0) ? 0 : this.game.store.get("reward:preWin", 0))),
                                    n = this.game.store.get("free:played", 0);
                                this._title.text = this.game.i18n.t("PopupBonusTitle"), this._win.text = this.game.i18n.t("PopupBonusWinStop", "".concat(o, "\t").concat(this.game.i18n.currency())), this._description.text = this.game.i18n.t("PopupBonusWinStopDescription", n), this._buttonText.text = this.game.i18n.t("PopupFreeSpinsButton"), e && (this.tweenAutoTimeout = h.kX.to(this._buttonText, 1, {
                                    pixi: {
                                        scale: 1.1
                                    },
                                    repeat: 5,
                                    yoyo: !0,
                                    onComplete: () => {
                                        this.hide()
                                    }
                                })), this._description.position.set(0, 400), this._buttonText.position.set(0, 670)
                            } else t === _i.RESTORE && (s = "bonus:restore", this.game.action.emit("sound:bonus_start"), this._title.text = this.game.i18n.t("PopupFreeSpinsTitleRestore"), this._win.text = "", this._description.text = "", this._buttonText.text = this.game.i18n.t("PopupFreeSpinsButton"), this._title.position.set(0, 100), this._buttonText.position.set(0, 280));
                            this.resize(), this.showContent(t).then((() => {
                                this.game.action.emit(s), this._keyboardSpace.enable(), this.interactive = !0
                            }))
                        }))
                    }
                    showContent(t) {
                        return t === _i.RESTORE ? Promise.resolve() : new Promise((t => {
                            this._timeline.vars.onComplete = () => {
                                t(), this._timeline.vars.onComplete = null
                            }, this._timeline.restart()
                        }))
                    }
                    resize() {
                        this.hitArea = new a.Rectangle(-this.game.viewport.paddingX, 0, this.game.viewport.width + 2 * this.game.viewport.paddingX, this.game.viewport.height), this._title.setTagStyle("default", {
                            wordWrapWidth: this.game.viewport.width,
                            breakWords: "ja" === window.language
                        }), this._win.setTagStyle("default", {
                            wordWrapWidth: this.game.viewport.width
                        }), this._description.setTagStyle("default", {
                            wordWrapWidth: this.game.viewport.width
                        }), this._buttonText.setTagStyle("default", {
                            wordWrapWidth: this.game.viewport.width,
                            breakWords: "ja" === window.language
                        }), this._content.position.set(this.game.viewport.width / 2, (this.game.viewport.height - this._content.height) / 2)
                    }
                }
                const Qi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////1fUNLcAAAAWdFJOUwDPn4C/30AgEO+QcGCgf69fMI9vULAqgdwXAAACbklEQVRYw+1YyZaDIBCUHVxiTDL8/6eOTlzYQ6OZE3XKy8MSmurqbpumoqKioqIiB5I/MWJaa4UoecnriDlV2gK9i0s2fHN438Dnyfsg8YLHOXJBdRzsfibISidxK2Z+WjyzOGbYL0OFQbkZtLTfSORrYEZQirj7g5g4Su4PclYi8v0GSeDpgxwVcK8PsymsnWEXIZx6fCdedFNk4+7gml62PSQWdNtVwEMiesKTCzZu/AVDbFdu/gWvRasTAh7JTQQO3fak9OhfjWgxbt13rhJsIdJ4hHXuqkGsIsmkHoJn7MMippCIPMNqHcM3xgEREZttUu/kf47qvFGqfI0cpta58cDL6UkwIjnBNk3alMOiYL6kHzI1OmPVCJ9/phNeWDXE/p810roxoSAFTTK7aFspjd+nJ26aG0hQP5yl3LwB/jYk5bpT8JjxmuWUJ75SCvN9zhFnJLoH5O2jO7IIb3poXQfZkBK3H7x19XJhe69wJFMbPGK6Jjn66yM30FjNlfjgpkJMW784w05y7eWpqT+SkTUqJGqN8B+QbS9djjo8I5K2cCbj6jpvsZ26n6ppZ0WUmXb04yfZHVKVqEWNTTen3urcoq4cIUxMU2HUILs/bSFdJQHVaTnEmrfQYmCdhnRPw4kG91MR+4eOKz2scELgQ8HulyluHO++czquOLfE0HbP88tRxFssI0uLRpnQ5HlM16iAWqLoWGuO7UUTr8GtFb5P+6xAgSYd4h79aZfZvQcpljdJj+jqdWb+Zwlmeu6rhYxuXHXn/WQIfblQ5BLrkr3zwUXRC6c5ycmIlt0zNj75F7y2oqKioqIChF9HhmS5mMSV/gAAAABJRU5ErkJggg==";
                class Yi extends st {
                    constructor() {
                        super(Qi), (0, o.Z)(this, "name", "ButtonAutoPlay"), (0, o.Z)(this, "startTexture", void 0), (0, o.Z)(this, "stopTexture", void 0), (0, o.Z)(this, "counts", void 0), (0, o.Z)(this, "countsInfinity", void 0), (0, o.Z)(this, "enterKey", void 0), (0, o.Z)(this, "onEnterClick", void 0), this.startTexture = a.Texture.from(Qi), this.stopTexture = a.Texture.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTP////////////////////////////////////////////////////////////////////////////////////VtkI8AAAAVdFJOUwCAz2Dfv0AgEO9fkH9wn6CvMI9vUD+hasQAAAIqSURBVFjD7VhJkoMwDIyNVwhbEv//qwM1LMYbkoGb+5SaMj1CbrUkXq+CgoKCggIIlPh2lBljNOXkp+4jFlybA3gtbwn47fD+o7tOXgWJZ3yukUtu4mD1lSRrk8Q7m/l74JnEMeH4z2hmUt4WLa9WEvXrmZWULO5qJyaOkqudnOWIfLtBEnh6J6cZ3MvDbAxrp99EiKce/gsvGhRZuVu8puew+8SBdr0KfEpkRUTywMrdPWCIzcItHvBaujgh4hFoIQhs2KM2A/BqFgk2GGkA1SoXkbwwkQhUzQqM39lqrXXUpwUiI3Kl4V7Nb3Zl37iGa2Sn2QvYbQF+RiDJtk1anlArOWHRiJh+KsiNL36ZppYa09DUMaufJHXjN8sE9cc5KlLUrcdMIT3r2J7C1M4rTkhMD9SLo01do3D+nBK3n7wmKb4m9IonPcnRX/S2DsOVPHFTKcd1XpxwVjK2/gigarR323GNtRB1uK3cKAj1etgqXUA3bd332O8rUGQ1pivx4CA2B1j5p6FNXaMaXoOZKgmqT6s+NryFDiP7NGZ66i8MuLA+/ejElV5WBCH4pWDzyxR3F5++IRNXnFt12HHP88tBxkcspzLRq0xo89y3a5pBrWh0rbXX9qyN1+I2uqvHbVfgSJMOcQ/+tsuOJkiy5U3SK7r+Xdn/WYKZX/tqoaKB6/a6n/ShLxea3GJdqnI+uGh+4zanBBnoHD1jw1c84LUFBQUFBQUo/AH9SmgY+OEdcwAAAABJRU5ErkJggg=="), this.onEnterClick = new(C()), this.counts = this.addChild(new a.Text("", {
                            fontFamily: "Avenir-Bold",
                            fontSize: 28,
                            fill: this.game.config.get("colors.primary")
                        })), this.counts.anchor.set(1, .5), this.counts.position.set(-60, 0), this.countsInfinity = this.addChild(new a.Sprite(this.game.loader.getAsset("assets/autoplay-infinity-count.png"))), this.countsInfinity.anchor.set(.5), this.countsInfinity.position.set(-80, 0), this.countsInfinity.visible = !1, this.enterKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Enter), this.enterKey.onPress.add((() => this.onEnterClick.dispatch()))
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
                class Xi extends st {
                    constructor() {
                        super("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAyCAMAAADLPWP6AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABjUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMgBvGIAAAAgdFJOUwDvnzC/EGAg34B/j3DeX0D+vqAhrxFxzq5Q7jHPQQGekWo0dwAAAS9JREFUSMe9lm13gyAMhQWhhFarzq5r127L//+VO8fTF1KBJfmwfATv4fHmGmwaSYWhbaTVOkQ01ssOMrgUSGQe8FZRoNreRWgEfPiswFaBRrVNREbDh5arOiQi4AJu0qP2XD7Q8L39G59X8e00fEHDR6LkVFFS8XXco5yGb1PmGw4Abv9nlLrc+159PUouD2ElfE+IWIsS5WuTnWM5Si/+DWlDLsVWhUobYS5EKdb6iPD+WI/p8sqoYUxl7vu2PGN9AHbpPu4yCNnBHonsuGoV5NN2IrKv1ygVvg//karMTKNUvHhCT41k8C0J+SRGci8QMvOQw5cxksO3yqrggpvEfIv/vZhv7T/7Am5HKV/Gf+DOv4iq3wor5qNB7iV/Zv60WDJOoRHV2U7Tz7n6yC/Xt2DiEf0QXwAAAABJRU5ErkJggg==", 115), (0, o.Z)(this, "name", "ButtonAutoPlayAccept"), this.setBackgroundAlpha(1), this.setBackgroundColor(this.game.config.get("colors.primary")), this.show(!1)
                    }
                    resize() {
                        this.scale.set(this.game.device.desktop ? 1 : 2)
                    }
                }
                class Ki extends st {
                    constructor() {
                        super("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTP///////////////////////////////////////////////////////////////////////////4/JsPUAAAATdFJOUwCQEIBgvyCfQN+gX1CvMH+wz28jjNZzAAAAj0lEQVRYw+3VSxLDIAwEUYMNFonz9f3vmivMUFZVFv0O0AuQYFkAAACABDUkE+U+TsmodrqcotVONzXd7PRNTe92OtT007/HY5cEu4TLRVFmr0yMdVdXJv5p0ROfp1VNF/+TUb+CPnGPx6ao7BIu9x2Kz8svb+o23u30Q02/89KJz5N/IOqD3Rh4AAAAZPgBCZoyk9uDJXUAAAAASUVORK5CYII=", 90, !1), (0, o.Z)(this, "name", "ButtonMenu")
                    }
                    resize() {
                        this.scale.set(this.game.device.desktop ? 1 : 1.6)
                    }
                }
                class qi extends st {
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
                class ts extends a.Sprite {
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
                class es extends a.Container {
                    constructor() {
                        super(), this.interactive = !0
                    }
                }
                class is extends a.Sprite {
                    constructor(t, e) {
                        super(t), this.tint = e
                    }
                }
                class ss extends a.Graphics {
                    constructor(t, e, i, s) {
                        super(), this.beginFill(0), this.drawRect(t, e, i, s), this.endFill()
                    }
                }
                class os extends(J(a.Container)) {
                    constructor(t, e, i) {
                        super(), (0, o.Z)(this, "progress", void 0), (0, o.Z)(this, "minPosition", void 0), (0, o.Z)(this, "maxPosition", void 0), (0, o.Z)(this, "onChange", void 0), this.track = t, this.background = e, this.foreground = i, this.progress = new es, this.progress.mask = this.progress.addChild(new ss(0, 15, this.background.width, this.background.height - 25)), this.minPosition = new a.Point(0, this.track.padding), this.maxPosition = new a.Point(0, this.background.height - this.track.padding), this.onChange = new(C()), this.progress.addChild(this.background), this.progress.addChild(this.foreground), this.addChild(this.progress), this.addChild(this.track), this.track.x = this.progress.width / 2, this.handleProgress(), this.handleTrack()
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
                class ns extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "slider", void 0), (0, o.Z)(this, "onChangeVolume", void 0), this.background = a.Sprite.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAD9CAMAAAAlKrH0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////1/RXMoAAAAddFJOUwCP794Q3zBAIP6/7pCfz75Qr3BvgKCwX2DOrn+eA25H2wAAAetJREFUeNrt3MdawzAQBGDLsmLJPYUUYN//NXELqW7y5DZz5PB/kjYELjtBMJYo3udbY6RNWCTZPo4Cz8RZIW9SZPFyy/6EMhiT22UHS2Qi2xiINUnmnTBSMjNzrlyFMjvmBDtaFzX6ubFGFsaMXHizWKu9zaAWikfCDVIb8ny195414p3XeUQrtNp7/rwoWRX1qJ1lZSrUw/XjuL/ul6zO3XWtAHL7AkwQXPL/dSmCPN4WwyXAl2tiUWPtcmg5g+JC4CCuw8hwXFZzBY4r6m8mASZCPl3zeDskt0NOov43A/Prf80ROdj6b0YQYjmBhhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSM3wRmkFmK5ArXH3CXBbR43ydAbquD9WfB2L3LjtcBvRoP3tnEbtKZdUj+guPwTG/mo2R4/02aAOV4ZQMsWLKyS4zbWvjAkXavphxKSai13+mQDSRDpVVd96dOxGvVwfbeM9zjS9101KVLz9dLhnh+P99ObkU4jjZjCfeOSW4I5NdXUdV5wwLSaUcqVO9TRerCcAbpyQTnXt8Nh3ZX1oOjSg/VoSVMX557M+gelin1716J4r8pL6tpo/f071eH2B6lgKFKZ54AhAAAAAElFTkSuQmCC"), this.background.alpha = .2;
                        var t = new ts(a.Texture.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAMAAABgOjJdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFQUExURUdwTAAAAP39/QAAAPj4+AAAAAAAAAAAAAAAAAAAAH9/f9jY2AAAAAAAAAAAAAAAABUVFQAAAFVVVQ8PDwAAAOLi4vz8/DMzM+Tk5AAAAAAAACoqKn19fYGBgXZ2dvz8/AsLC+np6f///wcHBxISEgAAAPv7+9zc3Pb29unp6ePj48fHx/n5+fj4+PX19c7OzvPz8+Xl5fn5+bu7u/Pz8+np6V5eXpeXl4ODg/z8/AAAABMTE+bm5vr6+qqqqgAAAMPDwwAAAO7u7gAAAFhYWN/f3+7u7lFRUePj4/X19V5eXgAAAAwMDAAAAAAAAFZWVuHh4ff39wAAAN/f3/r6+pGRkUxMTBwcHOnp6fn5+dTU1Pf3987Ozu/v7/j4+AgICPv7+/f39w4ODsPDwwAAAPHx8fb29gAAAPz8/PLy8gAAAA8PDwUFBREREQUFBf///7KU/iMAAABvdFJOUwAD4AblEgwBAgUCFAQHCBQMDQMRDyThBaEWGQZBP0exFr8BJA4okiWVJCUpk5SmFUNHw1fIri4bPsEODWqiYCArFcwRLqR4MrO2KxcUIiMyo7UkgHI4OQkj5HNjirrUHeLmEn0eutYQ0dorECwPKxinWNoAAAFMSURBVDjLfdTVlsIwEAbglEoSqKCL2wLr7s66u7u75f3vNoXlUEqS/3a+kzTpTABwBiJJkhCEgBmIfMdZDyHkPXt1LjHqwYFJUs9su9cNfD2kMW2+hr1gp4e444k4CIw0A0JaumB9CxagpL8mcC9hpyNaBaib8DKIKkLu44oh2f4U7zzhZ9xeBM8IxCqm4mxDIA4MCGDgViDutVaAwkSUIgIoJBRvVDwKhRqka1wIwGsIARi+EYiXIj2LdiQQl/QswNwUiBPTvtOFES4Yjev2r50e5oqJqUq7yvEYB8QSRrU/tGWFCZQx/3/H60tpFlHSql5rw+h2qpkoKcuot7Jhre27wMqeJTvHIamWM+uO+uLcjppsHCldSxxmnvIftPqQvz7d3fJj9+AiOZC7K5R+vz9LhedcALNmG2FTC6vq14/fxF4AeC9EsOn5+ANrFSqZBMENigAAAABJRU5ErkJggg=="), 14);
                        t.width = 33, t.height = 33;
                        var e = new is(a.Texture.from($i), 0);
                        e.width = 12, e.height = 151;
                        var i = new is(a.Texture.from($i), 4914792);
                        i.width = 12, i.height = 151, this.onChangeVolume = new(C()), this.slider = new os(t, e, i), this.slider.position.set(33, 30), this.slider.onChange.add((t => this.onChangeVolume.dispatch(this.convertToVolume(t)))), this.interactive = !0, this.hitArea = new a.Rectangle(0, 0, 78, 200), this.game.interaction.up(this, (() => {
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
                class as extends it {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "ButtonSound"), (0, o.Z)(this, "textureOn", void 0), (0, o.Z)(this, "textureOff", void 0), (0, o.Z)(this, "controls", void 0), (0, o.Z)(this, "volumeControl", void 0), (0, o.Z)(this, "onChangeVolume", void 0), this.textureOn = a.Texture.from(Ji), this.textureOff = a.Texture.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTP////////////////////////////////////////////////////////////////////////////////////VtkI8AAAAVdFJOUwC/zzAQf4DfIO+fX0BwoGCvUJCwj2iqfUcAAAGeSURBVFjD7dfbkoMgDAZg1Higntvl/V91CysQRDsG6cxe5L9yOs6nEwOkQnA4HA6Hw+FwvpBukbL+jtyqd/osVq0W2MvqlYV+Q6WzK2lkVUS3rSudnpBt5Zj+UeqRZrcdLscBrX9cs9gRXeh7gG4/IzuiK/1rk/ApG29DefwZ9eOlyGA7ui62Fgf9xIFAQt0f2pYevVfQ2h1at/BCu8Cd+Xc50CpSo0WN7cXSAyqDJFXEfDI1RraYcdNtz1n8rdcWuU7tbVmFd5jXBlf3B5X+ZLeuDKuvO4H+YE+uDJ0uGJ229hzZugxPR6sEOrDxPjT7CqfS2MaHTA76xG7uF8Tb5jxwtu/mKvEzntq++YbDHfEibYtqbNSP4K6u70/tJfuVstAbdWKbw8bafcr2BO0VW7h1Tjlmuqnc29vgENmTSpoXgtoc2x31ALtuT6SuJtny1pA5OhsPJX4dJb+03T7wpGps1+u3JuN5P05iG8StRENwVyb33InttyHIZ0d/OIy9QBZ7UjIYScMhMG9goRwv1AFcjoLD4XA4HA7n/+UXAfY3Afulub0AAAAASUVORK5CYII="), this.volumeControl = this.addChild(new ns), this.volumeControl.pivot.set(40, 214), this.volumeControl.show(!1), this.onChangeVolume = this.volumeControl.onChangeVolume, this.controls = this.addChild(new st(Ji)), this.controls.onClick.add((() => this.onClick.dispatch())), this.game.interaction.hover(this, (() => this.volumeControl.show(this.game.device.desktop))), this.game.interaction.out(this, (() => this.volumeControl.show(!1))), this.show(this.game.device.desktop)
                    }
                    toggle(t, e) {
                        this.controls.changeIcon(t ? this.textureOn : this.textureOff), this.volumeControl.setVolume(e)
                    }
                    resize() {
                        this.controls.showBackground(!this.game.device.desktop), this.scale.set(this.game.device.desktop ? 1 : 1.6)
                    }
                }

                function hs(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function rs(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? hs(Object(i), !0).forEach((function(e) {
                            (0, o.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : hs(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                var ls = {
                        fontFamily: "Avenir-Medium",
                        fill: 16777215,
                        align: "center"
                    },
                    ds = {
                        fontSize: 4
                    };
                const cs = {
                    Common: {
                        delimiter: ds,
                        default: rs(rs({}, ls), {}, {
                            fontSize: 22
                        }),
                        value: {
                            fontFamily: "Avenir-Bold",
                            fontSize: 32
                        }
                    },
                    Button: {
                        default: rs(rs({}, ls), {}, {
                            fontSize: 28,
                            dropShadow: !0,
                            dropShadowBlur: 4,
                            dropShadowColor: "black",
                            dropShadowAngle: Math.PI / 2,
                            dropShadowDistance: 2
                        })
                    },
                    FreeSpins: {
                        delimiter: ds,
                        default: rs(rs({}, ls), {}, {
                            fontSize: 22
                        }),
                        value: {
                            fontSize: 32,
                            fontFamily: "Avenir-Bold",
                            fill: 16777215
                        }
                    }
                };

                function us(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function ps(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? us(Object(i), !0).forEach((function(e) {
                            (0, o.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : us(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class gs extends It {
                    constructor() {
                        super("", ps(ps({}, cs.Common), {}, {
                            default: ps(ps({}, cs.Common.default), {}, {
                                fill: K.config.get("colors.primary"),
                                fontFamily: "Avenir-Bold"
                            }),
                            value: ps(ps({}, cs.Common.value), {}, {
                                fontSize: 66
                            })
                        }))
                    }
                    update(t) {
                        this.text = K.i18n.t("ControlsDesktopTotalWin", K.i18n.currency({
                            withBrace: !0
                        }), K.helpers.toMoney(t))
                    }
                }
                class ms extends(J(a.Container)) {
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
                class As extends ms {
                    updateFreeLeft(t) {}
                    updateBonusLeft(t) {}
                }
                class vs extends st {
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

                function bs(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function ws(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? bs(Object(i), !0).forEach((function(e) {
                            (0, o.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : bs(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class ys extends vs {
                    constructor(t) {
                        super(), (0, o.Z)(this, "betLevel", void 0), (0, o.Z)(this, "betLevelText", void 0), (0, o.Z)(this, "updateAll", (() => {
                            this.updateText()
                        })), (0, o.Z)(this, "updateText", (() => {
                            var t = this.game.helpers.toMoneySS(this.betLevel.toCoins());
                            this.betLevelText.text = this.game.i18n.t("ControlsDesktopBet", this.game.i18n.currency({
                                withBrace: !0
                            }), t)
                        })), this.betLevel = t, this.betLevelText = this.addChild(new It("", ws(ws({}, cs.Common), {}, {
                            default: ws(ws({}, cs.Common.default), {}, {
                                align: "left"
                            })
                        }))), this.betLevelText.anchor.set(0, .5), this.betLevelText.position.set(70, 3), this.onClick.add((() => {
                            this.game.action.emit("clickMaxBet")
                        })), this.game.action.on("state:ready_enter", (() => {
                            !si.isBasic() || this.game.autoPlay.enabled || this.game.freeRound.enabled || this.enable()
                        })), this.game.action.on("state:spin_enter", (() => {
                            this.disable()
                        })), this.disable()
                    }
                }
                class fs extends a.Sprite {
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
                                var i = K.device.desktop ? "pointerover" : "pointerdown";
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

                function Ss(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function xs(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Ss(Object(i), !0).forEach((function(e) {
                            (0, o.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Ss(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                const ks = function(t) {
                    var e = new It("", xs(xs({}, t), {}, {
                        default: xs(xs({}, t.default), {}, {
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
                            e.text = K.i18n.t("ControlsDesktopFreeRoundLeft", t)
                        }
                    }
                };
                const Bs = function(t) {
                    var e = new It("", t);

                    function i(t) {
                        e.text = K.i18n.t("ControlsDesktopFreeRoundWin", K.i18n.currency({
                            withBrace: !0
                        }), t > 0 ? K.helpers.toMoney(t) : "")
                    }
                    return e.visible = !1, e.anchor.x = .5, K.action.on("update:win", (function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "regular";
                        i("regular" === e ? K.wallet.totalCoins - K.wallet.progressCoinsWin : K.wallet.totalCoins)
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

                function Cs(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function Ps(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Cs(Object(i), !0).forEach((function(e) {
                            (0, o.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Cs(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class Ts extends It {
                    constructor() {
                        super("", Ps(Ps({}, cs.Common), {}, {
                            default: Ps(Ps({}, cs.Common.default), {}, {
                                align: "right"
                            })
                        }))
                    }
                    update(t) {
                        t >= 0 && (K.action.emit("balance_updated", t), this.text = K.i18n.t("ControlsDesktopBalance", K.i18n.currency({
                            withBrace: !0,
                            withSpace: !0
                        }), K.helpers.toMoney(t)))
                    }
                }
                class Es extends It {
                    constructor() {
                        super("", cs.FreeSpins)
                    }
                    change(t) {
                        this.text = 0 === t ? K.i18n.t("ControlsDesktopBonusLast") : K.i18n.t("ControlsDesktopBonusLeft", t), h.kX.to(this, .3, {
                            pixi: {
                                scale: 1.3
                            },
                            yoyo: !0,
                            repeat: 1
                        })
                    }
                    hide() {
                        this.text = ""
                    }
                }
                class Zs extends It {
                    constructor() {
                        super("", cs.FreeSpins), this.visible = !1
                    }
                    change(t) {
                        this.text = K.i18n.t("ControlsDesktopFreeSpinsPlayed", t)
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

                function Rs(t) {
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
                class Fs extends It {
                    constructor() {
                        super("", Rs(Rs({}, cs.Common), {}, {
                            default: Rs(Rs({}, cs.Common.default), {}, {
                                fill: K.config.get("colors.primary"),
                                fontFamily: "Avenir-Bold"
                            }),
                            value: Rs(Rs({}, cs.Common.value), {}, {
                                fontSize: 66
                            })
                        })), this.visible = !1
                    }
                    update(t) {
                        this.text = K.i18n.t("ControlsDesktopTotalWin", K.i18n.currency({
                            withBrace: !0
                        }), K.helpers.toMoney(t))
                    }
                }
                class Ms extends It {
                    constructor() {
                        super("", cs.Common), this.anchor.x = .5
                    }
                    update(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        this.text = K.i18n.t("ControlsDesktopWin", K.i18n.currency({
                            withBrace: !0
                        }), t > 0 || e ? K.helpers.toMoney(t) : "")
                    }
                }
                class Is extends As {
                    constructor() {
                        var t;
                        super(), t = this, (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "buttonAccept", void 0), (0, o.Z)(this, "buttonAutoPlay", void 0), (0, o.Z)(this, "buttonMaxBet", void 0), (0, o.Z)(this, "buttonMenu", void 0), (0, o.Z)(this, "buttonQuickSpin", void 0), (0, o.Z)(this, "buttonSound", void 0), (0, o.Z)(this, "buttonSpin", void 0), (0, o.Z)(this, "freeRoundLeft", void 0), (0, o.Z)(this, "freeRoundTotalWin", void 0), (0, o.Z)(this, "textBalance", void 0), (0, o.Z)(this, "textFreeSpinPlayed", void 0), (0, o.Z)(this, "textFreeSpinTotalWin", void 0), (0, o.Z)(this, "textWin", void 0), (0, o.Z)(this, "textBonusLeft", void 0), (0, o.Z)(this, "textBonusTotalWin", void 0), (0, o.Z)(this, "winAnimation", void 0);
                        var e = this.game.loader.getAsset("controls");
                        this.background = a.Sprite.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAACECAMAAABGSsZsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAC9UExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOvSc8wAAAA/dFJOUy0n8xNrIrX8ThhmXh1JcOLVMtmbsO7RyXpF3erNWeY2OlOFwaaijYnF95S+gbkFYg4+qpF0CEF+C5ifAXdWrYb9fjEAAA3OSURBVHja7JbZchrJEkCLQHLYYokg4AEeCJCMUIQ9A1zbWkDA/3/W7a7KWnpDIInqkXWOoLuWrMw8kmNq1DMAAABERy2ek5/0kT7NS/OsR3rLzM3us5k/h6EBkiQzkEgzkKQ25WKRK2P7sNuSpXhSrz8H4cFbhxsWru1nSWiz+DX88ccff/zxj+6vFgAAABAddX+/uNffRfq+t49kpodCMkv3F/d21R24X/jVhVlbhEEurw25D6MX7ukKBQO3J+VlZ1HowayaFu2q5JbNMLXect3jjz/++OOPfw3+6h4AAACio54AAAAgOupplb5Wq5V+JrOVGz/p6ZNZe9KjNGJlN3WojtUh5qQsyMei8wTPldQKXlJkJbWCDXcyfD+5DszM1Lc1bV8+UixWtgfXIP74448//vjX4K9WAAAAEB3VTB7Npv4202+6KK/02dQbemu1ykTpkT5pDjR91Modabqhi2r6wyvZaQYnbC6p5dIGH8nmMviObO+uUnNlq8jplW3HJcEff/w/sP8Kf/79f1h/1QQAAIDocAEDAADUcQF/exXNwiC/ULlRka752g6OCG1+e2/wxx9//PHH/23+6hsAAABER1/A7cJyuyS0NKpdHtw+XLV90ma7Mqx9Qs2TCuCPP/7444//ef1VGwAAAKLDBQwAAFDHBXx52b70tINZsN7W6+12YV0OtO2e7NrVy0zqzKxdvh0WMovppC0lfJDkb9uDbWmmbbNfBjlsyuxSWWP4448//vjjH8dfXQIAAEB0znsBNz75bxd//PHHH3/8qy7gBgAAAESHCxgAAKCOCzjFXMMqnemvjOz9rENk0+ybUybU7DXcSRPkVyRGAhv2qImSQkqSNpRvQ5K4Mg2/Lf/boHz6ooZdtnltjG/K/wLwxx9//PHHvwZ/15zzyNOwGna/EZ4qxlfkaqjsL0OFvyF1IGWjolD4h8vsNsK+w0mjWAB//PHHH3/86/AHAACAOuipXi99mnFm0NOzniz4XXcyePfKEoejnk+tp71cgsJUDxOCREG1Xi9Tt9fLvno9n0KevbCl0Ax//PHHH3/84/v3AAAAIDrFC3jiX5PDZydHV5m8sHEg08SHTF7OPnlLl/jjjz/++OMfzV9NzkBvUlfWXkXkeTrCH3/88ccf/9dW0xfwVCb59wdg+h794o8//vjjj39sfzWdTEuZVEwrws/KxNadHG6yusFJdeP4448//vjjX4O/mgIAAEB01P/egWlxZZrZnvrRNB8/Lc81Paneyw3ppqYnZ8Iff/zxxx//s/i/ywUMAAAAp6EeAAAAIDpq9DAajdJRMpC1kV4xq+Y1kk1ZTmdm3X9GPip82uPh4XDHx42KVR5cbyNbUwpJcw+uT7fiPUbugF9yjg8PQRD+YRD+/PvHH3/8Y/irEQAAAETHXMAd8zEvS0d/9VqnIxudUfDq+G9Hvn43COn4MF8grNXpBGWlYjDt+GyZLjuug2JvQeKOje10wpzhafzxxx9//PGP7K86AAAAEB0uYAAAgDou4K+aztf/OJ0PnR5//PHHH3/8c6ivAAAAEP8Cvs5MrwsB1xXrB85cn1D/uuxl964PpgzPvNDl9fWR3eOPP/74449/HH91DQAAANHRF/DupCO71y4duWn2d3a0C2Ynpjk2DH/88ccff/xj+6sdAAAAREeNk8fYsTOPYMVNd2O7vJPFnT/i13e5sy5il4kd73bZbR+Vb8eF7vyqtLALcmU2d5kEGR97zPWPP/74448//vH91RgAAACio1qt8bilSd/mawbpM/2Yt45o2V3zkkPBNIMPHLd8DptuHMbZabgjrdizbnUszblpvqgtnUnV8mmMhgv47P4t/PHHn//+8fevwV+1AAAAIDr6Al6a77K1XJqHnpsft5PSctuCHZtNc96+3Y/eDEdScWmPmxXJbxNKWqmvF3yAOxguL/3JpW+i5ZzCekHs3+S/xB9//D+tfwv/D+avlgAAABAddZU8rq7Sj/4mz6Ws+JcZmTAJlTAZ6PfVlZ27iU8sU5PUZV26PSl35crZRX/Gd+HS2+PSq+t+KT1IOtfJlbd1O/jjjz/++ONfg7+6AgAAgOhwAQMAANRxAV8EXF2chTOl/TCN4o8//vjjj38BdQEAAADR8RdwV39eSbcb5gkzSdpC6u5FLq576Fg33O9eFIq90PkxYvjjjz/++OMf0V91AQAAIDpcwAAAAHVcwH8M3eSnQPlS+pFvsN7NnermDpt5cK5bGqenLiR4lfRS1ma3MOyanrt/qmTwxx9//PHHP76/+nM021dv/pfYnuck/vjjjz/++J+E2gIAAEB01FCz1R/91dOtW07GWzfXO26c7uufzJrfy4aHKXRSV2cbbsonzbo1Uaa879A3GlaVYN9X7lTGzhptt0P88cf/I/kP+fvj/9f4qyEAAABERz0+Pg6TH80wGSXfdDocylMwMUP7GJqFoTllj8nb5vJJTZQEBuGSV0IkoyzrEpLFV3x8DJ6+A9tGcebtXPp8k/jjjz/++OMf3V89AgAAQHTUPwAAABAdLmAAAIA6LuCbm5t/bj43+OOPP/744x+9troBAACA6Ki7kJu7PDclW8Wo0jM3x++ekPwYXp0Of/zxxx9//OP45y5gAAAAiIKaz+/mGe4Kg4r9/Pqd273LR92VnatKVH3CFnmhp7vC7t2hcvjjjz/++OMf3T+9gAEAACA2av67yNw+5r/n4VIuonphPi+PCqPn2f15OJwXY0vqzA+UmLuX6WU+L2z8ruwRf/zxxx9//M/sP1e/6+fHX1wNf/zxxx9//EtRPwAAACA6XMAAAAB1XMBrAAAAiM0P1e/31/IV1utklm6mL7/az0zSbf1Ow/UR+eiZHDbnbS2Xbm2SrU2wLb729V2ivg2y376UtXXlqBTqr9e+5bV05DoPNNfu4Bp//PHHH3/8a/Bfqz4AAABERy7gzUY+6dh8LG5DxsmmhOmovnvp/Uxys5lG6qOSS1JlA01KqdOXc5t+Pwy2Z4KirnXJbDuUnBt3ahOU8EGbICX++H8u/1C4Vv/NJ/fn3//n9VcbAAAAiI66PYbN7RnYVMzOUuw9W8Uff/zxxx//NydVtwAAABAddTubzdJvBbflawdOBMduj0h2LG85+4IM/vjjjz/++Mf2v1UzAAAAiI76Vc3suLXZC0dKg2fha1aMmlUWnZVmmx3VfbH0L/zxx/8T+v/i749//f7uAt4HUfvCisz2hZXSyamUHN7vTz/zmnJ7/PHHH3/88a/DX+0BAAAgOmpQwj73zm/vw8j9wZh9xd5e/5gwF5o5Y1Pvs6VM4mwL7r0P02SLZ5z2VWr4448//vjjH8dfDQAAACA66svgS4J+OAZmOsg+zHvgRno2SJ6D3MCkGHyR1S/Bqj1n1iTIV3FtyGEJc5NBprXg5GCQXzKrYXTG0nWGP/74448//jX4JxcwAAAARIcLGAAAoI4L+F8AAACIDhcwAABAHRfwTwAAAIgNFzAAAEAdqO8Zfn5/A286/F78rO80/vjj/6H9v/P3/397ZbAbKQwD0IhLjyAkQIKIy1zo///gQhLHDjDbkVbN7HbfGwpJ7Dh+6iH419x8voABAACgBu6xvcLjlbTH3ecPeLxe4/Fq/HH2wR9//PHHH/83+D/cBgAAANVxU2SbbnmybNafZbzGVuzfikGObWV4e3bwlle3r056VRR//PHHH3/8v8U/X8AAAABQEecTk/dmeIRkcbLhqcyScZxMNiVPTGU7txHJ1UOlZEwrSsSM6dT0ZSZF/E37Uz5/wh9//PHHH/83+OsFDAAAAPXYL+Bx9OPxjq9jlp7xSBjj4ujT2pEsG2QiOYnTks+Vc9CM9QhvNozFob5c1R6lT4l6r917Pc2nQNzjiz7wxx9//PHH/w3+3o0AAABQHdd149jJqxOO6R6N3y4MxjiI0TjJm2JaN3ZpPaSMOTvVPL1GPcYsd6mSFJOCGg+H2z5yUDakpHSCdGPry4HSBP74448//vhX9T8uYAAAAKjNfgH3fZ71+2+f9538uvAXB5LXh1GaxbGs2kAK64buXE23aj99IlfoUlqq30sfvcR77cluj530Redd0bOUwh9//PHHH//q/p3rAQAAoDrhAp71Lz06Sy/9zpou4TmuziZHkfxUM6fJGedNucos37m3HcyzOdycaQ7MHV6YzXJZF3/88ccff/xr+rsZAAAAqnNzAbf6bXVmA+1Lpc9pba7ahvGlTJvWylPt7jb9Tg3dzZ639ZUD/vjjjz/++H+/v2sBAACgOlzAAAAA77iA17VdL+xLbSsjXbtZae2W42nXy45L7Wv8LrX93dnrF7UvRS4lcqv444//T/Vf+f/z//97/Y8LGAAAAGrjlmVZ5UmvYiGuyHA1KQXr6bPeBG9SV/N3qXk6X+PrYjoxs1WOvpy+angvuZYt4o8//vjjj39t/3ABAwAAQGXcMgzDEl5DZomv5QgcT47qdDGpS/6FR1MXjdvyMW6qXpJkY6oQqy7lieduzaT8Ltpw6rIshT/++OOPP/7V/Rc3AAAAQHXc0AzHc7z2XxP+lBBoYjTOm7AQE8OeIYYH2Z7ieVkjYSUWMcfkBDvSV6qW6urBKWVIOU0jkdRWLpcOldXcRdNow/jjjz/++ONf139wDQAAAFSHCxgAAOAdF/AnAAAA1IYLGAAA4B24j3+Ez4//G/zxxx9//H+WlvsAAACA6nABAwAAvIFf+31ecRZFRK0AAAAASUVORK5CYII="), this.background.alpha = .4, this.background.anchor.set(0, 1), this.background.position.set(0, this.game.viewport.height), this.buttonMenu = new Ki, this.buttonMenu.position.set(77, 1013), this.buttonMaxBet = new ys(this.game.betLevel), this.buttonMaxBet.position.set(213, 1013), this.buttonAutoPlay = new Yi, this.buttonAutoPlay.position.set(833, 1013), this.buttonQuickSpin = new qi, this.buttonQuickSpin.position.set(1084, 1014), this.buttonSound = new as, this.buttonSound.position.set(1840, 1012), this.buttonSpin = function() {
                            var t = new(C()),
                                e = new fs({
                                    textures: {
                                        normal: null,
                                        hover: null,
                                        press: null,
                                        disable: null
                                    }
                                });
                            e.scale.set(.9), e.hitArea = new a.Circle(90, 90, 85), e.name = "buttonSpin";
                            var i = K.keyboard.register(K.keyboard.KEY_CODE.Space);
                            i.onPress.add(o), i.disable();
                            var s = new Oi(K.loader.getAsset("effectSpin"));

                            function o() {
                                t.handlers(!0) ? t.dispatch() : (K.store.get("spin:isSpin", !1) || s.play("press", !1), K.action.emit("clickSpin"))
                            }

                            function n() {
                                i.disable(), e.visible = !1
                            }
                            return e.addChild(s), s.play("active"), e.onClick.add(o), e.onHover.add((() => {
                                s.play("hover")
                            })), K.action.on("spin:fast", (function() {
                                s.play("inactive", !1), e.disable(), i.disable()
                            })), K.action.on("state:ready_enter", (function() {
                                i.enable(), si.isFreespin() || si.isBonus() || (e.visible = !0)
                            })), K.action.on("state:finish_exit", (function() {
                                si.isFreespin() || si.isBonus() || (s.play("active", !0), e.enable(), i.enable())
                            })), K.action.on("bonus:start", n), K.action.on("free:restore", n), K.action.on("bonus:restore", n), K.action.on("free:stop", (() => {
                                e.visible = !0, e.enable(), i.enable()
                            })), K.action.on("bonus:stop", (() => {
                                e.visible = !0, e.enable(), i.enable()
                            })), K.action.on("bonus:select_stop", (() => {
                                e.visible = !0, e.enable(), i.enable()
                            })), {
                                container: e,
                                hide() {
                                    e.visible = !1
                                },
                                show() {
                                    e.visible = !0
                                },
                                press(e) {
                                    i.enable(), t.once(e)
                                },
                                enable() {
                                    e.enable(), i.enable()
                                },
                                disable() {
                                    e.disable(), i.disable(), t.handlers(!0) && t.detachAll()
                                }
                            }
                        }(e.btn_spin_active, e.btn_spin_hover, e.btn_spin_press, e.btn_spin_inactive), this.buttonSpin.container.position.set(878, 923), this.buttonAccept = new Xi, this.buttonAccept.position.set(958, 1013), this.textWin = new Ms, this.textWin.anchor.x = .5, this.textWin.position.set(1400, 980), this.winAnimation = new Oi(this.game.loader.getAsset("assets/images/effects/coinsCollect/skeleton.json")), this.winAnimation.position.set(1400, 980), this.textBalance = new Ts, this.textBalance.anchor.x = 1, this.textBalance.position.set(1760, 980), this.freeRoundLeft = ks(cs.Common), this.freeRoundLeft.container.position.set(1700, 1054), this.freeRoundTotalWin = Bs(cs.Common), this.freeRoundTotalWin.container.position.set(1400, 980), this.textFreeSpinPlayed = new Zs, this.textFreeSpinPlayed.visible = !1, this.textFreeSpinPlayed.anchor.x = .5, this.textFreeSpinPlayed.position.set(600, 980), this.textFreeSpinTotalWin = new Fs, this.textFreeSpinTotalWin.visible = !1, this.textFreeSpinTotalWin.anchor.x = .5, this.textFreeSpinTotalWin.position.set(960, 965), this.textBonusLeft = new Es, this.textBonusLeft.visible = !1, this.textBonusLeft.anchor.x = .5, this.textBonusLeft.position.set(640, 980), this.textBonusTotalWin = new gs, this.textBonusTotalWin.visible = !1, this.textBonusTotalWin.anchor.x = .5, this.textBonusTotalWin.position.set(960, 955), this.addChild(this.background), this.addChild(this.textFreeSpinPlayed), this.addChild(this.textFreeSpinTotalWin), this.addChild(this.buttonMenu), this.addChild(this.buttonMaxBet), this.game.config.get("autoPlay.available", !0) && this.addChild(this.buttonAutoPlay), this.addChild(this.buttonQuickSpin), this.addChild(this.buttonSound), this.addChild(this.buttonSpin.container), this.addChild(this.buttonAccept), this.addChild(this.textWin), this.addChild(this.winAnimation), this.addChild(this.textBalance), this.addChild(this.freeRoundTotalWin.container), this.addChild(this.freeRoundLeft.container), this.addChild(this.textBonusLeft), this.addChild(this.textBonusTotalWin), this.textWin.update(this.game.wallet.coins), this.textBalance.update(this.game.wallet.balance), this.game.freeRound.onStart.once((t => {
                            this.textBalance.visible = !1, this.freeRoundLeft.updateLeft(t), this.freeRoundLeft.show(), si.isFreespin() || si.isBonus() || (this.textWin.visible = !1, this.freeRoundTotalWin.updateTotalWin(this.game.wallet.totalCoins), this.freeRoundTotalWin.show())
                        })), this.game.freeRound.onFinish.once((() => {
                            this.freeRoundLeft.hide(), this.freeRoundTotalWin.hide(), this.textWin.visible = !0, this.textWin.update(this.game.wallet.totalCoins, !0), this.textBalance.visible = !0, this.textBalance.update(this.game.wallet.balance)
                        })), this.game.action.on("state:spin_enter", (() => {
                            this.game.autoPlay.enabled || this.buttonAutoPlay.disable(), si.isBonus() || si.isFreespin() || (this.freeRoundLeft.updateLeft(this.game.freeRound.left - 1), this.textBalance.update(this.game.wallet.balance - this.game.betLevel.toCoins()))
                        })), this.game.action.on("free:restore", (() => {
                            this.buttonAutoPlay.visible = !1, this.buttonAutoPlay.disable(), this.textFreeSpinTotalWin.update(this.game.wallet.totalCoins), this.textFreeSpinTotalWin.visible = !0, this.textFreeSpinPlayed.visible = !0, this.game.freeRound.enabled && (this.freeRoundTotalWin.container.visible = !1, this.textWin.visible = !0), this.game.device.desktop && this.buttonQuickSpin.position.set(1233, 1014)
                        })), this.game.action.on("free:stop", (() => {
                            this.buttonAutoPlay.visible = !0, this.textBalance.update(this.game.wallet.balance), this.textFreeSpinTotalWin.visible = !1, this.textFreeSpinTotalWin.text = "", this.textFreeSpinPlayed.visible = !1, this.textFreeSpinPlayed.text = "", this.textWin.update(this.game.wallet.totalCoins, !0), this.game.freeRound.enabled && (this.freeRoundTotalWin.container.visible = !0, this.textWin.visible = !1), this.game.device.desktop && this.buttonQuickSpin.position.set(1084, 1014)
                        })), this.game.action.on("state:setup_enter", (() => {
                            (si.isBonus() || si.isFreespin()) && (this.y = this.y + this.height + 100, this.buttonMenu.disable(), this.buttonSpin.disable(), this.buttonSpin.hide(), this.buttonAutoPlay.disable())
                        })), this.game.action.on("state:finish_exit", (() => {
                            si.isBasic() && (this.game.autoPlay.enabled || this.buttonMenu.enable(), this.buttonAutoPlay.enable())
                        })), this.game.autoPlay.on("disable", (() => {
                            this.buttonAutoPlay.disable()
                        })), this.game.action.on("free:select_start", (() => {
                            this.textWin.update(0), h.kX.fromTo(this, .5, {
                                pixi: {
                                    y: this.y + this.height
                                }
                            }, {
                                pixi: {
                                    y: 0
                                }
                            })
                        })), this.game.action.on("free:select_stop", (() => {
                            h.kX.fromTo(this, .5, {
                                pixi: {
                                    y: this.y + this.height
                                }
                            }, {
                                pixi: {
                                    y: 0
                                }
                            })
                        })), this.game.action.on("free:updateLeft", (t => {
                            this.textFreeSpinPlayed.change(t)
                        })), this.game.action.on("reward:reset", (() => {
                            this.textWin.update(0)
                        })), this.game.action.on("state:ready_exit", (() => {
                            this.textWin.update(0)
                        })), this.game.action.on("update:win", (t => {
                            this.textWin.update(t), 0 !== t && "init" !== this.game.store.get("server:action") && (this.winAnimation.play("animation"), this.game.action.emit("sound:coinz")), this.textBonusTotalWin.update(this.game.wallet.totalCoins - (this.game.store.get("free:winExtra", 0) === this.game.wallet.totalCoins ? 0 : this.game.store.get("free:winExtra", 0)))
                        })), this.game.action.on("update:bonusWin", (() => {
                            this.textWin.update(0), this.textBonusTotalWin.update(this.game.wallet.totalCoins)
                        })), this.game.action.on("update:totalWin", (t => {
                            (this.game.store.get("free:isFree", !1) || this.game.store.get("free:isEnd", !1)) && this.textFreeSpinTotalWin.update(t)
                        })), this.game.action.on("update:balance", (function(e) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                s = si.isFreespin();
                            s || t.textBalance.update(t.game.wallet.balance - (K.store.get("free:isStart", !1) ? 0 : i))
                        })), this.game.action.on("bonus:restore", (() => {
                            var t = this.game.store.get("bonus:left", 0);
                            this.buttonAutoPlay.visible = !1, this.buttonAutoPlay.disable(), this.buttonMaxBet.disable(), this.buttonMenu.disable(), this.textBonusLeft.visible = !0, this.updateBonusLeft(t), this.textBonusTotalWin.update(this.game.wallet.totalCoins - this.game.wallet.bonusCoins), this.textBonusTotalWin.visible = !0, this.game.freeRound.enabled && (this.freeRoundTotalWin.container.visible = !1), this.game.device.desktop && this.buttonQuickSpin.position.set(1233, 1014)
                        })), this.game.action.on("bonus:start", (() => {
                            var t = this.game.store.get("bonus:left", 0);
                            this.textWin.update(0), this.buttonAutoPlay.visible = !1, this.buttonAutoPlay.disable(), this.buttonMaxBet.disable(), this.buttonMenu.disable(), this.textBonusLeft.visible = !0, this.updateBonusLeft(t), this.textBonusTotalWin.update(this.game.wallet.totalCoins), this.textBonusTotalWin.visible = !0, this.game.freeRound.enabled && (this.freeRoundTotalWin.container.visible = !1), this.game.device.desktop && this.buttonQuickSpin.position.set(1233, 1013)
                        })), this.game.action.on("bonus:stop", (() => {
                            this.buttonAutoPlay.visible = !0, this.textBonusLeft.visible = !1, this.textBonusLeft.text = "", this.textBonusTotalWin.visible = !1, this.textBonusTotalWin.text = "", this.game.freeRound.enabled || this.buttonMaxBet.enable(), this.buttonMenu.enable(), this.textWin.update(this.game.wallet.totalCoins, !0), this.textBalance.update(this.game.wallet.balance), this.game.freeRound.enabled && (this.freeRoundTotalWin.container.visible = !0, this.textWin.visible = !1), this.game.device.desktop && this.buttonQuickSpin.position.set(1084, 1014)
                        })), this.game.action.on("bonus:select_start", (() => {
                            this.buttonSpin.hide(), this.buttonSpin.disable(), this.buttonQuickSpin.enable(), this.textWin.visible = !0, h.kX.fromTo(this, .5, {
                                pixi: {
                                    y: this.y + this.height
                                }
                            }, {
                                pixi: {
                                    y: 0
                                }
                            })
                        })), this.game.action.on("bonus:select_stop", (() => {
                            this.buttonSpin.show(), this.buttonSpin.enable(), this.freeRoundTotalWin.updateTotalWin(this.game.wallet.totalCoins), this.game.freeRound.enabled && (this.freeRoundTotalWin.container.visible = !0, this.textWin.visible = !1), h.kX.fromTo(this, .5, {
                                pixi: {
                                    y: this.y + this.height
                                }
                            }, {
                                pixi: {
                                    y: 0
                                }
                            })
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
                        this.buttonAutoPlay.disable(), this.buttonMenu.disable(), this.buttonMaxBet.disable(), this.buttonSpin.disable(), this.buttonQuickSpin.disable()
                    }
                    onPopupHide() {
                        this.buttonAutoPlay.enable(), this.buttonMenu.enable(), this.buttonMaxBet.enable(), this.buttonSpin.enable(), this.buttonQuickSpin.enable()
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
                        h.kX.fromTo(this, .5, {
                            pixi: {
                                y: this.y
                            }
                        }, {
                            pixi: {
                                y: this.y + this.height + 100
                            }
                        })
                    }
                    updateBonusLeft(t) {
                        this.textBonusLeft.change(t)
                    }
                }
                class Ws extends a.Sprite {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16777215,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .75;
                        super(a.Texture.WHITE), this.height = 4, this.tint = t, this.alpha = e
                    }
                }

                function Ds(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function Ls(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Ds(Object(i), !0).forEach((function(e) {
                            (0, o.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Ds(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                var Ns, _s;
                ! function(t) {
                    t.Bet = "bet", t.Win = "win", t.Balance = "balance", t.FreeLeft = "freeLeft", t.FreePlayed = "freePlayed", t.TotalWin = "totalWin", t.FreeRoundLeft = "freeRoundLeft", t.BonusLeft = "bonusLeft"
                }(Ns || (Ns = {})),
                function(t) {
                    t.Free = "free", t.Normal = "normal", t.Bonus = "bonus"
                }(_s || (_s = {}));
                var Us = {
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
                    js = Ls(Ls({}, Us), {}, {
                        value: Ls(Ls({}, Us.value), {}, {
                            fill: 16777215
                        })
                    });
                class zs extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "state", void 0), (0, o.Z)(this, "textBet", void 0), (0, o.Z)(this, "textWin", void 0), (0, o.Z)(this, "textBalance", void 0), (0, o.Z)(this, "textFreeRound", void 0), (0, o.Z)(this, "textFree", void 0), (0, o.Z)(this, "textTotalWin", void 0), (0, o.Z)(this, "textBonus", void 0), (0, o.Z)(this, "delimiter", void 0), this.state = _s.Normal, this.textBet = new It("", Ls(Ls({}, Us), {}, {
                            default: Ls(Ls({}, Us.default), {}, {
                                align: "left"
                            })
                        })), this.textBet.anchor.set(0, 0), this.textWin = new It("", Us), this.textWin.anchor.set(.5, 0), this.textBalance = new It("", Ls(Ls({}, Us), {}, {
                            default: Ls(Ls({}, Us.default), {}, {
                                align: "right"
                            })
                        })), this.textBalance.anchor.set(1, 0), this.textFreeRound = new It("", Ls(Ls({}, Us), {}, {
                            default: Ls(Ls({}, Us.default), {}, {
                                align: "center",
                                wordWrap: !0,
                                wordWrapWidth: 300
                            })
                        })), this.textFreeRound.anchor.set(1, 1), this.textFree = new It("", Ls(Ls({}, js), {}, {
                            default: Ls(Ls({}, js.default), {}, {
                                fontSize: 30,
                                wordWrapWidth: 340
                            })
                        })), this.textFree.anchor.set(0, 1), this.textTotalWin = new It("", Ls(Ls({}, js), {}, {
                            default: Ls(Ls({}, js.default), {}, {
                                fontFamily: "Avenir-Bold",
                                fill: this.game.config.get("colors.primary"),
                                fontSize: 30,
                                wordWrapWidth: 300
                            }),
                            value: Ls(Ls({}, js.value), {}, {
                                fill: this.game.config.get("colors.primary")
                            })
                        })), this.textTotalWin.anchor.set(.5, 1), this.textBonus = new It("", Ls(Ls({}, js), {}, {
                            default: Ls(Ls({}, js.default), {}, {
                                fontSize: 27,
                                wordWrapWidth: 340
                            })
                        })), this.textBonus.anchor.set(0, 1), this.delimiter = new Ws(16777215, .5), this.addChild(...[this.textBet, this.textWin, !this.game.config.get("balanceHide", !1) && this.textBalance, this.textFreeRound, this.textFree, this.textTotalWin, this.textBonus, this.delimiter].filter(Boolean)), this.game.freeRound.onStart.once((() => {
                            this.textBalance.visible = !1, this.textFreeRound.visible = !0
                        })), this.game.freeRound.onFinish.once((() => {
                            this.textBalance.visible = !0, this.textFreeRound.visible = !1
                        }))
                    }
                    resize() {
                        var t = this.state === _s.Free,
                            e = this.state === _s.Bonus;
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
                            case Ns.Bet:
                                var e = this.game.helpers.toMoneySS(t.value),
                                    i = this.game.i18n.t("StatusBarMobileBet", this.game.i18n.currency({
                                        withBrace: !0
                                    }));
                                this.textBet.text = "".concat(i, "<value>").concat(e, "</value>");
                                break;
                            case Ns.Win:
                                var s = this.game.i18n.t("StatusBarMobileWin", this.game.i18n.currency({
                                    withBrace: !0
                                }));
                                t.value > 0 || t.disableZeroCheck ? this.textWin.text = "".concat(s, "<value>").concat(this.game.helpers.toMoney(t.value), "</value>") : this.textWin.text = s;
                                break;
                            case Ns.Balance:
                                var o = this.game.i18n.t("StatusBarMobileBalance", this.game.i18n.currency({
                                    withBrace: !0,
                                    withSpace: !0
                                }));
                                this.textBalance.text = "".concat(o, "<value>").concat(this.game.helpers.toMoney(t.value), "</value>"), this.game.action.emit("balance_updated", t.value);
                                break;
                            case Ns.FreeLeft:
                                var n = 0 === t.value;
                                this.textFree.text = n ? this.game.i18n.t("StatusBarMobileFreeLast") : this.game.i18n.t("StatusBarMobileFreeLeft", t.value);
                                break;
                            case Ns.FreePlayed:
                                var a = this.game.i18n.t("StatusBarMobileFreePlayed");
                                this.textFree.text = "".concat(a, "<value>").concat(t.value, "</value>");
                                break;
                            case Ns.FreeRoundLeft:
                                var h = this.game.i18n.t("StatusBarMobileFreeRoundLeft");
                                this.textFreeRound.text = "".concat(h, "<value>").concat(t.value, "</value>");
                                break;
                            case Ns.BonusLeft:
                                var r = 0 === t.value,
                                    l = -1 === t.value;
                                this.textBonus.text = l ? "" : r ? this.game.i18n.t("StatusBarMobileBonusLast") : this.game.i18n.t("StatusBarMobileBonusLeft", t.value);
                                break;
                            case Ns.TotalWin:
                                var d = this.game.i18n.t("StatusBarMobileTotalWin", this.game.i18n.currency({
                                    withBrace: !0
                                }));
                                this.textTotalWin.text = "".concat(d, "<value>").concat(this.game.helpers.toMoney(t.value), "</value>")
                        }
                        this.resize()
                    }
                    changeState(t) {
                        this.state = t, t === _s.Free ? (this.textFree.visible = !0, this.textTotalWin.visible = !0, this.textWin.visible = !0, this.textBonus.visible = !1, this.visible = !0) : t === _s.Normal ? (this.textFree.visible = !1, this.textTotalWin.visible = !1, this.textWin.visible = !0, this.textBonus.visible = !1, this.visible = !0) : t === _s.Bonus && (this.textBonus.visible = !0, this.textTotalWin.visible = !0, this.textWin.visible = !1, this.visible = !0), this.resize()
                    }
                }
                class Vs extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "buttonSpin", void 0), this.interactive = !0, this.buttonMode = !0, this.buttonSpin = this.addChild(new st("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACGCAMAAAAvpwKjAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAByUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////3C/CN8AAAAldFJOUwC/70DfEIBg/iDeb1AwkAFwX88hj3/uvp+voEERzjFPcWFRnrBEY9GsAAAE1UlEQVR42s2caXvqLBCGBRKWbJqoWaz2rPz/v/hq0/dcRgMMZIjOV5v27jMLzEDcbBZYqkomblYwptLN+laKakionlpDqpytRZCyijwCTGCqIrowKicaYCQvI+oAYxgtyVUUCObB8K1JjS9EowMsqzElSY9UB1pyRAMJhxhBUBKHJXqhZbYYKQjt3IIpohEsM/2h7eHrY5deOdUoJo+zv34//pPyxwpSmAX5+Pa3FDaKmmpEexZk9+8jG8ZBI1s/EeQ8aACGajS63Tvm8y4BzRgq0RGsLWZj34jBqI5icjeW5anDTRi1jmVfgbp/cLgBIx7FF8fvR6nnMWJS3Nb/ZzSxPsWcQjMYhX4HDEXfASNOvfDGeAXFM4bfOkKboec8zzmvBkLxMHL4o00lHpZuVVQEBQMcniQ37JeUGJZjwAKDcuueTYlkGcYRtNGu3RttX5AJhoIosYNt5/1AJhgAr1bwloMHYgi3P7yGF/skCMP51Mm3++IBGM743Pk3fD+9MVxrCS0C+s7twRfDIQYNmd6kB181HGIkIdOBfeMdGwJfi9/UP1PsYhTxwmKCYReDBziEhFRR60OVP8VHErKmWFeTxH9mtAtbYa2PeSfJuQ9c6BNMl+z9t7MjRolZMUTAnnTEsPmkjpinDxiWapd4avErfEusEMUg4RgFnhjbUzjGCU2Ma90Kx2gQa8amIIEYqfnjv0HHDcUpCcBgiD75dyKYey9tlqqx6ASCnby2PZW5U118QCgGCsUgmPuMGVGqBoRhjieso12nKDeMSKHxJAqxYphLOcU+ShamTL5ilPEiFJzJVwyGW7yCytsVo8DcCgeKcsUQcfMVJIpkFgwR/Q6GEqMo3ealGGMm97eR3qsxnE30m2Dw98Co1sQwl69+1atT5uH8mhjrLW12W2ehd5p52/NjTYzhPTL2tNaGIz0OhLPUf0KEGhz/j1/I/J1BS7uEWc4nzX7TF499qaV5xPTKU5N9qaGpQtM4YsxcbrG1bYi5MjtxaGvQ4uY9ZvEdA7UlKDjQGjfTTKy7+xkSPUi3pvi7v//G8WZw3gPCDlQ5QibmM+NrczK2oJTFSRaL3FIBTyo/l5dx20yBQbY+GG7Z2sSWJSxXtD4sxLAek8jJNNM6jPm5zCXWSU83+Vn7UOgjlku0rKGxfFvi9lGy5La6Paz2djmSfZTAeC4HjtsFoRyfjknk0+bHMUelQeXj0/Fb/3j68JYvW//+2EEhnw/d09bFcThjn7t1Xq19WIC4LyzM33Lv3DN2DhYE8hJH5tlU3wkiYBECOaSXRUil8QCBvdjzx/T4RcNA9jYS6BtOxrc0NqrVMBvEeZ4kZT3wcFyy4NI72Szzj/MjQu5xadS6q/O780DJwPntZUPOe+J33Hix59lFr2KZ44RXZWtQtM5z5rKNTyEBEwsho2NwhJ3KShR+N07jUVw55DtQXP0i34Hi2rhEypfvl4bgE/0o9aP1ni3GqGNZwIXP9IAdIF1YU75rXxkWcRyTLZnmoVWQw7IpieowQC7LB5tisWfa3QbD+CIQx+ssPp7hmXw5xBeICALBhRhjpJOeJMY3nBZKkmdwEsojfhVHmYM0SaroXweiiv4iLSxJL9RmHbs2aIfuaX6RNH3OXvAVLapkhRiNlYsk+A+HePiNW7TbtgAAAABJRU5ErkJggg==", 245)), this.buttonSpin.setBackgroundAlpha(.6), this.buttonSpin.setBackgroundColor(this.game.config.get("colors.primary")), this.buttonSpin.useClickSound = !1, this.buttonSpin.useClickSound = !1
                    }
                    hide() {
                        this.visible = !1
                    }
                    show() {
                        this.visible = !0
                    }
                }
                class Gs extends ms {
                    constructor() {
                        super(), (0, o.Z)(this, "autoPlayButton", void 0), (0, o.Z)(this, "betButton", void 0), (0, o.Z)(this, "buttonAccept", void 0), (0, o.Z)(this, "buttonMenu", void 0), (0, o.Z)(this, "buttonQuickSpin", void 0), (0, o.Z)(this, "buttonSound", void 0), (0, o.Z)(this, "buttonSpin", void 0), (0, o.Z)(this, "onPressButtonSpin", void 0), (0, o.Z)(this, "state", void 0), (0, o.Z)(this, "statusBar", void 0), this.state = _s.Normal, this.onPressButtonSpin = new(C()), this.statusBar = new zs, this.statusBar.changeState(this.state), this.game.freeRound.enabled ? (this.statusBar.update({
                            type: Ns.Win,
                            value: si.isFreespin() || si.isBonus() ? this.game.wallet.coins : this.game.wallet.totalCoins
                        }), this.statusBar.update({
                            type: Ns.FreeRoundLeft,
                            value: this.game.freeRound.left
                        })) : (this.statusBar.update({
                            type: Ns.Win,
                            value: this.game.wallet.coins
                        }), this.statusBar.update({
                            type: Ns.Balance,
                            value: this.game.wallet.balance
                        })), this.buttonMenu = new Ki, this.buttonSound = new as, this.buttonSpin = new Vs, this.game.interaction.hover(this.buttonSpin, (() => {
                            this.buttonSpin.scale.set(1), h.kX.to(this.buttonSpin, .2, {
                                pixi: {
                                    scale: 1.04
                                },
                                yoyo: !0,
                                repeat: 1
                            })
                        })), this.game.interaction.click(this.buttonSpin, (() => {
                            this.onPressButtonSpin.handlers(!0) ? this.onPressButtonSpin.dispatch() : this.game.action.emit("clickSpin")
                        })), this.buttonAccept = new Xi, this.buttonQuickSpin = new qi, this.autoPlayButton = new Yi, this.autoPlayButton.scale.set(1.6), this.betButton = new vs, this.betButton.disable(), this.betButton.onClick.add((() => this.game.action.emit("clickMaxBet"))), this.game.action.on("update:win", (() => {
                            var t = si.isFreespin() || this.game.store.get("free:isEnd", !1),
                                e = si.isBonus() || this.game.store.get("bonus:isEnd", !1);
                            this.game.freeRound.enabled ? (this.statusBar.update({
                                type: Ns.Win,
                                value: t || e ? this.game.wallet.coins : this.game.wallet.totalCoins
                            }), this.statusBar.update({
                                type: Ns.TotalWin,
                                value: this.game.wallet.totalCoins
                            })) : t || e ? (this.statusBar.update({
                                type: Ns.Win,
                                value: this.game.wallet.coins
                            }), this.statusBar.update({
                                type: Ns.TotalWin,
                                value: this.game.wallet.totalCoins - (this.game.store.get("free:winExtra", 0) === this.game.wallet.totalCoins ? 0 : this.game.store.get("free:winExtra", 0))
                            })) : (this.statusBar.update({
                                type: Ns.Win,
                                value: this.game.wallet.totalCoins
                            }), this.statusBar.update({
                                type: Ns.Balance,
                                value: this.game.wallet.balance
                            }))
                        })), this.game.action.on("update:bonusWin", (() => {
                            this.statusBar.update({
                                type: Ns.Win,
                                value: 0
                            }), this.statusBar.update({
                                type: Ns.TotalWin,
                                value: this.game.wallet.totalCoins
                            })
                        })), this.game.action.on("update:balance", (() => {
                            this.game.freeRound.enabled || si.isFreespin() || si.isBonus() || this.statusBar.update({
                                type: Ns.Balance,
                                value: this.game.wallet.balance
                            })
                        })), this.game.action.on("reward:reset", (() => {
                            this.statusBar.update({
                                type: Ns.Win,
                                value: 0
                            })
                        })), this.game.action.on("free:restore", (() => {
                            this.state = _s.Free, this.buttonMenu.hide(), this.betButton.hide(), this.autoPlayButton.hide(), this.buttonSpin.visible = !1, this.buttonSound.show(), this.statusBar.changeState(this.state), this.statusBar.update({
                                type: Ns.Win,
                                value: 0
                            }), this.statusBar.update({
                                type: Ns.TotalWin,
                                value: this.game.wallet.totalCoins,
                                disableZeroCheck: !0
                            }), this.statusBar.update({
                                type: Ns.FreePlayedc,
                                value: this.game.store.get("free:left", 0)
                            }), this.resize()
                        })), this.game.action.on("free:start", (() => {
                            this.state = _s.Free, this.buttonMenu.hide(), this.betButton.hide(), this.autoPlayButton.hide(), this.buttonSpin.visible = !1, this.buttonSound.show(), this.statusBar.changeState(this.state), this.statusBar.update({
                                type: Ns.Win,
                                value: 0
                            }), this.statusBar.update({
                                type: Ns.TotalWin,
                                value: this.game.wallet.totalCoins,
                                disableZeroCheck: !0
                            }), this.statusBar.update({
                                type: Ns.FreePlayed,
                                value: this.game.store.get("free:left", 1) - 1
                            }), this.resize()
                        })), this.game.action.on("free:stop", (() => {
                            this.state = _s.Normal, this.buttonMenu.show(), this.buttonSpin.visible = !0, this.betButton.show(), this.buttonQuickSpin.show(), this.autoPlayButton.show(), this.buttonSound.hide(), this.statusBar.changeState(this.state), this.game.freeRound.enabled || this.statusBar.update({
                                type: Ns.Balance,
                                value: this.game.wallet.balance
                            }), this.statusBar.update({
                                type: Ns.Win,
                                value: this.game.wallet.totalCoins,
                                disableZeroCheck: !0
                            }), this.resize()
                        })), this.game.action.on("free:updateLeft", (t => {
                            this.game.store.get("isRespin") || this.statusBar.update({
                                type: Ns.FreePlayed,
                                value: t
                            })
                        })), this.game.action.on("state:ready_enter", (() => {
                            !si.isBasic() || this.game.autoPlay.enabled || this.game.freeRound.enabled || (this.betButton.show(), this.betButton.enable())
                        })), this.game.action.on("state:spin_enter", (() => {
                            var t = this.game.autoPlay.enabled,
                                e = si.isFreespin();
                            if (this.betButton.disable(), t || this.autoPlayButton.disable(), this.statusBar.update({
                                    type: Ns.Win,
                                    value: e || si.isBonus() || !this.game.freeRound.enabled ? 0 : this.game.wallet.totalCoins
                                }), !e && !si.isBonus()) {
                                var i = this.game.wallet.balance,
                                    s = this.game.betLevel.toCoins();
                                this.game.freeRound.enabled ? this.statusBar.update({
                                    type: Ns.FreeRoundLeft,
                                    value: this.game.freeRound.left - 1
                                }) : this.statusBar.update({
                                    type: Ns.Balance,
                                    value: i - s
                                })
                            }
                        })), this.game.action.on("state:stop_exit", (() => {
                            var t = this.game.autoPlay.enabled,
                                e = si.isFreespin();
                            !t || e || si.isBonus() || (this.buttonSpin.visible = !0, this.buttonSpin.interactive = !0)
                        })), this.game.action.on("state:setup_enter", (() => {
                            (si.isFreespin() || si.isBonus()) && (this.alpha = 0)
                        })), this.game.action.on("free:select_start", (() => {
                            h.kX.fromTo(this, .5, {
                                pixi: {
                                    alpha: 0
                                }
                            }, {
                                pixi: {
                                    alpha: 1
                                }
                            })
                        })), this.game.action.on("free:select_stop", (() => {
                            h.kX.fromTo(this, .5, {
                                pixi: {
                                    alpha: 0
                                }
                            }, {
                                pixi: {
                                    alpha: 1
                                }
                            })
                        })), this.game.action.on("state:finish_exit", (() => {
                            var t = this.game.autoPlay.enabled;
                            si.isFreespin() || t || si.isBonus() || (this.buttonSpin.visible = !0, this.buttonSpin.interactive = !0, this.buttonQuickSpin.show(), this.autoPlayButton.show(), this.autoPlayButton.enable(), this.buttonMenu.show(), this.buttonMenu.enable())
                        })), this.game.action.on("bonus:restore", (() => {
                            this.state = _s.Bonus, this.buttonMenu.hide(), this.buttonSpin.visible = !1, this.betButton.hide(), this.autoPlayButton.hide(), this.buttonSound.show(), this.statusBar.changeState(this.state), this.statusBar.update({
                                type: Ns.TotalWin,
                                value: this.game.wallet.totalCoins - this.game.wallet.bonusCoins,
                                disableZeroCheck: !0
                            }), this.statusBar.update({
                                type: Ns.BonusLeft,
                                value: this.game.store.get("bonus:left", 0)
                            }), this.statusBar.update({
                                type: Ns.Win,
                                value: 0
                            }), this.statusBar.textWin.visible = !0, this.resize()
                        })), this.game.action.on("bonus:start", (() => {
                            this.state = _s.Bonus, this.buttonMenu.hide(), this.buttonSpin.visible = !1, this.betButton.hide(), this.autoPlayButton.hide(), this.buttonSound.show(), this.statusBar.changeState(this.state), this.statusBar.update({
                                type: Ns.TotalWin,
                                value: this.game.wallet.totalCoins,
                                disableZeroCheck: !0
                            }), this.statusBar.update({
                                type: Ns.BonusLeft,
                                value: this.game.store.get("bonus:left", 1)
                            }), this.statusBar.update({
                                type: Ns.Win,
                                value: 0
                            }), this.statusBar.textWin.visible = !0, this.resize()
                        })), this.game.action.on("bonus:stop", (() => {
                            this.state = _s.Normal, this.buttonMenu.show(), this.betButton.show(), this.buttonQuickSpin.show(), this.autoPlayButton.show(), this.buttonSound.hide(), this.statusBar.changeState(this.state), this.game.freeRound.enabled || this.statusBar.update({
                                type: Ns.Balance,
                                value: this.game.wallet.balance
                            }), this.statusBar.update({
                                type: Ns.Win,
                                value: this.game.wallet.totalCoins,
                                disableZeroCheck: !0
                            }), this.resize()
                        })), this.game.action.on("bonus:select_start", (() => {
                            h.kX.fromTo(this, .5, {
                                pixi: {
                                    alpha: 0
                                }
                            }, {
                                pixi: {
                                    alpha: 1
                                }
                            }), this.buttonQuickSpin.enable(), this.statusBar.textWin.visible = !0, this.statusBar.update({
                                type: Ns.Win,
                                value: 0
                            })
                        })), this.game.action.on("bonus:select_stop", (() => {
                            h.kX.fromTo(this, .5, {
                                pixi: {
                                    alpha: 0
                                }
                            }, {
                                pixi: {
                                    alpha: 1
                                }
                            }), this.buttonSpin.interactive = !0, this.buttonSpin.visible = !0
                        })), this.game.freeRound.onFinish.once((() => {
                            this.statusBar.update({
                                type: Ns.Balance,
                                value: this.game.wallet.balance
                            }), this.statusBar.update({
                                type: Ns.Win,
                                value: this.game.wallet.totalCoins,
                                disableZeroCheck: !0
                            })
                        })), this.addChild(...[this.buttonSound, this.buttonMenu, this.buttonQuickSpin, this.game.config.get("autoPlay.available", !0) && this.autoPlayButton, this.betButton, this.buttonSpin, this.buttonAccept, this.statusBar].filter(Boolean))
                    }
                    resize() {
                        var t, e = this.game.menu.opened,
                            i = null === (t = this.game.leftHand) || void 0 === t ? void 0 : t.enabled;
                        if (this.game.device.landscape) this.betButton.position.set(120, 980), e && this.betButton.show(), i ? (this.buttonSound.position.set(120, this.state === _s.Free || this.state === _s.Bonus ? 300 : 780), this.buttonMenu.position.set(120, 120), this.buttonQuickSpin.position.set(120, 780), this.autoPlayButton.position.set(120, 300), this.buttonSpin.position.set(160, this.game.viewport.height / 2), this.buttonAccept.position.set(160, this.game.viewport.height / 2)) : (this.buttonSound.position.set(1780, this.state === _s.Free || this.state === _s.Bonus ? 300 : 780), this.buttonMenu.position.set(1780, 120), this.buttonQuickSpin.position.set(1780, 780), this.autoPlayButton.position.set(1780, 300), this.buttonSpin.position.set(1760, this.game.viewport.height / 2), this.buttonAccept.position.set(1760, this.game.viewport.height / 2));
                        else {
                            var s = 2 * this.game.viewport.paddingY + this.game.viewport.height;
                            this.buttonSound.position.set(110, this.state === _s.Free || this.state === _s.Bonus ? 140 : s - 318), this.autoPlayButton.position.set(540, s - 318), this.buttonQuickSpin.position.set(this.state === _s.Normal ? 748 : 955, s - 318), this.buttonMenu.position.set(955, s - 318), this.betButton.position.set(332, s - 318), e && this.betButton.hide(), this.buttonSpin.scale.set(1), this.buttonSpin.position.set(this.game.viewport.width / 2, s - 590), this.buttonAccept.position.set(this.game.viewport.width / 2, s - 590)
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
                            type: Ns.Balance,
                            value: this.game.wallet.balance
                        })
                    }
                    onPopupShow() {
                        this.autoPlayButton.disable(), this.buttonMenu.disable(), this.betButton.disable(), this.buttonSpin.interactive = !1, this.buttonQuickSpin.disable()
                    }
                    onPopupHide() {
                        this.autoPlayButton.enable(), this.buttonMenu.enable(), this.betButton.enable(), this.buttonSpin.interactive = !0, this.buttonQuickSpin.enable()
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
                        var t = this.game.betLevel.toCoins();
                        this.statusBar.update({
                            type: Ns.Bet,
                            value: t
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
                    updateBonusLeft(t) {
                        this.statusBar.update({
                            type: Ns.BonusLeft,
                            value: t
                        })
                    }
                }
                class Hs extends(J(It)) {
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
                class Qs extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "spaceKey", void 0), (0, o.Z)(this, "toggleInterval", void 0), (0, o.Z)(this, "currentViewIndex", void 0), (0, o.Z)(this, "hideTimeoutId", void 0), (0, o.Z)(this, "onEnd", void 0), (0, o.Z)(this, "pagination", void 0), (0, o.Z)(this, "arrows", void 0), (0, o.Z)(this, "slides", void 0), (0, o.Z)(this, "playButton", void 0), (0, o.Z)(this, "hideButton", void 0), (0, o.Z)(this, "loaderText", void 0), (0, o.Z)(this, "loaderAnimation", void 0), this.visible = !0, this.interactive = !0, this.currentViewIndex = 0, this.slides = [], this.hideTimeoutId = null, this.toggleInterval = setInterval((() => {
                            this.currentViewIndex !== this.visibleViewsCount - 1 ? this.toggleScreen(this.currentViewIndex + 1) : clearInterval(this.toggleInterval)
                        }), 4e3), this.game.interaction.click(this, (() => clearTimeout(this.hideTimeoutId)), this), this.onEnd = new(C()), this.spaceKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Space), this.game.interaction.swipeX(this, (t => {
                            clearInterval(this.toggleInterval), clearTimeout(this.hideTimeoutId), this.arrowClick(t)
                        })), this.loaderText = this.createLoadingText(0), this.loaderAnimation = h.kX.to(this.loaderText, .5, {
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
                                clearTimeout(this.hideTimeoutId), clearInterval(this.toggleInterval), this.spaceKey.onPress.detachAll(), t(), h.kX.to(this, .5, {
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
                        var i = new a.Graphics;
                        return i.beginFill(t, 1), i.drawRect(0, 0, e, 4), i.endFill(), i
                    }
                    createLoadingText(t) {
                        return this.addChild(new Hs(t))
                    }
                }
                class Ys extends(J(a.Sprite)) {
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
                class Xs extends(J(a.Container)) {
                    constructor(t) {
                        super(), (0, o.Z)(this, "left", void 0), (0, o.Z)(this, "right", void 0), this.renderable = t > 1, this.left = this.addChild(new Ys("left")), this.left.position.set(0, 0), this.right = this.addChild(new Ys("right")), this.right.position.set(910, 0)
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
                class Ks extends(J(a.Sprite)) {
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
                class qs extends(J(a.Container)) {
                    constructor(t, e) {
                        super(), (0, o.Z)(this, "buttonsContainer", void 0), this.buttonsContainer = this.addChild(new a.Container);
                        for (var i = 0; i < t; i++) {
                            var s = this.buttonsContainer.addChild(new Ks);
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
                class Js extends(J(a.Sprite)) {
                    constructor() {
                        super(), this.texture = this.game.loader.getAsset("assets/images/introScreen/texture.json", "btnPlay"), this.interactive = !0, this.buttonMode = !0
                    }
                }
                class $s extends(J(a.Container)) {
                    constructor(t) {
                        super(), (0, o.Z)(this, "button", void 0), (0, o.Z)(this, "buttonText", void 0), (0, o.Z)(this, "checked", void 0), (0, o.Z)(this, "onClick", void 0), this.interactive = !0, this.cursor = "pointer", this.checked = !1, this.onClick = new(C()), this.button = this.addChild(new Ks), this.buttonText = this.addChild(new It("", {
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
                class to extends $s {
                    resize() {
                        this.game.device.desktop ? (this.position.set(1250, 875), this.button.scale.set(1), this.buttonText.position.set(40, 17)) : (this.position.set(this.game.device.landscape ? 1250 : 510, this.game.device.landscape ? 875 : 1330), this.button.scale.set(1.6), this.buttonText.scale.set(1.5), this.buttonText.position.set(60, 25))
                    }
                }
                class eo extends(J(a.Container)) {
                    constructor(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        super(), (0, o.Z)(this, "description", void 0), (0, o.Z)(this, "featurePreview", void 0), this.alpha = 0, e && (this.visible = this.game.config.get("rnb", !0)), this.featurePreview = new a.Sprite(this.game.loader.getAsset("assets/images/introScreen/texture.json", "slide".concat(t))), this.featurePreview.anchor.x = .5, this.featurePreview.position.set(0, 0), this.description = new It("", {
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
                        h.kX.killTweensOf(this), h.kX.to(this, .3, {
                            pixi: {
                                alpha: 0
                            }
                        })
                    }
                    show() {
                        h.kX.killTweensOf(this), h.kX.to(this, .3, {
                            pixi: {
                                alpha: 1
                            }
                        })
                    }
                }
                class io extends eo {
                    constructor(t) {
                        super(t, arguments.length > 1 && void 0 !== arguments[1] && arguments[1]), this.featurePreview.anchor.x = .5, this.featurePreview.position.set(0, 0), this.description.anchor.x = .5, this.description.position.set(0, 540)
                    }
                    resize() {
                        this.description.setTagStyle("default", {
                            wordWrapWidth: this.game.viewport.width / 2.4
                        }), this.game.device.desktop ? (this.scale.set(1), this.position.set(960, 220)) : this.game.device.landscape ? (this.description.setTagStyle("default", {
                            wordWrapWidth: this.game.viewport.width / 2.4
                        }), this.scale.set(1), this.position.set(960, 220)) : (this.description.setTagStyle("default", {
                            wordWrapWidth: this.game.viewport.width / 1.5
                        }), this.scale.set(1.2), this.position.set(540, 540))
                    }
                }
                class so extends Qs {
                    constructor() {
                        super(), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "logo", void 0), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "playButtonBg", void 0), this.overlay = this.addChildAt(new at(.75), 0), this.content = this.addChild(new a.Container), this.slides.push(this.content.addChild(new io(0))), this.slides.push(this.content.addChild(new io(1, !0))), this.logo = this.content.addChild(new a.Sprite(this.game.loader.getAsset("logo"))), this.logo.anchor.x = .5, this.pagination = this.content.addChild(new qs(this.visibleViewsCount, 40)), this.hideButton = this.content.addChild(new to("#fff464")), this.arrows = this.content.addChild(new Xs(this.visibleViewsCount)), this.arrows.right.position.set(980, 0), this.arrows.position.set(470, 430), this.playButton = this.content.addChild(new Js), this.playButton.visible = !1, this.playButton.anchor.set(.5), this.setupArrows(), this.setupPagination(), this.setupHideButton(), this.setupSlides()
                    }
                    createLoadingText() {
                        return super.createLoadingText(16774244)
                    }
                    resize() {
                        this.logo.position.set(this.game.viewport.width / 2, 0), this.content.scale.set(1), this.content.position.set(0, this.game.device.portrait && !this.game.device.desktop ? 40 : 0), this.game.device.desktop ? (this.pagination.scale.set(1), this.pagination.position.set(500, 876)) : (this.pagination.scale.set(1.6), this.pagination.position.set(this.game.device.landscape ? 500 : 140, this.game.device.landscape ? 876 : 1330)), this.game.device.portrait && !this.game.device.desktop ? (this.logo.scale.set(2), this.playButton.scale.set(1.4), this.playButton.position.set(this.game.viewport.width / 2, 1610), this.loaderText.scale.set(1.4), this.loaderText.position.set(this.game.viewport.width / 2, 1610)) : (this.logo.scale.set(1), this.playButton.scale.set(1), this.playButton.position.set(this.game.viewport.width / 2, this.game.device.desktop ? 920 : 940), this.loaderText.scale.set(1), this.loaderText.position.set(this.game.viewport.width / 2, this.game.device.desktop ? 920 : 940))
                    }
                }
                class oo extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "name", "Paytable"), (0, o.Z)(this, "scrollView", void 0), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "content", void 0), this.visible = !1, this.interactive = !0, this.scrollView = this.addChild(new rt), this.scrollView.paddingBottom = 120, this.title = this.scrollView.addChild(new mt(this.game.i18n.t("MenuPaytable"))), this.title.withGameName(), this.title.anchor.set(.5, 0), this.content = this.scrollView.addChild(new a.Container)
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
                class no extends(J(a.Container)) {
                    constructor(t, e) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        super(), (0, o.Z)(this, "_box", void 0), (0, o.Z)(this, "_textNumber", void 0), (0, o.Z)(this, "number", void 0), (0, o.Z)(this, "positions", void 0), this.number = t, this.positions = e;
                        var [s, n] = i.length > 0 ? i : this.game.config.get("slot.size", []);
                        this._box = new a.Graphics;
                        this._box.lineStyle(1, 2763563), this._box.moveTo(0, 0), this._box.lineTo(16.4 * s, 0), this._box.lineTo(16.4 * s, 17.25 * n), this._box.lineTo(0, 17.25 * n), this._box.lineTo(0, 0), this._box.name = "PaytableBetLineBox", this._box.scale.set(2), this._box.y = 40;
                        for (var h = 0; h < n; h++)
                            for (var r = 0; r < s; r++) {
                                var l = this.game.loader.getAsset("assets/ui_2020/paytable_betlines_".concat(this.positions[r] === h ? "win" : "normal", ".png")),
                                    d = new a.Sprite(l);
                                d.x = 3 + (d.width + 3) * r, d.y = 3.5 + (d.height + 3.5) * h, this._box.addChild(d)
                            }
                        this._textNumber = new a.Text(this.number, {
                            fontSize: 28,
                            fill: "white",
                            fontFamily: "Avenir-Medium",
                            fontWeight: "bold"
                        }), this._textNumber.anchor.x = .5, this._textNumber.x = this._box.width / 2, this._textNumber.y = 0, this.addChild(this._box, this._textNumber)
                    }
                }

                function ao(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function ho(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? ao(Object(i), !0).forEach((function(e) {
                            (0, o.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ao(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class ro extends(J(a.Text)) {
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
                        this.style = ho(ho({}, this.style), e)
                    }
                    resize() {
                        this.game.device.desktop ? this.scale.set(1.2) : this.game.device.landscape ? (this.scale.set(2.2), this.setTagStyle("default", {
                            wordWrapWidth: 670
                        })) : (this.scale.set(2.2), this.setTagStyle("default", {
                            wordWrapWidth: 400
                        }))
                    }
                }
                class lo extends(J(a.Text)) {
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
                class co extends(J(a.Container)) {
                    constructor(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                        super(), (0, o.Z)(this, "_payTableBetLineBoxs", void 0), (0, o.Z)(this, "_payTableParagraph", void 0), (0, o.Z)(this, "_payTableTitle", void 0), this._payTableBetLineBoxs = new a.Container, this._payTableTitle = new lo(this.game.i18n.t("PaytableSectionBetLinesTitle").toUpperCase()), this._payTableParagraph = new ro(this.game.i18n.t("PaytableSectionBetLinesContent1")), t.forEach(((t, i) => {
                            var s = new no(i + 1, t, e);
                            this._payTableBetLineBoxs.addChild(s)
                        }));
                        this._payTableBetLineBoxs.children.forEach(((t, e) => {
                            t.scale.set(1), t.x = e % 5 * 239, t.y = (t.height + 30) * Math.floor(e / 5)
                        })), this._payTableBetLineBoxs.y = 60, this._payTableParagraph.y = this._payTableBetLineBoxs.y + this._payTableBetLineBoxs.height + 30, this.addChild(this._payTableTitle, this._payTableParagraph, this._payTableBetLineBoxs)
                    }
                    resize() {
                        if (!this.game.device.desktop)
                            if (this.game.device.landscape) {
                                this._payTableBetLineBoxs.children.forEach(((t, e) => {
                                    t.scale.set(1.6), t.x = e % 5 * 330, t.y = 310 * Math.floor(e / 5)
                                })), this._payTableBetLineBoxs.y = 100, this._payTableParagraph.y = this._payTableBetLineBoxs.y + this._payTableBetLineBoxs.height + 30
                            } else {
                                this._payTableBetLineBoxs.children.forEach(((t, e) => {
                                    t.scale.set(1.4), t.x = e % 3 * 360, t.y = 290 * Math.floor(e / 3)
                                })), this._payTableBetLineBoxs.y = 100, this._payTableParagraph.y = this._payTableBetLineBoxs.y + this._payTableBetLineBoxs.height + 30
                            }
                    }
                }
                const uo = co;
                class po extends(J(a.Sprite)) {
                    constructor() {
                        super(a.Texture.WHITE), this.tint = 2763563
                    }
                    resize() {
                        this.game.device.desktop ? (this.height = 4, this.width = 1120) : this.game.device.landscape ? (this.height = 6, this.width = 1580) : (this.height = 6, this.width = 950)
                    }
                }
                class go extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "_sectionParagraph1", void 0), (0, o.Z)(this, "_sectionTitle", void 0), this.visible = this.game.config.get("rnb", !0), this._sectionTitle = new lo(this.game.i18n.t("PaytableSectionRiskTitle").toUpperCase()), this._sectionTitle.position.set(0, 0), this._sectionParagraph1 = new ro(this.game.i18n.t("PaytableSectionRiskContent1")), this._sectionParagraph1.position.set(0, this._sectionTitle.y + this._sectionTitle.height + 30), this.addChild(this._sectionTitle), this.addChild(this._sectionParagraph1)
                    }
                    resize() {
                        this.game.device.desktop || this._sectionParagraph1.position.set(0, this._sectionTitle.y + this._sectionTitle.height + 30)
                    }
                }
                class mo extends(J(a.Container)) {
                    constructor(t) {
                        var e, i, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
                        super(), (0, o.Z)(this, "findIndex", void 0), (0, o.Z)(this, "findSymbol", void 0), (0, o.Z)(this, "foreground", void 0), (0, o.Z)(this, "layout", void 0), (0, o.Z)(this, "payoutSymbol", void 0), (0, o.Z)(this, "payoutText", void 0), (0, o.Z)(this, "payouts", void 0), this.payouts = null !== (e = null === (i = this.game.server.response) || void 0 === i ? void 0 : i.paytable) && void 0 !== e ? e : [], this.layout = this.game.config.get("slot.layout.".concat(s), []), this.findIndex = this.layout.findIndex((e => e.assetName === t)), this.findSymbol = this.layout[this.findIndex], this.foreground = this.addChild(a.Sprite.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAi8AAAFpCAMAAABj4ziaAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUdwTBcXFxUVFRUVFRUVFRUVFQ8PDxYWFg8PDxUVFRYWFhUVFRYWFhQUFBYWFhUVFRUVFRUVFRQUFBQUFBUVFRQUFBYWFhYWFvIqbjAAAAAXdFJOUwAg72De3yD+EI+fMM+f7+6QX6DPzp6gP4hhIQAAAyNJREFUeNrt2VluwkAQRdEyBtxtmylk2P9OAyRCJgQoonyes4Snq3JLjjgr7WqcfcDUbFztSlxbbrXCDavlj1pKNQp31Isbs1xYhLsWkxMzyIWHwQyuC3+4MEUupIL5esN46pJ89J6+RnYg6fhFejEDSdvD68UKZK1LtFYgrfU54gl97I1A2hj+MvLEAyZswBP0gl7QC3pBL+gF9IJe0At6QS/oBfSCXtALekEv6AX0gl7QC3pBL+gF9IJe0At6QS/oBfSCXtALekEv6AX0gl7QC3pBL+gF9IJe0At6QS+gF/SCXtALekEvoBf0gl7QC3pBL6AX9IJe0At6QS+gF/SCXtALekEvoBf0gl7QC3pBL6AX9IJe0At6QS+gF/SCXtALegG9oBf0gl7QC3oBvaAX9IJe0At6Ab2gF/SCXtALegG9oBf0gl7QC3oBvaAX9IJe0At6Ab2gF/SCXtALegG9oBf0gl7QC+gFvaAX9IJe0AvoBb2gF/SCXtAL6AW9oBf0gl7QC+gFvaAX9IJe0AvoBb2gF/SCXtAL6AW9oBf0gl7QC+gFvaAX9IJe0AvoBb2gF/SCXkAv6AW9oBf0gl5AL+gFvaAX9IJeQC/oBb2gF/SCXkAv6AW9oBf0gl5AL+gFvaAX9IJeQC/oBb2gF/SCXkAv6AW9oBf0AnpBL+gFvaAX9AJ6QS/oBb2gF/QCekEv6AW9oBf0AnpBL+gFvaAX9AJ6QS/oBb2gF/QCekEv6AW9oBf0AnpBL+gFvaAX0At6QS/oBb2gF9ALekEv6AW9oBfQC3pBL+gFvaAX0At6QS/oBb2gF9ALekEv6AW9oBfQC3pBL+gFvaAX0At6QS/oBb2gF9ALekEv6AW9gF7QC3pBL+gFvYBe0At6QS/oBb2AXtALekEv6AW9gF7QC3pBL+gFvYBe+LdeZjYgbR17I5A2xrsRSOujNQJpuygeMKSViK0VSH+OIhozkNQceolqB1LqMZcoc0uQMC+nXqIRDIlcmvg2CIaHuQxx5sKQvi6nN0ztTMJNXS1xqek7yfBrLJvaxLXS9q+bDqY2r2/t5LZ8Ag1+oBbvnKajAAAAAElFTkSuQmCC")), this.foreground.width = 559, this.foreground.height = 361, this.payoutSymbol = new a.Sprite(this.game.loader.getAsset(this.findSymbol.textureAtlas, this.findSymbol.assetName)), this.payoutSymbol.scale.set(.85), this.payoutSymbol.anchor.set(.5), this.payoutSymbol.position.set(this.foreground.width / 2 - 120, this.foreground.height / 2), this.payoutText = new It("", {
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
                        this.foreground.width = 329
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
                class Ao extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "symbol1", void 0), (0, o.Z)(this, "content1", void 0), this.title = new lo(K.i18n.t("PaytableSectionBonusTitle").toUpperCase()), this.title.position.set(0, 0), this.symbol1 = new mo("bonus"), this.symbol1.position.set(0, this.title.y + this.title.height + 30), this.symbol1.withoutPayout(), this.content1 = new ro(K.i18n.t("PaytableSectionBonusContent")), this.content1.setTagStyle("default", {
                            wordWrapWidth: 620
                        }), this.content1.position.set(this.symbol1.x + this.symbol1.width + 30, this.symbol1.height / 2 + this.symbol1.y - this.content1.height / 2), this.addChild(this.title, this.symbol1, this.content1)
                    }
                    resize() {
                        this.game.device.desktop || (this.game.device.landscape ? (this.symbol1.position.set(0, this.title.y + this.title.height + 30), this.content1.setTagStyle("default", {
                            wordWrapWidth: 420
                        }), this.content1.position.set(this.symbol1.x + this.symbol1.width + 30, this.symbol1.height / 2 + this.symbol1.y - this.content1.height / 2)) : (this.symbol1.position.set(0, this.title.y + this.title.height + 30), this.content1.position.set(0, this.symbol1.height + this.symbol1.y + 30)))
                    }
                }
                class vo extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "content1", void 0), this.title = new lo(K.i18n.t("PaytableSectionBonusGameTitle").toUpperCase()), this.title.position.set(0, 0), this.content1 = new ro(K.i18n.t("PaytableSectionBonusGameContent1")), this.content1.position.set(0, this.title.height + this.title.y + 30), this.addChild(this.title, this.content1)
                    }
                    resize() {
                        this.game.device.desktop || (this.game.device.landscape, this.content1.position.set(0, this.title.height + this.title.y + 30))
                    }
                }
                class bo extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "content1", void 0), this.title = new lo(K.i18n.t("PaytableSectionExtraBonusTitle").toUpperCase()), this.title.position.set(0, 0), this.content1 = new ro(K.i18n.t("PaytableSectionExtraBonusContent1")), this.content1.position.set(0, this.title.height + this.title.y + 30), this.addChild(this.title, this.content1)
                    }
                    resize() {
                        this.game.device.desktop || (this.game.device.landscape, this.content1.position.set(0, this.title.height + this.title.y + 30))
                    }
                }
                class wo extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "sectionTitle", void 0), (0, o.Z)(this, "symbol1", void 0), (0, o.Z)(this, "symbol2", void 0), (0, o.Z)(this, "symbol3", void 0), (0, o.Z)(this, "symbol4", void 0), (0, o.Z)(this, "symbol5", void 0), (0, o.Z)(this, "symbol6", void 0), (0, o.Z)(this, "symbol7", void 0), (0, o.Z)(this, "symbol8", void 0), (0, o.Z)(this, "symbols", void 0), this.sectionTitle = new lo(this.game.i18n.t("PaytableSectionPayoutTitle").toUpperCase()), this.symbol1 = new mo("p1"), this.symbol1.position.set(0, this.sectionTitle.y + this.sectionTitle.height + 30), this.symbol2 = new mo("p2"), this.symbol2.position.set(600, this.sectionTitle.y + this.sectionTitle.height + 30), this.symbol3 = new mo("p3"), this.symbol3.position.set(0, this.symbol1.y + this.symbol1.height + 30), this.symbol4 = new mo("p4"), this.symbol4.position.set(600, this.symbol2.y + this.symbol2.height + 30), this.symbol5 = new mo("hearts"), this.symbol5.position.set(0, this.symbol3.y + this.symbol3.height + 30), this.symbol6 = new mo("clubs"), this.symbol6.position.set(600, this.symbol4.y + this.symbol4.height + 30), this.symbol7 = new mo("spades"), this.symbol7.position.set(0, this.symbol5.y + this.symbol5.height + 30), this.symbol8 = new mo("diamonds"), this.symbol8.position.set(600, this.symbol6.y + this.symbol6.height + 30), this.symbols = [this.symbol1, this.symbol2, this.symbol3, this.symbol4, this.symbol5, this.symbol6, this.symbol7, this.symbol8], this.addChild(this.sectionTitle, ...this.symbols)
                    }
                    updateBet(t) {
                        this.symbols.forEach((e => e.updateBet(t))), this.resize()
                    }
                    resize() {
                        this.game.device.desktop || (this.game.device.landscape ? (this.symbol1.position.set(0, this.sectionTitle.y + this.sectionTitle.height + 30), this.symbol2.position.set(820, this.sectionTitle.y + this.sectionTitle.height + 30), this.symbol3.position.set(0, this.symbol1.y + this.symbol1.height + 30), this.symbol4.position.set(820, this.symbol2.y + this.symbol2.height + 30), this.symbol5.position.set(0, this.symbol3.y + this.symbol3.height + 30), this.symbol6.position.set(820, this.symbol4.y + this.symbol4.height + 30), this.symbol7.position.set(0, this.symbol5.y + this.symbol5.height + 30), this.symbol8.position.set(820, this.symbol6.y + this.symbol6.height + 30)) : this.game.device.portrait && !this.game.device.desktop && (this.symbol1.position.set(0, this.sectionTitle.y + this.sectionTitle.height + 30), this.symbol2.position.set(0, this.symbol1.y + this.symbol1.height + 30), this.symbol3.position.set(0, this.symbol2.y + this.symbol2.height + 30), this.symbol4.position.set(0, this.symbol3.y + this.symbol3.height + 30), this.symbol5.position.set(0, this.symbol4.y + this.symbol4.height + 30), this.symbol6.position.set(0, this.symbol5.y + this.symbol5.height + 30), this.symbol7.position.set(0, this.symbol6.y + this.symbol6.height + 30), this.symbol8.position.set(0, this.symbol7.y + this.symbol7.height + 30)))
                    }
                }
                class yo extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "content1", void 0), this.title = new lo(K.i18n.t("PaytableSectionSuperBonusTitle").toUpperCase()), this.title.position.set(0, 0), this.content1 = new ro(K.i18n.t("PaytableSectionSuperBonusContent1")), this.content1.position.set(0, this.title.height + this.title.y + 30), this.addChild(this.title, this.content1)
                    }
                    resize() {
                        this.game.device.desktop || (this.game.device.landscape, this.content1.position.set(0, this.title.height + this.title.y + 30))
                    }
                }
                class fo extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "title", void 0), (0, o.Z)(this, "symbol1", void 0), (0, o.Z)(this, "content1", void 0), this.title = new lo(K.i18n.t("PaytableSectionWildTitle").toUpperCase()), this.title.position.set(0, 0), this.symbol1 = new mo("wild"), this.symbol1.position.set(0, this.title.y + this.title.height + 30), this.symbol1.withoutPayout(), this.content1 = new ro(K.i18n.t("PaytableSectionWildContent1")), this.content1.setTagStyle("default", {
                            wordWrapWidth: 620
                        }), this.content1.position.set(this.symbol1.x + this.symbol1.width + 30, this.symbol1.height / 2 + this.symbol1.y - this.content1.height / 2), this.addChild(this.title, this.symbol1, this.content1)
                    }
                    resize() {
                        this.game.device.desktop || (this.game.device.landscape ? (this.symbol1.position.set(0, this.title.y + this.title.height + 30), this.content1.setTagStyle("default", {
                            wordWrapWidth: 420
                        }), this.content1.position.set(this.symbol1.x + this.symbol1.width + 30, this.symbol1.height / 2 + this.symbol1.y - this.content1.height / 2)) : (this.symbol1.position.set(0, this.title.y + this.title.height + 30), this.content1.position.set(0, this.symbol1.height + this.symbol1.y + 30)))
                    }
                }
                class So extends oo {
                    constructor(t) {
                        super(), (0, o.Z)(this, "_paytableSectionRNB", void 0), (0, o.Z)(this, "_paytableSectionPayout", void 0), (0, o.Z)(this, "_paytableSectionWild", void 0), (0, o.Z)(this, "_paytableSectionBonus", void 0), (0, o.Z)(this, "_paytableSectionBonusGame", void 0), (0, o.Z)(this, "_paytableSectionSuperBonus", void 0), (0, o.Z)(this, "_paytableSectionExtraBonus", void 0), (0, o.Z)(this, "payTableDelimiter", void 0), (0, o.Z)(this, "_paytableSectionBetLines", void 0), this._paytableSectionRNB = new go, this._paytableSectionPayout = new wo, this._paytableSectionWild = new fo, this._paytableSectionBonus = new Ao, this._paytableSectionBonusGame = new vo, this._paytableSectionSuperBonus = new yo, this._paytableSectionExtraBonus = new bo, this.payTableDelimiter = new po, this._paytableSectionBetLines = new uo(t), this.content.addChild(this._paytableSectionRNB, this._paytableSectionPayout, this._paytableSectionWild, this._paytableSectionBonus, this._paytableSectionBonusGame, this._paytableSectionSuperBonus, this._paytableSectionExtraBonus, this.payTableDelimiter, this._paytableSectionBetLines)
                    }
                    updateBet(t) {
                        this._paytableSectionPayout.updateBet(t), this.resize()
                    }
                }
                class xo extends a.SmoothGraphics {
                    constructor(t) {
                        super(), this.visible = !1, this.draw(t)
                    }
                    draw(t) {
                        var {
                            color: e,
                            width: i,
                            padding: s,
                            points: o
                        } = t;
                        this.lineStyle(i, e), o.forEach(((t, e) => {
                            var {
                                size: i,
                                position: n
                            } = t, a = Math.round(n[0] + i[0] / 2), h = Math.round(n[1] + i[1] / 2);
                            0 === e && this.moveTo(n[0] + s, h), this.lineTo(a, h), e === o.length - 1 && this.lineTo(n[0] + i[0] - s, h)
                        }))
                    }
                    show() {
                        this.visible = !0
                    }
                    hide() {
                        this.visible = !1
                    }
                }
                class ko extends(J(a.Sprite)) {
                    constructor(t) {
                        super(), (0, o.Z)(this, "onHover", new(C())), (0, o.Z)(this, "onOut", new(C())), this.lineIndex = t, this.interactive = this.game.device.desktop, this.texture = this.game.loader.getAsset("dot_normal"), this.game.interaction.hover(this, (() => {
                            this.onHover.dispatch(t), this.active()
                        })), this.game.interaction.out(this, (() => {
                            this.onOut.dispatch(t), this.normal()
                        }))
                    }
                    active() {
                        this.texture = this.game.loader.getAsset("dot_active")
                    }
                    normal() {
                        this.texture = this.game.loader.getAsset("dot_normal")
                    }
                    disable() {
                        this.interactive = !1
                    }
                    enable() {
                        this.interactive = this.game.device.desktop
                    }
                    resize() {
                        this.visible = this.game.device.desktop || this.game.device.landscape
                    }
                }
                class Bo extends(J(a.Container)) {
                    constructor(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                        super(), (0, o.Z)(this, "lines", void 0), (0, o.Z)(this, "points", new Map), this.lines = t.map((t => this.addChild(new xo(t)))), this.game.device.desktop && e.map((t => this.points.set(t.line, t.position.map((e => {
                            var i = this.addChild(new ko(t.line));
                            return i.position.set(e.x, e.y), i.onHover.add((t => {
                                this.points.get(t).forEach((t => {
                                    t.active()
                                })), this.lines[t].show()
                            })), i.onOut.add((t => {
                                this.points.get(t).forEach((t => {
                                    t.normal()
                                })), this.lines[t].hide()
                            })), i
                        })))))
                    }
                    show(t) {
                        this.hide(), t.forEach((t => {
                            var e, i, {
                                line: s
                            } = t;
                            null === (e = this.lines[s]) || void 0 === e || e.show(), null === (i = this.points.get(s)) || void 0 === i || i.forEach((t => {
                                t.active()
                            }))
                        }))
                    }
                    showAllLines() {
                        this.lines.forEach((t => {
                            t.show()
                        }))
                    }
                    hide() {
                        var t;
                        this.lines.forEach((t => t.hide())), null === (t = this.points) || void 0 === t || t.forEach((t => {
                            t.forEach((t => {
                                t.normal()
                            }))
                        }))
                    }
                    enable() {
                        var t;
                        null === (t = this.points) || void 0 === t || t.forEach((t => {
                            t.forEach((t => {
                                t.enable()
                            }))
                        }))
                    }
                    disable() {
                        var t;
                        this.hide(), null === (t = this.points) || void 0 === t || t.forEach((t => {
                            t.forEach((t => {
                                t.disable()
                            }))
                        }))
                    }
                }
                class Co extends(J(a.Container)) {
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
                class Po extends(J(a.Container)) {
                    constructor(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "+=1.75";
                        super(), (0, o.Z)(this, "timeline", void 0), (0, o.Z)(this, "textScale", void 0), (0, o.Z)(this, "delay", void 0), (0, o.Z)(this, "winText", void 0), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "textScaleEnabled", void 0), (0, o.Z)(this, "textScaleMultiplier", void 0), (0, o.Z)(this, "winTextScale", (t => "".concat(t).length < 4 ? this.textScale : this.textScale - ("".concat(t).length - 4) * this.textScaleMultiplier)), this.visible = !1, this.textScaleEnabled = !1, this.textScaleMultiplier = .16, this.textScale = t || .6, this.delay = e, this.winText = this.addChild(new a.BitmapText("", {
                            fontName: "WinFont"
                        })), this.winText.scale.set(this.textScale), this.winText.anchor.set(.5), this.timeline = new h.TY
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
                        this.background ? this.background.texture = e : this.background = this.addChildAt(new a.Sprite(e), 0)
                    }
                }
                class To extends(J(a.Sprite)) {
                    constructor() {
                        super(), (0, o.Z)(this, "timeline", void 0), this.texture = this.game.loader.getAsset("assets/images/labels/textSuperBonusGame.png"), this.anchor.set(.5), this.alpha = 0, this.timeline = new h.TY
                    }
                    show() {
                        return new Promise((t => {
                            this.timeline.clear(), this.timeline.vars = {
                                onComplete: () => {
                                    t()
                                }
                            }, this.game.action.emit("sound:superBonus"), this.timeline.set(this, {
                                pixi: {
                                    alpha: 0,
                                    scale: 1
                                }
                            }).to(this, .5, {
                                pixi: {
                                    alpha: 1
                                }
                            }).to(this, .2, {
                                pixi: {
                                    alpha: 0,
                                    scale: 1.1
                                }
                            }, "+=0.75")
                        }))
                    }
                }
                var Eo = Symbol("BonusScale");
                class Zo extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "id", Eo), (0, o.Z)(this, "levelx1", void 0), (0, o.Z)(this, "levelx2", void 0), (0, o.Z)(this, "levelx3", void 0), (0, o.Z)(this, "initialHeight", void 0), (0, o.Z)(this, "initialWith", void 0), this.position.set(1270, 40), this.hide(), this.levelx1 = new Oi(this.game.loader.getAsset("assets/images/effects/bottle/skeleton.json")), this.levelx1.isActive = !0, this.levelx1.position.set(0, 0), this.initialHeight = this.levelx1.height, this.initialWith = this.levelx1.width, this.levelx2 = new Oi(this.game.loader.getAsset("assets/images/effects/bottle/skeleton.json")), this.levelx2.isActive = !0, this.levelx2.position.set(0, this.initialHeight + this.levelx1.y - 30), this.levelx3 = new Oi(this.game.loader.getAsset("assets/images/effects/bottle/skeleton.json")), this.levelx3.isActive = !0, this.levelx3.position.set(0, this.initialHeight + this.levelx2.y - 30), this.addChild(this.levelx3, this.levelx2, this.levelx1), this.update(this.game.store.get("bonus:left", 0), !0)
                    }
                    showBonus() {
                        this.levelx1.alpha = 0, this.levelx2.alpha = 0
                    }
                    showFree() {
                        this.levelx1.alpha = 1, this.levelx2.alpha = 1
                    }
                    update(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        si.isBonus() ? this.showBonus() : si.isFreespin() && this.showFree();
                        for (var i = [!1, !1, !1], s = -1; s < t; s++) i[s] = !0;
                        this.children.forEach(((t, s) => {
                            i[s] && !t.isActive ? (e ? t.play("idle", !0) : (this.visible && this.game.action.emit("sound:bonusScaleUp"), t.play("win").then((() => {
                                t.play("idle", !0)
                            }))), t.isActive = !0) : !i[s] && t.isActive && (t.play("loss"), t.isActive = !1)
                        }))
                    }
                    reset() {
                        this.children.forEach((t => {
                            t.isActive = !1, t.play("idle", !0)
                        }))
                    }
                    resize() {
                        this.game.device.desktop || (this.game.device.landscape ? (this.scale.set(.9), this.game.leftHand.enabled ? this.position.set(1270, 120) : this.position.set(-300, 180), this.levelx1.position.set(0, 0), this.levelx2.position.set(0, this.initialHeight + this.levelx1.y - 30), this.levelx3.position.set(0, this.initialHeight + this.levelx2.y - 30)) : (this.scale.set(1), this.position.set(440, 900), this.levelx1.position.set(0, 0), this.levelx2.position.set(this.levelx1.x + this.initialWith - 50, 0), this.levelx3.position.set(this.levelx2.x + this.initialWith - 50, 0)))
                    }
                }
                class Oo extends(J(a.Sprite)) {
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

                function Ro(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function Fo(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Ro(Object(i), !0).forEach((function(e) {
                            (0, o.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Ro(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                var Mo = new Ni;
                class Io extends Oo {
                    constructor(t, e, i) {
                        super(i), (0, o.Z)(this, "data", void 0), (0, o.Z)(this, "layoutType", void 0), (0, o.Z)(this, "symbolAnimation", void 0), (0, o.Z)(this, "timeoutId", void 0), this.position.set(t, e), this.layoutType = "default", this.symbolAnimation = Mo.addChild(new Oi(this.game.loader.getAsset("symbolAnimation"))), this.symbolAnimation.renderable = !1, this.replaceTexture(i)
                    }
                    replaceTexture(t, e, i) {
                        (si.isBonus() || si.isFreespin() || i) && 0 === t && (t = e ? 0 : function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
                                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 13,
                                i = t + Math.random() * (e + 1 - t);
                            return Math.floor(i)
                        }()), this.currentTextureIndex = t, this.data = this.game.config.get("slot.layout.".concat(this.layoutType, "[").concat(this.currentTextureIndex, "]"), null), this.texture = this.game.loader.getAsset(this.data.textureAtlas, this.data.assetName)
                    }
                    playAnimation(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            i = Fo(Fo({}, this.data.animation), t);
                        if (!(!this.visible || this.symbolAnimation.renderable && this.symbolAnimation.playing && this.symbolAnimation.skinName === i.skin && this.symbolAnimation.animationName === i.effectName)) {
                            this.symbolAnimation.position.set(this.x, this.y), i.skin && this.symbolAnimation.changeSkin(i.skin);
                            var s = "string" == typeof i.effectName[t] ? i.effectName[t] : i.effectName[i.animationName] || i.effectName.normal;
                            this.show(), this.removeOverlay(), this.timeoutId = setTimeout((() => {
                                var t;
                                this.hide(), this.symbolAnimation.renderable = !0, this.symbolAnimation.play((si.isBonus() || si.isFreespin()) && "win" === s && "wild" === i.skin ? "stickyWin" : s, "idle" === s, null !== (t = i.trackIndex) && void 0 !== t ? t : 0)
                            }), e)
                        }
                    }
                    stopAnimation() {
                        this.timeoutId && clearTimeout(this.timeoutId), this.show(), this.symbolAnimation.stop(), this.symbolAnimation.renderable = !1, this.symbolAnimation.zOrder = 0
                    }
                    overlay() {
                        this.tint = 5460819
                    }
                    removeOverlay() {
                        this.visible = !0, this.tint = 16777215
                    }
                    get isPlaying() {
                        return this.symbolAnimation.playing
                    }
                    blur() {
                        this.layoutType = "blur", this.data = this.game.config.get("slot.layout.".concat(this.layoutType, "[").concat(this.currentTextureIndex, "]"), null), this.texture = this.game.loader.getAsset(this.data.textureAtlas, this.data.assetName)
                    }
                    unblur() {
                        this.layoutType = "default", this.data = this.game.config.get("slot.layout.".concat(this.layoutType, "[").concat(this.currentTextureIndex, "]"), null), this.texture = this.game.loader.getAsset(this.data.textureAtlas, this.data.assetName)
                    }
                    playStop() {
                        this.hide(), this.symbolAnimation.position.set(this.x, this.y), this.symbolAnimation.changeSkin(this.data.assetName), this.symbolAnimation.renderable = !0, this.symbolAnimation.play("spin").then((() => {
                            this.symbolAnimation.play("idle", !0)
                        }))
                    }
                    getCurrentTextureIndex() {
                        return this.currentTextureIndex
                    }
                }
                class Wo extends(J(a.Container)) {
                    constructor(t) {
                        super(), (0, o.Z)(this, "slot", void 0), this.slot = t
                    }
                    transformToSticky() {
                        var t = this;
                        return (0, s.Z)((function*() {
                            var e = t.game.store.get("reward:scatters", !1),
                                i = t.game.store.get("reward:overlayWilds", []);
                            e && (t.game.action.emit("sound:bonusWildTransform"), i.forEach((e => {
                                var i = t.slot.getSymbol(e.pos[0], e.pos[1]),
                                    {
                                        x: s,
                                        y: o
                                    } = i,
                                    n = new Oi(t.game.loader.getAsset("symbolAnimation"));
                                n.position.set(s, o), n.changeSkin("bonus"), n.play("bonusWildTransform").then((() => {
                                    n.changeSkin("wild"), t.game.action.emit("sound:stickyTransform"), n.play("stickyTransform").then((() => {
                                        n.play("stickyIdle", !0)
                                    }))
                                })), t.addChild(n)
                            })), yield t.game.helpers.delay(2e3))
                        }))()
                    }
                    show() {
                        var t = arguments,
                            e = this;
                        return (0, s.Z)((function*() {
                            var i = t.length > 0 && void 0 !== t[0] && t[0],
                                s = e.game.store.get("reward:overlayWilds", []),
                                o = e.game.store.get("reward:scatters", !1);
                            (0 !== s.length && s.some((t => t.isNew)) && !o || i) && (s.forEach((t => {
                                var s = e.slot.getSymbol(t.pos[0], t.pos[1]),
                                    {
                                        x: o,
                                        y: n
                                    } = s;
                                if (t.isNew || i) {
                                    var a = new Oi(e.game.loader.getAsset("symbolAnimation"));
                                    a.position.set(o, n), a.changeSkin("wild"), i ? a.play("stickyIdle", !0) : (e.game.action.emit("sound:stickyTransform"), a.play("stickyTransform").then((() => {
                                        a.play("stickyIdle", !0)
                                    }))), e.addChild(a)
                                }
                            })), yield e.game.helpers.delay(1e3))
                        }))()
                    }
                    playWin() {
                        var t = this.game.store.get("reward:overlayWilds", []);
                        0 !== t.length && (si.isBonus() || si.isFreespin()) && (this.children.forEach((t => {
                            t.alpha = 0
                        })), t.forEach((t => {
                            this.slot.getSymbol(t.pos[0], t.pos[1]).replaceTexture(14)
                        })))
                    }
                    spin() {
                        this.children.forEach((t => {
                            t.alpha = 1
                        }))
                    }
                    hide() {
                        this.removeChildren()
                    }
                }
                class Do extends(J(a.Container)) {
                    constructor() {
                        super()
                    }
                    get isStop() {
                        return this.game.autoPlay.enabled && this.game.autoPlay.count > 0
                    }
                }
                const Lo = class extends Do {
                    constructor(t) {
                        super(), (0, o.Z)(this, "_flushInterval", void 0), (0, o.Z)(this, "_wins", void 0), (0, o.Z)(this, "slot", void 0), this.slot = t, this._wins = [], this._flushInterval = null
                    }
                    get isStop() {
                        return super.isStop || !si.isBasic()
                    }
                    stop() {
                        this.slot.lines.hide(), this._wins.length = 0, clearInterval(this._flushInterval), this.slot.sticky.spin(), this.slot.reels.forEach((t => t.stopAnimation())), this.slot.textLineWin.clear(), K.action.emit("stopAnimation")
                    }
                    _getWinSoundNumber() {
                        var t = K.store.get("reward:numberWinSymbol", 0);
                        return t <= 9 ? 1 : t > 9 && t <= 13 ? 2 : 3
                    }
                    allPayment(t) {
                        var e = this;
                        return (0, s.Z)((function*() {
                            e.slot.reels.forEach((t => t.overlay())), e.slot.lines.show(t);
                            for (var i = 0, s = t.length; i < s; i++) {
                                var o = t[i];
                                e._wins.push(o), e._runSymbolAnimation(o, !1)
                            }
                            var n = e._getWinSoundNumber();
                            K.action.emit("sound:win", n), yield e.slot.textTotalWin.show(e.game.wallet.coins, (() => {
                                K.action.emit("update:win", e.game.wallet.coins), K.action.emit("update:balance", e.game.wallet.balance), K.action.emit("update:totalWin", K.wallet.totalCoins)
                            }))
                        }))()
                    }
                    scatterPayment(t) {
                        var e = this;
                        return (0, s.Z)((function*() {
                            e.slot.reels.forEach((t => t.stopAnimation())), e.slot.lines.hide(), e.slot.textLineWin.clear(), e.slot.reels.forEach((t => t.overlay())), K.action.emit("sound:bonusWin"), e.slot.lines.hide(), K.action.emit("textLineWin:hide"), e._runSymbolAnimation(t, !1, "winBonus"), yield K.delay($e.get("reward_scatter"))
                        }))()
                    }
                    breakAllPayment() {
                        this.slot.textTotalWin.break()
                    }
                    complete() {
                        this.isStop ? this.stop() : this._wins.length > 0 && this._flush()
                    }
                    _flush() {
                        var t = !0,
                            e = e => {
                                this.slot.reels.forEach((t => t.overlay()));
                                var i = this._wins[e];
                                this._runSymbolAnimation(i, !1), t && this._showLineText(i), this.slot.lines.show([i])
                            },
                            i = 0;
                        e(i++), this._flushInterval = setInterval((() => {
                            i >= this._wins.length && (t = !1, i = 0), e(i++)
                        }), $e.get("reward_flush"))
                    }
                    _findSymbol(t, e) {
                        return this.slot.reels[t].visibleSymbols[e]
                    }
                    _runSymbolAnimation(t) {
                        var {
                            pos: e
                        } = t, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "normal";
                        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this.slot.reels.forEach((t => t.stopAnimation()));
                        for (var s = 0; s < e.length; s++)
                            if (-1 !== e[s]) {
                                var o = e[s];
                                this._findSymbol(s, o).playAnimation(i, 100 * s)
                            }
                    }
                    _showLineText(t) {
                        var {
                            pos: e,
                            win: i
                        } = t, s = e.length, o = Math.round(e.length / 2) - 1, n = e.reduce(((t, e, i) => {
                            var n = Math.abs(o - i);
                            return e > -1 && n <= s && (s = n, t = i), t
                        }), -1), a = this._findSymbol(n, e[n]), h = a.x + a.width / 2, r = a.y + a.height / 2;
                        this.slot.textLineWin.show(h, r, i)
                    }
                };
                class No {
                    constructor() {
                        (0, o.Z)(this, "container", void 0), (0, o.Z)(this, "tween", void 0), this.container = new a.BitmapText("", {
                            fontName: "WinFont"
                        }), this.container.anchor = .4, this.container.alpha = 0
                    }
                    show(t, e, i) {
                        this.container.scale.set(.3), this.container.x = t, this.container.y = e, this.container.text = "".concat(K.i18n.currency({
                            bitmap: !0
                        })).concat(K.helpers.toMoney(i)), this.container.alpha = 1, this.hide()
                    }
                    hide() {
                        this.tween = h.kX.to(this.container, .2, {
                            pixi: {
                                alpha: 0,
                                y: this.container.y - 30,
                                scale: this.container.scale.x + .1
                            },
                            onComplete: () => {
                                this.container.text = ""
                            },
                            delay: 1
                        })
                    }
                    clear() {
                        this.tween && this.tween.kill(), this.container.text = "", this.container.alpha = 0
                    }
                }
                class _o extends a.Container {
                    constructor(t, e) {
                        super(), (0, o.Z)(this, "_endTween", void 0), (0, o.Z)(this, "_endY", void 0), (0, o.Z)(this, "_nReel", void 0), (0, o.Z)(this, "_numberSpinToComplete", void 0), (0, o.Z)(this, "_reel", void 0), (0, o.Z)(this, "_reelIndex", void 0), (0, o.Z)(this, "_spinTween", void 0), (0, o.Z)(this, "_startTween", void 0), (0, o.Z)(this, "_startY", void 0), (0, o.Z)(this, "_stopTimeout", void 0), (0, o.Z)(this, "_stopTimeoutDuration", void 0), (0, o.Z)(this, "isStop", void 0), (0, o.Z)(this, "symbolsPositions", void 0), (0, o.Z)(this, "visibleSymbols", void 0), (0, o.Z)(this, "wildReels", [!1, !1, !1, !1, !1, !1]), this.interactiveChildren = !1, this.visibleSymbols = [], this.symbolsPositions = e, this._startY = 0, this._endY = 0, this._reel = [], this._nReel = [], this._reelIndex = t, this._numberSpinToComplete = 0, this.isStop = !1, this._stopTimeout = null, this._stopTimeoutDuration = 0, this._startTween = new h.kX(this, K.config.get("wheel.durationSpin"), {
                            paused: !0,
                            roundProps: ["y"],
                            pixi: {
                                y: -K.config.get("wheel.deltaStop")
                            },
                            ease: "Linear.easeNone",
                            yoyo: !0,
                            repeat: 1,
                            repeatDelay: 0,
                            onComplete: () => {
                                this.children.forEach((t => {
                                    t.blur()
                                })), this._spinTween.restart()
                            },
                            onStart: () => {
                                this.visible = !0, this.visible = !this.wildReels[this._reelIndex]
                            }
                        }), this._spinTween = new h.kX(this, K.config.get("wheel.durationSpin"), {
                            paused: !0,
                            roundProps: ["y"],
                            pixi: {
                                y: K.config.get("symbol.y")
                            },
                            ease: "Linear.easeNone",
                            repeat: -1,
                            repeatDelay: 0,
                            onRepeat: this._spin.bind(this)
                        }), this._endTween = new h.kX(this, .01, {
                            paused: !0,
                            roundProps: ["y"],
                            pixi: {
                                y: K.config.get("wheel.deltaStop")
                            },
                            ease: "Linear.easeNone",
                            yoyo: !0,
                            repeat: 1,
                            repeatDelay: 0,
                            onComplete: this._complete.bind(this)
                        }), K.action.on("spin:fast", (() => {
                            K.state.is("stop") && this.stop()
                        })), K.action.on("free:stop", (() => {
                            this.restore()
                        })), K.action.on("bonus:select_stop", (() => {
                            this.wildReels = [!1, !1, !1, !1, !1, !1]
                        })), this._setup()
                    }
                    start() {
                        this.stopAnimation(), (si.isFreespin() || si.isBonus()) && (this.wildReels = K.store.get("reward:isWildReel")), this.isStop = !1, this._numberSpinToComplete = this.visibleSymbols.length;
                        var t = K.store.get("reward:prenReels", []),
                            e = 0 !== t.length ? t : K.store.get("reward:nReels", []);
                        this._nReel = e[this._reelIndex].concat(), this.children.forEach(((t, e) => {
                            (t.y < this.visibleSymbols[0].y || t.y > this.visibleSymbols[this.visibleSymbols.length - 1].y) && t.replaceTexture(this._nReel[e])
                        }));
                        var i = K.quickSpin.enabled ? K.config.get("wheel.durationQuickDelta") : K.config.get("wheel.durationDelta");
                        this._endTween.duration(i), this._stopTimeoutDuration = K.quickSpin.enabled ? K.config.get("wheel.durationQuickStop") : K.config.get("wheel.durationStop"), this.children[0].alpha = 1, this.children[this.children.length - 1].alpha = 1, this._startTween.restart()
                    }
                    stop() {
                        if (!this.isStop) {
                            for (var t = 0, e = 0; e < this._reelIndex; e++) this.wildReels[e] && (t += 1);
                            var i = this._stopTimeoutDuration * (this._reelIndex - t);
                            if (!si.isBonus() && !si.isFreespin()) {
                                var s = K.store.get("reward:nReels", []);
                                this._nReel = s[this._reelIndex].concat()
                            }
                            var o = K.store.get("reward:reels", []);
                            this._reel = o[this._reelIndex].concat(), K.store.get("spin:isFast", !1) ? (K.action.emit("sound:spinFast"), clearTimeout(this._stopTimeout), this.isStop = !0) : this._stopTimeout = setTimeout((() => this.isStop = !0), i)
                        }
                    }
                    overlay() {
                        this.visibleSymbols.forEach((t => t.overlay()))
                    }
                    stopAnimation() {
                        this.visibleSymbols.forEach((t => t.stopAnimation()))
                    }
                    clearAnimation() {
                        this.visibleSymbols.forEach((t => t.clearAnimation()))
                    }
                    _updateVisibleSymbols() {
                        this.visibleSymbols.length = 0;
                        for (var t = 1, e = this.children.length - 1; t < e; t++) this.visibleSymbols.push(this.children[t])
                    }
                    _setup() {
                        var t = K.store.get("reward:nReels", []);
                        this._nReel = t[this._reelIndex].concat();
                        var e, i = K.store.get("reward:reels", []);
                        this._reel = i[this._reelIndex].concat();
                        for (var s = 0, o = this._nReel.length; s < o; s++) {
                            var [n, a] = this.symbolsPositions[s];
                            e = 0 === s || s === o - 1 ? this._nReel[s] : this._reel[s - 1];
                            var h = new Io(n, a, e);
                            this.addChild(h), s > 0 && s < o - 1 && this.visibleSymbols.push(h)
                        }
                        this._startY = this.children[0].y, this.children[0].alpha = 0, this.children[this.children.length - 1].alpha = 0
                    }
                    _spin() {
                        if (this._flip(), this.isStop)
                            if (this._numberSpinToComplete > 0) {
                                var t = this._reel[--this._numberSpinToComplete];
                                this.children[0].replaceTexture(t)
                            } else this.y = 0, this.children[0].y = this._startY, this._updateVisibleSymbols(), this.visibleSymbols.forEach((t => t.unblur())), K.action.emit("wheel:stop_down"), this._spinTween.pause(), this._endTween.restart(), this.children[this.children.length - 1].alpha = 0
                    }
                    _flip() {
                        var t = this.children.pop();
                        t.y = this._startY, !this.isStop && this._nReel.length > 0 && t.replaceTexture(this._nReel.pop());
                        for (var e = 0, i = this.children.length; e < i; e++) this.children[e].y = e * -this._startY;
                        this.children.unshift(t)
                    }
                    _complete() {
                        this.children[0].alpha = 0, this.y = 0, this._reel.length = 0, this._endTween.pause(), clearTimeout(this._stopTimeout), K.action.emit("wheel:stop", this._reelIndex), this.visible = !0
                    }
                    restore() {
                        for (var t = K.store.get("reward:preReels")[this._reelIndex], e = this.visibleSymbols.length, i = 0; i < e; i++) this.visibleSymbols[i].replaceTexture(t[i])
                    }
                    update(t, e, i) {
                        for (var s = this.visibleSymbols.length, o = 0; o < s; o++) this.visibleSymbols[o].replaceTexture(t[o], e, i)
                    }
                }
                class Uo extends Co {
                    constructor() {
                        super(), (0, o.Z)(this, "animation", void 0), (0, o.Z)(this, "reels", void 0), (0, o.Z)(this, "reelsContainer", void 0), (0, o.Z)(this, "stopReelCounter", void 0), (0, o.Z)(this, "symbolsPositions", void 0), (0, o.Z)(this, "textLineWin", void 0), (0, o.Z)(this, "textTotalWin", void 0), (0, o.Z)(this, "lines", void 0), (0, o.Z)(this, "slotData", void 0), (0, o.Z)(this, "reelsMask", void 0), (0, o.Z)(this, "bonusNextLevelText", void 0), (0, o.Z)(this, "sticky", void 0), (0, o.Z)(this, "bonusScale", void 0), this.pivot.set(660, 0), this.reels = [], this.symbolsPositions = this.game.config.get("slot.symbolsPositions", []), this.stopReelCounter = 0, this.animation = new Lo(this), this.init(), this.setupEvents()
                    }
                    createMask() {
                        var t = new a.Graphics;
                        return t.beginFill(), t.drawRect(0, 17, this.game.config.get("slot.width"), this.game.config.get("slot.height") - 86), t.endFill(), t
                    }
                    init() {
                        var t, e;
                        this.reelsContainer = new a.Container;
                        var i = this.reelsContainer.addChild(this.createMask());
                        this.reelsContainer.mask = i;
                        for (var s = this.game.config.get("slot.size[0]"), o = 0; o < s; o++) {
                            var n = this.symbolsPositions[o],
                                h = new _o(o, n);
                            this.reels.push(h), this.reelsContainer.addChild(h)
                        }
                        this.slotData = {
                            reels: this.reels.map((t => t.visibleSymbols)),
                            lines: null !== (t = null === (e = this.game.server) || void 0 === e ? void 0 : e.response.lines) && void 0 !== t ? t : []
                        }, this.lines = new Bo(this.slotData.lines.map((t => ({
                            color: 16763904,
                            width: 4,
                            padding: 110,
                            points: t.map(((t, e) => {
                                var i = this.slotData.reels[e][t];
                                return {
                                    position: [i.x, i.y],
                                    size: [i.width, i.height]
                                }
                            }))
                        })))), this.textTotalWin = new Po(1, "1.4"), this.textTotalWin.position.set(638, 600), this.textLineWin = new No, this.bonusNextLevelText = new To, this.bonusNextLevelText.position.set(630, 440), this.sticky = new Wo(this), this.bonusScale = new Zo, this.addChild(this.reelsContainer), this.addChild(this.lines), this.addChild(Mo), this.addChild(this.sticky), this.addChild(this.textLineWin.container), this.addChild(this.textTotalWin), this.addChild(this.bonusNextLevelText), this.addChild(this.bonusScale)
                    }
                    setupEvents() {
                        this.game.action.on("state:ready_enter", this._onReadyEnter, this), this.game.action.on("state:spin_enter", this._onSpinEnter, this), this.game.action.on("state:stop_enter", this._onStopEnter, this), this.game.action.on("bonus:select_start", (() => {
                            h.kX.fromTo(this, .5, {
                                pixi: {
                                    alpha: 0
                                }
                            }, {
                                pixi: {
                                    alpha: 1
                                }
                            }), this.resize()
                        })), this.game.action.on("bonus:select_stop", (() => {
                            h.kX.fromTo(this, .5, {
                                pixi: {
                                    alpha: 0
                                }
                            }, {
                                pixi: {
                                    alpha: 1
                                }
                            }), this.sticky.hide(), this.bonusScale.hide(), this.bonusScale.reset(), this.resize()
                        })), this.game.action.on("bonus:start", (() => {
                            this.animation.stop(), this.reels.forEach(((t, e) => {
                                var i = this.game.store.get("reward:fsReels", []);
                                t.update(i[e], !1, !0)
                            }))
                        })), this.game.action.on("bonus:stop", (() => {
                            this.animation.stop(), this.lines.enable(), this.reels.forEach(((t, e) => {
                                var i = this.game.store.get("reward:preReels", []);
                                t.update(i[e], !0)
                            }))
                        })), this.game.action.on("state:finish_enter", this._onFinishEnter, this), this.game.action.on("wheel:stop", this._onStopWheel, this), this.game.action.on("spin:fast", this._onFastStop, this), this.game.action.on("reward:reset", this._onResetReward, this), this.game.action.on("state:setup_enter", (() => {
                            (si.isFreespin() || si.isBonus()) && (this.alpha = 0)
                        }))
                    }
                    _onReadyEnter() {
                        var t = this;
                        return (0, s.Z)((function*() {
                            var e = t.game.autoPlay.enabled;
                            if (si.isFreespin() || si.isBonus()) {
                                var i = t.game.store.get("free:isStart", !1) ? $e.get("beforeFreeSpins") : $e.get("inFreeSpins");
                                setTimeout((() => {
                                    t.game.action.emit("spin:start")
                                }), i)
                            } else e ? setTimeout((() => {
                                t.game.action.emit("spin:start")
                            }), $e.get("before_spin_auto")) : "init" !== t.game.server.response.action || si.isFreespin() || si.isBonus() || t.runSymbolAnimation({
                                animationName: "idle"
                            })
                        }))()
                    }
                    updateBonusLeft() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (si.isBonus() || si.isFreespin()) {
                            var e = this.game.store.get("bonus:left", 0) - (t ? 0 : 1);
                            this.game.get("Controls").updateBonusLeft(e)
                        }
                    }
                    _onSpinEnter() {
                        var t = this;
                        return (0, s.Z)((function*() {
                            t.lines.disable(), t.animation.stop(), t.sticky.spin();
                            try {
                                yield t.game.beforeSpin(), t.game.store.get("bonus:nextLevel", !1) && (t.game.get("Controls").updateBonusLeft(t.game.store.get("bonus:left", 0)), t.bonusScale.showFree(), t.bonusScale.update(t.game.store.get("bonus:left", 0), !0), yield t.bonusNextLevelText.show()), t.updateBonusLeft(), t.bonusScale.update(t.game.store.get("bonus:left", 0) - 1), (si.isBonus() || si.isFreespin()) && t.game.action.emit("sound:bonusScaleDown"), t.reels.forEach((t => t.start())), yield t.requestSpin(), t.game.state.goTo("stop")
                            } catch (e) {
                                yield t.game.catchError(e), (null == e ? void 0 : e.message) !== I.INSUFFICIENT_BALANCE && (null == e ? void 0 : e.message) !== I.SPENDING_BUDGET_EXCEEDED || t.game.state.goTo("stop")
                            }
                        }))()
                    }
                    _onStopEnter() {
                        this.reels.forEach((t => t.stop()))
                    }
                    _onFastStop() {
                        this.game.state.is("stop") && this.reels.forEach((t => t.stop(!0)))
                    }
                    _onFinishEnter() {
                        var t = this;
                        return (0, s.Z)((function*() {
                            t.stopReelCounter = 0, si.set(t.game.store.get("reward:feature")), si.isFreespin() || si.isBonus() || (yield t.game.freeRound.finish()), t.game.autoPlay.enabled ? t.game.checkBalance().then((() => {
                                t.game.state.goTo("ready")
                            })).catch((() => {
                                t.game.autoPlay.disable(), t.game.state.goTo("ready")
                            })) : t.game.state.goTo("ready")
                        }))()
                    }
                    _onStopWheel(t) {
                        var e = this;
                        return (0, s.Z)((function*() {
                            try {
                                if (!si.isFreespin() && !si.isBonus()) {
                                    if (e.reels[t].visibleSymbols.forEach((t => t.playStop())), !e.game.store.get("spin:isFast", !1)) e.game.store.get("reward:reels", [])[t].indexOf(0) > -1 && e.game.action.emit("sound:bonusSymbol");
                                    yield e.game.helpers.delay(500)
                                }
                                e.stopReelCounter++, e.stopReelCounter >= e.reels.length && (e.game.afterReelsStop(), e.game.store.get("bonus:extraSpins", !1) && (e.updateBonusLeft(!0), e.bonusScale.update(e.game.store.get("bonus:left", 0))), yield e.sticky.show(), e.game.state.goTo("reward"))
                            } catch (t) {
                                return console.error(t), t
                            }
                        }))()
                    }
                    _onResetReward() {
                        this.animation.stop(), this.lines.enable()
                    }
                    beforeFreeSpinsPopup() {
                        h.kX.fromTo(this, .5, {
                            pixi: {
                                alpha: 1
                            }
                        }, {
                            pixi: {
                                alpha: 0
                            }
                        })
                    }
                    getReel(t) {
                        return this.reels[t]
                    }
                    getSymbol(t, e) {
                        return this.getReel(t).visibleSymbols[e]
                    }
                    runSymbolAnimation(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                        e > -1 ? this.reels[e].visibleSymbols.forEach((e => e.playAnimation(t))) : this.reels.forEach((e => {
                            e.visibleSymbols.forEach(((e, i) => {
                                t.symbolPosition = i, e.playAnimation(t)
                            }))
                        }))
                    }
                    resize() {
                        this.game.device.desktop || this.game.device.landscape ? (this.scale.set(1), this.position.set(990, 50), this.textTotalWin.scale.set(1)) : (this.scale.set(.75), this.position.set(554, 270), this.textTotalWin.scale.set(.8))
                    }
                }
                class jo extends(J(a.Container)) {
                    constructor() {
                        super(), (0, o.Z)(this, "timeline", void 0), (0, o.Z)(this, "content", void 0), (0, o.Z)(this, "overlay", void 0), (0, o.Z)(this, "value", void 0), (0, o.Z)(this, "light", void 0), (0, o.Z)(this, "coins", void 0), (0, o.Z)(this, "onPress", void 0), this.visible = !1, this.interactive = !0, this.onPress = new(C()), this.game.interaction.click(this, (() => this.onPress.dispatch())), this.timeline = new h.TY, this.content = new a.Container, this.overlay = new a.Graphics, this.overlay.beginFill(0, .75), this.overlay.drawRect(0, 0, this.game.config.get("application.width"), this.game.config.get("application.height")), this.overlay.endFill(), this.value = new a.BitmapText("", {
                            fontName: "WinFont"
                        }), this.value.anchor = .5, this.light = new Oi(this.game.loader.getAsset("assets/images/effects/bigGiantWin/skeleton.json")), this.light.changeSkin("bigWin"), this.light.alpha = 0, this.coins = new Oi(this.game.loader.getAsset("assets/images/effects/bigGiantWin/skeleton.json")), this.coins.changeSkin("giantWin"), this.coins.alpha = 0, this.content.addChild(this.light), this.content.addChild(this.coins), this.content.addChild(this.value), this.addChild(this.overlay), this.addChild(this.content)
                    }
                    show(t, e) {
                        var i = this;
                        return (0, s.Z)((function*() {
                            var s = 0;
                            t === Tt ? (s = 9, i.game.action.emit("sound:bigWin")) : t === Et && (s = 18, i.game.action.emit("sound:giantWin"));
                            var o = !1;
                            i.visible = !0, i.resize();
                            var n = i.value.scale.x;
                            return new Promise((a => {
                                i.overlay.alpha = 0, i.content.alpha = 0, i.value.alpha = 0, i.timeline.eventCallback("onComplete", (() => {
                                    i.hide(), a()
                                }));
                                var r = {
                                    coins: 0
                                };
                                i.timeline.to(i.overlay, .35, {
                                    pixi: {
                                        alpha: 1
                                    }
                                }, 0).to(i.value, .5, {
                                    pixi: {
                                        alpha: 1,
                                        scale: n
                                    }
                                }, .35).to(i.content, .5, {
                                    pixi: {
                                        alpha: 1
                                    }
                                }, .35).to(r, s, {
                                    coins: e,
                                    ease: h.oY.Linear.easeNone,
                                    roundProps: ["coins"],
                                    onStart: () => {
                                        i.light.play("animation", !0), i.light.alpha = 1
                                    },
                                    onUpdate: () => {
                                        !o && t === Et && r.coins > e / 2 && (o = !0, i.coins.play("animation", !0), i.coins.alpha = 1, h.kX.to(i.value, s / 2, {
                                            pixi: {
                                                scale: n + .2
                                            }
                                        })), i.value.text = "".concat(i.game.i18n.currency({
                                            bitmap: !0
                                        }), "<value>").concat(i.game.helpers.toMoney(r.coins), "</value>")
                                    }
                                }, .35), i.timeline.addLabel("break", "+=0.75"), i.timeline.to([i.overlay, i.content], .2, {
                                    pixi: {
                                        alpha: 0
                                    }
                                }, "break+=1")
                            }))
                        }))()
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
                        this.game.device.desktop || this.game.device.landscape ? (this.scale.set(1), this.overlay.height = this.game.viewport.height, this.overlay.width = this.game.viewport.width, this.overlay.position.set(0, 0), this.content.position.set(this.game.viewport.width / 2, 300), this.light.scale.set(1), this.light.position.set(-960, -300), this.coins.scale.set(1), this.coins.position.set(-960, -300), this.value.scale.set(.8), this.value.position.set(0, 450)) : (this.scale.set(.5625), this.overlay.height = (2 * this.game.viewport.paddingY + this.game.viewport.height) / .5625, this.overlay.width = (2 * this.game.viewport.paddingX + this.game.viewport.width) / .5625, this.overlay.position.set(-this.game.viewport.paddingX / .5625, 0), this.content.position.set(this.game.viewport.width / .5625 / 2, 0), this.light.scale.set(1.5), this.light.position.set(-1430, 0), this.coins.scale.set(2), this.coins.position.set(-1900, -910), this.value.scale.set(1.2), this.value.position.set(0, 1300))
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
                            a.Ticker.shared.update(), this.renderer.render(this.rootNode)
                        })), (0, o.Z)(this, "destroy", (() => {
                            h.vB.removeEventListener("tick", this.tick), a.Ticker.shared.destroy(), a.utils.destroyTextureCache(), this.renderer.destroy(), this.loader.destroy()
                        })), K = this, a.Ticker.shared.autoStart = !1, a.Ticker.shared.stop(), this.config = new u(j), this.logger = new R, this.rootNode = this.createRootNode(), this.renderer = new F, this.i18n = new x(e), this.helpers = new S(this.config), this.keyboard = new T, this.device = new y(this.renderer), this.viewport = new N, this.leftHand = new v, this.fullscreen = this.device.ios || this.device.iPadPro ? new m : new A(this.device), this.visibility = new X, this.preferences = new Y, this.sound = new q.$u(this.device, this.visibility, this.preferences), this.state = new L, this.store = new u, this.action = new w, this.loader = new O(this.device), this.error = new f, this.interaction = new k(this.device), this.externalApi = new U(this), this.popupManager = new G(this.rootNode), this.create(), this.initAnalytics()
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
                        var t = this.rootNode.addChild(new a.Graphics);
                        t.lineStyle(0), t.beginFill(0), t.drawRect(1, 1, this.settings.size[0] - 2, this.settings.size[1] - 2), t.endFill();
                        var e = () => {
                            this.device.ios && this.fullscreen.toggle(), this.renderer.resize(this.device.width, this.device.height), this.device.desktop || this.device.landscape ? (this.viewport.resize(this.settings.size[0], this.settings.size[1]), this.rootNode.scale.set(this.viewport.aspectRatio), this.rootNode.pivot.set(this.viewport.width / 2, this.viewport.height / 2), this.rootNode.position.set(this.device.width / 2, this.device.height / 2), this.rootNode.mask = t) : (this.viewport.resize(this.settings.size[1], this.settings.size[0]), this.rootNode.scale.set(this.viewport.aspectRatio), this.rootNode.pivot.set(this.viewport.width / 2, 0), this.rootNode.position.set(this.device.width / 2, 0), this.rootNode.mask = null), this.viewport.emit("resize"), this.renderer.render(this.rootNode)
                        };
                        h.vB.addEventListener("tick", this.tick), window.addEventListener("unload", this.destroy), window.addEventListener("resize", e), window.addEventListener("load", e), window.addEventListener("orientationchange", (() => setTimeout(e, 350))), document.addEventListener("keydown", (t => {
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
                                if ([I.SPENDING_BUDGET_EXCEEDED, I.INSUFFICIENT_BALANCE, I.MAX_BET_LIMIT_EXCEEDED].includes(null == t ? void 0 : t.message)) {
                                    var o, [n] = yield Promise.all([null === (o = e.popupManager) || void 0 === o ? void 0 : o.show({
                                        [I.SPENDING_BUDGET_EXCEEDED]: "PopupSpendingBudget",
                                        [I.MAX_BET_LIMIT_EXCEEDED]: "PopupMaxLimit",
                                        [I.INSUFFICIENT_BALANCE]: "PopupZeroBalance"
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
                        }()), this.server = this.enhanceServer(new W), this.server.on("response", this.onServerResponse, this)
                    }
                    init(t, e) {
                        var i = this;
                        return (0, s.Z)((function*() {
                            var s;
                            i.preferences.setPrefix(null !== (s = null == e ? void 0 : e.name) && void 0 !== s ? s : ""), i.initPopups(), yield i.connect(t), i.initModules(e), yield i.initSound(), yield i.showIntroScreen(), i.initViews(), i.mountViews(), i.initStates(), i.start()
                        }))()
                    }
                    initPopups() {
                        this.popupManager.add([new De, new Me, new Ie, new Oe, new Ue, new Fe, new Le, new Ne, new We, new Re, new _e])
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
                                    e.i18n.setTranslations(ze(ze(ze({}, i), n), o))
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
                            e.launcher = e.rootNode.addChild(new we);
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
                        this.config.merge(t, ze({
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
                        })), t.transformRequest([t => ze(ze({}, t), {}, {
                            action: "spin" === t.action ? this.store.get("server:nextAction") : t.action
                        })]), t
                    }
                } {
                    constructor() {
                        super(...arguments), (0, o.Z)(this, "wallet", void 0), (0, o.Z)(this, "bigWin", void 0), (0, o.Z)(this, "autoPlay", void 0), (0, o.Z)(this, "betLevel", void 0), (0, o.Z)(this, "freeRound", void 0), (0, o.Z)(this, "quickSpin", void 0), (0, o.Z)(this, "netPosition", new ce), (0, o.Z)(this, "currentTime", void 0), (0, o.Z)(this, "elapsedTime", void 0), (0, o.Z)(this, "copyright", void 0), (0, o.Z)(this, "menu", void 0), (0, o.Z)(this, "betSettings", void 0), (0, o.Z)(this, "autoPlaySettings", void 0), (0, o.Z)(this, "controls", void 0), (0, o.Z)(this, "riskFeature", void 0), (0, o.Z)(this, "nextRiskFeature", void 0), (0, o.Z)(this, "gameSettings", void 0), (0, o.Z)(this, "checkboxLeftHand", void 0), (0, o.Z)(this, "checkboxGameSounds", void 0), (0, o.Z)(this, "checkboxBackgroundSounds", void 0), (0, o.Z)(this, "checkboxQuickSpin", void 0), (0, o.Z)(this, "checkboxFullscreen", void 0), (0, o.Z)(this, "checkboxRiskFeature", void 0), (0, o.Z)(this, "checkboxIntroScreen", void 0)
                    }
                    initModules(t) {
                        var e, i, s;
                        super.initModules(t);
                        var o = this.server.response;
                        this.wallet = new ae(this.server), this.betLevel = new z(null == o ? void 0 : o.bet, null == o ? void 0 : o.bets, null !== (e = null == o ? void 0 : o.betCoins) && void 0 !== e ? e : 1), this.autoPlay = new ee({
                            counts: this.config.get("autoPlay.counts", [10, 25, 50, 100, 150, 300, -1]).map((t => {
                                var e = Number(t);
                                return -1 === e ? 1 / 0 : e
                            })).filter((t => t > 0))
                        }), this.freeRound = new se, this.quickSpin = new ne(this.config), this.bigWin = new ie(this.config.get("bigWin.bigMultiplier"), this.config.get("bigWin.giantMultiplier"), this.betLevel), this.config.set("autoPlay.available", this.autoPlay.available), this.config.set("quickSpin.available", this.quickSpin.available), this.netPosition.setEnabled(null !== (i = null == o || null === (s = o.gameConfig) || void 0 === s ? void 0 : s.netPosition) && void 0 !== i && i)
                    }
                    initViews() {
                        super.initViews(), this.currentTime = new re, this.elapsedTime = new le, this.copyright = new he
                    }
                    mountViews() {
                        super.mountViews(), this.netPosition.enabled && (this.rootNode.addChild(this.netPosition.toView(new de)), this.rootNode.addChild(this.elapsedTime)), this.rootNode.addChild(this.currentTime), this.rootNode.addChild(this.copyright)
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
                            [I.SPENDING_BUDGET_EXCEEDED, I.INSUFFICIENT_BALANCE, I.MAX_BET_LIMIT_EXCEEDED].includes(t) && (e.autoPlay.disable(), e.action.emit("update:balance", e.wallet.balance))
                        }))()
                    }
                    createQuickSpinCheckbox() {
                        return this.checkboxQuickSpin = new ve, this.checkboxQuickSpin.onClick.add((() => {
                            this.quickSpin.toggle()
                        })), this.checkboxQuickSpin
                    }
                    createFullscreenCheckbox() {
                        return this.checkboxFullscreen = new pe, this.checkboxFullscreen.onClick.add((() => {
                            this.fullscreen.toggle()
                        })), this.fullscreen.on("change", (t => {
                            var e;
                            return null === (e = this.checkboxFullscreen) || void 0 === e ? void 0 : e.setChecked(t)
                        })), this.checkboxFullscreen
                    }
                    createLeftHandCheckbox() {
                        return this.checkboxLeftHand = new Ae, this.checkboxLeftHand.onClick.add((() => {
                            this.leftHand.toggle()
                        })), this.checkboxLeftHand
                    }
                    createGameSoundsCheckbox() {
                        return this.checkboxGameSounds = new ge, this.checkboxGameSounds.onClick.add((() => {
                            this.sound.toggle("effects")
                        })), this.checkboxGameSounds
                    }
                    createBackgroundSoundsCheckbox() {
                        return this.checkboxBackgroundSounds = new ue, this.checkboxBackgroundSounds.onClick.add((() => {
                            this.sound.toggle("background")
                        })), this.checkboxBackgroundSounds
                    }
                    createRiskFeatureCheckbox() {
                        if (this.config.get("rnb", !0)) return this.checkboxRiskFeature = new be, this.checkboxRiskFeature.setChecked(this.preferences.get("showRiskFeature", !0)), this.checkboxRiskFeature.onClick.add((t => {
                            var e, i;
                            this.preferences.set("showRiskFeature", t), null !== (e = this.riskFeature) && void 0 !== e && e.visible && this.riskFeature.hide(), null !== (i = this.nextRiskFeature) && void 0 !== i && i.visible && this.nextRiskFeature.hide()
                        })), this.checkboxRiskFeature
                    }
                    createIntroScreenCheckbox() {
                        return this.checkboxIntroScreen = new me, this.checkboxIntroScreen.setChecked(this.preferences.get("showIntroScreen", !0)), this.checkboxIntroScreen.onClick.add((t => {
                            this.preferences.set("showIntroScreen", t)
                        })), this.checkboxIntroScreen
                    }
                } {
                    constructor() {
                        super({}), (0, o.Z)(this, "autoPlaySettings", void 0), (0, o.Z)(this, "betSettings", void 0), (0, o.Z)(this, "bigWinAnimation", void 0), (0, o.Z)(this, "fastStopLayout", void 0), (0, o.Z)(this, "gameRules", void 0), (0, o.Z)(this, "menu", void 0), (0, o.Z)(this, "paytable", void 0), (0, o.Z)(this, "slot", void 0), (0, o.Z)(this, "introScreen", void 0), (0, o.Z)(this, "background", void 0), (0, o.Z)(this, "bonusOverlay", void 0), (0, o.Z)(this, "bonusTotalWin", void 0), (0, o.Z)(this, "riskPopup", void 0), (0, o.Z)(this, "riskButton", void 0), (0, o.Z)(this, "_soundState", !1), ri.init(), this.init(Xe, qe)
                    }
                    get canShowIntro() {
                        return this.preferences.get("showIntroScreen", !0) && "freespin" !== this.server.response.feature && "bonus" !== this.server.response.feature
                    }
                    createRootNode() {
                        var t = new n.Hf;
                        return t.sortableChildren = !0, t
                    }
                    loadTranslations() {
                        var t = () => super.loadTranslations,
                            e = this;
                        return (0, s.Z)((function*() {
                            return t().call(e, Ci)
                        }))()
                    }
                    loadAssets(t) {
                        var e = () => super.loadAssets,
                            i = this;
                        return (0, s.Z)((function*() {
                            return e().call(i, i.canShowIntro ? Ye : [...Ye, ...Xe])
                        }))()
                    }
                    initModules(t) {
                        super.initModules(t), this.sound = new li(this.device, this.visibility, this.preferences)
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
                            (t.background = t.rootNode.addChild(new Gi), t.canShowIntro) ? (t.background.gameStart(), t.introScreen = t.rootNode.addChild(new so), t.loader.on("progress", (e => t.introScreen.updateProgress(e))), yield t.loader.load(Xe), t.sound.init(t._soundState), null === (e = t.sound.get("backgroundNormal")) || void 0 === e || e.fade(2), yield t.introScreen.play()) : (t.sound.init(t._soundState), null === (i = t.sound.get("backgroundNormal")) || void 0 === i || i.fade(2))
                        }))()
                    }
                    initViews() {
                        var t, e, i, o, n, a = this;
                        super.initViews(), si.set(null !== (t = null === (e = this.server) || void 0 === e || null === (i = e.response) || void 0 === i ? void 0 : i.feature) && void 0 !== t ? t : ii.Basic), this.background.logo.alpha = 1, this.background.queen.alpha = 1, this.slot = this.rootNode.addChild(new Uo), this.nextRiskFeature = this.rootNode.addChild(new Di), this.paytable = new So(null !== (o = null === (n = this.server) || void 0 === n ? void 0 : n.response.lines) && void 0 !== o ? o : []), this.gameSettings = new Kt, this.gameSettings.addItem(this.createQuickSpinCheckbox()), this.gameSettings.addItem(this.createFullscreenCheckbox()), this.gameSettings.addItem(this.createLeftHandCheckbox()), this.gameSettings.addItem(this.createGameSoundsCheckbox()), this.gameSettings.addItem(this.createBackgroundSoundsCheckbox()), this.gameSettings.addItem(this.createIntroScreenCheckbox()), this.gameSettings.addItem(this.createRiskFeatureCheckbox()), this.bigWinAnimation = new jo, this.fastStopLayout = new Dt, this.controls = this.device.desktop ? new Is : new Gs, this.betSettings = this.rootNode.addChild(new Wt), this.betSettings.setBets(this.betLevel.bets, this.betLevel.betCoins), this.betSettings.setPayLines("25"), this.betSettings.setBet(this.betLevel.bet), this.autoPlaySettings = this.rootNode.addChild(new bt), this.autoPlaySettings.setAutoPlayCounts(this.autoPlay.counts), this.autoPlaySettings.stopSection.addItem(new Ot), this.autoPlaySettings.stopSection.addItem(new Ct), this.autoPlaySettings.stopSection.addItem(new kt), this.autoPlaySettings.stopSection.addItem(new Bt), this.gameRules = new Xt, this.menu = new $t, this.menu.addItem(this.loader.getAsset("iconPaytable"), this.paytable), this.menu.addItem(this.loader.getAsset("iconSettings"), this.gameSettings), this.menu.addItem(this.loader.getAsset("iconRules"), this.gameRules), this.rootNode.addChild(this.fastStopLayout), this.rootNode.addChild(this.menu), this.rootNode.addChild(this.controls), this.rootNode.addChild(this.bigWinAnimation), this.bonusOverlay = this.rootNode.addChild(new Hi), this.bonusTotalWin = this.rootNode.addChild(new Ti), this.riskPopup = this.rootNode.addChild(new ji), this.paytable.updateBet(this.betLevel), this.controls.updateBet(this.betLevel), this.betSettings.on("open", (() => {
                            this.menu.close(), this.autoPlaySettings.close(), this.controls.onBetSettingsOpen()
                        })), this.betSettings.on("close", (() => {
                            this.controls.onBetSettingsClose(), this.slot.runSymbolAnimation({
                                animationName: "idle"
                            })
                        })), this.betSettings.on("pickBet", (t => {
                            this.betLevel.set(this.betLevel.bets.indexOf(t)), this.store.get("isRiskNBuy") && !this.autoPlay.enabled && this.nextRiskFeature.showRiskButton(this.betLevel.bet)
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
                                this.autoPlay.enabled || (this.action.emit("sound:click"), this.action.emit("spin:start"))
                            })))
                        })), this.action.on("clickMaxBet", (() => {
                            this.freeRound.enabled || (this.action.emit("reward:reset"), this.menu.close(), this.betSettings.toggle(this.wallet.balance))
                        })), this.autoPlay.on("enable", (() => {
                            this.controls.onAutoPlayEnable(this.autoPlay.count)
                        })), this.autoPlay.on("disable", (() => {
                            this.controls.onAutoPlayDisable()
                        })), this.freeRound.onStart.once(function() {
                            var t = (0, s.Z)((function*(t, e) {
                                yield a.popupManager.show("PopupFreeRound", t), e()
                            }));
                            return function(e, i) {
                                return t.apply(this, arguments)
                            }
                        }()), this.freeRound.onFinish.once(function() {
                            var t = (0, s.Z)((function*(t) {
                                a.autoPlay.disable(), yield a.popupManager.show("PopupFreeRound"), t()
                            }));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()), this.nextRiskFeature.onPress.add((0, s.Z)((function*() {
                            if (a.action.emit("sound:click"), a.onPopupShow(), a.nextRiskFeature.hide(), a.wallet.balance - a.store.get("buy").bet < 0) yield a.popupManager.show("PopupZeroBalance"), a.onPopupHide();
                            else {
                                var t = yield a.riskPopup.show();
                                try {
                                    t && (a.controls.lock(), yield a.server.request({
                                        action: a.store.get("risk") ? "risk" : "buyin"
                                    }), si.set(a.store.get("reward:feature", ii.Basic)), a.onRNBStart(), a.beforeFreeSpinsPopup(), yield a.bonusOverlay.show(_i.START), a.slot.bonusScale.show(), a.slot.bonusScale.update(1, !0), a.slot.bonusScale.showBonus(), yield a.slot.sticky.show(!0), setTimeout((() => {
                                        a.controls.unlock(), a.action.emit("spin:start")
                                    }), $e.get("beforeFreeSpins"))), si.isBasic() && a.onPopupHide()
                                } catch (t) {
                                    yield a.catchError(t), a.controls.unlock()
                                }
                            }
                        }))), this.action.on("state:ready_enter", (() => {
                            this.store.get("isRiskNBuy") && !this.autoPlay.enabled && this.nextRiskFeature.showRiskButton(this.betLevel.bet)
                        })), this.action.on("state:reward_enter", this.reward()), this.action.on("state:spin_enter", (() => {
                            this.nextRiskFeature.hide(), this.nextRiskFeature.updateCurrentBet(this.betLevel.bet), this.autoPlay.enabled && si.isBasic() && (this.autoPlay.setCount(this.autoPlay.count - 1), this.controls.setAutoPlayCount(this.autoPlay.count)), this.controls.onSpinEnter()
                        })), this.action.on("state:finish_enter", (() => {
                            this.autoPlay.count <= 0 && this.autoPlay.disable(), this.controls.onFinishEnter()
                        }))
                    }
                    initStates() {
                        super.initStates(), this.state.add("setup", new vi(this), ["ready"]), this.state.add("ready", new pi(this), ["spin"]), this.state.add("spin", new wi(this), ["stop"]), this.state.add("stop", new fi(this), ["reward"]), this.state.add("reward", new mi(this), ["finish"]), this.state.add("finish", new ci(this), ["ready"])
                    }
                    beforeFreeSpinsPopup() {
                        this.slot.beforeFreeSpinsPopup(), this.controls.beforeFreeSpinsPopup(), this.background.beforeFreeSpinsPopup()
                    }
                    start() {
                        var t = () => super.start,
                            e = this;
                        return (0, s.Z)((function*() {
                            t().call(e), yield e.freeRound.start(), e.state.goTo("setup"), (si.isFreespin() || si.isBonus()) && (yield e.bonusOverlay.show(_i.RESTORE), e.slot.bonusScale.show(), e.slot.bonusScale.update(e.store.get("bonus:left", 0), !0), si.isBonus() ? e.slot.bonusScale.showBonus() : e.slot.bonusScale.showFree(), e.slot.sticky.show(!0)), e.state.goTo("ready")
                        }))()
                    }
                    reward() {
                        var t = this,
                            e = () => {
                                this.fastStopLayout.disable(), this.controls.disableButtonSpin()
                            },
                            i = () => {
                                e(), this.bigWinAnimation.break()
                            },
                            o = () => {
                                e(), this.bonusTotalWin.break()
                            },
                            n = () => {
                                e(), this.slot.animation.breakAllPayment()
                            };
                        return (0, s.Z)((function*() {
                            var s;
                            e(), null !== (s = t.bigWin) && void 0 !== s && s.available(t.wallet.coins) && (t.bigWinAnimation.press(i), t.controls.pressButtonSpin(i), yield t.bigWinAnimation.show(t.bigWin.type(t.wallet.coins), t.wallet.coins), t.sound.stopBigWin(), e());
                            var a = t.store.get("reward:lines", []),
                                h = t.store.get("reward:scatters", !1);
                            (a.length > 0 || t.wallet.scatterCoins) && (t.slot.animation.stop(), t.controls.disableButtonSpin(), t.slot.sticky.playWin(), t.slot.textTotalWin.once("show", (() => {
                                t.fastStopLayout.press(n, !1), t.controls.pressButtonSpin(n)
                            })), yield t.slot.animation.allPayment(a), e()), h && (t.controls.disableButtonSpin(), yield t.slot.animation.scatterPayment(h)), t.store.get("bonus:isStart", !1) ? (t.beforeFreeSpinsPopup(), yield t.bonusOverlay.show(_i.START), t.slot.bonusScale.show(), t.slot.bonusScale.update(1, !0), t.slot.bonusScale.showBonus(), yield t.slot.sticky.transformToSticky(), yield t.delay(1e3)) : (t.store.get("free:isEnd", !1) || t.store.get("bonus:isEnd", !1)) && (t.bonusTotalWin.onBeforeEnd.once((() => {
                                t.sound.stopBonusTotalWin()
                            })), t.slot.animation.stop(), yield t.bonusTotalWin.showExtra(t.store.get("free:winExtra", 0)), t.bonusTotalWin.press(o), t.controls.pressButtonSpin(o), yield t.bonusTotalWin.show(t.store.get("free:win", 0), t.store.get("free:winExtra", 0)), t.bonusTotalWin.hide(), t.beforeFreeSpinsPopup(), yield t.bonusOverlay.show(_i.END), yield t.delay(200)), e(), t.slot.animation.complete(), (t.store.get("free:isEnd", !1) || t.store.get("bonus:isEnd", !1)) && t.slot.runSymbolAnimation({
                                animationName: "idle"
                            }), t.action.emit("update:balance"), t.state.goTo("finish")
                        }))
                    }
                    checkBalance() {
                        var t = this;
                        return (0, s.Z)((function*() {
                            if (!(t.freeRound.enabled || si.isFreespin() || si.isBonus()) && t.wallet.balance < t.betLevel.toCoins()) {
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
                            t.autoPlay.enabled || si.isFreespin() || si.isBonus() || (yield t.quickSpin.tryEnable())
                        }))()
                    }
                    afterReelsStop() {
                        !this.store.get("spin:isFast", !1) || this.autoPlay.enabled || si.isBonus() || si.isFreespin() || this.quickSpin.update()
                    }
                }
            },
            8594: (t, e, i) => {
                "use strict";
                i.d(e, {
                    TY: () => n,
                    kX: () => o,
                    oY: () => h,
                    vB: () => a
                });
                var s = i(4891),
                    o = (i(3306), i(8657).Z, s.Q3),
                    n = s.b_,
                    a = null === s.Q3 || void 0 === s.Q3 ? void 0 : s.Q3.ticker,
                    h = {
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
                    h = i(6661),
                    r = i(9740),
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
                            }), this.type = r.kC.TYPE.AUDIO, this.loadType = r.kC.LOAD_TYPE.AUDIO, this._setFlag(r.kC.STATUS_FLAGS.LOADING, !0), this.onStart.dispatch(this), this.data.on("loaderror", this._boundOnError, !1), this.data.on("load", this._boundComplete, !1), this.sound = this.data))
                        }, t.complete = function() {
                            var t;
                            if (this.data && (this.data.off("loaderror", this._boundOnError, !1), this.data.off("load", this._boundComplete, !1)), this.isComplete) throw new Error("Complete called again for an already completed resource.");
                            this._setFlag(r.kC.STATUS_FLAGS.COMPLETE, !0), this._setFlag(r.kC.STATUS_FLAGS.LOADING, !1);
                            var e = null !== (t = this.name) && void 0 !== t ? t : this.url;
                            u.set(e, c(c({}, this.metadata.audioMetadata), {}, {
                                id: e,
                                sound: this.sound,
                                muted: !1
                            })), this.onComplete.dispatch(this)
                        }, t._boundComplete = t.complete.bind(t), e()) : e()
                    }
                }(0, s.Z)(m, "extension", h.n.Loader), (0, s.Z)(m, "supportedSoundExtensions", ["mp3"])
            },
            8442: (t, e, i) => {
                "use strict";
                i.d(e, {
                    Oc: () => m,
                    PY: () => c.PY,
                    sf: () => a.AttachmentType
                });
                var s, o = i(6866),
                    n = (i(1293), i(6661)),
                    a = i(9534),
                    h = i(1162),
                    r = i(1368),
                    l = i(9685),
                    d = i(5083),
                    c = i(2339);
                i(3113);

                function u(t) {
                    var e = t.substr(0, 3),
                        i = Math.floor(10 * +e + .001);
                    return "3.7" === e ? s.VER37 : "3.8" === e ? s.VER38 : "4.0" === e ? s.VER40 : "4.1" === e ? s.VER41 : i < s.VER37 ? s.VER37 : s.UNKNOWN
                }(function(t) {
                    t[t.UNKNOWN = 0] = "UNKNOWN", t[t.VER37 = 37] = "VER37", t[t.VER38 = 38] = "VER38", t[t.VER40 = 40] = "VER40", t[t.VER41 = 41] = "VER41"
                })(s || (s = {}));
                class p {
                    constructor() {
                        (0, o.Z)(this, "scale", 1)
                    }
                    readSkeletonData(t, e) {
                        var i = new a.BinaryInput(e);
                        i.readString();
                        var o = i.readString(),
                            n = u(o),
                            h = null;
                        if (n === s.VER38 && (h = new l.SkeletonBinary(new l.AtlasAttachmentLoader(t))), (i = new a.BinaryInput(e)).readInt32(), i.readInt32(), (n = u(o = i.readString())) !== s.VER40 && n !== s.VER41 || (h = new d.SkeletonBinary(new d.AtlasAttachmentLoader(t))), !h) {
                            var r = "Unsupported version of spine model ".concat(o, ", please update pixi-spine");
                            console.error(r)
                        }
                        return h.scale = this.scale, h.readSkeletonData(e)
                    }
                }
                class g {
                    constructor() {
                        (0, o.Z)(this, "scale", 1)
                    }
                    readSkeletonData(t, e) {
                        var i = e.skeleton.spine,
                            o = u(i),
                            n = null;
                        if (o === s.VER37 && (n = new r.SkeletonJson(new r.AtlasAttachmentLoader(t))), o === s.VER38 && (n = new l.SkeletonJson(new l.AtlasAttachmentLoader(t))), o !== s.VER40 && o !== s.VER41 || (n = new d.SkeletonJson(new d.AtlasAttachmentLoader(t))), !n) {
                            var a = "Unsupported version of spine model ".concat(i, ", please update pixi-spine");
                            console.error(a)
                        }
                        return n.scale = this.scale, n.readSkeletonData(e)
                    }
                }
                class m extends h.go {
                    createBinaryParser() {
                        return new p
                    }
                    createJsonParser() {
                        return new g
                    }
                    parseData(t, e, i, s) {
                        var o = e;
                        t.spineData = o.readSkeletonData(i, s), t.spineAtlas = i
                    }
                }(0, o.Z)(m, "extension", n.n.Loader), (0, o.Z)(m, "use", (new m).genMiddleware().use)
            },
            9076: (t, e, i) => {
                "use strict";
                i.r(e), i.d(e, {
                    ALPHA_MODES: () => S.ALPHA_MODES,
                    AbstractBatchRenderer: () => h.eo,
                    AbstractMultiResource: () => h.M4,
                    AbstractRenderer: () => h.I8,
                    AppLoaderPlugin: () => v.LP,
                    ArrayResource: () => h.$N,
                    Attribute: () => h.ah,
                    BLEND_MODES: () => S.BLEND_MODES,
                    BUFFER_BITS: () => S.BUFFER_BITS,
                    BUFFER_TYPE: () => S.BUFFER_TYPE,
                    BaseImageResource: () => h.bg,
                    BasePrepare: () => c.Zq,
                    BaseRenderTexture: () => h.jd,
                    BaseTexture: () => h.VL,
                    BatchDrawCall: () => h.a$,
                    BatchGeometry: () => h.JZ,
                    BatchPluginFactory: () => h.TJ,
                    BatchRenderer: () => h.Bv,
                    BatchShaderGenerator: () => h.Zk,
                    BatchSystem: () => h.Sj,
                    BatchTextureArray: () => h.Ie,
                    BitmapFont: () => g.UP,
                    BitmapFontData: () => g.d0,
                    BitmapFontLoader: () => g.vl,
                    BitmapText: () => g.Xz,
                    Bounds: () => x.YZ,
                    BrowserAdapter: () => T.ZQ,
                    Buffer: () => h.lW,
                    BufferResource: () => h.qm,
                    CLEAR_MODES: () => S.CLEAR_MODES,
                    COLOR_MASK_BITS: () => S.COLOR_MASK_BITS,
                    CanvasResource: () => h.Y8,
                    Circle: () => B.Circle,
                    Container: () => x.W2,
                    ContextSystem: () => h.lH,
                    CountLimiter: () => c.fh,
                    CubeResource: () => h.TA,
                    DEG_TO_RAD: () => B.DEG_TO_RAD,
                    DRAW_MODES: () => S.DRAW_MODES,
                    DisplayObject: () => x.s$,
                    ENV: () => S.ENV,
                    Ellipse: () => B.Ellipse,
                    ExtensionType: () => h.nw,
                    FORMATS: () => S.FORMATS,
                    FillStyle: () => l.ft,
                    Filter: () => h.wn,
                    FilterState: () => h.jV,
                    FilterSystem: () => h.kV,
                    Framebuffer: () => h.AI,
                    FramebufferSystem: () => h.WB,
                    GC_MODES: () => S.GC_MODES,
                    GLFramebuffer: () => h.tT,
                    GLProgram: () => h.Ei,
                    GLTexture: () => h.fy,
                    GRAPHICS_CURVES: () => l.wA,
                    Geometry: () => h.ZX,
                    GeometrySystem: () => h.TO,
                    Graphics: () => l.TC,
                    GraphicsData: () => l.iM,
                    GraphicsGeometry: () => l.RB,
                    IGLUniformData: () => h.W1,
                    INSTALLED: () => h.e_,
                    ImageBitmapResource: () => h._w,
                    ImageResource: () => h.PA,
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
                    MaskData: () => h.HI,
                    MaskSystem: () => h.zj,
                    Matrix: () => B.Matrix,
                    Mesh: () => C.Kj,
                    MeshBatchUvs: () => C.wQ,
                    MeshGeometry: () => C.xc,
                    MeshMaterial: () => C.rY,
                    ObjectRenderer: () => h.bO,
                    ObservablePoint: () => B.ObservablePoint,
                    PI_2: () => B.PI_2,
                    PRECISION: () => S.PRECISION,
                    Point: () => B.Point,
                    Polygon: () => B.Polygon,
                    Prepare: () => c.B9,
                    Program: () => h.$r,
                    ProjectionSystem: () => h.NW,
                    Quad: () => h.lD,
                    QuadUv: () => h.ud,
                    RAD_TO_DEG: () => B.RAD_TO_DEG,
                    RENDERER_TYPE: () => S.RENDERER_TYPE,
                    Rectangle: () => B.Rectangle,
                    RenderTexture: () => h.TI,
                    RenderTexturePool: () => h.uW,
                    RenderTextureSystem: () => h.J$,
                    Renderer: () => h.Th,
                    Resource: () => h._z,
                    RoundedRectangle: () => B.RoundedRectangle,
                    Runner: () => P.R,
                    SAMPLER_TYPES: () => S.SAMPLER_TYPES,
                    SCALE_MODES: () => S.SCALE_MODES,
                    SHAPES: () => B.SHAPES,
                    SVGResource: () => h.pX,
                    ScissorSystem: () => h.id,
                    Shader: () => h.ex,
                    ShaderSystem: () => h.p,
                    SimpleRope: () => f.IE,
                    SmoothGraphics: () => k.K3,
                    Sprite: () => E.j,
                    SpriteMaskFilter: () => h.z9,
                    Spritesheet: () => u.c,
                    SpritesheetLoader: () => u.o,
                    State: () => h.ZM,
                    StateSystem: () => h.zI,
                    StencilSystem: () => h.Ld,
                    System: () => h.xP,
                    TARGETS: () => S.TARGETS,
                    TEXT_GRADIENT: () => p.M_,
                    TYPES: () => S.TYPES,
                    TemporaryDisplayObject: () => x.Ql,
                    Text: () => p.xv,
                    TextFormat: () => g.SQ,
                    TextMetrics: () => p._A,
                    TextStyle: () => p.pn,
                    Texture: () => h.xE,
                    TextureGCSystem: () => h.wr,
                    TextureLoader: () => v.dp,
                    TextureMatrix: () => h.UX,
                    TextureSystem: () => h.CT,
                    TextureUvs: () => h.aF,
                    Ticker: () => O.vB,
                    TickerPlugin: () => O.Sb,
                    TilingSprite: () => Z.o,
                    TilingSpriteRenderer: () => Z.S,
                    TimeLimiter: () => c.FI,
                    Transform: () => B.Transform,
                    UPDATE_PRIORITY: () => O.uF,
                    UniformGroup: () => h.oo,
                    VERSION: () => h.q4,
                    VideoResource: () => h.eH,
                    ViewableBuffer: () => h.Rv,
                    WRAP_MODES: () => S.WRAP_MODES,
                    XMLFormat: () => g.Lq,
                    XMLStringFormat: () => g.lx,
                    autoDetectFormat: () => g.jv,
                    autoDetectRenderer: () => h.e6,
                    autoDetectResource: () => h.pb,
                    checkMaxIfStatementsInShader: () => h.a7,
                    createUBOElements: () => h.TF,
                    defaultFilterVertex: () => h.Y9,
                    defaultVertex: () => h.kP,
                    extensions: () => h.Rw,
                    generateProgram: () => h.qw,
                    generateUniformBufferSync: () => h.K0,
                    getTestContext: () => h.Kc,
                    getUBOData: () => h.DL,
                    graphicsUtils: () => l.yR,
                    groupD8: () => B.groupD8,
                    interactiveTarget: () => d.Op,
                    isMobile: () => T.tq,
                    resources: () => h.Jb,
                    settings: () => T.Xd,
                    systems: () => h.eG,
                    uniformParsers: () => h.sg,
                    utils: () => R
                });
                i(1509), i(2113), i(5008), i(1820), i(5717);
                var s = i(959),
                    o = i(3943),
                    n = i(9610),
                    a = i(447),
                    h = i(1778),
                    r = i(6661),
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
                        var e, i, s, o, n, a, h, r, l, d, c, u, p, g, m, A, v, w, y, f = null !== (e = null === (i = t.metadata) || void 0 === i || null === (s = i.font) || void 0 === s ? void 0 : s.family) && void 0 !== e ? e : t.name;
                        return document.fonts.add(new FontFace(f, t.data, null === (o = t.metadata) || void 0 === o ? void 0 : o.font)), t.styles = [{
                            fontFamily: f.replace(/['|"]/gi, ""),
                            fontStyle: null === (n = t.metadata) || void 0 === n || null === (a = n.font) || void 0 === a ? void 0 : a.style,
                            fontWeight: null === (h = t.metadata) || void 0 === h || null === (r = h.font) || void 0 === r ? void 0 : r.weight
                        }], b.waitFont({
                            "font-family": f,
                            "font-stretch": null === (l = t.metadata) || void 0 === l || null === (d = l.font) || void 0 === d ? void 0 : d.stretch,
                            "font-style": null === (c = t.metadata) || void 0 === c || null === (u = c.font) || void 0 === u ? void 0 : u.style,
                            "font-weight": null === (p = t.metadata) || void 0 === p || null === (g = p.font) || void 0 === g ? void 0 : g.weight
                        }, null === (m = t.metadata) || void 0 === m || null === (A = m.font) || void 0 === A ? void 0 : A.testString, null !== (v = null === (w = t.metadata) || void 0 === w || null === (y = w.font) || void 0 === y ? void 0 : y.timeout) && void 0 !== v ? v : t.timeout)
                    }
                }(0, A.Z)(b, "extension", r.n.Loader), (0, A.Z)(b, "supportedFontExtensions", ["ttf", "otf", "woff", "woff2"]), (0, A.Z)(b, "waitFont", function() {
                    var t = (0, m.Z)((function*(t, e, i) {
                        var s, o, n, a = null !== (s = t["font-style"]) && void 0 !== s ? s : "",
                            h = null !== (o = t["font-weight"]) && void 0 !== o ? o : "",
                            r = null !== (n = t["font-stretch"]) && void 0 !== n ? n : "",
                            l = t["font-family"];
                        i = i || 1 / 0;
                        var d = (new Date).getTime(),
                            c = d,
                            u = [a, h, r, "100px", l].join(" ");
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
                    y = i(8442),
                    f = i(512),
                    S = i(600),
                    x = i(9360),
                    k = i(3361),
                    B = i(3298),
                    C = i(8656),
                    P = i(3385),
                    T = i(6997),
                    E = i(736),
                    Z = i(9504),
                    O = i(798),
                    R = i(5277);
                l.TC.nextRoundedRectBehavior = !0, p.xv.nextLineHeightBehavior = !0, r.R.add(d.bx, c.B9, h.Bv, s.c, o.Q, n.T, a.O, g.vl, u.o, y.Oc, b, w.tj)
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
                for (var [i, s, o] = t[d], h = !0, r = 0; r < i.length; r++)(!1 & o || a >= o) && Object.keys(n.O).every((t => n.O[t](i[r]))) ? i.splice(r--, 1) : (h = !1, o < a && (a = o));
                if (h) {
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
    }), t), n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), e = {}, i = "trump_card_queen:", n.l = (t, s, o, a) => {
        if (e[t]) e[t].push(s);
        else {
            var h, r;
            if (void 0 !== o)
                for (var l = document.getElementsByTagName("script"), d = 0; d < l.length; d++) {
                    var c = l[d];
                    if (c.getAttribute("src") == t || c.getAttribute("data-webpack") == i + o) {
                        h = c;
                        break
                    }
                }
            h || (r = !0, (h = document.createElement("script")).charset = "utf-8", h.timeout = 120, n.nc && h.setAttribute("nonce", n.nc), h.setAttribute("data-webpack", i + o), h.src = t), e[t] = [s];
            var u = (i, s) => {
                    h.onerror = h.onload = null, clearTimeout(p);
                    var o = e[t];
                    if (delete e[t], h.parentNode && h.parentNode.removeChild(h), o && o.forEach((t => t(s))), i) return i(s)
                },
                p = setTimeout(u.bind(null, void 0, {
                    type: "timeout",
                    target: h
                }), 12e4);
            h.onerror = u.bind(null, h.onerror), h.onload = u.bind(null, h.onload), r && document.head.appendChild(h)
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
                        h = new Error;
                    n.l(a, (i => {
                        if (n.o(t, e) && (0 !== (s = t[e]) && (t[e] = void 0), s)) {
                            var o = i && ("load" === i.type ? "missing" : i.type),
                                a = i && i.target && i.target.src;
                            h.message = "Loading chunk " + e + " failed.\n(" + o + ": " + a + ")", h.name = "ChunkLoadError", h.type = o, h.request = a, s[1](h)
                        }
                    }), "chunk-" + e, e)
                }
        }, n.O.j = e => 0 === t[e];
        var e = (e, i) => {
                var s, o, [a, h, r] = i,
                    l = 0;
                if (a.some((e => 0 !== t[e]))) {
                    for (s in h) n.o(h, s) && (n.m[s] = h[s]);
                    if (r) var d = r(n)
                }
                for (e && e(i); l < a.length; l++) o = a[l], n.o(t, o) && t[o] && t[o][0](), t[o] = 0;
                return n.O(d)
            },
            i = self.webpackChunktrump_card_queen = self.webpackChunktrump_card_queen || [];
        i.forEach(e.bind(null, 0)), i.push = e.bind(null, i.push.bind(i))
    })();
    var a = n.O(void 0, [216], (() => n(1774)));
    a = n.O(a)
})();