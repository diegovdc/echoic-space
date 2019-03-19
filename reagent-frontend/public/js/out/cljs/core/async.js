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
var G__51085 = arguments.length;
switch (G__51085) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51086 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51086 = (function (f,blockable,meta51087){
this.f = f;
this.blockable = blockable;
this.meta51087 = meta51087;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51088,meta51087__$1){
var self__ = this;
var _51088__$1 = this;
return (new cljs.core.async.t_cljs$core$async51086(self__.f,self__.blockable,meta51087__$1));
});

cljs.core.async.t_cljs$core$async51086.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51088){
var self__ = this;
var _51088__$1 = this;
return self__.meta51087;
});

cljs.core.async.t_cljs$core$async51086.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51086.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async51086.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async51086.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async51086.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta51087","meta51087",1190160110,null)], null);
});

cljs.core.async.t_cljs$core$async51086.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51086.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51086";

cljs.core.async.t_cljs$core$async51086.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async51086");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51086.
 */
cljs.core.async.__GT_t_cljs$core$async51086 = (function cljs$core$async$__GT_t_cljs$core$async51086(f__$1,blockable__$1,meta51087){
return (new cljs.core.async.t_cljs$core$async51086(f__$1,blockable__$1,meta51087));
});

}

return (new cljs.core.async.t_cljs$core$async51086(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__51092 = arguments.length;
switch (G__51092) {
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
var G__51095 = arguments.length;
switch (G__51095) {
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
var G__51098 = arguments.length;
switch (G__51098) {
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
var val_51100 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_51100);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_51100,ret){
return (function (){
return fn1.call(null,val_51100);
});})(val_51100,ret))
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
var G__51102 = arguments.length;
switch (G__51102) {
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
var n__4394__auto___51104 = n;
var x_51105 = (0);
while(true){
if((x_51105 < n__4394__auto___51104)){
(a[x_51105] = (0));

var G__51106 = (x_51105 + (1));
x_51105 = G__51106;
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

var G__51107 = (i + (1));
i = G__51107;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51108 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51108 = (function (flag,meta51109){
this.flag = flag;
this.meta51109 = meta51109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_51110,meta51109__$1){
var self__ = this;
var _51110__$1 = this;
return (new cljs.core.async.t_cljs$core$async51108(self__.flag,meta51109__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async51108.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_51110){
var self__ = this;
var _51110__$1 = this;
return self__.meta51109;
});})(flag))
;

cljs.core.async.t_cljs$core$async51108.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51108.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async51108.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async51108.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async51108.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta51109","meta51109",-554787832,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async51108.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51108.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51108";

cljs.core.async.t_cljs$core$async51108.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async51108");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51108.
 */
cljs.core.async.__GT_t_cljs$core$async51108 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async51108(flag__$1,meta51109){
return (new cljs.core.async.t_cljs$core$async51108(flag__$1,meta51109));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async51108(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51111 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51111 = (function (flag,cb,meta51112){
this.flag = flag;
this.cb = cb;
this.meta51112 = meta51112;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51113,meta51112__$1){
var self__ = this;
var _51113__$1 = this;
return (new cljs.core.async.t_cljs$core$async51111(self__.flag,self__.cb,meta51112__$1));
});

cljs.core.async.t_cljs$core$async51111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51113){
var self__ = this;
var _51113__$1 = this;
return self__.meta51112;
});

cljs.core.async.t_cljs$core$async51111.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51111.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async51111.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async51111.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async51111.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta51112","meta51112",2068976290,null)], null);
});

cljs.core.async.t_cljs$core$async51111.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51111.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51111";

cljs.core.async.t_cljs$core$async51111.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async51111");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51111.
 */
cljs.core.async.__GT_t_cljs$core$async51111 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async51111(flag__$1,cb__$1,meta51112){
return (new cljs.core.async.t_cljs$core$async51111(flag__$1,cb__$1,meta51112));
});

}

