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
var G__28981__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__28981 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28982__i = 0, G__28982__a = new Array(arguments.length -  0);
while (G__28982__i < G__28982__a.length) {G__28982__a[G__28982__i] = arguments[G__28982__i + 0]; ++G__28982__i;}
  args = new cljs.core.IndexedSeq(G__28982__a,0,null);
} 
return G__28981__delegate.call(this,args);};
G__28981.cljs$lang$maxFixedArity = 0;
G__28981.cljs$lang$applyTo = (function (arglist__28983){
var args = cljs.core.seq(arglist__28983);
return G__28981__delegate(args);
});
G__28981.cljs$core$IFn$_invoke$arity$variadic = G__28981__delegate;
return G__28981;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__28984__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__28984 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28985__i = 0, G__28985__a = new Array(arguments.length -  0);
while (G__28985__i < G__28985__a.length) {G__28985__a[G__28985__i] = arguments[G__28985__i + 0]; ++G__28985__i;}
  args = new cljs.core.IndexedSeq(G__28985__a,0,null);
} 
return G__28984__delegate.call(this,args);};
G__28984.cljs$lang$maxFixedArity = 0;
G__28984.cljs$lang$applyTo = (function (arglist__28986){
var args = cljs.core.seq(arglist__28986);
return G__28984__delegate(args);
});
G__28984.cljs$core$IFn$_invoke$arity$variadic = G__28984__delegate;
return G__28984;
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
