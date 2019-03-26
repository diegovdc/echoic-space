// Compiled by ClojureScript 1.10.312 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__39712 = arguments.length;
switch (G__39712) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39713 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39713 = (function (f,blockable,meta39714){
this.f = f;
this.blockable = blockable;
this.meta39714 = meta39714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39715,meta39714__$1){
var self__ = this;
var _39715__$1 = this;
return (new cljs.core.async.t_cljs$core$async39713(self__.f,self__.blockable,meta39714__$1));
});

cljs.core.async.t_cljs$core$async39713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39715){
var self__ = this;
var _39715__$1 = this;
return self__.meta39714;
});

cljs.core.async.t_cljs$core$async39713.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39713.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39713.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async39713.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async39713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39714","meta39714",-616863525,null)], null);
});

cljs.core.async.t_cljs$core$async39713.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39713";

cljs.core.async.t_cljs$core$async39713.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async39713");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39713.
 */
cljs.core.async.__GT_t_cljs$core$async39713 = (function cljs$core$async$__GT_t_cljs$core$async39713(f__$1,blockable__$1,meta39714){
return (new cljs.core.async.t_cljs$core$async39713(f__$1,blockable__$1,meta39714));
});

}

return (new cljs.core.async.t_cljs$core$async39713(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__39719 = arguments.length;
switch (G__39719) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__39722 = arguments.length;
switch (G__39722) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__39725 = arguments.length;
switch (G__39725) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_39727 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_39727);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_39727,ret){
return (function (){
return fn1.call(null,val_39727);
});})(val_39727,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__39729 = arguments.length;
switch (G__39729) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4394__auto___39731 = n;
var x_39732 = (0);
while(true){
if((x_39732 < n__4394__auto___39731)){
(a[x_39732] = (0));

var G__39733 = (x_39732 + (1));
x_39732 = G__39733;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__39734 = (i + (1));
i = G__39734;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39735 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39735 = (function (flag,meta39736){
this.flag = flag;
this.meta39736 = meta39736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39737,meta39736__$1){
var self__ = this;
var _39737__$1 = this;
return (new cljs.core.async.t_cljs$core$async39735(self__.flag,meta39736__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async39735.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39737){
var self__ = this;
var _39737__$1 = this;
return self__.meta39736;
});})(flag))
;

cljs.core.async.t_cljs$core$async39735.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39735.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async39735.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39735.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39735.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39736","meta39736",398533912,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async39735.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39735.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39735";

cljs.core.async.t_cljs$core$async39735.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async39735");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39735.
 */
cljs.core.async.__GT_t_cljs$core$async39735 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39735(flag__$1,meta39736){
return (new cljs.core.async.t_cljs$core$async39735(flag__$1,meta39736));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async39735(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39738 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39738 = (function (flag,cb,meta39739){
this.flag = flag;
this.cb = cb;
this.meta39739 = meta39739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39740,meta39739__$1){
var self__ = this;
var _39740__$1 = this;
return (new cljs.core.async.t_cljs$core$async39738(self__.flag,self__.cb,meta39739__$1));
});

cljs.core.async.t_cljs$core$async39738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39740){
var self__ = this;
var _39740__$1 = this;
return self__.meta39739;
});

cljs.core.async.t_cljs$core$async39738.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39738.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async39738.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39738.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async39738.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39739","meta39739",-1712060706,null)], null);
});

cljs.core.async.t_cljs$core$async39738.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39738";

cljs.core.async.t_cljs$core$async39738.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async39738");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39738.
 */
cljs.core.async.__GT_t_cljs$core$async39738 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39738(flag__$1,cb__$1,meta39739){
return (new cljs.core.async.t_cljs$core$async39738(flag__$1,cb__$1,meta39739));
});

}

