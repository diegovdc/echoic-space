// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');
goog.require('goog.Uri');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.with_meta(cljs.core.cst$sym$cached,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"cljs.spec.gen.alpha/LazyVar");
});

/**
 * Positional factory function for cljs.spec.gen.alpha/LazyVar.
 */
cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')))){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29712 = arguments.length;
var i__4518__auto___29713 = (0);
while(true){
if((i__4518__auto___29713 < len__4517__auto___29712)){
args__4520__auto__.push((arguments[i__4518__auto___29713]));

var G__29714 = (i__4518__auto___29713 + (1));
i__4518__auto___29713 = G__29714;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq29711){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29711));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')))){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29716 = arguments.length;
var i__4518__auto___29717 = (0);
while(true){
if((i__4518__auto___29717 < len__4517__auto___29716)){
args__4520__auto__.push((arguments[i__4518__auto___29717]));

var G__29718 = (i__4518__auto___29717 + (1));
i__4518__auto___29717 = G__29718;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq29715){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29715));
});

var g_QMARK__29722 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')))){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_))," never required"].join('')));
}
}),null));
var g_29723 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__29722){
return (function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')))){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate))," never required"].join('')));
}
});})(g_QMARK__29722))
,null));
var mkg_29724 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__29722,g_29723){
return (function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')))){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator))," never required"].join('')));
}
});})(g_QMARK__29722,g_29723))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__29722,g_29723,mkg_29724){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
var fexpr__29719 = cljs.core.deref(g_QMARK__29722);
return (fexpr__29719.cljs$core$IFn$_invoke$arity$1 ? fexpr__29719.cljs$core$IFn$_invoke$arity$1(x) : fexpr__29719.call(null,x));
});})(g_QMARK__29722,g_29723,mkg_29724))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__29722,g_29723,mkg_29724){
return (function cljs$spec$gen$alpha$generator(gfn){
var fexpr__29720 = cljs.core.deref(mkg_29724);
return (fexpr__29720.cljs$core$IFn$_invoke$arity$1 ? fexpr__29720.cljs$core$IFn$_invoke$arity$1(gfn) : fexpr__29720.call(null,gfn));
});})(g_QMARK__29722,g_29723,mkg_29724))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__29722,g_29723,mkg_29724){
return (function cljs$spec$gen$alpha$generate(generator){
var fexpr__29721 = cljs.core.deref(g_29723);
return (fexpr__29721.cljs$core$IFn$_invoke$arity$1 ? fexpr__29721.cljs$core$IFn$_invoke$arity$1(generator) : fexpr__29721.call(null,generator));
});})(g_QMARK__29722,g_29723,mkg_29724))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator((function (rnd,size){
var fexpr__29725 = cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(gfnd));
return (fexpr__29725.cljs$core$IFn$_invoke$arity$2 ? fexpr__29725.cljs$core$IFn$_invoke$arity$2(rnd,size) : fexpr__29725.call(null,rnd,size));
}));
});
var g__29457__auto___29745 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')))){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__29457__auto___29745){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29746 = arguments.length;
var i__4518__auto___29747 = (0);
while(true){
if((i__4518__auto___29747 < len__4517__auto___29746)){
args__4520__auto__.push((arguments[i__4518__auto___29747]));

var G__29748 = (i__4518__auto___29747 + (1));
i__4518__auto___29747 = G__29748;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29457__auto___29745))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29457__auto___29745){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__29457__auto___29745),args);
});})(g__29457__auto___29745))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__29457__auto___29745){
return (function (seq29726){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29726));
});})(g__29457__auto___29745))
;


var g__29457__auto___29749 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')))){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__29457__auto___29749){
return (function cljs$spec$gen$alpha$list(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29750 = arguments.length;
var i__4518__auto___29751 = (0);
while(true){
if((i__4518__auto___29751 < len__4517__auto___29750)){
args__4520__auto__.push((arguments[i__4518__auto___29751]));

var G__29752 = (i__4518__auto___29751 + (1));
i__4518__auto___29751 = G__29752;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29457__auto___29749))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29457__auto___29749){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__29457__auto___29749),args);
});})(g__29457__auto___29749))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__29457__auto___29749){
return (function (seq29727){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29727));
});})(g__29457__auto___29749))
;


