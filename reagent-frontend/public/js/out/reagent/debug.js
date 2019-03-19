// Compiled by ClojureScript 1.10.312 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__44989__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__44989 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44990__i = 0, G__44990__a = new Array(arguments.length -  0);
while (G__44990__i < G__44990__a.length) {G__44990__a[G__44990__i] = arguments[G__44990__i + 0]; ++G__44990__i;}
  args = new cljs.core.IndexedSeq(G__44990__a,0,null);
} 
return G__44989__delegate.call(this,args);};
G__44989.cljs$lang$maxFixedArity = 0;
G__44989.cljs$lang$applyTo = (function (arglist__44991){
var args = cljs.core.seq(arglist__44991);
return G__44989__delegate(args);
});
G__44989.cljs$core$IFn$_invoke$arity$variadic = G__44989__delegate;
return G__44989;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__44992__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__44992 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44993__i = 0, G__44993__a = new Array(arguments.length -  0);
while (G__44993__i < G__44993__a.length) {G__44993__a[G__44993__i] = arguments[G__44993__i + 0]; ++G__44993__i;}
  args = new cljs.core.IndexedSeq(G__44993__a,0,null);
} 
return G__44992__delegate.call(this,args);};
G__44992.cljs$lang$maxFixedArity = 0;
G__44992.cljs$lang$applyTo = (function (arglist__44994){
var args = cljs.core.seq(arglist__44994);
return G__44992__delegate(args);
});
G__44992.cljs$core$IFn$_invoke$arity$variadic = G__44992__delegate;
return G__44992;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1552956572206
