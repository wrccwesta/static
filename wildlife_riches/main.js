/*! @mascot-banner branch: master - commit: eec7ab288d9808d47857735ff89bf963ec3bdcf9 */
(() => {
    var t, e, i, s = {
            1051: (t, e, i) => {
                "use strict";
                var s = {};
                i.r(s), i.d(s, {
                    ALPHA_MODES: () => Q.ALPHA_MODES,
                    AbstractBatchRenderer: () => c.eo,
                    AbstractMultiResource: () => c.M4,
                    AbstractRenderer: () => c.I8,
                    AppLoaderPlugin: () => y.LP,
                    ArrayResource: () => c.$N,
                    Attribute: () => c.ah,
                    BLEND_MODES: () => Q.BLEND_MODES,
                    BUFFER_BITS: () => Q.BUFFER_BITS,
                    BUFFER_TYPE: () => Q.BUFFER_TYPE,
                    BaseImageResource: () => c.bg,
                    BasePrepare: () => m.Zq,
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
                    Bounds: () => Y.YZ,
                    BrowserAdapter: () => $.ZQ,
                    Buffer: () => c.lW,
                    BufferResource: () => c.qm,
                    CLEAR_MODES: () => Q.CLEAR_MODES,
                    COLOR_MASK_BITS: () => Q.COLOR_MASK_BITS,
                    CanvasResource: () => c.Y8,
                    Circle: () => K.Circle,
                    Container: () => Y.W2,
                    ContextSystem: () => c.lH,
                    CountLimiter: () => m.fh,
                    CubeResource: () => c.TA,
                    DEG_TO_RAD: () => K.DEG_TO_RAD,
                    DRAW_MODES: () => Q.DRAW_MODES,
                    DisplayObject: () => Y.s$,
                    ENV: () => Q.ENV,
                    Ellipse: () => K.Ellipse,
                    ExtensionType: () => c.nw,
                    FORMATS: () => Q.FORMATS,
                    FillStyle: () => p.ft,
                    Filter: () => c.wn,
                    FilterState: () => c.jV,
                    FilterSystem: () => c.kV,
                    Framebuffer: () => c.AI,
                    FramebufferSystem: () => c.WB,
                    GC_MODES: () => Q.GC_MODES,
                    GLFramebuffer: () => c.tT,
                    GLProgram: () => c.Ei,
                    GLTexture: () => c.fy,
                    GRAPHICS_CURVES: () => p.wA,
                    Geometry: () => c.ZX,
                    GeometrySystem: () => c.TO,
                    Graphics: () => p.TC,
                    GraphicsData: () => p.iM,
                    GraphicsGeometry: () => p.RB,
                    IGLUniformData: () => c.W1,
                    INSTALLED: () => c.e_,
                    ImageBitmapResource: () => c._w,
                    ImageResource: () => c.PA,
                    InteractionData: () => g.gU,
                    InteractionEvent: () => g.sm,
                    InteractionManager: () => g.bx,
                    InteractionTrackingData: () => g.s_,
                    LINE_CAP: () => p.$o,
                    LINE_JOIN: () => p.S,
                    LINE_SCALE_MODE: () => X.F4,
                    LineStyle: () => p.TD,
                    Loader: () => y.aN,
                    LoaderResource: () => y.kC,
                    MASK_TYPES: () => Q.MASK_TYPES,
                    MIPMAP_MODES: () => Q.MIPMAP_MODES,
                    MSAA_QUALITY: () => Q.MSAA_QUALITY,
                    MaskData: () => c.HI,
                    MaskSystem: () => c.zj,
                    Matrix: () => K.Matrix,
                    Mesh: () => q.Kj,
                    MeshBatchUvs: () => q.wQ,
                    MeshGeometry: () => q.xc,
                    MeshMaterial: () => q.rY,
                    ObjectRenderer: () => c.bO,
                    ObservablePoint: () => K.ObservablePoint,
                    PI_2: () => K.PI_2,
                    PRECISION: () => Q.PRECISION,
                    Point: () => K.Point,
                    Polygon: () => K.Polygon,
                    Prepare: () => m.B9,
                    Program: () => c.$r,
                    ProjectionSystem: () => c.NW,
                    Quad: () => c.lD,
                    QuadUv: () => c.ud,
                    RAD_TO_DEG: () => K.RAD_TO_DEG,
                    RENDERER_TYPE: () => Q.RENDERER_TYPE,
                    Rectangle: () => K.Rectangle,
                    RenderTexture: () => c.TI,
                    RenderTexturePool: () => c.uW,
                    RenderTextureSystem: () => c.J$,
                    Renderer: () => c.Th,
                    Resource: () => c._z,
                    RoundedRectangle: () => K.RoundedRectangle,
                    Runner: () => J.R,
                    SAMPLER_TYPES: () => Q.SAMPLER_TYPES,
                    SCALE_MODES: () => Q.SCALE_MODES,
                    SHAPES: () => K.SHAPES,
                    SVGResource: () => c.pX,
                    ScissorSystem: () => c.id,
                    Shader: () => c.ex,
                    ShaderSystem: () => c.p,
                    SimpleRope: () => H.IE,
                    SmoothGraphics: () => X.K3,
                    Sprite: () => tt.j,
                    SpriteMaskFilter: () => c.z9,
                    Spritesheet: () => A.c,
                    SpritesheetLoader: () => A.o,
                    State: () => c.ZM,
                    StateSystem: () => c.zI,
                    StencilSystem: () => c.Ld,
                    System: () => c.xP,
                    TARGETS: () => Q.TARGETS,
                    TEXT_GRADIENT: () => b.M_,
                    TYPES: () => Q.TYPES,
                    TemporaryDisplayObject: () => Y.Ql,
                    Text: () => b.xv,
                    TextFormat: () => v.SQ,
                    TextMetrics: () => b._A,
                    TextStyle: () => b.pn,
                    Texture: () => c.xE,
                    TextureGCSystem: () => c.wr,
                    TextureLoader: () => y.dp,
                    TextureMatrix: () => c.UX,
                    TextureSystem: () => c.CT,
                    TextureUvs: () => c.aF,
                    Ticker: () => it.vB,
                    TickerPlugin: () => it.Sb,
                    TilingSprite: () => et.o,
                    TilingSpriteRenderer: () => et.S,
                    TimeLimiter: () => m.FI,
                    Transform: () => K.Transform,
                    UPDATE_PRIORITY: () => it.uF,
                    UniformGroup: () => c.oo,
                    VERSION: () => c.q4,
                    VideoResource: () => c.eH,
                    ViewableBuffer: () => c.Rv,
                    WRAP_MODES: () => Q.WRAP_MODES,
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
                    graphicsUtils: () => p.yR,
                    groupD8: () => K.groupD8,
                    interactiveTarget: () => g.Op,
                    isMobile: () => $.tq,
                    resources: () => c.Jb,
                    settings: () => $.Xd,
                    systems: () => c.eG,
                    uniformParsers: () => c.sg,
                    utils: () => st
                });
                var o = i(8826),
                    n = i(6866),
                    a = i(8157),
                    h = (i(1509), i(2113), i(5008), i(1820), i(5717), i(959)),
                    r = i(3943),
                    l = i(9610),
                    d = i(447),
                    c = i(1778),
                    u = i(6661),
                    p = i(1290),
                    g = i(2699),
                    m = i(9447),
                    A = i(4877),
                    b = i(7955),
                    v = i(9079),
                    y = i(9740);
                class w {
                    static add() {
                        for (var t of w.supportedFontExtensions) y.kC.setExtensionLoadType(t, y.kC.LOAD_TYPE.XHR), y.kC.setExtensionXhrType(t, y.kC.XHR_RESPONSE_TYPE.BUFFER)
                    }
                    static use(t, e) {
                        w.supportedFontExtensions.some((e => t.extension.endsWith(e))) ? w.loadFromBuffer(t).finally((() => e())) : e()
                    }
                    static loadFromBuffer(t) {
                        var e, i, s, o, n, a, h, r, l, d, c, u, p, g, m, A, b, v, y, f = null !== (e = null === (i = t.metadata) || void 0 === i || null === (s = i.font) || void 0 === s ? void 0 : s.family) && void 0 !== e ? e : t.name;
                        return document.fonts.add(new FontFace(f, t.data, null === (o = t.metadata) || void 0 === o ? void 0 : o.font)), t.styles = [{
                            fontFamily: f.replace(/['|"]/gi, ""),
                            fontStyle: null === (n = t.metadata) || void 0 === n || null === (a = n.font) || void 0 === a ? void 0 : a.style,
                            fontWeight: null === (h = t.metadata) || void 0 === h || null === (r = h.font) || void 0 === r ? void 0 : r.weight
                        }], w.waitFont({
                            "font-family": f,
                            "font-stretch": null === (l = t.metadata) || void 0 === l || null === (d = l.font) || void 0 === d ? void 0 : d.stretch,
                            "font-style": null === (c = t.metadata) || void 0 === c || null === (u = c.font) || void 0 === u ? void 0 : u.style,
                            "font-weight": null === (p = t.metadata) || void 0 === p || null === (g = p.font) || void 0 === g ? void 0 : g.weight
                        }, null === (m = t.metadata) || void 0 === m || null === (A = m.font) || void 0 === A ? void 0 : A.testString, null !== (b = null === (v = t.metadata) || void 0 === v || null === (y = v.font) || void 0 === y ? void 0 : y.timeout) && void 0 !== b ? b : t.timeout)
                    }
                }(0, n.Z)(w, "extension", u.n.Loader), (0, n.Z)(w, "supportedFontExtensions", ["ttf", "otf", "woff", "woff2"]), (0, n.Z)(w, "waitFont", function() {
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
                var f = i(9900),
                    x = i(7239),
                    S = i.n(x),
                    k = i(4891),
                    B = (i(3306), i(8657).Z, k.Q3),
                    C = k.b_,
                    P = null === k.Q3 || void 0 === k.Q3 ? void 0 : k.Q3.ticker,
                    T = {
                        Linear: k.bJ,
                        Back: k.eJ,
                        Elastic: k.tQ,
                        Sine: k.Yv
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

                function O(t) {
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
                class F extends f.Howl {
                    constructor(t) {
                        super(t), (0, n.Z)(this, "initialVolume", 1), (0, n.Z)(this, "data", {}), this.initialVolume = t.volume
                    }
                    fade(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        return this.volume(i), B.to(this, t, {
                            volume: e > -1 ? e : this.initialVolume
                        }), this.play(), this
                    }
                }
                class R {
                    constructor(t, e, i) {
                        (0, n.Z)(this, "handlers", new Map), (0, n.Z)(this, "onChangeMute", void 0), (0, n.Z)(this, "onChangeVolume", void 0), (0, n.Z)(this, "savedVolume", 0), this.device = t, this.visibility = e, this.preferences = i, this.onChangeMute = new(S()), this.onChangeVolume = new(S()), this.visibility.on("change", (t => {
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
                        t <= 0 && !this.mutedAll ? Z.forEach((t => this.setMuteBySound(t, !0))) : t > 0 && this.mutedAll && Z.forEach((t => this.setMuteBySound(t, !1))), this.savedVolume = t, this.setGlobalVolume(t), this.onChangeVolume.dispatch(t)
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
                class W {
                    static pre(t, e) {
                        t && W.supportedSoundExtensions.includes(t.extension) ? (t.load = function(t) {
                            this.isLoading || (this.isComplete ? t && setTimeout((() => t(this)), 1) : (t && this.onComplete.once(t), this.data = new F({
                                src: this.url,
                                sprite: this.metadata.sprite || !1,
                                volume: this.metadata.audioMetadata.volume,
                                loop: this.metadata.audioMetadata.loop
                            }), this.type = y.kC.TYPE.AUDIO, this.loadType = y.kC.LOAD_TYPE.AUDIO, this._setFlag(y.kC.STATUS_FLAGS.LOADING, !0), this.onStart.dispatch(this), this.data.on("loaderror", this._boundOnError, !1), this.data.on("load", this._boundComplete, !1), this.sound = this.data))
                        }, t.complete = function() {
                            var t;
                            if (this.data && (this.data.off("loaderror", this._boundOnError, !1), this.data.off("load", this._boundComplete, !1)), this.isComplete) throw new Error("Complete called again for an already completed resource.");
                            this._setFlag(y.kC.STATUS_FLAGS.COMPLETE, !0), this._setFlag(y.kC.STATUS_FLAGS.LOADING, !1);
                            var e = null !== (t = this.name) && void 0 !== t ? t : this.url;
                            Z.set(e, O(O({}, this.metadata.audioMetadata), {}, {
                                id: e,
                                sound: this.sound,
                                muted: !1
                            })), this.onComplete.dispatch(this)
                        }, t._boundComplete = t.complete.bind(t), e()) : e()
                    }
                }(0, n.Z)(W, "extension", u.n.Loader), (0, n.Z)(W, "supportedSoundExtensions", ["mp3"]);
                i(1293);
                var M, I = i(9534),
                    D = i(1162),
                    N = i(1368),
                    j = i(9685),
                    L = i(5083),
                    _ = i(2339);
                i(3113);

                function U(t) {
                    var e = t.substr(0, 3),
                        i = Math.floor(10 * +e + .001);
                    return "3.7" === e ? M.VER37 : "3.8" === e ? M.VER38 : "4.0" === e ? M.VER40 : "4.1" === e ? M.VER41 : i < M.VER37 ? M.VER37 : M.UNKNOWN
                }(function(t) {
                    t[t.UNKNOWN = 0] = "UNKNOWN", t[t.VER37 = 37] = "VER37", t[t.VER38 = 38] = "VER38", t[t.VER40 = 40] = "VER40", t[t.VER41 = 41] = "VER41"
                })(M || (M = {}));
                class V {
                    constructor() {
                        (0, n.Z)(this, "scale", 1)
                    }
                    readSkeletonData(t, e) {
                        var i = new I.BinaryInput(e);
                        i.readString();
                        var s = i.readString(),
                            o = U(s),
                            n = null;
                        if (o === M.VER38 && (n = new j.SkeletonBinary(new j.AtlasAttachmentLoader(t))), (i = new I.BinaryInput(e)).readInt32(), i.readInt32(), (o = U(s = i.readString())) !== M.VER40 && o !== M.VER41 || (n = new L.SkeletonBinary(new L.AtlasAttachmentLoader(t))), !n) {
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
                            s = U(i),
                            o = null;
                        if (s === M.VER37 && (o = new N.SkeletonJson(new N.AtlasAttachmentLoader(t))), s === M.VER38 && (o = new j.SkeletonJson(new j.AtlasAttachmentLoader(t))), s !== M.VER40 && s !== M.VER41 || (o = new L.SkeletonJson(new L.AtlasAttachmentLoader(t))), !o) {
                            var n = "Unsupported version of spine model ".concat(i, ", please update pixi-spine");
                            console.error(n)
                        }
                        return o.scale = this.scale, o.readSkeletonData(e)
                    }
                }
                class G extends D.go {
                    createBinaryParser() {
                        return new V
                    }
                    createJsonParser() {
                        return new z
                    }
                    parseData(t, e, i, s) {
                        var o = e;
                        t.spineData = o.readSkeletonData(i, s), t.spineAtlas = i
                    }
                }(0, n.Z)(G, "extension", u.n.Loader), (0, n.Z)(G, "use", (new G).genMiddleware().use);
                var H = i(512),
                    Q = i(600),
                    Y = i(9360),
                    X = i(3361),
                    K = i(3298),
                    q = i(8656),
                    J = i(3385),
                    $ = i(6997),
                    tt = i(736),
                    et = i(9504),
                    it = i(798),
                    st = i(5277);
                p.TC.nextRoundedRectBehavior = !0, b.xv.nextLineHeightBehavior = !0, u.R.add(g.bx, m.B9, c.Bv, h.c, r.Q, l.T, d.O, v.vl, A.o, G, w, W), window.PIXI = s;
                var ot = i(3233),
                    nt = i.n(ot);

                function at(t) {
                    return t && "object" == typeof t && !Array.isArray(t)
                }

                function ht(t) {
                    for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++) i[s - 1] = arguments[s];
                    if (!i.length) return t;
                    var o = i.shift();
                    if (at(t) && at(o))
                        for (var n in o) at(o[n]) ? (t[n] || Object.assign(t, {
                            [n]: {}
                        }), ht(t[n], o[n])) : Object.assign(t, {
                            [n]: o[n]
                        });
                    return ht(t, ...i)
                }
                class rt {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.create(null);
                        (0, n.Z)(this, "subscribers", new Map), this.data = t
                    }
                    merge() {
                        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                        this.data = ht({}, this.data, ...e)
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
                        return nt()(this.data, t, e)
                    }
                }
                class lt extends st.EventEmitter {}
                var dt = window.navigator.userAgent.match("CriOS") ? .86 : .96;
                class ct extends lt {
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
                        return window.innerHeight === t || window.innerHeight / t >= dt
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
                class ut extends lt {
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
                class pt extends st.EventEmitter {
                    constructor() {
                        super(...arguments), (0, n.Z)(this, "enabled", !1)
                    }
                    toggle() {
                        this.enabled = !this.enabled, this.emit("change", this.enabled)
                    }
                }
                var gt = i(5992);
                class mt extends gt.v {}
                class At {
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
                class bt {}
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
                class yt extends st.EventEmitter {
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
                class ft {
                    constructor(t) {
                        (0, n.Z)(this, "pressed", void 0), (0, n.Z)(this, "disabled", void 0), (0, n.Z)(this, "prevent", void 0), (0, n.Z)(this, "canDispatch", void 0), (0, n.Z)(this, "onPress", void 0), this.keyCode = t, this.canDispatch = !0, this.pressed = !1, this.disabled = !1, this.prevent = !1, this.onPress = new(S()), window.addEventListener("keyup", (t => {
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
                class xt {
                    constructor() {
                        (0, n.Z)(this, "KEY_CODE", {
                            Enter: 13,
                            Space: 32,
                            Shift: 16,
                            Escape: 27
                        }), (0, n.Z)(this, "keys", [])
                    }
                    register(t) {
                        var e = new ft(t);
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

                function St(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function kt(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? St(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : St(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class Bt extends st.EventEmitter {
                    constructor(t) {
                        super(), (0, n.Z)(this, "loader", new y.aN), this.device = t, this.loader.onError.add((t => this.emit("error", t))), this.loader.onComplete.add((t => this.emit("complete", t)))
                    }
                    load(t) {
                        var e = this;
                        return (0, o.Z)((function*() {
                            var i = yield e._getSizes(), s = Object.create(null), o = t.filter((t => {
                                var i, s, o;
                                return null === (i = null === (s = t.metadata) || void 0 === s || null === (o = s.platform) || void 0 === o ? void 0 : o.includes(e.device.platform)) || void 0 === i || i
                            })).map((t => (s = kt(kt({}, s), i[t.url]), kt(kt({}, t), {}, {
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
                class Ct {}
                class Pt {
                    constructor() {
                        (0, n.Z)(this, "renderer", void 0), $.Xd.RENDER_OPTIONS.legacy = !0, $.Xd.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !0, this.renderer = c.Th.create({
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
                var Tt = i(1200),
                    Et = {
                        SPENDING_BUDGET_EXCEEDED: "SPENDING_BUDGET_EXCEEDED",
                        MAX_BET_LIMIT_EXCEEDED: "MAX_BET_LIMIT_EXCEEDED",
                        INSUFFICIENT_BALANCE: "INSUFFICIENT_BALANCE",
                        BALANCE_CHANGE_ERROR: "BALANCE_CHANGE_ERROR"
                    };
                class Ot extends st.EventEmitter {
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
                                s = yield Tt.ZP.post(window.serverUrl, i);
                            if (e._response = s.data, e.emit("response:".concat(t.action), e._response), e.emit("response", e._response, t.action), e._response.error) throw new Error(e._response.error);
                            return e._response
                        }))()
                    }
                    resetSession() {
                        return (0, o.Z)((function*() {
                            yield Tt.ZP.post("cs.php")
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
                class Ft {
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
                class Rt extends st.EventEmitter {
                    constructor() {
                        super(...arguments), (0, n.Z)(this, "width", void 0), (0, n.Z)(this, "height", void 0), (0, n.Z)(this, "aspectRatio", void 0), (0, n.Z)(this, "propAspectRatio", void 0), (0, n.Z)(this, "paddingX", void 0), (0, n.Z)(this, "paddingY", void 0)
                    }
                    resize(t, e) {
                        this.width = t, this.height = e, this.aspectRatio = parseFloat(Math.min(window.innerWidth / t, window.innerHeight / e).toFixed(3)), this.paddingX = Math.max(Math.round((window.innerWidth / 2 - this.width / 2 * this.aspectRatio) / this.aspectRatio), 0), this.paddingY = Math.max(Math.round((window.innerHeight / 2 - this.height / 2 * this.aspectRatio) / this.aspectRatio), 0), this.propAspectRatio = parseFloat(Math.max((2 * this.paddingX + this.width) / this.width, (2 * this.paddingY + this.height) / this.height).toFixed(3))
                    }
                }
                class Wt extends Y.W2 {}
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
                class Dt extends st.EventEmitter {
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
                class Nt extends(Gt(tt.j)) {
                    constructor() {
                        super(...arguments), (0, n.Z)(this, "interactive", !0)
                    }
                }
                class jt {
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
                var Lt, _t = i(899),
                    Ut = i.n(_t);
                class Vt {
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
                class zt extends st.EventEmitter {
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
                class Ht {
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
                    Yt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZ4AAAElCAMAAADjr3SLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACuUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF7IU6UAAAA5dFJOU8+h2vPke3X4TVfVbFxIIRyF6Qou7oC+lQ43F0NnjWETJSnfkTK1uVLKcJwCBok/O7Gppa3EwZnHZBUSEz4AAAQKSURBVHja7dHrUttWAIXR06QtbYAAgRiwiTHYuPd7uL3/i1WyY1CETRLXmtnTWR+akXyk/YdVflFwxb8gmudXBYcnm+eNgsOTzXMy783J/Hf1MHte3JedNe8n9l3uy4mCq3nOT86r6+PzZWersu9sX84VHJ5snv7znffPq6u/dvb/aV/6Cq709x7q783PqofZ817rXft82Tf2G92XPQWHJ5vntYLDE84zGr0ePT2vDmct3o0+fLfq3L6TfRkpuGU8F6OL6nr6u32+KvuN7cuFgsOTzXOo4PCE80wmh5P5c/Uwq/49Ofz4vni/OGt/Z9/JvkwUXDmdTE4np9X1eF+06nzxrm5i3+W+nCo4PNk8fyg4PNk8vys4PNk8AwWHJ5tndzDYHezOGjSel/1untfV7wb2Xe7LroLDk83znYLDg0dr8/yg4PBk83yv4PDg0do8OwoOTzbPcH4f7gxn7QyfflO/2xl++tl+4/syVHA1z93wrrq+bNfc2He2L3cKrpwpODzhPNuzzrbPqmt7aYt37W+av+072ZdtBYcnm+cnBYcnm+dbBYcHj9bm+UbB4cGjtXneKjg82Tz78/v+2/3qmt8XtX83z5sb+872ZV/B4cnm+U3B4cnmeafg8GTzjOe9G7+rrsf7uHXefm5n38m+jBVcGR8/ND6en1UPs+fj1rv2+bJv7De6L8cKrua5Ob6prsd7s/bZc9/Yb3xfbhRc+VnB4cnm+UrB4cGjtXn+VnB4snn+UnB4snn+UXB4snn+VHB4snmuFByebJ7pdHo1vaqu6We17Fv7zvZlquDKtPfQtDetrt5nVX9b17Pvcl96Cq5cz+/Xvevqmt/reo3zxe/FN4uav+072ZdrBVfeK7g2z+372+p6+rt53v7GvrN9uVVw5UcFhyebR5L+n716VT781Ve7VefNd/ad7VcslRGebJ4XCg5PPM/li8vq+rJdc2Pf2b5cKjg82TxfKzg8eLQ2z4GCw5PNc3RwcHRwVF2P90XLzptndQf2Xe7LkYLDk83zUsHhyebZWn6+9XKrup7fPveN/Ub2ZUvB4Ynnua/+1u++tb+339y+3Cs4PHiEB4/wCA8e4cEjPMKDR3jwCI/w4BEePMIjPHiEB49/AR7hwSM8woNHePAIj/DgER48wiM8eIQHj/AIDx7hwSM8woNHeIQHj/DgER7hwSM8eIRHePAIDx7hER48woNHeIQHj/AIDx7hwSM8woNHePAIj/DgER48wiM8eIQHj/AIDx7hER48woNHeIQHj/DgER7hwSM8eIRHePAIDx7hER48wiM8eIQHj/AIDx7hwSM8woNHePAIj/DgER48wiM8eIRHePAIDx7hER48woNHeIQHj/DgER7hwaNu+xdVr7rouE001AAAAABJRU5ErkJggg==";
                class Xt extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "onClick", void 0), (0, n.Z)(this, "useClickSound", !0), this.buttonMode = !0, this.interactive = !0, this.onClick = new(S()), this.onClick.add((() => {
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
                class Kt extends Xt {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.xE.EMPTY,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 90,
                            i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        super(), (0, n.Z)(this, "wrapper", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "icon", void 0), this.wrapper = this.addChild(new Y.W2), this.background = this.wrapper.addChild(tt.j.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACBUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wpM4qQAAAAqdFJOUwDSDuwsC4bvH7fzUOIGkBR01eUSgvnfUjPDkaHq9FN6AnU0BcjZ7tjHLX4Dw7IAAAHESURBVFjDxZnZYoIwEEWDIAEEWQSUXTa18/8f2M221o0lue35gPMQSObODGPDtFpZZYkSq1GkxkqSVaXWMnH2TW0WdENh1s1eSLxLc3pInu7meheeTwP43mKGeBNyGgEPNxPFS92ikVj6cop5a9ME7O1osWHSRExjnHnFaTJ8NULsrGkWa2fI7HY0k84dOOaeZnN8euBaQAIE2hPzgYQ4PHQbAQkSPDgTtydhjne/pdORBLp7/+CapLC+cwdJEjf30uCy1Pz6U5okDfPqFSWJ/Hpjl7ZMtX1ZG3SSin5RBy25auunXoYkmfA7FXDZav6VITySjndW+/LV/jl9EYDPzJYi1OlHFs0R6vw9xzYEoXlT1xh1LffNu3r/2gKjLlqmEQiNlSh1ySqUumIZSp2xBKVOmIJSKyxGqWOmotQqi1DqCKkGHgjwMwJ/PuCVAV504PMEfFSBpQBYwIBlFxkWgBEHGMyAcRIZgoHRHdlwANskYHOHbEmBjTSy/QcOLZCjFuSACDjWQg7jJI0QTw5q8Nm7fz2uZewFNmRGjsbFBvq9gVpDnNz/W54gVz7QRRVyvQZdCiJXmdAFLHRtjF12C63oXwGnIQ3G+GgEGQAAAABJRU5ErkJggg==")), this.background.anchor.set(.5), this.setBackgroundAlpha(.2), this.setBackgroundSize(e), this.showBackground(i), this.icon = this.wrapper.addChild(tt.j.from(t)), this.icon.anchor.set(.5), this.game.interaction.click(this, (() => this.onClick.dispatch()))
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
                class qt extends Kt {
                    constructor() {
                        super("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaBAMAAADKhlwxAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURUdwTP///////////////////////////////////////////////w2imYoAAAAMdFJOUwB/gO8Q33Cfr6C/b5qlnKIAAADTSURBVFjD7dUtEsIwFATgphYTfEUGHYvrBcBiERwAyRE4BkfgEqXDj9hDUUhfUve2puqtitj5ppPZSavKYrFYLEtlv/X5vGovSvuGLp8bfJQ2AMEd0CvtFhlvgKfSPmd8oPFQ2jUEH2gE7VLiiDN0wSlacI4WnKQTvibphIOlE87Sggd2iHEGne66Y8vu/yV+Bk3jbrxBT9MbFk8LiSSeFlJzuIyPw2V8FF52zeBl1z/8pbSPZSGRek/CZIpK+z4ZX8Rbae/6U9n54Wq/EYvFYlksXwyBk9qQ6NAVAAAAAElFTkSuQmCC")
                    }
                }
                class Jt extends Y.W2 {
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
                class $t extends(Gt(tt.j)) {
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
                class te extends(Gt(Y.W2, {
                    preventResize: !0
                })) {
                    constructor() {
                        super(), (0, n.Z)(this, "_dirty", void 0), (0, n.Z)(this, "_distance", void 0), (0, n.Z)(this, "_minY", void 0), (0, n.Z)(this, "_scrollContainer", void 0), (0, n.Z)(this, "_scrollMask", void 0), (0, n.Z)(this, "_speed", void 0), (0, n.Z)(this, "_startPosition", void 0), (0, n.Z)(this, "_targetPosition", void 0), (0, n.Z)(this, "hitAreaOffsetLeft", void 0), (0, n.Z)(this, "hitAreaOffsetRight", void 0), (0, n.Z)(this, "paddingBottom", void 0), (0, n.Z)(this, "scrollBar", void 0), this.paddingBottom = 0, this.hitAreaOffsetLeft = 0, this.hitAreaOffsetRight = 0, this.interactive = !0, this._width = 0, this._height = 0, this._minY = 0, this._speed = 0, this._dirty = !1, this._startPosition = null, this._distance = null, this._targetPosition = null, this._scrollMask = new p.TC, this._scrollContainer = new Y.W2, this._scrollContainer.interactive = !0, this.scrollBar = null, super.addChild(this._scrollMask), super.addChild(this._scrollContainer), this.mask = this._scrollMask, this._setupEvents()
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
                const ee = te;
                class ie extends(Gt(Y.W2, {
                    preventResize: !0
                })) {
                    constructor(t) {
                        super(), (0, n.Z)(this, "value", void 0), this.value = t === 1 / 0 ? new tt.j(this.game.loader.getAsset("assets/autoplay-infinity-count.png")) : new b.xv(t, {
                            fill: 16777215,
                            fontSize: 28,
                            fontFamily: "Avenir-Bold"
                        }), this.value.anchor.set(.5), this.addChild(this.value)
                    }
                    setFill(t) {
                        this.value.style ? this.value.style.fill = t : this.value.tint = t
                    }
                }
                class se extends Xt {
                    constructor(t, e) {
                        super(), (0, n.Z)(this, "actived", void 0), (0, n.Z)(this, "backgroundFill", void 0), (0, n.Z)(this, "backgroundOutline", void 0), (0, n.Z)(this, "realValue", void 0), (0, n.Z)(this, "selected", void 0), (0, n.Z)(this, "value", void 0), (0, n.Z)(this, "select", (() => {
                            this.actived = !0, this.value.setFill(this.game.config.get("colors.black")), this.backgroundFill.tint = this.game.config.get("colors.primary"), this.backgroundFill.alpha = 1, this.backgroundFill.renderable = !0, this.backgroundOutline.renderable = !1
                        })), this.realValue = t, this.selected = !1, this.backgroundFill = this.addChild(tt.j.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAAA9CAMAAADroBcaAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////x6CpFcAAAAcdFJOUwDJXBuIA27m9xg38dfoKWWOtUmi85QC/pPy/KNCsIVjAAABTUlEQVRo3uWbaXaDMAwGRVhs9j2BRPc/Z8NLl7RQmp9oOjeYh5Fl+bPINlXdtIWbL3o4LrMr2qau5HXirnd6eFzfxS/ppFGpRiij9G+dyash/LSvFCe5GiNPdhZeGKhBgvA3n8ypSVy27XPyahR/2tA5R2qY6LwSMu1zN1qtNzXOj1WXeetC/ltlCJ2axz1V7zhQAMHXDpsoguSzf8sZQvlHXzcqhPH9A3mKkE8JW+pqe41LjlC5FLpOQXR3oRtJqL8LOZKQE6kURSU1S6iWhiXUSMsSaqVgCRWsIreUuYElNMiVJXSlfaGZ9w/hqhxuH8J1CrheDtdt485D0tNOrLiZAm7qg5vL8SannNn2RL19wN0P8W7wcHesvFtwXk6BlyThZX1waSxgXo6XaORlTpe+brSVCh7T/5bbfiTrb6Rk/fPbh+GIbx+G3bcPb2ptD9yZnG4dAAAAAElFTkSuQmCC")), this.backgroundFill.anchor.set(.5), this.backgroundFill.width = 208, this.backgroundFill.height = 61, this.backgroundOutline = this.addChild(tt.j.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAAA9CAMAAADroBcaAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACBUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wpM4qQAAAAqdFJOUwAQcJ/v7t/+ASB/MI+gIUG/kECAEVExcVDens9vr1/OYI5Pvs2hYbCubp1/YlMAAAJPSURBVGje7ZrbmqJADIQD9AlBjoIooO7OHuv9H3AbdXZ0Rkf3juTbuuaC36SKxG6i20qGcjQKs5Tqi3JI6HkFVTRTlCusqHsSZzHRmGjo4oBmqSCphtEcXzJ+/PDSP1gMMc1e8aH3r/oIaapOVBETJf7X14vPoD1zERMjxR5pc/eNdwqmImZqDHR4p92AMiB2CkrYm22XAiGx1Br4cotHVcRUjfpItIBKiK1a9b7rBqAjxsphd1fpp7j6581H+jK9DUrePORK7C8NZALmQLQyqC8ariP2yqFfq7JExJ+HXIHtuUBALACIMthAUIF8iZZnFxkkIoBeXdShl8HjXWSrY8fthAD5r+sUC0pGJJxiQfs1FkYKDzljEwrxUw7Q0oZUch9Lr02UUoFKDlCDkXopX6FTKmx8yAVygFY+5gA5PORg/wPNHkich4ycyYeoxZ5GfJUDlONF3qQQCtlXj5kw+llO3LQtbh/yG6sYE/04bqwVCikd19spsQMlZYFo/aw9qZbzv9zpr9MAyGREgj3HWyTCRX8LdHRRLmH9fjvyqoWdDxHt/QzEvOHKc8SdFGusefOE12esdABvGzWw7+adGqpl/ElVH2/HpFAN137Llb2RASmwdkz9Y29mWm2Rrhjm9b3bWEShhukct3Yz0HdP7OINEGWMkFxWwH77bEGttUdqHZfqfH9w53QqUmSB/pC5mUM5l4W+Onb7eGaLo41nMmOYtys3S62yJlwawOrFkyNoF2lr532v3lq9rf5lok6G9GXvseYovfmV/r53TPcH+NF/0RiU6I8AAAAASUVORK5CYII=")), this.backgroundOutline.anchor.set(.5), this.backgroundOutline.width = 208, this.backgroundOutline.height = 61, this.value = this.addChild(new ie("function" == typeof e ? e(t) : t)), this.game.interaction.click(this, (() => this.onClick.dispatch())), this.game.interaction.hover(this, (() => {
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
                class oe extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "_values", void 0), this._values = []
                    }
                    addValues(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        this.removeChildren(), this._values = t, this.addChild(...t.map((t => {
                            var i = new se(t, e);
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

                function ne(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }
                class ae extends(Gt(b.xv)) {
                    constructor(t) {
                        super(t, function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? ne(Object(i), !0).forEach((function(e) {
                                    (0, n.Z)(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ne(Object(i)).forEach((function(e) {
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

                function he(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }
                class re extends(Gt(b.xv)) {
                    constructor(t) {
                        super(t, function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? he(Object(i), !0).forEach((function(e) {
                                    (0, n.Z)(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : he(Object(i)).forEach((function(e) {
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
                class le extends Xt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "AutoPlaySettingsStopCondButtonReset"), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "text", void 0), (0, n.Z)(this, "state", !1), this.background = this.addChild(new tt.j(this.game.loader.getAsset("assets/ui_2020/chip.png"))), this.background.anchor.set(.5), this.background.width = 200, this.background.height = 71, this.text = this.addChild(new b.xv(this.game.i18n.t("AutoPlaySettingsStopCondButtonReset"), {
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
                class de extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "items", void 0), (0, n.Z)(this, "resetButton", void 0), this.title = this.addChild(new ae(this.game.i18n.t("AutoPlaySettingsStopCondTitle").toUpperCase(), {
                            fontFamily: "Avenir-Bold",
                            fontSize: 28
                        })), this.title.anchor.set(.5, 0), this.items = this.addChild(new Y.W2), this.resetButton = this.addChild(new le), this.resetButton.onClick.add(this.reset, this), this.resetButton.active(this.itemsActive)
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
                class ce extends(Gt(Jt)) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "AutoPlaySettings"), (0, n.Z)(this, "bottomBackgroundTexture", void 0), (0, n.Z)(this, "bottomBackgroundMobileTexture", void 0), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "scrollView", void 0), (0, n.Z)(this, "bottom", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "autoPlayValues", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "subTitle", void 0), (0, n.Z)(this, "stopSection", void 0), (0, n.Z)(this, "closeButton", void 0), (0, n.Z)(this, "spaceKey", void 0), this.bottomBackgroundTexture = c.xE.from(Qt), this.bottomBackgroundMobileTexture = c.xE.from(Yt), this.overlay = this.addChild(new $t), this.scrollView = this.addChild(new ee), this.bottom = this.addChild(new tt.j(this.bottomBackgroundMobileTexture)), this.content = this.scrollView.addChild(new Y.W2), this.autoPlayValues = this.content.addChild(new oe), this.title = this.content.addChild(new re(this.game.i18n.t("AutoPlaySettingsTitle").toUpperCase())), this.title.withGameName(), this.title.anchor.set(.5, 0), this.subTitle = this.content.addChild(new ae(this.game.i18n.t("AutoPlaySettingsSubTitle"))), this.subTitle.anchor.set(.5, 0), this.stopSection = this.content.addChild(new de), this.closeButton = this.addChild(new qt), this.closeButton.onClick.add((() => this.close())), this.spaceKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Escape), this.spaceKey.onPress.add(this.close, this), this.spaceKey.disable()
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
                var ue = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return (e ? t.toLowerCase() : t).replace(/(?:^|\s|[&"'([{])+\S/g, (t => t.toUpperCase()))
                };
                class pe extends Xt {
                    constructor(t) {
                        super(), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "mark", void 0), (0, n.Z)(this, "description", void 0), (0, n.Z)(this, "checked", !1), this.background = this.addChild(tt.j.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA9CAMAAAApvJHbAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABmUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////26W6sgAAAAhdFJOUwCPnzDvfxD+7iCAnt5v36BwzpBAX89Qr46/vt3NYE6ublTVHtYAAAFZSURBVEjHxZfJdsMgDEUxxgiP8ewmHfX/P1k7cU6dFgJIi779RU+AQBLCrrTul0YhoprOfZ2KcOlBbtxRSs6BbPYbvamRuZ89oVs+3hH3LpM9YfMJfaqc4UeFfpnW4RqDBFb3CYbqhQNb8CwC/mO+xijB+HBUKo5Gczy4BmPVEZPeVZB9X73rnT4hReUemgQjaEboe+YNkb5mPhNhhIFh/LZvikyb9eklwwipaBl0K3o6jYk4M+hFTAy6Ymz5tukMGOFfaV7eDYPuxMKgL8y7xrnnNbPGePXNfFsGsvGPrUtS5ArbVDCMr8GJxvdPWHL+MVrmP/8/IfNj69JF06/HvsVw+hbxHl0fDyqoSUf3ipAwWk0bvJoHRo8sRBuy82Z0zgaVN/Dbs9GkMPS5ZAsv3dlDqb0zVS4r2wJgMh020M3SwHEFAFMOOmKaTOvk0q1rgKk+ky/XHPoNshlvtQO8EbIAAAAASUVORK5CYII=")), this.background.width = 61, this.background.height = 61, this.mark = this.addChild(tt.j.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAMAAAB61OwbAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ5TOdIAAAAcdFJOUwCg7/5f3mAg35+/cL7uQIAwb38Qzs+vEU8hMVC5i/YxAAAAvUlEQVQoz6WT2RKDIAxFEcsiIFLtXv7/O9sSRkQIPjRv5GZykpuBEDT4TZ1II2b/jQHXhQ/h0AIJBQ9MP4PuBQagoKMzdKBLrAGPAGxNIf8E2AMAOQLMO4BVUonS4xUQ3tThAJhYPnces7WpgsT1nnucNph81rIrNlhYrJg2HrNs6jFW8ORxbpHrIUtfFUAIHVtIXQFkg+I3GLZ67QbLJemsemTBWoBsWYMd2cKyo0B/iv5V9LrxGblh5l1kP+dCHfNSyQUnAAAAAElFTkSuQmCC")), this.mark.width = 32, this.mark.height = 30, this.mark.anchor.set(.5), this.mark.position.set(this.background.width / 2, this.background.height / 2), t && (this.description = this.addChild(new b.xv(ue(this.game.i18n.t(t), !0), {
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

                function me(t) {
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
                class Ae extends Xt {
                    constructor(t, e, i) {
                        super(), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "text", void 0), (0, n.Z)(this, "state", !1), this.background = this.addChild(new tt.j(this.game.loader.getAsset("assets/ui_2020/chip.png"))), this.text = this.addChild(new b.xv(e, me(me({}, i), {}, {
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
                class be extends(Gt(Y.W2, {
                    preventResize: !0
                })) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "StopItemBalance"), (0, n.Z)(this, "state", "inactive"), (0, n.Z)(this, "checkbox", void 0), (0, n.Z)(this, "chips", void 0), (0, n.Z)(this, "chipValue", 10), (0, n.Z)(this, "balance", 0), (0, n.Z)(this, "onClickCheckbox", new(S())), (0, n.Z)(this, "onClickChip", new(S())), (0, n.Z)(this, "onChange", new(S())), this.checkbox = this.addChild(new pe("AutoPlaySettingsStopCondCheckboxBalance")), this.chips = this.addChild(new Y.W2), this.chips.addChild(new Ae(this.chipValue, "10%")).active(!0), this.chips.addChild(new Ae(25, "25%")), this.chips.addChild(new Ae(50, "50%")), this.chips.addChild(new Ae(75, "75%")), this.chips.addChild(new Ae(100, "100%")), this.checkbox.onClick.add((() => {
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
                class ve extends(Gt(Y.W2, {
                    preventResize: !0
                })) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "StopItemBalanceDrop"), (0, n.Z)(this, "state", "inactive"), (0, n.Z)(this, "checkbox", void 0), (0, n.Z)(this, "chips", void 0), (0, n.Z)(this, "chipValue", 10), (0, n.Z)(this, "balance", 0), (0, n.Z)(this, "onClickCheckbox", new(S())), (0, n.Z)(this, "onClickChip", new(S())), (0, n.Z)(this, "onChange", new(S())), this.checkbox = this.addChild(new pe("AutoPlaySettingsStopCondCheckboxBalanceDrop")), this.chips = this.addChild(new Y.W2), this.chips.addChild(new Ae(this.chipValue, "10%")).active(!0), this.chips.addChild(new Ae(25, "25%")), this.chips.addChild(new Ae(50, "50%")), this.chips.addChild(new Ae(75, "75%")), this.chips.addChild(new Ae(100, "100%")), this.checkbox.onClick.add((() => {
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
                class ye extends(Gt(Y.W2, {
                    preventResize: !0
                })) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "StopItemFeatureBonus"), (0, n.Z)(this, "state", "inactive"), (0, n.Z)(this, "checkbox", void 0), (0, n.Z)(this, "onClickCheckbox", new(S())), (0, n.Z)(this, "onChange", new(S())), this.checkbox = this.addChild(new pe("AutoPlaySettingsStopCondCheckboxFeatureBonus")), this.checkbox.onClick.add((() => {
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
                var we = 0,
                    fe = 1,
                    xe = 2,
                    Se = {
                        fontSize: 22
                    };
                class ke extends(Gt(Y.W2, {
                    preventResize: !0
                })) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "StopItemWin"), (0, n.Z)(this, "state", "inactive"), (0, n.Z)(this, "checkbox", void 0), (0, n.Z)(this, "chips", void 0), (0, n.Z)(this, "chipType", we), (0, n.Z)(this, "onClickCheckbox", new(S())), (0, n.Z)(this, "onClickChip", new(S())), (0, n.Z)(this, "onChange", new(S())), this.checkbox = this.addChild(new pe("AutoPlaySettingsStopCondCheckboxWin")), this.chips = this.addChild(new Y.W2), this.chips.addChild(new Ae(this.chipType, ue(this.game.i18n.t("AutoPlaySettingsStopCondCheckboxWinAny")), Se)).active(!0), this.chips.addChild(new Ae(fe, ue(this.game.i18n.t("AutoPlaySettingsStopCondCheckboxWinBig")), Se)), this.chips.addChild(new Ae(xe, ue(this.game.i18n.t("AutoPlaySettingsStopCondCheckboxWinGiant")), Se)), this.checkbox.onClick.add((() => {
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
                        this.state = "inactive", this.chipType = we, this.checkbox.setChecked(!1), this.chips.children.forEach(((t, e) => {
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
                var Be = ["pointerover", "pointerenter", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerout", "pointerleave", "gotpointercapture", "lostpointercapture", "mouseover", "mouseenter", "mousedown", "mousemove", "mouseup", "mousecancel", "mouseout", "mouseleave", "touchover", "touchenter", "touchdown", "touchmove", "touchup", "touchcancel", "touchout", "touchleave"],
                    Ce = "bbcode",
                    Pe = {
                        bbcode: ["[", "]"],
                        xml: ["<", ">"]
                    };
                class Te extends b.xv {
                    constructor(t, e) {
                        super(t), (0, n.Z)(this, "textStyles", void 0), (0, n.Z)(this, "hitboxes", void 0), this.styles = e, Be.forEach((t => {
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
                        for (var e in this.textStyles = {}, this.textStyles.default = this.assign({}, Te.DEFAULT_TAG_STYLE), t) "default" === e ? this.assign(this.textStyles.default, t[e]) : this.textStyles[e] = this.assign({}, t[e]);
                        this.textStyles.default.tagStyle === Ce && (this.textStyles.b = this.assign({}, {
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
                        })), this.withPrivateMembers()._style = new b.pn(this.textStyles.default), this.withPrivateMembers().dirty = !0
                    }
                    setTagStyle(t, e) {
                        t in this.textStyles ? this.assign(this.textStyles[t], e) : this.textStyles[t] = this.assign({}, e), this.withPrivateMembers()._style = new b.pn(this.textStyles.default), this.withPrivateMembers().dirty = !0
                    }
                    deleteTagStyle(t) {
                        "default" === t ? this.textStyles.default = this.assign({}, Te.DEFAULT_TAG_STYLE) : delete this.textStyles[t], this.withPrivateMembers()._style = new b.pn(this.textStyles.default), this.withPrivateMembers().dirty = !0
                    }
                    getTagRegex(t, e) {
                        var i = Object.keys(this.textStyles).map((t => [t, t.toUpperCase()].join("|"))).join("|"),
                            {
                                tagStyle: s
                            } = this.textStyles.default;
                        i = t ? "(".concat(i, ")") : "(?:".concat(i, ")");
                        var o = s === Ce ? "\\".concat(Pe.bbcode[0]).concat(i, "(?:\\=(?:[A-Za-z0-9_\\-\\#]+|'(?:[^']+|\\\\')*'))*\\s*\\").concat(Pe.bbcode[1], "|\\").concat(Pe.bbcode[0], "\\/").concat(i, "\\s*\\").concat(Pe.bbcode[1]) : "\\".concat(Pe.xml[0]).concat(i, "(?:\\s+[A-Za-z0-9_\\-]+=(?:\"(?:[^\"]+|\\\\\")*\"|'(?:[^']+|\\\\')*'))*\\s*\\").concat(Pe.xml[1], "|\\").concat(Pe.xml[0], "\\/").concat(i, "\\s*\\").concat(Pe.xml[1]);
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
                                        if (m === Ce && r[c][0].includes("=") && this.textStyles[r[c][1]]) ! function() {
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
                                    var b = this.createTextData(d ? t[a].substring(d) : t[a], o[o.length - 1], n[n.length - 1]);
                                    h.push(b)
                                }
                            }
                            i.push(h)
                        }
                        var {
                            tagStyle: v
                        } = this.textStyles.default;
                        return i[i.length - 1].map((t => {
                            t.text.includes(Pe[v][0]) && (t.text = t.text.match(v === Ce ? /^(.*)\[/ : /^(.*)\</)[1])
                        })), i
                    }
                    getFontString(t) {
                        return new b.pn(t).toFontString()
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
                                    this.context.font = this.getFontString(p), s[r][u].width = this.context.measureText(s[r][u].text).width, 0 !== s[r][u].text.length && (s[r][u].width += (s[r][u].text.length - 1) * p.letterSpacing, u > 0 && (l += p.letterSpacing / 2), u < s[r].length - 1 && (l += p.letterSpacing / 2)), l += s[r][u].width, s[r][u].fontProperties = b._A.measureFont(this.context.font), s[r][u].height = s[r][u].fontProperties.fontSize, "number" == typeof p.valign ? (d = Math.min(d, p.valign - s[r][u].fontProperties.descent), c = Math.max(c, p.valign + s[r][u].fontProperties.ascent)) : (d = Math.min(d, -s[r][u].fontProperties.descent), c = Math.max(c, s[r][u].fontProperties.ascent))
                                }
                                o[r] = l, n[r] = d, a[r] = c, h = Math.max(h, l)
                            }
                            var g = Object.keys(t).map((e => t[e])).reduce(((t, e) => Math.max(t, e.strokeThickness || 0)), 0),
                                m = this.getDropShadowPadding(),
                                A = h + 2 * g + 2 * m,
                                v = a.reduce(((t, e) => t + e), 0) - n.reduce(((t, e) => t + e), 0) + 2 * g + 2 * m;
                            this.canvas.width = A * this.resolution, this.canvas.height = v * this.resolution, this.context.scale(this.resolution, this.resolution), this.context.textBaseline = "alphabetic", this.context.lineJoin = "round";
                            for (var y = m + g, w = [], f = 0; f < s.length; f++) {
                                var x = s[f],
                                    S = void 0;
                                switch (this.withPrivateMembers()._style.align) {
                                    case "left":
                                        S = m + g;
                                        break;
                                    case "center":
                                        S = m + g + (h - o[f]) / 2;
                                        break;
                                    case "right":
                                        S = m + g + h - o[f]
                                }
                                for (var k = 0; k < x.length; k++) {
                                    var {
                                        style: B,
                                        text: C,
                                        fontProperties: P,
                                        width: T,
                                        height: E,
                                        tag: O
                                    } = x[k], Z = y + P.ascent;
                                    switch (B.valign) {
                                        case "top":
                                            break;
                                        case "baseline":
                                            Z += a[f] - P.ascent;
                                            break;
                                        case "middle":
                                            Z += (a[f] - n[f] - P.ascent - P.descent) / 2;
                                            break;
                                        case "bottom":
                                            Z += a[f] - n[f] - P.ascent - P.descent;
                                            break;
                                        default:
                                            Z += a[f] - P.ascent - B.valign
                                    }
                                    if (0 === B.letterSpacing) w.push({
                                        text: C,
                                        style: B,
                                        x: S,
                                        y: Z,
                                        width: T,
                                        ascent: P.ascent,
                                        descent: P.descent,
                                        tag: O
                                    }), S += x[k].width;
                                    else {
                                        this.context.font = this.getFontString(x[k].style);
                                        for (var F = 0; F < C.length; F++) {
                                            (F > 0 || k > 0) && (S += B.letterSpacing / 2);
                                            var R = this.context.measureText(C.charAt(F)).width;
                                            w.push({
                                                text: C.charAt(F),
                                                style: B,
                                                x: S,
                                                y: Z,
                                                width: R,
                                                ascent: P.ascent,
                                                descent: P.descent,
                                                tag: O
                                            }), S += R, (F < C.length - 1 || k < x.length - 1) && (S += B.letterSpacing / 2)
                                        }
                                    }
                                }
                                y += a[f] - n[f]
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
                                    "number" == typeof n && (n = st.hex2string(n)), this.context.shadowColor = n, this.context.shadowBlur = e.dropShadowBlur, this.context.shadowOffsetX = Math.cos(e.dropShadowAngle) * e.dropShadowDistance * this.resolution, this.context.shadowOffsetY = Math.sin(e.dropShadowAngle) * e.dropShadowDistance * this.resolution, this.context.fillText(i, s, o)
                                }
                            })), this.context.restore(), w.forEach((t => {
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
                                    "number" == typeof l && (l = st.hex2string(l)), this.context.strokeStyle = l, this.context.lineWidth = e.strokeThickness, this.context.strokeText(i, s, o)
                                }
                            })), w.forEach((t => {
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
                                    if ("number" == typeof l) l = st.hex2string(l);
                                    else if (Array.isArray(l))
                                        for (var d = 0; d < l.length; d++) {
                                            var c = l[d];
                                            "number" == typeof c && (l[d] = st.hex2string(c))
                                        }
                                    var u = new b.pn(e),
                                        p = b._A.measureText(i || " ", u, u.wordWrap, this.canvas);
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
                                    descent: h,
                                    tag: r
                                } = t, l = -this.withPrivateMembers()._style.padding - this.getDropShadowPadding();
                                this.hitboxes.push({
                                    tag: r,
                                    hitbox: new K.Rectangle(s + l, o - a + l, n, a + h)
                                }), (void 0 === e.debug ? Te.debugOptions.spans.enabled : e.debug) && (this.context.lineWidth = 1, Te.debugOptions.spans.bounding && (this.context.fillStyle = Te.debugOptions.spans.bounding, this.context.strokeStyle = Te.debugOptions.spans.bounding, this.context.beginPath(), this.context.rect(s, o - a, n, a + h), this.context.fill(), this.context.stroke(), this.context.stroke()), Te.debugOptions.spans.baseline && (this.context.strokeStyle = Te.debugOptions.spans.baseline, this.context.beginPath(), this.context.moveTo(s, o), this.context.lineTo(s + n, o), this.context.closePath(), this.context.stroke()), Te.debugOptions.spans.top && (this.context.strokeStyle = Te.debugOptions.spans.top, this.context.beginPath(), this.context.moveTo(s, o - a), this.context.lineTo(s + n, o - a), this.context.closePath(), this.context.stroke()), Te.debugOptions.spans.bottom && (this.context.strokeStyle = Te.debugOptions.spans.bottom, this.context.beginPath(), this.context.moveTo(s, o + h), this.context.lineTo(s + n, o + h), this.context.closePath(), this.context.stroke()), Te.debugOptions.spans.text && (this.context.fillStyle = "#ffffff", this.context.strokeStyle = "#000000", this.context.lineWidth = 2, this.context.font = "8px monospace", this.context.strokeText(r.name, s, o - a + 8), this.context.fillText(r.name, s, o - a + 8), this.context.strokeText("".concat(n.toFixed(2), "x").concat((a + h).toFixed(2)), s, o - a + 16), this.context.fillText("".concat(n.toFixed(2), "x").concat((a + h).toFixed(2)), s, o - a + 16)))
                            })), Te.debugOptions.objects.enabled && (Te.debugOptions.objects.bounding && (this.context.fillStyle = Te.debugOptions.objects.bounding, this.context.beginPath(), this.context.rect(0, 0, A, v), this.context.fill()), Te.debugOptions.objects.text && (this.context.fillStyle = "#ffffff", this.context.strokeStyle = "#000000", this.context.lineWidth = 2, this.context.font = "8px monospace", this.context.strokeText("".concat(A.toFixed(2), "x").concat(v.toFixed(2)), 0, 8, A), this.context.fillText("".concat(A.toFixed(2), "x").concat(v.toFixed(2)), 0, 8, A))), this.updateTexture()
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
                                                var b = this.context.measureText(m[A]).width;
                                                b > h ? (e += "\n".concat(m[A]), h = o - b) : (e += m[A], h -= b)
                                            }
                                            p > 0 && (e += " ", h -= this.context.measureText(" ").width)
                                        } else if (this.withPrivateMembers()._style.breakWords) e += u[p], h -= g, p < u.length - 1 && (e += " ", h -= this.context.measureText(" ").width);
                                        else {
                                            var v = g + (p > 0 ? this.context.measureText(" ").width : 0);
                                            v > h ? (l || (e += "\n"), e += u[p], h = o - g) : (h -= v, p > 0 && (e += " "), e += u[p])
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
                }(0, n.Z)(Te, "DEFAULT_TAG_STYLE", {
                    align: "left",
                    breakWords: !1,
                    dropShadow: !1,
                    dropShadowAngle: Math.PI / 6,
                    dropShadowBlur: 0,
                    dropShadowColor: "#000000",
                    dropShadowDistance: 5,
                    fill: "black",
                    fillGradientType: b.M_.LINEAR_VERTICAL,
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
                }), (0, n.Z)(Te, "debugOptions", {
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
                class Ee extends(Gt(Jt)) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "BetSettings"), (0, n.Z)(this, "bets", []), (0, n.Z)(this, "betCoins", 0), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "scrollView", void 0), (0, n.Z)(this, "bottom", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "betItems", void 0), (0, n.Z)(this, "paylines", void 0), (0, n.Z)(this, "currency", void 0), (0, n.Z)(this, "closeButton", void 0), (0, n.Z)(this, "bottomBackgroundTexture", void 0), (0, n.Z)(this, "bottomBackgroundMobileTexture", void 0), (0, n.Z)(this, "spaceKey", void 0), (0, n.Z)(this, "hasCurrency", !1), this.bottomBackgroundTexture = c.xE.from(Qt), this.bottomBackgroundMobileTexture = c.xE.from(Yt), this.overlay = this.addChild(new $t), this.scrollView = this.addChild(new ee), this.bottom = this.addChild(new tt.j(this.bottomBackgroundMobileTexture)), this.content = this.scrollView.addChild(new Y.W2), this.title = this.content.addChild(new re(this.game.i18n.t("BetSettingsTitle").toUpperCase())), this.title.withGameName(), this.title.anchor.set(.5, 0), this.betItems = this.content.addChild(new oe), this.paylines = this.content.addChild(new Te("", {
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
                        })), this.paylines.anchor.set(.5, 0), this.currency = new Te(this.game.i18n.t("Currency", this.game.i18n.currency()), {
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
                        }), this.currency.anchor.set(.5, 0), this.closeButton = this.addChild(new qt), this.closeButton.onClick.add((() => this.close())), this.spaceKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Escape), this.spaceKey.onPress.add(this.close, this), this.spaceKey.disable(), this.game.i18n.hasCurrency() && (this.hasCurrency = !0, this.content.addChild(this.currency))
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
                class Oe extends $t {
                    constructor() {
                        super(1, 13421772), (0, n.Z)(this, "name", "FastStopLayout"), (0, n.Z)(this, "handlerRef", null), this.alpha = 0, this.interactive = !1
                    }
                    press(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        "function" == typeof this.handlerRef && this.handlerRef(), this.handlerRef = this.game.interaction.clickOnce(this, (() => {
                            this.interactive = !1, e && B.to(this, .1, {
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
                class Ze extends(Gt(Te)) {
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
                class Fe extends(Gt(b.xv)) {
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
                class Re extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "content", void 0), this.title = this.addChild(new Fe(this.game.i18n.t("GameRulesAdvancedAutoPlayTitle"))), this.content = this.addChild(new Ze(this.game.i18n.t("GameRulesAdvancedAutoPlayContent")))
                    }
                    resize() {
                        this.content.position.set(0, this.title.y + this.title.height + 30)
                    }
                }
                class We extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "content", void 0), this.title = this.addChild(new Fe(this.game.i18n.t("GameRulesAutoPlayTitle"))), this.content = this.addChild(new Ze(this.game.i18n.t("GameRulesAutoPlayContent")))
                    }
                    resize() {
                        this.content.position.set(0, this.title.y + this.title.height + 30)
                    }
                }
                class Me extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "content", void 0), this.content = this.addChild(new Ze(this.game.i18n.t("GameRulesBestExperience")))
                    }
                    resize() {
                        this.content.position.set(0, 0)
                    }
                }
                class Ie extends(Gt(tt.j)) {
                    constructor() {
                        super(c.xE.WHITE), this.tint = 2763563
                    }
                    resize() {
                        this.game.device.desktop ? (this.height = 4, this.width = 1120) : this.game.device.landscape ? (this.height = 6, this.width = 1580) : (this.height = 6, this.width = 950)
                    }
                }
                class De extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "gameName", void 0), (0, n.Z)(this, "gameTRTP", void 0), this.title = this.addChild(new Fe(this.game.i18n.t("GameRulesGeneralTitle"))), this.gameName = this.addChild(new Ze(this.game.config.get("gameName")));
                        var t = this.game.config.get("trtp");
                        this.gameTRTP = this.addChild(new Ze(this.game.i18n.t("GameRulesGeneralRTP", t))), this.gameTRTP.visible = !!t
                    }
                    resize() {
                        this.gameName.position.set(0, this.title.y + this.title.height + 30), this.gameTRTP.position.set(0, this.gameName.y + this.gameName.height + 30)
                    }
                }
                class Ne extends(Gt(Y.W2, {
                    preventResize: !0
                })) {
                    constructor(t, e, i) {
                        super(), (0, n.Z)(this, "icon", void 0), (0, n.Z)(this, "text", void 0), this.name = i, this.icon = this.addChild(new tt.j(e)), this.text = this.addChild(new Ze(t))
                    }
                    resize() {
                        this.game.device.desktop ? (this.icon.scale.set(1), this.text.x = 260, this.text.style.wordWrapWidth = 740) : this.game.device.landscape ? (this.icon.scale.set(2), this.text.x = 380, this.text.style.wordWrapWidth = 500) : (this.icon.scale.set(1.8), this.text.x = this.icon.x + this.icon.width + 30, this.text.style.wordWrapWidth = 280), this.text.height >= this.icon.height ? (this.text.y = 0, this.icon.position.set(0, (this.text.height - this.icon.height) / 2)) : (this.icon.y = 0, this.text.y = (this.icon.height - this.text.height) / 2)
                    }
                }
                class je extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "content", void 0), this.title = this.addChild(new Fe(this.game.i18n.t("GameRulesInterfaceTitle"))), this.content = this.addChild(new Ze(this.game.i18n.t("GameRulesInterfaceContent"))), this.addItems()
                    }
                    addItems() {
                        this.addChild(new Ne(this.game.i18n.t("GameRulesInterfaceSpin"), this.game.loader.getAsset("gameRulesButtonSpin"), "itemSpin")), this.addChild(new Ne(this.game.i18n.t("GameRulesInterfaceMenu"), this.game.loader.getAsset("iconMenu"), "itemMenu"));
                        var t = new Ne(this.game.i18n.t("GameRulesInterfaceQuickSpin"), this.game.loader.getAsset("iconQuickSpin"), "itemQuickSpin");
                        this.game.config.get("quickSpin.available", !0) && this.addChild(t);
                        var e = new Ne(this.game.i18n.t("GameRulesInterfaceAutoPlay"), this.game.loader.getAsset("iconAuto"), "itemAutoPlay");
                        this.game.config.get("autoPlay.available", !0) && this.addChild(e), this.addChild(new Ne(this.game.i18n.t("GameRulesInterfaceBetLevel"), this.game.loader.getAsset("ex" === this.game.i18n.language ? "gameRulesButtonPlayLevel" : "gameRulesButtonBetLevel"), "itemBetLevel")), this.addChild(new Ne(this.game.i18n.t("GameRulesInterfaceWin"), this.game.loader.getAsset("gameRulesItemWin"), "itemWin")), this.game.config.get("balanceHide", !1) || this.addChild(new Ne(this.game.i18n.t("GameRulesInterfaceBalance"), this.game.loader.getAsset("gameRulesItemBalance"), "itemBalance")), this.addChild(new Ne(this.game.i18n.t("GameRulesInterfaceSound"), this.game.loader.getAsset("gameRulesButtonSound"), "itemSound"))
                    }
                    resize() {
                        var t = 0;
                        this.children.forEach((e => {
                            var i = "itemBalance" === e.name && this.game.device.mobile && this.game.device.portrait ? 12 : 0;
                            e.resize(), e.position.set(i, t), t += e.height + 30
                        }))
                    }
                }
                class Le extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "itemQuickSpin", void 0), (0, n.Z)(this, "itemFullscreen", void 0), (0, n.Z)(this, "itemGameSound", void 0), (0, n.Z)(this, "itemBackgroundSound", void 0), this.title = this.addChild(new Fe(this.game.i18n.t("GameRulesSettingsTitle"))), this.content = this.addChild(new Ze(this.game.i18n.t("GameRulesSettingsContent"))), this.game.config.get("quickSpin.available", !0) && (this.itemQuickSpin = this.addChild(new Ze(this.game.i18n.t("GameRulesSettingsContentItemQuickSpin")))), this.itemFullscreen = this.addChild(new Ze(this.game.i18n.t("GameRulesSettingsContentItemFullscreen"))), this.itemGameSound = this.addChild(new Ze(this.game.i18n.t("GameRulesSettingsContentItemGameSound"))), this.itemBackgroundSound = this.addChild(new Ze(this.game.i18n.t("GameRulesSettingsContentItemBackgroundSound")))
                    }
                    resize() {
                        var t;
                        this.children.filter((t => t.visible)).forEach((e => {
                            t ? e.position.set(0, t.y + t.height + 30) : e.position.set(0), t = e
                        }))
                    }
                }
                class _e extends(Gt(Y.W2)) {
                    constructor() {
                        var t, e;
                        super(), (0, n.Z)(this, "content", void 0), this.content = this.addChild(new Ze("".concat(null !== (t = window.RELEASE_VERSION) && void 0 !== t ? t : "", "\n").concat(null !== (e = window.RELEASE_DATE) && void 0 !== e ? e : "")))
                    }
                    resize() {
                        var t;
                        null === (t = this.content) || void 0 === t || t.position.set(0, 0)
                    }
                }
                class Ue extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "GameRules"), (0, n.Z)(this, "scrollView", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "content", void 0), this.visible = !1, this.interactive = !0, this.scrollView = this.addChild(new ee), this.scrollView.paddingBottom = 120, this.title = this.scrollView.addChild(new re(this.game.i18n.t("MenuGameRules").toUpperCase())), this.title.withGameName(), this.title.anchor.set(.5, 0), this.content = this.scrollView.addChild(new Y.W2), this.addSections()
                    }
                    addSections() {
                        this.content.addChild(new De), this.content.addChild(new je), this.content.addChild(new Le), this.addAutoPlaySection(), this.content.addChild(new Ie), this.content.addChild(new Me), this.content.addChild(new _e)
                    }
                    addAutoPlaySection() {
                        this.game.config.get("autoPlay.available", !0) && (this.content.addChild(new We), this.content.addChild(new Re))
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
                class Ve extends(Gt(Jt)) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "GameSettings"), (0, n.Z)(this, "scrollView", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "title", void 0), this.scrollView = this.addChild(new ee), this.title = this.scrollView.addChild(new re(this.game.i18n.t("GameSettingsTitle").toUpperCase())), this.title.withGameName(), this.title.anchor.set(.5, 0), this.content = this.scrollView.addChild(new Y.W2)
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
                class ze extends Kt {
                    constructor() {
                        super("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTP///////////////////////////////////////////////////////////////////////////4/JsPUAAAATdFJOUwC/XzCfgO/fIH/Pj5BwQBCvb6Aufu5CAAAAu0lEQVRYw+3X3Q6DIAyGYVEExL9tvf97nVuGybKJpLZxyb73sCHPARw0VBVCCCGE0F8XvA9aMpGO/ZB17MbRM9doyfL2tMqLPUnKNb1Vq8mC9pU+GmXkjr7Uqcki9oYsYG/Kh+2MfNDuKVvPly3tZNVkrj0bKugyM+gbFWUYNBXGoE2ZHDkLa7B25yGXAwN7oYnfBehzade+cuK0TyMPGjToM2iTo+MhOsTktGk0rgtX6aeHEEIIIfTD3QFMQUQwK1KW1AAAAABJRU5ErkJggg==");
                        var t = this.game.config.get("homeURL.url", "javascript:history.back()"),
                            e = this.game.config.get("homeURL.target", "self");
                        this.visible = this.game.config.get("homeURL.show", !0), this.onClick.add((() => this.game.openUrl(t, e)))
                    }
                }
                class Ge extends Xt {
                    constructor(t) {
                        super(), (0, n.Z)(this, "icon", void 0), (0, n.Z)(this, "border", void 0), this.preventAutoResize = !0, this.border = this.addChild(new tt.j(this.game.loader.getAsset("iconBorderV"))), this.icon = this.addChild(new tt.j(t)), this.game.interaction.click(this, (() => {
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
                class He extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "Menu"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "contentItems", void 0), (0, n.Z)(this, "bottom", void 0), (0, n.Z)(this, "items", void 0), (0, n.Z)(this, "homeButton", void 0), (0, n.Z)(this, "closeButton", void 0), (0, n.Z)(this, "bottomBackgroundTexture", void 0), (0, n.Z)(this, "bottomBackgroundMobileTexture", void 0), (0, n.Z)(this, "spaceKey", void 0), (0, n.Z)(this, "currentIndex", 0), (0, n.Z)(this, "onClickHome", void 0), (0, n.Z)(this, "onClickClose", void 0), this.visible = !1, this.interactive = !0, this.bottomBackgroundTexture = c.xE.from(Qt), this.bottomBackgroundMobileTexture = c.xE.from(Yt), this.overlay = this.addChild(new $t), this.contentItems = this.addChild(new Y.W2), this.bottom = this.addChild(new tt.j(this.bottomBackgroundMobileTexture)), this.items = this.addChild(new Y.W2), this.homeButton = this.addChild(new ze), this.closeButton = this.addChild(new qt), this.closeButton.onClick.add((() => this.close())), this.spaceKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Escape), this.spaceKey.onPress.add(this.close, this), this.spaceKey.disable()
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
                        var i = this.items.addChild(new Ge(t));
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
                class Qe extends tt.j {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16777215,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .75;
                        super(c.xE.WHITE), this.height = 4, this.tint = t, this.alpha = e
                    }
                }

                function Ye(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function Xe(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Ye(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Ye(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                var Ke, qe;
                ! function(t) {
                    t.Bet = "bet", t.Win = "win", t.Balance = "balance", t.FreeLeft = "freeLeft", t.FreePlayed = "freePlayed", t.TotalWin = "totalWin", t.FreeRoundLeft = "freeRoundLeft", t.BonusLeft = "bonusLeft"
                }(Ke || (Ke = {})),
                function(t) {
                    t.Free = "free", t.Normal = "normal", t.Bonus = "bonus"
                }(qe || (qe = {}));
                var Je = {
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
                    $e = Xe(Xe({}, Je), {}, {
                        value: Xe(Xe({}, Je.value), {}, {
                            fill: 16777215
                        })
                    });
                class ti extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "state", void 0), (0, n.Z)(this, "textBet", void 0), (0, n.Z)(this, "textWin", void 0), (0, n.Z)(this, "textBalance", void 0), (0, n.Z)(this, "textFreeRound", void 0), (0, n.Z)(this, "textFree", void 0), (0, n.Z)(this, "textTotalWin", void 0), (0, n.Z)(this, "textBonus", void 0), (0, n.Z)(this, "delimiter", void 0), this.state = qe.Normal, this.textBet = new Te("", Xe(Xe({}, Je), {}, {
                            default: Xe(Xe({}, Je.default), {}, {
                                align: "left"
                            })
                        })), this.textBet.anchor.set(0, 0), this.textWin = new Te("", Je), this.textWin.anchor.set(.5, 0), this.textBalance = new Te("", Xe(Xe({}, Je), {}, {
                            default: Xe(Xe({}, Je.default), {}, {
                                align: "right"
                            })
                        })), this.textBalance.anchor.set(1, 0), this.textFreeRound = new Te("", Xe(Xe({}, Je), {}, {
                            default: Xe(Xe({}, Je.default), {}, {
                                align: "center",
                                wordWrap: !0,
                                wordWrapWidth: 300
                            })
                        })), this.textFreeRound.anchor.set(1, 1), this.textFree = new Te("", Xe(Xe({}, $e), {}, {
                            default: Xe(Xe({}, $e.default), {}, {
                                fontSize: 30,
                                wordWrapWidth: 340
                            })
                        })), this.textFree.anchor.set(0, 1), this.textTotalWin = new Te("", Xe(Xe({}, $e), {}, {
                            default: Xe(Xe({}, $e.default), {}, {
                                fontFamily: "Avenir-Bold",
                                fill: this.game.config.get("colors.primary"),
                                fontSize: 30,
                                wordWrapWidth: 300
                            }),
                            value: Xe(Xe({}, $e.value), {}, {
                                fill: this.game.config.get("colors.primary")
                            })
                        })), this.textTotalWin.anchor.set(.5, 1), this.textBonus = new Te("", Xe(Xe({}, $e), {}, {
                            default: Xe(Xe({}, $e.default), {}, {
                                fontSize: 27,
                                wordWrapWidth: 340
                            })
                        })), this.textBonus.anchor.set(0, 1), this.delimiter = new Qe(16777215, .5), this.addChild(...[this.textBet, this.textWin, !this.game.config.get("balanceHide", !1) && this.textBalance, this.textFreeRound, this.textFree, this.textTotalWin, this.textBonus, this.delimiter].filter(Boolean)), this.game.freeRound.onStart.once((() => {
                            this.textBalance.visible = !1, this.textFreeRound.visible = !0
                        })), this.game.freeRound.onFinish.once((() => {
                            this.textBalance.visible = !0, this.textFreeRound.visible = !1
                        }))
                    }
                    resize() {
                        var t = this.state === qe.Free,
                            e = this.state === qe.Bonus;
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
                            case Ke.Bet:
                                var e = this.game.helpers.toMoneySS(t.value),
                                    i = this.game.i18n.t("StatusBarMobileBet", this.game.i18n.currency({
                                        withBrace: !0
                                    }));
                                this.textBet.text = "".concat(i, "<value>").concat(e, "</value>");
                                break;
                            case Ke.Win:
                                var s = this.game.i18n.t("StatusBarMobileWin", this.game.i18n.currency({
                                    withBrace: !0
                                }));
                                t.value > 0 || t.disableZeroCheck ? this.textWin.text = "".concat(s, "<value>").concat(this.game.helpers.toMoney(t.value), "</value>") : this.textWin.text = s;
                                break;
                            case Ke.Balance:
                                var o = this.game.i18n.t("StatusBarMobileBalance", this.game.i18n.currency({
                                    withBrace: !0,
                                    withSpace: !0
                                }));
                                this.textBalance.text = "".concat(o, "<value>").concat(this.game.helpers.toMoney(t.value), "</value>"), this.game.action.emit("balance_updated", t.value);
                                break;
                            case Ke.FreeLeft:
                                var n = 0 === t.value;
                                this.textFree.text = n ? this.game.i18n.t("StatusBarMobileFreeLast") : this.game.i18n.t("StatusBarMobileFreeLeft", t.value);
                                break;
                            case Ke.FreePlayed:
                                var a = this.game.i18n.t("StatusBarMobileFreePlayed");
                                this.textFree.text = "".concat(a, "<value>").concat(t.value, "</value>");
                                break;
                            case Ke.FreeRoundLeft:
                                var h = this.game.i18n.t("StatusBarMobileFreeRoundLeft");
                                this.textFreeRound.text = "".concat(h, "<value>").concat(t.value, "</value>");
                                break;
                            case Ke.BonusLeft:
                                var r = 0 === t.value,
                                    l = -1 === t.value;
                                this.textBonus.text = l ? "" : r ? this.game.i18n.t("StatusBarMobileBonusLast") : this.game.i18n.t("StatusBarMobileBonusLeft", t.value);
                                break;
                            case Ke.TotalWin:
                                var d = this.game.i18n.t("StatusBarMobileTotalWin", this.game.i18n.currency({
                                    withBrace: !0
                                }));
                                this.textTotalWin.text = "".concat(d, "<value>").concat(this.game.helpers.toMoney(t.value), "</value>")
                        }
                        this.resize()
                    }
                    changeState(t) {
                        this.state = t, t === qe.Free ? (this.textFree.visible = !0, this.textTotalWin.visible = !0, this.textWin.visible = !0, this.textBonus.visible = !1, this.visible = !0) : t === qe.Normal ? (this.textFree.visible = !1, this.textTotalWin.visible = !1, this.textWin.visible = !0, this.textBonus.visible = !1, this.visible = !0) : t === qe.Bonus && (this.textBonus.visible = !0, this.textTotalWin.visible = !0, this.textWin.visible = !1, this.visible = !0), this.resize()
                    }
                }
                var ei = {
                    counts: [10, 25, 50, 100, 150, 300, 1 / 0]
                };
                class ii extends st.EventEmitter {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ei;
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
                class si {
                    constructor(t, e, i) {
                        this.bigMul = t, this.giantMul = e, this.betLevel = i
                    }
                    available(t) {
                        return t >= this.bigMul * this.betLevel.toCoins()
                    }
                    type(t) {
                        return t >= this.giantMul * this.betLevel.toCoins() ? xe : fe
                    }
                }
                class oi extends class {
                    constructor() {
                        (0, n.Z)(this, "game", Lt)
                    }
                } {
                    constructor() {
                        super(), (0, n.Z)(this, "left", -1), (0, n.Z)(this, "enabled", !1), (0, n.Z)(this, "onStart", new(S())), (0, n.Z)(this, "onFinish", new(S())), this.update(this.game.server.response), this.game.server.on("response", this.update, this)
                    }
                    update(t) {
                        this.left = nt()(t, "freeRounds", nt()(t, "preSpin.freeRounds", -1)), this.enabled = this.left > -1
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
                class ni {
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
                class ai {
                    constructor(t) {
                        (0, n.Z)(this, "watcher", void 0), (0, n.Z)(this, "enabled", !1), (0, n.Z)(this, "onToggle", new(S())), (0, n.Z)(this, "onTryEnable", new(S())), this.config = t, this.watcher = new ni(t)
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
                class hi {
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
                class ri extends(Gt(b.xv)) {
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
                class li extends(Gt(b.xv)) {
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
                class di extends(Gt(b.xv)) {
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
                class ci extends(Gt(b.xv)) {
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
                class ui extends class {
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
                class pi extends pe {
                    constructor() {
                        super("GameSettingsBackgroundSounds"), (0, n.Z)(this, "name", "BackgroundSoundsCheckbox")
                    }
                    resize() {
                        this.game.device.desktop ? this.scale.set(1) : (this.game.device.landscape, this.scale.set(1.8))
                    }
                }
                class gi extends pe {
                    constructor() {
                        super("GameSettingsFullscreen"), (0, n.Z)(this, "name", "FullscreenCheckbox")
                    }
                    resize() {
                        this.game.device.desktop ? (this.scale.set(1), this.visible = !0) : this.visible = !1
                    }
                }
                class mi extends pe {
                    constructor() {
                        super("GameSettingsGameSounds"), (0, n.Z)(this, "name", "GameSoundsCheckbox"), this.description.style.wordWrapWidth = 220
                    }
                    resize() {
                        this.description.style.wordWrap = this.game.device.landscape || this.game.device.desktop, this.game.device.desktop ? this.scale.set(1) : (this.game.device.landscape, this.scale.set(1.8))
                    }
                }
                class Ai extends pe {
                    constructor() {
                        super("GameSettingsIntroScreen"), (0, n.Z)(this, "name", "IntroScreenCheckbox"), this.description.style.wordWrapWidth = 220
                    }
                    resize() {
                        this.description.style.wordWrap = this.game.device.landscape || this.game.device.desktop, this.game.device.desktop ? (this.scale.set(1), this.position.set(-300, 350)) : (this.game.device.landscape, this.scale.set(1.8), this.position.set(-400, 760))
                    }
                }
                class bi extends pe {
                    constructor() {
                        super("GameSettingsLeftHand"), (0, n.Z)(this, "name", "LeftHandCheckbox"), this.description.style.wordWrapWidth = 300
                    }
                    resize() {
                        this.description.style.wordWrap = this.game.device.landscape || this.game.device.desktop, this.game.device.desktop ? this.visible = !1 : (this.game.device.landscape, this.scale.set(1.8), this.visible = !0)
                    }
                }
                class vi extends pe {
                    constructor() {
                        super("GameSettingsQuickSpin"), (0, n.Z)(this, "name", "QuickSpinCheckbox")
                    }
                    resize() {
                        this.game.device.desktop ? this.scale.set(1) : (this.game.device.landscape, this.scale.set(1.8))
                    }
                }
                class yi extends pe {
                    constructor() {
                        super("GameSettingsRiskFeatureCheckbox"), (0, n.Z)(this, "name", "RiskFeatureCheckbox")
                    }
                    resize() {
                        this.game.device.desktop ? this.scale.set(1) : (this.game.device.landscape, this.scale.set(1.8))
                    }
                }
                i(7859);
                class wi extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "logo", void 0), (0, n.Z)(this, "progress", void 0), (0, n.Z)(this, "_tweeenProgress", void 0), this.logo = tt.j.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAADzBAMAAADTF1+6AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURUdwTP///////////////////////////////////////////////////////81e3QIAAAAOdFJOUwBovPELGCk/kVKoz+B7jzeedwAADjRJREFUeNrsnItvHEcdx/ece9hOjBwopY2K5YY2rdpgJSFuQhpOW1y1aZugK0HpI411VRInhNS65tEQESy3KIS+TpcSCBSwDIVCqHrKu0XQU0ApLaCeTB6Il6x6z4nPd+f9G9jZ3XnuvPa6ASF5FKV2erOf3Znf/Ob3+85vz7D/O+1DYxY0C5oFzYJmQf/HoNr8a9MWsKAJ49q02CzoGoIST9+4J9Q14/vnf68J0LqSbVd+GYKTes25zDtmWFCs7P7zL7Q5iaLb4fdhQE/+7OTzXje7kdMF7fYvdOy5kz/N6oF2kSv6Lk1OMk10snI6oAcp19HI6IGeoHrVTDUoUaKd1KgeqEj3OqMGPcR4w6t6I8f0qptKEHNrdlUL1Mp661EVKMX2qGiB5rDdplSglsBOktUBDbK9LBWoPwAq6IBGAt0yClBXVKBOBSgfFWhYAeqJCtQdGmRdp94gPm6HBhWDXSqXVY77IifsGQ09Rw7poJzzLV58pZqjEV6nSqcM9AluIFdQgPq4veqSbekb3B4VUwFq5QeaVVPEWSPooPIMiTS/41lRpFDif75X6b27BMGzYJpUHxeDBGMn2C6Un5Zs5eOCvrfwVmqP4MNjGqC2Mr9vnRM9bBRw/qQVBd0jmN8zwaUq+OQJUy+u6xc8UsDEHxI8UEYzgGzRnCXRDFm6kWobEaCR16oxoHby6nfgH6e1Y2989fPJIs+Wgvb5erzM7hAaoM2EayRJU7RTIDmEO65ktUFo7CZoc69QFr6eNucY93YUactu0pGssbmDQgyw53J9b1TJhQD5yY7vSb/LnWZsMhVv70mWOCmVKhED6VvlGAysy7yxwyP3R4h+LZgkqlPLbT/McjzNKCd/IHzTV49mP1JWjl3NVY7NnYkw/X8iuOhb9FK1kCCcOCKTGmJnKBpBYyhg4D0BdCSgDnaSUIo3E7FEU2IcK3KoxyMGDTIraT3PsUUBamXCmy7NFDc0KJ6mrQEO5fLIZTS4+VzxlrBgi4oA1Ed9MMaE2BGCWinf0K6rQoQHJSndYY6urtKE1FkidYchvVXUFGictO8uTVtoBjRIbklFXVmlCdAccrRKukJREyBoaEvAL2l+SBkadN/hv3/n5b8ezfAc+BVivdKu+xG31zOmLij+zcXQlN++Phj1XCVsnYiKkjecglvum0e0QE99hgyp3z/CBglTzM/ezb1KZVWfzSpBiX+xeTyMnxLEU7RRjs8X1ynN97IClOJkIh94gx7ngCa9Xps4SeJtUlAbN4Vb6RkF8UncHbRHuZLBb/igaTHHtr9gEiZNgs65sblAmniLBqVx+JwU5dj2Uv4TuTFqrCzqtYhYFBC0AlzpovgscBGeIwL0c+nd2ZUxDFpiuPfTAOb4NcmhoxOTBK2uKta2kONoRYPsTsu7oHNadrxpokWK19Fw4CQjqJ+0I1APDJ/zsi4NPK1T0DNUqYyG1xwPNRfFNEU/fP6i9LzWon1dHD7QbmmvKezzR8F+BoJAkQiC74313jVaKOC1SSyOjIFkelqi6mBPOo/Zj05LRDQcA3ah9H7Q3ZwT7Fiv/u3vSOM4x+yweXdeY7a81xi5Fc9xx4B+oPqze91E8UKa0Hy76JhhKqD0rvrHFjB9T79IakLwAYBZnGdVnWNow0u9hGODHjIfGgJ3Sx0BNQ6hjebhHmRBSWxMraBnO8/DEyeLFt4lvNi0z6IEFsc0yHws8W9odK14RbVV6UltMGcRO/wuHVSk2tLrDANhqDUmHLrJN5s+7E7ip6kxqFxiw4tdngGspcKEjk5qGOps2BW/6A1yF5F0ZPBFnHYrT6kHC62LCoIT1DBwlP5Ej2tkZTrZKdL7QUBlcJ4CqWQoCCYUcp4oHkv3Egu6wGgTDW7kuaabyJbHgjolX+bfWcBD5Wc3a1UiiEkoP5ng2RQ/AI8TjrrGKImWOK3qYeVOrDhOqI+Bp5jBPq2MbHEk16E6TCBV5ON0wi1RdTYHZIU+DUUjT9/LenVJAfa5hYByO6oehgbDFZ9Pol2xHpAD6qZaQJqgu0gS356A1hlTD0MqTY836nJe/UBY3JqrFhrwNp+juzgj94BCgMTKzxAxlnu5vXBUVaNzU+CW88O8LgfsoIXlsbknVmelJgeP4caxt0zZVlai1ZHZPiENtXAtfGPgGK6Eu6zleVUi5gUj9wjtHnOuLzrL8anU2UmBkI/83eMtdoKIwBKY6a8Cgg1YYwclh5mOkSV7sdHVofu6TXw+7cxgW52yoGl/K2DO08l8DgxDywTeJycQ8wThidrInNFyvXiGPDRbDpmUgv8wGY2CpTdew3HhFfyjBXPxxA+ocO+8u3QL5B4xin9cCUvRUhfYE9kUGK9+bAvIZdjLXj76zLbD/ywHip46/BU6jtce3p7//OzRgX2Hn0uzwTTQ50109TFFPuGlAiO+c+hB2UxcUc457H06h0KMHI4kBJlLxlP03by1jCxIEefP+CbaiR7DxIYuPobdCTNx7Idb5b06/XEehkPcUN0bMDl3W2K0oLnSXtPQa49Cx2BRrkYw1htZiWaaU0xFDXcOxn/dcLSrzLEq2z6PvPg0LUD1y3rdirahc9A7Vin3FBy4jD9DxGh4wyhLSZfilYBAwDq+LM7+wZymygHlZJI6agzcXRbriUsoLejHoi4HicNLVgtKiJafm5fAzIsWneICdeJ1Q6AFuYlzssgfhUsSdSt+k5gjVre4pMYluTD4SrDHtw1Kr2PniF/rZB1RSZ1PMYLDqgITSDPm7bVXGYt9J6vWVJMLiE71Q6aWpmrc/yJ5c9frydGJn7zhaV63f8oMBrikSkz2uv+Gxe4d3v3m90MI7PEN2wa+wj/XmSTmq8r2GhjIfGQlfy4pb5aZUDzKI4MvkVEx3viiB42QFXp53QLJJkDUtUfousAoQSi7ocKtJdGD2qjsbR6nNiQiUAtl0a2coqaIQIPUM6D4Ihs5qEidWaMZG40alGSS8KLmQWxoUAuTuo9oTlJoUBctGSCzk+gmTYGQjDPD5pu90YLQyC1n168VLShvsz4n+C9RgNqCxVv9tpZzCAkaCZbFttq2jgcPB8IiyPKgk3XD8uZBD7xwx/McVbMzaPDEIz3mdDLDgdwTT6ia43ymztnascnvIM5SNUF+YuHJvwkciN7FLRzziwTXcK8kB+XJEtgDgvrRcTrfQgcpw/qgVjKffJxfUksV6NYyRKJU1Qd1EQnlJiJufVcgtLpnz3mubCwFYcu1r24ng+qcQDMFNjBg2zz3JwURWXOFTbG5/oL55IwuaJ5EMzD4Q8we2uqBhsQiiFCbpFpOD7RL0H1MXJTEZmE5HZDo9HtCptWzp/GmGiQ8Yu6U7fA84UgBEtXZr1Co9XRr4j2+YMGwSHWm2qgKlNK3BKk9NPEen9veEx91lEV1CXLQoKSMht/W8acpqwBxzaiWke3Wj8uMNNQ7YjVFyrBDJCQaoV6vs1cqywK3p7lFEyFBJ5SZNyPd64GKMg9pqI/z2IX0v3/XciQqUEEB6oto6Jp4jy+jA+rnVFMpShNZS63rcIJ6fvj3+PS+TyEm2r303+NbrgWKpwXxhf57fJ1aIHYgxjRAtN+v6XGYg433tKKge0g3dIsmiKqVutnUDIn337jnABvOqJofPDX27J+/J0zG5yVF9YKh3X5EpEphctjEhbT9ds4I0b5espddbiZZjptGyHZvJJpqc20WFB2ovvDatDtZ0LVus6BZ0CxoFhQedPfCxWRAffJOMn5rLKR+/cvCUzqgLThhmVoHr/Q3IP2i+KbmRB1J9N0plWMmWQtlfdL57JPeZ+sDG7b6fzYFQBn8VvUo9O2XqEDPf2Ec5u2XqXowvzDP+82SbBO2icPnbIwWAjdSErGfoZylhN5KgbywHIQq+qpQWhzz4w0/w3Cudd8WmBOiamAv6gY3Ed8KSyylIJy19fogJ2FJvGQvK/iBdd0NEm++16Oedi684NTq23MxOKqbSu7344C+lV87LWe0O3+/wQG1oAC9DY7cTi+l6vMTBBBULkOnLm6BSuNFPxBwNXkggOdRdjCHZ3UVdF7YMH3QpF8fWfBSmWmy8GyaLgjqhknIClzULQb59zINJa5uH3jc++8UWUV2nBYKcnBanSeNyUENVL18HL/10+6XMyX94SkSWVMbnX6uRfJCXA2KwSw86c/VPJsYsxr5TQ0mlbXOUO8G9EhBdViyWkOnu/CTE15JEKjOhKJPndbbprC0M4NSRiHIielH3BWRRKCPQVAaCrL+l63U6FzyCq42xP9HDBpzDXzYeNSfdRbkvoXhvYFXpVPdD1EZFFirI1KQZcR7wZNUTOMFAciuZmDWHgDFCbtQgqrAwCeMZM3vFgDZq2ABYJUeuklcxKzzRHbWcQHnjHZLCLLr13mPZNHqz1Vc+qw0BvAY3Y6BF4xByx/xTiO1D7S9GAS+RSrhLe95tLoyHjBACWjKiJ90ViUGBaq7XR9TchdbBy1GrEcuA4ooAlDVuVNnIo+C4nL/wlxQzfMPw9TbR3YGcXMqFwRArpjXQoCSA6Bt4YCu0N+TOAzdE1G4KgOdc7XEmr/8GGOo7CDmwELHs3/w970H4V45rgGacN2QxQdVje1lUEAZh+MK3h+uH0rBwxXwjWKLiMMNAWgGgCruVmT5xsqAHBtO7MtC1+vmvBu2wsI0IBk99mlQjrhZB+Q5bAEIvmGwmRHKxqlTH1woIAX1ggVv+UuBAS31whH4vij8Xra4t10uDbwqIABNuKAqqP8XgOz3gVNNoiu5EaORggWdH2TI3yRb+ef+M2MQtQhEQJhAyg5ZCsjQuNuFPGq4q/fGakTCf7OiA2WVPEz7aLdl1KJRi0YtGkEWAQAla4PxKoWGqwAAAABJRU5ErkJggg=="), this.logo.width = 207, this.logo.height = 243, this.progress = new p.TC, this.progress.beginFill(16717864), this.progress.drawRect(0, 263, 207, 4), this.progress.endFill(), this.progress.scale.x = 0, this.addChild(this.logo), this.addChild(this.progress), this._tweeenProgress = new B(this.progress, .5, {
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
                const fi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACHUExURUdwTF3XDV3aCl7YDVzQF13ZDGDXC1X/AFXUAF7YDGDYDl7XDV3YDV7YDV3XDF3XDF7YDFzYDF3XDF3YDV3YDF7XDV3YDF7XDV3XDF7WDF3ZC13YDVjSC13YDV7YDF7XDV3XDV/fD13XDV3YDVzUDmDbCF3YDV3XDF3YDF7ZDF3XDF3YDV7YDQaFSaEAAAAsdFJOUwB1MfkLKS0DBvQ1qNKtaMrsY9znVda5w6F5RIYXXYyCzxDiviQdmPBPPo5wBc1wAAAAA81JREFUWMO9WemaqjAMrbIvIosLMOi466jv/3x3pm1AoKUty+0v/WhDSU5OTlOEhMMyV1m69eNQ08LY36bZyrTQ4DHPNvd3a9w32XyQ1efpzR2nZ0/b1m75FozlTt0ndhC/JUYc2Gq7jZKaR/dRbhQ6Qnph5NG+5vUkUti1eyjXaZuX0Z5gvDZaOeXgynphXzkxOPJmHYMqBHspfxg+zPcEW3E9mOkbYrsrB8xKTDbAtLMSTf2mM9e5nN/yNV3w3Y2GlIYsk0aRndEwph3osBcUna4KNl2K+AV3Mxa1uziqJdMR1vH2nMp4qysyKfvpF3ka9CGWgKz9YuKMPIv6UdaOrGagznD677fas9MCv+3zv0VuEE/6TWgQfvCGlAWShfsGFkm66UMM6yQJazlgYZ7UzGH10cQ5ePhEc4TflQ2tvLMmrvSE6Xf1MokRkOiNN/0MFws/2NCshBre8AKNMDBrJHYta+ZjGDZrXsbFa4PQaFte0mTu62FjG7a4gSSEUXGer273cmKxzqFi3rgWSelxxeu0BwvLMVZ+ePNXVbsFraJJ830lEl5/P7aqdo+gPpbNJ1tI4kUfT+ggg05XZl6ff9Mw7AFi/QyS8NIW1ZjwLQJpR03n2htqN2TwoYVLkUnS7qzGNSCs7kz9gb9mRyrKTclwCoKNnVQ3UuM85dg9QTrnHazsEXQ8lItmx6IHwe+aCworZwnZDOzuuGctXD4RRtuFHSLGx77ALl+AXDBeEAZHwQm90wx7BHY7olLgwCI8TefEtgnU1VtCZut4BtI4hu+MlH3AUWmPxIZDjitucESsnuVwPOmGPXXFiRO8kmaWIMNdsJt2EwANns+DW0mMZ1J0TTiPLgTEQuHGT5Br/GnJCOm/jUjX0ATpSOlLWPn0Ag2GrVA40pTuIiEXvn5vxE2P8wcloU7azLVGG8EvxGRCabOb6FeN9oSEXSB6QWkKat0amVoOpUlUTLOPnsdFWiSfJco/pCCzwDFGWf6FgiXtKnBt9FfSVSSxSE12JFVjJbHEovCPNjTJ/gURhV+SMrbYJrJV8VPGTia8ab2Z4Kgw2eFmsuMYHCAHd4XJyfnjAEm9PBtquHXkne6QPllbASTkCI2Q5/9q3SBznGaTya1Cu7HbY9M19KZrQZZNU08Rdbon0l7Q5l0rZYrpi9q8H43pmXxjegaNaVvGW2O30tF0zf/KZb+mBUVlXl1XSAVlqgsWNNmVEGpeYoXNS6yw7yXWH+hlr93UKXyii0IS9kmuNmkcs7PTNuqcMxcNHuT6eB3+vsAJ17LXx/8A6kQS8eozSXoAAAAASUVORK5CYII=",
                    xi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACcUExURUdwTP8gIP8hIf8gIP8hIf8hIf8fH/8jI/8gIP8AAP8hIf8iIv8hIf8XF/8qKv8fH/8iIv8hIf8gIP8hIf8hIf8hIf8gIP8fH/8hIf8gIP8hIf8gIP8iIv8hIf8gIP8gIP8hIf8gIP8hIf8fH/8hIf8gIP8gIP8hIf8fH/8iIv8hIf8jI/8eHv8fH/8iIv8gIP8hIf8fH/8fH/8hIT5bvnQAAAAzdFJOUwDS9GXk5ykk4gODLM4LBjF4qXXWrrn6GDbcwY5pxl+kVPnuCInrJ59BHkUzEXA8TplYEFU3kgwAAAO2SURBVFjDxZlpm6IwDIADDFgGYXAQFTzxvubk//+31baIHL1g2e0nH0lfQpomaQogHLaz8g+xFq2TZB1p8cFfOTa0Hm9+qKeVoYf+WyvqFKXMgaYN2fainwpGf6Fuk80sSiVGNNuoaWuYT7PX4dY4W2MXwB1bZ2Mbrp8emoaC1pPcCKPww6oKWB/hKDfIRBLrTR9z5saVJXU15g+xqSfDtbRMfiBQ5TLI1NYsMXeVue1gLxbeDzLHXolEX6lkcJSz2zGgE1753nCgS+Z7sgvt+dQeB453eEPqnRcV37xQjx8ylbEpd/Crtpl+qaWHLJ2XMtbircyS+3TWJLDMODqtyLNFs5C1ILNrvM7Sm+ub66xXdopH9tu2efDekj1Ydg0SHwZt0gLxjWkpnmEvD9w2YBdvwlEhwNg4TiZOu/zoJDiKPnuzgb/Cb5t5fYwxnj7CrLP7VUwqidjYA8zcoO/4TZ8FobOZaj0+tqel5rnwzycGvT9cDSs8LL58d8/wXHLv5a5eMT7gaGN6hV1TrBLGpHboCbhpOi6uX8HKOHmFpXmagEy5/Tpnpn/uscSxfiKLTB+/lB9P8N/7PKpprKn1ZBYXoJ9HuaiwklJkNpd4WIQrPyxzAgVyDzG5cHp4wsf9R8wzZJnM4wLE2SYeMizBJPO5xBY3H7PXVSfmkgVcYlrdJi6t2yBLFnHBxqnIgR+2ievIQi418oJ48TdIkiW48E08eclZu4KSd7IMl6zekgSKL5AiS3HhC1fWEPCcokSW4hK3COAed1OBaEaW4kLvLrUDvRpUuWQhl4RyHbC0OO1nZDEXXCwIiRoYSYPXiqZAsqZAqouHJBdPU3A3U4pM3S1W2CCWFJluEKUtLUWmW1ochNATTIZMg5AwbKICSoJMw6Yo0KMSSEjOAr0gNaEKRkTOUhM/maIaiICcJVNu+ke1CD75kf45BQtiAHjkvGBhl1iIOT0jn3glFrMoRJwPZpOfisJGZSwlRydOGUteolp4U/KcU3jTw5jqUYGSXc5RoeHhBpMRcA43TY9jlpbujrzjWHaALAYMW5ivbgYrTemXDpCdHXm7O6R31lborhECm7/Vuqk0qp2WzSay/rrz79pj3TX0umtB5k1TRa9zRU3TR5s3UNopjiZq8+aN6USlMZ3QxrT3P1rpt/HTrPn/I2+ydLQUdNQvy8d1hdSibNQvWGQvnDq6EoLuLrGgs2s3rHU3F4Vk2flXmxdoMSZ+XHcZG/sTaD3w9fE82N1eoO+CueT18R9RSEyQxPodRgAAAABJRU5ErkJggg==",
                    Si = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACcUExURUdwTAOr8AOr8AOr7wSr7wWr7wWt7QC//wCq4gSr8AOr7wSt8ASq7wSr8ASq7wCv7wSr8AKr8ASq7wOq7wSq8ACm8wan8gOq8AOr8AWq7wOr8AKr8QSr8ASr8ASr7wOs8Aaq8QSr8AOq7gSq8AOr8ACq7gOr8AOr8ASr7wWq7wSq8AOq7wSs7gOr7wSq7wen8AOr7wSr7wSs8gSr8NIVJa4AAAAzdFJOUwDS34T6MSwECfTYNXXu5hCuVrnLZxcpjs9jmVy9q6hEJ3pOeIkew5+kYGrFPoBwI5PqOwkKd94AAAPzSURBVFjDtVnblqowDC2IgAioeFe8DV5mdNSZ4///24GkCKhtgwx9cq2mMSQ7O2nKmHJZZi867DXdMwxP1/aHqGdarPJqbsLW7Wm1wk2zktaxfhMuffymbmvevylWf17eJ/ZRvxGWfrTLWTv1c6e9YDtdjYaxCns4Wk23gZfb9KclrG5P7ueM4DJ6FhhdAuMuMmlTvTDOnDjoiKQ6gywEY5I/Rloqv1SY0l6mZmsjtd5eCtvlWi28XqbA7qlEz1zSWdH8tnL4gbMcDQcesogcaivi/jhIjlhdjs52GWy2OeK7Qs3WAiUWnXLJ1FkoNH/ifqN8+jfw5Kd0d/AOsQwkNvVw7+s9yvrC0y9QN0L8Ht+l2CPi+SlTbMy37fvkvcUcfMxu5IdFlbKA2Bg/YBFQ7nSqKO5AEhqFHLCAJw1TzHgfP6Hje05w/hZrNsG6SR7NU/iKSHRi95Ojdk2MmwgEpjl7oF5ogsSxG0axHgVDUeoCAvwsfi7ICz5yrT1VOkek+Ru23fsfgcFdgRWvimoocgawmJ9++hyEm1Lk38LNV28wS30t4nWz4GUoXoGQ8xLEzHbc3zNeDKVg5rtrmYcTK5x9Dps/qFnk5X+wu85YTSN3MuiND9H+JGM5vRBJ5erKSRAQpkPnB4I7suKZXPHujoRL8mPPSlosdAXbJ9ubVJDuCQT9TdyhuBzolicD8fNC0PviWg+ubVkI6Ra5jdj5qvbEglJkogVkF3eQODwZcYeJxBxRPCPqvTryjM5g08Bmghi7D4/SebjYYpzk4Mk7j2czYEn294nMiTlUUNgBvziorABYOOw3Iw354q1w/6oMRCL2y1oyrso3wrzxU98KhgBgBuKEso8OXhIAb4MkM4iKoSVvURoPrtgjumKMsSYs7gpg46ta3JU0wC+DpxHhNlffYIpw2xMTZIUMQMlPdBo1pXezeFHwnjqtFAnRa1cDfRf+pWJOmyWJnsBVnOjLliYaKBJLSxZTWuzCN8q/at3LP7Vhsa5Dit6sYSG2WJeYuPtNoid0elO4wfuhqVScawpVbSyUfT536ar05ttYReOdrx8xG1Jukf3CZaypJBaCYrMwQJBebjh58xtZQDE4u4+5ai/jFdxoUzzsEi+Q+FXnOHzatwLqk4cLJB+QRPIaaSqTKHoa0Sgv6aT14pKejhXsKnpt51UY/mAQsnw1CKlvdMPMisOmgZBM6hqP1TfQq28EeR/G/vnQtLYxb32DaVZhlK6MTF3D/zhT0nGYsVQU5Wb2XEGir9wDy0n2wHIq+cDCansSYvU9YrHant3A6noeCjHstTxt8jiKHmPbrPKyzN7mcHJ+4z9oec7psCE9H/8H7cYwlvfLO08AAAAASUVORK5CYII=",
                    ki = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAwUAAAFkBAMAAACDfIqcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURQ0NDf///////xEREREREf///////6uZoDAAAAAHdFJOU8whHsC+BBX9xfwkAAACKUlEQVR42u3RQQ2DUBRFwWcBBwULGGiDgc+CPZDg3wJpAA03IXMknKllH5TsaDV3ytZqMyHcWr0J4T4MGOgymEal+t0G31IqBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAgAEDBgwYMGDAgAEDBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgwYMGDAgAEDBgwYMGAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzEgIEYMBADBmLAQAwYiAEDMWAgBgzE4M0G06hUj4GiMWCgv8FmQri1ZhPCtVr2QcmOdgK51GPO7vMFjAAAAABJRU5ErkJggg==";

                function Bi(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }
                class Ci extends b.xv {
                    constructor(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        super(t.toUpperCase(), function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? Bi(Object(i), !0).forEach((function(e) {
                                    (0, n.Z)(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Bi(Object(i)).forEach((function(e) {
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
                class Pi extends(Gt(tt.j)) {
                    constructor(t) {
                        var e;
                        super(), this.texture = null !== (e = this.game.loader.getAsset(t)) && void 0 !== e ? e : c.xE.EMPTY
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
                class Ei extends b.xv {
                    constructor(t) {
                        super(t, function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? Ti(Object(i), !0).forEach((function(e) {
                                    (0, n.Z)(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Ti(Object(i)).forEach((function(e) {
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

                function Oi(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }
                class Zi extends b.xv {
                    constructor(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        super(t.toUpperCase(), function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? Oi(Object(i), !0).forEach((function(e) {
                                    (0, n.Z)(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Oi(Object(i)).forEach((function(e) {
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
                const Fi = class extends Nt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupFreeRound"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "icon", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContinue", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new $t, this.content = new Y.W2, this.icon = new Pi(fi), this.icon.anchor.x = .5, this.title = new Zi(this.game.i18n.t("PopupFreeRoundStartTitle")), this.title.anchor.x = .5, this.message = new Ei("", {
                            wordWrap: !0,
                            wordWrapWidth: 600
                        }), this.message.anchor.x = .5, this.actionContinue = new Ci(this.game.i18n.t("PopupActionContinue"), {
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
                const Ri = class extends Nt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupMaxLimit"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContinue", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new $t(.7), this.content = new Y.W2, this.background = new tt.j(this.game.loader.getAsset(ki)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new Zi(this.game.i18n.t("PopupMaxLimitTitle")), this.title.anchor.x = .5, this.message = new Ei(this.game.i18n.t("PopupMaxLimitMessage"), {
                            wordWrap: !0
                        }), this.message.anchor.x = .5, this.actionContinue = new Ci(this.game.i18n.t("PopupActionReload"), {
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
                const Wi = class extends Nt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupNetworkError"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "icon", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionReload", void 0), (0, n.Z)(this, "_resolver", null), this.overlay = this.addChild(new $t), this.content = this.addChild(new Y.W2), this.icon = new Pi(xi), this.icon.anchor.x = .5, this.title = new Zi(this.game.i18n.t("PopupNetworkErrorTitle"), {
                            align: "center"
                        }), this.title.anchor.x = .5, this.message = new Ei(this.game.i18n.t("PopupNetworkErrorMessage"), {
                            fontSize: 36
                        }), this.message.anchor.x = .5, this.actionReload = new Ci(this.game.i18n.t("PopupActionReload"), {
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
                class Mi extends Nt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupQuickSpin"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionEnable", void 0), (0, n.Z)(this, "actionClose", void 0), (0, n.Z)(this, "escKey", void 0), (0, n.Z)(this, "enterKey", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new $t(.7), this.content = new Y.W2, this.background = new tt.j(this.game.loader.getAsset(ki)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new Zi(this.game.i18n.t("PopupQuickSpinTitle")), this.title.anchor.x = .5, this.message = new Ei(this.game.i18n.t("PopupQuickSpinMessage"), {
                            fontSize: 35,
                            wordWrap: !0,
                            wordWrapWidth: 600
                        }), this.message.anchor.x = .5, this.actionEnable = new Ci(this.game.i18n.t("PopupActionEnable"), {
                            fill: 10066329
                        }), this.actionEnable.anchor.x = .5, this.game.interaction.out(this.actionEnable, (() => this.actionEnable.style.fill = 10066329)), this.game.interaction.hover(this.actionEnable, (() => this.actionEnable.style.fill = 16777215)), this.game.interaction.click(this.actionEnable, (() => this.hide(!0))), this.actionClose = new Ci(this.game.i18n.t("PopupActionClose"), {
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
                const Ii = class extends Nt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupRestore"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "icon", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContinue", void 0), (0, n.Z)(this, "resolver", null), this.overlay = this.addChild(new $t), this.content = this.addChild(new Y.W2), this.icon = new Pi(fi), this.icon.anchor.x = .5, this.message = new Ei(this.game.i18n.t("PopupRestoreMessage"), {
                            wordWrap: !0,
                            wordWrapWidth: 320
                        }), this.message.anchor.x = .5, this.actionContinue = new Ci(this.game.i18n.t("PopupActionContinue"), {
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
                const Di = class extends Nt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupRiskNBuy"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionYes", void 0), (0, n.Z)(this, "actionNo", void 0), (0, n.Z)(this, "escKey", void 0), (0, n.Z)(this, "enterKey", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new $t(.7), this.content = new Y.W2, this.background = new tt.j(this.game.loader.getAsset(ki)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new Zi("RISK FEATURE"), this.title.anchor.x = .5, this.message = new Ei("", {
                            wordWrap: !0,
                            whiteSpace: "normal",
                            breakWords: !0
                        }), this.message.anchor.x = .5, this.actionYes = new Ci(this.game.i18n.t("PopupActionYes"), {
                            fill: 16777215
                        }), this.actionYes.anchor.x = .5, this.game.interaction.out(this.actionYes, (() => this.actionYes.style.fill = 16777215)), this.game.interaction.hover(this.actionYes, (() => this.actionYes.style.fill = 10066329)), this.game.interaction.click(this.actionYes, (() => {
                            this.hide(!0)
                        })), this.actionNo = new Ci(this.game.i18n.t("PopupActionNo"), {
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
                const Ni = class extends Nt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupSound"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "icon", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContainer", void 0), (0, n.Z)(this, "actionYes", void 0), (0, n.Z)(this, "actionNo", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new $t, this.content = new Y.W2, this.icon = new Pi(Si), this.icon.anchor.x = .5, this.message = new Ei(this.game.i18n.t("PopupSoundMessage"), {
                            wordWrap: !0
                        }), this.message.anchor.x = .5, this.actionContainer = new Y.W2, this.actionYes = new Ci(this.game.i18n.t("PopupActionYes"), {
                            fill: 16777215
                        }), this.game.interaction.out(this.actionYes, (() => this.actionYes.style.fill = 16777215)), this.game.interaction.hover(this.actionYes, (() => this.actionYes.style.fill = 10066329)), this.game.interaction.click(this.actionYes, (() => this.hide(!0))), this.actionNo = new Ci(this.game.i18n.t("PopupActionNo"), {
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
                const ji = class extends Nt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupSpendingBudget"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContinue", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new $t(.7), this.content = new Y.W2, this.background = new tt.j(this.game.loader.getAsset(ki)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new Zi(this.game.i18n.t("PopupSpendingBudgetTitle")), this.title.anchor.x = .5, this.message = new Ei(this.game.i18n.t("PopupSpendingBudgetMessage"), {
                            wordWrap: !0
                        }), this.message.anchor.x = .5, this.actionContinue = new Ci(this.game.i18n.t("PopupActionContinue"), {
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
                const Li = class extends Nt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupUnexpectedError"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContinue", void 0), (0, n.Z)(this, "_resolver", null), this.overlay = new $t(.7), this.content = new Y.W2, this.background = new tt.j(this.game.loader.getAsset(ki)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new Zi(this.game.i18n.t("PopupUnexpectedErrorTitle")), this.title.anchor.x = .5, this.message = new Ei(this.game.i18n.t("PopupUnexpectedErrorMessage")), this.message.anchor.x = .5, this.actionContinue = new Ci(this.game.i18n.t("PopupActionReload"), {
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
                class _i extends Nt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupWilds"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionEnable", void 0), (0, n.Z)(this, "actionClose", void 0), (0, n.Z)(this, "escKey", void 0), (0, n.Z)(this, "spaceKey", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new $t(.7), this.content = new Y.W2, this.background = new tt.j(this.game.loader.getAsset(ki)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new Zi(this.game.i18n.t("PopupWildsTitle"), {
                            fontSize: 40,
                            wordWrap: !0,
                            wordWrapWidth: 600,
                            breakWords: "ja" === this.game.i18n.language || "cn" === this.game.i18n.language,
                            align: "center"
                        }), this.title.anchor.x = .5, this.message = new Ei(this.game.i18n.t("PopupWildsMessage"), {
                            fontSize: 35,
                            wordWrap: !0,
                            wordWrapWidth: 600
                        }), this.message.anchor.x = .5, this.actionEnable = new Ci(this.game.i18n.t("PopupActionYes"), {
                            fill: 10066329
                        }), this.actionEnable.anchor.x = .5, this.game.interaction.out(this.actionEnable, (() => this.actionEnable.style.fill = 10066329)), this.game.interaction.hover(this.actionEnable, (() => this.actionEnable.style.fill = 16777215)), this.game.interaction.click(this.actionEnable, (() => this.hide(!0))), this.actionClose = new Ci(this.game.i18n.t("PopupActionNo"), {
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
                const Ui = class extends Nt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "PopupZeroBalance"), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "message", void 0), (0, n.Z)(this, "actionContinue", void 0), (0, n.Z)(this, "resolver", null), this.overlay = new $t(.7), this.content = new Y.W2, this.background = new tt.j(this.game.loader.getAsset(ki)), this.background.anchor.set(.5), this.background.interactive = !0, this.background.name = "PopupBackground", this.title = new Zi(this.game.i18n.t("PopupZeroBalanceTitle")), this.title.anchor.x = .5, this.message = new Ei(this.game.i18n.t("PopupZeroBalanceMessage"), {
                            wordWrap: !0
                        }), this.message.anchor.x = .5, this.actionContinue = new Ci(this.game.i18n.t("PopupActionContinue"), {
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

                function zi(t) {
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
                var Gi = {
                        background_normal: .4,
                        background_free: .2,
                        big_win: 1,
                        giant_win: 1,
                        win_normal_1: .5,
                        win_normal_2: .5,
                        win_normal_3: .5,
                        spin_start: .5,
                        spin_fast: .5,
                        click_normal: .1,
                        wheel_stop: .7
                    },
                    Hi = {
                        get: t => Gi[t],
                        set(t, e) {}
                    };
                const Qi = [...[{
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
                            volume: Hi.get("background_normal"),
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
                            volume: Hi.get("background_free"),
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
                            volume: Hi.get("background_normal"),
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
                            volume: Hi.get("background_normal"),
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
                            volume: Hi.get("click_normal"),
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
                            volume: Hi.get("spin_fast"),
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
                            volume: Hi.get("spin_start"),
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
                            volume: Hi.get("wheel_stop"),
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
                            volume: Hi.get("giant_win"),
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
                            volume: Hi.get("big_win"),
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
                            volume: Hi.get("win_normal_1"),
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
                            volume: Hi.get("win_normal_2"),
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
                            volume: Hi.get("win_normal_3"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/bonusModificatorUpdate.mp3",
                    name: "bonusModificatorUpdate",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: Hi.get("win_normal_3"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/bonusMultiplierUpdate.mp3",
                    name: "bonusMultiplierUpdate",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: Hi.get("win_normal_3"),
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
                            volume: Hi.get("win_normal_3"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/bonusVars.mp3",
                    name: "bonusVars",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: Hi.get("win_normal_3"),
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
                            volume: Hi.get("win_normal_3"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/bonusWinSymbol.mp3",
                    name: "bonusWinSymbol",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: Hi.get("win_normal_3"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/scaleDown.mp3",
                    name: "scaleDown",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: Hi.get("win_normal_3"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/scaleUp.mp3",
                    name: "scaleUp",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: Hi.get("win_normal_3"),
                            loop: !1
                        }
                    }
                }, {
                    url: "assets/audio/wildTransition.mp3",
                    name: "wildTransition",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"],
                        audioMetadata: {
                            type: "effects",
                            volume: Hi.get("win_normal_3"),
                            loop: !1
                        }
                    }
                }], {
                    url: "assets/images/background/bgln.png",
                    name: "bgln",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/background/bglf.png",
                    name: "bglf",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/background/field.png",
                    name: "field",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/background/frame.png",
                    name: "frame",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/background/gridNormal.png",
                    name: "gridNormal",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/background/gridBonus.png",
                    name: "gridBonus",
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
                    url: "assets/images/background/board.png",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/labels/textBonusWin.png",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/labels/textTotalMultiplier.png",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/background/logo.png",
                    name: "logo",
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
                    url: "assets/images/scale/bg.png",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/scale/frame.png",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/scale/scale.png",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/bigWin/skeleton.json",
                    name: "effectBigWin",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/giantWin/skeleton.json",
                    name: "effectGiantWin",
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
                    url: "assets/images/effects/symbolsMagic/skeleton.json",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/bglnBack/skeleton.json",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/bglnFront/skeleton.json",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/bglfBack/skeleton.json",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/bglfFront/skeleton.json",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/frameBonus/skeleton.json",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }, {
                    url: "assets/images/effects/scale/skeleton.json",
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
                }, {
                    url: "assets/images/introScreen/texture.json",
                    metadata: {
                        platform: ["phone", "tablet", "desktop"]
                    }
                }];
                var Yi = 90;
                const Xi = {
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
                                y: Yi
                            }, {
                                x: 1540,
                                y: Yi
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
                        x: 224,
                        y: 224,
                        width: 224,
                        height: 224
                    },
                    slot: {
                        reels: 5,
                        rows: 4,
                        size: [5, 4],
                        bonusSize: [20, 1],
                        symbolsPositions: [
                            [
                                [0, -224],
                                [0, 0],
                                [0, 224],
                                [0, 448],
                                [0, 672],
                                [0, 896]
                            ],
                            [
                                [224, -224],
                                [224, 0],
                                [224, 224],
                                [224, 448],
                                [224, 672],
                                [224, 896]
                            ],
                            [
                                [448, -224],
                                [448, 0],
                                [448, 224],
                                [448, 448],
                                [448, 672],
                                [448, 896]
                            ],
                            [
                                [672, -224],
                                [672, 0],
                                [672, 224],
                                [672, 448],
                                [672, 672],
                                [672, 896]
                            ],
                            [
                                [896, -224],
                                [896, 0],
                                [896, 224],
                                [896, 448],
                                [896, 672],
                                [896, 896]
                            ]
                        ],
                        layout: {
                            blur: [{}, {
                                textureAtlas: "symbols_static",
                                assetName: "wildBlur",
                                animation: {}
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "wolfBlur",
                                animation: {}
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "bearBlur",
                                animation: {}
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "foxBlur",
                                animation: {}
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "lynxBlur",
                                animation: {}
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "aBlur",
                                animation: {}
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "kBlur",
                                animation: {}
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "qBlur",
                                animation: {}
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "jBlur",
                                animation: {}
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "tenBlur",
                                animation: {}
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "wolfFigureBlur",
                                animation: {}
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "bearFigureBlur",
                                animation: {}
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "deerFigureBlur",
                                animation: {}
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "foxFigureBlur",
                                animation: {}
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "lynxFigureBlur",
                                animation: {}
                            }, {}, {}, {}, {}, {
                                textureAtlas: "symbols_static",
                                assetName: "empty1Blur",
                                animation: {}
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "empty2Blur",
                                animation: {}
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "empty3Blur",
                                animation: {}
                            }],
                            default: [{}, {
                                textureAtlas: "symbols_static",
                                assetName: "wild",
                                animation: {
                                    assetName: "symbolAnimation",
                                    effectName: {
                                        normal: "win",
                                        spin: "wheelStop",
                                        idle: "idle"
                                    },
                                    skin: "wild"
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "wolf",
                                animation: {
                                    assetName: "symbolAnimation",
                                    effectName: {
                                        normal: "win",
                                        spin: "wheelStop",
                                        idle: "idle",
                                        hydraTransform: "hydraTransform"
                                    },
                                    skin: "wolf"
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "bear",
                                animation: {
                                    assetName: "symbolAnimation",
                                    effectName: {
                                        normal: "win",
                                        spin: "wheelStop",
                                        idle: "idle"
                                    },
                                    skin: "bear"
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "fox",
                                animation: {
                                    assetName: "symbolAnimation",
                                    effectName: {
                                        normal: "win",
                                        spin: "wheelStop",
                                        idle: "idle"
                                    },
                                    skin: "fox"
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "lynx",
                                animation: {
                                    assetName: "symbolAnimation",
                                    effectName: {
                                        normal: "win",
                                        spin: "wheelStop",
                                        idle: "idle"
                                    },
                                    skin: "lynx"
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "a",
                                animation: {
                                    assetName: "symbolAnimation",
                                    effectName: {
                                        normal: "win",
                                        spin: "wheelStop",
                                        idle: "idle"
                                    },
                                    skin: "a"
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "k",
                                animation: {
                                    assetName: "symbolAnimation",
                                    effectName: {
                                        normal: "win",
                                        spin: "wheelStop",
                                        idle: "idle"
                                    },
                                    skin: "k"
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "q",
                                animation: {
                                    assetName: "symbolAnimation",
                                    effectName: {
                                        normal: "win",
                                        spin: "wheelStop",
                                        idle: "idle"
                                    },
                                    skin: "q"
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "j",
                                animation: {
                                    assetName: "symbolAnimation",
                                    effectName: {
                                        normal: "win",
                                        spin: "wheelStop",
                                        idle: "idle"
                                    },
                                    skin: "j"
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "ten",
                                animation: {
                                    assetName: "symbolAnimation",
                                    effectName: {
                                        normal: "win",
                                        spin: "wheelStop",
                                        idle: "idle"
                                    },
                                    skin: "ten"
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "wolfFigure",
                                animation: {
                                    assetName: "symbolAnimation",
                                    effectName: {
                                        normal: "win",
                                        spin: "wheelStop",
                                        idle: "idle"
                                    },
                                    skin: "wolfFigure"
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "bearFigure",
                                animation: {
                                    assetName: "symbolAnimation",
                                    effectName: {
                                        normal: "win",
                                        spin: "wheelStop",
                                        idle: "idle"
                                    },
                                    skin: "bearFigure"
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "deerFigure",
                                animation: {
                                    assetName: "symbolAnimation",
                                    effectName: {
                                        normal: "win",
                                        spin: "wheelStop",
                                        idle: "idle"
                                    },
                                    skin: "deerFigure"
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "foxFigure",
                                animation: {
                                    assetName: "symbolAnimation",
                                    effectName: {
                                        normal: "win",
                                        spin: "wheelStop",
                                        idle: "idle"
                                    },
                                    skin: "foxFigure"
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "lynxFigure",
                                animation: {
                                    assetName: "symbolAnimation",
                                    effectName: {
                                        normal: "win",
                                        spin: "wheelStop",
                                        idle: "idle"
                                    },
                                    skin: "lynxFigure"
                                }
                            }, {}, {}, {}, {}, {
                                textureAtlas: "symbols_static",
                                assetName: "empty1",
                                animation: {
                                    assetName: "symbolAnimation",
                                    effectName: {
                                        normal: "win",
                                        spin: "wheelStop",
                                        idle: "idle"
                                    },
                                    skin: "empty1"
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "empty2",
                                animation: {
                                    assetName: "symbolAnimation",
                                    effectName: {
                                        normal: "win",
                                        spin: "wheelStop",
                                        idle: "idle"
                                    },
                                    skin: "empty2"
                                }
                            }, {
                                textureAtlas: "symbols_static",
                                assetName: "empty3",
                                animation: {
                                    assetName: "symbolAnimation",
                                    effectName: {
                                        normal: "win",
                                        spin: "wheelStop",
                                        idle: "idle"
                                    },
                                    skin: "empty3"
                                }
                            }]
                        },
                        width: 1500,
                        height: 940
                    },
                    winFeature: {
                        bigWinMultiplier: 50,
                        giantWinMultiplier: 100
                    }
                };
                var Ki, qi = {
                        reward_flush: 1500,
                        reward_sticky: 1e3,
                        reward_scatter: 2e3,
                        before_spin_auto: 200,
                        afterFreeSpins: 700,
                        beforeFreeSpins: 300,
                        inFreeSpins: 200
                    },
                    Ji = {
                        get: t => qi[t],
                        set(t, e) {}
                    };
                ! function(t) {
                    t.Basic = "basic", t.Auto = "auto", t.Respin = "respin", t.Freespin = "freespin", t.Bonus = "bonus"
                }(Ki || (Ki = {}));
                var $i = new class {
                    constructor() {
                        (0, n.Z)(this, "currentFeature", void 0)
                    }
                    set(t) {
                        this.currentFeature = t
                    }
                    isBasic() {
                        return this.currentFeature.includes(Ki.Basic)
                    }
                    isAuto() {
                        return this.currentFeature === Ki.Auto
                    }
                    isRespin() {
                        return this.currentFeature === Ki.Respin
                    }
                    isFreespin() {
                        return this.currentFeature === Ki.Freespin
                    }
                    isBonus() {
                        return this.currentFeature === Ki.Bonus
                    }
                };
                const ts = {
                    init() {
                        function t(t) {
                            var e = nt()(t, "error", !1),
                                i = nt()(t, "feature", ""),
                                s = nt()(t, "bonus.multiplier", 0),
                                o = nt()(t, "bonus.modificator", 0),
                                n = nt()(t, "bonuses", []);
                            Lt.store.set("bonus:error", e), Lt.store.set("bonus:bonuses", n), Lt.store.set("bonus:finalChance", nt()(t, "finalChance.pos", [])), Lt.store.set("bonus:finalChanceCount", nt()(t, "finalChance.count", 0)), Lt.store.set("bonus:bonus", nt()(t, "bonus", !1)), Lt.store.set("bonus:win", nt()(t, "bonus.win", 0)), Lt.store.set("bonus:collection", nt()(t, "collection", 0));
                            var a = Lt.store.get("bonus:left", 0);
                            Lt.store.set("bonus:prevLeft", a);
                            var h = nt()(t, "bonus.left", -1),
                                r = nt()(t, "bonus.played", -1),
                                l = nt()(t, "bonus.total", -1);
                            if (!e) {
                                var d = nt()(t, "lostCount", 0);
                                Lt.store.set("bonus:lostCount", d)
                            }
                            var c = nt()(t, "lostScale", 0);
                            Lt.store.set("bonus:isBonus", "bonus" === i), Lt.store.set("bonus:left", h), Lt.store.set("bonus:played", r), Lt.store.set("bonus:total", l), "init" === t.action && Lt.store.set("bonus:lostScale", c), Lt.store.set("bonus:isStart", 0 === r && "bonus" === nt()(t, "nextAction", "")), Lt.store.set("bonus:isEnd", (0 === h || $i.isBonus()) && "basic" === i), Lt.store.set("bonus:multiplier", s), Lt.store.set("bonus:modificator", o);
                            var u = 0;
                            n.forEach((t => {
                                t.isNew && "string" == typeof t.sym && 1 === t.sym.length && "U" === t.sym.slice(0, 1) && u++
                            })), Lt.store.set("bonus:winAdditional", u > 0), Lt.store.set("bonus:additionalCount", u)
                        }
                        Lt.store.set("bonus:isStart", !1), Lt.store.set("bonus:isEnd", !1), Lt.store.set("bonus:isFree", !1), Lt.store.set("bonus:isBonus", !1), Lt.store.set("bonus:bonus", !1), Lt.store.set("bonus:bonuses", []), Lt.store.set("bonus:left", -1), Lt.store.set("bonus:prevLeft", -1), Lt.store.set("bonus:isEnd", !1), Lt.store.set("bonus:multiplier", 0), Lt.store.set("bonus:played", -1), Lt.store.set("bonus:multiplier", 0), Lt.store.set("bonus:modificator", 0), Lt.store.set("bonus:win", 0), Lt.store.set("bonus:finalChance", []), Lt.store.set("bonus:finalChanceCount", 0), Lt.store.set("bonus:winAdditional", !1), Lt.store.set("bonus:additionalCount", 0), Lt.store.set("bonus:total", -1), Lt.store.set("bonus:lostScale", 0), Lt.store.set("bonus:lostCount", 0), Lt.store.set("bonus:collection", 0), Lt.store.set("bonus:error", !1), Lt.server.on("response:init", t), Lt.server.on("response:spin", t), Lt.server.on("response:buyin", t), Lt.server.on("response:risk", t)
                    }
                };
                var es = [
                        [10, 7, 4, 8],
                        [6, 9, 9, 9],
                        [2, 9, 8, 5],
                        [10, 6, 5, 4],
                        [6, 5, 10, 6]
                    ],
                    is = [
                        [5, 10, 7, 4, 5, 10],
                        [9, 6, 3, 8, 9, 6],
                        [8, 5, 2, 8, 5, 8],
                        [7, 10, 9, 8, 7, 10],
                        [10, 9, 8, 7, 10, 9]
                    ];
                const ss = {
                        init() {
                            function t(t) {
                                var e = nt()(t, "buyin", !1),
                                    i = nt()(t, "risk", !1);
                                Lt.store.set("isRiskNBuy", e || i), (e || i) && (Lt.store.set("risk", i), Lt.store.set("buy", e))
                            }

                            function e(e) {
                                var i = nt()(e, "win", 0);
                                Lt.store.set("reward:win", i), Lt.store.set("reward:lines", nt()(e, "lines", [])), Lt.store.set("reward:reels", nt()(e, "reels", e.error ? es : [])), Lt.store.set("reward:nReels", nt()(e, "nReels", e.error ? is : [])), Lt.store.set("reward:fsReels", nt()(e, "fsReels", [])), Lt.store.set("reward:preReels", nt()(e, "preSpin.reels", [])), Lt.store.set("reward:bonusReels", nt()(e, "bonusReels", [])), Lt.store.set("reward:numberWinSymbol", nt()(e, "winSyms", 0)), Lt.store.set("reward:overlayWilds", nt()(e, "overlayWilds", !1)), Lt.store.set("reward:restoreOverlayWilds", nt()(e, "overlayWilds", !1)), Lt.store.set("reward:preOverlayWilds", nt()(e, "preSpin.overlayWilds", !1)), Lt.store.set("reward:bet", nt()(e, "bet", 1)), Lt.store.set("reward:state", nt()(e, "action", "init"));
                                var s = nt()(e, "feature", Ki.Basic);
                                Lt.store.set("reward:feature", s), t(e)
                            }

                            function i(e) {
                                var i = nt()(e, "win", 0);
                                Lt.store.set("reward:win", i), Lt.store.set("reward:lines", nt()(e, "lines", [])), Lt.store.set("reward:fsReels", nt()(e, "fsReels", [])), Lt.store.set("reward:nReels", nt()(e, "nReels", e.error ? is : [])), Lt.store.set("reward:bonusReels", nt()(e, "bonusReels", []));
                                var s = nt()(e, "feature", Ki.Basic);
                                "freespin" === s && $i.set("freespin"), Lt.store.set("reward:feature", s), t(e)
                            }
                            Lt.store.set("reward:win", 0), Lt.store.set("reward:isWin", !1), Lt.store.set("reward:state", "init"), Lt.store.set("reward:lines", []), Lt.store.set("reward:reels", []), Lt.store.set("reward:nReels", []), Lt.store.set("reward:fsReels", []), Lt.store.set("reward:preReels", []), Lt.store.set("reward:bonusReels", []), Lt.store.set("reward:numberWinSymbol", 0), Lt.store.set("reward:overlayWilds", !1), Lt.store.set("reward:restoreOverlayWilds", !1), Lt.store.set("reward:preOverlayWilds", !1), Lt.store.set("reward:bet", 1), Lt.store.set("isRiskNBuy", !1), Lt.store.set("risk", !1), Lt.store.set("buy", !1), Lt.store.set("reward:feature", ""), Lt.server.on("response:init", e), Lt.server.on("response:spin", e), Lt.server.on("response:buyin", i), Lt.server.on("response:risk", i)
                        }
                    },
                    os = {
                        init() {
                            Lt.store.set("spin:isSpin", !1), Lt.store.set("spin:isFast", !1), Lt.action.on("spin:start", (function() {
                                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                Lt.store.get("spin:isSpin") ? t && !Lt.store.get("spin:isFast") && (Lt.store.set("spin:isFast", !0), Lt.action.emit("spin:fast")) : (Lt.store.set("spin:isSpin", !0), Lt.state.goTo("spin"))
                            })), Lt.action.on("state:stop_exit", (function() {
                                Lt.store.set("spin:isSpin", !1), Lt.store.set("spin:isFast", !1)
                            }))
                        }
                    },
                    ns = {
                        init() {
                            os.init(), ss.init(), ts.init()
                        }
                    };
                class as extends R {
                    constructor(t, e, i) {
                        super(t, e, i), (0, n.Z)(this, "backgroundNormal", void 0), (0, n.Z)(this, "backgroundBonus", void 0), (0, n.Z)(this, "bonusStart", void 0), (0, n.Z)(this, "bonusEnd", void 0), (0, n.Z)(this, "bigWin", void 0), (0, n.Z)(this, "clickNormal", void 0), (0, n.Z)(this, "currentWinSound", void 0), (0, n.Z)(this, "giantWin", void 0), (0, n.Z)(this, "spinFast", void 0), (0, n.Z)(this, "spinStart", void 0), (0, n.Z)(this, "wheelStop", void 0), (0, n.Z)(this, "winNormal1", void 0), (0, n.Z)(this, "winNormal2", void 0), (0, n.Z)(this, "winNormal3", void 0), (0, n.Z)(this, "bonusModificatorUpdate", void 0), (0, n.Z)(this, "bonusMultiplierUpdate", void 0), (0, n.Z)(this, "bonusTotalWin", void 0), (0, n.Z)(this, "bonusVars", void 0), (0, n.Z)(this, "bonusWinSymbol", void 0), (0, n.Z)(this, "bonusWin", void 0), (0, n.Z)(this, "scaleDown", void 0), (0, n.Z)(this, "scaleUp", void 0), (0, n.Z)(this, "wildTransition", void 0), this.backgroundNormal = this.get("backgroundNormal"), this.backgroundBonus = this.get("backgroundBonus"), this.bonusStart = this.get("bonusStart"), this.bonusEnd = this.get("bonusEnd"), this.winNormal1 = this.get("win_normal_1"), this.winNormal2 = this.get("win_normal_2"), this.winNormal3 = this.get("win_normal_3"), this.bigWin = this.get("bigWin"), this.giantWin = this.get("giantWin"), this.spinStart = this.get("spinStart"), this.spinFast = this.get("spinFast"), this.clickNormal = this.get("clickNormal"), this.wheelStop = this.get("wheelStop"), this.bonusModificatorUpdate = this.get("bonusModificatorUpdate"), this.bonusMultiplierUpdate = this.get("bonusMultiplierUpdate"), this.bonusTotalWin = this.get("bonusTotalWin"), this.bonusVars = this.get("bonusVars"), this.bonusWinSymbol = this.get("bonusWinSymbol"), this.bonusWin = this.get("bonusWin"), this.scaleDown = this.get("scaleDown"), this.scaleUp = this.get("scaleDown"), this.wildTransition = this.get("wildTransition"), this.currentWinSound = null, this._setupEvents()
                    }
                    _setupEvents() {
                        Lt.action.on("sound:win", (t => {
                            var e = $i.isFreespin();
                            this.currentWinSound = this["".concat(e ? "winFree" : "winNormal").concat(t)], this.currentWinSound.play()
                        })), Lt.action.on("sound:bigWin", (() => {
                            this.bigWin.play()
                        })), Lt.action.on("sound:giantWin", (() => {
                            this.bigWin.stop(), this.giantWin.play()
                        })), Lt.action.on("state:spin_enter", this._onSpinEnter, this), Lt.action.on("state:finish_enter", this._onFinishEnter, this), Lt.action.on("sound:spinFast", this._onFastSpin, this), Lt.action.on("wheel:stop_down", this._onWheelStop, this), Lt.action.on("sound:click", this.click, this), Lt.action.on("sound:bonus_start", this._onBonusStart, this), Lt.action.on("sound:bonus_stop", this._onBonusStop, this), Lt.action.on("bonus:select_start", this._onSelectBonusStart, this), Lt.action.on("bonus:select_stop", this._onSelectBonusStop, this), Lt.action.on("sound:bonusModificatorUpdate", (() => {
                            this.bonusModificatorUpdate.play()
                        })), Lt.action.on("sound:bonusMultiplierUpdate", (() => {
                            this.bonusMultiplierUpdate.play()
                        })), Lt.action.on("sound:bonusTotalWin", (() => {
                            this.bonusTotalWin.play()
                        })), Lt.action.on("sound:bonusVars", (() => {
                            this.bonusVars.play()
                        })), Lt.action.on("sound:bonusWinSymbol", (() => {
                            this.bonusWinSymbol.play()
                        })), Lt.action.on("sound:bonusWin", (() => {
                            this.bonusWin.play()
                        })), Lt.action.on("sound:scaleDown", (() => {
                            this.scaleDown.play()
                        })), Lt.action.on("sound:scaleUp", (() => {
                            this.scaleUp.play()
                        })), Lt.action.on("sound:wildTransition", (() => {
                            this.wildTransition.play()
                        }))
                    }
                    stopBigWin() {
                        this.bigWin.stop(), this.giantWin.stop()
                    }
                    stopBonusTotalWin() {
                        this.bonusTotalWin.stop()
                    }
                    _onSpinEnter() {
                        this.currentWinSound && (this.currentWinSound.stop(), this.currentWinSound = null), Lt.autoPlay.enabled || this.spinStart.play()
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
                class hs extends Ht {
                    init() {}
                    enter() {
                        this.game.action.emit("state:finish_enter"), this.game.applyNetPosition()
                    }
                    exit() {
                        this.game.action.emit("state:finish_exit")
                    }
                }
                class rs extends hs {}
                class ls extends Ht {
                    init() {}
                    enter() {
                        this.game.action.emit("state:ready_enter")
                    }
                    exit() {
                        this.game.action.emit("state:ready_exit")
                    }
                }
                class ds extends ls {}
                class cs extends Ht {
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
                        return i.coins > 0 && (null === (t = this.stopItemWin) || void 0 === t ? void 0 : t.checked) && (this.stopItemWin.type === we || (null === (e = this.game.bigWin) || void 0 === e ? void 0 : e.available(i.coins)) && this.game.bigWin.type(i.coins) >= this.stopItemWin.type)
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
                class us extends cs {
                    get stopIfWin() {
                        var t, {
                                wallet: e
                            } = this.game,
                            i = "bonus" === this.game.store.get("reward:feature");
                        return e.coins > 0 && this.stopItemWin.checked && (this.stopItemWin.type === we || !i && (null === (t = this.game.bigWin) || void 0 === t ? void 0 : t.available(e.coins)) && this.game.bigWin.type(e.coins) >= this.stopItemWin.type)
                    }
                }
                class ps extends Ht {
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
                class gs extends ps {}
                class ms extends Ht {
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
                class As extends ms {}
                class bs extends Ht {
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
                class vs extends bs {}
                const ys = JSON.parse('{"AutoPlaySettingsStopCondButtonReset":"Reset","AutoPlaySettingsStopCondCheckboxBalance":"If Balance Increases By","AutoPlaySettingsStopCondCheckboxBalanceDrop":"If Balance Decreases By","AutoPlaySettingsStopCondCheckboxFeatureBonus":"If Bonus Game Won","AutoPlaySettingsStopCondCheckboxFeatureFreeSpin":"If Free Spins Won","AutoPlaySettingsStopCondCheckboxWin":"If Win","AutoPlaySettingsStopCondCheckboxWinAny":"Any","AutoPlaySettingsStopCondCheckboxWinBig":"Big","AutoPlaySettingsStopCondCheckboxWinGiant":"Giant","AutoPlaySettingsStopCondTitle":"STOP AUTOPLAY","AutoPlaySettingsSubTitle":"Setup your best autoplay conditions","AutoPlaySettingsTitle":"AUTOPLAY","BetSettingsLines":"LINES\\n<value>%s</value>","BetSettingsTitle":"BET SETTINGS","BetSettingsWays":"WAYS\\n<value>%s</value>","ControlsDesktopAutoPlayStart":"AUTOPLAY","ControlsDesktopAutoPlayStop":"STOP AUTO","ControlsDesktopBalance":"BALANCE%s\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopBet":"BET %s\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopFreeRoundLeft":"FREE ROUND\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopFreeRoundWin":"TOTAL WIN %s\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopFreeRoundWinEmpty":"TOTAL WIN","ControlsDesktopFreeSpinsLast":"FREE SPINS LEFT\\n<delimiter> \\n</delimiter><value>LAST</value>","ControlsDesktopFreeSpinsLeft":"FREE SPINS LEFT\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopLines":"LINES\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopMaxBet":"MAX BET","ControlsDesktopTotalWin":"TOTAL WIN %s\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopWays":"WAYS\\n<delimiter> \\n</delimiter><value>%s</value>","ControlsDesktopWin":"WIN %s\\n<delimiter> \\n</delimiter><value>%s</value>","Currency":"CURRENCY\\n<value>%s</value>","GameRulesAdvancedAutoPlayContent":"Advanced autoplay settings are available in the section with standard autoplay settings. You can set the conditions for stopping the game in automatic mode:\\n\\n<bold>if win any/big/giant</bold> - autoplay will be stopped after any/big/giant win\\n\\n<bold>if balance increased by 10%-100%</bold> - autoplay will stop when your balance increases by the selected %\\n\\n<bold>if balance decreased by 10%-100%</bold> - autoplay will be interrupted when your balance decreases by the selected %\\n\\nClick <bold>Reset</bold> to reset all autoplay settings","GameRulesAdvancedAutoPlayTitle":"Advanced Autoplay Settings","GameRulesAutoPlayContent":"Select the number of game rounds to play in automatic mode by pressing the button with the corresponding number, or press the button with the infinity sign to play in automatic mode until the autoplay is manually canceled or until the balance runs out. Your choice must be confirmed with the Start button.","GameRulesAutoPlayTitle":"Autoplay Options","GameRulesBestExperience":"Please note that you can only play one game at a time on each account. Therefore, you cannot play a game on more than one device, or multiple games on the same device simultaneously. Doing so may lead to various errors.\\n\\nFor the best gaming experience, we recommend using the latest version of the relevant software.","GameRulesGeneralRTP":"Theoretical RTP: %s %","GameRulesGeneralTitle":"General Info","GameRulesInterfaceAutoPlay":"Click to go to autoplay menu","GameRulesInterfaceBalance":"Here is your current balance","GameRulesInterfaceBetLevel":"Your current bet and a button to go to the bet size selection menu","GameRulesInterfaceContent":"All buttons of the game interface are listed below. Please note that the appearance and location of the buttons may differ slightly depending on the format in which the game is launched and what feature it is currently in.","GameRulesInterfaceMenu":"Click to access the game menu","GameRulesInterfaceQuickSpin":"Click to enable/disable quick spin","GameRulesInterfaceSound":"Turn game sound on/off and adjust sound volume","GameRulesInterfaceSpin":"Click to start the game round at the current bet. In the desktop version of the game, the button may have an alternative design","GameRulesInterfaceTitle":"Game Interface","GameRulesInterfaceWin":"Here is the win in the current game round","GameRulesSettingsContent":"To go to the settings menu, click the cogwheel icon in the game menu","GameRulesSettingsContentItemBackgroundSound":"<bold>Background music</bold> - turns on/off background music in the game","GameRulesSettingsContentItemFullscreen":"<bold>Full Screen</bold> - enables/disables full screen mode","GameRulesSettingsContentItemGameSound":"<bold>Game sound</bold> - turns on/off the sound effects of the game","GameRulesSettingsContentItemQuickSpin":"<bold>Quick Spin</bold> - turns on/off the function of the accelerated mode of rotation and stop of the reels","GameRulesSettingsTitle":"Game Settings","GameSettingsBackgroundSounds":"Background Music","GameSettingsFullscreen":"Full Screen","GameSettingsGameSounds":"Game Sounds","GameSettingsIntroScreen":"Intro Screen","GameSettingsLeftHand":"Left Hand Mode","GameSettingsQuickSpin":"Quick Spin","GameSettingsRiskFeatureCheckbox":"Risk&Buy","GameSettingsTitle":"GAME SETTINGS","IntroScreenHideButtonText":"Don\'t show next time","IntroScreenLoaderText":"LOADING","MenuDesktopButtonFullscreen":"FULLSCREEN","MenuDesktopButtonHome":"HOME","MenuDesktopButtonPaytable":"PAYTABLE","MenuDesktopButtonQuickspin":"QUICKSPIN","MenuDesktopButtonSound":"SOUND","MenuGameRules":"GAME INFORMATION","MenuMobileBetSettingsTitle":"BET SETTINGS","MenuMobileGameSettingsLeftHand":"Left Hand Mode","MenuMobileGameSettingsQuickspin":"Quick Spin","MenuMobileGameSettingsSounds":"Game Sounds","MenuMobileGameSettingsTitle":"GAME SETTINGS","MenuMobilePaytableTitle":"PAYTABLE","MenuPaytable":"PAYTABLE","MenuSettings":"SETTINGS","NetPositionTitle":"Net Position: %s","PopupActionClose":"Close","PopupActionContinue":"Continue","PopupActionEnable":"Enable","PopupActionNo":"No","PopupActionReload":"Reload","PopupActionYes":"Yes","PopupFreeRoundEndMessage":"The next spins will use your bonus amount","PopupFreeRoundEndTitle":"Free Rounds Finished","PopupFreeRoundLastMessage":"Congratulations, you have\\n last free round","PopupFreeRoundStartMessage":"Congratulations, you have\\n%s free rounds","PopupFreeRoundStartTitle":"Free Rounds Bonus","PopupFreeSpinsButton":"CLICK ANYWHERE TO CONTINUE","PopupFreeSpinsStopDescription":"<value>%s FREE SPINS</value> PLAYED","PopupFreeSpinsStopDescriptionNew":"%s Free Spins played","PopupFreeSpinsTitle":"CONGRATULATIONS","PopupFreeSpinsTitleNew":"CONGRATULATIONS! YOU WON","PopupFreeSpinsTitleRestore":"IN-GAME FEATURE RESTORED!","PopupFreeSpinsWinRestore":"<value>%s FREE SPINS</value> LEFT","PopupFreeSpinsWinRestoreLast":"<value>LAST FREE SPIN</value> LEFT","PopupFreeSpinsWinStart":"YOU WON <value>%s FREE SPINS</value>","PopupFreeSpinsWinStartNew":"%s FREE SPINS","PopupFreeSpinsWinStop":"YOU WON <value>%s</value>","PopupFreeSpinsWinStopNew":"<value>%s</value>","PopupMaxLimitMessage":"Bet exceeded max bet limit.","PopupMaxLimitTitle":"Max limit","PopupNetworkErrorMessage":"Please reload the game.","PopupNetworkErrorTitle":"Connection Lost","PopupQuickSpinMessage":"It seems you prefer to play a bit faster.\\nWould you like to enable Quick Spin?","PopupQuickSpinTitle":"Quick Spin","PopupRestoreMessage":"In-game feature restored!","PopupRiskNBuyContentBuy":"Buy in a feature for %s\\nthat will play at the bet %s","PopupRiskNBuyContentRisk":"Take the risk of winning %s\\nto get a feature at the bet %s","PopupRiskNBuyTitleBuy":"BUY IN FEATURE","PopupRiskNBuyTitleRisk":"RISK FEATURE","PopupSoundMessage":"Play with sound?","PopupSpendingBudgetMessage":"You have reached your play limit.\\nWelcome back later.","PopupSpendingBudgetTitle":"Play limit","PopupUnexpectedErrorMessage":"An unexpected situation.\\nReload the page.","PopupUnexpectedErrorTitle":"Unexpected situation","PopupZeroBalanceMessage":"Please change your BET LEVEL or top up your balance","PopupZeroBalanceTitle":"Insufficient funds","RiskNBuyBuyFor":"BUY FOR %s","RiskNBuyFreeSpinsText":"FREE SPINS","RiskNBuyOnBet":"ON BET %s","RiskNBuySubHeader":"RISK YOUR WIN\\nTO PLAY","StatusBarMobileBalance":"BALANCE %s\\n","StatusBarMobileBet":"BET %s\\n","StatusBarMobileFreeLast":"FREE SPINS LEFT\\n<value>LAST</value>","StatusBarMobileFreeLeft":"FREE SPINS LEFT\\n<value>%s</value>","StatusBarMobileFreePlayed":"FREE SPINS PLAYED\\n","StatusBarMobileFreeRoundLeft":"FREE ROUND\\n","StatusBarMobileTotalWin":"TOTAL WIN %s\\n","StatusBarMobileWin":"WIN %s\\n","TimeElapsedTitle":"Time Elapsed: %s"}'),
                    ws = JSON.parse('{"ControlsDesktopBonusLast":"BONUS SPINS LEFT\\n<delimiter> \\n</delimiter><value>LAST</value>","ControlsDesktopBonusLeft":"BONUS SPINS LEFT\\n<delimiter> \\n</delimiter><value>%s</value>","IntroScreenDescription0":"Get a bet multiplier and its modifiers in the Bonus game","IntroScreenDescription1":"Each Wild symbol moves across the reels from left to right","IntroScreenDescription2":"Buy Bonus game or risk your winnings for it","PaytableSectionBetLinesContent":"Bet ways win when matching symbols appear anywhere on adjacent reels from left to right, starting on the leftmost reel. \\n\\nOnly the highest win per bet way is paid. The payout values are based on the currently selected bet and change proportionally with its changes. The game is played with fixed bet ways. Malfunction voids all pays and plays.","PaytableSectionBetLinesTitle":"Bet Ways","PaytableSectionBonusGameContent1":"The Bonus game starts with 3 bonus spins. Each time a winning symbol appears on the screen, the number of bonus spins is reset to 3. The bonus game will be played on the bet on which it was won by the player.\\n\\nAfter starting the Bonus game, 3 to 5 Multiplier or Super Multiplier symbols will appear on the screen. During the bonus game, only the following symbols can appear.","PaytableSectionBonusGameContent2":"Multiplier. Adds a multiplier to the total win multiplier.","PaytableSectionBonusGameContent3":"Super multiplier. Adds a super multiplier to the total win multiplier.","PaytableSectionBonusGameContent4":"Giant multiplier. Adds a giant multiplier to the total win multiplier.","PaytableSectionBonusGameContent5":"Modifier. Multiplies the total win multiplier.","PaytableSectionBonusGameContent6":"Upgrade. Adds 1 to the bonus spins number. The maximum possible number of bonus spins is 5. When the number of bonus spins reaches the maximum, all subsequent Upgrade symbols will turn into Modifier symbols.","PaytableSectionBonusGameContent7":"During the Bonus Game, the symbols don\'t have their own payouts. At the end of the Bonus Game, the total win multiplier is calculated and applied to the total bet.","PaytableSectionBonusGameTitle":"Bonus game","PaytableSectionBonusScaleContent1":"The bonus scale fills up by 1 step with each non-winning spin and empties with any win. When the entire scale is filled, the Bonus game will begin. Each bet level has its own accumulation.","PaytableSectionBonusScaleTitle":"Bonus scale","PaytableSectionExtraBonusFeatureContent1":"If all reels are filled with winning symbols and there are still bonus spins remaining the Bonus Game will end and the number of remaining bonus spins will be used as a Modifier.","PaytableSectionExtraBonusFeatureTitle":"Extra Bonus feature","PaytableSectionPayoutTitle":"Symbol payout values","PaytableSectionRiskContent1":"The Risk\'n\'Buy feature is offered to the player in the main game after each spin, regardless of whether they win or not. The Risk\'n\'Buy feature allows the player to either risk the current win and immediately go to the Bonus game, or to buy the Bonus game at the specified cost and trigger it immediately.\\n\\nThe player has the freedom to choose whether they want to launch the suggested version of the Risk\'n\'Buy feature or continue to the main game. If they choose to risk their current winnings, these will be deducted from their balance in the form of a bet. If the player decides to buy the Bonus game, the cost of the feature will also be deducted from their balance in the form of a bet. Bonus game earned through the Risk\'n\'Buy feature will be triggered on the same bet that they were received by the player. The Risk’n’Buy feature is not available in autoplay mode.","PaytableSectionRiskTitle":"Risk\'n\'Buy feature","PaytableSectionWildFeatureContent1":"All Wild symbols move across the reels from left to right, moving 1 reel with each spin. Each Wild symbol that reaches reel 5 will end its feature. The Wild feature only works on the bet on which the Wild symbol appeared.","PaytableSectionWildFeatureTitle":"Wild feature","PaytableSectionWildSymbolContent1":"Wild symbols substitute for all symbols. Each Wild symbol that appears on the reels triggers the Wild feature.","PaytableSectionWildSymbolTitle":"Wild symbol","PopupBonusDescription":"","PopupBonusTitle":"CONGRATULATIONS","PopupBonusWinStart":"YOU WON\\n<value>THE BONUS GAME</value>","PopupBonusWinStop":"YOU WON\\n<value>%s</value>","PopupBonusWinStopDescription":"<value>%s</value> BONUS SPINS PLAYED","PopupWildsMessage":"Do you want to change your bet?","PopupWildsTitle":"If you change the current bet, all Wild symbols will end their feature.","StatusBarMobileBonusLast":"BONUS SPINS LEFT\\n<value>LAST</value>","StatusBarMobileBonusLeft":"BONUS SPINS LEFT\\n<value>%s</value>"}');

                function fs(t, e) {
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
                        e % 2 ? fs(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : fs(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                var Ss = xs(xs({}, ys), ws);
                class ks extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "timeline", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "mulTitle", void 0), (0, n.Z)(this, "mulValue", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "value", void 0), (0, n.Z)(this, "coins", void 0), (0, n.Z)(this, "onPress", void 0), (0, n.Z)(this, "onBeforeEnd", void 0), this.visible = !1, this.interactive = !0, this.onPress = new(S()), this.onBeforeEnd = new(S()), this.game.interaction.click(this, (() => this.onPress.dispatch())), this.timeline = new C, this.content = new Y.W2, this.overlay = new $t(.75), this.mulTitle = new tt.j(this.game.loader.getAsset("assets/images/labels/textTotalMultiplier.png")), this.mulTitle.anchor.set(.5), this.mulTitle.alpha = 0, this.mulValue = new v.Xz("", {
                            fontName: "WinFont"
                        }), this.mulValue.anchor.set(.5), this.mulValue.scale.set(.4), this.mulValue.text = "", this.mulValue.alpha = 0, this.title = new tt.j(this.game.loader.getAsset("assets/images/labels/textBonusWin.png")), this.title.anchor.set(.5), this.title.alpha = 0, this.value = new v.Xz("", {
                            fontName: "WinFont"
                        }), this.value.anchor.set(.5), this.content.addChild(this.mulTitle), this.content.addChild(this.mulValue), this.content.addChild(this.title), this.content.addChild(this.value), this.addChild(this.overlay), this.addChild(this.content)
                    }
                    show(t, e) {
                        return this.game.action.emit("sound:bonusTotalWin"), this.visible = !0, this.resize(), this.mulValue.text = "X".concat(e), this.mulValue.position.set(this.game.device.desktop || this.game.device.landscape ? 1200 : -418, this.game.device.desktop || this.game.device.landscape ? 240 : -70), new Promise((e => {
                            this.timeline.eventCallback("onComplete", (() => {
                                e()
                            }));
                            var i = {
                                coins: 0
                            };
                            this.timeline.set([this.mulTitle, this.mulValue, this.title, this.value], {
                                pixi: {
                                    alpha: 0
                                }
                            }).to(this.overlay, .35, {
                                pixi: {
                                    alpha: .75
                                }
                            }, 0).to(this.mulValue, .75, {
                                pixi: {
                                    x: 0,
                                    y: this.mulTitle.y + this.mulTitle.height + 100,
                                    alpha: 1,
                                    scale: .6
                                },
                                ease: T.Back.easeInOut
                            }, 0).to(this.mulTitle, .25, {
                                pixi: {
                                    alpha: 1
                                }
                            }, 0).to(this.title, .25, {
                                pixi: {
                                    alpha: 1
                                }
                            }, .75).to(this.value, .5, {
                                pixi: {
                                    alpha: 1,
                                    scale: .8
                                }
                            }, .75).to(i, 4, {
                                coins: t,
                                ease: T.Linear.easeNone,
                                roundProps: ["coins"],
                                onStart: () => {
                                    this.interactive = !0
                                },
                                onUpdate: () => {
                                    B.to(this.value, 2, {
                                        pixi: {
                                            scale: .6
                                        }
                                    }), this.value.text = "".concat(this.game.i18n.currency({
                                        bitmap: !0
                                    }), "<value>").concat(this.game.helpers.toMoney(i.coins), "</value>")
                                },
                                onComplete: () => {
                                    this.game.action.emit("update:win"), this.onBeforeEnd.dispatch(), this.interactive = !1
                                }
                            }, .75), this.timeline.addLabel("break", "+=0"), this.timeline.to([this.overlay, this.mulTitle, this.mulValue, this.title, this.value], .2, {
                                pixi: {
                                    alpha: 0
                                }
                            }, "break+=1")
                        }))
                    }
                    hide() {
                        this.visible = !1, this.value.text = "", this.timeline.clear(), this.onPress.handlers(!0) && this.onPress.detachAll()
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
                        this.game.device.desktop || this.game.device.landscape ? (this.content.position.set(this.game.viewport.width / 2, 150), this.mulTitle.position.set(0, 0), this.mulValue.scale.set(.5), this.title.position.set(0, 400), this.value.scale.set(.6), this.value.position.set(0, 600)) : (this.content.position.set(this.game.viewport.width / 2, (this.game.viewport.height - 500) / 2), this.mulTitle.position.set(0, 0), this.mulValue.scale.set(.5), this.title.position.set(0, 400), this.value.scale.set(.6), this.value.position.set(0, 600))
                    }
                }
                class Bs extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "BonusWinText"), (0, n.Z)(this, "textBg", void 0), (0, n.Z)(this, "multiplierTitleText", void 0), (0, n.Z)(this, "multiplierValueText", void 0), (0, n.Z)(this, "multiplierValue", 0), (0, n.Z)(this, "modTitleText", void 0), (0, n.Z)(this, "modValueText", void 0), (0, n.Z)(this, "modValue", 0), (0, n.Z)(this, "leftCount", void 0), this.textBg = new tt.j(this.game.loader.getAsset("assets/images/background/board.png")), this.leftCount = new v.Xz("", {
                            fontName: "WinFont"
                        }), this.leftCount.scale.set(.3), this.leftCount.text = "", this.visible = !1, this.multiplierTitleText = new Te("", {
                            default: {
                                fill: "#ffffff",
                                fontFamily: "PT Sans Narrow Bold",
                                fontSize: 40,
                                align: "left"
                            }
                        }), this.multiplierTitleText.text = "MULTIPLIER:", this.multiplierTitleText.alpha = 0, this.multiplierValueText = new v.Xz("", {
                            fontName: "WinFont"
                        }), this.multiplierValueText.text = "", this.multiplierValueText.position.set(0, this.multiplierTitleText.height + 20), this.modTitleText = new Te("", {
                            default: {
                                fill: "#ffffff",
                                fontFamily: "PT Sans Narrow Bold",
                                fontSize: 35,
                                align: "left"
                            }
                        }), this.modTitleText.text = "MODIFIER:", this.modTitleText.position.set(0, 200), this.modTitleText.alpha = 0, this.modValueText = new v.Xz("", {
                            fontName: "WinFont"
                        }), this.modValueText.scale.set(.5), this.modValueText.text = "", this.modValueText.position.set(0, this.modTitleText.y + this.modTitleText.height + 5), this.addChild(this.textBg, this.multiplierTitleText, this.multiplierValueText, this.modTitleText, this.modValueText, this.leftCount), this.multiplierValueText.scale.set(.21), this.modValueText.scale.set(.2), this.game.action.on("bonus:select_start", this.show, this)
                    }
                    updateAll() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if ($i.isBonus() || t) {
                            var i = 0 === this.game.store.get("bonus:left", 0) ? 1 : this.game.store.get("bonus:left", 0),
                                s = this.game.store.get("bonus:multiplier", 0),
                                o = e ? this.game.store.get("bonus:modificator", 0) / i : this.game.store.get("bonus:modificator", 0);
                            this.multiplierTitleText.alpha = s > 0 ? 1 : 0, this.multiplierValueText.text = s > 0 ? "".concat(s) : "", this.multiplierValue = s, this.modTitleText.alpha = o > 0 ? 1 : 0, this.modValueText.text = o > 0 ? "X".concat(o) : "", this.modValue = o, this.textBg.alpha = 1
                        }
                    }
                    bonusLeftToModificators() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            var e = t.game.store.get("bonus:modificator", 0),
                                i = t.game.store.get("bonus:left", 0);
                            t.leftCount.text = "".concat(i), yield B.to(t.leftCount, .3, {
                                pixi: {
                                    y: t.modValueText.y,
                                    x: t.modValueText.x
                                },
                                onComplete: () => {
                                    t.modValueText.text = e > 0 ? "X".concat(e) : "", t.leftCount.text = ""
                                }
                            }), "" !== t.modValueText.text && (t.game.action.emit("sound:bonusModificatorUpdate"), yield t.game.helpers.delay(500))
                        }))()
                    }
                    totalWin() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            var e = t.game.store.get("bonus:multiplier", 0),
                                i = t.game.store.get("bonus:modificator", 0);
                            yield t.game.helpers.delay(200), yield B.to(t.modValueText, .6, {
                                pixi: {
                                    y: t.multiplierValueText.y
                                },
                                onStart: () => {},
                                onComplete: () => {
                                    t.modValueText.text = "", t.modTitleText.alpha = 0, t.game.action.emit("sound:bonusMultiplierUpdate")
                                }
                            }), t.multiplierValueText.text = "".concat(0 === i ? e : i * e), yield t.game.helpers.delay(0 === i ? 0 : 1e3)
                        }))()
                    }
                    reset() {
                        this.hide(), this.multiplierTitleText.alpha = 0, this.multiplierValueText.text = "", this.multiplierValue = 0, this.modTitleText.alpha = 0, this.modValueText.text = "", this.modValue = 0, this.modValueText.position.set(0, this.modTitleText.y + this.modTitleText.height + 5), this.leftCount.text = "", this.leftCount.position.set(520)
                    }
                    resize() {
                        this.game.device.desktop || this.game.device.landscape ? (this.textBg.position.set(-90, -50), this.position.set(1330, 420), this.leftCount.scale.set(.3), this.leftCount.position.set(-1070, 600)) : (this.position.set(90, 1100), this.textBg.position.set(-90, -50), this.leftCount.scale.set(.6), this.leftCount.position.set(200, 1e3))
                    }
                }
                class Cs extends(Gt(Te)) {
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
                class Ps extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "spaceKey", void 0), (0, n.Z)(this, "toggleInterval", void 0), (0, n.Z)(this, "currentViewIndex", void 0), (0, n.Z)(this, "hideTimeoutId", void 0), (0, n.Z)(this, "onEnd", void 0), (0, n.Z)(this, "pagination", void 0), (0, n.Z)(this, "arrows", void 0), (0, n.Z)(this, "slides", void 0), (0, n.Z)(this, "playButton", void 0), (0, n.Z)(this, "hideButton", void 0), (0, n.Z)(this, "loaderText", void 0), (0, n.Z)(this, "loaderAnimation", void 0), this.visible = !0, this.interactive = !0, this.currentViewIndex = 0, this.slides = [], this.hideTimeoutId = null, this.toggleInterval = setInterval((() => {
                            this.currentViewIndex !== this.visibleViewsCount - 1 ? this.toggleScreen(this.currentViewIndex + 1) : clearInterval(this.toggleInterval)
                        }), 4e3), this.game.interaction.click(this, (() => clearTimeout(this.hideTimeoutId)), this), this.onEnd = new(S()), this.spaceKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Space), this.game.interaction.swipeX(this, (t => {
                            clearInterval(this.toggleInterval), clearTimeout(this.hideTimeoutId), this.arrowClick(t)
                        })), this.loaderText = this.createLoadingText(0), this.loaderAnimation = B.to(this.loaderText, .5, {
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
                                clearTimeout(this.hideTimeoutId), clearInterval(this.toggleInterval), this.spaceKey.onPress.detachAll(), t(), B.to(this, .5, {
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
                        var i = new p.TC;
                        return i.beginFill(t, 1), i.drawRect(0, 0, e, 4), i.endFill(), i
                    }
                    createLoadingText(t) {
                        return this.addChild(new Cs(t))
                    }
                }
                class Ts extends(Gt(tt.j)) {
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
                class Es extends(Gt(Y.W2)) {
                    constructor(t) {
                        super(), (0, n.Z)(this, "left", void 0), (0, n.Z)(this, "right", void 0), this.renderable = t > 1, this.left = this.addChild(new Ts("left")), this.left.position.set(0, 0), this.right = this.addChild(new Ts("right")), this.right.position.set(910, 0)
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
                class Os extends(Gt(tt.j)) {
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
                class Zs extends(Gt(Y.W2)) {
                    constructor(t, e) {
                        super(), (0, n.Z)(this, "buttonsContainer", void 0), this.buttonsContainer = this.addChild(new Y.W2);
                        for (var i = 0; i < t; i++) {
                            var s = this.buttonsContainer.addChild(new Os);
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
                class Fs extends(Gt(tt.j)) {
                    constructor() {
                        super(), this.texture = this.game.loader.getAsset("assets/images/introScreen/texture.json", "btnPlay"), this.interactive = !0, this.buttonMode = !0
                    }
                }
                class Rs extends(Gt(Y.W2)) {
                    constructor(t) {
                        super(), (0, n.Z)(this, "button", void 0), (0, n.Z)(this, "buttonText", void 0), (0, n.Z)(this, "checked", void 0), (0, n.Z)(this, "onClick", void 0), this.interactive = !0, this.cursor = "pointer", this.checked = !1, this.onClick = new(S()), this.button = this.addChild(new Os), this.buttonText = this.addChild(new Te("", {
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
                class Ws extends Rs {
                    resize() {
                        this.game.device.desktop ? (this.position.set(1250, 875), this.button.scale.set(1), this.buttonText.position.set(40, 20)) : (this.position.set(this.game.device.landscape ? 1250 : 410, this.game.device.landscape ? 875 : 1330), this.button.scale.set(1.6), this.buttonText.scale.set(1.5), this.buttonText.position.set(60, 29))
                    }
                }
                class Ms extends(Gt(Y.W2)) {
                    constructor(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        super(), (0, n.Z)(this, "description", void 0), (0, n.Z)(this, "featurePreview", void 0), this.alpha = 0, e && (this.visible = this.game.config.get("rnb", !0)), this.featurePreview = new tt.j(this.game.loader.getAsset("assets/images/introScreen/texture.json", "slide".concat(t))), this.featurePreview.anchor.x = .5, this.featurePreview.position.set(0, 0), this.description = new Te("", {
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
                        B.killTweensOf(this), B.to(this, .3, {
                            pixi: {
                                alpha: 0
                            }
                        })
                    }
                    show() {
                        B.killTweensOf(this), B.to(this, .3, {
                            pixi: {
                                alpha: 1
                            }
                        })
                    }
                }
                class Is extends Ms {
                    constructor(t) {
                        super(t, arguments.length > 1 && void 0 !== arguments[1] && arguments[1]), this.featurePreview.anchor.x = .5, this.featurePreview.position.set(0, 0), this.description.anchor.x = .5, this.description.position.set(0, 730)
                    }
                    resize() {
                        this.description.setTagStyle("default", {
                            wordWrapWidth: this.game.viewport.width / 2.4
                        }), this.game.device.desktop ? (this.scale.set(1), this.position.set(960, 0)) : this.game.device.landscape ? (this.description.setTagStyle("default", {
                            wordWrapWidth: this.game.viewport.width / 2.4
                        }), this.scale.set(1), this.position.set(960, 0)) : (this.description.setTagStyle("default", {
                            wordWrapWidth: this.game.viewport.width / 1.5
                        }), this.scale.set(1.2), this.position.set(550, 210))
                    }
                }
                class Ds extends Ps {
                    constructor() {
                        super(), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "logo", void 0), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "playButtonBg", void 0), this.overlay = this.addChild(new $t(.75)), this.content = this.addChild(new Y.W2), this.slides.push(this.content.addChild(new Is(0))), this.slides.push(this.content.addChild(new Is(1))), this.slides.push(this.content.addChild(new Is(2, !0))), this.logo = this.content.addChild(new tt.j(this.game.loader.getAsset("logo"))), this.logo.anchor.x = .5, this.pagination = this.content.addChild(new Zs(this.visibleViewsCount, 40)), this.hideButton = this.content.addChild(new Ws("#e3a750")), this.arrows = this.content.addChild(new Es(this.visibleViewsCount)), this.arrows.right.position.set(980, 0), this.arrows.position.set(470, 400), this.playButton = this.content.addChild(new Fs), this.playButton.anchor.set(.5), this.setupArrows(), this.setupPagination(), this.setupHideButton(), this.setupSlides()
                    }
                    resize() {
                        this.logo.position.set(this.game.viewport.width / 2, 0), this.content.scale.set(1), this.content.position.set(0, this.game.device.portrait && !this.game.device.desktop ? 40 : 0), this.game.device.desktop ? (this.pagination.scale.set(1), this.pagination.position.set(500, 876)) : (this.pagination.scale.set(1.6), this.pagination.position.set(this.game.device.landscape ? 500 : 140, this.game.device.landscape ? 876 : 1330)), this.game.device.portrait && !this.game.device.desktop ? (this.playButton.scale.set(1.4), this.playButton.position.set(this.game.viewport.width / 2, 1550), this.logo.scale.set(2)) : (this.logo.scale.set(1), this.playButton.scale.set(1), this.playButton.position.set(this.game.viewport.width / 2, 890))
                    }
                }
                var Ns, js = [0, 0, 0];
                class Ls extends _.PY {
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
                                        case I.AttachmentType.Region:
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
                                            d.transform.setFromMatrix(r.bone.matrix), r.currentSprite.color ? c = r.currentSprite.color : (js[0] = o[0] * r.color.r * u.r, js[1] = o[1] * r.color.g * u.g, js[2] = o[2] * r.color.b * u.b, r.currentSprite.tint = st.rgb2hex(js)), r.currentSprite.blendMode = r.blendMode;
                                            break;
                                        case I.AttachmentType.Mesh:
                                            if (r.currentSprite) {
                                                r.currentSprite.visible = !1, r.currentSprite = null, r.currentSpriteName = void 0;
                                                var b = new K.Transform;
                                                b._parentID = -1, b._worldID = d.transform._worldID, d.transform = b
                                            }
                                            var v = l.id;
                                            if (!r.currentMeshId || r.currentMeshId !== v) {
                                                var y = v;
                                                if (r.currentMesh && (r.currentMesh.visible = !1), r.meshes = r.meshes || {}, void 0 !== r.meshes[y]) r.meshes[y].visible = !0;
                                                else {
                                                    var w = this.createMesh(r, l);
                                                    d.addChild(w)
                                                }
                                                r.currentMesh = r.meshes[y], r.currentMeshName = l.name, r.currentMeshId = y
                                            }
                                            l.computeWorldVerticesOld(r, r.currentMesh.vertices), r.currentMesh.color ? c = r.currentMesh.color : (js[0] = o[0] * r.color.r * u.r, js[1] = o[1] * r.color.g * u.g, js[2] = o[2] * r.color.b * u.b, r.currentMesh.tint = st.rgb2hex(js)), r.currentMesh.blendMode = r.blendMode;
                                            break;
                                        case I.AttachmentType.Clipping:
                                            r.currentGraphics || (this.createGraphics(r, l), d.addChild(r.clippingContainer), d.addChild(r.currentGraphics)), this.updateGraphics(r, l), d.alpha = 1, d.visible = !0;
                                            continue;
                                        default:
                                            d.visible = !1;
                                            continue
                                    }
                                    if (d.visible = !0, c) {
                                        var f = r.color.r * u.r,
                                            x = r.color.g * u.g,
                                            S = r.color.b * u.b;
                                        c.setLight(o[0] * f + n[0] * (1 - f), o[1] * x + n[1] * (1 - x), o[2] * S + n[2] * (1 - S)), r.darkColor ? (f = r.darkColor.r, x = r.darkColor.g, S = r.darkColor.b) : (f = 0, x = 0, S = 0), c.setDark(o[0] * f + n[0] * (1 - f), o[1] * x + n[1] * (1 - x), o[2] * S + n[2] * (1 - S))
                                    }
                                    d.alpha = r.color.a
                                } else d.visible = !1
                            }
                            for (var k = this.skeleton.drawOrder, B = null, C = null, P = 0, T = k.length; P < T; P++) {
                                var E = i[k[P].data.index],
                                    O = this.slotContainers[k[P].data.index];
                                if (C || null !== O.parent && O.parent !== this && (O.parent.removeChild(O), O.parent = this), E.currentGraphics && E.getAttachment()) C = E.clippingContainer, B = E.getAttachment(), C.children.length = 0, this.children[P] = O, B.endSlot === E.data && (B.endSlot = null);
                                else if (C) {
                                    var Z = this.tempClipContainers[P];
                                    Z || ((Z = this.tempClipContainers[P] = this.newContainer()).visible = !1), this.children[P] = Z, O.parent = null, C.addChild(O), B.endSlot == E.data && (C.renderable = !0, C = null, B = null)
                                } else this.children[P] = O
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
                                d = r > 0 ? a[0] : a[0] - Math.abs(r),
                                c = l > 0 ? a[1] : a[1] - Math.abs(l);
                            s.x = d, s.y = c, s.width = Math.abs(r), s.height = Math.abs(l)
                        }
                        i.invalidate()
                    }
                }
                class _s extends Y.W2 {
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
                class Us extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "backgroundLTextureNormal", void 0), (0, n.Z)(this, "backgroundPTextureNormal", void 0), (0, n.Z)(this, "backgroundTextureLandscape", void 0), (0, n.Z)(this, "backgroundTexturePortrait", void 0), (0, n.Z)(this, "featureBackground", void 0), (0, n.Z)(this, "logo", void 0), (0, n.Z)(this, "animationFrontNormal", void 0), (0, n.Z)(this, "animationBackNormal", void 0), (0, n.Z)(this, "animationFrontFree", void 0), (0, n.Z)(this, "animationBackFree", void 0), (0, n.Z)(this, "animationFrontFree2", void 0), (0, n.Z)(this, "gridBackground", void 0), (0, n.Z)(this, "grid", void 0), (0, n.Z)(this, "bonusOverlay", void 0), this.backgroundLTextureNormal = this.game.loader.getAsset("bgln"), this.backgroundPTextureNormal = this.game.loader.getAsset("bgpn"), this.backgroundTextureLandscape = this.backgroundLTextureNormal, this.backgroundTexturePortrait = this.backgroundPTextureNormal, this.background = new tt.j(this.backgroundTextureLandscape), this.background.name = "background", this.featureBackground = new tt.j(this.game.loader.getAsset("bglf")), this.featureBackground.alpha = 0, this.gridBackground = new tt.j(this.game.loader.getAsset("assets/images/background/field.png")), this.gridBackground.alpha = 0, this.grid = new tt.j(this.game.loader.getAsset("assets/images/background/gridNormal.png")), this.grid.alpha = 0, this.logo = new tt.j(this.game.loader.getAsset("logo")), this.logo.anchor.x = .5, this.animationBackNormal = new Ls(this.game.loader.getAsset("assets/images/effects/bglnBack/skeleton.json")), this.animationBackNormal.play("animation", !0);
                        var t = new _s(1);
                        this.animationFrontNormal = t.addChild(new Ls(this.game.loader.getAsset("assets/images/effects/bglnFront/skeleton.json"))), this.animationFrontNormal.play("animation", !0), this.animationBackFree = new Ls(this.game.loader.getAsset("assets/images/effects/bglfBack/skeleton.json")), this.animationBackFree.play("animation", !0), this.animationBackFree.visible = !1, this.animationFrontFree = t.addChild(new Ls(this.game.loader.getAsset("assets/images/effects/bglfFront/skeleton.json"))), this.animationFrontFree.play("animation", !0), this.animationFrontFree.visible = !1, this.animationFrontFree2 = t.addChild(new Ls(this.game.loader.getAsset("assets/images/effects/bglfFront/skeleton.json"))), this.animationFrontFree2.play("animation2", !0), this.animationFrontFree2.visible = !1, this.addChild(this.animationBackFree), this.addChild(this.animationBackNormal), this.addChild(this.background), this.addChild(this.featureBackground), this.addChild(t), this.addChild(this.gridBackground), this.addChild(this.grid), this.setupEvents()
                    }
                    setupEvents() {
                        this.game.action.on("state:setup_enter", (() => {
                            $i.isBonus() && (this.beforeFreeSpinsPopup(), this.animationBackNormal.visible = !1, this.animationFrontNormal.visible = !1, this.animationBackFree.visible = !0, this.animationFrontFree.visible = !0, this.animationFrontFree2.visible = !0, this.game.device.portrait && !this.game.device.desktop ? this.gridBackground.alpha = 0 : this.gridBackground.alpha = 1)
                        })), this.game.action.on("bonus:select_start", (() => {
                            this.gridBackground.alpha = 1, this.grid.alpha = 1, this.grid.texture = this.game.loader.getAsset("assets/images/background/gridBonus.png"), this.bonusOverlay = !1
                        })), this.game.action.on("bonus:select_stop", (() => {
                            this.gridBackground.alpha = 1, this.grid.alpha = 1, this.grid.texture = this.game.loader.getAsset("assets/images/background/gridNormal.png"), this.featureBackground.alpha = 0, this.bonusOverlay = !1, this.animationBackNormal.visible = !0, this.animationFrontNormal.visible = !0, this.animationBackFree.visible = !1, this.animationFrontFree.visible = !1, this.animationFrontFree2.visible = !1
                        })), this.game.action.on("bonus:start", (() => {
                            this.bonusOverlay = !0
                        })), this.game.action.on("bonus:stop", (() => {
                            this.bonusOverlay = !0
                        })), this.game.action.on("bonus:restore", (() => {
                            this.bonusOverlay = !0
                        }))
                    }
                    beforeFreeSpinsPopup() {
                        this.grid.alpha = 0, this.game.device.portrait && !this.game.device.desktop && (this.gridBackground.alpha = 0, this.grid.alpha = 0), 0 === this.featureBackground.alpha && (this.featureBackground.alpha = 1, this.animationBackNormal.visible = !1, this.animationFrontNormal.visible = !1, this.animationBackFree.visible = !0, this.animationFrontFree.visible = !0, this.animationFrontFree2.visible = !0)
                    }
                    gameStart() {
                        this.logo.alpha = 1
                    }
                    resize() {
                        this.game.device.portrait && !this.game.device.desktop ? (this.background.texture = this.game.loader.getAsset("bgpn"), this.background.anchor.set(0), this.background.width = 2 * this.game.viewport.paddingX + this.game.viewport.width, this.background.height = 2 * this.game.viewport.paddingY + this.game.viewport.height, this.background.position.set(-this.game.viewport.paddingX, 0), this.featureBackground.texture = this.game.loader.getAsset("bgpf"), this.featureBackground.anchor.set(0), this.featureBackground.width = 2 * this.game.viewport.paddingX + this.game.viewport.width, this.featureBackground.height = 2 * this.game.viewport.paddingY + this.game.viewport.height, this.featureBackground.position.set(-this.game.viewport.paddingX, 0), this.gridBackground.scale.set(.7), this.gridBackground.position.set(-208, 330), this.grid.scale.set(.7), this.grid.position.set(-208, 330), this.logo.scale.set(2), this.logo.position.set(660, -330), this.animationBackNormal.alpha = 0, this.animationFrontNormal.alpha = 0, this.animationBackFree.alpha = 0, this.animationFrontFree.alpha = 0, this.animationFrontFree2.alpha = 0, this.bonusOverlay && (this.gridBackground.alpha = 0)) : (this.background.texture = this.game.loader.getAsset("bgln"), this.background.anchor.set(.5), this.background.width = this.game.viewport.width, this.background.height = this.game.viewport.height, this.background.position.set(this.game.viewport.width / 2, this.game.viewport.height / 2), this.featureBackground.texture = this.game.loader.getAsset("bglf"), this.featureBackground.anchor.set(.5), this.featureBackground.width = this.game.viewport.width, this.featureBackground.height = this.game.viewport.height, this.featureBackground.position.set(this.game.viewport.width / 2, this.game.viewport.height / 2), this.gridBackground.scale.set(1), this.gridBackground.position.set(0), this.grid.scale.set(1), this.grid.position.set(0), this.bonusOverlay && (this.gridBackground.alpha = 1), this.logo.scale.set(.7), this.logo.position.set(650, 16), this.animationBackNormal.alpha = 1, this.animationFrontNormal.alpha = 1, this.animationBackFree.alpha = 1, this.animationFrontFree.alpha = 1, this.animationFrontFree2.alpha = 1)
                    }
                }! function(t) {
                    t[t.START = 0] = "START", t[t.END = 1] = "END", t[t.RESTORE = 2] = "RESTORE"
                }(Ns || (Ns = {}));
                class Vs extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "_timeline", void 0), (0, n.Z)(this, "_keyboardSpace", void 0), (0, n.Z)(this, "_content", void 0), (0, n.Z)(this, "_title", void 0), (0, n.Z)(this, "_win", void 0), (0, n.Z)(this, "_description", void 0), (0, n.Z)(this, "_buttonText", void 0), (0, n.Z)(this, "completeResolve", void 0), (0, n.Z)(this, "tweenAutoTimeout", void 0), this.visible = !1, this.completeResolve = !1, this.cursor = "pointer", this.interactive = !1, this._content = this.addChild(new Y.W2), this._content.interactive = !1, this._content.interactiveChildren = !1, this._title = this._content.addChild(new Te("", {
                            default: {
                                fill: "#ffffff",
                                fontFamily: "PT Sans Narrow Bold",
                                fontSize: 76,
                                align: "center",
                                wordWrap: !0
                            }
                        })), this._title.anchor.set(.5, 1), this._title.position.set(0, 100), this._win = this._content.addChild(new Te("", {
                            default: {
                                fill: "#ffffff",
                                fontFamily: "PT Sans Narrow Bold",
                                align: "center",
                                fontSize: 106,
                                wordWrap: !0
                            },
                            value: {
                                fill: "#ffcc00"
                            }
                        })), this._win.anchor.set(.5), this._win.position.set(0, 300), this._description = this._content.addChild(new Te("", {
                            default: {
                                fontFamily: "PT Sans Narrow Bold",
                                fill: "#ffffff",
                                align: "center",
                                fontSize: 60,
                                wordWrap: !0
                            },
                            value: {
                                fill: "#ffcc00"
                            }
                        })), this._description.anchor.set(.5), this._description.position.set(0, 490), this._buttonText = this._content.addChild(new Te("", {
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
                        var t = this.game.store.get("bonus:isEnd", !1);
                        this.game.action.emit("sound:click"), t ? this.game.action.emit("bonus:select_stop") : this.game.action.emit("bonus:select_start"), "function" == typeof this.completeResolve && (this.completeResolve(), this.completeResolve = null), this.visible = !1
                    }
                    show(t) {
                        this.visible = !0, this._title.position.set(0, 100), this._buttonText.position.set(0, 600);
                        var e = this.game.autoPlay.enabled;
                        return new Promise((i => {
                            this.completeResolve = i;
                            var s = "";
                            if (t === Ns.START) s = "bonus:start", this.game.action.emit("sound:bonus_start"), this._title.text = this.game.i18n.t("PopupBonusTitle"), this._win.text = this.game.i18n.t("PopupBonusWinStart"), this._description.text = this.game.i18n.t("PopupBonusDescription"), this._buttonText.text = this.game.i18n.t("PopupFreeSpinsButton"), e && (this.tweenAutoTimeout = B.to(this._buttonText, 1, {
                                pixi: {
                                    scale: 1.1
                                },
                                repeat: 5,
                                yoyo: !0,
                                onComplete: () => {
                                    this.hide()
                                }
                            }));
                            else if (t === Ns.END) {
                                s = "bonus:stop", this.game.action.emit("sound:bonus_stop");
                                var o = this.game.helpers.toMoney(this.game.wallet.bonusCoins);
                                this._title.text = this.game.i18n.t("PopupFreeSpinsTitle"), this._win.text = this.game.i18n.t("PopupBonusWinStop", "".concat(o, "\t").concat(this.game.i18n.currency())), this._description.text = this.game.i18n.t("PopupBonusWinStopDescription", Lt.store.get("bonus:played", -1)), this._buttonText.text = this.game.i18n.t("PopupFreeSpinsButton"), e && (this.tweenAutoTimeout = B.to(this._buttonText, 1, {
                                    pixi: {
                                        scale: 1.1
                                    },
                                    repeat: 5,
                                    yoyo: !0,
                                    onComplete: () => {
                                        this.hide()
                                    }
                                }))
                            } else t === Ns.RESTORE && (s = "bonus:restore", this.game.action.emit("sound:bonus_start"), this._title.text = this.game.i18n.t("PopupFreeSpinsTitleRestore"), this._win.text = "", this._description.text = "", this._buttonText.text = this.game.i18n.t("PopupFreeSpinsButton"), this._title.position.set(0, 210), this._buttonText.position.set(0, 400));
                            this.resize(), this.showContent(t).then((() => {
                                this.game.action.emit(s), this._keyboardSpace.enable(), this.interactive = !0
                            }))
                        }))
                    }
                    showContent(t) {
                        return t === Ns.RESTORE ? Promise.resolve() : new Promise((t => {
                            this._timeline.vars.onComplete = () => {
                                t(), this._timeline.vars.onComplete = null
                            }, this._timeline.restart()
                        }))
                    }
                    resize() {
                        this.hitArea = new K.Rectangle(-this.game.viewport.paddingX, 0, this.game.viewport.width + 2 * this.game.viewport.paddingX, 5 * this.game.viewport.height), this._title.setTagStyle("default", {
                            wordWrapWidth: 900,
                            breakWords: "ja" === window.language
                        }), this._win.setTagStyle("default", {
                            wordWrapWidth: this.game.viewport.width
                        }), this._description.setTagStyle("default", {
                            wordWrapWidth: this.game.viewport.width
                        }), this._buttonText.setTagStyle("default", {
                            wordWrapWidth: 900,
                            breakWords: "ja" === window.language
                        }), this._content.position.set(this.game.viewport.width / 2, (this.game.viewport.height - this._content.height) / 2)
                    }
                }
                const zs = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////1fUNLcAAAAWdFJOUwDPn4C/30AgEO+QcGCgf69fMI9vULAqgdwXAAACbklEQVRYw+1YyZaDIBCUHVxiTDL8/6eOTlzYQ6OZE3XKy8MSmurqbpumoqKioqIiB5I/MWJaa4UoecnriDlV2gK9i0s2fHN438Dnyfsg8YLHOXJBdRzsfibISidxK2Z+WjyzOGbYL0OFQbkZtLTfSORrYEZQirj7g5g4Su4PclYi8v0GSeDpgxwVcK8PsymsnWEXIZx6fCdedFNk4+7gml62PSQWdNtVwEMiesKTCzZu/AVDbFdu/gWvRasTAh7JTQQO3fak9OhfjWgxbt13rhJsIdJ4hHXuqkGsIsmkHoJn7MMippCIPMNqHcM3xgEREZttUu/kf47qvFGqfI0cpta58cDL6UkwIjnBNk3alMOiYL6kHzI1OmPVCJ9/phNeWDXE/p810roxoSAFTTK7aFspjd+nJ26aG0hQP5yl3LwB/jYk5bpT8JjxmuWUJ75SCvN9zhFnJLoH5O2jO7IIb3poXQfZkBK3H7x19XJhe69wJFMbPGK6Jjn66yM30FjNlfjgpkJMW784w05y7eWpqT+SkTUqJGqN8B+QbS9djjo8I5K2cCbj6jpvsZ26n6ppZ0WUmXb04yfZHVKVqEWNTTen3urcoq4cIUxMU2HUILs/bSFdJQHVaTnEmrfQYmCdhnRPw4kG91MR+4eOKz2scELgQ8HulyluHO++czquOLfE0HbP88tRxFssI0uLRpnQ5HlM16iAWqLoWGuO7UUTr8GtFb5P+6xAgSYd4h79aZfZvQcpljdJj+jqdWb+Zwlmeu6rhYxuXHXn/WQIfblQ5BLrkr3zwUXRC6c5ycmIlt0zNj75F7y2oqKioqIChF9HhmS5mMSV/gAAAABJRU5ErkJggg==";
                class Gs extends Kt {
                    constructor() {
                        super(zs), (0, n.Z)(this, "name", "ButtonAutoPlay"), (0, n.Z)(this, "startTexture", void 0), (0, n.Z)(this, "stopTexture", void 0), (0, n.Z)(this, "counts", void 0), (0, n.Z)(this, "countsInfinity", void 0), (0, n.Z)(this, "enterKey", void 0), (0, n.Z)(this, "onEnterClick", void 0), this.startTexture = c.xE.from(zs), this.stopTexture = c.xE.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTP////////////////////////////////////////////////////////////////////////////////////VtkI8AAAAVdFJOUwCAz2Dfv0AgEO9fkH9wn6CvMI9vUD+hasQAAAIqSURBVFjD7VhJkoMwDIyNVwhbEv//qwM1LMYbkoGb+5SaMj1CbrUkXq+CgoKCggIIlPh2lBljNOXkp+4jFlybA3gtbwn47fD+o7tOXgWJZ3yukUtu4mD1lSRrk8Q7m/l74JnEMeH4z2hmUt4WLa9WEvXrmZWULO5qJyaOkqudnOWIfLtBEnh6J6cZ3MvDbAxrp99EiKce/gsvGhRZuVu8puew+8SBdr0KfEpkRUTywMrdPWCIzcItHvBaujgh4hFoIQhs2KM2A/BqFgk2GGkA1SoXkbwwkQhUzQqM39lqrXXUpwUiI3Kl4V7Nb3Zl37iGa2Sn2QvYbQF+RiDJtk1anlArOWHRiJh+KsiNL36ZppYa09DUMaufJHXjN8sE9cc5KlLUrcdMIT3r2J7C1M4rTkhMD9SLo01do3D+nBK3n7wmKb4m9IonPcnRX/S2DsOVPHFTKcd1XpxwVjK2/gigarR323GNtRB1uK3cKAj1etgqXUA3bd332O8rUGQ1pivx4CA2B1j5p6FNXaMaXoOZKgmqT6s+NryFDiP7NGZ66i8MuLA+/ejElV5WBCH4pWDzyxR3F5++IRNXnFt12HHP88tBxkcspzLRq0xo89y3a5pBrWh0rbXX9qyN1+I2uqvHbVfgSJMOcQ/+tsuOJkiy5U3SK7r+Xdn/WYKZX/tqoaKB6/a6n/ShLxea3GJdqnI+uGh+4zanBBnoHD1jw1c84LUFBQUFBQUo/AH9SmgY+OEdcwAAAABJRU5ErkJggg=="), this.onEnterClick = new(S()), this.counts = this.addChild(new b.xv("", {
                            fontFamily: "Avenir-Bold",
                            fontSize: 28,
                            fill: this.game.config.get("colors.primary")
                        })), this.counts.anchor.set(1, .5), this.counts.position.set(-60, 0), this.countsInfinity = this.addChild(new tt.j(this.game.loader.getAsset("assets/autoplay-infinity-count.png"))), this.countsInfinity.anchor.set(.5), this.countsInfinity.position.set(-80, 0), this.countsInfinity.visible = !1, this.enterKey = this.game.keyboard.register(this.game.keyboard.KEY_CODE.Enter), this.enterKey.onPress.add((() => this.onEnterClick.dispatch()))
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
                class Hs extends Kt {
                    constructor() {
                        super("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAyCAMAAADLPWP6AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABjUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMgBvGIAAAAgdFJOUwDvnzC/EGAg34B/j3DeX0D+vqAhrxFxzq5Q7jHPQQGekWo0dwAAAS9JREFUSMe9lm13gyAMhQWhhFarzq5r127L//+VO8fTF1KBJfmwfATv4fHmGmwaSYWhbaTVOkQ01ssOMrgUSGQe8FZRoNreRWgEfPiswFaBRrVNREbDh5arOiQi4AJu0qP2XD7Q8L39G59X8e00fEHDR6LkVFFS8XXco5yGb1PmGw4Abv9nlLrc+159PUouD2ElfE+IWIsS5WuTnWM5Si/+DWlDLsVWhUobYS5EKdb6iPD+WI/p8sqoYUxl7vu2PGN9AHbpPu4yCNnBHonsuGoV5NN2IrKv1ygVvg//karMTKNUvHhCT41k8C0J+SRGci8QMvOQw5cxksO3yqrggpvEfIv/vZhv7T/7Am5HKV/Gf+DOv4iq3wor5qNB7iV/Zv60WDJOoRHV2U7Tz7n6yC/Xt2DiEf0QXwAAAABJRU5ErkJggg==", 115), (0, n.Z)(this, "name", "ButtonAutoPlayAccept"), this.setBackgroundAlpha(1), this.setBackgroundColor(this.game.config.get("colors.primary")), this.show(!1)
                    }
                    resize() {
                        this.scale.set(this.game.device.desktop ? 1 : 2)
                    }
                }
                class Qs extends Kt {
                    constructor() {
                        super("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTP///////////////////////////////////////////////////////////////////////////4/JsPUAAAATdFJOUwCQEIBgvyCfQN+gX1CvMH+wz28jjNZzAAAAj0lEQVRYw+3VSxLDIAwEUYMNFonz9f3vmivMUFZVFv0O0AuQYFkAAACABDUkE+U+TsmodrqcotVONzXd7PRNTe92OtT007/HY5cEu4TLRVFmr0yMdVdXJv5p0ROfp1VNF/+TUb+CPnGPx6ao7BIu9x2Kz8svb+o23u30Q02/89KJz5N/IOqD3Rh4AAAAZPgBCZoyk9uDJXUAAAAASUVORK5CYII=", 90, !1), (0, n.Z)(this, "name", "ButtonMenu")
                    }
                    resize() {
                        this.scale.set(this.game.device.desktop ? 1 : 1.6)
                    }
                }
                class Ys extends Kt {
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
                const Xs = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTP////////////////////////////////////////////////////////////////////////////////////VtkI8AAAAVdFJOUwBwX1BAIIC/3+8QoDCvf5/PYJCwj2OlcKoAAAFKSURBVFjD7ZfRkoMgDEWxAgIqVXfz/7+6YK10ikop4WFncp5oOnNqrwEjYwRBEARBEEQFxKi1rWNW4LhVM8MPvnnQqxm66Ju2xTHH6l+Ae4m5fZpjtS8WXPcN4FTduaIyCOZYPfiq/NJs4UrNFlfVCOagtt3W4saXeYbQ2Ek9gEN1E3xdXrubN2Ok7t16eix5XiIWEmr+EoPOSmRKqdcYtg+jWzYfqyGpXi/b7LnfEdVM7TG0IXccdb/HIPyGxFT7GJZdDZjqOST8j9SyXiChmwfs2xiajx+eiChbRmadTyqpHoMvb6PLlHp+GUryjqePDtXt1rWZjxnRT5dq/7dE+JXv5gV5nHUzbiOCyH2AnbnjJuuzuvrCHalF2ZDZpEacgsFsPlfr0sl4Ph0nl+chVWMI5oyhuDtWgXovHH6DgpaMIAiCIAiCqMUf3ndCqqLsR7MAAAAASUVORK5CYII=",
                    Ks = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAACXBAMAAADT+qdUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAqUExURUdwTP///////////////////////////////////////////////////4sGkswAAAANdFJOUwDfIBC/z4BfYP7ef86PIFKAAAAASklEQVQ4y2NgsPa9WsDAwCR79+5FBQbGu0AgzNALoq4xxIKoKwx3wWCUGqVGqWFG+YLIqwy5IOo6gxWIEmBgWgkuCxg4Tl5JZgAAzqb+eiBGXckAAAAASUVORK5CYII=";
                class qs extends tt.j {
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
                class Js extends Y.W2 {
                    constructor() {
                        super(), this.interactive = !0
                    }
                }
                class $s extends tt.j {
                    constructor(t, e) {
                        super(t), this.tint = e
                    }
                }
                class to extends p.TC {
                    constructor(t, e, i, s) {
                        super(), this.beginFill(0), this.drawRect(t, e, i, s), this.endFill()
                    }
                }
                class eo extends(Gt(Y.W2)) {
                    constructor(t, e, i) {
                        super(), (0, n.Z)(this, "progress", void 0), (0, n.Z)(this, "minPosition", void 0), (0, n.Z)(this, "maxPosition", void 0), (0, n.Z)(this, "onChange", void 0), this.track = t, this.background = e, this.foreground = i, this.progress = new Js, this.progress.mask = this.progress.addChild(new to(0, 15, this.background.width, this.background.height - 25)), this.minPosition = new K.Point(0, this.track.padding), this.maxPosition = new K.Point(0, this.background.height - this.track.padding), this.onChange = new(S()), this.progress.addChild(this.background), this.progress.addChild(this.foreground), this.addChild(this.progress), this.addChild(this.track), this.track.x = this.progress.width / 2, this.handleProgress(), this.handleTrack()
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
                class io extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "slider", void 0), (0, n.Z)(this, "onChangeVolume", void 0), this.background = tt.j.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAD9CAMAAAAlKrH0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////1/RXMoAAAAddFJOUwCP794Q3zBAIP6/7pCfz75Qr3BvgKCwX2DOrn+eA25H2wAAAetJREFUeNrt3MdawzAQBGDLsmLJPYUUYN//NXELqW7y5DZz5PB/kjYELjtBMJYo3udbY6RNWCTZPo4Cz8RZIW9SZPFyy/6EMhiT22UHS2Qi2xiINUnmnTBSMjNzrlyFMjvmBDtaFzX6ubFGFsaMXHizWKu9zaAWikfCDVIb8ny195414p3XeUQrtNp7/rwoWRX1qJ1lZSrUw/XjuL/ul6zO3XWtAHL7AkwQXPL/dSmCPN4WwyXAl2tiUWPtcmg5g+JC4CCuw8hwXFZzBY4r6m8mASZCPl3zeDskt0NOov43A/Prf80ROdj6b0YQYjmBhhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSM3wRmkFmK5ArXH3CXBbR43ydAbquD9WfB2L3LjtcBvRoP3tnEbtKZdUj+guPwTG/mo2R4/02aAOV4ZQMsWLKyS4zbWvjAkXavphxKSai13+mQDSRDpVVd96dOxGvVwfbeM9zjS9101KVLz9dLhnh+P99ObkU4jjZjCfeOSW4I5NdXUdV5wwLSaUcqVO9TRerCcAbpyQTnXt8Nh3ZX1oOjSg/VoSVMX557M+gelin1716J4r8pL6tpo/f071eH2B6lgKFKZ54AhAAAAAElFTkSuQmCC"), this.background.alpha = .2;
                        var t = new qs(c.xE.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAMAAABgOjJdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFQUExURUdwTAAAAP39/QAAAPj4+AAAAAAAAAAAAAAAAAAAAH9/f9jY2AAAAAAAAAAAAAAAABUVFQAAAFVVVQ8PDwAAAOLi4vz8/DMzM+Tk5AAAAAAAACoqKn19fYGBgXZ2dvz8/AsLC+np6f///wcHBxISEgAAAPv7+9zc3Pb29unp6ePj48fHx/n5+fj4+PX19c7OzvPz8+Xl5fn5+bu7u/Pz8+np6V5eXpeXl4ODg/z8/AAAABMTE+bm5vr6+qqqqgAAAMPDwwAAAO7u7gAAAFhYWN/f3+7u7lFRUePj4/X19V5eXgAAAAwMDAAAAAAAAFZWVuHh4ff39wAAAN/f3/r6+pGRkUxMTBwcHOnp6fn5+dTU1Pf3987Ozu/v7/j4+AgICPv7+/f39w4ODsPDwwAAAPHx8fb29gAAAPz8/PLy8gAAAA8PDwUFBREREQUFBf///7KU/iMAAABvdFJOUwAD4AblEgwBAgUCFAQHCBQMDQMRDyThBaEWGQZBP0exFr8BJA4okiWVJCUpk5SmFUNHw1fIri4bPsEODWqiYCArFcwRLqR4MrO2KxcUIiMyo7UkgHI4OQkj5HNjirrUHeLmEn0eutYQ0dorECwPKxinWNoAAAFMSURBVDjLfdTVlsIwEAbglEoSqKCL2wLr7s66u7u75f3vNoXlUEqS/3a+kzTpTABwBiJJkhCEgBmIfMdZDyHkPXt1LjHqwYFJUs9su9cNfD2kMW2+hr1gp4e444k4CIw0A0JaumB9CxagpL8mcC9hpyNaBaib8DKIKkLu44oh2f4U7zzhZ9xeBM8IxCqm4mxDIA4MCGDgViDutVaAwkSUIgIoJBRvVDwKhRqka1wIwGsIARi+EYiXIj2LdiQQl/QswNwUiBPTvtOFES4Yjev2r50e5oqJqUq7yvEYB8QSRrU/tGWFCZQx/3/H60tpFlHSql5rw+h2qpkoKcuot7Jhre27wMqeJTvHIamWM+uO+uLcjppsHCldSxxmnvIftPqQvz7d3fJj9+AiOZC7K5R+vz9LhedcALNmG2FTC6vq14/fxF4AeC9EsOn5+ANrFSqZBMENigAAAABJRU5ErkJggg=="), 14);
                        t.width = 33, t.height = 33;
                        var e = new $s(c.xE.from(Ks), 0);
                        e.width = 12, e.height = 151;
                        var i = new $s(c.xE.from(Ks), 4914792);
                        i.width = 12, i.height = 151, this.onChangeVolume = new(S()), this.slider = new eo(t, e, i), this.slider.position.set(33, 30), this.slider.onChange.add((t => this.onChangeVolume.dispatch(this.convertToVolume(t)))), this.interactive = !0, this.hitArea = new K.Rectangle(0, 0, 78, 200), this.game.interaction.up(this, (() => {
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
                class so extends Xt {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "ButtonSound"), (0, n.Z)(this, "textureOn", void 0), (0, n.Z)(this, "textureOff", void 0), (0, n.Z)(this, "controls", void 0), (0, n.Z)(this, "volumeControl", void 0), (0, n.Z)(this, "onChangeVolume", void 0), this.textureOn = c.xE.from(Xs), this.textureOff = c.xE.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTP////////////////////////////////////////////////////////////////////////////////////VtkI8AAAAVdFJOUwC/zzAQf4DfIO+fX0BwoGCvUJCwj2iqfUcAAAGeSURBVFjD7dfbkoMgDAZg1Higntvl/V91CysQRDsG6cxe5L9yOs6nEwOkQnA4HA6Hw+FwvpBukbL+jtyqd/osVq0W2MvqlYV+Q6WzK2lkVUS3rSudnpBt5Zj+UeqRZrcdLscBrX9cs9gRXeh7gG4/IzuiK/1rk/ApG29DefwZ9eOlyGA7ui62Fgf9xIFAQt0f2pYevVfQ2h1at/BCu8Cd+Xc50CpSo0WN7cXSAyqDJFXEfDI1RraYcdNtz1n8rdcWuU7tbVmFd5jXBlf3B5X+ZLeuDKuvO4H+YE+uDJ0uGJ229hzZugxPR6sEOrDxPjT7CqfS2MaHTA76xG7uF8Tb5jxwtu/mKvEzntq++YbDHfEibYtqbNSP4K6u70/tJfuVstAbdWKbw8bafcr2BO0VW7h1Tjlmuqnc29vgENmTSpoXgtoc2x31ALtuT6SuJtny1pA5OhsPJX4dJb+03T7wpGps1+u3JuN5P05iG8StRENwVyb33InttyHIZ0d/OIy9QBZ7UjIYScMhMG9goRwv1AFcjoLD4XA4HA7n/+UXAfY3Afulub0AAAAASUVORK5CYII="), this.volumeControl = this.addChild(new io), this.volumeControl.pivot.set(40, 214), this.volumeControl.show(!1), this.onChangeVolume = this.volumeControl.onChangeVolume, this.controls = this.addChild(new Kt(Xs)), this.controls.onClick.add((() => this.onClick.dispatch())), this.game.interaction.hover(this, (() => this.volumeControl.show(this.game.device.desktop))), this.game.interaction.out(this, (() => this.volumeControl.show(!1))), this.show(this.game.device.desktop)
                    }
                    toggle(t, e) {
                        this.controls.changeIcon(t ? this.textureOn : this.textureOff), this.volumeControl.setVolume(e)
                    }
                    resize() {
                        this.controls.showBackground(!this.game.device.desktop), this.scale.set(this.game.device.desktop ? 1 : 1.6)
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
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : oo(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                var ao = {
                        fontFamily: "Avenir-Medium",
                        fill: 16777215,
                        align: "center"
                    },
                    ho = {
                        fontSize: 4
                    };
                const ro = {
                    Common: {
                        delimiter: ho,
                        default: no(no({}, ao), {}, {
                            fontSize: 22
                        }),
                        value: {
                            fontFamily: "Avenir-Bold",
                            fontSize: 32
                        }
                    },
                    Button: {
                        default: no(no({}, ao), {}, {
                            fontSize: 28,
                            dropShadow: !0,
                            dropShadowBlur: 4,
                            dropShadowColor: "black",
                            dropShadowAngle: Math.PI / 2,
                            dropShadowDistance: 2
                        })
                    },
                    FreeSpins: {
                        delimiter: ho,
                        default: no(no({}, ao), {}, {
                            fontSize: 22
                        }),
                        value: {
                            fontSize: 32,
                            fontFamily: "Avenir-Bold",
                            fill: 16777215
                        }
                    }
                };

                function lo(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function co(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? lo(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : lo(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class uo extends Te {
                    constructor() {
                        super("", co(co({}, ro.Common), {}, {
                            default: co(co({}, ro.Common.default), {}, {
                                fill: Lt.config.get("colors.primary"),
                                fontFamily: "Avenir-Bold"
                            }),
                            value: co(co({}, ro.Common.value), {}, {
                                fontSize: 66
                            })
                        }))
                    }
                    update(t) {
                        this.text = Lt.i18n.t("ControlsDesktopTotalWin", Lt.i18n.currency({
                            withBrace: !0
                        }), Lt.helpers.toMoney(t))
                    }
                }
                class po extends(Gt(Y.W2)) {
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
                class go extends po {
                    updateFreeLeft(t) {}
                    updateBonusLeft(t) {}
                }
                class mo extends Kt {
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

                function Ao(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function bo(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Ao(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Ao(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class vo extends mo {
                    constructor(t) {
                        super(), (0, n.Z)(this, "betLevel", void 0), (0, n.Z)(this, "betLevelText", void 0), (0, n.Z)(this, "updateAll", (() => {
                            this.updateText()
                        })), (0, n.Z)(this, "updateText", (() => {
                            var t = this.game.helpers.toMoneySS(this.betLevel.toCoins());
                            this.betLevelText.text = this.game.i18n.t("ControlsDesktopBet", this.game.i18n.currency({
                                withBrace: !0
                            }), t)
                        })), this.betLevel = t, this.betLevelText = this.addChild(new Te("", bo(bo({}, ro.Common), {}, {
                            default: bo(bo({}, ro.Common.default), {}, {
                                align: "left"
                            })
                        }))), this.betLevelText.anchor.set(0, .5), this.betLevelText.position.set(70, 3), this.onClick.add((() => {
                            this.game.action.emit("clickMaxBet")
                        })), this.game.action.on("state:ready_enter", (() => {
                            !$i.isBasic() || this.game.autoPlay.enabled || this.game.freeRound.enabled || this.enable()
                        })), this.game.action.on("state:spin_enter", (() => {
                            this.disable()
                        })), this.disable()
                    }
                }
                class yo extends tt.j {
                    constructor(t) {
                        var {
                            icon: e,
                            textures: i
                        } = t;
                        super(), (0, n.Z)(this, "_textures", void 0), (0, n.Z)(this, "isDisable", void 0), (0, n.Z)(this, "isHover", void 0), (0, n.Z)(this, "onClick", void 0), (0, n.Z)(this, "onHover", void 0), (0, n.Z)(this, "onLeave", void 0), this._textures = i, this.isHover = !1, this.isDisable = !1, this.buttonMode = !0, this.interactive = !0, this.onClick = new(S()), this.onHover = new(S()), this.onLeave = new(S()), i.normal && (this.texture = i.normal), e && this.addChild(e), this._setupEvents()
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

                function wo(t, e) {
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
                        e % 2 ? wo(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : wo(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                const xo = function(t) {
                    var e = new Te("", fo(fo({}, t), {}, {
                        default: fo(fo({}, t.default), {}, {
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
                const So = function(t) {
                    var e = new Te("", t);

                    function i(t) {
                        e.text = Lt.i18n.t("ControlsDesktopFreeRoundWin", Lt.i18n.currency({
                            withBrace: !0
                        }), t > 0 ? Lt.helpers.toMoney(t) : "")
                    }
                    return e.visible = !1, e.anchor.x = .5, Lt.action.on("update:win", (function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "regular";
                        i("regular" === e ? Lt.wallet.totalCoins - Lt.wallet.progressCoinsWin : Lt.wallet.totalCoins)
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

                function ko(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function Bo(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? ko(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ko(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class Co extends Te {
                    constructor() {
                        super("", Bo(Bo({}, ro.Common), {}, {
                            default: Bo(Bo({}, ro.Common.default), {}, {
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
                class Po extends Te {
                    constructor() {
                        super("", ro.FreeSpins)
                    }
                    change(t) {
                        this.text = 0 === t ? Lt.i18n.t("ControlsDesktopBonusLast") : Lt.i18n.t("ControlsDesktopBonusLeft", t), B.to(this, .3, {
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
                class To extends Te {
                    constructor() {
                        super("", ro.Common), this.anchor.x = .5
                    }
                    update(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        this.text = Lt.i18n.t("ControlsDesktopWin", Lt.i18n.currency({
                            withBrace: !0
                        }), t > 0 || e ? Lt.helpers.toMoney(t) : "")
                    }
                }
                class Eo extends go {
                    constructor() {
                        var t;
                        super(), t = this, (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "buttonAccept", void 0), (0, n.Z)(this, "buttonAutoPlay", void 0), (0, n.Z)(this, "buttonMaxBet", void 0), (0, n.Z)(this, "buttonMenu", void 0), (0, n.Z)(this, "buttonQuickSpin", void 0), (0, n.Z)(this, "buttonSound", void 0), (0, n.Z)(this, "buttonSpin", void 0), (0, n.Z)(this, "freeRoundLeft", void 0), (0, n.Z)(this, "freeRoundTotalWin", void 0), (0, n.Z)(this, "textBalance", void 0), (0, n.Z)(this, "textWin", void 0), (0, n.Z)(this, "textBonusLeft", void 0), (0, n.Z)(this, "textBonusTotalWin", void 0);
                        var e = this.game.loader.getAsset("controls");
                        this.background = tt.j.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAACECAMAAABGSsZsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAC9UExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOvSc8wAAAA/dFJOUy0n8xNrIrX8ThhmXh1JcOLVMtmbsO7RyXpF3erNWeY2OlOFwaaijYnF95S+gbkFYg4+qpF0CEF+C5ifAXdWrYb9fjEAAA3OSURBVHja7JbZchrJEkCLQHLYYokg4AEeCJCMUIQ9A1zbWkDA/3/W7a7KWnpDIInqkXWOoLuWrMw8kmNq1DMAAABERy2ek5/0kT7NS/OsR3rLzM3us5k/h6EBkiQzkEgzkKQ25WKRK2P7sNuSpXhSrz8H4cFbhxsWru1nSWiz+DX88ccff/zxj+6vFgAAABAddX+/uNffRfq+t49kpodCMkv3F/d21R24X/jVhVlbhEEurw25D6MX7ukKBQO3J+VlZ1HowayaFu2q5JbNMLXect3jjz/++OOPfw3+6h4AAACio54AAAAgOupplb5Wq5V+JrOVGz/p6ZNZe9KjNGJlN3WojtUh5qQsyMei8wTPldQKXlJkJbWCDXcyfD+5DszM1Lc1bV8+UixWtgfXIP74448//vjX4K9WAAAAEB3VTB7Npv4202+6KK/02dQbemu1ykTpkT5pDjR91Modabqhi2r6wyvZaQYnbC6p5dIGH8nmMviObO+uUnNlq8jplW3HJcEff/w/sP8Kf/79f1h/1QQAAIDocAEDAADUcQF/exXNwiC/ULlRka752g6OCG1+e2/wxx9//PHH/23+6hsAAABER1/A7cJyuyS0NKpdHtw+XLV90ma7Mqx9Qs2TCuCPP/7444//ef1VGwAAAKLDBQwAAFDHBXx52b70tINZsN7W6+12YV0OtO2e7NrVy0zqzKxdvh0WMovppC0lfJDkb9uDbWmmbbNfBjlsyuxSWWP4448//vjjH8dfXQIAAEB0znsBNz75bxd//PHHH3/8qy7gBgAAAESHCxgAAKCOCzjFXMMqnemvjOz9rENk0+ybUybU7DXcSRPkVyRGAhv2qImSQkqSNpRvQ5K4Mg2/Lf/boHz6ooZdtnltjG/K/wLwxx9//PHHvwZ/15zzyNOwGna/EZ4qxlfkaqjsL0OFvyF1IGWjolD4h8vsNsK+w0mjWAB//PHHH3/86/AHAACAOuipXi99mnFm0NOzniz4XXcyePfKEoejnk+tp71cgsJUDxOCREG1Xi9Tt9fLvno9n0KevbCl0Ax//PHHH3/84/v3AAAAIDrFC3jiX5PDZydHV5m8sHEg08SHTF7OPnlLl/jjjz/++OMfzV9NzkBvUlfWXkXkeTrCH3/88ccf/9dW0xfwVCb59wdg+h794o8//vjjj39sfzWdTEuZVEwrws/KxNadHG6yusFJdeP4448//vjjX4O/mgIAAEB01P/egWlxZZrZnvrRNB8/Lc81Paneyw3ppqYnZ8Iff/zxxx//s/i/ywUMAAAAp6EeAAAAIDpq9DAajdJRMpC1kV4xq+Y1kk1ZTmdm3X9GPip82uPh4XDHx42KVR5cbyNbUwpJcw+uT7fiPUbugF9yjg8PQRD+YRD+/PvHH3/8Y/irEQAAAETHXMAd8zEvS0d/9VqnIxudUfDq+G9Hvn43COn4MF8grNXpBGWlYjDt+GyZLjuug2JvQeKOje10wpzhafzxxx9//PGP7K86AAAAEB0uYAAAgDou4K+aztf/OJ0PnR5//PHHH3/8c6ivAAAAEP8Cvs5MrwsB1xXrB85cn1D/uuxl964PpgzPvNDl9fWR3eOPP/74449/HH91DQAAANHRF/DupCO71y4duWn2d3a0C2Ynpjk2DH/88ccff/xj+6sdAAAAREeNk8fYsTOPYMVNd2O7vJPFnT/i13e5sy5il4kd73bZbR+Vb8eF7vyqtLALcmU2d5kEGR97zPWPP/74448//vH91RgAAACio1qt8bilSd/mawbpM/2Yt45o2V3zkkPBNIMPHLd8DptuHMbZabgjrdizbnUszblpvqgtnUnV8mmMhgv47P4t/PHHn//+8fevwV+1AAAAIDr6Al6a77K1XJqHnpsft5PSctuCHZtNc96+3Y/eDEdScWmPmxXJbxNKWqmvF3yAOxguL/3JpW+i5ZzCekHs3+S/xB9//D+tfwv/D+avlgAAABAddZU8rq7Sj/4mz6Ws+JcZmTAJlTAZ6PfVlZ27iU8sU5PUZV26PSl35crZRX/Gd+HS2+PSq+t+KT1IOtfJlbd1O/jjjz/++ONfg7+6AgAAgOhwAQMAANRxAV8EXF2chTOl/TCN4o8//vjjj38BdQEAAADR8RdwV39eSbcb5gkzSdpC6u5FLq576Fg33O9eFIq90PkxYvjjjz/++OMf0V91AQAAIDpcwAAAAHVcwH8M3eSnQPlS+pFvsN7NnermDpt5cK5bGqenLiR4lfRS1ma3MOyanrt/qmTwxx9//PHHP76/+nM021dv/pfYnuck/vjjjz/++J+E2gIAAEB01FCz1R/91dOtW07GWzfXO26c7uufzJrfy4aHKXRSV2cbbsonzbo1Uaa879A3GlaVYN9X7lTGzhptt0P88cf/I/kP+fvj/9f4qyEAAABERz0+Pg6TH80wGSXfdDocylMwMUP7GJqFoTllj8nb5vJJTZQEBuGSV0IkoyzrEpLFV3x8DJ6+A9tGcebtXPp8k/jjjz/++OMf3V89AgAAQHTUPwAAABAdLmAAAIA6LuCbm5t/bj43+OOPP/744x+9troBAACA6Ki7kJu7PDclW8Wo0jM3x++ekPwYXp0Of/zxxx9//OP45y5gAAAAiIKaz+/mGe4Kg4r9/Pqd273LR92VnatKVH3CFnmhp7vC7t2hcvjjjz/++OMf3T+9gAEAACA2av67yNw+5r/n4VIuonphPi+PCqPn2f15OJwXY0vqzA+UmLuX6WU+L2z8ruwRf/zxxx9//M/sP1e/6+fHX1wNf/zxxx9//EtRPwAAACA6XMAAAAB1XMBrAAAAiM0P1e/31/IV1utklm6mL7/az0zSbf1Ow/UR+eiZHDbnbS2Xbm2SrU2wLb729V2ivg2y376UtXXlqBTqr9e+5bV05DoPNNfu4Bp//PHHH3/8a/Bfqz4AAABERy7gzUY+6dh8LG5DxsmmhOmovnvp/Uxys5lG6qOSS1JlA01KqdOXc5t+Pwy2Z4KirnXJbDuUnBt3ahOU8EGbICX++H8u/1C4Vv/NJ/fn3//n9VcbAAAAiI66PYbN7RnYVMzOUuw9W8Uff/zxxx//NydVtwAAABAddTubzdJvBbflawdOBMduj0h2LG85+4IM/vjjjz/++Mf2v1UzAAAAiI76Vc3suLXZC0dKg2fha1aMmlUWnZVmmx3VfbH0L/zxx/8T+v/i749//f7uAt4HUfvCisz2hZXSyamUHN7vTz/zmnJ7/PHHH3/88a/DX+0BAAAgOmpQwj73zm/vw8j9wZh9xd5e/5gwF5o5Y1Pvs6VM4mwL7r0P02SLZ5z2VWr4448//vjjH8dfDQAAACA66svgS4J+OAZmOsg+zHvgRno2SJ6D3MCkGHyR1S/Bqj1n1iTIV3FtyGEJc5NBprXg5GCQXzKrYXTG0nWGP/74448//jX4JxcwAAAARIcLGAAAoI4L+F8AAACIDhcwAABAHRfwTwAAAIgNFzAAAEAdqO8Zfn5/A286/F78rO80/vjj/6H9v/P3/397ZbAbKQwD0IhLjyAkQIKIy1zo///gQhLHDjDbkVbN7HbfGwpJ7Dh+6iH419x8voABAACgBu6xvcLjlbTH3ecPeLxe4/Fq/HH2wR9//PHHH/83+D/cBgAAANVxU2SbbnmybNafZbzGVuzfikGObWV4e3bwlle3r056VRR//PHHH3/8v8U/X8AAAABQEecTk/dmeIRkcbLhqcyScZxMNiVPTGU7txHJ1UOlZEwrSsSM6dT0ZSZF/E37Uz5/wh9//PHHH/83+OsFDAAAAPXYL+Bx9OPxjq9jlp7xSBjj4ujT2pEsG2QiOYnTks+Vc9CM9QhvNozFob5c1R6lT4l6r917Pc2nQNzjiz7wxx9//PHH/w3+3o0AAABQHdd149jJqxOO6R6N3y4MxjiI0TjJm2JaN3ZpPaSMOTvVPL1GPcYsd6mSFJOCGg+H2z5yUDakpHSCdGPry4HSBP74448//vhX9T8uYAAAAKjNfgH3fZ71+2+f9538uvAXB5LXh1GaxbGs2kAK64buXE23aj99IlfoUlqq30sfvcR77cluj530Redd0bOUwh9//PHHH//q/p3rAQAAoDrhAp71Lz06Sy/9zpou4TmuziZHkfxUM6fJGedNucos37m3HcyzOdycaQ7MHV6YzXJZF3/88ccff/xr+rsZAAAAqnNzAbf6bXVmA+1Lpc9pba7ahvGlTJvWylPt7jb9Tg3dzZ639ZUD/vjjjz/++H+/v2sBAACgOlzAAAAA77iA17VdL+xLbSsjXbtZae2W42nXy45L7Wv8LrX93dnrF7UvRS4lcqv444//T/Vf+f/z//97/Y8LGAAAAGrjlmVZ5UmvYiGuyHA1KQXr6bPeBG9SV/N3qXk6X+PrYjoxs1WOvpy+angvuZYt4o8//vjjj39t/3ABAwAAQGXcMgzDEl5DZomv5QgcT47qdDGpS/6FR1MXjdvyMW6qXpJkY6oQqy7lieduzaT8Ltpw6rIshT/++OOPP/7V/Rc3AAAAQHXc0AzHc7z2XxP+lBBoYjTOm7AQE8OeIYYH2Z7ieVkjYSUWMcfkBDvSV6qW6urBKWVIOU0jkdRWLpcOldXcRdNow/jjjz/++ONf139wDQAAAFSHCxgAAOAdF/AnAAAA1IYLGAAA4B24j3+Ez4//G/zxxx9//H+WlvsAAACA6nABAwAAvIFf+31ecRZFRK0AAAAASUVORK5CYII="), this.background.alpha = .4, this.background.anchor.set(0, 1), this.background.position.set(0, this.game.viewport.height), this.buttonMenu = new Qs, this.buttonMenu.position.set(77, 1013), this.buttonMaxBet = new vo(this.game.betLevel), this.buttonMaxBet.position.set(213, 1013), this.buttonAutoPlay = new Gs, this.buttonAutoPlay.position.set(833, 1013), this.buttonQuickSpin = new Ys, this.buttonQuickSpin.position.set(1084, 1014), this.buttonSound = new so, this.buttonSound.position.set(1840, 1012), this.buttonSpin = function() {
                            var t = new(S()),
                                e = new yo({
                                    textures: {
                                        normal: null,
                                        hover: null,
                                        press: null,
                                        disable: null
                                    }
                                });
                            e.scale.set(1.1), e.hitArea = new K.Circle(62, 58, 55), e.name = "buttonSpin";
                            var i = Lt.keyboard.register(Lt.keyboard.KEY_CODE.Space);
                            i.onPress.add(o), i.disable();
                            var s = new Ls(Lt.loader.getAsset("effectSpin"));

                            function o() {
                                t.handlers(!0) ? t.dispatch() : (Lt.store.get("spin:isSpin", !1) || s.play("press", !1), Lt.action.emit("clickSpin"))
                            }
                            return e.addChild(s), s.play("active"), e.onClick.add(o), e.onHover.add((() => {
                                s.play("hover")
                            })), e.onLeave.add((() => {
                                s.play("active")
                            })), Lt.action.on("spin:fast", (function() {
                                s.play("inactive", !1), e.disable(), i.disable()
                            })), Lt.action.on("state:ready_enter", (function() {
                                i.enable(), $i.isBonus() || (e.visible = !0, e.enable(), s.play("inactive", !1), Lt.autoPlay.enabled || s.play("active"))
                            })), Lt.action.on("state:finish_exit", (function() {
                                s.play("active", !0), e.enable(), i.enable()
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
                        }(e.btn_spin_active, e.btn_spin_hover, e.btn_spin_press, e.btn_spin_inactive), this.buttonSpin.container.position.set(878, 927), this.buttonAccept = new Hs, this.buttonAccept.position.set(958, 1013), this.textWin = new To, this.textWin.anchor.x = .5, this.textWin.position.set(1400, 980), this.textBalance = new Co, this.textBalance.anchor.x = 1, this.textBalance.position.set(1760, 980), this.freeRoundLeft = xo(ro.Common), this.freeRoundLeft.container.position.set(1700, 1054), this.freeRoundTotalWin = So(ro.Common), this.freeRoundTotalWin.container.position.set(1400, 980), this.textBonusLeft = new Po, this.textBonusLeft.visible = !1, this.textBonusLeft.anchor.x = .5, this.textBonusLeft.position.set(640, 980), this.textBonusTotalWin = new uo, this.textBonusTotalWin.visible = !1, this.textBonusTotalWin.anchor.x = .5, this.textBonusTotalWin.position.set(960, 955), this.addChild(this.background), this.addChild(this.buttonMenu), this.addChild(this.buttonMaxBet), this.game.config.get("autoPlay.available", !0) && this.addChild(this.buttonAutoPlay), this.addChild(this.buttonQuickSpin), this.addChild(this.buttonSound), this.addChild(this.buttonSpin.container), this.addChild(this.buttonAccept), this.addChild(this.textWin), this.addChild(this.textBalance), this.addChild(this.freeRoundTotalWin.container), this.addChild(this.freeRoundLeft.container), this.addChild(this.textBonusLeft), this.addChild(this.textBonusTotalWin), this.textWin.update(this.game.wallet.coins), this.textBalance.update(this.game.wallet.balance), this.game.freeRound.onStart.once((t => {
                            this.textBalance.visible = !1, this.freeRoundLeft.updateLeft(t), this.freeRoundLeft.show(), this.textWin.visible = !1, this.freeRoundTotalWin.updateTotalWin(this.game.wallet.totalCoins), this.freeRoundTotalWin.show()
                        })), this.game.freeRound.onFinish.once((() => {
                            this.freeRoundLeft.hide(), this.freeRoundTotalWin.hide(), this.textWin.visible = !0, this.textWin.update(this.game.wallet.totalCoins, !0), this.textBalance.visible = !0, this.textBalance.update(this.game.wallet.balance)
                        })), this.game.action.on("bonus:restore", (() => {
                            var t = this.game.store.get("bonus:left", 0);
                            this.buttonAutoPlay.visible = !1, this.buttonAutoPlay.disable(), this.textWin.visible = !1, this.buttonMaxBet.disable(), this.buttonMenu.disable(), this.textBonusLeft.visible = !0, this.updateBonusLeft(t), this.textBonusTotalWin.update(this.game.wallet.totalCoins - this.game.wallet.bonusCoins), this.textBonusTotalWin.visible = !0, this.game.freeRound.enabled && (this.freeRoundTotalWin.container.visible = !1, this.textWin.visible = !1), this.game.device.desktop && this.buttonQuickSpin.position.set(1233, 1014)
                        })), this.game.action.on("bonus:start", (() => {
                            var t = this.game.store.get("bonus:left", 0);
                            this.buttonAutoPlay.visible = !1, this.buttonAutoPlay.disable(), this.textWin.visible = !1, this.buttonMaxBet.disable(), this.buttonMenu.disable(), this.textBonusLeft.visible = !0, this.updateBonusLeft(t), this.textBonusTotalWin.update(this.game.wallet.totalCoins), this.textBonusTotalWin.visible = !0, this.game.freeRound.enabled && (this.freeRoundTotalWin.container.visible = !1, this.textWin.visible = !1), this.game.device.desktop && this.buttonQuickSpin.position.set(1233, 1013)
                        })), this.game.action.on("bonus:stop", (() => {
                            this.buttonAutoPlay.visible = !0, this.textWin.visible = !0, this.textBonusLeft.visible = !1, this.textBonusLeft.text = "", this.textBonusTotalWin.visible = !1, this.textBonusTotalWin.text = "", this.game.freeRound.enabled || this.buttonMaxBet.enable(), this.buttonMenu.enable(), this.textWin.update(this.game.wallet.totalCoins, !0), this.textBalance.update(this.game.wallet.balance), this.game.freeRound.enabled && (this.freeRoundTotalWin.container.visible = !0, this.textWin.visible = !1), this.game.device.desktop && this.buttonQuickSpin.position.set(1084, 1014)
                        })), this.game.action.on("bonus:select_start", (() => {
                            this.buttonSpin.hide(), this.buttonSpin.disable(), B.fromTo(this, .5, {
                                pixi: {
                                    y: this.y + this.height
                                }
                            }, {
                                pixi: {
                                    y: 0
                                }
                            })
                        })), this.game.action.on("bonus:select_stop", (() => {
                            this.buttonSpin.show(), B.fromTo(this, .5, {
                                pixi: {
                                    y: this.y + this.height
                                }
                            }, {
                                pixi: {
                                    y: 0
                                }
                            })
                        })), this.game.action.on("state:spin_enter", (() => {
                            this.game.autoPlay.enabled || this.buttonAutoPlay.disable(), $i.isBasic() && (this.freeRoundLeft.updateLeft(this.game.freeRound.left - 1), this.textBalance.update(this.game.wallet.balance - this.game.betLevel.toCoins()))
                        })), this.game.action.on("state:finish_exit", (() => {
                            $i.isBasic() && (this.game.autoPlay.enabled || this.buttonMenu.enable(), this.buttonAutoPlay.enable())
                        })), this.game.autoPlay.on("disable", (() => {
                            this.buttonAutoPlay.disable()
                        })), this.game.action.on("reward:reset", (() => {
                            this.textWin.update(0)
                        })), this.game.action.on("state:ready_exit", (() => {
                            this.textWin.update(0)
                        })), this.game.action.on("update:win", (t => {
                            this.textWin.update(this.game.wallet.coins), $i.isBonus() && this.textBonusTotalWin.update(this.game.wallet.totalCoins)
                        })), this.game.action.on("update:balance", (function(e) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            t.textBalance.update(t.game.wallet.balance - i)
                        })), this.game.action.on("state:setup_enter", (() => {
                            this.buttonMenu.disable(), this.buttonSpin.disable(), this.buttonAutoPlay.disable(), $i.isBonus() && (this.y = this.y + this.height + 100, this.buttonMenu.disable(), this.buttonSpin.disable(), this.buttonSpin.hide(), this.buttonAutoPlay.disable())
                        })), this.game.action.on("state:ready_enter", (() => {
                            $i.isBonus() || (this.game.autoPlay.enabled || this.buttonMenu.enable(), this.buttonAutoPlay.enable(), this.game.freeRound.enabled || this.game.autoPlay.enabled || this.buttonMaxBet.enable())
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
                        this.buttonAutoPlay.disable(), this.buttonMenu.disable(), this.buttonMaxBet.disable()
                    }
                    onPopupHide() {
                        $i.isBonus() || (this.buttonAutoPlay.enable(), this.buttonMenu.enable(), this.game.freeRound.enabled || this.buttonMaxBet.enable())
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
                        B.fromTo(this, .5, {
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
                class Oo extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "buttonSpin", void 0), this.interactive = !0, this.buttonMode = !0, this.buttonSpin = this.addChild(new Kt("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACGCAMAAAAvpwKjAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAByUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////3C/CN8AAAAldFJOUwC/70DfEIBg/iDeb1AwkAFwX88hj3/uvp+voEERzjFPcWFRnrBEY9GsAAAE1UlEQVR42s2caXvqLBCGBRKWbJqoWaz2rPz/v/hq0/dcRgMMZIjOV5v27jMLzEDcbBZYqkomblYwptLN+laKakionlpDqpytRZCyijwCTGCqIrowKicaYCQvI+oAYxgtyVUUCObB8K1JjS9EowMsqzElSY9UB1pyRAMJhxhBUBKHJXqhZbYYKQjt3IIpohEsM/2h7eHrY5deOdUoJo+zv34//pPyxwpSmAX5+Pa3FDaKmmpEexZk9+8jG8ZBI1s/EeQ8aACGajS63Tvm8y4BzRgq0RGsLWZj34jBqI5icjeW5anDTRi1jmVfgbp/cLgBIx7FF8fvR6nnMWJS3Nb/ZzSxPsWcQjMYhX4HDEXfASNOvfDGeAXFM4bfOkKboec8zzmvBkLxMHL4o00lHpZuVVQEBQMcniQ37JeUGJZjwAKDcuueTYlkGcYRtNGu3RttX5AJhoIosYNt5/1AJhgAr1bwloMHYgi3P7yGF/skCMP51Mm3++IBGM743Pk3fD+9MVxrCS0C+s7twRfDIQYNmd6kB181HGIkIdOBfeMdGwJfi9/UP1PsYhTxwmKCYReDBziEhFRR60OVP8VHErKmWFeTxH9mtAtbYa2PeSfJuQ9c6BNMl+z9t7MjRolZMUTAnnTEsPmkjpinDxiWapd4avErfEusEMUg4RgFnhjbUzjGCU2Ma90Kx2gQa8amIIEYqfnjv0HHDcUpCcBgiD75dyKYey9tlqqx6ASCnby2PZW5U118QCgGCsUgmPuMGVGqBoRhjieso12nKDeMSKHxJAqxYphLOcU+ShamTL5ilPEiFJzJVwyGW7yCytsVo8DcCgeKcsUQcfMVJIpkFgwR/Q6GEqMo3ealGGMm97eR3qsxnE30m2Dw98Co1sQwl69+1atT5uH8mhjrLW12W2ehd5p52/NjTYzhPTL2tNaGIz0OhLPUf0KEGhz/j1/I/J1BS7uEWc4nzX7TF499qaV5xPTKU5N9qaGpQtM4YsxcbrG1bYi5MjtxaGvQ4uY9ZvEdA7UlKDjQGjfTTKy7+xkSPUi3pvi7v//G8WZw3gPCDlQ5QibmM+NrczK2oJTFSRaL3FIBTyo/l5dx20yBQbY+GG7Z2sSWJSxXtD4sxLAek8jJNNM6jPm5zCXWSU83+Vn7UOgjlku0rKGxfFvi9lGy5La6Paz2djmSfZTAeC4HjtsFoRyfjknk0+bHMUelQeXj0/Fb/3j68JYvW//+2EEhnw/d09bFcThjn7t1Xq19WIC4LyzM33Lv3DN2DhYE8hJH5tlU3wkiYBECOaSXRUil8QCBvdjzx/T4RcNA9jYS6BtOxrc0NqrVMBvEeZ4kZT3wcFyy4NI72Szzj/MjQu5xadS6q/O780DJwPntZUPOe+J33Hix59lFr2KZ44RXZWtQtM5z5rKNTyEBEwsho2NwhJ3KShR+N07jUVw55DtQXP0i34Hi2rhEypfvl4bgE/0o9aP1ni3GqGNZwIXP9IAdIF1YU75rXxkWcRyTLZnmoVWQw7IpieowQC7LB5tisWfa3QbD+CIQx+ssPp7hmXw5xBeICALBhRhjpJOeJMY3nBZKkmdwEsojfhVHmYM0SaroXweiiv4iLSxJL9RmHbs2aIfuaX6RNH3OXvAVLapkhRiNlYsk+A+HePiNW7TbtgAAAABJRU5ErkJggg==", 245)), this.buttonSpin.setBackgroundAlpha(.6), this.buttonSpin.setBackgroundColor(this.game.config.get("colors.primary")), this.buttonSpin.useClickSound = !1, this.buttonSpin.useClickSound = !1
                    }
                    hide() {
                        this.visible = !1
                    }
                    show() {
                        this.visible = !0
                    }
                }
                class Zo extends go {
                    constructor() {
                        super(), (0, n.Z)(this, "autoPlayButton", void 0), (0, n.Z)(this, "betButton", void 0), (0, n.Z)(this, "buttonAccept", void 0), (0, n.Z)(this, "buttonMenu", void 0), (0, n.Z)(this, "buttonQuickSpin", void 0), (0, n.Z)(this, "buttonSound", void 0), (0, n.Z)(this, "buttonSpin", void 0), (0, n.Z)(this, "onPressButtonSpin", void 0), (0, n.Z)(this, "state", void 0), (0, n.Z)(this, "statusBar", void 0), this.state = qe.Normal, this.onPressButtonSpin = new(S()), this.statusBar = new ti, this.statusBar.changeState(this.state), this.game.freeRound.enabled ? (this.statusBar.update({
                            type: Ke.Win,
                            value: this.game.store.get("free:isFree", !1) ? this.game.wallet.coins : this.game.wallet.totalCoins
                        }), this.statusBar.update({
                            type: Ke.FreeRoundLeft,
                            value: this.game.freeRound.left
                        })) : (this.statusBar.update({
                            type: Ke.Win,
                            value: this.game.wallet.coins
                        }), this.statusBar.update({
                            type: Ke.Balance,
                            value: this.game.wallet.balance
                        })), this.buttonMenu = new Qs, this.buttonSound = new so, this.buttonSpin = new Oo, this.game.interaction.hover(this.buttonSpin, (() => {
                            this.buttonSpin.scale.set(1), B.to(this.buttonSpin, .2, {
                                pixi: {
                                    scale: 1.04
                                },
                                yoyo: !0,
                                repeat: 1
                            })
                        })), this.game.interaction.click(this.buttonSpin, (() => {
                            this.onPressButtonSpin.handlers(!0) ? this.onPressButtonSpin.dispatch() : this.game.action.emit("clickSpin")
                        })), this.buttonAccept = new Hs, this.buttonQuickSpin = new Ys, this.autoPlayButton = new Gs, this.autoPlayButton.scale.set(1.6), this.betButton = new mo, this.betButton.disable(), this.betButton.onClick.add((() => this.game.action.emit("clickMaxBet"))), this.game.action.on("update:win", (() => {
                            this.game.freeRound.enabled ? (this.statusBar.update({
                                type: Ke.Win,
                                value: this.game.wallet.totalCoins
                            }), this.statusBar.update({
                                type: Ke.TotalWin,
                                value: this.game.wallet.totalCoins
                            })) : $i.isBonus() ? (this.statusBar.update({
                                type: Ke.Win,
                                value: this.game.wallet.coins
                            }), this.statusBar.update({
                                type: Ke.TotalWin,
                                value: this.game.wallet.totalCoins
                            })) : (this.statusBar.update({
                                type: Ke.Win,
                                value: this.game.wallet.totalCoins
                            }), this.statusBar.update({
                                type: Ke.Balance,
                                value: this.game.wallet.balance
                            }))
                        })), this.game.action.on("update:balance", (() => {
                            this.game.freeRound.enabled || $i.isBonus() || this.statusBar.update({
                                type: Ke.Balance,
                                value: this.game.wallet.balance
                            })
                        })), this.game.action.on("reward:reset", (() => {
                            this.statusBar.update({
                                type: Ke.Win,
                                value: 0
                            })
                        })), this.game.action.on("state:ready_enter", (() => {
                            !$i.isBasic() || this.game.autoPlay.enabled || this.game.freeRound.enabled || (this.betButton.show(), this.betButton.enable(), this.buttonSpin.interactive = !0, this.buttonMenu.enable(), this.autoPlayButton.enable(), this.buttonQuickSpin.enable()), this.game.freeRound.enabled && $i.isBasic() && (this.buttonSpin.interactive = !0, this.buttonMenu.enable(), this.autoPlayButton.enable(), this.buttonQuickSpin.enable())
                        })), this.game.action.on("state:spin_enter", (() => {
                            var t = this.game.autoPlay.enabled;
                            this.betButton.disable(), t || this.autoPlayButton.disable(), this.statusBar.update({
                                type: Ke.Win,
                                value: this.game.freeRound.enabled ? this.game.wallet.totalCoins : 0
                            });
                            var e = this.game.wallet.balance,
                                i = this.game.betLevel.toCoins();
                            $i.isBasic() && this.statusBar.update({
                                type: this.game.freeRound.enabled ? Ke.FreeRoundLeft : Ke.Balance,
                                value: this.game.freeRound.enabled ? this.game.freeRound.left - 1 : e - i
                            })
                        })), this.game.action.on("state:stop_exit", (() => {
                            var t = this.game.autoPlay.enabled,
                                e = $i.isBonus();
                            t && !e && (this.buttonSpin.visible = !0, this.buttonSpin.interactive = !0)
                        })), this.game.action.on("state:setup_enter", (() => {
                            this.buttonMenu.disable(), this.buttonSpin.interactive = !1, this.autoPlayButton.disable(), $i.isBonus() && (this.alpha = 0)
                        })), this.game.action.on("bonus:restore", (() => {
                            this.state = qe.Bonus, this.buttonMenu.hide(), this.buttonSpin.visible = !1, this.betButton.hide(), this.autoPlayButton.hide(), this.buttonSound.show(), this.statusBar.changeState(this.state), this.statusBar.update({
                                type: Ke.TotalWin,
                                value: this.game.wallet.totalCoins - this.game.wallet.bonusCoins,
                                disableZeroCheck: !0
                            }), this.statusBar.update({
                                type: Ke.BonusLeft,
                                value: this.game.store.get("bonus:left", 0)
                            }), this.resize()
                        })), this.game.action.on("bonus:start", (() => {
                            this.state = qe.Bonus, this.buttonMenu.hide(), this.buttonSpin.visible = !1, this.betButton.hide(), this.autoPlayButton.hide(), this.buttonSound.show(), this.statusBar.changeState(this.state), this.statusBar.update({
                                type: Ke.TotalWin,
                                value: this.game.wallet.totalCoins,
                                disableZeroCheck: !0
                            }), this.statusBar.update({
                                type: Ke.BonusLeft,
                                value: this.game.store.get("bonus:left", 1)
                            }), this.resize()
                        })), this.game.action.on("bonus:stop", (() => {
                            this.state = qe.Normal, this.buttonMenu.show(), this.buttonSpin.visible = !0, this.betButton.show(), this.buttonQuickSpin.show(), this.autoPlayButton.show(), this.buttonSound.hide(), this.statusBar.changeState(this.state), this.game.freeRound.enabled || this.statusBar.update({
                                type: Ke.Balance,
                                value: this.game.wallet.balance
                            }), this.statusBar.update({
                                type: Ke.Win,
                                value: this.game.wallet.totalCoins,
                                disableZeroCheck: !0
                            }), this.resize()
                        })), this.game.action.on("bonus:select_start", (() => {
                            B.fromTo(this, .5, {
                                pixi: {
                                    alpha: 0
                                }
                            }, {
                                pixi: {
                                    alpha: 1
                                }
                            }), this.buttonQuickSpin.enable()
                        })), this.game.action.on("bonus:select_stop", (() => {
                            B.fromTo(this, .5, {
                                pixi: {
                                    alpha: 0
                                }
                            }, {
                                pixi: {
                                    alpha: 1
                                }
                            })
                        })), this.game.action.on("state:finish_exit", (() => {
                            this.buttonSpin.interactive = !0, $i.isBasic() && !this.game.autoPlay.enabled && (this.buttonQuickSpin.show(), this.autoPlayButton.show(), this.autoPlayButton.enable(), this.buttonMenu.show(), this.buttonMenu.enable())
                        })), this.game.freeRound.onFinish.once((() => {
                            this.statusBar.update({
                                type: Ke.Balance,
                                value: this.game.wallet.balance
                            }), this.statusBar.update({
                                type: Ke.Win,
                                value: this.game.wallet.totalCoins,
                                disableZeroCheck: !0
                            })
                        })), this.addChild(...[this.buttonSound, this.buttonMenu, this.buttonQuickSpin, this.game.config.get("autoPlay.available", !0) && this.autoPlayButton, this.betButton, this.buttonSpin, this.buttonAccept, this.statusBar].filter(Boolean))
                    }
                    resize() {
                        var t, e = this.game.menu.opened,
                            i = null === (t = this.game.leftHand) || void 0 === t ? void 0 : t.enabled;
                        if (this.game.device.landscape) this.betButton.position.set(120, 980), e && this.betButton.show(), i ? (this.buttonSound.position.set(120, this.state === qe.Bonus ? 300 : 780), this.buttonMenu.position.set(120, 120), this.buttonQuickSpin.position.set(120, 780), this.autoPlayButton.position.set(120, 300), this.buttonSpin.position.set(160, this.game.viewport.height / 2), this.buttonAccept.position.set(160, this.game.viewport.height / 2)) : (this.buttonSound.position.set(1780, this.state === qe.Bonus ? 300 : 780), this.buttonMenu.position.set(1780, 120), this.buttonQuickSpin.position.set(1780, 780), this.autoPlayButton.position.set(1780, 300), this.buttonSpin.position.set(1760, this.game.viewport.height / 2), this.buttonAccept.position.set(1760, this.game.viewport.height / 2));
                        else {
                            var s = 2 * this.game.viewport.paddingY + this.game.viewport.height;
                            this.buttonSound.position.set(110, this.state === qe.Bonus ? 100 : s - 318), this.autoPlayButton.position.set(540, s - 318), this.buttonQuickSpin.position.set(this.state === qe.Normal ? 748 : 955, s - 318), this.buttonMenu.position.set(955, s - 318), this.betButton.position.set(332, s - 318), e && this.betButton.hide(), this.buttonSpin.scale.set(1), this.buttonSpin.position.set(this.game.viewport.width / 2, s - 590), this.buttonAccept.position.set(this.game.viewport.width / 2, s - 590)
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
                            type: Ke.Balance,
                            value: this.game.wallet.balance
                        })
                    }
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
                            type: Ke.Bet,
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
                            type: Ke.BonusLeft,
                            value: t
                        })
                    }
                }
                class Fo extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "Paytable"), (0, n.Z)(this, "scrollView", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "content", void 0), this.visible = !1, this.interactive = !0, this.scrollView = this.addChild(new ee), this.scrollView.paddingBottom = 120, this.title = this.scrollView.addChild(new re(this.game.i18n.t("MenuPaytable"))), this.title.withGameName(), this.title.anchor.set(.5, 0), this.content = this.scrollView.addChild(new Y.W2)
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
                class Ro extends(Gt(tt.j)) {
                    constructor() {
                        super(c.xE.WHITE), this.tint = 2763563
                    }
                    resize() {
                        this.game.device.desktop ? (this.height = 4, this.width = 1120) : this.game.device.landscape ? (this.height = 6, this.width = 1580) : (this.height = 6, this.width = 950)
                    }
                }

                function Wo(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function Mo(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Wo(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Wo(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class Io extends(Gt(b.xv)) {
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
                        this.style = Mo(Mo({}, this.style), e)
                    }
                    resize() {
                        this.game.device.desktop ? this.scale.set(1.2) : this.game.device.landscape ? (this.scale.set(2.2), this.setTagStyle("default", {
                            wordWrapWidth: 670
                        })) : (this.scale.set(2.2), this.setTagStyle("default", {
                            wordWrapWidth: 400
                        }))
                    }
                }
                class Do extends(Gt(b.xv)) {
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
                class No extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "_sectionParagraph1", void 0), (0, n.Z)(this, "_sectionTitle", void 0), this.visible = this.game.config.get("rnb", !0), this._sectionTitle = new Do(this.game.i18n.t("PaytableSectionRiskTitle").toUpperCase()), this._sectionTitle.position.set(0, 0), this._sectionParagraph1 = new Io(this.game.i18n.t("PaytableSectionRiskContent1")), this._sectionParagraph1.position.set(0, this._sectionTitle.y + this._sectionTitle.height + 30), this.addChild(this._sectionTitle), this.addChild(this._sectionParagraph1)
                    }
                    resize() {
                        this.game.device.desktop || this._sectionParagraph1.position.set(0, this._sectionTitle.y + this._sectionTitle.height + 30)
                    }
                }
                class jo extends(Gt(Y.W2)) {
                    constructor(t) {
                        var e, i, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
                        super(), (0, n.Z)(this, "findIndex", void 0), (0, n.Z)(this, "findSymbol", void 0), (0, n.Z)(this, "foreground", void 0), (0, n.Z)(this, "layout", void 0), (0, n.Z)(this, "payoutSymbol", void 0), (0, n.Z)(this, "payoutText", void 0), (0, n.Z)(this, "payouts", void 0), this.payouts = null !== (e = null === (i = this.game.server.response) || void 0 === i ? void 0 : i.paytable) && void 0 !== e ? e : [], this.layout = this.game.config.get("slot.layout.".concat(s), []), this.findIndex = this.layout.findIndex((e => e.assetName === t)), this.findSymbol = this.layout[this.findIndex], this.foreground = this.addChild(tt.j.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAi8AAAFpCAMAAABj4ziaAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUdwTBcXFxUVFRUVFRUVFRUVFQ8PDxYWFg8PDxUVFRYWFhUVFRYWFhQUFBYWFhUVFRUVFRUVFRQUFBQUFBUVFRQUFBYWFhYWFvIqbjAAAAAXdFJOUwAg72De3yD+EI+fMM+f7+6QX6DPzp6gP4hhIQAAAyNJREFUeNrt2VluwkAQRdEyBtxtmylk2P9OAyRCJgQoonyes4Snq3JLjjgr7WqcfcDUbFztSlxbbrXCDavlj1pKNQp31Isbs1xYhLsWkxMzyIWHwQyuC3+4MEUupIL5esN46pJ89J6+RnYg6fhFejEDSdvD68UKZK1LtFYgrfU54gl97I1A2hj+MvLEAyZswBP0gl7QC3pBL+gF9IJe0At6QS/oBfSCXtALekEv6AX0gl7QC3pBL+gF9IJe0At6QS/oBfSCXtALekEv6AX0gl7QC3pBL+gF9IJe0At6QS+gF/SCXtALekEvoBf0gl7QC3pBL6AX9IJe0At6QS+gF/SCXtALekEvoBf0gl7QC3pBL6AX9IJe0At6QS+gF/SCXtALegG9oBf0gl7QC3oBvaAX9IJe0At6Ab2gF/SCXtALegG9oBf0gl7QC3oBvaAX9IJe0At6Ab2gF/SCXtALegG9oBf0gl7QC+gFvaAX9IJe0AvoBb2gF/SCXtAL6AW9oBf0gl7QC+gFvaAX9IJe0AvoBb2gF/SCXtAL6AW9oBf0gl7QC+gFvaAX9IJe0AvoBb2gF/SCXkAv6AW9oBf0gl5AL+gFvaAX9IJeQC/oBb2gF/SCXkAv6AW9oBf0gl5AL+gFvaAX9IJeQC/oBb2gF/SCXkAv6AW9oBf0AnpBL+gFvaAX9AJ6QS/oBb2gF/QCekEv6AW9oBf0AnpBL+gFvaAX9AJ6QS/oBb2gF/QCekEv6AW9oBf0AnpBL+gFvaAX0At6QS/oBb2gF9ALekEv6AW9oBfQC3pBL+gFvaAX0At6QS/oBb2gF9ALekEv6AW9oBfQC3pBL+gFvaAX0At6QS/oBb2gF9ALekEv6AW9gF7QC3pBL+gFvYBe0At6QS/oBb2AXtALekEv6AW9gF7QC3pBL+gFvYBe+LdeZjYgbR17I5A2xrsRSOujNQJpuygeMKSViK0VSH+OIhozkNQceolqB1LqMZcoc0uQMC+nXqIRDIlcmvg2CIaHuQxx5sKQvi6nN0ztTMJNXS1xqek7yfBrLJvaxLXS9q+bDqY2r2/t5LZ8Ag1+oBbvnKajAAAAAElFTkSuQmCC")), this.foreground.width = 559, this.foreground.height = 361, this.payoutSymbol = new tt.j(this.game.loader.getAsset(this.findSymbol.textureAtlas, this.findSymbol.assetName)), this.payoutSymbol.scale.set(.85), this.payoutSymbol.anchor.set(.5), this.payoutSymbol.position.set(this.foreground.width / 2 - 120, this.foreground.height / 2), this.payoutText = new Te("", {
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
                class Lo extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "symbol1", void 0), (0, n.Z)(this, "symbol2", void 0), (0, n.Z)(this, "symbol3", void 0), (0, n.Z)(this, "symbol4", void 0), (0, n.Z)(this, "symbol5", void 0), (0, n.Z)(this, "content1", void 0), (0, n.Z)(this, "content2", void 0), (0, n.Z)(this, "content3", void 0), (0, n.Z)(this, "content4", void 0), (0, n.Z)(this, "content5", void 0), (0, n.Z)(this, "content6", void 0), (0, n.Z)(this, "content7", void 0), this.title = new Do(Lt.i18n.t("PaytableSectionBonusGameTitle").toUpperCase()), this.title.position.set(0, 0), this.content1 = new Io(Lt.i18n.t("PaytableSectionBonusGameContent1")), this.content1.position.set(0, this.title.height + this.title.y + 30), this.symbol1 = new jo("wolfFigure"), this.symbol1.position.set(0, this.content1.y + this.content1.height + 30), this.symbol1.withoutPayout(), this.content2 = new Io(Lt.i18n.t("PaytableSectionBonusGameContent2")), this.content2.position.set(this.symbol1.x + this.symbol1.width, this.symbol1.height / 2 + this.symbol1.y), this.symbol2 = new jo("bearFigure"), this.symbol2.position.set(0, this.symbol1.y + this.symbol1.height + 30), this.symbol2.withoutPayout(), this.content3 = new Io(Lt.i18n.t("PaytableSectionBonusGameContent3")), this.content3.position.set(this.symbol2.x + this.symbol2.width, this.symbol2.height / 2 + this.symbol2.y), this.symbol3 = new jo("deerFigure"), this.symbol3.position.set(0, this.symbol2.y + this.symbol2.height + 30), this.symbol3.withoutPayout(), this.content4 = new Io(Lt.i18n.t("PaytableSectionBonusGameContent4")), this.content4.position.set(this.symbol3.x + this.symbol3.width, this.symbol3.height / 2 + this.symbol3.y), this.symbol4 = new jo("foxFigure"), this.symbol4.position.set(0, this.symbol3.y + this.symbol3.height + 30), this.symbol4.withoutPayout(), this.content5 = new Io(Lt.i18n.t("PaytableSectionBonusGameContent5")), this.content5.position.set(this.symbol4.x + this.symbol4.width, this.symbol4.height / 2 + this.symbol4.y), this.symbol5 = new jo("lynxFigure"), this.symbol5.position.set(0, this.symbol4.y + this.symbol4.height + 30), this.symbol5.withoutPayout(), this.content6 = new Io(Lt.i18n.t("PaytableSectionBonusGameContent6")), this.content6.anchor.set(0, .5), this.content6.position.set(this.symbol5.x + this.symbol5.width, this.symbol5.y + this.symbol5.height / 2), this.content6.setTagStyle("default", {
                            wordWrapWidth: 600
                        }), this.content7 = new Io(Lt.i18n.t("PaytableSectionBonusGameContent7")), this.content7.position.set(0, this.symbol5.height + this.symbol5.y + 30), this.addChild(this.content1, this.title, this.symbol1, this.symbol2, this.symbol3, this.symbol4, this.symbol5, this.content2, this.content3, this.content4, this.content5, this.content6, this.content7)
                    }
                    resize() {
                        this.game.device.desktop || (this.game.device.landscape ? (this.content1.position.set(0, this.title.height + this.title.y + 30), this.symbol1.position.set(0, this.content1.y + this.content1.height + 30), this.symbol2.position.set(0, this.symbol1.y + this.symbol1.height + 30), this.symbol3.position.set(0, this.symbol2.y + this.symbol2.height + 30), this.symbol4.position.set(0, this.symbol3.y + this.symbol3.height + 30), this.symbol5.position.set(0, this.symbol4.y + this.symbol4.height + 30), this.content2.setTagStyle("default", {
                            wordWrapWidth: 490
                        }), this.content3.setTagStyle("default", {
                            wordWrapWidth: 490
                        }), this.content4.setTagStyle("default", {
                            wordWrapWidth: 490
                        }), this.content5.setTagStyle("default", {
                            wordWrapWidth: 490
                        }), this.content6.setTagStyle("default", {
                            wordWrapWidth: 490
                        }), this.content2.position.set(this.symbol1.x + this.symbol1.width, this.symbol1.height / 2 + this.symbol1.y - this.content2.height / 2), this.content3.position.set(this.symbol2.x + this.symbol2.width, this.symbol2.height / 2 + this.symbol2.y - this.content3.height / 2), this.content4.position.set(this.symbol3.x + this.symbol3.width, this.symbol3.height / 2 + this.symbol3.y - this.content4.height / 2), this.content5.position.set(this.symbol4.x + this.symbol4.width, this.symbol4.height / 2 + this.symbol4.y - this.content5.height / 2), this.content6.position.set(this.symbol5.x + this.symbol5.width, this.symbol5.height / 2 + this.symbol5.y), this.content6.anchor.set(0, .5), this.content7.position.set(0, this.symbol5.height + this.symbol5.y + 30)) : (this.content2.setTagStyle("default", {
                            wordWrapWidth: 390
                        }), this.content3.setTagStyle("default", {
                            wordWrapWidth: 390
                        }), this.content4.setTagStyle("default", {
                            wordWrapWidth: 390
                        }), this.content5.setTagStyle("default", {
                            wordWrapWidth: 390
                        }), this.content6.setTagStyle("default", {
                            wordWrapWidth: 390
                        }), this.content6.anchor.set(0), this.content1.position.set(0, this.title.height + this.title.y + 30), this.symbol1.position.set(0, this.content1.y + this.content1.height + 30), this.content2.position.set(0, this.symbol1.height + this.symbol1.y + 30), this.symbol2.position.set(0, this.content2.y + this.content2.height + 30), this.content3.position.set(0, this.symbol2.height + this.symbol2.y + 30), this.symbol3.position.set(0, this.content3.y + this.content3.height + 30), this.content4.position.set(0, this.symbol3.height + this.symbol3.y + 30), this.symbol4.position.set(0, this.content4.y + this.content4.height + 30), this.content5.position.set(0, this.symbol4.height + this.symbol4.y + 30), this.symbol5.position.set(0, this.content5.y + this.content5.height + 30), this.content6.position.set(0, this.symbol5.height + this.symbol5.y + 30), this.content7.position.set(0, this.content6.height + this.content6.y + 30)))
                    }
                }
                class _o extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "content1", void 0), this.title = new Do(Lt.i18n.t("PaytableSectionBonusScaleTitle").toUpperCase()), this.title.position.set(0, 0), this.content1 = new Io(Lt.i18n.t("PaytableSectionBonusScaleContent1")), this.content1.position.set(0, this.title.height + this.title.y + 30), this.addChild(this.title, this.content1)
                    }
                    resize() {
                        this.game.device.desktop || (this.game.device.landscape, this.content1.position.set(0, this.title.height + this.title.y + 30))
                    }
                }
                class Uo extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "content1", void 0), this.title = new Do(Lt.i18n.t("PaytableSectionExtraBonusFeatureTitle").toUpperCase()), this.title.position.set(0, 0), this.content1 = new Io(Lt.i18n.t("PaytableSectionExtraBonusFeatureContent1")), this.content1.position.set(0, this.title.height + this.title.y + 30), this.addChild(this.title, this.content1)
                    }
                    resize() {
                        this.game.device.desktop || (this.game.device.landscape, this.content1.position.set(0, this.title.height + this.title.y + 30))
                    }
                }
                class Vo extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "sectionTitle", void 0), (0, n.Z)(this, "symbol1", void 0), (0, n.Z)(this, "symbol2", void 0), (0, n.Z)(this, "symbol3", void 0), (0, n.Z)(this, "symbol4", void 0), (0, n.Z)(this, "symbol5", void 0), (0, n.Z)(this, "symbol6", void 0), (0, n.Z)(this, "symbol7", void 0), (0, n.Z)(this, "symbol8", void 0), (0, n.Z)(this, "symbol9", void 0), (0, n.Z)(this, "symbols", void 0), this.sectionTitle = new Do(this.game.i18n.t("PaytableSectionPayoutTitle").toUpperCase()), this.symbol1 = new jo("wolf"), this.symbol1.position.set(0, this.sectionTitle.y + this.sectionTitle.height + 30), this.symbol2 = new jo("bear"), this.symbol2.position.set(600, this.sectionTitle.y + this.sectionTitle.height + 30), this.symbol3 = new jo("fox"), this.symbol3.position.set(0, this.symbol1.y + this.symbol1.height + 30), this.symbol4 = new jo("lynx"), this.symbol4.position.set(600, this.symbol2.y + this.symbol2.height + 30), this.symbol5 = new jo("a"), this.symbol5.position.set(0, this.symbol3.y + this.symbol3.height + 30), this.symbol6 = new jo("k"), this.symbol6.position.set(600, this.symbol4.y + this.symbol4.height + 30), this.symbol7 = new jo("q"), this.symbol7.position.set(0, this.symbol5.y + this.symbol5.height + 30), this.symbol8 = new jo("j"), this.symbol8.position.set(600, this.symbol6.y + this.symbol6.height + 30), this.symbol9 = new jo("ten"), this.symbol9.position.set(0, this.symbol7.y + this.symbol7.height + 30), this.symbols = [this.symbol1, this.symbol2, this.symbol3, this.symbol4, this.symbol5, this.symbol6, this.symbol7, this.symbol8, this.symbol9], this.addChild(this.sectionTitle, ...this.symbols)
                    }
                    updateBet(t) {
                        this.symbols.forEach((e => e.updateBet(t))), this.resize()
                    }
                    resize() {
                        this.game.device.desktop || (this.game.device.landscape ? (this.symbol1.position.set(0, this.sectionTitle.y + this.sectionTitle.height + 30), this.symbol2.position.set(820, this.sectionTitle.y + this.sectionTitle.height + 30), this.symbol3.position.set(0, this.symbol1.y + this.symbol1.height + 30), this.symbol4.position.set(820, this.symbol2.y + this.symbol2.height + 30), this.symbol5.position.set(0, this.symbol3.y + this.symbol3.height + 30), this.symbol6.position.set(820, this.symbol4.y + this.symbol4.height + 30), this.symbol7.position.set(0, this.symbol5.y + this.symbol5.height + 30), this.symbol8.position.set(820, this.symbol6.y + this.symbol6.height + 30), this.symbol9.position.set(0, this.symbol7.y + this.symbol7.height + 30)) : this.game.device.portrait && !this.game.device.desktop && (this.symbol1.position.set(0, this.sectionTitle.y + this.sectionTitle.height + 30), this.symbol2.position.set(0, this.symbol1.y + this.symbol1.height + 30), this.symbol3.position.set(0, this.symbol2.y + this.symbol2.height + 30), this.symbol4.position.set(0, this.symbol3.y + this.symbol3.height + 30), this.symbol5.position.set(0, this.symbol4.y + this.symbol4.height + 30), this.symbol6.position.set(0, this.symbol5.y + this.symbol5.height + 30), this.symbol7.position.set(0, this.symbol6.y + this.symbol6.height + 30), this.symbol8.position.set(0, this.symbol7.y + this.symbol7.height + 30), this.symbol9.position.set(0, this.symbol8.y + this.symbol8.height + 30)))
                    }
                }
                class zo extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "content1", void 0), this.title = new Do(Lt.i18n.t("PaytableSectionWildFeatureTitle").toUpperCase()), this.title.position.set(0, 0), this.content1 = new Io(Lt.i18n.t("PaytableSectionWildFeatureContent1")), this.content1.position.set(0, this.title.height + this.title.y + 30), this.addChild(this.title, this.content1)
                    }
                    resize() {
                        this.game.device.desktop || (this.game.device.landscape, this.content1.position.set(0, this.title.height + this.title.y + 30))
                    }
                }
                class Go extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "symbol", void 0), (0, n.Z)(this, "content1", void 0), this.title = new Do(Lt.i18n.t("PaytableSectionWildSymbolTitle").toUpperCase()), this.title.position.set(0, 0), this.symbol = new jo("wild"), this.symbol.position.set(0, this.title.y + this.title.height + 30), this.symbol.withoutPayout(), this.content1 = new Io(Lt.i18n.t("PaytableSectionWildSymbolContent1")), this.content1.setTagStyle("default", {
                            wordWrapWidth: 490
                        }), this.content1.position.set(this.symbol.width + this.symbol.x, this.symbol.height / 2 + this.symbol.y - this.content1.height / 2), this.addChild(this.title, this.symbol, this.content1)
                    }
                    updateBet(t) {
                        this.symbol.updateBet(t), this.resize()
                    }
                    resize() {
                        this.game.device.desktop || (this.game.device.landscape ? (this.symbol.position.set(0, this.title.y + this.title.height + 30), this.content1.setTagStyle("default", {
                            wordWrapWidth: 490
                        }), this.content1.position.set(0, this.symbol.height + this.symbol.y + 30)) : (this.symbol.position.set(0, this.title.y + this.title.height + 30), this.content1.setTagStyle("default", {
                            wordWrapWidth: 390
                        }), this.content1.position.set(0, this.symbol.height + this.symbol.y + 60)))
                    }
                }
                class Ho extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "_betWays", void 0), (0, n.Z)(this, "_payTableParagraph", void 0), (0, n.Z)(this, "_payTableTitle", void 0), (0, n.Z)(this, "_textureAtlas", void 0), this._payTableTitle = new Do(this.game.i18n.t("PaytableSectionBetLinesTitle").toUpperCase()), this._payTableParagraph = new Io(this.game.i18n.t("PaytableSectionBetLinesContent")), this._payTableParagraph.y = 190, this._textureAtlas = this.game.loader.getAsset("paytable"), this._betWays = new tt.j(this._textureAtlas.payways_scheme), this._betWays.scale.set(2), this._betWays.y = 60, this.addChild(this._payTableTitle, this._betWays, this._payTableParagraph)
                    }
                    resize() {
                        this.game.device.desktop || (this.game.device.landscape, this._betWays.scale.set(3), this._betWays.y = this._payTableTitle.y + this._payTableTitle.height + 30, this._payTableParagraph.y = this._betWays.y + this._betWays.height + 30)
                    }
                }
                const Qo = Ho;
                class Yo extends Fo {
                    constructor(t) {
                        super(), (0, n.Z)(this, "_paytableSectionRNB", void 0), (0, n.Z)(this, "_paytableSectionPayout", void 0), (0, n.Z)(this, "_paytableSectionWildSymbol", void 0), (0, n.Z)(this, "_paytableSectionWildFeature", void 0), (0, n.Z)(this, "_paytableSectionBonusScale", void 0), (0, n.Z)(this, "_paytableSectionBonusGame", void 0), (0, n.Z)(this, "_paytableSectionExtraBonusFeature", void 0), (0, n.Z)(this, "payTableDelimiter", void 0), (0, n.Z)(this, "_paytableSectionBetLines", void 0), this._paytableSectionRNB = new No, this._paytableSectionPayout = new Vo, this._paytableSectionWildSymbol = new Go, this._paytableSectionWildFeature = new zo, this._paytableSectionBonusScale = new _o, this._paytableSectionBonusGame = new Lo, this._paytableSectionExtraBonusFeature = new Uo, this.payTableDelimiter = new Ro, this._paytableSectionBetLines = new Qo(t), this.content.addChild(this._paytableSectionRNB, this._paytableSectionPayout, this._paytableSectionWildSymbol, this._paytableSectionWildFeature, this._paytableSectionBonusScale, this._paytableSectionBonusGame, this._paytableSectionExtraBonusFeature, this.payTableDelimiter, this._paytableSectionBetLines)
                    }
                    updateBet(t) {
                        this._paytableSectionPayout.updateBet(t), this._paytableSectionWildSymbol.updateBet(t)
                    }
                }

                function Xo(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function Ko(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Xo(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Xo(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class qo extends(Gt(Te)) {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        super("", Ko(Ko({}, t), {}, {
                            default: Ko({
                                fill: "#ffffff",
                                fontFamily: "Avenir-Bold",
                                fontSize: 18,
                                align: "center",
                                wordWrap: !0,
                                wordWrapWidth: 260
                            }, t.default)
                        })), this.anchor.set(.5, 0), this.text = this.game.i18n.t("RiskNBuyBuyFor", this.game.i18n.currency({
                            withBrace: !0
                        }))
                    }
                    show() {
                        this.renderable = !0
                    }
                    hide() {
                        this.renderable = !1
                    }
                }

                function Jo(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function $o(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? Jo(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Jo(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class tn extends(Gt(Te)) {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        super("", $o($o({}, t), {}, {
                            default: $o({
                                fill: "#ffffff",
                                fontFamily: "Avenir-Bold",
                                fontSize: 37,
                                align: "center",
                                wordWrap: !0,
                                wordWrapWidth: 260
                            }, t.default)
                        })), this.anchor.set(.5, 0)
                    }
                    show() {
                        this.renderable = !0
                    }
                    hide() {
                        this.renderable = !1
                    }
                }
                class en extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "name", "RiskFeature"), (0, n.Z)(this, "currentBet", 0), (0, n.Z)(this, "onPress", new(S())), this.visible = !1
                    }
                    updateCurrentBet(t) {
                        this.currentBet = t
                    }
                    show(t) {
                        this.visible = this.game.preferences.get("showRiskFeature", !0) && this.currentBet === t
                    }
                    hide() {
                        this.visible = !1, this.currentBet = 0
                    }
                }

                function sn(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function on(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? sn(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : sn(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class nn extends(Gt(Te)) {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        super("", on(on({}, t), {}, {
                            default: on({
                                fill: "#ffffff",
                                fontFamily: "Avenir-Bold",
                                fontSize: 22,
                                align: "center",
                                wordWrap: !0,
                                wordWrapWidth: 200
                            }, t.default)
                        })), this.anchor.set(.5), this.text = this.game.i18n.t("RiskNBuySubHeader").toUpperCase()
                    }
                    show() {
                        this.renderable = !0
                    }
                    hide() {
                        this.renderable = !1
                    }
                }

                function an(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function hn(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? an(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : an(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class rn extends(Gt(Te)) {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        super("", hn(hn({}, t), {}, {
                            default: hn({
                                fill: "#ffffff",
                                fontFamily: "Avenir-Bold",
                                fontSize: 18,
                                align: "center",
                                wordWrap: !0,
                                wordWrapWidth: 220
                            }, t.default)
                        })), this.anchor.set(.5, 0), this.text = this.game.i18n.t("RiskNBuyOnBet", this.game.i18n.currency({
                            withBrace: !0
                        }))
                    }
                    show() {
                        this.renderable = !0
                    }
                    hide() {
                        this.renderable = !1
                    }
                }

                function ln(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function dn(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? ln(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ln(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                class cn extends(Gt(Te)) {
                    constructor() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        super("", dn(dn({}, t), {}, {
                            default: dn({
                                fill: "#ffffff",
                                fontFamily: "Avenir-Bold",
                                fontSize: 37,
                                align: "center",
                                wordWrap: !0,
                                wordWrapWidth: 260
                            }, t.default)
                        })), this.anchor.set(.5, 0)
                    }
                    show() {
                        this.renderable = !0
                    }
                    hide() {
                        this.renderable = !1
                    }
                }
                class un extends en {
                    constructor() {
                        super(), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "backgroundContent", void 0), (0, n.Z)(this, "buyFor", void 0), (0, n.Z)(this, "buyValue", void 0), (0, n.Z)(this, "onBet", void 0), (0, n.Z)(this, "onBetValue", void 0), (0, n.Z)(this, "featureButton", void 0), (0, n.Z)(this, "bonusHeader", void 0), (0, n.Z)(this, "header", void 0), (0, n.Z)(this, "onPress", void 0), this.onPress = new(S()), this.background = this.addChild(new tt.j(this.game.loader.getAsset("risk", "bg"))), this.backgroundContent = this.addChild(new Y.W2), this.header = this.backgroundContent.addChild(new nn({
                            default: {
                                fontSize: 24,
                                wordWrapWidth: 200,
                                fill: "#ffffff"
                            }
                        })), this.bonusHeader = this.backgroundContent.addChild(new tt.j(this.game.loader.getAsset("risk", "bonus"))), this.bonusHeader.anchor.set(.5), this.buyFor = this.backgroundContent.addChild(new qo({
                            default: {
                                fill: 16762931,
                                fontSize: 26,
                                wordWrapWidth: 220
                            }
                        })), this.buyValue = this.backgroundContent.addChild(new tn({
                            default: {
                                fontSize: 46
                            }
                        })), this.onBet = this.backgroundContent.addChild(new rn({
                            default: {
                                fill: 16762931,
                                fontSize: 26,
                                wordWrapWidth: 220
                            }
                        })), this.onBetValue = this.backgroundContent.addChild(new cn({
                            default: {
                                fontSize: 46
                            }
                        })), this.featureButton = this.addChild(new tt.j(this.game.loader.getAsset("risk", "buyBtn"))), this.featureButton.texture = this.game.loader.getAsset("risk", "riskBtn"), this.featureButton.cursor = "pointer", this.featureButton.interactive = !1, this.game.interaction.click(this.featureButton, (() => {
                            this.featureButton.interactive = !1, this.onPress.dispatch()
                        }))
                    }
                    show(t) {
                        if (this.game.store.get("isRiskNBuy") && (super.show(t), this.visible)) {
                            var e = this.game.store.get("risk", !1),
                                i = this.game.store.get("buy", !1);
                            this.featureButton.interactive = !0, this.featureButton.texture = this.game.loader.getAsset("risk", e ? "riskBtn" : "buyBtn"), e ? (this.header.show(), this.buyFor.hide(), this.buyValue.hide(), this.onBetValue.text = "".concat(Lt.helpers.toMoneySS(this.game.betLevel.toCoins())), this.header.position.set(0, 20), this.bonusHeader.position.set(0, 135), this.onBet.position.set(0, this.bonusHeader.y + this.bonusHeader.height), this.onBetValue.position.set(0, this.onBet.y + this.onBet.height), this.featureButton.position.set(40, 450), this.backgroundContent.position.set(177, 50)) : (this.header.hide(), this.buyFor.show(), this.buyValue.show(), this.buyValue.text = "".concat(Lt.helpers.toMoneySS(i.bet)), this.onBetValue.text = "".concat(Lt.helpers.toMoneySS(this.game.betLevel.toCoins())), this.bonusHeader.position.set(0, -80), this.buyFor.position.set(0, 0), this.buyValue.position.set(0, this.buyFor.height + this.buyFor.y), this.onBet.position.set(0, this.buyValue.height + this.buyValue.y + 30), this.onBetValue.position.set(0, this.onBet.height + this.onBet.y), this.featureButton.position.set(72, 450), this.backgroundContent.position.set(177, 140))
                        }
                    }
                    hide() {
                        super.hide(), this.featureButton.interactive = !1
                    }
                    resize() {
                        this.game.device.desktop ? this.position.set(1560, 170) : this.game.device.landscape ? (this.scale.set(1.15), this.game.leftHand.enabled ? this.position.set(1520, 100) : this.position.set(0, 100)) : (this.scale.set(1.2), this.position.set(490, 330))
                    }
                }
                class pn extends(Gt(Y.W2)) {
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
                class gn extends(Gt(Y.W2)) {
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
                        this.background ? this.background.texture = e : this.background = this.addChildAt(new tt.j(e), 0)
                    }
                }
                var mn = Symbol("BonusScale"),
                    An = 625;
                class bn extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "id", mn), (0, n.Z)(this, "bg", void 0), (0, n.Z)(this, "frame", void 0), (0, n.Z)(this, "progressLine", void 0), (0, n.Z)(this, "progressAnimation", void 0), (0, n.Z)(this, "scaleConut", void 0), (0, n.Z)(this, "currentBonusValue", void 0), (0, n.Z)(this, "currentNormalNumber", void 0), this.currentBonusValue = 3, this.currentNormalNumber = 0, this.bg = new tt.j(this.game.loader.getAsset("assets/images/scale/bg.png")), this.bg.x = 7, this.frame = new tt.j(this.game.loader.getAsset("assets/images/scale/frame.png")), this.progressLine = new tt.j(this.game.loader.getAsset("assets/images/scale/scale.png")), this.progressLine.position.set(10, An), this.frame.y = -12, this.progressAnimation = new Ls(this.game.loader.getAsset("assets/images/effects/scale/skeleton.json")), this.progressAnimation.position.set(0, -12), this.progressAnimation.changeSkin("bonusGame"), this.progressAnimation.play("static", !0);
                        var t = this.addChild(new p.TC);
                        t.beginFill(0, 1), t.drawRect(0, 14, 100, 610), t.endFill(), this.progressLine.mask = t, this.scaleConut = new Te("", {
                            default: {
                                fill: "#ffffff",
                                fontFamily: "PT Sans Narrow Bold",
                                fontSize: 45,
                                align: "left",
                                lineJoin: "round",
                                miterLimit: 0,
                                strokeThickness: 10,
                                stroke: "#6d2b0f"
                            }
                        }), this.scaleConut.anchor.x = .5, this.addChild(this.bg, this.progressLine, this.frame, this.progressAnimation, this.scaleConut), this.update($i.isBonus() ? this.game.store.get("bonus:left", 0) : this.game.store.get("bonus:lostCount", -1), !0)
                    }
                    update(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                            o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                            n = i ? Lt.store.get("bonus:total", 0) : Lt.store.get("bonus:lostScale", 0),
                            a = 605 / (s ? n - o : n);
                        this.scaleConut.text = "".concat(t, "/").concat(s ? n - o : n), this.scaleConut.position.set(56, -40), (i || 0 !== t || this.progressLine.y !== An) && ($i.isBonus() && i ? this.currentBonusValue = t : this.currentNormalNumber = t, e || (this.progressAnimation.play("animation"), $i.isBonus() && i ? this.currentBonusValue > t ? this.game.action.emit("sound:scaleDown") : this.currentBonusValue < t && this.game.action.emit("sound:scaleUp") : this.currentNormalNumber > t ? this.game.action.emit("sound:scaleDown") : this.currentNormalNumber < t && this.game.action.emit("sound:scaleUp")), B.to(this.progressLine, e ? 0 : .2, {
                            pixi: {
                                y: t >= 0 ? An - a * t : An
                            }
                        }))
                    }
                    playWin() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            yield t.game.helpers.delay(400), t.progressAnimation.play("stop", !0), yield t.game.helpers.delay(1500)
                        }))()
                    }
                    reset() {
                        this.progressLine.y = An, this.progressAnimation.changeSkin("bonus" === this.game.store.get("reward:feature") ? "bonusSpins" : "bonusGame"), this.progressAnimation.play("static")
                    }
                    resize() {
                        this.game.device.desktop || this.game.device.landscape ? this.game.leftHand.enabled ? $i.isBonus() ? this.position.set(-90, 290) : this.position.set(1350, 290) : this.position.set(-181, 290) : this.position.set(1330, 320)
                    }
                }
                class vn extends(Gt(tt.j)) {
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

                function yn(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        e && (s = s.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), i.push.apply(i, s)
                    }
                    return i
                }

                function wn(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? yn(Object(i), !0).forEach((function(e) {
                            (0, n.Z)(t, e, i[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : yn(Object(i)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                        }))
                    }
                    return t
                }
                var fn = new _s;
                class xn extends vn {
                    constructor(t, e, i) {
                        var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "normal";
                        super(i), (0, n.Z)(this, "data", void 0), (0, n.Z)(this, "layoutType", void 0), (0, n.Z)(this, "symbolAnimation", void 0), (0, n.Z)(this, "isPlaying", !1), this.type = s, this.position.set(t, e), this.layoutType = "default", this.symbolAnimation = fn.addChild(new Ls(this.game.loader.getAsset("symbolAnimation"))), this.symbolAnimation.renderable = !1, this.replaceTexture(i)
                    }
                    replaceTexture(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        "bonus" === this.type && !e || i ? (t = "string" == typeof t ? t.slice(0, 1) : t, this.currentTextureIndex = 0 === t || -1 === t ? function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 20,
                                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 22,
                                i = t + Math.random() * (e + 1 - t);
                            return Math.floor(i)
                        }() : t <= 9 ? 11 : t >= 10 && t <= 49 ? 12 : 50 === t ? 13 : "M" === t ? 14 : 15) : this.currentTextureIndex = +(t > -1 ? t : 20), this.data = this.game.config.get("slot.layout.".concat(this.layoutType, "[").concat(this.currentTextureIndex, "]"), null), this.texture = this.game.loader.getAsset(this.data.textureAtlas, this.data.assetName)
                    }
                    playAnimation(t) {
                        var e;
                        this.hide(), fn.addChild(this.symbolAnimation);
                        var i = wn(wn({}, this.data.animation), t);
                        if (!(!this.visible || this.symbolAnimation.renderable && this.symbolAnimation.playing && this.symbolAnimation.skinName === i.skin && this.symbolAnimation.animationName === i.effectName)) {
                            this.symbolAnimation.position.set("bonus" === this.type ? this.parentReel.x : this.x, "bonus" === this.type ? this.parentReel.y : this.y), i.skin && this.symbolAnimation.changeSkin(i.skin);
                            var s = "string" == typeof i.effectName[t] ? i.effectName[t] : i.effectName[i.animationName] || i.effectName.normal;
                            this.symbolAnimation.renderable = !0, this.symbolAnimation.play(s, "idle" === s, null !== (e = i.trackIndex) && void 0 !== e ? e : 0)
                        }
                    }
                    clearAnimation() {
                        this.isPlaying && (this.show(), this.symbolAnimation.stop(), this.symbolAnimation.renderable = !1)
                    }
                    stopAnimation() {
                        this.isPlaying = !1, this.show(), this.symbolAnimation.stop(), this.symbolAnimation.renderable = !1, fn.removeChild(this.symbolAnimation)
                    }
                    get isBonus() {
                        return 11 === this.currentTextureIndex || 12 === this.currentTextureIndex || 13 === this.currentTextureIndex || 14 === this.currentTextureIndex || 15 === this.currentTextureIndex
                    }
                    overlay() {
                        this.tint = 5460819
                    }
                    removeOverlay() {
                        this.visible = !0, this.tint = 16777215
                    }
                    getCurrentTextureIndex() {
                        return this.currentTextureIndex
                    }
                    get parentReel() {
                        return this.parent.parent
                    }
                    blur() {
                        this.layoutType = "blur", this.data = this.game.config.get("slot.layout.".concat(this.layoutType, "[").concat(this.currentTextureIndex, "]"), null), this.texture = this.game.loader.getAsset(this.data.textureAtlas, this.data.assetName)
                    }
                    unblur() {
                        this.layoutType = "default", this.data = this.game.config.get("slot.layout.".concat(this.layoutType, "[").concat(this.currentTextureIndex, "]"), null), this.texture = this.game.loader.getAsset(this.data.textureAtlas, this.data.assetName)
                    }
                }
                class Sn extends(Gt(Y.W2)) {
                    constructor(t, e) {
                        super(), (0, n.Z)(this, "_endTween", void 0), (0, n.Z)(this, "_nReel", void 0), (0, n.Z)(this, "_numberSpinToComplete", void 0), (0, n.Z)(this, "_reel", void 0), (0, n.Z)(this, "_reelIndex", void 0), (0, n.Z)(this, "_spinTween", void 0), (0, n.Z)(this, "_startTween", void 0), (0, n.Z)(this, "_startY", void 0), (0, n.Z)(this, "_stopTimeout", void 0), (0, n.Z)(this, "_stopTimeoutDuration", void 0), (0, n.Z)(this, "_symbolsContainer", void 0), (0, n.Z)(this, "isStop", void 0), (0, n.Z)(this, "symbolsPositions", void 0), (0, n.Z)(this, "visibleSymbols", void 0), (0, n.Z)(this, "rectMask", void 0), this.interactiveChildren = !1, this.visibleSymbols = [], this.symbolsPositions = e, this._startY = 0, this._reel = [], this._nReel = [], this._reelIndex = t, this._numberSpinToComplete = 0, this.isStop = !1, this._stopTimeout = null, this._stopTimeoutDuration = 0, this._symbolsContainer = this.addChild(new Y.W2), this._startTween = new B(this._symbolsContainer, Lt.config.get("wheel.durationSpin"), {
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
                                this._symbolsContainer.children.forEach((t => t.blur())), this._spinTween.restart()
                            }
                        }), this._spinTween = new B(this._symbolsContainer, Lt.config.get("wheel.durationSpin"), {
                            paused: !0,
                            roundProps: ["y"],
                            pixi: {
                                y: Lt.config.get("symbol.y")
                            },
                            ease: "Linear.easeNone",
                            repeat: -1,
                            repeatDelay: 0,
                            onRepeat: this._spin.bind(this)
                        }), this._endTween = new B(this._symbolsContainer, .01, {
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
                        }), this._setup()
                    }
                    start() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            t.enableMask(), t.showNReel(!0), t.stopAnimation(), t.isStop = !1, t._numberSpinToComplete = t.visibleSymbols.length;
                            var e = Lt.config.get("slot.reels"),
                                i = Lt.store.get("reward:nReels", [])[t._reelIndex % e].concat();
                            t._symbolsContainer.children.forEach((e => {
                                (e.y < t.visibleSymbols[0].y || e.y > t.visibleSymbols[t.visibleSymbols.length - 1].y) && e.replaceTexture(i[t.game.helpers.random(0, i.length - 1)])
                            }));
                            var s = Lt.quickSpin.enabled ? Lt.config.get("wheel.durationQuickDelta") : Lt.config.get("wheel.durationDelta");
                            t._endTween.duration(s), t._stopTimeoutDuration = Lt.quickSpin.enabled ? Lt.config.get("wheel.durationQuickStop") : Lt.config.get("wheel.durationStop"), t._startTween.restart()
                        }))()
                    }
                    stop() {
                        if (!this.isStop) {
                            var t = Lt.config.get("slot.reels"),
                                e = Lt.store.get("reward:nReels", []);
                            this._nReel = e[this._reelIndex % t].concat();
                            var i = Lt.store.get("reward:reels", []);
                            if (this._reel = [i[this._reelIndex % t][Math.floor(this._reelIndex / t)]], Lt.store.get("spin:isFast", !1)) Lt.action.emit("sound:spinFast"), clearTimeout(this._stopTimeout), this.isStop = !0;
                            else {
                                var s = Math.trunc(this._reelIndex / t),
                                    o = 0 === this._reelIndex ? 0 : 1 === this._reelIndex || 5 === this._reelIndex ? 1 : 2 === this._reelIndex || 6 === this._reelIndex || 10 === this._reelIndex ? 2 : 3 === this._reelIndex || 7 === this._reelIndex || 11 === this._reelIndex || 15 === this._reelIndex ? 3 : 4 === this._reelIndex || 8 === this._reelIndex || 12 === this._reelIndex || 16 === this._reelIndex ? 4 : 9 === this._reelIndex || 13 === this._reelIndex || 17 === this._reelIndex ? 5 : 14 === this._reelIndex || 18 === this._reelIndex ? 6 : 7;
                                this._stopTimeout = setTimeout((() => this.isStop = !0), Lt.quickSpin.enabled ? this._stopTimeoutDuration * (s + 1) : this._stopTimeoutDuration * o)
                            }
                        }
                    }
                    overlay() {
                        this.visibleSymbols.forEach((t => t.overlay()))
                    }
                    clearAnimation() {
                        this.visibleSymbols.forEach((t => t.clearAnimation()))
                    }
                    stopAnimation() {
                        this.visibleSymbols.forEach((t => t.stopAnimation()))
                    }
                    _updateVisibleSymbols() {
                        this.visibleSymbols.length = 0;
                        for (var t = 1, e = this._symbolsContainer.children.length - 1; t < e; t++) this.visibleSymbols.push(this._symbolsContainer.children[t])
                    }
                    _setup() {
                        var t = Lt.config.get("slot.reels"),
                            e = Lt.config.get("symbol.width"),
                            i = Lt.config.get("symbol.height"),
                            s = Lt.store.get("reward:nReels", []);
                        this._nReel = s[this._reelIndex % t].concat();
                        var o = Lt.store.get("reward:reels", []);
                        this._reel = [o[this._reelIndex % t][Math.floor(this._reelIndex / t)]];
                        var n = this._reelIndex % t * e,
                            a = Math.floor(this._reelIndex / t) * i;
                        this._symbolsContainer.addChild(new xn(0, 0, this._nReel[this.game.helpers.random(0, s.length - 1)], "bonus")).position.set(0, 15 - i);
                        var h = this._symbolsContainer.addChild(new xn(0, 0, this._reel[0], "bonus"));
                        h.position.set(0, 0), this._symbolsContainer.addChild(new xn(0, 0, this._nReel[this.game.helpers.random(0, s.length - 1)], "bonus")).position.set(0, i - 15), this.visibleSymbols.push(h), this.rectMask = this.addChild(new p.TC), this.rectMask.alpha = 0, this.rectMask.beginFill(), this.rectMask.drawRect(87, 90, e, i - 7), this.rectMask.endFill(), this.x = n, this.y = a, this._startY = this._symbolsContainer.children[0].y, this.showNReel(!1)
                    }
                    _spin() {
                        if (this._flip(), this.isStop)
                            if (this._numberSpinToComplete > 0) {
                                var t = this._reel[--this._numberSpinToComplete];
                                this._symbolsContainer.children[0].replaceTexture(t)
                            } else this._symbolsContainer.y = 0, this._symbolsContainer.children[0].y = this._startY, this._updateVisibleSymbols(), this._symbolsContainer.children.forEach((t => t.unblur())), this._spinTween.pause(), this._endTween.restart()
                    }
                    _flip() {
                        var t = this._symbolsContainer.children.pop();
                        t.y = this._startY, !this.isStop && this._nReel.length;
                        for (var e = 0, i = this._symbolsContainer.children.length; e < i; e++) this._symbolsContainer.children[e].y = e * -this._startY;
                        this._symbolsContainer.children.unshift(t)
                    }
                    _complete() {
                        this._symbolsContainer.y = 0, this._reel.length = 0, this._endTween.pause(), this.showNReel(!1), this.disableMask(), clearTimeout(this._stopTimeout), Lt.action.emit("wheel:stop", this._reelIndex)
                    }
                    update(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        this.visibleSymbols[0].replaceTexture(t[0], e, i)
                    }
                    showNReel(t) {
                        this._symbolsContainer.children[0].visible = t, this._symbolsContainer.children[2].visible = t
                    }
                    disableMask() {
                        this.rectMask.alpha = 0, this.mask = null
                    }
                    enableMask() {
                        this.rectMask.alpha = 1, this.mask = this.rectMask
                    }
                }
                class kn extends(Gt(Y.W2)) {
                    constructor(t) {
                        super(), (0, n.Z)(this, "slot", void 0), this.slot = t
                    }
                    showWilds() {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            s = i ? this.game.store.get("reward:preOverlayWilds", !1) : e ? this.game.store.get("reward:restoreOverlayWilds", !1) : this.game.store.get("reward:overlayWilds", !1);
                        if (s) {
                            var o = function(o) {
                                var n = t.game.config.get("slot.symbolsPositions")[s[o][0]][s[o][1] + 1];
                                if ((!t.children.find((t => t.index === o)) && s[o][0] < t.game.config.get("slot.size")[0] - 1 || e) && s[o][0] < t.game.config.get("slot.size")[0] - 1) {
                                    var a = new Ls(t.game.loader.getAsset("symbolAnimation"));
                                    a.index = o, a.position.set(n[0], n[1]), a.changeSkin("wild"), t.addChild(a), e ? (a.play("idle", !0), 800) : (a.play("addMulti"), t.changeTextureToWild(i, !0))
                                }
                            };
                            for (var n in s) o(n)
                        }
                    }
                    moveWilds() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            t.children.forEach((e => {
                                e.stop(), e.play("wildTransition"), B.fromTo(e, 1, {
                                    pixi: {
                                        x: e.x
                                    }
                                }, {
                                    pixi: {
                                        x: e.x + t.game.config.get("symbol.width")
                                    }
                                })
                            })), t.game.action.emit("sound:wildTransition"), yield t.game.helpers.delay(100), t.slot.reels.forEach((t => {
                                t.visibleSymbols.forEach((t => {
                                    t.visible = !0
                                }))
                            }))
                        }))()
                    }
                    changeTextureToWild() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? this.game.store.get("reward:restoreOverlayWilds", !1) : t ? this.game.store.get("reward:afterBonuspreOverlayWilds", !1) : this.game.store.get("reward:overlayWilds", !1);
                        if (i)
                            for (var s in i) {
                                var o = this.slot.reels[i[s][0]].visibleSymbols[i[s][1]];
                                o.replaceTexture(1, !0), o.visible = !e || i[s][0] === this.game.config.get("slot.size")[0] - 1
                            }
                    }
                    showSymbols() {
                        this.slot.reels.forEach((t => {
                            t.visibleSymbols.forEach((t => {
                                t.visible = !0
                            }))
                        }))
                    }
                    hideUnusedWilds() {
                        var t = this,
                            e = this.game.store.get("reward:overlayWilds", !1),
                            i = function(i) {
                                var s = t.children.find((t => t.index === i)),
                                    o = t.slot.reels[e[i][0]].visibleSymbols[e[i][1]];
                                s && e[i][0] >= t.game.config.get("slot.size")[0] - 1 && (s.renderable = !1, o.replaceTexture(1), o.visible = !0)
                            };
                        for (var s in e) i(s)
                    }
                    removeUnusedWilds() {
                        this.children.forEach((t => {
                            t.renderable || this.removeChild(t)
                        }))
                    }
                    removeAllWilds() {
                        this.removeChildren(), this.game.store.set("reward:overlayWilds", !1), this.slot.reels.forEach((t => {
                            t.visibleSymbols.forEach((t => {
                                t.visible = !0
                            }))
                        }))
                    }
                    hideOnZeroBalance() {
                        this.alpha = 0, this.slot.reels.forEach((t => {
                            t.visibleSymbols.forEach((t => {
                                t.visible = !0
                            }))
                        }))
                    }
                    showAfterBalanceUpdate() {
                        this.alpha = 1
                    }
                }
                class Bn extends(Gt(Y.W2)) {
                    constructor() {
                        super()
                    }
                    get isStop() {
                        return this.game.autoPlay.enabled && this.game.autoPlay.count > 0
                    }
                }
                const Cn = class extends Bn {
                    constructor(t) {
                        super(), (0, n.Z)(this, "_flushInterval", void 0), (0, n.Z)(this, "_wins", void 0), (0, n.Z)(this, "slot", void 0), this.slot = t, this._wins = [], this._flushInterval = null
                    }
                    get isStop() {
                        return super.isStop || !$i.isBasic()
                    }
                    stop() {
                        this._wins.length = 0, clearInterval(this._flushInterval), this.slot.reels.forEach((t => t.stopAnimation())), this.slot.textLineWin.clear(), Lt.action.emit("stopAnimation"), this.slot.wilds.show()
                    }
                    _getWinSoundNumber() {
                        var t = Lt.store.get("reward:numberWinSymbol", 0);
                        return t <= 9 ? 1 : t > 9 && t <= 13 ? 2 : 3
                    }
                    allPayment(t) {
                        var e = this;
                        return (0, o.Z)((function*() {
                            e.slot.reels.forEach((t => t.overlay())), e.slot.wilds.changeTextureToWild(), e.slot.wilds.showSymbols(), e.slot.wilds.hide();
                            for (var i = 0, s = t.length; i < s; i++) {
                                var o = t[i];
                                e._wins.push(o), e._runSymbolAnimation(o, !1)
                            }
                            var n = e._getWinSoundNumber();
                            Lt.action.emit("sound:win", n), yield e.slot.textTotalWin.show(Lt.wallet.coins, (() => {
                                Lt.action.emit("update:win"), Lt.action.emit("update:balance")
                            }))
                        }))()
                    }
                    bonusPayment(t) {
                        var e = this;
                        return (0, o.Z)((function*() {
                            e.game.action.emit("sound:scatterWin"), t.length > 0 && (e.game.action.emit("sound:bonusWinSymbol"), yield e._runBonusSymbolAnimation(t))
                        }))()
                    }
                    breakAllPayment() {
                        this.slot.textTotalWin.break()
                    }
                    complete() {
                        this.isStop ? this.stop() : this._wins.length > 0 && this._flush()
                    }
                    _flush() {
                        var t = t => {
                                this.slot.reels.forEach((t => t.overlay()));
                                var e = this._wins[t];
                                this._runSymbolAnimation(e, !1)
                            },
                            e = 0;
                        t(e++), this._flushInterval = setInterval((() => {
                            e >= this._wins.length && (e = 0), t(e++)
                        }), Ji.get("reward_flush"))
                    }
                    _findSymbol(t, e) {
                        return this.slot.reels[t].visibleSymbols[e]
                    }
                    _runSymbolAnimation(t) {
                        var {
                            pos: e
                        } = t, i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "normal";
                        for (var o of (i && this.slot.reels.forEach((t => t.clearAnimation())), e)) {
                            this.slot.getReelByIndex(o[0]);
                            var n = this._findSymbol(o[0], o[1]),
                                a = Lt.config.get("slot.size[0]") * o[1] + o[0];
                            n.playAnimation({
                                animationName: s,
                                reelPosition: o[0],
                                symbolPosition: a
                            })
                        }
                    }
                    _runBonusSymbolAnimation(t) {
                        var e = this;
                        return (0, o.Z)((function*() {
                            t.forEach((t => {
                                var i = e.slot.getSymbolByPosition(t.pos[0], t.pos[1]);
                                i.playAnimation("win"), i.parentReel.visible = !1
                            })), yield e.game.delay(1e3)
                        }))()
                    }
                };
                class Pn {
                    constructor() {
                        (0, n.Z)(this, "container", void 0), (0, n.Z)(this, "tween", void 0), this.container = new v.Xz("", {
                            fontName: "WinFont"
                        }), this.container.anchor = .5, this.container.alpha = 0
                    }
                    show(t, e, i) {
                        this.container.scale.set(.3), this.container.x = t, this.container.y = e, this.container.text = "".concat(Lt.i18n.currency({
                            bitmap: !0
                        })).concat(Lt.helpers.toMoney(i)), this.container.alpha = 1, this.hide()
                    }
                    hide() {
                        this.tween = B.to(this.container, .2, {
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
                class Tn extends(Gt(Te)) {
                    constructor() {
                        super("", {
                            default: {
                                fill: "#ffffff",
                                fontFamily: "PT Sans Narrow Bold",
                                fontSize: 80,
                                align: "center",
                                wordWrap: !0,
                                lineJoin: "round",
                                stroke: "#000000",
                                strokeThickness: 15
                            }
                        }), (0, n.Z)(this, "type", "none"), (0, n.Z)(this, "value", 0), this.anchor.set(.5)
                    }
                }
                class En extends(Gt(Y.W2)) {
                    constructor(t) {
                        super(), (0, n.Z)(this, "stickyAnimation", void 0), (0, n.Z)(this, "slot", void 0), (0, n.Z)(this, "stickyContainer", void 0), (0, n.Z)(this, "updateContainer", void 0), (0, n.Z)(this, "winSoundPlay", void 0), this.slot = t, this.stickyContainer = this.addChild(new Y.W2), this.updateContainer = this.addChild(new Y.W2)
                    }
                    showSticky(t) {
                        var e = arguments,
                            i = this;
                        return (0, o.Z)((function*() {
                            var s = e.length > 1 && void 0 !== e[1] && e[1],
                                o = e.length > 2 && void 0 !== e[2] && e[2],
                                n = e.length > 3 && void 0 !== e[3] && e[3];
                            if (0 !== t.length) {
                                o && (yield i.slot.animation.bonusPayment(t)), t.forEach((t => {
                                    if (t.isNew || s) {
                                        var e = i.slot.getReelByPosition([t.pos[0]], [t.pos[1]]),
                                            o = "string" == typeof t.sym ? t.sym.slice(0, 1) : t.sym,
                                            n = 0 === o || -1 === o ? function() {
                                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 20,
                                                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 22,
                                                    i = t + Math.random() * (e + 1 - t);
                                                return Math.floor(i)
                                            }() : o <= 9 ? 11 : o >= 10 && o <= 49 ? 12 : 50 === o ? 13 : "M" === o ? 14 : 15,
                                            a = i.game.config.get("slot.layout.default[".concat(n, "]")).assetName;
                                        i.stickyAnimation = i.stickyContainer.addChild(new Ls(i.game.loader.getAsset("symbolAnimation"))), i.stickyAnimation.position.set(e.x, e.y), i.stickyAnimation.changeSkin(a), i.stickyAnimation.play("idle"), i.showBonusText(t.sym, i.stickyAnimation, s)
                                    }
                                })), t.some((t => t.isNew)) && (yield i.game.helpers.delay(s ? 0 : 300));
                                var a = i.game.get("BonusWinText");
                                s ? a.updateAll() : yield i.updateValues(t, n)
                            }
                        }))()
                    }
                    showBonusText(t, e) {
                        var i = arguments;
                        return (0, o.Z)((function*() {
                            var s = i.length > 2 && void 0 !== i[2] && i[2],
                                o = new Tn;
                            e.addChild(o);
                            var n = "string" == typeof t && "M" === t.slice(0, 1) ? "x".concat(t.slice(1)) : "string" == typeof t && 1 === t.length && "U" === t.slice(0, 1) ? "" : "string" == typeof t && 1 !== t.length && "U" === t.slice(0, 1) ? "x".concat(t.slice(1)) : "+".concat(t);
                            return o.text = n, o.position.set(e.width / 2 - o.width / 2, e.height / 2 - o.height / 2), o.type = "string" == typeof t ? "fs" : "mul", o.value = "string" == typeof t ? parseInt(t.slice(2) + t.slice(0, 2), 10) : t, o.renderable = !0, B.fromTo(o, s ? 0 : .5, {
                                pixi: {
                                    scale: 1.5
                                }
                            }, {
                                pixi: {
                                    scale: 1
                                }
                            })
                        }))()
                    }
                    updateValues(t) {
                        var e = arguments,
                            i = this;
                        return (0, o.Z)((function*() {
                            var s = e.length > 1 && void 0 !== e[1] && e[1];
                            t.forEach((t => {
                                if (t.isNew) {
                                    var e = i.slot.getReelByPosition([t.pos[0]], [t.pos[1]]),
                                        n = i.game.device.portrait && !i.game.device.desktop ? [0, 930] : [1200, 300],
                                        a = i.game.device.portrait && !i.game.device.desktop ? [0, 1120] : [1200, 500],
                                        h = i.game.device.portrait && !i.game.device.desktop ? [1200, 500] : [-220, 450],
                                        r = i.updateContainer.addChild(new Ls(i.game.loader.getAsset("assets/images/effects/symbolsMagic/skeleton.json")));
                                    r.position.set(e.x, e.y), r.play("magic", !0);
                                    var l = "string" == typeof t.sym && 1 === t.sym.length ? "U" : "string" == typeof t.sym && 1 !== t.sym.length ? "M" : t.sym;
                                    B.to(r, .5, {
                                        pixi: {
                                            x: "M" === l ? a[0] : "U" === l ? h[0] : n[0],
                                            y: "M" === l ? a[1] : "U" === l ? h[1] : n[1]
                                        },
                                        delay: .5,
                                        onStart: () => {
                                            i.game.action.emit("sound:bonusVars")
                                        },
                                        onComplete: (d = (0, o.Z)((function*() {
                                            yield B.to(r, .1, {
                                                pixi: {
                                                    alpha: 0
                                                }
                                            }), i.game.get("BonusWinText").updateAll(!0, s)
                                        })), function() {
                                            return d.apply(this, arguments)
                                        })
                                    })
                                }
                                var d
                            })), i.game.action.emit("sound:bonusUpdate"), yield i.game.helpers.delay(1e3)
                        }))()
                    }
                    hideStickyReels() {
                        var t = this.game.store.get("bonus:bonuses", []);
                        0 !== t.length && t.forEach((t => {
                            this.slot.getReelByPosition([t.pos[0]], [t.pos[1]]).visible = !1
                        }))
                    }
                    hide() {
                        this.stickyContainer.removeChildren(), this.updateContainer.removeChildren(), this.winSoundPlay = !1
                    }
                }
                var On = new a.ZA(1, !0);
                class Zn extends Y.W2 {
                    constructor(t, e) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        super(), (0, n.Z)(this, "_endTween", void 0), (0, n.Z)(this, "_endY", void 0), (0, n.Z)(this, "_nReel", void 0), (0, n.Z)(this, "_numberSpinToComplete", void 0), (0, n.Z)(this, "_reel", void 0), (0, n.Z)(this, "_reelIndex", void 0), (0, n.Z)(this, "_spinTween", void 0), (0, n.Z)(this, "_startTween", void 0), (0, n.Z)(this, "_startY", void 0), (0, n.Z)(this, "_stopTimeout", void 0), (0, n.Z)(this, "_stopTimeoutDuration", void 0), (0, n.Z)(this, "isStop", void 0), (0, n.Z)(this, "symbolsPositions", void 0), (0, n.Z)(this, "visibleSymbols", void 0), (0, n.Z)(this, "wilds", void 0), (0, n.Z)(this, "rectMask", void 0), this.isPreSpin = i, this.interactiveChildren = !1, this.wilds = new kn, this.visibleSymbols = [], this.symbolsPositions = e, this._startY = 0, this._endY = 0, this._reel = [], this._nReel = [], this._reelIndex = t, this._numberSpinToComplete = 0, this.isStop = !1, this._stopTimeout = null, this._stopTimeoutDuration = 0, this._startTween = new B(this, Lt.config.get("wheel.durationSpin"), {
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
                                this.children.forEach((t => {
                                    t.blur()
                                })), this._spinTween.restart()
                            }
                        }), this._spinTween = new B(this, Lt.config.get("wheel.durationSpin"), {
                            paused: !0,
                            roundProps: ["y"],
                            pixi: {
                                y: Lt.config.get("symbol.y")
                            },
                            ease: "Linear.easeNone",
                            repeat: -1,
                            repeatDelay: 0,
                            onRepeat: this._spin.bind(this)
                        }), this._endTween = new B(this, .01, {
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
                        })), this._setup()
                    }
                    start() {
                        this.stopAnimation(), this.isStop = !1, this._numberSpinToComplete = this.visibleSymbols.length;
                        var t = Lt.store.get("reward:nReels", []);
                        this._nReel = t[this._reelIndex].concat(), this.children.forEach(((t, e) => {
                            (t.y < this.visibleSymbols[0].y || t.y > this.visibleSymbols[this.visibleSymbols.length - 1].y) && t.replaceTexture(this._nReel[e])
                        }));
                        var e = Lt.quickSpin.enabled ? Lt.config.get("wheel.durationQuickDelta") : Lt.config.get("wheel.durationDelta");
                        this._endTween.duration(e), this._stopTimeoutDuration = Lt.quickSpin.enabled ? Lt.config.get("wheel.durationQuickStop") : Lt.config.get("wheel.durationStop"), this.children[0].alpha = 1, this.children[this.children.length - 1].alpha = 1, this._startTween.restart()
                    }
                    stop() {
                        if (!this.isStop) {
                            var t = Lt.store.get("reward:nReels", []);
                            this._nReel = t[this._reelIndex].concat();
                            var e = Lt.store.get("reward:reels", []);
                            this._reel = e[this._reelIndex].concat(), Lt.store.get("spin:isFast", !1) ? (Lt.action.emit("sound:spinFast"), clearTimeout(this._stopTimeout), this.isStop = !0) : this._stopTimeout = setTimeout((() => {
                                this.isStop = !0
                            }), this._stopTimeoutDuration * (this._reelIndex + 1))
                        }
                    }
                    overlay() {
                        this.visibleSymbols.forEach((t => t.overlay()))
                    }
                    stopAnimation() {
                        this.visibleSymbols.forEach((t => t.stopAnimation()))
                    }
                    clearAnimation() {
                        this.visibleSymbols.forEach((t => t.stopAnimation()))
                    }
                    _updateVisibleSymbols() {
                        this.visibleSymbols.length = 0;
                        for (var t = 1, e = this.children.length - 1; t < e; t++) this.visibleSymbols.push(this.children[t])
                    }
                    _setup() {
                        var t = Lt.store.get("reward:nReels", []);
                        this._nReel = t[this._reelIndex].concat();
                        var e, i = this.isPreSpin ? Lt.store.get("reward:preReels", []) : Lt.store.get("reward:reels", []);
                        this._reel = i[this._reelIndex].concat();
                        for (var s = 0, o = this._nReel.length; s < o; s++) {
                            var [n, a] = this.symbolsPositions[s];
                            e = 0 === s || s === o - 1 ? this._nReel[s] : this._reel[s - 1];
                            var h = new xn(n, a, e);
                            h.parentGroup = On, this.addChild(h), s > 0 && s < o - 1 && this.visibleSymbols.push(h)
                        }
                        this._startY = this.children[0].y, this.children[0].alpha = 0, this.children[this.children.length - 1].alpha = 0
                    }
                    _spin() {
                        if (this._flip(), this.isStop)
                            if (this._numberSpinToComplete > 0) {
                                var t = this._reel[--this._numberSpinToComplete];
                                this.children[0].replaceTexture(t)
                            } else this.y = 0, this.children[0].y = this._startY, this._updateVisibleSymbols(), Lt.action.emit("wheel:stop_down"), this.children.forEach((t => t.unblur())), this._spinTween.pause(), this._endTween.restart(), this.children[this.children.length - 1].alpha = 0
                    }
                    _flip() {
                        var t = this.children.pop();
                        t.y = this._startY;
                        for (var e = 0, i = this.children.length; e < i; e++) this.children[e].y = e * -this._startY;
                        this.children.unshift(t)
                    }
                    _complete() {
                        this.children[0].alpha = 0, this.y = 0, this._reel.length = 0, this._endTween.pause(), clearTimeout(this._stopTimeout), Lt.action.emit("wheel:stop", this._reelIndex)
                    }
                    restore() {
                        for (var t = Lt.store.get("reward:preReels")[this._reelIndex], e = this.visibleSymbols.length, i = 0; i < e; i++) this.visibleSymbols[i].replaceTexture(t[i])
                    }
                    update(t) {
                        for (var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], s = this.visibleSymbols.length, o = 0; o < s; o++) this.visibleSymbols[o].replaceTexture(t[o], e, i)
                    }
                    updateNReels() {
                        var t = Lt.store.get("reward:nReels", []);
                        this._nReel = t[this._reelIndex].concat()
                    }
                }
                var Fn = new a.mh(On);
                class Rn extends pn {
                    constructor() {
                        super(), (0, n.Z)(this, "animation", void 0), (0, n.Z)(this, "reels", void 0), (0, n.Z)(this, "reelsContainer", void 0), (0, n.Z)(this, "stopReelCounter", void 0), (0, n.Z)(this, "symbolsPositions", void 0), (0, n.Z)(this, "textLineWin", void 0), (0, n.Z)(this, "textTotalWin", void 0), (0, n.Z)(this, "slotData", void 0), (0, n.Z)(this, "wilds", void 0), (0, n.Z)(this, "reelsMask", void 0), (0, n.Z)(this, "gridFrame", void 0), (0, n.Z)(this, "gridFrameAnimation", void 0), (0, n.Z)(this, "bonusScale", void 0), (0, n.Z)(this, "sticky", void 0), this.pivot.set(850, 0), this.reels = [], this.symbolsPositions = this.game.config.get("slot.symbolsPositions", []), this.stopReelCounter = 0, this.animation = new Cn(this), this.init(), this.setupEvents()
                    }
                    createMask() {
                        var t = new p.TC;
                        return t.beginFill(), t.drawRect(0, 96, this.game.config.get("slot.width"), this.game.config.get("slot.height") - 52), t.endFill(), t
                    }
                    init() {
                        var t, e;
                        this.reelsContainer = new Y.W2, this.changeReels($i.isBonus()), this.slotData = {
                            reels: this.reels.map((t => t.visibleSymbols)),
                            lines: null !== (t = null === (e = this.game.server) || void 0 === e ? void 0 : e.response.lines) && void 0 !== t ? t : []
                        }, this.textTotalWin = new gn(.9, "1.4"), this.textTotalWin.position.set(622, 700), this.textLineWin = new Pn, this.wilds = new kn(this), this.gridFrame = new tt.j(this.game.loader.getAsset("assets/images/background/frame.png")), this.gridFrame.position.set(-310, 12), this.gridFrame.alpha = 0, this.gridFrameAnimation = new Ls(this.game.loader.getAsset("assets/images/effects/frameBonus/skeleton.json")), this.gridFrameAnimation.position.set(-310, 12), this.gridFrameAnimation.alpha = 0, this.sticky = new En(this), this.bonusScale = new bn, this.addChild(this.bonusScale), this.addChild(this.reelsContainer), this.addChild(this.gridFrame), this.addChild(this.gridFrameAnimation), this.addChild(fn), this.addChild(this.wilds), this.addChild(this.sticky), this.addChild(this.textLineWin.container), this.addChild(this.textTotalWin)
                    }
                    setupEvents() {
                        var t = this;
                        this.game.action.on("state:ready_enter", this._onReadyEnter, this), this.game.action.on("state:spin_enter", this._onSpinEnter, this), this.game.action.on("state:stop_enter", this._onStopEnter, this), this.game.action.on("state:finish_enter", this._onFinishEnter, this), this.game.action.on("wheel:stop", this._onStopWheel, this), this.game.action.on("spin:fast", this._onFastStop, this), this.game.action.on("reward:reset", this._onResetReward, this), this.game.action.on("bonus:start", (0, o.Z)((function*() {
                            t.animation.stop(), t.changeReels(!0)
                        }))), this.game.action.on("bonus:restore", (() => {})), this.game.action.on("bonus:stop", (() => {
                            this.animation.stop(), this.changeReels(!1, !0), this.wilds.changeTextureToWild(!0, !0)
                        })), this.game.action.on("bonus:select_stop", (0, o.Z)((function*() {
                            t.sticky.hide(), t.alpha = 1, t.bonusScale.show(), t.bonusScale.reset(), t.bonusScale.update(t.game.store.get("bonus:lostCount", -1), !0, !1), t.wilds.showWilds(!0, !0), t.wilds.changeTextureToWild(!0, !0), !t.game.device.desktop && t.game.device.landscape && (t.game.leftHand.enabled ? t.bonusScale.position.set(1350, 290) : t.bonusScale.position.set(-181, 290))
                        }))), this.game.action.on("bonus:select_start", (0, o.Z)((function*() {
                            t.game.store.get("reward:bonusReels", []).forEach(((e, i) => {
                                e.forEach(((e, s) => {
                                    t.getSymbolByPosition(i, s).replaceTexture(e, !1, !0)
                                }))
                            })), t.bonusScale.show(), t.bonusScale.reset(), t.bonusScale.update(t.game.store.get("bonus:left", 0), !0, !0), B.fromTo(t, .5, {
                                pixi: {
                                    alpha: 0
                                }
                            }, {
                                pixi: {
                                    alpha: 1
                                }
                            }), !t.game.device.desktop && t.game.device.landscape && (t.game.leftHand.enabled ? t.bonusScale.position.set(-90, 290) : t.bonusScale.position.set(-181, 290))
                        })))
                    }
                    _onReadyEnter() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            var e = t.game.autoPlay.enabled,
                                i = t.game.store.get("reward:lines", []);
                            e ? setTimeout((() => {
                                t.game.action.emit("spin:start")
                            }), Ji.get("before_spin_auto")) : $i.isBonus() ? (t.sticky.hideStickyReels(), setTimeout((() => {
                                t.game.action.emit("spin:start")
                            }), 500)) : (0 === i.length || "init" === Lt.store.get("reward:state", "init") && !$i.isBonus()) && t.runSymbolAnimation({
                                animationName: "idle"
                            })
                        }))()
                    }
                    updateBonusLeft() {
                        if ($i.isBonus() && "drop" !== this.game.store.get("server:nextAction")) {
                            var t = this.game.store.get("bonus:left", 0) - 1;
                            this.game.get("Controls").updateBonusLeft(t)
                        }
                    }
                    _onSpinEnter() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            t.animation.stop();
                            try {
                                t.game.wallet.balance >= t.game.betLevel.toCoins() && t.wilds.showAfterBalanceUpdate(), yield t.game.beforeSpin(), t.updateBonusLeft(), $i.isBonus() && t.bonusScale.update(t.game.store.get("bonus:left", 0) - 1, !1, !0), t.wilds.showWilds(), t.wilds.hideUnusedWilds(), t.reels.forEach((t => t.start())), yield t.requestSpin(), t.game.store.get("bonus:error", !1) && !t.game.freeRound.enabled || (yield t.wilds.moveWilds()), t.reels.forEach((t => {
                                    t.visibleSymbols.forEach((t => {
                                        t.visible = !0
                                    }))
                                })), $i.isBonus() && t.wilds.showSymbols(), t.wilds.removeUnusedWilds(), t.game.state.goTo("stop")
                            } catch (e) {
                                yield t.game.catchError(e), t.wilds.hideOnZeroBalance(), (null == e ? void 0 : e.message) !== Et.INSUFFICIENT_BALANCE && (null == e ? void 0 : e.message) !== Et.SPENDING_BUDGET_EXCEEDED || t.game.state.goTo("stop")
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
                        return (0, o.Z)((function*() {
                            t.stopReelCounter = 0, $i.set(t.game.store.get("reward:feature")), $i.isBonus() || (yield t.game.freeRound.finish()), t.game.autoPlay.enabled ? t.game.checkBalance().then((() => {
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
                                e.stopReelCounter++, e.stopReelCounter >= e.reels.length && (e.game.afterReelsStop(), $i.isBonus() || e.bonusScale.update(e.game.store.get("bonus:lostCount", -1)), e.game.store.get("bonus:lostScale", -1) === e.game.store.get("bonus:lostCount", -1) && (e.gridFrameAnimation.alpha = 1, e.gridFrameAnimation.play("stop", !0), yield e.bonusScale.playWin()), e.game.state.goTo("reward"))
                            } catch (t) {
                                return console.error(t), t
                            }
                        }))()
                    }
                    _onResetReward() {
                        this.animation.stop()
                    }
                    beforeFreeSpinsPopup() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this.alpha = 0 : B.fromTo(this, .5, {
                            pixi: {
                                alpha: 1
                            }
                        }, {
                            pixi: {
                                alpha: 0
                            }
                        }), this.gridFrameAnimation.alpha = 0, this.gridFrameAnimation.stop(), this.wilds.removeAllWilds()
                    }
                    getReelByIndex(t) {
                        return this.reels[t]
                    }
                    changeReels() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        this.reels = [], this.reelsContainer.removeChildren();
                        var i = this.reelsContainer.addChild(this.createMask());
                        this.reelsContainer.mask = i;
                        for (var s = t ? this.game.config.get("slot.bonusSize[0]") : this.game.config.get("slot.size[0]"), o = 0; o < s; o++) {
                            var n = this.symbolsPositions[o],
                                a = t ? new Sn(o, n) : new Zn(o, n, e);
                            this.reels.push(a), this.reelsContainer.addChild(a)
                        }
                        this.reelsContainer.addChild(Fn)
                    }
                    getReelByPosition(t, e) {
                        var i = this.game.config.get("slot.reels");
                        return this.reels[parseInt(t) + parseInt(e) * i]
                    }
                    getSymbolByPosition(t, e) {
                        return this.getReelByPosition(t, e).visibleSymbols[0]
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
                        this.game.device.desktop || this.game.device.landscape ? (this.scale.set(1), this.position.set(1161, -9), this.textTotalWin.scale.set(1)) : (this.scale.set(.7), this.position.set(604, 320), this.textTotalWin.scale.set(.8))
                    }
                }
                class Wn extends(Gt(Y.W2)) {
                    constructor() {
                        super(), (0, n.Z)(this, "timeline", void 0), (0, n.Z)(this, "content", void 0), (0, n.Z)(this, "overlay", void 0), (0, n.Z)(this, "title", void 0), (0, n.Z)(this, "value", void 0), (0, n.Z)(this, "light", void 0), (0, n.Z)(this, "coins", void 0), (0, n.Z)(this, "onPress", void 0), this.visible = !1, this.interactive = !0, this.onPress = new(S()), this.game.interaction.click(this, (() => this.onPress.dispatch())), this.timeline = new C, this.content = new Y.W2, this.overlay = new p.TC, this.overlay.beginFill(0, .75), this.overlay.drawRect(0, 0, this.game.config.get("application.width"), this.game.config.get("application.height")), this.overlay.endFill(), this.title = new tt.j, this.title.anchor.set(.5), this.value = new v.Xz("", {
                            fontName: "WinFont"
                        }), this.value.anchor = .5, this.light = new Ls(this.game.loader.getAsset("effectBigWin")), this.light.alpha = 0, this.coins = new Ls(this.game.loader.getAsset("effectGiantWin")), this.coins.alpha = 0, this.content.addChild(this.light), this.content.addChild(this.coins), this.content.addChild(this.title), this.content.addChild(this.value), this.addChild(this.overlay), this.addChild(this.content)
                    }
                    show(t, e) {
                        var i = this;
                        return (0, o.Z)((function*() {
                            var s = 0;
                            t === fe ? (s = 9, i.game.action.emit("sound:bigWin")) : t === xe && (s = 18, i.game.action.emit("sound:giantWin")), i.title.texture = i.game.loader.getAsset("textBigWin");
                            var o = !1,
                                n = i.value.scale.x;
                            return new Promise((a => {
                                i.overlay.alpha = 0, i.content.alpha = 0, i.value.alpha = 0, i.timeline.eventCallback("onComplete", (() => {
                                    i.hide(), a()
                                }));
                                var h = {
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
                                }, .35).to(h, s, {
                                    coins: e,
                                    ease: T.Linear.easeNone,
                                    roundProps: ["coins"],
                                    onStart: () => {
                                        i.light.play("animation", !0), i.light.alpha = 1
                                    },
                                    onUpdate: () => {
                                        !o && t === xe && h.coins > e / 2 && (i.title.texture = i.game.loader.getAsset("textGiantWin"), o = !0, i.coins.play("animation", !0), i.coins.alpha = 1, B.to(i.value, s / 2, {
                                            pixi: {
                                                scale: n + .2
                                            }
                                        })), i.value.text = "".concat(i.game.i18n.currency({
                                            bitmap: !0
                                        }), "<value>").concat(i.game.helpers.toMoney(h.coins), "</value>")
                                    }
                                }, .35), i.timeline.addLabel("break", "+=0.75"), i.timeline.to([i.overlay, i.content], .2, {
                                    pixi: {
                                        alpha: 0
                                    }
                                }, "break+=1"), i.visible = !0, i.resize()
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
                        this.game.device.desktop || this.game.device.landscape ? (this.scale.set(1), this.overlay.height = this.game.viewport.height, this.overlay.width = this.game.viewport.width, this.overlay.position.set(0, 0), this.content.position.set(this.game.viewport.width / 2, 300), this.light.scale.set(1), this.light.position.set(-960, -300), this.coins.scale.set(1), this.coins.position.set(-960, -300), this.title.scale.set(1), this.value.scale.set(.8), this.value.position.set(0, this.title.height + 70)) : (this.scale.set(.5625), this.overlay.height = (2 * this.game.viewport.paddingY + this.game.viewport.height) / .5625, this.overlay.width = (2 * this.game.viewport.paddingX + this.game.viewport.width) / .5625, this.overlay.position.set(-this.game.viewport.paddingX / .5625, 0), this.content.position.set(this.game.viewport.width / .5625 / 2, (this.game.viewport.height / .5625 - 500) / 2), this.light.scale.set(1.5), this.light.position.set(-1430, -660), this.coins.scale.set(2), this.coins.position.set(-1900, -910), this.title.scale.set(1.5), this.value.scale.set(.8), this.value.position.set(0, this.title.height + 70))
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
                            it.vB.shared.update(), this.renderer.render(this.rootNode)
                        })), (0, n.Z)(this, "destroy", (() => {
                            P.removeEventListener("tick", this.tick), it.vB.shared.destroy(), st.destroyTextureCache(), this.renderer.destroy(), this.loader.destroy()
                        })), Lt = this, it.vB.shared.autoStart = !1, it.vB.shared.stop(), this.config = new rt(It), this.logger = new Ct, this.rootNode = this.createRootNode(), this.renderer = new Pt, this.i18n = new yt(e), this.helpers = new vt(this.config), this.keyboard = new xt, this.device = new At(this.renderer), this.viewport = new Rt, this.leftHand = new pt, this.fullscreen = this.device.ios || this.device.iPadPro ? new ct : new ut(this.device), this.visibility = new zt, this.preferences = new Vt, this.sound = new R(this.device, this.visibility, this.preferences), this.state = new Ft, this.store = new rt, this.action = new mt, this.loader = new Bt(this.device), this.error = new bt, this.interaction = new wt(this.device), this.externalApi = new Mt(this), this.popupManager = new jt(this.rootNode), this.create(), this.initAnalytics()
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
                        return new Wt
                    }
                    create() {
                        var t = this.rootNode.addChild(new p.TC);
                        t.lineStyle(0), t.beginFill(0), t.drawRect(1, 1, this.settings.size[0] - 2, this.settings.size[1] - 2), t.endFill();
                        var e = () => {
                            this.device.ios && this.fullscreen.toggle(), this.renderer.resize(this.device.width, this.device.height), this.device.desktop || this.device.landscape ? (this.viewport.resize(this.settings.size[0], this.settings.size[1]), this.rootNode.scale.set(this.viewport.aspectRatio), this.rootNode.pivot.set(this.viewport.width / 2, this.viewport.height / 2), this.rootNode.position.set(this.device.width / 2, this.device.height / 2), this.rootNode.mask = t) : (this.viewport.resize(this.settings.size[1], this.settings.size[0]), this.rootNode.scale.set(this.viewport.aspectRatio), this.rootNode.pivot.set(this.viewport.width / 2, 0), this.rootNode.position.set(this.device.width / 2, 0), this.rootNode.mask = null), this.viewport.emit("resize"), this.renderer.render(this.rootNode)
                        };
                        P.addEventListener("tick", this.tick), window.addEventListener("unload", this.destroy), window.addEventListener("resize", e), window.addEventListener("load", e), window.addEventListener("orientationchange", (() => setTimeout(e, 350))), document.addEventListener("keydown", (t => {
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
                        }()), this.server = this.enhanceServer(new Ot), this.server.on("response", this.onServerResponse, this)
                    }
                    init(t, e) {
                        var i = this;
                        return (0, o.Z)((function*() {
                            var s;
                            i.preferences.setPrefix(null !== (s = null == e ? void 0 : e.name) && void 0 !== s ? s : ""), i.initPopups(), yield i.connect(t), i.initModules(e), yield i.initSound(), yield i.showIntroScreen(), i.initViews(), i.mountViews(), i.initStates(), i.start()
                        }))()
                    }
                    initPopups() {
                        this.popupManager.add([new Ni, new Mi, new Ii, new Fi, new Ui, new Wi, new ji, new Li, new Di, new Ri, new _i])
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
                                    e.i18n.setTranslations(zi(zi(zi({}, i), n), o))
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
                            e.launcher = e.rootNode.addChild(new wi);
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
                        this.config.merge(t, zi({
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
                        })), t.transformRequest([t => zi(zi({}, t), {}, {
                            action: "spin" === t.action ? this.store.get("server:nextAction") : t.action
                        })]), t
                    }
                } {
                    constructor() {
                        super(...arguments), (0, n.Z)(this, "wallet", void 0), (0, n.Z)(this, "bigWin", void 0), (0, n.Z)(this, "autoPlay", void 0), (0, n.Z)(this, "betLevel", void 0), (0, n.Z)(this, "freeRound", void 0), (0, n.Z)(this, "quickSpin", void 0), (0, n.Z)(this, "netPosition", new ui), (0, n.Z)(this, "currentTime", void 0), (0, n.Z)(this, "elapsedTime", void 0), (0, n.Z)(this, "copyright", void 0), (0, n.Z)(this, "menu", void 0), (0, n.Z)(this, "betSettings", void 0), (0, n.Z)(this, "autoPlaySettings", void 0), (0, n.Z)(this, "controls", void 0), (0, n.Z)(this, "riskFeature", void 0), (0, n.Z)(this, "nextRiskFeature", void 0), (0, n.Z)(this, "gameSettings", void 0), (0, n.Z)(this, "checkboxLeftHand", void 0), (0, n.Z)(this, "checkboxGameSounds", void 0), (0, n.Z)(this, "checkboxBackgroundSounds", void 0), (0, n.Z)(this, "checkboxQuickSpin", void 0), (0, n.Z)(this, "checkboxFullscreen", void 0), (0, n.Z)(this, "checkboxRiskFeature", void 0), (0, n.Z)(this, "checkboxIntroScreen", void 0)
                    }
                    initModules(t) {
                        var e, i, s;
                        super.initModules(t);
                        var o = this.server.response;
                        this.wallet = new hi(this.server), this.betLevel = new Dt(null == o ? void 0 : o.bet, null == o ? void 0 : o.bets, null !== (e = null == o ? void 0 : o.betCoins) && void 0 !== e ? e : 1), this.autoPlay = new ii({
                            counts: this.config.get("autoPlay.counts", [10, 25, 50, 100, 150, 300, -1]).map((t => {
                                var e = Number(t);
                                return -1 === e ? 1 / 0 : e
                            })).filter((t => t > 0))
                        }), this.freeRound = new oi, this.quickSpin = new ai(this.config), this.bigWin = new si(this.config.get("bigWin.bigMultiplier"), this.config.get("bigWin.giantMultiplier"), this.betLevel), this.config.set("autoPlay.available", this.autoPlay.available), this.config.set("quickSpin.available", this.quickSpin.available), this.netPosition.setEnabled(null !== (i = null == o || null === (s = o.gameConfig) || void 0 === s ? void 0 : s.netPosition) && void 0 !== i && i)
                    }
                    initViews() {
                        super.initViews(), this.currentTime = new li, this.elapsedTime = new di, this.copyright = new ri
                    }
                    mountViews() {
                        super.mountViews(), this.netPosition.enabled && (this.rootNode.addChild(this.netPosition.toView(new ci)), this.rootNode.addChild(this.elapsedTime)), this.rootNode.addChild(this.currentTime), this.rootNode.addChild(this.copyright)
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
                        return this.checkboxQuickSpin = new vi, this.checkboxQuickSpin.onClick.add((() => {
                            this.quickSpin.toggle()
                        })), this.checkboxQuickSpin
                    }
                    createFullscreenCheckbox() {
                        return this.checkboxFullscreen = new gi, this.checkboxFullscreen.onClick.add((() => {
                            this.fullscreen.toggle()
                        })), this.fullscreen.on("change", (t => {
                            var e;
                            return null === (e = this.checkboxFullscreen) || void 0 === e ? void 0 : e.setChecked(t)
                        })), this.checkboxFullscreen
                    }
                    createLeftHandCheckbox() {
                        return this.checkboxLeftHand = new bi, this.checkboxLeftHand.onClick.add((() => {
                            this.leftHand.toggle()
                        })), this.checkboxLeftHand
                    }
                    createGameSoundsCheckbox() {
                        return this.checkboxGameSounds = new mi, this.checkboxGameSounds.onClick.add((() => {
                            this.sound.toggle("effects")
                        })), this.checkboxGameSounds
                    }
                    createBackgroundSoundsCheckbox() {
                        return this.checkboxBackgroundSounds = new pi, this.checkboxBackgroundSounds.onClick.add((() => {
                            this.sound.toggle("background")
                        })), this.checkboxBackgroundSounds
                    }
                    createRiskFeatureCheckbox() {
                        if (this.config.get("rnb", !0)) return this.checkboxRiskFeature = new yi, this.checkboxRiskFeature.setChecked(this.preferences.get("showRiskFeature", !0)), this.checkboxRiskFeature.onClick.add((t => {
                            var e, i;
                            this.preferences.set("showRiskFeature", t), null !== (e = this.riskFeature) && void 0 !== e && e.visible && this.riskFeature.hide(), null !== (i = this.nextRiskFeature) && void 0 !== i && i.visible && this.nextRiskFeature.hide()
                        })), this.checkboxRiskFeature
                    }
                    createIntroScreenCheckbox() {
                        return this.checkboxIntroScreen = new Ai, this.checkboxIntroScreen.setChecked(this.preferences.get("showIntroScreen", !0)), this.checkboxIntroScreen.onClick.add((t => {
                            this.preferences.set("showIntroScreen", t)
                        })), this.checkboxIntroScreen
                    }
                } {
                    constructor() {
                        super({}), (0, n.Z)(this, "autoPlaySettings", void 0), (0, n.Z)(this, "betSettings", void 0), (0, n.Z)(this, "bigWinAnimation", void 0), (0, n.Z)(this, "fastStopLayout", void 0), (0, n.Z)(this, "gameRules", void 0), (0, n.Z)(this, "menu", void 0), (0, n.Z)(this, "paytable", void 0), (0, n.Z)(this, "slot", void 0), (0, n.Z)(this, "introScreen", void 0), (0, n.Z)(this, "background", void 0), (0, n.Z)(this, "bonusWinText", void 0), (0, n.Z)(this, "bonusOverlay", void 0), (0, n.Z)(this, "bonusTotalWin", void 0), ns.init(), this.init(Qi, Xi)
                    }
                    createRootNode() {
                        var t = new a.Hf;
                        return t.sortableChildren = !0, t
                    }
                    loadTranslations() {
                        var t = () => super.loadTranslations,
                            e = this;
                        return (0, o.Z)((function*() {
                            return t().call(e, Ss)
                        }))()
                    }
                    showIntroScreen() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            var e;
                            if (t.background = t.rootNode.addChild(new Us), null === (e = t.sound.get("backgroundNormal")) || void 0 === e || e.fade(2), t.preferences.get("showIntroScreen", !0) && "bonus" !== t.server.response.feature) return t.introScreen = t.rootNode.addChild(new Ds), t.introScreen.play()
                        }))()
                    }
                    initModules(t) {
                        super.initModules(t), this.sound = new as(this.device, this.visibility, this.preferences)
                    }
                    initViews() {
                        var t, e, i, s, n, a = this;
                        super.initViews(), $i.set(null !== (t = null === (e = this.server) || void 0 === e || null === (i = e.response) || void 0 === i ? void 0 : i.feature) && void 0 !== t ? t : Ki.Basic), this.background.gridBackground.alpha = 1, this.background.grid.alpha = 1, this.background.gameStart(), this.slot = this.rootNode.addChild(new Rn), this.slot.gridFrame.alpha = 1, this.riskFeature = this.rootNode.addChild(new un), this.bonusTotalWin = new ks, this.rootNode.addChild(this.bonusTotalWin), this.bonusWinText = this.slot.addChildAt(new Bs, 0), this.slot.addChild(this.background.logo), this.paytable = new Yo(null !== (s = null === (n = this.server) || void 0 === n ? void 0 : n.response.lines) && void 0 !== s ? s : []), this.gameSettings = new Ve, this.gameSettings.addItem(this.createQuickSpinCheckbox()), this.gameSettings.addItem(this.createFullscreenCheckbox()), this.gameSettings.addItem(this.createLeftHandCheckbox()), this.gameSettings.addItem(this.createGameSoundsCheckbox()), this.gameSettings.addItem(this.createBackgroundSoundsCheckbox()), this.gameSettings.addItem(this.createIntroScreenCheckbox()), this.gameSettings.addItem(this.createRiskFeatureCheckbox()), this.bigWinAnimation = new Wn, this.fastStopLayout = new Oe, this.controls = this.device.desktop ? new Eo : new Zo, this.betSettings = this.rootNode.addChild(new Ee), this.betSettings.setBets(this.betLevel.bets, this.betLevel.betCoins), this.betSettings.setPayLines("1024", "ways"), this.betSettings.setBet(this.betLevel.bet), this.autoPlaySettings = this.rootNode.addChild(new ce), this.autoPlaySettings.setAutoPlayCounts(this.autoPlay.counts), this.autoPlaySettings.stopSection.addItem(new ke), this.autoPlaySettings.stopSection.addItem(new ye), this.autoPlaySettings.stopSection.addItem(new be), this.autoPlaySettings.stopSection.addItem(new ve), this.gameRules = new Ue, this.menu = new He, this.menu.addItem(this.loader.getAsset("iconPaytable"), this.paytable), this.menu.addItem(this.loader.getAsset("iconSettings"), this.gameSettings), this.menu.addItem(this.loader.getAsset("iconRules"), this.gameRules), this.rootNode.addChild(this.fastStopLayout), this.rootNode.addChild(this.menu), this.rootNode.addChild(this.controls), this.rootNode.addChild(this.bigWinAnimation), this.bonusOverlay = this.rootNode.addChild(new Vs), this.paytable.updateBet(this.betLevel), this.controls.updateBet(this.betLevel), this.betSettings.on("open", (() => {
                            this.menu.close(), this.autoPlaySettings.close(), this.controls.onBetSettingsOpen()
                        })), this.betSettings.on("close", (() => {
                            this.controls.onBetSettingsClose()
                        })), this.betSettings.on("pickBet", function() {
                            var t = (0, o.Z)((function*(t) {
                                var e, i = a.store.get("reward:overlayWilds", !1) || a.store.get("reward:preOverlayWilds", !1),
                                    s = 1 === Object.keys(i).length && i[Object.keys(i)[0]][0] === a.config.get("slot.size")[0] - 1;
                                if (i && !s)
                                    if (t == a.betLevel.bet) a.betLevel.set(a.betLevel.bets.indexOf(a.betLevel.bet));
                                    else {
                                        a.fastStopLayout.disable(), a.controls.lock();
                                        var o, n, h = yield a.popupManager.show("PopupWilds");
                                        if (setTimeout((() => {
                                                a.controls.unlock()
                                            }), 100), h) a.betLevel.set(a.betLevel.bets.indexOf(t)), a.riskFeature.show(a.betLevel.bet), a.slot.wilds.changeTextureToWild(!0, !1, !0), setTimeout((() => {
                                            a.slot.wilds.removeAllWilds()
                                        }), 100), a.slot.bonusScale.update(null !== (o = a.store.get("bonus:collection", 0)[t]) && void 0 !== o ? o : 0, !0), a.store.set("reward:preOverlayWilds", !1);
                                        else a.betLevel.set(a.betLevel.bets.indexOf(a.betLevel.bet)), a.slot.bonusScale.update(null !== (n = a.store.get("bonus:collection", 0)[a.betLevel.bet]) && void 0 !== n ? n : 0, !0)
                                    }
                                else a.betLevel.set(a.betLevel.bets.indexOf(t)), a.riskFeature.show(a.betLevel.bet), a.slot.bonusScale.update(null !== (e = a.store.get("bonus:collection", 0)[t]) && void 0 !== e ? e : 0, !0), a.store.get("reward:bet", 1) === a.betLevel.bet && (a.slot.wilds.showWilds(!0), a.store.set("reward:preOverlayWilds", a.store.get("reward:restoreOverlayWilds", !1)))
                            }));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()), this.autoPlaySettings.on("open", (() => {
                            this.menu.close(), this.betSettings.close(), this.controls.onAutoPlaySettingsOpen()
                        })), this.autoPlaySettings.on("close", (() => {
                            this.controls.setAutoPlayCount(-1), this.controls.onAutoPlaySettingsClose()
                        })), this.autoPlaySettings.on("pickAutoPlayCount", (t => {
                            this.autoPlay.setCount(t), this.controls.setAutoPlayCount(t), this.autoPlaySettings.setAutoPlayCount(t)
                        })), this.betLevel.on("change", (() => {
                            this.paytable.updateBet(this.betLevel), this.controls.updateBet(this.betLevel), this.betSettings.setBet(this.betLevel.bet)
                        })), this.action.on("clickSpin", (() => {
                            this.menu.close(), this.betSettings.close(), this.autoPlaySettings.close(), this.store.get("spin:isSpin", !1) ? (this.fastStopLayout.disable(), this.action.emit("spin:start")) : this.checkBalance().then((() => {
                                this.autoPlay.enabled || (this.action.emit("sound:click"), this.action.emit("spin:start"))
                            }))
                        })), this.action.on("clickMaxBet", (() => {
                            this.freeRound.enabled || (this.action.emit("reward:reset"), this.menu.close(), this.betSettings.toggle(this.wallet.balance))
                        })), this.autoPlay.on("enable", (() => {
                            this.controls.onAutoPlayEnable(this.autoPlay.count)
                        })), this.autoPlay.on("disable", (() => {
                            this.controls.onAutoPlayDisable()
                        })), this.freeRound.onStart.once(function() {
                            var t = (0, o.Z)((function*(t, e) {
                                yield a.popupManager.show("PopupFreeRound", t), e()
                            }));
                            return function(e, i) {
                                return t.apply(this, arguments)
                            }
                        }()), this.freeRound.onFinish.once(function() {
                            var t = (0, o.Z)((function*(t) {
                                a.autoPlay.disable(), yield a.popupManager.show("PopupFreeRound"), t()
                            }));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()), this.riskFeature.onPress.add((0, o.Z)((function*() {
                            if (a.action.emit("sound:click"), a.onPopupShow(), a.riskFeature.hide(), a.wallet.balance - a.store.get("buy").bet < 0) yield a.popupManager.show("PopupZeroBalance"), a.onPopupHide();
                            else {
                                var t, e = a.store.get("risk", !1),
                                    i = yield a.popupManager.show("PopupRiskNBuy", null !== (t = null == e ? void 0 : e.bet) && void 0 !== t ? t : 0, a.betLevel.toCoins(), e, a.store.get("buy", !1));
                                try {
                                    i && (a.controls.lock(), yield a.server.request({
                                        action: a.store.get("risk") ? "risk" : "buyin"
                                    }), $i.set(a.store.get("reward:feature", Ki.Basic)), a.onRNBStart(), a.bonusWinText.reset(), a.slot.bonusScale.update(a.store.get("bonus:left", 0), !0, !0), yield a.checkBonus(), setTimeout((() => {
                                        a.controls.unlock(), a.action.emit("spin:start")
                                    }), Ji.get("beforeFreeSpins"))), a.onPopupHide()
                                } catch (t) {
                                    yield a.catchError(t), a.controls.unlock()
                                }
                            }
                        }))), this.action.on("state:ready_enter", (() => {
                            this.store.get("isRiskNBuy") && !this.autoPlay.enabled && "spin" === this.server.response.nextAction && this.riskFeature.show(this.betLevel.bet)
                        })), this.action.on("state:reward_enter", this.reward()), this.action.on("state:spin_enter", (() => {
                            this.riskFeature.hide(), this.riskFeature.updateCurrentBet(this.betLevel.bet), this.autoPlay.enabled && $i.isBasic() && (this.autoPlay.setCount(this.autoPlay.count - 1), this.controls.setAutoPlayCount(this.autoPlay.count)), this.controls.onSpinEnter()
                        })), this.action.on("state:finish_enter", (() => {
                            this.autoPlay.count <= 0 && this.autoPlay.disable(), this.controls.onFinishEnter()
                        }))
                    }
                    initStates() {
                        super.initStates(), this.state.add("setup", new gs(this), ["ready"]), this.state.add("ready", new ds(this), ["spin"]), this.state.add("spin", new As(this), ["stop"]), this.state.add("stop", new vs(this), ["reward"]), this.state.add("reward", new us(this), ["finish"]), this.state.add("finish", new rs(this), ["ready"])
                    }
                    beforeFreeSpinsPopup() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this.bonusWinText.reset(), this.slot.bonusScale.hide(), this.slot.beforeFreeSpinsPopup(t), this.controls.beforeFreeSpinsPopup(), this.background.beforeFreeSpinsPopup(t)
                    }
                    start() {
                        var t = () => super.start,
                            e = this;
                        return (0, o.Z)((function*() {
                            t().call(e);
                            var i = "bonus" === e.store.get("reward:feature");
                            e.slot.wilds.showWilds(!0), yield e.freeRound.start(), e.state.goTo("setup"), i && (e.slot.beforeFreeSpinsPopup(!0), yield e.checkBonus(!0)), e.state.goTo("ready")
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
                                e(), this.bonusTotalWin.break()
                            },
                            n = () => {
                                e(), this.slot.animation.breakAllPayment()
                            };
                        return (0, o.Z)((function*() {
                            var o;
                            e(), null !== (o = t.bigWin) && void 0 !== o && o.available(t.wallet.coins) && !$i.isBonus() && (t.bigWinAnimation.press(i), t.controls.pressButtonSpin(i), yield t.bigWinAnimation.show(t.bigWin.type(t.wallet.coins), t.wallet.coins), t.sound.stopBigWin(), e());
                            var a = t.store.get("reward:lines", []),
                                h = t.store.get("bonus:bonuses", []),
                                r = h.filter((t => t.isNew)),
                                l = t.store.get("bonus:left", 0),
                                d = t.store.get("bonus:winAdditional", !1),
                                c = t.store.get("bonus:additionalCount", 0);
                            if ((a.length > 0 || t.wallet.scatterCoins) && (t.controls.disableButtonSpin(), t.slot.textTotalWin.once("show", (() => {
                                    t.fastStopLayout.press(n, !1), t.controls.pressButtonSpin(n)
                                })), yield t.slot.animation.allPayment(a), e()), r.length > 0 && !t.store.get("bonus:isStart", !1) && (t.controls.disableButtonSpin(), t.controls.updateBonusLeft(d ? l - c : l), t.slot.bonusScale.update(d ? l - c : l, !1, !0, d, c), yield t.slot.animation.bonusPayment(r), yield t.slot.sticky.showSticky(h, !1, !1, t.store.get("bonus:isEnd")), t.store.get("bonus:winAdditional", !1) && (t.slot.bonusScale.update(l, !1, !0), t.controls.updateBonusLeft(l), t.action.emit("sound:bonusScaleUpdate"))), t.store.get("bonus:isEnd") && t.wallet.bonusCoins > 0) {
                                var u = t.store.get("bonus:multiplier", 0),
                                    p = t.store.get("bonus:modificator", 0);
                                yield t.helpers.delay(1e3), t.store.get("bonus:left", 0) > 0 && (t.device.desktop ? t.controls.textBonusLeft.hide() : t.controls.statusBar.update({
                                    type: Ke.BonusLeft,
                                    value: -1
                                }), yield t.bonusWinText.bonusLeftToModificators()), yield t.bonusWinText.totalWin(), t.bonusWinText.reset(), t.bonusTotalWin.press(s), t.controls.pressButtonSpin(s), t.bonusTotalWin.onBeforeEnd.once((() => {
                                    t.action.emit("update:win", t.wallet.dropCoins, t.wallet.totalCoins), t.sound.stopBonusTotalWin()
                                })), yield t.bonusTotalWin.show(t.wallet.bonusCoins, 0 === p ? u : p * u), e()
                            }
                            yield t.checkBonus(), t.bonusTotalWin.hide(), t.slot.animation.complete(), t.action.emit("update:balance"), t.state.goTo("finish")
                        }))
                    }
                    checkBonus() {
                        var t = arguments,
                            e = this;
                        return (0, o.Z)((function*() {
                            var i = t.length > 0 && void 0 !== t[0] && t[0],
                                s = e.store.get("bonus:bonuses", []);
                            i ? (e.slot.animation.stop(), e.action.emit("update:win", e.wallet.dropCoins, e.freeRound.enabled && $i.isBonus() ? e.wallet.preSpinTotalCoins : e.wallet.totalCoins), yield e.bonusOverlay.show(Ns.RESTORE), yield e.slot.sticky.showSticky(s, !0)) : e.store.get("bonus:isStart", !1) ? (e.slot.wilds.changeTextureToWild(!0, !1, !0), e.slot.animation.stop(), e.bonusWinText.reset(), e.slot.bonusScale.update(e.store.get("bonus:left", 0), !0, !0), e.beforeFreeSpinsPopup(), yield e.bonusOverlay.show(Ns.START), e.action.emit("update:balance"), yield e.slot.sticky.showSticky(s, !1, !0), e.bonusWinText.updateAll(!0)) : e.store.get("bonus:isEnd", !1) && (e.slot.animation.stop(), yield e.delay(Ji.get("afterFreeSpins")), e.bonusWinText.reset(), e.beforeFreeSpinsPopup(), yield e.bonusOverlay.show(Ns.END), e.slot.wilds.changeTextureToWild(!0, !1, !0), yield e.delay(300))
                        }))()
                    }
                    checkBalance() {
                        var t = this;
                        return (0, o.Z)((function*() {
                            if (!t.freeRound.enabled && "bonus" !== t.store.get("reward:feature") && t.wallet.balance < t.betLevel.toCoins()) {
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
                            t.autoPlay.enabled || $i.isBonus() || (yield t.quickSpin.tryEnable())
                        }))()
                    }
                    afterReelsStop() {
                        !this.store.get("spin:isFast", !1) || this.autoPlay.enabled || $i.isBonus() || this.quickSpin.update()
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
    }), t), n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), e = {}, i = "wildlife_riches:", n.l = (t, s, o, a) => {
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
            i = self.webpackChunkwildlife_riches = self.webpackChunkwildlife_riches || [];
        i.forEach(e.bind(null, 0)), i.push = e.bind(null, i.push.bind(i))
    })();
    var a = n.O(void 0, [216], (() => n(1051)));
    a = n.O(a)
})();