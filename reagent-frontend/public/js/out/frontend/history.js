// Compiled by ClojureScript 1.10.312 {}
goog.provide('frontend.history');
goog.require('cljs.core');
goog.require('goog.history.Html5History');
goog.require('goog.Uri');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('secretary.core');
goog.require('accountant.core');
frontend.history.accountant_history_navigation = (function frontend$history$accountant_history_navigation(){
return accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
return secretary.core.dispatch_BANG_.call(null,path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return secretary.core.locate_route.call(null,path);
})], null));
});

//# sourceMappingURL=history.js.map?rel=1574224104262
