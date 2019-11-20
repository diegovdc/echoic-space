// Compiled by ClojureScript 1.10.312 {}
goog.provide('logger.core');
goog.require('cljs.core');
/**
 * Example: (log :some-symbol some-func return-value)
 */
logger.core.log = (function logger$core$log(var_args){
var args__4520__auto__ = [];
var len__4517__auto___54867 = arguments.length;
var i__4518__auto___54868 = (0);
while(true){
if((i__4518__auto___54868 < len__4517__auto___54867)){
args__4520__auto__.push((arguments[i__4518__auto___54868]));

var G__54869 = (i__4518__auto___54868 + (1));
i__4518__auto___54868 = G__54869;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return logger.core.log.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

logger.core.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var off = cljs.core.some.call(null,(function (p1__54865_SHARP_){
return cljs.core._EQ_.call(null,p1__54865_SHARP_,new cljs.core.Keyword(null,"mute","mute",1151223646));
}),args);
var val = cljs.core.last.call(null,args);
if(cljs.core.truth_((function (){var or__3936__auto__ = off;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.not.call(null,goog.DEBUG);
}
})())){
} else {
var msgs_54870 = cljs.core.butlast.call(null,args);
cljs.core.apply.call(null,console.log,cljs.core.concat.call(null,cljs.core.mapv.call(null,((function (msgs_54870,off,val){
return (function (msg){
if(cljs.core.fn_QMARK_.call(null,msg)){
return msg.call(null,val);
} else {
return msg;
}
});})(msgs_54870,off,val))
,msgs_54870),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [val], null)));
}

return val;
});

logger.core.log.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
logger.core.log.cljs$lang$applyTo = (function (seq54866){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54866));
});


//# sourceMappingURL=core.js.map?rel=1574224103749
