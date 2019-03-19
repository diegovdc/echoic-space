// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('frontend.routes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.history.Html5History');
goog.require('goog.Uri');
goog.require('frontend.routes.history');
goog.require('views.home');
goog.require('views.about');
goog.require('views.music');
goog.require('views.music_single');
goog.require('frontend.state');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('reagent.core');
goog.require('clojure.string');
frontend.routes.log = (function frontend$routes$log(x){
console.log(x);

return x;
});
frontend.routes.music_single = (function frontend$routes$music_single(single){
var single_hash = clojure.string.split.cljs$core$IFn$_invoke$arity$2(single,/#/);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(single_hash,(0),"");
var hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(single_hash,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$single,s);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$hash,hash);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$music_DASH_single);
});
frontend.routes.app_routes = (function frontend$routes$app_routes(){
var action__29503__auto___31273 = (function (params__29504__auto__){
if(cljs.core.map_QMARK_(params__29504__auto__)){
var map__31248 = params__29504__auto__;
var map__31248__$1 = ((((!((map__31248 == null)))?(((((map__31248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31248):map__31248);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__29504__auto__)){
var vec__31250 = params__29504__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__29503__auto___31273);


var action__29503__auto___31274 = (function (params__29504__auto__){
if(cljs.core.map_QMARK_(params__29504__auto__)){
var map__31253 = params__29504__auto__;
var map__31253__$1 = ((((!((map__31253 == null)))?(((((map__31253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31253):map__31253);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$about);
} else {
if(cljs.core.vector_QMARK_(params__29504__auto__)){
var vec__31255 = params__29504__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$about);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_(/\/about\/?/,action__29503__auto___31274);


var action__29503__auto___31275 = (function (params__29504__auto__){
if(cljs.core.map_QMARK_(params__29504__auto__)){
var map__31258 = params__29504__auto__;
var map__31258__$1 = ((((!((map__31258 == null)))?(((((map__31258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31258):map__31258);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$single,"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$music);
} else {
if(cljs.core.vector_QMARK_(params__29504__auto__)){
var vec__31260 = params__29504__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$single,"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$music);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_(/\/music\/?/,action__29503__auto___31275);


var action__29503__auto___31276 = (function (params__29504__auto__){
if(cljs.core.map_QMARK_(params__29504__auto__)){
var map__31263 = params__29504__auto__;
var map__31263__$1 = ((((!((map__31263 == null)))?(((((map__31263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31263):map__31263);
var single = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31263__$1,cljs.core.cst$kw$single);
return frontend.routes.music_single(single);
} else {
if(cljs.core.vector_QMARK_(params__29504__auto__)){
var vec__31265 = params__29504__auto__;
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31265,(0),null);
return frontend.routes.music_single(single);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/music/:single",action__29503__auto___31276);


var action__29503__auto___31277 = (function (params__29504__auto__){
if(cljs.core.map_QMARK_(params__29504__auto__)){
var map__31268 = params__29504__auto__;
var map__31268__$1 = ((((!((map__31268 == null)))?(((((map__31268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31268):map__31268);
var single = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31268__$1,cljs.core.cst$kw$single);
return frontend.routes.music_single(single);
} else {
if(cljs.core.vector_QMARK_(params__29504__auto__)){
var vec__31270 = params__29504__auto__;
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31270,(0),null);
return frontend.routes.music_single(single);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/music/:single/",action__29503__auto___31277);


return frontend.routes.history.accountant_history_navigation();
});
if((typeof frontend !== 'undefined') && (typeof frontend.routes !== 'undefined') && (typeof frontend.routes.current_page !== 'undefined')){
} else {
frontend.routes.current_page = (function (){var method_table__4400__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4401__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4402__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4403__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4404__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("frontend.routes","current-page"),((function (method_table__4400__auto__,prefer_table__4401__auto__,method_cache__4402__auto__,cached_hierarchy__4403__auto__,hierarchy__4404__auto__){
return (function (){
var G__31279 = cljs.core.cst$kw$page;
var fexpr__31278 = cljs.core.deref(frontend.state.app_state);
return (fexpr__31278.cljs$core$IFn$_invoke$arity$1 ? fexpr__31278.cljs$core$IFn$_invoke$arity$1(G__31279) : fexpr__31278.call(null,G__31279));
});})(method_table__4400__auto__,prefer_table__4401__auto__,method_cache__4402__auto__,cached_hierarchy__4403__auto__,hierarchy__4404__auto__))
,cljs.core.cst$kw$default,hierarchy__4404__auto__,method_table__4400__auto__,prefer_table__4401__auto__,method_cache__4402__auto__,cached_hierarchy__4403__auto__));
})();
}
frontend.routes.current_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$home,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.home.main], null);
}));
frontend.routes.current_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$about,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.about.main], null);
}));
frontend.routes.current_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$music,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.music.main], null);
}));
frontend.routes.current_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$music_DASH_single,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.music_single.main((function (){var G__31281 = cljs.core.cst$kw$single;
var fexpr__31280 = cljs.core.deref(frontend.state.app_state);
return (fexpr__31280.cljs$core$IFn$_invoke$arity$1 ? fexpr__31280.cljs$core$IFn$_invoke$arity$1(G__31281) : fexpr__31280.call(null,G__31281));
})(),(function (){var G__31283 = cljs.core.cst$kw$hash;
var fexpr__31282 = cljs.core.deref(frontend.state.app_state);
return (fexpr__31282.cljs$core$IFn$_invoke$arity$1 ? fexpr__31282.cljs$core$IFn$_invoke$arity$1(G__31283) : fexpr__31282.call(null,G__31283));
})())], null);
}));
frontend.routes.current_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.home.main], null);
}));
