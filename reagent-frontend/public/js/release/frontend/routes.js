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
var action__27853__auto___30010 = (function (params__27854__auto__){
if(cljs.core.map_QMARK_(params__27854__auto__)){
var map__29985 = params__27854__auto__;
var map__29985__$1 = ((((!((map__29985 == null)))?(((((map__29985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29985):map__29985);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__27854__auto__)){
var vec__29987 = params__27854__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__27853__auto___30010);


var action__27853__auto___30011 = (function (params__27854__auto__){
if(cljs.core.map_QMARK_(params__27854__auto__)){
var map__29990 = params__27854__auto__;
var map__29990__$1 = ((((!((map__29990 == null)))?(((((map__29990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29990):map__29990);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$about);
} else {
if(cljs.core.vector_QMARK_(params__27854__auto__)){
var vec__29992 = params__27854__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$about);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_(/\/about\/?/,action__27853__auto___30011);


var action__27853__auto___30012 = (function (params__27854__auto__){
if(cljs.core.map_QMARK_(params__27854__auto__)){
var map__29995 = params__27854__auto__;
var map__29995__$1 = ((((!((map__29995 == null)))?(((((map__29995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29995):map__29995);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$single,"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$music);
} else {
if(cljs.core.vector_QMARK_(params__27854__auto__)){
var vec__29997 = params__27854__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$single,"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$music);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_(/\/music\/?/,action__27853__auto___30012);


var action__27853__auto___30013 = (function (params__27854__auto__){
if(cljs.core.map_QMARK_(params__27854__auto__)){
var map__30000 = params__27854__auto__;
var map__30000__$1 = ((((!((map__30000 == null)))?(((((map__30000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30000):map__30000);
var single = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30000__$1,cljs.core.cst$kw$single);
return frontend.routes.music_single(single);
} else {
if(cljs.core.vector_QMARK_(params__27854__auto__)){
var vec__30002 = params__27854__auto__;
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30002,(0),null);
return frontend.routes.music_single(single);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/music/:single",action__27853__auto___30013);


var action__27853__auto___30014 = (function (params__27854__auto__){
if(cljs.core.map_QMARK_(params__27854__auto__)){
var map__30005 = params__27854__auto__;
var map__30005__$1 = ((((!((map__30005 == null)))?(((((map__30005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30005):map__30005);
var single = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30005__$1,cljs.core.cst$kw$single);
return frontend.routes.music_single(single);
} else {
if(cljs.core.vector_QMARK_(params__27854__auto__)){
var vec__30007 = params__27854__auto__;
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30007,(0),null);
return frontend.routes.music_single(single);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/music/:single/",action__27853__auto___30014);


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
var G__30016 = cljs.core.cst$kw$page;
var fexpr__30015 = cljs.core.deref(frontend.state.app_state);
return (fexpr__30015.cljs$core$IFn$_invoke$arity$1 ? fexpr__30015.cljs$core$IFn$_invoke$arity$1(G__30016) : fexpr__30015.call(null,G__30016));
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
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.music_single.main((function (){var G__30018 = cljs.core.cst$kw$single;
var fexpr__30017 = cljs.core.deref(frontend.state.app_state);
return (fexpr__30017.cljs$core$IFn$_invoke$arity$1 ? fexpr__30017.cljs$core$IFn$_invoke$arity$1(G__30018) : fexpr__30017.call(null,G__30018));
})(),(function (){var G__30020 = cljs.core.cst$kw$hash;
var fexpr__30019 = cljs.core.deref(frontend.state.app_state);
return (fexpr__30019.cljs$core$IFn$_invoke$arity$1 ? fexpr__30019.cljs$core$IFn$_invoke$arity$1(G__30020) : fexpr__30019.call(null,G__30020));
})())], null);
}));
frontend.routes.current_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.home.main], null);
}));