return (new cljs.core.async.t_cljs$core$async39738(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39741_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39741_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39742_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39742_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3936__auto__ = wport;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return port;
}
})()], null));
} else {
var G__39743 = (i + (1));
i = G__39743;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3936__auto__ = ret;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3925__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3925__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4520__auto__ = [];
var len__4517__auto___39749 = arguments.length;
var i__4518__auto___39750 = (0);
while(true){
if((i__4518__auto___39750 < len__4517__auto___39749)){
args__4520__auto__.push((arguments[i__4518__auto___39750]));

var G__39751 = (i__4518__auto___39750 + (1));
i__4518__auto___39750 = G__39751;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39746){
var map__39747 = p__39746;
var map__39747__$1 = ((((!((map__39747 == null)))?(((((map__39747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39747):map__39747);
var opts = map__39747__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39744){
var G__39745 = cljs.core.first.call(null,seq39744);
var seq39744__$1 = cljs.core.next.call(null,seq39744);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39745,seq39744__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__39753 = arguments.length;
switch (G__39753) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__39652__auto___39799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39652__auto___39799){
return (function (){
var f__39653__auto__ = (function (){var switch__39562__auto__ = ((function (c__39652__auto___39799){
return (function (state_39777){
var state_val_39778 = (state_39777[(1)]);
if((state_val_39778 === (7))){
var inst_39773 = (state_39777[(2)]);
var state_39777__$1 = state_39777;
var statearr_39779_39800 = state_39777__$1;
(statearr_39779_39800[(2)] = inst_39773);

(statearr_39779_39800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39778 === (1))){
var state_39777__$1 = state_39777;
var statearr_39780_39801 = state_39777__$1;
(statearr_39780_39801[(2)] = null);

(statearr_39780_39801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39778 === (4))){
var inst_39756 = (state_39777[(7)]);
var inst_39756__$1 = (state_39777[(2)]);
var inst_39757 = (inst_39756__$1 == null);
var state_39777__$1 = (function (){var statearr_39781 = state_39777;
(statearr_39781[(7)] = inst_39756__$1);

return statearr_39781;
})();
if(cljs.core.truth_(inst_39757)){
var statearr_39782_39802 = state_39777__$1;
(statearr_39782_39802[(1)] = (5));

} else {
var statearr_39783_39803 = state_39777__$1;
(statearr_39783_39803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39778 === (13))){
var state_39777__$1 = state_39777;
var statearr_39784_39804 = state_39777__$1;
(statearr_39784_39804[(2)] = null);

(statearr_39784_39804[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39778 === (6))){
var inst_39756 = (state_39777[(7)]);
var state_39777__$1 = state_39777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39777__$1,(11),to,inst_39756);
} else {
if((state_val_39778 === (3))){
var inst_39775 = (state_39777[(2)]);
var state_39777__$1 = state_39777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39777__$1,inst_39775);
} else {
if((state_val_39778 === (12))){
var state_39777__$1 = state_39777;
var statearr_39785_39805 = state_39777__$1;
(statearr_39785_39805[(2)] = null);

(statearr_39785_39805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39778 === (2))){
var state_39777__$1 = state_39777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39777__$1,(4),from);
} else {
if((state_val_39778 === (11))){
var inst_39766 = (state_39777[(2)]);
var state_39777__$1 = state_39777;
if(cljs.core.truth_(inst_39766)){
var statearr_39786_39806 = state_39777__$1;
(statearr_39786_39806[(1)] = (12));

} else {
var statearr_39787_39807 = state_39777__$1;
(statearr_39787_39807[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39778 === (9))){
var state_39777__$1 = state_39777;
var statearr_39788_39808 = state_39777__$1;
(statearr_39788_39808[(2)] = null);

(statearr_39788_39808[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39778 === (5))){
var state_39777__$1 = state_39777;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39789_39809 = state_39777__$1;
(statearr_39789_39809[(1)] = (8));

} else {
var statearr_39790_39810 = state_39777__$1;
(statearr_39790_39810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39778 === (14))){
var inst_39771 = (state_39777[(2)]);
var state_39777__$1 = state_39777;
var statearr_39791_39811 = state_39777__$1;
(statearr_39791_39811[(2)] = inst_39771);

(statearr_39791_39811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39778 === (10))){
var inst_39763 = (state_39777[(2)]);
var state_39777__$1 = state_39777;
var statearr_39792_39812 = state_39777__$1;
(statearr_39792_39812[(2)] = inst_39763);

(statearr_39792_39812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39778 === (8))){
var inst_39760 = cljs.core.async.close_BANG_.call(null,to);
var state_39777__$1 = state_39777;
var statearr_39793_39813 = state_39777__$1;
(statearr_39793_39813[(2)] = inst_39760);

(statearr_39793_39813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39652__auto___39799))
;
return ((function (switch__39562__auto__,c__39652__auto___39799){
return (function() {
var cljs$core$async$state_machine__39563__auto__ = null;
var cljs$core$async$state_machine__39563__auto____0 = (function (){
var statearr_39794 = [null,null,null,null,null,null,null,null];
(statearr_39794[(0)] = cljs$core$async$state_machine__39563__auto__);

(statearr_39794[(1)] = (1));

return statearr_39794;
});
var cljs$core$async$state_machine__39563__auto____1 = (function (state_39777){
while(true){
var ret_value__39564__auto__ = (function (){try{while(true){
var result__39565__auto__ = switch__39562__auto__.call(null,state_39777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39565__auto__;
}
break;
}
}catch (e39795){if((e39795 instanceof Object)){
var ex__39566__auto__ = e39795;
var statearr_39796_39814 = state_39777;
(statearr_39796_39814[(5)] = ex__39566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39815 = state_39777;
state_39777 = G__39815;
continue;
} else {
return ret_value__39564__auto__;
}
break;
}
});
cljs$core$async$state_machine__39563__auto__ = function(state_39777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39563__auto____1.call(this,state_39777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39563__auto____0;
cljs$core$async$state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39563__auto____1;
return cljs$core$async$state_machine__39563__auto__;
})()
;})(switch__39562__auto__,c__39652__auto___39799))
})();
var state__39654__auto__ = (function (){var statearr_39797 = f__39653__auto__.call(null);
(statearr_39797[(6)] = c__39652__auto___39799);

return statearr_39797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39654__auto__);
});})(c__39652__auto___39799))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__39816){
var vec__39817 = p__39816;
var v = cljs.core.nth.call(null,vec__39817,(0),null);
var p = cljs.core.nth.call(null,vec__39817,(1),null);
var job = vec__39817;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__39652__auto___39988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39652__auto___39988,res,vec__39817,v,p,job,jobs,results){
return (function (){
var f__39653__auto__ = (function (){var switch__39562__auto__ = ((function (c__39652__auto___39988,res,vec__39817,v,p,job,jobs,results){
return (function (state_39824){
var state_val_39825 = (state_39824[(1)]);
if((state_val_39825 === (1))){
var state_39824__$1 = state_39824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39824__$1,(2),res,v);
} else {
if((state_val_39825 === (2))){
var inst_39821 = (state_39824[(2)]);
var inst_39822 = cljs.core.async.close_BANG_.call(null,res);
var state_39824__$1 = (function (){var statearr_39826 = state_39824;
(statearr_39826[(7)] = inst_39821);

return statearr_39826;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39824__$1,inst_39822);
} else {
return null;
}
}
});})(c__39652__auto___39988,res,vec__39817,v,p,job,jobs,results))
;
return ((function (switch__39562__auto__,c__39652__auto___39988,res,vec__39817,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39563__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39563__auto____0 = (function (){
var statearr_39827 = [null,null,null,null,null,null,null,null];
(statearr_39827[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39563__auto__);

(statearr_39827[(1)] = (1));

return statearr_39827;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39563__auto____1 = (function (state_39824){
while(true){
var ret_value__39564__auto__ = (function (){try{while(true){
var result__39565__auto__ = switch__39562__auto__.call(null,state_39824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39565__auto__;
}
break;
}
}catch (e39828){if((e39828 instanceof Object)){
var ex__39566__auto__ = e39828;
var statearr_39829_39989 = state_39824;
(statearr_39829_39989[(5)] = ex__39566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39990 = state_39824;
state_39824 = G__39990;
continue;
} else {
return ret_value__39564__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39563__auto__ = function(state_39824){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39563__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39563__auto____1.call(this,state_39824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39563__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39563__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39563__auto__;
})()
;})(switch__39562__auto__,c__39652__auto___39988,res,vec__39817,v,p,job,jobs,results))
})();
var state__39654__auto__ = (function (){var statearr_39830 = f__39653__auto__.call(null);
(statearr_39830[(6)] = c__39652__auto___39988);

return statearr_39830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39654__auto__);
});})(c__39652__auto___39988,res,vec__39817,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__39831){
var vec__39832 = p__39831;
var v = cljs.core.nth.call(null,vec__39832,(0),null);
var p = cljs.core.nth.call(null,vec__39832,(1),null);
var job = vec__39832;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4394__auto___39991 = n;
var __39992 = (0);
while(true){
if((__39992 < n__4394__auto___39991)){
var G__39835_39993 = type;
var G__39835_39994__$1 = (((G__39835_39993 instanceof cljs.core.Keyword))?G__39835_39993.fqn:null);
switch (G__39835_39994__$1) {
case "compute":
var c__39652__auto___39996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39992,c__39652__auto___39996,G__39835_39993,G__39835_39994__$1,n__4394__auto___39991,jobs,results,process,async){
return (function (){
var f__39653__auto__ = (function (){var switch__39562__auto__ = ((function (__39992,c__39652__auto___39996,G__39835_39993,G__39835_39994__$1,n__4394__auto___39991,jobs,results,process,async){
return (function (state_39848){
var state_val_39849 = (state_39848[(1)]);
if((state_val_39849 === (1))){
var state_39848__$1 = state_39848;
var statearr_39850_39997 = state_39848__$1;
(statearr_39850_39997[(2)] = null);

(statearr_39850_39997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39849 === (2))){
var state_39848__$1 = state_39848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39848__$1,(4),jobs);
} else {
if((state_val_39849 === (3))){
var inst_39846 = (state_39848[(2)]);
var state_39848__$1 = state_39848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39848__$1,inst_39846);
} else {
if((state_val_39849 === (4))){
var inst_39838 = (state_39848[(2)]);
var inst_39839 = process.call(null,inst_39838);
var state_39848__$1 = state_39848;
if(cljs.core.truth_(inst_39839)){
var statearr_39851_39998 = state_39848__$1;
(statearr_39851_39998[(1)] = (5));

} else {
var statearr_39852_39999 = state_39848__$1;
(statearr_39852_39999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39849 === (5))){
var state_39848__$1 = state_39848;
var statearr_39853_40000 = state_39848__$1;
(statearr_39853_40000[(2)] = null);

(statearr_39853_40000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39849 === (6))){
var state_39848__$1 = state_39848;
var statearr_39854_40001 = state_39848__$1;
(statearr_39854_40001[(2)] = null);

(statearr_39854_40001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39849 === (7))){
var inst_39844 = (state_39848[(2)]);
var state_39848__$1 = state_39848;
var statearr_39855_40002 = state_39848__$1;
(statearr_39855_40002[(2)] = inst_39844);

(statearr_39855_40002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__39992,c__39652__auto___39996,G__39835_39993,G__39835_39994__$1,n__4394__auto___39991,jobs,results,process,async))
;
return ((function (__39992,switch__39562__auto__,c__39652__auto___39996,G__39835_39993,G__39835_39994__$1,n__4394__auto___39991,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39563__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39563__auto____0 = (function (){
var statearr_39856 = [null,null,null,null,null,null,null];
(statearr_39856[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39563__auto__);

(statearr_39856[(1)] = (1));

return statearr_39856;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39563__auto____1 = (function (state_39848){
while(true){
var ret_value__39564__auto__ = (function (){try{while(true){
var result__39565__auto__ = switch__39562__auto__.call(null,state_39848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39565__auto__;
}
break;
}
}catch (e39857){if((e39857 instanceof Object)){
var ex__39566__auto__ = e39857;
var statearr_39858_40003 = state_39848;
(statearr_39858_40003[(5)] = ex__39566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40004 = state_39848;
state_39848 = G__40004;
continue;
} else {
return ret_value__39564__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39563__auto__ = function(state_39848){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39563__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39563__auto____1.call(this,state_39848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39563__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39563__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39563__auto__;
})()
;})(__39992,switch__39562__auto__,c__39652__auto___39996,G__39835_39993,G__39835_39994__$1,n__4394__auto___39991,jobs,results,process,async))
})();
var state__39654__auto__ = (function (){var statearr_39859 = f__39653__auto__.call(null);
(statearr_39859[(6)] = c__39652__auto___39996);

return statearr_39859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39654__auto__);
});})(__39992,c__39652__auto___39996,G__39835_39993,G__39835_39994__$1,n__4394__auto___39991,jobs,results,process,async))
);


break;
case "async":
var c__39652__auto___40005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39992,c__39652__auto___40005,G__39835_39993,G__39835_39994__$1,n__4394__auto___39991,jobs,results,process,async){
return (function (){
var f__39653__auto__ = (function (){var switch__39562__auto__ = ((function (__39992,c__39652__auto___40005,G__39835_39993,G__39835_39994__$1,n__4394__auto___39991,jobs,results,process,async){
return (function (state_39872){
var state_val_39873 = (state_39872[(1)]);
if((state_val_39873 === (1))){
var state_39872__$1 = state_39872;
var statearr_39874_40006 = state_39872__$1;
(statearr_39874_40006[(2)] = null);

(statearr_39874_40006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39873 === (2))){
var state_39872__$1 = state_39872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39872__$1,(4),jobs);
} else {
if((state_val_39873 === (3))){
var inst_39870 = (state_39872[(2)]);
var state_39872__$1 = state_39872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39872__$1,inst_39870);
} else {
if((state_val_39873 === (4))){
var inst_39862 = (state_39872[(2)]);
var inst_39863 = async.call(null,inst_39862);
var state_39872__$1 = state_39872;
if(cljs.core.truth_(inst_39863)){
var statearr_39875_40007 = state_39872__$1;
(statearr_39875_40007[(1)] = (5));

} else {
var statearr_39876_40008 = state_39872__$1;
(statearr_39876_40008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39873 === (5))){
var state_39872__$1 = state_39872;
var statearr_39877_40009 = state_39872__$1;
(statearr_39877_40009[(2)] = null);

(statearr_39877_40009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39873 === (6))){
var state_39872__$1 = state_39872;
var statearr_39878_40010 = state_39872__$1;
(statearr_39878_40010[(2)] = null);

(statearr_39878_40010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39873 === (7))){
var inst_39868 = (state_39872[(2)]);
var state_39872__$1 = state_39872;
var statearr_39879_40011 = state_39872__$1;
(statearr_39879_40011[(2)] = inst_39868);

(statearr_39879_40011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__39992,c__39652__auto___40005,G__39835_39993,G__39835_39994__$1,n__4394__auto___39991,jobs,results,process,async))
;
return ((function (__39992,switch__39562__auto__,c__39652__auto___40005,G__39835_39993,G__39835_39994__$1,n__4394__auto___39991,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39563__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39563__auto____0 = (function (){
var statearr_39880 = [null,null,null,null,null,null,null];
(statearr_39880[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39563__auto__);

(statearr_39880[(1)] = (1));

return statearr_39880;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39563__auto____1 = (function (state_39872){
while(true){
var ret_value__39564__auto__ = (function (){try{while(true){
var result__39565__auto__ = switch__39562__auto__.call(null,state_39872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39565__auto__;
}
break;
}
}catch (e39881){if((e39881 instanceof Object)){
var ex__39566__auto__ = e39881;
var statearr_39882_40012 = state_39872;
(statearr_39882_40012[(5)] = ex__39566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40013 = state_39872;
state_39872 = G__40013;
continue;
} else {
return ret_value__39564__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39563__auto__ = function(state_39872){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39563__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39563__auto____1.call(this,state_39872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39563__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39563__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39563__auto__;
})()
;})(__39992,switch__39562__auto__,c__39652__auto___40005,G__39835_39993,G__39835_39994__$1,n__4394__auto___39991,jobs,results,process,async))
})();
var state__39654__auto__ = (function (){var statearr_39883 = f__39653__auto__.call(null);
(statearr_39883[(6)] = c__39652__auto___40005);

return statearr_39883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39654__auto__);
});})(__39992,c__39652__auto___40005,G__39835_39993,G__39835_39994__$1,n__4394__auto___39991,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39835_39994__$1)].join('')));

}

var G__40014 = (__39992 + (1));
__39992 = G__40014;
continue;
} else {
}
break;
}

var c__39652__auto___40015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39652__auto___40015,jobs,results,process,async){
return (function (){
var f__39653__auto__ = (function (){var switch__39562__auto__ = ((function (c__39652__auto___40015,jobs,results,process,async){
return (function (state_39905){
var state_val_39906 = (state_39905[(1)]);
if((state_val_39906 === (1))){
var state_39905__$1 = state_39905;
var statearr_39907_40016 = state_39905__$1;
(statearr_39907_40016[(2)] = null);

(statearr_39907_40016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39906 === (2))){
var state_39905__$1 = state_39905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39905__$1,(4),from);
} else {
if((state_val_39906 === (3))){
var inst_39903 = (state_39905[(2)]);
var state_39905__$1 = state_39905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39905__$1,inst_39903);
} else {
if((state_val_39906 === (4))){
var inst_39886 = (state_39905[(7)]);
var inst_39886__$1 = (state_39905[(2)]);
var inst_39887 = (inst_39886__$1 == null);
var state_39905__$1 = (function (){var statearr_39908 = state_39905;
(statearr_39908[(7)] = inst_39886__$1);

return statearr_39908;
})();
if(cljs.core.truth_(inst_39887)){
var statearr_39909_40017 = state_39905__$1;
(statearr_39909_40017[(1)] = (5));

} else {
var statearr_39910_40018 = state_39905__$1;
(statearr_39910_40018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39906 === (5))){
var inst_39889 = cljs.core.async.close_BANG_.call(null,jobs);
var state_39905__$1 = state_39905;
var statearr_39911_40019 = state_39905__$1;
(statearr_39911_40019[(2)] = inst_39889);

(statearr_39911_40019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39906 === (6))){
var inst_39891 = (state_39905[(8)]);
var inst_39886 = (state_39905[(7)]);
var inst_39891__$1 = cljs.core.async.chan.call(null,(1));
var inst_39892 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39893 = [inst_39886,inst_39891__$1];
var inst_39894 = (new cljs.core.PersistentVector(null,2,(5),inst_39892,inst_39893,null));
var state_39905__$1 = (function (){var statearr_39912 = state_39905;
(statearr_39912[(8)] = inst_39891__$1);

return statearr_39912;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39905__$1,(8),jobs,inst_39894);
} else {
if((state_val_39906 === (7))){
var inst_39901 = (state_39905[(2)]);
var state_39905__$1 = state_39905;
var statearr_39913_40020 = state_39905__$1;
(statearr_39913_40020[(2)] = inst_39901);

(statearr_39913_40020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39906 === (8))){
var inst_39891 = (state_39905[(8)]);
var inst_39896 = (state_39905[(2)]);
var state_39905__$1 = (function (){var statearr_39914 = state_39905;
(statearr_39914[(9)] = inst_39896);

return statearr_39914;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39905__$1,(9),results,inst_39891);
} else {
if((state_val_39906 === (9))){
var inst_39898 = (state_39905[(2)]);
var state_39905__$1 = (function (){var statearr_39915 = state_39905;
(statearr_39915[(10)] = inst_39898);

return statearr_39915;
})();
var statearr_39916_40021 = state_39905__$1;
(statearr_39916_40021[(2)] = null);

(statearr_39916_40021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__39652__auto___40015,jobs,results,process,async))
;
return ((function (switch__39562__auto__,c__39652__auto___40015,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39563__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39563__auto____0 = (function (){
var statearr_39917 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39917[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39563__auto__);

(statearr_39917[(1)] = (1));

return statearr_39917;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39563__auto____1 = (function (state_39905){
while(true){
var ret_value__39564__auto__ = (function (){try{while(true){
var result__39565__auto__ = switch__39562__auto__.call(null,state_39905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39565__auto__;
}
break;
}
}catch (e39918){if((e39918 instanceof Object)){
var ex__39566__auto__ = e39918;
var statearr_39919_40022 = state_39905;
(statearr_39919_40022[(5)] = ex__39566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40023 = state_39905;
state_39905 = G__40023;
continue;
} else {
return ret_value__39564__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39563__auto__ = function(state_39905){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39563__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39563__auto____1.call(this,state_39905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39563__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39563__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39563__auto__;
})()
;})(switch__39562__auto__,c__39652__auto___40015,jobs,results,process,async))
})();
var state__39654__auto__ = (function (){var statearr_39920 = f__39653__auto__.call(null);
(statearr_39920[(6)] = c__39652__auto___40015);

return statearr_39920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39654__auto__);
});})(c__39652__auto___40015,jobs,results,process,async))
);


var c__39652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39652__auto__,jobs,results,process,async){
return (function (){
var f__39653__auto__ = (function (){var switch__39562__auto__ = ((function (c__39652__auto__,jobs,results,process,async){
return (function (state_39958){
var state_val_39959 = (state_39958[(1)]);
if((state_val_39959 === (7))){
var inst_39954 = (state_39958[(2)]);
var state_39958__$1 = state_39958;
var statearr_39960_40024 = state_39958__$1;
(statearr_39960_40024[(2)] = inst_39954);

(statearr_39960_40024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (20))){
var state_39958__$1 = state_39958;
var statearr_39961_40025 = state_39958__$1;
(statearr_39961_40025[(2)] = null);

(statearr_39961_40025[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (1))){
var state_39958__$1 = state_39958;
var statearr_39962_40026 = state_39958__$1;
(statearr_39962_40026[(2)] = null);

(statearr_39962_40026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (4))){
var inst_39923 = (state_39958[(7)]);
var inst_39923__$1 = (state_39958[(2)]);
var inst_39924 = (inst_39923__$1 == null);
var state_39958__$1 = (function (){var statearr_39963 = state_39958;
(statearr_39963[(7)] = inst_39923__$1);

return statearr_39963;
})();
if(cljs.core.truth_(inst_39924)){
var statearr_39964_40027 = state_39958__$1;
(statearr_39964_40027[(1)] = (5));

} else {
var statearr_39965_40028 = state_39958__$1;
(statearr_39965_40028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (15))){
var inst_39936 = (state_39958[(8)]);
var state_39958__$1 = state_39958;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39958__$1,(18),to,inst_39936);
} else {
if((state_val_39959 === (21))){
var inst_39949 = (state_39958[(2)]);
var state_39958__$1 = state_39958;
var statearr_39966_40029 = state_39958__$1;
(statearr_39966_40029[(2)] = inst_39949);

(statearr_39966_40029[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (13))){
var inst_39951 = (state_39958[(2)]);
var state_39958__$1 = (function (){var statearr_39967 = state_39958;
(statearr_39967[(9)] = inst_39951);

return statearr_39967;
})();
var statearr_39968_40030 = state_39958__$1;
(statearr_39968_40030[(2)] = null);

(statearr_39968_40030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (6))){
var inst_39923 = (state_39958[(7)]);
var state_39958__$1 = state_39958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39958__$1,(11),inst_39923);
} else {
if((state_val_39959 === (17))){
var inst_39944 = (state_39958[(2)]);
var state_39958__$1 = state_39958;
if(cljs.core.truth_(inst_39944)){
var statearr_39969_40031 = state_39958__$1;
(statearr_39969_40031[(1)] = (19));

} else {
var statearr_39970_40032 = state_39958__$1;
(statearr_39970_40032[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (3))){
var inst_39956 = (state_39958[(2)]);
var state_39958__$1 = state_39958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39958__$1,inst_39956);
} else {
if((state_val_39959 === (12))){
var inst_39933 = (state_39958[(10)]);
var state_39958__$1 = state_39958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39958__$1,(14),inst_39933);
} else {
if((state_val_39959 === (2))){
var state_39958__$1 = state_39958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39958__$1,(4),results);
} else {
if((state_val_39959 === (19))){
var state_39958__$1 = state_39958;
var statearr_39971_40033 = state_39958__$1;
(statearr_39971_40033[(2)] = null);

(statearr_39971_40033[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (11))){
var inst_39933 = (state_39958[(2)]);
var state_39958__$1 = (function (){var statearr_39972 = state_39958;
(statearr_39972[(10)] = inst_39933);

return statearr_39972;
})();
var statearr_39973_40034 = state_39958__$1;
(statearr_39973_40034[(2)] = null);

(statearr_39973_40034[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (9))){
var state_39958__$1 = state_39958;
var statearr_39974_40035 = state_39958__$1;
(statearr_39974_40035[(2)] = null);

(statearr_39974_40035[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (5))){
var state_39958__$1 = state_39958;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39975_40036 = state_39958__$1;
(statearr_39975_40036[(1)] = (8));

} else {
var statearr_39976_40037 = state_39958__$1;
(statearr_39976_40037[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (14))){
var inst_39938 = (state_39958[(11)]);
var inst_39936 = (state_39958[(8)]);
var inst_39936__$1 = (state_39958[(2)]);
var inst_39937 = (inst_39936__$1 == null);
var inst_39938__$1 = cljs.core.not.call(null,inst_39937);
var state_39958__$1 = (function (){var statearr_39977 = state_39958;
(statearr_39977[(11)] = inst_39938__$1);

(statearr_39977[(8)] = inst_39936__$1);

return statearr_39977;
})();
if(inst_39938__$1){
var statearr_39978_40038 = state_39958__$1;
(statearr_39978_40038[(1)] = (15));

} else {
var statearr_39979_40039 = state_39958__$1;
(statearr_39979_40039[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (16))){
var inst_39938 = (state_39958[(11)]);
var state_39958__$1 = state_39958;
var statearr_39980_40040 = state_39958__$1;
(statearr_39980_40040[(2)] = inst_39938);

(statearr_39980_40040[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (10))){
var inst_39930 = (state_39958[(2)]);
var state_39958__$1 = state_39958;
var statearr_39981_40041 = state_39958__$1;
(statearr_39981_40041[(2)] = inst_39930);

(statearr_39981_40041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (18))){
var inst_39941 = (state_39958[(2)]);
var state_39958__$1 = state_39958;
var statearr_39982_40042 = state_39958__$1;
(statearr_39982_40042[(2)] = inst_39941);

(statearr_39982_40042[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (8))){
var inst_39927 = cljs.core.async.close_BANG_.call(null,to);
var state_39958__$1 = state_39958;
var statearr_39983_40043 = state_39958__$1;
(statearr_39983_40043[(2)] = inst_39927);

(statearr_39983_40043[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39652__auto__,jobs,results,process,async))
;
return ((function (switch__39562__auto__,c__39652__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39563__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39563__auto____0 = (function (){
var statearr_39984 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39984[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39563__auto__);

(statearr_39984[(1)] = (1));

return statearr_39984;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39563__auto____1 = (function (state_39958){
while(true){
var ret_value__39564__auto__ = (function (){try{while(true){
var result__39565__auto__ = switch__39562__auto__.call(null,state_39958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39565__auto__;
}
break;
}
}catch (e39985){if((e39985 instanceof Object)){
var ex__39566__auto__ = e39985;
var statearr_39986_40044 = state_39958;
(statearr_39986_40044[(5)] = ex__39566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40045 = state_39958;
state_39958 = G__40045;
continue;
} else {
return ret_value__39564__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39563__auto__ = function(state_39958){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39563__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39563__auto____1.call(this,state_39958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39563__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39563__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39563__auto__;
})()
;})(switch__39562__auto__,c__39652__auto__,jobs,results,process,async))
})();
var state__39654__auto__ = (function (){var statearr_39987 = f__39653__auto__.call(null);
(statearr_39987[(6)] = c__39652__auto__);

return statearr_39987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39654__auto__);
});})(c__39652__auto__,jobs,results,process,async))
);

return c__39652__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__40047 = arguments.length;
switch (G__40047) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__40050 = arguments.length;
switch (G__40050) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__40053 = arguments.length;
switch (G__40053) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__39652__auto___40102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39652__auto___40102,tc,fc){
return (function (){
var f__39653__auto__ = (function (){var switch__39562__auto__ = ((function (c__39652__auto___40102,tc,fc){
return (function (state_40079){
var state_val_40080 = (state_40079[(1)]);
if((state_val_40080 === (7))){
var inst_40075 = (state_40079[(2)]);
var state_40079__$1 = state_40079;
var statearr_40081_40103 = state_40079__$1;
(statearr_40081_40103[(2)] = inst_40075);

(statearr_40081_40103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40080 === (1))){
var state_40079__$1 = state_40079;
var statearr_40082_40104 = state_40079__$1;
(statearr_40082_40104[(2)] = null);

(statearr_40082_40104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40080 === (4))){
var inst_40056 = (state_40079[(7)]);
var inst_40056__$1 = (state_40079[(2)]);
var inst_40057 = (inst_40056__$1 == null);
var state_40079__$1 = (function (){var statearr_40083 = state_40079;
(statearr_40083[(7)] = inst_40056__$1);

return statearr_40083;
})();
if(cljs.core.truth_(inst_40057)){
var statearr_40084_40105 = state_40079__$1;
(statearr_40084_40105[(1)] = (5));

} else {
var statearr_40085_40106 = state_40079__$1;
(statearr_40085_40106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40080 === (13))){
var state_40079__$1 = state_40079;
var statearr_40086_40107 = state_40079__$1;
(statearr_40086_40107[(2)] = null);

(statearr_40086_40107[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40080 === (6))){
var inst_40056 = (state_40079[(7)]);
var inst_40062 = p.call(null,inst_40056);
var state_40079__$1 = state_40079;
if(cljs.core.truth_(inst_40062)){
var statearr_40087_40108 = state_40079__$1;
(statearr_40087_40108[(1)] = (9));

} else {
var statearr_40088_40109 = state_40079__$1;
(statearr_40088_40109[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40080 === (3))){
var inst_40077 = (state_40079[(2)]);
var state_40079__$1 = state_40079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40079__$1,inst_40077);
} else {
if((state_val_40080 === (12))){
var state_40079__$1 = state_40079;
var statearr_40089_40110 = state_40079__$1;
(statearr_40089_40110[(2)] = null);

(statearr_40089_40110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40080 === (2))){
var state_40079__$1 = state_40079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40079__$1,(4),ch);
} else {
if((state_val_40080 === (11))){
var inst_40056 = (state_40079[(7)]);
var inst_40066 = (state_40079[(2)]);
var state_40079__$1 = state_40079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40079__$1,(8),inst_40066,inst_40056);
} else {
if((state_val_40080 === (9))){
var state_40079__$1 = state_40079;
var statearr_40090_40111 = state_40079__$1;
(statearr_40090_40111[(2)] = tc);

(statearr_40090_40111[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40080 === (5))){
var inst_40059 = cljs.core.async.close_BANG_.call(null,tc);
var inst_40060 = cljs.core.async.close_BANG_.call(null,fc);
var state_40079__$1 = (function (){var statearr_40091 = state_40079;
(statearr_40091[(8)] = inst_40059);

return statearr_40091;
})();
var statearr_40092_40112 = state_40079__$1;
(statearr_40092_40112[(2)] = inst_40060);

(statearr_40092_40112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40080 === (14))){
var inst_40073 = (state_40079[(2)]);
var state_40079__$1 = state_40079;
var statearr_40093_40113 = state_40079__$1;
(statearr_40093_40113[(2)] = inst_40073);

(statearr_40093_40113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40080 === (10))){
var state_40079__$1 = state_40079;
var statearr_40094_40114 = state_40079__$1;
(statearr_40094_40114[(2)] = fc);

(statearr_40094_40114[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40080 === (8))){
var inst_40068 = (state_40079[(2)]);
var state_40079__$1 = state_40079;
if(cljs.core.truth_(inst_40068)){
var statearr_40095_40115 = state_40079__$1;
(statearr_40095_40115[(1)] = (12));

} else {
var statearr_40096_40116 = state_40079__$1;
(statearr_40096_40116[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39652__auto___40102,tc,fc))
;
return ((function (switch__39562__auto__,c__39652__auto___40102,tc,fc){
return (function() {
var cljs$core$async$state_machine__39563__auto__ = null;
var cljs$core$async$state_machine__39563__auto____0 = (function (){
var statearr_40097 = [null,null,null,null,null,null,null,null,null];
(statearr_40097[(0)] = cljs$core$async$state_machine__39563__auto__);

(statearr_40097[(1)] = (1));

return statearr_40097;
});
var cljs$core$async$state_machine__39563__auto____1 = (function (state_40079){
while(true){
var ret_value__39564__auto__ = (function (){try{while(true){
var result__39565__auto__ = switch__39562__auto__.call(null,state_40079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39565__auto__;
}
break;
}
}catch (e40098){if((e40098 instanceof Object)){
var ex__39566__auto__ = e40098;
var statearr_40099_40117 = state_40079;
(statearr_40099_40117[(5)] = ex__39566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40118 = state_40079;
state_40079 = G__40118;
continue;
} else {
return ret_value__39564__auto__;
}
break;
}
});
cljs$core$async$state_machine__39563__auto__ = function(state_40079){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39563__auto____1.call(this,state_40079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39563__auto____0;
cljs$core$async$state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39563__auto____1;
return cljs$core$async$state_machine__39563__auto__;
})()
;})(switch__39562__auto__,c__39652__auto___40102,tc,fc))
})();
var state__39654__auto__ = (function (){var statearr_40100 = f__39653__auto__.call(null);
(statearr_40100[(6)] = c__39652__auto___40102);

return statearr_40100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39654__auto__);
});})(c__39652__auto___40102,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__39652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39652__auto__){
return (function (){
var f__39653__auto__ = (function (){var switch__39562__auto__ = ((function (c__39652__auto__){
return (function (state_40139){
var state_val_40140 = (state_40139[(1)]);
if((state_val_40140 === (7))){
var inst_40135 = (state_40139[(2)]);
var state_40139__$1 = state_40139;
var statearr_40141_40159 = state_40139__$1;
(statearr_40141_40159[(2)] = inst_40135);

(statearr_40141_40159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40140 === (1))){
var inst_40119 = init;
var state_40139__$1 = (function (){var statearr_40142 = state_40139;
(statearr_40142[(7)] = inst_40119);

return statearr_40142;
})();
var statearr_40143_40160 = state_40139__$1;
(statearr_40143_40160[(2)] = null);

(statearr_40143_40160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40140 === (4))){
var inst_40122 = (state_40139[(8)]);
var inst_40122__$1 = (state_40139[(2)]);
var inst_40123 = (inst_40122__$1 == null);
var state_40139__$1 = (function (){var statearr_40144 = state_40139;
(statearr_40144[(8)] = inst_40122__$1);

return statearr_40144;
})();
if(cljs.core.truth_(inst_40123)){
var statearr_40145_40161 = state_40139__$1;
(statearr_40145_40161[(1)] = (5));

} else {
var statearr_40146_40162 = state_40139__$1;
(statearr_40146_40162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40140 === (6))){
var inst_40122 = (state_40139[(8)]);
var inst_40119 = (state_40139[(7)]);
var inst_40126 = (state_40139[(9)]);
var inst_40126__$1 = f.call(null,inst_40119,inst_40122);
var inst_40127 = cljs.core.reduced_QMARK_.call(null,inst_40126__$1);
var state_40139__$1 = (function (){var statearr_40147 = state_40139;
(statearr_40147[(9)] = inst_40126__$1);

return statearr_40147;
})();
if(inst_40127){
var statearr_40148_40163 = state_40139__$1;
(statearr_40148_40163[(1)] = (8));

} else {
var statearr_40149_40164 = state_40139__$1;
(statearr_40149_40164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40140 === (3))){
var inst_40137 = (state_40139[(2)]);
var state_40139__$1 = state_40139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40139__$1,inst_40137);
} else {
if((state_val_40140 === (2))){
var state_40139__$1 = state_40139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40139__$1,(4),ch);
} else {
if((state_val_40140 === (9))){
var inst_40126 = (state_40139[(9)]);
var inst_40119 = inst_40126;
var state_40139__$1 = (function (){var statearr_40150 = state_40139;
(statearr_40150[(7)] = inst_40119);

return statearr_40150;
})();
var statearr_40151_40165 = state_40139__$1;
(statearr_40151_40165[(2)] = null);

(statearr_40151_40165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40140 === (5))){
var inst_40119 = (state_40139[(7)]);
var state_40139__$1 = state_40139;
var statearr_40152_40166 = state_40139__$1;
(statearr_40152_40166[(2)] = inst_40119);

(statearr_40152_40166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40140 === (10))){
var inst_40133 = (state_40139[(2)]);
var state_40139__$1 = state_40139;
var statearr_40153_40167 = state_40139__$1;
(statearr_40153_40167[(2)] = inst_40133);

(statearr_40153_40167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40140 === (8))){
var inst_40126 = (state_40139[(9)]);
var inst_40129 = cljs.core.deref.call(null,inst_40126);
var state_40139__$1 = state_40139;
var statearr_40154_40168 = state_40139__$1;
(statearr_40154_40168[(2)] = inst_40129);

(statearr_40154_40168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__39652__auto__))
;
return ((function (switch__39562__auto__,c__39652__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__39563__auto__ = null;
var cljs$core$async$reduce_$_state_machine__39563__auto____0 = (function (){
var statearr_40155 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40155[(0)] = cljs$core$async$reduce_$_state_machine__39563__auto__);

(statearr_40155[(1)] = (1));

return statearr_40155;
});
var cljs$core$async$reduce_$_state_machine__39563__auto____1 = (function (state_40139){
while(true){
var ret_value__39564__auto__ = (function (){try{while(true){
var result__39565__auto__ = switch__39562__auto__.call(null,state_40139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39565__auto__;
}
break;
}
}catch (e40156){if((e40156 instanceof Object)){
var ex__39566__auto__ = e40156;
var statearr_40157_40169 = state_40139;
(statearr_40157_40169[(5)] = ex__39566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40170 = state_40139;
state_40139 = G__40170;
continue;
} else {
return ret_value__39564__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__39563__auto__ = function(state_40139){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__39563__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__39563__auto____1.call(this,state_40139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__39563__auto____0;
cljs$core$async$reduce_$_state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__39563__auto____1;
return cljs$core$async$reduce_$_state_machine__39563__auto__;
})()
;})(switch__39562__auto__,c__39652__auto__))
})();
var state__39654__auto__ = (function (){var statearr_40158 = f__39653__auto__.call(null);
(statearr_40158[(6)] = c__39652__auto__);

return statearr_40158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39654__auto__);
});})(c__39652__auto__))
);

return c__39652__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__39652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39652__auto__,f__$1){
return (function (){
var f__39653__auto__ = (function (){var switch__39562__auto__ = ((function (c__39652__auto__,f__$1){
return (function (state_40176){
var state_val_40177 = (state_40176[(1)]);
if((state_val_40177 === (1))){
var inst_40171 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_40176__$1 = state_40176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40176__$1,(2),inst_40171);
} else {
if((state_val_40177 === (2))){
var inst_40173 = (state_40176[(2)]);
var inst_40174 = f__$1.call(null,inst_40173);
var state_40176__$1 = state_40176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40176__$1,inst_40174);
} else {
return null;
}
}
});})(c__39652__auto__,f__$1))
;
return ((function (switch__39562__auto__,c__39652__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__39563__auto__ = null;
var cljs$core$async$transduce_$_state_machine__39563__auto____0 = (function (){
var statearr_40178 = [null,null,null,null,null,null,null];
(statearr_40178[(0)] = cljs$core$async$transduce_$_state_machine__39563__auto__);

(statearr_40178[(1)] = (1));

return statearr_40178;
});
var cljs$core$async$transduce_$_state_machine__39563__auto____1 = (function (state_40176){
while(true){
var ret_value__39564__auto__ = (function (){try{while(true){
var result__39565__auto__ = switch__39562__auto__.call(null,state_40176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39565__auto__;
}
break;
}
}catch (e40179){if((e40179 instanceof Object)){
var ex__39566__auto__ = e40179;
var statearr_40180_40182 = state_40176;
(statearr_40180_40182[(5)] = ex__39566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40183 = state_40176;
state_40176 = G__40183;
continue;
} else {
return ret_value__39564__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__39563__auto__ = function(state_40176){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__39563__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__39563__auto____1.call(this,state_40176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__39563__auto____0;
cljs$core$async$transduce_$_state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__39563__auto____1;
return cljs$core$async$transduce_$_state_machine__39563__auto__;
})()
;})(switch__39562__auto__,c__39652__auto__,f__$1))
})();
var state__39654__auto__ = (function (){var statearr_40181 = f__39653__auto__.call(null);
(statearr_40181[(6)] = c__39652__auto__);

return statearr_40181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39654__auto__);
});})(c__39652__auto__,f__$1))
);

return c__39652__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__40185 = arguments.length;
switch (G__40185) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__39652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39652__auto__){
return (function (){
var f__39653__auto__ = (function (){var switch__39562__auto__ = ((function (c__39652__auto__){
return (function (state_40210){
var state_val_40211 = (state_40210[(1)]);
if((state_val_40211 === (7))){
var inst_40192 = (state_40210[(2)]);
var state_40210__$1 = state_40210;
var statearr_40212_40233 = state_40210__$1;
(statearr_40212_40233[(2)] = inst_40192);

(statearr_40212_40233[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40211 === (1))){
var inst_40186 = cljs.core.seq.call(null,coll);
var inst_40187 = inst_40186;
var state_40210__$1 = (function (){var statearr_40213 = state_40210;
(statearr_40213[(7)] = inst_40187);

return statearr_40213;
})();
var statearr_40214_40234 = state_40210__$1;
(statearr_40214_40234[(2)] = null);

(statearr_40214_40234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40211 === (4))){
var inst_40187 = (state_40210[(7)]);
var inst_40190 = cljs.core.first.call(null,inst_40187);
var state_40210__$1 = state_40210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40210__$1,(7),ch,inst_40190);
} else {
if((state_val_40211 === (13))){
var inst_40204 = (state_40210[(2)]);
var state_40210__$1 = state_40210;
var statearr_40215_40235 = state_40210__$1;
(statearr_40215_40235[(2)] = inst_40204);

(statearr_40215_40235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40211 === (6))){
var inst_40195 = (state_40210[(2)]);
var state_40210__$1 = state_40210;
if(cljs.core.truth_(inst_40195)){
var statearr_40216_40236 = state_40210__$1;
(statearr_40216_40236[(1)] = (8));

} else {
var statearr_40217_40237 = state_40210__$1;
(statearr_40217_40237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40211 === (3))){
var inst_40208 = (state_40210[(2)]);
var state_40210__$1 = state_40210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40210__$1,inst_40208);
} else {
if((state_val_40211 === (12))){
var state_40210__$1 = state_40210;
var statearr_40218_40238 = state_40210__$1;
(statearr_40218_40238[(2)] = null);

(statearr_40218_40238[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40211 === (2))){
var inst_40187 = (state_40210[(7)]);
var state_40210__$1 = state_40210;
if(cljs.core.truth_(inst_40187)){
var statearr_40219_40239 = state_40210__$1;
(statearr_40219_40239[(1)] = (4));

} else {
var statearr_40220_40240 = state_40210__$1;
(statearr_40220_40240[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40211 === (11))){
var inst_40201 = cljs.core.async.close_BANG_.call(null,ch);
var state_40210__$1 = state_40210;
var statearr_40221_40241 = state_40210__$1;
(statearr_40221_40241[(2)] = inst_40201);

(statearr_40221_40241[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40211 === (9))){
var state_40210__$1 = state_40210;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40222_40242 = state_40210__$1;
(statearr_40222_40242[(1)] = (11));

} else {
var statearr_40223_40243 = state_40210__$1;
(statearr_40223_40243[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40211 === (5))){
var inst_40187 = (state_40210[(7)]);
var state_40210__$1 = state_40210;
var statearr_40224_40244 = state_40210__$1;
(statearr_40224_40244[(2)] = inst_40187);

(statearr_40224_40244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40211 === (10))){
var inst_40206 = (state_40210[(2)]);
var state_40210__$1 = state_40210;
var statearr_40225_40245 = state_40210__$1;
(statearr_40225_40245[(2)] = inst_40206);

(statearr_40225_40245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40211 === (8))){
var inst_40187 = (state_40210[(7)]);
var inst_40197 = cljs.core.next.call(null,inst_40187);
var inst_40187__$1 = inst_40197;
var state_40210__$1 = (function (){var statearr_40226 = state_40210;
(statearr_40226[(7)] = inst_40187__$1);

return statearr_40226;
})();
var statearr_40227_40246 = state_40210__$1;
(statearr_40227_40246[(2)] = null);

(statearr_40227_40246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39652__auto__))
;
return ((function (switch__39562__auto__,c__39652__auto__){
return (function() {
var cljs$core$async$state_machine__39563__auto__ = null;
var cljs$core$async$state_machine__39563__auto____0 = (function (){
var statearr_40228 = [null,null,null,null,null,null,null,null];
(statearr_40228[(0)] = cljs$core$async$state_machine__39563__auto__);

(statearr_40228[(1)] = (1));

return statearr_40228;
});
var cljs$core$async$state_machine__39563__auto____1 = (function (state_40210){
while(true){
var ret_value__39564__auto__ = (function (){try{while(true){
var result__39565__auto__ = switch__39562__auto__.call(null,state_40210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39565__auto__;
}
break;
}
}catch (e40229){if((e40229 instanceof Object)){
var ex__39566__auto__ = e40229;
var statearr_40230_40247 = state_40210;
(statearr_40230_40247[(5)] = ex__39566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40248 = state_40210;
state_40210 = G__40248;
continue;
} else {
return ret_value__39564__auto__;
}
break;
}
});
cljs$core$async$state_machine__39563__auto__ = function(state_40210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39563__auto____1.call(this,state_40210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39563__auto____0;
cljs$core$async$state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39563__auto____1;
return cljs$core$async$state_machine__39563__auto__;
})()
;})(switch__39562__auto__,c__39652__auto__))
})();
var state__39654__auto__ = (function (){var statearr_40231 = f__39653__auto__.call(null);
(statearr_40231[(6)] = c__39652__auto__);

return statearr_40231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39654__auto__);
});})(c__39652__auto__))
);

return c__39652__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4229__auto__ = (((_ == null))?null:_);
var m__4230__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,_);
} else {
var m__4230__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4230__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,m,ch);
} else {
var m__4230__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,m);
} else {
var m__4230__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40249 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40249 = (function (ch,cs,meta40250){
this.ch = ch;
this.cs = cs;
this.meta40250 = meta40250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_40251,meta40250__$1){
var self__ = this;
var _40251__$1 = this;
return (new cljs.core.async.t_cljs$core$async40249(self__.ch,self__.cs,meta40250__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async40249.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_40251){
var self__ = this;
var _40251__$1 = this;
return self__.meta40250;
});})(cs))
;

cljs.core.async.t_cljs$core$async40249.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40249.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async40249.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40249.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40249.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40249.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40249.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta40250","meta40250",2054099143,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async40249.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40249.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40249";

cljs.core.async.t_cljs$core$async40249.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async40249");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40249.
 */
cljs.core.async.__GT_t_cljs$core$async40249 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async40249(ch__$1,cs__$1,meta40250){
return (new cljs.core.async.t_cljs$core$async40249(ch__$1,cs__$1,meta40250));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async40249(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__39652__auto___40471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39652__auto___40471,cs,m,dchan,dctr,done){
return (function (){
var f__39653__auto__ = (function (){var switch__39562__auto__ = ((function (c__39652__auto___40471,cs,m,dchan,dctr,done){
return (function (state_40386){
var state_val_40387 = (state_40386[(1)]);
if((state_val_40387 === (7))){
var inst_40382 = (state_40386[(2)]);
var state_40386__$1 = state_40386;
var statearr_40388_40472 = state_40386__$1;
(statearr_40388_40472[(2)] = inst_40382);

(statearr_40388_40472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (20))){
var inst_40285 = (state_40386[(7)]);
var inst_40297 = cljs.core.first.call(null,inst_40285);
var inst_40298 = cljs.core.nth.call(null,inst_40297,(0),null);
var inst_40299 = cljs.core.nth.call(null,inst_40297,(1),null);
var state_40386__$1 = (function (){var statearr_40389 = state_40386;
(statearr_40389[(8)] = inst_40298);

return statearr_40389;
})();
if(cljs.core.truth_(inst_40299)){
var statearr_40390_40473 = state_40386__$1;
(statearr_40390_40473[(1)] = (22));

} else {
var statearr_40391_40474 = state_40386__$1;
(statearr_40391_40474[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (27))){
var inst_40254 = (state_40386[(9)]);
var inst_40329 = (state_40386[(10)]);
var inst_40334 = (state_40386[(11)]);
var inst_40327 = (state_40386[(12)]);
var inst_40334__$1 = cljs.core._nth.call(null,inst_40327,inst_40329);
var inst_40335 = cljs.core.async.put_BANG_.call(null,inst_40334__$1,inst_40254,done);
var state_40386__$1 = (function (){var statearr_40392 = state_40386;
(statearr_40392[(11)] = inst_40334__$1);

return statearr_40392;
})();
if(cljs.core.truth_(inst_40335)){
var statearr_40393_40475 = state_40386__$1;
(statearr_40393_40475[(1)] = (30));

} else {
var statearr_40394_40476 = state_40386__$1;
(statearr_40394_40476[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (1))){
var state_40386__$1 = state_40386;
var statearr_40395_40477 = state_40386__$1;
(statearr_40395_40477[(2)] = null);

(statearr_40395_40477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (24))){
var inst_40285 = (state_40386[(7)]);
var inst_40304 = (state_40386[(2)]);
var inst_40305 = cljs.core.next.call(null,inst_40285);
var inst_40263 = inst_40305;
var inst_40264 = null;
var inst_40265 = (0);
var inst_40266 = (0);
var state_40386__$1 = (function (){var statearr_40396 = state_40386;
(statearr_40396[(13)] = inst_40266);

(statearr_40396[(14)] = inst_40264);

(statearr_40396[(15)] = inst_40263);

(statearr_40396[(16)] = inst_40265);

(statearr_40396[(17)] = inst_40304);

return statearr_40396;
})();
var statearr_40397_40478 = state_40386__$1;
(statearr_40397_40478[(2)] = null);

(statearr_40397_40478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (39))){
var state_40386__$1 = state_40386;
var statearr_40401_40479 = state_40386__$1;
(statearr_40401_40479[(2)] = null);

(statearr_40401_40479[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (4))){
var inst_40254 = (state_40386[(9)]);
var inst_40254__$1 = (state_40386[(2)]);
var inst_40255 = (inst_40254__$1 == null);
var state_40386__$1 = (function (){var statearr_40402 = state_40386;
(statearr_40402[(9)] = inst_40254__$1);

return statearr_40402;
})();
if(cljs.core.truth_(inst_40255)){
var statearr_40403_40480 = state_40386__$1;
(statearr_40403_40480[(1)] = (5));

} else {
var statearr_40404_40481 = state_40386__$1;
(statearr_40404_40481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (15))){
var inst_40266 = (state_40386[(13)]);
var inst_40264 = (state_40386[(14)]);
var inst_40263 = (state_40386[(15)]);
var inst_40265 = (state_40386[(16)]);
var inst_40281 = (state_40386[(2)]);
var inst_40282 = (inst_40266 + (1));
var tmp40398 = inst_40264;
var tmp40399 = inst_40263;
var tmp40400 = inst_40265;
var inst_40263__$1 = tmp40399;
var inst_40264__$1 = tmp40398;
var inst_40265__$1 = tmp40400;
var inst_40266__$1 = inst_40282;
var state_40386__$1 = (function (){var statearr_40405 = state_40386;
(statearr_40405[(13)] = inst_40266__$1);

(statearr_40405[(14)] = inst_40264__$1);

(statearr_40405[(15)] = inst_40263__$1);

(statearr_40405[(16)] = inst_40265__$1);

(statearr_40405[(18)] = inst_40281);

return statearr_40405;
})();
var statearr_40406_40482 = state_40386__$1;
(statearr_40406_40482[(2)] = null);

(statearr_40406_40482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (21))){
var inst_40308 = (state_40386[(2)]);
var state_40386__$1 = state_40386;
var statearr_40410_40483 = state_40386__$1;
(statearr_40410_40483[(2)] = inst_40308);

(statearr_40410_40483[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (31))){
var inst_40334 = (state_40386[(11)]);
var inst_40338 = done.call(null,null);
var inst_40339 = cljs.core.async.untap_STAR_.call(null,m,inst_40334);
var state_40386__$1 = (function (){var statearr_40411 = state_40386;
(statearr_40411[(19)] = inst_40338);

return statearr_40411;
})();
var statearr_40412_40484 = state_40386__$1;
(statearr_40412_40484[(2)] = inst_40339);

(statearr_40412_40484[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (32))){
var inst_40328 = (state_40386[(20)]);
var inst_40329 = (state_40386[(10)]);
var inst_40326 = (state_40386[(21)]);
var inst_40327 = (state_40386[(12)]);
var inst_40341 = (state_40386[(2)]);
var inst_40342 = (inst_40329 + (1));
var tmp40407 = inst_40328;
var tmp40408 = inst_40326;
var tmp40409 = inst_40327;
var inst_40326__$1 = tmp40408;
var inst_40327__$1 = tmp40409;
var inst_40328__$1 = tmp40407;
var inst_40329__$1 = inst_40342;
var state_40386__$1 = (function (){var statearr_40413 = state_40386;
(statearr_40413[(22)] = inst_40341);

(statearr_40413[(20)] = inst_40328__$1);

(statearr_40413[(10)] = inst_40329__$1);

(statearr_40413[(21)] = inst_40326__$1);

(statearr_40413[(12)] = inst_40327__$1);

return statearr_40413;
})();
var statearr_40414_40485 = state_40386__$1;
(statearr_40414_40485[(2)] = null);

(statearr_40414_40485[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (40))){
var inst_40354 = (state_40386[(23)]);
var inst_40358 = done.call(null,null);
var inst_40359 = cljs.core.async.untap_STAR_.call(null,m,inst_40354);
var state_40386__$1 = (function (){var statearr_40415 = state_40386;
(statearr_40415[(24)] = inst_40358);

return statearr_40415;
})();
var statearr_40416_40486 = state_40386__$1;
(statearr_40416_40486[(2)] = inst_40359);

(statearr_40416_40486[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (33))){
var inst_40345 = (state_40386[(25)]);
var inst_40347 = cljs.core.chunked_seq_QMARK_.call(null,inst_40345);
var state_40386__$1 = state_40386;
if(inst_40347){
var statearr_40417_40487 = state_40386__$1;
(statearr_40417_40487[(1)] = (36));

} else {
var statearr_40418_40488 = state_40386__$1;
(statearr_40418_40488[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (13))){
var inst_40275 = (state_40386[(26)]);
var inst_40278 = cljs.core.async.close_BANG_.call(null,inst_40275);
var state_40386__$1 = state_40386;
var statearr_40419_40489 = state_40386__$1;
(statearr_40419_40489[(2)] = inst_40278);

(statearr_40419_40489[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (22))){
var inst_40298 = (state_40386[(8)]);
var inst_40301 = cljs.core.async.close_BANG_.call(null,inst_40298);
var state_40386__$1 = state_40386;
var statearr_40420_40490 = state_40386__$1;
(statearr_40420_40490[(2)] = inst_40301);

(statearr_40420_40490[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (36))){
var inst_40345 = (state_40386[(25)]);
var inst_40349 = cljs.core.chunk_first.call(null,inst_40345);
var inst_40350 = cljs.core.chunk_rest.call(null,inst_40345);
var inst_40351 = cljs.core.count.call(null,inst_40349);
var inst_40326 = inst_40350;
var inst_40327 = inst_40349;
var inst_40328 = inst_40351;
var inst_40329 = (0);
var state_40386__$1 = (function (){var statearr_40421 = state_40386;
(statearr_40421[(20)] = inst_40328);

(statearr_40421[(10)] = inst_40329);

(statearr_40421[(21)] = inst_40326);

(statearr_40421[(12)] = inst_40327);

return statearr_40421;
})();
var statearr_40422_40491 = state_40386__$1;
(statearr_40422_40491[(2)] = null);

(statearr_40422_40491[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (41))){
var inst_40345 = (state_40386[(25)]);
var inst_40361 = (state_40386[(2)]);
var inst_40362 = cljs.core.next.call(null,inst_40345);
var inst_40326 = inst_40362;
var inst_40327 = null;
var inst_40328 = (0);
var inst_40329 = (0);
var state_40386__$1 = (function (){var statearr_40423 = state_40386;
(statearr_40423[(27)] = inst_40361);

(statearr_40423[(20)] = inst_40328);

(statearr_40423[(10)] = inst_40329);

(statearr_40423[(21)] = inst_40326);

(statearr_40423[(12)] = inst_40327);

return statearr_40423;
})();
var statearr_40424_40492 = state_40386__$1;
(statearr_40424_40492[(2)] = null);

(statearr_40424_40492[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (43))){
var state_40386__$1 = state_40386;
var statearr_40425_40493 = state_40386__$1;
(statearr_40425_40493[(2)] = null);

(statearr_40425_40493[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (29))){
var inst_40370 = (state_40386[(2)]);
var state_40386__$1 = state_40386;
var statearr_40426_40494 = state_40386__$1;
(statearr_40426_40494[(2)] = inst_40370);

(statearr_40426_40494[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (44))){
var inst_40379 = (state_40386[(2)]);
var state_40386__$1 = (function (){var statearr_40427 = state_40386;
(statearr_40427[(28)] = inst_40379);

return statearr_40427;
})();
var statearr_40428_40495 = state_40386__$1;
(statearr_40428_40495[(2)] = null);

(statearr_40428_40495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (6))){
var inst_40318 = (state_40386[(29)]);
var inst_40317 = cljs.core.deref.call(null,cs);
var inst_40318__$1 = cljs.core.keys.call(null,inst_40317);
var inst_40319 = cljs.core.count.call(null,inst_40318__$1);
var inst_40320 = cljs.core.reset_BANG_.call(null,dctr,inst_40319);
var inst_40325 = cljs.core.seq.call(null,inst_40318__$1);
var inst_40326 = inst_40325;
var inst_40327 = null;
var inst_40328 = (0);
var inst_40329 = (0);
var state_40386__$1 = (function (){var statearr_40429 = state_40386;
(statearr_40429[(30)] = inst_40320);

(statearr_40429[(20)] = inst_40328);

(statearr_40429[(29)] = inst_40318__$1);

(statearr_40429[(10)] = inst_40329);

(statearr_40429[(21)] = inst_40326);

(statearr_40429[(12)] = inst_40327);

return statearr_40429;
})();
var statearr_40430_40496 = state_40386__$1;
(statearr_40430_40496[(2)] = null);

(statearr_40430_40496[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (28))){
var inst_40326 = (state_40386[(21)]);
var inst_40345 = (state_40386[(25)]);
var inst_40345__$1 = cljs.core.seq.call(null,inst_40326);
var state_40386__$1 = (function (){var statearr_40431 = state_40386;
(statearr_40431[(25)] = inst_40345__$1);

return statearr_40431;
})();
if(inst_40345__$1){
var statearr_40432_40497 = state_40386__$1;
(statearr_40432_40497[(1)] = (33));

} else {
var statearr_40433_40498 = state_40386__$1;
(statearr_40433_40498[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (25))){
var inst_40328 = (state_40386[(20)]);
var inst_40329 = (state_40386[(10)]);
var inst_40331 = (inst_40329 < inst_40328);
var inst_40332 = inst_40331;
var state_40386__$1 = state_40386;
if(cljs.core.truth_(inst_40332)){
var statearr_40434_40499 = state_40386__$1;
(statearr_40434_40499[(1)] = (27));

} else {
var statearr_40435_40500 = state_40386__$1;
(statearr_40435_40500[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (34))){
var state_40386__$1 = state_40386;
var statearr_40436_40501 = state_40386__$1;
(statearr_40436_40501[(2)] = null);

(statearr_40436_40501[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (17))){
var state_40386__$1 = state_40386;
var statearr_40437_40502 = state_40386__$1;
(statearr_40437_40502[(2)] = null);

(statearr_40437_40502[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (3))){
var inst_40384 = (state_40386[(2)]);
var state_40386__$1 = state_40386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40386__$1,inst_40384);
} else {
if((state_val_40387 === (12))){
var inst_40313 = (state_40386[(2)]);
var state_40386__$1 = state_40386;
var statearr_40438_40503 = state_40386__$1;
(statearr_40438_40503[(2)] = inst_40313);

(statearr_40438_40503[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (2))){
var state_40386__$1 = state_40386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40386__$1,(4),ch);
} else {
if((state_val_40387 === (23))){
var state_40386__$1 = state_40386;
var statearr_40439_40504 = state_40386__$1;
(statearr_40439_40504[(2)] = null);

(statearr_40439_40504[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (35))){
var inst_40368 = (state_40386[(2)]);
var state_40386__$1 = state_40386;
var statearr_40440_40505 = state_40386__$1;
(statearr_40440_40505[(2)] = inst_40368);

(statearr_40440_40505[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (19))){
var inst_40285 = (state_40386[(7)]);
var inst_40289 = cljs.core.chunk_first.call(null,inst_40285);
var inst_40290 = cljs.core.chunk_rest.call(null,inst_40285);
var inst_40291 = cljs.core.count.call(null,inst_40289);
var inst_40263 = inst_40290;
var inst_40264 = inst_40289;
var inst_40265 = inst_40291;
var inst_40266 = (0);
var state_40386__$1 = (function (){var statearr_40441 = state_40386;
(statearr_40441[(13)] = inst_40266);

(statearr_40441[(14)] = inst_40264);

(statearr_40441[(15)] = inst_40263);

(statearr_40441[(16)] = inst_40265);

return statearr_40441;
})();
var statearr_40442_40506 = state_40386__$1;
(statearr_40442_40506[(2)] = null);

(statearr_40442_40506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (11))){
var inst_40285 = (state_40386[(7)]);
var inst_40263 = (state_40386[(15)]);
var inst_40285__$1 = cljs.core.seq.call(null,inst_40263);
var state_40386__$1 = (function (){var statearr_40443 = state_40386;
(statearr_40443[(7)] = inst_40285__$1);

return statearr_40443;
})();
if(inst_40285__$1){
var statearr_40444_40507 = state_40386__$1;
(statearr_40444_40507[(1)] = (16));

} else {
var statearr_40445_40508 = state_40386__$1;
(statearr_40445_40508[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (9))){
var inst_40315 = (state_40386[(2)]);
var state_40386__$1 = state_40386;
var statearr_40446_40509 = state_40386__$1;
(statearr_40446_40509[(2)] = inst_40315);

(statearr_40446_40509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (5))){
var inst_40261 = cljs.core.deref.call(null,cs);
var inst_40262 = cljs.core.seq.call(null,inst_40261);
var inst_40263 = inst_40262;
var inst_40264 = null;
var inst_40265 = (0);
var inst_40266 = (0);
var state_40386__$1 = (function (){var statearr_40447 = state_40386;
(statearr_40447[(13)] = inst_40266);

(statearr_40447[(14)] = inst_40264);

(statearr_40447[(15)] = inst_40263);

(statearr_40447[(16)] = inst_40265);

return statearr_40447;
})();
var statearr_40448_40510 = state_40386__$1;
(statearr_40448_40510[(2)] = null);

(statearr_40448_40510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (14))){
var state_40386__$1 = state_40386;
var statearr_40449_40511 = state_40386__$1;
(statearr_40449_40511[(2)] = null);

(statearr_40449_40511[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (45))){
var inst_40376 = (state_40386[(2)]);
var state_40386__$1 = state_40386;
var statearr_40450_40512 = state_40386__$1;
(statearr_40450_40512[(2)] = inst_40376);

(statearr_40450_40512[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (26))){
var inst_40318 = (state_40386[(29)]);
var inst_40372 = (state_40386[(2)]);
var inst_40373 = cljs.core.seq.call(null,inst_40318);
var state_40386__$1 = (function (){var statearr_40451 = state_40386;
(statearr_40451[(31)] = inst_40372);

return statearr_40451;
})();
if(inst_40373){
var statearr_40452_40513 = state_40386__$1;
(statearr_40452_40513[(1)] = (42));

} else {
var statearr_40453_40514 = state_40386__$1;
(statearr_40453_40514[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (16))){
var inst_40285 = (state_40386[(7)]);
var inst_40287 = cljs.core.chunked_seq_QMARK_.call(null,inst_40285);
var state_40386__$1 = state_40386;
if(inst_40287){
var statearr_40454_40515 = state_40386__$1;
(statearr_40454_40515[(1)] = (19));

} else {
var statearr_40455_40516 = state_40386__$1;
(statearr_40455_40516[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (38))){
var inst_40365 = (state_40386[(2)]);
var state_40386__$1 = state_40386;
var statearr_40456_40517 = state_40386__$1;
(statearr_40456_40517[(2)] = inst_40365);

(statearr_40456_40517[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (30))){
var state_40386__$1 = state_40386;
var statearr_40457_40518 = state_40386__$1;
(statearr_40457_40518[(2)] = null);

(statearr_40457_40518[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (10))){
var inst_40266 = (state_40386[(13)]);
var inst_40264 = (state_40386[(14)]);
var inst_40274 = cljs.core._nth.call(null,inst_40264,inst_40266);
var inst_40275 = cljs.core.nth.call(null,inst_40274,(0),null);
var inst_40276 = cljs.core.nth.call(null,inst_40274,(1),null);
var state_40386__$1 = (function (){var statearr_40458 = state_40386;
(statearr_40458[(26)] = inst_40275);

return statearr_40458;
})();
if(cljs.core.truth_(inst_40276)){
var statearr_40459_40519 = state_40386__$1;
(statearr_40459_40519[(1)] = (13));

} else {
var statearr_40460_40520 = state_40386__$1;
(statearr_40460_40520[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (18))){
var inst_40311 = (state_40386[(2)]);
var state_40386__$1 = state_40386;
var statearr_40461_40521 = state_40386__$1;
(statearr_40461_40521[(2)] = inst_40311);

(statearr_40461_40521[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (42))){
var state_40386__$1 = state_40386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40386__$1,(45),dchan);
} else {
if((state_val_40387 === (37))){
var inst_40254 = (state_40386[(9)]);
var inst_40354 = (state_40386[(23)]);
var inst_40345 = (state_40386[(25)]);
var inst_40354__$1 = cljs.core.first.call(null,inst_40345);
var inst_40355 = cljs.core.async.put_BANG_.call(null,inst_40354__$1,inst_40254,done);
var state_40386__$1 = (function (){var statearr_40462 = state_40386;
(statearr_40462[(23)] = inst_40354__$1);

return statearr_40462;
})();
if(cljs.core.truth_(inst_40355)){
var statearr_40463_40522 = state_40386__$1;
(statearr_40463_40522[(1)] = (39));

} else {
var statearr_40464_40523 = state_40386__$1;
(statearr_40464_40523[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40387 === (8))){
var inst_40266 = (state_40386[(13)]);
var inst_40265 = (state_40386[(16)]);
var inst_40268 = (inst_40266 < inst_40265);
var inst_40269 = inst_40268;
var state_40386__$1 = state_40386;
if(cljs.core.truth_(inst_40269)){
var statearr_40465_40524 = state_40386__$1;
(statearr_40465_40524[(1)] = (10));

} else {
var statearr_40466_40525 = state_40386__$1;
(statearr_40466_40525[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39652__auto___40471,cs,m,dchan,dctr,done))
;
return ((function (switch__39562__auto__,c__39652__auto___40471,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__39563__auto__ = null;
var cljs$core$async$mult_$_state_machine__39563__auto____0 = (function (){
var statearr_40467 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40467[(0)] = cljs$core$async$mult_$_state_machine__39563__auto__);

(statearr_40467[(1)] = (1));

return statearr_40467;
});
var cljs$core$async$mult_$_state_machine__39563__auto____1 = (function (state_40386){
while(true){
var ret_value__39564__auto__ = (function (){try{while(true){
var result__39565__auto__ = switch__39562__auto__.call(null,state_40386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39565__auto__;
}
break;
}
}catch (e40468){if((e40468 instanceof Object)){
var ex__39566__auto__ = e40468;
var statearr_40469_40526 = state_40386;
(statearr_40469_40526[(5)] = ex__39566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40527 = state_40386;
state_40386 = G__40527;
continue;
} else {
return ret_value__39564__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__39563__auto__ = function(state_40386){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__39563__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__39563__auto____1.call(this,state_40386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__39563__auto____0;
cljs$core$async$mult_$_state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__39563__auto____1;
return cljs$core$async$mult_$_state_machine__39563__auto__;
})()
;})(switch__39562__auto__,c__39652__auto___40471,cs,m,dchan,dctr,done))
})();
var state__39654__auto__ = (function (){var statearr_40470 = f__39653__auto__.call(null);
(statearr_40470[(6)] = c__39652__auto___40471);

return statearr_40470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39654__auto__);
});})(c__39652__auto___40471,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__40529 = arguments.length;
switch (G__40529) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,m,ch);
} else {
var m__4230__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,m,ch);
} else {
var m__4230__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,m);
} else {
var m__4230__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,m,state_map);
} else {
var m__4230__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,m,mode);
} else {
var m__4230__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4520__auto__ = [];
var len__4517__auto___40541 = arguments.length;
var i__4518__auto___40542 = (0);
while(true){
if((i__4518__auto___40542 < len__4517__auto___40541)){
args__4520__auto__.push((arguments[i__4518__auto___40542]));

var G__40543 = (i__4518__auto___40542 + (1));
i__4518__auto___40542 = G__40543;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((3) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4521__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40535){
var map__40536 = p__40535;
var map__40536__$1 = ((((!((map__40536 == null)))?(((((map__40536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40536):map__40536);
var opts = map__40536__$1;
var statearr_40538_40544 = state;
(statearr_40538_40544[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__40536,map__40536__$1,opts){
return (function (val){
var statearr_40539_40545 = state;
(statearr_40539_40545[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__40536,map__40536__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_40540_40546 = state;
(statearr_40540_40546[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40531){
var G__40532 = cljs.core.first.call(null,seq40531);
var seq40531__$1 = cljs.core.next.call(null,seq40531);
var G__40533 = cljs.core.first.call(null,seq40531__$1);
var seq40531__$2 = cljs.core.next.call(null,seq40531__$1);
var G__40534 = cljs.core.first.call(null,seq40531__$2);
var seq40531__$3 = cljs.core.next.call(null,seq40531__$2);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40532,G__40533,G__40534,seq40531__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40547 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40547 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta40548){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta40548 = meta40548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40549,meta40548__$1){
var self__ = this;
var _40549__$1 = this;
return (new cljs.core.async.t_cljs$core$async40547(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta40548__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40547.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40549){
var self__ = this;
var _40549__$1 = this;
return self__.meta40548;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40547.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40547.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40547.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40547.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40547.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40547.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40547.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40547.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40547.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta40548","meta40548",2027527092,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40547.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40547.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40547";

cljs.core.async.t_cljs$core$async40547.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async40547");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40547.
 */
cljs.core.async.__GT_t_cljs$core$async40547 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async40547(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40548){
return (new cljs.core.async.t_cljs$core$async40547(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40548));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async40547(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39652__auto___40711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39652__auto___40711,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__39653__auto__ = (function (){var switch__39562__auto__ = ((function (c__39652__auto___40711,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40651){
var state_val_40652 = (state_40651[(1)]);
if((state_val_40652 === (7))){
var inst_40566 = (state_40651[(2)]);
var state_40651__$1 = state_40651;
var statearr_40653_40712 = state_40651__$1;
(statearr_40653_40712[(2)] = inst_40566);

(statearr_40653_40712[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (20))){
var inst_40578 = (state_40651[(7)]);
var state_40651__$1 = state_40651;
var statearr_40654_40713 = state_40651__$1;
(statearr_40654_40713[(2)] = inst_40578);

(statearr_40654_40713[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (27))){
var state_40651__$1 = state_40651;
var statearr_40655_40714 = state_40651__$1;
(statearr_40655_40714[(2)] = null);

(statearr_40655_40714[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (1))){
var inst_40553 = (state_40651[(8)]);
var inst_40553__$1 = calc_state.call(null);
var inst_40555 = (inst_40553__$1 == null);
var inst_40556 = cljs.core.not.call(null,inst_40555);
var state_40651__$1 = (function (){var statearr_40656 = state_40651;
(statearr_40656[(8)] = inst_40553__$1);

return statearr_40656;
})();
if(inst_40556){
var statearr_40657_40715 = state_40651__$1;
(statearr_40657_40715[(1)] = (2));

} else {
var statearr_40658_40716 = state_40651__$1;
(statearr_40658_40716[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (24))){
var inst_40602 = (state_40651[(9)]);
var inst_40611 = (state_40651[(10)]);
var inst_40625 = (state_40651[(11)]);
var inst_40625__$1 = inst_40602.call(null,inst_40611);
var state_40651__$1 = (function (){var statearr_40659 = state_40651;
(statearr_40659[(11)] = inst_40625__$1);

return statearr_40659;
})();
if(cljs.core.truth_(inst_40625__$1)){
var statearr_40660_40717 = state_40651__$1;
(statearr_40660_40717[(1)] = (29));

} else {
var statearr_40661_40718 = state_40651__$1;
(statearr_40661_40718[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (4))){
var inst_40569 = (state_40651[(2)]);
var state_40651__$1 = state_40651;
if(cljs.core.truth_(inst_40569)){
var statearr_40662_40719 = state_40651__$1;
(statearr_40662_40719[(1)] = (8));

} else {
var statearr_40663_40720 = state_40651__$1;
(statearr_40663_40720[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (15))){
var inst_40596 = (state_40651[(2)]);
var state_40651__$1 = state_40651;
if(cljs.core.truth_(inst_40596)){
var statearr_40664_40721 = state_40651__$1;
(statearr_40664_40721[(1)] = (19));

} else {
var statearr_40665_40722 = state_40651__$1;
(statearr_40665_40722[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (21))){
var inst_40601 = (state_40651[(12)]);
var inst_40601__$1 = (state_40651[(2)]);
var inst_40602 = cljs.core.get.call(null,inst_40601__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40603 = cljs.core.get.call(null,inst_40601__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40604 = cljs.core.get.call(null,inst_40601__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40651__$1 = (function (){var statearr_40666 = state_40651;
(statearr_40666[(12)] = inst_40601__$1);

(statearr_40666[(9)] = inst_40602);

(statearr_40666[(13)] = inst_40603);

return statearr_40666;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40651__$1,(22),inst_40604);
} else {
if((state_val_40652 === (31))){
var inst_40633 = (state_40651[(2)]);
var state_40651__$1 = state_40651;
if(cljs.core.truth_(inst_40633)){
var statearr_40667_40723 = state_40651__$1;
(statearr_40667_40723[(1)] = (32));

} else {
var statearr_40668_40724 = state_40651__$1;
(statearr_40668_40724[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (32))){
var inst_40610 = (state_40651[(14)]);
var state_40651__$1 = state_40651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40651__$1,(35),out,inst_40610);
} else {
if((state_val_40652 === (33))){
var inst_40601 = (state_40651[(12)]);
var inst_40578 = inst_40601;
var state_40651__$1 = (function (){var statearr_40669 = state_40651;
(statearr_40669[(7)] = inst_40578);

return statearr_40669;
})();
var statearr_40670_40725 = state_40651__$1;
(statearr_40670_40725[(2)] = null);

(statearr_40670_40725[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (13))){
var inst_40578 = (state_40651[(7)]);
var inst_40585 = inst_40578.cljs$lang$protocol_mask$partition0$;
var inst_40586 = (inst_40585 & (64));
var inst_40587 = inst_40578.cljs$core$ISeq$;
var inst_40588 = (cljs.core.PROTOCOL_SENTINEL === inst_40587);
var inst_40589 = ((inst_40586) || (inst_40588));
var state_40651__$1 = state_40651;
if(cljs.core.truth_(inst_40589)){
var statearr_40671_40726 = state_40651__$1;
(statearr_40671_40726[(1)] = (16));

} else {
var statearr_40672_40727 = state_40651__$1;
(statearr_40672_40727[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (22))){
var inst_40611 = (state_40651[(10)]);
var inst_40610 = (state_40651[(14)]);
var inst_40609 = (state_40651[(2)]);
var inst_40610__$1 = cljs.core.nth.call(null,inst_40609,(0),null);
var inst_40611__$1 = cljs.core.nth.call(null,inst_40609,(1),null);
var inst_40612 = (inst_40610__$1 == null);
var inst_40613 = cljs.core._EQ_.call(null,inst_40611__$1,change);
var inst_40614 = ((inst_40612) || (inst_40613));
var state_40651__$1 = (function (){var statearr_40673 = state_40651;
(statearr_40673[(10)] = inst_40611__$1);

(statearr_40673[(14)] = inst_40610__$1);

return statearr_40673;
})();
if(cljs.core.truth_(inst_40614)){
var statearr_40674_40728 = state_40651__$1;
(statearr_40674_40728[(1)] = (23));

} else {
var statearr_40675_40729 = state_40651__$1;
(statearr_40675_40729[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (36))){
var inst_40601 = (state_40651[(12)]);
var inst_40578 = inst_40601;
var state_40651__$1 = (function (){var statearr_40676 = state_40651;
(statearr_40676[(7)] = inst_40578);

return statearr_40676;
})();
var statearr_40677_40730 = state_40651__$1;
(statearr_40677_40730[(2)] = null);

(statearr_40677_40730[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (29))){
var inst_40625 = (state_40651[(11)]);
var state_40651__$1 = state_40651;
var statearr_40678_40731 = state_40651__$1;
(statearr_40678_40731[(2)] = inst_40625);

(statearr_40678_40731[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (6))){
var state_40651__$1 = state_40651;
var statearr_40679_40732 = state_40651__$1;
(statearr_40679_40732[(2)] = false);

(statearr_40679_40732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (28))){
var inst_40621 = (state_40651[(2)]);
var inst_40622 = calc_state.call(null);
var inst_40578 = inst_40622;
var state_40651__$1 = (function (){var statearr_40680 = state_40651;
(statearr_40680[(15)] = inst_40621);

(statearr_40680[(7)] = inst_40578);

return statearr_40680;
})();
var statearr_40681_40733 = state_40651__$1;
(statearr_40681_40733[(2)] = null);

(statearr_40681_40733[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (25))){
var inst_40647 = (state_40651[(2)]);
var state_40651__$1 = state_40651;
var statearr_40682_40734 = state_40651__$1;
(statearr_40682_40734[(2)] = inst_40647);

(statearr_40682_40734[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (34))){
var inst_40645 = (state_40651[(2)]);
var state_40651__$1 = state_40651;
var statearr_40683_40735 = state_40651__$1;
(statearr_40683_40735[(2)] = inst_40645);

(statearr_40683_40735[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (17))){
var state_40651__$1 = state_40651;
var statearr_40684_40736 = state_40651__$1;
(statearr_40684_40736[(2)] = false);

(statearr_40684_40736[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (3))){
var state_40651__$1 = state_40651;
var statearr_40685_40737 = state_40651__$1;
(statearr_40685_40737[(2)] = false);

(statearr_40685_40737[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (12))){
var inst_40649 = (state_40651[(2)]);
var state_40651__$1 = state_40651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40651__$1,inst_40649);
} else {
if((state_val_40652 === (2))){
var inst_40553 = (state_40651[(8)]);
var inst_40558 = inst_40553.cljs$lang$protocol_mask$partition0$;
var inst_40559 = (inst_40558 & (64));
var inst_40560 = inst_40553.cljs$core$ISeq$;
var inst_40561 = (cljs.core.PROTOCOL_SENTINEL === inst_40560);
var inst_40562 = ((inst_40559) || (inst_40561));
var state_40651__$1 = state_40651;
if(cljs.core.truth_(inst_40562)){
var statearr_40686_40738 = state_40651__$1;
(statearr_40686_40738[(1)] = (5));

} else {
var statearr_40687_40739 = state_40651__$1;
(statearr_40687_40739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (23))){
var inst_40610 = (state_40651[(14)]);
var inst_40616 = (inst_40610 == null);
var state_40651__$1 = state_40651;
if(cljs.core.truth_(inst_40616)){
var statearr_40688_40740 = state_40651__$1;
(statearr_40688_40740[(1)] = (26));

} else {
var statearr_40689_40741 = state_40651__$1;
(statearr_40689_40741[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (35))){
var inst_40636 = (state_40651[(2)]);
var state_40651__$1 = state_40651;
if(cljs.core.truth_(inst_40636)){
var statearr_40690_40742 = state_40651__$1;
(statearr_40690_40742[(1)] = (36));

} else {
var statearr_40691_40743 = state_40651__$1;
(statearr_40691_40743[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (19))){
var inst_40578 = (state_40651[(7)]);
var inst_40598 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40578);
var state_40651__$1 = state_40651;
var statearr_40692_40744 = state_40651__$1;
(statearr_40692_40744[(2)] = inst_40598);

(statearr_40692_40744[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (11))){
var inst_40578 = (state_40651[(7)]);
var inst_40582 = (inst_40578 == null);
var inst_40583 = cljs.core.not.call(null,inst_40582);
var state_40651__$1 = state_40651;
if(inst_40583){
var statearr_40693_40745 = state_40651__$1;
(statearr_40693_40745[(1)] = (13));

} else {
var statearr_40694_40746 = state_40651__$1;
(statearr_40694_40746[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (9))){
var inst_40553 = (state_40651[(8)]);
var state_40651__$1 = state_40651;
var statearr_40695_40747 = state_40651__$1;
(statearr_40695_40747[(2)] = inst_40553);

(statearr_40695_40747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (5))){
var state_40651__$1 = state_40651;
var statearr_40696_40748 = state_40651__$1;
(statearr_40696_40748[(2)] = true);

(statearr_40696_40748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (14))){
var state_40651__$1 = state_40651;
var statearr_40697_40749 = state_40651__$1;
(statearr_40697_40749[(2)] = false);

(statearr_40697_40749[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (26))){
var inst_40611 = (state_40651[(10)]);
var inst_40618 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_40611);
var state_40651__$1 = state_40651;
var statearr_40698_40750 = state_40651__$1;
(statearr_40698_40750[(2)] = inst_40618);

(statearr_40698_40750[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (16))){
var state_40651__$1 = state_40651;
var statearr_40699_40751 = state_40651__$1;
(statearr_40699_40751[(2)] = true);

(statearr_40699_40751[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (38))){
var inst_40641 = (state_40651[(2)]);
var state_40651__$1 = state_40651;
var statearr_40700_40752 = state_40651__$1;
(statearr_40700_40752[(2)] = inst_40641);

(statearr_40700_40752[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (30))){
var inst_40602 = (state_40651[(9)]);
var inst_40611 = (state_40651[(10)]);
var inst_40603 = (state_40651[(13)]);
var inst_40628 = cljs.core.empty_QMARK_.call(null,inst_40602);
var inst_40629 = inst_40603.call(null,inst_40611);
var inst_40630 = cljs.core.not.call(null,inst_40629);
var inst_40631 = ((inst_40628) && (inst_40630));
var state_40651__$1 = state_40651;
var statearr_40701_40753 = state_40651__$1;
(statearr_40701_40753[(2)] = inst_40631);

(statearr_40701_40753[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (10))){
var inst_40553 = (state_40651[(8)]);
var inst_40574 = (state_40651[(2)]);
var inst_40575 = cljs.core.get.call(null,inst_40574,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40576 = cljs.core.get.call(null,inst_40574,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40577 = cljs.core.get.call(null,inst_40574,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40578 = inst_40553;
var state_40651__$1 = (function (){var statearr_40702 = state_40651;
(statearr_40702[(16)] = inst_40576);

(statearr_40702[(7)] = inst_40578);

(statearr_40702[(17)] = inst_40577);

(statearr_40702[(18)] = inst_40575);

return statearr_40702;
})();
var statearr_40703_40754 = state_40651__$1;
(statearr_40703_40754[(2)] = null);

(statearr_40703_40754[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (18))){
var inst_40593 = (state_40651[(2)]);
var state_40651__$1 = state_40651;
var statearr_40704_40755 = state_40651__$1;
(statearr_40704_40755[(2)] = inst_40593);

(statearr_40704_40755[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (37))){
var state_40651__$1 = state_40651;
var statearr_40705_40756 = state_40651__$1;
(statearr_40705_40756[(2)] = null);

(statearr_40705_40756[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40652 === (8))){
var inst_40553 = (state_40651[(8)]);
var inst_40571 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40553);
var state_40651__$1 = state_40651;
var statearr_40706_40757 = state_40651__$1;
(statearr_40706_40757[(2)] = inst_40571);

(statearr_40706_40757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39652__auto___40711,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__39562__auto__,c__39652__auto___40711,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__39563__auto__ = null;
var cljs$core$async$mix_$_state_machine__39563__auto____0 = (function (){
var statearr_40707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40707[(0)] = cljs$core$async$mix_$_state_machine__39563__auto__);

(statearr_40707[(1)] = (1));

return statearr_40707;
});
var cljs$core$async$mix_$_state_machine__39563__auto____1 = (function (state_40651){
while(true){
var ret_value__39564__auto__ = (function (){try{while(true){
var result__39565__auto__ = switch__39562__auto__.call(null,state_40651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39565__auto__;
}
break;
}
}catch (e40708){if((e40708 instanceof Object)){
var ex__39566__auto__ = e40708;
var statearr_40709_40758 = state_40651;
(statearr_40709_40758[(5)] = ex__39566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40759 = state_40651;
state_40651 = G__40759;
continue;
} else {
return ret_value__39564__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__39563__auto__ = function(state_40651){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__39563__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__39563__auto____1.call(this,state_40651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__39563__auto____0;
cljs$core$async$mix_$_state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__39563__auto____1;
return cljs$core$async$mix_$_state_machine__39563__auto__;
})()
;})(switch__39562__auto__,c__39652__auto___40711,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__39654__auto__ = (function (){var statearr_40710 = f__39653__auto__.call(null);
(statearr_40710[(6)] = c__39652__auto___40711);

return statearr_40710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39654__auto__);
});})(c__39652__auto___40711,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4229__auto__ = (((p == null))?null:p);
var m__4230__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4230__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4229__auto__ = (((p == null))?null:p);
var m__4230__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,p,v,ch);
} else {
var m__4230__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__40761 = arguments.length;
switch (G__40761) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4229__auto__ = (((p == null))?null:p);
var m__4230__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,p);
} else {
var m__4230__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4229__auto__ = (((p == null))?null:p);
var m__4230__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,p,v);
} else {
var m__4230__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__40765 = arguments.length;
switch (G__40765) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3936__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3936__auto__,mults){
return (function (p1__40763_SHARP_){
if(cljs.core.truth_(p1__40763_SHARP_.call(null,topic))){
return p1__40763_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40763_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3936__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40766 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40766 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40767){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40767 = meta40767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40768,meta40767__$1){
var self__ = this;
var _40768__$1 = this;
return (new cljs.core.async.t_cljs$core$async40766(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40767__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40766.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40768){
var self__ = this;
var _40768__$1 = this;
return self__.meta40767;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40766.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40766.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40766.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40766.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40766.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40766.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40766.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40766.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40767","meta40767",-693042839,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40766.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40766.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40766";

cljs.core.async.t_cljs$core$async40766.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async40766");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40766.
 */
cljs.core.async.__GT_t_cljs$core$async40766 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async40766(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40767){
return (new cljs.core.async.t_cljs$core$async40766(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40767));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async40766(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39652__auto___40886 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39652__auto___40886,mults,ensure_mult,p){
return (function (){
var f__39653__auto__ = (function (){var switch__39562__auto__ = ((function (c__39652__auto___40886,mults,ensure_mult,p){
return (function (state_40840){
var state_val_40841 = (state_40840[(1)]);
if((state_val_40841 === (7))){
var inst_40836 = (state_40840[(2)]);
var state_40840__$1 = state_40840;
var statearr_40842_40887 = state_40840__$1;
(statearr_40842_40887[(2)] = inst_40836);

(statearr_40842_40887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40841 === (20))){
var state_40840__$1 = state_40840;
var statearr_40843_40888 = state_40840__$1;
(statearr_40843_40888[(2)] = null);

(statearr_40843_40888[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40841 === (1))){
var state_40840__$1 = state_40840;
var statearr_40844_40889 = state_40840__$1;
(statearr_40844_40889[(2)] = null);

(statearr_40844_40889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40841 === (24))){
var inst_40819 = (state_40840[(7)]);
var inst_40828 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_40819);
var state_40840__$1 = state_40840;
var statearr_40845_40890 = state_40840__$1;
(statearr_40845_40890[(2)] = inst_40828);

(statearr_40845_40890[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40841 === (4))){
var inst_40771 = (state_40840[(8)]);
var inst_40771__$1 = (state_40840[(2)]);
var inst_40772 = (inst_40771__$1 == null);
var state_40840__$1 = (function (){var statearr_40846 = state_40840;
(statearr_40846[(8)] = inst_40771__$1);

return statearr_40846;
})();
if(cljs.core.truth_(inst_40772)){
var statearr_40847_40891 = state_40840__$1;
(statearr_40847_40891[(1)] = (5));

} else {
var statearr_40848_40892 = state_40840__$1;
(statearr_40848_40892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40841 === (15))){
var inst_40813 = (state_40840[(2)]);
var state_40840__$1 = state_40840;
var statearr_40849_40893 = state_40840__$1;
(statearr_40849_40893[(2)] = inst_40813);

(statearr_40849_40893[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40841 === (21))){
var inst_40833 = (state_40840[(2)]);
var state_40840__$1 = (function (){var statearr_40850 = state_40840;
(statearr_40850[(9)] = inst_40833);

return statearr_40850;
})();
var statearr_40851_40894 = state_40840__$1;
(statearr_40851_40894[(2)] = null);

(statearr_40851_40894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40841 === (13))){
var inst_40795 = (state_40840[(10)]);
var inst_40797 = cljs.core.chunked_seq_QMARK_.call(null,inst_40795);
var state_40840__$1 = state_40840;
if(inst_40797){
var statearr_40852_40895 = state_40840__$1;
(statearr_40852_40895[(1)] = (16));

} else {
var statearr_40853_40896 = state_40840__$1;
(statearr_40853_40896[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40841 === (22))){
var inst_40825 = (state_40840[(2)]);
var state_40840__$1 = state_40840;
if(cljs.core.truth_(inst_40825)){
var statearr_40854_40897 = state_40840__$1;
(statearr_40854_40897[(1)] = (23));

} else {
var statearr_40855_40898 = state_40840__$1;
(statearr_40855_40898[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40841 === (6))){
var inst_40821 = (state_40840[(11)]);
var inst_40771 = (state_40840[(8)]);
var inst_40819 = (state_40840[(7)]);
var inst_40819__$1 = topic_fn.call(null,inst_40771);
var inst_40820 = cljs.core.deref.call(null,mults);
var inst_40821__$1 = cljs.core.get.call(null,inst_40820,inst_40819__$1);
var state_40840__$1 = (function (){var statearr_40856 = state_40840;
(statearr_40856[(11)] = inst_40821__$1);

(statearr_40856[(7)] = inst_40819__$1);

return statearr_40856;
})();
if(cljs.core.truth_(inst_40821__$1)){
var statearr_40857_40899 = state_40840__$1;
(statearr_40857_40899[(1)] = (19));

} else {
var statearr_40858_40900 = state_40840__$1;
(statearr_40858_40900[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40841 === (25))){
var inst_40830 = (state_40840[(2)]);
var state_40840__$1 = state_40840;
var statearr_40859_40901 = state_40840__$1;
(statearr_40859_40901[(2)] = inst_40830);

(statearr_40859_40901[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40841 === (17))){
var inst_40795 = (state_40840[(10)]);
var inst_40804 = cljs.core.first.call(null,inst_40795);
var inst_40805 = cljs.core.async.muxch_STAR_.call(null,inst_40804);
var inst_40806 = cljs.core.async.close_BANG_.call(null,inst_40805);
var inst_40807 = cljs.core.next.call(null,inst_40795);
var inst_40781 = inst_40807;
var inst_40782 = null;
var inst_40783 = (0);
var inst_40784 = (0);
var state_40840__$1 = (function (){var statearr_40860 = state_40840;
(statearr_40860[(12)] = inst_40783);

(statearr_40860[(13)] = inst_40781);

(statearr_40860[(14)] = inst_40782);

(statearr_40860[(15)] = inst_40784);

(statearr_40860[(16)] = inst_40806);

return statearr_40860;
})();
var statearr_40861_40902 = state_40840__$1;
(statearr_40861_40902[(2)] = null);

(statearr_40861_40902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40841 === (3))){
var inst_40838 = (state_40840[(2)]);
var state_40840__$1 = state_40840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40840__$1,inst_40838);
} else {
if((state_val_40841 === (12))){
var inst_40815 = (state_40840[(2)]);
var state_40840__$1 = state_40840;
var statearr_40862_40903 = state_40840__$1;
(statearr_40862_40903[(2)] = inst_40815);

(statearr_40862_40903[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40841 === (2))){
var state_40840__$1 = state_40840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40840__$1,(4),ch);
} else {
if((state_val_40841 === (23))){
var state_40840__$1 = state_40840;
var statearr_40863_40904 = state_40840__$1;
(statearr_40863_40904[(2)] = null);

(statearr_40863_40904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40841 === (19))){
var inst_40821 = (state_40840[(11)]);
var inst_40771 = (state_40840[(8)]);
var inst_40823 = cljs.core.async.muxch_STAR_.call(null,inst_40821);
var state_40840__$1 = state_40840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40840__$1,(22),inst_40823,inst_40771);
} else {
if((state_val_40841 === (11))){
var inst_40781 = (state_40840[(13)]);
var inst_40795 = (state_40840[(10)]);
var inst_40795__$1 = cljs.core.seq.call(null,inst_40781);
var state_40840__$1 = (function (){var statearr_40864 = state_40840;
(statearr_40864[(10)] = inst_40795__$1);

return statearr_40864;
})();
if(inst_40795__$1){
var statearr_40865_40905 = state_40840__$1;
(statearr_40865_40905[(1)] = (13));

} else {
var statearr_40866_40906 = state_40840__$1;
(statearr_40866_40906[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40841 === (9))){
var inst_40817 = (state_40840[(2)]);
var state_40840__$1 = state_40840;
var statearr_40867_40907 = state_40840__$1;
(statearr_40867_40907[(2)] = inst_40817);

(statearr_40867_40907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40841 === (5))){
var inst_40778 = cljs.core.deref.call(null,mults);
var inst_40779 = cljs.core.vals.call(null,inst_40778);
var inst_40780 = cljs.core.seq.call(null,inst_40779);
var inst_40781 = inst_40780;
var inst_40782 = null;
var inst_40783 = (0);
var inst_40784 = (0);
var state_40840__$1 = (function (){var statearr_40868 = state_40840;
(statearr_40868[(12)] = inst_40783);

(statearr_40868[(13)] = inst_40781);

(statearr_40868[(14)] = inst_40782);

(statearr_40868[(15)] = inst_40784);

return statearr_40868;
})();
var statearr_40869_40908 = state_40840__$1;
(statearr_40869_40908[(2)] = null);

(statearr_40869_40908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40841 === (14))){
var state_40840__$1 = state_40840;
var statearr_40873_40909 = state_40840__$1;
(statearr_40873_40909[(2)] = null);

(statearr_40873_40909[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40841 === (16))){
var inst_40795 = (state_40840[(10)]);
var inst_40799 = cljs.core.chunk_first.call(null,inst_40795);
var inst_40800 = cljs.core.chunk_rest.call(null,inst_40795);
var inst_40801 = cljs.core.count.call(null,inst_40799);
var inst_40781 = inst_40800;
var inst_40782 = inst_40799;
var inst_40783 = inst_40801;
var inst_40784 = (0);
var state_40840__$1 = (function (){var statearr_40874 = state_40840;
(statearr_40874[(12)] = inst_40783);

(statearr_40874[(13)] = inst_40781);

(statearr_40874[(14)] = inst_40782);

(statearr_40874[(15)] = inst_40784);

return statearr_40874;
})();
var statearr_40875_40910 = state_40840__$1;
(statearr_40875_40910[(2)] = null);

(statearr_40875_40910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40841 === (10))){
var inst_40783 = (state_40840[(12)]);
var inst_40781 = (state_40840[(13)]);
var inst_40782 = (state_40840[(14)]);
var inst_40784 = (state_40840[(15)]);
var inst_40789 = cljs.core._nth.call(null,inst_40782,inst_40784);
var inst_40790 = cljs.core.async.muxch_STAR_.call(null,inst_40789);
var inst_40791 = cljs.core.async.close_BANG_.call(null,inst_40790);
var inst_40792 = (inst_40784 + (1));
var tmp40870 = inst_40783;
var tmp40871 = inst_40781;
var tmp40872 = inst_40782;
var inst_40781__$1 = tmp40871;
var inst_40782__$1 = tmp40872;
var inst_40783__$1 = tmp40870;
var inst_40784__$1 = inst_40792;
var state_40840__$1 = (function (){var statearr_40876 = state_40840;
(statearr_40876[(12)] = inst_40783__$1);

(statearr_40876[(13)] = inst_40781__$1);

(statearr_40876[(14)] = inst_40782__$1);

(statearr_40876[(17)] = inst_40791);

(statearr_40876[(15)] = inst_40784__$1);

return statearr_40876;
})();
var statearr_40877_40911 = state_40840__$1;
(statearr_40877_40911[(2)] = null);

(statearr_40877_40911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40841 === (18))){
var inst_40810 = (state_40840[(2)]);
var state_40840__$1 = state_40840;
var statearr_40878_40912 = state_40840__$1;
(statearr_40878_40912[(2)] = inst_40810);

(statearr_40878_40912[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40841 === (8))){
var inst_40783 = (state_40840[(12)]);
var inst_40784 = (state_40840[(15)]);
var inst_40786 = (inst_40784 < inst_40783);
var inst_40787 = inst_40786;
var state_40840__$1 = state_40840;
if(cljs.core.truth_(inst_40787)){
var statearr_40879_40913 = state_40840__$1;
(statearr_40879_40913[(1)] = (10));

} else {
var statearr_40880_40914 = state_40840__$1;
(statearr_40880_40914[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39652__auto___40886,mults,ensure_mult,p))
;
return ((function (switch__39562__auto__,c__39652__auto___40886,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__39563__auto__ = null;
var cljs$core$async$state_machine__39563__auto____0 = (function (){
var statearr_40881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40881[(0)] = cljs$core$async$state_machine__39563__auto__);

(statearr_40881[(1)] = (1));

return statearr_40881;
});
var cljs$core$async$state_machine__39563__auto____1 = (function (state_40840){
while(true){
var ret_value__39564__auto__ = (function (){try{while(true){
var result__39565__auto__ = switch__39562__auto__.call(null,state_40840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39565__auto__;
}
break;
}
}catch (e40882){if((e40882 instanceof Object)){
var ex__39566__auto__ = e40882;
var statearr_40883_40915 = state_40840;
(statearr_40883_40915[(5)] = ex__39566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40916 = state_40840;
state_40840 = G__40916;
continue;
} else {
return ret_value__39564__auto__;
}
break;
}
});
cljs$core$async$state_machine__39563__auto__ = function(state_40840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39563__auto____1.call(this,state_40840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39563__auto____0;
cljs$core$async$state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39563__auto____1;
return cljs$core$async$state_machine__39563__auto__;
})()
;})(switch__39562__auto__,c__39652__auto___40886,mults,ensure_mult,p))
})();
var state__39654__auto__ = (function (){var statearr_40884 = f__39653__auto__.call(null);
(statearr_40884[(6)] = c__39652__auto___40886);

return statearr_40884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39654__auto__);
});})(c__39652__auto___40886,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__40918 = arguments.length;
switch (G__40918) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__40921 = arguments.length;
switch (G__40921) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__40924 = arguments.length;
switch (G__40924) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__39652__auto___40991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39652__auto___40991,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__39653__auto__ = (function (){var switch__39562__auto__ = ((function (c__39652__auto___40991,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40963){
var state_val_40964 = (state_40963[(1)]);
if((state_val_40964 === (7))){
var state_40963__$1 = state_40963;
var statearr_40965_40992 = state_40963__$1;
(statearr_40965_40992[(2)] = null);

(statearr_40965_40992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (1))){
var state_40963__$1 = state_40963;
var statearr_40966_40993 = state_40963__$1;
(statearr_40966_40993[(2)] = null);

(statearr_40966_40993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (4))){
var inst_40927 = (state_40963[(7)]);
var inst_40929 = (inst_40927 < cnt);
var state_40963__$1 = state_40963;
if(cljs.core.truth_(inst_40929)){
var statearr_40967_40994 = state_40963__$1;
(statearr_40967_40994[(1)] = (6));

} else {
var statearr_40968_40995 = state_40963__$1;
(statearr_40968_40995[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (15))){
var inst_40959 = (state_40963[(2)]);
var state_40963__$1 = state_40963;
var statearr_40969_40996 = state_40963__$1;
(statearr_40969_40996[(2)] = inst_40959);

(statearr_40969_40996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (13))){
var inst_40952 = cljs.core.async.close_BANG_.call(null,out);
var state_40963__$1 = state_40963;
var statearr_40970_40997 = state_40963__$1;
(statearr_40970_40997[(2)] = inst_40952);

(statearr_40970_40997[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (6))){
var state_40963__$1 = state_40963;
var statearr_40971_40998 = state_40963__$1;
(statearr_40971_40998[(2)] = null);

(statearr_40971_40998[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (3))){
var inst_40961 = (state_40963[(2)]);
var state_40963__$1 = state_40963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40963__$1,inst_40961);
} else {
if((state_val_40964 === (12))){
var inst_40949 = (state_40963[(8)]);
var inst_40949__$1 = (state_40963[(2)]);
var inst_40950 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_40949__$1);
var state_40963__$1 = (function (){var statearr_40972 = state_40963;
(statearr_40972[(8)] = inst_40949__$1);

return statearr_40972;
})();
if(cljs.core.truth_(inst_40950)){
var statearr_40973_40999 = state_40963__$1;
(statearr_40973_40999[(1)] = (13));

} else {
var statearr_40974_41000 = state_40963__$1;
(statearr_40974_41000[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (2))){
var inst_40926 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_40927 = (0);
var state_40963__$1 = (function (){var statearr_40975 = state_40963;
(statearr_40975[(9)] = inst_40926);

(statearr_40975[(7)] = inst_40927);

return statearr_40975;
})();
var statearr_40976_41001 = state_40963__$1;
(statearr_40976_41001[(2)] = null);

(statearr_40976_41001[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (11))){
var inst_40927 = (state_40963[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40963,(10),Object,null,(9));
var inst_40936 = chs__$1.call(null,inst_40927);
var inst_40937 = done.call(null,inst_40927);
var inst_40938 = cljs.core.async.take_BANG_.call(null,inst_40936,inst_40937);
var state_40963__$1 = state_40963;
var statearr_40977_41002 = state_40963__$1;
(statearr_40977_41002[(2)] = inst_40938);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40963__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (9))){
var inst_40927 = (state_40963[(7)]);
var inst_40940 = (state_40963[(2)]);
var inst_40941 = (inst_40927 + (1));
var inst_40927__$1 = inst_40941;
var state_40963__$1 = (function (){var statearr_40978 = state_40963;
(statearr_40978[(10)] = inst_40940);

(statearr_40978[(7)] = inst_40927__$1);

return statearr_40978;
})();
var statearr_40979_41003 = state_40963__$1;
(statearr_40979_41003[(2)] = null);

(statearr_40979_41003[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (5))){
var inst_40947 = (state_40963[(2)]);
var state_40963__$1 = (function (){var statearr_40980 = state_40963;
(statearr_40980[(11)] = inst_40947);

return statearr_40980;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40963__$1,(12),dchan);
} else {
if((state_val_40964 === (14))){
var inst_40949 = (state_40963[(8)]);
var inst_40954 = cljs.core.apply.call(null,f,inst_40949);
var state_40963__$1 = state_40963;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40963__$1,(16),out,inst_40954);
} else {
if((state_val_40964 === (16))){
var inst_40956 = (state_40963[(2)]);
var state_40963__$1 = (function (){var statearr_40981 = state_40963;
(statearr_40981[(12)] = inst_40956);

return statearr_40981;
})();
var statearr_40982_41004 = state_40963__$1;
(statearr_40982_41004[(2)] = null);

(statearr_40982_41004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (10))){
var inst_40931 = (state_40963[(2)]);
var inst_40932 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_40963__$1 = (function (){var statearr_40983 = state_40963;
(statearr_40983[(13)] = inst_40931);

return statearr_40983;
})();
var statearr_40984_41005 = state_40963__$1;
(statearr_40984_41005[(2)] = inst_40932);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40963__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (8))){
var inst_40945 = (state_40963[(2)]);
var state_40963__$1 = state_40963;
var statearr_40985_41006 = state_40963__$1;
(statearr_40985_41006[(2)] = inst_40945);

(statearr_40985_41006[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39652__auto___40991,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__39562__auto__,c__39652__auto___40991,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__39563__auto__ = null;
var cljs$core$async$state_machine__39563__auto____0 = (function (){
var statearr_40986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40986[(0)] = cljs$core$async$state_machine__39563__auto__);

(statearr_40986[(1)] = (1));

return statearr_40986;
});
var cljs$core$async$state_machine__39563__auto____1 = (function (state_40963){
while(true){
var ret_value__39564__auto__ = (function (){try{while(true){
var result__39565__auto__ = switch__39562__auto__.call(null,state_40963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39565__auto__;
}
break;
}
}catch (e40987){if((e40987 instanceof Object)){
var ex__39566__auto__ = e40987;
var statearr_40988_41007 = state_40963;
(statearr_40988_41007[(5)] = ex__39566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41008 = state_40963;
state_40963 = G__41008;
continue;
} else {
return ret_value__39564__auto__;
}
break;
}
});
cljs$core$async$state_machine__39563__auto__ = function(state_40963){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39563__auto____1.call(this,state_40963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39563__auto____0;
cljs$core$async$state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39563__auto____1;
return cljs$core$async$state_machine__39563__auto__;
})()
;})(switch__39562__auto__,c__39652__auto___40991,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__39654__auto__ = (function (){var statearr_40989 = f__39653__auto__.call(null);
(statearr_40989[(6)] = c__39652__auto___40991);

return statearr_40989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39654__auto__);
});})(c__39652__auto___40991,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__41011 = arguments.length;
switch (G__41011) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39652__auto___41065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39652__auto___41065,out){
return (function (){
var f__39653__auto__ = (function (){var switch__39562__auto__ = ((function (c__39652__auto___41065,out){
return (function (state_41043){
var state_val_41044 = (state_41043[(1)]);
if((state_val_41044 === (7))){
var inst_41023 = (state_41043[(7)]);
var inst_41022 = (state_41043[(8)]);
var inst_41022__$1 = (state_41043[(2)]);
var inst_41023__$1 = cljs.core.nth.call(null,inst_41022__$1,(0),null);
var inst_41024 = cljs.core.nth.call(null,inst_41022__$1,(1),null);
var inst_41025 = (inst_41023__$1 == null);
var state_41043__$1 = (function (){var statearr_41045 = state_41043;
(statearr_41045[(9)] = inst_41024);

(statearr_41045[(7)] = inst_41023__$1);

(statearr_41045[(8)] = inst_41022__$1);

return statearr_41045;
})();
if(cljs.core.truth_(inst_41025)){
var statearr_41046_41066 = state_41043__$1;
(statearr_41046_41066[(1)] = (8));

} else {
var statearr_41047_41067 = state_41043__$1;
(statearr_41047_41067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41044 === (1))){
var inst_41012 = cljs.core.vec.call(null,chs);
var inst_41013 = inst_41012;
var state_41043__$1 = (function (){var statearr_41048 = state_41043;
(statearr_41048[(10)] = inst_41013);

return statearr_41048;
})();
var statearr_41049_41068 = state_41043__$1;
(statearr_41049_41068[(2)] = null);

(statearr_41049_41068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41044 === (4))){
var inst_41013 = (state_41043[(10)]);
var state_41043__$1 = state_41043;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41043__$1,(7),inst_41013);
} else {
if((state_val_41044 === (6))){
var inst_41039 = (state_41043[(2)]);
var state_41043__$1 = state_41043;
var statearr_41050_41069 = state_41043__$1;
(statearr_41050_41069[(2)] = inst_41039);

(statearr_41050_41069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41044 === (3))){
var inst_41041 = (state_41043[(2)]);
var state_41043__$1 = state_41043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41043__$1,inst_41041);
} else {
if((state_val_41044 === (2))){
var inst_41013 = (state_41043[(10)]);
var inst_41015 = cljs.core.count.call(null,inst_41013);
var inst_41016 = (inst_41015 > (0));
var state_41043__$1 = state_41043;
if(cljs.core.truth_(inst_41016)){
var statearr_41052_41070 = state_41043__$1;
(statearr_41052_41070[(1)] = (4));

} else {
var statearr_41053_41071 = state_41043__$1;
(statearr_41053_41071[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41044 === (11))){
var inst_41013 = (state_41043[(10)]);
var inst_41032 = (state_41043[(2)]);
var tmp41051 = inst_41013;
var inst_41013__$1 = tmp41051;
var state_41043__$1 = (function (){var statearr_41054 = state_41043;
(statearr_41054[(11)] = inst_41032);

(statearr_41054[(10)] = inst_41013__$1);

return statearr_41054;
})();
var statearr_41055_41072 = state_41043__$1;
(statearr_41055_41072[(2)] = null);

(statearr_41055_41072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41044 === (9))){
var inst_41023 = (state_41043[(7)]);
var state_41043__$1 = state_41043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41043__$1,(11),out,inst_41023);
} else {
if((state_val_41044 === (5))){
var inst_41037 = cljs.core.async.close_BANG_.call(null,out);
var state_41043__$1 = state_41043;
var statearr_41056_41073 = state_41043__$1;
(statearr_41056_41073[(2)] = inst_41037);

(statearr_41056_41073[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41044 === (10))){
var inst_41035 = (state_41043[(2)]);
var state_41043__$1 = state_41043;
var statearr_41057_41074 = state_41043__$1;
(statearr_41057_41074[(2)] = inst_41035);

(statearr_41057_41074[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41044 === (8))){
var inst_41024 = (state_41043[(9)]);
var inst_41013 = (state_41043[(10)]);
var inst_41023 = (state_41043[(7)]);
var inst_41022 = (state_41043[(8)]);
var inst_41027 = (function (){var cs = inst_41013;
var vec__41018 = inst_41022;
var v = inst_41023;
var c = inst_41024;
return ((function (cs,vec__41018,v,c,inst_41024,inst_41013,inst_41023,inst_41022,state_val_41044,c__39652__auto___41065,out){
return (function (p1__41009_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__41009_SHARP_);
});
;})(cs,vec__41018,v,c,inst_41024,inst_41013,inst_41023,inst_41022,state_val_41044,c__39652__auto___41065,out))
})();
var inst_41028 = cljs.core.filterv.call(null,inst_41027,inst_41013);
var inst_41013__$1 = inst_41028;
var state_41043__$1 = (function (){var statearr_41058 = state_41043;
(statearr_41058[(10)] = inst_41013__$1);

return statearr_41058;
})();
var statearr_41059_41075 = state_41043__$1;
(statearr_41059_41075[(2)] = null);

(statearr_41059_41075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__39652__auto___41065,out))
;
return ((function (switch__39562__auto__,c__39652__auto___41065,out){
return (function() {
var cljs$core$async$state_machine__39563__auto__ = null;
var cljs$core$async$state_machine__39563__auto____0 = (function (){
var statearr_41060 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41060[(0)] = cljs$core$async$state_machine__39563__auto__);

(statearr_41060[(1)] = (1));

return statearr_41060;
});
var cljs$core$async$state_machine__39563__auto____1 = (function (state_41043){
while(true){
var ret_value__39564__auto__ = (function (){try{while(true){
var result__39565__auto__ = switch__39562__auto__.call(null,state_41043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39565__auto__;
}
break;
}
}catch (e41061){if((e41061 instanceof Object)){
var ex__39566__auto__ = e41061;
var statearr_41062_41076 = state_41043;
(statearr_41062_41076[(5)] = ex__39566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41077 = state_41043;
state_41043 = G__41077;
continue;
} else {
return ret_value__39564__auto__;
}
break;
}
});
cljs$core$async$state_machine__39563__auto__ = function(state_41043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39563__auto____1.call(this,state_41043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39563__auto____0;
cljs$core$async$state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39563__auto____1;
return cljs$core$async$state_machine__39563__auto__;
})()
;})(switch__39562__auto__,c__39652__auto___41065,out))
})();
var state__39654__auto__ = (function (){var statearr_41063 = f__39653__auto__.call(null);
(statearr_41063[(6)] = c__39652__auto___41065);

return statearr_41063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39654__auto__);
});})(c__39652__auto___41065,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__41079 = arguments.length;
switch (G__41079) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39652__auto___41124 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39652__auto___41124,out){
return (function (){
var f__39653__auto__ = (function (){var switch__39562__auto__ = ((function (c__39652__auto___41124,out){
return (function (state_41103){
var state_val_41104 = (state_41103[(1)]);
if((state_val_41104 === (7))){
var inst_41085 = (state_41103[(7)]);
var inst_41085__$1 = (state_41103[(2)]);
var inst_41086 = (inst_41085__$1 == null);
var inst_41087 = cljs.core.not.call(null,inst_41086);
var state_41103__$1 = (function (){var statearr_41105 = state_41103;
(statearr_41105[(7)] = inst_41085__$1);

return statearr_41105;
})();
if(inst_41087){
var statearr_41106_41125 = state_41103__$1;
(statearr_41106_41125[(1)] = (8));

} else {
var statearr_41107_41126 = state_41103__$1;
(statearr_41107_41126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (1))){
var inst_41080 = (0);
var state_41103__$1 = (function (){var statearr_41108 = state_41103;
(statearr_41108[(8)] = inst_41080);

return statearr_41108;
})();
var statearr_41109_41127 = state_41103__$1;
(statearr_41109_41127[(2)] = null);

(statearr_41109_41127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (4))){
var state_41103__$1 = state_41103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41103__$1,(7),ch);
} else {
if((state_val_41104 === (6))){
var inst_41098 = (state_41103[(2)]);
var state_41103__$1 = state_41103;
var statearr_41110_41128 = state_41103__$1;
(statearr_41110_41128[(2)] = inst_41098);

(statearr_41110_41128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (3))){
var inst_41100 = (state_41103[(2)]);
var inst_41101 = cljs.core.async.close_BANG_.call(null,out);
var state_41103__$1 = (function (){var statearr_41111 = state_41103;
(statearr_41111[(9)] = inst_41100);

return statearr_41111;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41103__$1,inst_41101);
} else {
if((state_val_41104 === (2))){
var inst_41080 = (state_41103[(8)]);
var inst_41082 = (inst_41080 < n);
var state_41103__$1 = state_41103;
if(cljs.core.truth_(inst_41082)){
var statearr_41112_41129 = state_41103__$1;
(statearr_41112_41129[(1)] = (4));

} else {
var statearr_41113_41130 = state_41103__$1;
(statearr_41113_41130[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (11))){
var inst_41080 = (state_41103[(8)]);
var inst_41090 = (state_41103[(2)]);
var inst_41091 = (inst_41080 + (1));
var inst_41080__$1 = inst_41091;
var state_41103__$1 = (function (){var statearr_41114 = state_41103;
(statearr_41114[(10)] = inst_41090);

(statearr_41114[(8)] = inst_41080__$1);

return statearr_41114;
})();
var statearr_41115_41131 = state_41103__$1;
(statearr_41115_41131[(2)] = null);

(statearr_41115_41131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (9))){
var state_41103__$1 = state_41103;
var statearr_41116_41132 = state_41103__$1;
(statearr_41116_41132[(2)] = null);

(statearr_41116_41132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (5))){
var state_41103__$1 = state_41103;
var statearr_41117_41133 = state_41103__$1;
(statearr_41117_41133[(2)] = null);

(statearr_41117_41133[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (10))){
var inst_41095 = (state_41103[(2)]);
var state_41103__$1 = state_41103;
var statearr_41118_41134 = state_41103__$1;
(statearr_41118_41134[(2)] = inst_41095);

(statearr_41118_41134[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (8))){
var inst_41085 = (state_41103[(7)]);
var state_41103__$1 = state_41103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41103__$1,(11),out,inst_41085);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__39652__auto___41124,out))
;
return ((function (switch__39562__auto__,c__39652__auto___41124,out){
return (function() {
var cljs$core$async$state_machine__39563__auto__ = null;
var cljs$core$async$state_machine__39563__auto____0 = (function (){
var statearr_41119 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41119[(0)] = cljs$core$async$state_machine__39563__auto__);

(statearr_41119[(1)] = (1));

return statearr_41119;
});
var cljs$core$async$state_machine__39563__auto____1 = (function (state_41103){
while(true){
var ret_value__39564__auto__ = (function (){try{while(true){
var result__39565__auto__ = switch__39562__auto__.call(null,state_41103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39565__auto__;
}
break;
}
}catch (e41120){if((e41120 instanceof Object)){
var ex__39566__auto__ = e41120;
var statearr_41121_41135 = state_41103;
(statearr_41121_41135[(5)] = ex__39566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41136 = state_41103;
state_41103 = G__41136;
continue;
} else {
return ret_value__39564__auto__;
}
break;
}
});
cljs$core$async$state_machine__39563__auto__ = function(state_41103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39563__auto____1.call(this,state_41103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39563__auto____0;
cljs$core$async$state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39563__auto____1;
return cljs$core$async$state_machine__39563__auto__;
})()
;})(switch__39562__auto__,c__39652__auto___41124,out))
})();
var state__39654__auto__ = (function (){var statearr_41122 = f__39653__auto__.call(null);
(statearr_41122[(6)] = c__39652__auto___41124);

return statearr_41122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39654__auto__);
});})(c__39652__auto___41124,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41138 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41138 = (function (f,ch,meta41139){
this.f = f;
this.ch = ch;
this.meta41139 = meta41139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41140,meta41139__$1){
var self__ = this;
var _41140__$1 = this;
return (new cljs.core.async.t_cljs$core$async41138(self__.f,self__.ch,meta41139__$1));
});

cljs.core.async.t_cljs$core$async41138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41140){
var self__ = this;
var _41140__$1 = this;
return self__.meta41139;
});

cljs.core.async.t_cljs$core$async41138.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41138.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41138.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41138.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41138.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41141 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41141 = (function (f,ch,meta41139,_,fn1,meta41142){
this.f = f;
this.ch = ch;
this.meta41139 = meta41139;
this._ = _;
this.fn1 = fn1;
this.meta41142 = meta41142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_41143,meta41142__$1){
var self__ = this;
var _41143__$1 = this;
return (new cljs.core.async.t_cljs$core$async41141(self__.f,self__.ch,self__.meta41139,self__._,self__.fn1,meta41142__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async41141.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_41143){
var self__ = this;
var _41143__$1 = this;
return self__.meta41142;
});})(___$1))
;

cljs.core.async.t_cljs$core$async41141.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41141.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async41141.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async41141.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__41137_SHARP_){
return f1.call(null,(((p1__41137_SHARP_ == null))?null:self__.f.call(null,p1__41137_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async41141.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41139","meta41139",-1675077050,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async41138","cljs.core.async/t_cljs$core$async41138",1853476993,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta41142","meta41142",-213875205,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async41141.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41141.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41141";

cljs.core.async.t_cljs$core$async41141.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async41141");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41141.
 */
cljs.core.async.__GT_t_cljs$core$async41141 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41141(f__$1,ch__$1,meta41139__$1,___$2,fn1__$1,meta41142){
return (new cljs.core.async.t_cljs$core$async41141(f__$1,ch__$1,meta41139__$1,___$2,fn1__$1,meta41142));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async41141(self__.f,self__.ch,self__.meta41139,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3925__auto__ = ret;
if(cljs.core.truth_(and__3925__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3925__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async41138.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41138.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async41138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41139","meta41139",-1675077050,null)], null);
});

cljs.core.async.t_cljs$core$async41138.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41138";

cljs.core.async.t_cljs$core$async41138.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async41138");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41138.
 */
cljs.core.async.__GT_t_cljs$core$async41138 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41138(f__$1,ch__$1,meta41139){
return (new cljs.core.async.t_cljs$core$async41138(f__$1,ch__$1,meta41139));
});

}

return (new cljs.core.async.t_cljs$core$async41138(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41144 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41144 = (function (f,ch,meta41145){
this.f = f;
this.ch = ch;
this.meta41145 = meta41145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41146,meta41145__$1){
var self__ = this;
var _41146__$1 = this;
return (new cljs.core.async.t_cljs$core$async41144(self__.f,self__.ch,meta41145__$1));
});

cljs.core.async.t_cljs$core$async41144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41146){
var self__ = this;
var _41146__$1 = this;
return self__.meta41145;
});

cljs.core.async.t_cljs$core$async41144.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41144.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41144.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41144.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async41144.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41144.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async41144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41145","meta41145",2006377512,null)], null);
});

cljs.core.async.t_cljs$core$async41144.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41144.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41144";

cljs.core.async.t_cljs$core$async41144.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async41144");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41144.
 */
cljs.core.async.__GT_t_cljs$core$async41144 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async41144(f__$1,ch__$1,meta41145){
return (new cljs.core.async.t_cljs$core$async41144(f__$1,ch__$1,meta41145));
});

}

return (new cljs.core.async.t_cljs$core$async41144(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41147 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41147 = (function (p,ch,meta41148){
this.p = p;
this.ch = ch;
this.meta41148 = meta41148;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41149,meta41148__$1){
var self__ = this;
var _41149__$1 = this;
return (new cljs.core.async.t_cljs$core$async41147(self__.p,self__.ch,meta41148__$1));
});

cljs.core.async.t_cljs$core$async41147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41149){
var self__ = this;
var _41149__$1 = this;
return self__.meta41148;
});

cljs.core.async.t_cljs$core$async41147.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41147.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41147.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41147.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41147.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async41147.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41147.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async41147.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41148","meta41148",-1270167664,null)], null);
});

cljs.core.async.t_cljs$core$async41147.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41147.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41147";

cljs.core.async.t_cljs$core$async41147.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async41147");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41147.
 */
cljs.core.async.__GT_t_cljs$core$async41147 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async41147(p__$1,ch__$1,meta41148){
return (new cljs.core.async.t_cljs$core$async41147(p__$1,ch__$1,meta41148));
});

}

return (new cljs.core.async.t_cljs$core$async41147(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__41151 = arguments.length;
switch (G__41151) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39652__auto___41191 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39652__auto___41191,out){
return (function (){
var f__39653__auto__ = (function (){var switch__39562__auto__ = ((function (c__39652__auto___41191,out){
return (function (state_41172){
var state_val_41173 = (state_41172[(1)]);
if((state_val_41173 === (7))){
var inst_41168 = (state_41172[(2)]);
var state_41172__$1 = state_41172;
var statearr_41174_41192 = state_41172__$1;
(statearr_41174_41192[(2)] = inst_41168);

(statearr_41174_41192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41173 === (1))){
var state_41172__$1 = state_41172;
var statearr_41175_41193 = state_41172__$1;
(statearr_41175_41193[(2)] = null);

(statearr_41175_41193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41173 === (4))){
var inst_41154 = (state_41172[(7)]);
var inst_41154__$1 = (state_41172[(2)]);
var inst_41155 = (inst_41154__$1 == null);
var state_41172__$1 = (function (){var statearr_41176 = state_41172;
(statearr_41176[(7)] = inst_41154__$1);

return statearr_41176;
})();
if(cljs.core.truth_(inst_41155)){
var statearr_41177_41194 = state_41172__$1;
(statearr_41177_41194[(1)] = (5));

} else {
var statearr_41178_41195 = state_41172__$1;
(statearr_41178_41195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41173 === (6))){
var inst_41154 = (state_41172[(7)]);
var inst_41159 = p.call(null,inst_41154);
var state_41172__$1 = state_41172;
if(cljs.core.truth_(inst_41159)){
var statearr_41179_41196 = state_41172__$1;
(statearr_41179_41196[(1)] = (8));

} else {
var statearr_41180_41197 = state_41172__$1;
(statearr_41180_41197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41173 === (3))){
var inst_41170 = (state_41172[(2)]);
var state_41172__$1 = state_41172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41172__$1,inst_41170);
} else {
if((state_val_41173 === (2))){
var state_41172__$1 = state_41172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41172__$1,(4),ch);
} else {
if((state_val_41173 === (11))){
var inst_41162 = (state_41172[(2)]);
var state_41172__$1 = state_41172;
var statearr_41181_41198 = state_41172__$1;
(statearr_41181_41198[(2)] = inst_41162);

(statearr_41181_41198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41173 === (9))){
var state_41172__$1 = state_41172;
var statearr_41182_41199 = state_41172__$1;
(statearr_41182_41199[(2)] = null);

(statearr_41182_41199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41173 === (5))){
var inst_41157 = cljs.core.async.close_BANG_.call(null,out);
var state_41172__$1 = state_41172;
var statearr_41183_41200 = state_41172__$1;
(statearr_41183_41200[(2)] = inst_41157);

(statearr_41183_41200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41173 === (10))){
var inst_41165 = (state_41172[(2)]);
var state_41172__$1 = (function (){var statearr_41184 = state_41172;
(statearr_41184[(8)] = inst_41165);

return statearr_41184;
})();
var statearr_41185_41201 = state_41172__$1;
(statearr_41185_41201[(2)] = null);

(statearr_41185_41201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41173 === (8))){
var inst_41154 = (state_41172[(7)]);
var state_41172__$1 = state_41172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41172__$1,(11),out,inst_41154);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__39652__auto___41191,out))
;
return ((function (switch__39562__auto__,c__39652__auto___41191,out){
return (function() {
var cljs$core$async$state_machine__39563__auto__ = null;
var cljs$core$async$state_machine__39563__auto____0 = (function (){
var statearr_41186 = [null,null,null,null,null,null,null,null,null];
(statearr_41186[(0)] = cljs$core$async$state_machine__39563__auto__);

(statearr_41186[(1)] = (1));

return statearr_41186;
});
var cljs$core$async$state_machine__39563__auto____1 = (function (state_41172){
while(true){
var ret_value__39564__auto__ = (function (){try{while(true){
var result__39565__auto__ = switch__39562__auto__.call(null,state_41172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39565__auto__;
}
break;
}
}catch (e41187){if((e41187 instanceof Object)){
var ex__39566__auto__ = e41187;
var statearr_41188_41202 = state_41172;
(statearr_41188_41202[(5)] = ex__39566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41203 = state_41172;
state_41172 = G__41203;
continue;
} else {
return ret_value__39564__auto__;
}
break;
}
});
cljs$core$async$state_machine__39563__auto__ = function(state_41172){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39563__auto____1.call(this,state_41172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39563__auto____0;
cljs$core$async$state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39563__auto____1;
return cljs$core$async$state_machine__39563__auto__;
})()
;})(switch__39562__auto__,c__39652__auto___41191,out))
})();
var state__39654__auto__ = (function (){var statearr_41189 = f__39653__auto__.call(null);
(statearr_41189[(6)] = c__39652__auto___41191);

return statearr_41189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39654__auto__);
});})(c__39652__auto___41191,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__41205 = arguments.length;
switch (G__41205) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__39652__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39652__auto__){
return (function (){
var f__39653__auto__ = (function (){var switch__39562__auto__ = ((function (c__39652__auto__){
return (function (state_41268){
var state_val_41269 = (state_41268[(1)]);
if((state_val_41269 === (7))){
var inst_41264 = (state_41268[(2)]);
var state_41268__$1 = state_41268;
var statearr_41270_41308 = state_41268__$1;
(statearr_41270_41308[(2)] = inst_41264);

(statearr_41270_41308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41269 === (20))){
var inst_41234 = (state_41268[(7)]);
var inst_41245 = (state_41268[(2)]);
var inst_41246 = cljs.core.next.call(null,inst_41234);
var inst_41220 = inst_41246;
var inst_41221 = null;
var inst_41222 = (0);
var inst_41223 = (0);
var state_41268__$1 = (function (){var statearr_41271 = state_41268;
(statearr_41271[(8)] = inst_41223);

(statearr_41271[(9)] = inst_41221);

(statearr_41271[(10)] = inst_41222);

(statearr_41271[(11)] = inst_41220);

(statearr_41271[(12)] = inst_41245);

return statearr_41271;
})();
var statearr_41272_41309 = state_41268__$1;
(statearr_41272_41309[(2)] = null);

(statearr_41272_41309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41269 === (1))){
var state_41268__$1 = state_41268;
var statearr_41273_41310 = state_41268__$1;
(statearr_41273_41310[(2)] = null);

(statearr_41273_41310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41269 === (4))){
var inst_41209 = (state_41268[(13)]);
var inst_41209__$1 = (state_41268[(2)]);
var inst_41210 = (inst_41209__$1 == null);
var state_41268__$1 = (function (){var statearr_41274 = state_41268;
(statearr_41274[(13)] = inst_41209__$1);

return statearr_41274;
})();
if(cljs.core.truth_(inst_41210)){
var statearr_41275_41311 = state_41268__$1;
(statearr_41275_41311[(1)] = (5));

} else {
var statearr_41276_41312 = state_41268__$1;
(statearr_41276_41312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41269 === (15))){
var state_41268__$1 = state_41268;
var statearr_41280_41313 = state_41268__$1;
(statearr_41280_41313[(2)] = null);

(statearr_41280_41313[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41269 === (21))){
var state_41268__$1 = state_41268;
var statearr_41281_41314 = state_41268__$1;
(statearr_41281_41314[(2)] = null);

(statearr_41281_41314[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41269 === (13))){
var inst_41223 = (state_41268[(8)]);
var inst_41221 = (state_41268[(9)]);
var inst_41222 = (state_41268[(10)]);
var inst_41220 = (state_41268[(11)]);
var inst_41230 = (state_41268[(2)]);
var inst_41231 = (inst_41223 + (1));
var tmp41277 = inst_41221;
var tmp41278 = inst_41222;
var tmp41279 = inst_41220;
var inst_41220__$1 = tmp41279;
var inst_41221__$1 = tmp41277;
var inst_41222__$1 = tmp41278;
var inst_41223__$1 = inst_41231;
var state_41268__$1 = (function (){var statearr_41282 = state_41268;
(statearr_41282[(8)] = inst_41223__$1);

(statearr_41282[(9)] = inst_41221__$1);

(statearr_41282[(10)] = inst_41222__$1);

(statearr_41282[(11)] = inst_41220__$1);

(statearr_41282[(14)] = inst_41230);

return statearr_41282;
})();
var statearr_41283_41315 = state_41268__$1;
(statearr_41283_41315[(2)] = null);

(statearr_41283_41315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41269 === (22))){
var state_41268__$1 = state_41268;
var statearr_41284_41316 = state_41268__$1;
(statearr_41284_41316[(2)] = null);

(statearr_41284_41316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41269 === (6))){
var inst_41209 = (state_41268[(13)]);
var inst_41218 = f.call(null,inst_41209);
var inst_41219 = cljs.core.seq.call(null,inst_41218);
var inst_41220 = inst_41219;
var inst_41221 = null;
var inst_41222 = (0);
var inst_41223 = (0);
var state_41268__$1 = (function (){var statearr_41285 = state_41268;
(statearr_41285[(8)] = inst_41223);

(statearr_41285[(9)] = inst_41221);

(statearr_41285[(10)] = inst_41222);

(statearr_41285[(11)] = inst_41220);

return statearr_41285;
})();
var statearr_41286_41317 = state_41268__$1;
(statearr_41286_41317[(2)] = null);

(statearr_41286_41317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41269 === (17))){
var inst_41234 = (state_41268[(7)]);
var inst_41238 = cljs.core.chunk_first.call(null,inst_41234);
var inst_41239 = cljs.core.chunk_rest.call(null,inst_41234);
var inst_41240 = cljs.core.count.call(null,inst_41238);
var inst_41220 = inst_41239;
var inst_41221 = inst_41238;
var inst_41222 = inst_41240;
var inst_41223 = (0);
var state_41268__$1 = (function (){var statearr_41287 = state_41268;
(statearr_41287[(8)] = inst_41223);

(statearr_41287[(9)] = inst_41221);

(statearr_41287[(10)] = inst_41222);

(statearr_41287[(11)] = inst_41220);

return statearr_41287;
})();
var statearr_41288_41318 = state_41268__$1;
(statearr_41288_41318[(2)] = null);

(statearr_41288_41318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41269 === (3))){
var inst_41266 = (state_41268[(2)]);
var state_41268__$1 = state_41268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41268__$1,inst_41266);
} else {
if((state_val_41269 === (12))){
var inst_41254 = (state_41268[(2)]);
var state_41268__$1 = state_41268;
var statearr_41289_41319 = state_41268__$1;
(statearr_41289_41319[(2)] = inst_41254);

(statearr_41289_41319[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41269 === (2))){
var state_41268__$1 = state_41268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41268__$1,(4),in$);
} else {
if((state_val_41269 === (23))){
var inst_41262 = (state_41268[(2)]);
var state_41268__$1 = state_41268;
var statearr_41290_41320 = state_41268__$1;
(statearr_41290_41320[(2)] = inst_41262);

(statearr_41290_41320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41269 === (19))){
var inst_41249 = (state_41268[(2)]);
var state_41268__$1 = state_41268;
var statearr_41291_41321 = state_41268__$1;
(statearr_41291_41321[(2)] = inst_41249);

(statearr_41291_41321[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41269 === (11))){
var inst_41220 = (state_41268[(11)]);
var inst_41234 = (state_41268[(7)]);
var inst_41234__$1 = cljs.core.seq.call(null,inst_41220);
var state_41268__$1 = (function (){var statearr_41292 = state_41268;
(statearr_41292[(7)] = inst_41234__$1);

return statearr_41292;
})();
if(inst_41234__$1){
var statearr_41293_41322 = state_41268__$1;
(statearr_41293_41322[(1)] = (14));

} else {
var statearr_41294_41323 = state_41268__$1;
(statearr_41294_41323[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41269 === (9))){
var inst_41256 = (state_41268[(2)]);
var inst_41257 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_41268__$1 = (function (){var statearr_41295 = state_41268;
(statearr_41295[(15)] = inst_41256);

return statearr_41295;
})();
if(cljs.core.truth_(inst_41257)){
var statearr_41296_41324 = state_41268__$1;
(statearr_41296_41324[(1)] = (21));

} else {
var statearr_41297_41325 = state_41268__$1;
(statearr_41297_41325[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41269 === (5))){
var inst_41212 = cljs.core.async.close_BANG_.call(null,out);
var state_41268__$1 = state_41268;
var statearr_41298_41326 = state_41268__$1;
(statearr_41298_41326[(2)] = inst_41212);

(statearr_41298_41326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41269 === (14))){
var inst_41234 = (state_41268[(7)]);
var inst_41236 = cljs.core.chunked_seq_QMARK_.call(null,inst_41234);
var state_41268__$1 = state_41268;
if(inst_41236){
var statearr_41299_41327 = state_41268__$1;
(statearr_41299_41327[(1)] = (17));

} else {
var statearr_41300_41328 = state_41268__$1;
(statearr_41300_41328[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41269 === (16))){
var inst_41252 = (state_41268[(2)]);
var state_41268__$1 = state_41268;
var statearr_41301_41329 = state_41268__$1;
(statearr_41301_41329[(2)] = inst_41252);

(statearr_41301_41329[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41269 === (10))){
var inst_41223 = (state_41268[(8)]);
var inst_41221 = (state_41268[(9)]);
var inst_41228 = cljs.core._nth.call(null,inst_41221,inst_41223);
var state_41268__$1 = state_41268;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41268__$1,(13),out,inst_41228);
} else {
if((state_val_41269 === (18))){
var inst_41234 = (state_41268[(7)]);
var inst_41243 = cljs.core.first.call(null,inst_41234);
var state_41268__$1 = state_41268;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41268__$1,(20),out,inst_41243);
} else {
if((state_val_41269 === (8))){
var inst_41223 = (state_41268[(8)]);
var inst_41222 = (state_41268[(10)]);
var inst_41225 = (inst_41223 < inst_41222);
var inst_41226 = inst_41225;
var state_41268__$1 = state_41268;
if(cljs.core.truth_(inst_41226)){
var statearr_41302_41330 = state_41268__$1;
(statearr_41302_41330[(1)] = (10));

} else {
var statearr_41303_41331 = state_41268__$1;
(statearr_41303_41331[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39652__auto__))
;
return ((function (switch__39562__auto__,c__39652__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__39563__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__39563__auto____0 = (function (){
var statearr_41304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41304[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__39563__auto__);

(statearr_41304[(1)] = (1));

return statearr_41304;
});
var cljs$core$async$mapcat_STAR__$_state_machine__39563__auto____1 = (function (state_41268){
while(true){
var ret_value__39564__auto__ = (function (){try{while(true){
var result__39565__auto__ = switch__39562__auto__.call(null,state_41268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39565__auto__;
}
break;
}
}catch (e41305){if((e41305 instanceof Object)){
var ex__39566__auto__ = e41305;
var statearr_41306_41332 = state_41268;
(statearr_41306_41332[(5)] = ex__39566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41333 = state_41268;
state_41268 = G__41333;
continue;
} else {
return ret_value__39564__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__39563__auto__ = function(state_41268){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__39563__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__39563__auto____1.call(this,state_41268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__39563__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__39563__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__39563__auto__;
})()
;})(switch__39562__auto__,c__39652__auto__))
})();
var state__39654__auto__ = (function (){var statearr_41307 = f__39653__auto__.call(null);
(statearr_41307[(6)] = c__39652__auto__);

return statearr_41307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39654__auto__);
});})(c__39652__auto__))
);

return c__39652__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__41335 = arguments.length;
switch (G__41335) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__41338 = arguments.length;
switch (G__41338) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__41341 = arguments.length;
switch (G__41341) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39652__auto___41388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39652__auto___41388,out){
return (function (){
var f__39653__auto__ = (function (){var switch__39562__auto__ = ((function (c__39652__auto___41388,out){
return (function (state_41365){
var state_val_41366 = (state_41365[(1)]);
if((state_val_41366 === (7))){
var inst_41360 = (state_41365[(2)]);
var state_41365__$1 = state_41365;
var statearr_41367_41389 = state_41365__$1;
(statearr_41367_41389[(2)] = inst_41360);

(statearr_41367_41389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41366 === (1))){
var inst_41342 = null;
var state_41365__$1 = (function (){var statearr_41368 = state_41365;
(statearr_41368[(7)] = inst_41342);

return statearr_41368;
})();
var statearr_41369_41390 = state_41365__$1;
(statearr_41369_41390[(2)] = null);

(statearr_41369_41390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41366 === (4))){
var inst_41345 = (state_41365[(8)]);
var inst_41345__$1 = (state_41365[(2)]);
var inst_41346 = (inst_41345__$1 == null);
var inst_41347 = cljs.core.not.call(null,inst_41346);
var state_41365__$1 = (function (){var statearr_41370 = state_41365;
(statearr_41370[(8)] = inst_41345__$1);

return statearr_41370;
})();
if(inst_41347){
var statearr_41371_41391 = state_41365__$1;
(statearr_41371_41391[(1)] = (5));

} else {
var statearr_41372_41392 = state_41365__$1;
(statearr_41372_41392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41366 === (6))){
var state_41365__$1 = state_41365;
var statearr_41373_41393 = state_41365__$1;
(statearr_41373_41393[(2)] = null);

(statearr_41373_41393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41366 === (3))){
var inst_41362 = (state_41365[(2)]);
var inst_41363 = cljs.core.async.close_BANG_.call(null,out);
var state_41365__$1 = (function (){var statearr_41374 = state_41365;
(statearr_41374[(9)] = inst_41362);

return statearr_41374;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41365__$1,inst_41363);
} else {
if((state_val_41366 === (2))){
var state_41365__$1 = state_41365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41365__$1,(4),ch);
} else {
if((state_val_41366 === (11))){
var inst_41345 = (state_41365[(8)]);
var inst_41354 = (state_41365[(2)]);
var inst_41342 = inst_41345;
var state_41365__$1 = (function (){var statearr_41375 = state_41365;
(statearr_41375[(10)] = inst_41354);

(statearr_41375[(7)] = inst_41342);

return statearr_41375;
})();
var statearr_41376_41394 = state_41365__$1;
(statearr_41376_41394[(2)] = null);

(statearr_41376_41394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41366 === (9))){
var inst_41345 = (state_41365[(8)]);
var state_41365__$1 = state_41365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41365__$1,(11),out,inst_41345);
} else {
if((state_val_41366 === (5))){
var inst_41345 = (state_41365[(8)]);
var inst_41342 = (state_41365[(7)]);
var inst_41349 = cljs.core._EQ_.call(null,inst_41345,inst_41342);
var state_41365__$1 = state_41365;
if(inst_41349){
var statearr_41378_41395 = state_41365__$1;
(statearr_41378_41395[(1)] = (8));

} else {
var statearr_41379_41396 = state_41365__$1;
(statearr_41379_41396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41366 === (10))){
var inst_41357 = (state_41365[(2)]);
var state_41365__$1 = state_41365;
var statearr_41380_41397 = state_41365__$1;
(statearr_41380_41397[(2)] = inst_41357);

(statearr_41380_41397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41366 === (8))){
var inst_41342 = (state_41365[(7)]);
var tmp41377 = inst_41342;
var inst_41342__$1 = tmp41377;
var state_41365__$1 = (function (){var statearr_41381 = state_41365;
(statearr_41381[(7)] = inst_41342__$1);

return statearr_41381;
})();
var statearr_41382_41398 = state_41365__$1;
(statearr_41382_41398[(2)] = null);

(statearr_41382_41398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__39652__auto___41388,out))
;
return ((function (switch__39562__auto__,c__39652__auto___41388,out){
return (function() {
var cljs$core$async$state_machine__39563__auto__ = null;
var cljs$core$async$state_machine__39563__auto____0 = (function (){
var statearr_41383 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41383[(0)] = cljs$core$async$state_machine__39563__auto__);

(statearr_41383[(1)] = (1));

return statearr_41383;
});
var cljs$core$async$state_machine__39563__auto____1 = (function (state_41365){
while(true){
var ret_value__39564__auto__ = (function (){try{while(true){
var result__39565__auto__ = switch__39562__auto__.call(null,state_41365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39565__auto__;
}
break;
}
}catch (e41384){if((e41384 instanceof Object)){
var ex__39566__auto__ = e41384;
var statearr_41385_41399 = state_41365;
(statearr_41385_41399[(5)] = ex__39566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41400 = state_41365;
state_41365 = G__41400;
continue;
} else {
return ret_value__39564__auto__;
}
break;
}
});
cljs$core$async$state_machine__39563__auto__ = function(state_41365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39563__auto____1.call(this,state_41365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39563__auto____0;
cljs$core$async$state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39563__auto____1;
return cljs$core$async$state_machine__39563__auto__;
})()
;})(switch__39562__auto__,c__39652__auto___41388,out))
})();
var state__39654__auto__ = (function (){var statearr_41386 = f__39653__auto__.call(null);
(statearr_41386[(6)] = c__39652__auto___41388);

return statearr_41386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39654__auto__);
});})(c__39652__auto___41388,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__41402 = arguments.length;
switch (G__41402) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39652__auto___41468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39652__auto___41468,out){
return (function (){
var f__39653__auto__ = (function (){var switch__39562__auto__ = ((function (c__39652__auto___41468,out){
return (function (state_41440){
var state_val_41441 = (state_41440[(1)]);
if((state_val_41441 === (7))){
var inst_41436 = (state_41440[(2)]);
var state_41440__$1 = state_41440;
var statearr_41442_41469 = state_41440__$1;
(statearr_41442_41469[(2)] = inst_41436);

(statearr_41442_41469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (1))){
var inst_41403 = (new Array(n));
var inst_41404 = inst_41403;
var inst_41405 = (0);
var state_41440__$1 = (function (){var statearr_41443 = state_41440;
(statearr_41443[(7)] = inst_41405);

(statearr_41443[(8)] = inst_41404);

return statearr_41443;
})();
var statearr_41444_41470 = state_41440__$1;
(statearr_41444_41470[(2)] = null);

(statearr_41444_41470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (4))){
var inst_41408 = (state_41440[(9)]);
var inst_41408__$1 = (state_41440[(2)]);
var inst_41409 = (inst_41408__$1 == null);
var inst_41410 = cljs.core.not.call(null,inst_41409);
var state_41440__$1 = (function (){var statearr_41445 = state_41440;
(statearr_41445[(9)] = inst_41408__$1);

return statearr_41445;
})();
if(inst_41410){
var statearr_41446_41471 = state_41440__$1;
(statearr_41446_41471[(1)] = (5));

} else {
var statearr_41447_41472 = state_41440__$1;
(statearr_41447_41472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (15))){
var inst_41430 = (state_41440[(2)]);
var state_41440__$1 = state_41440;
var statearr_41448_41473 = state_41440__$1;
(statearr_41448_41473[(2)] = inst_41430);

(statearr_41448_41473[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (13))){
var state_41440__$1 = state_41440;
var statearr_41449_41474 = state_41440__$1;
(statearr_41449_41474[(2)] = null);

(statearr_41449_41474[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (6))){
var inst_41405 = (state_41440[(7)]);
var inst_41426 = (inst_41405 > (0));
var state_41440__$1 = state_41440;
if(cljs.core.truth_(inst_41426)){
var statearr_41450_41475 = state_41440__$1;
(statearr_41450_41475[(1)] = (12));

} else {
var statearr_41451_41476 = state_41440__$1;
(statearr_41451_41476[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (3))){
var inst_41438 = (state_41440[(2)]);
var state_41440__$1 = state_41440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41440__$1,inst_41438);
} else {
if((state_val_41441 === (12))){
var inst_41404 = (state_41440[(8)]);
var inst_41428 = cljs.core.vec.call(null,inst_41404);
var state_41440__$1 = state_41440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41440__$1,(15),out,inst_41428);
} else {
if((state_val_41441 === (2))){
var state_41440__$1 = state_41440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41440__$1,(4),ch);
} else {
if((state_val_41441 === (11))){
var inst_41420 = (state_41440[(2)]);
var inst_41421 = (new Array(n));
var inst_41404 = inst_41421;
var inst_41405 = (0);
var state_41440__$1 = (function (){var statearr_41452 = state_41440;
(statearr_41452[(7)] = inst_41405);

(statearr_41452[(8)] = inst_41404);

(statearr_41452[(10)] = inst_41420);

return statearr_41452;
})();
var statearr_41453_41477 = state_41440__$1;
(statearr_41453_41477[(2)] = null);

(statearr_41453_41477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (9))){
var inst_41404 = (state_41440[(8)]);
var inst_41418 = cljs.core.vec.call(null,inst_41404);
var state_41440__$1 = state_41440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41440__$1,(11),out,inst_41418);
} else {
if((state_val_41441 === (5))){
var inst_41405 = (state_41440[(7)]);
var inst_41408 = (state_41440[(9)]);
var inst_41404 = (state_41440[(8)]);
var inst_41413 = (state_41440[(11)]);
var inst_41412 = (inst_41404[inst_41405] = inst_41408);
var inst_41413__$1 = (inst_41405 + (1));
var inst_41414 = (inst_41413__$1 < n);
var state_41440__$1 = (function (){var statearr_41454 = state_41440;
(statearr_41454[(11)] = inst_41413__$1);

(statearr_41454[(12)] = inst_41412);

return statearr_41454;
})();
if(cljs.core.truth_(inst_41414)){
var statearr_41455_41478 = state_41440__$1;
(statearr_41455_41478[(1)] = (8));

} else {
var statearr_41456_41479 = state_41440__$1;
(statearr_41456_41479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (14))){
var inst_41433 = (state_41440[(2)]);
var inst_41434 = cljs.core.async.close_BANG_.call(null,out);
var state_41440__$1 = (function (){var statearr_41458 = state_41440;
(statearr_41458[(13)] = inst_41433);

return statearr_41458;
})();
var statearr_41459_41480 = state_41440__$1;
(statearr_41459_41480[(2)] = inst_41434);

(statearr_41459_41480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (10))){
var inst_41424 = (state_41440[(2)]);
var state_41440__$1 = state_41440;
var statearr_41460_41481 = state_41440__$1;
(statearr_41460_41481[(2)] = inst_41424);

(statearr_41460_41481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (8))){
var inst_41404 = (state_41440[(8)]);
var inst_41413 = (state_41440[(11)]);
var tmp41457 = inst_41404;
var inst_41404__$1 = tmp41457;
var inst_41405 = inst_41413;
var state_41440__$1 = (function (){var statearr_41461 = state_41440;
(statearr_41461[(7)] = inst_41405);

(statearr_41461[(8)] = inst_41404__$1);

return statearr_41461;
})();
var statearr_41462_41482 = state_41440__$1;
(statearr_41462_41482[(2)] = null);

(statearr_41462_41482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39652__auto___41468,out))
;
return ((function (switch__39562__auto__,c__39652__auto___41468,out){
return (function() {
var cljs$core$async$state_machine__39563__auto__ = null;
var cljs$core$async$state_machine__39563__auto____0 = (function (){
var statearr_41463 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41463[(0)] = cljs$core$async$state_machine__39563__auto__);

(statearr_41463[(1)] = (1));

return statearr_41463;
});
var cljs$core$async$state_machine__39563__auto____1 = (function (state_41440){
while(true){
var ret_value__39564__auto__ = (function (){try{while(true){
var result__39565__auto__ = switch__39562__auto__.call(null,state_41440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39565__auto__;
}
break;
}
}catch (e41464){if((e41464 instanceof Object)){
var ex__39566__auto__ = e41464;
var statearr_41465_41483 = state_41440;
(statearr_41465_41483[(5)] = ex__39566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41484 = state_41440;
state_41440 = G__41484;
continue;
} else {
return ret_value__39564__auto__;
}
break;
}
});
cljs$core$async$state_machine__39563__auto__ = function(state_41440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39563__auto____1.call(this,state_41440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39563__auto____0;
cljs$core$async$state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39563__auto____1;
return cljs$core$async$state_machine__39563__auto__;
})()
;})(switch__39562__auto__,c__39652__auto___41468,out))
})();
var state__39654__auto__ = (function (){var statearr_41466 = f__39653__auto__.call(null);
(statearr_41466[(6)] = c__39652__auto___41468);

return statearr_41466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39654__auto__);
});})(c__39652__auto___41468,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__41486 = arguments.length;
switch (G__41486) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39652__auto___41556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39652__auto___41556,out){
return (function (){
var f__39653__auto__ = (function (){var switch__39562__auto__ = ((function (c__39652__auto___41556,out){
return (function (state_41528){
var state_val_41529 = (state_41528[(1)]);
if((state_val_41529 === (7))){
var inst_41524 = (state_41528[(2)]);
var state_41528__$1 = state_41528;
var statearr_41530_41557 = state_41528__$1;
(statearr_41530_41557[(2)] = inst_41524);

(statearr_41530_41557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41529 === (1))){
var inst_41487 = [];
var inst_41488 = inst_41487;
var inst_41489 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41528__$1 = (function (){var statearr_41531 = state_41528;
(statearr_41531[(7)] = inst_41488);

(statearr_41531[(8)] = inst_41489);

return statearr_41531;
})();
var statearr_41532_41558 = state_41528__$1;
(statearr_41532_41558[(2)] = null);

(statearr_41532_41558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41529 === (4))){
var inst_41492 = (state_41528[(9)]);
var inst_41492__$1 = (state_41528[(2)]);
var inst_41493 = (inst_41492__$1 == null);
var inst_41494 = cljs.core.not.call(null,inst_41493);
var state_41528__$1 = (function (){var statearr_41533 = state_41528;
(statearr_41533[(9)] = inst_41492__$1);

return statearr_41533;
})();
if(inst_41494){
var statearr_41534_41559 = state_41528__$1;
(statearr_41534_41559[(1)] = (5));

} else {
var statearr_41535_41560 = state_41528__$1;
(statearr_41535_41560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41529 === (15))){
var inst_41518 = (state_41528[(2)]);
var state_41528__$1 = state_41528;
var statearr_41536_41561 = state_41528__$1;
(statearr_41536_41561[(2)] = inst_41518);

(statearr_41536_41561[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41529 === (13))){
var state_41528__$1 = state_41528;
var statearr_41537_41562 = state_41528__$1;
(statearr_41537_41562[(2)] = null);

(statearr_41537_41562[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41529 === (6))){
var inst_41488 = (state_41528[(7)]);
var inst_41513 = inst_41488.length;
var inst_41514 = (inst_41513 > (0));
var state_41528__$1 = state_41528;
if(cljs.core.truth_(inst_41514)){
var statearr_41538_41563 = state_41528__$1;
(statearr_41538_41563[(1)] = (12));

} else {
var statearr_41539_41564 = state_41528__$1;
(statearr_41539_41564[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41529 === (3))){
var inst_41526 = (state_41528[(2)]);
var state_41528__$1 = state_41528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41528__$1,inst_41526);
} else {
if((state_val_41529 === (12))){
var inst_41488 = (state_41528[(7)]);
var inst_41516 = cljs.core.vec.call(null,inst_41488);
var state_41528__$1 = state_41528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41528__$1,(15),out,inst_41516);
} else {
if((state_val_41529 === (2))){
var state_41528__$1 = state_41528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41528__$1,(4),ch);
} else {
if((state_val_41529 === (11))){
var inst_41496 = (state_41528[(10)]);
var inst_41492 = (state_41528[(9)]);
var inst_41506 = (state_41528[(2)]);
var inst_41507 = [];
var inst_41508 = inst_41507.push(inst_41492);
var inst_41488 = inst_41507;
var inst_41489 = inst_41496;
var state_41528__$1 = (function (){var statearr_41540 = state_41528;
(statearr_41540[(7)] = inst_41488);

(statearr_41540[(11)] = inst_41508);

(statearr_41540[(8)] = inst_41489);

(statearr_41540[(12)] = inst_41506);

return statearr_41540;
})();
var statearr_41541_41565 = state_41528__$1;
(statearr_41541_41565[(2)] = null);

(statearr_41541_41565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41529 === (9))){
var inst_41488 = (state_41528[(7)]);
var inst_41504 = cljs.core.vec.call(null,inst_41488);
var state_41528__$1 = state_41528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41528__$1,(11),out,inst_41504);
} else {
if((state_val_41529 === (5))){
var inst_41496 = (state_41528[(10)]);
var inst_41489 = (state_41528[(8)]);
var inst_41492 = (state_41528[(9)]);
var inst_41496__$1 = f.call(null,inst_41492);
var inst_41497 = cljs.core._EQ_.call(null,inst_41496__$1,inst_41489);
var inst_41498 = cljs.core.keyword_identical_QMARK_.call(null,inst_41489,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41499 = ((inst_41497) || (inst_41498));
var state_41528__$1 = (function (){var statearr_41542 = state_41528;
(statearr_41542[(10)] = inst_41496__$1);

return statearr_41542;
})();
if(cljs.core.truth_(inst_41499)){
var statearr_41543_41566 = state_41528__$1;
(statearr_41543_41566[(1)] = (8));

} else {
var statearr_41544_41567 = state_41528__$1;
(statearr_41544_41567[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41529 === (14))){
var inst_41521 = (state_41528[(2)]);
var inst_41522 = cljs.core.async.close_BANG_.call(null,out);
var state_41528__$1 = (function (){var statearr_41546 = state_41528;
(statearr_41546[(13)] = inst_41521);

return statearr_41546;
})();
var statearr_41547_41568 = state_41528__$1;
(statearr_41547_41568[(2)] = inst_41522);

(statearr_41547_41568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41529 === (10))){
var inst_41511 = (state_41528[(2)]);
var state_41528__$1 = state_41528;
var statearr_41548_41569 = state_41528__$1;
(statearr_41548_41569[(2)] = inst_41511);

(statearr_41548_41569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41529 === (8))){
var inst_41496 = (state_41528[(10)]);
var inst_41488 = (state_41528[(7)]);
var inst_41492 = (state_41528[(9)]);
var inst_41501 = inst_41488.push(inst_41492);
var tmp41545 = inst_41488;
var inst_41488__$1 = tmp41545;
var inst_41489 = inst_41496;
var state_41528__$1 = (function (){var statearr_41549 = state_41528;
(statearr_41549[(7)] = inst_41488__$1);

(statearr_41549[(14)] = inst_41501);

(statearr_41549[(8)] = inst_41489);

return statearr_41549;
})();
var statearr_41550_41570 = state_41528__$1;
(statearr_41550_41570[(2)] = null);

(statearr_41550_41570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39652__auto___41556,out))
;
return ((function (switch__39562__auto__,c__39652__auto___41556,out){
return (function() {
var cljs$core$async$state_machine__39563__auto__ = null;
var cljs$core$async$state_machine__39563__auto____0 = (function (){
var statearr_41551 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41551[(0)] = cljs$core$async$state_machine__39563__auto__);

(statearr_41551[(1)] = (1));

return statearr_41551;
});
var cljs$core$async$state_machine__39563__auto____1 = (function (state_41528){
while(true){
var ret_value__39564__auto__ = (function (){try{while(true){
var result__39565__auto__ = switch__39562__auto__.call(null,state_41528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39565__auto__;
}
break;
}
}catch (e41552){if((e41552 instanceof Object)){
var ex__39566__auto__ = e41552;
var statearr_41553_41571 = state_41528;
(statearr_41553_41571[(5)] = ex__39566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41572 = state_41528;
state_41528 = G__41572;
continue;
} else {
return ret_value__39564__auto__;
}
break;
}
});
cljs$core$async$state_machine__39563__auto__ = function(state_41528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39563__auto____1.call(this,state_41528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39563__auto____0;
cljs$core$async$state_machine__39563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39563__auto____1;
return cljs$core$async$state_machine__39563__auto__;
})()
;})(switch__39562__auto__,c__39652__auto___41556,out))
})();
var state__39654__auto__ = (function (){var statearr_41554 = f__39653__auto__.call(null);
(statearr_41554[(6)] = c__39652__auto___41556);

return statearr_41554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39654__auto__);
});})(c__39652__auto___41556,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1553576547296
