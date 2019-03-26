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
var action__28801__auto___30958 = (function (params__28802__auto__){
if(cljs.core.map_QMARK_(params__28802__auto__)){
var map__30933 = params__28802__auto__;
var map__30933__$1 = ((((!((map__30933 == null)))?(((((map__30933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30933):map__30933);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__28802__auto__)){
var vec__30935 = params__28802__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__28801__auto___30958);


var action__28801__auto___30959 = (function (params__28802__auto__){
if(cljs.core.map_QMARK_(params__28802__auto__)){
var map__30938 = params__28802__auto__;
var map__30938__$1 = ((((!((map__30938 == null)))?(((((map__30938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30938):map__30938);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$about);
} else {
if(cljs.core.vector_QMARK_(params__28802__auto__)){
var vec__30940 = params__28802__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$about);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_(/\/about\/?/,action__28801__auto___30959);


var action__28801__auto___30960 = (function (params__28802__auto__){
if(cljs.core.map_QMARK_(params__28802__auto__)){
var map__30943 = params__28802__auto__;
var map__30943__$1 = ((((!((map__30943 == null)))?(((((map__30943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30943):map__30943);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$single,"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$music);
} else {
if(cljs.core.vector_QMARK_(params__28802__auto__)){
var vec__30945 = params__28802__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$single,"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$music);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_(/\/music\/?/,action__28801__auto___30960);


var action__28801__auto___30961 = (function (params__28802__auto__){
if(cljs.core.map_QMARK_(params__28802__auto__)){
var map__30948 = params__28802__auto__;
var map__30948__$1 = ((((!((map__30948 == null)))?(((((map__30948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30948):map__30948);
var single = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30948__$1,cljs.core.cst$kw$single);
return frontend.routes.music_single(single);
} else {
if(cljs.core.vector_QMARK_(params__28802__auto__)){
var vec__30950 = params__28802__auto__;
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30950,(0),null);
return frontend.routes.music_single(single);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/music/:single",action__28801__auto___30961);


var action__28801__auto___30962 = (function (params__28802__auto__){
if(cljs.core.map_QMARK_(params__28802__auto__)){
var map__30953 = params__28802__auto__;
var map__30953__$1 = ((((!((map__30953 == null)))?(((((map__30953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30953):map__30953);
var single = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30953__$1,cljs.core.cst$kw$single);
return frontend.routes.music_single(single);
} else {
if(cljs.core.vector_QMARK_(params__28802__auto__)){
var vec__30955 = params__28802__auto__;
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30955,(0),null);
return frontend.routes.music_single(single);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/music/:single/",action__28801__auto___30962);


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
var G__30964 = cljs.core.cst$kw$page;
var fexpr__30963 = cljs.core.deref(frontend.state.app_state);
return (fexpr__30963.cljs$core$IFn$_invoke$arity$1 ? fexpr__30963.cljs$core$IFn$_invoke$arity$1(G__30964) : fexpr__30963.call(null,G__30964));
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
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.music_single.main((function (){var G__30966 = cljs.core.cst$kw$single;
var fexpr__30965 = cljs.core.deref(frontend.state.app_state);
return (fexpr__30965.cljs$core$IFn$_invoke$arity$1 ? fexpr__30965.cljs$core$IFn$_invoke$arity$1(G__30966) : fexpr__30965.call(null,G__30966));
})(),(function (){var G__30968 = cljs.core.cst$kw$hash;
var fexpr__30967 = cljs.core.deref(frontend.state.app_state);
return (fexpr__30967.cljs$core$IFn$_invoke$arity$1 ? fexpr__30967.cljs$core$IFn$_invoke$arity$1(G__30968) : fexpr__30967.call(null,G__30968));
})())], null);
}));
frontend.routes.current_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.home.main], null);
}));
