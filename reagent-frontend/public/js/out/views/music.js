// Compiled by ClojureScript 1.10.312 {}
goog.provide('views.music');
goog.require('cljs.core');
goog.require('views.helpers');
goog.require('frontend.state');
goog.require('frontend.helpers');
goog.require('reagent.core');
views.music.log = deps.log;
views.music.selected_categories = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
views.music.merge_blog_music = (function views$music$merge_blog_music(){
var music = new cljs.core.Keyword(null,"music","music",-1063514396).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,frontend.state.app_state));
var blog = new cljs.core.Keyword(null,"blog","blog",-302707364).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,frontend.state.app_state));
return cljs.core.concat.call(null,music,cljs.core.map.call(null,((function (music,blog){
return (function (p1__49930_SHARP_){
return cljs.core.update_in.call(null,p1__49930_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.Keyword(null,"category","category",-593092832)], null),((function (music,blog){
return (function (col){
return cljs.core.conj.call(null,col,"Bit\u00E1cora");
});})(music,blog))
);
});})(music,blog))
,cljs.core.filter.call(null,((function (music,blog){
return (function (p1__49929_SHARP_){
return cljs.core.get_in.call(null,p1__49929_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.Keyword(null,"file_name","file_name",2030201601)], null));
});})(music,blog))
,blog)));
});
views.music.main = (function views$music$main(){
var music = cljs.core.map.call(null,(function (p1__49931_SHARP_){
return new cljs.core.Keyword(null,"attributes","attributes",-74013604).cljs$core$IFn$_invoke$arity$1(p1__49931_SHARP_);
}),views.music.merge_blog_music.call(null));
var categories = cljs.core.set.call(null,cljs.core.sort.call(null,cljs.core.flatten.call(null,cljs.core.map.call(null,((function (music){
return (function (p1__49932_SHARP_){
return new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(p1__49932_SHARP_);
});})(music))
,views.music.log.call(null,music)))));
return views.helpers.make_archive_page.call(null,"M\u00FAsica",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),views.helpers.print_categories.call(null,views.music.selected_categories,categories),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.call(null,((function (music,categories){
return (function (m){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"music__year-container",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,m)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"music__year"], null),cljs.core.first.call(null,m)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"music-work"], null),cljs.core.map.call(null,((function (music,categories){
return (function (p1__49933_SHARP_){
return views.helpers.make_archive_item.call(null,(cljs.core.truth_(cljs.core.some.call(null,((function (music,categories){
return (function (cat){
return cljs.core._EQ_.call(null,"Bit\u00E1cora",cat);
});})(music,categories))
,new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(p1__49933_SHARP_)))?"/blog":"/music"),p1__49933_SHARP_);
});})(music,categories))
,cljs.core.second.call(null,m))], null)], null);
});})(music,categories))
,frontend.helpers.sort_entry_by_year.call(null,frontend.helpers.filter_by_selected_categories.call(null,cljs.core.deref.call(null,views.music.selected_categories),music)))], null)], null));
});

//# sourceMappingURL=music.js.map?rel=1553998298160
