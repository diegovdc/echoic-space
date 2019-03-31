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
goog.require('views.blog');
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
frontend.routes.music_single = (function frontend$routes$music_single(page,single){
var single_hash = clojure.string.split.cljs$core$IFn$_invoke$arity$2(single,/#/);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(single_hash,(0),"");
var hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(single_hash,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$single,s);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$hash,hash);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,page);
});
frontend.routes.app_routes = (function frontend$routes$app_routes(){
var action__28373__auto___30046 = (function (params__28374__auto__){
if(cljs.core.map_QMARK_(params__28374__auto__)){
var map__30006 = params__28374__auto__;
var map__30006__$1 = ((((!((map__30006 == null)))?(((((map__30006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30006):map__30006);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__28374__auto__)){
var vec__30008 = params__28374__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__28373__auto___30046);


var action__28373__auto___30047 = (function (params__28374__auto__){
if(cljs.core.map_QMARK_(params__28374__auto__)){
var map__30011 = params__28374__auto__;
var map__30011__$1 = ((((!((map__30011 == null)))?(((((map__30011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30011):map__30011);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$about);
} else {
if(cljs.core.vector_QMARK_(params__28374__auto__)){
var vec__30013 = params__28374__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$about);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_(/\/about\/?/,action__28373__auto___30047);


var action__28373__auto___30048 = (function (params__28374__auto__){
if(cljs.core.map_QMARK_(params__28374__auto__)){
var map__30016 = params__28374__auto__;
var map__30016__$1 = ((((!((map__30016 == null)))?(((((map__30016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30016):map__30016);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$single,"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$music);
} else {
if(cljs.core.vector_QMARK_(params__28374__auto__)){
var vec__30018 = params__28374__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$single,"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$music);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_(/\/music\/?/,action__28373__auto___30048);


var action__28373__auto___30049 = (function (params__28374__auto__){
if(cljs.core.map_QMARK_(params__28374__auto__)){
var map__30021 = params__28374__auto__;
var map__30021__$1 = ((((!((map__30021 == null)))?(((((map__30021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30021):map__30021);
var single = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30021__$1,cljs.core.cst$kw$single);
return frontend.routes.music_single(cljs.core.cst$kw$music_DASH_single,single);
} else {
if(cljs.core.vector_QMARK_(params__28374__auto__)){
var vec__30023 = params__28374__auto__;
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30023,(0),null);
return frontend.routes.music_single(cljs.core.cst$kw$music_DASH_single,single);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/music/:single",action__28373__auto___30049);


var action__28373__auto___30050 = (function (params__28374__auto__){
if(cljs.core.map_QMARK_(params__28374__auto__)){
var map__30026 = params__28374__auto__;
var map__30026__$1 = ((((!((map__30026 == null)))?(((((map__30026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30026):map__30026);
var single = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30026__$1,cljs.core.cst$kw$single);
return frontend.routes.music_single(cljs.core.cst$kw$music_DASH_single,single);
} else {
if(cljs.core.vector_QMARK_(params__28374__auto__)){
var vec__30028 = params__28374__auto__;
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30028,(0),null);
return frontend.routes.music_single(cljs.core.cst$kw$music_DASH_single,single);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/music/:single/",action__28373__auto___30050);


var action__28373__auto___30051 = (function (params__28374__auto__){
if(cljs.core.map_QMARK_(params__28374__auto__)){
var map__30031 = params__28374__auto__;
var map__30031__$1 = ((((!((map__30031 == null)))?(((((map__30031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30031):map__30031);
console.log("blog");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$single,"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$blog);
} else {
if(cljs.core.vector_QMARK_(params__28374__auto__)){
var vec__30033 = params__28374__auto__;
console.log("blog");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$single,"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$blog);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_(/\/blog\/?/,action__28373__auto___30051);


var action__28373__auto___30052 = (function (params__28374__auto__){
if(cljs.core.map_QMARK_(params__28374__auto__)){
var map__30036 = params__28374__auto__;
var map__30036__$1 = ((((!((map__30036 == null)))?(((((map__30036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30036):map__30036);
var single = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30036__$1,cljs.core.cst$kw$single);
return frontend.routes.music_single(cljs.core.cst$kw$blog_DASH_single,single);
} else {
if(cljs.core.vector_QMARK_(params__28374__auto__)){
var vec__30038 = params__28374__auto__;
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30038,(0),null);
return frontend.routes.music_single(cljs.core.cst$kw$blog_DASH_single,single);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/blog/:single",action__28373__auto___30052);


var action__28373__auto___30053 = (function (params__28374__auto__){
if(cljs.core.map_QMARK_(params__28374__auto__)){
var map__30041 = params__28374__auto__;
var map__30041__$1 = ((((!((map__30041 == null)))?(((((map__30041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30041):map__30041);
var single = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30041__$1,cljs.core.cst$kw$single);
return frontend.routes.music_single(cljs.core.cst$kw$blog_DASH_single,single);
} else {
if(cljs.core.vector_QMARK_(params__28374__auto__)){
var vec__30043 = params__28374__auto__;
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30043,(0),null);
return frontend.routes.music_single(cljs.core.cst$kw$blog_DASH_single,single);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/blog/:single/",action__28373__auto___30053);


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
var G__30055 = cljs.core.cst$kw$page;
var fexpr__30054 = cljs.core.deref(frontend.state.app_state);
return (fexpr__30054.cljs$core$IFn$_invoke$arity$1 ? fexpr__30054.cljs$core$IFn$_invoke$arity$1(G__30055) : fexpr__30054.call(null,G__30055));
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
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.music_single.main((function (){var G__30057 = cljs.core.cst$kw$single;
var fexpr__30056 = cljs.core.deref(frontend.state.app_state);
return (fexpr__30056.cljs$core$IFn$_invoke$arity$1 ? fexpr__30056.cljs$core$IFn$_invoke$arity$1(G__30057) : fexpr__30056.call(null,G__30057));
})(),(function (){var G__30059 = cljs.core.cst$kw$hash;
var fexpr__30058 = cljs.core.deref(frontend.state.app_state);
return (fexpr__30058.cljs$core$IFn$_invoke$arity$1 ? fexpr__30058.cljs$core$IFn$_invoke$arity$1(G__30059) : fexpr__30058.call(null,G__30059));
})())], null);
}));
frontend.routes.current_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$blog,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.blog.main], null);
}));
frontend.routes.current_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$blog_DASH_single,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.music_single.main((function (){var G__30061 = cljs.core.cst$kw$single;
var fexpr__30060 = cljs.core.deref(frontend.state.app_state);
return (fexpr__30060.cljs$core$IFn$_invoke$arity$1 ? fexpr__30060.cljs$core$IFn$_invoke$arity$1(G__30061) : fexpr__30060.call(null,G__30061));
})(),(function (){var G__30063 = cljs.core.cst$kw$hash;
var fexpr__30062 = cljs.core.deref(frontend.state.app_state);
return (fexpr__30062.cljs$core$IFn$_invoke$arity$1 ? fexpr__30062.cljs$core$IFn$_invoke$arity$1(G__30063) : fexpr__30062.call(null,G__30063));
})())], null);
}));
frontend.routes.current_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.home.main], null);
}));
