function b() {}
const J = (t) => t;
function gt(t, e) {
	for (const n in e) t[n] = e[n];
	return t;
}
function it(t) {
	return t();
}
function tt() {
	return Object.create(null);
}
function E(t) {
	t.forEach(it);
}
function L(t) {
	return typeof t == 'function';
}
function Kt(t, e) {
	return t != t ? e == e : t !== e || (t && typeof t == 'object') || typeof t == 'function';
}
function wt(t) {
	return Object.keys(t).length === 0;
}
function xt(t, ...e) {
	if (t == null) return b;
	const n = t.subscribe(...e);
	return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Qt(t, e, n) {
	t.$$.on_destroy.push(xt(e, n));
}
function Ut(t, e, n, i) {
	if (t) {
		const s = st(t, e, n, i);
		return t[0](s);
	}
}
function st(t, e, n, i) {
	return t[1] && i ? gt(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function Vt(t, e, n, i) {
	if (t[2] && i) {
		const s = t[2](i(n));
		if (e.dirty === void 0) return s;
		if (typeof s == 'object') {
			const l = [],
				r = Math.max(e.dirty.length, s.length);
			for (let a = 0; a < r; a += 1) l[a] = e.dirty[a] | s[a];
			return l;
		}
		return e.dirty | s;
	}
	return e.dirty;
}
function Xt(t, e, n, i, s, l) {
	if (s) {
		const r = st(e, n, i, l);
		t.p(r, s);
	}
}
function Yt(t) {
	if (t.ctx.length > 32) {
		const e = [],
			n = t.ctx.length / 32;
		for (let i = 0; i < n; i++) e[i] = -1;
		return e;
	}
	return -1;
}
function Zt(t) {
	const e = typeof t == 'string' && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return e ? [parseFloat(e[1]), e[2] || 'px'] : [t, 'px'];
}
const rt = typeof window < 'u';
let K = rt ? () => window.performance.now() : () => Date.now(),
	Q = rt ? (t) => requestAnimationFrame(t) : b;
const C = new Set();
function ot(t) {
	C.forEach((e) => {
		e.c(t) || (C.delete(e), e.f());
	}),
		C.size !== 0 && Q(ot);
}
function U(t) {
	let e;
	return (
		C.size === 0 && Q(ot),
		{
			promise: new Promise((n) => {
				C.add((e = { c: t, f: n }));
			}),
			abort() {
				C.delete(e);
			}
		}
	);
}
const bt = typeof window < 'u' ? window : typeof globalThis < 'u' ? globalThis : global;
'WeakMap' in bt;
let W = !1;
function $t() {
	W = !0;
}
function vt() {
	W = !1;
}
function kt(t, e, n, i) {
	for (; t < e; ) {
		const s = t + ((e - t) >> 1);
		n(s) <= i ? (t = s + 1) : (e = s);
	}
	return t;
}
function Et(t) {
	if (t.hydrate_init) return;
	t.hydrate_init = !0;
	let e = t.childNodes;
	if (t.nodeName === 'HEAD') {
		const o = [];
		for (let c = 0; c < e.length; c++) {
			const f = e[c];
			f.claim_order !== void 0 && o.push(f);
		}
		e = o;
	}
	const n = new Int32Array(e.length + 1),
		i = new Int32Array(e.length);
	n[0] = -1;
	let s = 0;
	for (let o = 0; o < e.length; o++) {
		const c = e[o].claim_order,
			f = (s > 0 && e[n[s]].claim_order <= c ? s + 1 : kt(1, s, (d) => e[n[d]].claim_order, c)) - 1;
		i[o] = n[f] + 1;
		const u = f + 1;
		(n[u] = o), (s = Math.max(u, s));
	}
	const l = [],
		r = [];
	let a = e.length - 1;
	for (let o = n[s] + 1; o != 0; o = i[o - 1]) {
		for (l.push(e[o - 1]); a >= o; a--) r.push(e[a]);
		a--;
	}
	for (; a >= 0; a--) r.push(e[a]);
	l.reverse(), r.sort((o, c) => o.claim_order - c.claim_order);
	for (let o = 0, c = 0; o < r.length; o++) {
		for (; c < l.length && r[o].claim_order >= l[c].claim_order; ) c++;
		const f = c < l.length ? l[c] : null;
		t.insertBefore(r[o], f);
	}
}
function St(t, e) {
	t.appendChild(e);
}
function lt(t) {
	if (!t) return document;
	const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
	return e && e.host ? e : t.ownerDocument;
}
function Nt(t) {
	const e = at('style');
	return Ct(lt(t), e), e.sheet;
}
function Ct(t, e) {
	return St(t.head || t, e), e.sheet;
}
function Mt(t, e) {
	if (W) {
		for (
			Et(t),
				(t.actual_end_child === void 0 ||
					(t.actual_end_child !== null && t.actual_end_child.parentNode !== t)) &&
					(t.actual_end_child = t.firstChild);
			t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

		)
			t.actual_end_child = t.actual_end_child.nextSibling;
		e !== t.actual_end_child
			? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child)
			: (t.actual_end_child = e.nextSibling);
	} else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function te(t, e, n) {
	W && !n ? Mt(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null);
}
function ct(t) {
	t.parentNode && t.parentNode.removeChild(t);
}
function at(t) {
	return document.createElement(t);
}
function At(t) {
	return document.createElementNS('http://www.w3.org/2000/svg', t);
}
function V(t) {
	return document.createTextNode(t);
}
function ee() {
	return V(' ');
}
function ne() {
	return V('');
}
function ie(t, e, n, i) {
	return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function se(t, e, n) {
	n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function re(t) {
	return t === '' ? null : +t;
}
function jt(t) {
	return Array.from(t.childNodes);
}
function Rt(t) {
	t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function ut(t, e, n, i, s = !1) {
	Rt(t);
	const l = (() => {
		for (let r = t.claim_info.last_index; r < t.length; r++) {
			const a = t[r];
			if (e(a)) {
				const o = n(a);
				return o === void 0 ? t.splice(r, 1) : (t[r] = o), s || (t.claim_info.last_index = r), a;
			}
		}
		for (let r = t.claim_info.last_index - 1; r >= 0; r--) {
			const a = t[r];
			if (e(a)) {
				const o = n(a);
				return (
					o === void 0 ? t.splice(r, 1) : (t[r] = o),
					s ? o === void 0 && t.claim_info.last_index-- : (t.claim_info.last_index = r),
					a
				);
			}
		}
		return i();
	})();
	return (l.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), l;
}
function ft(t, e, n, i) {
	return ut(
		t,
		(s) => s.nodeName === e,
		(s) => {
			const l = [];
			for (let r = 0; r < s.attributes.length; r++) {
				const a = s.attributes[r];
				n[a.name] || l.push(a.name);
			}
			l.forEach((r) => s.removeAttribute(r));
		},
		() => i(e)
	);
}
function oe(t, e, n) {
	return ft(t, e, n, at);
}
function le(t, e, n) {
	return ft(t, e, n, At);
}
function Bt(t, e) {
	return ut(
		t,
		(n) => n.nodeType === 3,
		(n) => {
			const i = '' + e;
			if (n.data.startsWith(i)) {
				if (n.data.length !== i.length) return n.splitText(i.length);
			} else n.data = i;
		},
		() => V(e),
		!0
	);
}
function ce(t) {
	return Bt(t, ' ');
}
function ae(t, e) {
	(e = '' + e), t.data !== e && (t.data = e);
}
function ue(t, e) {
	t.value = e ?? '';
}
function fe(t, e, n, i) {
	n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? 'important' : '');
}
function de(t, e, n) {
	for (let i = 0; i < t.options.length; i += 1) {
		const s = t.options[i];
		if (s.__value === e) {
			s.selected = !0;
			return;
		}
	}
	(!n || e !== void 0) && (t.selectedIndex = -1);
}
function _e(t) {
	const e = t.querySelector(':checked');
	return e && e.__value;
}
function Ot(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
	const s = document.createEvent('CustomEvent');
	return s.initCustomEvent(t, n, i, e), s;
}
function he(t, e) {
	return new t(e);
}
const P = new Map();
let T = 0;
function qt(t) {
	let e = 5381,
		n = t.length;
	for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
	return e >>> 0;
}
function Dt(t, e) {
	const n = { stylesheet: Nt(e), rules: {} };
	return P.set(t, n), n;
}
function X(t, e, n, i, s, l, r, a = 0) {
	const o = 16.666 / i;
	let c = `{
`;
	for (let m = 0; m <= 1; m += o) {
		const y = e + (n - e) * l(m);
		c +=
			m * 100 +
			`%{${r(y, 1 - y)}}
`;
	}
	const f =
			c +
			`100% {${r(n, 1 - n)}}
}`,
		u = `__svelte_${qt(f)}_${a}`,
		d = lt(t),
		{ stylesheet: _, rules: h } = P.get(d) || Dt(d, t);
	h[u] || ((h[u] = !0), _.insertRule(`@keyframes ${u} ${f}`, _.cssRules.length));
	const g = t.style.animation || '';
	return (t.style.animation = `${g ? `${g}, ` : ''}${u} ${i}ms linear ${s}ms 1 both`), (T += 1), u;
}
function z(t, e) {
	const n = (t.style.animation || '').split(', '),
		i = n.filter(e ? (l) => l.indexOf(e) < 0 : (l) => l.indexOf('__svelte') === -1),
		s = n.length - i.length;
	s && ((t.style.animation = i.join(', ')), (T -= s), T || Pt());
}
function Pt() {
	Q(() => {
		T ||
			(P.forEach((t) => {
				const { ownerNode: e } = t.stylesheet;
				e && ct(e);
			}),
			P.clear());
	});
}
function me(t, e, n, i) {
	if (!e) return b;
	const s = t.getBoundingClientRect();
	if (e.left === s.left && e.right === s.right && e.top === s.top && e.bottom === s.bottom)
		return b;
	const {
		delay: l = 0,
		duration: r = 300,
		easing: a = J,
		start: o = K() + l,
		end: c = o + r,
		tick: f = b,
		css: u
	} = n(t, { from: e, to: s }, i);
	let d = !0,
		_ = !1,
		h;
	function g() {
		u && (h = X(t, 0, 1, r, l, a, u)), l || (_ = !0);
	}
	function m() {
		u && z(t, h), (d = !1);
	}
	return (
		U((y) => {
			if ((!_ && y >= o && (_ = !0), _ && y >= c && (f(1, 0), m()), !d)) return !1;
			if (_) {
				const k = y - o,
					$ = 0 + 1 * a(k / r);
				f($, 1 - $);
			}
			return !0;
		}),
		g(),
		f(0, 1),
		m
	);
}
function pe(t) {
	const e = getComputedStyle(t);
	if (e.position !== 'absolute' && e.position !== 'fixed') {
		const { width: n, height: i } = e,
			s = t.getBoundingClientRect();
		(t.style.position = 'absolute'), (t.style.width = n), (t.style.height = i), Tt(t, s);
	}
}
function Tt(t, e) {
	const n = t.getBoundingClientRect();
	if (e.left !== n.left || e.top !== n.top) {
		const i = getComputedStyle(t),
			s = i.transform === 'none' ? '' : i.transform;
		t.style.transform = `${s} translate(${e.left - n.left}px, ${e.top - n.top}px)`;
	}
}
let B;
function R(t) {
	B = t;
}
function Y() {
	if (!B) throw new Error('Function called outside component initialization');
	return B;
}
function ye(t) {
	Y().$$.on_mount.push(t);
}
function ge(t) {
	Y().$$.after_update.push(t);
}
function we(t) {
	Y().$$.on_destroy.push(t);
}
const N = [],
	et = [];
let M = [];
const nt = [],
	dt = Promise.resolve();
let G = !1;
function _t() {
	G || ((G = !0), dt.then(ht));
}
function xe() {
	return _t(), dt;
}
function O(t) {
	M.push(t);
}
const H = new Set();
let S = 0;
function ht() {
	if (S !== 0) return;
	const t = B;
	do {
		try {
			for (; S < N.length; ) {
				const e = N[S];
				S++, R(e), zt(e.$$);
			}
		} catch (e) {
			throw ((N.length = 0), (S = 0), e);
		}
		for (R(null), N.length = 0, S = 0; et.length; ) et.pop()();
		for (let e = 0; e < M.length; e += 1) {
			const n = M[e];
			H.has(n) || (H.add(n), n());
		}
		M.length = 0;
	} while (N.length);
	for (; nt.length; ) nt.pop()();
	(G = !1), H.clear(), R(t);
}
function zt(t) {
	if (t.fragment !== null) {
		t.update(), E(t.before_update);
		const e = t.dirty;
		(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(O);
	}
}
function Ft(t) {
	const e = [],
		n = [];
	M.forEach((i) => (t.indexOf(i) === -1 ? e.push(i) : n.push(i))), n.forEach((i) => i()), (M = e);
}
let j;
function mt() {
	return (
		j ||
			((j = Promise.resolve()),
			j.then(() => {
				j = null;
			})),
		j
	);
}
function F(t, e, n) {
	t.dispatchEvent(Ot(`${e ? 'intro' : 'outro'}${n}`));
}
const D = new Set();
let v;
function be() {
	v = { r: 0, c: [], p: v };
}
function $e() {
	v.r || E(v.c), (v = v.p);
}
function pt(t, e) {
	t && t.i && (D.delete(t), t.i(e));
}
function Lt(t, e, n, i) {
	if (t && t.o) {
		if (D.has(t)) return;
		D.add(t),
			v.c.push(() => {
				D.delete(t), i && (n && t.d(1), i());
			}),
			t.o(e);
	} else i && i();
}
const yt = { duration: 0 };
function ve(t, e, n) {
	const i = { direction: 'in' };
	let s = e(t, n, i),
		l = !1,
		r,
		a,
		o = 0;
	function c() {
		r && z(t, r);
	}
	function f() {
		const { delay: d = 0, duration: _ = 300, easing: h = J, tick: g = b, css: m } = s || yt;
		m && (r = X(t, 0, 1, _, d, h, m, o++)), g(0, 1);
		const y = K() + d,
			k = y + _;
		a && a.abort(),
			(l = !0),
			O(() => F(t, !0, 'start')),
			(a = U(($) => {
				if (l) {
					if ($ >= k) return g(1, 0), F(t, !0, 'end'), c(), (l = !1);
					if ($ >= y) {
						const A = h(($ - y) / _);
						g(A, 1 - A);
					}
				}
				return l;
			}));
	}
	let u = !1;
	return {
		start() {
			u || ((u = !0), z(t), L(s) ? ((s = s(i)), mt().then(f)) : f());
		},
		invalidate() {
			u = !1;
		},
		end() {
			l && (c(), (l = !1));
		}
	};
}
function ke(t, e, n) {
	const i = { direction: 'out' };
	let s = e(t, n, i),
		l = !0,
		r;
	const a = v;
	a.r += 1;
	function o() {
		const { delay: c = 0, duration: f = 300, easing: u = J, tick: d = b, css: _ } = s || yt;
		_ && (r = X(t, 1, 0, f, c, u, _));
		const h = K() + c,
			g = h + f;
		O(() => F(t, !1, 'start')),
			U((m) => {
				if (l) {
					if (m >= g) return d(0, 1), F(t, !1, 'end'), --a.r || E(a.c), !1;
					if (m >= h) {
						const y = u((m - h) / f);
						d(1 - y, y);
					}
				}
				return l;
			});
	}
	return (
		L(s)
			? mt().then(() => {
					(s = s(i)), o();
			  })
			: o(),
		{
			end(c) {
				c && s.tick && s.tick(1, 0), l && (r && z(t, r), (l = !1));
			}
		}
	);
}
function Wt(t, e) {
	Lt(t, 1, 1, () => {
		e.delete(t.key);
	});
}
function Ee(t, e) {
	t.f(), Wt(t, e);
}
function Se(t, e, n, i, s, l, r, a, o, c, f, u) {
	let d = t.length,
		_ = l.length,
		h = d;
	const g = {};
	for (; h--; ) g[t[h].key] = h;
	const m = [],
		y = new Map(),
		k = new Map(),
		$ = [];
	for (h = _; h--; ) {
		const p = u(s, l, h),
			w = n(p);
		let x = r.get(w);
		x ? i && $.push(() => x.p(p, e)) : ((x = c(w, p)), x.c()),
			y.set(w, (m[h] = x)),
			w in g && k.set(w, Math.abs(h - g[w]));
	}
	const A = new Set(),
		Z = new Set();
	function I(p) {
		pt(p, 1), p.m(a, f), r.set(p.key, p), (f = p.first), _--;
	}
	for (; d && _; ) {
		const p = m[_ - 1],
			w = t[d - 1],
			x = p.key,
			q = w.key;
		p === w
			? ((f = p.first), d--, _--)
			: y.has(q)
			? !r.has(x) || A.has(x)
				? I(p)
				: Z.has(q)
				? d--
				: k.get(x) > k.get(q)
				? (Z.add(x), I(p))
				: (A.add(q), d--)
			: (o(w, r), d--);
	}
	for (; d--; ) {
		const p = t[d];
		y.has(p.key) || o(p, r);
	}
	for (; _; ) I(m[_ - 1]);
	return E($), m;
}
const It = [
	'allowfullscreen',
	'allowpaymentrequest',
	'async',
	'autofocus',
	'autoplay',
	'checked',
	'controls',
	'default',
	'defer',
	'disabled',
	'formnovalidate',
	'hidden',
	'inert',
	'ismap',
	'loop',
	'multiple',
	'muted',
	'nomodule',
	'novalidate',
	'open',
	'playsinline',
	'readonly',
	'required',
	'reversed',
	'selected'
];
[...It];
function Ne(t) {
	t && t.c();
}
function Ce(t, e) {
	t && t.l(e);
}
function Ht(t, e, n, i) {
	const { fragment: s, after_update: l } = t.$$;
	s && s.m(e, n),
		i ||
			O(() => {
				const r = t.$$.on_mount.map(it).filter(L);
				t.$$.on_destroy ? t.$$.on_destroy.push(...r) : E(r), (t.$$.on_mount = []);
			}),
		l.forEach(O);
}
function Gt(t, e) {
	const n = t.$$;
	n.fragment !== null &&
		(Ft(n.after_update),
		E(n.on_destroy),
		n.fragment && n.fragment.d(e),
		(n.on_destroy = n.fragment = null),
		(n.ctx = []));
}
function Jt(t, e) {
	t.$$.dirty[0] === -1 && (N.push(t), _t(), t.$$.dirty.fill(0)),
		(t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function Me(t, e, n, i, s, l, r, a = [-1]) {
	const o = B;
	R(t);
	const c = (t.$$ = {
		fragment: null,
		ctx: [],
		props: l,
		update: b,
		not_equal: s,
		bound: tt(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(e.context || (o ? o.$$.context : [])),
		callbacks: tt(),
		dirty: a,
		skip_bound: !1,
		root: e.target || o.$$.root
	});
	r && r(c.root);
	let f = !1;
	if (
		((c.ctx = n
			? n(t, e.props || {}, (u, d, ..._) => {
					const h = _.length ? _[0] : d;
					return (
						c.ctx &&
							s(c.ctx[u], (c.ctx[u] = h)) &&
							(!c.skip_bound && c.bound[u] && c.bound[u](h), f && Jt(t, u)),
						d
					);
			  })
			: []),
		c.update(),
		(f = !0),
		E(c.before_update),
		(c.fragment = i ? i(c.ctx) : !1),
		e.target)
	) {
		if (e.hydrate) {
			$t();
			const u = jt(e.target);
			c.fragment && c.fragment.l(u), u.forEach(ct);
		} else c.fragment && c.fragment.c();
		e.intro && pt(t.$$.fragment), Ht(t, e.target, e.anchor, e.customElement), vt(), ht();
	}
	R(o);
}
class Ae {
	$destroy() {
		Gt(this, 1), (this.$destroy = b);
	}
	$on(e, n) {
		if (!L(n)) return b;
		const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
		return (
			i.push(n),
			() => {
				const s = i.indexOf(n);
				s !== -1 && i.splice(s, 1);
			}
		);
	}
	$set(e) {
		this.$$set && !wt(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
	}
}
export {
	ke as $,
	Ht as A,
	Gt as B,
	Ut as C,
	Xt as D,
	Yt as E,
	Vt as F,
	Mt as G,
	b as H,
	Qt as I,
	Zt as J,
	J as K,
	L,
	gt as M,
	K as N,
	U as O,
	ie as P,
	we as Q,
	At as R,
	Ae as S,
	le as T,
	xt as U,
	Se as V,
	pe as W,
	Tt as X,
	me as Y,
	O as Z,
	ve as _,
	ee as a,
	Ee as a0,
	ue as a1,
	de as a2,
	re as a3,
	E as a4,
	_e as a5,
	te as b,
	ce as c,
	Lt as d,
	ne as e,
	$e as f,
	pt as g,
	ct as h,
	Me as i,
	ge as j,
	at as k,
	oe as l,
	jt as m,
	se as n,
	ye as o,
	fe as p,
	V as q,
	Bt as r,
	Kt as s,
	xe as t,
	ae as u,
	be as v,
	et as w,
	he as x,
	Ne as y,
	Ce as z
};
