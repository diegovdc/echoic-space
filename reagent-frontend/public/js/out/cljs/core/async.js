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
var G__56375 = arguments.length;
switch (G__56375) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56376 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56376 = (function (f,blockable,meta56377){
this.f = f;
this.blockable = blockable;
this.meta56377 = meta56377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async56376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56378,meta56377__$1){
var self__ = this;
var _56378__$1 = this;
return (new cljs.core.async.t_cljs$core$async56376(self__.f,self__.blockable,meta56377__$1));
});

cljs.core.async.t_cljs$core$async56376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56378){
var self__ = this;
var _56378__$1 = this;
return self__.meta56377;
});

cljs.core.async.t_cljs$core$async56376.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56376.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async56376.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async56376.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async56376.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta56377","meta56377",-1576591322,null)], null);
});

cljs.core.async.t_cljs$core$async56376.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56376.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56376";

cljs.core.async.t_cljs$core$async56376.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async56376");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56376.
 */
cljs.core.async.__GT_t_cljs$core$async56376 = (function cljs$core$async$__GT_t_cljs$core$async56376(f__$1,blockable__$1,meta56377){
return (new cljs.core.async.t_cljs$core$async56376(f__$1,blockable__$1,meta56377));
});

}

return (new cljs.core.async.t_cljs$core$async56376(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__56382 = arguments.length;
switch (G__56382) {
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
var G__56385 = arguments.length;
switch (G__56385) {
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
var G__56388 = arguments.length;
switch (G__56388) {
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
var val_56390 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_56390);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_56390,ret){
return (function (){
return fn1.call(null,val_56390);
});})(val_56390,ret))
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
var G__56392 = arguments.length;
switch (G__56392) {
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
var n__4394__auto___56394 = n;
var x_56395 = (0);
while(true){
if((x_56395 < n__4394__auto___56394)){
(a[x_56395] = (0));

var G__56396 = (x_56395 + (1));
x_56395 = G__56396;
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

var G__56397 = (i + (1));
i = G__56397;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56398 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56398 = (function (flag,meta56399){
this.flag = flag;
this.meta56399 = meta56399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async56398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_56400,meta56399__$1){
var self__ = this;
var _56400__$1 = this;
return (new cljs.core.async.t_cljs$core$async56398(self__.flag,meta56399__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async56398.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_56400){
var self__ = this;
var _56400__$1 = this;
return self__.meta56399;
});})(flag))
;

cljs.core.async.t_cljs$core$async56398.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56398.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async56398.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async56398.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async56398.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta56399","meta56399",1539279450,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async56398.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56398.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56398";

cljs.core.async.t_cljs$core$async56398.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async56398");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56398.
 */
cljs.core.async.__GT_t_cljs$core$async56398 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async56398(flag__$1,meta56399){
return (new cljs.core.async.t_cljs$core$async56398(flag__$1,meta56399));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async56398(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56401 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56401 = (function (flag,cb,meta56402){
this.flag = flag;
this.cb = cb;
this.meta56402 = meta56402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async56401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56403,meta56402__$1){
var self__ = this;
var _56403__$1 = this;
return (new cljs.core.async.t_cljs$core$async56401(self__.flag,self__.cb,meta56402__$1));
});

cljs.core.async.t_cljs$core$async56401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56403){
var self__ = this;
var _56403__$1 = this;
return self__.meta56402;
});

cljs.core.async.t_cljs$core$async56401.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56401.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async56401.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async56401.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async56401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta56402","meta56402",956383641,null)], null);
});

cljs.core.async.t_cljs$core$async56401.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56401.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56401";

cljs.core.async.t_cljs$core$async56401.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async56401");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56401.
 */
cljs.core.async.__GT_t_cljs$core$async56401 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async56401(flag__$1,cb__$1,meta56402){
return (new cljs.core.async.t_cljs$core$async56401(flag__$1,cb__$1,meta56402));
});

}

