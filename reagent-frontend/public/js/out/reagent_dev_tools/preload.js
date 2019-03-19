// Compiled by ClojureScript 1.10.312 {}
goog.provide('reagent_dev_tools.preload');
goog.require('cljs.core');
goog.require('reagent_dev_tools.core');
goog.require('reagent_dev_tools.state_tree');
reagent_dev_tools.preload.start = (function reagent_dev_tools$preload$start(){
var opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state-atom","state-atom",1303809857),frontend.state.app_state], null);
return reagent_dev_tools.core.start_BANG_.call(null,opts);
});
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["interactive",null,"complete",null], null), null).call(null,document.readyState))){
reagent_dev_tools.preload.start.call(null);
} else {
document.addEventListener("DOMContentLoaded",(function (){
return reagent_dev_tools.preload.start.call(null);
}));
}

//# sourceMappingURL=preload.js.map?rel=1552956591235