var g__29457__auto___29753 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')))){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__29457__auto___29753){
return (function cljs$spec$gen$alpha$map(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29754 = arguments.length;
var i__4518__auto___29755 = (0);
while(true){
if((i__4518__auto___29755 < len__4517__auto___29754)){
args__4520__auto__.push((arguments[i__4518__auto___29755]));

var G__29756 = (i__4518__auto___29755 + (1));
i__4518__auto___29755 = G__29756;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29457__auto___29753))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29457__auto___29753){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__29457__auto___29753),args);
});})(g__29457__auto___29753))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__29457__auto___29753){
return (function (seq29728){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29728));
});})(g__29457__auto___29753))
;


var g__29457__auto___29757 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')))){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__29457__auto___29757){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29758 = arguments.length;
var i__4518__auto___29759 = (0);
while(true){
if((i__4518__auto___29759 < len__4517__auto___29758)){
args__4520__auto__.push((arguments[i__4518__auto___29759]));

var G__29760 = (i__4518__auto___29759 + (1));
i__4518__auto___29759 = G__29760;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29457__auto___29757))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29457__auto___29757){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__29457__auto___29757),args);
});})(g__29457__auto___29757))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__29457__auto___29757){
return (function (seq29729){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29729));
});})(g__29457__auto___29757))
;


var g__29457__auto___29761 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')))){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__29457__auto___29761){
return (function cljs$spec$gen$alpha$set(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29762 = arguments.length;
var i__4518__auto___29763 = (0);
while(true){
if((i__4518__auto___29763 < len__4517__auto___29762)){
args__4520__auto__.push((arguments[i__4518__auto___29763]));

var G__29764 = (i__4518__auto___29763 + (1));
i__4518__auto___29763 = G__29764;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29457__auto___29761))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29457__auto___29761){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__29457__auto___29761),args);
});})(g__29457__auto___29761))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__29457__auto___29761){
return (function (seq29730){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29730));
});})(g__29457__auto___29761))
;


var g__29457__auto___29765 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')))){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__29457__auto___29765){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29766 = arguments.length;
var i__4518__auto___29767 = (0);
while(true){
if((i__4518__auto___29767 < len__4517__auto___29766)){
args__4520__auto__.push((arguments[i__4518__auto___29767]));

var G__29768 = (i__4518__auto___29767 + (1));
i__4518__auto___29767 = G__29768;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29457__auto___29765))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29457__auto___29765){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__29457__auto___29765),args);
});})(g__29457__auto___29765))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__29457__auto___29765){
return (function (seq29731){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29731));
});})(g__29457__auto___29765))
;


var g__29457__auto___29769 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')))){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__29457__auto___29769){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29770 = arguments.length;
var i__4518__auto___29771 = (0);
while(true){
if((i__4518__auto___29771 < len__4517__auto___29770)){
args__4520__auto__.push((arguments[i__4518__auto___29771]));

var G__29772 = (i__4518__auto___29771 + (1));
i__4518__auto___29771 = G__29772;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29457__auto___29769))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29457__auto___29769){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__29457__auto___29769),args);
});})(g__29457__auto___29769))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__29457__auto___29769){
return (function (seq29732){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29732));
});})(g__29457__auto___29769))
;


var g__29457__auto___29773 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')))){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__29457__auto___29773){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29774 = arguments.length;
var i__4518__auto___29775 = (0);
while(true){
if((i__4518__auto___29775 < len__4517__auto___29774)){
args__4520__auto__.push((arguments[i__4518__auto___29775]));

var G__29776 = (i__4518__auto___29775 + (1));
i__4518__auto___29775 = G__29776;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29457__auto___29773))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29457__auto___29773){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__29457__auto___29773),args);
});})(g__29457__auto___29773))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__29457__auto___29773){
return (function (seq29733){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29733));
});})(g__29457__auto___29773))
;


var g__29457__auto___29777 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')))){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__29457__auto___29777){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29778 = arguments.length;
var i__4518__auto___29779 = (0);
while(true){
if((i__4518__auto___29779 < len__4517__auto___29778)){
args__4520__auto__.push((arguments[i__4518__auto___29779]));

var G__29780 = (i__4518__auto___29779 + (1));
i__4518__auto___29779 = G__29780;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29457__auto___29777))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29457__auto___29777){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__29457__auto___29777),args);
});})(g__29457__auto___29777))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__29457__auto___29777){
return (function (seq29734){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29734));
});})(g__29457__auto___29777))
;


