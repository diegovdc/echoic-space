// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('frontend.routes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.history.Html5History');
goog.require('goog.Uri');
goog.require('frontend.routes.history');
goog.require('views.home');
goog.require('views.about');
goog.require('views.radio');
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
var action__35034__auto___36296 = (function (params__35035__auto__){
if(cljs.core.map_QMARK_(params__35035__auto__)){
var map__36251 = params__35035__auto__;
var map__36251__$1 = ((((!((map__36251 == null)))?(((((map__36251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36251):map__36251);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__35035__auto__)){
var vec__36253 = params__35035__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__35034__auto___36296);


var action__35034__auto___36297 = (function (params__35035__auto__){
if(cljs.core.map_QMARK_(params__35035__auto__)){
var map__36256 = params__35035__auto__;
var map__36256__$1 = ((((!((map__36256 == null)))?(((((map__36256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36256):map__36256);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$radio);
} else {
if(cljs.core.vector_QMARK_(params__35035__auto__)){
var vec__36258 = params__35035__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$radio);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/radio",action__35034__auto___36297);


var action__35034__auto___36298 = (function (params__35035__auto__){
if(cljs.core.map_QMARK_(params__35035__auto__)){
var map__36261 = params__35035__auto__;
var map__36261__$1 = ((((!((map__36261 == null)))?(((((map__36261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36261):map__36261);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$about);
} else {
if(cljs.core.vector_QMARK_(params__35035__auto__)){
var vec__36263 = params__35035__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$about);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_(/\/about\/?/,action__35034__auto___36298);


var action__35034__auto___36299 = (function (params__35035__auto__){
if(cljs.core.map_QMARK_(params__35035__auto__)){
var map__36266 = params__35035__auto__;
var map__36266__$1 = ((((!((map__36266 == null)))?(((((map__36266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36266):map__36266);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$single,"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$music);
} else {
if(cljs.core.vector_QMARK_(params__35035__auto__)){
var vec__36268 = params__35035__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$single,"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$music);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_(/\/music\/?/,action__35034__auto___36299);


var action__35034__auto___36300 = (function (params__35035__auto__){
if(cljs.core.map_QMARK_(params__35035__auto__)){
var map__36271 = params__35035__auto__;
var map__36271__$1 = ((((!((map__36271 == null)))?(((((map__36271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36271):map__36271);
var single = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36271__$1,cljs.core.cst$kw$single);
return frontend.routes.music_single(cljs.core.cst$kw$music_DASH_single,single);
} else {
if(cljs.core.vector_QMARK_(params__35035__auto__)){
var vec__36273 = params__35035__auto__;
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36273,(0),null);
return frontend.routes.music_single(cljs.core.cst$kw$music_DASH_single,single);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/music/:single",action__35034__auto___36300);


var action__35034__auto___36301 = (function (params__35035__auto__){
if(cljs.core.map_QMARK_(params__35035__auto__)){
var map__36276 = params__35035__auto__;
var map__36276__$1 = ((((!((map__36276 == null)))?(((((map__36276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36276):map__36276);
var single = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36276__$1,cljs.core.cst$kw$single);
return frontend.routes.music_single(cljs.core.cst$kw$music_DASH_single,single);
} else {
if(cljs.core.vector_QMARK_(params__35035__auto__)){
var vec__36278 = params__35035__auto__;
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36278,(0),null);
return frontend.routes.music_single(cljs.core.cst$kw$music_DASH_single,single);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/music/:single/",action__35034__auto___36301);


var action__35034__auto___36302 = (function (params__35035__auto__){
if(cljs.core.map_QMARK_(params__35035__auto__)){
var map__36281 = params__35035__auto__;
var map__36281__$1 = ((((!((map__36281 == null)))?(((((map__36281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36281):map__36281);
console.log("blog");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$single,"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$blog);
} else {
if(cljs.core.vector_QMARK_(params__35035__auto__)){
var vec__36283 = params__35035__auto__;
console.log("blog");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$single,"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$blog);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_(/\/blog\/?/,action__35034__auto___36302);


var action__35034__auto___36303 = (function (params__35035__auto__){
if(cljs.core.map_QMARK_(params__35035__auto__)){
var map__36286 = params__35035__auto__;
var map__36286__$1 = ((((!((map__36286 == null)))?(((((map__36286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36286):map__36286);
var single = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36286__$1,cljs.core.cst$kw$single);
return frontend.routes.music_single(cljs.core.cst$kw$blog_DASH_single,single);
} else {
if(cljs.core.vector_QMARK_(params__35035__auto__)){
var vec__36288 = params__35035__auto__;
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36288,(0),null);
return frontend.routes.music_single(cljs.core.cst$kw$blog_DASH_single,single);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/blog/:single",action__35034__auto___36303);


var action__35034__auto___36304 = (function (params__35035__auto__){
if(cljs.core.map_QMARK_(params__35035__auto__)){
var map__36291 = params__35035__auto__;
var map__36291__$1 = ((((!((map__36291 == null)))?(((((map__36291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36291):map__36291);
var single = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36291__$1,cljs.core.cst$kw$single);
return frontend.routes.music_single(cljs.core.cst$kw$blog_DASH_single,single);
} else {
if(cljs.core.vector_QMARK_(params__35035__auto__)){
var vec__36293 = params__35035__auto__;
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36293,(0),null);
return frontend.routes.music_single(cljs.core.cst$kw$blog_DASH_single,single);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/blog/:single/",action__35034__auto___36304);


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
var G__36306 = cljs.core.cst$kw$page;
var fexpr__36305 = cljs.core.deref(frontend.state.app_state);
return (fexpr__36305.cljs$core$IFn$_invoke$arity$1 ? fexpr__36305.cljs$core$IFn$_invoke$arity$1(G__36306) : fexpr__36305.call(null,G__36306));
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
frontend.routes.current_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$radio,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.radio.main], null);
}));
frontend.routes.current_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$music,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.music.main], null);
}));
frontend.routes.current_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$music_DASH_single,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.music_single.main((function (){var G__36308 = cljs.core.cst$kw$single;
var fexpr__36307 = cljs.core.deref(frontend.state.app_state);
return (fexpr__36307.cljs$core$IFn$_invoke$arity$1 ? fexpr__36307.cljs$core$IFn$_invoke$arity$1(G__36308) : fexpr__36307.call(null,G__36308));
})(),(function (){var G__36310 = cljs.core.cst$kw$hash;
var fexpr__36309 = cljs.core.deref(frontend.state.app_state);
return (fexpr__36309.cljs$core$IFn$_invoke$arity$1 ? fexpr__36309.cljs$core$IFn$_invoke$arity$1(G__36310) : fexpr__36309.call(null,G__36310));
})())], null);
}));
frontend.routes.current_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$blog,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.blog.main], null);
}));
frontend.routes.current_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$blog_DASH_single,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.music_single.main((function (){var G__36312 = cljs.core.cst$kw$single;
var fexpr__36311 = cljs.core.deref(frontend.state.app_state);
return (fexpr__36311.cljs$core$IFn$_invoke$arity$1 ? fexpr__36311.cljs$core$IFn$_invoke$arity$1(G__36312) : fexpr__36311.call(null,G__36312));
})(),(function (){var G__36314 = cljs.core.cst$kw$hash;
var fexpr__36313 = cljs.core.deref(frontend.state.app_state);
return (fexpr__36313.cljs$core$IFn$_invoke$arity$1 ? fexpr__36313.cljs$core$IFn$_invoke$arity$1(G__36314) : fexpr__36313.call(null,G__36314));
})())], null);
}));
frontend.routes.current_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.home.main], null);
}));
