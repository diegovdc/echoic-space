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
var G__34286 = arguments.length;
switch (G__34286) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34287 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34287 = (function (f,blockable,meta34288){
this.f = f;
this.blockable = blockable;
this.meta34288 = meta34288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34289,meta34288__$1){
var self__ = this;
var _34289__$1 = this;
return (new cljs.core.async.t_cljs$core$async34287(self__.f,self__.blockable,meta34288__$1));
});

cljs.core.async.t_cljs$core$async34287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34289){
var self__ = this;
var _34289__$1 = this;
return self__.meta34288;
});

cljs.core.async.t_cljs$core$async34287.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34287.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34287.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34287.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34287.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34288","meta34288",-948190399,null)], null);
});

cljs.core.async.t_cljs$core$async34287.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34287.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34287";

cljs.core.async.t_cljs$core$async34287.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async34287");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34287.
 */
cljs.core.async.__GT_t_cljs$core$async34287 = (function cljs$core$async$__GT_t_cljs$core$async34287(f__$1,blockable__$1,meta34288){
return (new cljs.core.async.t_cljs$core$async34287(f__$1,blockable__$1,meta34288));
});

}

return (new cljs.core.async.t_cljs$core$async34287(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34293 = arguments.length;
switch (G__34293) {
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
var G__34296 = arguments.length;
switch (G__34296) {
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
var G__34299 = arguments.length;
switch (G__34299) {
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
var val_34301 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34301);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34301,ret){
return (function (){
return fn1.call(null,val_34301);
});})(val_34301,ret))
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
var G__34303 = arguments.length;
switch (G__34303) {
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
var n__4394__auto___34305 = n;
var x_34306 = (0);
while(true){
if((x_34306 < n__4394__auto___34305)){
(a[x_34306] = (0));

var G__34307 = (x_34306 + (1));
x_34306 = G__34307;
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

var G__34308 = (i + (1));
i = G__34308;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34309 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34309 = (function (flag,meta34310){
this.flag = flag;
this.meta34310 = meta34310;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34311,meta34310__$1){
var self__ = this;
var _34311__$1 = this;
return (new cljs.core.async.t_cljs$core$async34309(self__.flag,meta34310__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34309.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34311){
var self__ = this;
var _34311__$1 = this;
return self__.meta34310;
});})(flag))
;

cljs.core.async.t_cljs$core$async34309.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34309.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34309.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34309.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34309.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34310","meta34310",797402916,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34309.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34309.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34309";

cljs.core.async.t_cljs$core$async34309.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async34309");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34309.
 */
cljs.core.async.__GT_t_cljs$core$async34309 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34309(flag__$1,meta34310){
return (new cljs.core.async.t_cljs$core$async34309(flag__$1,meta34310));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34309(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34312 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34312 = (function (flag,cb,meta34313){
this.flag = flag;
this.cb = cb;
this.meta34313 = meta34313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34314,meta34313__$1){
var self__ = this;
var _34314__$1 = this;
return (new cljs.core.async.t_cljs$core$async34312(self__.flag,self__.cb,meta34313__$1));
});

cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34314){
var self__ = this;
var _34314__$1 = this;
return self__.meta34313;
});

cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34313","meta34313",-1557079289,null)], null);
});

cljs.core.async.t_cljs$core$async34312.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34312";

cljs.core.async.t_cljs$core$async34312.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async34312");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34312.
 */
cljs.core.async.__GT_t_cljs$core$async34312 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34312(flag__$1,cb__$1,meta34313){
return (new cljs.core.async.t_cljs$core$async34312(flag__$1,cb__$1,meta34313));
});

}