var g__29457__auto___29781 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')))){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__29457__auto___29781){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29782 = arguments.length;
var i__4518__auto___29783 = (0);
while(true){
if((i__4518__auto___29783 < len__4517__auto___29782)){
args__4520__auto__.push((arguments[i__4518__auto___29783]));

var G__29784 = (i__4518__auto___29783 + (1));
i__4518__auto___29783 = G__29784;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29457__auto___29781))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29457__auto___29781){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__29457__auto___29781),args);
});})(g__29457__auto___29781))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__29457__auto___29781){
return (function (seq29735){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29735));
});})(g__29457__auto___29781))
;


var g__29457__auto___29785 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')))){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__29457__auto___29785){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29786 = arguments.length;
var i__4518__auto___29787 = (0);
while(true){
if((i__4518__auto___29787 < len__4517__auto___29786)){
args__4520__auto__.push((arguments[i__4518__auto___29787]));

var G__29788 = (i__4518__auto___29787 + (1));
i__4518__auto___29787 = G__29788;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29457__auto___29785))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29457__auto___29785){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__29457__auto___29785),args);
});})(g__29457__auto___29785))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__29457__auto___29785){
return (function (seq29736){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29736));
});})(g__29457__auto___29785))
;


var g__29457__auto___29789 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')))){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__29457__auto___29789){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29790 = arguments.length;
var i__4518__auto___29791 = (0);
while(true){
if((i__4518__auto___29791 < len__4517__auto___29790)){
args__4520__auto__.push((arguments[i__4518__auto___29791]));

var G__29792 = (i__4518__auto___29791 + (1));
i__4518__auto___29791 = G__29792;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29457__auto___29789))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29457__auto___29789){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__29457__auto___29789),args);
});})(g__29457__auto___29789))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__29457__auto___29789){
return (function (seq29737){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29737));
});})(g__29457__auto___29789))
;


var g__29457__auto___29793 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')))){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__29457__auto___29793){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29794 = arguments.length;
var i__4518__auto___29795 = (0);
while(true){
if((i__4518__auto___29795 < len__4517__auto___29794)){
args__4520__auto__.push((arguments[i__4518__auto___29795]));

var G__29796 = (i__4518__auto___29795 + (1));
i__4518__auto___29795 = G__29796;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29457__auto___29793))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29457__auto___29793){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__29457__auto___29793),args);
});})(g__29457__auto___29793))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__29457__auto___29793){
return (function (seq29738){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29738));
});})(g__29457__auto___29793))
;


var g__29457__auto___29797 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')))){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__29457__auto___29797){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29798 = arguments.length;
var i__4518__auto___29799 = (0);
while(true){
if((i__4518__auto___29799 < len__4517__auto___29798)){
args__4520__auto__.push((arguments[i__4518__auto___29799]));

var G__29800 = (i__4518__auto___29799 + (1));
i__4518__auto___29799 = G__29800;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29457__auto___29797))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29457__auto___29797){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__29457__auto___29797),args);
});})(g__29457__auto___29797))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__29457__auto___29797){
return (function (seq29739){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29739));
});})(g__29457__auto___29797))
;


var g__29457__auto___29801 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')))){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__29457__auto___29801){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29802 = arguments.length;
var i__4518__auto___29803 = (0);
while(true){
if((i__4518__auto___29803 < len__4517__auto___29802)){
args__4520__auto__.push((arguments[i__4518__auto___29803]));

var G__29804 = (i__4518__auto___29803 + (1));
i__4518__auto___29803 = G__29804;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29457__auto___29801))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29457__auto___29801){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__29457__auto___29801),args);
});})(g__29457__auto___29801))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__29457__auto___29801){
return (function (seq29740){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29740));
});})(g__29457__auto___29801))
;


var g__29457__auto___29805 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')))){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__29457__auto___29805){
return (function cljs$spec$gen$alpha$return(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29806 = arguments.length;
var i__4518__auto___29807 = (0);
while(true){
if((i__4518__auto___29807 < len__4517__auto___29806)){
args__4520__auto__.push((arguments[i__4518__auto___29807]));

var G__29808 = (i__4518__auto___29807 + (1));
i__4518__auto___29807 = G__29808;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29457__auto___29805))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29457__auto___29805){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__29457__auto___29805),args);
});})(g__29457__auto___29805))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__29457__auto___29805){
return (function (seq29741){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29741));
});})(g__29457__auto___29805))
;


