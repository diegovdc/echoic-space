// Compiled by ClojureScript 1.10.312 {}
goog.provide('frontend.state');
goog.require('cljs.core');
goog.require('reagent.core');
frontend.state.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"single","single",1551466437),"",new cljs.core.Keyword(null,"hash","hash",-13781596),null,new cljs.core.Keyword(null,"music","music",-1063514396),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"about","about",1423892543),cljs.core.PersistentVector.EMPTY], null));
frontend.state.player_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"track-data","track-data",-2061070323),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"duration","duration",1444101068),null,new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698),null,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),null], null),new cljs.core.Keyword(null,"is-playing","is-playing",-1699110457),false,new cljs.core.Keyword(null,"is-paused","is-paused",-1607276279),false,new cljs.core.Keyword(null,"now-playing","now-playing",1487806653),cljs.core.PersistentArrayMap.EMPTY], null));

//# sourceMappingURL=state.js.map?rel=1553997020956
