// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('views.music');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('views.helpers');
goog.require('frontend.state');
goog.require('reagent.core');
views.music.log = deps.log;
views.music.selected_categories = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
views.music.year = (function views$music$year(music){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(music),"-"));
});
views.music.sort_music_by_year = (function views$music$sort_music_by_year(music){
return cljs.core.group_by(views.music.year,cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (p1__29639_SHARP_,p2__29638_SHARP_){
return cljs.core.compare(cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(p2__29638_SHARP_),cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(p1__29639_SHARP_));
}),music));
});
views.music.filter_ = (function views$music$filter_(selected_categories,music){
if(cljs.core.empty_QMARK_(selected_categories)){
return music;
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29640_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(selected_categories,cljs.core.set(cljs.core.cst$kw$category.cljs$core$IFn$_invoke$arity$1(p1__29640_SHARP_))));
}),music);
}
});
views.music.toggle_in_set = (function views$music$toggle_in_set(set,val){
if(cljs.core.contains_QMARK_(set,val)){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(set,cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
} else {
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(set,cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
}
});
views.music.toggle_category = (function views$music$toggle_category(cat){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(views.music.selected_categories,(function (p1__29641_SHARP_){
return views.music.toggle_in_set(p1__29641_SHARP_,cat);
}));
});
});
views.music.is_selected_cat = (function views$music$is_selected_cat(cat){
return cljs.core.contains_QMARK_(cljs.core.deref(views.music.selected_categories),cat);
});
views.music.print_categories = (function views$music$print_categories(categories){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"music__category-container"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (cat){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cat,cljs.core.cst$kw$class,["music__category ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(views.music.is_selected_cat(cat))?"selected":null))].join(''),cljs.core.cst$kw$on_DASH_click,views.music.toggle_category(cat)], null),cat], null);
}),categories)], null);
});
views.music.main = (function views$music$main(){
var music = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29642_SHARP_){
return cljs.core.cst$kw$attributes.cljs$core$IFn$_invoke$arity$1(p1__29642_SHARP_);
}),cljs.core.cst$kw$music.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.app_state)));
var categories = cljs.core.set(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (music){
return (function (p1__29643_SHARP_){
return cljs.core.cst$kw$category.cljs$core$IFn$_invoke$arity$1(p1__29643_SHARP_);
});})(music))
,music))));
return views.helpers.make_archive_page("M\u00FAsica",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,views.music.print_categories(categories),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (music,categories){
return (function (m){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"music__year-container",cljs.core.cst$kw$key,cljs.core.first(m)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"music__year"], null),cljs.core.first(m)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"music-work"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(views.helpers.make_archive_item,"/music"),cljs.core.second(m))], null)], null);
});})(music,categories))
,views.music.sort_music_by_year(views.music.filter_(cljs.core.deref(views.music.selected_categories),music)))], null)], null));
});
