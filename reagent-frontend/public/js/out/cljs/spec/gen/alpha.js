// Compiled by ClojureScript 1.10.312 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
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
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.spec.gen.alpha/LazyVar");
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
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55045 = arguments.length;
var i__4518__auto___55046 = (0);
while(true){
if((i__4518__auto___55046 < len__4517__auto___55045)){
args__4520__auto__.push((arguments[i__4518__auto___55046]));

var G__55047 = (i__4518__auto___55046 + (1));
i__4518__auto___55046 = G__55047;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq55044){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55044));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')))){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55049 = arguments.length;
var i__4518__auto___55050 = (0);
while(true){
if((i__4518__auto___55050 < len__4517__auto___55049)){
args__4520__auto__.push((arguments[i__4518__auto___55050]));

var G__55051 = (i__4518__auto___55050 + (1));
i__4518__auto___55050 = G__55051;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq55048){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55048));
});

var g_QMARK__55052 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')))){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_55053 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__55052){
return (function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')))){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__55052))
,null));
var mkg_55054 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__55052,g_55053){
return (function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')))){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__55052,g_55053))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__55052,g_55053,mkg_55054){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__55052).call(null,x);
});})(g_QMARK__55052,g_55053,mkg_55054))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__55052,g_55053,mkg_55054){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_55054).call(null,gfn);
});})(g_QMARK__55052,g_55053,mkg_55054))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__55052,g_55053,mkg_55054){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_55053).call(null,generator);
});})(g_QMARK__55052,g_55053,mkg_55054))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__30559__auto___55074 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')))){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__30559__auto___55074){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55075 = arguments.length;
var i__4518__auto___55076 = (0);
while(true){
if((i__4518__auto___55076 < len__4517__auto___55075)){
args__4520__auto__.push((arguments[i__4518__auto___55076]));

var G__55077 = (i__4518__auto___55076 + (1));
i__4518__auto___55076 = G__55077;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30559__auto___55074))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30559__auto___55074){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30559__auto___55074),args);
});})(g__30559__auto___55074))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__30559__auto___55074){
return (function (seq55055){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55055));
});})(g__30559__auto___55074))
;


var g__30559__auto___55078 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')))){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__30559__auto___55078){
return (function cljs$spec$gen$alpha$list(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55079 = arguments.length;
var i__4518__auto___55080 = (0);
while(true){
if((i__4518__auto___55080 < len__4517__auto___55079)){
args__4520__auto__.push((arguments[i__4518__auto___55080]));

var G__55081 = (i__4518__auto___55080 + (1));
i__4518__auto___55080 = G__55081;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30559__auto___55078))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30559__auto___55078){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30559__auto___55078),args);
});})(g__30559__auto___55078))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__30559__auto___55078){
return (function (seq55056){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55056));
});})(g__30559__auto___55078))
;


var g__30559__auto___55082 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')))){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__30559__auto___55082){
return (function cljs$spec$gen$alpha$map(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55083 = arguments.length;
var i__4518__auto___55084 = (0);
while(true){
if((i__4518__auto___55084 < len__4517__auto___55083)){
args__4520__auto__.push((arguments[i__4518__auto___55084]));

var G__55085 = (i__4518__auto___55084 + (1));
i__4518__auto___55084 = G__55085;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30559__auto___55082))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30559__auto___55082){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30559__auto___55082),args);
});})(g__30559__auto___55082))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__30559__auto___55082){
return (function (seq55057){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55057));
});})(g__30559__auto___55082))
;


var g__30559__auto___55086 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')))){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__30559__auto___55086){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55087 = arguments.length;
var i__4518__auto___55088 = (0);
while(true){
if((i__4518__auto___55088 < len__4517__auto___55087)){
args__4520__auto__.push((arguments[i__4518__auto___55088]));

var G__55089 = (i__4518__auto___55088 + (1));
i__4518__auto___55088 = G__55089;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30559__auto___55086))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30559__auto___55086){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30559__auto___55086),args);
});})(g__30559__auto___55086))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__30559__auto___55086){
return (function (seq55058){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55058));
});})(g__30559__auto___55086))
;


