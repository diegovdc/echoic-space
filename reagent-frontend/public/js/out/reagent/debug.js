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
var G__34858__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__34858 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34859__i = 0, G__34859__a = new Array(arguments.length -  0);
while (G__34859__i < G__34859__a.length) {G__34859__a[G__34859__i] = arguments[G__34859__i + 0]; ++G__34859__i;}
  args = new cljs.core.IndexedSeq(G__34859__a,0,null);
} 
return G__34858__delegate.call(this,args);};
G__34858.cljs$lang$maxFixedArity = 0;
G__34858.cljs$lang$applyTo = (function (arglist__34860){
var args = cljs.core.seq(arglist__34860);
return G__34858__delegate(args);
});
G__34858.cljs$core$IFn$_invoke$arity$variadic = G__34858__delegate;
return G__34858;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__34861__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__34861 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34862__i = 0, G__34862__a = new Array(arguments.length -  0);
while (G__34862__i < G__34862__a.length) {G__34862__a[G__34862__i] = arguments[G__34862__i + 0]; ++G__34862__i;}
  args = new cljs.core.IndexedSeq(G__34862__a,0,null);
} 
return G__34861__delegate.call(this,args);};
G__34861.cljs$lang$maxFixedArity = 0;
G__34861.cljs$lang$applyTo = (function (arglist__34863){
var args = cljs.core.seq(arglist__34863);
return G__34861__delegate(args);
});
G__34861.cljs$core$IFn$_invoke$arity$variadic = G__34861__delegate;
return G__34861;
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

//# sourceMappingURL=debug.js.map?rel=1553576535517
