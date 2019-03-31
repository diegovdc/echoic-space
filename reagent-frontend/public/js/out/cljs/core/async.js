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
var G__43691 = arguments.length;
switch (G__43691) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43692 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43692 = (function (f,blockable,meta43693){
this.f = f;
this.blockable = blockable;
this.meta43693 = meta43693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43694,meta43693__$1){
var self__ = this;
var _43694__$1 = this;
return (new cljs.core.async.t_cljs$core$async43692(self__.f,self__.blockable,meta43693__$1));
});

cljs.core.async.t_cljs$core$async43692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43694){
var self__ = this;
var _43694__$1 = this;
return self__.meta43693;
});

cljs.core.async.t_cljs$core$async43692.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43692.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async43692.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async43692.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async43692.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43693","meta43693",-1237482688,null)], null);
});

cljs.core.async.t_cljs$core$async43692.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43692.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43692";

cljs.core.async.t_cljs$core$async43692.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async43692");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43692.
 */
cljs.core.async.__GT_t_cljs$core$async43692 = (function cljs$core$async$__GT_t_cljs$core$async43692(f__$1,blockable__$1,meta43693){
return (new cljs.core.async.t_cljs$core$async43692(f__$1,blockable__$1,meta43693));
});

}

return (new cljs.core.async.t_cljs$core$async43692(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43698 = arguments.length;
switch (G__43698) {
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
var G__43701 = arguments.length;
switch (G__43701) {
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
var G__43704 = arguments.length;
switch (G__43704) {
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
var val_43706 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_43706);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_43706,ret){
return (function (){
return fn1.call(null,val_43706);
});})(val_43706,ret))
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
var G__43708 = arguments.length;
switch (G__43708) {
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
var n__4394__auto___43710 = n;
var x_43711 = (0);
while(true){
if((x_43711 < n__4394__auto___43710)){
(a[x_43711] = (0));

var G__43712 = (x_43711 + (1));
x_43711 = G__43712;
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

var G__43713 = (i + (1));
i = G__43713;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43714 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43714 = (function (flag,meta43715){
this.flag = flag;
this.meta43715 = meta43715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_43716,meta43715__$1){
var self__ = this;
var _43716__$1 = this;
return (new cljs.core.async.t_cljs$core$async43714(self__.flag,meta43715__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async43714.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_43716){
var self__ = this;
var _43716__$1 = this;
return self__.meta43715;
});})(flag))
;

cljs.core.async.t_cljs$core$async43714.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43714.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async43714.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async43714.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async43714.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43715","meta43715",-1078176100,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async43714.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43714.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43714";

cljs.core.async.t_cljs$core$async43714.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async43714");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43714.
 */
cljs.core.async.__GT_t_cljs$core$async43714 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43714(flag__$1,meta43715){
return (new cljs.core.async.t_cljs$core$async43714(flag__$1,meta43715));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async43714(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43717 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43717 = (function (flag,cb,meta43718){
this.flag = flag;
this.cb = cb;
this.meta43718 = meta43718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43719,meta43718__$1){
var self__ = this;
var _43719__$1 = this;
return (new cljs.core.async.t_cljs$core$async43717(self__.flag,self__.cb,meta43718__$1));
});

cljs.core.async.t_cljs$core$async43717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43719){
var self__ = this;
var _43719__$1 = this;
return self__.meta43718;
});

cljs.core.async.t_cljs$core$async43717.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43717.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async43717.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async43717.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async43717.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43718","meta43718",-162567184,null)], null);
});

cljs.core.async.t_cljs$core$async43717.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43717.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43717";

cljs.core.async.t_cljs$core$async43717.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async43717");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43717.
 */
cljs.core.async.__GT_t_cljs$core$async43717 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43717(flag__$1,cb__$1,meta43718){
return (new cljs.core.async.t_cljs$core$async43717(flag__$1,cb__$1,meta43718));
});

}

