// Compiled by ClojureScript 1.10.312 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__59685__delegate = function (x__51564__auto__){
if(cljs.core.truth_(frontend.core.mount_root)){
return cljs.core.apply.call(null,frontend.core.mount_root,x__51564__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("frontend.core/mount-root"),"' is missing"].join(''));
}
};
var G__59685 = function (var_args){
var x__51564__auto__ = null;
if (arguments.length > 0) {
var G__59686__i = 0, G__59686__a = new Array(arguments.length -  0);
while (G__59686__i < G__59686__a.length) {G__59686__a[G__59686__i] = arguments[G__59686__i + 0]; ++G__59686__i;}
  x__51564__auto__ = new cljs.core.IndexedSeq(G__59686__a,0,null);
} 
return G__59685__delegate.call(this,x__51564__auto__);};
G__59685.cljs$lang$maxFixedArity = 0;
G__59685.cljs$lang$applyTo = (function (arglist__59687){
var x__51564__auto__ = cljs.core.seq(arglist__59687);
return G__59685__delegate(x__51564__auto__);
});
G__59685.cljs$core$IFn$_invoke$arity$variadic = G__59685__delegate;
return G__59685;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1574224107654
