// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('views.music');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('views.helpers');
goog.require('frontend.state');
goog.require('frontend.helpers');
goog.require('reagent.core');
views.music.log = deps.log;
views.music.selected_categories = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
views.music.merge_blog_music = (function views$music$merge_blog_music(){
var music = cljs.core.cst$kw$music.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.app_state));
var blog = cljs.core.cst$kw$blog.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.app_state));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(music,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (music,blog){
return (function (p1__28509_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__28509_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attributes,cljs.core.cst$kw$category], null),((function (music,blog){
return (function (col){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(col,"Bit\u00E1cora");
});})(music,blog))
);
});})(music,blog))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (music,blog){
return (function (p1__28508_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__28508_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attributes,cljs.core.cst$kw$file_name], null));
});})(music,blog))
,blog)));
});
views.music.main = (function views$music$main(){
var music = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28510_SHARP_){
return cljs.core.cst$kw$attributes.cljs$core$IFn$_invoke$arity$1(p1__28510_SHARP_);
}),views.music.merge_blog_music());
var categories = cljs.core.set(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (music){
return (function (p1__28511_SHARP_){
return cljs.core.cst$kw$category.cljs$core$IFn$_invoke$arity$1(p1__28511_SHARP_);
});})(music))
,(views.music.log.cljs$core$IFn$_invoke$arity$1 ? views.music.log.cljs$core$IFn$_invoke$arity$1(music) : views.music.log.call(null,music))))));
return views.helpers.make_archive_page("M\u00FAsica",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,views.helpers.print_categories(views.music.selected_categories,categories),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (music,categories){
return (function (m){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"music__year-container",cljs.core.cst$kw$key,cljs.core.first(m)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"music__year"], null),cljs.core.first(m)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"music-work"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (music,categories){
return (function (p1__28512_SHARP_){
return views.helpers.make_archive_item((cljs.core.truth_(cljs.core.some(((function (music,categories){
return (function (cat){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Bit\u00E1cora",cat);
});})(music,categories))
,cljs.core.cst$kw$category.cljs$core$IFn$_invoke$arity$1(p1__28512_SHARP_)))?"/blog":"/music"),p1__28512_SHARP_);
});})(music,categories))
,cljs.core.second(m))], null)], null);
});})(music,categories))
,frontend.helpers.sort_entry_by_year(frontend.helpers.filter_by_selected_categories(cljs.core.deref(views.music.selected_categories),music)))], null)], null));
});