var g__29457__auto___29809 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')))){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__29457__auto___29809){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29810 = arguments.length;
var i__4518__auto___29811 = (0);
while(true){
if((i__4518__auto___29811 < len__4517__auto___29810)){
args__4520__auto__.push((arguments[i__4518__auto___29811]));

var G__29812 = (i__4518__auto___29811 + (1));
i__4518__auto___29811 = G__29812;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29457__auto___29809))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29457__auto___29809){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__29457__auto___29809),args);
});})(g__29457__auto___29809))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__29457__auto___29809){
return (function (seq29742){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29742));
});})(g__29457__auto___29809))
;


var g__29457__auto___29813 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')))){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__29457__auto___29813){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29814 = arguments.length;
var i__4518__auto___29815 = (0);
while(true){
if((i__4518__auto___29815 < len__4517__auto___29814)){
args__4520__auto__.push((arguments[i__4518__auto___29815]));

var G__29816 = (i__4518__auto___29815 + (1));
i__4518__auto___29815 = G__29816;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29457__auto___29813))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29457__auto___29813){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__29457__auto___29813),args);
});})(g__29457__auto___29813))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__29457__auto___29813){
return (function (seq29743){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29743));
});})(g__29457__auto___29813))
;


var g__29457__auto___29817 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')))){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__29457__auto___29817){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29818 = arguments.length;
var i__4518__auto___29819 = (0);
while(true){
if((i__4518__auto___29819 < len__4517__auto___29818)){
args__4520__auto__.push((arguments[i__4518__auto___29819]));

var G__29820 = (i__4518__auto___29819 + (1));
i__4518__auto___29819 = G__29820;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29457__auto___29817))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29457__auto___29817){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__29457__auto___29817),args);
});})(g__29457__auto___29817))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__29457__auto___29817){
return (function (seq29744){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29744));
});})(g__29457__auto___29817))
;

var g__29470__auto___29842 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')))){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__29470__auto___29842){
return (function cljs$spec$gen$alpha$any(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29843 = arguments.length;
var i__4518__auto___29844 = (0);
while(true){
if((i__4518__auto___29844 < len__4517__auto___29843)){
args__4520__auto__.push((arguments[i__4518__auto___29844]));

var G__29845 = (i__4518__auto___29844 + (1));
i__4518__auto___29844 = G__29845;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29470__auto___29842))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29470__auto___29842){
return (function (args){
return cljs.core.deref(g__29470__auto___29842);
});})(g__29470__auto___29842))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__29470__auto___29842){
return (function (seq29821){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29821));
});})(g__29470__auto___29842))
;


var g__29470__auto___29846 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')))){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__29470__auto___29846){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29847 = arguments.length;
var i__4518__auto___29848 = (0);
while(true){
if((i__4518__auto___29848 < len__4517__auto___29847)){
args__4520__auto__.push((arguments[i__4518__auto___29848]));

var G__29849 = (i__4518__auto___29848 + (1));
i__4518__auto___29848 = G__29849;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29470__auto___29846))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29470__auto___29846){
return (function (args){
return cljs.core.deref(g__29470__auto___29846);
});})(g__29470__auto___29846))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__29470__auto___29846){
return (function (seq29822){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29822));
});})(g__29470__auto___29846))
;


var g__29470__auto___29850 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')))){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__29470__auto___29850){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29851 = arguments.length;
var i__4518__auto___29852 = (0);
while(true){
if((i__4518__auto___29852 < len__4517__auto___29851)){
args__4520__auto__.push((arguments[i__4518__auto___29852]));

var G__29853 = (i__4518__auto___29852 + (1));
i__4518__auto___29852 = G__29853;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29470__auto___29850))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29470__auto___29850){
return (function (args){
return cljs.core.deref(g__29470__auto___29850);
});})(g__29470__auto___29850))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__29470__auto___29850){
return (function (seq29823){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29823));
});})(g__29470__auto___29850))
;


var g__29470__auto___29854 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')))){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__29470__auto___29854){
return (function cljs$spec$gen$alpha$char(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29855 = arguments.length;
var i__4518__auto___29856 = (0);
while(true){
if((i__4518__auto___29856 < len__4517__auto___29855)){
args__4520__auto__.push((arguments[i__4518__auto___29856]));

var G__29857 = (i__4518__auto___29856 + (1));
i__4518__auto___29856 = G__29857;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29470__auto___29854))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29470__auto___29854){
return (function (args){
return cljs.core.deref(g__29470__auto___29854);
});})(g__29470__auto___29854))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__29470__auto___29854){
return (function (seq29824){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29824));
});})(g__29470__auto___29854))
;


