goog.provide('browser.routes');
browser.routes.match = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
browser.routes.routes = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("browser.routes","home","browser.routes/home",-41808685),new cljs.core.Keyword(null,"view","view",1247994814),(function (){
return browser.views.home.main();
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/about/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("browser.routes","about","browser.routes/about",1317708655),new cljs.core.Keyword(null,"view","view",1247994814),(function (){
return browser.views.about.main();
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/music/:slug/",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("browser.routes","music-single","browser.routes/music-single",-2105853526),new cljs.core.Keyword(null,"view","view",1247994814),(function (p1__37243_SHARP_){
var slug = new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(p1__37243_SHARP_)));
return browser.views.music_single.main(browser.state.app_state,slug,null);
}),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slug","slug",2029314850),cljs.core.string_QMARK_], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/music/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("browser.routes","music","browser.routes/music",-89635916),new cljs.core.Keyword(null,"view","view",1247994814),(function (){
return browser.views.music.main(browser.state.app_state);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/blog/:slug/",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("browser.routes","blog-single","browser.routes/blog-single",768729615),new cljs.core.Keyword(null,"view","view",1247994814),(function (p1__37244_SHARP_){
var slug = new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(p1__37244_SHARP_)));
return browser.views.music_single.main(browser.state.app_state,slug,null);
}),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slug","slug",2029314850),cljs.core.string_QMARK_], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/blog/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("browser.routes","blog","browser.routes/blog",-405223764),new cljs.core.Keyword(null,"view","view",1247994814),(function (){
return browser.views.blog.main(browser.state.app_state);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/contact/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("browser.routes","contact","browser.routes/contact",572111692),new cljs.core.Keyword(null,"view","view",1247994814),(function (){
return browser.views.contact.main(browser.state.app_state);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/mailing-list/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("browser.routes","mailing-list","browser.routes/mailing-list",-956914558),new cljs.core.Keyword(null,"view","view",1247994814),(function (){
return browser.views.mailing_list.main(browser.state.app_state);
})], null)], null)], null);
browser.routes.init = (function browser$routes$init(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(browser.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"routing-fn","routing-fn",1896294414),reitit.frontend.easy.href);

return reitit.frontend.easy.start_BANG_(reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(browser.routes.routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.spec.coercion], null)], null)),(function (m){
console.log("router",m);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(browser.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(m)))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route","route",329891309),m], 0));

return cljs.core.reset_BANG_(browser.routes.match,m);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),false], null));
});

//# sourceMappingURL=browser.routes.js.map