var g__30559__auto___55090 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')))){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__30559__auto___55090){
return (function cljs$spec$gen$alpha$set(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55091 = arguments.length;
var i__4518__auto___55092 = (0);
while(true){
if((i__4518__auto___55092 < len__4517__auto___55091)){
args__4520__auto__.push((arguments[i__4518__auto___55092]));

var G__55093 = (i__4518__auto___55092 + (1));
i__4518__auto___55092 = G__55093;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30559__auto___55090))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30559__auto___55090){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30559__auto___55090),args);
});})(g__30559__auto___55090))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__30559__auto___55090){
return (function (seq55059){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55059));
});})(g__30559__auto___55090))
;


var g__30559__auto___55094 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')))){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__30559__auto___55094){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55095 = arguments.length;
var i__4518__auto___55096 = (0);
while(true){
if((i__4518__auto___55096 < len__4517__auto___55095)){
args__4520__auto__.push((arguments[i__4518__auto___55096]));

var G__55097 = (i__4518__auto___55096 + (1));
i__4518__auto___55096 = G__55097;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30559__auto___55094))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30559__auto___55094){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30559__auto___55094),args);
});})(g__30559__auto___55094))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__30559__auto___55094){
return (function (seq55060){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55060));
});})(g__30559__auto___55094))
;


var g__30559__auto___55098 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')))){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__30559__auto___55098){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55099 = arguments.length;
var i__4518__auto___55100 = (0);
while(true){
if((i__4518__auto___55100 < len__4517__auto___55099)){
args__4520__auto__.push((arguments[i__4518__auto___55100]));

var G__55101 = (i__4518__auto___55100 + (1));
i__4518__auto___55100 = G__55101;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30559__auto___55098))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30559__auto___55098){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30559__auto___55098),args);
});})(g__30559__auto___55098))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__30559__auto___55098){
return (function (seq55061){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55061));
});})(g__30559__auto___55098))
;


var g__30559__auto___55102 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')))){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__30559__auto___55102){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55103 = arguments.length;
var i__4518__auto___55104 = (0);
while(true){
if((i__4518__auto___55104 < len__4517__auto___55103)){
args__4520__auto__.push((arguments[i__4518__auto___55104]));

var G__55105 = (i__4518__auto___55104 + (1));
i__4518__auto___55104 = G__55105;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30559__auto___55102))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30559__auto___55102){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30559__auto___55102),args);
});})(g__30559__auto___55102))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__30559__auto___55102){
return (function (seq55062){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55062));
});})(g__30559__auto___55102))
;


var g__30559__auto___55106 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')))){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__30559__auto___55106){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55107 = arguments.length;
var i__4518__auto___55108 = (0);
while(true){
if((i__4518__auto___55108 < len__4517__auto___55107)){
args__4520__auto__.push((arguments[i__4518__auto___55108]));

var G__55109 = (i__4518__auto___55108 + (1));
i__4518__auto___55108 = G__55109;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30559__auto___55106))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30559__auto___55106){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30559__auto___55106),args);
});})(g__30559__auto___55106))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__30559__auto___55106){
return (function (seq55063){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55063));
});})(g__30559__auto___55106))
;


var g__30559__auto___55110 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')))){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__30559__auto___55110){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55111 = arguments.length;
var i__4518__auto___55112 = (0);
while(true){
if((i__4518__auto___55112 < len__4517__auto___55111)){
args__4520__auto__.push((arguments[i__4518__auto___55112]));

var G__55113 = (i__4518__auto___55112 + (1));
i__4518__auto___55112 = G__55113;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30559__auto___55110))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30559__auto___55110){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30559__auto___55110),args);
});})(g__30559__auto___55110))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__30559__auto___55110){
return (function (seq55064){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55064));
});})(g__30559__auto___55110))
;