var g__29470__auto___29858 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')))){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__29470__auto___29858){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29859 = arguments.length;
var i__4518__auto___29860 = (0);
while(true){
if((i__4518__auto___29860 < len__4517__auto___29859)){
args__4520__auto__.push((arguments[i__4518__auto___29860]));

var G__29861 = (i__4518__auto___29860 + (1));
i__4518__auto___29860 = G__29861;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29470__auto___29858))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29470__auto___29858){
return (function (args){
return cljs.core.deref(g__29470__auto___29858);
});})(g__29470__auto___29858))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__29470__auto___29858){
return (function (seq29825){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29825));
});})(g__29470__auto___29858))
;


var g__29470__auto___29862 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')))){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__29470__auto___29862){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29863 = arguments.length;
var i__4518__auto___29864 = (0);
while(true){
if((i__4518__auto___29864 < len__4517__auto___29863)){
args__4520__auto__.push((arguments[i__4518__auto___29864]));

var G__29865 = (i__4518__auto___29864 + (1));
i__4518__auto___29864 = G__29865;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29470__auto___29862))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29470__auto___29862){
return (function (args){
return cljs.core.deref(g__29470__auto___29862);
});})(g__29470__auto___29862))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__29470__auto___29862){
return (function (seq29826){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29826));
});})(g__29470__auto___29862))
;


var g__29470__auto___29866 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')))){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__29470__auto___29866){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29867 = arguments.length;
var i__4518__auto___29868 = (0);
while(true){
if((i__4518__auto___29868 < len__4517__auto___29867)){
args__4520__auto__.push((arguments[i__4518__auto___29868]));

var G__29869 = (i__4518__auto___29868 + (1));
i__4518__auto___29868 = G__29869;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29470__auto___29866))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29470__auto___29866){
return (function (args){
return cljs.core.deref(g__29470__auto___29866);
});})(g__29470__auto___29866))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__29470__auto___29866){
return (function (seq29827){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29827));
});})(g__29470__auto___29866))
;


var g__29470__auto___29870 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')))){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__29470__auto___29870){
return (function cljs$spec$gen$alpha$double(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29871 = arguments.length;
var i__4518__auto___29872 = (0);
while(true){
if((i__4518__auto___29872 < len__4517__auto___29871)){
args__4520__auto__.push((arguments[i__4518__auto___29872]));

var G__29873 = (i__4518__auto___29872 + (1));
i__4518__auto___29872 = G__29873;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29470__auto___29870))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29470__auto___29870){
return (function (args){
return cljs.core.deref(g__29470__auto___29870);
});})(g__29470__auto___29870))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__29470__auto___29870){
return (function (seq29828){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29828));
});})(g__29470__auto___29870))
;


var g__29470__auto___29874 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')))){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__29470__auto___29874){
return (function cljs$spec$gen$alpha$int(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29875 = arguments.length;
var i__4518__auto___29876 = (0);
while(true){
if((i__4518__auto___29876 < len__4517__auto___29875)){
args__4520__auto__.push((arguments[i__4518__auto___29876]));

var G__29877 = (i__4518__auto___29876 + (1));
i__4518__auto___29876 = G__29877;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29470__auto___29874))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29470__auto___29874){
return (function (args){
return cljs.core.deref(g__29470__auto___29874);
});})(g__29470__auto___29874))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__29470__auto___29874){
return (function (seq29829){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29829));
});})(g__29470__auto___29874))
;


var g__29470__auto___29878 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')))){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__29470__auto___29878){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29879 = arguments.length;
var i__4518__auto___29880 = (0);
while(true){
if((i__4518__auto___29880 < len__4517__auto___29879)){
args__4520__auto__.push((arguments[i__4518__auto___29880]));

var G__29881 = (i__4518__auto___29880 + (1));
i__4518__auto___29880 = G__29881;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29470__auto___29878))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29470__auto___29878){
return (function (args){
return cljs.core.deref(g__29470__auto___29878);
});})(g__29470__auto___29878))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__29470__auto___29878){
return (function (seq29830){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29830));
});})(g__29470__auto___29878))
;


