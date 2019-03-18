// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('views.header');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('views.sonos');
views.header.menu_link = (function views$header$menu_link(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"menu-main__link",cljs.core.cst$kw$key,cljs.core.cst$kw$href.cljs$core$IFn$_invoke$arity$1(data),cljs.core.cst$kw$href,cljs.core.cst$kw$href.cljs$core$IFn$_invoke$arity$1(data)], null),cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(data)], null);
});
views.header.links = (function (){var class$ = "menu-main__link";
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"/",cljs.core.cst$kw$text,"~/"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"/music",cljs.core.cst$kw$text,"~/musica"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"/about",cljs.core.cst$kw$text,"~/acerca"], null)], null);
})();
views.header.main = (function views$header$main(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"menu-main"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"menu-main__container"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(views.header.menu_link,views.header.links)], null),views.sonos.main()], null)], null);
});
