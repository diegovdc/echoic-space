// Compiled by ClojureScript 1.10.312 {}
goog.provide('views.radio');
goog.require('cljs.core');
goog.require('views.helpers');
goog.require('frontend.state');
views.radio.main = (function views$radio$main(){
var body = cljs.core.get_in.call(null,cljs.core.deref.call(null,frontend.state.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"about","about",1423892543),(0),new cljs.core.Keyword(null,"body","body",-2049205669)], null));
return views.helpers.page_container.call(null,"about",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://freesound.org/data/previews/99/99557_321967-lq.mp3",new cljs.core.Keyword(null,"controls","controls",1340701452),true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"markdown-body",new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),body], null)], null)], null)], null));
});

//# sourceMappingURL=radio.js.map?rel=1574224249930
