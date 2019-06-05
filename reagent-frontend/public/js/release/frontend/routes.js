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
var action__33374__auto___36289 = (function (params__33375__auto__){
if(cljs.core.map_QMARK_(params__33375__auto__)){
var map__36249 = params__33375__auto__;
var map__36249__$1 = ((((!((map__36249 == null)))?(((((map__36249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36249):map__36249);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__33375__auto__)){
var vec__36251 = params__33375__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__33374__auto___36289);


var action__33374__auto___36290 = (function (params__33375__auto__){
if(cljs.core.map_QMARK_(params__33375__auto__)){
var map__36254 = params__33375__auto__;
var map__36254__$1 = ((((!((map__36254 == null)))?(((((map__36254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36254):map__36254);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$about);
} else {
if(cljs.core.vector_QMARK_(params__33375__auto__)){
var vec__36256 = params__33375__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$about);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_(/\/about\/?/,action__33374__auto___36290);


var action__33374__auto___36291 = (function (params__33375__auto__){
if(cljs.core.map_QMARK_(params__33375__auto__)){
var map__36259 = params__33375__auto__;
var map__36259__$1 = ((((!((map__36259 == null)))?(((((map__36259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36259):map__36259);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$single,"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$music);
} else {
if(cljs.core.vector_QMARK_(params__33375__auto__)){
var vec__36261 = params__33375__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$single,"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$music);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_(/\/music\/?/,action__33374__auto___36291);


var action__33374__auto___36292 = (function (params__33375__auto__){
if(cljs.core.map_QMARK_(params__33375__auto__)){
var map__36264 = params__33375__auto__;
var map__36264__$1 = ((((!((map__36264 == null)))?(((((map__36264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36264):map__36264);
var single = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36264__$1,cljs.core.cst$kw$single);
return frontend.routes.music_single(cljs.core.cst$kw$music_DASH_single,single);
} else {
if(cljs.core.vector_QMARK_(params__33375__auto__)){
var vec__36266 = params__33375__auto__;
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36266,(0),null);
return frontend.routes.music_single(cljs.core.cst$kw$music_DASH_single,single);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/music/:single",action__33374__auto___36292);


var action__33374__auto___36293 = (function (params__33375__auto__){
if(cljs.core.map_QMARK_(params__33375__auto__)){
var map__36269 = params__33375__auto__;
var map__36269__$1 = ((((!((map__36269 == null)))?(((((map__36269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36269):map__36269);
var single = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36269__$1,cljs.core.cst$kw$single);
return frontend.routes.music_single(cljs.core.cst$kw$music_DASH_single,single);
} else {
if(cljs.core.vector_QMARK_(params__33375__auto__)){
var vec__36271 = params__33375__auto__;
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36271,(0),null);
return frontend.routes.music_single(cljs.core.cst$kw$music_DASH_single,single);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/music/:single/",action__33374__auto___36293);


var action__33374__auto___36294 = (function (params__33375__auto__){
if(cljs.core.map_QMARK_(params__33375__auto__)){
var map__36274 = params__33375__auto__;
var map__36274__$1 = ((((!((map__36274 == null)))?(((((map__36274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36274):map__36274);
console.log("blog");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$single,"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$blog);
} else {
if(cljs.core.vector_QMARK_(params__33375__auto__)){
var vec__36276 = params__33375__auto__;
console.log("blog");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$single,"");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$blog);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_(/\/blog\/?/,action__33374__auto___36294);


var action__33374__auto___36295 = (function (params__33375__auto__){
if(cljs.core.map_QMARK_(params__33375__auto__)){
var map__36279 = params__33375__auto__;
var map__36279__$1 = ((((!((map__36279 == null)))?(((((map__36279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36279):map__36279);
var single = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36279__$1,cljs.core.cst$kw$single);
return frontend.routes.music_single(cljs.core.cst$kw$blog_DASH_single,single);
} else {
if(cljs.core.vector_QMARK_(params__33375__auto__)){
var vec__36281 = params__33375__auto__;
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36281,(0),null);
return frontend.routes.music_single(cljs.core.cst$kw$blog_DASH_single,single);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/blog/:single",action__33374__auto___36295);


var action__33374__auto___36296 = (function (params__33375__auto__){
if(cljs.core.map_QMARK_(params__33375__auto__)){
var map__36284 = params__33375__auto__;
var map__36284__$1 = ((((!((map__36284 == null)))?(((((map__36284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36284):map__36284);
var single = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36284__$1,cljs.core.cst$kw$single);
return frontend.routes.music_single(cljs.core.cst$kw$blog_DASH_single,single);
} else {
if(cljs.core.vector_QMARK_(params__33375__auto__)){
var vec__36286 = params__33375__auto__;
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36286,(0),null);
return frontend.routes.music_single(cljs.core.cst$kw$blog_DASH_single,single);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/blog/:single/",action__33374__auto___36296);


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
var G__36298 = cljs.core.cst$kw$page;
var fexpr__36297 = cljs.core.deref(frontend.state.app_state);
return (fexpr__36297.cljs$core$IFn$_invoke$arity$1 ? fexpr__36297.cljs$core$IFn$_invoke$arity$1(G__36298) : fexpr__36297.call(null,G__36298));
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
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.music_single.main((function (){var G__36300 = cljs.core.cst$kw$single;
var fexpr__36299 = cljs.core.deref(frontend.state.app_state);
return (fexpr__36299.cljs$core$IFn$_invoke$arity$1 ? fexpr__36299.cljs$core$IFn$_invoke$arity$1(G__36300) : fexpr__36299.call(null,G__36300));
})(),(function (){var G__36302 = cljs.core.cst$kw$hash;
var fexpr__36301 = cljs.core.deref(frontend.state.app_state);
return (fexpr__36301.cljs$core$IFn$_invoke$arity$1 ? fexpr__36301.cljs$core$IFn$_invoke$arity$1(G__36302) : fexpr__36301.call(null,G__36302));
})())], null);
}));
frontend.routes.current_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$blog,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.blog.main], null);
}));
frontend.routes.current_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$blog_DASH_single,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.music_single.main((function (){var G__36304 = cljs.core.cst$kw$single;
var fexpr__36303 = cljs.core.deref(frontend.state.app_state);
return (fexpr__36303.cljs$core$IFn$_invoke$arity$1 ? fexpr__36303.cljs$core$IFn$_invoke$arity$1(G__36304) : fexpr__36303.call(null,G__36304));
})(),(function (){var G__36306 = cljs.core.cst$kw$hash;
var fexpr__36305 = cljs.core.deref(frontend.state.app_state);
return (fexpr__36305.cljs$core$IFn$_invoke$arity$1 ? fexpr__36305.cljs$core$IFn$_invoke$arity$1(G__36306) : fexpr__36305.call(null,G__36306));
})())], null);
}));
frontend.routes.current_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.home.main], null);
}));
