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
var G__54507__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__54507 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54508__i = 0, G__54508__a = new Array(arguments.length -  0);
while (G__54508__i < G__54508__a.length) {G__54508__a[G__54508__i] = arguments[G__54508__i + 0]; ++G__54508__i;}
  args = new cljs.core.IndexedSeq(G__54508__a,0,null);
} 
return G__54507__delegate.call(this,args);};
G__54507.cljs$lang$maxFixedArity = 0;
G__54507.cljs$lang$applyTo = (function (arglist__54509){
var args = cljs.core.seq(arglist__54509);
return G__54507__delegate(args);
});
G__54507.cljs$core$IFn$_invoke$arity$variadic = G__54507__delegate;
return G__54507;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__54510__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__54510 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54511__i = 0, G__54511__a = new Array(arguments.length -  0);
while (G__54511__i < G__54511__a.length) {G__54511__a[G__54511__i] = arguments[G__54511__i + 0]; ++G__54511__i;}
  args = new cljs.core.IndexedSeq(G__54511__a,0,null);
} 
return G__54510__delegate.call(this,args);};
G__54510.cljs$lang$maxFixedArity = 0;
G__54510.cljs$lang$applyTo = (function (arglist__54512){
var args = cljs.core.seq(arglist__54512);
return G__54510__delegate(args);
});
G__54510.cljs$core$IFn$_invoke$arity$variadic = G__54510__delegate;
return G__54510;
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

//# sourceMappingURL=debug.js.map?rel=1574224102831
