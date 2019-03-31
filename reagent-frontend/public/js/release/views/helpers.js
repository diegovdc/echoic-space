// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('views.helpers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('frontend.helpers');
views.helpers.page_container = (function views$helpers$page_container(page_class,node){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,["page ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_class)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,["grid__container ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_class),"__main-container"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"grid__col-1-1"], null),node], null)], null)], null);
});
views.helpers.log = deps.log;
views.helpers.meses = cljs.core.PersistentHashMap.fromArrays(["03","09","06","07","12","05","02","11","04","01","08","10"],["Marzo","Septiembre","Junio","Julio","Diciembre","Mayo","Febrero","Noviembre","Abril","Enero","Agosto","Octubre"]);
views.helpers.format_date = (function views$helpers$format_date(date){
var G__27932 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(date,"-"),(1)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),(function (p1__27928_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(views.helpers.meses,p1__27928_SHARP_);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),(function (p1__27929_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__27929_SHARP_,"T"),(0));
})));
var fexpr__27931 = ((function (G__27932){
return (function (p1__27930_SHARP_){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27930_SHARP_),")"].join('');
});})(G__27932))
;
return fexpr__27931(G__27932);
});
views.helpers.make_archive_item = (function views$helpers$make_archive_item(base_url,post){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"grid__container archive__container",cljs.core.cst$kw$key,cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(post)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"column"], null),cljs.core.cst$kw$href,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_url),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(post))].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"archive__sbttl archive__sbttl--sm"], null),cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(post),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"archive__date"], null),views.helpers.format_date(cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(post))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"archive__category"], null),clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.cst$kw$category.cljs$core$IFn$_invoke$arity$1(post))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"archive__p"], null),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(post)], null)], null)], null);
});
views.helpers.make_archive_page = (function views$helpers$make_archive_page(title,node){
return views.helpers.page_container("archive",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"archive__ttl"], null),title], null),node], null));
});
views.helpers.page_container_bg_img = (function views$helpers$page_container_bg_img(page_class,img_node,child_node){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,img_node,views.helpers.page_container(["single__bg-img ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_class)].join(''),child_node)], null);
});
views.helpers.print_categories = (function views$helpers$print_categories(selected_categories_atom,categories){
var selected_cats = cljs.core.deref(selected_categories_atom);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"music__category-container"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (selected_cats){
return (function (cat){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cat,cljs.core.cst$kw$class,["music__category ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.some(((function (selected_cats){
return (function (p1__27933_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__27933_SHARP_,cat);
});})(selected_cats))
,selected_cats))?"selected":null))].join(''),cljs.core.cst$kw$on_DASH_click,frontend.helpers.toggle_category(selected_categories_atom,cat)], null),cat], null);
});})(selected_cats))
,categories)], null);
});
views.helpers.base_url = (function views$helpers$base_url(app_state){
var page = cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app_state));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,cljs.core.cst$kw$music_DASH_single)){
return "music";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,cljs.core.cst$kw$blog_DASH_single)){
return "blog";
} else {
return null;
}
}
});
views.helpers.get_entries = (function views$helpers$get_entries(app_state){
var app_state_SINGLEQUOTE_ = cljs.core.deref(app_state);
var page = cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(app_state_SINGLEQUOTE_);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,cljs.core.cst$kw$music_DASH_single)){
return cljs.core.cst$kw$music.cljs$core$IFn$_invoke$arity$1(app_state_SINGLEQUOTE_);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,cljs.core.cst$kw$blog_DASH_single)){
return cljs.core.cst$kw$blog.cljs$core$IFn$_invoke$arity$1(app_state_SINGLEQUOTE_);
} else {
return null;
}
}
});
