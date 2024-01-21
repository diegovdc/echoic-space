goog.provide('browser.views.music');
browser.views.music.selected_categories = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
browser.views.music.merge_blog_music = (function browser$views$music$merge_blog_music(app_state){
var music = new cljs.core.Keyword(null,"music","music",-1063514396).cljs$core$IFn$_invoke$arity$1(app_state);
var blog = new cljs.core.Keyword(null,"blog","blog",-302707364).cljs$core$IFn$_invoke$arity$1(app_state);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(music,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33772_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__33772_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.Keyword(null,"category","category",-593092832)], null),(function (col){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(col,"Bit\u00E1cora");
}));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__33770_SHARP_){
var or__5045__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__33770_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.Keyword(null,"file_name","file_name",2030201601)], null));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__33770_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.Keyword(null,"include_in_music_archive","include_in_music_archive",1665717279)], null));
}
}),blog)));
});
browser.views.music.main = (function browser$views$music$main(app_state){
var music = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33773_SHARP_){
return new cljs.core.Keyword(null,"attributes","attributes",-74013604).cljs$core$IFn$_invoke$arity$1(p1__33773_SHARP_);
}),browser.views.music.merge_blog_music(cljs.core.deref(app_state)));
var categories = cljs.core.set(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33774_SHARP_){
return new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(p1__33774_SHARP_);
}),music))));
var post__GT_href = (function (post){
var G__33777 = (cljs.core.truth_(cljs.core.some((function (p1__33775_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Bit\u00E1cora",p1__33775_SHARP_);
}),new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(post)))?new cljs.core.Keyword("browser.routes","blog-single","browser.routes/blog-single",768729615):new cljs.core.Keyword("browser.routes","music-single","browser.routes/music-single",-2105853526));
var G__33778 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(post)], null);
var fexpr__33776 = new cljs.core.Keyword(null,"routing-fn","routing-fn",1896294414).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app_state));
return (fexpr__33776.cljs$core$IFn$_invoke$arity$2 ? fexpr__33776.cljs$core$IFn$_invoke$arity$2(G__33777,G__33778) : fexpr__33776.call(null,G__33777,G__33778));
});
return browser.views.helpers.make_archive_page("M\u00FAsica",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),browser.views.helpers.print_categories(browser.views.music.selected_categories,categories),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"music__year-container",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first(m)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"music__year"], null),cljs.core.first(m)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"music-work"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(browser.views.helpers.make_archive_item,post__GT_href),cljs.core.second(m)))], null)], null);
}),browser.helpers.sort_entry_by_year(browser.helpers.filter_by_selected_categories(cljs.core.deref(browser.views.music.selected_categories),music))))], null)], null));
});

//# sourceMappingURL=browser.views.music.js.map
