/*! @mascot-banner branch: master - commit: eec7ab288d9808d47857735ff89bf963ec3bdcf9 */
(() => {
    var t, e, i, s = {
            159: (t, e, i) => {
                "use strict";
                var s = {};
                i.r(s), i.d(s, {
                    ALPHA_MODES: () => Y.ALPHA_MODES,
                    AbstractBatchRenderer: () => c.eo,
                    AbstractMultiResource: () => c.M4,
                    AbstractRenderer: () => c.I8,
                    AppLoaderPlugin: () => b.LP,
                    ArrayResource: () => c.$N,
                    Attribute: () => c.ah,
                    BLEND_MODES: () => Y.BLEND_MODES,
                    BUFFER_BITS: () => Y.BUFFER_BITS,
                    BUFFER_TYPE: () => Y.BUFFER_TYPE,
                    BaseImageResource: () => c.bg,
                    BasePrepare: () => p.Zq,
                    BaseRenderTexture: () => c.jd,
                    BaseTexture: () => c.VL,
                    BatchDrawCall: () => c.a$,
                    BatchGeometry: () => c.JZ,
                    BatchPluginFactory: () => c.TJ,
                    BatchRenderer: () => c.Bv,
                    BatchShaderGenerator: () => c.Zk,
                    BatchSystem: () => c.Sj,
                    BatchTextureArray: () => c.Ie,
                    BitmapFont: () => v.UP,
                    BitmapFontData: () => v.d0,
                    BitmapFontLoader: () => v.vl,
                    BitmapText: () => v.Xz,
                    Bounds: () => H.YZ,
                    BrowserAdapter: () => J.ZQ,
                    Buffer: () => c.lW,
                    BufferResource: () => c.qm,
                    CLEAR_MODES: () => Y.CLEAR_MODES,
                    COLOR_MASK_BITS: () => Y.COLOR_MASK_BITS,
                    CanvasResource: () => c.Y8,
                    Circle: () => K.Circle,
                    Container: () => H.W2,
                    ContextSystem: () => c.lH,
                    CountLimiter: () => p.fh,
                    CubeResource: () => c.TA,
                    DEG_TO_RAD: () => K.DEG_TO_RAD,
                    DRAW_MODES: () => Y.DRAW_MODES,
                    DisplayObject: () => H.s$,
                    ENV: () => Y.ENV,
                    Ellipse: () => K.Ellipse,
                    ExtensionType: () => c.nw,
                    FORMATS: () => Y.FORMATS,
                    FillStyle: () => u.ft,
                    Filter: () => c.wn,
                    FilterState: () => c.jV,
                    FilterSystem: () => c.kV,
                    Framebuffer: () => c.AI,
                    FramebufferSystem: () => c.WB,
                    GC_MODES: () => Y.GC_MODES,
                    GLFramebuffer: () => c.tT,
                    GLProgram: () => c.Ei,
                    GLTexture: () => c.fy,
                    GRAPHICS_CURVES: () => u.wA,
                    Geometry: () => c.ZX,
                    GeometrySystem: () => c.TO,
                    Graphics: () => u.TC,
                    GraphicsData: () => u.iM,
                    GraphicsGeometry: () => u.RB,
                    IGLUniformData: () => c.W1,
                    INSTALLED: () => c.e_,
                    ImageBitmapResource: () => c._w,
                    ImageResource: () => c.PA,
                    InteractionData: () => g.gU,
                    InteractionEvent: () => g.sm,
                    InteractionManager: () => g.bx,
                    InteractionTrackingData: () => g.s_,
                    LINE_CAP: () => u.$o,
                    LINE_JOIN: () => u.S,
                    LINE_SCALE_MODE: () => Q.F4,
                    LineStyle: () => u.TD,
                    Loader: () => b.aN,
                    LoaderResource: () => b.kC,
                    MASK_TYPES: () => Y.MASK_TYPES,
                    MIPMAP_MODES: () => Y.MIPMAP_MODES,
                    MSAA_QUALITY: () => Y.MSAA_QUALITY,
                    MaskData: () => c.HI,
                    MaskSystem: () => c.zj,
                    Matrix: () => K.Matrix,
                    Mesh: () => X.Kj,
                    MeshBatchUvs: () => X.wQ,
                    MeshGeometry: () => X.xc,
                    MeshMaterial: () => X.rY,
                    ObjectRenderer: () => c.bO,
                    ObservablePoint: () => K.ObservablePoint,
                    PI_2: () => K.PI_2,
                    PRECISION: () => Y.PRECISION,
                    Point: () => K.Point,
                    Polygon: () => K.Polygon,
                    Prepare: () => p.B9,
                    Program: () => c.$r,
                    ProjectionSystem: () => c.NW,
                    Quad: () => c.lD,
                    QuadUv: () => c.ud,
                    RAD_TO_DEG: () => K.RAD_TO_DEG,
                    RENDERER_TYPE: () => Y.RENDERER_TYPE,
                    Rectangle: () => K.Rectangle,
                    RenderTexture: () => c.TI,
                    RenderTexturePool: () => c.uW,
                    RenderTextureSystem: () => c.J$,
                    Renderer: () => c.Th,
                    Resource: () => c._z,
                    RoundedRectangle: () => K.RoundedRectangle,
                    Runner: () => q.R,
                    SAMPLER_TYPES: () => Y.SAMPLER_TYPES,
                    SCALE_MODES: () => Y.SCALE_MODES,
                    SHAPES: () => K.SHAPES,
                    SVGResource: () => c.pX,
                    ScissorSystem: () => c.id,
                    Shader: () => c.ex,
                    ShaderSystem: () => c.p,
                    SimpleRope: () => z.IE,
                    SmoothGraphics: () => Q.K3,
                    Sprite: () => $.j,
                    SpriteMaskFilter: () => c.z9,
                    Spritesheet: () => m.c,
                    SpritesheetLoader: () => m.o,
                    State: () => c.ZM,
                    StateSystem: () => c.zI,
                    StencilSystem: () => c.Ld,
                    System: () => c.xP,
                    TARGETS: () => Y.TARGETS,
                    TEXT_GRADIENT: () => A.M_,
                    TYPES: () => Y.TYPES,
                    TemporaryDisplayObject: () => H.Ql,
                    Text: () => A.xv,
                    TextFormat: () => v.SQ,
                    TextMetrics: () => A._A,
                    TextStyle: () => A.pn,
                    Texture: () => c.xE,
                    TextureGCSystem: () => c.wr,
                    TextureLoader: () => b.dp,
                    TextureMatrix: () => c.UX,
                    TextureSystem: () => c.CT,
                    TextureUvs: () => c.aF,
                    Ticker: () => et.vB,
                    TickerPlugin: () => et.Sb,
                    TilingSprite: () => tt.o,
                    TilingSpriteRenderer: () => tt.S,
                    TimeLimiter: () => p.FI,
                    Transform: () => K.Transform,
                    UPDATE_PRIORITY: () => et.uF,
                    UniformGroup: () => c.oo,
                    VERSION: () => c.q4,
                    VideoResource: () => c.eH,
                    ViewableBuffer: () => c.Rv,
                    WRAP_MODES: () => Y.WRAP_MODES,
                    XMLFormat: () => v.Lq,
                    XMLStringFormat: () => v.lx,
                    autoDetectFormat: () => v.jv,
                    autoDetectRenderer: () => c.e6,
                    autoDetectResource: () => c.pb,
                    checkMaxIfStatementsInShader: () => c.a7,
                    createUBOElements: () => c.TF,
                    defaultFilterVertex: () => c.Y9,
                    defaultVertex: () => c.kP,
                    extensions: () => c.Rw,
                    generateProgram: () => c.qw,
                    generateUniformBufferSync: () => c.K0,
                    getTestContext: () => c.Kc,
                    getUBOData: () => c.DL,
                    graphicsUtils: () => u.yR,
                    groupD8: () => K.groupD8,
                    interactiveTarget: () => g.Op,
                    isMobile: () => J.tq,
                    resources: () => c.Jb,
                    settings: () => J.Xd,
                    systems: () => c.eG,
                    uniformParsers: () => c.sg,
                    utils: () => it
                });
                var o = i(8826),
                    n = i(6866),
                    a = (i(1509), i(2113), i(5008), i(1820), i(5717), i(959)),
                    h = i(3943),
                    r = i(9610),
                    l = i(447),
                    c = i(1778),
                    d = i(6661),
                    u = i(1290),
                    g = i(2699),
                    p = i(9447),
                    m = i(4877),
                    A = i(7955),
                    v = i(9079),
                    b = i(9740);
                class w {
                    static add() {
                        for (var t of w.supportedFontExtensions) b.kC.setExtensionLoadType(t, b.kC.LOAD_TYPE.XHR), b.kC.setExtensionXhrType(t, b.kC.XHR_RESPONSE_TYPE.BUFFER)
                    }
                    static use(t, e) {
                        w.supportedFontExtensions.some((e => t.extension.endsWith(e))) ? w.loadFromBuffer(t).finally((() => e())) : e()
                    }
                    static loadFromBuffer(t) {
                        var e, i, s, o, n, a, h, r, l, c, d, u, g, p, m, A, v, b, y, f = null !== (e = null === (i = t.metadata) || void 0 === i || null === (s = i.font) || void 0 === s ? void 0 : s.family) && void 0 !== e ? e : t.name;
                        return document.fonts.add(new FontFace(f, t.data, null === (o = t.metadata) || void 0 === o ? void 0 : o.font)), t.styles = [{
                            fontFamily: f.replace(/['|"]/gi, ""),
                            fontStyle: null === (n = t.metadata) || void 0 === n || null === (a = n.font) || void 0 === a ? void 0 : a.style,
                            fontWeight: null === (h = t.metadata) || void 0 === h || null === (r = h.font) || void 0 === r ? void 0 : r.weight
                        }], w.waitFont({
                            "font-family": f,
                            "font-stretch": null === (l = t.metadata) || void 0 === l || null === (c = l.font) || void 0 === c ? void 0 : c.stretch,
                            "font-style": null === (d = t.metadata) || void 0 === d || null === (u = d.font) || void 0 === u ? void 0 : u.style,
                            "font-weight": null === (g = t.metadata) || void 0 === g || null === (p = g.font) || void 0 === p ? void 0 : p.weight
                        }, null === (m = t.metadata) || void 0 === m || null === (A = m.font) || void 0 === A ? void 0 : A.testString, null !== (v = null === (b = t.metadata) || void 0 === b || null === (y = b.font) || void 0 === y ? void 0 : y.timeout) && void 0 !== v ? v : t.timeout)
                    }
                }(0, n.Z)(w, "extension", d.n.Loader), (0, n.Z)(w, "supportedFontExtensions", ["ttf", "otf", "woff", "woff2"]), (0, n.Z)(w, "waitFont", function() {
                    var t = (0, o.Z)((function*(t, e, i) {
                        var s, o, n, a = null !== (s = t["font-style"]) && void 0 !== s ? s : "",
                            h = null !== (o = t["font-weight"]) && void 0 !== o ? o : "",
                            r = null !== (n = t["font-stretch"]) && void 0 !== n ? n : "",
                            l = t["font-family"];
                        i = i || 1 / 0;
                        var c = (new Date).getTime(),
                            d = c,
                            u = [a, h, r, "100px", l].join(" ");
                        do {
                            if ((yield document.fonts.load(u, e)).length > 0) return;
                            yield new Promise((t => setTimeout(t, 16))), c = (new Date).getTime()
                        } while (c - d < i);
                        console.warn("Error loading font! Your font ".concat(t["font-family"], " timed out after ").concat(i, "ms"))
                    }));
                    return function(e, i, s) {
                        return t.apply(this, arguments)
                    }
                }());
                var y = i(9900),
                    f = i(7239),
                    k = i.n(f),
                    C = i(4891),
                    x = (i(3306), i(8657).Z, C.Q3),
                    B = C.b_,
                    S = null === C.Q3 || void 0 === C.Q3 ? void 0 : C.Q3.ticker,
                    P = {
                        Linear: C.bJ,
                        Back: C.eJ,
                        Elastic: C.tQ,
                        Sine: C.Yv
                    };

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

                function T(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? E(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : E(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                var Z = new Map;
                class O extends y.Howl {
                    constructor(t) {
                        super(t), (0, n.Z)(this, "initialVolume", 1), (0, n.Z)(this, "data", {}), this.initialVolume = t.volume
                    }
                    fade(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        return this.volume(i), x.to(this, t, {
                            volume: e > -1 ? e : this.initialVolume
                        }), this.play(), this
                    }
                }
                class R {
                    constructor(t, e, i) {
                        (0, n.Z)(this, "handlers", new Map), (0, n.Z)(this, "onChangeMute", void 0), (0, n.Z)(this, "onChangeVolume", void 0), (0, n.Z)(this, "savedVolume", 0), this.device = t, this.visibility = e, this.preferences = i, this.onChangeMute = new(k()), this.onChangeVolume = new(k()), this.visibility.on("change", (t => {
                            try {
                                var e, i;
                                if ("hidden" !== t || this.mutedAll) null === (e = y.Howler.ctx) || void 0 === e || e.resume();
                                else null === (i = y.Howler.ctx) || void 0 === i || i.suspend()
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
                        y.Howler.volume(t), e && this.preferences.set("volume", {
                            volume: t
                        })
                    }
                    add(t) {
                        return this.get(t)
                    }
                    set volume(t) {
                        t <= 0 && !this.mutedAll ? Z.forEach((t => this.setMuteBySound(t, !0))) : t > 0 && this.mutedAll && Z.forEach((t => this.setMuteBySound(t, !1))), this.savedVolume = t, this.setGlobalVolume(t), this.onChangeVolume.dispatch(t)
                    }
                    get volume() {
                        return y.Howler.volume()
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
                        return Array.from(Z.values()).filter((e => {
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
                        return null === (e = Z.get(t)) || void 0 === e ? void 0 : e.sound
                    }
                    play(t) {
                        for (var e, i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) s[o - 1] = arguments[o];
                        return null === (e = this.handlers.get(t)) || void 0 === e ? void 0 : e(...s)
                    }
                }
                class M {
                    static pre(t, e) {
                        t && M.supportedSoundExtensions.includes(t.extension) ? (t.load = function(t) {
                            this.isLoading || (this.isComplete ? t && setTimeout((() => t(this)), 1) : (t && this.onComplete.once(t), this.data = new O({
                                src: this.url,
                                sprite: this.metadata.sprite || !1,
                                volume: this.metadata.audioMetadata.volume,
                                loop: this.metadata.audioMetadata.loop
                            }), this.type = b.kC.TYPE.AUDIO, this.loadType = b.kC.LOAD_TYPE.AUDIO, this._setFlag(b.kC.STATUS_FLAGS.LOADING, !0), this.onStart.dispatch(this), this.data.on("loaderror", this._boundOnError, !1), this.data.on("load", this._boundComplete, !1), this.sound = this.data))
                        }, t.complete = function() {
                            var t;
                            if (this.data && (this.data.off("loaderror", this._boundOnError, !1), this.data.off("load", this._boundComplete, !1)), this.isComplete) throw new Error("Complete called again for an already completed resource.");
                            this._setFlag(b.kC.STATUS_FLAGS.COMPLETE, !0), this._setFlag(b.kC.STATUS_FLAGS.LOADING, !1);
                            var e = null !== (t = this.name) && void 0 !== t ? t : this.url;
                            Z.set(e, T(T({}, this.metadata.audioMetadata), {}, {
                                id: e,
                                sound: this.sound,
                                muted: !1
                            })), this.onComplete.dispatch(this)
                        }, t._boundComplete = t.complete.bind(t), e()) : e()
                    }
                }(0, n.Z)(M, "extension", d.n.Loader), (0, n.Z)(M, "supportedSoundExtensions", ["mp3"]);
                i(1293);
                var F, I = i(9534),
                    N = i(1162),
                    D = i(1368),
                    L = i(5934),
                    W = i(5083),
                    _ = i(2339);
                i(3113);

                function U(t) {
                    var e = t.substr(0, 3),
                        i = Math.floor(10 * +e + .001);
                    return "3.7" === e ? F.VER37 : "3.8" === e ? F.VER38 : "4.0" === e ? F.VER40 : "4.1" === e ? F.VER41 : i < F.VER37 ? F.VER37 : F.UNKNOWN
                }(function(t) {
                    t[t.UNKNOWN = 0] = "UNKNOWN", t[t.VER37 = 37] = "VER37", t[t.VER38 = 38] = "VER38", t[t.VER40 = 40] = "VER40", t[t.VER41 = 41] = "VER41"
                })(F || (F = {}));
                class G {
                    constructor() {
                        (0, n.Z)(this, "scale", 1)
                    }
                    readSkeletonData(t, e) {
                        var i = new I.BinaryInput(e);
                        i.readString();
                        var s = i.readString(),
                            o = U(s),
                            n = null;
                        if (o === F.VER38 && (n = new L.SkeletonBinary(new L.AtlasAttachmentLoader(t))), (i = new I.BinaryInput(e)).readInt32(), i.readInt32(), (o = U(s = i.readString())) !== F.VER40 && o !== F.VER41 || (n = new W.SkeletonBinary(new W.AtlasAttachmentLoader(t))), !n) {
                            var a = "Unsupported version of spine model ".concat(s, ", please update pixi-spine");
                            console.error(a)
                        }
                        return n.scale = this.scale, n.readSkeletonData(e)
                    }
                }
                class V {
                    constructor() {
                        (0, n.Z)(this, "scale", 1)
                    }
                    readSkeletonData(t, e) {
                        var i = e.skeleton.spine,
                            s = U(i),
                            o = null;
                        if (s === F.VER37 && (o = new D.SkeletonJson(new D.AtlasAttachmentLoader(t))), s === F.VER38 && (o = new L.SkeletonJson(new L.AtlasAttachmentLoader(t))), s !== F.VER40 && s !== F.VER41 || (o = new W.SkeletonJson(new W.AtlasAttachmentLoader(t))), !o) {
                            var n = "Unsupported version of spine model ".concat(i, ", please update pixi-spine");
                            console.error(n)
                        }
                        return o.scale = this.scale, o.readSkeletonData(e)
                    }
                }
                class j extends N.go {
                    createBinaryParser() {
                        return new G
                    }
                    createJsonParser() {
                        return new V
                    }
                    parseData(t, e, i, s) {
                        var o = e;
                        t.spineData = o.readSkeletonData(i, s), t.spineAtlas = i
                    }
                }(0, n.Z)(j, "extension", d.n.Loader), (0, n.Z)(j, "use", (new j).genMiddleware().use);
                var z = i(512),
                    Y = i(600),
                    H = i(9360),
                    Q = i(3361),
                    K = i(3298),
                    X = i(8656),
                    q = i(3385),
                    J = i(6997),
                    $ = i(736),
                    tt = i(9504),
                    et = i(798),
                    it = i(5277);
                u.TC.nextRoundedRectBehavior = !0, A.xv.nextLineHeightBehavior = !0, d.R.add(g.bx, p.B9, c.Bv, a.c, h.Q, r.T, l.O, v.vl, m.o, j, w, M), window.PIXI = s;
                var st = i(3233),
                    ot = i.n(st);

                function nt(t) {
                    return t && "object" == typeof t && !Array.isArray(t)
                }

                function at(t) {
                    for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++) i[s - 1] = arguments[s];
                    if (!i.length) return t;
                    var o = i.shift();
                    if (nt(t) && nt(o))
                        for (var n in o) nt(o[n]) ? (t[n] || Object.assign(t, {
                            [n]: {}
                        }), at(t[n], o[n])) : Object.assign(t, {
                            [n]: o[n]
                        });
                    return at(t, ...i)
                }
                class ht {
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
                        return ot()(this.data, t, e)
                    }
                }
                class rt extends it.EventEmitter {}
                var lt = window.navigator.userAgent.match("CriOS") ? .86 : .96;
                class ct extends rt {
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
                        return window.innerHeight === t || window.innerHeight / t >= lt
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
                class dt extends rt {
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
                class ut extends it.EventEmitter {
                    constructor() {
                        super(...arguments), (0, n.Z)(this, "enabled", !1)
                    }
                    toggle() {
                        this.enabled = !this.enabled, this.emit("change", this.enabled)
                    }
                }
                var gt = i(5992);
                class pt extends gt.v {}
                class mt {
                    constructor(t) {
                        var e, i, s, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.navigator.userAgent.toLowerCase();
                        (0, n.Z)(this, "forceMobile", void 0), this.renderer = t, this.ua = o, this.forceMobile = null !== (e = null === (i = document.documentElement) || void 0 === i || null === (s = i.classList) || void 0 === s ? void 0 : s.contains("layout-mobile")) && void 0 !== e && e
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
                class At {}
                class vt {
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
                class bt extends it.EventEmitter {
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
                class wt {
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
                class yt {
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
                class ft {
                    constructor() {
                        (0, n.Z)(this, "KEY_CODE", {
                            Enter: 13,
                            Space: 32,
                            Shift: 16,
                            Escape: 27
                        }), (0, n.Z)(this, "keys", [])
                    }
                    register(t) {
                        var e = new yt(t);
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

                function kt(t, e) {
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
                        e % 2 ? kt(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : kt(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class xt extends it.EventEmitter {
                    constructor(t) {
                        super(), (0, n.Z)(this, "loader", new b.aN), this.device = t, this.loader.onError.add((t => this.emit("error", t))), this.loader.onComplete.add((t => this.emit("complete", t)))
                    }
                    load(t) {
                        var e = this;
                        return (0, o.Z)((function*() {
                            var i = yield e._getSizes(), s = Object.create(null), o = t.filter((t => {
                                var i, s, o;
                                return null === (i = null === (s = t.metadata) || void 0 === s || null === (o = s.platform) || void 0 === o ? void 0 : o.includes(e.device.platform)) || void 0 === i || i
                            })).map((t => (s = Ct(Ct({}, s), i[t.url]), Ct(Ct({}, t), {}, {
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
                            var i, s, o, n, a, h = this.loader.resources[t];
                            return h ? null !== (i = null !== (s = null !== (o = null !== (n = h.texture) && void 0 !== n ? n : h.spineData) && void 0 !== o ? o : h.sound) && void 0 !== s ? s : null === (a = h.textures) || void 0 === a ? void 0 : a[e]) && void 0 !== i ? i : h.textures : c.xE.from(t)
                        }
                    }
                    destroy() {
                        this.loader.destroy()
                    }
                    _getSizes() {
                        return (0, o.Z)((function*() {
                            try {
                                return yield(yield fetch("assets/sizes.json")).json()
                            } catch (t) {
                                return {}
                            }
                        }))()
                    }
                }
                class Bt {}
                class St {
                    constructor() {
                        (0, n.Z)(this, "renderer", void 0), J.Xd.RENDER_OPTIONS.legacy = !0, J.Xd.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !0, this.renderer = c.Th.create({
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
                var Pt = i(1200),
                    Et = {
                        SPENDING_BUDGET_EXCEEDED: "SPENDING_BUDGET_EXCEEDED",
                        MAX_BET_LIMIT_EXCEEDED: "MAX_BET_LIMIT_EXCEEDED",
                        INSUFFICIENT_BALANCE: "INSUFFICIENT_BALANCE",
                        BALANCE_CHANGE_ERROR: "BALANCE_CHANGE_ERROR"
                    };
                class Tt extends it.EventEmitter {
                    constructor() {
                        super(...arguments), (0, n.Z)(this, "_response", void 0), (0, n.Z)(this, "_transformRequest", [])
                    }
                    transformRequest(t) {
                        this._transformRequest.push(...t)
                    }
                    request(t) {
                        var e = this;
                        return (0, o.Z)((function*() {
                            var i = e._transformRequest.reduce(((t, e) => e(t)), t),
                                s = yield Pt.ZP.post(window.serverUrl, i);
                            if (e._response = s.data, e.emit("response:".concat(t.action), e._response), e.emit("response", e._response, t.action), e._response.error) throw new Error(e._response.error);
                            return e._response
                        }))()
                    }
                    resetSession() {
                        return (0, o.Z)((function*() {
                            yield Pt.ZP.post("cs.php")
                        }))()
                    }
                    get response() {
                        return this._response
                    }
                }
                var Zt = {
                    to: ["*"],
                    name: "boot",
                    initialized: !0
                };
                class Ot {
                    constructor() {
                        (0, n.Z)(this, "transitions", Object.create(null)), (0, n.Z)(this, "transition", Zt)
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
                class Rt extends it.EventEmitter {
                    constructor() {
                        super(...arguments), (0, n.Z)(this, "width", void 0), (0, n.Z)(this, "height", void 0), (0, n.Z)(this, "aspectRatio", void 0), (0, n.Z)(this, "propAspectRatio", void 0), (0, n.Z)(this, "paddingX", void 0), (0, n.Z)(this, "paddingY", void 0)
                    }
                    resize(t, e) {
                        this.width = t, this.height = e, this.aspectRatio = parseFloat(Math.min(window.innerWidth / t, window.innerHeight / e).toFixed(3)), this.paddingX = Math.max(Math.round((window.innerWidth / 2 - this.width / 2 * this.aspectRatio) / this.aspectRatio), 0), this.paddingY = Math.max(Math.round((window.innerHeight / 2 - this.height / 2 * this.aspectRatio) / this.aspectRatio), 0), this.propAspectRatio = parseFloat(Math.max((2 * this.paddingX + this.width) / this.width, (2 * this.paddingY + this.height) / this.height).toFixed(3))
                    }
                }
                class Mt extends H.W2 {}
                class Ft {
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
                var It = {
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
                class Nt extends it.EventEmitter {
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
                class Dt extends(jt($.j)) {
                    constructor() {
                        super(...arguments), (0, n.Z)(this, "interactive", !0)
                    }
                }
                class Lt {
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
                        return (0, o.Z)((function*() {
                            var s = i.popups.get(t);
                            i.rootNode.addChild(s);
                            for (var o = e.length, n = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) n[a - 1] = e[a];
                            var h = yield s.show(...n);
                            return i.rootNode.removeChild(s), h
                        }))()
                    }
                }
                var Wt, _t = i(899),
                    Ut = i.n(_t);
                class Gt {
                    constructor() {
                        (0, n.Z)(this, "prefix", "")
                    }
                    setPrefix(t) {
                        this.prefix = t
                    }
                    set(t, e) {
                        Ut().set("".concat(this.prefix, ":").concat(t), e)
                    }
                    get(t, e) {
                        return Ut().get("".concat(this.prefix, ":").concat(t), e)
                    }
                    clear() {
                        Ut().clearAll()
                    }
                }
                class Vt extends it.EventEmitter {
                    constructor() {
                        super(), document.addEventListener("visibilitychange", (() => {
                            this.emit("change", document.visibilityState), "hidden" === document.visibilityState ? this.emit("hide") : this.emit("show")
                        }))
                    }
                    get isVisible() {
                        return "visible" === document.visibilityState
                    }
                }
                c.xE.WHITE.baseTexture.resource.source.getContext("2d").fillRect(0, 0, 1, 1);

                function jt(t, e) {
                    return class extends t {
                        constructor() {
                            super(...arguments), (0, n.Z)(this, "game", Wt), (0, n.Z)(this, "preventAutoResize", !1), this.on("added", (() => {
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
                class zt {
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
                const Yt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAADECAMAAABJEswAAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAC3UExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFrln0MAAAA8dFJOU+XYgn369I3swRLTLsm6QyNhoGVdVaUzPh8aUZHFmTqwqQ5vdnLes5UKTveI2wGFBUsIKM1Ja7UreKs3KmHZN/QAAAQmSURBVHja7dfXUiJRFIbRPVkm52BAQRCYnEWc93+uabAQaAtpvNjnZi27itNN/15485XxBQBIF98AgHTxAwBIF0MAIF10hsPOsDMzXDpfZ7hmY29vb29vb99wH51Wq9Pq3FjL3t7e3t7efvt9tACAdAIMACUC/AEASCfAAFAiwO8BgHQCDAAlAvwMAEgnwABQIsA/AYB0cbrZ+el5dW1+Zm9vb29vb99wH48AgHQCDAAlAvwWAEgnwABQIsDtyaQ9ac9Mls7XmazZ2Nvb29vb2zfcRxsASBfvAIB0AgwAJQL8FABIJ8AAUCLAvwGAdPEdAEgXIwAgXYx2b2y0O6oue3t7e3t7+633sQsApIvXAEA6AQaAEgF+BQCkE2AAKBHg5wBAOgEGgBIBfgkApBNgACgR4D8AQLroAgDpotvrdXsX5+owM73vdVc/59/Xzz17e3t7e3v77ffRAwDSxTEAkC7Gi/P4eFxdF59Tx+PF8/n9unfs7e3t7e3tt9jHHQAgnQADQIkA3wYA0gkwAJQI8FcAIF18AgDSxX0AIJ0AA0CJAO8BAOmmAR7sDapr87vr3rO3t7e3t7ffch8DACBdHKwaHAyq6+q5KXt7e3t7e/sG+zgAANLFCwAgnQADQIkAvwEA0gkwAJQI8BEAkG4a4LOjs+pafC6rP7vuHXt7e3t7e/uG+zgEANLNA3xyeDJTHa6Yfjd/vnyuv2Nvb29vb2/fcB8nAEC6+AsApIsnAEA6AQaAEgHeAQDSCTAAlAjw/qqd/Z3qunpuyt7e3t7e3r7BPvYBgHTxGABIJ8AAUCLAvwCAdPEQAEgnwABQIsC3AIB0AgwAJQL8GQBIF30AIF1c6F/+zO8Xmj23t7e3t7e332q//HD5tj+/al/Unvdrv8He3t7e3t5+8x4AKOABAJAuqp+V6/L58v2Gd+zt7e3t7e2b7usTACDvP+B7AEA6AQaAEgH+CACki7sAQDoBBoASAf4HAKQTYAAQYAAQYABAgAFAgAEAAQYAAQYABBgABBgAEGAAEGAAEGAAQIABQIABAAEGAAEGAAQYAAQYABBgABBgABBgAECAAUCAAQABBgABBgAEGAAEGAAQYAAQYAAQYABAgAFAgAEAAQYAAQYABBgABBgAEGAAEGAAEGAAQIABQIABAAEGAAEGAAQYAAQYABBgABBgABBgAECAAUCAAQABBgABBgAEGAAEGAAQYAAQYAAQYABAgAFAgAEAAQYAAQYABBgABBgAEGAAEGAAEGAAQIABQIABAAEGAAEGAAQYAAQYABBgABBgABBgAECAAUCAAQABBgABBgAEGAAEGAAQYAAQYAAQYH8CABBgABBgAECAAUCAAQABBgABBgAEGAAEGAAQYAAQYAAQYABAgAFAgAEAAQYAAQYABBgABBgAmPkPtIA9BKeG90EAAAAASUVORK5CYII=",
                    Ht = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZ4AAAElCAMAAADjr3SLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACuUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF7IU6UAAAA5dFJOU8+h2vPke3X4TVfVbFxIIRyF6Qou7oC+lQ43F0NnjWETJSnfkTK1uVLKcJwCBok/O7Gppa3EwZnHZBUSEz4AAAQKSURBVHja7dHrUttWAIXR06QtbYAAgRiwiTHYuPd7uL3/i1WyY1CETRLXmtnTWR+akXyk/YdVflFwxb8gmudXBYcnm+eNgsOTzXMy783J/Hf1MHte3JedNe8n9l3uy4mCq3nOT86r6+PzZWersu9sX84VHJ5snv7znffPq6u/dvb/aV/6Cq709x7q783PqofZ817rXft82Tf2G92XPQWHJ5vntYLDE84zGr0ePT2vDmct3o0+fLfq3L6TfRkpuGU8F6OL6nr6u32+KvuN7cuFgsOTzXOo4PCE80wmh5P5c/Uwq/49Ofz4vni/OGt/Z9/JvkwUXDmdTE4np9X1eF+06nzxrm5i3+W+nCo4PNk8fyg4PNk8vys4PNk8AwWHJ5tndzDYHezOGjSel/1untfV7wb2Xe7LroLDk83znYLDg0dr8/yg4PBk83yv4PDg0do8OwoOTzbPcH4f7gxn7QyfflO/2xl++tl+4/syVHA1z93wrrq+bNfc2He2L3cKrpwpODzhPNuzzrbPqmt7aYt37W+av+072ZdtBYcnm+cnBYcnm+dbBYcHj9bm+UbB4cGjtXneKjg82Tz78/v+2/3qmt8XtX83z5sb+872ZV/B4cnm+U3B4cnmeafg8GTzjOe9G7+rrsf7uHXefm5n38m+jBVcGR8/ND6en1UPs+fj1rv2+bJv7De6L8cKrua5Ob6prsd7s/bZc9/Yb3xfbhRc+VnB4cnm+UrB4cGjtXn+VnB4snn+UnB4snn+UXB4snn+VHB4snmuFByebJ7pdHo1vaqu6We17Fv7zvZlquDKtPfQtDetrt5nVX9b17Pvcl96Cq5cz+/Xvevqmt/reo3zxe/FN4uav+072ZdrBVfeK7g2z+372+p6+rt53v7GvrN9uVVw5UcFhyebR5L+n716VT781Ve7VefNd/ad7VcslRGebJ4XCg5PPM/li8vq+rJdc2Pf2b5cKjg82TxfKzg8eLQ2z4GCw5PNc3RwcHRwVF2P90XLzptndQf2Xe7LkYLDk83zUsHhyebZWn6+9XKrup7fPveN/Ub2ZUvB4Ynnua/+1u++tb+339y+3Cs4PHiEB4/wCA8e4cEjPMKDR3jwCI/w4BEePMIjPHiEB49/AR7hwSM8woNHePAIj/DgER48wiM8eIQHj/AIDx7hwSM8woNHeIQHj/DgER7hwSM8eIRHePAIDx7hER48woNHeIQHj/AIDx7hwSM8woNHePAIj/DgER48wiM8eIQHj/AIDx7hER48woNHeIQHj/DgER7hwSM8eIRHePAIDx7hER48wiM8eIQHj/AIDx7hwSM8woNHePAIj/DgER48wiM8eIRHePAIDx7hER48woNHeIQHj/DgER7hwaNu+xdVr7rouE001AAAAABJRU5ErkJggg==";
                class Qt extends(jt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "onClick", void 0), (0, n.Z)(this, "useClickSound", !0), this.buttonMode = !0, this.interactive = !0, this.onClick = new(k()), this.onClick.add((() => {
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
                class Kt extends Qt {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.xE.EMPTY,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 90,
                            i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        super(), (0, n.Z)(this, "wrapper", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "icon", void 0), this.wrapper = this.addChild(new H.W2), this.background = this.wrapper.addChild($.j.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACBUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wpM4qQAAAAqdFJOUwDSDuwsC4bvH7fzUOIGkBR01eUSgvnfUjPDkaHq9FN6AnU0BcjZ7tjHLX4Dw7IAAAHESURBVFjDxZnZYoIwEEWDIAEEWQSUXTa18/8f2M221o0lue35gPMQSObODGPDtFpZZYkSq1GkxkqSVaXWMnH2TW0WdENh1s1eSLxLc3pInu7meheeTwP43mKGeBNyGgEPNxPFS92ikVj6cop5a9ME7O1osWHSRExjnHnFaTJ8NULsrGkWa2fI7HY0k84dOOaeZnN8euBaQAIE2hPzgYQ4PHQbAQkSPDgTtydhjne/pdORBLp7/+CapLC+cwdJEjf30uCy1Pz6U5okDfPqFSWJ/Hpjl7ZMtX1ZG3SSin5RBy25auunXoYkmfA7FXDZav6VITySjndW+/LV/jl9EYDPzJYi1OlHFs0R6vw9xzYEoXlT1xh1LffNu3r/2gKjLlqmEQiNlSh1ySqUumIZSp2xBKVOmIJSKyxGqWOmotQqi1DqCKkGHgjwMwJ/PuCVAV504PMEfFSBpQBYwIBlFxkWgBEHGMyAcRIZgoHRHdlwANskYHOHbEmBjTSy/QcOLZCjFuSACDjWQg7jJI0QTw5q8Nm7fz2uZewFNmRGjsbFBvq9gVpDnNz/W54gVz7QRRVyvQZdCiJXmdAFLHRtjF12C63oXwGnIQ3G+GgEGQAAAABJRU5ErkJggg==")), this.background.anchor.set(.5), this.setBackgroundAlpha(.2), this.setBackgroundSize(e), this.showBackground(i), this.icon = this.wrapper.addChild($.j.from(t)), this.icon.anchor.set(.5), this.game.interaction.click(this, (() => this.onClick.dispatch()))
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
                class Xt extends Kt {
                    constructor() {
                        super("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaBAMAAADKhlwxAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURUdwTP///////////////////////////////////////////////w2imYoAAAAMdFJOUwB/gO8Q33Cfr6C/b5qlnKIAAADTSURBVFjD7dUtEsIwFATgphYTfEUGHYvrBcBiERwAyRE4BkfgEqXDj9hDUUhfUve2puqtitj5ppPZSavKYrFYLEtlv/X5vGovSvuGLp8bfJQ2AMEd0CvtFhlvgKfSPmd8oPFQ2jUEH2gE7VLiiDN0wSlacI4WnKQTvibphIOlE87Sggd2iHEGne66Y8vu/yV+Bk3jbrxBT9MbFk8LiSSeFlJzuIyPw2V8FF52zeBl1z/8pbSPZSGRek/CZIpK+z4ZX8Rbae/6U9n54Wq/EYvFYlksXwyBk9qQ6NAVAAAAAElFTkSuQmCC")
                    }
                }
                class qt extends H.W2 {
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
                class Jt extends(jt($.j)) {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        super(c.xE.WHITE), this.tint = e, this.alpha = t
                    }
                    resize() {
                        var {
                            viewport: t
                        } = this.game;
                        this.width = 2 * t.paddingX + t.width, this.height = 2 * t.paddingY + t.height, this.position.set(-t.paddingX, 0)
                    }
                }
                class $t extends(jt(H.W2, {
                    preventResize: !0
                })) {
                    constructor() {
                        super(), (0, n.Z)(this, "_dirty", void 0), (0, n.Z)(this, "_distance", void 0), (0, n.Z)(this, "_minY", void 0), (0, n.Z)(this, "_scrollContainer", void 0), (0, n.Z)(this, "_scrollMask", void 0), (0, n.Z)(this, "_speed", void 0), (0, n.Z)(this, "_startPosition", void 0), (0, n.Z)(this, "_targetPosition", void 0), (0, n.Z)(this, "hitAreaOffsetLeft", void 0), (0, n.Z)(this, "hitAreaOffsetRight", void 0), (0, n.Z)(this, "paddingBottom", void 0), (0, n.Z)(this, "scrollBar", void 0), this.paddingBottom = 0, this.hitAreaOffsetLeft = 0, this.hitAreaOffsetRight = 0, this.interactive = !0, this._width = 0, this._height = 0, this._minY = 0, this._speed = 0, this._dirty = !1, this._startPosition = null, this._distance = null, this._targetPosition = null, this._scrollMask = new u.TC, this._scrollContainer = new H.W2, this._scrollContainer.interactive = !0, this.scrollBar = null, super.addChild(this._scrollMask), super.addChild(this._scrollContainer), this.mask = this._scrollMask, this._setupEvents()
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
                            this._minY = this._height - i - this._scrollContainer.height - this.paddingBottom, this._height = e + this.paddingBottom - i, this._scrollContainer.hitArea = new K.Rectangle(0 | this.hitAreaOffsetLeft, 0 | i, t - this.hitAreaOffsetRight | 0, this._scrollContainer.height + this.paddingBottom | 0)
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
                const te = $t;
                class ee extends(jt(H.W2, {
                    preventResize: !0
                })) {
                    constructor(t) {
                        super(), (0, n.Z)(this, "value", void 0), this.value = t === 1 / 0 ? new $.j(this.game.loader.getAsset("assets/autoplay-infinity-count.png")) : new A.xv(t, {
                            fill: 16777215,
                            fontSize: 28,
                            fontFamily: "Avenir-Bold"
                        }), this.value.anchor.set(.5), this.addChild(this.value)
                    }
                    setFill(t) {
                        this.value.style ? this.value.style.fill = t : this.value.tint = t
                    }
                }
                class ie extends Qt {
                    constructor(t, e) {
                        super(), (0, n.Z)(this, "actived", void 0), (0, n.Z)(this, "backgroundFill", void 0), (0, n.Z)(this, "backgroundOutline", void 0), (0, n.Z)(this, "realValue", void 0), (0, n.Z)(this, "selected", void 0), (0, n.Z)(this, "value", void 0), (0, n.Z)(this, "select", (() => {
                            this.actived = !0, this.value.setFill(this.game.config.get("colors.black")), this.backgroundFill.tint = this.game.config.get("colors.primary"), this.backgroundFill.alpha = 1, this.backgroundFill.renderable = !0, this.backgroundOutline.renderable = !1
                        })), this.realValue = t, this.selected = !1, this.backgroundFill = this.addChild($.j.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAAA9CAMAAADroBcaAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////x6CpFcAAAAcdFJOUwDJXBuIA27m9xg38dfoKWWOtUmi85QC/pPy/KNCsIVjAAABTUlEQVRo3uWbaXaDMAwGRVhs9j2BRPc/Z8NLl7RQmp9oOjeYh5Fl+bPINlXdtIWbL3o4LrMr2qau5HXirnd6eFzfxS/ppFGpRiij9G+dyash/LSvFCe5GiNPdhZeGKhBgvA3n8ypSVy27XPyahR/2tA5R2qY6LwSMu1zN1qtNzXOj1WXeetC/ltlCJ2axz1V7zhQAMHXDpsoguSzf8sZQvlHXzcqhPH9A3mKkE8JW+pqe41LjlC5FLpOQXR3oRtJqL8LOZKQE6kURSU1S6iWhiXUSMsSaqVgCRWsIreUuYElNMiVJXSlfaGZ9w/hqhxuH8J1CrheDtdt485D0tNOrLiZAm7qg5vL8SannNn2RL19wN0P8W7wcHesvFtwXk6BlyThZX1waSxgXo6XaORlTpe+brSVCh7T/5bbfiTrb6Rk/fPbh+GIbx+G3bcPb2ptD9yZnG4dAAAAAElFTkSuQmCC")), this.backgroundFill.anchor.set(.5), this.backgroundFill.width = 208, this.backgroundFill.height = 61, this.backgroundOutline = this.addChild($.j.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAAA9CAMAAADroBcaAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACBUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wpM4qQAAAAqdFJOUwAQcJ/v7t/+ASB/MI+gIUG/kECAEVExcVDens9vr1/OYI5Pvs2hYbCubp1/YlMAAAJPSURBVGje7ZrbmqJADIQD9AlBjoIooO7OHuv9H3AbdXZ0Rkf3juTbuuaC36SKxG6i20qGcjQKs5Tqi3JI6HkFVTRTlCusqHsSZzHRmGjo4oBmqSCphtEcXzJ+/PDSP1gMMc1e8aH3r/oIaapOVBETJf7X14vPoD1zERMjxR5pc/eNdwqmImZqDHR4p92AMiB2CkrYm22XAiGx1Br4cotHVcRUjfpItIBKiK1a9b7rBqAjxsphd1fpp7j6581H+jK9DUrePORK7C8NZALmQLQyqC8ariP2yqFfq7JExJ+HXIHtuUBALACIMthAUIF8iZZnFxkkIoBeXdShl8HjXWSrY8fthAD5r+sUC0pGJJxiQfs1FkYKDzljEwrxUw7Q0oZUch9Lr02UUoFKDlCDkXopX6FTKmx8yAVygFY+5gA5PORg/wPNHkich4ycyYeoxZ5GfJUDlONF3qQQCtlXj5kw+llO3LQtbh/yG6sYE/04bqwVCikd19spsQMlZYFo/aw9qZbzv9zpr9MAyGREgj3HWyTCRX8LdHRRLmH9fjvyqoWdDxHt/QzEvOHKc8SdFGusefOE12esdABvGzWw7+adGqpl/ElVH2/HpFAN137Llb2RASmwdkz9Y29mWm2Rrhjm9b3bWEShhukct3Yz0HdP7OINEGWMkFxWwH77bEGttUdqHZfqfH9w53QqUmSB/pC5mUM5l4W+Onb7eGaLo41nMmOYtys3S62yJlwawOrFkyNoF2lr532v3lq9rf5lok6G9GXvseYovfmV/r53TPcH+NF/0RiU6I8AAAAASUVORK5CYII=")), this.backgroundOutline.anchor.set(.5), this.backgroundOutline.width = 208, this.backgroundOutline.height = 61, this.value = this.addChild(new ee("function" == typeof e ? e(t) : t)), this.game.interaction.click(this, (() => this.onClick.dispatch())), this.game.interaction.hover(this, (() => {
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
                class se extends(jt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "_values", void 0), this._values = []
                    }
                    addValues(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        this.removeChildren(), this._values = t, this.addChild(...t.map((t => {
                            var i = new ie(t, e);
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

                function oe(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }
                class ne extends(jt(A.xv)) {
                    constructor(t) {
                        super(t, function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? oe(Object(i), !0).forEach((function(e) {
                                    (0, n.Z)(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : oe(Object(i)).forEach((function(e) {
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

                function ae(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }
                class he extends(jt(A.xv)) {
                    constructor(t) {
                        super(t, function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? ae(Object(i), !0).forEach((function(e) {
                                    (0, n.Z)(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ae(Object(i)).forEach((function(e) {
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
                class re extends Qt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "AutoPlaySettingsStopCondButtonReset"), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "text", void 0), (0, n.Z)(this, "state", !1), this.background = this.addChild(new $.j(this.game.loader.getAsset("assets/ui_2020/chip.png"))), this.background.anchor.set(.5), this.background.width = 200, this.background.height = 71, this.text = this.addChild(new A.xv(this.game.i18n.t("AutoPlaySettingsStopCondButtonReset"), {
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
                class le extends(jt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "items", void 0), (0, n.Z)(this, "resetButton", void 0), this.title = this.addChild(new ne(this.game.i18n.t("AutoPlaySettingsStopCondTitle").toUpperCase(), {
                            fontFamily: "Avenir-Bold",
                            fontSize: 28
                        })), this.title.anchor.set(.5, 0), this.items = this.addChild(new H.W2), this.resetButton = this.addChild(new re), this.resetButton.onClick.add(this.reset, this), this.resetButton.active(this.itemsActive)
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
                class ce extends(jt(qt)) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "AutoPlaySettings"), (0, n.Z)(this, "bottomBackgroundTexture", void 0), (0, n.Z)(this, "bottomBackgroundMobileTexture", void 0), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "scrollView", void 0), (0, n.Z)(this, "bottom", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "autoPlayValues", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "subTitle", void 0), (0, n.Z)(this, "stopSection", void 0), (0, n.Z)(this, "closeButton", void 0), (0, n.Z)(this, "spaceKey", void 0), this.bottomBackgroundTexture = c.xE.from(Yt), this.bottomBackgroundMobileTexture = c.xE.from(Ht), this.overlay = this.addChild(new Jt), this.scrollView = this.addChild(new te), this.bottom = this.addChild(new $.j(this.bottomBackgroundMobileTexture)), this.content = this.scrollView.addChild(new H.W2), this.autoPlayValues = this.content.addChild(new se), this.title = this.content.addChild(new he(this.game.i18n.t("AutoPlaySettingsTitle").toUpperCase())), this.title.withGameName(), this.title.anchor.set(.5, 0), this.subTitle = this.content.addChild(new ne(this.game.i18n.t("AutoPlaySettingsSubTitle"))), this.subTitle.anchor.set(.5, 0), this.stopSection = this.content.addChild(new le), this.closeButton = this.addChild(new Xt), this.closeButton.onClick.add((() => this.close())), this.spaceKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Escape), this.spaceKey.onPress.add(this.close, this), this.spaceKey.disable()
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
                var de = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return (e ? t.toLowerCase() : t).replace(/(?:^|\s|[&"'([{])+\S/g, (t => t.toUpperCase()))
                };
                class ue extends Qt {
                    constructor(t) {
                        super(), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "mark", void 0), (0, n.Z)(this, "description", void 0), (0, n.Z)(this, "checked", !1), this.background = this.addChild($.j.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA9CAMAAAApvJHbAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABmUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////26W6sgAAAAhdFJOUwCPnzDvfxD+7iCAnt5v36BwzpBAX89Qr46/vt3NYE6ublTVHtYAAAFZSURBVEjHxZfJdsMgDEUxxgiP8ewmHfX/P1k7cU6dFgJIi779RU+AQBLCrrTul0YhoprOfZ2KcOlBbtxRSs6BbPYbvamRuZ89oVs+3hH3LpM9YfMJfaqc4UeFfpnW4RqDBFb3CYbqhQNb8CwC/mO+xijB+HBUKo5Gczy4BmPVEZPeVZB9X73rnT4hReUemgQjaEboe+YNkb5mPhNhhIFh/LZvikyb9eklwwipaBl0K3o6jYk4M+hFTAy6Ymz5tukMGOFfaV7eDYPuxMKgL8y7xrnnNbPGePXNfFsGsvGPrUtS5ArbVDCMr8GJxvdPWHL+MVrmP/8/IfNj69JF06/HvsVw+hbxHl0fDyqoSUf3ipAwWk0bvJoHRo8sRBuy82Z0zgaVN/Dbs9GkMPS5ZAsv3dlDqb0zVS4r2wJgMh020M3SwHEFAFMOOmKaTOvk0q1rgKk+ky/XHPoNshlvtQO8EbIAAAAASUVORK5CYII=")), this.background.width = 61, this.background.height = 61, this.mark = this.addChild($.j.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAMAAAB61OwbAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ5TOdIAAAAcdFJOUwCg7/5f3mAg35+/cL7uQIAwb38Qzs+vEU8hMVC5i/YxAAAAvUlEQVQoz6WT2RKDIAxFEcsiIFLtXv7/O9sSRkQIPjRv5GZykpuBEDT4TZ1II2b/jQHXhQ/h0AIJBQ9MP4PuBQagoKMzdKBLrAGPAGxNIf8E2AMAOQLMO4BVUonS4xUQ3tThAJhYPnces7WpgsT1nnucNph81rIrNlhYrJg2HrNs6jFW8ORxbpHrIUtfFUAIHVtIXQFkg+I3GLZ67QbLJemsemTBWoBsWYMd2cKyo0B/iv5V9LrxGblh5l1kP+dCHfNSyQUnAAAAAElFTkSuQmCC")), this.mark.width = 32, this.mark.height = 30, this.mark.anchor.set(.5), this.mark.position.set(this.background.width / 2, this.background.height / 2), t && (this.description = this.addChild(new A.xv(de(this.game.i18n.t(t), !0), {
                            fill: 16777215,
                            fontSize: 28,
                            fontFamily: "Avenir-Bold"
                        })), this.description.anchor.set(0, .5), this.description.position.set(80, this.background.height / 2)), this.hitArea = new K.Rectangle(0, 0, this.width, 61), this.game.interaction.click(this, (() => {
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

                function ge(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function pe(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? ge(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ge(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class me extends Qt {
                    constructor(t, e, i) {
                        super(), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "text", void 0), (0, n.Z)(this, "state", !1), this.background = this.addChild(new $.j(this.game.loader.getAsset("assets/ui_2020/chip.png"))), this.text = this.addChild(new A.xv(e, pe(pe({}, i), {}, {
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
                class Ae extends(jt(H.W2, {
                    preventResize: !0
                })) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "StopItemBalance"), (0, n.Z)(this, "state", "inactive"), (0, n.Z)(this, "checkbox", void 0), (0, n.Z)(this, "chips", void 0), (0, n.Z)(this, "chipValue", 10), (0, n.Z)(this, "balance", 0), (0, n.Z)(this, "onClickCheckbox", new(k())), (0, n.Z)(this, "onClickChip", new(k())), (0, n.Z)(this, "onChange", new(k())), this.checkbox = this.addChild(new ue("AutoPlaySettingsStopCondCheckboxBalance")), this.chips = this.addChild(new H.W2), this.chips.addChild(new me(this.chipValue, "10%")).active(!0), this.chips.addChild(new me(25, "25%")), this.chips.addChild(new me(50, "50%")), this.chips.addChild(new me(75, "75%")), this.chips.addChild(new me(100, "100%")), this.checkbox.onClick.add((() => {
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
                class ve extends(jt(H.W2, {
                    preventResize: !0
                })) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "StopItemBalanceDrop"), (0, n.Z)(this, "state", "inactive"), (0, n.Z)(this, "checkbox", void 0), (0, n.Z)(this, "chips", void 0), (0, n.Z)(this, "chipValue", 10), (0, n.Z)(this, "balance", 0), (0, n.Z)(this, "onClickCheckbox", new(k())), (0, n.Z)(this, "onClickChip", new(k())), (0, n.Z)(this, "onChange", new(k())), this.checkbox = this.addChild(new ue("AutoPlaySettingsStopCondCheckboxBalanceDrop")), this.chips = this.addChild(new H.W2), this.chips.addChild(new me(this.chipValue, "10%")).active(!0), this.chips.addChild(new me(25, "25%")), this.chips.addChild(new me(50, "50%")), this.chips.addChild(new me(75, "75%")), this.chips.addChild(new me(100, "100%")), this.checkbox.onClick.add((() => {
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
                var be = 0,
                    we = 1,
                    ye = 2,
                    fe = {
                        fontSize: 22
                    };
                class ke extends(jt(H.W2, {
                    preventResize: !0
                })) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "StopItemWin"), (0, n.Z)(this, "state", "inactive"), (0, n.Z)(this, "checkbox", void 0), (0, n.Z)(this, "chips", void 0), (0, n.Z)(this, "chipType", be), (0, n.Z)(this, "onClickCheckbox", new(k())), (0, n.Z)(this, "onClickChip", new(k())), (0, n.Z)(this, "onChange", new(k())), this.checkbox = this.addChild(new ue("AutoPlaySettingsStopCondCheckboxWin")), this.chips = this.addChild(new H.W2), this.chips.addChild(new me(this.chipType, de(this.game.i18n.t("AutoPlaySettingsStopCondCheckboxWinAny")), fe)).active(!0), this.chips.addChild(new me(we, de(this.game.i18n.t("AutoPlaySettingsStopCondCheckboxWinBig")), fe)), this.chips.addChild(new me(ye, de(this.game.i18n.t("AutoPlaySettingsStopCondCheckboxWinGiant")), fe)), this.checkbox.onClick.add((() => {
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
                        this.state = "inactive", this.chipType = be, this.checkbox.setChecked(!1), this.chips.children.forEach(((t, e) => {
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
                class Ce extends Jt {
                    constructor() {
                        super(1, 13421772), (0, n.Z)(this, "name", "FastStopLayout"), (0, n.Z)(this, "handlerRef", null), this.alpha = 0, this.interactive = !1
                    }
                    press(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        "function" == typeof this.handlerRef && this.handlerRef(), this.handlerRef = this.game.interaction.clickOnce(this, (() => {
                            this.interactive = !1, e && x.to(this, .1, {
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
                class xe extends(jt(qt)) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "GameSettings"), (0, n.Z)(this, "scrollView", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "title", void 0), this.scrollView = this.addChild(new te), this.title = this.scrollView.addChild(new he(this.game.i18n.t("GameSettingsTitle").toUpperCase())), this.title.withGameName(), this.title.anchor.set(.5, 0), this.content = this.scrollView.addChild(new H.W2)
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
                class Be extends(jt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "logo", void 0), (0, n.Z)(this, "progress", void 0), (0, n.Z)(this, "_tweeenProgress", void 0), this.logo = $.j.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAADzBAMAAADTF1+6AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURUdwTP///////////////////////////////////////////////////////81e3QIAAAAOdFJOUwBovPELGCk/kVKoz+B7jzeedwAADjRJREFUeNrsnItvHEcdx/ece9hOjBwopY2K5YY2rdpgJSFuQhpOW1y1aZugK0HpI411VRInhNS65tEQESy3KIS+TpcSCBSwDIVCqHrKu0XQU0ApLaCeTB6Il6x6z4nPd+f9G9jZ3XnuvPa6ASF5FKV2erOf3Znf/Ob3+85vz7D/O+1DYxY0C5oFzYJmQf/HoNr8a9MWsKAJ49q02CzoGoIST9+4J9Q14/vnf68J0LqSbVd+GYKTes25zDtmWFCs7P7zL7Q5iaLb4fdhQE/+7OTzXje7kdMF7fYvdOy5kz/N6oF2kSv6Lk1OMk10snI6oAcp19HI6IGeoHrVTDUoUaKd1KgeqEj3OqMGPcR4w6t6I8f0qptKEHNrdlUL1Mp661EVKMX2qGiB5rDdplSglsBOktUBDbK9LBWoPwAq6IBGAt0yClBXVKBOBSgfFWhYAeqJCtQdGmRdp94gPm6HBhWDXSqXVY77IifsGQ09Rw7poJzzLV58pZqjEV6nSqcM9AluIFdQgPq4veqSbekb3B4VUwFq5QeaVVPEWSPooPIMiTS/41lRpFDif75X6b27BMGzYJpUHxeDBGMn2C6Un5Zs5eOCvrfwVmqP4MNjGqC2Mr9vnRM9bBRw/qQVBd0jmN8zwaUq+OQJUy+u6xc8UsDEHxI8UEYzgGzRnCXRDFm6kWobEaCR16oxoHby6nfgH6e1Y2989fPJIs+Wgvb5erzM7hAaoM2EayRJU7RTIDmEO65ktUFo7CZoc69QFr6eNucY93YUactu0pGssbmDQgyw53J9b1TJhQD5yY7vSb/LnWZsMhVv70mWOCmVKhED6VvlGAysy7yxwyP3R4h+LZgkqlPLbT/McjzNKCd/IHzTV49mP1JWjl3NVY7NnYkw/X8iuOhb9FK1kCCcOCKTGmJnKBpBYyhg4D0BdCSgDnaSUIo3E7FEU2IcK3KoxyMGDTIraT3PsUUBamXCmy7NFDc0KJ6mrQEO5fLIZTS4+VzxlrBgi4oA1Ed9MMaE2BGCWinf0K6rQoQHJSndYY6urtKE1FkidYchvVXUFGictO8uTVtoBjRIbklFXVmlCdAccrRKukJREyBoaEvAL2l+SBkadN/hv3/n5b8ezfAc+BVivdKu+xG31zOmLij+zcXQlN++Phj1XCVsnYiKkjecglvum0e0QE99hgyp3z/CBglTzM/ezb1KZVWfzSpBiX+xeTyMnxLEU7RRjs8X1ynN97IClOJkIh94gx7ngCa9Xps4SeJtUlAbN4Vb6RkF8UncHbRHuZLBb/igaTHHtr9gEiZNgs65sblAmniLBqVx+JwU5dj2Uv4TuTFqrCzqtYhYFBC0AlzpovgscBGeIwL0c+nd2ZUxDFpiuPfTAOb4NcmhoxOTBK2uKta2kONoRYPsTsu7oHNadrxpokWK19Fw4CQjqJ+0I1APDJ/zsi4NPK1T0DNUqYyG1xwPNRfFNEU/fP6i9LzWon1dHD7QbmmvKezzR8F+BoJAkQiC74313jVaKOC1SSyOjIFkelqi6mBPOo/Zj05LRDQcA3ah9H7Q3ZwT7Fiv/u3vSOM4x+yweXdeY7a81xi5Fc9xx4B+oPqze91E8UKa0Hy76JhhKqD0rvrHFjB9T79IakLwAYBZnGdVnWNow0u9hGODHjIfGgJ3Sx0BNQ6hjebhHmRBSWxMraBnO8/DEyeLFt4lvNi0z6IEFsc0yHws8W9odK14RbVV6UltMGcRO/wuHVSk2tLrDANhqDUmHLrJN5s+7E7ip6kxqFxiw4tdngGspcKEjk5qGOps2BW/6A1yF5F0ZPBFnHYrT6kHC62LCoIT1DBwlP5Ej2tkZTrZKdL7QUBlcJ4CqWQoCCYUcp4oHkv3Egu6wGgTDW7kuaabyJbHgjolX+bfWcBD5Wc3a1UiiEkoP5ng2RQ/AI8TjrrGKImWOK3qYeVOrDhOqI+Bp5jBPq2MbHEk16E6TCBV5ON0wi1RdTYHZIU+DUUjT9/LenVJAfa5hYByO6oehgbDFZ9Pol2xHpAD6qZaQJqgu0gS356A1hlTD0MqTY836nJe/UBY3JqrFhrwNp+juzgj94BCgMTKzxAxlnu5vXBUVaNzU+CW88O8LgfsoIXlsbknVmelJgeP4caxt0zZVlai1ZHZPiENtXAtfGPgGK6Eu6zleVUi5gUj9wjtHnOuLzrL8anU2UmBkI/83eMtdoKIwBKY6a8Cgg1YYwclh5mOkSV7sdHVofu6TXw+7cxgW52yoGl/K2DO08l8DgxDywTeJycQ8wThidrInNFyvXiGPDRbDpmUgv8wGY2CpTdew3HhFfyjBXPxxA+ocO+8u3QL5B4xin9cCUvRUhfYE9kUGK9+bAvIZdjLXj76zLbD/ywHip46/BU6jtce3p7//OzRgX2Hn0uzwTTQ50109TFFPuGlAiO+c+hB2UxcUc457H06h0KMHI4kBJlLxlP03by1jCxIEefP+CbaiR7DxIYuPobdCTNx7Idb5b06/XEehkPcUN0bMDl3W2K0oLnSXtPQa49Cx2BRrkYw1htZiWaaU0xFDXcOxn/dcLSrzLEq2z6PvPg0LUD1y3rdirahc9A7Vin3FBy4jD9DxGh4wyhLSZfilYBAwDq+LM7+wZymygHlZJI6agzcXRbriUsoLejHoi4HicNLVgtKiJafm5fAzIsWneICdeJ1Q6AFuYlzssgfhUsSdSt+k5gjVre4pMYluTD4SrDHtw1Kr2PniF/rZB1RSZ1PMYLDqgITSDPm7bVXGYt9J6vWVJMLiE71Q6aWpmrc/yJ5c9frydGJn7zhaV63f8oMBrikSkz2uv+Gxe4d3v3m90MI7PEN2wa+wj/XmSTmq8r2GhjIfGQlfy4pb5aZUDzKI4MvkVEx3viiB42QFXp53QLJJkDUtUfousAoQSi7ocKtJdGD2qjsbR6nNiQiUAtl0a2coqaIQIPUM6D4Ihs5qEidWaMZG40alGSS8KLmQWxoUAuTuo9oTlJoUBctGSCzk+gmTYGQjDPD5pu90YLQyC1n168VLShvsz4n+C9RgNqCxVv9tpZzCAkaCZbFttq2jgcPB8IiyPKgk3XD8uZBD7xwx/McVbMzaPDEIz3mdDLDgdwTT6ia43ymztnascnvIM5SNUF+YuHJvwkciN7FLRzziwTXcK8kB+XJEtgDgvrRcTrfQgcpw/qgVjKffJxfUksV6NYyRKJU1Qd1EQnlJiJufVcgtLpnz3mubCwFYcu1r24ng+qcQDMFNjBg2zz3JwURWXOFTbG5/oL55IwuaJ5EMzD4Q8we2uqBhsQiiFCbpFpOD7RL0H1MXJTEZmE5HZDo9HtCptWzp/GmGiQ8Yu6U7fA84UgBEtXZr1Co9XRr4j2+YMGwSHWm2qgKlNK3BKk9NPEen9veEx91lEV1CXLQoKSMht/W8acpqwBxzaiWke3Wj8uMNNQ7YjVFyrBDJCQaoV6vs1cqywK3p7lFEyFBJ5SZNyPd64GKMg9pqI/z2IX0v3/XciQqUEEB6oto6Jp4jy+jA+rnVFMpShNZS63rcIJ6fvj3+PS+TyEm2r303+NbrgWKpwXxhf57fJ1aIHYgxjRAtN+v6XGYg433tKKge0g3dIsmiKqVutnUDIn337jnABvOqJofPDX27J+/J0zG5yVF9YKh3X5EpEphctjEhbT9ds4I0b5espddbiZZjptGyHZvJJpqc20WFB2ovvDatDtZ0LVus6BZ0CxoFhQedPfCxWRAffJOMn5rLKR+/cvCUzqgLThhmVoHr/Q3IP2i+KbmRB1J9N0plWMmWQtlfdL57JPeZ+sDG7b6fzYFQBn8VvUo9O2XqEDPf2Ec5u2XqXowvzDP+82SbBO2icPnbIwWAjdSErGfoZylhN5KgbywHIQq+qpQWhzz4w0/w3Cudd8WmBOiamAv6gY3Ed8KSyylIJy19fogJ2FJvGQvK/iBdd0NEm++16Oedi684NTq23MxOKqbSu7344C+lV87LWe0O3+/wQG1oAC9DY7cTi+l6vMTBBBULkOnLm6BSuNFPxBwNXkggOdRdjCHZ3UVdF7YMH3QpF8fWfBSmWmy8GyaLgjqhknIClzULQb59zINJa5uH3jc++8UWUV2nBYKcnBanSeNyUENVL18HL/10+6XMyX94SkSWVMbnX6uRfJCXA2KwSw86c/VPJsYsxr5TQ0mlbXOUO8G9EhBdViyWkOnu/CTE15JEKjOhKJPndbbprC0M4NSRiHIielH3BWRRKCPQVAaCrL+l63U6FzyCq42xP9HDBpzDXzYeNSfdRbkvoXhvYFXpVPdD1EZFFirI1KQZcR7wZNUTOMFAciuZmDWHgDFCbtQgqrAwCeMZM3vFgDZq2ABYJUeuklcxKzzRHbWcQHnjHZLCLLr13mPZNHqz1Vc+qw0BvAY3Y6BF4xByx/xTiO1D7S9GAS+RSrhLe95tLoyHjBACWjKiJ90ViUGBaq7XR9TchdbBy1GrEcuA4ooAlDVuVNnIo+C4nL/wlxQzfMPw9TbR3YGcXMqFwRArpjXQoCSA6Bt4YCu0N+TOAzdE1G4KgOdc7XEmr/8GGOo7CDmwELHs3/w970H4V45rgGacN2QxQdVje1lUEAZh+MK3h+uH0rBwxXwjWKLiMMNAWgGgCruVmT5xsqAHBtO7MtC1+vmvBu2wsI0IBk99mlQjrhZB+Q5bAEIvmGwmRHKxqlTH1woIAX1ggVv+UuBAS31whH4vij8Xra4t10uDbwqIABNuKAqqP8XgOz3gVNNoiu5EaORggWdH2TI3yRb+ef+M2MQtQhEQJhAyg5ZCsjQuNuFPGq4q/fGakTCf7OiA2WVPEz7aLdl1KJRi0YtGkEWAQAla4PxKoWGqwAAAABJRU5ErkJggg=="), this.logo.width = 207, this.logo.height = 243, this.progress = new u.TC, this.progress.beginFill(16717864), this.progress.drawRect(0, 263, 207, 4), this.progress.endFill(), this.progress.scale.x = 0, this.addChild(this.logo), this.addChild(this.progress), this._tweeenProgress = new x(this.progress, .5, {
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
                class Se extends Kt {
                    constructor() {
                        super("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTP///////////////////////////////////////////////////////////////////////////4/JsPUAAAATdFJOUwC/XzCfgO/fIH/Pj5BwQBCvb6Aufu5CAAAAu0lEQVRYw+3X3Q6DIAyGYVEExL9tvf97nVuGybKJpLZxyb73sCHPARw0VBVCCCGE0F8XvA9aMpGO/ZB17MbRM9doyfL2tMqLPUnKNb1Vq8mC9pU+GmXkjr7Uqcki9oYsYG/Kh+2MfNDuKVvPly3tZNVkrj0bKugyM+gbFWUYNBXGoE2ZHDkLa7B25yGXAwN7oYnfBehzade+cuK0TyMPGjToM2iTo+MhOsTktGk0rgtX6aeHEEIIIfTD3QFMQUQwK1KW1AAAAABJRU5ErkJggg==");
                        var t = this.game.config.get("homeURL.url", "javascript:history.back()"),
                            e = this.game.config.get("homeURL.target", "self");
                        this.visible = this.game.config.get("homeURL.show", !0), this.onClick.add((() => this.game.openUrl(t, e)))
                    }
                }
                class Pe extends Qt {
                    constructor(t) {
                        super(), (0, n.Z)(this, "icon", void 0), (0, n.Z)(this, "border", void 0), this.preventAutoResize = !0, this.border = this.addChild(new $.j(this.game.loader.getAsset("iconBorderV"))), this.icon = this.addChild(new $.j(t)), this.game.interaction.click(this, (() => {
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
                        t.desktop ? (this.border.texture = this.game.loader.getAsset("iconBorderV"), this.icon.scale.set(1), this.icon.hitArea = new K.Rectangle(0, -30, 110, 150), this.icon.position.set(20, (this.border.height - this.icon.height) / 2)) : t.landscape ? (this.icon.scale.set(2), this.icon.hitArea = null, this.border.texture = this.game.loader.getAsset("iconBorderV"), e.enabled ? (this.border.position.set(0, 0), this.icon.position.set(0, 0)) : (this.icon.position.set(-100, 0), this.border.position.set(this.icon.width + this.icon.x, 0))) : (this.icon.scale.set(1.8), this.icon.position.set(0, 0), this.icon.hitArea = null, this.border.texture = this.game.loader.getAsset("iconBorderH"), this.border.position.set(0, this.icon.height))
                    }
                }
                class Ee extends(jt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "Menu"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "contentItems", void 0), (0, n.Z)(this, "bottom", void 0), (0, n.Z)(this, "items", void 0), (0, n.Z)(this, "homeButton", void 0), (0, n.Z)(this, "closeButton", void 0), (0, n.Z)(this, "bottomBackgroundTexture", void 0), (0, n.Z)(this, "bottomBackgroundMobileTexture", void 0), (0, n.Z)(this, "spaceKey", void 0), (0, n.Z)(this, "currentIndex", 0), (0, n.Z)(this, "onClickHome", void 0), (0, n.Z)(this, "onClickClose", void 0), this.visible = !1, this.interactive = !0, this.bottomBackgroundTexture = c.xE.from(Yt), this.bottomBackgroundMobileTexture = c.xE.from(Ht), this.overlay = this.addChild(new Jt), this.contentItems = this.addChild(new H.W2), this.bottom = this.addChild(new $.j(this.bottomBackgroundMobileTexture)), this.items = this.addChild(new H.W2), this.homeButton = this.addChild(new Se), this.closeButton = this.addChild(new Xt), this.closeButton.onClick.add((() => this.close())), this.spaceKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Escape), this.spaceKey.onPress.add(this.close, this), this.spaceKey.disable()
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
                        var i = this.items.addChild(new Pe(t));
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
                var Te = {
                    counts: [10, 25, 50, 100, 150, 300, 1 / 0]
                };
                class Ze extends it.EventEmitter {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Te;
                        super(), (0, n.Z)(this, "count", void 0), (0, n.Z)(this, "enabled", void 0), this.config = t, this.count = this.config.counts[0], this.enabled = !1
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
                class Oe {
                    constructor(t, e, i) {
                        this.bigMul = t, this.giantMul = e, this.betLevel = i
                    }
                    available(t) {
                        return t >= this.bigMul * this.betLevel.toCoins()
                    }
                    type(t) {
                        return t >= this.giantMul * this.betLevel.toCoins() ? ye : we
                    }
                }
                class Re extends class {
                    constructor() {
                        (0, n.Z)(this, "game", Wt)
                    }
                } {
                    constructor() {
                        super(), (0, n.Z)(this, "left", -1), (0, n.Z)(this, "enabled", !1), (0, n.Z)(this, "onStart", new(k())), (0, n.Z)(this, "onFinish", new(k())), this.update(this.game.server.response), this.game.server.on("response", this.update, this)
                    }
                    update(t) {
                        this.left = ot()(t, "freeRounds", ot()(t, "preSpin.freeRounds", -1)), this.enabled = this.left > -1
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
                class Me {
                    constructor(t) {
                        (0, n.Z)(this, "count", 0), (0, n.Z)(this, "active", !0), this.config = t
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
                class Fe {
                    constructor(t) {
                        (0, n.Z)(this, "watcher", void 0), (0, n.Z)(this, "enabled", !1), (0, n.Z)(this, "onToggle", new(k())), (0, n.Z)(this, "onTryEnable", new(k())), this.config = t, this.watcher = new Me(t)
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
                class Ie {
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
                class Ne extends(jt(A.xv)) {
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
                class De extends(jt(A.xv)) {
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
                class Le extends(jt(A.xv)) {
                    constructor() {
                        super("", {
                            fill: 16777215,
                            fontSize: 14,
                            fontFamily: "Avenir-Medium"
                        }), (0, n.Z)(this, "startDate", new Date), this.alpha = .5, this.anchor.set(0, .5), this.updateTime(), setInterval((() => this.updateTime()), 1e3)
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
                class We extends(jt(A.xv)) {
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
                class _e extends class {
                    constructor() {
                        (0, n.Z)(this, "view", void 0)
                    }
                    toView(t) {
                        return this.view = t, t
                    }
                } {
                    constructor() {
                        super(...arguments), (0, n.Z)(this, "_netPositionValue", 0), (0, n.Z)(this, "_enabled", !1)
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
                class Ue extends ue {
                    constructor() {
                        super("GameSettingsBackgroundSounds"), (0, n.Z)(this, "name", "BackgroundSoundsCheckbox")
                    }
                    resize() {
                        this.game.device.desktop ? this.scale.set(1) : (this.game.device.landscape, this.scale.set(1.8))
                    }
                }
                class Ge extends ue {
                    constructor() {
                        super("GameSettingsFullscreen"), (0, n.Z)(this, "name", "FullscreenCheckbox")
                    }
                    resize() {
                        this.game.device.desktop ? (this.scale.set(1), this.visible = !0) : this.visible = !1
                    }
                }
                class Ve extends ue {
                    constructor() {
                        super("GameSettingsGameSounds"), (0, n.Z)(this, "name", "GameSoundsCheckbox"), this.description.style.wordWrapWidth = 220
                    }
                    resize() {
                        this.description.style.wordWrap = this.game.device.landscape || this.game.device.desktop, this.game.device.desktop ? this.scale.set(1) : (this.game.device.landscape, this.scale.set(1.8))
                    }
                }
                class je extends ue {
                    constructor() {
                        super("GameSettingsIntroScreen"), (0, n.Z)(this, "name", "IntroScreenCheckbox"), this.description.style.wordWrapWidth = 220
                    }
                    resize() {
                        this.description.style.wordWrap = this.game.device.landscape || this.game.device.desktop, this.game.device.desktop ? (this.scale.set(1), this.position.set(-300, 350)) : (this.game.device.landscape, this.scale.set(1.8), this.position.set(-400, 760))
                    }
                }
                class ze extends ue {
                    constructor() {
                        super("GameSettingsLeftHand"), (0, n.Z)(this, "name", "LeftHandCheckbox"), this.description.style.wordWrapWidth = 300
                    }
                    resize() {
                        this.description.style.wordWrap = this.game.device.landscape || this.game.device.desktop, this.game.device.desktop ? this.visible = !1 : (this.game.device.landscape, this.scale.set(1.8), this.visible = !0)
                    }
                }
                class Ye extends ue {
                    constructor() {
                        super("GameSettingsQuickSpin"), (0, n.Z)(this, "name", "QuickSpinCheckbox")
                    }
                    resize() {
                        this.game.device.desktop ? this.scale.set(1) : (this.game.device.landscape, this.scale.set(1.8))
                    }
                }
                class He extends ue {
                    constructor() {
                        super("GameSettingsRiskFeatureCheckbox"), (0, n.Z)(this, "name", "RiskFeatureCheckbox")
                    }
                    resize() {
                        this.game.device.desktop ? this.scale.set(1) : (this.game.device.landscape, this.scale.set(1.8))
                    }
                }
                i(7859);
                const Qe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACHUExURUdwTF3XDV3aCl7YDVzQF13ZDGDXC1X/AFXUAF7YDGDYDl7XDV3YDV7YDV3XDF3XDF7YDFzYDF3XDF3YDV3YDF7XDV3YDF7XDV3XDF7WDF3ZC13YDVjSC13YDV7YDF7XDV3XDV/fD13XDV3YDVzUDmDbCF3YDV3XDF3YDF7ZDF3XDF3YDV7YDQaFSaEAAAAsdFJOUwB1MfkLKS0DBvQ1qNKtaMrsY9znVda5w6F5RIYXXYyCzxDiviQdmPBPPo5wBc1wAAAAA81JREFUWMO9WemaqjAMrbIvIosLMOi466jv/3x3pm1AoKUty+0v/WhDSU5OTlOEhMMyV1m69eNQ08LY36bZyrTQ4DHPNvd3a9w32XyQ1efpzR2nZ0/b1m75FozlTt0ndhC/JUYc2Gq7jZKaR/dRbhQ6Qnph5NG+5vUkUti1eyjXaZuX0Z5gvDZaOeXgynphXzkxOPJmHYMqBHspfxg+zPcEW3E9mOkbYrsrB8xKTDbAtLMSTf2mM9e5nN/yNV3w3Y2GlIYsk0aRndEwph3osBcUna4KNl2K+AV3Mxa1uziqJdMR1vH2nMp4qysyKfvpF3ka9CGWgKz9YuKMPIv6UdaOrGagznD677fas9MCv+3zv0VuEE/6TWgQfvCGlAWShfsGFkm66UMM6yQJazlgYZ7UzGH10cQ5ePhEc4TflQ2tvLMmrvSE6Xf1MokRkOiNN/0MFws/2NCshBre8AKNMDBrJHYta+ZjGDZrXsbFa4PQaFte0mTu62FjG7a4gSSEUXGer273cmKxzqFi3rgWSelxxeu0BwvLMVZ+ePNXVbsFraJJ830lEl5/P7aqdo+gPpbNJ1tI4kUfT+ggg05XZl6ff9Mw7AFi/QyS8NIW1ZjwLQJpR03n2htqN2TwoYVLkUnS7qzGNSCs7kz9gb9mRyrKTclwCoKNnVQ3UuM85dg9QTrnHazsEXQ8lItmx6IHwe+aCworZwnZDOzuuGctXD4RRtuFHSLGx77ALl+AXDBeEAZHwQm90wx7BHY7olLgwCI8TefEtgnU1VtCZut4BtI4hu+MlH3AUWmPxIZDjitucESsnuVwPOmGPXXFiRO8kmaWIMNdsJt2EwANns+DW0mMZ1J0TTiPLgTEQuHGT5Br/GnJCOm/jUjX0ATpSOlLWPn0Ag2GrVA40pTuIiEXvn5vxE2P8wcloU7azLVGG8EvxGRCabOb6FeN9oSEXSB6QWkKat0amVoOpUlUTLOPnsdFWiSfJco/pCCzwDFGWf6FgiXtKnBt9FfSVSSxSE12JFVjJbHEovCPNjTJ/gURhV+SMrbYJrJV8VPGTia8ab2Z4Kgw2eFmsuMYHCAHd4XJyfnjAEm9PBtquHXkne6QPllbASTkCI2Q5/9q3SBznGaTya1Cu7HbY9M19KZrQZZNU08Rdbon0l7Q5l0rZYrpi9q8H43pmXxjegaNaVvGW2O30tF0zf/KZb+mBUVlXl1XSAVlqgsWNNmVEGpeYoXNS6yw7yXWH+hlr93UKXyii0IS9kmuNmkcs7PTNuqcMxcNHuT6eB3+vsAJ17LXx/8A6kQS8eozSXoAAAAASUVORK5CYII=",
                    Ke = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACcUExURUdwTP8gIP8hIf8gIP8hIf8hIf8fH/8jI/8gIP8AAP8hIf8iIv8hIf8XF/8qKv8fH/8iIv8hIf8gIP8hIf8hIf8hIf8gIP8fH/8hIf8gIP8hIf8gIP8iIv8hIf8gIP8gIP8hIf8gIP8hIf8fH/8hIf8gIP8gIP8hIf8fH/8iIv8hIf8jI/8eHv8fH/8iIv8gIP8hIf8fH/8fH/8hIT5bvnQAAAAzdFJOUwDS9GXk5ykk4gODLM4LBjF4qXXWrrn6GDbcwY5pxl+kVPnuCInrJ59BHkUzEXA8TplYEFU3kgwAAAO2SURBVFjDxZlpm6IwDIADDFgGYXAQFTzxvubk//+31baIHL1g2e0nH0lfQpomaQogHLaz8g+xFq2TZB1p8cFfOTa0Hm9+qKeVoYf+WyvqFKXMgaYN2fainwpGf6Fuk80sSiVGNNuoaWuYT7PX4dY4W2MXwB1bZ2Mbrp8emoaC1pPcCKPww6oKWB/hKDfIRBLrTR9z5saVJXU15g+xqSfDtbRMfiBQ5TLI1NYsMXeVue1gLxbeDzLHXolEX6lkcJSz2zGgE1753nCgS+Z7sgvt+dQeB453eEPqnRcV37xQjx8ylbEpd/Crtpl+qaWHLJ2XMtbircyS+3TWJLDMODqtyLNFs5C1ILNrvM7Sm+ub66xXdopH9tu2efDekj1Ydg0SHwZt0gLxjWkpnmEvD9w2YBdvwlEhwNg4TiZOu/zoJDiKPnuzgb/Cb5t5fYwxnj7CrLP7VUwqidjYA8zcoO/4TZ8FobOZaj0+tqel5rnwzycGvT9cDSs8LL58d8/wXHLv5a5eMT7gaGN6hV1TrBLGpHboCbhpOi6uX8HKOHmFpXmagEy5/Tpnpn/uscSxfiKLTB+/lB9P8N/7PKpprKn1ZBYXoJ9HuaiwklJkNpd4WIQrPyxzAgVyDzG5cHp4wsf9R8wzZJnM4wLE2SYeMizBJPO5xBY3H7PXVSfmkgVcYlrdJi6t2yBLFnHBxqnIgR+2ievIQi418oJ48TdIkiW48E08eclZu4KSd7IMl6zekgSKL5AiS3HhC1fWEPCcokSW4hK3COAed1OBaEaW4kLvLrUDvRpUuWQhl4RyHbC0OO1nZDEXXCwIiRoYSYPXiqZAsqZAqouHJBdPU3A3U4pM3S1W2CCWFJluEKUtLUWmW1ochNATTIZMg5AwbKICSoJMw6Yo0KMSSEjOAr0gNaEKRkTOUhM/maIaiICcJVNu+ke1CD75kf45BQtiAHjkvGBhl1iIOT0jn3glFrMoRJwPZpOfisJGZSwlRydOGUteolp4U/KcU3jTw5jqUYGSXc5RoeHhBpMRcA43TY9jlpbujrzjWHaALAYMW5ivbgYrTemXDpCdHXm7O6R31lborhECm7/Vuqk0qp2WzSay/rrz79pj3TX0umtB5k1TRa9zRU3TR5s3UNopjiZq8+aN6USlMZ3QxrT3P1rpt/HTrPn/I2+ydLQUdNQvy8d1hdSibNQvWGQvnDq6EoLuLrGgs2s3rHU3F4Vk2flXmxdoMSZ+XHcZG/sTaD3w9fE82N1eoO+CueT18R9RSEyQxPodRgAAAABJRU5ErkJggg==",
                    Xe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACcUExURUdwTAOr8AOr8AOr7wSr7wWr7wWt7QC//wCq4gSr8AOr7wSt8ASq7wSr8ASq7wCv7wSr8AKr8ASq7wOq7wSq8ACm8wan8gOq8AOr8AWq7wOr8AKr8QSr8ASr8ASr7wOs8Aaq8QSr8AOq7gSq8AOr8ACq7gOr8AOr8ASr7wWq7wSq8AOq7wSs7gOr7wSq7wen8AOr7wSr7wSs8gSr8NIVJa4AAAAzdFJOUwDS34T6MSwECfTYNXXu5hCuVrnLZxcpjs9jmVy9q6hEJ3pOeIkew5+kYGrFPoBwI5PqOwkKd94AAAPzSURBVFjDtVnblqowDC2IgAioeFe8DV5mdNSZ4///24GkCKhtgwx9cq2mMSQ7O2nKmHJZZi867DXdMwxP1/aHqGdarPJqbsLW7Wm1wk2zktaxfhMuffymbmvevylWf17eJ/ZRvxGWfrTLWTv1c6e9YDtdjYaxCns4Wk23gZfb9KclrG5P7ueM4DJ6FhhdAuMuMmlTvTDOnDjoiKQ6gywEY5I/Rloqv1SY0l6mZmsjtd5eCtvlWi28XqbA7qlEz1zSWdH8tnL4gbMcDQcesogcaivi/jhIjlhdjs52GWy2OeK7Qs3WAiUWnXLJ1FkoNH/ifqN8+jfw5Kd0d/AOsQwkNvVw7+s9yvrC0y9QN0L8Ht+l2CPi+SlTbMy37fvkvcUcfMxu5IdFlbKA2Bg/YBFQ7nSqKO5AEhqFHLCAJw1TzHgfP6Hje05w/hZrNsG6SR7NU/iKSHRi95Ojdk2MmwgEpjl7oF5ogsSxG0axHgVDUeoCAvwsfi7ICz5yrT1VOkek+Ru23fsfgcFdgRWvimoocgawmJ9++hyEm1Lk38LNV28wS30t4nWz4GUoXoGQ8xLEzHbc3zNeDKVg5rtrmYcTK5x9Dps/qFnk5X+wu85YTSN3MuiND9H+JGM5vRBJ5erKSRAQpkPnB4I7suKZXPHujoRL8mPPSlosdAXbJ9ubVJDuCQT9TdyhuBzolicD8fNC0PviWg+ubVkI6Ra5jdj5qvbEglJkogVkF3eQODwZcYeJxBxRPCPqvTryjM5g08Bmghi7D4/SebjYYpzk4Mk7j2czYEn294nMiTlUUNgBvziorABYOOw3Iw354q1w/6oMRCL2y1oyrso3wrzxU98KhgBgBuKEso8OXhIAb4MkM4iKoSVvURoPrtgjumKMsSYs7gpg46ta3JU0wC+DpxHhNlffYIpw2xMTZIUMQMlPdBo1pXezeFHwnjqtFAnRa1cDfRf+pWJOmyWJnsBVnOjLliYaKBJLSxZTWuzCN8q/at3LP7Vhsa5Dit6sYSG2WJeYuPtNoid0elO4wfuhqVScawpVbSyUfT536ar05ttYReOdrx8xG1Jukf3CZaypJBaCYrMwQJBebjh58xtZQDE4u4+5ai/jFdxoUzzsEi+Q+FXnOHzatwLqk4cLJB+QRPIaaSqTKHoa0Sgv6aT14pKejhXsKnpt51UY/mAQsnw1CKlvdMPMisOmgZBM6hqP1TfQq28EeR/G/vnQtLYxb32DaVZhlK6MTF3D/zhT0nGYsVQU5Wb2XEGir9wDy0n2wHIq+cDCansSYvU9YrHant3A6noeCjHstTxt8jiKHmPbrPKyzN7mcHJ+4z9oec7psCE9H/8H7cYwlvfLO08AAAAASUVORK5CYII=",
                    qe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAwUAAAFkBAMAAACDfIqcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURQ0NDf///////xEREREREf///////6uZoDAAAAAHdFJOU8whHsC+BBX9xfwkAAACKUlEQVR42u3RQQ2DUBRFwWcBBwULGGiDgc+CPZDg3wJpAA03IXMknKllH5TsaDV3ytZqMyHcWr0J4T4MGOgymEal+t0G31IqBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAgAEDBgwYMGDAgAEDBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgwYMGDAgAEDBgwYMGAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzE4M0G06hUj4GiMWCgv8FmQri1ZhPCtVr2QcmOdgK51GPO7vMFjAAAAABJRU5ErkJggg==";

                function Je(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }
                class $e extends A.xv {
                    constructor(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        super(t.toUpperCase(), function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? Je(Object(i), !0).forEach((function(e) {
                                    (0, n.Z)(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Je(Object(i)).forEach((function(e) {
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
                class ti extends(jt($.j)) {
                    constructor(t) {
                        var e;
                        super(), this.texture = null !== (e = this.game.loader.getAsset(t)) && void 0 !== e ? e : c.xE.EMPTY
                    }
                }

                function ei(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }
                class ii extends A.xv {
                    constructor(t) {
                        super(t, function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? ei(Object(i), !0).forEach((function(e) {
                                    (0, n.Z)(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ei(Object(i)).forEach((function(e) {
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

                function si(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }
                class oi extends A.xv {
                    constructor(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        super(t.toUpperCase(), function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? si(Object(i), !0).forEach((function(e) {
                                    (0, n.Z)(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : si(Object(i)).forEach((function(e) {
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
                const ni = class extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupFreeRound"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "icon", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContinue", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new Jt, this.content = new H.W2, this.icon = new ti(Qe), this.icon.anchor.x = .5, this.title = new oi(this.game.i18n.t("PopupFreeRoundStartTitle")), this.title.anchor.x = .5, this.message = new ii("", {
                            wordWrap: !0,
                            wordWrapWidth: 600
                        }), this.message.anchor.x = .5, this.actionContinue = new $e(this.game.i18n.t("PopupActionContinue"), {
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
                const ai = class extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupMaxLimit"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContinue", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new Jt(.7), this.content = new H.W2, this.background = new $.j(this.game.loader.getAsset(qe)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new oi(this.game.i18n.t("PopupMaxLimitTitle")), this.title.anchor.x = .5, this.message = new ii(this.game.i18n.t("PopupMaxLimitMessage"), {
                            wordWrap: !0
                        }), this.message.anchor.x = .5, this.actionContinue = new $e(this.game.i18n.t("PopupActionReload"), {
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
                const hi = class extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupNetworkError"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "icon", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionReload", void 0), (0, n.Z)(this, "_resolver", null), this.overlay = this.addChild(new Jt), this.content = this.addChild(new H.W2), this.icon = new ti(Ke), this.icon.anchor.x = .5, this.title = new oi(this.game.i18n.t("PopupNetworkErrorTitle"), {
                            align: "center"
                        }), this.title.anchor.x = .5, this.message = new ii(this.game.i18n.t("PopupNetworkErrorMessage"), {
                            fontSize: 36
                        }), this.message.anchor.x = .5, this.actionReload = new $e(this.game.i18n.t("PopupActionReload"), {
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
                class ri extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupQuickSpin"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionEnable", void 0), (0, n.Z)(this, "actionClose", void 0), (0, n.Z)(this, "escKey", void 0), (0, n.Z)(this, "enterKey", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new Jt(.7), this.content = new H.W2, this.background = new $.j(this.game.loader.getAsset(qe)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new oi(this.game.i18n.t("PopupQuickSpinTitle")), this.title.anchor.x = .5, this.message = new ii(this.game.i18n.t("PopupQuickSpinMessage"), {
                            fontSize: 35,
                            wordWrap: !0,
                            wordWrapWidth: 600
                        }), this.message.anchor.x = .5, this.actionEnable = new $e(this.game.i18n.t("PopupActionEnable"), {
                            fill: 10066329
                        }), this.actionEnable.anchor.x = .5, this.game.interaction.out(this.actionEnable, (() => this.actionEnable.style.fill = 10066329)), this.game.interaction.hover(this.actionEnable, (() => this.actionEnable.style.fill = 16777215)), this.game.interaction.click(this.actionEnable, (() => this.hide(!0))), this.actionClose = new $e(this.game.i18n.t("PopupActionClose"), {
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
                const li = class extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupRestore"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "icon", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContinue", void 0), (0, n.Z)(this, "resolver", null), this.overlay = this.addChild(new Jt), this.content = this.addChild(new H.W2), this.icon = new ti(Qe), this.icon.anchor.x = .5, this.message = new ii(this.game.i18n.t("PopupRestoreMessage"), {
                            wordWrap: !0,
                            wordWrapWidth: 320
                        }), this.message.anchor.x = .5, this.actionContinue = new $e(this.game.i18n.t("PopupActionContinue"), {
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
                const ci = class extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupRiskNBuy"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionYes", void 0), (0, n.Z)(this, "actionNo", void 0), (0, n.Z)(this, "escKey", void 0), (0, n.Z)(this, "enterKey", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new Jt(.7), this.content = new H.W2, this.background = new $.j(this.game.loader.getAsset(qe)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new oi("RISK FEATURE"), this.title.anchor.x = .5, this.message = new ii("", {
                            wordWrap: !0,
                            whiteSpace: "normal",
                            breakWords: !0
                        }), this.message.anchor.x = .5, this.actionYes = new $e(this.game.i18n.t("PopupActionYes"), {
                            fill: 16777215
                        }), this.actionYes.anchor.x = .5, this.game.interaction.out(this.actionYes, (() => this.actionYes.style.fill = 16777215)), this.game.interaction.hover(this.actionYes, (() => this.actionYes.style.fill = 10066329)), this.game.interaction.click(this.actionYes, (() => {
                            this.hide(!0)
                        })), this.actionNo = new $e(this.game.i18n.t("PopupActionNo"), {
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
                const di = class extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupSound"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "icon", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContainer", void 0), (0, n.Z)(this, "actionYes", void 0), (0, n.Z)(this, "actionNo", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new Jt, this.content = new H.W2, this.icon = new ti(Xe), this.icon.anchor.x = .5, this.message = new ii(this.game.i18n.t("PopupSoundMessage"), {
                            wordWrap: !0
                        }), this.message.anchor.x = .5, this.actionContainer = new H.W2, this.actionYes = new $e(this.game.i18n.t("PopupActionYes"), {
                            fill: 16777215
                        }), this.game.interaction.out(this.actionYes, (() => this.actionYes.style.fill = 16777215)), this.game.interaction.hover(this.actionYes, (() => this.actionYes.style.fill = 10066329)), this.game.interaction.click(this.actionYes, (() => this.hide(!0))), this.actionNo = new $e(this.game.i18n.t("PopupActionNo"), {
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
                const ui = class extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupSpendingBudget"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContinue", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new Jt(.7), this.content = new H.W2, this.background = new $.j(this.game.loader.getAsset(qe)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new oi(this.game.i18n.t("PopupSpendingBudgetTitle")), this.title.anchor.x = .5, this.message = new ii(this.game.i18n.t("PopupSpendingBudgetMessage"), {
                            wordWrap: !0
                        }), this.message.anchor.x = .5, this.actionContinue = new $e(this.game.i18n.t("PopupActionContinue"), {
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
                const gi = class extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupUnexpectedError"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContinue", void 0), (0, n.Z)(this, "_resolver", null), this.overlay = new Jt(.7), this.content = new H.W2, this.background = new $.j(this.game.loader.getAsset(qe)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new oi(this.game.i18n.t("PopupUnexpectedErrorTitle")), this.title.anchor.x = .5, this.message = new ii(this.game.i18n.t("PopupUnexpectedErrorMessage")), this.message.anchor.x = .5, this.actionContinue = new $e(this.game.i18n.t("PopupActionReload"), {
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
                class pi extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupWilds"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionEnable", void 0), (0, n.Z)(this, "actionClose", void 0), (0, n.Z)(this, "escKey", void 0), (0, n.Z)(this, "spaceKey", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new Jt(.7), this.content = new H.W2, this.background = new $.j(this.game.loader.getAsset(qe)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new oi(this.game.i18n.t("PopupWildsTitle"), {
                            fontSize: 40,
                            wordWrap: !0,
                            wordWrapWidth: 600,
                            breakWords: "ja" === this.game.i18n.language || "cn" === this.game.i18n.language,
                            align: "center"
                        }), this.title.anchor.x = .5, this.message = new ii(this.game.i18n.t("PopupWildsMessage"), {
                            fontSize: 35,
                            wordWrap: !0,
                            wordWrapWidth: 600
                        }), this.message.anchor.x = .5, this.actionEnable = new $e(this.game.i18n.t("PopupActionYes"), {
                            fill: 10066329
                        }), this.actionEnable.anchor.x = .5, this.game.interaction.out(this.actionEnable, (() => this.actionEnable.style.fill = 10066329)), this.game.interaction.hover(this.actionEnable, (() => this.actionEnable.style.fill = 16777215)), this.game.interaction.click(this.actionEnable, (() => this.hide(!0))), this.actionClose = new $e(this.game.i18n.t("PopupActionNo"), {
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
                const mi = class extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupZeroBalance"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContinue", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new Jt(.7), this.content = new H.W2, this.background = new $.j(this.game.loader.getAsset(qe)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new oi(this.game.i18n.t("PopupZeroBalanceTitle")), this.title.anchor.x = .5, this.message = new ii(this.game.i18n.t("PopupZeroBalanceMessage"), {
                            wordWrap: !0
                        }), this.message.anchor.x = .5, this.actionContinue = new $e(this.game.i18n.t("PopupActionContinue"), {
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

                function Ai(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function vi(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Ai(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Ai(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                const bi = [...[{
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
                    }], ...[{
                        url: "assets/audio/background_normal.mp3",
                        name: "background_normal_sound",
                        metadata: {
                            audioMetadata: {
                                type: "background",
                                volume: .4,
                                loop: !0
                            }
                        }
                    }, {
                        url: "assets/audio/big_win.mp3",
                        name: "big_win_sound",
                        metadata: {
                            audioMetadata: {
                                type: "background",
                                volume: 1,
                                loop: !1
                            }
                        }
                    }, {
                        url: "assets/audio/giant_win.mp3",
                        name: "giant_win_sound",
                        metadata: {
                            audioMetadata: {
                                type: "background",
                                volume: 1,
                                loop: !1
                            }
                        }
                    }, {
                        url: "assets/audio/rndm_pick.mp3",
                        name: "rndm_pick_sound",
                        metadata: {
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
                            audioMetadata: {
                                type: "effects",
                                volume: 1,
                                loop: !1
                            }
                        }
                    }, {
                        url: "assets/audio/spin_start.mp3",
                        name: "spin_start_sound",
                        metadata: {
                            audioMetadata: {
                                type: "effects",
                                volume: 1,
                                loop: !1
                            }
                        }
                    }, {
                        url: "assets/audio/spin_fast.mp3",
                        name: "spin_fast_sound",
                        metadata: {
                            audioMetadata: {
                                type: "effects",
                                volume: 1,
                                loop: !1
                            }
                        }
                    }, {
                        url: "assets/audio/player_pick.mp3",
                        name: "player_pick_sound",
                        metadata: {
                            audioMetadata: {
                                type: "effects",
                                volume: 1,
                                loop: !1
                            }
                        }
                    }, {
                        url: "assets/audio/win_normal_3.mp3",
                        name: "win_normal_sound",
                        metadata: {
                            audioMetadata: {
                                type: "effects",
                                volume: 1,
                                loop: !1
                            }
                        }
                    }, {
                        url: "assets/audio/clear.mp3",
                        name: "clear_sound",
                        metadata: {
                            audioMetadata: {
                                type: "effects",
                                volume: 1,
                                loop: !1
                            }
                        }
                    }, {
                        url: "assets/audio/collect.mp3",
                        name: "collect",
                        metadata: {
                            audioMetadata: {
                                type: "effects",
                                volume: 1,
                                loop: !1
                            }
                        }
                    }, {
                        url: "assets/audio/buy_ball.mp3",
                        name: "buy_ball",
                        metadata: {
                            audioMetadata: {
                                type: "effects",
                                volume: 1,
                                loop: !1
                            }
                        }
                    }], {
                        url: "assets/images/bgln.jpg",
                        name: "bgln",
                        metadata: {
                            platform: ["phone", "tablet", "desktop"]
                        }
                    }, {
                        url: "assets/images/bgpn.jpg",
                        name: "bgpn",
                        metadata: {
                            platform: ["phone", "tablet", "desktop"]
                        }
                    }, {
                        url: "assets/images/logo.png",
                        name: "logo",
                        metadata: {
                            platform: ["phone", "tablet", "desktop"]
                        }
                    }, {
                        url: "assets/icon-random.png",
                        name: "iconRandom",
                        metadata: {}
                    }, {
                        url: "assets/icon-chevrone.png",
                        name: "iconChevrone",
                        metadata: {}
                    }, {
                        url: "assets/gameRulesButtonClear.png",
                        name: "gameRulesButtonClear",
                        metadata: {}
                    }, {
                        url: "assets/images/grid.png",
                        name: "grid",
                        metadata: {}
                    }, {
                        url: "assets/images/hit_coins_table_background_desktop.png",
                        name: "hit_coins_table_background",
                        metadata: {
                            platform: ["desktop"]
                        }
                    }, {
                        url: "assets/images/hit_coins_table_background_mobile_p.png",
                        name: "hit_coins_table_background_p",
                        metadata: {
                            platform: ["tablet", "phone"]
                        }
                    }, {
                        url: "assets/images/hit_coins_table_background_mobile_l.png",
                        name: "hit_coins_table_background_l",
                        metadata: {
                            platform: ["tablet", "phone"]
                        }
                    }, {
                        url: "assets/images/hit_coins_table_full_background_mobile_p.png",
                        name: "hit_coins_table_full_background_mobile_p",
                        metadata: {
                            platform: ["tablet", "phone"]
                        }
                    }, {
                        url: "assets/images/hit_coins_table_full_background_mobile_l.png",
                        name: "hit_coins_table_full_background_mobile_l",
                        metadata: {
                            platform: ["tablet", "phone"]
                        }
                    }, {
                        name: "selected-button_clear",
                        url: "assets/images/selected/button-clear.png",
                        metadata: {}
                    }, {
                        name: "selected-select",
                        url: "assets/images/selected/selected-select.png",
                        metadata: {}
                    }, {
                        name: "selected-empty",
                        url: "assets/images/selected/selected-empty.png",
                        metadata: {}
                    }, {
                        name: "ball-red",
                        url: "assets/images/balls/redMini.png",
                        metadata: {}
                    }, {
                        name: "ball-green",
                        url: "assets/images/balls/greenMini.png",
                        metadata: {}
                    }, {
                        name: "ball-blue",
                        url: "assets/images/balls/blueMini.png",
                        metadata: {}
                    }, {
                        name: "ball-orange",
                        url: "assets/images/balls/orangeMini.png",
                        metadata: {}
                    }, {
                        name: "ball-violet",
                        url: "assets/images/balls/violetMini.png",
                        metadata: {}
                    }, {
                        name: "ball-extra",
                        url: "assets/images/balls/extraMini.png",
                        metadata: {}
                    }, {
                        name: "tableExtra",
                        url: "assets/images/tableExtra.png",
                        metadata: {}
                    }, {
                        name: "btnExtraBuy",
                        url: "assets/images/btnExtraBuy.png",
                        metadata: {}
                    }, {
                        url: "assets/images/textBigWin.png",
                        name: "textBigWin",
                        metadata: {
                            platform: ["phone", "tablet", "desktop"]
                        }
                    }, {
                        url: "assets/images/textGiantWin.png",
                        name: "textGiantWin",
                        metadata: {
                            platform: ["phone", "tablet", "desktop"]
                        }
                    }, {
                        name: "WinFont",
                        url: "assets/fonts/winFont.xml",
                        metadata: {}
                    }, {
                        name: "Numbers1",
                        url: "assets/fonts/numbers1.xml",
                        metadata: {}
                    }, {
                        url: "assets/animation/selected-cells/skeleton.json",
                        name: "effectSelectedCells",
                        metadata: {}
                    }, {
                        url: "assets/animation/big-win/skeleton.json",
                        name: "effectBigWin",
                        metadata: {
                            platform: ["phone", "tablet", "desktop"]
                        }
                    }, {
                        url: "assets/animation/giant-win/skeleton.json",
                        name: "effectGiantWin",
                        metadata: {
                            platform: ["phone", "tablet", "desktop"]
                        }
                    }, {
                        url: "assets/animation/bg/skeleton.json",
                        name: "bg_animation",
                        metadata: {}
                    }, {
                        url: "assets/animation/bg-sky/skeleton.json",
                        name: "bg_sky_animation",
                        metadata: {}
                    }, {
                        url: "assets/animation/hit-coins/skeleton.json",
                        name: "hit-coins",
                        metadata: {}
                    }, {
                        url: "assets/animation/ball/skeleton.json",
                        name: "ball_animation",
                        metadata: {}
                    }, {
                        url: "assets/animation/small_ball/skeleton.json",
                        name: "small_ball_animation",
                        metadata: {}
                    }, {
                        url: "assets/animation/spin/skeleton.json",
                        name: "button_spin_animation",
                        metadata: {}
                    }],
                    wi = {
                        fastSpeed: 0,
                        quickSpeed: 125,
                        normalSpeed: 350,
                        maxNormalBalls: 20,
                        maxAddBalls: 5,
                        colors: {
                            primary: 16771346,
                            primaryHover: 16774819,
                            secondary: 4731433,
                            secondaryHover: 7822416
                        }
                    };
                class yi extends R {
                    constructor(t, e, i) {
                        super(t, e, i), (0, n.Z)(this, "soundBackground", void 0), (0, n.Z)(this, "soundBigWin", void 0), (0, n.Z)(this, "soundClear", void 0), (0, n.Z)(this, "soundClickNormal", void 0), (0, n.Z)(this, "soundGiantWin", void 0), (0, n.Z)(this, "soundPlayerPick", void 0), (0, n.Z)(this, "soundRandomPick", void 0), (0, n.Z)(this, "soundSpinFast", void 0), (0, n.Z)(this, "soundSpinStart", void 0), (0, n.Z)(this, "soundWinNormal", void 0), (0, n.Z)(this, "soundCollect", void 0), (0, n.Z)(this, "soundBuyBall", void 0), this.soundBackground = this.get("background_normal_sound"), this.soundBigWin = this.get("big_win_sound"), this.soundGiantWin = this.get("giant_win_sound"), this.soundRandomPick = this.get("rndm_pick_sound"), this.soundClickNormal = this.get("clickNormal"), this.soundSpinStart = this.get("spin_start_sound"), this.soundSpinFast = this.get("spin_fast_sound"), this.soundPlayerPick = this.get("player_pick_sound"), this.soundWinNormal = this.get("win_normal_sound"), this.soundClear = this.get("clear_sound"), this.soundCollect = this.get("collect"), this.soundBuyBall = this.get("buy_ball")
                    }
                    startGame() {
                        this.soundBackground.play()
                    }
                    bigWin() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? (this.soundBigWin.stop(), this.soundGiantWin.play()) : this.soundBigWin.play()
                    }
                    stopBigWin() {
                        this.soundBigWin.stop(), this.soundGiantWin.stop()
                    }
                    randomPick() {
                        this.soundRandomPick.play()
                    }
                    playerPick() {
                        this.soundPlayerPick.play()
                    }
                    click() {
                        this.soundClickNormal.play()
                    }
                    spinStart() {
                        this.soundSpinStart.play()
                    }
                    spinFast() {
                        this.soundSpinFast.play()
                    }
                    collect() {
                        this.soundCollect.play()
                    }
                    buyBall() {
                        this.soundBuyBall.play()
                    }
                    win() {
                        this.soundWinNormal.play()
                    }
                    loss() {}
                    clear() {
                        this.soundClear.play()
                    }
                }
                class fi extends zt {
                    init() {}
                    enter() {
                        this.game.action.emit("state:finish_enter"), this.game.applyNetPosition()
                    }
                    exit() {
                        this.game.action.emit("state:finish_exit")
                    }
                }
                class ki extends fi {
                    enter() {
                        super.enter(), this.game.autoPlay.count <= 0 && this.game.autoPlay.disable(), this.goTo("ready")
                    }
                }
                class Ci extends zt {
                    init() {}
                    enter() {
                        this.game.action.emit("state:ready_enter")
                    }
                    exit() {
                        this.game.action.emit("state:ready_exit")
                    }
                }
                class xi extends Ci {
                    constructor() {
                        super(...arguments), (0, n.Z)(this, "menu", this.game.get("Menu")), (0, n.Z)(this, "betSettings", this.game.get("BetSettings")), (0, n.Z)(this, "autoPlaySettings", this.game.get("AutoPlaySettings")), (0, n.Z)(this, "controls", this.game.get("Controls")), (0, n.Z)(this, "fastStop", this.game.get("FastStopLayout")), (0, n.Z)(this, "mainTable", this.game.get("MainTable")), (0, n.Z)(this, "addNumberTable", this.game.get("AdditionalNumberTable")), (0, n.Z)(this, "hitCoinsTable", this.game.get("HitCoinsTable")), (0, n.Z)(this, "selectedCellsBoard", this.game.get("SelectedCellsBoard")), (0, n.Z)(this, "_spaceKey", void 0), (0, n.Z)(this, "_escKey", void 0), (0, n.Z)(this, "_clickPlay$", void 0), (0, n.Z)(this, "_clickCollect$", void 0), (0, n.Z)(this, "_clickBuyBall$", void 0), (0, n.Z)(this, "_clickAutoPick$", void 0), (0, n.Z)(this, "_clickClear", void 0)
                    }
                    init() {
                        super.init(), this._spaceKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Space), this._escKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Escape), this.selectedCellsBoard.on("clickCell", (t => this.autoPick(t)))
                    }
                    enter() {
                        var t = () => super.enter,
                            e = this;
                        return (0, o.Z)((function*() {
                            t().call(e), e.game.fastspin = !1, e.game.autoPlay.enabled ? (e.game.canCollect && (yield e.collect()), yield e.game.delay(500), yield e.play()) : e.game.canCollect || e.game.canBuyExtraBall ? e.toCollect() : e.toNormal()
                        }))()
                    }
                    exit() {
                        var t, e, i, s, o;
                        super.exit(), this.controls.buttonPlay.toBase(), this._spaceKey.onPress.detachAll(), this._escKey.onPress.detachAll(), null === (t = this._clickPlay$) || void 0 === t || t.call(this), this._clickPlay$ = void 0, null === (e = this._clickCollect$) || void 0 === e || e.call(this), this._clickCollect$ = void 0, null === (i = this._clickBuyBall$) || void 0 === i || i.call(this), this._clickBuyBall$ = void 0, null === (s = this._clickAutoPick$) || void 0 === s || s.call(this), this._clickAutoPick$ = void 0, null === (o = this._clickClear) || void 0 === o || o.call(this), this._clickClear = void 0
                    }
                    play() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            t._spaceKey.onPress.detachAll(), t._escKey.onPress.detachAll();
                            try {
                                if (t.menu.close(), t.betSettings.close(), t.autoPlaySettings.close(), t.game.selectedNumbers.length < 1) return t.selectedCellsBoard.hint(), void t.addPlayAction();
                                t.game.reset(), t.controls.setWin(0), t.controls.buttonMenu.disable(), t.controls.buttonAutoPick.disable(), t.controls.buttonBetLevel.disable(), (yield t.game.checkBalance()) ? t.goTo("spin") : t.toNormal()
                            } catch (e) {
                                t.toNormal(), t.game.catchError(e)
                            }
                        }))()
                    }
                    collect() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            t._spaceKey.onPress.detachAll(), t._escKey.onPress.detachAll();
                            try {
                                t.game.sound.collect(), t.controls.buttonPlay.toBase(), t.controls.buttonBuy.hide(), t.controls.buttonAutoPick.show(), yield t.game.sendCollect(), t.game.reset(), t.game.autoPlay.enabled || t.toNormal()
                            } catch (e) {
                                t.toCollect(), t.game.catchError(e)
                            }
                        }))()
                    }
                    buyBall() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            t._spaceKey.onPress.detachAll(), t._escKey.onPress.detachAll();
                            try {
                                t.game.sound.buyBall(), (yield t.game.checkBalance(t.game.buyBallPrice)) ? (t.controls.buttonBuy.hide(), t.goTo("buyball")) : t.addBuyBallAction()
                            } catch (e) {
                                t.game.catchError(e)
                            }
                        }))()
                    }
                    autoPick() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        this.game.sound.playerPick(), this.game.addNumber(this.mainTable.autoPick(t))
                    }
                    autoPlayAccept() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            t.game.selectedNumbers.length < 1 ? (t.game.sound.click(), t.selectedCellsBoard.hint()) : (yield t.game.checkBalance()) && (t.game.autoPlay.enable(), setTimeout((() => t.play()), 100))
                        }))()
                    }
                    toCollect() {
                        this.controls.buttonAutoPick.disable(), this.controls.buttonAutoPick.hide(), (this.game.canBuyExtraBall || this.game.extraNumbers.length > 0) && this.addNumberTable.show(), this.game.canBuyExtraBall ? (this.controls.buttonBuy.setPrice(this.game.buyBallPrice), this.controls.buttonBuy.show()) : this.controls.buttonBuy.hide(), this.controls.buttonMenu.disable(), this.controls.buttonBetLevel.disable(), this.game.autoPlay.enabled || this.controls.buttonAutoPlay.disable(), this.addNumberTable.toCollect(), this.controls.buttonPlay.toCollect(), this.controls.buttonPlay.enable(), this.addCollectAction(), this.addBuyBallAction()
                    }
                    toNormal() {
                        this.controls.buttonPlay.toBase(), this.controls.buttonBuy.hide(), this.controls.buttonAutoPick.enable(), this.controls.buttonAutoPick.show(), this.addNumberTable.toNormal(), this.fastStop.disable(), this.mainTable.enable(), this.controls.enable(), this.menu.enable(), this.selectedCellsBoard.enable(), this.addPlayAction(), this._clickAutoPick$ = this.game.interaction.click(this.controls.buttonAutoPick, (() => this.autoPick())), this._clickClear = this.game.interaction.click(this.selectedCellsBoard.buttonClear, (() => this.game.clear()))
                    }
                    addPlayAction() {
                        this._clickPlay$ = this.game.interaction.clickOnce(this.controls.buttonPlay, (() => this.play())), this._spaceKey.onPress.detachAll(), this._escKey.onPress.detachAll(), this._spaceKey.onPress.add((() => {
                            var t;
                            null === (t = this._clickPlay$) || void 0 === t || t.call(this), this._escKey.onPress.detachAll(), this._spaceKey.onPress.detachAll(), this.play()
                        }))
                    }
                    addCollectAction() {
                        this._clickCollect$ = this.game.interaction.clickOnce(this.controls.buttonPlay, (() => this.collect())), this.game.canBuyExtraBall ? this._escKey.onPress.add((() => {
                            var t;
                            null === (t = this._clickPlay$) || void 0 === t || t.call(this), this._escKey.onPress.detachAll(), this._spaceKey.onPress.detachAll(), this.collect()
                        })) : (this._spaceKey.onPress.detachAll(), this._escKey.onPress.detachAll(), this._spaceKey.onPress.add((() => {
                            var t;
                            null === (t = this._clickCollect$) || void 0 === t || t.call(this), this._spaceKey.onPress.detachAll(), this.collect()
                        })))
                    }
                    addBuyBallAction() {
                        this._clickBuyBall$ = this.game.interaction.clickOnce(this.controls.buttonBuy, (() => this.buyBall())), this.game.canBuyExtraBall && (this._spaceKey.onPress.detachAll(), this._spaceKey.onPress.add((() => {
                            var t;
                            null === (t = this._clickBuyBall$) || void 0 === t || t.call(this), this._spaceKey.onPress.detachAll(), this.buyBall()
                        })))
                    }
                }
                class Bi extends zt {
                    constructor() {
                        super(...arguments), (0, n.Z)(this, "stopItemWin", this.get("StopItemWin")), (0, n.Z)(this, "stopItemFeatureFreeSpin", this.get("StopItemFeatureFreeSpin")), (0, n.Z)(this, "stopItemFeatureBonus", this.get("StopItemFeatureBonus")), (0, n.Z)(this, "stopItemBalance", this.get("StopItemBalance")), (0, n.Z)(this, "stopItemBalanceDrop", this.get("StopItemBalanceDrop"))
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
                        return i.coins > 0 && (null === (t = this.stopItemWin) || void 0 === t ? void 0 : t.checked) && (this.stopItemWin.type === be || (null === (e = this.game.bigWin) || void 0 === e ? void 0 : e.available(i.coins)) && this.game.bigWin.type(i.coins) >= this.stopItemWin.type)
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
                class Si extends Bi {
                    constructor() {
                        super(...arguments), (0, n.Z)(this, "controls", this.game.get("Controls")), (0, n.Z)(this, "statusBoard", this.game.get("StatusBoard")), (0, n.Z)(this, "bigWinAnimation", this.game.get("BigWinAnimation")), (0, n.Z)(this, "hitCoinsTable", this.game.get("HitCoinsTable"))
                    }
                    enter() {
                        var t = () => super.enter,
                            e = this;
                        return (0, o.Z)((function*() {
                            t().call(e);
                            try {
                                e.game.isWin ? (e.hitCoinsTable.match(e.game.winNumbers.length), e.game.bigWin.available(e.game.wallet.coins) && (yield e.bigWinAnimation.show(e.game.bigWin.type(e.game.wallet.coins), e.game.wallet.coins)), setTimeout((() => {
                                    e.controls.setWin(e.game.wallet.coins), e.controls.setTotalWin(e.game.wallet.totalCoins)
                                }), 150), e.game.sound.win(), yield e.statusBoard.win(e.game.wallet.coins)) : (e.controls.setWin(e.game.wallet.coins), e.controls.setTotalWin(e.game.wallet.totalCoins)), e.goTo("finish")
                            } catch (t) {
                                e.game.catchError(t)
                            }
                        }))()
                    }
                }
                class Pi extends zt {
                    constructor() {
                        var t;
                        super(...arguments), t = this, (0, n.Z)(this, "slot", this.get("Slot")), (0, n.Z)(this, "menu", this.get("Menu")), (0, n.Z)(this, "betSettings", this.get("BetSettings")), (0, n.Z)(this, "autoPlaySettings", this.get("AutoPlaySettings")), (0, n.Z)(this, "riskFeature", this.get("RiskFeature")), (0, n.Z)(this, "controls", this.get("Controls")), (0, n.Z)(this, "buttonMenu", this.get("ButtonMenu")), (0, n.Z)(this, "buttonSound", this.get("ButtonSound")), (0, n.Z)(this, "buttonAutoPlay", this.get("ButtonAutoPlay")), (0, n.Z)(this, "buttonQuickSpin", this.get("ButtonQuickSpin")), (0, n.Z)(this, "buttonAutoPlayAccept", this.get("ButtonAutoPlayAccept")), (0, n.Z)(this, "stopItemBalance", this.get("StopItemBalance")), (0, n.Z)(this, "stopItemBalanceDrop", this.get("StopItemBalanceDrop")), (0, n.Z)(this, "checkboxQuickSpin", this.get("QuickSpinCheckbox")), (0, n.Z)(this, "checkboxLeftHand", this.get("LeftHandCheckbox")), (0, n.Z)(this, "checkboxFullscreen", this.get("FullscreenCheckbox")), (0, n.Z)(this, "checkboxGameSounds", this.get("GameSoundsCheckbox")), (0, n.Z)(this, "checkboxBackgroundSounds", this.get("BackgroundSoundsCheckbox")), (0, n.Z)(this, "checkboxRiskFeature", this.get("RiskFeatureCheckbox")), (0, n.Z)(this, "checkboxIntroScreen", this.get("IntroScreenCheckbox")), (0, n.Z)(this, "onMenuOpen", (() => {
                            var t, e;
                            null === (t = this.slot) || void 0 === t || null === (e = t.hide) || void 0 === e || e.call(t), this.betSettings.close(), this.autoPlaySettings.close(), this.controls.onMenuOpen(), this.game.fullscreen.lock()
                        })), (0, n.Z)(this, "onMenuClose", (() => {
                            var t, e;
                            null === (t = this.slot) || void 0 === t || null === (e = t.show) || void 0 === e || e.call(t), this.controls.onMenuClose(), this.game.fullscreen.unlock()
                        })), (0, n.Z)(this, "handleClickAutoPlayAccept", (0, o.Z)((function*() {
                            t.autoPlaySettings.opened && (t.autoPlaySettings.close(), yield t.game.checkBalance(), t.stopItemBalance.setStartBalance(t.game.wallet.balance), t.stopItemBalanceDrop.setStartBalance(t.game.wallet.balance), t.game.autoPlay.enable(), t.game.action.emit("spin:start", !1))
                        }))), (0, n.Z)(this, "handleClickAutoPlay", (() => {
                            var t;
                            this.game.autoPlay.enabled ? this.game.autoPlay.disable() : (this.menu.close(), this.betSettings.close(), null === (t = this.buttonAutoPlay) || void 0 === t || t.setCount(this.game.autoPlay.count), this.autoPlaySettings.setAutoPlayCount(this.game.autoPlay.count), this.autoPlaySettings.toggle())
                        })), (0, n.Z)(this, "handleClickEnterKey", (0, o.Z)((function*() {
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
                            var t = (0, o.Z)((function*(t) {
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
                class Ei extends Pi {
                    constructor() {
                        var t;
                        super(...arguments), t = this, (0, n.Z)(this, "controls", this.game.get("Controls")), (0, n.Z)(this, "mainTable", this.get("MainTable")), (0, n.Z)(this, "hitCoinsTableBackground", this.get("HitCoinsTableBackground")), (0, n.Z)(this, "buttonBetLevel", this.game.get("ButtonBetLevel")), (0, n.Z)(this, "handleClickAutoPlayAccept", (0, o.Z)((function*() {
                            t.autoPlaySettings.opened && (t.autoPlaySettings.close(), yield t.game.readyState.autoPlayAccept(), t.stopItemBalance.setStartBalance(t.game.wallet.balance), t.stopItemBalanceDrop.setStartBalance(t.game.wallet.balance))
                        }))), (0, n.Z)(this, "handleClickEnterKey", (0, o.Z)((function*() {
                            t.game.autoPlay.enabled ? t.game.autoPlay.disable() : (t.menu.close(), t.betSettings.close(), t.autoPlaySettings.close(), t.game.autoPlay.setCount(1 / 0), yield t.game.readyState.autoPlayAccept())
                        })))
                    }
                    init() {
                        this.setupSound(), this.setupQuickSpin(), this.onBetLevel(), this.onAutoPlay(), this.setupMenu(), this.game.interaction.click(this.hitCoinsTableBackground, (() => {
                            this.game.toggleExpand()
                        }))
                    }
                    onAutoPlay() {
                        super.bindAutoPlay(), this.game.autoPlay.on("enable", (() => {
                            this.controls.onAutoPlayEnable(this.game.autoPlay.count)
                        })), this.game.autoPlay.on("disable", (() => {
                            this.controls.onAutoPlayDisable()
                        })), this.autoPlaySettings.on("open", (() => {
                            this.menu.close(), this.betSettings.close(), this.controls.onAutoPlaySettingsOpen()
                        })), this.autoPlaySettings.on("close", (() => {
                            this.controls.setAutoPlayCount(-1), this.controls.onAutoPlaySettingsClose()
                        })), this.autoPlaySettings.on("pickAutoPlayCount", (t => {
                            this.game.autoPlay.setCount(t), this.controls.setAutoPlayCount(t), this.autoPlaySettings.setAutoPlayCount(t)
                        }))
                    }
                    onBetLevel() {
                        this.buttonBetLevel.onClick.add((() => {
                            this.betSettings.toggle(this.game.wallet.balance)
                        })), this.game.betLevel.on("change", (() => {
                            this.betSettings.setBet(this.game.betLevel.bet)
                        })), this.betSettings.on("open", (() => {
                            this.menu.close(), this.autoPlaySettings.close(), this.controls.onBetLevelSettingsOpen()
                        })), this.betSettings.on("close", (() => {
                            this.controls.onBetLevelSettingsClose()
                        })), this.betSettings.on("pickBet", (t => {
                            this.game.betLevel.set(this.game.betLevel.bets.indexOf(t))
                        }))
                    }
                    setupQuickSpin() {
                        super.setupQuickSpin(), this.game.quickSpin.onToggle.add((t => {
                            this.game.speed = t ? wi.quickSpeed : wi.normalSpeed
                        }))
                    }
                }
                class Ti extends zt {
                    constructor() {
                        super(...arguments), (0, n.Z)(this, "fastStopLayout", void 0)
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
                class Zi extends Ti {
                    constructor() {
                        super(...arguments), (0, n.Z)(this, "menu", this.game.get("Menu")), (0, n.Z)(this, "controls", this.game.get("Controls")), (0, n.Z)(this, "mainTable", this.game.get("MainTable")), (0, n.Z)(this, "numberTable", this.game.get("NumberTable")), (0, n.Z)(this, "addNumberTable", this.game.get("AdditionalNumberTable")), (0, n.Z)(this, "selectedCellsBoard", this.game.get("SelectedCellsBoard")), (0, n.Z)(this, "_timeout", void 0), (0, n.Z)(this, "_spaceKey", void 0), (0, n.Z)(this, "_clickPlay$", void 0)
                    }
                    init() {
                        super.init(), this._spaceKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Space)
                    }
                    enter() {
                        var t = () => super.enter,
                            e = this;
                        return (0, o.Z)((function*() {
                            t().call(e);
                            try {
                                e.game.autoPlay.enabled ? (e.game.autoPlay.setCount(e.game.autoPlay.count - 1), e.controls.setAutoPlayCount(e.game.autoPlay.count)) : e.controls.disableAuto(), e.mainTable.disable(), e.menu.disable(), e.controls.setBalance(e.game.wallet.balance - e.game.betLevel.bet), e.game.autoPlay.enabled || (yield e.game.quickSpin.tryEnable()), e.game.config.get("quickSpin.available", !0) || e.controls.fastspin(), e.game.sound.spinStart(), yield e.game.sendSpin(), yield e.updateNumbers(), e.goTo("reward")
                            } catch (t) {
                                e.game.catchError(t), e.game.autoPlay.disable(), e.goTo("ready")
                            }
                        }))()
                    }
                    exit() {
                        var t;
                        super.exit(), this._spaceKey.onPress.detachAll(), null === (t = this._clickPlay$) || void 0 === t || t.call(this), this._clickPlay$ = void 0, this.fastStopLayout.disable()
                    }
                    enableFastSpin() {
                        setTimeout((() => {
                            this._spaceKey.onPress.add((() => {
                                this.game.fastSpin(), this._spaceKey.onPress.detachAll()
                            }))
                        })), this.fastStopLayout.press((() => this.game.fastSpin()), !0), this.controls.buttonPlay.enable(), this._clickPlay$ = this.game.interaction.clickOnce(this.controls.buttonPlay, (() => this.game.fastSpin()))
                    }
                    updateNumbers() {
                        var t = 0;
                        return new Promise((e => {
                            var i = () => {
                                if (t > this.game.numbers.length - 1) e();
                                else {
                                    var s = this.game.numbers[t],
                                        o = this.game.winNumbers.includes(s),
                                        n = this.mainTable.setNumber(s, o);
                                    this.numberTable.setNumber(t, s, n), o && this.selectedCellsBoard.tryHighlight(), this.game.fastspin || this.game.sound.randomPick(), t++, this._timeout = setTimeout(i, this.game.speed)
                                }
                            };
                            i()
                        }))
                    }
                }
                const Oi = JSON.parse('{"AutoPlaySettingsStopCondButtonReset":"Reset","AutoPlaySettingsStopCondCheckboxBalance":"If Balance Increases By","AutoPlaySettingsStopCondCheckboxBalanceDrop":"If Balance Decreases By","AutoPlaySettingsStopCondCheckboxFeatureBonus":"If Bonus Game Won","AutoPlaySettingsStopCondCheckboxFeatureFreeSpin":"If Free Spins Won","AutoPlaySettingsStopCondCheckboxWin":"If Win","AutoPlaySettingsStopCondCheckboxWinAny":"Any","AutoPlaySettingsStopCondCheckboxWinBig":"Big","AutoPlaySettingsStopCondCheckboxWinGiant":"Giant","AutoPlaySettingsStopCondTitle":"STOP AUTOPLAY","AutoPlaySettingsSubTitle":"Setup your best autoplay conditions","AutoPlaySettingsTitle":"AUTOPLAY","BetSettingsLines":"LINES\\n<value>%s</value>","BetSettingsTitle":"BET SETTINGS","BetSettingsWays":"WAYS\\n<value>%s</value>","ControlsDesktopAutoPlayStart":"AUTOPLAY","ControlsDesktopAutoPlayStop":"STOP AUTO","ControlsDesktopBalance":"BALANCE%s\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopBet":"BET %s\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopFreeRoundLeft":"FREE ROUND\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopFreeRoundWin":"TOTAL WIN %s\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopFreeRoundWinEmpty":"TOTAL WIN","ControlsDesktopFreeSpinsLast":"FREE SPINS LEFT\\n<delimiter> \\n</delimiter><value>LAST</value>","ControlsDesktopFreeSpinsLeft":"FREE SPINS LEFT\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopLines":"LINES\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopMaxBet":"MAX BET","ControlsDesktopTotalWin":"TOTAL WIN %s\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopWays":"WAYS\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopWin":"WIN %s\\n<delimiter> \\n</delimiter><value>%s</value>","Currency":"CURRENCY\\n<value>%s</value>","GameRulesAdvancedAutoPlayContent":"Advanced autoplay settings are available in the section with standard autoplay settings. You can set the conditions for stopping the game in automatic mode:\\n\\n<bold>if win any/big/giant</bold> - autoplay will be stopped after any/big/giant win\\n\\n<bold>if balance increased by 10%-100%</bold> - autoplay will stop when your balance increases by the selected %\\n\\n<bold>if balance decreased by 10%-100%</bold> - autoplay will be interrupted when your balance decreases by the selected %\\n\\nClick <bold>Reset</bold> to reset all autoplay settings","GameRulesAdvancedAutoPlayTitle":"Advanced Autoplay Settings","GameRulesAutoPlayContent":"Select the number of game rounds to play in automatic mode by pressing the button with the corresponding number, or press the button with the infinity sign to play in automatic mode until the autoplay is manually canceled or until the balance runs out. Your choice must be confirmed with the Start button.","GameRulesAutoPlayTitle":"Autoplay Options","GameRulesBestExperience":"Please note that you can only play one game at a time on each account. Therefore, you cannot play a game on more than one device, or multiple games on the same device simultaneously. Doing so may lead to various errors.\\n\\nFor the best gaming experience, we recommend using the latest version of the relevant software.","GameRulesGeneralRTP":"Theoretical RTP: %s %","GameRulesGeneralTitle":"General Info","GameRulesInterfaceAutoPlay":"Click to go to autoplay menu","GameRulesInterfaceBalance":"Here is your current balance","GameRulesInterfaceBetLevel":"Your current bet and a button to go to the bet size selection menu","GameRulesInterfaceContent":"All buttons of the game interface are listed below. Please note that the appearance and location of the buttons may differ slightly depending on the format in which the game is launched and what feature it is currently in.","GameRulesInterfaceMenu":"Click to access the game menu","GameRulesInterfaceQuickSpin":"Click to enable/disable quick spin","GameRulesInterfaceSound":"Turn game sound on/off and adjust sound volume","GameRulesInterfaceSpin":"Click to start the game round at the current bet. In the desktop version of the game, the button may have an alternative design","GameRulesInterfaceTitle":"Game Interface","GameRulesInterfaceWin":"Here is the win in the current game round","GameRulesSettingsContent":"To go to the settings menu, click the cogwheel icon in the game menu","GameRulesSettingsContentItemBackgroundSound":"<bold>Background music</bold> - turns on/off background music in the game","GameRulesSettingsContentItemFullscreen":"<bold>Full Screen</bold> - enables/disables full screen mode","GameRulesSettingsContentItemGameSound":"<bold>Game sound</bold> - turns on/off the sound effects of the game","GameRulesSettingsContentItemQuickSpin":"<bold>Quick Spin</bold> - turns on/off the function of the accelerated mode of rotation and stop of the reels","GameRulesSettingsTitle":"Game Settings","GameSettingsBackgroundSounds":"Background Music","GameSettingsFullscreen":"Full Screen","GameSettingsGameSounds":"Game Sounds","GameSettingsIntroScreen":"Intro Screen","GameSettingsLeftHand":"Left Hand Mode","GameSettingsQuickSpin":"Quick Spin","GameSettingsRiskFeatureCheckbox":"Risk&Buy","GameSettingsTitle":"GAME SETTINGS","IntroScreenHideButtonText":"Don\'t show next time","IntroScreenLoaderText":"LOADING","MenuDesktopButtonFullscreen":"FULLSCREEN","MenuDesktopButtonHome":"HOME","MenuDesktopButtonPaytable":"PAYTABLE","MenuDesktopButtonQuickspin":"QUICKSPIN","MenuDesktopButtonSound":"SOUND","MenuGameRules":"GAME INFORMATION","MenuMobileBetSettingsTitle":"BET SETTINGS","MenuMobileGameSettingsLeftHand":"Left Hand Mode","MenuMobileGameSettingsQuickspin":"Quick Spin","MenuMobileGameSettingsSounds":"Game Sounds","MenuMobileGameSettingsTitle":"GAME SETTINGS","MenuMobilePaytableTitle":"PAYTABLE","MenuPaytable":"PAYTABLE","MenuSettings":"SETTINGS","NetPositionTitle":"Net Position: %s","PopupActionClose":"Close","PopupActionContinue":"Continue","PopupActionEnable":"Enable","PopupActionNo":"No","PopupActionReload":"Reload","PopupActionYes":"Yes","PopupFreeRoundEndMessage":"The next spins will use your bonus amount","PopupFreeRoundEndTitle":"Free Rounds Finished","PopupFreeRoundLastMessage":"Congratulations, you have\\n last free round","PopupFreeRoundStartMessage":"Congratulations, you have\\n%s free rounds","PopupFreeRoundStartTitle":"Free Rounds Bonus","PopupFreeSpinsButton":"CLICK ANYWHERE TO CONTINUE","PopupFreeSpinsStopDescription":"<value>%s FREE SPINS</value> PLAYED","PopupFreeSpinsStopDescriptionNew":"%s Free Spins played","PopupFreeSpinsTitle":"CONGRATULATIONS","PopupFreeSpinsTitleNew":"CONGRATULATIONS! YOU WON","PopupFreeSpinsTitleRestore":"IN-GAME FEATURE RESTORED!","PopupFreeSpinsWinRestore":"<value>%s FREE SPINS</value> LEFT","PopupFreeSpinsWinRestoreLast":"<value>LAST FREE SPIN</value> LEFT","PopupFreeSpinsWinStart":"YOU WON <value>%s FREE SPINS</value>","PopupFreeSpinsWinStartNew":"%s FREE SPINS","PopupFreeSpinsWinStop":"YOU WON <value>%s</value>","PopupFreeSpinsWinStopNew":"<value>%s</value>","PopupMaxLimitMessage":"Bet exceeded max bet limit.","PopupMaxLimitTitle":"Max limit","PopupNetworkErrorMessage":"Please reload the game.","PopupNetworkErrorTitle":"Connection Lost","PopupQuickSpinMessage":"It seems you prefer to play a bit faster.\\nWould you like to enable Quick Spin?","PopupQuickSpinTitle":"Quick Spin","PopupRestoreMessage":"In-game feature restored!","PopupRiskNBuyContentBuy":"Buy in a feature for %s\\nthat will play at the bet %s","PopupRiskNBuyContentRisk":"Take the risk of winning %s\\nto get a feature at the bet %s","PopupRiskNBuyTitleBuy":"BUY IN FEATURE","PopupRiskNBuyTitleRisk":"RISK FEATURE","PopupSoundMessage":"Play with sound?","PopupSpendingBudgetMessage":"You have reached your play limit.\\nWelcome back later.","PopupSpendingBudgetTitle":"Play limit","PopupUnexpectedErrorMessage":"An unexpected situation.\\nReload the page.","PopupUnexpectedErrorTitle":"Unexpected situation","PopupZeroBalanceMessage":"Please change your BET LEVEL or top up your balance","PopupZeroBalanceTitle":"Insufficient funds","RiskNBuyBuyFor":"BUY FOR %s","RiskNBuyFreeSpinsText":"FREE SPINS","RiskNBuyOnBet":"ON BET %s","RiskNBuySubHeader":"RISK YOUR WIN\\nTO PLAY","StatusBarMobileBalance":"BALANCE %s\\n","StatusBarMobileBet":"BET %s\\n","StatusBarMobileFreeLast":"FREE SPINS LEFT\\n<value>LAST</value>","StatusBarMobileFreeLeft":"FREE SPINS LEFT\\n<value>%s</value>","StatusBarMobileFreePlayed":"FREE SPINS PLAYED\\n","StatusBarMobileFreeRoundLeft":"FREE ROUND\\n","StatusBarMobileTotalWin":"TOTAL WIN %s\\n","StatusBarMobileWin":"WIN %s\\n","TimeElapsedTitle":"Time Elapsed: %s"}'),
                    Ri = JSON.parse('{"ACTION_CLEAR":"clear","AutoPlaySettingsStopCondCheckboxFeatureFreeSpin":"if Free Games won","ControlsDesktopFreeSpinsLast":"FREE GAMES LEFT\\n<delimiter> \\n</delimiter><value>LAST</value>","ControlsDesktopFreeSpinsLeft":"FREE GAMES LEFT\\n<delimiter> \\n</delimiter><value>%s</value>","GameRulesInterfaceChangeScreen":"Click to switch between game boards","GameRulesInterfaceClear":"Click to clear the game board","GameRulesInterfaceQuickDraw":"Click to select a random amount of numbers","GameRulesSettingsContentItemQuickSpin":"<bold>Quick Draw</bold> - turns  the accelerated number drawing mode function on/off","GameSettingsQuickSpin":"Quick Draw","LAST_FREE_GAME":"Last free game","NUMBER_TABLE_LAST_NUMBER":"Last number","PAYTABLE_SECTION_BONUS_CONTENT":"If there is a winning combination in any game round, the player can collect the winnings or use the Extra Balls feature and buy an extra ball, which will be selected by the game in addition to the existing balls. The maximum possible balls that can be bought is 5. Each new ball can improve the current winning combination. The Extra Balls feature is not available in autoplay mode.\\t","PAYTABLE_SECTION_BONUS_TITLE":"Extra Balls feature","PAYTABLE_SECTION_GENERAL_CONTENT":"Candy Keno is a number game in which the player picks from 1 to 10 number of balls on the game board. The goal of each game round is to collect a winning combination by guessing as many numbers as possible from the 20 balls drawn in the game. Payouts are calculated based on the current bet and the number of ball numbers that the player guesses correctly from the  balls drawn. All winnings are paid out in accordance with the paytable found on the game screen.","PAYTABLE_SECTION_GENERAL_TITLE":"General game rules","PopupFreeSpinsButton":"CLICK ANYWHERE TO CONTINUE","PopupFreeSpinsStopDescription":"<value>%s FREE GAMES</value> PLAYED","PopupFreeSpinsTitle":"CONGRATULATIONS","PopupFreeSpinsTitleRestore":"IN-GAME FEATURE RESTORED!","PopupFreeSpinsWinRestore":"<value>%s FREE GAMES</value> LEFT","PopupFreeSpinsWinRestoreLast":"<value>LAST FREE GAME</value> LEFT","PopupFreeSpinsWinStart":"YOU WON <value>%s FREE GAMES</value>","PopupFreeSpinsWinStop":"YOU WON <value>%s</value>","PopupQuickSpinMessage":"It seems you prefer to play a bit faster.\\nWould you like to enable Quick Draw?","PopupQuickSpinTitle":"Quick Draw","SELECTED_CELLS_BOARD_TEXT_1":"select at least 1 to play","StatusBarMobileFreeLast":"FREE GAMES LEFT\\n<value>LAST</value>","StatusBarMobileFreeLeft":"FREE GAMES LEFT\\n<value>%s</value>","TableExtraTitle":"Extra Balls","TableExtraTitleExtra":"Win to get","TableExtraTitleExtraBuy":"Available to buy","TableHitCoinsTitle":"Hit and Win","TextBuyExtraBall":"Buy Extra Ball","TextBuyExtraBallValue":"for %s","TextCollect":"Collect"}');

                function Mi(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function Fi(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Mi(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Mi(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                var Ii = Fi(Fi({}, Oi), Ri),
                    Ni = [0, 0, 0];
                class Di extends _.PY {
                    constructor(t) {
                        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        t.useRectangleMask = e, super(t), (0, n.Z)(this, "playing", void 0), (0, n.Z)(this, "skinName", ""), (0, n.Z)(this, "animationName", ""), this.playing = !1
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
                            for (var a = 0, h = i.length; a < h; a++) {
                                var r = i[a],
                                    l = r.getAttachment(),
                                    c = this.slotContainers[a];
                                if (l) {
                                    var d = null,
                                        u = l.color;
                                    switch (l.type) {
                                        case I.AttachmentType.Region:
                                            var g = l.region;
                                            if (g) {
                                                r.currentMesh && (r.currentMesh.visible = !1, r.currentMesh = null, r.currentMeshId = void 0, r.currentMeshName = void 0);
                                                var p = g;
                                                if (r.currentSpriteName && r.currentSpriteName === p.name) r.currentSpriteName !== p.name || r.hackRegion || this.setSpriteRegion(l, r.currentSprite, g);
                                                else {
                                                    var m = p.name;
                                                    if (r.currentSprite && (r.currentSprite.visible = !1), r.sprites = r.sprites || {}, void 0 !== r.sprites[m]) r.sprites[m].visible = !0;
                                                    else {
                                                        var A = this.createSprite(r, l, m);
                                                        c.addChild(A)
                                                    }
                                                    r.currentSprite = r.sprites[m], r.currentSpriteName = m
                                                }
                                            }
                                            c.transform.setFromMatrix(r.bone.matrix), r.currentSprite.color ? d = r.currentSprite.color : (Ni[0] = o[0] * r.color.r * u.r, Ni[1] = o[1] * r.color.g * u.g, Ni[2] = o[2] * r.color.b * u.b, r.currentSprite.tint = it.rgb2hex(Ni)), r.currentSprite.blendMode = r.blendMode;
                                            break;
                                        case I.AttachmentType.Mesh:
                                            if (r.currentSprite) {
                                                r.currentSprite.visible = !1, r.currentSprite = null, r.currentSpriteName = void 0;
                                                var v = new K.Transform;
                                                v._parentID = -1, v._worldID = c.transform._worldID, c.transform = v
                                            }
                                            var b = l.id;
                                            if (!r.currentMeshId || r.currentMeshId !== b) {
                                                var w = b;
                                                if (r.currentMesh && (r.currentMesh.visible = !1), r.meshes = r.meshes || {}, void 0 !== r.meshes[w]) r.meshes[w].visible = !0;
                                                else {
                                                    var y = this.createMesh(r, l);
                                                    c.addChild(y)
                                                }
                                                r.currentMesh = r.meshes[w], r.currentMeshName = l.name, r.currentMeshId = w
                                            }
                                            l.computeWorldVerticesOld(r, r.currentMesh.vertices), r.currentMesh.color ? d = r.currentMesh.color : (Ni[0] = o[0] * r.color.r * u.r, Ni[1] = o[1] * r.color.g * u.g, Ni[2] = o[2] * r.color.b * u.b, r.currentMesh.tint = it.rgb2hex(Ni)), r.currentMesh.blendMode = r.blendMode;
                                            break;
                                        case I.AttachmentType.Clipping:
                                            r.currentGraphics || (this.createGraphics(r, l), c.addChild(r.clippingContainer), c.addChild(r.currentGraphics)), this.updateGraphics(r, l), c.alpha = 1, c.visible = !0;
                                            continue;
                                        default:
                                            c.visible = !1;
                                            continue
                                    }
                                    if (c.visible = !0, d) {
                                        var f = r.color.r * u.r,
                                            k = r.color.g * u.g,
                                            C = r.color.b * u.b;
                                        d.setLight(o[0] * f + n[0] * (1 - f), o[1] * k + n[1] * (1 - k), o[2] * C + n[2] * (1 - C)), r.darkColor ? (f = r.darkColor.r, k = r.darkColor.g, C = r.darkColor.b) : (f = 0, k = 0, C = 0), d.setDark(o[0] * f + n[0] * (1 - f), o[1] * k + n[1] * (1 - k), o[2] * C + n[2] * (1 - C))
                                    }
                                    c.alpha = r.color.a
                                } else c.visible = !1
                            }
                            for (var x = this.skeleton.drawOrder, B = null, S = null, P = 0, E = x.length; P < E; P++) {
                                var T = i[x[P].data.index],
                                    Z = this.slotContainers[x[P].data.index];
                                if (S || null !== Z.parent && Z.parent !== this && (Z.parent.removeChild(Z), Z.parent = this), T.currentGraphics && T.getAttachment()) S = T.clippingContainer, B = T.getAttachment(), S.children.length = 0, this.children[P] = Z, B.endSlot === T.data && (B.endSlot = null);
                                else if (S) {
                                    var O = this.tempClipContainers[P];
                                    O || ((O = this.tempClipContainers[P] = this.newContainer()).visible = !1), this.children[P] = O, Z.parent = null, S.addChild(Z), B.endSlot == T.data && (S.renderable = !0, S = null, B = null)
                                } else this.children[P] = Z
                            }
                        }
                    }
                    createGraphics(t, e) {
                        if (!this.spineData.useRectangleMask) return super.createGraphics(t, e);
                        var i = this.newGraphics();
                        if (i.clear(), i.beginFill(16777215, 1), e.worldVerticesLength <= 8) {
                            var s = new K.Rectangle(0, 0, 0, 0);
                            i.drawRect(s.x, s.y, s.width, s.height)
                        } else {
                            var o = new K.Polygon;
                            i.drawPolygon(o)
                        }
                        return i.renderable = !1, t.currentGraphics = i, t.clippingContainer = this.newContainer(), t.clippingContainer.mask = t.currentGraphics, i
                    }
                    updateGraphics(t, e) {
                        if (!this.spineData.useRectangleMask) return super.updateGraphics(t, e);
                        var i = t.currentGraphics.geometry,
                            s = i.graphicsData[0].shape;
                        if (s instanceof K.Polygon) {
                            var o = s.points,
                                n = e.worldVerticesLength;
                            o.length = n, e.computeWorldVertices(t, 0, n, o, 0, 2)
                        } else {
                            var a = [...e.vertices],
                                h = e.worldVerticesLength;
                            a.length = h, e.computeWorldVertices(t, 0, h, a, 0, 2);
                            var r = a[4] - a[0],
                                l = a[5] - a[1],
                                c = r > 0 ? a[0] : a[0] - Math.abs(r),
                                d = l > 0 ? a[1] : a[1] - Math.abs(l);
                            s.x = c, s.y = d, s.width = Math.abs(r), s.height = Math.abs(l)
                        }
                        i.invalidate()
                    }
                }
                class Li extends(jt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "hit", void 0), (0, n.Z)(this, "coins", void 0), this.hit = this.addChild(new A.xv("", {
                            fontSize: 28,
                            fontFamily: "Avenir-Bold",
                            fill: [16767403, 16772291],
                            fillGradientType: 0,
                            align: "center",
                            stroke: 5447936,
                            strokeThickness: 1,
                            dropShadow: !0,
                            dropShadowColor: 2103105,
                            dropShadowAngle: 1,
                            dropShadowDistance: 2,
                            dropShadowBlur: 5
                        })), this.hit.anchor.x = .5, this.hit.x = 0, this.coins = this.addChild(new A.xv("", {
                            fontSize: 28,
                            fontFamily: "Avenir-Bold",
                            fill: [16767403, 16772291],
                            fillGradientType: 0,
                            align: "center",
                            stroke: 5447936,
                            strokeThickness: 1,
                            dropShadow: !0,
                            dropShadowColor: 2103105,
                            dropShadowAngle: 1,
                            dropShadowDistance: 2,
                            dropShadowBlur: 5
                        })), this.coins.anchor.x = 1, this.coins.x = 208
                    }
                    getHit() {
                        return parseInt(this.hit.text)
                    }
                    setHit(t) {
                        this.hit.text = "".concat(t)
                    }
                    setCoin(t) {
                        this.coins.text = t > 0 ? this.game.helpers.toMoney(t) : " - "
                    }
                    resize() {
                        this.game.device.desktop ? this.scale.set(1) : (this.game.device.landscape, this.scale.set(1.4))
                    }
                }
                class Wi extends(jt(H.W2)) {
                    constructor(t) {
                        super(), (0, n.Z)(this, "name", "HitCoinsTable"), (0, n.Z)(this, "paytable", void 0), (0, n.Z)(this, "activeBorder", void 0), (0, n.Z)(this, "tableItems", []), (0, n.Z)(this, "isExpand", !1), this.paytable = t, this.tableItems = [];
                        for (var e = 0; e < 10; e += 1) this.tableItems.push(this.addChild(new Li));
                        this.activeBorder = this.addChild(new Di(this.game.loader.getAsset("hit-coins"))), this.activeBorder.renderable = !1
                    }
                    match(t) {
                        var e = this.tableItems.find((e => e.renderable && e.getHit() === t));
                        e && e.renderable && (this.game.device.desktop ? (this.activeBorder.scale.set(1), this.activeBorder.position.set(24, e.y - 13)) : (this.activeBorder.scale.set(1.4), this.activeBorder.position.set(26, e.y - 18)), this.activeBorder.play("appear").then((() => this.activeBorder.play("idle"))), this.activeBorder.renderable = !0)
                    }
                    update(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                        this.tableItems.forEach((t => t.renderable = !1));
                        for (var i = t > 7 ? t - 7 : 0; i < t; i += 1) {
                            var s = this.paytable[i][t - 1],
                                o = this.tableItems[i];
                            s > 0 && (o.setHit(i + 1), o.setCoin(e > 0 ? s * e : s), o.renderable = !0)
                        }
                        this.updatePosition()
                    }
                    updatePosition() {
                        this.tableItems.filter((t => t.renderable)).reverse().forEach(((t, e) => {
                            this.game.device.desktop ? t.position.set(80, 80 + 44 * e) : t.position.set(100, 80 + 80 * e)
                        }))
                    }
                    setExpand(t) {
                        this.isExpand = t, this.resize()
                    }
                    clear() {
                        this.removeActive(), this.tableItems.forEach((t => t.renderable = !1))
                    }
                    removeActive() {
                        this.activeBorder.stop(), this.activeBorder.renderable = !1
                    }
                    resize() {
                        this.updatePosition(), this.game.device.desktop ? (this.visible = !0, this.position.set(1560, 220)) : this.game.device.landscape ? (this.isExpand ? this.visible = !0 : this.visible = !1, this.game.leftHand.enabled ? this.position.set(1080, 240) : this.position.set(860, 240)) : (this.position.set(560, 400), this.isExpand ? this.visible = !0 : this.visible = !1)
                    }
                }
                var _i = ["red", "green", "blue", "orange", "violet"];
                class Ui extends(jt(H.W2)) {
                    constructor(t) {
                        super(), (0, n.Z)(this, "selected", !1), (0, n.Z)(this, "number", void 0), (0, n.Z)(this, "stateBackground", void 0), (0, n.Z)(this, "color", ""), (0, n.Z)(this, "initColor", ""), (0, n.Z)(this, "_idleTimeout", -1), this.buttonMode = !0, this.interactive = !0, this.hitArea = new K.Rectangle(0, 0, 110, 110), this.initColor = _i[this.game.helpers.random(0, _i.length - 1)], this.color = this.initColor, this.stateBackground = this.addChild(new Di(this.game.loader.getAsset("ball_animation"))), this.stateBackground.renderable = !1, this.stateBackground.pivot.set(this.stateBackground.width / 2, this.stateBackground.height / 2), this.stateBackground.position.set(this.stateBackground.width / 2 + 12, this.stateBackground.height / 2 + 8), this.number = this.addChild(new v.Xz((t + 1).toString(), {
                            fontSize: 82,
                            fontName: "Numbers1",
                            letterSpacing: -24
                        })), this.number.anchor.set(.5), this.number.position.set(70, 55), this.position.set(t % 10 * 107, 104 * Math.floor(t / 10)), this.game.interaction.click(this, (() => this.emit("select", t)))
                    }
                    extra() {
                        this.color = "extra"
                    }
                    reset() {
                        this.color = this.initColor, clearTimeout(this._idleTimeout), this.stateBackground.scale.set(1), this.stateBackground.renderable = !0, this.stateBackground.changeSkin(this.color), this.stateBackground.play("static", !1)
                    }
                    forceSelect() {
                        this.selected = !0, this.stateBackground.scale.set(1), this.stateBackground.renderable = !0, this.stateBackground.changeSkin(this.color), this.stateBackground.play("static", !1)
                    }
                    select() {
                        this.selected = !0, this.stateBackground.scale.set(1), this.stateBackground.renderable = !0, this.stateBackground.changeSkin(this.color), this.stateBackground.play("set").then((() => {
                            this.stateBackground.play("static", !1)
                        }))
                    }
                    unselect() {
                        this.selected = !1, this.color = this.initColor, this.stateBackground.scale.set(1), this.stateBackground.renderable = !1
                    }
                    win() {
                        this.stateBackground.scale.set(1), this.stateBackground.renderable = !0, this.stateBackground.changeSkin(this.color), this.stateBackground.play("win"), this._idleTimeout = setTimeout((() => this.stateBackground.play("idle", !0)), 300)
                    }
                    normal() {
                        this.stateBackground.scale.set(.7), this.stateBackground.renderable = !0, this.stateBackground.changeSkin(this.color), this.stateBackground.play("static", !1)
                    }
                }
                class Gi extends(jt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "MainTable"), (0, n.Z)(this, "grid", void 0), (0, n.Z)(this, "cells", []), this.grid = this.addChild(new $.j(this.game.loader.getAsset("grid")));
                        for (var t = 0; t < Gi.ROWS * Gi.CELLS; t += 1) {
                            var e = this.addChild(new Ui(t));
                            e.on("select", (t => this.emit("select", t))), this.cells.push(e)
                        }
                    }
                    select(t) {
                        var e = this.cells[t];
                        e.selected ? e.unselect() : e.select()
                    }
                    clear() {
                        this.cells.forEach((t => t.unselect()))
                    }
                    reset() {
                        this.cells.forEach((t => {
                            t.selected ? t.reset() : t.unselect()
                        }))
                    }
                    restore(t, e, i, s) {
                        var o = [];
                        return s.forEach((t => this.cells[t].forceSelect())), t.forEach((t => {
                            var s = this.cells[t];
                            i.includes(t) && s.extra(), e.includes(t) ? s.win() : s.normal(), o.push(s.color)
                        })), this.disable(), o
                    }
                    setNumber(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            s = this.cells[t];
                        return i && s.extra(), e ? s.win() : s.normal(), s.color
                    }
                    autoPick(t) {
                        this.cells.forEach((t => t.unselect()));
                        for (var e = t > 0 ? t : this.game.helpers.random(1, 10), i = [], s = 0; s < e; s += 1) {
                            var o = this.getRandomValue();
                            this.cells[o].select(), i.push(o)
                        }
                        return i
                    }
                    disable() {
                        this.interactive = !1, this.interactiveChildren = !1
                    }
                    enable() {
                        this.interactive = !0, this.interactiveChildren = !0
                    }
                    getRandomValue() {
                        var t = this.game.helpers.random(0, 79);
                        return this.cells[t].selected ? this.getRandomValue() : t
                    }
                    resize() {
                        this.game.device.desktop || this.game.device.landscape ? (this.scale.set(1), this.position.set(425, 70)) : (this.scale.set(.9), this.position.set(52, 280))
                    }
                }(0, n.Z)(Gi, "ROWS", 8), (0, n.Z)(Gi, "CELLS", 10);
                class Vi extends(jt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "_ball", void 0), (0, n.Z)(this, "_number", void 0), this.visible = !1, this._ball = this.addChild(new $.j), this._ball.anchor.set(.5), this._number = this.addChild(new A.xv("", {
                            fill: "white",
                            fontSize: 24,
                            fontFamily: "Avenir-Bold",
                            dropShadow: !0,
                            dropShadowDistance: 0,
                            dropShadowBlur: 5
                        })), this._number.anchor.set(.5), this._number.position.set(0, -2)
                    }
                    setNumber(t, e) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        this.visible = !0, this._ball.texture = this.game.loader.getAsset("ball-".concat(e)), this._number.text = "".concat(t + 1), i || x.fromTo(this, .3, {
                            pixi: {
                                alpha: 0,
                                scale: 1.8
                            }
                        }, {
                            pixi: {
                                alpha: 1,
                                scale: 1
                            }
                        })
                    }
                }
                class ji extends(jt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "NumberTable"), (0, n.Z)(this, "numbers", void 0), (0, n.Z)(this, "isExpand", !1), this.numbers = [];
                        for (var [t, e, i] = [0, 6, 0], s = 0; s < ji.NUMBER_COUNT; s++) {
                            var o = this.addChild(new Vi),
                                a = this.game.helpers.random(0, 1);
                            t > 0 && t % e == 0 && (e--, t = 0, i += 1), o.position.set(60 * (e - t + i) + 30 * (e - 6), 50 * e), o.rotation = a, this.numbers.push(o), t++
                        }
                    }
                    restore(t, e) {
                        t.forEach(((t, i) => {
                            this.numbers[i].setNumber(t, e[i], !0)
                        }))
                    }
                    setNumber(t, e, i) {
                        this.numbers[t].setNumber(e, i)
                    }
                    setExpand(t) {
                        this.isExpand = t, this.resize()
                    }
                    clear() {
                        this.numbers.forEach((t => t.hide()))
                    }
                    resize() {
                        this.game.device.desktop ? (this.visible = !0, this.scale.set(1), this.position.set(0, 310)) : this.game.device.landscape ? (this.visible = this.isExpand, this.scale.set(1), this.game.leftHand.enabled ? this.position.set(640, 260) : this.position.set(420, 260)) : (this.visible = this.isExpand, this.scale.set(1.1), this.position.set(60, 660))
                    }
                }(0, n.Z)(ji, "NUMBER_COUNT", 20);
                var zi = Symbol("clear");
                class Yi extends(jt($.j)) {
                    constructor() {
                        super(), (0, n.Z)(this, "_selectAnim", void 0), (0, n.Z)(this, "_idleTimeout", -1), this.anchor.set(.5), this._selectAnim = this.addChild(new Di(this.game.loader.getAsset("effectSelectedCells"))), this._selectAnim.position.set(-56, -62)
                    }
                    select() {
                        this.texture = this.game.loader.getAsset("selected-select")
                    }
                    unselect() {
                        this.texture = this.game.loader.getAsset("selected-empty")
                    }
                    match() {
                        this._selectAnim.visible = !0, this._selectAnim.play("set"), this._idleTimeout = setTimeout((() => {
                            this._selectAnim.play("idle", !0)
                        }), 300)
                    }
                    unmatch() {
                        clearTimeout(this._idleTimeout), this._selectAnim.visible = !1, this._selectAnim.stop()
                    }
                    enable() {
                        this.buttonMode = !0, this.interactive = !0
                    }
                    disable() {
                        this.buttonMode = !1, this.interactive = !1
                    }
                }
                class Hi extends(jt(H.W2)) {
                    constructor() {
                        var t;
                        super(), t = this, (0, n.Z)(this, "name", "SelectedCellsBoard"), (0, n.Z)(this, "buttonClear", void 0), (0, n.Z)(this, "cells", void 0), (0, n.Z)(this, "hintText", void 0), (0, n.Z)(this, "jumpTween", void 0), (0, n.Z)(this, "selectValueScale", 1), (0, n.Z)(this, "matchCounter", void 0), (0, n.Z)(this, "prevLimit", void 0), (0, n.Z)(this, "textClear", void 0), (0, n.Z)(this, "isExpand", !1), this.cells = [], this.prevLimit = 0, this.matchCounter = 0, this.jumpTween = null, this.hintText = this.addChild(new A.xv(this.game.i18n.t("SELECTED_CELLS_BOARD_TEXT_1").toUpperCase(), {
                            fill: [16706172, 16431654],
                            fillGradientType: 0,
                            fontFamily: "Avenir-Bold",
                            fontSize: ["de", "fr"].includes(this.game.i18n.language) ? 17 : 20,
                            dropShadow: !0,
                            dropShadowBlur: 5,
                            dropShadowAngle: 1,
                            dropShadowDistance: 2,
                            align: "center",
                            wordWrap: !0,
                            wordWrapWidth: 260,
                            breakWords: "ja" === this.game.i18n.language
                        })), this.hintText.anchor.set(.5, 0), this.buttonClear = this.addChild(new $.j(this.game.loader.getAsset("selected-button_clear"))), this.buttonClear.anchor.set(.5), this.buttonClear.interactive = !1, this.buttonClear.renderable = !1, this.buttonClear.buttonMode = !0, this.game.interaction.click(this.buttonClear, (() => this.emit(zi))), this.textClear = this.buttonClear.addChild(new A.xv(this.game.i18n.t("ACTION_CLEAR").toUpperCase(), {
                            fill: [16706172, 16431654],
                            fillGradientType: 0,
                            fontSize: 20,
                            fontFamily: "Avenir-Bold",
                            dropShadow: !0,
                            dropShadowBlur: 5,
                            dropShadowAngle: 1,
                            dropShadowDistance: 2
                        })), this.textClear.anchor.set(.5);
                        for (var e = function(e) {
                                var i = t.addChild(new Yi);
                                t.game.interaction.click(i, (() => t.emit("clickCell", e + 1))), i.unselect(), i.unmatch(), t.cells.push(i)
                            }, i = 0; i < 10; i += 1) e(i)
                    }
                    enable() {
                        this.cells.forEach((t => t.enable())), this.buttonClear.interactive = !0
                    }
                    disable() {
                        this.cells.forEach((t => t.disable())), this.buttonClear.interactive = !1
                    }
                    select(t) {
                        this.jumpTween && (this.jumpTween.kill(), this.jumpTween = null, this.hintText.scale.set(this.selectValueScale)), this.clear();
                        for (var e = 0; e < t; e += 1) this.cells[e].select();
                        0 === t ? this.hintText.text = this.game.i18n.t("SELECTED_CELLS_BOARD_TEXT_1").toUpperCase() : (this.buttonClear.interactive = !0, this.buttonClear.renderable = !0, this.hintText.text = ""), this.prevLimit = t
                    }
                    tryHighlight() {
                        var t = this.cells[this.matchCounter++];
                        t.select(), t.match()
                    }
                    clear() {
                        this.buttonClear.interactive = !1, this.buttonClear.renderable = !1, this.hintText.text = this.game.i18n.t("SELECTED_CELLS_BOARD_TEXT_1").toUpperCase(), this.cells.forEach(((t, e) => {
                            t.unselect(), t.unmatch()
                        }))
                    }
                    reset() {
                        this.matchCounter = 0, this.cells.forEach((t => t.unmatch()))
                    }
                    hint() {
                        x.isTweening(this.hintText) || (this.jumpTween = x.fromTo(this.hintText, .3, {
                            pixi: {
                                scale: this.selectValueScale
                            }
                        }, {
                            pixi: {
                                scale: this.selectValueScale + .2
                            },
                            repeat: 1,
                            yoyo: !0
                        }))
                    }
                    setExpand(t) {
                        var e;
                        null === (e = this.jumpTween) || void 0 === e || e.kill(), this.isExpand = t, this.resize()
                    }
                    resize() {
                        this.game.device.desktop ? (this.buttonClear.visible = !0, this.scale.set(1), this.position.set(1584, 630), this.selectValueScale = 1, this.hintText.scale.set(this.selectValueScale), this.hintText.position.set(150, 125), this.textClear.scale.set(1), this.buttonClear.scale.set(1), this.buttonClear.position.set(150, 154), this.cells.forEach(((t, e) => {
                            t.position.set(52 + e % 5 * 48, 40 + (e >= 5 ? 50 : 0)), t.scale.set(1)
                        }))) : this.game.device.landscape ? (this.buttonClear.visible = !0, this.hintText.visible = !0, this.scale.set(1.3), this.game.leftHand.enabled ? this.position.set(1520, 630) : this.position.set(20, 630), this.isExpand ? (this.selectValueScale = 2, this.hintText.scale.set(this.selectValueScale), this.hintText.position.set(this.game.leftHand.enabled ? -340 : 645, -80)) : (this.selectValueScale = 1, this.hintText.scale.set(this.selectValueScale), this.hintText.position.set(150, 125)), this.textClear.scale.set(1), this.buttonClear.scale.set(1), this.buttonClear.position.set(150, 154), this.cells.forEach(((t, e) => {
                            t.position.set(52 + e % 5 * 48, 40 + (e >= 5 ? 50 : 0)), t.scale.set(1)
                        }))) : (this.buttonClear.visible = !1, this.hintText.visible = this.isExpand, this.scale.set(1), this.position.set(100, 1080), this.selectValueScale = 3, this.hintText.scale.set(this.selectValueScale), this.hintText.position.set(430, -400), this.textClear.scale.set(1.8), this.buttonClear.scale.set(1.1), this.buttonClear.position.set(720, 38), this.cells.forEach(((t, e) => {
                            t.scale.set(1.2), t.position.set(60 * e, 40)
                        })))
                    }
                }
                class Qi extends H.W2 {
                    constructor() {
                        super(), this.resize(), Wt.viewport.on("resize", this.resize, this)
                    }
                    resize() {
                        (Wt.device.desktop || Wt.device.landscape) && this.position.set(0, 0)
                    }
                }
                class Ki extends(jt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "StatusBoard"), (0, n.Z)(this, "valueText", void 0), this.renderable = !1, this.interactive = !1, this.valueText = this.addChild(new v.Xz("", {
                            fontName: "WinFont",
                            fontSize: 300
                        })), this.valueText.anchor.set(.5), this.valueText.renderable = !1
                    }
                    win(t) {
                        this.valueText.y = 80;
                        var e = this.valueText.y;
                        return this.renderable = !0, this.valueText.renderable = !0, new Promise((i => {
                            this.valueText.text = "".concat(this.game.i18n.currency({
                                bitmap: !0
                            }), " ").concat(this.game.helpers.toMoney(t)), x.fromTo(this.valueText, .2, {
                                pixi: {
                                    y: this.valueText.y - 100,
                                    scaleX: 1.2,
                                    alpha: 0
                                }
                            }, {
                                pixi: {
                                    y: this.valueText.y,
                                    scaleX: 1,
                                    alpha: 1
                                },
                                onComplete: () => {
                                    setTimeout((() => {
                                        x.fromTo(this.valueText, .2, {
                                            pixi: {
                                                y: this.valueText.y,
                                                scaleX: 1,
                                                alpha: 1
                                            }
                                        }, {
                                            pixi: {
                                                y: this.valueText.y - 100,
                                                scaleX: 1.2,
                                                alpha: 0
                                            },
                                            onComplete: () => {
                                                this.valueText.y = e, this.valueText.text = "", this.renderable = !1, this.valueText.renderable = !1, i()
                                            }
                                        })
                                    }), 1400)
                                }
                            })
                        }))
                    }
                    resize() {
                        this.game.device.desktop || this.game.device.landscape ? (this.scale.set(.7), this.position.set(940, 700)) : (this.scale.set(.55), this.position.set(540, 840))
                    }
                }
                class Xi extends(jt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "logo", void 0), (0, n.Z)(this, "_background", void 0), (0, n.Z)(this, "_backgroundAnim1", void 0), (0, n.Z)(this, "_backgroundAnim2", void 0), this._backgroundAnim1 = this.addChild(new Di(this.game.loader.getAsset("bg_animation"))), this._backgroundAnim1.play("animation", !0), this._backgroundAnim2 = this.addChild(new Di(this.game.loader.getAsset("bg_sky_animation"))), this._backgroundAnim2.changeSkin("regular"), this._backgroundAnim2.play("animation", !0), this._background = this.addChild(new $.j(this.game.loader.getAsset("bgln"))), this.logo = new $.j(this.game.loader.getAsset("logo")), this.logo.anchor.set(.5)
                    }
                    normal() {}
                    resize() {
                        this.game.device.desktop || this.game.device.landscape ? (this._background.texture = this.game.loader.getAsset("bgln"), this._background.width = this.game.viewport.width, this._background.height = this.game.viewport.height, this._background.position.set(0), this._backgroundAnim1.renderable = !0, this._backgroundAnim2.renderable = !0, this.logo.scale.set(1), !this.game.device.desktop && this.game.device.landscape ? this.game.leftHand.enabled ? this.logo.position.set(1718, 320) : this.logo.position.set(214, 320) : this.logo.position.set(1730, 120)) : (this._backgroundAnim1.renderable = !1, this._backgroundAnim2.renderable = !1, this._background.texture = this.game.loader.getAsset("bgpn"), this._background.width = 2 * this.game.viewport.paddingX + this.game.viewport.width, this._background.height = 2 * this.game.viewport.paddingY + this.game.viewport.height, this._background.position.set(-this.game.viewport.paddingX, 0), this.logo.scale.set(1.2), this.logo.position.set(540, 140))
                    }
                }
                var qi = ["pointerover", "pointerenter", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerout", "pointerleave", "gotpointercapture", "lostpointercapture", "mouseover", "mouseenter", "mousedown", "mousemove", "mouseup", "mousecancel", "mouseout", "mouseleave", "touchover", "touchenter", "touchdown", "touchmove", "touchup", "touchcancel", "touchout", "touchleave"],
                    Ji = "bbcode",
                    $i = {
                        bbcode: ["[", "]"],
                        xml: ["<", ">"]
                    };
                class ts extends A.xv {
                    constructor(t, e) {
                        super(t), (0, n.Z)(this, "textStyles", void 0), (0, n.Z)(this, "hitboxes", void 0), this.styles = e, qi.forEach((t => {
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
                        for (var e in this.textStyles = {}, this.textStyles.default = this.assign({}, ts.DEFAULT_TAG_STYLE), t) "default" === e ? this.assign(this.textStyles.default, t[e]) : this.textStyles[e] = this.assign({}, t[e]);
                        this.textStyles.default.tagStyle === Ji && (this.textStyles.b = this.assign({}, {
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
                        })), this.withPrivateMembers()._style = new A.pn(this.textStyles.default), this.withPrivateMembers().dirty = !0
                    }
                    setTagStyle(t, e) {
                        t in this.textStyles ? this.assign(this.textStyles[t], e) : this.textStyles[t] = this.assign({}, e), this.withPrivateMembers()._style = new A.pn(this.textStyles.default), this.withPrivateMembers().dirty = !0
                    }
                    deleteTagStyle(t) {
                        "default" === t ? this.textStyles.default = this.assign({}, ts.DEFAULT_TAG_STYLE) : delete this.textStyles[t], this.withPrivateMembers()._style = new A.pn(this.textStyles.default), this.withPrivateMembers().dirty = !0
                    }
                    getTagRegex(t, e) {
                        var i = Object.keys(this.textStyles).map((t => [t, t.toUpperCase()].join("|"))).join("|"),
                            {
                                tagStyle: s
                            } = this.textStyles.default;
                        i = t ? "(".concat(i, ")") : "(?:".concat(i, ")");
                        var o = s === Ji ? "\\".concat($i.bbcode[0]).concat(i, "(?:\\=(?:[A-Za-z0-9_\\-\\#]+|'(?:[^']+|\\\\')*'))*\\s*\\").concat($i.bbcode[1], "|\\").concat($i.bbcode[0], "\\/").concat(i, "\\s*\\").concat($i.bbcode[1]) : "\\".concat($i.xml[0]).concat(i, "(?:\\s+[A-Za-z0-9_\\-]+=(?:\"(?:[^\"]+|\\\\\")*\"|'(?:[^']+|\\\\')*'))*\\s*\\").concat($i.xml[1], "|\\").concat($i.xml[0], "\\/").concat(i, "\\s*\\").concat($i.xml[1]);
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
                                for (var c = 0, d = 0; d < r.length; d++) {
                                    if (r[d].index > c && h.push(this.createTextData(t[a].substring(c, r[d].index), o[o.length - 1], n[n.length - 1])), "/" === r[d][0][1]) o.length > 1 && (o.pop(), n.pop());
                                    else {
                                        for (var u = {}, g = this.getPropertyRegex(), p = void 0; p = g.exec(r[d][0]);) u[p[1]] = p[2] || p[3];
                                        n.push({
                                            name: r[d][1],
                                            properties: u
                                        });
                                        var {
                                            tagStyle: m
                                        } = this.textStyles.default;
                                        if (m === Ji && r[d][0].includes("=") && this.textStyles[r[d][1]]) ! function() {
                                            var t = e.getBBcodePropertyRegex().exec(r[d][0]),
                                                i = {};
                                            Object.entries(e.textStyles[r[d][1]]).forEach((e => {
                                                i[e[0]] = "string" != typeof e[1] ? e[1] : t[1] + e[1]
                                            })), o.push(e.assign({}, o[o.length - 1], i))
                                        }();
                                        else {
                                            var A = r[d][1];
                                            o.push(this.assign({}, o[o.length - 1], this.textStyles[A], this.textStyles[A.toLowerCase()]))
                                        }
                                    }
                                    c = r[d].index + r[d][0].length
                                }
                                if (c < t[a].length) {
                                    var v = this.createTextData(c ? t[a].substring(c) : t[a], o[o.length - 1], n[n.length - 1]);
                                    h.push(v)
                                }
                            }
                            i.push(h)
                        }
                        var {
                            tagStyle: b
                        } = this.textStyles.default;
                        return i[i.length - 1].map((t => {
                            t.text.includes($i[b][0]) && (t.text = t.text.match(b === Ji ? /^(.*)\[/ : /^(.*)\</)[1])
                        })), i
                    }
                    getFontString(t) {
                        return new A.pn(t).toFontString()
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
                            for (var i = e.split(/(?:\r\n|\r|\n)/), s = this._getTextDataPerLine(i), o = [], n = [], a = [], h = 0, r = 0; r < i.length; r++) {
                                for (var l = 0, c = 0, d = 0, u = 0; u < s[r].length; u++) {
                                    var g = s[r][u].style;
                                    this.context.font = this.getFontString(g), s[r][u].width = this.context.measureText(s[r][u].text).width, 0 !== s[r][u].text.length && (s[r][u].width += (s[r][u].text.length - 1) * g.letterSpacing, u > 0 && (l += g.letterSpacing / 2), u < s[r].length - 1 && (l += g.letterSpacing / 2)), l += s[r][u].width, s[r][u].fontProperties = A._A.measureFont(this.context.font), s[r][u].height = s[r][u].fontProperties.fontSize, "number" == typeof g.valign ? (c = Math.min(c, g.valign - s[r][u].fontProperties.descent), d = Math.max(d, g.valign + s[r][u].fontProperties.ascent)) : (c = Math.min(c, -s[r][u].fontProperties.descent), d = Math.max(d, s[r][u].fontProperties.ascent))
                                }
                                o[r] = l, n[r] = c, a[r] = d, h = Math.max(h, l)
                            }
                            var p = Object.keys(t).map((e => t[e])).reduce(((t, e) => Math.max(t, e.strokeThickness || 0)), 0),
                                m = this.getDropShadowPadding(),
                                v = h + 2 * p + 2 * m,
                                b = a.reduce(((t, e) => t + e), 0) - n.reduce(((t, e) => t + e), 0) + 2 * p + 2 * m;
                            this.canvas.width = v * this.resolution, this.canvas.height = b * this.resolution, this.context.scale(this.resolution, this.resolution), this.context.textBaseline = "alphabetic", this.context.lineJoin = "round";
                            for (var w = m + p, y = [], f = 0; f < s.length; f++) {
                                var k = s[f],
                                    C = void 0;
                                switch (this.withPrivateMembers()._style.align) {
                                    case "left":
                                        C = m + p;
                                        break;
                                    case "center":
                                        C = m + p + (h - o[f]) / 2;
                                        break;
                                    case "right":
                                        C = m + p + h - o[f]
                                }
                                for (var x = 0; x < k.length; x++) {
                                    var {
                                        style: B,
                                        text: S,
                                        fontProperties: P,
                                        width: E,
                                        height: T,
                                        tag: Z
                                    } = k[x], O = w + P.ascent;
                                    switch (B.valign) {
                                        case "top":
                                            break;
                                        case "baseline":
                                            O += a[f] - P.ascent;
                                            break;
                                        case "middle":
                                            O += (a[f] - n[f] - P.ascent - P.descent) / 2;
                                            break;
                                        case "bottom":
                                            O += a[f] - n[f] - P.ascent - P.descent;
                                            break;
                                        default:
                                            O += a[f] - P.ascent - B.valign
                                    }
                                    if (0 === B.letterSpacing) y.push({
                                        text: S,
                                        style: B,
                                        x: C,
                                        y: O,
                                        width: E,
                                        ascent: P.ascent,
                                        descent: P.descent,
                                        tag: Z
                                    }), C += k[x].width;
                                    else {
                                        this.context.font = this.getFontString(k[x].style);
                                        for (var R = 0; R < S.length; R++) {
                                            (R > 0 || x > 0) && (C += B.letterSpacing / 2);
                                            var M = this.context.measureText(S.charAt(R)).width;
                                            y.push({
                                                text: S.charAt(R),
                                                style: B,
                                                x: C,
                                                y: O,
                                                width: M,
                                                ascent: P.ascent,
                                                descent: P.descent,
                                                tag: Z
                                            }), C += M, (R < S.length - 1 || x < k.length - 1) && (C += B.letterSpacing / 2)
                                        }
                                    }
                                }
                                w += a[f] - n[f]
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
                                    "number" == typeof n && (n = it.hex2string(n)), this.context.shadowColor = n, this.context.shadowBlur = e.dropShadowBlur, this.context.shadowOffsetX = Math.cos(e.dropShadowAngle) * e.dropShadowDistance * this.resolution, this.context.shadowOffsetY = Math.sin(e.dropShadowAngle) * e.dropShadowDistance * this.resolution, this.context.fillText(i, s, o)
                                }
                            })), this.context.restore(), y.forEach((t => {
                                var {
                                    style: e,
                                    text: i,
                                    x: s,
                                    y: o,
                                    width: n,
                                    ascent: a,
                                    descent: h,
                                    tag: r
                                } = t;
                                if (void 0 !== e.stroke && e.strokeThickness) {
                                    this.context.font = this.getFontString(e);
                                    var l = e.stroke;
                                    "number" == typeof l && (l = it.hex2string(l)), this.context.strokeStyle = l, this.context.lineWidth = e.strokeThickness, this.context.strokeText(i, s, o)
                                }
                            })), y.forEach((t => {
                                var {
                                    style: e,
                                    text: i,
                                    x: s,
                                    y: o,
                                    width: n,
                                    ascent: a,
                                    descent: h,
                                    tag: r
                                } = t;
                                if (void 0 !== e.fill) {
                                    this.context.font = this.getFontString(e);
                                    var l = e.fill;
                                    if ("number" == typeof l) l = it.hex2string(l);
                                    else if (Array.isArray(l))
                                        for (var c = 0; c < l.length; c++) {
                                            var d = l[c];
                                            "number" == typeof d && (l[c] = it.hex2string(d))
                                        }
                                    var u = new A.pn(e),
                                        g = A._A.measureText(i || " ", u, u.wordWrap, this.canvas);
                                    this.context.fillStyle = this._generateFillStyle(u, [i], g), this.context.fillText(i, s, o)
                                }
                            })), y.forEach((t => {
                                var {
                                    style: e,
                                    text: i,
                                    x: s,
                                    y: o,
                                    width: n,
                                    ascent: a,
                                    descent: h,
                                    tag: r
                                } = t, l = -this.withPrivateMembers()._style.padding - this.getDropShadowPadding();
                                this.hitboxes.push({
                                    tag: r,
                                    hitbox: new K.Rectangle(s + l, o - a + l, n, a + h)
                                }), (void 0 === e.debug ? ts.debugOptions.spans.enabled : e.debug) && (this.context.lineWidth = 1, ts.debugOptions.spans.bounding && (this.context.fillStyle = ts.debugOptions.spans.bounding, this.context.strokeStyle = ts.debugOptions.spans.bounding, this.context.beginPath(), this.context.rect(s, o - a, n, a + h), this.context.fill(), this.context.stroke(), this.context.stroke()), ts.debugOptions.spans.baseline && (this.context.strokeStyle = ts.debugOptions.spans.baseline, this.context.beginPath(), this.context.moveTo(s, o), this.context.lineTo(s + n, o), this.context.closePath(), this.context.stroke()), ts.debugOptions.spans.top && (this.context.strokeStyle = ts.debugOptions.spans.top, this.context.beginPath(), this.context.moveTo(s, o - a), this.context.lineTo(s + n, o - a), this.context.closePath(), this.context.stroke()), ts.debugOptions.spans.bottom && (this.context.strokeStyle = ts.debugOptions.spans.bottom, this.context.beginPath(), this.context.moveTo(s, o + h), this.context.lineTo(s + n, o + h), this.context.closePath(), this.context.stroke()), ts.debugOptions.spans.text && (this.context.fillStyle = "#ffffff", this.context.strokeStyle = "#000000", this.context.lineWidth = 2, this.context.font = "8px monospace", this.context.strokeText(r.name, s, o - a + 8), this.context.fillText(r.name, s, o - a + 8), this.context.strokeText("".concat(n.toFixed(2), "x").concat((a + h).toFixed(2)), s, o - a + 16), this.context.fillText("".concat(n.toFixed(2), "x").concat((a + h).toFixed(2)), s, o - a + 16)))
                            })), ts.debugOptions.objects.enabled && (ts.debugOptions.objects.bounding && (this.context.fillStyle = ts.debugOptions.objects.bounding, this.context.beginPath(), this.context.rect(0, 0, v, b), this.context.fill()), ts.debugOptions.objects.text && (this.context.fillStyle = "#ffffff", this.context.strokeStyle = "#000000", this.context.lineWidth = 2, this.context.font = "8px monospace", this.context.strokeText("".concat(v.toFixed(2), "x").concat(b.toFixed(2)), 0, 8, v), this.context.fillText("".concat(v.toFixed(2), "x").concat(b.toFixed(2)), 0, 8, v))), this.updateTexture()
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
                            for (var h = o, r = s[a].split(i), l = !0, c = 0; c < r.length; c++)
                                if (i.test(r[c])) {
                                    if (e += r[c], "/" === r[c][1]) c += 2, n.pop();
                                    else {
                                        var d = r[++c];
                                        n.push(this.assign({}, n[n.length - 1], this.textStyles[d], this.textStyles[d.toLowerCase()])), c++
                                    }
                                    this.context.font = this.getFontString(n[n.length - 1])
                                } else
                                    for (var u = r[c].split(" "), g = 0; g < u.length; g++) {
                                        var p = this.context.measureText(u[g]).width;
                                        if (this.withPrivateMembers()._style.breakWords && p > h) {
                                            for (var m = u[g].split(""), A = 0; A < m.length; A++) {
                                                var v = this.context.measureText(m[A]).width;
                                                v > h ? (e += "\n".concat(m[A]), h = o - v) : (e += m[A], h -= v)
                                            }
                                            g > 0 && (e += " ", h -= this.context.measureText(" ").width)
                                        } else if (this.withPrivateMembers()._style.breakWords) e += u[g], h -= p, g < u.length - 1 && (e += " ", h -= this.context.measureText(" ").width);
                                        else {
                                            var b = p + (g > 0 ? this.context.measureText(" ").width : 0);
                                            b > h ? (l || (e += "\n"), e += u[g], h = o - p) : (h -= b, g > 0 && (e += " "), e += u[g])
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
                }(0, n.Z)(ts, "DEFAULT_TAG_STYLE", {
                    align: "left",
                    breakWords: !1,
                    dropShadow: !1,
                    dropShadowAngle: Math.PI / 6,
                    dropShadowBlur: 0,
                    dropShadowColor: "#000000",
                    dropShadowDistance: 5,
                    fill: "black",
                    fillGradientType: A.M_.LINEAR_VERTICAL,
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
                }), (0, n.Z)(ts, "debugOptions", {
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
                class es extends(jt(qt)) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "BetSettings"), (0, n.Z)(this, "bets", []), (0, n.Z)(this, "betCoins", 0), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "scrollView", void 0), (0, n.Z)(this, "bottom", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "betItems", void 0), (0, n.Z)(this, "paylines", void 0), (0, n.Z)(this, "currency", void 0), (0, n.Z)(this, "closeButton", void 0), (0, n.Z)(this, "bottomBackgroundTexture", void 0), (0, n.Z)(this, "bottomBackgroundMobileTexture", void 0), (0, n.Z)(this, "spaceKey", void 0), (0, n.Z)(this, "hasCurrency", !1), this.bottomBackgroundTexture = c.xE.from(Yt), this.bottomBackgroundMobileTexture = c.xE.from(Ht), this.overlay = this.addChild(new Jt), this.scrollView = this.addChild(new te), this.bottom = this.addChild(new $.j(this.bottomBackgroundMobileTexture)), this.content = this.scrollView.addChild(new H.W2), this.title = this.content.addChild(new he(this.game.i18n.t("BetSettingsTitle").toUpperCase())), this.title.withGameName(), this.title.anchor.set(.5, 0), this.betItems = this.content.addChild(new se), this.paylines = this.content.addChild(new ts("", {
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
                        })), this.paylines.anchor.set(.5, 0), this.currency = new ts(this.game.i18n.t("Currency", this.game.i18n.currency()), {
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
                        }), this.currency.anchor.set(.5, 0), this.closeButton = this.addChild(new Xt), this.closeButton.onClick.add((() => this.close())), this.spaceKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Escape), this.spaceKey.onPress.add(this.close, this), this.spaceKey.disable(), this.game.i18n.hasCurrency() && (this.hasCurrency = !0, this.content.addChild(this.currency))
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
                class is extends es {
                    constructor() {
                        super(), this.paylines.visible = !1
                    }
                    resize() {
                        super.resize(), this.currency.x = 0
                    }
                }
                class ss extends(jt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "BigWinAnimation"), (0, n.Z)(this, "timeline", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "value", void 0), (0, n.Z)(this, "light", void 0), (0, n.Z)(this, "coins", void 0), (0, n.Z)(this, "spaceKey", void 0), (0, n.Z)(this, "clickHandler", void 0), this.visible = !1, this.interactive = !0, this.spaceKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Space), this.timeline = new B, this.content = new H.W2, this.overlay = new Jt(.75), this.title = new $.j, this.title.anchor.set(.5), this.title.alpha = 0, this.value = new v.Xz("", {
                            fontName: "WinFont"
                        }), this.value.anchor = .5, this.light = new Di(this.game.loader.getAsset("effectBigWin")), this.light.alpha = 0, this.coins = new Di(this.game.loader.getAsset("effectGiantWin")), this.coins.alpha = 0, this.content.addChild(this.title), this.content.addChild(this.value), this.addChild(this.overlay), this.addChild(this.light), this.addChild(this.coins), this.addChild(this.content), this.spaceKey.onPress.add((() => this.break())), this.spaceKey.disable()
                    }
                    show(t, e) {
                        var i = this;
                        return (0, o.Z)((function*() {
                            i.clickHandler = i.game.interaction.clickOnce(i, (() => i.break())), i.spaceKey.enable();
                            var s = 0;
                            t === we ? (s = 9, i.game.sound.bigWin()) : t === ye && (s = 18, i.game.sound.bigWin(!0)), i.title.texture = i.game.loader.getAsset("textBigWin");
                            var o = !1;
                            i.visible = !0, i.resize();
                            var n = i.value.scale.x;
                            return new Promise((a => {
                                i.content.alpha = 0, i.value.alpha = 0, i.title.alpha = 0, i.timeline.eventCallback("onComplete", (() => {
                                    i.hide(), a()
                                }));
                                var h = {
                                    coins: 0
                                };
                                i.timeline.to(i.value, .5, {
                                    pixi: {
                                        alpha: 1,
                                        scale: n
                                    }
                                }, .35).to(i.content, .5, {
                                    pixi: {
                                        alpha: 1
                                    }
                                }, .35).to(i.title, .5, {
                                    pixi: {
                                        alpha: 1
                                    }
                                }, .35).to(h, s, {
                                    coins: e,
                                    ease: P.Linear.easeNone,
                                    roundProps: ["coins"],
                                    onStart: () => {
                                        i.light.play("animation", !0), i.light.alpha = 1
                                    },
                                    onUpdate: () => {
                                        !o && t === ye && h.coins > e / 2 && (i.title.texture = i.game.loader.getAsset("textGiantWin"), o = !0, i.coins.play("animation", !0), i.coins.alpha = 1, x.to(i.value, s / 2, {
                                            pixi: {
                                                scale: n + .2
                                            }
                                        })), i.value.text = "".concat(i.game.i18n.currency({
                                            bitmap: !0
                                        }), "<value>").concat(i.game.helpers.toMoney(h.coins), "</value>")
                                    }
                                }, .35), i.timeline.addLabel("break", "+=0.75"), i.timeline.to([i.content], .2, {
                                    pixi: {
                                        alpha: 0
                                    }
                                }, "break+=1")
                            }))
                        }))()
                    }
                    hide() {
                        var t;
                        this.game.sound.stopBigWin(), null === (t = this.clickHandler) || void 0 === t || t.call(this), this.spaceKey.disable(), this.visible = !1, this.value.text = "", this.light.stop(), this.light.alpha = 0, this.coins.stop(), this.coins.alpha = 0, this.timeline.clear()
                    }
                    break () {
                        var t;
                        this.game.sound.stopBigWin(), null === (t = this.clickHandler) || void 0 === t || t.call(this), this.spaceKey.disable();
                        var e = this.timeline.totalDuration(),
                            i = this.timeline.getLabelTime("break") / e;
                        i > 0 && this.timeline.progress(i)
                    }
                    resize() {
                        this.game.device.desktop || this.game.device.landscape ? (this.content.position.set(this.game.viewport.width / 2, 300), this.light.scale.set(1), this.light.position.set(0, 0), this.coins.scale.set(1), this.coins.position.set(0, 0), this.title.scale.set(1), this.value.scale.set(.8), this.value.position.set(0, this.title.height + 70)) : (this.content.position.set(this.game.viewport.width / 2, (this.game.viewport.height - 500) / 2), this.light.scale.set(1), this.light.position.set(-450, 220), this.coins.scale.set(1), this.coins.position.set(-450, 220), this.value.scale.set(.8), this.value.position.set(0, this.title.height + 70))
                    }
                }
                const os = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////1fUNLcAAAAWdFJOUwDPn4C/30AgEO+QcGCgf69fMI9vULAqgdwXAAACbklEQVRYw+1YyZaDIBCUHVxiTDL8/6eOTlzYQ6OZE3XKy8MSmurqbpumoqKioqIiB5I/MWJaa4UoecnriDlV2gK9i0s2fHN438Dnyfsg8YLHOXJBdRzsfibISidxK2Z+WjyzOGbYL0OFQbkZtLTfSORrYEZQirj7g5g4Su4PclYi8v0GSeDpgxwVcK8PsymsnWEXIZx6fCdedFNk4+7gml62PSQWdNtVwEMiesKTCzZu/AVDbFdu/gWvRasTAh7JTQQO3fak9OhfjWgxbt13rhJsIdJ4hHXuqkGsIsmkHoJn7MMippCIPMNqHcM3xgEREZttUu/kf47qvFGqfI0cpta58cDL6UkwIjnBNk3alMOiYL6kHzI1OmPVCJ9/phNeWDXE/p810roxoSAFTTK7aFspjd+nJ26aG0hQP5yl3LwB/jYk5bpT8JjxmuWUJ75SCvN9zhFnJLoH5O2jO7IIb3poXQfZkBK3H7x19XJhe69wJFMbPGK6Jjn66yM30FjNlfjgpkJMW784w05y7eWpqT+SkTUqJGqN8B+QbS9djjo8I5K2cCbj6jpvsZ26n6ppZ0WUmXb04yfZHVKVqEWNTTen3urcoq4cIUxMU2HUILs/bSFdJQHVaTnEmrfQYmCdhnRPw4kG91MR+4eOKz2scELgQ8HulyluHO++czquOLfE0HbP88tRxFssI0uLRpnQ5HlM16iAWqLoWGuO7UUTr8GtFb5P+6xAgSYd4h79aZfZvQcpljdJj+jqdWb+Zwlmeu6rhYxuXHXn/WQIfblQ5BLrkr3zwUXRC6c5ycmIlt0zNj75F7y2oqKioqIChF9HhmS5mMSV/gAAAABJRU5ErkJggg==";
                class ns extends Kt {
                    constructor() {
                        super(os), (0, n.Z)(this, "name", "ButtonAutoPlay"), (0, n.Z)(this, "startTexture", void 0), (0, n.Z)(this, "stopTexture", void 0), (0, n.Z)(this, "counts", void 0), (0, n.Z)(this, "countsInfinity", void 0), (0, n.Z)(this, "enterKey", void 0), (0, n.Z)(this, "onEnterClick", void 0), this.startTexture = c.xE.from(os), this.stopTexture = c.xE.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTP////////////////////////////////////////////////////////////////////////////////////VtkI8AAAAVdFJOUwCAz2Dfv0AgEO9fkH9wn6CvMI9vUD+hasQAAAIqSURBVFjD7VhJkoMwDIyNVwhbEv//qwM1LMYbkoGb+5SaMj1CbrUkXq+CgoKCggIIlPh2lBljNOXkp+4jFlybA3gtbwn47fD+o7tOXgWJZ3yukUtu4mD1lSRrk8Q7m/l74JnEMeH4z2hmUt4WLa9WEvXrmZWULO5qJyaOkqudnOWIfLtBEnh6J6cZ3MvDbAxrp99EiKce/gsvGhRZuVu8puew+8SBdr0KfEpkRUTywMrdPWCIzcItHvBaujgh4hFoIQhs2KM2A/BqFgk2GGkA1SoXkbwwkQhUzQqM39lqrXXUpwUiI3Kl4V7Nb3Zl37iGa2Sn2QvYbQF+RiDJtk1anlArOWHRiJh+KsiNL36ZppYa09DUMaufJHXjN8sE9cc5KlLUrcdMIT3r2J7C1M4rTkhMD9SLo01do3D+nBK3n7wmKb4m9IonPcnRX/S2DsOVPHFTKcd1XpxwVjK2/gigarR323GNtRB1uK3cKAj1etgqXUA3bd332O8rUGQ1pivx4CA2B1j5p6FNXaMaXoOZKgmqT6s+NryFDiP7NGZ66i8MuLA+/ejElV5WBCH4pWDzyxR3F5++IRNXnFt12HHP88tBxkcspzLRq0xo89y3a5pBrWh0rbXX9qyN1+I2uqvHbVfgSJMOcQ/+tsuOJkiy5U3SK7r+Xdn/WYKZX/tqoaKB6/a6n/ShLxea3GJdqnI+uGh+4zanBBnoHD1jw1c84LUFBQUFBQUo/AH9SmgY+OEdcwAAAABJRU5ErkJggg=="), this.onEnterClick = new(k()), this.counts = this.addChild(new A.xv("", {
                            fontFamily: "Avenir-Bold",
                            fontSize: 28,
                            fill: this.game.config.get("colors.primary")
                        })), this.counts.anchor.set(1, .5), this.counts.position.set(-60, 0), this.countsInfinity = this.addChild(new $.j(this.game.loader.getAsset("assets/autoplay-infinity-count.png"))), this.countsInfinity.anchor.set(.5), this.countsInfinity.position.set(-80, 0), this.countsInfinity.visible = !1, this.enterKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Enter), this.enterKey.onPress.add((() => this.onEnterClick.dispatch()))
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
                class as extends Kt {
                    constructor() {
                        super("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAyCAMAAADLPWP6AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABjUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMgBvGIAAAAgdFJOUwDvnzC/EGAg34B/j3DeX0D+vqAhrxFxzq5Q7jHPQQGekWo0dwAAAS9JREFUSMe9lm13gyAMhQWhhFarzq5r127L//+VO8fTF1KBJfmwfATv4fHmGmwaSYWhbaTVOkQ01ssOMrgUSGQe8FZRoNreRWgEfPiswFaBRrVNREbDh5arOiQi4AJu0qP2XD7Q8L39G59X8e00fEHDR6LkVFFS8XXco5yGb1PmGw4Abv9nlLrc+159PUouD2ElfE+IWIsS5WuTnWM5Si/+DWlDLsVWhUobYS5EKdb6iPD+WI/p8sqoYUxl7vu2PGN9AHbpPu4yCNnBHonsuGoV5NN2IrKv1ygVvg//karMTKNUvHhCT41k8C0J+SRGci8QMvOQw5cxksO3yqrggpvEfIv/vZhv7T/7Am5HKV/Gf+DOv4iq3wor5qNB7iV/Zv60WDJOoRHV2U7Tz7n6yC/Xt2DiEf0QXwAAAABJRU5ErkJggg==", 115), (0, n.Z)(this, "name", "ButtonAutoPlayAccept"), this.setBackgroundAlpha(1), this.setBackgroundColor(this.game.config.get("colors.primary")), this.show(!1)
                    }
                    resize() {
                        this.scale.set(this.game.device.desktop ? 1 : 2)
                    }
                }
                class hs extends Kt {
                    constructor() {
                        super("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTP///////////////////////////////////////////////////////////////////////////4/JsPUAAAATdFJOUwCQEIBgvyCfQN+gX1CvMH+wz28jjNZzAAAAj0lEQVRYw+3VSxLDIAwEUYMNFonz9f3vmivMUFZVFv0O0AuQYFkAAACABDUkE+U+TsmodrqcotVONzXd7PRNTe92OtT007/HY5cEu4TLRVFmr0yMdVdXJv5p0ROfp1VNF/+TUb+CPnGPx6ao7BIu9x2Kz8svb+o23u30Q02/89KJz5N/IOqD3Rh4AAAAZPgBCZoyk9uDJXUAAAAASUVORK5CYII=", 90, !1), (0, n.Z)(this, "name", "ButtonMenu")
                    }
                    resize() {
                        this.scale.set(this.game.device.desktop ? 1 : 1.6)
                    }
                }
                const rs = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTP////////////////////////////////////////////////////////////////////////////////////VtkI8AAAAVdFJOUwBwX1BAIIC/3+8QoDCvf5/PYJCwj2OlcKoAAAFKSURBVFjD7ZfRkoMgDEWxAgIqVXfz/7+6YK10ikop4WFncp5oOnNqrwEjYwRBEARBEEQFxKi1rWNW4LhVM8MPvnnQqxm66Ju2xTHH6l+Ae4m5fZpjtS8WXPcN4FTduaIyCOZYPfiq/NJs4UrNFlfVCOagtt3W4saXeYbQ2Ek9gEN1E3xdXrubN2Ok7t16eix5XiIWEmr+EoPOSmRKqdcYtg+jWzYfqyGpXi/b7LnfEdVM7TG0IXccdb/HIPyGxFT7GJZdDZjqOST8j9SyXiChmwfs2xiajx+eiChbRmadTyqpHoMvb6PLlHp+GUryjqePDtXt1rWZjxnRT5dq/7dE+JXv5gV5nHUzbiOCyH2AnbnjJuuzuvrCHalF2ZDZpEacgsFsPlfr0sl4Ph0nl+chVWMI5oyhuDtWgXovHH6DgpaMIAiCIAiCqMUf3ndCqqLsR7MAAAAASUVORK5CYII=",
                    ls = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAACXBAMAAADT+qdUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAqUExURUdwTP///////////////////////////////////////////////////4sGkswAAAANdFJOUwDfIBC/z4BfYP7ef86PIFKAAAAASklEQVQ4y2NgsPa9WsDAwCR79+5FBQbGu0AgzNALoq4xxIKoKwx3wWCUGqVGqWFG+YLIqwy5IOo6gxWIEmBgWgkuCxg4Tl5JZgAAzqb+eiBGXckAAAAASUVORK5CYII=";
                class cs extends $.j {
                    constructor(t, e) {
                        super(t), (0, n.Z)(this, "draggable", !1), this.padding = e, this.anchor.set(.5), this.interactive = !0
                    }
                    dragStart() {
                        this.draggable = !0
                    }
                    dragEnd() {
                        this.draggable = !1
                    }
                }
                class ds extends H.W2 {
                    constructor() {
                        super(), this.interactive = !0
                    }
                }
                class us extends $.j {
                    constructor(t, e) {
                        super(t), this.tint = e
                    }
                }
                class gs extends u.TC {
                    constructor(t, e, i, s) {
                        super(), this.beginFill(0), this.drawRect(t, e, i, s), this.endFill()
                    }
                }
                class ps extends(jt(H.W2)) {
                    constructor(t, e, i) {
                        super(), (0, n.Z)(this, "progress", void 0), (0, n.Z)(this, "minPosition", void 0), (0, n.Z)(this, "maxPosition", void 0), (0, n.Z)(this, "onChange", void 0), this.track = t, this.background = e, this.foreground = i, this.progress = new ds, this.progress.mask = this.progress.addChild(new gs(0, 15, this.background.width, this.background.height - 25)), this.minPosition = new K.Point(0, this.track.padding), this.maxPosition = new K.Point(0, this.background.height - this.track.padding), this.onChange = new(k()), this.progress.addChild(this.background), this.progress.addChild(this.foreground), this.addChild(this.progress), this.addChild(this.track), this.track.x = this.progress.width / 2, this.handleProgress(), this.handleTrack()
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
                class ms extends(jt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "slider", void 0), (0, n.Z)(this, "onChangeVolume", void 0), this.background = $.j.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAD9CAMAAAAlKrH0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////1/RXMoAAAAddFJOUwCP794Q3zBAIP6/7pCfz75Qr3BvgKCwX2DOrn+eA25H2wAAAetJREFUeNrt3MdawzAQBGDLsmLJPYUUYN//NXELqW7y5DZz5PB/kjYELjtBMJYo3udbY6RNWCTZPo4Cz8RZIW9SZPFyy/6EMhiT22UHS2Qi2xiINUnmnTBSMjNzrlyFMjvmBDtaFzX6ubFGFsaMXHizWKu9zaAWikfCDVIb8ny195414p3XeUQrtNp7/rwoWRX1qJ1lZSrUw/XjuL/ul6zO3XWtAHL7AkwQXPL/dSmCPN4WwyXAl2tiUWPtcmg5g+JC4CCuw8hwXFZzBY4r6m8mASZCPl3zeDskt0NOov43A/Prf80ROdj6b0YQYjmBhhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSM3wRmkFmK5ArXH3CXBbR43ydAbquD9WfB2L3LjtcBvRoP3tnEbtKZdUj+guPwTG/mo2R4/02aAOV4ZQMsWLKyS4zbWvjAkXavphxKSai13+mQDSRDpVVd96dOxGvVwfbeM9zjS9101KVLz9dLhnh+P99ObkU4jjZjCfeOSW4I5NdXUdV5wwLSaUcqVO9TRerCcAbpyQTnXt8Nh3ZX1oOjSg/VoSVMX557M+gelin1716J4r8pL6tpo/f071eH2B6lgKFKZ54AhAAAAAElFTkSuQmCC"), this.background.alpha = .2;
                        var t = new cs(c.xE.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAMAAABgOjJdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFQUExURUdwTAAAAP39/QAAAPj4+AAAAAAAAAAAAAAAAAAAAH9/f9jY2AAAAAAAAAAAAAAAABUVFQAAAFVVVQ8PDwAAAOLi4vz8/DMzM+Tk5AAAAAAAACoqKn19fYGBgXZ2dvz8/AsLC+np6f///wcHBxISEgAAAPv7+9zc3Pb29unp6ePj48fHx/n5+fj4+PX19c7OzvPz8+Xl5fn5+bu7u/Pz8+np6V5eXpeXl4ODg/z8/AAAABMTE+bm5vr6+qqqqgAAAMPDwwAAAO7u7gAAAFhYWN/f3+7u7lFRUePj4/X19V5eXgAAAAwMDAAAAAAAAFZWVuHh4ff39wAAAN/f3/r6+pGRkUxMTBwcHOnp6fn5+dTU1Pf3987Ozu/v7/j4+AgICPv7+/f39w4ODsPDwwAAAPHx8fb29gAAAPz8/PLy8gAAAA8PDwUFBREREQUFBf///7KU/iMAAABvdFJOUwAD4AblEgwBAgUCFAQHCBQMDQMRDyThBaEWGQZBP0exFr8BJA4okiWVJCUpk5SmFUNHw1fIri4bPsEODWqiYCArFcwRLqR4MrO2KxcUIiMyo7UkgHI4OQkj5HNjirrUHeLmEn0eutYQ0dorECwPKxinWNoAAAFMSURBVDjLfdTVlsIwEAbglEoSqKCL2wLr7s66u7u75f3vNoXlUEqS/3a+kzTpTABwBiJJkhCEgBmIfMdZDyHkPXt1LjHqwYFJUs9su9cNfD2kMW2+hr1gp4e444k4CIw0A0JaumB9CxagpL8mcC9hpyNaBaib8DKIKkLu44oh2f4U7zzhZ9xeBM8IxCqm4mxDIA4MCGDgViDutVaAwkSUIgIoJBRvVDwKhRqka1wIwGsIARi+EYiXIj2LdiQQl/QswNwUiBPTvtOFES4Yjev2r50e5oqJqUq7yvEYB8QSRrU/tGWFCZQx/3/H60tpFlHSql5rw+h2qpkoKcuot7Jhre27wMqeJTvHIamWM+uO+uLcjppsHCldSxxmnvIftPqQvz7d3fJj9+AiOZC7K5R+vz9LhedcALNmG2FTC6vq14/fxF4AeC9EsOn5+ANrFSqZBMENigAAAABJRU5ErkJggg=="), 14);
                        t.width = 33, t.height = 33;
                        var e = new us(c.xE.from(ls), 0);
                        e.width = 12, e.height = 151;
                        var i = new us(c.xE.from(ls), 4914792);
                        i.width = 12, i.height = 151, this.onChangeVolume = new(k()), this.slider = new ps(t, e, i), this.slider.position.set(33, 30), this.slider.onChange.add((t => this.onChangeVolume.dispatch(this.convertToVolume(t)))), this.interactive = !0, this.hitArea = new K.Rectangle(0, 0, 78, 200), this.game.interaction.up(this, (() => {
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
                class As extends Qt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "ButtonSound"), (0, n.Z)(this, "textureOn", void 0), (0, n.Z)(this, "textureOff", void 0), (0, n.Z)(this, "controls", void 0), (0, n.Z)(this, "volumeControl", void 0), (0, n.Z)(this, "onChangeVolume", void 0), this.textureOn = c.xE.from(rs), this.textureOff = c.xE.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTP////////////////////////////////////////////////////////////////////////////////////VtkI8AAAAVdFJOUwC/zzAQf4DfIO+fX0BwoGCvUJCwj2iqfUcAAAGeSURBVFjD7dfbkoMgDAZg1Higntvl/V91CysQRDsG6cxe5L9yOs6nEwOkQnA4HA6Hw+FwvpBukbL+jtyqd/osVq0W2MvqlYV+Q6WzK2lkVUS3rSudnpBt5Zj+UeqRZrcdLscBrX9cs9gRXeh7gG4/IzuiK/1rk/ApG29DefwZ9eOlyGA7ui62Fgf9xIFAQt0f2pYevVfQ2h1at/BCu8Cd+Xc50CpSo0WN7cXSAyqDJFXEfDI1RraYcdNtz1n8rdcWuU7tbVmFd5jXBlf3B5X+ZLeuDKuvO4H+YE+uDJ0uGJ229hzZugxPR6sEOrDxPjT7CqfS2MaHTA76xG7uF8Tb5jxwtu/mKvEzntq++YbDHfEibYtqbNSP4K6u70/tJfuVstAbdWKbw8bafcr2BO0VW7h1Tjlmuqnc29vgENmTSpoXgtoc2x31ALtuT6SuJtny1pA5OhsPJX4dJb+03T7wpGps1+u3JuN5P05iG8StRENwVyb33InttyHIZ0d/OIy9QBZ7UjIYScMhMG9goRwv1AFcjoLD4XA4HA7n/+UXAfY3Afulub0AAAAASUVORK5CYII="), this.volumeControl = this.addChild(new ms), this.volumeControl.pivot.set(40, 214), this.volumeControl.show(!1), this.onChangeVolume = this.volumeControl.onChangeVolume, this.controls = this.addChild(new Kt(rs)), this.controls.onClick.add((() => this.onClick.dispatch())), this.game.interaction.hover(this, (() => this.volumeControl.show(this.game.device.desktop))), this.game.interaction.out(this, (() => this.volumeControl.show(!1))), this.show(this.game.device.desktop)
                    }
                    toggle(t, e) {
                        this.controls.changeIcon(t ? this.textureOn : this.textureOff), this.volumeControl.setVolume(e)
                    }
                    resize() {
                        this.controls.showBackground(!this.game.device.desktop), this.scale.set(this.game.device.desktop ? 1 : 1.6)
                    }
                }
                class vs extends(jt(H.W2)) {
                    constructor() {
                        super(...arguments), (0, n.Z)(this, "name", "Controls")
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
                class bs extends Kt {
                    constructor() {
                        super(...arguments), (0, n.Z)(this, "name", "ButtonBetLevel"), (0, n.Z)(this, "update", (t => {}))
                    }
                    setActive(t) {
                        this.changeColor(t ? this.game.config.get("colors.primary") : this.game.config.get("colors.white")), this.setBackgroundAlpha(t ? 1 : .2), this.setBackgroundColor(t ? this.game.config.get("colors.secondary") : this.game.config.get("colors.white"))
                    }
                    resize() {
                        this.scale.set(this.game.device.desktop ? 1 : 1.6)
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

                function ys(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? ws(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ws(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                var fs = {
                        fontFamily: "Avenir-Medium",
                        fill: 16777215,
                        align: "center"
                    },
                    ks = {
                        fontSize: 4
                    };
                const Cs = {
                    Common: {
                        delimiter: ks,
                        default: ys(ys({}, fs), {}, {
                            fontSize: 22
                        }),
                        value: {
                            fontFamily: "Avenir-Bold",
                            fontSize: 32
                        }
                    },
                    Button: {
                        default: ys(ys({}, fs), {}, {
                            fontSize: 28,
                            dropShadow: !0,
                            dropShadowBlur: 4,
                            dropShadowColor: "black",
                            dropShadowAngle: Math.PI / 2,
                            dropShadowDistance: 2
                        })
                    },
                    FreeSpins: {
                        delimiter: ks,
                        default: ys(ys({}, fs), {}, {
                            fontSize: 22
                        }),
                        value: {
                            fontSize: 32,
                            fontFamily: "Avenir-Bold",
                            fill: 16777215
                        }
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

                function Bs(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? xs(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : xs(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class Ss extends bs {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "ButtonBetLevel"), (0, n.Z)(this, "betLevelText", void 0), (0, n.Z)(this, "update", (t => {
                            var e = this.game.helpers.toMoneySS(t);
                            this.betLevelText.text = this.game.i18n.t("ControlsDesktopBet", this.game.i18n.currency({
                                withBrace: !0
                            }), e)
                        })), this.changeIcon(this.game.loader.getAsset("iconBetLevel")), this.betLevelText = this.addChild(new ts("", Bs(Bs({}, Cs.Common), {}, {
                            default: Bs(Bs({}, Cs.Common.default), {}, {
                                align: "left"
                            })
                        }))), this.wrapper.position.set(0, 0), this.betLevelText.anchor.set(0, .5), this.betLevelText.position.set(70, 5), this.onClick.add((() => {
                            this.game.action.emit("clickBetLevel")
                        }))
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

                function Es(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Ps(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Ps(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class Ts extends(jt(ts)) {
                    constructor() {
                        super("", Es(Es({}, Cs.Common), {}, {
                            default: Es(Es({}, Cs.Common.default), {}, {
                                align: "right"
                            })
                        })), this.anchor.x = 1
                    }
                    update(t) {
                        t >= 0 && (this.text = this.game.i18n.t("ControlsDesktopBalance", this.game.i18n.currency({
                            withBrace: !0,
                            withSpace: !0
                        }), this.game.helpers.toMoney(t)))
                    }
                }
                class Zs extends(jt(ts)) {
                    constructor() {
                        super("", Cs.FreeSpins)
                    }
                    update(t) {
                        this.text = 0 === t ? this.game.i18n.t("ControlsDesktopFreeSpinsLast") : this.game.i18n.t("ControlsDesktopFreeSpinsLeft", t)
                    }
                }
                class Os extends(jt(ts)) {
                    constructor() {
                        super("", Cs.Common), this.setTagStyle("default", {
                            fill: this.game.config.get("colors.primary"),
                            fontFamily: "Avenir-Bold"
                        }), this.setTagStyle("value", {
                            fontSize: 66
                        })
                    }
                    update(t) {
                        this.text = this.game.i18n.t("ControlsDesktopTotalWin", this.game.i18n.currency({
                            withBrace: !0
                        }), this.game.helpers.toMoney(t))
                    }
                }
                class Rs extends(jt(ts)) {
                    constructor() {
                        super("", Cs.Common), this.anchor.x = .5
                    }
                    update(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        this.text = this.game.i18n.t("ControlsDesktopWin", this.game.i18n.currency({
                            withBrace: !0
                        }), t > 0 || e ? this.game.helpers.toMoney(t) : "")
                    }
                }
                class Ms extends Kt {
                    constructor() {
                        super(), (0, n.Z)(this, "counts", void 0), this.icon.scale.set(.7), this.changeIcon(this.game.loader.getAsset("iconRandom")), this.counts = this.addChild(new A.xv("", {
                            fontFamily: "Avenir-Bold",
                            fontSize: 28,
                            fill: this.game.config.get("colors.primary")
                        })), this.counts.anchor.set(0, .5), this.counts.position.set(60, 0)
                    }
                    setCount(t) {
                        var e = t > 0;
                        this.counts.text = e ? "".concat(t) : "", this.counts.visible = e, this.changeColor(e ? this.game.config.get("colors.primary") : this.game.config.get("colors.white")), this.setBackgroundAlpha(e ? 1 : .2), this.setBackgroundColor(e ? this.game.config.get("colors.secondary") : this.game.config.get("colors.white"))
                    }
                    resize() {
                        this.scale.set(this.game.device.desktop ? 1 : 1.6), this.game.device.desktop || (this.game.device.landscape ? this.game.leftHand.enabled ? (this.counts.anchor.set(0, .5), this.counts.position.set(60, 0)) : (this.counts.anchor.set(1, .5), this.counts.position.set(-60, 0)) : (this.counts.anchor.set(.5, 1), this.counts.position.set(0, -50)))
                    }
                }
                class Fs extends(jt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "button", void 0), (0, n.Z)(this, "textBuy", void 0), (0, n.Z)(this, "textBuyValue", void 0), this.buttonMode = !0, this.button = this.addChild(new $.j(this.game.loader.getAsset("btnExtraBuy"))), this.button.anchor.set(.5), this.textBuy = this.textBuy = this.addChild(new A.xv(this.game.i18n.t("TextBuyExtraBall").toUpperCase(), {
                            fontSize: 17,
                            fontFamily: "Avenir-Bold",
                            wordWrap: !0,
                            wordWrapWidth: 175,
                            fill: [8191999, 2674687],
                            fillGradientType: A.M_.LINEAR_VERTICAL,
                            stroke: 1722717,
                            strokeThickness: 6,
                            letterSpacing: 2,
                            lineHeight: 24,
                            lineJoin: "round",
                            align: "center"
                        })), this.textBuy.anchor.set(0, .5), this.textBuyValue = this.addChild(new A.xv(this.game.i18n.t("TextBuyExtraValue").toUpperCase(), {
                            fontSize: 25,
                            fontFamily: "Avenir-Bold",
                            wordWrap: !0,
                            wordWrapWidth: 160,
                            fill: [8191999, 2674687],
                            fillGradientType: A.M_.LINEAR_VERTICAL,
                            stroke: 1722717,
                            strokeThickness: 6,
                            letterSpacing: 2,
                            lineHeight: 26,
                            lineJoin: "round"
                        })), this.textBuyValue.anchor.set(0, .5), this.enable()
                    }
                    setPrice(t) {
                        this.textBuyValue.text = this.game.i18n.t("TextBuyExtraBallValue", this.game.helpers.toMoney(t)).toUpperCase(), this.resize()
                    }
                    disable() {
                        this.interactive = !1, this.interactiveChildren = !1
                    }
                    enable() {
                        this.interactive = !0, this.interactiveChildren = !0
                    }
                    resize() {
                        this.scale.set(this.game.device.desktop ? 1 : 1.6), this.game.device.desktop ? (this.textBuy.rotation = -.025, this.textBuy.anchor.x = 0, this.textBuy.position.set(26, -28), this.textBuy.style.align = "left", this.textBuy.style.wordWrapWidth = 175, this.textBuyValue.rotation = -.025, this.textBuyValue.anchor.x = 0, this.textBuyValue.style.align = "left", this.textBuyValue.position.set(26, this.textBuy.y + this.textBuy.height + ("fr" === this.game.i18n.language ? -10 : 2))) : (this.game.device.portrait ? (this.textBuy.style.wordWrapWidth = 190, this.textBuy.position.set(0, ["tr", "pt", "fr", "mt", "es", "it", "de", "uk"].includes(this.game.i18n.language) ? -55 : -40), this.textBuyValue.position.set(0, 44)) : (this.textBuy.style.wordWrapWidth = 160, this.textBuy.style.fontSize = ["fr"].includes(this.game.i18n.language) ? 15 : 17, this.textBuy.position.set(0, -50), this.textBuyValue.position.set(0, 34)), this.textBuy.rotation = 0, this.textBuy.anchor.x = .5, this.textBuy.style.align = "center", this.textBuyValue.rotation = 0, this.textBuyValue.anchor.x = .5, this.textBuyValue.style.align = "center")
                    }
                }
                class Is extends(jt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "animation", void 0), (0, n.Z)(this, "textCollect", void 0), this.buttonMode = !0, this.animation = this.addChild(new Di(this.game.loader.getAsset("button_spin_animation"))), this.animation.pivot.set(125), this.animation.position.set(125, 120);
                        var t = new A.xv(this.game.i18n.t("TextCollect").toUpperCase(), {
                            fontSize: !this.game.device.desktop && this.game.device.portrait && ["de", "fr"].includes(this.game.i18n.language) ? 32 : "de" === this.game.i18n.language ? 35 : 42,
                            fontFamily: "Avenir-Bold",
                            fill: [16777072, 16767797],
                            fillGradientType: A.M_.LINEAR_VERTICAL,
                            stroke: 6831891,
                            strokeThickness: 9,
                            letterSpacing: 6,
                            lineJoin: "round"
                        });
                        t.anchor.set(.5), t.updateText(!1), this.textCollect = this.addChild(new z.IE(t.texture, function(t, e) {
                            for (var i = 200, s = Math.PI / i, o = e || 1, n = (i - Math.round(t.width / (o * Math.PI) * i)) / 2, a = [], h = i - n; h > n; h -= 1) {
                                var r = o * Math.cos(s * h) + o,
                                    l = o * Math.sin(s * h) - o;
                                a.push(new K.Point(r, l))
                            }
                            return a
                        }(t.texture, 600))), this.textCollect.position.set(-467, 200), this.textCollect.visible = !1, this.game.interaction.click(this, (() => {
                            this.animation.play("press")
                        })), this.game.interaction.hover(this, (() => {
                            this.animation.play("hover")
                        })), this.game.interaction.out(this, (() => {
                            this.animation.play("active")
                        })), this.enable()
                    }
                    disable() {
                        this.interactive = !1, this.interactiveChildren = !1, this.animation.play("inactive")
                    }
                    enable() {
                        this.interactive = !0, this.interactiveChildren = !0, this.animation.play("active")
                    }
                    toBase() {
                        this.textCollect.visible = !1, this.animation.rotation = 0
                    }
                    toCollect() {
                        this.textCollect.visible = !0, this.animation.rotation = 1.62
                    }
                }
                class Ns extends vs {
                    constructor() {
                        super(), (0, n.Z)(this, "spaceKey", void 0), (0, n.Z)(this, "onPressPlay", void 0), (0, n.Z)(this, "textWin", void 0), (0, n.Z)(this, "textBalance", void 0), (0, n.Z)(this, "textTotalWin", void 0), (0, n.Z)(this, "textFreeLeft", void 0), (0, n.Z)(this, "buttonPlay", void 0), (0, n.Z)(this, "buttonBuy", void 0), (0, n.Z)(this, "buttonMenu", void 0), (0, n.Z)(this, "buttonSound", void 0), (0, n.Z)(this, "buttonBetLevel", void 0), (0, n.Z)(this, "buttonAutoPlay", void 0), (0, n.Z)(this, "buttonAutoPlayAccept", void 0), (0, n.Z)(this, "buttonAutoPick", void 0), this.interactive = !0, this.onPressPlay = new(k()), this.spaceKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Space), this.buttonAutoPlay = new ns, this.buttonAutoPlay.position.set(833, 1012), this.buttonAutoPlayAccept = new as, this.buttonAutoPlayAccept.position.set(958, 1012), this.game.config.get("autoPlay.available", !0) && (this.addChild(this.buttonAutoPlay), this.addChild(this.buttonAutoPlayAccept)), this.buttonBetLevel = this.addChild(new Ss), this.buttonBetLevel.position.set(213, 1012), this.buttonPlay = this.addChild(new Is), this.buttonPlay.hitArea = new K.Rectangle(0, 0, 245, 245), this.buttonPlay.position.set(890, 930), this.buttonPlay.scale.set(.55), this.buttonBuy = this.addChild(new Fs), this.buttonBuy.position.set(1084, 1012), this.buttonAutoPick = this.addChild(new Ms), this.buttonAutoPick.position.set(1084, 1012), this.buttonMenu = this.addChild(new hs), this.buttonMenu.position.set(77, 1012), this.buttonSound = this.addChild(new As), this.buttonSound.position.set(1840, 1012), this.textWin = this.addChild(new Rs), this.textWin.position.set(1400, 980), this.textBalance = new Ts, this.textBalance.position.set(1760, 980), this.game.config.get("balanceHide", !1) || this.addChild(this.textBalance), this.textTotalWin = this.addChild(new Os), this.textTotalWin.position.set(890, 955), this.textTotalWin.hide(), this.textFreeLeft = this.addChild(new Zs), this.textFreeLeft.position.set(480, 980), this.textFreeLeft.hide()
                    }
                    enable() {
                        this.interactive = !0, this.interactiveChildren = !0, this.buttonPlay.enable(), this.buttonMenu.enable(), this.buttonAutoPick.enable(), this.buttonAutoPlay.enable(), this.buttonBetLevel.enable()
                    }
                    disable() {
                        this.interactive = !1, this.interactiveChildren = !1
                    }
                    press(t) {
                        this.buttonPlay.interactive = !0;
                        var e = this.onPressPlay.once(t);
                        return () => this.onPressPlay.detach(e)
                    }
                    disableAuto() {
                        this.buttonAutoPlay.disable()
                    }
                    fastspin() {
                        this.buttonPlay.disable()
                    }
                    spin() {
                        this.textWin.update(0), this.buttonMenu.disable(), this.buttonAutoPick.disable(), this.buttonBetLevel.disable()
                    }
                    collect() {
                        this.buttonPlay.toBase(), this.buttonPlay.enable(), this.buttonBuy.show(), this.buttonAutoPick.hide(), this.buttonMenu.disable(), this.buttonAutoPick.disable(), this.buttonBetLevel.disable()
                    }
                    setBalance(t) {
                        this.textBalance.update(t)
                    }
                    setBet(t) {
                        this.buttonBetLevel.update(t)
                    }
                    setNumbers(t) {
                        this.buttonAutoPick.setCount(t)
                    }
                    setWin(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        this.textWin.update(t, e)
                    }
                    setTotalWin(t) {
                        this.textTotalWin.update(t)
                    }
                    setFreeLeft(t) {
                        this.textFreeLeft.update(t)
                    }
                    onFreeSpinsStart() {
                        this.textTotalWin.show(), this.textFreeLeft.show(), this.buttonMenu.disable(), this.buttonPlay.hide(), this.buttonPlay.disable(), this.buttonAutoPlay.hide(), this.buttonAutoPlay.disable(), this.buttonBetLevel.hide(), this.buttonBetLevel.disable(), this.buttonAutoPick.hide(), this.buttonAutoPick.disable()
                    }
                    onFreeSpinsEnd() {
                        this.textFreeLeft.hide(), this.textTotalWin.hide(), this.buttonMenu.enable(), this.buttonPlay.show(), this.buttonPlay.enable(), this.buttonAutoPlay.show(), this.buttonAutoPlay.enable(), this.buttonBetLevel.show(), this.buttonBetLevel.enable(), this.buttonAutoPick.show(), this.buttonAutoPick.enable()
                    }
                    onAutoPlaySettingsOpen() {
                        this.buttonPlay.hide(), this.buttonAutoPlayAccept.show(), this.buttonAutoPlay.setActive(!0)
                    }
                    onAutoPlaySettingsClose() {
                        this.buttonPlay.show(), this.buttonAutoPlayAccept.hide(), this.buttonAutoPlay.setActive(!1)
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
                    onBetLevelSettingsOpen() {
                        this.buttonBetLevel.setActive(!0)
                    }
                    onBetLevelSettingsClose() {
                        this.buttonBetLevel.setActive(!1)
                    }
                }
                class Ds extends $.j {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16777215,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .75;
                        super(c.xE.WHITE), this.height = 4, this.tint = t, this.alpha = e
                    }
                }

                function Ls(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function Ws(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Ls(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Ls(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                var _s, Us;
                ! function(t) {
                    t.Bet = "bet", t.Win = "win", t.Balance = "balance", t.FreeLeft = "freeLeft", t.FreePlayed = "freePlayed", t.TotalWin = "totalWin", t.FreeRoundLeft = "freeRoundLeft", t.BonusLeft = "bonusLeft"
                }(_s || (_s = {})),
                function(t) {
                    t.Free = "free", t.Normal = "normal", t.Bonus = "bonus"
                }(Us || (Us = {}));
                var Gs = {
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
                    Vs = Ws(Ws({}, Gs), {}, {
                        value: Ws(Ws({}, Gs.value), {}, {
                            fill: 16777215
                        })
                    });
                class js extends(jt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "state", void 0), (0, n.Z)(this, "textBet", void 0), (0, n.Z)(this, "textWin", void 0), (0, n.Z)(this, "textBalance", void 0), (0, n.Z)(this, "textFreeRound", void 0), (0, n.Z)(this, "textFree", void 0), (0, n.Z)(this, "textTotalWin", void 0), (0, n.Z)(this, "textBonus", void 0), (0, n.Z)(this, "delimiter", void 0), this.state = Us.Normal, this.textBet = new ts("", Ws(Ws({}, Gs), {}, {
                            default: Ws(Ws({}, Gs.default), {}, {
                                align: "left"
                            })
                        })), this.textBet.anchor.set(0, 0), this.textWin = new ts("", Gs), this.textWin.anchor.set(.5, 0), this.textBalance = new ts("", Ws(Ws({}, Gs), {}, {
                            default: Ws(Ws({}, Gs.default), {}, {
                                align: "right"
                            })
                        })), this.textBalance.anchor.set(1, 0), this.textFreeRound = new ts("", Ws(Ws({}, Gs), {}, {
                            default: Ws(Ws({}, Gs.default), {}, {
                                align: "center",
                                wordWrap: !0,
                                wordWrapWidth: 300
                            })
                        })), this.textFreeRound.anchor.set(1, 1), this.textFree = new ts("", Ws(Ws({}, Vs), {}, {
                            default: Ws(Ws({}, Vs.default), {}, {
                                fontSize: 30,
                                wordWrapWidth: 340
                            })
                        })), this.textFree.anchor.set(0, 1), this.textTotalWin = new ts("", Ws(Ws({}, Vs), {}, {
                            default: Ws(Ws({}, Vs.default), {}, {
                                fontFamily: "Avenir-Bold",
                                fill: this.game.config.get("colors.primary"),
                                fontSize: 30,
                                wordWrapWidth: 300
                            }),
                            value: Ws(Ws({}, Vs.value), {}, {
                                fill: this.game.config.get("colors.primary")
                            })
                        })), this.textTotalWin.anchor.set(.5, 1), this.textBonus = new ts("", Ws(Ws({}, Vs), {}, {
                            default: Ws(Ws({}, Vs.default), {}, {
                                fontSize: 27,
                                wordWrapWidth: 340
                            })
                        })), this.textBonus.anchor.set(0, 1), this.delimiter = new Ds(16777215, .5), this.addChild(...[this.textBet, this.textWin, !this.game.config.get("balanceHide", !1) && this.textBalance, this.textFreeRound, this.textFree, this.textTotalWin, this.textBonus, this.delimiter].filter(Boolean)), this.game.freeRound.onStart.once((() => {
                            this.textBalance.visible = !1, this.textFreeRound.visible = !0
                        })), this.game.freeRound.onFinish.once((() => {
                            this.textBalance.visible = !0, this.textFreeRound.visible = !1
                        }))
                    }
                    resize() {
                        var t = this.state === Us.Free,
                            e = this.state === Us.Bonus;
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
                            case _s.Bet:
                                var e = this.game.helpers.toMoneySS(t.value),
                                    i = this.game.i18n.t("StatusBarMobileBet", this.game.i18n.currency({
                                        withBrace: !0
                                    }));
                                this.textBet.text = "".concat(i, "<value>").concat(e, "</value>");
                                break;
                            case _s.Win:
                                var s = this.game.i18n.t("StatusBarMobileWin", this.game.i18n.currency({
                                    withBrace: !0
                                }));
                                t.value > 0 || t.disableZeroCheck ? this.textWin.text = "".concat(s, "<value>").concat(this.game.helpers.toMoney(t.value), "</value>") : this.textWin.text = s;
                                break;
                            case _s.Balance:
                                var o = this.game.i18n.t("StatusBarMobileBalance", this.game.i18n.currency({
                                    withBrace: !0,
                                    withSpace: !0
                                }));
                                this.textBalance.text = "".concat(o, "<value>").concat(this.game.helpers.toMoney(t.value), "</value>"), this.game.action.emit("balance_updated", t.value);
                                break;
                            case _s.FreeLeft:
                                var n = 0 === t.value;
                                this.textFree.text = n ? this.game.i18n.t("StatusBarMobileFreeLast") : this.game.i18n.t("StatusBarMobileFreeLeft", t.value);
                                break;
                            case _s.FreePlayed:
                                var a = this.game.i18n.t("StatusBarMobileFreePlayed");
                                this.textFree.text = "".concat(a, "<value>").concat(t.value, "</value>");
                                break;
                            case _s.FreeRoundLeft:
                                var h = this.game.i18n.t("StatusBarMobileFreeRoundLeft");
                                this.textFreeRound.text = "".concat(h, "<value>").concat(t.value, "</value>");
                                break;
                            case _s.BonusLeft:
                                var r = 0 === t.value,
                                    l = -1 === t.value;
                                this.textBonus.text = l ? "" : r ? this.game.i18n.t("StatusBarMobileBonusLast") : this.game.i18n.t("StatusBarMobileBonusLeft", t.value);
                                break;
                            case _s.TotalWin:
                                var c = this.game.i18n.t("StatusBarMobileTotalWin", this.game.i18n.currency({
                                    withBrace: !0
                                }));
                                this.textTotalWin.text = "".concat(c, "<value>").concat(this.game.helpers.toMoney(t.value), "</value>")
                        }
                        this.resize()
                    }
                    changeState(t) {
                        this.state = t, t === Us.Free ? (this.textFree.visible = !0, this.textTotalWin.visible = !0, this.textWin.visible = !0, this.textBonus.visible = !1, this.visible = !0) : t === Us.Normal ? (this.textFree.visible = !1, this.textTotalWin.visible = !1, this.textWin.visible = !0, this.textBonus.visible = !1, this.visible = !0) : t === Us.Bonus && (this.textBonus.visible = !0, this.textTotalWin.visible = !0, this.textWin.visible = !1, this.visible = !0), this.resize()
                    }
                }
                class zs extends js {
                    constructor() {
                        super(), this.textFree.anchor.set(0, 1), this.textFree.setTagStyle("default", {
                            wordWrap: !0,
                            wordWrapWidth: 300
                        })
                    }
                    resize() {
                        super.resize(), this.game.device.desktop || this.game.device.landscape ? this.textFree.position.set(460, 100) : this.textFree.position.set(44, -57)
                    }
                }
                class Ys extends vs {
                    constructor() {
                        super(), (0, n.Z)(this, "state", Us.Normal), (0, n.Z)(this, "statusBar", void 0), (0, n.Z)(this, "buttonPlay", void 0), (0, n.Z)(this, "buttonBuy", void 0), (0, n.Z)(this, "buttonMenu", void 0), (0, n.Z)(this, "buttonSound", void 0), (0, n.Z)(this, "buttonAutoPlay", void 0), (0, n.Z)(this, "buttonAutoPlayAccept", void 0), (0, n.Z)(this, "buttonBetLevel", void 0), (0, n.Z)(this, "buttonAutoPick", void 0), this.buttonPlay = this.addChild(new Is), this.buttonBuy = this.addChild(new Fs), this.buttonAutoPick = this.addChild(new Ms), this.buttonBetLevel = this.addChild(new Ss), this.buttonAutoPlay = new ns, this.buttonAutoPlayAccept = new as, this.game.config.get("autoPlay.available", !0) && (this.addChild(this.buttonAutoPlay), this.addChild(this.buttonAutoPlayAccept)), this.buttonMenu = this.addChild(new hs), this.buttonSound = this.addChild(new As), this.statusBar = this.addChild(new zs), this.statusBar.changeState(this.state)
                    }
                    get menuOpened() {
                        var t, e;
                        return null !== (t = null === (e = this.game.get("Menu")) || void 0 === e ? void 0 : e.opened) && void 0 !== t && t
                    }
                    get autoPlaySettingsOpened() {
                        var t, e;
                        return null !== (t = null === (e = this.game.get("AutoPlaySettings")) || void 0 === e ? void 0 : e.opened) && void 0 !== t && t
                    }
                    get betLevelSettingsOpened() {
                        var t, e;
                        return null !== (t = null === (e = this.game.get("BetSettings")) || void 0 === e ? void 0 : e.opened) && void 0 !== t && t
                    }
                    resize() {
                        var t, e = null === (t = this.game.leftHand) || void 0 === t ? void 0 : t.enabled;
                        if (this.game.device.landscape) this.menuOpened && this.buttonBetLevel.show(), this.buttonBetLevel.position.set(120, 980), e ? (this.buttonSound.position.set(120, this.state === Us.Free ? 300 : 780), this.buttonMenu.position.set(120, 120), this.buttonAutoPlay.position.set(120, 300), this.buttonAutoPlayAccept.position.set(160, this.game.viewport.height / 2), this.buttonPlay.position.set(40, this.game.viewport.height / 2 - 120), this.buttonBuy.position.set(140, this.game.viewport.height / 2 + 260), this.buttonAutoPick.position.set(120, this.game.viewport.height / 2 + 260)) : (this.buttonSound.position.set(1780, this.state === Us.Free ? 300 : 780), this.buttonMenu.position.set(1780, 120), this.buttonAutoPlay.position.set(1780, 300), this.buttonAutoPlayAccept.position.set(1760, this.game.viewport.height / 2), this.buttonPlay.position.set(1640, this.game.viewport.height / 2 - 120), this.buttonBuy.position.set(1780, this.game.viewport.height / 2 + 260), this.buttonAutoPick.position.set(1780, this.game.viewport.height / 2 + 260));
                        else {
                            var i = 2 * this.game.viewport.paddingY + this.game.viewport.height;
                            this.menuOpened && this.buttonBetLevel.hide(), this.buttonBetLevel.position.set(332, i - 318), this.buttonSound.position.set(110, this.state === Us.Free ? 100 : i - 318), this.buttonAutoPick.position.set(this.state === Us.Normal ? 748 : 955, i - 318), this.buttonMenu.position.set(955, i - 318), this.buttonPlay.position.set(420, i - 690), this.buttonBuy.position.set(800, i - 570), this.buttonAutoPlay.position.set(540, i - 318), this.buttonAutoPlayAccept.position.set(this.game.viewport.width / 2, i - 590)
                        }
                    }
                    enable() {
                        this.buttonPlay.enable(), this.buttonMenu.enable(), this.buttonBetLevel.enable(), this.buttonAutoPick.enable(), this.buttonAutoPlay.enable()
                    }
                    disable() {
                        this.buttonPlay.disable(), this.buttonMenu.disable(), this.buttonBetLevel.disable(), this.buttonAutoPick.disable(), this.buttonAutoPlay.disable()
                    }
                    disableAuto() {
                        this.buttonAutoPlay.disable()
                    }
                    setBalance(t) {
                        this.statusBar.update({
                            type: _s.Balance,
                            value: t
                        })
                    }
                    setBet(t) {
                        this.statusBar.update({
                            type: _s.Bet,
                            value: t
                        })
                    }
                    setWin(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        this.statusBar.update({
                            type: _s.Win,
                            value: t,
                            disableZeroCheck: e
                        })
                    }
                    setTotalWin(t) {
                        this.statusBar.update({
                            type: _s.TotalWin,
                            value: t
                        })
                    }
                    setFreeLeft(t) {
                        this.statusBar.update({
                            type: _s.FreeLeft,
                            value: t
                        })
                    }
                    press(t) {
                        return () => {}
                    }
                    spin() {
                        this.statusBar.update({
                            type: _s.Win,
                            value: 0
                        }), this.game.autoPlay.enabled || this.buttonPlay.disable(), this.buttonMenu.disable(), this.buttonAutoPick.disable(), this.buttonBetLevel.disable()
                    }
                    fastspin() {}
                    setNumbers(t) {
                        this.buttonAutoPick.setCount(t)
                    }
                    onFreeSpinsStart() {}
                    onFreeSpinsEnd() {}
                    onAutoPlaySettingsOpen() {
                        this.buttonMenu.hide(), this.buttonPlay.hide(), this.buttonAutoPlayAccept.show(), this.buttonAutoPlay.setActive(!0)
                    }
                    onAutoPlaySettingsClose() {
                        this.buttonMenu.show(), this.buttonPlay.show(), this.buttonAutoPlayAccept.hide(), this.buttonAutoPlay.setActive(!1)
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
                    onBetLevelSettingsOpen() {
                        this.buttonMenu.hide(), this.buttonBetLevel.setActive(!0)
                    }
                    onBetLevelSettingsClose() {
                        this.buttonMenu.show(), this.buttonBetLevel.setActive(!1)
                    }
                    onMenuOpen() {
                        this.buttonSound.show(), this.buttonMenu.hide(), this.buttonPlay.hide(), this.buttonAutoPlay.hide(), this.buttonAutoPick.hide(), this.game.device.landscape ? this.buttonBetLevel.show() : this.buttonBetLevel.hide()
                    }
                    onMenuClose() {
                        this.buttonSound.hide(), this.buttonMenu.show(), this.buttonPlay.show(), this.buttonAutoPlay.show(), this.buttonAutoPick.show(), this.buttonBetLevel.show()
                    }
                }
                class Hs extends(jt(ts)) {
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
                class Qs extends(jt(A.xv)) {
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
                class Ks extends(jt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "content", void 0), this.title = this.addChild(new Qs(this.game.i18n.t("GameRulesAdvancedAutoPlayTitle"))), this.content = this.addChild(new Hs(this.game.i18n.t("GameRulesAdvancedAutoPlayContent")))
                    }
                    resize() {
                        this.content.position.set(0, this.title.y + this.title.height + 30)
                    }
                }
                class Xs extends(jt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "content", void 0), this.title = this.addChild(new Qs(this.game.i18n.t("GameRulesAutoPlayTitle"))), this.content = this.addChild(new Hs(this.game.i18n.t("GameRulesAutoPlayContent")))
                    }
                    resize() {
                        this.content.position.set(0, this.title.y + this.title.height + 30)
                    }
                }
                class qs extends(jt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "content", void 0), this.content = this.addChild(new Hs(this.game.i18n.t("GameRulesBestExperience")))
                    }
                    resize() {
                        this.content.position.set(0, 0)
                    }
                }
                class Js extends(jt($.j)) {
                    constructor() {
                        super(c.xE.WHITE), this.tint = 2763563
                    }
                    resize() {
                        this.game.device.desktop ? (this.height = 4, this.width = 1120) : this.game.device.landscape ? (this.height = 6, this.width = 1580) : (this.height = 6, this.width = 950)
                    }
                }
                class $s extends(jt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "gameName", void 0), (0, n.Z)(this, "gameTRTP", void 0), this.title = this.addChild(new Qs(this.game.i18n.t("GameRulesGeneralTitle"))), this.gameName = this.addChild(new Hs(this.game.config.get("gameName")));
                        var t = this.game.config.get("trtp");
                        this.gameTRTP = this.addChild(new Hs(this.game.i18n.t("GameRulesGeneralRTP", t))), this.gameTRTP.visible = !!t
                    }
                    resize() {
                        this.gameName.position.set(0, this.title.y + this.title.height + 30), this.gameTRTP.position.set(0, this.gameName.y + this.gameName.height + 30)
                    }
                }
                class to extends(jt(H.W2, {
                    preventResize: !0
                })) {
                    constructor(t, e, i) {
                        super(), (0, n.Z)(this, "icon", void 0), (0, n.Z)(this, "text", void 0), this.name = i, this.icon = this.addChild(new $.j(e)), this.text = this.addChild(new Hs(t))
                    }
                    resize() {
                        this.game.device.desktop ? (this.icon.scale.set(1), this.text.x = 260, this.text.style.wordWrapWidth = 740) : this.game.device.landscape ? (this.icon.scale.set(2), this.text.x = 380, this.text.style.wordWrapWidth = 500) : (this.icon.scale.set(1.8), this.text.x = this.icon.x + this.icon.width + 30, this.text.style.wordWrapWidth = 280), this.text.height >= this.icon.height ? (this.text.y = 0, this.icon.position.set(0, (this.text.height - this.icon.height) / 2)) : (this.icon.y = 0, this.text.y = (this.icon.height - this.text.height) / 2)
                    }
                }
                class eo extends(jt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "content", void 0), this.title = this.addChild(new Qs(this.game.i18n.t("GameRulesInterfaceTitle"))), this.content = this.addChild(new Hs(this.game.i18n.t("GameRulesInterfaceContent"))), this.addItems()
                    }
                    addItems() {
                        this.addChild(new to(this.game.i18n.t("GameRulesInterfaceSpin"), this.game.loader.getAsset("gameRulesButtonSpin"), "itemSpin")), this.addChild(new to(this.game.i18n.t("GameRulesInterfaceMenu"), this.game.loader.getAsset("iconMenu"), "itemMenu"));
                        var t = new to(this.game.i18n.t("GameRulesInterfaceQuickSpin"), this.game.loader.getAsset("iconQuickSpin"), "itemQuickSpin");
                        this.game.config.get("quickSpin.available", !0) && this.addChild(t);
                        var e = new to(this.game.i18n.t("GameRulesInterfaceAutoPlay"), this.game.loader.getAsset("iconAuto"), "itemAutoPlay");
                        this.game.config.get("autoPlay.available", !0) && this.addChild(e), this.addChild(new to(this.game.i18n.t("GameRulesInterfaceBetLevel"), this.game.loader.getAsset("ex" === this.game.i18n.language ? "gameRulesButtonPlayLevel" : "gameRulesButtonBetLevel"), "itemBetLevel")), this.addChild(new to(this.game.i18n.t("GameRulesInterfaceWin"), this.game.loader.getAsset("gameRulesItemWin"), "itemWin")), this.game.config.get("balanceHide", !1) || this.addChild(new to(this.game.i18n.t("GameRulesInterfaceBalance"), this.game.loader.getAsset("gameRulesItemBalance"), "itemBalance")), this.addChild(new to(this.game.i18n.t("GameRulesInterfaceSound"), this.game.loader.getAsset("gameRulesButtonSound"), "itemSound"))
                    }
                    resize() {
                        var t = 0;
                        this.children.forEach((e => {
                            var i = "itemBalance" === e.name && this.game.device.mobile && this.game.device.portrait ? 12 : 0;
                            e.resize(), e.position.set(i, t), t += e.height + 30
                        }))
                    }
                }
                class io extends(jt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "itemQuickSpin", void 0), (0, n.Z)(this, "itemFullscreen", void 0), (0, n.Z)(this, "itemGameSound", void 0), (0, n.Z)(this, "itemBackgroundSound", void 0), this.title = this.addChild(new Qs(this.game.i18n.t("GameRulesSettingsTitle"))), this.content = this.addChild(new Hs(this.game.i18n.t("GameRulesSettingsContent"))), this.game.config.get("quickSpin.available", !0) && (this.itemQuickSpin = this.addChild(new Hs(this.game.i18n.t("GameRulesSettingsContentItemQuickSpin")))), this.itemFullscreen = this.addChild(new Hs(this.game.i18n.t("GameRulesSettingsContentItemFullscreen"))), this.itemGameSound = this.addChild(new Hs(this.game.i18n.t("GameRulesSettingsContentItemGameSound"))), this.itemBackgroundSound = this.addChild(new Hs(this.game.i18n.t("GameRulesSettingsContentItemBackgroundSound")))
                    }
                    resize() {
                        var t;
                        this.children.filter((t => t.visible)).forEach((e => {
                            t ? e.position.set(0, t.y + t.height + 30) : e.position.set(0), t = e
                        }))
                    }
                }
                class so extends(jt(H.W2)) {
                    constructor() {
                        var t, e;
                        super(), (0, n.Z)(this, "content", void 0), this.content = this.addChild(new Hs("".concat(null !== (t = window.RELEASE_VERSION) && void 0 !== t ? t : "", "\n").concat(null !== (e = window.RELEASE_DATE) && void 0 !== e ? e : "")))
                    }
                    resize() {
                        var t;
                        null === (t = this.content) || void 0 === t || t.position.set(0, 0)
                    }
                }
                class oo extends(jt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "GameRules"), (0, n.Z)(this, "scrollView", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "content", void 0), this.visible = !1, this.interactive = !0, this.scrollView = this.addChild(new te), this.scrollView.paddingBottom = 120, this.title = this.scrollView.addChild(new he(this.game.i18n.t("MenuGameRules").toUpperCase())), this.title.withGameName(), this.title.anchor.set(.5, 0), this.content = this.scrollView.addChild(new H.W2), this.addSections()
                    }
                    addSections() {
                        this.content.addChild(new $s), this.content.addChild(new eo), this.content.addChild(new io), this.addAutoPlaySection(), this.content.addChild(new Js), this.content.addChild(new qs), this.content.addChild(new so)
                    }
                    addAutoPlaySection() {
                        this.game.config.get("autoPlay.available", !0) && (this.content.addChild(new Xs), this.content.addChild(new Ks))
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
                class no extends eo {
                    addItems() {
                        super.addItems();
                        var t = this.getChildByName("itemQuickSpin");
                        this.removeChild(t), this.addChildAt(new to(this.game.i18n.t("GameRulesInterfaceClear"), this.game.loader.getAsset("gameRulesButtonClear"), "itemClear"), this.getChildIndex(this.getChildByName("itemBetLevel"))), this.addChildAt(new to(this.game.i18n.t("GameRulesInterfaceQuickDraw"), this.game.loader.getAsset("iconRandom"), "itemQuickDraw"), this.getChildIndex(this.getChildByName("itemClear")))
                    }
                }
                class ao extends oo {
                    addSections() {
                        this.content.addChild(new $s), this.content.addChild(new no), this.content.addChild(new io), this.addAutoPlaySection(), this.content.addChild(new Js), this.content.addChild(new qs), this.content.addChild(new so)
                    }
                }
                class ho extends(jt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "Paytable"), (0, n.Z)(this, "scrollView", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "content", void 0), this.visible = !1, this.interactive = !0, this.scrollView = this.addChild(new te), this.scrollView.paddingBottom = 120, this.title = this.scrollView.addChild(new he(this.game.i18n.t("MenuPaytable"))), this.title.withGameName(), this.title.anchor.set(.5, 0), this.content = this.scrollView.addChild(new H.W2)
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

                function ro(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function lo(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? ro(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ro(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class co extends(jt(A.xv)) {
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
                        this.style = lo(lo({}, this.style), e)
                    }
                    resize() {
                        this.game.device.desktop ? this.scale.set(1.2) : this.game.device.landscape ? (this.scale.set(2.2), this.setTagStyle("default", {
                            wordWrapWidth: 670
                        })) : (this.scale.set(2.2), this.setTagStyle("default", {
                            wordWrapWidth: 400
                        }))
                    }
                }
                class uo extends(jt(A.xv)) {
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
                class go extends(jt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "content", void 0), this.title = this.addChild(new uo(this.game.i18n.t("PAYTABLE_SECTION_BONUS_TITLE"))), this.title.position.set(0, 0), this.content = this.addChild(new co(this.game.i18n.t("PAYTABLE_SECTION_BONUS_CONTENT"))), this.content.position.set(0, this.title.height + 10)
                    }
                }
                class po extends(jt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "content", void 0), this.title = this.addChild(new uo(this.game.i18n.t("PAYTABLE_SECTION_GENERAL_TITLE"))), this.title.position.set(0, 0), this.content = this.addChild(new co(this.game.i18n.t("PAYTABLE_SECTION_GENERAL_CONTENT"))), this.content.position.set(0, this.title.height + 10)
                    }
                }
                class mo extends ho {
                    constructor() {
                        super(), (0, n.Z)(this, "paytableSectionGeneral", void 0), (0, n.Z)(this, "paytableSectionBonus", void 0), this.paytableSectionGeneral = this.content.addChild(new po), this.paytableSectionBonus = this.content.addChild(new go)
                    }
                }
                class Ao extends zt {
                    constructor() {
                        super(...arguments), (0, n.Z)(this, "menu", this.game.get("Menu")), (0, n.Z)(this, "controls", this.game.get("Controls")), (0, n.Z)(this, "fastStop", this.game.get("FastStopLayout")), (0, n.Z)(this, "mainTable", this.game.get("MainTable")), (0, n.Z)(this, "numberTable", this.game.get("NumberTable")), (0, n.Z)(this, "addNumberTable", this.game.get("AdditionalNumberTable")), (0, n.Z)(this, "selectedCellsBoard", this.game.get("SelectedCellsBoard")), (0, n.Z)(this, "_timeout", void 0)
                    }
                    init() {}
                    enter() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            try {
                                t.mainTable.disable(), t.menu.disable(), t.controls.setBalance(t.game.wallet.balance - t.game.buyBallPrice), t.controls.fastspin(), yield t.game.sendBuyBall(), yield t.updateNumbers(), t.goTo("reward")
                            } catch (e) {
                                t.game.catchError(e), t.game.autoPlay.disable(), t.goTo("ready")
                            }
                        }))()
                    }
                    exit() {}
                    updateNumbers() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            var e = t.game.winNumbers.includes(t.game.buyBall) && t.game.isWin;
                            t.mainTable.setNumber(t.game.buyBall, e, !0), t.addNumberTable.setNumber(t.game.buyBall), t.game.sound.randomPick(), e && (t.selectedCellsBoard.tryHighlight(), t.game.winNumbers.forEach((e => {
                                t.mainTable.setNumber(e, !0)
                            })))
                        }))()
                    }
                }
                class vo extends(jt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "AdditionalNumberTable"), (0, n.Z)(this, "_background", void 0), (0, n.Z)(this, "_title", void 0), (0, n.Z)(this, "_titleExtra", void 0), (0, n.Z)(this, "_numbers", []), (0, n.Z)(this, "_visible", !1), (0, n.Z)(this, "isExpand", !1), this.visible = !1, this._background = this.addChild(new $.j(this.game.loader.getAsset("tableExtra"))), this._title = this.addChild(new A.xv(this.game.i18n.t("TableExtraTitle").toUpperCase(), {
                            align: "center",
                            fontSize: 26,
                            fontFamily: "Avenir-Bold",
                            fill: [16767403, 16772291],
                            fillGradientType: 0,
                            stroke: 5447936,
                            wordWrap: !0,
                            wordWrapWidth: 300,
                            strokeThickness: 1,
                            dropShadow: !0,
                            dropShadowColor: 2103105,
                            dropShadowAngle: 1,
                            dropShadowDistance: 2,
                            dropShadowBlur: 5
                        })), this._title.anchor.set(.5), this._title.position.set(this._background.width / 2, this._background.height + 40), this._titleExtra = this.addChild(new A.xv("", {
                            align: "center",
                            fontSize: 26,
                            fontFamily: "Avenir-Bold",
                            fill: [16767403, 16772291],
                            fillGradientType: 0,
                            stroke: 5447936,
                            wordWrap: !0,
                            wordWrapWidth: 300,
                            strokeThickness: 1,
                            dropShadow: !0,
                            dropShadowColor: 2103105,
                            dropShadowAngle: 1,
                            dropShadowDistance: 2,
                            dropShadowBlur: 5
                        })), this._titleExtra.anchor.set(.5), this._titleExtra.position.set(this._background.width / 2, this._background.height / 2);
                        for (var t = Math.floor(1.8), [e, i, s] = [0, 5, 0], o = 0; o < 9; o++) {
                            var a = this.addChild(new Vi),
                                h = this.game.helpers.random(0, 1);
                            e > 0 && e % i == 0 && (t--, i--, e = 0, s += 1), a.position.set(60 * (i - e + s) + 30 * (i - 5), 50 * t + 5), a.rotation = h, this._numbers.push(a), e++
                        }
                        this.game.device.desktop && this.show()
                    }
                    restore(t) {
                        t.forEach((t => this.setNumber(t)))
                    }
                    setNumber(t) {
                        var e = this._numbers.find((t => !t.visible));
                        e && (this._titleExtra.visible = !1, e.visible = !0, e.setNumber(t, "extra"))
                    }
                    setExpand(t) {
                        this.isExpand = t, this.show(this._visible), this.resize()
                    }
                    toCollect() {
                        this._numbers.some((t => t.visible)) ? (this._titleExtra.visible = !1, this._titleExtra.text = "") : (this._titleExtra.visible = !0, this._titleExtra.text = this.game.i18n.t("TableExtraTitleExtraBuy").toUpperCase())
                    }
                    toNormal() {
                        this._titleExtra.visible = !0, this._titleExtra.text = this.game.i18n.t("TableExtraTitleExtra").toUpperCase(), this.game.device.desktop || this.show(!1)
                    }
                    show() {
                        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        this._visible = t, super.show(t && (this.isExpand || this.game.device.desktop))
                    }
                    clear() {
                        this._numbers.forEach((t => t.visible = !1))
                    }
                    resize() {
                        this.game.device.desktop ? (this.scale.set(1), this.position.set(30, 650)) : this.game.device.landscape ? (this.scale.set(1), this.game.leftHand.enabled ? this.position.set(670, 640) : this.position.set(450, 640)) : (this.scale.set(1.1), this.position.set(90, 480))
                    }
                }
                class bo extends(jt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "HitCoinsTableBackground"), (0, n.Z)(this, "_background", void 0), (0, n.Z)(this, "_fullBackground", void 0), (0, n.Z)(this, "_chevrone", void 0), (0, n.Z)(this, "isExpand", !1), this._background = this.addChild(new $.j), this._fullBackground = this.addChild(new $.j), this._fullBackground.visible = !1, this._chevrone = this.addChild(new $.j(this.game.loader.getAsset("iconChevrone"))), this._chevrone.visible = !1, this._chevrone.scale.y = -1, this._chevrone.anchor.set(.5)
                    }
                    setExpand(t) {
                        this.isExpand = t, this._fullBackground.visible = t, this.resize()
                    }
                    resize() {
                        this.game.device.desktop ? (this._background.texture = this.game.loader.getAsset("hit_coins_table_background"), this._chevrone.visible = !1, this._chevrone.scale.y = 1, this.visible = !0, this.interactive = !1, this.buttonMode = !1, this.position.set(1590, 220)) : this.game.device.landscape ? (this._background.texture = this.game.loader.getAsset("hit_coins_table_background_l"), this._fullBackground.texture = this.game.loader.getAsset("hit_coins_table_full_background_mobile_l"), this._chevrone.visible = !0, this._chevrone.rotation = 1.55, this.visible = !0, this.interactive = !0, this.buttonMode = !0, this.game.leftHand.enabled ? (this.position.set(1475, 370), this._chevrone.scale.y = this.isExpand ? -1 : 1, this._chevrone.position.set(this.isExpand ? 120 : 110, 112), this._fullBackground.scale.x = -1, this._fullBackground.pivot.set(478, 144)) : (this.position.set(-25, 370), this._chevrone.scale.y = this.isExpand ? 1 : -1, this._chevrone.position.set(this.isExpand ? 360 : 365, 108), this._fullBackground.scale.x = 1, this._fullBackground.pivot.set(0, 144))) : (this._background.texture = this.game.loader.getAsset("hit_coins_table_background_p"), this._fullBackground.texture = this.game.loader.getAsset("hit_coins_table_full_background_mobile_p"), this._fullBackground.pivot.set(45, 680), this._fullBackground.scale.x = 1, this._chevrone.visible = !0, this._chevrone.rotation = 0, this._chevrone.scale.y = this.isExpand ? 1 : -1, this._chevrone.position.set(890, this.isExpand ? 65 : 55), this.visible = !0, this.interactive = !0, this.buttonMode = !0, this.position.set(50, 1060))
                    }
                }
                class wo extends(jt(A.xv)) {
                    constructor() {
                        super("", {
                            fontSize: 20,
                            fontFamily: "Avenir-Bold",
                            fill: [16767403, 16772291],
                            fillGradientType: 0,
                            wordWrap: !0,
                            wordWrapWidth: 300,
                            align: "center",
                            stroke: 5447936,
                            strokeThickness: 1,
                            dropShadow: !0,
                            dropShadowColor: 2103105,
                            dropShadowAngle: 1,
                            dropShadowDistance: 2,
                            dropShadowBlur: 5
                        }), (0, n.Z)(this, "name", "HitCoinsTableTitle"), this.text = this.game.i18n.t("TableHitCoinsTitle").toUpperCase(), this.anchor.set(.5)
                    }
                    resize() {
                        this.game.device.desktop ? (this.scale.set(1), this.position.set(1734, 260), this.style.wordWrapWidth = 300) : this.game.device.landscape ? (this.scale.set(1), this.game.leftHand.enabled ? this.position.set(1720, 480) : this.position.set(210, 480), this.style.wordWrapWidth = 240) : (this.position.set(800, 1120), this.scale.set(1.2), this.style.wordWrapWidth = 200)
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
                            et.vB.shared.update(), this.renderer.render(this.rootNode)
                        })), (0, n.Z)(this, "destroy", (() => {
                            S.removeEventListener("tick", this.tick), et.vB.shared.destroy(), it.destroyTextureCache(), this.renderer.destroy(), this.loader.destroy()
                        })), Wt = this, et.vB.shared.autoStart = !1, et.vB.shared.stop(), this.config = new ht(It), this.logger = new Bt, this.rootNode = this.createRootNode(), this.renderer = new St, this.i18n = new bt(e), this.helpers = new vt(this.config), this.keyboard = new ft, this.device = new mt(this.renderer), this.viewport = new Rt, this.leftHand = new ut, this.fullscreen = this.device.ios || this.device.iPadPro ? new ct : new dt(this.device), this.visibility = new Vt, this.preferences = new Gt, this.sound = new R(this.device, this.visibility, this.preferences), this.state = new Ot, this.store = new ht, this.action = new pt, this.loader = new xt(this.device), this.error = new At, this.interaction = new wt(this.device), this.externalApi = new Ft(this), this.popupManager = new Lt(this.rootNode), this.create(), this.initAnalytics()
                    }
                    initAnalytics() {
                        return (0, o.Z)((function*() {
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
                        return new Mt
                    }
                    create() {
                        var t = this.rootNode.addChild(new u.TC);
                        t.lineStyle(0), t.beginFill(0), t.drawRect(1, 1, this.settings.size[0] - 2, this.settings.size[1] - 2), t.endFill();
                        var e = () => {
                            this.device.ios && this.fullscreen.toggle(), this.renderer.resize(this.device.width, this.device.height), this.device.desktop || this.device.landscape ? (this.viewport.resize(this.settings.size[0], this.settings.size[1]), this.rootNode.scale.set(this.viewport.aspectRatio), this.rootNode.pivot.set(this.viewport.width / 2, this.viewport.height / 2), this.rootNode.position.set(this.device.width / 2, this.device.height / 2), this.rootNode.mask = t) : (this.viewport.resize(this.settings.size[1], this.settings.size[0]), this.rootNode.scale.set(this.viewport.aspectRatio), this.rootNode.pivot.set(this.viewport.width / 2, 0), this.rootNode.position.set(this.device.width / 2, 0), this.rootNode.mask = null), this.viewport.emit("resize"), this.renderer.render(this.rootNode)
                        };
                        S.addEventListener("tick", this.tick), window.addEventListener("unload", this.destroy), window.addEventListener("resize", e), window.addEventListener("load", e), window.addEventListener("orientationchange", (() => setTimeout(e, 350))), document.addEventListener("keydown", (t => {
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
                            var t = (0, o.Z)((function*(t) {
                                var i, s;
                                if ([Et.SPENDING_BUDGET_EXCEEDED, Et.INSUFFICIENT_BALANCE, Et.MAX_BET_LIMIT_EXCEEDED].includes(null == t ? void 0 : t.message)) {
                                    var o, [n] = yield Promise.all([null === (o = e.popupManager) || void 0 === o ? void 0 : o.show({
                                        [Et.SPENDING_BUDGET_EXCEEDED]: "PopupSpendingBudget",
                                        [Et.MAX_BET_LIMIT_EXCEEDED]: "PopupMaxLimit",
                                        [Et.INSUFFICIENT_BALANCE]: "PopupZeroBalance"
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
                        }()), this.server = this.enhanceServer(new Tt), this.server.on("response", this.onServerResponse, this)
                    }
                    init(t, e) {
                        var i = this;
                        return (0, o.Z)((function*() {
                            var s;
                            i.preferences.setPrefix(null !== (s = null == e ? void 0 : e.name) && void 0 !== s ? s : ""), i.initPopups(), yield i.connect(t), i.initModules(e), yield i.initSound(), yield i.showIntroScreen(), i.initViews(), i.mountViews(), i.initStates(), i.start()
                        }))()
                    }
                    initPopups() {
                        this.popupManager.add([new di, new ri, new li, new ni, new mi, new hi, new ui, new gi, new ci, new ai, new pi])
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
                        return (0, o.Z)((function*() {
                            var i = t.length > 0 && void 0 !== t[0] ? t[0] : {};
                            if ("en" !== e.i18n.language) {
                                var s = "cn" === e.i18n.language ? "zh_CN" : e.i18n.language;
                                try {
                                    var [o, n] = yield Promise.all([fetch("translations/strings_".concat(s, ".json")).then((t => t.json())), fetch("translations/shared/strings_".concat(s, ".json")).then((t => t.json()))]);
                                    e.i18n.setTranslations(vi(vi(vi({}, i), n), o))
                                } catch (t) {
                                    e.i18n.setTranslations(i)
                                }
                            } else e.i18n.setTranslations(i)
                        }))()
                    }
                    initRequest() {
                        var t = this;
                        return (0, o.Z)((function*() {
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
                        return (0, o.Z)((function*() {
                            e.launcher = e.rootNode.addChild(new Be);
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
                        this.config.merge(t, vi({
                            gameId: null !== (e = null == a ? void 0 : a.gameId) && void 0 !== e ? e : "",
                            gameName: null !== (i = null == a ? void 0 : a.gameName) && void 0 !== i ? i : "",
                            homeURL: null !== (s = null == a ? void 0 : a.homeURL) && void 0 !== s ? s : "javascript:history.back()"
                        }, null == a ? void 0 : a.gameConfig)), this.preferences.setPrefix(null !== (o = null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : null == a ? void 0 : a.gameId) && void 0 !== o ? o : "")
                    }
                    showIntroScreen() {
                        return (0, o.Z)((function*() {}))()
                    }
                    initSound() {
                        var t = this;
                        return (0, o.Z)((function*() {
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
                        return (0, o.Z)((function*() {}))()
                    }
                    onServerResponse(t) {}
                    enhanceServer(t) {
                        return this.store.set("server:action", ""), this.store.set("server:nextAction", ""), this.store.set("server:availableActions", []), t.on("response", (t => {
                            this.store.set("server:action", t.action), this.store.set("server:response.current", t), this.store.set("server:response.".concat(t.action), t), t.nextAction && this.store.set("server:nextAction", t.nextAction), t.availableActions && this.store.set("server:availableActions", t.availableActions)
                        })), t.transformRequest([t => vi(vi({}, t), {}, {
                            action: "spin" === t.action ? this.store.get("server:nextAction") : t.action
                        })]), t
                    }
                } {
                    constructor() {
                        super(...arguments), (0, n.Z)(this, "wallet", void 0), (0, n.Z)(this, "bigWin", void 0), (0, n.Z)(this, "autoPlay", void 0), (0, n.Z)(this, "betLevel", void 0), (0, n.Z)(this, "freeRound", void 0), (0, n.Z)(this, "quickSpin", void 0), (0, n.Z)(this, "netPosition", new _e), (0, n.Z)(this, "currentTime", void 0), (0, n.Z)(this, "elapsedTime", void 0), (0, n.Z)(this, "copyright", void 0), (0, n.Z)(this, "menu", void 0), (0, n.Z)(this, "betSettings", void 0), (0, n.Z)(this, "autoPlaySettings", void 0), (0, n.Z)(this, "controls", void 0), (0, n.Z)(this, "riskFeature", void 0), (0, n.Z)(this, "nextRiskFeature", void 0), (0, n.Z)(this, "gameSettings", void 0), (0, n.Z)(this, "checkboxLeftHand", void 0), (0, n.Z)(this, "checkboxGameSounds", void 0), (0, n.Z)(this, "checkboxBackgroundSounds", void 0), (0, n.Z)(this, "checkboxQuickSpin", void 0), (0, n.Z)(this, "checkboxFullscreen", void 0), (0, n.Z)(this, "checkboxRiskFeature", void 0), (0, n.Z)(this, "checkboxIntroScreen", void 0)
                    }
                    initModules(t) {
                        var e, i, s;
                        super.initModules(t);
                        var o = this.server.response;
                        this.wallet = new Ie(this.server), this.betLevel = new Nt(null == o ? void 0 : o.bet, null == o ? void 0 : o.bets, null !== (e = null == o ? void 0 : o.betCoins) && void 0 !== e ? e : 1), this.autoPlay = new Ze({
                            counts: this.config.get("autoPlay.counts", [10, 25, 50, 100, 150, 300, -1]).map((t => {
                                var e = Number(t);
                                return -1 === e ? 1 / 0 : e
                            })).filter((t => t > 0))
                        }), this.freeRound = new Re, this.quickSpin = new Fe(this.config), this.bigWin = new Oe(this.config.get("bigWin.bigMultiplier"), this.config.get("bigWin.giantMultiplier"), this.betLevel), this.config.set("autoPlay.available", this.autoPlay.available), this.config.set("quickSpin.available", this.quickSpin.available), this.netPosition.setEnabled(null !== (i = null == o || null === (s = o.gameConfig) || void 0 === s ? void 0 : s.netPosition) && void 0 !== i && i)
                    }
                    initViews() {
                        super.initViews(), this.currentTime = new De, this.elapsedTime = new Le, this.copyright = new Ne
                    }
                    mountViews() {
                        super.mountViews(), this.netPosition.enabled && (this.rootNode.addChild(this.netPosition.toView(new We)), this.rootNode.addChild(this.elapsedTime)), this.rootNode.addChild(this.currentTime), this.rootNode.addChild(this.copyright)
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
                        return (0, o.Z)((function*() {
                            [Et.SPENDING_BUDGET_EXCEEDED, Et.INSUFFICIENT_BALANCE, Et.MAX_BET_LIMIT_EXCEEDED].includes(t) && (e.autoPlay.disable(), e.action.emit("update:balance", e.wallet.balance))
                        }))()
                    }
                    createQuickSpinCheckbox() {
                        return this.checkboxQuickSpin = new Ye, this.checkboxQuickSpin.onClick.add((() => {
                            this.quickSpin.toggle()
                        })), this.checkboxQuickSpin
                    }
                    createFullscreenCheckbox() {
                        return this.checkboxFullscreen = new Ge, this.checkboxFullscreen.onClick.add((() => {
                            this.fullscreen.toggle()
                        })), this.fullscreen.on("change", (t => {
                            var e;
                            return null === (e = this.checkboxFullscreen) || void 0 === e ? void 0 : e.setChecked(t)
                        })), this.checkboxFullscreen
                    }
                    createLeftHandCheckbox() {
                        return this.checkboxLeftHand = new ze, this.checkboxLeftHand.onClick.add((() => {
                            this.leftHand.toggle()
                        })), this.checkboxLeftHand
                    }
                    createGameSoundsCheckbox() {
                        return this.checkboxGameSounds = new Ve, this.checkboxGameSounds.onClick.add((() => {
                            this.sound.toggle("effects")
                        })), this.checkboxGameSounds
                    }
                    createBackgroundSoundsCheckbox() {
                        return this.checkboxBackgroundSounds = new Ue, this.checkboxBackgroundSounds.onClick.add((() => {
                            this.sound.toggle("background")
                        })), this.checkboxBackgroundSounds
                    }
                    createRiskFeatureCheckbox() {
                        if (this.config.get("rnb", !0)) return this.checkboxRiskFeature = new He, this.checkboxRiskFeature.setChecked(this.preferences.get("showRiskFeature", !0)), this.checkboxRiskFeature.onClick.add((t => {
                            var e, i;
                            this.preferences.set("showRiskFeature", t), null !== (e = this.riskFeature) && void 0 !== e && e.visible && this.riskFeature.hide(), null !== (i = this.nextRiskFeature) && void 0 !== i && i.visible && this.nextRiskFeature.hide()
                        })), this.checkboxRiskFeature
                    }
                    createIntroScreenCheckbox() {
                        return this.checkboxIntroScreen = new je, this.checkboxIntroScreen.setChecked(this.preferences.get("showIntroScreen", !0)), this.checkboxIntroScreen.onClick.add((t => {
                            this.preferences.set("showIntroScreen", t)
                        })), this.checkboxIntroScreen
                    }
                } {
                    constructor() {
                        super({}), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "bigWinAnimation", void 0), (0, n.Z)(this, "fastStop", void 0), (0, n.Z)(this, "game", void 0), (0, n.Z)(this, "hitCoinsTable", void 0), (0, n.Z)(this, "hitCoinsTableTitle", void 0), (0, n.Z)(this, "hitCoinsTableBackground", void 0), (0, n.Z)(this, "mainTable", void 0), (0, n.Z)(this, "numberTable", void 0), (0, n.Z)(this, "addNumberTable", void 0), (0, n.Z)(this, "paytable", void 0), (0, n.Z)(this, "rules", void 0), (0, n.Z)(this, "selectedCellsBoard", void 0), (0, n.Z)(this, "slider", void 0), (0, n.Z)(this, "statusBoard", void 0), (0, n.Z)(this, "isWin", !1), (0, n.Z)(this, "isExpand", !1), (0, n.Z)(this, "feature", ""), (0, n.Z)(this, "buyBall", -1), (0, n.Z)(this, "buyBallPrice", 0), (0, n.Z)(this, "numbers", []), (0, n.Z)(this, "selectedNumbers", []), (0, n.Z)(this, "winNumbers", []), (0, n.Z)(this, "extraNumbers", []), (0, n.Z)(this, "paytable", []), (0, n.Z)(this, "fastspin", !1), (0, n.Z)(this, "speed", wi.normalSpeed), (0, n.Z)(this, "readyState", void 0), this.init(bi, wi)
                    }
                    loadTranslations() {
                        var t = () => super.loadTranslations,
                            e = this;
                        return (0, o.Z)((function*() {
                            return t().call(e, Ii)
                        }))()
                    }
                    initRequest() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            try {
                                yield t.sendInit()
                            } catch (e) {
                                throw t.launcher.reset(), e
                            }
                        }))()
                    }
                    connect(t) {
                        var e = this;
                        return (0, o.Z)((function*() {
                            e.launcher = e.rootNode.addChild(new Be);
                            try {
                                yield Promise.all([e.loadTranslations(), e.loadAssets(t), e.initRequest()])
                            } catch (t) {
                                throw e.catchError(t), t
                            } finally {
                                e.rootNode.removeChild(e.launcher)
                            }
                        }))()
                    }
                    initModules(t) {
                        super.initModules(t), this.sound = new yi(this.device, this.visibility, this.preferences)
                    }
                    initViews() {
                        super.initViews(), this.background = this.rootNode.addChild(new Xi), this.slider = this.rootNode.addChild(new Qi), this.mainTable = this.slider.addChild(new Gi), this.hitCoinsTableBackground = this.rootNode.addChild(new bo), this.hitCoinsTableTitle = this.rootNode.addChild(new wo), this.hitCoinsTable = this.rootNode.addChild(new Wi(this.paytable)), this.numberTable = this.rootNode.addChild(new ji), this.addNumberTable = this.rootNode.addChild(new vo), this.statusBoard = this.rootNode.addChild(new Ki), this.selectedCellsBoard = this.rootNode.addChild(new Hi), this.rootNode.addChild(this.background.logo), this.gameSettings = new xe, this.config.get("quickSpin.available", !0) && this.gameSettings.addItem(this.createQuickSpinCheckbox()), this.gameSettings.addItem(this.createFullscreenCheckbox()), this.gameSettings.addItem(this.createLeftHandCheckbox()), this.gameSettings.addItem(this.createGameSoundsCheckbox()), this.gameSettings.addItem(this.createBackgroundSoundsCheckbox()), this.paytable = new mo, this.rules = new ao, this.menu = this.rootNode.addChild(new Ee), this.menu.addItem(this.loader.getAsset("iconPaytable"), this.paytable), this.menu.addItem(this.loader.getAsset("iconSettings"), this.gameSettings), this.menu.addItem(this.loader.getAsset("iconRules"), this.rules), this.betSettings = this.rootNode.addChild(new is), this.betSettings.setBets(this.betLevel.bets, this.betLevel.betCoins), this.betSettings.setBet(this.betLevel.bet), this.autoPlaySettings = this.rootNode.addChild(new ce), this.autoPlaySettings.setAutoPlayCounts(this.autoPlay.counts), this.autoPlaySettings.stopSection.addItem(new ke), this.autoPlaySettings.stopSection.addItem(new Ae), this.autoPlaySettings.stopSection.addItem(new ve), this.fastStop = this.rootNode.addChild(new Ce), this.controls = this.rootNode.addChild(this.device.desktop ? new Ns : new Ys), this.bigWinAnimation = this.rootNode.addChild(new ss), this.betLevel.on("change", (() => {
                            this.reset(), this.controls.setWin(0), this.controls.setBet(this.betLevel.toCoins()), this.hitCoinsTable.update(this.selectedNumbers.length, this.betLevel.bet), this.selectedCellsBoard.enable()
                        })), this.mainTable.on("select", (t => {
                            this.canAddNumber(t) && (this.addNumber(t), this.mainTable.select(t), this.sound.playerPick(), this.hitCoinsTable.update(this.selectedNumbers.length, this.betLevel.bet), this.hitCoinsTable.removeActive(), this.controls.setWin(0))
                        }))
                    }
                    initStates() {
                        super.initStates(), this.state.add("setup", new Ei(this), ["ready"]), this.readyState = this.state.add("ready", new xi(this), ["spin", "buyball"]), this.state.add("spin", new Zi(this), ["reward", "ready"]), this.state.add("buyball", new Ao(this), ["reward", "ready"]), this.state.add("reward", new Si(this), ["finish"]), this.state.add("finish", new ki(this), ["ready"])
                    }
                    start() {
                        var t = () => super.start,
                            e = this;
                        return (0, o.Z)((function*() {
                            t().call(e), e.sound.startGame(), e.state.goTo("setup"), e.controls.setWin(e.wallet.coins), e.controls.setBet(e.betLevel.toCoins()), e.controls.setBalance(e.wallet.balance), e.controls.setNumbers(e.selectedNumbers.length), e.restore(), e.state.goTo("ready")
                        }))()
                    }
                    restore() {
                        if (!(this.wallet.coins <= 0)) {
                            var t = this.mainTable.restore(this.numbers, this.winNumbers, this.extraNumbers, this.selectedNumbers),
                                e = this.selectedNumbers.length;
                            this.numberTable.restore(this.numbers.slice(0, wi.maxNormalBalls), t), this.addNumberTable.restore(this.extraNumbers), this.controls.setNumbers(e), this.selectedCellsBoard.select(e), this.winNumbers.forEach((() => {
                                this.selectedCellsBoard.tryHighlight()
                            })), this.hitCoinsTable.update(e, this.betLevel.bet), this.hitCoinsTable.match(this.winNumbers.length)
                        }
                    }
                    checkBalance() {
                        var t = arguments,
                            e = this;
                        return (0, o.Z)((function*() {
                            var i = t.length > 0 && void 0 !== t[0] ? t[0] : e.betLevel.toCoins();
                            return !(e.wallet.balance < i && !e.freeRound.enabled && (yield e.server.request({
                                action: "balance"
                            }), e.controls.setBalance(e.wallet.balance), e.wallet.balance < i)) || (yield e.popupManager.show("PopupZeroBalance"), e.autoPlay.disable(), !1)
                        }))()
                    }
                    sendInit() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            var e, i = yield t.server.request({
                                action: "init"
                            });
                            t.feature = i.feature, t.paytable = i.paytable, t.numbers = t.mapNumbers(i.numbers), t.winNumbers = t.mapNumbers(i.winNumbers), t.selectedNumbers = t.mapNumbers(i.nums), t.extraNumbers = t.numbers ? t.numbers.slice(20, t.numbers.length) : [], t.isWin = t.winNumbers.length > 0 && i.win > 0, t.buyBallPrice = null !== (e = i.buy) && void 0 !== e ? e : 0
                        }))()
                    }
                    sendSpin() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            var e, i = yield t.server.request({
                                action: "spin",
                                bet: t.betLevel.bet,
                                nums: t.selectedNumbers.map((t => t + 1))
                            });
                            t.buyBall = -1, t.buyBallPrice = null !== (e = i.buy) && void 0 !== e ? e : 0, t.extraNumbers.length = 0, t.numbers = t.mapNumbers(i.numbers), t.winNumbers = t.mapNumbers(i.winNumbers), t.selectedNumbers = t.mapNumbers(i.nums), t.feature = i.feature, t.isWin = t.winNumbers.length > 0 && t.wallet.coins > 0
                        }))()
                    }
                    sendCollect() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            yield t.server.request({
                                action: "collect"
                            })
                        }))()
                    }
                    sendBuyBall() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            var e = yield t.server.request({
                                action: "buy"
                            }), i = t.mapNumbers(e.winNumbers).filter((e => !t.winNumbers.includes(e)));
                            t.winNumbers = t.mapNumbers(e.winNumbers), t.buyBall = e.buyNum - 1, t.buyBallPrice = e.buy, t.feature = e.feature, t.extraNumbers.push(t.buyBall), t.isWin = i.length > 0
                        }))()
                    }
                    toggleExpand() {
                        this.isExpand = !this.isExpand, this.hitCoinsTableBackground.setExpand(this.isExpand), this.hitCoinsTable.setExpand(this.isExpand), this.numberTable.setExpand(this.isExpand), this.addNumberTable.setExpand(this.isExpand), this.selectedCellsBoard.setExpand(this.isExpand)
                    }
                    addNumber(t) {
                        if (Array.isArray(t)) this.selectedNumbers.length = 0, this.selectedNumbers.push(...t);
                        else {
                            var e = this.selectedNumbers.indexOf(t);
                            e > -1 ? this.selectedNumbers.splice(e, 1) : this.selectedNumbers.push(t)
                        }
                        var i = this.selectedNumbers.length;
                        this.controls.setWin(0), this.controls.setNumbers(i), this.selectedCellsBoard.select(i), this.hitCoinsTable.update(i, this.betLevel.bet), this.hitCoinsTable.removeActive(), this.mainTable.reset(), this.numberTable.clear()
                    }
                    fastSpin() {
                        !this.fastspin && this.config.get("quickSpin.available", !0) && (this.fastspin = !0, this.speed = wi.fastSpeed, this.controls.fastspin(), this.fastStop.disable(), this.sound.spinFast(), this.autoPlay.enabled || this.quickSpin.update())
                    }
                    clear() {
                        this.selectedNumbers.length = 0, this.controls.setNumbers(0), this.numberTable.clear(), this.addNumberTable.clear(), this.selectedCellsBoard.clear(), this.hitCoinsTable.clear(), this.mainTable.clear(), this.sound.clear()
                    }
                    reset() {
                        this.speed = this.quickSpin.enabled ? wi.quickSpeed : wi.normalSpeed, this.controls.setWin(0), this.controls.setBalance(this.wallet.balance), this.fastStop.disable(), this.mainTable.reset(), this.addNumberTable.clear(), this.numberTable.clear(), this.hitCoinsTable.clear(), this.hitCoinsTable.update(this.selectedNumbers.length, this.betLevel.bet), this.selectedCellsBoard.reset(), this.selectedCellsBoard.disable()
                    }
                    canAddNumber(t) {
                        return this.selectedNumbers.length < 10 || this.selectedNumbers.includes(t)
                    }
                    mapNumbers(t) {
                        return (t || []).map((t => t - 1))
                    }
                    get canCollect() {
                        return this.store.get("server:availableActions", []).includes("collect")
                    }
                    get canBuyExtraBall() {
                        return this.store.get("server:availableActions", []).includes("buy")
                    }
                    onProcessError(t) {
                        var e = () => super.onProcessError,
                            i = this;
                        return (0, o.Z)((function*() {
                            var s, o;
                            [Et.SPENDING_BUDGET_EXCEEDED, Et.MAX_BET_LIMIT_EXCEEDED, Et.INSUFFICIENT_BALANCE].includes(t) ? (i.autoPlay.disable(), i.fastStop.disable(), i.mainTable.enable(), i.controls.enable(), i.controls.setBalance(null !== (s = null === (o = i.server.response) || void 0 === o ? void 0 : o.balance) && void 0 !== s ? s : 0), i.menu.enable(), i.selectedCellsBoard.enable()) : e().call(i, t)
                        }))()
                    }
                }
            },
            6599: () => {},
            1368: () => {},
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
            for (c = 0; c < t.length; c++) {
                for (var [i, s, o] = t[c], h = !0, r = 0; r < i.length; r++)(!1 & o || a >= o) && Object.keys(n.O).every((t => n.O[t](i[r]))) ? i.splice(r--, 1) : (h = !1, o < a && (a = o));
                if (h) {
                    t.splice(c--, 1);
                    var l = s();
                    void 0 !== l && (e = l)
                }
            }
            return e
        }
        o = o || 0;
        for (var c = t.length; c > 0 && t[c - 1][2] > o; c--) t[c] = t[c - 1];
        t[c] = [i, s, o]
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
    }), t), n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), e = {}, i = "the_candy_keno:", n.l = (t, s, o, a) => {
        if (e[t]) e[t].push(s);
        else {
            var h, r;
            if (void 0 !== o)
                for (var l = document.getElementsByTagName("script"), c = 0; c < l.length; c++) {
                    var d = l[c];
                    if (d.getAttribute("src") == t || d.getAttribute("data-webpack") == i + o) {
                        h = d;
                        break
                    }
                }
            h || (r = !0, (h = document.createElement("script")).charset = "utf-8", h.timeout = 120, n.nc && h.setAttribute("nonce", n.nc), h.setAttribute("data-webpack", i + o), h.src = t), e[t] = [s];
            var u = (i, s) => {
                    h.onerror = h.onload = null, clearTimeout(g);
                    var o = e[t];
                    if (delete e[t], h.parentNode && h.parentNode.removeChild(h), o && o.forEach((t => t(s))), i) return i(s)
                },
                g = setTimeout(u.bind(null, void 0, {
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
                    if (r) var c = r(n)
                }
                for (e && e(i); l < a.length; l++) o = a[l], n.o(t, o) && t[o] && t[o][0](), t[o] = 0;
                return n.O(c)
            },
            i = self.webpackChunkthe_candy_keno = self.webpackChunkthe_candy_keno || [];
        i.forEach(e.bind(null, 0)), i.push = e.bind(null, i.push.bind(i))
    })();
    var a = n.O(void 0, [216], (() => n(159)));
    a = n.O(a)
})();