return (new cljs.core.async.t_cljs$core$async43717(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__43720_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43720_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43721_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43721_SHARP_,port], null));
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
var G__43722 = (i + (1));
i = G__43722;
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
var len__4517__auto___43728 = arguments.length;
var i__4518__auto___43729 = (0);
while(true){
if((i__4518__auto___43729 < len__4517__auto___43728)){
args__4520__auto__.push((arguments[i__4518__auto___43729]));

var G__43730 = (i__4518__auto___43729 + (1));
i__4518__auto___43729 = G__43730;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43725){
var map__43726 = p__43725;
var map__43726__$1 = ((((!((map__43726 == null)))?(((((map__43726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43726):map__43726);
var opts = map__43726__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43723){
var G__43724 = cljs.core.first.call(null,seq43723);
var seq43723__$1 = cljs.core.next.call(null,seq43723);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43724,seq43723__$1);
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
var G__43732 = arguments.length;
switch (G__43732) {
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
var c__43631__auto___43778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43631__auto___43778){
return (function (){
var f__43632__auto__ = (function (){var switch__43541__auto__ = ((function (c__43631__auto___43778){
return (function (state_43756){
var state_val_43757 = (state_43756[(1)]);
if((state_val_43757 === (7))){
var inst_43752 = (state_43756[(2)]);
var state_43756__$1 = state_43756;
var statearr_43758_43779 = state_43756__$1;
(statearr_43758_43779[(2)] = inst_43752);

(statearr_43758_43779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43757 === (1))){
var state_43756__$1 = state_43756;
var statearr_43759_43780 = state_43756__$1;
(statearr_43759_43780[(2)] = null);

(statearr_43759_43780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43757 === (4))){
var inst_43735 = (state_43756[(7)]);
var inst_43735__$1 = (state_43756[(2)]);
var inst_43736 = (inst_43735__$1 == null);
var state_43756__$1 = (function (){var statearr_43760 = state_43756;
(statearr_43760[(7)] = inst_43735__$1);

return statearr_43760;
})();
if(cljs.core.truth_(inst_43736)){
var statearr_43761_43781 = state_43756__$1;
(statearr_43761_43781[(1)] = (5));

} else {
var statearr_43762_43782 = state_43756__$1;
(statearr_43762_43782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43757 === (13))){
var state_43756__$1 = state_43756;
var statearr_43763_43783 = state_43756__$1;
(statearr_43763_43783[(2)] = null);

(statearr_43763_43783[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43757 === (6))){
var inst_43735 = (state_43756[(7)]);
var state_43756__$1 = state_43756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43756__$1,(11),to,inst_43735);
} else {
if((state_val_43757 === (3))){
var inst_43754 = (state_43756[(2)]);
var state_43756__$1 = state_43756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43756__$1,inst_43754);
} else {
if((state_val_43757 === (12))){
var state_43756__$1 = state_43756;
var statearr_43764_43784 = state_43756__$1;
(statearr_43764_43784[(2)] = null);

(statearr_43764_43784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43757 === (2))){
var state_43756__$1 = state_43756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43756__$1,(4),from);
} else {
if((state_val_43757 === (11))){
var inst_43745 = (state_43756[(2)]);
var state_43756__$1 = state_43756;
if(cljs.core.truth_(inst_43745)){
var statearr_43765_43785 = state_43756__$1;
(statearr_43765_43785[(1)] = (12));

} else {
var statearr_43766_43786 = state_43756__$1;
(statearr_43766_43786[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43757 === (9))){
var state_43756__$1 = state_43756;
var statearr_43767_43787 = state_43756__$1;
(statearr_43767_43787[(2)] = null);

(statearr_43767_43787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43757 === (5))){
var state_43756__$1 = state_43756;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43768_43788 = state_43756__$1;
(statearr_43768_43788[(1)] = (8));

} else {
var statearr_43769_43789 = state_43756__$1;
(statearr_43769_43789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43757 === (14))){
var inst_43750 = (state_43756[(2)]);
var state_43756__$1 = state_43756;
var statearr_43770_43790 = state_43756__$1;
(statearr_43770_43790[(2)] = inst_43750);

(statearr_43770_43790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43757 === (10))){
var inst_43742 = (state_43756[(2)]);
var state_43756__$1 = state_43756;
var statearr_43771_43791 = state_43756__$1;
(statearr_43771_43791[(2)] = inst_43742);

(statearr_43771_43791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43757 === (8))){
var inst_43739 = cljs.core.async.close_BANG_.call(null,to);
var state_43756__$1 = state_43756;
var statearr_43772_43792 = state_43756__$1;
(statearr_43772_43792[(2)] = inst_43739);

(statearr_43772_43792[(1)] = (10));


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
});})(c__43631__auto___43778))
;
return ((function (switch__43541__auto__,c__43631__auto___43778){
return (function() {
var cljs$core$async$state_machine__43542__auto__ = null;
var cljs$core$async$state_machine__43542__auto____0 = (function (){
var statearr_43773 = [null,null,null,null,null,null,null,null];
(statearr_43773[(0)] = cljs$core$async$state_machine__43542__auto__);

(statearr_43773[(1)] = (1));

return statearr_43773;
});
var cljs$core$async$state_machine__43542__auto____1 = (function (state_43756){
while(true){
var ret_value__43543__auto__ = (function (){try{while(true){
var result__43544__auto__ = switch__43541__auto__.call(null,state_43756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43544__auto__;
}
break;
}
}catch (e43774){if((e43774 instanceof Object)){
var ex__43545__auto__ = e43774;
var statearr_43775_43793 = state_43756;
(statearr_43775_43793[(5)] = ex__43545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43794 = state_43756;
state_43756 = G__43794;
continue;
} else {
return ret_value__43543__auto__;
}
break;
}
});
cljs$core$async$state_machine__43542__auto__ = function(state_43756){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43542__auto____1.call(this,state_43756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43542__auto____0;
cljs$core$async$state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43542__auto____1;
return cljs$core$async$state_machine__43542__auto__;
})()
;})(switch__43541__auto__,c__43631__auto___43778))
})();
var state__43633__auto__ = (function (){var statearr_43776 = f__43632__auto__.call(null);
(statearr_43776[(6)] = c__43631__auto___43778);

return statearr_43776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43633__auto__);
});})(c__43631__auto___43778))
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
return (function (p__43795){
var vec__43796 = p__43795;
var v = cljs.core.nth.call(null,vec__43796,(0),null);
var p = cljs.core.nth.call(null,vec__43796,(1),null);
var job = vec__43796;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__43631__auto___43967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43631__auto___43967,res,vec__43796,v,p,job,jobs,results){
return (function (){
var f__43632__auto__ = (function (){var switch__43541__auto__ = ((function (c__43631__auto___43967,res,vec__43796,v,p,job,jobs,results){
return (function (state_43803){
var state_val_43804 = (state_43803[(1)]);
if((state_val_43804 === (1))){
var state_43803__$1 = state_43803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43803__$1,(2),res,v);
} else {
if((state_val_43804 === (2))){
var inst_43800 = (state_43803[(2)]);
var inst_43801 = cljs.core.async.close_BANG_.call(null,res);
var state_43803__$1 = (function (){var statearr_43805 = state_43803;
(statearr_43805[(7)] = inst_43800);

return statearr_43805;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43803__$1,inst_43801);
} else {
return null;
}
}
});})(c__43631__auto___43967,res,vec__43796,v,p,job,jobs,results))
;
return ((function (switch__43541__auto__,c__43631__auto___43967,res,vec__43796,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43542__auto____0 = (function (){
var statearr_43806 = [null,null,null,null,null,null,null,null];
(statearr_43806[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43542__auto__);

(statearr_43806[(1)] = (1));

return statearr_43806;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43542__auto____1 = (function (state_43803){
while(true){
var ret_value__43543__auto__ = (function (){try{while(true){
var result__43544__auto__ = switch__43541__auto__.call(null,state_43803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43544__auto__;
}
break;
}
}catch (e43807){if((e43807 instanceof Object)){
var ex__43545__auto__ = e43807;
var statearr_43808_43968 = state_43803;
(statearr_43808_43968[(5)] = ex__43545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43969 = state_43803;
state_43803 = G__43969;
continue;
} else {
return ret_value__43543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43542__auto__ = function(state_43803){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43542__auto____1.call(this,state_43803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43542__auto__;
})()
;})(switch__43541__auto__,c__43631__auto___43967,res,vec__43796,v,p,job,jobs,results))
})();
var state__43633__auto__ = (function (){var statearr_43809 = f__43632__auto__.call(null);
(statearr_43809[(6)] = c__43631__auto___43967);

return statearr_43809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43633__auto__);
});})(c__43631__auto___43967,res,vec__43796,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__43810){
var vec__43811 = p__43810;
var v = cljs.core.nth.call(null,vec__43811,(0),null);
var p = cljs.core.nth.call(null,vec__43811,(1),null);
var job = vec__43811;
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
var n__4394__auto___43970 = n;
var __43971 = (0);
while(true){
if((__43971 < n__4394__auto___43970)){
var G__43814_43972 = type;
var G__43814_43973__$1 = (((G__43814_43972 instanceof cljs.core.Keyword))?G__43814_43972.fqn:null);
switch (G__43814_43973__$1) {
case "compute":
var c__43631__auto___43975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__43971,c__43631__auto___43975,G__43814_43972,G__43814_43973__$1,n__4394__auto___43970,jobs,results,process,async){
return (function (){
var f__43632__auto__ = (function (){var switch__43541__auto__ = ((function (__43971,c__43631__auto___43975,G__43814_43972,G__43814_43973__$1,n__4394__auto___43970,jobs,results,process,async){
return (function (state_43827){
var state_val_43828 = (state_43827[(1)]);
if((state_val_43828 === (1))){
var state_43827__$1 = state_43827;
var statearr_43829_43976 = state_43827__$1;
(statearr_43829_43976[(2)] = null);

(statearr_43829_43976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43828 === (2))){
var state_43827__$1 = state_43827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43827__$1,(4),jobs);
} else {
if((state_val_43828 === (3))){
var inst_43825 = (state_43827[(2)]);
var state_43827__$1 = state_43827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43827__$1,inst_43825);
} else {
if((state_val_43828 === (4))){
var inst_43817 = (state_43827[(2)]);
var inst_43818 = process.call(null,inst_43817);
var state_43827__$1 = state_43827;
if(cljs.core.truth_(inst_43818)){
var statearr_43830_43977 = state_43827__$1;
(statearr_43830_43977[(1)] = (5));

} else {
var statearr_43831_43978 = state_43827__$1;
(statearr_43831_43978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43828 === (5))){
var state_43827__$1 = state_43827;
var statearr_43832_43979 = state_43827__$1;
(statearr_43832_43979[(2)] = null);

(statearr_43832_43979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43828 === (6))){
var state_43827__$1 = state_43827;
var statearr_43833_43980 = state_43827__$1;
(statearr_43833_43980[(2)] = null);

(statearr_43833_43980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43828 === (7))){
var inst_43823 = (state_43827[(2)]);
var state_43827__$1 = state_43827;
var statearr_43834_43981 = state_43827__$1;
(statearr_43834_43981[(2)] = inst_43823);

(statearr_43834_43981[(1)] = (3));


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
});})(__43971,c__43631__auto___43975,G__43814_43972,G__43814_43973__$1,n__4394__auto___43970,jobs,results,process,async))
;
return ((function (__43971,switch__43541__auto__,c__43631__auto___43975,G__43814_43972,G__43814_43973__$1,n__4394__auto___43970,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43542__auto____0 = (function (){
var statearr_43835 = [null,null,null,null,null,null,null];
(statearr_43835[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43542__auto__);

(statearr_43835[(1)] = (1));

return statearr_43835;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43542__auto____1 = (function (state_43827){
while(true){
var ret_value__43543__auto__ = (function (){try{while(true){
var result__43544__auto__ = switch__43541__auto__.call(null,state_43827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43544__auto__;
}
break;
}
}catch (e43836){if((e43836 instanceof Object)){
var ex__43545__auto__ = e43836;
var statearr_43837_43982 = state_43827;
(statearr_43837_43982[(5)] = ex__43545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43983 = state_43827;
state_43827 = G__43983;
continue;
} else {
return ret_value__43543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43542__auto__ = function(state_43827){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43542__auto____1.call(this,state_43827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43542__auto__;
})()
;})(__43971,switch__43541__auto__,c__43631__auto___43975,G__43814_43972,G__43814_43973__$1,n__4394__auto___43970,jobs,results,process,async))
})();
var state__43633__auto__ = (function (){var statearr_43838 = f__43632__auto__.call(null);
(statearr_43838[(6)] = c__43631__auto___43975);

return statearr_43838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43633__auto__);
});})(__43971,c__43631__auto___43975,G__43814_43972,G__43814_43973__$1,n__4394__auto___43970,jobs,results,process,async))
);


break;
case "async":
var c__43631__auto___43984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__43971,c__43631__auto___43984,G__43814_43972,G__43814_43973__$1,n__4394__auto___43970,jobs,results,process,async){
return (function (){
var f__43632__auto__ = (function (){var switch__43541__auto__ = ((function (__43971,c__43631__auto___43984,G__43814_43972,G__43814_43973__$1,n__4394__auto___43970,jobs,results,process,async){
return (function (state_43851){
var state_val_43852 = (state_43851[(1)]);
if((state_val_43852 === (1))){
var state_43851__$1 = state_43851;
var statearr_43853_43985 = state_43851__$1;
(statearr_43853_43985[(2)] = null);

(statearr_43853_43985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43852 === (2))){
var state_43851__$1 = state_43851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43851__$1,(4),jobs);
} else {
if((state_val_43852 === (3))){
var inst_43849 = (state_43851[(2)]);
var state_43851__$1 = state_43851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43851__$1,inst_43849);
} else {
if((state_val_43852 === (4))){
var inst_43841 = (state_43851[(2)]);
var inst_43842 = async.call(null,inst_43841);
var state_43851__$1 = state_43851;
if(cljs.core.truth_(inst_43842)){
var statearr_43854_43986 = state_43851__$1;
(statearr_43854_43986[(1)] = (5));

} else {
var statearr_43855_43987 = state_43851__$1;
(statearr_43855_43987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43852 === (5))){
var state_43851__$1 = state_43851;
var statearr_43856_43988 = state_43851__$1;
(statearr_43856_43988[(2)] = null);

(statearr_43856_43988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43852 === (6))){
var state_43851__$1 = state_43851;
var statearr_43857_43989 = state_43851__$1;
(statearr_43857_43989[(2)] = null);

(statearr_43857_43989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43852 === (7))){
var inst_43847 = (state_43851[(2)]);
var state_43851__$1 = state_43851;
var statearr_43858_43990 = state_43851__$1;
(statearr_43858_43990[(2)] = inst_43847);

(statearr_43858_43990[(1)] = (3));


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
});})(__43971,c__43631__auto___43984,G__43814_43972,G__43814_43973__$1,n__4394__auto___43970,jobs,results,process,async))
;
return ((function (__43971,switch__43541__auto__,c__43631__auto___43984,G__43814_43972,G__43814_43973__$1,n__4394__auto___43970,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43542__auto____0 = (function (){
var statearr_43859 = [null,null,null,null,null,null,null];
(statearr_43859[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43542__auto__);

(statearr_43859[(1)] = (1));

return statearr_43859;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43542__auto____1 = (function (state_43851){
while(true){
var ret_value__43543__auto__ = (function (){try{while(true){
var result__43544__auto__ = switch__43541__auto__.call(null,state_43851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43544__auto__;
}
break;
}
}catch (e43860){if((e43860 instanceof Object)){
var ex__43545__auto__ = e43860;
var statearr_43861_43991 = state_43851;
(statearr_43861_43991[(5)] = ex__43545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43992 = state_43851;
state_43851 = G__43992;
continue;
} else {
return ret_value__43543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43542__auto__ = function(state_43851){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43542__auto____1.call(this,state_43851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43542__auto__;
})()
;})(__43971,switch__43541__auto__,c__43631__auto___43984,G__43814_43972,G__43814_43973__$1,n__4394__auto___43970,jobs,results,process,async))
})();
var state__43633__auto__ = (function (){var statearr_43862 = f__43632__auto__.call(null);
(statearr_43862[(6)] = c__43631__auto___43984);

return statearr_43862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43633__auto__);
});})(__43971,c__43631__auto___43984,G__43814_43972,G__43814_43973__$1,n__4394__auto___43970,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43814_43973__$1)].join('')));

}

var G__43993 = (__43971 + (1));
__43971 = G__43993;
continue;
} else {
}
break;
}

var c__43631__auto___43994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43631__auto___43994,jobs,results,process,async){
return (function (){
var f__43632__auto__ = (function (){var switch__43541__auto__ = ((function (c__43631__auto___43994,jobs,results,process,async){
return (function (state_43884){
var state_val_43885 = (state_43884[(1)]);
if((state_val_43885 === (1))){
var state_43884__$1 = state_43884;
var statearr_43886_43995 = state_43884__$1;
(statearr_43886_43995[(2)] = null);

(statearr_43886_43995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43885 === (2))){
var state_43884__$1 = state_43884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43884__$1,(4),from);
} else {
if((state_val_43885 === (3))){
var inst_43882 = (state_43884[(2)]);
var state_43884__$1 = state_43884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43884__$1,inst_43882);
} else {
if((state_val_43885 === (4))){
var inst_43865 = (state_43884[(7)]);
var inst_43865__$1 = (state_43884[(2)]);
var inst_43866 = (inst_43865__$1 == null);
var state_43884__$1 = (function (){var statearr_43887 = state_43884;
(statearr_43887[(7)] = inst_43865__$1);

return statearr_43887;
})();
if(cljs.core.truth_(inst_43866)){
var statearr_43888_43996 = state_43884__$1;
(statearr_43888_43996[(1)] = (5));

} else {
var statearr_43889_43997 = state_43884__$1;
(statearr_43889_43997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43885 === (5))){
var inst_43868 = cljs.core.async.close_BANG_.call(null,jobs);
var state_43884__$1 = state_43884;
var statearr_43890_43998 = state_43884__$1;
(statearr_43890_43998[(2)] = inst_43868);

(statearr_43890_43998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43885 === (6))){
var inst_43870 = (state_43884[(8)]);
var inst_43865 = (state_43884[(7)]);
var inst_43870__$1 = cljs.core.async.chan.call(null,(1));
var inst_43871 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43872 = [inst_43865,inst_43870__$1];
var inst_43873 = (new cljs.core.PersistentVector(null,2,(5),inst_43871,inst_43872,null));
var state_43884__$1 = (function (){var statearr_43891 = state_43884;
(statearr_43891[(8)] = inst_43870__$1);

return statearr_43891;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43884__$1,(8),jobs,inst_43873);
} else {
if((state_val_43885 === (7))){
var inst_43880 = (state_43884[(2)]);
var state_43884__$1 = state_43884;
var statearr_43892_43999 = state_43884__$1;
(statearr_43892_43999[(2)] = inst_43880);

(statearr_43892_43999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43885 === (8))){
var inst_43870 = (state_43884[(8)]);
var inst_43875 = (state_43884[(2)]);
var state_43884__$1 = (function (){var statearr_43893 = state_43884;
(statearr_43893[(9)] = inst_43875);

return statearr_43893;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43884__$1,(9),results,inst_43870);
} else {
if((state_val_43885 === (9))){
var inst_43877 = (state_43884[(2)]);
var state_43884__$1 = (function (){var statearr_43894 = state_43884;
(statearr_43894[(10)] = inst_43877);

return statearr_43894;
})();
var statearr_43895_44000 = state_43884__$1;
(statearr_43895_44000[(2)] = null);

(statearr_43895_44000[(1)] = (2));


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
});})(c__43631__auto___43994,jobs,results,process,async))
;
return ((function (switch__43541__auto__,c__43631__auto___43994,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43542__auto____0 = (function (){
var statearr_43896 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43896[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43542__auto__);

(statearr_43896[(1)] = (1));

return statearr_43896;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43542__auto____1 = (function (state_43884){
while(true){
var ret_value__43543__auto__ = (function (){try{while(true){
var result__43544__auto__ = switch__43541__auto__.call(null,state_43884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43544__auto__;
}
break;
}
}catch (e43897){if((e43897 instanceof Object)){
var ex__43545__auto__ = e43897;
var statearr_43898_44001 = state_43884;
(statearr_43898_44001[(5)] = ex__43545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44002 = state_43884;
state_43884 = G__44002;
continue;
} else {
return ret_value__43543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43542__auto__ = function(state_43884){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43542__auto____1.call(this,state_43884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43542__auto__;
})()
;})(switch__43541__auto__,c__43631__auto___43994,jobs,results,process,async))
})();
var state__43633__auto__ = (function (){var statearr_43899 = f__43632__auto__.call(null);
(statearr_43899[(6)] = c__43631__auto___43994);

return statearr_43899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43633__auto__);
});})(c__43631__auto___43994,jobs,results,process,async))
);


var c__43631__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43631__auto__,jobs,results,process,async){
return (function (){
var f__43632__auto__ = (function (){var switch__43541__auto__ = ((function (c__43631__auto__,jobs,results,process,async){
return (function (state_43937){
var state_val_43938 = (state_43937[(1)]);
if((state_val_43938 === (7))){
var inst_43933 = (state_43937[(2)]);
var state_43937__$1 = state_43937;
var statearr_43939_44003 = state_43937__$1;
(statearr_43939_44003[(2)] = inst_43933);

(statearr_43939_44003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43938 === (20))){
var state_43937__$1 = state_43937;
var statearr_43940_44004 = state_43937__$1;
(statearr_43940_44004[(2)] = null);

(statearr_43940_44004[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43938 === (1))){
var state_43937__$1 = state_43937;
var statearr_43941_44005 = state_43937__$1;
(statearr_43941_44005[(2)] = null);

(statearr_43941_44005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43938 === (4))){
var inst_43902 = (state_43937[(7)]);
var inst_43902__$1 = (state_43937[(2)]);
var inst_43903 = (inst_43902__$1 == null);
var state_43937__$1 = (function (){var statearr_43942 = state_43937;
(statearr_43942[(7)] = inst_43902__$1);

return statearr_43942;
})();
if(cljs.core.truth_(inst_43903)){
var statearr_43943_44006 = state_43937__$1;
(statearr_43943_44006[(1)] = (5));

} else {
var statearr_43944_44007 = state_43937__$1;
(statearr_43944_44007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43938 === (15))){
var inst_43915 = (state_43937[(8)]);
var state_43937__$1 = state_43937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43937__$1,(18),to,inst_43915);
} else {
if((state_val_43938 === (21))){
var inst_43928 = (state_43937[(2)]);
var state_43937__$1 = state_43937;
var statearr_43945_44008 = state_43937__$1;
(statearr_43945_44008[(2)] = inst_43928);

(statearr_43945_44008[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43938 === (13))){
var inst_43930 = (state_43937[(2)]);
var state_43937__$1 = (function (){var statearr_43946 = state_43937;
(statearr_43946[(9)] = inst_43930);

return statearr_43946;
})();
var statearr_43947_44009 = state_43937__$1;
(statearr_43947_44009[(2)] = null);

(statearr_43947_44009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43938 === (6))){
var inst_43902 = (state_43937[(7)]);
var state_43937__$1 = state_43937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43937__$1,(11),inst_43902);
} else {
if((state_val_43938 === (17))){
var inst_43923 = (state_43937[(2)]);
var state_43937__$1 = state_43937;
if(cljs.core.truth_(inst_43923)){
var statearr_43948_44010 = state_43937__$1;
(statearr_43948_44010[(1)] = (19));

} else {
var statearr_43949_44011 = state_43937__$1;
(statearr_43949_44011[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43938 === (3))){
var inst_43935 = (state_43937[(2)]);
var state_43937__$1 = state_43937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43937__$1,inst_43935);
} else {
if((state_val_43938 === (12))){
var inst_43912 = (state_43937[(10)]);
var state_43937__$1 = state_43937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43937__$1,(14),inst_43912);
} else {
if((state_val_43938 === (2))){
var state_43937__$1 = state_43937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43937__$1,(4),results);
} else {
if((state_val_43938 === (19))){
var state_43937__$1 = state_43937;
var statearr_43950_44012 = state_43937__$1;
(statearr_43950_44012[(2)] = null);

(statearr_43950_44012[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43938 === (11))){
var inst_43912 = (state_43937[(2)]);
var state_43937__$1 = (function (){var statearr_43951 = state_43937;
(statearr_43951[(10)] = inst_43912);

return statearr_43951;
})();
var statearr_43952_44013 = state_43937__$1;
(statearr_43952_44013[(2)] = null);

(statearr_43952_44013[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43938 === (9))){
var state_43937__$1 = state_43937;
var statearr_43953_44014 = state_43937__$1;
(statearr_43953_44014[(2)] = null);

(statearr_43953_44014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43938 === (5))){
var state_43937__$1 = state_43937;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43954_44015 = state_43937__$1;
(statearr_43954_44015[(1)] = (8));

} else {
var statearr_43955_44016 = state_43937__$1;
(statearr_43955_44016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43938 === (14))){
var inst_43915 = (state_43937[(8)]);
var inst_43917 = (state_43937[(11)]);
var inst_43915__$1 = (state_43937[(2)]);
var inst_43916 = (inst_43915__$1 == null);
var inst_43917__$1 = cljs.core.not.call(null,inst_43916);
var state_43937__$1 = (function (){var statearr_43956 = state_43937;
(statearr_43956[(8)] = inst_43915__$1);

(statearr_43956[(11)] = inst_43917__$1);

return statearr_43956;
})();
if(inst_43917__$1){
var statearr_43957_44017 = state_43937__$1;
(statearr_43957_44017[(1)] = (15));

} else {
var statearr_43958_44018 = state_43937__$1;
(statearr_43958_44018[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43938 === (16))){
var inst_43917 = (state_43937[(11)]);
var state_43937__$1 = state_43937;
var statearr_43959_44019 = state_43937__$1;
(statearr_43959_44019[(2)] = inst_43917);

(statearr_43959_44019[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43938 === (10))){
var inst_43909 = (state_43937[(2)]);
var state_43937__$1 = state_43937;
var statearr_43960_44020 = state_43937__$1;
(statearr_43960_44020[(2)] = inst_43909);

(statearr_43960_44020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43938 === (18))){
var inst_43920 = (state_43937[(2)]);
var state_43937__$1 = state_43937;
var statearr_43961_44021 = state_43937__$1;
(statearr_43961_44021[(2)] = inst_43920);

(statearr_43961_44021[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43938 === (8))){
var inst_43906 = cljs.core.async.close_BANG_.call(null,to);
var state_43937__$1 = state_43937;
var statearr_43962_44022 = state_43937__$1;
(statearr_43962_44022[(2)] = inst_43906);

(statearr_43962_44022[(1)] = (10));


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
});})(c__43631__auto__,jobs,results,process,async))
;
return ((function (switch__43541__auto__,c__43631__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43542__auto____0 = (function (){
var statearr_43963 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43963[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43542__auto__);

(statearr_43963[(1)] = (1));

return statearr_43963;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43542__auto____1 = (function (state_43937){
while(true){
var ret_value__43543__auto__ = (function (){try{while(true){
var result__43544__auto__ = switch__43541__auto__.call(null,state_43937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43544__auto__;
}
break;
}
}catch (e43964){if((e43964 instanceof Object)){
var ex__43545__auto__ = e43964;
var statearr_43965_44023 = state_43937;
(statearr_43965_44023[(5)] = ex__43545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44024 = state_43937;
state_43937 = G__44024;
continue;
} else {
return ret_value__43543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43542__auto__ = function(state_43937){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43542__auto____1.call(this,state_43937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43542__auto__;
})()
;})(switch__43541__auto__,c__43631__auto__,jobs,results,process,async))
})();
var state__43633__auto__ = (function (){var statearr_43966 = f__43632__auto__.call(null);
(statearr_43966[(6)] = c__43631__auto__);

return statearr_43966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43633__auto__);
});})(c__43631__auto__,jobs,results,process,async))
);

return c__43631__auto__;
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
var G__44026 = arguments.length;
switch (G__44026) {
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
var G__44029 = arguments.length;
switch (G__44029) {
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
var G__44032 = arguments.length;
switch (G__44032) {
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
var c__43631__auto___44081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43631__auto___44081,tc,fc){
return (function (){
var f__43632__auto__ = (function (){var switch__43541__auto__ = ((function (c__43631__auto___44081,tc,fc){
return (function (state_44058){
var state_val_44059 = (state_44058[(1)]);
if((state_val_44059 === (7))){
var inst_44054 = (state_44058[(2)]);
var state_44058__$1 = state_44058;
var statearr_44060_44082 = state_44058__$1;
(statearr_44060_44082[(2)] = inst_44054);

(statearr_44060_44082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44059 === (1))){
var state_44058__$1 = state_44058;
var statearr_44061_44083 = state_44058__$1;
(statearr_44061_44083[(2)] = null);

(statearr_44061_44083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44059 === (4))){
var inst_44035 = (state_44058[(7)]);
var inst_44035__$1 = (state_44058[(2)]);
var inst_44036 = (inst_44035__$1 == null);
var state_44058__$1 = (function (){var statearr_44062 = state_44058;
(statearr_44062[(7)] = inst_44035__$1);

return statearr_44062;
})();
if(cljs.core.truth_(inst_44036)){
var statearr_44063_44084 = state_44058__$1;
(statearr_44063_44084[(1)] = (5));

} else {
var statearr_44064_44085 = state_44058__$1;
(statearr_44064_44085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44059 === (13))){
var state_44058__$1 = state_44058;
var statearr_44065_44086 = state_44058__$1;
(statearr_44065_44086[(2)] = null);

(statearr_44065_44086[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44059 === (6))){
var inst_44035 = (state_44058[(7)]);
var inst_44041 = p.call(null,inst_44035);
var state_44058__$1 = state_44058;
if(cljs.core.truth_(inst_44041)){
var statearr_44066_44087 = state_44058__$1;
(statearr_44066_44087[(1)] = (9));

} else {
var statearr_44067_44088 = state_44058__$1;
(statearr_44067_44088[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44059 === (3))){
var inst_44056 = (state_44058[(2)]);
var state_44058__$1 = state_44058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44058__$1,inst_44056);
} else {
if((state_val_44059 === (12))){
var state_44058__$1 = state_44058;
var statearr_44068_44089 = state_44058__$1;
(statearr_44068_44089[(2)] = null);

(statearr_44068_44089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44059 === (2))){
var state_44058__$1 = state_44058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44058__$1,(4),ch);
} else {
if((state_val_44059 === (11))){
var inst_44035 = (state_44058[(7)]);
var inst_44045 = (state_44058[(2)]);
var state_44058__$1 = state_44058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44058__$1,(8),inst_44045,inst_44035);
} else {
if((state_val_44059 === (9))){
var state_44058__$1 = state_44058;
var statearr_44069_44090 = state_44058__$1;
(statearr_44069_44090[(2)] = tc);

(statearr_44069_44090[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44059 === (5))){
var inst_44038 = cljs.core.async.close_BANG_.call(null,tc);
var inst_44039 = cljs.core.async.close_BANG_.call(null,fc);
var state_44058__$1 = (function (){var statearr_44070 = state_44058;
(statearr_44070[(8)] = inst_44038);

return statearr_44070;
})();
var statearr_44071_44091 = state_44058__$1;
(statearr_44071_44091[(2)] = inst_44039);

(statearr_44071_44091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44059 === (14))){
var inst_44052 = (state_44058[(2)]);
var state_44058__$1 = state_44058;
var statearr_44072_44092 = state_44058__$1;
(statearr_44072_44092[(2)] = inst_44052);

(statearr_44072_44092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44059 === (10))){
var state_44058__$1 = state_44058;
var statearr_44073_44093 = state_44058__$1;
(statearr_44073_44093[(2)] = fc);

(statearr_44073_44093[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44059 === (8))){
var inst_44047 = (state_44058[(2)]);
var state_44058__$1 = state_44058;
if(cljs.core.truth_(inst_44047)){
var statearr_44074_44094 = state_44058__$1;
(statearr_44074_44094[(1)] = (12));

} else {
var statearr_44075_44095 = state_44058__$1;
(statearr_44075_44095[(1)] = (13));

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
});})(c__43631__auto___44081,tc,fc))
;
return ((function (switch__43541__auto__,c__43631__auto___44081,tc,fc){
return (function() {
var cljs$core$async$state_machine__43542__auto__ = null;
var cljs$core$async$state_machine__43542__auto____0 = (function (){
var statearr_44076 = [null,null,null,null,null,null,null,null,null];
(statearr_44076[(0)] = cljs$core$async$state_machine__43542__auto__);

(statearr_44076[(1)] = (1));

return statearr_44076;
});
var cljs$core$async$state_machine__43542__auto____1 = (function (state_44058){
while(true){
var ret_value__43543__auto__ = (function (){try{while(true){
var result__43544__auto__ = switch__43541__auto__.call(null,state_44058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43544__auto__;
}
break;
}
}catch (e44077){if((e44077 instanceof Object)){
var ex__43545__auto__ = e44077;
var statearr_44078_44096 = state_44058;
(statearr_44078_44096[(5)] = ex__43545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44097 = state_44058;
state_44058 = G__44097;
continue;
} else {
return ret_value__43543__auto__;
}
break;
}
});
cljs$core$async$state_machine__43542__auto__ = function(state_44058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43542__auto____1.call(this,state_44058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43542__auto____0;
cljs$core$async$state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43542__auto____1;
return cljs$core$async$state_machine__43542__auto__;
})()
;})(switch__43541__auto__,c__43631__auto___44081,tc,fc))
})();
var state__43633__auto__ = (function (){var statearr_44079 = f__43632__auto__.call(null);
(statearr_44079[(6)] = c__43631__auto___44081);

return statearr_44079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43633__auto__);
});})(c__43631__auto___44081,tc,fc))
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
var c__43631__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43631__auto__){
return (function (){
var f__43632__auto__ = (function (){var switch__43541__auto__ = ((function (c__43631__auto__){
return (function (state_44118){
var state_val_44119 = (state_44118[(1)]);
if((state_val_44119 === (7))){
var inst_44114 = (state_44118[(2)]);
var state_44118__$1 = state_44118;
var statearr_44120_44138 = state_44118__$1;
(statearr_44120_44138[(2)] = inst_44114);

(statearr_44120_44138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44119 === (1))){
var inst_44098 = init;
var state_44118__$1 = (function (){var statearr_44121 = state_44118;
(statearr_44121[(7)] = inst_44098);

return statearr_44121;
})();
var statearr_44122_44139 = state_44118__$1;
(statearr_44122_44139[(2)] = null);

(statearr_44122_44139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44119 === (4))){
var inst_44101 = (state_44118[(8)]);
var inst_44101__$1 = (state_44118[(2)]);
var inst_44102 = (inst_44101__$1 == null);
var state_44118__$1 = (function (){var statearr_44123 = state_44118;
(statearr_44123[(8)] = inst_44101__$1);

return statearr_44123;
})();
if(cljs.core.truth_(inst_44102)){
var statearr_44124_44140 = state_44118__$1;
(statearr_44124_44140[(1)] = (5));

} else {
var statearr_44125_44141 = state_44118__$1;
(statearr_44125_44141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44119 === (6))){
var inst_44105 = (state_44118[(9)]);
var inst_44101 = (state_44118[(8)]);
var inst_44098 = (state_44118[(7)]);
var inst_44105__$1 = f.call(null,inst_44098,inst_44101);
var inst_44106 = cljs.core.reduced_QMARK_.call(null,inst_44105__$1);
var state_44118__$1 = (function (){var statearr_44126 = state_44118;
(statearr_44126[(9)] = inst_44105__$1);

return statearr_44126;
})();
if(inst_44106){
var statearr_44127_44142 = state_44118__$1;
(statearr_44127_44142[(1)] = (8));

} else {
var statearr_44128_44143 = state_44118__$1;
(statearr_44128_44143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44119 === (3))){
var inst_44116 = (state_44118[(2)]);
var state_44118__$1 = state_44118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44118__$1,inst_44116);
} else {
if((state_val_44119 === (2))){
var state_44118__$1 = state_44118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44118__$1,(4),ch);
} else {
if((state_val_44119 === (9))){
var inst_44105 = (state_44118[(9)]);
var inst_44098 = inst_44105;
var state_44118__$1 = (function (){var statearr_44129 = state_44118;
(statearr_44129[(7)] = inst_44098);

return statearr_44129;
})();
var statearr_44130_44144 = state_44118__$1;
(statearr_44130_44144[(2)] = null);

(statearr_44130_44144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44119 === (5))){
var inst_44098 = (state_44118[(7)]);
var state_44118__$1 = state_44118;
var statearr_44131_44145 = state_44118__$1;
(statearr_44131_44145[(2)] = inst_44098);

(statearr_44131_44145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44119 === (10))){
var inst_44112 = (state_44118[(2)]);
var state_44118__$1 = state_44118;
var statearr_44132_44146 = state_44118__$1;
(statearr_44132_44146[(2)] = inst_44112);

(statearr_44132_44146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44119 === (8))){
var inst_44105 = (state_44118[(9)]);
var inst_44108 = cljs.core.deref.call(null,inst_44105);
var state_44118__$1 = state_44118;
var statearr_44133_44147 = state_44118__$1;
(statearr_44133_44147[(2)] = inst_44108);

(statearr_44133_44147[(1)] = (10));


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
});})(c__43631__auto__))
;
return ((function (switch__43541__auto__,c__43631__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__43542__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43542__auto____0 = (function (){
var statearr_44134 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44134[(0)] = cljs$core$async$reduce_$_state_machine__43542__auto__);

(statearr_44134[(1)] = (1));

return statearr_44134;
});
var cljs$core$async$reduce_$_state_machine__43542__auto____1 = (function (state_44118){
while(true){
var ret_value__43543__auto__ = (function (){try{while(true){
var result__43544__auto__ = switch__43541__auto__.call(null,state_44118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43544__auto__;
}
break;
}
}catch (e44135){if((e44135 instanceof Object)){
var ex__43545__auto__ = e44135;
var statearr_44136_44148 = state_44118;
(statearr_44136_44148[(5)] = ex__43545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44149 = state_44118;
state_44118 = G__44149;
continue;
} else {
return ret_value__43543__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43542__auto__ = function(state_44118){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43542__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43542__auto____1.call(this,state_44118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43542__auto____0;
cljs$core$async$reduce_$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43542__auto____1;
return cljs$core$async$reduce_$_state_machine__43542__auto__;
})()
;})(switch__43541__auto__,c__43631__auto__))
})();
var state__43633__auto__ = (function (){var statearr_44137 = f__43632__auto__.call(null);
(statearr_44137[(6)] = c__43631__auto__);

return statearr_44137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43633__auto__);
});})(c__43631__auto__))
);

return c__43631__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__43631__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43631__auto__,f__$1){
return (function (){
var f__43632__auto__ = (function (){var switch__43541__auto__ = ((function (c__43631__auto__,f__$1){
return (function (state_44155){
var state_val_44156 = (state_44155[(1)]);
if((state_val_44156 === (1))){
var inst_44150 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_44155__$1 = state_44155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44155__$1,(2),inst_44150);
} else {
if((state_val_44156 === (2))){
var inst_44152 = (state_44155[(2)]);
var inst_44153 = f__$1.call(null,inst_44152);
var state_44155__$1 = state_44155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44155__$1,inst_44153);
} else {
return null;
}
}
});})(c__43631__auto__,f__$1))
;
return ((function (switch__43541__auto__,c__43631__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__43542__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43542__auto____0 = (function (){
var statearr_44157 = [null,null,null,null,null,null,null];
(statearr_44157[(0)] = cljs$core$async$transduce_$_state_machine__43542__auto__);

(statearr_44157[(1)] = (1));

return statearr_44157;
});
var cljs$core$async$transduce_$_state_machine__43542__auto____1 = (function (state_44155){
while(true){
var ret_value__43543__auto__ = (function (){try{while(true){
var result__43544__auto__ = switch__43541__auto__.call(null,state_44155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43544__auto__;
}
break;
}
}catch (e44158){if((e44158 instanceof Object)){
var ex__43545__auto__ = e44158;
var statearr_44159_44161 = state_44155;
(statearr_44159_44161[(5)] = ex__43545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44162 = state_44155;
state_44155 = G__44162;
continue;
} else {
return ret_value__43543__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43542__auto__ = function(state_44155){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43542__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43542__auto____1.call(this,state_44155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43542__auto____0;
cljs$core$async$transduce_$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43542__auto____1;
return cljs$core$async$transduce_$_state_machine__43542__auto__;
})()
;})(switch__43541__auto__,c__43631__auto__,f__$1))
})();
var state__43633__auto__ = (function (){var statearr_44160 = f__43632__auto__.call(null);
(statearr_44160[(6)] = c__43631__auto__);

return statearr_44160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43633__auto__);
});})(c__43631__auto__,f__$1))
);

return c__43631__auto__;
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
var G__44164 = arguments.length;
switch (G__44164) {
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
var c__43631__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43631__auto__){
return (function (){
var f__43632__auto__ = (function (){var switch__43541__auto__ = ((function (c__43631__auto__){
return (function (state_44189){
var state_val_44190 = (state_44189[(1)]);
if((state_val_44190 === (7))){
var inst_44171 = (state_44189[(2)]);
var state_44189__$1 = state_44189;
var statearr_44191_44212 = state_44189__$1;
(statearr_44191_44212[(2)] = inst_44171);

(statearr_44191_44212[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44190 === (1))){
var inst_44165 = cljs.core.seq.call(null,coll);
var inst_44166 = inst_44165;
var state_44189__$1 = (function (){var statearr_44192 = state_44189;
(statearr_44192[(7)] = inst_44166);

return statearr_44192;
})();
var statearr_44193_44213 = state_44189__$1;
(statearr_44193_44213[(2)] = null);

(statearr_44193_44213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44190 === (4))){
var inst_44166 = (state_44189[(7)]);
var inst_44169 = cljs.core.first.call(null,inst_44166);
var state_44189__$1 = state_44189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44189__$1,(7),ch,inst_44169);
} else {
if((state_val_44190 === (13))){
var inst_44183 = (state_44189[(2)]);
var state_44189__$1 = state_44189;
var statearr_44194_44214 = state_44189__$1;
(statearr_44194_44214[(2)] = inst_44183);

(statearr_44194_44214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44190 === (6))){
var inst_44174 = (state_44189[(2)]);
var state_44189__$1 = state_44189;
if(cljs.core.truth_(inst_44174)){
var statearr_44195_44215 = state_44189__$1;
(statearr_44195_44215[(1)] = (8));

} else {
var statearr_44196_44216 = state_44189__$1;
(statearr_44196_44216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44190 === (3))){
var inst_44187 = (state_44189[(2)]);
var state_44189__$1 = state_44189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44189__$1,inst_44187);
} else {
if((state_val_44190 === (12))){
var state_44189__$1 = state_44189;
var statearr_44197_44217 = state_44189__$1;
(statearr_44197_44217[(2)] = null);

(statearr_44197_44217[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44190 === (2))){
var inst_44166 = (state_44189[(7)]);
var state_44189__$1 = state_44189;
if(cljs.core.truth_(inst_44166)){
var statearr_44198_44218 = state_44189__$1;
(statearr_44198_44218[(1)] = (4));

} else {
var statearr_44199_44219 = state_44189__$1;
(statearr_44199_44219[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44190 === (11))){
var inst_44180 = cljs.core.async.close_BANG_.call(null,ch);
var state_44189__$1 = state_44189;
var statearr_44200_44220 = state_44189__$1;
(statearr_44200_44220[(2)] = inst_44180);

(statearr_44200_44220[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44190 === (9))){
var state_44189__$1 = state_44189;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44201_44221 = state_44189__$1;
(statearr_44201_44221[(1)] = (11));

} else {
var statearr_44202_44222 = state_44189__$1;
(statearr_44202_44222[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44190 === (5))){
var inst_44166 = (state_44189[(7)]);
var state_44189__$1 = state_44189;
var statearr_44203_44223 = state_44189__$1;
(statearr_44203_44223[(2)] = inst_44166);

(statearr_44203_44223[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44190 === (10))){
var inst_44185 = (state_44189[(2)]);
var state_44189__$1 = state_44189;
var statearr_44204_44224 = state_44189__$1;
(statearr_44204_44224[(2)] = inst_44185);

(statearr_44204_44224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44190 === (8))){
var inst_44166 = (state_44189[(7)]);
var inst_44176 = cljs.core.next.call(null,inst_44166);
var inst_44166__$1 = inst_44176;
var state_44189__$1 = (function (){var statearr_44205 = state_44189;
(statearr_44205[(7)] = inst_44166__$1);

return statearr_44205;
})();
var statearr_44206_44225 = state_44189__$1;
(statearr_44206_44225[(2)] = null);

(statearr_44206_44225[(1)] = (2));


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
});})(c__43631__auto__))
;
return ((function (switch__43541__auto__,c__43631__auto__){
return (function() {
var cljs$core$async$state_machine__43542__auto__ = null;
var cljs$core$async$state_machine__43542__auto____0 = (function (){
var statearr_44207 = [null,null,null,null,null,null,null,null];
(statearr_44207[(0)] = cljs$core$async$state_machine__43542__auto__);

(statearr_44207[(1)] = (1));

return statearr_44207;
});
var cljs$core$async$state_machine__43542__auto____1 = (function (state_44189){
while(true){
var ret_value__43543__auto__ = (function (){try{while(true){
var result__43544__auto__ = switch__43541__auto__.call(null,state_44189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43544__auto__;
}
break;
}
}catch (e44208){if((e44208 instanceof Object)){
var ex__43545__auto__ = e44208;
var statearr_44209_44226 = state_44189;
(statearr_44209_44226[(5)] = ex__43545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44227 = state_44189;
state_44189 = G__44227;
continue;
} else {
return ret_value__43543__auto__;
}
break;
}
});
cljs$core$async$state_machine__43542__auto__ = function(state_44189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43542__auto____1.call(this,state_44189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43542__auto____0;
cljs$core$async$state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43542__auto____1;
return cljs$core$async$state_machine__43542__auto__;
})()
;})(switch__43541__auto__,c__43631__auto__))
})();
var state__43633__auto__ = (function (){var statearr_44210 = f__43632__auto__.call(null);
(statearr_44210[(6)] = c__43631__auto__);

return statearr_44210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43633__auto__);
});})(c__43631__auto__))
);

return c__43631__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44228 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44228 = (function (ch,cs,meta44229){
this.ch = ch;
this.cs = cs;
this.meta44229 = meta44229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_44230,meta44229__$1){
var self__ = this;
var _44230__$1 = this;
return (new cljs.core.async.t_cljs$core$async44228(self__.ch,self__.cs,meta44229__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async44228.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_44230){
var self__ = this;
var _44230__$1 = this;
return self__.meta44229;
});})(cs))
;

cljs.core.async.t_cljs$core$async44228.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44228.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async44228.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44228.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44228.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44228.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44228.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44229","meta44229",-1071039704,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async44228.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44228.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44228";

cljs.core.async.t_cljs$core$async44228.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async44228");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44228.
 */
cljs.core.async.__GT_t_cljs$core$async44228 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async44228(ch__$1,cs__$1,meta44229){
return (new cljs.core.async.t_cljs$core$async44228(ch__$1,cs__$1,meta44229));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async44228(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__43631__auto___44450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43631__auto___44450,cs,m,dchan,dctr,done){
return (function (){
var f__43632__auto__ = (function (){var switch__43541__auto__ = ((function (c__43631__auto___44450,cs,m,dchan,dctr,done){
return (function (state_44365){
var state_val_44366 = (state_44365[(1)]);
if((state_val_44366 === (7))){
var inst_44361 = (state_44365[(2)]);
var state_44365__$1 = state_44365;
var statearr_44367_44451 = state_44365__$1;
(statearr_44367_44451[(2)] = inst_44361);

(statearr_44367_44451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (20))){
var inst_44264 = (state_44365[(7)]);
var inst_44276 = cljs.core.first.call(null,inst_44264);
var inst_44277 = cljs.core.nth.call(null,inst_44276,(0),null);
var inst_44278 = cljs.core.nth.call(null,inst_44276,(1),null);
var state_44365__$1 = (function (){var statearr_44368 = state_44365;
(statearr_44368[(8)] = inst_44277);

return statearr_44368;
})();
if(cljs.core.truth_(inst_44278)){
var statearr_44369_44452 = state_44365__$1;
(statearr_44369_44452[(1)] = (22));

} else {
var statearr_44370_44453 = state_44365__$1;
(statearr_44370_44453[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (27))){
var inst_44313 = (state_44365[(9)]);
var inst_44233 = (state_44365[(10)]);
var inst_44306 = (state_44365[(11)]);
var inst_44308 = (state_44365[(12)]);
var inst_44313__$1 = cljs.core._nth.call(null,inst_44306,inst_44308);
var inst_44314 = cljs.core.async.put_BANG_.call(null,inst_44313__$1,inst_44233,done);
var state_44365__$1 = (function (){var statearr_44371 = state_44365;
(statearr_44371[(9)] = inst_44313__$1);

return statearr_44371;
})();
if(cljs.core.truth_(inst_44314)){
var statearr_44372_44454 = state_44365__$1;
(statearr_44372_44454[(1)] = (30));

} else {
var statearr_44373_44455 = state_44365__$1;
(statearr_44373_44455[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (1))){
var state_44365__$1 = state_44365;
var statearr_44374_44456 = state_44365__$1;
(statearr_44374_44456[(2)] = null);

(statearr_44374_44456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (24))){
var inst_44264 = (state_44365[(7)]);
var inst_44283 = (state_44365[(2)]);
var inst_44284 = cljs.core.next.call(null,inst_44264);
var inst_44242 = inst_44284;
var inst_44243 = null;
var inst_44244 = (0);
var inst_44245 = (0);
var state_44365__$1 = (function (){var statearr_44375 = state_44365;
(statearr_44375[(13)] = inst_44244);

(statearr_44375[(14)] = inst_44242);

(statearr_44375[(15)] = inst_44243);

(statearr_44375[(16)] = inst_44245);

(statearr_44375[(17)] = inst_44283);

return statearr_44375;
})();
var statearr_44376_44457 = state_44365__$1;
(statearr_44376_44457[(2)] = null);

(statearr_44376_44457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (39))){
var state_44365__$1 = state_44365;
var statearr_44380_44458 = state_44365__$1;
(statearr_44380_44458[(2)] = null);

(statearr_44380_44458[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (4))){
var inst_44233 = (state_44365[(10)]);
var inst_44233__$1 = (state_44365[(2)]);
var inst_44234 = (inst_44233__$1 == null);
var state_44365__$1 = (function (){var statearr_44381 = state_44365;
(statearr_44381[(10)] = inst_44233__$1);

return statearr_44381;
})();
if(cljs.core.truth_(inst_44234)){
var statearr_44382_44459 = state_44365__$1;
(statearr_44382_44459[(1)] = (5));

} else {
var statearr_44383_44460 = state_44365__$1;
(statearr_44383_44460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (15))){
var inst_44244 = (state_44365[(13)]);
var inst_44242 = (state_44365[(14)]);
var inst_44243 = (state_44365[(15)]);
var inst_44245 = (state_44365[(16)]);
var inst_44260 = (state_44365[(2)]);
var inst_44261 = (inst_44245 + (1));
var tmp44377 = inst_44244;
var tmp44378 = inst_44242;
var tmp44379 = inst_44243;
var inst_44242__$1 = tmp44378;
var inst_44243__$1 = tmp44379;
var inst_44244__$1 = tmp44377;
var inst_44245__$1 = inst_44261;
var state_44365__$1 = (function (){var statearr_44384 = state_44365;
(statearr_44384[(13)] = inst_44244__$1);

(statearr_44384[(14)] = inst_44242__$1);

(statearr_44384[(15)] = inst_44243__$1);

(statearr_44384[(16)] = inst_44245__$1);

(statearr_44384[(18)] = inst_44260);

return statearr_44384;
})();
var statearr_44385_44461 = state_44365__$1;
(statearr_44385_44461[(2)] = null);

(statearr_44385_44461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (21))){
var inst_44287 = (state_44365[(2)]);
var state_44365__$1 = state_44365;
var statearr_44389_44462 = state_44365__$1;
(statearr_44389_44462[(2)] = inst_44287);

(statearr_44389_44462[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (31))){
var inst_44313 = (state_44365[(9)]);
var inst_44317 = done.call(null,null);
var inst_44318 = cljs.core.async.untap_STAR_.call(null,m,inst_44313);
var state_44365__$1 = (function (){var statearr_44390 = state_44365;
(statearr_44390[(19)] = inst_44317);

return statearr_44390;
})();
var statearr_44391_44463 = state_44365__$1;
(statearr_44391_44463[(2)] = inst_44318);

(statearr_44391_44463[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (32))){
var inst_44307 = (state_44365[(20)]);
var inst_44305 = (state_44365[(21)]);
var inst_44306 = (state_44365[(11)]);
var inst_44308 = (state_44365[(12)]);
var inst_44320 = (state_44365[(2)]);
var inst_44321 = (inst_44308 + (1));
var tmp44386 = inst_44307;
var tmp44387 = inst_44305;
var tmp44388 = inst_44306;
var inst_44305__$1 = tmp44387;
var inst_44306__$1 = tmp44388;
var inst_44307__$1 = tmp44386;
var inst_44308__$1 = inst_44321;
var state_44365__$1 = (function (){var statearr_44392 = state_44365;
(statearr_44392[(20)] = inst_44307__$1);

(statearr_44392[(22)] = inst_44320);

(statearr_44392[(21)] = inst_44305__$1);

(statearr_44392[(11)] = inst_44306__$1);

(statearr_44392[(12)] = inst_44308__$1);

return statearr_44392;
})();
var statearr_44393_44464 = state_44365__$1;
(statearr_44393_44464[(2)] = null);

(statearr_44393_44464[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (40))){
var inst_44333 = (state_44365[(23)]);
var inst_44337 = done.call(null,null);
var inst_44338 = cljs.core.async.untap_STAR_.call(null,m,inst_44333);
var state_44365__$1 = (function (){var statearr_44394 = state_44365;
(statearr_44394[(24)] = inst_44337);

return statearr_44394;
})();
var statearr_44395_44465 = state_44365__$1;
(statearr_44395_44465[(2)] = inst_44338);

(statearr_44395_44465[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (33))){
var inst_44324 = (state_44365[(25)]);
var inst_44326 = cljs.core.chunked_seq_QMARK_.call(null,inst_44324);
var state_44365__$1 = state_44365;
if(inst_44326){
var statearr_44396_44466 = state_44365__$1;
(statearr_44396_44466[(1)] = (36));

} else {
var statearr_44397_44467 = state_44365__$1;
(statearr_44397_44467[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (13))){
var inst_44254 = (state_44365[(26)]);
var inst_44257 = cljs.core.async.close_BANG_.call(null,inst_44254);
var state_44365__$1 = state_44365;
var statearr_44398_44468 = state_44365__$1;
(statearr_44398_44468[(2)] = inst_44257);

(statearr_44398_44468[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (22))){
var inst_44277 = (state_44365[(8)]);
var inst_44280 = cljs.core.async.close_BANG_.call(null,inst_44277);
var state_44365__$1 = state_44365;
var statearr_44399_44469 = state_44365__$1;
(statearr_44399_44469[(2)] = inst_44280);

(statearr_44399_44469[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (36))){
var inst_44324 = (state_44365[(25)]);
var inst_44328 = cljs.core.chunk_first.call(null,inst_44324);
var inst_44329 = cljs.core.chunk_rest.call(null,inst_44324);
var inst_44330 = cljs.core.count.call(null,inst_44328);
var inst_44305 = inst_44329;
var inst_44306 = inst_44328;
var inst_44307 = inst_44330;
var inst_44308 = (0);
var state_44365__$1 = (function (){var statearr_44400 = state_44365;
(statearr_44400[(20)] = inst_44307);

(statearr_44400[(21)] = inst_44305);

(statearr_44400[(11)] = inst_44306);

(statearr_44400[(12)] = inst_44308);

return statearr_44400;
})();
var statearr_44401_44470 = state_44365__$1;
(statearr_44401_44470[(2)] = null);

(statearr_44401_44470[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (41))){
var inst_44324 = (state_44365[(25)]);
var inst_44340 = (state_44365[(2)]);
var inst_44341 = cljs.core.next.call(null,inst_44324);
var inst_44305 = inst_44341;
var inst_44306 = null;
var inst_44307 = (0);
var inst_44308 = (0);
var state_44365__$1 = (function (){var statearr_44402 = state_44365;
(statearr_44402[(20)] = inst_44307);

(statearr_44402[(27)] = inst_44340);

(statearr_44402[(21)] = inst_44305);

(statearr_44402[(11)] = inst_44306);

(statearr_44402[(12)] = inst_44308);

return statearr_44402;
})();
var statearr_44403_44471 = state_44365__$1;
(statearr_44403_44471[(2)] = null);

(statearr_44403_44471[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (43))){
var state_44365__$1 = state_44365;
var statearr_44404_44472 = state_44365__$1;
(statearr_44404_44472[(2)] = null);

(statearr_44404_44472[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (29))){
var inst_44349 = (state_44365[(2)]);
var state_44365__$1 = state_44365;
var statearr_44405_44473 = state_44365__$1;
(statearr_44405_44473[(2)] = inst_44349);

(statearr_44405_44473[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (44))){
var inst_44358 = (state_44365[(2)]);
var state_44365__$1 = (function (){var statearr_44406 = state_44365;
(statearr_44406[(28)] = inst_44358);

return statearr_44406;
})();
var statearr_44407_44474 = state_44365__$1;
(statearr_44407_44474[(2)] = null);

(statearr_44407_44474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (6))){
var inst_44297 = (state_44365[(29)]);
var inst_44296 = cljs.core.deref.call(null,cs);
var inst_44297__$1 = cljs.core.keys.call(null,inst_44296);
var inst_44298 = cljs.core.count.call(null,inst_44297__$1);
var inst_44299 = cljs.core.reset_BANG_.call(null,dctr,inst_44298);
var inst_44304 = cljs.core.seq.call(null,inst_44297__$1);
var inst_44305 = inst_44304;
var inst_44306 = null;
var inst_44307 = (0);
var inst_44308 = (0);
var state_44365__$1 = (function (){var statearr_44408 = state_44365;
(statearr_44408[(20)] = inst_44307);

(statearr_44408[(30)] = inst_44299);

(statearr_44408[(29)] = inst_44297__$1);

(statearr_44408[(21)] = inst_44305);

(statearr_44408[(11)] = inst_44306);

(statearr_44408[(12)] = inst_44308);

return statearr_44408;
})();
var statearr_44409_44475 = state_44365__$1;
(statearr_44409_44475[(2)] = null);

(statearr_44409_44475[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (28))){
var inst_44305 = (state_44365[(21)]);
var inst_44324 = (state_44365[(25)]);
var inst_44324__$1 = cljs.core.seq.call(null,inst_44305);
var state_44365__$1 = (function (){var statearr_44410 = state_44365;
(statearr_44410[(25)] = inst_44324__$1);

return statearr_44410;
})();
if(inst_44324__$1){
var statearr_44411_44476 = state_44365__$1;
(statearr_44411_44476[(1)] = (33));

} else {
var statearr_44412_44477 = state_44365__$1;
(statearr_44412_44477[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (25))){
var inst_44307 = (state_44365[(20)]);
var inst_44308 = (state_44365[(12)]);
var inst_44310 = (inst_44308 < inst_44307);
var inst_44311 = inst_44310;
var state_44365__$1 = state_44365;
if(cljs.core.truth_(inst_44311)){
var statearr_44413_44478 = state_44365__$1;
(statearr_44413_44478[(1)] = (27));

} else {
var statearr_44414_44479 = state_44365__$1;
(statearr_44414_44479[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (34))){
var state_44365__$1 = state_44365;
var statearr_44415_44480 = state_44365__$1;
(statearr_44415_44480[(2)] = null);

(statearr_44415_44480[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (17))){
var state_44365__$1 = state_44365;
var statearr_44416_44481 = state_44365__$1;
(statearr_44416_44481[(2)] = null);

(statearr_44416_44481[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (3))){
var inst_44363 = (state_44365[(2)]);
var state_44365__$1 = state_44365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44365__$1,inst_44363);
} else {
if((state_val_44366 === (12))){
var inst_44292 = (state_44365[(2)]);
var state_44365__$1 = state_44365;
var statearr_44417_44482 = state_44365__$1;
(statearr_44417_44482[(2)] = inst_44292);

(statearr_44417_44482[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (2))){
var state_44365__$1 = state_44365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44365__$1,(4),ch);
} else {
if((state_val_44366 === (23))){
var state_44365__$1 = state_44365;
var statearr_44418_44483 = state_44365__$1;
(statearr_44418_44483[(2)] = null);

(statearr_44418_44483[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (35))){
var inst_44347 = (state_44365[(2)]);
var state_44365__$1 = state_44365;
var statearr_44419_44484 = state_44365__$1;
(statearr_44419_44484[(2)] = inst_44347);

(statearr_44419_44484[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (19))){
var inst_44264 = (state_44365[(7)]);
var inst_44268 = cljs.core.chunk_first.call(null,inst_44264);
var inst_44269 = cljs.core.chunk_rest.call(null,inst_44264);
var inst_44270 = cljs.core.count.call(null,inst_44268);
var inst_44242 = inst_44269;
var inst_44243 = inst_44268;
var inst_44244 = inst_44270;
var inst_44245 = (0);
var state_44365__$1 = (function (){var statearr_44420 = state_44365;
(statearr_44420[(13)] = inst_44244);

(statearr_44420[(14)] = inst_44242);

(statearr_44420[(15)] = inst_44243);

(statearr_44420[(16)] = inst_44245);

return statearr_44420;
})();
var statearr_44421_44485 = state_44365__$1;
(statearr_44421_44485[(2)] = null);

(statearr_44421_44485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (11))){
var inst_44242 = (state_44365[(14)]);
var inst_44264 = (state_44365[(7)]);
var inst_44264__$1 = cljs.core.seq.call(null,inst_44242);
var state_44365__$1 = (function (){var statearr_44422 = state_44365;
(statearr_44422[(7)] = inst_44264__$1);

return statearr_44422;
})();
if(inst_44264__$1){
var statearr_44423_44486 = state_44365__$1;
(statearr_44423_44486[(1)] = (16));

} else {
var statearr_44424_44487 = state_44365__$1;
(statearr_44424_44487[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (9))){
var inst_44294 = (state_44365[(2)]);
var state_44365__$1 = state_44365;
var statearr_44425_44488 = state_44365__$1;
(statearr_44425_44488[(2)] = inst_44294);

(statearr_44425_44488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (5))){
var inst_44240 = cljs.core.deref.call(null,cs);
var inst_44241 = cljs.core.seq.call(null,inst_44240);
var inst_44242 = inst_44241;
var inst_44243 = null;
var inst_44244 = (0);
var inst_44245 = (0);
var state_44365__$1 = (function (){var statearr_44426 = state_44365;
(statearr_44426[(13)] = inst_44244);

(statearr_44426[(14)] = inst_44242);

(statearr_44426[(15)] = inst_44243);

(statearr_44426[(16)] = inst_44245);

return statearr_44426;
})();
var statearr_44427_44489 = state_44365__$1;
(statearr_44427_44489[(2)] = null);

(statearr_44427_44489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (14))){
var state_44365__$1 = state_44365;
var statearr_44428_44490 = state_44365__$1;
(statearr_44428_44490[(2)] = null);

(statearr_44428_44490[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (45))){
var inst_44355 = (state_44365[(2)]);
var state_44365__$1 = state_44365;
var statearr_44429_44491 = state_44365__$1;
(statearr_44429_44491[(2)] = inst_44355);

(statearr_44429_44491[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (26))){
var inst_44297 = (state_44365[(29)]);
var inst_44351 = (state_44365[(2)]);
var inst_44352 = cljs.core.seq.call(null,inst_44297);
var state_44365__$1 = (function (){var statearr_44430 = state_44365;
(statearr_44430[(31)] = inst_44351);

return statearr_44430;
})();
if(inst_44352){
var statearr_44431_44492 = state_44365__$1;
(statearr_44431_44492[(1)] = (42));

} else {
var statearr_44432_44493 = state_44365__$1;
(statearr_44432_44493[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (16))){
var inst_44264 = (state_44365[(7)]);
var inst_44266 = cljs.core.chunked_seq_QMARK_.call(null,inst_44264);
var state_44365__$1 = state_44365;
if(inst_44266){
var statearr_44433_44494 = state_44365__$1;
(statearr_44433_44494[(1)] = (19));

} else {
var statearr_44434_44495 = state_44365__$1;
(statearr_44434_44495[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (38))){
var inst_44344 = (state_44365[(2)]);
var state_44365__$1 = state_44365;
var statearr_44435_44496 = state_44365__$1;
(statearr_44435_44496[(2)] = inst_44344);

(statearr_44435_44496[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (30))){
var state_44365__$1 = state_44365;
var statearr_44436_44497 = state_44365__$1;
(statearr_44436_44497[(2)] = null);

(statearr_44436_44497[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (10))){
var inst_44243 = (state_44365[(15)]);
var inst_44245 = (state_44365[(16)]);
var inst_44253 = cljs.core._nth.call(null,inst_44243,inst_44245);
var inst_44254 = cljs.core.nth.call(null,inst_44253,(0),null);
var inst_44255 = cljs.core.nth.call(null,inst_44253,(1),null);
var state_44365__$1 = (function (){var statearr_44437 = state_44365;
(statearr_44437[(26)] = inst_44254);

return statearr_44437;
})();
if(cljs.core.truth_(inst_44255)){
var statearr_44438_44498 = state_44365__$1;
(statearr_44438_44498[(1)] = (13));

} else {
var statearr_44439_44499 = state_44365__$1;
(statearr_44439_44499[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (18))){
var inst_44290 = (state_44365[(2)]);
var state_44365__$1 = state_44365;
var statearr_44440_44500 = state_44365__$1;
(statearr_44440_44500[(2)] = inst_44290);

(statearr_44440_44500[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (42))){
var state_44365__$1 = state_44365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44365__$1,(45),dchan);
} else {
if((state_val_44366 === (37))){
var inst_44233 = (state_44365[(10)]);
var inst_44324 = (state_44365[(25)]);
var inst_44333 = (state_44365[(23)]);
var inst_44333__$1 = cljs.core.first.call(null,inst_44324);
var inst_44334 = cljs.core.async.put_BANG_.call(null,inst_44333__$1,inst_44233,done);
var state_44365__$1 = (function (){var statearr_44441 = state_44365;
(statearr_44441[(23)] = inst_44333__$1);

return statearr_44441;
})();
if(cljs.core.truth_(inst_44334)){
var statearr_44442_44501 = state_44365__$1;
(statearr_44442_44501[(1)] = (39));

} else {
var statearr_44443_44502 = state_44365__$1;
(statearr_44443_44502[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (8))){
var inst_44244 = (state_44365[(13)]);
var inst_44245 = (state_44365[(16)]);
var inst_44247 = (inst_44245 < inst_44244);
var inst_44248 = inst_44247;
var state_44365__$1 = state_44365;
if(cljs.core.truth_(inst_44248)){
var statearr_44444_44503 = state_44365__$1;
(statearr_44444_44503[(1)] = (10));

} else {
var statearr_44445_44504 = state_44365__$1;
(statearr_44445_44504[(1)] = (11));

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
});})(c__43631__auto___44450,cs,m,dchan,dctr,done))
;
return ((function (switch__43541__auto__,c__43631__auto___44450,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__43542__auto__ = null;
var cljs$core$async$mult_$_state_machine__43542__auto____0 = (function (){
var statearr_44446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44446[(0)] = cljs$core$async$mult_$_state_machine__43542__auto__);

(statearr_44446[(1)] = (1));

return statearr_44446;
});
var cljs$core$async$mult_$_state_machine__43542__auto____1 = (function (state_44365){
while(true){
var ret_value__43543__auto__ = (function (){try{while(true){
var result__43544__auto__ = switch__43541__auto__.call(null,state_44365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43544__auto__;
}
break;
}
}catch (e44447){if((e44447 instanceof Object)){
var ex__43545__auto__ = e44447;
var statearr_44448_44505 = state_44365;
(statearr_44448_44505[(5)] = ex__43545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44506 = state_44365;
state_44365 = G__44506;
continue;
} else {
return ret_value__43543__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43542__auto__ = function(state_44365){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43542__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43542__auto____1.call(this,state_44365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43542__auto____0;
cljs$core$async$mult_$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43542__auto____1;
return cljs$core$async$mult_$_state_machine__43542__auto__;
})()
;})(switch__43541__auto__,c__43631__auto___44450,cs,m,dchan,dctr,done))
})();
var state__43633__auto__ = (function (){var statearr_44449 = f__43632__auto__.call(null);
(statearr_44449[(6)] = c__43631__auto___44450);

return statearr_44449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43633__auto__);
});})(c__43631__auto___44450,cs,m,dchan,dctr,done))
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
var G__44508 = arguments.length;
switch (G__44508) {
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
var len__4517__auto___44520 = arguments.length;
var i__4518__auto___44521 = (0);
while(true){
if((i__4518__auto___44521 < len__4517__auto___44520)){
args__4520__auto__.push((arguments[i__4518__auto___44521]));

var G__44522 = (i__4518__auto___44521 + (1));
i__4518__auto___44521 = G__44522;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((3) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4521__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44514){
var map__44515 = p__44514;
var map__44515__$1 = ((((!((map__44515 == null)))?(((((map__44515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44515):map__44515);
var opts = map__44515__$1;
var statearr_44517_44523 = state;
(statearr_44517_44523[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__44515,map__44515__$1,opts){
return (function (val){
var statearr_44518_44524 = state;
(statearr_44518_44524[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__44515,map__44515__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_44519_44525 = state;
(statearr_44519_44525[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44510){
var G__44511 = cljs.core.first.call(null,seq44510);
var seq44510__$1 = cljs.core.next.call(null,seq44510);
var G__44512 = cljs.core.first.call(null,seq44510__$1);
var seq44510__$2 = cljs.core.next.call(null,seq44510__$1);
var G__44513 = cljs.core.first.call(null,seq44510__$2);
var seq44510__$3 = cljs.core.next.call(null,seq44510__$2);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44511,G__44512,G__44513,seq44510__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44526 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44526 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta44527){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta44527 = meta44527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44528,meta44527__$1){
var self__ = this;
var _44528__$1 = this;
return (new cljs.core.async.t_cljs$core$async44526(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta44527__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44526.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44528){
var self__ = this;
var _44528__$1 = this;
return self__.meta44527;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44526.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44526.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44526.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44526.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44526.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44526.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44526.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44526.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async44526.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta44527","meta44527",-1019378455,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44526.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44526";

cljs.core.async.t_cljs$core$async44526.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async44526");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44526.
 */
cljs.core.async.__GT_t_cljs$core$async44526 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async44526(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta44527){
return (new cljs.core.async.t_cljs$core$async44526(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta44527));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async44526(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43631__auto___44690 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43631__auto___44690,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__43632__auto__ = (function (){var switch__43541__auto__ = ((function (c__43631__auto___44690,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_44630){
var state_val_44631 = (state_44630[(1)]);
if((state_val_44631 === (7))){
var inst_44545 = (state_44630[(2)]);
var state_44630__$1 = state_44630;
var statearr_44632_44691 = state_44630__$1;
(statearr_44632_44691[(2)] = inst_44545);

(statearr_44632_44691[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (20))){
var inst_44557 = (state_44630[(7)]);
var state_44630__$1 = state_44630;
var statearr_44633_44692 = state_44630__$1;
(statearr_44633_44692[(2)] = inst_44557);

(statearr_44633_44692[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (27))){
var state_44630__$1 = state_44630;
var statearr_44634_44693 = state_44630__$1;
(statearr_44634_44693[(2)] = null);

(statearr_44634_44693[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (1))){
var inst_44532 = (state_44630[(8)]);
var inst_44532__$1 = calc_state.call(null);
var inst_44534 = (inst_44532__$1 == null);
var inst_44535 = cljs.core.not.call(null,inst_44534);
var state_44630__$1 = (function (){var statearr_44635 = state_44630;
(statearr_44635[(8)] = inst_44532__$1);

return statearr_44635;
})();
if(inst_44535){
var statearr_44636_44694 = state_44630__$1;
(statearr_44636_44694[(1)] = (2));

} else {
var statearr_44637_44695 = state_44630__$1;
(statearr_44637_44695[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (24))){
var inst_44590 = (state_44630[(9)]);
var inst_44581 = (state_44630[(10)]);
var inst_44604 = (state_44630[(11)]);
var inst_44604__$1 = inst_44581.call(null,inst_44590);
var state_44630__$1 = (function (){var statearr_44638 = state_44630;
(statearr_44638[(11)] = inst_44604__$1);

return statearr_44638;
})();
if(cljs.core.truth_(inst_44604__$1)){
var statearr_44639_44696 = state_44630__$1;
(statearr_44639_44696[(1)] = (29));

} else {
var statearr_44640_44697 = state_44630__$1;
(statearr_44640_44697[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (4))){
var inst_44548 = (state_44630[(2)]);
var state_44630__$1 = state_44630;
if(cljs.core.truth_(inst_44548)){
var statearr_44641_44698 = state_44630__$1;
(statearr_44641_44698[(1)] = (8));

} else {
var statearr_44642_44699 = state_44630__$1;
(statearr_44642_44699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (15))){
var inst_44575 = (state_44630[(2)]);
var state_44630__$1 = state_44630;
if(cljs.core.truth_(inst_44575)){
var statearr_44643_44700 = state_44630__$1;
(statearr_44643_44700[(1)] = (19));

} else {
var statearr_44644_44701 = state_44630__$1;
(statearr_44644_44701[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (21))){
var inst_44580 = (state_44630[(12)]);
var inst_44580__$1 = (state_44630[(2)]);
var inst_44581 = cljs.core.get.call(null,inst_44580__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44582 = cljs.core.get.call(null,inst_44580__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44583 = cljs.core.get.call(null,inst_44580__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44630__$1 = (function (){var statearr_44645 = state_44630;
(statearr_44645[(12)] = inst_44580__$1);

(statearr_44645[(13)] = inst_44582);

(statearr_44645[(10)] = inst_44581);

return statearr_44645;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_44630__$1,(22),inst_44583);
} else {
if((state_val_44631 === (31))){
var inst_44612 = (state_44630[(2)]);
var state_44630__$1 = state_44630;
if(cljs.core.truth_(inst_44612)){
var statearr_44646_44702 = state_44630__$1;
(statearr_44646_44702[(1)] = (32));

} else {
var statearr_44647_44703 = state_44630__$1;
(statearr_44647_44703[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (32))){
var inst_44589 = (state_44630[(14)]);
var state_44630__$1 = state_44630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44630__$1,(35),out,inst_44589);
} else {
if((state_val_44631 === (33))){
var inst_44580 = (state_44630[(12)]);
var inst_44557 = inst_44580;
var state_44630__$1 = (function (){var statearr_44648 = state_44630;
(statearr_44648[(7)] = inst_44557);

return statearr_44648;
})();
var statearr_44649_44704 = state_44630__$1;
(statearr_44649_44704[(2)] = null);

(statearr_44649_44704[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (13))){
var inst_44557 = (state_44630[(7)]);
var inst_44564 = inst_44557.cljs$lang$protocol_mask$partition0$;
var inst_44565 = (inst_44564 & (64));
var inst_44566 = inst_44557.cljs$core$ISeq$;
var inst_44567 = (cljs.core.PROTOCOL_SENTINEL === inst_44566);
var inst_44568 = ((inst_44565) || (inst_44567));
var state_44630__$1 = state_44630;
if(cljs.core.truth_(inst_44568)){
var statearr_44650_44705 = state_44630__$1;
(statearr_44650_44705[(1)] = (16));

} else {
var statearr_44651_44706 = state_44630__$1;
(statearr_44651_44706[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (22))){
var inst_44589 = (state_44630[(14)]);
var inst_44590 = (state_44630[(9)]);
var inst_44588 = (state_44630[(2)]);
var inst_44589__$1 = cljs.core.nth.call(null,inst_44588,(0),null);
var inst_44590__$1 = cljs.core.nth.call(null,inst_44588,(1),null);
var inst_44591 = (inst_44589__$1 == null);
var inst_44592 = cljs.core._EQ_.call(null,inst_44590__$1,change);
var inst_44593 = ((inst_44591) || (inst_44592));
var state_44630__$1 = (function (){var statearr_44652 = state_44630;
(statearr_44652[(14)] = inst_44589__$1);

(statearr_44652[(9)] = inst_44590__$1);

return statearr_44652;
})();
if(cljs.core.truth_(inst_44593)){
var statearr_44653_44707 = state_44630__$1;
(statearr_44653_44707[(1)] = (23));

} else {
var statearr_44654_44708 = state_44630__$1;
(statearr_44654_44708[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (36))){
var inst_44580 = (state_44630[(12)]);
var inst_44557 = inst_44580;
var state_44630__$1 = (function (){var statearr_44655 = state_44630;
(statearr_44655[(7)] = inst_44557);

return statearr_44655;
})();
var statearr_44656_44709 = state_44630__$1;
(statearr_44656_44709[(2)] = null);

(statearr_44656_44709[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (29))){
var inst_44604 = (state_44630[(11)]);
var state_44630__$1 = state_44630;
var statearr_44657_44710 = state_44630__$1;
(statearr_44657_44710[(2)] = inst_44604);

(statearr_44657_44710[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (6))){
var state_44630__$1 = state_44630;
var statearr_44658_44711 = state_44630__$1;
(statearr_44658_44711[(2)] = false);

(statearr_44658_44711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (28))){
var inst_44600 = (state_44630[(2)]);
var inst_44601 = calc_state.call(null);
var inst_44557 = inst_44601;
var state_44630__$1 = (function (){var statearr_44659 = state_44630;
(statearr_44659[(15)] = inst_44600);

(statearr_44659[(7)] = inst_44557);

return statearr_44659;
})();
var statearr_44660_44712 = state_44630__$1;
(statearr_44660_44712[(2)] = null);

(statearr_44660_44712[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (25))){
var inst_44626 = (state_44630[(2)]);
var state_44630__$1 = state_44630;
var statearr_44661_44713 = state_44630__$1;
(statearr_44661_44713[(2)] = inst_44626);

(statearr_44661_44713[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (34))){
var inst_44624 = (state_44630[(2)]);
var state_44630__$1 = state_44630;
var statearr_44662_44714 = state_44630__$1;
(statearr_44662_44714[(2)] = inst_44624);

(statearr_44662_44714[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (17))){
var state_44630__$1 = state_44630;
var statearr_44663_44715 = state_44630__$1;
(statearr_44663_44715[(2)] = false);

(statearr_44663_44715[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (3))){
var state_44630__$1 = state_44630;
var statearr_44664_44716 = state_44630__$1;
(statearr_44664_44716[(2)] = false);

(statearr_44664_44716[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (12))){
var inst_44628 = (state_44630[(2)]);
var state_44630__$1 = state_44630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44630__$1,inst_44628);
} else {
if((state_val_44631 === (2))){
var inst_44532 = (state_44630[(8)]);
var inst_44537 = inst_44532.cljs$lang$protocol_mask$partition0$;
var inst_44538 = (inst_44537 & (64));
var inst_44539 = inst_44532.cljs$core$ISeq$;
var inst_44540 = (cljs.core.PROTOCOL_SENTINEL === inst_44539);
var inst_44541 = ((inst_44538) || (inst_44540));
var state_44630__$1 = state_44630;
if(cljs.core.truth_(inst_44541)){
var statearr_44665_44717 = state_44630__$1;
(statearr_44665_44717[(1)] = (5));

} else {
var statearr_44666_44718 = state_44630__$1;
(statearr_44666_44718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (23))){
var inst_44589 = (state_44630[(14)]);
var inst_44595 = (inst_44589 == null);
var state_44630__$1 = state_44630;
if(cljs.core.truth_(inst_44595)){
var statearr_44667_44719 = state_44630__$1;
(statearr_44667_44719[(1)] = (26));

} else {
var statearr_44668_44720 = state_44630__$1;
(statearr_44668_44720[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (35))){
var inst_44615 = (state_44630[(2)]);
var state_44630__$1 = state_44630;
if(cljs.core.truth_(inst_44615)){
var statearr_44669_44721 = state_44630__$1;
(statearr_44669_44721[(1)] = (36));

} else {
var statearr_44670_44722 = state_44630__$1;
(statearr_44670_44722[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (19))){
var inst_44557 = (state_44630[(7)]);
var inst_44577 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44557);
var state_44630__$1 = state_44630;
var statearr_44671_44723 = state_44630__$1;
(statearr_44671_44723[(2)] = inst_44577);

(statearr_44671_44723[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (11))){
var inst_44557 = (state_44630[(7)]);
var inst_44561 = (inst_44557 == null);
var inst_44562 = cljs.core.not.call(null,inst_44561);
var state_44630__$1 = state_44630;
if(inst_44562){
var statearr_44672_44724 = state_44630__$1;
(statearr_44672_44724[(1)] = (13));

} else {
var statearr_44673_44725 = state_44630__$1;
(statearr_44673_44725[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (9))){
var inst_44532 = (state_44630[(8)]);
var state_44630__$1 = state_44630;
var statearr_44674_44726 = state_44630__$1;
(statearr_44674_44726[(2)] = inst_44532);

(statearr_44674_44726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (5))){
var state_44630__$1 = state_44630;
var statearr_44675_44727 = state_44630__$1;
(statearr_44675_44727[(2)] = true);

(statearr_44675_44727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (14))){
var state_44630__$1 = state_44630;
var statearr_44676_44728 = state_44630__$1;
(statearr_44676_44728[(2)] = false);

(statearr_44676_44728[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (26))){
var inst_44590 = (state_44630[(9)]);
var inst_44597 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_44590);
var state_44630__$1 = state_44630;
var statearr_44677_44729 = state_44630__$1;
(statearr_44677_44729[(2)] = inst_44597);

(statearr_44677_44729[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (16))){
var state_44630__$1 = state_44630;
var statearr_44678_44730 = state_44630__$1;
(statearr_44678_44730[(2)] = true);

(statearr_44678_44730[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (38))){
var inst_44620 = (state_44630[(2)]);
var state_44630__$1 = state_44630;
var statearr_44679_44731 = state_44630__$1;
(statearr_44679_44731[(2)] = inst_44620);

(statearr_44679_44731[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (30))){
var inst_44582 = (state_44630[(13)]);
var inst_44590 = (state_44630[(9)]);
var inst_44581 = (state_44630[(10)]);
var inst_44607 = cljs.core.empty_QMARK_.call(null,inst_44581);
var inst_44608 = inst_44582.call(null,inst_44590);
var inst_44609 = cljs.core.not.call(null,inst_44608);
var inst_44610 = ((inst_44607) && (inst_44609));
var state_44630__$1 = state_44630;
var statearr_44680_44732 = state_44630__$1;
(statearr_44680_44732[(2)] = inst_44610);

(statearr_44680_44732[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (10))){
var inst_44532 = (state_44630[(8)]);
var inst_44553 = (state_44630[(2)]);
var inst_44554 = cljs.core.get.call(null,inst_44553,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44555 = cljs.core.get.call(null,inst_44553,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44556 = cljs.core.get.call(null,inst_44553,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44557 = inst_44532;
var state_44630__$1 = (function (){var statearr_44681 = state_44630;
(statearr_44681[(16)] = inst_44554);

(statearr_44681[(17)] = inst_44555);

(statearr_44681[(7)] = inst_44557);

(statearr_44681[(18)] = inst_44556);

return statearr_44681;
})();
var statearr_44682_44733 = state_44630__$1;
(statearr_44682_44733[(2)] = null);

(statearr_44682_44733[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (18))){
var inst_44572 = (state_44630[(2)]);
var state_44630__$1 = state_44630;
var statearr_44683_44734 = state_44630__$1;
(statearr_44683_44734[(2)] = inst_44572);

(statearr_44683_44734[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (37))){
var state_44630__$1 = state_44630;
var statearr_44684_44735 = state_44630__$1;
(statearr_44684_44735[(2)] = null);

(statearr_44684_44735[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44631 === (8))){
var inst_44532 = (state_44630[(8)]);
var inst_44550 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44532);
var state_44630__$1 = state_44630;
var statearr_44685_44736 = state_44630__$1;
(statearr_44685_44736[(2)] = inst_44550);

(statearr_44685_44736[(1)] = (10));


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
});})(c__43631__auto___44690,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__43541__auto__,c__43631__auto___44690,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__43542__auto__ = null;
var cljs$core$async$mix_$_state_machine__43542__auto____0 = (function (){
var statearr_44686 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44686[(0)] = cljs$core$async$mix_$_state_machine__43542__auto__);

(statearr_44686[(1)] = (1));

return statearr_44686;
});
var cljs$core$async$mix_$_state_machine__43542__auto____1 = (function (state_44630){
while(true){
var ret_value__43543__auto__ = (function (){try{while(true){
var result__43544__auto__ = switch__43541__auto__.call(null,state_44630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43544__auto__;
}
break;
}
}catch (e44687){if((e44687 instanceof Object)){
var ex__43545__auto__ = e44687;
var statearr_44688_44737 = state_44630;
(statearr_44688_44737[(5)] = ex__43545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44738 = state_44630;
state_44630 = G__44738;
continue;
} else {
return ret_value__43543__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43542__auto__ = function(state_44630){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43542__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43542__auto____1.call(this,state_44630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43542__auto____0;
cljs$core$async$mix_$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43542__auto____1;
return cljs$core$async$mix_$_state_machine__43542__auto__;
})()
;})(switch__43541__auto__,c__43631__auto___44690,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__43633__auto__ = (function (){var statearr_44689 = f__43632__auto__.call(null);
(statearr_44689[(6)] = c__43631__auto___44690);

return statearr_44689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43633__auto__);
});})(c__43631__auto___44690,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__44740 = arguments.length;
switch (G__44740) {
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
var G__44744 = arguments.length;
switch (G__44744) {
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
return (function (p1__44742_SHARP_){
if(cljs.core.truth_(p1__44742_SHARP_.call(null,topic))){
return p1__44742_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__44742_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3936__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44745 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44745 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44746){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44746 = meta44746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_44747,meta44746__$1){
var self__ = this;
var _44747__$1 = this;
return (new cljs.core.async.t_cljs$core$async44745(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44746__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44745.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_44747){
var self__ = this;
var _44747__$1 = this;
return self__.meta44746;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44745.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44745.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44745.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44745.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44745.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async44745.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44745.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44745.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44746","meta44746",-523276260,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44745.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44745.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44745";

cljs.core.async.t_cljs$core$async44745.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async44745");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44745.
 */
cljs.core.async.__GT_t_cljs$core$async44745 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async44745(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44746){
return (new cljs.core.async.t_cljs$core$async44745(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44746));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async44745(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43631__auto___44865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43631__auto___44865,mults,ensure_mult,p){
return (function (){
var f__43632__auto__ = (function (){var switch__43541__auto__ = ((function (c__43631__auto___44865,mults,ensure_mult,p){
return (function (state_44819){
var state_val_44820 = (state_44819[(1)]);
if((state_val_44820 === (7))){
var inst_44815 = (state_44819[(2)]);
var state_44819__$1 = state_44819;
var statearr_44821_44866 = state_44819__$1;
(statearr_44821_44866[(2)] = inst_44815);

(statearr_44821_44866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44820 === (20))){
var state_44819__$1 = state_44819;
var statearr_44822_44867 = state_44819__$1;
(statearr_44822_44867[(2)] = null);

(statearr_44822_44867[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44820 === (1))){
var state_44819__$1 = state_44819;
var statearr_44823_44868 = state_44819__$1;
(statearr_44823_44868[(2)] = null);

(statearr_44823_44868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44820 === (24))){
var inst_44798 = (state_44819[(7)]);
var inst_44807 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_44798);
var state_44819__$1 = state_44819;
var statearr_44824_44869 = state_44819__$1;
(statearr_44824_44869[(2)] = inst_44807);

(statearr_44824_44869[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44820 === (4))){
var inst_44750 = (state_44819[(8)]);
var inst_44750__$1 = (state_44819[(2)]);
var inst_44751 = (inst_44750__$1 == null);
var state_44819__$1 = (function (){var statearr_44825 = state_44819;
(statearr_44825[(8)] = inst_44750__$1);

return statearr_44825;
})();
if(cljs.core.truth_(inst_44751)){
var statearr_44826_44870 = state_44819__$1;
(statearr_44826_44870[(1)] = (5));

} else {
var statearr_44827_44871 = state_44819__$1;
(statearr_44827_44871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44820 === (15))){
var inst_44792 = (state_44819[(2)]);
var state_44819__$1 = state_44819;
var statearr_44828_44872 = state_44819__$1;
(statearr_44828_44872[(2)] = inst_44792);

(statearr_44828_44872[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44820 === (21))){
var inst_44812 = (state_44819[(2)]);
var state_44819__$1 = (function (){var statearr_44829 = state_44819;
(statearr_44829[(9)] = inst_44812);

return statearr_44829;
})();
var statearr_44830_44873 = state_44819__$1;
(statearr_44830_44873[(2)] = null);

(statearr_44830_44873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44820 === (13))){
var inst_44774 = (state_44819[(10)]);
var inst_44776 = cljs.core.chunked_seq_QMARK_.call(null,inst_44774);
var state_44819__$1 = state_44819;
if(inst_44776){
var statearr_44831_44874 = state_44819__$1;
(statearr_44831_44874[(1)] = (16));

} else {
var statearr_44832_44875 = state_44819__$1;
(statearr_44832_44875[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44820 === (22))){
var inst_44804 = (state_44819[(2)]);
var state_44819__$1 = state_44819;
if(cljs.core.truth_(inst_44804)){
var statearr_44833_44876 = state_44819__$1;
(statearr_44833_44876[(1)] = (23));

} else {
var statearr_44834_44877 = state_44819__$1;
(statearr_44834_44877[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44820 === (6))){
var inst_44750 = (state_44819[(8)]);
var inst_44800 = (state_44819[(11)]);
var inst_44798 = (state_44819[(7)]);
var inst_44798__$1 = topic_fn.call(null,inst_44750);
var inst_44799 = cljs.core.deref.call(null,mults);
var inst_44800__$1 = cljs.core.get.call(null,inst_44799,inst_44798__$1);
var state_44819__$1 = (function (){var statearr_44835 = state_44819;
(statearr_44835[(11)] = inst_44800__$1);

(statearr_44835[(7)] = inst_44798__$1);

return statearr_44835;
})();
if(cljs.core.truth_(inst_44800__$1)){
var statearr_44836_44878 = state_44819__$1;
(statearr_44836_44878[(1)] = (19));

} else {
var statearr_44837_44879 = state_44819__$1;
(statearr_44837_44879[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44820 === (25))){
var inst_44809 = (state_44819[(2)]);
var state_44819__$1 = state_44819;
var statearr_44838_44880 = state_44819__$1;
(statearr_44838_44880[(2)] = inst_44809);

(statearr_44838_44880[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44820 === (17))){
var inst_44774 = (state_44819[(10)]);
var inst_44783 = cljs.core.first.call(null,inst_44774);
var inst_44784 = cljs.core.async.muxch_STAR_.call(null,inst_44783);
var inst_44785 = cljs.core.async.close_BANG_.call(null,inst_44784);
var inst_44786 = cljs.core.next.call(null,inst_44774);
var inst_44760 = inst_44786;
var inst_44761 = null;
var inst_44762 = (0);
var inst_44763 = (0);
var state_44819__$1 = (function (){var statearr_44839 = state_44819;
(statearr_44839[(12)] = inst_44762);

(statearr_44839[(13)] = inst_44763);

(statearr_44839[(14)] = inst_44785);

(statearr_44839[(15)] = inst_44761);

(statearr_44839[(16)] = inst_44760);

return statearr_44839;
})();
var statearr_44840_44881 = state_44819__$1;
(statearr_44840_44881[(2)] = null);

(statearr_44840_44881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44820 === (3))){
var inst_44817 = (state_44819[(2)]);
var state_44819__$1 = state_44819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44819__$1,inst_44817);
} else {
if((state_val_44820 === (12))){
var inst_44794 = (state_44819[(2)]);
var state_44819__$1 = state_44819;
var statearr_44841_44882 = state_44819__$1;
(statearr_44841_44882[(2)] = inst_44794);

(statearr_44841_44882[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44820 === (2))){
var state_44819__$1 = state_44819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44819__$1,(4),ch);
} else {
if((state_val_44820 === (23))){
var state_44819__$1 = state_44819;
var statearr_44842_44883 = state_44819__$1;
(statearr_44842_44883[(2)] = null);

(statearr_44842_44883[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44820 === (19))){
var inst_44750 = (state_44819[(8)]);
var inst_44800 = (state_44819[(11)]);
var inst_44802 = cljs.core.async.muxch_STAR_.call(null,inst_44800);
var state_44819__$1 = state_44819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44819__$1,(22),inst_44802,inst_44750);
} else {
if((state_val_44820 === (11))){
var inst_44774 = (state_44819[(10)]);
var inst_44760 = (state_44819[(16)]);
var inst_44774__$1 = cljs.core.seq.call(null,inst_44760);
var state_44819__$1 = (function (){var statearr_44843 = state_44819;
(statearr_44843[(10)] = inst_44774__$1);

return statearr_44843;
})();
if(inst_44774__$1){
var statearr_44844_44884 = state_44819__$1;
(statearr_44844_44884[(1)] = (13));

} else {
var statearr_44845_44885 = state_44819__$1;
(statearr_44845_44885[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44820 === (9))){
var inst_44796 = (state_44819[(2)]);
var state_44819__$1 = state_44819;
var statearr_44846_44886 = state_44819__$1;
(statearr_44846_44886[(2)] = inst_44796);

(statearr_44846_44886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44820 === (5))){
var inst_44757 = cljs.core.deref.call(null,mults);
var inst_44758 = cljs.core.vals.call(null,inst_44757);
var inst_44759 = cljs.core.seq.call(null,inst_44758);
var inst_44760 = inst_44759;
var inst_44761 = null;
var inst_44762 = (0);
var inst_44763 = (0);
var state_44819__$1 = (function (){var statearr_44847 = state_44819;
(statearr_44847[(12)] = inst_44762);

(statearr_44847[(13)] = inst_44763);

(statearr_44847[(15)] = inst_44761);

(statearr_44847[(16)] = inst_44760);

return statearr_44847;
})();
var statearr_44848_44887 = state_44819__$1;
(statearr_44848_44887[(2)] = null);

(statearr_44848_44887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44820 === (14))){
var state_44819__$1 = state_44819;
var statearr_44852_44888 = state_44819__$1;
(statearr_44852_44888[(2)] = null);

(statearr_44852_44888[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44820 === (16))){
var inst_44774 = (state_44819[(10)]);
var inst_44778 = cljs.core.chunk_first.call(null,inst_44774);
var inst_44779 = cljs.core.chunk_rest.call(null,inst_44774);
var inst_44780 = cljs.core.count.call(null,inst_44778);
var inst_44760 = inst_44779;
var inst_44761 = inst_44778;
var inst_44762 = inst_44780;
var inst_44763 = (0);
var state_44819__$1 = (function (){var statearr_44853 = state_44819;
(statearr_44853[(12)] = inst_44762);

(statearr_44853[(13)] = inst_44763);

(statearr_44853[(15)] = inst_44761);

(statearr_44853[(16)] = inst_44760);

return statearr_44853;
})();
var statearr_44854_44889 = state_44819__$1;
(statearr_44854_44889[(2)] = null);

(statearr_44854_44889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44820 === (10))){
var inst_44762 = (state_44819[(12)]);
var inst_44763 = (state_44819[(13)]);
var inst_44761 = (state_44819[(15)]);
var inst_44760 = (state_44819[(16)]);
var inst_44768 = cljs.core._nth.call(null,inst_44761,inst_44763);
var inst_44769 = cljs.core.async.muxch_STAR_.call(null,inst_44768);
var inst_44770 = cljs.core.async.close_BANG_.call(null,inst_44769);
var inst_44771 = (inst_44763 + (1));
var tmp44849 = inst_44762;
var tmp44850 = inst_44761;
var tmp44851 = inst_44760;
var inst_44760__$1 = tmp44851;
var inst_44761__$1 = tmp44850;
var inst_44762__$1 = tmp44849;
var inst_44763__$1 = inst_44771;
var state_44819__$1 = (function (){var statearr_44855 = state_44819;
(statearr_44855[(12)] = inst_44762__$1);

(statearr_44855[(13)] = inst_44763__$1);

(statearr_44855[(15)] = inst_44761__$1);

(statearr_44855[(16)] = inst_44760__$1);

(statearr_44855[(17)] = inst_44770);

return statearr_44855;
})();
var statearr_44856_44890 = state_44819__$1;
(statearr_44856_44890[(2)] = null);

(statearr_44856_44890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44820 === (18))){
var inst_44789 = (state_44819[(2)]);
var state_44819__$1 = state_44819;
var statearr_44857_44891 = state_44819__$1;
(statearr_44857_44891[(2)] = inst_44789);

(statearr_44857_44891[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44820 === (8))){
var inst_44762 = (state_44819[(12)]);
var inst_44763 = (state_44819[(13)]);
var inst_44765 = (inst_44763 < inst_44762);
var inst_44766 = inst_44765;
var state_44819__$1 = state_44819;
if(cljs.core.truth_(inst_44766)){
var statearr_44858_44892 = state_44819__$1;
(statearr_44858_44892[(1)] = (10));

} else {
var statearr_44859_44893 = state_44819__$1;
(statearr_44859_44893[(1)] = (11));

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
});})(c__43631__auto___44865,mults,ensure_mult,p))
;
return ((function (switch__43541__auto__,c__43631__auto___44865,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__43542__auto__ = null;
var cljs$core$async$state_machine__43542__auto____0 = (function (){
var statearr_44860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44860[(0)] = cljs$core$async$state_machine__43542__auto__);

(statearr_44860[(1)] = (1));

return statearr_44860;
});
var cljs$core$async$state_machine__43542__auto____1 = (function (state_44819){
while(true){
var ret_value__43543__auto__ = (function (){try{while(true){
var result__43544__auto__ = switch__43541__auto__.call(null,state_44819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43544__auto__;
}
break;
}
}catch (e44861){if((e44861 instanceof Object)){
var ex__43545__auto__ = e44861;
var statearr_44862_44894 = state_44819;
(statearr_44862_44894[(5)] = ex__43545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44895 = state_44819;
state_44819 = G__44895;
continue;
} else {
return ret_value__43543__auto__;
}
break;
}
});
cljs$core$async$state_machine__43542__auto__ = function(state_44819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43542__auto____1.call(this,state_44819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43542__auto____0;
cljs$core$async$state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43542__auto____1;
return cljs$core$async$state_machine__43542__auto__;
})()
;})(switch__43541__auto__,c__43631__auto___44865,mults,ensure_mult,p))
})();
var state__43633__auto__ = (function (){var statearr_44863 = f__43632__auto__.call(null);
(statearr_44863[(6)] = c__43631__auto___44865);

return statearr_44863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43633__auto__);
});})(c__43631__auto___44865,mults,ensure_mult,p))
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
var G__44897 = arguments.length;
switch (G__44897) {
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
var G__44900 = arguments.length;
switch (G__44900) {
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
var G__44903 = arguments.length;
switch (G__44903) {
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
var c__43631__auto___44970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43631__auto___44970,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__43632__auto__ = (function (){var switch__43541__auto__ = ((function (c__43631__auto___44970,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_44942){
var state_val_44943 = (state_44942[(1)]);
if((state_val_44943 === (7))){
var state_44942__$1 = state_44942;
var statearr_44944_44971 = state_44942__$1;
(statearr_44944_44971[(2)] = null);

(statearr_44944_44971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44943 === (1))){
var state_44942__$1 = state_44942;
var statearr_44945_44972 = state_44942__$1;
(statearr_44945_44972[(2)] = null);

(statearr_44945_44972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44943 === (4))){
var inst_44906 = (state_44942[(7)]);
var inst_44908 = (inst_44906 < cnt);
var state_44942__$1 = state_44942;
if(cljs.core.truth_(inst_44908)){
var statearr_44946_44973 = state_44942__$1;
(statearr_44946_44973[(1)] = (6));

} else {
var statearr_44947_44974 = state_44942__$1;
(statearr_44947_44974[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44943 === (15))){
var inst_44938 = (state_44942[(2)]);
var state_44942__$1 = state_44942;
var statearr_44948_44975 = state_44942__$1;
(statearr_44948_44975[(2)] = inst_44938);

(statearr_44948_44975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44943 === (13))){
var inst_44931 = cljs.core.async.close_BANG_.call(null,out);
var state_44942__$1 = state_44942;
var statearr_44949_44976 = state_44942__$1;
(statearr_44949_44976[(2)] = inst_44931);

(statearr_44949_44976[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44943 === (6))){
var state_44942__$1 = state_44942;
var statearr_44950_44977 = state_44942__$1;
(statearr_44950_44977[(2)] = null);

(statearr_44950_44977[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44943 === (3))){
var inst_44940 = (state_44942[(2)]);
var state_44942__$1 = state_44942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44942__$1,inst_44940);
} else {
if((state_val_44943 === (12))){
var inst_44928 = (state_44942[(8)]);
var inst_44928__$1 = (state_44942[(2)]);
var inst_44929 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_44928__$1);
var state_44942__$1 = (function (){var statearr_44951 = state_44942;
(statearr_44951[(8)] = inst_44928__$1);

return statearr_44951;
})();
if(cljs.core.truth_(inst_44929)){
var statearr_44952_44978 = state_44942__$1;
(statearr_44952_44978[(1)] = (13));

} else {
var statearr_44953_44979 = state_44942__$1;
(statearr_44953_44979[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44943 === (2))){
var inst_44905 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_44906 = (0);
var state_44942__$1 = (function (){var statearr_44954 = state_44942;
(statearr_44954[(9)] = inst_44905);

(statearr_44954[(7)] = inst_44906);

return statearr_44954;
})();
var statearr_44955_44980 = state_44942__$1;
(statearr_44955_44980[(2)] = null);

(statearr_44955_44980[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44943 === (11))){
var inst_44906 = (state_44942[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44942,(10),Object,null,(9));
var inst_44915 = chs__$1.call(null,inst_44906);
var inst_44916 = done.call(null,inst_44906);
var inst_44917 = cljs.core.async.take_BANG_.call(null,inst_44915,inst_44916);
var state_44942__$1 = state_44942;
var statearr_44956_44981 = state_44942__$1;
(statearr_44956_44981[(2)] = inst_44917);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44942__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44943 === (9))){
var inst_44906 = (state_44942[(7)]);
var inst_44919 = (state_44942[(2)]);
var inst_44920 = (inst_44906 + (1));
var inst_44906__$1 = inst_44920;
var state_44942__$1 = (function (){var statearr_44957 = state_44942;
(statearr_44957[(7)] = inst_44906__$1);

(statearr_44957[(10)] = inst_44919);

return statearr_44957;
})();
var statearr_44958_44982 = state_44942__$1;
(statearr_44958_44982[(2)] = null);

(statearr_44958_44982[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44943 === (5))){
var inst_44926 = (state_44942[(2)]);
var state_44942__$1 = (function (){var statearr_44959 = state_44942;
(statearr_44959[(11)] = inst_44926);

return statearr_44959;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44942__$1,(12),dchan);
} else {
if((state_val_44943 === (14))){
var inst_44928 = (state_44942[(8)]);
var inst_44933 = cljs.core.apply.call(null,f,inst_44928);
var state_44942__$1 = state_44942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44942__$1,(16),out,inst_44933);
} else {
if((state_val_44943 === (16))){
var inst_44935 = (state_44942[(2)]);
var state_44942__$1 = (function (){var statearr_44960 = state_44942;
(statearr_44960[(12)] = inst_44935);

return statearr_44960;
})();
var statearr_44961_44983 = state_44942__$1;
(statearr_44961_44983[(2)] = null);

(statearr_44961_44983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44943 === (10))){
var inst_44910 = (state_44942[(2)]);
var inst_44911 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_44942__$1 = (function (){var statearr_44962 = state_44942;
(statearr_44962[(13)] = inst_44910);

return statearr_44962;
})();
var statearr_44963_44984 = state_44942__$1;
(statearr_44963_44984[(2)] = inst_44911);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44942__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44943 === (8))){
var inst_44924 = (state_44942[(2)]);
var state_44942__$1 = state_44942;
var statearr_44964_44985 = state_44942__$1;
(statearr_44964_44985[(2)] = inst_44924);

(statearr_44964_44985[(1)] = (5));


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
});})(c__43631__auto___44970,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__43541__auto__,c__43631__auto___44970,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__43542__auto__ = null;
var cljs$core$async$state_machine__43542__auto____0 = (function (){
var statearr_44965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44965[(0)] = cljs$core$async$state_machine__43542__auto__);

(statearr_44965[(1)] = (1));

return statearr_44965;
});
var cljs$core$async$state_machine__43542__auto____1 = (function (state_44942){
while(true){
var ret_value__43543__auto__ = (function (){try{while(true){
var result__43544__auto__ = switch__43541__auto__.call(null,state_44942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43544__auto__;
}
break;
}
}catch (e44966){if((e44966 instanceof Object)){
var ex__43545__auto__ = e44966;
var statearr_44967_44986 = state_44942;
(statearr_44967_44986[(5)] = ex__43545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44987 = state_44942;
state_44942 = G__44987;
continue;
} else {
return ret_value__43543__auto__;
}
break;
}
});
cljs$core$async$state_machine__43542__auto__ = function(state_44942){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43542__auto____1.call(this,state_44942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43542__auto____0;
cljs$core$async$state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43542__auto____1;
return cljs$core$async$state_machine__43542__auto__;
})()
;})(switch__43541__auto__,c__43631__auto___44970,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__43633__auto__ = (function (){var statearr_44968 = f__43632__auto__.call(null);
(statearr_44968[(6)] = c__43631__auto___44970);

return statearr_44968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43633__auto__);
});})(c__43631__auto___44970,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__44990 = arguments.length;
switch (G__44990) {
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
var c__43631__auto___45044 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43631__auto___45044,out){
return (function (){
var f__43632__auto__ = (function (){var switch__43541__auto__ = ((function (c__43631__auto___45044,out){
return (function (state_45022){
var state_val_45023 = (state_45022[(1)]);
if((state_val_45023 === (7))){
var inst_45001 = (state_45022[(7)]);
var inst_45002 = (state_45022[(8)]);
var inst_45001__$1 = (state_45022[(2)]);
var inst_45002__$1 = cljs.core.nth.call(null,inst_45001__$1,(0),null);
var inst_45003 = cljs.core.nth.call(null,inst_45001__$1,(1),null);
var inst_45004 = (inst_45002__$1 == null);
var state_45022__$1 = (function (){var statearr_45024 = state_45022;
(statearr_45024[(9)] = inst_45003);

(statearr_45024[(7)] = inst_45001__$1);

(statearr_45024[(8)] = inst_45002__$1);

return statearr_45024;
})();
if(cljs.core.truth_(inst_45004)){
var statearr_45025_45045 = state_45022__$1;
(statearr_45025_45045[(1)] = (8));

} else {
var statearr_45026_45046 = state_45022__$1;
(statearr_45026_45046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45023 === (1))){
var inst_44991 = cljs.core.vec.call(null,chs);
var inst_44992 = inst_44991;
var state_45022__$1 = (function (){var statearr_45027 = state_45022;
(statearr_45027[(10)] = inst_44992);

return statearr_45027;
})();
var statearr_45028_45047 = state_45022__$1;
(statearr_45028_45047[(2)] = null);

(statearr_45028_45047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45023 === (4))){
var inst_44992 = (state_45022[(10)]);
var state_45022__$1 = state_45022;
return cljs.core.async.ioc_alts_BANG_.call(null,state_45022__$1,(7),inst_44992);
} else {
if((state_val_45023 === (6))){
var inst_45018 = (state_45022[(2)]);
var state_45022__$1 = state_45022;
var statearr_45029_45048 = state_45022__$1;
(statearr_45029_45048[(2)] = inst_45018);

(statearr_45029_45048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45023 === (3))){
var inst_45020 = (state_45022[(2)]);
var state_45022__$1 = state_45022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45022__$1,inst_45020);
} else {
if((state_val_45023 === (2))){
var inst_44992 = (state_45022[(10)]);
var inst_44994 = cljs.core.count.call(null,inst_44992);
var inst_44995 = (inst_44994 > (0));
var state_45022__$1 = state_45022;
if(cljs.core.truth_(inst_44995)){
var statearr_45031_45049 = state_45022__$1;
(statearr_45031_45049[(1)] = (4));

} else {
var statearr_45032_45050 = state_45022__$1;
(statearr_45032_45050[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45023 === (11))){
var inst_44992 = (state_45022[(10)]);
var inst_45011 = (state_45022[(2)]);
var tmp45030 = inst_44992;
var inst_44992__$1 = tmp45030;
var state_45022__$1 = (function (){var statearr_45033 = state_45022;
(statearr_45033[(11)] = inst_45011);

(statearr_45033[(10)] = inst_44992__$1);

return statearr_45033;
})();
var statearr_45034_45051 = state_45022__$1;
(statearr_45034_45051[(2)] = null);

(statearr_45034_45051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45023 === (9))){
var inst_45002 = (state_45022[(8)]);
var state_45022__$1 = state_45022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45022__$1,(11),out,inst_45002);
} else {
if((state_val_45023 === (5))){
var inst_45016 = cljs.core.async.close_BANG_.call(null,out);
var state_45022__$1 = state_45022;
var statearr_45035_45052 = state_45022__$1;
(statearr_45035_45052[(2)] = inst_45016);

(statearr_45035_45052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45023 === (10))){
var inst_45014 = (state_45022[(2)]);
var state_45022__$1 = state_45022;
var statearr_45036_45053 = state_45022__$1;
(statearr_45036_45053[(2)] = inst_45014);

(statearr_45036_45053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45023 === (8))){
var inst_44992 = (state_45022[(10)]);
var inst_45003 = (state_45022[(9)]);
var inst_45001 = (state_45022[(7)]);
var inst_45002 = (state_45022[(8)]);
var inst_45006 = (function (){var cs = inst_44992;
var vec__44997 = inst_45001;
var v = inst_45002;
var c = inst_45003;
return ((function (cs,vec__44997,v,c,inst_44992,inst_45003,inst_45001,inst_45002,state_val_45023,c__43631__auto___45044,out){
return (function (p1__44988_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__44988_SHARP_);
});
;})(cs,vec__44997,v,c,inst_44992,inst_45003,inst_45001,inst_45002,state_val_45023,c__43631__auto___45044,out))
})();
var inst_45007 = cljs.core.filterv.call(null,inst_45006,inst_44992);
var inst_44992__$1 = inst_45007;
var state_45022__$1 = (function (){var statearr_45037 = state_45022;
(statearr_45037[(10)] = inst_44992__$1);

return statearr_45037;
})();
var statearr_45038_45054 = state_45022__$1;
(statearr_45038_45054[(2)] = null);

(statearr_45038_45054[(1)] = (2));


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
});})(c__43631__auto___45044,out))
;
return ((function (switch__43541__auto__,c__43631__auto___45044,out){
return (function() {
var cljs$core$async$state_machine__43542__auto__ = null;
var cljs$core$async$state_machine__43542__auto____0 = (function (){
var statearr_45039 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45039[(0)] = cljs$core$async$state_machine__43542__auto__);

(statearr_45039[(1)] = (1));

return statearr_45039;
});
var cljs$core$async$state_machine__43542__auto____1 = (function (state_45022){
while(true){
var ret_value__43543__auto__ = (function (){try{while(true){
var result__43544__auto__ = switch__43541__auto__.call(null,state_45022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43544__auto__;
}
break;
}
}catch (e45040){if((e45040 instanceof Object)){
var ex__43545__auto__ = e45040;
var statearr_45041_45055 = state_45022;
(statearr_45041_45055[(5)] = ex__43545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45056 = state_45022;
state_45022 = G__45056;
continue;
} else {
return ret_value__43543__auto__;
}
break;
}
});
cljs$core$async$state_machine__43542__auto__ = function(state_45022){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43542__auto____1.call(this,state_45022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43542__auto____0;
cljs$core$async$state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43542__auto____1;
return cljs$core$async$state_machine__43542__auto__;
})()
;})(switch__43541__auto__,c__43631__auto___45044,out))
})();
var state__43633__auto__ = (function (){var statearr_45042 = f__43632__auto__.call(null);
(statearr_45042[(6)] = c__43631__auto___45044);

return statearr_45042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43633__auto__);
});})(c__43631__auto___45044,out))
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
var G__45058 = arguments.length;
switch (G__45058) {
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
var c__43631__auto___45103 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43631__auto___45103,out){
return (function (){
var f__43632__auto__ = (function (){var switch__43541__auto__ = ((function (c__43631__auto___45103,out){
return (function (state_45082){
var state_val_45083 = (state_45082[(1)]);
if((state_val_45083 === (7))){
var inst_45064 = (state_45082[(7)]);
var inst_45064__$1 = (state_45082[(2)]);
var inst_45065 = (inst_45064__$1 == null);
var inst_45066 = cljs.core.not.call(null,inst_45065);
var state_45082__$1 = (function (){var statearr_45084 = state_45082;
(statearr_45084[(7)] = inst_45064__$1);

return statearr_45084;
})();
if(inst_45066){
var statearr_45085_45104 = state_45082__$1;
(statearr_45085_45104[(1)] = (8));

} else {
var statearr_45086_45105 = state_45082__$1;
(statearr_45086_45105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45083 === (1))){
var inst_45059 = (0);
var state_45082__$1 = (function (){var statearr_45087 = state_45082;
(statearr_45087[(8)] = inst_45059);

return statearr_45087;
})();
var statearr_45088_45106 = state_45082__$1;
(statearr_45088_45106[(2)] = null);

(statearr_45088_45106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45083 === (4))){
var state_45082__$1 = state_45082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45082__$1,(7),ch);
} else {
if((state_val_45083 === (6))){
var inst_45077 = (state_45082[(2)]);
var state_45082__$1 = state_45082;
var statearr_45089_45107 = state_45082__$1;
(statearr_45089_45107[(2)] = inst_45077);

(statearr_45089_45107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45083 === (3))){
var inst_45079 = (state_45082[(2)]);
var inst_45080 = cljs.core.async.close_BANG_.call(null,out);
var state_45082__$1 = (function (){var statearr_45090 = state_45082;
(statearr_45090[(9)] = inst_45079);

return statearr_45090;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45082__$1,inst_45080);
} else {
if((state_val_45083 === (2))){
var inst_45059 = (state_45082[(8)]);
var inst_45061 = (inst_45059 < n);
var state_45082__$1 = state_45082;
if(cljs.core.truth_(inst_45061)){
var statearr_45091_45108 = state_45082__$1;
(statearr_45091_45108[(1)] = (4));

} else {
var statearr_45092_45109 = state_45082__$1;
(statearr_45092_45109[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45083 === (11))){
var inst_45059 = (state_45082[(8)]);
var inst_45069 = (state_45082[(2)]);
var inst_45070 = (inst_45059 + (1));
var inst_45059__$1 = inst_45070;
var state_45082__$1 = (function (){var statearr_45093 = state_45082;
(statearr_45093[(10)] = inst_45069);

(statearr_45093[(8)] = inst_45059__$1);

return statearr_45093;
})();
var statearr_45094_45110 = state_45082__$1;
(statearr_45094_45110[(2)] = null);

(statearr_45094_45110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45083 === (9))){
var state_45082__$1 = state_45082;
var statearr_45095_45111 = state_45082__$1;
(statearr_45095_45111[(2)] = null);

(statearr_45095_45111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45083 === (5))){
var state_45082__$1 = state_45082;
var statearr_45096_45112 = state_45082__$1;
(statearr_45096_45112[(2)] = null);

(statearr_45096_45112[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45083 === (10))){
var inst_45074 = (state_45082[(2)]);
var state_45082__$1 = state_45082;
var statearr_45097_45113 = state_45082__$1;
(statearr_45097_45113[(2)] = inst_45074);

(statearr_45097_45113[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45083 === (8))){
var inst_45064 = (state_45082[(7)]);
var state_45082__$1 = state_45082;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45082__$1,(11),out,inst_45064);
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
});})(c__43631__auto___45103,out))
;
return ((function (switch__43541__auto__,c__43631__auto___45103,out){
return (function() {
var cljs$core$async$state_machine__43542__auto__ = null;
var cljs$core$async$state_machine__43542__auto____0 = (function (){
var statearr_45098 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45098[(0)] = cljs$core$async$state_machine__43542__auto__);

(statearr_45098[(1)] = (1));

return statearr_45098;
});
var cljs$core$async$state_machine__43542__auto____1 = (function (state_45082){
while(true){
var ret_value__43543__auto__ = (function (){try{while(true){
var result__43544__auto__ = switch__43541__auto__.call(null,state_45082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43544__auto__;
}
break;
}
}catch (e45099){if((e45099 instanceof Object)){
var ex__43545__auto__ = e45099;
var statearr_45100_45114 = state_45082;
(statearr_45100_45114[(5)] = ex__43545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45115 = state_45082;
state_45082 = G__45115;
continue;
} else {
return ret_value__43543__auto__;
}
break;
}
});
cljs$core$async$state_machine__43542__auto__ = function(state_45082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43542__auto____1.call(this,state_45082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43542__auto____0;
cljs$core$async$state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43542__auto____1;
return cljs$core$async$state_machine__43542__auto__;
})()
;})(switch__43541__auto__,c__43631__auto___45103,out))
})();
var state__43633__auto__ = (function (){var statearr_45101 = f__43632__auto__.call(null);
(statearr_45101[(6)] = c__43631__auto___45103);

return statearr_45101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43633__auto__);
});})(c__43631__auto___45103,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45117 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45117 = (function (f,ch,meta45118){
this.f = f;
this.ch = ch;
this.meta45118 = meta45118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45119,meta45118__$1){
var self__ = this;
var _45119__$1 = this;
return (new cljs.core.async.t_cljs$core$async45117(self__.f,self__.ch,meta45118__$1));
});

cljs.core.async.t_cljs$core$async45117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45119){
var self__ = this;
var _45119__$1 = this;
return self__.meta45118;
});

cljs.core.async.t_cljs$core$async45117.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45117.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45117.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45117.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45117.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45120 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45120 = (function (f,ch,meta45118,_,fn1,meta45121){
this.f = f;
this.ch = ch;
this.meta45118 = meta45118;
this._ = _;
this.fn1 = fn1;
this.meta45121 = meta45121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_45122,meta45121__$1){
var self__ = this;
var _45122__$1 = this;
return (new cljs.core.async.t_cljs$core$async45120(self__.f,self__.ch,self__.meta45118,self__._,self__.fn1,meta45121__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async45120.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_45122){
var self__ = this;
var _45122__$1 = this;
return self__.meta45121;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45120.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45120.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45120.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45120.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__45116_SHARP_){
return f1.call(null,(((p1__45116_SHARP_ == null))?null:self__.f.call(null,p1__45116_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async45120.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45118","meta45118",-705300651,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45117","cljs.core.async/t_cljs$core$async45117",517956711,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45121","meta45121",895713786,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45120.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45120.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45120";

cljs.core.async.t_cljs$core$async45120.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async45120");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45120.
 */
cljs.core.async.__GT_t_cljs$core$async45120 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45120(f__$1,ch__$1,meta45118__$1,___$2,fn1__$1,meta45121){
return (new cljs.core.async.t_cljs$core$async45120(f__$1,ch__$1,meta45118__$1,___$2,fn1__$1,meta45121));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async45120(self__.f,self__.ch,self__.meta45118,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async45117.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45117.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async45117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45118","meta45118",-705300651,null)], null);
});

cljs.core.async.t_cljs$core$async45117.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45117";

cljs.core.async.t_cljs$core$async45117.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async45117");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45117.
 */
cljs.core.async.__GT_t_cljs$core$async45117 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45117(f__$1,ch__$1,meta45118){
return (new cljs.core.async.t_cljs$core$async45117(f__$1,ch__$1,meta45118));
});

}

return (new cljs.core.async.t_cljs$core$async45117(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45123 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45123 = (function (f,ch,meta45124){
this.f = f;
this.ch = ch;
this.meta45124 = meta45124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45125,meta45124__$1){
var self__ = this;
var _45125__$1 = this;
return (new cljs.core.async.t_cljs$core$async45123(self__.f,self__.ch,meta45124__$1));
});

cljs.core.async.t_cljs$core$async45123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45125){
var self__ = this;
var _45125__$1 = this;
return self__.meta45124;
});

cljs.core.async.t_cljs$core$async45123.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45123.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45123.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45123.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45123.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45123.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async45123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45124","meta45124",147796511,null)], null);
});

cljs.core.async.t_cljs$core$async45123.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45123.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45123";

cljs.core.async.t_cljs$core$async45123.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async45123");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45123.
 */
cljs.core.async.__GT_t_cljs$core$async45123 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45123(f__$1,ch__$1,meta45124){
return (new cljs.core.async.t_cljs$core$async45123(f__$1,ch__$1,meta45124));
});

}

return (new cljs.core.async.t_cljs$core$async45123(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45126 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45126 = (function (p,ch,meta45127){
this.p = p;
this.ch = ch;
this.meta45127 = meta45127;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45128,meta45127__$1){
var self__ = this;
var _45128__$1 = this;
return (new cljs.core.async.t_cljs$core$async45126(self__.p,self__.ch,meta45127__$1));
});

cljs.core.async.t_cljs$core$async45126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45128){
var self__ = this;
var _45128__$1 = this;
return self__.meta45127;
});

cljs.core.async.t_cljs$core$async45126.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45126.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45126.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45126.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45126.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45126.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45126.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async45126.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45127","meta45127",1913107229,null)], null);
});

cljs.core.async.t_cljs$core$async45126.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45126.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45126";

cljs.core.async.t_cljs$core$async45126.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async45126");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45126.
 */
cljs.core.async.__GT_t_cljs$core$async45126 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45126(p__$1,ch__$1,meta45127){
return (new cljs.core.async.t_cljs$core$async45126(p__$1,ch__$1,meta45127));
});

}

return (new cljs.core.async.t_cljs$core$async45126(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__45130 = arguments.length;
switch (G__45130) {
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
var c__43631__auto___45170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43631__auto___45170,out){
return (function (){
var f__43632__auto__ = (function (){var switch__43541__auto__ = ((function (c__43631__auto___45170,out){
return (function (state_45151){
var state_val_45152 = (state_45151[(1)]);
if((state_val_45152 === (7))){
var inst_45147 = (state_45151[(2)]);
var state_45151__$1 = state_45151;
var statearr_45153_45171 = state_45151__$1;
(statearr_45153_45171[(2)] = inst_45147);

(statearr_45153_45171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45152 === (1))){
var state_45151__$1 = state_45151;
var statearr_45154_45172 = state_45151__$1;
(statearr_45154_45172[(2)] = null);

(statearr_45154_45172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45152 === (4))){
var inst_45133 = (state_45151[(7)]);
var inst_45133__$1 = (state_45151[(2)]);
var inst_45134 = (inst_45133__$1 == null);
var state_45151__$1 = (function (){var statearr_45155 = state_45151;
(statearr_45155[(7)] = inst_45133__$1);

return statearr_45155;
})();
if(cljs.core.truth_(inst_45134)){
var statearr_45156_45173 = state_45151__$1;
(statearr_45156_45173[(1)] = (5));

} else {
var statearr_45157_45174 = state_45151__$1;
(statearr_45157_45174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45152 === (6))){
var inst_45133 = (state_45151[(7)]);
var inst_45138 = p.call(null,inst_45133);
var state_45151__$1 = state_45151;
if(cljs.core.truth_(inst_45138)){
var statearr_45158_45175 = state_45151__$1;
(statearr_45158_45175[(1)] = (8));

} else {
var statearr_45159_45176 = state_45151__$1;
(statearr_45159_45176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45152 === (3))){
var inst_45149 = (state_45151[(2)]);
var state_45151__$1 = state_45151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45151__$1,inst_45149);
} else {
if((state_val_45152 === (2))){
var state_45151__$1 = state_45151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45151__$1,(4),ch);
} else {
if((state_val_45152 === (11))){
var inst_45141 = (state_45151[(2)]);
var state_45151__$1 = state_45151;
var statearr_45160_45177 = state_45151__$1;
(statearr_45160_45177[(2)] = inst_45141);

(statearr_45160_45177[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45152 === (9))){
var state_45151__$1 = state_45151;
var statearr_45161_45178 = state_45151__$1;
(statearr_45161_45178[(2)] = null);

(statearr_45161_45178[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45152 === (5))){
var inst_45136 = cljs.core.async.close_BANG_.call(null,out);
var state_45151__$1 = state_45151;
var statearr_45162_45179 = state_45151__$1;
(statearr_45162_45179[(2)] = inst_45136);

(statearr_45162_45179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45152 === (10))){
var inst_45144 = (state_45151[(2)]);
var state_45151__$1 = (function (){var statearr_45163 = state_45151;
(statearr_45163[(8)] = inst_45144);

return statearr_45163;
})();
var statearr_45164_45180 = state_45151__$1;
(statearr_45164_45180[(2)] = null);

(statearr_45164_45180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45152 === (8))){
var inst_45133 = (state_45151[(7)]);
var state_45151__$1 = state_45151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45151__$1,(11),out,inst_45133);
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
});})(c__43631__auto___45170,out))
;
return ((function (switch__43541__auto__,c__43631__auto___45170,out){
return (function() {
var cljs$core$async$state_machine__43542__auto__ = null;
var cljs$core$async$state_machine__43542__auto____0 = (function (){
var statearr_45165 = [null,null,null,null,null,null,null,null,null];
(statearr_45165[(0)] = cljs$core$async$state_machine__43542__auto__);

(statearr_45165[(1)] = (1));

return statearr_45165;
});
var cljs$core$async$state_machine__43542__auto____1 = (function (state_45151){
while(true){
var ret_value__43543__auto__ = (function (){try{while(true){
var result__43544__auto__ = switch__43541__auto__.call(null,state_45151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43544__auto__;
}
break;
}
}catch (e45166){if((e45166 instanceof Object)){
var ex__43545__auto__ = e45166;
var statearr_45167_45181 = state_45151;
(statearr_45167_45181[(5)] = ex__43545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45182 = state_45151;
state_45151 = G__45182;
continue;
} else {
return ret_value__43543__auto__;
}
break;
}
});
cljs$core$async$state_machine__43542__auto__ = function(state_45151){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43542__auto____1.call(this,state_45151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43542__auto____0;
cljs$core$async$state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43542__auto____1;
return cljs$core$async$state_machine__43542__auto__;
})()
;})(switch__43541__auto__,c__43631__auto___45170,out))
})();
var state__43633__auto__ = (function (){var statearr_45168 = f__43632__auto__.call(null);
(statearr_45168[(6)] = c__43631__auto___45170);

return statearr_45168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43633__auto__);
});})(c__43631__auto___45170,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45184 = arguments.length;
switch (G__45184) {
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
var c__43631__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43631__auto__){
return (function (){
var f__43632__auto__ = (function (){var switch__43541__auto__ = ((function (c__43631__auto__){
return (function (state_45247){
var state_val_45248 = (state_45247[(1)]);
if((state_val_45248 === (7))){
var inst_45243 = (state_45247[(2)]);
var state_45247__$1 = state_45247;
var statearr_45249_45287 = state_45247__$1;
(statearr_45249_45287[(2)] = inst_45243);

(statearr_45249_45287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (20))){
var inst_45213 = (state_45247[(7)]);
var inst_45224 = (state_45247[(2)]);
var inst_45225 = cljs.core.next.call(null,inst_45213);
var inst_45199 = inst_45225;
var inst_45200 = null;
var inst_45201 = (0);
var inst_45202 = (0);
var state_45247__$1 = (function (){var statearr_45250 = state_45247;
(statearr_45250[(8)] = inst_45201);

(statearr_45250[(9)] = inst_45199);

(statearr_45250[(10)] = inst_45224);

(statearr_45250[(11)] = inst_45200);

(statearr_45250[(12)] = inst_45202);

return statearr_45250;
})();
var statearr_45251_45288 = state_45247__$1;
(statearr_45251_45288[(2)] = null);

(statearr_45251_45288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (1))){
var state_45247__$1 = state_45247;
var statearr_45252_45289 = state_45247__$1;
(statearr_45252_45289[(2)] = null);

(statearr_45252_45289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (4))){
var inst_45188 = (state_45247[(13)]);
var inst_45188__$1 = (state_45247[(2)]);
var inst_45189 = (inst_45188__$1 == null);
var state_45247__$1 = (function (){var statearr_45253 = state_45247;
(statearr_45253[(13)] = inst_45188__$1);

return statearr_45253;
})();
if(cljs.core.truth_(inst_45189)){
var statearr_45254_45290 = state_45247__$1;
(statearr_45254_45290[(1)] = (5));

} else {
var statearr_45255_45291 = state_45247__$1;
(statearr_45255_45291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (15))){
var state_45247__$1 = state_45247;
var statearr_45259_45292 = state_45247__$1;
(statearr_45259_45292[(2)] = null);

(statearr_45259_45292[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (21))){
var state_45247__$1 = state_45247;
var statearr_45260_45293 = state_45247__$1;
(statearr_45260_45293[(2)] = null);

(statearr_45260_45293[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (13))){
var inst_45201 = (state_45247[(8)]);
var inst_45199 = (state_45247[(9)]);
var inst_45200 = (state_45247[(11)]);
var inst_45202 = (state_45247[(12)]);
var inst_45209 = (state_45247[(2)]);
var inst_45210 = (inst_45202 + (1));
var tmp45256 = inst_45201;
var tmp45257 = inst_45199;
var tmp45258 = inst_45200;
var inst_45199__$1 = tmp45257;
var inst_45200__$1 = tmp45258;
var inst_45201__$1 = tmp45256;
var inst_45202__$1 = inst_45210;
var state_45247__$1 = (function (){var statearr_45261 = state_45247;
(statearr_45261[(8)] = inst_45201__$1);

(statearr_45261[(9)] = inst_45199__$1);

(statearr_45261[(14)] = inst_45209);

(statearr_45261[(11)] = inst_45200__$1);

(statearr_45261[(12)] = inst_45202__$1);

return statearr_45261;
})();
var statearr_45262_45294 = state_45247__$1;
(statearr_45262_45294[(2)] = null);

(statearr_45262_45294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (22))){
var state_45247__$1 = state_45247;
var statearr_45263_45295 = state_45247__$1;
(statearr_45263_45295[(2)] = null);

(statearr_45263_45295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (6))){
var inst_45188 = (state_45247[(13)]);
var inst_45197 = f.call(null,inst_45188);
var inst_45198 = cljs.core.seq.call(null,inst_45197);
var inst_45199 = inst_45198;
var inst_45200 = null;
var inst_45201 = (0);
var inst_45202 = (0);
var state_45247__$1 = (function (){var statearr_45264 = state_45247;
(statearr_45264[(8)] = inst_45201);

(statearr_45264[(9)] = inst_45199);

(statearr_45264[(11)] = inst_45200);

(statearr_45264[(12)] = inst_45202);

return statearr_45264;
})();
var statearr_45265_45296 = state_45247__$1;
(statearr_45265_45296[(2)] = null);

(statearr_45265_45296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (17))){
var inst_45213 = (state_45247[(7)]);
var inst_45217 = cljs.core.chunk_first.call(null,inst_45213);
var inst_45218 = cljs.core.chunk_rest.call(null,inst_45213);
var inst_45219 = cljs.core.count.call(null,inst_45217);
var inst_45199 = inst_45218;
var inst_45200 = inst_45217;
var inst_45201 = inst_45219;
var inst_45202 = (0);
var state_45247__$1 = (function (){var statearr_45266 = state_45247;
(statearr_45266[(8)] = inst_45201);

(statearr_45266[(9)] = inst_45199);

(statearr_45266[(11)] = inst_45200);

(statearr_45266[(12)] = inst_45202);

return statearr_45266;
})();
var statearr_45267_45297 = state_45247__$1;
(statearr_45267_45297[(2)] = null);

(statearr_45267_45297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (3))){
var inst_45245 = (state_45247[(2)]);
var state_45247__$1 = state_45247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45247__$1,inst_45245);
} else {
if((state_val_45248 === (12))){
var inst_45233 = (state_45247[(2)]);
var state_45247__$1 = state_45247;
var statearr_45268_45298 = state_45247__$1;
(statearr_45268_45298[(2)] = inst_45233);

(statearr_45268_45298[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (2))){
var state_45247__$1 = state_45247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45247__$1,(4),in$);
} else {
if((state_val_45248 === (23))){
var inst_45241 = (state_45247[(2)]);
var state_45247__$1 = state_45247;
var statearr_45269_45299 = state_45247__$1;
(statearr_45269_45299[(2)] = inst_45241);

(statearr_45269_45299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (19))){
var inst_45228 = (state_45247[(2)]);
var state_45247__$1 = state_45247;
var statearr_45270_45300 = state_45247__$1;
(statearr_45270_45300[(2)] = inst_45228);

(statearr_45270_45300[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (11))){
var inst_45199 = (state_45247[(9)]);
var inst_45213 = (state_45247[(7)]);
var inst_45213__$1 = cljs.core.seq.call(null,inst_45199);
var state_45247__$1 = (function (){var statearr_45271 = state_45247;
(statearr_45271[(7)] = inst_45213__$1);

return statearr_45271;
})();
if(inst_45213__$1){
var statearr_45272_45301 = state_45247__$1;
(statearr_45272_45301[(1)] = (14));

} else {
var statearr_45273_45302 = state_45247__$1;
(statearr_45273_45302[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (9))){
var inst_45235 = (state_45247[(2)]);
var inst_45236 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_45247__$1 = (function (){var statearr_45274 = state_45247;
(statearr_45274[(15)] = inst_45235);

return statearr_45274;
})();
if(cljs.core.truth_(inst_45236)){
var statearr_45275_45303 = state_45247__$1;
(statearr_45275_45303[(1)] = (21));

} else {
var statearr_45276_45304 = state_45247__$1;
(statearr_45276_45304[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (5))){
var inst_45191 = cljs.core.async.close_BANG_.call(null,out);
var state_45247__$1 = state_45247;
var statearr_45277_45305 = state_45247__$1;
(statearr_45277_45305[(2)] = inst_45191);

(statearr_45277_45305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (14))){
var inst_45213 = (state_45247[(7)]);
var inst_45215 = cljs.core.chunked_seq_QMARK_.call(null,inst_45213);
var state_45247__$1 = state_45247;
if(inst_45215){
var statearr_45278_45306 = state_45247__$1;
(statearr_45278_45306[(1)] = (17));

} else {
var statearr_45279_45307 = state_45247__$1;
(statearr_45279_45307[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (16))){
var inst_45231 = (state_45247[(2)]);
var state_45247__$1 = state_45247;
var statearr_45280_45308 = state_45247__$1;
(statearr_45280_45308[(2)] = inst_45231);

(statearr_45280_45308[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (10))){
var inst_45200 = (state_45247[(11)]);
var inst_45202 = (state_45247[(12)]);
var inst_45207 = cljs.core._nth.call(null,inst_45200,inst_45202);
var state_45247__$1 = state_45247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45247__$1,(13),out,inst_45207);
} else {
if((state_val_45248 === (18))){
var inst_45213 = (state_45247[(7)]);
var inst_45222 = cljs.core.first.call(null,inst_45213);
var state_45247__$1 = state_45247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45247__$1,(20),out,inst_45222);
} else {
if((state_val_45248 === (8))){
var inst_45201 = (state_45247[(8)]);
var inst_45202 = (state_45247[(12)]);
var inst_45204 = (inst_45202 < inst_45201);
var inst_45205 = inst_45204;
var state_45247__$1 = state_45247;
if(cljs.core.truth_(inst_45205)){
var statearr_45281_45309 = state_45247__$1;
(statearr_45281_45309[(1)] = (10));

} else {
var statearr_45282_45310 = state_45247__$1;
(statearr_45282_45310[(1)] = (11));

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
});})(c__43631__auto__))
;
return ((function (switch__43541__auto__,c__43631__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__43542__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43542__auto____0 = (function (){
var statearr_45283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45283[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43542__auto__);

(statearr_45283[(1)] = (1));

return statearr_45283;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43542__auto____1 = (function (state_45247){
while(true){
var ret_value__43543__auto__ = (function (){try{while(true){
var result__43544__auto__ = switch__43541__auto__.call(null,state_45247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43544__auto__;
}
break;
}
}catch (e45284){if((e45284 instanceof Object)){
var ex__43545__auto__ = e45284;
var statearr_45285_45311 = state_45247;
(statearr_45285_45311[(5)] = ex__43545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45312 = state_45247;
state_45247 = G__45312;
continue;
} else {
return ret_value__43543__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43542__auto__ = function(state_45247){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43542__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43542__auto____1.call(this,state_45247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43542__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43542__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43542__auto__;
})()
;})(switch__43541__auto__,c__43631__auto__))
})();
var state__43633__auto__ = (function (){var statearr_45286 = f__43632__auto__.call(null);
(statearr_45286[(6)] = c__43631__auto__);

return statearr_45286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43633__auto__);
});})(c__43631__auto__))
);

return c__43631__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__45314 = arguments.length;
switch (G__45314) {
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
var G__45317 = arguments.length;
switch (G__45317) {
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
var G__45320 = arguments.length;
switch (G__45320) {
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
var c__43631__auto___45367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43631__auto___45367,out){
return (function (){
var f__43632__auto__ = (function (){var switch__43541__auto__ = ((function (c__43631__auto___45367,out){
return (function (state_45344){
var state_val_45345 = (state_45344[(1)]);
if((state_val_45345 === (7))){
var inst_45339 = (state_45344[(2)]);
var state_45344__$1 = state_45344;
var statearr_45346_45368 = state_45344__$1;
(statearr_45346_45368[(2)] = inst_45339);

(statearr_45346_45368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45345 === (1))){
var inst_45321 = null;
var state_45344__$1 = (function (){var statearr_45347 = state_45344;
(statearr_45347[(7)] = inst_45321);

return statearr_45347;
})();
var statearr_45348_45369 = state_45344__$1;
(statearr_45348_45369[(2)] = null);

(statearr_45348_45369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45345 === (4))){
var inst_45324 = (state_45344[(8)]);
var inst_45324__$1 = (state_45344[(2)]);
var inst_45325 = (inst_45324__$1 == null);
var inst_45326 = cljs.core.not.call(null,inst_45325);
var state_45344__$1 = (function (){var statearr_45349 = state_45344;
(statearr_45349[(8)] = inst_45324__$1);

return statearr_45349;
})();
if(inst_45326){
var statearr_45350_45370 = state_45344__$1;
(statearr_45350_45370[(1)] = (5));

} else {
var statearr_45351_45371 = state_45344__$1;
(statearr_45351_45371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45345 === (6))){
var state_45344__$1 = state_45344;
var statearr_45352_45372 = state_45344__$1;
(statearr_45352_45372[(2)] = null);

(statearr_45352_45372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45345 === (3))){
var inst_45341 = (state_45344[(2)]);
var inst_45342 = cljs.core.async.close_BANG_.call(null,out);
var state_45344__$1 = (function (){var statearr_45353 = state_45344;
(statearr_45353[(9)] = inst_45341);

return statearr_45353;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45344__$1,inst_45342);
} else {
if((state_val_45345 === (2))){
var state_45344__$1 = state_45344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45344__$1,(4),ch);
} else {
if((state_val_45345 === (11))){
var inst_45324 = (state_45344[(8)]);
var inst_45333 = (state_45344[(2)]);
var inst_45321 = inst_45324;
var state_45344__$1 = (function (){var statearr_45354 = state_45344;
(statearr_45354[(7)] = inst_45321);

(statearr_45354[(10)] = inst_45333);

return statearr_45354;
})();
var statearr_45355_45373 = state_45344__$1;
(statearr_45355_45373[(2)] = null);

(statearr_45355_45373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45345 === (9))){
var inst_45324 = (state_45344[(8)]);
var state_45344__$1 = state_45344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45344__$1,(11),out,inst_45324);
} else {
if((state_val_45345 === (5))){
var inst_45324 = (state_45344[(8)]);
var inst_45321 = (state_45344[(7)]);
var inst_45328 = cljs.core._EQ_.call(null,inst_45324,inst_45321);
var state_45344__$1 = state_45344;
if(inst_45328){
var statearr_45357_45374 = state_45344__$1;
(statearr_45357_45374[(1)] = (8));

} else {
var statearr_45358_45375 = state_45344__$1;
(statearr_45358_45375[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45345 === (10))){
var inst_45336 = (state_45344[(2)]);
var state_45344__$1 = state_45344;
var statearr_45359_45376 = state_45344__$1;
(statearr_45359_45376[(2)] = inst_45336);

(statearr_45359_45376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45345 === (8))){
var inst_45321 = (state_45344[(7)]);
var tmp45356 = inst_45321;
var inst_45321__$1 = tmp45356;
var state_45344__$1 = (function (){var statearr_45360 = state_45344;
(statearr_45360[(7)] = inst_45321__$1);

return statearr_45360;
})();
var statearr_45361_45377 = state_45344__$1;
(statearr_45361_45377[(2)] = null);

(statearr_45361_45377[(1)] = (2));


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
});})(c__43631__auto___45367,out))
;
return ((function (switch__43541__auto__,c__43631__auto___45367,out){
return (function() {
var cljs$core$async$state_machine__43542__auto__ = null;
var cljs$core$async$state_machine__43542__auto____0 = (function (){
var statearr_45362 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45362[(0)] = cljs$core$async$state_machine__43542__auto__);

(statearr_45362[(1)] = (1));

return statearr_45362;
});
var cljs$core$async$state_machine__43542__auto____1 = (function (state_45344){
while(true){
var ret_value__43543__auto__ = (function (){try{while(true){
var result__43544__auto__ = switch__43541__auto__.call(null,state_45344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43544__auto__;
}
break;
}
}catch (e45363){if((e45363 instanceof Object)){
var ex__43545__auto__ = e45363;
var statearr_45364_45378 = state_45344;
(statearr_45364_45378[(5)] = ex__43545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45379 = state_45344;
state_45344 = G__45379;
continue;
} else {
return ret_value__43543__auto__;
}
break;
}
});
cljs$core$async$state_machine__43542__auto__ = function(state_45344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43542__auto____1.call(this,state_45344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43542__auto____0;
cljs$core$async$state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43542__auto____1;
return cljs$core$async$state_machine__43542__auto__;
})()
;})(switch__43541__auto__,c__43631__auto___45367,out))
})();
var state__43633__auto__ = (function (){var statearr_45365 = f__43632__auto__.call(null);
(statearr_45365[(6)] = c__43631__auto___45367);

return statearr_45365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43633__auto__);
});})(c__43631__auto___45367,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__45381 = arguments.length;
switch (G__45381) {
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
var c__43631__auto___45447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43631__auto___45447,out){
return (function (){
var f__43632__auto__ = (function (){var switch__43541__auto__ = ((function (c__43631__auto___45447,out){
return (function (state_45419){
var state_val_45420 = (state_45419[(1)]);
if((state_val_45420 === (7))){
var inst_45415 = (state_45419[(2)]);
var state_45419__$1 = state_45419;
var statearr_45421_45448 = state_45419__$1;
(statearr_45421_45448[(2)] = inst_45415);

(statearr_45421_45448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45420 === (1))){
var inst_45382 = (new Array(n));
var inst_45383 = inst_45382;
var inst_45384 = (0);
var state_45419__$1 = (function (){var statearr_45422 = state_45419;
(statearr_45422[(7)] = inst_45384);

(statearr_45422[(8)] = inst_45383);

return statearr_45422;
})();
var statearr_45423_45449 = state_45419__$1;
(statearr_45423_45449[(2)] = null);

(statearr_45423_45449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45420 === (4))){
var inst_45387 = (state_45419[(9)]);
var inst_45387__$1 = (state_45419[(2)]);
var inst_45388 = (inst_45387__$1 == null);
var inst_45389 = cljs.core.not.call(null,inst_45388);
var state_45419__$1 = (function (){var statearr_45424 = state_45419;
(statearr_45424[(9)] = inst_45387__$1);

return statearr_45424;
})();
if(inst_45389){
var statearr_45425_45450 = state_45419__$1;
(statearr_45425_45450[(1)] = (5));

} else {
var statearr_45426_45451 = state_45419__$1;
(statearr_45426_45451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45420 === (15))){
var inst_45409 = (state_45419[(2)]);
var state_45419__$1 = state_45419;
var statearr_45427_45452 = state_45419__$1;
(statearr_45427_45452[(2)] = inst_45409);

(statearr_45427_45452[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45420 === (13))){
var state_45419__$1 = state_45419;
var statearr_45428_45453 = state_45419__$1;
(statearr_45428_45453[(2)] = null);

(statearr_45428_45453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45420 === (6))){
var inst_45384 = (state_45419[(7)]);
var inst_45405 = (inst_45384 > (0));
var state_45419__$1 = state_45419;
if(cljs.core.truth_(inst_45405)){
var statearr_45429_45454 = state_45419__$1;
(statearr_45429_45454[(1)] = (12));

} else {
var statearr_45430_45455 = state_45419__$1;
(statearr_45430_45455[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45420 === (3))){
var inst_45417 = (state_45419[(2)]);
var state_45419__$1 = state_45419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45419__$1,inst_45417);
} else {
if((state_val_45420 === (12))){
var inst_45383 = (state_45419[(8)]);
var inst_45407 = cljs.core.vec.call(null,inst_45383);
var state_45419__$1 = state_45419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45419__$1,(15),out,inst_45407);
} else {
if((state_val_45420 === (2))){
var state_45419__$1 = state_45419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45419__$1,(4),ch);
} else {
if((state_val_45420 === (11))){
var inst_45399 = (state_45419[(2)]);
var inst_45400 = (new Array(n));
var inst_45383 = inst_45400;
var inst_45384 = (0);
var state_45419__$1 = (function (){var statearr_45431 = state_45419;
(statearr_45431[(7)] = inst_45384);

(statearr_45431[(8)] = inst_45383);

(statearr_45431[(10)] = inst_45399);

return statearr_45431;
})();
var statearr_45432_45456 = state_45419__$1;
(statearr_45432_45456[(2)] = null);

(statearr_45432_45456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45420 === (9))){
var inst_45383 = (state_45419[(8)]);
var inst_45397 = cljs.core.vec.call(null,inst_45383);
var state_45419__$1 = state_45419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45419__$1,(11),out,inst_45397);
} else {
if((state_val_45420 === (5))){
var inst_45384 = (state_45419[(7)]);
var inst_45392 = (state_45419[(11)]);
var inst_45387 = (state_45419[(9)]);
var inst_45383 = (state_45419[(8)]);
var inst_45391 = (inst_45383[inst_45384] = inst_45387);
var inst_45392__$1 = (inst_45384 + (1));
var inst_45393 = (inst_45392__$1 < n);
var state_45419__$1 = (function (){var statearr_45433 = state_45419;
(statearr_45433[(12)] = inst_45391);

(statearr_45433[(11)] = inst_45392__$1);

return statearr_45433;
})();
if(cljs.core.truth_(inst_45393)){
var statearr_45434_45457 = state_45419__$1;
(statearr_45434_45457[(1)] = (8));

} else {
var statearr_45435_45458 = state_45419__$1;
(statearr_45435_45458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45420 === (14))){
var inst_45412 = (state_45419[(2)]);
var inst_45413 = cljs.core.async.close_BANG_.call(null,out);
var state_45419__$1 = (function (){var statearr_45437 = state_45419;
(statearr_45437[(13)] = inst_45412);

return statearr_45437;
})();
var statearr_45438_45459 = state_45419__$1;
(statearr_45438_45459[(2)] = inst_45413);

(statearr_45438_45459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45420 === (10))){
var inst_45403 = (state_45419[(2)]);
var state_45419__$1 = state_45419;
var statearr_45439_45460 = state_45419__$1;
(statearr_45439_45460[(2)] = inst_45403);

(statearr_45439_45460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45420 === (8))){
var inst_45392 = (state_45419[(11)]);
var inst_45383 = (state_45419[(8)]);
var tmp45436 = inst_45383;
var inst_45383__$1 = tmp45436;
var inst_45384 = inst_45392;
var state_45419__$1 = (function (){var statearr_45440 = state_45419;
(statearr_45440[(7)] = inst_45384);

(statearr_45440[(8)] = inst_45383__$1);

return statearr_45440;
})();
var statearr_45441_45461 = state_45419__$1;
(statearr_45441_45461[(2)] = null);

(statearr_45441_45461[(1)] = (2));


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
});})(c__43631__auto___45447,out))
;
return ((function (switch__43541__auto__,c__43631__auto___45447,out){
return (function() {
var cljs$core$async$state_machine__43542__auto__ = null;
var cljs$core$async$state_machine__43542__auto____0 = (function (){
var statearr_45442 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45442[(0)] = cljs$core$async$state_machine__43542__auto__);

(statearr_45442[(1)] = (1));

return statearr_45442;
});
var cljs$core$async$state_machine__43542__auto____1 = (function (state_45419){
while(true){
var ret_value__43543__auto__ = (function (){try{while(true){
var result__43544__auto__ = switch__43541__auto__.call(null,state_45419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43544__auto__;
}
break;
}
}catch (e45443){if((e45443 instanceof Object)){
var ex__43545__auto__ = e45443;
var statearr_45444_45462 = state_45419;
(statearr_45444_45462[(5)] = ex__43545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45463 = state_45419;
state_45419 = G__45463;
continue;
} else {
return ret_value__43543__auto__;
}
break;
}
});
cljs$core$async$state_machine__43542__auto__ = function(state_45419){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43542__auto____1.call(this,state_45419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43542__auto____0;
cljs$core$async$state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43542__auto____1;
return cljs$core$async$state_machine__43542__auto__;
})()
;})(switch__43541__auto__,c__43631__auto___45447,out))
})();
var state__43633__auto__ = (function (){var statearr_45445 = f__43632__auto__.call(null);
(statearr_45445[(6)] = c__43631__auto___45447);

return statearr_45445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43633__auto__);
});})(c__43631__auto___45447,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__45465 = arguments.length;
switch (G__45465) {
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
var c__43631__auto___45535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43631__auto___45535,out){
return (function (){
var f__43632__auto__ = (function (){var switch__43541__auto__ = ((function (c__43631__auto___45535,out){
return (function (state_45507){
var state_val_45508 = (state_45507[(1)]);
if((state_val_45508 === (7))){
var inst_45503 = (state_45507[(2)]);
var state_45507__$1 = state_45507;
var statearr_45509_45536 = state_45507__$1;
(statearr_45509_45536[(2)] = inst_45503);

(statearr_45509_45536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45508 === (1))){
var inst_45466 = [];
var inst_45467 = inst_45466;
var inst_45468 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45507__$1 = (function (){var statearr_45510 = state_45507;
(statearr_45510[(7)] = inst_45467);

(statearr_45510[(8)] = inst_45468);

return statearr_45510;
})();
var statearr_45511_45537 = state_45507__$1;
(statearr_45511_45537[(2)] = null);

(statearr_45511_45537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45508 === (4))){
var inst_45471 = (state_45507[(9)]);
var inst_45471__$1 = (state_45507[(2)]);
var inst_45472 = (inst_45471__$1 == null);
var inst_45473 = cljs.core.not.call(null,inst_45472);
var state_45507__$1 = (function (){var statearr_45512 = state_45507;
(statearr_45512[(9)] = inst_45471__$1);

return statearr_45512;
})();
if(inst_45473){
var statearr_45513_45538 = state_45507__$1;
(statearr_45513_45538[(1)] = (5));

} else {
var statearr_45514_45539 = state_45507__$1;
(statearr_45514_45539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45508 === (15))){
var inst_45497 = (state_45507[(2)]);
var state_45507__$1 = state_45507;
var statearr_45515_45540 = state_45507__$1;
(statearr_45515_45540[(2)] = inst_45497);

(statearr_45515_45540[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45508 === (13))){
var state_45507__$1 = state_45507;
var statearr_45516_45541 = state_45507__$1;
(statearr_45516_45541[(2)] = null);

(statearr_45516_45541[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45508 === (6))){
var inst_45467 = (state_45507[(7)]);
var inst_45492 = inst_45467.length;
var inst_45493 = (inst_45492 > (0));
var state_45507__$1 = state_45507;
if(cljs.core.truth_(inst_45493)){
var statearr_45517_45542 = state_45507__$1;
(statearr_45517_45542[(1)] = (12));

} else {
var statearr_45518_45543 = state_45507__$1;
(statearr_45518_45543[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45508 === (3))){
var inst_45505 = (state_45507[(2)]);
var state_45507__$1 = state_45507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45507__$1,inst_45505);
} else {
if((state_val_45508 === (12))){
var inst_45467 = (state_45507[(7)]);
var inst_45495 = cljs.core.vec.call(null,inst_45467);
var state_45507__$1 = state_45507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45507__$1,(15),out,inst_45495);
} else {
if((state_val_45508 === (2))){
var state_45507__$1 = state_45507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45507__$1,(4),ch);
} else {
if((state_val_45508 === (11))){
var inst_45475 = (state_45507[(10)]);
var inst_45471 = (state_45507[(9)]);
var inst_45485 = (state_45507[(2)]);
var inst_45486 = [];
var inst_45487 = inst_45486.push(inst_45471);
var inst_45467 = inst_45486;
var inst_45468 = inst_45475;
var state_45507__$1 = (function (){var statearr_45519 = state_45507;
(statearr_45519[(11)] = inst_45487);

(statearr_45519[(7)] = inst_45467);

(statearr_45519[(8)] = inst_45468);

(statearr_45519[(12)] = inst_45485);

return statearr_45519;
})();
var statearr_45520_45544 = state_45507__$1;
(statearr_45520_45544[(2)] = null);

(statearr_45520_45544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45508 === (9))){
var inst_45467 = (state_45507[(7)]);
var inst_45483 = cljs.core.vec.call(null,inst_45467);
var state_45507__$1 = state_45507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45507__$1,(11),out,inst_45483);
} else {
if((state_val_45508 === (5))){
var inst_45475 = (state_45507[(10)]);
var inst_45468 = (state_45507[(8)]);
var inst_45471 = (state_45507[(9)]);
var inst_45475__$1 = f.call(null,inst_45471);
var inst_45476 = cljs.core._EQ_.call(null,inst_45475__$1,inst_45468);
var inst_45477 = cljs.core.keyword_identical_QMARK_.call(null,inst_45468,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_45478 = ((inst_45476) || (inst_45477));
var state_45507__$1 = (function (){var statearr_45521 = state_45507;
(statearr_45521[(10)] = inst_45475__$1);

return statearr_45521;
})();
if(cljs.core.truth_(inst_45478)){
var statearr_45522_45545 = state_45507__$1;
(statearr_45522_45545[(1)] = (8));

} else {
var statearr_45523_45546 = state_45507__$1;
(statearr_45523_45546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45508 === (14))){
var inst_45500 = (state_45507[(2)]);
var inst_45501 = cljs.core.async.close_BANG_.call(null,out);
var state_45507__$1 = (function (){var statearr_45525 = state_45507;
(statearr_45525[(13)] = inst_45500);

return statearr_45525;
})();
var statearr_45526_45547 = state_45507__$1;
(statearr_45526_45547[(2)] = inst_45501);

(statearr_45526_45547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45508 === (10))){
var inst_45490 = (state_45507[(2)]);
var state_45507__$1 = state_45507;
var statearr_45527_45548 = state_45507__$1;
(statearr_45527_45548[(2)] = inst_45490);

(statearr_45527_45548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45508 === (8))){
var inst_45467 = (state_45507[(7)]);
var inst_45475 = (state_45507[(10)]);
var inst_45471 = (state_45507[(9)]);
var inst_45480 = inst_45467.push(inst_45471);
var tmp45524 = inst_45467;
var inst_45467__$1 = tmp45524;
var inst_45468 = inst_45475;
var state_45507__$1 = (function (){var statearr_45528 = state_45507;
(statearr_45528[(7)] = inst_45467__$1);

(statearr_45528[(8)] = inst_45468);

(statearr_45528[(14)] = inst_45480);

return statearr_45528;
})();
var statearr_45529_45549 = state_45507__$1;
(statearr_45529_45549[(2)] = null);

(statearr_45529_45549[(1)] = (2));


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
});})(c__43631__auto___45535,out))
;
return ((function (switch__43541__auto__,c__43631__auto___45535,out){
return (function() {
var cljs$core$async$state_machine__43542__auto__ = null;
var cljs$core$async$state_machine__43542__auto____0 = (function (){
var statearr_45530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45530[(0)] = cljs$core$async$state_machine__43542__auto__);

(statearr_45530[(1)] = (1));

return statearr_45530;
});
var cljs$core$async$state_machine__43542__auto____1 = (function (state_45507){
while(true){
var ret_value__43543__auto__ = (function (){try{while(true){
var result__43544__auto__ = switch__43541__auto__.call(null,state_45507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43544__auto__;
}
break;
}
}catch (e45531){if((e45531 instanceof Object)){
var ex__43545__auto__ = e45531;
var statearr_45532_45550 = state_45507;
(statearr_45532_45550[(5)] = ex__43545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45551 = state_45507;
state_45507 = G__45551;
continue;
} else {
return ret_value__43543__auto__;
}
break;
}
});
cljs$core$async$state_machine__43542__auto__ = function(state_45507){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43542__auto____1.call(this,state_45507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43542__auto____0;
cljs$core$async$state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43542__auto____1;
return cljs$core$async$state_machine__43542__auto__;
})()
;})(switch__43541__auto__,c__43631__auto___45535,out))
})();
var state__43633__auto__ = (function (){var statearr_45533 = f__43632__auto__.call(null);
(statearr_45533[(6)] = c__43631__auto___45535);

return statearr_45533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43633__auto__);
});})(c__43631__auto___45535,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1553997026860
