goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26319 = (function (f,blockable,meta26320){
this.f = f;
this.blockable = blockable;
this.meta26320 = meta26320;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26321,meta26320__$1){
var self__ = this;
var _26321__$1 = this;
return (new cljs.core.async.t_cljs$core$async26319(self__.f,self__.blockable,meta26320__$1));
}));

(cljs.core.async.t_cljs$core$async26319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26321){
var self__ = this;
var _26321__$1 = this;
return self__.meta26320;
}));

(cljs.core.async.t_cljs$core$async26319.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26319.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26319.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async26319.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async26319.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26320","meta26320",-1629086351,null)], null);
}));

(cljs.core.async.t_cljs$core$async26319.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26319.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26319");

(cljs.core.async.t_cljs$core$async26319.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async26319");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26319.
 */
cljs.core.async.__GT_t_cljs$core$async26319 = (function cljs$core$async$__GT_t_cljs$core$async26319(f,blockable,meta26320){
return (new cljs.core.async.t_cljs$core$async26319(f,blockable,meta26320));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__26318 = arguments.length;
switch (G__26318) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async26319(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__26324 = arguments.length;
switch (G__26324) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__26330 = arguments.length;
switch (G__26330) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__26332 = arguments.length;
switch (G__26332) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_28534 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_28534) : fn1.call(null,val_28534));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_28534) : fn1.call(null,val_28534));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__26340 = arguments.length;
switch (G__26340) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___28536 = n;
var x_28537 = (0);
while(true){
if((x_28537 < n__5636__auto___28536)){
(a[x_28537] = x_28537);

var G__28538 = (x_28537 + (1));
x_28537 = G__28538;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26351 = (function (flag,meta26352){
this.flag = flag;
this.meta26352 = meta26352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26353,meta26352__$1){
var self__ = this;
var _26353__$1 = this;
return (new cljs.core.async.t_cljs$core$async26351(self__.flag,meta26352__$1));
}));

(cljs.core.async.t_cljs$core$async26351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26353){
var self__ = this;
var _26353__$1 = this;
return self__.meta26352;
}));

(cljs.core.async.t_cljs$core$async26351.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26351.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async26351.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26351.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async26351.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26352","meta26352",1886968604,null)], null);
}));

(cljs.core.async.t_cljs$core$async26351.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26351.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26351");

(cljs.core.async.t_cljs$core$async26351.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async26351");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26351.
 */
cljs.core.async.__GT_t_cljs$core$async26351 = (function cljs$core$async$__GT_t_cljs$core$async26351(flag,meta26352){
return (new cljs.core.async.t_cljs$core$async26351(flag,meta26352));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async26351(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26361 = (function (flag,cb,meta26362){
this.flag = flag;
this.cb = cb;
this.meta26362 = meta26362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26363,meta26362__$1){
var self__ = this;
var _26363__$1 = this;
return (new cljs.core.async.t_cljs$core$async26361(self__.flag,self__.cb,meta26362__$1));
}));

(cljs.core.async.t_cljs$core$async26361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26363){
var self__ = this;
var _26363__$1 = this;
return self__.meta26362;
}));

(cljs.core.async.t_cljs$core$async26361.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26361.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async26361.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26361.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async26361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26362","meta26362",1820502249,null)], null);
}));