var g__30559__auto___55114 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')))){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__30559__auto___55114){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55115 = arguments.length;
var i__4518__auto___55116 = (0);
while(true){
if((i__4518__auto___55116 < len__4517__auto___55115)){
args__4520__auto__.push((arguments[i__4518__auto___55116]));

var G__55117 = (i__4518__auto___55116 + (1));
i__4518__auto___55116 = G__55117;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30559__auto___55114))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30559__auto___55114){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30559__auto___55114),args);
});})(g__30559__auto___55114))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__30559__auto___55114){
return (function (seq55065){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55065));
});})(g__30559__auto___55114))
;


var g__30559__auto___55118 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')))){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__30559__auto___55118){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55119 = arguments.length;
var i__4518__auto___55120 = (0);
while(true){
if((i__4518__auto___55120 < len__4517__auto___55119)){
args__4520__auto__.push((arguments[i__4518__auto___55120]));

var G__55121 = (i__4518__auto___55120 + (1));
i__4518__auto___55120 = G__55121;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30559__auto___55118))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30559__auto___55118){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30559__auto___55118),args);
});})(g__30559__auto___55118))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__30559__auto___55118){
return (function (seq55066){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55066));
});})(g__30559__auto___55118))
;


var g__30559__auto___55122 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')))){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__30559__auto___55122){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55123 = arguments.length;
var i__4518__auto___55124 = (0);
while(true){
if((i__4518__auto___55124 < len__4517__auto___55123)){
args__4520__auto__.push((arguments[i__4518__auto___55124]));

var G__55125 = (i__4518__auto___55124 + (1));
i__4518__auto___55124 = G__55125;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30559__auto___55122))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30559__auto___55122){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30559__auto___55122),args);
});})(g__30559__auto___55122))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__30559__auto___55122){
return (function (seq55067){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55067));
});})(g__30559__auto___55122))
;


var g__30559__auto___55126 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')))){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__30559__auto___55126){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55127 = arguments.length;
var i__4518__auto___55128 = (0);
while(true){
if((i__4518__auto___55128 < len__4517__auto___55127)){
args__4520__auto__.push((arguments[i__4518__auto___55128]));

var G__55129 = (i__4518__auto___55128 + (1));
i__4518__auto___55128 = G__55129;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30559__auto___55126))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30559__auto___55126){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30559__auto___55126),args);
});})(g__30559__auto___55126))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__30559__auto___55126){
return (function (seq55068){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55068));
});})(g__30559__auto___55126))
;


var g__30559__auto___55130 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')))){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__30559__auto___55130){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55131 = arguments.length;
var i__4518__auto___55132 = (0);
while(true){
if((i__4518__auto___55132 < len__4517__auto___55131)){
args__4520__auto__.push((arguments[i__4518__auto___55132]));

var G__55133 = (i__4518__auto___55132 + (1));
i__4518__auto___55132 = G__55133;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30559__auto___55130))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30559__auto___55130){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30559__auto___55130),args);
});})(g__30559__auto___55130))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__30559__auto___55130){
return (function (seq55069){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55069));
});})(g__30559__auto___55130))
;


var g__30559__auto___55134 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')))){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__30559__auto___55134){
return (function cljs$spec$gen$alpha$return(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55135 = arguments.length;
var i__4518__auto___55136 = (0);
while(true){
if((i__4518__auto___55136 < len__4517__auto___55135)){
args__4520__auto__.push((arguments[i__4518__auto___55136]));

var G__55137 = (i__4518__auto___55136 + (1));
i__4518__auto___55136 = G__55137;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30559__auto___55134))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30559__auto___55134){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30559__auto___55134),args);
});})(g__30559__auto___55134))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__30559__auto___55134){
return (function (seq55070){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55070));
});})(g__30559__auto___55134))
;


var g__30559__auto___55138 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')))){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__30559__auto___55138){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55139 = arguments.length;
var i__4518__auto___55140 = (0);
while(true){
if((i__4518__auto___55140 < len__4517__auto___55139)){
args__4520__auto__.push((arguments[i__4518__auto___55140]));

var G__55141 = (i__4518__auto___55140 + (1));
i__4518__auto___55140 = G__55141;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30559__auto___55138))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30559__auto___55138){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30559__auto___55138),args);
});})(g__30559__auto___55138))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__30559__auto___55138){
return (function (seq55071){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55071));
});})(g__30559__auto___55138))
;


