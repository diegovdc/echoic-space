goog.provide('browser.views.header_basic');
browser.views.header_basic.menu_link = (function browser$views$header_basic$menu_link(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"menu-main__link",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(data)], null),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(data)], null);
});
browser.views.header_basic.main = (function browser$views$header_basic$main(var_args){
var G__37248 = arguments.length;
switch (G__37248) {
case 1:
return browser.views.header_basic.main.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return browser.views.header_basic.main.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(browser.views.header_basic.main.cljs$core$IFn$_invoke$arity$1 = (function (links_fn){
return browser.views.header_basic.main.cljs$core$IFn$_invoke$arity$2(links_fn,null);
}));

(browser.views.header_basic.main.cljs$core$IFn$_invoke$arity$2 = (function (links_fn,sonos){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"menu-main"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"menu-main__container"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(browser.views.header_basic.menu_link,(links_fn.cljs$core$IFn$_invoke$arity$0 ? links_fn.cljs$core$IFn$_invoke$arity$0() : links_fn.call(null)))], null),sonos], null)], null);
}));

(browser.views.header_basic.main.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=browser.views.header_basic.js.map
