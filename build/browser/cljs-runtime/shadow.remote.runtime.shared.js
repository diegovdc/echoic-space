goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__26354){
var map__26355 = p__26354;
var map__26355__$1 = cljs.core.__destructure_map(map__26355);
var runtime = map__26355__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26355__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_26486 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_26486)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__26356 = runtime;
var G__26357 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_26486);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__26356,G__26357) : shadow.remote.runtime.shared.process.call(null,G__26356,G__26357));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__26358,res){
var map__26359 = p__26358;
var map__26359__$1 = cljs.core.__destructure_map(map__26359);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26359__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26359__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__26360 = res;
var G__26360__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26360,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__26360);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26360__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__26360__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__26365 = arguments.length;
switch (G__26365) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__26366,msg,handlers,timeout_after_ms){
var map__26367 = p__26366;
var map__26367__$1 = cljs.core.__destructure_map(map__26367);
var runtime = map__26367__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26367__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26495 = arguments.length;
var i__5770__auto___26496 = (0);
while(true){
if((i__5770__auto___26496 < len__5769__auto___26495)){
args__5775__auto__.push((arguments[i__5770__auto___26496]));

var G__26497 = (i__5770__auto___26496 + (1));
i__5770__auto___26496 = G__26497;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__26374,ev,args){
var map__26376 = p__26374;
var map__26376__$1 = cljs.core.__destructure_map(map__26376);
var runtime = map__26376__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26376__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__26377 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__26380 = null;
var count__26381 = (0);
var i__26382 = (0);
while(true){
if((i__26382 < count__26381)){
var ext = chunk__26380.cljs$core$IIndexed$_nth$arity$2(null,i__26382);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__26500 = seq__26377;
var G__26501 = chunk__26380;
var G__26502 = count__26381;
var G__26503 = (i__26382 + (1));
seq__26377 = G__26500;
chunk__26380 = G__26501;
count__26381 = G__26502;
i__26382 = G__26503;
continue;
} else {
var G__26504 = seq__26377;
var G__26505 = chunk__26380;
var G__26506 = count__26381;
var G__26507 = (i__26382 + (1));
seq__26377 = G__26504;
chunk__26380 = G__26505;
count__26381 = G__26506;
i__26382 = G__26507;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26377);
if(temp__5804__auto__){
var seq__26377__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26377__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26377__$1);
var G__26508 = cljs.core.chunk_rest(seq__26377__$1);
var G__26509 = c__5568__auto__;
var G__26510 = cljs.core.count(c__5568__auto__);
var G__26511 = (0);
seq__26377 = G__26508;
chunk__26380 = G__26509;
count__26381 = G__26510;
i__26382 = G__26511;
continue;
} else {
var ext = cljs.core.first(seq__26377__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__26512 = cljs.core.next(seq__26377__$1);
var G__26513 = null;
var G__26514 = (0);
var G__26515 = (0);
seq__26377 = G__26512;
chunk__26380 = G__26513;
count__26381 = G__26514;
i__26382 = G__26515;
continue;
} else {
var G__26516 = cljs.core.next(seq__26377__$1);
var G__26517 = null;
var G__26518 = (0);
var G__26519 = (0);
seq__26377 = G__26516;
chunk__26380 = G__26517;
count__26381 = G__26518;
i__26382 = G__26519;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq26368){
var G__26369 = cljs.core.first(seq26368);
var seq26368__$1 = cljs.core.next(seq26368);
var G__26370 = cljs.core.first(seq26368__$1);
var seq26368__$2 = cljs.core.next(seq26368__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26369,G__26370,seq26368__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__26393,p__26394){
var map__26398 = p__26393;
var map__26398__$1 = cljs.core.__destructure_map(map__26398);
var runtime = map__26398__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26398__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__26399 = p__26394;
var map__26399__$1 = cljs.core.__destructure_map(map__26399);
var msg = map__26399__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26399__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__26402 = cljs.core.deref(state_ref);
var map__26402__$1 = cljs.core.__destructure_map(map__26402);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26402__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26402__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__26411,msg){
var map__26412 = p__26411;
var map__26412__$1 = cljs.core.__destructure_map(map__26412);
var runtime = map__26412__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26412__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__26416,key,p__26417){
var map__26419 = p__26416;
var map__26419__$1 = cljs.core.__destructure_map(map__26419);
var state = map__26419__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26419__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__26420 = p__26417;
var map__26420__$1 = cljs.core.__destructure_map(map__26420);
var spec = map__26420__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26420__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__26422,key,spec){
var map__26423 = p__26422;
var map__26423__$1 = cljs.core.__destructure_map(map__26423);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26423__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__26425_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__26425_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__26426_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__26426_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__26427_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__26427_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__26428_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__26428_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__26430_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__26430_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__26434,key){
var map__26435 = p__26434;
var map__26435__$1 = cljs.core.__destructure_map(map__26435);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26435__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__26437,msg){
var map__26438 = p__26437;
var map__26438__$1 = cljs.core.__destructure_map(map__26438);
var runtime = map__26438__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26438__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__26441,p__26442){
var map__26444 = p__26441;
var map__26444__$1 = cljs.core.__destructure_map(map__26444);
var runtime = map__26444__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26444__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__26445 = p__26442;
var map__26445__$1 = cljs.core.__destructure_map(map__26445);
var msg = map__26445__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26445__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26445__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__26467 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__26469 = null;
var count__26470 = (0);
var i__26471 = (0);
while(true){
if((i__26471 < count__26470)){
var map__26479 = chunk__26469.cljs$core$IIndexed$_nth$arity$2(null,i__26471);
var map__26479__$1 = cljs.core.__destructure_map(map__26479);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26479__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__26562 = seq__26467;
var G__26563 = chunk__26469;
var G__26564 = count__26470;
var G__26565 = (i__26471 + (1));
seq__26467 = G__26562;
chunk__26469 = G__26563;
count__26470 = G__26564;
i__26471 = G__26565;
continue;
} else {
var G__26566 = seq__26467;
var G__26567 = chunk__26469;
var G__26568 = count__26470;
var G__26569 = (i__26471 + (1));
seq__26467 = G__26566;
chunk__26469 = G__26567;
count__26470 = G__26568;
i__26471 = G__26569;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26467);
if(temp__5804__auto__){
var seq__26467__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26467__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26467__$1);
var G__26570 = cljs.core.chunk_rest(seq__26467__$1);
var G__26571 = c__5568__auto__;
var G__26572 = cljs.core.count(c__5568__auto__);
var G__26573 = (0);
seq__26467 = G__26570;
chunk__26469 = G__26571;
count__26470 = G__26572;
i__26471 = G__26573;
continue;
} else {
var map__26482 = cljs.core.first(seq__26467__$1);
var map__26482__$1 = cljs.core.__destructure_map(map__26482);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26482__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__26575 = cljs.core.next(seq__26467__$1);
var G__26576 = null;
var G__26577 = (0);
var G__26578 = (0);
seq__26467 = G__26575;
chunk__26469 = G__26576;
count__26470 = G__26577;
i__26471 = G__26578;
continue;
} else {
var G__26579 = cljs.core.next(seq__26467__$1);
var G__26580 = null;
var G__26581 = (0);
var G__26582 = (0);
seq__26467 = G__26579;
chunk__26469 = G__26580;
count__26470 = G__26581;
i__26471 = G__26582;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
