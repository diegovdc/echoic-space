goog.provide('browser.views.blog');
browser.views.blog.selected_categories = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
browser.views.blog.main = (function browser$views$blog$main(app_state){
var music = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33745_SHARP_){
return new cljs.core.Keyword(null,"attributes","attributes",-74013604).cljs$core$IFn$_invoke$arity$1(p1__33745_SHARP_);
}),new cljs.core.Keyword(null,"blog","blog",-302707364).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app_state)));
var categories = cljs.core.set(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33746_SHARP_){
return new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(p1__33746_SHARP_);
}),music))));
var post__GT_href = (function (post){
var G__33749 = new cljs.core.Keyword("browser.routes","blog-single","browser.routes/blog-single",768729615);
var G__33750 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(post)], null);
var fexpr__33748 = new cljs.core.Keyword(null,"routing-fn","routing-fn",1896294414).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app_state));
return (fexpr__33748.cljs$core$IFn$_invoke$arity$2 ? fexpr__33748.cljs$core$IFn$_invoke$arity$2(G__33749,G__33750) : fexpr__33748.call(null,G__33749,G__33750));
});
return browser.views.helpers.make_archive_page("Bit\u00E1cora",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),browser.views.helpers.print_categories(browser.views.blog.selected_categories,categories),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"music__year-container",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first(m)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"music__year"], null),cljs.core.first(m)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"music-work"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(browser.views.helpers.make_archive_item,post__GT_href),cljs.core.second(m))], null)], null);
}),browser.helpers.sort_entry_by_year(browser.helpers.filter_by_selected_categories(cljs.core.deref(browser.views.blog.selected_categories),music)))], null)], null));
});

//# sourceMappingURL=browser.views.blog.js.map
