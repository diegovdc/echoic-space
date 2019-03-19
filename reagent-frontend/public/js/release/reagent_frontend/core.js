// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('reagent_frontend.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
reagent_frontend.core.axios_get = (function (){var target_obj_31288 = deps;
var next_obj_31289 = (target_obj_31288["axios"]);
var next_obj_31290 = (next_obj_31289["get"]);
return next_obj_31290;
})();
reagent_frontend.core.get_data = (function reagent_frontend$core$get_data(func,state_key,url){
return (reagent_frontend.core.axios_get.cljs$core$IFn$_invoke$arity$1 ? reagent_frontend.core.axios_get.cljs$core$IFn$_invoke$arity$1(url) : reagent_frontend.core.axios_get.call(null,url)).then((function (p1__31291_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__31291_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
})).then((function (p1__31292_SHARP_){
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(p1__31292_SHARP_);
})).then((function (p1__31293_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.app_state,cljs.core.assoc,state_key,(func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(p1__31293_SHARP_) : func.call(null,p1__31293_SHARP_)));
}));
});
reagent_frontend.core.parse_categories = (function reagent_frontend$core$parse_categories(music){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31294_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__31294_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attributes,cljs.core.cst$kw$category], null),(function (c){
var v = c;
var v__$1 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(v,"$");
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,v__$1);
}));
}),music);
});
reagent_frontend.core.mount_root = (function reagent_frontend$core$mount_root(){
reagent_frontend.core.get_data(reagent_frontend.core.parse_categories,cljs.core.cst$kw$music,"/data/music.json");

reagent_frontend.core.get_data(cljs.core.identity,cljs.core.cst$kw$blog,"/data/blog.json");

reagent_frontend.core.get_data(cljs.core.identity,cljs.core.cst$kw$about,"/data/about.json");

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [views.header.main], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.routes.current_page], null)], null),document.getElementById("app"));
});
reagent_frontend.core.init_BANG_ = (function reagent_frontend$core$init_BANG_(){
frontend.routes.app_routes();

secretary.core.dispatch_BANG_(window.location.pathname);

return reagent_frontend.core.mount_root();
});
(((1) + (1)) + (1));