return (new cljs.core.async.t_cljs$core$async51111(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__51114_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51114_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__51115_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51115_SHARP_,port], null));
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
var G__51116 = (i + (1));
i = G__51116;
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
var len__4517__auto___51122 = arguments.length;
var i__4518__auto___51123 = (0);
while(true){
if((i__4518__auto___51123 < len__4517__auto___51122)){
args__4520__auto__.push((arguments[i__4518__auto___51123]));

var G__51124 = (i__4518__auto___51123 + (1));
i__4518__auto___51123 = G__51124;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__51119){
var map__51120 = p__51119;
var map__51120__$1 = ((((!((map__51120 == null)))?(((((map__51120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51120):map__51120);
var opts = map__51120__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq51117){
var G__51118 = cljs.core.first.call(null,seq51117);
var seq51117__$1 = cljs.core.next.call(null,seq51117);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51118,seq51117__$1);
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
var G__51126 = arguments.length;
switch (G__51126) {
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
var c__51025__auto___51172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51025__auto___51172){
return (function (){
var f__51026__auto__ = (function (){var switch__50721__auto__ = ((function (c__51025__auto___51172){
return (function (state_51150){
var state_val_51151 = (state_51150[(1)]);
if((state_val_51151 === (7))){
var inst_51146 = (state_51150[(2)]);
var state_51150__$1 = state_51150;
var statearr_51152_51173 = state_51150__$1;
(statearr_51152_51173[(2)] = inst_51146);

(statearr_51152_51173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51151 === (1))){
var state_51150__$1 = state_51150;
var statearr_51153_51174 = state_51150__$1;
(statearr_51153_51174[(2)] = null);

(statearr_51153_51174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51151 === (4))){
var inst_51129 = (state_51150[(7)]);
var inst_51129__$1 = (state_51150[(2)]);
var inst_51130 = (inst_51129__$1 == null);
var state_51150__$1 = (function (){var statearr_51154 = state_51150;
(statearr_51154[(7)] = inst_51129__$1);

return statearr_51154;
})();
if(cljs.core.truth_(inst_51130)){
var statearr_51155_51175 = state_51150__$1;
(statearr_51155_51175[(1)] = (5));

} else {
var statearr_51156_51176 = state_51150__$1;
(statearr_51156_51176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51151 === (13))){
var state_51150__$1 = state_51150;
var statearr_51157_51177 = state_51150__$1;
(statearr_51157_51177[(2)] = null);

(statearr_51157_51177[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51151 === (6))){
var inst_51129 = (state_51150[(7)]);
var state_51150__$1 = state_51150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51150__$1,(11),to,inst_51129);
} else {
if((state_val_51151 === (3))){
var inst_51148 = (state_51150[(2)]);
var state_51150__$1 = state_51150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51150__$1,inst_51148);
} else {
if((state_val_51151 === (12))){
var state_51150__$1 = state_51150;
var statearr_51158_51178 = state_51150__$1;
(statearr_51158_51178[(2)] = null);

(statearr_51158_51178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51151 === (2))){
var state_51150__$1 = state_51150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51150__$1,(4),from);
} else {
if((state_val_51151 === (11))){
var inst_51139 = (state_51150[(2)]);
var state_51150__$1 = state_51150;
if(cljs.core.truth_(inst_51139)){
var statearr_51159_51179 = state_51150__$1;
(statearr_51159_51179[(1)] = (12));

} else {
var statearr_51160_51180 = state_51150__$1;
(statearr_51160_51180[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51151 === (9))){
var state_51150__$1 = state_51150;
var statearr_51161_51181 = state_51150__$1;
(statearr_51161_51181[(2)] = null);

(statearr_51161_51181[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51151 === (5))){
var state_51150__$1 = state_51150;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51162_51182 = state_51150__$1;
(statearr_51162_51182[(1)] = (8));

} else {
var statearr_51163_51183 = state_51150__$1;
(statearr_51163_51183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51151 === (14))){
var inst_51144 = (state_51150[(2)]);
var state_51150__$1 = state_51150;
var statearr_51164_51184 = state_51150__$1;
(statearr_51164_51184[(2)] = inst_51144);

(statearr_51164_51184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51151 === (10))){
var inst_51136 = (state_51150[(2)]);
var state_51150__$1 = state_51150;
var statearr_51165_51185 = state_51150__$1;
(statearr_51165_51185[(2)] = inst_51136);

(statearr_51165_51185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51151 === (8))){
var inst_51133 = cljs.core.async.close_BANG_.call(null,to);
var state_51150__$1 = state_51150;
var statearr_51166_51186 = state_51150__$1;
(statearr_51166_51186[(2)] = inst_51133);

(statearr_51166_51186[(1)] = (10));


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
});})(c__51025__auto___51172))
;
return ((function (switch__50721__auto__,c__51025__auto___51172){
return (function() {
var cljs$core$async$state_machine__50722__auto__ = null;
var cljs$core$async$state_machine__50722__auto____0 = (function (){
var statearr_51167 = [null,null,null,null,null,null,null,null];
(statearr_51167[(0)] = cljs$core$async$state_machine__50722__auto__);

(statearr_51167[(1)] = (1));

return statearr_51167;
});
var cljs$core$async$state_machine__50722__auto____1 = (function (state_51150){
while(true){
var ret_value__50723__auto__ = (function (){try{while(true){
var result__50724__auto__ = switch__50721__auto__.call(null,state_51150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50724__auto__;
}
break;
}
}catch (e51168){if((e51168 instanceof Object)){
var ex__50725__auto__ = e51168;
var statearr_51169_51187 = state_51150;
(statearr_51169_51187[(5)] = ex__50725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51188 = state_51150;
state_51150 = G__51188;
continue;
} else {
return ret_value__50723__auto__;
}
break;
}
});
cljs$core$async$state_machine__50722__auto__ = function(state_51150){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50722__auto____1.call(this,state_51150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50722__auto____0;
cljs$core$async$state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50722__auto____1;
return cljs$core$async$state_machine__50722__auto__;
})()
;})(switch__50721__auto__,c__51025__auto___51172))
})();
var state__51027__auto__ = (function (){var statearr_51170 = f__51026__auto__.call(null);
(statearr_51170[(6)] = c__51025__auto___51172);

return statearr_51170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51027__auto__);
});})(c__51025__auto___51172))
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
return (function (p__51189){
var vec__51190 = p__51189;
var v = cljs.core.nth.call(null,vec__51190,(0),null);
var p = cljs.core.nth.call(null,vec__51190,(1),null);
var job = vec__51190;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__51025__auto___51361 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51025__auto___51361,res,vec__51190,v,p,job,jobs,results){
return (function (){
var f__51026__auto__ = (function (){var switch__50721__auto__ = ((function (c__51025__auto___51361,res,vec__51190,v,p,job,jobs,results){
return (function (state_51197){
var state_val_51198 = (state_51197[(1)]);
if((state_val_51198 === (1))){
var state_51197__$1 = state_51197;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51197__$1,(2),res,v);
} else {
if((state_val_51198 === (2))){
var inst_51194 = (state_51197[(2)]);
var inst_51195 = cljs.core.async.close_BANG_.call(null,res);
var state_51197__$1 = (function (){var statearr_51199 = state_51197;
(statearr_51199[(7)] = inst_51194);

return statearr_51199;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51197__$1,inst_51195);
} else {
return null;
}
}
});})(c__51025__auto___51361,res,vec__51190,v,p,job,jobs,results))
;
return ((function (switch__50721__auto__,c__51025__auto___51361,res,vec__51190,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50722__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50722__auto____0 = (function (){
var statearr_51200 = [null,null,null,null,null,null,null,null];
(statearr_51200[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50722__auto__);

(statearr_51200[(1)] = (1));

return statearr_51200;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50722__auto____1 = (function (state_51197){
while(true){
var ret_value__50723__auto__ = (function (){try{while(true){
var result__50724__auto__ = switch__50721__auto__.call(null,state_51197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50724__auto__;
}
break;
}
}catch (e51201){if((e51201 instanceof Object)){
var ex__50725__auto__ = e51201;
var statearr_51202_51362 = state_51197;
(statearr_51202_51362[(5)] = ex__50725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51363 = state_51197;
state_51197 = G__51363;
continue;
} else {
return ret_value__50723__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50722__auto__ = function(state_51197){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50722__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50722__auto____1.call(this,state_51197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50722__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50722__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50722__auto__;
})()
;})(switch__50721__auto__,c__51025__auto___51361,res,vec__51190,v,p,job,jobs,results))
})();
var state__51027__auto__ = (function (){var statearr_51203 = f__51026__auto__.call(null);
(statearr_51203[(6)] = c__51025__auto___51361);

return statearr_51203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51027__auto__);
});})(c__51025__auto___51361,res,vec__51190,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__51204){
var vec__51205 = p__51204;
var v = cljs.core.nth.call(null,vec__51205,(0),null);
var p = cljs.core.nth.call(null,vec__51205,(1),null);
var job = vec__51205;
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
var n__4394__auto___51364 = n;
var __51365 = (0);
while(true){
if((__51365 < n__4394__auto___51364)){
var G__51208_51366 = type;
var G__51208_51367__$1 = (((G__51208_51366 instanceof cljs.core.Keyword))?G__51208_51366.fqn:null);
switch (G__51208_51367__$1) {
case "compute":
var c__51025__auto___51369 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__51365,c__51025__auto___51369,G__51208_51366,G__51208_51367__$1,n__4394__auto___51364,jobs,results,process,async){
return (function (){
var f__51026__auto__ = (function (){var switch__50721__auto__ = ((function (__51365,c__51025__auto___51369,G__51208_51366,G__51208_51367__$1,n__4394__auto___51364,jobs,results,process,async){
return (function (state_51221){
var state_val_51222 = (state_51221[(1)]);
if((state_val_51222 === (1))){
var state_51221__$1 = state_51221;
var statearr_51223_51370 = state_51221__$1;
(statearr_51223_51370[(2)] = null);

(statearr_51223_51370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (2))){
var state_51221__$1 = state_51221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51221__$1,(4),jobs);
} else {
if((state_val_51222 === (3))){
var inst_51219 = (state_51221[(2)]);
var state_51221__$1 = state_51221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51221__$1,inst_51219);
} else {
if((state_val_51222 === (4))){
var inst_51211 = (state_51221[(2)]);
var inst_51212 = process.call(null,inst_51211);
var state_51221__$1 = state_51221;
if(cljs.core.truth_(inst_51212)){
var statearr_51224_51371 = state_51221__$1;
(statearr_51224_51371[(1)] = (5));

} else {
var statearr_51225_51372 = state_51221__$1;
(statearr_51225_51372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (5))){
var state_51221__$1 = state_51221;
var statearr_51226_51373 = state_51221__$1;
(statearr_51226_51373[(2)] = null);

(statearr_51226_51373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (6))){
var state_51221__$1 = state_51221;
var statearr_51227_51374 = state_51221__$1;
(statearr_51227_51374[(2)] = null);

(statearr_51227_51374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (7))){
var inst_51217 = (state_51221[(2)]);
var state_51221__$1 = state_51221;
var statearr_51228_51375 = state_51221__$1;
(statearr_51228_51375[(2)] = inst_51217);

(statearr_51228_51375[(1)] = (3));


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
});})(__51365,c__51025__auto___51369,G__51208_51366,G__51208_51367__$1,n__4394__auto___51364,jobs,results,process,async))
;
return ((function (__51365,switch__50721__auto__,c__51025__auto___51369,G__51208_51366,G__51208_51367__$1,n__4394__auto___51364,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50722__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50722__auto____0 = (function (){
var statearr_51229 = [null,null,null,null,null,null,null];
(statearr_51229[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50722__auto__);

(statearr_51229[(1)] = (1));

return statearr_51229;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50722__auto____1 = (function (state_51221){
while(true){
var ret_value__50723__auto__ = (function (){try{while(true){
var result__50724__auto__ = switch__50721__auto__.call(null,state_51221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50724__auto__;
}
break;
}
}catch (e51230){if((e51230 instanceof Object)){
var ex__50725__auto__ = e51230;
var statearr_51231_51376 = state_51221;
(statearr_51231_51376[(5)] = ex__50725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51377 = state_51221;
state_51221 = G__51377;
continue;
} else {
return ret_value__50723__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50722__auto__ = function(state_51221){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50722__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50722__auto____1.call(this,state_51221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50722__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50722__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50722__auto__;
})()
;})(__51365,switch__50721__auto__,c__51025__auto___51369,G__51208_51366,G__51208_51367__$1,n__4394__auto___51364,jobs,results,process,async))
})();
var state__51027__auto__ = (function (){var statearr_51232 = f__51026__auto__.call(null);
(statearr_51232[(6)] = c__51025__auto___51369);

return statearr_51232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51027__auto__);
});})(__51365,c__51025__auto___51369,G__51208_51366,G__51208_51367__$1,n__4394__auto___51364,jobs,results,process,async))
);


break;
case "async":
var c__51025__auto___51378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__51365,c__51025__auto___51378,G__51208_51366,G__51208_51367__$1,n__4394__auto___51364,jobs,results,process,async){
return (function (){
var f__51026__auto__ = (function (){var switch__50721__auto__ = ((function (__51365,c__51025__auto___51378,G__51208_51366,G__51208_51367__$1,n__4394__auto___51364,jobs,results,process,async){
return (function (state_51245){
var state_val_51246 = (state_51245[(1)]);
if((state_val_51246 === (1))){
var state_51245__$1 = state_51245;
var statearr_51247_51379 = state_51245__$1;
(statearr_51247_51379[(2)] = null);

(statearr_51247_51379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51246 === (2))){
var state_51245__$1 = state_51245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51245__$1,(4),jobs);
} else {
if((state_val_51246 === (3))){
var inst_51243 = (state_51245[(2)]);
var state_51245__$1 = state_51245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51245__$1,inst_51243);
} else {
if((state_val_51246 === (4))){
var inst_51235 = (state_51245[(2)]);
var inst_51236 = async.call(null,inst_51235);
var state_51245__$1 = state_51245;
if(cljs.core.truth_(inst_51236)){
var statearr_51248_51380 = state_51245__$1;
(statearr_51248_51380[(1)] = (5));

} else {
var statearr_51249_51381 = state_51245__$1;
(statearr_51249_51381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51246 === (5))){
var state_51245__$1 = state_51245;
var statearr_51250_51382 = state_51245__$1;
(statearr_51250_51382[(2)] = null);

(statearr_51250_51382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51246 === (6))){
var state_51245__$1 = state_51245;
var statearr_51251_51383 = state_51245__$1;
(statearr_51251_51383[(2)] = null);

(statearr_51251_51383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51246 === (7))){
var inst_51241 = (state_51245[(2)]);
var state_51245__$1 = state_51245;
var statearr_51252_51384 = state_51245__$1;
(statearr_51252_51384[(2)] = inst_51241);

(statearr_51252_51384[(1)] = (3));


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
});})(__51365,c__51025__auto___51378,G__51208_51366,G__51208_51367__$1,n__4394__auto___51364,jobs,results,process,async))
;
return ((function (__51365,switch__50721__auto__,c__51025__auto___51378,G__51208_51366,G__51208_51367__$1,n__4394__auto___51364,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50722__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50722__auto____0 = (function (){
var statearr_51253 = [null,null,null,null,null,null,null];
(statearr_51253[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50722__auto__);

(statearr_51253[(1)] = (1));

return statearr_51253;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50722__auto____1 = (function (state_51245){
while(true){
var ret_value__50723__auto__ = (function (){try{while(true){
var result__50724__auto__ = switch__50721__auto__.call(null,state_51245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50724__auto__;
}
break;
}
}catch (e51254){if((e51254 instanceof Object)){
var ex__50725__auto__ = e51254;
var statearr_51255_51385 = state_51245;
(statearr_51255_51385[(5)] = ex__50725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51386 = state_51245;
state_51245 = G__51386;
continue;
} else {
return ret_value__50723__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50722__auto__ = function(state_51245){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50722__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50722__auto____1.call(this,state_51245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50722__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50722__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50722__auto__;
})()
;})(__51365,switch__50721__auto__,c__51025__auto___51378,G__51208_51366,G__51208_51367__$1,n__4394__auto___51364,jobs,results,process,async))
})();
var state__51027__auto__ = (function (){var statearr_51256 = f__51026__auto__.call(null);
(statearr_51256[(6)] = c__51025__auto___51378);

return statearr_51256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51027__auto__);
});})(__51365,c__51025__auto___51378,G__51208_51366,G__51208_51367__$1,n__4394__auto___51364,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51208_51367__$1)].join('')));

}

var G__51387 = (__51365 + (1));
__51365 = G__51387;
continue;
} else {
}
break;
}

var c__51025__auto___51388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51025__auto___51388,jobs,results,process,async){
return (function (){
var f__51026__auto__ = (function (){var switch__50721__auto__ = ((function (c__51025__auto___51388,jobs,results,process,async){
return (function (state_51278){
var state_val_51279 = (state_51278[(1)]);
if((state_val_51279 === (1))){
var state_51278__$1 = state_51278;
var statearr_51280_51389 = state_51278__$1;
(statearr_51280_51389[(2)] = null);

(statearr_51280_51389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51279 === (2))){
var state_51278__$1 = state_51278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51278__$1,(4),from);
} else {
if((state_val_51279 === (3))){
var inst_51276 = (state_51278[(2)]);
var state_51278__$1 = state_51278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51278__$1,inst_51276);
} else {
if((state_val_51279 === (4))){
var inst_51259 = (state_51278[(7)]);
var inst_51259__$1 = (state_51278[(2)]);
var inst_51260 = (inst_51259__$1 == null);
var state_51278__$1 = (function (){var statearr_51281 = state_51278;
(statearr_51281[(7)] = inst_51259__$1);

return statearr_51281;
})();
if(cljs.core.truth_(inst_51260)){
var statearr_51282_51390 = state_51278__$1;
(statearr_51282_51390[(1)] = (5));

} else {
var statearr_51283_51391 = state_51278__$1;
(statearr_51283_51391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51279 === (5))){
var inst_51262 = cljs.core.async.close_BANG_.call(null,jobs);
var state_51278__$1 = state_51278;
var statearr_51284_51392 = state_51278__$1;
(statearr_51284_51392[(2)] = inst_51262);

(statearr_51284_51392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51279 === (6))){
var inst_51259 = (state_51278[(7)]);
var inst_51264 = (state_51278[(8)]);
var inst_51264__$1 = cljs.core.async.chan.call(null,(1));
var inst_51265 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51266 = [inst_51259,inst_51264__$1];
var inst_51267 = (new cljs.core.PersistentVector(null,2,(5),inst_51265,inst_51266,null));
var state_51278__$1 = (function (){var statearr_51285 = state_51278;
(statearr_51285[(8)] = inst_51264__$1);

return statearr_51285;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51278__$1,(8),jobs,inst_51267);
} else {
if((state_val_51279 === (7))){
var inst_51274 = (state_51278[(2)]);
var state_51278__$1 = state_51278;
var statearr_51286_51393 = state_51278__$1;
(statearr_51286_51393[(2)] = inst_51274);

(statearr_51286_51393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51279 === (8))){
var inst_51264 = (state_51278[(8)]);
var inst_51269 = (state_51278[(2)]);
var state_51278__$1 = (function (){var statearr_51287 = state_51278;
(statearr_51287[(9)] = inst_51269);

return statearr_51287;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51278__$1,(9),results,inst_51264);
} else {
if((state_val_51279 === (9))){
var inst_51271 = (state_51278[(2)]);
var state_51278__$1 = (function (){var statearr_51288 = state_51278;
(statearr_51288[(10)] = inst_51271);

return statearr_51288;
})();
var statearr_51289_51394 = state_51278__$1;
(statearr_51289_51394[(2)] = null);

(statearr_51289_51394[(1)] = (2));


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
});})(c__51025__auto___51388,jobs,results,process,async))
;
return ((function (switch__50721__auto__,c__51025__auto___51388,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50722__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50722__auto____0 = (function (){
var statearr_51290 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51290[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50722__auto__);

(statearr_51290[(1)] = (1));

return statearr_51290;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50722__auto____1 = (function (state_51278){
while(true){
var ret_value__50723__auto__ = (function (){try{while(true){
var result__50724__auto__ = switch__50721__auto__.call(null,state_51278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50724__auto__;
}
break;
}
}catch (e51291){if((e51291 instanceof Object)){
var ex__50725__auto__ = e51291;
var statearr_51292_51395 = state_51278;
(statearr_51292_51395[(5)] = ex__50725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51396 = state_51278;
state_51278 = G__51396;
continue;
} else {
return ret_value__50723__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50722__auto__ = function(state_51278){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50722__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50722__auto____1.call(this,state_51278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50722__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50722__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50722__auto__;
})()
;})(switch__50721__auto__,c__51025__auto___51388,jobs,results,process,async))
})();
var state__51027__auto__ = (function (){var statearr_51293 = f__51026__auto__.call(null);
(statearr_51293[(6)] = c__51025__auto___51388);

return statearr_51293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51027__auto__);
});})(c__51025__auto___51388,jobs,results,process,async))
);


var c__51025__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51025__auto__,jobs,results,process,async){
return (function (){
var f__51026__auto__ = (function (){var switch__50721__auto__ = ((function (c__51025__auto__,jobs,results,process,async){
return (function (state_51331){
var state_val_51332 = (state_51331[(1)]);
if((state_val_51332 === (7))){
var inst_51327 = (state_51331[(2)]);
var state_51331__$1 = state_51331;
var statearr_51333_51397 = state_51331__$1;
(statearr_51333_51397[(2)] = inst_51327);

(statearr_51333_51397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51332 === (20))){
var state_51331__$1 = state_51331;
var statearr_51334_51398 = state_51331__$1;
(statearr_51334_51398[(2)] = null);

(statearr_51334_51398[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51332 === (1))){
var state_51331__$1 = state_51331;
var statearr_51335_51399 = state_51331__$1;
(statearr_51335_51399[(2)] = null);

(statearr_51335_51399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51332 === (4))){
var inst_51296 = (state_51331[(7)]);
var inst_51296__$1 = (state_51331[(2)]);
var inst_51297 = (inst_51296__$1 == null);
var state_51331__$1 = (function (){var statearr_51336 = state_51331;
(statearr_51336[(7)] = inst_51296__$1);

return statearr_51336;
})();
if(cljs.core.truth_(inst_51297)){
var statearr_51337_51400 = state_51331__$1;
(statearr_51337_51400[(1)] = (5));

} else {
var statearr_51338_51401 = state_51331__$1;
(statearr_51338_51401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51332 === (15))){
var inst_51309 = (state_51331[(8)]);
var state_51331__$1 = state_51331;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51331__$1,(18),to,inst_51309);
} else {
if((state_val_51332 === (21))){
var inst_51322 = (state_51331[(2)]);
var state_51331__$1 = state_51331;
var statearr_51339_51402 = state_51331__$1;
(statearr_51339_51402[(2)] = inst_51322);

(statearr_51339_51402[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51332 === (13))){
var inst_51324 = (state_51331[(2)]);
var state_51331__$1 = (function (){var statearr_51340 = state_51331;
(statearr_51340[(9)] = inst_51324);

return statearr_51340;
})();
var statearr_51341_51403 = state_51331__$1;
(statearr_51341_51403[(2)] = null);

(statearr_51341_51403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51332 === (6))){
var inst_51296 = (state_51331[(7)]);
var state_51331__$1 = state_51331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51331__$1,(11),inst_51296);
} else {
if((state_val_51332 === (17))){
var inst_51317 = (state_51331[(2)]);
var state_51331__$1 = state_51331;
if(cljs.core.truth_(inst_51317)){
var statearr_51342_51404 = state_51331__$1;
(statearr_51342_51404[(1)] = (19));

} else {
var statearr_51343_51405 = state_51331__$1;
(statearr_51343_51405[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51332 === (3))){
var inst_51329 = (state_51331[(2)]);
var state_51331__$1 = state_51331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51331__$1,inst_51329);
} else {
if((state_val_51332 === (12))){
var inst_51306 = (state_51331[(10)]);
var state_51331__$1 = state_51331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51331__$1,(14),inst_51306);
} else {
if((state_val_51332 === (2))){
var state_51331__$1 = state_51331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51331__$1,(4),results);
} else {
if((state_val_51332 === (19))){
var state_51331__$1 = state_51331;
var statearr_51344_51406 = state_51331__$1;
(statearr_51344_51406[(2)] = null);

(statearr_51344_51406[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51332 === (11))){
var inst_51306 = (state_51331[(2)]);
var state_51331__$1 = (function (){var statearr_51345 = state_51331;
(statearr_51345[(10)] = inst_51306);

return statearr_51345;
})();
var statearr_51346_51407 = state_51331__$1;
(statearr_51346_51407[(2)] = null);

(statearr_51346_51407[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51332 === (9))){
var state_51331__$1 = state_51331;
var statearr_51347_51408 = state_51331__$1;
(statearr_51347_51408[(2)] = null);

(statearr_51347_51408[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51332 === (5))){
var state_51331__$1 = state_51331;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51348_51409 = state_51331__$1;
(statearr_51348_51409[(1)] = (8));

} else {
var statearr_51349_51410 = state_51331__$1;
(statearr_51349_51410[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51332 === (14))){
var inst_51311 = (state_51331[(11)]);
var inst_51309 = (state_51331[(8)]);
var inst_51309__$1 = (state_51331[(2)]);
var inst_51310 = (inst_51309__$1 == null);
var inst_51311__$1 = cljs.core.not.call(null,inst_51310);
var state_51331__$1 = (function (){var statearr_51350 = state_51331;
(statearr_51350[(11)] = inst_51311__$1);

(statearr_51350[(8)] = inst_51309__$1);

return statearr_51350;
})();
if(inst_51311__$1){
var statearr_51351_51411 = state_51331__$1;
(statearr_51351_51411[(1)] = (15));

} else {
var statearr_51352_51412 = state_51331__$1;
(statearr_51352_51412[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51332 === (16))){
var inst_51311 = (state_51331[(11)]);
var state_51331__$1 = state_51331;
var statearr_51353_51413 = state_51331__$1;
(statearr_51353_51413[(2)] = inst_51311);

(statearr_51353_51413[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51332 === (10))){
var inst_51303 = (state_51331[(2)]);
var state_51331__$1 = state_51331;
var statearr_51354_51414 = state_51331__$1;
(statearr_51354_51414[(2)] = inst_51303);

(statearr_51354_51414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51332 === (18))){
var inst_51314 = (state_51331[(2)]);
var state_51331__$1 = state_51331;
var statearr_51355_51415 = state_51331__$1;
(statearr_51355_51415[(2)] = inst_51314);

(statearr_51355_51415[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51332 === (8))){
var inst_51300 = cljs.core.async.close_BANG_.call(null,to);
var state_51331__$1 = state_51331;
var statearr_51356_51416 = state_51331__$1;
(statearr_51356_51416[(2)] = inst_51300);

(statearr_51356_51416[(1)] = (10));


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
});})(c__51025__auto__,jobs,results,process,async))
;
return ((function (switch__50721__auto__,c__51025__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50722__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50722__auto____0 = (function (){
var statearr_51357 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51357[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50722__auto__);

(statearr_51357[(1)] = (1));

return statearr_51357;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50722__auto____1 = (function (state_51331){
while(true){
var ret_value__50723__auto__ = (function (){try{while(true){
var result__50724__auto__ = switch__50721__auto__.call(null,state_51331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50724__auto__;
}
break;
}
}catch (e51358){if((e51358 instanceof Object)){
var ex__50725__auto__ = e51358;
var statearr_51359_51417 = state_51331;
(statearr_51359_51417[(5)] = ex__50725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51418 = state_51331;
state_51331 = G__51418;
continue;
} else {
return ret_value__50723__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50722__auto__ = function(state_51331){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50722__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50722__auto____1.call(this,state_51331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50722__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50722__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50722__auto__;
})()
;})(switch__50721__auto__,c__51025__auto__,jobs,results,process,async))
})();
var state__51027__auto__ = (function (){var statearr_51360 = f__51026__auto__.call(null);
(statearr_51360[(6)] = c__51025__auto__);

return statearr_51360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51027__auto__);
});})(c__51025__auto__,jobs,results,process,async))
);

return c__51025__auto__;
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
var G__51420 = arguments.length;
switch (G__51420) {
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
var G__51423 = arguments.length;
switch (G__51423) {
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
var G__51426 = arguments.length;
switch (G__51426) {
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
var c__51025__auto___51475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51025__auto___51475,tc,fc){
return (function (){
var f__51026__auto__ = (function (){var switch__50721__auto__ = ((function (c__51025__auto___51475,tc,fc){
return (function (state_51452){
var state_val_51453 = (state_51452[(1)]);
if((state_val_51453 === (7))){
var inst_51448 = (state_51452[(2)]);
var state_51452__$1 = state_51452;
var statearr_51454_51476 = state_51452__$1;
(statearr_51454_51476[(2)] = inst_51448);

(statearr_51454_51476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51453 === (1))){
var state_51452__$1 = state_51452;
var statearr_51455_51477 = state_51452__$1;
(statearr_51455_51477[(2)] = null);

(statearr_51455_51477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51453 === (4))){
var inst_51429 = (state_51452[(7)]);
var inst_51429__$1 = (state_51452[(2)]);
var inst_51430 = (inst_51429__$1 == null);
var state_51452__$1 = (function (){var statearr_51456 = state_51452;
(statearr_51456[(7)] = inst_51429__$1);

return statearr_51456;
})();
if(cljs.core.truth_(inst_51430)){
var statearr_51457_51478 = state_51452__$1;
(statearr_51457_51478[(1)] = (5));

} else {
var statearr_51458_51479 = state_51452__$1;
(statearr_51458_51479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51453 === (13))){
var state_51452__$1 = state_51452;
var statearr_51459_51480 = state_51452__$1;
(statearr_51459_51480[(2)] = null);

(statearr_51459_51480[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51453 === (6))){
var inst_51429 = (state_51452[(7)]);
var inst_51435 = p.call(null,inst_51429);
var state_51452__$1 = state_51452;
if(cljs.core.truth_(inst_51435)){
var statearr_51460_51481 = state_51452__$1;
(statearr_51460_51481[(1)] = (9));

} else {
var statearr_51461_51482 = state_51452__$1;
(statearr_51461_51482[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51453 === (3))){
var inst_51450 = (state_51452[(2)]);
var state_51452__$1 = state_51452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51452__$1,inst_51450);
} else {
if((state_val_51453 === (12))){
var state_51452__$1 = state_51452;
var statearr_51462_51483 = state_51452__$1;
(statearr_51462_51483[(2)] = null);

(statearr_51462_51483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51453 === (2))){
var state_51452__$1 = state_51452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51452__$1,(4),ch);
} else {
if((state_val_51453 === (11))){
var inst_51429 = (state_51452[(7)]);
var inst_51439 = (state_51452[(2)]);
var state_51452__$1 = state_51452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51452__$1,(8),inst_51439,inst_51429);
} else {
if((state_val_51453 === (9))){
var state_51452__$1 = state_51452;
var statearr_51463_51484 = state_51452__$1;
(statearr_51463_51484[(2)] = tc);

(statearr_51463_51484[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51453 === (5))){
var inst_51432 = cljs.core.async.close_BANG_.call(null,tc);
var inst_51433 = cljs.core.async.close_BANG_.call(null,fc);
var state_51452__$1 = (function (){var statearr_51464 = state_51452;
(statearr_51464[(8)] = inst_51432);

return statearr_51464;
})();
var statearr_51465_51485 = state_51452__$1;
(statearr_51465_51485[(2)] = inst_51433);

(statearr_51465_51485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51453 === (14))){
var inst_51446 = (state_51452[(2)]);
var state_51452__$1 = state_51452;
var statearr_51466_51486 = state_51452__$1;
(statearr_51466_51486[(2)] = inst_51446);

(statearr_51466_51486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51453 === (10))){
var state_51452__$1 = state_51452;
var statearr_51467_51487 = state_51452__$1;
(statearr_51467_51487[(2)] = fc);

(statearr_51467_51487[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51453 === (8))){
var inst_51441 = (state_51452[(2)]);
var state_51452__$1 = state_51452;
if(cljs.core.truth_(inst_51441)){
var statearr_51468_51488 = state_51452__$1;
(statearr_51468_51488[(1)] = (12));

} else {
var statearr_51469_51489 = state_51452__$1;
(statearr_51469_51489[(1)] = (13));

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
});})(c__51025__auto___51475,tc,fc))
;
return ((function (switch__50721__auto__,c__51025__auto___51475,tc,fc){
return (function() {
var cljs$core$async$state_machine__50722__auto__ = null;
var cljs$core$async$state_machine__50722__auto____0 = (function (){
var statearr_51470 = [null,null,null,null,null,null,null,null,null];
(statearr_51470[(0)] = cljs$core$async$state_machine__50722__auto__);

(statearr_51470[(1)] = (1));

return statearr_51470;
});
var cljs$core$async$state_machine__50722__auto____1 = (function (state_51452){
while(true){
var ret_value__50723__auto__ = (function (){try{while(true){
var result__50724__auto__ = switch__50721__auto__.call(null,state_51452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50724__auto__;
}
break;
}
}catch (e51471){if((e51471 instanceof Object)){
var ex__50725__auto__ = e51471;
var statearr_51472_51490 = state_51452;
(statearr_51472_51490[(5)] = ex__50725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51491 = state_51452;
state_51452 = G__51491;
continue;
} else {
return ret_value__50723__auto__;
}
break;
}
});
cljs$core$async$state_machine__50722__auto__ = function(state_51452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50722__auto____1.call(this,state_51452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50722__auto____0;
cljs$core$async$state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50722__auto____1;
return cljs$core$async$state_machine__50722__auto__;
})()
;})(switch__50721__auto__,c__51025__auto___51475,tc,fc))
})();
var state__51027__auto__ = (function (){var statearr_51473 = f__51026__auto__.call(null);
(statearr_51473[(6)] = c__51025__auto___51475);

return statearr_51473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51027__auto__);
});})(c__51025__auto___51475,tc,fc))
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
var c__51025__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51025__auto__){
return (function (){
var f__51026__auto__ = (function (){var switch__50721__auto__ = ((function (c__51025__auto__){
return (function (state_51512){
var state_val_51513 = (state_51512[(1)]);
if((state_val_51513 === (7))){
var inst_51508 = (state_51512[(2)]);
var state_51512__$1 = state_51512;
var statearr_51514_51532 = state_51512__$1;
(statearr_51514_51532[(2)] = inst_51508);

(statearr_51514_51532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51513 === (1))){
var inst_51492 = init;
var state_51512__$1 = (function (){var statearr_51515 = state_51512;
(statearr_51515[(7)] = inst_51492);

return statearr_51515;
})();
var statearr_51516_51533 = state_51512__$1;
(statearr_51516_51533[(2)] = null);

(statearr_51516_51533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51513 === (4))){
var inst_51495 = (state_51512[(8)]);
var inst_51495__$1 = (state_51512[(2)]);
var inst_51496 = (inst_51495__$1 == null);
var state_51512__$1 = (function (){var statearr_51517 = state_51512;
(statearr_51517[(8)] = inst_51495__$1);

return statearr_51517;
})();
if(cljs.core.truth_(inst_51496)){
var statearr_51518_51534 = state_51512__$1;
(statearr_51518_51534[(1)] = (5));

} else {
var statearr_51519_51535 = state_51512__$1;
(statearr_51519_51535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51513 === (6))){
var inst_51499 = (state_51512[(9)]);
var inst_51492 = (state_51512[(7)]);
var inst_51495 = (state_51512[(8)]);
var inst_51499__$1 = f.call(null,inst_51492,inst_51495);
var inst_51500 = cljs.core.reduced_QMARK_.call(null,inst_51499__$1);
var state_51512__$1 = (function (){var statearr_51520 = state_51512;
(statearr_51520[(9)] = inst_51499__$1);

return statearr_51520;
})();
if(inst_51500){
var statearr_51521_51536 = state_51512__$1;
(statearr_51521_51536[(1)] = (8));

} else {
var statearr_51522_51537 = state_51512__$1;
(statearr_51522_51537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51513 === (3))){
var inst_51510 = (state_51512[(2)]);
var state_51512__$1 = state_51512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51512__$1,inst_51510);
} else {
if((state_val_51513 === (2))){
var state_51512__$1 = state_51512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51512__$1,(4),ch);
} else {
if((state_val_51513 === (9))){
var inst_51499 = (state_51512[(9)]);
var inst_51492 = inst_51499;
var state_51512__$1 = (function (){var statearr_51523 = state_51512;
(statearr_51523[(7)] = inst_51492);

return statearr_51523;
})();
var statearr_51524_51538 = state_51512__$1;
(statearr_51524_51538[(2)] = null);

(statearr_51524_51538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51513 === (5))){
var inst_51492 = (state_51512[(7)]);
var state_51512__$1 = state_51512;
var statearr_51525_51539 = state_51512__$1;
(statearr_51525_51539[(2)] = inst_51492);

(statearr_51525_51539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51513 === (10))){
var inst_51506 = (state_51512[(2)]);
var state_51512__$1 = state_51512;
var statearr_51526_51540 = state_51512__$1;
(statearr_51526_51540[(2)] = inst_51506);

(statearr_51526_51540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51513 === (8))){
var inst_51499 = (state_51512[(9)]);
var inst_51502 = cljs.core.deref.call(null,inst_51499);
var state_51512__$1 = state_51512;
var statearr_51527_51541 = state_51512__$1;
(statearr_51527_51541[(2)] = inst_51502);

(statearr_51527_51541[(1)] = (10));


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
});})(c__51025__auto__))
;
return ((function (switch__50721__auto__,c__51025__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__50722__auto__ = null;
var cljs$core$async$reduce_$_state_machine__50722__auto____0 = (function (){
var statearr_51528 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51528[(0)] = cljs$core$async$reduce_$_state_machine__50722__auto__);

(statearr_51528[(1)] = (1));

return statearr_51528;
});
var cljs$core$async$reduce_$_state_machine__50722__auto____1 = (function (state_51512){
while(true){
var ret_value__50723__auto__ = (function (){try{while(true){
var result__50724__auto__ = switch__50721__auto__.call(null,state_51512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50724__auto__;
}
break;
}
}catch (e51529){if((e51529 instanceof Object)){
var ex__50725__auto__ = e51529;
var statearr_51530_51542 = state_51512;
(statearr_51530_51542[(5)] = ex__50725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51543 = state_51512;
state_51512 = G__51543;
continue;
} else {
return ret_value__50723__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__50722__auto__ = function(state_51512){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__50722__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__50722__auto____1.call(this,state_51512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__50722__auto____0;
cljs$core$async$reduce_$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__50722__auto____1;
return cljs$core$async$reduce_$_state_machine__50722__auto__;
})()
;})(switch__50721__auto__,c__51025__auto__))
})();
var state__51027__auto__ = (function (){var statearr_51531 = f__51026__auto__.call(null);
(statearr_51531[(6)] = c__51025__auto__);

return statearr_51531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51027__auto__);
});})(c__51025__auto__))
);

return c__51025__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__51025__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51025__auto__,f__$1){
return (function (){
var f__51026__auto__ = (function (){var switch__50721__auto__ = ((function (c__51025__auto__,f__$1){
return (function (state_51549){
var state_val_51550 = (state_51549[(1)]);
if((state_val_51550 === (1))){
var inst_51544 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_51549__$1 = state_51549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51549__$1,(2),inst_51544);
} else {
if((state_val_51550 === (2))){
var inst_51546 = (state_51549[(2)]);
var inst_51547 = f__$1.call(null,inst_51546);
var state_51549__$1 = state_51549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51549__$1,inst_51547);
} else {
return null;
}
}
});})(c__51025__auto__,f__$1))
;
return ((function (switch__50721__auto__,c__51025__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__50722__auto__ = null;
var cljs$core$async$transduce_$_state_machine__50722__auto____0 = (function (){
var statearr_51551 = [null,null,null,null,null,null,null];
(statearr_51551[(0)] = cljs$core$async$transduce_$_state_machine__50722__auto__);

(statearr_51551[(1)] = (1));

return statearr_51551;
});
var cljs$core$async$transduce_$_state_machine__50722__auto____1 = (function (state_51549){
while(true){
var ret_value__50723__auto__ = (function (){try{while(true){
var result__50724__auto__ = switch__50721__auto__.call(null,state_51549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50724__auto__;
}
break;
}
}catch (e51552){if((e51552 instanceof Object)){
var ex__50725__auto__ = e51552;
var statearr_51553_51555 = state_51549;
(statearr_51553_51555[(5)] = ex__50725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51556 = state_51549;
state_51549 = G__51556;
continue;
} else {
return ret_value__50723__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__50722__auto__ = function(state_51549){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__50722__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__50722__auto____1.call(this,state_51549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__50722__auto____0;
cljs$core$async$transduce_$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__50722__auto____1;
return cljs$core$async$transduce_$_state_machine__50722__auto__;
})()
;})(switch__50721__auto__,c__51025__auto__,f__$1))
})();
var state__51027__auto__ = (function (){var statearr_51554 = f__51026__auto__.call(null);
(statearr_51554[(6)] = c__51025__auto__);

return statearr_51554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51027__auto__);
});})(c__51025__auto__,f__$1))
);

return c__51025__auto__;
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
var G__51558 = arguments.length;
switch (G__51558) {
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
var c__51025__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51025__auto__){
return (function (){
var f__51026__auto__ = (function (){var switch__50721__auto__ = ((function (c__51025__auto__){
return (function (state_51583){
var state_val_51584 = (state_51583[(1)]);
if((state_val_51584 === (7))){
var inst_51565 = (state_51583[(2)]);
var state_51583__$1 = state_51583;
var statearr_51585_51606 = state_51583__$1;
(statearr_51585_51606[(2)] = inst_51565);

(statearr_51585_51606[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51584 === (1))){
var inst_51559 = cljs.core.seq.call(null,coll);
var inst_51560 = inst_51559;
var state_51583__$1 = (function (){var statearr_51586 = state_51583;
(statearr_51586[(7)] = inst_51560);

return statearr_51586;
})();
var statearr_51587_51607 = state_51583__$1;
(statearr_51587_51607[(2)] = null);

(statearr_51587_51607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51584 === (4))){
var inst_51560 = (state_51583[(7)]);
var inst_51563 = cljs.core.first.call(null,inst_51560);
var state_51583__$1 = state_51583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51583__$1,(7),ch,inst_51563);
} else {
if((state_val_51584 === (13))){
var inst_51577 = (state_51583[(2)]);
var state_51583__$1 = state_51583;
var statearr_51588_51608 = state_51583__$1;
(statearr_51588_51608[(2)] = inst_51577);

(statearr_51588_51608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51584 === (6))){
var inst_51568 = (state_51583[(2)]);
var state_51583__$1 = state_51583;
if(cljs.core.truth_(inst_51568)){
var statearr_51589_51609 = state_51583__$1;
(statearr_51589_51609[(1)] = (8));

} else {
var statearr_51590_51610 = state_51583__$1;
(statearr_51590_51610[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51584 === (3))){
var inst_51581 = (state_51583[(2)]);
var state_51583__$1 = state_51583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51583__$1,inst_51581);
} else {
if((state_val_51584 === (12))){
var state_51583__$1 = state_51583;
var statearr_51591_51611 = state_51583__$1;
(statearr_51591_51611[(2)] = null);

(statearr_51591_51611[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51584 === (2))){
var inst_51560 = (state_51583[(7)]);
var state_51583__$1 = state_51583;
if(cljs.core.truth_(inst_51560)){
var statearr_51592_51612 = state_51583__$1;
(statearr_51592_51612[(1)] = (4));

} else {
var statearr_51593_51613 = state_51583__$1;
(statearr_51593_51613[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51584 === (11))){
var inst_51574 = cljs.core.async.close_BANG_.call(null,ch);
var state_51583__$1 = state_51583;
var statearr_51594_51614 = state_51583__$1;
(statearr_51594_51614[(2)] = inst_51574);

(statearr_51594_51614[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51584 === (9))){
var state_51583__$1 = state_51583;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51595_51615 = state_51583__$1;
(statearr_51595_51615[(1)] = (11));

} else {
var statearr_51596_51616 = state_51583__$1;
(statearr_51596_51616[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51584 === (5))){
var inst_51560 = (state_51583[(7)]);
var state_51583__$1 = state_51583;
var statearr_51597_51617 = state_51583__$1;
(statearr_51597_51617[(2)] = inst_51560);

(statearr_51597_51617[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51584 === (10))){
var inst_51579 = (state_51583[(2)]);
var state_51583__$1 = state_51583;
var statearr_51598_51618 = state_51583__$1;
(statearr_51598_51618[(2)] = inst_51579);

(statearr_51598_51618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51584 === (8))){
var inst_51560 = (state_51583[(7)]);
var inst_51570 = cljs.core.next.call(null,inst_51560);
var inst_51560__$1 = inst_51570;
var state_51583__$1 = (function (){var statearr_51599 = state_51583;
(statearr_51599[(7)] = inst_51560__$1);

return statearr_51599;
})();
var statearr_51600_51619 = state_51583__$1;
(statearr_51600_51619[(2)] = null);

(statearr_51600_51619[(1)] = (2));


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
});})(c__51025__auto__))
;
return ((function (switch__50721__auto__,c__51025__auto__){
return (function() {
var cljs$core$async$state_machine__50722__auto__ = null;
var cljs$core$async$state_machine__50722__auto____0 = (function (){
var statearr_51601 = [null,null,null,null,null,null,null,null];
(statearr_51601[(0)] = cljs$core$async$state_machine__50722__auto__);

(statearr_51601[(1)] = (1));

return statearr_51601;
});
var cljs$core$async$state_machine__50722__auto____1 = (function (state_51583){
while(true){
var ret_value__50723__auto__ = (function (){try{while(true){
var result__50724__auto__ = switch__50721__auto__.call(null,state_51583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50724__auto__;
}
break;
}
}catch (e51602){if((e51602 instanceof Object)){
var ex__50725__auto__ = e51602;
var statearr_51603_51620 = state_51583;
(statearr_51603_51620[(5)] = ex__50725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51621 = state_51583;
state_51583 = G__51621;
continue;
} else {
return ret_value__50723__auto__;
}
break;
}
});
cljs$core$async$state_machine__50722__auto__ = function(state_51583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50722__auto____1.call(this,state_51583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50722__auto____0;
cljs$core$async$state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50722__auto____1;
return cljs$core$async$state_machine__50722__auto__;
})()
;})(switch__50721__auto__,c__51025__auto__))
})();
var state__51027__auto__ = (function (){var statearr_51604 = f__51026__auto__.call(null);
(statearr_51604[(6)] = c__51025__auto__);

return statearr_51604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51027__auto__);
});})(c__51025__auto__))
);

return c__51025__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51622 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51622 = (function (ch,cs,meta51623){
this.ch = ch;
this.cs = cs;
this.meta51623 = meta51623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_51624,meta51623__$1){
var self__ = this;
var _51624__$1 = this;
return (new cljs.core.async.t_cljs$core$async51622(self__.ch,self__.cs,meta51623__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async51622.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_51624){
var self__ = this;
var _51624__$1 = this;
return self__.meta51623;
});})(cs))
;

cljs.core.async.t_cljs$core$async51622.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51622.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async51622.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51622.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async51622.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async51622.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async51622.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta51623","meta51623",1684260389,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async51622.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51622.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51622";

cljs.core.async.t_cljs$core$async51622.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async51622");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51622.
 */
cljs.core.async.__GT_t_cljs$core$async51622 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async51622(ch__$1,cs__$1,meta51623){
return (new cljs.core.async.t_cljs$core$async51622(ch__$1,cs__$1,meta51623));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async51622(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__51025__auto___51844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51025__auto___51844,cs,m,dchan,dctr,done){
return (function (){
var f__51026__auto__ = (function (){var switch__50721__auto__ = ((function (c__51025__auto___51844,cs,m,dchan,dctr,done){
return (function (state_51759){
var state_val_51760 = (state_51759[(1)]);
if((state_val_51760 === (7))){
var inst_51755 = (state_51759[(2)]);
var state_51759__$1 = state_51759;
var statearr_51761_51845 = state_51759__$1;
(statearr_51761_51845[(2)] = inst_51755);

(statearr_51761_51845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (20))){
var inst_51658 = (state_51759[(7)]);
var inst_51670 = cljs.core.first.call(null,inst_51658);
var inst_51671 = cljs.core.nth.call(null,inst_51670,(0),null);
var inst_51672 = cljs.core.nth.call(null,inst_51670,(1),null);
var state_51759__$1 = (function (){var statearr_51762 = state_51759;
(statearr_51762[(8)] = inst_51671);

return statearr_51762;
})();
if(cljs.core.truth_(inst_51672)){
var statearr_51763_51846 = state_51759__$1;
(statearr_51763_51846[(1)] = (22));

} else {
var statearr_51764_51847 = state_51759__$1;
(statearr_51764_51847[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (27))){
var inst_51627 = (state_51759[(9)]);
var inst_51702 = (state_51759[(10)]);
var inst_51700 = (state_51759[(11)]);
var inst_51707 = (state_51759[(12)]);
var inst_51707__$1 = cljs.core._nth.call(null,inst_51700,inst_51702);
var inst_51708 = cljs.core.async.put_BANG_.call(null,inst_51707__$1,inst_51627,done);
var state_51759__$1 = (function (){var statearr_51765 = state_51759;
(statearr_51765[(12)] = inst_51707__$1);

return statearr_51765;
})();
if(cljs.core.truth_(inst_51708)){
var statearr_51766_51848 = state_51759__$1;
(statearr_51766_51848[(1)] = (30));

} else {
var statearr_51767_51849 = state_51759__$1;
(statearr_51767_51849[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (1))){
var state_51759__$1 = state_51759;
var statearr_51768_51850 = state_51759__$1;
(statearr_51768_51850[(2)] = null);

(statearr_51768_51850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (24))){
var inst_51658 = (state_51759[(7)]);
var inst_51677 = (state_51759[(2)]);
var inst_51678 = cljs.core.next.call(null,inst_51658);
var inst_51636 = inst_51678;
var inst_51637 = null;
var inst_51638 = (0);
var inst_51639 = (0);
var state_51759__$1 = (function (){var statearr_51769 = state_51759;
(statearr_51769[(13)] = inst_51637);

(statearr_51769[(14)] = inst_51639);

(statearr_51769[(15)] = inst_51636);

(statearr_51769[(16)] = inst_51677);

(statearr_51769[(17)] = inst_51638);

return statearr_51769;
})();
var statearr_51770_51851 = state_51759__$1;
(statearr_51770_51851[(2)] = null);

(statearr_51770_51851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (39))){
var state_51759__$1 = state_51759;
var statearr_51774_51852 = state_51759__$1;
(statearr_51774_51852[(2)] = null);

(statearr_51774_51852[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (4))){
var inst_51627 = (state_51759[(9)]);
var inst_51627__$1 = (state_51759[(2)]);
var inst_51628 = (inst_51627__$1 == null);
var state_51759__$1 = (function (){var statearr_51775 = state_51759;
(statearr_51775[(9)] = inst_51627__$1);

return statearr_51775;
})();
if(cljs.core.truth_(inst_51628)){
var statearr_51776_51853 = state_51759__$1;
(statearr_51776_51853[(1)] = (5));

} else {
var statearr_51777_51854 = state_51759__$1;
(statearr_51777_51854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (15))){
var inst_51637 = (state_51759[(13)]);
var inst_51639 = (state_51759[(14)]);
var inst_51636 = (state_51759[(15)]);
var inst_51638 = (state_51759[(17)]);
var inst_51654 = (state_51759[(2)]);
var inst_51655 = (inst_51639 + (1));
var tmp51771 = inst_51637;
var tmp51772 = inst_51636;
var tmp51773 = inst_51638;
var inst_51636__$1 = tmp51772;
var inst_51637__$1 = tmp51771;
var inst_51638__$1 = tmp51773;
var inst_51639__$1 = inst_51655;
var state_51759__$1 = (function (){var statearr_51778 = state_51759;
(statearr_51778[(13)] = inst_51637__$1);

(statearr_51778[(14)] = inst_51639__$1);

(statearr_51778[(15)] = inst_51636__$1);

(statearr_51778[(18)] = inst_51654);

(statearr_51778[(17)] = inst_51638__$1);

return statearr_51778;
})();
var statearr_51779_51855 = state_51759__$1;
(statearr_51779_51855[(2)] = null);

(statearr_51779_51855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (21))){
var inst_51681 = (state_51759[(2)]);
var state_51759__$1 = state_51759;
var statearr_51783_51856 = state_51759__$1;
(statearr_51783_51856[(2)] = inst_51681);

(statearr_51783_51856[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (31))){
var inst_51707 = (state_51759[(12)]);
var inst_51711 = done.call(null,null);
var inst_51712 = cljs.core.async.untap_STAR_.call(null,m,inst_51707);
var state_51759__$1 = (function (){var statearr_51784 = state_51759;
(statearr_51784[(19)] = inst_51711);

return statearr_51784;
})();
var statearr_51785_51857 = state_51759__$1;
(statearr_51785_51857[(2)] = inst_51712);

(statearr_51785_51857[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (32))){
var inst_51702 = (state_51759[(10)]);
var inst_51700 = (state_51759[(11)]);
var inst_51701 = (state_51759[(20)]);
var inst_51699 = (state_51759[(21)]);
var inst_51714 = (state_51759[(2)]);
var inst_51715 = (inst_51702 + (1));
var tmp51780 = inst_51700;
var tmp51781 = inst_51701;
var tmp51782 = inst_51699;
var inst_51699__$1 = tmp51782;
var inst_51700__$1 = tmp51780;
var inst_51701__$1 = tmp51781;
var inst_51702__$1 = inst_51715;
var state_51759__$1 = (function (){var statearr_51786 = state_51759;
(statearr_51786[(10)] = inst_51702__$1);

(statearr_51786[(11)] = inst_51700__$1);

(statearr_51786[(20)] = inst_51701__$1);

(statearr_51786[(21)] = inst_51699__$1);

(statearr_51786[(22)] = inst_51714);

return statearr_51786;
})();
var statearr_51787_51858 = state_51759__$1;
(statearr_51787_51858[(2)] = null);

(statearr_51787_51858[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (40))){
var inst_51727 = (state_51759[(23)]);
var inst_51731 = done.call(null,null);
var inst_51732 = cljs.core.async.untap_STAR_.call(null,m,inst_51727);
var state_51759__$1 = (function (){var statearr_51788 = state_51759;
(statearr_51788[(24)] = inst_51731);

return statearr_51788;
})();
var statearr_51789_51859 = state_51759__$1;
(statearr_51789_51859[(2)] = inst_51732);

(statearr_51789_51859[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (33))){
var inst_51718 = (state_51759[(25)]);
var inst_51720 = cljs.core.chunked_seq_QMARK_.call(null,inst_51718);
var state_51759__$1 = state_51759;
if(inst_51720){
var statearr_51790_51860 = state_51759__$1;
(statearr_51790_51860[(1)] = (36));

} else {
var statearr_51791_51861 = state_51759__$1;
(statearr_51791_51861[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (13))){
var inst_51648 = (state_51759[(26)]);
var inst_51651 = cljs.core.async.close_BANG_.call(null,inst_51648);
var state_51759__$1 = state_51759;
var statearr_51792_51862 = state_51759__$1;
(statearr_51792_51862[(2)] = inst_51651);

(statearr_51792_51862[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (22))){
var inst_51671 = (state_51759[(8)]);
var inst_51674 = cljs.core.async.close_BANG_.call(null,inst_51671);
var state_51759__$1 = state_51759;
var statearr_51793_51863 = state_51759__$1;
(statearr_51793_51863[(2)] = inst_51674);

(statearr_51793_51863[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (36))){
var inst_51718 = (state_51759[(25)]);
var inst_51722 = cljs.core.chunk_first.call(null,inst_51718);
var inst_51723 = cljs.core.chunk_rest.call(null,inst_51718);
var inst_51724 = cljs.core.count.call(null,inst_51722);
var inst_51699 = inst_51723;
var inst_51700 = inst_51722;
var inst_51701 = inst_51724;
var inst_51702 = (0);
var state_51759__$1 = (function (){var statearr_51794 = state_51759;
(statearr_51794[(10)] = inst_51702);

(statearr_51794[(11)] = inst_51700);

(statearr_51794[(20)] = inst_51701);

(statearr_51794[(21)] = inst_51699);

return statearr_51794;
})();
var statearr_51795_51864 = state_51759__$1;
(statearr_51795_51864[(2)] = null);

(statearr_51795_51864[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (41))){
var inst_51718 = (state_51759[(25)]);
var inst_51734 = (state_51759[(2)]);
var inst_51735 = cljs.core.next.call(null,inst_51718);
var inst_51699 = inst_51735;
var inst_51700 = null;
var inst_51701 = (0);
var inst_51702 = (0);
var state_51759__$1 = (function (){var statearr_51796 = state_51759;
(statearr_51796[(10)] = inst_51702);

(statearr_51796[(11)] = inst_51700);

(statearr_51796[(20)] = inst_51701);

(statearr_51796[(27)] = inst_51734);

(statearr_51796[(21)] = inst_51699);

return statearr_51796;
})();
var statearr_51797_51865 = state_51759__$1;
(statearr_51797_51865[(2)] = null);

(statearr_51797_51865[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (43))){
var state_51759__$1 = state_51759;
var statearr_51798_51866 = state_51759__$1;
(statearr_51798_51866[(2)] = null);

(statearr_51798_51866[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (29))){
var inst_51743 = (state_51759[(2)]);
var state_51759__$1 = state_51759;
var statearr_51799_51867 = state_51759__$1;
(statearr_51799_51867[(2)] = inst_51743);

(statearr_51799_51867[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (44))){
var inst_51752 = (state_51759[(2)]);
var state_51759__$1 = (function (){var statearr_51800 = state_51759;
(statearr_51800[(28)] = inst_51752);

return statearr_51800;
})();
var statearr_51801_51868 = state_51759__$1;
(statearr_51801_51868[(2)] = null);

(statearr_51801_51868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (6))){
var inst_51691 = (state_51759[(29)]);
var inst_51690 = cljs.core.deref.call(null,cs);
var inst_51691__$1 = cljs.core.keys.call(null,inst_51690);
var inst_51692 = cljs.core.count.call(null,inst_51691__$1);
var inst_51693 = cljs.core.reset_BANG_.call(null,dctr,inst_51692);
var inst_51698 = cljs.core.seq.call(null,inst_51691__$1);
var inst_51699 = inst_51698;
var inst_51700 = null;
var inst_51701 = (0);
var inst_51702 = (0);
var state_51759__$1 = (function (){var statearr_51802 = state_51759;
(statearr_51802[(10)] = inst_51702);

(statearr_51802[(11)] = inst_51700);

(statearr_51802[(30)] = inst_51693);

(statearr_51802[(20)] = inst_51701);

(statearr_51802[(29)] = inst_51691__$1);

(statearr_51802[(21)] = inst_51699);

return statearr_51802;
})();
var statearr_51803_51869 = state_51759__$1;
(statearr_51803_51869[(2)] = null);

(statearr_51803_51869[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (28))){
var inst_51718 = (state_51759[(25)]);
var inst_51699 = (state_51759[(21)]);
var inst_51718__$1 = cljs.core.seq.call(null,inst_51699);
var state_51759__$1 = (function (){var statearr_51804 = state_51759;
(statearr_51804[(25)] = inst_51718__$1);

return statearr_51804;
})();
if(inst_51718__$1){
var statearr_51805_51870 = state_51759__$1;
(statearr_51805_51870[(1)] = (33));

} else {
var statearr_51806_51871 = state_51759__$1;
(statearr_51806_51871[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (25))){
var inst_51702 = (state_51759[(10)]);
var inst_51701 = (state_51759[(20)]);
var inst_51704 = (inst_51702 < inst_51701);
var inst_51705 = inst_51704;
var state_51759__$1 = state_51759;
if(cljs.core.truth_(inst_51705)){
var statearr_51807_51872 = state_51759__$1;
(statearr_51807_51872[(1)] = (27));

} else {
var statearr_51808_51873 = state_51759__$1;
(statearr_51808_51873[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (34))){
var state_51759__$1 = state_51759;
var statearr_51809_51874 = state_51759__$1;
(statearr_51809_51874[(2)] = null);

(statearr_51809_51874[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (17))){
var state_51759__$1 = state_51759;
var statearr_51810_51875 = state_51759__$1;
(statearr_51810_51875[(2)] = null);

(statearr_51810_51875[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (3))){
var inst_51757 = (state_51759[(2)]);
var state_51759__$1 = state_51759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51759__$1,inst_51757);
} else {
if((state_val_51760 === (12))){
var inst_51686 = (state_51759[(2)]);
var state_51759__$1 = state_51759;
var statearr_51811_51876 = state_51759__$1;
(statearr_51811_51876[(2)] = inst_51686);

(statearr_51811_51876[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (2))){
var state_51759__$1 = state_51759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51759__$1,(4),ch);
} else {
if((state_val_51760 === (23))){
var state_51759__$1 = state_51759;
var statearr_51812_51877 = state_51759__$1;
(statearr_51812_51877[(2)] = null);

(statearr_51812_51877[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (35))){
var inst_51741 = (state_51759[(2)]);
var state_51759__$1 = state_51759;
var statearr_51813_51878 = state_51759__$1;
(statearr_51813_51878[(2)] = inst_51741);

(statearr_51813_51878[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (19))){
var inst_51658 = (state_51759[(7)]);
var inst_51662 = cljs.core.chunk_first.call(null,inst_51658);
var inst_51663 = cljs.core.chunk_rest.call(null,inst_51658);
var inst_51664 = cljs.core.count.call(null,inst_51662);
var inst_51636 = inst_51663;
var inst_51637 = inst_51662;
var inst_51638 = inst_51664;
var inst_51639 = (0);
var state_51759__$1 = (function (){var statearr_51814 = state_51759;
(statearr_51814[(13)] = inst_51637);

(statearr_51814[(14)] = inst_51639);

(statearr_51814[(15)] = inst_51636);

(statearr_51814[(17)] = inst_51638);

return statearr_51814;
})();
var statearr_51815_51879 = state_51759__$1;
(statearr_51815_51879[(2)] = null);

(statearr_51815_51879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (11))){
var inst_51658 = (state_51759[(7)]);
var inst_51636 = (state_51759[(15)]);
var inst_51658__$1 = cljs.core.seq.call(null,inst_51636);
var state_51759__$1 = (function (){var statearr_51816 = state_51759;
(statearr_51816[(7)] = inst_51658__$1);

return statearr_51816;
})();
if(inst_51658__$1){
var statearr_51817_51880 = state_51759__$1;
(statearr_51817_51880[(1)] = (16));

} else {
var statearr_51818_51881 = state_51759__$1;
(statearr_51818_51881[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (9))){
var inst_51688 = (state_51759[(2)]);
var state_51759__$1 = state_51759;
var statearr_51819_51882 = state_51759__$1;
(statearr_51819_51882[(2)] = inst_51688);

(statearr_51819_51882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (5))){
var inst_51634 = cljs.core.deref.call(null,cs);
var inst_51635 = cljs.core.seq.call(null,inst_51634);
var inst_51636 = inst_51635;
var inst_51637 = null;
var inst_51638 = (0);
var inst_51639 = (0);
var state_51759__$1 = (function (){var statearr_51820 = state_51759;
(statearr_51820[(13)] = inst_51637);

(statearr_51820[(14)] = inst_51639);

(statearr_51820[(15)] = inst_51636);

(statearr_51820[(17)] = inst_51638);

return statearr_51820;
})();
var statearr_51821_51883 = state_51759__$1;
(statearr_51821_51883[(2)] = null);

(statearr_51821_51883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (14))){
var state_51759__$1 = state_51759;
var statearr_51822_51884 = state_51759__$1;
(statearr_51822_51884[(2)] = null);

(statearr_51822_51884[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (45))){
var inst_51749 = (state_51759[(2)]);
var state_51759__$1 = state_51759;
var statearr_51823_51885 = state_51759__$1;
(statearr_51823_51885[(2)] = inst_51749);

(statearr_51823_51885[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (26))){
var inst_51691 = (state_51759[(29)]);
var inst_51745 = (state_51759[(2)]);
var inst_51746 = cljs.core.seq.call(null,inst_51691);
var state_51759__$1 = (function (){var statearr_51824 = state_51759;
(statearr_51824[(31)] = inst_51745);

return statearr_51824;
})();
if(inst_51746){
var statearr_51825_51886 = state_51759__$1;
(statearr_51825_51886[(1)] = (42));

} else {
var statearr_51826_51887 = state_51759__$1;
(statearr_51826_51887[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (16))){
var inst_51658 = (state_51759[(7)]);
var inst_51660 = cljs.core.chunked_seq_QMARK_.call(null,inst_51658);
var state_51759__$1 = state_51759;
if(inst_51660){
var statearr_51827_51888 = state_51759__$1;
(statearr_51827_51888[(1)] = (19));

} else {
var statearr_51828_51889 = state_51759__$1;
(statearr_51828_51889[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (38))){
var inst_51738 = (state_51759[(2)]);
var state_51759__$1 = state_51759;
var statearr_51829_51890 = state_51759__$1;
(statearr_51829_51890[(2)] = inst_51738);

(statearr_51829_51890[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (30))){
var state_51759__$1 = state_51759;
var statearr_51830_51891 = state_51759__$1;
(statearr_51830_51891[(2)] = null);

(statearr_51830_51891[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (10))){
var inst_51637 = (state_51759[(13)]);
var inst_51639 = (state_51759[(14)]);
var inst_51647 = cljs.core._nth.call(null,inst_51637,inst_51639);
var inst_51648 = cljs.core.nth.call(null,inst_51647,(0),null);
var inst_51649 = cljs.core.nth.call(null,inst_51647,(1),null);
var state_51759__$1 = (function (){var statearr_51831 = state_51759;
(statearr_51831[(26)] = inst_51648);

return statearr_51831;
})();
if(cljs.core.truth_(inst_51649)){
var statearr_51832_51892 = state_51759__$1;
(statearr_51832_51892[(1)] = (13));

} else {
var statearr_51833_51893 = state_51759__$1;
(statearr_51833_51893[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (18))){
var inst_51684 = (state_51759[(2)]);
var state_51759__$1 = state_51759;
var statearr_51834_51894 = state_51759__$1;
(statearr_51834_51894[(2)] = inst_51684);

(statearr_51834_51894[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (42))){
var state_51759__$1 = state_51759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51759__$1,(45),dchan);
} else {
if((state_val_51760 === (37))){
var inst_51718 = (state_51759[(25)]);
var inst_51627 = (state_51759[(9)]);
var inst_51727 = (state_51759[(23)]);
var inst_51727__$1 = cljs.core.first.call(null,inst_51718);
var inst_51728 = cljs.core.async.put_BANG_.call(null,inst_51727__$1,inst_51627,done);
var state_51759__$1 = (function (){var statearr_51835 = state_51759;
(statearr_51835[(23)] = inst_51727__$1);

return statearr_51835;
})();
if(cljs.core.truth_(inst_51728)){
var statearr_51836_51895 = state_51759__$1;
(statearr_51836_51895[(1)] = (39));

} else {
var statearr_51837_51896 = state_51759__$1;
(statearr_51837_51896[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51760 === (8))){
var inst_51639 = (state_51759[(14)]);
var inst_51638 = (state_51759[(17)]);
var inst_51641 = (inst_51639 < inst_51638);
var inst_51642 = inst_51641;
var state_51759__$1 = state_51759;
if(cljs.core.truth_(inst_51642)){
var statearr_51838_51897 = state_51759__$1;
(statearr_51838_51897[(1)] = (10));

} else {
var statearr_51839_51898 = state_51759__$1;
(statearr_51839_51898[(1)] = (11));

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
});})(c__51025__auto___51844,cs,m,dchan,dctr,done))
;
return ((function (switch__50721__auto__,c__51025__auto___51844,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__50722__auto__ = null;
var cljs$core$async$mult_$_state_machine__50722__auto____0 = (function (){
var statearr_51840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51840[(0)] = cljs$core$async$mult_$_state_machine__50722__auto__);

(statearr_51840[(1)] = (1));

return statearr_51840;
});
var cljs$core$async$mult_$_state_machine__50722__auto____1 = (function (state_51759){
while(true){
var ret_value__50723__auto__ = (function (){try{while(true){
var result__50724__auto__ = switch__50721__auto__.call(null,state_51759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50724__auto__;
}
break;
}
}catch (e51841){if((e51841 instanceof Object)){
var ex__50725__auto__ = e51841;
var statearr_51842_51899 = state_51759;
(statearr_51842_51899[(5)] = ex__50725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51900 = state_51759;
state_51759 = G__51900;
continue;
} else {
return ret_value__50723__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__50722__auto__ = function(state_51759){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__50722__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__50722__auto____1.call(this,state_51759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__50722__auto____0;
cljs$core$async$mult_$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__50722__auto____1;
return cljs$core$async$mult_$_state_machine__50722__auto__;
})()
;})(switch__50721__auto__,c__51025__auto___51844,cs,m,dchan,dctr,done))
})();
var state__51027__auto__ = (function (){var statearr_51843 = f__51026__auto__.call(null);
(statearr_51843[(6)] = c__51025__auto___51844);

return statearr_51843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51027__auto__);
});})(c__51025__auto___51844,cs,m,dchan,dctr,done))
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
var G__51902 = arguments.length;
switch (G__51902) {
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
var len__4517__auto___51914 = arguments.length;
var i__4518__auto___51915 = (0);
while(true){
if((i__4518__auto___51915 < len__4517__auto___51914)){
args__4520__auto__.push((arguments[i__4518__auto___51915]));

var G__51916 = (i__4518__auto___51915 + (1));
i__4518__auto___51915 = G__51916;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((3) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4521__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__51908){
var map__51909 = p__51908;
var map__51909__$1 = ((((!((map__51909 == null)))?(((((map__51909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51909):map__51909);
var opts = map__51909__$1;
var statearr_51911_51917 = state;
(statearr_51911_51917[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__51909,map__51909__$1,opts){
return (function (val){
var statearr_51912_51918 = state;
(statearr_51912_51918[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__51909,map__51909__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_51913_51919 = state;
(statearr_51913_51919[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq51904){
var G__51905 = cljs.core.first.call(null,seq51904);
var seq51904__$1 = cljs.core.next.call(null,seq51904);
var G__51906 = cljs.core.first.call(null,seq51904__$1);
var seq51904__$2 = cljs.core.next.call(null,seq51904__$1);
var G__51907 = cljs.core.first.call(null,seq51904__$2);
var seq51904__$3 = cljs.core.next.call(null,seq51904__$2);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51905,G__51906,G__51907,seq51904__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51920 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51920 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta51921){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta51921 = meta51921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_51922,meta51921__$1){
var self__ = this;
var _51922__$1 = this;
return (new cljs.core.async.t_cljs$core$async51920(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta51921__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51920.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_51922){
var self__ = this;
var _51922__$1 = this;
return self__.meta51921;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51920.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51920.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51920.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51920.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51920.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51920.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51920.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51920.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async51920.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta51921","meta51921",-1492212077,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51920.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51920";

cljs.core.async.t_cljs$core$async51920.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async51920");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51920.
 */
cljs.core.async.__GT_t_cljs$core$async51920 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async51920(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta51921){
return (new cljs.core.async.t_cljs$core$async51920(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta51921));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async51920(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__51025__auto___52084 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51025__auto___52084,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__51026__auto__ = (function (){var switch__50721__auto__ = ((function (c__51025__auto___52084,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_52024){
var state_val_52025 = (state_52024[(1)]);
if((state_val_52025 === (7))){
var inst_51939 = (state_52024[(2)]);
var state_52024__$1 = state_52024;
var statearr_52026_52085 = state_52024__$1;
(statearr_52026_52085[(2)] = inst_51939);

(statearr_52026_52085[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (20))){
var inst_51951 = (state_52024[(7)]);
var state_52024__$1 = state_52024;
var statearr_52027_52086 = state_52024__$1;
(statearr_52027_52086[(2)] = inst_51951);

(statearr_52027_52086[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (27))){
var state_52024__$1 = state_52024;
var statearr_52028_52087 = state_52024__$1;
(statearr_52028_52087[(2)] = null);

(statearr_52028_52087[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (1))){
var inst_51926 = (state_52024[(8)]);
var inst_51926__$1 = calc_state.call(null);
var inst_51928 = (inst_51926__$1 == null);
var inst_51929 = cljs.core.not.call(null,inst_51928);
var state_52024__$1 = (function (){var statearr_52029 = state_52024;
(statearr_52029[(8)] = inst_51926__$1);

return statearr_52029;
})();
if(inst_51929){
var statearr_52030_52088 = state_52024__$1;
(statearr_52030_52088[(1)] = (2));

} else {
var statearr_52031_52089 = state_52024__$1;
(statearr_52031_52089[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (24))){
var inst_51998 = (state_52024[(9)]);
var inst_51984 = (state_52024[(10)]);
var inst_51975 = (state_52024[(11)]);
var inst_51998__$1 = inst_51975.call(null,inst_51984);
var state_52024__$1 = (function (){var statearr_52032 = state_52024;
(statearr_52032[(9)] = inst_51998__$1);

return statearr_52032;
})();
if(cljs.core.truth_(inst_51998__$1)){
var statearr_52033_52090 = state_52024__$1;
(statearr_52033_52090[(1)] = (29));

} else {
var statearr_52034_52091 = state_52024__$1;
(statearr_52034_52091[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (4))){
var inst_51942 = (state_52024[(2)]);
var state_52024__$1 = state_52024;
if(cljs.core.truth_(inst_51942)){
var statearr_52035_52092 = state_52024__$1;
(statearr_52035_52092[(1)] = (8));

} else {
var statearr_52036_52093 = state_52024__$1;
(statearr_52036_52093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (15))){
var inst_51969 = (state_52024[(2)]);
var state_52024__$1 = state_52024;
if(cljs.core.truth_(inst_51969)){
var statearr_52037_52094 = state_52024__$1;
(statearr_52037_52094[(1)] = (19));

} else {
var statearr_52038_52095 = state_52024__$1;
(statearr_52038_52095[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (21))){
var inst_51974 = (state_52024[(12)]);
var inst_51974__$1 = (state_52024[(2)]);
var inst_51975 = cljs.core.get.call(null,inst_51974__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51976 = cljs.core.get.call(null,inst_51974__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51977 = cljs.core.get.call(null,inst_51974__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_52024__$1 = (function (){var statearr_52039 = state_52024;
(statearr_52039[(12)] = inst_51974__$1);

(statearr_52039[(13)] = inst_51976);

(statearr_52039[(11)] = inst_51975);

return statearr_52039;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_52024__$1,(22),inst_51977);
} else {
if((state_val_52025 === (31))){
var inst_52006 = (state_52024[(2)]);
var state_52024__$1 = state_52024;
if(cljs.core.truth_(inst_52006)){
var statearr_52040_52096 = state_52024__$1;
(statearr_52040_52096[(1)] = (32));

} else {
var statearr_52041_52097 = state_52024__$1;
(statearr_52041_52097[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (32))){
var inst_51983 = (state_52024[(14)]);
var state_52024__$1 = state_52024;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52024__$1,(35),out,inst_51983);
} else {
if((state_val_52025 === (33))){
var inst_51974 = (state_52024[(12)]);
var inst_51951 = inst_51974;
var state_52024__$1 = (function (){var statearr_52042 = state_52024;
(statearr_52042[(7)] = inst_51951);

return statearr_52042;
})();
var statearr_52043_52098 = state_52024__$1;
(statearr_52043_52098[(2)] = null);

(statearr_52043_52098[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (13))){
var inst_51951 = (state_52024[(7)]);
var inst_51958 = inst_51951.cljs$lang$protocol_mask$partition0$;
var inst_51959 = (inst_51958 & (64));
var inst_51960 = inst_51951.cljs$core$ISeq$;
var inst_51961 = (cljs.core.PROTOCOL_SENTINEL === inst_51960);
var inst_51962 = ((inst_51959) || (inst_51961));
var state_52024__$1 = state_52024;
if(cljs.core.truth_(inst_51962)){
var statearr_52044_52099 = state_52024__$1;
(statearr_52044_52099[(1)] = (16));

} else {
var statearr_52045_52100 = state_52024__$1;
(statearr_52045_52100[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (22))){
var inst_51984 = (state_52024[(10)]);
var inst_51983 = (state_52024[(14)]);
var inst_51982 = (state_52024[(2)]);
var inst_51983__$1 = cljs.core.nth.call(null,inst_51982,(0),null);
var inst_51984__$1 = cljs.core.nth.call(null,inst_51982,(1),null);
var inst_51985 = (inst_51983__$1 == null);
var inst_51986 = cljs.core._EQ_.call(null,inst_51984__$1,change);
var inst_51987 = ((inst_51985) || (inst_51986));
var state_52024__$1 = (function (){var statearr_52046 = state_52024;
(statearr_52046[(10)] = inst_51984__$1);

(statearr_52046[(14)] = inst_51983__$1);

return statearr_52046;
})();
if(cljs.core.truth_(inst_51987)){
var statearr_52047_52101 = state_52024__$1;
(statearr_52047_52101[(1)] = (23));

} else {
var statearr_52048_52102 = state_52024__$1;
(statearr_52048_52102[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (36))){
var inst_51974 = (state_52024[(12)]);
var inst_51951 = inst_51974;
var state_52024__$1 = (function (){var statearr_52049 = state_52024;
(statearr_52049[(7)] = inst_51951);

return statearr_52049;
})();
var statearr_52050_52103 = state_52024__$1;
(statearr_52050_52103[(2)] = null);

(statearr_52050_52103[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (29))){
var inst_51998 = (state_52024[(9)]);
var state_52024__$1 = state_52024;
var statearr_52051_52104 = state_52024__$1;
(statearr_52051_52104[(2)] = inst_51998);

(statearr_52051_52104[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (6))){
var state_52024__$1 = state_52024;
var statearr_52052_52105 = state_52024__$1;
(statearr_52052_52105[(2)] = false);

(statearr_52052_52105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (28))){
var inst_51994 = (state_52024[(2)]);
var inst_51995 = calc_state.call(null);
var inst_51951 = inst_51995;
var state_52024__$1 = (function (){var statearr_52053 = state_52024;
(statearr_52053[(7)] = inst_51951);

(statearr_52053[(15)] = inst_51994);

return statearr_52053;
})();
var statearr_52054_52106 = state_52024__$1;
(statearr_52054_52106[(2)] = null);

(statearr_52054_52106[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (25))){
var inst_52020 = (state_52024[(2)]);
var state_52024__$1 = state_52024;
var statearr_52055_52107 = state_52024__$1;
(statearr_52055_52107[(2)] = inst_52020);

(statearr_52055_52107[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (34))){
var inst_52018 = (state_52024[(2)]);
var state_52024__$1 = state_52024;
var statearr_52056_52108 = state_52024__$1;
(statearr_52056_52108[(2)] = inst_52018);

(statearr_52056_52108[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (17))){
var state_52024__$1 = state_52024;
var statearr_52057_52109 = state_52024__$1;
(statearr_52057_52109[(2)] = false);

(statearr_52057_52109[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (3))){
var state_52024__$1 = state_52024;
var statearr_52058_52110 = state_52024__$1;
(statearr_52058_52110[(2)] = false);

(statearr_52058_52110[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (12))){
var inst_52022 = (state_52024[(2)]);
var state_52024__$1 = state_52024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52024__$1,inst_52022);
} else {
if((state_val_52025 === (2))){
var inst_51926 = (state_52024[(8)]);
var inst_51931 = inst_51926.cljs$lang$protocol_mask$partition0$;
var inst_51932 = (inst_51931 & (64));
var inst_51933 = inst_51926.cljs$core$ISeq$;
var inst_51934 = (cljs.core.PROTOCOL_SENTINEL === inst_51933);
var inst_51935 = ((inst_51932) || (inst_51934));
var state_52024__$1 = state_52024;
if(cljs.core.truth_(inst_51935)){
var statearr_52059_52111 = state_52024__$1;
(statearr_52059_52111[(1)] = (5));

} else {
var statearr_52060_52112 = state_52024__$1;
(statearr_52060_52112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (23))){
var inst_51983 = (state_52024[(14)]);
var inst_51989 = (inst_51983 == null);
var state_52024__$1 = state_52024;
if(cljs.core.truth_(inst_51989)){
var statearr_52061_52113 = state_52024__$1;
(statearr_52061_52113[(1)] = (26));

} else {
var statearr_52062_52114 = state_52024__$1;
(statearr_52062_52114[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (35))){
var inst_52009 = (state_52024[(2)]);
var state_52024__$1 = state_52024;
if(cljs.core.truth_(inst_52009)){
var statearr_52063_52115 = state_52024__$1;
(statearr_52063_52115[(1)] = (36));

} else {
var statearr_52064_52116 = state_52024__$1;
(statearr_52064_52116[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (19))){
var inst_51951 = (state_52024[(7)]);
var inst_51971 = cljs.core.apply.call(null,cljs.core.hash_map,inst_51951);
var state_52024__$1 = state_52024;
var statearr_52065_52117 = state_52024__$1;
(statearr_52065_52117[(2)] = inst_51971);

(statearr_52065_52117[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (11))){
var inst_51951 = (state_52024[(7)]);
var inst_51955 = (inst_51951 == null);
var inst_51956 = cljs.core.not.call(null,inst_51955);
var state_52024__$1 = state_52024;
if(inst_51956){
var statearr_52066_52118 = state_52024__$1;
(statearr_52066_52118[(1)] = (13));

} else {
var statearr_52067_52119 = state_52024__$1;
(statearr_52067_52119[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (9))){
var inst_51926 = (state_52024[(8)]);
var state_52024__$1 = state_52024;
var statearr_52068_52120 = state_52024__$1;
(statearr_52068_52120[(2)] = inst_51926);

(statearr_52068_52120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (5))){
var state_52024__$1 = state_52024;
var statearr_52069_52121 = state_52024__$1;
(statearr_52069_52121[(2)] = true);

(statearr_52069_52121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (14))){
var state_52024__$1 = state_52024;
var statearr_52070_52122 = state_52024__$1;
(statearr_52070_52122[(2)] = false);

(statearr_52070_52122[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (26))){
var inst_51984 = (state_52024[(10)]);
var inst_51991 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_51984);
var state_52024__$1 = state_52024;
var statearr_52071_52123 = state_52024__$1;
(statearr_52071_52123[(2)] = inst_51991);

(statearr_52071_52123[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (16))){
var state_52024__$1 = state_52024;
var statearr_52072_52124 = state_52024__$1;
(statearr_52072_52124[(2)] = true);

(statearr_52072_52124[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (38))){
var inst_52014 = (state_52024[(2)]);
var state_52024__$1 = state_52024;
var statearr_52073_52125 = state_52024__$1;
(statearr_52073_52125[(2)] = inst_52014);

(statearr_52073_52125[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (30))){
var inst_51984 = (state_52024[(10)]);
var inst_51976 = (state_52024[(13)]);
var inst_51975 = (state_52024[(11)]);
var inst_52001 = cljs.core.empty_QMARK_.call(null,inst_51975);
var inst_52002 = inst_51976.call(null,inst_51984);
var inst_52003 = cljs.core.not.call(null,inst_52002);
var inst_52004 = ((inst_52001) && (inst_52003));
var state_52024__$1 = state_52024;
var statearr_52074_52126 = state_52024__$1;
(statearr_52074_52126[(2)] = inst_52004);

(statearr_52074_52126[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (10))){
var inst_51926 = (state_52024[(8)]);
var inst_51947 = (state_52024[(2)]);
var inst_51948 = cljs.core.get.call(null,inst_51947,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51949 = cljs.core.get.call(null,inst_51947,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51950 = cljs.core.get.call(null,inst_51947,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_51951 = inst_51926;
var state_52024__$1 = (function (){var statearr_52075 = state_52024;
(statearr_52075[(7)] = inst_51951);

(statearr_52075[(16)] = inst_51950);

(statearr_52075[(17)] = inst_51949);

(statearr_52075[(18)] = inst_51948);

return statearr_52075;
})();
var statearr_52076_52127 = state_52024__$1;
(statearr_52076_52127[(2)] = null);

(statearr_52076_52127[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (18))){
var inst_51966 = (state_52024[(2)]);
var state_52024__$1 = state_52024;
var statearr_52077_52128 = state_52024__$1;
(statearr_52077_52128[(2)] = inst_51966);

(statearr_52077_52128[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (37))){
var state_52024__$1 = state_52024;
var statearr_52078_52129 = state_52024__$1;
(statearr_52078_52129[(2)] = null);

(statearr_52078_52129[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (8))){
var inst_51926 = (state_52024[(8)]);
var inst_51944 = cljs.core.apply.call(null,cljs.core.hash_map,inst_51926);
var state_52024__$1 = state_52024;
var statearr_52079_52130 = state_52024__$1;
(statearr_52079_52130[(2)] = inst_51944);

(statearr_52079_52130[(1)] = (10));


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
});})(c__51025__auto___52084,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__50721__auto__,c__51025__auto___52084,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__50722__auto__ = null;
var cljs$core$async$mix_$_state_machine__50722__auto____0 = (function (){
var statearr_52080 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52080[(0)] = cljs$core$async$mix_$_state_machine__50722__auto__);

(statearr_52080[(1)] = (1));

return statearr_52080;
});
var cljs$core$async$mix_$_state_machine__50722__auto____1 = (function (state_52024){
while(true){
var ret_value__50723__auto__ = (function (){try{while(true){
var result__50724__auto__ = switch__50721__auto__.call(null,state_52024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50724__auto__;
}
break;
}
}catch (e52081){if((e52081 instanceof Object)){
var ex__50725__auto__ = e52081;
var statearr_52082_52131 = state_52024;
(statearr_52082_52131[(5)] = ex__50725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52132 = state_52024;
state_52024 = G__52132;
continue;
} else {
return ret_value__50723__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__50722__auto__ = function(state_52024){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__50722__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__50722__auto____1.call(this,state_52024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__50722__auto____0;
cljs$core$async$mix_$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__50722__auto____1;
return cljs$core$async$mix_$_state_machine__50722__auto__;
})()
;})(switch__50721__auto__,c__51025__auto___52084,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__51027__auto__ = (function (){var statearr_52083 = f__51026__auto__.call(null);
(statearr_52083[(6)] = c__51025__auto___52084);

return statearr_52083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51027__auto__);
});})(c__51025__auto___52084,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__52134 = arguments.length;
switch (G__52134) {
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
var G__52138 = arguments.length;
switch (G__52138) {
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
return (function (p1__52136_SHARP_){
if(cljs.core.truth_(p1__52136_SHARP_.call(null,topic))){
return p1__52136_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__52136_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3936__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52139 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52139 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta52140){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta52140 = meta52140;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_52141,meta52140__$1){
var self__ = this;
var _52141__$1 = this;
return (new cljs.core.async.t_cljs$core$async52139(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta52140__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52139.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_52141){
var self__ = this;
var _52141__$1 = this;
return self__.meta52140;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52139.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52139.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52139.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52139.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52139.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async52139.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52139.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52139.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta52140","meta52140",448918202,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async52139.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52139.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52139";

cljs.core.async.t_cljs$core$async52139.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async52139");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52139.
 */
cljs.core.async.__GT_t_cljs$core$async52139 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async52139(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta52140){
return (new cljs.core.async.t_cljs$core$async52139(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta52140));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async52139(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__51025__auto___52259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51025__auto___52259,mults,ensure_mult,p){
return (function (){
var f__51026__auto__ = (function (){var switch__50721__auto__ = ((function (c__51025__auto___52259,mults,ensure_mult,p){
return (function (state_52213){
var state_val_52214 = (state_52213[(1)]);
if((state_val_52214 === (7))){
var inst_52209 = (state_52213[(2)]);
var state_52213__$1 = state_52213;
var statearr_52215_52260 = state_52213__$1;
(statearr_52215_52260[(2)] = inst_52209);

(statearr_52215_52260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52214 === (20))){
var state_52213__$1 = state_52213;
var statearr_52216_52261 = state_52213__$1;
(statearr_52216_52261[(2)] = null);

(statearr_52216_52261[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52214 === (1))){
var state_52213__$1 = state_52213;
var statearr_52217_52262 = state_52213__$1;
(statearr_52217_52262[(2)] = null);

(statearr_52217_52262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52214 === (24))){
var inst_52192 = (state_52213[(7)]);
var inst_52201 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_52192);
var state_52213__$1 = state_52213;
var statearr_52218_52263 = state_52213__$1;
(statearr_52218_52263[(2)] = inst_52201);

(statearr_52218_52263[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52214 === (4))){
var inst_52144 = (state_52213[(8)]);
var inst_52144__$1 = (state_52213[(2)]);
var inst_52145 = (inst_52144__$1 == null);
var state_52213__$1 = (function (){var statearr_52219 = state_52213;
(statearr_52219[(8)] = inst_52144__$1);

return statearr_52219;
})();
if(cljs.core.truth_(inst_52145)){
var statearr_52220_52264 = state_52213__$1;
(statearr_52220_52264[(1)] = (5));

} else {
var statearr_52221_52265 = state_52213__$1;
(statearr_52221_52265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52214 === (15))){
var inst_52186 = (state_52213[(2)]);
var state_52213__$1 = state_52213;
var statearr_52222_52266 = state_52213__$1;
(statearr_52222_52266[(2)] = inst_52186);

(statearr_52222_52266[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52214 === (21))){
var inst_52206 = (state_52213[(2)]);
var state_52213__$1 = (function (){var statearr_52223 = state_52213;
(statearr_52223[(9)] = inst_52206);

return statearr_52223;
})();
var statearr_52224_52267 = state_52213__$1;
(statearr_52224_52267[(2)] = null);

(statearr_52224_52267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52214 === (13))){
var inst_52168 = (state_52213[(10)]);
var inst_52170 = cljs.core.chunked_seq_QMARK_.call(null,inst_52168);
var state_52213__$1 = state_52213;
if(inst_52170){
var statearr_52225_52268 = state_52213__$1;
(statearr_52225_52268[(1)] = (16));

} else {
var statearr_52226_52269 = state_52213__$1;
(statearr_52226_52269[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52214 === (22))){
var inst_52198 = (state_52213[(2)]);
var state_52213__$1 = state_52213;
if(cljs.core.truth_(inst_52198)){
var statearr_52227_52270 = state_52213__$1;
(statearr_52227_52270[(1)] = (23));

} else {
var statearr_52228_52271 = state_52213__$1;
(statearr_52228_52271[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52214 === (6))){
var inst_52192 = (state_52213[(7)]);
var inst_52144 = (state_52213[(8)]);
var inst_52194 = (state_52213[(11)]);
var inst_52192__$1 = topic_fn.call(null,inst_52144);
var inst_52193 = cljs.core.deref.call(null,mults);
var inst_52194__$1 = cljs.core.get.call(null,inst_52193,inst_52192__$1);
var state_52213__$1 = (function (){var statearr_52229 = state_52213;
(statearr_52229[(7)] = inst_52192__$1);

(statearr_52229[(11)] = inst_52194__$1);

return statearr_52229;
})();
if(cljs.core.truth_(inst_52194__$1)){
var statearr_52230_52272 = state_52213__$1;
(statearr_52230_52272[(1)] = (19));

} else {
var statearr_52231_52273 = state_52213__$1;
(statearr_52231_52273[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52214 === (25))){
var inst_52203 = (state_52213[(2)]);
var state_52213__$1 = state_52213;
var statearr_52232_52274 = state_52213__$1;
(statearr_52232_52274[(2)] = inst_52203);

(statearr_52232_52274[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52214 === (17))){
var inst_52168 = (state_52213[(10)]);
var inst_52177 = cljs.core.first.call(null,inst_52168);
var inst_52178 = cljs.core.async.muxch_STAR_.call(null,inst_52177);
var inst_52179 = cljs.core.async.close_BANG_.call(null,inst_52178);
var inst_52180 = cljs.core.next.call(null,inst_52168);
var inst_52154 = inst_52180;
var inst_52155 = null;
var inst_52156 = (0);
var inst_52157 = (0);
var state_52213__$1 = (function (){var statearr_52233 = state_52213;
(statearr_52233[(12)] = inst_52157);

(statearr_52233[(13)] = inst_52154);

(statearr_52233[(14)] = inst_52179);

(statearr_52233[(15)] = inst_52155);

(statearr_52233[(16)] = inst_52156);

return statearr_52233;
})();
var statearr_52234_52275 = state_52213__$1;
(statearr_52234_52275[(2)] = null);

(statearr_52234_52275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52214 === (3))){
var inst_52211 = (state_52213[(2)]);
var state_52213__$1 = state_52213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52213__$1,inst_52211);
} else {
if((state_val_52214 === (12))){
var inst_52188 = (state_52213[(2)]);
var state_52213__$1 = state_52213;
var statearr_52235_52276 = state_52213__$1;
(statearr_52235_52276[(2)] = inst_52188);

(statearr_52235_52276[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52214 === (2))){
var state_52213__$1 = state_52213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52213__$1,(4),ch);
} else {
if((state_val_52214 === (23))){
var state_52213__$1 = state_52213;
var statearr_52236_52277 = state_52213__$1;
(statearr_52236_52277[(2)] = null);

(statearr_52236_52277[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52214 === (19))){
var inst_52144 = (state_52213[(8)]);
var inst_52194 = (state_52213[(11)]);
var inst_52196 = cljs.core.async.muxch_STAR_.call(null,inst_52194);
var state_52213__$1 = state_52213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52213__$1,(22),inst_52196,inst_52144);
} else {
if((state_val_52214 === (11))){
var inst_52154 = (state_52213[(13)]);
var inst_52168 = (state_52213[(10)]);
var inst_52168__$1 = cljs.core.seq.call(null,inst_52154);
var state_52213__$1 = (function (){var statearr_52237 = state_52213;
(statearr_52237[(10)] = inst_52168__$1);

return statearr_52237;
})();
if(inst_52168__$1){
var statearr_52238_52278 = state_52213__$1;
(statearr_52238_52278[(1)] = (13));

} else {
var statearr_52239_52279 = state_52213__$1;
(statearr_52239_52279[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52214 === (9))){
var inst_52190 = (state_52213[(2)]);
var state_52213__$1 = state_52213;
var statearr_52240_52280 = state_52213__$1;
(statearr_52240_52280[(2)] = inst_52190);

(statearr_52240_52280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52214 === (5))){
var inst_52151 = cljs.core.deref.call(null,mults);
var inst_52152 = cljs.core.vals.call(null,inst_52151);
var inst_52153 = cljs.core.seq.call(null,inst_52152);
var inst_52154 = inst_52153;
var inst_52155 = null;
var inst_52156 = (0);
var inst_52157 = (0);
var state_52213__$1 = (function (){var statearr_52241 = state_52213;
(statearr_52241[(12)] = inst_52157);

(statearr_52241[(13)] = inst_52154);

(statearr_52241[(15)] = inst_52155);

(statearr_52241[(16)] = inst_52156);

return statearr_52241;
})();
var statearr_52242_52281 = state_52213__$1;
(statearr_52242_52281[(2)] = null);

(statearr_52242_52281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52214 === (14))){
var state_52213__$1 = state_52213;
var statearr_52246_52282 = state_52213__$1;
(statearr_52246_52282[(2)] = null);

(statearr_52246_52282[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52214 === (16))){
var inst_52168 = (state_52213[(10)]);
var inst_52172 = cljs.core.chunk_first.call(null,inst_52168);
var inst_52173 = cljs.core.chunk_rest.call(null,inst_52168);
var inst_52174 = cljs.core.count.call(null,inst_52172);
var inst_52154 = inst_52173;
var inst_52155 = inst_52172;
var inst_52156 = inst_52174;
var inst_52157 = (0);
var state_52213__$1 = (function (){var statearr_52247 = state_52213;
(statearr_52247[(12)] = inst_52157);

(statearr_52247[(13)] = inst_52154);

(statearr_52247[(15)] = inst_52155);

(statearr_52247[(16)] = inst_52156);

return statearr_52247;
})();
var statearr_52248_52283 = state_52213__$1;
(statearr_52248_52283[(2)] = null);

(statearr_52248_52283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52214 === (10))){
var inst_52157 = (state_52213[(12)]);
var inst_52154 = (state_52213[(13)]);
var inst_52155 = (state_52213[(15)]);
var inst_52156 = (state_52213[(16)]);
var inst_52162 = cljs.core._nth.call(null,inst_52155,inst_52157);
var inst_52163 = cljs.core.async.muxch_STAR_.call(null,inst_52162);
var inst_52164 = cljs.core.async.close_BANG_.call(null,inst_52163);
var inst_52165 = (inst_52157 + (1));
var tmp52243 = inst_52154;
var tmp52244 = inst_52155;
var tmp52245 = inst_52156;
var inst_52154__$1 = tmp52243;
var inst_52155__$1 = tmp52244;
var inst_52156__$1 = tmp52245;
var inst_52157__$1 = inst_52165;
var state_52213__$1 = (function (){var statearr_52249 = state_52213;
(statearr_52249[(17)] = inst_52164);

(statearr_52249[(12)] = inst_52157__$1);

(statearr_52249[(13)] = inst_52154__$1);

(statearr_52249[(15)] = inst_52155__$1);

(statearr_52249[(16)] = inst_52156__$1);

return statearr_52249;
})();
var statearr_52250_52284 = state_52213__$1;
(statearr_52250_52284[(2)] = null);

(statearr_52250_52284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52214 === (18))){
var inst_52183 = (state_52213[(2)]);
var state_52213__$1 = state_52213;
var statearr_52251_52285 = state_52213__$1;
(statearr_52251_52285[(2)] = inst_52183);

(statearr_52251_52285[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52214 === (8))){
var inst_52157 = (state_52213[(12)]);
var inst_52156 = (state_52213[(16)]);
var inst_52159 = (inst_52157 < inst_52156);
var inst_52160 = inst_52159;
var state_52213__$1 = state_52213;
if(cljs.core.truth_(inst_52160)){
var statearr_52252_52286 = state_52213__$1;
(statearr_52252_52286[(1)] = (10));

} else {
var statearr_52253_52287 = state_52213__$1;
(statearr_52253_52287[(1)] = (11));

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
});})(c__51025__auto___52259,mults,ensure_mult,p))
;
return ((function (switch__50721__auto__,c__51025__auto___52259,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__50722__auto__ = null;
var cljs$core$async$state_machine__50722__auto____0 = (function (){
var statearr_52254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52254[(0)] = cljs$core$async$state_machine__50722__auto__);

(statearr_52254[(1)] = (1));

return statearr_52254;
});
var cljs$core$async$state_machine__50722__auto____1 = (function (state_52213){
while(true){
var ret_value__50723__auto__ = (function (){try{while(true){
var result__50724__auto__ = switch__50721__auto__.call(null,state_52213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50724__auto__;
}
break;
}
}catch (e52255){if((e52255 instanceof Object)){
var ex__50725__auto__ = e52255;
var statearr_52256_52288 = state_52213;
(statearr_52256_52288[(5)] = ex__50725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52289 = state_52213;
state_52213 = G__52289;
continue;
} else {
return ret_value__50723__auto__;
}
break;
}
});
cljs$core$async$state_machine__50722__auto__ = function(state_52213){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50722__auto____1.call(this,state_52213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50722__auto____0;
cljs$core$async$state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50722__auto____1;
return cljs$core$async$state_machine__50722__auto__;
})()
;})(switch__50721__auto__,c__51025__auto___52259,mults,ensure_mult,p))
})();
var state__51027__auto__ = (function (){var statearr_52257 = f__51026__auto__.call(null);
(statearr_52257[(6)] = c__51025__auto___52259);

return statearr_52257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51027__auto__);
});})(c__51025__auto___52259,mults,ensure_mult,p))
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
var G__52291 = arguments.length;
switch (G__52291) {
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
var G__52294 = arguments.length;
switch (G__52294) {
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
var G__52297 = arguments.length;
switch (G__52297) {
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
var c__51025__auto___52364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51025__auto___52364,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__51026__auto__ = (function (){var switch__50721__auto__ = ((function (c__51025__auto___52364,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_52336){
var state_val_52337 = (state_52336[(1)]);
if((state_val_52337 === (7))){
var state_52336__$1 = state_52336;
var statearr_52338_52365 = state_52336__$1;
(statearr_52338_52365[(2)] = null);

(statearr_52338_52365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52337 === (1))){
var state_52336__$1 = state_52336;
var statearr_52339_52366 = state_52336__$1;
(statearr_52339_52366[(2)] = null);

(statearr_52339_52366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52337 === (4))){
var inst_52300 = (state_52336[(7)]);
var inst_52302 = (inst_52300 < cnt);
var state_52336__$1 = state_52336;
if(cljs.core.truth_(inst_52302)){
var statearr_52340_52367 = state_52336__$1;
(statearr_52340_52367[(1)] = (6));

} else {
var statearr_52341_52368 = state_52336__$1;
(statearr_52341_52368[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52337 === (15))){
var inst_52332 = (state_52336[(2)]);
var state_52336__$1 = state_52336;
var statearr_52342_52369 = state_52336__$1;
(statearr_52342_52369[(2)] = inst_52332);

(statearr_52342_52369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52337 === (13))){
var inst_52325 = cljs.core.async.close_BANG_.call(null,out);
var state_52336__$1 = state_52336;
var statearr_52343_52370 = state_52336__$1;
(statearr_52343_52370[(2)] = inst_52325);

(statearr_52343_52370[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52337 === (6))){
var state_52336__$1 = state_52336;
var statearr_52344_52371 = state_52336__$1;
(statearr_52344_52371[(2)] = null);

(statearr_52344_52371[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52337 === (3))){
var inst_52334 = (state_52336[(2)]);
var state_52336__$1 = state_52336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52336__$1,inst_52334);
} else {
if((state_val_52337 === (12))){
var inst_52322 = (state_52336[(8)]);
var inst_52322__$1 = (state_52336[(2)]);
var inst_52323 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_52322__$1);
var state_52336__$1 = (function (){var statearr_52345 = state_52336;
(statearr_52345[(8)] = inst_52322__$1);

return statearr_52345;
})();
if(cljs.core.truth_(inst_52323)){
var statearr_52346_52372 = state_52336__$1;
(statearr_52346_52372[(1)] = (13));

} else {
var statearr_52347_52373 = state_52336__$1;
(statearr_52347_52373[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52337 === (2))){
var inst_52299 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_52300 = (0);
var state_52336__$1 = (function (){var statearr_52348 = state_52336;
(statearr_52348[(7)] = inst_52300);

(statearr_52348[(9)] = inst_52299);

return statearr_52348;
})();
var statearr_52349_52374 = state_52336__$1;
(statearr_52349_52374[(2)] = null);

(statearr_52349_52374[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52337 === (11))){
var inst_52300 = (state_52336[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_52336,(10),Object,null,(9));
var inst_52309 = chs__$1.call(null,inst_52300);
var inst_52310 = done.call(null,inst_52300);
var inst_52311 = cljs.core.async.take_BANG_.call(null,inst_52309,inst_52310);
var state_52336__$1 = state_52336;
var statearr_52350_52375 = state_52336__$1;
(statearr_52350_52375[(2)] = inst_52311);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52336__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52337 === (9))){
var inst_52300 = (state_52336[(7)]);
var inst_52313 = (state_52336[(2)]);
var inst_52314 = (inst_52300 + (1));
var inst_52300__$1 = inst_52314;
var state_52336__$1 = (function (){var statearr_52351 = state_52336;
(statearr_52351[(7)] = inst_52300__$1);

(statearr_52351[(10)] = inst_52313);

return statearr_52351;
})();
var statearr_52352_52376 = state_52336__$1;
(statearr_52352_52376[(2)] = null);

(statearr_52352_52376[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52337 === (5))){
var inst_52320 = (state_52336[(2)]);
var state_52336__$1 = (function (){var statearr_52353 = state_52336;
(statearr_52353[(11)] = inst_52320);

return statearr_52353;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52336__$1,(12),dchan);
} else {
if((state_val_52337 === (14))){
var inst_52322 = (state_52336[(8)]);
var inst_52327 = cljs.core.apply.call(null,f,inst_52322);
var state_52336__$1 = state_52336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52336__$1,(16),out,inst_52327);
} else {
if((state_val_52337 === (16))){
var inst_52329 = (state_52336[(2)]);
var state_52336__$1 = (function (){var statearr_52354 = state_52336;
(statearr_52354[(12)] = inst_52329);

return statearr_52354;
})();
var statearr_52355_52377 = state_52336__$1;
(statearr_52355_52377[(2)] = null);

(statearr_52355_52377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52337 === (10))){
var inst_52304 = (state_52336[(2)]);
var inst_52305 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_52336__$1 = (function (){var statearr_52356 = state_52336;
(statearr_52356[(13)] = inst_52304);

return statearr_52356;
})();
var statearr_52357_52378 = state_52336__$1;
(statearr_52357_52378[(2)] = inst_52305);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52336__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52337 === (8))){
var inst_52318 = (state_52336[(2)]);
var state_52336__$1 = state_52336;
var statearr_52358_52379 = state_52336__$1;
(statearr_52358_52379[(2)] = inst_52318);

(statearr_52358_52379[(1)] = (5));


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
});})(c__51025__auto___52364,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__50721__auto__,c__51025__auto___52364,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__50722__auto__ = null;
var cljs$core$async$state_machine__50722__auto____0 = (function (){
var statearr_52359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52359[(0)] = cljs$core$async$state_machine__50722__auto__);

(statearr_52359[(1)] = (1));

return statearr_52359;
});
var cljs$core$async$state_machine__50722__auto____1 = (function (state_52336){
while(true){
var ret_value__50723__auto__ = (function (){try{while(true){
var result__50724__auto__ = switch__50721__auto__.call(null,state_52336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50724__auto__;
}
break;
}
}catch (e52360){if((e52360 instanceof Object)){
var ex__50725__auto__ = e52360;
var statearr_52361_52380 = state_52336;
(statearr_52361_52380[(5)] = ex__50725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52381 = state_52336;
state_52336 = G__52381;
continue;
} else {
return ret_value__50723__auto__;
}
break;
}
});
cljs$core$async$state_machine__50722__auto__ = function(state_52336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50722__auto____1.call(this,state_52336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50722__auto____0;
cljs$core$async$state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50722__auto____1;
return cljs$core$async$state_machine__50722__auto__;
})()
;})(switch__50721__auto__,c__51025__auto___52364,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__51027__auto__ = (function (){var statearr_52362 = f__51026__auto__.call(null);
(statearr_52362[(6)] = c__51025__auto___52364);

return statearr_52362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51027__auto__);
});})(c__51025__auto___52364,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__52384 = arguments.length;
switch (G__52384) {
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
var c__51025__auto___52438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51025__auto___52438,out){
return (function (){
var f__51026__auto__ = (function (){var switch__50721__auto__ = ((function (c__51025__auto___52438,out){
return (function (state_52416){
var state_val_52417 = (state_52416[(1)]);
if((state_val_52417 === (7))){
var inst_52396 = (state_52416[(7)]);
var inst_52395 = (state_52416[(8)]);
var inst_52395__$1 = (state_52416[(2)]);
var inst_52396__$1 = cljs.core.nth.call(null,inst_52395__$1,(0),null);
var inst_52397 = cljs.core.nth.call(null,inst_52395__$1,(1),null);
var inst_52398 = (inst_52396__$1 == null);
var state_52416__$1 = (function (){var statearr_52418 = state_52416;
(statearr_52418[(7)] = inst_52396__$1);

(statearr_52418[(8)] = inst_52395__$1);

(statearr_52418[(9)] = inst_52397);

return statearr_52418;
})();
if(cljs.core.truth_(inst_52398)){
var statearr_52419_52439 = state_52416__$1;
(statearr_52419_52439[(1)] = (8));

} else {
var statearr_52420_52440 = state_52416__$1;
(statearr_52420_52440[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (1))){
var inst_52385 = cljs.core.vec.call(null,chs);
var inst_52386 = inst_52385;
var state_52416__$1 = (function (){var statearr_52421 = state_52416;
(statearr_52421[(10)] = inst_52386);

return statearr_52421;
})();
var statearr_52422_52441 = state_52416__$1;
(statearr_52422_52441[(2)] = null);

(statearr_52422_52441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (4))){
var inst_52386 = (state_52416[(10)]);
var state_52416__$1 = state_52416;
return cljs.core.async.ioc_alts_BANG_.call(null,state_52416__$1,(7),inst_52386);
} else {
if((state_val_52417 === (6))){
var inst_52412 = (state_52416[(2)]);
var state_52416__$1 = state_52416;
var statearr_52423_52442 = state_52416__$1;
(statearr_52423_52442[(2)] = inst_52412);

(statearr_52423_52442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (3))){
var inst_52414 = (state_52416[(2)]);
var state_52416__$1 = state_52416;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52416__$1,inst_52414);
} else {
if((state_val_52417 === (2))){
var inst_52386 = (state_52416[(10)]);
var inst_52388 = cljs.core.count.call(null,inst_52386);
var inst_52389 = (inst_52388 > (0));
var state_52416__$1 = state_52416;
if(cljs.core.truth_(inst_52389)){
var statearr_52425_52443 = state_52416__$1;
(statearr_52425_52443[(1)] = (4));

} else {
var statearr_52426_52444 = state_52416__$1;
(statearr_52426_52444[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (11))){
var inst_52386 = (state_52416[(10)]);
var inst_52405 = (state_52416[(2)]);
var tmp52424 = inst_52386;
var inst_52386__$1 = tmp52424;
var state_52416__$1 = (function (){var statearr_52427 = state_52416;
(statearr_52427[(11)] = inst_52405);

(statearr_52427[(10)] = inst_52386__$1);

return statearr_52427;
})();
var statearr_52428_52445 = state_52416__$1;
(statearr_52428_52445[(2)] = null);

(statearr_52428_52445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (9))){
var inst_52396 = (state_52416[(7)]);
var state_52416__$1 = state_52416;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52416__$1,(11),out,inst_52396);
} else {
if((state_val_52417 === (5))){
var inst_52410 = cljs.core.async.close_BANG_.call(null,out);
var state_52416__$1 = state_52416;
var statearr_52429_52446 = state_52416__$1;
(statearr_52429_52446[(2)] = inst_52410);

(statearr_52429_52446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (10))){
var inst_52408 = (state_52416[(2)]);
var state_52416__$1 = state_52416;
var statearr_52430_52447 = state_52416__$1;
(statearr_52430_52447[(2)] = inst_52408);

(statearr_52430_52447[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (8))){
var inst_52396 = (state_52416[(7)]);
var inst_52395 = (state_52416[(8)]);
var inst_52397 = (state_52416[(9)]);
var inst_52386 = (state_52416[(10)]);
var inst_52400 = (function (){var cs = inst_52386;
var vec__52391 = inst_52395;
var v = inst_52396;
var c = inst_52397;
return ((function (cs,vec__52391,v,c,inst_52396,inst_52395,inst_52397,inst_52386,state_val_52417,c__51025__auto___52438,out){
return (function (p1__52382_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__52382_SHARP_);
});
;})(cs,vec__52391,v,c,inst_52396,inst_52395,inst_52397,inst_52386,state_val_52417,c__51025__auto___52438,out))
})();
var inst_52401 = cljs.core.filterv.call(null,inst_52400,inst_52386);
var inst_52386__$1 = inst_52401;
var state_52416__$1 = (function (){var statearr_52431 = state_52416;
(statearr_52431[(10)] = inst_52386__$1);

return statearr_52431;
})();
var statearr_52432_52448 = state_52416__$1;
(statearr_52432_52448[(2)] = null);

(statearr_52432_52448[(1)] = (2));


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
});})(c__51025__auto___52438,out))
;
return ((function (switch__50721__auto__,c__51025__auto___52438,out){
return (function() {
var cljs$core$async$state_machine__50722__auto__ = null;
var cljs$core$async$state_machine__50722__auto____0 = (function (){
var statearr_52433 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52433[(0)] = cljs$core$async$state_machine__50722__auto__);

(statearr_52433[(1)] = (1));

return statearr_52433;
});
var cljs$core$async$state_machine__50722__auto____1 = (function (state_52416){
while(true){
var ret_value__50723__auto__ = (function (){try{while(true){
var result__50724__auto__ = switch__50721__auto__.call(null,state_52416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50724__auto__;
}
break;
}
}catch (e52434){if((e52434 instanceof Object)){
var ex__50725__auto__ = e52434;
var statearr_52435_52449 = state_52416;
(statearr_52435_52449[(5)] = ex__50725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52450 = state_52416;
state_52416 = G__52450;
continue;
} else {
return ret_value__50723__auto__;
}
break;
}
});
cljs$core$async$state_machine__50722__auto__ = function(state_52416){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50722__auto____1.call(this,state_52416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50722__auto____0;
cljs$core$async$state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50722__auto____1;
return cljs$core$async$state_machine__50722__auto__;
})()
;})(switch__50721__auto__,c__51025__auto___52438,out))
})();
var state__51027__auto__ = (function (){var statearr_52436 = f__51026__auto__.call(null);
(statearr_52436[(6)] = c__51025__auto___52438);

return statearr_52436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51027__auto__);
});})(c__51025__auto___52438,out))
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
var G__52452 = arguments.length;
switch (G__52452) {
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
var c__51025__auto___52497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51025__auto___52497,out){
return (function (){
var f__51026__auto__ = (function (){var switch__50721__auto__ = ((function (c__51025__auto___52497,out){
return (function (state_52476){
var state_val_52477 = (state_52476[(1)]);
if((state_val_52477 === (7))){
var inst_52458 = (state_52476[(7)]);
var inst_52458__$1 = (state_52476[(2)]);
var inst_52459 = (inst_52458__$1 == null);
var inst_52460 = cljs.core.not.call(null,inst_52459);
var state_52476__$1 = (function (){var statearr_52478 = state_52476;
(statearr_52478[(7)] = inst_52458__$1);

return statearr_52478;
})();
if(inst_52460){
var statearr_52479_52498 = state_52476__$1;
(statearr_52479_52498[(1)] = (8));

} else {
var statearr_52480_52499 = state_52476__$1;
(statearr_52480_52499[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (1))){
var inst_52453 = (0);
var state_52476__$1 = (function (){var statearr_52481 = state_52476;
(statearr_52481[(8)] = inst_52453);

return statearr_52481;
})();
var statearr_52482_52500 = state_52476__$1;
(statearr_52482_52500[(2)] = null);

(statearr_52482_52500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (4))){
var state_52476__$1 = state_52476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52476__$1,(7),ch);
} else {
if((state_val_52477 === (6))){
var inst_52471 = (state_52476[(2)]);
var state_52476__$1 = state_52476;
var statearr_52483_52501 = state_52476__$1;
(statearr_52483_52501[(2)] = inst_52471);

(statearr_52483_52501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (3))){
var inst_52473 = (state_52476[(2)]);
var inst_52474 = cljs.core.async.close_BANG_.call(null,out);
var state_52476__$1 = (function (){var statearr_52484 = state_52476;
(statearr_52484[(9)] = inst_52473);

return statearr_52484;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52476__$1,inst_52474);
} else {
if((state_val_52477 === (2))){
var inst_52453 = (state_52476[(8)]);
var inst_52455 = (inst_52453 < n);
var state_52476__$1 = state_52476;
if(cljs.core.truth_(inst_52455)){
var statearr_52485_52502 = state_52476__$1;
(statearr_52485_52502[(1)] = (4));

} else {
var statearr_52486_52503 = state_52476__$1;
(statearr_52486_52503[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (11))){
var inst_52453 = (state_52476[(8)]);
var inst_52463 = (state_52476[(2)]);
var inst_52464 = (inst_52453 + (1));
var inst_52453__$1 = inst_52464;
var state_52476__$1 = (function (){var statearr_52487 = state_52476;
(statearr_52487[(8)] = inst_52453__$1);

(statearr_52487[(10)] = inst_52463);

return statearr_52487;
})();
var statearr_52488_52504 = state_52476__$1;
(statearr_52488_52504[(2)] = null);

(statearr_52488_52504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (9))){
var state_52476__$1 = state_52476;
var statearr_52489_52505 = state_52476__$1;
(statearr_52489_52505[(2)] = null);

(statearr_52489_52505[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (5))){
var state_52476__$1 = state_52476;
var statearr_52490_52506 = state_52476__$1;
(statearr_52490_52506[(2)] = null);

(statearr_52490_52506[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (10))){
var inst_52468 = (state_52476[(2)]);
var state_52476__$1 = state_52476;
var statearr_52491_52507 = state_52476__$1;
(statearr_52491_52507[(2)] = inst_52468);

(statearr_52491_52507[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (8))){
var inst_52458 = (state_52476[(7)]);
var state_52476__$1 = state_52476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52476__$1,(11),out,inst_52458);
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
});})(c__51025__auto___52497,out))
;
return ((function (switch__50721__auto__,c__51025__auto___52497,out){
return (function() {
var cljs$core$async$state_machine__50722__auto__ = null;
var cljs$core$async$state_machine__50722__auto____0 = (function (){
var statearr_52492 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52492[(0)] = cljs$core$async$state_machine__50722__auto__);

(statearr_52492[(1)] = (1));

return statearr_52492;
});
var cljs$core$async$state_machine__50722__auto____1 = (function (state_52476){
while(true){
var ret_value__50723__auto__ = (function (){try{while(true){
var result__50724__auto__ = switch__50721__auto__.call(null,state_52476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50724__auto__;
}
break;
}
}catch (e52493){if((e52493 instanceof Object)){
var ex__50725__auto__ = e52493;
var statearr_52494_52508 = state_52476;
(statearr_52494_52508[(5)] = ex__50725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52509 = state_52476;
state_52476 = G__52509;
continue;
} else {
return ret_value__50723__auto__;
}
break;
}
});
cljs$core$async$state_machine__50722__auto__ = function(state_52476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50722__auto____1.call(this,state_52476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50722__auto____0;
cljs$core$async$state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50722__auto____1;
return cljs$core$async$state_machine__50722__auto__;
})()
;})(switch__50721__auto__,c__51025__auto___52497,out))
})();
var state__51027__auto__ = (function (){var statearr_52495 = f__51026__auto__.call(null);
(statearr_52495[(6)] = c__51025__auto___52497);

return statearr_52495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51027__auto__);
});})(c__51025__auto___52497,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52511 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52511 = (function (f,ch,meta52512){
this.f = f;
this.ch = ch;
this.meta52512 = meta52512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52513,meta52512__$1){
var self__ = this;
var _52513__$1 = this;
return (new cljs.core.async.t_cljs$core$async52511(self__.f,self__.ch,meta52512__$1));
});

cljs.core.async.t_cljs$core$async52511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52513){
var self__ = this;
var _52513__$1 = this;
return self__.meta52512;
});

cljs.core.async.t_cljs$core$async52511.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52511.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52511.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52511.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52511.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52514 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52514 = (function (f,ch,meta52512,_,fn1,meta52515){
this.f = f;
this.ch = ch;
this.meta52512 = meta52512;
this._ = _;
this.fn1 = fn1;
this.meta52515 = meta52515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_52516,meta52515__$1){
var self__ = this;
var _52516__$1 = this;
return (new cljs.core.async.t_cljs$core$async52514(self__.f,self__.ch,self__.meta52512,self__._,self__.fn1,meta52515__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async52514.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_52516){
var self__ = this;
var _52516__$1 = this;
return self__.meta52515;
});})(___$1))
;

cljs.core.async.t_cljs$core$async52514.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52514.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async52514.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async52514.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__52510_SHARP_){
return f1.call(null,(((p1__52510_SHARP_ == null))?null:self__.f.call(null,p1__52510_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async52514.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52512","meta52512",-1593083052,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async52511","cljs.core.async/t_cljs$core$async52511",-1243550133,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta52515","meta52515",-372822200,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async52514.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52514.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52514";

cljs.core.async.t_cljs$core$async52514.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async52514");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52514.
 */
cljs.core.async.__GT_t_cljs$core$async52514 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52514(f__$1,ch__$1,meta52512__$1,___$2,fn1__$1,meta52515){
return (new cljs.core.async.t_cljs$core$async52514(f__$1,ch__$1,meta52512__$1,___$2,fn1__$1,meta52515));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async52514(self__.f,self__.ch,self__.meta52512,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async52511.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52511.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async52511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52512","meta52512",-1593083052,null)], null);
});

cljs.core.async.t_cljs$core$async52511.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52511";

cljs.core.async.t_cljs$core$async52511.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async52511");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52511.
 */
cljs.core.async.__GT_t_cljs$core$async52511 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52511(f__$1,ch__$1,meta52512){
return (new cljs.core.async.t_cljs$core$async52511(f__$1,ch__$1,meta52512));
});

}

return (new cljs.core.async.t_cljs$core$async52511(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52517 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52517 = (function (f,ch,meta52518){
this.f = f;
this.ch = ch;
this.meta52518 = meta52518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52519,meta52518__$1){
var self__ = this;
var _52519__$1 = this;
return (new cljs.core.async.t_cljs$core$async52517(self__.f,self__.ch,meta52518__$1));
});

cljs.core.async.t_cljs$core$async52517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52519){
var self__ = this;
var _52519__$1 = this;
return self__.meta52518;
});

cljs.core.async.t_cljs$core$async52517.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52517.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52517.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52517.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async52517.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52517.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async52517.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52518","meta52518",-1073494167,null)], null);
});

cljs.core.async.t_cljs$core$async52517.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52517.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52517";

cljs.core.async.t_cljs$core$async52517.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async52517");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52517.
 */
cljs.core.async.__GT_t_cljs$core$async52517 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async52517(f__$1,ch__$1,meta52518){
return (new cljs.core.async.t_cljs$core$async52517(f__$1,ch__$1,meta52518));
});

}

return (new cljs.core.async.t_cljs$core$async52517(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52520 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52520 = (function (p,ch,meta52521){
this.p = p;
this.ch = ch;
this.meta52521 = meta52521;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52522,meta52521__$1){
var self__ = this;
var _52522__$1 = this;
return (new cljs.core.async.t_cljs$core$async52520(self__.p,self__.ch,meta52521__$1));
});

cljs.core.async.t_cljs$core$async52520.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52522){
var self__ = this;
var _52522__$1 = this;
return self__.meta52521;
});

cljs.core.async.t_cljs$core$async52520.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52520.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52520.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52520.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52520.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async52520.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52520.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async52520.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52521","meta52521",-1140208703,null)], null);
});

cljs.core.async.t_cljs$core$async52520.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52520.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52520";

cljs.core.async.t_cljs$core$async52520.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async52520");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52520.
 */
cljs.core.async.__GT_t_cljs$core$async52520 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async52520(p__$1,ch__$1,meta52521){
return (new cljs.core.async.t_cljs$core$async52520(p__$1,ch__$1,meta52521));
});

}

return (new cljs.core.async.t_cljs$core$async52520(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__52524 = arguments.length;
switch (G__52524) {
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
var c__51025__auto___52564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51025__auto___52564,out){
return (function (){
var f__51026__auto__ = (function (){var switch__50721__auto__ = ((function (c__51025__auto___52564,out){
return (function (state_52545){
var state_val_52546 = (state_52545[(1)]);
if((state_val_52546 === (7))){
var inst_52541 = (state_52545[(2)]);
var state_52545__$1 = state_52545;
var statearr_52547_52565 = state_52545__$1;
(statearr_52547_52565[(2)] = inst_52541);

(statearr_52547_52565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52546 === (1))){
var state_52545__$1 = state_52545;
var statearr_52548_52566 = state_52545__$1;
(statearr_52548_52566[(2)] = null);

(statearr_52548_52566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52546 === (4))){
var inst_52527 = (state_52545[(7)]);
var inst_52527__$1 = (state_52545[(2)]);
var inst_52528 = (inst_52527__$1 == null);
var state_52545__$1 = (function (){var statearr_52549 = state_52545;
(statearr_52549[(7)] = inst_52527__$1);

return statearr_52549;
})();
if(cljs.core.truth_(inst_52528)){
var statearr_52550_52567 = state_52545__$1;
(statearr_52550_52567[(1)] = (5));

} else {
var statearr_52551_52568 = state_52545__$1;
(statearr_52551_52568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52546 === (6))){
var inst_52527 = (state_52545[(7)]);
var inst_52532 = p.call(null,inst_52527);
var state_52545__$1 = state_52545;
if(cljs.core.truth_(inst_52532)){
var statearr_52552_52569 = state_52545__$1;
(statearr_52552_52569[(1)] = (8));

} else {
var statearr_52553_52570 = state_52545__$1;
(statearr_52553_52570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52546 === (3))){
var inst_52543 = (state_52545[(2)]);
var state_52545__$1 = state_52545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52545__$1,inst_52543);
} else {
if((state_val_52546 === (2))){
var state_52545__$1 = state_52545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52545__$1,(4),ch);
} else {
if((state_val_52546 === (11))){
var inst_52535 = (state_52545[(2)]);
var state_52545__$1 = state_52545;
var statearr_52554_52571 = state_52545__$1;
(statearr_52554_52571[(2)] = inst_52535);

(statearr_52554_52571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52546 === (9))){
var state_52545__$1 = state_52545;
var statearr_52555_52572 = state_52545__$1;
(statearr_52555_52572[(2)] = null);

(statearr_52555_52572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52546 === (5))){
var inst_52530 = cljs.core.async.close_BANG_.call(null,out);
var state_52545__$1 = state_52545;
var statearr_52556_52573 = state_52545__$1;
(statearr_52556_52573[(2)] = inst_52530);

(statearr_52556_52573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52546 === (10))){
var inst_52538 = (state_52545[(2)]);
var state_52545__$1 = (function (){var statearr_52557 = state_52545;
(statearr_52557[(8)] = inst_52538);

return statearr_52557;
})();
var statearr_52558_52574 = state_52545__$1;
(statearr_52558_52574[(2)] = null);

(statearr_52558_52574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52546 === (8))){
var inst_52527 = (state_52545[(7)]);
var state_52545__$1 = state_52545;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52545__$1,(11),out,inst_52527);
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
});})(c__51025__auto___52564,out))
;
return ((function (switch__50721__auto__,c__51025__auto___52564,out){
return (function() {
var cljs$core$async$state_machine__50722__auto__ = null;
var cljs$core$async$state_machine__50722__auto____0 = (function (){
var statearr_52559 = [null,null,null,null,null,null,null,null,null];
(statearr_52559[(0)] = cljs$core$async$state_machine__50722__auto__);

(statearr_52559[(1)] = (1));

return statearr_52559;
});
var cljs$core$async$state_machine__50722__auto____1 = (function (state_52545){
while(true){
var ret_value__50723__auto__ = (function (){try{while(true){
var result__50724__auto__ = switch__50721__auto__.call(null,state_52545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50724__auto__;
}
break;
}
}catch (e52560){if((e52560 instanceof Object)){
var ex__50725__auto__ = e52560;
var statearr_52561_52575 = state_52545;
(statearr_52561_52575[(5)] = ex__50725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52576 = state_52545;
state_52545 = G__52576;
continue;
} else {
return ret_value__50723__auto__;
}
break;
}
});
cljs$core$async$state_machine__50722__auto__ = function(state_52545){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50722__auto____1.call(this,state_52545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50722__auto____0;
cljs$core$async$state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50722__auto____1;
return cljs$core$async$state_machine__50722__auto__;
})()
;})(switch__50721__auto__,c__51025__auto___52564,out))
})();
var state__51027__auto__ = (function (){var statearr_52562 = f__51026__auto__.call(null);
(statearr_52562[(6)] = c__51025__auto___52564);

return statearr_52562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51027__auto__);
});})(c__51025__auto___52564,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__52578 = arguments.length;
switch (G__52578) {
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
var c__51025__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51025__auto__){
return (function (){
var f__51026__auto__ = (function (){var switch__50721__auto__ = ((function (c__51025__auto__){
return (function (state_52641){
var state_val_52642 = (state_52641[(1)]);
if((state_val_52642 === (7))){
var inst_52637 = (state_52641[(2)]);
var state_52641__$1 = state_52641;
var statearr_52643_52681 = state_52641__$1;
(statearr_52643_52681[(2)] = inst_52637);

(statearr_52643_52681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52642 === (20))){
var inst_52607 = (state_52641[(7)]);
var inst_52618 = (state_52641[(2)]);
var inst_52619 = cljs.core.next.call(null,inst_52607);
var inst_52593 = inst_52619;
var inst_52594 = null;
var inst_52595 = (0);
var inst_52596 = (0);
var state_52641__$1 = (function (){var statearr_52644 = state_52641;
(statearr_52644[(8)] = inst_52593);

(statearr_52644[(9)] = inst_52618);

(statearr_52644[(10)] = inst_52595);

(statearr_52644[(11)] = inst_52594);

(statearr_52644[(12)] = inst_52596);

return statearr_52644;
})();
var statearr_52645_52682 = state_52641__$1;
(statearr_52645_52682[(2)] = null);

(statearr_52645_52682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52642 === (1))){
var state_52641__$1 = state_52641;
var statearr_52646_52683 = state_52641__$1;
(statearr_52646_52683[(2)] = null);

(statearr_52646_52683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52642 === (4))){
var inst_52582 = (state_52641[(13)]);
var inst_52582__$1 = (state_52641[(2)]);
var inst_52583 = (inst_52582__$1 == null);
var state_52641__$1 = (function (){var statearr_52647 = state_52641;
(statearr_52647[(13)] = inst_52582__$1);

return statearr_52647;
})();
if(cljs.core.truth_(inst_52583)){
var statearr_52648_52684 = state_52641__$1;
(statearr_52648_52684[(1)] = (5));

} else {
var statearr_52649_52685 = state_52641__$1;
(statearr_52649_52685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52642 === (15))){
var state_52641__$1 = state_52641;
var statearr_52653_52686 = state_52641__$1;
(statearr_52653_52686[(2)] = null);

(statearr_52653_52686[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52642 === (21))){
var state_52641__$1 = state_52641;
var statearr_52654_52687 = state_52641__$1;
(statearr_52654_52687[(2)] = null);

(statearr_52654_52687[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52642 === (13))){
var inst_52593 = (state_52641[(8)]);
var inst_52595 = (state_52641[(10)]);
var inst_52594 = (state_52641[(11)]);
var inst_52596 = (state_52641[(12)]);
var inst_52603 = (state_52641[(2)]);
var inst_52604 = (inst_52596 + (1));
var tmp52650 = inst_52593;
var tmp52651 = inst_52595;
var tmp52652 = inst_52594;
var inst_52593__$1 = tmp52650;
var inst_52594__$1 = tmp52652;
var inst_52595__$1 = tmp52651;
var inst_52596__$1 = inst_52604;
var state_52641__$1 = (function (){var statearr_52655 = state_52641;
(statearr_52655[(14)] = inst_52603);

(statearr_52655[(8)] = inst_52593__$1);

(statearr_52655[(10)] = inst_52595__$1);

(statearr_52655[(11)] = inst_52594__$1);

(statearr_52655[(12)] = inst_52596__$1);

return statearr_52655;
})();
var statearr_52656_52688 = state_52641__$1;
(statearr_52656_52688[(2)] = null);

(statearr_52656_52688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52642 === (22))){
var state_52641__$1 = state_52641;
var statearr_52657_52689 = state_52641__$1;
(statearr_52657_52689[(2)] = null);

(statearr_52657_52689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52642 === (6))){
var inst_52582 = (state_52641[(13)]);
var inst_52591 = f.call(null,inst_52582);
var inst_52592 = cljs.core.seq.call(null,inst_52591);
var inst_52593 = inst_52592;
var inst_52594 = null;
var inst_52595 = (0);
var inst_52596 = (0);
var state_52641__$1 = (function (){var statearr_52658 = state_52641;
(statearr_52658[(8)] = inst_52593);

(statearr_52658[(10)] = inst_52595);

(statearr_52658[(11)] = inst_52594);

(statearr_52658[(12)] = inst_52596);

return statearr_52658;
})();
var statearr_52659_52690 = state_52641__$1;
(statearr_52659_52690[(2)] = null);

(statearr_52659_52690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52642 === (17))){
var inst_52607 = (state_52641[(7)]);
var inst_52611 = cljs.core.chunk_first.call(null,inst_52607);
var inst_52612 = cljs.core.chunk_rest.call(null,inst_52607);
var inst_52613 = cljs.core.count.call(null,inst_52611);
var inst_52593 = inst_52612;
var inst_52594 = inst_52611;
var inst_52595 = inst_52613;
var inst_52596 = (0);
var state_52641__$1 = (function (){var statearr_52660 = state_52641;
(statearr_52660[(8)] = inst_52593);

(statearr_52660[(10)] = inst_52595);

(statearr_52660[(11)] = inst_52594);

(statearr_52660[(12)] = inst_52596);

return statearr_52660;
})();
var statearr_52661_52691 = state_52641__$1;
(statearr_52661_52691[(2)] = null);

(statearr_52661_52691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52642 === (3))){
var inst_52639 = (state_52641[(2)]);
var state_52641__$1 = state_52641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52641__$1,inst_52639);
} else {
if((state_val_52642 === (12))){
var inst_52627 = (state_52641[(2)]);
var state_52641__$1 = state_52641;
var statearr_52662_52692 = state_52641__$1;
(statearr_52662_52692[(2)] = inst_52627);

(statearr_52662_52692[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52642 === (2))){
var state_52641__$1 = state_52641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52641__$1,(4),in$);
} else {
if((state_val_52642 === (23))){
var inst_52635 = (state_52641[(2)]);
var state_52641__$1 = state_52641;
var statearr_52663_52693 = state_52641__$1;
(statearr_52663_52693[(2)] = inst_52635);

(statearr_52663_52693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52642 === (19))){
var inst_52622 = (state_52641[(2)]);
var state_52641__$1 = state_52641;
var statearr_52664_52694 = state_52641__$1;
(statearr_52664_52694[(2)] = inst_52622);

(statearr_52664_52694[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52642 === (11))){
var inst_52593 = (state_52641[(8)]);
var inst_52607 = (state_52641[(7)]);
var inst_52607__$1 = cljs.core.seq.call(null,inst_52593);
var state_52641__$1 = (function (){var statearr_52665 = state_52641;
(statearr_52665[(7)] = inst_52607__$1);

return statearr_52665;
})();
if(inst_52607__$1){
var statearr_52666_52695 = state_52641__$1;
(statearr_52666_52695[(1)] = (14));

} else {
var statearr_52667_52696 = state_52641__$1;
(statearr_52667_52696[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52642 === (9))){
var inst_52629 = (state_52641[(2)]);
var inst_52630 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_52641__$1 = (function (){var statearr_52668 = state_52641;
(statearr_52668[(15)] = inst_52629);

return statearr_52668;
})();
if(cljs.core.truth_(inst_52630)){
var statearr_52669_52697 = state_52641__$1;
(statearr_52669_52697[(1)] = (21));

} else {
var statearr_52670_52698 = state_52641__$1;
(statearr_52670_52698[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52642 === (5))){
var inst_52585 = cljs.core.async.close_BANG_.call(null,out);
var state_52641__$1 = state_52641;
var statearr_52671_52699 = state_52641__$1;
(statearr_52671_52699[(2)] = inst_52585);

(statearr_52671_52699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52642 === (14))){
var inst_52607 = (state_52641[(7)]);
var inst_52609 = cljs.core.chunked_seq_QMARK_.call(null,inst_52607);
var state_52641__$1 = state_52641;
if(inst_52609){
var statearr_52672_52700 = state_52641__$1;
(statearr_52672_52700[(1)] = (17));

} else {
var statearr_52673_52701 = state_52641__$1;
(statearr_52673_52701[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52642 === (16))){
var inst_52625 = (state_52641[(2)]);
var state_52641__$1 = state_52641;
var statearr_52674_52702 = state_52641__$1;
(statearr_52674_52702[(2)] = inst_52625);

(statearr_52674_52702[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52642 === (10))){
var inst_52594 = (state_52641[(11)]);
var inst_52596 = (state_52641[(12)]);
var inst_52601 = cljs.core._nth.call(null,inst_52594,inst_52596);
var state_52641__$1 = state_52641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52641__$1,(13),out,inst_52601);
} else {
if((state_val_52642 === (18))){
var inst_52607 = (state_52641[(7)]);
var inst_52616 = cljs.core.first.call(null,inst_52607);
var state_52641__$1 = state_52641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52641__$1,(20),out,inst_52616);
} else {
if((state_val_52642 === (8))){
var inst_52595 = (state_52641[(10)]);
var inst_52596 = (state_52641[(12)]);
var inst_52598 = (inst_52596 < inst_52595);
var inst_52599 = inst_52598;
var state_52641__$1 = state_52641;
if(cljs.core.truth_(inst_52599)){
var statearr_52675_52703 = state_52641__$1;
(statearr_52675_52703[(1)] = (10));

} else {
var statearr_52676_52704 = state_52641__$1;
(statearr_52676_52704[(1)] = (11));

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
});})(c__51025__auto__))
;
return ((function (switch__50721__auto__,c__51025__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__50722__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__50722__auto____0 = (function (){
var statearr_52677 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52677[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__50722__auto__);

(statearr_52677[(1)] = (1));

return statearr_52677;
});
var cljs$core$async$mapcat_STAR__$_state_machine__50722__auto____1 = (function (state_52641){
while(true){
var ret_value__50723__auto__ = (function (){try{while(true){
var result__50724__auto__ = switch__50721__auto__.call(null,state_52641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50724__auto__;
}
break;
}
}catch (e52678){if((e52678 instanceof Object)){
var ex__50725__auto__ = e52678;
var statearr_52679_52705 = state_52641;
(statearr_52679_52705[(5)] = ex__50725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52706 = state_52641;
state_52641 = G__52706;
continue;
} else {
return ret_value__50723__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__50722__auto__ = function(state_52641){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__50722__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__50722__auto____1.call(this,state_52641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__50722__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__50722__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__50722__auto__;
})()
;})(switch__50721__auto__,c__51025__auto__))
})();
var state__51027__auto__ = (function (){var statearr_52680 = f__51026__auto__.call(null);
(statearr_52680[(6)] = c__51025__auto__);

return statearr_52680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51027__auto__);
});})(c__51025__auto__))
);

return c__51025__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__52708 = arguments.length;
switch (G__52708) {
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
var G__52711 = arguments.length;
switch (G__52711) {
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
var G__52714 = arguments.length;
switch (G__52714) {
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
var c__51025__auto___52761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51025__auto___52761,out){
return (function (){
var f__51026__auto__ = (function (){var switch__50721__auto__ = ((function (c__51025__auto___52761,out){
return (function (state_52738){
var state_val_52739 = (state_52738[(1)]);
if((state_val_52739 === (7))){
var inst_52733 = (state_52738[(2)]);
var state_52738__$1 = state_52738;
var statearr_52740_52762 = state_52738__$1;
(statearr_52740_52762[(2)] = inst_52733);

(statearr_52740_52762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52739 === (1))){
var inst_52715 = null;
var state_52738__$1 = (function (){var statearr_52741 = state_52738;
(statearr_52741[(7)] = inst_52715);

return statearr_52741;
})();
var statearr_52742_52763 = state_52738__$1;
(statearr_52742_52763[(2)] = null);

(statearr_52742_52763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52739 === (4))){
var inst_52718 = (state_52738[(8)]);
var inst_52718__$1 = (state_52738[(2)]);
var inst_52719 = (inst_52718__$1 == null);
var inst_52720 = cljs.core.not.call(null,inst_52719);
var state_52738__$1 = (function (){var statearr_52743 = state_52738;
(statearr_52743[(8)] = inst_52718__$1);

return statearr_52743;
})();
if(inst_52720){
var statearr_52744_52764 = state_52738__$1;
(statearr_52744_52764[(1)] = (5));

} else {
var statearr_52745_52765 = state_52738__$1;
(statearr_52745_52765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52739 === (6))){
var state_52738__$1 = state_52738;
var statearr_52746_52766 = state_52738__$1;
(statearr_52746_52766[(2)] = null);

(statearr_52746_52766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52739 === (3))){
var inst_52735 = (state_52738[(2)]);
var inst_52736 = cljs.core.async.close_BANG_.call(null,out);
var state_52738__$1 = (function (){var statearr_52747 = state_52738;
(statearr_52747[(9)] = inst_52735);

return statearr_52747;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52738__$1,inst_52736);
} else {
if((state_val_52739 === (2))){
var state_52738__$1 = state_52738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52738__$1,(4),ch);
} else {
if((state_val_52739 === (11))){
var inst_52718 = (state_52738[(8)]);
var inst_52727 = (state_52738[(2)]);
var inst_52715 = inst_52718;
var state_52738__$1 = (function (){var statearr_52748 = state_52738;
(statearr_52748[(10)] = inst_52727);

(statearr_52748[(7)] = inst_52715);

return statearr_52748;
})();
var statearr_52749_52767 = state_52738__$1;
(statearr_52749_52767[(2)] = null);

(statearr_52749_52767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52739 === (9))){
var inst_52718 = (state_52738[(8)]);
var state_52738__$1 = state_52738;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52738__$1,(11),out,inst_52718);
} else {
if((state_val_52739 === (5))){
var inst_52718 = (state_52738[(8)]);
var inst_52715 = (state_52738[(7)]);
var inst_52722 = cljs.core._EQ_.call(null,inst_52718,inst_52715);
var state_52738__$1 = state_52738;
if(inst_52722){
var statearr_52751_52768 = state_52738__$1;
(statearr_52751_52768[(1)] = (8));

} else {
var statearr_52752_52769 = state_52738__$1;
(statearr_52752_52769[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52739 === (10))){
var inst_52730 = (state_52738[(2)]);
var state_52738__$1 = state_52738;
var statearr_52753_52770 = state_52738__$1;
(statearr_52753_52770[(2)] = inst_52730);

(statearr_52753_52770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52739 === (8))){
var inst_52715 = (state_52738[(7)]);
var tmp52750 = inst_52715;
var inst_52715__$1 = tmp52750;
var state_52738__$1 = (function (){var statearr_52754 = state_52738;
(statearr_52754[(7)] = inst_52715__$1);

return statearr_52754;
})();
var statearr_52755_52771 = state_52738__$1;
(statearr_52755_52771[(2)] = null);

(statearr_52755_52771[(1)] = (2));


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
});})(c__51025__auto___52761,out))
;
return ((function (switch__50721__auto__,c__51025__auto___52761,out){
return (function() {
var cljs$core$async$state_machine__50722__auto__ = null;
var cljs$core$async$state_machine__50722__auto____0 = (function (){
var statearr_52756 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52756[(0)] = cljs$core$async$state_machine__50722__auto__);

(statearr_52756[(1)] = (1));

return statearr_52756;
});
var cljs$core$async$state_machine__50722__auto____1 = (function (state_52738){
while(true){
var ret_value__50723__auto__ = (function (){try{while(true){
var result__50724__auto__ = switch__50721__auto__.call(null,state_52738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50724__auto__;
}
break;
}
}catch (e52757){if((e52757 instanceof Object)){
var ex__50725__auto__ = e52757;
var statearr_52758_52772 = state_52738;
(statearr_52758_52772[(5)] = ex__50725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52773 = state_52738;
state_52738 = G__52773;
continue;
} else {
return ret_value__50723__auto__;
}
break;
}
});
cljs$core$async$state_machine__50722__auto__ = function(state_52738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50722__auto____1.call(this,state_52738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50722__auto____0;
cljs$core$async$state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50722__auto____1;
return cljs$core$async$state_machine__50722__auto__;
})()
;})(switch__50721__auto__,c__51025__auto___52761,out))
})();
var state__51027__auto__ = (function (){var statearr_52759 = f__51026__auto__.call(null);
(statearr_52759[(6)] = c__51025__auto___52761);

return statearr_52759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51027__auto__);
});})(c__51025__auto___52761,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__52775 = arguments.length;
switch (G__52775) {
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
var c__51025__auto___52841 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51025__auto___52841,out){
return (function (){
var f__51026__auto__ = (function (){var switch__50721__auto__ = ((function (c__51025__auto___52841,out){
return (function (state_52813){
var state_val_52814 = (state_52813[(1)]);
if((state_val_52814 === (7))){
var inst_52809 = (state_52813[(2)]);
var state_52813__$1 = state_52813;
var statearr_52815_52842 = state_52813__$1;
(statearr_52815_52842[(2)] = inst_52809);

(statearr_52815_52842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52814 === (1))){
var inst_52776 = (new Array(n));
var inst_52777 = inst_52776;
var inst_52778 = (0);
var state_52813__$1 = (function (){var statearr_52816 = state_52813;
(statearr_52816[(7)] = inst_52777);

(statearr_52816[(8)] = inst_52778);

return statearr_52816;
})();
var statearr_52817_52843 = state_52813__$1;
(statearr_52817_52843[(2)] = null);

(statearr_52817_52843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52814 === (4))){
var inst_52781 = (state_52813[(9)]);
var inst_52781__$1 = (state_52813[(2)]);
var inst_52782 = (inst_52781__$1 == null);
var inst_52783 = cljs.core.not.call(null,inst_52782);
var state_52813__$1 = (function (){var statearr_52818 = state_52813;
(statearr_52818[(9)] = inst_52781__$1);

return statearr_52818;
})();
if(inst_52783){
var statearr_52819_52844 = state_52813__$1;
(statearr_52819_52844[(1)] = (5));

} else {
var statearr_52820_52845 = state_52813__$1;
(statearr_52820_52845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52814 === (15))){
var inst_52803 = (state_52813[(2)]);
var state_52813__$1 = state_52813;
var statearr_52821_52846 = state_52813__$1;
(statearr_52821_52846[(2)] = inst_52803);

(statearr_52821_52846[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52814 === (13))){
var state_52813__$1 = state_52813;
var statearr_52822_52847 = state_52813__$1;
(statearr_52822_52847[(2)] = null);

(statearr_52822_52847[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52814 === (6))){
var inst_52778 = (state_52813[(8)]);
var inst_52799 = (inst_52778 > (0));
var state_52813__$1 = state_52813;
if(cljs.core.truth_(inst_52799)){
var statearr_52823_52848 = state_52813__$1;
(statearr_52823_52848[(1)] = (12));

} else {
var statearr_52824_52849 = state_52813__$1;
(statearr_52824_52849[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52814 === (3))){
var inst_52811 = (state_52813[(2)]);
var state_52813__$1 = state_52813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52813__$1,inst_52811);
} else {
if((state_val_52814 === (12))){
var inst_52777 = (state_52813[(7)]);
var inst_52801 = cljs.core.vec.call(null,inst_52777);
var state_52813__$1 = state_52813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52813__$1,(15),out,inst_52801);
} else {
if((state_val_52814 === (2))){
var state_52813__$1 = state_52813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52813__$1,(4),ch);
} else {
if((state_val_52814 === (11))){
var inst_52793 = (state_52813[(2)]);
var inst_52794 = (new Array(n));
var inst_52777 = inst_52794;
var inst_52778 = (0);
var state_52813__$1 = (function (){var statearr_52825 = state_52813;
(statearr_52825[(7)] = inst_52777);

(statearr_52825[(8)] = inst_52778);

(statearr_52825[(10)] = inst_52793);

return statearr_52825;
})();
var statearr_52826_52850 = state_52813__$1;
(statearr_52826_52850[(2)] = null);

(statearr_52826_52850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52814 === (9))){
var inst_52777 = (state_52813[(7)]);
var inst_52791 = cljs.core.vec.call(null,inst_52777);
var state_52813__$1 = state_52813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52813__$1,(11),out,inst_52791);
} else {
if((state_val_52814 === (5))){
var inst_52777 = (state_52813[(7)]);
var inst_52786 = (state_52813[(11)]);
var inst_52778 = (state_52813[(8)]);
var inst_52781 = (state_52813[(9)]);
var inst_52785 = (inst_52777[inst_52778] = inst_52781);
var inst_52786__$1 = (inst_52778 + (1));
var inst_52787 = (inst_52786__$1 < n);
var state_52813__$1 = (function (){var statearr_52827 = state_52813;
(statearr_52827[(11)] = inst_52786__$1);

(statearr_52827[(12)] = inst_52785);

return statearr_52827;
})();
if(cljs.core.truth_(inst_52787)){
var statearr_52828_52851 = state_52813__$1;
(statearr_52828_52851[(1)] = (8));

} else {
var statearr_52829_52852 = state_52813__$1;
(statearr_52829_52852[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52814 === (14))){
var inst_52806 = (state_52813[(2)]);
var inst_52807 = cljs.core.async.close_BANG_.call(null,out);
var state_52813__$1 = (function (){var statearr_52831 = state_52813;
(statearr_52831[(13)] = inst_52806);

return statearr_52831;
})();
var statearr_52832_52853 = state_52813__$1;
(statearr_52832_52853[(2)] = inst_52807);

(statearr_52832_52853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52814 === (10))){
var inst_52797 = (state_52813[(2)]);
var state_52813__$1 = state_52813;
var statearr_52833_52854 = state_52813__$1;
(statearr_52833_52854[(2)] = inst_52797);

(statearr_52833_52854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52814 === (8))){
var inst_52777 = (state_52813[(7)]);
var inst_52786 = (state_52813[(11)]);
var tmp52830 = inst_52777;
var inst_52777__$1 = tmp52830;
var inst_52778 = inst_52786;
var state_52813__$1 = (function (){var statearr_52834 = state_52813;
(statearr_52834[(7)] = inst_52777__$1);

(statearr_52834[(8)] = inst_52778);

return statearr_52834;
})();
var statearr_52835_52855 = state_52813__$1;
(statearr_52835_52855[(2)] = null);

(statearr_52835_52855[(1)] = (2));


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
});})(c__51025__auto___52841,out))
;
return ((function (switch__50721__auto__,c__51025__auto___52841,out){
return (function() {
var cljs$core$async$state_machine__50722__auto__ = null;
var cljs$core$async$state_machine__50722__auto____0 = (function (){
var statearr_52836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52836[(0)] = cljs$core$async$state_machine__50722__auto__);

(statearr_52836[(1)] = (1));

return statearr_52836;
});
var cljs$core$async$state_machine__50722__auto____1 = (function (state_52813){
while(true){
var ret_value__50723__auto__ = (function (){try{while(true){
var result__50724__auto__ = switch__50721__auto__.call(null,state_52813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50724__auto__;
}
break;
}
}catch (e52837){if((e52837 instanceof Object)){
var ex__50725__auto__ = e52837;
var statearr_52838_52856 = state_52813;
(statearr_52838_52856[(5)] = ex__50725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52857 = state_52813;
state_52813 = G__52857;
continue;
} else {
return ret_value__50723__auto__;
}
break;
}
});
cljs$core$async$state_machine__50722__auto__ = function(state_52813){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50722__auto____1.call(this,state_52813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50722__auto____0;
cljs$core$async$state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50722__auto____1;
return cljs$core$async$state_machine__50722__auto__;
})()
;})(switch__50721__auto__,c__51025__auto___52841,out))
})();
var state__51027__auto__ = (function (){var statearr_52839 = f__51026__auto__.call(null);
(statearr_52839[(6)] = c__51025__auto___52841);

return statearr_52839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51027__auto__);
});})(c__51025__auto___52841,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__52859 = arguments.length;
switch (G__52859) {
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
var c__51025__auto___52929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51025__auto___52929,out){
return (function (){
var f__51026__auto__ = (function (){var switch__50721__auto__ = ((function (c__51025__auto___52929,out){
return (function (state_52901){
var state_val_52902 = (state_52901[(1)]);
if((state_val_52902 === (7))){
var inst_52897 = (state_52901[(2)]);
var state_52901__$1 = state_52901;
var statearr_52903_52930 = state_52901__$1;
(statearr_52903_52930[(2)] = inst_52897);

(statearr_52903_52930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52902 === (1))){
var inst_52860 = [];
var inst_52861 = inst_52860;
var inst_52862 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_52901__$1 = (function (){var statearr_52904 = state_52901;
(statearr_52904[(7)] = inst_52861);

(statearr_52904[(8)] = inst_52862);

return statearr_52904;
})();
var statearr_52905_52931 = state_52901__$1;
(statearr_52905_52931[(2)] = null);

(statearr_52905_52931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52902 === (4))){
var inst_52865 = (state_52901[(9)]);
var inst_52865__$1 = (state_52901[(2)]);
var inst_52866 = (inst_52865__$1 == null);
var inst_52867 = cljs.core.not.call(null,inst_52866);
var state_52901__$1 = (function (){var statearr_52906 = state_52901;
(statearr_52906[(9)] = inst_52865__$1);

return statearr_52906;
})();
if(inst_52867){
var statearr_52907_52932 = state_52901__$1;
(statearr_52907_52932[(1)] = (5));

} else {
var statearr_52908_52933 = state_52901__$1;
(statearr_52908_52933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52902 === (15))){
var inst_52891 = (state_52901[(2)]);
var state_52901__$1 = state_52901;
var statearr_52909_52934 = state_52901__$1;
(statearr_52909_52934[(2)] = inst_52891);

(statearr_52909_52934[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52902 === (13))){
var state_52901__$1 = state_52901;
var statearr_52910_52935 = state_52901__$1;
(statearr_52910_52935[(2)] = null);

(statearr_52910_52935[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52902 === (6))){
var inst_52861 = (state_52901[(7)]);
var inst_52886 = inst_52861.length;
var inst_52887 = (inst_52886 > (0));
var state_52901__$1 = state_52901;
if(cljs.core.truth_(inst_52887)){
var statearr_52911_52936 = state_52901__$1;
(statearr_52911_52936[(1)] = (12));

} else {
var statearr_52912_52937 = state_52901__$1;
(statearr_52912_52937[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52902 === (3))){
var inst_52899 = (state_52901[(2)]);
var state_52901__$1 = state_52901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52901__$1,inst_52899);
} else {
if((state_val_52902 === (12))){
var inst_52861 = (state_52901[(7)]);
var inst_52889 = cljs.core.vec.call(null,inst_52861);
var state_52901__$1 = state_52901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52901__$1,(15),out,inst_52889);
} else {
if((state_val_52902 === (2))){
var state_52901__$1 = state_52901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52901__$1,(4),ch);
} else {
if((state_val_52902 === (11))){
var inst_52865 = (state_52901[(9)]);
var inst_52869 = (state_52901[(10)]);
var inst_52879 = (state_52901[(2)]);
var inst_52880 = [];
var inst_52881 = inst_52880.push(inst_52865);
var inst_52861 = inst_52880;
var inst_52862 = inst_52869;
var state_52901__$1 = (function (){var statearr_52913 = state_52901;
(statearr_52913[(7)] = inst_52861);

(statearr_52913[(11)] = inst_52879);

(statearr_52913[(8)] = inst_52862);

(statearr_52913[(12)] = inst_52881);

return statearr_52913;
})();
var statearr_52914_52938 = state_52901__$1;
(statearr_52914_52938[(2)] = null);

(statearr_52914_52938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52902 === (9))){
var inst_52861 = (state_52901[(7)]);
var inst_52877 = cljs.core.vec.call(null,inst_52861);
var state_52901__$1 = state_52901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52901__$1,(11),out,inst_52877);
} else {
if((state_val_52902 === (5))){
var inst_52865 = (state_52901[(9)]);
var inst_52862 = (state_52901[(8)]);
var inst_52869 = (state_52901[(10)]);
var inst_52869__$1 = f.call(null,inst_52865);
var inst_52870 = cljs.core._EQ_.call(null,inst_52869__$1,inst_52862);
var inst_52871 = cljs.core.keyword_identical_QMARK_.call(null,inst_52862,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_52872 = ((inst_52870) || (inst_52871));
var state_52901__$1 = (function (){var statearr_52915 = state_52901;
(statearr_52915[(10)] = inst_52869__$1);

return statearr_52915;
})();
if(cljs.core.truth_(inst_52872)){
var statearr_52916_52939 = state_52901__$1;
(statearr_52916_52939[(1)] = (8));

} else {
var statearr_52917_52940 = state_52901__$1;
(statearr_52917_52940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52902 === (14))){
var inst_52894 = (state_52901[(2)]);
var inst_52895 = cljs.core.async.close_BANG_.call(null,out);
var state_52901__$1 = (function (){var statearr_52919 = state_52901;
(statearr_52919[(13)] = inst_52894);

return statearr_52919;
})();
var statearr_52920_52941 = state_52901__$1;
(statearr_52920_52941[(2)] = inst_52895);

(statearr_52920_52941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52902 === (10))){
var inst_52884 = (state_52901[(2)]);
var state_52901__$1 = state_52901;
var statearr_52921_52942 = state_52901__$1;
(statearr_52921_52942[(2)] = inst_52884);

(statearr_52921_52942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52902 === (8))){
var inst_52865 = (state_52901[(9)]);
var inst_52861 = (state_52901[(7)]);
var inst_52869 = (state_52901[(10)]);
var inst_52874 = inst_52861.push(inst_52865);
var tmp52918 = inst_52861;
var inst_52861__$1 = tmp52918;
var inst_52862 = inst_52869;
var state_52901__$1 = (function (){var statearr_52922 = state_52901;
(statearr_52922[(14)] = inst_52874);

(statearr_52922[(7)] = inst_52861__$1);

(statearr_52922[(8)] = inst_52862);

return statearr_52922;
})();
var statearr_52923_52943 = state_52901__$1;
(statearr_52923_52943[(2)] = null);

(statearr_52923_52943[(1)] = (2));


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
});})(c__51025__auto___52929,out))
;
return ((function (switch__50721__auto__,c__51025__auto___52929,out){
return (function() {
var cljs$core$async$state_machine__50722__auto__ = null;
var cljs$core$async$state_machine__50722__auto____0 = (function (){
var statearr_52924 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52924[(0)] = cljs$core$async$state_machine__50722__auto__);

(statearr_52924[(1)] = (1));

return statearr_52924;
});
var cljs$core$async$state_machine__50722__auto____1 = (function (state_52901){
while(true){
var ret_value__50723__auto__ = (function (){try{while(true){
var result__50724__auto__ = switch__50721__auto__.call(null,state_52901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50724__auto__;
}
break;
}
}catch (e52925){if((e52925 instanceof Object)){
var ex__50725__auto__ = e52925;
var statearr_52926_52944 = state_52901;
(statearr_52926_52944[(5)] = ex__50725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52945 = state_52901;
state_52901 = G__52945;
continue;
} else {
return ret_value__50723__auto__;
}
break;
}
});
cljs$core$async$state_machine__50722__auto__ = function(state_52901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50722__auto____1.call(this,state_52901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50722__auto____0;
cljs$core$async$state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50722__auto____1;
return cljs$core$async$state_machine__50722__auto__;
})()
;})(switch__50721__auto__,c__51025__auto___52929,out))
})();
var state__51027__auto__ = (function (){var statearr_52927 = f__51026__auto__.call(null);
(statearr_52927[(6)] = c__51025__auto___52929);

return statearr_52927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51027__auto__);
});})(c__51025__auto___52929,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1552956592616
