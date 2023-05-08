/*! @mascot-banner branch: master - commit: eec7ab288d9808d47857735ff89bf963ec3bdcf9 */
(() => {
    var t, e, i, s = {
            1839: (t, e, i) => {
                "use strict";
                var s = {};
                i.r(s), i.d(s, {
                    ALPHA_MODES: () => Q.ALPHA_MODES,
                    AbstractBatchRenderer: () => d.eo,
                    AbstractMultiResource: () => d.M4,
                    AbstractRenderer: () => d.I8,
                    AppLoaderPlugin: () => b.LP,
                    ArrayResource: () => d.$N,
                    Attribute: () => d.ah,
                    BLEND_MODES: () => Q.BLEND_MODES,
                    BUFFER_BITS: () => Q.BUFFER_BITS,
                    BUFFER_TYPE: () => Q.BUFFER_TYPE,
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
                    BitmapFont: () => v.UP,
                    BitmapFontData: () => v.d0,
                    BitmapFontLoader: () => v.vl,
                    BitmapText: () => v.Xz,
                    Bounds: () => H.YZ,
                    BrowserAdapter: () => J.ZQ,
                    Buffer: () => d.lW,
                    BufferResource: () => d.qm,
                    CLEAR_MODES: () => Q.CLEAR_MODES,
                    COLOR_MASK_BITS: () => Q.COLOR_MASK_BITS,
                    CanvasResource: () => d.Y8,
                    Circle: () => X.Circle,
                    Container: () => H.W2,
                    ContextSystem: () => d.lH,
                    CountLimiter: () => g.fh,
                    CubeResource: () => d.TA,
                    DEG_TO_RAD: () => X.DEG_TO_RAD,
                    DRAW_MODES: () => Q.DRAW_MODES,
                    DisplayObject: () => H.s$,
                    ENV: () => Q.ENV,
                    Ellipse: () => X.Ellipse,
                    ExtensionType: () => d.nw,
                    FORMATS: () => Q.FORMATS,
                    FillStyle: () => u.ft,
                    Filter: () => d.wn,
                    FilterState: () => d.jV,
                    FilterSystem: () => d.kV,
                    Framebuffer: () => d.AI,
                    FramebufferSystem: () => d.WB,
                    GC_MODES: () => Q.GC_MODES,
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
                    LINE_SCALE_MODE: () => Y.F4,
                    LineStyle: () => u.TD,
                    Loader: () => b.aN,
                    LoaderResource: () => b.kC,
                    MASK_TYPES: () => Q.MASK_TYPES,
                    MIPMAP_MODES: () => Q.MIPMAP_MODES,
                    MSAA_QUALITY: () => Q.MSAA_QUALITY,
                    MaskData: () => d.HI,
                    MaskSystem: () => d.zj,
                    Matrix: () => X.Matrix,
                    Mesh: () => K.Kj,
                    MeshBatchUvs: () => K.wQ,
                    MeshGeometry: () => K.xc,
                    MeshMaterial: () => K.rY,
                    ObjectRenderer: () => d.bO,
                    ObservablePoint: () => X.ObservablePoint,
                    PI_2: () => X.PI_2,
                    PRECISION: () => Q.PRECISION,
                    Point: () => X.Point,
                    Polygon: () => X.Polygon,
                    Prepare: () => g.B9,
                    Program: () => d.$r,
                    ProjectionSystem: () => d.NW,
                    Quad: () => d.lD,
                    QuadUv: () => d.ud,
                    RAD_TO_DEG: () => X.RAD_TO_DEG,
                    RENDERER_TYPE: () => Q.RENDERER_TYPE,
                    Rectangle: () => X.Rectangle,
                    RenderTexture: () => d.TI,
                    RenderTexturePool: () => d.uW,
                    RenderTextureSystem: () => d.J$,
                    Renderer: () => d.Th,
                    Resource: () => d._z,
                    RoundedRectangle: () => X.RoundedRectangle,
                    Runner: () => q.R,
                    SAMPLER_TYPES: () => Q.SAMPLER_TYPES,
                    SCALE_MODES: () => Q.SCALE_MODES,
                    SHAPES: () => X.SHAPES,
                    SVGResource: () => d.pX,
                    ScissorSystem: () => d.id,
                    Shader: () => d.ex,
                    ShaderSystem: () => d.p,
                    SimpleRope: () => V.IE,
                    SmoothGraphics: () => Y.K3,
                    Sprite: () => $.j,
                    SpriteMaskFilter: () => d.z9,
                    Spritesheet: () => m.c,
                    SpritesheetLoader: () => m.o,
                    State: () => d.ZM,
                    StateSystem: () => d.zI,
                    StencilSystem: () => d.Ld,
                    System: () => d.xP,
                    TARGETS: () => Q.TARGETS,
                    TEXT_GRADIENT: () => A.M_,
                    TYPES: () => Q.TYPES,
                    TemporaryDisplayObject: () => H.Ql,
                    Text: () => A.xv,
                    TextFormat: () => v.SQ,
                    TextMetrics: () => A._A,
                    TextStyle: () => A.pn,
                    Texture: () => d.xE,
                    TextureGCSystem: () => d.wr,
                    TextureLoader: () => b.dp,
                    TextureMatrix: () => d.UX,
                    TextureSystem: () => d.CT,
                    TextureUvs: () => d.aF,
                    Ticker: () => et.vB,
                    TickerPlugin: () => et.Sb,
                    TilingSprite: () => tt.o,
                    TilingSpriteRenderer: () => tt.S,
                    TimeLimiter: () => g.FI,
                    Transform: () => X.Transform,
                    UPDATE_PRIORITY: () => et.uF,
                    UniformGroup: () => d.oo,
                    VERSION: () => d.q4,
                    VideoResource: () => d.eH,
                    ViewableBuffer: () => d.Rv,
                    WRAP_MODES: () => Q.WRAP_MODES,
                    XMLFormat: () => v.Lq,
                    XMLStringFormat: () => v.lx,
                    autoDetectFormat: () => v.jv,
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
                    groupD8: () => X.groupD8,
                    interactiveTarget: () => p.Op,
                    isMobile: () => J.tq,
                    resources: () => d.Jb,
                    settings: () => J.Xd,
                    systems: () => d.eG,
                    uniformParsers: () => d.sg,
                    utils: () => it
                });
                var o = i(8826),
                    n = i(6866),
                    a = (i(1509), i(2113), i(5008), i(1820), i(5717), i(959)),
                    h = i(3943),
                    r = i(9610),
                    l = i(447),
                    d = i(1778),
                    c = i(6661),
                    u = i(1290),
                    p = i(2699),
                    g = i(9447),
                    m = i(4877),
                    A = i(7955),
                    v = i(9079),
                    b = i(9740);
                class f {
                    static add() {
                        for (var t of f.supportedFontExtensions) b.kC.setExtensionLoadType(t, b.kC.LOAD_TYPE.XHR), b.kC.setExtensionXhrType(t, b.kC.XHR_RESPONSE_TYPE.BUFFER)
                    }
                    static use(t, e) {
                        f.supportedFontExtensions.some((e => t.extension.endsWith(e))) ? f.loadFromBuffer(t).finally((() => e())) : e()
                    }
                    static loadFromBuffer(t) {
                        var e, i, s, o, n, a, h, r, l, d, c, u, p, g, m, A, v, b, y, w = null !== (e = null === (i = t.metadata) || void 0 === i || null === (s = i.font) || void 0 === s ? void 0 : s.family) && void 0 !== e ? e : t.name;
                        return document.fonts.add(new FontFace(w, t.data, null === (o = t.metadata) || void 0 === o ? void 0 : o.font)), t.styles = [{
                            fontFamily: w.replace(/['|"]/gi, ""),
                            fontStyle: null === (n = t.metadata) || void 0 === n || null === (a = n.font) || void 0 === a ? void 0 : a.style,
                            fontWeight: null === (h = t.metadata) || void 0 === h || null === (r = h.font) || void 0 === r ? void 0 : r.weight
                        }], f.waitFont({
                            "font-family": w,
                            "font-stretch": null === (l = t.metadata) || void 0 === l || null === (d = l.font) || void 0 === d ? void 0 : d.stretch,
                            "font-style": null === (c = t.metadata) || void 0 === c || null === (u = c.font) || void 0 === u ? void 0 : u.style,
                            "font-weight": null === (p = t.metadata) || void 0 === p || null === (g = p.font) || void 0 === g ? void 0 : g.weight
                        }, null === (m = t.metadata) || void 0 === m || null === (A = m.font) || void 0 === A ? void 0 : A.testString, null !== (v = null === (b = t.metadata) || void 0 === b || null === (y = b.font) || void 0 === y ? void 0 : y.timeout) && void 0 !== v ? v : t.timeout)
                    }
                }(0, n.Z)(f, "extension", c.n.Loader), (0, n.Z)(f, "supportedFontExtensions", ["ttf", "otf", "woff", "woff2"]), (0, n.Z)(f, "waitFont", function() {
                    var t = (0, o.Z)((function*(t, e, i) {
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
                var y = i(9900),
                    w = i(7239),
                    x = i.n(w),
                    S = i(4891),
                    k = (i(3306), i(8657).Z, S.Q3),
                    C = S.b_,
                    B = null === S.Q3 || void 0 === S.Q3 ? void 0 : S.Q3.ticker,
                    P = {
                        Linear: S.bJ,
                        Back: S.eJ,
                        Elastic: S.tQ,
                        Sine: S.Yv
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
                var F = new Map;
                class Z extends y.Howl {
                    constructor(t) {
                        super(t), (0, n.Z)(this, "initialVolume", 1), (0, n.Z)(this, "data", {}), this.initialVolume = t.volume
                    }
                    fade(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        return this.volume(i), k.to(this, t, {
                            volume: e > -1 ? e : this.initialVolume
                        }), this.play(), this
                    }
                }
                class O {
                    constructor(t, e, i) {
                        (0, n.Z)(this, "handlers", new Map), (0, n.Z)(this, "onChangeMute", void 0), (0, n.Z)(this, "onChangeVolume", void 0), (0, n.Z)(this, "savedVolume", 0), this.device = t, this.visibility = e, this.preferences = i, this.onChangeMute = new(x()), this.onChangeVolume = new(x()), this.visibility.on("change", (t => {
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
                        t <= 0 && !this.mutedAll ? F.forEach((t => this.setMuteBySound(t, !0))) : t > 0 && this.mutedAll && F.forEach((t => this.setMuteBySound(t, !1))), this.savedVolume = t, this.setGlobalVolume(t), this.onChangeVolume.dispatch(t)
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
                        return Array.from(F.values()).filter((e => {
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
                        return null === (e = F.get(t)) || void 0 === e ? void 0 : e.sound
                    }
                    play(t) {
                        for (var e, i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) s[o - 1] = arguments[o];
                        return null === (e = this.handlers.get(t)) || void 0 === e ? void 0 : e(...s)
                    }
                }
                class R {
                    static pre(t, e) {
                        t && R.supportedSoundExtensions.includes(t.extension) ? (t.load = function(t) {
                            this.isLoading || (this.isComplete ? t && setTimeout((() => t(this)), 1) : (t && this.onComplete.once(t), this.data = new Z({
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
                            F.set(e, T(T({}, this.metadata.audioMetadata), {}, {
                                id: e,
                                sound: this.sound,
                                muted: !1
                            })), this.onComplete.dispatch(this)
                        }, t._boundComplete = t.complete.bind(t), e()) : e()
                    }
                }(0, n.Z)(R, "extension", c.n.Loader), (0, n.Z)(R, "supportedSoundExtensions", ["mp3"]);
                i(1293);
                var M, W = i(9534),
                    _ = i(1162),
                    D = i(4022),
                    I = i(9685),
                    L = i(4556),
                    j = i(2339);
                i(3113);

                function N(t) {
                    var e = t.substr(0, 3),
                        i = Math.floor(10 * +e + .001);
                    return "3.7" === e ? M.VER37 : "3.8" === e ? M.VER38 : "4.0" === e ? M.VER40 : "4.1" === e ? M.VER41 : i < M.VER37 ? M.VER37 : M.UNKNOWN
                }(function(t) {
                    t[t.UNKNOWN = 0] = "UNKNOWN", t[t.VER37 = 37] = "VER37", t[t.VER38 = 38] = "VER38", t[t.VER40 = 40] = "VER40", t[t.VER41 = 41] = "VER41"
                })(M || (M = {}));
                class U {
                    constructor() {
                        (0, n.Z)(this, "scale", 1)
                    }
                    readSkeletonData(t, e) {
                        var i = new W.BinaryInput(e);
                        i.readString();
                        var s = i.readString(),
                            o = N(s),
                            n = null;
                        if (o === M.VER38 && (n = new I.SkeletonBinary(new I.AtlasAttachmentLoader(t))), (i = new W.BinaryInput(e)).readInt32(), i.readInt32(), (o = N(s = i.readString())) !== M.VER40 && o !== M.VER41 || (n = new L.SkeletonBinary(new L.AtlasAttachmentLoader(t))), !n) {
                            var a = "Unsupported version of spine model ".concat(s, ", please update pixi-spine");
                            console.error(a)
                        }
                        return n.scale = this.scale, n.readSkeletonData(e)
                    }
                }
                class z {
                    constructor() {
                        (0, n.Z)(this, "scale", 1)
                    }
                    readSkeletonData(t, e) {
                        var i = e.skeleton.spine,
                            s = N(i),
                            o = null;
                        if (s === M.VER37 && (o = new D.SkeletonJson(new D.AtlasAttachmentLoader(t))), s === M.VER38 && (o = new I.SkeletonJson(new I.AtlasAttachmentLoader(t))), s !== M.VER40 && s !== M.VER41 || (o = new L.SkeletonJson(new L.AtlasAttachmentLoader(t))), !o) {
                            var n = "Unsupported version of spine model ".concat(i, ", please update pixi-spine");
                            console.error(n)
                        }
                        return o.scale = this.scale, o.readSkeletonData(e)
                    }
                }
                class G extends _.go {
                    createBinaryParser() {
                        return new U
                    }
                    createJsonParser() {
                        return new z
                    }
                    parseData(t, e, i, s) {
                        var o = e;
                        t.spineData = o.readSkeletonData(i, s), t.spineAtlas = i
                    }
                }(0, n.Z)(G, "extension", c.n.Loader), (0, n.Z)(G, "use", (new G).genMiddleware().use);
                var V = i(512),
                    Q = i(600),
                    H = i(9360),
                    Y = i(3361),
                    X = i(3298),
                    K = i(8656),
                    q = i(3385),
                    J = i(6997),
                    $ = i(736),
                    tt = i(9504),
                    et = i(798),
                    it = i(5277);
                u.TC.nextRoundedRectBehavior = !0, A.xv.nextLineHeightBehavior = !0, c.R.add(p.bx, g.B9, d.Bv, a.c, h.Q, r.T, l.O, v.vl, m.o, G, f, R), window.PIXI = s;
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
                class dt extends rt {
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
                class ct extends rt {
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
                var pt = i(5992);
                class gt extends pt.v {}
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
                class ft {
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
                        (0, n.Z)(this, "pressed", void 0), (0, n.Z)(this, "disabled", void 0), (0, n.Z)(this, "prevent", void 0), (0, n.Z)(this, "canDispatch", void 0), (0, n.Z)(this, "onPress", void 0), this.keyCode = t, this.canDispatch = !0, this.pressed = !1, this.disabled = !1, this.prevent = !1, this.onPress = new(x()), window.addEventListener("keyup", (t => {
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
                class wt {
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

                function xt(t, e) {
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
                        e % 2 ? xt(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : xt(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class kt extends it.EventEmitter {
                    constructor(t) {
                        super(), (0, n.Z)(this, "loader", new b.aN), this.device = t, this.loader.onError.add((t => this.emit("error", t))), this.loader.onComplete.add((t => this.emit("complete", t)))
                    }
                    load(t) {
                        var e = this;
                        return (0, o.Z)((function*() {
                            var i = yield e._getSizes(), s = Object.create(null), o = t.filter((t => {
                                var i, s, o;
                                return null === (i = null === (s = t.metadata) || void 0 === s || null === (o = s.platform) || void 0 === o ? void 0 : o.includes(e.device.platform)) || void 0 === i || i
                            })).map((t => (s = St(St({}, s), i[t.url]), St(St({}, t), {}, {
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
                            return h ? null !== (i = null !== (s = null !== (o = null !== (n = h.texture) && void 0 !== n ? n : h.spineData) && void 0 !== o ? o : h.sound) && void 0 !== s ? s : null === (a = h.textures) || void 0 === a ? void 0 : a[e]) && void 0 !== i ? i : h.textures : d.xE.from(t)
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
                class Ct {}
                class Bt {
                    constructor() {
                        (0, n.Z)(this, "renderer", void 0), J.Xd.RENDER_OPTIONS.legacy = !0, J.Xd.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !0, this.renderer = d.Th.create({
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
                var Ft = {
                    to: ["*"],
                    name: "boot",
                    initialized: !0
                };
                class Zt {
                    constructor() {
                        (0, n.Z)(this, "transitions", Object.create(null)), (0, n.Z)(this, "transition", Ft)
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
                class Ot extends it.EventEmitter {
                    constructor() {
                        super(...arguments), (0, n.Z)(this, "width", void 0), (0, n.Z)(this, "height", void 0), (0, n.Z)(this, "aspectRatio", void 0), (0, n.Z)(this, "propAspectRatio", void 0), (0, n.Z)(this, "paddingX", void 0), (0, n.Z)(this, "paddingY", void 0)
                    }
                    resize(t, e) {
                        this.width = t, this.height = e, this.aspectRatio = parseFloat(Math.min(window.innerWidth / t, window.innerHeight / e).toFixed(3)), this.paddingX = Math.max(Math.round((window.innerWidth / 2 - this.width / 2 * this.aspectRatio) / this.aspectRatio), 0), this.paddingY = Math.max(Math.round((window.innerHeight / 2 - this.height / 2 * this.aspectRatio) / this.aspectRatio), 0), this.propAspectRatio = parseFloat(Math.max((2 * this.paddingX + this.width) / this.width, (2 * this.paddingY + this.height) / this.height).toFixed(3))
                    }
                }
                class Rt extends H.W2 {}
                class Mt {
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
                var Wt = {
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
                class _t extends it.EventEmitter {
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
                class Dt extends(Gt($.j)) {
                    constructor() {
                        super(...arguments), (0, n.Z)(this, "interactive", !0)
                    }
                }
                class It {
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
                var Lt, jt = i(899),
                    Nt = i.n(jt);
                class Ut {
                    constructor() {
                        (0, n.Z)(this, "prefix", "")
                    }
                    setPrefix(t) {
                        this.prefix = t
                    }
                    set(t, e) {
                        Nt().set("".concat(this.prefix, ":").concat(t), e)
                    }
                    get(t, e) {
                        return Nt().get("".concat(this.prefix, ":").concat(t), e)
                    }
                    clear() {
                        Nt().clearAll()
                    }
                }
                class zt extends it.EventEmitter {
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

                function Gt(t, e) {
                    return class extends t {
                        constructor() {
                            super(...arguments), (0, n.Z)(this, "game", Lt), (0, n.Z)(this, "preventAutoResize", !1), this.on("added", (() => {
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
                class Vt {
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
                const Qt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAADECAMAAABJEswAAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAC3UExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFrln0MAAAA8dFJOU+XYgn369I3swRLTLsm6QyNhoGVdVaUzPh8aUZHFmTqwqQ5vdnLes5UKTveI2wGFBUsIKM1Ja7UreKs3KmHZN/QAAAQmSURBVHja7dfXUiJRFIbRPVkm52BAQRCYnEWc93+uabAQaAtpvNjnZi27itNN/15485XxBQBIF98AgHTxAwBIF0MAIF10hsPOsDMzXDpfZ7hmY29vb29vb99wH51Wq9Pq3FjL3t7e3t7efvt9tACAdAIMACUC/AEASCfAAFAiwO8BgHQCDAAlAvwMAEgnwABQIsA/AYB0cbrZ+el5dW1+Zm9vb29vb99wH48AgHQCDAAlAvwWAEgnwABQIsDtyaQ9ac9Mls7XmazZ2Nvb29vb2zfcRxsASBfvAIB0AgwAJQL8FABIJ8AAUCLAvwGAdPEdAEgXIwAgXYx2b2y0O6oue3t7e3t7+633sQsApIvXAEA6AQaAEgF+BQCkE2AAKBHg5wBAOgEGgBIBfgkApBNgACgR4D8AQLroAgDpotvrdXsX5+owM73vdVc/59/Xzz17e3t7e3v77ffRAwDSxTEAkC7Gi/P4eFxdF59Tx+PF8/n9unfs7e3t7e3tt9jHHQAgnQADQIkA3wYA0gkwAJQI8FcAIF18AgDSxX0AIJ0AA0CJAO8BAOmmAR7sDapr87vr3rO3t7e3t7ffch8DACBdHKwaHAyq6+q5KXt7e3t7e/sG+zgAANLFCwAgnQADQIkAvwEA0gkwAJQI8BEAkG4a4LOjs+pafC6rP7vuHXt7e3t7e/uG+zgEANLNA3xyeDJTHa6Yfjd/vnyuv2Nvb29vb2/fcB8nAEC6+AsApIsnAEA6AQaAEgHeAQDSCTAAlAjw/qqd/Z3qunpuyt7e3t7e3r7BPvYBgHTxGABIJ8AAUCLAvwCAdPEQAEgnwABQIsC3AIB0AgwAJQL8GQBIF30AIF1c6F/+zO8Xmj23t7e3t7e332q//HD5tj+/al/Unvdrv8He3t7e3t5+8x4AKOABAJAuqp+V6/L58v2Gd+zt7e3t7e2b7usTACDvP+B7AEA6AQaAEgH+CACki7sAQDoBBoASAf4HAKQTYAAQYAAQYABAgAFAgAEAAQYAAQYABBgABBgAEGAAEGAAEGAAQIABQIABAAEGAAEGAAQYAAQYABBgABBgABBgAECAAUCAAQABBgABBgAEGAAEGAAQYAAQYAAQYABAgAFAgAEAAQYAAQYABBgABBgAEGAAEGAAEGAAQIABQIABAAEGAAEGAAQYAAQYABBgABBgABBgAECAAUCAAQABBgABBgAEGAAEGAAQYAAQYAAQYABAgAFAgAEAAQYAAQYABBgABBgAEGAAEGAAEGAAQIABQIABAAEGAAEGAAQYAAQYABBgABBgABBgAECAAUCAAQABBgABBgAEGAAEGAAQYAAQYAAQYH8CABBgABBgAECAAUCAAQABBgABBgAEGAAEGAAQYAAQYAAQYABAgAFAgAEAAQYAAQYABBgABBgAmPkPtIA9BKeG90EAAAAASUVORK5CYII=",
                    Ht = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZ4AAAElCAMAAADjr3SLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACuUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF7IU6UAAAA5dFJOU8+h2vPke3X4TVfVbFxIIRyF6Qou7oC+lQ43F0NnjWETJSnfkTK1uVLKcJwCBok/O7Gppa3EwZnHZBUSEz4AAAQKSURBVHja7dHrUttWAIXR06QtbYAAgRiwiTHYuPd7uL3/i1WyY1CETRLXmtnTWR+akXyk/YdVflFwxb8gmudXBYcnm+eNgsOTzXMy783J/Hf1MHte3JedNe8n9l3uy4mCq3nOT86r6+PzZWersu9sX84VHJ5snv7znffPq6u/dvb/aV/6Cq709x7q783PqofZ817rXft82Tf2G92XPQWHJ5vntYLDE84zGr0ePT2vDmct3o0+fLfq3L6TfRkpuGU8F6OL6nr6u32+KvuN7cuFgsOTzXOo4PCE80wmh5P5c/Uwq/49Ofz4vni/OGt/Z9/JvkwUXDmdTE4np9X1eF+06nzxrm5i3+W+nCo4PNk8fyg4PNk8vys4PNk8AwWHJ5tndzDYHezOGjSel/1untfV7wb2Xe7LroLDk83znYLDg0dr8/yg4PBk83yv4PDg0do8OwoOTzbPcH4f7gxn7QyfflO/2xl++tl+4/syVHA1z93wrrq+bNfc2He2L3cKrpwpODzhPNuzzrbPqmt7aYt37W+av+072ZdtBYcnm+cnBYcnm+dbBYcHj9bm+UbB4cGjtXneKjg82Tz78/v+2/3qmt8XtX83z5sb+872ZV/B4cnm+U3B4cnmeafg8GTzjOe9G7+rrsf7uHXefm5n38m+jBVcGR8/ND6en1UPs+fj1rv2+bJv7De6L8cKrua5Ob6prsd7s/bZc9/Yb3xfbhRc+VnB4cnm+UrB4cGjtXn+VnB4snn+UnB4snn+UXB4snn+VHB4snmuFByebJ7pdHo1vaqu6We17Fv7zvZlquDKtPfQtDetrt5nVX9b17Pvcl96Cq5cz+/Xvevqmt/reo3zxe/FN4uav+072ZdrBVfeK7g2z+372+p6+rt53v7GvrN9uVVw5UcFhyebR5L+n716VT781Ve7VefNd/ad7VcslRGebJ4XCg5PPM/li8vq+rJdc2Pf2b5cKjg82TxfKzg8eLQ2z4GCw5PNc3RwcHRwVF2P90XLzptndQf2Xe7LkYLDk83zUsHhyebZWn6+9XKrup7fPveN/Ub2ZUvB4Ynnua/+1u++tb+339y+3Cs4PHiEB4/wCA8e4cEjPMKDR3jwCI/w4BEePMIjPHiEB49/AR7hwSM8woNHePAIj/DgER48wiM8eIQHj/AIDx7hwSM8woNHeIQHj/DgER7hwSM8eIRHePAIDx7hER48woNHeIQHj/AIDx7hwSM8woNHePAIj/DgER48wiM8eIQHj/AIDx7hER48woNHeIQHj/DgER7hwSM8eIRHePAIDx7hER48wiM8eIQHj/AIDx7hwSM8woNHePAIj/DgER48wiM8eIRHePAIDx7hER48woNHeIQHj/DgER7hwaNu+xdVr7rouE001AAAAABJRU5ErkJggg==";
                class Yt extends(Gt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "onClick", void 0), (0, n.Z)(this, "useClickSound", !0), this.buttonMode = !0, this.interactive = !0, this.onClick = new(x()), this.onClick.add((() => {
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
                class Xt extends Yt {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.xE.EMPTY,
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
                class Kt extends Xt {
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
                class Jt extends(Gt($.j)) {
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
                class $t extends(Gt(H.W2, {
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
                            this._minY = this._height - i - this._scrollContainer.height - this.paddingBottom, this._height = e + this.paddingBottom - i, this._scrollContainer.hitArea = new X.Rectangle(0 | this.hitAreaOffsetLeft, 0 | i, t - this.hitAreaOffsetRight | 0, this._scrollContainer.height + this.paddingBottom | 0)
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
                class ee extends(Gt(H.W2, {
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
                class ie extends Yt {
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
                class se extends(Gt(H.W2)) {
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
                class ne extends(Gt(A.xv)) {
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
                class he extends(Gt(A.xv)) {
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
                class re extends Yt {
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
                class le extends(Gt(H.W2)) {
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
                class de extends(Gt(qt)) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "AutoPlaySettings"), (0, n.Z)(this, "bottomBackgroundTexture", void 0), (0, n.Z)(this, "bottomBackgroundMobileTexture", void 0), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "scrollView", void 0), (0, n.Z)(this, "bottom", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "autoPlayValues", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "subTitle", void 0), (0, n.Z)(this, "stopSection", void 0), (0, n.Z)(this, "closeButton", void 0), (0, n.Z)(this, "spaceKey", void 0), this.bottomBackgroundTexture = d.xE.from(Qt), this.bottomBackgroundMobileTexture = d.xE.from(Ht), this.overlay = this.addChild(new Jt), this.scrollView = this.addChild(new te), this.bottom = this.addChild(new $.j(this.bottomBackgroundMobileTexture)), this.content = this.scrollView.addChild(new H.W2), this.autoPlayValues = this.content.addChild(new se), this.title = this.content.addChild(new he(this.game.i18n.t("AutoPlaySettingsTitle").toUpperCase())), this.title.withGameName(), this.title.anchor.set(.5, 0), this.subTitle = this.content.addChild(new ne(this.game.i18n.t("AutoPlaySettingsSubTitle"))), this.subTitle.anchor.set(.5, 0), this.stopSection = this.content.addChild(new le), this.closeButton = this.addChild(new Kt), this.closeButton.onClick.add((() => this.close())), this.spaceKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Escape), this.spaceKey.onPress.add(this.close, this), this.spaceKey.disable()
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
                var ce = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return (e ? t.toLowerCase() : t).replace(/(?:^|\s|[&"'([{])+\S/g, (t => t.toUpperCase()))
                };
                class ue extends Yt {
                    constructor(t) {
                        super(), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "mark", void 0), (0, n.Z)(this, "description", void 0), (0, n.Z)(this, "checked", !1), this.background = this.addChild($.j.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA9CAMAAAApvJHbAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABmUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////26W6sgAAAAhdFJOUwCPnzDvfxD+7iCAnt5v36BwzpBAX89Qr46/vt3NYE6ublTVHtYAAAFZSURBVEjHxZfJdsMgDEUxxgiP8ewmHfX/P1k7cU6dFgJIi779RU+AQBLCrrTul0YhoprOfZ2KcOlBbtxRSs6BbPYbvamRuZ89oVs+3hH3LpM9YfMJfaqc4UeFfpnW4RqDBFb3CYbqhQNb8CwC/mO+xijB+HBUKo5Gczy4BmPVEZPeVZB9X73rnT4hReUemgQjaEboe+YNkb5mPhNhhIFh/LZvikyb9eklwwipaBl0K3o6jYk4M+hFTAy6Ymz5tukMGOFfaV7eDYPuxMKgL8y7xrnnNbPGePXNfFsGsvGPrUtS5ArbVDCMr8GJxvdPWHL+MVrmP/8/IfNj69JF06/HvsVw+hbxHl0fDyqoSUf3ipAwWk0bvJoHRo8sRBuy82Z0zgaVN/Dbs9GkMPS5ZAsv3dlDqb0zVS4r2wJgMh020M3SwHEFAFMOOmKaTOvk0q1rgKk+ky/XHPoNshlvtQO8EbIAAAAASUVORK5CYII=")), this.background.width = 61, this.background.height = 61, this.mark = this.addChild($.j.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAMAAAB61OwbAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ5TOdIAAAAcdFJOUwCg7/5f3mAg35+/cL7uQIAwb38Qzs+vEU8hMVC5i/YxAAAAvUlEQVQoz6WT2RKDIAxFEcsiIFLtXv7/O9sSRkQIPjRv5GZykpuBEDT4TZ1II2b/jQHXhQ/h0AIJBQ9MP4PuBQagoKMzdKBLrAGPAGxNIf8E2AMAOQLMO4BVUonS4xUQ3tThAJhYPnces7WpgsT1nnucNph81rIrNlhYrJg2HrNs6jFW8ORxbpHrIUtfFUAIHVtIXQFkg+I3GLZ67QbLJemsemTBWoBsWYMd2cKyo0B/iv5V9LrxGblh5l1kP+dCHfNSyQUnAAAAAElFTkSuQmCC")), this.mark.width = 32, this.mark.height = 30, this.mark.anchor.set(.5), this.mark.position.set(this.background.width / 2, this.background.height / 2), t && (this.description = this.addChild(new A.xv(ce(this.game.i18n.t(t), !0), {
                            fill: 16777215,
                            fontSize: 28,
                            fontFamily: "Avenir-Bold"
                        })), this.description.anchor.set(0, .5), this.description.position.set(80, this.background.height / 2)), this.hitArea = new X.Rectangle(0, 0, this.width, 61), this.game.interaction.click(this, (() => {
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
                class me extends Yt {
                    constructor(t, e, i) {
                        super(), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "text", void 0), (0, n.Z)(this, "state", !1), this.background = this.addChild(new $.j(this.game.loader.getAsset("assets/ui_2020/chip.png"))), this.text = this.addChild(new A.xv(e, ge(ge({}, i), {}, {
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
                class Ae extends(Gt(H.W2, {
                    preventResize: !0
                })) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "StopItemBalance"), (0, n.Z)(this, "state", "inactive"), (0, n.Z)(this, "checkbox", void 0), (0, n.Z)(this, "chips", void 0), (0, n.Z)(this, "chipValue", 10), (0, n.Z)(this, "balance", 0), (0, n.Z)(this, "onClickCheckbox", new(x())), (0, n.Z)(this, "onClickChip", new(x())), (0, n.Z)(this, "onChange", new(x())), this.checkbox = this.addChild(new ue("AutoPlaySettingsStopCondCheckboxBalance")), this.chips = this.addChild(new H.W2), this.chips.addChild(new me(this.chipValue, "10%")).active(!0), this.chips.addChild(new me(25, "25%")), this.chips.addChild(new me(50, "50%")), this.chips.addChild(new me(75, "75%")), this.chips.addChild(new me(100, "100%")), this.checkbox.onClick.add((() => {
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
                class ve extends(Gt(H.W2, {
                    preventResize: !0
                })) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "StopItemBalanceDrop"), (0, n.Z)(this, "state", "inactive"), (0, n.Z)(this, "checkbox", void 0), (0, n.Z)(this, "chips", void 0), (0, n.Z)(this, "chipValue", 10), (0, n.Z)(this, "balance", 0), (0, n.Z)(this, "onClickCheckbox", new(x())), (0, n.Z)(this, "onClickChip", new(x())), (0, n.Z)(this, "onChange", new(x())), this.checkbox = this.addChild(new ue("AutoPlaySettingsStopCondCheckboxBalanceDrop")), this.chips = this.addChild(new H.W2), this.chips.addChild(new me(this.chipValue, "10%")).active(!0), this.chips.addChild(new me(25, "25%")), this.chips.addChild(new me(50, "50%")), this.chips.addChild(new me(75, "75%")), this.chips.addChild(new me(100, "100%")), this.checkbox.onClick.add((() => {
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
                class be extends(Gt(H.W2, {
                    preventResize: !0
                })) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "StopItemFeatureBonus"), (0, n.Z)(this, "state", "inactive"), (0, n.Z)(this, "checkbox", void 0), (0, n.Z)(this, "onClickCheckbox", new(x())), (0, n.Z)(this, "onChange", new(x())), this.checkbox = this.addChild(new ue("AutoPlaySettingsStopCondCheckboxFeatureBonus")), this.checkbox.onClick.add((() => {
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
                class fe extends(Gt(H.W2, {
                    preventResize: !0
                })) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "StopItemFeatureFreeSpin"), (0, n.Z)(this, "state", "inactive"), (0, n.Z)(this, "checkbox", void 0), (0, n.Z)(this, "onClickCheckbox", new(x())), (0, n.Z)(this, "onChange", new(x())), this.checkbox = this.addChild(new ue("AutoPlaySettingsStopCondCheckboxFeatureFreeSpin")), this.checkbox.onClick.add((() => {
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
                var ye = 0,
                    we = 1,
                    xe = 2,
                    Se = {
                        fontSize: 22
                    };
                class ke extends(Gt(H.W2, {
                    preventResize: !0
                })) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "StopItemWin"), (0, n.Z)(this, "state", "inactive"), (0, n.Z)(this, "checkbox", void 0), (0, n.Z)(this, "chips", void 0), (0, n.Z)(this, "chipType", ye), (0, n.Z)(this, "onClickCheckbox", new(x())), (0, n.Z)(this, "onClickChip", new(x())), (0, n.Z)(this, "onChange", new(x())), this.checkbox = this.addChild(new ue("AutoPlaySettingsStopCondCheckboxWin")), this.chips = this.addChild(new H.W2), this.chips.addChild(new me(this.chipType, ce(this.game.i18n.t("AutoPlaySettingsStopCondCheckboxWinAny")), Se)).active(!0), this.chips.addChild(new me(we, ce(this.game.i18n.t("AutoPlaySettingsStopCondCheckboxWinBig")), Se)), this.chips.addChild(new me(xe, ce(this.game.i18n.t("AutoPlaySettingsStopCondCheckboxWinGiant")), Se)), this.checkbox.onClick.add((() => {
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
                        this.state = "inactive", this.chipType = ye, this.checkbox.setChecked(!1), this.chips.children.forEach(((t, e) => {
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
                var Ce = ["pointerover", "pointerenter", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerout", "pointerleave", "gotpointercapture", "lostpointercapture", "mouseover", "mouseenter", "mousedown", "mousemove", "mouseup", "mousecancel", "mouseout", "mouseleave", "touchover", "touchenter", "touchdown", "touchmove", "touchup", "touchcancel", "touchout", "touchleave"],
                    Be = "bbcode",
                    Pe = {
                        bbcode: ["[", "]"],
                        xml: ["<", ">"]
                    };
                class Ee extends A.xv {
                    constructor(t, e) {
                        super(t), (0, n.Z)(this, "textStyles", void 0), (0, n.Z)(this, "hitboxes", void 0), this.styles = e, Ce.forEach((t => {
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
                        for (var e in this.textStyles = {}, this.textStyles.default = this.assign({}, Ee.DEFAULT_TAG_STYLE), t) "default" === e ? this.assign(this.textStyles.default, t[e]) : this.textStyles[e] = this.assign({}, t[e]);
                        this.textStyles.default.tagStyle === Be && (this.textStyles.b = this.assign({}, {
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
                        "default" === t ? this.textStyles.default = this.assign({}, Ee.DEFAULT_TAG_STYLE) : delete this.textStyles[t], this.withPrivateMembers()._style = new A.pn(this.textStyles.default), this.withPrivateMembers().dirty = !0
                    }
                    getTagRegex(t, e) {
                        var i = Object.keys(this.textStyles).map((t => [t, t.toUpperCase()].join("|"))).join("|"),
                            {
                                tagStyle: s
                            } = this.textStyles.default;
                        i = t ? "(".concat(i, ")") : "(?:".concat(i, ")");
                        var o = s === Be ? "\\".concat(Pe.bbcode[0]).concat(i, "(?:\\=(?:[A-Za-z0-9_\\-\\#]+|'(?:[^']+|\\\\')*'))*\\s*\\").concat(Pe.bbcode[1], "|\\").concat(Pe.bbcode[0], "\\/").concat(i, "\\s*\\").concat(Pe.bbcode[1]) : "\\".concat(Pe.xml[0]).concat(i, "(?:\\s+[A-Za-z0-9_\\-]+=(?:\"(?:[^\"]+|\\\\\")*\"|'(?:[^']+|\\\\')*'))*\\s*\\").concat(Pe.xml[1], "|\\").concat(Pe.xml[0], "\\/").concat(i, "\\s*\\").concat(Pe.xml[1]);
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
                                        if (m === Be && r[c][0].includes("=") && this.textStyles[r[c][1]]) ! function() {
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
                            t.text.includes(Pe[b][0]) && (t.text = t.text.match(b === Be ? /^(.*)\[/ : /^(.*)\</)[1])
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
                                for (var l = 0, d = 0, c = 0, u = 0; u < s[r].length; u++) {
                                    var p = s[r][u].style;
                                    this.context.font = this.getFontString(p), s[r][u].width = this.context.measureText(s[r][u].text).width, 0 !== s[r][u].text.length && (s[r][u].width += (s[r][u].text.length - 1) * p.letterSpacing, u > 0 && (l += p.letterSpacing / 2), u < s[r].length - 1 && (l += p.letterSpacing / 2)), l += s[r][u].width, s[r][u].fontProperties = A._A.measureFont(this.context.font), s[r][u].height = s[r][u].fontProperties.fontSize, "number" == typeof p.valign ? (d = Math.min(d, p.valign - s[r][u].fontProperties.descent), c = Math.max(c, p.valign + s[r][u].fontProperties.ascent)) : (d = Math.min(d, -s[r][u].fontProperties.descent), c = Math.max(c, s[r][u].fontProperties.ascent))
                                }
                                o[r] = l, n[r] = d, a[r] = c, h = Math.max(h, l)
                            }
                            var g = Object.keys(t).map((e => t[e])).reduce(((t, e) => Math.max(t, e.strokeThickness || 0)), 0),
                                m = this.getDropShadowPadding(),
                                v = h + 2 * g + 2 * m,
                                b = a.reduce(((t, e) => t + e), 0) - n.reduce(((t, e) => t + e), 0) + 2 * g + 2 * m;
                            this.canvas.width = v * this.resolution, this.canvas.height = b * this.resolution, this.context.scale(this.resolution, this.resolution), this.context.textBaseline = "alphabetic", this.context.lineJoin = "round";
                            for (var f = m + g, y = [], w = 0; w < s.length; w++) {
                                var x = s[w],
                                    S = void 0;
                                switch (this.withPrivateMembers()._style.align) {
                                    case "left":
                                        S = m + g;
                                        break;
                                    case "center":
                                        S = m + g + (h - o[w]) / 2;
                                        break;
                                    case "right":
                                        S = m + g + h - o[w]
                                }
                                for (var k = 0; k < x.length; k++) {
                                    var {
                                        style: C,
                                        text: B,
                                        fontProperties: P,
                                        width: E,
                                        height: T,
                                        tag: F
                                    } = x[k], Z = f + P.ascent;
                                    switch (C.valign) {
                                        case "top":
                                            break;
                                        case "baseline":
                                            Z += a[w] - P.ascent;
                                            break;
                                        case "middle":
                                            Z += (a[w] - n[w] - P.ascent - P.descent) / 2;
                                            break;
                                        case "bottom":
                                            Z += a[w] - n[w] - P.ascent - P.descent;
                                            break;
                                        default:
                                            Z += a[w] - P.ascent - C.valign
                                    }
                                    if (0 === C.letterSpacing) y.push({
                                        text: B,
                                        style: C,
                                        x: S,
                                        y: Z,
                                        width: E,
                                        ascent: P.ascent,
                                        descent: P.descent,
                                        tag: F
                                    }), S += x[k].width;
                                    else {
                                        this.context.font = this.getFontString(x[k].style);
                                        for (var O = 0; O < B.length; O++) {
                                            (O > 0 || k > 0) && (S += C.letterSpacing / 2);
                                            var R = this.context.measureText(B.charAt(O)).width;
                                            y.push({
                                                text: B.charAt(O),
                                                style: C,
                                                x: S,
                                                y: Z,
                                                width: R,
                                                ascent: P.ascent,
                                                descent: P.descent,
                                                tag: F
                                            }), S += R, (O < B.length - 1 || k < x.length - 1) && (S += C.letterSpacing / 2)
                                        }
                                    }
                                }
                                f += a[w] - n[w]
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
                                        for (var d = 0; d < l.length; d++) {
                                            var c = l[d];
                                            "number" == typeof c && (l[d] = it.hex2string(c))
                                        }
                                    var u = new A.pn(e),
                                        p = A._A.measureText(i || " ", u, u.wordWrap, this.canvas);
                                    this.context.fillStyle = this._generateFillStyle(u, [i], p), this.context.fillText(i, s, o)
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
                                    hitbox: new X.Rectangle(s + l, o - a + l, n, a + h)
                                }), (void 0 === e.debug ? Ee.debugOptions.spans.enabled : e.debug) && (this.context.lineWidth = 1, Ee.debugOptions.spans.bounding && (this.context.fillStyle = Ee.debugOptions.spans.bounding, this.context.strokeStyle = Ee.debugOptions.spans.bounding, this.context.beginPath(), this.context.rect(s, o - a, n, a + h), this.context.fill(), this.context.stroke(), this.context.stroke()), Ee.debugOptions.spans.baseline && (this.context.strokeStyle = Ee.debugOptions.spans.baseline, this.context.beginPath(), this.context.moveTo(s, o), this.context.lineTo(s + n, o), this.context.closePath(), this.context.stroke()), Ee.debugOptions.spans.top && (this.context.strokeStyle = Ee.debugOptions.spans.top, this.context.beginPath(), this.context.moveTo(s, o - a), this.context.lineTo(s + n, o - a), this.context.closePath(), this.context.stroke()), Ee.debugOptions.spans.bottom && (this.context.strokeStyle = Ee.debugOptions.spans.bottom, this.context.beginPath(), this.context.moveTo(s, o + h), this.context.lineTo(s + n, o + h), this.context.closePath(), this.context.stroke()), Ee.debugOptions.spans.text && (this.context.fillStyle = "#ffffff", this.context.strokeStyle = "#000000", this.context.lineWidth = 2, this.context.font = "8px monospace", this.context.strokeText(r.name, s, o - a + 8), this.context.fillText(r.name, s, o - a + 8), this.context.strokeText("".concat(n.toFixed(2), "x").concat((a + h).toFixed(2)), s, o - a + 16), this.context.fillText("".concat(n.toFixed(2), "x").concat((a + h).toFixed(2)), s, o - a + 16)))
                            })), Ee.debugOptions.objects.enabled && (Ee.debugOptions.objects.bounding && (this.context.fillStyle = Ee.debugOptions.objects.bounding, this.context.beginPath(), this.context.rect(0, 0, v, b), this.context.fill()), Ee.debugOptions.objects.text && (this.context.fillStyle = "#ffffff", this.context.strokeStyle = "#000000", this.context.lineWidth = 2, this.context.font = "8px monospace", this.context.strokeText("".concat(v.toFixed(2), "x").concat(b.toFixed(2)), 0, 8, v), this.context.fillText("".concat(v.toFixed(2), "x").concat(b.toFixed(2)), 0, 8, v))), this.updateTexture()
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
                }(0, n.Z)(Ee, "DEFAULT_TAG_STYLE", {
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
                }), (0, n.Z)(Ee, "debugOptions", {
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
                class Te extends(Gt(qt)) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "BetSettings"), (0, n.Z)(this, "bets", []), (0, n.Z)(this, "betCoins", 0), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "scrollView", void 0), (0, n.Z)(this, "bottom", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "betItems", void 0), (0, n.Z)(this, "paylines", void 0), (0, n.Z)(this, "currency", void 0), (0, n.Z)(this, "closeButton", void 0), (0, n.Z)(this, "bottomBackgroundTexture", void 0), (0, n.Z)(this, "bottomBackgroundMobileTexture", void 0), (0, n.Z)(this, "spaceKey", void 0), (0, n.Z)(this, "hasCurrency", !1), this.bottomBackgroundTexture = d.xE.from(Qt), this.bottomBackgroundMobileTexture = d.xE.from(Ht), this.overlay = this.addChild(new Jt), this.scrollView = this.addChild(new te), this.bottom = this.addChild(new $.j(this.bottomBackgroundMobileTexture)), this.content = this.scrollView.addChild(new H.W2), this.title = this.content.addChild(new he(this.game.i18n.t("BetSettingsTitle").toUpperCase())), this.title.withGameName(), this.title.anchor.set(.5, 0), this.betItems = this.content.addChild(new se), this.paylines = this.content.addChild(new Ee("", {
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
                        })), this.paylines.anchor.set(.5, 0), this.currency = new Ee(this.game.i18n.t("Currency", this.game.i18n.currency()), {
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
                        }), this.currency.anchor.set(.5, 0), this.closeButton = this.addChild(new Kt), this.closeButton.onClick.add((() => this.close())), this.spaceKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Escape), this.spaceKey.onPress.add(this.close, this), this.spaceKey.disable(), this.game.i18n.hasCurrency() && (this.hasCurrency = !0, this.content.addChild(this.currency))
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
                class Fe extends Jt {
                    constructor() {
                        super(1, 13421772), (0, n.Z)(this, "name", "FastStopLayout"), (0, n.Z)(this, "handlerRef", null), this.alpha = 0, this.interactive = !1
                    }
                    press(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        "function" == typeof this.handlerRef && this.handlerRef(), this.handlerRef = this.game.interaction.clickOnce(this, (() => {
                            this.interactive = !1, e && k.to(this, .1, {
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
                class Ze extends(Gt(Ee)) {
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
                class Oe extends(Gt(A.xv)) {
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
                class Re extends(Gt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "content", void 0), this.title = this.addChild(new Oe(this.game.i18n.t("GameRulesAdvancedAutoPlayTitle"))), this.content = this.addChild(new Ze(this.game.i18n.t("GameRulesAdvancedAutoPlayContent")))
                    }
                    resize() {
                        this.content.position.set(0, this.title.y + this.title.height + 30)
                    }
                }
                class Me extends(Gt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "content", void 0), this.title = this.addChild(new Oe(this.game.i18n.t("GameRulesAutoPlayTitle"))), this.content = this.addChild(new Ze(this.game.i18n.t("GameRulesAutoPlayContent")))
                    }
                    resize() {
                        this.content.position.set(0, this.title.y + this.title.height + 30)
                    }
                }
                class We extends(Gt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "content", void 0), this.content = this.addChild(new Ze(this.game.i18n.t("GameRulesBestExperience")))
                    }
                    resize() {
                        this.content.position.set(0, 0)
                    }
                }
                class _e extends(Gt($.j)) {
                    constructor() {
                        super(d.xE.WHITE), this.tint = 2763563
                    }
                    resize() {
                        this.game.device.desktop ? (this.height = 4, this.width = 1120) : this.game.device.landscape ? (this.height = 6, this.width = 1580) : (this.height = 6, this.width = 950)
                    }
                }
                class De extends(Gt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "gameName", void 0), (0, n.Z)(this, "gameTRTP", void 0), this.title = this.addChild(new Oe(this.game.i18n.t("GameRulesGeneralTitle"))), this.gameName = this.addChild(new Ze(this.game.config.get("gameName")));
                        var t = this.game.config.get("trtp");
                        this.gameTRTP = this.addChild(new Ze(this.game.i18n.t("GameRulesGeneralRTP", t))), this.gameTRTP.visible = !!t
                    }
                    resize() {
                        this.gameName.position.set(0, this.title.y + this.title.height + 30), this.gameTRTP.position.set(0, this.gameName.y + this.gameName.height + 30)
                    }
                }
                class Ie extends(Gt(H.W2, {
                    preventResize: !0
                })) {
                    constructor(t, e, i) {
                        super(), (0, n.Z)(this, "icon", void 0), (0, n.Z)(this, "text", void 0), this.name = i, this.icon = this.addChild(new $.j(e)), this.text = this.addChild(new Ze(t))
                    }
                    resize() {
                        this.game.device.desktop ? (this.icon.scale.set(1), this.text.x = 260, this.text.style.wordWrapWidth = 740) : this.game.device.landscape ? (this.icon.scale.set(2), this.text.x = 380, this.text.style.wordWrapWidth = 500) : (this.icon.scale.set(1.8), this.text.x = this.icon.x + this.icon.width + 30, this.text.style.wordWrapWidth = 280), this.text.height >= this.icon.height ? (this.text.y = 0, this.icon.position.set(0, (this.text.height - this.icon.height) / 2)) : (this.icon.y = 0, this.text.y = (this.icon.height - this.text.height) / 2)
                    }
                }
                class Le extends(Gt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "content", void 0), this.title = this.addChild(new Oe(this.game.i18n.t("GameRulesInterfaceTitle"))), this.content = this.addChild(new Ze(this.game.i18n.t("GameRulesInterfaceContent"))), this.addItems()
                    }
                    addItems() {
                        this.addChild(new Ie(this.game.i18n.t("GameRulesInterfaceSpin"), this.game.loader.getAsset("gameRulesButtonSpin"), "itemSpin")), this.addChild(new Ie(this.game.i18n.t("GameRulesInterfaceMenu"), this.game.loader.getAsset("iconMenu"), "itemMenu"));
                        var t = new Ie(this.game.i18n.t("GameRulesInterfaceQuickSpin"), this.game.loader.getAsset("iconQuickSpin"), "itemQuickSpin");
                        this.game.config.get("quickSpin.available", !0) && this.addChild(t);
                        var e = new Ie(this.game.i18n.t("GameRulesInterfaceAutoPlay"), this.game.loader.getAsset("iconAuto"), "itemAutoPlay");
                        this.game.config.get("autoPlay.available", !0) && this.addChild(e), this.addChild(new Ie(this.game.i18n.t("GameRulesInterfaceBetLevel"), this.game.loader.getAsset("ex" === this.game.i18n.language ? "gameRulesButtonPlayLevel" : "gameRulesButtonBetLevel"), "itemBetLevel")), this.addChild(new Ie(this.game.i18n.t("GameRulesInterfaceWin"), this.game.loader.getAsset("gameRulesItemWin"), "itemWin")), this.game.config.get("balanceHide", !1) || this.addChild(new Ie(this.game.i18n.t("GameRulesInterfaceBalance"), this.game.loader.getAsset("gameRulesItemBalance"), "itemBalance")), this.addChild(new Ie(this.game.i18n.t("GameRulesInterfaceSound"), this.game.loader.getAsset("gameRulesButtonSound"), "itemSound"))
                    }
                    resize() {
                        var t = 0;
                        this.children.forEach((e => {
                            var i = "itemBalance" === e.name && this.game.device.mobile && this.game.device.portrait ? 12 : 0;
                            e.resize(), e.position.set(i, t), t += e.height + 30
                        }))
                    }
                }
                class je extends(Gt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "itemQuickSpin", void 0), (0, n.Z)(this, "itemFullscreen", void 0), (0, n.Z)(this, "itemGameSound", void 0), (0, n.Z)(this, "itemBackgroundSound", void 0), this.title = this.addChild(new Oe(this.game.i18n.t("GameRulesSettingsTitle"))), this.content = this.addChild(new Ze(this.game.i18n.t("GameRulesSettingsContent"))), this.game.config.get("quickSpin.available", !0) && (this.itemQuickSpin = this.addChild(new Ze(this.game.i18n.t("GameRulesSettingsContentItemQuickSpin")))), this.itemFullscreen = this.addChild(new Ze(this.game.i18n.t("GameRulesSettingsContentItemFullscreen"))), this.itemGameSound = this.addChild(new Ze(this.game.i18n.t("GameRulesSettingsContentItemGameSound"))), this.itemBackgroundSound = this.addChild(new Ze(this.game.i18n.t("GameRulesSettingsContentItemBackgroundSound")))
                    }
                    resize() {
                        var t;
                        this.children.filter((t => t.visible)).forEach((e => {
                            t ? e.position.set(0, t.y + t.height + 30) : e.position.set(0), t = e
                        }))
                    }
                }
                class Ne extends(Gt(H.W2)) {
                    constructor() {
                        var t, e;
                        super(), (0, n.Z)(this, "content", void 0), this.content = this.addChild(new Ze("".concat(null !== (t = window.RELEASE_VERSION) && void 0 !== t ? t : "", "\n").concat(null !== (e = window.RELEASE_DATE) && void 0 !== e ? e : "")))
                    }
                    resize() {
                        var t;
                        null === (t = this.content) || void 0 === t || t.position.set(0, 0)
                    }
                }
                class Ue extends(Gt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "GameRules"), (0, n.Z)(this, "scrollView", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "content", void 0), this.visible = !1, this.interactive = !0, this.scrollView = this.addChild(new te), this.scrollView.paddingBottom = 120, this.title = this.scrollView.addChild(new he(this.game.i18n.t("MenuGameRules").toUpperCase())), this.title.withGameName(), this.title.anchor.set(.5, 0), this.content = this.scrollView.addChild(new H.W2), this.addSections()
                    }
                    addSections() {
                        this.content.addChild(new De), this.content.addChild(new Le), this.content.addChild(new je), this.addAutoPlaySection(), this.content.addChild(new _e), this.content.addChild(new We), this.content.addChild(new Ne)
                    }
                    addAutoPlaySection() {
                        this.game.config.get("autoPlay.available", !0) && (this.content.addChild(new Me), this.content.addChild(new Re))
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
                class ze extends(Gt(qt)) {
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
                class Ge extends Xt {
                    constructor() {
                        super("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTP///////////////////////////////////////////////////////////////////////////4/JsPUAAAATdFJOUwC/XzCfgO/fIH/Pj5BwQBCvb6Aufu5CAAAAu0lEQVRYw+3X3Q6DIAyGYVEExL9tvf97nVuGybKJpLZxyb73sCHPARw0VBVCCCGE0F8XvA9aMpGO/ZB17MbRM9doyfL2tMqLPUnKNb1Vq8mC9pU+GmXkjr7Uqcki9oYsYG/Kh+2MfNDuKVvPly3tZNVkrj0bKugyM+gbFWUYNBXGoE2ZHDkLa7B25yGXAwN7oYnfBehzade+cuK0TyMPGjToM2iTo+MhOsTktGk0rgtX6aeHEEIIIfTD3QFMQUQwK1KW1AAAAABJRU5ErkJggg==");
                        var t = this.game.config.get("homeURL.url", "javascript:history.back()"),
                            e = this.game.config.get("homeURL.target", "self");
                        this.visible = this.game.config.get("homeURL.show", !0), this.onClick.add((() => this.game.openUrl(t, e)))
                    }
                }
                class Ve extends Yt {
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
                        t.desktop ? (this.border.texture = this.game.loader.getAsset("iconBorderV"), this.icon.scale.set(1), this.icon.hitArea = new X.Rectangle(0, -30, 110, 150), this.icon.position.set(20, (this.border.height - this.icon.height) / 2)) : t.landscape ? (this.icon.scale.set(2), this.icon.hitArea = null, this.border.texture = this.game.loader.getAsset("iconBorderV"), e.enabled ? (this.border.position.set(0, 0), this.icon.position.set(0, 0)) : (this.icon.position.set(-100, 0), this.border.position.set(this.icon.width + this.icon.x, 0))) : (this.icon.scale.set(1.8), this.icon.position.set(0, 0), this.icon.hitArea = null, this.border.texture = this.game.loader.getAsset("iconBorderH"), this.border.position.set(0, this.icon.height))
                    }
                }
                class Qe extends(Gt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "Menu"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "contentItems", void 0), (0, n.Z)(this, "bottom", void 0), (0, n.Z)(this, "items", void 0), (0, n.Z)(this, "homeButton", void 0), (0, n.Z)(this, "closeButton", void 0), (0, n.Z)(this, "bottomBackgroundTexture", void 0), (0, n.Z)(this, "bottomBackgroundMobileTexture", void 0), (0, n.Z)(this, "spaceKey", void 0), (0, n.Z)(this, "currentIndex", 0), (0, n.Z)(this, "onClickHome", void 0), (0, n.Z)(this, "onClickClose", void 0), this.visible = !1, this.interactive = !0, this.bottomBackgroundTexture = d.xE.from(Qt), this.bottomBackgroundMobileTexture = d.xE.from(Ht), this.overlay = this.addChild(new Jt), this.contentItems = this.addChild(new H.W2), this.bottom = this.addChild(new $.j(this.bottomBackgroundMobileTexture)), this.items = this.addChild(new H.W2), this.homeButton = this.addChild(new Ge), this.closeButton = this.addChild(new Kt), this.closeButton.onClick.add((() => this.close())), this.spaceKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Escape), this.spaceKey.onPress.add(this.close, this), this.spaceKey.disable()
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
                        var i = this.items.addChild(new Ve(t));
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
                var He = {
                    counts: [10, 25, 50, 100, 150, 300, 1 / 0]
                };
                class Ye extends it.EventEmitter {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : He;
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
                class Xe {
                    constructor(t, e, i) {
                        this.bigMul = t, this.giantMul = e, this.betLevel = i
                    }
                    available(t) {
                        return t >= this.bigMul * this.betLevel.toCoins()
                    }
                    type(t) {
                        return t >= this.giantMul * this.betLevel.toCoins() ? xe : we
                    }
                }
                class Ke extends class {
                    constructor() {
                        (0, n.Z)(this, "game", Lt)
                    }
                } {
                    constructor() {
                        super(), (0, n.Z)(this, "left", -1), (0, n.Z)(this, "enabled", !1), (0, n.Z)(this, "onStart", new(x())), (0, n.Z)(this, "onFinish", new(x())), this.update(this.game.server.response), this.game.server.on("response", this.update, this)
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
                class qe {
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
                class Je {
                    constructor(t) {
                        (0, n.Z)(this, "watcher", void 0), (0, n.Z)(this, "enabled", !1), (0, n.Z)(this, "onToggle", new(x())), (0, n.Z)(this, "onTryEnable", new(x())), this.config = t, this.watcher = new qe(t)
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
                class $e {
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
                class ti extends(Gt(A.xv)) {
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
                class ei extends(Gt(A.xv)) {
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
                class ii extends(Gt(A.xv)) {
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
                class si extends(Gt(A.xv)) {
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
                class oi extends class {
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
                class ni extends ue {
                    constructor() {
                        super("GameSettingsBackgroundSounds"), (0, n.Z)(this, "name", "BackgroundSoundsCheckbox")
                    }
                    resize() {
                        this.game.device.desktop ? this.scale.set(1) : (this.game.device.landscape, this.scale.set(1.8))
                    }
                }
                class ai extends ue {
                    constructor() {
                        super("GameSettingsFullscreen"), (0, n.Z)(this, "name", "FullscreenCheckbox")
                    }
                    resize() {
                        this.game.device.desktop ? (this.scale.set(1), this.visible = !0) : this.visible = !1
                    }
                }
                class hi extends ue {
                    constructor() {
                        super("GameSettingsGameSounds"), (0, n.Z)(this, "name", "GameSoundsCheckbox"), this.description.style.wordWrapWidth = 220
                    }
                    resize() {
                        this.description.style.wordWrap = this.game.device.landscape || this.game.device.desktop, this.game.device.desktop ? this.scale.set(1) : (this.game.device.landscape, this.scale.set(1.8))
                    }
                }
                class ri extends ue {
                    constructor() {
                        super("GameSettingsIntroScreen"), (0, n.Z)(this, "name", "IntroScreenCheckbox"), this.description.style.wordWrapWidth = 220
                    }
                    resize() {
                        this.description.style.wordWrap = this.game.device.landscape || this.game.device.desktop, this.game.device.desktop ? (this.scale.set(1), this.position.set(-300, 350)) : (this.game.device.landscape, this.scale.set(1.8), this.position.set(-400, 760))
                    }
                }
                class li extends ue {
                    constructor() {
                        super("GameSettingsLeftHand"), (0, n.Z)(this, "name", "LeftHandCheckbox"), this.description.style.wordWrapWidth = 300
                    }
                    resize() {
                        this.description.style.wordWrap = this.game.device.landscape || this.game.device.desktop, this.game.device.desktop ? this.visible = !1 : (this.game.device.landscape, this.scale.set(1.8), this.visible = !0)
                    }
                }
                class di extends ue {
                    constructor() {
                        super("GameSettingsQuickSpin"), (0, n.Z)(this, "name", "QuickSpinCheckbox")
                    }
                    resize() {
                        this.game.device.desktop ? this.scale.set(1) : (this.game.device.landscape, this.scale.set(1.8))
                    }
                }
                class ci extends ue {
                    constructor() {
                        super("GameSettingsRiskFeatureCheckbox"), (0, n.Z)(this, "name", "RiskFeatureCheckbox")
                    }
                    resize() {
                        this.game.device.desktop ? this.scale.set(1) : (this.game.device.landscape, this.scale.set(1.8))
                    }
                }
                i(7859);
                class ui extends(Gt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "logo", void 0), (0, n.Z)(this, "progress", void 0), (0, n.Z)(this, "_tweeenProgress", void 0), this.logo = $.j.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAADzBAMAAADTF1+6AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURUdwTP///////////////////////////////////////////////////////81e3QIAAAAOdFJOUwBovPELGCk/kVKoz+B7jzeedwAADjRJREFUeNrsnItvHEcdx/ece9hOjBwopY2K5YY2rdpgJSFuQhpOW1y1aZugK0HpI411VRInhNS65tEQESy3KIS+TpcSCBSwDIVCqHrKu0XQU0ApLaCeTB6Il6x6z4nPd+f9G9jZ3XnuvPa6ASF5FKV2erOf3Znf/Ob3+85vz7D/O+1DYxY0C5oFzYJmQf/HoNr8a9MWsKAJ49q02CzoGoIST9+4J9Q14/vnf68J0LqSbVd+GYKTes25zDtmWFCs7P7zL7Q5iaLb4fdhQE/+7OTzXje7kdMF7fYvdOy5kz/N6oF2kSv6Lk1OMk10snI6oAcp19HI6IGeoHrVTDUoUaKd1KgeqEj3OqMGPcR4w6t6I8f0qptKEHNrdlUL1Mp661EVKMX2qGiB5rDdplSglsBOktUBDbK9LBWoPwAq6IBGAt0yClBXVKBOBSgfFWhYAeqJCtQdGmRdp94gPm6HBhWDXSqXVY77IifsGQ09Rw7poJzzLV58pZqjEV6nSqcM9AluIFdQgPq4veqSbekb3B4VUwFq5QeaVVPEWSPooPIMiTS/41lRpFDif75X6b27BMGzYJpUHxeDBGMn2C6Un5Zs5eOCvrfwVmqP4MNjGqC2Mr9vnRM9bBRw/qQVBd0jmN8zwaUq+OQJUy+u6xc8UsDEHxI8UEYzgGzRnCXRDFm6kWobEaCR16oxoHby6nfgH6e1Y2989fPJIs+Wgvb5erzM7hAaoM2EayRJU7RTIDmEO65ktUFo7CZoc69QFr6eNucY93YUactu0pGssbmDQgyw53J9b1TJhQD5yY7vSb/LnWZsMhVv70mWOCmVKhED6VvlGAysy7yxwyP3R4h+LZgkqlPLbT/McjzNKCd/IHzTV49mP1JWjl3NVY7NnYkw/X8iuOhb9FK1kCCcOCKTGmJnKBpBYyhg4D0BdCSgDnaSUIo3E7FEU2IcK3KoxyMGDTIraT3PsUUBamXCmy7NFDc0KJ6mrQEO5fLIZTS4+VzxlrBgi4oA1Ed9MMaE2BGCWinf0K6rQoQHJSndYY6urtKE1FkidYchvVXUFGictO8uTVtoBjRIbklFXVmlCdAccrRKukJREyBoaEvAL2l+SBkadN/hv3/n5b8ezfAc+BVivdKu+xG31zOmLij+zcXQlN++Phj1XCVsnYiKkjecglvum0e0QE99hgyp3z/CBglTzM/ezb1KZVWfzSpBiX+xeTyMnxLEU7RRjs8X1ynN97IClOJkIh94gx7ngCa9Xps4SeJtUlAbN4Vb6RkF8UncHbRHuZLBb/igaTHHtr9gEiZNgs65sblAmniLBqVx+JwU5dj2Uv4TuTFqrCzqtYhYFBC0AlzpovgscBGeIwL0c+nd2ZUxDFpiuPfTAOb4NcmhoxOTBK2uKta2kONoRYPsTsu7oHNadrxpokWK19Fw4CQjqJ+0I1APDJ/zsi4NPK1T0DNUqYyG1xwPNRfFNEU/fP6i9LzWon1dHD7QbmmvKezzR8F+BoJAkQiC74313jVaKOC1SSyOjIFkelqi6mBPOo/Zj05LRDQcA3ah9H7Q3ZwT7Fiv/u3vSOM4x+yweXdeY7a81xi5Fc9xx4B+oPqze91E8UKa0Hy76JhhKqD0rvrHFjB9T79IakLwAYBZnGdVnWNow0u9hGODHjIfGgJ3Sx0BNQ6hjebhHmRBSWxMraBnO8/DEyeLFt4lvNi0z6IEFsc0yHws8W9odK14RbVV6UltMGcRO/wuHVSk2tLrDANhqDUmHLrJN5s+7E7ip6kxqFxiw4tdngGspcKEjk5qGOps2BW/6A1yF5F0ZPBFnHYrT6kHC62LCoIT1DBwlP5Ej2tkZTrZKdL7QUBlcJ4CqWQoCCYUcp4oHkv3Egu6wGgTDW7kuaabyJbHgjolX+bfWcBD5Wc3a1UiiEkoP5ng2RQ/AI8TjrrGKImWOK3qYeVOrDhOqI+Bp5jBPq2MbHEk16E6TCBV5ON0wi1RdTYHZIU+DUUjT9/LenVJAfa5hYByO6oehgbDFZ9Pol2xHpAD6qZaQJqgu0gS356A1hlTD0MqTY836nJe/UBY3JqrFhrwNp+juzgj94BCgMTKzxAxlnu5vXBUVaNzU+CW88O8LgfsoIXlsbknVmelJgeP4caxt0zZVlai1ZHZPiENtXAtfGPgGK6Eu6zleVUi5gUj9wjtHnOuLzrL8anU2UmBkI/83eMtdoKIwBKY6a8Cgg1YYwclh5mOkSV7sdHVofu6TXw+7cxgW52yoGl/K2DO08l8DgxDywTeJycQ8wThidrInNFyvXiGPDRbDpmUgv8wGY2CpTdew3HhFfyjBXPxxA+ocO+8u3QL5B4xin9cCUvRUhfYE9kUGK9+bAvIZdjLXj76zLbD/ywHip46/BU6jtce3p7//OzRgX2Hn0uzwTTQ50109TFFPuGlAiO+c+hB2UxcUc457H06h0KMHI4kBJlLxlP03by1jCxIEefP+CbaiR7DxIYuPobdCTNx7Idb5b06/XEehkPcUN0bMDl3W2K0oLnSXtPQa49Cx2BRrkYw1htZiWaaU0xFDXcOxn/dcLSrzLEq2z6PvPg0LUD1y3rdirahc9A7Vin3FBy4jD9DxGh4wyhLSZfilYBAwDq+LM7+wZymygHlZJI6agzcXRbriUsoLejHoi4HicNLVgtKiJafm5fAzIsWneICdeJ1Q6AFuYlzssgfhUsSdSt+k5gjVre4pMYluTD4SrDHtw1Kr2PniF/rZB1RSZ1PMYLDqgITSDPm7bVXGYt9J6vWVJMLiE71Q6aWpmrc/yJ5c9frydGJn7zhaV63f8oMBrikSkz2uv+Gxe4d3v3m90MI7PEN2wa+wj/XmSTmq8r2GhjIfGQlfy4pb5aZUDzKI4MvkVEx3viiB42QFXp53QLJJkDUtUfousAoQSi7ocKtJdGD2qjsbR6nNiQiUAtl0a2coqaIQIPUM6D4Ihs5qEidWaMZG40alGSS8KLmQWxoUAuTuo9oTlJoUBctGSCzk+gmTYGQjDPD5pu90YLQyC1n168VLShvsz4n+C9RgNqCxVv9tpZzCAkaCZbFttq2jgcPB8IiyPKgk3XD8uZBD7xwx/McVbMzaPDEIz3mdDLDgdwTT6ia43ymztnascnvIM5SNUF+YuHJvwkciN7FLRzziwTXcK8kB+XJEtgDgvrRcTrfQgcpw/qgVjKffJxfUksV6NYyRKJU1Qd1EQnlJiJufVcgtLpnz3mubCwFYcu1r24ng+qcQDMFNjBg2zz3JwURWXOFTbG5/oL55IwuaJ5EMzD4Q8we2uqBhsQiiFCbpFpOD7RL0H1MXJTEZmE5HZDo9HtCptWzp/GmGiQ8Yu6U7fA84UgBEtXZr1Co9XRr4j2+YMGwSHWm2qgKlNK3BKk9NPEen9veEx91lEV1CXLQoKSMht/W8acpqwBxzaiWke3Wj8uMNNQ7YjVFyrBDJCQaoV6vs1cqywK3p7lFEyFBJ5SZNyPd64GKMg9pqI/z2IX0v3/XciQqUEEB6oto6Jp4jy+jA+rnVFMpShNZS63rcIJ6fvj3+PS+TyEm2r303+NbrgWKpwXxhf57fJ1aIHYgxjRAtN+v6XGYg433tKKge0g3dIsmiKqVutnUDIn337jnABvOqJofPDX27J+/J0zG5yVF9YKh3X5EpEphctjEhbT9ds4I0b5espddbiZZjptGyHZvJJpqc20WFB2ovvDatDtZ0LVus6BZ0CxoFhQedPfCxWRAffJOMn5rLKR+/cvCUzqgLThhmVoHr/Q3IP2i+KbmRB1J9N0plWMmWQtlfdL57JPeZ+sDG7b6fzYFQBn8VvUo9O2XqEDPf2Ec5u2XqXowvzDP+82SbBO2icPnbIwWAjdSErGfoZylhN5KgbywHIQq+qpQWhzz4w0/w3Cudd8WmBOiamAv6gY3Ed8KSyylIJy19fogJ2FJvGQvK/iBdd0NEm++16Oedi684NTq23MxOKqbSu7344C+lV87LWe0O3+/wQG1oAC9DY7cTi+l6vMTBBBULkOnLm6BSuNFPxBwNXkggOdRdjCHZ3UVdF7YMH3QpF8fWfBSmWmy8GyaLgjqhknIClzULQb59zINJa5uH3jc++8UWUV2nBYKcnBanSeNyUENVL18HL/10+6XMyX94SkSWVMbnX6uRfJCXA2KwSw86c/VPJsYsxr5TQ0mlbXOUO8G9EhBdViyWkOnu/CTE15JEKjOhKJPndbbprC0M4NSRiHIielH3BWRRKCPQVAaCrL+l63U6FzyCq42xP9HDBpzDXzYeNSfdRbkvoXhvYFXpVPdD1EZFFirI1KQZcR7wZNUTOMFAciuZmDWHgDFCbtQgqrAwCeMZM3vFgDZq2ABYJUeuklcxKzzRHbWcQHnjHZLCLLr13mPZNHqz1Vc+qw0BvAY3Y6BF4xByx/xTiO1D7S9GAS+RSrhLe95tLoyHjBACWjKiJ90ViUGBaq7XR9TchdbBy1GrEcuA4ooAlDVuVNnIo+C4nL/wlxQzfMPw9TbR3YGcXMqFwRArpjXQoCSA6Bt4YCu0N+TOAzdE1G4KgOdc7XEmr/8GGOo7CDmwELHs3/w970H4V45rgGacN2QxQdVje1lUEAZh+MK3h+uH0rBwxXwjWKLiMMNAWgGgCruVmT5xsqAHBtO7MtC1+vmvBu2wsI0IBk99mlQjrhZB+Q5bAEIvmGwmRHKxqlTH1woIAX1ggVv+UuBAS31whH4vij8Xra4t10uDbwqIABNuKAqqP8XgOz3gVNNoiu5EaORggWdH2TI3yRb+ef+M2MQtQhEQJhAyg5ZCsjQuNuFPGq4q/fGakTCf7OiA2WVPEz7aLdl1KJRi0YtGkEWAQAla4PxKoWGqwAAAABJRU5ErkJggg=="), this.logo.width = 207, this.logo.height = 243, this.progress = new u.TC, this.progress.beginFill(16717864), this.progress.drawRect(0, 263, 207, 4), this.progress.endFill(), this.progress.scale.x = 0, this.addChild(this.logo), this.addChild(this.progress), this._tweeenProgress = new k(this.progress, .5, {
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
                const pi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACHUExURUdwTF3XDV3aCl7YDVzQF13ZDGDXC1X/AFXUAF7YDGDYDl7XDV3YDV7YDV3XDF3XDF7YDFzYDF3XDF3YDV3YDF7XDV3YDF7XDV3XDF7WDF3ZC13YDVjSC13YDV7YDF7XDV3XDV/fD13XDV3YDVzUDmDbCF3YDV3XDF3YDF7ZDF3XDF3YDV7YDQaFSaEAAAAsdFJOUwB1MfkLKS0DBvQ1qNKtaMrsY9znVda5w6F5RIYXXYyCzxDiviQdmPBPPo5wBc1wAAAAA81JREFUWMO9WemaqjAMrbIvIosLMOi466jv/3x3pm1AoKUty+0v/WhDSU5OTlOEhMMyV1m69eNQ08LY36bZyrTQ4DHPNvd3a9w32XyQ1efpzR2nZ0/b1m75FozlTt0ndhC/JUYc2Gq7jZKaR/dRbhQ6Qnph5NG+5vUkUti1eyjXaZuX0Z5gvDZaOeXgynphXzkxOPJmHYMqBHspfxg+zPcEW3E9mOkbYrsrB8xKTDbAtLMSTf2mM9e5nN/yNV3w3Y2GlIYsk0aRndEwph3osBcUna4KNl2K+AV3Mxa1uziqJdMR1vH2nMp4qysyKfvpF3ka9CGWgKz9YuKMPIv6UdaOrGagznD677fas9MCv+3zv0VuEE/6TWgQfvCGlAWShfsGFkm66UMM6yQJazlgYZ7UzGH10cQ5ePhEc4TflQ2tvLMmrvSE6Xf1MokRkOiNN/0MFws/2NCshBre8AKNMDBrJHYta+ZjGDZrXsbFa4PQaFte0mTu62FjG7a4gSSEUXGer273cmKxzqFi3rgWSelxxeu0BwvLMVZ+ePNXVbsFraJJ830lEl5/P7aqdo+gPpbNJ1tI4kUfT+ggg05XZl6ff9Mw7AFi/QyS8NIW1ZjwLQJpR03n2htqN2TwoYVLkUnS7qzGNSCs7kz9gb9mRyrKTclwCoKNnVQ3UuM85dg9QTrnHazsEXQ8lItmx6IHwe+aCworZwnZDOzuuGctXD4RRtuFHSLGx77ALl+AXDBeEAZHwQm90wx7BHY7olLgwCI8TefEtgnU1VtCZut4BtI4hu+MlH3AUWmPxIZDjitucESsnuVwPOmGPXXFiRO8kmaWIMNdsJt2EwANns+DW0mMZ1J0TTiPLgTEQuHGT5Br/GnJCOm/jUjX0ATpSOlLWPn0Ag2GrVA40pTuIiEXvn5vxE2P8wcloU7azLVGG8EvxGRCabOb6FeN9oSEXSB6QWkKat0amVoOpUlUTLOPnsdFWiSfJco/pCCzwDFGWf6FgiXtKnBt9FfSVSSxSE12JFVjJbHEovCPNjTJ/gURhV+SMrbYJrJV8VPGTia8ab2Z4Kgw2eFmsuMYHCAHd4XJyfnjAEm9PBtquHXkne6QPllbASTkCI2Q5/9q3SBznGaTya1Cu7HbY9M19KZrQZZNU08Rdbon0l7Q5l0rZYrpi9q8H43pmXxjegaNaVvGW2O30tF0zf/KZb+mBUVlXl1XSAVlqgsWNNmVEGpeYoXNS6yw7yXWH+hlr93UKXyii0IS9kmuNmkcs7PTNuqcMxcNHuT6eB3+vsAJ17LXx/8A6kQS8eozSXoAAAAASUVORK5CYII=",
                    gi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACcUExURUdwTP8gIP8hIf8gIP8hIf8hIf8fH/8jI/8gIP8AAP8hIf8iIv8hIf8XF/8qKv8fH/8iIv8hIf8gIP8hIf8hIf8hIf8gIP8fH/8hIf8gIP8hIf8gIP8iIv8hIf8gIP8gIP8hIf8gIP8hIf8fH/8hIf8gIP8gIP8hIf8fH/8iIv8hIf8jI/8eHv8fH/8iIv8gIP8hIf8fH/8fH/8hIT5bvnQAAAAzdFJOUwDS9GXk5ykk4gODLM4LBjF4qXXWrrn6GDbcwY5pxl+kVPnuCInrJ59BHkUzEXA8TplYEFU3kgwAAAO2SURBVFjDxZlpm6IwDIADDFgGYXAQFTzxvubk//+31baIHL1g2e0nH0lfQpomaQogHLaz8g+xFq2TZB1p8cFfOTa0Hm9+qKeVoYf+WyvqFKXMgaYN2fainwpGf6Fuk80sSiVGNNuoaWuYT7PX4dY4W2MXwB1bZ2Mbrp8emoaC1pPcCKPww6oKWB/hKDfIRBLrTR9z5saVJXU15g+xqSfDtbRMfiBQ5TLI1NYsMXeVue1gLxbeDzLHXolEX6lkcJSz2zGgE1753nCgS+Z7sgvt+dQeB453eEPqnRcV37xQjx8ylbEpd/Crtpl+qaWHLJ2XMtbircyS+3TWJLDMODqtyLNFs5C1ILNrvM7Sm+ub66xXdopH9tu2efDekj1Ydg0SHwZt0gLxjWkpnmEvD9w2YBdvwlEhwNg4TiZOu/zoJDiKPnuzgb/Cb5t5fYwxnj7CrLP7VUwqidjYA8zcoO/4TZ8FobOZaj0+tqel5rnwzycGvT9cDSs8LL58d8/wXHLv5a5eMT7gaGN6hV1TrBLGpHboCbhpOi6uX8HKOHmFpXmagEy5/Tpnpn/uscSxfiKLTB+/lB9P8N/7PKpprKn1ZBYXoJ9HuaiwklJkNpd4WIQrPyxzAgVyDzG5cHp4wsf9R8wzZJnM4wLE2SYeMizBJPO5xBY3H7PXVSfmkgVcYlrdJi6t2yBLFnHBxqnIgR+2ievIQi418oJ48TdIkiW48E08eclZu4KSd7IMl6zekgSKL5AiS3HhC1fWEPCcokSW4hK3COAed1OBaEaW4kLvLrUDvRpUuWQhl4RyHbC0OO1nZDEXXCwIiRoYSYPXiqZAsqZAqouHJBdPU3A3U4pM3S1W2CCWFJluEKUtLUWmW1ochNATTIZMg5AwbKICSoJMw6Yo0KMSSEjOAr0gNaEKRkTOUhM/maIaiICcJVNu+ke1CD75kf45BQtiAHjkvGBhl1iIOT0jn3glFrMoRJwPZpOfisJGZSwlRydOGUteolp4U/KcU3jTw5jqUYGSXc5RoeHhBpMRcA43TY9jlpbujrzjWHaALAYMW5ivbgYrTemXDpCdHXm7O6R31lborhECm7/Vuqk0qp2WzSay/rrz79pj3TX0umtB5k1TRa9zRU3TR5s3UNopjiZq8+aN6USlMZ3QxrT3P1rpt/HTrPn/I2+ydLQUdNQvy8d1hdSibNQvWGQvnDq6EoLuLrGgs2s3rHU3F4Vk2flXmxdoMSZ+XHcZG/sTaD3w9fE82N1eoO+CueT18R9RSEyQxPodRgAAAABJRU5ErkJggg==",
                    mi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACcUExURUdwTAOr8AOr8AOr7wSr7wWr7wWt7QC//wCq4gSr8AOr7wSt8ASq7wSr8ASq7wCv7wSr8AKr8ASq7wOq7wSq8ACm8wan8gOq8AOr8AWq7wOr8AKr8QSr8ASr8ASr7wOs8Aaq8QSr8AOq7gSq8AOr8ACq7gOr8AOr8ASr7wWq7wSq8AOq7wSs7gOr7wSq7wen8AOr7wSr7wSs8gSr8NIVJa4AAAAzdFJOUwDS34T6MSwECfTYNXXu5hCuVrnLZxcpjs9jmVy9q6hEJ3pOeIkew5+kYGrFPoBwI5PqOwkKd94AAAPzSURBVFjDtVnblqowDC2IgAioeFe8DV5mdNSZ4///24GkCKhtgwx9cq2mMSQ7O2nKmHJZZi867DXdMwxP1/aHqGdarPJqbsLW7Wm1wk2zktaxfhMuffymbmvevylWf17eJ/ZRvxGWfrTLWTv1c6e9YDtdjYaxCns4Wk23gZfb9KclrG5P7ueM4DJ6FhhdAuMuMmlTvTDOnDjoiKQ6gywEY5I/Rloqv1SY0l6mZmsjtd5eCtvlWi28XqbA7qlEz1zSWdH8tnL4gbMcDQcesogcaivi/jhIjlhdjs52GWy2OeK7Qs3WAiUWnXLJ1FkoNH/ifqN8+jfw5Kd0d/AOsQwkNvVw7+s9yvrC0y9QN0L8Ht+l2CPi+SlTbMy37fvkvcUcfMxu5IdFlbKA2Bg/YBFQ7nSqKO5AEhqFHLCAJw1TzHgfP6Hje05w/hZrNsG6SR7NU/iKSHRi95Ojdk2MmwgEpjl7oF5ogsSxG0axHgVDUeoCAvwsfi7ICz5yrT1VOkek+Ru23fsfgcFdgRWvimoocgawmJ9++hyEm1Lk38LNV28wS30t4nWz4GUoXoGQ8xLEzHbc3zNeDKVg5rtrmYcTK5x9Dps/qFnk5X+wu85YTSN3MuiND9H+JGM5vRBJ5erKSRAQpkPnB4I7suKZXPHujoRL8mPPSlosdAXbJ9ubVJDuCQT9TdyhuBzolicD8fNC0PviWg+ubVkI6Ra5jdj5qvbEglJkogVkF3eQODwZcYeJxBxRPCPqvTryjM5g08Bmghi7D4/SebjYYpzk4Mk7j2czYEn294nMiTlUUNgBvziorABYOOw3Iw354q1w/6oMRCL2y1oyrso3wrzxU98KhgBgBuKEso8OXhIAb4MkM4iKoSVvURoPrtgjumKMsSYs7gpg46ta3JU0wC+DpxHhNlffYIpw2xMTZIUMQMlPdBo1pXezeFHwnjqtFAnRa1cDfRf+pWJOmyWJnsBVnOjLliYaKBJLSxZTWuzCN8q/at3LP7Vhsa5Dit6sYSG2WJeYuPtNoid0elO4wfuhqVScawpVbSyUfT536ar05ttYReOdrx8xG1Jukf3CZaypJBaCYrMwQJBebjh58xtZQDE4u4+5ai/jFdxoUzzsEi+Q+FXnOHzatwLqk4cLJB+QRPIaaSqTKHoa0Sgv6aT14pKejhXsKnpt51UY/mAQsnw1CKlvdMPMisOmgZBM6hqP1TfQq28EeR/G/vnQtLYxb32DaVZhlK6MTF3D/zhT0nGYsVQU5Wb2XEGir9wDy0n2wHIq+cDCansSYvU9YrHant3A6noeCjHstTxt8jiKHmPbrPKyzN7mcHJ+4z9oec7psCE9H/8H7cYwlvfLO08AAAAASUVORK5CYII=",
                    Ai = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAwUAAAFkBAMAAACDfIqcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURQ0NDf///////xEREREREf///////6uZoDAAAAAHdFJOU8whHsC+BBX9xfwkAAACKUlEQVR42u3RQQ2DUBRFwWcBBwULGGiDgc+CPZDg3wJpAA03IXMknKllH5TsaDV3ytZqMyHcWr0J4T4MGOgymEal+t0G31IqBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAgAEDBgwYMGDAgAEDBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgwYMGDAgAEDBgwYMGAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzE4M0G06hUj4GiMWCgv8FmQri1ZhPCtVr2QcmOdgK51GPO7vMFjAAAAABJRU5ErkJggg==";

                function vi(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }
                class bi extends A.xv {
                    constructor(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        super(t.toUpperCase(), function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? vi(Object(i), !0).forEach((function(e) {
                                    (0, n.Z)(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : vi(Object(i)).forEach((function(e) {
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
                class fi extends(Gt($.j)) {
                    constructor(t) {
                        var e;
                        super(), this.texture = null !== (e = this.game.loader.getAsset(t)) && void 0 !== e ? e : d.xE.EMPTY
                    }
                }

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
                class wi extends A.xv {
                    constructor(t) {
                        super(t, function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? yi(Object(i), !0).forEach((function(e) {
                                    (0, n.Z)(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : yi(Object(i)).forEach((function(e) {
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

                function xi(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }
                class Si extends A.xv {
                    constructor(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        super(t.toUpperCase(), function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? xi(Object(i), !0).forEach((function(e) {
                                    (0, n.Z)(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : xi(Object(i)).forEach((function(e) {
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
                const ki = class extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupFreeRound"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "icon", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContinue", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new Jt, this.content = new H.W2, this.icon = new fi(pi), this.icon.anchor.x = .5, this.title = new Si(this.game.i18n.t("PopupFreeRoundStartTitle")), this.title.anchor.x = .5, this.message = new wi("", {
                            wordWrap: !0,
                            wordWrapWidth: 600
                        }), this.message.anchor.x = .5, this.actionContinue = new bi(this.game.i18n.t("PopupActionContinue"), {
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
                const Ci = class extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupMaxLimit"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContinue", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new Jt(.7), this.content = new H.W2, this.background = new $.j(this.game.loader.getAsset(Ai)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new Si(this.game.i18n.t("PopupMaxLimitTitle")), this.title.anchor.x = .5, this.message = new wi(this.game.i18n.t("PopupMaxLimitMessage"), {
                            wordWrap: !0
                        }), this.message.anchor.x = .5, this.actionContinue = new bi(this.game.i18n.t("PopupActionReload"), {
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
                const Bi = class extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupNetworkError"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "icon", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionReload", void 0), (0, n.Z)(this, "_resolver", null), this.overlay = this.addChild(new Jt), this.content = this.addChild(new H.W2), this.icon = new fi(gi), this.icon.anchor.x = .5, this.title = new Si(this.game.i18n.t("PopupNetworkErrorTitle"), {
                            align: "center"
                        }), this.title.anchor.x = .5, this.message = new wi(this.game.i18n.t("PopupNetworkErrorMessage"), {
                            fontSize: 36
                        }), this.message.anchor.x = .5, this.actionReload = new bi(this.game.i18n.t("PopupActionReload"), {
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
                class Pi extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupQuickSpin"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionEnable", void 0), (0, n.Z)(this, "actionClose", void 0), (0, n.Z)(this, "escKey", void 0), (0, n.Z)(this, "enterKey", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new Jt(.7), this.content = new H.W2, this.background = new $.j(this.game.loader.getAsset(Ai)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new Si(this.game.i18n.t("PopupQuickSpinTitle")), this.title.anchor.x = .5, this.message = new wi(this.game.i18n.t("PopupQuickSpinMessage"), {
                            fontSize: 35,
                            wordWrap: !0,
                            wordWrapWidth: 600
                        }), this.message.anchor.x = .5, this.actionEnable = new bi(this.game.i18n.t("PopupActionEnable"), {
                            fill: 10066329
                        }), this.actionEnable.anchor.x = .5, this.game.interaction.out(this.actionEnable, (() => this.actionEnable.style.fill = 10066329)), this.game.interaction.hover(this.actionEnable, (() => this.actionEnable.style.fill = 16777215)), this.game.interaction.click(this.actionEnable, (() => this.hide(!0))), this.actionClose = new bi(this.game.i18n.t("PopupActionClose"), {
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
                const Ei = class extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupRestore"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "icon", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContinue", void 0), (0, n.Z)(this, "resolver", null), this.overlay = this.addChild(new Jt), this.content = this.addChild(new H.W2), this.icon = new fi(pi), this.icon.anchor.x = .5, this.message = new wi(this.game.i18n.t("PopupRestoreMessage"), {
                            wordWrap: !0,
                            wordWrapWidth: 320
                        }), this.message.anchor.x = .5, this.actionContinue = new bi(this.game.i18n.t("PopupActionContinue"), {
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
                const Ti = class extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupRiskNBuy"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionYes", void 0), (0, n.Z)(this, "actionNo", void 0), (0, n.Z)(this, "escKey", void 0), (0, n.Z)(this, "enterKey", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new Jt(.7), this.content = new H.W2, this.background = new $.j(this.game.loader.getAsset(Ai)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new Si("RISK FEATURE"), this.title.anchor.x = .5, this.message = new wi("", {
                            wordWrap: !0,
                            whiteSpace: "normal",
                            breakWords: !0
                        }), this.message.anchor.x = .5, this.actionYes = new bi(this.game.i18n.t("PopupActionYes"), {
                            fill: 16777215
                        }), this.actionYes.anchor.x = .5, this.game.interaction.out(this.actionYes, (() => this.actionYes.style.fill = 16777215)), this.game.interaction.hover(this.actionYes, (() => this.actionYes.style.fill = 10066329)), this.game.interaction.click(this.actionYes, (() => {
                            this.hide(!0)
                        })), this.actionNo = new bi(this.game.i18n.t("PopupActionNo"), {
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
                const Fi = class extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupSound"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "icon", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContainer", void 0), (0, n.Z)(this, "actionYes", void 0), (0, n.Z)(this, "actionNo", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new Jt, this.content = new H.W2, this.icon = new fi(mi), this.icon.anchor.x = .5, this.message = new wi(this.game.i18n.t("PopupSoundMessage"), {
                            wordWrap: !0
                        }), this.message.anchor.x = .5, this.actionContainer = new H.W2, this.actionYes = new bi(this.game.i18n.t("PopupActionYes"), {
                            fill: 16777215
                        }), this.game.interaction.out(this.actionYes, (() => this.actionYes.style.fill = 16777215)), this.game.interaction.hover(this.actionYes, (() => this.actionYes.style.fill = 10066329)), this.game.interaction.click(this.actionYes, (() => this.hide(!0))), this.actionNo = new bi(this.game.i18n.t("PopupActionNo"), {
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
                const Zi = class extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupSpendingBudget"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContinue", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new Jt(.7), this.content = new H.W2, this.background = new $.j(this.game.loader.getAsset(Ai)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new Si(this.game.i18n.t("PopupSpendingBudgetTitle")), this.title.anchor.x = .5, this.message = new wi(this.game.i18n.t("PopupSpendingBudgetMessage"), {
                            wordWrap: !0
                        }), this.message.anchor.x = .5, this.actionContinue = new bi(this.game.i18n.t("PopupActionContinue"), {
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
                const Oi = class extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupUnexpectedError"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContinue", void 0), (0, n.Z)(this, "_resolver", null), this.overlay = new Jt(.7), this.content = new H.W2, this.background = new $.j(this.game.loader.getAsset(Ai)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new Si(this.game.i18n.t("PopupUnexpectedErrorTitle")), this.title.anchor.x = .5, this.message = new wi(this.game.i18n.t("PopupUnexpectedErrorMessage")), this.message.anchor.x = .5, this.actionContinue = new bi(this.game.i18n.t("PopupActionReload"), {
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
                class Ri extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupWilds"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionEnable", void 0), (0, n.Z)(this, "actionClose", void 0), (0, n.Z)(this, "escKey", void 0), (0, n.Z)(this, "spaceKey", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new Jt(.7), this.content = new H.W2, this.background = new $.j(this.game.loader.getAsset(Ai)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new Si(this.game.i18n.t("PopupWildsTitle"), {
                            fontSize: 40,
                            wordWrap: !0,
                            wordWrapWidth: 600,
                            breakWords: "ja" === this.game.i18n.language || "cn" === this.game.i18n.language,
                            align: "center"
                        }), this.title.anchor.x = .5, this.message = new wi(this.game.i18n.t("PopupWildsMessage"), {
                            fontSize: 35,
                            wordWrap: !0,
                            wordWrapWidth: 600
                        }), this.message.anchor.x = .5, this.actionEnable = new bi(this.game.i18n.t("PopupActionYes"), {
                            fill: 10066329
                        }), this.actionEnable.anchor.x = .5, this.game.interaction.out(this.actionEnable, (() => this.actionEnable.style.fill = 10066329)), this.game.interaction.hover(this.actionEnable, (() => this.actionEnable.style.fill = 16777215)), this.game.interaction.click(this.actionEnable, (() => this.hide(!0))), this.actionClose = new bi(this.game.i18n.t("PopupActionNo"), {
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
                const Mi = class extends Dt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupZeroBalance"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContinue", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new Jt(.7), this.content = new H.W2, this.background = new $.j(this.game.loader.getAsset(Ai)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new Si(this.game.i18n.t("PopupZeroBalanceTitle")), this.title.anchor.x = .5, this.message = new wi(this.game.i18n.t("PopupZeroBalanceMessage"), {
                            wordWrap: !0
                        }), this.message.anchor.x = .5, this.actionContinue = new bi(this.game.i18n.t("PopupActionContinue"), {
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

                function Wi(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function _i(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Wi(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Wi(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                var Di = {
                        background_normal: .2,
                        background_free: .2,
                        bonus_start: .2,
                        bonus_end: .2,
                        big_win: 1,
                        giant_win: 1,
                        win_normal_1: .5,
                        win_normal_2: .5,
                        win_normal_3: .5,
                        win_free_1: .5,
                        win_free_2: .5,
                        win_free_3: .5,
                        spin_start: .5,
                        spin_fast: .5,
                        click_normal: .1,
                        wheel_stop: .8,
                        scatter_win: 1,
                        scatter_reel: 1,
                        wild_freespin: 1
                    },
                    Ii = {
                        get: t => Di[t],
                        set(t, e) {}
                    };
                const Li = [...[{
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
                    url: "assets/audio/backgroundCommon.mp3",
                    name: "backgroundNormal",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "background",
                            volume: Ii.get("background_normal"),
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
                            volume: Ii.get("background_free"),
                            loop: !0
                        }
                    }
                }, {
                    url: "assets/audio/backgroundBonusGame.mp3",
                    name: "backgroundBonusGame",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "background",
                            volume: .2,
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
                            volume: Ii.get("bonus_end"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/bonusStart.mp3",
                    name: "bonusStart",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "background",
                            volume: Ii.get("bonus_start"),
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
                            volume: Ii.get("click_normal"),
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
                            volume: Ii.get("spin_fast"),
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
                            volume: Ii.get("spin_start"),
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
                            volume: Ii.get("wheel_stop"),
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
                            volume: Ii.get("giant_win"),
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
                            volume: Ii.get("big_win"),
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
                            volume: Ii.get("win_normal_1"),
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
                            volume: Ii.get("win_normal_2"),
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
                            volume: Ii.get("win_normal_3"),
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
                            volume: Ii.get("win_free_1"),
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
                            volume: Ii.get("win_free_2"),
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
                            volume: Ii.get("win_free_3"),
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
                            volume: Ii.get("scatter_win"),
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
                            volume: Ii.get("scatter_reel"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/bonus/doll_cursor.mp3",
                    name: "dollHover",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: 1,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/bonus/doll1_win.mp3",
                    name: "dollWin1",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: 1,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/bonus/doll2_win.mp3",
                    name: "dollWin2",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: 1,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/bonus/doll3_win.mp3",
                    name: "dollWin3",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: 1,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/bonus/doll4_win.mp3",
                    name: "dollWin4",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: 1,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/bonus/doll5_win.mp3",
                    name: "dollWin5",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: 1,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/bonus/doll6_win.mp3",
                    name: "dollWin6",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: 1,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/bonus/doll7_win.mp3",
                    name: "dollWin7",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: 1,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/bonus/doll1_loss.mp3",
                    name: "dollLoss1",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: 1,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/bonus/doll2_loss.mp3",
                    name: "dollLoss2",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: 1,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/bonus/doll3_loss.mp3",
                    name: "dollLoss3",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: 1,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/bonus/doll4_loss.mp3",
                    name: "dollLoss4",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: 1,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/bonus/doll5_loss.mp3",
                    name: "dollLoss5",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: 1,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/bonus/doll6_loss.mp3",
                    name: "dollLoss6",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: 1,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/bonus/doll7_loss.mp3",
                    name: "dollLoss7",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: 1,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/bonus_symbol_win.mp3",
                    name: "bonusSymbolWin",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
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
                    url: "assets/images/bglf.jpg",
                    name: "bglf",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/bgpn.jpg",
                    name: "bgpn",
                    metadata: {
                        platform: ["desktop", "phone", "tablet"]
                    }
                }, {
                    url: "assets/images/bgpf.jpg",
                    name: "bgpf",
                    metadata: {
                        platform: ["desktop", "phone", "tablet"]
                    }
                }, {
                    url: "assets/images/bg_bonus.jpg",
                    name: "bgbn",
                    metadata: {
                        platform: ["desktop", "phone", "tablet"]
                    }
                }, {
                    url: "assets/images/bg_bonus_mobile.jpg",
                    name: "bgnf",
                    metadata: {
                        platform: ["desktop", "phone", "tablet"]
                    }
                }, {
                    url: "assets/images/logo.png",
                    name: "logo",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/bonusgame/logo_bonus.png",
                    name: "bonusLogo",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/paylines.png",
                    name: "payline",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/winBoard.png",
                    name: "boardWin",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/grid.png",
                    name: "grid",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/decoration_top.png",
                    name: "frame",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/decoration_top_mobile.png",
                    name: "frameMobile",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/lines/line.png",
                    name: "line",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/lines/dot_normal.png",
                    name: "dot_normal",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/lines/dot_active.png",
                    name: "dot_active",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/freespin/bonus_button.png",
                    name: "bonus_button",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/freespin/textFreeSpinLeft.png",
                    name: "textFreeSpinLeft",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/freespin/textLastFreeSpin.png",
                    name: "textLastFreeSpin",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/freespin/textExtraFreeSpin.png",
                    name: "textExtraFree",
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
                    url: "assets/bitmapFont/bonusFont.xml",
                    name: "BonusFont",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
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
                    url: "assets/images/bonusgame/VB_big.png",
                    name: "VB_big",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/bigWinLight/skeleton.json",
                    name: "effectBigWinLight",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/bigWinCoins/skeleton.json",
                    name: "effectBigWinCoins",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/bg_static/skeleton.json",
                    name: "bgEffect",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/topdeco/skeleton.json",
                    name: "topFrameEffect",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/spin_static/skeleton.json",
                    name: "spinButtonEffect",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/winbox/skeleton.json",
                    name: "effectFrame",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/spin_back/skeleton.json",
                    name: "spinBackAnimation",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/spin_front/skeleton.json",
                    name: "spinFrontAnimation",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/spin_effect/skeleton.json",
                    name: "spinEffect",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/topdeco_static/skeleton.json",
                    name: "topDecoStatic",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/topdeco_win/skeleton.json",
                    name: "topDecoWin",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/spin_btn/skeleton.json",
                    name: "effectSpin",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/symbols/common_stick/skeleton.json",
                    name: "stickEffect",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/symbols/bonus/skeleton.json",
                    name: "bonusEffect",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/symbols/wild/skeleton.json",
                    name: "wildEffect",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/symbols/scatter/skeleton.json",
                    name: "scatterEffect",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/bonusGame/bonus_hanged/skeleton.json",
                    name: "hangedEffect",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/bonusGame/bonus_needle/skeleton.json",
                    name: "needleEffect",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/bonusGame/bonus_cross/skeleton.json",
                    name: "crossEffect",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/bonusGame/bonus_headcut/skeleton.json",
                    name: "headCutEffect",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/bonusGame/doll_beast/skeleton.json",
                    name: "beastEffect",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/bonusGame/doll_torn/skeleton.json",
                    name: "tornEffect",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/bonusGame/doll_acid/skeleton.json",
                    name: "acidEffect",
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
                    url: "assets/images/bonusgame/bonusgame.json",
                    name: "bonus",
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
                    url: "assets/images/bonusgame/text/bonusText.json",
                    name: "bonusText",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }];
                var ji = 40;
                const Ni = {
                    application: {
                        view: "game",
                        width: 1920,
                        height: 1080
                    },
                    colors: {
                        primary: 16771346,
                        primaryHover: 16774819,
                        secondary: 2099970,
                        secondaryHover: 4731433
                    },
                    lines: {
                        points: [{
                            line: 6,
                            position: [{
                                x: -80,
                                y: ji
                            }, {
                                x: -80,
                                y: ji
                            }]
                        }, {
                            line: 26,
                            position: [{
                                x: -80,
                                y: 80
                            }, {
                                x: -80,
                                y: 80
                            }]
                        }, {
                            line: 2,
                            position: [{
                                x: -80,
                                y: 120
                            }, {
                                x: -80,
                                y: 120
                            }]
                        }, {
                            line: 30,
                            position: [{
                                x: -80,
                                y: 160
                            }, {
                                x: -80,
                                y: 160
                            }]
                        }, {
                            line: 4,
                            position: [{
                                x: -80,
                                y: 200
                            }, {
                                x: -80,
                                y: 200
                            }]
                        }, {
                            line: 20,
                            position: [{
                                x: -80,
                                y: 240
                            }, {
                                x: -80,
                                y: 240
                            }]
                        }, {
                            line: 0,
                            position: [{
                                x: -80,
                                y: 280
                            }, {
                                x: -80,
                                y: 280
                            }]
                        }, {
                            line: 24,
                            position: [{
                                x: -80,
                                y: 320
                            }, {
                                x: -80,
                                y: 320
                            }]
                        }, {
                            line: 8,
                            position: [{
                                x: -80,
                                y: 360
                            }, {
                                x: -80,
                                y: 360
                            }]
                        }, {
                            line: 36,
                            position: [{
                                x: -80,
                                y: 400
                            }, {
                                x: -80,
                                y: 400
                            }]
                        }, {
                            line: 33,
                            position: [{
                                x: -80,
                                y: 440
                            }, {
                                x: -80,
                                y: 440
                            }]
                        }, {
                            line: 9,
                            position: [{
                                x: -80,
                                y: 480
                            }, {
                                x: -80,
                                y: 480
                            }]
                        }, {
                            line: 1,
                            position: [{
                                x: -80,
                                y: 520
                            }, {
                                x: -80,
                                y: 520
                            }]
                        }, {
                            line: 21,
                            position: [{
                                x: -80,
                                y: 560
                            }, {
                                x: -80,
                                y: 560
                            }]
                        }, {
                            line: 5,
                            position: [{
                                x: -80,
                                y: 600
                            }, {
                                x: -80,
                                y: 600
                            }]
                        }, {
                            line: 31,
                            position: [{
                                x: -80,
                                y: 640
                            }, {
                                x: -80,
                                y: 640
                            }]
                        }, {
                            line: 29,
                            position: [{
                                x: -80,
                                y: 680
                            }, {
                                x: -80,
                                y: 680
                            }]
                        }, {
                            line: 3,
                            position: [{
                                x: -80,
                                y: 720
                            }, {
                                x: -80,
                                y: 720
                            }]
                        }, {
                            line: 27,
                            position: [{
                                x: -80,
                                y: 760
                            }, {
                                x: -80,
                                y: 760
                            }]
                        }, {
                            line: 7,
                            position: [{
                                x: -80,
                                y: 800
                            }, {
                                x: -80,
                                y: 800
                            }]
                        }, {
                            line: 11,
                            position: [{
                                x: 1517,
                                y: 40
                            }, {
                                x: 1517,
                                y: 40
                            }]
                        }, {
                            line: 14,
                            position: [{
                                x: 1517,
                                y: 80
                            }, {
                                x: 1517,
                                y: 80
                            }]
                        }, {
                            line: 18,
                            position: [{
                                x: 1517,
                                y: 120
                            }, {
                                x: 1517,
                                y: 120
                            }]
                        }, {
                            line: 25,
                            position: [{
                                x: 1517,
                                y: 160
                            }, {
                                x: 1517,
                                y: 160
                            }]
                        }, {
                            line: 35,
                            position: [{
                                x: 1517,
                                y: 200
                            }, {
                                x: 1517,
                                y: 200
                            }]
                        }, {
                            line: 37,
                            position: [{
                                x: 1517,
                                y: 240
                            }, {
                                x: 1517,
                                y: 240
                            }]
                        }, {
                            line: 16,
                            position: [{
                                x: 1517,
                                y: 280
                            }, {
                                x: 1517,
                                y: 280
                            }]
                        }, {
                            line: 12,
                            position: [{
                                x: 1517,
                                y: 320
                            }, {
                                x: 1517,
                                y: 320
                            }]
                        }, {
                            line: 22,
                            position: [{
                                x: 1517,
                                y: 360
                            }, {
                                x: 1517,
                                y: 360
                            }]
                        }, {
                            line: 39,
                            position: [{
                                x: 1517,
                                y: 400
                            }, {
                                x: 1517,
                                y: 400
                            }]
                        }, {
                            line: 38,
                            position: [{
                                x: 1517,
                                y: 440
                            }, {
                                x: 1517,
                                y: 440
                            }]
                        }, {
                            line: 17,
                            position: [{
                                x: 1517,
                                y: 480
                            }, {
                                x: 1517,
                                y: 480
                            }]
                        }, {
                            line: 13,
                            position: [{
                                x: 1517,
                                y: 520
                            }, {
                                x: 1517,
                                y: 520
                            }]
                        }, {
                            line: 23,
                            position: [{
                                x: 1517,
                                y: 560
                            }, {
                                x: 1517,
                                y: 560
                            }]
                        }, {
                            line: 32,
                            position: [{
                                x: 1517,
                                y: 600
                            }, {
                                x: 1517,
                                y: 600
                            }]
                        }, {
                            line: 34,
                            position: [{
                                x: 1517,
                                y: 640
                            }, {
                                x: 1517,
                                y: 640
                            }]
                        }, {
                            line: 28,
                            position: [{
                                x: 1517,
                                y: 680
                            }, {
                                x: 1517,
                                y: 680
                            }]
                        }, {
                            line: 19,
                            position: [{
                                x: 1517,
                                y: 720
                            }, {
                                x: 1517,
                                y: 720
                            }]
                        }, {
                            line: 15,
                            position: [{
                                x: 1517,
                                y: 760
                            }, {
                                x: 1517,
                                y: 760
                            }]
                        }, {
                            line: 10,
                            position: [{
                                x: 1517,
                                y: 800
                            }, {
                                x: 1517,
                                y: 800
                            }]
                        }]
                    },
                    stickyWild: {
                        positions: [
                            [
                                [128, 129],
                                [128, 395],
                                [128, 660]
                            ],
                            [
                                [394, 129],
                                [394, 395],
                                [394, 660]
                            ],
                            [
                                [660, 129],
                                [660, 395],
                                [660, 660]
                            ],
                            [
                                [926, 129],
                                [926, 395],
                                [926, 660]
                            ],
                            [
                                [1192, 129],
                                [1192, 395],
                                [1192, 660]
                            ]
                        ],
                        animation: {
                            name: "win",
                            textureName: "stickyWild"
                        }
                    },
                    scatterWaiting: {
                        positions: [
                            [
                                [132, 132],
                                [132, 398],
                                [132, 664]
                            ],
                            [
                                [398, 133],
                                [398, 398],
                                [398, 664]
                            ],
                            [
                                [665, 132],
                                [665, 398],
                                [665, 664]
                            ],
                            [
                                [931, 132],
                                [931, 398],
                                [931, 664]
                            ],
                            [
                                [1196, 132],
                                [1196, 398],
                                [1196, 664]
                            ]
                        ]
                    },
                    Background: {
                        TextureNormal: "bg",
                        TextureFree: "free_bg",
                        Logo: {
                            Texture: "logo",
                            X: 960,
                            Y: 5
                        },
                        PaylineLeft: {
                            Texture: "payline",
                            X: 130,
                            Y: 540
                        },
                        PaylineRight: {
                            Texture: "payline",
                            X: 1790,
                            Y: 540
                        }
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
                        x: 281,
                        y: 208,
                        width: 281,
                        height: 198
                    },
                    slot: {
                        size: [5, 4],
                        symbolsPositions: [
                            [
                                [0, -208],
                                [0, 2],
                                [0, 208],
                                [0, 416],
                                [0, 624],
                                [0, 832]
                            ],
                            [
                                [291, -208],
                                [291, 2],
                                [291, 208],
                                [291, 416],
                                [291, 624],
                                [291, 832]
                            ],
                            [
                                [582, -208],
                                [582, 2],
                                [582, 208],
                                [582, 416],
                                [582, 624],
                                [582, 832]
                            ],
                            [
                                [873, -208],
                                [873, 2],
                                [873, 208],
                                [873, 416],
                                [873, 624],
                                [873, 832]
                            ],
                            [
                                [1164, -208],
                                [1164, 2],
                                [1164, 208],
                                [1164, 416],
                                [1164, 624],
                                [1164, 832]
                            ]
                        ],
                        layout: {
                            default: [{
                                textureAtlas: "symbols_static",
                                assetName: "scat (skull)",
                                hasFrame: !0,
                                animation: {
                                    blink: !0,
                                    assetName: "scatterEffect",
                                    effectName: {
                                        normal: "win",
                                        free: "win_freespins"
                                    }
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "wild (cross)",
                                hasFrame: !0,
                                animation: {
                                    blink: !0,
                                    assetName: "wildEffect",
                                    effectName: "win"
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "bonus (doll)",
                                hasFrame: !0,
                                animation: {
                                    blink: !0,
                                    assetName: "bonusEffect",
                                    effectName: "win"
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "man",
                                hasFrame: !0,
                                animation: {
                                    blink: !0,
                                    assetName: "stickEffect",
                                    effectName: "win"
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "girl",
                                hasFrame: !0,
                                animation: {
                                    blink: !0,
                                    assetName: "stickEffect",
                                    effectName: "win"
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "knife",
                                hasFrame: !0,
                                animation: {
                                    blink: !0,
                                    assetName: "stickEffect",
                                    effectName: "win"
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "a",
                                hasFrame: !0,
                                animation: {
                                    blink: !1,
                                    assetName: "",
                                    effectName: ""
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "k",
                                hasFrame: !0,
                                animation: {
                                    blink: !1,
                                    assetName: "",
                                    effectName: ""
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "q",
                                hasFrame: !0,
                                animation: {
                                    blink: !1,
                                    assetName: "",
                                    effectName: ""
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "j",
                                hasFrame: !0,
                                animation: {
                                    blink: !1,
                                    assetName: "",
                                    effectName: ""
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "Ten",
                                hasFrame: !0,
                                animation: {
                                    blink: !1,
                                    assetName: "",
                                    effectName: ""
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "Nine",
                                hasFrame: !0,
                                animation: {
                                    blink: !1,
                                    assetName: "",
                                    effectName: ""
                                }
                            }]
                        },
                        width: 1455,
                        height: 822,
                        delayAuto: 200,
                        delayFree: 200,
                        waitFlush: 1500,
                        rewardTimeout: 1e3
                    },
                    winFeature: {
                        bigWinMultiplier: 50,
                        giantWinMultiplier: 100
                    }
                };
                var Ui = {
                        reward_flush: 1500,
                        reward_sticky: 1e3,
                        reward_scatter: 2e3,
                        before_spin_auto: 200,
                        afterFreeSpins: 700,
                        beforeFreeSpins: 300,
                        inFreeSpins: 200
                    },
                    zi = {
                        get: t => Ui[t],
                        set(t, e) {}
                    };
                const Gi = {
                    init() {
                        function t(t) {
                            Lt.store.set("bank:win", ot()(t, "totalWin", 0)), Lt.store.set("bank:coins", ot()(t, "coins", 0)), Lt.store.set("bank:balance", ot()(t, "balance", 0))
                        }
                        Lt.store.set("bank:win", 0), Lt.store.set("bank:coins", 0), Lt.store.set("bank:balance", 0), Lt.action.on("bank:reset", (function() {
                            Lt.store.set("bank:win", 0), Lt.store.set("bank:coins", 0)
                        })), Lt.action.on("bank:reduceBalance", (function(t) {
                            var e = Lt.store.get("bank:balance") - t;
                            Lt.store.set("bank:win", 0), Lt.store.set("bank:coins", 0), Lt.store.set("bank:balance", e)
                        })), Lt.server.on("response:init", t), Lt.server.on("response:spin", t)
                    }
                };
                var Vi;
                ! function(t) {
                    t.Basic = "basic", t.Auto = "auto", t.Respin = "respins", t.Freespin = "freespin"
                }(Vi || (Vi = {}));
                var Qi = new class {
                    constructor() {
                        (0, n.Z)(this, "currentFeature", void 0)
                    }
                    set(t) {
                        this.currentFeature = t
                    }
                    isBasic() {
                        return this.currentFeature.includes(Vi.Basic)
                    }
                    isAuto() {
                        return this.currentFeature === Vi.Auto
                    }
                    isRespin() {
                        return this.currentFeature === Vi.Respin
                    }
                    isFreespin() {
                        return this.currentFeature === Vi.Freespin
                    }
                };
                const Hi = {
                        init() {
                            Lt.store.set("bonusGame:bonus", 0), Lt.store.set("bonusGame:loss", 0), Lt.store.set("bonusGame:win", 0), Lt.store.set("bonusGame:hasBonus", 0), Lt.store.set("free:left", -1), Lt.server.on("response:bonus", (function(t) {
                                var e = ot()(t, "feature");
                                Lt.store.set("bank:win", ot()(t, "totalWin", 0)), Lt.store.set("bank:balance", ot()(t, "balance", 0)), Lt.store.set("reward:fsReels", ot()(t, "fsReels", [])), Lt.store.set("reward:nReels", ot()(t, "nReels", []));
                                var i = ot()(t, "freespins.left", -1);
                                Lt.store.set("free:left", i);
                                var s = ot()(t, "bonus.freespins", 0) > 0;
                                Lt.store.set("free:isStart", s), Lt.store.set("free:isFree", "freespin" === e), Lt.store.set("reward:feature", e), s && Qi.set("freespin")
                            }))
                        }
                    },
                    Yi = {
                        init() {
                            function t(t) {
                                var e = ot()(t, "freespins.win", 0),
                                    i = ot()(t, "feature", ""),
                                    s = Lt.store.get("free:left", 0),
                                    o = ot()(t, "freespins.left", -1),
                                    n = ot()(t, "freespins.played", -1);
                                Lt.store.set("free:win", e), Lt.store.set("free:coins", ot()(t, "freespins.coins", 0)), Lt.store.set("free:left", o), Lt.store.set("free:played", n), Lt.store.set("free:count", o + n), Lt.store.set("free:isStart", 0 === n), Lt.store.set("free:isEnd", 0 === o), Lt.store.set("free:isFree", "freespin" === i), 0 !== n && (Lt.store.set("free:winAdditional", o > s), Lt.store.set("free:winAdditionalCount", ot()(t, "scatters.freespins", 0)))
                            }
                            Lt.store.set("free:win", 0), Lt.store.set("free:coins", 0), Lt.store.set("free:count", 0), Lt.store.set("free:left", -1), Lt.store.set("free:played", -1), Lt.store.set("free:isStart", !1), Lt.store.set("free:isEnd", !1), Lt.store.set("free:isFree", !1), Lt.store.set("free:winAdditional", !1), Lt.store.set("free:winAdditionalCount", 0), Lt.server.on("response:init", t), Lt.server.on("response:spin", t)
                        }
                    };
                var Xi = [
                        [4, 2, 3, 7],
                        [6, 7, 0, 8],
                        [4, 10, 11, 2],
                        [10, 2, 10, 11],
                        [8, 9, 3, 10]
                    ],
                    Ki = [
                        [9, 10, 5, 11, 11, 7],
                        [2, 3, 5, 6, 2, 7],
                        [7, 7, 8, 9, 0, 4],
                        [7, 4, 2, 5, 8, 9],
                        [10, 4, 2, 5, 6, 7]
                    ];
                const qi = {
                        init() {
                            function t(t) {
                                var e = ot()(t, "totalWin", 0),
                                    i = ot()(t, "scatters", !1),
                                    s = ot()(t, "overlayWilds", []);
                                Lt.store.set("reward:win", e), Lt.store.set("reward:lines", ot()(t, "lines", [])), Lt.store.set("reward:reels", ot()(t, "reels", t.error ? Xi : [])), Lt.store.set("reward:nReels", ot()(t, "nReels", t.error ? Ki : [])), Lt.store.set("reward:fsReels", ot()(t, "fsReels", [])), Lt.store.set("reward:preReels", ot()(t, "preSpin.reels", [])), Lt.store.set("reward:feature", ot()(t, "feature")), Lt.store.set("reward:scatters", i), Lt.store.set("reward:stickyWilds", s), Lt.store.set("reward:isWin", e > 0 || i || s.length > 0), Lt.store.set("reward:numberWinSymbol", ot()(t, "winSyms", 0)), Lt.store.set("reward:bonus", ot()(t, "bonus", !1));
                                var o = ot()(t, "feature", Vi.Basic);
                                Lt.store.set("reward:feature", o)
                            }
                            Lt.store.set("reward:win", 0), Lt.store.set("reward:isWin", !1), Lt.store.set("reward:lines", []), Lt.store.set("reward:reels", []), Lt.store.set("reward:nReels", []), Lt.store.set("reward:fsReels", []), Lt.store.set("reward:preReels", []), Lt.store.set("reward:scatters", !1), Lt.store.set("reward:stickyWilds", []), Lt.store.set("reward:numberWinSymbol", 0), Lt.store.set("reward:feature", "basic"), Lt.store.set("reward:bonus", []), Lt.store.set("reward:feature", ""), Lt.server.on("response:init", t), Lt.server.on("response:spin", t), Lt.action.on("free:stop", (function() {
                                Lt.store.set("reward:stickyWilds", [])
                            }))
                        }
                    },
                    Ji = {
                        init() {
                            Lt.store.set("spin:isSpin", !1), Lt.store.set("spin:isFast", !1), Lt.action.on("spin:start", (function() {
                                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                Lt.store.get("spin:isSpin") ? t && !Lt.store.get("spin:isFast") && Lt.config.get("quickSpin.available", !0) && (Lt.store.set("spin:isFast", !0), Lt.action.emit("spin:fast")) : (Lt.store.set("spin:isSpin", !0), Lt.state.goTo("spin"))
                            })), Lt.action.on("state:stop_exit", (function() {
                                Lt.store.set("spin:isSpin", !1), Lt.store.set("spin:isFast", !1)
                            }))
                        }
                    },
                    $i = {
                        init() {
                            Yi.init(), Hi.init(), Ji.init(), qi.init(), Gi.init()
                        }
                    };
                class ts extends O {
                    constructor(t, e, i) {
                        super(t, e, i), (0, n.Z)(this, "backgroundBonusGame", void 0), (0, n.Z)(this, "backgroundFree", void 0), (0, n.Z)(this, "backgroundNormal", void 0), (0, n.Z)(this, "bigWin", void 0), (0, n.Z)(this, "bonusEnd", void 0), (0, n.Z)(this, "bonusStart", void 0), (0, n.Z)(this, "bonusSymbolWin", void 0), (0, n.Z)(this, "clickNormal", void 0), (0, n.Z)(this, "currentDollSound", void 0), (0, n.Z)(this, "currentWinSound", void 0), (0, n.Z)(this, "dollHover", void 0), (0, n.Z)(this, "dollLoss1", void 0), (0, n.Z)(this, "dollLoss2", void 0), (0, n.Z)(this, "dollLoss3", void 0), (0, n.Z)(this, "dollLoss4", void 0), (0, n.Z)(this, "dollLoss5", void 0), (0, n.Z)(this, "dollLoss6", void 0), (0, n.Z)(this, "dollLoss7", void 0), (0, n.Z)(this, "dollWin1", void 0), (0, n.Z)(this, "dollWin2", void 0), (0, n.Z)(this, "dollWin3", void 0), (0, n.Z)(this, "dollWin4", void 0), (0, n.Z)(this, "dollWin5", void 0), (0, n.Z)(this, "dollWin6", void 0), (0, n.Z)(this, "dollWin7", void 0), (0, n.Z)(this, "giantWin", void 0), (0, n.Z)(this, "scatterReel", void 0), (0, n.Z)(this, "scatterWin", void 0), (0, n.Z)(this, "spinFast", void 0), (0, n.Z)(this, "spinStart", void 0), (0, n.Z)(this, "wheelStop", void 0), (0, n.Z)(this, "winFree1", void 0), (0, n.Z)(this, "winFree2", void 0), (0, n.Z)(this, "winFree3", void 0), (0, n.Z)(this, "winNormal1", void 0), (0, n.Z)(this, "winNormal2", void 0), (0, n.Z)(this, "winNormal3", void 0), this.backgroundNormal = this.get("backgroundNormal"), this.backgroundFree = this.get("backgroundFree"), this.backgroundBonusGame = this.get("backgroundBonusGame"), this.bonusStart = this.get("bonusStart"), this.bonusEnd = this.get("bonusEnd"), this.winNormal1 = this.get("win_normal_1"), this.winNormal2 = this.get("win_normal_2"), this.winNormal3 = this.get("win_normal_3"), this.winFree1 = this.get("win_free_1"), this.winFree2 = this.get("win_free_2"), this.winFree3 = this.get("win_free_3"), this.bigWin = this.get("bigWin"), this.giantWin = this.get("giantWin"), this.spinStart = this.get("spinStart"), this.spinFast = this.get("spinFast"), this.clickNormal = this.get("clickNormal"), this.wheelStop = this.get("wheelStop"), this.dollHover = this.get("dollHover"), this.dollWin1 = this.get("dollWin1"), this.dollWin2 = this.get("dollWin2"), this.dollWin3 = this.get("dollWin3"), this.dollWin4 = this.get("dollWin4"), this.dollWin5 = this.get("dollWin5"), this.dollWin6 = this.get("dollWin6"), this.dollWin7 = this.get("dollWin7"), this.dollLoss1 = this.get("dollLoss1"), this.dollLoss2 = this.get("dollLoss2"), this.dollLoss3 = this.get("dollLoss3"), this.dollLoss4 = this.get("dollLoss4"), this.dollLoss5 = this.get("dollLoss5"), this.dollLoss6 = this.get("dollLoss6"), this.dollLoss7 = this.get("dollLoss7"), this.scatterWin = this.get("scatterWin"), this.scatterReel = this.get("scatterReel"), this.bonusSymbolWin = this.get("bonusSymbolWin"), this.currentWinSound = null, this.currentDollSound = null, this._setupEvents()
                    }
                    _setupEvents() {
                        Lt.action.on("sound:win", (t => {
                            var e = Qi.isFreespin();
                            this.currentWinSound = this["".concat(e ? "winFree" : "winNormal").concat(t)], this.currentWinSound.play()
                        })), Lt.action.on("sound:bigWin", (() => {
                            this.bigWin.play()
                        })), Lt.action.on("sound:giantWin", (() => {
                            this.bigWin.stop(), this.giantWin.play()
                        })), Lt.action.on("sound:scatterWin", (() => {
                            this.scatterWin.play()
                        })), Lt.action.on("sound:scatterWheel", (() => {
                            this.scatterReel.play()
                        })), Lt.action.on("state:spin_enter", this._onSpinEnter, this), Lt.action.on("state:finish_enter", this._onFinishEnter, this), Lt.action.on("sound:spinFast", this._onFastSpin, this), Lt.action.on("wheel:stop_down", this._onWheelStop, this), Lt.action.on("sound:click", this.click, this), Lt.action.on("sound:free_start", this._onFreeStart, this), Lt.action.on("sound:free_stop", this._onFreeStop, this), Lt.action.on("free:select_start", this._onSelectFreeStart, this), Lt.action.on("free:select_stop", this._onSelectFreeStop, this), Lt.action.on("bonusGame:start", this._onBonusGameStart, this), Lt.action.on("bonusGame:end", this._onBonusGameStop, this), Lt.action.on("doll:hover", this._onDollHover, this), Lt.action.on("doll:win", (t => {
                            this.currentDollSound = this["dollWin".concat(t + 1)], this.currentDollSound.play()
                        })), Lt.action.on("doll:lose", (t => {
                            this.currentDollSound = this["dollLoss".concat(t + 1)], this.currentDollSound.play()
                        })), Lt.action.on("sound:bonusSymbolWin", (() => {
                            this.bonusSymbolWin.play()
                        }))
                    }
                    stopBigWin() {
                        this.bigWin.stop(), this.giantWin.stop()
                    }
                    _onSpinEnter() {
                        this.currentWinSound && (this.currentWinSound.stop(), this.currentWinSound = null);
                        var t = Qi.isFreespin(),
                            e = Lt.autoPlay.enabled;
                        t || e || this.spinStart.play()
                    }
                    _onWheelStop() {
                        Lt.store.get("spin:isFast", !1) || this.wheelStop.play()
                    }
                    click() {
                        this.clickNormal.play()
                    }
                    _onFastSpin() {
                        this.spinFast.playing() || this.spinFast.play()
                    }
                    _onFreeStart() {
                        this.currentWinSound && (this.currentWinSound.stop(), this.currentWinSound = null), this.backgroundNormal.stop(), this.backgroundBonusGame.stop(), this.bonusStart.once("end", (() => {
                            this.backgroundFree.fade(1)
                        })), this.bonusStart.play()
                    }
                    _onFreeStop() {
                        this.currentWinSound && (this.currentWinSound.stop(), this.currentWinSound = null), this.backgroundFree.stop(), this.bonusEnd.once("end", (() => {
                            this.backgroundNormal.fade(1)
                        })), this.bonusEnd.play()
                    }
                    _onBonusGameStart() {
                        this.currentWinSound && (this.currentWinSound.stop(), this.currentWinSound = null), this.backgroundNormal.stop(), this.backgroundBonusGame.fade(.2, .2)
                    }
                    _onBonusGameStop() {
                        var t = Lt.store.get("free:isFree", !1);
                        this.currentWinSound && (this.currentWinSound.stop(), this.currentWinSound = null), this.backgroundBonusGame.stop(), t ? (this.bonusStart.once("end", (() => {
                            this.backgroundFree.fade(1)
                        })), this.bonusStart.play()) : this.backgroundNormal.fade(1)
                    }
                    _onSelectFreeStart() {
                        this.bonusStart.stop(), this.backgroundFree.playing() || this.backgroundFree.fade(2)
                    }
                    _onSelectFreeStop() {
                        this.bonusEnd.stop(), this.backgroundNormal.playing() || this.backgroundNormal.fade(2)
                    }
                    _onFinishEnter() {
                        this.currentWinSound && (this.currentWinSound.stop(), this.currentWinSound = null)
                    }
                    _onDollHover() {
                        this.dollHover.play()
                    }
                }
                class es extends Vt {
                    init() {}
                    enter() {
                        this.game.action.emit("state:finish_enter"), this.game.applyNetPosition()
                    }
                    exit() {
                        this.game.action.emit("state:finish_exit")
                    }
                }
                class is extends es {}
                class ss extends Vt {
                    init() {}
                    enter() {
                        this.game.action.emit("state:ready_enter")
                    }
                    exit() {
                        this.game.action.emit("state:ready_exit")
                    }
                }
                class os extends ss {}
                class ns extends Vt {
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
                        return i.coins > 0 && (null === (t = this.stopItemWin) || void 0 === t ? void 0 : t.checked) && (this.stopItemWin.type === ye || (null === (e = this.game.bigWin) || void 0 === e ? void 0 : e.available(i.coins)) && this.game.bigWin.type(i.coins) >= this.stopItemWin.type)
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
                class as extends ns {}
                class hs extends Vt {
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
                class rs extends hs {}
                class ls extends Vt {
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
                class ds extends ls {}
                class cs extends Vt {
                    constructor() {
                        super(...arguments), (0, n.Z)(this, "fastStopLayout", void 0)
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
                class us extends cs {}
                const ps = JSON.parse('{"AutoPlaySettingsStopCondButtonReset":"Reset","AutoPlaySettingsStopCondCheckboxBalance":"If Balance Increases By","AutoPlaySettingsStopCondCheckboxBalanceDrop":"If Balance Decreases By","AutoPlaySettingsStopCondCheckboxFeatureBonus":"If Bonus Game Won","AutoPlaySettingsStopCondCheckboxFeatureFreeSpin":"If Free Spins Won","AutoPlaySettingsStopCondCheckboxWin":"If Win","AutoPlaySettingsStopCondCheckboxWinAny":"Any","AutoPlaySettingsStopCondCheckboxWinBig":"Big","AutoPlaySettingsStopCondCheckboxWinGiant":"Giant","AutoPlaySettingsStopCondTitle":"STOP AUTOPLAY","AutoPlaySettingsSubTitle":"Setup your best autoplay conditions","AutoPlaySettingsTitle":"AUTOPLAY","BetSettingsLines":"LINES\\n<value>%s</value>","BetSettingsTitle":"BET SETTINGS","BetSettingsWays":"WAYS\\n<value>%s</value>","ControlsDesktopAutoPlayStart":"AUTOPLAY","ControlsDesktopAutoPlayStop":"STOP AUTO","ControlsDesktopBalance":"BALANCE%s\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopBet":"BET %s\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopFreeRoundLeft":"FREE ROUND\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopFreeRoundWin":"TOTAL WIN %s\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopFreeRoundWinEmpty":"TOTAL WIN","ControlsDesktopFreeSpinsLast":"FREE SPINS LEFT\\n<delimiter> \\n</delimiter><value>LAST</value>","ControlsDesktopFreeSpinsLeft":"FREE SPINS LEFT\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopLines":"LINES\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopMaxBet":"MAX BET","ControlsDesktopTotalWin":"TOTAL WIN %s\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopWays":"WAYS\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopWin":"WIN %s\\n<delimiter> \\n</delimiter><value>%s</value>","Currency":"CURRENCY\\n<value>%s</value>","GameRulesAdvancedAutoPlayContent":"Advanced autoplay settings are available in the section with standard autoplay settings. You can set the conditions for stopping the game in automatic mode:\\n\\n<bold>if win any/big/giant</bold> - autoplay will be stopped after any/big/giant win\\n\\n<bold>if balance increased by 10%-100%</bold> - autoplay will stop when your balance increases by the selected %\\n\\n<bold>if balance decreased by 10%-100%</bold> - autoplay will be interrupted when your balance decreases by the selected %\\n\\nClick <bold>Reset</bold> to reset all autoplay settings","GameRulesAdvancedAutoPlayTitle":"Advanced Autoplay Settings","GameRulesAutoPlayContent":"Select the number of game rounds to play in automatic mode by pressing the button with the corresponding number, or press the button with the infinity sign to play in automatic mode until the autoplay is manually canceled or until the balance runs out. Your choice must be confirmed with the Start button.","GameRulesAutoPlayTitle":"Autoplay Options","GameRulesBestExperience":"Please note that you can only play one game at a time on each account. Therefore, you cannot play a game on more than one device, or multiple games on the same device simultaneously. Doing so may lead to various errors.\\n\\nFor the best gaming experience, we recommend using the latest version of the relevant software.","GameRulesGeneralRTP":"Theoretical RTP: %s %","GameRulesGeneralTitle":"General Info","GameRulesInterfaceAutoPlay":"Click to go to autoplay menu","GameRulesInterfaceBalance":"Here is your current balance","GameRulesInterfaceBetLevel":"Your current bet and a button to go to the bet size selection menu","GameRulesInterfaceContent":"All buttons of the game interface are listed below. Please note that the appearance and location of the buttons may differ slightly depending on the format in which the game is launched and what feature it is currently in.","GameRulesInterfaceMenu":"Click to access the game menu","GameRulesInterfaceQuickSpin":"Click to enable/disable quick spin","GameRulesInterfaceSound":"Turn game sound on/off and adjust sound volume","GameRulesInterfaceSpin":"Click to start the game round at the current bet. In the desktop version of the game, the button may have an alternative design","GameRulesInterfaceTitle":"Game Interface","GameRulesInterfaceWin":"Here is the win in the current game round","GameRulesSettingsContent":"To go to the settings menu, click the cogwheel icon in the game menu","GameRulesSettingsContentItemBackgroundSound":"<bold>Background music</bold> - turns on/off background music in the game","GameRulesSettingsContentItemFullscreen":"<bold>Full Screen</bold> - enables/disables full screen mode","GameRulesSettingsContentItemGameSound":"<bold>Game sound</bold> - turns on/off the sound effects of the game","GameRulesSettingsContentItemQuickSpin":"<bold>Quick Spin</bold> - turns on/off the function of the accelerated mode of rotation and stop of the reels","GameRulesSettingsTitle":"Game Settings","GameSettingsBackgroundSounds":"Background Music","GameSettingsFullscreen":"Full Screen","GameSettingsGameSounds":"Game Sounds","GameSettingsIntroScreen":"Intro Screen","GameSettingsLeftHand":"Left Hand Mode","GameSettingsQuickSpin":"Quick Spin","GameSettingsRiskFeatureCheckbox":"Risk&Buy","GameSettingsTitle":"GAME SETTINGS","IntroScreenHideButtonText":"Don\'t show next time","IntroScreenLoaderText":"LOADING","MenuDesktopButtonFullscreen":"FULLSCREEN","MenuDesktopButtonHome":"HOME","MenuDesktopButtonPaytable":"PAYTABLE","MenuDesktopButtonQuickspin":"QUICKSPIN","MenuDesktopButtonSound":"SOUND","MenuGameRules":"GAME INFORMATION","MenuMobileBetSettingsTitle":"BET SETTINGS","MenuMobileGameSettingsLeftHand":"Left Hand Mode","MenuMobileGameSettingsQuickspin":"Quick Spin","MenuMobileGameSettingsSounds":"Game Sounds","MenuMobileGameSettingsTitle":"GAME SETTINGS","MenuMobilePaytableTitle":"PAYTABLE","MenuPaytable":"PAYTABLE","MenuSettings":"SETTINGS","NetPositionTitle":"Net Position: %s","PopupActionClose":"Close","PopupActionContinue":"Continue","PopupActionEnable":"Enable","PopupActionNo":"No","PopupActionReload":"Reload","PopupActionYes":"Yes","PopupFreeRoundEndMessage":"The next spins will use your bonus amount","PopupFreeRoundEndTitle":"Free Rounds Finished","PopupFreeRoundLastMessage":"Congratulations, you have\\n last free round","PopupFreeRoundStartMessage":"Congratulations, you have\\n%s free rounds","PopupFreeRoundStartTitle":"Free Rounds Bonus","PopupFreeSpinsButton":"CLICK ANYWHERE TO CONTINUE","PopupFreeSpinsStopDescription":"<value>%s FREE SPINS</value> PLAYED","PopupFreeSpinsStopDescriptionNew":"%s Free Spins played","PopupFreeSpinsTitle":"CONGRATULATIONS","PopupFreeSpinsTitleNew":"CONGRATULATIONS! YOU WON","PopupFreeSpinsTitleRestore":"IN-GAME FEATURE RESTORED!","PopupFreeSpinsWinRestore":"<value>%s FREE SPINS</value> LEFT","PopupFreeSpinsWinRestoreLast":"<value>LAST FREE SPIN</value> LEFT","PopupFreeSpinsWinStart":"YOU WON <value>%s FREE SPINS</value>","PopupFreeSpinsWinStartNew":"%s FREE SPINS","PopupFreeSpinsWinStop":"YOU WON <value>%s</value>","PopupFreeSpinsWinStopNew":"<value>%s</value>","PopupMaxLimitMessage":"Bet exceeded max bet limit.","PopupMaxLimitTitle":"Max limit","PopupNetworkErrorMessage":"Please reload the game.","PopupNetworkErrorTitle":"Connection Lost","PopupQuickSpinMessage":"It seems you prefer to play a bit faster.\\nWould you like to enable Quick Spin?","PopupQuickSpinTitle":"Quick Spin","PopupRestoreMessage":"In-game feature restored!","PopupRiskNBuyContentBuy":"Buy in a feature for %s\\nthat will play at the bet %s","PopupRiskNBuyContentRisk":"Take the risk of winning %s\\nto get a feature at the bet %s","PopupRiskNBuyTitleBuy":"BUY IN FEATURE","PopupRiskNBuyTitleRisk":"RISK FEATURE","PopupSoundMessage":"Play with sound?","PopupSpendingBudgetMessage":"You have reached your play limit.\\nWelcome back later.","PopupSpendingBudgetTitle":"Play limit","PopupUnexpectedErrorMessage":"An unexpected situation.\\nReload the page.","PopupUnexpectedErrorTitle":"Unexpected situation","PopupZeroBalanceMessage":"Please change your BET LEVEL or top up your balance","PopupZeroBalanceTitle":"Insufficient funds","RiskNBuyBuyFor":"BUY FOR %s","RiskNBuyFreeSpinsText":"FREE SPINS","RiskNBuyOnBet":"ON BET %s","RiskNBuySubHeader":"RISK YOUR WIN\\nTO PLAY","StatusBarMobileBalance":"BALANCE %s\\n","StatusBarMobileBet":"BET %s\\n","StatusBarMobileFreeLast":"FREE SPINS LEFT\\n<value>LAST</value>","StatusBarMobileFreeLeft":"FREE SPINS LEFT\\n<value>%s</value>","StatusBarMobileFreePlayed":"FREE SPINS PLAYED\\n","StatusBarMobileFreeRoundLeft":"FREE ROUND\\n","StatusBarMobileTotalWin":"TOTAL WIN %s\\n","StatusBarMobileWin":"WIN %s\\n","TimeElapsedTitle":"Time Elapsed: %s"}'),
                    gs = JSON.parse('{"BonusAutoplayText":"autoplay activated","BonusEndClickText":"CLICK ANYWHERE TO CONTINUE","BonusVariablesTextExtra":"extra","BonusVariablesTextMulti":"multi","BonusVariablesTextTotal":"total %s","BonusVariablesTextWin":"win %s","PaytableSectionBetLinesContent1":"Only the highest win per bet line is paid. All prizes are for combinations left to right, beginning from the leftmost reel. The payout values are based on the currently selected bet and change proportionally with its changes. The game is played with fixed bet lines. Malfunction voids all pays and plays.","PaytableSectionBetLinesTitle":"Bet Lines","PaytableSectionBonusContent1":"Bonus symbols can appear in main game only. 3, 4 or 5 Bonus symbols are paid as a line bet times the bet multiplier. 3, 4 or 5 Bonus symbols on a pay line, from the leftmost reel to right award the Voodoo Rite Bonus feature. The Voodoo Rite Bonus feature can be won only once per spin.","PaytableSectionBonusGameContent1":"The player picks Voodoo Dolls to reveal the following prizes: coins wins, multiplier and Free Spins. The Loss symbols end the bonus if revealed.\\n\\nAll the coin wins are summed up with each other and with the winnings received at the start of the bonus. The multiplier acts on all coins wins received and can be revealed once per bonus feature. The Free Spins prize can be revealed once per bonus feature in amount up to 25 Free Spins. The Free Spins feature will start as the Voodoo Rite bonus ends and will act on general Free Spins feature rules.","PaytableSectionBonusGameTitle":"The Voodoo Rite Bonus Feature","PaytableSectionBonusTitle":"Bonus symbol","PaytableSectionFreeContent1":"Free spins play automatically at the bet at which they were won. All payments are made in accordance with the paytable.\\n\\nAdditional Free Spins can be won in the current free spins series.","PaytableSectionFreeTitle":"Free Spins feature","PaytableSectionPayoutTitle":"Symbol payout values","PaytableSectionScatterContent1":"Scatter symbols can appear in both the main game and Free Spins. Winnings of 3 and more Scatter symbols are paid as total bet times the bet multiplier. 3, 4 or 5 Scatter symbols award 10 free games.","PaytableSectionScatterTitle":"Scatter symbol","PaytableSectionWildContent1":"Wild symbols substitute all symbols except for Scatter and Bonus symbols. Wild symbols can appear in both main game and Free Spins on all reels.","PaytableSectionWildTitle":"Wild symbol"}');

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
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ms(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                var vs = As(As({}, ps), gs),
                    bs = [0, 0, 0];
                class fs extends j.PY {
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
                                    d = this.slotContainers[a];
                                if (l) {
                                    var c = null,
                                        u = l.color;
                                    switch (l.type) {
                                        case W.AttachmentType.Region:
                                            var p = l.region;
                                            if (p) {
                                                r.currentMesh && (r.currentMesh.visible = !1, r.currentMesh = null, r.currentMeshId = void 0, r.currentMeshName = void 0);
                                                var g = p;
                                                if (r.currentSpriteName && r.currentSpriteName === g.name) r.currentSpriteName !== g.name || r.hackRegion || this.setSpriteRegion(l, r.currentSprite, p);
                                                else {
                                                    var m = g.name;
                                                    if (r.currentSprite && (r.currentSprite.visible = !1), r.sprites = r.sprites || {}, void 0 !== r.sprites[m]) r.sprites[m].visible = !0;
                                                    else {
                                                        var A = this.createSprite(r, l, m);
                                                        d.addChild(A)
                                                    }
                                                    r.currentSprite = r.sprites[m], r.currentSpriteName = m
                                                }
                                            }
                                            d.transform.setFromMatrix(r.bone.matrix), r.currentSprite.color ? c = r.currentSprite.color : (bs[0] = o[0] * r.color.r * u.r, bs[1] = o[1] * r.color.g * u.g, bs[2] = o[2] * r.color.b * u.b, r.currentSprite.tint = it.rgb2hex(bs)), r.currentSprite.blendMode = r.blendMode;
                                            break;
                                        case W.AttachmentType.Mesh:
                                            if (r.currentSprite) {
                                                r.currentSprite.visible = !1, r.currentSprite = null, r.currentSpriteName = void 0;
                                                var v = new X.Transform;
                                                v._parentID = -1, v._worldID = d.transform._worldID, d.transform = v
                                            }
                                            var b = l.id;
                                            if (!r.currentMeshId || r.currentMeshId !== b) {
                                                var f = b;
                                                if (r.currentMesh && (r.currentMesh.visible = !1), r.meshes = r.meshes || {}, void 0 !== r.meshes[f]) r.meshes[f].visible = !0;
                                                else {
                                                    var y = this.createMesh(r, l);
                                                    d.addChild(y)
                                                }
                                                r.currentMesh = r.meshes[f], r.currentMeshName = l.name, r.currentMeshId = f
                                            }
                                            l.computeWorldVerticesOld(r, r.currentMesh.vertices), r.currentMesh.color ? c = r.currentMesh.color : (bs[0] = o[0] * r.color.r * u.r, bs[1] = o[1] * r.color.g * u.g, bs[2] = o[2] * r.color.b * u.b, r.currentMesh.tint = it.rgb2hex(bs)), r.currentMesh.blendMode = r.blendMode;
                                            break;
                                        case W.AttachmentType.Clipping:
                                            r.currentGraphics || (this.createGraphics(r, l), d.addChild(r.clippingContainer), d.addChild(r.currentGraphics)), this.updateGraphics(r, l), d.alpha = 1, d.visible = !0;
                                            continue;
                                        default:
                                            d.visible = !1;
                                            continue
                                    }
                                    if (d.visible = !0, c) {
                                        var w = r.color.r * u.r,
                                            x = r.color.g * u.g,
                                            S = r.color.b * u.b;
                                        c.setLight(o[0] * w + n[0] * (1 - w), o[1] * x + n[1] * (1 - x), o[2] * S + n[2] * (1 - S)), r.darkColor ? (w = r.darkColor.r, x = r.darkColor.g, S = r.darkColor.b) : (w = 0, x = 0, S = 0), c.setDark(o[0] * w + n[0] * (1 - w), o[1] * x + n[1] * (1 - x), o[2] * S + n[2] * (1 - S))
                                    }
                                    d.alpha = r.color.a
                                } else d.visible = !1
                            }
                            for (var k = this.skeleton.drawOrder, C = null, B = null, P = 0, E = k.length; P < E; P++) {
                                var T = i[k[P].data.index],
                                    F = this.slotContainers[k[P].data.index];
                                if (B || null !== F.parent && F.parent !== this && (F.parent.removeChild(F), F.parent = this), T.currentGraphics && T.getAttachment()) B = T.clippingContainer, C = T.getAttachment(), B.children.length = 0, this.children[P] = F, C.endSlot === T.data && (C.endSlot = null);
                                else if (B) {
                                    var Z = this.tempClipContainers[P];
                                    Z || ((Z = this.tempClipContainers[P] = this.newContainer()).visible = !1), this.children[P] = Z, F.parent = null, B.addChild(F), C.endSlot == T.data && (B.renderable = !0, B = null, C = null)
                                } else this.children[P] = F
                            }
                        }
                    }
                    createGraphics(t, e) {
                        if (!this.spineData.useRectangleMask) return super.createGraphics(t, e);
                        var i = this.newGraphics();
                        if (i.clear(), i.beginFill(16777215, 1), e.worldVerticesLength <= 8) {
                            var s = new X.Rectangle(0, 0, 0, 0);
                            i.drawRect(s.x, s.y, s.width, s.height)
                        } else {
                            var o = new X.Polygon;
                            i.drawPolygon(o)
                        }
                        return i.renderable = !1, t.currentGraphics = i, t.clippingContainer = this.newContainer(), t.clippingContainer.mask = t.currentGraphics, i
                    }
                    updateGraphics(t, e) {
                        if (!this.spineData.useRectangleMask) return super.updateGraphics(t, e);
                        var i = t.currentGraphics.geometry,
                            s = i.graphicsData[0].shape;
                        if (s instanceof X.Polygon) {
                            var o = s.points,
                                n = e.worldVerticesLength;
                            o.length = n, e.computeWorldVertices(t, 0, n, o, 0, 2)
                        } else {
                            var a = [...e.vertices],
                                h = e.worldVerticesLength;
                            a.length = h, e.computeWorldVertices(t, 0, h, a, 0, 2);
                            var r = a[4] - a[0],
                                l = a[5] - a[1],
                                d = r > 0 ? a[0] : a[0] - Math.abs(r),
                                c = l > 0 ? a[1] : a[1] - Math.abs(l);
                            s.x = d, s.y = c, s.width = Math.abs(r), s.height = Math.abs(l)
                        }
                        i.invalidate()
                    }
                }
                class ys extends(Gt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "backgroundLTextureFree", void 0), (0, n.Z)(this, "backgroundLTextureNormal", void 0), (0, n.Z)(this, "backgroundPTextureFree", void 0), (0, n.Z)(this, "backgroundPTextureNormal", void 0), (0, n.Z)(this, "backgroundTextureLandscape", void 0), (0, n.Z)(this, "backgroundTexturePortrait", void 0), (0, n.Z)(this, "bgAnimation", void 0), (0, n.Z)(this, "featureBackground", void 0), (0, n.Z)(this, "logo", void 0), (0, n.Z)(this, "topDeco", void 0), this.backgroundLTextureNormal = this.game.loader.getAsset("bgln"), this.backgroundLTextureFree = this.game.loader.getAsset("bglf"), this.backgroundPTextureNormal = this.game.loader.getAsset("bgpn"), this.backgroundPTextureFree = this.game.loader.getAsset("bgpf"), this.topDeco = new fs(this.game.loader.getAsset("topDecoStatic")), this.topDeco.x = 160, this.topDeco.play("static", !0), this.background = new $.j(this.backgroundLTextureNormal), this.backgroundTextureLandscape = this.backgroundLTextureNormal, this.backgroundTexturePortrait = this.backgroundPTextureNormal, this.background = new $.j(this.backgroundTextureLandscape), this.background.name = "background", this.featureBackground = new $.j(this.backgroundLTextureFree), this.featureBackground.name = "featureBackground", this.featureBackground.alpha = 0, this.logo = new $.j(this.game.loader.getAsset("logo")), this.logo.name = "logo", this.logo.anchor.x = .5, this.bgAnimation = new fs(this.game.loader.getAsset("bgEffect")), this.bgAnimation.name = "bgAnimation", this.bgAnimation.play("animation", !0), this.addChild(this.background), this.addChild(this.featureBackground), this.addChild(this.bgAnimation), this.addChild(this.topDeco), this.setupEvents()
                    }
                    setupEvents() {
                        this.game.action.on("state:setup_enter", (() => {
                            this.featureBackground.texture = this.game.device.portrait && !this.game.device.desktop ? this.backgroundPTextureFree : this.backgroundLTextureFree, this.game.store.get("free:isFree", !1) && (this.featureBackground.alpha = 1)
                        })), this.game.action.on("free:select_start", (() => {
                            this.featureBackground.texture = this.game.device.portrait && !this.game.device.desktop ? this.backgroundPTextureFree : this.backgroundLTextureFree, k.fromTo(this.featureBackground, .5, {
                                pixi: {
                                    alpha: 0
                                }
                            }, {
                                pixi: {
                                    alpha: 1
                                }
                            })
                        })), this.game.action.on("free:select_stop", (() => {
                            k.fromTo(this.featureBackground, .5, {
                                pixi: {
                                    alpha: 1
                                }
                            }, {
                                pixi: {
                                    alpha: 0
                                }
                            })
                        }))
                    }
                    resize() {
                        this.game.device.portrait && !this.game.device.desktop ? (this.scale.set(.5625), this.background.texture = this.backgroundTexturePortrait, this.background.width = (2 * this.game.viewport.paddingX + this.game.viewport.width) / .5625, this.background.height = (2 * this.game.viewport.paddingY + this.game.viewport.height) / .5625, this.background.position.set(-this.game.viewport.paddingX / .5625, 0), this.featureBackground.texture = this.backgroundPTextureFree, this.featureBackground.width = (2 * this.game.viewport.paddingX + this.game.viewport.width) / .5625, this.featureBackground.height = (2 * this.game.viewport.paddingY + this.game.viewport.height) / .5625, this.featureBackground.position.set(-this.game.viewport.paddingX / .5625, 0), this.logo.scale.set(1), this.logo.x = this.game.viewport.width / 2 + 40, this.logo.y = 130, this.topDeco.y = 220) : (this.scale.set(1), this.background.texture = this.backgroundTextureLandscape, this.background.width = this.game.viewport.width, this.background.height = this.game.viewport.height, this.background.position.set(0, 0), this.featureBackground.texture = this.backgroundLTextureFree, this.featureBackground.width = this.game.viewport.width, this.featureBackground.height = this.game.viewport.height, this.featureBackground.position.set(0, 0), this.logo.scale.set(1), this.logo.y = 0, this.logo.x = this.game.viewport.width / 2 + 40, this.topDeco.y = 0)
                    }
                }
                class ws extends(Gt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "autoplayText", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "desk", void 0), (0, n.Z)(this, "endText", void 0), (0, n.Z)(this, "hint", void 0), (0, n.Z)(this, "logo", void 0), (0, n.Z)(this, "step", void 0), (0, n.Z)(this, "stepValue", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "titleType", void 0), this.background = this.addChild(new $.j(this.game.loader.getAsset("bgbn"))), this.desk = this.addChild(new $.j(this.game.loader.getAsset("bonus").bonus_table_desktop)), this.desk.anchor.x = .5, this.title = this.addChild(new $.j(this.game.loader.getAsset("bonusText").bonusTitle)), this.title.anchor.set(.5), this.titleType = this.title.addChild(new $.j(this.game.loader.getAsset("bonusText").bonusTitleBegin)), this.titleType.anchor.set(.5), this.titleType.scale.set(.8), this.titleType.y = this.title.height / 1.7, this.step = this.title.addChild(new $.j(this.game.loader.getAsset("bonusText").bonusStep)), this.step.anchor.set(.5), this.step.position.set(-24, 2 * this.title.height), this.stepValue = this.step.addChild(new v.Xz("", {
                            fontName: "WinFont"
                        })), this.stepValue.scale.set(.4), this.stepValue.anchor.set(.5), this.stepValue.position.set(this.step.width / 2, 22), this.logo = this.addChild(new $.j(this.game.loader.getAsset("bonusLogo"))), this.hint = this.addChild(new $.j(this.game.loader.getAsset("bonusText").bonusHint)), this.hint.anchor.x = .5, this.endText = this.addChild(new Ee("", {
                            default: {
                                fontFamily: "PT Sans Narrow Bold",
                                fill: "#ffffff",
                                fontSize: 58,
                                align: "center",
                                wordWrap: !0
                            }
                        })), this.endText.text = this.game.i18n.t("BonusEndClickText").toUpperCase(), this.endText.alpha = 0, this.endText.anchor.x = .5, this.autoplayText = this.addChild(new Ee("", {
                            default: {
                                fontFamily: "PT Sans Narrow Bold",
                                fill: "#ffffff",
                                fontSize: 40
                            }
                        })), this.autoplayText.text = this.game.i18n.t("BonusAutoplayText"), this.autoplayText.alpha = 0, this.autoplayText.anchor.x = .5
                    }
                    show(t) {
                        this.titleType.texture = t > 1 ? this.game.loader.getAsset("bonusText").bonusTitleContinue : this.game.loader.getAsset("bonusText").bonusTitleBegin, this.stepValue.text = "".concat(t), this.game.autoPlay.enabled && (this.autoplayText.alpha = 1)
                    }
                    open(t, e) {
                        "LOSS" === e || t > 7 ? (this.titleType.texture = this.game.loader.getAsset("bonusText").bonusTitleEnd, this.game.store.get("free:left") > 0 ? this.hint.texture = this.game.loader.getAsset("bonusText").bonusContinueFree : this.hint.texture = this.game.loader.getAsset("bonusText").bonusContinueBasic, k.fromTo(this.title, .5, {
                            pixi: {
                                alpha: 0
                            }
                        }, {
                            pixi: {
                                alpha: 1
                            }
                        })) : (this.titleType.texture = this.game.loader.getAsset("bonusText").bonusTitleContinue, k.fromTo(this.title, .5, {
                            pixi: {
                                alpha: 0
                            }
                        }, {
                            pixi: {
                                alpha: 1
                            }
                        }), k.fromTo(this.step, .5, {
                            pixi: {
                                alpha: 0
                            }
                        }, {
                            pixi: {
                                alpha: 1
                            }
                        })), this.stepValue.text = "".concat(t)
                    }
                    hide() {
                        k.fromTo(this.title, .5, {
                            pixi: {
                                alpha: 1
                            }
                        }, {
                            pixi: {
                                alpha: 0
                            }
                        }), k.fromTo(this.step, .5, {
                            pixi: {
                                alpha: 1
                            }
                        }, {
                            pixi: {
                                alpha: 0
                            }
                        })
                    }
                    refresh() {
                        this.titleType.texture = this.game.loader.getAsset("bonusText").bonusTitleBegin, this.step.alpha = 1, this.stepValue.text = 1, this.hint.texture = this.game.loader.getAsset("bonusText").bonusHint, this.endText.alpha = 0, this.autoplayText.alpha = 0
                    }
                    resize() {
                        this.endText.setTagStyle("default", {
                            wordWrapWidth: this.game.viewport.width
                        }), this.game.device.desktop || this.game.device.landscape ? (this.background.texture = this.game.loader.getAsset("bgbn"), this.background.position.set(0, 0), this.desk.texture = this.game.loader.getAsset("bonus").bonus_table_desktop, this.desk.scale.set(1), this.desk.position.set(this.background.width / 2, 0), this.title.position.set(this.background.width / 2, 120), this.logo.x = 0, this.hint.position.set(this.desk.x, 990), this.endText.position.set(this.desk.x, 910), this.autoplayText.position.set(this.desk.x, 1030)) : (this.background.texture = this.game.loader.getAsset("bgnf"), this.background.position.set(-this.game.viewport.paddingX, 0), this.desk.texture = this.game.loader.getAsset("bonus").bonus_table, this.desk.scale.set(.8), this.desk.position.set(550, 70), this.title.position.set(550, 400), this.logo.x = 440, this.hint.position.set(530, 1400), this.endText.position.set(530, 1500), this.autoplayText.position.set(530, 1450))
                    }
                }
                var xs = [{
                    name: "crossEffect",
                    pos: [300, 150]
                }, {
                    name: "tornEffect",
                    pos: [340, 500]
                }, {
                    name: "needleEffect",
                    pos: [510, 700]
                }, {
                    name: "hangedEffect",
                    pos: [800, 810]
                }, {
                    name: "beastEffect",
                    pos: [1190, 780]
                }, {
                    name: "headCutEffect",
                    pos: [1320, 450]
                }, {
                    name: "acidEffect",
                    pos: [1310, 150]
                }];
                class Ss extends(Gt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "description", void 0), (0, n.Z)(this, "value", void 0), this.alpha = 0, this.scale.set(.8), this.value = this.addChild(new v.Xz("", {
                            fontName: "WinFont"
                        })), this.value.scale.set(.5), this.description = this.addChild(new $.j(this.game.loader.getAsset("bonusText").bonusFreeWin)), this.description.anchor.y = .5
                    }
                    show(t, e) {
                        var i = arguments,
                            s = this;
                        return (0, o.Z)((function*() {
                            var o = i.length > 2 && void 0 !== i[2] && i[2];
                            "COIN" === e ? (s.value.text = "".concat(s.game.i18n.currency({
                                bitmap: !0
                            })).concat(s.game.helpers.toMoney(t.value)), s.description.alpha = 0) : "FREE" === e ? (s.value.text = o ? t.value : t.freespins, s.description.alpha = 1, s.description.texture = s.game.loader.getAsset("bonusText").bonusFreeWin) : "MUL" === e ? (s.value.text = "x".concat(t.value), s.description.alpha = 0) : (s.value.text = "", s.description.alpha = 1, s.description.texture = s.game.loader.getAsset("bonusText").bonusLoss), s.description.position.set(s.value.width + 10, -10), k.fromTo(s, .5, {
                                pixi: {
                                    alpha: 0
                                }
                            }, {
                                pixi: {
                                    alpha: 1
                                }
                            })
                        }))()
                    }
                    refresh() {
                        this.alpha = 0
                    }
                }
                class ks extends(Gt(H.W2, {
                    preventResize: !0
                })) {
                    constructor(t, e) {
                        super(), (0, n.Z)(this, "animation", void 0), (0, n.Z)(this, "innerText", void 0), (0, n.Z)(this, "onPress", void 0), (0, n.Z)(this, "opened", void 0), this.onPress = new(x()), this.game.interaction.click(this, (() => this.onPress.dispatch(e))), this.opened = !0, this.cursor = "pointer", this.interactive = !1, this.alpha = 0, this.animation = this.addChild(new fs(this.game.loader.getAsset(t))), this.innerText = this.addChild(new Ss);
                        var i = xs.find((e => e.name === t)).pos;
                        this.innerText.position.set(i[0], i[1])
                    }
                    show() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            t.opened = !1, t.alpha = 1, t.interactive = !0, t.animation.play("static", !0)
                        }))()
                    }
                    open() {
                        var t = arguments,
                            e = this;
                        return (0, o.Z)((function*() {
                            var i = t.length > 0 && void 0 !== t[0] && t[0],
                                s = t.length > 1 ? t[1] : void 0,
                                o = t.length > 2 ? t[2] : void 0,
                                n = t.length > 3 && void 0 !== t[3] && t[3],
                                a = t.length > 4 ? t[4] : void 0;
                            e.opened = !0, e.interactive = !1, i || n || e.game.action.emit("LOSS" === o ? "doll:lose" : "doll:win", a), e.animation.play(i || n ? "dead" : "win"), i || (yield e.game.helpers.delay(3e3)), e.innerText.show(s, o, n)
                        }))()
                    }
                    refresh() {
                        this.opened = !0, this.interactive = !1, this.alpha = 0, this.innerText.refresh()
                    }
                    resize(t) {
                        var e = [
                                [0, 0],
                                [-10, -35],
                                [10, 13],
                                [0, 13],
                                [-31, 60],
                                [0, 0],
                                [20, -50]
                            ],
                            i = [
                                [-200, 280],
                                [-190, 285],
                                [-160, 343],
                                [-112, 343],
                                [-101, 350],
                                [-30, 310],
                                [-40, 230]
                            ];
                        this.game.device.desktop || this.game.device.landscape ? (this.scale.set(1), this.position.set(e[t][0], e[t][1])) : (this.scale.set(.7), this.position.set(i[t][0], i[t][1]))
                    }
                }
                class Cs extends ks {
                    toHitArea(t) {
                        return this.hitArea = new X.Rectangle(...t), this
                    }
                }
                class Bs extends Ee {
                    constructor() {
                        super("", {
                            font: "BonusFont",
                            default: {
                                fontSize: 30,
                                fontFamily: "Avenir-Medium",
                                fill: "#82570b",
                                align: "center"
                            }
                        }), (0, n.Z)(this, "description", void 0), (0, n.Z)(this, "value", void 0), this.anchor.set(1, 0), this.text = Lt.i18n.t("BonusVariablesTextExtra"), this.value = this.addChild(new v.Xz("", {
                            fontName: "BonusFont"
                        })), this.value.position.set(-250, 18), this.description = this.addChild(new $.j(Lt.loader.getAsset("bonusText").bonusextra_fs)), this.description.position.set(-190, 50)
                    }
                    show(t) {
                        this.value.text = "".concat(t)
                    }
                    open(t) {
                        this.value.text = "".concat(t)
                    }
                }
                class Ps extends Ee {
                    constructor() {
                        super("", {
                            font: "BonusFont",
                            default: {
                                fontSize: 30,
                                fontFamily: "Avenir-Medium",
                                fill: "#82570b",
                                align: "center"
                            }
                        }), (0, n.Z)(this, "value", void 0), this.text = Lt.i18n.t("BonusVariablesTextMulti"), this.value = this.addChild(new v.Xz("", {
                            fontName: "BonusFont"
                        })), this.value.position.set(10, 10)
                    }
                    show(t) {
                        this.value.text = "x".concat(t)
                    }
                    open(t) {
                        this.value.text = "x".concat(t)
                    }
                }
                class Es extends Ee {
                    constructor() {
                        super("", {
                            font: "BonusFont",
                            default: {
                                fontSize: 30,
                                fontFamily: "Avenir-Medium",
                                fill: "#82570b",
                                align: "center"
                            }
                        }), (0, n.Z)(this, "value", void 0), this.text = Lt.i18n.t("BonusVariablesTextTotal", Lt.i18n.currency({
                            withBrace: !0
                        })), this.value = this.addChild(new v.Xz("", {
                            fontName: "BonusFont"
                        })), this.value.position.set(0, 10), this.value.letterSpacing = 5
                    }
                    show(t) {
                        this.value.text = "".concat(Lt.i18n.currency({
                            bitmap: !0
                        })).concat(Lt.helpers.toMoney(t))
                    }
                    open(t) {
                        this.value.text = "".concat(Lt.i18n.currency({
                            bitmap: !0
                        })).concat(Lt.helpers.toMoney(t))
                    }
                }
                class Ts extends Ee {
                    constructor() {
                        super("", {
                            font: "BonusFont",
                            default: {
                                fontSize: 30,
                                fontFamily: "Avenir-Medium",
                                fill: "#82570b",
                                align: "center"
                            }
                        }), (0, n.Z)(this, "value", void 0), this.text = Lt.i18n.t("BonusVariablesTextWin", Lt.i18n.currency({
                            withBrace: !0
                        })), this.value = this.addChild(new v.Xz("", {
                            fontName: "BonusFont"
                        })), this.value.position.set(0, 10), this.value.letterSpacing = 5
                    }
                    show(t) {
                        this.value.text = "".concat(Lt.i18n.currency({
                            bitmap: !0
                        })).concat(Lt.helpers.toMoney(t))
                    }
                    open(t) {
                        this.value.text = "".concat(Lt.i18n.currency({
                            bitmap: !0
                        })).concat(Lt.helpers.toMoney(t))
                    }
                }
                class Fs extends(Gt(H.W2)) {
                    constructor() {
                        var t;
                        super(), t = this, (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "container", void 0), (0, n.Z)(this, "counter", void 0), (0, n.Z)(this, "delimeter", void 0), (0, n.Z)(this, "items", void 0), (0, n.Z)(this, "onBonusEnd", void 0), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "spaceKey", void 0), (0, n.Z)(this, "textExtra", void 0), (0, n.Z)(this, "textMulti", void 0), (0, n.Z)(this, "textTotalWin", void 0), (0, n.Z)(this, "textWin", void 0), (0, n.Z)(this, "open", function() {
                            var e = (0, o.Z)((function*(e) {
                                t.game.autoPlay.enabled || t.spaceKey.disable();
                                try {
                                    t.items.forEach((t => t.interactive = !1)), t.counter++;
                                    var i = yield t.game.server.request({
                                        action: "bonus",
                                        bonusItem: e
                                    });
                                    t.swapChildren(t.children.find((i => i === t.items[e])), t.children[t.children.length - 1]);
                                    var s = i.bonus.type;
                                    t.background.hide(), yield t.items[e].open(!1, i.bonus, s, !1, e), t.background.open(t.counter, s), t.textExtra.open(i.bonus.freespins), t.textWin.open(i.bonus.win / i.bonus.mul), t.textMulti.open(i.bonus.mul), t.textTotalWin.open(i.bonus.win), "LOSS" === s ? (yield t.loss(i.lostItems), k.fromTo(t.background.endText, .5, {
                                        pixi: {
                                            alpha: 0
                                        }
                                    }, {
                                        pixi: {
                                            alpha: 1
                                        }
                                    }), t.spaceKey.enable(), t.overlay.interactive = !0, t.game.autoPlay.enabled && (yield t.game.delay(1e3))) : (t.items.forEach((t => !t.opened && (t.interactive = !0))), t.counter > 7 && (yield t.game.delay(500), k.fromTo(t.background.endText, .5, {
                                        pixi: {
                                            alpha: 0
                                        }
                                    }, {
                                        pixi: {
                                            alpha: 1
                                        }
                                    }), t.overlay.interactive = !0, t.game.autoPlay.enabled && (yield t.game.delay(1e3))), t.spaceKey.enable())
                                } catch (e) {
                                    yield t.game.catchError(e)
                                }
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()), this.alpha = 0, this.counter = 1, this.container = this, this.addChild(this.background = new ws), this.addChild(this.textExtra = new Bs), this.textExtra.position.set(1860, this.background.desk.height - this.textExtra.height), this.addChild(this.textWin = new Ts), this.textWin.position.set(70, 500), this.addChild(this.textMulti = new Ps), this.textMulti.position.set(70, 600), this.delimeter = this.addChild(new $.j(this.game.loader.getAsset("bonusText").bonusDelimeter)), this.delimeter.position.set(60, 720), this.addChild(this.textTotalWin = new Es), this.textTotalWin.position.set(70, 744), this.items = [this.addChild(new Cs("crossEffect")).toHitArea([310, 10, 360, 250]), this.addChild(new Cs("tornEffect")).toHitArea([333, 318, 360, 250]), this.addChild(new Cs("needleEffect")).toHitArea([570, 490, 250, 360]), this.addChild(new Cs("hangedEffect")).toHitArea([850, 530, 250, 360]), this.addChild(new Cs("beastEffect")).toHitArea([1170, 470, 360, 250]), this.addChild(new Cs("headCutEffect")).toHitArea([1270, 260, 360, 250]), this.addChild(new Cs("acidEffect")).toHitArea([1230, 50, 360, 250])], this.items.forEach(((t, e) => {
                            t.index = e, t.onPress.add((() => this.open(e))), this.game.device.desktop && (t.on("mouseover", (() => {
                                t.animation.play("hover", !0), this.game.action.emit("doll:hover")
                            })), t.on("mouseout", (() => {
                                t.animation.play("static", !0)
                            })))
                        })), this.spaceKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Space), this.spaceKey.onPress.add((0, o.Z)((function*() {
                            if (t.game.autoPlay.enabled) t.game.autoPlay.toggle(), t.background.autoplayText.alpha = 0, t.overlay.interactive = !1, t.spaceKey.disable();
                            else {
                                var e = t.items.findIndex((t => !t.opened));
                                e > -1 && t.items[e].interactive ? yield t.open(e): t.overlay.interactive && t.end()
                            }
                        }))), this.spaceKey.disable(), this.onBonusEnd = new(x()), this.overlay = this.addChild(new u.TC), this.overlay.beginFill(), this.overlay.drawRect(0, 0, 1920, 1080), this.overlay.endFill(), this.overlay.alpha = 0, this.overlay.x = 0, this.overlay.y = 0, this.overlay.interactive = !1, this.overlay.cursor = "pointer", this.game.interaction.click(this.overlay, (0, o.Z)((function*() {
                            t.game.autoPlay.enabled ? (t.game.autoPlay.toggle(), t.background.autoplayText.alpha = 0, t.overlay.interactive = !1) : (t.overlay.interactive = !1, t.end())
                        })))
                    }
                    show() {
                        var t = arguments,
                            e = this;
                        return (0, o.Z)((function*() {
                            var i = t.length > 0 && void 0 !== t[0] && t[0];
                            return e.counter = 1, e.game.action.emit("bonusGame:start"), k.fromTo(e.container, i ? 0 : 1, {
                                pixi: {
                                    alpha: 0
                                }
                            }, {
                                pixi: {
                                    alpha: 1
                                }
                            }), new Promise((t => {
                                e.game.autoPlay.enabled && (e.overlay.interactive = !0);
                                var s = e.game.store.get("reward:bonus", []);
                                if (e.background.refresh(), e.items.forEach((t => {
                                        t.refresh(), t.show(i)
                                    })), i)
                                    for (var o in s.items) e.items[o].open(!0, s.items[o], s.items[o].type, !0), e.counter++;
                                e.background.show(e.counter), e.textExtra.show(i ? s.freespins : 0), e.textWin.show(i ? s.win / s.mul : e.game.wallet.coins), e.textMulti.show(i ? s.mul : 1), e.textTotalWin.show(i ? s.win : e.game.wallet.coins), e.spaceKey.enable(), e.onBonusEnd.once(t), e.game.autoPlay.enabled && e.autoPlay()
                            }))
                        }))()
                    }
                    autoPlay() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            yield t.game.delay(1500);
                            for (var e = 0; e < t.items.length; e++) {
                                if (!t.game.autoPlay.enabled) {
                                    t.spaceKey.enable();
                                    break
                                }
                                t.items[e].opened || (yield t.open(e))
                            }
                            t.game.autoPlay.enabled && t.items.every((t => t.opened)) && t.end()
                        }))()
                    }
                    loss(t) {
                        var e = this;
                        return (0, o.Z)((function*() {
                            for (var i of Object.values(t)) {
                                var s = e.items.find((t => !t.opened));
                                s.open(!1, i, i.type, !0), s.alpha = .3
                            }
                            yield e.game.delay(500)
                        }))()
                    }
                    end() {
                        this.spaceKey.disable(), this.game.action.emit("update:win"), this.game.action.emit("update:balance"), this.overlay.interactive = !1, this.onBonusEnd.dispatch(), this.game.action.emit("bonusGame:end"), k.fromTo(this.container, .5, {
                            pixi: {
                                alpha: 1
                            }
                        }, {
                            pixi: {
                                alpha: 0
                            }
                        })
                    }
                    resize() {
                        this.items.forEach(((t, e) => t.resize(e))), this.game.device.desktop || this.game.device.landscape ? (this.scale.set(1), this.textExtra.position.set(1860, this.background.desk.height - this.textExtra.height), this.textWin.position.set(70, 500), this.textMulti.position.set(70, 600), this.delimeter.position.set(60, 720), this.textTotalWin.position.set(70, 744), this.overlay.scale.set(1), this.overlay.y = 0) : (this.scale.set(1.777778 * .5625), this.textExtra.position.set(1e3, 1188), this.textWin.position.set(70, 940), this.textMulti.position.set(70, 1050), this.delimeter.position.set(60, 1169), this.textTotalWin.position.set(70, 1188), this.overlay.scale.set(4), this.overlay.y = -570)
                    }
                }
                class Zs extends(Gt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "bonusBadge", void 0), (0, n.Z)(this, "overlay", void 0), this.alpha = 0, this.overlay = this.addChild(new Jt(.8)), this.bonusBadge = this.addChild(new $.j(this.game.loader.getAsset("VB_big"))), this.bonusBadge.anchor.set(.5)
                    }
                    show() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            k.fromTo(t, 1, {
                                pixi: {
                                    alpha: 0
                                }
                            }, {
                                pixi: {
                                    alpha: 1
                                }
                            }), yield t.game.delay(1e3)
                        }))()
                    }
                    hide() {
                        this.alpha = 0
                    }
                    resize() {
                        this.bonusBadge.x = this.game.viewport.width / 2, this.bonusBadge.y = this.bonusBadge.height / 2
                    }
                }
                const Os = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////1fUNLcAAAAWdFJOUwDPn4C/30AgEO+QcGCgf69fMI9vULAqgdwXAAACbklEQVRYw+1YyZaDIBCUHVxiTDL8/6eOTlzYQ6OZE3XKy8MSmurqbpumoqKioqIiB5I/MWJaa4UoecnriDlV2gK9i0s2fHN438Dnyfsg8YLHOXJBdRzsfibISidxK2Z+WjyzOGbYL0OFQbkZtLTfSORrYEZQirj7g5g4Su4PclYi8v0GSeDpgxwVcK8PsymsnWEXIZx6fCdedFNk4+7gml62PSQWdNtVwEMiesKTCzZu/AVDbFdu/gWvRasTAh7JTQQO3fak9OhfjWgxbt13rhJsIdJ4hHXuqkGsIsmkHoJn7MMippCIPMNqHcM3xgEREZttUu/kf47qvFGqfI0cpta58cDL6UkwIjnBNk3alMOiYL6kHzI1OmPVCJ9/phNeWDXE/p810roxoSAFTTK7aFspjd+nJ26aG0hQP5yl3LwB/jYk5bpT8JjxmuWUJ75SCvN9zhFnJLoH5O2jO7IIb3poXQfZkBK3H7x19XJhe69wJFMbPGK6Jjn66yM30FjNlfjgpkJMW784w05y7eWpqT+SkTUqJGqN8B+QbS9djjo8I5K2cCbj6jpvsZ26n6ppZ0WUmXb04yfZHVKVqEWNTTen3urcoq4cIUxMU2HUILs/bSFdJQHVaTnEmrfQYmCdhnRPw4kG91MR+4eOKz2scELgQ8HulyluHO++czquOLfE0HbP88tRxFssI0uLRpnQ5HlM16iAWqLoWGuO7UUTr8GtFb5P+6xAgSYd4h79aZfZvQcpljdJj+jqdWb+Zwlmeu6rhYxuXHXn/WQIfblQ5BLrkr3zwUXRC6c5ycmIlt0zNj75F7y2oqKioqIChF9HhmS5mMSV/gAAAABJRU5ErkJggg==";
                class Rs extends Xt {
                    constructor() {
                        super(Os), (0, n.Z)(this, "name", "ButtonAutoPlay"), (0, n.Z)(this, "startTexture", void 0), (0, n.Z)(this, "stopTexture", void 0), (0, n.Z)(this, "counts", void 0), (0, n.Z)(this, "countsInfinity", void 0), (0, n.Z)(this, "enterKey", void 0), (0, n.Z)(this, "onEnterClick", void 0), this.startTexture = d.xE.from(Os), this.stopTexture = d.xE.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTP////////////////////////////////////////////////////////////////////////////////////VtkI8AAAAVdFJOUwCAz2Dfv0AgEO9fkH9wn6CvMI9vUD+hasQAAAIqSURBVFjD7VhJkoMwDIyNVwhbEv//qwM1LMYbkoGb+5SaMj1CbrUkXq+CgoKCggIIlPh2lBljNOXkp+4jFlybA3gtbwn47fD+o7tOXgWJZ3yukUtu4mD1lSRrk8Q7m/l74JnEMeH4z2hmUt4WLa9WEvXrmZWULO5qJyaOkqudnOWIfLtBEnh6J6cZ3MvDbAxrp99EiKce/gsvGhRZuVu8puew+8SBdr0KfEpkRUTywMrdPWCIzcItHvBaujgh4hFoIQhs2KM2A/BqFgk2GGkA1SoXkbwwkQhUzQqM39lqrXXUpwUiI3Kl4V7Nb3Zl37iGa2Sn2QvYbQF+RiDJtk1anlArOWHRiJh+KsiNL36ZppYa09DUMaufJHXjN8sE9cc5KlLUrcdMIT3r2J7C1M4rTkhMD9SLo01do3D+nBK3n7wmKb4m9IonPcnRX/S2DsOVPHFTKcd1XpxwVjK2/gigarR323GNtRB1uK3cKAj1etgqXUA3bd332O8rUGQ1pivx4CA2B1j5p6FNXaMaXoOZKgmqT6s+NryFDiP7NGZ66i8MuLA+/ejElV5WBCH4pWDzyxR3F5++IRNXnFt12HHP88tBxkcspzLRq0xo89y3a5pBrWh0rbXX9qyN1+I2uqvHbVfgSJMOcQ/+tsuOJkiy5U3SK7r+Xdn/WYKZX/tqoaKB6/a6n/ShLxea3GJdqnI+uGh+4zanBBnoHD1jw1c84LUFBQUFBQUo/AH9SmgY+OEdcwAAAABJRU5ErkJggg=="), this.onEnterClick = new(x()), this.counts = this.addChild(new A.xv("", {
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
                class Ms extends Xt {
                    constructor() {
                        super("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAyCAMAAADLPWP6AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABjUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMgBvGIAAAAgdFJOUwDvnzC/EGAg34B/j3DeX0D+vqAhrxFxzq5Q7jHPQQGekWo0dwAAAS9JREFUSMe9lm13gyAMhQWhhFarzq5r127L//+VO8fTF1KBJfmwfATv4fHmGmwaSYWhbaTVOkQ01ssOMrgUSGQe8FZRoNreRWgEfPiswFaBRrVNREbDh5arOiQi4AJu0qP2XD7Q8L39G59X8e00fEHDR6LkVFFS8XXco5yGb1PmGw4Abv9nlLrc+159PUouD2ElfE+IWIsS5WuTnWM5Si/+DWlDLsVWhUobYS5EKdb6iPD+WI/p8sqoYUxl7vu2PGN9AHbpPu4yCNnBHonsuGoV5NN2IrKv1ygVvg//karMTKNUvHhCT41k8C0J+SRGci8QMvOQw5cxksO3yqrggpvEfIv/vZhv7T/7Am5HKV/Gf+DOv4iq3wor5qNB7iV/Zv60WDJOoRHV2U7Tz7n6yC/Xt2DiEf0QXwAAAABJRU5ErkJggg==", 115), (0, n.Z)(this, "name", "ButtonAutoPlayAccept"), this.setBackgroundAlpha(1), this.setBackgroundColor(this.game.config.get("colors.primary")), this.show(!1)
                    }
                    resize() {
                        this.scale.set(this.game.device.desktop ? 1 : 2)
                    }
                }
                class Ws extends Xt {
                    constructor() {
                        super("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTP///////////////////////////////////////////////////////////////////////////4/JsPUAAAATdFJOUwCQEIBgvyCfQN+gX1CvMH+wz28jjNZzAAAAj0lEQVRYw+3VSxLDIAwEUYMNFonz9f3vmivMUFZVFv0O0AuQYFkAAACABDUkE+U+TsmodrqcotVONzXd7PRNTe92OtT007/HY5cEu4TLRVFmr0yMdVdXJv5p0ROfp1VNF/+TUb+CPnGPx6ao7BIu9x2Kz8svb+o23u30Q02/89KJz5N/IOqD3Rh4AAAAZPgBCZoyk9uDJXUAAAAASUVORK5CYII=", 90, !1), (0, n.Z)(this, "name", "ButtonMenu")
                    }
                    resize() {
                        this.scale.set(this.game.device.desktop ? 1 : 1.6)
                    }
                }
                class _s extends Xt {
                    constructor() {
                        super("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////wV68vgAAAAXdFJOUwDvzzBAv2Ag3xCAn6+Qf6BvcFBfj0+w/1/ZxwAAAdhJREFUWMPtl8lygzAQRNG+m8VJ9P9/Ghkc1gEEkg+p0ju5TNEMrR4xqqpCoVAoFAqF/4DizjLbiOzCokZ+gJHMytJPfGWVxn4OVh+TzqpNl9LeZCybo6V2+6mFDCTlhHBtjG7oX67dQlretls9JgfsEyrc3lR+LK2Vj6EJW5lqt1hlrRdXQ1Om2b1esbf4YAufLkpOVVp/TFKDK3rRPM9LPvtdTC8uLPDAKDv8AfKxdsV7FO0584f0li/XGYmruwXSHaWd3jwKMbzqehYnXW9yKzTyJ9CYHpytkCVCiL2cD/VTwmLLBiRw34g1KP1TVd3w6zTfHC7ulQoLXQjFNpGN6fbiHKwCOxT/PZGfSbd+X5seruOpNFzaOy0sLSJi7/7QFYdlxzSNInCI2WHZMvIDC99N5mUjTeqLLdPTgY67qhrfx71iTEdxRuP3PqhBkKq4a3hAjx9i2mjd8GsDJq23jut881LjGGNyXnb4yxjjdJdlLFPw5nHB3QM0HJiEQVhRzikRajvtpWqP80K7Nzv4u4bj+Y4Kfwn4Ten5bKfg3fb7pjRbDRp6b965TrdWoS9TEA65tjjxHDYbYt6zl6JiTA9Ja5ounECZcU3mY2KhUCgUCoXCZ/kFkq5xr6AJFIIAAAAASUVORK5CYII="), (0, n.Z)(this, "name", "ButtonQuickSpin")
                    }
                    setActive(t) {
                        this.setBackgroundAlpha(t ? 1 : .2), this.setBackgroundColor(this.game.config.get("colors.".concat(t ? "secondary" : "white"))), this.changeColor(this.game.config.get("colors.".concat(t ? "primary" : "white")))
                    }
                    resize() {
                        this.scale.set(this.game.device.desktop ? 1 : 1.6)
                    }
                }
                const Ds = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTP////////////////////////////////////////////////////////////////////////////////////VtkI8AAAAVdFJOUwBwX1BAIIC/3+8QoDCvf5/PYJCwj2OlcKoAAAFKSURBVFjD7ZfRkoMgDEWxAgIqVXfz/7+6YK10ikop4WFncp5oOnNqrwEjYwRBEARBEEQFxKi1rWNW4LhVM8MPvnnQqxm66Ju2xTHH6l+Ae4m5fZpjtS8WXPcN4FTduaIyCOZYPfiq/NJs4UrNFlfVCOagtt3W4saXeYbQ2Ek9gEN1E3xdXrubN2Ok7t16eix5XiIWEmr+EoPOSmRKqdcYtg+jWzYfqyGpXi/b7LnfEdVM7TG0IXccdb/HIPyGxFT7GJZdDZjqOST8j9SyXiChmwfs2xiajx+eiChbRmadTyqpHoMvb6PLlHp+GUryjqePDtXt1rWZjxnRT5dq/7dE+JXv5gV5nHUzbiOCyH2AnbnjJuuzuvrCHalF2ZDZpEacgsFsPlfr0sl4Ph0nl+chVWMI5oyhuDtWgXovHH6DgpaMIAiCIAiCqMUf3ndCqqLsR7MAAAAASUVORK5CYII=",
                    Is = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAACXBAMAAADT+qdUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAqUExURUdwTP///////////////////////////////////////////////////4sGkswAAAANdFJOUwDfIBC/z4BfYP7ef86PIFKAAAAASklEQVQ4y2NgsPa9WsDAwCR79+5FBQbGu0AgzNALoq4xxIKoKwx3wWCUGqVGqWFG+YLIqwy5IOo6gxWIEmBgWgkuCxg4Tl5JZgAAzqb+eiBGXckAAAAASUVORK5CYII=";
                class Ls extends $.j {
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
                class js extends H.W2 {
                    constructor() {
                        super(), this.interactive = !0
                    }
                }
                class Ns extends $.j {
                    constructor(t, e) {
                        super(t), this.tint = e
                    }
                }
                class Us extends u.TC {
                    constructor(t, e, i, s) {
                        super(), this.beginFill(0), this.drawRect(t, e, i, s), this.endFill()
                    }
                }
                class zs extends(Gt(H.W2)) {
                    constructor(t, e, i) {
                        super(), (0, n.Z)(this, "progress", void 0), (0, n.Z)(this, "minPosition", void 0), (0, n.Z)(this, "maxPosition", void 0), (0, n.Z)(this, "onChange", void 0), this.track = t, this.background = e, this.foreground = i, this.progress = new js, this.progress.mask = this.progress.addChild(new Us(0, 15, this.background.width, this.background.height - 25)), this.minPosition = new X.Point(0, this.track.padding), this.maxPosition = new X.Point(0, this.background.height - this.track.padding), this.onChange = new(x()), this.progress.addChild(this.background), this.progress.addChild(this.foreground), this.addChild(this.progress), this.addChild(this.track), this.track.x = this.progress.width / 2, this.handleProgress(), this.handleTrack()
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
                class Gs extends(Gt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "slider", void 0), (0, n.Z)(this, "onChangeVolume", void 0), this.background = $.j.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAD9CAMAAAAlKrH0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////1/RXMoAAAAddFJOUwCP794Q3zBAIP6/7pCfz75Qr3BvgKCwX2DOrn+eA25H2wAAAetJREFUeNrt3MdawzAQBGDLsmLJPYUUYN//NXELqW7y5DZz5PB/kjYELjtBMJYo3udbY6RNWCTZPo4Cz8RZIW9SZPFyy/6EMhiT22UHS2Qi2xiINUnmnTBSMjNzrlyFMjvmBDtaFzX6ubFGFsaMXHizWKu9zaAWikfCDVIb8ny195414p3XeUQrtNp7/rwoWRX1qJ1lZSrUw/XjuL/ul6zO3XWtAHL7AkwQXPL/dSmCPN4WwyXAl2tiUWPtcmg5g+JC4CCuw8hwXFZzBY4r6m8mASZCPl3zeDskt0NOov43A/Prf80ROdj6b0YQYjmBhhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSM3wRmkFmK5ArXH3CXBbR43ydAbquD9WfB2L3LjtcBvRoP3tnEbtKZdUj+guPwTG/mo2R4/02aAOV4ZQMsWLKyS4zbWvjAkXavphxKSai13+mQDSRDpVVd96dOxGvVwfbeM9zjS9101KVLz9dLhnh+P99ObkU4jjZjCfeOSW4I5NdXUdV5wwLSaUcqVO9TRerCcAbpyQTnXt8Nh3ZX1oOjSg/VoSVMX557M+gelin1716J4r8pL6tpo/f071eH2B6lgKFKZ54AhAAAAAElFTkSuQmCC"), this.background.alpha = .2;
                        var t = new Ls(d.xE.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAMAAABgOjJdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFQUExURUdwTAAAAP39/QAAAPj4+AAAAAAAAAAAAAAAAAAAAH9/f9jY2AAAAAAAAAAAAAAAABUVFQAAAFVVVQ8PDwAAAOLi4vz8/DMzM+Tk5AAAAAAAACoqKn19fYGBgXZ2dvz8/AsLC+np6f///wcHBxISEgAAAPv7+9zc3Pb29unp6ePj48fHx/n5+fj4+PX19c7OzvPz8+Xl5fn5+bu7u/Pz8+np6V5eXpeXl4ODg/z8/AAAABMTE+bm5vr6+qqqqgAAAMPDwwAAAO7u7gAAAFhYWN/f3+7u7lFRUePj4/X19V5eXgAAAAwMDAAAAAAAAFZWVuHh4ff39wAAAN/f3/r6+pGRkUxMTBwcHOnp6fn5+dTU1Pf3987Ozu/v7/j4+AgICPv7+/f39w4ODsPDwwAAAPHx8fb29gAAAPz8/PLy8gAAAA8PDwUFBREREQUFBf///7KU/iMAAABvdFJOUwAD4AblEgwBAgUCFAQHCBQMDQMRDyThBaEWGQZBP0exFr8BJA4okiWVJCUpk5SmFUNHw1fIri4bPsEODWqiYCArFcwRLqR4MrO2KxcUIiMyo7UkgHI4OQkj5HNjirrUHeLmEn0eutYQ0dorECwPKxinWNoAAAFMSURBVDjLfdTVlsIwEAbglEoSqKCL2wLr7s66u7u75f3vNoXlUEqS/3a+kzTpTABwBiJJkhCEgBmIfMdZDyHkPXt1LjHqwYFJUs9su9cNfD2kMW2+hr1gp4e444k4CIw0A0JaumB9CxagpL8mcC9hpyNaBaib8DKIKkLu44oh2f4U7zzhZ9xeBM8IxCqm4mxDIA4MCGDgViDutVaAwkSUIgIoJBRvVDwKhRqka1wIwGsIARi+EYiXIj2LdiQQl/QswNwUiBPTvtOFES4Yjev2r50e5oqJqUq7yvEYB8QSRrU/tGWFCZQx/3/H60tpFlHSql5rw+h2qpkoKcuot7Jhre27wMqeJTvHIamWM+uO+uLcjppsHCldSxxmnvIftPqQvz7d3fJj9+AiOZC7K5R+vz9LhedcALNmG2FTC6vq14/fxF4AeC9EsOn5+ANrFSqZBMENigAAAABJRU5ErkJggg=="), 14);
                        t.width = 33, t.height = 33;
                        var e = new Ns(d.xE.from(Is), 0);
                        e.width = 12, e.height = 151;
                        var i = new Ns(d.xE.from(Is), 4914792);
                        i.width = 12, i.height = 151, this.onChangeVolume = new(x()), this.slider = new zs(t, e, i), this.slider.position.set(33, 30), this.slider.onChange.add((t => this.onChangeVolume.dispatch(this.convertToVolume(t)))), this.interactive = !0, this.hitArea = new X.Rectangle(0, 0, 78, 200), this.game.interaction.up(this, (() => {
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
                class Vs extends Yt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "ButtonSound"), (0, n.Z)(this, "textureOn", void 0), (0, n.Z)(this, "textureOff", void 0), (0, n.Z)(this, "controls", void 0), (0, n.Z)(this, "volumeControl", void 0), (0, n.Z)(this, "onChangeVolume", void 0), this.textureOn = d.xE.from(Ds), this.textureOff = d.xE.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTP////////////////////////////////////////////////////////////////////////////////////VtkI8AAAAVdFJOUwC/zzAQf4DfIO+fX0BwoGCvUJCwj2iqfUcAAAGeSURBVFjD7dfbkoMgDAZg1Higntvl/V91CysQRDsG6cxe5L9yOs6nEwOkQnA4HA6Hw+FwvpBukbL+jtyqd/osVq0W2MvqlYV+Q6WzK2lkVUS3rSudnpBt5Zj+UeqRZrcdLscBrX9cs9gRXeh7gG4/IzuiK/1rk/ApG29DefwZ9eOlyGA7ui62Fgf9xIFAQt0f2pYevVfQ2h1at/BCu8Cd+Xc50CpSo0WN7cXSAyqDJFXEfDI1RraYcdNtz1n8rdcWuU7tbVmFd5jXBlf3B5X+ZLeuDKuvO4H+YE+uDJ0uGJ229hzZugxPR6sEOrDxPjT7CqfS2MaHTA76xG7uF8Tb5jxwtu/mKvEzntq++YbDHfEibYtqbNSP4K6u70/tJfuVstAbdWKbw8bafcr2BO0VW7h1Tjlmuqnc29vgENmTSpoXgtoc2x31ALtuT6SuJtny1pA5OhsPJX4dJb+03T7wpGps1+u3JuN5P05iG8StRENwVyb33InttyHIZ0d/OIy9QBZ7UjIYScMhMG9goRwv1AFcjoLD4XA4HA7n/+UXAfY3Afulub0AAAAASUVORK5CYII="), this.volumeControl = this.addChild(new Gs), this.volumeControl.pivot.set(40, 214), this.volumeControl.show(!1), this.onChangeVolume = this.volumeControl.onChangeVolume, this.controls = this.addChild(new Xt(Ds)), this.controls.onClick.add((() => this.onClick.dispatch())), this.game.interaction.hover(this, (() => this.volumeControl.show(this.game.device.desktop))), this.game.interaction.out(this, (() => this.volumeControl.show(!1))), this.show(this.game.device.desktop)
                    }
                    toggle(t, e) {
                        this.controls.changeIcon(t ? this.textureOn : this.textureOff), this.volumeControl.setVolume(e)
                    }
                    resize() {
                        this.controls.showBackground(!this.game.device.desktop), this.scale.set(this.game.device.desktop ? 1 : 1.6)
                    }
                }
                class Qs extends(Gt(H.W2)) {
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
                class Hs extends Xt {
                    constructor() {
                        super("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTP////////////////////////////////////////////////////////////////////////////////////VtkI8AAAAVdFJOUwCfYO+/gBDfQCCQzzBfb1Cvf6CPcC3zwgoAAAJQSURBVFjD7Vhrk6MgEBQYHgMGTfb4/3/1eGg2ClqwelVbdfSXpEylhZ6eZnQYOjo6Ojo6On45EPF2TkH1LJmLMKCnu+4gnuD2ME+8g5i5IshV8lG6I0h1rXDMnWC8Qv06Y3ZwhVqeUrv/j5qfMpNLrj5btmx0thgpJxE8+BaPPQJNzGrT0zxeo+WFm0cT8S4rPPVLhOsvs5dCx06s9TVmIeSppUm7xokTACMlzMQuwSdIpUMw33egdvJo40rWmq+gqKcOO5EWC3kYNJJ1CeeK1GqpGbFq5ceR6kX7ukqqMvWmZ5j0yBz001UnSa/FtWBF6pDIFEr9EsSoJP9TpE7+QLpxtiRWxJ2yHydRNN/z7U6lKKXTu5yDZdXJl3V0pD4ydmzdOq1Vrqqn1kmA3eAhJs3qQ1WlhPR/AvZB/Q5VCZrTAO6HnbZQVY59b9zLqlQawhAuh2rwdVnVg1CV9aEaV8fIYztbTHFHrz07S6E6VS57lZjBrHkAmVZfL6HqM1UaIJwuSjxqzZen6tbXefjVhqrIVV19XSqXsP6num4cv4bsqOJri867CqCFFl+7r7V3rPZnFQAh6sPXqQLUck0Ma/V12U7i+rAgklexUIFy00D9dK2/j6pRJEX9xxy+ot4PCyb52rRxl4eFUIEZYgm0VenWAi6G6mFDU9Yyqe5kJcuwQPIHC4wPT2ZoANKPUGViPejl7CuwFBYnS2TLsLAdVkOojpgda2wzK9QOCy0DW7P7DjHN/4g4O9YcM5qKe18BxAoovJe1o6Ojo6Oj4zfiLwOjZY4OQxL5AAAAAElFTkSuQmCC"), (0, n.Z)(this, "name", "ButtonBetLevel")
                    }
                    setActive(t) {
                        this.changeColor(t ? this.game.config.get("colors.primary") : this.game.config.get("colors.white")), this.setBackgroundAlpha(t ? 1 : .2), this.setBackgroundColor(t ? this.game.config.get("colors.secondary") : this.game.config.get("colors.white"))
                    }
                    resize() {
                        this.scale.set(this.game.device.desktop ? 1 : 1.6)
                    }
                }

                function Ys(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function Xs(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Ys(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Ys(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                var Ks = {
                        fontFamily: "Avenir-Medium",
                        fill: 16777215,
                        align: "center"
                    },
                    qs = {
                        fontSize: 4
                    };
                const Js = {
                    Common: {
                        delimiter: qs,
                        default: Xs(Xs({}, Ks), {}, {
                            fontSize: 22
                        }),
                        value: {
                            fontFamily: "Avenir-Bold",
                            fontSize: 32
                        }
                    },
                    Button: {
                        default: Xs(Xs({}, Ks), {}, {
                            fontSize: 28,
                            dropShadow: !0,
                            dropShadowBlur: 4,
                            dropShadowColor: "black",
                            dropShadowAngle: Math.PI / 2,
                            dropShadowDistance: 2
                        })
                    },
                    FreeSpins: {
                        delimiter: qs,
                        default: Xs(Xs({}, Ks), {}, {
                            fontSize: 22
                        }),
                        value: {
                            fontSize: 32,
                            fontFamily: "Avenir-Bold",
                            fill: 16777215
                        }
                    }
                };

                function $s(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function to(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? $s(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : $s(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class eo extends Hs {
                    constructor(t) {
                        super(), (0, n.Z)(this, "betLevel", void 0), (0, n.Z)(this, "betLevelText", void 0), (0, n.Z)(this, "updateAll", (() => {
                            this.updateText()
                        })), (0, n.Z)(this, "updateText", (() => {
                            var t = this.game.helpers.toMoneySS(this.betLevel.toCoins());
                            this.betLevelText.text = this.game.i18n.t("ControlsDesktopBet", this.game.i18n.currency({
                                withBrace: !0
                            }), t)
                        })), this.betLevel = t, this.betLevelText = this.addChild(new Ee("", to(to({}, Js.Common), {}, {
                            default: to(to({}, Js.Common.default), {}, {
                                align: "left"
                            })
                        }))), this.betLevelText.anchor.set(0, .5), this.betLevelText.position.set(70, 3), this.onClick.add((() => {
                            this.game.action.emit("clickMaxBet")
                        })), this.game.action.on("state:ready_enter", (() => {
                            this.game.freeRound.enabled || this.game.autoPlay.enabled || Qi.isFreespin() ? this.disable() : this.enable()
                        })), this.game.action.on("state:spin_enter", (() => {
                            this.disable()
                        })), this.disable()
                    }
                }
                class io extends $.j {
                    constructor(t) {
                        var {
                            icon: e,
                            textures: i
                        } = t;
                        super(), (0, n.Z)(this, "_textures", void 0), (0, n.Z)(this, "isDisable", void 0), (0, n.Z)(this, "isHover", void 0), (0, n.Z)(this, "onClick", void 0), (0, n.Z)(this, "onHover", void 0), (0, n.Z)(this, "onLeave", void 0), this._textures = i, this.isHover = !1, this.isDisable = !1, this.buttonMode = !0, this.interactive = !0, this.onClick = new(x()), this.onHover = new(x()), this.onLeave = new(x()), i.normal && (this.texture = i.normal), e && this.addChild(e), this._setupEvents()
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
                                var i = Lt.device.desktop ? "pointerover" : "pointerdown";
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

                function so(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function oo(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? so(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : so(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                const no = function(t) {
                    var e = new Ee("", oo(oo({}, t), {}, {
                        default: oo(oo({}, t.default), {}, {
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
                            e.text = Lt.i18n.t("ControlsDesktopFreeRoundLeft", t)
                        }
                    }
                };
                const ao = function(t) {
                    var e = new Ee("", t);

                    function i(t) {
                        e.text = Lt.i18n.t("ControlsDesktopFreeRoundWin", Lt.i18n.currency({
                            withBrace: !0
                        }), t > 0 ? Lt.helpers.toMoney(t) : "")
                    }
                    return e.visible = !1, e.anchor.x = .5, Lt.action.on("update:win", (() => {
                        i(Lt.wallet.totalCoins)
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

                function ho(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function ro(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? ho(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ho(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class lo extends Ee {
                    constructor() {
                        super("", ro(ro({}, Js.Common), {}, {
                            default: ro(ro({}, Js.Common.default), {}, {
                                align: "right"
                            })
                        }))
                    }
                    update(t) {
                        t >= 0 && (Lt.action.emit("balance_updated", t), this.text = Lt.i18n.t("ControlsDesktopBalance", Lt.i18n.currency({
                            withBrace: !0,
                            withSpace: !0
                        }), Lt.helpers.toMoney(t)))
                    }
                }
                class co extends Ee {
                    constructor() {
                        super("", Js.FreeSpins), this.visible = !1
                    }
                    change(t) {
                        this.text = 0 === t ? Lt.i18n.t("ControlsDesktopFreeSpinsLast") : Lt.i18n.t("ControlsDesktopFreeSpinsLeft", t)
                    }
                }

                function uo(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function po(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? uo(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : uo(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class go extends Ee {
                    constructor() {
                        super("", po(po({}, Js.Common), {}, {
                            default: po(po({}, Js.Common.default), {}, {
                                fill: Lt.config.get("colors.primary"),
                                fontFamily: "Avenir-Bold"
                            }),
                            value: po(po({}, Js.Common.value), {}, {
                                fontSize: 66
                            })
                        })), this.visible = !1
                    }
                    update(t) {
                        this.text = Lt.i18n.t("ControlsDesktopTotalWin", Lt.i18n.currency({
                            withBrace: !0
                        }), Lt.helpers.toMoney(t))
                    }
                }
                class mo extends Ee {
                    constructor() {
                        super("", Js.Common), this.anchor.x = .5
                    }
                    update(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        this.text = Lt.i18n.t("ControlsDesktopWin", Lt.i18n.currency({
                            withBrace: !0
                        }), t > 0 || e ? Lt.helpers.toMoney(t) : "")
                    }
                }
                class Ao extends Qs {
                    constructor() {
                        super(), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "buttonAccept", void 0), (0, n.Z)(this, "buttonAutoPlay", void 0), (0, n.Z)(this, "buttonMaxBet", void 0), (0, n.Z)(this, "buttonMenu", void 0), (0, n.Z)(this, "buttonQuickSpin", void 0), (0, n.Z)(this, "buttonSound", void 0), (0, n.Z)(this, "buttonSpin", void 0), (0, n.Z)(this, "freeRoundLeft", void 0), (0, n.Z)(this, "freeRoundTotalWin", void 0), (0, n.Z)(this, "spinBackAnimation", void 0), (0, n.Z)(this, "spinFrontAnimation", void 0), (0, n.Z)(this, "textBalance", void 0), (0, n.Z)(this, "textFreeSpinLeft", void 0), (0, n.Z)(this, "textFreeSpinTotalWin", void 0), (0, n.Z)(this, "textWin", void 0);
                        var t = this.game.loader.getAsset("controls");
                        this.background = $.j.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAACECAMAAABGSsZsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAC9UExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOvSc8wAAAA/dFJOUy0n8xNrIrX8ThhmXh1JcOLVMtmbsO7RyXpF3erNWeY2OlOFwaaijYnF95S+gbkFYg4+qpF0CEF+C5ifAXdWrYb9fjEAAA3OSURBVHja7JbZchrJEkCLQHLYYokg4AEeCJCMUIQ9A1zbWkDA/3/W7a7KWnpDIInqkXWOoLuWrMw8kmNq1DMAAABERy2ek5/0kT7NS/OsR3rLzM3us5k/h6EBkiQzkEgzkKQ25WKRK2P7sNuSpXhSrz8H4cFbhxsWru1nSWiz+DX88ccff/zxj+6vFgAAABAddX+/uNffRfq+t49kpodCMkv3F/d21R24X/jVhVlbhEEurw25D6MX7ukKBQO3J+VlZ1HowayaFu2q5JbNMLXect3jjz/++OOPfw3+6h4AAACio54AAAAgOupplb5Wq5V+JrOVGz/p6ZNZe9KjNGJlN3WojtUh5qQsyMei8wTPldQKXlJkJbWCDXcyfD+5DszM1Lc1bV8+UixWtgfXIP74448//vjX4K9WAAAAEB3VTB7Npv4202+6KK/02dQbemu1ykTpkT5pDjR91Modabqhi2r6wyvZaQYnbC6p5dIGH8nmMviObO+uUnNlq8jplW3HJcEff/w/sP8Kf/79f1h/1QQAAIDocAEDAADUcQF/exXNwiC/ULlRka752g6OCG1+e2/wxx9//PHH/23+6hsAAABER1/A7cJyuyS0NKpdHtw+XLV90ma7Mqx9Qs2TCuCPP/7444//ef1VGwAAAKLDBQwAAFDHBXx52b70tINZsN7W6+12YV0OtO2e7NrVy0zqzKxdvh0WMovppC0lfJDkb9uDbWmmbbNfBjlsyuxSWWP4448//vjjH8dfXQIAAEB0znsBNz75bxd//PHHH3/8qy7gBgAAAESHCxgAAKCOCzjFXMMqnemvjOz9rENk0+ybUybU7DXcSRPkVyRGAhv2qImSQkqSNpRvQ5K4Mg2/Lf/boHz6ooZdtnltjG/K/wLwxx9//PHHvwZ/15zzyNOwGna/EZ4qxlfkaqjsL0OFvyF1IGWjolD4h8vsNsK+w0mjWAB//PHHH3/86/AHAACAOuipXi99mnFm0NOzniz4XXcyePfKEoejnk+tp71cgsJUDxOCREG1Xi9Tt9fLvno9n0KevbCl0Ax//PHHH3/84/v3AAAAIDrFC3jiX5PDZydHV5m8sHEg08SHTF7OPnlLl/jjjz/++OMfzV9NzkBvUlfWXkXkeTrCH3/88ccf/9dW0xfwVCb59wdg+h794o8//vjjj39sfzWdTEuZVEwrws/KxNadHG6yusFJdeP4448//vjjX4O/mgIAAEB01P/egWlxZZrZnvrRNB8/Lc81Paneyw3ppqYnZ8Iff/zxxx//s/i/ywUMAAAAp6EeAAAAIDpq9DAajdJRMpC1kV4xq+Y1kk1ZTmdm3X9GPip82uPh4XDHx42KVR5cbyNbUwpJcw+uT7fiPUbugF9yjg8PQRD+YRD+/PvHH3/8Y/irEQAAAETHXMAd8zEvS0d/9VqnIxudUfDq+G9Hvn43COn4MF8grNXpBGWlYjDt+GyZLjuug2JvQeKOje10wpzhafzxxx9//PGP7K86AAAAEB0uYAAAgDou4K+aztf/OJ0PnR5//PHHH3/8c6ivAAAAEP8Cvs5MrwsB1xXrB85cn1D/uuxl964PpgzPvNDl9fWR3eOPP/74449/HH91DQAAANHRF/DupCO71y4duWn2d3a0C2Ynpjk2DH/88ccff/xj+6sdAAAAREeNk8fYsTOPYMVNd2O7vJPFnT/i13e5sy5il4kd73bZbR+Vb8eF7vyqtLALcmU2d5kEGR97zPWPP/74448//vH91RgAAACio1qt8bilSd/mawbpM/2Yt45o2V3zkkPBNIMPHLd8DptuHMbZabgjrdizbnUszblpvqgtnUnV8mmMhgv47P4t/PHHn//+8fevwV+1AAAAIDr6Al6a77K1XJqHnpsft5PSctuCHZtNc96+3Y/eDEdScWmPmxXJbxNKWqmvF3yAOxguL/3JpW+i5ZzCekHs3+S/xB9//D+tfwv/D+avlgAAABAddZU8rq7Sj/4mz6Ws+JcZmTAJlTAZ6PfVlZ27iU8sU5PUZV26PSl35crZRX/Gd+HS2+PSq+t+KT1IOtfJlbd1O/jjjz/++ONfg7+6AgAAgOhwAQMAANRxAV8EXF2chTOl/TCN4o8//vjjj38BdQEAAADR8RdwV39eSbcb5gkzSdpC6u5FLq576Fg33O9eFIq90PkxYvjjjz/++OMf0V91AQAAIDpcwAAAAHVcwH8M3eSnQPlS+pFvsN7NnermDpt5cK5bGqenLiR4lfRS1ma3MOyanrt/qmTwxx9//PHHP76/+nM021dv/pfYnuck/vjjjz/++J+E2gIAAEB01FCz1R/91dOtW07GWzfXO26c7uufzJrfy4aHKXRSV2cbbsonzbo1Uaa879A3GlaVYN9X7lTGzhptt0P88cf/I/kP+fvj/9f4qyEAAABERz0+Pg6TH80wGSXfdDocylMwMUP7GJqFoTllj8nb5vJJTZQEBuGSV0IkoyzrEpLFV3x8DJ6+A9tGcebtXPp8k/jjjz/++OMf3V89AgAAQHTUPwAAABAdLmAAAIA6LuCbm5t/bj43+OOPP/744x+9troBAACA6Ki7kJu7PDclW8Wo0jM3x++ekPwYXp0Of/zxxx9//OP45y5gAAAAiIKaz+/mGe4Kg4r9/Pqd273LR92VnatKVH3CFnmhp7vC7t2hcvjjjz/++OMf3T+9gAEAACA2av67yNw+5r/n4VIuonphPi+PCqPn2f15OJwXY0vqzA+UmLuX6WU+L2z8ruwRf/zxxx9//M/sP1e/6+fHX1wNf/zxxx9//EtRPwAAACA6XMAAAAB1XMBrAAAAiM0P1e/31/IV1utklm6mL7/az0zSbf1Ow/UR+eiZHDbnbS2Xbm2SrU2wLb729V2ivg2y376UtXXlqBTqr9e+5bV05DoPNNfu4Bp//PHHH3/8a/Bfqz4AAABERy7gzUY+6dh8LG5DxsmmhOmovnvp/Uxys5lG6qOSS1JlA01KqdOXc5t+Pwy2Z4KirnXJbDuUnBt3ahOU8EGbICX++H8u/1C4Vv/NJ/fn3//n9VcbAAAAiI66PYbN7RnYVMzOUuw9W8Uff/zxxx//NydVtwAAABAddTubzdJvBbflawdOBMduj0h2LG85+4IM/vjjjz/++Mf2v1UzAAAAiI76Vc3suLXZC0dKg2fha1aMmlUWnZVmmx3VfbH0L/zxx/8T+v/i749//f7uAt4HUfvCisz2hZXSyamUHN7vTz/zmnJ7/PHHH3/88a/DX+0BAAAgOmpQwj73zm/vw8j9wZh9xd5e/5gwF5o5Y1Pvs6VM4mwL7r0P02SLZ5z2VWr4448//vjjH8dfDQAAACA66svgS4J+OAZmOsg+zHvgRno2SJ6D3MCkGHyR1S/Bqj1n1iTIV3FtyGEJc5NBprXg5GCQXzKrYXTG0nWGP/74448//jX4JxcwAAAARIcLGAAAoI4L+F8AAACIDhcwAABAHRfwTwAAAIgNFzAAAEAdqO8Zfn5/A286/F78rO80/vjj/6H9v/P3/397ZbAbKQwD0IhLjyAkQIKIy1zo///gQhLHDjDbkVbN7HbfGwpJ7Dh+6iH419x8voABAACgBu6xvcLjlbTH3ecPeLxe4/Fq/HH2wR9//PHHH/83+D/cBgAAANVxU2SbbnmybNafZbzGVuzfikGObWV4e3bwlle3r056VRR//PHHH3/8v8U/X8AAAABQEecTk/dmeIRkcbLhqcyScZxMNiVPTGU7txHJ1UOlZEwrSsSM6dT0ZSZF/E37Uz5/wh9//PHHH/83+OsFDAAAAPXYL+Bx9OPxjq9jlp7xSBjj4ujT2pEsG2QiOYnTks+Vc9CM9QhvNozFob5c1R6lT4l6r917Pc2nQNzjiz7wxx9//PHH/w3+3o0AAABQHdd149jJqxOO6R6N3y4MxjiI0TjJm2JaN3ZpPaSMOTvVPL1GPcYsd6mSFJOCGg+H2z5yUDakpHSCdGPry4HSBP74448//vhX9T8uYAAAAKjNfgH3fZ71+2+f9538uvAXB5LXh1GaxbGs2kAK64buXE23aj99IlfoUlqq30sfvcR77cluj530Redd0bOUwh9//PHHH//q/p3rAQAAoDrhAp71Lz06Sy/9zpou4TmuziZHkfxUM6fJGedNucos37m3HcyzOdycaQ7MHV6YzXJZF3/88ccff/xr+rsZAAAAqnNzAbf6bXVmA+1Lpc9pba7ahvGlTJvWylPt7jb9Tg3dzZ639ZUD/vjjjz/++H+/v2sBAACgOlzAAAAA77iA17VdL+xLbSsjXbtZae2W42nXy45L7Wv8LrX93dnrF7UvRS4lcqv444//T/Vf+f/z//97/Y8LGAAAAGrjlmVZ5UmvYiGuyHA1KQXr6bPeBG9SV/N3qXk6X+PrYjoxs1WOvpy+angvuZYt4o8//vjjj39t/3ABAwAAQGXcMgzDEl5DZomv5QgcT47qdDGpS/6FR1MXjdvyMW6qXpJkY6oQqy7lieduzaT8Ltpw6rIshT/++OOPP/7V/Rc3AAAAQHXc0AzHc7z2XxP+lBBoYjTOm7AQE8OeIYYH2Z7ieVkjYSUWMcfkBDvSV6qW6urBKWVIOU0jkdRWLpcOldXcRdNow/jjjz/++ONf139wDQAAAFSHCxgAAOAdF/AnAAAA1IYLGAAA4B24j3+Ez4//G/zxxx9//H+WlvsAAACA6nABAwAAvIFf+31ecRZFRK0AAAAASUVORK5CYII="), this.background.alpha = .4, this.background.anchor.set(0, 1), this.background.position.set(0, this.game.viewport.height), this.buttonMenu = new Ws, this.buttonMenu.position.set(77, 1013), this.buttonMaxBet = new eo(this.game.betLevel), this.buttonMaxBet.position.set(213, 1013), this.buttonAutoPlay = new Rs, this.buttonAutoPlay.position.set(833, 1013), this.buttonQuickSpin = new _s, this.buttonQuickSpin.position.set(1084, 1014), this.buttonSound = new Vs, this.buttonSound.position.set(1840, 1012), this.spinBackAnimation = new fs(this.game.loader.getAsset("spinBackAnimation")), this.spinBackAnimation.play("static", !0), this.spinBackAnimation.position.set(956, 1022), this.spinBackAnimation.hitArea = new X.Rectangle(0, 0, 0, 0), this.spinFrontAnimation = new fs(this.game.loader.getAsset("spinFrontAnimation")), this.spinFrontAnimation.play("static", !0), this.spinFrontAnimation.position.set(964, 1019), this.spinFrontAnimation.hitArea = new X.Rectangle(0, 0, 0, 0), this.buttonSpin = function() {
                            var t = new(x()),
                                e = new io({
                                    textures: {
                                        normal: arguments.length <= 0 ? void 0 : arguments[0],
                                        hover: arguments.length <= 1 ? void 0 : arguments[1],
                                        press: arguments.length <= 2 ? void 0 : arguments[2],
                                        disable: arguments.length <= 3 ? void 0 : arguments[3]
                                    }
                                });
                            e.hitArea = new X.Rectangle(20, 20, e.width - 40, e.height - 40);
                            var i = new fs(Lt.loader.getAsset("effectSpin"));
                            i.position.set(-5, -3), e.addChild(i), e.hitArea = new X.Rectangle(10, 5, 120, 130), i.play("static", !1), e.name = "buttonSpin", e.onClick.add(o);
                            var s = Lt.keyboard.register(Lt.keyboard.KEY_CODE.Space);

                            function o() {
                                t.handlers(!0) ? t.dispatch() : (Lt.store.get("spin:isSpin", !1) || i.play("press", !1), Lt.action.emit("clickSpin"))
                            }

                            function n() {
                                e.disable(), s.disable()
                            }

                            function a() {
                                Qi.isFreespin() || "bonus" === Lt.store.get("bonusGame:isBonus") || (e.enable(), s.enable(), e.visible = !0, i.play("static", !1))
                            }

                            function h() {
                                s.disable(), e.visible = !1
                            }

                            function r() {
                                s.enable()
                            }

                            function l() {
                                s.enable(), Qi.isFreespin() || (e.visible = !0)
                            }

                            function d() {
                                s.disable(), e.disable()
                            }
                            return s.onPress.add(o), s.disable(), e.onHover.add((() => {
                                i.play("hover", !1)
                            })), Lt.action.on("spin:fast", n), Lt.action.on("state:ready_enter", l), Lt.action.on("state:finish_exit", a), Lt.action.on("free:start", h), Lt.action.on("free:restore", h), Lt.action.on("free:stop", (() => {
                                e.visible = !0, e.disable(), s.disable()
                            })), Lt.action.on("free:select_start", r), Lt.action.on("bonusGame:start", d), Lt.action.on("bonusGame:end", (() => {
                                "freespin" !== Lt.store.get("reward:feature") && (s.enable(), e.enable())
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
                                    e.enable(), s.enable()
                                },
                                disable() {
                                    e.disable(), s.disable(), t.handlers(!0) && t.detachAll()
                                }
                            }
                        }(t.btn_spin_active, t.btn_spin_hover, t.btn_spin_press, t.btn_spin_inactive), this.buttonSpin.container.position.set(876, 935), this.buttonAccept = new Ms, this.buttonAccept.position.set(958, 1013), this.textWin = new mo, this.textWin.anchor.x = .5, this.textWin.position.set(1400, 980), this.textBalance = new lo, this.textBalance.anchor.x = 1, this.textBalance.position.set(1760, 980), this.freeRoundLeft = no(Js.Common), this.freeRoundLeft.container.position.set(1700, 1054), this.freeRoundTotalWin = ao(Js.Common), this.freeRoundTotalWin.container.position.set(1400, 980), this.textFreeSpinLeft = new co, this.textFreeSpinLeft.visible = !1, this.textFreeSpinLeft.anchor.x = .5, this.textFreeSpinLeft.position.set(640, 980), this.textFreeSpinTotalWin = new go, this.textFreeSpinTotalWin.visible = !1, this.textFreeSpinTotalWin.anchor.x = .5, this.textFreeSpinTotalWin.position.set(960, 955), this.addChild(this.background), this.addChild(this.textFreeSpinLeft), this.addChild(this.textFreeSpinTotalWin), this.addChild(this.buttonMenu), this.addChild(this.buttonMaxBet), this.game.config.get("autoPlay.available", !0) && this.addChild(this.buttonAutoPlay), this.game.config.get("quickSpin.available", !0) && this.addChild(this.buttonQuickSpin), this.addChild(this.buttonSound), this.addChild(this.spinBackAnimation), this.addChild(this.buttonSpin.container), this.addChild(this.spinFrontAnimation), this.addChild(this.buttonAccept), this.addChild(this.textWin), this.game.config.get("balanceHide", !1) || this.addChild(this.textBalance), this.addChild(this.freeRoundTotalWin.container), this.addChild(this.freeRoundLeft.container), this.textWin.update(this.game.wallet.coins), this.textBalance.update(this.game.wallet.balance), this.game.freeRound.onStart.once((t => {
                            this.textBalance.visible = !1, this.freeRoundLeft.updateLeft(t), this.freeRoundLeft.show(), this.freeRoundTotalWin.updateTotalWin(this.game.wallet.totalCoins), this.game.store.get("free:isFree", !1) || (this.textWin.visible = !1, this.freeRoundTotalWin.show())
                        })), this.game.freeRound.onFinish.once((() => {
                            this.freeRoundLeft.hide(), this.freeRoundTotalWin.hide(), this.textWin.visible = !0, this.textWin.update(this.game.wallet.totalCoins, !0), this.textBalance.visible = !0, this.textBalance.update(this.game.wallet.balance)
                        })), this.game.action.on("state:spin_enter", (() => {
                            this.game.autoPlay.enabled || this.buttonAutoPlay.disable(), this.game.store.get("free:isFree", !1) || (this.freeRoundLeft.updateLeft(this.game.freeRound.left - 1), this.textBalance.update(this.game.wallet.balance - this.game.betLevel.toCoins()))
                        })), this.game.action.on("bonusGame:start", (() => {
                            this.buttonAutoPlay.disable(), this.buttonQuickSpin.disable(), this.buttonSound.visible = !1, this.buttonMenu.disable()
                        })), this.game.action.on("bonusGame:end", (() => {
                            "freespin" !== this.game.store.get("reward:feature") && (this.buttonAutoPlay.enable(), this.buttonMaxBet.enable()), this.buttonQuickSpin.enable(), this.buttonSound.visible = !0, this.buttonMenu.enable()
                        })), this.game.action.on("free:restore", (() => {
                            this.buttonAutoPlay.visible = !1, this.buttonAutoPlay.disable(), this.textFreeSpinTotalWin.update(this.game.wallet.totalCoins), this.textFreeSpinTotalWin.visible = !0, this.textFreeSpinLeft.visible = !0, this.spinBackAnimation.visible = !1, this.spinFrontAnimation.visible = !1, this.game.freeRound.enabled && (this.freeRoundTotalWin.container.visible = !1, this.textWin.visible = !0), this.game.device.desktop && this.buttonQuickSpin.position.set(1233, 1014)
                        })), this.game.action.on("free:start", (() => {
                            this.buttonAutoPlay.visible = !1, this.buttonAutoPlay.disable(), this.buttonMenu.disable(), this.textFreeSpinTotalWin.update(this.game.wallet.totalCoins), this.textFreeSpinTotalWin.visible = !0, this.textFreeSpinLeft.visible = !0, this.spinBackAnimation.visible = !1, this.spinFrontAnimation.visible = !1, this.game.freeRound.enabled && (this.freeRoundTotalWin.container.visible = !1, this.textWin.visible = !0), this.game.device.desktop && this.buttonQuickSpin.position.set(1233, 1014)
                        })), this.game.action.on("free:stop", (() => {
                            this.buttonAutoPlay.visible = !0, this.textBalance.update(this.game.wallet.balance), this.textFreeSpinTotalWin.visible = !1, this.textFreeSpinTotalWin.text = "", this.textFreeSpinLeft.visible = !1, this.textFreeSpinLeft.text = "", this.spinBackAnimation.visible = !0, this.spinFrontAnimation.visible = !0, this.textWin.update(this.game.wallet.totalCoins, !0), this.game.freeRound.enabled && (this.freeRoundTotalWin.container.visible = !0, this.textWin.visible = !1), this.game.device.desktop && this.buttonQuickSpin.position.set(1084, 1014)
                        })), this.game.action.on("free:updateLeft", (t => {
                            this.textFreeSpinLeft.change(t)
                        })), this.game.action.on("reward:reset", (() => {
                            this.textWin.update(0)
                        })), this.game.action.on("state:ready_exit", (() => {
                            this.textWin.update(0)
                        })), this.game.action.on("update:win", (() => {
                            this.textWin.update(this.game.store.get("reward:bonus", !1) ? this.game.wallet.totalCoins : this.game.wallet.coins), (this.game.store.get("free:isFree", !1) || this.game.store.get("free:isEnd", !1)) && this.textFreeSpinTotalWin.update(this.game.wallet.totalCoins)
                        })), this.game.action.on("update:balance", (() => {
                            Qi.isFreespin() || this.textBalance.update(this.game.wallet.balance)
                        })), this.game.action.on("state:setup_enter", (() => {
                            Qi.isFreespin() && (this.y = this.y + this.height + 100)
                        })), this.game.action.on("state:finish_exit", (() => {
                            Qi.isBasic() && (this.game.autoPlay.enabled || this.buttonMenu.enable(), this.buttonAutoPlay.enable())
                        })), this.game.autoPlay.on("disable", (() => {
                            this.buttonAutoPlay.disable()
                        })), this.game.action.on("free:select_start", (() => {
                            k.fromTo(this, .5, {
                                pixi: {
                                    y: this.y + this.height
                                }
                            }, {
                                pixi: {
                                    y: 0,
                                    alpha: 1
                                }
                            })
                        })), this.game.action.on("free:select_stop", (() => {
                            k.fromTo(this, .5, {
                                pixi: {
                                    y: this.y + this.height
                                }
                            }, {
                                pixi: {
                                    y: 0,
                                    alpha: 1
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
                    onPopupShow() {
                        this.buttonAutoPlay.disable(), this.buttonMenu.disable(), this.buttonMaxBet.disable()
                    }
                    onPopupHide() {
                        this.buttonAutoPlay.enable(), this.buttonMenu.enable(), this.buttonMaxBet.enable()
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
                        this.buttonSpin.hide(), this.spinBackAnimation.visible = !1, this.spinFrontAnimation.visible = !1, this.buttonAccept.show(), this.buttonAutoPlay.setActive(!0)
                    }
                    onAutoPlaySettingsClose() {
                        this.buttonSpin.show(), this.buttonSpin.enable(), this.spinBackAnimation.visible = !0, this.spinFrontAnimation.visible = !0, this.buttonAccept.hide(), this.buttonAutoPlay.setActive(!1)
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
                        k.fromTo(this, .5, {
                            pixi: {
                                y: this.y
                            }
                        }, {
                            pixi: {
                                y: this.y + this.height + 100
                            }
                        })
                    }
                }
                class vo extends $.j {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16777215,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .75;
                        super(d.xE.WHITE), this.height = 4, this.tint = t, this.alpha = e
                    }
                }

                function bo(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function fo(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? bo(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : bo(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                var yo, wo;
                ! function(t) {
                    t.Bet = "bet", t.Win = "win", t.Balance = "balance", t.FreeLeft = "freeLeft", t.FreePlayed = "freePlayed", t.TotalWin = "totalWin", t.FreeRoundLeft = "freeRoundLeft", t.BonusLeft = "bonusLeft"
                }(yo || (yo = {})),
                function(t) {
                    t.Free = "free", t.Normal = "normal", t.Bonus = "bonus"
                }(wo || (wo = {}));
                var xo, So = {
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
                    ko = fo(fo({}, So), {}, {
                        value: fo(fo({}, So.value), {}, {
                            fill: 16777215
                        })
                    });
                class Co extends(Gt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "state", void 0), (0, n.Z)(this, "textBet", void 0), (0, n.Z)(this, "textWin", void 0), (0, n.Z)(this, "textBalance", void 0), (0, n.Z)(this, "textFreeRound", void 0), (0, n.Z)(this, "textFree", void 0), (0, n.Z)(this, "textTotalWin", void 0), (0, n.Z)(this, "textBonus", void 0), (0, n.Z)(this, "delimiter", void 0), this.state = wo.Normal, this.textBet = new Ee("", fo(fo({}, So), {}, {
                            default: fo(fo({}, So.default), {}, {
                                align: "left"
                            })
                        })), this.textBet.anchor.set(0, 0), this.textWin = new Ee("", So), this.textWin.anchor.set(.5, 0), this.textBalance = new Ee("", fo(fo({}, So), {}, {
                            default: fo(fo({}, So.default), {}, {
                                align: "right"
                            })
                        })), this.textBalance.anchor.set(1, 0), this.textFreeRound = new Ee("", fo(fo({}, So), {}, {
                            default: fo(fo({}, So.default), {}, {
                                align: "center",
                                wordWrap: !0,
                                wordWrapWidth: 300
                            })
                        })), this.textFreeRound.anchor.set(1, 1), this.textFree = new Ee("", fo(fo({}, ko), {}, {
                            default: fo(fo({}, ko.default), {}, {
                                fontSize: 30,
                                wordWrapWidth: 340
                            })
                        })), this.textFree.anchor.set(0, 1), this.textTotalWin = new Ee("", fo(fo({}, ko), {}, {
                            default: fo(fo({}, ko.default), {}, {
                                fontFamily: "Avenir-Bold",
                                fill: this.game.config.get("colors.primary"),
                                fontSize: 30,
                                wordWrapWidth: 300
                            }),
                            value: fo(fo({}, ko.value), {}, {
                                fill: this.game.config.get("colors.primary")
                            })
                        })), this.textTotalWin.anchor.set(.5, 1), this.textBonus = new Ee("", fo(fo({}, ko), {}, {
                            default: fo(fo({}, ko.default), {}, {
                                fontSize: 27,
                                wordWrapWidth: 340
                            })
                        })), this.textBonus.anchor.set(0, 1), this.delimiter = new vo(16777215, .5), this.addChild(...[this.textBet, this.textWin, !this.game.config.get("balanceHide", !1) && this.textBalance, this.textFreeRound, this.textFree, this.textTotalWin, this.textBonus, this.delimiter].filter(Boolean)), this.game.freeRound.onStart.once((() => {
                            this.textBalance.visible = !1, this.textFreeRound.visible = !0
                        })), this.game.freeRound.onFinish.once((() => {
                            this.textBalance.visible = !0, this.textFreeRound.visible = !1
                        }))
                    }
                    resize() {
                        var t = this.state === wo.Free,
                            e = this.state === wo.Bonus;
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
                            case yo.Bet:
                                var e = this.game.helpers.toMoneySS(t.value),
                                    i = this.game.i18n.t("StatusBarMobileBet", this.game.i18n.currency({
                                        withBrace: !0
                                    }));
                                this.textBet.text = "".concat(i, "<value>").concat(e, "</value>");
                                break;
                            case yo.Win:
                                var s = this.game.i18n.t("StatusBarMobileWin", this.game.i18n.currency({
                                    withBrace: !0
                                }));
                                t.value > 0 || t.disableZeroCheck ? this.textWin.text = "".concat(s, "<value>").concat(this.game.helpers.toMoney(t.value), "</value>") : this.textWin.text = s;
                                break;
                            case yo.Balance:
                                var o = this.game.i18n.t("StatusBarMobileBalance", this.game.i18n.currency({
                                    withBrace: !0,
                                    withSpace: !0
                                }));
                                this.textBalance.text = "".concat(o, "<value>").concat(this.game.helpers.toMoney(t.value), "</value>"), this.game.action.emit("balance_updated", t.value);
                                break;
                            case yo.FreeLeft:
                                var n = 0 === t.value;
                                this.textFree.text = n ? this.game.i18n.t("StatusBarMobileFreeLast") : this.game.i18n.t("StatusBarMobileFreeLeft", t.value);
                                break;
                            case yo.FreePlayed:
                                var a = this.game.i18n.t("StatusBarMobileFreePlayed");
                                this.textFree.text = "".concat(a, "<value>").concat(t.value, "</value>");
                                break;
                            case yo.FreeRoundLeft:
                                var h = this.game.i18n.t("StatusBarMobileFreeRoundLeft");
                                this.textFreeRound.text = "".concat(h, "<value>").concat(t.value, "</value>");
                                break;
                            case yo.BonusLeft:
                                var r = 0 === t.value,
                                    l = -1 === t.value;
                                this.textBonus.text = l ? "" : r ? this.game.i18n.t("StatusBarMobileBonusLast") : this.game.i18n.t("StatusBarMobileBonusLeft", t.value);
                                break;
                            case yo.TotalWin:
                                var d = this.game.i18n.t("StatusBarMobileTotalWin", this.game.i18n.currency({
                                    withBrace: !0
                                }));
                                this.textTotalWin.text = "".concat(d, "<value>").concat(this.game.helpers.toMoney(t.value), "</value>")
                        }
                        this.resize()
                    }
                    changeState(t) {
                        this.state = t, t === wo.Free ? (this.textFree.visible = !0, this.textTotalWin.visible = !0, this.textWin.visible = !0, this.textBonus.visible = !1, this.visible = !0) : t === wo.Normal ? (this.textFree.visible = !1, this.textTotalWin.visible = !1, this.textWin.visible = !0, this.textBonus.visible = !1, this.visible = !0) : t === wo.Bonus && (this.textBonus.visible = !0, this.textTotalWin.visible = !0, this.textWin.visible = !1, this.visible = !0), this.resize()
                    }
                }
                class Bo extends(Gt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "buttonSpin", void 0), this.interactive = !0, this.buttonMode = !0, this.buttonSpin = this.addChild(new Xt("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACGCAMAAAAvpwKjAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAByUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////3C/CN8AAAAldFJOUwC/70DfEIBg/iDeb1AwkAFwX88hj3/uvp+voEERzjFPcWFRnrBEY9GsAAAE1UlEQVR42s2caXvqLBCGBRKWbJqoWaz2rPz/v/hq0/dcRgMMZIjOV5v27jMLzEDcbBZYqkomblYwptLN+laKakionlpDqpytRZCyijwCTGCqIrowKicaYCQvI+oAYxgtyVUUCObB8K1JjS9EowMsqzElSY9UB1pyRAMJhxhBUBKHJXqhZbYYKQjt3IIpohEsM/2h7eHrY5deOdUoJo+zv34//pPyxwpSmAX5+Pa3FDaKmmpEexZk9+8jG8ZBI1s/EeQ8aACGajS63Tvm8y4BzRgq0RGsLWZj34jBqI5icjeW5anDTRi1jmVfgbp/cLgBIx7FF8fvR6nnMWJS3Nb/ZzSxPsWcQjMYhX4HDEXfASNOvfDGeAXFM4bfOkKboec8zzmvBkLxMHL4o00lHpZuVVQEBQMcniQ37JeUGJZjwAKDcuueTYlkGcYRtNGu3RttX5AJhoIosYNt5/1AJhgAr1bwloMHYgi3P7yGF/skCMP51Mm3++IBGM743Pk3fD+9MVxrCS0C+s7twRfDIQYNmd6kB181HGIkIdOBfeMdGwJfi9/UP1PsYhTxwmKCYReDBziEhFRR60OVP8VHErKmWFeTxH9mtAtbYa2PeSfJuQ9c6BNMl+z9t7MjRolZMUTAnnTEsPmkjpinDxiWapd4avErfEusEMUg4RgFnhjbUzjGCU2Ma90Kx2gQa8amIIEYqfnjv0HHDcUpCcBgiD75dyKYey9tlqqx6ASCnby2PZW5U118QCgGCsUgmPuMGVGqBoRhjieso12nKDeMSKHxJAqxYphLOcU+ShamTL5ilPEiFJzJVwyGW7yCytsVo8DcCgeKcsUQcfMVJIpkFgwR/Q6GEqMo3ealGGMm97eR3qsxnE30m2Dw98Co1sQwl69+1atT5uH8mhjrLW12W2ehd5p52/NjTYzhPTL2tNaGIz0OhLPUf0KEGhz/j1/I/J1BS7uEWc4nzX7TF499qaV5xPTKU5N9qaGpQtM4YsxcbrG1bYi5MjtxaGvQ4uY9ZvEdA7UlKDjQGjfTTKy7+xkSPUi3pvi7v//G8WZw3gPCDlQ5QibmM+NrczK2oJTFSRaL3FIBTyo/l5dx20yBQbY+GG7Z2sSWJSxXtD4sxLAek8jJNNM6jPm5zCXWSU83+Vn7UOgjlku0rKGxfFvi9lGy5La6Paz2djmSfZTAeC4HjtsFoRyfjknk0+bHMUelQeXj0/Fb/3j68JYvW//+2EEhnw/d09bFcThjn7t1Xq19WIC4LyzM33Lv3DN2DhYE8hJH5tlU3wkiYBECOaSXRUil8QCBvdjzx/T4RcNA9jYS6BtOxrc0NqrVMBvEeZ4kZT3wcFyy4NI72Szzj/MjQu5xadS6q/O780DJwPntZUPOe+J33Hix59lFr2KZ44RXZWtQtM5z5rKNTyEBEwsho2NwhJ3KShR+N07jUVw55DtQXP0i34Hi2rhEypfvl4bgE/0o9aP1ni3GqGNZwIXP9IAdIF1YU75rXxkWcRyTLZnmoVWQw7IpieowQC7LB5tisWfa3QbD+CIQx+ssPp7hmXw5xBeICALBhRhjpJOeJMY3nBZKkmdwEsojfhVHmYM0SaroXweiiv4iLSxJL9RmHbs2aIfuaX6RNH3OXvAVLapkhRiNlYsk+A+HePiNW7TbtgAAAABJRU5ErkJggg==", 245)), this.buttonSpin.setBackgroundAlpha(.6), this.buttonSpin.setBackgroundColor(this.game.config.get("colors.primary")), this.buttonSpin.useClickSound = !1
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
                class Po extends Qs {
                    constructor() {
                        super(), (0, n.Z)(this, "autoPlayButton", void 0), (0, n.Z)(this, "betButton", void 0), (0, n.Z)(this, "buttonAccept", void 0), (0, n.Z)(this, "buttonMenu", void 0), (0, n.Z)(this, "buttonQuickSpin", void 0), (0, n.Z)(this, "buttonSound", void 0), (0, n.Z)(this, "buttonSpin", void 0), (0, n.Z)(this, "onPressButtonSpin", void 0), (0, n.Z)(this, "state", void 0), (0, n.Z)(this, "statusBar", void 0), this.state = wo.Normal, this.onPressButtonSpin = new(x()), this.statusBar = new Co, this.statusBar.changeState(this.state), this.game.freeRound.enabled ? (this.statusBar.update({
                            type: yo.Win,
                            value: this.game.store.get("free:isFree", !1) ? this.game.wallet.coins : this.game.wallet.totalCoins
                        }), this.statusBar.update({
                            type: yo.FreeRoundLeft,
                            value: this.game.freeRound.left
                        })) : (this.statusBar.update({
                            type: yo.Win,
                            value: this.game.wallet.coins
                        }), this.statusBar.update({
                            type: yo.Balance,
                            value: this.game.wallet.balance
                        })), this.buttonMenu = new Ws, this.buttonSound = new Vs, this.buttonSpin = new Bo, this.game.interaction.hover(this.buttonSpin, (() => {
                            this.buttonSpin.scale.set(1), k.to(this.buttonSpin, .2, {
                                pixi: {
                                    scale: 1.04
                                },
                                yoyo: !0,
                                repeat: 1
                            })
                        })), this.game.interaction.click(this.buttonSpin, (() => {
                            this.onPressButtonSpin.handlers(!0) ? this.onPressButtonSpin.dispatch() : this.game.action.emit("clickSpin")
                        })), this.buttonAccept = new Ms, this.buttonQuickSpin = new _s, this.autoPlayButton = new Rs, this.autoPlayButton.scale.set(1.6), this.betButton = new Hs, this.betButton.disable(), this.betButton.onClick.add((() => this.game.action.emit("clickMaxBet"))), this.game.action.on("update:win", (() => {
                            var t = this.game.store.get("free:isFree", !1) || this.game.store.get("free:isEnd", !1);
                            this.game.freeRound.enabled || this.game.store.get("free:isStart", !1) ? (this.statusBar.update({
                                type: yo.Win,
                                value: t ? this.game.wallet.coins : this.game.wallet.totalCoins
                            }), this.statusBar.update({
                                type: yo.TotalWin,
                                value: this.game.wallet.totalCoins
                            })) : t ? (this.statusBar.update({
                                type: yo.Win,
                                value: this.game.wallet.coins
                            }), this.statusBar.update({
                                type: yo.TotalWin,
                                value: this.game.wallet.totalCoins
                            })) : (this.statusBar.update({
                                type: yo.Win,
                                value: this.game.wallet.totalCoins
                            }), this.statusBar.update({
                                type: yo.Balance,
                                value: this.game.wallet.balance
                            }))
                        })), this.game.action.on("update:balance", (() => {
                            this.game.freeRound.enabled || Qi.isFreespin() || this.statusBar.update({
                                type: yo.Balance,
                                value: this.game.wallet.balance
                            })
                        })), this.game.action.on("reward:reset", (() => {
                            this.statusBar.update({
                                type: yo.Win,
                                value: 0
                            })
                        })), this.game.action.on("free:restore", (() => {
                            this.state = wo.Free, this.buttonMenu.hide(), this.betButton.hide(), this.autoPlayButton.hide(), this.buttonSpin.visible = !1, this.buttonSound.show(), this.statusBar.changeState(this.state), this.statusBar.update({
                                type: yo.TotalWin,
                                value: this.game.wallet.totalCoins
                            }), this.statusBar.update({
                                type: yo.FreeLeft,
                                value: this.game.store.get("free:left", 1) - 1
                            }), this.resize()
                        })), this.game.action.on("free:start", (() => {
                            this.state = wo.Free, this.buttonMenu.hide(), this.betButton.hide(), this.autoPlayButton.hide(), this.buttonSpin.visible = !1, this.buttonSpin.interactive = !1, this.autoPlayButton.disable(), this.buttonMenu.disable(), this.buttonSound.show(), this.statusBar.visible = !0, this.statusBar.changeState(this.state), this.statusBar.update({
                                type: yo.Win,
                                value: 0
                            }), this.statusBar.update({
                                type: yo.TotalWin,
                                value: this.game.wallet.totalCoins,
                                disableZeroCheck: !0
                            }), this.statusBar.update({
                                type: yo.FreeLeft,
                                value: this.game.store.get("free:left", 1) - 1
                            }), this.resize()
                        })), this.game.action.on("free:stop", (() => {
                            this.state = wo.Normal, this.buttonMenu.show(), this.buttonSpin.visible = !0, this.betButton.show(), this.buttonQuickSpin.show(), this.autoPlayButton.show(), this.statusBar.visible = !0, this.buttonSound.hide(), this.statusBar.changeState(this.state), this.game.freeRound.enabled || this.statusBar.update({
                                type: yo.Balance,
                                value: this.game.wallet.balance
                            }), this.statusBar.update({
                                type: yo.Win,
                                value: this.game.wallet.totalCoins,
                                disableZeroCheck: !0
                            }), this.resize()
                        })), this.game.action.on("free:updateLeft", (t => {
                            this.statusBar.update({
                                type: yo.FreeLeft,
                                value: t
                            })
                        })), this.game.action.on("state:ready_enter", (() => {
                            !Qi.isBasic() || this.game.autoPlay.enabled || this.game.freeRound.enabled || (this.betButton.show(), this.betButton.enable())
                        })), this.game.action.on("state:spin_enter", (() => {
                            var t = this.game.autoPlay.enabled,
                                e = Qi.isFreespin();
                            if (this.betButton.disable(), t || this.autoPlayButton.disable(), this.statusBar.update({
                                    type: yo.Win,
                                    value: !e && this.game.freeRound.enabled ? this.game.wallet.totalCoins : 0
                                }), !e) {
                                var i = this.game.wallet.balance,
                                    s = this.game.betLevel.toCoins();
                                this.game.freeRound.enabled ? this.statusBar.update({
                                    type: yo.FreeRoundLeft,
                                    value: this.game.freeRound.left - 1
                                }) : (this.statusBar.update({
                                    type: yo.Win,
                                    value: 0
                                }), this.statusBar.update({
                                    type: yo.Balance,
                                    value: i - s
                                }))
                            }
                        })), this.game.action.on("state:stop_exit", (() => {
                            var t = this.game.autoPlay.enabled,
                                e = Qi.isFreespin(),
                                i = "bonus" === this.game.store.get("reward:feature");
                            (t && i || !e) && (this.buttonSpin.interactive = !0)
                        })), this.game.action.on("state:setup_enter", (() => {
                            Qi.isFreespin() && (this.alpha = 0)
                        })), this.game.action.on("bonusGame:start", (() => {
                            this.buttonQuickSpin.disable(), this.buttonSpin.interactive = !1, this.autoPlayButton.disable(), this.buttonMenu.disable(), this.betButton.disable()
                        })), this.game.action.on("bonusGame:end", (() => {
                            this.buttonQuickSpin.enable(), this.autoPlayButton.enable(), this.buttonMenu.enable(), this.buttonSpin.interactive = !0, this.betButton.enable()
                        })), this.game.action.on("free:select_start", (() => {
                            k.fromTo(this, .5, {
                                pixi: {
                                    alpha: 0
                                }
                            }, {
                                pixi: {
                                    alpha: 1
                                }
                            })
                        })), this.game.action.on("free:select_stop", (() => {
                            k.fromTo(this, .5, {
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
                            Qi.isFreespin() || t || (this.buttonSpin.visible = !0, this.buttonSpin.interactive = !0, this.buttonQuickSpin.show(), this.autoPlayButton.show(), this.autoPlayButton.enable(), this.buttonMenu.show(), this.buttonMenu.enable())
                        })), this.game.freeRound.onFinish.once((() => {
                            this.statusBar.update({
                                type: yo.Balance,
                                value: this.game.wallet.balance
                            }), this.statusBar.update({
                                type: yo.Win,
                                value: this.game.wallet.totalCoins,
                                disableZeroCheck: !0
                            })
                        })), this.addChild(...[this.buttonSound, this.buttonMenu, this.game.config.get("autoPlay.available", !0) && this.autoPlayButton, this.game.config.get("quickSpin.available", !0) && this.buttonQuickSpin, this.betButton, this.buttonSpin, this.buttonAccept, this.statusBar].filter(Boolean))
                    }
                    resize() {
                        var t, e = this.game.menu.opened,
                            i = null === (t = this.game.leftHand) || void 0 === t ? void 0 : t.enabled;
                        if (this.game.device.landscape) this.betButton.position.set(120, 980), e && this.betButton.show(), i ? (this.buttonSound.position.set(120, this.state === wo.Free ? 300 : 780), this.buttonMenu.position.set(120, 120), this.buttonQuickSpin.position.set(120, 780), this.autoPlayButton.position.set(120, 300), this.buttonSpin.position.set(160, this.game.viewport.height / 2), this.buttonAccept.position.set(160, this.game.viewport.height / 2)) : (this.buttonSound.position.set(1780, this.state === wo.Free ? 300 : 780), this.buttonMenu.position.set(1780, 120), this.buttonQuickSpin.position.set(1780, 780), this.autoPlayButton.position.set(1780, 300), this.buttonSpin.position.set(1760, this.game.viewport.height / 2), this.buttonAccept.position.set(1760, this.game.viewport.height / 2));
                        else {
                            var s = 2 * this.game.viewport.paddingY + this.game.viewport.height;
                            this.buttonSound.position.set(110, this.state === wo.Free ? 100 : s - 318), this.autoPlayButton.position.set(540, s - 318), this.buttonQuickSpin.position.set(this.state === wo.Normal ? 748 : 955, s - 318), this.buttonMenu.position.set(955, s - 318), this.betButton.position.set(332, s - 318), e && this.betButton.hide(), this.buttonSpin.scale.set(1), this.buttonSpin.position.set(this.game.viewport.width / 2, s - 590), this.buttonAccept.position.set(this.game.viewport.width / 2, s - 590)
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
                    onPopupShow() {
                        this.autoPlayButton.disable(), this.buttonMenu.disable(), this.betButton.disable()
                    }
                    onPopupHide() {
                        this.autoPlayButton.enable(), this.buttonMenu.enable(), this.betButton.enable()
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
                            type: yo.Bet,
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
                }! function(t) {
                    t[t.START = 0] = "START", t[t.END = 1] = "END", t[t.RESTORE = 2] = "RESTORE"
                }(xo || (xo = {}));
                class Eo extends(Gt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "_timeline", void 0), (0, n.Z)(this, "_keyboardSpace", void 0), (0, n.Z)(this, "_content", void 0), (0, n.Z)(this, "_title", void 0), (0, n.Z)(this, "_win", void 0), (0, n.Z)(this, "_description", void 0), (0, n.Z)(this, "_buttonText", void 0), (0, n.Z)(this, "completeResolve", void 0), (0, n.Z)(this, "tweenAutoTimeout", void 0), this.visible = !1, this.completeResolve = !1, this.cursor = "pointer", this.interactive = !1, this._content = this.addChild(new H.W2), this._content.interactive = !1, this._content.interactiveChildren = !1, this._title = this._content.addChild(new Ee("", {
                            default: {
                                fill: "#ffffff",
                                fontFamily: "PT Sans Narrow Bold",
                                fontSize: 78,
                                align: "center",
                                wordWrap: !0
                            }
                        })), this._title.anchor.set(.5, 1), this._title.position.set(0, 100), this._win = this._content.addChild(new Ee("", {
                            default: {
                                fill: "#ffffff",
                                fontFamily: "PT Sans Narrow Bold",
                                align: "center",
                                fontSize: 110,
                                wordWrap: !0
                            },
                            value: {
                                fill: "#ff7800"
                            }
                        })), this._win.anchor.set(.5), this._win.position.set(0, 300), this._description = this._content.addChild(new Ee("", {
                            default: {
                                fontFamily: "PT Sans Narrow Bold",
                                fill: "#ffffff",
                                align: "center",
                                fontSize: 60,
                                wordWrap: !0
                            },
                            value: {
                                fill: "#ff7800"
                            }
                        })), this._description.anchor.set(.5), this._description.position.set(0, 450), this._buttonText = this._content.addChild(new Ee("", {
                            default: {
                                fontFamily: "PT Sans Narrow Bold",
                                fill: "#ffffff",
                                fontSize: 65,
                                align: "center",
                                wordWrap: !0
                            }
                        })), this._buttonText.anchor.set(.5, 0), this._buttonText.position.set(0, 600), this._timeline = new C({
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
                        var e = this.game.autoPlay.enabled;
                        return new Promise((i => {
                            this.completeResolve = i;
                            var s = "";
                            if (t === xo.START) {
                                s = "free:start", this.game.action.emit("sound:free_start");
                                var o = this.game.store.get("free:left", 0);
                                this._title.text = this.game.i18n.t("PopupFreeSpinsTitle"), this._win.text = this.game.i18n.t("PopupFreeSpinsWinStart", o), this._description.text = "", this._buttonText.text = this.game.i18n.t("PopupFreeSpinsButton"), e && (this.tweenAutoTimeout = k.to(this._buttonText, 1, {
                                    pixi: {
                                        scale: 1.1
                                    },
                                    repeat: 5,
                                    yoyo: !0,
                                    onComplete: () => {
                                        this.hide()
                                    }
                                }))
                            } else if (t === xo.END) {
                                s = "free:stop", this.game.action.emit("sound:free_stop");
                                var n = this.game.helpers.toMoney(this.game.wallet.freespinCoins),
                                    a = this.game.store.get("free:count", 0);
                                this._title.text = this.game.i18n.t("PopupFreeSpinsTitle"), this._win.text = this.game.i18n.t("PopupFreeSpinsWinStop", "".concat(n, "\t").concat(this.game.i18n.currency())), this._description.text = this.game.i18n.t("PopupFreeSpinsStopDescription", a), this._buttonText.text = this.game.i18n.t("PopupFreeSpinsButton"), e && (this.tweenAutoTimeout = k.to(this._buttonText, 1, {
                                    pixi: {
                                        scale: 1.1
                                    },
                                    repeat: 5,
                                    yoyo: !0,
                                    onComplete: () => {
                                        this.hide()
                                    }
                                }))
                            } else if (t === xo.RESTORE) {
                                s = "free:restore", this.game.action.emit("sound:free_start");
                                var h = this.game.store.get("free:left", 0);
                                this._title.text = this.game.i18n.t("PopupFreeSpinsTitleRestore"), this._win.text = this.game.i18n.t("PopupFreeSpinsWinRestore", h), this._description.text = "", this._buttonText.text = this.game.i18n.t("PopupFreeSpinsButton")
                            }
                            this.showContent(t).then((() => {
                                this.game.action.emit(s), this._keyboardSpace.enable(), this.interactive = !0
                            }))
                        }))
                    }
                    showContent(t) {
                        return t === xo.RESTORE ? Promise.resolve() : new Promise((t => {
                            this._timeline.vars.onComplete = () => {
                                t(), this._timeline.vars.onComplete = null
                            }, this._timeline.restart()
                        }))
                    }
                    resize() {
                        this.hitArea = new X.Rectangle(-this.game.viewport.paddingX, 0, this.game.viewport.width + 2 * this.game.viewport.paddingX, this.game.viewport.height), this._title.setTagStyle("default", {
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
                class To extends(Gt(H.W2)) {
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
                class Fo extends(Gt(H.W2)) {
                    constructor(t, e) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        super(), (0, n.Z)(this, "_box", void 0), (0, n.Z)(this, "_textNumber", void 0), (0, n.Z)(this, "number", void 0), (0, n.Z)(this, "positions", void 0), this.number = t, this.positions = e;
                        var [s, o] = i.length > 0 ? i : this.game.config.get("slot.size", []);
                        this._box = new u.TC;
                        this._box.lineStyle(1, 2763563), this._box.moveTo(0, 0), this._box.lineTo(16.4 * s, 0), this._box.lineTo(16.4 * s, 17.25 * o), this._box.lineTo(0, 17.25 * o), this._box.lineTo(0, 0), this._box.name = "PaytableBetLineBox", this._box.scale.set(2), this._box.y = 40;
                        for (var a = 0; a < o; a++)
                            for (var h = 0; h < s; h++) {
                                var r = this.game.loader.getAsset("assets/ui_2020/paytable_betlines_".concat(this.positions[h] === a ? "win" : "normal", ".png")),
                                    l = new $.j(r);
                                l.x = 3 + (l.width + 3) * h, l.y = 3.5 + (l.height + 3.5) * a, this._box.addChild(l)
                            }
                        this._textNumber = new A.xv(this.number, {
                            fontSize: 28,
                            fill: "white",
                            fontFamily: "Avenir-Medium",
                            fontWeight: "bold"
                        }), this._textNumber.anchor.x = .5, this._textNumber.x = this._box.width / 2, this._textNumber.y = 0, this.addChild(this._box, this._textNumber)
                    }
                }

                function Zo(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function Oo(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Zo(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Zo(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class Ro extends(Gt(A.xv)) {
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
                        this.style = Oo(Oo({}, this.style), e)
                    }
                    resize() {
                        this.game.device.desktop ? this.scale.set(1.2) : this.game.device.landscape ? (this.scale.set(2.2), this.setTagStyle("default", {
                            wordWrapWidth: 670
                        })) : (this.scale.set(2.2), this.setTagStyle("default", {
                            wordWrapWidth: 400
                        }))
                    }
                }
                class Mo extends(Gt(A.xv)) {
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
                class Wo extends(Gt(H.W2)) {
                    constructor(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                        super(), (0, n.Z)(this, "_payTableBetLineBoxs", void 0), (0, n.Z)(this, "_payTableParagraph", void 0), (0, n.Z)(this, "_payTableTitle", void 0), this._payTableBetLineBoxs = new H.W2, this._payTableTitle = new Mo(this.game.i18n.t("PaytableSectionBetLinesTitle").toUpperCase()), this._payTableParagraph = new Ro(this.game.i18n.t("PaytableSectionBetLinesContent1")), t.forEach(((t, i) => {
                            var s = new Fo(i + 1, t, e);
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
                const _o = Wo;
                class Do extends(Gt($.j)) {
                    constructor() {
                        super(d.xE.WHITE), this.tint = 2763563
                    }
                    resize() {
                        this.game.device.desktop ? (this.height = 4, this.width = 1120) : this.game.device.landscape ? (this.height = 6, this.width = 1580) : (this.height = 6, this.width = 950)
                    }
                }
                class Io extends(Gt(H.W2)) {
                    constructor(t) {
                        var e, i, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
                        super(), (0, n.Z)(this, "findIndex", void 0), (0, n.Z)(this, "findSymbol", void 0), (0, n.Z)(this, "foreground", void 0), (0, n.Z)(this, "layout", void 0), (0, n.Z)(this, "payoutSymbol", void 0), (0, n.Z)(this, "payoutText", void 0), (0, n.Z)(this, "payouts", void 0), this.payouts = null !== (e = null === (i = this.game.server.response) || void 0 === i ? void 0 : i.paytable) && void 0 !== e ? e : [], this.layout = this.game.config.get("slot.layout.".concat(s), []), this.findIndex = this.layout.findIndex((e => e.assetName === t)), this.findSymbol = this.layout[this.findIndex], this.foreground = this.addChild($.j.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAi8AAAFpCAMAAABj4ziaAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUdwTBcXFxUVFRUVFRUVFRUVFQ8PDxYWFg8PDxUVFRYWFhUVFRYWFhQUFBYWFhUVFRUVFRUVFRQUFBQUFBUVFRQUFBYWFhYWFvIqbjAAAAAXdFJOUwAg72De3yD+EI+fMM+f7+6QX6DPzp6gP4hhIQAAAyNJREFUeNrt2VluwkAQRdEyBtxtmylk2P9OAyRCJgQoonyes4Snq3JLjjgr7WqcfcDUbFztSlxbbrXCDavlj1pKNQp31Isbs1xYhLsWkxMzyIWHwQyuC3+4MEUupIL5esN46pJ89J6+RnYg6fhFejEDSdvD68UKZK1LtFYgrfU54gl97I1A2hj+MvLEAyZswBP0gl7QC3pBL+gF9IJe0At6QS/oBfSCXtALekEv6AX0gl7QC3pBL+gF9IJe0At6QS/oBfSCXtALekEv6AX0gl7QC3pBL+gF9IJe0At6QS+gF/SCXtALekEvoBf0gl7QC3pBL6AX9IJe0At6QS+gF/SCXtALekEvoBf0gl7QC3pBL6AX9IJe0At6QS+gF/SCXtALegG9oBf0gl7QC3oBvaAX9IJe0At6Ab2gF/SCXtALegG9oBf0gl7QC3oBvaAX9IJe0At6Ab2gF/SCXtALegG9oBf0gl7QC+gFvaAX9IJe0AvoBb2gF/SCXtAL6AW9oBf0gl7QC+gFvaAX9IJe0AvoBb2gF/SCXtAL6AW9oBf0gl7QC+gFvaAX9IJe0AvoBb2gF/SCXkAv6AW9oBf0gl5AL+gFvaAX9IJeQC/oBb2gF/SCXkAv6AW9oBf0gl5AL+gFvaAX9IJeQC/oBb2gF/SCXkAv6AW9oBf0AnpBL+gFvaAX9AJ6QS/oBb2gF/QCekEv6AW9oBf0AnpBL+gFvaAX9AJ6QS/oBb2gF/QCekEv6AW9oBf0AnpBL+gFvaAX0At6QS/oBb2gF9ALekEv6AW9oBfQC3pBL+gFvaAX0At6QS/oBb2gF9ALekEv6AW9oBfQC3pBL+gFvaAX0At6QS/oBb2gF9ALekEv6AW9gF7QC3pBL+gFvYBe0At6QS/oBb2AXtALekEv6AW9gF7QC3pBL+gFvYBe+LdeZjYgbR17I5A2xrsRSOujNQJpuygeMKSViK0VSH+OIhozkNQceolqB1LqMZcoc0uQMC+nXqIRDIlcmvg2CIaHuQxx5sKQvi6nN0ztTMJNXS1xqek7yfBrLJvaxLXS9q+bDqY2r2/t5LZ8Ag1+oBbvnKajAAAAAElFTkSuQmCC")), this.foreground.width = 559, this.foreground.height = 361, this.payoutSymbol = new $.j(this.game.loader.getAsset(this.findSymbol.textureAtlas, this.findSymbol.assetName)), this.payoutSymbol.scale.set(.85), this.payoutSymbol.anchor.set(.5), this.payoutSymbol.position.set(this.foreground.width / 2 - 120, this.foreground.height / 2), this.payoutText = new Ee("", {
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
                class Lo extends(Gt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "_sectionParagraph1", void 0), (0, n.Z)(this, "_sectionTitle", void 0), (0, n.Z)(this, "_symbolBonus", void 0);
                        var t = this.game.i18n.t("PaytableSectionBonusTitle");
                        this._sectionTitle = new Mo(t.toUpperCase()), this._sectionTitle.position.set(0, 0), this._symbolBonus = new Io("bonus (doll)"), this._symbolBonus.position.set(0, this._sectionTitle.y + this._sectionTitle.height + 30), this._sectionParagraph1 = new Ro(this.game.i18n.t("PaytableSectionBonusContent1")), this._sectionParagraph1.position.set(0, this._symbolBonus.y + this._symbolBonus.height + 30), this.addChild(this._sectionTitle, this._symbolBonus, this._sectionParagraph1)
                    }
                    updateBet(t) {
                        this._symbolBonus.updateBet(t)
                    }
                    resize() {
                        this.game.device.desktop || (this._symbolBonus.position.set(0, this._sectionTitle.y + this._sectionTitle.height + 30), this._sectionParagraph1.position.set(0, this._symbolBonus.y + this._symbolBonus.height + 30))
                    }
                }
                class jo extends(Gt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "_sectionParagraph1", void 0), (0, n.Z)(this, "_sectionTitle", void 0), (0, n.Z)(this, "_symbol", void 0);
                        var t = this.game.i18n.t("PaytableSectionBonusGameTitle");
                        this._sectionTitle = new Mo(t.toUpperCase()), this._sectionTitle.position.set(0, 0), this._symbol = new $.j(this.game.loader.getAsset("paytable", "paytable_feature")), this._symbol.position.set(0, this._sectionTitle.y + this._sectionTitle.height + 30), this._sectionParagraph1 = new Ro(this.game.i18n.t("PaytableSectionBonusGameContent1")), this._sectionParagraph1.position.set(0, this._symbol.y + this._symbol.height + 30), this.addChild(this._sectionTitle, this._symbol, this._sectionParagraph1)
                    }
                    resize() {
                        this.game.device.desktop || (this.game.device.landscape ? (this._symbol.scale.set(2), this._symbol.position.set(0, this._sectionTitle.y + this._sectionTitle.height + 30), this._sectionParagraph1.position.set(0, this._symbol.y + this._symbol.height + 30)) : (this._symbol.scale.set(1.9), this._symbol.position.set(0, this._sectionTitle.y + this._sectionTitle.height + 30), this._sectionParagraph1.position.set(0, this._symbol.y + this._symbol.height + 30)))
                    }
                }
                class No extends(Gt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "_sectionParagraph", void 0), (0, n.Z)(this, "_sectionTitle", void 0);
                        var t = this.game.i18n.t("PaytableSectionFreeTitle");
                        this._sectionTitle = new Mo(t.toUpperCase()), this._sectionTitle.position.set(0, 0), this._sectionParagraph = new Ro(this.game.i18n.t("PaytableSectionFreeContent1")), this._sectionParagraph.position.set(0, this._sectionTitle.y + this._sectionTitle.height + 30), this.addChild(this._sectionTitle), this.addChild(this._sectionParagraph)
                    }
                    resize() {
                        this.game.device.desktop || this._sectionParagraph.position.set(0, this._sectionTitle.y + this._sectionTitle.height + 30)
                    }
                }
                class Uo extends(Gt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "sectionTitle", void 0), (0, n.Z)(this, "symbol10", void 0), (0, n.Z)(this, "symbol9", void 0), (0, n.Z)(this, "symbolA", void 0), (0, n.Z)(this, "symbolGirl", void 0), (0, n.Z)(this, "symbolJ", void 0), (0, n.Z)(this, "symbolK", void 0), (0, n.Z)(this, "symbolKnife", void 0), (0, n.Z)(this, "symbolMan", void 0), (0, n.Z)(this, "symbolQ", void 0), (0, n.Z)(this, "symbols", void 0);
                        var t = this.game.i18n.t("PaytableSectionPayoutTitle");
                        this.sectionTitle = new Mo(t.toUpperCase()), this.symbolMan = new Io("man"), this.symbolMan.position.set(0, this.sectionTitle.y + this.sectionTitle.height + 30), this.symbolGirl = new Io("girl"), this.symbolGirl.position.set(600, this.sectionTitle.y + this.sectionTitle.height + 30), this.symbolKnife = new Io("knife"), this.symbolKnife.position.set(0, this.symbolMan.y + this.symbolMan.height + 30), this.symbolA = new Io("a"), this.symbolA.position.set(600, this.symbolGirl.y + this.symbolGirl.height + 30), this.symbolK = new Io("k"), this.symbolK.position.set(0, this.symbolKnife.y + this.symbolKnife.height + 30), this.symbolQ = new Io("q"), this.symbolQ.position.set(600, this.symbolA.y + this.symbolA.height + 30), this.symbolJ = new Io("j"), this.symbolJ.position.set(0, this.symbolK.y + this.symbolK.height + 30), this.symbol10 = new Io("Ten"), this.symbol10.position.set(600, this.symbolQ.y + this.symbolQ.height + 30), this.symbol9 = new Io("Nine"), this.symbol9.position.set(0, this.symbolJ.y + this.symbolJ.height + 30), this.symbols = [this.symbolMan, this.symbolGirl, this.symbolKnife, this.symbolA, this.symbolK, this.symbolQ, this.symbolJ, this.symbol10, this.symbol9], this.addChild(this.sectionTitle, ...this.symbols)
                    }
                    updateBet(t) {
                        this.symbols.forEach((e => e.updateBet(t)))
                    }
                    resize() {
                        this.game.device.desktop || (this.game.device.landscape ? (this.symbolMan.position.set(0, this.sectionTitle.y + this.sectionTitle.height + 30), this.symbolGirl.position.set(820, this.sectionTitle.y + this.sectionTitle.height + 30), this.symbolKnife.position.set(0, this.symbolMan.y + this.symbolMan.height + 30), this.symbolA.position.set(820, this.symbolGirl.y + this.symbolGirl.height + 30), this.symbolK.position.set(0, this.symbolKnife.y + this.symbolKnife.height + 30), this.symbolQ.position.set(820, this.symbolA.y + this.symbolA.height + 30), this.symbolJ.position.set(0, this.symbolK.y + this.symbolK.height + 30), this.symbol10.position.set(820, this.symbolQ.y + this.symbolQ.height + 30), this.symbol9.position.set(0, this.symbolJ.y + this.symbolJ.height + 30)) : (this.symbolMan.position.set(0, this.sectionTitle.y + this.sectionTitle.height + 30), this.symbolGirl.position.set(0, this.symbolMan.y + this.symbolMan.height + 30), this.symbolKnife.position.set(0, this.symbolGirl.y + this.symbolGirl.height + 30), this.symbolA.position.set(0, this.symbolKnife.y + this.symbolKnife.height + 30), this.symbolK.position.set(0, this.symbolA.y + this.symbolA.height + 30), this.symbolQ.position.set(0, this.symbolK.y + this.symbolK.height + 30), this.symbolJ.position.set(0, this.symbolQ.y + this.symbolQ.height + 30), this.symbol10.position.set(0, this.symbolJ.y + this.symbolJ.height + 30), this.symbol9.position.set(0, this.symbol10.y + this.symbol10.height + 30)))
                    }
                }
                class zo extends(Gt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "_sectionParagraph1", void 0), (0, n.Z)(this, "_sectionTitle", void 0), (0, n.Z)(this, "_symbolScatter1", void 0);
                        var t = this.game.i18n.t("PaytableSectionScatterTitle");
                        this._sectionTitle = new Mo(t.toUpperCase()), this._sectionTitle.position.set(0, 0), this._symbolScatter1 = new Io("scat (skull)"), this._symbolScatter1.position.set(0, this._sectionTitle.y + this._sectionTitle.height + 30), this._sectionParagraph1 = new Ro(this.game.i18n.t("PaytableSectionScatterContent1")), this._sectionParagraph1.position.set(0, this._symbolScatter1.y + this._symbolScatter1.height + 30), this.addChild(this._sectionTitle), this.addChild(this._sectionParagraph1), this.addChild(this._symbolScatter1)
                    }
                    updateBet(t) {
                        this._symbolScatter1.updateBet(t)
                    }
                    resize() {
                        this.game.device.desktop || (this._symbolScatter1.position.set(0, this._sectionTitle.y + this._sectionTitle.height + 30), this._sectionParagraph1.position.set(0, this._symbolScatter1.y + this._symbolScatter1.height + 30))
                    }
                }
                class Go extends(Gt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "_sectionParagraph1", void 0), (0, n.Z)(this, "_sectionTitle", void 0), (0, n.Z)(this, "_symbol1", void 0);
                        var t = this.game.i18n.t("PaytableSectionWildTitle");
                        this._sectionTitle = new Mo(t.toUpperCase()), this._sectionTitle.position.set(0, 0), this._symbol1 = new Io("wild (cross)"), this._symbol1.position.set(0, this._sectionTitle.y + this._sectionTitle.height + 30), this._sectionParagraph1 = new Ro(this.game.i18n.t("PaytableSectionWildContent1")), this._sectionParagraph1.position.set(0, this._symbol1.y + this._symbol1.height + 30), this.addChild(this._sectionTitle, this._symbol1, this._sectionParagraph1)
                    }
                    updateBet(t) {
                        this._symbol1.updateBet(t)
                    }
                    resize() {
                        this.game.device.desktop || (this._symbol1.position.set(0, this._sectionTitle.y + this._sectionTitle.height + 30), this._sectionParagraph1.position.set(0, this._symbol1.y + this._symbol1.height + 30))
                    }
                }
                class Vo extends To {
                    constructor(t) {
                        super(), (0, n.Z)(this, "_paytableSectionBetLines", void 0), (0, n.Z)(this, "_paytableSectionBonus", void 0), (0, n.Z)(this, "_paytableSectionBonusGame", void 0), (0, n.Z)(this, "_paytableSectionFree", void 0), (0, n.Z)(this, "_paytableSectionPayout", void 0), (0, n.Z)(this, "_paytableSectionScatter", void 0), (0, n.Z)(this, "_paytableSectionWild", void 0), (0, n.Z)(this, "payTableDelimiter", void 0), this.payTableDelimiter = new Do, this._paytableSectionPayout = new Uo, this._paytableSectionWild = new Go, this._paytableSectionScatter = new zo, this._paytableSectionBonus = new Lo, this._paytableSectionBonusGame = new jo, this._paytableSectionFree = new No, this._paytableSectionBetLines = new _o(t), this.content.addChild(this._paytableSectionPayout, this._paytableSectionWild, this._paytableSectionScatter, this._paytableSectionBonus, this._paytableSectionBonusGame, this._paytableSectionFree, this.payTableDelimiter, this._paytableSectionBetLines)
                    }
                    updateBet(t) {
                        this._paytableSectionPayout.updateBet(t), this._paytableSectionWild.updateBet(t), this._paytableSectionScatter.updateBet(t), this._paytableSectionBonus.updateBet(t)
                    }
                }
                class Qo extends(Gt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "value", void 0), (0, n.Z)(this, "description", void 0), (0, n.Z)(this, "timeline", void 0), this.alpha = 0, this.value = this.addChild(new v.Xz("0", {
                            fontName: "WinFont"
                        })), this.value.anchor = .5, this.value.scale.set(.8), this.description = this.addChild(new $.j(Lt.loader.getAsset("textExtraFree"))), this.value.position.set(this.description.width / 2, 0), this.description.position.set(0, 40), this.pivot.set(this.width / 2, this.height / 2), this.timeline = new C
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
                        this.background = this.addChildAt(new $.j(this.game.loader.getAsset(t)), 0)
                    }
                }
                class Ho extends Y.K3 {
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
                class Yo extends(Gt($.j)) {
                    constructor(t) {
                        super(), (0, n.Z)(this, "onHover", new(x())), (0, n.Z)(this, "onOut", new(x())), this.lineIndex = t, this.interactive = this.game.device.desktop, this.texture = this.game.loader.getAsset("dot_normal"), this.game.interaction.hover(this, (() => {
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
                class Xo extends(Gt(H.W2)) {
                    constructor(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                        super(), (0, n.Z)(this, "lines", void 0), (0, n.Z)(this, "points", new Map), this.lines = t.map((t => this.addChild(new Ho(t)))), this.game.device.desktop && e.map((t => this.points.set(t.line, t.position.map((e => {
                            var i = this.addChild(new Yo(t.line));
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
                class Ko extends(Gt(H.W2)) {
                    constructor() {
                        super(...arguments), (0, n.Z)(this, "name", "Slot")
                    }
                    requestSpin() {
                        var t = arguments,
                            e = this;
                        return (0, o.Z)((function*() {
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
                class qo extends(Gt(H.W2)) {
                    constructor(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "+=1.75";
                        super(), (0, n.Z)(this, "timeline", void 0), (0, n.Z)(this, "textScale", void 0), (0, n.Z)(this, "delay", void 0), (0, n.Z)(this, "winText", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "textScaleEnabled", void 0), (0, n.Z)(this, "textScaleMultiplier", void 0), (0, n.Z)(this, "winTextScale", (t => "".concat(t).length < 4 ? this.textScale : this.textScale - ("".concat(t).length - 4) * this.textScaleMultiplier)), this.visible = !1, this.textScaleEnabled = !1, this.textScaleMultiplier = .16, this.textScale = t || .6, this.delay = e, this.winText = this.addChild(new v.Xz("", {
                            fontName: "WinFont"
                        })), this.winText.scale.set(this.textScale), this.winText.anchor.set(.5), this.timeline = new C
                    }
                    show(t, e) {
                        var i = this;
                        return (0, o.Z)((function*() {
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
                        this.background ? this.background.texture = e : this.background = this.addChildAt(new $.j(e), 0)
                    }
                }
                class Jo {
                    constructor() {
                        (0, n.Z)(this, "container", void 0), (0, n.Z)(this, "timeline", void 0), (0, n.Z)(this, "textValue", void 0), (0, n.Z)(this, "textDescription", void 0), this.timeline = new C, this.container = new H.W2, this.container.name = "TextFreeLeft", this.container.alpha = 0, this.textValue = new v.Xz("", {
                            fontName: "WinFont"
                        }), this.textValue.scale.set(.7), this.textValue.anchor = .5, this.textDescription = new $.j(Lt.loader.getAsset("textLastFreeSpin")), this.container.addChild(this.textValue), this.container.addChild(this.textDescription)
                    }
                    show(t) {
                        var e = this.container.y;
                        return new Promise((i => {
                            this.timeline.clear(), this.timeline.vars = {
                                onComplete: () => {
                                    i(), this.container.y = e
                                }
                            }, t < 1 ? (this.textValue.text = "", this.textDescription.texture = Lt.loader.getAsset("textLastFreeSpin"), this.textDescription.pivot.set(this.textDescription.width / 2, 0), this.timeline.set(this.container, {
                                pixi: {
                                    y: e,
                                    alpha: 0,
                                    scale: 1
                                }
                            }).to(this.container, .5, {
                                pixi: {
                                    alpha: 1
                                }
                            }).to(this.container, .2, {
                                pixi: {
                                    y: e - 50,
                                    alpha: 0,
                                    scale: 1.1
                                }
                            }, "+=0.75")) : (this.textValue.alpha = 1, this.textValue.text = "".concat(t), this.textDescription.texture = Lt.loader.getAsset("textFreeSpinLeft"), this.textValue.position.set(0, -40), this.textDescription.pivot.set(this.textDescription.width / 2, 0), this.timeline.set(this.container, {
                                pixi: {
                                    y: e,
                                    alpha: 0,
                                    scale: 1
                                }
                            }).to(this.container, .5, {
                                pixi: {
                                    alpha: 1
                                }
                            }).to(this.container, .2, {
                                pixi: {
                                    y: e - 50,
                                    alpha: 0,
                                    scale: 1.1
                                }
                            }, "+=0.75"))
                        }))
                    }
                }
                class $o extends(Gt(H.W2)) {
                    constructor() {
                        super()
                    }
                    get isStop() {
                        return this.game.autoPlay.enabled && this.game.autoPlay.count > 0
                    }
                }
                const tn = class extends $o {
                    constructor(t) {
                        super(), (0, n.Z)(this, "_flushInterval", void 0), (0, n.Z)(this, "_isFree", void 0), (0, n.Z)(this, "_isFreeEnd", void 0), (0, n.Z)(this, "_wins", void 0), (0, n.Z)(this, "slot", void 0), this.slot = t, this._wins = [], this._flushInterval = null, this._isFree = !1, this._isFreeEnd = !1
                    }
                    get isStop() {
                        return super.isStop || Lt.store.get("free:isFree", !1) || Lt.store.get("free:isEnd", !1) || Lt.store.get("reward:bonus", !1)
                    }
                    beforeStart() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            t._isFree = Lt.store.get("free:isFree", !1), t._isFreeEnd = Lt.store.get("free:isEnd", !1)
                        }))()
                    }
                    stop() {
                        this.slot.topDecoWin.alpha = 0, this._wins.length = 0, clearInterval(this._flushInterval), this.slot.reels.forEach((t => t.stopAnimation())), this.slot.lines.hide(), this.slot.frames.hide(), this.slot.textLineWin.clear()
                    }
                    _getWinSoundNumber() {
                        var t = Lt.store.get("reward:numberWinSymbol", 0);
                        return t <= 9 ? 1 : t > 9 && t <= 13 ? 2 : 3
                    }
                    allPayment(t) {
                        var e = this;
                        return (0, o.Z)((function*() {
                            e.slot.topDecoWin.alpha = 1, e.slot.reels.forEach((t => t.overlay())), e.slot.lines.show(t);
                            for (var i = 0, s = t.length; i < s; i++) {
                                var o = t[i];
                                e._wins.push(o), e._runSymbolAnimation(o, !1), e._showFrame(o, "start")
                            }
                            var n = e._getWinSoundNumber();
                            Lt.action.emit("sound:win", n), yield e.slot.textTotalWin.show(Lt.wallet.coins, (() => {
                                Lt.action.emit("update:win"), Lt.action.emit("update:balance")
                            }))
                        }))()
                    }
                    breakAllPayment() {
                        this.slot.textTotalWin.break()
                    }
                    scatterPayment(t) {
                        var e = this;
                        return (0, o.Z)((function*() {
                            if (Lt.action.emit("sound:scatterWin"), e.slot.lines.hide(), e.slot.reels.forEach((t => t.overlay())), Lt.store.set("scatter:lineWin", 0), e._runSymbolAnimation(t, !0, "free"), e._showFrame(t, "win"), Lt.store.get("free:winAdditional", !1)) {
                                var i = Lt.store.get("free:left", 0);
                                Lt.action.emit("free:updateLeft", i), yield e.slot.textExtraFree.show(Lt.store.get("free:winAdditionalCount"))
                            } else yield Lt.delay(zi.get("reward_scatter"))
                        }))()
                    }
                    bonusReward() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            var e = Lt.store.get("reward:lines", []).find((t => t.n > 0 && 2 === t.sym));
                            t.slot.lines.hide(), t.slot.reels.forEach((t => t.overlay())), t._runSymbolAnimation(e, !0, "free"), t._showFrame(e, "start"), Lt.action.emit("sound:bonusSymbolWin"), yield Lt.delay(1500)
                        }))()
                    }
                    complete() {
                        this.isStop ? this.stop() : this._wins.length > 0 && this._flush()
                    }
                    _flush() {
                        if (this._wins.length) {
                            var t = !0,
                                e = e => {
                                    this.slot.reels.forEach((t => t.overlay()));
                                    var i = this._wins[e];
                                    this._runSymbolAnimation(i), t && this._showLineText(i), this.slot.lines.show([i]), this._showFrame(i, "end")
                                },
                                i = 0;
                            e(i++), this._flushInterval = setInterval((() => {
                                i >= this._wins.length && (t = !1, i = 0), e(i++)
                            }), zi.get("reward_flush"))
                        }
                    }
                    _showFrame(t, e) {
                        var {
                            pos: i
                        } = t;
                        i.forEach(((t, i) => {
                            -1 !== t && (this._findSymbol(i, t).getData().hasFrame && this.slot.frames.show([i, t], e))
                        }))
                    }
                    _findSymbol(t, e) {
                        return this.slot.reels[t].visibleSymbols[e]
                    }
                    _runSymbolAnimation(t) {
                        var {
                            pos: e
                        } = t, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "normal";
                        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && (this.slot.reels.forEach((t => t.clearAnimation())), this.slot.frames.hide());
                        for (var s = 0; s < e.length; s++)
                            if (-1 !== e[s]) {
                                var o = e[s];
                                this._findSymbol(s, o).playAnimation(i)
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

                function en() {
                    var t = new H.W2,
                        e = [];
                    return Lt.action.on("symbol:playAnimation", ((i, s, o) => {
                        if (! function(t, i) {
                                return e.some((e => e.x === t && e.y === i))
                            }(i, s)) {
                            if (e.push({
                                    x: i,
                                    y: s
                                }), "stickEffect" === o.assetName) {
                                var n = new $.j(o.texture);
                                n.alpha = 1, n.position.set(i, s), t.addChild(n)
                            }
                            if (o.assetName) {
                                var a = new fs(Lt.loader.getAsset(o.assetName));
                                if (a.name = o.assetName, a.alpha = 1, a.position.set(i, s), t.addChild(a), "string" == typeof o.effectName) a.play(o.effectName, !1);
                                else {
                                    var h = o.effectName[o.type] || o.effectName.normal;
                                    a.play(h, !1)
                                }
                            } else {
                                var r = new $.j(o.texture);
                                r.alpha = 1, r.position.set(i, s), t.addChild(r)
                            }
                        }
                    })), Lt.action.on("symbol:stopAnimation", (() => {
                        e.length = 0, t.removeChildren(0, t.children.length)
                    })), t
                }
                class sn {
                    constructor() {
                        (0, n.Z)(this, "container", void 0), (0, n.Z)(this, "tween", void 0), this.container = new v.Xz("", {
                            fontName: "WinFont"
                        }), this.container.anchor = .5, this.container.alpha = 0
                    }
                    show(t, e, i) {
                        this.container.scale.set(.4), this.container.x = t, this.container.y = e, this.container.text = "".concat(Lt.i18n.currency({
                            bitmap: !0
                        })).concat(Lt.helpers.toMoney(i)), this.container.alpha = 1, this.hide()
                    }
                    hide() {
                        this.tween = k.to(this.container, .2, {
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

                function on(t) {
                    var e = [],
                        i = new H.W2;
                    return i.name = "scatterWaitingContainer", t.reels.forEach(((t, s) => {
                        e.push([]), t.forEach((t => {
                            var o = new fs(Lt.loader.getAsset("scatterEffect"));
                            o.position.set(t.x, t.y), o.renderable = !1, i.addChild(o), e[s].push(o)
                        }))
                    })), {
                        getContainer: () => i,
                        play: (t, i) => (0, o.Z)((function*() {
                            try {
                                var s = e[t][i];
                                s.renderable = !0, yield s.play("waiting", !1), s.renderable = !1
                            } catch (t) {
                                return console.error(t), t
                            }
                        }))()
                    }
                }

                function nn(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function an(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? nn(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : nn(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                var hn = 1,
                    rn = 0,
                    ln = .3;

                function dn(t, e, i) {
                    var s = !1,
                        o = "default",
                        n = Lt.config.get("slot.layout.".concat(o, "[").concat(i, "]"), null);
                    if (!n) throw new Error("Symbol data not found");
                    var a = new $.j(Lt.loader.getAsset(n.textureAtlas, n.assetName));

                    function h() {
                        n.animation && (Lt.action.emit("symbol:stopAnimation", n.animation), s && (a.alpha = hn))
                    }
                    return a.position.set(t, e), Object.assign(a, {
                        clearAnimation: h,
                        overlay() {
                            a.alpha = ln
                        },
                        getData: () => n,
                        playAnimation(t) {
                            s = !0, a.alpha = rn, Lt.action.emit("symbol:playAnimation", a.x, a.y, an(an({}, n.animation), {}, {
                                type: t,
                                texture: a.texture
                            }))
                        },
                        stopAnimation() {
                            s = !1, a.alpha = hn, h()
                        },
                        replaceTexture(t) {
                            n = Lt.config.get("slot.layout.".concat(o, "[").concat(t, "]"), null), a.texture = Lt.loader.getAsset(n.textureAtlas, n.assetName)
                        }
                    })
                }
                class cn extends H.W2 {
                    constructor(t, e) {
                        super(), (0, n.Z)(this, "_endTween", void 0), (0, n.Z)(this, "_nReel", void 0), (0, n.Z)(this, "_numberSpinToComplete", void 0), (0, n.Z)(this, "_reel", void 0), (0, n.Z)(this, "_reelIndex", void 0), (0, n.Z)(this, "_spinTween", void 0), (0, n.Z)(this, "_startTween", void 0), (0, n.Z)(this, "_startY", void 0), (0, n.Z)(this, "_stopTimeout", void 0), (0, n.Z)(this, "_stopTimeoutDuration", void 0), (0, n.Z)(this, "isStop", void 0), (0, n.Z)(this, "symbolsPositions", void 0), (0, n.Z)(this, "visibleSymbols", void 0), this.interactiveChildren = !1, this.visibleSymbols = [], this.symbolsPositions = e, this._startY = 0, this._reel = [], this._nReel = [], this._reelIndex = t, this._numberSpinToComplete = 0, this.isStop = !1, this._stopTimeout = null, this._stopTimeoutDuration = 0, this._startTween = new k(this, Lt.config.get("wheel.durationSpin"), {
                            paused: !0,
                            roundProps: ["y"],
                            pixi: {
                                y: -Lt.config.get("wheel.deltaStop")
                            },
                            ease: "Linear.easeNone",
                            yoyo: !0,
                            repeat: 1,
                            repeatDelay: 0,
                            onComplete: () => {
                                this._spinTween.restart()
                            }
                        }), this._spinTween = new k(this, Lt.config.get("wheel.durationSpin"), {
                            paused: !0,
                            roundProps: ["y"],
                            pixi: {
                                y: Lt.config.get("symbol.y")
                            },
                            ease: "Linear.easeNone",
                            repeat: -1,
                            repeatDelay: 0,
                            onRepeat: this._spin.bind(this)
                        }), this._endTween = new k(this, .01, {
                            paused: !0,
                            roundProps: ["y"],
                            pixi: {
                                y: Lt.config.get("wheel.deltaStop")
                            },
                            ease: "Linear.easeNone",
                            yoyo: !0,
                            repeat: 1,
                            repeatDelay: 0,
                            onComplete: this._complete.bind(this)
                        }), Lt.action.on("spin:fast", (() => {
                            Lt.state.is("stop") && this.stop()
                        })), Lt.action.on("free:select_stop", (() => {
                            this._restoreWheelAfterFree()
                        })), this._setup()
                    }
                    start() {
                        var t = Lt.store.get("reward:nReels", []);
                        this._nReel = t[this._reelIndex].concat(), this.stopAnimation(), this.isStop = !1, this._numberSpinToComplete = this.visibleSymbols.length, this.children.forEach(((t, e) => {
                            var i = Lt.store.get("reward:nReels", [])[this._reelIndex].concat();
                            (t.y < this.visibleSymbols[0].y || t.y > this.visibleSymbols[this.visibleSymbols.length - 1].y) && t.replaceTexture(i[e])
                        }));
                        var e = Lt.quickSpin.enabled ? Lt.config.get("wheel.durationQuickDelta") : Lt.config.get("wheel.durationDelta");
                        this._endTween.duration(e), this._stopTimeoutDuration = Lt.quickSpin.enabled ? Lt.config.get("wheel.durationQuickStop") : Lt.config.get("wheel.durationStop"), this._startTween.restart()
                    }
                    stop() {
                        if (!this.isStop) {
                            var t = Lt.store.get("reward:reels", []);
                            this._reel = t[this._reelIndex].concat(), Lt.store.get("spin:isFast", !1) ? (Lt.action.emit("sound:spinFast"), clearTimeout(this._stopTimeout), this.isStop = !0) : this._stopTimeout = setTimeout((() => this.isStop = !0), this._stopTimeoutDuration * (this._reelIndex + 1))
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
                        var t = Lt.store.get("reward:nReels", []);
                        this._nReel = t[this._reelIndex].concat();
                        var e = Lt.store.get("reward:reels", []);
                        this._reel = e[this._reelIndex].concat();
                        for (var i = 0, s = this._nReel.length; i < s; i++) {
                            var [o, n] = this.symbolsPositions[i], a = dn(o, n, 0 === i || i === s - 1 ? this._nReel[i] : this._reel[i - 1]);
                            this.addChild(a), i > 0 && i < s - 1 && this.visibleSymbols.push(a)
                        }
                        this._startY = this.children[0].y, "bonus" === Lt.store.get("reward:feature") && this._restoreWheelAfterFree()
                    }
                    _spin() {
                        if (this._flip(), this.isStop)
                            if (this._numberSpinToComplete > 0) {
                                var t = this._reel[--this._numberSpinToComplete];
                                this.children[0].replaceTexture(t)
                            } else this.y = 0, this.children[0].y = this._startY, this._updateVisibleSymbols(), Lt.action.emit("wheel:stop_down"), this._spinTween.pause(), this._endTween.restart()
                    }
                    _flip() {
                        var t = this.children.pop();
                        t.y = this._startY, !this.isStop && this._nReel.length > 0 && t.replaceTexture(this._nReel.pop());
                        for (var e = 0, i = this.children.length; e < i; e++) this.children[e].y = e * -this._startY;
                        this.children.unshift(t)
                    }
                    _complete() {
                        this.y = 0, this._reel.length = 0, this._endTween.pause(), clearTimeout(this._stopTimeout), Lt.action.emit("wheel:stop", this._reelIndex)
                    }
                    _restoreWheelAfterFree() {
                        for (var t = Lt.store.get("reward:preReels")[this._reelIndex], e = this.visibleSymbols.length, i = 0; i < e; i++) this.visibleSymbols[i].replaceTexture(t[i])
                    }
                    update(t) {
                        for (var e = this.visibleSymbols.length, i = 0; i < e; i++) this.visibleSymbols[i].replaceTexture(t[i])
                    }
                }
                class un extends Ko {
                    constructor() {
                        super(), (0, n.Z)(this, "animation", void 0), (0, n.Z)(this, "frames", void 0), (0, n.Z)(this, "lines", void 0), (0, n.Z)(this, "reels", void 0), (0, n.Z)(this, "reelsContainer", void 0), (0, n.Z)(this, "scatterWaiting", void 0), (0, n.Z)(this, "slotData", void 0), (0, n.Z)(this, "stopReelCounter", void 0), (0, n.Z)(this, "symbolsPositions", void 0), (0, n.Z)(this, "textExtraFree", void 0), (0, n.Z)(this, "textFreeLeft", void 0), (0, n.Z)(this, "textLineWin", void 0), (0, n.Z)(this, "textTotalWin", void 0), (0, n.Z)(this, "topDecoWin", void 0), this.pivot.set(727.5, -20), this.reels = [], this.symbolsPositions = this.game.config.get("slot.symbolsPositions", []), this.animation = new tn(this), this.stopReelCounter = 0, this.init(), this.setupEvents()
                    }
                    createMask() {
                        var t = new u.TC;
                        return t.beginFill(16711680, .8), t.drawRect(0, 0, this.game.config.get("slot.width"), this.game.config.get("slot.height")), t.endFill(), t
                    }
                    init() {
                        var t, e, i = this.createMask();
                        this.reelsContainer = new H.W2, this.reelsContainer.mask = i, this.reelsContainer.addChild(i);
                        for (var s = this.game.config.get("slot.size[0]"), o = 0; o < s; o++) {
                            var n = this.symbolsPositions[o],
                                a = new cn(o, n);
                            this.reels.push(a), this.reelsContainer.addChild(a)
                        }
                        this.slotData = {
                            reels: this.reels.map((t => t.visibleSymbols)),
                            lines: null !== (t = null === (e = this.game.server) || void 0 === e ? void 0 : e.response.lines) && void 0 !== t ? t : []
                        }, this.lines = new Xo(this.slotData.lines.map((t => ({
                            color: 16759834,
                            width: 4,
                            padding: 2,
                            points: t.map(((t, e) => {
                                var i = this.slotData.reels[e][t];
                                return {
                                    position: [i.x, i.y],
                                    size: [i.width, i.height]
                                }
                            }))
                        }))), this.game.config.get("lines", {}).points), this.frames = function(t) {
                            var e = new H.W2;
                            e.name = "Frames";
                            var i = [],
                                s = new(x()),
                                o = new(x());
                            return {
                                container: e,
                                render: function(s) {
                                    t.reels.forEach(((t, o) => {
                                        i.push([]), t.forEach((t => {
                                            var n = new fs(Lt.loader.getAsset(s));
                                            n && (n.name = "Frame", n.position.set(t.x, t.y), n.renderable = !1, i[o].push(n), e.addChild(n))
                                        }))
                                    }))
                                },
                                show: function(t) {
                                    var [e, o] = t, n = i[e][o];
                                    if (n) {
                                        n.renderable = !0;
                                        for (var a = arguments.length, h = new Array(a > 1 ? a - 1 : 0), r = 1; r < a; r++) h[r - 1] = arguments[r];
                                        s.dispatch(n, ...h)
                                    }
                                },
                                onShow: s,
                                hide: function() {
                                    for (var t = arguments.length, i = new Array(t), s = 0; s < t; s++) i[s] = arguments[s];
                                    e.children.forEach((t => {
                                        t.playing && t.stop(), t.renderable = !1, o.dispatch(t, ...i)
                                    }))
                                },
                                onHide: o
                            }
                        }(this.slotData), this.frames.onShow.add((t => {
                            t.play("win")
                        })), this.frames.render("effectFrame"), this.scatterWaiting = on(this.slotData), this.textFreeLeft = new Jo, this.textFreeLeft.container.position.set(727.5, 660), this.textExtraFree = new Qo, this.textExtraFree.description.position.set(0, 40), this.textExtraFree.position.set(735, 660), this.textTotalWin = new qo, this.textTotalWin.position.set(727.5, 660), this.textLineWin = new sn, this.topDecoWin = new fs(this.game.loader.getAsset("topDecoWin")), this.topDecoWin.position.set(-75, -105), this.topDecoWin.alpha = 0, this.topDecoWin.play("win", !0), this.scatterWaiting = on(this.slotData), this.addChild(this.frames.container), this.addChild(this.reelsContainer), this.addChild(this.lines), this.addChild(en()), this.addChild(this.scatterWaiting.getContainer()), this.addChild(this.topDecoWin), this.addChild(this.scatterWaiting.getContainer()), this.addChild(this.textLineWin.container), this.addChild(this.textTotalWin), this.addChild(this.textFreeLeft.container), this.addChild(this.textExtraFree)
                    }
                    setupEvents() {
                        this.game.action.on("state:ready_enter", this._onReadyEnter, this), this.game.action.on("state:spin_enter", this._onSpinEnter, this), this.game.action.on("state:stop_enter", this._onStopEnter, this), this.game.action.on("free:start", (() => {
                            this.animation.stop(), this.lines.disable(), this.reels.forEach(((t, e) => {
                                var i = this.game.store.get("reward:fsReels", []);
                                t.update(i[e])
                            }))
                        })), this.game.action.on("free:stop", (() => {
                            this.animation.stop(), this.lines.enable()
                        })), this.game.action.on("free:select_stop", (() => {
                            k.fromTo(this, .5, {
                                pixi: {
                                    alpha: 0
                                }
                            }, {
                                pixi: {
                                    alpha: 1
                                }
                            })
                        })), this.game.action.on("free:select_start", (() => {
                            k.fromTo(this, .5, {
                                pixi: {
                                    alpha: 0
                                }
                            }, {
                                pixi: {
                                    alpha: 1
                                }
                            })
                        })), this.game.action.on("state:finish_enter", this._onFinishEnter, this), this.game.action.on("wheel:stop", this._onStopWheel, this), this.game.action.on("reward:reset", this._onResetReward, this)
                    }
                    restoreFreeSpins() {
                        this.alpha = 0
                    }
                    showBonus(t) {
                        var e = this;
                        return (0, o.Z)((function*() {
                            yield e.game.bonus.show(t)
                        }))()
                    }
                    _onReadyEnter() {
                        var t = this.game.autoPlay.enabled;
                        if (Qi.isFreespin()) {
                            var e = this.game.store.get("free:isStart", !1) ? zi.get("beforeFreeSpins") : zi.get("inFreeSpins");
                            setTimeout((() => {
                                this.game.action.emit("spin:start")
                            }), e)
                        } else t && setTimeout((() => {
                            this.game.action.emit("spin:start")
                        }), zi.get("before_spin_auto"));
                        this.game.store.get("reward:lines", []).length <= 0 && !Qi.isFreespin() && this.lines.enable()
                    }
                    updateFreeLeft() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            if (Qi.isFreespin()) {
                                var e = t.game.store.get("free:left", 0) - 1;
                                t.game.action.emit("free:updateLeft", e), yield t.textFreeLeft.show(e)
                            }
                        }))()
                    }
                    _onSpinEnter() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            t.animation.stop(), t.lines.disable();
                            try {
                                yield t.game.beforeSpin(), t.reels.forEach((t => t.start())), yield t.updateFreeLeft(), yield t.requestSpin(), t.game.state.goTo("stop")
                            } catch (e) {
                                yield t.game.catchError(e), (null == e ? void 0 : e.message) !== Et.INSUFFICIENT_BALANCE && (null == e ? void 0 : e.message) !== Et.SPENDING_BUDGET_EXCEEDED || t.game.state.goTo("stop")
                            }
                        }))()
                    }
                    _onStopEnter() {
                        this.reels.forEach((t => t.stop()))
                    }
                    _onFinishEnter() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            t.stopReelCounter = 0, Qi.set(t.game.store.get("reward:feature")), t.game.store.get("free:isFree", !1) || (yield t.game.freeRound.finish()), t.game.autoPlay.enabled ? t.game.checkBalance().then((() => {
                                t.game.state.goTo("ready")
                            })).catch((() => {
                                t.game.autoPlay.disable(), t.game.state.goTo("ready")
                            })) : t.game.state.goTo("ready")
                        }))()
                    }
                    _onStopWheel(t) {
                        var e = this;
                        return (0, o.Z)((function*() {
                            try {
                                if (!e.game.store.get("spin:isFast", !1)) {
                                    var i = e.game.store.get("reward:reels", [])[t].indexOf(0);
                                    i > -1 && (e.game.action.emit("sound:scatterWheel"), yield e.scatterWaiting.play(t, i))
                                }
                                e.stopReelCounter++, e.stopReelCounter >= e.reels.length && (e.game.afterReelsStop(), e.game.state.goTo("reward"))
                            } catch (t) {
                                return console.error(t), t
                            }
                        }))()
                    }
                    _onResetReward() {
                        this.lines.enable(), this.animation.stop()
                    }
                    beforeFreeSpinsPopup() {
                        0 !== this.alpha && k.fromTo(this, .5, {
                            pixi: {
                                alpha: 1
                            }
                        }, {
                            pixi: {
                                alpha: 0
                            }
                        })
                    }
                    resize() {
                        this.game.device.desktop || this.game.device.landscape ? (this.scale.set(1, 1), this.position.set(960, 90), this.topDecoWin.position.set(-75, -105), this.topDecoWin.position.set(-75, -105)) : (this.scale.set(1.2 * .5625), this.position.set(540, 292.5), this.topDecoWin.y = -264)
                    }
                }
                class pn extends(Gt(H.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "value", void 0), (0, n.Z)(this, "timeline", void 0), (0, n.Z)(this, "light", void 0), (0, n.Z)(this, "coins", void 0), (0, n.Z)(this, "onPress", void 0), this.visible = !1, this.interactive = !0, this.onPress = new(x()), this.game.interaction.click(this, (() => this.onPress.dispatch())), this.timeline = new C, this.content = new H.W2, this.overlay = new u.TC, this.overlay.beginFill(0, .75), this.overlay.drawRect(0, 0, 1920, 1080), this.overlay.endFill(), this.title = new $.j, this.title.anchor.set(.5), this.value = new v.Xz("", {
                            fontName: "WinFont"
                        }), this.value.anchor = .5, this.value.scale.set(.5), this.light = new fs(this.game.loader.getAsset("effectBigWinLight")), this.light.pivot.set(this.light.width / 2, this.light.height / 2), this.light.alpha = 0, this.coins = new fs(this.game.loader.getAsset("effectBigWinCoins")), this.coins.pivot.set(this.coins.width / 2, this.coins.height / 2), this.coins.alpha = 0, this.content.addChild(this.light), this.content.addChild(this.coins), this.content.addChild(this.title), this.content.addChild(this.value), this.addChild(this.overlay), this.addChild(this.content)
                    }
                    show(t, e) {
                        var i = 0;
                        t === we ? (i = 9, this.game.action.emit("sound:bigWin")) : t === xe && (i = 18, this.game.action.emit("sound:giantWin")), this.title.texture = this.game.loader.getAsset("textBigWin");
                        var s = !1,
                            o = this.value.scale.x;
                        return new Promise((n => {
                            this.overlay.alpha = 0, this.content.alpha = 0, this.value.alpha = 0, this.timeline.eventCallback("onComplete", (() => {
                                this.hide(), n()
                            }));
                            var a = {
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
                            }, .35).to(a, i, {
                                coins: e,
                                ease: P.Linear.easeNone,
                                roundProps: ["coins"],
                                onStart: () => {
                                    this.light.play("light", !0), this.light.alpha = 1
                                },
                                onUpdate: () => {
                                    !s && t === xe && a.coins > e / 2 && (this.title.texture = this.game.loader.getAsset("textGiantWin"), s = !0, this.coins.play("coins", !0), this.coins.alpha = 1, k.to(this.value, i / 2, {
                                        pixi: {
                                            scale: o + .2
                                        }
                                    })), this.value.text = "".concat(this.game.i18n.currency({
                                        bitmap: !0
                                    }), "<value>").concat(this.game.helpers.toMoney(a.coins), "</value>")
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
                        this.game.device.desktop || this.game.device.landscape ? (this.scale.set(1), this.overlay.height = this.game.viewport.height, this.overlay.width = this.game.viewport.width, this.overlay.position.set(0, 0), this.content.position.set(this.game.viewport.width / 2, 300), this.light.scale.set(1), this.coins.scale.set(1), this.title.scale.set(1), this.value.scale.set(1), this.light.position.set(-280, 510), this.coins.position.set(-957.5, 190), this.value.position.set(0, this.title.height + 50)) : (this.scale.set(.5625), this.overlay.height = (2 * this.game.viewport.paddingY + this.game.viewport.height) / .5625, this.overlay.width = (2 * this.game.viewport.paddingX + this.game.viewport.width) / .5625, this.overlay.position.set(-this.game.viewport.paddingX / .5625, 0), this.content.position.set(this.game.viewport.width / .5625 / 2, (this.game.viewport.height / .5625 - 500) / 2), this.light.scale.set(2), this.coins.scale.set(2), this.title.scale.set(2), this.value.scale.set(.8), this.light.position.set(-600, 1340), this.coins.position.set(-1897.5, 820), this.value.position.set(0, this.title.height + 50))
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
                            B.removeEventListener("tick", this.tick), et.vB.shared.destroy(), it.destroyTextureCache(), this.renderer.destroy(), this.loader.destroy()
                        })), Lt = this, et.vB.shared.autoStart = !1, et.vB.shared.stop(), this.config = new ht(Wt), this.logger = new Ct, this.rootNode = this.createRootNode(), this.renderer = new Bt, this.i18n = new bt(e), this.helpers = new vt(this.config), this.keyboard = new wt, this.device = new mt(this.renderer), this.viewport = new Ot, this.leftHand = new ut, this.fullscreen = this.device.ios || this.device.iPadPro ? new dt : new ct(this.device), this.visibility = new zt, this.preferences = new Ut, this.sound = new O(this.device, this.visibility, this.preferences), this.state = new Zt, this.store = new ht, this.action = new gt, this.loader = new kt(this.device), this.error = new At, this.interaction = new ft(this.device), this.externalApi = new Mt(this), this.popupManager = new It(this.rootNode), this.create(), this.initAnalytics()
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
                        return new Rt
                    }
                    create() {
                        var t = this.rootNode.addChild(new u.TC);
                        t.lineStyle(0), t.beginFill(0), t.drawRect(1, 1, this.settings.size[0] - 2, this.settings.size[1] - 2), t.endFill();
                        var e = () => {
                            this.device.ios && this.fullscreen.toggle(), this.renderer.resize(this.device.width, this.device.height), this.device.desktop || this.device.landscape ? (this.viewport.resize(this.settings.size[0], this.settings.size[1]), this.rootNode.scale.set(this.viewport.aspectRatio), this.rootNode.pivot.set(this.viewport.width / 2, this.viewport.height / 2), this.rootNode.position.set(this.device.width / 2, this.device.height / 2), this.rootNode.mask = t) : (this.viewport.resize(this.settings.size[1], this.settings.size[0]), this.rootNode.scale.set(this.viewport.aspectRatio), this.rootNode.pivot.set(this.viewport.width / 2, 0), this.rootNode.position.set(this.device.width / 2, 0), this.rootNode.mask = null), this.viewport.emit("resize"), this.renderer.render(this.rootNode)
                        };
                        B.addEventListener("tick", this.tick), window.addEventListener("unload", this.destroy), window.addEventListener("resize", e), window.addEventListener("load", e), window.addEventListener("orientationchange", (() => setTimeout(e, 350))), document.addEventListener("keydown", (t => {
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
                        this.popupManager.add([new Fi, new Pi, new Ei, new ki, new Mi, new Bi, new Zi, new Oi, new Ti, new Ci, new Ri])
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
                                    e.i18n.setTranslations(_i(_i(_i({}, i), n), o))
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
                            e.launcher = e.rootNode.addChild(new ui);
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
                        this.config.merge(t, _i({
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
                        })), t.transformRequest([t => _i(_i({}, t), {}, {
                            action: "spin" === t.action ? this.store.get("server:nextAction") : t.action
                        })]), t
                    }
                } {
                    constructor() {
                        super(...arguments), (0, n.Z)(this, "wallet", void 0), (0, n.Z)(this, "bigWin", void 0), (0, n.Z)(this, "autoPlay", void 0), (0, n.Z)(this, "betLevel", void 0), (0, n.Z)(this, "freeRound", void 0), (0, n.Z)(this, "quickSpin", void 0), (0, n.Z)(this, "netPosition", new oi), (0, n.Z)(this, "currentTime", void 0), (0, n.Z)(this, "elapsedTime", void 0), (0, n.Z)(this, "copyright", void 0), (0, n.Z)(this, "menu", void 0), (0, n.Z)(this, "betSettings", void 0), (0, n.Z)(this, "autoPlaySettings", void 0), (0, n.Z)(this, "controls", void 0), (0, n.Z)(this, "riskFeature", void 0), (0, n.Z)(this, "nextRiskFeature", void 0), (0, n.Z)(this, "gameSettings", void 0), (0, n.Z)(this, "checkboxLeftHand", void 0), (0, n.Z)(this, "checkboxGameSounds", void 0), (0, n.Z)(this, "checkboxBackgroundSounds", void 0), (0, n.Z)(this, "checkboxQuickSpin", void 0), (0, n.Z)(this, "checkboxFullscreen", void 0), (0, n.Z)(this, "checkboxRiskFeature", void 0), (0, n.Z)(this, "checkboxIntroScreen", void 0)
                    }
                    initModules(t) {
                        var e, i, s;
                        super.initModules(t);
                        var o = this.server.response;
                        this.wallet = new $e(this.server), this.betLevel = new _t(null == o ? void 0 : o.bet, null == o ? void 0 : o.bets, null !== (e = null == o ? void 0 : o.betCoins) && void 0 !== e ? e : 1), this.autoPlay = new Ye({
                            counts: this.config.get("autoPlay.counts", [10, 25, 50, 100, 150, 300, -1]).map((t => {
                                var e = Number(t);
                                return -1 === e ? 1 / 0 : e
                            })).filter((t => t > 0))
                        }), this.freeRound = new Ke, this.quickSpin = new Je(this.config), this.bigWin = new Xe(this.config.get("bigWin.bigMultiplier"), this.config.get("bigWin.giantMultiplier"), this.betLevel), this.config.set("autoPlay.available", this.autoPlay.available), this.config.set("quickSpin.available", this.quickSpin.available), this.netPosition.setEnabled(null !== (i = null == o || null === (s = o.gameConfig) || void 0 === s ? void 0 : s.netPosition) && void 0 !== i && i)
                    }
                    initViews() {
                        super.initViews(), this.currentTime = new ei, this.elapsedTime = new ii, this.copyright = new ti
                    }
                    mountViews() {
                        super.mountViews(), this.netPosition.enabled && (this.rootNode.addChild(this.netPosition.toView(new si)), this.rootNode.addChild(this.elapsedTime)), this.rootNode.addChild(this.currentTime), this.rootNode.addChild(this.copyright)
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
                        return this.checkboxQuickSpin = new di, this.checkboxQuickSpin.onClick.add((() => {
                            this.quickSpin.toggle()
                        })), this.checkboxQuickSpin
                    }
                    createFullscreenCheckbox() {
                        return this.checkboxFullscreen = new ai, this.checkboxFullscreen.onClick.add((() => {
                            this.fullscreen.toggle()
                        })), this.fullscreen.on("change", (t => {
                            var e;
                            return null === (e = this.checkboxFullscreen) || void 0 === e ? void 0 : e.setChecked(t)
                        })), this.checkboxFullscreen
                    }
                    createLeftHandCheckbox() {
                        return this.checkboxLeftHand = new li, this.checkboxLeftHand.onClick.add((() => {
                            this.leftHand.toggle()
                        })), this.checkboxLeftHand
                    }
                    createGameSoundsCheckbox() {
                        return this.checkboxGameSounds = new hi, this.checkboxGameSounds.onClick.add((() => {
                            this.sound.toggle("effects")
                        })), this.checkboxGameSounds
                    }
                    createBackgroundSoundsCheckbox() {
                        return this.checkboxBackgroundSounds = new ni, this.checkboxBackgroundSounds.onClick.add((() => {
                            this.sound.toggle("background")
                        })), this.checkboxBackgroundSounds
                    }
                    createRiskFeatureCheckbox() {
                        if (this.config.get("rnb", !0)) return this.checkboxRiskFeature = new ci, this.checkboxRiskFeature.setChecked(this.preferences.get("showRiskFeature", !0)), this.checkboxRiskFeature.onClick.add((t => {
                            var e, i;
                            this.preferences.set("showRiskFeature", t), null !== (e = this.riskFeature) && void 0 !== e && e.visible && this.riskFeature.hide(), null !== (i = this.nextRiskFeature) && void 0 !== i && i.visible && this.nextRiskFeature.hide()
                        })), this.checkboxRiskFeature
                    }
                    createIntroScreenCheckbox() {
                        return this.checkboxIntroScreen = new ri, this.checkboxIntroScreen.setChecked(this.preferences.get("showIntroScreen", !0)), this.checkboxIntroScreen.onClick.add((t => {
                            this.preferences.set("showIntroScreen", t)
                        })), this.checkboxIntroScreen
                    }
                } {
                    constructor() {
                        super({}), (0, n.Z)(this, "autoPlaySettings", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "betSettings", void 0), (0, n.Z)(this, "bigWinAnimation", void 0), (0, n.Z)(this, "bonus", void 0), (0, n.Z)(this, "bonusOverlay", void 0), (0, n.Z)(this, "fastStopLayout", void 0), (0, n.Z)(this, "freeOverlay", void 0), (0, n.Z)(this, "gameRules", void 0), (0, n.Z)(this, "menu", void 0), (0, n.Z)(this, "paytable", void 0), (0, n.Z)(this, "slot", void 0), $i.init(), this.init(Li, Ni)
                    }
                    loadTranslations() {
                        var t = () => super.loadTranslations,
                            e = this;
                        return (0, o.Z)((function*() {
                            return t().call(e, vs)
                        }))()
                    }
                    initModules(t) {
                        super.initModules(t), this.sound = new ts(this.device, this.visibility, this.preferences)
                    }
                    initViews() {
                        var t, e, i = this;
                        super.initViews(), this.background = this.rootNode.addChild(new ys), this.slot = this.rootNode.addChild(new un), this.rootNode.addChild(this.background.logo), this.paytable = new Vo(null !== (t = null === (e = this.server) || void 0 === e ? void 0 : e.response.lines) && void 0 !== t ? t : []), this.gameSettings = new ze, this.config.get("quickSpin.available", !0) && this.gameSettings.addItem(this.createQuickSpinCheckbox()), this.gameSettings.addItem(this.createFullscreenCheckbox()), this.gameSettings.addItem(this.createLeftHandCheckbox()), this.gameSettings.addItem(this.createGameSoundsCheckbox()), this.gameSettings.addItem(this.createBackgroundSoundsCheckbox()), this.bigWinAnimation = new pn, this.fastStopLayout = new Fe, this.controls = this.device.desktop ? new Ao : new Po, this.bonus = new Fs, this.bonusOverlay = new Zs, this.betSettings = this.rootNode.addChild(new Te), this.betSettings.setBets(this.betLevel.bets, this.betLevel.betCoins), this.betSettings.setPayLines(40), this.betSettings.setBet(this.betLevel.bet), this.autoPlaySettings = this.rootNode.addChild(new de), this.autoPlaySettings.setAutoPlayCounts(this.autoPlay.counts), this.autoPlaySettings.stopSection.addItem(new ke), this.autoPlaySettings.stopSection.addItem(new fe), this.autoPlaySettings.stopSection.addItem(new be), this.autoPlaySettings.stopSection.addItem(new Ae), this.autoPlaySettings.stopSection.addItem(new ve), this.gameRules = new Ue, this.menu = new Qe, this.menu.addItem(this.loader.getAsset("iconPaytable"), this.paytable), this.menu.addItem(this.loader.getAsset("iconSettings"), this.gameSettings), this.menu.addItem(this.loader.getAsset("iconRules"), this.gameRules), this.rootNode.addChild(this.fastStopLayout), this.rootNode.addChild(this.menu), this.rootNode.addChild(this.controls), this.rootNode.addChild(this.bigWinAnimation), this.rootNode.addChild(this.bonusOverlay), this.rootNode.addChild(this.bonus), this.freeOverlay = this.rootNode.addChild(new Eo), this.paytable.updateBet(this.betLevel), this.controls.updateBet(this.betLevel), this.betSettings.on("open", (() => {
                            this.menu.close(), this.autoPlaySettings.close(), this.controls.onBetSettingsOpen()
                        })), this.betSettings.on("close", (() => {
                            this.controls.onBetSettingsClose()
                        })), this.betSettings.on("pickBet", (t => {
                            this.betLevel.set(this.betLevel.bets.indexOf(t))
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
                            var t = (0, o.Z)((function*(t, e) {
                                yield i.popupManager.show("PopupFreeRound", t), e()
                            }));
                            return function(e, i) {
                                return t.apply(this, arguments)
                            }
                        }()), this.freeRound.onFinish.once(function() {
                            var t = (0, o.Z)((function*(t) {
                                yield i.popupManager.show("PopupFreeRound"), t()
                            }));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()), this.action.on("state:reward_enter", this.reward()), this.action.on("state:spin_enter", (() => {
                            this.autoPlay.enabled && !this.store.get("free:isFree", !1) && (this.autoPlay.setCount(this.autoPlay.count - 1), this.controls.setAutoPlayCount(this.autoPlay.count)), this.controls.onSpinEnter()
                        })), this.action.on("state:finish_enter", (() => {
                            this.autoPlay.count <= 0 && this.autoPlay.disable(), this.controls.onFinishEnter()
                        }))
                    }
                    initStates() {
                        super.initStates(), this.state.add("setup", new rs(this), ["ready"]), this.state.add("ready", new os(this), ["spin"]), this.state.add("spin", new ds(this), ["stop"]), this.state.add("stop", new us(this), ["reward"]), this.state.add("reward", new as(this), ["finish"]), this.state.add("finish", new is(this), ["ready"])
                    }
                    beforeFreeSpinsPopup() {
                        this.slot.beforeFreeSpinsPopup(), this.controls.beforeFreeSpinsPopup()
                    }
                    start() {
                        var t = () => super.start,
                            e = this;
                        return (0, o.Z)((function*() {
                            var i;
                            if (t().call(e), Qi.set(e.store.get("reward:feature", Vi.Basic)), yield e.freeRound.start(), "bonus" === e.store.get("reward:feature") && (yield e.popupManager.show("PopupRestore"), yield e.slot.showBonus(!0), e.store.get("free:isFree", !1) || (yield e.freeRound.finish())), null === (i = e.sound.get("backgroundNormal")) || void 0 === i || i.fade(2), e.state.goTo("setup"), "freespin" === e.store.get("reward:feature")) {
                                e.slot.restoreFreeSpins();
                                var s = e.store.get("free:left", 0);
                                e.action.emit("free:updateLeft", s), yield e.freeOverlay.show(e.store.get("reward:bonus") ? xo.START : xo.RESTORE)
                            }
                            e.state.goTo("ready")
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
                            s = () => {
                                e(), this.slot.animation.breakAllPayment()
                            };
                        return (0, o.Z)((function*() {
                            var o;
                            e(), t.slot.lines.disable(), t.slot.animation.beforeStart(), null !== (o = t.bigWin) && void 0 !== o && o.available(t.wallet.coins) && (t.bigWinAnimation.press(i), t.controls.pressButtonSpin(i), yield t.bigWinAnimation.show(t.bigWin.type(t.wallet.coins), t.wallet.coins), t.sound.stopBigWin(), e());
                            var n = t.store.get("reward:lines", []),
                                a = t.store.get("reward:scatters", !1);
                            if ((n.length > 0 || t.wallet.scatterCoins) && (t.controls.disableButtonSpin(), a && n.unshift(a), t.slot.textTotalWin.once("show", (() => {
                                    t.fastStopLayout.press(s, !1), t.controls.pressButtonSpin(s)
                                })), yield t.slot.animation.allPayment(n), e()), a && (t.controls.disableButtonSpin(), yield t.slot.animation.scatterPayment(a)), "bonus" === t.store.get("reward:feature") && (t.controls.disableButtonSpin(), yield t.slot.animation.bonusReward(), yield t.bonusOverlay.show(), yield t.bonus.show(), t.bonusOverlay.hide()), t.store.get("free:isStart")) {
                                var h = t.store.get("free:left", 0);
                                t.action.emit("free:updateLeft", h), "bonus" !== t.store.get("reward:feature") ? t.beforeFreeSpinsPopup() : (t.slot.alpha = 0, t.controls.alpha = 0), yield t.freeOverlay.show(xo.START)
                            } else t.store.get("free:isEnd", !1) && (yield t.delay(zi.get("afterFreeSpins")), t.beforeFreeSpinsPopup(), yield t.freeOverlay.show(xo.END), yield t.delay(200));
                            t.slot.animation.complete(), Qi.set(t.store.get("reward:feature")), t.action.emit("update:balance"), t.state.goTo("finish")
                        }))
                    }
                    checkBalance() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            if (!t.freeRound.enabled && !t.store.get("free:isFree", !1) && t.wallet.balance < t.betLevel.toCoins()) {
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
                        return (0, o.Z)((function*() {
                            t.autoPlay.enabled || Qi.isFreespin() || (yield t.quickSpin.tryEnable())
                        }))()
                    }
                    afterReelsStop() {
                        !this.store.get("spin:isFast", !1) || this.autoPlay.enabled || Qi.isFreespin() || this.quickSpin.update()
                    }
                }
            },
            6331: () => {},
            3020: () => {},
            9685: () => {},
            3113: () => {},
            4556: () => {}
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
    }), t), n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), e = {}, i = "the_rite:", n.l = (t, s, o, a) => {
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
            i = self.webpackChunkthe_rite = self.webpackChunkthe_rite || [];
        i.forEach(e.bind(null, 0)), i.push = e.bind(null, i.push.bind(i))
    })();
    var a = n.O(void 0, [216], (() => n(1839)));
    a = n.O(a)
})();