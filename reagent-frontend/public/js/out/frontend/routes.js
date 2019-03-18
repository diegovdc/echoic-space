// Compiled by ClojureScript 1.10.312 {}
goog.provide('frontend.routes');
goog.require('cljs.core');
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
var single_hash = clojure.string.split.call(null,single,/#/);
var s = cljs.core.nth.call(null,single_hash,(0),"");
var hash = cljs.core.nth.call(null,single_hash,(1),null);
console.log(single_hash,hash);

cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"single","single",1551466437),s);

cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"hash","hash",-13781596),hash);

return cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"music-single","music-single",-2070977446));
});
frontend.routes.app_routes = (function frontend$routes$app_routes(){
var action__30012__auto___32433 = (function (params__30013__auto__){
if(cljs.core.map_QMARK_.call(null,params__30013__auto__)){
var map__32408 = params__30013__auto__;
var map__32408__$1 = ((((!((map__32408 == null)))?(((((map__32408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32408):map__32408);
return cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core.vector_QMARK_.call(null,params__30013__auto__)){
var vec__32410 = params__30013__auto__;
return cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__30012__auto___32433);


var action__30012__auto___32434 = (function (params__30013__auto__){
if(cljs.core.map_QMARK_.call(null,params__30013__auto__)){
var map__32413 = params__30013__auto__;
var map__32413__$1 = ((((!((map__32413 == null)))?(((((map__32413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32413):map__32413);
return cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
if(cljs.core.vector_QMARK_.call(null,params__30013__auto__)){
var vec__32415 = params__30013__auto__;
return cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,/\/about\/?/,action__30012__auto___32434);


var action__30012__auto___32435 = (function (params__30013__auto__){
if(cljs.core.map_QMARK_.call(null,params__30013__auto__)){
var map__32418 = params__30013__auto__;
var map__32418__$1 = ((((!((map__32418 == null)))?(((((map__32418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32418):map__32418);
cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"single","single",1551466437),"");

return cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"music","music",-1063514396));
} else {
if(cljs.core.vector_QMARK_.call(null,params__30013__auto__)){
var vec__32420 = params__30013__auto__;
cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"single","single",1551466437),"");

return cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"music","music",-1063514396));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,/\/music\/?/,action__30012__auto___32435);


var action__30012__auto___32436 = (function (params__30013__auto__){
if(cljs.core.map_QMARK_.call(null,params__30013__auto__)){
var map__32423 = params__30013__auto__;
var map__32423__$1 = ((((!((map__32423 == null)))?(((((map__32423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32423):map__32423);
var single = cljs.core.get.call(null,map__32423__$1,new cljs.core.Keyword(null,"single","single",1551466437));
return frontend.routes.music_single.call(null,single);
} else {
if(cljs.core.vector_QMARK_.call(null,params__30013__auto__)){
var vec__32425 = params__30013__auto__;
var single = cljs.core.nth.call(null,vec__32425,(0),null);
return frontend.routes.music_single.call(null,single);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/music/:single",action__30012__auto___32436);


var action__30012__auto___32437 = (function (params__30013__auto__){
if(cljs.core.map_QMARK_.call(null,params__30013__auto__)){
var map__32428 = params__30013__auto__;
var map__32428__$1 = ((((!((map__32428 == null)))?(((((map__32428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32428):map__32428);
var single = cljs.core.get.call(null,map__32428__$1,new cljs.core.Keyword(null,"single","single",1551466437));
return frontend.routes.music_single.call(null,single);
} else {
if(cljs.core.vector_QMARK_.call(null,params__30013__auto__)){
var vec__32430 = params__30013__auto__;
var single = cljs.core.nth.call(null,vec__32430,(0),null);
return frontend.routes.music_single.call(null,single);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/music/:single/",action__30012__auto___32437);


return frontend.routes.history.accountant_history_navigation.call(null);
});
if((typeof frontend !== 'undefined') && (typeof frontend.routes !== 'undefined') && (typeof frontend.routes.current_page !== 'undefined')){
} else {
frontend.routes.current_page = (function (){var method_table__4400__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4401__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4402__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4403__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4404__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"frontend.routes","current-page"),((function (method_table__4400__auto__,prefer_table__4401__auto__,method_cache__4402__auto__,cached_hierarchy__4403__auto__,hierarchy__4404__auto__){
return (function (){
return cljs.core.deref.call(null,frontend.state.app_state).call(null,new cljs.core.Keyword(null,"page","page",849072397));
});})(method_table__4400__auto__,prefer_table__4401__auto__,method_cache__4402__auto__,cached_hierarchy__4403__auto__,hierarchy__4404__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4404__auto__,method_table__4400__auto__,prefer_table__4401__auto__,method_cache__4402__auto__,cached_hierarchy__4403__auto__));
})();
}
cljs.core._add_method.call(null,frontend.routes.current_page,new cljs.core.Keyword(null,"home","home",-74557309),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.home.main], null);
}));
cljs.core._add_method.call(null,frontend.routes.current_page,new cljs.core.Keyword(null,"about","about",1423892543),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.about.main], null);
}));
cljs.core._add_method.call(null,frontend.routes.current_page,new cljs.core.Keyword(null,"music","music",-1063514396),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.music.main], null);
}));
cljs.core._add_method.call(null,frontend.routes.current_page,new cljs.core.Keyword(null,"music-single","music-single",-2070977446),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.music_single.main.call(null,cljs.core.deref.call(null,frontend.state.app_state).call(null,new cljs.core.Keyword(null,"single","single",1551466437)),cljs.core.deref.call(null,frontend.state.app_state).call(null,new cljs.core.Keyword(null,"hash","hash",-13781596)))], null);
}));
cljs.core._add_method.call(null,frontend.routes.current_page,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.home.main], null);
}));

//# sourceMappingURL=routes.js.map?rel=1552590664743
