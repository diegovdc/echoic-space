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
var G__40315__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__40315 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40316__i = 0, G__40316__a = new Array(arguments.length -  0);
while (G__40316__i < G__40316__a.length) {G__40316__a[G__40316__i] = arguments[G__40316__i + 0]; ++G__40316__i;}
  args = new cljs.core.IndexedSeq(G__40316__a,0,null);
} 
return G__40315__delegate.call(this,args);};
G__40315.cljs$lang$maxFixedArity = 0;
G__40315.cljs$lang$applyTo = (function (arglist__40317){
var args = cljs.core.seq(arglist__40317);
return G__40315__delegate(args);
});
G__40315.cljs$core$IFn$_invoke$arity$variadic = G__40315__delegate;
return G__40315;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__40318__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__40318 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40319__i = 0, G__40319__a = new Array(arguments.length -  0);
while (G__40319__i < G__40319__a.length) {G__40319__a[G__40319__i] = arguments[G__40319__i + 0]; ++G__40319__i;}
  args = new cljs.core.IndexedSeq(G__40319__a,0,null);
} 
return G__40318__delegate.call(this,args);};
G__40318.cljs$lang$maxFixedArity = 0;
G__40318.cljs$lang$applyTo = (function (arglist__40320){
var args = cljs.core.seq(arglist__40320);
return G__40318__delegate(args);
});
G__40318.cljs$core$IFn$_invoke$arity$variadic = G__40318__delegate;
return G__40318;
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

//# sourceMappingURL=debug.js.map?rel=1553997019840
