// Compiled by ClojureScript 1.10.312 {}
goog.provide('frontend.helpers');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('clojure.string');
frontend.helpers.find_first = (function frontend$helpers$find_first(fn,coll){
return cljs.core.first.call(null,cljs.core.filter.call(null,fn,coll));
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
if((frontend.helpers.fromNaN.call(null,time_component) < (10))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.helpers.fromNaN.call(null,frontend.helpers.toInt.call(null,time_component)))].join('');
} else {
return frontend.helpers.fromNaN.call(null,frontend.helpers.toInt.call(null,time_component));
}
});
frontend.helpers.secondsToMinutes = (function frontend$helpers$secondsToMinutes(seconds){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.helpers.padTime.call(null,cljs.core.quot.call(null,seconds,(60)))),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.helpers.padTime.call(null,cljs.core.rem.call(null,seconds,(60))))].join('');
});
frontend.helpers.safe_rand_nth = (function frontend$helpers$safe_rand_nth(or,xs){
if(cljs.core.empty_QMARK_.call(null,xs)){
return or;
} else {
return cljs.core.rand_nth.call(null,xs);
}
});
frontend.helpers.scroll_to = (function frontend$helpers$scroll_to(top){
return jayq.core.anim.call(null,jayq.core.$.call(null,"html, body"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollTop","scrollTop",-1143661921),top], null));
});
frontend.helpers.set_scroll = (function frontend$helpers$set_scroll(top){
return jayq.core.$.call(null,window).scrollTop(top);
});
frontend.helpers.maybe_make_audio_url = (function frontend$helpers$maybe_make_audio_url(base,slug,file_name){
if(clojure.string.includes_QMARK_.call(null,file_name,"http")){
return file_name;
} else {
return ["http://www.echoic.space/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slug),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name)].join('');
}
});
frontend.helpers.make_audio_url = (function frontend$helpers$make_audio_url(music_post_attrs){
var file_name = new cljs.core.Keyword(null,"file_name","file_name",2030201601).cljs$core$IFn$_invoke$arity$2(music_post_attrs,"");
var slug = new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(music_post_attrs);
return frontend.helpers.maybe_make_audio_url.call(null,"music",slug,file_name);
});
frontend.helpers.year = (function frontend$helpers$year(music){
return cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(music),"-"));
});
frontend.helpers.sort_entry_by_year = (function frontend$helpers$sort_entry_by_year(entry){
return cljs.core.group_by.call(null,frontend.helpers.year,cljs.core.sort.call(null,(function (p1__49804_SHARP_,p2__49803_SHARP_){
return cljs.core.compare.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p2__49803_SHARP_),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__49804_SHARP_));
}),entry));
});
frontend.helpers.filter_by_selected_categories = (function frontend$helpers$filter_by_selected_categories(selected_categories,entry){
if(cljs.core.empty_QMARK_.call(null,selected_categories)){
return entry;
} else {
return cljs.core.filter.call(null,(function (p1__49805_SHARP_){
return cljs.core.not_EQ_.call(null,cljs.core.PersistentHashSet.EMPTY,clojure.set.intersection.call(null,selected_categories,cljs.core.set.call(null,new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(p1__49805_SHARP_))));
}),entry);
}
});
frontend.helpers.toggle_in_set = (function frontend$helpers$toggle_in_set(set,val){
if(cljs.core.contains_QMARK_.call(null,set,val)){
return clojure.set.difference.call(null,set,cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
} else {
return clojure.set.union.call(null,set,cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
}
});
frontend.helpers.toggle_category = (function frontend$helpers$toggle_category(selected_categories_atom,cat){
return (function (){
return cljs.core.swap_BANG_.call(null,selected_categories_atom,(function (p1__49806_SHARP_){
return frontend.helpers.toggle_in_set.call(null,p1__49806_SHARP_,cat);
}));
});
});
frontend.helpers.cats = cljs.core.atom.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null));
frontend.helpers.toggle_category.call(null,frontend.helpers.cats,(2)).call(null);

//# sourceMappingURL=helpers.js.map?rel=1553998234406
