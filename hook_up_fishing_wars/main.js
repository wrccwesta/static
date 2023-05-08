/*! @mascot-banner branch: fishing - commit: 8f9045883d1eda6080cc0a937857f5246ffa42c4 */
(() => {
    var t, e, i, s = {
            6055: (t, e, i) => {
                "use strict";
                var s = {};
                i.r(s), i.d(s, {
                    ALPHA_MODES: () => Q.ALPHA_MODES,
                    AbstractBatchRenderer: () => m.eo,
                    AbstractMultiResource: () => m.M4,
                    AbstractRenderer: () => m.I8,
                    AlphaFilter: () => X.U,
                    AnimatedSprite: () => ot.K,
                    AppLoaderPlugin: () => x.LP,
                    ArrayResource: () => m.$N,
                    Attribute: () => m.ah,
                    BLEND_MODES: () => Q.BLEND_MODES,
                    BUFFER_BITS: () => Q.BUFFER_BITS,
                    BUFFER_TYPE: () => Q.BUFFER_TYPE,
                    BaseImageResource: () => m.bg,
                    BasePrepare: () => b.Zq,
                    BaseRenderTexture: () => m.jd,
                    BaseTexture: () => m.VL,
                    BatchDrawCall: () => m.a$,
                    BatchGeometry: () => m.JZ,
                    BatchPluginFactory: () => m.TJ,
                    BatchRenderer: () => m.Bv,
                    BatchShaderGenerator: () => m.Zk,
                    BatchSystem: () => m.Sj,
                    BatchTextureArray: () => m.Ie,
                    BitmapFont: () => B.UP,
                    BitmapFontData: () => B.d0,
                    BitmapFontLoader: () => B.vl,
                    BitmapText: () => B.Xz,
                    BlurFilter: () => K.T,
                    BlurFilterPass: () => K.Y,
                    Bounds: () => Y.YZ,
                    BrowserAdapter: () => it.ZQ,
                    Buffer: () => m.lW,
                    BufferResource: () => m.qm,
                    CLEAR_MODES: () => Q.CLEAR_MODES,
                    COLOR_MASK_BITS: () => Q.COLOR_MASK_BITS,
                    CanvasResource: () => m.Y8,
                    Circle: () => $.Circle,
                    Container: () => Y.W2,
                    ContextSystem: () => m.lH,
                    CountLimiter: () => b.fh,
                    CubeResource: () => m.TA,
                    DEG_TO_RAD: () => $.DEG_TO_RAD,
                    DRAW_MODES: () => Q.DRAW_MODES,
                    DisplayObject: () => Y.s$,
                    ENV: () => Q.ENV,
                    Ellipse: () => $.Ellipse,
                    ExtensionType: () => m.nw,
                    FORMATS: () => Q.FORMATS,
                    FillStyle: () => f.ft,
                    Filter: () => m.wn,
                    FilterState: () => m.jV,
                    FilterSystem: () => m.kV,
                    Framebuffer: () => m.AI,
                    FramebufferSystem: () => m.WB,
                    GC_MODES: () => Q.GC_MODES,
                    GLFramebuffer: () => m.tT,
                    GLProgram: () => m.Ei,
                    GLTexture: () => m.fy,
                    GRAPHICS_CURVES: () => f.wA,
                    Geometry: () => m.ZX,
                    GeometrySystem: () => m.TO,
                    Graphics: () => f.TC,
                    GraphicsData: () => f.iM,
                    GraphicsGeometry: () => f.RB,
                    IGLUniformData: () => m.W1,
                    INSTALLED: () => m.e_,
                    ImageBitmapResource: () => m._w,
                    ImageResource: () => m.PA,
                    InteractionData: () => w.gU,
                    InteractionEvent: () => w.sm,
                    InteractionManager: () => w.bx,
                    InteractionTrackingData: () => w.s_,
                    KawaseBlurFilter: () => J.p,
                    LINE_CAP: () => f.$o,
                    LINE_JOIN: () => f.S,
                    LINE_SCALE_MODE: () => q.F4,
                    LineStyle: () => f.TD,
                    Loader: () => x.aN,
                    LoaderResource: () => x.kC,
                    MASK_TYPES: () => Q.MASK_TYPES,
                    MIPMAP_MODES: () => Q.MIPMAP_MODES,
                    MSAA_QUALITY: () => Q.MSAA_QUALITY,
                    MaskData: () => m.HI,
                    MaskSystem: () => m.zj,
                    Matrix: () => $.Matrix,
                    Mesh: () => tt.Kj,
                    MeshBatchUvs: () => tt.wQ,
                    MeshGeometry: () => tt.xc,
                    MeshMaterial: () => tt.rY,
                    ObjectRenderer: () => m.bO,
                    ObservablePoint: () => $.ObservablePoint,
                    PI_2: () => $.PI_2,
                    PRECISION: () => Q.PRECISION,
                    Point: () => $.Point,
                    Polygon: () => $.Polygon,
                    Prepare: () => b.B9,
                    Program: () => m.$r,
                    ProjectionSystem: () => m.NW,
                    Quad: () => m.lD,
                    QuadUv: () => m.ud,
                    RAD_TO_DEG: () => $.RAD_TO_DEG,
                    RENDERER_TYPE: () => Q.RENDERER_TYPE,
                    Rectangle: () => $.Rectangle,
                    RenderTexture: () => m.TI,
                    RenderTexturePool: () => m.uW,
                    RenderTextureSystem: () => m.J$,
                    Renderer: () => m.Th,
                    Resource: () => m._z,
                    RoundedRectangle: () => $.RoundedRectangle,
                    Runner: () => et.R,
                    SAMPLER_TYPES: () => Q.SAMPLER_TYPES,
                    SCALE_MODES: () => Q.SCALE_MODES,
                    SHAPES: () => $.SHAPES,
                    SVGResource: () => m.pX,
                    ScissorSystem: () => m.id,
                    Shader: () => m.ex,
                    ShaderSystem: () => m.p,
                    SimpleRope: () => V.IE,
                    SmoothGraphics: () => q.K3,
                    Sprite: () => st.j,
                    SpriteMaskFilter: () => m.z9,
                    Spritesheet: () => y.c,
                    SpritesheetLoader: () => y.o,
                    State: () => m.ZM,
                    StateSystem: () => m.zI,
                    StencilSystem: () => m.Ld,
                    System: () => m.xP,
                    TARGETS: () => Q.TARGETS,
                    TEXT_GRADIENT: () => C.M_,
                    TYPES: () => Q.TYPES,
                    TemporaryDisplayObject: () => Y.Ql,
                    Text: () => C.xv,
                    TextFormat: () => B.SQ,
                    TextMetrics: () => C._A,
                    TextStyle: () => C.pn,
                    Texture: () => m.xE,
                    TextureGCSystem: () => m.wr,
                    TextureLoader: () => x.dp,
                    TextureMatrix: () => m.UX,
                    TextureSystem: () => m.CT,
                    TextureUvs: () => m.aF,
                    Ticker: () => at.vB,
                    TickerPlugin: () => at.Sb,
                    TilingSprite: () => nt.o,
                    TilingSpriteRenderer: () => nt.S,
                    TimeLimiter: () => b.FI,
                    Transform: () => $.Transform,
                    UPDATE_PRIORITY: () => at.uF,
                    UniformGroup: () => m.oo,
                    VERSION: () => m.q4,
                    VideoResource: () => m.eH,
                    ViewableBuffer: () => m.Rv,
                    WRAP_MODES: () => Q.WRAP_MODES,
                    XMLFormat: () => B.Lq,
                    XMLStringFormat: () => B.lx,
                    autoDetectFormat: () => B.jv,
                    autoDetectRenderer: () => m.e6,
                    autoDetectResource: () => m.pb,
                    checkMaxIfStatementsInShader: () => m.a7,
                    createUBOElements: () => m.TF,
                    defaultFilterVertex: () => m.Y9,
                    defaultVertex: () => m.kP,
                    extensions: () => m.Rw,
                    generateProgram: () => m.qw,
                    generateUniformBufferSync: () => m.K0,
                    getTestContext: () => m.Kc,
                    getUBOData: () => m.DL,
                    graphicsUtils: () => f.yR,
                    groupD8: () => $.groupD8,
                    interactiveTarget: () => w.Op,
                    isMobile: () => it.tq,
                    resources: () => m.Jb,
                    settings: () => it.Xd,
                    systems: () => m.eG,
                    uniformParsers: () => m.sg,
                    utils: () => rt
                });
                var o = i(8826),
                    n = i(6866),
                    a = i(5310),
                    r = i(4891),
                    h = (i(3306), i(8657).Z, r.Q3),
                    l = r.b_,
                    d = null === r.Q3 || void 0 === r.Q3 ? void 0 : r.Q3.ticker,
                    c = {
                        Linear: r.bJ,
                        Back: r.eJ,
                        Elastic: r.tQ,
                        Sine: r.Yv
                    },
                    u = (i(1509), i(2113), i(5008), i(1820), i(5717), i(959)),
                    p = i(3943),
                    g = i(9610),
                    A = i(447),
                    m = i(1778),
                    v = i(6661),
                    f = i(1290),
                    w = i(2699),
                    b = i(9447),
                    y = i(4877),
                    C = i(7955),
                    B = i(9079),
                    x = i(9740);
                class S {
                    static add() {
                        for (var t of S.supportedFontExtensions) x.kC.setExtensionLoadType(t, x.kC.LOAD_TYPE.XHR), x.kC.setExtensionXhrType(t, x.kC.XHR_RESPONSE_TYPE.BUFFER)
                    }
                    static use(t, e) {
                        S.supportedFontExtensions.some((e => t.extension.endsWith(e))) ? S.loadFromBuffer(t).finally((() => e())) : e()
                    }
                    static loadFromBuffer(t) {
                        var e, i, s, o, n, a, r, h, l, d, c, u, p, g, A, m, v, f, w, b = null !== (e = null === (i = t.metadata) || void 0 === i || null === (s = i.font) || void 0 === s ? void 0 : s.family) && void 0 !== e ? e : t.name;
                        return document.fonts.add(new FontFace(b, t.data, null === (o = t.metadata) || void 0 === o ? void 0 : o.font)), t.styles = [{
                            fontFamily: b.replace(/['|"]/gi, ""),
                            fontStyle: null === (n = t.metadata) || void 0 === n || null === (a = n.font) || void 0 === a ? void 0 : a.style,
                            fontWeight: null === (r = t.metadata) || void 0 === r || null === (h = r.font) || void 0 === h ? void 0 : h.weight
                        }], S.waitFont({
                            "font-family": b,
                            "font-stretch": null === (l = t.metadata) || void 0 === l || null === (d = l.font) || void 0 === d ? void 0 : d.stretch,
                            "font-style": null === (c = t.metadata) || void 0 === c || null === (u = c.font) || void 0 === u ? void 0 : u.style,
                            "font-weight": null === (p = t.metadata) || void 0 === p || null === (g = p.font) || void 0 === g ? void 0 : g.weight
                        }, null === (A = t.metadata) || void 0 === A || null === (m = A.font) || void 0 === m ? void 0 : m.testString, null !== (v = null === (f = t.metadata) || void 0 === f || null === (w = f.font) || void 0 === w ? void 0 : w.timeout) && void 0 !== v ? v : t.timeout)
                    }
                }(0, n.Z)(S, "extension", v.n.Loader), (0, n.Z)(S, "supportedFontExtensions", ["ttf", "otf", "woff", "woff2"]), (0, n.Z)(S, "waitFont", function() {
                    var t = (0, o.Z)((function*(t, e, i) {
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
                var k = i(9900),
                    P = i(7239),
                    E = i.n(P);

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

                function F(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? T(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : T(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                var I = new Map;
                class M extends k.Howl {
                    constructor(t) {
                        super(t), (0, n.Z)(this, "initialVolume", 1), (0, n.Z)(this, "data", {}), this.initialVolume = t.volume
                    }
                    fade(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        return this.volume(i), h.to(this, t, {
                            volume: e > -1 ? e : this.initialVolume
                        }), this.play(), this
                    }
                }
                class O {
                    constructor(t, e, i) {
                        (0, n.Z)(this, "handlers", new Map), (0, n.Z)(this, "onChangeMute", void 0), (0, n.Z)(this, "onChangeVolume", void 0), (0, n.Z)(this, "savedVolume", 0), this.device = t, this.visibility = e, this.preferences = i, this.onChangeMute = new(E()), this.onChangeVolume = new(E()), this.visibility.on("change", (t => {
                            try {
                                var e, i;
                                if ("hidden" !== t || this.mutedAll) null === (e = k.Howler.ctx) || void 0 === e || e.resume();
                                else null === (i = k.Howler.ctx) || void 0 === i || i.suspend()
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
                        k.Howler.volume(t), e && this.preferences.set("volume", {
                            volume: t
                        })
                    }
                    add(t) {
                        return this.get(t)
                    }
                    set volume(t) {
                        t <= 0 && !this.mutedAll ? I.forEach((t => this.setMuteBySound(t, !0))) : t > 0 && this.mutedAll && I.forEach((t => this.setMuteBySound(t, !1))), this.savedVolume = t, this.setGlobalVolume(t), this.onChangeVolume.dispatch(t)
                    }
                    get volume() {
                        return k.Howler.volume()
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
                        return Array.from(I.values()).filter((e => {
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
                        return null === (e = I.get(t)) || void 0 === e ? void 0 : e.sound
                    }
                    play(t) {
                        for (var e, i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) s[o - 1] = arguments[o];
                        return null === (e = this.handlers.get(t)) || void 0 === e ? void 0 : e(...s)
                    }
                }
                class R {
                    static pre(t, e) {
                        t && R.supportedSoundExtensions.includes(t.extension) ? (t.load = function(t) {
                            this.isLoading || (this.isComplete ? t && setTimeout((() => t(this)), 1) : (t && this.onComplete.once(t), this.data = new M({
                                src: this.url,
                                sprite: this.metadata.sprite || !1,
                                volume: this.metadata.audioMetadata.volume,
                                loop: this.metadata.audioMetadata.loop
                            }), this.type = x.kC.TYPE.AUDIO, this.loadType = x.kC.LOAD_TYPE.AUDIO, this._setFlag(x.kC.STATUS_FLAGS.LOADING, !0), this.onStart.dispatch(this), this.data.on("loaderror", this._boundOnError, !1), this.data.on("load", this._boundComplete, !1), this.sound = this.data))
                        }, t.complete = function() {
                            var t;
                            if (this.data && (this.data.off("loaderror", this._boundOnError, !1), this.data.off("load", this._boundComplete, !1)), this.isComplete) throw new Error("Complete called again for an already completed resource.");
                            this._setFlag(x.kC.STATUS_FLAGS.COMPLETE, !0), this._setFlag(x.kC.STATUS_FLAGS.LOADING, !1);
                            var e = null !== (t = this.name) && void 0 !== t ? t : this.url;
                            I.set(e, F(F({}, this.metadata.audioMetadata), {}, {
                                id: e,
                                sound: this.sound,
                                muted: !1
                            })), this.onComplete.dispatch(this)
                        }, t._boundComplete = t.complete.bind(t), e()) : e()
                    }
                }(0, n.Z)(R, "extension", v.n.Loader), (0, n.Z)(R, "supportedSoundExtensions", ["mp3"]);
                i(1293);
                var Z, D = i(9534),
                    L = i(1162),
                    _ = i(1368),
                    U = i(9685),
                    N = i(5083),
                    H = i(2339);
                i(3113);

                function G(t) {
                    var e = t.substr(0, 3),
                        i = Math.floor(10 * +e + .001);
                    return "3.7" === e ? Z.VER37 : "3.8" === e ? Z.VER38 : "4.0" === e ? Z.VER40 : "4.1" === e ? Z.VER41 : i < Z.VER37 ? Z.VER37 : Z.UNKNOWN
                }(function(t) {
                    t[t.UNKNOWN = 0] = "UNKNOWN", t[t.VER37 = 37] = "VER37", t[t.VER38 = 38] = "VER38", t[t.VER40 = 40] = "VER40", t[t.VER41 = 41] = "VER41"
                })(Z || (Z = {}));
                class z {
                    constructor() {
                        (0, n.Z)(this, "scale", 1)
                    }
                    readSkeletonData(t, e) {
                        var i = new D.BinaryInput(e);
                        i.readString();
                        var s = i.readString(),
                            o = G(s),
                            n = null;
                        if (o === Z.VER38 && (n = new U.SkeletonBinary(new U.AtlasAttachmentLoader(t))), (i = new D.BinaryInput(e)).readInt32(), i.readInt32(), (o = G(s = i.readString())) !== Z.VER40 && o !== Z.VER41 || (n = new N.SkeletonBinary(new N.AtlasAttachmentLoader(t))), !n) {
                            var a = "Unsupported version of spine model ".concat(s, ", please update pixi-spine");
                            console.error(a)
                        }
                        return n.scale = this.scale, n.readSkeletonData(e)
                    }
                }
                class j {
                    constructor() {
                        (0, n.Z)(this, "scale", 1)
                    }
                    readSkeletonData(t, e) {
                        var i = e.skeleton.spine,
                            s = G(i),
                            o = null;
                        if (s === Z.VER37 && (o = new _.SkeletonJson(new _.AtlasAttachmentLoader(t))), s === Z.VER38 && (o = new U.SkeletonJson(new U.AtlasAttachmentLoader(t))), s !== Z.VER40 && s !== Z.VER41 || (o = new N.SkeletonJson(new N.AtlasAttachmentLoader(t))), !o) {
                            var n = "Unsupported version of spine model ".concat(i, ", please update pixi-spine");
                            console.error(n)
                        }
                        return o.scale = this.scale, o.readSkeletonData(e)
                    }
                }
                class W extends L.go {
                    createBinaryParser() {
                        return new z
                    }
                    createJsonParser() {
                        return new j
                    }
                    parseData(t, e, i, s) {
                        var o = e;
                        t.spineData = o.readSkeletonData(i, s), t.spineAtlas = i
                    }
                }(0, n.Z)(W, "extension", v.n.Loader), (0, n.Z)(W, "use", (new W).genMiddleware().use);
                var V = i(512),
                    Q = i(600),
                    Y = i(9360),
                    X = i(2160),
                    K = i(7832),
                    J = i(4045),
                    q = i(3361),
                    $ = i(3298),
                    tt = i(8656),
                    et = i(3385),
                    it = i(6997),
                    st = i(736),
                    ot = i(1337),
                    nt = i(9504),
                    at = i(798),
                    rt = i(5277);
                f.TC.nextRoundedRectBehavior = !0, C.xv.nextLineHeightBehavior = !0, v.R.add(w.bx, b.B9, m.Bv, u.c, p.Q, g.T, A.O, B.vl, y.o, W, S, R), window.PIXI = s;
                var ht = i(3233),
                    lt = i.n(ht);

                function dt(t) {
                    return t && "object" == typeof t && !Array.isArray(t)
                }

                function ct(t) {
                    for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++) i[s - 1] = arguments[s];
                    if (!i.length) return t;
                    var o = i.shift();
                    if (dt(t) && dt(o))
                        for (var n in o) dt(o[n]) ? (t[n] || Object.assign(t, {
                            [n]: {}
                        }), ct(t[n], o[n])) : Object.assign(t, {
                            [n]: o[n]
                        });
                    return ct(t, ...i)
                }
                class ut {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.create(null);
                        (0, n.Z)(this, "subscribers", new Map), this.data = t
                    }
                    merge() {
                        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                        this.data = ct({}, this.data, ...e)
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
                        return lt()(this.data, t, e)
                    }
                }
                class pt extends rt.EventEmitter {}
                var gt = window.navigator.userAgent.match("CriOS") ? .86 : .96;
                class At extends pt {
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
                        return window.innerHeight === t || window.innerHeight / t >= gt
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
                class mt extends pt {
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
                class vt extends rt.EventEmitter {
                    constructor() {
                        super(...arguments), (0, n.Z)(this, "enabled", !1)
                    }
                    toggle() {
                        this.enabled = !this.enabled, this.emit("change", this.enabled)
                    }
                }
                var ft = i(5992);
                class wt extends ft.v {}
                class bt {
                    constructor(t) {
                        var e, i, s, o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        (0, n.Z)(this, "forceMobile", void 0), (0, n.Z)(this, "forceLandscape", void 0), (0, n.Z)(this, "ua", void 0), this.renderer = t, this.forceMobile = null !== (e = null === (i = document.documentElement) || void 0 === i || null === (s = i.classList) || void 0 === s ? void 0 : s.contains("layout-mobile")) && void 0 !== e && e, this.forceLandscape = o, this.ua = window.navigator.userAgent.toLowerCase()
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
                        return this.height / this.width > 1 && !this.forceLandscape
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
                class yt {}
                var Ct = i(1021);
                class Bt {
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
                    genId() {
                        return (0, Ct.x0)(8)
                    }
                    toDegrees(t) {
                        return t * (180 / Math.PI)
                    }
                }
                class xt extends rt.EventEmitter {
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
                class St {
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
                    dbclick(t, e, i) {
                        var s, o = 0,
                            n = this._withPrimary(e, i),
                            a = t => {
                                ++o >= 2 ? (o = 0, s && clearTimeout(s), n(t)) : s = setTimeout((() => {
                                    o = 0
                                }), 350)
                            };
                        return t.on(this.pointerTapEvent, a, i), () => {
                            t.off(this.pointerTapEvent, a, i)
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
                class kt {
                    constructor(t) {
                        (0, n.Z)(this, "pressed", void 0), (0, n.Z)(this, "disabled", void 0), (0, n.Z)(this, "prevent", void 0), (0, n.Z)(this, "canDispatch", void 0), (0, n.Z)(this, "onPress", void 0), this.keyCode = t, this.canDispatch = !0, this.pressed = !1, this.disabled = !1, this.prevent = !1, this.onPress = new(E()), window.addEventListener("keyup", (t => {
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
                class Pt {
                    constructor() {
                        (0, n.Z)(this, "KEY_CODE", {
                            Enter: 13,
                            Space: 32,
                            Shift: 16,
                            Escape: 27
                        }), (0, n.Z)(this, "keys", [])
                    }
                    register(t) {
                        var e = new kt(t);
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

                function Et(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function Tt(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Et(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Et(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class Ft extends rt.EventEmitter {
                    constructor(t) {
                        super(), (0, n.Z)(this, "loader", new x.aN), this.device = t, this.loader.onError.add((t => this.emit("error", t))), this.loader.onComplete.add((t => this.emit("complete", t)))
                    }
                    get resources() {
                        return this.loader.resources
                    }
                    load(t) {
                        var e = this;
                        return (0, o.Z)((function*() {
                            var i = yield e._getSizes(), s = Object.create(null), o = t.filter((t => {
                                var i, s, o;
                                return null === (i = null === (s = t.metadata) || void 0 === s || null === (o = s.platform) || void 0 === o ? void 0 : o.includes(e.device.platform)) || void 0 === i || i
                            })).map((t => (s = Tt(Tt({}, s), i[t.url]), Tt(Tt({}, t), {}, {
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
                            var i, s, o, n, a, r = this.loader.resources[t];
                            return r ? null !== (i = null !== (s = null !== (o = null !== (n = r.texture) && void 0 !== n ? n : r.spineData) && void 0 !== o ? o : r.sound) && void 0 !== s ? s : null === (a = r.textures) || void 0 === a ? void 0 : a[e]) && void 0 !== i ? i : r.textures : m.xE.from(t)
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
                class It {}
                class Mt {
                    constructor() {
                        (0, n.Z)(this, "renderer", void 0), it.Xd.RENDER_OPTIONS.legacy = !0, it.Xd.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !0, this.renderer = m.Th.create({
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
                i(1200);
                var Ot = {
                    SPENDING_BUDGET_EXCEEDED: "SPENDING_BUDGET_EXCEEDED",
                    MAX_BET_LIMIT_EXCEEDED: "MAX_BET_LIMIT_EXCEEDED",
                    INSUFFICIENT_BALANCE: "INSUFFICIENT_BALANCE",
                    BALANCE_CHANGE_ERROR: "BALANCE_CHANGE_ERROR"
                };
                class Rt extends rt.EventEmitter {
                    constructor() {
                        super(...arguments), _defineProperty(this, "_response", void 0), _defineProperty(this, "_transformRequest", [])
                    }
                    transformRequest(t) {
                        this._transformRequest.push(...t)
                    }
                    request(t) {
                        var e = this;
                        return _asyncToGenerator((function*() {
                            var i = e._transformRequest.reduce(((t, e) => e(t)), t),
                                s = yield axios.post(window.serverUrl, i);
                            if (e._response = s.data, e.emit("response:".concat(t.action), e._response), e.emit("response", e._response, t.action), e._response.error) throw new Error(e._response.error);
                            return e._response
                        }))()
                    }
                    resetSession() {
                        return _asyncToGenerator((function*() {
                            yield axios.post("cs.php")
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
                class Dt {
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
                            for (var a = arguments.length, r = new Array(a > 1 ? a - 1 : 0), h = 1; h < a; h++) r[h - 1] = arguments[h];
                            null === (o = this.transition) || void 0 === o || null === (n = o.state) || void 0 === n || n.enter(...r)
                        } else {
                            var l;
                            console.error("[StateMachine]: Can't transition to ".concat(t, " from ").concat(null === (l = this.transition) || void 0 === l ? void 0 : l.name))
                        }
                    }
                }
                class Lt extends rt.EventEmitter {
                    constructor() {
                        super(...arguments), (0, n.Z)(this, "width", void 0), (0, n.Z)(this, "height", void 0), (0, n.Z)(this, "aspectRatio", void 0), (0, n.Z)(this, "propAspectRatio", void 0), (0, n.Z)(this, "paddingX", void 0), (0, n.Z)(this, "paddingY", void 0)
                    }
                    resize(t, e, i, s) {
                        this.width = t, this.height = e;
                        var o = null != i ? i : window.innerWidth,
                            n = null != s ? s : window.innerHeight;
                        this.aspectRatio = parseFloat(Math.min(o / t, n / e).toFixed(3)), this.paddingX = Math.max(Math.round((o / 2 - this.width / 2 * this.aspectRatio) / this.aspectRatio), 0), this.paddingY = Math.max(Math.round((n / 2 - this.height / 2 * this.aspectRatio) / this.aspectRatio), 0), this.propAspectRatio = parseFloat(Math.max((2 * this.paddingX + this.width) / this.width, (2 * this.paddingY + this.height) / this.height).toFixed(3))
                    }
                }
                class _t extends Y.W2 {}
                class Ut {
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
                var Nt = {
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
                class Ht extends rt.EventEmitter {
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
                        t === this.bets.length - 1 ? this.set(0) : this.set(++t)
                    }
                    decrement() {
                        var t = this.bets.indexOf(this.bet);
                        0 === t ? this.set(this.bets.length - 1) : this.set(--t)
                    }
                    toCoins() {
                        return this.bet * this.betCoins
                    }
                }
                class Gt extends(Xt(st.j)) {
                    constructor() {
                        super(...arguments), (0, n.Z)(this, "interactive", !0)
                    }
                }
                class zt {
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
                            var r = yield s.show(...n);
                            return i.rootNode.removeChild(s), r
                        }))()
                    }
                }
                var jt, Wt = i(899),
                    Vt = i.n(Wt);
                class Qt {
                    constructor() {
                        (0, n.Z)(this, "prefix", "")
                    }
                    setPrefix(t) {
                        this.prefix = t
                    }
                    set(t, e) {
                        Vt().set("".concat(this.prefix, ":").concat(t), e)
                    }
                    get(t, e) {
                        return Vt().get("".concat(this.prefix, ":").concat(t), e)
                    }
                    clear() {
                        Vt().clearAll()
                    }
                }
                class Yt extends rt.EventEmitter {
                    constructor() {
                        super(), document.addEventListener("visibilitychange", (() => {
                            this.emit("change", document.visibilityState), "hidden" === document.visibilityState ? this.emit("hide") : this.emit("show")
                        }))
                    }
                    get isVisible() {
                        return "visible" === document.visibilityState
                    }
                }
                m.xE.WHITE.baseTexture.resource.source.getContext("2d").fillRect(0, 0, 1, 1);

                function Xt(t, e) {
                    return class extends t {
                        constructor() {
                            super(...arguments), (0, n.Z)(this, "game", jt), (0, n.Z)(this, "preventAutoResize", !1), this.on("added", (() => {
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
                class Kt extends Y.W2 {
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
                class Jt extends(Xt(Y.W2, {
                    preventResize: !0
                })) {
                    constructor() {
                        super(), (0, n.Z)(this, "_dirty", void 0), (0, n.Z)(this, "_distance", void 0), (0, n.Z)(this, "_minY", void 0), (0, n.Z)(this, "_scrollContainer", void 0), (0, n.Z)(this, "_scrollMask", void 0), (0, n.Z)(this, "_speed", void 0), (0, n.Z)(this, "_startPosition", void 0), (0, n.Z)(this, "_targetPosition", void 0), (0, n.Z)(this, "hitAreaOffsetLeft", void 0), (0, n.Z)(this, "hitAreaOffsetRight", void 0), (0, n.Z)(this, "paddingBottom", void 0), (0, n.Z)(this, "scrollBar", void 0), this.paddingBottom = 0, this.hitAreaOffsetLeft = 0, this.hitAreaOffsetRight = 0, this.interactive = !0, this._width = 0, this._height = 0, this._minY = 0, this._speed = 0, this._dirty = !1, this._startPosition = null, this._distance = null, this._targetPosition = null, this._scrollMask = new f.TC, this._scrollContainer = new Y.W2, this._scrollContainer.interactive = !0, this.scrollBar = null, super.addChild(this._scrollMask), super.addChild(this._scrollContainer), this.mask = this._scrollMask, this._setupEvents()
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
                            this._minY = this._height - i - this._scrollContainer.height - this.paddingBottom, this._height = e + this.paddingBottom - i, this._scrollContainer.hitArea = new $.Rectangle(0 | this.hitAreaOffsetLeft, 0 | i, t - this.hitAreaOffsetRight | 0, this._scrollContainer.height + this.paddingBottom | 0)
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
                const qt = Jt;

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
                class te extends(Xt(C.xv)) {
                    constructor(t) {
                        super(t, function(t) {
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
                class ee extends(Xt(Kt)) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "GameSettings"), (0, n.Z)(this, "scrollView", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "title", void 0), this.scrollView = this.addChild(new qt), this.title = this.scrollView.addChild(new te(this.game.i18n.t("GameSettingsTitle").toUpperCase())), this.title.withGameName(), this.title.anchor.set(.5, 0), this.content = this.scrollView.addChild(new Y.W2)
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
                class ie extends(Xt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "onClick", void 0), (0, n.Z)(this, "useClickSound", !0), this.buttonMode = !0, this.interactive = !0, this.onClick = new(E()), this.onClick.add((() => {
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
                class se extends ie {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.xE.EMPTY,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 90,
                            i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        super(), (0, n.Z)(this, "wrapper", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "icon", void 0), this.wrapper = this.addChild(new Y.W2), this.background = this.wrapper.addChild(st.j.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACBUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wpM4qQAAAAqdFJOUwDSDuwsC4bvH7fzUOIGkBR01eUSgvnfUjPDkaHq9FN6AnU0BcjZ7tjHLX4Dw7IAAAHESURBVFjDxZnZYoIwEEWDIAEEWQSUXTa18/8f2M221o0lue35gPMQSObODGPDtFpZZYkSq1GkxkqSVaXWMnH2TW0WdENh1s1eSLxLc3pInu7meheeTwP43mKGeBNyGgEPNxPFS92ikVj6cop5a9ME7O1osWHSRExjnHnFaTJ8NULsrGkWa2fI7HY0k84dOOaeZnN8euBaQAIE2hPzgYQ4PHQbAQkSPDgTtydhjne/pdORBLp7/+CapLC+cwdJEjf30uCy1Pz6U5okDfPqFSWJ/Hpjl7ZMtX1ZG3SSin5RBy25auunXoYkmfA7FXDZav6VITySjndW+/LV/jl9EYDPzJYi1OlHFs0R6vw9xzYEoXlT1xh1LffNu3r/2gKjLlqmEQiNlSh1ySqUumIZSp2xBKVOmIJSKyxGqWOmotQqi1DqCKkGHgjwMwJ/PuCVAV504PMEfFSBpQBYwIBlFxkWgBEHGMyAcRIZgoHRHdlwANskYHOHbEmBjTSy/QcOLZCjFuSACDjWQg7jJI0QTw5q8Nm7fz2uZewFNmRGjsbFBvq9gVpDnNz/W54gVz7QRRVyvQZdCiJXmdAFLHRtjF12C63oXwGnIQ3G+GgEGQAAAABJRU5ErkJggg==")), this.background.anchor.set(.5), this.setBackgroundAlpha(.2), this.setBackgroundSize(e), this.showBackground(i), this.icon = this.wrapper.addChild(st.j.from(t)), this.icon.anchor.set(.5), this.game.interaction.click(this, (() => this.onClick.dispatch()))
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
                class oe extends se {
                    constructor() {
                        super("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaBAMAAADKhlwxAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURUdwTP///////////////////////////////////////////////w2imYoAAAAMdFJOUwB/gO8Q33Cfr6C/b5qlnKIAAADTSURBVFjD7dUtEsIwFATgphYTfEUGHYvrBcBiERwAyRE4BkfgEqXDj9hDUUhfUve2puqtitj5ppPZSavKYrFYLEtlv/X5vGovSvuGLp8bfJQ2AMEd0CvtFhlvgKfSPmd8oPFQ2jUEH2gE7VLiiDN0wSlacI4WnKQTvibphIOlE87Sggd2iHEGne66Y8vu/yV+Bk3jbrxBT9MbFk8LiSSeFlJzuIyPw2V8FF52zeBl1z/8pbSPZSGRek/CZIpK+z4ZX8Rbae/6U9n54Wq/EYvFYlksXwyBk9qQ6NAVAAAAAElFTkSuQmCC")
                    }
                }
                class ne extends se {
                    constructor() {
                        super("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTP///////////////////////////////////////////////////////////////////////////4/JsPUAAAATdFJOUwC/XzCfgO/fIH/Pj5BwQBCvb6Aufu5CAAAAu0lEQVRYw+3X3Q6DIAyGYVEExL9tvf97nVuGybKJpLZxyb73sCHPARw0VBVCCCGE0F8XvA9aMpGO/ZB17MbRM9doyfL2tMqLPUnKNb1Vq8mC9pU+GmXkjr7Uqcki9oYsYG/Kh+2MfNDuKVvPly3tZNVkrj0bKugyM+gbFWUYNBXGoE2ZHDkLa7B25yGXAwN7oYnfBehzade+cuK0TyMPGjToM2iTo+MhOsTktGk0rgtX6aeHEEIIIfTD3QFMQUQwK1KW1AAAAABJRU5ErkJggg==");
                        var t = this.game.config.get("homeURL.url", "javascript:history.back()"),
                            e = this.game.config.get("homeURL.target", "self");
                        this.visible = this.game.config.get("homeURL.show", !0), this.onClick.add((() => this.game.openUrl(t, e)))
                    }
                }
                class ae extends ie {
                    constructor(t) {
                        super(), (0, n.Z)(this, "icon", void 0), (0, n.Z)(this, "border", void 0), this.preventAutoResize = !0, this.border = this.addChild(new st.j(this.game.loader.getAsset("iconBorderV"))), this.icon = this.addChild(new st.j(t)), this.game.interaction.click(this, (() => {
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
                        t.desktop ? (this.border.texture = this.game.loader.getAsset("iconBorderV"), this.icon.scale.set(1), this.icon.hitArea = new $.Rectangle(0, -30, 110, 150), this.icon.position.set(20, (this.border.height - this.icon.height) / 2)) : t.landscape ? (this.icon.scale.set(2), this.icon.hitArea = null, this.border.texture = this.game.loader.getAsset("iconBorderV"), e.enabled ? (this.border.position.set(0, 0), this.icon.position.set(0, 0)) : (this.icon.position.set(-100, 0), this.border.position.set(this.icon.width + this.icon.x, 0))) : (this.icon.scale.set(1.8), this.icon.position.set(0, 0), this.icon.hitArea = null, this.border.texture = this.game.loader.getAsset("iconBorderH"), this.border.position.set(0, this.icon.height))
                    }
                }
                class re extends(Xt(st.j)) {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        super(m.xE.WHITE), this.tint = e, this.alpha = t
                    }
                    resize() {
                        var {
                            viewport: t
                        } = this.game;
                        this.width = 2 * t.paddingX + t.width, this.height = 2 * t.paddingY + t.height, this.position.set(-t.paddingX, 0)
                    }
                }
                class he extends(Xt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "Menu"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "contentItems", void 0), (0, n.Z)(this, "bottom", void 0), (0, n.Z)(this, "items", void 0), (0, n.Z)(this, "homeButton", void 0), (0, n.Z)(this, "closeButton", void 0), (0, n.Z)(this, "bottomBackgroundTexture", void 0), (0, n.Z)(this, "bottomBackgroundMobileTexture", void 0), (0, n.Z)(this, "spaceKey", void 0), (0, n.Z)(this, "currentIndex", 0), (0, n.Z)(this, "onClickHome", void 0), (0, n.Z)(this, "onClickClose", void 0), this.visible = !1, this.interactive = !0, this.bottomBackgroundTexture = m.xE.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAADECAMAAABJEswAAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAC3UExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFrln0MAAAA8dFJOU+XYgn369I3swRLTLsm6QyNhoGVdVaUzPh8aUZHFmTqwqQ5vdnLes5UKTveI2wGFBUsIKM1Ja7UreKs3KmHZN/QAAAQmSURBVHja7dfXUiJRFIbRPVkm52BAQRCYnEWc93+uabAQaAtpvNjnZi27itNN/15485XxBQBIF98AgHTxAwBIF0MAIF10hsPOsDMzXDpfZ7hmY29vb29vb99wH51Wq9Pq3FjL3t7e3t7efvt9tACAdAIMACUC/AEASCfAAFAiwO8BgHQCDAAlAvwMAEgnwABQIsA/AYB0cbrZ+el5dW1+Zm9vb29vb99wH48AgHQCDAAlAvwWAEgnwABQIsDtyaQ9ac9Mls7XmazZ2Nvb29vb2zfcRxsASBfvAIB0AgwAJQL8FABIJ8AAUCLAvwGAdPEdAEgXIwAgXYx2b2y0O6oue3t7e3t7+633sQsApIvXAEA6AQaAEgF+BQCkE2AAKBHg5wBAOgEGgBIBfgkApBNgACgR4D8AQLroAgDpotvrdXsX5+owM73vdVc/59/Xzz17e3t7e3v77ffRAwDSxTEAkC7Gi/P4eFxdF59Tx+PF8/n9unfs7e3t7e3tt9jHHQAgnQADQIkA3wYA0gkwAJQI8FcAIF18AgDSxX0AIJ0AA0CJAO8BAOmmAR7sDapr87vr3rO3t7e3t7ffch8DACBdHKwaHAyq6+q5KXt7e3t7e/sG+zgAANLFCwAgnQADQIkAvwEA0gkwAJQI8BEAkG4a4LOjs+pafC6rP7vuHXt7e3t7e/uG+zgEANLNA3xyeDJTHa6Yfjd/vnyuv2Nvb29vb2/fcB8nAEC6+AsApIsnAEA6AQaAEgHeAQDSCTAAlAjw/qqd/Z3qunpuyt7e3t7e3r7BPvYBgHTxGABIJ8AAUCLAvwCAdPEQAEgnwABQIsC3AIB0AgwAJQL8GQBIF30AIF1c6F/+zO8Xmj23t7e3t7e332q//HD5tj+/al/Unvdrv8He3t7e3t5+8x4AKOABAJAuqp+V6/L58v2Gd+zt7e3t7e2b7usTACDvP+B7AEA6AQaAEgH+CACki7sAQDoBBoASAf4HAKQTYAAQYAAQYABAgAFAgAEAAQYAAQYABBgABBgAEGAAEGAAEGAAQIABQIABAAEGAAEGAAQYAAQYABBgABBgABBgAECAAUCAAQABBgABBgAEGAAEGAAQYAAQYAAQYABAgAFAgAEAAQYAAQYABBgABBgAEGAAEGAAEGAAQIABQIABAAEGAAEGAAQYAAQYABBgABBgABBgAECAAUCAAQABBgABBgAEGAAEGAAQYAAQYAAQYABAgAFAgAEAAQYAAQYABBgABBgAEGAAEGAAEGAAQIABQIABAAEGAAEGAAQYAAQYABBgABBgABBgAECAAUCAAQABBgABBgAEGAAEGAAQYAAQYAAQYH8CABBgABBgAECAAUCAAQABBgABBgAEGAAEGAAQYAAQYAAQYABAgAFAgAEAAQYAAQYABBgABBgAmPkPtIA9BKeG90EAAAAASUVORK5CYII="), this.bottomBackgroundMobileTexture = m.xE.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZ4AAAElCAMAAADjr3SLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACuUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF7IU6UAAAA5dFJOU8+h2vPke3X4TVfVbFxIIRyF6Qou7oC+lQ43F0NnjWETJSnfkTK1uVLKcJwCBok/O7Gppa3EwZnHZBUSEz4AAAQKSURBVHja7dHrUttWAIXR06QtbYAAgRiwiTHYuPd7uL3/i1WyY1CETRLXmtnTWR+akXyk/YdVflFwxb8gmudXBYcnm+eNgsOTzXMy783J/Hf1MHte3JedNe8n9l3uy4mCq3nOT86r6+PzZWersu9sX84VHJ5snv7znffPq6u/dvb/aV/6Cq709x7q783PqofZ817rXft82Tf2G92XPQWHJ5vntYLDE84zGr0ePT2vDmct3o0+fLfq3L6TfRkpuGU8F6OL6nr6u32+KvuN7cuFgsOTzXOo4PCE80wmh5P5c/Uwq/49Ofz4vni/OGt/Z9/JvkwUXDmdTE4np9X1eF+06nzxrm5i3+W+nCo4PNk8fyg4PNk8vys4PNk8AwWHJ5tndzDYHezOGjSel/1untfV7wb2Xe7LroLDk83znYLDg0dr8/yg4PBk83yv4PDg0do8OwoOTzbPcH4f7gxn7QyfflO/2xl++tl+4/syVHA1z93wrrq+bNfc2He2L3cKrpwpODzhPNuzzrbPqmt7aYt37W+av+072ZdtBYcnm+cnBYcnm+dbBYcHj9bm+UbB4cGjtXneKjg82Tz78/v+2/3qmt8XtX83z5sb+872ZV/B4cnm+U3B4cnmeafg8GTzjOe9G7+rrsf7uHXefm5n38m+jBVcGR8/ND6en1UPs+fj1rv2+bJv7De6L8cKrua5Ob6prsd7s/bZc9/Yb3xfbhRc+VnB4cnm+UrB4cGjtXn+VnB4snn+UnB4snn+UXB4snn+VHB4snmuFByebJ7pdHo1vaqu6We17Fv7zvZlquDKtPfQtDetrt5nVX9b17Pvcl96Cq5cz+/Xvevqmt/reo3zxe/FN4uav+072ZdrBVfeK7g2z+372+p6+rt53v7GvrN9uVVw5UcFhyebR5L+n716VT781Ve7VefNd/ad7VcslRGebJ4XCg5PPM/li8vq+rJdc2Pf2b5cKjg82TxfKzg8eLQ2z4GCw5PNc3RwcHRwVF2P90XLzptndQf2Xe7LkYLDk83zUsHhyebZWn6+9XKrup7fPveN/Ub2ZUvB4Ynnua/+1u++tb+339y+3Cs4PHiEB4/wCA8e4cEjPMKDR3jwCI/w4BEePMIjPHiEB49/AR7hwSM8woNHePAIj/DgER48wiM8eIQHj/AIDx7hwSM8woNHeIQHj/DgER7hwSM8eIRHePAIDx7hER48woNHeIQHj/AIDx7hwSM8woNHePAIj/DgER48wiM8eIQHj/AIDx7hER48woNHeIQHj/DgER7hwSM8eIRHePAIDx7hER48wiM8eIQHj/AIDx7hwSM8woNHePAIj/DgER48wiM8eIRHePAIDx7hER48woNHeIQHj/DgER7hwaNu+xdVr7rouE001AAAAABJRU5ErkJggg=="), this.overlay = this.addChild(new re), this.contentItems = this.addChild(new Y.W2), this.bottom = this.addChild(new st.j(this.bottomBackgroundMobileTexture)), this.items = this.addChild(new Y.W2), this.homeButton = this.addChild(new ne), this.closeButton = this.addChild(new oe), this.closeButton.onClick.add((() => this.close())), this.spaceKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Escape), this.spaceKey.onPress.add(this.close, this), this.spaceKey.disable()
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
                        var i = this.items.addChild(new ae(t));
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
                var le = i(9576);
                class de extends le.K {
                    constructor() {
                        super(window.serverUrl, {
                            autoconnect: !1,
                            reconnect: !1
                        }), (0, n.Z)(this, "_pingInterval", void 0)
                    }
                    close(t, e) {
                        super.close(t, e), clearInterval(this._pingInterval)
                    }
                    connect() {
                        return this._pingInterval = setInterval((() => {
                            this.call("ping")
                        }), 3e4), new Promise((t => {
                            this.on("open", t), super.connect()
                        }))
                    }
                }
                class ce extends ie {
                    constructor(t) {
                        super(), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "mark", void 0), (0, n.Z)(this, "description", void 0), (0, n.Z)(this, "checked", !1), this.background = this.addChild(st.j.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA9CAMAAAApvJHbAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABmUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////26W6sgAAAAhdFJOUwCPnzDvfxD+7iCAnt5v36BwzpBAX89Qr46/vt3NYE6ublTVHtYAAAFZSURBVEjHxZfJdsMgDEUxxgiP8ewmHfX/P1k7cU6dFgJIi779RU+AQBLCrrTul0YhoprOfZ2KcOlBbtxRSs6BbPYbvamRuZ89oVs+3hH3LpM9YfMJfaqc4UeFfpnW4RqDBFb3CYbqhQNb8CwC/mO+xijB+HBUKo5Gczy4BmPVEZPeVZB9X73rnT4hReUemgQjaEboe+YNkb5mPhNhhIFh/LZvikyb9eklwwipaBl0K3o6jYk4M+hFTAy6Ymz5tukMGOFfaV7eDYPuxMKgL8y7xrnnNbPGePXNfFsGsvGPrUtS5ArbVDCMr8GJxvdPWHL+MVrmP/8/IfNj69JF06/HvsVw+hbxHl0fDyqoSUf3ipAwWk0bvJoHRo8sRBuy82Z0zgaVN/Dbs9GkMPS5ZAsv3dlDqb0zVS4r2wJgMh020M3SwHEFAFMOOmKaTOvk0q1rgKk+ky/XHPoNshlvtQO8EbIAAAAASUVORK5CYII=")), this.background.width = 61, this.background.height = 61, this.mark = this.addChild(st.j.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAMAAAB61OwbAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ5TOdIAAAAcdFJOUwCg7/5f3mAg35+/cL7uQIAwb38Qzs+vEU8hMVC5i/YxAAAAvUlEQVQoz6WT2RKDIAxFEcsiIFLtXv7/O9sSRkQIPjRv5GZykpuBEDT4TZ1II2b/jQHXhQ/h0AIJBQ9MP4PuBQagoKMzdKBLrAGPAGxNIf8E2AMAOQLMO4BVUonS4xUQ3tThAJhYPnces7WpgsT1nnucNph81rIrNlhYrJg2HrNs6jFW8ORxbpHrIUtfFUAIHVtIXQFkg+I3GLZ67QbLJemsemTBWoBsWYMd2cKyo0B/iv5V9LrxGblh5l1kP+dCHfNSyQUnAAAAAElFTkSuQmCC")), this.mark.width = 32, this.mark.height = 30, this.mark.anchor.set(.5), this.mark.position.set(this.background.width / 2, this.background.height / 2), t && (this.description = this.addChild(new C.xv(function(t) {
                            return (arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? t.toLowerCase() : t).replace(/(?:^|\s|[&"'([{])+\S/g, (t => t.toUpperCase()))
                        }(this.game.i18n.t(t), !0), {
                            fill: 16777215,
                            fontSize: 28,
                            fontFamily: "Avenir-Bold"
                        })), this.description.anchor.set(0, .5), this.description.position.set(80, this.background.height / 2)), this.hitArea = new $.Rectangle(0, 0, this.width, 61), this.game.interaction.click(this, (() => {
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
                class ue extends ce {
                    constructor() {
                        super("GameSettingsBackgroundSounds"), (0, n.Z)(this, "name", "BackgroundSoundsCheckbox")
                    }
                    resize() {
                        this.game.device.desktop ? this.scale.set(1) : (this.game.device.landscape, this.scale.set(1.8))
                    }
                }
                class pe extends ce {
                    constructor() {
                        super("GameSettingsFullscreen"), (0, n.Z)(this, "name", "FullscreenCheckbox")
                    }
                    resize() {
                        this.game.device.desktop ? (this.scale.set(1), this.visible = !0) : this.visible = !1
                    }
                }
                class ge extends ce {
                    constructor() {
                        super("GameSettingsGameSounds"), (0, n.Z)(this, "name", "GameSoundsCheckbox"), this.description.style.wordWrapWidth = 220
                    }
                    resize() {
                        this.description.style.wordWrap = this.game.device.landscape || this.game.device.desktop, this.game.device.desktop ? this.scale.set(1) : (this.game.device.landscape, this.scale.set(1.8))
                    }
                }
                class Ae extends ce {
                    constructor() {
                        super("GameSettingsIntroScreen"), (0, n.Z)(this, "name", "IntroScreenCheckbox"), this.description.style.wordWrapWidth = 220
                    }
                    resize() {
                        this.description.style.wordWrap = this.game.device.landscape || this.game.device.desktop, this.game.device.desktop ? (this.scale.set(1), this.position.set(-300, 350)) : (this.game.device.landscape, this.scale.set(1.8), this.position.set(-400, 760))
                    }
                }
                const me = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACcUExURUdwTP8gIP8hIf8gIP8hIf8hIf8fH/8jI/8gIP8AAP8hIf8iIv8hIf8XF/8qKv8fH/8iIv8hIf8gIP8hIf8hIf8hIf8gIP8fH/8hIf8gIP8hIf8gIP8iIv8hIf8gIP8gIP8hIf8gIP8hIf8fH/8hIf8gIP8gIP8hIf8fH/8iIv8hIf8jI/8eHv8fH/8iIv8gIP8hIf8fH/8fH/8hIT5bvnQAAAAzdFJOUwDS9GXk5ykk4gODLM4LBjF4qXXWrrn6GDbcwY5pxl+kVPnuCInrJ59BHkUzEXA8TplYEFU3kgwAAAO2SURBVFjDxZlpm6IwDIADDFgGYXAQFTzxvubk//+31baIHL1g2e0nH0lfQpomaQogHLaz8g+xFq2TZB1p8cFfOTa0Hm9+qKeVoYf+WyvqFKXMgaYN2fainwpGf6Fuk80sSiVGNNuoaWuYT7PX4dY4W2MXwB1bZ2Mbrp8emoaC1pPcCKPww6oKWB/hKDfIRBLrTR9z5saVJXU15g+xqSfDtbRMfiBQ5TLI1NYsMXeVue1gLxbeDzLHXolEX6lkcJSz2zGgE1753nCgS+Z7sgvt+dQeB453eEPqnRcV37xQjx8ylbEpd/Crtpl+qaWHLJ2XMtbircyS+3TWJLDMODqtyLNFs5C1ILNrvM7Sm+ub66xXdopH9tu2efDekj1Ydg0SHwZt0gLxjWkpnmEvD9w2YBdvwlEhwNg4TiZOu/zoJDiKPnuzgb/Cb5t5fYwxnj7CrLP7VUwqidjYA8zcoO/4TZ8FobOZaj0+tqel5rnwzycGvT9cDSs8LL58d8/wXHLv5a5eMT7gaGN6hV1TrBLGpHboCbhpOi6uX8HKOHmFpXmagEy5/Tpnpn/uscSxfiKLTB+/lB9P8N/7PKpprKn1ZBYXoJ9HuaiwklJkNpd4WIQrPyxzAgVyDzG5cHp4wsf9R8wzZJnM4wLE2SYeMizBJPO5xBY3H7PXVSfmkgVcYlrdJi6t2yBLFnHBxqnIgR+2ievIQi418oJ48TdIkiW48E08eclZu4KSd7IMl6zekgSKL5AiS3HhC1fWEPCcokSW4hK3COAed1OBaEaW4kLvLrUDvRpUuWQhl4RyHbC0OO1nZDEXXCwIiRoYSYPXiqZAsqZAqouHJBdPU3A3U4pM3S1W2CCWFJluEKUtLUWmW1ochNATTIZMg5AwbKICSoJMw6Yo0KMSSEjOAr0gNaEKRkTOUhM/maIaiICcJVNu+ke1CD75kf45BQtiAHjkvGBhl1iIOT0jn3glFrMoRJwPZpOfisJGZSwlRydOGUteolp4U/KcU3jTw5jqUYGSXc5RoeHhBpMRcA43TY9jlpbujrzjWHaALAYMW5ivbgYrTemXDpCdHXm7O6R31lborhECm7/Vuqk0qp2WzSay/rrz79pj3TX0umtB5k1TRa9zRU3TR5s3UNopjiZq8+aN6USlMZ3QxrT3P1rpt/HTrPn/I2+ydLQUdNQvy8d1hdSibNQvWGQvnDq6EoLuLrGgs2s3rHU3F4Vk2flXmxdoMSZ+XHcZG/sTaD3w9fE82N1eoO+CueT18R9RSEyQxPodRgAAAABJRU5ErkJggg==",
                    ve = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACcUExURUdwTAOr8AOr8AOr7wSr7wWr7wWt7QC//wCq4gSr8AOr7wSt8ASq7wSr8ASq7wCv7wSr8AKr8ASq7wOq7wSq8ACm8wan8gOq8AOr8AWq7wOr8AKr8QSr8ASr8ASr7wOs8Aaq8QSr8AOq7gSq8AOr8ACq7gOr8AOr8ASr7wWq7wSq8AOq7wSs7gOr7wSq7wen8AOr7wSr7wSs8gSr8NIVJa4AAAAzdFJOUwDS34T6MSwECfTYNXXu5hCuVrnLZxcpjs9jmVy9q6hEJ3pOeIkew5+kYGrFPoBwI5PqOwkKd94AAAPzSURBVFjDtVnblqowDC2IgAioeFe8DV5mdNSZ4///24GkCKhtgwx9cq2mMSQ7O2nKmHJZZi867DXdMwxP1/aHqGdarPJqbsLW7Wm1wk2zktaxfhMuffymbmvevylWf17eJ/ZRvxGWfrTLWTv1c6e9YDtdjYaxCns4Wk23gZfb9KclrG5P7ueM4DJ6FhhdAuMuMmlTvTDOnDjoiKQ6gywEY5I/Rloqv1SY0l6mZmsjtd5eCtvlWi28XqbA7qlEz1zSWdH8tnL4gbMcDQcesogcaivi/jhIjlhdjs52GWy2OeK7Qs3WAiUWnXLJ1FkoNH/ifqN8+jfw5Kd0d/AOsQwkNvVw7+s9yvrC0y9QN0L8Ht+l2CPi+SlTbMy37fvkvcUcfMxu5IdFlbKA2Bg/YBFQ7nSqKO5AEhqFHLCAJw1TzHgfP6Hje05w/hZrNsG6SR7NU/iKSHRi95Ojdk2MmwgEpjl7oF5ogsSxG0axHgVDUeoCAvwsfi7ICz5yrT1VOkek+Ru23fsfgcFdgRWvimoocgawmJ9++hyEm1Lk38LNV28wS30t4nWz4GUoXoGQ8xLEzHbc3zNeDKVg5rtrmYcTK5x9Dps/qFnk5X+wu85YTSN3MuiND9H+JGM5vRBJ5erKSRAQpkPnB4I7suKZXPHujoRL8mPPSlosdAXbJ9ubVJDuCQT9TdyhuBzolicD8fNC0PviWg+ubVkI6Ra5jdj5qvbEglJkogVkF3eQODwZcYeJxBxRPCPqvTryjM5g08Bmghi7D4/SebjYYpzk4Mk7j2czYEn294nMiTlUUNgBvziorABYOOw3Iw354q1w/6oMRCL2y1oyrso3wrzxU98KhgBgBuKEso8OXhIAb4MkM4iKoSVvURoPrtgjumKMsSYs7gpg46ta3JU0wC+DpxHhNlffYIpw2xMTZIUMQMlPdBo1pXezeFHwnjqtFAnRa1cDfRf+pWJOmyWJnsBVnOjLliYaKBJLSxZTWuzCN8q/at3LP7Vhsa5Dit6sYSG2WJeYuPtNoid0elO4wfuhqVScawpVbSyUfT536ar05ttYReOdrx8xG1Jukf3CZaypJBaCYrMwQJBebjh58xtZQDE4u4+5ai/jFdxoUzzsEi+Q+FXnOHzatwLqk4cLJB+QRPIaaSqTKHoa0Sgv6aT14pKejhXsKnpt51UY/mAQsnw1CKlvdMPMisOmgZBM6hqP1TfQq28EeR/G/vnQtLYxb32DaVZhlK6MTF3D/zhT0nGYsVQU5Wb2XEGir9wDy0n2wHIq+cDCansSYvU9YrHant3A6noeCjHstTxt8jiKHmPbrPKyzN7mcHJ+4z9oec7psCE9H/8H7cYwlvfLO08AAAAASUVORK5CYII=",
                    fe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAwUAAAFkBAMAAACDfIqcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURQ0NDf///////xEREREREf///////6uZoDAAAAAHdFJOU8whHsC+BBX9xfwkAAACKUlEQVR42u3RQQ2DUBRFwWcBBwULGGiDgc+CPZDg3wJpAA03IXMknKllH5TsaDV3ytZqMyHcWr0J4T4MGOgymEal+t0G31IqBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAgAEDBgwYMGDAgAEDBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgwYMGDAgAEDBgwYMGAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzE4M0G06hUj4GiMWCgv8FmQri1ZhPCtVr2QcmOdgK51GPO7vMFjAAAAABJRU5ErkJggg==";

                function we(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }
                class be extends C.xv {
                    constructor(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        super(t.toUpperCase(), function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? we(Object(i), !0).forEach((function(e) {
                                    (0, n.Z)(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : we(Object(i)).forEach((function(e) {
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

                function ye(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }
                class Ce extends C.xv {
                    constructor(t) {
                        super(t, function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? ye(Object(i), !0).forEach((function(e) {
                                    (0, n.Z)(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ye(Object(i)).forEach((function(e) {
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
                class xe extends C.xv {
                    constructor(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        super(t.toUpperCase(), function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? Be(Object(i), !0).forEach((function(e) {
                                    (0, n.Z)(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Be(Object(i)).forEach((function(e) {
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
                const Se = class extends Gt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupMaxLimit"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContinue", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new re(.7), this.content = new Y.W2, this.background = new st.j(this.game.loader.getAsset(fe)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new xe(this.game.i18n.t("PopupMaxLimitTitle")), this.title.anchor.x = .5, this.message = new Ce(this.game.i18n.t("PopupMaxLimitMessage"), {
                            wordWrap: !0
                        }), this.message.anchor.x = .5, this.actionContinue = new be(this.game.i18n.t("PopupActionReload"), {
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
                class ke extends(Xt(st.j)) {
                    constructor(t) {
                        var e;
                        super(), this.texture = null !== (e = this.game.loader.getAsset(t)) && void 0 !== e ? e : m.xE.EMPTY
                    }
                }
                const Pe = class extends Gt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupNetworkError"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "icon", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionReload", void 0), (0, n.Z)(this, "_resolver", null), this.overlay = this.addChild(new re), this.content = this.addChild(new Y.W2), this.icon = new ke(me), this.icon.anchor.x = .5, this.title = new xe(this.game.i18n.t("PopupNetworkErrorTitle"), {
                            align: "center"
                        }), this.title.anchor.x = .5, this.message = new Ce(this.game.i18n.t("PopupNetworkErrorMessage"), {
                            fontSize: 36
                        }), this.message.anchor.x = .5, this.actionReload = new be(this.game.i18n.t("PopupActionReload"), {
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
                const Ee = class extends Gt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupSound"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "icon", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContainer", void 0), (0, n.Z)(this, "actionYes", void 0), (0, n.Z)(this, "actionNo", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new re, this.content = new Y.W2, this.icon = new ke(ve), this.icon.anchor.x = .5, this.message = new Ce(this.game.i18n.t("PopupSoundMessage"), {
                            wordWrap: !0
                        }), this.message.anchor.x = .5, this.actionContainer = new Y.W2, this.actionYes = new be(this.game.i18n.t("PopupActionYes"), {
                            fill: 16777215
                        }), this.game.interaction.out(this.actionYes, (() => this.actionYes.style.fill = 16777215)), this.game.interaction.hover(this.actionYes, (() => this.actionYes.style.fill = 10066329)), this.game.interaction.click(this.actionYes, (() => this.hide(!0))), this.actionNo = new be(this.game.i18n.t("PopupActionNo"), {
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
                const Te = class extends Gt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupSpendingBudget"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContinue", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new re(.7), this.content = new Y.W2, this.background = new st.j(this.game.loader.getAsset(fe)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new xe(this.game.i18n.t("PopupSpendingBudgetTitle")), this.title.anchor.x = .5, this.message = new Ce(this.game.i18n.t("PopupSpendingBudgetMessage"), {
                            wordWrap: !0
                        }), this.message.anchor.x = .5, this.actionContinue = new be(this.game.i18n.t("PopupActionContinue"), {
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
                const Fe = class extends Gt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupUnexpectedError"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContinue", void 0), (0, n.Z)(this, "_resolver", null), this.overlay = new re(.7), this.content = new Y.W2, this.background = new st.j(this.game.loader.getAsset(fe)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new xe(this.game.i18n.t("PopupUnexpectedErrorTitle")), this.title.anchor.x = .5, this.message = new Ce(this.game.i18n.t("PopupUnexpectedErrorMessage")), this.message.anchor.x = .5, this.actionContinue = new be(this.game.i18n.t("PopupActionReload"), {
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
                const Ie = class extends Gt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupZeroBalance"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContinue", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new re(.7), this.content = new Y.W2, this.background = new st.j(this.game.loader.getAsset(fe)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new xe(this.game.i18n.t("PopupZeroBalanceTitle")), this.title.anchor.x = .5, this.message = new Ce(this.game.i18n.t("PopupZeroBalanceMessage"), {
                            wordWrap: !0
                        }), this.message.anchor.x = .5, this.actionContinue = new be(this.game.i18n.t("PopupActionContinue"), {
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
                class Me extends(Xt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "logo", void 0), (0, n.Z)(this, "progress", void 0), (0, n.Z)(this, "_tweeenProgress", void 0), this.logo = st.j.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAADzBAMAAADTF1+6AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURUdwTP///////////////////////////////////////////////////////81e3QIAAAAOdFJOUwBovPELGCk/kVKoz+B7jzeedwAADjRJREFUeNrsnItvHEcdx/ece9hOjBwopY2K5YY2rdpgJSFuQhpOW1y1aZugK0HpI411VRInhNS65tEQESy3KIS+TpcSCBSwDIVCqHrKu0XQU0ApLaCeTB6Il6x6z4nPd+f9G9jZ3XnuvPa6ASF5FKV2erOf3Znf/Ob3+85vz7D/O+1DYxY0C5oFzYJmQf/HoNr8a9MWsKAJ49q02CzoGoIST9+4J9Q14/vnf68J0LqSbVd+GYKTes25zDtmWFCs7P7zL7Q5iaLb4fdhQE/+7OTzXje7kdMF7fYvdOy5kz/N6oF2kSv6Lk1OMk10snI6oAcp19HI6IGeoHrVTDUoUaKd1KgeqEj3OqMGPcR4w6t6I8f0qptKEHNrdlUL1Mp661EVKMX2qGiB5rDdplSglsBOktUBDbK9LBWoPwAq6IBGAt0yClBXVKBOBSgfFWhYAeqJCtQdGmRdp94gPm6HBhWDXSqXVY77IifsGQ09Rw7poJzzLV58pZqjEV6nSqcM9AluIFdQgPq4veqSbekb3B4VUwFq5QeaVVPEWSPooPIMiTS/41lRpFDif75X6b27BMGzYJpUHxeDBGMn2C6Un5Zs5eOCvrfwVmqP4MNjGqC2Mr9vnRM9bBRw/qQVBd0jmN8zwaUq+OQJUy+u6xc8UsDEHxI8UEYzgGzRnCXRDFm6kWobEaCR16oxoHby6nfgH6e1Y2989fPJIs+Wgvb5erzM7hAaoM2EayRJU7RTIDmEO65ktUFo7CZoc69QFr6eNucY93YUactu0pGssbmDQgyw53J9b1TJhQD5yY7vSb/LnWZsMhVv70mWOCmVKhED6VvlGAysy7yxwyP3R4h+LZgkqlPLbT/McjzNKCd/IHzTV49mP1JWjl3NVY7NnYkw/X8iuOhb9FK1kCCcOCKTGmJnKBpBYyhg4D0BdCSgDnaSUIo3E7FEU2IcK3KoxyMGDTIraT3PsUUBamXCmy7NFDc0KJ6mrQEO5fLIZTS4+VzxlrBgi4oA1Ed9MMaE2BGCWinf0K6rQoQHJSndYY6urtKE1FkidYchvVXUFGictO8uTVtoBjRIbklFXVmlCdAccrRKukJREyBoaEvAL2l+SBkadN/hv3/n5b8ezfAc+BVivdKu+xG31zOmLij+zcXQlN++Phj1XCVsnYiKkjecglvum0e0QE99hgyp3z/CBglTzM/ezb1KZVWfzSpBiX+xeTyMnxLEU7RRjs8X1ynN97IClOJkIh94gx7ngCa9Xps4SeJtUlAbN4Vb6RkF8UncHbRHuZLBb/igaTHHtr9gEiZNgs65sblAmniLBqVx+JwU5dj2Uv4TuTFqrCzqtYhYFBC0AlzpovgscBGeIwL0c+nd2ZUxDFpiuPfTAOb4NcmhoxOTBK2uKta2kONoRYPsTsu7oHNadrxpokWK19Fw4CQjqJ+0I1APDJ/zsi4NPK1T0DNUqYyG1xwPNRfFNEU/fP6i9LzWon1dHD7QbmmvKezzR8F+BoJAkQiC74313jVaKOC1SSyOjIFkelqi6mBPOo/Zj05LRDQcA3ah9H7Q3ZwT7Fiv/u3vSOM4x+yweXdeY7a81xi5Fc9xx4B+oPqze91E8UKa0Hy76JhhKqD0rvrHFjB9T79IakLwAYBZnGdVnWNow0u9hGODHjIfGgJ3Sx0BNQ6hjebhHmRBSWxMraBnO8/DEyeLFt4lvNi0z6IEFsc0yHws8W9odK14RbVV6UltMGcRO/wuHVSk2tLrDANhqDUmHLrJN5s+7E7ip6kxqFxiw4tdngGspcKEjk5qGOps2BW/6A1yF5F0ZPBFnHYrT6kHC62LCoIT1DBwlP5Ej2tkZTrZKdL7QUBlcJ4CqWQoCCYUcp4oHkv3Egu6wGgTDW7kuaabyJbHgjolX+bfWcBD5Wc3a1UiiEkoP5ng2RQ/AI8TjrrGKImWOK3qYeVOrDhOqI+Bp5jBPq2MbHEk16E6TCBV5ON0wi1RdTYHZIU+DUUjT9/LenVJAfa5hYByO6oehgbDFZ9Pol2xHpAD6qZaQJqgu0gS356A1hlTD0MqTY836nJe/UBY3JqrFhrwNp+juzgj94BCgMTKzxAxlnu5vXBUVaNzU+CW88O8LgfsoIXlsbknVmelJgeP4caxt0zZVlai1ZHZPiENtXAtfGPgGK6Eu6zleVUi5gUj9wjtHnOuLzrL8anU2UmBkI/83eMtdoKIwBKY6a8Cgg1YYwclh5mOkSV7sdHVofu6TXw+7cxgW52yoGl/K2DO08l8DgxDywTeJycQ8wThidrInNFyvXiGPDRbDpmUgv8wGY2CpTdew3HhFfyjBXPxxA+ocO+8u3QL5B4xin9cCUvRUhfYE9kUGK9+bAvIZdjLXj76zLbD/ywHip46/BU6jtce3p7//OzRgX2Hn0uzwTTQ50109TFFPuGlAiO+c+hB2UxcUc457H06h0KMHI4kBJlLxlP03by1jCxIEefP+CbaiR7DxIYuPobdCTNx7Idb5b06/XEehkPcUN0bMDl3W2K0oLnSXtPQa49Cx2BRrkYw1htZiWaaU0xFDXcOxn/dcLSrzLEq2z6PvPg0LUD1y3rdirahc9A7Vin3FBy4jD9DxGh4wyhLSZfilYBAwDq+LM7+wZymygHlZJI6agzcXRbriUsoLejHoi4HicNLVgtKiJafm5fAzIsWneICdeJ1Q6AFuYlzssgfhUsSdSt+k5gjVre4pMYluTD4SrDHtw1Kr2PniF/rZB1RSZ1PMYLDqgITSDPm7bVXGYt9J6vWVJMLiE71Q6aWpmrc/yJ5c9frydGJn7zhaV63f8oMBrikSkz2uv+Gxe4d3v3m90MI7PEN2wa+wj/XmSTmq8r2GhjIfGQlfy4pb5aZUDzKI4MvkVEx3viiB42QFXp53QLJJkDUtUfousAoQSi7ocKtJdGD2qjsbR6nNiQiUAtl0a2coqaIQIPUM6D4Ihs5qEidWaMZG40alGSS8KLmQWxoUAuTuo9oTlJoUBctGSCzk+gmTYGQjDPD5pu90YLQyC1n168VLShvsz4n+C9RgNqCxVv9tpZzCAkaCZbFttq2jgcPB8IiyPKgk3XD8uZBD7xwx/McVbMzaPDEIz3mdDLDgdwTT6ia43ymztnascnvIM5SNUF+YuHJvwkciN7FLRzziwTXcK8kB+XJEtgDgvrRcTrfQgcpw/qgVjKffJxfUksV6NYyRKJU1Qd1EQnlJiJufVcgtLpnz3mubCwFYcu1r24ng+qcQDMFNjBg2zz3JwURWXOFTbG5/oL55IwuaJ5EMzD4Q8we2uqBhsQiiFCbpFpOD7RL0H1MXJTEZmE5HZDo9HtCptWzp/GmGiQ8Yu6U7fA84UgBEtXZr1Co9XRr4j2+YMGwSHWm2qgKlNK3BKk9NPEen9veEx91lEV1CXLQoKSMht/W8acpqwBxzaiWke3Wj8uMNNQ7YjVFyrBDJCQaoV6vs1cqywK3p7lFEyFBJ5SZNyPd64GKMg9pqI/z2IX0v3/XciQqUEEB6oto6Jp4jy+jA+rnVFMpShNZS63rcIJ6fvj3+PS+TyEm2r303+NbrgWKpwXxhf57fJ1aIHYgxjRAtN+v6XGYg433tKKge0g3dIsmiKqVutnUDIn337jnABvOqJofPDX27J+/J0zG5yVF9YKh3X5EpEphctjEhbT9ds4I0b5espddbiZZjptGyHZvJJpqc20WFB2ovvDatDtZ0LVus6BZ0CxoFhQedPfCxWRAffJOMn5rLKR+/cvCUzqgLThhmVoHr/Q3IP2i+KbmRB1J9N0plWMmWQtlfdL57JPeZ+sDG7b6fzYFQBn8VvUo9O2XqEDPf2Ec5u2XqXowvzDP+82SbBO2icPnbIwWAjdSErGfoZylhN5KgbywHIQq+qpQWhzz4w0/w3Cudd8WmBOiamAv6gY3Ed8KSyylIJy19fogJ2FJvGQvK/iBdd0NEm++16Oedi684NTq23MxOKqbSu7344C+lV87LWe0O3+/wQG1oAC9DY7cTi+l6vMTBBBULkOnLm6BSuNFPxBwNXkggOdRdjCHZ3UVdF7YMH3QpF8fWfBSmWmy8GyaLgjqhknIClzULQb59zINJa5uH3jc++8UWUV2nBYKcnBanSeNyUENVL18HL/10+6XMyX94SkSWVMbnX6uRfJCXA2KwSw86c/VPJsYsxr5TQ0mlbXOUO8G9EhBdViyWkOnu/CTE15JEKjOhKJPndbbprC0M4NSRiHIielH3BWRRKCPQVAaCrL+l63U6FzyCq42xP9HDBpzDXzYeNSfdRbkvoXhvYFXpVPdD1EZFFirI1KQZcR7wZNUTOMFAciuZmDWHgDFCbtQgqrAwCeMZM3vFgDZq2ABYJUeuklcxKzzRHbWcQHnjHZLCLLr13mPZNHqz1Vc+qw0BvAY3Y6BF4xByx/xTiO1D7S9GAS+RSrhLe95tLoyHjBACWjKiJ90ViUGBaq7XR9TchdbBy1GrEcuA4ooAlDVuVNnIo+C4nL/wlxQzfMPw9TbR3YGcXMqFwRArpjXQoCSA6Bt4YCu0N+TOAzdE1G4KgOdc7XEmr/8GGOo7CDmwELHs3/w970H4V45rgGacN2QxQdVje1lUEAZh+MK3h+uH0rBwxXwjWKLiMMNAWgGgCruVmT5xsqAHBtO7MtC1+vmvBu2wsI0IBk99mlQjrhZB+Q5bAEIvmGwmRHKxqlTH1woIAX1ggVv+UuBAS31whH4vij8Xra4t10uDbwqIABNuKAqqP8XgOz3gVNNoiu5EaORggWdH2TI3yRb+ef+M2MQtQhEQJhAyg5ZCsjQuNuFPGq4q/fGakTCf7OiA2WVPEz7aLdl1KJRi0YtGkEWAQAla4PxKoWGqwAAAABJRU5ErkJggg=="), this.logo.width = 207, this.logo.height = 243, this.progress = new f.TC, this.progress.beginFill(16717864), this.progress.drawRect(0, 263, 207, 4), this.progress.endFill(), this.progress.scale.x = 0, this.addChild(this.logo), this.addChild(this.progress), this._tweeenProgress = new h(this.progress, .5, {
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

                function Oe(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function Re(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Oe(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Oe(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class Ze {
                    constructor(t) {
                        var e;
                        (0, n.Z)(this, "win", 0), (0, n.Z)(this, "balance", 0), (0, n.Z)(this, "betLevel", void 0), this.win = 0, this.balance = t.balance, this.betLevel = new Ht(t.roomsDenomination[0], t.roomsDenomination, null !== (e = t.coinValue) && void 0 !== e ? e : 100)
                    }
                    setWin(t) {
                        return this.win = t, this.win
                    }
                    setBalance(t) {
                        return this.balance = t, this.balance
                    }
                }
                var De = [...[{
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
                            volume: .25,
                            loop: !0
                        }
                    }
                }, {
                    url: "assets/audio/click.mp3",
                    name: "click",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: .1,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/shot.mp3",
                    name: "shot",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: .2,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/upShot.mp3",
                    name: "upShot",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: .2,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/kill.mp3",
                    name: "kill",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: .5,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/hit.mp3",
                    name: "hit",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: .5,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/upgradeGun.mp3",
                    name: "upGun",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: .5,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/degradeGun.mp3",
                    name: "degGun",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: .5,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/win_1.mp3",
                    name: "win",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: .5,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/fishFreeze.mp3",
                    name: "fishFreeze",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: .5,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/artefactHit.mp3",
                    name: "artefactHit",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: .5,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/artefactKill1.mp3",
                    name: "artefactKill1",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: .5,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/artefactKill2.mp3",
                    name: "artefactKill2",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: .5,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/artefactKill3.mp3",
                    name: "artefactKill3",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: .5,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/artefactKill4.mp3",
                    name: "artefactKill4",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: .5,
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/artefactKill5.mp3",
                    name: "artefactKill5",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: .5,
                            loop: !1
                        }
                    }
                }], {
                    name: "logo",
                    url: "assets/logoSmall.png",
                    metadata: {}
                }, {
                    name: "background",
                    url: "assets/bg.jpg",
                    metadata: {}
                }, {
                    url: "assets/images/introScreen/texture.json",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    name: "anim-bgWaves",
                    url: "assets/bgWaves/skeleton.json",
                    metadata: {}
                }];
                const Le = [{
                        name: "fish-low-anim",
                        url: "assets/fishes/small/skeleton.json",
                        metadata: {}
                    }, {
                        name: "fish-med-anim",
                        url: "assets/fishes/medium/skeleton.json",
                        metadata: {}
                    }, {
                        name: "fish-big-anim",
                        url: "assets/fishes/big/skeleton.json",
                        metadata: {}
                    }, {
                        name: "fish-boss-anim_1",
                        url: "assets/fishes/boss_1/skeleton.json",
                        metadata: {}
                    }, {
                        name: "fish-boss-anim_2",
                        url: "assets/fishes/boss_2/skeleton.json",
                        metadata: {}
                    }, {
                        name: "fish-gun-0",
                        url: "assets/gun/gun.png",
                        metadata: {}
                    }, {
                        name: "fish-bullet-0",
                        url: "assets/gun/bullet.png",
                        metadata: {}
                    }, {
                        name: "anim-gun_bullet",
                        url: "assets/gun/skeleton.json",
                        metadata: {}
                    }, {
                        name: "artefacts-anim",
                        url: "assets/artefacts/skeleton.json",
                        metadata: {}
                    }, {
                        name: "ui",
                        url: "assets/ui/ui.json",
                        metadata: {}
                    }, {
                        name: "WinFont",
                        url: "assets/fonts/winFont.xml",
                        metadata: {}
                    }, {
                        name: "coins",
                        url: "assets/coins/coins.json",
                        metadata: {}
                    }, {
                        name: "fish-1",
                        url: "assets/fishes/small/small-2.png",
                        metadata: {}
                    }, {
                        name: "fish-2",
                        url: "assets/fishes/small/small-3.png",
                        metadata: {}
                    }, {
                        name: "fish-3",
                        url: "assets/fishes/small/small-4.png",
                        metadata: {}
                    }, {
                        name: "fish-4",
                        url: "assets/fishes/small/small-5.png",
                        metadata: {}
                    }, {
                        name: "fish-5",
                        url: "assets/fishes/small/small-6.png",
                        metadata: {}
                    }, {
                        name: "fish-6",
                        url: "assets/fishes/small/small-8.png",
                        metadata: {}
                    }, {
                        name: "fish-7",
                        url: "assets/fishes/medium/med-1.png",
                        metadata: {}
                    }, {
                        name: "fish-8",
                        url: "assets/fishes/medium/med-2.png",
                        metadata: {}
                    }, {
                        name: "fish-9",
                        url: "assets/fishes/medium/med-3.png",
                        metadata: {}
                    }, {
                        name: "fish-10",
                        url: "assets/fishes/medium/med-4.png",
                        metadata: {}
                    }, {
                        name: "fish-11",
                        url: "assets/fishes/medium/med-5.png",
                        metadata: {}
                    }, {
                        name: "fish-12",
                        url: "assets/fishes/medium/med-6.png",
                        metadata: {}
                    }, {
                        name: "fish-13",
                        url: "assets/fishes/medium/med-7.png",
                        metadata: {}
                    }, {
                        name: "fish-14",
                        url: "assets/fishes/big/big-1.png",
                        metadata: {}
                    }, {
                        name: "fish-15",
                        url: "assets/fishes/big/big-2.png",
                        metadata: {}
                    }, {
                        name: "fish-16",
                        url: "assets/fishes/big/big-3.png",
                        metadata: {}
                    }, {
                        name: "fish-17",
                        url: "assets/fishes/big/big-4.png",
                        metadata: {}
                    }, {
                        name: "fish-100",
                        url: "assets/fishes/small/small-1.png",
                        metadata: {}
                    }, {
                        name: "fish-101",
                        url: "assets/fishes/small/small-7.png",
                        metadata: {}
                    }, {
                        name: "fish-102",
                        url: "assets/fishes/big/big-5.png",
                        metadata: {}
                    }, {
                        name: "fish-103",
                        url: "assets/artefacts/art-1.png",
                        metadata: {}
                    }, {
                        name: "fish-104",
                        url: "assets/artefacts/art-2.png",
                        metadata: {}
                    }, {
                        name: "fish-105",
                        url: "assets/artefacts/art-3.png",
                        metadata: {}
                    }, {
                        name: "fish-106",
                        url: "assets/artefacts/art-4.png",
                        metadata: {}
                    }, {
                        name: "fish-107",
                        url: "assets/artefacts/art-5.png",
                        metadata: {}
                    }, {
                        name: "fish-108",
                        url: "assets/gun/gun-free.png",
                        metadata: {}
                    }, {
                        name: "fish-200",
                        url: "assets/fishes/boss_1/boss-1.png",
                        metadata: {}
                    }, {
                        name: "fish-201",
                        url: "assets/fishes/boss_2/boss-2.png",
                        metadata: {}
                    }],
                    _e = {
                        name: "hook_up_fishing_wars",
                        fishes: [{
                            type: 1,
                            animation: {
                                file: "fish-low-anim",
                                skin: "small2"
                            },
                            physics: {
                                scale: .85,
                                bounds: [100, 100]
                            }
                        }, {
                            type: 2,
                            animation: {
                                file: "fish-low-anim",
                                skin: "small3"
                            },
                            physics: {
                                scale: .85,
                                bounds: [80, 170]
                            }
                        }, {
                            type: 3,
                            animation: {
                                file: "fish-low-anim",
                                skin: "small4"
                            },
                            physics: {
                                scale: .85,
                                bounds: [80, 170]
                            }
                        }, {
                            type: 4,
                            animation: {
                                file: "fish-low-anim",
                                skin: "small5"
                            },
                            physics: {
                                scale: .85,
                                bounds: [90, 170]
                            }
                        }, {
                            type: 5,
                            animation: {
                                file: "fish-low-anim",
                                skin: "small6"
                            },
                            physics: {
                                scale: .85,
                                bounds: [90, 170]
                            }
                        }, {
                            type: 6,
                            animation: {
                                file: "fish-low-anim",
                                skin: "small8"
                            },
                            physics: {
                                scale: .85,
                                bounds: [80, 170]
                            }
                        }, {
                            type: 7,
                            animation: {
                                file: "fish-med-anim",
                                skin: "med1"
                            },
                            physics: {
                                scale: .9,
                                bounds: [120, 250]
                            }
                        }, {
                            type: 8,
                            animation: {
                                file: "fish-med-anim",
                                skin: "med2"
                            },
                            physics: {
                                scale: .9,
                                bounds: [100, 250]
                            }
                        }, {
                            type: 9,
                            animation: {
                                file: "fish-med-anim",
                                skin: "med3"
                            },
                            physics: {
                                scale: .9,
                                bounds: [120, 250]
                            }
                        }, {
                            type: 10,
                            animation: {
                                file: "fish-med-anim",
                                skin: "med4"
                            },
                            physics: {
                                scale: .9,
                                bounds: [120, 250]
                            }
                        }, {
                            type: 11,
                            animation: {
                                file: "fish-med-anim",
                                skin: "med5"
                            },
                            physics: {
                                scale: .9,
                                bounds: [160, 200]
                            }
                        }, {
                            type: 12,
                            animation: {
                                file: "fish-med-anim",
                                skin: "med6"
                            },
                            physics: {
                                scale: .9,
                                bounds: [80, 200]
                            }
                        }, {
                            type: 13,
                            animation: {
                                file: "fish-med-anim",
                                skin: "med7"
                            },
                            physics: {
                                scale: .9,
                                bounds: [80, 200]
                            }
                        }, {
                            type: 14,
                            animation: {
                                file: "fish-big-anim",
                                skin: "big1"
                            },
                            physics: {
                                scale: .75,
                                bounds: [130, 540]
                            }
                        }, {
                            type: 15,
                            animation: {
                                file: "fish-big-anim",
                                skin: "big2"
                            },
                            physics: {
                                scale: .75,
                                bounds: [160, 500]
                            }
                        }, {
                            type: 16,
                            animation: {
                                file: "fish-big-anim",
                                skin: "big3"
                            },
                            physics: {
                                scale: .75,
                                bounds: [160, 500]
                            }
                        }, {
                            type: 17,
                            animation: {
                                file: "fish-big-anim",
                                skin: "big4"
                            },
                            physics: {
                                scale: .75,
                                bounds: [160, 500]
                            }
                        }, {
                            type: 100,
                            animation: {
                                file: "fish-low-anim",
                                skin: "small1"
                            },
                            physics: {
                                scale: 1,
                                bounds: [90, 170]
                            }
                        }, {
                            type: 101,
                            animation: {
                                file: "fish-low-anim",
                                skin: "small7"
                            },
                            physics: {
                                scale: 1,
                                bounds: [90, 90]
                            }
                        }, {
                            type: 102,
                            animation: {
                                file: "fish-big-anim",
                                skin: "big5"
                            },
                            physics: {
                                scale: 1,
                                bounds: [300, 300]
                            }
                        }, {
                            type: 103,
                            animation: {
                                file: "artefacts-anim",
                                skin: "art1"
                            },
                            physics: {
                                scale: 1,
                                bounds: [200, 200]
                            }
                        }, {
                            type: 104,
                            animation: {
                                file: "artefacts-anim",
                                skin: "art2"
                            },
                            physics: {
                                scale: 1,
                                bounds: [150, 150]
                            }
                        }, {
                            type: 105,
                            animation: {
                                file: "artefacts-anim",
                                skin: "art3"
                            },
                            physics: {
                                scale: 1,
                                bounds: [150, 150]
                            }
                        }, {
                            type: 106,
                            animation: {
                                file: "artefacts-anim",
                                skin: "art4"
                            },
                            physics: {
                                scale: 1,
                                bounds: [150, 150]
                            }
                        }, {
                            type: 107,
                            animation: {
                                file: "artefacts-anim",
                                skin: "art5"
                            },
                            physics: {
                                scale: 1,
                                bounds: [150, 150]
                            }
                        }, {
                            type: 108,
                            animation: {
                                file: "artefacts-anim",
                                skin: "art6"
                            },
                            physics: {
                                scale: 1,
                                bounds: [150, 150]
                            }
                        }, {
                            type: 200,
                            animation: {
                                file: "fish-boss-anim_2",
                                skin: "default"
                            },
                            physics: {
                                scale: 1,
                                bounds: [200, 1600]
                            }
                        }, {
                            type: 201,
                            animation: {
                                file: "fish-boss-anim_1",
                                skin: "default"
                            },
                            physics: {
                                scale: 1,
                                bounds: [200, 1600]
                            }
                        }]
                    };
                var Ue = [0, 0, 0];
                class Ne extends H.PY {
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
                            for (var a = 0, r = i.length; a < r; a++) {
                                var h = i[a],
                                    l = h.getAttachment(),
                                    d = this.slotContainers[a];
                                if (l) {
                                    var c = null,
                                        u = l.color;
                                    switch (l.type) {
                                        case D.AttachmentType.Region:
                                            var p = l.region;
                                            if (p) {
                                                h.currentMesh && (h.currentMesh.visible = !1, h.currentMesh = null, h.currentMeshId = void 0, h.currentMeshName = void 0);
                                                var g = p;
                                                if (h.currentSpriteName && h.currentSpriteName === g.name) h.currentSpriteName !== g.name || h.hackRegion || this.setSpriteRegion(l, h.currentSprite, p);
                                                else {
                                                    var A = g.name;
                                                    if (h.currentSprite && (h.currentSprite.visible = !1), h.sprites = h.sprites || {}, void 0 !== h.sprites[A]) h.sprites[A].visible = !0;
                                                    else {
                                                        var m = this.createSprite(h, l, A);
                                                        d.addChild(m)
                                                    }
                                                    h.currentSprite = h.sprites[A], h.currentSpriteName = A
                                                }
                                            }
                                            d.transform.setFromMatrix(h.bone.matrix), h.currentSprite.color ? c = h.currentSprite.color : (Ue[0] = o[0] * h.color.r * u.r, Ue[1] = o[1] * h.color.g * u.g, Ue[2] = o[2] * h.color.b * u.b, h.currentSprite.tint = rt.rgb2hex(Ue)), h.currentSprite.blendMode = h.blendMode;
                                            break;
                                        case D.AttachmentType.Mesh:
                                            if (h.currentSprite) {
                                                h.currentSprite.visible = !1, h.currentSprite = null, h.currentSpriteName = void 0;
                                                var v = new $.Transform;
                                                v._parentID = -1, v._worldID = d.transform._worldID, d.transform = v
                                            }
                                            var f = l.id;
                                            if (!h.currentMeshId || h.currentMeshId !== f) {
                                                var w = f;
                                                if (h.currentMesh && (h.currentMesh.visible = !1), h.meshes = h.meshes || {}, void 0 !== h.meshes[w]) h.meshes[w].visible = !0;
                                                else {
                                                    var b = this.createMesh(h, l);
                                                    d.addChild(b)
                                                }
                                                h.currentMesh = h.meshes[w], h.currentMeshName = l.name, h.currentMeshId = w
                                            }
                                            l.computeWorldVerticesOld(h, h.currentMesh.vertices), h.currentMesh.color ? c = h.currentMesh.color : (Ue[0] = o[0] * h.color.r * u.r, Ue[1] = o[1] * h.color.g * u.g, Ue[2] = o[2] * h.color.b * u.b, h.currentMesh.tint = rt.rgb2hex(Ue)), h.currentMesh.blendMode = h.blendMode;
                                            break;
                                        case D.AttachmentType.Clipping:
                                            h.currentGraphics || (this.createGraphics(h, l), d.addChild(h.clippingContainer), d.addChild(h.currentGraphics)), this.updateGraphics(h, l), d.alpha = 1, d.visible = !0;
                                            continue;
                                        default:
                                            d.visible = !1;
                                            continue
                                    }
                                    if (d.visible = !0, c) {
                                        var y = h.color.r * u.r,
                                            C = h.color.g * u.g,
                                            B = h.color.b * u.b;
                                        c.setLight(o[0] * y + n[0] * (1 - y), o[1] * C + n[1] * (1 - C), o[2] * B + n[2] * (1 - B)), h.darkColor ? (y = h.darkColor.r, C = h.darkColor.g, B = h.darkColor.b) : (y = 0, C = 0, B = 0), c.setDark(o[0] * y + n[0] * (1 - y), o[1] * C + n[1] * (1 - C), o[2] * B + n[2] * (1 - B))
                                    }
                                    d.alpha = h.color.a
                                } else d.visible = !1
                            }
                            for (var x = this.skeleton.drawOrder, S = null, k = null, P = 0, E = x.length; P < E; P++) {
                                var T = i[x[P].data.index],
                                    F = this.slotContainers[x[P].data.index];
                                if (k || null !== F.parent && F.parent !== this && (F.parent.removeChild(F), F.parent = this), T.currentGraphics && T.getAttachment()) k = T.clippingContainer, S = T.getAttachment(), k.children.length = 0, this.children[P] = F, S.endSlot === T.data && (S.endSlot = null);
                                else if (k) {
                                    var I = this.tempClipContainers[P];
                                    I || ((I = this.tempClipContainers[P] = this.newContainer()).visible = !1), this.children[P] = I, F.parent = null, k.addChild(F), S.endSlot == T.data && (k.renderable = !0, k = null, S = null)
                                } else this.children[P] = F
                            }
                        }
                    }
                    createGraphics(t, e) {
                        if (!this.spineData.useRectangleMask) return super.createGraphics(t, e);
                        var i = this.newGraphics();
                        if (i.clear(), i.beginFill(16777215, 1), e.worldVerticesLength <= 8) {
                            var s = new $.Rectangle(0, 0, 0, 0);
                            i.drawRect(s.x, s.y, s.width, s.height)
                        } else {
                            var o = new $.Polygon;
                            i.drawPolygon(o)
                        }
                        return i.renderable = !1, t.currentGraphics = i, t.clippingContainer = this.newContainer(), t.clippingContainer.mask = t.currentGraphics, i
                    }
                    updateGraphics(t, e) {
                        if (!this.spineData.useRectangleMask) return super.updateGraphics(t, e);
                        var i = t.currentGraphics.geometry,
                            s = i.graphicsData[0].shape;
                        if (s instanceof $.Polygon) {
                            var o = s.points,
                                n = e.worldVerticesLength;
                            o.length = n, e.computeWorldVertices(t, 0, n, o, 0, 2)
                        } else {
                            var a = [...e.vertices],
                                r = e.worldVerticesLength;
                            a.length = r, e.computeWorldVertices(t, 0, r, a, 0, 2);
                            var h = a[4] - a[0],
                                l = a[5] - a[1],
                                d = h > 0 ? a[0] : a[0] - Math.abs(h),
                                c = l > 0 ? a[1] : a[1] - Math.abs(l);
                            s.x = d, s.y = c, s.width = Math.abs(h), s.height = Math.abs(l)
                        }
                        i.invalidate()
                    }
                }
                class He extends(Xt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "waves", void 0), this.background = this.addChild(new st.j(this.game.loader.getAsset("background"))), this.waves = this.addChild(new Ne(this.game.loader.getAsset("anim-bgWaves"))), this.waves.play("animation", !0)
                    }
                }
                class Ge extends Y.W2 {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        super(), (0, n.Z)(this, "validBlendModes", [Q.BLEND_MODES.NORMAL, Q.BLEND_MODES.ADD, Q.BLEND_MODES.MULTIPLY, Q.BLEND_MODES.SCREEN]), this.needDepth = t
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
                                stack: A
                            } = g;
                            A.render(t)
                        }
                    }
                    render(t) {
                        !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._mask || this.filters && this.filters.length ? this.renderAdvanced(t) : this._render(t))
                    }
                }

                function ze(t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        s = e.scale.x,
                        o = e.scale.y,
                        n = t.width - 2 * i,
                        a = t.height - 2 * i,
                        r = n - Math.round(e.width),
                        h = a - Math.round(e.height);
                    r < 0 && (s = n / (e.width * s)), h < 0 && (o = a / (e.height * o)), (s <= 0 || o <= 0) && (e.visible = !1), e.scale.set(Math.min(s, o))
                }
                class je extends a.Box {
                    constructor() {
                        super(...arguments), (0, n.Z)(this, "id", ""), (0, n.Z)(this, "color", 16777215 * Math.random() | 0)
                    }
                    get centerX() {
                        return this.width / 2
                    }
                    get centerY() {
                        return this.height / 2
                    }
                    setPos(t, e) {
                        this.pos.x = t, this.pos.y = e
                    }
                }
                class We extends(Xt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "coin1", void 0), this.coin1 = this.addChild(new ot.K(this.game.loader.resources.coins.spritesheet.animations.coinState)), this.coin1.alpha = 0, this.coin1.animationSpeed = .567, this.coin1.play()
                    }
                    start() {
                        h.to(this.coin1, .3, {
                            pixi: {
                                alpha: 1,
                                y: -100
                            }
                        }), h.to(this, .8, {
                            delay: .8,
                            pixi: {
                                alpha: 1,
                                x: 920,
                                y: 1200
                            },
                            onComplete: () => {
                                this.parent.removeChild(this)
                            }
                        })
                    }
                }
                class Ve extends(Xt(Y.W2)) {
                    constructor(t) {
                        super(), (0, n.Z)(this, "isAlive", !1), (0, n.Z)(this, "isFreeze", !1), (0, n.Z)(this, "fishId", -1), (0, n.Z)(this, "birthTime", 0), (0, n.Z)(this, "numId", void 0), (0, n.Z)(this, "routes", []), (0, n.Z)(this, "config", void 0), (0, n.Z)(this, "enemyConfig", void 0), (0, n.Z)(this, "_bb", void 0), (0, n.Z)(this, "_body", void 0), (0, n.Z)(this, "_priceContainer", void 0), (0, n.Z)(this, "_pricePanel", void 0), (0, n.Z)(this, "_priceText", void 0), (0, n.Z)(this, "_priceInterval", void 0), (0, n.Z)(this, "_fish", void 0), (0, n.Z)(this, "_hitAnimation", void 0), (0, n.Z)(this, "_hitTimeoutId", void 0), (0, n.Z)(this, "_clickHandler", void 0), (0, n.Z)(this, "_hoverHandler", void 0), (0, n.Z)(this, "_outHandler", void 0), (0, n.Z)(this, "_dbClickHandler", void 0), (0, n.Z)(this, "_moveTimeline", void 0), (0, n.Z)(this, "_targetCrosshair", void 0), this._fishType = t, this.interactive = !0, this.numId = ++Ve._idCounter, this.config = this.game.config.get("fishes").find((t => t.type === this._fishType)), this.enemyConfig = this.game.config.get("enemyConfig").find((t => t.type === this._fishType)), this._bb = this.config.physics.bounds, this._fish = this.addChild(new Ne(this.game.loader.getAsset(this.config.animation.file))), this._fish.changeSkin(this.config.animation.skin), this._moveTimeline = new l({
                            paused: !0
                        }), this._priceContainer = this.addChild(new Y.W2), this._priceContainer.visible = !1, this._pricePanel = this._priceContainer.addChild(new st.j(this.game.loader.getAsset("ui", "fish-price_panel"))), this._pricePanel.anchor.set(.5), this._priceText = this._priceContainer.addChild(new B.Xz("", {
                            fontName: "FishPrice"
                        })), this._priceText.anchor.set(.5), this._priceText.position.set(0, -15), this._targetCrosshair = this.addChild(new st.j(this.game.loader.getAsset("ui", "icon-crosshair_yellow"))), this._targetCrosshair.anchor.set(.5), this._targetCrosshair.visible = !1, this._hitAnimation = this._fish.state.setAnimation(1, "hit", !0), this._clickHandler = this.game.interaction.click(this, (() => this.game.action.emit("fish:click", this))), this._hoverHandler = this.game.interaction.hover(this, (() => this.game.action.emit("fish:hover", this))), this._outHandler = this.game.interaction.out(this, (() => this.game.action.emit("fish:out", this))), this._dbClickHandler = this.game.interaction.dbclick(this, (() => this.game.action.emit("fish:dbClick", this)))
                    }
                    get type() {
                        return this._fishType
                    }
                    get body() {
                        return this._body
                    }
                    is(t) {
                        return this.fishId === t
                    }
                    setId(t) {
                        return this.fishId = t, this
                    }
                    setBirthTime(t) {
                        return this.birthTime = t, this
                    }
                    setRoutes(t) {
                        return this.routes = t, this
                    }
                    setPrice(t) {
                        if (clearInterval(this._priceInterval), Array.isArray(this.enemyConfig.multiple)) {
                            var e = this.enemyConfig.multiple,
                                i = 0,
                                s = () => {
                                    var s = e[i];
                                    this._priceText.text = "".concat(this.game.helpers.toMoney(t * s)), ze(this._pricePanel, this._priceText, 10), ++i >= e.length && (i = 0)
                                };
                            this._priceInterval = setInterval(s, 1e3), s()
                        } else {
                            var o = this.enemyConfig.multiple;
                            this._priceText.text = "".concat(this.game.helpers.toMoney(t * o)), ze(this._pricePanel, this._priceText, 10)
                        }
                        return this
                    }
                    showPrice(t) {
                        return this._fishType >= 100 || (this._priceContainer.visible = t && this.isAlive), this
                    }
                    hit() {
                        clearTimeout(this._hitTimeoutId), this._hitAnimation.alpha = 1, this._hitAnimation.mixBlend = 3, this._hitTimeoutId = setTimeout((() => {
                            this._hitAnimation.alpha = 0, this._hitAnimation.mixBlend = 2
                        }), 350)
                    }
                    move(t) {
                        if (this.playIdle(), !(this.routes.length <= 1)) {
                            for (var e, i, s, o, n, a, r = this.routes[0], h = [r.x, r.y], l = 1; l < this.routes.length; l++) {
                                var d = this.routes[l],
                                    u = (e = h[0], i = h[1], s = d.x, o = d.y, n = void 0, a = void 0, n = s - e, a = o - i, Math.sqrt(a * a + n * n)),
                                    p = this.enemyConfig.speed > 0 ? u / 100 / this.enemyConfig.speed : 0,
                                    g = this.game.getAngle(new $.Point(d.x, d.y), new $.Point(h[0], h[1]), -Math.PI / 2);
                                this._moveTimeline.addCallback(((t, e) => {
                                    var [i, s] = t;
                                    this.rotation = e, this._body.setAngle(e), this._body.setPos(i, s), this._priceContainer.rotation = -e
                                }), "+=0", [h, g]), p > 0 ? this._moveTimeline.to(this, p, {
                                    ease: c.Linear.easeNone,
                                    pixi: {
                                        x: d.x,
                                        y: d.y
                                    },
                                    onUpdate: () => {
                                        this._body.setPos(this.x, this.y)
                                    }
                                }, "+=0") : this._moveTimeline.addCallback(((t, e) => {
                                    this.position.set(t, e)
                                }), "+=0", [d.x, d.y]), h = [d.x, d.y]
                            }
                            this._moveTimeline.eventCallback("onComplete", (() => {
                                this._body.setAngle(this.rotation), this._body.setPos(this.x, this.y), this.game.action.emit("fish:completeRoute", this.fishId)
                            })), this._moveTimeline.play(t, !1)
                        }
                    }
                    restore(t) {
                        this._moveTimeline.resume(t, !1)
                    }
                    showText(t) {
                        var e = as.addChild(new B.Xz(t, {
                            fontName: "WinFont",
                            fontSize: 36,
                            letterSpacing: -90
                        }));
                        e.alpha = 0, e.scale.set(.5), e.anchor.set(.5), e.position.set(this.x, this.y), h.to(e, .8, {
                            pixi: {
                                scale: 1.2,
                                alpha: 1
                            },
                            onComplete: () => {
                                as.removeChild(e)
                            }
                        })
                    }
                    win(t) {
                        this.showText("+".concat(this.game.helpers.toMoney(t)));
                        var e = rs.addChild(new We);
                        e.position.set(this.x - 40, this.y + 20), e.start(), this.kill()
                    }
                    winBlueBag(t) {
                        var e = this;
                        return (0, o.Z)((function*() {
                            e.showText("+".concat(e.game.helpers.toMoney(t)));
                            var i = rs.addChild(new We);
                            i.position.set(e.x - 40, e.y + 20), i.start(), e._fish.state.setAnimation(0, "killArt3", !1), yield e.game.helpers.delay(1e3), e._fish.state.setAnimation(0, e.isFreeze ? "freeze" : "idle", !0)
                        }))()
                    }
                    winFreeLeft(t) {
                        this.showText("+".concat(t)), this.kill()
                    }
                    winCrab(t) {
                        var e, i, s, o, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        this.isAlive = !1, clearInterval(this._priceInterval), this._moveTimeline.kill(), null === (e = this._clickHandler) || void 0 === e || e.call(this), null === (i = this._hoverHandler) || void 0 === i || i.call(this), null === (s = this._outHandler) || void 0 === s || s.call(this), null === (o = this._dbClickHandler) || void 0 === o || o.call(this), h.killTweensOf(this), ns.remove(this._body), this._priceContainer.visible = !1, n ? this._fish.state.setAnimation(0, "killSmall7", !1) : (this.showText("+".concat(t)), this._fish.state.setAnimation(0, "kill", !1))
                    }
                    freeze() {
                        this.isFreeze = !0, this.isAlive && (this._moveTimeline.pause(), this._fish.state.hasAnimation("freeze") && this._fish.play("freeze", !0))
                    }
                    unfreeze() {
                        this.isFreeze = !1, this.isAlive && (this._moveTimeline.resume(), this.playIdle())
                    }
                    playIdle() {
                        this._fish.state.hasAnimation("light") ? this._fish.play("light", !0) : this._fish.play(Math.random() > .5 && this._fish.state.hasAnimation("idle2") ? "idle2" : "idle", !0)
                    }
                    target() {
                        this._targetCrosshair.visible = !0
                    }
                    untarget() {
                        this._targetCrosshair.visible = !1
                    }
                    kill() {
                        var t, e, i, s;
                        this.isAlive = !1, clearInterval(this._priceInterval), this._moveTimeline.kill(), null === (t = this._clickHandler) || void 0 === t || t.call(this), null === (e = this._hoverHandler) || void 0 === e || e.call(this), null === (i = this._outHandler) || void 0 === i || i.call(this), null === (s = this._dbClickHandler) || void 0 === s || s.call(this), h.killTweensOf(this), ns.remove(this._body), this._priceContainer.visible = !1, 103 === this._fishType ? this._fish.state.setAnimation(0, "killArt1", !1) : 104 === this._fishType ? this._fish.state.setAnimation(0, "killArt2", !1) : 105 === this._fishType ? this._fish.state.setAnimation(0, "killArt3", !1) : 106 === this._fishType ? this._fish.state.setAnimation(0, "killArt4", !1) : 107 === this._fishType ? this._fish.state.setAnimation(0, "killArt5", !1) : 108 === this._fishType ? this._fish.state.setAnimation(0, "killArt6", !1) : this._fish.state.hasAnimation("kill") && this._fish.state.setAnimation(0, "kill", !1)
                    }
                    destroy(t) {
                        var e, i, s, o;
                        super.destroy(t), clearInterval(this._priceInterval), this._moveTimeline.kill(), null === (e = this._clickHandler) || void 0 === e || e.call(this), null === (i = this._hoverHandler) || void 0 === i || i.call(this), null === (s = this._outHandler) || void 0 === s || s.call(this), null === (o = this._dbClickHandler) || void 0 === o || o.call(this), h.killTweensOf(this), ns.remove(this._body)
                    }
                    alive() {
                        this.isAlive = !0
                    }
                    reset(t, e) {
                        return this.alive(), this.isFreeze = !1, this._fish.stop(), this._hitAnimation.alpha = 0, this.position = t, this.rotation = e, this._body = new je({
                            x: t.x,
                            y: t.y
                        }, this._bb[0], this._bb[1], {
                            angle: e,
                            isCentered: !0
                        }), this._body.id = "Fish" + this.fishId, ns.insert(this._body), this.scale.set(this.config.physics.scale), this.pivot.set(this._body.centerX, this._body.centerY), this._fish.position.set(this._body.centerX, this._body.centerY), this._body.setAngle(this.rotation), this._body.setScale(this.config.physics.scale, this.config.physics.scale), this._body.setPos(t.x, t.y), this._priceContainer.rotation = -this.rotation, this._priceContainer.position.set(this._body.centerX + 20, this._body.height - 40), this._targetCrosshair.position.set(this._body.centerX, this._body.centerY), this.hitArea = new $.Rectangle(0, 0, this._bb[0], this._bb[1]), this
                    }
                }(0, n.Z)(Ve, "_idCounter", 0);
                class Qe extends(Xt(Ge)) {
                    constructor() {
                        super(), this.sortableChildren = !0
                    }
                    get aliveList() {
                        return this.children.filter((t => t.isAlive))
                    }
                    get all() {
                        return this.children
                    }
                    findFish(t) {
                        return this.children.find((e => e.fishId === t))
                    }
                    newFish(t) {
                        var e = this.addChild(new Ve(t));
                        return e.zIndex = 101 === t ? 0 : t, e
                    }
                    removeFish(t) {
                        var e = this.findFish(t);
                        e && (e.kill(), this.removeChild(e))
                    }
                    killFish(t) {
                        var e = arguments,
                            i = this;
                        return (0, o.Z)((function*() {
                            var s = e.length > 1 && void 0 !== e[1] && e[1],
                                o = i.findFish(t);
                            o && (o.kill(), yield i.game.delay(1e3), s || i.removeChild(o))
                        }))()
                    }
                    killAll() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            for (var e of t.children) e.kill();
                            yield t.game.delay(1e3), t.removeChildren()
                        }))()
                    }
                    kill(t) {
                        var e = this;
                        return (0, o.Z)((function*() {
                            var i = e.findFish(t);
                            i && (i.kill(), yield e.game.delay(1e3), e.removeChild(i))
                        }))()
                    }
                    winFish(t, e) {
                        var i = this;
                        return (0, o.Z)((function*() {
                            var s = i.findFish(t);
                            s && (s.win(e), yield i.game.delay(1e3), i.removeChild(s))
                        }))()
                    }
                    winBlueBag(t, e) {
                        var i = this;
                        return (0, o.Z)((function*() {
                            var s = i.findFish(t);
                            s && s.winBlueBag(e)
                        }))()
                    }
                    winFreeLeft(t, e) {
                        var i = this;
                        return (0, o.Z)((function*() {
                            var s = i.findFish(t);
                            s && (s.winFreeLeft(e), yield i.game.delay(1e3), i.removeChild(s))
                        }))()
                    }
                    winCrab(t, e) {
                        var i = arguments,
                            s = this;
                        return (0, o.Z)((function*() {
                            var o = i.length > 2 && void 0 !== i[2] && i[2],
                                n = s.findFish(t);
                            n && (n.winCrab(e, o), yield s.game.delay(1e3), s.removeChild(n))
                        }))()
                    }
                    freeze() {
                        for (var t of this.children) t.freeze()
                    }
                    unfreeze() {
                        for (var t of this.children) t.unfreeze()
                    }
                    showPrice(t) {
                        for (var e of this.children) e.showPrice(t)
                    }
                    setPrice(t) {
                        for (var e of this.children) e.setPrice(t)
                    }
                    reset() {
                        this.children.forEach((t => t.destroy())), this.removeChildren()
                    }
                }
                class Ye extends O {}
                const Xe = JSON.parse('{"AutoPlaySettingsStopCondButtonReset":"Reset","AutoPlaySettingsStopCondCheckboxBalance":"If Balance Increases By","AutoPlaySettingsStopCondCheckboxBalanceDrop":"If Balance Decreases By","AutoPlaySettingsStopCondCheckboxFeatureBonus":"If Bonus Game Won","AutoPlaySettingsStopCondCheckboxFeatureFreeSpin":"If Free Spins Won","AutoPlaySettingsStopCondCheckboxWin":"If Win","AutoPlaySettingsStopCondCheckboxWinAny":"Any","AutoPlaySettingsStopCondCheckboxWinBig":"Big","AutoPlaySettingsStopCondCheckboxWinGiant":"Giant","AutoPlaySettingsStopCondTitle":"STOP AUTOPLAY","AutoPlaySettingsSubTitle":"Setup your best autoplay conditions","AutoPlaySettingsTitle":"AUTOPLAY","BetSettingsLines":"LINES\\n<value>%s</value>","BetSettingsTitle":"BET SETTINGS","BetSettingsWays":"WAYS\\n<value>%s</value>","ControlsDesktopAutoPlayStart":"AUTOPLAY","ControlsDesktopAutoPlayStop":"STOP AUTO","ControlsDesktopBalance":"BALANCE%s\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopBet":"BET %s\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopFreeRoundLeft":"FREE ROUND\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopFreeRoundWin":"TOTAL WIN %s\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopFreeRoundWinEmpty":"TOTAL WIN","ControlsDesktopFreeSpinsLast":"FREE SPINS LEFT\\n<delimiter> \\n</delimiter><value>LAST</value>","ControlsDesktopFreeSpinsLeft":"FREE SPINS LEFT\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopLines":"LINES\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopMaxBet":"MAX BET","ControlsDesktopTotalWin":"TOTAL WIN %s\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopWays":"WAYS\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopWin":"WIN %s\\n<delimiter> \\n</delimiter><value>%s</value>","Currency":"CURRENCY\\n<value>%s</value>","GameRulesAdvancedAutoPlayContent":"Advanced autoplay settings are available in the section with standard autoplay settings. You can set the conditions for stopping the game in automatic mode:\\n\\n<bold>if win any/big/giant</bold> - autoplay will be stopped after any/big/giant win\\n\\n<bold>if balance increased by 10%-100%</bold> - autoplay will stop when your balance increases by the selected %\\n\\n<bold>if balance decreased by 10%-100%</bold> - autoplay will be interrupted when your balance decreases by the selected %\\n\\nClick <bold>Reset</bold> to reset all autoplay settings","GameRulesAdvancedAutoPlayTitle":"Advanced Autoplay Settings","GameRulesAutoPlayContent":"Select the number of game rounds to play in automatic mode by pressing the button with the corresponding number, or press the button with the infinity sign to play in automatic mode until the autoplay is manually canceled or until the balance runs out. Your choice must be confirmed with the Start button.","GameRulesAutoPlayTitle":"Autoplay Options","GameRulesBestExperience":"Please note that you can only play one game at a time on each account. Therefore, you cannot play a game on more than one device, or multiple games on the same device simultaneously. Doing so may lead to various errors.\\n\\nFor the best gaming experience, we recommend using the latest version of the relevant software.","GameRulesGeneralRTP":"Theoretical RTP: %s %","GameRulesGeneralTitle":"General Info","GameRulesInterfaceAutoPlay":"Click to go to autoplay menu","GameRulesInterfaceBalance":"Here is your current balance","GameRulesInterfaceBetLevel":"Your current bet and a button to go to the bet size selection menu","GameRulesInterfaceContent":"All buttons of the game interface are listed below. Please note that the appearance and location of the buttons may differ slightly depending on the format in which the game is launched and what feature it is currently in.","GameRulesInterfaceMenu":"Click to access the game menu","GameRulesInterfaceQuickSpin":"Click to enable/disable quick spin","GameRulesInterfaceSound":"Turn game sound on/off and adjust sound volume","GameRulesInterfaceSpin":"Click to start the game round at the current bet. In the desktop version of the game, the button may have an alternative design","GameRulesInterfaceTitle":"Game Interface","GameRulesInterfaceWin":"Here is the win in the current game round","GameRulesSettingsContent":"To go to the settings menu, click the cogwheel icon in the game menu","GameRulesSettingsContentItemBackgroundSound":"<bold>Background music</bold> - turns on/off background music in the game","GameRulesSettingsContentItemFullscreen":"<bold>Full Screen</bold> - enables/disables full screen mode","GameRulesSettingsContentItemGameSound":"<bold>Game sound</bold> - turns on/off the sound effects of the game","GameRulesSettingsContentItemQuickSpin":"<bold>Quick Spin</bold> - turns on/off the function of the accelerated mode of rotation and stop of the reels","GameRulesSettingsTitle":"Game Settings","GameSettingsBackgroundSounds":"Background Music","GameSettingsFullscreen":"Full Screen","GameSettingsGameSounds":"Game Sounds","GameSettingsIntroScreen":"Intro Screen","GameSettingsLeftHand":"Left Hand Mode","GameSettingsQuickSpin":"Quick Spin","GameSettingsRiskFeatureCheckbox":"Risk&Buy","GameSettingsTitle":"GAME SETTINGS","IntroScreenHideButtonText":"Don\'t show next time","IntroScreenLoaderText":"LOADING","MenuDesktopButtonFullscreen":"FULLSCREEN","MenuDesktopButtonHome":"HOME","MenuDesktopButtonPaytable":"PAYTABLE","MenuDesktopButtonQuickspin":"QUICKSPIN","MenuDesktopButtonSound":"SOUND","MenuGameRules":"GAME INFORMATION","MenuMobileBetSettingsTitle":"BET SETTINGS","MenuMobileGameSettingsLeftHand":"Left Hand Mode","MenuMobileGameSettingsQuickspin":"Quick Spin","MenuMobileGameSettingsSounds":"Game Sounds","MenuMobileGameSettingsTitle":"GAME SETTINGS","MenuMobilePaytableTitle":"PAYTABLE","MenuPaytable":"PAYTABLE","MenuSettings":"SETTINGS","NetPositionTitle":"Net Position: %s","PopupActionClose":"Close","PopupActionContinue":"Continue","PopupActionEnable":"Enable","PopupActionNo":"No","PopupActionReload":"Reload","PopupActionYes":"Yes","PopupFreeRoundEndMessage":"The next spins will use your bonus amount","PopupFreeRoundEndTitle":"Free Rounds Finished","PopupFreeRoundLastMessage":"Congratulations, you have\\n last free round","PopupFreeRoundStartMessage":"Congratulations, you have\\n%s free rounds","PopupFreeRoundStartTitle":"Free Rounds Bonus","PopupFreeSpinsButton":"CLICK ANYWHERE TO CONTINUE","PopupFreeSpinsStopDescription":"<value>%s FREE SPINS</value> PLAYED","PopupFreeSpinsStopDescriptionNew":"%s Free Spins played","PopupFreeSpinsTitle":"CONGRATULATIONS","PopupFreeSpinsTitleNew":"CONGRATULATIONS! YOU WON","PopupFreeSpinsTitleRestore":"IN-GAME FEATURE RESTORED!","PopupFreeSpinsWinRestore":"<value>%s FREE SPINS</value> LEFT","PopupFreeSpinsWinRestoreLast":"<value>LAST FREE SPIN</value> LEFT","PopupFreeSpinsWinStart":"YOU WON <value>%s FREE SPINS</value>","PopupFreeSpinsWinStartNew":"%s FREE SPINS","PopupFreeSpinsWinStop":"YOU WON <value>%s</value>","PopupFreeSpinsWinStopNew":"<value>%s</value>","PopupMaxLimitMessage":"Bet exceeded max bet limit.","PopupMaxLimitTitle":"Max limit","PopupNetworkErrorMessage":"Please reload the game.","PopupNetworkErrorTitle":"Connection Lost","PopupQuickSpinMessage":"It seems you prefer to play a bit faster.\\nWould you like to enable Quick Spin?","PopupQuickSpinTitle":"Quick Spin","PopupRestoreMessage":"In-game feature restored!","PopupRiskNBuyContentBuy":"Buy in a feature for %s\\nthat will play at the bet %s","PopupRiskNBuyContentRisk":"Take the risk of winning %s\\nto get a feature at the bet %s","PopupRiskNBuyTitleBuy":"BUY IN FEATURE","PopupRiskNBuyTitleRisk":"RISK FEATURE","PopupSoundMessage":"Play with sound?","PopupSpendingBudgetMessage":"You have reached your play limit.\\nWelcome back later.","PopupSpendingBudgetTitle":"Play limit","PopupUnexpectedErrorMessage":"An unexpected situation.\\nReload the page.","PopupUnexpectedErrorTitle":"Unexpected situation","PopupZeroBalanceMessage":"Please change your BET LEVEL or top up your balance","PopupZeroBalanceTitle":"Insufficient funds","RiskNBuyBuyFor":"BUY FOR %s","RiskNBuyFreeSpinsText":"FREE SPINS","RiskNBuyOnBet":"ON BET %s","RiskNBuySubHeader":"RISK YOUR WIN\\nTO PLAY","StatusBarMobileBalance":"BALANCE %s\\n","StatusBarMobileBet":"BET %s\\n","StatusBarMobileFreeLast":"FREE SPINS LEFT\\n<value>LAST</value>","StatusBarMobileFreeLeft":"FREE SPINS LEFT\\n<value>%s</value>","StatusBarMobileFreePlayed":"FREE SPINS PLAYED\\n","StatusBarMobileFreeRoundLeft":"FREE ROUND\\n","StatusBarMobileTotalWin":"TOTAL WIN %s\\n","StatusBarMobileWin":"WIN %s\\n","TimeElapsedTitle":"Time Elapsed: %s"}'),
                    Ke = JSON.parse('{"ControlsDesktopFreeSpinsLeft":"FREE SHOTS\\n<delimiter> \\n</delimiter><value>%s</value>","HintAim":"Auto shooting & aim","HintBalance":"Player\'s Balance","HintBetLevel":"The Price of 1 Shot","HintHelp":"Hide Help","HintMenu":"Paytable & Menu","HintPrice":"Show / Hide Prices","HintSound":"Sound Settings","HintTimer":"Feature timer","HintX10":"X10 shoot","IntroScreenDescription0":"Freeze and free shots for hitting special creatures!","IntroScreenDescription1":"Chests reveals random Artifacts and wins","IntroScreenDescription2":"Hit the Gun and get a free shots serie!","IntroScreenDescription3":"Two Bosses with huge winnings!","PaytableSectionBetLinesContent":"The payout values are based on the currently selected bet and change proportionally with its changes. Malfunction voids all pays and plays.","PaytableSectionBonusContent":"Only big Fish symbols and special symbols can appear in the Bonus game. The bonus game lasts 3 minutes. Each destroyed Small Crab symbol increases the duration of the Bonus game.","PaytableSectionBonusTitle":"Bonus game","PaytableSectionGun":"Gun. Gives free shots. Appears in the main and Bonus games only.","PaytableSectionMainContent":"This is a game in which the player selects a target and shoots at it. The more shots on the target, the more chances to hit it. When the target is hit, the player receives coins. Double clicking on a target will automatically shoot it. Each shot removes the bet from the player\'s balance.","PaytableSectionPayoutFishTypeL":"Big Fish","PaytableSectionPayoutFishTypeM":"Medium Fish","PaytableSectionPayoutFishTypeS":"Small Fish","PaytableSectionPayoutTitle":"Fish payout values","PaytableSectionSpecialBag":"Bag. Gives a random win in the amount of x25-35 to the total bet. Appears in the main and Bonus games only.","PaytableSectionSpecialBigTurtle":"Big Turtle. Fires as many free shots in random directions as there are Fish on the screen. Appears in the main game and during the Fish Parade only.","PaytableSectionSpecialBlueBoss":"Blue Boss. Gives a random big win in the amount of x200-500 to the total bet. Appears in the Bonus game only.","PaytableSectionSpecialBlueChest":"Blue Chest. Gives a random win in the amount of x45-88 to the total bet. Appears in the main and Bonus games only.","PaytableSectionSpecialGreenBoss":"Green Boss. Gives a random big win in the amount of x100-250 to the total bet. Appears in the main game only.","PaytableSectionSpecialJellyfish":"Jellyfish. Freezes all Fish on the screen for a certain amount of time. Appears in the main and Bonus games only.","PaytableSectionSpecialRedChest":"Red Chest. Gives a random number of Bag or Gun symbols. Appears in the main and Bonus games only.","PaytableSectionSpecialSmallCrab":"Small Crab. Adds time to the duration of the Bonus game. Appears in the main game and during the Fish Parade only.","PaytableSectionSpecialSmallTurtle":"Small Turtle. Fires a random number of free shots in random directions. Appears in the main game and during the Fish Parade only.","PaytableSectionSpecialTitle":"Special symbols","PaytableSectionSpecialTurtle":"Special Turtle. Destroys all Small Fish on the screen. Appears in the main game only.","TextPrice":"PRICE"}');

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

                function qe(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Je(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Je(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                var $e = qe(qe({}, Xe), Ke);
                class ti extends(Xt(Y.W2)) {
                    constructor(t) {
                        super(), (0, n.Z)(this, "isAlive", !1), (0, n.Z)(this, "numId", void 0), (0, n.Z)(this, "speed", 40), (0, n.Z)(this, "targetFishId", 0), (0, n.Z)(this, "_bullet", void 0), (0, n.Z)(this, "_bb", [20, 20]), (0, n.Z)(this, "_body", void 0), this.renderable = !1, this.numId = null != t ? t : ++ti._idCounter, this._bullet = this.addChild(new Ne(this.game.loader.getAsset("anim-gun_bullet"))), this.setFireType("normal")
                    }
                    get body() {
                        return this._body
                    }
                    setFireType(t) {
                        this._bullet.changeSkin("x10" === t ? "gun3BulletState1" : "gun1Bullet")
                    }
                    hit() {
                        this.isAlive = !1, this.renderable = !0, this._bullet.play("hit", !1)
                    }
                    start() {
                        this.renderable = !0, this._bullet.state.setAnimation(0, "shot", !1)
                    }
                    stop() {
                        this.renderable = !1, ns.remove(this._body)
                    }
                    reset(t, e) {
                        this.alive(), this.renderable = !1, this.position = t, this.rotation = e, this._body = new je({
                            x: t.x,
                            y: t.y
                        }, this._bb[0], this._bb[1], {
                            angle: e,
                            isCentered: !0
                        }), this._body.id = "Bullet" + this.numId, ns.insert(this._body), this.pivot.set(this._body.centerX, this._body.centerY), this._bullet.position.set(this._body.centerX, this._body.centerY), this._body.pos.x = t.x, this._body.pos.y = t.y
                    }
                    kill() {
                        this.isAlive = !1, this.renderable = !1
                    }
                    destroy(t) {
                        super.destroy(t), ns.remove(this._body)
                    }
                    alive() {
                        this.isAlive = !0
                    }
                    target(t) {
                        this.targetFishId = t
                    }
                    untarget() {
                        this.targetFishId = 0
                    }
                    move(t, e) {
                        if (this.isAlive) {
                            var i = this.targetFishId > 0 && t && e ? this.game.getAngle(new $.Point(t, e), this.position) : this.rotation;
                            this.x += this.speed * Math.sin(i), this.y -= this.speed * Math.cos(i), this.x <= 0 ? (this.x = 0, this.rotation = -i) : this.x >= this.game.viewport.width ? (this.x = this.game.viewport.width, this.rotation = -i) : this.y <= 0 ? (this.y = 0, this.rotation = Math.PI - i) : this.y >= this.game.viewport.height && (this.y = this.game.viewport.height, this.rotation = Math.PI - i), this._body.setAngle(i), this._body.setPos(this.x, this.y)
                        }
                    }
                }(0, n.Z)(ti, "_idCounter", 0);
                class ei extends(Xt(Ge)) {
                    constructor() {
                        super()
                    }
                    get aliveList() {
                        return this.children.filter((t => t.isAlive))
                    }
                    findBullet(t) {
                        return this.children.find((e => e.numId === t))
                    }
                    newBullet(t) {
                        return this.addChild(new ti(t))
                    }
                    removeBullet(t) {
                        var e = this.findBullet(t);
                        e && (e.stop(), this.removeChild(e))
                    }
                    hitBullet(t) {
                        var e = this;
                        return (0, o.Z)((function*() {
                            var i = e.findBullet(t);
                            i && (i.hit(), yield e.game.delay(666), i.stop(), e.removeChild(i))
                        }))()
                    }
                    reset() {
                        this.children.forEach((t => t.destroy())), this.removeChildren()
                    }
                }
                class ii extends se {
                    constructor() {
                        super("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTP///////////////////////////////////////////////////////////////////////////4/JsPUAAAATdFJOUwCQEIBgvyCfQN+gX1CvMH+wz28jjNZzAAAAj0lEQVRYw+3VSxLDIAwEUYMNFonz9f3vmivMUFZVFv0O0AuQYFkAAACABDUkE+U+TsmodrqcotVONzXd7PRNTe92OtT007/HY5cEu4TLRVFmr0yMdVdXJv5p0ROfp1VNF/+TUb+CPnGPx6ao7BIu9x2Kz8svb+o23u30Q02/89KJz5N/IOqD3Rh4AAAAZPgBCZoyk9uDJXUAAAAASUVORK5CYII=", 90, !1), (0, n.Z)(this, "name", "ButtonMenu")
                    }
                    resize() {
                        this.scale.set(this.game.device.desktop ? 1 : 1.6)
                    }
                }
                const si = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTP////////////////////////////////////////////////////////////////////////////////////VtkI8AAAAVdFJOUwBwX1BAIIC/3+8QoDCvf5/PYJCwj2OlcKoAAAFKSURBVFjD7ZfRkoMgDEWxAgIqVXfz/7+6YK10ikop4WFncp5oOnNqrwEjYwRBEARBEEQFxKi1rWNW4LhVM8MPvnnQqxm66Ju2xTHH6l+Ae4m5fZpjtS8WXPcN4FTduaIyCOZYPfiq/NJs4UrNFlfVCOagtt3W4saXeYbQ2Ek9gEN1E3xdXrubN2Ok7t16eix5XiIWEmr+EoPOSmRKqdcYtg+jWzYfqyGpXi/b7LnfEdVM7TG0IXccdb/HIPyGxFT7GJZdDZjqOST8j9SyXiChmwfs2xiajx+eiChbRmadTyqpHoMvb6PLlHp+GUryjqePDtXt1rWZjxnRT5dq/7dE+JXv5gV5nHUzbiOCyH2AnbnjJuuzuvrCHalF2ZDZpEacgsFsPlfr0sl4Ph0nl+chVWMI5oyhuDtWgXovHH6DgpaMIAiCIAiCqMUf3ndCqqLsR7MAAAAASUVORK5CYII=",
                    oi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAACXBAMAAADT+qdUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAqUExURUdwTP///////////////////////////////////////////////////4sGkswAAAANdFJOUwDfIBC/z4BfYP7ef86PIFKAAAAASklEQVQ4y2NgsPa9WsDAwCR79+5FBQbGu0AgzNALoq4xxIKoKwx3wWCUGqVGqWFG+YLIqwy5IOo6gxWIEmBgWgkuCxg4Tl5JZgAAzqb+eiBGXckAAAAASUVORK5CYII=";
                class ni extends st.j {
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
                class ai extends Y.W2 {
                    constructor() {
                        super(), this.interactive = !0
                    }
                }
                class ri extends st.j {
                    constructor(t, e) {
                        super(t), this.tint = e
                    }
                }
                class hi extends f.TC {
                    constructor(t, e, i, s) {
                        super(), this.beginFill(0), this.drawRect(t, e, i, s), this.endFill()
                    }
                }
                class li extends(Xt(Y.W2)) {
                    constructor(t, e, i) {
                        super(), (0, n.Z)(this, "progress", void 0), (0, n.Z)(this, "minPosition", void 0), (0, n.Z)(this, "maxPosition", void 0), (0, n.Z)(this, "onChange", void 0), this.track = t, this.background = e, this.foreground = i, this.progress = new ai, this.progress.mask = this.progress.addChild(new hi(0, 15, this.background.width, this.background.height - 25)), this.minPosition = new $.Point(0, this.track.padding), this.maxPosition = new $.Point(0, this.background.height - this.track.padding), this.onChange = new(E()), this.progress.addChild(this.background), this.progress.addChild(this.foreground), this.addChild(this.progress), this.addChild(this.track), this.track.x = this.progress.width / 2, this.handleProgress(), this.handleTrack()
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
                class di extends(Xt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "slider", void 0), (0, n.Z)(this, "onChangeVolume", void 0), this.background = st.j.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAD9CAMAAAAlKrH0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////1/RXMoAAAAddFJOUwCP794Q3zBAIP6/7pCfz75Qr3BvgKCwX2DOrn+eA25H2wAAAetJREFUeNrt3MdawzAQBGDLsmLJPYUUYN//NXELqW7y5DZz5PB/kjYELjtBMJYo3udbY6RNWCTZPo4Cz8RZIW9SZPFyy/6EMhiT22UHS2Qi2xiINUnmnTBSMjNzrlyFMjvmBDtaFzX6ubFGFsaMXHizWKu9zaAWikfCDVIb8ny195414p3XeUQrtNp7/rwoWRX1qJ1lZSrUw/XjuL/ul6zO3XWtAHL7AkwQXPL/dSmCPN4WwyXAl2tiUWPtcmg5g+JC4CCuw8hwXFZzBY4r6m8mASZCPl3zeDskt0NOov43A/Prf80ROdj6b0YQYjmBhhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSM3wRmkFmK5ArXH3CXBbR43ydAbquD9WfB2L3LjtcBvRoP3tnEbtKZdUj+guPwTG/mo2R4/02aAOV4ZQMsWLKyS4zbWvjAkXavphxKSai13+mQDSRDpVVd96dOxGvVwfbeM9zjS9101KVLz9dLhnh+P99ObkU4jjZjCfeOSW4I5NdXUdV5wwLSaUcqVO9TRerCcAbpyQTnXt8Nh3ZX1oOjSg/VoSVMX557M+gelin1716J4r8pL6tpo/f071eH2B6lgKFKZ54AhAAAAAElFTkSuQmCC"), this.background.alpha = .2;
                        var t = new ni(m.xE.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAMAAABgOjJdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFQUExURUdwTAAAAP39/QAAAPj4+AAAAAAAAAAAAAAAAAAAAH9/f9jY2AAAAAAAAAAAAAAAABUVFQAAAFVVVQ8PDwAAAOLi4vz8/DMzM+Tk5AAAAAAAACoqKn19fYGBgXZ2dvz8/AsLC+np6f///wcHBxISEgAAAPv7+9zc3Pb29unp6ePj48fHx/n5+fj4+PX19c7OzvPz8+Xl5fn5+bu7u/Pz8+np6V5eXpeXl4ODg/z8/AAAABMTE+bm5vr6+qqqqgAAAMPDwwAAAO7u7gAAAFhYWN/f3+7u7lFRUePj4/X19V5eXgAAAAwMDAAAAAAAAFZWVuHh4ff39wAAAN/f3/r6+pGRkUxMTBwcHOnp6fn5+dTU1Pf3987Ozu/v7/j4+AgICPv7+/f39w4ODsPDwwAAAPHx8fb29gAAAPz8/PLy8gAAAA8PDwUFBREREQUFBf///7KU/iMAAABvdFJOUwAD4AblEgwBAgUCFAQHCBQMDQMRDyThBaEWGQZBP0exFr8BJA4okiWVJCUpk5SmFUNHw1fIri4bPsEODWqiYCArFcwRLqR4MrO2KxcUIiMyo7UkgHI4OQkj5HNjirrUHeLmEn0eutYQ0dorECwPKxinWNoAAAFMSURBVDjLfdTVlsIwEAbglEoSqKCL2wLr7s66u7u75f3vNoXlUEqS/3a+kzTpTABwBiJJkhCEgBmIfMdZDyHkPXt1LjHqwYFJUs9su9cNfD2kMW2+hr1gp4e444k4CIw0A0JaumB9CxagpL8mcC9hpyNaBaib8DKIKkLu44oh2f4U7zzhZ9xeBM8IxCqm4mxDIA4MCGDgViDutVaAwkSUIgIoJBRvVDwKhRqka1wIwGsIARi+EYiXIj2LdiQQl/QswNwUiBPTvtOFES4Yjev2r50e5oqJqUq7yvEYB8QSRrU/tGWFCZQx/3/H60tpFlHSql5rw+h2qpkoKcuot7Jhre27wMqeJTvHIamWM+uO+uLcjppsHCldSxxmnvIftPqQvz7d3fJj9+AiOZC7K5R+vz9LhedcALNmG2FTC6vq14/fxF4AeC9EsOn5+ANrFSqZBMENigAAAABJRU5ErkJggg=="), 14);
                        t.width = 33, t.height = 33;
                        var e = new ri(m.xE.from(oi), 0);
                        e.width = 12, e.height = 151;
                        var i = new ri(m.xE.from(oi), 4914792);
                        i.width = 12, i.height = 151, this.onChangeVolume = new(E()), this.slider = new li(t, e, i), this.slider.position.set(33, 30), this.slider.onChange.add((t => this.onChangeVolume.dispatch(this.convertToVolume(t)))), this.interactive = !0, this.hitArea = new $.Rectangle(0, 0, 78, 200), this.game.interaction.up(this, (() => {
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
                class ci extends ie {
                    constructor() {
                        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        super(), (0, n.Z)(this, "name", "ButtonSound"), (0, n.Z)(this, "textureOn", void 0), (0, n.Z)(this, "textureOff", void 0), (0, n.Z)(this, "controls", void 0), (0, n.Z)(this, "volumeControl", void 0), (0, n.Z)(this, "onChangeVolume", void 0), this.textureOn = m.xE.from(si), this.textureOff = m.xE.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTP////////////////////////////////////////////////////////////////////////////////////VtkI8AAAAVdFJOUwC/zzAQf4DfIO+fX0BwoGCvUJCwj2iqfUcAAAGeSURBVFjD7dfbkoMgDAZg1Higntvl/V91CysQRDsG6cxe5L9yOs6nEwOkQnA4HA6Hw+FwvpBukbL+jtyqd/osVq0W2MvqlYV+Q6WzK2lkVUS3rSudnpBt5Zj+UeqRZrcdLscBrX9cs9gRXeh7gG4/IzuiK/1rk/ApG29DefwZ9eOlyGA7ui62Fgf9xIFAQt0f2pYevVfQ2h1at/BCu8Cd+Xc50CpSo0WN7cXSAyqDJFXEfDI1RraYcdNtz1n8rdcWuU7tbVmFd5jXBlf3B5X+ZLeuDKuvO4H+YE+uDJ0uGJ229hzZugxPR6sEOrDxPjT7CqfS2MaHTA76xG7uF8Tb5jxwtu/mKvEzntq++YbDHfEibYtqbNSP4K6u70/tJfuVstAbdWKbw8bafcr2BO0VW7h1Tjlmuqnc29vgENmTSpoXgtoc2x31ALtuT6SuJtny1pA5OhsPJX4dJb+03T7wpGps1+u3JuN5P05iG8StRENwVyb33InttyHIZ0d/OIy9QBZ7UjIYScMhMG9goRwv1AFcjoLD4XA4HA7n/+UXAfY3Afulub0AAAAASUVORK5CYII="), this.volumeControl = new di, this.volumeControl.pivot.set(40, 214), this.volumeControl.show(!1), this.onChangeVolume = this.volumeControl.onChangeVolume, this.controls = new se(si), this.controls.onClick.add((() => this.onClick.dispatch())), t && (this.addChild(this.volumeControl), this.game.interaction.hover(this, (() => this.volumeControl.show(this.game.device.desktop))), this.game.interaction.out(this, (() => this.volumeControl.show(!1)))), this.addChild(this.controls), this.show(this.game.device.desktop)
                    }
                    toggle(t, e) {
                        this.controls.changeIcon(t ? this.textureOn : this.textureOff), this.volumeControl.setVolume(e)
                    }
                    resize() {
                        this.controls.showBackground(!this.game.device.desktop), this.scale.set(this.game.device.desktop ? 1 : 1.6)
                    }
                }
                var ui = ["pointerover", "pointerenter", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerout", "pointerleave", "gotpointercapture", "lostpointercapture", "mouseover", "mouseenter", "mousedown", "mousemove", "mouseup", "mousecancel", "mouseout", "mouseleave", "touchover", "touchenter", "touchdown", "touchmove", "touchup", "touchcancel", "touchout", "touchleave"],
                    pi = "bbcode",
                    gi = {
                        bbcode: ["[", "]"],
                        xml: ["<", ">"]
                    };
                class Ai extends C.xv {
                    constructor(t, e) {
                        super(t), (0, n.Z)(this, "textStyles", void 0), (0, n.Z)(this, "hitboxes", void 0), this.styles = e, ui.forEach((t => {
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
                        for (var e in this.textStyles = {}, this.textStyles.default = this.assign({}, Ai.DEFAULT_TAG_STYLE), t) "default" === e ? this.assign(this.textStyles.default, t[e]) : this.textStyles[e] = this.assign({}, t[e]);
                        this.textStyles.default.tagStyle === pi && (this.textStyles.b = this.assign({}, {
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
                        })), this.withPrivateMembers()._style = new C.pn(this.textStyles.default), this.withPrivateMembers().dirty = !0
                    }
                    setTagStyle(t, e) {
                        t in this.textStyles ? this.assign(this.textStyles[t], e) : this.textStyles[t] = this.assign({}, e), this.withPrivateMembers()._style = new C.pn(this.textStyles.default), this.withPrivateMembers().dirty = !0
                    }
                    deleteTagStyle(t) {
                        "default" === t ? this.textStyles.default = this.assign({}, Ai.DEFAULT_TAG_STYLE) : delete this.textStyles[t], this.withPrivateMembers()._style = new C.pn(this.textStyles.default), this.withPrivateMembers().dirty = !0
                    }
                    getTagRegex(t, e) {
                        var i = Object.keys(this.textStyles).map((t => [t, t.toUpperCase()].join("|"))).join("|"),
                            {
                                tagStyle: s
                            } = this.textStyles.default;
                        i = t ? "(".concat(i, ")") : "(?:".concat(i, ")");
                        var o = s === pi ? "\\".concat(gi.bbcode[0]).concat(i, "(?:\\=(?:[A-Za-z0-9_\\-\\#]+|'(?:[^']+|\\\\')*'))*\\s*\\").concat(gi.bbcode[1], "|\\").concat(gi.bbcode[0], "\\/").concat(i, "\\s*\\").concat(gi.bbcode[1]) : "\\".concat(gi.xml[0]).concat(i, "(?:\\s+[A-Za-z0-9_\\-]+=(?:\"(?:[^\"]+|\\\\\")*\"|'(?:[^']+|\\\\')*'))*\\s*\\").concat(gi.xml[1], "|\\").concat(gi.xml[0], "\\/").concat(i, "\\s*\\").concat(gi.xml[1]);
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
                                            tagStyle: A
                                        } = this.textStyles.default;
                                        if (A === pi && h[c][0].includes("=") && this.textStyles[h[c][1]]) ! function() {
                                            var t = e.getBBcodePropertyRegex().exec(h[c][0]),
                                                i = {};
                                            Object.entries(e.textStyles[h[c][1]]).forEach((e => {
                                                i[e[0]] = "string" != typeof e[1] ? e[1] : t[1] + e[1]
                                            })), o.push(e.assign({}, o[o.length - 1], i))
                                        }();
                                        else {
                                            var m = h[c][1];
                                            o.push(this.assign({}, o[o.length - 1], this.textStyles[m], this.textStyles[m.toLowerCase()]))
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
                            tagStyle: f
                        } = this.textStyles.default;
                        return i[i.length - 1].map((t => {
                            t.text.includes(gi[f][0]) && (t.text = t.text.match(f === pi ? /^(.*)\[/ : /^(.*)\</)[1])
                        })), i
                    }
                    getFontString(t) {
                        return new C.pn(t).toFontString()
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
                            for (var i = e.split(/(?:\r\n|\r|\n)/), s = this._getTextDataPerLine(i), o = [], n = [], a = [], r = 0, h = 0; h < i.length; h++) {
                                for (var l = 0, d = 0, c = 0, u = 0; u < s[h].length; u++) {
                                    var p = s[h][u].style;
                                    this.context.font = this.getFontString(p), s[h][u].width = this.context.measureText(s[h][u].text).width, 0 !== s[h][u].text.length && (s[h][u].width += (s[h][u].text.length - 1) * p.letterSpacing, u > 0 && (l += p.letterSpacing / 2), u < s[h].length - 1 && (l += p.letterSpacing / 2)), l += s[h][u].width, s[h][u].fontProperties = C._A.measureFont(this.context.font), s[h][u].height = s[h][u].fontProperties.fontSize, "number" == typeof p.valign ? (d = Math.min(d, p.valign - s[h][u].fontProperties.descent), c = Math.max(c, p.valign + s[h][u].fontProperties.ascent)) : (d = Math.min(d, -s[h][u].fontProperties.descent), c = Math.max(c, s[h][u].fontProperties.ascent))
                                }
                                o[h] = l, n[h] = d, a[h] = c, r = Math.max(r, l)
                            }
                            var g = Object.keys(t).map((e => t[e])).reduce(((t, e) => Math.max(t, e.strokeThickness || 0)), 0),
                                A = this.getDropShadowPadding(),
                                m = r + 2 * g + 2 * A,
                                v = a.reduce(((t, e) => t + e), 0) - n.reduce(((t, e) => t + e), 0) + 2 * g + 2 * A;
                            this.canvas.width = m * this.resolution, this.canvas.height = v * this.resolution, this.context.scale(this.resolution, this.resolution), this.context.textBaseline = "alphabetic", this.context.lineJoin = "round";
                            for (var f = A + g, w = [], b = 0; b < s.length; b++) {
                                var y = s[b],
                                    B = void 0;
                                switch (this.withPrivateMembers()._style.align) {
                                    case "left":
                                        B = A + g;
                                        break;
                                    case "center":
                                        B = A + g + (r - o[b]) / 2;
                                        break;
                                    case "right":
                                        B = A + g + r - o[b]
                                }
                                for (var x = 0; x < y.length; x++) {
                                    var {
                                        style: S,
                                        text: k,
                                        fontProperties: P,
                                        width: E,
                                        height: T,
                                        tag: F
                                    } = y[x], I = f + P.ascent;
                                    switch (S.valign) {
                                        case "top":
                                            break;
                                        case "baseline":
                                            I += a[b] - P.ascent;
                                            break;
                                        case "middle":
                                            I += (a[b] - n[b] - P.ascent - P.descent) / 2;
                                            break;
                                        case "bottom":
                                            I += a[b] - n[b] - P.ascent - P.descent;
                                            break;
                                        default:
                                            I += a[b] - P.ascent - S.valign
                                    }
                                    if (0 === S.letterSpacing) w.push({
                                        text: k,
                                        style: S,
                                        x: B,
                                        y: I,
                                        width: E,
                                        ascent: P.ascent,
                                        descent: P.descent,
                                        tag: F
                                    }), B += y[x].width;
                                    else {
                                        this.context.font = this.getFontString(y[x].style);
                                        for (var M = 0; M < k.length; M++) {
                                            (M > 0 || x > 0) && (B += S.letterSpacing / 2);
                                            var O = this.context.measureText(k.charAt(M)).width;
                                            w.push({
                                                text: k.charAt(M),
                                                style: S,
                                                x: B,
                                                y: I,
                                                width: O,
                                                ascent: P.ascent,
                                                descent: P.descent,
                                                tag: F
                                            }), B += O, (M < k.length - 1 || x < y.length - 1) && (B += S.letterSpacing / 2)
                                        }
                                    }
                                }
                                f += a[b] - n[b]
                            }
                            this.context.save(), w.forEach((t => {
                                var {
                                    style: e,
                                    text: i,
                                    x: s,
                                    y: o
                                } = t;
                                if (e.dropShadow) {
                                    this.context.font = this.getFontString(e);
                                    var n = e.dropShadowColor;
                                    "number" == typeof n && (n = rt.hex2string(n)), this.context.shadowColor = n, this.context.shadowBlur = e.dropShadowBlur, this.context.shadowOffsetX = Math.cos(e.dropShadowAngle) * e.dropShadowDistance * this.resolution, this.context.shadowOffsetY = Math.sin(e.dropShadowAngle) * e.dropShadowDistance * this.resolution, this.context.fillText(i, s, o)
                                }
                            })), this.context.restore(), w.forEach((t => {
                                var {
                                    style: e,
                                    text: i,
                                    x: s,
                                    y: o,
                                    width: n,
                                    ascent: a,
                                    descent: r,
                                    tag: h
                                } = t;
                                if (void 0 !== e.stroke && e.strokeThickness) {
                                    this.context.font = this.getFontString(e);
                                    var l = e.stroke;
                                    "number" == typeof l && (l = rt.hex2string(l)), this.context.strokeStyle = l, this.context.lineWidth = e.strokeThickness, this.context.strokeText(i, s, o)
                                }
                            })), w.forEach((t => {
                                var {
                                    style: e,
                                    text: i,
                                    x: s,
                                    y: o,
                                    width: n,
                                    ascent: a,
                                    descent: r,
                                    tag: h
                                } = t;
                                if (void 0 !== e.fill) {
                                    this.context.font = this.getFontString(e);
                                    var l = e.fill;
                                    if ("number" == typeof l) l = rt.hex2string(l);
                                    else if (Array.isArray(l))
                                        for (var d = 0; d < l.length; d++) {
                                            var c = l[d];
                                            "number" == typeof c && (l[d] = rt.hex2string(c))
                                        }
                                    var u = new C.pn(e),
                                        p = C._A.measureText(i || " ", u, u.wordWrap, this.canvas);
                                    this.context.fillStyle = this._generateFillStyle(u, [i], p), this.context.fillText(i, s, o)
                                }
                            })), w.forEach((t => {
                                var {
                                    style: e,
                                    text: i,
                                    x: s,
                                    y: o,
                                    width: n,
                                    ascent: a,
                                    descent: r,
                                    tag: h
                                } = t, l = -this.withPrivateMembers()._style.padding - this.getDropShadowPadding();
                                this.hitboxes.push({
                                    tag: h,
                                    hitbox: new $.Rectangle(s + l, o - a + l, n, a + r)
                                }), (void 0 === e.debug ? Ai.debugOptions.spans.enabled : e.debug) && (this.context.lineWidth = 1, Ai.debugOptions.spans.bounding && (this.context.fillStyle = Ai.debugOptions.spans.bounding, this.context.strokeStyle = Ai.debugOptions.spans.bounding, this.context.beginPath(), this.context.rect(s, o - a, n, a + r), this.context.fill(), this.context.stroke(), this.context.stroke()), Ai.debugOptions.spans.baseline && (this.context.strokeStyle = Ai.debugOptions.spans.baseline, this.context.beginPath(), this.context.moveTo(s, o), this.context.lineTo(s + n, o), this.context.closePath(), this.context.stroke()), Ai.debugOptions.spans.top && (this.context.strokeStyle = Ai.debugOptions.spans.top, this.context.beginPath(), this.context.moveTo(s, o - a), this.context.lineTo(s + n, o - a), this.context.closePath(), this.context.stroke()), Ai.debugOptions.spans.bottom && (this.context.strokeStyle = Ai.debugOptions.spans.bottom, this.context.beginPath(), this.context.moveTo(s, o + r), this.context.lineTo(s + n, o + r), this.context.closePath(), this.context.stroke()), Ai.debugOptions.spans.text && (this.context.fillStyle = "#ffffff", this.context.strokeStyle = "#000000", this.context.lineWidth = 2, this.context.font = "8px monospace", this.context.strokeText(h.name, s, o - a + 8), this.context.fillText(h.name, s, o - a + 8), this.context.strokeText("".concat(n.toFixed(2), "x").concat((a + r).toFixed(2)), s, o - a + 16), this.context.fillText("".concat(n.toFixed(2), "x").concat((a + r).toFixed(2)), s, o - a + 16)))
                            })), Ai.debugOptions.objects.enabled && (Ai.debugOptions.objects.bounding && (this.context.fillStyle = Ai.debugOptions.objects.bounding, this.context.beginPath(), this.context.rect(0, 0, m, v), this.context.fill()), Ai.debugOptions.objects.text && (this.context.fillStyle = "#ffffff", this.context.strokeStyle = "#000000", this.context.lineWidth = 2, this.context.font = "8px monospace", this.context.strokeText("".concat(m.toFixed(2), "x").concat(v.toFixed(2)), 0, 8, m), this.context.fillText("".concat(m.toFixed(2), "x").concat(v.toFixed(2)), 0, 8, m))), this.updateTexture()
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
                                            for (var A = u[p].split(""), m = 0; m < A.length; m++) {
                                                var v = this.context.measureText(A[m]).width;
                                                v > r ? (e += "\n".concat(A[m]), r = o - v) : (e += A[m], r -= v)
                                            }
                                            p > 0 && (e += " ", r -= this.context.measureText(" ").width)
                                        } else if (this.withPrivateMembers()._style.breakWords) e += u[p], r -= g, p < u.length - 1 && (e += " ", r -= this.context.measureText(" ").width);
                                        else {
                                            var f = g + (p > 0 ? this.context.measureText(" ").width : 0);
                                            f > r ? (l || (e += "\n"), e += u[p], r = o - g) : (r -= f, p > 0 && (e += " "), e += u[p])
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
                }(0, n.Z)(Ai, "DEFAULT_TAG_STYLE", {
                    align: "left",
                    breakWords: !1,
                    dropShadow: !1,
                    dropShadowAngle: Math.PI / 6,
                    dropShadowBlur: 0,
                    dropShadowColor: "#000000",
                    dropShadowDistance: 5,
                    fill: "black",
                    fillGradientType: C.M_.LINEAR_VERTICAL,
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
                }), (0, n.Z)(Ai, "debugOptions", {
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
                class mi extends(Xt(Ai)) {
                    constructor() {
                        super("", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}), (0, n.Z)(this, "updater", void 0)
                    }
                    setText(t) {
                        for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++) i[s - 1] = arguments[s];
                        "function" == typeof this.updater && this.game.i18n.off("changeLanguage", this.updater), this.updater = () => this.text = this.game.i18n.t(t, ...i), this.game.i18n.on("changeLanguage", this.updater), this.updater()
                    }
                }
                class vi extends mi {
                    constructor() {
                        super({
                            default: {
                                fontFamily: "Avenir-Medium",
                                fill: 16777215,
                                align: "right",
                                fontSize: 22
                            },
                            delimiter: {
                                fontSize: 1
                            },
                            value: {
                                fontFamily: "Avenir-Bold",
                                fontSize: 32
                            }
                        })
                    }
                    setCoins(t) {
                        this.text = this.game.i18n.t("ControlsDesktopBalance", this.game.i18n.currency({
                            withBrace: !0,
                            withSpace: !0
                        }), this.game.helpers.toMoney(t))
                    }
                }
                class fi extends mi {
                    constructor() {
                        super({
                            default: {
                                fontFamily: "Avenir-Medium",
                                fill: 16777215,
                                align: "left",
                                fontSize: 22
                            },
                            delimiter: {
                                fontSize: 1
                            },
                            value: {
                                fontFamily: "Avenir-Bold",
                                fontSize: 32
                            }
                        })
                    }
                    setCoins(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        this.text = this.game.i18n.t("ControlsDesktopWin", this.game.i18n.currency({
                            withBrace: !0
                        }), t > 0 || e ? this.game.helpers.toMoney(t) : "")
                    }
                }
                class wi extends mi {
                    constructor() {
                        super({
                            default: {
                                fontFamily: "Avenir-Bold",
                                fill: 16776960,
                                align: "center",
                                fontSize: 28
                            },
                            delimiter: {
                                fontSize: 1
                            },
                            value: {
                                fontFamily: "Avenir-Bold",
                                fontSize: 36
                            }
                        })
                    }
                    setCount(t) {
                        this.text = this.game.i18n.t("ControlsDesktopFreeSpinsLeft", t)
                    }
                    setActive(t) {
                        this.visible = t
                    }
                }
                class bi extends(Xt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "textBet", void 0), (0, n.Z)(this, "buttonInc", void 0), (0, n.Z)(this, "buttonDec", void 0), this.textBet = this.addChild(new mi({
                            default: {
                                align: "center",
                                fill: 16777215,
                                fontSize: 22,
                                fontFamily: "Avenir-Medium"
                            },
                            delimiter: {
                                fontSize: 1
                            },
                            value: {
                                fontFamily: "Avenir-Bold",
                                fontSize: 32
                            }
                        })), this.textBet.anchor.set(.5), this.textBet.position.set(50, -10);
                        var t = new C.xv("-", {
                            fill: 16777215,
                            fontSize: 32,
                            fontFamily: "Avenir-Bold"
                        });
                        t.updateText(!1), this.buttonDec = this.addChild(new se), this.buttonDec.setBackgroundSize(42), this.buttonDec.changeIcon(t.texture), this.buttonDec.icon.position.set(0, -2.5), this.buttonDec.position.set(-40, -10);
                        var e = new C.xv("+", {
                            fill: 16777215,
                            fontSize: 32,
                            fontFamily: "Avenir-Bold"
                        });
                        e.updateText(!1), this.buttonInc = this.addChild(new se), this.buttonInc.setBackgroundSize(42), this.buttonInc.position.set(140, -10), this.buttonInc.changeIcon(e.texture)
                    }
                    setBet(t) {
                        this.textBet.setText("ControlsDesktopBet", this.game.i18n.currency({
                            withBrace: !0
                        }), this.game.helpers.toMoney(t))
                    }
                    setActive(t) {
                        this.visible = t
                    }
                }
                class yi extends se {
                    constructor() {
                        super(), (0, n.Z)(this, "_target", void 0), this._target = this.wrapper.addChildAt(new st.j, 1), this._target.anchor.set(.5), this._target.rotation = (0, a.deg2rad)(90), this.setBackgroundSize(80), this.setBackgroundAlpha(.3)
                    }
                    setActive(t) {
                        this.changeIcon(this.game.loader.getAsset("ui", "icon-aim_".concat(t ? "on" : "off")))
                    }
                    setTarget(t) {
                        this._target.texture = t, this._target.scale.set(1);
                        var e = Math.min(100 / this._target.width, 100 / this._target.height);
                        this._target.scale.set(e)
                    }
                }
                class Ci extends se {
                    constructor() {
                        super(), this.setBackgroundSize(80), this.setBackgroundAlpha(.3)
                    }
                    setActive(t) {
                        this.changeIcon(this.game.loader.getAsset("ui", "icon-hit10_".concat(t ? "on" : "off")))
                    }
                }
                class Bi extends se {
                    constructor() {
                        super(), this.setBackgroundSize(80), this.setBackgroundAlpha(.75), this.setBackgroundColor(0)
                    }
                    setActive(t) {
                        this.changeIcon(this.game.loader.getAsset("ui", "icon-price_".concat(t ? "on" : "off")))
                    }
                }
                class xi extends se {
                    constructor() {
                        super(), this.setBackgroundSize(80), this.setBackgroundAlpha(.75), this.setBackgroundColor(0), this.changeIcon(this.game.loader.getAsset("ui", "icon-question"))
                    }
                    setActive(t) {}
                }
                class Si extends(Xt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "bgTop", void 0), (0, n.Z)(this, "bgBottom", void 0), (0, n.Z)(this, "panelBalance", void 0), (0, n.Z)(this, "textBalance", void 0), (0, n.Z)(this, "panelWin", void 0), (0, n.Z)(this, "textWin", void 0), (0, n.Z)(this, "textFreeLeft", void 0), (0, n.Z)(this, "buttonBet", void 0), (0, n.Z)(this, "buttonAim", void 0), (0, n.Z)(this, "buttonHit10", void 0), (0, n.Z)(this, "buttonPrice", void 0), (0, n.Z)(this, "buttonHelp", void 0), (0, n.Z)(this, "buttonMenu", void 0), (0, n.Z)(this, "buttonSound", void 0), this.bgBottom = new st.j(this.game.loader.getAsset("ui", "panel-bg_bottom")), this.bgBottom.anchor.set(.5, 1), this.bgBottom.position.set(this.game.viewport.width / 2, this.game.viewport.height), this.bgTop = new st.j(this.game.loader.getAsset("ui", "panel-bg_top")), this.bgTop.anchor.set(.5, 1), this.bgTop.position.set(this.game.viewport.width / 2, this.game.viewport.height), this.panelWin = new st.j(this.game.loader.getAsset("ui", "small-panel")), this.panelWin.anchor.set(0, 0), this.panelWin.position.set(1120, 978), this.textWin = new fi, this.textWin.anchor.set(0, 0), this.textWin.position.set(1150, 980), this.panelBalance = this.addChild(new st.j(this.game.loader.getAsset("ui", "small-panel"))), this.panelBalance.anchor.set(1, 0), this.panelBalance.position.set(600, 978), this.panelBalance.scale.x = -1, this.textBalance = this.addChild(new vi), this.textBalance.anchor.set(1, 0), this.textBalance.position.set(770, 980), this.textFreeLeft = this.addChild(new wi), this.textFreeLeft.anchor.set(.5), this.textFreeLeft.position.set(960, 1015), this.setFreeLeftActive(!1), this.buttonAim = this.addChild(new yi), this.buttonAim.position.set(1160, 1012), this.game.interaction.click(this.buttonAim, (() => {
                            this.game.action.emit("controls:clickAim")
                        })), this.buttonHit10 = this.addChild(new Ci), this.buttonHit10.position.set(1260, 1012), this.game.interaction.click(this.buttonHit10, (() => {
                            this.game.action.emit("controls:clickHit10")
                        })), this.buttonPrice = this.addChild(new Bi), this.buttonPrice.position.set(1839, 740), this.game.interaction.click(this.buttonPrice, (() => {
                            this.game.action.emit("controls:clickPrice")
                        })), this.buttonHelp = this.addChild(new xi), this.buttonHelp.position.set(1839, 840), this.game.interaction.click(this.buttonHelp, (() => {
                            this.game.action.emit("controls:clickHelp")
                        })), this.buttonBet = this.addChild(new bi), this.buttonBet.position.set(915, 1025), this.game.interaction.click(this.buttonBet.buttonDec, (() => {
                            this.game.action.emit("controls:clickBetDec")
                        })), this.game.interaction.click(this.buttonBet.buttonInc, (() => {
                            this.game.action.emit("controls:clickBetInc")
                        })), this.buttonMenu = this.addChild(new ii), this.buttonMenu.position.set(77, 1013), this.game.interaction.click(this.buttonMenu, (() => {
                            this.game.action.emit("controls:clickMenu")
                        })), this.buttonSound = this.addChild(new ci(!1)), this.buttonSound.position.set(1840, 1012), this.game.interaction.click(this.buttonSound, (() => {
                            this.game.action.emit("controls:clickSound")
                        })), this.position.set(0, 10)
                    }
                    setBet(t) {
                        this.buttonBet.setBet(t)
                    }
                    setBetActive(t) {
                        this.buttonBet.setActive(t)
                    }
                    setWin(t) {
                        this.textWin.setCoins(t)
                    }
                    setBalance(t) {
                        this.textBalance.setCoins(t)
                    }
                    setFreeLeftCount(t) {
                        this.textFreeLeft.setCount(t)
                    }
                    setFreeLeftActive(t) {
                        this.textFreeLeft.setActive(t)
                    }
                    setAimActive(t) {
                        this.buttonAim.setActive(t)
                    }
                    setAimTarget(t) {
                        this.buttonAim.setTarget(t ? this.game.loader.getAsset("fish-".concat(t)) : m.xE.EMPTY)
                    }
                    setHit10Active(t) {
                        this.buttonHit10.setActive(t)
                    }
                    setHit10Enable(t) {
                        this.buttonHit10.interactive = t, this.buttonHit10.alpha = t ? 1 : .5
                    }
                    setPriceActive(t) {
                        this.buttonPrice.setActive(t)
                    }
                    setSoundActive(t, e) {
                        this.buttonSound.toggle(t, e)
                    }
                    onMenuOpen() {}
                    onMenuClose() {}
                }
                class ki extends(Xt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "icon", void 0), (0, n.Z)(this, "textCounter", void 0), (0, n.Z)(this, "_timeInterval", void 0), this.icon = this.addChild(new st.j(this.game.loader.getAsset("ui", "icon-crab"))), this.icon.anchor.set(0, .5), this.textCounter = this.addChild(new C.xv("", {
                            fill: 16777215,
                            fontSize: 32,
                            fontFamily: "Avenir-Bold"
                        })), this.textCounter.anchor.set(.5), this.textCounter.position.set(43, 55)
                    }
                    setCount(t) {
                        this.textCounter.text = "".concat(t)
                    }
                    resize() {
                        this.position.set(25, 180)
                    }
                }
                var Pi = i(6810),
                    Ei = i.n(Pi);
                class Ti extends(Xt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "gun", void 0), (0, n.Z)(this, "canFire", !1), (0, n.Z)(this, "shotUpdateCounter", 0), (0, n.Z)(this, "prevShotUpdateCounter", -1), (0, n.Z)(this, "fire", Ei()((() => this.fireImmediately()), 200, {
                            trailing: !1
                        })), this.gun = this.addChild(new Ne(this.game.loader.getAsset("anim-gun_bullet"))), this.gun.pivot.set(0, 140), this.setFireType("normal"), this.position.set(this.game.viewport.width / 2, this.game.viewport.height)
                    }
                    setFireType(t) {
                        this.gun.changeSkin("x10" === t ? "gun3State1" : "free" === t ? "gun2" : "gun1")
                    }
                    getBulletPosition() {
                        var t = this.gun.height;
                        return new $.Point(this.x + t * Math.sin(this.gun.rotation), this.y - t * Math.cos(this.gun.rotation))
                    }
                    getBulletRotation() {
                        return this.gun.rotation
                    }
                    get gunPosition() {
                        return this.gun.position
                    }
                    lookup(t) {
                        Math.abs(t) >= Math.PI / 2 || (this.gun.rotation = t)
                    }
                    fireImmediately() {
                        this.game.action.emit("gun:fire"), this.gun.state.setAnimation(0, "shot", !1)
                    }
                }
                class Fi extends(Xt(Y.W2)) {
                    constructor(t) {
                        super(), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "text", void 0), this.text = new C.xv(this.game.i18n.t(t).toUpperCase(), {
                            align: "center",
                            fill: 16777215,
                            fontSize: 22,
                            fontFamily: "Avenir-Bold"
                        }), this.text.anchor.set(.5, 1), this.background = new f.TC, this.background.beginFill(0, .75), this.background.drawRoundedRect(0, 0, this.text.width + 40, this.text.height + 20, 10), this.background.endFill(), this.background.pivot.set(0, this.text.height + 10), this.text.position.set(this.background.width / 2, 0), this.addChild(this.background), this.addChild(this.text)
                    }
                }
                class Ii extends(Xt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "hint1", void 0), (0, n.Z)(this, "hint2", void 0), (0, n.Z)(this, "hint3", void 0), (0, n.Z)(this, "hint4", void 0), (0, n.Z)(this, "hint5", void 0), (0, n.Z)(this, "hint6", void 0), (0, n.Z)(this, "hint7", void 0), (0, n.Z)(this, "hint8", void 0), (0, n.Z)(this, "hint9", void 0), this.visible = !1, this.hint1 = this.addChild(new Fi("HintTimer")), this.hint1.position.set(140, 80), this.hint2 = this.addChild(new Fi("HintMenu")), this.hint2.position.set(130, 1035), this.hint3 = this.addChild(new Fi("HintBalance")), this.hint3.position.set(525, 950), this.hint4 = this.addChild(new Fi("HintBetLevel")), this.hint4.position.set(830, 950), this.hint5 = this.addChild(new Fi("HintX10")), this.hint5.position.set(1330, 1035), this.hint6 = this.addChild(new Fi("HintAim")), this.hint6.position.set(1120, 950), this.hint7 = this.addChild(new Fi("HintSound")), this.hint7.pivot.set(this.hint7.width, 0), this.hint7.position.set(1795, 1035), this.hint8 = this.addChild(new Fi("HintHelp")), this.hint8.pivot.set(this.hint8.width, 0), this.hint8.position.set(1780, 868), this.hint9 = this.addChild(new Fi("HintPrice")), this.hint9.pivot.set(this.hint9.width, 0), this.hint9.position.set(1780, 768)
                    }
                }
                class Mi extends(Xt(Ai)) {
                    constructor(t) {
                        super("", {
                            default: {
                                fontSize: 60,
                                fill: t,
                                fontFamily: "Avenir-Bold",
                                align: "center"
                            }
                        }), this.anchor.set(.5), this.text = this.game.i18n.t("IntroScreenLoaderText")
                    }
                }
                class Oi extends(Xt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "spaceKey", void 0), (0, n.Z)(this, "toggleInterval", void 0), (0, n.Z)(this, "currentViewIndex", void 0), (0, n.Z)(this, "hideTimeoutId", void 0), (0, n.Z)(this, "onEnd", void 0), (0, n.Z)(this, "pagination", void 0), (0, n.Z)(this, "arrows", void 0), (0, n.Z)(this, "slides", void 0), (0, n.Z)(this, "playButton", void 0), (0, n.Z)(this, "hideButton", void 0), (0, n.Z)(this, "loaderText", void 0), (0, n.Z)(this, "loaderAnimation", void 0), this.visible = !0, this.interactive = !0, this.currentViewIndex = 0, this.slides = [], this.hideTimeoutId = null, this.toggleInterval = setInterval((() => {
                            this.currentViewIndex !== this.visibleViewsCount - 1 ? this.toggleScreen(this.currentViewIndex + 1) : clearInterval(this.toggleInterval)
                        }), 4e3), this.game.interaction.click(this, (() => clearTimeout(this.hideTimeoutId)), this), this.onEnd = new(E()), this.spaceKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Space), this.game.interaction.swipeX(this, (t => {
                            clearInterval(this.toggleInterval), clearTimeout(this.hideTimeoutId), this.arrowClick(t)
                        })), this.loaderText = this.createLoadingText(0), this.loaderAnimation = h.to(this.loaderText, .5, {
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
                                clearTimeout(this.hideTimeoutId), clearInterval(this.toggleInterval), this.spaceKey.onPress.detachAll(), t(), h.to(this, .5, {
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
                        var i = new f.TC;
                        return i.beginFill(t, 1), i.drawRect(0, 0, e, 4), i.endFill(), i
                    }
                    createLoadingText(t) {
                        return this.addChild(new Mi(t))
                    }
                }
                class Ri extends(Xt(st.j)) {
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
                class Zi extends(Xt(Y.W2)) {
                    constructor(t) {
                        super(), (0, n.Z)(this, "left", void 0), (0, n.Z)(this, "right", void 0), this.renderable = t > 1, this.left = this.addChild(new Ri("left")), this.left.position.set(0, 0), this.right = this.addChild(new Ri("right")), this.right.position.set(910, 0)
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
                class Di extends(Xt(st.j)) {
                    constructor() {
                        super(), (0, n.Z)(this, "enabled", void 0), this.interactive = !0, this.cursor = "pointer", this.enabled = !1, this.texture = this.game.loader.getAsset("assets/images/introScreen/texture.json", "btnOff")
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
                class Li extends(Xt(Y.W2)) {
                    constructor(t, e) {
                        super(), (0, n.Z)(this, "buttonsContainer", void 0), this.buttonsContainer = this.addChild(new Y.W2);
                        for (var i = 0; i < t; i++) {
                            var s = this.buttonsContainer.addChild(new Di);
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
                class _i extends(Xt(st.j)) {
                    constructor() {
                        super(), this.texture = this.game.loader.getAsset("assets/images/introScreen/texture.json", "btnPlay"), this.interactive = !0, this.buttonMode = !0
                    }
                }
                class Ui extends(Xt(Y.W2)) {
                    constructor(t) {
                        super(), (0, n.Z)(this, "button", void 0), (0, n.Z)(this, "buttonText", void 0), (0, n.Z)(this, "checked", void 0), (0, n.Z)(this, "onClick", void 0), this.interactive = !0, this.cursor = "pointer", this.checked = !1, this.onClick = new(E()), this.button = this.addChild(new Di), this.buttonText = this.addChild(new Ai("", {
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
                class Ni extends Ui {
                    resize() {
                        this.game.device.desktop ? (this.position.set(1250, 875), this.button.scale.set(1), this.buttonText.position.set(50, 23)) : (this.position.set(this.game.device.landscape ? 1180 : 500, this.game.device.landscape ? 875 : 1330), this.button.scale.set(1.6), this.buttonText.setTagStyle("default", {
                            wordWrap: !this.game.device.landscape,
                            wordWrapWidth: 300
                        }), this.buttonText.scale.set(1.5), this.buttonText.position.set(80, 58))
                    }
                }
                class Hi extends(Xt(Y.W2)) {
                    constructor(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        super(), (0, n.Z)(this, "description", void 0), (0, n.Z)(this, "featurePreview", void 0), this.alpha = 0, e && (this.visible = this.game.config.get("rnb", !0)), this.featurePreview = new st.j(this.game.loader.getAsset("assets/images/introScreen/texture.json", "slide".concat(t))), this.featurePreview.anchor.x = .5, this.featurePreview.position.set(0, 0), this.description = new Ai("", {
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
                        h.killTweensOf(this), h.to(this, .3, {
                            pixi: {
                                alpha: 0
                            }
                        })
                    }
                    show() {
                        h.killTweensOf(this), h.to(this, .3, {
                            pixi: {
                                alpha: 1
                            }
                        })
                    }
                }
                class Gi extends Hi {
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
                class zi extends Oi {
                    constructor() {
                        super(), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "logo", void 0), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "playButtonBg", void 0), this.overlay = this.addChildAt(new re(.75), 0), this.content = this.addChild(new Y.W2), this.slides.push(this.content.addChild(new Gi(0))), this.slides.push(this.content.addChild(new Gi(1))), this.slides.push(this.content.addChild(new Gi(2))), this.slides.push(this.content.addChild(new Gi(3))), this.logo = this.content.addChild(new st.j(this.game.loader.getAsset("logo"))), this.logo.anchor.x = .5, this.pagination = this.content.addChild(new Li(this.visibleViewsCount, 40)), this.hideButton = this.content.addChild(new Ni("#29e6df")), this.arrows = this.content.addChild(new Zi(this.visibleViewsCount)), this.arrows.right.position.set(980, 0), this.arrows.position.set(470, 400), this.playButton = this.content.addChild(new _i), this.playButton.visible = !1, this.playButton.anchor.set(.5), this.setupArrows(), this.setupPagination(), this.setupHideButton(), this.setupSlides()
                    }
                    createLoadingText() {
                        return super.createLoadingText(4716276)
                    }
                    resize() {
                        this.logo.position.set(this.game.viewport.width / 2, 0), this.content.scale.set(1), this.content.position.set(0, this.game.device.portrait && !this.game.device.desktop ? 40 : 0), this.game.device.desktop ? (this.pagination.scale.set(1), this.pagination.position.set(500, 876)) : (this.pagination.scale.set(1.6), this.pagination.position.set(this.game.device.landscape ? 500 : 140, this.game.device.landscape ? 876 : 1330)), this.game.device.portrait && !this.game.device.desktop ? (this.logo.scale.set(2), this.playButton.scale.set(1.4), this.playButton.position.set(this.game.viewport.width / 2, 1550), this.loaderText.scale.set(1.4), this.loaderText.position.set(this.game.viewport.width / 2, 1560)) : (this.logo.scale.set(.9), this.playButton.scale.set(1), this.playButton.position.set(this.game.viewport.width / 2, this.game.device.desktop ? 900 : 930), this.loaderText.scale.set(1), this.loaderText.position.set(this.game.viewport.width / 2, this.game.device.desktop ? 910 : 935))
                    }
                }
                class ji extends(Xt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "Paytable"), (0, n.Z)(this, "scrollView", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "content", void 0), this.visible = !1, this.interactive = !0, this.scrollView = this.addChild(new qt), this.scrollView.paddingBottom = 120, this.title = this.scrollView.addChild(new te(this.game.i18n.t("MenuPaytable"))), this.title.withGameName(), this.title.anchor.set(.5, 0), this.content = this.scrollView.addChild(new Y.W2)
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
                class Wi extends(Xt(st.j)) {
                    constructor() {
                        super(m.xE.WHITE), this.tint = 2763563
                    }
                    resize() {
                        this.game.device.desktop ? (this.height = 4, this.width = 1120) : this.game.device.landscape ? (this.height = 6, this.width = 1580) : (this.height = 6, this.width = 950)
                    }
                }

                function Vi(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function Qi(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Vi(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Vi(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class Yi extends(Xt(C.xv)) {
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
                        this.style = Qi(Qi({}, this.style), e)
                    }
                    resize() {
                        this.game.device.desktop ? this.scale.set(1.2) : this.game.device.landscape ? (this.scale.set(2.2), this.setTagStyle("default", {
                            wordWrapWidth: 670
                        })) : (this.scale.set(2.2), this.setTagStyle("default", {
                            wordWrapWidth: 400
                        }))
                    }
                }
                class Xi extends(Xt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "_sectionContent", void 0), this._sectionContent = new Yi(this.game.i18n.t("PaytableSectionBetLinesContent")), this._sectionContent.position.set(0, 0), this.addChild(this._sectionContent)
                    }
                    resize() {
                        this.game.device.desktop || this._sectionContent.position.set(0, 0)
                    }
                }
                class Ki extends(Xt(C.xv)) {
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
                class Ji extends(Xt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "_sectionTitle", void 0), (0, n.Z)(this, "_sectionContent", void 0), this._sectionTitle = new Ki(this.game.i18n.t("PaytableSectionBonusTitle")), this._sectionTitle.position.set(0, 0), this._sectionContent = new Yi(this.game.i18n.t("PaytableSectionBonusContent")), this._sectionContent.position.set(0, this._sectionTitle.y + this._sectionTitle.height + 30), this.addChild(this._sectionTitle), this.addChild(this._sectionContent)
                    }
                    resize() {
                        this.game.device.desktop || this._sectionContent.position.set(0, this._sectionTitle.y + this._sectionTitle.height + 30)
                    }
                }
                class qi extends(Xt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "_sectionContent", void 0), this._sectionContent = new Yi(this.game.i18n.t("PaytableSectionMainContent")), this._sectionContent.position.set(0, 0), this.addChild(this._sectionContent)
                    }
                    resize() {}
                }
                class $i extends(Xt(Y.W2)) {
                    constructor(t) {
                        super(), (0, n.Z)(this, "foreground", void 0), (0, n.Z)(this, "value", void 0), (0, n.Z)(this, "fish", void 0), this.config = t, this.foreground = this.addChild(st.j.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAi8AAAFpCAMAAABj4ziaAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUdwTBcXFxUVFRUVFRUVFRUVFQ8PDxYWFg8PDxUVFRYWFhUVFRYWFhQUFBYWFhUVFRUVFRUVFRQUFBQUFBUVFRQUFBYWFhYWFvIqbjAAAAAXdFJOUwAg72De3yD+EI+fMM+f7+6QX6DPzp6gP4hhIQAAAyNJREFUeNrt2VluwkAQRdEyBtxtmylk2P9OAyRCJgQoonyes4Snq3JLjjgr7WqcfcDUbFztSlxbbrXCDavlj1pKNQp31Isbs1xYhLsWkxMzyIWHwQyuC3+4MEUupIL5esN46pJ89J6+RnYg6fhFejEDSdvD68UKZK1LtFYgrfU54gl97I1A2hj+MvLEAyZswBP0gl7QC3pBL+gF9IJe0At6QS/oBfSCXtALekEv6AX0gl7QC3pBL+gF9IJe0At6QS/oBfSCXtALekEv6AX0gl7QC3pBL+gF9IJe0At6QS+gF/SCXtALekEvoBf0gl7QC3pBL6AX9IJe0At6QS+gF/SCXtALekEvoBf0gl7QC3pBL6AX9IJe0At6QS+gF/SCXtALegG9oBf0gl7QC3oBvaAX9IJe0At6Ab2gF/SCXtALegG9oBf0gl7QC3oBvaAX9IJe0At6Ab2gF/SCXtALegG9oBf0gl7QC+gFvaAX9IJe0AvoBb2gF/SCXtAL6AW9oBf0gl7QC+gFvaAX9IJe0AvoBb2gF/SCXtAL6AW9oBf0gl7QC+gFvaAX9IJe0AvoBb2gF/SCXkAv6AW9oBf0gl5AL+gFvaAX9IJeQC/oBb2gF/SCXkAv6AW9oBf0gl5AL+gFvaAX9IJeQC/oBb2gF/SCXkAv6AW9oBf0AnpBL+gFvaAX9AJ6QS/oBb2gF/QCekEv6AW9oBf0AnpBL+gFvaAX9AJ6QS/oBb2gF/QCekEv6AW9oBf0AnpBL+gFvaAX0At6QS/oBb2gF9ALekEv6AW9oBfQC3pBL+gFvaAX0At6QS/oBb2gF9ALekEv6AW9oBfQC3pBL+gFvaAX0At6QS/oBb2gF9ALekEv6AW9gF7QC3pBL+gFvYBe0At6QS/oBb2AXtALekEv6AW9gF7QC3pBL+gFvYBe+LdeZjYgbR17I5A2xrsRSOujNQJpuygeMKSViK0VSH+OIhozkNQceolqB1LqMZcoc0uQMC+nXqIRDIlcmvg2CIaHuQxx5sKQvi6nN0ztTMJNXS1xqek7yfBrLJvaxLXS9q+bDqY2r2/t5LZ8Ag1+oBbvnKajAAAAAElFTkSuQmCC")), this.foreground.width = 350, this.foreground.height = 200, this.value = this.addChild(new Yi("".concat(Array.isArray(t.multiple) ? t.multiple.join(" - ") : t.multiple))), this.value.anchor.set(0, .5), this.value.setTagStyle("default", {
                            align: "left",
                            wordWrap: !0,
                            wordWrapWidth: 100
                        }), this.fish = this.addChild(new st.j(this.game.loader.getAsset("fish-".concat(t.type)))), this.fish.scale.set(180 / this.fish.width), this.fish.anchor.set(0, .5), this.fish.position.set(0, this.foreground.height / 2), this.value.position.set(this.fish.width + 30, this.foreground.height / 2)
                    }
                    updateBetLevel(t) {
                        this.value.text = "".concat(Array.isArray(this.config.multiple) ? this.config.multiple.map((e => this.game.helpers.toMoney(e * t))).join(" - ") : this.game.helpers.toMoney(this.config.multiple * t))
                    }
                }
                class ts extends(Xt(Y.W2)) {
                    constructor(t) {
                        super(), (0, n.Z)(this, "_sectionTitle", void 0), (0, n.Z)(this, "_fishes", []), this._sectionTitle = new Ki(this.game.i18n.t("PaytableSectionPayoutTitle")), this._sectionTitle.position.set(0, 0), this.addChild(this._sectionTitle), t.forEach(((t, e) => {
                            if (!(t.type >= 100)) {
                                var i = this.addChild(new $i(t));
                                i.position.set(e % 3 * 380, 60 + 240 * Math.floor(e / 3)), this._fishes.push(i)
                            }
                        }))
                    }
                    updateBetLevel(t) {
                        this._fishes.forEach((e => e.updateBetLevel(t)))
                    }
                    resize() {
                        this.game.device.desktop
                    }
                }
                class es extends(Xt(Y.W2)) {
                    constructor(t, e) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        super(), (0, n.Z)(this, "icon", void 0), (0, n.Z)(this, "content", void 0), this.isBoss = i, this.icon = this.addChild(new st.j(this.game.loader.getAsset(t))), this.icon.scale.set((i ? 1e3 : 180) / this.width), this.content = this.addChild(new Yi(this.game.i18n.t(e))), i ? (this.content.anchor.set(0, .5), this.content.position.set(0, this.icon.height + 30), this.content.setTagStyle("default", {
                            wordWrap: !0,
                            wordWrapWidth: 960
                        })) : (this.content.anchor.set(0, .5), this.content.position.set(this.icon.width + 30, this.icon.height / 2), this.content.setTagStyle("default", {
                            wordWrap: !0,
                            wordWrapWidth: 740
                        }))
                    }
                }
                class is extends(Xt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "_sectionTitle", void 0), (0, n.Z)(this, "_items", []), this._sectionTitle = new Ki(this.game.i18n.t("PaytableSectionSpecialTitle")), this.addChild(this._sectionTitle), this._items.push(this.addChild(new es("fish-100", "PaytableSectionSpecialSmallTurtle"))), this._items.push(this.addChild(new es("fish-101", "PaytableSectionSpecialSmallCrab"))), this._items.push(this.addChild(new es("fish-102", "PaytableSectionSpecialBigTurtle"))), this._items.push(this.addChild(new es("fish-103", "PaytableSectionSpecialJellyfish"))), this._items.push(this.addChild(new es("fish-105", "PaytableSectionSpecialBlueChest"))), this._items.push(this.addChild(new es("fish-106", "PaytableSectionSpecialRedChest"))), this._items.push(this.addChild(new es("fish-107", "PaytableSectionSpecialTurtle"))), this._items.push(this.addChild(new es("fish-104", "PaytableSectionSpecialBag"))), this._items.push(this.addChild(new es("fish-108", "PaytableSectionGun"))), this._items.push(this.addChild(new es("fish-200", "PaytableSectionSpecialGreenBoss", !0))), this._items.push(this.addChild(new es("fish-201", "PaytableSectionSpecialBlueBoss", !0)))
                    }
                    resize() {
                        this._sectionTitle.position.set(0, 0);
                        for (var t = 0, e = 0; e < this._items.length; e++) {
                            var i = this._items[e];
                            i.position.set(0, t + 60), t += i.height
                        }
                    }
                }
                class ss extends ji {
                    constructor(t) {
                        super(), (0, n.Z)(this, "_sectionMain", void 0), (0, n.Z)(this, "_sectionPayout", void 0), (0, n.Z)(this, "_sectionSpecial", void 0), (0, n.Z)(this, "_sectionBonus", void 0), (0, n.Z)(this, "_delimiter", void 0), (0, n.Z)(this, "_sectionBetLines", void 0), this._sectionMain = this.content.addChild(new qi), this._sectionPayout = this.content.addChild(new ts(t)), this._sectionSpecial = this.content.addChild(new is), this._sectionBonus = this.content.addChild(new Ji), this._delimiter = this.content.addChild(new Wi), this._sectionBetLines = this.content.addChild(new Xi)
                    }
                    updateBetLevel(t) {
                        this._sectionPayout.updateBetLevel(t)
                    }
                }
                class os extends(Xt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "icon", void 0), (0, n.Z)(this, "textTimeLeft", void 0), (0, n.Z)(this, "_timeInterval", void 0), this.icon = this.addChild(new st.j(this.game.loader.getAsset("ui", "icon-time"))), this.icon.anchor.set(0, .5), this.textTimeLeft = this.addChild(new C.xv("", {
                            fill: 16777215,
                            fontSize: 32,
                            fontFamily: "Avenir-Bold"
                        })), this.textTimeLeft.anchor.set(.5), this.textTimeLeft.position.set(20, 40)
                    }
                    start(t) {
                        clearInterval(this._timeInterval), this._timeInterval = setInterval((() => this.updateTime(t - this.game.nowTime())), 1e3), this.updateTime(t - this.game.nowTime())
                    }
                    end(t) {
                        clearInterval(this._timeInterval), this.updateTime(t)
                    }
                    updateTime(t) {
                        var {
                            m: e,
                            s: i
                        } = function(t) {
                            if (0 === t || t < 0) return {
                                ms: "00",
                                s: "00",
                                m: "00",
                                h: "00"
                            };
                            var e = Math.floor(t % 1e3 / 100),
                                i = Math.floor(t / 1e3 % 60),
                                s = Math.floor(t / 6e4 % 60),
                                o = Math.floor(t / 36e5 % 24);
                            return {
                                ms: e,
                                s: i = i < 10 ? "0" + i : i,
                                m: s = s < 10 ? "0" + s : s,
                                h: o = o < 10 ? "0" + o : o
                            }
                        }(t);
                        this.textTimeLeft.text = "".concat(e, ":").concat(i)
                    }
                    resize() {
                        this.position.set(50)
                    }
                }
                var ns = new a.System,
                    as = new Y.W2,
                    rs = new Y.W2;
                new class extends class extends class {
                    constructor(t) {
                        var {
                            forceLandscape: e,
                            availableLanguages: i
                        } = t;
                        (0, n.Z)(this, "rootNode", void 0), (0, n.Z)(this, "renderer", void 0), (0, n.Z)(this, "logger", void 0), (0, n.Z)(this, "ticker", void 0), (0, n.Z)(this, "i18n", void 0), (0, n.Z)(this, "helpers", void 0), (0, n.Z)(this, "keyboard", void 0), (0, n.Z)(this, "device", void 0), (0, n.Z)(this, "viewport", void 0), (0, n.Z)(this, "leftHand", void 0), (0, n.Z)(this, "fullscreen", void 0), (0, n.Z)(this, "visibility", void 0), (0, n.Z)(this, "preferences", void 0), (0, n.Z)(this, "sound", void 0), (0, n.Z)(this, "state", void 0), (0, n.Z)(this, "store", void 0), (0, n.Z)(this, "action", void 0), (0, n.Z)(this, "config", void 0), (0, n.Z)(this, "loader", void 0), (0, n.Z)(this, "error", void 0), (0, n.Z)(this, "interaction", void 0), (0, n.Z)(this, "popupManager", void 0), (0, n.Z)(this, "externalApi", void 0), (0, n.Z)(this, "_globals", new Map), (0, n.Z)(this, "settings", {
                            size: [1920, 1080]
                        }), (0, n.Z)(this, "tick", (() => {
                            at.vB.shared.update(), this.renderer.render(this.rootNode)
                        })), (0, n.Z)(this, "destroy", (() => {
                            d.removeEventListener("tick", this.tick), at.vB.shared.destroy(), rt.destroyTextureCache(), this.renderer.destroy(), this.loader.destroy()
                        })), jt = this, at.vB.shared.autoStart = !1, at.vB.shared.stop(), this.ticker = at.vB.shared, this.config = new ut(Nt), this.logger = new It, this.rootNode = this.createRootNode(), this.renderer = new Mt, this.i18n = new xt(i), this.helpers = new Bt(this.config), this.keyboard = new Pt, this.device = new bt(this.renderer, e), this.viewport = new Lt, this.leftHand = new vt, this.fullscreen = this.device.ios || this.device.iPadPro ? new At : new mt(this.device), this.visibility = new Yt, this.preferences = new Qt, this.sound = new O(this.device, this.visibility, this.preferences), this.state = new Dt, this.store = new ut, this.action = new wt, this.loader = new Ft(this.device), this.error = new yt, this.interaction = new St(this.device), this.externalApi = new Ut(this), this.popupManager = new zt(this.rootNode), this.create(), this.initAnalytics()
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
                        return new _t
                    }
                    create() {
                        var t = this.rootNode.addChild(new f.TC);
                        t.lineStyle(0), t.beginFill(0), t.drawRect(1, 1, this.settings.size[0] - 2, this.settings.size[1] - 2), t.endFill();
                        var e = !1;
                        if (this.device.forceLandscape) {
                            var i = this;
                            this.renderer.interaction.mapPositionToPoint = function(t, s, o) {
                                var n = this.interactionDOMElement.getBoundingClientRect(),
                                    a = 1 / this.resolution;
                                i.device.landscape && !e ? (t.x = (s - n.left) * (this.interactionDOMElement.width / n.width) * a, t.y = (o - n.top) * (this.interactionDOMElement.height / n.height) * a) : (t.x = (o - n.top) * (this.interactionDOMElement.height / n.width) * a, t.y = i.device.width - (s - n.left) * (this.interactionDOMElement.width / n.height) * a)
                            }
                        }
                        var s = () => {
                            if (this.device.ios && !this.device.forceLandscape && this.fullscreen.toggle(), this.device.desktop || this.device.landscape) {
                                e = this.device.height / this.device.width > 1 && !this.device.desktop;
                                var i = this.device.landscape && !e ? this.device.width : this.device.height,
                                    s = this.device.landscape && !e ? this.device.height : this.device.width,
                                    o = this.device.landscape && !e ? "matrix(1, 0, 0, 1, 0, 0)" : "matrix(0, 1, -1, 0, ".concat(this.device.width, ", 0)");
                                this.renderer.resize(i, s), this.renderer.view.style.transform = o, this.renderer.view.style.transformOrigin = "0 0 0", this.viewport.resize(this.settings.size[0], this.settings.size[1], i, s), this.rootNode.scale.set(this.viewport.aspectRatio), this.rootNode.pivot.set(this.viewport.width / 2, this.viewport.height / 2), this.rootNode.position.set(i / 2, s / 2), this.rootNode.mask = t
                            } else this.renderer.resize(this.device.width, this.device.height), this.viewport.resize(this.settings.size[1], this.settings.size[0]), this.rootNode.scale.set(this.viewport.aspectRatio), this.rootNode.pivot.set(this.viewport.width / 2, 0), this.rootNode.position.set(this.device.width / 2, 0), this.rootNode.mask = null;
                            this.viewport.emit("resize"), this.renderer.render(this.rootNode)
                        };
                        d.addEventListener("tick", this.tick), window.addEventListener("unload", this.destroy), window.addEventListener("resize", s), window.addEventListener("load", s), window.addEventListener("orientationchange", (() => setTimeout(s, 350))), document.addEventListener("keydown", (t => {
                            t.ctrlKey && [61, 107, 173, 109, 187, 189].includes(t.which) && t.preventDefault()
                        })), s(), this.device.ios && setTimeout(s, 250);
                        try {
                            window.__PIXI_APP__ = {
                                view: this.renderer.view,
                                renderer: this.renderer.pixiRenderer,
                                stage: this.rootNode
                            }
                        } catch (t) {}
                    }
                    useRaf(t) {
                        d.useRAF(t)
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
                    constructor() {
                        var t;
                        super(...arguments), t = this, (0, n.Z)(this, "server", new de), (0, n.Z)(this, "player", void 0), (0, n.Z)(this, "launcher", void 0), (0, n.Z)(this, "diffServerDeltaTime", 0), (0, n.Z)(this, "checkboxGameSounds", void 0), (0, n.Z)(this, "checkboxBackgroundSounds", void 0), (0, n.Z)(this, "checkboxFullscreen", void 0), (0, n.Z)(this, "checkboxIntroScreen", void 0), (0, n.Z)(this, "catchError", function() {
                            var e = (0, o.Z)((function*(e) {
                                var i, s;
                                if ([Ot.SPENDING_BUDGET_EXCEEDED, Ot.INSUFFICIENT_BALANCE, Ot.MAX_BET_LIMIT_EXCEEDED].includes(null == e ? void 0 : e.message)) {
                                    var o, [n] = yield Promise.all([null === (o = t.popupManager) || void 0 === o ? void 0 : o.show({
                                        [Ot.SPENDING_BUDGET_EXCEEDED]: "PopupSpendingBudget",
                                        [Ot.MAX_BET_LIMIT_EXCEEDED]: "PopupMaxLimit",
                                        [Ot.INSUFFICIENT_BALANCE]: "PopupZeroBalance"
                                    }[null == e ? void 0 : e.message]), t.onProcessError(null == e ? void 0 : e.message)]);
                                    return n
                                }
                                null === (s = t.sound) || void 0 === s || s.mute("all", !0, !1);
                                var [a] = yield Promise.all([null === (i = t.popupManager) || void 0 === i ? void 0 : i.show(window.navigator.onLine && "Network Error" !== (null == e ? void 0 : e.message) ? "PopupUnexpectedError" : "PopupNetworkError"), t.onProcessError(null == e ? void 0 : e.message)]);
                                return a
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }())
                    }
                    init(t, e) {
                        var i = this;
                        return (0, o.Z)((function*() {
                            i.initPopups(), yield i.connect(t), i.initModules(e), yield i.initSound(), yield i.showIntroScreen(), i.initViews(), i.mountViews(), i.initStates(), i.start()
                        }))()
                    }
                    showIntroScreen() {
                        return (0, o.Z)((function*() {}))()
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
                                    e.i18n.setTranslations(Re(Re(Re({}, i), n), o))
                                } catch (t) {
                                    e.i18n.setTranslations(i)
                                }
                            } else e.i18n.setTranslations(i)
                        }))()
                    }
                    connect(t) {
                        var e = this;
                        return (0, o.Z)((function*() {
                            e.launcher = e.rootNode.addChild(new Me), e.server.on("close", e.onServerClose, e), e.server.on("error", e.onServerError, e), e.server.on("player.error", e.onServerError, e), yield e.server.connect(), yield Promise.all([e.createPlayer(), e.loadTranslations(), e.loadAssets(t)]), e.rootNode.removeChild(e.launcher)
                        }))()
                    }
                    createPlayer() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            var e, i = yield t.server.call("player.config");
                            t.player = new Ze(i), t.config.merge({
                                currency: i.currency,
                                coinValue: null !== (e = i.coinValue) && void 0 !== e ? e : 100,
                                enemyConfig: i.enemyConfig
                            })
                        }))()
                    }
                    initPopups() {
                        this.popupManager.add([new Ee, new Ie, new Pe, new Te, new Fe, new Se])
                    }
                    initSound() {
                        return (0, o.Z)((function*() {}))()
                    }
                    initModules(t) {
                        this.config.merge(t)
                    }
                    initViews() {}
                    mountViews() {}
                    initStates() {}
                    start() {}
                    onServerClose() {}
                    onServerError() {}
                    onProcessError(t) {
                        return (0, o.Z)((function*() {}))()
                    }
                    checkBalance(t) {
                        return (0, o.Z)((function*() {
                            return Promise.resolve(!0)
                        }))()
                    }
                    createFullscreenCheckbox() {
                        return this.checkboxFullscreen = new pe, this.checkboxFullscreen.onClick.add((() => {
                            this.fullscreen.toggle()
                        })), this.fullscreen.on("change", (t => {
                            var e;
                            return null === (e = this.checkboxFullscreen) || void 0 === e ? void 0 : e.setChecked(t)
                        })), this.checkboxFullscreen
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
                    createIntroScreenCheckbox() {
                        return this.checkboxIntroScreen = new Ae, this.checkboxIntroScreen.setChecked(this.preferences.get("showIntroScreen", !0)), this.checkboxIntroScreen.onClick.add((t => {
                            this.preferences.set("showIntroScreen", t)
                        })), this.checkboxIntroScreen
                    }
                } {
                    constructor() {
                        super({
                            forceLandscape: !0
                        }), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "clickContainer", void 0), (0, n.Z)(this, "fishPool", void 0), (0, n.Z)(this, "bulletPool", void 0), (0, n.Z)(this, "crosshair", void 0), (0, n.Z)(this, "gun", void 0), (0, n.Z)(this, "controls", void 0), (0, n.Z)(this, "roundTimer", void 0), (0, n.Z)(this, "crabCounter", void 0), (0, n.Z)(this, "help", void 0), (0, n.Z)(this, "textBoss", void 0), (0, n.Z)(this, "textBonus", void 0), (0, n.Z)(this, "_debugGraphics", void 0), (0, n.Z)(this, "menu", void 0), (0, n.Z)(this, "gameSettings", void 0), (0, n.Z)(this, "paytable", void 0), (0, n.Z)(this, "introScreen", void 0), (0, n.Z)(this, "startTime", 0), (0, n.Z)(this, "endTime", 0), (0, n.Z)(this, "canFire", !1), (0, n.Z)(this, "autoFire", !1), (0, n.Z)(this, "fireType", "normal"), (0, n.Z)(this, "targetFish", null), (0, n.Z)(this, "isAim", !1), (0, n.Z)(this, "isHit10", !1), (0, n.Z)(this, "isHelp", !0), (0, n.Z)(this, "isPrice", !1), (0, n.Z)(this, "isFree", !1), (0, n.Z)(this, "freeLeft", 0), (0, n.Z)(this, "isBonus", !1), (0, n.Z)(this, "crabCount", 0), (0, n.Z)(this, "isRunning", !0), (0, n.Z)(this, "freezeEnd", 0), (0, n.Z)(this, "_soundState", !1), this.init(Le, _e)
                    }
                    get canShowIntro() {
                        return this.preferences.get("showIntroScreen", !0)
                    }
                    loadTranslations() {
                        var t = () => super.loadTranslations,
                            e = this;
                        return (0, o.Z)((function*() {
                            return t().call(e, $e)
                        }))()
                    }
                    loadAssets(t) {
                        var e = () => super.loadAssets,
                            i = this;
                        return (0, o.Z)((function*() {
                            return e().call(i, i.canShowIntro ? De : [...De, ...Le])
                        }))()
                    }
                    initSound() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            if (t.device.desktop) t._soundState = !1;
                            else {
                                var e = yield t.popupManager.show("PopupSound");
                                t._soundState = !e
                            }
                        }))()
                    }
                    initModules(t) {
                        super.initModules(t), this.sound = new Ye(this.device, this.visibility, this.preferences)
                    }
                    initViews() {
                        super.initViews(), B.UP.from("FishPrice", {
                            fill: 16777215,
                            fontFamily: "Avenir-Heavy",
                            fontSize: 24,
                            stroke: 16990,
                            strokeThickness: 4
                        }, {
                            chars: [...B.UP.NUMERIC, "."]
                        }), this.clickContainer = new Y.W2, this.fishPool = new Qe, this.bulletPool = new ei, this.crosshair = new st.j(this.loader.getAsset("ui", "icon-crosshair_white")), this.crosshair.scale.set(.45), this.crosshair.anchor.set(.5), this.gun = new Ti, this.controls = new Si, this.roundTimer = new os, this.crabCounter = new ki, this.help = new Ii, this.help.visible = this.isHelp, this.textBoss = new st.j(this.loader.getAsset("ui", "txt-boss")), this.textBoss.anchor.set(.5), this.textBoss.position.set(960, 270), this.textBoss.alpha = 0, this.textBonus = new st.j(this.loader.getAsset("ui", "txt-bonus")), this.textBonus.anchor.set(.5), this.textBonus.position.set(940, 60), this.textBonus.alpha = 0, this._debugGraphics = new f.TC, this.paytable = new ss(this.config.get("enemyConfig")), this.menu = new he, this.gameSettings = new ee, this.gameSettings.addItem(this.createFullscreenCheckbox()), this.gameSettings.addItem(this.createIntroScreenCheckbox())
                    }
                    mountViews() {
                        super.mountViews(), this.rootNode.addChild(this.controls.bgBottom), this.rootNode.addChild(this.clickContainer), this.clickContainer.addChild(new re(0, 16777215)), this.clickContainer.addChild(this.fishPool), this.rootNode.addChild(this.bulletPool), this.rootNode.addChild(as), this.rootNode.addChild(rs), this.rootNode.addChild(this.crosshair), this.rootNode.addChild(this.gun), this.rootNode.addChild(this.controls.bgTop), this.rootNode.addChild(this.roundTimer), this.rootNode.addChild(this.crabCounter), this.menu.addItem(this.loader.getAsset("iconPaytable"), this.paytable), this.menu.addItem(this.loader.getAsset("iconSettings"), this.gameSettings), this.rootNode.addChild(this.help), this.rootNode.addChild(this.textBoss), this.rootNode.addChild(this.textBonus), this.rootNode.addChild(this.menu), this.rootNode.addChild(this.controls), this.rootNode.addChild(this._debugGraphics)
                    }
                    showIntroScreen() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            var e, i;
                            (t.background = t.rootNode.addChild(new He), t.canShowIntro) ? (t.introScreen = t.rootNode.addChild(new zi), t.loader.on("progress", (e => t.introScreen.updateProgress(e))), yield t.loader.load(Le), t.sound.init(t._soundState), null === (e = t.sound.get("backgroundNormal")) || void 0 === e || e.fade(2), yield t.introScreen.play()) : (t.sound.init(t._soundState), null === (i = t.sound.get("backgroundNormal")) || void 0 === i || i.fade(2))
                        }))()
                    }
                    start() {
                        var t = () => super.start,
                            e = this;
                        return (0, o.Z)((function*() {
                            t().call(e), e.ticker.add(e.onUpdate, e), e.server.on("room.generate", e.onRoomGenerate, e), e.server.on("room.leave", e.onRoomLeave, e), e.server.on("room.startRound", e.onRoomRoundStart, e), e.server.on("room.stopRound", e.onRoomRoundStop, e), e.server.on("room.startIntermission", e.onRoomIntermissionStart, e), e.server.on("room.stopIntermission", e.onRoomIntermissionStop, e), e.clickContainer.interactive = !0, e.clickContainer.interactiveChildren = !0, e.interaction.up(e.clickContainer, e.onMouseUp, e), e.interaction.out(e.clickContainer, e.onMouseOut, e), e.interaction.move(e.clickContainer, e.onMouseMove, e), e.interaction.down(e.clickContainer, e.onMouseDown, e), e.action.on("controls:clickAim", e.onClickAim, e), e.action.on("controls:clickHelp", e.onClickHelp, e), e.action.on("controls:clickHit10", e.onClickHit10, e), e.action.on("controls:clickPrice", e.onClickPrice, e), e.action.on("controls:clickBetDec", e.onClickBetDec, e), e.action.on("controls:clickBetInc", e.onClickBetInc, e), e.action.on("controls:clickMenu", e.onClickMenu, e), e.action.on("controls:clickSound", e.onClickSound, e), e.player.betLevel.on("change", e.onBetLevelChange, e), e.visibility.on("show", e.onFocus, e), e.visibility.on("hide", e.onBlur, e), e.action.on("gun:fire", e.onGunFire, e), e.action.on("fish:click", e.onFishClick, e), e.action.on("fish:hover", e.onFishHover, e), e.action.on("fish:out", e.onFishOut, e), e.action.on("fish:dbClick", e.onFishDbClick, e), e.action.on("fish:completeRoute", e.onFishCompleteRoute, e), e.controls.setWin(0), e.controls.setBet(e.player.betLevel.toCoins()), e.controls.setBalance(e.player.balance), e.controls.setAimActive(!1), e.controls.setHit10Active(!1), e.controls.setPriceActive(!1), e.controls.setSoundActive(!e.sound.muted("all"), e.sound.volume), e.paytable.updateBetLevel(e.player.betLevel.toCoins()), e.controls.hide(), e.controls.interactive = !0, e.interaction.hover(e.controls, (() => {
                                h.killTweensOf(e.crosshair), e.crosshair.alpha = 0
                            })), e.interaction.out(e.controls, (() => {
                                h.killTweensOf(e.crosshair), h.to(e.crosshair, .25, {
                                    pixi: {
                                        alpha: 1
                                    }
                                })
                            }));
                            var {
                                time: i,
                                freeData: s
                            } = yield e.server.call("room.join");
                            e.diffServerDeltaTime = Date.now() - i, (null == s ? void 0 : s.freeCount) > 0 && (e.freeLeft = s.freeCount, e.onFreeStart()), e.controls.show()
                        }))()
                    }
                    onUpdate() {
                        if (this.isRunning) {
                            for (var t of (ns.update(), this.targetFish && this.gun.lookup(this.getAngle(this.gun.toLocal(this.targetFish.getGlobalPosition(void 0, !0), void 0, void 0, !0), this.gun.gunPosition)), this.bulletPool.aliveList)) {
                                var e, i, s, o, n;
                                if (null !== (e = this.targetFish) && void 0 !== e && e.is(t.targetFishId)) {
                                    if (t.move(this.targetFish.x, this.targetFish.y), (this.targetFish.x + .5 * (null === (i = this.targetFish) || void 0 === i ? void 0 : i.body.width) < 0 || this.targetFish.x - .5 * (null === (s = this.targetFish) || void 0 === s ? void 0 : s.body.width) > 1920 || this.targetFish.y + .5 * (null === (o = this.targetFish) || void 0 === o ? void 0 : o.body.height) < 0 || this.targetFish.y - .5 * (null === (n = this.targetFish) || void 0 === n ? void 0 : n.body.height) > 1080) && this.resetTargetFire(), this.detectFishHit(this.targetFish, t)) {
                                        this.fishHit(this.targetFish, t);
                                        break
                                    }
                                } else
                                    for (var a of (t.untarget(), t.move(), this.fishPool.aliveList))
                                        if (this.detectFishHit(a, t)) {
                                            this.fishHit(a, t);
                                            break
                                        }
                            }(this.canFire || this.autoFire || this.targetFish) && this.gun.fire()
                        }
                    }
                    onRoomGenerate(t) {
                        var e = this;
                        return (0, o.Z)((function*() {
                            e.isRunning && (e.addFish(t).move(Math.max((e.nowTime() - t.birthTime) / 1e3, 0)), t.type >= 200 && (h.killTweensOf(e.textBoss), h.to(e.textBoss, 1, {
                                pixi: {
                                    scale: 2.5,
                                    alpha: 1
                                },
                                repeat: 1,
                                yoyo: !0,
                                yoyoDelay: .5
                            })))
                        }))()
                    }
                    onRoomLeave() {
                        this.reset()
                    }
                    onRoomRoundStart(t) {
                        this.resetTargetFire(), this.isBonus = t.bonusRound, this.startTime = t.startTime, this.endTime = t.endTime, this.roundTimer.start(this.endTime), this.setCrabCount(0), h.killTweensOf(this.textBonus), this.isBonus ? h.to(this.textBonus, .5, {
                            pixi: {
                                scale: 1.35,
                                alpha: 1
                            }
                        }) : this.textBonus.alpha = 0
                    }
                    onRoomRoundStop(t) {
                        this.isBonus = !1, this.startTime = 0, this.endTime = 0, this.roundTimer.end(0), this.fishPool.killAll()
                    }
                    onRoomIntermissionStart(t) {
                        this.resetTargetFire(), this.startTime = t.startTime, this.endTime = t.endTime, this.roundTimer.start(this.endTime)
                    }
                    onRoomIntermissionStop(t) {
                        this.startTime = 0, this.endTime = 0, this.roundTimer.end(0)
                    }
                    onFreezeStart() {
                        var t;
                        null === (t = this.sound.get("fishFreeze")) || void 0 === t || t.play(), this.fishPool.freeze()
                    }
                    onFreezeStop() {
                        this.freezeEnd = 0, this.fishPool.unfreeze()
                    }
                    onMouseUp() {
                        this.targetFish || (this.canFire = !1)
                    }
                    onMouseDown(t) {
                        this.hideHelp();
                        var {
                            x: e,
                            y: i
                        } = t.data.getLocalPosition(this.gun), s = this.getAngle(new $.Point(e, i), this.gun.gunPosition);
                        this.gun.lookup(s), this.isAim || (this.canFire = !0)
                    }
                    onMouseOut() {
                        this.targetFish || (this.canFire = !1)
                    }
                    onMouseMove(t) {
                        var e = this.rootNode.toLocal(t.data.global);
                        if (this.crosshair.position.set(e.x, e.y), this.canFire && !this.targetFish) {
                            var {
                                x: i,
                                y: s
                            } = t.data.getLocalPosition(this.gun), o = this.getAngle(new $.Point(i, s), this.gun.gunPosition);
                            this.gun.lookup(o)
                        }
                    }
                    onClickBetDec() {
                        this.hideHelp(), this.player.betLevel.decrement(), this.setBetLevel()
                    }
                    onClickBetInc() {
                        this.hideHelp(), this.player.betLevel.increment(), this.setBetLevel()
                    }
                    onClickMenu() {
                        this.hideHelp(), this.menu.opened ? (this.menu.close(), this.controls.onMenuClose()) : (this.menu.open(), this.controls.onMenuOpen())
                    }
                    onClickSound() {
                        this.hideHelp();
                        var t = this.sound.toggle("all");
                        this.controls.setSoundActive(!t, this.sound.volume)
                    }
                    onClickAim() {
                        var t;
                        null === (t = this.sound.get("click")) || void 0 === t || t.play(), this.hideHelp(), this.setAim(!this.isAim), this.autoFire = this.isAim, this.isAim || this.resetTargetFire()
                    }
                    onClickHit10() {
                        var t, e;
                        this.isFree || (null === (t = this.sound.get("click")) || void 0 === t || t.play(), this.hideHelp(), this.setHit10(!this.isHit10), this.fireType = this.isHit10 ? "x10" : "normal", this.gun.setFireType(this.fireType), null === (e = this.sound.get(this.isHit10 ? "upGun" : "degGun")) || void 0 === e || e.play(), this.setBetLevel())
                    }
                    onClickPrice() {
                        var t;
                        null === (t = this.sound.get("click")) || void 0 === t || t.play(), this.hideHelp(), this.isPrice = !this.isPrice, this.controls.setPriceActive(this.isPrice), this.fishPool.showPrice(this.isPrice)
                    }
                    onClickHelp() {
                        var t;
                        null === (t = this.sound.get("click")) || void 0 === t || t.play(), this.isHelp = !this.isHelp, this.help.visible = this.isHelp
                    }
                    onServerClose() {
                        this.reset(), this.popupManager.show("PopupUnexpectedError")
                    }
                    onServerError() {
                        this.reset(), this.popupManager.show("PopupUnexpectedError")
                    }
                    onBetLevelChange() {
                        this.fishPool.setPrice(this.player.betLevel.toCoins()), this.paytable.updateBetLevel(this.player.betLevel.toCoins())
                    }
                    onFocus() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            h.killTweensOf(t.textBoss), t.textBoss.alpha = 0, t.textBoss.scale.set(1), h.killTweensOf(t.textBonus), t.rootNode.visible = !1;
                            var {
                                balance: e,
                                nextStageTime: i,
                                fishes: s
                            } = yield t.server.call("room.refresh");
                            if (t.controls.setBalance(t.player.setBalance(e)), t.roundTimer.start(i), s.length > 0) {
                                var {
                                    lastFrozen: o,
                                    frozenTime: n
                                } = s[0];
                                t.freezeEnd = o + n - t.nowTime();
                                var a = t.freezeEnd > 0,
                                    r = function(e) {
                                        var i = s.find((t => t.fishID === e.fishId));
                                        if (i) {
                                            var o = a ? Math.max((i.lastFrozen - i.birthTime - t.diffServerDeltaTime) / 1e3, 0) : Math.max((t.nowTime() - e.birthTime - i.frozenTime * i.frozenCount) / 1e3, 0);
                                            e.restore(o)
                                        } else t.fishPool.removeFish(e.fishId)
                                    };
                                for (var l of t.fishPool.all) r(l);
                                a && (t.onFreezeStart(), h.delayedCall(t.freezeEnd / 1e3, t.onFreezeStop, [], t))
                            } else t.fishPool.reset();
                            t.isBonus ? (t.textBonus.alpha = 1, t.textBonus.scale.set(1.35)) : t.textBonus.alpha = 0, t.rootNode.visible = !0
                        }))()
                    }
                    onBlur() {
                        this.rootNode.visible = !1
                    }
                    onGunFire() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            var e, i, s = t.player.betLevel.toCoins() * ("x10" === t.fireType ? 10 : 1);
                            if (yield t.checkBalance(s)) {
                                var o = t.bulletPool.newBullet();
                                o.setFireType(t.fireType), t.isFree && t.controls.setFreeLeftCount(t.freeLeft - 1), null === (e = t.sound) || void 0 === e || null === (i = e.get("x10" === t.fireType ? "upShot" : "shot")) || void 0 === i || i.play();
                                var n, a = yield t.server.call("weapon.fire", {
                                    bet: s,
                                    bulletID: o.numId,
                                    type: t.fireType
                                });
                                if ("success" !== a.status) return t.controls.setFreeLeftCount(t.freeLeft + 1), void t.bulletPool.removeBullet(o.numId);
                                if (a.freeLeft >= 0 && (t.freeLeft = a.freeLeft, t.controls.setFreeLeftCount(a.freeLeft)), t.controls.setBalance(t.player.setBalance(a.balance)), a.freeLeft || t.onFreeEnd(), o.reset(t.gun.getBulletPosition(), t.gun.getBulletRotation()), t.targetFish) o.target(null === (n = t.targetFish) || void 0 === n ? void 0 : n.fishId);
                                else o.untarget();
                                o.start()
                            } else t.resetTargetFire()
                        }))()
                    }
                    onFishClick(t) {}
                    onFishHover() {}
                    onFishOut() {}
                    onFishDbClick(t) {
                        this.targetFire(t), this.setAim(!0)
                    }
                    onFishCompleteRoute(t) {
                        var e = this;
                        return (0, o.Z)((function*() {
                            var i;
                            (null === (i = e.targetFish) || void 0 === i ? void 0 : i.fishId) === t && e.resetTargetFire(), e.fishPool.removeFish(t)
                        }))()
                    }
                    onFreeStart() {
                        var t;
                        this.controls.setFreeLeftCount(this.freeLeft), this.controls.setFreeLeftActive(!0), this.isFree || (this.isFree = !0, this.fireType = "free", this.controls.setBetActive(!1), this.controls.setHit10Active(!1), this.controls.setHit10Enable(!1), this.gun.setFireType(this.fireType), null === (t = this.sound.get("upGun")) || void 0 === t || t.play())
                    }
                    onFreeEnd() {
                        var t;
                        this.isFree && (this.isFree = !1, this.fireType = this.isHit10 ? "x10" : "normal", this.controls.setHit10Active(this.isHit10), this.controls.setHit10Enable(!0), this.controls.setBetActive(!0), this.controls.setFreeLeftActive(!1), this.gun.setFireType(this.fireType), null === (t = this.sound.get("upGun")) || void 0 === t || t.play())
                    }
                    setBetLevel() {
                        this.controls.setBet(this.isHit10 ? 10 * this.player.betLevel.toCoins() : this.player.betLevel.toCoins())
                    }
                    setAim(t) {
                        this.isAim = t, this.controls.setAimActive(t)
                    }
                    setHit10(t) {
                        this.isHit10 = t, this.controls.setHit10Active(t)
                    }
                    checkBalance(t) {
                        var e = this;
                        return (0, o.Z)((function*() {
                            return !(e.player.balance - t < 0 && !e.isFree) || (yield e.popupManager.show("PopupZeroBalance"), !1)
                        }))()
                    }
                    addFish(t) {
                        var e, i, [s, o] = [t.route[0], t.route],
                            n = (null == s ? void 0 : s.x) === (null == o || null === (e = o[1]) || void 0 === e ? void 0 : e.x) && (null == s ? void 0 : s.y) === (null == o || null === (i = o[1]) || void 0 === i ? void 0 : i.y),
                            a = this.fishPool.newFish(t.type);
                        return a.setId(t.fishID).setBirthTime(t.birthTime).setRoutes(n ? [] : o).reset(new $.Point(null == s ? void 0 : s.x, null == s ? void 0 : s.y), 0).setPrice(this.player.betLevel.toCoins()).showPrice(this.isPrice), a
                    }
                    setCrabCount(t) {
                        this.crabCount = t, this.crabCounter.setCount(t)
                    }
                    detectFishHit(t, e) {
                        return !!(t && e && ns.checkCollision(t.body, e.body)) && ns.response.bInA
                    }
                    targetFire(t) {
                        this.resetTargetFire(), this.targetFish = t, t.target(), this.controls.setAimTarget(t.type)
                    }
                    resetTargetFire() {
                        var t;
                        this.controls.setAimTarget(null), null === (t = this.targetFish) || void 0 === t || t.untarget(), this.targetFish = null, this.canFire = !1, this.autoFire = !1, this.setAim(!1)
                    }
                    fishHit(t, e) {
                        var i = this;
                        return (0, o.Z)((function*() {
                            var s, o;
                            e.kill(), t.hit();
                            var n = yield i.server.call("enemy.hit", {
                                fishID: t.fishId,
                                bulletID: e.numId
                            });
                            if (n.error) e.alive();
                            else {
                                null === (s = i.sound) || void 0 === s || null === (o = s.get("hit")) || void 0 === o || o.play(), n.bulletID === e.numId && i.bulletPool.hitBullet(n.bulletID);
                                var r = i.freeLeft;
                                for (var l of (n.freeLeft > 0 && (i.freeLeft = n.freeLeft, i.onFreeStart()), n.killedFish)) {
                                    var d, c, u;
                                    if (t.fishId === l)
                                        if (null !== (d = i.targetFish) && void 0 !== d && d.is(t.fishId) && 105 !== t.type && i.resetTargetFire(), null === (c = i.sound) || void 0 === c || null === (u = c.get("kill")) || void 0 === u || u.play(), 108 === t.type) i.fishPool.winFreeLeft(l, n.freeLeft - r);
                                        else if (101 === t.type) i.fishPool.winCrab(l, 1, i.isBonus), i.setCrabCount(n.crabCount), n.endTime && i.roundTimer.start(n.endTime);
                                    else if (105 === t.type) i.fishPool.winBlueBag(l, n.win);
                                    else if (106 === t.type) {
                                        var p;
                                        for (var g of (i.fishPool.kill(l), null === (p = i.sound.get("win")) || void 0 === p || p.play(), n.addFish)) {
                                            i.addFish(g).playIdle()
                                        }
                                    } else if (100 === t.type || 102 === t.type)
                                        for (var A of (i.fishPool.kill(l), n.bulletAdd)) {
                                            var m = i.bulletPool.newBullet(A);
                                            m.setFireType("free"), m.reset(t.position, (0, a.deg2rad)(i.helpers.random(0, 360))), m.start()
                                        } else if (103 === t.type) i.freezeEnd = n.freezeEnd - i.nowTime(), i.freezeEnd > 0 && (i.onFreezeStart(), h.delayedCall(i.freezeEnd / 1e3, i.onFreezeStop, [], i)), i.fishPool.kill(l);
                                        else {
                                            var v;
                                            i.fishPool.winFish(l, n.win), null === (v = i.sound.get("win")) || void 0 === v || v.play()
                                        }
                                    else i.fishPool.killFish(l)
                                }
                                i.controls.setWin(i.player.setWin(n.win)), i.controls.setBalance(i.player.setBalance(n.balance))
                            }
                        }))()
                    }
                    hideHelp() {
                        this.isHelp = !1, this.help.visible = this.isHelp
                    }
                    reset() {
                        var t, e, i, s;
                        this.ticker.remove(this.onUpdate, this), this.server.off("room.generate", this.onRoomGenerate, this), this.server.off("room.startRound", this.onRoomRoundStart, this), this.server.off("room.stopRound", this.onRoomRoundStop, this), this.server.off("room.startIntermission", this.onRoomIntermissionStart, this), this.server.off("room.stopIntermission", this.onRoomIntermissionStop, this), this.canFire = !1, this.autoFire = !1, this.controls && (this.setAim(!1), this.setHit10(!1)), null === (t = this.fishPool) || void 0 === t || t.reset(), null === (e = this.bulletPool) || void 0 === e || e.reset(), null === (i = this.roundTimer) || void 0 === i || i.end(0), null === (s = this._debugGraphics) || void 0 === s || s.clear()
                    }
                    getAngle(t, e) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.PI / 2;
                        return Math.atan2(t.y - e.y, t.x - e.x) + i
                    }
                    _drawPolygon(t, e) {
                        var i = e.calcPoints[e.calcPoints.length - 1],
                            s = e.pos.x + i.x,
                            o = e.pos.y + i.y;
                        t.lineStyle(3, e.color), t.moveTo(s, o);
                        for (var n = 0, a = e.calcPoints.length; n < a; n++) {
                            var r = e.calcPoints[n],
                                h = e.pos.x + r.x,
                                l = e.pos.y + r.y;
                            t.lineTo(h, l)
                        }
                    }
                    nowTime() {
                        return Date.now() - this.diffServerDeltaTime
                    }
                }
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
    }), t), n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), e = {}, i = "hook_up_fishing_wars:", n.l = (t, s, o, a) => {
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
            i = self.webpackChunkhook_up_fishing_wars = self.webpackChunkhook_up_fishing_wars || [];
        i.forEach(e.bind(null, 0)), i.push = e.bind(null, i.push.bind(i))
    })();
    var a = n.O(void 0, [216], (() => n(6055)));
    a = n.O(a)
})();