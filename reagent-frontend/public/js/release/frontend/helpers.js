// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('frontend.helpers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('jayq.core');
goog.require('clojure.string');
frontend.helpers.find_first = (function frontend$helpers$find_first(fn,coll){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(fn,coll));
});
frontend.helpers.percentage = (function frontend$helpers$percentage(part,total){
return ((100) * (part / total));
});
frontend.helpers.toInt = (function frontend$helpers$toInt(n){
return parseInt(n,(10));
});
frontend.helpers.fromNaN = (function frontend$helpers$fromNaN(n){
if(cljs.core.truth_(isNaN(n))){
return (0);
} else {
return n;
}
});
frontend.helpers.padTime = (function frontend$helpers$padTime(time_component){
if((frontend.helpers.fromNaN(time_component) < (10))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.helpers.fromNaN(frontend.helpers.toInt(time_component)))].join('');
} else {
return frontend.helpers.fromNaN(frontend.helpers.toInt(time_component));
}
});
frontend.helpers.secondsToMinutes = (function frontend$helpers$secondsToMinutes(seconds){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.helpers.padTime(cljs.core.quot(seconds,(60)))),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.helpers.padTime(cljs.core.rem(seconds,(60))))].join('');
});
frontend.helpers.safe_rand_nth = (function frontend$helpers$safe_rand_nth(or,xs){
if(cljs.core.empty_QMARK_(xs)){
return or;
} else {
return cljs.core.rand_nth(xs);
}
});
frontend.helpers.scroll_to = (function frontend$helpers$scroll_to(top){
return jayq.core.anim(jayq.core.$.cljs$core$IFn$_invoke$arity$1("html, body"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,top], null));
});
frontend.helpers.set_scroll = (function frontend$helpers$set_scroll(top){
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(window).scrollTop(top);
});
frontend.helpers.maybe_make_audio_url = (function frontend$helpers$maybe_make_audio_url(base,slug,file_name){
if(clojure.string.includes_QMARK_(file_name,"http")){
return file_name;
} else {
return ["http://www.echoic.space/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slug),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name)].join('');
}
});
frontend.helpers.make_audio_url = (function frontend$helpers$make_audio_url(music_post_attrs){
var file_name = cljs.core.cst$kw$file_name.cljs$core$IFn$_invoke$arity$2(music_post_attrs,"");
var slug = cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(music_post_attrs);
return frontend.helpers.maybe_make_audio_url("music",slug,file_name);
});
frontend.helpers.year = (function frontend$helpers$year(music){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(music),"-"));
});
frontend.helpers.sort_entry_by_year = (function frontend$helpers$sort_entry_by_year(entry){
return cljs.core.group_by(frontend.helpers.year,cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (p1__27915_SHARP_,p2__27914_SHARP_){
return cljs.core.compare(cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(p2__27914_SHARP_),cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(p1__27915_SHARP_));
}),entry));
});
frontend.helpers.filter_by_selected_categories = (function frontend$helpers$filter_by_selected_categories(selected_categories,entry){
if(cljs.core.empty_QMARK_(selected_categories)){
return entry;
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__27916_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,(function (){var G__27917 = selected_categories;
var G__27918 = cljs.core.set(cljs.core.cst$kw$category.cljs$core$IFn$_invoke$arity$1(p1__27916_SHARP_));
return clojure.set.intersection(G__27917,G__27918);
})());
}),entry);
}
});
frontend.helpers.toggle_in_set = (function frontend$helpers$toggle_in_set(set,val){
if(cljs.core.contains_QMARK_(set,val)){
var G__27919 = set;
var G__27920 = cljs.core.PersistentHashSet.createAsIfByAssoc([val]);
return clojure.set.difference(G__27919,G__27920);
} else {
var G__27921 = set;
var G__27922 = cljs.core.PersistentHashSet.createAsIfByAssoc([val]);
return clojure.set.union(G__27921,G__27922);
}
});
frontend.helpers.toggle_category = (function frontend$helpers$toggle_category(selected_categories_atom,cat){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_categories_atom,(function (p1__27923_SHARP_){
return frontend.helpers.toggle_in_set(p1__27923_SHARP_,cat);
}));
});
});
frontend.helpers.cats = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null));
var fexpr__27924_27925 = frontend.helpers.toggle_category(frontend.helpers.cats,(2));
(fexpr__27924_27925.cljs$core$IFn$_invoke$arity$0 ? fexpr__27924_27925.cljs$core$IFn$_invoke$arity$0() : fexpr__27924_27925.call(null));