var g__30559__auto___55142 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')))){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__30559__auto___55142){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55143 = arguments.length;
var i__4518__auto___55144 = (0);
while(true){
if((i__4518__auto___55144 < len__4517__auto___55143)){
args__4520__auto__.push((arguments[i__4518__auto___55144]));

var G__55145 = (i__4518__auto___55144 + (1));
i__4518__auto___55144 = G__55145;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30559__auto___55142))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30559__auto___55142){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30559__auto___55142),args);
});})(g__30559__auto___55142))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__30559__auto___55142){
return (function (seq55072){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55072));
});})(g__30559__auto___55142))
;


var g__30559__auto___55146 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')))){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__30559__auto___55146){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55147 = arguments.length;
var i__4518__auto___55148 = (0);
while(true){
if((i__4518__auto___55148 < len__4517__auto___55147)){
args__4520__auto__.push((arguments[i__4518__auto___55148]));

var G__55149 = (i__4518__auto___55148 + (1));
i__4518__auto___55148 = G__55149;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30559__auto___55146))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30559__auto___55146){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30559__auto___55146),args);
});})(g__30559__auto___55146))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__30559__auto___55146){
return (function (seq55073){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55073));
});})(g__30559__auto___55146))
;

var g__30572__auto___55171 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')))){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__30572__auto___55171){
return (function cljs$spec$gen$alpha$any(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55172 = arguments.length;
var i__4518__auto___55173 = (0);
while(true){
if((i__4518__auto___55173 < len__4517__auto___55172)){
args__4520__auto__.push((arguments[i__4518__auto___55173]));

var G__55174 = (i__4518__auto___55173 + (1));
i__4518__auto___55173 = G__55174;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30572__auto___55171))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___55171){
return (function (args){
return cljs.core.deref.call(null,g__30572__auto___55171);
});})(g__30572__auto___55171))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__30572__auto___55171){
return (function (seq55150){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55150));
});})(g__30572__auto___55171))
;


var g__30572__auto___55175 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')))){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__30572__auto___55175){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55176 = arguments.length;
var i__4518__auto___55177 = (0);
while(true){
if((i__4518__auto___55177 < len__4517__auto___55176)){
args__4520__auto__.push((arguments[i__4518__auto___55177]));

var G__55178 = (i__4518__auto___55177 + (1));
i__4518__auto___55177 = G__55178;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30572__auto___55175))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___55175){
return (function (args){
return cljs.core.deref.call(null,g__30572__auto___55175);
});})(g__30572__auto___55175))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__30572__auto___55175){
return (function (seq55151){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55151));
});})(g__30572__auto___55175))
;


var g__30572__auto___55179 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')))){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__30572__auto___55179){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55180 = arguments.length;
var i__4518__auto___55181 = (0);
while(true){
if((i__4518__auto___55181 < len__4517__auto___55180)){
args__4520__auto__.push((arguments[i__4518__auto___55181]));

var G__55182 = (i__4518__auto___55181 + (1));
i__4518__auto___55181 = G__55182;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30572__auto___55179))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___55179){
return (function (args){
return cljs.core.deref.call(null,g__30572__auto___55179);
});})(g__30572__auto___55179))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__30572__auto___55179){
return (function (seq55152){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55152));
});})(g__30572__auto___55179))
;


var g__30572__auto___55183 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')))){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__30572__auto___55183){
return (function cljs$spec$gen$alpha$char(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55184 = arguments.length;
var i__4518__auto___55185 = (0);
while(true){
if((i__4518__auto___55185 < len__4517__auto___55184)){
args__4520__auto__.push((arguments[i__4518__auto___55185]));

var G__55186 = (i__4518__auto___55185 + (1));
i__4518__auto___55185 = G__55186;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30572__auto___55183))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___55183){
return (function (args){
return cljs.core.deref.call(null,g__30572__auto___55183);
});})(g__30572__auto___55183))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__30572__auto___55183){
return (function (seq55153){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55153));
});})(g__30572__auto___55183))
;


