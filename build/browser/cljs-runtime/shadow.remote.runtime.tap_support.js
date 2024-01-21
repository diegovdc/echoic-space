goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__30270,p__30271){
var map__30277 = p__30270;
var map__30277__$1 = cljs.core.__destructure_map(map__30277);
var svc = map__30277__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30277__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30277__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30277__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__30278 = p__30271;
var map__30278__$1 = cljs.core.__destructure_map(map__30278);
var msg = map__30278__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30278__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30278__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30278__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30278__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__30318,p__30319){
var map__30320 = p__30318;
var map__30320__$1 = cljs.core.__destructure_map(map__30320);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30320__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__30321 = p__30319;
var map__30321__$1 = cljs.core.__destructure_map(map__30321);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30321__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__30326,p__30327){
var map__30328 = p__30326;
var map__30328__$1 = cljs.core.__destructure_map(map__30328);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30328__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30328__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__30329 = p__30327;
var map__30329__$1 = cljs.core.__destructure_map(map__30329);
var msg = map__30329__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30329__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__30332,tid){
var map__30334 = p__30332;
var map__30334__$1 = cljs.core.__destructure_map(map__30334);
var svc = map__30334__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30334__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__30342 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__30343 = null;
var count__30344 = (0);
var i__30345 = (0);
while(true){
if((i__30345 < count__30344)){
var vec__30355 = chunk__30343.cljs$core$IIndexed$_nth$arity$2(null,i__30345);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30355,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30355,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__30382 = seq__30342;
var G__30383 = chunk__30343;
var G__30384 = count__30344;
var G__30385 = (i__30345 + (1));
seq__30342 = G__30382;
chunk__30343 = G__30383;
count__30344 = G__30384;
i__30345 = G__30385;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30342);
if(temp__5804__auto__){
var seq__30342__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30342__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30342__$1);
var G__30386 = cljs.core.chunk_rest(seq__30342__$1);
var G__30387 = c__5568__auto__;
var G__30388 = cljs.core.count(c__5568__auto__);
var G__30389 = (0);
seq__30342 = G__30386;
chunk__30343 = G__30387;
count__30344 = G__30388;
i__30345 = G__30389;
continue;
} else {
var vec__30361 = cljs.core.first(seq__30342__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30361,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30361,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__30390 = cljs.core.next(seq__30342__$1);
var G__30391 = null;
var G__30392 = (0);
var G__30393 = (0);
seq__30342 = G__30390;
chunk__30343 = G__30391;
count__30344 = G__30392;
i__30345 = G__30393;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__30335_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__30335_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__30336_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__30336_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__30337_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__30337_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__30338_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__30338_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__30369){
var map__30370 = p__30369;
var map__30370__$1 = cljs.core.__destructure_map(map__30370);
var svc = map__30370__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30370__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30370__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
