// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('views.blog');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('views.helpers');
goog.require('frontend.state');
goog.require('reagent.core');
goog.require('frontend.helpers');
views.blog.log = deps.log;
views.blog.selected_categories = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
views.blog.main = (function views$blog$main(){
var music = (function (){var G__28344 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28342_SHARP_){
return cljs.core.cst$kw$attributes.cljs$core$IFn$_invoke$arity$1(p1__28342_SHARP_);
}),cljs.core.cst$kw$blog.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.app_state)));
return (views.blog.log.cljs$core$IFn$_invoke$arity$1 ? views.blog.log.cljs$core$IFn$_invoke$arity$1(G__28344) : views.blog.log.call(null,G__28344));
})();
var categories = cljs.core.set(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (music){
return (function (p1__28343_SHARP_){
return cljs.core.cst$kw$category.cljs$core$IFn$_invoke$arity$1(p1__28343_SHARP_);
});})(music))
,music))));
return views.helpers.make_archive_page("Bit\u00E1cora",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,views.helpers.print_categories(cljs.core.deref(views.blog.selected_categories),categories),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (music,categories){
return (function (m){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"music__year-container",cljs.core.cst$kw$key,cljs.core.first(m)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"music__year"], null),cljs.core.first(m)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"music-work"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(views.helpers.make_archive_item,"/blog"),cljs.core.second(m))], null)], null);
});})(music,categories))
,frontend.helpers.sort_entry_by_year(frontend.helpers.filter_by_selected_categories(cljs.core.deref(views.blog.selected_categories),music)))], null)], null));
});
