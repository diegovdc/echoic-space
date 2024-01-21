goog.provide('browser.main');
var module$node_modules$axios$dist$browser$axios_cjs=shadow.js.require("module$node_modules$axios$dist$browser$axios_cjs", {});
browser.main.get_data = (function browser$main$get_data(func,state_key,url){
return module$node_modules$axios$dist$browser$axios_cjs.get(url).then((function (p1__37251_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__37251_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
})).then((function (p1__37252_SHARP_){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__37252_SHARP_);
})).then((function (p1__37253_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(browser.state.app_state,cljs.core.assoc,state_key,(func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(p1__37253_SHARP_) : func.call(null,p1__37253_SHARP_)));
}));
});
browser.main.parse_categories = (function browser$main$parse_categories(music){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37254_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__37254_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.Keyword(null,"category","category",-593092832)], null),(function (c){
var v = c;
var v__$1 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(v,"$");
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,v__$1);
}));
}),music);
});
browser.main.current_page = (function browser$main$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(cljs.core.deref(browser.routes.match))?(function (){var view = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(browser.routes.match)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),browser.views.header.main(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,cljs.core.deref(browser.routes.match)], null)], null);
})():null)], null);
});
browser.main.start = (function browser$main$start(){
return Promise.all(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [browser.main.get_data(cljs.core.identity,new cljs.core.Keyword(null,"about","about",1423892543),"/data/about.json"),browser.main.get_data(cljs.core.identity,new cljs.core.Keyword(null,"blog","blog",-302707364),"/data/blog.json"),browser.main.get_data(cljs.core.identity,new cljs.core.Keyword(null,"music","music",-1063514396),"/data/music.json"),browser.main.get_data(cljs.core.identity,new cljs.core.Keyword(null,"posters","posters",1329539529),"/data/posters.json"),browser.main.get_data(cljs.core.identity,new cljs.core.Keyword(null,"cv","cv",-1787015929),"/data/cv.json")], null)).then((function (_){
browser.routes.init();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [browser.main.current_page], null),document.getElementById("app"));
}));
});
browser.main.init = (function browser$main$init(){
return browser.main.start();
});
goog.exportSymbol('browser.main.init', browser.main.init);
browser.main.stop = (function browser$main$stop(){
return console.log("stop");
});

//# sourceMappingURL=browser.main.js.map
