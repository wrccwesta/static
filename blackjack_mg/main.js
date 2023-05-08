/*! @mascot-banner branch: master - commit: eec7ab288d9808d47857735ff89bf963ec3bdcf9 */
(() => {
    var t, e, i, s = {
            5090: (t, e, i) => {
                "use strict";
                var s = {};
                i.r(s), i.d(s, {
                    ALPHA_MODES: () => H.iw,
                    AbstractBatchRenderer: () => d.eo,
                    AbstractMultiResource: () => d.M4,
                    AbstractRenderer: () => d.I8,
                    AppLoaderPlugin: () => w.LP,
                    ArrayResource: () => d.$N,
                    Attribute: () => d.ah,
                    BLEND_MODES: () => H.T$,
                    BUFFER_BITS: () => H.V0,
                    BUFFER_TYPE: () => H.mr,
                    BaseImageResource: () => d.bg,
                    BasePrepare: () => g.Zq,
                    BaseRenderTexture: () => d.jd,
                    BaseTexture: () => d.VL,
                    BatchDrawCall: () => d.a$,
                    BatchGeometry: () => d.JZ,
                    BatchPluginFactory: () => d.TJ,
                    BatchRenderer: () => d.Bv,
                    BatchShaderGenerator: () => d.Zk,
                    BatchSystem: () => d.Sj,
                    BatchTextureArray: () => d.Ie,
                    BitmapFont: () => b.UP,
                    BitmapFontData: () => b.d0,
                    BitmapFontLoader: () => b.vl,
                    BitmapText: () => b.Xz,
                    Bounds: () => Y.YZ,
                    BrowserAdapter: () => Q.ZQ,
                    Buffer: () => d.lW,
                    BufferResource: () => d.qm,
                    CLEAR_MODES: () => H.yl,
                    COLOR_MASK_BITS: () => H.V3,
                    CanvasResource: () => d.Y8,
                    Circle: () => G.Cd,
                    Container: () => Y.W2,
                    ContextSystem: () => d.lH,
                    CountLimiter: () => g.fh,
                    CubeResource: () => d.TA,
                    DEG_TO_RAD: () => G.ZX,
                    DRAW_MODES: () => H.lg,
                    DisplayObject: () => Y.s$,
                    ENV: () => H.Vi,
                    Ellipse: () => G.Pj,
                    ExtensionType: () => d.nw,
                    FORMATS: () => H.I2,
                    FillStyle: () => u.ft,
                    Filter: () => d.wn,
                    FilterState: () => d.jV,
                    FilterSystem: () => d.kV,
                    Framebuffer: () => d.AI,
                    FramebufferSystem: () => d.WB,
                    GC_MODES: () => H.UN,
                    GLFramebuffer: () => d.tT,
                    GLProgram: () => d.Ei,
                    GLTexture: () => d.fy,
                    GRAPHICS_CURVES: () => u.wA,
                    Geometry: () => d.ZX,
                    GeometrySystem: () => d.TO,
                    Graphics: () => u.TC,
                    GraphicsData: () => u.iM,
                    GraphicsGeometry: () => u.RB,
                    IGLUniformData: () => d.W1,
                    INSTALLED: () => d.e_,
                    ImageBitmapResource: () => d._w,
                    ImageResource: () => d.PA,
                    InteractionData: () => p.gU,
                    InteractionEvent: () => p.sm,
                    InteractionManager: () => p.bx,
                    InteractionTrackingData: () => p.s_,
                    LINE_CAP: () => u.$o,
                    LINE_JOIN: () => u.S,
                    LINE_SCALE_MODE: () => V.F4,
                    LineStyle: () => u.TD,
                    Loader: () => w.aN,
                    LoaderResource: () => w.kC,
                    MASK_TYPES: () => H.A7,
                    MIPMAP_MODES: () => H.WB,
                    MSAA_QUALITY: () => H.G5,
                    MaskData: () => d.HI,
                    MaskSystem: () => d.zj,
                    Matrix: () => G.y3,
                    Mesh: () => K.Kj,
                    MeshBatchUvs: () => K.wQ,
                    MeshGeometry: () => K.xc,
                    MeshMaterial: () => K.rY,
                    ObjectRenderer: () => d.bO,
                    ObservablePoint: () => G.AB,
                    PI_2: () => G._b,
                    PRECISION: () => H.cB,
                    Point: () => G.E9,
                    Polygon: () => G.mg,
                    Prepare: () => g.B9,
                    Program: () => d.$r,
                    ProjectionSystem: () => d.NW,
                    Quad: () => d.lD,
                    QuadUv: () => d.ud,
                    RAD_TO_DEG: () => G.jl,
                    RENDERER_TYPE: () => H.N3,
                    Rectangle: () => G.Ae,
                    RenderTexture: () => d.TI,
                    RenderTexturePool: () => d.uW,
                    RenderTextureSystem: () => d.J$,
                    Renderer: () => d.Th,
                    Resource: () => d._z,
                    RoundedRectangle: () => G.c9,
                    Runner: () => X.R,
                    SAMPLER_TYPES: () => H.oT,
                    SCALE_MODES: () => H.aH,
                    SHAPES: () => G.HS,
                    SVGResource: () => d.pX,
                    ScissorSystem: () => d.id,
                    Shader: () => d.ex,
                    ShaderSystem: () => d.p,
                    SimpleRope: () => z.IE,
                    SmoothGraphics: () => V.K3,
                    Sprite: () => J.j,
                    SpriteMaskFilter: () => d.z9,
                    Spritesheet: () => v.c,
                    SpritesheetLoader: () => v.o,
                    State: () => d.ZM,
                    StateSystem: () => d.zI,
                    StencilSystem: () => d.Ld,
                    System: () => d.xP,
                    TARGETS: () => H.sp,
                    TEXT_GRADIENT: () => m.M_,
                    TYPES: () => H.vK,
                    TemporaryDisplayObject: () => Y.Ql,
                    Text: () => m.xv,
                    TextFormat: () => b.SQ,
                    TextMetrics: () => m._A,
                    TextStyle: () => m.pn,
                    Texture: () => d.xE,
                    TextureGCSystem: () => d.wr,
                    TextureLoader: () => w.dp,
                    TextureMatrix: () => d.UX,
                    TextureSystem: () => d.CT,
                    TextureUvs: () => d.aF,
                    Ticker: () => $.vB,
                    TickerPlugin: () => $.Sb,
                    TilingSprite: () => q.o,
                    TilingSpriteRenderer: () => q.S,
                    TimeLimiter: () => g.FI,
                    Transform: () => G.wx,
                    UPDATE_PRIORITY: () => $.uF,
                    UniformGroup: () => d.oo,
                    VERSION: () => d.q4,
                    VideoResource: () => d.eH,
                    ViewableBuffer: () => d.Rv,
                    WRAP_MODES: () => H.Nt,
                    XMLFormat: () => b.Lq,
                    XMLStringFormat: () => b.lx,
                    autoDetectFormat: () => b.jv,
                    autoDetectRenderer: () => d.e6,
                    autoDetectResource: () => d.pb,
                    checkMaxIfStatementsInShader: () => d.a7,
                    createUBOElements: () => d.TF,
                    defaultFilterVertex: () => d.Y9,
                    defaultVertex: () => d.kP,
                    extensions: () => d.Rw,
                    generateProgram: () => d.qw,
                    generateUniformBufferSync: () => d.K0,
                    getTestContext: () => d.Kc,
                    getUBOData: () => d.DL,
                    graphicsUtils: () => u.yR,
                    groupD8: () => G.Lv,
                    interactiveTarget: () => p.Op,
                    isMobile: () => Q.tq,
                    resources: () => d.Jb,
                    settings: () => Q.Xd,
                    systems: () => d.eG,
                    uniformParsers: () => d.sg,
                    utils: () => tt
                });
                var a = i(8826),
                    n = i(6866),
                    o = (i(1509), i(2113), i(5008), i(1820), i(5717), i(959)),
                    r = i(3943),
                    h = i(9610),
                    l = i(447),
                    d = i(1778),
                    c = i(6661),
                    u = i(1290),
                    p = i(2699),
                    g = i(9447),
                    v = i(4877),
                    m = i(7955),
                    b = i(9079),
                    w = i(9740);
                class y {
                    static add() {
                        for (var t of y.supportedFontExtensions) w.kC.setExtensionLoadType(t, w.kC.LOAD_TYPE.XHR), w.kC.setExtensionXhrType(t, w.kC.XHR_RESPONSE_TYPE.BUFFER)
                    }
                    static use(t, e) {
                        y.supportedFontExtensions.some((e => t.extension.endsWith(e))) ? y.loadFromBuffer(t).finally((() => e())) : e()
                    }
                    static loadFromBuffer(t) {
                        var e, i, s, a, n, o, r, h, l, d, c, u, p, g, v, m, b, w, f, C = null !== (e = null === (i = t.metadata) || void 0 === i || null === (s = i.font) || void 0 === s ? void 0 : s.family) && void 0 !== e ? e : t.name;
                        return document.fonts.add(new FontFace(C, t.data, null === (a = t.metadata) || void 0 === a ? void 0 : a.font)), t.styles = [{
                            fontFamily: C.replace(/['|"]/gi, ""),
                            fontStyle: null === (n = t.metadata) || void 0 === n || null === (o = n.font) || void 0 === o ? void 0 : o.style,
                            fontWeight: null === (r = t.metadata) || void 0 === r || null === (h = r.font) || void 0 === h ? void 0 : h.weight
                        }], y.waitFont({
                            "font-family": C,
                            "font-stretch": null === (l = t.metadata) || void 0 === l || null === (d = l.font) || void 0 === d ? void 0 : d.stretch,
                            "font-style": null === (c = t.metadata) || void 0 === c || null === (u = c.font) || void 0 === u ? void 0 : u.style,
                            "font-weight": null === (p = t.metadata) || void 0 === p || null === (g = p.font) || void 0 === g ? void 0 : g.weight
                        }, null === (v = t.metadata) || void 0 === v || null === (m = v.font) || void 0 === m ? void 0 : m.testString, null !== (b = null === (w = t.metadata) || void 0 === w || null === (f = w.font) || void 0 === f ? void 0 : f.timeout) && void 0 !== b ? b : t.timeout)
                    }
                }(0, n.Z)(y, "extension", c.n.Loader), (0, n.Z)(y, "supportedFontExtensions", ["ttf", "otf", "woff", "woff2"]), (0, n.Z)(y, "waitFont", function() {
                    var t = (0, a.Z)((function*(t, e, i) {
                        var s, a, n, o = null !== (s = t["font-style"]) && void 0 !== s ? s : "",
                            r = null !== (a = t["font-weight"]) && void 0 !== a ? a : "",
                            h = null !== (n = t["font-stretch"]) && void 0 !== n ? n : "",
                            l = t["font-family"];
                        i = i || 1 / 0;
                        var d = (new Date).getTime(),
                            c = d,
                            u = [o, r, h, "100px", l].join(" ");
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
                var f = i(9900),
                    C = i(7239),
                    k = i.n(C),
                    x = i(4891),
                    A = (i(3306), i(8657).Z, x.Q3),
                    S = x.b_,
                    T = null === x.Q3 || void 0 === x.Q3 ? void 0 : x.Q3.ticker;
                x.bJ, x.eJ, x.tQ, x.Yv;

                function P(t, e) {
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
                        e % 2 ? P(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : P(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                var B = new Map;
                class _ extends f.Howl {
                    constructor(t) {
                        super(t), (0, n.Z)(this, "initialVolume", 1), (0, n.Z)(this, "data", {}), this.initialVolume = t.volume
                    }
                    fade(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        return this.volume(i), A.to(this, t, {
                            volume: e > -1 ? e : this.initialVolume
                        }), this.play(), this
                    }
                }
                class R {
                    constructor(t, e, i) {
                        (0, n.Z)(this, "handlers", new Map), (0, n.Z)(this, "onChangeMute", void 0), (0, n.Z)(this, "onChangeVolume", void 0), (0, n.Z)(this, "savedVolume", 0), this.device = t, this.visibility = e, this.preferences = i, this.onChangeMute = new(k()), this.onChangeVolume = new(k()), this.visibility.on("change", (t => {
                            try {
                                var e, i;
                                if ("hidden" !== t || this.mutedAll) null === (e = f.Howler.ctx) || void 0 === e || e.resume();
                                else null === (i = f.Howler.ctx) || void 0 === i || i.suspend()
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
                        f.Howler.volume(t), e && this.preferences.set("volume", {
                            volume: t
                        })
                    }
                    add(t) {
                        return this.get(t)
                    }
                    set volume(t) {
                        t <= 0 && !this.mutedAll ? B.forEach((t => this.setMuteBySound(t, !0))) : t > 0 && this.mutedAll && B.forEach((t => this.setMuteBySound(t, !1))), this.savedVolume = t, this.setGlobalVolume(t), this.onChangeVolume.dispatch(t)
                    }
                    get volume() {
                        return f.Howler.volume()
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
                        return Array.from(B.values()).filter((e => {
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
                        return null === (e = B.get(t)) || void 0 === e ? void 0 : e.sound
                    }
                    play(t) {
                        for (var e, i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) s[a - 1] = arguments[a];
                        return null === (e = this.handlers.get(t)) || void 0 === e ? void 0 : e(...s)
                    }
                }
                class L {
                    static pre(t, e) {
                        t && L.supportedSoundExtensions.includes(t.extension) ? (t.load = function(t) {
                            this.isLoading || (this.isComplete ? t && setTimeout((() => t(this)), 1) : (t && this.onComplete.once(t), this.data = new _({
                                src: this.url,
                                sprite: this.metadata.sprite || !1,
                                volume: this.metadata.audioMetadata.volume,
                                loop: this.metadata.audioMetadata.loop
                            }), this.type = w.kC.TYPE.AUDIO, this.loadType = w.kC.LOAD_TYPE.AUDIO, this._setFlag(w.kC.STATUS_FLAGS.LOADING, !0), this.onStart.dispatch(this), this.data.on("loaderror", this._boundOnError, !1), this.data.on("load", this._boundComplete, !1), this.sound = this.data))
                        }, t.complete = function() {
                            var t;
                            if (this.data && (this.data.off("loaderror", this._boundOnError, !1), this.data.off("load", this._boundComplete, !1)), this.isComplete) throw new Error("Complete called again for an already completed resource.");
                            this._setFlag(w.kC.STATUS_FLAGS.COMPLETE, !0), this._setFlag(w.kC.STATUS_FLAGS.LOADING, !1);
                            var e = null !== (t = this.name) && void 0 !== t ? t : this.url;
                            B.set(e, E(E({}, this.metadata.audioMetadata), {}, {
                                id: e,
                                sound: this.sound,
                                muted: !1
                            })), this.onComplete.dispatch(this)
                        }, t._boundComplete = t.complete.bind(t), e()) : e()
                    }
                }(0, n.Z)(L, "extension", c.n.Loader), (0, n.Z)(L, "supportedSoundExtensions", ["mp3"]);
                i(1293);
                var O, Z = i(9534),
                    D = i(1162),
                    M = i(1368),
                    I = i(9685),
                    N = i(4556);
                i(2339), i(3113);

                function j(t) {
                    var e = t.substr(0, 3),
                        i = Math.floor(10 * +e + .001);
                    return "3.7" === e ? O.VER37 : "3.8" === e ? O.VER38 : "4.0" === e ? O.VER40 : "4.1" === e ? O.VER41 : i < O.VER37 ? O.VER37 : O.UNKNOWN
                }(function(t) {
                    t[t.UNKNOWN = 0] = "UNKNOWN", t[t.VER37 = 37] = "VER37", t[t.VER38 = 38] = "VER38", t[t.VER40 = 40] = "VER40", t[t.VER41 = 41] = "VER41"
                })(O || (O = {}));
                class W {
                    constructor() {
                        (0, n.Z)(this, "scale", 1)
                    }
                    readSkeletonData(t, e) {
                        var i = new Z.YT(e);
                        i.readString();
                        var s = i.readString(),
                            a = j(s),
                            n = null;
                        if (a === O.VER38 && (n = new I.SkeletonBinary(new I.AtlasAttachmentLoader(t))), (i = new Z.YT(e)).readInt32(), i.readInt32(), (a = j(s = i.readString())) !== O.VER40 && a !== O.VER41 || (n = new N.SkeletonBinary(new N.AtlasAttachmentLoader(t))), !n) {
                            var o = "Unsupported version of spine model ".concat(s, ", please update pixi-spine");
                            console.error(o)
                        }
                        return n.scale = this.scale, n.readSkeletonData(e)
                    }
                }
                class F {
                    constructor() {
                        (0, n.Z)(this, "scale", 1)
                    }
                    readSkeletonData(t, e) {
                        var i = e.skeleton.spine,
                            s = j(i),
                            a = null;
                        if (s === O.VER37 && (a = new M.SkeletonJson(new M.AtlasAttachmentLoader(t))), s === O.VER38 && (a = new I.SkeletonJson(new I.AtlasAttachmentLoader(t))), s !== O.VER40 && s !== O.VER41 || (a = new N.SkeletonJson(new N.AtlasAttachmentLoader(t))), !a) {
                            var n = "Unsupported version of spine model ".concat(i, ", please update pixi-spine");
                            console.error(n)
                        }
                        return a.scale = this.scale, a.readSkeletonData(e)
                    }
                }
                class U extends D.go {
                    createBinaryParser() {
                        return new W
                    }
                    createJsonParser() {
                        return new F
                    }
                    parseData(t, e, i, s) {
                        var a = e;
                        t.spineData = a.readSkeletonData(i, s), t.spineAtlas = i
                    }
                }(0, n.Z)(U, "extension", c.n.Loader), (0, n.Z)(U, "use", (new U).genMiddleware().use);
                var z = i(512),
                    H = i(600),
                    Y = i(9360),
                    V = i(3361),
                    G = i(3298),
                    K = i(8656),
                    X = i(3385),
                    Q = i(6997),
                    J = i(736),
                    q = i(9504),
                    $ = i(798),
                    tt = i(5277);
                u.TC.nextRoundedRectBehavior = !0, m.xv.nextLineHeightBehavior = !0, c.R.add(p.bx, g.B9, d.Bv, o.c, r.Q, h.T, l.O, b.vl, v.o, U, y, L), window.PIXI = s;
                var et = i(3233),
                    it = i.n(et);

                function st(t) {
                    return t && "object" == typeof t && !Array.isArray(t)
                }

                function at(t) {
                    for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++) i[s - 1] = arguments[s];
                    if (!i.length) return t;
                    var a = i.shift();
                    if (st(t) && st(a))
                        for (var n in a) st(a[n]) ? (t[n] || Object.assign(t, {
                            [n]: {}
                        }), at(t[n], a[n])) : Object.assign(t, {
                            [n]: a[n]
                        });
                    return at(t, ...i)
                }
                class nt {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.create(null);
                        (0, n.Z)(this, "subscribers", new Map), this.data = t
                    }
                    merge() {
                        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                        this.data = at({}, this.data, ...e)
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
                        return it()(this.data, t, e)
                    }
                }
                class ot extends tt.EventEmitter {}
                var rt = window.navigator.userAgent.match("CriOS") ? .86 : .96;
                class ht extends ot {
                    constructor() {
                        super(), (0, n.Z)(this, "locked", void 0), (0, n.Z)(this, "fullscreen", void 0), this.locked = !1, this.fullscreen = document.createElement("div"), this.fullscreen.setAttribute("style", "z-index: 1001;position: absolute;display: none;top: 0;left: 0;width: 1px;height: 99999px;overflow-y: scroll;"), document.body.appendChild(this.fullscreen), document.addEventListener("touchmove", (t => {
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
                        return window.innerHeight === t || window.innerHeight / t >= rt
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
                class lt extends ot {
                    constructor(t) {
                        super(), (0, n.Z)(this, "locked", void 0), (0, n.Z)(this, "fullscreen", void 0), this.locked = !1, this.fullscreen = function() {
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
                class dt extends tt.EventEmitter {
                    constructor() {
                        super(...arguments), (0, n.Z)(this, "enabled", !1)
                    }
                    toggle() {
                        this.enabled = !this.enabled, this.emit("change", this.enabled)
                    }
                }
                var ct = i(5992);
                class ut extends ct.v {}
                class pt {
                    constructor(t) {
                        var e, i, s, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.navigator.userAgent.toLowerCase();
                        (0, n.Z)(this, "forceMobile", void 0), this.renderer = t, this.ua = a, this.forceMobile = null !== (e = null === (i = document.documentElement) || void 0 === i || null === (s = i.classList) || void 0 === s ? void 0 : s.contains("layout-mobile")) && void 0 !== e && e
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
                class gt {}
                class vt {
                    constructor(t) {
                        this.config = t
                    }
                    toFixedTruncate(t, e) {
                        var i = new RegExp("^-?\\d+(?:\\.\\d{0," + e + "})?", "g"),
                            s = t.toString().match(i)[0],
                            a = s.indexOf(".");
                        if (0 === e) return a > 0 ? s.slice(0, a) : s;
                        if (-1 === a) return s + "." + "0".repeat(e);
                        var n = e - (s.length - a) + 1;
                        return n > 0 ? s + "0".repeat(n) : s
                    }
                    delay(t) {
                        return new Promise((e => setTimeout(e, t)))
                    }
                    toMoney(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            i = parseInt(this.config.get("coinValue", "100")),
                            s = i >= 100 ? 2 : i >= 10 ? 1 : 0,
                            a = e > 0 && e >= i;
                        return this.toFixedTruncate(t / i, a ? 0 : s)
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
                class mt extends tt.EventEmitter {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["ru", "en", "ex", "de", "es", "fr", "it", "pt", "tr", "cn", "ja", "mt", "ro", "uk"];
                        super(), (0, n.Z)(this, "language", void 0), (0, n.Z)(this, "translations", {}), this.availableLanguages = t, this.language = t.includes(window.language) ? window.language : "en"
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
                            a = e ? "(".concat(this.currencySign, ")") : this.currencySign;
                        return "".concat(s).concat(a)
                    }
                    changeLanguage(t) {
                        this.availableLanguages.includes(t) ? (this.language = t, this.emit("changeLanguage", t)) : console.error("".concat(t, " not available. Use only: ").concat(this.availableLanguages))
                    }
                    t(t) {
                        for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++) i[s - 1] = arguments[s];
                        var a = this.translations || {};
                        return (a[t] || a.en || "").replace(/%s/g, (() => i.shift()))
                    }
                }
                class bt {
                    constructor(t) {
                        (0, n.Z)(this, "pointerMoveEvent", void 0), (0, n.Z)(this, "pointerDownEvent", void 0), (0, n.Z)(this, "pointerTapEvent", void 0), (0, n.Z)(this, "pointerHoverEvent", void 0), (0, n.Z)(this, "pointerUpEvent", void 0), (0, n.Z)(this, "pointerOutEvent", void 0), (0, n.Z)(this, "_withPrimary", ((t, e) => i => {
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
                            a = 0,
                            n = t => {
                                s || (s = !0, a = t.data.global.x)
                            },
                            o = t => {
                                if (s) {
                                    s = !1;
                                    var n = a - t.data.global.x;
                                    Math.abs(n) > i.threshold && e(n > 0 ? "right" : "left")
                                }
                            };
                        return t.on(this.pointerDownEvent, n), t.on(this.pointerUpEvent, o), () => {
                            t.off(this.pointerDownEvent, n), t.off(this.pointerUpEvent, o)
                        }
                    }
                }
                class wt {
                    constructor(t) {
                        (0, n.Z)(this, "pressed", void 0), (0, n.Z)(this, "disabled", void 0), (0, n.Z)(this, "prevent", void 0), (0, n.Z)(this, "canDispatch", void 0), (0, n.Z)(this, "onPress", void 0), this.keyCode = t, this.canDispatch = !0, this.pressed = !1, this.disabled = !1, this.prevent = !1, this.onPress = new(k()), window.addEventListener("keyup", (t => {
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
                class yt {
                    constructor() {
                        (0, n.Z)(this, "KEY_CODE", {
                            Enter: 13,
                            Space: 32,
                            Shift: 16,
                            Escape: 27
                        }), (0, n.Z)(this, "keys", [])
                    }
                    register(t) {
                        var e = new wt(t);
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

                function Ct(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? ft(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ft(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class kt extends tt.EventEmitter {
                    constructor(t) {
                        super(), (0, n.Z)(this, "loader", new w.aN), this.device = t, this.loader.onError.add((t => this.emit("error", t))), this.loader.onComplete.add((t => this.emit("complete", t)))
                    }
                    load(t) {
                        var e = this;
                        return (0, a.Z)((function*() {
                            var i = yield e._getSizes(), s = Object.create(null), a = t.filter((t => {
                                var i, s, a;
                                return null === (i = null === (s = t.metadata) || void 0 === s || null === (a = s.platform) || void 0 === a ? void 0 : a.includes(e.device.platform)) || void 0 === i || i
                            })).map((t => (s = Ct(Ct({}, s), i[t.url]), Ct(Ct({}, t), {}, {
                                url: t.url
                            })))), n = 0, o = Object.keys(s).map((t => t)), r = Object.values(s).reduce(((t, e) => t + e), 0), h = Object.keys(i).length > 0 ? (t, i) => {
                                var a = i.url.split("?")[0];
                                n += s[a], e.emit("progress", {
                                    progress: n / r
                                }), o.includes(a) && o.splice(o.indexOf(a), 1)
                            } : t => {
                                e.emit("progress", {
                                    progress: t.progress / 100
                                })
                            };
                            return new Promise((t => {
                                var i = e.loader.onProgress.add(h);
                                e.loader.add(a), e.loader.load((() => {
                                    o.length > 0 && console.log("Assets not loaded: ", o), i.detach(), t()
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
                            var i, s, a, n, o, r = this.loader.resources[t];
                            return r ? null !== (i = null !== (s = null !== (a = null !== (n = r.texture) && void 0 !== n ? n : r.spineData) && void 0 !== a ? a : r.sound) && void 0 !== s ? s : null === (o = r.textures) || void 0 === o ? void 0 : o[e]) && void 0 !== i ? i : r.textures : d.xE.from(t)
                        }
                    }
                    destroy() {
                        this.loader.destroy()
                    }
                    _getSizes() {
                        return (0, a.Z)((function*() {
                            try {
                                return yield(yield fetch("assets/sizes.json")).json()
                            } catch (t) {
                                return {}
                            }
                        }))()
                    }
                }
                class xt {}
                class At {
                    constructor() {
                        (0, n.Z)(this, "renderer", void 0), Q.Xd.RENDER_OPTIONS.legacy = !0, Q.Xd.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !0, this.renderer = d.Th.create({
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
                var St = i(1200),
                    Tt = {
                        SPENDING_BUDGET_EXCEEDED: "SPENDING_BUDGET_EXCEEDED",
                        MAX_BET_LIMIT_EXCEEDED: "MAX_BET_LIMIT_EXCEEDED",
                        INSUFFICIENT_BALANCE: "INSUFFICIENT_BALANCE",
                        BALANCE_CHANGE_ERROR: "BALANCE_CHANGE_ERROR"
                    };
                class Pt extends tt.EventEmitter {
                    constructor() {
                        super(...arguments), (0, n.Z)(this, "_response", void 0), (0, n.Z)(this, "_transformRequest", [])
                    }
                    transformRequest(t) {
                        this._transformRequest.push(...t)
                    }
                    request(t) {
                        var e = this;
                        return (0, a.Z)((function*() {
                            var i = e._transformRequest.reduce(((t, e) => e(t)), t),
                                s = yield St.ZP.post(window.serverUrl, i);
                            if (e._response = s.data, e.emit("response:".concat(t.action), e._response), e.emit("response", e._response, t.action), e._response.error) throw new Error(e._response.error);
                            return e._response
                        }))()
                    }
                    resetSession() {
                        return (0, a.Z)((function*() {
                            yield St.ZP.post("cs.php")
                        }))()
                    }
                    get response() {
                        return this._response
                    }
                }
                var Et = {
                    to: ["*"],
                    name: "boot",
                    initialized: !0
                };
                class Bt {
                    constructor() {
                        (0, n.Z)(this, "transitions", Object.create(null)), (0, n.Z)(this, "transition", Et)
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
                        var e, i, s, a, n;
                        if (this.can(t)) {
                            null === (e = this.transition) || void 0 === e || null === (i = e.state) || void 0 === i || i.exit(), this.transition = this.transitions[t], null !== (s = this.transition) && void 0 !== s && s.initialized || (this.transition.initialized = !0, this.transition.state.init());
                            for (var o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), h = 1; h < o; h++) r[h - 1] = arguments[h];
                            null === (a = this.transition) || void 0 === a || null === (n = a.state) || void 0 === n || n.enter(...r)
                        } else {
                            var l;
                            console.error("[StateMachine]: Can't transition to ".concat(t, " from ").concat(null === (l = this.transition) || void 0 === l ? void 0 : l.name))
                        }
                    }
                }
                class _t extends tt.EventEmitter {
                    constructor() {
                        super(...arguments), (0, n.Z)(this, "width", void 0), (0, n.Z)(this, "height", void 0), (0, n.Z)(this, "aspectRatio", void 0), (0, n.Z)(this, "propAspectRatio", void 0), (0, n.Z)(this, "paddingX", void 0), (0, n.Z)(this, "paddingY", void 0)
                    }
                    resize(t, e) {
                        this.width = t, this.height = e, this.aspectRatio = parseFloat(Math.min(window.innerWidth / t, window.innerHeight / e).toFixed(3)), this.paddingX = Math.max(Math.round((window.innerWidth / 2 - this.width / 2 * this.aspectRatio) / this.aspectRatio), 0), this.paddingY = Math.max(Math.round((window.innerHeight / 2 - this.height / 2 * this.aspectRatio) / this.aspectRatio), 0), this.propAspectRatio = parseFloat(Math.max((2 * this.paddingX + this.width) / this.width, (2 * this.paddingY + this.height) / this.height).toFixed(3))
                    }
                }
                class Rt extends Y.W2 {}
                class Lt {
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
                var Ot = {
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
                class Zt extends tt.EventEmitter {
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
                class Dt extends(Ut(J.j)) {
                    constructor() {
                        super(...arguments), (0, n.Z)(this, "interactive", !0)
                    }
                }
                class Mt {
                    constructor(t) {
                        (0, n.Z)(this, "popups", new Map), this.rootNode = t
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
                        return (0, a.Z)((function*() {
                            var s = i.popups.get(t);
                            i.rootNode.addChild(s);
                            for (var a = e.length, n = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) n[o - 1] = e[o];
                            var r = yield s.show(...n);
                            return i.rootNode.removeChild(s), r
                        }))()
                    }
                }
                var It, Nt = i(899),
                    jt = i.n(Nt);
                class Wt {
                    constructor() {
                        (0, n.Z)(this, "prefix", "")
                    }
                    setPrefix(t) {
                        this.prefix = t
                    }
                    set(t, e) {
                        jt().set("".concat(this.prefix, ":").concat(t), e)
                    }
                    get(t, e) {
                        return jt().get("".concat(this.prefix, ":").concat(t), e)
                    }
                    clear() {
                        jt().clearAll()
                    }
                }
                class Ft extends tt.EventEmitter {
                    constructor() {
                        super(), document.addEventListener("visibilitychange", (() => {
                            this.emit("change", document.visibilityState), "hidden" === document.visibilityState ? this.emit("hide") : this.emit("show")
                        }))
                    }
                    get isVisible() {
                        return "visible" === document.visibilityState
                    }
                }
                d.xE.WHITE.baseTexture.resource.source.getContext("2d").fillRect(0, 0, 1, 1);

                function Ut(t, e) {
                    return class extends t {
                        constructor() {
                            super(...arguments), (0, n.Z)(this, "game", It), (0, n.Z)(this, "preventAutoResize", !1), this.on("added", (() => {
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
                class zt extends(Ut(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "logo", void 0), (0, n.Z)(this, "progress", void 0), (0, n.Z)(this, "_tweeenProgress", void 0), this.logo = J.j.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAADzBAMAAADTF1+6AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURUdwTP///////////////////////////////////////////////////////81e3QIAAAAOdFJOUwBovPELGCk/kVKoz+B7jzeedwAADjRJREFUeNrsnItvHEcdx/ece9hOjBwopY2K5YY2rdpgJSFuQhpOW1y1aZugK0HpI411VRInhNS65tEQESy3KIS+TpcSCBSwDIVCqHrKu0XQU0ApLaCeTB6Il6x6z4nPd+f9G9jZ3XnuvPa6ASF5FKV2erOf3Znf/Ob3+85vz7D/O+1DYxY0C5oFzYJmQf/HoNr8a9MWsKAJ49q02CzoGoIST9+4J9Q14/vnf68J0LqSbVd+GYKTes25zDtmWFCs7P7zL7Q5iaLb4fdhQE/+7OTzXje7kdMF7fYvdOy5kz/N6oF2kSv6Lk1OMk10snI6oAcp19HI6IGeoHrVTDUoUaKd1KgeqEj3OqMGPcR4w6t6I8f0qptKEHNrdlUL1Mp661EVKMX2qGiB5rDdplSglsBOktUBDbK9LBWoPwAq6IBGAt0yClBXVKBOBSgfFWhYAeqJCtQdGmRdp94gPm6HBhWDXSqXVY77IifsGQ09Rw7poJzzLV58pZqjEV6nSqcM9AluIFdQgPq4veqSbekb3B4VUwFq5QeaVVPEWSPooPIMiTS/41lRpFDif75X6b27BMGzYJpUHxeDBGMn2C6Un5Zs5eOCvrfwVmqP4MNjGqC2Mr9vnRM9bBRw/qQVBd0jmN8zwaUq+OQJUy+u6xc8UsDEHxI8UEYzgGzRnCXRDFm6kWobEaCR16oxoHby6nfgH6e1Y2989fPJIs+Wgvb5erzM7hAaoM2EayRJU7RTIDmEO65ktUFo7CZoc69QFr6eNucY93YUactu0pGssbmDQgyw53J9b1TJhQD5yY7vSb/LnWZsMhVv70mWOCmVKhED6VvlGAysy7yxwyP3R4h+LZgkqlPLbT/McjzNKCd/IHzTV49mP1JWjl3NVY7NnYkw/X8iuOhb9FK1kCCcOCKTGmJnKBpBYyhg4D0BdCSgDnaSUIo3E7FEU2IcK3KoxyMGDTIraT3PsUUBamXCmy7NFDc0KJ6mrQEO5fLIZTS4+VzxlrBgi4oA1Ed9MMaE2BGCWinf0K6rQoQHJSndYY6urtKE1FkidYchvVXUFGictO8uTVtoBjRIbklFXVmlCdAccrRKukJREyBoaEvAL2l+SBkadN/hv3/n5b8ezfAc+BVivdKu+xG31zOmLij+zcXQlN++Phj1XCVsnYiKkjecglvum0e0QE99hgyp3z/CBglTzM/ezb1KZVWfzSpBiX+xeTyMnxLEU7RRjs8X1ynN97IClOJkIh94gx7ngCa9Xps4SeJtUlAbN4Vb6RkF8UncHbRHuZLBb/igaTHHtr9gEiZNgs65sblAmniLBqVx+JwU5dj2Uv4TuTFqrCzqtYhYFBC0AlzpovgscBGeIwL0c+nd2ZUxDFpiuPfTAOb4NcmhoxOTBK2uKta2kONoRYPsTsu7oHNadrxpokWK19Fw4CQjqJ+0I1APDJ/zsi4NPK1T0DNUqYyG1xwPNRfFNEU/fP6i9LzWon1dHD7QbmmvKezzR8F+BoJAkQiC74313jVaKOC1SSyOjIFkelqi6mBPOo/Zj05LRDQcA3ah9H7Q3ZwT7Fiv/u3vSOM4x+yweXdeY7a81xi5Fc9xx4B+oPqze91E8UKa0Hy76JhhKqD0rvrHFjB9T79IakLwAYBZnGdVnWNow0u9hGODHjIfGgJ3Sx0BNQ6hjebhHmRBSWxMraBnO8/DEyeLFt4lvNi0z6IEFsc0yHws8W9odK14RbVV6UltMGcRO/wuHVSk2tLrDANhqDUmHLrJN5s+7E7ip6kxqFxiw4tdngGspcKEjk5qGOps2BW/6A1yF5F0ZPBFnHYrT6kHC62LCoIT1DBwlP5Ej2tkZTrZKdL7QUBlcJ4CqWQoCCYUcp4oHkv3Egu6wGgTDW7kuaabyJbHgjolX+bfWcBD5Wc3a1UiiEkoP5ng2RQ/AI8TjrrGKImWOK3qYeVOrDhOqI+Bp5jBPq2MbHEk16E6TCBV5ON0wi1RdTYHZIU+DUUjT9/LenVJAfa5hYByO6oehgbDFZ9Pol2xHpAD6qZaQJqgu0gS356A1hlTD0MqTY836nJe/UBY3JqrFhrwNp+juzgj94BCgMTKzxAxlnu5vXBUVaNzU+CW88O8LgfsoIXlsbknVmelJgeP4caxt0zZVlai1ZHZPiENtXAtfGPgGK6Eu6zleVUi5gUj9wjtHnOuLzrL8anU2UmBkI/83eMtdoKIwBKY6a8Cgg1YYwclh5mOkSV7sdHVofu6TXw+7cxgW52yoGl/K2DO08l8DgxDywTeJycQ8wThidrInNFyvXiGPDRbDpmUgv8wGY2CpTdew3HhFfyjBXPxxA+ocO+8u3QL5B4xin9cCUvRUhfYE9kUGK9+bAvIZdjLXj76zLbD/ywHip46/BU6jtce3p7//OzRgX2Hn0uzwTTQ50109TFFPuGlAiO+c+hB2UxcUc457H06h0KMHI4kBJlLxlP03by1jCxIEefP+CbaiR7DxIYuPobdCTNx7Idb5b06/XEehkPcUN0bMDl3W2K0oLnSXtPQa49Cx2BRrkYw1htZiWaaU0xFDXcOxn/dcLSrzLEq2z6PvPg0LUD1y3rdirahc9A7Vin3FBy4jD9DxGh4wyhLSZfilYBAwDq+LM7+wZymygHlZJI6agzcXRbriUsoLejHoi4HicNLVgtKiJafm5fAzIsWneICdeJ1Q6AFuYlzssgfhUsSdSt+k5gjVre4pMYluTD4SrDHtw1Kr2PniF/rZB1RSZ1PMYLDqgITSDPm7bVXGYt9J6vWVJMLiE71Q6aWpmrc/yJ5c9frydGJn7zhaV63f8oMBrikSkz2uv+Gxe4d3v3m90MI7PEN2wa+wj/XmSTmq8r2GhjIfGQlfy4pb5aZUDzKI4MvkVEx3viiB42QFXp53QLJJkDUtUfousAoQSi7ocKtJdGD2qjsbR6nNiQiUAtl0a2coqaIQIPUM6D4Ihs5qEidWaMZG40alGSS8KLmQWxoUAuTuo9oTlJoUBctGSCzk+gmTYGQjDPD5pu90YLQyC1n168VLShvsz4n+C9RgNqCxVv9tpZzCAkaCZbFttq2jgcPB8IiyPKgk3XD8uZBD7xwx/McVbMzaPDEIz3mdDLDgdwTT6ia43ymztnascnvIM5SNUF+YuHJvwkciN7FLRzziwTXcK8kB+XJEtgDgvrRcTrfQgcpw/qgVjKffJxfUksV6NYyRKJU1Qd1EQnlJiJufVcgtLpnz3mubCwFYcu1r24ng+qcQDMFNjBg2zz3JwURWXOFTbG5/oL55IwuaJ5EMzD4Q8we2uqBhsQiiFCbpFpOD7RL0H1MXJTEZmE5HZDo9HtCptWzp/GmGiQ8Yu6U7fA84UgBEtXZr1Co9XRr4j2+YMGwSHWm2qgKlNK3BKk9NPEen9veEx91lEV1CXLQoKSMht/W8acpqwBxzaiWke3Wj8uMNNQ7YjVFyrBDJCQaoV6vs1cqywK3p7lFEyFBJ5SZNyPd64GKMg9pqI/z2IX0v3/XciQqUEEB6oto6Jp4jy+jA+rnVFMpShNZS63rcIJ6fvj3+PS+TyEm2r303+NbrgWKpwXxhf57fJ1aIHYgxjRAtN+v6XGYg433tKKge0g3dIsmiKqVutnUDIn337jnABvOqJofPDX27J+/J0zG5yVF9YKh3X5EpEphctjEhbT9ds4I0b5espddbiZZjptGyHZvJJpqc20WFB2ovvDatDtZ0LVus6BZ0CxoFhQedPfCxWRAffJOMn5rLKR+/cvCUzqgLThhmVoHr/Q3IP2i+KbmRB1J9N0plWMmWQtlfdL57JPeZ+sDG7b6fzYFQBn8VvUo9O2XqEDPf2Ec5u2XqXowvzDP+82SbBO2icPnbIwWAjdSErGfoZylhN5KgbywHIQq+qpQWhzz4w0/w3Cudd8WmBOiamAv6gY3Ed8KSyylIJy19fogJ2FJvGQvK/iBdd0NEm++16Oedi684NTq23MxOKqbSu7344C+lV87LWe0O3+/wQG1oAC9DY7cTi+l6vMTBBBULkOnLm6BSuNFPxBwNXkggOdRdjCHZ3UVdF7YMH3QpF8fWfBSmWmy8GyaLgjqhknIClzULQb59zINJa5uH3jc++8UWUV2nBYKcnBanSeNyUENVL18HL/10+6XMyX94SkSWVMbnX6uRfJCXA2KwSw86c/VPJsYsxr5TQ0mlbXOUO8G9EhBdViyWkOnu/CTE15JEKjOhKJPndbbprC0M4NSRiHIielH3BWRRKCPQVAaCrL+l63U6FzyCq42xP9HDBpzDXzYeNSfdRbkvoXhvYFXpVPdD1EZFFirI1KQZcR7wZNUTOMFAciuZmDWHgDFCbtQgqrAwCeMZM3vFgDZq2ABYJUeuklcxKzzRHbWcQHnjHZLCLLr13mPZNHqz1Vc+qw0BvAY3Y6BF4xByx/xTiO1D7S9GAS+RSrhLe95tLoyHjBACWjKiJ90ViUGBaq7XR9TchdbBy1GrEcuA4ooAlDVuVNnIo+C4nL/wlxQzfMPw9TbR3YGcXMqFwRArpjXQoCSA6Bt4YCu0N+TOAzdE1G4KgOdc7XEmr/8GGOo7CDmwELHs3/w970H4V45rgGacN2QxQdVje1lUEAZh+MK3h+uH0rBwxXwjWKLiMMNAWgGgCruVmT5xsqAHBtO7MtC1+vmvBu2wsI0IBk99mlQjrhZB+Q5bAEIvmGwmRHKxqlTH1woIAX1ggVv+UuBAS31whH4vij8Xra4t10uDbwqIABNuKAqqP8XgOz3gVNNoiu5EaORggWdH2TI3yRb+ef+M2MQtQhEQJhAyg5ZCsjQuNuFPGq4q/fGakTCf7OiA2WVPEz7aLdl1KJRi0YtGkEWAQAla4PxKoWGqwAAAABJRU5ErkJggg=="), this.logo.width = 207, this.logo.height = 243, this.progress = new u.TC, this.progress.beginFill(16717864), this.progress.drawRect(0, 263, 207, 4), this.progress.endFill(), this.progress.scale.x = 0, this.addChild(this.logo), this.addChild(this.progress), this._tweeenProgress = new A(this.progress, .5, {
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
                class Ht extends(Ut(J.j)) {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        super(d.xE.WHITE), this.tint = e, this.alpha = t
                    }
                    resize() {
                        var {
                            viewport: t
                        } = this.game;
                        this.width = 2 * t.paddingX + t.width, this.height = 2 * t.paddingY + t.height, this.position.set(-t.paddingX, 0)
                    }
                }
                const Yt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACHUExURUdwTF3XDV3aCl7YDVzQF13ZDGDXC1X/AFXUAF7YDGDYDl7XDV3YDV7YDV3XDF3XDF7YDFzYDF3XDF3YDV3YDF7XDV3YDF7XDV3XDF7WDF3ZC13YDVjSC13YDV7YDF7XDV3XDV/fD13XDV3YDVzUDmDbCF3YDV3XDF3YDF7ZDF3XDF3YDV7YDQaFSaEAAAAsdFJOUwB1MfkLKS0DBvQ1qNKtaMrsY9znVda5w6F5RIYXXYyCzxDiviQdmPBPPo5wBc1wAAAAA81JREFUWMO9WemaqjAMrbIvIosLMOi466jv/3x3pm1AoKUty+0v/WhDSU5OTlOEhMMyV1m69eNQ08LY36bZyrTQ4DHPNvd3a9w32XyQ1efpzR2nZ0/b1m75FozlTt0ndhC/JUYc2Gq7jZKaR/dRbhQ6Qnph5NG+5vUkUti1eyjXaZuX0Z5gvDZaOeXgynphXzkxOPJmHYMqBHspfxg+zPcEW3E9mOkbYrsrB8xKTDbAtLMSTf2mM9e5nN/yNV3w3Y2GlIYsk0aRndEwph3osBcUna4KNl2K+AV3Mxa1uziqJdMR1vH2nMp4qysyKfvpF3ka9CGWgKz9YuKMPIv6UdaOrGagznD677fas9MCv+3zv0VuEE/6TWgQfvCGlAWShfsGFkm66UMM6yQJazlgYZ7UzGH10cQ5ePhEc4TflQ2tvLMmrvSE6Xf1MokRkOiNN/0MFws/2NCshBre8AKNMDBrJHYta+ZjGDZrXsbFa4PQaFte0mTu62FjG7a4gSSEUXGer273cmKxzqFi3rgWSelxxeu0BwvLMVZ+ePNXVbsFraJJ830lEl5/P7aqdo+gPpbNJ1tI4kUfT+ggg05XZl6ff9Mw7AFi/QyS8NIW1ZjwLQJpR03n2htqN2TwoYVLkUnS7qzGNSCs7kz9gb9mRyrKTclwCoKNnVQ3UuM85dg9QTrnHazsEXQ8lItmx6IHwe+aCworZwnZDOzuuGctXD4RRtuFHSLGx77ALl+AXDBeEAZHwQm90wx7BHY7olLgwCI8TefEtgnU1VtCZut4BtI4hu+MlH3AUWmPxIZDjitucESsnuVwPOmGPXXFiRO8kmaWIMNdsJt2EwANns+DW0mMZ1J0TTiPLgTEQuHGT5Br/GnJCOm/jUjX0ATpSOlLWPn0Ag2GrVA40pTuIiEXvn5vxE2P8wcloU7azLVGG8EvxGRCabOb6FeN9oSEXSB6QWkKat0amVoOpUlUTLOPnsdFWiSfJco/pCCzwDFGWf6FgiXtKnBt9FfSVSSxSE12JFVjJbHEovCPNjTJ/gURhV+SMrbYJrJV8VPGTia8ab2Z4Kgw2eFmsuMYHCAHd4XJyfnjAEm9PBtquHXkne6QPllbASTkCI2Q5/9q3SBznGaTya1Cu7HbY9M19KZrQZZNU08Rdbon0l7Q5l0rZYrpi9q8H43pmXxjegaNaVvGW2O30tF0zf/KZb+mBUVlXl1XSAVlqgsWNNmVEGpeYoXNS6yw7yXWH+hlr93UKXyii0IS9kmuNmkcs7PTNuqcMxcNHuT6eB3+vsAJ17LXx/8A6kQS8eozSXoAAAAASUVORK5CYII=",
                    Vt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACcUExURUdwTP8gIP8hIf8gIP8hIf8hIf8fH/8jI/8gIP8AAP8hIf8iIv8hIf8XF/8qKv8fH/8iIv8hIf8gIP8hIf8hIf8hIf8gIP8fH/8hIf8gIP8hIf8gIP8iIv8hIf8gIP8gIP8hIf8gIP8hIf8fH/8hIf8gIP8gIP8hIf8fH/8iIv8hIf8jI/8eHv8fH/8iIv8gIP8hIf8fH/8fH/8hIT5bvnQAAAAzdFJOUwDS9GXk5ykk4gODLM4LBjF4qXXWrrn6GDbcwY5pxl+kVPnuCInrJ59BHkUzEXA8TplYEFU3kgwAAAO2SURBVFjDxZlpm6IwDIADDFgGYXAQFTzxvubk//+31baIHL1g2e0nH0lfQpomaQogHLaz8g+xFq2TZB1p8cFfOTa0Hm9+qKeVoYf+WyvqFKXMgaYN2fainwpGf6Fuk80sSiVGNNuoaWuYT7PX4dY4W2MXwB1bZ2Mbrp8emoaC1pPcCKPww6oKWB/hKDfIRBLrTR9z5saVJXU15g+xqSfDtbRMfiBQ5TLI1NYsMXeVue1gLxbeDzLHXolEX6lkcJSz2zGgE1753nCgS+Z7sgvt+dQeB453eEPqnRcV37xQjx8ylbEpd/Crtpl+qaWHLJ2XMtbircyS+3TWJLDMODqtyLNFs5C1ILNrvM7Sm+ub66xXdopH9tu2efDekj1Ydg0SHwZt0gLxjWkpnmEvD9w2YBdvwlEhwNg4TiZOu/zoJDiKPnuzgb/Cb5t5fYwxnj7CrLP7VUwqidjYA8zcoO/4TZ8FobOZaj0+tqel5rnwzycGvT9cDSs8LL58d8/wXHLv5a5eMT7gaGN6hV1TrBLGpHboCbhpOi6uX8HKOHmFpXmagEy5/Tpnpn/uscSxfiKLTB+/lB9P8N/7PKpprKn1ZBYXoJ9HuaiwklJkNpd4WIQrPyxzAgVyDzG5cHp4wsf9R8wzZJnM4wLE2SYeMizBJPO5xBY3H7PXVSfmkgVcYlrdJi6t2yBLFnHBxqnIgR+2ievIQi418oJ48TdIkiW48E08eclZu4KSd7IMl6zekgSKL5AiS3HhC1fWEPCcokSW4hK3COAed1OBaEaW4kLvLrUDvRpUuWQhl4RyHbC0OO1nZDEXXCwIiRoYSYPXiqZAsqZAqouHJBdPU3A3U4pM3S1W2CCWFJluEKUtLUWmW1ochNATTIZMg5AwbKICSoJMw6Yo0KMSSEjOAr0gNaEKRkTOUhM/maIaiICcJVNu+ke1CD75kf45BQtiAHjkvGBhl1iIOT0jn3glFrMoRJwPZpOfisJGZSwlRydOGUteolp4U/KcU3jTw5jqUYGSXc5RoeHhBpMRcA43TY9jlpbujrzjWHaALAYMW5ivbgYrTemXDpCdHXm7O6R31lborhECm7/Vuqk0qp2WzSay/rrz79pj3TX0umtB5k1TRa9zRU3TR5s3UNopjiZq8+aN6USlMZ3QxrT3P1rpt/HTrPn/I2+ydLQUdNQvy8d1hdSibNQvWGQvnDq6EoLuLrGgs2s3rHU3F4Vk2flXmxdoMSZ+XHcZG/sTaD3w9fE82N1eoO+CueT18R9RSEyQxPodRgAAAABJRU5ErkJggg==",
                    Gt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACcUExURUdwTAOr8AOr8AOr7wSr7wWr7wWt7QC//wCq4gSr8AOr7wSt8ASq7wSr8ASq7wCv7wSr8AKr8ASq7wOq7wSq8ACm8wan8gOq8AOr8AWq7wOr8AKr8QSr8ASr8ASr7wOs8Aaq8QSr8AOq7gSq8AOr8ACq7gOr8AOr8ASr7wWq7wSq8AOq7wSs7gOr7wSq7wen8AOr7wSr7wSs8gSr8NIVJa4AAAAzdFJOUwDS34T6MSwECfTYNXXu5hCuVrnLZxcpjs9jmVy9q6hEJ3pOeIkew5+kYGrFPoBwI5PqOwkKd94AAAPzSURBVFjDtVnblqowDC2IgAioeFe8DV5mdNSZ4///24GkCKhtgwx9cq2mMSQ7O2nKmHJZZi867DXdMwxP1/aHqGdarPJqbsLW7Wm1wk2zktaxfhMuffymbmvevylWf17eJ/ZRvxGWfrTLWTv1c6e9YDtdjYaxCns4Wk23gZfb9KclrG5P7ueM4DJ6FhhdAuMuMmlTvTDOnDjoiKQ6gywEY5I/Rloqv1SY0l6mZmsjtd5eCtvlWi28XqbA7qlEz1zSWdH8tnL4gbMcDQcesogcaivi/jhIjlhdjs52GWy2OeK7Qs3WAiUWnXLJ1FkoNH/ifqN8+jfw5Kd0d/AOsQwkNvVw7+s9yvrC0y9QN0L8Ht+l2CPi+SlTbMy37fvkvcUcfMxu5IdFlbKA2Bg/YBFQ7nSqKO5AEhqFHLCAJw1TzHgfP6Hje05w/hZrNsG6SR7NU/iKSHRi95Ojdk2MmwgEpjl7oF5ogsSxG0axHgVDUeoCAvwsfi7ICz5yrT1VOkek+Ru23fsfgcFdgRWvimoocgawmJ9++hyEm1Lk38LNV28wS30t4nWz4GUoXoGQ8xLEzHbc3zNeDKVg5rtrmYcTK5x9Dps/qFnk5X+wu85YTSN3MuiND9H+JGM5vRBJ5erKSRAQpkPnB4I7suKZXPHujoRL8mPPSlosdAXbJ9ubVJDuCQT9TdyhuBzolicD8fNC0PviWg+ubVkI6Ra5jdj5qvbEglJkogVkF3eQODwZcYeJxBxRPCPqvTryjM5g08Bmghi7D4/SebjYYpzk4Mk7j2czYEn294nMiTlUUNgBvziorABYOOw3Iw354q1w/6oMRCL2y1oyrso3wrzxU98KhgBgBuKEso8OXhIAb4MkM4iKoSVvURoPrtgjumKMsSYs7gpg46ta3JU0wC+DpxHhNlffYIpw2xMTZIUMQMlPdBo1pXezeFHwnjqtFAnRa1cDfRf+pWJOmyWJnsBVnOjLliYaKBJLSxZTWuzCN8q/at3LP7Vhsa5Dit6sYSG2WJeYuPtNoid0elO4wfuhqVScawpVbSyUfT536ar05ttYReOdrx8xG1Jukf3CZaypJBaCYrMwQJBebjh58xtZQDE4u4+5ai/jFdxoUzzsEi+Q+FXnOHzatwLqk4cLJB+QRPIaaSqTKHoa0Sgv6aT14pKejhXsKnpt51UY/mAQsnw1CKlvdMPMisOmgZBM6hqP1TfQq28EeR/G/vnQtLYxb32DaVZhlK6MTF3D/zhT0nGYsVQU5Wb2XEGir9wDy0n2wHIq+cDCansSYvU9YrHant3A6noeCjHstTxt8jiKHmPbrPKyzN7mcHJ+4z9oec7psCE9H/8H7cYwlvfLO08AAAAASUVORK5CYII=",
                    Kt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAwUAAAFkBAMAAACDfIqcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURQ0NDf///////xEREREREf///////6uZoDAAAAAHdFJOU8whHsC+BBX9xfwkAAACKUlEQVR42u3RQQ2DUBRFwWcBBwULGGiDgc+CPZDg3wJpAA03IXMknKllH5TsaDV3ytZqMyHcWr0J4T4MGOgymEal+t0G31IqBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAgAEDBgwYMGDAgAEDBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgwYMGDAgAEDBgwYMGAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzE4M0G06hUj4GiMWCgv8FmQri1ZhPCtVr2QcmOdgK51GPO7vMFjAAAAABJRU5ErkJggg==";

                function Xt(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }
                class Qt extends m.xv {
                    constructor(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        super(t.toUpperCase(), function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? Xt(Object(i), !0).forEach((function(e) {
                                    (0, n.Z)(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Xt(Object(i)).forEach((function(e) {
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

                function Jt(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }
                class qt extends m.xv {
                    constructor(t) {
                        super(t, function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? Jt(Object(i), !0).forEach((function(e) {
                                    (0, n.Z)(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Jt(Object(i)).forEach((function(e) {
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

                function $t(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }
                class te extends m.xv {
                    constructor(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        super(t.toUpperCase(), function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? $t(Object(i), !0).forEach((function(e) {
                                    (0, n.Z)(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : $t(Object(i)).forEach((function(e) {
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
                const ee = class extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupMaxLimit"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContinue", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new Ht(.7), this.content = new Y.W2, this.background = new J.j(this.game.loader.getAsset(Kt)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new te(this.game.i18n.t("PopupMaxLimitTitle")), this.title.anchor.x = .5, this.message = new qt(this.game.i18n.t("PopupMaxLimitMessage"), {
                            wordWrap: !0
                        }), this.message.anchor.x = .5, this.actionContinue = new Qt(this.game.i18n.t("PopupActionReload"), {
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
                class ie extends(Ut(J.j)) {
                    constructor(t) {
                        var e;
                        super(), this.texture = null !== (e = this.game.loader.getAsset(t)) && void 0 !== e ? e : d.xE.EMPTY
                    }
                }
                const se = class extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupNetworkError"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "icon", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionReload", void 0), (0, n.Z)(this, "_resolver", null), this.overlay = this.addChild(new Ht), this.content = this.addChild(new Y.W2), this.icon = new ie(Vt), this.icon.anchor.x = .5, this.title = new te(this.game.i18n.t("PopupNetworkErrorTitle"), {
                            align: "center"
                        }), this.title.anchor.x = .5, this.message = new qt(this.game.i18n.t("PopupNetworkErrorMessage"), {
                            fontSize: 36
                        }), this.message.anchor.x = .5, this.actionReload = new Qt(this.game.i18n.t("PopupActionReload"), {
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
                const ae = class extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupRestore"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "icon", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContinue", void 0), (0, n.Z)(this, "resolver", null), this.overlay = this.addChild(new Ht), this.content = this.addChild(new Y.W2), this.icon = new ie(Yt), this.icon.anchor.x = .5, this.message = new qt(this.game.i18n.t("PopupRestoreMessage"), {
                            wordWrap: !0,
                            wordWrapWidth: 320
                        }), this.message.anchor.x = .5, this.actionContinue = new Qt(this.game.i18n.t("PopupActionContinue"), {
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
                const ne = class extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupSound"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "icon", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContainer", void 0), (0, n.Z)(this, "actionYes", void 0), (0, n.Z)(this, "actionNo", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new Ht, this.content = new Y.W2, this.icon = new ie(Gt), this.icon.anchor.x = .5, this.message = new qt(this.game.i18n.t("PopupSoundMessage"), {
                            wordWrap: !0
                        }), this.message.anchor.x = .5, this.actionContainer = new Y.W2, this.actionYes = new Qt(this.game.i18n.t("PopupActionYes"), {
                            fill: 16777215
                        }), this.game.interaction.out(this.actionYes, (() => this.actionYes.style.fill = 16777215)), this.game.interaction.hover(this.actionYes, (() => this.actionYes.style.fill = 10066329)), this.game.interaction.click(this.actionYes, (() => this.hide(!0))), this.actionNo = new Qt(this.game.i18n.t("PopupActionNo"), {
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
                const oe = class extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupSpendingBudget"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContinue", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new Ht(.7), this.content = new Y.W2, this.background = new J.j(this.game.loader.getAsset(Kt)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new te(this.game.i18n.t("PopupSpendingBudgetTitle")), this.title.anchor.x = .5, this.message = new qt(this.game.i18n.t("PopupSpendingBudgetMessage"), {
                            wordWrap: !0
                        }), this.message.anchor.x = .5, this.actionContinue = new Qt(this.game.i18n.t("PopupActionContinue"), {
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
                const re = class extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupUnexpectedError"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContinue", void 0), (0, n.Z)(this, "_resolver", null), this.overlay = new Ht(.7), this.content = new Y.W2, this.background = new J.j(this.game.loader.getAsset(Kt)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new te(this.game.i18n.t("PopupUnexpectedErrorTitle")), this.title.anchor.x = .5, this.message = new qt(this.game.i18n.t("PopupUnexpectedErrorMessage")), this.message.anchor.x = .5, this.actionContinue = new Qt(this.game.i18n.t("PopupActionReload"), {
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
                const he = class extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupZeroBalance"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContinue", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new Ht(.7), this.content = new Y.W2, this.background = new J.j(this.game.loader.getAsset(Kt)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new te(this.game.i18n.t("PopupZeroBalanceTitle")), this.title.anchor.x = .5, this.message = new qt(this.game.i18n.t("PopupZeroBalanceMessage"), {
                            wordWrap: !0
                        }), this.message.anchor.x = .5, this.actionContinue = new Qt(this.game.i18n.t("PopupActionContinue"), {
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
                i(7859);
                const le = class extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupFreeRound"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "icon", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContinue", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new Ht, this.content = new Y.W2, this.icon = new ie(Yt), this.icon.anchor.x = .5, this.title = new te(this.game.i18n.t("PopupFreeRoundStartTitle")), this.title.anchor.x = .5, this.message = new qt("", {
                            wordWrap: !0,
                            wordWrapWidth: 600
                        }), this.message.anchor.x = .5, this.actionContinue = new Qt(this.game.i18n.t("PopupActionContinue"), {
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
                class de extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupQuickSpin"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionEnable", void 0), (0, n.Z)(this, "actionClose", void 0), (0, n.Z)(this, "escKey", void 0), (0, n.Z)(this, "enterKey", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new Ht(.7), this.content = new Y.W2, this.background = new J.j(this.game.loader.getAsset(Kt)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new te(this.game.i18n.t("PopupQuickSpinTitle")), this.title.anchor.x = .5, this.message = new qt(this.game.i18n.t("PopupQuickSpinMessage"), {
                            fontSize: 35,
                            wordWrap: !0,
                            wordWrapWidth: 600
                        }), this.message.anchor.x = .5, this.actionEnable = new Qt(this.game.i18n.t("PopupActionEnable"), {
                            fill: 10066329
                        }), this.actionEnable.anchor.x = .5, this.game.interaction.out(this.actionEnable, (() => this.actionEnable.style.fill = 10066329)), this.game.interaction.hover(this.actionEnable, (() => this.actionEnable.style.fill = 16777215)), this.game.interaction.click(this.actionEnable, (() => this.hide(!0))), this.actionClose = new Qt(this.game.i18n.t("PopupActionClose"), {
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
                const ce = class extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupRiskNBuy"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionYes", void 0), (0, n.Z)(this, "actionNo", void 0), (0, n.Z)(this, "escKey", void 0), (0, n.Z)(this, "enterKey", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new Ht(.7), this.content = new Y.W2, this.background = new J.j(this.game.loader.getAsset(Kt)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new te("RISK FEATURE"), this.title.anchor.x = .5, this.message = new qt("", {
                            wordWrap: !0,
                            whiteSpace: "normal",
                            breakWords: !0
                        }), this.message.anchor.x = .5, this.actionYes = new Qt(this.game.i18n.t("PopupActionYes"), {
                            fill: 16777215
                        }), this.actionYes.anchor.x = .5, this.game.interaction.out(this.actionYes, (() => this.actionYes.style.fill = 16777215)), this.game.interaction.hover(this.actionYes, (() => this.actionYes.style.fill = 10066329)), this.game.interaction.click(this.actionYes, (() => {
                            this.hide(!0)
                        })), this.actionNo = new Qt(this.game.i18n.t("PopupActionNo"), {
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
                        var a = this.game.i18n.currency({
                            withSpace: !0
                        });
                        return this.title.setText(this.game.i18n.t(i ? "PopupRiskNBuyTitleRisk" : "PopupRiskNBuyTitleBuy")), this.message.setText(this.game.i18n.t(i ? "PopupRiskNBuyContentRisk" : "PopupRiskNBuyContentBuy", "".concat(this.game.helpers.toMoneySS(i ? t : s.bet)).concat(a), "".concat(this.game.helpers.toMoneySS(e)).concat(a))), this.actionYes.setText(this.game.i18n.t("PopupActionYes")), this.actionNo.setText(this.game.i18n.t("PopupActionNo")), this.resize(), this.escKey.enable(), this.enterKey.enable(), new Promise((t => this.resolver = t))
                    }
                    hide() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this.game.keyboard.restore(), this.resolver && (this.resolver(t), this.resolver = null), this.actionYes.style.fill = 16777215, this.actionNo.style.fill = 16777215, this.escKey.disable(), this.enterKey.disable()
                    }
                };
                class ue extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupWilds"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionEnable", void 0), (0, n.Z)(this, "actionClose", void 0), (0, n.Z)(this, "escKey", void 0), (0, n.Z)(this, "spaceKey", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new Ht(.7), this.content = new Y.W2, this.background = new J.j(this.game.loader.getAsset(Kt)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new te(this.game.i18n.t("PopupWildsTitle"), {
                            fontSize: 40,
                            wordWrap: !0,
                            wordWrapWidth: 600,
                            breakWords: "ja" === this.game.i18n.language || "cn" === this.game.i18n.language,
                            align: "center"
                        }), this.title.anchor.x = .5, this.message = new qt(this.game.i18n.t("PopupWildsMessage"), {
                            fontSize: 35,
                            wordWrap: !0,
                            wordWrapWidth: 600
                        }), this.message.anchor.x = .5, this.actionEnable = new Qt(this.game.i18n.t("PopupActionYes"), {
                            fill: 10066329
                        }), this.actionEnable.anchor.x = .5, this.game.interaction.out(this.actionEnable, (() => this.actionEnable.style.fill = 10066329)), this.game.interaction.hover(this.actionEnable, (() => this.actionEnable.style.fill = 16777215)), this.game.interaction.click(this.actionEnable, (() => this.hide(!0))), this.actionClose = new Qt(this.game.i18n.t("PopupActionNo"), {
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

                function pe(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function ge(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? pe(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : pe(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                const ve = JSON.parse('{"AutoPlaySettingsStopCondButtonReset":"Reset","AutoPlaySettingsStopCondCheckboxBalance":"If Balance Increases By","AutoPlaySettingsStopCondCheckboxBalanceDrop":"If Balance Decreases By","AutoPlaySettingsStopCondCheckboxFeatureBonus":"If Bonus Game Won","AutoPlaySettingsStopCondCheckboxFeatureFreeSpin":"If Free Spins Won","AutoPlaySettingsStopCondCheckboxWin":"If Win","AutoPlaySettingsStopCondCheckboxWinAny":"Any","AutoPlaySettingsStopCondCheckboxWinBig":"Big","AutoPlaySettingsStopCondCheckboxWinGiant":"Giant","AutoPlaySettingsStopCondTitle":"STOP AUTOPLAY","AutoPlaySettingsSubTitle":"Setup your best autoplay conditions","AutoPlaySettingsTitle":"AUTOPLAY","BetSettingsLines":"LINES\\n<value>%s</value>","BetSettingsTitle":"BET SETTINGS","BetSettingsWays":"WAYS\\n<value>%s</value>","ControlsDesktopAutoPlayStart":"AUTOPLAY","ControlsDesktopAutoPlayStop":"STOP AUTO","ControlsDesktopBalance":"BALANCE%s\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopBet":"BET %s\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopFreeRoundLeft":"FREE ROUND\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopFreeRoundWin":"TOTAL WIN %s\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopFreeRoundWinEmpty":"TOTAL WIN","ControlsDesktopFreeSpinsLast":"FREE SPINS LEFT\\n<delimiter> \\n</delimiter><value>LAST</value>","ControlsDesktopFreeSpinsLeft":"FREE SPINS LEFT\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopLines":"LINES\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopMaxBet":"MAX BET","ControlsDesktopTotalWin":"TOTAL WIN %s\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopWays":"WAYS\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopWin":"WIN %s\\n<delimiter> \\n</delimiter><value>%s</value>","Currency":"CURRENCY\\n<value>%s</value>","GameRulesAdvancedAutoPlayContent":"Advanced autoplay settings are available in the section with standard autoplay settings. You can set the conditions for stopping the game in automatic mode:\\n\\n<bold>if win any/big/giant</bold> - autoplay will be stopped after any/big/giant win\\n\\n<bold>if balance increased by 10%-100%</bold> - autoplay will stop when your balance increases by the selected %\\n\\n<bold>if balance decreased by 10%-100%</bold> - autoplay will be interrupted when your balance decreases by the selected %\\n\\nClick <bold>Reset</bold> to reset all autoplay settings","GameRulesAdvancedAutoPlayTitle":"Advanced Autoplay Settings","GameRulesAutoPlayContent":"Select the number of game rounds to play in automatic mode by pressing the button with the corresponding number, or press the button with the infinity sign to play in automatic mode until the autoplay is manually canceled or until the balance runs out. Your choice must be confirmed with the Start button.","GameRulesAutoPlayTitle":"Autoplay Options","GameRulesBestExperience":"Please note that you can only play one game at a time on each account. Therefore, you cannot play a game on more than one device, or multiple games on the same device simultaneously. Doing so may lead to various errors.\\n\\nFor the best gaming experience, we recommend using the latest version of the relevant software.","GameRulesGeneralRTP":"Theoretical RTP: %s %","GameRulesGeneralTitle":"General Info","GameRulesInterfaceAutoPlay":"Click to go to autoplay menu","GameRulesInterfaceBalance":"Here is your current balance","GameRulesInterfaceBetLevel":"Your current bet and a button to go to the bet size selection menu","GameRulesInterfaceContent":"All buttons of the game interface are listed below. Please note that the appearance and location of the buttons may differ slightly depending on the format in which the game is launched and what feature it is currently in.","GameRulesInterfaceMenu":"Click to access the game menu","GameRulesInterfaceQuickSpin":"Click to enable/disable quick spin","GameRulesInterfaceSound":"Turn game sound on/off and adjust sound volume","GameRulesInterfaceSpin":"Click to start the game round at the current bet. In the desktop version of the game, the button may have an alternative design","GameRulesInterfaceTitle":"Game Interface","GameRulesInterfaceWin":"Here is the win in the current game round","GameRulesSettingsContent":"To go to the settings menu, click the cogwheel icon in the game menu","GameRulesSettingsContentItemBackgroundSound":"<bold>Background music</bold> - turns on/off background music in the game","GameRulesSettingsContentItemFullscreen":"<bold>Full Screen</bold> - enables/disables full screen mode","GameRulesSettingsContentItemGameSound":"<bold>Game sound</bold> - turns on/off the sound effects of the game","GameRulesSettingsContentItemQuickSpin":"<bold>Quick Spin</bold> - turns on/off the function of the accelerated mode of rotation and stop of the reels","GameRulesSettingsTitle":"Game Settings","GameSettingsBackgroundSounds":"Background Music","GameSettingsFullscreen":"Full Screen","GameSettingsGameSounds":"Game Sounds","GameSettingsIntroScreen":"Intro Screen","GameSettingsLeftHand":"Left Hand Mode","GameSettingsQuickSpin":"Quick Spin","GameSettingsRiskFeatureCheckbox":"Risk&Buy","GameSettingsTitle":"GAME SETTINGS","IntroScreenHideButtonText":"Don\'t show next time","IntroScreenLoaderText":"LOADING","MenuDesktopButtonFullscreen":"FULLSCREEN","MenuDesktopButtonHome":"HOME","MenuDesktopButtonPaytable":"PAYTABLE","MenuDesktopButtonQuickspin":"QUICKSPIN","MenuDesktopButtonSound":"SOUND","MenuGameRules":"GAME INFORMATION","MenuMobileBetSettingsTitle":"BET SETTINGS","MenuMobileGameSettingsLeftHand":"Left Hand Mode","MenuMobileGameSettingsQuickspin":"Quick Spin","MenuMobileGameSettingsSounds":"Game Sounds","MenuMobileGameSettingsTitle":"GAME SETTINGS","MenuMobilePaytableTitle":"PAYTABLE","MenuPaytable":"PAYTABLE","MenuSettings":"SETTINGS","NetPositionTitle":"Net Position: %s","PopupActionClose":"Close","PopupActionContinue":"Continue","PopupActionEnable":"Enable","PopupActionNo":"No","PopupActionReload":"Reload","PopupActionYes":"Yes","PopupFreeRoundEndMessage":"The next spins will use your bonus amount","PopupFreeRoundEndTitle":"Free Rounds Finished","PopupFreeRoundLastMessage":"Congratulations, you have\\n last free round","PopupFreeRoundStartMessage":"Congratulations, you have\\n%s free rounds","PopupFreeRoundStartTitle":"Free Rounds Bonus","PopupFreeSpinsButton":"CLICK ANYWHERE TO CONTINUE","PopupFreeSpinsStopDescription":"<value>%s FREE SPINS</value> PLAYED","PopupFreeSpinsStopDescriptionNew":"%s Free Spins played","PopupFreeSpinsTitle":"CONGRATULATIONS","PopupFreeSpinsTitleNew":"CONGRATULATIONS! YOU WON","PopupFreeSpinsTitleRestore":"IN-GAME FEATURE RESTORED!","PopupFreeSpinsWinRestore":"<value>%s FREE SPINS</value> LEFT","PopupFreeSpinsWinRestoreLast":"<value>LAST FREE SPIN</value> LEFT","PopupFreeSpinsWinStart":"YOU WON <value>%s FREE SPINS</value>","PopupFreeSpinsWinStartNew":"%s FREE SPINS","PopupFreeSpinsWinStop":"YOU WON <value>%s</value>","PopupFreeSpinsWinStopNew":"<value>%s</value>","PopupMaxLimitMessage":"Bet exceeded max bet limit.","PopupMaxLimitTitle":"Max limit","PopupNetworkErrorMessage":"Please reload the game.","PopupNetworkErrorTitle":"Connection Lost","PopupQuickSpinMessage":"It seems you prefer to play a bit faster.\\nWould you like to enable Quick Spin?","PopupQuickSpinTitle":"Quick Spin","PopupRestoreMessage":"In-game feature restored!","PopupRiskNBuyContentBuy":"Buy in a feature for %s\\nthat will play at the bet %s","PopupRiskNBuyContentRisk":"Take the risk of winning %s\\nto get a feature at the bet %s","PopupRiskNBuyTitleBuy":"BUY IN FEATURE","PopupRiskNBuyTitleRisk":"RISK FEATURE","PopupSoundMessage":"Play with sound?","PopupSpendingBudgetMessage":"You have reached your play limit.\\nWelcome back later.","PopupSpendingBudgetTitle":"Play limit","PopupUnexpectedErrorMessage":"An unexpected situation.\\nReload the page.","PopupUnexpectedErrorTitle":"Unexpected situation","PopupZeroBalanceMessage":"Please change your BET LEVEL or top up your balance","PopupZeroBalanceTitle":"Insufficient funds","RiskNBuyBuyFor":"BUY FOR %s","RiskNBuyFreeSpinsText":"FREE SPINS","RiskNBuyOnBet":"ON BET %s","RiskNBuySubHeader":"RISK YOUR WIN\\nTO PLAY","StatusBarMobileBalance":"BALANCE %s\\n","StatusBarMobileBet":"BET %s\\n","StatusBarMobileFreeLast":"FREE SPINS LEFT\\n<value>LAST</value>","StatusBarMobileFreeLeft":"FREE SPINS LEFT\\n<value>%s</value>","StatusBarMobileFreePlayed":"FREE SPINS PLAYED\\n","StatusBarMobileFreeRoundLeft":"FREE ROUND\\n","StatusBarMobileTotalWin":"TOTAL WIN %s\\n","StatusBarMobileWin":"WIN %s\\n","TimeElapsedTitle":"Time Elapsed: %s"}'),
                    me = JSON.parse('{"BackgroundRules0":"Blackjack pays 3 to 2","BackgroundRules1":"Dealer must stand on 17 and must draw to 16","BackgroundRules2":"Insurance pays 2 to 1","CONTROLS_BALANCE_TITLE":"Balance %s","CONTROLS_BALANCE_VALUE":"%s","CONTROLS_BUTTON_DEAL":"Deal","CONTROLS_DEAL":"Deal","CONTROLS_DOUBLE":"Double","CONTROLS_HANDS_TITLE":"Hands","CONTROLS_HANDS_VALUE":"%s","CONTROLS_HIT":"Hit","CONTROLS_NEW_BET":"New bet","CONTROLS_NO":"No","CONTROLS_REBET":"Rebet","CONTROLS_SPLIT":"Split","CONTROLS_STAND":"Stand","CONTROLS_TOTAL_BET_TITLE":"Bet %s","CONTROLS_TOTAL_BET_VALUE":"%s","CONTROLS_WIN_TITLE":"Win %s","CONTROLS_WIN_VALUE":"%s","CONTROLS_YES":"Yes","HISTORY_TITLE":"Dealer\'s hand history","LimitsMax":"%s Max","LimitsMin":"%s Min","LimitsTitle":"Current Limits:","PLACE_BET_BUTTON_CLEAR":"Clear","PLACE_BET_BUTTON_UNDO":"Undo","PLACE_BET_TITLE":"PLACE\\nBET","PaytableSectionBlackjackContent1":"BlackJack is a combination of 2 cards, that are Ace and any other 10-value card. BlackJack always beats any other hand with a value of 21.","PaytableSectionBlackjackContent2":"3:2","PaytableSectionBlackjackContent3":"2:1","PaytableSectionBlackjackContent4":"1:1","PaytableSectionBlackjackContent5":"1:1","PaytableSectionBlackjackContent6":"Bet refunds","PaytableSectionBlackjackTitle":"BlackJack","PaytableSectionCombineContent1":"BlackJack","PaytableSectionCombineContent2":"Insurance","PaytableSectionCombineContent3":"Win","PaytableSectionCombineContent4":"Even","PaytableSectionCombineContent5":"Push","PaytableSectionCombineTitle":"Combinations payout values","PaytableSectionDoubleContent1":"Player can double down after the first 2 cards are dealt. Player will get only 1 extra card this way and the bet per hand will be doubled too.","PaytableSectionDoubleContent2":"Malfunction voids all pays and plays.","PaytableSectionDoubleTitle":"Double","PaytableSectionEvenContent1":"If the player\'s hand is BlackJack and the dealer\'s visible card is an Ace, player can take even money.","PaytableSectionEvenTitle":"Even","PaytableSectionGeneralContent1":"BlackJack game is played with 3 boxes and 6 standard decks of 52 cards. The goal of each game round is to create a hand with a value that is equal or closer to 21 and better than dealer\'s hand without going over.","PaytableSectionGeneralContent2":"Number cards cont as face value, Kings, Queens, Jacks count as 10, Aces count as either 1 or 11.","PaytableSectionGeneralContent3":"The dealer must stand on a Hard 17 and hit on a Soft 17. A Soft hand is a hand with an Ace that can be counted as either 1 or 11 without busting. A Hard hand is a hand without an Ace, or a hand with an Ace that can only have a value of 1. The game round is finished when the dealer finished its hand.","PaytableSectionGeneralTitle":"BlackJack general rules","PaytableSectionInsuranceContent1":"If the dealer\'s first card is an Ace, player can buy insurance, that costs 1/2 of the initial bet per hand. Insuranse hit if the dealer gets BlackJack.","PaytableSectionInsuranceTitle":"Insurance","PaytableSectionSplitContent1":"If the first player\'s cards have the same face value, them can be splitted into separate hands with doubling the initial bet. Only one split per hand is allowed. In case of splitting Aces, player will recieve only 1 card per new hand.","PaytableSectionSplitTitle":"Splitting","PopupRestoreMessage":"Incomplete game restored!","STATUS_LINE_BLACKJACK":"Blackjack","STATUS_LINE_BUST":"Bust","STATUS_LINE_DRAW":"Push","STATUS_LINE_EVENMONEY":"Even Money?","STATUS_LINE_INSURANCE":"Insurance?","STATUS_LINE_LOST":"No win","STATUS_LINE_WIN":"Win"}');

                function be(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function we(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? be(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : be(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                var ye = we(we({}, ve), me);
                const fe = [...[{
                    url: "assets/audio/background.mp3",
                    name: "sound_background",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "background",
                            volume: 1,
                            loop: !0
                        }
                    }
                }, {
                    url: "assets/audio/card_deal.mp3",
                    name: "sound_card_deal",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: 1,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/click_normal.mp3",
                    name: "clickNormal",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: 1,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/discard_cards.mp3",
                    name: "sound_discard_cards",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: 1,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/drop_chips.mp3",
                    name: "sound_drop_chips",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: 1,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/put_chips.mp3",
                    name: "sound_put_chips",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: 1,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/show_card.mp3",
                    name: "sound_show_card",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: 1,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/split_cards.mp3",
                    name: "sound_split_cards",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: 1,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/blackjack.mp3",
                    name: "sound_blackjack",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: 1,
                            loop: !1
                        }
                    }
                }], {
                    name: "AvenirLight",
                    url: "assets/fonts/AvenirNextCyr-Light.woff",
                    metadata: {}
                }, {
                    name: "AvenirMedium",
                    url: "assets/fonts/AvenirNextCyr-Medium.woff",
                    metadata: {}
                }, {
                    name: "AvenirBold",
                    url: "assets/fonts/AvenirNextCyr-Demi.woff",
                    metadata: {}
                }, {
                    name: "PlayBold",
                    url: "assets/fonts/Play-Bold.ttf",
                    metadata: {}
                }, {
                    name: "PlayRegular",
                    url: "assets/fonts/Play-Regular.ttf",
                    metadata: {}
                }, {
                    name: "PT Sans Regular",
                    url: "assets/fonts/PT_Sans-Web-Regular.ttf",
                    metadata: {}
                }, {
                    name: "PT Sans Narrow Bold",
                    url: "assets/fonts/PT_Sans-Narrow-Web-Bold.ttf",
                    metadata: {}
                }, {
                    url: "assets/desktop_actions/desktop_actions.json",
                    name: "desktop_actions",
                    metadata: {
                        platform: ["desktop"]
                    }
                }, {
                    url: "assets/mobile_actions/mobile_actions.json",
                    name: "mobile_actions",
                    metadata: {
                        platform: ["tablet", "phone"]
                    }
                }, {
                    url: "assets/icon_fullscreen_collapse.png",
                    name: "icon_fullscreen_collapse",
                    metadata: {
                        platform: ["desktop"]
                    }
                }, {
                    url: "assets/dmi_close_n.png",
                    name: "dmi_close_n",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/dmi_close_h.png",
                    name: "dmi_close_h",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/blackjack.png",
                    name: "blackjack",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/blackjack_checking.png",
                    name: "blackjack_check",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/arrowLeft.png",
                    name: "arrowLeft",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/arrowRight.png",
                    name: "arrowRight",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/companyLogo.png",
                    name: "company_logo",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/background_landscape.jpg",
                    name: "background_landscape",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/background_portrait.jpg",
                    name: "background_portrait",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/desktop/controls/background.png",
                    name: "controls_background",
                    metadata: {
                        platform: ["desktop"]
                    }
                }, {
                    url: "assets/desktop/active_arrow.png",
                    name: "active_arrow",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/desktop/active_hand.png",
                    name: "active_hand",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/desktop/chips/1.png",
                    name: "chip_1",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/desktop/chips/2.png",
                    name: "chip_2",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/desktop/chips/3.png",
                    name: "chip_3",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/desktop/chips/4.png",
                    name: "chip_4",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/desktop/chips/5.png",
                    name: "chip_5",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/desktop/chips/6.png",
                    name: "chip_6",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/desktop/chips/6.png",
                    name: "chip_7",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/desktop/chips/6.png",
                    name: "chip_8",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/desktop/chips/6.png",
                    name: "chip_9",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/desktop/small_chips/1.png",
                    name: "small_chip_1",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/desktop/small_chips/2.png",
                    name: "small_chip_2",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/desktop/small_chips/3.png",
                    name: "small_chip_3",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/desktop/small_chips/4.png",
                    name: "small_chip_4",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/desktop/small_chips/5.png",
                    name: "small_chip_5",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/desktop/small_chips/6.png",
                    name: "small_chip_6",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/desktop/small_chips/6.png",
                    name: "small_chip_7",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/desktop/small_chips/6.png",
                    name: "small_chip_8",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/desktop/small_chips/6.png",
                    name: "small_chip_9",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/desktop/icon_undo.png",
                    name: "icon_undo_field",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/desktop/icon_clear.png",
                    name: "icon_clear_field",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/desktop/value_backdrop.png",
                    name: "value_backdrop",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/cards/cards.json",
                    name: "cards",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/menu/desktop/menu.json",
                    name: "menu_desktop",
                    metadata: {
                        platform: ["desktop"]
                    }
                }, {
                    url: "assets/menu/mobile/menu.json",
                    name: "menu_mobile",
                    metadata: {
                        platform: ["phone", "tablet"]
                    }
                }, {
                    url: "assets/desktop/history/history_C.png",
                    name: "history_C",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/desktop/history/history_D.png",
                    name: "history_D",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/desktop/history/history_H.png",
                    name: "history_H",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/desktop/history/history_S.png",
                    name: "history_S",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/desktop/history/history_21.png",
                    name: "history_21",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }];
                class Ce extends Y.W2 {
                    constructor() {
                        super(), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "backgroundPortraitTexture", void 0), (0, n.Z)(this, "backgroundLandscapeTexture", void 0), (0, n.Z)(this, "companyLogo", void 0), (0, n.Z)(this, "rules0", void 0), (0, n.Z)(this, "rules1", void 0), (0, n.Z)(this, "rules2", void 0), this.backgroundPortraitTexture = It.loader.getAsset("background_portrait"), this.backgroundLandscapeTexture = It.loader.getAsset("background_landscape"), this.background = new J.j, this.companyLogo = new J.j(It.loader.getAsset("company_logo")), this.rules0 = new m.xv(It.i18n.t("BackgroundRules0").toUpperCase(), {
                            fill: "rgba(242, 243, 247, 0.302)",
                            fontSize: 62,
                            fontFamily: "PlayBold"
                        }), this.rules1 = new m.xv(It.i18n.t("BackgroundRules1").toUpperCase(), {
                            fill: "rgba(242, 243, 247, 0.302)",
                            fontSize: 28,
                            fontFamily: "PlayBold"
                        }), this.rules2 = new m.xv(It.i18n.t("BackgroundRules2").toUpperCase(), {
                            fill: "rgba(242, 243, 247, 0.302)",
                            fontSize: 62,
                            fontFamily: "PlayBold"
                        }), this.addChild(this.background), this.addChild(this.companyLogo), this.addChild(this.rules0), this.addChild(this.rules1), this.addChild(this.rules2), this.resize(), this.hideRules()
                    }
                    resize() {
                        It.device.desktop || It.device.landscape ? (this.background.texture = this.backgroundLandscapeTexture, this.background.position.set(0, 0), this.background.width = It.viewport.width, this.companyLogo.position.set(1820, 960), this.rules0.scale.set(1), this.rules0.position.set((It.viewport.width - this.rules0.width) / 2, 255), this.rules1.scale.set(1), this.rules1.position.set((It.viewport.width - this.rules1.width) / 2, this.rules0.y + this.rules0.height), this.rules2.scale.set(1), this.rules2.position.set((It.viewport.width - this.rules2.width) / 2, this.rules1.y + this.rules1.height)) : (this.background.texture = this.backgroundPortraitTexture, this.background.position.set(-It.viewport.paddingX, 0), this.background.width = 2 * It.viewport.paddingX + It.viewport.width, this.companyLogo.position.set(1e3, 1650), this.rules0.scale.set(.65), this.rules0.position.set((It.viewport.width - this.rules0.width) / 2, 320), this.rules1.scale.set(.65), this.rules1.position.set((It.viewport.width - this.rules1.width) / 2, this.rules0.y + this.rules0.height), this.rules2.scale.set(.65), this.rules2.position.set((It.viewport.width - this.rules2.width) / 2, this.rules1.y + this.rules1.height))
                    }
                    showRules() {
                        this.rules0.renderable = !0, this.rules1.renderable = !0, this.rules2.renderable = !0
                    }
                    hideRules() {
                        this.rules0.renderable = !1, this.rules1.renderable = !1, this.rules2.renderable = !1
                    }
                }
                class ke extends Y.W2 {
                    constructor(t) {
                        super(), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "min", void 0), (0, n.Z)(this, "max", void 0), this.game = t;
                        var e = this.game.getBetLimits();
                        this.title = new m.xv(It.i18n.t("LimitsTitle").toUpperCase(), {
                            fill: "rgba(242, 243, 247, 0.302)",
                            fontSize: 20,
                            fontFamily: "PlayBold"
                        }), this.title.anchor.x = .5, this.min = new m.xv(It.i18n.t("LimitsMin", It.helpers.toMoney(e[0])).toUpperCase(), {
                            fill: "rgba(242, 243, 247, 0.302)",
                            fontSize: 32,
                            fontFamily: "PlayBold"
                        }), this.min.anchor.x = .5, this.max = new m.xv(It.i18n.t("LimitsMax", It.helpers.toMoney(e[1])).toUpperCase(), {
                            fill: "rgba(242, 243, 247, 0.302)",
                            fontSize: 32,
                            fontFamily: "PlayBold"
                        }), this.max.anchor.x = .5, this.addChild(this.title), this.addChild(this.min), this.addChild(this.max), this.resize()
                    }
                    resize() {
                        It.device.desktop || It.device.landscape ? (this.scale.set(1), this.position.set(500, 42), this.min.position.set(0, this.title.y + this.title.height + 10), this.max.position.set(0, this.min.y + this.min.height + 5)) : (this.scale.set(1), this.position.set(It.viewport.width / 2, 480), this.min.position.set(0, this.title.y + this.title.height + 10), this.max.position.set(0, this.min.y + this.min.height + 5))
                    }
                }
                class xe extends J.j {
                    constructor(t) {
                        super(It.loader.getAsset(t, "cards"))
                    }
                }
                class Ae extends Y.W2 {
                    constructor(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        super(), (0, n.Z)(this, "chipValue", void 0), (0, n.Z)(this, "chipBackground", void 0), (0, n.Z)(this, "prefix", ""), this.value = t, this.isSmall = e, this.interactive = !0, this.buttonMode = !0, this.prefix = e ? "small_chip" : "chip", this.chipBackground = new J.j(It.loader.getAsset("".concat(this.prefix, "_").concat(t.toString()[0]))), this.chipValue = new m.xv(It.helpers.toMoney(t), {
                            fill: "white",
                            fontSize: e ? 16 : 20,
                            fontFamily: "PlayBold"
                        }), this.chipValue.anchor.set(.5), this.chipValue.position.set(this.chipBackground.width / 2, this.chipBackground.height / 2), this.addChild(this.chipBackground), this.addChild(this.chipValue)
                    }
                    getValue() {
                        return this.value
                    }
                    change(t) {
                        this.value = t, this.chipValue.text = It.helpers.toMoney(t), this.chipBackground.texture = It.loader.getAsset("".concat(this.prefix, "_").concat(t.toString()[0]))
                    }
                }
                class Se extends(Ut(Y.W2)) {
                    constructor(t, e) {
                        super(), (0, n.Z)(this, "_swipeDistanceX", 190), (0, n.Z)(this, "_visibleChipsCount", 4), (0, n.Z)(this, "stroke", void 0), (0, n.Z)(this, "strokeIndex", 0), (0, n.Z)(this, "allChips", []), (0, n.Z)(this, "arrowLeft", void 0), (0, n.Z)(this, "arrowRight", void 0), (0, n.Z)(this, "carousel", void 0), (0, n.Z)(this, "carouselBoundary", void 0), (0, n.Z)(this, "maxWidth", 0), (0, n.Z)(this, "minWidth", 0), (0, n.Z)(this, "isMove", !1), this.bets = t, this.defaultBet = e;
                        var i = new u.TC;
                        if (i.lineStyle(3, 16777215, .75), i.drawCircle(0, 0, 85), this.stroke = new J.j(i.generateCanvasTexture()), this.stroke.anchor.set(.5), this.stroke.position.set(72), this.arrowLeft = new J.j(this.game.loader.getAsset("arrowLeft")), this.arrowLeft.interactive = !0, this.arrowLeft.buttonMode = !0, this.arrowLeft.hitArea = new G.Ae(-10, -30, 55, 100), this.arrowLeft.anchor.set(.5), this.arrowLeft.position.set(10, 73), this.game.interaction.click(this.arrowLeft, this.prev.bind(this)), this.game.device.desktop && (this.arrowLeft.on("pointerover", this.handleOverIcon, this), this.arrowLeft.on("pointerout", this.handleOutIcon, this)), this.arrowRight = new J.j(this.game.loader.getAsset("arrowRight")), this.arrowRight.interactive = !0, this.arrowRight.buttonMode = !0, this.arrowRight.hitArea = new G.Ae(-40, -30, 60, 100), this.arrowRight.anchor.set(.5), this.arrowRight.position.set(1030, 73), this.game.interaction.click(this.arrowRight, this.next.bind(this)), this.game.device.desktop && (this.arrowRight.on("pointerover", this.handleOverIcon, this), this.arrowRight.on("pointerout", this.handleOutIcon, this)), this.carousel = new Y.W2, this.carousel.addChild(this.stroke), this.carousel.addChild(...t.map(((t, e) => {
                                var i = new Ae(t);
                                return this.allChips.push(i), i.position.set(e * this._swipeDistanceX, 0), this.game.interaction.click(i, (() => {
                                    this.game.sound.clickNormal(), this.emit("change", t), this.strokeIndex = e, A.to(this.stroke, .3, {
                                        pixi: {
                                            x: i.x + i.width / 2,
                                            y: i.height / 2
                                        }
                                    })
                                })), i
                            }))), this.minWidth = 0, this.maxWidth = this._swipeDistanceX * t.length - 950, this.carouselBoundary = new Y.W2, this.carouselBoundary.position.set(70, 0), tt.isWebGLSupported()) {
                            var s = new J.j(function(t, e) {
                                var i = document.createElement("canvas"),
                                    s = i.getContext("2d"),
                                    a = s.createLinearGradient(0, 0, t, 0);
                                return i.width = t, i.height = e, a.addColorStop(0, "rgba(255, 255, 255, 0.0)"), a.addColorStop(.03, "rgba(255, 255, 255, 1.0)"), a.addColorStop(.97, "rgba(255, 255, 255, 1.0)"), a.addColorStop(1, "rgba(255, 255, 255, 0.0)"), s.fillStyle = a, s.fillRect(0, 0, t, e), new d.xE(d.VL.from(i))
                            }(990, this.carousel.height + 50));
                            s.position.set(-45, -50), this.carouselBoundary.mask = s, this.carouselBoundary.addChild(s)
                        } else {
                            var a = new u.TC;
                            a.beginFill(16777215), a.lineStyle(1, 16777215), a.drawRect(-20, -20, 944, 184), a.endFill(), this.carouselBoundary.mask = a, this.carouselBoundary.addChild(a)
                        }
                        this.carouselBoundary.addChild(this.carousel), this.addChild(this.arrowLeft), this.addChild(this.arrowRight), this.addChild(this.carouselBoundary), this.setDefaultChip(this.defaultBet), this.resize()
                    }
                    hide() {
                        this.visible = !1
                    }
                    finish() {
                        this.visible = !0
                    }
                    setDefaultChip(t) {
                        var e = this.bets.indexOf(t),
                            i = this.allChips[e];
                        this.emit("change", t), this.strokeIndex = e, this.stroke.position.set(i.x + i.width / 2, i.height / 2);
                        var s = i.position.x / this._swipeDistanceX;
                        s > this._visibleChipsCount && (this.carousel.x -= (s - this._visibleChipsCount) * this._swipeDistanceX)
                    }
                    handleOverIcon(t) {
                        t.currentTarget.scale.set(1.1)
                    }
                    handleOutIcon(t) {
                        t.currentTarget.scale.set(1)
                    }
                    next() {
                        if (!this.isMove && (this.carousel.x > -this.maxWidth && this.swipeTo(this.carousel.x - this._swipeDistanceX), this.strokeIndex < this.allChips.length - 1)) {
                            this.game.sound.clickNormal();
                            var t = this.allChips[++this.strokeIndex];
                            this.stroke.position.set(t.x + t.width / 2, t.height / 2), this.emit("change", t.getValue())
                        }
                    }
                    prev() {
                        if (!this.isMove && (this.carousel.x < this.minWidth && this.swipeTo(this.carousel.x + this._swipeDistanceX), this.strokeIndex > 0)) {
                            this.game.sound.clickNormal();
                            var t = this.allChips[--this.strokeIndex];
                            this.stroke.position.set(t.x + t.width / 2, t.height / 2), this.emit("change", t.getValue())
                        }
                    }
                    swipeTo(t) {
                        this.isMove = !0, A.to(this.carousel, .3, {
                            pixi: {
                                x: t
                            },
                            onComplete: () => {
                                this.isMove = !1
                            }
                        })
                    }
                    resize() {
                        this.game.device.desktop || this.game.device.landscape ? this.position.set((this.game.viewport.width - this.width) / 2, 200) : this.position.set((this.game.viewport.width - this.width) / 2, 320)
                    }
                }
                const Te = {
                        view: document.querySelector("canvas"),
                        width: 1920,
                        height: 1080,
                        autoResize: !0,
                        resolution: window.devicePixelRatio || 1
                    },
                    Pe = 55,
                    Ee = 260;
                class Be extends(Ut(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "value", void 0), (0, n.Z)(this, "valueMarginTop", 5), this.title = new m.xv("", {
                            fill: 16777215,
                            fontSize: 18,
                            fontFamily: "AvenirMedium"
                        }), this.title.anchor.x = .5, this.value = new m.xv("", {
                            fill: 16777215,
                            fontSize: 30,
                            fontFamily: "AvenirMedium"
                        }), this.value.anchor.x = .5, this.value.position.set(0, this.title.height + this.valueMarginTop), this.addChild(this.title), this.addChild(this.value)
                    }
                    setTitle(t) {
                        this.title.text = t.toUpperCase()
                    }
                    setValue(t) {
                        this.value.text = t
                    }
                    show() {
                        this.renderable = !0
                    }
                    hide() {
                        this.renderable = !1
                    }
                }
                class _e extends m.xv {
                    constructor() {
                        super("", {
                            fill: 16777215,
                            fontFamily: "PlayBold"
                        })
                    }
                    show(t) {
                        this.text = t.toUpperCase()
                    }
                    hide() {
                        this.text = ""
                    }
                }
                class Re extends Y.W2 {
                    constructor(t) {
                        super(), (0, n.Z)(this, "buttonIcon", void 0), (0, n.Z)(this, "buttonTitle", void 0), this.interactive = !0, this.buttonMode = !0, this.buttonIcon = new J.j(t), this.addChild(this.buttonIcon)
                    }
                    setTitle(t) {
                        this.buttonTitle || (this.buttonTitle = new m.xv("", {
                            fill: 16777215,
                            fontSize: 30,
                            fontFamily: "PlayBold"
                        }), this.buttonTitle.anchor.y = .5, this.buttonTitle.position.set(this.buttonIcon.width + 15, this.buttonIcon.height / 2), this.addChild(this.buttonTitle)), this.buttonTitle.text = t.toUpperCase()
                    }
                    hide() {
                        this.renderable = !1, this.interactive = !1, this.buttonMode = !1, this.scale.set(1)
                    }
                    show() {
                        this.renderable = !0, this.interactive = !0, this.buttonMode = !0
                    }
                }
                class Le extends(Ut(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "buttons", void 0), (0, n.Z)(this, "buttonDeal", void 0), (0, n.Z)(this, "buttonStand", void 0), (0, n.Z)(this, "buttonHit", void 0), (0, n.Z)(this, "buttonDouble", void 0), (0, n.Z)(this, "buttonSplit", void 0), (0, n.Z)(this, "buttonNewBet", void 0), (0, n.Z)(this, "buttonRebet", void 0), (0, n.Z)(this, "buttonInsurance", void 0), (0, n.Z)(this, "buttonNoInsurance", void 0), (0, n.Z)(this, "buttonEvenmoney", void 0), (0, n.Z)(this, "buttonNoEvenmoney", void 0), (0, n.Z)(this, "hint", void 0), (0, n.Z)(this, "fieldHands", void 0), (0, n.Z)(this, "fieldTotalBet", void 0), (0, n.Z)(this, "fieldWin", void 0), (0, n.Z)(this, "fieldBalance", void 0), (0, n.Z)(this, "savedActions", []), this.background = new J.j(this.game.loader.getAsset("controls_background")), this.background.position.set((Te.width - this.background.width) / 2, Te.height - this.background.height), this.hint = new _e, this.hint.anchor.set(.5), this.hint.position.set(this.background.x + this.background.width / 2, this.background.y - this.hint.height), this.buttons = new Y.W2, this.buttons.position.set(0, this.background.y), this.buttonDeal = new Re(this.game.loader.getAsset("icon_deal", "desktop_actions")), this.buttonDeal.setTitle(this.game.i18n.t("CONTROLS_BUTTON_DEAL")), this.buttonDeal.name = "deal", this.buttonDeal.position.set(0, 32), this.buttonDeal.hitArea = new G.Ae(0, 0, this.buttonDeal.width, 50), this.game.interaction.click(this.buttonDeal, this.handleClick("deal")), this.buttonDeal.on("pointerover", this.handleOver(this.game.i18n.t("CONTROLS_DEAL")), this), this.buttonDeal.on("pointerout", this.handleOut, this), this.buttonDouble = new Re(this.game.loader.getAsset("icon_double", "desktop_actions")), this.buttonDouble.name = "double", this.buttonDouble.position.set(0, 23), this.game.interaction.click(this.buttonDouble, this.handleClick("double")), this.buttonDouble.on("pointerover", this.handleOver(this.game.i18n.t("CONTROLS_DOUBLE")), this), this.buttonDouble.on("pointerout", this.handleOut, this), this.buttonHit = new Re(this.game.loader.getAsset("icon_hit", "desktop_actions")), this.buttonHit.name = "hit", this.buttonHit.position.set(0, 23), this.game.interaction.click(this.buttonHit, this.handleClick("hit")), this.buttonHit.on("pointerover", this.handleOver(this.game.i18n.t("CONTROLS_HIT")), this), this.buttonHit.on("pointerout", this.handleOut, this), this.buttonStand = new Re(this.game.loader.getAsset("icon_stand", "desktop_actions")), this.buttonStand.name = "stand", this.buttonStand.position.set(0, 23), this.game.interaction.click(this.buttonStand, this.handleClick("stand")), this.buttonStand.on("pointerover", this.handleOver(this.game.i18n.t("CONTROLS_STAND")), this), this.buttonStand.on("pointerout", this.handleOut, this), this.buttonSplit = new Re(this.game.loader.getAsset("icon_split", "desktop_actions")), this.buttonSplit.name = "split", this.buttonSplit.position.set(0, 23), this.game.interaction.click(this.buttonSplit, this.handleClick("split")), this.buttonSplit.on("pointerover", this.handleOver(this.game.i18n.t("CONTROLS_SPLIT")), this), this.buttonSplit.on("pointerout", this.handleOut, this), this.buttonNewBet = new Re(this.game.loader.getAsset("icon_hit", "desktop_actions")), this.buttonNewBet.name = "newBet", this.buttonNewBet.position.set(0, 23), this.game.interaction.click(this.buttonNewBet, this.handleClick("newBet")), this.buttonNewBet.on("pointerover", this.handleOver(this.game.i18n.t("CONTROLS_NEW_BET")), this), this.buttonNewBet.on("pointerout", this.handleOut, this), this.buttonRebet = new Re(this.game.loader.getAsset("icon_rebet", "desktop_actions")), this.buttonRebet.name = "rebet", this.buttonRebet.position.set(0, 23), this.game.interaction.click(this.buttonRebet, this.handleClick("rebet")), this.buttonRebet.on("pointerover", this.handleOver(this.game.i18n.t("CONTROLS_REBET")), this), this.buttonRebet.on("pointerout", this.handleOut, this), this.buttonInsurance = new Re(this.game.loader.getAsset("icon_insurance", "desktop_actions")), this.buttonInsurance.name = "insurance", this.buttonInsurance.position.set(0, 23), this.game.interaction.click(this.buttonInsurance, this.handleClick("insurance")), this.buttonInsurance.on("pointerover", this.handleOver(this.game.i18n.t("CONTROLS_YES")), this), this.buttonInsurance.on("pointerout", this.handleOut, this), this.buttonNoInsurance = new Re(this.game.loader.getAsset("icon_stand", "desktop_actions")), this.buttonNoInsurance.name = "noinsurance", this.buttonNoInsurance.position.set(0, 23), this.game.interaction.click(this.buttonNoInsurance, this.handleClick("noinsurance")), this.buttonNoInsurance.on("pointerover", this.handleOver(this.game.i18n.t("CONTROLS_NO")), this), this.buttonNoInsurance.on("pointerout", this.handleOut, this), this.buttonEvenmoney = new Re(this.game.loader.getAsset("icon_insurance", "desktop_actions")), this.buttonEvenmoney.name = "evenmoney", this.buttonEvenmoney.position.set(0, 23), this.game.interaction.click(this.buttonEvenmoney, this.handleClick("evenmoney")), this.buttonEvenmoney.on("pointerover", this.handleOver(this.game.i18n.t("CONTROLS_YES")), this), this.buttonEvenmoney.on("pointerout", this.handleOut, this), this.buttonNoEvenmoney = new Re(this.game.loader.getAsset("icon_stand", "desktop_actions")), this.buttonNoEvenmoney.name = "noevenmoney", this.buttonNoEvenmoney.position.set(0, 23), this.game.interaction.click(this.buttonNoEvenmoney, this.handleClick("noevenmoney")), this.buttonNoEvenmoney.on("pointerover", this.handleOver(this.game.i18n.t("CONTROLS_NO")), this), this.buttonNoEvenmoney.on("pointerout", this.handleOut, this), this.fieldHands = new Be, this.fieldHands.position.set(this.background.x + 100, this.background.y + 30), this.fieldHands.setTitle(this.game.i18n.t("CONTROLS_HANDS_TITLE")), this.fieldTotalBet = new Be, this.fieldTotalBet.position.set(this.background.x + 350, this.background.y + 30), this.fieldTotalBet.setTitle(this.game.i18n.t("CONTROLS_TOTAL_BET_TITLE", this.game.i18n.currency({
                            withBrace: !0
                        }))), this.fieldWin = new Be, this.fieldWin.position.set(this.background.x + 1130, this.background.y + 30), this.fieldWin.setTitle(this.game.i18n.t("CONTROLS_WIN_TITLE", this.game.i18n.currency({
                            withBrace: !0
                        }))), this.fieldBalance = new Be, this.fieldBalance.position.set(this.background.x + 1330, this.background.y + 30), this.fieldBalance.setTitle(this.game.i18n.t("CONTROLS_BALANCE_TITLE", this.game.i18n.currency({
                            withBrace: !0
                        }))), this.buttons.addChild(this.buttonDeal), this.buttons.addChild(this.buttonDouble), this.buttons.addChild(this.buttonStand), this.buttons.addChild(this.buttonHit), this.buttons.addChild(this.buttonSplit), this.buttons.addChild(this.buttonNewBet), this.buttons.addChild(this.buttonRebet), this.buttons.addChild(this.buttonInsurance), this.buttons.addChild(this.buttonNoInsurance), this.buttons.addChild(this.buttonEvenmoney), this.buttons.addChild(this.buttonNoEvenmoney), this.addChild(this.hint), this.addChild(this.background), this.addChild(this.buttons), this.addChild(this.fieldHands), this.addChild(this.fieldTotalBet), this.addChild(this.fieldWin), this.game.config.get("balanceHide", !1) || this.addChild(this.fieldBalance), this.resize()
                    }
                    enable() {
                        this.interactive = !0, this.interactiveChildren = !0
                    }
                    disable() {
                        this.interactive = !1, this.interactiveChildren = !1
                    }
                    restore() {
                        this.setActions(this.savedActions)
                    }
                    setActions(t) {
                        this.savedActions = t;
                        var e = 0;
                        for (var i of this.buttons.children) t.includes(i.name) ? (i.show(), i.position.x = 120 * e++) : i.hide();
                        this.buttons.x = this.background.x + (this.background.width - this.buttons.width) / 2
                    }
                    setHands(t) {
                        t > 0 ? this.fieldHands.setValue(this.game.i18n.t("CONTROLS_HANDS_VALUE", t)) : this.fieldHands.setValue("")
                    }
                    setBalance(t) {
                        this.fieldBalance.setValue(this.game.i18n.t("CONTROLS_BALANCE_VALUE", this.game.helpers.toMoney(t)))
                    }
                    setTotalBet(t) {
                        this.fieldTotalBet.setValue(this.game.i18n.t("CONTROLS_TOTAL_BET_VALUE", this.game.helpers.toMoney(t)))
                    }
                    setTotalWin(t) {
                        t > 0 ? this.fieldWin.setValue(this.game.i18n.t("CONTROLS_WIN_VALUE", this.game.helpers.toMoney(t))) : this.fieldWin.setValue("")
                    }
                    hideButtons() {
                        this.buttons.children.forEach((t => t.hide()))
                    }
                    handleClick(t) {
                        return () => {
                            this.game.sound.clickNormal(), this.hint.hide(), this.emit(t)
                        }
                    }
                    handleOver(t) {
                        return e => {
                            e.currentTarget.scale.set(1.05), this.hint.show(t)
                        }
                    }
                    handleOut(t) {
                        t.currentTarget.scale.set(1), this.hint.hide()
                    }
                    resize() {}
                }
                class Oe {
                    static getRandomArbitrary(t, e) {
                        return Math.round(Math.random() * (e - t) + t)
                    }
                    static generateTexture(t, e) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                            a = new u.TC;
                        a.beginFill(i, s), a.drawRect(0, 0, t, e), a.endFill();
                        var n = a.generateCanvasTexture();
                        return a.destroy(!0), n
                    }
                    static delay(t) {
                        return new Promise((e => setTimeout(e, t)))
                    }
                }

                function Ze(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }
                class De extends Y.W2 {
                    constructor(t, e) {
                        super(), (0, n.Z)(this, "savedTitle", void 0), (0, n.Z)(this, "textTitle", void 0), this.savedTitle = t.toUpperCase(), this.textTitle = this.addChild(new m.xv(this.savedTitle, function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? Ze(Object(i), !0).forEach((function(e) {
                                    (0, n.Z)(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Ze(Object(i)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                                }))
                            }
                            return t
                        }({
                            fill: 16777215,
                            fontSize: 22,
                            fontFamily: "AvenirMedium",
                            align: "center"
                        }, e))), this.textTitle.scale.set(2), this.textTitle.anchor.set(.5, 0), this.addChild(this.textTitle)
                    }
                    setValue(t) {
                        this.textTitle.text = "".concat(this.savedTitle).concat(t)
                    }
                    changeColor(t) {
                        this.textTitle.style.fill = t
                    }
                }
                class Me extends(Ut(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "backgroundTexturePortrait", void 0), (0, n.Z)(this, "backgroundTextureLandscape", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "fieldBet", void 0), (0, n.Z)(this, "fieldWin", void 0), (0, n.Z)(this, "fieldBalance", void 0), this.backgroundTextureLandscape = Oe.generateTexture(1920, 120, 0, .75), this.backgroundTexturePortrait = Oe.generateTexture(1080, 180, 0, .75), this.background = this.addChild(new J.j(this.backgroundTextureLandscape)), this.fieldBet = this.addChild(new De(this.game.i18n.t("StatusBarMobileBet", this.game.i18n.currency({
                            withBrace: !0
                        })))), this.fieldBet.position.set(0, this.fieldBet.height / 2), this.fieldWin = this.addChild(new De(this.game.i18n.t("StatusBarMobileWin", this.game.i18n.currency({
                            withBrace: !0
                        })))), this.fieldWin.position.set(0, this.fieldWin.height / 2), this.fieldBalance = new De(this.game.i18n.t("StatusBarMobileBalance", this.game.i18n.currency({
                            withBrace: !0
                        }))), this.fieldBalance.position.set(0, this.fieldBalance.height / 2), this.game.config.get("balanceHide", !1) || this.addChild(this.fieldBalance)
                    }
                    setBet(t) {
                        this.fieldBet.setValue(t)
                    }
                    setWin(t) {
                        this.fieldWin.setValue(t)
                    }
                    setBalance(t) {
                        this.fieldBalance.setValue(t)
                    }
                    resize() {
                        this.game.device.desktop || this.game.device.landscape ? (this.background.texture = this.backgroundTextureLandscape, this.fieldBet.position.set(280, 0), this.fieldBet.scale.set(1.3), this.fieldWin.position.set(960, 0), this.fieldWin.scale.set(1.3), this.fieldBalance.position.set(1640, 0), this.fieldBalance.scale.set(1.3), this.fieldBalance.changeColor(16777215), this.position.set(0, 950)) : (this.background.texture = this.backgroundTexturePortrait, this.fieldBet.position.set(270, 0), this.fieldBet.scale.set(1), this.fieldWin.position.set(820, 0), this.fieldWin.scale.set(1), this.fieldBalance.position.set(540, 100), this.fieldBalance.scale.set(1), this.fieldBalance.changeColor(10066329), this.position.set(0, 1720))
                    }
                }
                class Ie extends(Ut(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "buttons", void 0), (0, n.Z)(this, "buttonDeal", void 0), (0, n.Z)(this, "buttonHit", void 0), (0, n.Z)(this, "buttonStand", void 0), (0, n.Z)(this, "buttonDouble", void 0), (0, n.Z)(this, "buttonNewBet", void 0), (0, n.Z)(this, "buttonRebet", void 0), (0, n.Z)(this, "buttonSplit", void 0), (0, n.Z)(this, "buttonInsurance", void 0), (0, n.Z)(this, "buttonNoInsurance", void 0), (0, n.Z)(this, "buttonEvenmoney", void 0), (0, n.Z)(this, "buttonNoEvenmoney", void 0), (0, n.Z)(this, "statusBar", void 0), (0, n.Z)(this, "savedActions", []), this.buttons = new Y.W2, this.buttonDeal = new J.j(this.game.loader.getAsset("icon_deal", "mobile_actions")), this.buttonDeal.width = 220, this.buttonDeal.height = 220, this.buttonDeal.name = "deal", this.buttonDeal.interactive = !0, this.game.interaction.click(this.buttonDeal, this.handleClick("deal")), this.buttonHit = new J.j(this.game.loader.getAsset("icon_hit", "mobile_actions")), this.buttonHit.name = "hit", this.buttonHit.interactive = !0, this.game.interaction.click(this.buttonHit, this.handleClick("hit")), this.buttonStand = new J.j(this.game.loader.getAsset("icon_stand", "mobile_actions")), this.buttonStand.name = "stand", this.buttonStand.interactive = !0, this.game.interaction.click(this.buttonStand, this.handleClick("stand")), this.buttonDouble = new J.j(this.game.loader.getAsset("icon_double", "mobile_actions")), this.buttonDouble.name = "double", this.buttonDouble.interactive = !0, this.game.interaction.click(this.buttonDouble, this.handleClick("double")), this.buttonSplit = new J.j(this.game.loader.getAsset("icon_split", "mobile_actions")), this.buttonSplit.name = "split", this.buttonSplit.interactive = !0, this.game.interaction.click(this.buttonSplit, this.handleClick("split")), this.buttonNewBet = new J.j(this.game.loader.getAsset("icon_hit", "mobile_actions")), this.buttonNewBet.name = "newBet", this.buttonNewBet.interactive = !0, this.game.interaction.click(this.buttonNewBet, this.handleClick("newBet")), this.buttonRebet = new J.j(this.game.loader.getAsset("icon_rebet", "mobile_actions")), this.buttonRebet.name = "rebet", this.buttonRebet.interactive = !0, this.game.interaction.click(this.buttonRebet, this.handleClick("rebet")), this.buttonInsurance = new J.j(this.game.loader.getAsset("icon_insurance", "mobile_actions")), this.buttonInsurance.name = "insurance", this.buttonInsurance.interactive = !0, this.game.interaction.click(this.buttonInsurance, this.handleClick("insurance")), this.buttonNoInsurance = new J.j(this.game.loader.getAsset("icon_stand", "mobile_actions")), this.buttonNoInsurance.name = "noinsurance", this.buttonNoInsurance.interactive = !0, this.game.interaction.click(this.buttonNoInsurance, this.handleClick("noinsurance")), this.buttonEvenmoney = new J.j(this.game.loader.getAsset("icon_insurance", "mobile_actions")), this.buttonEvenmoney.name = "evenmoney", this.buttonEvenmoney.interactive = !0, this.game.interaction.click(this.buttonEvenmoney, this.handleClick("evenmoney")), this.buttonNoEvenmoney = new J.j(this.game.loader.getAsset("icon_stand", "mobile_actions")), this.buttonNoEvenmoney.name = "noevenmoney", this.buttonNoEvenmoney.interactive = !0, this.game.interaction.click(this.buttonNoEvenmoney, this.handleClick("noevenmoney")), this.statusBar = new Me, this.buttons.addChild(this.buttonDeal), this.buttons.addChild(this.buttonDouble), this.buttons.addChild(this.buttonStand), this.buttons.addChild(this.buttonHit), this.buttons.addChild(this.buttonSplit), this.buttons.addChild(this.buttonNewBet), this.buttons.addChild(this.buttonRebet), this.buttons.addChild(this.buttonInsurance), this.buttons.addChild(this.buttonNoInsurance), this.buttons.addChild(this.buttonEvenmoney), this.buttons.addChild(this.buttonNoEvenmoney), this.addChild(this.buttons), this.addChild(this.statusBar), this.game.action.on("hand:change", this.resize.bind(this)), this.resize()
                    }
                    enable() {
                        this.interactive = !0, this.interactiveChildren = !0, this.buttonDeal.visible = !0, this.resize()
                    }
                    disable() {
                        this.interactive = !1, this.interactiveChildren = !1, this.buttonDeal.visible = !1
                    }
                    restore() {
                        this.setActions(this.savedActions)
                    }
                    setActions(t) {
                        this.savedActions = t, this.buttons.children.forEach((e => {
                            e.visible = t.includes(e.name)
                        })), this.updateButtonPosition()
                    }
                    setHands(t) {}
                    setBalance(t) {
                        this.statusBar.setBalance(this.game.i18n.t("CONTROLS_BALANCE_VALUE", this.game.helpers.toMoney(t)))
                    }
                    setTotalBet(t) {
                        this.statusBar.setBet(this.game.i18n.t("CONTROLS_TOTAL_BET_VALUE", this.game.helpers.toMoney(t)))
                    }
                    setTotalWin(t) {
                        t > 0 ? this.statusBar.setWin(this.game.i18n.t("CONTROLS_WIN_VALUE", this.game.helpers.toMoney(t))) : this.statusBar.setWin("")
                    }
                    hideButtons() {
                        this.buttons.children.forEach((t => t.visible = !1))
                    }
                    resize() {
                        this.statusBar.resize(), this.updateButtonPosition()
                    }
                    updateButtonPosition() {
                        if (this.game.device.desktop || this.game.device.landscape) {
                            var t = this.game.store.get("hand:isLeft", !1),
                                e = 0;
                            this.buttons.children.forEach((t => {
                                t.visible && t.position.set(0, e++ * (t.height + 20))
                            })), t ? this.buttons.position.set(10, (this.game.viewport.height - this.buttons.height) / 2) : this.buttons.position.set(this.game.viewport.width - this.buttons.width - 10, (this.game.viewport.height - this.buttons.height) / 2)
                        } else {
                            var i = 0;
                            this.buttons.children.forEach((t => {
                                t.visible && t.position.set(220 * i++, 0)
                            })), this.buttons.position.set((this.game.viewport.width - this.buttons.width) / 2, this.game.viewport.height - this.buttons.height - 180)
                        }
                    }
                    handleClick(t) {
                        return () => {
                            this.game.sound.clickNormal(), this.emit(t)
                        }
                    }
                }

                function Ne(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }
                class je {
                    constructor() {
                        (0, n.Z)(this, "cards", void 0), (0, n.Z)(this, "value", void 0), (0, n.Z)(this, "blackjack", void 0), (0, n.Z)(this, "offerInsurance", void 0)
                    }
                    getCards() {
                        return this.cards
                    }
                    getValue() {
                        return this.value
                    }
                    isBlackjack() {
                        return this.blackjack
                    }
                    isInsurance() {
                        return this.offerInsurance
                    }
                    update(t) {
                        this.cards = t.hand, this.value = t.value, this.blackjack = t.blackJack, this.offerInsurance = t.offerInsurance
                    }
                }
                class We {
                    constructor(t) {
                        (0, n.Z)(this, "win", 0), (0, n.Z)(this, "initialBet", 0), (0, n.Z)(this, "doubleBet", 0), (0, n.Z)(this, "insuranceBet", 0), (0, n.Z)(this, "cards", []), (0, n.Z)(this, "actions", []), (0, n.Z)(this, "soft", !1), (0, n.Z)(this, "split", !1), (0, n.Z)(this, "blackJack", !1), (0, n.Z)(this, "hardValue", 0), (0, n.Z)(this, "softValue", 0), (0, n.Z)(this, "visible", !1), (0, n.Z)(this, "active", !1), (0, n.Z)(this, "outcome", ""), (0, n.Z)(this, "state", ""), this.bets = t
                    }
                    isActive() {
                        return this.active
                    }
                    isVisible() {
                        return this.visible
                    }
                    isSoft() {
                        return this.soft
                    }
                    isWin() {
                        return ("win" === this.state || "lost" === this.state) && this.win > this.initialBet && "push" !== this.outcome
                    }
                    isLost() {
                        return "lost" === this.state && this.win <= 0 && "bust" !== this.outcome
                    }
                    isBust() {
                        return "bust" === this.outcome
                    }
                    isDraw() {
                        return "push" === this.outcome
                    }
                    isInsurance() {
                        return this.actions.includes("insurance") && this.active
                    }
                    isEvenMoney() {
                        return this.actions.includes("evenmoney") && this.active
                    }
                    isSplit() {
                        return this.split
                    }
                    canDouble() {
                        return this.doubleBet > 0
                    }
                    canInsurance() {
                        return this.insuranceBet > 0
                    }
                    getCards() {
                        return this.cards
                    }
                    getActions() {
                        return this.actions
                    }
                    getHardValue() {
                        return this.hardValue
                    }
                    getSoftValue() {
                        return this.softValue
                    }
                    getWin() {
                        return this.win
                    }
                    getInitialBet() {
                        return this.initialBet
                    }
                    getInsuranceBet() {
                        return this.insuranceBet
                    }
                    getTotalBet() {
                        return this.initialBet + this.doubleBet
                    }
                    setActive(t) {
                        this.active = t
                    }
                    getStack(t) {
                        for (var e = 0, i = 0, s = []; e !== t;) {
                            for (var a = 0; a < this.bets.length; a += 1)
                                if (this.bets[a] > t - e) {
                                    i = this.bets[a - 1] || 0;
                                    break
                                }
                            if (0 === i) {
                                s.push(t - s.reduce(((t, e) => t + e), 0));
                                break
                            }
                            e += i, s.push(i)
                        }
                        return s
                    }
                    update(t) {
                        this.visible = !0, this.win = t.win, this.initialBet = t.initalBet, this.doubleBet = t.doubleBet, this.insuranceBet = t.insuranceBet, this.cards = t.cards, this.actions = t.availableActions, this.split = t.split, this.blackJack = t.blackJack, this.soft = t.soft, this.softValue = t.softValue, this.hardValue = t.hardValue, this.outcome = t.outcome, this.state = t.state
                    }
                    reset() {
                        this.visible = !1, this.active = !1, this.win = 0, this.initialBet = 0, this.doubleBet = 0, this.insuranceBet = 0, this.split = !1, this.blackJack = !1, this.soft = !1, this.hardValue = 0, this.softValue = 0, this.cards.length = 0, this.actions.length = 0, this.outcome = "", this.state = ""
                    }
                }
                var Fe, Ue, ze;
                ! function(t) {
                    t[t.Left = 1] = "Left", t[t.Right = 0] = "Right"
                }(Fe || (Fe = {})),
                function(t) {
                    t[t.Left = 2] = "Left", t[t.Center = 1] = "Center", t[t.Right = 0] = "Right"
                }(Ue || (Ue = {}));
                class He {
                    constructor(t, e, i) {
                        (0, n.Z)(this, "value", 0), (0, n.Z)(this, "history", []), (0, n.Z)(this, "activeHand", 0), (0, n.Z)(this, "active", !1), (0, n.Z)(this, "hands", void 0), (0, n.Z)(this, "betsLength", 0), this.min = t, this.max = e, this.bets = i, this.betsLength = i.length, this.hands = [new We(i), new We(i)]
                    }
                    canAdd(t) {
                        return !this.isMax() && t + this.value <= this.max
                    }
                    isMax() {
                        return this.value >= this.max
                    }
                    isMin() {
                        return this.value <= this.min
                    }
                    isActive() {
                        return this.active
                    }
                    isSplit() {
                        return this.hands.some((t => t.isSplit()))
                    }
                    isInsurance() {
                        return this.hands.some((t => t.isInsurance()))
                    }
                    isEvenMoney() {
                        return this.hands.some((t => t.isEvenMoney()))
                    }
                    getValue() {
                        return this.value
                    }
                    getActions() {
                        return this.hands[this.activeHand].getActions()
                    }
                    getActiveHand() {
                        return this.hands[this.activeHand]
                    }
                    getHand(t) {
                        return this.hands[t]
                    }
                    sitDown(t) {
                        this.value + t <= this.max && (this.history.push(t), this.value += t)
                    }
                    undo() {
                        this.value >= this.min && (this.value -= this.history.pop())
                    }
                    resetHands() {
                        this.active = !1, this.value = this.hands[0].getInitialBet(), this.hands.forEach((t => t.reset()))
                    }
                    reset() {
                        this.resetHands(), this.activeHand = 0, this.value = 0, this.history.length = 0
                    }
                    update(t) {
                        for (var [e, i] of (this.value = 0, Object.entries(t))) this.hands[e].update(i), this.value += i.initalBet + i.doubleBet + i.insuranceBet
                    }
                    updateActive(t) {
                        var {
                            isActive: e,
                            activeHand: i
                        } = t;
                        this.active = e, this.activeHand = i, this.hands.forEach(((t, s) => {
                            t.setActive(e && s === i)
                        }))
                    }
                    getStack() {
                        for (var t = 0, e = 0, i = []; t !== this.value;) {
                            for (var s = 0; s < this.betsLength; s += 1)
                                if (this.bets[s] > this.value - t) {
                                    e = this.bets[s - 1] || 0;
                                    break
                                }
                            if (0 === e) {
                                i.push(this.value - i.reduce(((t, e) => t + e), 0));
                                break
                            }
                            t += e, i.push(e)
                        }
                        return i
                    }
                }! function(t) {
                    t.Init = "init", t.Deal = "deal", t.Stand = "stand", t.Hit = "hit", t.Double = "double", t.Split = "split", t.Insurance = "insurance", t.NoInsurance = "noinsurance", t.EvenMoney = "evenmoney", t.NoEvenMoney = "noevenmoney"
                }(ze || (ze = {}));
                class Ye {
                    constructor() {
                        (0, n.Z)(this, "balance", 0), (0, n.Z)(this, "bets", []), (0, n.Z)(this, "activeBet", 0), (0, n.Z)(this, "gameover", !1), (0, n.Z)(this, "totalWin", 0), (0, n.Z)(this, "activeBox", 0), (0, n.Z)(this, "activePlayerHand", 0), (0, n.Z)(this, "restore", !1), (0, n.Z)(this, "betLimits", [-1, -1]), (0, n.Z)(this, "placeDealer", void 0), (0, n.Z)(this, "allPlaces", void 0), (0, n.Z)(this, "activePlace", void 0)
                    }
                    isEnd() {
                        return this.gameover
                    }
                    isRestore() {
                        return this.restore
                    }
                    isInsurance() {
                        return this.allPlaces.some((t => t.isInsurance() || t.isEvenMoney()))
                    }
                    canCheckBlackjack() {
                        var t = this.placeDealer.getCards()[0];
                        return !this.placeDealer.isInsurance() && (t.includes("A") || t.includes("K") || t.includes("Q") || t.includes("J") || t.includes("T"))
                    }
                    getBetLimits() {
                        return this.betLimits
                    }
                    getBets() {
                        return this.bets
                    }
                    getTotalBet() {
                        return this.allPlaces.reduce(((t, e) => t + e.getValue()), 0)
                    }
                    getTotalInitialBet() {
                        return this.allPlaces.reduce(((t, e) => t + e.getHand(Fe.Right).getInitialBet()), 0)
                    }
                    getTotalWin() {
                        return this.totalWin
                    }
                    getBalance() {
                        return this.balance
                    }
                    setActiveBet(t) {
                        this.activeBet = t
                    }
                    getActiveBet() {
                        return this.activeBet
                    }
                    getActions() {
                        return this.activePlace.getActions()
                    }
                    getActiveHand() {
                        return this.activePlace.getActiveHand()
                    }
                    getActivePlaceBet() {
                        return this.activePlace.getValue()
                    }
                    getPlace(t) {
                        return this.allPlaces[t]
                    }
                    getActivePlaceCount() {
                        return this.allPlaces.filter((t => t.getValue() > 0)).length
                    }
                    getPlaceDealer() {
                        return this.placeDealer
                    }
                    doAction(t) {
                        var e = this;
                        return (0, a.Z)((function*() {
                            var i = {};
                            t === ze.Deal && (i = {
                                bet: [...e.allPlaces.map((t => t.getValue()))]
                            }, e.balance -= i.bet.reduce(((t, e) => t + e), 0));
                            var s = yield It.server.request(function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var i = null != arguments[e] ? arguments[e] : {};
                                    e % 2 ? Ne(Object(i), !0).forEach((function(e) {
                                        (0, n.Z)(t, e, i[e])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Ne(Object(i)).forEach((function(e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                                    }))
                                }
                                return t
                            }({
                                action: t
                            }, i));
                            return e.save(s), s
                        }))()
                    }
                    getHistory() {
                        return (0, a.Z)((function*() {
                            return (yield It.server.request({
                                action: "gamehistory"
                            })).dealerHandHistory
                        }))()
                    }
                    rebet() {
                        this.allPlaces.forEach((t => t.resetHands()))
                    }
                    finish() {
                        this.totalWin = 0, this.activePlace = null, this.allPlaces.forEach((t => t.reset()))
                    }
                    save(t) {
                        this.balance = t.balance, this.totalWin = t.totalWin, this.gameover = t.gameover, this.restore = t.restore, t.action === ze.Init && (this.bets = t.bets, this.activeBet = this.bets.includes(t.defaultBet) ? t.defaultBet : t.bets[0], this.placeDealer = new je, this.betLimits = [t.minBoxBet, t.maxBoxBet], this.allPlaces = [new He(t.minBoxBet, t.maxBoxBet, t.bets), new He(t.minBoxBet, t.maxBoxBet, t.bets), new He(t.minBoxBet, t.maxBoxBet, t.bets)], this.activePlace = this.allPlaces[t.activeBox]), t.dealerHand && this.placeDealer.update(t.dealerHand), t.box && this.allPlaces.forEach(((e, i) => {
                            t.box[i].length > 0 && e.update(t.box[i])
                        })), this.activeBox = t.activeBox, this.activePlayerHand = t.activePlayerHand
                    }
                    updateActive() {
                        this.activePlace = this.allPlaces[this.activeBox], this.allPlaces.forEach(((t, e) => {
                            t.updateActive({
                                isActive: this.activeBox === e,
                                activeHand: this.activePlayerHand
                            })
                        }))
                    }
                }
                class Ve extends Y.W2 {
                    constructor(t) {
                        super();
                        var e = this.addChild(new m.xv(t.value + "\t\t/\t\t", {
                            fill: "rgba(242, 243, 247, 0.302)",
                            fontSize: 28,
                            fontFamily: "PlayBold"
                        }));
                        if ("blackjack" === t.event) {
                            var i = new J.j(It.loader.getAsset("history_21"));
                            i.anchor.set(.5, 0), i.position.set(15, 0), this.addChild(i)
                        }
                        t.cards.split(",").forEach(((t, i) => {
                            var s = new m.xv(t[0], {
                                fill: "rgba(242, 243, 247, 0.302)",
                                fontSize: 18,
                                fontFamily: "PlayBold"
                            });
                            s.position.set(e.width + 40 * i, 6);
                            var a = new J.j(It.loader.getAsset("history_".concat(t[1])));
                            a.anchor.set(0, .5), a.position.set(s.x + s.width + 3, 16), this.addChild(s), this.addChild(a)
                        }))
                    }
                }
                class Ge extends Y.W2 {
                    constructor() {
                        super(), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "cards", void 0), this.title = new m.xv(It.i18n.t("HISTORY_TITLE").toUpperCase(), {
                            fill: "rgba(242, 243, 247, 0.302)",
                            fontSize: 24,
                            fontFamily: "PlayBold",
                            wordWrap: !0,
                            wordWrapWidth: 300
                        }), this.cards = new Y.W2, this.cards.position.set(0, 15), this.addChild(this.title), this.addChild(this.cards)
                    }
                    update(t) {
                        this.cards.removeChildren(), t.reverse().slice(0, 4).reverse().forEach(((t, e) => {
                            var i = new Ve(t);
                            i.position.set(0, 50 * (e + 1)), this.cards.addChild(i)
                        }))
                    }
                    resize() {}
                }
                class Ke extends J.j {
                    constructor(t) {
                        var {
                            icon: e,
                            textures: i
                        } = t;
                        super(), (0, n.Z)(this, "_textures", void 0), (0, n.Z)(this, "isDisable", void 0), (0, n.Z)(this, "isHover", void 0), (0, n.Z)(this, "onClick", void 0), (0, n.Z)(this, "onHover", void 0), (0, n.Z)(this, "onLeave", void 0), this._textures = i, this.isHover = !1, this.isDisable = !1, this.buttonMode = !0, this.interactive = !0, this.onClick = new(k()), this.onHover = new(k()), this.onLeave = new(k()), i.normal && (this.texture = i.normal), e && this.addChild(e), this._setupEvents()
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
                                var i = It.device.desktop ? "pointerover" : "pointerdown";
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
                var Xe = ["pointerover", "pointerenter", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerout", "pointerleave", "gotpointercapture", "lostpointercapture", "mouseover", "mouseenter", "mousedown", "mousemove", "mouseup", "mousecancel", "mouseout", "mouseleave", "touchover", "touchenter", "touchdown", "touchmove", "touchup", "touchcancel", "touchout", "touchleave"],
                    Qe = "bbcode",
                    Je = {
                        bbcode: ["[", "]"],
                        xml: ["<", ">"]
                    };
                class qe extends m.xv {
                    constructor(t, e) {
                        super(t), (0, n.Z)(this, "textStyles", void 0), (0, n.Z)(this, "hitboxes", void 0), this.styles = e, Xe.forEach((t => {
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
                        for (var e in this.textStyles = {}, this.textStyles.default = this.assign({}, qe.DEFAULT_TAG_STYLE), t) "default" === e ? this.assign(this.textStyles.default, t[e]) : this.textStyles[e] = this.assign({}, t[e]);
                        this.textStyles.default.tagStyle === Qe && (this.textStyles.b = this.assign({}, {
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
                        })), this.withPrivateMembers()._style = new m.pn(this.textStyles.default), this.withPrivateMembers().dirty = !0
                    }
                    setTagStyle(t, e) {
                        t in this.textStyles ? this.assign(this.textStyles[t], e) : this.textStyles[t] = this.assign({}, e), this.withPrivateMembers()._style = new m.pn(this.textStyles.default), this.withPrivateMembers().dirty = !0
                    }
                    deleteTagStyle(t) {
                        "default" === t ? this.textStyles.default = this.assign({}, qe.DEFAULT_TAG_STYLE) : delete this.textStyles[t], this.withPrivateMembers()._style = new m.pn(this.textStyles.default), this.withPrivateMembers().dirty = !0
                    }
                    getTagRegex(t, e) {
                        var i = Object.keys(this.textStyles).map((t => [t, t.toUpperCase()].join("|"))).join("|"),
                            {
                                tagStyle: s
                            } = this.textStyles.default;
                        i = t ? "(".concat(i, ")") : "(?:".concat(i, ")");
                        var a = s === Qe ? "\\".concat(Je.bbcode[0]).concat(i, "(?:\\=(?:[A-Za-z0-9_\\-\\#]+|'(?:[^']+|\\\\')*'))*\\s*\\").concat(Je.bbcode[1], "|\\").concat(Je.bbcode[0], "\\/").concat(i, "\\s*\\").concat(Je.bbcode[1]) : "\\".concat(Je.xml[0]).concat(i, "(?:\\s+[A-Za-z0-9_\\-]+=(?:\"(?:[^\"]+|\\\\\")*\"|'(?:[^']+|\\\\')*'))*\\s*\\").concat(Je.xml[1], "|\\").concat(Je.xml[0], "\\/").concat(i, "\\s*\\").concat(Je.xml[1]);
                        return e && (a = "(".concat(a, ")")), new RegExp(a, "g")
                    }
                    getPropertyRegex() {
                        return new RegExp("([A-Za-z0-9_\\-]+)=(?:\"((?:[^\"]+|\\\\\")*)\"|'((?:[^']+|\\\\')*)')", "g")
                    }
                    getBBcodePropertyRegex() {
                        return new RegExp("[A-Za-z0-9_\\-]+=([A-Za-z0-9_\\-\\#]+)", "g")
                    }
                    _getTextDataPerLine(t) {
                        for (var e = this, i = [], s = this.getTagRegex(!0, !1), a = [this.assign({}, this.textStyles.default)], n = [{
                                name: "default",
                                properties: {}
                            }], o = 0; o < t.length; o++) {
                            for (var r = [], h = [], l = void 0; l = s.exec(t[o]);) h.push(l);
                            if (0 === h.length) r.push(this.createTextData(t[o], a[a.length - 1], n[n.length - 1]));
                            else {
                                for (var d = 0, c = 0; c < h.length; c++) {
                                    if (h[c].index > d && r.push(this.createTextData(t[o].substring(d, h[c].index), a[a.length - 1], n[n.length - 1])), "/" === h[c][0][1]) a.length > 1 && (a.pop(), n.pop());
                                    else {
                                        for (var u = {}, p = this.getPropertyRegex(), g = void 0; g = p.exec(h[c][0]);) u[g[1]] = g[2] || g[3];
                                        n.push({
                                            name: h[c][1],
                                            properties: u
                                        });
                                        var {
                                            tagStyle: v
                                        } = this.textStyles.default;
                                        if (v === Qe && h[c][0].includes("=") && this.textStyles[h[c][1]]) ! function() {
                                            var t = e.getBBcodePropertyRegex().exec(h[c][0]),
                                                i = {};
                                            Object.entries(e.textStyles[h[c][1]]).forEach((e => {
                                                i[e[0]] = "string" != typeof e[1] ? e[1] : t[1] + e[1]
                                            })), a.push(e.assign({}, a[a.length - 1], i))
                                        }();
                                        else {
                                            var m = h[c][1];
                                            a.push(this.assign({}, a[a.length - 1], this.textStyles[m], this.textStyles[m.toLowerCase()]))
                                        }
                                    }
                                    d = h[c].index + h[c][0].length
                                }
                                if (d < t[o].length) {
                                    var b = this.createTextData(d ? t[o].substring(d) : t[o], a[a.length - 1], n[n.length - 1]);
                                    r.push(b)
                                }
                            }
                            i.push(r)
                        }
                        var {
                            tagStyle: w
                        } = this.textStyles.default;
                        return i[i.length - 1].map((t => {
                            t.text.includes(Je[w][0]) && (t.text = t.text.match(w === Qe ? /^(.*)\[/ : /^(.*)\</)[1])
                        })), i
                    }
                    getFontString(t) {
                        return new m.pn(t).toFontString()
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
                                dropShadowBlur: a
                            } = this.textStyles[i];
                            t = Math.max(t, s || 0), e = Math.max(e, a || 0)
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
                            for (var i = e.split(/(?:\r\n|\r|\n)/), s = this._getTextDataPerLine(i), a = [], n = [], o = [], r = 0, h = 0; h < i.length; h++) {
                                for (var l = 0, d = 0, c = 0, u = 0; u < s[h].length; u++) {
                                    var p = s[h][u].style;
                                    this.context.font = this.getFontString(p), s[h][u].width = this.context.measureText(s[h][u].text).width, 0 !== s[h][u].text.length && (s[h][u].width += (s[h][u].text.length - 1) * p.letterSpacing, u > 0 && (l += p.letterSpacing / 2), u < s[h].length - 1 && (l += p.letterSpacing / 2)), l += s[h][u].width, s[h][u].fontProperties = m._A.measureFont(this.context.font), s[h][u].height = s[h][u].fontProperties.fontSize, "number" == typeof p.valign ? (d = Math.min(d, p.valign - s[h][u].fontProperties.descent), c = Math.max(c, p.valign + s[h][u].fontProperties.ascent)) : (d = Math.min(d, -s[h][u].fontProperties.descent), c = Math.max(c, s[h][u].fontProperties.ascent))
                                }
                                a[h] = l, n[h] = d, o[h] = c, r = Math.max(r, l)
                            }
                            var g = Object.keys(t).map((e => t[e])).reduce(((t, e) => Math.max(t, e.strokeThickness || 0)), 0),
                                v = this.getDropShadowPadding(),
                                b = r + 2 * g + 2 * v,
                                w = o.reduce(((t, e) => t + e), 0) - n.reduce(((t, e) => t + e), 0) + 2 * g + 2 * v;
                            this.canvas.width = b * this.resolution, this.canvas.height = w * this.resolution, this.context.scale(this.resolution, this.resolution), this.context.textBaseline = "alphabetic", this.context.lineJoin = "round";
                            for (var y = v + g, f = [], C = 0; C < s.length; C++) {
                                var k = s[C],
                                    x = void 0;
                                switch (this.withPrivateMembers()._style.align) {
                                    case "left":
                                        x = v + g;
                                        break;
                                    case "center":
                                        x = v + g + (r - a[C]) / 2;
                                        break;
                                    case "right":
                                        x = v + g + r - a[C]
                                }
                                for (var A = 0; A < k.length; A++) {
                                    var {
                                        style: S,
                                        text: T,
                                        fontProperties: P,
                                        width: E,
                                        height: B,
                                        tag: _
                                    } = k[A], R = y + P.ascent;
                                    switch (S.valign) {
                                        case "top":
                                            break;
                                        case "baseline":
                                            R += o[C] - P.ascent;
                                            break;
                                        case "middle":
                                            R += (o[C] - n[C] - P.ascent - P.descent) / 2;
                                            break;
                                        case "bottom":
                                            R += o[C] - n[C] - P.ascent - P.descent;
                                            break;
                                        default:
                                            R += o[C] - P.ascent - S.valign
                                    }
                                    if (0 === S.letterSpacing) f.push({
                                        text: T,
                                        style: S,
                                        x,
                                        y: R,
                                        width: E,
                                        ascent: P.ascent,
                                        descent: P.descent,
                                        tag: _
                                    }), x += k[A].width;
                                    else {
                                        this.context.font = this.getFontString(k[A].style);
                                        for (var L = 0; L < T.length; L++) {
                                            (L > 0 || A > 0) && (x += S.letterSpacing / 2);
                                            var O = this.context.measureText(T.charAt(L)).width;
                                            f.push({
                                                text: T.charAt(L),
                                                style: S,
                                                x,
                                                y: R,
                                                width: O,
                                                ascent: P.ascent,
                                                descent: P.descent,
                                                tag: _
                                            }), x += O, (L < T.length - 1 || A < k.length - 1) && (x += S.letterSpacing / 2)
                                        }
                                    }
                                }
                                y += o[C] - n[C]
                            }
                            this.context.save(), f.forEach((t => {
                                var {
                                    style: e,
                                    text: i,
                                    x: s,
                                    y: a
                                } = t;
                                if (e.dropShadow) {
                                    this.context.font = this.getFontString(e);
                                    var n = e.dropShadowColor;
                                    "number" == typeof n && (n = tt.hex2string(n)), this.context.shadowColor = n, this.context.shadowBlur = e.dropShadowBlur, this.context.shadowOffsetX = Math.cos(e.dropShadowAngle) * e.dropShadowDistance * this.resolution, this.context.shadowOffsetY = Math.sin(e.dropShadowAngle) * e.dropShadowDistance * this.resolution, this.context.fillText(i, s, a)
                                }
                            })), this.context.restore(), f.forEach((t => {
                                var {
                                    style: e,
                                    text: i,
                                    x: s,
                                    y: a,
                                    width: n,
                                    ascent: o,
                                    descent: r,
                                    tag: h
                                } = t;
                                if (void 0 !== e.stroke && e.strokeThickness) {
                                    this.context.font = this.getFontString(e);
                                    var l = e.stroke;
                                    "number" == typeof l && (l = tt.hex2string(l)), this.context.strokeStyle = l, this.context.lineWidth = e.strokeThickness, this.context.strokeText(i, s, a)
                                }
                            })), f.forEach((t => {
                                var {
                                    style: e,
                                    text: i,
                                    x: s,
                                    y: a,
                                    width: n,
                                    ascent: o,
                                    descent: r,
                                    tag: h
                                } = t;
                                if (void 0 !== e.fill) {
                                    this.context.font = this.getFontString(e);
                                    var l = e.fill;
                                    if ("number" == typeof l) l = tt.hex2string(l);
                                    else if (Array.isArray(l))
                                        for (var d = 0; d < l.length; d++) {
                                            var c = l[d];
                                            "number" == typeof c && (l[d] = tt.hex2string(c))
                                        }
                                    var u = new m.pn(e),
                                        p = m._A.measureText(i || " ", u, u.wordWrap, this.canvas);
                                    this.context.fillStyle = this._generateFillStyle(u, [i], p), this.context.fillText(i, s, a)
                                }
                            })), f.forEach((t => {
                                var {
                                    style: e,
                                    text: i,
                                    x: s,
                                    y: a,
                                    width: n,
                                    ascent: o,
                                    descent: r,
                                    tag: h
                                } = t, l = -this.withPrivateMembers()._style.padding - this.getDropShadowPadding();
                                this.hitboxes.push({
                                    tag: h,
                                    hitbox: new G.Ae(s + l, a - o + l, n, o + r)
                                }), (void 0 === e.debug ? qe.debugOptions.spans.enabled : e.debug) && (this.context.lineWidth = 1, qe.debugOptions.spans.bounding && (this.context.fillStyle = qe.debugOptions.spans.bounding, this.context.strokeStyle = qe.debugOptions.spans.bounding, this.context.beginPath(), this.context.rect(s, a - o, n, o + r), this.context.fill(), this.context.stroke(), this.context.stroke()), qe.debugOptions.spans.baseline && (this.context.strokeStyle = qe.debugOptions.spans.baseline, this.context.beginPath(), this.context.moveTo(s, a), this.context.lineTo(s + n, a), this.context.closePath(), this.context.stroke()), qe.debugOptions.spans.top && (this.context.strokeStyle = qe.debugOptions.spans.top, this.context.beginPath(), this.context.moveTo(s, a - o), this.context.lineTo(s + n, a - o), this.context.closePath(), this.context.stroke()), qe.debugOptions.spans.bottom && (this.context.strokeStyle = qe.debugOptions.spans.bottom, this.context.beginPath(), this.context.moveTo(s, a + r), this.context.lineTo(s + n, a + r), this.context.closePath(), this.context.stroke()), qe.debugOptions.spans.text && (this.context.fillStyle = "#ffffff", this.context.strokeStyle = "#000000", this.context.lineWidth = 2, this.context.font = "8px monospace", this.context.strokeText(h.name, s, a - o + 8), this.context.fillText(h.name, s, a - o + 8), this.context.strokeText("".concat(n.toFixed(2), "x").concat((o + r).toFixed(2)), s, a - o + 16), this.context.fillText("".concat(n.toFixed(2), "x").concat((o + r).toFixed(2)), s, a - o + 16)))
                            })), qe.debugOptions.objects.enabled && (qe.debugOptions.objects.bounding && (this.context.fillStyle = qe.debugOptions.objects.bounding, this.context.beginPath(), this.context.rect(0, 0, b, w), this.context.fill()), qe.debugOptions.objects.text && (this.context.fillStyle = "#ffffff", this.context.strokeStyle = "#000000", this.context.lineWidth = 2, this.context.font = "8px monospace", this.context.strokeText("".concat(b.toFixed(2), "x").concat(w.toFixed(2)), 0, 8, b), this.context.fillText("".concat(b.toFixed(2), "x").concat(w.toFixed(2)), 0, 8, b))), this.updateTexture()
                        }
                    }
                    wordWrap(t) {
                        var e = "",
                            i = this.getTagRegex(!0, !0),
                            s = t.split("\n"),
                            a = this.withPrivateMembers()._style.wordWrapWidth,
                            n = [this.assign({}, this.textStyles.default)];
                        this.context.font = this.getFontString(this.textStyles.default);
                        for (var o = 0; o < s.length; o++) {
                            for (var r = a, h = s[o].split(i), l = !0, d = 0; d < h.length; d++)
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
                                            for (var v = u[p].split(""), m = 0; m < v.length; m++) {
                                                var b = this.context.measureText(v[m]).width;
                                                b > r ? (e += "\n".concat(v[m]), r = a - b) : (e += v[m], r -= b)
                                            }
                                            p > 0 && (e += " ", r -= this.context.measureText(" ").width)
                                        } else if (this.withPrivateMembers()._style.breakWords) e += u[p], r -= g, p < u.length - 1 && (e += " ", r -= this.context.measureText(" ").width);
                                        else {
                                            var w = g + (p > 0 ? this.context.measureText(" ").width : 0);
                                            w > r ? (l || (e += "\n"), e += u[p], r = a - g) : (r -= w, p > 0 && (e += " "), e += u[p])
                                        }
                                        l = !1
                                    }
                            o < s.length - 1 && (e += "\n")
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
                        for (var a of i)
                            for (var n in a) t[n] = a[n];
                        return t
                    }
                }

                function $e(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function ti(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? $e(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : $e(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }

                function ei(t) {
                    var e = !1,
                        i = !1,
                        s = new(k()),
                        a = new(k()),
                        n = new Y.W2;
                    n.name = "Menu", n.on("pointerover", (() => {
                        i = !1
                    })), n.on("pointerout", (() => {
                        i = !0, setTimeout((() => {
                            i && u()
                        }), 300)
                    }));
                    var o = new Y.W2;
                    o.alpha = 0, o.interactiveChildren = !1;
                    var r = new A(o, .3, {}),
                        h = new J.j(t.background);
                    h.height = It.viewport.height;
                    var l = new Ke({
                        textures: {
                            normal: t.icon_menu_normal,
                            hover: t.icon_menu_normal
                        }
                    });
                    l.interactive = !0, l.position.set(40, 967), l.onClick.add((() => {
                        e ? (u(), a.dispatch(e)) : (c(), s.dispatch(e))
                    }));
                    var d = function() {
                        var t = {
                                default: {
                                    fill: 16777215,
                                    fontSize: 28,
                                    fontFamily: "AvenirMedium",
                                    dropShadow: !0
                                }
                            },
                            e = new qe("", t);
                        e.anchor.y = .5, e.name = "ButtonText";
                        var i = 0;
                        return {
                            container: e,
                            setTransitionX(t) {
                                i = t
                            },
                            show(t, s, a) {
                                e.position.set(s, a), e.text = t.toUpperCase(), A.to(e, .3, {
                                    pixi: {
                                        x: s + i,
                                        alpha: 1
                                    }
                                })
                            },
                            hide(i) {
                                e.text = "", e.setTagStyle("default", t), A.to(e, .3, {
                                    pixi: {
                                        x: i,
                                        alpha: 0
                                    }
                                })
                            }
                        }
                    }();

                    function c() {
                        e || (e = !0, n.interactive = !0, o.interactiveChildren = !0, o.alpha = 0, o.position.x = -50, r.updateTo({
                            pixi: {
                                x: 0,
                                alpha: 1
                            }
                        }, !0))
                    }

                    function u() {
                        e && (e = !1, n.interactive = !1, o.interactiveChildren = !1, o.alpha = 1, o.position.x = 0, r.updateTo({
                            pixi: {
                                x: -50,
                                alpha: 0
                            }
                        }, !0), d.hide(h.width))
                    }
                    return d.setTransitionX(20), o.addChild(d.container, h), n.addChild(o, l), {
                        container: n,
                        disable() {
                            l.interactive = !1
                        },
                        enable() {
                            l.interactive = !0
                        },
                        open: c,
                        onOpen: s,
                        close: u,
                        onClose: a,
                        isOpen: () => e,
                        addItem(t, e, i) {
                            t.anchor.x = .5, t.x = .5 * h.width, e && (t.onHover && t.onHover.add((() => {
                                var s = t.y + t.height / 2;
                                i && (d.container.style = ti(ti({}, d.container.style), i)), d.show(e, h.width, s)
                            })), t.onLeave && t.onLeave.add((() => {
                                d.hide(h.width)
                            }))), o.addChild(t)
                        }
                    }
                }(0, n.Z)(qe, "DEFAULT_TAG_STYLE", {
                    align: "left",
                    breakWords: !1,
                    dropShadow: !1,
                    dropShadowAngle: Math.PI / 6,
                    dropShadowBlur: 0,
                    dropShadowColor: "#000000",
                    dropShadowDistance: 5,
                    fill: "black",
                    fillGradientType: m.M_.LINEAR_VERTICAL,
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
                }), (0, n.Z)(qe, "debugOptions", {
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
                class ii extends(Ut(Y.W2, {
                    preventResize: !0
                })) {
                    constructor() {
                        super(), (0, n.Z)(this, "_dirty", void 0), (0, n.Z)(this, "_distance", void 0), (0, n.Z)(this, "_minY", void 0), (0, n.Z)(this, "_scrollContainer", void 0), (0, n.Z)(this, "_scrollMask", void 0), (0, n.Z)(this, "_speed", void 0), (0, n.Z)(this, "_startPosition", void 0), (0, n.Z)(this, "_targetPosition", void 0), (0, n.Z)(this, "hitAreaOffsetLeft", void 0), (0, n.Z)(this, "hitAreaOffsetRight", void 0), (0, n.Z)(this, "paddingBottom", void 0), (0, n.Z)(this, "scrollBar", void 0), this.paddingBottom = 0, this.hitAreaOffsetLeft = 0, this.hitAreaOffsetRight = 0, this.interactive = !0, this._width = 0, this._height = 0, this._minY = 0, this._speed = 0, this._dirty = !1, this._startPosition = null, this._distance = null, this._targetPosition = null, this._scrollMask = new u.TC, this._scrollContainer = new Y.W2, this._scrollContainer.interactive = !0, this.scrollBar = null, super.addChild(this._scrollMask), super.addChild(this._scrollContainer), this.mask = this._scrollMask, this._setupEvents()
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
                            this._minY = this._height - i - this._scrollContainer.height - this.paddingBottom, this._height = e + this.paddingBottom - i, this._scrollContainer.hitArea = new G.Ae(0 | this.hitAreaOffsetLeft, 0 | i, t - this.hitAreaOffsetRight | 0, this._scrollContainer.height + this.paddingBottom | 0)
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
                const si = ii;
                class ai extends Ke {
                    constructor() {
                        super({
                            textures: {
                                normal: It.loader.getAsset("dmi_close_n"),
                                hover: It.loader.getAsset("dmi_close_h")
                            }
                        })
                    }
                }
                class ni extends qe {
                    constructor(t) {
                        super(t, {
                            default: {
                                fill: "white",
                                fontSize: 24,
                                fontWeight: "normal",
                                fontFamily: "AvenirMedium",
                                wordWrap: !0,
                                wordWrapWidth: 1150
                            },
                            bold: {
                                fontWeight: "bold"
                            }
                        })
                    }
                    resize() {
                        this.scale.set(2.2), It.device.landscape ? this.setTagStyle("default", {
                            wordWrapWidth: 670
                        }) : this.setTagStyle("default", {
                            wordWrapWidth: 400
                        })
                    }
                }
                class oi extends m.xv {
                    constructor(t) {
                        super(t.toUpperCase(), {
                            fontSize: 24,
                            fill: "white",
                            fontFamily: "AvenirMedium",
                            fontWeight: "bold"
                        })
                    }
                    resize() {
                        It.device.desktop || (this.scale.set(2.5), this.style.wordWrap = !0, It.device.landscape ? this.style.wordWrapWidth = 800 : this.style.wordWrapWidth = 400)
                    }
                }
                class ri extends Y.W2 {
                    constructor() {
                        super(), (0, n.Z)(this, "_sectionTitle", void 0), (0, n.Z)(this, "_sectionParagraph1", void 0), this._sectionTitle = new oi(It.i18n.t("PaytableSectionBlackjackTitle")), this._sectionTitle.position.set(0, 0), this._sectionParagraph1 = new ni(It.i18n.t("PaytableSectionBlackjackContent1")), this._sectionParagraph1.position.set(0, 80), this.addChild(this._sectionTitle), this.addChild(this._sectionParagraph1)
                    }
                    resize() {
                        this._sectionTitle.resize(), this._sectionParagraph1.resize(), this._sectionParagraph1.y = 160
                    }
                }
                class hi extends Y.W2 {
                    constructor() {
                        super(), (0, n.Z)(this, "_sectionTitle", void 0), (0, n.Z)(this, "_sectionParagraph1", void 0), (0, n.Z)(this, "_sectionParagraph2", void 0), this._sectionTitle = new oi(It.i18n.t("PaytableSectionCombineTitle")), this._sectionTitle.position.set(0, 0), this._sectionParagraph1 = new ni(It.i18n.t("PaytableSectionCombineContent1") + "\n\n" + It.i18n.t("PaytableSectionCombineContent2") + "\n\n" + It.i18n.t("PaytableSectionCombineContent3") + "\n\n" + It.i18n.t("PaytableSectionCombineContent4") + "\n\n" + It.i18n.t("PaytableSectionCombineContent5")), this._sectionParagraph2 = new ni(It.i18n.t("PaytableSectionBlackjackContent2") + "\n\n" + It.i18n.t("PaytableSectionBlackjackContent3") + "\n\n" + It.i18n.t("PaytableSectionBlackjackContent4") + "\n\n" + It.i18n.t("PaytableSectionBlackjackContent5") + "\n\n" + It.i18n.t("PaytableSectionBlackjackContent6") + "\n\n"), this._sectionParagraph1.position.set(0, 80), this._sectionParagraph2.position.set(200, 80), this.addChild(this._sectionTitle), this.addChild(this._sectionParagraph1), this.addChild(this._sectionParagraph2)
                    }
                    resize() {
                        this._sectionTitle.resize(), this._sectionParagraph1.resize(), this._sectionParagraph1.y = 160, this._sectionParagraph2.resize(), this._sectionParagraph2.y = 162, this._sectionParagraph2.x = 450, It.device.landscape ? this._sectionParagraph2.setTagStyle("default", {
                            wordWrapWidth: 670
                        }) : this._sectionParagraph2.setTagStyle("default", {
                            wordWrapWidth: 200
                        })
                    }
                }
                class li extends Y.W2 {
                    constructor() {
                        super(), (0, n.Z)(this, "_sectionTitle", void 0), (0, n.Z)(this, "_sectionParagraph", void 0), this._sectionTitle = new oi(It.i18n.t("PaytableSectionDoubleTitle")), this._sectionTitle.position.set(0, 0), this._sectionParagraph = new ni(It.i18n.t("PaytableSectionDoubleContent1") + "\n\n" + It.i18n.t("PaytableSectionDoubleContent2")), this._sectionParagraph.position.set(0, 80), this.addChild(this._sectionTitle), this.addChild(this._sectionParagraph)
                    }
                    resize() {
                        this._sectionTitle.resize(), this._sectionParagraph.resize(), this._sectionParagraph.y = 160
                    }
                }
                class di extends Y.W2 {
                    constructor() {
                        super(), (0, n.Z)(this, "_sectionTitle", void 0), (0, n.Z)(this, "_sectionParagraph", void 0), this._sectionTitle = new oi(It.i18n.t("PaytableSectionEvenTitle")), this._sectionTitle.position.set(0, 0), this._sectionParagraph = new ni(It.i18n.t("PaytableSectionEvenContent1")), this._sectionParagraph.position.set(0, 80), this.addChild(this._sectionTitle), this.addChild(this._sectionParagraph)
                    }
                    resize() {
                        this._sectionTitle.resize(), this._sectionParagraph.resize(), this._sectionParagraph.y = 160
                    }
                }
                class ci extends Y.W2 {
                    constructor() {
                        super(), (0, n.Z)(this, "_sectionTitle", void 0), (0, n.Z)(this, "_sectionParagraph", void 0), this._sectionTitle = new oi(It.i18n.t("PaytableSectionGeneralTitle")), this._sectionTitle.position.set(0, 0), this._sectionParagraph = new ni(It.i18n.t("PaytableSectionGeneralContent1") + "\n\n" + It.i18n.t("PaytableSectionGeneralContent2") + "\n\n" + It.i18n.t("PaytableSectionGeneralContent3")), this._sectionParagraph.position.set(0, 80), this.addChild(this._sectionTitle), this.addChild(this._sectionParagraph)
                    }
                    resize() {
                        this._sectionTitle.resize(), this._sectionParagraph.resize(), this._sectionParagraph.y = 160
                    }
                }
                class ui extends Y.W2 {
                    constructor() {
                        super(), (0, n.Z)(this, "_sectionTitle", void 0), (0, n.Z)(this, "_sectionParagraph", void 0), this._sectionTitle = new oi(It.i18n.t("PaytableSectionInsuranceTitle")), this._sectionTitle.position.set(0, 0), this._sectionParagraph = new ni(It.i18n.t("PaytableSectionInsuranceContent1")), this._sectionParagraph.position.set(0, 80), this.addChild(this._sectionTitle), this.addChild(this._sectionParagraph)
                    }
                    resize() {
                        this._sectionTitle.resize(), this._sectionParagraph.resize(), this._sectionParagraph.y = 160
                    }
                }
                class pi extends Y.W2 {
                    constructor() {
                        super(), (0, n.Z)(this, "_sectionTitle", void 0), (0, n.Z)(this, "_sectionParagraph", void 0), this._sectionTitle = new oi(It.i18n.t("PaytableSectionSplitTitle")), this._sectionTitle.position.set(0, 0), this._sectionParagraph = new ni(It.i18n.t("PaytableSectionSplitContent1")), this._sectionParagraph.position.set(0, 80), this.addChild(this._sectionTitle), this.addChild(this._sectionParagraph)
                    }
                    resize() {
                        this._sectionTitle.resize(), this._sectionParagraph.resize(), this._sectionParagraph.y = 160
                    }
                }
                class gi extends Y.W2 {
                    constructor() {
                        super(), (0, n.Z)(this, "_sectionContainer", void 0), (0, n.Z)(this, "_scrollView", void 0), (0, n.Z)(this, "_paytableOverlay", void 0), (0, n.Z)(this, "_paytableClose", void 0), (0, n.Z)(this, "_paytableSectionCombine", void 0), (0, n.Z)(this, "_paytableSectionGeneral", void 0), (0, n.Z)(this, "_paytableSectionBlackjack", void 0), (0, n.Z)(this, "_paytableSectionInsurance", void 0), (0, n.Z)(this, "_paytableSectionEven", void 0), (0, n.Z)(this, "_paytableSectionSplit", void 0), (0, n.Z)(this, "_paytableSectionDouble", void 0), this.visible = !1, this.interactive = !1, this._sectionContainer = new Y.W2, It.action.on("hand:change", this.resize.bind(this)), this._scrollView = new si, this._scrollView.paddingBottom = 40, this._paytableSectionCombine = new hi, this._paytableSectionGeneral = new ci, this._paytableSectionBlackjack = new ri, this._paytableSectionInsurance = new ui, this._paytableSectionEven = new di, this._paytableSectionSplit = new pi, this._paytableSectionDouble = new li, this._sectionContainer.addChild(this._paytableSectionCombine, this._paytableSectionGeneral, this._paytableSectionBlackjack, this._paytableSectionInsurance, this._paytableSectionEven, this._paytableSectionSplit, this._paytableSectionDouble), this._scrollView.addChild(this._sectionContainer), It.device.desktop ? (this._paytableOverlay = new u.TC, this._paytableOverlay.beginFill(0, .95), this._paytableOverlay.drawRect(0, 0, It.viewport.width, It.viewport.height), this._paytableOverlay.endFill(), this._paytableClose = new ai, this._paytableClose.position.set(1800, 45), this._paytableClose.onClick.add((() => {
                            this.close()
                        })), this.addChild(this._paytableOverlay), this.addChild(this._scrollView), this.addChild(this._paytableClose), this._scrollView.resize(1550, 850, 8), this._scrollView.position.set(270, 90)) : this.addChild(this._scrollView), this.alignSection(50)
                    }
                    toggle() {
                        this._scrollView.scrollTo(0, 0), this.visible = !this.visible
                    }
                    open() {
                        this._scrollView.scrollTo(0, 0), this.visible = !0
                    }
                    close() {
                        this.visible = !1
                    }
                    alignSection() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            e = -t,
                            i = 0;
                        this._sectionContainer.children.forEach((s => {
                            s.y = e + i + t, e = s.y, i = s.height
                        }))
                    }
                    resize() {
                        if (!It.device.desktop)
                            if (this._paytableSectionCombine.resize(), this._paytableSectionGeneral.resize(), this._paytableSectionBlackjack.resize(), this._paytableSectionInsurance.resize(), this._paytableSectionEven.resize(), this._paytableSectionSplit.resize(), this._paytableSectionDouble.resize(), It.device.landscape) {
                                var t = It.store.get("hand:isLeft", !1);
                                this._scrollView.resize(1600, It.viewport.height - 200, 16), t ? this._scrollView.position.set(60, 110) : this._scrollView.position.set(290, 200), this._sectionContainer.position.set(0, 0), this.alignSection(50)
                            } else this._scrollView.resize(It.viewport.width + 2 * It.viewport.paddingX, It.viewport.height - 500), this._scrollView.position.set(-It.viewport.paddingX, 250), this._sectionContainer.position.set(It.viewport.paddingX + 40, 0), this.alignSection(100)
                    }
                }
                const vi = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = new Y.W2;
                    i.visible = !1;
                    var s = new m.xv(t, {
                        fontSize: 66,
                        fontFamily: "AvenirMedium",
                        fill: "white"
                    });

                    function a() {
                        e.resize && e.resize();
                        var t = It.store.get("hand:isLeft", !1);
                        It.device.landscape ? t ? s.position.set((It.viewport.width - 250) / 2, 30) : s.position.set((It.viewport.width + 250) / 2, 30) : s.position.set(It.viewport.width / 2, 95)
                    }
                    return s.anchor.x = .5, i.addChild(s), e.container ? i.addChild(e.container) : e && i.addChild(e), It.action.on("hand:change", a), {
                        container: i,
                        open() {
                            i.visible = !0, e && e.open && e.open()
                        },
                        close() {
                            i.visible = !1, e && e.close && e.close()
                        },
                        resize: a
                    }
                };
                const mi = function() {
                    var t = new u.TC;
                    t.lineStyle(3, 8421504).moveTo(0, 0).lineTo(1, 0).endFill();
                    var e = new J.j(t.generateCanvasTexture());
                    return t.destroy(), e
                };
                const bi = function(t) {
                    var e = !1,
                        i = It.loader.getAsset("menu_mobile"),
                        s = new Y.W2;
                    s.interactive = !0;
                    var a = i.check_on,
                        n = i.check_off,
                        o = new Ke({
                            textures: {
                                normal: n
                            }
                        }),
                        r = new m.xv(t, {
                            fontSize: 46,
                            fill: "white"
                        });

                    function h() {
                        It.device.landscape ? o.x = 1400 : o.x = 850, r.y = o.height / 2
                    }
                    return r.anchor.y = .5, s.addChild(r), s.addChild(o), h(), {
                        container: s,
                        resize: h,
                        setOnClick(t) {
                            "function" == typeof t && o.onClick.add(t)
                        },
                        setState(t) {
                            e = t, o.texture = e ? a : n
                        },
                        toggle() {
                            e ? (e = !1, o.texture = n) : (e = !0, o.texture = a)
                        }
                    }
                };
                const wi = function() {
                    var t = new Y.W2,
                        e = mi(),
                        i = mi(),
                        s = bi("LEFT HAND MODE"),
                        a = bi("GAME SOUNDS");

                    function n() {
                        var n = It.store.get("hand:isLeft", !1);
                        s.resize(), a.resize(), It.device.landscape ? (t.x = n ? 35 : 290, t.y = 200, e.y = 200, e.width = t.width, a.container.y = 300, i.y = 500, i.width = t.width) : (t.x = 20, t.y = 300, e.y = 200, e.width = 1040, a.container.y = 300, i.y = 500, i.width = 1040)
                    }
                    return a.setState(!It.sound.mutedAll), s.setOnClick((() => {
                        s.toggle(), It.store.set("hand:isLeft", !It.store.get("hand:isLeft", !1)), It.action.emit("hand:change")
                    })), a.setOnClick((() => It.sound.toggle("all"))), t.addChild(s.container), t.addChild(e), t.addChild(a.container), t.addChild(i), It.sound.onChangeMute.add(((t, e) => {
                        a.setState(!e)
                    })), It.sound.onChangeVolume.add((t => {
                        a.setState(t > 0)
                    })), It.action.on("hand:change", n), n(), {
                        container: t,
                        resize: n,
                        open() {}
                    }
                };
                const yi = function() {
                    var t = 0,
                        e = 0,
                        i = [],
                        s = new Y.W2;
                    s.name = "NavContent";
                    var a = vi("PAYTABLE", new gi);
                    i.push(a);
                    var n = vi("GAME SETTINGS", wi());
                    return i.push(n), s.addChild(a.container), s.addChild(n.container), {
                        container: s,
                        show(s) {
                            ! function(s) {
                                e !== (t = s) && i[e].close(), i[t].open(), e = t
                            }(s)
                        },
                        hide(t) {
                            i[t].close()
                        },
                        resize() {
                            n.resize(), a.resize()
                        }
                    }
                };
                const fi = function(t, e) {
                    var i = new Ke({
                        textures: {
                            normal: t
                        }
                    });
                    return i.anchor.set(.5), Object.assign(i, {
                        normal() {
                            i.texture = t
                        },
                        active() {
                            i.texture = e
                        }
                    })
                };
                const Ci = function() {
                    var t = 0,
                        e = 0,
                        i = null,
                        s = [],
                        a = It.loader.getAsset("menu_mobile"),
                        n = new Y.W2;
                    n.name = "NavMenu";
                    var o = new u.TC;
                    o.beginFill(0), o.drawRect(0, 0, 1920, 1080), o.endFill();
                    var r = new J.j(o.generateCanvasTexture()),
                        h = fi(a.icon_paytable_normal, a.icon_paytable_active);
                    s.push(h);
                    var l = fi(a.icon_settings_normal, a.icon_settings_active);

                    function d() {
                        var t = It.store.get("hand:isLeft", !1);
                        if (It.device.landscape) {
                            var e = new G.Ae(-125, -90, 250, 175);
                            r.scale.y = 1, r.width = 250, r.height = It.viewport.height, r.position.set(0, 0), n.y = It.viewport.height - r.height, n.x = t ? It.viewport.width - r.width : 0, h.scale.set(1), h.position.set(r.width / 2, 760), h.hitArea = e, l.scale.set(1), l.position.set(r.width / 2, 315), l.hitArea = e
                        } else {
                            var i = r.height / 2,
                                s = It.viewport.width / 2,
                                a = new G.Ae(-100, -100, 200, 200);
                            r.height = 250, r.width = It.viewport.width + 2 * It.viewport.paddingX, r.position.set(-It.viewport.paddingX, 0), n.position.set(0, It.viewport.height - r.height), h.hitArea = a, h.position.set(s + 200, i), l.hitArea = a, l.position.set(s - 200, i)
                        }
                    }

                    function c(i) {
                        e !== (t = i) && s[e].normal(), s[t].active(), e = t
                    }

                    function p(e) {
                        c(s.indexOf(e.target)), "function" == typeof i && i(t)
                    }
                    return s.push(l), h.onClick.add(p), l.onClick.add(p), o.destroy(), n.addChild(r), n.addChild(h), n.addChild(l), It.action.on("hand:change", d), c(t), d(), {
                        container: n,
                        resize: d,
                        setOnClick(t) {
                            i = t
                        },
                        getActiveIndex: () => t,
                        setActive: c
                    }
                };
                const ki = function() {
                    var t = new Y.W2;
                    t.name = "NavBar";
                    var e = Ci(),
                        i = yi();
                    return e.setOnClick((t => {
                        i.show(t)
                    })), t.addChild(e.container), t.addChild(i.container), {
                        container: t,
                        open() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                            t >= 0 ? (i.show(t), e.setActive(t)) : (i.show(e.getActiveIndex()), e.setActive(e.getActiveIndex()))
                        },
                        close() {
                            i.hide(e.getActiveIndex())
                        },
                        resize() {
                            e.resize(), i.resize()
                        }
                    }
                };
                const xi = function() {
                    var t = It.loader.getAsset("menu_mobile"),
                        e = new Y.W2;
                    e.interactive = !0;
                    var i = new Y.W2;
                    i.visible = !1;
                    var s = new u.TC;
                    s.beginFill(1184274), s.drawRect(0, 0, It.viewport.width, It.viewport.height), s.endFill();
                    var a = ki(),
                        n = new J.j(s.generateCanvasTexture()),
                        o = new Ke({
                            textures: {
                                normal: t.icon_close
                            }
                        });
                    o.onClick.add((() => {
                        i.visible = !1, a.close()
                    }));
                    var r = new Ke({
                        textures: {
                            normal: t.icon_menu
                        }
                    });
                    r.onClick.add((() => {
                        i.visible = !0, a.open()
                    }));
                    var h = new Ke({
                            textures: {
                                normal: t.icon_home
                            }
                        }),
                        l = It.config.get("homeURL.url", "javascript:history.back()"),
                        d = It.config.get("homeURL.target", "self");

                    function c() {
                        var t = It.store.get("hand:isLeft", !1);
                        a.resize(), It.device.landscape ? (n.height = It.viewport.height, n.width = It.viewport.width, n.position.set(0, 0), o.scale.set(1), h.scale.set(1), r.scale.set(1), t ? (h.position.set(It.viewport.width - 180, 255), r.position.set(It.viewport.width - 180, 705), o.position.set(It.viewport.width - 180, 870)) : (h.position.set(70, 255), r.position.set(70, 705), o.position.set(70, 870))) : (n.height = It.viewport.height, n.width = It.viewport.width + 2 * It.viewport.paddingX, n.position.set(-It.viewport.paddingX, 0), h.position.set(50, 70), r.position.set(911, 70), o.position.set(911, 70))
                    }
                    return h.visible = It.config.get("homeURL.show", !0), h.onClick.add((() => It.openUrl(l, d))), i.addChild(n), i.addChild(a.container), i.addChild(o), e.addChild(h), e.addChild(r), e.addChild(i), It.action.on("hand:change", c), {
                        container: e,
                        resize: c,
                        open() {},
                        close() {},
                        reset() {}
                    }
                };

                function Ai(t) {
                    return t.desktop ? function(t) {
                        var e = ei(t),
                            i = new(k()),
                            s = new Ke({
                                textures: {
                                    normal: t.icon_home_normal,
                                    hover: t.icon_home_hover
                                }
                            });
                        s.position.y = 57;
                        var a = It.config.get("homeURL.url", "javascript:history.back()"),
                            n = It.config.get("homeURL.target", "self");
                        s.visible = It.config.get("homeURL.show", !0), s.onClick.add((() => It.openUrl(a, n)));
                        var o = new Ke({
                            textures: {
                                normal: t.icon_fullscreen_normal,
                                hover: t.icon_fullscreen_hover
                            }
                        });
                        o.position.y = 323, o.onClick.add((() => It.fullscreen.toggle())), It.fullscreen.on("change", (e => {
                            e ? o.update({
                                textures: {
                                    normal: It.loader.getAsset("icon_fullscreen_collapse"),
                                    hover: null
                                }
                            }) : o.update({
                                textures: {
                                    normal: t.icon_fullscreen_normal,
                                    hover: t.icon_fullscreen_hover
                                }
                            })
                        }));
                        var r = new Ke({
                            textures: {
                                normal: t.icon_sound_active_normal,
                                hover: t.icon_sound_active_hover
                            }
                        });
                        r.position.y = 473, r.onClick.add((() => It.sound.toggle("all")));
                        var h = new Ke({
                            textures: {
                                normal: t.icon_paytable_normal,
                                hover: t.icon_paytable_hover
                            }
                        });

                        function l(e) {
                            e ? r.update({
                                textures: {
                                    normal: t.icon_sound_inactive_normal,
                                    hover: t.icon_sound_inactive_hover
                                }
                            }) : r.update({
                                textures: {
                                    normal: t.icon_sound_active_normal,
                                    hover: t.icon_sound_active_hover
                                }
                            })
                        }
                        return h.position.y = 613, h.onClick.add((() => {
                            e.close(), i.dispatch()
                        })), e.addItem(s, It.i18n.t("MenuDesktopButtonHome")), e.addItem(o, It.i18n.t("MenuDesktopButtonFullscreen")), e.addItem(r, It.i18n.t("MenuDesktopButtonSound")), e.addItem(h, It.i18n.t("MenuDesktopButtonPaytable")), It.sound.onChangeMute.add(((t, e) => {
                            l(e)
                        })), It.sound.onChangeVolume.add((t => {
                            l(t <= 0)
                        })), {
                            container: e.container,
                            onOpenPaytable: i,
                            onOpen: e.onOpen,
                            resize() {},
                            close() {
                                e.close()
                            },
                            reset() {}
                        }
                    }(It.loader.getAsset("menu_desktop")) : xi()
                }
                class Si extends Y.W2 {
                    constructor(t, e) {
                        super(), (0, n.Z)(this, "cacheWidth", 0), (0, n.Z)(this, "background", new J.j), (0, n.Z)(this, "value", void 0), this.paddingX = t, this.paddingY = e, this.background = new J.j(d.xE.EMPTY), this.background.anchor.set(.5), this.value = new m.xv("", {
                            fontSize: 24,
                            fontFamily: "PlayBold",
                            fill: "white"
                        }), this.value.anchor.set(.5), this.addChild(this.background), this.addChild(this.value)
                    }
                    update(t) {
                        var e, i, s, a;
                        this.value.text = t + "", this.cacheWidth !== this.value.width && (this.cacheWidth = this.value.width, this.background.texture = (e = this.value.width + this.paddingX, i = this.value.height + this.paddingY, s = 1e3, (a = new u.TC).beginFill(16777215, .25), a.drawRoundedRect(0, 0, e, i, s), a.endFill(), a.generateCanvasTexture()))
                    }
                }
                class Ti extends(Ut(Y.W2)) {
                    constructor(t, e) {
                        super(), (0, n.Z)(this, "icon", void 0), (0, n.Z)(this, "text", void 0), this.alpha = .5, this.buttonMode = !1, this.interactive = !0, this.hitArea = new G.Ae(-30, -18, 60, 60), this.icon = new J.j(this.game.loader.getAsset(t)), this.icon.anchor.set(.5), this.text = new m.xv(e, {
                            fontSize: 18,
                            fill: "white",
                            fontFamily: "PlayBold"
                        }), this.text.anchor.set(.5), this.text.position.set(0, 28), this.addChild(this.icon), this.addChild(this.text)
                    }
                }
                class Pi extends(Ut(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "textureWin", void 0), (0, n.Z)(this, "textureLost", void 0), (0, n.Z)(this, "textureBust", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "background", void 0), this.interactive = !1, this.renderable = !1, this.textureWin = this.createBackgroundTexture(1163334), this.textureLost = this.createBackgroundTexture(15024197), this.textureBust = this.createBackgroundTexture(15101498), this.background = new J.j(this.textureWin), this.background.anchor.set(.5, 0), this.background.position.set(123, 0), this.title = new m.xv("", {
                            fill: 16777215,
                            fontFamily: "PlayBold",
                            fontSize: 22,
                            align: "center",
                            wordWrap: !0,
                            wordWrapWidth: 246
                        }), this.title.anchor.set(.5), this.title.position.set(this.background.width / 2, this.background.height / 2), this.addChild(this.background, this.title)
                    }
                    createBackgroundTexture(t) {
                        return (new u.TC).beginFill(t, .8).moveTo(0, 0).lineTo(246, 0).arcTo(246, 48, 234, 48, 0).arcTo(0, 48, 0, 36, 0).endFill().generateCanvasTexture()
                    }
                    show(t) {
                        var {
                            type: e,
                            title: i = ""
                        } = t;
                        this.background.texture = "win" === e ? this.textureWin : "lost" === e ? this.textureLost : this.textureBust, this.title.text = i, this.title.width > 246 && (this.background.width = this.title.width + 7), this.renderable = !0
                    }
                    hide() {
                        this.renderable = !1
                    }
                }
                class Ei extends(Ut(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "value", void 0), (0, n.Z)(this, "stack", void 0), (0, n.Z)(this, "saveValue", -1), this.stack = this.addChild(new Y.W2), this.value = this.addChild(new Si(30, 10)), this.value.position.set(48, 120)
                    }
                    update(t, e) {
                        t !== this.saveValue && (this.reset(), this.value.renderable = !0, this.saveValue = t, e.forEach(((t, e) => {
                            var i = new Ae(t, !0);
                            e % 2 == 0 ? i.position.set(2 * e / -1) : i.position.set(2 * e), this.stack.addChild(i)
                        })), this.value.update("".concat(this.game.helpers.toMoney(t))))
                    }
                    prepareToMove() {
                        this.value.renderable = !1
                    }
                    reset() {
                        for (this.saveValue = -1; this.stack.children[0];) this.stack.removeChild(this.stack.children[0])
                    }
                }
                class Bi extends(Ut(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "commonStack", void 0), (0, n.Z)(this, "winnerStack", void 0), this.commonStack = this.addChild(new Ei), this.winnerStack = this.addChild(new Ei), this.winnerStack.renderable = !1
                    }
                    bust() {
                        var t = this;
                        return (0, a.Z)((function*() {
                            yield t.lost(), t.hide()
                        }))()
                    }
                    lost() {
                        var t = this.commonStack.getGlobalPosition().x / (window.innerWidth / this.game.viewport.width);
                        return this.commonStack.prepareToMove(), new Promise((e => {
                            var i = {
                                x: 0,
                                y: 0
                            };
                            A.to(i, .5, {
                                x: this.game.viewport.width / 2 - t - 60,
                                y: -this.game.viewport.height,
                                onUpdate: () => {
                                    this.commonStack.position.set(i.x, i.y), this.winnerStack.position.set(i.x, i.y)
                                },
                                onComplete: e
                            })
                        }))
                    }
                    double(t, e) {
                        var i = this.addChild(new Ae(e[e.length - 1], !0)),
                            s = this.commonStack.getGlobalPosition().x / (window.innerWidth / this.game.viewport.width);
                        return new Promise((a => {
                            var n = {
                                x: this.game.viewport.width / 2 - s - 60,
                                y: this.game.viewport.height
                            };
                            A.to(n, .5, {
                                x: this.commonStack.x,
                                y: this.commonStack.y,
                                onUpdate: () => {
                                    i.position.set(n.x, n.y)
                                },
                                onComplete: () => {
                                    this.commonStack.update(t, e), this.removeChild(i), a()
                                }
                            })
                        }))
                    }
                    sendInsurance() {
                        var t = this.winnerStack.getGlobalPosition().x / (window.innerWidth / this.game.viewport.width);
                        return this.winnerStack.prepareToMove(), new Promise((e => {
                            var i = {
                                x: this.winnerStack.x,
                                y: this.winnerStack.y
                            };
                            A.to(i, .5, {
                                x: this.game.viewport.width / 2 - t + 60,
                                y: -this.game.viewport.height,
                                onUpdate: () => {
                                    this.winnerStack.position.set(i.x, i.y)
                                },
                                onComplete: () => {
                                    this.winnerStack.renderable = !1, e()
                                }
                            })
                        }))
                    }
                    insurance(t, e) {
                        this.winnerStack.update(t, e), this.winnerStack.position.set(this.commonStack.x + this.commonStack.width + 10, this.commonStack.y - 40);
                        var i = this.addChild(new Ae(e[e.length - 1], !0)),
                            s = this.winnerStack.getGlobalPosition().x / (window.innerWidth / this.game.viewport.width);
                        return new Promise((t => {
                            var e = {
                                x: this.game.viewport.width / 2 - s - 60,
                                y: this.game.viewport.height
                            };
                            A.to(e, .5, {
                                x: this.winnerStack.x,
                                y: this.winnerStack.y,
                                onUpdate: () => {
                                    i.position.set(e.x, e.y)
                                },
                                onComplete: () => {
                                    this.winnerStack.renderable = !0, this.removeChild(i), t()
                                }
                            })
                        }))
                    }
                    win(t, e) {
                        var i = this.commonStack.getGlobalPosition(),
                            s = i.x / (window.innerWidth / this.game.viewport.width),
                            a = i.y / (window.innerHeight / this.game.viewport.height);
                        return this.winnerStack.update(t, e), this.winnerStack.position.set(this.game.viewport.width / 2 - s - 60, -a - 100), this.winnerStack.renderable = !0, new Promise((t => {
                            var e = {
                                x: this.winnerStack.x,
                                y: this.winnerStack.y
                            };
                            A.to(e, .5, {
                                x: this.commonStack.x + this.commonStack.width + 10,
                                y: this.commonStack.y - 40,
                                onUpdate: () => {
                                    this.winnerStack.position.set(e.x, e.y)
                                },
                                onComplete: () => {
                                    t()
                                }
                            })
                        }))
                    }
                    collect() {
                        var t = this.commonStack.getGlobalPosition().y / (window.innerHeight / this.game.viewport.height);
                        return this.winnerStack.prepareToMove(), this.commonStack.prepareToMove(), new Promise((e => {
                            var i = {
                                y: 0
                            };
                            A.to(i, .3, {
                                y: this.game.viewport.height - t,
                                onUpdate: () => {
                                    this.commonStack.y = i.y, this.winnerStack.y = i.y
                                },
                                onComplete: () => {
                                    this.hide(), e()
                                }
                            })
                        }))
                    }
                    hide() {
                        this.renderable = !1, this.commonStack.reset(), this.commonStack.position.set(0, 0), this.winnerStack.reset(), this.winnerStack.renderable = !1
                    }
                    update(t, e) {
                        this.commonStack.update(t, e)
                    }
                }
                class _i extends(Ut(Y.W2)) {
                    constructor(t) {
                        var {
                            data: e
                        } = t;
                        super(), (0, n.Z)(this, "value", void 0), (0, n.Z)(this, "cards", void 0), (0, n.Z)(this, "stack", void 0), (0, n.Z)(this, "status", void 0), (0, n.Z)(this, "activeArrow", void 0), (0, n.Z)(this, "activeArrowTween", void 0), (0, n.Z)(this, "activeBorder", void 0), (0, n.Z)(this, "blackjack", void 0), (0, n.Z)(this, "staticCard", void 0), (0, n.Z)(this, "currentCardIndex", 0), (0, n.Z)(this, "gameover", !1), (0, n.Z)(this, "data", void 0), this.data = e, this.renderable = !1, this.interactive = !1, this.status = new Pi, this.value = new Si(60, 20), this.value.position.set(Ee / 2, -40), this.activeBorder = new J.j(this.game.loader.getAsset("active_hand")), this.activeBorder.anchor.set(0, 1), this.activeBorder.renderable = !1, this.activeArrow = new J.j(this.game.loader.getAsset("active_arrow")), this.activeArrow.anchor.set(.5), this.activeArrow.position.set(Ee / 2, -80), this.activeArrow.renderable = !1, this.blackjack = new J.j(this.game.loader.getAsset("blackjack")), this.blackjack.position.set(6.5, 130), this.blackjack.renderable = !1, this.cards = new Y.W2, this.cards.position.set(0, 0), this.stack = new Bi, this.stack.renderable = !1, this.stack.position.set(0, 290), this.staticCard = new xe("STATIC"), this.staticCard.anchor.x = 0, this.staticCard.renderable = !1, this.addChild(this.activeArrow), this.addChild(this.activeBorder), this.addChild(this.value), this.addChild(this.cards), this.addChild(this.status), this.addChild(this.stack), this.addChild(this.staticCard), this.addChild(this.blackjack)
                    }
                    rotationCard(t) {
                        return (0, a.Z)((function*() {
                            return t.renderable = !0, new Promise((e => {
                                t.scale.x = .5, A.to(t, .2, {
                                    pixi: {
                                        scaleX: 1
                                    },
                                    onComplete: e
                                })
                            }))
                        }))()
                    }
                    addCard() {
                        var t = this;
                        return (0, a.Z)((function*() {
                            var e = t.data.getCards(),
                                i = e[t.currentCardIndex],
                                s = e.length > 2 ? 2 : 1;
                            if (i) {
                                var a = t.cards.addChild(new xe(i));
                                a.anchor.x = .5, a.renderable = !1, t.cards.children.forEach(((t, e) => {
                                    t.position.set(e % 3 * (Ee - t.width) / s + 78, 60 * Math.floor(e / 3))
                                })), yield t.rotationCard(a), t.currentCardIndex++
                            }
                        }))()
                    }
                    split(t) {
                        if (this.renderable = this.data.isVisible(), this.value.renderable = !1, this.stack.renderable = !1, this.activeArrow.renderable = !1, this.activeBorder.renderable = !1, t) this.cards.removeChild(this.cards.children[this.cards.children.length - 1]), this.currentCardIndex--;
                        else {
                            this.currentCardIndex = 0;
                            var e = this.data.getCards(),
                                i = e.length > 2 ? 2 : 1,
                                s = e[0];
                            if (s) this.cards.addChild(new xe(s)).anchor.x = .5, this.currentCardIndex++;
                            this.cards.children.forEach(((t, e) => {
                                t.position.set(e % 3 * (Ee - t.width) / i + 78, 60 * Math.floor(e / 3))
                            }))
                        }
                    }
                    deal() {
                        this.renderable = this.data.isVisible()
                    }
                    restore() {
                        this.renderable = this.data.isVisible();
                        var t = this.data.getCards(),
                            e = t.length > 2 ? 2 : 1;
                        t.forEach((t => {
                            this.cards.addChild(new xe(t)).anchor.x = .5, this.currentCardIndex++
                        })), this.cards.children.forEach(((t, i) => {
                            t.position.set(i % 3 * (Ee - t.width) / e + 78, 60 * Math.floor(i / 3))
                        })), this.stack.update(this.data.getTotalBet(), this.data.getStack(this.data.getTotalBet())), this.data.isSoft() && !this.data.blackJack ? this.value.update("".concat(this.data.getHardValue(), "/").concat(this.data.getSoftValue())) : this.value.update(this.data.getSoftValue()), this.stack.renderable = !0, this.value.renderable = !0, this.data.blackJack && !this.blackjack.renderable && (this.blackjack.renderable = !0), this.status.position.set(6.5, (this.cards.height - this.status.height) / 2), this.data.isBust() ? (this.gameover = !0, this.status.show({
                            type: "bust",
                            title: this.game.i18n.t("STATUS_LINE_BUST").toUpperCase()
                        }), this.stack.hide()) : this.data.isInsurance() ? this.status.show({
                            type: "insurance",
                            title: this.game.i18n.t("STATUS_LINE_INSURANCE")
                        }) : this.data.isEvenMoney() ? this.status.show({
                            type: "evenmoney",
                            title: this.game.i18n.t("STATUS_LINE_EVENMONEY")
                        }) : this.status.hide(), this.active()
                    }
                    update() {
                        var t = this;
                        return (0, a.Z)((function*() {
                            t.gameover || (t.stack.update(t.data.getTotalBet(), t.data.getStack(t.data.getTotalBet())), t.data.isSoft() && !t.data.blackJack ? t.value.update("".concat(t.data.getHardValue(), "/").concat(t.data.getSoftValue())) : t.value.update(t.data.getSoftValue()), t.stack.renderable = !0, t.value.renderable = !0, t.data.blackJack && !t.blackjack.renderable && (t.game.sound.blackjack(), t.blackjack.renderable = !0), t.status.position.set(6.5, (t.cards.height - t.status.height) / 2), t.data.isBust() ? (t.game.sound.dropChips(), t.gameover = !0, t.status.show({
                                type: "bust",
                                title: t.game.i18n.t("STATUS_LINE_BUST").toUpperCase()
                            }), yield t.stack.bust()) : t.status.hide())
                        }))()
                    }
                    active() {
                        this.data.isActive() ? (this.activeBorder.position.set(0, this.cards.y + this.cards.height), this.activeBorder.renderable = !0, this.activeArrow.renderable = !0, this.activeArrow.y -= 10, this.activeArrowTween = A.to(this.activeArrow, .8, {
                            pixi: {
                                y: -80
                            },
                            repeat: 1 / 0,
                            yoyo: !0,
                            ease: "Linear.easeNone"
                        }), this.status.position.set(6.5, (this.cards.height - this.status.height) / 2), this.data.isInsurance() ? this.status.show({
                            type: "insurance",
                            title: this.game.i18n.t("STATUS_LINE_INSURANCE")
                        }) : this.data.isEvenMoney() ? this.status.show({
                            type: "evenmoney",
                            title: this.game.i18n.t("STATUS_LINE_EVENMONEY")
                        }) : this.status.hide()) : (this.activeBorder.renderable = !1, this.activeArrow.renderable = !1, this.activeArrowTween && this.activeArrowTween.kill())
                    }
                    canAdd() {
                        return this.data.getCards().length !== this.cards.children.length
                    }
                    double() {
                        var t = this;
                        return (0, a.Z)((function*() {
                            t.game.sound.putChips(), t.data.canDouble() && t.data.isActive() && (yield t.stack.double(t.data.getTotalBet(), t.data.getStack(t.data.getTotalBet())))
                        }))()
                    }
                    insurance(t) {
                        var e = this;
                        return (0, a.Z)((function*() {
                            e.status.hide(), t && e.data.canInsurance() && e.data.isActive() && (e.game.sound.putChips(), yield e.stack.insurance(e.data.getInsuranceBet(), e.data.getStack(e.data.getInsuranceBet())))
                        }))()
                    }
                    sendInsurance() {
                        var t = this;
                        return (0, a.Z)((function*() {
                            t.data.canInsurance() && (yield t.stack.sendInsurance())
                        }))()
                    }
                    deactivate() {
                        this.activeArrow.renderable = !1, this.activeBorder.renderable = !1, this.activeArrowTween && this.activeArrowTween.kill()
                    }
                    reward(t) {
                        var e = this;
                        return (0, a.Z)((function*() {
                            if (e.activeArrow.renderable = !1, e.activeBorder.renderable = !1, e.value.renderable = !0, e.data.isSoft() && !e.data.blackJack ? e.value.update("".concat(e.data.getHardValue(), "/").concat(e.data.getSoftValue())) : e.value.update(e.data.getSoftValue()), e.data.isWin()) {
                                e.game.sound.putChips();
                                var t = e.data.getWin(),
                                    i = e.data.getTotalBet();
                                e.status.show({
                                    type: "win",
                                    title: "".concat(e.game.i18n.t("STATUS_LINE_WIN").toUpperCase(), ": ").concat(e.game.helpers.toMoney(t))
                                }), yield e.stack.win(t - i, e.data.getStack(t - i))
                            } else e.data.isLost() ? (e.game.sound.dropChips(), e.status.show({
                                type: "lost",
                                title: e.game.i18n.t("STATUS_LINE_LOST").toUpperCase()
                            }), yield e.stack.lost(), e.stack.hide()) : e.data.isDraw() && e.status.show({
                                type: "draw",
                                title: e.game.i18n.t("STATUS_LINE_DRAW").toUpperCase()
                            });
                            e.status.position.set(6.5, (e.cards.height - e.status.height) / 2)
                        }))()
                    }
                    finish() {
                        for (this.renderable = !1; this.cards.children[0];) this.cards.removeChild(this.cards.children[0])
                    }
                    collect() {
                        var t = this;
                        return (0, a.Z)((function*() {
                            t.gameover = !1, t.currentCardIndex = 0, t.activeBorder.renderable = !1, t.activeArrow.renderable = !1, t.blackjack.renderable = !1, t.value.update(""), t.value.renderable = !1, t.status.hide(), t.data.isWin() || t.data.isDraw() ? (t.game.sound.dropChips(), yield t.stack.collect()) : t.stack.hide(), yield Promise.all([t.cards.children.map((t => new Promise((e => (t.x > 0 && A.to(t, .3, {
                                pixi: {
                                    x: 0,
                                    y: 0
                                },
                                ease: "Linear.easeNone",
                                onComplete: e
                            }), e())))))])
                        }))()
                    }
                    getCardPosition() {
                        var t = this.data.getCards().length > 2 ? 2 : 1;
                        return [this.currentCardIndex % 3 * (Ee - 156) / t + 78, 60 * Math.floor(this.currentCardIndex / 3)]
                    }
                }
                class Ri extends(Ut(Y.W2)) {
                    constructor(t) {
                        var {
                            data: e
                        } = t;
                        super(), (0, n.Z)(this, "chip", void 0), (0, n.Z)(this, "field", void 0), (0, n.Z)(this, "stack", void 0), (0, n.Z)(this, "handLeft", void 0), (0, n.Z)(this, "handRight", void 0), (0, n.Z)(this, "buttonUndo", void 0), (0, n.Z)(this, "buttonClear", void 0), (0, n.Z)(this, "backgroundTimeline", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "backgroundCircle1", void 0), (0, n.Z)(this, "backgroundCircle2", void 0), (0, n.Z)(this, "backgroundCircle3", void 0), (0, n.Z)(this, "backgroundCircle4", void 0), (0, n.Z)(this, "backgroundText", void 0), (0, n.Z)(this, "backgroundTween", void 0), (0, n.Z)(this, "value", void 0), (0, n.Z)(this, "data", void 0), (0, n.Z)(this, "handleUndo", (() => {
                            this.game.sound.dropChips(), this.data.undo(), this.updateStack(), 0 === this.stack.children.length && (this.value.renderable = !1, this.buttonUndo.visible = !1, this.buttonClear.visible = !1), this.value.update("".concat(this.game.helpers.toMoney(this.data.getValue()))), this.emit("change")
                        })), (0, n.Z)(this, "handleClear", (() => {
                            for (this.game.sound.dropChips(), this.data.reset(); this.stack.children[0];) this.stack.removeChild(this.stack.children[0]);
                            this.value.renderable = !1, this.buttonUndo.visible = !1, this.buttonClear.visible = !1, this.value.update("".concat(this.game.helpers.toMoney(this.data.getValue()))), this.emit("change")
                        })), (0, n.Z)(this, "handleOverIcon", (t => {
                            t.currentTarget.scale.set(1.1)
                        })), (0, n.Z)(this, "handleOutIcon", (t => {
                            t.currentTarget.scale.set(1)
                        })), (0, n.Z)(this, "handlePlaceOver", (t => {
                            var e = t.data.getLocalPosition(this.field);
                            this.chip.position.set(e.x - this.chip.width / 2, e.y - this.chip.height / 2), this.chip.visible = !0
                        })), (0, n.Z)(this, "handlePlaceOut", (() => {
                            this.chip.visible = !1
                        })), (0, n.Z)(this, "handlePlaceClick", (() => {
                            var t = this.chip.getValue();
                            this.data.canAdd(t) && (this.game.sound.putChips(), this.value.renderable = !0, this.buttonUndo.visible = !0, this.buttonClear.visible = !0, this.data.sitDown(t), this.value.update("".concat(this.game.helpers.toMoney(this.data.getValue()))), this.updateStack(), this.emit("change"))
                        })), (0, n.Z)(this, "handlePlaceMove", (t => {
                            if (this.chip.visible) {
                                var e = t.data.getLocalPosition(this.field);
                                this.chip.position.set(e.x - this.chip.width / 2, e.y - this.chip.height / 2)
                            }
                        })), this.data = e, this.field = new Y.W2, this.background = new Y.W2, this.background.buttonMode = !0, this.background.interactive = !0, this.background.cursor = "none", this.game.interaction.click(this.background, this.handlePlaceClick.bind(this)), this.game.device.desktop && (this.background.on("pointerover", this.handlePlaceOver), this.background.on("pointerout", this.handlePlaceOut), this.background.on("pointermove", this.handlePlaceMove)), this.backgroundText = this.background.addChild(new m.xv(this.game.i18n.t("PLACE_BET_TITLE"), {
                            fill: "rgba(242, 243, 247, 0.302)",
                            align: "center",
                            fontSize: 24,
                            fontFamily: "PlayBold"
                        })), this.backgroundText.anchor.set(.5), this.backgroundText.position.set(0, 5), this.backgroundCircle1 = this.background.addChild(new J.j((new u.TC).lineStyle(3, 16777215, .6).drawCircle(0, 0, 96).generateCanvasTexture())), this.backgroundCircle1.anchor.set(.5), this.backgroundCircle1.alpha = .7, this.backgroundCircle2 = this.background.addChild(new J.j((new u.TC).lineStyle(3, 16777215, .6).drawCircle(0, 0, 86).generateCanvasTexture())), this.backgroundCircle2.anchor.set(.5), this.backgroundCircle2.alpha = .5, this.backgroundCircle3 = this.background.addChild(new J.j((new u.TC).lineStyle(3, 16777215, .6).drawCircle(0, 0, 76).generateCanvasTexture())), this.backgroundCircle3.anchor.set(.5), this.backgroundCircle3.alpha = .3, this.backgroundCircle4 = this.background.addChild(new J.j((new u.TC).lineStyle(3, 16777215, .6).drawCircle(0, 0, 66).generateCanvasTexture())), this.backgroundCircle4.anchor.set(.5), this.backgroundCircle4.alpha = .1, this.background.position.set(this.background.width / 2, this.background.height / 2), this.stack = new Y.W2, this.stack.position.set(27), this.stack.hitArea = new G.Ae(0, 0, 0, 0), this.buttonUndo = new Ti("icon_undo_field", this.game.i18n.t("PLACE_BET_BUTTON_UNDO").toUpperCase()), this.buttonUndo.position.set(-this.buttonUndo.width / 2 - 20, this.background.height / 2), this.buttonUndo.visible = !1, this.game.interaction.click(this.buttonUndo, this.handleUndo.bind(this)), this.game.device.desktop && (this.buttonUndo.on("pointerover", this.handleOverIcon), this.buttonUndo.on("pointerout", this.handleOutIcon)), this.buttonClear = new Ti("icon_clear_field", this.game.i18n.t("PLACE_BET_BUTTON_CLEAR").toUpperCase()), this.buttonClear.position.set(this.background.width + this.buttonClear.width / 2 + 20, this.background.height / 2), this.buttonClear.visible = !1, this.game.interaction.click(this.buttonClear, this.handleClear.bind(this)), this.game.device.desktop && (this.buttonClear.on("pointerover", this.handleOverIcon), this.buttonClear.on("pointerout", this.handleOutIcon)), this.value = new Si(40, 15), this.value.renderable = !1, this.value.position.set(this.background.width / 2, -40), this.value.update("".concat(this.game.helpers.toMoney(this.data.getValue()))), this.field.addChild(this.background), this.field.addChild(this.buttonUndo), this.field.addChild(this.buttonClear), this.field.addChild(this.stack), this.field.addChild(this.value), this.field.pivot.set(this.field.width / 2, 0), this.field.position.set(Ee / 2, 150), this.handLeft = new _i({
                            data: this.data.getHand(Fe.Left)
                        }), this.handRight = new _i({
                            data: this.data.getHand(Fe.Right)
                        }), this.addChild(this.field), this.addChild(this.handLeft), this.addChild(this.handRight), this.resize(), this.tweenBackground()
                    }
                    tweenBackground() {
                        this.backgroundText.scale.set(1), this.backgroundTimeline = A.to(this.backgroundText, 1.2, {
                            pixi: {
                                scale: 1.15
                            },
                            repeat: 1 / 0,
                            yoyo: !0
                        })
                    }
                    resetTweenBackground() {
                        this.backgroundTimeline && (this.backgroundTimeline.kill(), this.backgroundTimeline = null)
                    }
                    updateStack() {
                        var t = this.data.getStack();
                        this.resetStack(), t.forEach(((t, e) => {
                            var i = new Ae(t),
                                s = Oe.getRandomArbitrary(1, 3);
                            e % 2 == 0 ? i.position.set(s * e / -1) : i.position.set(s * e), this.stack.addChild(i)
                        }))
                    }
                    resetStack() {
                        for (; this.stack.children[0];) this.stack.removeChild(this.stack.children[0])
                    }
                    getRightCardPosition() {
                        var t = this.handRight.getCardPosition();
                        return [this.x + this.handRight.x + t[0], this.y + this.handRight.y + t[1]]
                    }
                    getLeftCardPosition() {
                        var t = this.handLeft.getCardPosition();
                        return [this.x + this.handLeft.x + t[0], this.y + this.handLeft.y + t[1]]
                    }
                    addCardToRight() {
                        var t = this;
                        return (0, a.Z)((function*() {
                            yield t.handRight.addCard()
                        }))()
                    }
                    addCardToLeft() {
                        var t = this;
                        return (0, a.Z)((function*() {
                            yield t.handLeft.addCard()
                        }))()
                    }
                    canRight() {
                        return this.handRight.canAdd()
                    }
                    canLeft() {
                        return this.handLeft.canAdd()
                    }
                    setActive() {
                        this.handLeft.active(), this.handRight.active()
                    }
                    updateLeftHand() {
                        var t = this;
                        return (0, a.Z)((function*() {
                            yield t.handLeft.update()
                        }))()
                    }
                    updateRightHand() {
                        var t = this;
                        return (0, a.Z)((function*() {
                            yield t.handRight.update()
                        }))()
                    }
                    setChip(t) {
                        this.chip ? this.chip.change(t) : (this.chip = new Ae(t), this.chip.interactive = !1, this.field.addChild(this.chip)), this.chip.visible = !1
                    }
                    isAvail() {
                        return this.data.getValue() > 0
                    }
                    isActive() {
                        return this.data.isActive()
                    }
                    restore() {
                        this.resetTweenBackground(), this.field.visible = !1, this.value.renderable = !1, this.buttonUndo.visible = !1, this.buttonClear.visible = !1, this.data.isSplit() && (this.handLeft.position.x = -135, this.handRight.position.x = 135), this.handRight.restore(), this.handLeft.restore()
                    }
                    insurance(t) {
                        var e = this;
                        return (0, a.Z)((function*() {
                            yield e.handRight.insurance(t)
                        }))()
                    }
                    sendInsurance() {
                        var t = this;
                        return (0, a.Z)((function*() {
                            yield t.handRight.sendInsurance()
                        }))()
                    }
                    double(t) {
                        var e = this;
                        return (0, a.Z)((function*() {
                            "left" === t ? yield e.handLeft.double(): yield e.handRight.double()
                        }))()
                    }
                    deal() {
                        this.field.visible = !1, this.value.renderable = !1, this.buttonUndo.visible = !1, this.buttonClear.visible = !1, this.handRight.deal(), this.handLeft.deal()
                    }
                    deactivate() {
                        this.handRight.deactivate(), this.handLeft.deactivate()
                    }
                    reward(t) {
                        return Promise.all([this.handLeft.reward(t), this.handRight.reward(t)])
                    }
                    moveLeft() {
                        return new Promise((t => {
                            this.handLeft.x = 0, A.to(this.handLeft, .3, {
                                pixi: {
                                    x: -135
                                },
                                onComplete: t
                            })
                        }))
                    }
                    moveRight() {
                        return new Promise((t => {
                            this.handLeft.x = 0, A.to(this.handRight, .3, {
                                pixi: {
                                    x: 135
                                },
                                onComplete: t
                            })
                        }))
                    }
                    split() {
                        return this.handLeft.split(!1), this.handRight.split(!0), Promise.all([this.moveRight(), this.moveLeft()])
                    }
                    rebet() {
                        this.handRight.finish(), this.handLeft.finish()
                    }
                    finish() {
                        this.resetStack(), this.handRight.finish(), this.handLeft.finish(), this.handRight.position.x = 0, this.handLeft.position.x = 0, this.value.update("".concat(this.game.helpers.toMoney(0))), this.field.visible = !0
                    }
                    collect() {
                        var t = this;
                        return (0, a.Z)((function*() {
                            yield Promise.all([t.handRight.collect(), t.handLeft.collect()]), t.handRight.position.x = 0, t.handLeft.position.x = 0
                        }))()
                    }
                    resize() {}
                }
                class Li extends Y.W2 {
                    constructor(t) {
                        var {
                            data: e
                        } = t;
                        super(), (0, n.Z)(this, "cards", void 0), (0, n.Z)(this, "backCard", void 0), (0, n.Z)(this, "blackjack", void 0), (0, n.Z)(this, "checkBlackjack", void 0), (0, n.Z)(this, "value", void 0), (0, n.Z)(this, "currentCardIndex", 0), (0, n.Z)(this, "data", void 0), this.data = e, this.renderable = !1, this.interactive = !1, this.cards = new Y.W2, this.backCard = new J.j(It.loader.getAsset("STATIC", "cards")), this.backCard.anchor.x = .5, this.value = new Si(60, 20), this.value.position.set(-60, 105), this.blackjack = new J.j(It.loader.getAsset("blackjack")), this.blackjack.position.set(6.5, 130), this.blackjack.renderable = !1, this.checkBlackjack = new J.j(It.loader.getAsset("blackjack_check")), this.checkBlackjack.position.set(130, 135), this.checkBlackjack.anchor.x = .5, this.checkBlackjack.renderable = !1, this.addChild(this.cards), this.addChild(this.value), this.addChild(this.blackjack), this.addChild(this.checkBlackjack)
                    }
                    resetCards() {
                        for (; this.cards.children[0];) this.cards.removeChild(this.cards.children[0])
                    }
                    addCard() {
                        var t = this;
                        return (0, a.Z)((function*() {
                            t.value.renderable = !1;
                            var e = t.data.getCards()[t.currentCardIndex];
                            if (e) {
                                var i = new xe(e);
                                i.anchor.x = .5, i.renderable = !1, i.position.set(t.currentCardIndex * Pe + i.width / 2, 0), t.cards.addChild(i), yield t.rotationCard(i), t.currentCardIndex++
                            }
                        }))()
                    }
                    addStaticCard() {
                        var t = this;
                        return (0, a.Z)((function*() {
                            t.value.renderable = !0, t.value.update(t.data.getValue()), t.backCard.scale.x = 1, t.backCard.position.set(t.currentCardIndex * (Ee - t.backCard.width / 2), 0), t.cards.addChild(t.backCard)
                        }))()
                    }
                    rotationCard(t) {
                        return (0, a.Z)((function*() {
                            return t.renderable = !0, new Promise((e => {
                                t.scale.x = .5, A.to(t, .2, {
                                    ease: "Linear.easeNone",
                                    pixi: {
                                        scaleX: 1
                                    },
                                    onComplete: e
                                })
                            }))
                        }))()
                    }
                    deal() {
                        this.renderable = !0
                    }
                    restore() {
                        this.renderable = !0;
                        var t = this.data.getCards();
                        this.data.getCards().forEach((t => {
                            var e = new xe(t);
                            e.anchor.x = .5, e.position.set(this.currentCardIndex * Pe + e.width / 2, 0), this.cards.addChild(e)
                        })), this.currentCardIndex = t.length, this.addStaticCard(), this.value.update(this.data.getValue())
                    }
                    openBackCard() {
                        this.value.renderable = !1;
                        var t = this.data.getCards(),
                            e = t[this.currentCardIndex];
                        if (e) {
                            var i = this.currentCardIndex * Pe + 78,
                                s = new xe(e);
                            return s.anchor.x = .5, s.scale.x = 0, s.position.set(this.backCard.x, 0), this.cards.addChild(s), this.currentCardIndex++, It.sound.showCard(), new Promise((e => {
                                var a = {
                                    x: this.backCard.scale.x
                                };
                                A.to(a, .3, {
                                    x: 0,
                                    onUpdate: () => {
                                        this.backCard.scale.x = a.x.toFixed(1), s.scale.x = (1 - a.x).toFixed(1)
                                    },
                                    onComplete: () => {
                                        this.backCard.renderable = !1, t.length > 2 ? A.to(s, .1, {
                                            pixi: {
                                                x: i
                                            },
                                            onComplete: e
                                        }) : e()
                                    }
                                })
                            }))
                        }
                    }
                    checkingBlackjack() {
                        var t = this;
                        return (0, a.Z)((function*() {
                            var e = t.data.getValue();
                            (e >= 10 || 1 === e) && (t.checkBlackjack.renderable = !0, yield Oe.delay(1500), t.checkBlackjack.renderable = !1)
                        }))()
                    }
                    reward() {
                        this.value.update(this.data.getValue()), this.value.renderable = !0, this.data.isBlackjack() && !this.blackjack.renderable && (this.blackjack.renderable = !0)
                    }
                    getLimit() {
                        return this.data.getCards().length - this.currentCardIndex
                    }
                    rebet() {
                        this.finish()
                    }
                    finish() {
                        this.resetCards(), this.renderable = !1, this.value.renderable = !1, this.currentCardIndex = 0, this.blackjack.renderable = !1, this.backCard.renderable = !0
                    }
                    collect() {
                        var t = this;
                        return (0, a.Z)((function*() {
                            return t.value.renderable = !1, t.blackjack.renderable = !1, Promise.all([t.cards.children.map((t => new Promise((e => (t.x > 0 && A.to(t, .3, {
                                ease: "Linear.easeNone",
                                pixi: {
                                    x: 0
                                },
                                onComplete: e
                            }), e())))))])
                        }))()
                    }
                    getCardPosition() {
                        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? [this.x + this.currentCardIndex * (Ee - this.backCard.width / 2), this.y] : [this.x + this.currentCardIndex * Pe + 78, this.y]
                    }
                }
                class Oi extends R {
                    constructor(t, e, i) {
                        super(t, e, i), (0, n.Z)(this, "soundBackground", void 0), (0, n.Z)(this, "soundBlackjack", void 0), (0, n.Z)(this, "soundCardDeal", void 0), (0, n.Z)(this, "soundClickNormal", void 0), (0, n.Z)(this, "soundDiscardCard", void 0), (0, n.Z)(this, "soundDropChips", void 0), (0, n.Z)(this, "soundPutChips", void 0), (0, n.Z)(this, "soundShowCard", void 0), (0, n.Z)(this, "soundSplitCard", void 0), this.soundBackground = this.get("sound_background"), this.soundCardDeal = this.get("sound_card_deal"), this.soundClickNormal = this.get("clickNormal"), this.soundDiscardCard = this.get("sound_discard_cards"), this.soundDropChips = this.get("sound_drop_chips"), this.soundPutChips = this.get("sound_put_chips"), this.soundShowCard = this.get("sound_show_card"), this.soundSplitCard = this.get("sound_split_cards"), this.soundBlackjack = this.get("sound_blackjack")
                    }
                    startGame() {
                        this.soundBackground.play()
                    }
                    cardDeal() {
                        this.soundCardDeal.play()
                    }
                    clickNormal() {
                        this.soundClickNormal.play()
                    }
                    discardCards() {
                        this.soundDiscardCard.play()
                    }
                    dropChips() {
                        this.soundDropChips.play()
                    }
                    putChips() {
                        this.soundPutChips.play()
                    }
                    showCard() {
                        this.soundShowCard.play()
                    }
                    splitCards() {
                        this.soundSplitCard.play()
                    }
                    blackjack() {
                        this.soundBlackjack.play()
                    }
                }
                class Zi extends Y.W2 {
                    constructor(t) {
                        super(), this.onResize = t
                    }
                    resize() {
                        this.onResize()
                    }
                }
                new class extends class extends class extends class {
                    constructor(t) {
                        var {
                            availableLanguages: e
                        } = t;
                        (0, n.Z)(this, "rootNode", void 0), (0, n.Z)(this, "renderer", void 0), (0, n.Z)(this, "logger", void 0), (0, n.Z)(this, "i18n", void 0), (0, n.Z)(this, "helpers", void 0), (0, n.Z)(this, "keyboard", void 0), (0, n.Z)(this, "device", void 0), (0, n.Z)(this, "viewport", void 0), (0, n.Z)(this, "leftHand", void 0), (0, n.Z)(this, "fullscreen", void 0), (0, n.Z)(this, "visibility", void 0), (0, n.Z)(this, "preferences", void 0), (0, n.Z)(this, "sound", void 0), (0, n.Z)(this, "state", void 0), (0, n.Z)(this, "store", void 0), (0, n.Z)(this, "action", void 0), (0, n.Z)(this, "config", void 0), (0, n.Z)(this, "loader", void 0), (0, n.Z)(this, "error", void 0), (0, n.Z)(this, "interaction", void 0), (0, n.Z)(this, "popupManager", void 0), (0, n.Z)(this, "externalApi", void 0), (0, n.Z)(this, "_globals", new Map), (0, n.Z)(this, "settings", {
                            size: [1920, 1080]
                        }), (0, n.Z)(this, "tick", (() => {
                            $.vB.shared.update(), this.renderer.render(this.rootNode)
                        })), (0, n.Z)(this, "destroy", (() => {
                            T.removeEventListener("tick", this.tick), $.vB.shared.destroy(), tt.destroyTextureCache(), this.renderer.destroy(), this.loader.destroy()
                        })), It = this, $.vB.shared.autoStart = !1, $.vB.shared.stop(), this.config = new nt(Ot), this.logger = new xt, this.rootNode = this.createRootNode(), this.renderer = new At, this.i18n = new mt(e), this.helpers = new vt(this.config), this.keyboard = new yt, this.device = new pt(this.renderer), this.viewport = new _t, this.leftHand = new dt, this.fullscreen = this.device.ios || this.device.iPadPro ? new ht : new lt(this.device), this.visibility = new Ft, this.preferences = new Wt, this.sound = new R(this.device, this.visibility, this.preferences), this.state = new Bt, this.store = new nt, this.action = new ut, this.loader = new kt(this.device), this.error = new gt, this.interaction = new bt(this.device), this.externalApi = new Lt(this), this.popupManager = new Mt(this.rootNode), this.create(), this.initAnalytics()
                    }
                    initAnalytics() {
                        return (0, a.Z)((function*() {
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
                        return new Rt
                    }
                    create() {
                        var t = this.rootNode.addChild(new u.TC);
                        t.lineStyle(0), t.beginFill(0), t.drawRect(1, 1, this.settings.size[0] - 2, this.settings.size[1] - 2), t.endFill();
                        var e = () => {
                            this.device.ios && this.fullscreen.toggle(), this.renderer.resize(this.device.width, this.device.height), this.device.desktop || this.device.landscape ? (this.viewport.resize(this.settings.size[0], this.settings.size[1]), this.rootNode.scale.set(this.viewport.aspectRatio), this.rootNode.pivot.set(this.viewport.width / 2, this.viewport.height / 2), this.rootNode.position.set(this.device.width / 2, this.device.height / 2), this.rootNode.mask = t) : (this.viewport.resize(this.settings.size[1], this.settings.size[0]), this.rootNode.scale.set(this.viewport.aspectRatio), this.rootNode.pivot.set(this.viewport.width / 2, 0), this.rootNode.position.set(this.device.width / 2, 0), this.rootNode.mask = null), this.viewport.emit("resize"), this.renderer.render(this.rootNode)
                        };
                        T.addEventListener("tick", this.tick), window.addEventListener("unload", this.destroy), window.addEventListener("resize", e), window.addEventListener("load", e), window.addEventListener("orientationchange", (() => setTimeout(e, 350))), document.addEventListener("keydown", (t => {
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
                        super(t), e = this, (0, n.Z)(this, "server", void 0), (0, n.Z)(this, "launcher", void 0), (0, n.Z)(this, "catchError", function() {
                            var t = (0, a.Z)((function*(t) {
                                var i, s;
                                if ([Tt.SPENDING_BUDGET_EXCEEDED, Tt.INSUFFICIENT_BALANCE, Tt.MAX_BET_LIMIT_EXCEEDED].includes(null == t ? void 0 : t.message)) {
                                    var a, [n] = yield Promise.all([null === (a = e.popupManager) || void 0 === a ? void 0 : a.show({
                                        [Tt.SPENDING_BUDGET_EXCEEDED]: "PopupSpendingBudget",
                                        [Tt.MAX_BET_LIMIT_EXCEEDED]: "PopupMaxLimit",
                                        [Tt.INSUFFICIENT_BALANCE]: "PopupZeroBalance"
                                    }[null == t ? void 0 : t.message]), e.onProcessError(null == t ? void 0 : t.message)]);
                                    return n
                                }
                                null === (s = e.sound) || void 0 === s || s.mute("all", !0, !1);
                                var [o] = yield Promise.all([null === (i = e.popupManager) || void 0 === i ? void 0 : i.show(window.navigator.onLine && "Network Error" !== (null == t ? void 0 : t.message) ? "PopupUnexpectedError" : "PopupNetworkError"), e.onProcessError(null == t ? void 0 : t.message)]);
                                return o
                            }));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()), this.server = this.enhanceServer(new Pt), this.server.on("response", this.onServerResponse, this)
                    }
                    init(t, e) {
                        var i = this;
                        return (0, a.Z)((function*() {
                            var s;
                            i.preferences.setPrefix(null !== (s = null == e ? void 0 : e.name) && void 0 !== s ? s : ""), i.initPopups(), yield i.connect(t), i.initModules(e), yield i.initSound(), yield i.showIntroScreen(), i.initViews(), i.mountViews(), i.initStates(), i.start()
                        }))()
                    }
                    initPopups() {
                        this.popupManager.add([new ne, new de, new ae, new le, new he, new se, new oe, new re, new ce, new ee, new ue])
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
                        return (0, a.Z)((function*() {
                            var i = t.length > 0 && void 0 !== t[0] ? t[0] : {};
                            if ("en" !== e.i18n.language) {
                                var s = "cn" === e.i18n.language ? "zh_CN" : e.i18n.language;
                                try {
                                    var [a, n] = yield Promise.all([fetch("translations/strings_".concat(s, ".json")).then((t => t.json())), fetch("translations/shared/strings_".concat(s, ".json")).then((t => t.json()))]);
                                    e.i18n.setTranslations(ge(ge(ge({}, i), n), a))
                                } catch (t) {
                                    e.i18n.setTranslations(i)
                                }
                            } else e.i18n.setTranslations(i)
                        }))()
                    }
                    initRequest() {
                        var t = this;
                        return (0, a.Z)((function*() {
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
                        return (0, a.Z)((function*() {
                            e.launcher = e.rootNode.addChild(new zt);
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
                        var e, i, s, a, n, o = this.store.get("server:response.init");
                        this.config.merge(t, ge({
                            gameId: null !== (e = null == o ? void 0 : o.gameId) && void 0 !== e ? e : "",
                            gameName: null !== (i = null == o ? void 0 : o.gameName) && void 0 !== i ? i : "",
                            homeURL: null !== (s = null == o ? void 0 : o.homeURL) && void 0 !== s ? s : "javascript:history.back()"
                        }, null == o ? void 0 : o.gameConfig)), this.preferences.setPrefix(null !== (a = null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : null == o ? void 0 : o.gameId) && void 0 !== a ? a : "")
                    }
                    showIntroScreen() {
                        return (0, a.Z)((function*() {}))()
                    }
                    initSound() {
                        var t = this;
                        return (0, a.Z)((function*() {
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
                        return (0, a.Z)((function*() {}))()
                    }
                    onServerResponse(t) {}
                    enhanceServer(t) {
                        return this.store.set("server:action", ""), this.store.set("server:nextAction", ""), this.store.set("server:availableActions", []), t.on("response", (t => {
                            this.store.set("server:action", t.action), this.store.set("server:response.current", t), this.store.set("server:response.".concat(t.action), t), t.nextAction && this.store.set("server:nextAction", t.nextAction), t.availableActions && this.store.set("server:availableActions", t.availableActions)
                        })), t.transformRequest([t => ge(ge({}, t), {}, {
                            action: "spin" === t.action ? this.store.get("server:nextAction") : t.action
                        })]), t
                    }
                } {
                    initPopups() {
                        this.popupManager.add([new ne, new ae, new he, new se, new oe, new re, new ee])
                    }
                } {
                    constructor() {
                        super({}), (0, n.Z)(this, "game", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "betLimits", void 0), (0, n.Z)(this, "controls", void 0), (0, n.Z)(this, "chips", void 0), (0, n.Z)(this, "table", void 0), (0, n.Z)(this, "menu", void 0), (0, n.Z)(this, "paytable", void 0), (0, n.Z)(this, "placeLeft", void 0), (0, n.Z)(this, "placeCenter", void 0), (0, n.Z)(this, "placeRight", void 0), (0, n.Z)(this, "placeDealer", void 0), (0, n.Z)(this, "history", void 0), (0, n.Z)(this, "staticCard", void 0), (0, n.Z)(this, "main", void 0), this.game = new Ye, this.main = this.rootNode.addChild(new Y.W2), this.viewport.on("resize", this.resize, this), this.init(fe, {})
                    }
                    loadTranslations() {
                        var t = () => super.loadTranslations,
                            e = this;
                        return (0, a.Z)((function*() {
                            return t().call(e, ye)
                        }))()
                    }
                    initRequest() {
                        var t = this;
                        return (0, a.Z)((function*() {
                            try {
                                yield t.game.doAction(ze.Init)
                            } catch (e) {
                                throw t.launcher.reset(), e
                            }
                        }))()
                    }
                    connect(t) {
                        var e = this;
                        return (0, a.Z)((function*() {
                            e.launcher = e.main.addChild(new zt);
                            try {
                                var [i] = yield Promise.all([e.game.getHistory(), e.loadTranslations(), e.loadAssets(t), e.initRequest()]);
                                e.history = new Ge, e.history.position.set(40), e.history.update(i)
                            } catch (t) {
                                throw e.catchError(t), t
                            } finally {
                                e.main.removeChild(e.launcher)
                            }
                        }))()
                    }
                    initModules(t) {
                        super.initModules(t), this.sound = new Oi(this.device, this.visibility, this.preferences)
                    }
                    initViews() {
                        super.initViews(), this.background = new Ce, this.betLimits = new ke(this.game), this.table = new Zi((() => {
                            this.table.children.forEach((t => t.resize && t.resize())), this.updatePlacePosition()
                        })), this.device.desktop ? this.controls = new Le : this.controls = new Ie, this.chips = new Se(this.game.getBets(), this.game.getActiveBet()), this.placeDealer = new Li({
                            data: this.game.getPlaceDealer()
                        }), this.placeLeft = new Ri({
                            data: this.game.getPlace(Ue.Left)
                        }), this.placeCenter = new Ri({
                            data: this.game.getPlace(Ue.Center)
                        }), this.placeRight = new Ri({
                            data: this.game.getPlace(Ue.Right)
                        }), this.staticCard = new xe("STATIC"), this.staticCard.anchor.x = .5, this.staticCard.renderable = !1, this.placeLeft.setChip(this.game.getActiveBet()), this.placeCenter.setChip(this.game.getActiveBet()), this.placeRight.setChip(this.game.getActiveBet()), this.chips.on("change", this.onChangeChips, this), this.placeLeft.on("change", this.onChangeHands, this), this.placeCenter.on("change", this.onChangeHands, this), this.placeRight.on("change", this.onChangeHands, this), this.controls.on("deal", this.deal, this), this.controls.on("double", this.double, this), this.controls.on("hit", this.hit, this), this.controls.on("stand", this.stand, this), this.controls.on("split", this.split, this), this.controls.on("rebet", this.rebet, this), this.controls.on("newBet", this.newBet, this), this.controls.on("insurance", this.insurance(!0), this), this.controls.on("noinsurance", this.insurance(!1), this), this.controls.on("evenmoney", this.evenmoney(!0), this), this.controls.on("noevenmoney", this.evenmoney(!1), this), this.table.addChild(this.chips), this.table.addChild(this.placeDealer), this.table.addChild(this.placeLeft), this.table.addChild(this.placeCenter), this.table.addChild(this.placeRight), this.table.addChild(this.staticCard), this.menu = Ai(this.device), this.main.addChild(this.background), this.main.addChild(this.betLimits), this.main.addChild(this.history), this.main.addChild(this.table), this.device.desktop ? (this.paytable = new gi, this.menu.onOpen.add((() => {
                            this.paytable.close()
                        })), this.menu.onOpenPaytable.add((() => {
                            this.paytable.toggle()
                        })), this.main.addChild(this.paytable), this.main.addChild(this.menu.container), this.main.addChild(this.controls)) : (this.main.addChild(this.controls), this.main.addChild(this.menu.container))
                    }
                    updatePlacePosition() {
                        this.device.desktop || this.device.landscape ? (this.placeDealer.position.set(830, 50), this.placeDealer.scale.set(1), this.placeLeft.position.set(270, 380), this.placeLeft.scale.set(1), this.placeCenter.position.set(830, 500), this.placeCenter.scale.set(1), this.placeRight.position.set(1390, 380), this.placeRight.scale.set(1)) : (this.placeDealer.position.set(380, 100), this.placeLeft.position.set(140, 600), this.placeCenter.position.set(400, 1140), this.placeRight.position.set(680, 600))
                    }
                    resize() {
                        this.main.children.forEach((t => t.resize && t.resize())), this.menu && this.menu.resize()
                    }
                    start() {
                        var t = () => super.start,
                            e = this;
                        return (0, a.Z)((function*() {
                            t().call(e), e.resize(), e.controls.setHands(e.game.getActivePlaceCount()), e.controls.setBalance(e.game.getBalance()), e.controls.setTotalBet(e.game.getTotalBet()), e.game.isRestore() ? (yield e.popupManager.show("PopupRestore"), e.chips.hide(), e.background.showRules(), e.game.updateActive(), e.placeDealer.restore(), e.placeLeft.restore(), e.placeCenter.restore(), e.placeRight.restore(), e.controls.setActions(e.game.getActions())) : (e.controls.setActions(["deal"]), e.controls.disable()), e.sound.startGame()
                        }))()
                    }
                    onChangeChips(t) {
                        this.game.setActiveBet(t), this.placeLeft.setChip(t), this.placeCenter.setChip(t), this.placeRight.setChip(t)
                    }
                    onChangeHands() {
                        this.placeRight.resetTweenBackground(), this.placeCenter.resetTweenBackground(), this.placeLeft.resetTweenBackground();
                        var t = this.game.getActivePlaceCount();
                        this.controls.setHands(t), this.controls.setTotalBet(this.game.getTotalBet()), t > 0 ? this.controls.enable() : this.controls.disable()
                    }
                    distribution(t) {
                        this.staticCard.renderable = !0;
                        var e = [];
                        return this.device.desktop || this.device.landscape ? e.push(1600, 100, -90) : e.push(860, 100, -90), new Promise((i => {
                            A.fromTo(this.staticCard, .2, {
                                pixi: {
                                    x: e[0],
                                    y: e[1],
                                    rotation: e[2]
                                }
                            }, {
                                ease: "Linear.easeNone",
                                pixi: {
                                    x: t[0],
                                    y: t[1],
                                    rotation: 0
                                },
                                onComplete: () => {
                                    this.sound.cardDeal(), i()
                                }
                            })
                        }))
                    }
                    insurance(t) {
                        var e = this,
                            i = this.game.getPlaceDealer();
                        return (0, a.Z)((function*() {
                            try {
                                e.paytable && e.paytable.close(), e.controls.hideButtons();
                                var s = e.game.getBalance(),
                                    a = e.game.getActivePlaceBet();
                                yield e.game.doAction(t ? ze.Insurance : ze.NoInsurance), t && (e.controls.setTotalBet(e.game.getTotalBet()), e.controls.setBalance(s - a / 2)), yield e.placeRight.insurance(t), yield e.placeCenter.insurance(t), yield e.placeLeft.insurance(t), e.game.canCheckBlackjack() && (e.placeRight.deactivate(), e.placeCenter.deactivate(), e.placeLeft.deactivate(), yield e.placeDealer.checkingBlackjack()), e.game.isInsurance() || i.isBlackjack() || (yield Oe.delay(500), yield Promise.all([e.placeRight.sendInsurance(), e.placeCenter.sendInsurance(), e.placeLeft.sendInsurance()])), yield e.placeRight.updateRightHand(), yield e.placeCenter.updateRightHand(), yield e.placeLeft.updateRightHand(), e.controls.setTotalBet(e.game.getTotalBet()), e.game.isEnd() ? e.canEnd() : (e.game.updateActive(), e.placeRight.setActive(), e.placeCenter.setActive(), e.placeLeft.setActive(), e.controls.setActions(e.game.getActions()))
                            } catch (t) {
                                yield e.catchError(t)
                            }
                        }))
                    }
                    evenmoney(t) {
                        var e = this,
                            i = this.game.getPlaceDealer();
                        return (0, a.Z)((function*() {
                            try {
                                e.paytable && e.paytable.close(), e.controls.hideButtons(), yield e.game.doAction(t ? ze.EvenMoney : ze.NoEvenMoney), e.controls.setTotalBet(e.game.getTotalBet()), e.controls.setBalance(e.game.getBalance()), e.game.canCheckBlackjack() && (e.placeRight.deactivate(), e.placeCenter.deactivate(), e.placeLeft.deactivate(), yield e.placeDealer.checkingBlackjack()), e.game.isInsurance() || i.isBlackjack() || (yield Oe.delay(500), yield Promise.all([e.placeRight.sendInsurance(), e.placeCenter.sendInsurance(), e.placeLeft.sendInsurance()])), yield e.placeRight.updateRightHand(), yield e.placeCenter.updateRightHand(), yield e.placeLeft.updateRightHand(), e.controls.setTotalBet(e.game.getTotalBet()), e.game.isEnd() ? e.canEnd() : (e.game.updateActive(), e.placeRight.setActive(), e.placeCenter.setActive(), e.placeLeft.setActive(), e.controls.setActions(e.game.getActions()))
                            } catch (t) {
                                yield e.catchError(t)
                            }
                        }))
                    }
                    deal() {
                        var t = this;
                        return (0, a.Z)((function*() {
                            if (t.menu.close(), t.paytable && t.paytable.close(), t.game.getTotalBet() > t.game.getBalance()) yield t.popupManager.show("PopupZeroBalance");
                            else try {
                                if (t.game.getActivePlaceCount() < 1) return;
                                t.controls.hideButtons(), yield t.game.doAction(ze.Deal), t.controls.setBalance(t.game.getBalance()), t.chips.hide(), t.background.showRules(), t.placeRight.deal(), t.placeCenter.deal(), t.placeLeft.deal(), t.placeDealer.deal(), t.placeRight.isAvail() && (yield t.distribution(t.placeRight.getRightCardPosition()), t.staticCard.renderable = !1, yield t.placeRight.addCardToRight()), t.placeCenter.isAvail() && (yield t.distribution(t.placeCenter.getRightCardPosition()), t.staticCard.renderable = !1, yield t.placeCenter.addCardToRight()), t.placeLeft.isAvail() && (yield t.distribution(t.placeLeft.getRightCardPosition()), t.staticCard.renderable = !1, yield t.placeLeft.addCardToRight()), yield t.distribution(t.placeDealer.getCardPosition()), t.staticCard.renderable = !1, yield t.placeDealer.addCard(), t.placeRight.isAvail() && (yield t.distribution(t.placeRight.getRightCardPosition()), t.staticCard.renderable = !1, yield t.placeRight.addCardToRight(), yield t.placeRight.updateRightHand()), t.placeCenter.isAvail() && (yield t.distribution(t.placeCenter.getRightCardPosition()), t.staticCard.renderable = !1, yield t.placeCenter.addCardToRight(), yield t.placeCenter.updateRightHand()), t.placeLeft.isAvail() && (yield t.distribution(t.placeLeft.getRightCardPosition()), t.staticCard.renderable = !1, yield t.placeLeft.addCardToRight(), yield t.placeLeft.updateRightHand()), yield t.distribution(t.placeDealer.getCardPosition(!0)), t.placeDealer.addStaticCard(), t.staticCard.renderable = !1, t.controls.setTotalBet(t.game.getTotalBet()), t.game.canCheckBlackjack() && (yield t.placeDealer.checkingBlackjack()), t.game.isEnd() ? t.canEnd() : (t.game.updateActive(), t.placeRight.setActive(), t.placeCenter.setActive(), t.placeLeft.setActive(), t.controls.setActions(t.game.getActions()))
                            } catch (e) {
                                yield t.catchError(e)
                            }
                        }))()
                    }
                    stand() {
                        var t = this;
                        return (0, a.Z)((function*() {
                            try {
                                t.paytable && t.paytable.close(), t.controls.hideButtons(), yield t.game.doAction(ze.Stand), t.placeRight.isActive() && (t.placeRight.canRight() && (yield t.distribution(t.placeRight.getRightCardPosition()), t.staticCard.renderable = !1, yield t.placeRight.addCardToRight()), t.placeRight.canLeft() && (yield t.distribution(t.placeRight.getLeftCardPosition()), t.staticCard.renderable = !1, yield t.placeRight.addCardToLeft()), yield t.placeRight.updateRightHand(), yield t.placeRight.updateLeftHand()), t.placeCenter.isActive() && (t.placeCenter.canRight() && (yield t.distribution(t.placeCenter.getRightCardPosition()), t.staticCard.renderable = !1, yield t.placeCenter.addCardToRight()), t.placeCenter.canLeft() && (yield t.distribution(t.placeCenter.getLeftCardPosition()), t.staticCard.renderable = !1, yield t.placeCenter.addCardToLeft()), yield t.placeCenter.updateRightHand(), yield t.placeCenter.updateLeftHand()), t.placeLeft.isActive() && (t.placeLeft.canRight() && (yield t.distribution(t.placeLeft.getRightCardPosition()), t.staticCard.renderable = !1, yield t.placeLeft.addCardToRight()), t.placeLeft.canLeft() && (yield t.distribution(t.placeLeft.getLeftCardPosition()), t.staticCard.renderable = !1, yield t.placeLeft.addCardToLeft()), yield t.placeLeft.updateRightHand(), yield t.placeLeft.updateLeftHand()), t.controls.setTotalBet(t.game.getTotalBet()), t.game.isEnd() ? t.canEnd() : (t.game.updateActive(), t.placeRight.setActive(), t.placeCenter.setActive(), t.placeLeft.setActive(), t.controls.setActions(t.game.getActions()))
                            } catch (e) {
                                yield t.catchError(e)
                            }
                        }))()
                    }
                    split() {
                        var t = this;
                        return (0, a.Z)((function*() {
                            if (t.game.getActiveHand().getInitialBet() > t.game.getBalance()) yield t.popupManager.show("PopupZeroBalance");
                            else try {
                                t.paytable && t.paytable.close(), t.controls.hideButtons(), yield t.game.doAction(ze.Split), t.sound.splitCards(), t.placeRight.isActive() && (yield t.placeRight.split(), t.placeRight.canRight() && (yield t.distribution(t.placeRight.getRightCardPosition()), t.staticCard.renderable = !1, yield t.placeRight.addCardToRight()), t.placeRight.canLeft() && (yield t.distribution(t.placeRight.getLeftCardPosition()), t.staticCard.renderable = !1, yield t.placeRight.addCardToLeft()), yield t.placeRight.updateRightHand(), yield t.placeRight.updateLeftHand()), t.placeCenter.isActive() && (yield t.placeCenter.split(), t.placeCenter.canRight() && (yield t.distribution(t.placeCenter.getRightCardPosition()), t.staticCard.renderable = !1, yield t.placeCenter.addCardToRight()), t.placeCenter.canLeft() && (yield t.distribution(t.placeCenter.getLeftCardPosition()), t.staticCard.renderable = !1, yield t.placeCenter.addCardToLeft()), yield t.placeCenter.updateRightHand(), yield t.placeCenter.updateLeftHand()), t.placeLeft.isActive() && (yield t.placeLeft.split(), t.placeLeft.canRight() && (yield t.distribution(t.placeLeft.getRightCardPosition()), t.staticCard.renderable = !1, yield t.placeLeft.addCardToRight()), t.placeLeft.canLeft() && (yield t.distribution(t.placeLeft.getLeftCardPosition()), t.staticCard.renderable = !1, yield t.placeLeft.addCardToLeft()), yield t.placeLeft.updateRightHand(), yield t.placeLeft.updateLeftHand()), t.controls.setTotalBet(t.game.getTotalBet()), t.controls.setBalance(t.game.getBalance()), t.game.isEnd() ? t.canEnd() : (t.game.updateActive(), t.placeRight.setActive(), t.placeCenter.setActive(), t.placeLeft.setActive(), t.controls.setActions(t.game.getActions()))
                            } catch (e) {
                                yield t.catchError(e)
                            }
                        }))()
                    }
                    hit() {
                        var t = this;
                        return (0, a.Z)((function*() {
                            try {
                                t.paytable && t.paytable.close(), t.controls.hideButtons(), yield t.game.doAction(ze.Hit), t.placeRight.isActive() && (t.placeRight.canRight() && (yield t.distribution(t.placeRight.getRightCardPosition()), t.staticCard.renderable = !1, yield t.placeRight.addCardToRight(), yield t.placeRight.updateRightHand()), t.placeRight.canLeft() && (yield t.distribution(t.placeRight.getLeftCardPosition()), t.staticCard.renderable = !1, yield t.placeRight.addCardToLeft(), yield t.placeRight.updateLeftHand())), t.placeCenter.isActive() && (t.placeCenter.canRight() && (yield t.distribution(t.placeCenter.getRightCardPosition()), t.staticCard.renderable = !1, yield t.placeCenter.addCardToRight(), yield t.placeCenter.updateRightHand()), t.placeCenter.canLeft() && (yield t.distribution(t.placeCenter.getLeftCardPosition()), t.staticCard.renderable = !1, yield t.placeCenter.addCardToLeft(), yield t.placeCenter.updateLeftHand())), t.placeLeft.isActive() && (t.placeLeft.canRight() && (yield t.distribution(t.placeLeft.getRightCardPosition()), t.staticCard.renderable = !1, yield t.placeLeft.addCardToRight(), yield t.placeLeft.updateRightHand()), t.placeLeft.canLeft() && (yield t.distribution(t.placeLeft.getLeftCardPosition()), t.staticCard.renderable = !1, yield t.placeLeft.addCardToLeft(), yield t.placeLeft.updateLeftHand())), t.controls.setTotalBet(t.game.getTotalBet()), t.game.isEnd() ? t.canEnd() : (t.game.updateActive(), t.placeRight.setActive(), t.placeCenter.setActive(), t.placeLeft.setActive(), t.controls.setActions(t.game.getActions()))
                            } catch (e) {
                                yield t.catchError(e)
                            }
                        }))()
                    }
                    double() {
                        var t = this;
                        return (0, a.Z)((function*() {
                            if (t.game.getActiveHand().getInitialBet() > t.game.getBalance()) yield t.popupManager.show("PopupZeroBalance");
                            else try {
                                t.paytable && t.paytable.close(), t.controls.hideButtons();
                                var e = t.game.getActiveHand(),
                                    i = t.game.getBalance(),
                                    s = e.getInitialBet();
                                yield t.game.doAction(ze.Double), t.controls.setTotalBet(t.game.getTotalBet()), t.controls.setBalance(i - s), t.placeRight.isActive() && (t.placeRight.canRight() && (yield t.placeRight.double("right"), yield t.distribution(t.placeRight.getRightCardPosition()), t.staticCard.renderable = !1, yield t.placeRight.addCardToRight(), yield t.placeRight.updateRightHand()), t.placeRight.canLeft() && (yield t.placeRight.double("left"), yield t.distribution(t.placeRight.getLeftCardPosition()), t.staticCard.renderable = !1, yield t.placeRight.addCardToLeft(), yield t.placeRight.updateLeftHand())), t.placeCenter.isActive() && (t.placeCenter.canRight() && (yield t.placeCenter.double("right"), yield t.distribution(t.placeCenter.getRightCardPosition()), t.staticCard.renderable = !1, yield t.placeCenter.addCardToRight(), yield t.placeCenter.updateRightHand()), t.placeCenter.canLeft() && (yield t.placeCenter.double("left"), yield t.distribution(t.placeCenter.getLeftCardPosition()), t.staticCard.renderable = !1, yield t.placeCenter.addCardToLeft(), yield t.placeCenter.updateLeftHand())), t.placeLeft.isActive() && (t.placeLeft.canRight() && (yield t.placeLeft.double("right"), yield t.distribution(t.placeLeft.getRightCardPosition()), t.staticCard.renderable = !1, yield t.placeLeft.addCardToRight(), yield t.placeLeft.updateRightHand()), t.placeLeft.canLeft() && (yield t.placeLeft.double("left"), yield t.distribution(t.placeLeft.getLeftCardPosition()), t.staticCard.renderable = !1, yield t.placeLeft.addCardToLeft(), yield t.placeLeft.updateLeftHand())), t.game.isEnd() ? t.canEnd() : (t.game.updateActive(), t.placeRight.setActive(), t.placeCenter.setActive(), t.placeLeft.setActive(), t.controls.setActions(t.game.getActions()))
                            } catch (e) {
                                yield t.catchError(e)
                            }
                        }))()
                    }
                    newBet() {
                        var t = this;
                        return (0, a.Z)((function*() {
                            t.menu.reset(), t.paytable && t.paytable.close(), t.background.hideRules(), t.controls.hideButtons(), t.controls.disable(), yield t.collect(), t.game.finish(), t.chips.finish(), t.placeLeft.finish(), t.placeCenter.finish(), t.placeRight.finish(), t.placeDealer.finish(), t.updatePlacePosition(), t.controls.setActions(["deal"]), t.controls.setHands(t.game.getActivePlaceCount()), t.controls.setTotalBet(t.game.getTotalBet()), t.controls.setTotalWin(0)
                        }))()
                    }
                    rebet() {
                        var t = this;
                        return (0, a.Z)((function*() {
                            if (t.game.getTotalInitialBet() > t.game.getBalance()) return yield t.newBet(), void(yield t.popupManager.show("PopupZeroBalance"));
                            t.paytable && t.paytable.close(), t.controls.hideButtons(), yield t.collect(), t.game.rebet(), t.placeRight.rebet(), t.placeCenter.rebet(), t.placeLeft.rebet(), t.placeDealer.rebet(), t.updatePlacePosition(), t.controls.setTotalBet(t.game.getTotalBet()), t.controls.setTotalWin(0), t.deal()
                        }))()
                    }
                    canEnd() {
                        var t = this;
                        return (0, a.Z)((function*() {
                            t.controls.hideButtons(), t.placeRight.deactivate(), t.placeCenter.deactivate(), t.placeLeft.deactivate(), yield t.placeDealer.openBackCard();
                            for (var e = t.placeDealer.getLimit(), i = 0; i < e; i++) yield t.distribution(t.placeDealer.getCardPosition()), t.staticCard.renderable = !1, yield t.placeDealer.addCard();
                            var s = t.game.getPlaceDealer().isBlackjack();
                            yield Promise.all([t.placeDealer.reward(), t.placeRight.reward(s), t.placeCenter.reward(s), t.placeLeft.reward(s)]), t.controls.setActions(["newBet", "rebet"]), t.controls.setBalance(t.game.getBalance()), t.controls.setTotalWin(t.game.getTotalWin()), t.controls.setTotalBet(t.game.getTotalBet());
                            var a = yield t.game.getHistory();
                            t.history.update(a)
                        }))()
                    }
                    collect() {
                        var t = this;
                        return (0, a.Z)((function*() {
                            var e, i;
                            return t.device.desktop || t.device.landscape ? (e = [1250, 450], i = [830, -500]) : (e = [950, 850], i = [540, -500]), yield Promise.all([t.placeRight.collect(), t.placeCenter.collect(), t.placeLeft.collect(), t.placeDealer.collect()]), t.sound.discardCards(), yield Promise.all([new Promise((i => {
                                var s = new S({
                                    onComplete: i
                                });
                                s.to(t.placeRight, .6, {
                                    ease: "Linear.easeNone",
                                    pixi: {
                                        x: e[0],
                                        y: e[1]
                                    }
                                }, 0), s.to(t.placeCenter, .6, {
                                    ease: "Linear.easeNone",
                                    pixi: {
                                        x: e[0],
                                        y: e[1]
                                    }
                                }, 0), s.to(t.placeLeft, .6, {
                                    ease: "Linear.easeNone",
                                    pixi: {
                                        x: e[0],
                                        y: e[1]
                                    }
                                }, 0), s.to(t.placeDealer, .6, {
                                    ease: "Linear.easeNone",
                                    pixi: {
                                        x: e[0],
                                        y: e[1]
                                    }
                                }, 0)
                            }))]), new Promise((e => {
                                var s = new S({
                                    onComplete: e
                                });
                                s.to(t.placeRight, .6, {
                                    ease: "Linear.easeNone",
                                    pixi: {
                                        x: i[0],
                                        y: i[1]
                                    }
                                }, 0), s.to(t.placeCenter, .6, {
                                    ease: "Linear.easeNone",
                                    pixi: {
                                        x: i[0],
                                        y: i[1]
                                    }
                                }, 0), s.to(t.placeLeft, .6, {
                                    ease: "Linear.easeNone",
                                    pixi: {
                                        x: i[0],
                                        y: i[1]
                                    }
                                }, 0), s.to(t.placeDealer, .6, {
                                    ease: "Linear.easeNone",
                                    pixi: {
                                        x: i[0],
                                        y: i[1]
                                    }
                                }, 0)
                            }))
                        }))()
                    }
                    onProcessError(t) {
                        var e = this;
                        return (0, a.Z)((function*() {
                            var i, s;
                            [Tt.SPENDING_BUDGET_EXCEEDED, Tt.MAX_BET_LIMIT_EXCEEDED, Tt.INSUFFICIENT_BALANCE].includes(t) && (e.controls.setBalance(null !== (i = null === (s = e.server.response) || void 0 === s ? void 0 : s.balance) && void 0 !== i ? i : 0), e.controls.restore())
                        }))()
                    }
                }
            },
            6599: () => {},
            6331: () => {},
            3020: () => {},
            1368: () => {},
            9685: () => {},
            3113: () => {},
            4556: () => {}
        },
        a = {};

    function n(t) {
        var e = a[t];
        if (void 0 !== e) return e.exports;
        var i = a[t] = {
            id: t,
            loaded: !1,
            exports: {}
        };
        return s[t].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports
    }
    n.m = s, t = [], n.O = (e, i, s, a) => {
        if (!i) {
            var o = 1 / 0;
            for (d = 0; d < t.length; d++) {
                for (var [i, s, a] = t[d], r = !0, h = 0; h < i.length; h++)(!1 & a || o >= a) && Object.keys(n.O).every((t => n.O[t](i[h]))) ? i.splice(h--, 1) : (r = !1, a < o && (o = a));
                if (r) {
                    t.splice(d--, 1);
                    var l = s();
                    void 0 !== l && (e = l)
                }
            }
            return e
        }
        a = a || 0;
        for (var d = t.length; d > 0 && t[d - 1][2] > a; d--) t[d] = t[d - 1];
        t[d] = [i, s, a]
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
    }), t), n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), e = {}, i = "blackjack_mg:", n.l = (t, s, a, o) => {
        if (e[t]) e[t].push(s);
        else {
            var r, h;
            if (void 0 !== a)
                for (var l = document.getElementsByTagName("script"), d = 0; d < l.length; d++) {
                    var c = l[d];
                    if (c.getAttribute("src") == t || c.getAttribute("data-webpack") == i + a) {
                        r = c;
                        break
                    }
                }
            r || (h = !0, (r = document.createElement("script")).charset = "utf-8", r.timeout = 120, n.nc && r.setAttribute("nonce", n.nc), r.setAttribute("data-webpack", i + a), r.src = t), e[t] = [s];
            var u = (i, s) => {
                    r.onerror = r.onload = null, clearTimeout(p);
                    var a = e[t];
                    if (delete e[t], r.parentNode && r.parentNode.removeChild(r), a && a.forEach((t => t(s))), i) return i(s)
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
                    var a = new Promise(((i, a) => s = t[e] = [i, a]));
                    i.push(s[2] = a);
                    var o = n.p + n.u(e),
                        r = new Error;
                    n.l(o, (i => {
                        if (n.o(t, e) && (0 !== (s = t[e]) && (t[e] = void 0), s)) {
                            var a = i && ("load" === i.type ? "missing" : i.type),
                                o = i && i.target && i.target.src;
                            r.message = "Loading chunk " + e + " failed.\n(" + a + ": " + o + ")", r.name = "ChunkLoadError", r.type = a, r.request = o, s[1](r)
                        }
                    }), "chunk-" + e, e)
                }
        }, n.O.j = e => 0 === t[e];
        var e = (e, i) => {
                var s, a, [o, r, h] = i,
                    l = 0;
                if (o.some((e => 0 !== t[e]))) {
                    for (s in r) n.o(r, s) && (n.m[s] = r[s]);
                    if (h) var d = h(n)
                }
                for (e && e(i); l < o.length; l++) a = o[l], n.o(t, a) && t[a] && t[a][0](), t[a] = 0;
                return n.O(d)
            },
            i = self.webpackChunkblackjack_mg = self.webpackChunkblackjack_mg || [];
        i.forEach(e.bind(null, 0)), i.push = e.bind(null, i.push.bind(i))
    })();
    var o = n.O(void 0, [216], (() => n(5090)));
    o = n.O(o)
})();