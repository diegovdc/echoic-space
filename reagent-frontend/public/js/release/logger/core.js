// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('logger.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Example: (log :some-symbol some-func return-value)
 */
logger.core.log = (function logger$core$log(var_args){
var args__4520__auto__ = [];
var len__4517__auto___33664 = arguments.length;
var i__4518__auto___33665 = (0);
while(true){
if((i__4518__auto___33665 < len__4517__auto___33664)){
args__4520__auto__.push((arguments[i__4518__auto___33665]));

var G__33666 = (i__4518__auto___33665 + (1));
i__4518__auto___33665 = G__33666;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return logger.core.log.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

logger.core.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var off = cljs.core.some((function (p1__33662_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__33662_SHARP_,cljs.core.cst$kw$mute);
}),args);
var val = cljs.core.last(args);
if(cljs.core.truth_((function (){var or__3936__auto__ = off;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.not(goog.DEBUG);
}
})())){
} else {
var msgs_33667 = cljs.core.butlast(args);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(console.log,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (msgs_33667,off,val){
return (function (msg){
if(cljs.core.fn_QMARK_(msg)){
return (msg.cljs$core$IFn$_invoke$arity$1 ? msg.cljs$core$IFn$_invoke$arity$1(val) : msg.call(null,val));
} else {
return msg;
}
});})(msgs_33667,off,val))
,msgs_33667),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [val], null)));
}

return val;
});

logger.core.log.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
logger.core.log.cljs$lang$applyTo = (function (seq33663){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33663));
});

