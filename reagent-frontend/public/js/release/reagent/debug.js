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
var G__32363__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__32363 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32364__i = 0, G__32364__a = new Array(arguments.length -  0);
while (G__32364__i < G__32364__a.length) {G__32364__a[G__32364__i] = arguments[G__32364__i + 0]; ++G__32364__i;}
  args = new cljs.core.IndexedSeq(G__32364__a,0,null);
} 
return G__32363__delegate.call(this,args);};
G__32363.cljs$lang$maxFixedArity = 0;
G__32363.cljs$lang$applyTo = (function (arglist__32365){
var args = cljs.core.seq(arglist__32365);
return G__32363__delegate(args);
});
G__32363.cljs$core$IFn$_invoke$arity$variadic = G__32363__delegate;
return G__32363;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__32366__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__32366 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32367__i = 0, G__32367__a = new Array(arguments.length -  0);
while (G__32367__i < G__32367__a.length) {G__32367__a[G__32367__i] = arguments[G__32367__i + 0]; ++G__32367__i;}
  args = new cljs.core.IndexedSeq(G__32367__a,0,null);
} 
return G__32366__delegate.call(this,args);};
G__32366.cljs$lang$maxFixedArity = 0;
G__32366.cljs$lang$applyTo = (function (arglist__32368){
var args = cljs.core.seq(arglist__32368);
return G__32366__delegate(args);
});
G__32366.cljs$core$IFn$_invoke$arity$variadic = G__32366__delegate;
return G__32366;
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
