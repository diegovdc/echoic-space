goog.provide('browser.views.js_loader');
browser.views.js_loader.filter_loaded = (function browser$views$js_loader$filter_loaded(scripts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__33313){
var vec__33314 = p__33313;
var loaded_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33314,(0),null);
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33314,(1),null);
if(cljs.core.truth_((loaded_QMARK_.cljs$core$IFn$_invoke$arity$0 ? loaded_QMARK_.cljs$core$IFn$_invoke$arity$0() : loaded_QMARK_.call(null)))){
return acc;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,src);
}
}),cljs.core.PersistentVector.EMPTY,scripts);
});
browser.views.js_loader.load_STAR_ = (function browser$views$js_loader$load_STAR_(const_urls){
return goog.net.jsloader.safeLoadMany(cljs.core.clj__GT_js(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(goog.html.TrustedResourceUrl.format,const_urls)));
});
/**
 * Load a supplied list of Javascript files and render a component
 * during loading and another component as soon as every script is
 * loaded.
 * 
 * Arg map: {:scripts {loaded-test-fn src}
 *           :loading component
 *           :loaded component}
 */
browser.views.js_loader.js_loader = (function browser$views$js_loader$js_loader(p__33321){
var map__33322 = p__33321;
var map__33322__$1 = cljs.core.__destructure_map(map__33322);
var scripts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33322__$1,new cljs.core.Keyword(null,"scripts","scripts",626373193));
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33322__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var loading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33322__$1,new cljs.core.Keyword(null,"loading","loading",-737050189));
var loaded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33322__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));
var loaded_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_){
var not_loaded = browser.views.js_loader.filter_loaded(scripts);
return browser.views.js_loader.load_STAR_(not_loaded).then((function (){
(callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));

return cljs.core.reset_BANG_(loaded_QMARK_,true);
}));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (p__33325){
var map__33326 = p__33325;
var map__33326__$1 = cljs.core.__destructure_map(map__33326);
var scripts__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33326__$1,new cljs.core.Keyword(null,"scripts","scripts",626373193));
var loading__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33326__$1,new cljs.core.Keyword(null,"loading","loading",-737050189));
var loaded__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33326__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));
if(cljs.core.truth_(cljs.core.deref(loaded_QMARK_))){
return loaded__$1;
} else {
return loading__$1;
}
})], null));
});

//# sourceMappingURL=browser.views.js_loader.js.map
