// Compiled by ClojureScript 1.10.312 {}
goog.provide('frontend.routes');
goog.require('cljs.core');
goog.require('goog.history.Html5History');
goog.require('goog.Uri');
goog.require('frontend.history');
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
var single_hash = clojure.string.split.call(null,single,/#/);
var s = cljs.core.nth.call(null,single_hash,(0),"");
var hash = cljs.core.nth.call(null,single_hash,(1),null);
cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"single","single",1551466437),s);

cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"hash","hash",-13781596),hash);

return cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),page);
});
frontend.routes.app_routes = (function frontend$routes$app_routes(){
var action__31203__auto___32588 = (function (params__31204__auto__){
if(cljs.core.map_QMARK_.call(null,params__31204__auto__)){
var map__32543 = params__31204__auto__;
var map__32543__$1 = ((((!((map__32543 == null)))?(((((map__32543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32543):map__32543);
return cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core.vector_QMARK_.call(null,params__31204__auto__)){
var vec__32545 = params__31204__auto__;
return cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__31203__auto___32588);


var action__31203__auto___32589 = (function (params__31204__auto__){
if(cljs.core.map_QMARK_.call(null,params__31204__auto__)){
var map__32548 = params__31204__auto__;
var map__32548__$1 = ((((!((map__32548 == null)))?(((((map__32548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32548):map__32548);
return cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"radio","radio",1323726374));
} else {
if(cljs.core.vector_QMARK_.call(null,params__31204__auto__)){
var vec__32550 = params__31204__auto__;
return cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"radio","radio",1323726374));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/radio",action__31203__auto___32589);


var action__31203__auto___32590 = (function (params__31204__auto__){
if(cljs.core.map_QMARK_.call(null,params__31204__auto__)){
var map__32553 = params__31204__auto__;
var map__32553__$1 = ((((!((map__32553 == null)))?(((((map__32553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32553):map__32553);
return cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
if(cljs.core.vector_QMARK_.call(null,params__31204__auto__)){
var vec__32555 = params__31204__auto__;
return cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,/\/about\/?/,action__31203__auto___32590);


var action__31203__auto___32591 = (function (params__31204__auto__){
if(cljs.core.map_QMARK_.call(null,params__31204__auto__)){
var map__32558 = params__31204__auto__;
var map__32558__$1 = ((((!((map__32558 == null)))?(((((map__32558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32558):map__32558);
cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"single","single",1551466437),"");

return cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"music","music",-1063514396));
} else {
if(cljs.core.vector_QMARK_.call(null,params__31204__auto__)){
var vec__32560 = params__31204__auto__;
cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"single","single",1551466437),"");

return cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"music","music",-1063514396));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,/\/music\/?/,action__31203__auto___32591);


var action__31203__auto___32592 = (function (params__31204__auto__){
if(cljs.core.map_QMARK_.call(null,params__31204__auto__)){
var map__32563 = params__31204__auto__;
var map__32563__$1 = ((((!((map__32563 == null)))?(((((map__32563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32563):map__32563);
var single = cljs.core.get.call(null,map__32563__$1,new cljs.core.Keyword(null,"single","single",1551466437));
return frontend.routes.music_single.call(null,new cljs.core.Keyword(null,"music-single","music-single",-2070977446),single);
} else {
if(cljs.core.vector_QMARK_.call(null,params__31204__auto__)){
var vec__32565 = params__31204__auto__;
var single = cljs.core.nth.call(null,vec__32565,(0),null);
return frontend.routes.music_single.call(null,new cljs.core.Keyword(null,"music-single","music-single",-2070977446),single);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/music/:single",action__31203__auto___32592);


var action__31203__auto___32593 = (function (params__31204__auto__){
if(cljs.core.map_QMARK_.call(null,params__31204__auto__)){
var map__32568 = params__31204__auto__;
var map__32568__$1 = ((((!((map__32568 == null)))?(((((map__32568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32568):map__32568);
var single = cljs.core.get.call(null,map__32568__$1,new cljs.core.Keyword(null,"single","single",1551466437));
return frontend.routes.music_single.call(null,new cljs.core.Keyword(null,"music-single","music-single",-2070977446),single);
} else {
if(cljs.core.vector_QMARK_.call(null,params__31204__auto__)){
var vec__32570 = params__31204__auto__;
var single = cljs.core.nth.call(null,vec__32570,(0),null);
return frontend.routes.music_single.call(null,new cljs.core.Keyword(null,"music-single","music-single",-2070977446),single);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/music/:single/",action__31203__auto___32593);


var action__31203__auto___32594 = (function (params__31204__auto__){
if(cljs.core.map_QMARK_.call(null,params__31204__auto__)){
var map__32573 = params__31204__auto__;
var map__32573__$1 = ((((!((map__32573 == null)))?(((((map__32573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32573):map__32573);
console.log("blog");

cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"single","single",1551466437),"");

return cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"blog","blog",-302707364));
} else {
if(cljs.core.vector_QMARK_.call(null,params__31204__auto__)){
var vec__32575 = params__31204__auto__;
console.log("blog");

cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"single","single",1551466437),"");

return cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"blog","blog",-302707364));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,/\/blog\/?/,action__31203__auto___32594);


var action__31203__auto___32595 = (function (params__31204__auto__){
if(cljs.core.map_QMARK_.call(null,params__31204__auto__)){
var map__32578 = params__31204__auto__;
var map__32578__$1 = ((((!((map__32578 == null)))?(((((map__32578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32578):map__32578);
var single = cljs.core.get.call(null,map__32578__$1,new cljs.core.Keyword(null,"single","single",1551466437));
return frontend.routes.music_single.call(null,new cljs.core.Keyword(null,"blog-single","blog-single",1335736031),single);
} else {
if(cljs.core.vector_QMARK_.call(null,params__31204__auto__)){
var vec__32580 = params__31204__auto__;
var single = cljs.core.nth.call(null,vec__32580,(0),null);
return frontend.routes.music_single.call(null,new cljs.core.Keyword(null,"blog-single","blog-single",1335736031),single);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/blog/:single",action__31203__auto___32595);


var action__31203__auto___32596 = (function (params__31204__auto__){
if(cljs.core.map_QMARK_.call(null,params__31204__auto__)){
var map__32583 = params__31204__auto__;
var map__32583__$1 = ((((!((map__32583 == null)))?(((((map__32583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32583):map__32583);
var single = cljs.core.get.call(null,map__32583__$1,new cljs.core.Keyword(null,"single","single",1551466437));
return frontend.routes.music_single.call(null,new cljs.core.Keyword(null,"blog-single","blog-single",1335736031),single);
} else {
if(cljs.core.vector_QMARK_.call(null,params__31204__auto__)){
var vec__32585 = params__31204__auto__;
var single = cljs.core.nth.call(null,vec__32585,(0),null);
return frontend.routes.music_single.call(null,new cljs.core.Keyword(null,"blog-single","blog-single",1335736031),single);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/blog/:single/",action__31203__auto___32596);


return frontend.history.accountant_history_navigation.call(null);
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
cljs.core._add_method.call(null,frontend.routes.current_page,new cljs.core.Keyword(null,"radio","radio",1323726374),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.radio.main], null);
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

//# sourceMappingURL=routes.js.map?rel=1574224250839