return (new cljs.core.async.t_cljs$core$async56401(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__56404_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56404_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__56405_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56405_SHARP_,port], null));
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
var G__56406 = (i + (1));
i = G__56406;
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
var len__4517__auto___56412 = arguments.length;
var i__4518__auto___56413 = (0);
while(true){
if((i__4518__auto___56413 < len__4517__auto___56412)){
args__4520__auto__.push((arguments[i__4518__auto___56413]));

var G__56414 = (i__4518__auto___56413 + (1));
i__4518__auto___56413 = G__56414;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__56409){
var map__56410 = p__56409;
var map__56410__$1 = ((((!((map__56410 == null)))?(((((map__56410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56410):map__56410);
var opts = map__56410__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq56407){
var G__56408 = cljs.core.first.call(null,seq56407);
var seq56407__$1 = cljs.core.next.call(null,seq56407);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56408,seq56407__$1);
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
var G__56416 = arguments.length;
switch (G__56416) {
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
var c__47988__auto___56462 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47988__auto___56462){
return (function (){
var f__47989__auto__ = (function (){var switch__47480__auto__ = ((function (c__47988__auto___56462){
return (function (state_56440){
var state_val_56441 = (state_56440[(1)]);
if((state_val_56441 === (7))){
var inst_56436 = (state_56440[(2)]);
var state_56440__$1 = state_56440;
var statearr_56442_56463 = state_56440__$1;
(statearr_56442_56463[(2)] = inst_56436);

(statearr_56442_56463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56441 === (1))){
var state_56440__$1 = state_56440;
var statearr_56443_56464 = state_56440__$1;
(statearr_56443_56464[(2)] = null);

(statearr_56443_56464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56441 === (4))){
var inst_56419 = (state_56440[(7)]);
var inst_56419__$1 = (state_56440[(2)]);
var inst_56420 = (inst_56419__$1 == null);
var state_56440__$1 = (function (){var statearr_56444 = state_56440;
(statearr_56444[(7)] = inst_56419__$1);

return statearr_56444;
})();
if(cljs.core.truth_(inst_56420)){
var statearr_56445_56465 = state_56440__$1;
(statearr_56445_56465[(1)] = (5));

} else {
var statearr_56446_56466 = state_56440__$1;
(statearr_56446_56466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56441 === (13))){
var state_56440__$1 = state_56440;
var statearr_56447_56467 = state_56440__$1;
(statearr_56447_56467[(2)] = null);

(statearr_56447_56467[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56441 === (6))){
var inst_56419 = (state_56440[(7)]);
var state_56440__$1 = state_56440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56440__$1,(11),to,inst_56419);
} else {
if((state_val_56441 === (3))){
var inst_56438 = (state_56440[(2)]);
var state_56440__$1 = state_56440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56440__$1,inst_56438);
} else {
if((state_val_56441 === (12))){
var state_56440__$1 = state_56440;
var statearr_56448_56468 = state_56440__$1;
(statearr_56448_56468[(2)] = null);

(statearr_56448_56468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56441 === (2))){
var state_56440__$1 = state_56440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56440__$1,(4),from);
} else {
if((state_val_56441 === (11))){
var inst_56429 = (state_56440[(2)]);
var state_56440__$1 = state_56440;
if(cljs.core.truth_(inst_56429)){
var statearr_56449_56469 = state_56440__$1;
(statearr_56449_56469[(1)] = (12));

} else {
var statearr_56450_56470 = state_56440__$1;
(statearr_56450_56470[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56441 === (9))){
var state_56440__$1 = state_56440;
var statearr_56451_56471 = state_56440__$1;
(statearr_56451_56471[(2)] = null);

(statearr_56451_56471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56441 === (5))){
var state_56440__$1 = state_56440;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56452_56472 = state_56440__$1;
(statearr_56452_56472[(1)] = (8));

} else {
var statearr_56453_56473 = state_56440__$1;
(statearr_56453_56473[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56441 === (14))){
var inst_56434 = (state_56440[(2)]);
var state_56440__$1 = state_56440;
var statearr_56454_56474 = state_56440__$1;
(statearr_56454_56474[(2)] = inst_56434);

(statearr_56454_56474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56441 === (10))){
var inst_56426 = (state_56440[(2)]);
var state_56440__$1 = state_56440;
var statearr_56455_56475 = state_56440__$1;
(statearr_56455_56475[(2)] = inst_56426);

(statearr_56455_56475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56441 === (8))){
var inst_56423 = cljs.core.async.close_BANG_.call(null,to);
var state_56440__$1 = state_56440;
var statearr_56456_56476 = state_56440__$1;
(statearr_56456_56476[(2)] = inst_56423);

(statearr_56456_56476[(1)] = (10));


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
});})(c__47988__auto___56462))
;
return ((function (switch__47480__auto__,c__47988__auto___56462){
return (function() {
var cljs$core$async$state_machine__47481__auto__ = null;
var cljs$core$async$state_machine__47481__auto____0 = (function (){
var statearr_56457 = [null,null,null,null,null,null,null,null];
(statearr_56457[(0)] = cljs$core$async$state_machine__47481__auto__);

(statearr_56457[(1)] = (1));

return statearr_56457;
});
var cljs$core$async$state_machine__47481__auto____1 = (function (state_56440){
while(true){
var ret_value__47482__auto__ = (function (){try{while(true){
var result__47483__auto__ = switch__47480__auto__.call(null,state_56440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47483__auto__;
}
break;
}
}catch (e56458){if((e56458 instanceof Object)){
var ex__47484__auto__ = e56458;
var statearr_56459_56477 = state_56440;
(statearr_56459_56477[(5)] = ex__47484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56478 = state_56440;
state_56440 = G__56478;
continue;
} else {
return ret_value__47482__auto__;
}
break;
}
});
cljs$core$async$state_machine__47481__auto__ = function(state_56440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47481__auto____1.call(this,state_56440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47481__auto____0;
cljs$core$async$state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47481__auto____1;
return cljs$core$async$state_machine__47481__auto__;
})()
;})(switch__47480__auto__,c__47988__auto___56462))
})();
var state__47990__auto__ = (function (){var statearr_56460 = f__47989__auto__.call(null);
(statearr_56460[(6)] = c__47988__auto___56462);

return statearr_56460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47990__auto__);
});})(c__47988__auto___56462))
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
return (function (p__56479){
var vec__56480 = p__56479;
var v = cljs.core.nth.call(null,vec__56480,(0),null);
var p = cljs.core.nth.call(null,vec__56480,(1),null);
var job = vec__56480;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__47988__auto___56651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47988__auto___56651,res,vec__56480,v,p,job,jobs,results){
return (function (){
var f__47989__auto__ = (function (){var switch__47480__auto__ = ((function (c__47988__auto___56651,res,vec__56480,v,p,job,jobs,results){
return (function (state_56487){
var state_val_56488 = (state_56487[(1)]);
if((state_val_56488 === (1))){
var state_56487__$1 = state_56487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56487__$1,(2),res,v);
} else {
if((state_val_56488 === (2))){
var inst_56484 = (state_56487[(2)]);
var inst_56485 = cljs.core.async.close_BANG_.call(null,res);
var state_56487__$1 = (function (){var statearr_56489 = state_56487;
(statearr_56489[(7)] = inst_56484);

return statearr_56489;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56487__$1,inst_56485);
} else {
return null;
}
}
});})(c__47988__auto___56651,res,vec__56480,v,p,job,jobs,results))
;
return ((function (switch__47480__auto__,c__47988__auto___56651,res,vec__56480,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47481__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47481__auto____0 = (function (){
var statearr_56490 = [null,null,null,null,null,null,null,null];
(statearr_56490[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47481__auto__);

(statearr_56490[(1)] = (1));

return statearr_56490;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47481__auto____1 = (function (state_56487){
while(true){
var ret_value__47482__auto__ = (function (){try{while(true){
var result__47483__auto__ = switch__47480__auto__.call(null,state_56487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47483__auto__;
}
break;
}
}catch (e56491){if((e56491 instanceof Object)){
var ex__47484__auto__ = e56491;
var statearr_56492_56652 = state_56487;
(statearr_56492_56652[(5)] = ex__47484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56653 = state_56487;
state_56487 = G__56653;
continue;
} else {
return ret_value__47482__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47481__auto__ = function(state_56487){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47481__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47481__auto____1.call(this,state_56487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47481__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47481__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47481__auto__;
})()
;})(switch__47480__auto__,c__47988__auto___56651,res,vec__56480,v,p,job,jobs,results))
})();
var state__47990__auto__ = (function (){var statearr_56493 = f__47989__auto__.call(null);
(statearr_56493[(6)] = c__47988__auto___56651);

return statearr_56493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47990__auto__);
});})(c__47988__auto___56651,res,vec__56480,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__56494){
var vec__56495 = p__56494;
var v = cljs.core.nth.call(null,vec__56495,(0),null);
var p = cljs.core.nth.call(null,vec__56495,(1),null);
var job = vec__56495;
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
var n__4394__auto___56654 = n;
var __56655 = (0);
while(true){
if((__56655 < n__4394__auto___56654)){
var G__56498_56656 = type;
var G__56498_56657__$1 = (((G__56498_56656 instanceof cljs.core.Keyword))?G__56498_56656.fqn:null);
switch (G__56498_56657__$1) {
case "compute":
var c__47988__auto___56659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__56655,c__47988__auto___56659,G__56498_56656,G__56498_56657__$1,n__4394__auto___56654,jobs,results,process,async){
return (function (){
var f__47989__auto__ = (function (){var switch__47480__auto__ = ((function (__56655,c__47988__auto___56659,G__56498_56656,G__56498_56657__$1,n__4394__auto___56654,jobs,results,process,async){
return (function (state_56511){
var state_val_56512 = (state_56511[(1)]);
if((state_val_56512 === (1))){
var state_56511__$1 = state_56511;
var statearr_56513_56660 = state_56511__$1;
(statearr_56513_56660[(2)] = null);

(statearr_56513_56660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56512 === (2))){
var state_56511__$1 = state_56511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56511__$1,(4),jobs);
} else {
if((state_val_56512 === (3))){
var inst_56509 = (state_56511[(2)]);
var state_56511__$1 = state_56511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56511__$1,inst_56509);
} else {
if((state_val_56512 === (4))){
var inst_56501 = (state_56511[(2)]);
var inst_56502 = process.call(null,inst_56501);
var state_56511__$1 = state_56511;
if(cljs.core.truth_(inst_56502)){
var statearr_56514_56661 = state_56511__$1;
(statearr_56514_56661[(1)] = (5));

} else {
var statearr_56515_56662 = state_56511__$1;
(statearr_56515_56662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56512 === (5))){
var state_56511__$1 = state_56511;
var statearr_56516_56663 = state_56511__$1;
(statearr_56516_56663[(2)] = null);

(statearr_56516_56663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56512 === (6))){
var state_56511__$1 = state_56511;
var statearr_56517_56664 = state_56511__$1;
(statearr_56517_56664[(2)] = null);

(statearr_56517_56664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56512 === (7))){
var inst_56507 = (state_56511[(2)]);
var state_56511__$1 = state_56511;
var statearr_56518_56665 = state_56511__$1;
(statearr_56518_56665[(2)] = inst_56507);

(statearr_56518_56665[(1)] = (3));


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
});})(__56655,c__47988__auto___56659,G__56498_56656,G__56498_56657__$1,n__4394__auto___56654,jobs,results,process,async))
;
return ((function (__56655,switch__47480__auto__,c__47988__auto___56659,G__56498_56656,G__56498_56657__$1,n__4394__auto___56654,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47481__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47481__auto____0 = (function (){
var statearr_56519 = [null,null,null,null,null,null,null];
(statearr_56519[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47481__auto__);

(statearr_56519[(1)] = (1));

return statearr_56519;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47481__auto____1 = (function (state_56511){
while(true){
var ret_value__47482__auto__ = (function (){try{while(true){
var result__47483__auto__ = switch__47480__auto__.call(null,state_56511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47483__auto__;
}
break;
}
}catch (e56520){if((e56520 instanceof Object)){
var ex__47484__auto__ = e56520;
var statearr_56521_56666 = state_56511;
(statearr_56521_56666[(5)] = ex__47484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56667 = state_56511;
state_56511 = G__56667;
continue;
} else {
return ret_value__47482__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47481__auto__ = function(state_56511){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47481__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47481__auto____1.call(this,state_56511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47481__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47481__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47481__auto__;
})()
;})(__56655,switch__47480__auto__,c__47988__auto___56659,G__56498_56656,G__56498_56657__$1,n__4394__auto___56654,jobs,results,process,async))
})();
var state__47990__auto__ = (function (){var statearr_56522 = f__47989__auto__.call(null);
(statearr_56522[(6)] = c__47988__auto___56659);

return statearr_56522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47990__auto__);
});})(__56655,c__47988__auto___56659,G__56498_56656,G__56498_56657__$1,n__4394__auto___56654,jobs,results,process,async))
);


break;
case "async":
var c__47988__auto___56668 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__56655,c__47988__auto___56668,G__56498_56656,G__56498_56657__$1,n__4394__auto___56654,jobs,results,process,async){
return (function (){
var f__47989__auto__ = (function (){var switch__47480__auto__ = ((function (__56655,c__47988__auto___56668,G__56498_56656,G__56498_56657__$1,n__4394__auto___56654,jobs,results,process,async){
return (function (state_56535){
var state_val_56536 = (state_56535[(1)]);
if((state_val_56536 === (1))){
var state_56535__$1 = state_56535;
var statearr_56537_56669 = state_56535__$1;
(statearr_56537_56669[(2)] = null);

(statearr_56537_56669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56536 === (2))){
var state_56535__$1 = state_56535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56535__$1,(4),jobs);
} else {
if((state_val_56536 === (3))){
var inst_56533 = (state_56535[(2)]);
var state_56535__$1 = state_56535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56535__$1,inst_56533);
} else {
if((state_val_56536 === (4))){
var inst_56525 = (state_56535[(2)]);
var inst_56526 = async.call(null,inst_56525);
var state_56535__$1 = state_56535;
if(cljs.core.truth_(inst_56526)){
var statearr_56538_56670 = state_56535__$1;
(statearr_56538_56670[(1)] = (5));

} else {
var statearr_56539_56671 = state_56535__$1;
(statearr_56539_56671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56536 === (5))){
var state_56535__$1 = state_56535;
var statearr_56540_56672 = state_56535__$1;
(statearr_56540_56672[(2)] = null);

(statearr_56540_56672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56536 === (6))){
var state_56535__$1 = state_56535;
var statearr_56541_56673 = state_56535__$1;
(statearr_56541_56673[(2)] = null);

(statearr_56541_56673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56536 === (7))){
var inst_56531 = (state_56535[(2)]);
var state_56535__$1 = state_56535;
var statearr_56542_56674 = state_56535__$1;
(statearr_56542_56674[(2)] = inst_56531);

(statearr_56542_56674[(1)] = (3));


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
});})(__56655,c__47988__auto___56668,G__56498_56656,G__56498_56657__$1,n__4394__auto___56654,jobs,results,process,async))
;
return ((function (__56655,switch__47480__auto__,c__47988__auto___56668,G__56498_56656,G__56498_56657__$1,n__4394__auto___56654,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47481__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47481__auto____0 = (function (){
var statearr_56543 = [null,null,null,null,null,null,null];
(statearr_56543[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47481__auto__);

(statearr_56543[(1)] = (1));

return statearr_56543;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47481__auto____1 = (function (state_56535){
while(true){
var ret_value__47482__auto__ = (function (){try{while(true){
var result__47483__auto__ = switch__47480__auto__.call(null,state_56535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47483__auto__;
}
break;
}
}catch (e56544){if((e56544 instanceof Object)){
var ex__47484__auto__ = e56544;
var statearr_56545_56675 = state_56535;
(statearr_56545_56675[(5)] = ex__47484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56676 = state_56535;
state_56535 = G__56676;
continue;
} else {
return ret_value__47482__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47481__auto__ = function(state_56535){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47481__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47481__auto____1.call(this,state_56535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47481__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47481__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47481__auto__;
})()
;})(__56655,switch__47480__auto__,c__47988__auto___56668,G__56498_56656,G__56498_56657__$1,n__4394__auto___56654,jobs,results,process,async))
})();
var state__47990__auto__ = (function (){var statearr_56546 = f__47989__auto__.call(null);
(statearr_56546[(6)] = c__47988__auto___56668);

return statearr_56546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47990__auto__);
});})(__56655,c__47988__auto___56668,G__56498_56656,G__56498_56657__$1,n__4394__auto___56654,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56498_56657__$1)].join('')));

}

var G__56677 = (__56655 + (1));
__56655 = G__56677;
continue;
} else {
}
break;
}

var c__47988__auto___56678 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47988__auto___56678,jobs,results,process,async){
return (function (){
var f__47989__auto__ = (function (){var switch__47480__auto__ = ((function (c__47988__auto___56678,jobs,results,process,async){
return (function (state_56568){
var state_val_56569 = (state_56568[(1)]);
if((state_val_56569 === (1))){
var state_56568__$1 = state_56568;
var statearr_56570_56679 = state_56568__$1;
(statearr_56570_56679[(2)] = null);

(statearr_56570_56679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56569 === (2))){
var state_56568__$1 = state_56568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56568__$1,(4),from);
} else {
if((state_val_56569 === (3))){
var inst_56566 = (state_56568[(2)]);
var state_56568__$1 = state_56568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56568__$1,inst_56566);
} else {
if((state_val_56569 === (4))){
var inst_56549 = (state_56568[(7)]);
var inst_56549__$1 = (state_56568[(2)]);
var inst_56550 = (inst_56549__$1 == null);
var state_56568__$1 = (function (){var statearr_56571 = state_56568;
(statearr_56571[(7)] = inst_56549__$1);

return statearr_56571;
})();
if(cljs.core.truth_(inst_56550)){
var statearr_56572_56680 = state_56568__$1;
(statearr_56572_56680[(1)] = (5));

} else {
var statearr_56573_56681 = state_56568__$1;
(statearr_56573_56681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56569 === (5))){
var inst_56552 = cljs.core.async.close_BANG_.call(null,jobs);
var state_56568__$1 = state_56568;
var statearr_56574_56682 = state_56568__$1;
(statearr_56574_56682[(2)] = inst_56552);

(statearr_56574_56682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56569 === (6))){
var inst_56549 = (state_56568[(7)]);
var inst_56554 = (state_56568[(8)]);
var inst_56554__$1 = cljs.core.async.chan.call(null,(1));
var inst_56555 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56556 = [inst_56549,inst_56554__$1];
var inst_56557 = (new cljs.core.PersistentVector(null,2,(5),inst_56555,inst_56556,null));
var state_56568__$1 = (function (){var statearr_56575 = state_56568;
(statearr_56575[(8)] = inst_56554__$1);

return statearr_56575;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56568__$1,(8),jobs,inst_56557);
} else {
if((state_val_56569 === (7))){
var inst_56564 = (state_56568[(2)]);
var state_56568__$1 = state_56568;
var statearr_56576_56683 = state_56568__$1;
(statearr_56576_56683[(2)] = inst_56564);

(statearr_56576_56683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56569 === (8))){
var inst_56554 = (state_56568[(8)]);
var inst_56559 = (state_56568[(2)]);
var state_56568__$1 = (function (){var statearr_56577 = state_56568;
(statearr_56577[(9)] = inst_56559);

return statearr_56577;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56568__$1,(9),results,inst_56554);
} else {
if((state_val_56569 === (9))){
var inst_56561 = (state_56568[(2)]);
var state_56568__$1 = (function (){var statearr_56578 = state_56568;
(statearr_56578[(10)] = inst_56561);

return statearr_56578;
})();
var statearr_56579_56684 = state_56568__$1;
(statearr_56579_56684[(2)] = null);

(statearr_56579_56684[(1)] = (2));


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
});})(c__47988__auto___56678,jobs,results,process,async))
;
return ((function (switch__47480__auto__,c__47988__auto___56678,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47481__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47481__auto____0 = (function (){
var statearr_56580 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56580[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47481__auto__);

(statearr_56580[(1)] = (1));

return statearr_56580;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47481__auto____1 = (function (state_56568){
while(true){
var ret_value__47482__auto__ = (function (){try{while(true){
var result__47483__auto__ = switch__47480__auto__.call(null,state_56568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47483__auto__;
}
break;
}
}catch (e56581){if((e56581 instanceof Object)){
var ex__47484__auto__ = e56581;
var statearr_56582_56685 = state_56568;
(statearr_56582_56685[(5)] = ex__47484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56686 = state_56568;
state_56568 = G__56686;
continue;
} else {
return ret_value__47482__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47481__auto__ = function(state_56568){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47481__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47481__auto____1.call(this,state_56568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47481__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47481__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47481__auto__;
})()
;})(switch__47480__auto__,c__47988__auto___56678,jobs,results,process,async))
})();
var state__47990__auto__ = (function (){var statearr_56583 = f__47989__auto__.call(null);
(statearr_56583[(6)] = c__47988__auto___56678);

return statearr_56583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47990__auto__);
});})(c__47988__auto___56678,jobs,results,process,async))
);


var c__47988__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47988__auto__,jobs,results,process,async){
return (function (){
var f__47989__auto__ = (function (){var switch__47480__auto__ = ((function (c__47988__auto__,jobs,results,process,async){
return (function (state_56621){
var state_val_56622 = (state_56621[(1)]);
if((state_val_56622 === (7))){
var inst_56617 = (state_56621[(2)]);
var state_56621__$1 = state_56621;
var statearr_56623_56687 = state_56621__$1;
(statearr_56623_56687[(2)] = inst_56617);

(statearr_56623_56687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56622 === (20))){
var state_56621__$1 = state_56621;
var statearr_56624_56688 = state_56621__$1;
(statearr_56624_56688[(2)] = null);

(statearr_56624_56688[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56622 === (1))){
var state_56621__$1 = state_56621;
var statearr_56625_56689 = state_56621__$1;
(statearr_56625_56689[(2)] = null);

(statearr_56625_56689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56622 === (4))){
var inst_56586 = (state_56621[(7)]);
var inst_56586__$1 = (state_56621[(2)]);
var inst_56587 = (inst_56586__$1 == null);
var state_56621__$1 = (function (){var statearr_56626 = state_56621;
(statearr_56626[(7)] = inst_56586__$1);

return statearr_56626;
})();
if(cljs.core.truth_(inst_56587)){
var statearr_56627_56690 = state_56621__$1;
(statearr_56627_56690[(1)] = (5));

} else {
var statearr_56628_56691 = state_56621__$1;
(statearr_56628_56691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56622 === (15))){
var inst_56599 = (state_56621[(8)]);
var state_56621__$1 = state_56621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56621__$1,(18),to,inst_56599);
} else {
if((state_val_56622 === (21))){
var inst_56612 = (state_56621[(2)]);
var state_56621__$1 = state_56621;
var statearr_56629_56692 = state_56621__$1;
(statearr_56629_56692[(2)] = inst_56612);

(statearr_56629_56692[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56622 === (13))){
var inst_56614 = (state_56621[(2)]);
var state_56621__$1 = (function (){var statearr_56630 = state_56621;
(statearr_56630[(9)] = inst_56614);

return statearr_56630;
})();
var statearr_56631_56693 = state_56621__$1;
(statearr_56631_56693[(2)] = null);

(statearr_56631_56693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56622 === (6))){
var inst_56586 = (state_56621[(7)]);
var state_56621__$1 = state_56621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56621__$1,(11),inst_56586);
} else {
if((state_val_56622 === (17))){
var inst_56607 = (state_56621[(2)]);
var state_56621__$1 = state_56621;
if(cljs.core.truth_(inst_56607)){
var statearr_56632_56694 = state_56621__$1;
(statearr_56632_56694[(1)] = (19));

} else {
var statearr_56633_56695 = state_56621__$1;
(statearr_56633_56695[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56622 === (3))){
var inst_56619 = (state_56621[(2)]);
var state_56621__$1 = state_56621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56621__$1,inst_56619);
} else {
if((state_val_56622 === (12))){
var inst_56596 = (state_56621[(10)]);
var state_56621__$1 = state_56621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56621__$1,(14),inst_56596);
} else {
if((state_val_56622 === (2))){
var state_56621__$1 = state_56621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56621__$1,(4),results);
} else {
if((state_val_56622 === (19))){
var state_56621__$1 = state_56621;
var statearr_56634_56696 = state_56621__$1;
(statearr_56634_56696[(2)] = null);

(statearr_56634_56696[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56622 === (11))){
var inst_56596 = (state_56621[(2)]);
var state_56621__$1 = (function (){var statearr_56635 = state_56621;
(statearr_56635[(10)] = inst_56596);

return statearr_56635;
})();
var statearr_56636_56697 = state_56621__$1;
(statearr_56636_56697[(2)] = null);

(statearr_56636_56697[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56622 === (9))){
var state_56621__$1 = state_56621;
var statearr_56637_56698 = state_56621__$1;
(statearr_56637_56698[(2)] = null);

(statearr_56637_56698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56622 === (5))){
var state_56621__$1 = state_56621;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56638_56699 = state_56621__$1;
(statearr_56638_56699[(1)] = (8));

} else {
var statearr_56639_56700 = state_56621__$1;
(statearr_56639_56700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56622 === (14))){
var inst_56599 = (state_56621[(8)]);
var inst_56601 = (state_56621[(11)]);
var inst_56599__$1 = (state_56621[(2)]);
var inst_56600 = (inst_56599__$1 == null);
var inst_56601__$1 = cljs.core.not.call(null,inst_56600);
var state_56621__$1 = (function (){var statearr_56640 = state_56621;
(statearr_56640[(8)] = inst_56599__$1);

(statearr_56640[(11)] = inst_56601__$1);

return statearr_56640;
})();
if(inst_56601__$1){
var statearr_56641_56701 = state_56621__$1;
(statearr_56641_56701[(1)] = (15));

} else {
var statearr_56642_56702 = state_56621__$1;
(statearr_56642_56702[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56622 === (16))){
var inst_56601 = (state_56621[(11)]);
var state_56621__$1 = state_56621;
var statearr_56643_56703 = state_56621__$1;
(statearr_56643_56703[(2)] = inst_56601);

(statearr_56643_56703[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56622 === (10))){
var inst_56593 = (state_56621[(2)]);
var state_56621__$1 = state_56621;
var statearr_56644_56704 = state_56621__$1;
(statearr_56644_56704[(2)] = inst_56593);

(statearr_56644_56704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56622 === (18))){
var inst_56604 = (state_56621[(2)]);
var state_56621__$1 = state_56621;
var statearr_56645_56705 = state_56621__$1;
(statearr_56645_56705[(2)] = inst_56604);

(statearr_56645_56705[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56622 === (8))){
var inst_56590 = cljs.core.async.close_BANG_.call(null,to);
var state_56621__$1 = state_56621;
var statearr_56646_56706 = state_56621__$1;
(statearr_56646_56706[(2)] = inst_56590);

(statearr_56646_56706[(1)] = (10));


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
});})(c__47988__auto__,jobs,results,process,async))
;
return ((function (switch__47480__auto__,c__47988__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47481__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47481__auto____0 = (function (){
var statearr_56647 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56647[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47481__auto__);

(statearr_56647[(1)] = (1));

return statearr_56647;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47481__auto____1 = (function (state_56621){
while(true){
var ret_value__47482__auto__ = (function (){try{while(true){
var result__47483__auto__ = switch__47480__auto__.call(null,state_56621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47483__auto__;
}
break;
}
}catch (e56648){if((e56648 instanceof Object)){
var ex__47484__auto__ = e56648;
var statearr_56649_56707 = state_56621;
(statearr_56649_56707[(5)] = ex__47484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56708 = state_56621;
state_56621 = G__56708;
continue;
} else {
return ret_value__47482__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47481__auto__ = function(state_56621){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47481__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47481__auto____1.call(this,state_56621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47481__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47481__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47481__auto__;
})()
;})(switch__47480__auto__,c__47988__auto__,jobs,results,process,async))
})();
var state__47990__auto__ = (function (){var statearr_56650 = f__47989__auto__.call(null);
(statearr_56650[(6)] = c__47988__auto__);

return statearr_56650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47990__auto__);
});})(c__47988__auto__,jobs,results,process,async))
);

return c__47988__auto__;
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
var G__56710 = arguments.length;
switch (G__56710) {
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
var G__56713 = arguments.length;
switch (G__56713) {
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
var G__56716 = arguments.length;
switch (G__56716) {
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
var c__47988__auto___56765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47988__auto___56765,tc,fc){
return (function (){
var f__47989__auto__ = (function (){var switch__47480__auto__ = ((function (c__47988__auto___56765,tc,fc){
return (function (state_56742){
var state_val_56743 = (state_56742[(1)]);
if((state_val_56743 === (7))){
var inst_56738 = (state_56742[(2)]);
var state_56742__$1 = state_56742;
var statearr_56744_56766 = state_56742__$1;
(statearr_56744_56766[(2)] = inst_56738);

(statearr_56744_56766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56743 === (1))){
var state_56742__$1 = state_56742;
var statearr_56745_56767 = state_56742__$1;
(statearr_56745_56767[(2)] = null);

(statearr_56745_56767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56743 === (4))){
var inst_56719 = (state_56742[(7)]);
var inst_56719__$1 = (state_56742[(2)]);
var inst_56720 = (inst_56719__$1 == null);
var state_56742__$1 = (function (){var statearr_56746 = state_56742;
(statearr_56746[(7)] = inst_56719__$1);

return statearr_56746;
})();
if(cljs.core.truth_(inst_56720)){
var statearr_56747_56768 = state_56742__$1;
(statearr_56747_56768[(1)] = (5));

} else {
var statearr_56748_56769 = state_56742__$1;
(statearr_56748_56769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56743 === (13))){
var state_56742__$1 = state_56742;
var statearr_56749_56770 = state_56742__$1;
(statearr_56749_56770[(2)] = null);

(statearr_56749_56770[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56743 === (6))){
var inst_56719 = (state_56742[(7)]);
var inst_56725 = p.call(null,inst_56719);
var state_56742__$1 = state_56742;
if(cljs.core.truth_(inst_56725)){
var statearr_56750_56771 = state_56742__$1;
(statearr_56750_56771[(1)] = (9));

} else {
var statearr_56751_56772 = state_56742__$1;
(statearr_56751_56772[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56743 === (3))){
var inst_56740 = (state_56742[(2)]);
var state_56742__$1 = state_56742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56742__$1,inst_56740);
} else {
if((state_val_56743 === (12))){
var state_56742__$1 = state_56742;
var statearr_56752_56773 = state_56742__$1;
(statearr_56752_56773[(2)] = null);

(statearr_56752_56773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56743 === (2))){
var state_56742__$1 = state_56742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56742__$1,(4),ch);
} else {
if((state_val_56743 === (11))){
var inst_56719 = (state_56742[(7)]);
var inst_56729 = (state_56742[(2)]);
var state_56742__$1 = state_56742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56742__$1,(8),inst_56729,inst_56719);
} else {
if((state_val_56743 === (9))){
var state_56742__$1 = state_56742;
var statearr_56753_56774 = state_56742__$1;
(statearr_56753_56774[(2)] = tc);

(statearr_56753_56774[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56743 === (5))){
var inst_56722 = cljs.core.async.close_BANG_.call(null,tc);
var inst_56723 = cljs.core.async.close_BANG_.call(null,fc);
var state_56742__$1 = (function (){var statearr_56754 = state_56742;
(statearr_56754[(8)] = inst_56722);

return statearr_56754;
})();
var statearr_56755_56775 = state_56742__$1;
(statearr_56755_56775[(2)] = inst_56723);

(statearr_56755_56775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56743 === (14))){
var inst_56736 = (state_56742[(2)]);
var state_56742__$1 = state_56742;
var statearr_56756_56776 = state_56742__$1;
(statearr_56756_56776[(2)] = inst_56736);

(statearr_56756_56776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56743 === (10))){
var state_56742__$1 = state_56742;
var statearr_56757_56777 = state_56742__$1;
(statearr_56757_56777[(2)] = fc);

(statearr_56757_56777[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56743 === (8))){
var inst_56731 = (state_56742[(2)]);
var state_56742__$1 = state_56742;
if(cljs.core.truth_(inst_56731)){
var statearr_56758_56778 = state_56742__$1;
(statearr_56758_56778[(1)] = (12));

} else {
var statearr_56759_56779 = state_56742__$1;
(statearr_56759_56779[(1)] = (13));

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
});})(c__47988__auto___56765,tc,fc))
;
return ((function (switch__47480__auto__,c__47988__auto___56765,tc,fc){
return (function() {
var cljs$core$async$state_machine__47481__auto__ = null;
var cljs$core$async$state_machine__47481__auto____0 = (function (){
var statearr_56760 = [null,null,null,null,null,null,null,null,null];
(statearr_56760[(0)] = cljs$core$async$state_machine__47481__auto__);

(statearr_56760[(1)] = (1));

return statearr_56760;
});
var cljs$core$async$state_machine__47481__auto____1 = (function (state_56742){
while(true){
var ret_value__47482__auto__ = (function (){try{while(true){
var result__47483__auto__ = switch__47480__auto__.call(null,state_56742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47483__auto__;
}
break;
}
}catch (e56761){if((e56761 instanceof Object)){
var ex__47484__auto__ = e56761;
var statearr_56762_56780 = state_56742;
(statearr_56762_56780[(5)] = ex__47484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56781 = state_56742;
state_56742 = G__56781;
continue;
} else {
return ret_value__47482__auto__;
}
break;
}
});
cljs$core$async$state_machine__47481__auto__ = function(state_56742){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47481__auto____1.call(this,state_56742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47481__auto____0;
cljs$core$async$state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47481__auto____1;
return cljs$core$async$state_machine__47481__auto__;
})()
;})(switch__47480__auto__,c__47988__auto___56765,tc,fc))
})();
var state__47990__auto__ = (function (){var statearr_56763 = f__47989__auto__.call(null);
(statearr_56763[(6)] = c__47988__auto___56765);

return statearr_56763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47990__auto__);
});})(c__47988__auto___56765,tc,fc))
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
var c__47988__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47988__auto__){
return (function (){
var f__47989__auto__ = (function (){var switch__47480__auto__ = ((function (c__47988__auto__){
return (function (state_56802){
var state_val_56803 = (state_56802[(1)]);
if((state_val_56803 === (7))){
var inst_56798 = (state_56802[(2)]);
var state_56802__$1 = state_56802;
var statearr_56804_56822 = state_56802__$1;
(statearr_56804_56822[(2)] = inst_56798);

(statearr_56804_56822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (1))){
var inst_56782 = init;
var state_56802__$1 = (function (){var statearr_56805 = state_56802;
(statearr_56805[(7)] = inst_56782);

return statearr_56805;
})();
var statearr_56806_56823 = state_56802__$1;
(statearr_56806_56823[(2)] = null);

(statearr_56806_56823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (4))){
var inst_56785 = (state_56802[(8)]);
var inst_56785__$1 = (state_56802[(2)]);
var inst_56786 = (inst_56785__$1 == null);
var state_56802__$1 = (function (){var statearr_56807 = state_56802;
(statearr_56807[(8)] = inst_56785__$1);

return statearr_56807;
})();
if(cljs.core.truth_(inst_56786)){
var statearr_56808_56824 = state_56802__$1;
(statearr_56808_56824[(1)] = (5));

} else {
var statearr_56809_56825 = state_56802__$1;
(statearr_56809_56825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (6))){
var inst_56785 = (state_56802[(8)]);
var inst_56789 = (state_56802[(9)]);
var inst_56782 = (state_56802[(7)]);
var inst_56789__$1 = f.call(null,inst_56782,inst_56785);
var inst_56790 = cljs.core.reduced_QMARK_.call(null,inst_56789__$1);
var state_56802__$1 = (function (){var statearr_56810 = state_56802;
(statearr_56810[(9)] = inst_56789__$1);

return statearr_56810;
})();
if(inst_56790){
var statearr_56811_56826 = state_56802__$1;
(statearr_56811_56826[(1)] = (8));

} else {
var statearr_56812_56827 = state_56802__$1;
(statearr_56812_56827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (3))){
var inst_56800 = (state_56802[(2)]);
var state_56802__$1 = state_56802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56802__$1,inst_56800);
} else {
if((state_val_56803 === (2))){
var state_56802__$1 = state_56802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56802__$1,(4),ch);
} else {
if((state_val_56803 === (9))){
var inst_56789 = (state_56802[(9)]);
var inst_56782 = inst_56789;
var state_56802__$1 = (function (){var statearr_56813 = state_56802;
(statearr_56813[(7)] = inst_56782);

return statearr_56813;
})();
var statearr_56814_56828 = state_56802__$1;
(statearr_56814_56828[(2)] = null);

(statearr_56814_56828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (5))){
var inst_56782 = (state_56802[(7)]);
var state_56802__$1 = state_56802;
var statearr_56815_56829 = state_56802__$1;
(statearr_56815_56829[(2)] = inst_56782);

(statearr_56815_56829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (10))){
var inst_56796 = (state_56802[(2)]);
var state_56802__$1 = state_56802;
var statearr_56816_56830 = state_56802__$1;
(statearr_56816_56830[(2)] = inst_56796);

(statearr_56816_56830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (8))){
var inst_56789 = (state_56802[(9)]);
var inst_56792 = cljs.core.deref.call(null,inst_56789);
var state_56802__$1 = state_56802;
var statearr_56817_56831 = state_56802__$1;
(statearr_56817_56831[(2)] = inst_56792);

(statearr_56817_56831[(1)] = (10));


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
});})(c__47988__auto__))
;
return ((function (switch__47480__auto__,c__47988__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__47481__auto__ = null;
var cljs$core$async$reduce_$_state_machine__47481__auto____0 = (function (){
var statearr_56818 = [null,null,null,null,null,null,null,null,null,null];
(statearr_56818[(0)] = cljs$core$async$reduce_$_state_machine__47481__auto__);

(statearr_56818[(1)] = (1));

return statearr_56818;
});
var cljs$core$async$reduce_$_state_machine__47481__auto____1 = (function (state_56802){
while(true){
var ret_value__47482__auto__ = (function (){try{while(true){
var result__47483__auto__ = switch__47480__auto__.call(null,state_56802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47483__auto__;
}
break;
}
}catch (e56819){if((e56819 instanceof Object)){
var ex__47484__auto__ = e56819;
var statearr_56820_56832 = state_56802;
(statearr_56820_56832[(5)] = ex__47484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56833 = state_56802;
state_56802 = G__56833;
continue;
} else {
return ret_value__47482__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__47481__auto__ = function(state_56802){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__47481__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__47481__auto____1.call(this,state_56802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__47481__auto____0;
cljs$core$async$reduce_$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__47481__auto____1;
return cljs$core$async$reduce_$_state_machine__47481__auto__;
})()
;})(switch__47480__auto__,c__47988__auto__))
})();
var state__47990__auto__ = (function (){var statearr_56821 = f__47989__auto__.call(null);
(statearr_56821[(6)] = c__47988__auto__);

return statearr_56821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47990__auto__);
});})(c__47988__auto__))
);

return c__47988__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__47988__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47988__auto__,f__$1){
return (function (){
var f__47989__auto__ = (function (){var switch__47480__auto__ = ((function (c__47988__auto__,f__$1){
return (function (state_56839){
var state_val_56840 = (state_56839[(1)]);
if((state_val_56840 === (1))){
var inst_56834 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_56839__$1 = state_56839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56839__$1,(2),inst_56834);
} else {
if((state_val_56840 === (2))){
var inst_56836 = (state_56839[(2)]);
var inst_56837 = f__$1.call(null,inst_56836);
var state_56839__$1 = state_56839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56839__$1,inst_56837);
} else {
return null;
}
}
});})(c__47988__auto__,f__$1))
;
return ((function (switch__47480__auto__,c__47988__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__47481__auto__ = null;
var cljs$core$async$transduce_$_state_machine__47481__auto____0 = (function (){
var statearr_56841 = [null,null,null,null,null,null,null];
(statearr_56841[(0)] = cljs$core$async$transduce_$_state_machine__47481__auto__);

(statearr_56841[(1)] = (1));

return statearr_56841;
});
var cljs$core$async$transduce_$_state_machine__47481__auto____1 = (function (state_56839){
while(true){
var ret_value__47482__auto__ = (function (){try{while(true){
var result__47483__auto__ = switch__47480__auto__.call(null,state_56839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47483__auto__;
}
break;
}
}catch (e56842){if((e56842 instanceof Object)){
var ex__47484__auto__ = e56842;
var statearr_56843_56845 = state_56839;
(statearr_56843_56845[(5)] = ex__47484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56846 = state_56839;
state_56839 = G__56846;
continue;
} else {
return ret_value__47482__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__47481__auto__ = function(state_56839){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__47481__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__47481__auto____1.call(this,state_56839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__47481__auto____0;
cljs$core$async$transduce_$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__47481__auto____1;
return cljs$core$async$transduce_$_state_machine__47481__auto__;
})()
;})(switch__47480__auto__,c__47988__auto__,f__$1))
})();
var state__47990__auto__ = (function (){var statearr_56844 = f__47989__auto__.call(null);
(statearr_56844[(6)] = c__47988__auto__);

return statearr_56844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47990__auto__);
});})(c__47988__auto__,f__$1))
);

return c__47988__auto__;
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
var G__56848 = arguments.length;
switch (G__56848) {
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
var c__47988__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47988__auto__){
return (function (){
var f__47989__auto__ = (function (){var switch__47480__auto__ = ((function (c__47988__auto__){
return (function (state_56873){
var state_val_56874 = (state_56873[(1)]);
if((state_val_56874 === (7))){
var inst_56855 = (state_56873[(2)]);
var state_56873__$1 = state_56873;
var statearr_56875_56896 = state_56873__$1;
(statearr_56875_56896[(2)] = inst_56855);

(statearr_56875_56896[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56874 === (1))){
var inst_56849 = cljs.core.seq.call(null,coll);
var inst_56850 = inst_56849;
var state_56873__$1 = (function (){var statearr_56876 = state_56873;
(statearr_56876[(7)] = inst_56850);

return statearr_56876;
})();
var statearr_56877_56897 = state_56873__$1;
(statearr_56877_56897[(2)] = null);

(statearr_56877_56897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56874 === (4))){
var inst_56850 = (state_56873[(7)]);
var inst_56853 = cljs.core.first.call(null,inst_56850);
var state_56873__$1 = state_56873;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56873__$1,(7),ch,inst_56853);
} else {
if((state_val_56874 === (13))){
var inst_56867 = (state_56873[(2)]);
var state_56873__$1 = state_56873;
var statearr_56878_56898 = state_56873__$1;
(statearr_56878_56898[(2)] = inst_56867);

(statearr_56878_56898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56874 === (6))){
var inst_56858 = (state_56873[(2)]);
var state_56873__$1 = state_56873;
if(cljs.core.truth_(inst_56858)){
var statearr_56879_56899 = state_56873__$1;
(statearr_56879_56899[(1)] = (8));

} else {
var statearr_56880_56900 = state_56873__$1;
(statearr_56880_56900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56874 === (3))){
var inst_56871 = (state_56873[(2)]);
var state_56873__$1 = state_56873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56873__$1,inst_56871);
} else {
if((state_val_56874 === (12))){
var state_56873__$1 = state_56873;
var statearr_56881_56901 = state_56873__$1;
(statearr_56881_56901[(2)] = null);

(statearr_56881_56901[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56874 === (2))){
var inst_56850 = (state_56873[(7)]);
var state_56873__$1 = state_56873;
if(cljs.core.truth_(inst_56850)){
var statearr_56882_56902 = state_56873__$1;
(statearr_56882_56902[(1)] = (4));

} else {
var statearr_56883_56903 = state_56873__$1;
(statearr_56883_56903[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56874 === (11))){
var inst_56864 = cljs.core.async.close_BANG_.call(null,ch);
var state_56873__$1 = state_56873;
var statearr_56884_56904 = state_56873__$1;
(statearr_56884_56904[(2)] = inst_56864);

(statearr_56884_56904[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56874 === (9))){
var state_56873__$1 = state_56873;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56885_56905 = state_56873__$1;
(statearr_56885_56905[(1)] = (11));

} else {
var statearr_56886_56906 = state_56873__$1;
(statearr_56886_56906[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56874 === (5))){
var inst_56850 = (state_56873[(7)]);
var state_56873__$1 = state_56873;
var statearr_56887_56907 = state_56873__$1;
(statearr_56887_56907[(2)] = inst_56850);

(statearr_56887_56907[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56874 === (10))){
var inst_56869 = (state_56873[(2)]);
var state_56873__$1 = state_56873;
var statearr_56888_56908 = state_56873__$1;
(statearr_56888_56908[(2)] = inst_56869);

(statearr_56888_56908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56874 === (8))){
var inst_56850 = (state_56873[(7)]);
var inst_56860 = cljs.core.next.call(null,inst_56850);
var inst_56850__$1 = inst_56860;
var state_56873__$1 = (function (){var statearr_56889 = state_56873;
(statearr_56889[(7)] = inst_56850__$1);

return statearr_56889;
})();
var statearr_56890_56909 = state_56873__$1;
(statearr_56890_56909[(2)] = null);

(statearr_56890_56909[(1)] = (2));


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
});})(c__47988__auto__))
;
return ((function (switch__47480__auto__,c__47988__auto__){
return (function() {
var cljs$core$async$state_machine__47481__auto__ = null;
var cljs$core$async$state_machine__47481__auto____0 = (function (){
var statearr_56891 = [null,null,null,null,null,null,null,null];
(statearr_56891[(0)] = cljs$core$async$state_machine__47481__auto__);

(statearr_56891[(1)] = (1));

return statearr_56891;
});
var cljs$core$async$state_machine__47481__auto____1 = (function (state_56873){
while(true){
var ret_value__47482__auto__ = (function (){try{while(true){
var result__47483__auto__ = switch__47480__auto__.call(null,state_56873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47483__auto__;
}
break;
}
}catch (e56892){if((e56892 instanceof Object)){
var ex__47484__auto__ = e56892;
var statearr_56893_56910 = state_56873;
(statearr_56893_56910[(5)] = ex__47484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56911 = state_56873;
state_56873 = G__56911;
continue;
} else {
return ret_value__47482__auto__;
}
break;
}
});
cljs$core$async$state_machine__47481__auto__ = function(state_56873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47481__auto____1.call(this,state_56873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47481__auto____0;
cljs$core$async$state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47481__auto____1;
return cljs$core$async$state_machine__47481__auto__;
})()
;})(switch__47480__auto__,c__47988__auto__))
})();
var state__47990__auto__ = (function (){var statearr_56894 = f__47989__auto__.call(null);
(statearr_56894[(6)] = c__47988__auto__);

return statearr_56894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47990__auto__);
});})(c__47988__auto__))
);

return c__47988__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56912 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56912 = (function (ch,cs,meta56913){
this.ch = ch;
this.cs = cs;
this.meta56913 = meta56913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async56912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_56914,meta56913__$1){
var self__ = this;
var _56914__$1 = this;
return (new cljs.core.async.t_cljs$core$async56912(self__.ch,self__.cs,meta56913__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async56912.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_56914){
var self__ = this;
var _56914__$1 = this;
return self__.meta56913;
});})(cs))
;

cljs.core.async.t_cljs$core$async56912.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56912.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async56912.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56912.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async56912.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async56912.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async56912.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta56913","meta56913",-1469475919,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async56912.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56912.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56912";

cljs.core.async.t_cljs$core$async56912.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async56912");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56912.
 */
cljs.core.async.__GT_t_cljs$core$async56912 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async56912(ch__$1,cs__$1,meta56913){
return (new cljs.core.async.t_cljs$core$async56912(ch__$1,cs__$1,meta56913));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async56912(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__47988__auto___57134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47988__auto___57134,cs,m,dchan,dctr,done){
return (function (){
var f__47989__auto__ = (function (){var switch__47480__auto__ = ((function (c__47988__auto___57134,cs,m,dchan,dctr,done){
return (function (state_57049){
var state_val_57050 = (state_57049[(1)]);
if((state_val_57050 === (7))){
var inst_57045 = (state_57049[(2)]);
var state_57049__$1 = state_57049;
var statearr_57051_57135 = state_57049__$1;
(statearr_57051_57135[(2)] = inst_57045);

(statearr_57051_57135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (20))){
var inst_56948 = (state_57049[(7)]);
var inst_56960 = cljs.core.first.call(null,inst_56948);
var inst_56961 = cljs.core.nth.call(null,inst_56960,(0),null);
var inst_56962 = cljs.core.nth.call(null,inst_56960,(1),null);
var state_57049__$1 = (function (){var statearr_57052 = state_57049;
(statearr_57052[(8)] = inst_56961);

return statearr_57052;
})();
if(cljs.core.truth_(inst_56962)){
var statearr_57053_57136 = state_57049__$1;
(statearr_57053_57136[(1)] = (22));

} else {
var statearr_57054_57137 = state_57049__$1;
(statearr_57054_57137[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (27))){
var inst_56990 = (state_57049[(9)]);
var inst_56992 = (state_57049[(10)]);
var inst_56997 = (state_57049[(11)]);
var inst_56917 = (state_57049[(12)]);
var inst_56997__$1 = cljs.core._nth.call(null,inst_56990,inst_56992);
var inst_56998 = cljs.core.async.put_BANG_.call(null,inst_56997__$1,inst_56917,done);
var state_57049__$1 = (function (){var statearr_57055 = state_57049;
(statearr_57055[(11)] = inst_56997__$1);

return statearr_57055;
})();
if(cljs.core.truth_(inst_56998)){
var statearr_57056_57138 = state_57049__$1;
(statearr_57056_57138[(1)] = (30));

} else {
var statearr_57057_57139 = state_57049__$1;
(statearr_57057_57139[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (1))){
var state_57049__$1 = state_57049;
var statearr_57058_57140 = state_57049__$1;
(statearr_57058_57140[(2)] = null);

(statearr_57058_57140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (24))){
var inst_56948 = (state_57049[(7)]);
var inst_56967 = (state_57049[(2)]);
var inst_56968 = cljs.core.next.call(null,inst_56948);
var inst_56926 = inst_56968;
var inst_56927 = null;
var inst_56928 = (0);
var inst_56929 = (0);
var state_57049__$1 = (function (){var statearr_57059 = state_57049;
(statearr_57059[(13)] = inst_56929);

(statearr_57059[(14)] = inst_56926);

(statearr_57059[(15)] = inst_56927);

(statearr_57059[(16)] = inst_56967);

(statearr_57059[(17)] = inst_56928);

return statearr_57059;
})();
var statearr_57060_57141 = state_57049__$1;
(statearr_57060_57141[(2)] = null);

(statearr_57060_57141[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (39))){
var state_57049__$1 = state_57049;
var statearr_57064_57142 = state_57049__$1;
(statearr_57064_57142[(2)] = null);

(statearr_57064_57142[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (4))){
var inst_56917 = (state_57049[(12)]);
var inst_56917__$1 = (state_57049[(2)]);
var inst_56918 = (inst_56917__$1 == null);
var state_57049__$1 = (function (){var statearr_57065 = state_57049;
(statearr_57065[(12)] = inst_56917__$1);

return statearr_57065;
})();
if(cljs.core.truth_(inst_56918)){
var statearr_57066_57143 = state_57049__$1;
(statearr_57066_57143[(1)] = (5));

} else {
var statearr_57067_57144 = state_57049__$1;
(statearr_57067_57144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (15))){
var inst_56929 = (state_57049[(13)]);
var inst_56926 = (state_57049[(14)]);
var inst_56927 = (state_57049[(15)]);
var inst_56928 = (state_57049[(17)]);
var inst_56944 = (state_57049[(2)]);
var inst_56945 = (inst_56929 + (1));
var tmp57061 = inst_56926;
var tmp57062 = inst_56927;
var tmp57063 = inst_56928;
var inst_56926__$1 = tmp57061;
var inst_56927__$1 = tmp57062;
var inst_56928__$1 = tmp57063;
var inst_56929__$1 = inst_56945;
var state_57049__$1 = (function (){var statearr_57068 = state_57049;
(statearr_57068[(13)] = inst_56929__$1);

(statearr_57068[(18)] = inst_56944);

(statearr_57068[(14)] = inst_56926__$1);

(statearr_57068[(15)] = inst_56927__$1);

(statearr_57068[(17)] = inst_56928__$1);

return statearr_57068;
})();
var statearr_57069_57145 = state_57049__$1;
(statearr_57069_57145[(2)] = null);

(statearr_57069_57145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (21))){
var inst_56971 = (state_57049[(2)]);
var state_57049__$1 = state_57049;
var statearr_57073_57146 = state_57049__$1;
(statearr_57073_57146[(2)] = inst_56971);

(statearr_57073_57146[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (31))){
var inst_56997 = (state_57049[(11)]);
var inst_57001 = done.call(null,null);
var inst_57002 = cljs.core.async.untap_STAR_.call(null,m,inst_56997);
var state_57049__$1 = (function (){var statearr_57074 = state_57049;
(statearr_57074[(19)] = inst_57001);

return statearr_57074;
})();
var statearr_57075_57147 = state_57049__$1;
(statearr_57075_57147[(2)] = inst_57002);

(statearr_57075_57147[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (32))){
var inst_56990 = (state_57049[(9)]);
var inst_56989 = (state_57049[(20)]);
var inst_56991 = (state_57049[(21)]);
var inst_56992 = (state_57049[(10)]);
var inst_57004 = (state_57049[(2)]);
var inst_57005 = (inst_56992 + (1));
var tmp57070 = inst_56990;
var tmp57071 = inst_56989;
var tmp57072 = inst_56991;
var inst_56989__$1 = tmp57071;
var inst_56990__$1 = tmp57070;
var inst_56991__$1 = tmp57072;
var inst_56992__$1 = inst_57005;
var state_57049__$1 = (function (){var statearr_57076 = state_57049;
(statearr_57076[(9)] = inst_56990__$1);

(statearr_57076[(20)] = inst_56989__$1);

(statearr_57076[(21)] = inst_56991__$1);

(statearr_57076[(10)] = inst_56992__$1);

(statearr_57076[(22)] = inst_57004);

return statearr_57076;
})();
var statearr_57077_57148 = state_57049__$1;
(statearr_57077_57148[(2)] = null);

(statearr_57077_57148[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (40))){
var inst_57017 = (state_57049[(23)]);
var inst_57021 = done.call(null,null);
var inst_57022 = cljs.core.async.untap_STAR_.call(null,m,inst_57017);
var state_57049__$1 = (function (){var statearr_57078 = state_57049;
(statearr_57078[(24)] = inst_57021);

return statearr_57078;
})();
var statearr_57079_57149 = state_57049__$1;
(statearr_57079_57149[(2)] = inst_57022);

(statearr_57079_57149[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (33))){
var inst_57008 = (state_57049[(25)]);
var inst_57010 = cljs.core.chunked_seq_QMARK_.call(null,inst_57008);
var state_57049__$1 = state_57049;
if(inst_57010){
var statearr_57080_57150 = state_57049__$1;
(statearr_57080_57150[(1)] = (36));

} else {
var statearr_57081_57151 = state_57049__$1;
(statearr_57081_57151[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (13))){
var inst_56938 = (state_57049[(26)]);
var inst_56941 = cljs.core.async.close_BANG_.call(null,inst_56938);
var state_57049__$1 = state_57049;
var statearr_57082_57152 = state_57049__$1;
(statearr_57082_57152[(2)] = inst_56941);

(statearr_57082_57152[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (22))){
var inst_56961 = (state_57049[(8)]);
var inst_56964 = cljs.core.async.close_BANG_.call(null,inst_56961);
var state_57049__$1 = state_57049;
var statearr_57083_57153 = state_57049__$1;
(statearr_57083_57153[(2)] = inst_56964);

(statearr_57083_57153[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (36))){
var inst_57008 = (state_57049[(25)]);
var inst_57012 = cljs.core.chunk_first.call(null,inst_57008);
var inst_57013 = cljs.core.chunk_rest.call(null,inst_57008);
var inst_57014 = cljs.core.count.call(null,inst_57012);
var inst_56989 = inst_57013;
var inst_56990 = inst_57012;
var inst_56991 = inst_57014;
var inst_56992 = (0);
var state_57049__$1 = (function (){var statearr_57084 = state_57049;
(statearr_57084[(9)] = inst_56990);

(statearr_57084[(20)] = inst_56989);

(statearr_57084[(21)] = inst_56991);

(statearr_57084[(10)] = inst_56992);

return statearr_57084;
})();
var statearr_57085_57154 = state_57049__$1;
(statearr_57085_57154[(2)] = null);

(statearr_57085_57154[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (41))){
var inst_57008 = (state_57049[(25)]);
var inst_57024 = (state_57049[(2)]);
var inst_57025 = cljs.core.next.call(null,inst_57008);
var inst_56989 = inst_57025;
var inst_56990 = null;
var inst_56991 = (0);
var inst_56992 = (0);
var state_57049__$1 = (function (){var statearr_57086 = state_57049;
(statearr_57086[(9)] = inst_56990);

(statearr_57086[(20)] = inst_56989);

(statearr_57086[(21)] = inst_56991);

(statearr_57086[(10)] = inst_56992);

(statearr_57086[(27)] = inst_57024);

return statearr_57086;
})();
var statearr_57087_57155 = state_57049__$1;
(statearr_57087_57155[(2)] = null);

(statearr_57087_57155[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (43))){
var state_57049__$1 = state_57049;
var statearr_57088_57156 = state_57049__$1;
(statearr_57088_57156[(2)] = null);

(statearr_57088_57156[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (29))){
var inst_57033 = (state_57049[(2)]);
var state_57049__$1 = state_57049;
var statearr_57089_57157 = state_57049__$1;
(statearr_57089_57157[(2)] = inst_57033);

(statearr_57089_57157[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (44))){
var inst_57042 = (state_57049[(2)]);
var state_57049__$1 = (function (){var statearr_57090 = state_57049;
(statearr_57090[(28)] = inst_57042);

return statearr_57090;
})();
var statearr_57091_57158 = state_57049__$1;
(statearr_57091_57158[(2)] = null);

(statearr_57091_57158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (6))){
var inst_56981 = (state_57049[(29)]);
var inst_56980 = cljs.core.deref.call(null,cs);
var inst_56981__$1 = cljs.core.keys.call(null,inst_56980);
var inst_56982 = cljs.core.count.call(null,inst_56981__$1);
var inst_56983 = cljs.core.reset_BANG_.call(null,dctr,inst_56982);
var inst_56988 = cljs.core.seq.call(null,inst_56981__$1);
var inst_56989 = inst_56988;
var inst_56990 = null;
var inst_56991 = (0);
var inst_56992 = (0);
var state_57049__$1 = (function (){var statearr_57092 = state_57049;
(statearr_57092[(29)] = inst_56981__$1);

(statearr_57092[(9)] = inst_56990);

(statearr_57092[(20)] = inst_56989);

(statearr_57092[(21)] = inst_56991);

(statearr_57092[(10)] = inst_56992);

(statearr_57092[(30)] = inst_56983);

return statearr_57092;
})();
var statearr_57093_57159 = state_57049__$1;
(statearr_57093_57159[(2)] = null);

(statearr_57093_57159[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (28))){
var inst_56989 = (state_57049[(20)]);
var inst_57008 = (state_57049[(25)]);
var inst_57008__$1 = cljs.core.seq.call(null,inst_56989);
var state_57049__$1 = (function (){var statearr_57094 = state_57049;
(statearr_57094[(25)] = inst_57008__$1);

return statearr_57094;
})();
if(inst_57008__$1){
var statearr_57095_57160 = state_57049__$1;
(statearr_57095_57160[(1)] = (33));

} else {
var statearr_57096_57161 = state_57049__$1;
(statearr_57096_57161[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (25))){
var inst_56991 = (state_57049[(21)]);
var inst_56992 = (state_57049[(10)]);
var inst_56994 = (inst_56992 < inst_56991);
var inst_56995 = inst_56994;
var state_57049__$1 = state_57049;
if(cljs.core.truth_(inst_56995)){
var statearr_57097_57162 = state_57049__$1;
(statearr_57097_57162[(1)] = (27));

} else {
var statearr_57098_57163 = state_57049__$1;
(statearr_57098_57163[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (34))){
var state_57049__$1 = state_57049;
var statearr_57099_57164 = state_57049__$1;
(statearr_57099_57164[(2)] = null);

(statearr_57099_57164[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (17))){
var state_57049__$1 = state_57049;
var statearr_57100_57165 = state_57049__$1;
(statearr_57100_57165[(2)] = null);

(statearr_57100_57165[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (3))){
var inst_57047 = (state_57049[(2)]);
var state_57049__$1 = state_57049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57049__$1,inst_57047);
} else {
if((state_val_57050 === (12))){
var inst_56976 = (state_57049[(2)]);
var state_57049__$1 = state_57049;
var statearr_57101_57166 = state_57049__$1;
(statearr_57101_57166[(2)] = inst_56976);

(statearr_57101_57166[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (2))){
var state_57049__$1 = state_57049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57049__$1,(4),ch);
} else {
if((state_val_57050 === (23))){
var state_57049__$1 = state_57049;
var statearr_57102_57167 = state_57049__$1;
(statearr_57102_57167[(2)] = null);

(statearr_57102_57167[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (35))){
var inst_57031 = (state_57049[(2)]);
var state_57049__$1 = state_57049;
var statearr_57103_57168 = state_57049__$1;
(statearr_57103_57168[(2)] = inst_57031);

(statearr_57103_57168[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (19))){
var inst_56948 = (state_57049[(7)]);
var inst_56952 = cljs.core.chunk_first.call(null,inst_56948);
var inst_56953 = cljs.core.chunk_rest.call(null,inst_56948);
var inst_56954 = cljs.core.count.call(null,inst_56952);
var inst_56926 = inst_56953;
var inst_56927 = inst_56952;
var inst_56928 = inst_56954;
var inst_56929 = (0);
var state_57049__$1 = (function (){var statearr_57104 = state_57049;
(statearr_57104[(13)] = inst_56929);

(statearr_57104[(14)] = inst_56926);

(statearr_57104[(15)] = inst_56927);

(statearr_57104[(17)] = inst_56928);

return statearr_57104;
})();
var statearr_57105_57169 = state_57049__$1;
(statearr_57105_57169[(2)] = null);

(statearr_57105_57169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (11))){
var inst_56926 = (state_57049[(14)]);
var inst_56948 = (state_57049[(7)]);
var inst_56948__$1 = cljs.core.seq.call(null,inst_56926);
var state_57049__$1 = (function (){var statearr_57106 = state_57049;
(statearr_57106[(7)] = inst_56948__$1);

return statearr_57106;
})();
if(inst_56948__$1){
var statearr_57107_57170 = state_57049__$1;
(statearr_57107_57170[(1)] = (16));

} else {
var statearr_57108_57171 = state_57049__$1;
(statearr_57108_57171[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (9))){
var inst_56978 = (state_57049[(2)]);
var state_57049__$1 = state_57049;
var statearr_57109_57172 = state_57049__$1;
(statearr_57109_57172[(2)] = inst_56978);

(statearr_57109_57172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (5))){
var inst_56924 = cljs.core.deref.call(null,cs);
var inst_56925 = cljs.core.seq.call(null,inst_56924);
var inst_56926 = inst_56925;
var inst_56927 = null;
var inst_56928 = (0);
var inst_56929 = (0);
var state_57049__$1 = (function (){var statearr_57110 = state_57049;
(statearr_57110[(13)] = inst_56929);

(statearr_57110[(14)] = inst_56926);

(statearr_57110[(15)] = inst_56927);

(statearr_57110[(17)] = inst_56928);

return statearr_57110;
})();
var statearr_57111_57173 = state_57049__$1;
(statearr_57111_57173[(2)] = null);

(statearr_57111_57173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (14))){
var state_57049__$1 = state_57049;
var statearr_57112_57174 = state_57049__$1;
(statearr_57112_57174[(2)] = null);

(statearr_57112_57174[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (45))){
var inst_57039 = (state_57049[(2)]);
var state_57049__$1 = state_57049;
var statearr_57113_57175 = state_57049__$1;
(statearr_57113_57175[(2)] = inst_57039);

(statearr_57113_57175[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (26))){
var inst_56981 = (state_57049[(29)]);
var inst_57035 = (state_57049[(2)]);
var inst_57036 = cljs.core.seq.call(null,inst_56981);
var state_57049__$1 = (function (){var statearr_57114 = state_57049;
(statearr_57114[(31)] = inst_57035);

return statearr_57114;
})();
if(inst_57036){
var statearr_57115_57176 = state_57049__$1;
(statearr_57115_57176[(1)] = (42));

} else {
var statearr_57116_57177 = state_57049__$1;
(statearr_57116_57177[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (16))){
var inst_56948 = (state_57049[(7)]);
var inst_56950 = cljs.core.chunked_seq_QMARK_.call(null,inst_56948);
var state_57049__$1 = state_57049;
if(inst_56950){
var statearr_57117_57178 = state_57049__$1;
(statearr_57117_57178[(1)] = (19));

} else {
var statearr_57118_57179 = state_57049__$1;
(statearr_57118_57179[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (38))){
var inst_57028 = (state_57049[(2)]);
var state_57049__$1 = state_57049;
var statearr_57119_57180 = state_57049__$1;
(statearr_57119_57180[(2)] = inst_57028);

(statearr_57119_57180[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (30))){
var state_57049__$1 = state_57049;
var statearr_57120_57181 = state_57049__$1;
(statearr_57120_57181[(2)] = null);

(statearr_57120_57181[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (10))){
var inst_56929 = (state_57049[(13)]);
var inst_56927 = (state_57049[(15)]);
var inst_56937 = cljs.core._nth.call(null,inst_56927,inst_56929);
var inst_56938 = cljs.core.nth.call(null,inst_56937,(0),null);
var inst_56939 = cljs.core.nth.call(null,inst_56937,(1),null);
var state_57049__$1 = (function (){var statearr_57121 = state_57049;
(statearr_57121[(26)] = inst_56938);

return statearr_57121;
})();
if(cljs.core.truth_(inst_56939)){
var statearr_57122_57182 = state_57049__$1;
(statearr_57122_57182[(1)] = (13));

} else {
var statearr_57123_57183 = state_57049__$1;
(statearr_57123_57183[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (18))){
var inst_56974 = (state_57049[(2)]);
var state_57049__$1 = state_57049;
var statearr_57124_57184 = state_57049__$1;
(statearr_57124_57184[(2)] = inst_56974);

(statearr_57124_57184[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (42))){
var state_57049__$1 = state_57049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57049__$1,(45),dchan);
} else {
if((state_val_57050 === (37))){
var inst_57017 = (state_57049[(23)]);
var inst_57008 = (state_57049[(25)]);
var inst_56917 = (state_57049[(12)]);
var inst_57017__$1 = cljs.core.first.call(null,inst_57008);
var inst_57018 = cljs.core.async.put_BANG_.call(null,inst_57017__$1,inst_56917,done);
var state_57049__$1 = (function (){var statearr_57125 = state_57049;
(statearr_57125[(23)] = inst_57017__$1);

return statearr_57125;
})();
if(cljs.core.truth_(inst_57018)){
var statearr_57126_57185 = state_57049__$1;
(statearr_57126_57185[(1)] = (39));

} else {
var statearr_57127_57186 = state_57049__$1;
(statearr_57127_57186[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57050 === (8))){
var inst_56929 = (state_57049[(13)]);
var inst_56928 = (state_57049[(17)]);
var inst_56931 = (inst_56929 < inst_56928);
var inst_56932 = inst_56931;
var state_57049__$1 = state_57049;
if(cljs.core.truth_(inst_56932)){
var statearr_57128_57187 = state_57049__$1;
(statearr_57128_57187[(1)] = (10));

} else {
var statearr_57129_57188 = state_57049__$1;
(statearr_57129_57188[(1)] = (11));

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
});})(c__47988__auto___57134,cs,m,dchan,dctr,done))
;
return ((function (switch__47480__auto__,c__47988__auto___57134,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__47481__auto__ = null;
var cljs$core$async$mult_$_state_machine__47481__auto____0 = (function (){
var statearr_57130 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57130[(0)] = cljs$core$async$mult_$_state_machine__47481__auto__);

(statearr_57130[(1)] = (1));

return statearr_57130;
});
var cljs$core$async$mult_$_state_machine__47481__auto____1 = (function (state_57049){
while(true){
var ret_value__47482__auto__ = (function (){try{while(true){
var result__47483__auto__ = switch__47480__auto__.call(null,state_57049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47483__auto__;
}
break;
}
}catch (e57131){if((e57131 instanceof Object)){
var ex__47484__auto__ = e57131;
var statearr_57132_57189 = state_57049;
(statearr_57132_57189[(5)] = ex__47484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57190 = state_57049;
state_57049 = G__57190;
continue;
} else {
return ret_value__47482__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__47481__auto__ = function(state_57049){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__47481__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__47481__auto____1.call(this,state_57049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__47481__auto____0;
cljs$core$async$mult_$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__47481__auto____1;
return cljs$core$async$mult_$_state_machine__47481__auto__;
})()
;})(switch__47480__auto__,c__47988__auto___57134,cs,m,dchan,dctr,done))
})();
var state__47990__auto__ = (function (){var statearr_57133 = f__47989__auto__.call(null);
(statearr_57133[(6)] = c__47988__auto___57134);

return statearr_57133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47990__auto__);
});})(c__47988__auto___57134,cs,m,dchan,dctr,done))
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
var G__57192 = arguments.length;
switch (G__57192) {
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
var len__4517__auto___57204 = arguments.length;
var i__4518__auto___57205 = (0);
while(true){
if((i__4518__auto___57205 < len__4517__auto___57204)){
args__4520__auto__.push((arguments[i__4518__auto___57205]));

var G__57206 = (i__4518__auto___57205 + (1));
i__4518__auto___57205 = G__57206;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((3) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4521__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__57198){
var map__57199 = p__57198;
var map__57199__$1 = ((((!((map__57199 == null)))?(((((map__57199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57199):map__57199);
var opts = map__57199__$1;
var statearr_57201_57207 = state;
(statearr_57201_57207[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__57199,map__57199__$1,opts){
return (function (val){
var statearr_57202_57208 = state;
(statearr_57202_57208[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__57199,map__57199__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_57203_57209 = state;
(statearr_57203_57209[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq57194){
var G__57195 = cljs.core.first.call(null,seq57194);
var seq57194__$1 = cljs.core.next.call(null,seq57194);
var G__57196 = cljs.core.first.call(null,seq57194__$1);
var seq57194__$2 = cljs.core.next.call(null,seq57194__$1);
var G__57197 = cljs.core.first.call(null,seq57194__$2);
var seq57194__$3 = cljs.core.next.call(null,seq57194__$2);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57195,G__57196,G__57197,seq57194__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57210 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57210 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta57211){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta57211 = meta57211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async57210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_57212,meta57211__$1){
var self__ = this;
var _57212__$1 = this;
return (new cljs.core.async.t_cljs$core$async57210(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta57211__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57210.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_57212){
var self__ = this;
var _57212__$1 = this;
return self__.meta57211;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57210.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57210.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57210.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57210.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57210.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57210.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57210.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57210.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async57210.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta57211","meta57211",558591304,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57210.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async57210.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57210";

cljs.core.async.t_cljs$core$async57210.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async57210");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57210.
 */
cljs.core.async.__GT_t_cljs$core$async57210 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async57210(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta57211){
return (new cljs.core.async.t_cljs$core$async57210(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta57211));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async57210(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47988__auto___57374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47988__auto___57374,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__47989__auto__ = (function (){var switch__47480__auto__ = ((function (c__47988__auto___57374,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_57314){
var state_val_57315 = (state_57314[(1)]);
if((state_val_57315 === (7))){
var inst_57229 = (state_57314[(2)]);
var state_57314__$1 = state_57314;
var statearr_57316_57375 = state_57314__$1;
(statearr_57316_57375[(2)] = inst_57229);

(statearr_57316_57375[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (20))){
var inst_57241 = (state_57314[(7)]);
var state_57314__$1 = state_57314;
var statearr_57317_57376 = state_57314__$1;
(statearr_57317_57376[(2)] = inst_57241);

(statearr_57317_57376[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (27))){
var state_57314__$1 = state_57314;
var statearr_57318_57377 = state_57314__$1;
(statearr_57318_57377[(2)] = null);

(statearr_57318_57377[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (1))){
var inst_57216 = (state_57314[(8)]);
var inst_57216__$1 = calc_state.call(null);
var inst_57218 = (inst_57216__$1 == null);
var inst_57219 = cljs.core.not.call(null,inst_57218);
var state_57314__$1 = (function (){var statearr_57319 = state_57314;
(statearr_57319[(8)] = inst_57216__$1);

return statearr_57319;
})();
if(inst_57219){
var statearr_57320_57378 = state_57314__$1;
(statearr_57320_57378[(1)] = (2));

} else {
var statearr_57321_57379 = state_57314__$1;
(statearr_57321_57379[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (24))){
var inst_57288 = (state_57314[(9)]);
var inst_57265 = (state_57314[(10)]);
var inst_57274 = (state_57314[(11)]);
var inst_57288__$1 = inst_57265.call(null,inst_57274);
var state_57314__$1 = (function (){var statearr_57322 = state_57314;
(statearr_57322[(9)] = inst_57288__$1);

return statearr_57322;
})();
if(cljs.core.truth_(inst_57288__$1)){
var statearr_57323_57380 = state_57314__$1;
(statearr_57323_57380[(1)] = (29));

} else {
var statearr_57324_57381 = state_57314__$1;
(statearr_57324_57381[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (4))){
var inst_57232 = (state_57314[(2)]);
var state_57314__$1 = state_57314;
if(cljs.core.truth_(inst_57232)){
var statearr_57325_57382 = state_57314__$1;
(statearr_57325_57382[(1)] = (8));

} else {
var statearr_57326_57383 = state_57314__$1;
(statearr_57326_57383[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (15))){
var inst_57259 = (state_57314[(2)]);
var state_57314__$1 = state_57314;
if(cljs.core.truth_(inst_57259)){
var statearr_57327_57384 = state_57314__$1;
(statearr_57327_57384[(1)] = (19));

} else {
var statearr_57328_57385 = state_57314__$1;
(statearr_57328_57385[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (21))){
var inst_57264 = (state_57314[(12)]);
var inst_57264__$1 = (state_57314[(2)]);
var inst_57265 = cljs.core.get.call(null,inst_57264__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_57266 = cljs.core.get.call(null,inst_57264__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_57267 = cljs.core.get.call(null,inst_57264__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_57314__$1 = (function (){var statearr_57329 = state_57314;
(statearr_57329[(13)] = inst_57266);

(statearr_57329[(12)] = inst_57264__$1);

(statearr_57329[(10)] = inst_57265);

return statearr_57329;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_57314__$1,(22),inst_57267);
} else {
if((state_val_57315 === (31))){
var inst_57296 = (state_57314[(2)]);
var state_57314__$1 = state_57314;
if(cljs.core.truth_(inst_57296)){
var statearr_57330_57386 = state_57314__$1;
(statearr_57330_57386[(1)] = (32));

} else {
var statearr_57331_57387 = state_57314__$1;
(statearr_57331_57387[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (32))){
var inst_57273 = (state_57314[(14)]);
var state_57314__$1 = state_57314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57314__$1,(35),out,inst_57273);
} else {
if((state_val_57315 === (33))){
var inst_57264 = (state_57314[(12)]);
var inst_57241 = inst_57264;
var state_57314__$1 = (function (){var statearr_57332 = state_57314;
(statearr_57332[(7)] = inst_57241);

return statearr_57332;
})();
var statearr_57333_57388 = state_57314__$1;
(statearr_57333_57388[(2)] = null);

(statearr_57333_57388[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (13))){
var inst_57241 = (state_57314[(7)]);
var inst_57248 = inst_57241.cljs$lang$protocol_mask$partition0$;
var inst_57249 = (inst_57248 & (64));
var inst_57250 = inst_57241.cljs$core$ISeq$;
var inst_57251 = (cljs.core.PROTOCOL_SENTINEL === inst_57250);
var inst_57252 = ((inst_57249) || (inst_57251));
var state_57314__$1 = state_57314;
if(cljs.core.truth_(inst_57252)){
var statearr_57334_57389 = state_57314__$1;
(statearr_57334_57389[(1)] = (16));

} else {
var statearr_57335_57390 = state_57314__$1;
(statearr_57335_57390[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (22))){
var inst_57273 = (state_57314[(14)]);
var inst_57274 = (state_57314[(11)]);
var inst_57272 = (state_57314[(2)]);
var inst_57273__$1 = cljs.core.nth.call(null,inst_57272,(0),null);
var inst_57274__$1 = cljs.core.nth.call(null,inst_57272,(1),null);
var inst_57275 = (inst_57273__$1 == null);
var inst_57276 = cljs.core._EQ_.call(null,inst_57274__$1,change);
var inst_57277 = ((inst_57275) || (inst_57276));
var state_57314__$1 = (function (){var statearr_57336 = state_57314;
(statearr_57336[(14)] = inst_57273__$1);

(statearr_57336[(11)] = inst_57274__$1);

return statearr_57336;
})();
if(cljs.core.truth_(inst_57277)){
var statearr_57337_57391 = state_57314__$1;
(statearr_57337_57391[(1)] = (23));

} else {
var statearr_57338_57392 = state_57314__$1;
(statearr_57338_57392[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (36))){
var inst_57264 = (state_57314[(12)]);
var inst_57241 = inst_57264;
var state_57314__$1 = (function (){var statearr_57339 = state_57314;
(statearr_57339[(7)] = inst_57241);

return statearr_57339;
})();
var statearr_57340_57393 = state_57314__$1;
(statearr_57340_57393[(2)] = null);

(statearr_57340_57393[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (29))){
var inst_57288 = (state_57314[(9)]);
var state_57314__$1 = state_57314;
var statearr_57341_57394 = state_57314__$1;
(statearr_57341_57394[(2)] = inst_57288);

(statearr_57341_57394[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (6))){
var state_57314__$1 = state_57314;
var statearr_57342_57395 = state_57314__$1;
(statearr_57342_57395[(2)] = false);

(statearr_57342_57395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (28))){
var inst_57284 = (state_57314[(2)]);
var inst_57285 = calc_state.call(null);
var inst_57241 = inst_57285;
var state_57314__$1 = (function (){var statearr_57343 = state_57314;
(statearr_57343[(15)] = inst_57284);

(statearr_57343[(7)] = inst_57241);

return statearr_57343;
})();
var statearr_57344_57396 = state_57314__$1;
(statearr_57344_57396[(2)] = null);

(statearr_57344_57396[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (25))){
var inst_57310 = (state_57314[(2)]);
var state_57314__$1 = state_57314;
var statearr_57345_57397 = state_57314__$1;
(statearr_57345_57397[(2)] = inst_57310);

(statearr_57345_57397[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (34))){
var inst_57308 = (state_57314[(2)]);
var state_57314__$1 = state_57314;
var statearr_57346_57398 = state_57314__$1;
(statearr_57346_57398[(2)] = inst_57308);

(statearr_57346_57398[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (17))){
var state_57314__$1 = state_57314;
var statearr_57347_57399 = state_57314__$1;
(statearr_57347_57399[(2)] = false);

(statearr_57347_57399[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (3))){
var state_57314__$1 = state_57314;
var statearr_57348_57400 = state_57314__$1;
(statearr_57348_57400[(2)] = false);

(statearr_57348_57400[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (12))){
var inst_57312 = (state_57314[(2)]);
var state_57314__$1 = state_57314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57314__$1,inst_57312);
} else {
if((state_val_57315 === (2))){
var inst_57216 = (state_57314[(8)]);
var inst_57221 = inst_57216.cljs$lang$protocol_mask$partition0$;
var inst_57222 = (inst_57221 & (64));
var inst_57223 = inst_57216.cljs$core$ISeq$;
var inst_57224 = (cljs.core.PROTOCOL_SENTINEL === inst_57223);
var inst_57225 = ((inst_57222) || (inst_57224));
var state_57314__$1 = state_57314;
if(cljs.core.truth_(inst_57225)){
var statearr_57349_57401 = state_57314__$1;
(statearr_57349_57401[(1)] = (5));

} else {
var statearr_57350_57402 = state_57314__$1;
(statearr_57350_57402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (23))){
var inst_57273 = (state_57314[(14)]);
var inst_57279 = (inst_57273 == null);
var state_57314__$1 = state_57314;
if(cljs.core.truth_(inst_57279)){
var statearr_57351_57403 = state_57314__$1;
(statearr_57351_57403[(1)] = (26));

} else {
var statearr_57352_57404 = state_57314__$1;
(statearr_57352_57404[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (35))){
var inst_57299 = (state_57314[(2)]);
var state_57314__$1 = state_57314;
if(cljs.core.truth_(inst_57299)){
var statearr_57353_57405 = state_57314__$1;
(statearr_57353_57405[(1)] = (36));

} else {
var statearr_57354_57406 = state_57314__$1;
(statearr_57354_57406[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (19))){
var inst_57241 = (state_57314[(7)]);
var inst_57261 = cljs.core.apply.call(null,cljs.core.hash_map,inst_57241);
var state_57314__$1 = state_57314;
var statearr_57355_57407 = state_57314__$1;
(statearr_57355_57407[(2)] = inst_57261);

(statearr_57355_57407[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (11))){
var inst_57241 = (state_57314[(7)]);
var inst_57245 = (inst_57241 == null);
var inst_57246 = cljs.core.not.call(null,inst_57245);
var state_57314__$1 = state_57314;
if(inst_57246){
var statearr_57356_57408 = state_57314__$1;
(statearr_57356_57408[(1)] = (13));

} else {
var statearr_57357_57409 = state_57314__$1;
(statearr_57357_57409[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (9))){
var inst_57216 = (state_57314[(8)]);
var state_57314__$1 = state_57314;
var statearr_57358_57410 = state_57314__$1;
(statearr_57358_57410[(2)] = inst_57216);

(statearr_57358_57410[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (5))){
var state_57314__$1 = state_57314;
var statearr_57359_57411 = state_57314__$1;
(statearr_57359_57411[(2)] = true);

(statearr_57359_57411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (14))){
var state_57314__$1 = state_57314;
var statearr_57360_57412 = state_57314__$1;
(statearr_57360_57412[(2)] = false);

(statearr_57360_57412[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (26))){
var inst_57274 = (state_57314[(11)]);
var inst_57281 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_57274);
var state_57314__$1 = state_57314;
var statearr_57361_57413 = state_57314__$1;
(statearr_57361_57413[(2)] = inst_57281);

(statearr_57361_57413[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (16))){
var state_57314__$1 = state_57314;
var statearr_57362_57414 = state_57314__$1;
(statearr_57362_57414[(2)] = true);

(statearr_57362_57414[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (38))){
var inst_57304 = (state_57314[(2)]);
var state_57314__$1 = state_57314;
var statearr_57363_57415 = state_57314__$1;
(statearr_57363_57415[(2)] = inst_57304);

(statearr_57363_57415[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (30))){
var inst_57266 = (state_57314[(13)]);
var inst_57265 = (state_57314[(10)]);
var inst_57274 = (state_57314[(11)]);
var inst_57291 = cljs.core.empty_QMARK_.call(null,inst_57265);
var inst_57292 = inst_57266.call(null,inst_57274);
var inst_57293 = cljs.core.not.call(null,inst_57292);
var inst_57294 = ((inst_57291) && (inst_57293));
var state_57314__$1 = state_57314;
var statearr_57364_57416 = state_57314__$1;
(statearr_57364_57416[(2)] = inst_57294);

(statearr_57364_57416[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (10))){
var inst_57216 = (state_57314[(8)]);
var inst_57237 = (state_57314[(2)]);
var inst_57238 = cljs.core.get.call(null,inst_57237,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_57239 = cljs.core.get.call(null,inst_57237,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_57240 = cljs.core.get.call(null,inst_57237,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_57241 = inst_57216;
var state_57314__$1 = (function (){var statearr_57365 = state_57314;
(statearr_57365[(16)] = inst_57239);

(statearr_57365[(17)] = inst_57238);

(statearr_57365[(7)] = inst_57241);

(statearr_57365[(18)] = inst_57240);

return statearr_57365;
})();
var statearr_57366_57417 = state_57314__$1;
(statearr_57366_57417[(2)] = null);

(statearr_57366_57417[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (18))){
var inst_57256 = (state_57314[(2)]);
var state_57314__$1 = state_57314;
var statearr_57367_57418 = state_57314__$1;
(statearr_57367_57418[(2)] = inst_57256);

(statearr_57367_57418[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (37))){
var state_57314__$1 = state_57314;
var statearr_57368_57419 = state_57314__$1;
(statearr_57368_57419[(2)] = null);

(statearr_57368_57419[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57315 === (8))){
var inst_57216 = (state_57314[(8)]);
var inst_57234 = cljs.core.apply.call(null,cljs.core.hash_map,inst_57216);
var state_57314__$1 = state_57314;
var statearr_57369_57420 = state_57314__$1;
(statearr_57369_57420[(2)] = inst_57234);

(statearr_57369_57420[(1)] = (10));


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
});})(c__47988__auto___57374,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__47480__auto__,c__47988__auto___57374,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__47481__auto__ = null;
var cljs$core$async$mix_$_state_machine__47481__auto____0 = (function (){
var statearr_57370 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57370[(0)] = cljs$core$async$mix_$_state_machine__47481__auto__);

(statearr_57370[(1)] = (1));

return statearr_57370;
});
var cljs$core$async$mix_$_state_machine__47481__auto____1 = (function (state_57314){
while(true){
var ret_value__47482__auto__ = (function (){try{while(true){
var result__47483__auto__ = switch__47480__auto__.call(null,state_57314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47483__auto__;
}
break;
}
}catch (e57371){if((e57371 instanceof Object)){
var ex__47484__auto__ = e57371;
var statearr_57372_57421 = state_57314;
(statearr_57372_57421[(5)] = ex__47484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57422 = state_57314;
state_57314 = G__57422;
continue;
} else {
return ret_value__47482__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__47481__auto__ = function(state_57314){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__47481__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__47481__auto____1.call(this,state_57314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__47481__auto____0;
cljs$core$async$mix_$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__47481__auto____1;
return cljs$core$async$mix_$_state_machine__47481__auto__;
})()
;})(switch__47480__auto__,c__47988__auto___57374,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__47990__auto__ = (function (){var statearr_57373 = f__47989__auto__.call(null);
(statearr_57373[(6)] = c__47988__auto___57374);

return statearr_57373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47990__auto__);
});})(c__47988__auto___57374,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__57424 = arguments.length;
switch (G__57424) {
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
var G__57428 = arguments.length;
switch (G__57428) {
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
return (function (p1__57426_SHARP_){
if(cljs.core.truth_(p1__57426_SHARP_.call(null,topic))){
return p1__57426_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__57426_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3936__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57429 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57429 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta57430){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta57430 = meta57430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async57429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_57431,meta57430__$1){
var self__ = this;
var _57431__$1 = this;
return (new cljs.core.async.t_cljs$core$async57429(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta57430__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async57429.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_57431){
var self__ = this;
var _57431__$1 = this;
return self__.meta57430;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async57429.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57429.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async57429.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57429.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async57429.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async57429.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async57429.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async57429.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta57430","meta57430",650784505,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async57429.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async57429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57429";

cljs.core.async.t_cljs$core$async57429.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async57429");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57429.
 */
cljs.core.async.__GT_t_cljs$core$async57429 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async57429(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta57430){
return (new cljs.core.async.t_cljs$core$async57429(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta57430));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async57429(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47988__auto___57549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47988__auto___57549,mults,ensure_mult,p){
return (function (){
var f__47989__auto__ = (function (){var switch__47480__auto__ = ((function (c__47988__auto___57549,mults,ensure_mult,p){
return (function (state_57503){
var state_val_57504 = (state_57503[(1)]);
if((state_val_57504 === (7))){
var inst_57499 = (state_57503[(2)]);
var state_57503__$1 = state_57503;
var statearr_57505_57550 = state_57503__$1;
(statearr_57505_57550[(2)] = inst_57499);

(statearr_57505_57550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57504 === (20))){
var state_57503__$1 = state_57503;
var statearr_57506_57551 = state_57503__$1;
(statearr_57506_57551[(2)] = null);

(statearr_57506_57551[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57504 === (1))){
var state_57503__$1 = state_57503;
var statearr_57507_57552 = state_57503__$1;
(statearr_57507_57552[(2)] = null);

(statearr_57507_57552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57504 === (24))){
var inst_57482 = (state_57503[(7)]);
var inst_57491 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_57482);
var state_57503__$1 = state_57503;
var statearr_57508_57553 = state_57503__$1;
(statearr_57508_57553[(2)] = inst_57491);

(statearr_57508_57553[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57504 === (4))){
var inst_57434 = (state_57503[(8)]);
var inst_57434__$1 = (state_57503[(2)]);
var inst_57435 = (inst_57434__$1 == null);
var state_57503__$1 = (function (){var statearr_57509 = state_57503;
(statearr_57509[(8)] = inst_57434__$1);

return statearr_57509;
})();
if(cljs.core.truth_(inst_57435)){
var statearr_57510_57554 = state_57503__$1;
(statearr_57510_57554[(1)] = (5));

} else {
var statearr_57511_57555 = state_57503__$1;
(statearr_57511_57555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57504 === (15))){
var inst_57476 = (state_57503[(2)]);
var state_57503__$1 = state_57503;
var statearr_57512_57556 = state_57503__$1;
(statearr_57512_57556[(2)] = inst_57476);

(statearr_57512_57556[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57504 === (21))){
var inst_57496 = (state_57503[(2)]);
var state_57503__$1 = (function (){var statearr_57513 = state_57503;
(statearr_57513[(9)] = inst_57496);

return statearr_57513;
})();
var statearr_57514_57557 = state_57503__$1;
(statearr_57514_57557[(2)] = null);

(statearr_57514_57557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57504 === (13))){
var inst_57458 = (state_57503[(10)]);
var inst_57460 = cljs.core.chunked_seq_QMARK_.call(null,inst_57458);
var state_57503__$1 = state_57503;
if(inst_57460){
var statearr_57515_57558 = state_57503__$1;
(statearr_57515_57558[(1)] = (16));

} else {
var statearr_57516_57559 = state_57503__$1;
(statearr_57516_57559[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57504 === (22))){
var inst_57488 = (state_57503[(2)]);
var state_57503__$1 = state_57503;
if(cljs.core.truth_(inst_57488)){
var statearr_57517_57560 = state_57503__$1;
(statearr_57517_57560[(1)] = (23));

} else {
var statearr_57518_57561 = state_57503__$1;
(statearr_57518_57561[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57504 === (6))){
var inst_57484 = (state_57503[(11)]);
var inst_57482 = (state_57503[(7)]);
var inst_57434 = (state_57503[(8)]);
var inst_57482__$1 = topic_fn.call(null,inst_57434);
var inst_57483 = cljs.core.deref.call(null,mults);
var inst_57484__$1 = cljs.core.get.call(null,inst_57483,inst_57482__$1);
var state_57503__$1 = (function (){var statearr_57519 = state_57503;
(statearr_57519[(11)] = inst_57484__$1);

(statearr_57519[(7)] = inst_57482__$1);

return statearr_57519;
})();
if(cljs.core.truth_(inst_57484__$1)){
var statearr_57520_57562 = state_57503__$1;
(statearr_57520_57562[(1)] = (19));

} else {
var statearr_57521_57563 = state_57503__$1;
(statearr_57521_57563[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57504 === (25))){
var inst_57493 = (state_57503[(2)]);
var state_57503__$1 = state_57503;
var statearr_57522_57564 = state_57503__$1;
(statearr_57522_57564[(2)] = inst_57493);

(statearr_57522_57564[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57504 === (17))){
var inst_57458 = (state_57503[(10)]);
var inst_57467 = cljs.core.first.call(null,inst_57458);
var inst_57468 = cljs.core.async.muxch_STAR_.call(null,inst_57467);
var inst_57469 = cljs.core.async.close_BANG_.call(null,inst_57468);
var inst_57470 = cljs.core.next.call(null,inst_57458);
var inst_57444 = inst_57470;
var inst_57445 = null;
var inst_57446 = (0);
var inst_57447 = (0);
var state_57503__$1 = (function (){var statearr_57523 = state_57503;
(statearr_57523[(12)] = inst_57469);

(statearr_57523[(13)] = inst_57445);

(statearr_57523[(14)] = inst_57444);

(statearr_57523[(15)] = inst_57446);

(statearr_57523[(16)] = inst_57447);

return statearr_57523;
})();
var statearr_57524_57565 = state_57503__$1;
(statearr_57524_57565[(2)] = null);

(statearr_57524_57565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57504 === (3))){
var inst_57501 = (state_57503[(2)]);
var state_57503__$1 = state_57503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57503__$1,inst_57501);
} else {
if((state_val_57504 === (12))){
var inst_57478 = (state_57503[(2)]);
var state_57503__$1 = state_57503;
var statearr_57525_57566 = state_57503__$1;
(statearr_57525_57566[(2)] = inst_57478);

(statearr_57525_57566[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57504 === (2))){
var state_57503__$1 = state_57503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57503__$1,(4),ch);
} else {
if((state_val_57504 === (23))){
var state_57503__$1 = state_57503;
var statearr_57526_57567 = state_57503__$1;
(statearr_57526_57567[(2)] = null);

(statearr_57526_57567[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57504 === (19))){
var inst_57484 = (state_57503[(11)]);
var inst_57434 = (state_57503[(8)]);
var inst_57486 = cljs.core.async.muxch_STAR_.call(null,inst_57484);
var state_57503__$1 = state_57503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57503__$1,(22),inst_57486,inst_57434);
} else {
if((state_val_57504 === (11))){
var inst_57444 = (state_57503[(14)]);
var inst_57458 = (state_57503[(10)]);
var inst_57458__$1 = cljs.core.seq.call(null,inst_57444);
var state_57503__$1 = (function (){var statearr_57527 = state_57503;
(statearr_57527[(10)] = inst_57458__$1);

return statearr_57527;
})();
if(inst_57458__$1){
var statearr_57528_57568 = state_57503__$1;
(statearr_57528_57568[(1)] = (13));

} else {
var statearr_57529_57569 = state_57503__$1;
(statearr_57529_57569[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57504 === (9))){
var inst_57480 = (state_57503[(2)]);
var state_57503__$1 = state_57503;
var statearr_57530_57570 = state_57503__$1;
(statearr_57530_57570[(2)] = inst_57480);

(statearr_57530_57570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57504 === (5))){
var inst_57441 = cljs.core.deref.call(null,mults);
var inst_57442 = cljs.core.vals.call(null,inst_57441);
var inst_57443 = cljs.core.seq.call(null,inst_57442);
var inst_57444 = inst_57443;
var inst_57445 = null;
var inst_57446 = (0);
var inst_57447 = (0);
var state_57503__$1 = (function (){var statearr_57531 = state_57503;
(statearr_57531[(13)] = inst_57445);

(statearr_57531[(14)] = inst_57444);

(statearr_57531[(15)] = inst_57446);

(statearr_57531[(16)] = inst_57447);

return statearr_57531;
})();
var statearr_57532_57571 = state_57503__$1;
(statearr_57532_57571[(2)] = null);

(statearr_57532_57571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57504 === (14))){
var state_57503__$1 = state_57503;
var statearr_57536_57572 = state_57503__$1;
(statearr_57536_57572[(2)] = null);

(statearr_57536_57572[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57504 === (16))){
var inst_57458 = (state_57503[(10)]);
var inst_57462 = cljs.core.chunk_first.call(null,inst_57458);
var inst_57463 = cljs.core.chunk_rest.call(null,inst_57458);
var inst_57464 = cljs.core.count.call(null,inst_57462);
var inst_57444 = inst_57463;
var inst_57445 = inst_57462;
var inst_57446 = inst_57464;
var inst_57447 = (0);
var state_57503__$1 = (function (){var statearr_57537 = state_57503;
(statearr_57537[(13)] = inst_57445);

(statearr_57537[(14)] = inst_57444);

(statearr_57537[(15)] = inst_57446);

(statearr_57537[(16)] = inst_57447);

return statearr_57537;
})();
var statearr_57538_57573 = state_57503__$1;
(statearr_57538_57573[(2)] = null);

(statearr_57538_57573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57504 === (10))){
var inst_57445 = (state_57503[(13)]);
var inst_57444 = (state_57503[(14)]);
var inst_57446 = (state_57503[(15)]);
var inst_57447 = (state_57503[(16)]);
var inst_57452 = cljs.core._nth.call(null,inst_57445,inst_57447);
var inst_57453 = cljs.core.async.muxch_STAR_.call(null,inst_57452);
var inst_57454 = cljs.core.async.close_BANG_.call(null,inst_57453);
var inst_57455 = (inst_57447 + (1));
var tmp57533 = inst_57445;
var tmp57534 = inst_57444;
var tmp57535 = inst_57446;
var inst_57444__$1 = tmp57534;
var inst_57445__$1 = tmp57533;
var inst_57446__$1 = tmp57535;
var inst_57447__$1 = inst_57455;
var state_57503__$1 = (function (){var statearr_57539 = state_57503;
(statearr_57539[(17)] = inst_57454);

(statearr_57539[(13)] = inst_57445__$1);

(statearr_57539[(14)] = inst_57444__$1);

(statearr_57539[(15)] = inst_57446__$1);

(statearr_57539[(16)] = inst_57447__$1);

return statearr_57539;
})();
var statearr_57540_57574 = state_57503__$1;
(statearr_57540_57574[(2)] = null);

(statearr_57540_57574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57504 === (18))){
var inst_57473 = (state_57503[(2)]);
var state_57503__$1 = state_57503;
var statearr_57541_57575 = state_57503__$1;
(statearr_57541_57575[(2)] = inst_57473);

(statearr_57541_57575[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57504 === (8))){
var inst_57446 = (state_57503[(15)]);
var inst_57447 = (state_57503[(16)]);
var inst_57449 = (inst_57447 < inst_57446);
var inst_57450 = inst_57449;
var state_57503__$1 = state_57503;
if(cljs.core.truth_(inst_57450)){
var statearr_57542_57576 = state_57503__$1;
(statearr_57542_57576[(1)] = (10));

} else {
var statearr_57543_57577 = state_57503__$1;
(statearr_57543_57577[(1)] = (11));

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
});})(c__47988__auto___57549,mults,ensure_mult,p))
;
return ((function (switch__47480__auto__,c__47988__auto___57549,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__47481__auto__ = null;
var cljs$core$async$state_machine__47481__auto____0 = (function (){
var statearr_57544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57544[(0)] = cljs$core$async$state_machine__47481__auto__);

(statearr_57544[(1)] = (1));

return statearr_57544;
});
var cljs$core$async$state_machine__47481__auto____1 = (function (state_57503){
while(true){
var ret_value__47482__auto__ = (function (){try{while(true){
var result__47483__auto__ = switch__47480__auto__.call(null,state_57503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47483__auto__;
}
break;
}
}catch (e57545){if((e57545 instanceof Object)){
var ex__47484__auto__ = e57545;
var statearr_57546_57578 = state_57503;
(statearr_57546_57578[(5)] = ex__47484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57579 = state_57503;
state_57503 = G__57579;
continue;
} else {
return ret_value__47482__auto__;
}
break;
}
});
cljs$core$async$state_machine__47481__auto__ = function(state_57503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47481__auto____1.call(this,state_57503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47481__auto____0;
cljs$core$async$state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47481__auto____1;
return cljs$core$async$state_machine__47481__auto__;
})()
;})(switch__47480__auto__,c__47988__auto___57549,mults,ensure_mult,p))
})();
var state__47990__auto__ = (function (){var statearr_57547 = f__47989__auto__.call(null);
(statearr_57547[(6)] = c__47988__auto___57549);

return statearr_57547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47990__auto__);
});})(c__47988__auto___57549,mults,ensure_mult,p))
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
var G__57581 = arguments.length;
switch (G__57581) {
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
var G__57584 = arguments.length;
switch (G__57584) {
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
var G__57587 = arguments.length;
switch (G__57587) {
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
var c__47988__auto___57654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47988__auto___57654,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__47989__auto__ = (function (){var switch__47480__auto__ = ((function (c__47988__auto___57654,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_57626){
var state_val_57627 = (state_57626[(1)]);
if((state_val_57627 === (7))){
var state_57626__$1 = state_57626;
var statearr_57628_57655 = state_57626__$1;
(statearr_57628_57655[(2)] = null);

(statearr_57628_57655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57627 === (1))){
var state_57626__$1 = state_57626;
var statearr_57629_57656 = state_57626__$1;
(statearr_57629_57656[(2)] = null);

(statearr_57629_57656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57627 === (4))){
var inst_57590 = (state_57626[(7)]);
var inst_57592 = (inst_57590 < cnt);
var state_57626__$1 = state_57626;
if(cljs.core.truth_(inst_57592)){
var statearr_57630_57657 = state_57626__$1;
(statearr_57630_57657[(1)] = (6));

} else {
var statearr_57631_57658 = state_57626__$1;
(statearr_57631_57658[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57627 === (15))){
var inst_57622 = (state_57626[(2)]);
var state_57626__$1 = state_57626;
var statearr_57632_57659 = state_57626__$1;
(statearr_57632_57659[(2)] = inst_57622);

(statearr_57632_57659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57627 === (13))){
var inst_57615 = cljs.core.async.close_BANG_.call(null,out);
var state_57626__$1 = state_57626;
var statearr_57633_57660 = state_57626__$1;
(statearr_57633_57660[(2)] = inst_57615);

(statearr_57633_57660[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57627 === (6))){
var state_57626__$1 = state_57626;
var statearr_57634_57661 = state_57626__$1;
(statearr_57634_57661[(2)] = null);

(statearr_57634_57661[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57627 === (3))){
var inst_57624 = (state_57626[(2)]);
var state_57626__$1 = state_57626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57626__$1,inst_57624);
} else {
if((state_val_57627 === (12))){
var inst_57612 = (state_57626[(8)]);
var inst_57612__$1 = (state_57626[(2)]);
var inst_57613 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_57612__$1);
var state_57626__$1 = (function (){var statearr_57635 = state_57626;
(statearr_57635[(8)] = inst_57612__$1);

return statearr_57635;
})();
if(cljs.core.truth_(inst_57613)){
var statearr_57636_57662 = state_57626__$1;
(statearr_57636_57662[(1)] = (13));

} else {
var statearr_57637_57663 = state_57626__$1;
(statearr_57637_57663[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57627 === (2))){
var inst_57589 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_57590 = (0);
var state_57626__$1 = (function (){var statearr_57638 = state_57626;
(statearr_57638[(9)] = inst_57589);

(statearr_57638[(7)] = inst_57590);

return statearr_57638;
})();
var statearr_57639_57664 = state_57626__$1;
(statearr_57639_57664[(2)] = null);

(statearr_57639_57664[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57627 === (11))){
var inst_57590 = (state_57626[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_57626,(10),Object,null,(9));
var inst_57599 = chs__$1.call(null,inst_57590);
var inst_57600 = done.call(null,inst_57590);
var inst_57601 = cljs.core.async.take_BANG_.call(null,inst_57599,inst_57600);
var state_57626__$1 = state_57626;
var statearr_57640_57665 = state_57626__$1;
(statearr_57640_57665[(2)] = inst_57601);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57626__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57627 === (9))){
var inst_57590 = (state_57626[(7)]);
var inst_57603 = (state_57626[(2)]);
var inst_57604 = (inst_57590 + (1));
var inst_57590__$1 = inst_57604;
var state_57626__$1 = (function (){var statearr_57641 = state_57626;
(statearr_57641[(10)] = inst_57603);

(statearr_57641[(7)] = inst_57590__$1);

return statearr_57641;
})();
var statearr_57642_57666 = state_57626__$1;
(statearr_57642_57666[(2)] = null);

(statearr_57642_57666[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57627 === (5))){
var inst_57610 = (state_57626[(2)]);
var state_57626__$1 = (function (){var statearr_57643 = state_57626;
(statearr_57643[(11)] = inst_57610);

return statearr_57643;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57626__$1,(12),dchan);
} else {
if((state_val_57627 === (14))){
var inst_57612 = (state_57626[(8)]);
var inst_57617 = cljs.core.apply.call(null,f,inst_57612);
var state_57626__$1 = state_57626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57626__$1,(16),out,inst_57617);
} else {
if((state_val_57627 === (16))){
var inst_57619 = (state_57626[(2)]);
var state_57626__$1 = (function (){var statearr_57644 = state_57626;
(statearr_57644[(12)] = inst_57619);

return statearr_57644;
})();
var statearr_57645_57667 = state_57626__$1;
(statearr_57645_57667[(2)] = null);

(statearr_57645_57667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57627 === (10))){
var inst_57594 = (state_57626[(2)]);
var inst_57595 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_57626__$1 = (function (){var statearr_57646 = state_57626;
(statearr_57646[(13)] = inst_57594);

return statearr_57646;
})();
var statearr_57647_57668 = state_57626__$1;
(statearr_57647_57668[(2)] = inst_57595);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57626__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57627 === (8))){
var inst_57608 = (state_57626[(2)]);
var state_57626__$1 = state_57626;
var statearr_57648_57669 = state_57626__$1;
(statearr_57648_57669[(2)] = inst_57608);

(statearr_57648_57669[(1)] = (5));


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
});})(c__47988__auto___57654,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__47480__auto__,c__47988__auto___57654,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__47481__auto__ = null;
var cljs$core$async$state_machine__47481__auto____0 = (function (){
var statearr_57649 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57649[(0)] = cljs$core$async$state_machine__47481__auto__);

(statearr_57649[(1)] = (1));

return statearr_57649;
});
var cljs$core$async$state_machine__47481__auto____1 = (function (state_57626){
while(true){
var ret_value__47482__auto__ = (function (){try{while(true){
var result__47483__auto__ = switch__47480__auto__.call(null,state_57626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47483__auto__;
}
break;
}
}catch (e57650){if((e57650 instanceof Object)){
var ex__47484__auto__ = e57650;
var statearr_57651_57670 = state_57626;
(statearr_57651_57670[(5)] = ex__47484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57671 = state_57626;
state_57626 = G__57671;
continue;
} else {
return ret_value__47482__auto__;
}
break;
}
});
cljs$core$async$state_machine__47481__auto__ = function(state_57626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47481__auto____1.call(this,state_57626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47481__auto____0;
cljs$core$async$state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47481__auto____1;
return cljs$core$async$state_machine__47481__auto__;
})()
;})(switch__47480__auto__,c__47988__auto___57654,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__47990__auto__ = (function (){var statearr_57652 = f__47989__auto__.call(null);
(statearr_57652[(6)] = c__47988__auto___57654);

return statearr_57652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47990__auto__);
});})(c__47988__auto___57654,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__57674 = arguments.length;
switch (G__57674) {
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
var c__47988__auto___57728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47988__auto___57728,out){
return (function (){
var f__47989__auto__ = (function (){var switch__47480__auto__ = ((function (c__47988__auto___57728,out){
return (function (state_57706){
var state_val_57707 = (state_57706[(1)]);
if((state_val_57707 === (7))){
var inst_57686 = (state_57706[(7)]);
var inst_57685 = (state_57706[(8)]);
var inst_57685__$1 = (state_57706[(2)]);
var inst_57686__$1 = cljs.core.nth.call(null,inst_57685__$1,(0),null);
var inst_57687 = cljs.core.nth.call(null,inst_57685__$1,(1),null);
var inst_57688 = (inst_57686__$1 == null);
var state_57706__$1 = (function (){var statearr_57708 = state_57706;
(statearr_57708[(9)] = inst_57687);

(statearr_57708[(7)] = inst_57686__$1);

(statearr_57708[(8)] = inst_57685__$1);

return statearr_57708;
})();
if(cljs.core.truth_(inst_57688)){
var statearr_57709_57729 = state_57706__$1;
(statearr_57709_57729[(1)] = (8));

} else {
var statearr_57710_57730 = state_57706__$1;
(statearr_57710_57730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (1))){
var inst_57675 = cljs.core.vec.call(null,chs);
var inst_57676 = inst_57675;
var state_57706__$1 = (function (){var statearr_57711 = state_57706;
(statearr_57711[(10)] = inst_57676);

return statearr_57711;
})();
var statearr_57712_57731 = state_57706__$1;
(statearr_57712_57731[(2)] = null);

(statearr_57712_57731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (4))){
var inst_57676 = (state_57706[(10)]);
var state_57706__$1 = state_57706;
return cljs.core.async.ioc_alts_BANG_.call(null,state_57706__$1,(7),inst_57676);
} else {
if((state_val_57707 === (6))){
var inst_57702 = (state_57706[(2)]);
var state_57706__$1 = state_57706;
var statearr_57713_57732 = state_57706__$1;
(statearr_57713_57732[(2)] = inst_57702);

(statearr_57713_57732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (3))){
var inst_57704 = (state_57706[(2)]);
var state_57706__$1 = state_57706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57706__$1,inst_57704);
} else {
if((state_val_57707 === (2))){
var inst_57676 = (state_57706[(10)]);
var inst_57678 = cljs.core.count.call(null,inst_57676);
var inst_57679 = (inst_57678 > (0));
var state_57706__$1 = state_57706;
if(cljs.core.truth_(inst_57679)){
var statearr_57715_57733 = state_57706__$1;
(statearr_57715_57733[(1)] = (4));

} else {
var statearr_57716_57734 = state_57706__$1;
(statearr_57716_57734[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (11))){
var inst_57676 = (state_57706[(10)]);
var inst_57695 = (state_57706[(2)]);
var tmp57714 = inst_57676;
var inst_57676__$1 = tmp57714;
var state_57706__$1 = (function (){var statearr_57717 = state_57706;
(statearr_57717[(10)] = inst_57676__$1);

(statearr_57717[(11)] = inst_57695);

return statearr_57717;
})();
var statearr_57718_57735 = state_57706__$1;
(statearr_57718_57735[(2)] = null);

(statearr_57718_57735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (9))){
var inst_57686 = (state_57706[(7)]);
var state_57706__$1 = state_57706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57706__$1,(11),out,inst_57686);
} else {
if((state_val_57707 === (5))){
var inst_57700 = cljs.core.async.close_BANG_.call(null,out);
var state_57706__$1 = state_57706;
var statearr_57719_57736 = state_57706__$1;
(statearr_57719_57736[(2)] = inst_57700);

(statearr_57719_57736[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (10))){
var inst_57698 = (state_57706[(2)]);
var state_57706__$1 = state_57706;
var statearr_57720_57737 = state_57706__$1;
(statearr_57720_57737[(2)] = inst_57698);

(statearr_57720_57737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (8))){
var inst_57676 = (state_57706[(10)]);
var inst_57687 = (state_57706[(9)]);
var inst_57686 = (state_57706[(7)]);
var inst_57685 = (state_57706[(8)]);
var inst_57690 = (function (){var cs = inst_57676;
var vec__57681 = inst_57685;
var v = inst_57686;
var c = inst_57687;
return ((function (cs,vec__57681,v,c,inst_57676,inst_57687,inst_57686,inst_57685,state_val_57707,c__47988__auto___57728,out){
return (function (p1__57672_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__57672_SHARP_);
});
;})(cs,vec__57681,v,c,inst_57676,inst_57687,inst_57686,inst_57685,state_val_57707,c__47988__auto___57728,out))
})();
var inst_57691 = cljs.core.filterv.call(null,inst_57690,inst_57676);
var inst_57676__$1 = inst_57691;
var state_57706__$1 = (function (){var statearr_57721 = state_57706;
(statearr_57721[(10)] = inst_57676__$1);

return statearr_57721;
})();
var statearr_57722_57738 = state_57706__$1;
(statearr_57722_57738[(2)] = null);

(statearr_57722_57738[(1)] = (2));


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
});})(c__47988__auto___57728,out))
;
return ((function (switch__47480__auto__,c__47988__auto___57728,out){
return (function() {
var cljs$core$async$state_machine__47481__auto__ = null;
var cljs$core$async$state_machine__47481__auto____0 = (function (){
var statearr_57723 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57723[(0)] = cljs$core$async$state_machine__47481__auto__);

(statearr_57723[(1)] = (1));

return statearr_57723;
});
var cljs$core$async$state_machine__47481__auto____1 = (function (state_57706){
while(true){
var ret_value__47482__auto__ = (function (){try{while(true){
var result__47483__auto__ = switch__47480__auto__.call(null,state_57706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47483__auto__;
}
break;
}
}catch (e57724){if((e57724 instanceof Object)){
var ex__47484__auto__ = e57724;
var statearr_57725_57739 = state_57706;
(statearr_57725_57739[(5)] = ex__47484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57740 = state_57706;
state_57706 = G__57740;
continue;
} else {
return ret_value__47482__auto__;
}
break;
}
});
cljs$core$async$state_machine__47481__auto__ = function(state_57706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47481__auto____1.call(this,state_57706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47481__auto____0;
cljs$core$async$state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47481__auto____1;
return cljs$core$async$state_machine__47481__auto__;
})()
;})(switch__47480__auto__,c__47988__auto___57728,out))
})();
var state__47990__auto__ = (function (){var statearr_57726 = f__47989__auto__.call(null);
(statearr_57726[(6)] = c__47988__auto___57728);

return statearr_57726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47990__auto__);
});})(c__47988__auto___57728,out))
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
var G__57742 = arguments.length;
switch (G__57742) {
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
var c__47988__auto___57787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47988__auto___57787,out){
return (function (){
var f__47989__auto__ = (function (){var switch__47480__auto__ = ((function (c__47988__auto___57787,out){
return (function (state_57766){
var state_val_57767 = (state_57766[(1)]);
if((state_val_57767 === (7))){
var inst_57748 = (state_57766[(7)]);
var inst_57748__$1 = (state_57766[(2)]);
var inst_57749 = (inst_57748__$1 == null);
var inst_57750 = cljs.core.not.call(null,inst_57749);
var state_57766__$1 = (function (){var statearr_57768 = state_57766;
(statearr_57768[(7)] = inst_57748__$1);

return statearr_57768;
})();
if(inst_57750){
var statearr_57769_57788 = state_57766__$1;
(statearr_57769_57788[(1)] = (8));

} else {
var statearr_57770_57789 = state_57766__$1;
(statearr_57770_57789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57767 === (1))){
var inst_57743 = (0);
var state_57766__$1 = (function (){var statearr_57771 = state_57766;
(statearr_57771[(8)] = inst_57743);

return statearr_57771;
})();
var statearr_57772_57790 = state_57766__$1;
(statearr_57772_57790[(2)] = null);

(statearr_57772_57790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57767 === (4))){
var state_57766__$1 = state_57766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57766__$1,(7),ch);
} else {
if((state_val_57767 === (6))){
var inst_57761 = (state_57766[(2)]);
var state_57766__$1 = state_57766;
var statearr_57773_57791 = state_57766__$1;
(statearr_57773_57791[(2)] = inst_57761);

(statearr_57773_57791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57767 === (3))){
var inst_57763 = (state_57766[(2)]);
var inst_57764 = cljs.core.async.close_BANG_.call(null,out);
var state_57766__$1 = (function (){var statearr_57774 = state_57766;
(statearr_57774[(9)] = inst_57763);

return statearr_57774;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57766__$1,inst_57764);
} else {
if((state_val_57767 === (2))){
var inst_57743 = (state_57766[(8)]);
var inst_57745 = (inst_57743 < n);
var state_57766__$1 = state_57766;
if(cljs.core.truth_(inst_57745)){
var statearr_57775_57792 = state_57766__$1;
(statearr_57775_57792[(1)] = (4));

} else {
var statearr_57776_57793 = state_57766__$1;
(statearr_57776_57793[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57767 === (11))){
var inst_57743 = (state_57766[(8)]);
var inst_57753 = (state_57766[(2)]);
var inst_57754 = (inst_57743 + (1));
var inst_57743__$1 = inst_57754;
var state_57766__$1 = (function (){var statearr_57777 = state_57766;
(statearr_57777[(8)] = inst_57743__$1);

(statearr_57777[(10)] = inst_57753);

return statearr_57777;
})();
var statearr_57778_57794 = state_57766__$1;
(statearr_57778_57794[(2)] = null);

(statearr_57778_57794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57767 === (9))){
var state_57766__$1 = state_57766;
var statearr_57779_57795 = state_57766__$1;
(statearr_57779_57795[(2)] = null);

(statearr_57779_57795[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57767 === (5))){
var state_57766__$1 = state_57766;
var statearr_57780_57796 = state_57766__$1;
(statearr_57780_57796[(2)] = null);

(statearr_57780_57796[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57767 === (10))){
var inst_57758 = (state_57766[(2)]);
var state_57766__$1 = state_57766;
var statearr_57781_57797 = state_57766__$1;
(statearr_57781_57797[(2)] = inst_57758);

(statearr_57781_57797[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57767 === (8))){
var inst_57748 = (state_57766[(7)]);
var state_57766__$1 = state_57766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57766__$1,(11),out,inst_57748);
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
});})(c__47988__auto___57787,out))
;
return ((function (switch__47480__auto__,c__47988__auto___57787,out){
return (function() {
var cljs$core$async$state_machine__47481__auto__ = null;
var cljs$core$async$state_machine__47481__auto____0 = (function (){
var statearr_57782 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57782[(0)] = cljs$core$async$state_machine__47481__auto__);

(statearr_57782[(1)] = (1));

return statearr_57782;
});
var cljs$core$async$state_machine__47481__auto____1 = (function (state_57766){
while(true){
var ret_value__47482__auto__ = (function (){try{while(true){
var result__47483__auto__ = switch__47480__auto__.call(null,state_57766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47483__auto__;
}
break;
}
}catch (e57783){if((e57783 instanceof Object)){
var ex__47484__auto__ = e57783;
var statearr_57784_57798 = state_57766;
(statearr_57784_57798[(5)] = ex__47484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57799 = state_57766;
state_57766 = G__57799;
continue;
} else {
return ret_value__47482__auto__;
}
break;
}
});
cljs$core$async$state_machine__47481__auto__ = function(state_57766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47481__auto____1.call(this,state_57766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47481__auto____0;
cljs$core$async$state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47481__auto____1;
return cljs$core$async$state_machine__47481__auto__;
})()
;})(switch__47480__auto__,c__47988__auto___57787,out))
})();
var state__47990__auto__ = (function (){var statearr_57785 = f__47989__auto__.call(null);
(statearr_57785[(6)] = c__47988__auto___57787);

return statearr_57785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47990__auto__);
});})(c__47988__auto___57787,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57801 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57801 = (function (f,ch,meta57802){
this.f = f;
this.ch = ch;
this.meta57802 = meta57802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async57801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57803,meta57802__$1){
var self__ = this;
var _57803__$1 = this;
return (new cljs.core.async.t_cljs$core$async57801(self__.f,self__.ch,meta57802__$1));
});

cljs.core.async.t_cljs$core$async57801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57803){
var self__ = this;
var _57803__$1 = this;
return self__.meta57802;
});

cljs.core.async.t_cljs$core$async57801.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57801.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async57801.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async57801.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57801.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57804 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57804 = (function (f,ch,meta57802,_,fn1,meta57805){
this.f = f;
this.ch = ch;
this.meta57802 = meta57802;
this._ = _;
this.fn1 = fn1;
this.meta57805 = meta57805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async57804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_57806,meta57805__$1){
var self__ = this;
var _57806__$1 = this;
return (new cljs.core.async.t_cljs$core$async57804(self__.f,self__.ch,self__.meta57802,self__._,self__.fn1,meta57805__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async57804.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_57806){
var self__ = this;
var _57806__$1 = this;
return self__.meta57805;
});})(___$1))
;

cljs.core.async.t_cljs$core$async57804.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57804.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async57804.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async57804.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__57800_SHARP_){
return f1.call(null,(((p1__57800_SHARP_ == null))?null:self__.f.call(null,p1__57800_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async57804.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57802","meta57802",-1038517273,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async57801","cljs.core.async/t_cljs$core$async57801",1781391435,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta57805","meta57805",1504295862,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async57804.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async57804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57804";

cljs.core.async.t_cljs$core$async57804.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async57804");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57804.
 */
cljs.core.async.__GT_t_cljs$core$async57804 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async57804(f__$1,ch__$1,meta57802__$1,___$2,fn1__$1,meta57805){
return (new cljs.core.async.t_cljs$core$async57804(f__$1,ch__$1,meta57802__$1,___$2,fn1__$1,meta57805));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async57804(self__.f,self__.ch,self__.meta57802,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async57801.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57801.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async57801.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57802","meta57802",-1038517273,null)], null);
});

cljs.core.async.t_cljs$core$async57801.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async57801.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57801";

cljs.core.async.t_cljs$core$async57801.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async57801");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57801.
 */
cljs.core.async.__GT_t_cljs$core$async57801 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async57801(f__$1,ch__$1,meta57802){
return (new cljs.core.async.t_cljs$core$async57801(f__$1,ch__$1,meta57802));
});

}

return (new cljs.core.async.t_cljs$core$async57801(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57807 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57807 = (function (f,ch,meta57808){
this.f = f;
this.ch = ch;
this.meta57808 = meta57808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async57807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57809,meta57808__$1){
var self__ = this;
var _57809__$1 = this;
return (new cljs.core.async.t_cljs$core$async57807(self__.f,self__.ch,meta57808__$1));
});

cljs.core.async.t_cljs$core$async57807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57809){
var self__ = this;
var _57809__$1 = this;
return self__.meta57808;
});

cljs.core.async.t_cljs$core$async57807.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57807.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async57807.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57807.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async57807.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57807.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async57807.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57808","meta57808",1695099886,null)], null);
});

cljs.core.async.t_cljs$core$async57807.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async57807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57807";

cljs.core.async.t_cljs$core$async57807.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async57807");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57807.
 */
cljs.core.async.__GT_t_cljs$core$async57807 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async57807(f__$1,ch__$1,meta57808){
return (new cljs.core.async.t_cljs$core$async57807(f__$1,ch__$1,meta57808));
});

}

return (new cljs.core.async.t_cljs$core$async57807(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57810 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57810 = (function (p,ch,meta57811){
this.p = p;
this.ch = ch;
this.meta57811 = meta57811;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async57810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57812,meta57811__$1){
var self__ = this;
var _57812__$1 = this;
return (new cljs.core.async.t_cljs$core$async57810(self__.p,self__.ch,meta57811__$1));
});

cljs.core.async.t_cljs$core$async57810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57812){
var self__ = this;
var _57812__$1 = this;
return self__.meta57811;
});

cljs.core.async.t_cljs$core$async57810.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57810.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async57810.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async57810.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57810.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async57810.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57810.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async57810.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57811","meta57811",1998468859,null)], null);
});

cljs.core.async.t_cljs$core$async57810.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async57810.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57810";

cljs.core.async.t_cljs$core$async57810.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async57810");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57810.
 */
cljs.core.async.__GT_t_cljs$core$async57810 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async57810(p__$1,ch__$1,meta57811){
return (new cljs.core.async.t_cljs$core$async57810(p__$1,ch__$1,meta57811));
});

}

return (new cljs.core.async.t_cljs$core$async57810(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__57814 = arguments.length;
switch (G__57814) {
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
var c__47988__auto___57854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47988__auto___57854,out){
return (function (){
var f__47989__auto__ = (function (){var switch__47480__auto__ = ((function (c__47988__auto___57854,out){
return (function (state_57835){
var state_val_57836 = (state_57835[(1)]);
if((state_val_57836 === (7))){
var inst_57831 = (state_57835[(2)]);
var state_57835__$1 = state_57835;
var statearr_57837_57855 = state_57835__$1;
(statearr_57837_57855[(2)] = inst_57831);

(statearr_57837_57855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57836 === (1))){
var state_57835__$1 = state_57835;
var statearr_57838_57856 = state_57835__$1;
(statearr_57838_57856[(2)] = null);

(statearr_57838_57856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57836 === (4))){
var inst_57817 = (state_57835[(7)]);
var inst_57817__$1 = (state_57835[(2)]);
var inst_57818 = (inst_57817__$1 == null);
var state_57835__$1 = (function (){var statearr_57839 = state_57835;
(statearr_57839[(7)] = inst_57817__$1);

return statearr_57839;
})();
if(cljs.core.truth_(inst_57818)){
var statearr_57840_57857 = state_57835__$1;
(statearr_57840_57857[(1)] = (5));

} else {
var statearr_57841_57858 = state_57835__$1;
(statearr_57841_57858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57836 === (6))){
var inst_57817 = (state_57835[(7)]);
var inst_57822 = p.call(null,inst_57817);
var state_57835__$1 = state_57835;
if(cljs.core.truth_(inst_57822)){
var statearr_57842_57859 = state_57835__$1;
(statearr_57842_57859[(1)] = (8));

} else {
var statearr_57843_57860 = state_57835__$1;
(statearr_57843_57860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57836 === (3))){
var inst_57833 = (state_57835[(2)]);
var state_57835__$1 = state_57835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57835__$1,inst_57833);
} else {
if((state_val_57836 === (2))){
var state_57835__$1 = state_57835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57835__$1,(4),ch);
} else {
if((state_val_57836 === (11))){
var inst_57825 = (state_57835[(2)]);
var state_57835__$1 = state_57835;
var statearr_57844_57861 = state_57835__$1;
(statearr_57844_57861[(2)] = inst_57825);

(statearr_57844_57861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57836 === (9))){
var state_57835__$1 = state_57835;
var statearr_57845_57862 = state_57835__$1;
(statearr_57845_57862[(2)] = null);

(statearr_57845_57862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57836 === (5))){
var inst_57820 = cljs.core.async.close_BANG_.call(null,out);
var state_57835__$1 = state_57835;
var statearr_57846_57863 = state_57835__$1;
(statearr_57846_57863[(2)] = inst_57820);

(statearr_57846_57863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57836 === (10))){
var inst_57828 = (state_57835[(2)]);
var state_57835__$1 = (function (){var statearr_57847 = state_57835;
(statearr_57847[(8)] = inst_57828);

return statearr_57847;
})();
var statearr_57848_57864 = state_57835__$1;
(statearr_57848_57864[(2)] = null);

(statearr_57848_57864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57836 === (8))){
var inst_57817 = (state_57835[(7)]);
var state_57835__$1 = state_57835;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57835__$1,(11),out,inst_57817);
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
});})(c__47988__auto___57854,out))
;
return ((function (switch__47480__auto__,c__47988__auto___57854,out){
return (function() {
var cljs$core$async$state_machine__47481__auto__ = null;
var cljs$core$async$state_machine__47481__auto____0 = (function (){
var statearr_57849 = [null,null,null,null,null,null,null,null,null];
(statearr_57849[(0)] = cljs$core$async$state_machine__47481__auto__);

(statearr_57849[(1)] = (1));

return statearr_57849;
});
var cljs$core$async$state_machine__47481__auto____1 = (function (state_57835){
while(true){
var ret_value__47482__auto__ = (function (){try{while(true){
var result__47483__auto__ = switch__47480__auto__.call(null,state_57835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47483__auto__;
}
break;
}
}catch (e57850){if((e57850 instanceof Object)){
var ex__47484__auto__ = e57850;
var statearr_57851_57865 = state_57835;
(statearr_57851_57865[(5)] = ex__47484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57866 = state_57835;
state_57835 = G__57866;
continue;
} else {
return ret_value__47482__auto__;
}
break;
}
});
cljs$core$async$state_machine__47481__auto__ = function(state_57835){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47481__auto____1.call(this,state_57835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47481__auto____0;
cljs$core$async$state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47481__auto____1;
return cljs$core$async$state_machine__47481__auto__;
})()
;})(switch__47480__auto__,c__47988__auto___57854,out))
})();
var state__47990__auto__ = (function (){var statearr_57852 = f__47989__auto__.call(null);
(statearr_57852[(6)] = c__47988__auto___57854);

return statearr_57852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47990__auto__);
});})(c__47988__auto___57854,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__57868 = arguments.length;
switch (G__57868) {
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
var c__47988__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47988__auto__){
return (function (){
var f__47989__auto__ = (function (){var switch__47480__auto__ = ((function (c__47988__auto__){
return (function (state_57931){
var state_val_57932 = (state_57931[(1)]);
if((state_val_57932 === (7))){
var inst_57927 = (state_57931[(2)]);
var state_57931__$1 = state_57931;
var statearr_57933_57971 = state_57931__$1;
(statearr_57933_57971[(2)] = inst_57927);

(statearr_57933_57971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (20))){
var inst_57897 = (state_57931[(7)]);
var inst_57908 = (state_57931[(2)]);
var inst_57909 = cljs.core.next.call(null,inst_57897);
var inst_57883 = inst_57909;
var inst_57884 = null;
var inst_57885 = (0);
var inst_57886 = (0);
var state_57931__$1 = (function (){var statearr_57934 = state_57931;
(statearr_57934[(8)] = inst_57884);

(statearr_57934[(9)] = inst_57885);

(statearr_57934[(10)] = inst_57883);

(statearr_57934[(11)] = inst_57886);

(statearr_57934[(12)] = inst_57908);

return statearr_57934;
})();
var statearr_57935_57972 = state_57931__$1;
(statearr_57935_57972[(2)] = null);

(statearr_57935_57972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (1))){
var state_57931__$1 = state_57931;
var statearr_57936_57973 = state_57931__$1;
(statearr_57936_57973[(2)] = null);

(statearr_57936_57973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (4))){
var inst_57872 = (state_57931[(13)]);
var inst_57872__$1 = (state_57931[(2)]);
var inst_57873 = (inst_57872__$1 == null);
var state_57931__$1 = (function (){var statearr_57937 = state_57931;
(statearr_57937[(13)] = inst_57872__$1);

return statearr_57937;
})();
if(cljs.core.truth_(inst_57873)){
var statearr_57938_57974 = state_57931__$1;
(statearr_57938_57974[(1)] = (5));

} else {
var statearr_57939_57975 = state_57931__$1;
(statearr_57939_57975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (15))){
var state_57931__$1 = state_57931;
var statearr_57943_57976 = state_57931__$1;
(statearr_57943_57976[(2)] = null);

(statearr_57943_57976[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (21))){
var state_57931__$1 = state_57931;
var statearr_57944_57977 = state_57931__$1;
(statearr_57944_57977[(2)] = null);

(statearr_57944_57977[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (13))){
var inst_57884 = (state_57931[(8)]);
var inst_57885 = (state_57931[(9)]);
var inst_57883 = (state_57931[(10)]);
var inst_57886 = (state_57931[(11)]);
var inst_57893 = (state_57931[(2)]);
var inst_57894 = (inst_57886 + (1));
var tmp57940 = inst_57884;
var tmp57941 = inst_57885;
var tmp57942 = inst_57883;
var inst_57883__$1 = tmp57942;
var inst_57884__$1 = tmp57940;
var inst_57885__$1 = tmp57941;
var inst_57886__$1 = inst_57894;
var state_57931__$1 = (function (){var statearr_57945 = state_57931;
(statearr_57945[(8)] = inst_57884__$1);

(statearr_57945[(9)] = inst_57885__$1);

(statearr_57945[(10)] = inst_57883__$1);

(statearr_57945[(14)] = inst_57893);

(statearr_57945[(11)] = inst_57886__$1);

return statearr_57945;
})();
var statearr_57946_57978 = state_57931__$1;
(statearr_57946_57978[(2)] = null);

(statearr_57946_57978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (22))){
var state_57931__$1 = state_57931;
var statearr_57947_57979 = state_57931__$1;
(statearr_57947_57979[(2)] = null);

(statearr_57947_57979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (6))){
var inst_57872 = (state_57931[(13)]);
var inst_57881 = f.call(null,inst_57872);
var inst_57882 = cljs.core.seq.call(null,inst_57881);
var inst_57883 = inst_57882;
var inst_57884 = null;
var inst_57885 = (0);
var inst_57886 = (0);
var state_57931__$1 = (function (){var statearr_57948 = state_57931;
(statearr_57948[(8)] = inst_57884);

(statearr_57948[(9)] = inst_57885);

(statearr_57948[(10)] = inst_57883);

(statearr_57948[(11)] = inst_57886);

return statearr_57948;
})();
var statearr_57949_57980 = state_57931__$1;
(statearr_57949_57980[(2)] = null);

(statearr_57949_57980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (17))){
var inst_57897 = (state_57931[(7)]);
var inst_57901 = cljs.core.chunk_first.call(null,inst_57897);
var inst_57902 = cljs.core.chunk_rest.call(null,inst_57897);
var inst_57903 = cljs.core.count.call(null,inst_57901);
var inst_57883 = inst_57902;
var inst_57884 = inst_57901;
var inst_57885 = inst_57903;
var inst_57886 = (0);
var state_57931__$1 = (function (){var statearr_57950 = state_57931;
(statearr_57950[(8)] = inst_57884);

(statearr_57950[(9)] = inst_57885);

(statearr_57950[(10)] = inst_57883);

(statearr_57950[(11)] = inst_57886);

return statearr_57950;
})();
var statearr_57951_57981 = state_57931__$1;
(statearr_57951_57981[(2)] = null);

(statearr_57951_57981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (3))){
var inst_57929 = (state_57931[(2)]);
var state_57931__$1 = state_57931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57931__$1,inst_57929);
} else {
if((state_val_57932 === (12))){
var inst_57917 = (state_57931[(2)]);
var state_57931__$1 = state_57931;
var statearr_57952_57982 = state_57931__$1;
(statearr_57952_57982[(2)] = inst_57917);

(statearr_57952_57982[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (2))){
var state_57931__$1 = state_57931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57931__$1,(4),in$);
} else {
if((state_val_57932 === (23))){
var inst_57925 = (state_57931[(2)]);
var state_57931__$1 = state_57931;
var statearr_57953_57983 = state_57931__$1;
(statearr_57953_57983[(2)] = inst_57925);

(statearr_57953_57983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (19))){
var inst_57912 = (state_57931[(2)]);
var state_57931__$1 = state_57931;
var statearr_57954_57984 = state_57931__$1;
(statearr_57954_57984[(2)] = inst_57912);

(statearr_57954_57984[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (11))){
var inst_57883 = (state_57931[(10)]);
var inst_57897 = (state_57931[(7)]);
var inst_57897__$1 = cljs.core.seq.call(null,inst_57883);
var state_57931__$1 = (function (){var statearr_57955 = state_57931;
(statearr_57955[(7)] = inst_57897__$1);

return statearr_57955;
})();
if(inst_57897__$1){
var statearr_57956_57985 = state_57931__$1;
(statearr_57956_57985[(1)] = (14));

} else {
var statearr_57957_57986 = state_57931__$1;
(statearr_57957_57986[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (9))){
var inst_57919 = (state_57931[(2)]);
var inst_57920 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_57931__$1 = (function (){var statearr_57958 = state_57931;
(statearr_57958[(15)] = inst_57919);

return statearr_57958;
})();
if(cljs.core.truth_(inst_57920)){
var statearr_57959_57987 = state_57931__$1;
(statearr_57959_57987[(1)] = (21));

} else {
var statearr_57960_57988 = state_57931__$1;
(statearr_57960_57988[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (5))){
var inst_57875 = cljs.core.async.close_BANG_.call(null,out);
var state_57931__$1 = state_57931;
var statearr_57961_57989 = state_57931__$1;
(statearr_57961_57989[(2)] = inst_57875);

(statearr_57961_57989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (14))){
var inst_57897 = (state_57931[(7)]);
var inst_57899 = cljs.core.chunked_seq_QMARK_.call(null,inst_57897);
var state_57931__$1 = state_57931;
if(inst_57899){
var statearr_57962_57990 = state_57931__$1;
(statearr_57962_57990[(1)] = (17));

} else {
var statearr_57963_57991 = state_57931__$1;
(statearr_57963_57991[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (16))){
var inst_57915 = (state_57931[(2)]);
var state_57931__$1 = state_57931;
var statearr_57964_57992 = state_57931__$1;
(statearr_57964_57992[(2)] = inst_57915);

(statearr_57964_57992[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (10))){
var inst_57884 = (state_57931[(8)]);
var inst_57886 = (state_57931[(11)]);
var inst_57891 = cljs.core._nth.call(null,inst_57884,inst_57886);
var state_57931__$1 = state_57931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57931__$1,(13),out,inst_57891);
} else {
if((state_val_57932 === (18))){
var inst_57897 = (state_57931[(7)]);
var inst_57906 = cljs.core.first.call(null,inst_57897);
var state_57931__$1 = state_57931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57931__$1,(20),out,inst_57906);
} else {
if((state_val_57932 === (8))){
var inst_57885 = (state_57931[(9)]);
var inst_57886 = (state_57931[(11)]);
var inst_57888 = (inst_57886 < inst_57885);
var inst_57889 = inst_57888;
var state_57931__$1 = state_57931;
if(cljs.core.truth_(inst_57889)){
var statearr_57965_57993 = state_57931__$1;
(statearr_57965_57993[(1)] = (10));

} else {
var statearr_57966_57994 = state_57931__$1;
(statearr_57966_57994[(1)] = (11));

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
});})(c__47988__auto__))
;
return ((function (switch__47480__auto__,c__47988__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__47481__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__47481__auto____0 = (function (){
var statearr_57967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57967[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__47481__auto__);

(statearr_57967[(1)] = (1));

return statearr_57967;
});
var cljs$core$async$mapcat_STAR__$_state_machine__47481__auto____1 = (function (state_57931){
while(true){
var ret_value__47482__auto__ = (function (){try{while(true){
var result__47483__auto__ = switch__47480__auto__.call(null,state_57931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47483__auto__;
}
break;
}
}catch (e57968){if((e57968 instanceof Object)){
var ex__47484__auto__ = e57968;
var statearr_57969_57995 = state_57931;
(statearr_57969_57995[(5)] = ex__47484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57996 = state_57931;
state_57931 = G__57996;
continue;
} else {
return ret_value__47482__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__47481__auto__ = function(state_57931){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__47481__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__47481__auto____1.call(this,state_57931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__47481__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__47481__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__47481__auto__;
})()
;})(switch__47480__auto__,c__47988__auto__))
})();
var state__47990__auto__ = (function (){var statearr_57970 = f__47989__auto__.call(null);
(statearr_57970[(6)] = c__47988__auto__);

return statearr_57970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47990__auto__);
});})(c__47988__auto__))
);

return c__47988__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__57998 = arguments.length;
switch (G__57998) {
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
var G__58001 = arguments.length;
switch (G__58001) {
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
var G__58004 = arguments.length;
switch (G__58004) {
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
var c__47988__auto___58051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47988__auto___58051,out){
return (function (){
var f__47989__auto__ = (function (){var switch__47480__auto__ = ((function (c__47988__auto___58051,out){
return (function (state_58028){
var state_val_58029 = (state_58028[(1)]);
if((state_val_58029 === (7))){
var inst_58023 = (state_58028[(2)]);
var state_58028__$1 = state_58028;
var statearr_58030_58052 = state_58028__$1;
(statearr_58030_58052[(2)] = inst_58023);

(statearr_58030_58052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58029 === (1))){
var inst_58005 = null;
var state_58028__$1 = (function (){var statearr_58031 = state_58028;
(statearr_58031[(7)] = inst_58005);

return statearr_58031;
})();
var statearr_58032_58053 = state_58028__$1;
(statearr_58032_58053[(2)] = null);

(statearr_58032_58053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58029 === (4))){
var inst_58008 = (state_58028[(8)]);
var inst_58008__$1 = (state_58028[(2)]);
var inst_58009 = (inst_58008__$1 == null);
var inst_58010 = cljs.core.not.call(null,inst_58009);
var state_58028__$1 = (function (){var statearr_58033 = state_58028;
(statearr_58033[(8)] = inst_58008__$1);

return statearr_58033;
})();
if(inst_58010){
var statearr_58034_58054 = state_58028__$1;
(statearr_58034_58054[(1)] = (5));

} else {
var statearr_58035_58055 = state_58028__$1;
(statearr_58035_58055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58029 === (6))){
var state_58028__$1 = state_58028;
var statearr_58036_58056 = state_58028__$1;
(statearr_58036_58056[(2)] = null);

(statearr_58036_58056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58029 === (3))){
var inst_58025 = (state_58028[(2)]);
var inst_58026 = cljs.core.async.close_BANG_.call(null,out);
var state_58028__$1 = (function (){var statearr_58037 = state_58028;
(statearr_58037[(9)] = inst_58025);

return statearr_58037;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58028__$1,inst_58026);
} else {
if((state_val_58029 === (2))){
var state_58028__$1 = state_58028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58028__$1,(4),ch);
} else {
if((state_val_58029 === (11))){
var inst_58008 = (state_58028[(8)]);
var inst_58017 = (state_58028[(2)]);
var inst_58005 = inst_58008;
var state_58028__$1 = (function (){var statearr_58038 = state_58028;
(statearr_58038[(7)] = inst_58005);

(statearr_58038[(10)] = inst_58017);

return statearr_58038;
})();
var statearr_58039_58057 = state_58028__$1;
(statearr_58039_58057[(2)] = null);

(statearr_58039_58057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58029 === (9))){
var inst_58008 = (state_58028[(8)]);
var state_58028__$1 = state_58028;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58028__$1,(11),out,inst_58008);
} else {
if((state_val_58029 === (5))){
var inst_58005 = (state_58028[(7)]);
var inst_58008 = (state_58028[(8)]);
var inst_58012 = cljs.core._EQ_.call(null,inst_58008,inst_58005);
var state_58028__$1 = state_58028;
if(inst_58012){
var statearr_58041_58058 = state_58028__$1;
(statearr_58041_58058[(1)] = (8));

} else {
var statearr_58042_58059 = state_58028__$1;
(statearr_58042_58059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58029 === (10))){
var inst_58020 = (state_58028[(2)]);
var state_58028__$1 = state_58028;
var statearr_58043_58060 = state_58028__$1;
(statearr_58043_58060[(2)] = inst_58020);

(statearr_58043_58060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58029 === (8))){
var inst_58005 = (state_58028[(7)]);
var tmp58040 = inst_58005;
var inst_58005__$1 = tmp58040;
var state_58028__$1 = (function (){var statearr_58044 = state_58028;
(statearr_58044[(7)] = inst_58005__$1);

return statearr_58044;
})();
var statearr_58045_58061 = state_58028__$1;
(statearr_58045_58061[(2)] = null);

(statearr_58045_58061[(1)] = (2));


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
});})(c__47988__auto___58051,out))
;
return ((function (switch__47480__auto__,c__47988__auto___58051,out){
return (function() {
var cljs$core$async$state_machine__47481__auto__ = null;
var cljs$core$async$state_machine__47481__auto____0 = (function (){
var statearr_58046 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58046[(0)] = cljs$core$async$state_machine__47481__auto__);

(statearr_58046[(1)] = (1));

return statearr_58046;
});
var cljs$core$async$state_machine__47481__auto____1 = (function (state_58028){
while(true){
var ret_value__47482__auto__ = (function (){try{while(true){
var result__47483__auto__ = switch__47480__auto__.call(null,state_58028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47483__auto__;
}
break;
}
}catch (e58047){if((e58047 instanceof Object)){
var ex__47484__auto__ = e58047;
var statearr_58048_58062 = state_58028;
(statearr_58048_58062[(5)] = ex__47484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58063 = state_58028;
state_58028 = G__58063;
continue;
} else {
return ret_value__47482__auto__;
}
break;
}
});
cljs$core$async$state_machine__47481__auto__ = function(state_58028){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47481__auto____1.call(this,state_58028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47481__auto____0;
cljs$core$async$state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47481__auto____1;
return cljs$core$async$state_machine__47481__auto__;
})()
;})(switch__47480__auto__,c__47988__auto___58051,out))
})();
var state__47990__auto__ = (function (){var statearr_58049 = f__47989__auto__.call(null);
(statearr_58049[(6)] = c__47988__auto___58051);

return statearr_58049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47990__auto__);
});})(c__47988__auto___58051,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__58065 = arguments.length;
switch (G__58065) {
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
var c__47988__auto___58131 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47988__auto___58131,out){
return (function (){
var f__47989__auto__ = (function (){var switch__47480__auto__ = ((function (c__47988__auto___58131,out){
return (function (state_58103){
var state_val_58104 = (state_58103[(1)]);
if((state_val_58104 === (7))){
var inst_58099 = (state_58103[(2)]);
var state_58103__$1 = state_58103;
var statearr_58105_58132 = state_58103__$1;
(statearr_58105_58132[(2)] = inst_58099);

(statearr_58105_58132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58104 === (1))){
var inst_58066 = (new Array(n));
var inst_58067 = inst_58066;
var inst_58068 = (0);
var state_58103__$1 = (function (){var statearr_58106 = state_58103;
(statearr_58106[(7)] = inst_58067);

(statearr_58106[(8)] = inst_58068);

return statearr_58106;
})();
var statearr_58107_58133 = state_58103__$1;
(statearr_58107_58133[(2)] = null);

(statearr_58107_58133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58104 === (4))){
var inst_58071 = (state_58103[(9)]);
var inst_58071__$1 = (state_58103[(2)]);
var inst_58072 = (inst_58071__$1 == null);
var inst_58073 = cljs.core.not.call(null,inst_58072);
var state_58103__$1 = (function (){var statearr_58108 = state_58103;
(statearr_58108[(9)] = inst_58071__$1);

return statearr_58108;
})();
if(inst_58073){
var statearr_58109_58134 = state_58103__$1;
(statearr_58109_58134[(1)] = (5));

} else {
var statearr_58110_58135 = state_58103__$1;
(statearr_58110_58135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58104 === (15))){
var inst_58093 = (state_58103[(2)]);
var state_58103__$1 = state_58103;
var statearr_58111_58136 = state_58103__$1;
(statearr_58111_58136[(2)] = inst_58093);

(statearr_58111_58136[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58104 === (13))){
var state_58103__$1 = state_58103;
var statearr_58112_58137 = state_58103__$1;
(statearr_58112_58137[(2)] = null);

(statearr_58112_58137[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58104 === (6))){
var inst_58068 = (state_58103[(8)]);
var inst_58089 = (inst_58068 > (0));
var state_58103__$1 = state_58103;
if(cljs.core.truth_(inst_58089)){
var statearr_58113_58138 = state_58103__$1;
(statearr_58113_58138[(1)] = (12));

} else {
var statearr_58114_58139 = state_58103__$1;
(statearr_58114_58139[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58104 === (3))){
var inst_58101 = (state_58103[(2)]);
var state_58103__$1 = state_58103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58103__$1,inst_58101);
} else {
if((state_val_58104 === (12))){
var inst_58067 = (state_58103[(7)]);
var inst_58091 = cljs.core.vec.call(null,inst_58067);
var state_58103__$1 = state_58103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58103__$1,(15),out,inst_58091);
} else {
if((state_val_58104 === (2))){
var state_58103__$1 = state_58103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58103__$1,(4),ch);
} else {
if((state_val_58104 === (11))){
var inst_58083 = (state_58103[(2)]);
var inst_58084 = (new Array(n));
var inst_58067 = inst_58084;
var inst_58068 = (0);
var state_58103__$1 = (function (){var statearr_58115 = state_58103;
(statearr_58115[(7)] = inst_58067);

(statearr_58115[(8)] = inst_58068);

(statearr_58115[(10)] = inst_58083);

return statearr_58115;
})();
var statearr_58116_58140 = state_58103__$1;
(statearr_58116_58140[(2)] = null);

(statearr_58116_58140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58104 === (9))){
var inst_58067 = (state_58103[(7)]);
var inst_58081 = cljs.core.vec.call(null,inst_58067);
var state_58103__$1 = state_58103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58103__$1,(11),out,inst_58081);
} else {
if((state_val_58104 === (5))){
var inst_58076 = (state_58103[(11)]);
var inst_58067 = (state_58103[(7)]);
var inst_58068 = (state_58103[(8)]);
var inst_58071 = (state_58103[(9)]);
var inst_58075 = (inst_58067[inst_58068] = inst_58071);
var inst_58076__$1 = (inst_58068 + (1));
var inst_58077 = (inst_58076__$1 < n);
var state_58103__$1 = (function (){var statearr_58117 = state_58103;
(statearr_58117[(11)] = inst_58076__$1);

(statearr_58117[(12)] = inst_58075);

return statearr_58117;
})();
if(cljs.core.truth_(inst_58077)){
var statearr_58118_58141 = state_58103__$1;
(statearr_58118_58141[(1)] = (8));

} else {
var statearr_58119_58142 = state_58103__$1;
(statearr_58119_58142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58104 === (14))){
var inst_58096 = (state_58103[(2)]);
var inst_58097 = cljs.core.async.close_BANG_.call(null,out);
var state_58103__$1 = (function (){var statearr_58121 = state_58103;
(statearr_58121[(13)] = inst_58096);

return statearr_58121;
})();
var statearr_58122_58143 = state_58103__$1;
(statearr_58122_58143[(2)] = inst_58097);

(statearr_58122_58143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58104 === (10))){
var inst_58087 = (state_58103[(2)]);
var state_58103__$1 = state_58103;
var statearr_58123_58144 = state_58103__$1;
(statearr_58123_58144[(2)] = inst_58087);

(statearr_58123_58144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58104 === (8))){
var inst_58076 = (state_58103[(11)]);
var inst_58067 = (state_58103[(7)]);
var tmp58120 = inst_58067;
var inst_58067__$1 = tmp58120;
var inst_58068 = inst_58076;
var state_58103__$1 = (function (){var statearr_58124 = state_58103;
(statearr_58124[(7)] = inst_58067__$1);

(statearr_58124[(8)] = inst_58068);

return statearr_58124;
})();
var statearr_58125_58145 = state_58103__$1;
(statearr_58125_58145[(2)] = null);

(statearr_58125_58145[(1)] = (2));


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
});})(c__47988__auto___58131,out))
;
return ((function (switch__47480__auto__,c__47988__auto___58131,out){
return (function() {
var cljs$core$async$state_machine__47481__auto__ = null;
var cljs$core$async$state_machine__47481__auto____0 = (function (){
var statearr_58126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58126[(0)] = cljs$core$async$state_machine__47481__auto__);

(statearr_58126[(1)] = (1));

return statearr_58126;
});
var cljs$core$async$state_machine__47481__auto____1 = (function (state_58103){
while(true){
var ret_value__47482__auto__ = (function (){try{while(true){
var result__47483__auto__ = switch__47480__auto__.call(null,state_58103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47483__auto__;
}
break;
}
}catch (e58127){if((e58127 instanceof Object)){
var ex__47484__auto__ = e58127;
var statearr_58128_58146 = state_58103;
(statearr_58128_58146[(5)] = ex__47484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58147 = state_58103;
state_58103 = G__58147;
continue;
} else {
return ret_value__47482__auto__;
}
break;
}
});
cljs$core$async$state_machine__47481__auto__ = function(state_58103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47481__auto____1.call(this,state_58103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47481__auto____0;
cljs$core$async$state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47481__auto____1;
return cljs$core$async$state_machine__47481__auto__;
})()
;})(switch__47480__auto__,c__47988__auto___58131,out))
})();
var state__47990__auto__ = (function (){var statearr_58129 = f__47989__auto__.call(null);
(statearr_58129[(6)] = c__47988__auto___58131);

return statearr_58129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47990__auto__);
});})(c__47988__auto___58131,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__58149 = arguments.length;
switch (G__58149) {
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
var c__47988__auto___58219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47988__auto___58219,out){
return (function (){
var f__47989__auto__ = (function (){var switch__47480__auto__ = ((function (c__47988__auto___58219,out){
return (function (state_58191){
var state_val_58192 = (state_58191[(1)]);
if((state_val_58192 === (7))){
var inst_58187 = (state_58191[(2)]);
var state_58191__$1 = state_58191;
var statearr_58193_58220 = state_58191__$1;
(statearr_58193_58220[(2)] = inst_58187);

(statearr_58193_58220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58192 === (1))){
var inst_58150 = [];
var inst_58151 = inst_58150;
var inst_58152 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_58191__$1 = (function (){var statearr_58194 = state_58191;
(statearr_58194[(7)] = inst_58152);

(statearr_58194[(8)] = inst_58151);

return statearr_58194;
})();
var statearr_58195_58221 = state_58191__$1;
(statearr_58195_58221[(2)] = null);

(statearr_58195_58221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58192 === (4))){
var inst_58155 = (state_58191[(9)]);
var inst_58155__$1 = (state_58191[(2)]);
var inst_58156 = (inst_58155__$1 == null);
var inst_58157 = cljs.core.not.call(null,inst_58156);
var state_58191__$1 = (function (){var statearr_58196 = state_58191;
(statearr_58196[(9)] = inst_58155__$1);

return statearr_58196;
})();
if(inst_58157){
var statearr_58197_58222 = state_58191__$1;
(statearr_58197_58222[(1)] = (5));

} else {
var statearr_58198_58223 = state_58191__$1;
(statearr_58198_58223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58192 === (15))){
var inst_58181 = (state_58191[(2)]);
var state_58191__$1 = state_58191;
var statearr_58199_58224 = state_58191__$1;
(statearr_58199_58224[(2)] = inst_58181);

(statearr_58199_58224[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58192 === (13))){
var state_58191__$1 = state_58191;
var statearr_58200_58225 = state_58191__$1;
(statearr_58200_58225[(2)] = null);

(statearr_58200_58225[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58192 === (6))){
var inst_58151 = (state_58191[(8)]);
var inst_58176 = inst_58151.length;
var inst_58177 = (inst_58176 > (0));
var state_58191__$1 = state_58191;
if(cljs.core.truth_(inst_58177)){
var statearr_58201_58226 = state_58191__$1;
(statearr_58201_58226[(1)] = (12));

} else {
var statearr_58202_58227 = state_58191__$1;
(statearr_58202_58227[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58192 === (3))){
var inst_58189 = (state_58191[(2)]);
var state_58191__$1 = state_58191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58191__$1,inst_58189);
} else {
if((state_val_58192 === (12))){
var inst_58151 = (state_58191[(8)]);
var inst_58179 = cljs.core.vec.call(null,inst_58151);
var state_58191__$1 = state_58191;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58191__$1,(15),out,inst_58179);
} else {
if((state_val_58192 === (2))){
var state_58191__$1 = state_58191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58191__$1,(4),ch);
} else {
if((state_val_58192 === (11))){
var inst_58159 = (state_58191[(10)]);
var inst_58155 = (state_58191[(9)]);
var inst_58169 = (state_58191[(2)]);
var inst_58170 = [];
var inst_58171 = inst_58170.push(inst_58155);
var inst_58151 = inst_58170;
var inst_58152 = inst_58159;
var state_58191__$1 = (function (){var statearr_58203 = state_58191;
(statearr_58203[(7)] = inst_58152);

(statearr_58203[(8)] = inst_58151);

(statearr_58203[(11)] = inst_58169);

(statearr_58203[(12)] = inst_58171);

return statearr_58203;
})();
var statearr_58204_58228 = state_58191__$1;
(statearr_58204_58228[(2)] = null);

(statearr_58204_58228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58192 === (9))){
var inst_58151 = (state_58191[(8)]);
var inst_58167 = cljs.core.vec.call(null,inst_58151);
var state_58191__$1 = state_58191;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58191__$1,(11),out,inst_58167);
} else {
if((state_val_58192 === (5))){
var inst_58152 = (state_58191[(7)]);
var inst_58159 = (state_58191[(10)]);
var inst_58155 = (state_58191[(9)]);
var inst_58159__$1 = f.call(null,inst_58155);
var inst_58160 = cljs.core._EQ_.call(null,inst_58159__$1,inst_58152);
var inst_58161 = cljs.core.keyword_identical_QMARK_.call(null,inst_58152,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_58162 = ((inst_58160) || (inst_58161));
var state_58191__$1 = (function (){var statearr_58205 = state_58191;
(statearr_58205[(10)] = inst_58159__$1);

return statearr_58205;
})();
if(cljs.core.truth_(inst_58162)){
var statearr_58206_58229 = state_58191__$1;
(statearr_58206_58229[(1)] = (8));

} else {
var statearr_58207_58230 = state_58191__$1;
(statearr_58207_58230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58192 === (14))){
var inst_58184 = (state_58191[(2)]);
var inst_58185 = cljs.core.async.close_BANG_.call(null,out);
var state_58191__$1 = (function (){var statearr_58209 = state_58191;
(statearr_58209[(13)] = inst_58184);

return statearr_58209;
})();
var statearr_58210_58231 = state_58191__$1;
(statearr_58210_58231[(2)] = inst_58185);

(statearr_58210_58231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58192 === (10))){
var inst_58174 = (state_58191[(2)]);
var state_58191__$1 = state_58191;
var statearr_58211_58232 = state_58191__$1;
(statearr_58211_58232[(2)] = inst_58174);

(statearr_58211_58232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58192 === (8))){
var inst_58151 = (state_58191[(8)]);
var inst_58159 = (state_58191[(10)]);
var inst_58155 = (state_58191[(9)]);
var inst_58164 = inst_58151.push(inst_58155);
var tmp58208 = inst_58151;
var inst_58151__$1 = tmp58208;
var inst_58152 = inst_58159;
var state_58191__$1 = (function (){var statearr_58212 = state_58191;
(statearr_58212[(7)] = inst_58152);

(statearr_58212[(8)] = inst_58151__$1);

(statearr_58212[(14)] = inst_58164);

return statearr_58212;
})();
var statearr_58213_58233 = state_58191__$1;
(statearr_58213_58233[(2)] = null);

(statearr_58213_58233[(1)] = (2));


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
});})(c__47988__auto___58219,out))
;
return ((function (switch__47480__auto__,c__47988__auto___58219,out){
return (function() {
var cljs$core$async$state_machine__47481__auto__ = null;
var cljs$core$async$state_machine__47481__auto____0 = (function (){
var statearr_58214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58214[(0)] = cljs$core$async$state_machine__47481__auto__);

(statearr_58214[(1)] = (1));

return statearr_58214;
});
var cljs$core$async$state_machine__47481__auto____1 = (function (state_58191){
while(true){
var ret_value__47482__auto__ = (function (){try{while(true){
var result__47483__auto__ = switch__47480__auto__.call(null,state_58191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47483__auto__;
}
break;
}
}catch (e58215){if((e58215 instanceof Object)){
var ex__47484__auto__ = e58215;
var statearr_58216_58234 = state_58191;
(statearr_58216_58234[(5)] = ex__47484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58235 = state_58191;
state_58191 = G__58235;
continue;
} else {
return ret_value__47482__auto__;
}
break;
}
});
cljs$core$async$state_machine__47481__auto__ = function(state_58191){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47481__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47481__auto____1.call(this,state_58191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47481__auto____0;
cljs$core$async$state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47481__auto____1;
return cljs$core$async$state_machine__47481__auto__;
})()
;})(switch__47480__auto__,c__47988__auto___58219,out))
})();
var state__47990__auto__ = (function (){var statearr_58217 = f__47989__auto__.call(null);
(statearr_58217[(6)] = c__47988__auto___58219);

return statearr_58217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47990__auto__);
});})(c__47988__auto___58219,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1574224106860
