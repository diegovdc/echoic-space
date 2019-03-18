// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('frontend.routes.history');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.history.Html5History');
goog.require('goog.Uri');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('secretary.core');
goog.require('accountant.core');
frontend.routes.history.accountant_history_navigation = (function frontend$routes$history$accountant_history_navigation(){
return accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nav_DASH_handler,(function (path){
return secretary.core.dispatch_BANG_(path);
}),cljs.core.cst$kw$path_DASH_exists_QMARK_,(function (path){
return secretary.core.locate_route(path);
})], null));
});
