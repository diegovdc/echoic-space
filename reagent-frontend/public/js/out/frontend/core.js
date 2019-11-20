// Compiled by ClojureScript 1.10.312 {}
goog.provide('frontend.core');
goog.require('cljs.core');
goog.require('goog.history.Html5History');
goog.require('goog.Uri');
goog.require('frontend.state');
goog.require('views.header');
goog.require('views.sonos');
goog.require('frontend.routes');
goog.require('secretary.core');
goog.require('reagent.core');
goog.require('oops.core');
frontend.core.log = (function frontend$core$log(x){
console.log(x);

return x;
});
frontend.core.axios_get = (function (){var target_obj_32599 = deps;
var _STAR_runtime_state_STAR_32602 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_32599,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_32600 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_32599,(0),"axios",true,true,false))?(target_obj_32599["axios"]):null);
var next_obj_32601 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_32600,(0),"get",true,true,false))?(next_obj_32600["get"]):null);
return next_obj_32601;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_32602;
}})();
frontend.core.get_data = (function frontend$core$get_data(func,state_key,url){
return frontend.core.axios_get.call(null,url).then((function (p1__32603_SHARP_){
return cljs.core.js__GT_clj.call(null,p1__32603_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
})).then((function (p1__32604_SHARP_){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__32604_SHARP_);
})).then((function (p1__32605_SHARP_){
return cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,state_key,func.call(null,p1__32605_SHARP_));
}));
});
frontend.core.parse_categories = (function frontend$core$parse_categories(music){
return cljs.core.map.call(null,(function (p1__32606_SHARP_){
return cljs.core.update_in.call(null,p1__32606_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.Keyword(null,"category","category",-593092832)], null),(function (c){
var v = c;
var v__$1 = clojure.string.split.call(null,v,"$");
return cljs.core.map.call(null,clojure.string.trim,v__$1);
}));
}),music);
});
frontend.core.mount_root = (function frontend$core$mount_root(){
frontend.core.get_data.call(null,cljs.core.identity,new cljs.core.Keyword(null,"about","about",1423892543),"/data/about.json");

frontend.core.get_data.call(null,cljs.core.identity,new cljs.core.Keyword(null,"blog","blog",-302707364),"/data/blog.json");

frontend.core.get_data.call(null,cljs.core.identity,new cljs.core.Keyword(null,"music","music",-1063514396),"/data/music.json");

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.header.main], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.routes.current_page], null)], null),document.getElementById("app"));
});
frontend.core.init_BANG_ = (function frontend$core$init_BANG_(){
frontend.routes.app_routes.call(null);

secretary.core.dispatch_BANG_.call(null,window.location.pathname);

return frontend.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1574224250901
