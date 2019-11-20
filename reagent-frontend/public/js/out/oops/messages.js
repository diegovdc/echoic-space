// Compiled by ClojureScript 1.10.312 {}
goog.provide('oops.messages');
goog.require('cljs.core');
oops.messages.post_process_message = (function oops$messages$post_process_message(msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Oops"),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('');
});
if((typeof oops !== 'undefined') && (typeof oops.messages !== 'undefined') && (typeof oops.messages.runtime_message !== 'undefined')){
} else {
oops.messages.runtime_message = (function (){var method_table__4400__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4401__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4402__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4403__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4404__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"oops.messages","runtime-message"),((function (method_table__4400__auto__,prefer_table__4401__auto__,method_cache__4402__auto__,cached_hierarchy__4403__auto__,hierarchy__4404__auto__){
return (function() { 
var G__55027__delegate = function (type,_){
return type;
};
var G__55027 = function (type,var_args){
var _ = null;
if (arguments.length > 1) {
var G__55028__i = 0, G__55028__a = new Array(arguments.length -  1);
while (G__55028__i < G__55028__a.length) {G__55028__a[G__55028__i] = arguments[G__55028__i + 1]; ++G__55028__i;}
  _ = new cljs.core.IndexedSeq(G__55028__a,0,null);
} 
return G__55027__delegate.call(this,type,_);};
G__55027.cljs$lang$maxFixedArity = 1;
G__55027.cljs$lang$applyTo = (function (arglist__55029){
var type = cljs.core.first(arglist__55029);
var _ = cljs.core.rest(arglist__55029);
return G__55027__delegate(type,_);
});
G__55027.cljs$core$IFn$_invoke$arity$variadic = G__55027__delegate;
return G__55027;
})()
;})(method_table__4400__auto__,prefer_table__4401__auto__,method_cache__4402__auto__,cached_hierarchy__4403__auto__,hierarchy__4404__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4404__auto__,method_table__4400__auto__,prefer_table__4401__auto__,method_cache__4402__auto__,cached_hierarchy__4403__auto__));
})();
}
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),(function (_type,info){
var map__55030 = info;
var map__55030__$1 = ((((!((map__55030 == null)))?(((((map__55030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55030):map__55030);
var flavor = cljs.core.get.call(null,map__55030__$1,new cljs.core.Keyword(null,"flavor","flavor",-1331636636));
var path = cljs.core.get.call(null,map__55030__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return oops.messages.post_process_message.call(null,["Unexpected object value (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(flavor),")",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.empty_QMARK_.call(null,path))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join('')))].join(''));
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),(function (_type,info){
var map__55032 = info;
var map__55032__$1 = ((((!((map__55032 == null)))?(((((map__55032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55032):map__55032);
var soft_QMARK_ = cljs.core.get.call(null,map__55032__$1,new cljs.core.Keyword(null,"soft?","soft?",-1339668477));
var path = cljs.core.get.call(null,map__55032__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var fn = cljs.core.get.call(null,map__55032__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
return oops.messages.post_process_message.call(null,["Expected a function",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(soft_QMARK_)?[" or nil"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.empty_QMARK_.call(null,path))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''))),", got <",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.typeOf(fn)),"> instead"].join(''));
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),(function (_type,info){
var map__55034 = info;
var map__55034__$1 = ((((!((map__55034 == null)))?(((((map__55034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55034):map__55034);
var key = cljs.core.get.call(null,map__55034__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var path = cljs.core.get.call(null,map__55034__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return oops.messages.post_process_message.call(null,["Missing expected object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core.empty_QMARK_.call(null,path)) || (cljs.core._EQ_.call(null,path,key))))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join('')))].join(''));
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),(function (_type,info){
var map__55036 = info;
var map__55036__$1 = ((((!((map__55036 == null)))?(((((map__55036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55036):map__55036);
var key = cljs.core.get.call(null,map__55036__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var path = cljs.core.get.call(null,map__55036__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var frozen_QMARK_ = cljs.core.get.call(null,map__55036__$1,new cljs.core.Keyword(null,"frozen?","frozen?",613726824));
return oops.messages.post_process_message.call(null,["Object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"' is not writable",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core.empty_QMARK_.call(null,path)) || (cljs.core._EQ_.call(null,path,key))))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(frozen_QMARK_)?[" because the object is frozen"].join(''):null))].join(''));
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),(function (_type,info){
var map__55038 = info;
var map__55038__$1 = ((((!((map__55038 == null)))?(((((map__55038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55038):map__55038);
var key = cljs.core.get.call(null,map__55038__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var path = cljs.core.get.call(null,map__55038__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return oops.messages.post_process_message.call(null,["Cannot create object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core.empty_QMARK_.call(null,path)) || (cljs.core._EQ_.call(null,path,key))))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join('')))," because the object is sealed"].join(''));
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),(function (_type,info){
var map__55040 = info;
var map__55040__$1 = ((((!((map__55040 == null)))?(((((map__55040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55040):map__55040);
var key = cljs.core.get.call(null,map__55040__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var path = cljs.core.get.call(null,map__55040__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return oops.messages.post_process_message.call(null,["Cannot create object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core.empty_QMARK_.call(null,path)) || (cljs.core._EQ_.call(null,path,key))))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join('')))," because the object is frozen"].join(''));
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),(function (_type){
return oops.messages.post_process_message.call(null,"Invalid selector");
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"unexpected-empty-selector","unexpected-empty-selector",-572791900),(function (_type){
return oops.messages.post_process_message.call(null,["Unexpected empty selector"].join(''));
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"unexpected-punching-selector","unexpected-punching-selector",-1934135338),(function (_type){
return oops.messages.post_process_message.call(null,["Unexpected punching selector (\"!\" makes sense only with oset!)"].join(''));
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"unexpected-soft-selector","unexpected-soft-selector",-1117708580),(function (_type){
return oops.messages.post_process_message.call(null,["Unexpected soft selector (\"?\" does not make sense with oset!)"].join(''));
}));

//# sourceMappingURL=messages.js.map?rel=1574224104544