var g__30572__auto___55187 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')))){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__30572__auto___55187){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55188 = arguments.length;
var i__4518__auto___55189 = (0);
while(true){
if((i__4518__auto___55189 < len__4517__auto___55188)){
args__4520__auto__.push((arguments[i__4518__auto___55189]));

var G__55190 = (i__4518__auto___55189 + (1));
i__4518__auto___55189 = G__55190;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30572__auto___55187))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___55187){
return (function (args){
return cljs.core.deref.call(null,g__30572__auto___55187);
});})(g__30572__auto___55187))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__30572__auto___55187){
return (function (seq55154){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55154));
});})(g__30572__auto___55187))
;


var g__30572__auto___55191 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')))){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__30572__auto___55191){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55192 = arguments.length;
var i__4518__auto___55193 = (0);
while(true){
if((i__4518__auto___55193 < len__4517__auto___55192)){
args__4520__auto__.push((arguments[i__4518__auto___55193]));

var G__55194 = (i__4518__auto___55193 + (1));
i__4518__auto___55193 = G__55194;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30572__auto___55191))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___55191){
return (function (args){
return cljs.core.deref.call(null,g__30572__auto___55191);
});})(g__30572__auto___55191))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__30572__auto___55191){
return (function (seq55155){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55155));
});})(g__30572__auto___55191))
;


var g__30572__auto___55195 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')))){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__30572__auto___55195){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55196 = arguments.length;
var i__4518__auto___55197 = (0);
while(true){
if((i__4518__auto___55197 < len__4517__auto___55196)){
args__4520__auto__.push((arguments[i__4518__auto___55197]));

var G__55198 = (i__4518__auto___55197 + (1));
i__4518__auto___55197 = G__55198;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30572__auto___55195))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___55195){
return (function (args){
return cljs.core.deref.call(null,g__30572__auto___55195);
});})(g__30572__auto___55195))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__30572__auto___55195){
return (function (seq55156){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55156));
});})(g__30572__auto___55195))
;


var g__30572__auto___55199 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')))){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__30572__auto___55199){
return (function cljs$spec$gen$alpha$double(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55200 = arguments.length;
var i__4518__auto___55201 = (0);
while(true){
if((i__4518__auto___55201 < len__4517__auto___55200)){
args__4520__auto__.push((arguments[i__4518__auto___55201]));

var G__55202 = (i__4518__auto___55201 + (1));
i__4518__auto___55201 = G__55202;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30572__auto___55199))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___55199){
return (function (args){
return cljs.core.deref.call(null,g__30572__auto___55199);
});})(g__30572__auto___55199))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__30572__auto___55199){
return (function (seq55157){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55157));
});})(g__30572__auto___55199))
;


var g__30572__auto___55203 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')))){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__30572__auto___55203){
return (function cljs$spec$gen$alpha$int(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55204 = arguments.length;
var i__4518__auto___55205 = (0);
while(true){
if((i__4518__auto___55205 < len__4517__auto___55204)){
args__4520__auto__.push((arguments[i__4518__auto___55205]));

var G__55206 = (i__4518__auto___55205 + (1));
i__4518__auto___55205 = G__55206;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30572__auto___55203))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___55203){
return (function (args){
return cljs.core.deref.call(null,g__30572__auto___55203);
});})(g__30572__auto___55203))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__30572__auto___55203){
return (function (seq55158){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55158));
});})(g__30572__auto___55203))
;


var g__30572__auto___55207 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')))){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__30572__auto___55207){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55208 = arguments.length;
var i__4518__auto___55209 = (0);
while(true){
if((i__4518__auto___55209 < len__4517__auto___55208)){
args__4520__auto__.push((arguments[i__4518__auto___55209]));

var G__55210 = (i__4518__auto___55209 + (1));
i__4518__auto___55209 = G__55210;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30572__auto___55207))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___55207){
return (function (args){
return cljs.core.deref.call(null,g__30572__auto___55207);
});})(g__30572__auto___55207))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__30572__auto___55207){
return (function (seq55159){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55159));
});})(g__30572__auto___55207))
;


