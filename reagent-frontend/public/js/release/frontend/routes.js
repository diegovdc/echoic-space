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
console.log(single_hash,hash);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$single,s);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$hash,hash);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$music_DASH_single);
});
frontend.routes.app_routes = (function frontend$routes$app_routes(){
var action__29503__auto___31269 = (function (params__29504__auto__){
if(cljs.core.map_QMARK_(params__29504__auto__)){
var map__31244 = params__29504__auto__;
var map__31244__$1 = ((((!((map__31244 == null)))?(((((map__31244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31244):map__31244);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__29504__auto__)){
var vec__31246 = params__29504__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__29503__auto___31269);


var action__29503__auto___31270 = (function (params__29504__auto__){
if(cljs.core.map_QMARK_(params__29504__auto__)){
var map__31249 = params__29504__auto__;
var map__31249__$1 = ((((!((map__31249 == null)))?(((((map__31249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31249):map__31249);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$about);
} else {
if(cljs.core.vector_QMARK_(params__29504__auto__)){
var vec__31251 = params__29504__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$about);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_(/\/about\/?/,action__29503__auto___31270);


var action__29503__auto___31271 = (function (params__29504__auto__){
if(cljs.core.map_QMARK_(params__29504__auto__)){
var map__31254 = params__29504__auto__;
var map__31254__$1 = ((((!((map__31254 == null)))?(((((map__31254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31254):map__31254);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$single,"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$music);
} else {
if(cljs.core.vector_QMARK_(params__29504__auto__)){
var vec__31256 = params__29504__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$single,"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$music);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_(/\/music\/?/,action__29503__auto___31271);


var action__29503__auto___31272 = (function (params__29504__auto__){
if(cljs.core.map_QMARK_(params__29504__auto__)){
var map__31259 = params__29504__auto__;
var map__31259__$1 = ((((!((map__31259 == null)))?(((((map__31259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31259):map__31259);
var single = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31259__$1,cljs.core.cst$kw$single);
return frontend.routes.music_single(single);
} else {
if(cljs.core.vector_QMARK_(params__29504__auto__)){
var vec__31261 = params__29504__auto__;
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31261,(0),null);
return frontend.routes.music_single(single);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/music/:single",action__29503__auto___31272);


var action__29503__auto___31273 = (function (params__29504__auto__){
if(cljs.core.map_QMARK_(params__29504__auto__)){
var map__31264 = params__29504__auto__;
var map__31264__$1 = ((((!((map__31264 == null)))?(((((map__31264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31264):map__31264);
var single = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31264__$1,cljs.core.cst$kw$single);
return frontend.routes.music_single(single);
} else {
if(cljs.core.vector_QMARK_(params__29504__auto__)){
var vec__31266 = params__29504__auto__;
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31266,(0),null);
return frontend.routes.music_single(single);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/music/:single/",action__29503__auto___31273);


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
var G__31275 = cljs.core.cst$kw$page;
var fexpr__31274 = cljs.core.deref(frontend.state.app_state);
return (fexpr__31274.cljs$core$IFn$_invoke$arity$1 ? fexpr__31274.cljs$core$IFn$_invoke$arity$1(G__31275) : fexpr__31274.call(null,G__31275));
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
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.music_single.main((function (){var G__31277 = cljs.core.cst$kw$single;
var fexpr__31276 = cljs.core.deref(frontend.state.app_state);
return (fexpr__31276.cljs$core$IFn$_invoke$arity$1 ? fexpr__31276.cljs$core$IFn$_invoke$arity$1(G__31277) : fexpr__31276.call(null,G__31277));
})(),(function (){var G__31279 = cljs.core.cst$kw$hash;
var fexpr__31278 = cljs.core.deref(frontend.state.app_state);
return (fexpr__31278.cljs$core$IFn$_invoke$arity$1 ? fexpr__31278.cljs$core$IFn$_invoke$arity$1(G__31279) : fexpr__31278.call(null,G__31279));
})())], null);
}));
frontend.routes.current_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.home.main], null);
}));
