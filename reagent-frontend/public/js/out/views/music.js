// Compiled by ClojureScript 1.10.312 {}
goog.provide('views.music');
goog.require('cljs.core');
goog.require('views.helpers');
goog.require('frontend.state');
goog.require('reagent.core');
views.music.log = deps.log;
views.music.selected_categories = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
views.music.year = (function views$music$year(music){
return cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(music),"-"));
});
views.music.sort_music_by_year = (function views$music$sort_music_by_year(music){
return cljs.core.group_by.call(null,views.music.year,cljs.core.sort.call(null,(function (p1__35571_SHARP_,p2__35570_SHARP_){
return cljs.core.compare.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p2__35570_SHARP_),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__35571_SHARP_));
}),music));
});
views.music.filter_ = (function views$music$filter_(selected_categories,music){
if(cljs.core.empty_QMARK_.call(null,selected_categories)){
return music;
} else {
return cljs.core.filter.call(null,(function (p1__35572_SHARP_){
return cljs.core.not_EQ_.call(null,cljs.core.PersistentHashSet.EMPTY,clojure.set.intersection.call(null,selected_categories,cljs.core.set.call(null,new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(p1__35572_SHARP_))));
}),music);
}
});
views.music.toggle_in_set = (function views$music$toggle_in_set(set,val){
if(cljs.core.contains_QMARK_.call(null,set,val)){
return clojure.set.difference.call(null,set,cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
} else {
return clojure.set.union.call(null,set,cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
}
});
views.music.toggle_category = (function views$music$toggle_category(cat){
return (function (){
return cljs.core.swap_BANG_.call(null,views.music.selected_categories,(function (p1__35573_SHARP_){
return views.music.toggle_in_set.call(null,p1__35573_SHARP_,cat);
}));
});
});
views.music.print_categories = (function views$music$print_categories(selected_categories,categories){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"music__category-container"], null),cljs.core.map.call(null,(function (cat){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),cat,new cljs.core.Keyword(null,"class","class",-2030961996),["music__category ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.contains_QMARK_.call(null,selected_categories,cat))?"selected":null))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),views.music.toggle_category.call(null,cat)], null),cat], null);
}),categories)], null);
});
views.music.main = (function views$music$main(){
var music = cljs.core.map.call(null,(function (p1__35574_SHARP_){
return new cljs.core.Keyword(null,"attributes","attributes",-74013604).cljs$core$IFn$_invoke$arity$1(p1__35574_SHARP_);
}),new cljs.core.Keyword(null,"music","music",-1063514396).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,frontend.state.app_state)));
var categories = cljs.core.set.call(null,cljs.core.sort.call(null,cljs.core.flatten.call(null,cljs.core.map.call(null,((function (music){
return (function (p1__35575_SHARP_){
return new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(p1__35575_SHARP_);
});})(music))
,music))));
return views.helpers.make_archive_page.call(null,"M\u00FAsica",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),views.music.print_categories.call(null,cljs.core.deref.call(null,views.music.selected_categories),categories),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.call(null,((function (music,categories){
return (function (m){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"music__year-container",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,m)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"music__year"], null),cljs.core.first.call(null,m)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"music-work"], null),cljs.core.map.call(null,cljs.core.partial.call(null,views.helpers.make_archive_item,"/music"),cljs.core.second.call(null,m))], null)], null);
});})(music,categories))
,views.music.sort_music_by_year.call(null,views.music.filter_.call(null,cljs.core.deref.call(null,views.music.selected_categories),music)))], null)], null));
});

//# sourceMappingURL=music.js.map?rel=1553576538315
