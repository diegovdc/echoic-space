// Compiled by ClojureScript 1.10.312 {}
goog.provide('views.blog');
goog.require('cljs.core');
goog.require('views.helpers');
goog.require('frontend.state');
goog.require('reagent.core');
goog.require('frontend.helpers');
views.blog.log = deps.log;
views.blog.selected_categories = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
views.blog.main = (function views$blog$main(){
var music = views.blog.log.call(null,cljs.core.map.call(null,(function (p1__49923_SHARP_){
return new cljs.core.Keyword(null,"attributes","attributes",-74013604).cljs$core$IFn$_invoke$arity$1(p1__49923_SHARP_);
}),new cljs.core.Keyword(null,"blog","blog",-302707364).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,frontend.state.app_state))));
var categories = cljs.core.set.call(null,cljs.core.sort.call(null,cljs.core.flatten.call(null,cljs.core.map.call(null,((function (music){
return (function (p1__49924_SHARP_){
return new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(p1__49924_SHARP_);
});})(music))
,music))));
return views.helpers.make_archive_page.call(null,"Bit\u00E1cora",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),views.helpers.print_categories.call(null,cljs.core.deref.call(null,views.blog.selected_categories),categories),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.call(null,((function (music,categories){
return (function (m){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"music__year-container",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,m)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"music__year"], null),cljs.core.first.call(null,m)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"music-work"], null),cljs.core.map.call(null,cljs.core.partial.call(null,views.helpers.make_archive_item,"/blog"),cljs.core.second.call(null,m))], null)], null);
});})(music,categories))
,frontend.helpers.sort_entry_by_year.call(null,frontend.helpers.filter_by_selected_categories.call(null,cljs.core.deref.call(null,views.blog.selected_categories),music)))], null)], null));
});

//# sourceMappingURL=blog.js.map?rel=1553998298124