var g__30572__auto___55211 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')))){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__30572__auto___55211){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55212 = arguments.length;
var i__4518__auto___55213 = (0);
while(true){
if((i__4518__auto___55213 < len__4517__auto___55212)){
args__4520__auto__.push((arguments[i__4518__auto___55213]));

var G__55214 = (i__4518__auto___55213 + (1));
i__4518__auto___55213 = G__55214;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30572__auto___55211))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___55211){
return (function (args){
return cljs.core.deref.call(null,g__30572__auto___55211);
});})(g__30572__auto___55211))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__30572__auto___55211){
return (function (seq55160){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55160));
});})(g__30572__auto___55211))
;


var g__30572__auto___55215 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')))){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__30572__auto___55215){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55216 = arguments.length;
var i__4518__auto___55217 = (0);
while(true){
if((i__4518__auto___55217 < len__4517__auto___55216)){
args__4520__auto__.push((arguments[i__4518__auto___55217]));

var G__55218 = (i__4518__auto___55217 + (1));
i__4518__auto___55217 = G__55218;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30572__auto___55215))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___55215){
return (function (args){
return cljs.core.deref.call(null,g__30572__auto___55215);
});})(g__30572__auto___55215))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__30572__auto___55215){
return (function (seq55161){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55161));
});})(g__30572__auto___55215))
;


var g__30572__auto___55219 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')))){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__30572__auto___55219){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55220 = arguments.length;
var i__4518__auto___55221 = (0);
while(true){
if((i__4518__auto___55221 < len__4517__auto___55220)){
args__4520__auto__.push((arguments[i__4518__auto___55221]));

var G__55222 = (i__4518__auto___55221 + (1));
i__4518__auto___55221 = G__55222;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30572__auto___55219))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___55219){
return (function (args){
return cljs.core.deref.call(null,g__30572__auto___55219);
});})(g__30572__auto___55219))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__30572__auto___55219){
return (function (seq55162){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55162));
});})(g__30572__auto___55219))
;


var g__30572__auto___55223 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')))){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__30572__auto___55223){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55224 = arguments.length;
var i__4518__auto___55225 = (0);
while(true){
if((i__4518__auto___55225 < len__4517__auto___55224)){
args__4520__auto__.push((arguments[i__4518__auto___55225]));

var G__55226 = (i__4518__auto___55225 + (1));
i__4518__auto___55225 = G__55226;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30572__auto___55223))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___55223){
return (function (args){
return cljs.core.deref.call(null,g__30572__auto___55223);
});})(g__30572__auto___55223))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__30572__auto___55223){
return (function (seq55163){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55163));
});})(g__30572__auto___55223))
;


var g__30572__auto___55227 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')))){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__30572__auto___55227){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55228 = arguments.length;
var i__4518__auto___55229 = (0);
while(true){
if((i__4518__auto___55229 < len__4517__auto___55228)){
args__4520__auto__.push((arguments[i__4518__auto___55229]));

var G__55230 = (i__4518__auto___55229 + (1));
i__4518__auto___55229 = G__55230;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30572__auto___55227))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___55227){
return (function (args){
return cljs.core.deref.call(null,g__30572__auto___55227);
});})(g__30572__auto___55227))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__30572__auto___55227){
return (function (seq55164){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55164));
});})(g__30572__auto___55227))
;


var g__30572__auto___55231 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')))){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__30572__auto___55231){
return (function cljs$spec$gen$alpha$string(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55232 = arguments.length;
var i__4518__auto___55233 = (0);
while(true){
if((i__4518__auto___55233 < len__4517__auto___55232)){
args__4520__auto__.push((arguments[i__4518__auto___55233]));

var G__55234 = (i__4518__auto___55233 + (1));
i__4518__auto___55233 = G__55234;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30572__auto___55231))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___55231){
return (function (args){
return cljs.core.deref.call(null,g__30572__auto___55231);
});})(g__30572__auto___55231))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__30572__auto___55231){
return (function (seq55165){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55165));
});})(g__30572__auto___55231))
;