var g__29470__auto___29882 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')))){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__29470__auto___29882){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29883 = arguments.length;
var i__4518__auto___29884 = (0);
while(true){
if((i__4518__auto___29884 < len__4517__auto___29883)){
args__4520__auto__.push((arguments[i__4518__auto___29884]));

var G__29885 = (i__4518__auto___29884 + (1));
i__4518__auto___29884 = G__29885;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29470__auto___29882))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29470__auto___29882){
return (function (args){
return cljs.core.deref(g__29470__auto___29882);
});})(g__29470__auto___29882))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__29470__auto___29882){
return (function (seq29831){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29831));
});})(g__29470__auto___29882))
;


var g__29470__auto___29886 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')))){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__29470__auto___29886){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29887 = arguments.length;
var i__4518__auto___29888 = (0);
while(true){
if((i__4518__auto___29888 < len__4517__auto___29887)){
args__4520__auto__.push((arguments[i__4518__auto___29888]));

var G__29889 = (i__4518__auto___29888 + (1));
i__4518__auto___29888 = G__29889;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29470__auto___29886))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29470__auto___29886){
return (function (args){
return cljs.core.deref(g__29470__auto___29886);
});})(g__29470__auto___29886))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__29470__auto___29886){
return (function (seq29832){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29832));
});})(g__29470__auto___29886))
;


var g__29470__auto___29890 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')))){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__29470__auto___29890){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29891 = arguments.length;
var i__4518__auto___29892 = (0);
while(true){
if((i__4518__auto___29892 < len__4517__auto___29891)){
args__4520__auto__.push((arguments[i__4518__auto___29892]));

var G__29893 = (i__4518__auto___29892 + (1));
i__4518__auto___29892 = G__29893;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29470__auto___29890))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29470__auto___29890){
return (function (args){
return cljs.core.deref(g__29470__auto___29890);
});})(g__29470__auto___29890))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__29470__auto___29890){
return (function (seq29833){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29833));
});})(g__29470__auto___29890))
;


var g__29470__auto___29894 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')))){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__29470__auto___29894){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29895 = arguments.length;
var i__4518__auto___29896 = (0);
while(true){
if((i__4518__auto___29896 < len__4517__auto___29895)){
args__4520__auto__.push((arguments[i__4518__auto___29896]));

var G__29897 = (i__4518__auto___29896 + (1));
i__4518__auto___29896 = G__29897;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29470__auto___29894))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29470__auto___29894){
return (function (args){
return cljs.core.deref(g__29470__auto___29894);
});})(g__29470__auto___29894))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__29470__auto___29894){
return (function (seq29834){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29834));
});})(g__29470__auto___29894))
;


var g__29470__auto___29898 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')))){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__29470__auto___29898){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29899 = arguments.length;
var i__4518__auto___29900 = (0);
while(true){
if((i__4518__auto___29900 < len__4517__auto___29899)){
args__4520__auto__.push((arguments[i__4518__auto___29900]));

var G__29901 = (i__4518__auto___29900 + (1));
i__4518__auto___29900 = G__29901;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29470__auto___29898))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29470__auto___29898){
return (function (args){
return cljs.core.deref(g__29470__auto___29898);
});})(g__29470__auto___29898))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__29470__auto___29898){
return (function (seq29835){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29835));
});})(g__29470__auto___29898))
;


var g__29470__auto___29902 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')))){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__29470__auto___29902){
return (function cljs$spec$gen$alpha$string(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29903 = arguments.length;
var i__4518__auto___29904 = (0);
while(true){
if((i__4518__auto___29904 < len__4517__auto___29903)){
args__4520__auto__.push((arguments[i__4518__auto___29904]));

var G__29905 = (i__4518__auto___29904 + (1));
i__4518__auto___29904 = G__29905;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29470__auto___29902))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29470__auto___29902){
return (function (args){
return cljs.core.deref(g__29470__auto___29902);
});})(g__29470__auto___29902))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__29470__auto___29902){
return (function (seq29836){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29836));
});})(g__29470__auto___29902))
;


var g__29470__auto___29906 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')))){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__29470__auto___29906){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29907 = arguments.length;
var i__4518__auto___29908 = (0);
while(true){
if((i__4518__auto___29908 < len__4517__auto___29907)){
args__4520__auto__.push((arguments[i__4518__auto___29908]));

var G__29909 = (i__4518__auto___29908 + (1));
i__4518__auto___29908 = G__29909;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29470__auto___29906))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29470__auto___29906){
return (function (args){
return cljs.core.deref(g__29470__auto___29906);
});})(g__29470__auto___29906))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__29470__auto___29906){
return (function (seq29837){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29837));
});})(g__29470__auto___29906))
;


