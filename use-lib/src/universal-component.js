function Be(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
function Yn(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = J(o) ? ss(o) : Yn(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else {
    if (J(e))
      return e;
    if (B(e))
      return e;
  }
}
const ns = /;(?![^(]*\))/g, os = /:([^]+)/, rs = /\/\*.*?\*\//gs;
function ss(e) {
  const t = {};
  return e.replace(rs, "").split(ns).forEach((n) => {
    if (n) {
      const o = n.split(os);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Xn(e) {
  let t = "";
  if (J(e))
    t = e;
  else if (T(e))
    for (let n = 0; n < e.length; n++) {
      const o = Xn(e[n]);
      o && (t += o + " ");
    }
  else if (B(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const is = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", cs = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", ls = /* @__PURE__ */ Be(is), fs = /* @__PURE__ */ Be(cs), us = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", as = /* @__PURE__ */ Be(us);
function er(e) {
  return !!e || e === "";
}
const U = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, ht = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Q = () => {
}, tr = () => !1, ds = /^on[^a-z]/, Mt = (e) => ds.test(e), Qt = (e) => e.startsWith("onUpdate:"), z = Object.assign, Zn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ps = Object.prototype.hasOwnProperty, M = (e, t) => ps.call(e, t), T = Array.isArray, mt = (e) => sn(e) === "[object Map]", hs = (e) => sn(e) === "[object Set]", $ = (e) => typeof e == "function", J = (e) => typeof e == "string", Qn = (e) => typeof e == "symbol", B = (e) => e !== null && typeof e == "object", Gn = (e) => B(e) && $(e.then) && $(e.catch), ms = Object.prototype.toString, sn = (e) => ms.call(e), eo = (e) => sn(e).slice(8, -1), gs = (e) => sn(e) === "[object Object]", to = (e) => J(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, kt = /* @__PURE__ */ Be(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), _s = /* @__PURE__ */ Be("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), cn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Es = /-(\w)/g, _t = cn((e) => e.replace(Es, (t, n) => n ? n.toUpperCase() : "")), Ns = /\B([A-Z])/g, He = cn((e) => e.replace(Ns, "-$1").toLowerCase()), ln = cn((e) => e.charAt(0).toUpperCase() + e.slice(1)), qe = cn((e) => e ? `on${ln(e)}` : ""), Gt = (e, t) => !Object.is(e, t), bt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, en = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, vs = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let wo;
const nr = () => wo || (wo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function $n(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ae;
class bs {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = ae, !t && ae && (this.index = (ae.scopes || (ae.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = ae;
      try {
        return ae = this, t();
      } finally {
        ae = n;
      }
    } else
      process.env.NODE_ENV !== "production" && $n("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ae = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    ae = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Os(e, t = ae) {
  t && t.active && t.effects.push(e);
}
function ys() {
  return ae;
}
const Ct = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, or = (e) => (e.w & Le) > 0, rr = (e) => (e.n & Le) > 0, ws = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Le;
}, Ds = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      or(r) && !rr(r) ? r.delete(e) : t[n++] = r, r.w &= ~Le, r.n &= ~Le;
    }
    t.length = n;
  }
}, In = /* @__PURE__ */ new WeakMap();
let wt = 0, Le = 1;
const Pn = 30;
let oe;
const Ye = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Mn = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class no {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Os(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = oe, n = Se;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = oe, oe = this, Se = !0, Le = 1 << ++wt, wt <= Pn ? ws(this) : Do(this), this.fn();
    } finally {
      wt <= Pn && Ds(this), Le = 1 << --wt, oe = this.parent, Se = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    oe === this ? this.deferStop = !0 : this.active && (Do(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Do(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Se = !0;
const sr = [];
function rt() {
  sr.push(Se), Se = !1;
}
function st() {
  const e = sr.pop();
  Se = e === void 0 ? !0 : e;
}
function re(e, t, n) {
  if (Se && oe) {
    let o = In.get(e);
    o || In.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = Ct());
    const s = process.env.NODE_ENV !== "production" ? { effect: oe, target: e, type: t, key: n } : void 0;
    Fn(r, s);
  }
}
function Fn(e, t) {
  let n = !1;
  wt <= Pn ? rr(e) || (e.n |= Le, n = !or(e)) : n = !e.has(oe), n && (e.add(oe), oe.deps.push(e), process.env.NODE_ENV !== "production" && oe.onTrack && oe.onTrack(Object.assign({ effect: oe }, t)));
}
function Ce(e, t, n, o, r, s) {
  const c = In.get(e);
  if (!c)
    return;
  let l = [];
  if (t === "clear")
    l = [...c.values()];
  else if (n === "length" && T(e)) {
    const d = Number(o);
    c.forEach((m, a) => {
      (a === "length" || a >= d) && l.push(m);
    });
  } else
    switch (n !== void 0 && l.push(c.get(n)), t) {
      case "add":
        T(e) ? to(n) && l.push(c.get("length")) : (l.push(c.get(Ye)), mt(e) && l.push(c.get(Mn)));
        break;
      case "delete":
        T(e) || (l.push(c.get(Ye)), mt(e) && l.push(c.get(Mn)));
        break;
      case "set":
        mt(e) && l.push(c.get(Ye));
        break;
    }
  const u = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: s } : void 0;
  if (l.length === 1)
    l[0] && (process.env.NODE_ENV !== "production" ? at(l[0], u) : at(l[0]));
  else {
    const d = [];
    for (const m of l)
      m && d.push(...m);
    process.env.NODE_ENV !== "production" ? at(Ct(d), u) : at(Ct(d));
  }
}
function at(e, t) {
  const n = T(e) ? e : [...e];
  for (const o of n)
    o.computed && xo(o, t);
  for (const o of n)
    o.computed || xo(o, t);
}
function xo(e, t) {
  (e !== oe || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(z({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const xs = /* @__PURE__ */ Be("__proto__,__v_isRef,__isVue"), ir = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Qn)
), Vs = /* @__PURE__ */ fn(), Cs = /* @__PURE__ */ fn(!1, !0), Ts = /* @__PURE__ */ fn(!0), $s = /* @__PURE__ */ fn(!0, !0), Vo = /* @__PURE__ */ Is();
function Is() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = P(this);
      for (let s = 0, c = this.length; s < c; s++)
        re(o, "get", s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(P)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      rt();
      const o = P(this)[t].apply(this, n);
      return st(), o;
    };
  }), e;
}
function Ps(e) {
  const t = P(this);
  return re(t, "has", e), t.hasOwnProperty(e);
}
function fn(e = !1, t = !1) {
  return function(o, r, s) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && s === (e ? t ? hr : pr : t ? dr : ar).get(o))
      return o;
    const c = T(o);
    if (!e) {
      if (c && M(Vo, r))
        return Reflect.get(Vo, r, s);
      if (r === "hasOwnProperty")
        return Ps;
    }
    const l = Reflect.get(o, r, s);
    return (Qn(r) ? ir.has(r) : xs(r)) || (e || re(o, "get", r), t) ? l : Z(l) ? c && to(r) ? l : l.value : B(l) ? e ? mr(l) : ro(l) : l;
  };
}
const Ms = /* @__PURE__ */ cr(), Fs = /* @__PURE__ */ cr(!0);
function cr(e = !1) {
  return function(n, o, r, s) {
    let c = n[o];
    if (nt(c) && Z(c) && !Z(r))
      return !1;
    if (!e && (!Rn(r) && !nt(r) && (c = P(c), r = P(r)), !T(n) && Z(c) && !Z(r)))
      return c.value = r, !0;
    const l = T(n) && to(o) ? Number(o) < n.length : M(n, o), u = Reflect.set(n, o, r, s);
    return n === P(s) && (l ? Gt(r, c) && Ce(n, "set", o, r, c) : Ce(n, "add", o, r)), u;
  };
}
function Rs(e, t) {
  const n = M(e, t), o = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && Ce(e, "delete", t, void 0, o), r;
}
function js(e, t) {
  const n = Reflect.has(e, t);
  return (!Qn(t) || !ir.has(t)) && re(e, "has", t), n;
}
function As(e) {
  return re(e, "iterate", T(e) ? "length" : Ye), Reflect.ownKeys(e);
}
const lr = {
  get: Vs,
  set: Ms,
  deleteProperty: Rs,
  has: js,
  ownKeys: As
}, fr = {
  get: Ts,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && $n(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && $n(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, Ss = /* @__PURE__ */ z({}, lr, {
  get: Cs,
  set: Fs
}), Hs = /* @__PURE__ */ z({}, fr, {
  get: $s
}), oo = (e) => e, un = (e) => Reflect.getPrototypeOf(e);
function St(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = P(e), s = P(t);
  n || (t !== s && re(r, "get", t), re(r, "get", s));
  const { has: c } = un(r), l = o ? oo : n ? io : so;
  if (c.call(r, t))
    return l(e.get(t));
  if (c.call(r, s))
    return l(e.get(s));
  e !== r && e.get(t);
}
function Ht(e, t = !1) {
  const n = this.__v_raw, o = P(n), r = P(e);
  return t || (e !== r && re(o, "has", e), re(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Lt(e, t = !1) {
  return e = e.__v_raw, !t && re(P(e), "iterate", Ye), Reflect.get(e, "size", e);
}
function Co(e) {
  e = P(e);
  const t = P(this);
  return un(t).has.call(t, e) || (t.add(e), Ce(t, "add", e, e)), this;
}
function To(e, t) {
  t = P(t);
  const n = P(this), { has: o, get: r } = un(n);
  let s = o.call(n, e);
  s ? process.env.NODE_ENV !== "production" && ur(n, o, e) : (e = P(e), s = o.call(n, e));
  const c = r.call(n, e);
  return n.set(e, t), s ? Gt(t, c) && Ce(n, "set", e, t, c) : Ce(n, "add", e, t), this;
}
function $o(e) {
  const t = P(this), { has: n, get: o } = un(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && ur(t, n, e) : (e = P(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, c = t.delete(e);
  return r && Ce(t, "delete", e, void 0, s), c;
}
function Io() {
  const e = P(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? mt(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Ce(e, "clear", void 0, void 0, n), o;
}
function Ut(e, t) {
  return function(o, r) {
    const s = this, c = s.__v_raw, l = P(c), u = t ? oo : e ? io : so;
    return !e && re(l, "iterate", Ye), c.forEach((d, m) => o.call(r, u(d), u(m), s));
  };
}
function Bt(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = P(r), c = mt(s), l = e === "entries" || e === Symbol.iterator && c, u = e === "keys" && c, d = r[e](...o), m = n ? oo : t ? io : so;
    return !t && re(s, "iterate", u ? Mn : Ye), {
      // iterator protocol
      next() {
        const { value: a, done: N } = d.next();
        return N ? { value: a, done: N } : {
          value: l ? [m(a[0]), m(a[1])] : m(a),
          done: N
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Fe(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${ln(e)} operation ${n}failed: target is readonly.`, P(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function Ls() {
  const e = {
    get(s) {
      return St(this, s);
    },
    get size() {
      return Lt(this);
    },
    has: Ht,
    add: Co,
    set: To,
    delete: $o,
    clear: Io,
    forEach: Ut(!1, !1)
  }, t = {
    get(s) {
      return St(this, s, !1, !0);
    },
    get size() {
      return Lt(this);
    },
    has: Ht,
    add: Co,
    set: To,
    delete: $o,
    clear: Io,
    forEach: Ut(!1, !0)
  }, n = {
    get(s) {
      return St(this, s, !0);
    },
    get size() {
      return Lt(this, !0);
    },
    has(s) {
      return Ht.call(this, s, !0);
    },
    add: Fe(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: Fe(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: Fe(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: Fe(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: Ut(!0, !1)
  }, o = {
    get(s) {
      return St(this, s, !0, !0);
    },
    get size() {
      return Lt(this, !0);
    },
    has(s) {
      return Ht.call(this, s, !0);
    },
    add: Fe(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: Fe(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: Fe(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: Fe(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: Ut(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = Bt(s, !1, !1), n[s] = Bt(s, !0, !1), t[s] = Bt(s, !1, !0), o[s] = Bt(s, !0, !0);
  }), [
    e,
    n,
    t,
    o
  ];
}
const [Us, Bs, Ks, ks] = /* @__PURE__ */ Ls();
function an(e, t) {
  const n = t ? e ? ks : Ks : e ? Bs : Us;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(M(n, r) && r in o ? n : o, r, s);
}
const Ws = {
  get: /* @__PURE__ */ an(!1, !1)
}, qs = {
  get: /* @__PURE__ */ an(!1, !0)
}, zs = {
  get: /* @__PURE__ */ an(!0, !1)
}, Js = {
  get: /* @__PURE__ */ an(!0, !0)
};
function ur(e, t, n) {
  const o = P(n);
  if (o !== n && t.call(e, o)) {
    const r = eo(e);
    console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const ar = /* @__PURE__ */ new WeakMap(), dr = /* @__PURE__ */ new WeakMap(), pr = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap();
function Ys(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Xs(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ys(eo(e));
}
function ro(e) {
  return nt(e) ? e : dn(e, !1, lr, Ws, ar);
}
function Zs(e) {
  return dn(e, !1, Ss, qs, dr);
}
function mr(e) {
  return dn(e, !0, fr, zs, pr);
}
function dt(e) {
  return dn(e, !0, Hs, Js, hr);
}
function dn(e, t, n, o, r) {
  if (!B(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const c = Xs(e);
  if (c === 0)
    return e;
  const l = new Proxy(e, c === 2 ? o : n);
  return r.set(e, l), l;
}
function Xe(e) {
  return nt(e) ? Xe(e.__v_raw) : !!(e && e.__v_isReactive);
}
function nt(e) {
  return !!(e && e.__v_isReadonly);
}
function Rn(e) {
  return !!(e && e.__v_isShallow);
}
function jn(e) {
  return Xe(e) || nt(e);
}
function P(e) {
  const t = e && e.__v_raw;
  return t ? P(t) : e;
}
function gr(e) {
  return en(e, "__v_skip", !0), e;
}
const so = (e) => B(e) ? ro(e) : e, io = (e) => B(e) ? mr(e) : e;
function Qs(e) {
  Se && oe && (e = P(e), process.env.NODE_ENV !== "production" ? Fn(e.dep || (e.dep = Ct()), {
    target: e,
    type: "get",
    key: "value"
  }) : Fn(e.dep || (e.dep = Ct())));
}
function Gs(e, t) {
  e = P(e);
  const n = e.dep;
  n && (process.env.NODE_ENV !== "production" ? at(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : at(n));
}
function Z(e) {
  return !!(e && e.__v_isRef === !0);
}
function ei(e) {
  return Z(e) ? e.value : e;
}
const ti = {
  get: (e, t, n) => ei(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return Z(r) && !Z(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function _r(e) {
  return Xe(e) ? e : new Proxy(e, ti);
}
var Er;
class ni {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Er] = !1, this._dirty = !0, this.effect = new no(t, () => {
      this._dirty || (this._dirty = !0, Gs(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = P(this);
    return Qs(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Er = "__v_isReadonly";
function oi(e, t, n = !1) {
  let o, r;
  const s = $(e);
  s ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : Q) : (o = e.get, r = e.set);
  const c = new ni(o, r, s || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (c.effect.onTrack = t.onTrack, c.effect.onTrigger = t.onTrigger), c;
}
const Ze = [];
function Wt(e) {
  Ze.push(e);
}
function qt() {
  Ze.pop();
}
function b(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  rt();
  const n = Ze.length ? Ze[Ze.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = ri();
  if (o)
    Ve(o, n, 11, [
      e + t.join(""),
      n && n.proxy,
      r.map(({ vnode: s }) => `at <${En(n, s.type)}>`).join(`
`),
      r
    ]);
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...si(r)), console.warn(...s);
  }
  st();
}
function ri() {
  let e = Ze[Ze.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function si(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...ii(n));
  }), t;
}
function ii({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${En(e.component, e.type, o)}`, s = ">" + n;
  return e.props ? [r, ...ci(e.props), s] : [r + s];
}
function ci(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Nr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Nr(e, t, n) {
  return J(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Z(t) ? (t = Nr(e, P(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : $(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = P(t), n ? t : [`${e}=`, t]);
}
const co = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [
    0
    /* ErrorCodes.SETUP_FUNCTION */
  ]: "setup function",
  [
    1
    /* ErrorCodes.RENDER_FUNCTION */
  ]: "render function",
  [
    2
    /* ErrorCodes.WATCH_GETTER */
  ]: "watcher getter",
  [
    3
    /* ErrorCodes.WATCH_CALLBACK */
  ]: "watcher callback",
  [
    4
    /* ErrorCodes.WATCH_CLEANUP */
  ]: "watcher cleanup function",
  [
    5
    /* ErrorCodes.NATIVE_EVENT_HANDLER */
  ]: "native event handler",
  [
    6
    /* ErrorCodes.COMPONENT_EVENT_HANDLER */
  ]: "component event handler",
  [
    7
    /* ErrorCodes.VNODE_HOOK */
  ]: "vnode hook",
  [
    8
    /* ErrorCodes.DIRECTIVE_HOOK */
  ]: "directive hook",
  [
    9
    /* ErrorCodes.TRANSITION_HOOK */
  ]: "transition hook",
  [
    10
    /* ErrorCodes.APP_ERROR_HANDLER */
  ]: "app errorHandler",
  [
    11
    /* ErrorCodes.APP_WARN_HANDLER */
  ]: "app warnHandler",
  [
    12
    /* ErrorCodes.FUNCTION_REF */
  ]: "ref function",
  [
    13
    /* ErrorCodes.ASYNC_COMPONENT_LOADER */
  ]: "async component loader",
  [
    14
    /* ErrorCodes.SCHEDULER */
  ]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function Ve(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (s) {
    pn(s, t, n);
  }
  return r;
}
function he(e, t, n, o) {
  if ($(e)) {
    const s = Ve(e, t, n, o);
    return s && Gn(s) && s.catch((c) => {
      pn(c, t, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < e.length; s++)
    r.push(he(e[s], t, n, o));
  return r;
}
function pn(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const c = t.proxy, l = process.env.NODE_ENV !== "production" ? co[n] : n;
    for (; s; ) {
      const d = s.ec;
      if (d) {
        for (let m = 0; m < d.length; m++)
          if (d[m](e, c, l) === !1)
            return;
      }
      s = s.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Ve(u, null, 10, [e, c, l]);
      return;
    }
  }
  li(e, n, r, o);
}
function li(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = co[t];
    if (n && Wt(n), b(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && qt(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Tt = !1, An = !1;
const ee = [];
let be = 0;
const gt = [];
let Ne = null, Re = 0;
const vr = /* @__PURE__ */ Promise.resolve();
let lo = null;
const fi = 100;
function ui(e) {
  const t = lo || vr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ai(e) {
  let t = be + 1, n = ee.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    $t(ee[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function hn(e) {
  (!ee.length || !ee.includes(e, Tt && e.allowRecurse ? be + 1 : be)) && (e.id == null ? ee.push(e) : ee.splice(ai(e.id), 0, e), br());
}
function br() {
  !Tt && !An && (An = !0, lo = vr.then(wr));
}
function di(e) {
  const t = ee.indexOf(e);
  t > be && ee.splice(t, 1);
}
function Or(e) {
  T(e) ? gt.push(...e) : (!Ne || !Ne.includes(e, e.allowRecurse ? Re + 1 : Re)) && gt.push(e), br();
}
function Po(e, t = Tt ? be + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < ee.length; t++) {
    const n = ee[t];
    if (n && n.pre) {
      if (process.env.NODE_ENV !== "production" && fo(e, n))
        continue;
      ee.splice(t, 1), t--, n();
    }
  }
}
function yr(e) {
  if (gt.length) {
    const t = [...new Set(gt)];
    if (gt.length = 0, Ne) {
      Ne.push(...t);
      return;
    }
    for (Ne = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ne.sort((n, o) => $t(n) - $t(o)), Re = 0; Re < Ne.length; Re++)
      process.env.NODE_ENV !== "production" && fo(e, Ne[Re]) || Ne[Re]();
    Ne = null, Re = 0;
  }
}
const $t = (e) => e.id == null ? 1 / 0 : e.id, pi = (e, t) => {
  const n = $t(e) - $t(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function wr(e) {
  An = !1, Tt = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ee.sort(pi);
  const t = process.env.NODE_ENV !== "production" ? (n) => fo(e, n) : Q;
  try {
    for (be = 0; be < ee.length; be++) {
      const n = ee[be];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        Ve(
          n,
          null,
          14
          /* ErrorCodes.SCHEDULER */
        );
      }
    }
  } finally {
    be = 0, ee.length = 0, yr(e), Tt = !1, lo = null, (ee.length || gt.length) && wr(e);
  }
}
function fo(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > fi) {
      const o = t.ownerInstance, r = o && Qr(o.type);
      return b(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let Qe = !1;
const ut = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (nr().__VUE_HMR_RUNTIME__ = {
  createRecord: yn(Dr),
  rerender: yn(gi),
  reload: yn(_i)
});
const ot = /* @__PURE__ */ new Map();
function hi(e) {
  const t = e.type.__hmrId;
  let n = ot.get(t);
  n || (Dr(t, e.type), n = ot.get(t)), n.instances.add(e);
}
function mi(e) {
  ot.get(e.type.__hmrId).instances.delete(e);
}
function Dr(e, t) {
  return ot.has(e) ? !1 : (ot.set(e, {
    initialDef: xt(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function xt(e) {
  return Gr(e) ? e.__vccOpts : e;
}
function gi(e, t) {
  const n = ot.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, xt(o.type).render = t), o.renderCache = [], Qe = !0, o.update(), Qe = !1;
  }));
}
function _i(e, t) {
  const n = ot.get(e);
  if (!n)
    return;
  t = xt(t), Mo(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = xt(r.type);
    ut.has(s) || (s !== n.initialDef && Mo(s, t), ut.add(s)), r.appContext.optionsCache.delete(r.type), r.ceReload ? (ut.add(s), r.ceReload(t.styles), ut.delete(s)) : r.parent ? hn(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  Or(() => {
    for (const r of o)
      ut.delete(xt(r.type));
  });
}
function Mo(e, t) {
  z(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function yn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let Oe, Dt = [], Sn = !1;
function Ft(e, ...t) {
  Oe ? Oe.emit(e, ...t) : Sn || Dt.push({ event: e, args: t });
}
function xr(e, t) {
  var n, o;
  Oe = e, Oe ? (Oe.enabled = !0, Dt.forEach(({ event: r, args: s }) => Oe.emit(r, ...s)), Dt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !(!((o = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    xr(s, t);
  }), setTimeout(() => {
    Oe || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Sn = !0, Dt = []);
  }, 3e3)) : (Sn = !0, Dt = []);
}
function Ei(e, t) {
  Ft("app:init", e, t, {
    Fragment: ve,
    Text: Rt,
    Comment: me,
    Static: Xt
  });
}
function Ni(e) {
  Ft("app:unmount", e);
}
const vi = /* @__PURE__ */ uo(
  "component:added"
  /* DevtoolsHooks.COMPONENT_ADDED */
), Vr = /* @__PURE__ */ uo(
  "component:updated"
  /* DevtoolsHooks.COMPONENT_UPDATED */
), bi = /* @__PURE__ */ uo(
  "component:removed"
  /* DevtoolsHooks.COMPONENT_REMOVED */
), Oi = (e) => {
  Oe && typeof Oe.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Oe.cleanupBuffer(e) && bi(e);
};
function uo(e) {
  return (t) => {
    Ft(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const yi = /* @__PURE__ */ Cr(
  "perf:start"
  /* DevtoolsHooks.PERFORMANCE_START */
), wi = /* @__PURE__ */ Cr(
  "perf:end"
  /* DevtoolsHooks.PERFORMANCE_END */
);
function Cr(e) {
  return (t, n, o) => {
    Ft(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Di(e, t, n) {
  Ft("component:emit", e.appContext.app, e, t, n);
}
function xi(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || U;
  if (process.env.NODE_ENV !== "production") {
    const { emitsOptions: m, propsOptions: [a] } = e;
    if (m)
      if (!(t in m))
        (!a || !(qe(t) in a)) && b(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${qe(t)}" prop.`);
      else {
        const N = m[t];
        $(N) && (N(...n) || b(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), c = s && t.slice(7);
  if (c && c in o) {
    const m = `${c === "modelValue" ? "model" : c}Modifiers`, { number: a, trim: N } = o[m] || U;
    N && (r = n.map((V) => J(V) ? V.trim() : V)), a && (r = n.map(vs));
  }
  if (process.env.NODE_ENV !== "production" && Di(e, t, r), process.env.NODE_ENV !== "production") {
    const m = t.toLowerCase();
    m !== t && o[qe(m)] && b(`Event "${m}" is emitted in component ${En(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${He(t)}" instead of "${t}".`);
  }
  let l, u = o[l = qe(t)] || // also try camelCase event handler (#2249)
  o[l = qe(_t(t))];
  !u && s && (u = o[l = qe(He(t))]), u && he(u, e, 6, r);
  const d = o[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, he(d, e, 6, r);
  }
}
function Tr(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let c = {}, l = !1;
  if (!$(e)) {
    const u = (d) => {
      const m = Tr(d, t, !0);
      m && (l = !0, z(c, m));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !s && !l ? (B(e) && o.set(e, null), null) : (T(s) ? s.forEach((u) => c[u] = null) : z(c, s), B(e) && o.set(e, c), c);
}
function mn(e, t) {
  return !e || !Mt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), M(e, t[0].toLowerCase() + t.slice(1)) || M(e, He(t)) || M(e, t));
}
let ce = null, $r = null;
function tn(e) {
  const t = ce;
  return ce = e, $r = e && e.type.__scopeId || null, t;
}
function Vi(e, t = ce, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && Ko(-1);
    const s = tn(t);
    let c;
    try {
      c = e(...r);
    } finally {
      tn(s), o._d && Ko(1);
    }
    return process.env.NODE_ENV !== "production" && Vr(t), c;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Hn = !1;
function nn() {
  Hn = !0;
}
function wn(e) {
  const { type: t, vnode: n, proxy: o, withProxy: r, props: s, propsOptions: [c], slots: l, attrs: u, emit: d, render: m, renderCache: a, data: N, setupState: V, ctx: A, inheritAttrs: I } = e;
  let K, G;
  const X = tn(e);
  process.env.NODE_ENV !== "production" && (Hn = !1);
  try {
    if (n.shapeFlag & 4) {
      const Y = r || o;
      K = de(m.call(Y, Y, a, s, V, N, A)), G = u;
    } else {
      const Y = t;
      process.env.NODE_ENV !== "production" && u === s && nn(), K = de(Y.length > 1 ? Y(s, process.env.NODE_ENV !== "production" ? {
        get attrs() {
          return nn(), u;
        },
        slots: l,
        emit: d
      } : { attrs: u, slots: l, emit: d }) : Y(
        s,
        null
        /* we know it doesn't need it */
      )), G = t.props ? u : Ti(u);
    }
  } catch (Y) {
    Vt.length = 0, pn(
      Y,
      e,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ), K = et(me);
  }
  let k = K, S;
  if (process.env.NODE_ENV !== "production" && K.patchFlag > 0 && K.patchFlag & 2048 && ([k, S] = Ci(K)), G && I !== !1) {
    const Y = Object.keys(G), { shapeFlag: Ke } = k;
    if (Y.length) {
      if (Ke & 7)
        c && Y.some(Qt) && (G = $i(G, c)), k = Ue(k, G);
      else if (process.env.NODE_ENV !== "production" && !Hn && k.type !== me) {
        const it = Object.keys(u), $e = [], le = [];
        for (let ye = 0, Ie = it.length; ye < Ie; ye++) {
          const fe = it[ye];
          Mt(fe) ? Qt(fe) || $e.push(fe[2].toLowerCase() + fe.slice(3)) : le.push(fe);
        }
        le.length && b(`Extraneous non-props attributes (${le.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), $e.length && b(`Extraneous non-emits event listeners (${$e.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Fo(k) && b("Runtime directive used on component with non-element root node. The directives will not function as intended."), k = Ue(k), k.dirs = k.dirs ? k.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Fo(k) && b("Component inside <Transition> renders non-element root node that cannot be animated."), k.transition = n.transition), process.env.NODE_ENV !== "production" && S ? S(k) : K = k, tn(X), K;
}
const Ci = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Ir(t);
  if (!o)
    return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, c = (l) => {
    t[r] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [de(o), c];
};
function Ir(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (go(o)) {
      if (o.type !== me || o.children === "v-if") {
        if (t)
          return;
        t = o;
      }
    } else
      return;
  }
  return t;
}
const Ti = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Mt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, $i = (e, t) => {
  const n = {};
  for (const o in e)
    (!Qt(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Fo = (e) => e.shapeFlag & 7 || e.type === me;
function Ii(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: c, children: l, patchFlag: u } = t, d = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (r || l) && Qe || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? Ro(o, c, d) : !!c;
    if (u & 8) {
      const m = t.dynamicProps;
      for (let a = 0; a < m.length; a++) {
        const N = m[a];
        if (c[N] !== o[N] && !mn(d, N))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : o === c ? !1 : o ? c ? Ro(o, c, d) : !0 : !!c;
  return !1;
}
function Ro(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t[s] !== e[s] && !mn(n, s))
      return !0;
  }
  return !1;
}
function Pi({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Mi = (e) => e.__isSuspense;
function Fi(e, t) {
  t && t.pendingBranch ? T(e) ? t.effects.push(...e) : t.effects.push(e) : Or(e);
}
function Ri(e, t) {
  if (!q)
    process.env.NODE_ENV !== "production" && b("provide() can only be used inside setup().");
  else {
    let n = q.provides;
    const o = q.parent && q.parent.provides;
    o === n && (n = q.provides = Object.create(o)), n[e] = t;
  }
}
function zt(e, t, n = !1) {
  const o = q || ce;
  if (o) {
    const r = o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && $(t) ? t.call(o.proxy) : t;
    process.env.NODE_ENV !== "production" && b(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && b("inject() can only be used inside setup() or functional components.");
}
const Kt = {};
function Dn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !$(t) && b("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), Pr(e, t, n);
}
function Pr(e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: c } = U) {
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && b('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && b('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const l = (S) => {
    b("Invalid watch source: ", S, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, u = ys() === (q == null ? void 0 : q.scope) ? q : null;
  let d, m = !1, a = !1;
  if (Z(e) ? (d = () => e.value, m = Rn(e)) : Xe(e) ? (d = () => e, o = !0) : T(e) ? (a = !0, m = e.some((S) => Xe(S) || Rn(S)), d = () => e.map((S) => {
    if (Z(S))
      return S.value;
    if (Xe(S))
      return pt(S);
    if ($(S))
      return Ve(
        S,
        u,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
    process.env.NODE_ENV !== "production" && l(S);
  })) : $(e) ? t ? d = () => Ve(
    e,
    u,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : d = () => {
    if (!(u && u.isUnmounted))
      return N && N(), he(e, u, 3, [V]);
  } : (d = Q, process.env.NODE_ENV !== "production" && l(e)), t && o) {
    const S = d;
    d = () => pt(S());
  }
  let N, V = (S) => {
    N = X.onStop = () => {
      Ve(
        S,
        u,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, A;
  if (Pt)
    if (V = Q, t ? n && he(t, u, 3, [
      d(),
      a ? [] : void 0,
      V
    ]) : d(), r === "sync") {
      const S = Kc();
      A = S.__watcherHandles || (S.__watcherHandles = []);
    } else
      return Q;
  let I = a ? new Array(e.length).fill(Kt) : Kt;
  const K = () => {
    if (X.active)
      if (t) {
        const S = X.run();
        (o || m || (a ? S.some((Y, Ke) => Gt(Y, I[Ke])) : Gt(S, I))) && (N && N(), he(t, u, 3, [
          S,
          // pass undefined as the old value when it's changed for the first time
          I === Kt ? void 0 : a && I[0] === Kt ? [] : I,
          V
        ]), I = S);
      } else
        X.run();
  };
  K.allowRecurse = !!t;
  let G;
  r === "sync" ? G = K : r === "post" ? G = () => ie(K, u && u.suspense) : (K.pre = !0, u && (K.id = u.uid), G = () => hn(K));
  const X = new no(d, G);
  process.env.NODE_ENV !== "production" && (X.onTrack = s, X.onTrigger = c), t ? n ? K() : I = X.run() : r === "post" ? ie(X.run.bind(X), u && u.suspense) : X.run();
  const k = () => {
    X.stop(), u && u.scope && Zn(u.scope.effects, X);
  };
  return A && A.push(k), k;
}
function ji(e, t, n) {
  const o = this.proxy, r = J(e) ? e.includes(".") ? Mr(o, e) : () => o[e] : e.bind(o, o);
  let s;
  $(t) ? s = t : (s = t.handler, n = t);
  const c = q;
  Et(this);
  const l = Pr(r, s.bind(o), n);
  return c ? Et(c) : tt(), l;
}
function Mr(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function pt(e, t) {
  if (!B(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), Z(e))
    pt(e.value, t);
  else if (T(e))
    for (let n = 0; n < e.length; n++)
      pt(e[n], t);
  else if (hs(e) || mt(e))
    e.forEach((n) => {
      pt(n, t);
    });
  else if (gs(e))
    for (const n in e)
      pt(e[n], t);
  return e;
}
const Jt = (e) => !!e.type.__asyncLoader, ao = (e) => e.type.__isKeepAlive;
function Ai(e, t) {
  Fr(e, "a", t);
}
function Si(e, t) {
  Fr(e, "da", t);
}
function Fr(e, t, n = q) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (gn(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      ao(r.parent.vnode) && Hi(o, t, n, r), r = r.parent;
  }
}
function Hi(e, t, n, o) {
  const r = gn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Rr(() => {
    Zn(o[t], r);
  }, n);
}
function gn(e, t, n = q, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...c) => {
      if (n.isUnmounted)
        return;
      rt(), Et(n);
      const l = he(t, n, e, c);
      return tt(), st(), l;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const r = qe(co[e].replace(/ hook$/, ""));
    b(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const Te = (e) => (t, n = q) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Pt || e === "sp") && gn(e, (...o) => t(...o), n)
), Li = Te(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), Ui = Te(
  "m"
  /* LifecycleHooks.MOUNTED */
), Bi = Te(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), Ki = Te(
  "u"
  /* LifecycleHooks.UPDATED */
), ki = Te(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), Rr = Te(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), Wi = Te(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), qi = Te(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), zi = Te(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function Ji(e, t = q) {
  gn("ec", e, t);
}
function jr(e) {
  _s(e) && b("Do not use built-in directive ids as custom directive id: " + e);
}
function ke(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let c = 0; c < r.length; c++) {
    const l = r[c];
    s && (l.oldValue = s[c].value);
    let u = l.dir[o];
    u && (rt(), he(u, n, 8, [
      e.el,
      l,
      e,
      t
    ]), st());
  }
}
const Yi = Symbol(), Ln = (e) => e ? Xr(e) ? Eo(e) || e.proxy : Ln(e.parent) : null, Ge = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ z(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? dt(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? dt(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? dt(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? dt(e.refs) : e.refs,
    $parent: (e) => Ln(e.parent),
    $root: (e) => Ln(e.root),
    $emit: (e) => e.emit,
    $options: (e) => ho(e),
    $forceUpdate: (e) => e.f || (e.f = () => hn(e.update)),
    $nextTick: (e) => e.n || (e.n = ui.bind(e.proxy)),
    $watch: (e) => ji.bind(e)
  })
), po = (e) => e === "_" || e === "$", xn = (e, t) => e !== U && !e.__isScriptSetup && M(e, t), Ar = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: s, accessCache: c, type: l, appContext: u } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let d;
    if (t[0] !== "$") {
      const V = c[t];
      if (V !== void 0)
        switch (V) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (xn(o, t))
          return c[t] = 1, o[t];
        if (r !== U && M(r, t))
          return c[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && M(d, t)
        )
          return c[t] = 3, s[t];
        if (n !== U && M(n, t))
          return c[t] = 4, n[t];
        Un && (c[t] = 0);
      }
    }
    const m = Ge[t];
    let a, N;
    if (m)
      return t === "$attrs" && (re(e, "get", t), process.env.NODE_ENV !== "production" && nn()), m(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== U && M(n, t))
      return c[t] = 4, n[t];
    if (
      // global properties
      N = u.config.globalProperties, M(N, t)
    )
      return N[t];
    process.env.NODE_ENV !== "production" && ce && (!J(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== U && po(t[0]) && M(r, t) ? b(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === ce && b(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return xn(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && M(r, t) ? (b(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== U && M(o, t) ? (o[t] = n, !0) : M(e.props, t) ? (process.env.NODE_ENV !== "production" && b(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && b(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s } }, c) {
    let l;
    return !!n[c] || e !== U && M(e, c) || xn(t, c) || (l = s[0]) && M(l, c) || M(o, c) || M(Ge, c) || M(r.config.globalProperties, c);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : M(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Ar.ownKeys = (e) => (b("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function Xi(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Ge).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Ge[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Q
    });
  }), t;
}
function Zi(e) {
  const { ctx: t, propsOptions: [n] } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: Q
    });
  });
}
function Qi(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(P(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (po(o[0])) {
        b(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: Q
      });
    }
  });
}
function Gi() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? b(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Un = !0;
function ec(e) {
  const t = ho(e), n = e.proxy, o = e.ctx;
  Un = !1, t.beforeCreate && jo(
    t.beforeCreate,
    e,
    "bc"
    /* LifecycleHooks.BEFORE_CREATE */
  );
  const {
    // state
    data: r,
    computed: s,
    methods: c,
    watch: l,
    provide: u,
    inject: d,
    // lifecycle
    created: m,
    beforeMount: a,
    mounted: N,
    beforeUpdate: V,
    updated: A,
    activated: I,
    deactivated: K,
    beforeDestroy: G,
    beforeUnmount: X,
    destroyed: k,
    unmounted: S,
    render: Y,
    renderTracked: Ke,
    renderTriggered: it,
    errorCaptured: $e,
    serverPrefetch: le,
    // public API
    expose: ye,
    inheritAttrs: Ie,
    // assets
    components: fe,
    directives: jt,
    filters: No
  } = t, Pe = process.env.NODE_ENV !== "production" ? Gi() : null;
  if (process.env.NODE_ENV !== "production") {
    const [R] = e.propsOptions;
    if (R)
      for (const j in R)
        Pe("Props", j);
  }
  if (d && tc(d, o, Pe, e.appContext.config.unwrapInjectedRef), c)
    for (const R in c) {
      const j = c[R];
      $(j) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, R, {
        value: j.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[R] = j.bind(n), process.env.NODE_ENV !== "production" && Pe("Methods", R)) : process.env.NODE_ENV !== "production" && b(`Method "${R}" has type "${typeof j}" in the component definition. Did you reference the function correctly?`);
    }
  if (r) {
    process.env.NODE_ENV !== "production" && !$(r) && b("The data option must be a function. Plain object usage is no longer supported.");
    const R = r.call(n, n);
    if (process.env.NODE_ENV !== "production" && Gn(R) && b("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !B(R))
      process.env.NODE_ENV !== "production" && b("data() should return an object.");
    else if (e.data = ro(R), process.env.NODE_ENV !== "production")
      for (const j in R)
        Pe("Data", j), po(j[0]) || Object.defineProperty(o, j, {
          configurable: !0,
          enumerable: !0,
          get: () => R[j],
          set: Q
        });
  }
  if (Un = !0, s)
    for (const R in s) {
      const j = s[R], ge = $(j) ? j.bind(n, n) : $(j.get) ? j.get.bind(n, n) : Q;
      process.env.NODE_ENV !== "production" && ge === Q && b(`Computed property "${R}" has no getter.`);
      const Nn = !$(j) && $(j.set) ? j.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        b(`Write operation failed: computed property "${R}" is readonly.`);
      } : Q, Nt = Uc({
        get: ge,
        set: Nn
      });
      Object.defineProperty(o, R, {
        enumerable: !0,
        configurable: !0,
        get: () => Nt.value,
        set: (ct) => Nt.value = ct
      }), process.env.NODE_ENV !== "production" && Pe("Computed", R);
    }
  if (l)
    for (const R in l)
      Sr(l[R], o, n, R);
  if (u) {
    const R = $(u) ? u.call(n) : u;
    Reflect.ownKeys(R).forEach((j) => {
      Ri(j, R[j]);
    });
  }
  m && jo(
    m,
    e,
    "c"
    /* LifecycleHooks.CREATED */
  );
  function se(R, j) {
    T(j) ? j.forEach((ge) => R(ge.bind(n))) : j && R(j.bind(n));
  }
  if (se(Li, a), se(Ui, N), se(Bi, V), se(Ki, A), se(Ai, I), se(Si, K), se(Ji, $e), se(zi, Ke), se(qi, it), se(ki, X), se(Rr, S), se(Wi, le), T(ye))
    if (ye.length) {
      const R = e.exposed || (e.exposed = {});
      ye.forEach((j) => {
        Object.defineProperty(R, j, {
          get: () => n[j],
          set: (ge) => n[j] = ge
        });
      });
    } else
      e.exposed || (e.exposed = {});
  Y && e.render === Q && (e.render = Y), Ie != null && (e.inheritAttrs = Ie), fe && (e.components = fe), jt && (e.directives = jt);
}
function tc(e, t, n = Q, o = !1) {
  T(e) && (e = Bn(e));
  for (const r in e) {
    const s = e[r];
    let c;
    B(s) ? "default" in s ? c = zt(
      s.from || r,
      s.default,
      !0
      /* treat default function as factory */
    ) : c = zt(s.from || r) : c = zt(s), Z(c) ? o ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => c.value,
      set: (l) => c.value = l
    }) : (process.env.NODE_ENV !== "production" && b(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[r] = c) : t[r] = c, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function jo(e, t, n) {
  he(T(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Sr(e, t, n, o) {
  const r = o.includes(".") ? Mr(n, o) : () => n[o];
  if (J(e)) {
    const s = t[e];
    $(s) ? Dn(r, s) : process.env.NODE_ENV !== "production" && b(`Invalid watch handler specified by key "${e}"`, s);
  } else if ($(e))
    Dn(r, e.bind(n));
  else if (B(e))
    if (T(e))
      e.forEach((s) => Sr(s, t, n, o));
    else {
      const s = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(s) ? Dn(r, s, e) : process.env.NODE_ENV !== "production" && b(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && b(`Invalid watch option: "${o}"`, e);
}
function ho(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: s, config: { optionMergeStrategies: c } } = e.appContext, l = s.get(t);
  let u;
  return l ? u = l : !r.length && !n && !o ? u = t : (u = {}, r.length && r.forEach((d) => on(u, d, c, !0)), on(u, t, c)), B(t) && s.set(t, u), u;
}
function on(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && on(e, s, n, !0), r && r.forEach((c) => on(e, c, n, !0));
  for (const c in t)
    if (o && c === "expose")
      process.env.NODE_ENV !== "production" && b('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const l = nc[c] || n && n[c];
      e[c] = l ? l(e[c], t[c]) : t[c];
    }
  return e;
}
const nc = {
  data: Ao,
  props: ze,
  emits: ze,
  // objects
  methods: ze,
  computed: ze,
  // lifecycle
  beforeCreate: ne,
  created: ne,
  beforeMount: ne,
  mounted: ne,
  beforeUpdate: ne,
  updated: ne,
  beforeDestroy: ne,
  beforeUnmount: ne,
  destroyed: ne,
  unmounted: ne,
  activated: ne,
  deactivated: ne,
  errorCaptured: ne,
  serverPrefetch: ne,
  // assets
  components: ze,
  directives: ze,
  // watch
  watch: rc,
  // provide / inject
  provide: Ao,
  inject: oc
};
function Ao(e, t) {
  return t ? e ? function() {
    return z($(e) ? e.call(this, this) : e, $(t) ? t.call(this, this) : t);
  } : t : e;
}
function oc(e, t) {
  return ze(Bn(e), Bn(t));
}
function Bn(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ne(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ze(e, t) {
  return e ? z(z(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function rc(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = z(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = ne(e[o], t[o]);
  return n;
}
function sc(e, t, n, o = !1) {
  const r = {}, s = {};
  en(s, _n, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Hr(e, t, r, s);
  for (const c in e.propsOptions[0])
    c in r || (r[c] = void 0);
  process.env.NODE_ENV !== "production" && Ur(t || {}, r, e), n ? e.props = o ? r : Zs(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function ic(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function cc(e, t, n, o) {
  const { props: r, attrs: s, vnode: { patchFlag: c } } = e, l = P(r), [u] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && ic(e)) && (o || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const m = e.vnode.dynamicProps;
      for (let a = 0; a < m.length; a++) {
        let N = m[a];
        if (mn(e.emitsOptions, N))
          continue;
        const V = t[N];
        if (u)
          if (M(s, N))
            V !== s[N] && (s[N] = V, d = !0);
          else {
            const A = _t(N);
            r[A] = Kn(
              u,
              l,
              A,
              V,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          V !== s[N] && (s[N] = V, d = !0);
      }
    }
  } else {
    Hr(e, t, r, s) && (d = !0);
    let m;
    for (const a in l)
      (!t || // for camelCase
      !M(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((m = He(a)) === a || !M(t, m))) && (u ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[m] !== void 0) && (r[a] = Kn(
        u,
        l,
        a,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete r[a]);
    if (s !== l)
      for (const a in s)
        (!t || !M(t, a)) && (delete s[a], d = !0);
  }
  d && Ce(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && Ur(t || {}, r, e);
}
function Hr(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let c = !1, l;
  if (t)
    for (let u in t) {
      if (kt(u))
        continue;
      const d = t[u];
      let m;
      r && M(r, m = _t(u)) ? !s || !s.includes(m) ? n[m] = d : (l || (l = {}))[m] = d : mn(e.emitsOptions, u) || (!(u in o) || d !== o[u]) && (o[u] = d, c = !0);
    }
  if (s) {
    const u = P(n), d = l || U;
    for (let m = 0; m < s.length; m++) {
      const a = s[m];
      n[a] = Kn(r, u, a, d[a], e, !M(d, a));
    }
  }
  return c;
}
function Kn(e, t, n, o, r, s) {
  const c = e[n];
  if (c != null) {
    const l = M(c, "default");
    if (l && o === void 0) {
      const u = c.default;
      if (c.type !== Function && $(u)) {
        const { propsDefaults: d } = r;
        n in d ? o = d[n] : (Et(r), o = d[n] = u.call(null, t), tt());
      } else
        o = u;
    }
    c[
      0
      /* BooleanFlags.shouldCast */
    ] && (s && !l ? o = !1 : c[
      1
      /* BooleanFlags.shouldCastTrue */
    ] && (o === "" || o === He(n)) && (o = !0));
  }
  return o;
}
function Lr(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, c = {}, l = [];
  let u = !1;
  if (!$(e)) {
    const m = (a) => {
      u = !0;
      const [N, V] = Lr(a, t, !0);
      z(c, N), V && l.push(...V);
    };
    !n && t.mixins.length && t.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  if (!s && !u)
    return B(e) && o.set(e, ht), ht;
  if (T(s))
    for (let m = 0; m < s.length; m++) {
      process.env.NODE_ENV !== "production" && !J(s[m]) && b("props must be strings when using array syntax.", s[m]);
      const a = _t(s[m]);
      So(a) && (c[a] = U);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !B(s) && b("invalid props options", s);
    for (const m in s) {
      const a = _t(m);
      if (So(a)) {
        const N = s[m], V = c[a] = T(N) || $(N) ? { type: N } : Object.assign({}, N);
        if (V) {
          const A = Lo(Boolean, V.type), I = Lo(String, V.type);
          V[
            0
            /* BooleanFlags.shouldCast */
          ] = A > -1, V[
            1
            /* BooleanFlags.shouldCastTrue */
          ] = I < 0 || A < I, (A > -1 || M(V, "default")) && l.push(a);
        }
      }
    }
  }
  const d = [c, l];
  return B(e) && o.set(e, d), d;
}
function So(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && b(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function kn(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Ho(e, t) {
  return kn(e) === kn(t);
}
function Lo(e, t) {
  return T(t) ? t.findIndex((n) => Ho(n, e)) : $(t) && Ho(t, e) ? 0 : -1;
}
function Ur(e, t, n) {
  const o = P(t), r = n.propsOptions[0];
  for (const s in r) {
    let c = r[s];
    c != null && lc(s, o[s], c, !M(e, s) && !M(e, He(s)));
  }
}
function lc(e, t, n, o) {
  const { type: r, required: s, validator: c } = n;
  if (s && o) {
    b('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (r != null && r !== !0) {
      let l = !1;
      const u = T(r) ? r : [r], d = [];
      for (let m = 0; m < u.length && !l; m++) {
        const { valid: a, expectedType: N } = uc(t, u[m]);
        d.push(N || ""), l = a;
      }
      if (!l) {
        b(ac(e, t, d));
        return;
      }
    }
    c && !c(t) && b('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const fc = /* @__PURE__ */ Be("String,Number,Boolean,Function,Symbol,BigInt");
function uc(e, t) {
  let n;
  const o = kn(t);
  if (fc(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = B(e) : o === "Array" ? n = T(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function ac(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(ln).join(" | ")}`;
  const r = n[0], s = eo(t), c = Uo(t, r), l = Uo(t, s);
  return n.length === 1 && Bo(r) && !dc(r, s) && (o += ` with value ${c}`), o += `, got ${s} `, Bo(s) && (o += `with value ${l}.`), o;
}
function Uo(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Bo(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function dc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Br = (e) => e[0] === "_" || e === "$stable", mo = (e) => T(e) ? e.map(de) : [de(e)], pc = (e, t, n) => {
  if (t._n)
    return t;
  const o = Vi((...r) => (process.env.NODE_ENV !== "production" && q && b(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), mo(t(...r))), n);
  return o._c = !1, o;
}, Kr = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (Br(r))
      continue;
    const s = e[r];
    if ($(s))
      t[r] = pc(r, s, o);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && b(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);
      const c = mo(s);
      t[r] = () => c;
    }
  }
}, kr = (e, t) => {
  process.env.NODE_ENV !== "production" && !ao(e.vnode) && b("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = mo(t);
  e.slots.default = () => n;
}, hc = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = P(t), en(t, "_", n)) : Kr(t, e.slots = {});
  } else
    e.slots = {}, t && kr(e, t);
  en(e.slots, _n, 1);
}, mc = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, c = U;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && Qe ? z(r, t) : n && l === 1 ? s = !1 : (z(r, t), !n && l === 1 && delete r._) : (s = !t.$stable, Kr(t, r)), c = t;
  } else
    t && (kr(e, t), c = { default: 1 });
  if (s)
    for (const l in r)
      !Br(l) && !(l in c) && delete r[l];
};
function Wr() {
  return {
    app: null,
    config: {
      isNativeTag: tr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let gc = 0;
function _c(e, t) {
  return function(o, r = null) {
    $(o) || (o = Object.assign({}, o)), r != null && !B(r) && (process.env.NODE_ENV !== "production" && b("root props passed to app.mount() must be an object."), r = null);
    const s = Wr(), c = /* @__PURE__ */ new Set();
    let l = !1;
    const u = s.app = {
      _uid: gc++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: qo,
      get config() {
        return s.config;
      },
      set config(d) {
        process.env.NODE_ENV !== "production" && b("app.config cannot be replaced. Modify individual options instead.");
      },
      use(d, ...m) {
        return c.has(d) ? process.env.NODE_ENV !== "production" && b("Plugin has already been applied to target app.") : d && $(d.install) ? (c.add(d), d.install(u, ...m)) : $(d) ? (c.add(d), d(u, ...m)) : process.env.NODE_ENV !== "production" && b('A plugin must either be a function or an object with an "install" function.'), u;
      },
      mixin(d) {
        return s.mixins.includes(d) ? process.env.NODE_ENV !== "production" && b("Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")) : s.mixins.push(d), u;
      },
      component(d, m) {
        return process.env.NODE_ENV !== "production" && qn(d, s.config), m ? (process.env.NODE_ENV !== "production" && s.components[d] && b(`Component "${d}" has already been registered in target app.`), s.components[d] = m, u) : s.components[d];
      },
      directive(d, m) {
        return process.env.NODE_ENV !== "production" && jr(d), m ? (process.env.NODE_ENV !== "production" && s.directives[d] && b(`Directive "${d}" has already been registered in target app.`), s.directives[d] = m, u) : s.directives[d];
      },
      mount(d, m, a) {
        if (l)
          process.env.NODE_ENV !== "production" && b("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && d.__vue_app__ && b("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const N = et(o, r);
          return N.appContext = s, process.env.NODE_ENV !== "production" && (s.reload = () => {
            e(Ue(N), d, a);
          }), m && t ? t(N, d) : e(N, d, a), l = !0, u._container = d, d.__vue_app__ = u, process.env.NODE_ENV !== "production" && (u._instance = N.component, Ei(u, qo)), Eo(N.component) || N.component.proxy;
        }
      },
      unmount() {
        l ? (e(null, u._container), process.env.NODE_ENV !== "production" && (u._instance = null, Ni(u)), delete u._container.__vue_app__) : process.env.NODE_ENV !== "production" && b("Cannot unmount an app that is not mounted.");
      },
      provide(d, m) {
        return process.env.NODE_ENV !== "production" && d in s.provides && b(`App already provides property with key "${String(d)}". It will be overwritten with the new value.`), s.provides[d] = m, u;
      }
    };
    return u;
  };
}
function Wn(e, t, n, o, r = !1) {
  if (T(e)) {
    e.forEach((N, V) => Wn(N, t && (T(t) ? t[V] : t), n, o, r));
    return;
  }
  if (Jt(o) && !r)
    return;
  const s = o.shapeFlag & 4 ? Eo(o.component) || o.component.proxy : o.el, c = r ? null : s, { i: l, r: u } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    b("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const d = t && t.r, m = l.refs === U ? l.refs = {} : l.refs, a = l.setupState;
  if (d != null && d !== u && (J(d) ? (m[d] = null, M(a, d) && (a[d] = null)) : Z(d) && (d.value = null)), $(u))
    Ve(u, l, 12, [c, m]);
  else {
    const N = J(u), V = Z(u);
    if (N || V) {
      const A = () => {
        if (e.f) {
          const I = N ? M(a, u) ? a[u] : m[u] : u.value;
          r ? T(I) && Zn(I, s) : T(I) ? I.includes(s) || I.push(s) : N ? (m[u] = [s], M(a, u) && (a[u] = m[u])) : (u.value = [s], e.k && (m[e.k] = u.value));
        } else
          N ? (m[u] = c, M(a, u) && (a[u] = c)) : V ? (u.value = c, e.k && (m[e.k] = c)) : process.env.NODE_ENV !== "production" && b("Invalid template ref type:", u, `(${typeof u})`);
      };
      c ? (A.id = -1, ie(A, n)) : A();
    } else
      process.env.NODE_ENV !== "production" && b("Invalid template ref type:", u, `(${typeof u})`);
  }
}
let Ot, Ae;
function De(e, t) {
  e.appContext.config.performance && rn() && Ae.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && yi(e, t, rn() ? Ae.now() : Date.now());
}
function xe(e, t) {
  if (e.appContext.config.performance && rn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Ae.mark(o), Ae.measure(`<${En(e, e.type)}> ${t}`, n, o), Ae.clearMarks(n), Ae.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && wi(e, t, rn() ? Ae.now() : Date.now());
}
function rn() {
  return Ot !== void 0 || (typeof window < "u" && window.performance ? (Ot = !0, Ae = window.performance) : Ot = !1), Ot;
}
function Ec() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const ie = Fi;
function Nc(e) {
  return vc(e);
}
function vc(e, t) {
  Ec();
  const n = nr();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && xr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: o, remove: r, patchProp: s, createElement: c, createText: l, createComment: u, setText: d, setElementText: m, parentNode: a, nextSibling: N, setScopeId: V = Q, insertStaticContent: A } = e, I = (i, f, p, g = null, h = null, v = null, y = !1, E = null, O = process.env.NODE_ENV !== "production" && Qe ? !1 : !!f.dynamicChildren) => {
    if (i === f)
      return;
    i && !yt(i, f) && (g = At(i), Me(i, h, v, !0), i = null), f.patchFlag === -2 && (O = !1, f.dynamicChildren = null);
    const { type: _, ref: D, shapeFlag: w } = f;
    switch (_) {
      case Rt:
        K(i, f, p, g);
        break;
      case me:
        G(i, f, p, g);
        break;
      case Xt:
        i == null ? X(f, p, g, y) : process.env.NODE_ENV !== "production" && k(i, f, p, y);
        break;
      case ve:
        jt(i, f, p, g, h, v, y, E, O);
        break;
      default:
        w & 1 ? Ke(i, f, p, g, h, v, y, E, O) : w & 6 ? No(i, f, p, g, h, v, y, E, O) : w & 64 || w & 128 ? _.process(i, f, p, g, h, v, y, E, O, lt) : process.env.NODE_ENV !== "production" && b("Invalid VNode type:", _, `(${typeof _})`);
    }
    D != null && h && Wn(D, i && i.ref, v, f || i, !f);
  }, K = (i, f, p, g) => {
    if (i == null)
      o(f.el = l(f.children), p, g);
    else {
      const h = f.el = i.el;
      f.children !== i.children && d(h, f.children);
    }
  }, G = (i, f, p, g) => {
    i == null ? o(f.el = u(f.children || ""), p, g) : f.el = i.el;
  }, X = (i, f, p, g) => {
    [i.el, i.anchor] = A(i.children, f, p, g, i.el, i.anchor);
  }, k = (i, f, p, g) => {
    if (f.children !== i.children) {
      const h = N(i.anchor);
      Y(i), [f.el, f.anchor] = A(f.children, p, h, g);
    } else
      f.el = i.el, f.anchor = i.anchor;
  }, S = ({ el: i, anchor: f }, p, g) => {
    let h;
    for (; i && i !== f; )
      h = N(i), o(i, p, g), i = h;
    o(f, p, g);
  }, Y = ({ el: i, anchor: f }) => {
    let p;
    for (; i && i !== f; )
      p = N(i), r(i), i = p;
    r(f);
  }, Ke = (i, f, p, g, h, v, y, E, O) => {
    y = y || f.type === "svg", i == null ? it(f, p, g, h, v, y, E, O) : ye(i, f, h, v, y, E, O);
  }, it = (i, f, p, g, h, v, y, E) => {
    let O, _;
    const { type: D, props: w, shapeFlag: x, transition: C, dirs: F } = i;
    if (O = i.el = c(i.type, v, w && w.is, w), x & 8 ? m(O, i.children) : x & 16 && le(i.children, O, null, g, h, v && D !== "foreignObject", y, E), F && ke(i, null, g, "created"), $e(O, i, i.scopeId, y, g), w) {
      for (const H in w)
        H !== "value" && !kt(H) && s(O, H, null, w[H], v, i.children, g, h, we);
      "value" in w && s(O, "value", null, w.value), (_ = w.onVnodeBeforeMount) && Ee(_, g, i);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(O, "__vnode", {
      value: i,
      enumerable: !1
    }), Object.defineProperty(O, "__vueParentComponent", {
      value: g,
      enumerable: !1
    })), F && ke(i, null, g, "beforeMount");
    const L = (!h || h && !h.pendingBranch) && C && !C.persisted;
    L && C.beforeEnter(O), o(O, f, p), ((_ = w && w.onVnodeMounted) || L || F) && ie(() => {
      _ && Ee(_, g, i), L && C.enter(O), F && ke(i, null, g, "mounted");
    }, h);
  }, $e = (i, f, p, g, h) => {
    if (p && V(i, p), g)
      for (let v = 0; v < g.length; v++)
        V(i, g[v]);
    if (h) {
      let v = h.subTree;
      if (process.env.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && (v = Ir(v.children) || v), f === v) {
        const y = h.vnode;
        $e(i, y, y.scopeId, y.slotScopeIds, h.parent);
      }
    }
  }, le = (i, f, p, g, h, v, y, E, O = 0) => {
    for (let _ = O; _ < i.length; _++) {
      const D = i[_] = E ? je(i[_]) : de(i[_]);
      I(null, D, f, p, g, h, v, y, E);
    }
  }, ye = (i, f, p, g, h, v, y) => {
    const E = f.el = i.el;
    let { patchFlag: O, dynamicChildren: _, dirs: D } = f;
    O |= i.patchFlag & 16;
    const w = i.props || U, x = f.props || U;
    let C;
    p && We(p, !1), (C = x.onVnodeBeforeUpdate) && Ee(C, p, f, i), D && ke(f, i, p, "beforeUpdate"), p && We(p, !0), process.env.NODE_ENV !== "production" && Qe && (O = 0, y = !1, _ = null);
    const F = h && f.type !== "foreignObject";
    if (_ ? (Ie(i.dynamicChildren, _, E, p, g, F, v), process.env.NODE_ENV !== "production" && p && p.type.__hmrId && Yt(i, f)) : y || ge(i, f, E, null, p, g, F, v, !1), O > 0) {
      if (O & 16)
        fe(E, f, w, x, p, g, h);
      else if (O & 2 && w.class !== x.class && s(E, "class", null, x.class, h), O & 4 && s(E, "style", w.style, x.style, h), O & 8) {
        const L = f.dynamicProps;
        for (let H = 0; H < L.length; H++) {
          const W = L[H], ue = w[W], ft = x[W];
          (ft !== ue || W === "value") && s(E, W, ue, ft, h, i.children, p, g, we);
        }
      }
      O & 1 && i.children !== f.children && m(E, f.children);
    } else
      !y && _ == null && fe(E, f, w, x, p, g, h);
    ((C = x.onVnodeUpdated) || D) && ie(() => {
      C && Ee(C, p, f, i), D && ke(f, i, p, "updated");
    }, g);
  }, Ie = (i, f, p, g, h, v, y) => {
    for (let E = 0; E < f.length; E++) {
      const O = i[E], _ = f[E], D = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === ve || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !yt(O, _) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 70) ? a(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      I(O, _, D, null, g, h, v, y, !0);
    }
  }, fe = (i, f, p, g, h, v, y) => {
    if (p !== g) {
      if (p !== U)
        for (const E in p)
          !kt(E) && !(E in g) && s(i, E, p[E], null, y, f.children, h, v, we);
      for (const E in g) {
        if (kt(E))
          continue;
        const O = g[E], _ = p[E];
        O !== _ && E !== "value" && s(i, E, _, O, y, f.children, h, v, we);
      }
      "value" in g && s(i, "value", p.value, g.value);
    }
  }, jt = (i, f, p, g, h, v, y, E, O) => {
    const _ = f.el = i ? i.el : l(""), D = f.anchor = i ? i.anchor : l("");
    let { patchFlag: w, dynamicChildren: x, slotScopeIds: C } = f;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Qe || w & 2048) && (w = 0, O = !1, x = null), C && (E = E ? E.concat(C) : C), i == null ? (o(_, p, g), o(D, p, g), le(f.children, p, D, h, v, y, E, O)) : w > 0 && w & 64 && x && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    i.dynamicChildren ? (Ie(i.dynamicChildren, x, p, h, v, y, E), process.env.NODE_ENV !== "production" && h && h.type.__hmrId ? Yt(i, f) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (f.key != null || h && f === h.subTree) && Yt(
        i,
        f,
        !0
        /* shallow */
      )
    )) : ge(i, f, p, D, h, v, y, E, O);
  }, No = (i, f, p, g, h, v, y, E, O) => {
    f.slotScopeIds = E, i == null ? f.shapeFlag & 512 ? h.ctx.activate(f, p, g, y, O) : Pe(f, p, g, h, v, y, O) : se(i, f, O);
  }, Pe = (i, f, p, g, h, v, y) => {
    const E = i.component = Mc(i, g, h);
    if (process.env.NODE_ENV !== "production" && E.type.__hmrId && hi(E), process.env.NODE_ENV !== "production" && (Wt(i), De(E, "mount")), ao(i) && (E.ctx.renderer = lt), process.env.NODE_ENV !== "production" && De(E, "init"), Rc(E), process.env.NODE_ENV !== "production" && xe(E, "init"), E.asyncDep) {
      if (h && h.registerDep(E, R), !i.el) {
        const O = E.subTree = et(me);
        G(null, O, f, p);
      }
      return;
    }
    R(E, i, f, p, h, v, y), process.env.NODE_ENV !== "production" && (qt(), xe(E, "mount"));
  }, se = (i, f, p) => {
    const g = f.component = i.component;
    if (Ii(i, f, p))
      if (g.asyncDep && !g.asyncResolved) {
        process.env.NODE_ENV !== "production" && Wt(f), j(g, f, p), process.env.NODE_ENV !== "production" && qt();
        return;
      } else
        g.next = f, di(g.update), g.update();
    else
      f.el = i.el, g.vnode = f;
  }, R = (i, f, p, g, h, v, y) => {
    const E = () => {
      if (i.isMounted) {
        let { next: D, bu: w, u: x, parent: C, vnode: F } = i, L = D, H;
        process.env.NODE_ENV !== "production" && Wt(D || i.vnode), We(i, !1), D ? (D.el = F.el, j(i, D, y)) : D = F, w && bt(w), (H = D.props && D.props.onVnodeBeforeUpdate) && Ee(H, C, D, F), We(i, !0), process.env.NODE_ENV !== "production" && De(i, "render");
        const W = wn(i);
        process.env.NODE_ENV !== "production" && xe(i, "render");
        const ue = i.subTree;
        i.subTree = W, process.env.NODE_ENV !== "production" && De(i, "patch"), I(
          ue,
          W,
          // parent may have changed if it's in a teleport
          a(ue.el),
          // anchor may have changed if it's in a fragment
          At(ue),
          i,
          h,
          v
        ), process.env.NODE_ENV !== "production" && xe(i, "patch"), D.el = W.el, L === null && Pi(i, W.el), x && ie(x, h), (H = D.props && D.props.onVnodeUpdated) && ie(() => Ee(H, C, D, F), h), process.env.NODE_ENV !== "production" && Vr(i), process.env.NODE_ENV !== "production" && qt();
      } else {
        let D;
        const { el: w, props: x } = f, { bm: C, m: F, parent: L } = i, H = Jt(f);
        if (We(i, !1), C && bt(C), !H && (D = x && x.onVnodeBeforeMount) && Ee(D, L, f), We(i, !0), w && On) {
          const W = () => {
            process.env.NODE_ENV !== "production" && De(i, "render"), i.subTree = wn(i), process.env.NODE_ENV !== "production" && xe(i, "render"), process.env.NODE_ENV !== "production" && De(i, "hydrate"), On(w, i.subTree, i, h, null), process.env.NODE_ENV !== "production" && xe(i, "hydrate");
          };
          H ? f.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !i.isUnmounted && W()
          ) : W();
        } else {
          process.env.NODE_ENV !== "production" && De(i, "render");
          const W = i.subTree = wn(i);
          process.env.NODE_ENV !== "production" && xe(i, "render"), process.env.NODE_ENV !== "production" && De(i, "patch"), I(null, W, p, g, i, h, v), process.env.NODE_ENV !== "production" && xe(i, "patch"), f.el = W.el;
        }
        if (F && ie(F, h), !H && (D = x && x.onVnodeMounted)) {
          const W = f;
          ie(() => Ee(D, L, W), h);
        }
        (f.shapeFlag & 256 || L && Jt(L.vnode) && L.vnode.shapeFlag & 256) && i.a && ie(i.a, h), i.isMounted = !0, process.env.NODE_ENV !== "production" && vi(i), f = p = g = null;
      }
    }, O = i.effect = new no(
      E,
      () => hn(_),
      i.scope
      // track it in component's effect scope
    ), _ = i.update = () => O.run();
    _.id = i.uid, We(i, !0), process.env.NODE_ENV !== "production" && (O.onTrack = i.rtc ? (D) => bt(i.rtc, D) : void 0, O.onTrigger = i.rtg ? (D) => bt(i.rtg, D) : void 0, _.ownerInstance = i), _();
  }, j = (i, f, p) => {
    f.component = i;
    const g = i.vnode.props;
    i.vnode = f, i.next = null, cc(i, f.props, g, p), mc(i, f.children, p), rt(), Po(), st();
  }, ge = (i, f, p, g, h, v, y, E, O = !1) => {
    const _ = i && i.children, D = i ? i.shapeFlag : 0, w = f.children, { patchFlag: x, shapeFlag: C } = f;
    if (x > 0) {
      if (x & 128) {
        Nt(_, w, p, g, h, v, y, E, O);
        return;
      } else if (x & 256) {
        Nn(_, w, p, g, h, v, y, E, O);
        return;
      }
    }
    C & 8 ? (D & 16 && we(_, h, v), w !== _ && m(p, w)) : D & 16 ? C & 16 ? Nt(_, w, p, g, h, v, y, E, O) : we(_, h, v, !0) : (D & 8 && m(p, ""), C & 16 && le(w, p, g, h, v, y, E, O));
  }, Nn = (i, f, p, g, h, v, y, E, O) => {
    i = i || ht, f = f || ht;
    const _ = i.length, D = f.length, w = Math.min(_, D);
    let x;
    for (x = 0; x < w; x++) {
      const C = f[x] = O ? je(f[x]) : de(f[x]);
      I(i[x], C, p, null, h, v, y, E, O);
    }
    _ > D ? we(i, h, v, !0, !1, w) : le(f, p, g, h, v, y, E, O, w);
  }, Nt = (i, f, p, g, h, v, y, E, O) => {
    let _ = 0;
    const D = f.length;
    let w = i.length - 1, x = D - 1;
    for (; _ <= w && _ <= x; ) {
      const C = i[_], F = f[_] = O ? je(f[_]) : de(f[_]);
      if (yt(C, F))
        I(C, F, p, null, h, v, y, E, O);
      else
        break;
      _++;
    }
    for (; _ <= w && _ <= x; ) {
      const C = i[w], F = f[x] = O ? je(f[x]) : de(f[x]);
      if (yt(C, F))
        I(C, F, p, null, h, v, y, E, O);
      else
        break;
      w--, x--;
    }
    if (_ > w) {
      if (_ <= x) {
        const C = x + 1, F = C < D ? f[C].el : g;
        for (; _ <= x; )
          I(null, f[_] = O ? je(f[_]) : de(f[_]), p, F, h, v, y, E, O), _++;
      }
    } else if (_ > x)
      for (; _ <= w; )
        Me(i[_], h, v, !0), _++;
    else {
      const C = _, F = _, L = /* @__PURE__ */ new Map();
      for (_ = F; _ <= x; _++) {
        const te = f[_] = O ? je(f[_]) : de(f[_]);
        te.key != null && (process.env.NODE_ENV !== "production" && L.has(te.key) && b("Duplicate keys found during update:", JSON.stringify(te.key), "Make sure keys are unique."), L.set(te.key, _));
      }
      let H, W = 0;
      const ue = x - F + 1;
      let ft = !1, bo = 0;
      const vt = new Array(ue);
      for (_ = 0; _ < ue; _++)
        vt[_] = 0;
      for (_ = C; _ <= w; _++) {
        const te = i[_];
        if (W >= ue) {
          Me(te, h, v, !0);
          continue;
        }
        let _e;
        if (te.key != null)
          _e = L.get(te.key);
        else
          for (H = F; H <= x; H++)
            if (vt[H - F] === 0 && yt(te, f[H])) {
              _e = H;
              break;
            }
        _e === void 0 ? Me(te, h, v, !0) : (vt[_e - F] = _ + 1, _e >= bo ? bo = _e : ft = !0, I(te, f[_e], p, null, h, v, y, E, O), W++);
      }
      const Oo = ft ? bc(vt) : ht;
      for (H = Oo.length - 1, _ = ue - 1; _ >= 0; _--) {
        const te = F + _, _e = f[te], yo = te + 1 < D ? f[te + 1].el : g;
        vt[_] === 0 ? I(null, _e, p, yo, h, v, y, E, O) : ft && (H < 0 || _ !== Oo[H] ? ct(
          _e,
          p,
          yo,
          2
          /* MoveType.REORDER */
        ) : H--);
      }
    }
  }, ct = (i, f, p, g, h = null) => {
    const { el: v, type: y, transition: E, children: O, shapeFlag: _ } = i;
    if (_ & 6) {
      ct(i.component.subTree, f, p, g);
      return;
    }
    if (_ & 128) {
      i.suspense.move(f, p, g);
      return;
    }
    if (_ & 64) {
      y.move(i, f, p, lt);
      return;
    }
    if (y === ve) {
      o(v, f, p);
      for (let w = 0; w < O.length; w++)
        ct(O[w], f, p, g);
      o(i.anchor, f, p);
      return;
    }
    if (y === Xt) {
      S(i, f, p);
      return;
    }
    if (g !== 2 && _ & 1 && E)
      if (g === 0)
        E.beforeEnter(v), o(v, f, p), ie(() => E.enter(v), h);
      else {
        const { leave: w, delayLeave: x, afterLeave: C } = E, F = () => o(v, f, p), L = () => {
          w(v, () => {
            F(), C && C();
          });
        };
        x ? x(v, F, L) : L();
      }
    else
      o(v, f, p);
  }, Me = (i, f, p, g = !1, h = !1) => {
    const { type: v, props: y, ref: E, children: O, dynamicChildren: _, shapeFlag: D, patchFlag: w, dirs: x } = i;
    if (E != null && Wn(E, null, p, i, !0), D & 256) {
      f.ctx.deactivate(i);
      return;
    }
    const C = D & 1 && x, F = !Jt(i);
    let L;
    if (F && (L = y && y.onVnodeBeforeUnmount) && Ee(L, f, i), D & 6)
      ts(i.component, p, g);
    else {
      if (D & 128) {
        i.suspense.unmount(p, g);
        return;
      }
      C && ke(i, null, f, "beforeUnmount"), D & 64 ? i.type.remove(i, f, p, h, lt, g) : _ && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (v !== ve || w > 0 && w & 64) ? we(_, f, p, !1, !0) : (v === ve && w & 384 || !h && D & 16) && we(O, f, p), g && vn(i);
    }
    (F && (L = y && y.onVnodeUnmounted) || C) && ie(() => {
      L && Ee(L, f, i), C && ke(i, null, f, "unmounted");
    }, p);
  }, vn = (i) => {
    const { type: f, el: p, anchor: g, transition: h } = i;
    if (f === ve) {
      process.env.NODE_ENV !== "production" && i.patchFlag > 0 && i.patchFlag & 2048 && h && !h.persisted ? i.children.forEach((y) => {
        y.type === me ? r(y.el) : vn(y);
      }) : es(p, g);
      return;
    }
    if (f === Xt) {
      Y(i);
      return;
    }
    const v = () => {
      r(p), h && !h.persisted && h.afterLeave && h.afterLeave();
    };
    if (i.shapeFlag & 1 && h && !h.persisted) {
      const { leave: y, delayLeave: E } = h, O = () => y(p, v);
      E ? E(i.el, v, O) : O();
    } else
      v();
  }, es = (i, f) => {
    let p;
    for (; i !== f; )
      p = N(i), r(i), i = p;
    r(f);
  }, ts = (i, f, p) => {
    process.env.NODE_ENV !== "production" && i.type.__hmrId && mi(i);
    const { bum: g, scope: h, update: v, subTree: y, um: E } = i;
    g && bt(g), h.stop(), v && (v.active = !1, Me(y, i, f, p)), E && ie(E, f), ie(() => {
      i.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && i.asyncDep && !i.asyncResolved && i.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), process.env.NODE_ENV !== "production" && Oi(i);
  }, we = (i, f, p, g = !1, h = !1, v = 0) => {
    for (let y = v; y < i.length; y++)
      Me(i[y], f, p, g, h);
  }, At = (i) => i.shapeFlag & 6 ? At(i.component.subTree) : i.shapeFlag & 128 ? i.suspense.next() : N(i.anchor || i.el), vo = (i, f, p) => {
    i == null ? f._vnode && Me(f._vnode, null, null, !0) : I(f._vnode || null, i, f, null, null, null, p), Po(), yr(), f._vnode = i;
  }, lt = {
    p: I,
    um: Me,
    m: ct,
    r: vn,
    mt: Pe,
    mc: le,
    pc: ge,
    pbc: Ie,
    n: At,
    o: e
  };
  let bn, On;
  return t && ([bn, On] = t(lt)), {
    render: vo,
    hydrate: bn,
    createApp: _c(vo, bn)
  };
}
function We({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Yt(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (T(o) && T(r))
    for (let s = 0; s < o.length; s++) {
      const c = o[s];
      let l = r[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[s] = je(r[s]), l.el = c.el), n || Yt(c, l)), l.type === Rt && (l.el = c.el), process.env.NODE_ENV !== "production" && l.type === me && !l.el && (l.el = c.el);
    }
}
function bc(e) {
  const t = e.slice(), n = [0];
  let o, r, s, c, l;
  const u = e.length;
  for (o = 0; o < u; o++) {
    const d = e[o];
    if (d !== 0) {
      if (r = n[n.length - 1], e[r] < d) {
        t[o] = r, n.push(o);
        continue;
      }
      for (s = 0, c = n.length - 1; s < c; )
        l = s + c >> 1, e[n[l]] < d ? s = l + 1 : c = l;
      d < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), n[s] = o);
    }
  }
  for (s = n.length, c = n[s - 1]; s-- > 0; )
    n[s] = c, c = t[c];
  return n;
}
const Oc = (e) => e.__isTeleport, ve = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), Rt = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), me = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0), Xt = Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0), Vt = [];
let pe = null;
function yc(e = !1) {
  Vt.push(pe = e ? null : []);
}
function wc() {
  Vt.pop(), pe = Vt[Vt.length - 1] || null;
}
let It = 1;
function Ko(e) {
  It += e;
}
function Dc(e) {
  return e.dynamicChildren = It > 0 ? pe || ht : null, wc(), It > 0 && pe && pe.push(e), e;
}
function xc(e, t, n, o, r, s) {
  return Dc(zr(
    e,
    t,
    n,
    o,
    r,
    s,
    !0
    /* isBlock */
  ));
}
function go(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function yt(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && ut.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const Vc = (...e) => Jr(...e), _n = "__vInternal", qr = ({ key: e }) => e ?? null, Zt = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? J(e) || Z(e) || $(e) ? { i: ce, r: e, k: t, f: !!n } : e : null;
function zr(e, t = null, n = null, o = 0, r = null, s = e === ve ? 0 : 1, c = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && qr(t),
    ref: t && Zt(t),
    scopeId: $r,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ce
  };
  return l ? (_o(u, n), s & 128 && e.normalize(u)) : n && (u.shapeFlag |= J(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && b("VNode created with invalid key (NaN). VNode type:", u.type), It > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  pe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && pe.push(u), u;
}
const et = process.env.NODE_ENV !== "production" ? Vc : Jr;
function Jr(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === Yi) && (process.env.NODE_ENV !== "production" && !e && b(`Invalid vnode type when creating vnode: ${e}.`), e = me), go(e)) {
    const l = Ue(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && _o(l, n), It > 0 && !s && pe && (l.shapeFlag & 6 ? pe[pe.indexOf(e)] = l : pe.push(l)), l.patchFlag |= -2, l;
  }
  if (Gr(e) && (e = e.__vccOpts), t) {
    t = Cc(t);
    let { class: l, style: u } = t;
    l && !J(l) && (t.class = Xn(l)), B(u) && (jn(u) && !T(u) && (u = z({}, u)), t.style = Yn(u));
  }
  const c = J(e) ? 1 : Mi(e) ? 128 : Oc(e) ? 64 : B(e) ? 4 : $(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && c & 4 && jn(e) && (e = P(e), b("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), zr(e, t, n, o, r, c, s, !0);
}
function Cc(e) {
  return e ? jn(e) || _n in e ? z({}, e) : e : null;
}
function Ue(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: c } = e, l = t ? $c(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && qr(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? T(r) ? r.concat(Zt(t)) : [r, Zt(t)] : Zt(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && T(c) ? c.map(Yr) : c,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ve ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ue(e.ssContent),
    ssFallback: e.ssFallback && Ue(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Yr(e) {
  const t = Ue(e);
  return T(e.children) && (t.children = e.children.map(Yr)), t;
}
function Tc(e = " ", t = 0) {
  return et(Rt, null, e, t);
}
function de(e) {
  return e == null || typeof e == "boolean" ? et(me) : T(e) ? et(
    ve,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? je(e) : et(Rt, null, String(e));
}
function je(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ue(e);
}
function _o(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (T(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), _o(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(_n in t) ? t._ctx = ce : r === 3 && ce && (ce.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    $(t) ? (t = { default: t, _ctx: ce }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Tc(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function $c(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = Xn([t.class, o.class]));
      else if (r === "style")
        t.style = Yn([t.style, o.style]);
      else if (Mt(r)) {
        const s = t[r], c = o[r];
        c && s !== c && !(T(s) && s.includes(c)) && (t[r] = s ? [].concat(s, c) : c);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
function Ee(e, t, n, o = null) {
  he(e, t, 7, [
    n,
    o
  ]);
}
const Ic = Wr();
let Pc = 0;
function Mc(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || Ic, s = {
    uid: Pc++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new bs(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Lr(o, r),
    emitsOptions: Tr(o, r),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: U,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: U,
    data: U,
    props: U,
    attrs: U,
    slots: U,
    refs: U,
    setupState: U,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? s.ctx = Xi(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = xi.bind(null, s), e.ce && e.ce(s), s;
}
let q = null;
const Et = (e) => {
  q = e, e.scope.on();
}, tt = () => {
  q && q.scope.off(), q = null;
}, Fc = /* @__PURE__ */ Be("slot,component");
function qn(e, t) {
  const n = t.isNativeTag || tr;
  (Fc(e) || n(e)) && b("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Xr(e) {
  return e.vnode.shapeFlag & 4;
}
let Pt = !1;
function Rc(e, t = !1) {
  Pt = t;
  const { props: n, children: o } = e.vnode, r = Xr(e);
  sc(e, n, r, t), hc(e, o);
  const s = r ? jc(e, t) : void 0;
  return Pt = !1, s;
}
function jc(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && qn(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let c = 0; c < s.length; c++)
        qn(s[c], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let c = 0; c < s.length; c++)
        jr(s[c]);
    }
    o.compilerOptions && Ac() && b('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = gr(new Proxy(e.ctx, Ar)), process.env.NODE_ENV !== "production" && Zi(e);
  const { setup: r } = o;
  if (r) {
    const s = e.setupContext = r.length > 1 ? Sc(e) : null;
    Et(e), rt();
    const c = Ve(r, e, 0, [process.env.NODE_ENV !== "production" ? dt(e.props) : e.props, s]);
    if (st(), tt(), Gn(c)) {
      if (c.then(tt, tt), t)
        return c.then((l) => {
          ko(e, l, t);
        }).catch((l) => {
          pn(
            l,
            e,
            0
            /* ErrorCodes.SETUP_FUNCTION */
          );
        });
      if (e.asyncDep = c, process.env.NODE_ENV !== "production" && !e.suspense) {
        const l = (n = o.name) !== null && n !== void 0 ? n : "Anonymous";
        b(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      ko(e, c, t);
  } else
    Zr(e, t);
}
function ko(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : B(t) ? (process.env.NODE_ENV !== "production" && go(t) && b("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = _r(t), process.env.NODE_ENV !== "production" && Qi(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && b(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), Zr(e, n);
}
let zn;
const Ac = () => !zn;
function Zr(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && zn && !o.render) {
      const r = o.template || ho(e).template;
      if (r) {
        process.env.NODE_ENV !== "production" && De(e, "compile");
        const { isCustomElement: s, compilerOptions: c } = e.appContext.config, { delimiters: l, compilerOptions: u } = o, d = z(z({
          isCustomElement: s,
          delimiters: l
        }, c), u);
        o.render = zn(r, d), process.env.NODE_ENV !== "production" && xe(e, "compile");
      }
    }
    e.render = o.render || Q;
  }
  Et(e), rt(), ec(e), st(), tt(), process.env.NODE_ENV !== "production" && !o.render && e.render === Q && !t && (o.template ? b(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : b("Component is missing template or render function."));
}
function Wo(e) {
  return new Proxy(e.attrs, process.env.NODE_ENV !== "production" ? {
    get(t, n) {
      return nn(), re(e, "get", "$attrs"), t[n];
    },
    set() {
      return b("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return b("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return re(e, "get", "$attrs"), t[n];
    }
  });
}
function Sc(e) {
  const t = (o) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && b("expose() should be called only once per setup()."), o != null)) {
      let r = typeof o;
      r === "object" && (T(o) ? r = "array" : Z(o) && (r = "ref")), r !== "object" && b(`expose() should be passed a plain object, received ${r}.`);
    }
    e.exposed = o || {};
  };
  let n;
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = Wo(e));
    },
    get slots() {
      return dt(e.slots);
    },
    get emit() {
      return (o, ...r) => e.emit(o, ...r);
    },
    expose: t
  }) : {
    get attrs() {
      return n || (n = Wo(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Eo(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(_r(gr(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Ge)
          return Ge[n](e);
      },
      has(t, n) {
        return n in t || n in Ge;
      }
    }));
}
const Hc = /(?:^|[-_])(\w)/g, Lc = (e) => e.replace(Hc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Qr(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function En(e, t, n = !1) {
  let o = Qr(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (s) => {
      for (const c in s)
        if (s[c] === t)
          return c;
    };
    o = r(e.components || e.parent.type.components) || r(e.appContext.components);
  }
  return o ? Lc(o) : n ? "App" : "Anonymous";
}
function Gr(e) {
  return $(e) && "__vccOpts" in e;
}
const Uc = (e, t) => oi(e, t, Pt), Bc = Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : ""), Kc = () => {
  {
    const e = zt(Bc);
    return e || process.env.NODE_ENV !== "production" && b("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
  }
};
function Vn(e) {
  return !!(e && e.__v_isShallow);
}
function kc() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, r = {
    header(a) {
      return B(a) ? a.__isVue ? ["div", e, "VueInstance"] : Z(a) ? [
        "div",
        {},
        ["span", e, m(a)],
        "<",
        l(a.value),
        ">"
      ] : Xe(a) ? [
        "div",
        {},
        ["span", e, Vn(a) ? "ShallowReactive" : "Reactive"],
        "<",
        l(a),
        `>${nt(a) ? " (readonly)" : ""}`
      ] : nt(a) ? [
        "div",
        {},
        ["span", e, Vn(a) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(a),
        ">"
      ] : null : null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...s(a.$)
        ];
    }
  };
  function s(a) {
    const N = [];
    a.type.props && a.props && N.push(c("props", P(a.props))), a.setupState !== U && N.push(c("setup", a.setupState)), a.data !== U && N.push(c("data", P(a.data)));
    const V = u(a, "computed");
    V && N.push(c("computed", V));
    const A = u(a, "inject");
    return A && N.push(c("injected", A)), N.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), N;
  }
  function c(a, N) {
    return N = z({}, N), Object.keys(N).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(N).map((V) => [
          "div",
          {},
          ["span", o, V + ": "],
          l(N[V], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(a, N = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", o, a] : B(a) ? ["object", { object: N ? P(a) : a }] : ["span", n, String(a)];
  }
  function u(a, N) {
    const V = a.type;
    if ($(V))
      return;
    const A = {};
    for (const I in a.ctx)
      d(V, I, N) && (A[I] = a.ctx[I]);
    return A;
  }
  function d(a, N, V) {
    const A = a[V];
    if (T(A) && A.includes(N) || B(A) && N in A || a.extends && d(a.extends, N, V) || a.mixins && a.mixins.some((I) => d(I, N, V)))
      return !0;
  }
  function m(a) {
    return Vn(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const qo = "3.2.47", Wc = "http://www.w3.org/2000/svg", Je = typeof document < "u" ? document : null, zo = Je && /* @__PURE__ */ Je.createElement("template"), qc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t ? Je.createElementNS(Wc, e) : Je.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => Je.createTextNode(e),
  createComment: (e) => Je.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Je.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, r, s) {
    const c = n ? n.previousSibling : t.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      zo.innerHTML = o ? `<svg>${e}</svg>` : e;
      const l = zo.content;
      if (o) {
        const u = l.firstChild;
        for (; u.firstChild; )
          l.appendChild(u.firstChild);
        l.removeChild(u);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      c ? c.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function zc(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function Jc(e, t, n) {
  const o = e.style, r = J(n);
  if (n && !r) {
    if (t && !J(t))
      for (const s in t)
        n[s] == null && Jn(o, s, "");
    for (const s in n)
      Jn(o, s, n[s]);
  } else {
    const s = o.display;
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = s);
  }
}
const Yc = /[^\\];\s*$/, Jo = /\s*!important$/;
function Jn(e, t, n) {
  if (T(n))
    n.forEach((o) => Jn(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && Yc.test(n) && b(`Unexpected semicolon at the end of '${t}' style value: '${n}'`), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Xc(e, t);
    Jo.test(n) ? e.setProperty(He(o), n.replace(Jo, ""), "important") : e[o] = n;
  }
}
const Yo = ["Webkit", "Moz", "ms"], Cn = {};
function Xc(e, t) {
  const n = Cn[t];
  if (n)
    return n;
  let o = _t(t);
  if (o !== "filter" && o in e)
    return Cn[t] = o;
  o = ln(o);
  for (let r = 0; r < Yo.length; r++) {
    const s = Yo[r] + o;
    if (s in e)
      return Cn[t] = s;
  }
  return t;
}
const Xo = "http://www.w3.org/1999/xlink";
function Zc(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Xo, t.slice(6, t.length)) : e.setAttributeNS(Xo, t, n);
  else {
    const s = as(t);
    n == null || s && !er(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n);
  }
}
function Qc(e, t, n, o, r, s, c) {
  if (t === "innerHTML" || t === "textContent") {
    o && c(o, r, s), e[t] = n ?? "";
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && // custom elements may use _value internally
  !e.tagName.includes("-")) {
    e._value = n;
    const u = n ?? "";
    (e.value !== u || // #4956: always set for OPTION elements because its value falls back to
    // textContent if no value attribute is present. And setting .value for
    // OPTION has no side effect
    e.tagName === "OPTION") && (e.value = u), n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const u = typeof e[t];
    u === "boolean" ? n = er(n) : n == null && u === "string" ? (n = "", l = !0) : u === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch (u) {
    process.env.NODE_ENV !== "production" && !l && b(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, u);
  }
  l && e.removeAttribute(t);
}
function Gc(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function el(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function tl(e, t, n, o, r = null) {
  const s = e._vei || (e._vei = {}), c = s[t];
  if (o && c)
    c.value = o;
  else {
    const [l, u] = nl(t);
    if (o) {
      const d = s[t] = sl(o, r);
      Gc(e, l, d, u);
    } else
      c && (el(e, l, c, u), s[t] = void 0);
  }
}
const Zo = /(?:Once|Passive|Capture)$/;
function nl(e) {
  let t;
  if (Zo.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Zo); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : He(e.slice(2)), t];
}
let Tn = 0;
const ol = /* @__PURE__ */ Promise.resolve(), rl = () => Tn || (ol.then(() => Tn = 0), Tn = Date.now());
function sl(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    he(il(o, n.value), t, 5, [o]);
  };
  return n.value = e, n.attached = rl(), n;
}
function il(e, t) {
  if (T(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else
    return t;
}
const Qo = /^on[a-z]/, cl = (e, t, n, o, r = !1, s, c, l, u) => {
  t === "class" ? zc(e, o, r) : t === "style" ? Jc(e, n, o) : Mt(t) ? Qt(t) || tl(e, t, n, o, c) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ll(e, t, o, r)) ? Qc(e, t, o, s, c, l, u) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Zc(e, t, o, r));
};
function ll(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && Qo.test(t) && $(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Qo.test(t) && J(n) ? !1 : t in e;
}
const fl = /* @__PURE__ */ z({ patchProp: cl }, qc);
let Go;
function ul() {
  return Go || (Go = Nc(fl));
}
const al = (...e) => {
  const t = ul().createApp(...e);
  process.env.NODE_ENV !== "production" && (dl(t), pl(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = hl(o);
    if (!r)
      return;
    const s = t._component;
    !$(s) && !s.render && !s.template && (s.template = r.innerHTML), r.innerHTML = "";
    const c = n(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), c;
  }, t;
};
function dl(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => ls(t) || fs(t),
    writable: !1
  });
}
function pl(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        b("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return b(o), n;
      },
      set() {
        b(o);
      }
    });
  }
}
function hl(e) {
  if (J(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && b(`Failed to mount app: mount target selector "${e}" returned null.`), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && b('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), e;
}
function ml() {
  kc();
}
process.env.NODE_ENV !== "production" && ml();
const gl = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, _l = {};
function El(e, t) {
  return yc(), xc("div", null, "测试");
}
const Nl = /* @__PURE__ */ gl(_l, [["render", El]]), vl = (e, t) => {
  al(e).mount(t);
};
export {
  Nl as Test,
  vl as renderComponent
};
