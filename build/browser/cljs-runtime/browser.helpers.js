goog.provide('browser.helpers');
browser.helpers.find_first = (function browser$helpers$find_first(fn,coll){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(fn,coll));
});
browser.helpers.percentage = (function browser$helpers$percentage(part,total){
return ((100) * (part / total));
});
browser.helpers.toInt = (function browser$helpers$toInt(n){
return parseInt(n,(10));
});
browser.helpers.fromNaN = (function browser$helpers$fromNaN(n){
if(cljs.core.truth_(isNaN(n))){
return (0);
} else {
return n;
}
});
browser.helpers.padTime = (function browser$helpers$padTime(time_component){
if((browser.helpers.fromNaN(time_component) < (10))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(browser.helpers.fromNaN(browser.helpers.toInt(time_component)))].join('');
} else {
return browser.helpers.fromNaN(browser.helpers.toInt(time_component));
}
});
browser.helpers.secondsToMinutes = (function browser$helpers$secondsToMinutes(seconds){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(browser.helpers.padTime(cljs.core.quot(seconds,(60)))),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(browser.helpers.padTime(cljs.core.rem(seconds,(60))))].join('');
});
browser.helpers.safe_rand_nth = (function browser$helpers$safe_rand_nth(or_STAR_,xs){
if(cljs.core.empty_QMARK_(xs)){
return or_STAR_;
} else {
return cljs.core.rand_nth(xs);
}
});
browser.helpers.scroll_to = (function browser$helpers$scroll_to(top){
return window.scroll(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),top,new cljs.core.Keyword(null,"behavior","behavior",1202392908),"smooth"], null)));
});
browser.helpers.set_scroll = (function browser$helpers$set_scroll(top){
return window.scroll(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),top], null)));
});
browser.helpers.maybe_make_audio_url = (function browser$helpers$maybe_make_audio_url(base,slug,file_name){
if(clojure.string.includes_QMARK_(file_name,"http")){
return file_name;
} else {
return ["http://www.echoic.space/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slug),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name)].join('');
}
});
browser.helpers.make_audio_url = (function browser$helpers$make_audio_url(music_post_attrs){
var file_name = new cljs.core.Keyword(null,"file_name","file_name",2030201601).cljs$core$IFn$_invoke$arity$2(music_post_attrs,"");
var slug = new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(music_post_attrs);
return browser.helpers.maybe_make_audio_url("music",slug,file_name);
});
browser.helpers.year = (function browser$helpers$year(music){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(music),"-"));
});
browser.helpers.sort_entry_by_year = (function browser$helpers$sort_entry_by_year(entry){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31995){
var vec__31996 = p__31995;
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31996,(0),null);
var musics = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31996,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [year,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"date","date",-1463434462),cljs.core._GT_,musics)], null);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.first,cljs.core._GT_,cljs.core.group_by(browser.helpers.year,entry)));
});
browser.helpers.filter_by_selected_categories = (function browser$helpers$filter_by_selected_categories(selected_categories,entry){
if(cljs.core.empty_QMARK_(selected_categories)){
return entry;
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31999_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(selected_categories,cljs.core.set(new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(p1__31999_SHARP_))));
}),entry);
}
});
browser.helpers.toggle_in_set = (function browser$helpers$toggle_in_set(set,val){
if(cljs.core.contains_QMARK_(set,val)){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(set,cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
} else {
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(set,cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
}
});
browser.helpers.toggle_category = (function browser$helpers$toggle_category(selected_categories_atom,cat){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_categories_atom,(function (p1__32000_SHARP_){
return browser.helpers.toggle_in_set(p1__32000_SHARP_,cat);
}));
});
});

//# sourceMappingURL=browser.helpers.js.map
