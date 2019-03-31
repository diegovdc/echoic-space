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
var single_hash = clojure.string.split.call(null,single,/#/);
var s = cljs.core.nth.call(null,single_hash,(0),"");
var hash = cljs.core.nth.call(null,single_hash,(1),null);
cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"single","single",1551466437),s);

cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"hash","hash",-13781596),hash);

return cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),page);
});
frontend.routes.app_routes = (function frontend$routes$app_routes(){
var action__30999__auto___49985 = (function (params__31000__auto__){
if(cljs.core.map_QMARK_.call(null,params__31000__auto__)){
var map__49945 = params__31000__auto__;
var map__49945__$1 = ((((!((map__49945 == null)))?(((((map__49945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49945):map__49945);
return cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core.vector_QMARK_.call(null,params__31000__auto__)){
var vec__49947 = params__31000__auto__;
return cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__30999__auto___49985);


var action__30999__auto___49986 = (function (params__31000__auto__){
if(cljs.core.map_QMARK_.call(null,params__31000__auto__)){
var map__49950 = params__31000__auto__;
var map__49950__$1 = ((((!((map__49950 == null)))?(((((map__49950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49950):map__49950);
return cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
if(cljs.core.vector_QMARK_.call(null,params__31000__auto__)){
var vec__49952 = params__31000__auto__;
return cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,/\/about\/?/,action__30999__auto___49986);


var action__30999__auto___49987 = (function (params__31000__auto__){
if(cljs.core.map_QMARK_.call(null,params__31000__auto__)){
var map__49955 = params__31000__auto__;
var map__49955__$1 = ((((!((map__49955 == null)))?(((((map__49955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49955):map__49955);
cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"single","single",1551466437),"");

return cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"music","music",-1063514396));
} else {
if(cljs.core.vector_QMARK_.call(null,params__31000__auto__)){
var vec__49957 = params__31000__auto__;
cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"single","single",1551466437),"");

return cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"music","music",-1063514396));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,/\/music\/?/,action__30999__auto___49987);


var action__30999__auto___49988 = (function (params__31000__auto__){
if(cljs.core.map_QMARK_.call(null,params__31000__auto__)){
var map__49960 = params__31000__auto__;
var map__49960__$1 = ((((!((map__49960 == null)))?(((((map__49960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49960):map__49960);
var single = cljs.core.get.call(null,map__49960__$1,new cljs.core.Keyword(null,"single","single",1551466437));
return frontend.routes.music_single.call(null,new cljs.core.Keyword(null,"music-single","music-single",-2070977446),single);
} else {
if(cljs.core.vector_QMARK_.call(null,params__31000__auto__)){
var vec__49962 = params__31000__auto__;
var single = cljs.core.nth.call(null,vec__49962,(0),null);
return frontend.routes.music_single.call(null,new cljs.core.Keyword(null,"music-single","music-single",-2070977446),single);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/music/:single",action__30999__auto___49988);


var action__30999__auto___49989 = (function (params__31000__auto__){
if(cljs.core.map_QMARK_.call(null,params__31000__auto__)){
var map__49965 = params__31000__auto__;
var map__49965__$1 = ((((!((map__49965 == null)))?(((((map__49965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49965):map__49965);
var single = cljs.core.get.call(null,map__49965__$1,new cljs.core.Keyword(null,"single","single",1551466437));
return frontend.routes.music_single.call(null,new cljs.core.Keyword(null,"music-single","music-single",-2070977446),single);
} else {
if(cljs.core.vector_QMARK_.call(null,params__31000__auto__)){
var vec__49967 = params__31000__auto__;
var single = cljs.core.nth.call(null,vec__49967,(0),null);
return frontend.routes.music_single.call(null,new cljs.core.Keyword(null,"music-single","music-single",-2070977446),single);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/music/:single/",action__30999__auto___49989);


var action__30999__auto___49990 = (function (params__31000__auto__){
if(cljs.core.map_QMARK_.call(null,params__31000__auto__)){
var map__49970 = params__31000__auto__;
var map__49970__$1 = ((((!((map__49970 == null)))?(((((map__49970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49970):map__49970);
console.log("blog");

cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"single","single",1551466437),"");

return cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"blog","blog",-302707364));
} else {
if(cljs.core.vector_QMARK_.call(null,params__31000__auto__)){
var vec__49972 = params__31000__auto__;
console.log("blog");

cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"single","single",1551466437),"");

return cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"blog","blog",-302707364));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,/\/blog\/?/,action__30999__auto___49990);


var action__30999__auto___49991 = (function (params__31000__auto__){
if(cljs.core.map_QMARK_.call(null,params__31000__auto__)){
var map__49975 = params__31000__auto__;
var map__49975__$1 = ((((!((map__49975 == null)))?(((((map__49975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49975):map__49975);
var single = cljs.core.get.call(null,map__49975__$1,new cljs.core.Keyword(null,"single","single",1551466437));
return frontend.routes.music_single.call(null,new cljs.core.Keyword(null,"blog-single","blog-single",1335736031),single);
} else {
if(cljs.core.vector_QMARK_.call(null,params__31000__auto__)){
var vec__49977 = params__31000__auto__;
var single = cljs.core.nth.call(null,vec__49977,(0),null);
return frontend.routes.music_single.call(null,new cljs.core.Keyword(null,"blog-single","blog-single",1335736031),single);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/blog/:single",action__30999__auto___49991);


var action__30999__auto___49992 = (function (params__31000__auto__){
if(cljs.core.map_QMARK_.call(null,params__31000__auto__)){
var map__49980 = params__31000__auto__;
var map__49980__$1 = ((((!((map__49980 == null)))?(((((map__49980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49980):map__49980);
var single = cljs.core.get.call(null,map__49980__$1,new cljs.core.Keyword(null,"single","single",1551466437));
return frontend.routes.music_single.call(null,new cljs.core.Keyword(null,"blog-single","blog-single",1335736031),single);
} else {
if(cljs.core.vector_QMARK_.call(null,params__31000__auto__)){
var vec__49982 = params__31000__auto__;
var single = cljs.core.nth.call(null,vec__49982,(0),null);
return frontend.routes.music_single.call(null,new cljs.core.Keyword(null,"blog-single","blog-single",1335736031),single);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/blog/:single/",action__30999__auto___49992);


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
cljs.core._add_method.call(null,frontend.routes.current_page,new cljs.core.Keyword(null,"blog","blog",-302707364),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.blog.main], null);
}));
cljs.core._add_method.call(null,frontend.routes.current_page,new cljs.core.Keyword(null,"blog-single","blog-single",1335736031),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.music_single.main.call(null,cljs.core.deref.call(null,frontend.state.app_state).call(null,new cljs.core.Keyword(null,"single","single",1551466437)),cljs.core.deref.call(null,frontend.state.app_state).call(null,new cljs.core.Keyword(null,"hash","hash",-13781596)))], null);
}));
cljs.core._add_method.call(null,frontend.routes.current_page,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.home.main], null);
}));

//# sourceMappingURL=routes.js.map?rel=1553998298290