var g__29470__auto___29910 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')))){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__29470__auto___29910){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29911 = arguments.length;
var i__4518__auto___29912 = (0);
while(true){
if((i__4518__auto___29912 < len__4517__auto___29911)){
args__4520__auto__.push((arguments[i__4518__auto___29912]));

var G__29913 = (i__4518__auto___29912 + (1));
i__4518__auto___29912 = G__29913;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29470__auto___29910))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29470__auto___29910){
return (function (args){
return cljs.core.deref(g__29470__auto___29910);
});})(g__29470__auto___29910))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__29470__auto___29910){
return (function (seq29838){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29838));
});})(g__29470__auto___29910))
;


var g__29470__auto___29914 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')))){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__29470__auto___29914){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29915 = arguments.length;
var i__4518__auto___29916 = (0);
while(true){
if((i__4518__auto___29916 < len__4517__auto___29915)){
args__4520__auto__.push((arguments[i__4518__auto___29916]));

var G__29917 = (i__4518__auto___29916 + (1));
i__4518__auto___29916 = G__29917;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29470__auto___29914))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29470__auto___29914){
return (function (args){
return cljs.core.deref(g__29470__auto___29914);
});})(g__29470__auto___29914))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__29470__auto___29914){
return (function (seq29839){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29839));
});})(g__29470__auto___29914))
;


var g__29470__auto___29918 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')))){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__29470__auto___29918){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29919 = arguments.length;
var i__4518__auto___29920 = (0);
while(true){
if((i__4518__auto___29920 < len__4517__auto___29919)){
args__4520__auto__.push((arguments[i__4518__auto___29920]));

var G__29921 = (i__4518__auto___29920 + (1));
i__4518__auto___29920 = G__29921;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29470__auto___29918))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29470__auto___29918){
return (function (args){
return cljs.core.deref(g__29470__auto___29918);
});})(g__29470__auto___29918))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__29470__auto___29918){
return (function (seq29840){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29840));
});})(g__29470__auto___29918))
;


var g__29470__auto___29922 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')))){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__29470__auto___29922){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29923 = arguments.length;
var i__4518__auto___29924 = (0);
while(true){
if((i__4518__auto___29924 < len__4517__auto___29923)){
args__4520__auto__.push((arguments[i__4518__auto___29924]));

var G__29925 = (i__4518__auto___29924 + (1));
i__4518__auto___29924 = G__29925;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__29470__auto___29922))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29470__auto___29922){
return (function (args){
return cljs.core.deref(g__29470__auto___29922);
});})(g__29470__auto___29922))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__29470__auto___29922){
return (function (seq29841){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29841));
});})(g__29470__auto___29922))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29928 = arguments.length;
var i__4518__auto___29929 = (0);
while(true){
if((i__4518__auto___29929 < len__4517__auto___29928)){
args__4520__auto__.push((arguments[i__4518__auto___29929]));

var G__29930 = (i__4518__auto___29929 + (1));
i__4518__auto___29929 = G__29930;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__29926_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__29926_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,gens)], 0));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq29927){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29927));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace(ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.uri_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns()], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.any_printable()], null)], 0)),cljs.spec.gen.alpha.boolean$(),cljs.spec.gen.alpha.char$(),cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (simple){
return (function (p1__29932_SHARP_){
return (new Date(p1__29932_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer()], 0)),cljs.spec.gen.alpha.symbol(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)], 0)),cljs.spec.gen.alpha.string_alphanumeric(),cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (simple){
return (function (p1__29931_SHARP_){
return (new goog.Uri(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29931_SHARP_),".com"].join('')));
});})(simple))
,cljs.spec.gen.alpha.uuid()], 0)),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0)),cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max,(-1)], null)], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0))], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(0)], null)], 0)),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(1)], null)], 0)),cljs.spec.gen.alpha.uuid(),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.symbol()], null)], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.double$()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns()], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.string_alphanumeric()], null)], 0)),cljs.spec.gen.alpha.symbol_ns(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_(pred)){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pred], 0));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.gen_builtins),pred);
}
});