var g__30572__auto___55235 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')))){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__30572__auto___55235){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55236 = arguments.length;
var i__4518__auto___55237 = (0);
while(true){
if((i__4518__auto___55237 < len__4517__auto___55236)){
args__4520__auto__.push((arguments[i__4518__auto___55237]));

var G__55238 = (i__4518__auto___55237 + (1));
i__4518__auto___55237 = G__55238;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30572__auto___55235))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___55235){
return (function (args){
return cljs.core.deref.call(null,g__30572__auto___55235);
});})(g__30572__auto___55235))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__30572__auto___55235){
return (function (seq55166){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55166));
});})(g__30572__auto___55235))
;


var g__30572__auto___55239 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')))){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__30572__auto___55239){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55240 = arguments.length;
var i__4518__auto___55241 = (0);
while(true){
if((i__4518__auto___55241 < len__4517__auto___55240)){
args__4520__auto__.push((arguments[i__4518__auto___55241]));

var G__55242 = (i__4518__auto___55241 + (1));
i__4518__auto___55241 = G__55242;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30572__auto___55239))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___55239){
return (function (args){
return cljs.core.deref.call(null,g__30572__auto___55239);
});})(g__30572__auto___55239))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__30572__auto___55239){
return (function (seq55167){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55167));
});})(g__30572__auto___55239))
;


var g__30572__auto___55243 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')))){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__30572__auto___55243){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55244 = arguments.length;
var i__4518__auto___55245 = (0);
while(true){
if((i__4518__auto___55245 < len__4517__auto___55244)){
args__4520__auto__.push((arguments[i__4518__auto___55245]));

var G__55246 = (i__4518__auto___55245 + (1));
i__4518__auto___55245 = G__55246;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30572__auto___55243))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___55243){
return (function (args){
return cljs.core.deref.call(null,g__30572__auto___55243);
});})(g__30572__auto___55243))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__30572__auto___55243){
return (function (seq55168){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55168));
});})(g__30572__auto___55243))
;


var g__30572__auto___55247 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')))){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__30572__auto___55247){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55248 = arguments.length;
var i__4518__auto___55249 = (0);
while(true){
if((i__4518__auto___55249 < len__4517__auto___55248)){
args__4520__auto__.push((arguments[i__4518__auto___55249]));

var G__55250 = (i__4518__auto___55249 + (1));
i__4518__auto___55249 = G__55250;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30572__auto___55247))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___55247){
return (function (args){
return cljs.core.deref.call(null,g__30572__auto___55247);
});})(g__30572__auto___55247))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__30572__auto___55247){
return (function (seq55169){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55169));
});})(g__30572__auto___55247))
;


var g__30572__auto___55251 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')))){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__30572__auto___55251){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55252 = arguments.length;
var i__4518__auto___55253 = (0);
while(true){
if((i__4518__auto___55253 < len__4517__auto___55252)){
args__4520__auto__.push((arguments[i__4518__auto___55253]));

var G__55254 = (i__4518__auto___55253 + (1));
i__4518__auto___55253 = G__55254;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});})(g__30572__auto___55251))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30572__auto___55251){
return (function (args){
return cljs.core.deref.call(null,g__30572__auto___55251);
});})(g__30572__auto___55251))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__30572__auto___55251){
return (function (seq55170){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55170));
});})(g__30572__auto___55251))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55257 = arguments.length;
var i__4518__auto___55258 = (0);
while(true){
if((i__4518__auto___55258 < len__4517__auto___55257)){
args__4520__auto__.push((arguments[i__4518__auto___55258]));

var G__55259 = (i__4518__auto___55258 + (1));
i__4518__auto___55258 = G__55259;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__55255_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__55255_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq55256){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55256));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.uri_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__55261_SHARP_){
return (new Date(p1__55261_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__55260_SHARP_){
return (new goog.Uri(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__55260_SHARP_),".com"].join('')));
});})(simple))
,cljs.spec.gen.alpha.uuid.call(null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1574224104906