return (new cljs.core.async.t_cljs$core$async34312(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34315_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34315_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34316_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34316_SHARP_,port], null));
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
var G__34317 = (i + (1));
i = G__34317;
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
var len__4517__auto___34323 = arguments.length;
var i__4518__auto___34324 = (0);
while(true){
if((i__4518__auto___34324 < len__4517__auto___34323)){
args__4520__auto__.push((arguments[i__4518__auto___34324]));

var G__34325 = (i__4518__auto___34324 + (1));
i__4518__auto___34324 = G__34325;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34320){
var map__34321 = p__34320;
var map__34321__$1 = ((((!((map__34321 == null)))?(((((map__34321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34321):map__34321);
var opts = map__34321__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34318){
var G__34319 = cljs.core.first.call(null,seq34318);
var seq34318__$1 = cljs.core.next.call(null,seq34318);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34319,seq34318__$1);
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
var G__34327 = arguments.length;
switch (G__34327) {
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
var c__34226__auto___34373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34226__auto___34373){
return (function (){
var f__34227__auto__ = (function (){var switch__34136__auto__ = ((function (c__34226__auto___34373){
return (function (state_34351){
var state_val_34352 = (state_34351[(1)]);
if((state_val_34352 === (7))){
var inst_34347 = (state_34351[(2)]);
var state_34351__$1 = state_34351;
var statearr_34353_34374 = state_34351__$1;
(statearr_34353_34374[(2)] = inst_34347);

(statearr_34353_34374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34352 === (1))){
var state_34351__$1 = state_34351;
var statearr_34354_34375 = state_34351__$1;
(statearr_34354_34375[(2)] = null);

(statearr_34354_34375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34352 === (4))){
var inst_34330 = (state_34351[(7)]);
var inst_34330__$1 = (state_34351[(2)]);
var inst_34331 = (inst_34330__$1 == null);
var state_34351__$1 = (function (){var statearr_34355 = state_34351;
(statearr_34355[(7)] = inst_34330__$1);

return statearr_34355;
})();
if(cljs.core.truth_(inst_34331)){
var statearr_34356_34376 = state_34351__$1;
(statearr_34356_34376[(1)] = (5));

} else {
var statearr_34357_34377 = state_34351__$1;
(statearr_34357_34377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34352 === (13))){
var state_34351__$1 = state_34351;
var statearr_34358_34378 = state_34351__$1;
(statearr_34358_34378[(2)] = null);

(statearr_34358_34378[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34352 === (6))){
var inst_34330 = (state_34351[(7)]);
var state_34351__$1 = state_34351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34351__$1,(11),to,inst_34330);
} else {
if((state_val_34352 === (3))){
var inst_34349 = (state_34351[(2)]);
var state_34351__$1 = state_34351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34351__$1,inst_34349);
} else {
if((state_val_34352 === (12))){
var state_34351__$1 = state_34351;
var statearr_34359_34379 = state_34351__$1;
(statearr_34359_34379[(2)] = null);

(statearr_34359_34379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34352 === (2))){
var state_34351__$1 = state_34351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34351__$1,(4),from);
} else {
if((state_val_34352 === (11))){
var inst_34340 = (state_34351[(2)]);
var state_34351__$1 = state_34351;
if(cljs.core.truth_(inst_34340)){
var statearr_34360_34380 = state_34351__$1;
(statearr_34360_34380[(1)] = (12));

} else {
var statearr_34361_34381 = state_34351__$1;
(statearr_34361_34381[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34352 === (9))){
var state_34351__$1 = state_34351;
var statearr_34362_34382 = state_34351__$1;
(statearr_34362_34382[(2)] = null);

(statearr_34362_34382[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34352 === (5))){
var state_34351__$1 = state_34351;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34363_34383 = state_34351__$1;
(statearr_34363_34383[(1)] = (8));

} else {
var statearr_34364_34384 = state_34351__$1;
(statearr_34364_34384[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34352 === (14))){
var inst_34345 = (state_34351[(2)]);
var state_34351__$1 = state_34351;
var statearr_34365_34385 = state_34351__$1;
(statearr_34365_34385[(2)] = inst_34345);

(statearr_34365_34385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34352 === (10))){
var inst_34337 = (state_34351[(2)]);
var state_34351__$1 = state_34351;
var statearr_34366_34386 = state_34351__$1;
(statearr_34366_34386[(2)] = inst_34337);

(statearr_34366_34386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34352 === (8))){
var inst_34334 = cljs.core.async.close_BANG_.call(null,to);
var state_34351__$1 = state_34351;
var statearr_34367_34387 = state_34351__$1;
(statearr_34367_34387[(2)] = inst_34334);

(statearr_34367_34387[(1)] = (10));


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
});})(c__34226__auto___34373))
;
return ((function (switch__34136__auto__,c__34226__auto___34373){
return (function() {
var cljs$core$async$state_machine__34137__auto__ = null;
var cljs$core$async$state_machine__34137__auto____0 = (function (){
var statearr_34368 = [null,null,null,null,null,null,null,null];
(statearr_34368[(0)] = cljs$core$async$state_machine__34137__auto__);

(statearr_34368[(1)] = (1));

return statearr_34368;
});
var cljs$core$async$state_machine__34137__auto____1 = (function (state_34351){
while(true){
var ret_value__34138__auto__ = (function (){try{while(true){
var result__34139__auto__ = switch__34136__auto__.call(null,state_34351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34139__auto__;
}
break;
}
}catch (e34369){if((e34369 instanceof Object)){
var ex__34140__auto__ = e34369;
var statearr_34370_34388 = state_34351;
(statearr_34370_34388[(5)] = ex__34140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34389 = state_34351;
state_34351 = G__34389;
continue;
} else {
return ret_value__34138__auto__;
}
break;
}
});
cljs$core$async$state_machine__34137__auto__ = function(state_34351){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34137__auto____1.call(this,state_34351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34137__auto____0;
cljs$core$async$state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34137__auto____1;
return cljs$core$async$state_machine__34137__auto__;
})()
;})(switch__34136__auto__,c__34226__auto___34373))
})();
var state__34228__auto__ = (function (){var statearr_34371 = f__34227__auto__.call(null);
(statearr_34371[(6)] = c__34226__auto___34373);

return statearr_34371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34228__auto__);
});})(c__34226__auto___34373))
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
return (function (p__34390){
var vec__34391 = p__34390;
var v = cljs.core.nth.call(null,vec__34391,(0),null);
var p = cljs.core.nth.call(null,vec__34391,(1),null);
var job = vec__34391;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34226__auto___34562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34226__auto___34562,res,vec__34391,v,p,job,jobs,results){
return (function (){
var f__34227__auto__ = (function (){var switch__34136__auto__ = ((function (c__34226__auto___34562,res,vec__34391,v,p,job,jobs,results){
return (function (state_34398){
var state_val_34399 = (state_34398[(1)]);
if((state_val_34399 === (1))){
var state_34398__$1 = state_34398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34398__$1,(2),res,v);
} else {
if((state_val_34399 === (2))){
var inst_34395 = (state_34398[(2)]);
var inst_34396 = cljs.core.async.close_BANG_.call(null,res);
var state_34398__$1 = (function (){var statearr_34400 = state_34398;
(statearr_34400[(7)] = inst_34395);

return statearr_34400;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34398__$1,inst_34396);
} else {
return null;
}
}
});})(c__34226__auto___34562,res,vec__34391,v,p,job,jobs,results))
;
return ((function (switch__34136__auto__,c__34226__auto___34562,res,vec__34391,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34137__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34137__auto____0 = (function (){
var statearr_34401 = [null,null,null,null,null,null,null,null];
(statearr_34401[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34137__auto__);

(statearr_34401[(1)] = (1));

return statearr_34401;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34137__auto____1 = (function (state_34398){
while(true){
var ret_value__34138__auto__ = (function (){try{while(true){
var result__34139__auto__ = switch__34136__auto__.call(null,state_34398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34139__auto__;
}
break;
}
}catch (e34402){if((e34402 instanceof Object)){
var ex__34140__auto__ = e34402;
var statearr_34403_34563 = state_34398;
(statearr_34403_34563[(5)] = ex__34140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34564 = state_34398;
state_34398 = G__34564;
continue;
} else {
return ret_value__34138__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34137__auto__ = function(state_34398){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34137__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34137__auto____1.call(this,state_34398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34137__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34137__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34137__auto__;
})()
;})(switch__34136__auto__,c__34226__auto___34562,res,vec__34391,v,p,job,jobs,results))
})();
var state__34228__auto__ = (function (){var statearr_34404 = f__34227__auto__.call(null);
(statearr_34404[(6)] = c__34226__auto___34562);

return statearr_34404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34228__auto__);
});})(c__34226__auto___34562,res,vec__34391,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34405){
var vec__34406 = p__34405;
var v = cljs.core.nth.call(null,vec__34406,(0),null);
var p = cljs.core.nth.call(null,vec__34406,(1),null);
var job = vec__34406;
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
var n__4394__auto___34565 = n;
var __34566 = (0);
while(true){
if((__34566 < n__4394__auto___34565)){
var G__34409_34567 = type;
var G__34409_34568__$1 = (((G__34409_34567 instanceof cljs.core.Keyword))?G__34409_34567.fqn:null);
switch (G__34409_34568__$1) {
case "compute":
var c__34226__auto___34570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34566,c__34226__auto___34570,G__34409_34567,G__34409_34568__$1,n__4394__auto___34565,jobs,results,process,async){
return (function (){
var f__34227__auto__ = (function (){var switch__34136__auto__ = ((function (__34566,c__34226__auto___34570,G__34409_34567,G__34409_34568__$1,n__4394__auto___34565,jobs,results,process,async){
return (function (state_34422){
var state_val_34423 = (state_34422[(1)]);
if((state_val_34423 === (1))){
var state_34422__$1 = state_34422;
var statearr_34424_34571 = state_34422__$1;
(statearr_34424_34571[(2)] = null);

(statearr_34424_34571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34423 === (2))){
var state_34422__$1 = state_34422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34422__$1,(4),jobs);
} else {
if((state_val_34423 === (3))){
var inst_34420 = (state_34422[(2)]);
var state_34422__$1 = state_34422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34422__$1,inst_34420);
} else {
if((state_val_34423 === (4))){
var inst_34412 = (state_34422[(2)]);
var inst_34413 = process.call(null,inst_34412);
var state_34422__$1 = state_34422;
if(cljs.core.truth_(inst_34413)){
var statearr_34425_34572 = state_34422__$1;
(statearr_34425_34572[(1)] = (5));

} else {
var statearr_34426_34573 = state_34422__$1;
(statearr_34426_34573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34423 === (5))){
var state_34422__$1 = state_34422;
var statearr_34427_34574 = state_34422__$1;
(statearr_34427_34574[(2)] = null);

(statearr_34427_34574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34423 === (6))){
var state_34422__$1 = state_34422;
var statearr_34428_34575 = state_34422__$1;
(statearr_34428_34575[(2)] = null);

(statearr_34428_34575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34423 === (7))){
var inst_34418 = (state_34422[(2)]);
var state_34422__$1 = state_34422;
var statearr_34429_34576 = state_34422__$1;
(statearr_34429_34576[(2)] = inst_34418);

(statearr_34429_34576[(1)] = (3));


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
});})(__34566,c__34226__auto___34570,G__34409_34567,G__34409_34568__$1,n__4394__auto___34565,jobs,results,process,async))
;
return ((function (__34566,switch__34136__auto__,c__34226__auto___34570,G__34409_34567,G__34409_34568__$1,n__4394__auto___34565,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34137__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34137__auto____0 = (function (){
var statearr_34430 = [null,null,null,null,null,null,null];
(statearr_34430[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34137__auto__);

(statearr_34430[(1)] = (1));

return statearr_34430;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34137__auto____1 = (function (state_34422){
while(true){
var ret_value__34138__auto__ = (function (){try{while(true){
var result__34139__auto__ = switch__34136__auto__.call(null,state_34422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34139__auto__;
}
break;
}
}catch (e34431){if((e34431 instanceof Object)){
var ex__34140__auto__ = e34431;
var statearr_34432_34577 = state_34422;
(statearr_34432_34577[(5)] = ex__34140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34578 = state_34422;
state_34422 = G__34578;
continue;
} else {
return ret_value__34138__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34137__auto__ = function(state_34422){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34137__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34137__auto____1.call(this,state_34422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34137__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34137__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34137__auto__;
})()
;})(__34566,switch__34136__auto__,c__34226__auto___34570,G__34409_34567,G__34409_34568__$1,n__4394__auto___34565,jobs,results,process,async))
})();
var state__34228__auto__ = (function (){var statearr_34433 = f__34227__auto__.call(null);
(statearr_34433[(6)] = c__34226__auto___34570);

return statearr_34433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34228__auto__);
});})(__34566,c__34226__auto___34570,G__34409_34567,G__34409_34568__$1,n__4394__auto___34565,jobs,results,process,async))
);


break;
case "async":
var c__34226__auto___34579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34566,c__34226__auto___34579,G__34409_34567,G__34409_34568__$1,n__4394__auto___34565,jobs,results,process,async){
return (function (){
var f__34227__auto__ = (function (){var switch__34136__auto__ = ((function (__34566,c__34226__auto___34579,G__34409_34567,G__34409_34568__$1,n__4394__auto___34565,jobs,results,process,async){
return (function (state_34446){
var state_val_34447 = (state_34446[(1)]);
if((state_val_34447 === (1))){
var state_34446__$1 = state_34446;
var statearr_34448_34580 = state_34446__$1;
(statearr_34448_34580[(2)] = null);

(statearr_34448_34580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (2))){
var state_34446__$1 = state_34446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34446__$1,(4),jobs);
} else {
if((state_val_34447 === (3))){
var inst_34444 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34446__$1,inst_34444);
} else {
if((state_val_34447 === (4))){
var inst_34436 = (state_34446[(2)]);
var inst_34437 = async.call(null,inst_34436);
var state_34446__$1 = state_34446;
if(cljs.core.truth_(inst_34437)){
var statearr_34449_34581 = state_34446__$1;
(statearr_34449_34581[(1)] = (5));

} else {
var statearr_34450_34582 = state_34446__$1;
(statearr_34450_34582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (5))){
var state_34446__$1 = state_34446;
var statearr_34451_34583 = state_34446__$1;
(statearr_34451_34583[(2)] = null);

(statearr_34451_34583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (6))){
var state_34446__$1 = state_34446;
var statearr_34452_34584 = state_34446__$1;
(statearr_34452_34584[(2)] = null);

(statearr_34452_34584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (7))){
var inst_34442 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
var statearr_34453_34585 = state_34446__$1;
(statearr_34453_34585[(2)] = inst_34442);

(statearr_34453_34585[(1)] = (3));


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
});})(__34566,c__34226__auto___34579,G__34409_34567,G__34409_34568__$1,n__4394__auto___34565,jobs,results,process,async))
;
return ((function (__34566,switch__34136__auto__,c__34226__auto___34579,G__34409_34567,G__34409_34568__$1,n__4394__auto___34565,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34137__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34137__auto____0 = (function (){
var statearr_34454 = [null,null,null,null,null,null,null];
(statearr_34454[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34137__auto__);

(statearr_34454[(1)] = (1));

return statearr_34454;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34137__auto____1 = (function (state_34446){
while(true){
var ret_value__34138__auto__ = (function (){try{while(true){
var result__34139__auto__ = switch__34136__auto__.call(null,state_34446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34139__auto__;
}
break;
}
}catch (e34455){if((e34455 instanceof Object)){
var ex__34140__auto__ = e34455;
var statearr_34456_34586 = state_34446;
(statearr_34456_34586[(5)] = ex__34140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34587 = state_34446;
state_34446 = G__34587;
continue;
} else {
return ret_value__34138__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34137__auto__ = function(state_34446){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34137__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34137__auto____1.call(this,state_34446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34137__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34137__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34137__auto__;
})()
;})(__34566,switch__34136__auto__,c__34226__auto___34579,G__34409_34567,G__34409_34568__$1,n__4394__auto___34565,jobs,results,process,async))
})();
var state__34228__auto__ = (function (){var statearr_34457 = f__34227__auto__.call(null);
(statearr_34457[(6)] = c__34226__auto___34579);

return statearr_34457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34228__auto__);
});})(__34566,c__34226__auto___34579,G__34409_34567,G__34409_34568__$1,n__4394__auto___34565,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34409_34568__$1)].join('')));

}

var G__34588 = (__34566 + (1));
__34566 = G__34588;
continue;
} else {
}
break;
}

var c__34226__auto___34589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34226__auto___34589,jobs,results,process,async){
return (function (){
var f__34227__auto__ = (function (){var switch__34136__auto__ = ((function (c__34226__auto___34589,jobs,results,process,async){
return (function (state_34479){
var state_val_34480 = (state_34479[(1)]);
if((state_val_34480 === (1))){
var state_34479__$1 = state_34479;
var statearr_34481_34590 = state_34479__$1;
(statearr_34481_34590[(2)] = null);

(statearr_34481_34590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (2))){
var state_34479__$1 = state_34479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34479__$1,(4),from);
} else {
if((state_val_34480 === (3))){
var inst_34477 = (state_34479[(2)]);
var state_34479__$1 = state_34479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34479__$1,inst_34477);
} else {
if((state_val_34480 === (4))){
var inst_34460 = (state_34479[(7)]);
var inst_34460__$1 = (state_34479[(2)]);
var inst_34461 = (inst_34460__$1 == null);
var state_34479__$1 = (function (){var statearr_34482 = state_34479;
(statearr_34482[(7)] = inst_34460__$1);

return statearr_34482;
})();
if(cljs.core.truth_(inst_34461)){
var statearr_34483_34591 = state_34479__$1;
(statearr_34483_34591[(1)] = (5));

} else {
var statearr_34484_34592 = state_34479__$1;
(statearr_34484_34592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (5))){
var inst_34463 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34479__$1 = state_34479;
var statearr_34485_34593 = state_34479__$1;
(statearr_34485_34593[(2)] = inst_34463);

(statearr_34485_34593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (6))){
var inst_34460 = (state_34479[(7)]);
var inst_34465 = (state_34479[(8)]);
var inst_34465__$1 = cljs.core.async.chan.call(null,(1));
var inst_34466 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34467 = [inst_34460,inst_34465__$1];
var inst_34468 = (new cljs.core.PersistentVector(null,2,(5),inst_34466,inst_34467,null));
var state_34479__$1 = (function (){var statearr_34486 = state_34479;
(statearr_34486[(8)] = inst_34465__$1);

return statearr_34486;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34479__$1,(8),jobs,inst_34468);
} else {
if((state_val_34480 === (7))){
var inst_34475 = (state_34479[(2)]);
var state_34479__$1 = state_34479;
var statearr_34487_34594 = state_34479__$1;
(statearr_34487_34594[(2)] = inst_34475);

(statearr_34487_34594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (8))){
var inst_34465 = (state_34479[(8)]);
var inst_34470 = (state_34479[(2)]);
var state_34479__$1 = (function (){var statearr_34488 = state_34479;
(statearr_34488[(9)] = inst_34470);

return statearr_34488;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34479__$1,(9),results,inst_34465);
} else {
if((state_val_34480 === (9))){
var inst_34472 = (state_34479[(2)]);
var state_34479__$1 = (function (){var statearr_34489 = state_34479;
(statearr_34489[(10)] = inst_34472);

return statearr_34489;
})();
var statearr_34490_34595 = state_34479__$1;
(statearr_34490_34595[(2)] = null);

(statearr_34490_34595[(1)] = (2));


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
});})(c__34226__auto___34589,jobs,results,process,async))
;
return ((function (switch__34136__auto__,c__34226__auto___34589,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34137__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34137__auto____0 = (function (){
var statearr_34491 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34491[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34137__auto__);

(statearr_34491[(1)] = (1));

return statearr_34491;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34137__auto____1 = (function (state_34479){
while(true){
var ret_value__34138__auto__ = (function (){try{while(true){
var result__34139__auto__ = switch__34136__auto__.call(null,state_34479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34139__auto__;
}
break;
}
}catch (e34492){if((e34492 instanceof Object)){
var ex__34140__auto__ = e34492;
var statearr_34493_34596 = state_34479;
(statearr_34493_34596[(5)] = ex__34140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34597 = state_34479;
state_34479 = G__34597;
continue;
} else {
return ret_value__34138__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34137__auto__ = function(state_34479){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34137__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34137__auto____1.call(this,state_34479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34137__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34137__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34137__auto__;
})()
;})(switch__34136__auto__,c__34226__auto___34589,jobs,results,process,async))
})();
var state__34228__auto__ = (function (){var statearr_34494 = f__34227__auto__.call(null);
(statearr_34494[(6)] = c__34226__auto___34589);

return statearr_34494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34228__auto__);
});})(c__34226__auto___34589,jobs,results,process,async))
);


var c__34226__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34226__auto__,jobs,results,process,async){
return (function (){
var f__34227__auto__ = (function (){var switch__34136__auto__ = ((function (c__34226__auto__,jobs,results,process,async){
return (function (state_34532){
var state_val_34533 = (state_34532[(1)]);
if((state_val_34533 === (7))){
var inst_34528 = (state_34532[(2)]);
var state_34532__$1 = state_34532;
var statearr_34534_34598 = state_34532__$1;
(statearr_34534_34598[(2)] = inst_34528);

(statearr_34534_34598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (20))){
var state_34532__$1 = state_34532;
var statearr_34535_34599 = state_34532__$1;
(statearr_34535_34599[(2)] = null);

(statearr_34535_34599[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (1))){
var state_34532__$1 = state_34532;
var statearr_34536_34600 = state_34532__$1;
(statearr_34536_34600[(2)] = null);

(statearr_34536_34600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (4))){
var inst_34497 = (state_34532[(7)]);
var inst_34497__$1 = (state_34532[(2)]);
var inst_34498 = (inst_34497__$1 == null);
var state_34532__$1 = (function (){var statearr_34537 = state_34532;
(statearr_34537[(7)] = inst_34497__$1);

return statearr_34537;
})();
if(cljs.core.truth_(inst_34498)){
var statearr_34538_34601 = state_34532__$1;
(statearr_34538_34601[(1)] = (5));

} else {
var statearr_34539_34602 = state_34532__$1;
(statearr_34539_34602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (15))){
var inst_34510 = (state_34532[(8)]);
var state_34532__$1 = state_34532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34532__$1,(18),to,inst_34510);
} else {
if((state_val_34533 === (21))){
var inst_34523 = (state_34532[(2)]);
var state_34532__$1 = state_34532;
var statearr_34540_34603 = state_34532__$1;
(statearr_34540_34603[(2)] = inst_34523);

(statearr_34540_34603[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (13))){
var inst_34525 = (state_34532[(2)]);
var state_34532__$1 = (function (){var statearr_34541 = state_34532;
(statearr_34541[(9)] = inst_34525);

return statearr_34541;
})();
var statearr_34542_34604 = state_34532__$1;
(statearr_34542_34604[(2)] = null);

(statearr_34542_34604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (6))){
var inst_34497 = (state_34532[(7)]);
var state_34532__$1 = state_34532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34532__$1,(11),inst_34497);
} else {
if((state_val_34533 === (17))){
var inst_34518 = (state_34532[(2)]);
var state_34532__$1 = state_34532;
if(cljs.core.truth_(inst_34518)){
var statearr_34543_34605 = state_34532__$1;
(statearr_34543_34605[(1)] = (19));

} else {
var statearr_34544_34606 = state_34532__$1;
(statearr_34544_34606[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (3))){
var inst_34530 = (state_34532[(2)]);
var state_34532__$1 = state_34532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34532__$1,inst_34530);
} else {
if((state_val_34533 === (12))){
var inst_34507 = (state_34532[(10)]);
var state_34532__$1 = state_34532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34532__$1,(14),inst_34507);
} else {
if((state_val_34533 === (2))){
var state_34532__$1 = state_34532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34532__$1,(4),results);
} else {
if((state_val_34533 === (19))){
var state_34532__$1 = state_34532;
var statearr_34545_34607 = state_34532__$1;
(statearr_34545_34607[(2)] = null);

(statearr_34545_34607[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (11))){
var inst_34507 = (state_34532[(2)]);
var state_34532__$1 = (function (){var statearr_34546 = state_34532;
(statearr_34546[(10)] = inst_34507);

return statearr_34546;
})();
var statearr_34547_34608 = state_34532__$1;
(statearr_34547_34608[(2)] = null);

(statearr_34547_34608[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (9))){
var state_34532__$1 = state_34532;
var statearr_34548_34609 = state_34532__$1;
(statearr_34548_34609[(2)] = null);

(statearr_34548_34609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (5))){
var state_34532__$1 = state_34532;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34549_34610 = state_34532__$1;
(statearr_34549_34610[(1)] = (8));

} else {
var statearr_34550_34611 = state_34532__$1;
(statearr_34550_34611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (14))){
var inst_34510 = (state_34532[(8)]);
var inst_34512 = (state_34532[(11)]);
var inst_34510__$1 = (state_34532[(2)]);
var inst_34511 = (inst_34510__$1 == null);
var inst_34512__$1 = cljs.core.not.call(null,inst_34511);
var state_34532__$1 = (function (){var statearr_34551 = state_34532;
(statearr_34551[(8)] = inst_34510__$1);

(statearr_34551[(11)] = inst_34512__$1);

return statearr_34551;
})();
if(inst_34512__$1){
var statearr_34552_34612 = state_34532__$1;
(statearr_34552_34612[(1)] = (15));

} else {
var statearr_34553_34613 = state_34532__$1;
(statearr_34553_34613[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (16))){
var inst_34512 = (state_34532[(11)]);
var state_34532__$1 = state_34532;
var statearr_34554_34614 = state_34532__$1;
(statearr_34554_34614[(2)] = inst_34512);

(statearr_34554_34614[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (10))){
var inst_34504 = (state_34532[(2)]);
var state_34532__$1 = state_34532;
var statearr_34555_34615 = state_34532__$1;
(statearr_34555_34615[(2)] = inst_34504);

(statearr_34555_34615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (18))){
var inst_34515 = (state_34532[(2)]);
var state_34532__$1 = state_34532;
var statearr_34556_34616 = state_34532__$1;
(statearr_34556_34616[(2)] = inst_34515);

(statearr_34556_34616[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (8))){
var inst_34501 = cljs.core.async.close_BANG_.call(null,to);
var state_34532__$1 = state_34532;
var statearr_34557_34617 = state_34532__$1;
(statearr_34557_34617[(2)] = inst_34501);

(statearr_34557_34617[(1)] = (10));


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
});})(c__34226__auto__,jobs,results,process,async))
;
return ((function (switch__34136__auto__,c__34226__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34137__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34137__auto____0 = (function (){
var statearr_34558 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34558[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34137__auto__);

(statearr_34558[(1)] = (1));

return statearr_34558;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34137__auto____1 = (function (state_34532){
while(true){
var ret_value__34138__auto__ = (function (){try{while(true){
var result__34139__auto__ = switch__34136__auto__.call(null,state_34532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34139__auto__;
}
break;
}
}catch (e34559){if((e34559 instanceof Object)){
var ex__34140__auto__ = e34559;
var statearr_34560_34618 = state_34532;
(statearr_34560_34618[(5)] = ex__34140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34619 = state_34532;
state_34532 = G__34619;
continue;
} else {
return ret_value__34138__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34137__auto__ = function(state_34532){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34137__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34137__auto____1.call(this,state_34532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34137__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34137__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34137__auto__;
})()
;})(switch__34136__auto__,c__34226__auto__,jobs,results,process,async))
})();
var state__34228__auto__ = (function (){var statearr_34561 = f__34227__auto__.call(null);
(statearr_34561[(6)] = c__34226__auto__);

return statearr_34561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34228__auto__);
});})(c__34226__auto__,jobs,results,process,async))
);

return c__34226__auto__;
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
var G__34621 = arguments.length;
switch (G__34621) {
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
var G__34624 = arguments.length;
switch (G__34624) {
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
var G__34627 = arguments.length;
switch (G__34627) {
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
var c__34226__auto___34676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34226__auto___34676,tc,fc){
return (function (){
var f__34227__auto__ = (function (){var switch__34136__auto__ = ((function (c__34226__auto___34676,tc,fc){
return (function (state_34653){
var state_val_34654 = (state_34653[(1)]);
if((state_val_34654 === (7))){
var inst_34649 = (state_34653[(2)]);
var state_34653__$1 = state_34653;
var statearr_34655_34677 = state_34653__$1;
(statearr_34655_34677[(2)] = inst_34649);

(statearr_34655_34677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (1))){
var state_34653__$1 = state_34653;
var statearr_34656_34678 = state_34653__$1;
(statearr_34656_34678[(2)] = null);

(statearr_34656_34678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (4))){
var inst_34630 = (state_34653[(7)]);
var inst_34630__$1 = (state_34653[(2)]);
var inst_34631 = (inst_34630__$1 == null);
var state_34653__$1 = (function (){var statearr_34657 = state_34653;
(statearr_34657[(7)] = inst_34630__$1);

return statearr_34657;
})();
if(cljs.core.truth_(inst_34631)){
var statearr_34658_34679 = state_34653__$1;
(statearr_34658_34679[(1)] = (5));

} else {
var statearr_34659_34680 = state_34653__$1;
(statearr_34659_34680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (13))){
var state_34653__$1 = state_34653;
var statearr_34660_34681 = state_34653__$1;
(statearr_34660_34681[(2)] = null);

(statearr_34660_34681[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (6))){
var inst_34630 = (state_34653[(7)]);
var inst_34636 = p.call(null,inst_34630);
var state_34653__$1 = state_34653;
if(cljs.core.truth_(inst_34636)){
var statearr_34661_34682 = state_34653__$1;
(statearr_34661_34682[(1)] = (9));

} else {
var statearr_34662_34683 = state_34653__$1;
(statearr_34662_34683[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (3))){
var inst_34651 = (state_34653[(2)]);
var state_34653__$1 = state_34653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34653__$1,inst_34651);
} else {
if((state_val_34654 === (12))){
var state_34653__$1 = state_34653;
var statearr_34663_34684 = state_34653__$1;
(statearr_34663_34684[(2)] = null);

(statearr_34663_34684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (2))){
var state_34653__$1 = state_34653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34653__$1,(4),ch);
} else {
if((state_val_34654 === (11))){
var inst_34630 = (state_34653[(7)]);
var inst_34640 = (state_34653[(2)]);
var state_34653__$1 = state_34653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34653__$1,(8),inst_34640,inst_34630);
} else {
if((state_val_34654 === (9))){
var state_34653__$1 = state_34653;
var statearr_34664_34685 = state_34653__$1;
(statearr_34664_34685[(2)] = tc);

(statearr_34664_34685[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (5))){
var inst_34633 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34634 = cljs.core.async.close_BANG_.call(null,fc);
var state_34653__$1 = (function (){var statearr_34665 = state_34653;
(statearr_34665[(8)] = inst_34633);

return statearr_34665;
})();
var statearr_34666_34686 = state_34653__$1;
(statearr_34666_34686[(2)] = inst_34634);

(statearr_34666_34686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (14))){
var inst_34647 = (state_34653[(2)]);
var state_34653__$1 = state_34653;
var statearr_34667_34687 = state_34653__$1;
(statearr_34667_34687[(2)] = inst_34647);

(statearr_34667_34687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (10))){
var state_34653__$1 = state_34653;
var statearr_34668_34688 = state_34653__$1;
(statearr_34668_34688[(2)] = fc);

(statearr_34668_34688[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (8))){
var inst_34642 = (state_34653[(2)]);
var state_34653__$1 = state_34653;
if(cljs.core.truth_(inst_34642)){
var statearr_34669_34689 = state_34653__$1;
(statearr_34669_34689[(1)] = (12));

} else {
var statearr_34670_34690 = state_34653__$1;
(statearr_34670_34690[(1)] = (13));

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
});})(c__34226__auto___34676,tc,fc))
;
return ((function (switch__34136__auto__,c__34226__auto___34676,tc,fc){
return (function() {
var cljs$core$async$state_machine__34137__auto__ = null;
var cljs$core$async$state_machine__34137__auto____0 = (function (){
var statearr_34671 = [null,null,null,null,null,null,null,null,null];
(statearr_34671[(0)] = cljs$core$async$state_machine__34137__auto__);

(statearr_34671[(1)] = (1));

return statearr_34671;
});
var cljs$core$async$state_machine__34137__auto____1 = (function (state_34653){
while(true){
var ret_value__34138__auto__ = (function (){try{while(true){
var result__34139__auto__ = switch__34136__auto__.call(null,state_34653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34139__auto__;
}
break;
}
}catch (e34672){if((e34672 instanceof Object)){
var ex__34140__auto__ = e34672;
var statearr_34673_34691 = state_34653;
(statearr_34673_34691[(5)] = ex__34140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34692 = state_34653;
state_34653 = G__34692;
continue;
} else {
return ret_value__34138__auto__;
}
break;
}
});
cljs$core$async$state_machine__34137__auto__ = function(state_34653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34137__auto____1.call(this,state_34653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34137__auto____0;
cljs$core$async$state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34137__auto____1;
return cljs$core$async$state_machine__34137__auto__;
})()
;})(switch__34136__auto__,c__34226__auto___34676,tc,fc))
})();
var state__34228__auto__ = (function (){var statearr_34674 = f__34227__auto__.call(null);
(statearr_34674[(6)] = c__34226__auto___34676);

return statearr_34674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34228__auto__);
});})(c__34226__auto___34676,tc,fc))
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
var c__34226__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34226__auto__){
return (function (){
var f__34227__auto__ = (function (){var switch__34136__auto__ = ((function (c__34226__auto__){
return (function (state_34713){
var state_val_34714 = (state_34713[(1)]);
if((state_val_34714 === (7))){
var inst_34709 = (state_34713[(2)]);
var state_34713__$1 = state_34713;
var statearr_34715_34733 = state_34713__$1;
(statearr_34715_34733[(2)] = inst_34709);

(statearr_34715_34733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (1))){
var inst_34693 = init;
var state_34713__$1 = (function (){var statearr_34716 = state_34713;
(statearr_34716[(7)] = inst_34693);

return statearr_34716;
})();
var statearr_34717_34734 = state_34713__$1;
(statearr_34717_34734[(2)] = null);

(statearr_34717_34734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (4))){
var inst_34696 = (state_34713[(8)]);
var inst_34696__$1 = (state_34713[(2)]);
var inst_34697 = (inst_34696__$1 == null);
var state_34713__$1 = (function (){var statearr_34718 = state_34713;
(statearr_34718[(8)] = inst_34696__$1);

return statearr_34718;
})();
if(cljs.core.truth_(inst_34697)){
var statearr_34719_34735 = state_34713__$1;
(statearr_34719_34735[(1)] = (5));

} else {
var statearr_34720_34736 = state_34713__$1;
(statearr_34720_34736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (6))){
var inst_34696 = (state_34713[(8)]);
var inst_34700 = (state_34713[(9)]);
var inst_34693 = (state_34713[(7)]);
var inst_34700__$1 = f.call(null,inst_34693,inst_34696);
var inst_34701 = cljs.core.reduced_QMARK_.call(null,inst_34700__$1);
var state_34713__$1 = (function (){var statearr_34721 = state_34713;
(statearr_34721[(9)] = inst_34700__$1);

return statearr_34721;
})();
if(inst_34701){
var statearr_34722_34737 = state_34713__$1;
(statearr_34722_34737[(1)] = (8));

} else {
var statearr_34723_34738 = state_34713__$1;
(statearr_34723_34738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (3))){
var inst_34711 = (state_34713[(2)]);
var state_34713__$1 = state_34713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34713__$1,inst_34711);
} else {
if((state_val_34714 === (2))){
var state_34713__$1 = state_34713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34713__$1,(4),ch);
} else {
if((state_val_34714 === (9))){
var inst_34700 = (state_34713[(9)]);
var inst_34693 = inst_34700;
var state_34713__$1 = (function (){var statearr_34724 = state_34713;
(statearr_34724[(7)] = inst_34693);

return statearr_34724;
})();
var statearr_34725_34739 = state_34713__$1;
(statearr_34725_34739[(2)] = null);

(statearr_34725_34739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (5))){
var inst_34693 = (state_34713[(7)]);
var state_34713__$1 = state_34713;
var statearr_34726_34740 = state_34713__$1;
(statearr_34726_34740[(2)] = inst_34693);

(statearr_34726_34740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (10))){
var inst_34707 = (state_34713[(2)]);
var state_34713__$1 = state_34713;
var statearr_34727_34741 = state_34713__$1;
(statearr_34727_34741[(2)] = inst_34707);

(statearr_34727_34741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (8))){
var inst_34700 = (state_34713[(9)]);
var inst_34703 = cljs.core.deref.call(null,inst_34700);
var state_34713__$1 = state_34713;
var statearr_34728_34742 = state_34713__$1;
(statearr_34728_34742[(2)] = inst_34703);

(statearr_34728_34742[(1)] = (10));


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
});})(c__34226__auto__))
;
return ((function (switch__34136__auto__,c__34226__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__34137__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34137__auto____0 = (function (){
var statearr_34729 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34729[(0)] = cljs$core$async$reduce_$_state_machine__34137__auto__);

(statearr_34729[(1)] = (1));

return statearr_34729;
});
var cljs$core$async$reduce_$_state_machine__34137__auto____1 = (function (state_34713){
while(true){
var ret_value__34138__auto__ = (function (){try{while(true){
var result__34139__auto__ = switch__34136__auto__.call(null,state_34713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34139__auto__;
}
break;
}
}catch (e34730){if((e34730 instanceof Object)){
var ex__34140__auto__ = e34730;
var statearr_34731_34743 = state_34713;
(statearr_34731_34743[(5)] = ex__34140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34744 = state_34713;
state_34713 = G__34744;
continue;
} else {
return ret_value__34138__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34137__auto__ = function(state_34713){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34137__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34137__auto____1.call(this,state_34713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34137__auto____0;
cljs$core$async$reduce_$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34137__auto____1;
return cljs$core$async$reduce_$_state_machine__34137__auto__;
})()
;})(switch__34136__auto__,c__34226__auto__))
})();
var state__34228__auto__ = (function (){var statearr_34732 = f__34227__auto__.call(null);
(statearr_34732[(6)] = c__34226__auto__);

return statearr_34732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34228__auto__);
});})(c__34226__auto__))
);

return c__34226__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__34226__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34226__auto__,f__$1){
return (function (){
var f__34227__auto__ = (function (){var switch__34136__auto__ = ((function (c__34226__auto__,f__$1){
return (function (state_34750){
var state_val_34751 = (state_34750[(1)]);
if((state_val_34751 === (1))){
var inst_34745 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34750__$1 = state_34750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34750__$1,(2),inst_34745);
} else {
if((state_val_34751 === (2))){
var inst_34747 = (state_34750[(2)]);
var inst_34748 = f__$1.call(null,inst_34747);
var state_34750__$1 = state_34750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34750__$1,inst_34748);
} else {
return null;
}
}
});})(c__34226__auto__,f__$1))
;
return ((function (switch__34136__auto__,c__34226__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__34137__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34137__auto____0 = (function (){
var statearr_34752 = [null,null,null,null,null,null,null];
(statearr_34752[(0)] = cljs$core$async$transduce_$_state_machine__34137__auto__);

(statearr_34752[(1)] = (1));

return statearr_34752;
});
var cljs$core$async$transduce_$_state_machine__34137__auto____1 = (function (state_34750){
while(true){
var ret_value__34138__auto__ = (function (){try{while(true){
var result__34139__auto__ = switch__34136__auto__.call(null,state_34750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34139__auto__;
}
break;
}
}catch (e34753){if((e34753 instanceof Object)){
var ex__34140__auto__ = e34753;
var statearr_34754_34756 = state_34750;
(statearr_34754_34756[(5)] = ex__34140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34757 = state_34750;
state_34750 = G__34757;
continue;
} else {
return ret_value__34138__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34137__auto__ = function(state_34750){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34137__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34137__auto____1.call(this,state_34750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34137__auto____0;
cljs$core$async$transduce_$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34137__auto____1;
return cljs$core$async$transduce_$_state_machine__34137__auto__;
})()
;})(switch__34136__auto__,c__34226__auto__,f__$1))
})();
var state__34228__auto__ = (function (){var statearr_34755 = f__34227__auto__.call(null);
(statearr_34755[(6)] = c__34226__auto__);

return statearr_34755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34228__auto__);
});})(c__34226__auto__,f__$1))
);

return c__34226__auto__;
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
var G__34759 = arguments.length;
switch (G__34759) {
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
var c__34226__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34226__auto__){
return (function (){
var f__34227__auto__ = (function (){var switch__34136__auto__ = ((function (c__34226__auto__){
return (function (state_34784){
var state_val_34785 = (state_34784[(1)]);
if((state_val_34785 === (7))){
var inst_34766 = (state_34784[(2)]);
var state_34784__$1 = state_34784;
var statearr_34786_34807 = state_34784__$1;
(statearr_34786_34807[(2)] = inst_34766);

(statearr_34786_34807[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (1))){
var inst_34760 = cljs.core.seq.call(null,coll);
var inst_34761 = inst_34760;
var state_34784__$1 = (function (){var statearr_34787 = state_34784;
(statearr_34787[(7)] = inst_34761);

return statearr_34787;
})();
var statearr_34788_34808 = state_34784__$1;
(statearr_34788_34808[(2)] = null);

(statearr_34788_34808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (4))){
var inst_34761 = (state_34784[(7)]);
var inst_34764 = cljs.core.first.call(null,inst_34761);
var state_34784__$1 = state_34784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34784__$1,(7),ch,inst_34764);
} else {
if((state_val_34785 === (13))){
var inst_34778 = (state_34784[(2)]);
var state_34784__$1 = state_34784;
var statearr_34789_34809 = state_34784__$1;
(statearr_34789_34809[(2)] = inst_34778);

(statearr_34789_34809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (6))){
var inst_34769 = (state_34784[(2)]);
var state_34784__$1 = state_34784;
if(cljs.core.truth_(inst_34769)){
var statearr_34790_34810 = state_34784__$1;
(statearr_34790_34810[(1)] = (8));

} else {
var statearr_34791_34811 = state_34784__$1;
(statearr_34791_34811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (3))){
var inst_34782 = (state_34784[(2)]);
var state_34784__$1 = state_34784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34784__$1,inst_34782);
} else {
if((state_val_34785 === (12))){
var state_34784__$1 = state_34784;
var statearr_34792_34812 = state_34784__$1;
(statearr_34792_34812[(2)] = null);

(statearr_34792_34812[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (2))){
var inst_34761 = (state_34784[(7)]);
var state_34784__$1 = state_34784;
if(cljs.core.truth_(inst_34761)){
var statearr_34793_34813 = state_34784__$1;
(statearr_34793_34813[(1)] = (4));

} else {
var statearr_34794_34814 = state_34784__$1;
(statearr_34794_34814[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (11))){
var inst_34775 = cljs.core.async.close_BANG_.call(null,ch);
var state_34784__$1 = state_34784;
var statearr_34795_34815 = state_34784__$1;
(statearr_34795_34815[(2)] = inst_34775);

(statearr_34795_34815[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (9))){
var state_34784__$1 = state_34784;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34796_34816 = state_34784__$1;
(statearr_34796_34816[(1)] = (11));

} else {
var statearr_34797_34817 = state_34784__$1;
(statearr_34797_34817[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (5))){
var inst_34761 = (state_34784[(7)]);
var state_34784__$1 = state_34784;
var statearr_34798_34818 = state_34784__$1;
(statearr_34798_34818[(2)] = inst_34761);

(statearr_34798_34818[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (10))){
var inst_34780 = (state_34784[(2)]);
var state_34784__$1 = state_34784;
var statearr_34799_34819 = state_34784__$1;
(statearr_34799_34819[(2)] = inst_34780);

(statearr_34799_34819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (8))){
var inst_34761 = (state_34784[(7)]);
var inst_34771 = cljs.core.next.call(null,inst_34761);
var inst_34761__$1 = inst_34771;
var state_34784__$1 = (function (){var statearr_34800 = state_34784;
(statearr_34800[(7)] = inst_34761__$1);

return statearr_34800;
})();
var statearr_34801_34820 = state_34784__$1;
(statearr_34801_34820[(2)] = null);

(statearr_34801_34820[(1)] = (2));


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
});})(c__34226__auto__))
;
return ((function (switch__34136__auto__,c__34226__auto__){
return (function() {
var cljs$core$async$state_machine__34137__auto__ = null;
var cljs$core$async$state_machine__34137__auto____0 = (function (){
var statearr_34802 = [null,null,null,null,null,null,null,null];
(statearr_34802[(0)] = cljs$core$async$state_machine__34137__auto__);

(statearr_34802[(1)] = (1));

return statearr_34802;
});
var cljs$core$async$state_machine__34137__auto____1 = (function (state_34784){
while(true){
var ret_value__34138__auto__ = (function (){try{while(true){
var result__34139__auto__ = switch__34136__auto__.call(null,state_34784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34139__auto__;
}
break;
}
}catch (e34803){if((e34803 instanceof Object)){
var ex__34140__auto__ = e34803;
var statearr_34804_34821 = state_34784;
(statearr_34804_34821[(5)] = ex__34140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34822 = state_34784;
state_34784 = G__34822;
continue;
} else {
return ret_value__34138__auto__;
}
break;
}
});
cljs$core$async$state_machine__34137__auto__ = function(state_34784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34137__auto____1.call(this,state_34784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34137__auto____0;
cljs$core$async$state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34137__auto____1;
return cljs$core$async$state_machine__34137__auto__;
})()
;})(switch__34136__auto__,c__34226__auto__))
})();
var state__34228__auto__ = (function (){var statearr_34805 = f__34227__auto__.call(null);
(statearr_34805[(6)] = c__34226__auto__);

return statearr_34805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34228__auto__);
});})(c__34226__auto__))
);

return c__34226__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34823 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34823 = (function (ch,cs,meta34824){
this.ch = ch;
this.cs = cs;
this.meta34824 = meta34824;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34825,meta34824__$1){
var self__ = this;
var _34825__$1 = this;
return (new cljs.core.async.t_cljs$core$async34823(self__.ch,self__.cs,meta34824__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34823.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34825){
var self__ = this;
var _34825__$1 = this;
return self__.meta34824;
});})(cs))
;

cljs.core.async.t_cljs$core$async34823.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34823.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34823.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34823.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34823.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34823.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34823.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34824","meta34824",-959534471,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34823.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34823.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34823";

cljs.core.async.t_cljs$core$async34823.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async34823");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34823.
 */
cljs.core.async.__GT_t_cljs$core$async34823 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34823(ch__$1,cs__$1,meta34824){
return (new cljs.core.async.t_cljs$core$async34823(ch__$1,cs__$1,meta34824));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34823(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34226__auto___35045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34226__auto___35045,cs,m,dchan,dctr,done){
return (function (){
var f__34227__auto__ = (function (){var switch__34136__auto__ = ((function (c__34226__auto___35045,cs,m,dchan,dctr,done){
return (function (state_34960){
var state_val_34961 = (state_34960[(1)]);
if((state_val_34961 === (7))){
var inst_34956 = (state_34960[(2)]);
var state_34960__$1 = state_34960;
var statearr_34962_35046 = state_34960__$1;
(statearr_34962_35046[(2)] = inst_34956);

(statearr_34962_35046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (20))){
var inst_34859 = (state_34960[(7)]);
var inst_34871 = cljs.core.first.call(null,inst_34859);
var inst_34872 = cljs.core.nth.call(null,inst_34871,(0),null);
var inst_34873 = cljs.core.nth.call(null,inst_34871,(1),null);
var state_34960__$1 = (function (){var statearr_34963 = state_34960;
(statearr_34963[(8)] = inst_34872);

return statearr_34963;
})();
if(cljs.core.truth_(inst_34873)){
var statearr_34964_35047 = state_34960__$1;
(statearr_34964_35047[(1)] = (22));

} else {
var statearr_34965_35048 = state_34960__$1;
(statearr_34965_35048[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (27))){
var inst_34901 = (state_34960[(9)]);
var inst_34828 = (state_34960[(10)]);
var inst_34903 = (state_34960[(11)]);
var inst_34908 = (state_34960[(12)]);
var inst_34908__$1 = cljs.core._nth.call(null,inst_34901,inst_34903);
var inst_34909 = cljs.core.async.put_BANG_.call(null,inst_34908__$1,inst_34828,done);
var state_34960__$1 = (function (){var statearr_34966 = state_34960;
(statearr_34966[(12)] = inst_34908__$1);

return statearr_34966;
})();
if(cljs.core.truth_(inst_34909)){
var statearr_34967_35049 = state_34960__$1;
(statearr_34967_35049[(1)] = (30));

} else {
var statearr_34968_35050 = state_34960__$1;
(statearr_34968_35050[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (1))){
var state_34960__$1 = state_34960;
var statearr_34969_35051 = state_34960__$1;
(statearr_34969_35051[(2)] = null);

(statearr_34969_35051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (24))){
var inst_34859 = (state_34960[(7)]);
var inst_34878 = (state_34960[(2)]);
var inst_34879 = cljs.core.next.call(null,inst_34859);
var inst_34837 = inst_34879;
var inst_34838 = null;
var inst_34839 = (0);
var inst_34840 = (0);
var state_34960__$1 = (function (){var statearr_34970 = state_34960;
(statearr_34970[(13)] = inst_34837);

(statearr_34970[(14)] = inst_34840);

(statearr_34970[(15)] = inst_34878);

(statearr_34970[(16)] = inst_34838);

(statearr_34970[(17)] = inst_34839);

return statearr_34970;
})();
var statearr_34971_35052 = state_34960__$1;
(statearr_34971_35052[(2)] = null);

(statearr_34971_35052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (39))){
var state_34960__$1 = state_34960;
var statearr_34975_35053 = state_34960__$1;
(statearr_34975_35053[(2)] = null);

(statearr_34975_35053[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (4))){
var inst_34828 = (state_34960[(10)]);
var inst_34828__$1 = (state_34960[(2)]);
var inst_34829 = (inst_34828__$1 == null);
var state_34960__$1 = (function (){var statearr_34976 = state_34960;
(statearr_34976[(10)] = inst_34828__$1);

return statearr_34976;
})();
if(cljs.core.truth_(inst_34829)){
var statearr_34977_35054 = state_34960__$1;
(statearr_34977_35054[(1)] = (5));

} else {
var statearr_34978_35055 = state_34960__$1;
(statearr_34978_35055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (15))){
var inst_34837 = (state_34960[(13)]);
var inst_34840 = (state_34960[(14)]);
var inst_34838 = (state_34960[(16)]);
var inst_34839 = (state_34960[(17)]);
var inst_34855 = (state_34960[(2)]);
var inst_34856 = (inst_34840 + (1));
var tmp34972 = inst_34837;
var tmp34973 = inst_34838;
var tmp34974 = inst_34839;
var inst_34837__$1 = tmp34972;
var inst_34838__$1 = tmp34973;
var inst_34839__$1 = tmp34974;
var inst_34840__$1 = inst_34856;
var state_34960__$1 = (function (){var statearr_34979 = state_34960;
(statearr_34979[(13)] = inst_34837__$1);

(statearr_34979[(14)] = inst_34840__$1);

(statearr_34979[(18)] = inst_34855);

(statearr_34979[(16)] = inst_34838__$1);

(statearr_34979[(17)] = inst_34839__$1);

return statearr_34979;
})();
var statearr_34980_35056 = state_34960__$1;
(statearr_34980_35056[(2)] = null);

(statearr_34980_35056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (21))){
var inst_34882 = (state_34960[(2)]);
var state_34960__$1 = state_34960;
var statearr_34984_35057 = state_34960__$1;
(statearr_34984_35057[(2)] = inst_34882);

(statearr_34984_35057[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (31))){
var inst_34908 = (state_34960[(12)]);
var inst_34912 = done.call(null,null);
var inst_34913 = cljs.core.async.untap_STAR_.call(null,m,inst_34908);
var state_34960__$1 = (function (){var statearr_34985 = state_34960;
(statearr_34985[(19)] = inst_34912);

return statearr_34985;
})();
var statearr_34986_35058 = state_34960__$1;
(statearr_34986_35058[(2)] = inst_34913);

(statearr_34986_35058[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (32))){
var inst_34901 = (state_34960[(9)]);
var inst_34900 = (state_34960[(20)]);
var inst_34903 = (state_34960[(11)]);
var inst_34902 = (state_34960[(21)]);
var inst_34915 = (state_34960[(2)]);
var inst_34916 = (inst_34903 + (1));
var tmp34981 = inst_34901;
var tmp34982 = inst_34900;
var tmp34983 = inst_34902;
var inst_34900__$1 = tmp34982;
var inst_34901__$1 = tmp34981;
var inst_34902__$1 = tmp34983;
var inst_34903__$1 = inst_34916;
var state_34960__$1 = (function (){var statearr_34987 = state_34960;
(statearr_34987[(9)] = inst_34901__$1);

(statearr_34987[(20)] = inst_34900__$1);

(statearr_34987[(11)] = inst_34903__$1);

(statearr_34987[(22)] = inst_34915);

(statearr_34987[(21)] = inst_34902__$1);

return statearr_34987;
})();
var statearr_34988_35059 = state_34960__$1;
(statearr_34988_35059[(2)] = null);

(statearr_34988_35059[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (40))){
var inst_34928 = (state_34960[(23)]);
var inst_34932 = done.call(null,null);
var inst_34933 = cljs.core.async.untap_STAR_.call(null,m,inst_34928);
var state_34960__$1 = (function (){var statearr_34989 = state_34960;
(statearr_34989[(24)] = inst_34932);

return statearr_34989;
})();
var statearr_34990_35060 = state_34960__$1;
(statearr_34990_35060[(2)] = inst_34933);

(statearr_34990_35060[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (33))){
var inst_34919 = (state_34960[(25)]);
var inst_34921 = cljs.core.chunked_seq_QMARK_.call(null,inst_34919);
var state_34960__$1 = state_34960;
if(inst_34921){
var statearr_34991_35061 = state_34960__$1;
(statearr_34991_35061[(1)] = (36));

} else {
var statearr_34992_35062 = state_34960__$1;
(statearr_34992_35062[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (13))){
var inst_34849 = (state_34960[(26)]);
var inst_34852 = cljs.core.async.close_BANG_.call(null,inst_34849);
var state_34960__$1 = state_34960;
var statearr_34993_35063 = state_34960__$1;
(statearr_34993_35063[(2)] = inst_34852);

(statearr_34993_35063[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (22))){
var inst_34872 = (state_34960[(8)]);
var inst_34875 = cljs.core.async.close_BANG_.call(null,inst_34872);
var state_34960__$1 = state_34960;
var statearr_34994_35064 = state_34960__$1;
(statearr_34994_35064[(2)] = inst_34875);

(statearr_34994_35064[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (36))){
var inst_34919 = (state_34960[(25)]);
var inst_34923 = cljs.core.chunk_first.call(null,inst_34919);
var inst_34924 = cljs.core.chunk_rest.call(null,inst_34919);
var inst_34925 = cljs.core.count.call(null,inst_34923);
var inst_34900 = inst_34924;
var inst_34901 = inst_34923;
var inst_34902 = inst_34925;
var inst_34903 = (0);
var state_34960__$1 = (function (){var statearr_34995 = state_34960;
(statearr_34995[(9)] = inst_34901);

(statearr_34995[(20)] = inst_34900);

(statearr_34995[(11)] = inst_34903);

(statearr_34995[(21)] = inst_34902);

return statearr_34995;
})();
var statearr_34996_35065 = state_34960__$1;
(statearr_34996_35065[(2)] = null);

(statearr_34996_35065[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (41))){
var inst_34919 = (state_34960[(25)]);
var inst_34935 = (state_34960[(2)]);
var inst_34936 = cljs.core.next.call(null,inst_34919);
var inst_34900 = inst_34936;
var inst_34901 = null;
var inst_34902 = (0);
var inst_34903 = (0);
var state_34960__$1 = (function (){var statearr_34997 = state_34960;
(statearr_34997[(9)] = inst_34901);

(statearr_34997[(20)] = inst_34900);

(statearr_34997[(11)] = inst_34903);

(statearr_34997[(27)] = inst_34935);

(statearr_34997[(21)] = inst_34902);

return statearr_34997;
})();
var statearr_34998_35066 = state_34960__$1;
(statearr_34998_35066[(2)] = null);

(statearr_34998_35066[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (43))){
var state_34960__$1 = state_34960;
var statearr_34999_35067 = state_34960__$1;
(statearr_34999_35067[(2)] = null);

(statearr_34999_35067[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (29))){
var inst_34944 = (state_34960[(2)]);
var state_34960__$1 = state_34960;
var statearr_35000_35068 = state_34960__$1;
(statearr_35000_35068[(2)] = inst_34944);

(statearr_35000_35068[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (44))){
var inst_34953 = (state_34960[(2)]);
var state_34960__$1 = (function (){var statearr_35001 = state_34960;
(statearr_35001[(28)] = inst_34953);

return statearr_35001;
})();
var statearr_35002_35069 = state_34960__$1;
(statearr_35002_35069[(2)] = null);

(statearr_35002_35069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (6))){
var inst_34892 = (state_34960[(29)]);
var inst_34891 = cljs.core.deref.call(null,cs);
var inst_34892__$1 = cljs.core.keys.call(null,inst_34891);
var inst_34893 = cljs.core.count.call(null,inst_34892__$1);
var inst_34894 = cljs.core.reset_BANG_.call(null,dctr,inst_34893);
var inst_34899 = cljs.core.seq.call(null,inst_34892__$1);
var inst_34900 = inst_34899;
var inst_34901 = null;
var inst_34902 = (0);
var inst_34903 = (0);
var state_34960__$1 = (function (){var statearr_35003 = state_34960;
(statearr_35003[(9)] = inst_34901);

(statearr_35003[(29)] = inst_34892__$1);

(statearr_35003[(20)] = inst_34900);

(statearr_35003[(11)] = inst_34903);

(statearr_35003[(21)] = inst_34902);

(statearr_35003[(30)] = inst_34894);

return statearr_35003;
})();
var statearr_35004_35070 = state_34960__$1;
(statearr_35004_35070[(2)] = null);

(statearr_35004_35070[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (28))){
var inst_34900 = (state_34960[(20)]);
var inst_34919 = (state_34960[(25)]);
var inst_34919__$1 = cljs.core.seq.call(null,inst_34900);
var state_34960__$1 = (function (){var statearr_35005 = state_34960;
(statearr_35005[(25)] = inst_34919__$1);

return statearr_35005;
})();
if(inst_34919__$1){
var statearr_35006_35071 = state_34960__$1;
(statearr_35006_35071[(1)] = (33));

} else {
var statearr_35007_35072 = state_34960__$1;
(statearr_35007_35072[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (25))){
var inst_34903 = (state_34960[(11)]);
var inst_34902 = (state_34960[(21)]);
var inst_34905 = (inst_34903 < inst_34902);
var inst_34906 = inst_34905;
var state_34960__$1 = state_34960;
if(cljs.core.truth_(inst_34906)){
var statearr_35008_35073 = state_34960__$1;
(statearr_35008_35073[(1)] = (27));

} else {
var statearr_35009_35074 = state_34960__$1;
(statearr_35009_35074[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (34))){
var state_34960__$1 = state_34960;
var statearr_35010_35075 = state_34960__$1;
(statearr_35010_35075[(2)] = null);

(statearr_35010_35075[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (17))){
var state_34960__$1 = state_34960;
var statearr_35011_35076 = state_34960__$1;
(statearr_35011_35076[(2)] = null);

(statearr_35011_35076[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (3))){
var inst_34958 = (state_34960[(2)]);
var state_34960__$1 = state_34960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34960__$1,inst_34958);
} else {
if((state_val_34961 === (12))){
var inst_34887 = (state_34960[(2)]);
var state_34960__$1 = state_34960;
var statearr_35012_35077 = state_34960__$1;
(statearr_35012_35077[(2)] = inst_34887);

(statearr_35012_35077[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (2))){
var state_34960__$1 = state_34960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34960__$1,(4),ch);
} else {
if((state_val_34961 === (23))){
var state_34960__$1 = state_34960;
var statearr_35013_35078 = state_34960__$1;
(statearr_35013_35078[(2)] = null);

(statearr_35013_35078[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (35))){
var inst_34942 = (state_34960[(2)]);
var state_34960__$1 = state_34960;
var statearr_35014_35079 = state_34960__$1;
(statearr_35014_35079[(2)] = inst_34942);

(statearr_35014_35079[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (19))){
var inst_34859 = (state_34960[(7)]);
var inst_34863 = cljs.core.chunk_first.call(null,inst_34859);
var inst_34864 = cljs.core.chunk_rest.call(null,inst_34859);
var inst_34865 = cljs.core.count.call(null,inst_34863);
var inst_34837 = inst_34864;
var inst_34838 = inst_34863;
var inst_34839 = inst_34865;
var inst_34840 = (0);
var state_34960__$1 = (function (){var statearr_35015 = state_34960;
(statearr_35015[(13)] = inst_34837);

(statearr_35015[(14)] = inst_34840);

(statearr_35015[(16)] = inst_34838);

(statearr_35015[(17)] = inst_34839);

return statearr_35015;
})();
var statearr_35016_35080 = state_34960__$1;
(statearr_35016_35080[(2)] = null);

(statearr_35016_35080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (11))){
var inst_34837 = (state_34960[(13)]);
var inst_34859 = (state_34960[(7)]);
var inst_34859__$1 = cljs.core.seq.call(null,inst_34837);
var state_34960__$1 = (function (){var statearr_35017 = state_34960;
(statearr_35017[(7)] = inst_34859__$1);

return statearr_35017;
})();
if(inst_34859__$1){
var statearr_35018_35081 = state_34960__$1;
(statearr_35018_35081[(1)] = (16));

} else {
var statearr_35019_35082 = state_34960__$1;
(statearr_35019_35082[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (9))){
var inst_34889 = (state_34960[(2)]);
var state_34960__$1 = state_34960;
var statearr_35020_35083 = state_34960__$1;
(statearr_35020_35083[(2)] = inst_34889);

(statearr_35020_35083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (5))){
var inst_34835 = cljs.core.deref.call(null,cs);
var inst_34836 = cljs.core.seq.call(null,inst_34835);
var inst_34837 = inst_34836;
var inst_34838 = null;
var inst_34839 = (0);
var inst_34840 = (0);
var state_34960__$1 = (function (){var statearr_35021 = state_34960;
(statearr_35021[(13)] = inst_34837);

(statearr_35021[(14)] = inst_34840);

(statearr_35021[(16)] = inst_34838);

(statearr_35021[(17)] = inst_34839);

return statearr_35021;
})();
var statearr_35022_35084 = state_34960__$1;
(statearr_35022_35084[(2)] = null);

(statearr_35022_35084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (14))){
var state_34960__$1 = state_34960;
var statearr_35023_35085 = state_34960__$1;
(statearr_35023_35085[(2)] = null);

(statearr_35023_35085[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (45))){
var inst_34950 = (state_34960[(2)]);
var state_34960__$1 = state_34960;
var statearr_35024_35086 = state_34960__$1;
(statearr_35024_35086[(2)] = inst_34950);

(statearr_35024_35086[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (26))){
var inst_34892 = (state_34960[(29)]);
var inst_34946 = (state_34960[(2)]);
var inst_34947 = cljs.core.seq.call(null,inst_34892);
var state_34960__$1 = (function (){var statearr_35025 = state_34960;
(statearr_35025[(31)] = inst_34946);

return statearr_35025;
})();
if(inst_34947){
var statearr_35026_35087 = state_34960__$1;
(statearr_35026_35087[(1)] = (42));

} else {
var statearr_35027_35088 = state_34960__$1;
(statearr_35027_35088[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (16))){
var inst_34859 = (state_34960[(7)]);
var inst_34861 = cljs.core.chunked_seq_QMARK_.call(null,inst_34859);
var state_34960__$1 = state_34960;
if(inst_34861){
var statearr_35028_35089 = state_34960__$1;
(statearr_35028_35089[(1)] = (19));

} else {
var statearr_35029_35090 = state_34960__$1;
(statearr_35029_35090[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (38))){
var inst_34939 = (state_34960[(2)]);
var state_34960__$1 = state_34960;
var statearr_35030_35091 = state_34960__$1;
(statearr_35030_35091[(2)] = inst_34939);

(statearr_35030_35091[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (30))){
var state_34960__$1 = state_34960;
var statearr_35031_35092 = state_34960__$1;
(statearr_35031_35092[(2)] = null);

(statearr_35031_35092[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (10))){
var inst_34840 = (state_34960[(14)]);
var inst_34838 = (state_34960[(16)]);
var inst_34848 = cljs.core._nth.call(null,inst_34838,inst_34840);
var inst_34849 = cljs.core.nth.call(null,inst_34848,(0),null);
var inst_34850 = cljs.core.nth.call(null,inst_34848,(1),null);
var state_34960__$1 = (function (){var statearr_35032 = state_34960;
(statearr_35032[(26)] = inst_34849);

return statearr_35032;
})();
if(cljs.core.truth_(inst_34850)){
var statearr_35033_35093 = state_34960__$1;
(statearr_35033_35093[(1)] = (13));

} else {
var statearr_35034_35094 = state_34960__$1;
(statearr_35034_35094[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (18))){
var inst_34885 = (state_34960[(2)]);
var state_34960__$1 = state_34960;
var statearr_35035_35095 = state_34960__$1;
(statearr_35035_35095[(2)] = inst_34885);

(statearr_35035_35095[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (42))){
var state_34960__$1 = state_34960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34960__$1,(45),dchan);
} else {
if((state_val_34961 === (37))){
var inst_34828 = (state_34960[(10)]);
var inst_34919 = (state_34960[(25)]);
var inst_34928 = (state_34960[(23)]);
var inst_34928__$1 = cljs.core.first.call(null,inst_34919);
var inst_34929 = cljs.core.async.put_BANG_.call(null,inst_34928__$1,inst_34828,done);
var state_34960__$1 = (function (){var statearr_35036 = state_34960;
(statearr_35036[(23)] = inst_34928__$1);

return statearr_35036;
})();
if(cljs.core.truth_(inst_34929)){
var statearr_35037_35096 = state_34960__$1;
(statearr_35037_35096[(1)] = (39));

} else {
var statearr_35038_35097 = state_34960__$1;
(statearr_35038_35097[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (8))){
var inst_34840 = (state_34960[(14)]);
var inst_34839 = (state_34960[(17)]);
var inst_34842 = (inst_34840 < inst_34839);
var inst_34843 = inst_34842;
var state_34960__$1 = state_34960;
if(cljs.core.truth_(inst_34843)){
var statearr_35039_35098 = state_34960__$1;
(statearr_35039_35098[(1)] = (10));

} else {
var statearr_35040_35099 = state_34960__$1;
(statearr_35040_35099[(1)] = (11));

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
});})(c__34226__auto___35045,cs,m,dchan,dctr,done))
;
return ((function (switch__34136__auto__,c__34226__auto___35045,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__34137__auto__ = null;
var cljs$core$async$mult_$_state_machine__34137__auto____0 = (function (){
var statearr_35041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35041[(0)] = cljs$core$async$mult_$_state_machine__34137__auto__);

(statearr_35041[(1)] = (1));

return statearr_35041;
});
var cljs$core$async$mult_$_state_machine__34137__auto____1 = (function (state_34960){
while(true){
var ret_value__34138__auto__ = (function (){try{while(true){
var result__34139__auto__ = switch__34136__auto__.call(null,state_34960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34139__auto__;
}
break;
}
}catch (e35042){if((e35042 instanceof Object)){
var ex__34140__auto__ = e35042;
var statearr_35043_35100 = state_34960;
(statearr_35043_35100[(5)] = ex__34140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35101 = state_34960;
state_34960 = G__35101;
continue;
} else {
return ret_value__34138__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34137__auto__ = function(state_34960){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34137__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34137__auto____1.call(this,state_34960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34137__auto____0;
cljs$core$async$mult_$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34137__auto____1;
return cljs$core$async$mult_$_state_machine__34137__auto__;
})()
;})(switch__34136__auto__,c__34226__auto___35045,cs,m,dchan,dctr,done))
})();
var state__34228__auto__ = (function (){var statearr_35044 = f__34227__auto__.call(null);
(statearr_35044[(6)] = c__34226__auto___35045);

return statearr_35044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34228__auto__);
});})(c__34226__auto___35045,cs,m,dchan,dctr,done))
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
var G__35103 = arguments.length;
switch (G__35103) {
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
var len__4517__auto___35115 = arguments.length;
var i__4518__auto___35116 = (0);
while(true){
if((i__4518__auto___35116 < len__4517__auto___35115)){
args__4520__auto__.push((arguments[i__4518__auto___35116]));

var G__35117 = (i__4518__auto___35116 + (1));
i__4518__auto___35116 = G__35117;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((3) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4521__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35109){
var map__35110 = p__35109;
var map__35110__$1 = ((((!((map__35110 == null)))?(((((map__35110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35110):map__35110);
var opts = map__35110__$1;
var statearr_35112_35118 = state;
(statearr_35112_35118[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__35110,map__35110__$1,opts){
return (function (val){
var statearr_35113_35119 = state;
(statearr_35113_35119[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35110,map__35110__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_35114_35120 = state;
(statearr_35114_35120[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35105){
var G__35106 = cljs.core.first.call(null,seq35105);
var seq35105__$1 = cljs.core.next.call(null,seq35105);
var G__35107 = cljs.core.first.call(null,seq35105__$1);
var seq35105__$2 = cljs.core.next.call(null,seq35105__$1);
var G__35108 = cljs.core.first.call(null,seq35105__$2);
var seq35105__$3 = cljs.core.next.call(null,seq35105__$2);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35106,G__35107,G__35108,seq35105__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35121 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35121 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta35122){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta35122 = meta35122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35123,meta35122__$1){
var self__ = this;
var _35123__$1 = this;
return (new cljs.core.async.t_cljs$core$async35121(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta35122__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35121.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35123){
var self__ = this;
var _35123__$1 = this;
return self__.meta35122;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35121.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35121.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35121.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35121.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35121.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35121.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35121.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35121.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async35121.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta35122","meta35122",1019813079,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35121.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35121.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35121";

cljs.core.async.t_cljs$core$async35121.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async35121");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35121.
 */
cljs.core.async.__GT_t_cljs$core$async35121 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35121(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35122){
return (new cljs.core.async.t_cljs$core$async35121(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35122));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35121(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34226__auto___35285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34226__auto___35285,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34227__auto__ = (function (){var switch__34136__auto__ = ((function (c__34226__auto___35285,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35225){
var state_val_35226 = (state_35225[(1)]);
if((state_val_35226 === (7))){
var inst_35140 = (state_35225[(2)]);
var state_35225__$1 = state_35225;
var statearr_35227_35286 = state_35225__$1;
(statearr_35227_35286[(2)] = inst_35140);

(statearr_35227_35286[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (20))){
var inst_35152 = (state_35225[(7)]);
var state_35225__$1 = state_35225;
var statearr_35228_35287 = state_35225__$1;
(statearr_35228_35287[(2)] = inst_35152);

(statearr_35228_35287[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (27))){
var state_35225__$1 = state_35225;
var statearr_35229_35288 = state_35225__$1;
(statearr_35229_35288[(2)] = null);

(statearr_35229_35288[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (1))){
var inst_35127 = (state_35225[(8)]);
var inst_35127__$1 = calc_state.call(null);
var inst_35129 = (inst_35127__$1 == null);
var inst_35130 = cljs.core.not.call(null,inst_35129);
var state_35225__$1 = (function (){var statearr_35230 = state_35225;
(statearr_35230[(8)] = inst_35127__$1);

return statearr_35230;
})();
if(inst_35130){
var statearr_35231_35289 = state_35225__$1;
(statearr_35231_35289[(1)] = (2));

} else {
var statearr_35232_35290 = state_35225__$1;
(statearr_35232_35290[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (24))){
var inst_35199 = (state_35225[(9)]);
var inst_35185 = (state_35225[(10)]);
var inst_35176 = (state_35225[(11)]);
var inst_35199__$1 = inst_35176.call(null,inst_35185);
var state_35225__$1 = (function (){var statearr_35233 = state_35225;
(statearr_35233[(9)] = inst_35199__$1);

return statearr_35233;
})();
if(cljs.core.truth_(inst_35199__$1)){
var statearr_35234_35291 = state_35225__$1;
(statearr_35234_35291[(1)] = (29));

} else {
var statearr_35235_35292 = state_35225__$1;
(statearr_35235_35292[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (4))){
var inst_35143 = (state_35225[(2)]);
var state_35225__$1 = state_35225;
if(cljs.core.truth_(inst_35143)){
var statearr_35236_35293 = state_35225__$1;
(statearr_35236_35293[(1)] = (8));

} else {
var statearr_35237_35294 = state_35225__$1;
(statearr_35237_35294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (15))){
var inst_35170 = (state_35225[(2)]);
var state_35225__$1 = state_35225;
if(cljs.core.truth_(inst_35170)){
var statearr_35238_35295 = state_35225__$1;
(statearr_35238_35295[(1)] = (19));

} else {
var statearr_35239_35296 = state_35225__$1;
(statearr_35239_35296[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (21))){
var inst_35175 = (state_35225[(12)]);
var inst_35175__$1 = (state_35225[(2)]);
var inst_35176 = cljs.core.get.call(null,inst_35175__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35177 = cljs.core.get.call(null,inst_35175__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35178 = cljs.core.get.call(null,inst_35175__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35225__$1 = (function (){var statearr_35240 = state_35225;
(statearr_35240[(13)] = inst_35177);

(statearr_35240[(12)] = inst_35175__$1);

(statearr_35240[(11)] = inst_35176);

return statearr_35240;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35225__$1,(22),inst_35178);
} else {
if((state_val_35226 === (31))){
var inst_35207 = (state_35225[(2)]);
var state_35225__$1 = state_35225;
if(cljs.core.truth_(inst_35207)){
var statearr_35241_35297 = state_35225__$1;
(statearr_35241_35297[(1)] = (32));

} else {
var statearr_35242_35298 = state_35225__$1;
(statearr_35242_35298[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (32))){
var inst_35184 = (state_35225[(14)]);
var state_35225__$1 = state_35225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35225__$1,(35),out,inst_35184);
} else {
if((state_val_35226 === (33))){
var inst_35175 = (state_35225[(12)]);
var inst_35152 = inst_35175;
var state_35225__$1 = (function (){var statearr_35243 = state_35225;
(statearr_35243[(7)] = inst_35152);

return statearr_35243;
})();
var statearr_35244_35299 = state_35225__$1;
(statearr_35244_35299[(2)] = null);

(statearr_35244_35299[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (13))){
var inst_35152 = (state_35225[(7)]);
var inst_35159 = inst_35152.cljs$lang$protocol_mask$partition0$;
var inst_35160 = (inst_35159 & (64));
var inst_35161 = inst_35152.cljs$core$ISeq$;
var inst_35162 = (cljs.core.PROTOCOL_SENTINEL === inst_35161);
var inst_35163 = ((inst_35160) || (inst_35162));
var state_35225__$1 = state_35225;
if(cljs.core.truth_(inst_35163)){
var statearr_35245_35300 = state_35225__$1;
(statearr_35245_35300[(1)] = (16));

} else {
var statearr_35246_35301 = state_35225__$1;
(statearr_35246_35301[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (22))){
var inst_35185 = (state_35225[(10)]);
var inst_35184 = (state_35225[(14)]);
var inst_35183 = (state_35225[(2)]);
var inst_35184__$1 = cljs.core.nth.call(null,inst_35183,(0),null);
var inst_35185__$1 = cljs.core.nth.call(null,inst_35183,(1),null);
var inst_35186 = (inst_35184__$1 == null);
var inst_35187 = cljs.core._EQ_.call(null,inst_35185__$1,change);
var inst_35188 = ((inst_35186) || (inst_35187));
var state_35225__$1 = (function (){var statearr_35247 = state_35225;
(statearr_35247[(10)] = inst_35185__$1);

(statearr_35247[(14)] = inst_35184__$1);

return statearr_35247;
})();
if(cljs.core.truth_(inst_35188)){
var statearr_35248_35302 = state_35225__$1;
(statearr_35248_35302[(1)] = (23));

} else {
var statearr_35249_35303 = state_35225__$1;
(statearr_35249_35303[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (36))){
var inst_35175 = (state_35225[(12)]);
var inst_35152 = inst_35175;
var state_35225__$1 = (function (){var statearr_35250 = state_35225;
(statearr_35250[(7)] = inst_35152);

return statearr_35250;
})();
var statearr_35251_35304 = state_35225__$1;
(statearr_35251_35304[(2)] = null);

(statearr_35251_35304[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (29))){
var inst_35199 = (state_35225[(9)]);
var state_35225__$1 = state_35225;
var statearr_35252_35305 = state_35225__$1;
(statearr_35252_35305[(2)] = inst_35199);

(statearr_35252_35305[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (6))){
var state_35225__$1 = state_35225;
var statearr_35253_35306 = state_35225__$1;
(statearr_35253_35306[(2)] = false);

(statearr_35253_35306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (28))){
var inst_35195 = (state_35225[(2)]);
var inst_35196 = calc_state.call(null);
var inst_35152 = inst_35196;
var state_35225__$1 = (function (){var statearr_35254 = state_35225;
(statearr_35254[(15)] = inst_35195);

(statearr_35254[(7)] = inst_35152);

return statearr_35254;
})();
var statearr_35255_35307 = state_35225__$1;
(statearr_35255_35307[(2)] = null);

(statearr_35255_35307[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (25))){
var inst_35221 = (state_35225[(2)]);
var state_35225__$1 = state_35225;
var statearr_35256_35308 = state_35225__$1;
(statearr_35256_35308[(2)] = inst_35221);

(statearr_35256_35308[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (34))){
var inst_35219 = (state_35225[(2)]);
var state_35225__$1 = state_35225;
var statearr_35257_35309 = state_35225__$1;
(statearr_35257_35309[(2)] = inst_35219);

(statearr_35257_35309[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (17))){
var state_35225__$1 = state_35225;
var statearr_35258_35310 = state_35225__$1;
(statearr_35258_35310[(2)] = false);

(statearr_35258_35310[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (3))){
var state_35225__$1 = state_35225;
var statearr_35259_35311 = state_35225__$1;
(statearr_35259_35311[(2)] = false);

(statearr_35259_35311[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (12))){
var inst_35223 = (state_35225[(2)]);
var state_35225__$1 = state_35225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35225__$1,inst_35223);
} else {
if((state_val_35226 === (2))){
var inst_35127 = (state_35225[(8)]);
var inst_35132 = inst_35127.cljs$lang$protocol_mask$partition0$;
var inst_35133 = (inst_35132 & (64));
var inst_35134 = inst_35127.cljs$core$ISeq$;
var inst_35135 = (cljs.core.PROTOCOL_SENTINEL === inst_35134);
var inst_35136 = ((inst_35133) || (inst_35135));
var state_35225__$1 = state_35225;
if(cljs.core.truth_(inst_35136)){
var statearr_35260_35312 = state_35225__$1;
(statearr_35260_35312[(1)] = (5));

} else {
var statearr_35261_35313 = state_35225__$1;
(statearr_35261_35313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (23))){
var inst_35184 = (state_35225[(14)]);
var inst_35190 = (inst_35184 == null);
var state_35225__$1 = state_35225;
if(cljs.core.truth_(inst_35190)){
var statearr_35262_35314 = state_35225__$1;
(statearr_35262_35314[(1)] = (26));

} else {
var statearr_35263_35315 = state_35225__$1;
(statearr_35263_35315[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (35))){
var inst_35210 = (state_35225[(2)]);
var state_35225__$1 = state_35225;
if(cljs.core.truth_(inst_35210)){
var statearr_35264_35316 = state_35225__$1;
(statearr_35264_35316[(1)] = (36));

} else {
var statearr_35265_35317 = state_35225__$1;
(statearr_35265_35317[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (19))){
var inst_35152 = (state_35225[(7)]);
var inst_35172 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35152);
var state_35225__$1 = state_35225;
var statearr_35266_35318 = state_35225__$1;
(statearr_35266_35318[(2)] = inst_35172);

(statearr_35266_35318[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (11))){
var inst_35152 = (state_35225[(7)]);
var inst_35156 = (inst_35152 == null);
var inst_35157 = cljs.core.not.call(null,inst_35156);
var state_35225__$1 = state_35225;
if(inst_35157){
var statearr_35267_35319 = state_35225__$1;
(statearr_35267_35319[(1)] = (13));

} else {
var statearr_35268_35320 = state_35225__$1;
(statearr_35268_35320[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (9))){
var inst_35127 = (state_35225[(8)]);
var state_35225__$1 = state_35225;
var statearr_35269_35321 = state_35225__$1;
(statearr_35269_35321[(2)] = inst_35127);

(statearr_35269_35321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (5))){
var state_35225__$1 = state_35225;
var statearr_35270_35322 = state_35225__$1;
(statearr_35270_35322[(2)] = true);

(statearr_35270_35322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (14))){
var state_35225__$1 = state_35225;
var statearr_35271_35323 = state_35225__$1;
(statearr_35271_35323[(2)] = false);

(statearr_35271_35323[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (26))){
var inst_35185 = (state_35225[(10)]);
var inst_35192 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35185);
var state_35225__$1 = state_35225;
var statearr_35272_35324 = state_35225__$1;
(statearr_35272_35324[(2)] = inst_35192);

(statearr_35272_35324[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (16))){
var state_35225__$1 = state_35225;
var statearr_35273_35325 = state_35225__$1;
(statearr_35273_35325[(2)] = true);

(statearr_35273_35325[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (38))){
var inst_35215 = (state_35225[(2)]);
var state_35225__$1 = state_35225;
var statearr_35274_35326 = state_35225__$1;
(statearr_35274_35326[(2)] = inst_35215);

(statearr_35274_35326[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (30))){
var inst_35177 = (state_35225[(13)]);
var inst_35185 = (state_35225[(10)]);
var inst_35176 = (state_35225[(11)]);
var inst_35202 = cljs.core.empty_QMARK_.call(null,inst_35176);
var inst_35203 = inst_35177.call(null,inst_35185);
var inst_35204 = cljs.core.not.call(null,inst_35203);
var inst_35205 = ((inst_35202) && (inst_35204));
var state_35225__$1 = state_35225;
var statearr_35275_35327 = state_35225__$1;
(statearr_35275_35327[(2)] = inst_35205);

(statearr_35275_35327[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (10))){
var inst_35127 = (state_35225[(8)]);
var inst_35148 = (state_35225[(2)]);
var inst_35149 = cljs.core.get.call(null,inst_35148,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35150 = cljs.core.get.call(null,inst_35148,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35151 = cljs.core.get.call(null,inst_35148,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35152 = inst_35127;
var state_35225__$1 = (function (){var statearr_35276 = state_35225;
(statearr_35276[(16)] = inst_35149);

(statearr_35276[(17)] = inst_35151);

(statearr_35276[(7)] = inst_35152);

(statearr_35276[(18)] = inst_35150);

return statearr_35276;
})();
var statearr_35277_35328 = state_35225__$1;
(statearr_35277_35328[(2)] = null);

(statearr_35277_35328[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (18))){
var inst_35167 = (state_35225[(2)]);
var state_35225__$1 = state_35225;
var statearr_35278_35329 = state_35225__$1;
(statearr_35278_35329[(2)] = inst_35167);

(statearr_35278_35329[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (37))){
var state_35225__$1 = state_35225;
var statearr_35279_35330 = state_35225__$1;
(statearr_35279_35330[(2)] = null);

(statearr_35279_35330[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35226 === (8))){
var inst_35127 = (state_35225[(8)]);
var inst_35145 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35127);
var state_35225__$1 = state_35225;
var statearr_35280_35331 = state_35225__$1;
(statearr_35280_35331[(2)] = inst_35145);

(statearr_35280_35331[(1)] = (10));


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
});})(c__34226__auto___35285,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__34136__auto__,c__34226__auto___35285,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__34137__auto__ = null;
var cljs$core$async$mix_$_state_machine__34137__auto____0 = (function (){
var statearr_35281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35281[(0)] = cljs$core$async$mix_$_state_machine__34137__auto__);

(statearr_35281[(1)] = (1));

return statearr_35281;
});
var cljs$core$async$mix_$_state_machine__34137__auto____1 = (function (state_35225){
while(true){
var ret_value__34138__auto__ = (function (){try{while(true){
var result__34139__auto__ = switch__34136__auto__.call(null,state_35225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34139__auto__;
}
break;
}
}catch (e35282){if((e35282 instanceof Object)){
var ex__34140__auto__ = e35282;
var statearr_35283_35332 = state_35225;
(statearr_35283_35332[(5)] = ex__34140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35333 = state_35225;
state_35225 = G__35333;
continue;
} else {
return ret_value__34138__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34137__auto__ = function(state_35225){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34137__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34137__auto____1.call(this,state_35225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34137__auto____0;
cljs$core$async$mix_$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34137__auto____1;
return cljs$core$async$mix_$_state_machine__34137__auto__;
})()
;})(switch__34136__auto__,c__34226__auto___35285,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34228__auto__ = (function (){var statearr_35284 = f__34227__auto__.call(null);
(statearr_35284[(6)] = c__34226__auto___35285);

return statearr_35284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34228__auto__);
});})(c__34226__auto___35285,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__35335 = arguments.length;
switch (G__35335) {
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
var G__35339 = arguments.length;
switch (G__35339) {
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
return (function (p1__35337_SHARP_){
if(cljs.core.truth_(p1__35337_SHARP_.call(null,topic))){
return p1__35337_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35337_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3936__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35340 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35340 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35341){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35341 = meta35341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35342,meta35341__$1){
var self__ = this;
var _35342__$1 = this;
return (new cljs.core.async.t_cljs$core$async35340(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35341__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35340.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35342){
var self__ = this;
var _35342__$1 = this;
return self__.meta35341;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35340.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35340.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35340.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35340.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35340.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async35340.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35340.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35340.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35341","meta35341",-47217017,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35340.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35340";

cljs.core.async.t_cljs$core$async35340.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async35340");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35340.
 */
cljs.core.async.__GT_t_cljs$core$async35340 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35340(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35341){
return (new cljs.core.async.t_cljs$core$async35340(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35341));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35340(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34226__auto___35460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34226__auto___35460,mults,ensure_mult,p){
return (function (){
var f__34227__auto__ = (function (){var switch__34136__auto__ = ((function (c__34226__auto___35460,mults,ensure_mult,p){
return (function (state_35414){
var state_val_35415 = (state_35414[(1)]);
if((state_val_35415 === (7))){
var inst_35410 = (state_35414[(2)]);
var state_35414__$1 = state_35414;
var statearr_35416_35461 = state_35414__$1;
(statearr_35416_35461[(2)] = inst_35410);

(statearr_35416_35461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (20))){
var state_35414__$1 = state_35414;
var statearr_35417_35462 = state_35414__$1;
(statearr_35417_35462[(2)] = null);

(statearr_35417_35462[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (1))){
var state_35414__$1 = state_35414;
var statearr_35418_35463 = state_35414__$1;
(statearr_35418_35463[(2)] = null);

(statearr_35418_35463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (24))){
var inst_35393 = (state_35414[(7)]);
var inst_35402 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35393);
var state_35414__$1 = state_35414;
var statearr_35419_35464 = state_35414__$1;
(statearr_35419_35464[(2)] = inst_35402);

(statearr_35419_35464[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (4))){
var inst_35345 = (state_35414[(8)]);
var inst_35345__$1 = (state_35414[(2)]);
var inst_35346 = (inst_35345__$1 == null);
var state_35414__$1 = (function (){var statearr_35420 = state_35414;
(statearr_35420[(8)] = inst_35345__$1);

return statearr_35420;
})();
if(cljs.core.truth_(inst_35346)){
var statearr_35421_35465 = state_35414__$1;
(statearr_35421_35465[(1)] = (5));

} else {
var statearr_35422_35466 = state_35414__$1;
(statearr_35422_35466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (15))){
var inst_35387 = (state_35414[(2)]);
var state_35414__$1 = state_35414;
var statearr_35423_35467 = state_35414__$1;
(statearr_35423_35467[(2)] = inst_35387);

(statearr_35423_35467[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (21))){
var inst_35407 = (state_35414[(2)]);
var state_35414__$1 = (function (){var statearr_35424 = state_35414;
(statearr_35424[(9)] = inst_35407);

return statearr_35424;
})();
var statearr_35425_35468 = state_35414__$1;
(statearr_35425_35468[(2)] = null);

(statearr_35425_35468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (13))){
var inst_35369 = (state_35414[(10)]);
var inst_35371 = cljs.core.chunked_seq_QMARK_.call(null,inst_35369);
var state_35414__$1 = state_35414;
if(inst_35371){
var statearr_35426_35469 = state_35414__$1;
(statearr_35426_35469[(1)] = (16));

} else {
var statearr_35427_35470 = state_35414__$1;
(statearr_35427_35470[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (22))){
var inst_35399 = (state_35414[(2)]);
var state_35414__$1 = state_35414;
if(cljs.core.truth_(inst_35399)){
var statearr_35428_35471 = state_35414__$1;
(statearr_35428_35471[(1)] = (23));

} else {
var statearr_35429_35472 = state_35414__$1;
(statearr_35429_35472[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (6))){
var inst_35395 = (state_35414[(11)]);
var inst_35345 = (state_35414[(8)]);
var inst_35393 = (state_35414[(7)]);
var inst_35393__$1 = topic_fn.call(null,inst_35345);
var inst_35394 = cljs.core.deref.call(null,mults);
var inst_35395__$1 = cljs.core.get.call(null,inst_35394,inst_35393__$1);
var state_35414__$1 = (function (){var statearr_35430 = state_35414;
(statearr_35430[(11)] = inst_35395__$1);

(statearr_35430[(7)] = inst_35393__$1);

return statearr_35430;
})();
if(cljs.core.truth_(inst_35395__$1)){
var statearr_35431_35473 = state_35414__$1;
(statearr_35431_35473[(1)] = (19));

} else {
var statearr_35432_35474 = state_35414__$1;
(statearr_35432_35474[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (25))){
var inst_35404 = (state_35414[(2)]);
var state_35414__$1 = state_35414;
var statearr_35433_35475 = state_35414__$1;
(statearr_35433_35475[(2)] = inst_35404);

(statearr_35433_35475[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (17))){
var inst_35369 = (state_35414[(10)]);
var inst_35378 = cljs.core.first.call(null,inst_35369);
var inst_35379 = cljs.core.async.muxch_STAR_.call(null,inst_35378);
var inst_35380 = cljs.core.async.close_BANG_.call(null,inst_35379);
var inst_35381 = cljs.core.next.call(null,inst_35369);
var inst_35355 = inst_35381;
var inst_35356 = null;
var inst_35357 = (0);
var inst_35358 = (0);
var state_35414__$1 = (function (){var statearr_35434 = state_35414;
(statearr_35434[(12)] = inst_35355);

(statearr_35434[(13)] = inst_35356);

(statearr_35434[(14)] = inst_35357);

(statearr_35434[(15)] = inst_35380);

(statearr_35434[(16)] = inst_35358);

return statearr_35434;
})();
var statearr_35435_35476 = state_35414__$1;
(statearr_35435_35476[(2)] = null);

(statearr_35435_35476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (3))){
var inst_35412 = (state_35414[(2)]);
var state_35414__$1 = state_35414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35414__$1,inst_35412);
} else {
if((state_val_35415 === (12))){
var inst_35389 = (state_35414[(2)]);
var state_35414__$1 = state_35414;
var statearr_35436_35477 = state_35414__$1;
(statearr_35436_35477[(2)] = inst_35389);

(statearr_35436_35477[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (2))){
var state_35414__$1 = state_35414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35414__$1,(4),ch);
} else {
if((state_val_35415 === (23))){
var state_35414__$1 = state_35414;
var statearr_35437_35478 = state_35414__$1;
(statearr_35437_35478[(2)] = null);

(statearr_35437_35478[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (19))){
var inst_35395 = (state_35414[(11)]);
var inst_35345 = (state_35414[(8)]);
var inst_35397 = cljs.core.async.muxch_STAR_.call(null,inst_35395);
var state_35414__$1 = state_35414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35414__$1,(22),inst_35397,inst_35345);
} else {
if((state_val_35415 === (11))){
var inst_35369 = (state_35414[(10)]);
var inst_35355 = (state_35414[(12)]);
var inst_35369__$1 = cljs.core.seq.call(null,inst_35355);
var state_35414__$1 = (function (){var statearr_35438 = state_35414;
(statearr_35438[(10)] = inst_35369__$1);

return statearr_35438;
})();
if(inst_35369__$1){
var statearr_35439_35479 = state_35414__$1;
(statearr_35439_35479[(1)] = (13));

} else {
var statearr_35440_35480 = state_35414__$1;
(statearr_35440_35480[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (9))){
var inst_35391 = (state_35414[(2)]);
var state_35414__$1 = state_35414;
var statearr_35441_35481 = state_35414__$1;
(statearr_35441_35481[(2)] = inst_35391);

(statearr_35441_35481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (5))){
var inst_35352 = cljs.core.deref.call(null,mults);
var inst_35353 = cljs.core.vals.call(null,inst_35352);
var inst_35354 = cljs.core.seq.call(null,inst_35353);
var inst_35355 = inst_35354;
var inst_35356 = null;
var inst_35357 = (0);
var inst_35358 = (0);
var state_35414__$1 = (function (){var statearr_35442 = state_35414;
(statearr_35442[(12)] = inst_35355);

(statearr_35442[(13)] = inst_35356);

(statearr_35442[(14)] = inst_35357);

(statearr_35442[(16)] = inst_35358);

return statearr_35442;
})();
var statearr_35443_35482 = state_35414__$1;
(statearr_35443_35482[(2)] = null);

(statearr_35443_35482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (14))){
var state_35414__$1 = state_35414;
var statearr_35447_35483 = state_35414__$1;
(statearr_35447_35483[(2)] = null);

(statearr_35447_35483[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (16))){
var inst_35369 = (state_35414[(10)]);
var inst_35373 = cljs.core.chunk_first.call(null,inst_35369);
var inst_35374 = cljs.core.chunk_rest.call(null,inst_35369);
var inst_35375 = cljs.core.count.call(null,inst_35373);
var inst_35355 = inst_35374;
var inst_35356 = inst_35373;
var inst_35357 = inst_35375;
var inst_35358 = (0);
var state_35414__$1 = (function (){var statearr_35448 = state_35414;
(statearr_35448[(12)] = inst_35355);

(statearr_35448[(13)] = inst_35356);

(statearr_35448[(14)] = inst_35357);

(statearr_35448[(16)] = inst_35358);

return statearr_35448;
})();
var statearr_35449_35484 = state_35414__$1;
(statearr_35449_35484[(2)] = null);

(statearr_35449_35484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (10))){
var inst_35355 = (state_35414[(12)]);
var inst_35356 = (state_35414[(13)]);
var inst_35357 = (state_35414[(14)]);
var inst_35358 = (state_35414[(16)]);
var inst_35363 = cljs.core._nth.call(null,inst_35356,inst_35358);
var inst_35364 = cljs.core.async.muxch_STAR_.call(null,inst_35363);
var inst_35365 = cljs.core.async.close_BANG_.call(null,inst_35364);
var inst_35366 = (inst_35358 + (1));
var tmp35444 = inst_35355;
var tmp35445 = inst_35356;
var tmp35446 = inst_35357;
var inst_35355__$1 = tmp35444;
var inst_35356__$1 = tmp35445;
var inst_35357__$1 = tmp35446;
var inst_35358__$1 = inst_35366;
var state_35414__$1 = (function (){var statearr_35450 = state_35414;
(statearr_35450[(17)] = inst_35365);

(statearr_35450[(12)] = inst_35355__$1);

(statearr_35450[(13)] = inst_35356__$1);

(statearr_35450[(14)] = inst_35357__$1);

(statearr_35450[(16)] = inst_35358__$1);

return statearr_35450;
})();
var statearr_35451_35485 = state_35414__$1;
(statearr_35451_35485[(2)] = null);

(statearr_35451_35485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (18))){
var inst_35384 = (state_35414[(2)]);
var state_35414__$1 = state_35414;
var statearr_35452_35486 = state_35414__$1;
(statearr_35452_35486[(2)] = inst_35384);

(statearr_35452_35486[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (8))){
var inst_35357 = (state_35414[(14)]);
var inst_35358 = (state_35414[(16)]);
var inst_35360 = (inst_35358 < inst_35357);
var inst_35361 = inst_35360;
var state_35414__$1 = state_35414;
if(cljs.core.truth_(inst_35361)){
var statearr_35453_35487 = state_35414__$1;
(statearr_35453_35487[(1)] = (10));

} else {
var statearr_35454_35488 = state_35414__$1;
(statearr_35454_35488[(1)] = (11));

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
});})(c__34226__auto___35460,mults,ensure_mult,p))
;
return ((function (switch__34136__auto__,c__34226__auto___35460,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__34137__auto__ = null;
var cljs$core$async$state_machine__34137__auto____0 = (function (){
var statearr_35455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35455[(0)] = cljs$core$async$state_machine__34137__auto__);

(statearr_35455[(1)] = (1));

return statearr_35455;
});
var cljs$core$async$state_machine__34137__auto____1 = (function (state_35414){
while(true){
var ret_value__34138__auto__ = (function (){try{while(true){
var result__34139__auto__ = switch__34136__auto__.call(null,state_35414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34139__auto__;
}
break;
}
}catch (e35456){if((e35456 instanceof Object)){
var ex__34140__auto__ = e35456;
var statearr_35457_35489 = state_35414;
(statearr_35457_35489[(5)] = ex__34140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35490 = state_35414;
state_35414 = G__35490;
continue;
} else {
return ret_value__34138__auto__;
}
break;
}
});
cljs$core$async$state_machine__34137__auto__ = function(state_35414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34137__auto____1.call(this,state_35414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34137__auto____0;
cljs$core$async$state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34137__auto____1;
return cljs$core$async$state_machine__34137__auto__;
})()
;})(switch__34136__auto__,c__34226__auto___35460,mults,ensure_mult,p))
})();
var state__34228__auto__ = (function (){var statearr_35458 = f__34227__auto__.call(null);
(statearr_35458[(6)] = c__34226__auto___35460);

return statearr_35458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34228__auto__);
});})(c__34226__auto___35460,mults,ensure_mult,p))
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
var G__35492 = arguments.length;
switch (G__35492) {
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
var G__35495 = arguments.length;
switch (G__35495) {
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
var G__35498 = arguments.length;
switch (G__35498) {
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
var c__34226__auto___35565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34226__auto___35565,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34227__auto__ = (function (){var switch__34136__auto__ = ((function (c__34226__auto___35565,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35537){
var state_val_35538 = (state_35537[(1)]);
if((state_val_35538 === (7))){
var state_35537__$1 = state_35537;
var statearr_35539_35566 = state_35537__$1;
(statearr_35539_35566[(2)] = null);

(statearr_35539_35566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (1))){
var state_35537__$1 = state_35537;
var statearr_35540_35567 = state_35537__$1;
(statearr_35540_35567[(2)] = null);

(statearr_35540_35567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (4))){
var inst_35501 = (state_35537[(7)]);
var inst_35503 = (inst_35501 < cnt);
var state_35537__$1 = state_35537;
if(cljs.core.truth_(inst_35503)){
var statearr_35541_35568 = state_35537__$1;
(statearr_35541_35568[(1)] = (6));

} else {
var statearr_35542_35569 = state_35537__$1;
(statearr_35542_35569[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (15))){
var inst_35533 = (state_35537[(2)]);
var state_35537__$1 = state_35537;
var statearr_35543_35570 = state_35537__$1;
(statearr_35543_35570[(2)] = inst_35533);

(statearr_35543_35570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (13))){
var inst_35526 = cljs.core.async.close_BANG_.call(null,out);
var state_35537__$1 = state_35537;
var statearr_35544_35571 = state_35537__$1;
(statearr_35544_35571[(2)] = inst_35526);

(statearr_35544_35571[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (6))){
var state_35537__$1 = state_35537;
var statearr_35545_35572 = state_35537__$1;
(statearr_35545_35572[(2)] = null);

(statearr_35545_35572[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (3))){
var inst_35535 = (state_35537[(2)]);
var state_35537__$1 = state_35537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35537__$1,inst_35535);
} else {
if((state_val_35538 === (12))){
var inst_35523 = (state_35537[(8)]);
var inst_35523__$1 = (state_35537[(2)]);
var inst_35524 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35523__$1);
var state_35537__$1 = (function (){var statearr_35546 = state_35537;
(statearr_35546[(8)] = inst_35523__$1);

return statearr_35546;
})();
if(cljs.core.truth_(inst_35524)){
var statearr_35547_35573 = state_35537__$1;
(statearr_35547_35573[(1)] = (13));

} else {
var statearr_35548_35574 = state_35537__$1;
(statearr_35548_35574[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (2))){
var inst_35500 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35501 = (0);
var state_35537__$1 = (function (){var statearr_35549 = state_35537;
(statearr_35549[(9)] = inst_35500);

(statearr_35549[(7)] = inst_35501);

return statearr_35549;
})();
var statearr_35550_35575 = state_35537__$1;
(statearr_35550_35575[(2)] = null);

(statearr_35550_35575[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (11))){
var inst_35501 = (state_35537[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35537,(10),Object,null,(9));
var inst_35510 = chs__$1.call(null,inst_35501);
var inst_35511 = done.call(null,inst_35501);
var inst_35512 = cljs.core.async.take_BANG_.call(null,inst_35510,inst_35511);
var state_35537__$1 = state_35537;
var statearr_35551_35576 = state_35537__$1;
(statearr_35551_35576[(2)] = inst_35512);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35537__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (9))){
var inst_35501 = (state_35537[(7)]);
var inst_35514 = (state_35537[(2)]);
var inst_35515 = (inst_35501 + (1));
var inst_35501__$1 = inst_35515;
var state_35537__$1 = (function (){var statearr_35552 = state_35537;
(statearr_35552[(10)] = inst_35514);

(statearr_35552[(7)] = inst_35501__$1);

return statearr_35552;
})();
var statearr_35553_35577 = state_35537__$1;
(statearr_35553_35577[(2)] = null);

(statearr_35553_35577[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (5))){
var inst_35521 = (state_35537[(2)]);
var state_35537__$1 = (function (){var statearr_35554 = state_35537;
(statearr_35554[(11)] = inst_35521);

return statearr_35554;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35537__$1,(12),dchan);
} else {
if((state_val_35538 === (14))){
var inst_35523 = (state_35537[(8)]);
var inst_35528 = cljs.core.apply.call(null,f,inst_35523);
var state_35537__$1 = state_35537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35537__$1,(16),out,inst_35528);
} else {
if((state_val_35538 === (16))){
var inst_35530 = (state_35537[(2)]);
var state_35537__$1 = (function (){var statearr_35555 = state_35537;
(statearr_35555[(12)] = inst_35530);

return statearr_35555;
})();
var statearr_35556_35578 = state_35537__$1;
(statearr_35556_35578[(2)] = null);

(statearr_35556_35578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (10))){
var inst_35505 = (state_35537[(2)]);
var inst_35506 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35537__$1 = (function (){var statearr_35557 = state_35537;
(statearr_35557[(13)] = inst_35505);

return statearr_35557;
})();
var statearr_35558_35579 = state_35537__$1;
(statearr_35558_35579[(2)] = inst_35506);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35537__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (8))){
var inst_35519 = (state_35537[(2)]);
var state_35537__$1 = state_35537;
var statearr_35559_35580 = state_35537__$1;
(statearr_35559_35580[(2)] = inst_35519);

(statearr_35559_35580[(1)] = (5));


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
});})(c__34226__auto___35565,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__34136__auto__,c__34226__auto___35565,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__34137__auto__ = null;
var cljs$core$async$state_machine__34137__auto____0 = (function (){
var statearr_35560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35560[(0)] = cljs$core$async$state_machine__34137__auto__);

(statearr_35560[(1)] = (1));

return statearr_35560;
});
var cljs$core$async$state_machine__34137__auto____1 = (function (state_35537){
while(true){
var ret_value__34138__auto__ = (function (){try{while(true){
var result__34139__auto__ = switch__34136__auto__.call(null,state_35537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34139__auto__;
}
break;
}
}catch (e35561){if((e35561 instanceof Object)){
var ex__34140__auto__ = e35561;
var statearr_35562_35581 = state_35537;
(statearr_35562_35581[(5)] = ex__34140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35582 = state_35537;
state_35537 = G__35582;
continue;
} else {
return ret_value__34138__auto__;
}
break;
}
});
cljs$core$async$state_machine__34137__auto__ = function(state_35537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34137__auto____1.call(this,state_35537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34137__auto____0;
cljs$core$async$state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34137__auto____1;
return cljs$core$async$state_machine__34137__auto__;
})()
;})(switch__34136__auto__,c__34226__auto___35565,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34228__auto__ = (function (){var statearr_35563 = f__34227__auto__.call(null);
(statearr_35563[(6)] = c__34226__auto___35565);

return statearr_35563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34228__auto__);
});})(c__34226__auto___35565,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__35585 = arguments.length;
switch (G__35585) {
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
var c__34226__auto___35639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34226__auto___35639,out){
return (function (){
var f__34227__auto__ = (function (){var switch__34136__auto__ = ((function (c__34226__auto___35639,out){
return (function (state_35617){
var state_val_35618 = (state_35617[(1)]);
if((state_val_35618 === (7))){
var inst_35596 = (state_35617[(7)]);
var inst_35597 = (state_35617[(8)]);
var inst_35596__$1 = (state_35617[(2)]);
var inst_35597__$1 = cljs.core.nth.call(null,inst_35596__$1,(0),null);
var inst_35598 = cljs.core.nth.call(null,inst_35596__$1,(1),null);
var inst_35599 = (inst_35597__$1 == null);
var state_35617__$1 = (function (){var statearr_35619 = state_35617;
(statearr_35619[(9)] = inst_35598);

(statearr_35619[(7)] = inst_35596__$1);

(statearr_35619[(8)] = inst_35597__$1);

return statearr_35619;
})();
if(cljs.core.truth_(inst_35599)){
var statearr_35620_35640 = state_35617__$1;
(statearr_35620_35640[(1)] = (8));

} else {
var statearr_35621_35641 = state_35617__$1;
(statearr_35621_35641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (1))){
var inst_35586 = cljs.core.vec.call(null,chs);
var inst_35587 = inst_35586;
var state_35617__$1 = (function (){var statearr_35622 = state_35617;
(statearr_35622[(10)] = inst_35587);

return statearr_35622;
})();
var statearr_35623_35642 = state_35617__$1;
(statearr_35623_35642[(2)] = null);

(statearr_35623_35642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (4))){
var inst_35587 = (state_35617[(10)]);
var state_35617__$1 = state_35617;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35617__$1,(7),inst_35587);
} else {
if((state_val_35618 === (6))){
var inst_35613 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
var statearr_35624_35643 = state_35617__$1;
(statearr_35624_35643[(2)] = inst_35613);

(statearr_35624_35643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (3))){
var inst_35615 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35617__$1,inst_35615);
} else {
if((state_val_35618 === (2))){
var inst_35587 = (state_35617[(10)]);
var inst_35589 = cljs.core.count.call(null,inst_35587);
var inst_35590 = (inst_35589 > (0));
var state_35617__$1 = state_35617;
if(cljs.core.truth_(inst_35590)){
var statearr_35626_35644 = state_35617__$1;
(statearr_35626_35644[(1)] = (4));

} else {
var statearr_35627_35645 = state_35617__$1;
(statearr_35627_35645[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (11))){
var inst_35587 = (state_35617[(10)]);
var inst_35606 = (state_35617[(2)]);
var tmp35625 = inst_35587;
var inst_35587__$1 = tmp35625;
var state_35617__$1 = (function (){var statearr_35628 = state_35617;
(statearr_35628[(11)] = inst_35606);

(statearr_35628[(10)] = inst_35587__$1);

return statearr_35628;
})();
var statearr_35629_35646 = state_35617__$1;
(statearr_35629_35646[(2)] = null);

(statearr_35629_35646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (9))){
var inst_35597 = (state_35617[(8)]);
var state_35617__$1 = state_35617;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35617__$1,(11),out,inst_35597);
} else {
if((state_val_35618 === (5))){
var inst_35611 = cljs.core.async.close_BANG_.call(null,out);
var state_35617__$1 = state_35617;
var statearr_35630_35647 = state_35617__$1;
(statearr_35630_35647[(2)] = inst_35611);

(statearr_35630_35647[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (10))){
var inst_35609 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
var statearr_35631_35648 = state_35617__$1;
(statearr_35631_35648[(2)] = inst_35609);

(statearr_35631_35648[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (8))){
var inst_35598 = (state_35617[(9)]);
var inst_35596 = (state_35617[(7)]);
var inst_35597 = (state_35617[(8)]);
var inst_35587 = (state_35617[(10)]);
var inst_35601 = (function (){var cs = inst_35587;
var vec__35592 = inst_35596;
var v = inst_35597;
var c = inst_35598;
return ((function (cs,vec__35592,v,c,inst_35598,inst_35596,inst_35597,inst_35587,state_val_35618,c__34226__auto___35639,out){
return (function (p1__35583_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35583_SHARP_);
});
;})(cs,vec__35592,v,c,inst_35598,inst_35596,inst_35597,inst_35587,state_val_35618,c__34226__auto___35639,out))
})();
var inst_35602 = cljs.core.filterv.call(null,inst_35601,inst_35587);
var inst_35587__$1 = inst_35602;
var state_35617__$1 = (function (){var statearr_35632 = state_35617;
(statearr_35632[(10)] = inst_35587__$1);

return statearr_35632;
})();
var statearr_35633_35649 = state_35617__$1;
(statearr_35633_35649[(2)] = null);

(statearr_35633_35649[(1)] = (2));


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
});})(c__34226__auto___35639,out))
;
return ((function (switch__34136__auto__,c__34226__auto___35639,out){
return (function() {
var cljs$core$async$state_machine__34137__auto__ = null;
var cljs$core$async$state_machine__34137__auto____0 = (function (){
var statearr_35634 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35634[(0)] = cljs$core$async$state_machine__34137__auto__);

(statearr_35634[(1)] = (1));

return statearr_35634;
});
var cljs$core$async$state_machine__34137__auto____1 = (function (state_35617){
while(true){
var ret_value__34138__auto__ = (function (){try{while(true){
var result__34139__auto__ = switch__34136__auto__.call(null,state_35617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34139__auto__;
}
break;
}
}catch (e35635){if((e35635 instanceof Object)){
var ex__34140__auto__ = e35635;
var statearr_35636_35650 = state_35617;
(statearr_35636_35650[(5)] = ex__34140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35651 = state_35617;
state_35617 = G__35651;
continue;
} else {
return ret_value__34138__auto__;
}
break;
}
});
cljs$core$async$state_machine__34137__auto__ = function(state_35617){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34137__auto____1.call(this,state_35617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34137__auto____0;
cljs$core$async$state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34137__auto____1;
return cljs$core$async$state_machine__34137__auto__;
})()
;})(switch__34136__auto__,c__34226__auto___35639,out))
})();
var state__34228__auto__ = (function (){var statearr_35637 = f__34227__auto__.call(null);
(statearr_35637[(6)] = c__34226__auto___35639);

return statearr_35637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34228__auto__);
});})(c__34226__auto___35639,out))
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
var G__35653 = arguments.length;
switch (G__35653) {
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
var c__34226__auto___35698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34226__auto___35698,out){
return (function (){
var f__34227__auto__ = (function (){var switch__34136__auto__ = ((function (c__34226__auto___35698,out){
return (function (state_35677){
var state_val_35678 = (state_35677[(1)]);
if((state_val_35678 === (7))){
var inst_35659 = (state_35677[(7)]);
var inst_35659__$1 = (state_35677[(2)]);
var inst_35660 = (inst_35659__$1 == null);
var inst_35661 = cljs.core.not.call(null,inst_35660);
var state_35677__$1 = (function (){var statearr_35679 = state_35677;
(statearr_35679[(7)] = inst_35659__$1);

return statearr_35679;
})();
if(inst_35661){
var statearr_35680_35699 = state_35677__$1;
(statearr_35680_35699[(1)] = (8));

} else {
var statearr_35681_35700 = state_35677__$1;
(statearr_35681_35700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (1))){
var inst_35654 = (0);
var state_35677__$1 = (function (){var statearr_35682 = state_35677;
(statearr_35682[(8)] = inst_35654);

return statearr_35682;
})();
var statearr_35683_35701 = state_35677__$1;
(statearr_35683_35701[(2)] = null);

(statearr_35683_35701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (4))){
var state_35677__$1 = state_35677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35677__$1,(7),ch);
} else {
if((state_val_35678 === (6))){
var inst_35672 = (state_35677[(2)]);
var state_35677__$1 = state_35677;
var statearr_35684_35702 = state_35677__$1;
(statearr_35684_35702[(2)] = inst_35672);

(statearr_35684_35702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (3))){
var inst_35674 = (state_35677[(2)]);
var inst_35675 = cljs.core.async.close_BANG_.call(null,out);
var state_35677__$1 = (function (){var statearr_35685 = state_35677;
(statearr_35685[(9)] = inst_35674);

return statearr_35685;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35677__$1,inst_35675);
} else {
if((state_val_35678 === (2))){
var inst_35654 = (state_35677[(8)]);
var inst_35656 = (inst_35654 < n);
var state_35677__$1 = state_35677;
if(cljs.core.truth_(inst_35656)){
var statearr_35686_35703 = state_35677__$1;
(statearr_35686_35703[(1)] = (4));

} else {
var statearr_35687_35704 = state_35677__$1;
(statearr_35687_35704[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (11))){
var inst_35654 = (state_35677[(8)]);
var inst_35664 = (state_35677[(2)]);
var inst_35665 = (inst_35654 + (1));
var inst_35654__$1 = inst_35665;
var state_35677__$1 = (function (){var statearr_35688 = state_35677;
(statearr_35688[(8)] = inst_35654__$1);

(statearr_35688[(10)] = inst_35664);

return statearr_35688;
})();
var statearr_35689_35705 = state_35677__$1;
(statearr_35689_35705[(2)] = null);

(statearr_35689_35705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (9))){
var state_35677__$1 = state_35677;
var statearr_35690_35706 = state_35677__$1;
(statearr_35690_35706[(2)] = null);

(statearr_35690_35706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (5))){
var state_35677__$1 = state_35677;
var statearr_35691_35707 = state_35677__$1;
(statearr_35691_35707[(2)] = null);

(statearr_35691_35707[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (10))){
var inst_35669 = (state_35677[(2)]);
var state_35677__$1 = state_35677;
var statearr_35692_35708 = state_35677__$1;
(statearr_35692_35708[(2)] = inst_35669);

(statearr_35692_35708[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (8))){
var inst_35659 = (state_35677[(7)]);
var state_35677__$1 = state_35677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35677__$1,(11),out,inst_35659);
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
});})(c__34226__auto___35698,out))
;
return ((function (switch__34136__auto__,c__34226__auto___35698,out){
return (function() {
var cljs$core$async$state_machine__34137__auto__ = null;
var cljs$core$async$state_machine__34137__auto____0 = (function (){
var statearr_35693 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35693[(0)] = cljs$core$async$state_machine__34137__auto__);

(statearr_35693[(1)] = (1));

return statearr_35693;
});
var cljs$core$async$state_machine__34137__auto____1 = (function (state_35677){
while(true){
var ret_value__34138__auto__ = (function (){try{while(true){
var result__34139__auto__ = switch__34136__auto__.call(null,state_35677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34139__auto__;
}
break;
}
}catch (e35694){if((e35694 instanceof Object)){
var ex__34140__auto__ = e35694;
var statearr_35695_35709 = state_35677;
(statearr_35695_35709[(5)] = ex__34140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35710 = state_35677;
state_35677 = G__35710;
continue;
} else {
return ret_value__34138__auto__;
}
break;
}
});
cljs$core$async$state_machine__34137__auto__ = function(state_35677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34137__auto____1.call(this,state_35677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34137__auto____0;
cljs$core$async$state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34137__auto____1;
return cljs$core$async$state_machine__34137__auto__;
})()
;})(switch__34136__auto__,c__34226__auto___35698,out))
})();
var state__34228__auto__ = (function (){var statearr_35696 = f__34227__auto__.call(null);
(statearr_35696[(6)] = c__34226__auto___35698);

return statearr_35696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34228__auto__);
});})(c__34226__auto___35698,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35712 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35712 = (function (f,ch,meta35713){
this.f = f;
this.ch = ch;
this.meta35713 = meta35713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35714,meta35713__$1){
var self__ = this;
var _35714__$1 = this;
return (new cljs.core.async.t_cljs$core$async35712(self__.f,self__.ch,meta35713__$1));
});

cljs.core.async.t_cljs$core$async35712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35714){
var self__ = this;
var _35714__$1 = this;
return self__.meta35713;
});

cljs.core.async.t_cljs$core$async35712.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35712.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35712.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35712.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35712.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35715 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35715 = (function (f,ch,meta35713,_,fn1,meta35716){
this.f = f;
this.ch = ch;
this.meta35713 = meta35713;
this._ = _;
this.fn1 = fn1;
this.meta35716 = meta35716;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35717,meta35716__$1){
var self__ = this;
var _35717__$1 = this;
return (new cljs.core.async.t_cljs$core$async35715(self__.f,self__.ch,self__.meta35713,self__._,self__.fn1,meta35716__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35715.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35717){
var self__ = this;
var _35717__$1 = this;
return self__.meta35716;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35715.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35715.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35715.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35715.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35711_SHARP_){
return f1.call(null,(((p1__35711_SHARP_ == null))?null:self__.f.call(null,p1__35711_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35715.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35713","meta35713",-807514409,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35712","cljs.core.async/t_cljs$core$async35712",700839410,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35716","meta35716",1487789257,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35715.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35715.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35715";

cljs.core.async.t_cljs$core$async35715.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async35715");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35715.
 */
cljs.core.async.__GT_t_cljs$core$async35715 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35715(f__$1,ch__$1,meta35713__$1,___$2,fn1__$1,meta35716){
return (new cljs.core.async.t_cljs$core$async35715(f__$1,ch__$1,meta35713__$1,___$2,fn1__$1,meta35716));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35715(self__.f,self__.ch,self__.meta35713,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async35712.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35712.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35712.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35713","meta35713",-807514409,null)], null);
});

cljs.core.async.t_cljs$core$async35712.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35712.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35712";

cljs.core.async.t_cljs$core$async35712.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async35712");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35712.
 */
cljs.core.async.__GT_t_cljs$core$async35712 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35712(f__$1,ch__$1,meta35713){
return (new cljs.core.async.t_cljs$core$async35712(f__$1,ch__$1,meta35713));
});

}

return (new cljs.core.async.t_cljs$core$async35712(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35718 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35718 = (function (f,ch,meta35719){
this.f = f;
this.ch = ch;
this.meta35719 = meta35719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35720,meta35719__$1){
var self__ = this;
var _35720__$1 = this;
return (new cljs.core.async.t_cljs$core$async35718(self__.f,self__.ch,meta35719__$1));
});

cljs.core.async.t_cljs$core$async35718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35720){
var self__ = this;
var _35720__$1 = this;
return self__.meta35719;
});

cljs.core.async.t_cljs$core$async35718.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35718.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35718.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35718.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35718.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35718.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35718.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35719","meta35719",-1121531232,null)], null);
});

cljs.core.async.t_cljs$core$async35718.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35718";

cljs.core.async.t_cljs$core$async35718.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async35718");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35718.
 */
cljs.core.async.__GT_t_cljs$core$async35718 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35718(f__$1,ch__$1,meta35719){
return (new cljs.core.async.t_cljs$core$async35718(f__$1,ch__$1,meta35719));
});

}

return (new cljs.core.async.t_cljs$core$async35718(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35721 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35721 = (function (p,ch,meta35722){
this.p = p;
this.ch = ch;
this.meta35722 = meta35722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35723,meta35722__$1){
var self__ = this;
var _35723__$1 = this;
return (new cljs.core.async.t_cljs$core$async35721(self__.p,self__.ch,meta35722__$1));
});

cljs.core.async.t_cljs$core$async35721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35723){
var self__ = this;
var _35723__$1 = this;
return self__.meta35722;
});

cljs.core.async.t_cljs$core$async35721.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35721.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35721.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35721.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35721.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35721.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35721.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35721.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35722","meta35722",2076317159,null)], null);
});

cljs.core.async.t_cljs$core$async35721.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35721.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35721";

cljs.core.async.t_cljs$core$async35721.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async35721");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35721.
 */
cljs.core.async.__GT_t_cljs$core$async35721 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35721(p__$1,ch__$1,meta35722){
return (new cljs.core.async.t_cljs$core$async35721(p__$1,ch__$1,meta35722));
});

}

return (new cljs.core.async.t_cljs$core$async35721(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35725 = arguments.length;
switch (G__35725) {
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
var c__34226__auto___35765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34226__auto___35765,out){
return (function (){
var f__34227__auto__ = (function (){var switch__34136__auto__ = ((function (c__34226__auto___35765,out){
return (function (state_35746){
var state_val_35747 = (state_35746[(1)]);
if((state_val_35747 === (7))){
var inst_35742 = (state_35746[(2)]);
var state_35746__$1 = state_35746;
var statearr_35748_35766 = state_35746__$1;
(statearr_35748_35766[(2)] = inst_35742);

(statearr_35748_35766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35747 === (1))){
var state_35746__$1 = state_35746;
var statearr_35749_35767 = state_35746__$1;
(statearr_35749_35767[(2)] = null);

(statearr_35749_35767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35747 === (4))){
var inst_35728 = (state_35746[(7)]);
var inst_35728__$1 = (state_35746[(2)]);
var inst_35729 = (inst_35728__$1 == null);
var state_35746__$1 = (function (){var statearr_35750 = state_35746;
(statearr_35750[(7)] = inst_35728__$1);

return statearr_35750;
})();
if(cljs.core.truth_(inst_35729)){
var statearr_35751_35768 = state_35746__$1;
(statearr_35751_35768[(1)] = (5));

} else {
var statearr_35752_35769 = state_35746__$1;
(statearr_35752_35769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35747 === (6))){
var inst_35728 = (state_35746[(7)]);
var inst_35733 = p.call(null,inst_35728);
var state_35746__$1 = state_35746;
if(cljs.core.truth_(inst_35733)){
var statearr_35753_35770 = state_35746__$1;
(statearr_35753_35770[(1)] = (8));

} else {
var statearr_35754_35771 = state_35746__$1;
(statearr_35754_35771[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35747 === (3))){
var inst_35744 = (state_35746[(2)]);
var state_35746__$1 = state_35746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35746__$1,inst_35744);
} else {
if((state_val_35747 === (2))){
var state_35746__$1 = state_35746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35746__$1,(4),ch);
} else {
if((state_val_35747 === (11))){
var inst_35736 = (state_35746[(2)]);
var state_35746__$1 = state_35746;
var statearr_35755_35772 = state_35746__$1;
(statearr_35755_35772[(2)] = inst_35736);

(statearr_35755_35772[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35747 === (9))){
var state_35746__$1 = state_35746;
var statearr_35756_35773 = state_35746__$1;
(statearr_35756_35773[(2)] = null);

(statearr_35756_35773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35747 === (5))){
var inst_35731 = cljs.core.async.close_BANG_.call(null,out);
var state_35746__$1 = state_35746;
var statearr_35757_35774 = state_35746__$1;
(statearr_35757_35774[(2)] = inst_35731);

(statearr_35757_35774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35747 === (10))){
var inst_35739 = (state_35746[(2)]);
var state_35746__$1 = (function (){var statearr_35758 = state_35746;
(statearr_35758[(8)] = inst_35739);

return statearr_35758;
})();
var statearr_35759_35775 = state_35746__$1;
(statearr_35759_35775[(2)] = null);

(statearr_35759_35775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35747 === (8))){
var inst_35728 = (state_35746[(7)]);
var state_35746__$1 = state_35746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35746__$1,(11),out,inst_35728);
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
});})(c__34226__auto___35765,out))
;
return ((function (switch__34136__auto__,c__34226__auto___35765,out){
return (function() {
var cljs$core$async$state_machine__34137__auto__ = null;
var cljs$core$async$state_machine__34137__auto____0 = (function (){
var statearr_35760 = [null,null,null,null,null,null,null,null,null];
(statearr_35760[(0)] = cljs$core$async$state_machine__34137__auto__);

(statearr_35760[(1)] = (1));

return statearr_35760;
});
var cljs$core$async$state_machine__34137__auto____1 = (function (state_35746){
while(true){
var ret_value__34138__auto__ = (function (){try{while(true){
var result__34139__auto__ = switch__34136__auto__.call(null,state_35746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34139__auto__;
}
break;
}
}catch (e35761){if((e35761 instanceof Object)){
var ex__34140__auto__ = e35761;
var statearr_35762_35776 = state_35746;
(statearr_35762_35776[(5)] = ex__34140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35777 = state_35746;
state_35746 = G__35777;
continue;
} else {
return ret_value__34138__auto__;
}
break;
}
});
cljs$core$async$state_machine__34137__auto__ = function(state_35746){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34137__auto____1.call(this,state_35746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34137__auto____0;
cljs$core$async$state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34137__auto____1;
return cljs$core$async$state_machine__34137__auto__;
})()
;})(switch__34136__auto__,c__34226__auto___35765,out))
})();
var state__34228__auto__ = (function (){var statearr_35763 = f__34227__auto__.call(null);
(statearr_35763[(6)] = c__34226__auto___35765);

return statearr_35763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34228__auto__);
});})(c__34226__auto___35765,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35779 = arguments.length;
switch (G__35779) {
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
var c__34226__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34226__auto__){
return (function (){
var f__34227__auto__ = (function (){var switch__34136__auto__ = ((function (c__34226__auto__){
return (function (state_35842){
var state_val_35843 = (state_35842[(1)]);
if((state_val_35843 === (7))){
var inst_35838 = (state_35842[(2)]);
var state_35842__$1 = state_35842;
var statearr_35844_35882 = state_35842__$1;
(statearr_35844_35882[(2)] = inst_35838);

(statearr_35844_35882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (20))){
var inst_35808 = (state_35842[(7)]);
var inst_35819 = (state_35842[(2)]);
var inst_35820 = cljs.core.next.call(null,inst_35808);
var inst_35794 = inst_35820;
var inst_35795 = null;
var inst_35796 = (0);
var inst_35797 = (0);
var state_35842__$1 = (function (){var statearr_35845 = state_35842;
(statearr_35845[(8)] = inst_35797);

(statearr_35845[(9)] = inst_35794);

(statearr_35845[(10)] = inst_35819);

(statearr_35845[(11)] = inst_35796);

(statearr_35845[(12)] = inst_35795);

return statearr_35845;
})();
var statearr_35846_35883 = state_35842__$1;
(statearr_35846_35883[(2)] = null);

(statearr_35846_35883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (1))){
var state_35842__$1 = state_35842;
var statearr_35847_35884 = state_35842__$1;
(statearr_35847_35884[(2)] = null);

(statearr_35847_35884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (4))){
var inst_35783 = (state_35842[(13)]);
var inst_35783__$1 = (state_35842[(2)]);
var inst_35784 = (inst_35783__$1 == null);
var state_35842__$1 = (function (){var statearr_35848 = state_35842;
(statearr_35848[(13)] = inst_35783__$1);

return statearr_35848;
})();
if(cljs.core.truth_(inst_35784)){
var statearr_35849_35885 = state_35842__$1;
(statearr_35849_35885[(1)] = (5));

} else {
var statearr_35850_35886 = state_35842__$1;
(statearr_35850_35886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (15))){
var state_35842__$1 = state_35842;
var statearr_35854_35887 = state_35842__$1;
(statearr_35854_35887[(2)] = null);

(statearr_35854_35887[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (21))){
var state_35842__$1 = state_35842;
var statearr_35855_35888 = state_35842__$1;
(statearr_35855_35888[(2)] = null);

(statearr_35855_35888[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (13))){
var inst_35797 = (state_35842[(8)]);
var inst_35794 = (state_35842[(9)]);
var inst_35796 = (state_35842[(11)]);
var inst_35795 = (state_35842[(12)]);
var inst_35804 = (state_35842[(2)]);
var inst_35805 = (inst_35797 + (1));
var tmp35851 = inst_35794;
var tmp35852 = inst_35796;
var tmp35853 = inst_35795;
var inst_35794__$1 = tmp35851;
var inst_35795__$1 = tmp35853;
var inst_35796__$1 = tmp35852;
var inst_35797__$1 = inst_35805;
var state_35842__$1 = (function (){var statearr_35856 = state_35842;
(statearr_35856[(8)] = inst_35797__$1);

(statearr_35856[(9)] = inst_35794__$1);

(statearr_35856[(14)] = inst_35804);

(statearr_35856[(11)] = inst_35796__$1);

(statearr_35856[(12)] = inst_35795__$1);

return statearr_35856;
})();
var statearr_35857_35889 = state_35842__$1;
(statearr_35857_35889[(2)] = null);

(statearr_35857_35889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (22))){
var state_35842__$1 = state_35842;
var statearr_35858_35890 = state_35842__$1;
(statearr_35858_35890[(2)] = null);

(statearr_35858_35890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (6))){
var inst_35783 = (state_35842[(13)]);
var inst_35792 = f.call(null,inst_35783);
var inst_35793 = cljs.core.seq.call(null,inst_35792);
var inst_35794 = inst_35793;
var inst_35795 = null;
var inst_35796 = (0);
var inst_35797 = (0);
var state_35842__$1 = (function (){var statearr_35859 = state_35842;
(statearr_35859[(8)] = inst_35797);

(statearr_35859[(9)] = inst_35794);

(statearr_35859[(11)] = inst_35796);

(statearr_35859[(12)] = inst_35795);

return statearr_35859;
})();
var statearr_35860_35891 = state_35842__$1;
(statearr_35860_35891[(2)] = null);

(statearr_35860_35891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (17))){
var inst_35808 = (state_35842[(7)]);
var inst_35812 = cljs.core.chunk_first.call(null,inst_35808);
var inst_35813 = cljs.core.chunk_rest.call(null,inst_35808);
var inst_35814 = cljs.core.count.call(null,inst_35812);
var inst_35794 = inst_35813;
var inst_35795 = inst_35812;
var inst_35796 = inst_35814;
var inst_35797 = (0);
var state_35842__$1 = (function (){var statearr_35861 = state_35842;
(statearr_35861[(8)] = inst_35797);

(statearr_35861[(9)] = inst_35794);

(statearr_35861[(11)] = inst_35796);

(statearr_35861[(12)] = inst_35795);

return statearr_35861;
})();
var statearr_35862_35892 = state_35842__$1;
(statearr_35862_35892[(2)] = null);

(statearr_35862_35892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (3))){
var inst_35840 = (state_35842[(2)]);
var state_35842__$1 = state_35842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35842__$1,inst_35840);
} else {
if((state_val_35843 === (12))){
var inst_35828 = (state_35842[(2)]);
var state_35842__$1 = state_35842;
var statearr_35863_35893 = state_35842__$1;
(statearr_35863_35893[(2)] = inst_35828);

(statearr_35863_35893[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (2))){
var state_35842__$1 = state_35842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35842__$1,(4),in$);
} else {
if((state_val_35843 === (23))){
var inst_35836 = (state_35842[(2)]);
var state_35842__$1 = state_35842;
var statearr_35864_35894 = state_35842__$1;
(statearr_35864_35894[(2)] = inst_35836);

(statearr_35864_35894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (19))){
var inst_35823 = (state_35842[(2)]);
var state_35842__$1 = state_35842;
var statearr_35865_35895 = state_35842__$1;
(statearr_35865_35895[(2)] = inst_35823);

(statearr_35865_35895[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (11))){
var inst_35794 = (state_35842[(9)]);
var inst_35808 = (state_35842[(7)]);
var inst_35808__$1 = cljs.core.seq.call(null,inst_35794);
var state_35842__$1 = (function (){var statearr_35866 = state_35842;
(statearr_35866[(7)] = inst_35808__$1);

return statearr_35866;
})();
if(inst_35808__$1){
var statearr_35867_35896 = state_35842__$1;
(statearr_35867_35896[(1)] = (14));

} else {
var statearr_35868_35897 = state_35842__$1;
(statearr_35868_35897[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (9))){
var inst_35830 = (state_35842[(2)]);
var inst_35831 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35842__$1 = (function (){var statearr_35869 = state_35842;
(statearr_35869[(15)] = inst_35830);

return statearr_35869;
})();
if(cljs.core.truth_(inst_35831)){
var statearr_35870_35898 = state_35842__$1;
(statearr_35870_35898[(1)] = (21));

} else {
var statearr_35871_35899 = state_35842__$1;
(statearr_35871_35899[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (5))){
var inst_35786 = cljs.core.async.close_BANG_.call(null,out);
var state_35842__$1 = state_35842;
var statearr_35872_35900 = state_35842__$1;
(statearr_35872_35900[(2)] = inst_35786);

(statearr_35872_35900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (14))){
var inst_35808 = (state_35842[(7)]);
var inst_35810 = cljs.core.chunked_seq_QMARK_.call(null,inst_35808);
var state_35842__$1 = state_35842;
if(inst_35810){
var statearr_35873_35901 = state_35842__$1;
(statearr_35873_35901[(1)] = (17));

} else {
var statearr_35874_35902 = state_35842__$1;
(statearr_35874_35902[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (16))){
var inst_35826 = (state_35842[(2)]);
var state_35842__$1 = state_35842;
var statearr_35875_35903 = state_35842__$1;
(statearr_35875_35903[(2)] = inst_35826);

(statearr_35875_35903[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35843 === (10))){
var inst_35797 = (state_35842[(8)]);
var inst_35795 = (state_35842[(12)]);
var inst_35802 = cljs.core._nth.call(null,inst_35795,inst_35797);
var state_35842__$1 = state_35842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35842__$1,(13),out,inst_35802);
} else {
if((state_val_35843 === (18))){
var inst_35808 = (state_35842[(7)]);
var inst_35817 = cljs.core.first.call(null,inst_35808);
var state_35842__$1 = state_35842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35842__$1,(20),out,inst_35817);
} else {
if((state_val_35843 === (8))){
var inst_35797 = (state_35842[(8)]);
var inst_35796 = (state_35842[(11)]);
var inst_35799 = (inst_35797 < inst_35796);
var inst_35800 = inst_35799;
var state_35842__$1 = state_35842;
if(cljs.core.truth_(inst_35800)){
var statearr_35876_35904 = state_35842__$1;
(statearr_35876_35904[(1)] = (10));

} else {
var statearr_35877_35905 = state_35842__$1;
(statearr_35877_35905[(1)] = (11));

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
});})(c__34226__auto__))
;
return ((function (switch__34136__auto__,c__34226__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34137__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34137__auto____0 = (function (){
var statearr_35878 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35878[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34137__auto__);

(statearr_35878[(1)] = (1));

return statearr_35878;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34137__auto____1 = (function (state_35842){
while(true){
var ret_value__34138__auto__ = (function (){try{while(true){
var result__34139__auto__ = switch__34136__auto__.call(null,state_35842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34139__auto__;
}
break;
}
}catch (e35879){if((e35879 instanceof Object)){
var ex__34140__auto__ = e35879;
var statearr_35880_35906 = state_35842;
(statearr_35880_35906[(5)] = ex__34140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35907 = state_35842;
state_35842 = G__35907;
continue;
} else {
return ret_value__34138__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34137__auto__ = function(state_35842){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34137__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34137__auto____1.call(this,state_35842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34137__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34137__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34137__auto__;
})()
;})(switch__34136__auto__,c__34226__auto__))
})();
var state__34228__auto__ = (function (){var statearr_35881 = f__34227__auto__.call(null);
(statearr_35881[(6)] = c__34226__auto__);

return statearr_35881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34228__auto__);
});})(c__34226__auto__))
);

return c__34226__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35909 = arguments.length;
switch (G__35909) {
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
var G__35912 = arguments.length;
switch (G__35912) {
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
var G__35915 = arguments.length;
switch (G__35915) {
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
var c__34226__auto___35962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34226__auto___35962,out){
return (function (){
var f__34227__auto__ = (function (){var switch__34136__auto__ = ((function (c__34226__auto___35962,out){
return (function (state_35939){
var state_val_35940 = (state_35939[(1)]);
if((state_val_35940 === (7))){
var inst_35934 = (state_35939[(2)]);
var state_35939__$1 = state_35939;
var statearr_35941_35963 = state_35939__$1;
(statearr_35941_35963[(2)] = inst_35934);

(statearr_35941_35963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (1))){
var inst_35916 = null;
var state_35939__$1 = (function (){var statearr_35942 = state_35939;
(statearr_35942[(7)] = inst_35916);

return statearr_35942;
})();
var statearr_35943_35964 = state_35939__$1;
(statearr_35943_35964[(2)] = null);

(statearr_35943_35964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (4))){
var inst_35919 = (state_35939[(8)]);
var inst_35919__$1 = (state_35939[(2)]);
var inst_35920 = (inst_35919__$1 == null);
var inst_35921 = cljs.core.not.call(null,inst_35920);
var state_35939__$1 = (function (){var statearr_35944 = state_35939;
(statearr_35944[(8)] = inst_35919__$1);

return statearr_35944;
})();
if(inst_35921){
var statearr_35945_35965 = state_35939__$1;
(statearr_35945_35965[(1)] = (5));

} else {
var statearr_35946_35966 = state_35939__$1;
(statearr_35946_35966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (6))){
var state_35939__$1 = state_35939;
var statearr_35947_35967 = state_35939__$1;
(statearr_35947_35967[(2)] = null);

(statearr_35947_35967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (3))){
var inst_35936 = (state_35939[(2)]);
var inst_35937 = cljs.core.async.close_BANG_.call(null,out);
var state_35939__$1 = (function (){var statearr_35948 = state_35939;
(statearr_35948[(9)] = inst_35936);

return statearr_35948;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35939__$1,inst_35937);
} else {
if((state_val_35940 === (2))){
var state_35939__$1 = state_35939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35939__$1,(4),ch);
} else {
if((state_val_35940 === (11))){
var inst_35919 = (state_35939[(8)]);
var inst_35928 = (state_35939[(2)]);
var inst_35916 = inst_35919;
var state_35939__$1 = (function (){var statearr_35949 = state_35939;
(statearr_35949[(10)] = inst_35928);

(statearr_35949[(7)] = inst_35916);

return statearr_35949;
})();
var statearr_35950_35968 = state_35939__$1;
(statearr_35950_35968[(2)] = null);

(statearr_35950_35968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (9))){
var inst_35919 = (state_35939[(8)]);
var state_35939__$1 = state_35939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35939__$1,(11),out,inst_35919);
} else {
if((state_val_35940 === (5))){
var inst_35916 = (state_35939[(7)]);
var inst_35919 = (state_35939[(8)]);
var inst_35923 = cljs.core._EQ_.call(null,inst_35919,inst_35916);
var state_35939__$1 = state_35939;
if(inst_35923){
var statearr_35952_35969 = state_35939__$1;
(statearr_35952_35969[(1)] = (8));

} else {
var statearr_35953_35970 = state_35939__$1;
(statearr_35953_35970[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (10))){
var inst_35931 = (state_35939[(2)]);
var state_35939__$1 = state_35939;
var statearr_35954_35971 = state_35939__$1;
(statearr_35954_35971[(2)] = inst_35931);

(statearr_35954_35971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (8))){
var inst_35916 = (state_35939[(7)]);
var tmp35951 = inst_35916;
var inst_35916__$1 = tmp35951;
var state_35939__$1 = (function (){var statearr_35955 = state_35939;
(statearr_35955[(7)] = inst_35916__$1);

return statearr_35955;
})();
var statearr_35956_35972 = state_35939__$1;
(statearr_35956_35972[(2)] = null);

(statearr_35956_35972[(1)] = (2));


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
});})(c__34226__auto___35962,out))
;
return ((function (switch__34136__auto__,c__34226__auto___35962,out){
return (function() {
var cljs$core$async$state_machine__34137__auto__ = null;
var cljs$core$async$state_machine__34137__auto____0 = (function (){
var statearr_35957 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35957[(0)] = cljs$core$async$state_machine__34137__auto__);

(statearr_35957[(1)] = (1));

return statearr_35957;
});
var cljs$core$async$state_machine__34137__auto____1 = (function (state_35939){
while(true){
var ret_value__34138__auto__ = (function (){try{while(true){
var result__34139__auto__ = switch__34136__auto__.call(null,state_35939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34139__auto__;
}
break;
}
}catch (e35958){if((e35958 instanceof Object)){
var ex__34140__auto__ = e35958;
var statearr_35959_35973 = state_35939;
(statearr_35959_35973[(5)] = ex__34140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35974 = state_35939;
state_35939 = G__35974;
continue;
} else {
return ret_value__34138__auto__;
}
break;
}
});
cljs$core$async$state_machine__34137__auto__ = function(state_35939){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34137__auto____1.call(this,state_35939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34137__auto____0;
cljs$core$async$state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34137__auto____1;
return cljs$core$async$state_machine__34137__auto__;
})()
;})(switch__34136__auto__,c__34226__auto___35962,out))
})();
var state__34228__auto__ = (function (){var statearr_35960 = f__34227__auto__.call(null);
(statearr_35960[(6)] = c__34226__auto___35962);

return statearr_35960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34228__auto__);
});})(c__34226__auto___35962,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35976 = arguments.length;
switch (G__35976) {
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
var c__34226__auto___36042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34226__auto___36042,out){
return (function (){
var f__34227__auto__ = (function (){var switch__34136__auto__ = ((function (c__34226__auto___36042,out){
return (function (state_36014){
var state_val_36015 = (state_36014[(1)]);
if((state_val_36015 === (7))){
var inst_36010 = (state_36014[(2)]);
var state_36014__$1 = state_36014;
var statearr_36016_36043 = state_36014__$1;
(statearr_36016_36043[(2)] = inst_36010);

(statearr_36016_36043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36015 === (1))){
var inst_35977 = (new Array(n));
var inst_35978 = inst_35977;
var inst_35979 = (0);
var state_36014__$1 = (function (){var statearr_36017 = state_36014;
(statearr_36017[(7)] = inst_35978);

(statearr_36017[(8)] = inst_35979);

return statearr_36017;
})();
var statearr_36018_36044 = state_36014__$1;
(statearr_36018_36044[(2)] = null);

(statearr_36018_36044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36015 === (4))){
var inst_35982 = (state_36014[(9)]);
var inst_35982__$1 = (state_36014[(2)]);
var inst_35983 = (inst_35982__$1 == null);
var inst_35984 = cljs.core.not.call(null,inst_35983);
var state_36014__$1 = (function (){var statearr_36019 = state_36014;
(statearr_36019[(9)] = inst_35982__$1);

return statearr_36019;
})();
if(inst_35984){
var statearr_36020_36045 = state_36014__$1;
(statearr_36020_36045[(1)] = (5));

} else {
var statearr_36021_36046 = state_36014__$1;
(statearr_36021_36046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36015 === (15))){
var inst_36004 = (state_36014[(2)]);
var state_36014__$1 = state_36014;
var statearr_36022_36047 = state_36014__$1;
(statearr_36022_36047[(2)] = inst_36004);

(statearr_36022_36047[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36015 === (13))){
var state_36014__$1 = state_36014;
var statearr_36023_36048 = state_36014__$1;
(statearr_36023_36048[(2)] = null);

(statearr_36023_36048[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36015 === (6))){
var inst_35979 = (state_36014[(8)]);
var inst_36000 = (inst_35979 > (0));
var state_36014__$1 = state_36014;
if(cljs.core.truth_(inst_36000)){
var statearr_36024_36049 = state_36014__$1;
(statearr_36024_36049[(1)] = (12));

} else {
var statearr_36025_36050 = state_36014__$1;
(statearr_36025_36050[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36015 === (3))){
var inst_36012 = (state_36014[(2)]);
var state_36014__$1 = state_36014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36014__$1,inst_36012);
} else {
if((state_val_36015 === (12))){
var inst_35978 = (state_36014[(7)]);
var inst_36002 = cljs.core.vec.call(null,inst_35978);
var state_36014__$1 = state_36014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36014__$1,(15),out,inst_36002);
} else {
if((state_val_36015 === (2))){
var state_36014__$1 = state_36014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36014__$1,(4),ch);
} else {
if((state_val_36015 === (11))){
var inst_35994 = (state_36014[(2)]);
var inst_35995 = (new Array(n));
var inst_35978 = inst_35995;
var inst_35979 = (0);
var state_36014__$1 = (function (){var statearr_36026 = state_36014;
(statearr_36026[(7)] = inst_35978);

(statearr_36026[(10)] = inst_35994);

(statearr_36026[(8)] = inst_35979);

return statearr_36026;
})();
var statearr_36027_36051 = state_36014__$1;
(statearr_36027_36051[(2)] = null);

(statearr_36027_36051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36015 === (9))){
var inst_35978 = (state_36014[(7)]);
var inst_35992 = cljs.core.vec.call(null,inst_35978);
var state_36014__$1 = state_36014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36014__$1,(11),out,inst_35992);
} else {
if((state_val_36015 === (5))){
var inst_35978 = (state_36014[(7)]);
var inst_35979 = (state_36014[(8)]);
var inst_35987 = (state_36014[(11)]);
var inst_35982 = (state_36014[(9)]);
var inst_35986 = (inst_35978[inst_35979] = inst_35982);
var inst_35987__$1 = (inst_35979 + (1));
var inst_35988 = (inst_35987__$1 < n);
var state_36014__$1 = (function (){var statearr_36028 = state_36014;
(statearr_36028[(11)] = inst_35987__$1);

(statearr_36028[(12)] = inst_35986);

return statearr_36028;
})();
if(cljs.core.truth_(inst_35988)){
var statearr_36029_36052 = state_36014__$1;
(statearr_36029_36052[(1)] = (8));

} else {
var statearr_36030_36053 = state_36014__$1;
(statearr_36030_36053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36015 === (14))){
var inst_36007 = (state_36014[(2)]);
var inst_36008 = cljs.core.async.close_BANG_.call(null,out);
var state_36014__$1 = (function (){var statearr_36032 = state_36014;
(statearr_36032[(13)] = inst_36007);

return statearr_36032;
})();
var statearr_36033_36054 = state_36014__$1;
(statearr_36033_36054[(2)] = inst_36008);

(statearr_36033_36054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36015 === (10))){
var inst_35998 = (state_36014[(2)]);
var state_36014__$1 = state_36014;
var statearr_36034_36055 = state_36014__$1;
(statearr_36034_36055[(2)] = inst_35998);

(statearr_36034_36055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36015 === (8))){
var inst_35978 = (state_36014[(7)]);
var inst_35987 = (state_36014[(11)]);
var tmp36031 = inst_35978;
var inst_35978__$1 = tmp36031;
var inst_35979 = inst_35987;
var state_36014__$1 = (function (){var statearr_36035 = state_36014;
(statearr_36035[(7)] = inst_35978__$1);

(statearr_36035[(8)] = inst_35979);

return statearr_36035;
})();
var statearr_36036_36056 = state_36014__$1;
(statearr_36036_36056[(2)] = null);

(statearr_36036_36056[(1)] = (2));


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
});})(c__34226__auto___36042,out))
;
return ((function (switch__34136__auto__,c__34226__auto___36042,out){
return (function() {
var cljs$core$async$state_machine__34137__auto__ = null;
var cljs$core$async$state_machine__34137__auto____0 = (function (){
var statearr_36037 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36037[(0)] = cljs$core$async$state_machine__34137__auto__);

(statearr_36037[(1)] = (1));

return statearr_36037;
});
var cljs$core$async$state_machine__34137__auto____1 = (function (state_36014){
while(true){
var ret_value__34138__auto__ = (function (){try{while(true){
var result__34139__auto__ = switch__34136__auto__.call(null,state_36014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34139__auto__;
}
break;
}
}catch (e36038){if((e36038 instanceof Object)){
var ex__34140__auto__ = e36038;
var statearr_36039_36057 = state_36014;
(statearr_36039_36057[(5)] = ex__34140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36058 = state_36014;
state_36014 = G__36058;
continue;
} else {
return ret_value__34138__auto__;
}
break;
}
});
cljs$core$async$state_machine__34137__auto__ = function(state_36014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34137__auto____1.call(this,state_36014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34137__auto____0;
cljs$core$async$state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34137__auto____1;
return cljs$core$async$state_machine__34137__auto__;
})()
;})(switch__34136__auto__,c__34226__auto___36042,out))
})();
var state__34228__auto__ = (function (){var statearr_36040 = f__34227__auto__.call(null);
(statearr_36040[(6)] = c__34226__auto___36042);

return statearr_36040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34228__auto__);
});})(c__34226__auto___36042,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36060 = arguments.length;
switch (G__36060) {
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
var c__34226__auto___36130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34226__auto___36130,out){
return (function (){
var f__34227__auto__ = (function (){var switch__34136__auto__ = ((function (c__34226__auto___36130,out){
return (function (state_36102){
var state_val_36103 = (state_36102[(1)]);
if((state_val_36103 === (7))){
var inst_36098 = (state_36102[(2)]);
var state_36102__$1 = state_36102;
var statearr_36104_36131 = state_36102__$1;
(statearr_36104_36131[(2)] = inst_36098);

(statearr_36104_36131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (1))){
var inst_36061 = [];
var inst_36062 = inst_36061;
var inst_36063 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36102__$1 = (function (){var statearr_36105 = state_36102;
(statearr_36105[(7)] = inst_36063);

(statearr_36105[(8)] = inst_36062);

return statearr_36105;
})();
var statearr_36106_36132 = state_36102__$1;
(statearr_36106_36132[(2)] = null);

(statearr_36106_36132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (4))){
var inst_36066 = (state_36102[(9)]);
var inst_36066__$1 = (state_36102[(2)]);
var inst_36067 = (inst_36066__$1 == null);
var inst_36068 = cljs.core.not.call(null,inst_36067);
var state_36102__$1 = (function (){var statearr_36107 = state_36102;
(statearr_36107[(9)] = inst_36066__$1);

return statearr_36107;
})();
if(inst_36068){
var statearr_36108_36133 = state_36102__$1;
(statearr_36108_36133[(1)] = (5));

} else {
var statearr_36109_36134 = state_36102__$1;
(statearr_36109_36134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (15))){
var inst_36092 = (state_36102[(2)]);
var state_36102__$1 = state_36102;
var statearr_36110_36135 = state_36102__$1;
(statearr_36110_36135[(2)] = inst_36092);

(statearr_36110_36135[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (13))){
var state_36102__$1 = state_36102;
var statearr_36111_36136 = state_36102__$1;
(statearr_36111_36136[(2)] = null);

(statearr_36111_36136[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (6))){
var inst_36062 = (state_36102[(8)]);
var inst_36087 = inst_36062.length;
var inst_36088 = (inst_36087 > (0));
var state_36102__$1 = state_36102;
if(cljs.core.truth_(inst_36088)){
var statearr_36112_36137 = state_36102__$1;
(statearr_36112_36137[(1)] = (12));

} else {
var statearr_36113_36138 = state_36102__$1;
(statearr_36113_36138[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (3))){
var inst_36100 = (state_36102[(2)]);
var state_36102__$1 = state_36102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36102__$1,inst_36100);
} else {
if((state_val_36103 === (12))){
var inst_36062 = (state_36102[(8)]);
var inst_36090 = cljs.core.vec.call(null,inst_36062);
var state_36102__$1 = state_36102;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36102__$1,(15),out,inst_36090);
} else {
if((state_val_36103 === (2))){
var state_36102__$1 = state_36102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36102__$1,(4),ch);
} else {
if((state_val_36103 === (11))){
var inst_36070 = (state_36102[(10)]);
var inst_36066 = (state_36102[(9)]);
var inst_36080 = (state_36102[(2)]);
var inst_36081 = [];
var inst_36082 = inst_36081.push(inst_36066);
var inst_36062 = inst_36081;
var inst_36063 = inst_36070;
var state_36102__$1 = (function (){var statearr_36114 = state_36102;
(statearr_36114[(11)] = inst_36080);

(statearr_36114[(12)] = inst_36082);

(statearr_36114[(7)] = inst_36063);

(statearr_36114[(8)] = inst_36062);

return statearr_36114;
})();
var statearr_36115_36139 = state_36102__$1;
(statearr_36115_36139[(2)] = null);

(statearr_36115_36139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (9))){
var inst_36062 = (state_36102[(8)]);
var inst_36078 = cljs.core.vec.call(null,inst_36062);
var state_36102__$1 = state_36102;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36102__$1,(11),out,inst_36078);
} else {
if((state_val_36103 === (5))){
var inst_36070 = (state_36102[(10)]);
var inst_36066 = (state_36102[(9)]);
var inst_36063 = (state_36102[(7)]);
var inst_36070__$1 = f.call(null,inst_36066);
var inst_36071 = cljs.core._EQ_.call(null,inst_36070__$1,inst_36063);
var inst_36072 = cljs.core.keyword_identical_QMARK_.call(null,inst_36063,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36073 = ((inst_36071) || (inst_36072));
var state_36102__$1 = (function (){var statearr_36116 = state_36102;
(statearr_36116[(10)] = inst_36070__$1);

return statearr_36116;
})();
if(cljs.core.truth_(inst_36073)){
var statearr_36117_36140 = state_36102__$1;
(statearr_36117_36140[(1)] = (8));

} else {
var statearr_36118_36141 = state_36102__$1;
(statearr_36118_36141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (14))){
var inst_36095 = (state_36102[(2)]);
var inst_36096 = cljs.core.async.close_BANG_.call(null,out);
var state_36102__$1 = (function (){var statearr_36120 = state_36102;
(statearr_36120[(13)] = inst_36095);

return statearr_36120;
})();
var statearr_36121_36142 = state_36102__$1;
(statearr_36121_36142[(2)] = inst_36096);

(statearr_36121_36142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (10))){
var inst_36085 = (state_36102[(2)]);
var state_36102__$1 = state_36102;
var statearr_36122_36143 = state_36102__$1;
(statearr_36122_36143[(2)] = inst_36085);

(statearr_36122_36143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (8))){
var inst_36070 = (state_36102[(10)]);
var inst_36066 = (state_36102[(9)]);
var inst_36062 = (state_36102[(8)]);
var inst_36075 = inst_36062.push(inst_36066);
var tmp36119 = inst_36062;
var inst_36062__$1 = tmp36119;
var inst_36063 = inst_36070;
var state_36102__$1 = (function (){var statearr_36123 = state_36102;
(statearr_36123[(14)] = inst_36075);

(statearr_36123[(7)] = inst_36063);

(statearr_36123[(8)] = inst_36062__$1);

return statearr_36123;
})();
var statearr_36124_36144 = state_36102__$1;
(statearr_36124_36144[(2)] = null);

(statearr_36124_36144[(1)] = (2));


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
});})(c__34226__auto___36130,out))
;
return ((function (switch__34136__auto__,c__34226__auto___36130,out){
return (function() {
var cljs$core$async$state_machine__34137__auto__ = null;
var cljs$core$async$state_machine__34137__auto____0 = (function (){
var statearr_36125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36125[(0)] = cljs$core$async$state_machine__34137__auto__);

(statearr_36125[(1)] = (1));

return statearr_36125;
});
var cljs$core$async$state_machine__34137__auto____1 = (function (state_36102){
while(true){
var ret_value__34138__auto__ = (function (){try{while(true){
var result__34139__auto__ = switch__34136__auto__.call(null,state_36102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34139__auto__;
}
break;
}
}catch (e36126){if((e36126 instanceof Object)){
var ex__34140__auto__ = e36126;
var statearr_36127_36145 = state_36102;
(statearr_36127_36145[(5)] = ex__34140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36146 = state_36102;
state_36102 = G__36146;
continue;
} else {
return ret_value__34138__auto__;
}
break;
}
});
cljs$core$async$state_machine__34137__auto__ = function(state_36102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34137__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34137__auto____1.call(this,state_36102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34137__auto____0;
cljs$core$async$state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34137__auto____1;
return cljs$core$async$state_machine__34137__auto__;
})()
;})(switch__34136__auto__,c__34226__auto___36130,out))
})();
var state__34228__auto__ = (function (){var statearr_36128 = f__34227__auto__.call(null);
(statearr_36128[(6)] = c__34226__auto___36130);

return statearr_36128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34228__auto__);
});})(c__34226__auto___36130,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1552590668260
