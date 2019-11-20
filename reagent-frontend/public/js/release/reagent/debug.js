// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__34053__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__34053 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34054__i = 0, G__34054__a = new Array(arguments.length -  0);
while (G__34054__i < G__34054__a.length) {G__34054__a[G__34054__i] = arguments[G__34054__i + 0]; ++G__34054__i;}
  args = new cljs.core.IndexedSeq(G__34054__a,0,null);
} 
return G__34053__delegate.call(this,args);};
G__34053.cljs$lang$maxFixedArity = 0;
G__34053.cljs$lang$applyTo = (function (arglist__34055){
var args = cljs.core.seq(arglist__34055);
return G__34053__delegate(args);
});
G__34053.cljs$core$IFn$_invoke$arity$variadic = G__34053__delegate;
return G__34053;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__34056__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__34056 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34057__i = 0, G__34057__a = new Array(arguments.length -  0);
while (G__34057__i < G__34057__a.length) {G__34057__a[G__34057__i] = arguments[G__34057__i + 0]; ++G__34057__i;}
  args = new cljs.core.IndexedSeq(G__34057__a,0,null);
} 
return G__34056__delegate.call(this,args);};
G__34056.cljs$lang$maxFixedArity = 0;
G__34056.cljs$lang$applyTo = (function (arglist__34058){
var args = cljs.core.seq(arglist__34058);
return G__34056__delegate(args);
});
G__34056.cljs$core$IFn$_invoke$arity$variadic = G__34056__delegate;
return G__34056;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