(cljs.core.async.t_cljs$core$async26361.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26361.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26361");

(cljs.core.async.t_cljs$core$async26361.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async26361");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26361.
 */
cljs.core.async.__GT_t_cljs$core$async26361 = (function cljs$core$async$__GT_t_cljs$core$async26361(flag,cb,meta26362){
return (new cljs.core.async.t_cljs$core$async26361(flag,cb,meta26362));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async26361(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26373_SHARP_){
var G__26385 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26373_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__26385) : fret.call(null,G__26385));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26375_SHARP_){
var G__26387 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26375_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__26387) : fret.call(null,G__26387));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28554 = (i + (1));
i = G__28554;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__5775__auto__ = [];
var len__5769__auto___28562 = arguments.length;
var i__5770__auto___28563 = (0);
while(true){
if((i__5770__auto___28563 < len__5769__auto___28562)){
args__5775__auto__.push((arguments[i__5770__auto___28563]));

var G__28564 = (i__5770__auto___28563 + (1));
i__5770__auto___28563 = G__28564;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26406){
var map__26410 = p__26406;
var map__26410__$1 = cljs.core.__destructure_map(map__26410);
var opts = map__26410__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26400){
var G__26401 = cljs.core.first(seq26400);
var seq26400__$1 = cljs.core.next(seq26400);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26401,seq26400__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__26421 = arguments.length;
switch (G__26421) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26254__auto___28569 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26255__auto__ = (function (){var switch__26115__auto__ = (function (state_26465){
var state_val_26466 = (state_26465[(1)]);
if((state_val_26466 === (7))){
var inst_26461 = (state_26465[(2)]);
var state_26465__$1 = state_26465;
var statearr_26476_28573 = state_26465__$1;
(statearr_26476_28573[(2)] = inst_26461);

(statearr_26476_28573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26466 === (1))){
var state_26465__$1 = state_26465;
var statearr_26478_28590 = state_26465__$1;
(statearr_26478_28590[(2)] = null);

(statearr_26478_28590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26466 === (4))){
var inst_26440 = (state_26465[(7)]);
var inst_26440__$1 = (state_26465[(2)]);
var inst_26443 = (inst_26440__$1 == null);
var state_26465__$1 = (function (){var statearr_26480 = state_26465;
(statearr_26480[(7)] = inst_26440__$1);

return statearr_26480;
})();
if(cljs.core.truth_(inst_26443)){
var statearr_26481_28592 = state_26465__$1;
(statearr_26481_28592[(1)] = (5));

} else {
var statearr_26483_28593 = state_26465__$1;
(statearr_26483_28593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26466 === (13))){
var state_26465__$1 = state_26465;
var statearr_26484_28594 = state_26465__$1;
(statearr_26484_28594[(2)] = null);

(statearr_26484_28594[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26466 === (6))){
var inst_26440 = (state_26465[(7)]);
var state_26465__$1 = state_26465;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26465__$1,(11),to,inst_26440);
} else {
if((state_val_26466 === (3))){
var inst_26463 = (state_26465[(2)]);
var state_26465__$1 = state_26465;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26465__$1,inst_26463);
} else {
if((state_val_26466 === (12))){
var state_26465__$1 = state_26465;
var statearr_26487_28600 = state_26465__$1;
(statearr_26487_28600[(2)] = null);

(statearr_26487_28600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26466 === (2))){
var state_26465__$1 = state_26465;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26465__$1,(4),from);
} else {
if((state_val_26466 === (11))){
var inst_26454 = (state_26465[(2)]);
var state_26465__$1 = state_26465;
if(cljs.core.truth_(inst_26454)){
var statearr_26488_28602 = state_26465__$1;
(statearr_26488_28602[(1)] = (12));

} else {
var statearr_26489_28603 = state_26465__$1;
(statearr_26489_28603[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26466 === (9))){
var state_26465__$1 = state_26465;
var statearr_26491_28604 = state_26465__$1;
(statearr_26491_28604[(2)] = null);

(statearr_26491_28604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26466 === (5))){
var state_26465__$1 = state_26465;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26492_28605 = state_26465__$1;
(statearr_26492_28605[(1)] = (8));

} else {
var statearr_26493_28606 = state_26465__$1;
(statearr_26493_28606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26466 === (14))){
var inst_26459 = (state_26465[(2)]);
var state_26465__$1 = state_26465;
var statearr_26494_28607 = state_26465__$1;
(statearr_26494_28607[(2)] = inst_26459);

(statearr_26494_28607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26466 === (10))){
var inst_26451 = (state_26465[(2)]);
var state_26465__$1 = state_26465;
var statearr_26498_28608 = state_26465__$1;
(statearr_26498_28608[(2)] = inst_26451);

(statearr_26498_28608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26466 === (8))){
var inst_26448 = cljs.core.async.close_BANG_(to);
var state_26465__$1 = state_26465;
var statearr_26499_28609 = state_26465__$1;
(statearr_26499_28609[(2)] = inst_26448);

(statearr_26499_28609[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__26116__auto__ = null;
var cljs$core$async$state_machine__26116__auto____0 = (function (){
var statearr_26520 = [null,null,null,null,null,null,null,null];
(statearr_26520[(0)] = cljs$core$async$state_machine__26116__auto__);

(statearr_26520[(1)] = (1));

return statearr_26520;
});
var cljs$core$async$state_machine__26116__auto____1 = (function (state_26465){
while(true){
var ret_value__26117__auto__ = (function (){try{while(true){
var result__26118__auto__ = switch__26115__auto__(state_26465);
if(cljs.core.keyword_identical_QMARK_(result__26118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26118__auto__;
}
break;
}
}catch (e26521){var ex__26119__auto__ = e26521;
var statearr_26522_28611 = state_26465;
(statearr_26522_28611[(2)] = ex__26119__auto__);


if(cljs.core.seq((state_26465[(4)]))){
var statearr_26523_28612 = state_26465;
(statearr_26523_28612[(1)] = cljs.core.first((state_26465[(4)])));

} else {
throw ex__26119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28613 = state_26465;
state_26465 = G__28613;
continue;
} else {
return ret_value__26117__auto__;
}
break;
}
});
cljs$core$async$state_machine__26116__auto__ = function(state_26465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26116__auto____1.call(this,state_26465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26116__auto____0;
cljs$core$async$state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26116__auto____1;
return cljs$core$async$state_machine__26116__auto__;
})()
})();
var state__26256__auto__ = (function (){var statearr_26528 = f__26255__auto__();
(statearr_26528[(6)] = c__26254__auto___28569);

return statearr_26528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26256__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__26548){
var vec__26549 = p__26548;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26549,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26549,(1),null);
var job = vec__26549;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__26254__auto___28615 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26255__auto__ = (function (){var switch__26115__auto__ = (function (state_26557){
var state_val_26558 = (state_26557[(1)]);
if((state_val_26558 === (1))){
var state_26557__$1 = state_26557;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26557__$1,(2),res,v);
} else {
if((state_val_26558 === (2))){
var inst_26554 = (state_26557[(2)]);
var inst_26555 = cljs.core.async.close_BANG_(res);
var state_26557__$1 = (function (){var statearr_26561 = state_26557;
(statearr_26561[(7)] = inst_26554);

return statearr_26561;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26557__$1,inst_26555);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26116__auto____0 = (function (){
var statearr_26574 = [null,null,null,null,null,null,null,null];
(statearr_26574[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26116__auto__);

(statearr_26574[(1)] = (1));

return statearr_26574;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26116__auto____1 = (function (state_26557){
while(true){
var ret_value__26117__auto__ = (function (){try{while(true){
var result__26118__auto__ = switch__26115__auto__(state_26557);
if(cljs.core.keyword_identical_QMARK_(result__26118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26118__auto__;
}
break;
}
}catch (e26583){var ex__26119__auto__ = e26583;
var statearr_26584_28616 = state_26557;
(statearr_26584_28616[(2)] = ex__26119__auto__);


if(cljs.core.seq((state_26557[(4)]))){
var statearr_26585_28617 = state_26557;
(statearr_26585_28617[(1)] = cljs.core.first((state_26557[(4)])));

} else {
throw ex__26119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28618 = state_26557;
state_26557 = G__28618;
continue;
} else {
return ret_value__26117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26116__auto__ = function(state_26557){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26116__auto____1.call(this,state_26557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26116__auto__;
})()
})();
var state__26256__auto__ = (function (){var statearr_26586 = f__26255__auto__();
(statearr_26586[(6)] = c__26254__auto___28615);

return statearr_26586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26256__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__26587){
var vec__26588 = p__26587;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26588,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26588,(1),null);
var job = vec__26588;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___28619 = n;
var __28620 = (0);
while(true){
if((__28620 < n__5636__auto___28619)){
var G__26591_28621 = type;
var G__26591_28622__$1 = (((G__26591_28621 instanceof cljs.core.Keyword))?G__26591_28621.fqn:null);
switch (G__26591_28622__$1) {
case "compute":
var c__26254__auto___28624 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__28620,c__26254__auto___28624,G__26591_28621,G__26591_28622__$1,n__5636__auto___28619,jobs,results,process__$1,async){
return (function (){
var f__26255__auto__ = (function (){var switch__26115__auto__ = ((function (__28620,c__26254__auto___28624,G__26591_28621,G__26591_28622__$1,n__5636__auto___28619,jobs,results,process__$1,async){
return (function (state_26604){
var state_val_26605 = (state_26604[(1)]);
if((state_val_26605 === (1))){
var state_26604__$1 = state_26604;
var statearr_26606_28625 = state_26604__$1;
(statearr_26606_28625[(2)] = null);

(statearr_26606_28625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26605 === (2))){
var state_26604__$1 = state_26604;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26604__$1,(4),jobs);
} else {
if((state_val_26605 === (3))){
var inst_26602 = (state_26604[(2)]);
var state_26604__$1 = state_26604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26604__$1,inst_26602);
} else {
if((state_val_26605 === (4))){
var inst_26594 = (state_26604[(2)]);
var inst_26595 = process__$1(inst_26594);
var state_26604__$1 = state_26604;
if(cljs.core.truth_(inst_26595)){
var statearr_26607_28626 = state_26604__$1;
(statearr_26607_28626[(1)] = (5));

} else {
var statearr_26608_28627 = state_26604__$1;
(statearr_26608_28627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26605 === (5))){
var state_26604__$1 = state_26604;
var statearr_26609_28629 = state_26604__$1;
(statearr_26609_28629[(2)] = null);

(statearr_26609_28629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26605 === (6))){
var state_26604__$1 = state_26604;
var statearr_26610_28630 = state_26604__$1;
(statearr_26610_28630[(2)] = null);

(statearr_26610_28630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26605 === (7))){
var inst_26600 = (state_26604[(2)]);
var state_26604__$1 = state_26604;
var statearr_26612_28631 = state_26604__$1;
(statearr_26612_28631[(2)] = inst_26600);

(statearr_26612_28631[(1)] = (3));


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
});})(__28620,c__26254__auto___28624,G__26591_28621,G__26591_28622__$1,n__5636__auto___28619,jobs,results,process__$1,async))
;
return ((function (__28620,switch__26115__auto__,c__26254__auto___28624,G__26591_28621,G__26591_28622__$1,n__5636__auto___28619,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26116__auto____0 = (function (){
var statearr_26613 = [null,null,null,null,null,null,null];
(statearr_26613[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26116__auto__);

(statearr_26613[(1)] = (1));

return statearr_26613;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26116__auto____1 = (function (state_26604){
while(true){
var ret_value__26117__auto__ = (function (){try{while(true){
var result__26118__auto__ = switch__26115__auto__(state_26604);
if(cljs.core.keyword_identical_QMARK_(result__26118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26118__auto__;
}
break;
}
}catch (e26614){var ex__26119__auto__ = e26614;
var statearr_26615_28633 = state_26604;
(statearr_26615_28633[(2)] = ex__26119__auto__);


if(cljs.core.seq((state_26604[(4)]))){
var statearr_26616_28634 = state_26604;
(statearr_26616_28634[(1)] = cljs.core.first((state_26604[(4)])));

} else {
throw ex__26119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28635 = state_26604;
state_26604 = G__28635;
continue;
} else {
return ret_value__26117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26116__auto__ = function(state_26604){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26116__auto____1.call(this,state_26604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26116__auto__;
})()
;})(__28620,switch__26115__auto__,c__26254__auto___28624,G__26591_28621,G__26591_28622__$1,n__5636__auto___28619,jobs,results,process__$1,async))
})();
var state__26256__auto__ = (function (){var statearr_26617 = f__26255__auto__();
(statearr_26617[(6)] = c__26254__auto___28624);

return statearr_26617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26256__auto__);
});})(__28620,c__26254__auto___28624,G__26591_28621,G__26591_28622__$1,n__5636__auto___28619,jobs,results,process__$1,async))
);


break;
case "async":
var c__26254__auto___28636 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__28620,c__26254__auto___28636,G__26591_28621,G__26591_28622__$1,n__5636__auto___28619,jobs,results,process__$1,async){
return (function (){
var f__26255__auto__ = (function (){var switch__26115__auto__ = ((function (__28620,c__26254__auto___28636,G__26591_28621,G__26591_28622__$1,n__5636__auto___28619,jobs,results,process__$1,async){
return (function (state_26630){
var state_val_26631 = (state_26630[(1)]);
if((state_val_26631 === (1))){
var state_26630__$1 = state_26630;
var statearr_26632_28637 = state_26630__$1;
(statearr_26632_28637[(2)] = null);

(statearr_26632_28637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (2))){
var state_26630__$1 = state_26630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26630__$1,(4),jobs);
} else {
if((state_val_26631 === (3))){
var inst_26628 = (state_26630[(2)]);
var state_26630__$1 = state_26630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26630__$1,inst_26628);
} else {
if((state_val_26631 === (4))){
var inst_26620 = (state_26630[(2)]);
var inst_26621 = async(inst_26620);
var state_26630__$1 = state_26630;
if(cljs.core.truth_(inst_26621)){
var statearr_26633_28638 = state_26630__$1;
(statearr_26633_28638[(1)] = (5));

} else {
var statearr_26634_28639 = state_26630__$1;
(statearr_26634_28639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (5))){
var state_26630__$1 = state_26630;
var statearr_26635_28640 = state_26630__$1;
(statearr_26635_28640[(2)] = null);

(statearr_26635_28640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (6))){
var state_26630__$1 = state_26630;
var statearr_26699_28641 = state_26630__$1;
(statearr_26699_28641[(2)] = null);

(statearr_26699_28641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26631 === (7))){
var inst_26626 = (state_26630[(2)]);
var state_26630__$1 = state_26630;
var statearr_26700_28642 = state_26630__$1;
(statearr_26700_28642[(2)] = inst_26626);

(statearr_26700_28642[(1)] = (3));


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
});})(__28620,c__26254__auto___28636,G__26591_28621,G__26591_28622__$1,n__5636__auto___28619,jobs,results,process__$1,async))
;
return ((function (__28620,switch__26115__auto__,c__26254__auto___28636,G__26591_28621,G__26591_28622__$1,n__5636__auto___28619,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26116__auto____0 = (function (){
var statearr_26702 = [null,null,null,null,null,null,null];
(statearr_26702[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26116__auto__);

(statearr_26702[(1)] = (1));

return statearr_26702;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26116__auto____1 = (function (state_26630){
while(true){
var ret_value__26117__auto__ = (function (){try{while(true){
var result__26118__auto__ = switch__26115__auto__(state_26630);
if(cljs.core.keyword_identical_QMARK_(result__26118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26118__auto__;
}
break;
}
}catch (e26703){var ex__26119__auto__ = e26703;
var statearr_26704_28645 = state_26630;
(statearr_26704_28645[(2)] = ex__26119__auto__);


if(cljs.core.seq((state_26630[(4)]))){
var statearr_26705_28646 = state_26630;
(statearr_26705_28646[(1)] = cljs.core.first((state_26630[(4)])));

} else {
throw ex__26119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28647 = state_26630;
state_26630 = G__28647;
continue;
} else {
return ret_value__26117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26116__auto__ = function(state_26630){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26116__auto____1.call(this,state_26630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26116__auto__;
})()
;})(__28620,switch__26115__auto__,c__26254__auto___28636,G__26591_28621,G__26591_28622__$1,n__5636__auto___28619,jobs,results,process__$1,async))
})();
var state__26256__auto__ = (function (){var statearr_26706 = f__26255__auto__();
(statearr_26706[(6)] = c__26254__auto___28636);

return statearr_26706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26256__auto__);
});})(__28620,c__26254__auto___28636,G__26591_28621,G__26591_28622__$1,n__5636__auto___28619,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26591_28622__$1)].join('')));

}

var G__28648 = (__28620 + (1));
__28620 = G__28648;
continue;
} else {
}
break;
}

var c__26254__auto___28649 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26255__auto__ = (function (){var switch__26115__auto__ = (function (state_26740){
var state_val_26741 = (state_26740[(1)]);
if((state_val_26741 === (7))){
var inst_26736 = (state_26740[(2)]);
var state_26740__$1 = state_26740;
var statearr_26744_28651 = state_26740__$1;
(statearr_26744_28651[(2)] = inst_26736);

(statearr_26744_28651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (1))){
var state_26740__$1 = state_26740;
var statearr_26745_28653 = state_26740__$1;
(statearr_26745_28653[(2)] = null);

(statearr_26745_28653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (4))){
var inst_26721 = (state_26740[(7)]);
var inst_26721__$1 = (state_26740[(2)]);
var inst_26722 = (inst_26721__$1 == null);
var state_26740__$1 = (function (){var statearr_26746 = state_26740;
(statearr_26746[(7)] = inst_26721__$1);

return statearr_26746;
})();
if(cljs.core.truth_(inst_26722)){
var statearr_26747_28654 = state_26740__$1;
(statearr_26747_28654[(1)] = (5));

} else {
var statearr_26748_28655 = state_26740__$1;
(statearr_26748_28655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (6))){
var inst_26721 = (state_26740[(7)]);
var inst_26726 = (state_26740[(8)]);
var inst_26726__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_26727 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26728 = [inst_26721,inst_26726__$1];
var inst_26729 = (new cljs.core.PersistentVector(null,2,(5),inst_26727,inst_26728,null));
var state_26740__$1 = (function (){var statearr_26749 = state_26740;
(statearr_26749[(8)] = inst_26726__$1);

return statearr_26749;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26740__$1,(8),jobs,inst_26729);
} else {
if((state_val_26741 === (3))){
var inst_26738 = (state_26740[(2)]);
var state_26740__$1 = state_26740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26740__$1,inst_26738);
} else {
if((state_val_26741 === (2))){
var state_26740__$1 = state_26740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26740__$1,(4),from);
} else {
if((state_val_26741 === (9))){
var inst_26733 = (state_26740[(2)]);
var state_26740__$1 = (function (){var statearr_26750 = state_26740;
(statearr_26750[(9)] = inst_26733);

return statearr_26750;
})();
var statearr_26751_28657 = state_26740__$1;
(statearr_26751_28657[(2)] = null);

(statearr_26751_28657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (5))){
var inst_26724 = cljs.core.async.close_BANG_(jobs);
var state_26740__$1 = state_26740;
var statearr_26752_28659 = state_26740__$1;
(statearr_26752_28659[(2)] = inst_26724);

(statearr_26752_28659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (8))){
var inst_26726 = (state_26740[(8)]);
var inst_26731 = (state_26740[(2)]);
var state_26740__$1 = (function (){var statearr_26753 = state_26740;
(statearr_26753[(10)] = inst_26731);

return statearr_26753;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26740__$1,(9),results,inst_26726);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26116__auto____0 = (function (){
var statearr_26754 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26754[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26116__auto__);

(statearr_26754[(1)] = (1));

return statearr_26754;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26116__auto____1 = (function (state_26740){
while(true){
var ret_value__26117__auto__ = (function (){try{while(true){
var result__26118__auto__ = switch__26115__auto__(state_26740);
if(cljs.core.keyword_identical_QMARK_(result__26118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26118__auto__;
}
break;
}
}catch (e26755){var ex__26119__auto__ = e26755;
var statearr_26756_28670 = state_26740;
(statearr_26756_28670[(2)] = ex__26119__auto__);


if(cljs.core.seq((state_26740[(4)]))){
var statearr_26757_28671 = state_26740;
(statearr_26757_28671[(1)] = cljs.core.first((state_26740[(4)])));

} else {
throw ex__26119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28672 = state_26740;
state_26740 = G__28672;
continue;
} else {
return ret_value__26117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26116__auto__ = function(state_26740){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26116__auto____1.call(this,state_26740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26116__auto__;
})()
})();
var state__26256__auto__ = (function (){var statearr_26758 = f__26255__auto__();
(statearr_26758[(6)] = c__26254__auto___28649);

return statearr_26758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26256__auto__);
}));


var c__26254__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26255__auto__ = (function (){var switch__26115__auto__ = (function (state_26796){
var state_val_26797 = (state_26796[(1)]);
if((state_val_26797 === (7))){
var inst_26792 = (state_26796[(2)]);
var state_26796__$1 = state_26796;
var statearr_26798_28678 = state_26796__$1;
(statearr_26798_28678[(2)] = inst_26792);

(statearr_26798_28678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26797 === (20))){
var state_26796__$1 = state_26796;
var statearr_26799_28679 = state_26796__$1;
(statearr_26799_28679[(2)] = null);

(statearr_26799_28679[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26797 === (1))){
var state_26796__$1 = state_26796;
var statearr_26800_28680 = state_26796__$1;
(statearr_26800_28680[(2)] = null);

(statearr_26800_28680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26797 === (4))){
var inst_26761 = (state_26796[(7)]);
var inst_26761__$1 = (state_26796[(2)]);
var inst_26762 = (inst_26761__$1 == null);
var state_26796__$1 = (function (){var statearr_26801 = state_26796;
(statearr_26801[(7)] = inst_26761__$1);

return statearr_26801;
})();
if(cljs.core.truth_(inst_26762)){
var statearr_26802_28682 = state_26796__$1;
(statearr_26802_28682[(1)] = (5));

} else {
var statearr_26803_28683 = state_26796__$1;
(statearr_26803_28683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26797 === (15))){
var inst_26774 = (state_26796[(8)]);
var state_26796__$1 = state_26796;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26796__$1,(18),to,inst_26774);
} else {
if((state_val_26797 === (21))){
var inst_26787 = (state_26796[(2)]);
var state_26796__$1 = state_26796;
var statearr_26804_28684 = state_26796__$1;
(statearr_26804_28684[(2)] = inst_26787);

(statearr_26804_28684[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26797 === (13))){
var inst_26789 = (state_26796[(2)]);
var state_26796__$1 = (function (){var statearr_26805 = state_26796;
(statearr_26805[(9)] = inst_26789);

return statearr_26805;
})();
var statearr_26806_28685 = state_26796__$1;
(statearr_26806_28685[(2)] = null);

(statearr_26806_28685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26797 === (6))){
var inst_26761 = (state_26796[(7)]);
var state_26796__$1 = state_26796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26796__$1,(11),inst_26761);
} else {
if((state_val_26797 === (17))){
var inst_26782 = (state_26796[(2)]);
var state_26796__$1 = state_26796;
if(cljs.core.truth_(inst_26782)){
var statearr_26807_28686 = state_26796__$1;
(statearr_26807_28686[(1)] = (19));

} else {
var statearr_26808_28687 = state_26796__$1;
(statearr_26808_28687[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26797 === (3))){
var inst_26794 = (state_26796[(2)]);
var state_26796__$1 = state_26796;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26796__$1,inst_26794);
} else {
if((state_val_26797 === (12))){
var inst_26771 = (state_26796[(10)]);
var state_26796__$1 = state_26796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26796__$1,(14),inst_26771);
} else {
if((state_val_26797 === (2))){
var state_26796__$1 = state_26796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26796__$1,(4),results);
} else {
if((state_val_26797 === (19))){
var state_26796__$1 = state_26796;
var statearr_26809_28688 = state_26796__$1;
(statearr_26809_28688[(2)] = null);

(statearr_26809_28688[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26797 === (11))){
var inst_26771 = (state_26796[(2)]);
var state_26796__$1 = (function (){var statearr_26810 = state_26796;
(statearr_26810[(10)] = inst_26771);

return statearr_26810;
})();
var statearr_26811_28689 = state_26796__$1;
(statearr_26811_28689[(2)] = null);

(statearr_26811_28689[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26797 === (9))){
var state_26796__$1 = state_26796;
var statearr_26812_28690 = state_26796__$1;
(statearr_26812_28690[(2)] = null);

(statearr_26812_28690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26797 === (5))){
var state_26796__$1 = state_26796;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26813_28691 = state_26796__$1;
(statearr_26813_28691[(1)] = (8));

} else {
var statearr_26814_28692 = state_26796__$1;
(statearr_26814_28692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26797 === (14))){
var inst_26776 = (state_26796[(11)]);
var inst_26774 = (state_26796[(8)]);
var inst_26774__$1 = (state_26796[(2)]);
var inst_26775 = (inst_26774__$1 == null);
var inst_26776__$1 = cljs.core.not(inst_26775);
var state_26796__$1 = (function (){var statearr_26816 = state_26796;
(statearr_26816[(11)] = inst_26776__$1);

(statearr_26816[(8)] = inst_26774__$1);

return statearr_26816;
})();
if(inst_26776__$1){
var statearr_26817_28694 = state_26796__$1;
(statearr_26817_28694[(1)] = (15));

} else {
var statearr_26818_28696 = state_26796__$1;
(statearr_26818_28696[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26797 === (16))){
var inst_26776 = (state_26796[(11)]);
var state_26796__$1 = state_26796;
var statearr_26819_28697 = state_26796__$1;
(statearr_26819_28697[(2)] = inst_26776);

(statearr_26819_28697[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26797 === (10))){
var inst_26768 = (state_26796[(2)]);
var state_26796__$1 = state_26796;
var statearr_26820_28698 = state_26796__$1;
(statearr_26820_28698[(2)] = inst_26768);

(statearr_26820_28698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26797 === (18))){
var inst_26779 = (state_26796[(2)]);
var state_26796__$1 = state_26796;
var statearr_26821_28699 = state_26796__$1;
(statearr_26821_28699[(2)] = inst_26779);

(statearr_26821_28699[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26797 === (8))){
var inst_26765 = cljs.core.async.close_BANG_(to);
var state_26796__$1 = state_26796;
var statearr_26822_28700 = state_26796__$1;
(statearr_26822_28700[(2)] = inst_26765);

(statearr_26822_28700[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26116__auto____0 = (function (){
var statearr_26823 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26823[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26116__auto__);

(statearr_26823[(1)] = (1));

return statearr_26823;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26116__auto____1 = (function (state_26796){
while(true){
var ret_value__26117__auto__ = (function (){try{while(true){
var result__26118__auto__ = switch__26115__auto__(state_26796);
if(cljs.core.keyword_identical_QMARK_(result__26118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26118__auto__;
}
break;
}
}catch (e26824){var ex__26119__auto__ = e26824;
var statearr_26825_28701 = state_26796;
(statearr_26825_28701[(2)] = ex__26119__auto__);


if(cljs.core.seq((state_26796[(4)]))){
var statearr_26827_28702 = state_26796;
(statearr_26827_28702[(1)] = cljs.core.first((state_26796[(4)])));

} else {
throw ex__26119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28703 = state_26796;
state_26796 = G__28703;
continue;
} else {
return ret_value__26117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26116__auto__ = function(state_26796){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26116__auto____1.call(this,state_26796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26116__auto__;
})()
})();
var state__26256__auto__ = (function (){var statearr_26828 = f__26255__auto__();
(statearr_26828[(6)] = c__26254__auto__);

return statearr_26828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26256__auto__);
}));

return c__26254__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__26830 = arguments.length;
switch (G__26830) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__26832 = arguments.length;
switch (G__26832) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__26836 = arguments.length;
switch (G__26836) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__26254__auto___28722 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26255__auto__ = (function (){var switch__26115__auto__ = (function (state_26864){
var state_val_26865 = (state_26864[(1)]);
if((state_val_26865 === (7))){
var inst_26860 = (state_26864[(2)]);
var state_26864__$1 = state_26864;
var statearr_26866_28727 = state_26864__$1;
(statearr_26866_28727[(2)] = inst_26860);

(statearr_26866_28727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26865 === (1))){
var state_26864__$1 = state_26864;
var statearr_26867_28728 = state_26864__$1;
(statearr_26867_28728[(2)] = null);

(statearr_26867_28728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26865 === (4))){
var inst_26840 = (state_26864[(7)]);
var inst_26840__$1 = (state_26864[(2)]);
var inst_26841 = (inst_26840__$1 == null);
var state_26864__$1 = (function (){var statearr_26868 = state_26864;
(statearr_26868[(7)] = inst_26840__$1);

return statearr_26868;
})();
if(cljs.core.truth_(inst_26841)){
var statearr_26869_28729 = state_26864__$1;
(statearr_26869_28729[(1)] = (5));

} else {
var statearr_26871_28730 = state_26864__$1;
(statearr_26871_28730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26865 === (13))){
var state_26864__$1 = state_26864;
var statearr_26872_28731 = state_26864__$1;
(statearr_26872_28731[(2)] = null);

(statearr_26872_28731[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26865 === (6))){
var inst_26840 = (state_26864[(7)]);
var inst_26846 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_26840) : p.call(null,inst_26840));
var state_26864__$1 = state_26864;
if(cljs.core.truth_(inst_26846)){
var statearr_26873_28733 = state_26864__$1;
(statearr_26873_28733[(1)] = (9));

} else {
var statearr_26874_28737 = state_26864__$1;
(statearr_26874_28737[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26865 === (3))){
var inst_26862 = (state_26864[(2)]);
var state_26864__$1 = state_26864;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26864__$1,inst_26862);
} else {
if((state_val_26865 === (12))){
var state_26864__$1 = state_26864;
var statearr_26875_28741 = state_26864__$1;
(statearr_26875_28741[(2)] = null);

(statearr_26875_28741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26865 === (2))){
var state_26864__$1 = state_26864;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26864__$1,(4),ch);
} else {
if((state_val_26865 === (11))){
var inst_26840 = (state_26864[(7)]);
var inst_26850 = (state_26864[(2)]);
var state_26864__$1 = state_26864;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26864__$1,(8),inst_26850,inst_26840);
} else {
if((state_val_26865 === (9))){
var state_26864__$1 = state_26864;
var statearr_26876_28742 = state_26864__$1;
(statearr_26876_28742[(2)] = tc);

(statearr_26876_28742[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26865 === (5))){
var inst_26843 = cljs.core.async.close_BANG_(tc);
var inst_26844 = cljs.core.async.close_BANG_(fc);
var state_26864__$1 = (function (){var statearr_26878 = state_26864;
(statearr_26878[(8)] = inst_26843);

return statearr_26878;
})();
var statearr_26879_28743 = state_26864__$1;
(statearr_26879_28743[(2)] = inst_26844);

(statearr_26879_28743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26865 === (14))){
var inst_26857 = (state_26864[(2)]);
var state_26864__$1 = state_26864;
var statearr_26880_28753 = state_26864__$1;
(statearr_26880_28753[(2)] = inst_26857);

(statearr_26880_28753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26865 === (10))){
var state_26864__$1 = state_26864;
var statearr_26881_28757 = state_26864__$1;
(statearr_26881_28757[(2)] = fc);

(statearr_26881_28757[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26865 === (8))){
var inst_26852 = (state_26864[(2)]);
var state_26864__$1 = state_26864;
if(cljs.core.truth_(inst_26852)){
var statearr_26882_28758 = state_26864__$1;
(statearr_26882_28758[(1)] = (12));

} else {
var statearr_26883_28759 = state_26864__$1;
(statearr_26883_28759[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__26116__auto__ = null;
var cljs$core$async$state_machine__26116__auto____0 = (function (){
var statearr_26884 = [null,null,null,null,null,null,null,null,null];
(statearr_26884[(0)] = cljs$core$async$state_machine__26116__auto__);

(statearr_26884[(1)] = (1));

return statearr_26884;
});
var cljs$core$async$state_machine__26116__auto____1 = (function (state_26864){
while(true){
var ret_value__26117__auto__ = (function (){try{while(true){
var result__26118__auto__ = switch__26115__auto__(state_26864);
if(cljs.core.keyword_identical_QMARK_(result__26118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26118__auto__;
}
break;
}
}catch (e26885){var ex__26119__auto__ = e26885;
var statearr_26886_28763 = state_26864;
(statearr_26886_28763[(2)] = ex__26119__auto__);


if(cljs.core.seq((state_26864[(4)]))){
var statearr_26888_28764 = state_26864;
(statearr_26888_28764[(1)] = cljs.core.first((state_26864[(4)])));

} else {
throw ex__26119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28765 = state_26864;
state_26864 = G__28765;
continue;
} else {
return ret_value__26117__auto__;
}
break;
}
});
cljs$core$async$state_machine__26116__auto__ = function(state_26864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26116__auto____1.call(this,state_26864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26116__auto____0;
cljs$core$async$state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26116__auto____1;
return cljs$core$async$state_machine__26116__auto__;
})()
})();
var state__26256__auto__ = (function (){var statearr_26889 = f__26255__auto__();
(statearr_26889[(6)] = c__26254__auto___28722);

return statearr_26889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26256__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26254__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26255__auto__ = (function (){var switch__26115__auto__ = (function (state_26912){
var state_val_26913 = (state_26912[(1)]);
if((state_val_26913 === (7))){
var inst_26908 = (state_26912[(2)]);
var state_26912__$1 = state_26912;
var statearr_26914_28770 = state_26912__$1;
(statearr_26914_28770[(2)] = inst_26908);

(statearr_26914_28770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (1))){
var inst_26891 = init;
var inst_26892 = inst_26891;
var state_26912__$1 = (function (){var statearr_26915 = state_26912;
(statearr_26915[(7)] = inst_26892);

return statearr_26915;
})();
var statearr_26916_28771 = state_26912__$1;
(statearr_26916_28771[(2)] = null);

(statearr_26916_28771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (4))){
var inst_26895 = (state_26912[(8)]);
var inst_26895__$1 = (state_26912[(2)]);
var inst_26896 = (inst_26895__$1 == null);
var state_26912__$1 = (function (){var statearr_26917 = state_26912;
(statearr_26917[(8)] = inst_26895__$1);

return statearr_26917;
})();
if(cljs.core.truth_(inst_26896)){
var statearr_26918_28772 = state_26912__$1;
(statearr_26918_28772[(1)] = (5));

} else {
var statearr_26919_28773 = state_26912__$1;
(statearr_26919_28773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (6))){
var inst_26892 = (state_26912[(7)]);
var inst_26895 = (state_26912[(8)]);
var inst_26899 = (state_26912[(9)]);
var inst_26899__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_26892,inst_26895) : f.call(null,inst_26892,inst_26895));
var inst_26900 = cljs.core.reduced_QMARK_(inst_26899__$1);
var state_26912__$1 = (function (){var statearr_26921 = state_26912;
(statearr_26921[(9)] = inst_26899__$1);

return statearr_26921;
})();
if(inst_26900){
var statearr_26922_28774 = state_26912__$1;
(statearr_26922_28774[(1)] = (8));

} else {
var statearr_26923_28775 = state_26912__$1;
(statearr_26923_28775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (3))){
var inst_26910 = (state_26912[(2)]);
var state_26912__$1 = state_26912;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26912__$1,inst_26910);
} else {
if((state_val_26913 === (2))){
var state_26912__$1 = state_26912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26912__$1,(4),ch);
} else {
if((state_val_26913 === (9))){
var inst_26899 = (state_26912[(9)]);
var inst_26892 = inst_26899;
var state_26912__$1 = (function (){var statearr_26924 = state_26912;
(statearr_26924[(7)] = inst_26892);

return statearr_26924;
})();
var statearr_26925_28777 = state_26912__$1;
(statearr_26925_28777[(2)] = null);

(statearr_26925_28777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (5))){
var inst_26892 = (state_26912[(7)]);
var state_26912__$1 = state_26912;
var statearr_26926_28778 = state_26912__$1;
(statearr_26926_28778[(2)] = inst_26892);

(statearr_26926_28778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (10))){
var inst_26906 = (state_26912[(2)]);
var state_26912__$1 = state_26912;
var statearr_26927_28779 = state_26912__$1;
(statearr_26927_28779[(2)] = inst_26906);

(statearr_26927_28779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26913 === (8))){
var inst_26899 = (state_26912[(9)]);
var inst_26902 = cljs.core.deref(inst_26899);
var state_26912__$1 = state_26912;
var statearr_26929_28780 = state_26912__$1;
(statearr_26929_28780[(2)] = inst_26902);

(statearr_26929_28780[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__26116__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26116__auto____0 = (function (){
var statearr_26930 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26930[(0)] = cljs$core$async$reduce_$_state_machine__26116__auto__);

(statearr_26930[(1)] = (1));

return statearr_26930;
});
var cljs$core$async$reduce_$_state_machine__26116__auto____1 = (function (state_26912){
while(true){
var ret_value__26117__auto__ = (function (){try{while(true){
var result__26118__auto__ = switch__26115__auto__(state_26912);
if(cljs.core.keyword_identical_QMARK_(result__26118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26118__auto__;
}
break;
}
}catch (e26931){var ex__26119__auto__ = e26931;
var statearr_26932_28781 = state_26912;
(statearr_26932_28781[(2)] = ex__26119__auto__);


if(cljs.core.seq((state_26912[(4)]))){
var statearr_26933_28782 = state_26912;
(statearr_26933_28782[(1)] = cljs.core.first((state_26912[(4)])));

} else {
throw ex__26119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28783 = state_26912;
state_26912 = G__28783;
continue;
} else {
return ret_value__26117__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26116__auto__ = function(state_26912){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26116__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26116__auto____1.call(this,state_26912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26116__auto____0;
cljs$core$async$reduce_$_state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26116__auto____1;
return cljs$core$async$reduce_$_state_machine__26116__auto__;
})()
})();
var state__26256__auto__ = (function (){var statearr_26934 = f__26255__auto__();
(statearr_26934[(6)] = c__26254__auto__);

return statearr_26934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26256__auto__);
}));

return c__26254__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__26254__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26255__auto__ = (function (){var switch__26115__auto__ = (function (state_26941){
var state_val_26942 = (state_26941[(1)]);
if((state_val_26942 === (1))){
var inst_26936 = cljs.core.async.reduce(f__$1,init,ch);
var state_26941__$1 = state_26941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26941__$1,(2),inst_26936);
} else {
if((state_val_26942 === (2))){
var inst_26938 = (state_26941[(2)]);
var inst_26939 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_26938) : f__$1.call(null,inst_26938));
var state_26941__$1 = state_26941;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26941__$1,inst_26939);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__26116__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26116__auto____0 = (function (){
var statearr_26944 = [null,null,null,null,null,null,null];
(statearr_26944[(0)] = cljs$core$async$transduce_$_state_machine__26116__auto__);

(statearr_26944[(1)] = (1));

return statearr_26944;
});
var cljs$core$async$transduce_$_state_machine__26116__auto____1 = (function (state_26941){
while(true){
var ret_value__26117__auto__ = (function (){try{while(true){
var result__26118__auto__ = switch__26115__auto__(state_26941);
if(cljs.core.keyword_identical_QMARK_(result__26118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26118__auto__;
}
break;
}
}catch (e26945){var ex__26119__auto__ = e26945;
var statearr_26946_28784 = state_26941;
(statearr_26946_28784[(2)] = ex__26119__auto__);


if(cljs.core.seq((state_26941[(4)]))){
var statearr_26947_28785 = state_26941;
(statearr_26947_28785[(1)] = cljs.core.first((state_26941[(4)])));

} else {
throw ex__26119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28786 = state_26941;
state_26941 = G__28786;
continue;
} else {
return ret_value__26117__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26116__auto__ = function(state_26941){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26116__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26116__auto____1.call(this,state_26941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26116__auto____0;
cljs$core$async$transduce_$_state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26116__auto____1;
return cljs$core$async$transduce_$_state_machine__26116__auto__;
})()
})();
var state__26256__auto__ = (function (){var statearr_26949 = f__26255__auto__();
(statearr_26949[(6)] = c__26254__auto__);

return statearr_26949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26256__auto__);
}));

return c__26254__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__26951 = arguments.length;
switch (G__26951) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26254__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26255__auto__ = (function (){var switch__26115__auto__ = (function (state_26977){
var state_val_26978 = (state_26977[(1)]);
if((state_val_26978 === (7))){
var inst_26958 = (state_26977[(2)]);
var state_26977__$1 = state_26977;
var statearr_26979_28790 = state_26977__$1;
(statearr_26979_28790[(2)] = inst_26958);

(statearr_26979_28790[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (1))){
var inst_26952 = cljs.core.seq(coll);
var inst_26953 = inst_26952;
var state_26977__$1 = (function (){var statearr_26980 = state_26977;
(statearr_26980[(7)] = inst_26953);

return statearr_26980;
})();
var statearr_26981_28791 = state_26977__$1;
(statearr_26981_28791[(2)] = null);

(statearr_26981_28791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (4))){
var inst_26953 = (state_26977[(7)]);
var inst_26956 = cljs.core.first(inst_26953);
var state_26977__$1 = state_26977;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26977__$1,(7),ch,inst_26956);
} else {
if((state_val_26978 === (13))){
var inst_26970 = (state_26977[(2)]);
var state_26977__$1 = state_26977;
var statearr_26982_28792 = state_26977__$1;
(statearr_26982_28792[(2)] = inst_26970);

(statearr_26982_28792[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (6))){
var inst_26961 = (state_26977[(2)]);
var state_26977__$1 = state_26977;
if(cljs.core.truth_(inst_26961)){
var statearr_26983_28793 = state_26977__$1;
(statearr_26983_28793[(1)] = (8));

} else {
var statearr_26985_28794 = state_26977__$1;
(statearr_26985_28794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (3))){
var inst_26974 = (state_26977[(2)]);
var state_26977__$1 = state_26977;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26977__$1,inst_26974);
} else {
if((state_val_26978 === (12))){
var state_26977__$1 = state_26977;
var statearr_26986_28795 = state_26977__$1;
(statearr_26986_28795[(2)] = null);

(statearr_26986_28795[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (2))){
var inst_26953 = (state_26977[(7)]);
var state_26977__$1 = state_26977;
if(cljs.core.truth_(inst_26953)){
var statearr_26987_28796 = state_26977__$1;
(statearr_26987_28796[(1)] = (4));

} else {
var statearr_26988_28797 = state_26977__$1;
(statearr_26988_28797[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (11))){
var inst_26967 = cljs.core.async.close_BANG_(ch);
var state_26977__$1 = state_26977;
var statearr_26989_28799 = state_26977__$1;
(statearr_26989_28799[(2)] = inst_26967);

(statearr_26989_28799[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (9))){
var state_26977__$1 = state_26977;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26991_28800 = state_26977__$1;
(statearr_26991_28800[(1)] = (11));

} else {
var statearr_26992_28801 = state_26977__$1;
(statearr_26992_28801[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (5))){
var inst_26953 = (state_26977[(7)]);
var state_26977__$1 = state_26977;
var statearr_26993_28802 = state_26977__$1;
(statearr_26993_28802[(2)] = inst_26953);

(statearr_26993_28802[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (10))){
var inst_26972 = (state_26977[(2)]);
var state_26977__$1 = state_26977;
var statearr_26994_28804 = state_26977__$1;
(statearr_26994_28804[(2)] = inst_26972);

(statearr_26994_28804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (8))){
var inst_26953 = (state_26977[(7)]);
var inst_26963 = cljs.core.next(inst_26953);
var inst_26953__$1 = inst_26963;
var state_26977__$1 = (function (){var statearr_26995 = state_26977;
(statearr_26995[(7)] = inst_26953__$1);

return statearr_26995;
})();
var statearr_26996_28805 = state_26977__$1;
(statearr_26996_28805[(2)] = null);

(statearr_26996_28805[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__26116__auto__ = null;
var cljs$core$async$state_machine__26116__auto____0 = (function (){
var statearr_26998 = [null,null,null,null,null,null,null,null];
(statearr_26998[(0)] = cljs$core$async$state_machine__26116__auto__);

(statearr_26998[(1)] = (1));

return statearr_26998;
});
var cljs$core$async$state_machine__26116__auto____1 = (function (state_26977){
while(true){
var ret_value__26117__auto__ = (function (){try{while(true){
var result__26118__auto__ = switch__26115__auto__(state_26977);
if(cljs.core.keyword_identical_QMARK_(result__26118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26118__auto__;
}
break;
}
}catch (e26999){var ex__26119__auto__ = e26999;
var statearr_27000_28806 = state_26977;
(statearr_27000_28806[(2)] = ex__26119__auto__);


if(cljs.core.seq((state_26977[(4)]))){
var statearr_27001_28807 = state_26977;
(statearr_27001_28807[(1)] = cljs.core.first((state_26977[(4)])));

} else {
throw ex__26119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28808 = state_26977;
state_26977 = G__28808;
continue;
} else {
return ret_value__26117__auto__;
}
break;
}
});
cljs$core$async$state_machine__26116__auto__ = function(state_26977){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26116__auto____1.call(this,state_26977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26116__auto____0;
cljs$core$async$state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26116__auto____1;
return cljs$core$async$state_machine__26116__auto__;
})()
})();
var state__26256__auto__ = (function (){var statearr_27002 = f__26255__auto__();
(statearr_27002[(6)] = c__26254__auto__);

return statearr_27002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26256__auto__);
}));

return c__26254__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__27005 = arguments.length;
switch (G__27005) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_28817 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_28817(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_28819 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_28819(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_28847 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_28847(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_28848 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_28848(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27006 = (function (ch,cs,meta27007){
this.ch = ch;
this.cs = cs;
this.meta27007 = meta27007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27008,meta27007__$1){
var self__ = this;
var _27008__$1 = this;
return (new cljs.core.async.t_cljs$core$async27006(self__.ch,self__.cs,meta27007__$1));
}));

(cljs.core.async.t_cljs$core$async27006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27008){
var self__ = this;
var _27008__$1 = this;
return self__.meta27007;
}));

(cljs.core.async.t_cljs$core$async27006.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27006.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27006.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27006.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async27006.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async27006.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async27006.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27007","meta27007",87032809,null)], null);
}));

(cljs.core.async.t_cljs$core$async27006.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27006.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27006");

(cljs.core.async.t_cljs$core$async27006.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async27006");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27006.
 */
cljs.core.async.__GT_t_cljs$core$async27006 = (function cljs$core$async$__GT_t_cljs$core$async27006(ch,cs,meta27007){
return (new cljs.core.async.t_cljs$core$async27006(ch,cs,meta27007));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async27006(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__26254__auto___28849 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26255__auto__ = (function (){var switch__26115__auto__ = (function (state_27141){
var state_val_27142 = (state_27141[(1)]);
if((state_val_27142 === (7))){
var inst_27137 = (state_27141[(2)]);
var state_27141__$1 = state_27141;
var statearr_27143_28850 = state_27141__$1;
(statearr_27143_28850[(2)] = inst_27137);

(statearr_27143_28850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (20))){
var inst_27042 = (state_27141[(7)]);
var inst_27054 = cljs.core.first(inst_27042);
var inst_27055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27054,(0),null);
var inst_27056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27054,(1),null);
var state_27141__$1 = (function (){var statearr_27144 = state_27141;
(statearr_27144[(8)] = inst_27055);

return statearr_27144;
})();
if(cljs.core.truth_(inst_27056)){
var statearr_27145_28851 = state_27141__$1;
(statearr_27145_28851[(1)] = (22));

} else {
var statearr_27146_28852 = state_27141__$1;
(statearr_27146_28852[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (27))){
var inst_27086 = (state_27141[(9)]);
var inst_27011 = (state_27141[(10)]);
var inst_27084 = (state_27141[(11)]);
var inst_27091 = (state_27141[(12)]);
var inst_27091__$1 = cljs.core._nth(inst_27084,inst_27086);
var inst_27092 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_27091__$1,inst_27011,done);
var state_27141__$1 = (function (){var statearr_27147 = state_27141;
(statearr_27147[(12)] = inst_27091__$1);

return statearr_27147;
})();
if(cljs.core.truth_(inst_27092)){
var statearr_27148_28853 = state_27141__$1;
(statearr_27148_28853[(1)] = (30));

} else {
var statearr_27149_28854 = state_27141__$1;
(statearr_27149_28854[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (1))){
var state_27141__$1 = state_27141;
var statearr_27150_28855 = state_27141__$1;
(statearr_27150_28855[(2)] = null);

(statearr_27150_28855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (24))){
var inst_27042 = (state_27141[(7)]);
var inst_27061 = (state_27141[(2)]);
var inst_27062 = cljs.core.next(inst_27042);
var inst_27020 = inst_27062;
var inst_27021 = null;
var inst_27022 = (0);
var inst_27023 = (0);
var state_27141__$1 = (function (){var statearr_27151 = state_27141;
(statearr_27151[(13)] = inst_27023);

(statearr_27151[(14)] = inst_27061);

(statearr_27151[(15)] = inst_27021);

(statearr_27151[(16)] = inst_27022);

(statearr_27151[(17)] = inst_27020);

return statearr_27151;
})();
var statearr_27152_28856 = state_27141__$1;
(statearr_27152_28856[(2)] = null);

(statearr_27152_28856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (39))){
var state_27141__$1 = state_27141;
var statearr_27156_28858 = state_27141__$1;
(statearr_27156_28858[(2)] = null);

(statearr_27156_28858[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (4))){
var inst_27011 = (state_27141[(10)]);
var inst_27011__$1 = (state_27141[(2)]);
var inst_27012 = (inst_27011__$1 == null);
var state_27141__$1 = (function (){var statearr_27157 = state_27141;
(statearr_27157[(10)] = inst_27011__$1);

return statearr_27157;
})();
if(cljs.core.truth_(inst_27012)){
var statearr_27158_28871 = state_27141__$1;
(statearr_27158_28871[(1)] = (5));

} else {
var statearr_27159_28872 = state_27141__$1;
(statearr_27159_28872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (15))){
var inst_27023 = (state_27141[(13)]);
var inst_27021 = (state_27141[(15)]);
var inst_27022 = (state_27141[(16)]);
var inst_27020 = (state_27141[(17)]);
var inst_27038 = (state_27141[(2)]);
var inst_27039 = (inst_27023 + (1));
var tmp27153 = inst_27021;
var tmp27154 = inst_27022;
var tmp27155 = inst_27020;
var inst_27020__$1 = tmp27155;
var inst_27021__$1 = tmp27153;
var inst_27022__$1 = tmp27154;
var inst_27023__$1 = inst_27039;
var state_27141__$1 = (function (){var statearr_27160 = state_27141;
(statearr_27160[(13)] = inst_27023__$1);

(statearr_27160[(15)] = inst_27021__$1);

(statearr_27160[(18)] = inst_27038);

(statearr_27160[(16)] = inst_27022__$1);

(statearr_27160[(17)] = inst_27020__$1);

return statearr_27160;
})();
var statearr_27161_28874 = state_27141__$1;
(statearr_27161_28874[(2)] = null);

(statearr_27161_28874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (21))){
var inst_27065 = (state_27141[(2)]);
var state_27141__$1 = state_27141;
var statearr_27165_28875 = state_27141__$1;
(statearr_27165_28875[(2)] = inst_27065);

(statearr_27165_28875[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (31))){
var inst_27091 = (state_27141[(12)]);
var inst_27095 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_27091);
var state_27141__$1 = state_27141;
var statearr_27166_28885 = state_27141__$1;
(statearr_27166_28885[(2)] = inst_27095);

(statearr_27166_28885[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (32))){
var inst_27086 = (state_27141[(9)]);
var inst_27083 = (state_27141[(19)]);
var inst_27084 = (state_27141[(11)]);
var inst_27085 = (state_27141[(20)]);
var inst_27097 = (state_27141[(2)]);
var inst_27098 = (inst_27086 + (1));
var tmp27162 = inst_27083;
var tmp27163 = inst_27084;
var tmp27164 = inst_27085;
var inst_27083__$1 = tmp27162;
var inst_27084__$1 = tmp27163;
var inst_27085__$1 = tmp27164;
var inst_27086__$1 = inst_27098;
var state_27141__$1 = (function (){var statearr_27168 = state_27141;
(statearr_27168[(9)] = inst_27086__$1);

(statearr_27168[(19)] = inst_27083__$1);

(statearr_27168[(11)] = inst_27084__$1);

(statearr_27168[(21)] = inst_27097);

(statearr_27168[(20)] = inst_27085__$1);

return statearr_27168;
})();
var statearr_27169_28886 = state_27141__$1;
(statearr_27169_28886[(2)] = null);

(statearr_27169_28886[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (40))){
var inst_27110 = (state_27141[(22)]);
var inst_27114 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_27110);
var state_27141__$1 = state_27141;
var statearr_27170_28887 = state_27141__$1;
(statearr_27170_28887[(2)] = inst_27114);

(statearr_27170_28887[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (33))){
var inst_27101 = (state_27141[(23)]);
var inst_27103 = cljs.core.chunked_seq_QMARK_(inst_27101);
var state_27141__$1 = state_27141;
if(inst_27103){
var statearr_27171_28892 = state_27141__$1;
(statearr_27171_28892[(1)] = (36));

} else {
var statearr_27176_28893 = state_27141__$1;
(statearr_27176_28893[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (13))){
var inst_27032 = (state_27141[(24)]);
var inst_27035 = cljs.core.async.close_BANG_(inst_27032);
var state_27141__$1 = state_27141;
var statearr_27178_28894 = state_27141__$1;
(statearr_27178_28894[(2)] = inst_27035);

(statearr_27178_28894[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (22))){
var inst_27055 = (state_27141[(8)]);
var inst_27058 = cljs.core.async.close_BANG_(inst_27055);
var state_27141__$1 = state_27141;
var statearr_27179_28908 = state_27141__$1;
(statearr_27179_28908[(2)] = inst_27058);

(statearr_27179_28908[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (36))){
var inst_27101 = (state_27141[(23)]);
var inst_27105 = cljs.core.chunk_first(inst_27101);
var inst_27106 = cljs.core.chunk_rest(inst_27101);
var inst_27107 = cljs.core.count(inst_27105);
var inst_27083 = inst_27106;
var inst_27084 = inst_27105;
var inst_27085 = inst_27107;
var inst_27086 = (0);
var state_27141__$1 = (function (){var statearr_27180 = state_27141;
(statearr_27180[(9)] = inst_27086);

(statearr_27180[(19)] = inst_27083);

(statearr_27180[(11)] = inst_27084);

(statearr_27180[(20)] = inst_27085);

return statearr_27180;
})();
var statearr_27182_28910 = state_27141__$1;
(statearr_27182_28910[(2)] = null);

(statearr_27182_28910[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (41))){
var inst_27101 = (state_27141[(23)]);
var inst_27116 = (state_27141[(2)]);
var inst_27117 = cljs.core.next(inst_27101);
var inst_27083 = inst_27117;
var inst_27084 = null;
var inst_27085 = (0);
var inst_27086 = (0);
var state_27141__$1 = (function (){var statearr_27183 = state_27141;
(statearr_27183[(9)] = inst_27086);

(statearr_27183[(19)] = inst_27083);

(statearr_27183[(25)] = inst_27116);

(statearr_27183[(11)] = inst_27084);

(statearr_27183[(20)] = inst_27085);

return statearr_27183;
})();
var statearr_27184_28911 = state_27141__$1;
(statearr_27184_28911[(2)] = null);

(statearr_27184_28911[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (43))){
var state_27141__$1 = state_27141;
var statearr_27185_28912 = state_27141__$1;
(statearr_27185_28912[(2)] = null);

(statearr_27185_28912[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (29))){
var inst_27125 = (state_27141[(2)]);
var state_27141__$1 = state_27141;
var statearr_27187_28913 = state_27141__$1;
(statearr_27187_28913[(2)] = inst_27125);

(statearr_27187_28913[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (44))){
var inst_27134 = (state_27141[(2)]);
var state_27141__$1 = (function (){var statearr_27188 = state_27141;
(statearr_27188[(26)] = inst_27134);

return statearr_27188;
})();
var statearr_27189_28914 = state_27141__$1;
(statearr_27189_28914[(2)] = null);

(statearr_27189_28914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (6))){
var inst_27075 = (state_27141[(27)]);
var inst_27074 = cljs.core.deref(cs);
var inst_27075__$1 = cljs.core.keys(inst_27074);
var inst_27076 = cljs.core.count(inst_27075__$1);
var inst_27077 = cljs.core.reset_BANG_(dctr,inst_27076);
var inst_27082 = cljs.core.seq(inst_27075__$1);
var inst_27083 = inst_27082;
var inst_27084 = null;
var inst_27085 = (0);
var inst_27086 = (0);
var state_27141__$1 = (function (){var statearr_27190 = state_27141;
(statearr_27190[(27)] = inst_27075__$1);

(statearr_27190[(9)] = inst_27086);

(statearr_27190[(19)] = inst_27083);

(statearr_27190[(11)] = inst_27084);

(statearr_27190[(20)] = inst_27085);

(statearr_27190[(28)] = inst_27077);

return statearr_27190;
})();
var statearr_27191_28917 = state_27141__$1;
(statearr_27191_28917[(2)] = null);

(statearr_27191_28917[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (28))){
var inst_27083 = (state_27141[(19)]);
var inst_27101 = (state_27141[(23)]);
var inst_27101__$1 = cljs.core.seq(inst_27083);
var state_27141__$1 = (function (){var statearr_27192 = state_27141;
(statearr_27192[(23)] = inst_27101__$1);

return statearr_27192;
})();
if(inst_27101__$1){
var statearr_27193_28923 = state_27141__$1;
(statearr_27193_28923[(1)] = (33));

} else {
var statearr_27194_28924 = state_27141__$1;
(statearr_27194_28924[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (25))){
var inst_27086 = (state_27141[(9)]);
var inst_27085 = (state_27141[(20)]);
var inst_27088 = (inst_27086 < inst_27085);
var inst_27089 = inst_27088;
var state_27141__$1 = state_27141;
if(cljs.core.truth_(inst_27089)){
var statearr_27196_28925 = state_27141__$1;
(statearr_27196_28925[(1)] = (27));

} else {
var statearr_27197_28927 = state_27141__$1;
(statearr_27197_28927[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (34))){
var state_27141__$1 = state_27141;
var statearr_27198_28928 = state_27141__$1;
(statearr_27198_28928[(2)] = null);

(statearr_27198_28928[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (17))){
var state_27141__$1 = state_27141;
var statearr_27199_28929 = state_27141__$1;
(statearr_27199_28929[(2)] = null);

(statearr_27199_28929[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (3))){
var inst_27139 = (state_27141[(2)]);
var state_27141__$1 = state_27141;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27141__$1,inst_27139);
} else {
if((state_val_27142 === (12))){
var inst_27070 = (state_27141[(2)]);
var state_27141__$1 = state_27141;
var statearr_27204_28933 = state_27141__$1;
(statearr_27204_28933[(2)] = inst_27070);

(statearr_27204_28933[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (2))){
var state_27141__$1 = state_27141;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27141__$1,(4),ch);
} else {
if((state_val_27142 === (23))){
var state_27141__$1 = state_27141;
var statearr_27205_28934 = state_27141__$1;
(statearr_27205_28934[(2)] = null);

(statearr_27205_28934[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (35))){
var inst_27123 = (state_27141[(2)]);
var state_27141__$1 = state_27141;
var statearr_27206_28935 = state_27141__$1;
(statearr_27206_28935[(2)] = inst_27123);

(statearr_27206_28935[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (19))){
var inst_27042 = (state_27141[(7)]);
var inst_27046 = cljs.core.chunk_first(inst_27042);
var inst_27047 = cljs.core.chunk_rest(inst_27042);
var inst_27048 = cljs.core.count(inst_27046);
var inst_27020 = inst_27047;
var inst_27021 = inst_27046;
var inst_27022 = inst_27048;
var inst_27023 = (0);
var state_27141__$1 = (function (){var statearr_27207 = state_27141;
(statearr_27207[(13)] = inst_27023);

(statearr_27207[(15)] = inst_27021);

(statearr_27207[(16)] = inst_27022);

(statearr_27207[(17)] = inst_27020);

return statearr_27207;
})();
var statearr_27208_28936 = state_27141__$1;
(statearr_27208_28936[(2)] = null);

(statearr_27208_28936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (11))){
var inst_27042 = (state_27141[(7)]);
var inst_27020 = (state_27141[(17)]);
var inst_27042__$1 = cljs.core.seq(inst_27020);
var state_27141__$1 = (function (){var statearr_27209 = state_27141;
(statearr_27209[(7)] = inst_27042__$1);

return statearr_27209;
})();
if(inst_27042__$1){
var statearr_27210_28938 = state_27141__$1;
(statearr_27210_28938[(1)] = (16));

} else {
var statearr_27212_28939 = state_27141__$1;
(statearr_27212_28939[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (9))){
var inst_27072 = (state_27141[(2)]);
var state_27141__$1 = state_27141;
var statearr_27213_28940 = state_27141__$1;
(statearr_27213_28940[(2)] = inst_27072);

(statearr_27213_28940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (5))){
var inst_27018 = cljs.core.deref(cs);
var inst_27019 = cljs.core.seq(inst_27018);
var inst_27020 = inst_27019;
var inst_27021 = null;
var inst_27022 = (0);
var inst_27023 = (0);
var state_27141__$1 = (function (){var statearr_27214 = state_27141;
(statearr_27214[(13)] = inst_27023);

(statearr_27214[(15)] = inst_27021);

(statearr_27214[(16)] = inst_27022);

(statearr_27214[(17)] = inst_27020);

return statearr_27214;
})();
var statearr_27215_28941 = state_27141__$1;
(statearr_27215_28941[(2)] = null);

(statearr_27215_28941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (14))){
var state_27141__$1 = state_27141;
var statearr_27216_28942 = state_27141__$1;
(statearr_27216_28942[(2)] = null);

(statearr_27216_28942[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (45))){
var inst_27131 = (state_27141[(2)]);
var state_27141__$1 = state_27141;
var statearr_27217_28943 = state_27141__$1;
(statearr_27217_28943[(2)] = inst_27131);

(statearr_27217_28943[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (26))){
var inst_27075 = (state_27141[(27)]);
var inst_27127 = (state_27141[(2)]);
var inst_27128 = cljs.core.seq(inst_27075);
var state_27141__$1 = (function (){var statearr_27219 = state_27141;
(statearr_27219[(29)] = inst_27127);

return statearr_27219;
})();
if(inst_27128){
var statearr_27220_28944 = state_27141__$1;
(statearr_27220_28944[(1)] = (42));

} else {
var statearr_27221_28945 = state_27141__$1;
(statearr_27221_28945[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (16))){
var inst_27042 = (state_27141[(7)]);
var inst_27044 = cljs.core.chunked_seq_QMARK_(inst_27042);
var state_27141__$1 = state_27141;
if(inst_27044){
var statearr_27222_28946 = state_27141__$1;
(statearr_27222_28946[(1)] = (19));

} else {
var statearr_27223_28948 = state_27141__$1;
(statearr_27223_28948[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (38))){
var inst_27120 = (state_27141[(2)]);
var state_27141__$1 = state_27141;
var statearr_27224_28949 = state_27141__$1;
(statearr_27224_28949[(2)] = inst_27120);

(statearr_27224_28949[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (30))){
var state_27141__$1 = state_27141;
var statearr_27225_28950 = state_27141__$1;
(statearr_27225_28950[(2)] = null);

(statearr_27225_28950[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (10))){
var inst_27023 = (state_27141[(13)]);
var inst_27021 = (state_27141[(15)]);
var inst_27031 = cljs.core._nth(inst_27021,inst_27023);
var inst_27032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27031,(0),null);
var inst_27033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27031,(1),null);
var state_27141__$1 = (function (){var statearr_27227 = state_27141;
(statearr_27227[(24)] = inst_27032);

return statearr_27227;
})();
if(cljs.core.truth_(inst_27033)){
var statearr_27228_28956 = state_27141__$1;
(statearr_27228_28956[(1)] = (13));

} else {
var statearr_27229_28957 = state_27141__$1;
(statearr_27229_28957[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (18))){
var inst_27068 = (state_27141[(2)]);
var state_27141__$1 = state_27141;
var statearr_27230_28958 = state_27141__$1;
(statearr_27230_28958[(2)] = inst_27068);

(statearr_27230_28958[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (42))){
var state_27141__$1 = state_27141;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27141__$1,(45),dchan);
} else {
if((state_val_27142 === (37))){
var inst_27011 = (state_27141[(10)]);
var inst_27110 = (state_27141[(22)]);
var inst_27101 = (state_27141[(23)]);
var inst_27110__$1 = cljs.core.first(inst_27101);
var inst_27111 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_27110__$1,inst_27011,done);
var state_27141__$1 = (function (){var statearr_27231 = state_27141;
(statearr_27231[(22)] = inst_27110__$1);

return statearr_27231;
})();
if(cljs.core.truth_(inst_27111)){
var statearr_27232_28966 = state_27141__$1;
(statearr_27232_28966[(1)] = (39));

} else {
var statearr_27233_28967 = state_27141__$1;
(statearr_27233_28967[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27142 === (8))){
var inst_27023 = (state_27141[(13)]);
var inst_27022 = (state_27141[(16)]);
var inst_27025 = (inst_27023 < inst_27022);
var inst_27026 = inst_27025;
var state_27141__$1 = state_27141;
if(cljs.core.truth_(inst_27026)){
var statearr_27234_28968 = state_27141__$1;
(statearr_27234_28968[(1)] = (10));

} else {
var statearr_27235_28969 = state_27141__$1;
(statearr_27235_28969[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__26116__auto__ = null;
var cljs$core$async$mult_$_state_machine__26116__auto____0 = (function (){
var statearr_27237 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27237[(0)] = cljs$core$async$mult_$_state_machine__26116__auto__);

(statearr_27237[(1)] = (1));

return statearr_27237;
});
var cljs$core$async$mult_$_state_machine__26116__auto____1 = (function (state_27141){
while(true){
var ret_value__26117__auto__ = (function (){try{while(true){
var result__26118__auto__ = switch__26115__auto__(state_27141);
if(cljs.core.keyword_identical_QMARK_(result__26118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26118__auto__;
}
break;
}
}catch (e27238){var ex__26119__auto__ = e27238;
var statearr_27239_28971 = state_27141;
(statearr_27239_28971[(2)] = ex__26119__auto__);


if(cljs.core.seq((state_27141[(4)]))){
var statearr_27240_28972 = state_27141;
(statearr_27240_28972[(1)] = cljs.core.first((state_27141[(4)])));

} else {
throw ex__26119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28973 = state_27141;
state_27141 = G__28973;
continue;
} else {
return ret_value__26117__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26116__auto__ = function(state_27141){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26116__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26116__auto____1.call(this,state_27141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26116__auto____0;
cljs$core$async$mult_$_state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26116__auto____1;
return cljs$core$async$mult_$_state_machine__26116__auto__;
})()
})();
var state__26256__auto__ = (function (){var statearr_27241 = f__26255__auto__();
(statearr_27241[(6)] = c__26254__auto___28849);

return statearr_27241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26256__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__27243 = arguments.length;
switch (G__27243) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_28977 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_28977(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_28982 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_28982(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_28983 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_28983(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_28984 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_28984(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_28989 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_28989(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28990 = arguments.length;
var i__5770__auto___28991 = (0);
while(true){
if((i__5770__auto___28991 < len__5769__auto___28990)){
args__5775__auto__.push((arguments[i__5770__auto___28991]));

var G__28992 = (i__5770__auto___28991 + (1));
i__5770__auto___28991 = G__28992;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27252){
var map__27253 = p__27252;
var map__27253__$1 = cljs.core.__destructure_map(map__27253);
var opts = map__27253__$1;
var statearr_27254_28993 = state;
(statearr_27254_28993[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_27255_28994 = state;
(statearr_27255_28994[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_27256_28995 = state;
(statearr_27256_28995[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27247){
var G__27248 = cljs.core.first(seq27247);
var seq27247__$1 = cljs.core.next(seq27247);
var G__27249 = cljs.core.first(seq27247__$1);
var seq27247__$2 = cljs.core.next(seq27247__$1);
var G__27250 = cljs.core.first(seq27247__$2);
var seq27247__$3 = cljs.core.next(seq27247__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27248,G__27249,G__27250,seq27247__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27259 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27260){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27260 = meta27260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27261,meta27260__$1){
var self__ = this;
var _27261__$1 = this;
return (new cljs.core.async.t_cljs$core$async27259(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27260__$1));
}));

(cljs.core.async.t_cljs$core$async27259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27261){
var self__ = this;
var _27261__$1 = this;
return self__.meta27260;
}));

(cljs.core.async.t_cljs$core$async27259.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27259.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async27259.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27259.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async27259.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async27259.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async27259.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async27259.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async27259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27260","meta27260",-2021197535,null)], null);
}));

(cljs.core.async.t_cljs$core$async27259.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27259");

(cljs.core.async.t_cljs$core$async27259.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async27259");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27259.
 */
cljs.core.async.__GT_t_cljs$core$async27259 = (function cljs$core$async$__GT_t_cljs$core$async27259(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27260){
return (new cljs.core.async.t_cljs$core$async27259(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27260));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async27259(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__26254__auto___29041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26255__auto__ = (function (){var switch__26115__auto__ = (function (state_27336){
var state_val_27337 = (state_27336[(1)]);
if((state_val_27337 === (7))){
var inst_27294 = (state_27336[(2)]);
var state_27336__$1 = state_27336;
if(cljs.core.truth_(inst_27294)){
var statearr_27338_29048 = state_27336__$1;
(statearr_27338_29048[(1)] = (8));

} else {
var statearr_27339_29049 = state_27336__$1;
(statearr_27339_29049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27337 === (20))){
var inst_27286 = (state_27336[(7)]);
var state_27336__$1 = state_27336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27336__$1,(23),out,inst_27286);
} else {
if((state_val_27337 === (1))){
var inst_27269 = calc_state();
var inst_27270 = cljs.core.__destructure_map(inst_27269);
var inst_27271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27270,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27270,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27270,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27274 = inst_27269;
var state_27336__$1 = (function (){var statearr_27340 = state_27336;
(statearr_27340[(8)] = inst_27273);

(statearr_27340[(9)] = inst_27272);

(statearr_27340[(10)] = inst_27274);

(statearr_27340[(11)] = inst_27271);

return statearr_27340;
})();
var statearr_27341_29056 = state_27336__$1;
(statearr_27341_29056[(2)] = null);

(statearr_27341_29056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27337 === (24))){
var inst_27277 = (state_27336[(12)]);
var inst_27274 = inst_27277;
var state_27336__$1 = (function (){var statearr_27342 = state_27336;
(statearr_27342[(10)] = inst_27274);

return statearr_27342;
})();
var statearr_27345_29057 = state_27336__$1;
(statearr_27345_29057[(2)] = null);

(statearr_27345_29057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27337 === (4))){
var inst_27286 = (state_27336[(7)]);
var inst_27289 = (state_27336[(13)]);
var inst_27285 = (state_27336[(2)]);
var inst_27286__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27285,(0),null);
var inst_27288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27285,(1),null);
var inst_27289__$1 = (inst_27286__$1 == null);
var state_27336__$1 = (function (){var statearr_27346 = state_27336;
(statearr_27346[(14)] = inst_27288);

(statearr_27346[(7)] = inst_27286__$1);

(statearr_27346[(13)] = inst_27289__$1);

return statearr_27346;
})();
if(cljs.core.truth_(inst_27289__$1)){
var statearr_27347_29058 = state_27336__$1;
(statearr_27347_29058[(1)] = (5));

} else {
var statearr_27348_29059 = state_27336__$1;
(statearr_27348_29059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27337 === (15))){
var inst_27278 = (state_27336[(15)]);
var inst_27309 = (state_27336[(16)]);
var inst_27309__$1 = cljs.core.empty_QMARK_(inst_27278);
var state_27336__$1 = (function (){var statearr_27349 = state_27336;
(statearr_27349[(16)] = inst_27309__$1);

return statearr_27349;
})();
if(inst_27309__$1){
var statearr_27350_29060 = state_27336__$1;
(statearr_27350_29060[(1)] = (17));

} else {
var statearr_27351_29061 = state_27336__$1;
(statearr_27351_29061[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27337 === (21))){
var inst_27277 = (state_27336[(12)]);
var inst_27274 = inst_27277;
var state_27336__$1 = (function (){var statearr_27352 = state_27336;
(statearr_27352[(10)] = inst_27274);

return statearr_27352;
})();
var statearr_27353_29064 = state_27336__$1;
(statearr_27353_29064[(2)] = null);

(statearr_27353_29064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27337 === (13))){
var inst_27301 = (state_27336[(2)]);
var inst_27302 = calc_state();
var inst_27274 = inst_27302;
var state_27336__$1 = (function (){var statearr_27354 = state_27336;
(statearr_27354[(10)] = inst_27274);

(statearr_27354[(17)] = inst_27301);

return statearr_27354;
})();
var statearr_27355_29066 = state_27336__$1;
(statearr_27355_29066[(2)] = null);

(statearr_27355_29066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27337 === (22))){
var inst_27330 = (state_27336[(2)]);
var state_27336__$1 = state_27336;
var statearr_27356_29067 = state_27336__$1;
(statearr_27356_29067[(2)] = inst_27330);

(statearr_27356_29067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27337 === (6))){
var inst_27288 = (state_27336[(14)]);
var inst_27292 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27288,change);
var state_27336__$1 = state_27336;
var statearr_27357_29069 = state_27336__$1;
(statearr_27357_29069[(2)] = inst_27292);

(statearr_27357_29069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27337 === (25))){
var state_27336__$1 = state_27336;
var statearr_27358_29087 = state_27336__$1;
(statearr_27358_29087[(2)] = null);

(statearr_27358_29087[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27337 === (17))){
var inst_27288 = (state_27336[(14)]);
var inst_27279 = (state_27336[(18)]);
var inst_27311 = (inst_27279.cljs$core$IFn$_invoke$arity$1 ? inst_27279.cljs$core$IFn$_invoke$arity$1(inst_27288) : inst_27279.call(null,inst_27288));
var inst_27312 = cljs.core.not(inst_27311);
var state_27336__$1 = state_27336;
var statearr_27359_29111 = state_27336__$1;
(statearr_27359_29111[(2)] = inst_27312);

(statearr_27359_29111[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27337 === (3))){
var inst_27334 = (state_27336[(2)]);
var state_27336__$1 = state_27336;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27336__$1,inst_27334);
} else {
if((state_val_27337 === (12))){
var state_27336__$1 = state_27336;
var statearr_27360_29112 = state_27336__$1;
(statearr_27360_29112[(2)] = null);

(statearr_27360_29112[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27337 === (2))){
var inst_27274 = (state_27336[(10)]);
var inst_27277 = (state_27336[(12)]);
var inst_27277__$1 = cljs.core.__destructure_map(inst_27274);
var inst_27278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27277__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27277__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27277__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27336__$1 = (function (){var statearr_27361 = state_27336;
(statearr_27361[(12)] = inst_27277__$1);

(statearr_27361[(15)] = inst_27278);

(statearr_27361[(18)] = inst_27279);

return statearr_27361;
})();
return cljs.core.async.ioc_alts_BANG_(state_27336__$1,(4),inst_27280);
} else {
if((state_val_27337 === (23))){
var inst_27321 = (state_27336[(2)]);
var state_27336__$1 = state_27336;
if(cljs.core.truth_(inst_27321)){
var statearr_27362_29114 = state_27336__$1;
(statearr_27362_29114[(1)] = (24));

} else {
var statearr_27363_29115 = state_27336__$1;
(statearr_27363_29115[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27337 === (19))){
var inst_27315 = (state_27336[(2)]);
var state_27336__$1 = state_27336;
var statearr_27364_29116 = state_27336__$1;
(statearr_27364_29116[(2)] = inst_27315);

(statearr_27364_29116[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27337 === (11))){
var inst_27288 = (state_27336[(14)]);
var inst_27298 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_27288);
var state_27336__$1 = state_27336;
var statearr_27365_29117 = state_27336__$1;
(statearr_27365_29117[(2)] = inst_27298);

(statearr_27365_29117[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27337 === (9))){
var inst_27288 = (state_27336[(14)]);
var inst_27278 = (state_27336[(15)]);
var inst_27305 = (state_27336[(19)]);
var inst_27305__$1 = (inst_27278.cljs$core$IFn$_invoke$arity$1 ? inst_27278.cljs$core$IFn$_invoke$arity$1(inst_27288) : inst_27278.call(null,inst_27288));
var state_27336__$1 = (function (){var statearr_27366 = state_27336;
(statearr_27366[(19)] = inst_27305__$1);

return statearr_27366;
})();
if(cljs.core.truth_(inst_27305__$1)){
var statearr_27368_29122 = state_27336__$1;
(statearr_27368_29122[(1)] = (14));

} else {
var statearr_27369_29123 = state_27336__$1;
(statearr_27369_29123[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27337 === (5))){
var inst_27289 = (state_27336[(13)]);
var state_27336__$1 = state_27336;
var statearr_27371_29124 = state_27336__$1;
(statearr_27371_29124[(2)] = inst_27289);

(statearr_27371_29124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27337 === (14))){
var inst_27305 = (state_27336[(19)]);
var state_27336__$1 = state_27336;
var statearr_27372_29126 = state_27336__$1;
(statearr_27372_29126[(2)] = inst_27305);

(statearr_27372_29126[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27337 === (26))){
var inst_27326 = (state_27336[(2)]);
var state_27336__$1 = state_27336;
var statearr_27373_29129 = state_27336__$1;
(statearr_27373_29129[(2)] = inst_27326);

(statearr_27373_29129[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27337 === (16))){
var inst_27318 = (state_27336[(2)]);
var state_27336__$1 = state_27336;
if(cljs.core.truth_(inst_27318)){
var statearr_27374_29130 = state_27336__$1;
(statearr_27374_29130[(1)] = (20));

} else {
var statearr_27375_29131 = state_27336__$1;
(statearr_27375_29131[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27337 === (10))){
var inst_27332 = (state_27336[(2)]);
var state_27336__$1 = state_27336;
var statearr_27376_29132 = state_27336__$1;
(statearr_27376_29132[(2)] = inst_27332);

(statearr_27376_29132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27337 === (18))){
var inst_27309 = (state_27336[(16)]);
var state_27336__$1 = state_27336;
var statearr_27377_29133 = state_27336__$1;
(statearr_27377_29133[(2)] = inst_27309);

(statearr_27377_29133[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27337 === (8))){
var inst_27286 = (state_27336[(7)]);
var inst_27296 = (inst_27286 == null);
var state_27336__$1 = state_27336;
if(cljs.core.truth_(inst_27296)){
var statearr_27378_29134 = state_27336__$1;
(statearr_27378_29134[(1)] = (11));

} else {
var statearr_27379_29135 = state_27336__$1;
(statearr_27379_29135[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__26116__auto__ = null;
var cljs$core$async$mix_$_state_machine__26116__auto____0 = (function (){
var statearr_27380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27380[(0)] = cljs$core$async$mix_$_state_machine__26116__auto__);

(statearr_27380[(1)] = (1));

return statearr_27380;
});
var cljs$core$async$mix_$_state_machine__26116__auto____1 = (function (state_27336){
while(true){
var ret_value__26117__auto__ = (function (){try{while(true){
var result__26118__auto__ = switch__26115__auto__(state_27336);
if(cljs.core.keyword_identical_QMARK_(result__26118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26118__auto__;
}
break;
}
}catch (e27381){var ex__26119__auto__ = e27381;
var statearr_27382_29136 = state_27336;
(statearr_27382_29136[(2)] = ex__26119__auto__);


if(cljs.core.seq((state_27336[(4)]))){
var statearr_27383_29137 = state_27336;
(statearr_27383_29137[(1)] = cljs.core.first((state_27336[(4)])));

} else {
throw ex__26119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29138 = state_27336;
state_27336 = G__29138;
continue;
} else {
return ret_value__26117__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26116__auto__ = function(state_27336){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26116__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26116__auto____1.call(this,state_27336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26116__auto____0;
cljs$core$async$mix_$_state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26116__auto____1;
return cljs$core$async$mix_$_state_machine__26116__auto__;
})()
})();
var state__26256__auto__ = (function (){var statearr_27384 = f__26255__auto__();
(statearr_27384[(6)] = c__26254__auto___29041);

return statearr_27384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26256__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_29139 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_29139(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_29140 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_29140(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_29141 = (function() {
var G__29142 = null;
var G__29142__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__29142__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__29142 = function(p,v){
switch(arguments.length){
case 1:
return G__29142__1.call(this,p);
case 2:
return G__29142__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29142.cljs$core$IFn$_invoke$arity$1 = G__29142__1;
G__29142.cljs$core$IFn$_invoke$arity$2 = G__29142__2;
return G__29142;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27415 = arguments.length;
switch (G__27415) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_29141(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_29141(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27436 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27437){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27437 = meta27437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27438,meta27437__$1){
var self__ = this;
var _27438__$1 = this;
return (new cljs.core.async.t_cljs$core$async27436(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27437__$1));
}));

(cljs.core.async.t_cljs$core$async27436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27438){
var self__ = this;
var _27438__$1 = this;
return self__.meta27437;
}));

(cljs.core.async.t_cljs$core$async27436.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27436.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27436.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27436.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async27436.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async27436.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async27436.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async27436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27437","meta27437",-343510145,null)], null);
}));

(cljs.core.async.t_cljs$core$async27436.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27436");

(cljs.core.async.t_cljs$core$async27436.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async27436");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27436.
 */
cljs.core.async.__GT_t_cljs$core$async27436 = (function cljs$core$async$__GT_t_cljs$core$async27436(ch,topic_fn,buf_fn,mults,ensure_mult,meta27437){
return (new cljs.core.async.t_cljs$core$async27436(ch,topic_fn,buf_fn,mults,ensure_mult,meta27437));
});


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
var G__27431 = arguments.length;
switch (G__27431) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__27424_SHARP_){
if(cljs.core.truth_((p1__27424_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27424_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__27424_SHARP_.call(null,topic)))){
return p1__27424_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__27424_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async27436(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__26254__auto___29150 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26255__auto__ = (function (){var switch__26115__auto__ = (function (state_27548){
var state_val_27549 = (state_27548[(1)]);
if((state_val_27549 === (7))){
var inst_27542 = (state_27548[(2)]);
var state_27548__$1 = state_27548;
var statearr_27554_29151 = state_27548__$1;
(statearr_27554_29151[(2)] = inst_27542);

(statearr_27554_29151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (20))){
var state_27548__$1 = state_27548;
var statearr_27556_29155 = state_27548__$1;
(statearr_27556_29155[(2)] = null);

(statearr_27556_29155[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (1))){
var state_27548__$1 = state_27548;
var statearr_27559_29156 = state_27548__$1;
(statearr_27559_29156[(2)] = null);

(statearr_27559_29156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (24))){
var inst_27524 = (state_27548[(7)]);
var inst_27533 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_27524);
var state_27548__$1 = state_27548;
var statearr_27562_29157 = state_27548__$1;
(statearr_27562_29157[(2)] = inst_27533);

(statearr_27562_29157[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (4))){
var inst_27465 = (state_27548[(8)]);
var inst_27465__$1 = (state_27548[(2)]);
var inst_27467 = (inst_27465__$1 == null);
var state_27548__$1 = (function (){var statearr_27564 = state_27548;
(statearr_27564[(8)] = inst_27465__$1);

return statearr_27564;
})();
if(cljs.core.truth_(inst_27467)){
var statearr_27567_29158 = state_27548__$1;
(statearr_27567_29158[(1)] = (5));

} else {
var statearr_27569_29159 = state_27548__$1;
(statearr_27569_29159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (15))){
var inst_27517 = (state_27548[(2)]);
var state_27548__$1 = state_27548;
var statearr_27570_29160 = state_27548__$1;
(statearr_27570_29160[(2)] = inst_27517);

(statearr_27570_29160[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (21))){
var inst_27538 = (state_27548[(2)]);
var state_27548__$1 = (function (){var statearr_27571 = state_27548;
(statearr_27571[(9)] = inst_27538);

return statearr_27571;
})();
var statearr_27573_29162 = state_27548__$1;
(statearr_27573_29162[(2)] = null);

(statearr_27573_29162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (13))){
var inst_27495 = (state_27548[(10)]);
var inst_27497 = cljs.core.chunked_seq_QMARK_(inst_27495);
var state_27548__$1 = state_27548;
if(inst_27497){
var statearr_27584_29163 = state_27548__$1;
(statearr_27584_29163[(1)] = (16));

} else {
var statearr_27586_29167 = state_27548__$1;
(statearr_27586_29167[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (22))){
var inst_27530 = (state_27548[(2)]);
var state_27548__$1 = state_27548;
if(cljs.core.truth_(inst_27530)){
var statearr_27589_29168 = state_27548__$1;
(statearr_27589_29168[(1)] = (23));

} else {
var statearr_27591_29169 = state_27548__$1;
(statearr_27591_29169[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (6))){
var inst_27526 = (state_27548[(11)]);
var inst_27524 = (state_27548[(7)]);
var inst_27465 = (state_27548[(8)]);
var inst_27524__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_27465) : topic_fn.call(null,inst_27465));
var inst_27525 = cljs.core.deref(mults);
var inst_27526__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27525,inst_27524__$1);
var state_27548__$1 = (function (){var statearr_27597 = state_27548;
(statearr_27597[(11)] = inst_27526__$1);

(statearr_27597[(7)] = inst_27524__$1);

return statearr_27597;
})();
if(cljs.core.truth_(inst_27526__$1)){
var statearr_27600_29170 = state_27548__$1;
(statearr_27600_29170[(1)] = (19));

} else {
var statearr_27601_29171 = state_27548__$1;
(statearr_27601_29171[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (25))){
var inst_27535 = (state_27548[(2)]);
var state_27548__$1 = state_27548;
var statearr_27604_29172 = state_27548__$1;
(statearr_27604_29172[(2)] = inst_27535);

(statearr_27604_29172[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (17))){
var inst_27495 = (state_27548[(10)]);
var inst_27507 = cljs.core.first(inst_27495);
var inst_27509 = cljs.core.async.muxch_STAR_(inst_27507);
var inst_27510 = cljs.core.async.close_BANG_(inst_27509);
var inst_27511 = cljs.core.next(inst_27495);
var inst_27476 = inst_27511;
var inst_27477 = null;
var inst_27478 = (0);
var inst_27479 = (0);
var state_27548__$1 = (function (){var statearr_27607 = state_27548;
(statearr_27607[(12)] = inst_27477);

(statearr_27607[(13)] = inst_27476);

(statearr_27607[(14)] = inst_27510);

(statearr_27607[(15)] = inst_27479);

(statearr_27607[(16)] = inst_27478);

return statearr_27607;
})();
var statearr_27608_29173 = state_27548__$1;
(statearr_27608_29173[(2)] = null);

(statearr_27608_29173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (3))){
var inst_27545 = (state_27548[(2)]);
var state_27548__$1 = state_27548;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27548__$1,inst_27545);
} else {
if((state_val_27549 === (12))){
var inst_27519 = (state_27548[(2)]);
var state_27548__$1 = state_27548;
var statearr_27611_29174 = state_27548__$1;
(statearr_27611_29174[(2)] = inst_27519);

(statearr_27611_29174[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (2))){
var state_27548__$1 = state_27548;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27548__$1,(4),ch);
} else {
if((state_val_27549 === (23))){
var state_27548__$1 = state_27548;
var statearr_27616_29175 = state_27548__$1;
(statearr_27616_29175[(2)] = null);

(statearr_27616_29175[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (19))){
var inst_27526 = (state_27548[(11)]);
var inst_27465 = (state_27548[(8)]);
var inst_27528 = cljs.core.async.muxch_STAR_(inst_27526);
var state_27548__$1 = state_27548;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27548__$1,(22),inst_27528,inst_27465);
} else {
if((state_val_27549 === (11))){
var inst_27476 = (state_27548[(13)]);
var inst_27495 = (state_27548[(10)]);
var inst_27495__$1 = cljs.core.seq(inst_27476);
var state_27548__$1 = (function (){var statearr_27621 = state_27548;
(statearr_27621[(10)] = inst_27495__$1);

return statearr_27621;
})();
if(inst_27495__$1){
var statearr_27623_29176 = state_27548__$1;
(statearr_27623_29176[(1)] = (13));

} else {
var statearr_27624_29177 = state_27548__$1;
(statearr_27624_29177[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (9))){
var inst_27521 = (state_27548[(2)]);
var state_27548__$1 = state_27548;
var statearr_27626_29178 = state_27548__$1;
(statearr_27626_29178[(2)] = inst_27521);

(statearr_27626_29178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (5))){
var inst_27473 = cljs.core.deref(mults);
var inst_27474 = cljs.core.vals(inst_27473);
var inst_27475 = cljs.core.seq(inst_27474);
var inst_27476 = inst_27475;
var inst_27477 = null;
var inst_27478 = (0);
var inst_27479 = (0);
var state_27548__$1 = (function (){var statearr_27630 = state_27548;
(statearr_27630[(12)] = inst_27477);

(statearr_27630[(13)] = inst_27476);

(statearr_27630[(15)] = inst_27479);

(statearr_27630[(16)] = inst_27478);

return statearr_27630;
})();
var statearr_27631_29183 = state_27548__$1;
(statearr_27631_29183[(2)] = null);

(statearr_27631_29183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (14))){
var state_27548__$1 = state_27548;
var statearr_27636_29184 = state_27548__$1;
(statearr_27636_29184[(2)] = null);

(statearr_27636_29184[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (16))){
var inst_27495 = (state_27548[(10)]);
var inst_27500 = cljs.core.chunk_first(inst_27495);
var inst_27501 = cljs.core.chunk_rest(inst_27495);
var inst_27502 = cljs.core.count(inst_27500);
var inst_27476 = inst_27501;
var inst_27477 = inst_27500;
var inst_27478 = inst_27502;
var inst_27479 = (0);
var state_27548__$1 = (function (){var statearr_27637 = state_27548;
(statearr_27637[(12)] = inst_27477);

(statearr_27637[(13)] = inst_27476);

(statearr_27637[(15)] = inst_27479);

(statearr_27637[(16)] = inst_27478);

return statearr_27637;
})();
var statearr_27638_29187 = state_27548__$1;
(statearr_27638_29187[(2)] = null);

(statearr_27638_29187[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (10))){
var inst_27477 = (state_27548[(12)]);
var inst_27476 = (state_27548[(13)]);
var inst_27479 = (state_27548[(15)]);
var inst_27478 = (state_27548[(16)]);
var inst_27485 = cljs.core._nth(inst_27477,inst_27479);
var inst_27486 = cljs.core.async.muxch_STAR_(inst_27485);
var inst_27487 = cljs.core.async.close_BANG_(inst_27486);
var inst_27490 = (inst_27479 + (1));
var tmp27632 = inst_27477;
var tmp27633 = inst_27476;
var tmp27634 = inst_27478;
var inst_27476__$1 = tmp27633;
var inst_27477__$1 = tmp27632;
var inst_27478__$1 = tmp27634;
var inst_27479__$1 = inst_27490;
var state_27548__$1 = (function (){var statearr_27642 = state_27548;
(statearr_27642[(12)] = inst_27477__$1);

(statearr_27642[(13)] = inst_27476__$1);

(statearr_27642[(15)] = inst_27479__$1);

(statearr_27642[(17)] = inst_27487);

(statearr_27642[(16)] = inst_27478__$1);

return statearr_27642;
})();
var statearr_27644_29188 = state_27548__$1;
(statearr_27644_29188[(2)] = null);

(statearr_27644_29188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (18))){
var inst_27514 = (state_27548[(2)]);
var state_27548__$1 = state_27548;
var statearr_27645_29189 = state_27548__$1;
(statearr_27645_29189[(2)] = inst_27514);

(statearr_27645_29189[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (8))){
var inst_27479 = (state_27548[(15)]);
var inst_27478 = (state_27548[(16)]);
var inst_27482 = (inst_27479 < inst_27478);
var inst_27483 = inst_27482;
var state_27548__$1 = state_27548;
if(cljs.core.truth_(inst_27483)){
var statearr_27648_29190 = state_27548__$1;
(statearr_27648_29190[(1)] = (10));

} else {
var statearr_27650_29191 = state_27548__$1;
(statearr_27650_29191[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__26116__auto__ = null;
var cljs$core$async$state_machine__26116__auto____0 = (function (){
var statearr_27652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27652[(0)] = cljs$core$async$state_machine__26116__auto__);

(statearr_27652[(1)] = (1));

return statearr_27652;
});
var cljs$core$async$state_machine__26116__auto____1 = (function (state_27548){
while(true){
var ret_value__26117__auto__ = (function (){try{while(true){
var result__26118__auto__ = switch__26115__auto__(state_27548);
if(cljs.core.keyword_identical_QMARK_(result__26118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26118__auto__;
}
break;
}
}catch (e27658){var ex__26119__auto__ = e27658;
var statearr_27659_29197 = state_27548;
(statearr_27659_29197[(2)] = ex__26119__auto__);


if(cljs.core.seq((state_27548[(4)]))){
var statearr_27661_29198 = state_27548;
(statearr_27661_29198[(1)] = cljs.core.first((state_27548[(4)])));

} else {
throw ex__26119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29199 = state_27548;
state_27548 = G__29199;
continue;
} else {
return ret_value__26117__auto__;
}
break;
}
});
cljs$core$async$state_machine__26116__auto__ = function(state_27548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26116__auto____1.call(this,state_27548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26116__auto____0;
cljs$core$async$state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26116__auto____1;
return cljs$core$async$state_machine__26116__auto__;
})()
})();
var state__26256__auto__ = (function (){var statearr_27665 = f__26255__auto__();
(statearr_27665[(6)] = c__26254__auto___29150);

return statearr_27665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26256__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__27671 = arguments.length;
switch (G__27671) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__27685 = arguments.length;
switch (G__27685) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__27699 = arguments.length;
switch (G__27699) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__26254__auto___29211 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26255__auto__ = (function (){var switch__26115__auto__ = (function (state_27760){
var state_val_27764 = (state_27760[(1)]);
if((state_val_27764 === (7))){
var state_27760__$1 = state_27760;
var statearr_27770_29214 = state_27760__$1;
(statearr_27770_29214[(2)] = null);

(statearr_27770_29214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (1))){
var state_27760__$1 = state_27760;
var statearr_27771_29215 = state_27760__$1;
(statearr_27771_29215[(2)] = null);

(statearr_27771_29215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (4))){
var inst_27708 = (state_27760[(7)]);
var inst_27707 = (state_27760[(8)]);
var inst_27710 = (inst_27708 < inst_27707);
var state_27760__$1 = state_27760;
if(cljs.core.truth_(inst_27710)){
var statearr_27776_29216 = state_27760__$1;
(statearr_27776_29216[(1)] = (6));

} else {
var statearr_27777_29217 = state_27760__$1;
(statearr_27777_29217[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (15))){
var inst_27742 = (state_27760[(9)]);
var inst_27747 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_27742);
var state_27760__$1 = state_27760;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27760__$1,(17),out,inst_27747);
} else {
if((state_val_27764 === (13))){
var inst_27742 = (state_27760[(9)]);
var inst_27742__$1 = (state_27760[(2)]);
var inst_27743 = cljs.core.some(cljs.core.nil_QMARK_,inst_27742__$1);
var state_27760__$1 = (function (){var statearr_27782 = state_27760;
(statearr_27782[(9)] = inst_27742__$1);

return statearr_27782;
})();
if(cljs.core.truth_(inst_27743)){
var statearr_27783_29218 = state_27760__$1;
(statearr_27783_29218[(1)] = (14));

} else {
var statearr_27784_29219 = state_27760__$1;
(statearr_27784_29219[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (6))){
var state_27760__$1 = state_27760;
var statearr_27785_29220 = state_27760__$1;
(statearr_27785_29220[(2)] = null);

(statearr_27785_29220[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (17))){
var inst_27749 = (state_27760[(2)]);
var state_27760__$1 = (function (){var statearr_27796 = state_27760;
(statearr_27796[(10)] = inst_27749);

return statearr_27796;
})();
var statearr_27797_29221 = state_27760__$1;
(statearr_27797_29221[(2)] = null);

(statearr_27797_29221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (3))){
var inst_27754 = (state_27760[(2)]);
var state_27760__$1 = state_27760;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27760__$1,inst_27754);
} else {
if((state_val_27764 === (12))){
var _ = (function (){var statearr_27798 = state_27760;
(statearr_27798[(4)] = cljs.core.rest((state_27760[(4)])));

return statearr_27798;
})();
var state_27760__$1 = state_27760;
var ex27794 = (state_27760__$1[(2)]);
var statearr_27802_29223 = state_27760__$1;
(statearr_27802_29223[(5)] = ex27794);


if((ex27794 instanceof Object)){
var statearr_27803_29224 = state_27760__$1;
(statearr_27803_29224[(1)] = (11));

(statearr_27803_29224[(5)] = null);

} else {
throw ex27794;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (2))){
var inst_27706 = cljs.core.reset_BANG_(dctr,cnt);
var inst_27707 = cnt;
var inst_27708 = (0);
var state_27760__$1 = (function (){var statearr_27809 = state_27760;
(statearr_27809[(7)] = inst_27708);

(statearr_27809[(11)] = inst_27706);

(statearr_27809[(8)] = inst_27707);

return statearr_27809;
})();
var statearr_27810_29228 = state_27760__$1;
(statearr_27810_29228[(2)] = null);

(statearr_27810_29228[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (11))){
var inst_27721 = (state_27760[(2)]);
var inst_27722 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_27760__$1 = (function (){var statearr_27815 = state_27760;
(statearr_27815[(12)] = inst_27721);

return statearr_27815;
})();
var statearr_27816_29229 = state_27760__$1;
(statearr_27816_29229[(2)] = inst_27722);

(statearr_27816_29229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (9))){
var inst_27708 = (state_27760[(7)]);
var _ = (function (){var statearr_27818 = state_27760;
(statearr_27818[(4)] = cljs.core.cons((12),(state_27760[(4)])));

return statearr_27818;
})();
var inst_27728 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_27708) : chs__$1.call(null,inst_27708));
var inst_27729 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_27708) : done.call(null,inst_27708));
var inst_27730 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_27728,inst_27729);
var ___$1 = (function (){var statearr_27826 = state_27760;
(statearr_27826[(4)] = cljs.core.rest((state_27760[(4)])));

return statearr_27826;
})();
var state_27760__$1 = state_27760;
var statearr_27827_29230 = state_27760__$1;
(statearr_27827_29230[(2)] = inst_27730);

(statearr_27827_29230[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (5))){
var inst_27740 = (state_27760[(2)]);
var state_27760__$1 = (function (){var statearr_27829 = state_27760;
(statearr_27829[(13)] = inst_27740);

return statearr_27829;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27760__$1,(13),dchan);
} else {
if((state_val_27764 === (14))){
var inst_27745 = cljs.core.async.close_BANG_(out);
var state_27760__$1 = state_27760;
var statearr_27830_29231 = state_27760__$1;
(statearr_27830_29231[(2)] = inst_27745);

(statearr_27830_29231[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (16))){
var inst_27752 = (state_27760[(2)]);
var state_27760__$1 = state_27760;
var statearr_27831_29232 = state_27760__$1;
(statearr_27831_29232[(2)] = inst_27752);

(statearr_27831_29232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (10))){
var inst_27708 = (state_27760[(7)]);
var inst_27733 = (state_27760[(2)]);
var inst_27734 = (inst_27708 + (1));
var inst_27708__$1 = inst_27734;
var state_27760__$1 = (function (){var statearr_27835 = state_27760;
(statearr_27835[(7)] = inst_27708__$1);

(statearr_27835[(14)] = inst_27733);

return statearr_27835;
})();
var statearr_27837_29233 = state_27760__$1;
(statearr_27837_29233[(2)] = null);

(statearr_27837_29233[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (8))){
var inst_27738 = (state_27760[(2)]);
var state_27760__$1 = state_27760;
var statearr_27838_29234 = state_27760__$1;
(statearr_27838_29234[(2)] = inst_27738);

(statearr_27838_29234[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__26116__auto__ = null;
var cljs$core$async$state_machine__26116__auto____0 = (function (){
var statearr_27843 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27843[(0)] = cljs$core$async$state_machine__26116__auto__);

(statearr_27843[(1)] = (1));

return statearr_27843;
});
var cljs$core$async$state_machine__26116__auto____1 = (function (state_27760){
while(true){
var ret_value__26117__auto__ = (function (){try{while(true){
var result__26118__auto__ = switch__26115__auto__(state_27760);
if(cljs.core.keyword_identical_QMARK_(result__26118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26118__auto__;
}
break;
}
}catch (e27844){var ex__26119__auto__ = e27844;
var statearr_27845_29236 = state_27760;
(statearr_27845_29236[(2)] = ex__26119__auto__);


if(cljs.core.seq((state_27760[(4)]))){
var statearr_27846_29237 = state_27760;
(statearr_27846_29237[(1)] = cljs.core.first((state_27760[(4)])));

} else {
throw ex__26119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29238 = state_27760;
state_27760 = G__29238;
continue;
} else {
return ret_value__26117__auto__;
}
break;
}
});
cljs$core$async$state_machine__26116__auto__ = function(state_27760){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26116__auto____1.call(this,state_27760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26116__auto____0;
cljs$core$async$state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26116__auto____1;
return cljs$core$async$state_machine__26116__auto__;
})()
})();
var state__26256__auto__ = (function (){var statearr_27851 = f__26255__auto__();
(statearr_27851[(6)] = c__26254__auto___29211);

return statearr_27851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26256__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__27855 = arguments.length;
switch (G__27855) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26254__auto___29240 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26255__auto__ = (function (){var switch__26115__auto__ = (function (state_27899){
var state_val_27900 = (state_27899[(1)]);
if((state_val_27900 === (7))){
var inst_27874 = (state_27899[(7)]);
var inst_27875 = (state_27899[(8)]);
var inst_27874__$1 = (state_27899[(2)]);
var inst_27875__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27874__$1,(0),null);
var inst_27876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27874__$1,(1),null);
var inst_27877 = (inst_27875__$1 == null);
var state_27899__$1 = (function (){var statearr_27904 = state_27899;
(statearr_27904[(7)] = inst_27874__$1);

(statearr_27904[(8)] = inst_27875__$1);

(statearr_27904[(9)] = inst_27876);

return statearr_27904;
})();
if(cljs.core.truth_(inst_27877)){
var statearr_27906_29245 = state_27899__$1;
(statearr_27906_29245[(1)] = (8));

} else {
var statearr_27907_29246 = state_27899__$1;
(statearr_27907_29246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27900 === (1))){
var inst_27863 = cljs.core.vec(chs);
var inst_27865 = inst_27863;
var state_27899__$1 = (function (){var statearr_27908 = state_27899;
(statearr_27908[(10)] = inst_27865);

return statearr_27908;
})();
var statearr_27909_29247 = state_27899__$1;
(statearr_27909_29247[(2)] = null);

(statearr_27909_29247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27900 === (4))){
var inst_27865 = (state_27899[(10)]);
var state_27899__$1 = state_27899;
return cljs.core.async.ioc_alts_BANG_(state_27899__$1,(7),inst_27865);
} else {
if((state_val_27900 === (6))){
var inst_27895 = (state_27899[(2)]);
var state_27899__$1 = state_27899;
var statearr_27910_29248 = state_27899__$1;
(statearr_27910_29248[(2)] = inst_27895);

(statearr_27910_29248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27900 === (3))){
var inst_27897 = (state_27899[(2)]);
var state_27899__$1 = state_27899;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27899__$1,inst_27897);
} else {
if((state_val_27900 === (2))){
var inst_27865 = (state_27899[(10)]);
var inst_27867 = cljs.core.count(inst_27865);
var inst_27868 = (inst_27867 > (0));
var state_27899__$1 = state_27899;
if(cljs.core.truth_(inst_27868)){
var statearr_27916_29249 = state_27899__$1;
(statearr_27916_29249[(1)] = (4));

} else {
var statearr_27917_29250 = state_27899__$1;
(statearr_27917_29250[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27900 === (11))){
var inst_27865 = (state_27899[(10)]);
var inst_27887 = (state_27899[(2)]);
var tmp27911 = inst_27865;
var inst_27865__$1 = tmp27911;
var state_27899__$1 = (function (){var statearr_27918 = state_27899;
(statearr_27918[(11)] = inst_27887);

(statearr_27918[(10)] = inst_27865__$1);

return statearr_27918;
})();
var statearr_27919_29254 = state_27899__$1;
(statearr_27919_29254[(2)] = null);

(statearr_27919_29254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27900 === (9))){
var inst_27875 = (state_27899[(8)]);
var state_27899__$1 = state_27899;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27899__$1,(11),out,inst_27875);
} else {
if((state_val_27900 === (5))){
var inst_27893 = cljs.core.async.close_BANG_(out);
var state_27899__$1 = state_27899;
var statearr_27920_29255 = state_27899__$1;
(statearr_27920_29255[(2)] = inst_27893);

(statearr_27920_29255[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27900 === (10))){
var inst_27890 = (state_27899[(2)]);
var state_27899__$1 = state_27899;
var statearr_27925_29256 = state_27899__$1;
(statearr_27925_29256[(2)] = inst_27890);

(statearr_27925_29256[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27900 === (8))){
var inst_27874 = (state_27899[(7)]);
var inst_27875 = (state_27899[(8)]);
var inst_27865 = (state_27899[(10)]);
var inst_27876 = (state_27899[(9)]);
var inst_27879 = (function (){var cs = inst_27865;
var vec__27870 = inst_27874;
var v = inst_27875;
var c = inst_27876;
return (function (p1__27852_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__27852_SHARP_);
});
})();
var inst_27880 = cljs.core.filterv(inst_27879,inst_27865);
var inst_27865__$1 = inst_27880;
var state_27899__$1 = (function (){var statearr_27926 = state_27899;
(statearr_27926[(10)] = inst_27865__$1);

return statearr_27926;
})();
var statearr_27927_29257 = state_27899__$1;
(statearr_27927_29257[(2)] = null);

(statearr_27927_29257[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__26116__auto__ = null;
var cljs$core$async$state_machine__26116__auto____0 = (function (){
var statearr_27928 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27928[(0)] = cljs$core$async$state_machine__26116__auto__);

(statearr_27928[(1)] = (1));

return statearr_27928;
});
var cljs$core$async$state_machine__26116__auto____1 = (function (state_27899){
while(true){
var ret_value__26117__auto__ = (function (){try{while(true){
var result__26118__auto__ = switch__26115__auto__(state_27899);
if(cljs.core.keyword_identical_QMARK_(result__26118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26118__auto__;
}
break;
}
}catch (e27930){var ex__26119__auto__ = e27930;
var statearr_27931_29262 = state_27899;
(statearr_27931_29262[(2)] = ex__26119__auto__);


if(cljs.core.seq((state_27899[(4)]))){
var statearr_27932_29263 = state_27899;
(statearr_27932_29263[(1)] = cljs.core.first((state_27899[(4)])));

} else {
throw ex__26119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29264 = state_27899;
state_27899 = G__29264;
continue;
} else {
return ret_value__26117__auto__;
}
break;
}
});
cljs$core$async$state_machine__26116__auto__ = function(state_27899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26116__auto____1.call(this,state_27899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26116__auto____0;
cljs$core$async$state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26116__auto____1;
return cljs$core$async$state_machine__26116__auto__;
})()
})();
var state__26256__auto__ = (function (){var statearr_27933 = f__26255__auto__();
(statearr_27933[(6)] = c__26254__auto___29240);

return statearr_27933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26256__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__27935 = arguments.length;
switch (G__27935) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26254__auto___29272 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26255__auto__ = (function (){var switch__26115__auto__ = (function (state_27961){
var state_val_27962 = (state_27961[(1)]);
if((state_val_27962 === (7))){
var inst_27943 = (state_27961[(7)]);
var inst_27943__$1 = (state_27961[(2)]);
var inst_27944 = (inst_27943__$1 == null);
var inst_27945 = cljs.core.not(inst_27944);
var state_27961__$1 = (function (){var statearr_27963 = state_27961;
(statearr_27963[(7)] = inst_27943__$1);

return statearr_27963;
})();
if(inst_27945){
var statearr_27964_29273 = state_27961__$1;
(statearr_27964_29273[(1)] = (8));

} else {
var statearr_27965_29274 = state_27961__$1;
(statearr_27965_29274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27962 === (1))){
var inst_27938 = (0);
var state_27961__$1 = (function (){var statearr_27966 = state_27961;
(statearr_27966[(8)] = inst_27938);

return statearr_27966;
})();
var statearr_27967_29275 = state_27961__$1;
(statearr_27967_29275[(2)] = null);

(statearr_27967_29275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27962 === (4))){
var state_27961__$1 = state_27961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27961__$1,(7),ch);
} else {
if((state_val_27962 === (6))){
var inst_27956 = (state_27961[(2)]);
var state_27961__$1 = state_27961;
var statearr_27968_29277 = state_27961__$1;
(statearr_27968_29277[(2)] = inst_27956);

(statearr_27968_29277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27962 === (3))){
var inst_27958 = (state_27961[(2)]);
var inst_27959 = cljs.core.async.close_BANG_(out);
var state_27961__$1 = (function (){var statearr_27969 = state_27961;
(statearr_27969[(9)] = inst_27958);

return statearr_27969;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27961__$1,inst_27959);
} else {
if((state_val_27962 === (2))){
var inst_27938 = (state_27961[(8)]);
var inst_27940 = (inst_27938 < n);
var state_27961__$1 = state_27961;
if(cljs.core.truth_(inst_27940)){
var statearr_27970_29278 = state_27961__$1;
(statearr_27970_29278[(1)] = (4));

} else {
var statearr_27971_29279 = state_27961__$1;
(statearr_27971_29279[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27962 === (11))){
var inst_27938 = (state_27961[(8)]);
var inst_27948 = (state_27961[(2)]);
var inst_27949 = (inst_27938 + (1));
var inst_27938__$1 = inst_27949;
var state_27961__$1 = (function (){var statearr_27972 = state_27961;
(statearr_27972[(10)] = inst_27948);

(statearr_27972[(8)] = inst_27938__$1);

return statearr_27972;
})();
var statearr_27973_29280 = state_27961__$1;
(statearr_27973_29280[(2)] = null);

(statearr_27973_29280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27962 === (9))){
var state_27961__$1 = state_27961;
var statearr_27974_29281 = state_27961__$1;
(statearr_27974_29281[(2)] = null);

(statearr_27974_29281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27962 === (5))){
var state_27961__$1 = state_27961;
var statearr_27975_29282 = state_27961__$1;
(statearr_27975_29282[(2)] = null);

(statearr_27975_29282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27962 === (10))){
var inst_27953 = (state_27961[(2)]);
var state_27961__$1 = state_27961;
var statearr_27976_29283 = state_27961__$1;
(statearr_27976_29283[(2)] = inst_27953);

(statearr_27976_29283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27962 === (8))){
var inst_27943 = (state_27961[(7)]);
var state_27961__$1 = state_27961;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27961__$1,(11),out,inst_27943);
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
});
return (function() {
var cljs$core$async$state_machine__26116__auto__ = null;
var cljs$core$async$state_machine__26116__auto____0 = (function (){
var statearr_27977 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27977[(0)] = cljs$core$async$state_machine__26116__auto__);

(statearr_27977[(1)] = (1));

return statearr_27977;
});
var cljs$core$async$state_machine__26116__auto____1 = (function (state_27961){
while(true){
var ret_value__26117__auto__ = (function (){try{while(true){
var result__26118__auto__ = switch__26115__auto__(state_27961);
if(cljs.core.keyword_identical_QMARK_(result__26118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26118__auto__;
}
break;
}
}catch (e27978){var ex__26119__auto__ = e27978;
var statearr_27979_29284 = state_27961;
(statearr_27979_29284[(2)] = ex__26119__auto__);


if(cljs.core.seq((state_27961[(4)]))){
var statearr_27980_29285 = state_27961;
(statearr_27980_29285[(1)] = cljs.core.first((state_27961[(4)])));

} else {
throw ex__26119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29286 = state_27961;
state_27961 = G__29286;
continue;
} else {
return ret_value__26117__auto__;
}
break;
}
});
cljs$core$async$state_machine__26116__auto__ = function(state_27961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26116__auto____1.call(this,state_27961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26116__auto____0;
cljs$core$async$state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26116__auto____1;
return cljs$core$async$state_machine__26116__auto__;
})()
})();
var state__26256__auto__ = (function (){var statearr_27981 = f__26255__auto__();
(statearr_27981[(6)] = c__26254__auto___29272);

return statearr_27981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26256__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27990 = (function (f,ch,meta27984,_,fn1,meta27991){
this.f = f;
this.ch = ch;
this.meta27984 = meta27984;
this._ = _;
this.fn1 = fn1;
this.meta27991 = meta27991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27992,meta27991__$1){
var self__ = this;
var _27992__$1 = this;
return (new cljs.core.async.t_cljs$core$async27990(self__.f,self__.ch,self__.meta27984,self__._,self__.fn1,meta27991__$1));
}));

(cljs.core.async.t_cljs$core$async27990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27992){
var self__ = this;
var _27992__$1 = this;
return self__.meta27991;
}));

(cljs.core.async.t_cljs$core$async27990.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27990.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async27990.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27990.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__27982_SHARP_){
var G__27995 = (((p1__27982_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__27982_SHARP_) : self__.f.call(null,p1__27982_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__27995) : f1.call(null,G__27995));
});
}));

(cljs.core.async.t_cljs$core$async27990.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27984","meta27984",-569656278,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27983","cljs.core.async/t_cljs$core$async27983",-1755407783,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27991","meta27991",1964812545,null)], null);
}));

(cljs.core.async.t_cljs$core$async27990.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27990.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27990");

(cljs.core.async.t_cljs$core$async27990.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async27990");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27990.
 */
cljs.core.async.__GT_t_cljs$core$async27990 = (function cljs$core$async$__GT_t_cljs$core$async27990(f,ch,meta27984,_,fn1,meta27991){
return (new cljs.core.async.t_cljs$core$async27990(f,ch,meta27984,_,fn1,meta27991));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27983 = (function (f,ch,meta27984){
this.f = f;
this.ch = ch;
this.meta27984 = meta27984;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27985,meta27984__$1){
var self__ = this;
var _27985__$1 = this;
return (new cljs.core.async.t_cljs$core$async27983(self__.f,self__.ch,meta27984__$1));
}));

(cljs.core.async.t_cljs$core$async27983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27985){
var self__ = this;
var _27985__$1 = this;
return self__.meta27984;
}));

(cljs.core.async.t_cljs$core$async27983.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27983.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async27983.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async27983.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27983.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async27990(self__.f,self__.ch,self__.meta27984,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__27996 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__27996) : self__.f.call(null,G__27996));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async27983.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27983.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async27983.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27984","meta27984",-569656278,null)], null);
}));

(cljs.core.async.t_cljs$core$async27983.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27983.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27983");

(cljs.core.async.t_cljs$core$async27983.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async27983");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27983.
 */
cljs.core.async.__GT_t_cljs$core$async27983 = (function cljs$core$async$__GT_t_cljs$core$async27983(f,ch,meta27984){
return (new cljs.core.async.t_cljs$core$async27983(f,ch,meta27984));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async27983(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28003 = (function (f,ch,meta28004){
this.f = f;
this.ch = ch;
this.meta28004 = meta28004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28005,meta28004__$1){
var self__ = this;
var _28005__$1 = this;
return (new cljs.core.async.t_cljs$core$async28003(self__.f,self__.ch,meta28004__$1));
}));

(cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28005){
var self__ = this;
var _28005__$1 = this;
return self__.meta28004;
}));

(cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async28003.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28004","meta28004",-818816852,null)], null);
}));

(cljs.core.async.t_cljs$core$async28003.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28003.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28003");

(cljs.core.async.t_cljs$core$async28003.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async28003");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28003.
 */
cljs.core.async.__GT_t_cljs$core$async28003 = (function cljs$core$async$__GT_t_cljs$core$async28003(f,ch,meta28004){
return (new cljs.core.async.t_cljs$core$async28003(f,ch,meta28004));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async28003(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28014 = (function (p,ch,meta28015){
this.p = p;
this.ch = ch;
this.meta28015 = meta28015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28016,meta28015__$1){
var self__ = this;
var _28016__$1 = this;
return (new cljs.core.async.t_cljs$core$async28014(self__.p,self__.ch,meta28015__$1));
}));

(cljs.core.async.t_cljs$core$async28014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28016){
var self__ = this;
var _28016__$1 = this;
return self__.meta28015;
}));

(cljs.core.async.t_cljs$core$async28014.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28014.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async28014.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async28014.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28014.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28014.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28014.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async28014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28015","meta28015",-336145953,null)], null);
}));

(cljs.core.async.t_cljs$core$async28014.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28014");

(cljs.core.async.t_cljs$core$async28014.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async28014");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28014.
 */
cljs.core.async.__GT_t_cljs$core$async28014 = (function cljs$core$async$__GT_t_cljs$core$async28014(p,ch,meta28015){
return (new cljs.core.async.t_cljs$core$async28014(p,ch,meta28015));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async28014(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__28050 = arguments.length;
switch (G__28050) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26254__auto___29294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26255__auto__ = (function (){var switch__26115__auto__ = (function (state_28075){
var state_val_28076 = (state_28075[(1)]);
if((state_val_28076 === (7))){
var inst_28071 = (state_28075[(2)]);
var state_28075__$1 = state_28075;
var statearr_28077_29295 = state_28075__$1;
(statearr_28077_29295[(2)] = inst_28071);

(statearr_28077_29295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28076 === (1))){
var state_28075__$1 = state_28075;
var statearr_28078_29300 = state_28075__$1;
(statearr_28078_29300[(2)] = null);

(statearr_28078_29300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28076 === (4))){
var inst_28057 = (state_28075[(7)]);
var inst_28057__$1 = (state_28075[(2)]);
var inst_28058 = (inst_28057__$1 == null);
var state_28075__$1 = (function (){var statearr_28080 = state_28075;
(statearr_28080[(7)] = inst_28057__$1);

return statearr_28080;
})();
if(cljs.core.truth_(inst_28058)){
var statearr_28082_29304 = state_28075__$1;
(statearr_28082_29304[(1)] = (5));

} else {
var statearr_28085_29305 = state_28075__$1;
(statearr_28085_29305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28076 === (6))){
var inst_28057 = (state_28075[(7)]);
var inst_28062 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_28057) : p.call(null,inst_28057));
var state_28075__$1 = state_28075;
if(cljs.core.truth_(inst_28062)){
var statearr_28086_29306 = state_28075__$1;
(statearr_28086_29306[(1)] = (8));

} else {
var statearr_28087_29307 = state_28075__$1;
(statearr_28087_29307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28076 === (3))){
var inst_28073 = (state_28075[(2)]);
var state_28075__$1 = state_28075;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28075__$1,inst_28073);
} else {
if((state_val_28076 === (2))){
var state_28075__$1 = state_28075;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28075__$1,(4),ch);
} else {
if((state_val_28076 === (11))){
var inst_28065 = (state_28075[(2)]);
var state_28075__$1 = state_28075;
var statearr_28090_29309 = state_28075__$1;
(statearr_28090_29309[(2)] = inst_28065);

(statearr_28090_29309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28076 === (9))){
var state_28075__$1 = state_28075;
var statearr_28091_29311 = state_28075__$1;
(statearr_28091_29311[(2)] = null);

(statearr_28091_29311[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28076 === (5))){
var inst_28060 = cljs.core.async.close_BANG_(out);
var state_28075__$1 = state_28075;
var statearr_28093_29313 = state_28075__$1;
(statearr_28093_29313[(2)] = inst_28060);

(statearr_28093_29313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28076 === (10))){
var inst_28068 = (state_28075[(2)]);
var state_28075__$1 = (function (){var statearr_28094 = state_28075;
(statearr_28094[(8)] = inst_28068);

return statearr_28094;
})();
var statearr_28095_29317 = state_28075__$1;
(statearr_28095_29317[(2)] = null);

(statearr_28095_29317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28076 === (8))){
var inst_28057 = (state_28075[(7)]);
var state_28075__$1 = state_28075;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28075__$1,(11),out,inst_28057);
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
});
return (function() {
var cljs$core$async$state_machine__26116__auto__ = null;
var cljs$core$async$state_machine__26116__auto____0 = (function (){
var statearr_28097 = [null,null,null,null,null,null,null,null,null];
(statearr_28097[(0)] = cljs$core$async$state_machine__26116__auto__);

(statearr_28097[(1)] = (1));

return statearr_28097;
});
var cljs$core$async$state_machine__26116__auto____1 = (function (state_28075){
while(true){
var ret_value__26117__auto__ = (function (){try{while(true){
var result__26118__auto__ = switch__26115__auto__(state_28075);
if(cljs.core.keyword_identical_QMARK_(result__26118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26118__auto__;
}
break;
}
}catch (e28098){var ex__26119__auto__ = e28098;
var statearr_28099_29318 = state_28075;
(statearr_28099_29318[(2)] = ex__26119__auto__);


if(cljs.core.seq((state_28075[(4)]))){
var statearr_28100_29319 = state_28075;
(statearr_28100_29319[(1)] = cljs.core.first((state_28075[(4)])));

} else {
throw ex__26119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29320 = state_28075;
state_28075 = G__29320;
continue;
} else {
return ret_value__26117__auto__;
}
break;
}
});
cljs$core$async$state_machine__26116__auto__ = function(state_28075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26116__auto____1.call(this,state_28075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26116__auto____0;
cljs$core$async$state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26116__auto____1;
return cljs$core$async$state_machine__26116__auto__;
})()
})();
var state__26256__auto__ = (function (){var statearr_28101 = f__26255__auto__();
(statearr_28101[(6)] = c__26254__auto___29294);

return statearr_28101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26256__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28103 = arguments.length;
switch (G__28103) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26254__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26255__auto__ = (function (){var switch__26115__auto__ = (function (state_28172){
var state_val_28173 = (state_28172[(1)]);
if((state_val_28173 === (7))){
var inst_28168 = (state_28172[(2)]);
var state_28172__$1 = state_28172;
var statearr_28174_29325 = state_28172__$1;
(statearr_28174_29325[(2)] = inst_28168);

(statearr_28174_29325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (20))){
var inst_28138 = (state_28172[(7)]);
var inst_28149 = (state_28172[(2)]);
var inst_28150 = cljs.core.next(inst_28138);
var inst_28124 = inst_28150;
var inst_28125 = null;
var inst_28126 = (0);
var inst_28127 = (0);
var state_28172__$1 = (function (){var statearr_28175 = state_28172;
(statearr_28175[(8)] = inst_28126);

(statearr_28175[(9)] = inst_28149);

(statearr_28175[(10)] = inst_28124);

(statearr_28175[(11)] = inst_28125);

(statearr_28175[(12)] = inst_28127);

return statearr_28175;
})();
var statearr_28176_29326 = state_28172__$1;
(statearr_28176_29326[(2)] = null);

(statearr_28176_29326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (1))){
var state_28172__$1 = state_28172;
var statearr_28177_29327 = state_28172__$1;
(statearr_28177_29327[(2)] = null);

(statearr_28177_29327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (4))){
var inst_28113 = (state_28172[(13)]);
var inst_28113__$1 = (state_28172[(2)]);
var inst_28114 = (inst_28113__$1 == null);
var state_28172__$1 = (function (){var statearr_28178 = state_28172;
(statearr_28178[(13)] = inst_28113__$1);

return statearr_28178;
})();
if(cljs.core.truth_(inst_28114)){
var statearr_28179_29331 = state_28172__$1;
(statearr_28179_29331[(1)] = (5));

} else {
var statearr_28180_29332 = state_28172__$1;
(statearr_28180_29332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (15))){
var state_28172__$1 = state_28172;
var statearr_28184_29333 = state_28172__$1;
(statearr_28184_29333[(2)] = null);

(statearr_28184_29333[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (21))){
var state_28172__$1 = state_28172;
var statearr_28185_29334 = state_28172__$1;
(statearr_28185_29334[(2)] = null);

(statearr_28185_29334[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (13))){
var inst_28126 = (state_28172[(8)]);
var inst_28124 = (state_28172[(10)]);
var inst_28125 = (state_28172[(11)]);
var inst_28127 = (state_28172[(12)]);
var inst_28134 = (state_28172[(2)]);
var inst_28135 = (inst_28127 + (1));
var tmp28181 = inst_28126;
var tmp28182 = inst_28124;
var tmp28183 = inst_28125;
var inst_28124__$1 = tmp28182;
var inst_28125__$1 = tmp28183;
var inst_28126__$1 = tmp28181;
var inst_28127__$1 = inst_28135;
var state_28172__$1 = (function (){var statearr_28190 = state_28172;
(statearr_28190[(14)] = inst_28134);

(statearr_28190[(8)] = inst_28126__$1);

(statearr_28190[(10)] = inst_28124__$1);

(statearr_28190[(11)] = inst_28125__$1);

(statearr_28190[(12)] = inst_28127__$1);

return statearr_28190;
})();
var statearr_28191_29335 = state_28172__$1;
(statearr_28191_29335[(2)] = null);

(statearr_28191_29335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (22))){
var state_28172__$1 = state_28172;
var statearr_28193_29336 = state_28172__$1;
(statearr_28193_29336[(2)] = null);

(statearr_28193_29336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (6))){
var inst_28113 = (state_28172[(13)]);
var inst_28122 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_28113) : f.call(null,inst_28113));
var inst_28123 = cljs.core.seq(inst_28122);
var inst_28124 = inst_28123;
var inst_28125 = null;
var inst_28126 = (0);
var inst_28127 = (0);
var state_28172__$1 = (function (){var statearr_28194 = state_28172;
(statearr_28194[(8)] = inst_28126);

(statearr_28194[(10)] = inst_28124);

(statearr_28194[(11)] = inst_28125);

(statearr_28194[(12)] = inst_28127);

return statearr_28194;
})();
var statearr_28195_29337 = state_28172__$1;
(statearr_28195_29337[(2)] = null);

(statearr_28195_29337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (17))){
var inst_28138 = (state_28172[(7)]);
var inst_28142 = cljs.core.chunk_first(inst_28138);
var inst_28143 = cljs.core.chunk_rest(inst_28138);
var inst_28144 = cljs.core.count(inst_28142);
var inst_28124 = inst_28143;
var inst_28125 = inst_28142;
var inst_28126 = inst_28144;
var inst_28127 = (0);
var state_28172__$1 = (function (){var statearr_28196 = state_28172;
(statearr_28196[(8)] = inst_28126);

(statearr_28196[(10)] = inst_28124);

(statearr_28196[(11)] = inst_28125);

(statearr_28196[(12)] = inst_28127);

return statearr_28196;
})();
var statearr_28197_29339 = state_28172__$1;
(statearr_28197_29339[(2)] = null);

(statearr_28197_29339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (3))){
var inst_28170 = (state_28172[(2)]);
var state_28172__$1 = state_28172;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28172__$1,inst_28170);
} else {
if((state_val_28173 === (12))){
var inst_28158 = (state_28172[(2)]);
var state_28172__$1 = state_28172;
var statearr_28199_29340 = state_28172__$1;
(statearr_28199_29340[(2)] = inst_28158);

(statearr_28199_29340[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (2))){
var state_28172__$1 = state_28172;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28172__$1,(4),in$);
} else {
if((state_val_28173 === (23))){
var inst_28166 = (state_28172[(2)]);
var state_28172__$1 = state_28172;
var statearr_28201_29345 = state_28172__$1;
(statearr_28201_29345[(2)] = inst_28166);

(statearr_28201_29345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (19))){
var inst_28153 = (state_28172[(2)]);
var state_28172__$1 = state_28172;
var statearr_28202_29346 = state_28172__$1;
(statearr_28202_29346[(2)] = inst_28153);

(statearr_28202_29346[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (11))){
var inst_28138 = (state_28172[(7)]);
var inst_28124 = (state_28172[(10)]);
var inst_28138__$1 = cljs.core.seq(inst_28124);
var state_28172__$1 = (function (){var statearr_28203 = state_28172;
(statearr_28203[(7)] = inst_28138__$1);

return statearr_28203;
})();
if(inst_28138__$1){
var statearr_28204_29360 = state_28172__$1;
(statearr_28204_29360[(1)] = (14));

} else {
var statearr_28205_29361 = state_28172__$1;
(statearr_28205_29361[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (9))){
var inst_28160 = (state_28172[(2)]);
var inst_28161 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_28172__$1 = (function (){var statearr_28206 = state_28172;
(statearr_28206[(15)] = inst_28160);

return statearr_28206;
})();
if(cljs.core.truth_(inst_28161)){
var statearr_28207_29362 = state_28172__$1;
(statearr_28207_29362[(1)] = (21));

} else {
var statearr_28209_29363 = state_28172__$1;
(statearr_28209_29363[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (5))){
var inst_28116 = cljs.core.async.close_BANG_(out);
var state_28172__$1 = state_28172;
var statearr_28214_29364 = state_28172__$1;
(statearr_28214_29364[(2)] = inst_28116);

(statearr_28214_29364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (14))){
var inst_28138 = (state_28172[(7)]);
var inst_28140 = cljs.core.chunked_seq_QMARK_(inst_28138);
var state_28172__$1 = state_28172;
if(inst_28140){
var statearr_28215_29371 = state_28172__$1;
(statearr_28215_29371[(1)] = (17));

} else {
var statearr_28216_29372 = state_28172__$1;
(statearr_28216_29372[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (16))){
var inst_28156 = (state_28172[(2)]);
var state_28172__$1 = state_28172;
var statearr_28217_29373 = state_28172__$1;
(statearr_28217_29373[(2)] = inst_28156);

(statearr_28217_29373[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28173 === (10))){
var inst_28125 = (state_28172[(11)]);
var inst_28127 = (state_28172[(12)]);
var inst_28132 = cljs.core._nth(inst_28125,inst_28127);
var state_28172__$1 = state_28172;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28172__$1,(13),out,inst_28132);
} else {
if((state_val_28173 === (18))){
var inst_28138 = (state_28172[(7)]);
var inst_28147 = cljs.core.first(inst_28138);
var state_28172__$1 = state_28172;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28172__$1,(20),out,inst_28147);
} else {
if((state_val_28173 === (8))){
var inst_28126 = (state_28172[(8)]);
var inst_28127 = (state_28172[(12)]);
var inst_28129 = (inst_28127 < inst_28126);
var inst_28130 = inst_28129;
var state_28172__$1 = state_28172;
if(cljs.core.truth_(inst_28130)){
var statearr_28218_29374 = state_28172__$1;
(statearr_28218_29374[(1)] = (10));

} else {
var statearr_28219_29375 = state_28172__$1;
(statearr_28219_29375[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26116__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26116__auto____0 = (function (){
var statearr_28224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28224[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26116__auto__);

(statearr_28224[(1)] = (1));

return statearr_28224;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26116__auto____1 = (function (state_28172){
while(true){
var ret_value__26117__auto__ = (function (){try{while(true){
var result__26118__auto__ = switch__26115__auto__(state_28172);
if(cljs.core.keyword_identical_QMARK_(result__26118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26118__auto__;
}
break;
}
}catch (e28225){var ex__26119__auto__ = e28225;
var statearr_28226_29376 = state_28172;
(statearr_28226_29376[(2)] = ex__26119__auto__);


if(cljs.core.seq((state_28172[(4)]))){
var statearr_28227_29377 = state_28172;
(statearr_28227_29377[(1)] = cljs.core.first((state_28172[(4)])));

} else {
throw ex__26119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29378 = state_28172;
state_28172 = G__29378;
continue;
} else {
return ret_value__26117__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26116__auto__ = function(state_28172){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26116__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26116__auto____1.call(this,state_28172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26116__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26116__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26116__auto__;
})()
})();
var state__26256__auto__ = (function (){var statearr_28228 = f__26255__auto__();
(statearr_28228[(6)] = c__26254__auto__);

return statearr_28228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26256__auto__);
}));

return c__26254__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28234 = arguments.length;
switch (G__28234) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__28236 = arguments.length;
switch (G__28236) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__28243 = arguments.length;
switch (G__28243) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26254__auto___29382 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26255__auto__ = (function (){var switch__26115__auto__ = (function (state_28267){
var state_val_28268 = (state_28267[(1)]);
if((state_val_28268 === (7))){
var inst_28262 = (state_28267[(2)]);
var state_28267__$1 = state_28267;
var statearr_28269_29383 = state_28267__$1;
(statearr_28269_29383[(2)] = inst_28262);

(statearr_28269_29383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28268 === (1))){
var inst_28244 = null;
var state_28267__$1 = (function (){var statearr_28270 = state_28267;
(statearr_28270[(7)] = inst_28244);

return statearr_28270;
})();
var statearr_28271_29384 = state_28267__$1;
(statearr_28271_29384[(2)] = null);

(statearr_28271_29384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28268 === (4))){
var inst_28247 = (state_28267[(8)]);
var inst_28247__$1 = (state_28267[(2)]);
var inst_28248 = (inst_28247__$1 == null);
var inst_28249 = cljs.core.not(inst_28248);
var state_28267__$1 = (function (){var statearr_28272 = state_28267;
(statearr_28272[(8)] = inst_28247__$1);

return statearr_28272;
})();
if(inst_28249){
var statearr_28273_29391 = state_28267__$1;
(statearr_28273_29391[(1)] = (5));

} else {
var statearr_28274_29392 = state_28267__$1;
(statearr_28274_29392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28268 === (6))){
var state_28267__$1 = state_28267;
var statearr_28275_29393 = state_28267__$1;
(statearr_28275_29393[(2)] = null);

(statearr_28275_29393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28268 === (3))){
var inst_28264 = (state_28267[(2)]);
var inst_28265 = cljs.core.async.close_BANG_(out);
var state_28267__$1 = (function (){var statearr_28276 = state_28267;
(statearr_28276[(9)] = inst_28264);

return statearr_28276;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28267__$1,inst_28265);
} else {
if((state_val_28268 === (2))){
var state_28267__$1 = state_28267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28267__$1,(4),ch);
} else {
if((state_val_28268 === (11))){
var inst_28247 = (state_28267[(8)]);
var inst_28256 = (state_28267[(2)]);
var inst_28244 = inst_28247;
var state_28267__$1 = (function (){var statearr_28277 = state_28267;
(statearr_28277[(10)] = inst_28256);

(statearr_28277[(7)] = inst_28244);

return statearr_28277;
})();
var statearr_28278_29402 = state_28267__$1;
(statearr_28278_29402[(2)] = null);

(statearr_28278_29402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28268 === (9))){
var inst_28247 = (state_28267[(8)]);
var state_28267__$1 = state_28267;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28267__$1,(11),out,inst_28247);
} else {
if((state_val_28268 === (5))){
var inst_28244 = (state_28267[(7)]);
var inst_28247 = (state_28267[(8)]);
var inst_28251 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28247,inst_28244);
var state_28267__$1 = state_28267;
if(inst_28251){
var statearr_28280_29403 = state_28267__$1;
(statearr_28280_29403[(1)] = (8));

} else {
var statearr_28281_29404 = state_28267__$1;
(statearr_28281_29404[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28268 === (10))){
var inst_28259 = (state_28267[(2)]);
var state_28267__$1 = state_28267;
var statearr_28282_29405 = state_28267__$1;
(statearr_28282_29405[(2)] = inst_28259);

(statearr_28282_29405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28268 === (8))){
var inst_28244 = (state_28267[(7)]);
var tmp28279 = inst_28244;
var inst_28244__$1 = tmp28279;
var state_28267__$1 = (function (){var statearr_28283 = state_28267;
(statearr_28283[(7)] = inst_28244__$1);

return statearr_28283;
})();
var statearr_28284_29406 = state_28267__$1;
(statearr_28284_29406[(2)] = null);

(statearr_28284_29406[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__26116__auto__ = null;
var cljs$core$async$state_machine__26116__auto____0 = (function (){
var statearr_28285 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28285[(0)] = cljs$core$async$state_machine__26116__auto__);

(statearr_28285[(1)] = (1));

return statearr_28285;
});
var cljs$core$async$state_machine__26116__auto____1 = (function (state_28267){
while(true){
var ret_value__26117__auto__ = (function (){try{while(true){
var result__26118__auto__ = switch__26115__auto__(state_28267);
if(cljs.core.keyword_identical_QMARK_(result__26118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26118__auto__;
}
break;
}
}catch (e28286){var ex__26119__auto__ = e28286;
var statearr_28287_29411 = state_28267;
(statearr_28287_29411[(2)] = ex__26119__auto__);


if(cljs.core.seq((state_28267[(4)]))){
var statearr_28288_29412 = state_28267;
(statearr_28288_29412[(1)] = cljs.core.first((state_28267[(4)])));

} else {
throw ex__26119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29413 = state_28267;
state_28267 = G__29413;
continue;
} else {
return ret_value__26117__auto__;
}
break;
}
});
cljs$core$async$state_machine__26116__auto__ = function(state_28267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26116__auto____1.call(this,state_28267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26116__auto____0;
cljs$core$async$state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26116__auto____1;
return cljs$core$async$state_machine__26116__auto__;
})()
})();
var state__26256__auto__ = (function (){var statearr_28289 = f__26255__auto__();
(statearr_28289[(6)] = c__26254__auto___29382);

return statearr_28289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26256__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28291 = arguments.length;
switch (G__28291) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26254__auto___29429 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26255__auto__ = (function (){var switch__26115__auto__ = (function (state_28333){
var state_val_28334 = (state_28333[(1)]);
if((state_val_28334 === (7))){
var inst_28326 = (state_28333[(2)]);
var state_28333__$1 = state_28333;
var statearr_28335_29430 = state_28333__$1;
(statearr_28335_29430[(2)] = inst_28326);

(statearr_28335_29430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28334 === (1))){
var inst_28293 = (new Array(n));
var inst_28294 = inst_28293;
var inst_28295 = (0);
var state_28333__$1 = (function (){var statearr_28336 = state_28333;
(statearr_28336[(7)] = inst_28294);

(statearr_28336[(8)] = inst_28295);

return statearr_28336;
})();
var statearr_28337_29435 = state_28333__$1;
(statearr_28337_29435[(2)] = null);

(statearr_28337_29435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28334 === (4))){
var inst_28298 = (state_28333[(9)]);
var inst_28298__$1 = (state_28333[(2)]);
var inst_28299 = (inst_28298__$1 == null);
var inst_28300 = cljs.core.not(inst_28299);
var state_28333__$1 = (function (){var statearr_28342 = state_28333;
(statearr_28342[(9)] = inst_28298__$1);

return statearr_28342;
})();
if(inst_28300){
var statearr_28343_29436 = state_28333__$1;
(statearr_28343_29436[(1)] = (5));

} else {
var statearr_28344_29437 = state_28333__$1;
(statearr_28344_29437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28334 === (15))){
var inst_28320 = (state_28333[(2)]);
var state_28333__$1 = state_28333;
var statearr_28345_29438 = state_28333__$1;
(statearr_28345_29438[(2)] = inst_28320);

(statearr_28345_29438[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28334 === (13))){
var state_28333__$1 = state_28333;
var statearr_28346_29439 = state_28333__$1;
(statearr_28346_29439[(2)] = null);

(statearr_28346_29439[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28334 === (6))){
var inst_28295 = (state_28333[(8)]);
var inst_28316 = (inst_28295 > (0));
var state_28333__$1 = state_28333;
if(cljs.core.truth_(inst_28316)){
var statearr_28347_29440 = state_28333__$1;
(statearr_28347_29440[(1)] = (12));

} else {
var statearr_28348_29441 = state_28333__$1;
(statearr_28348_29441[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28334 === (3))){
var inst_28328 = (state_28333[(2)]);
var state_28333__$1 = state_28333;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28333__$1,inst_28328);
} else {
if((state_val_28334 === (12))){
var inst_28294 = (state_28333[(7)]);
var inst_28318 = cljs.core.vec(inst_28294);
var state_28333__$1 = state_28333;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28333__$1,(15),out,inst_28318);
} else {
if((state_val_28334 === (2))){
var state_28333__$1 = state_28333;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28333__$1,(4),ch);
} else {
if((state_val_28334 === (11))){
var inst_28310 = (state_28333[(2)]);
var inst_28311 = (new Array(n));
var inst_28294 = inst_28311;
var inst_28295 = (0);
var state_28333__$1 = (function (){var statearr_28349 = state_28333;
(statearr_28349[(7)] = inst_28294);

(statearr_28349[(8)] = inst_28295);

(statearr_28349[(10)] = inst_28310);

return statearr_28349;
})();
var statearr_28350_29442 = state_28333__$1;
(statearr_28350_29442[(2)] = null);

(statearr_28350_29442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28334 === (9))){
var inst_28294 = (state_28333[(7)]);
var inst_28308 = cljs.core.vec(inst_28294);
var state_28333__$1 = state_28333;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28333__$1,(11),out,inst_28308);
} else {
if((state_val_28334 === (5))){
var inst_28294 = (state_28333[(7)]);
var inst_28303 = (state_28333[(11)]);
var inst_28295 = (state_28333[(8)]);
var inst_28298 = (state_28333[(9)]);
var inst_28302 = (inst_28294[inst_28295] = inst_28298);
var inst_28303__$1 = (inst_28295 + (1));
var inst_28304 = (inst_28303__$1 < n);
var state_28333__$1 = (function (){var statearr_28365 = state_28333;
(statearr_28365[(11)] = inst_28303__$1);

(statearr_28365[(12)] = inst_28302);

return statearr_28365;
})();
if(cljs.core.truth_(inst_28304)){
var statearr_28366_29449 = state_28333__$1;
(statearr_28366_29449[(1)] = (8));

} else {
var statearr_28367_29450 = state_28333__$1;
(statearr_28367_29450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28334 === (14))){
var inst_28323 = (state_28333[(2)]);
var inst_28324 = cljs.core.async.close_BANG_(out);
var state_28333__$1 = (function (){var statearr_28375 = state_28333;
(statearr_28375[(13)] = inst_28323);

return statearr_28375;
})();
var statearr_28376_29451 = state_28333__$1;
(statearr_28376_29451[(2)] = inst_28324);

(statearr_28376_29451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28334 === (10))){
var inst_28314 = (state_28333[(2)]);
var state_28333__$1 = state_28333;
var statearr_28377_29452 = state_28333__$1;
(statearr_28377_29452[(2)] = inst_28314);

(statearr_28377_29452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28334 === (8))){
var inst_28294 = (state_28333[(7)]);
var inst_28303 = (state_28333[(11)]);
var tmp28374 = inst_28294;
var inst_28294__$1 = tmp28374;
var inst_28295 = inst_28303;
var state_28333__$1 = (function (){var statearr_28386 = state_28333;
(statearr_28386[(7)] = inst_28294__$1);

(statearr_28386[(8)] = inst_28295);

return statearr_28386;
})();
var statearr_28393_29453 = state_28333__$1;
(statearr_28393_29453[(2)] = null);

(statearr_28393_29453[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__26116__auto__ = null;
var cljs$core$async$state_machine__26116__auto____0 = (function (){
var statearr_28400 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28400[(0)] = cljs$core$async$state_machine__26116__auto__);

(statearr_28400[(1)] = (1));

return statearr_28400;
});
var cljs$core$async$state_machine__26116__auto____1 = (function (state_28333){
while(true){
var ret_value__26117__auto__ = (function (){try{while(true){
var result__26118__auto__ = switch__26115__auto__(state_28333);
if(cljs.core.keyword_identical_QMARK_(result__26118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26118__auto__;
}
break;
}
}catch (e28403){var ex__26119__auto__ = e28403;
var statearr_28404_29471 = state_28333;
(statearr_28404_29471[(2)] = ex__26119__auto__);


if(cljs.core.seq((state_28333[(4)]))){
var statearr_28405_29472 = state_28333;
(statearr_28405_29472[(1)] = cljs.core.first((state_28333[(4)])));

} else {
throw ex__26119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29473 = state_28333;
state_28333 = G__29473;
continue;
} else {
return ret_value__26117__auto__;
}
break;
}
});
cljs$core$async$state_machine__26116__auto__ = function(state_28333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26116__auto____1.call(this,state_28333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26116__auto____0;
cljs$core$async$state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26116__auto____1;
return cljs$core$async$state_machine__26116__auto__;
})()
})();
var state__26256__auto__ = (function (){var statearr_28407 = f__26255__auto__();
(statearr_28407[(6)] = c__26254__auto___29429);

return statearr_28407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26256__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28409 = arguments.length;
switch (G__28409) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26254__auto___29486 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26255__auto__ = (function (){var switch__26115__auto__ = (function (state_28457){
var state_val_28458 = (state_28457[(1)]);
if((state_val_28458 === (7))){
var inst_28453 = (state_28457[(2)]);
var state_28457__$1 = state_28457;
var statearr_28459_29488 = state_28457__$1;
(statearr_28459_29488[(2)] = inst_28453);

(statearr_28459_29488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28458 === (1))){
var inst_28413 = [];
var inst_28414 = inst_28413;
var inst_28415 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28457__$1 = (function (){var statearr_28460 = state_28457;
(statearr_28460[(7)] = inst_28414);

(statearr_28460[(8)] = inst_28415);

return statearr_28460;
})();
var statearr_28461_29489 = state_28457__$1;
(statearr_28461_29489[(2)] = null);

(statearr_28461_29489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28458 === (4))){
var inst_28418 = (state_28457[(9)]);
var inst_28418__$1 = (state_28457[(2)]);
var inst_28419 = (inst_28418__$1 == null);
var inst_28420 = cljs.core.not(inst_28419);
var state_28457__$1 = (function (){var statearr_28462 = state_28457;
(statearr_28462[(9)] = inst_28418__$1);

return statearr_28462;
})();
if(inst_28420){
var statearr_28463_29490 = state_28457__$1;
(statearr_28463_29490[(1)] = (5));

} else {
var statearr_28464_29491 = state_28457__$1;
(statearr_28464_29491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28458 === (15))){
var inst_28414 = (state_28457[(7)]);
var inst_28445 = cljs.core.vec(inst_28414);
var state_28457__$1 = state_28457;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28457__$1,(18),out,inst_28445);
} else {
if((state_val_28458 === (13))){
var inst_28440 = (state_28457[(2)]);
var state_28457__$1 = state_28457;
var statearr_28465_29492 = state_28457__$1;
(statearr_28465_29492[(2)] = inst_28440);

(statearr_28465_29492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28458 === (6))){
var inst_28414 = (state_28457[(7)]);
var inst_28442 = inst_28414.length;
var inst_28443 = (inst_28442 > (0));
var state_28457__$1 = state_28457;
if(cljs.core.truth_(inst_28443)){
var statearr_28466_29493 = state_28457__$1;
(statearr_28466_29493[(1)] = (15));

} else {
var statearr_28467_29494 = state_28457__$1;
(statearr_28467_29494[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28458 === (17))){
var inst_28450 = (state_28457[(2)]);
var inst_28451 = cljs.core.async.close_BANG_(out);
var state_28457__$1 = (function (){var statearr_28468 = state_28457;
(statearr_28468[(10)] = inst_28450);

return statearr_28468;
})();
var statearr_28469_29496 = state_28457__$1;
(statearr_28469_29496[(2)] = inst_28451);

(statearr_28469_29496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28458 === (3))){
var inst_28455 = (state_28457[(2)]);
var state_28457__$1 = state_28457;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28457__$1,inst_28455);
} else {
if((state_val_28458 === (12))){
var inst_28414 = (state_28457[(7)]);
var inst_28433 = cljs.core.vec(inst_28414);
var state_28457__$1 = state_28457;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28457__$1,(14),out,inst_28433);
} else {
if((state_val_28458 === (2))){
var state_28457__$1 = state_28457;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28457__$1,(4),ch);
} else {
if((state_val_28458 === (11))){
var inst_28418 = (state_28457[(9)]);
var inst_28422 = (state_28457[(11)]);
var inst_28414 = (state_28457[(7)]);
var inst_28430 = inst_28414.push(inst_28418);
var tmp28470 = inst_28414;
var inst_28414__$1 = tmp28470;
var inst_28415 = inst_28422;
var state_28457__$1 = (function (){var statearr_28471 = state_28457;
(statearr_28471[(7)] = inst_28414__$1);

(statearr_28471[(8)] = inst_28415);

(statearr_28471[(12)] = inst_28430);

return statearr_28471;
})();
var statearr_28472_29546 = state_28457__$1;
(statearr_28472_29546[(2)] = null);

(statearr_28472_29546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28458 === (9))){
var inst_28415 = (state_28457[(8)]);
var inst_28426 = cljs.core.keyword_identical_QMARK_(inst_28415,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_28457__$1 = state_28457;
var statearr_28473_29555 = state_28457__$1;
(statearr_28473_29555[(2)] = inst_28426);

(statearr_28473_29555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28458 === (5))){
var inst_28418 = (state_28457[(9)]);
var inst_28422 = (state_28457[(11)]);
var inst_28423 = (state_28457[(13)]);
var inst_28415 = (state_28457[(8)]);
var inst_28422__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_28418) : f.call(null,inst_28418));
var inst_28423__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28422__$1,inst_28415);
var state_28457__$1 = (function (){var statearr_28474 = state_28457;
(statearr_28474[(11)] = inst_28422__$1);

(statearr_28474[(13)] = inst_28423__$1);

return statearr_28474;
})();
if(inst_28423__$1){
var statearr_28475_29557 = state_28457__$1;
(statearr_28475_29557[(1)] = (8));

} else {
var statearr_28476_29558 = state_28457__$1;
(statearr_28476_29558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28458 === (14))){
var inst_28418 = (state_28457[(9)]);
var inst_28422 = (state_28457[(11)]);
var inst_28435 = (state_28457[(2)]);
var inst_28436 = [];
var inst_28437 = inst_28436.push(inst_28418);
var inst_28414 = inst_28436;
var inst_28415 = inst_28422;
var state_28457__$1 = (function (){var statearr_28477 = state_28457;
(statearr_28477[(14)] = inst_28435);

(statearr_28477[(7)] = inst_28414);

(statearr_28477[(8)] = inst_28415);

(statearr_28477[(15)] = inst_28437);

return statearr_28477;
})();
var statearr_28478_29559 = state_28457__$1;
(statearr_28478_29559[(2)] = null);

(statearr_28478_29559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28458 === (16))){
var state_28457__$1 = state_28457;
var statearr_28479_29562 = state_28457__$1;
(statearr_28479_29562[(2)] = null);

(statearr_28479_29562[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28458 === (10))){
var inst_28428 = (state_28457[(2)]);
var state_28457__$1 = state_28457;
if(cljs.core.truth_(inst_28428)){
var statearr_28480_29565 = state_28457__$1;
(statearr_28480_29565[(1)] = (11));

} else {
var statearr_28483_29566 = state_28457__$1;
(statearr_28483_29566[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28458 === (18))){
var inst_28447 = (state_28457[(2)]);
var state_28457__$1 = state_28457;
var statearr_28487_29568 = state_28457__$1;
(statearr_28487_29568[(2)] = inst_28447);

(statearr_28487_29568[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28458 === (8))){
var inst_28423 = (state_28457[(13)]);
var state_28457__$1 = state_28457;
var statearr_28491_29569 = state_28457__$1;
(statearr_28491_29569[(2)] = inst_28423);

(statearr_28491_29569[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__26116__auto__ = null;
var cljs$core$async$state_machine__26116__auto____0 = (function (){
var statearr_28495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28495[(0)] = cljs$core$async$state_machine__26116__auto__);

(statearr_28495[(1)] = (1));

return statearr_28495;
});
var cljs$core$async$state_machine__26116__auto____1 = (function (state_28457){
while(true){
var ret_value__26117__auto__ = (function (){try{while(true){
var result__26118__auto__ = switch__26115__auto__(state_28457);
if(cljs.core.keyword_identical_QMARK_(result__26118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26118__auto__;
}
break;
}
}catch (e28496){var ex__26119__auto__ = e28496;
var statearr_28497_29583 = state_28457;
(statearr_28497_29583[(2)] = ex__26119__auto__);


if(cljs.core.seq((state_28457[(4)]))){
var statearr_28498_29589 = state_28457;
(statearr_28498_29589[(1)] = cljs.core.first((state_28457[(4)])));

} else {
throw ex__26119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29595 = state_28457;
state_28457 = G__29595;
continue;
} else {
return ret_value__26117__auto__;
}
break;
}
});
cljs$core$async$state_machine__26116__auto__ = function(state_28457){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26116__auto____1.call(this,state_28457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26116__auto____0;
cljs$core$async$state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26116__auto____1;
return cljs$core$async$state_machine__26116__auto__;
})()
})();
var state__26256__auto__ = (function (){var statearr_28499 = f__26255__auto__();
(statearr_28499[(6)] = c__26254__auto___29486);

return statearr_28499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26256__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
