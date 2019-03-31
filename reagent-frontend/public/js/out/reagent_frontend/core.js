// Compiled by ClojureScript 1.10.312 {}
goog.provide('reagent_frontend.core');
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
reagent_frontend.core.log = (function reagent_frontend$core$log(x){
console.log(x);

return x;
});
reagent_frontend.core.axios_get = (function (){var target_obj_50023 = deps;
var _STAR_runtime_state_STAR_50026 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_50023,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_50024 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_50023,(0),"axios",true,true,false))?(target_obj_50023["axios"]):null);
var next_obj_50025 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_50024,(0),"get",true,true,false))?(next_obj_50024["get"]):null);
return next_obj_50025;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_50026;
}})();
reagent_frontend.core.get_data = (function reagent_frontend$core$get_data(func,state_key,url){
return reagent_frontend.core.axios_get.call(null,url).then((function (p1__50027_SHARP_){
return cljs.core.js__GT_clj.call(null,p1__50027_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
})).then((function (p1__50028_SHARP_){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__50028_SHARP_);
})).then((function (p1__50029_SHARP_){
return cljs.core.swap_BANG_.call(null,frontend.state.app_state,cljs.core.assoc,state_key,func.call(null,p1__50029_SHARP_));
}));
});
reagent_frontend.core.parse_categories = (function reagent_frontend$core$parse_categories(music){
return cljs.core.map.call(null,(function (p1__50030_SHARP_){
return cljs.core.update_in.call(null,p1__50030_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.Keyword(null,"category","category",-593092832)], null),(function (c){
var v = c;
var v__$1 = clojure.string.split.call(null,v,"$");
return cljs.core.map.call(null,clojure.string.trim,v__$1);
}));
}),music);
});
reagent_frontend.core.mount_root = (function reagent_frontend$core$mount_root(){
reagent_frontend.core.get_data.call(null,cljs.core.identity,new cljs.core.Keyword(null,"about","about",1423892543),"/data/about.json");

reagent_frontend.core.get_data.call(null,cljs.core.identity,new cljs.core.Keyword(null,"blog","blog",-302707364),"/data/blog.json");

reagent_frontend.core.get_data.call(null,cljs.core.identity,new cljs.core.Keyword(null,"music","music",-1063514396),"/data/music.json");

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.header.main], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.routes.current_page], null)], null),document.getElementById("app"));
});
reagent_frontend.core.init_BANG_ = (function reagent_frontend$core$init_BANG_(){
frontend.routes.app_routes.call(null);

secretary.core.dispatch_BANG_.call(null,window.location.pathname);

return reagent_frontend.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1553998379211
