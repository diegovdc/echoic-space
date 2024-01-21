goog.provide('browser.views.about');
browser.views.about.show_posters = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
browser.views.about.n_images_to_load = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
browser.views.about.masonry = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
browser.views.about.reload_items = (function browser$views$about$reload_items(masonry){
return masonry.reloadItems();
});
browser.views.about.layout = (function browser$views$about$layout(masonry){
return masonry.layout();
});
browser.views.about.init_masonry = (function browser$views$about$init_masonry(){
return setTimeout((function (){
var container = document.querySelector(".about__m-grid");
var masonry_STAR_ = (new Masonry(container,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"itemSelector","itemSelector",-1601773289),".about__m-grid-item",new cljs.core.Keyword(null,"columnWidth","columnWidth",-88892889),".about__m-grid-item",new cljs.core.Keyword(null,"isFitWidth","isFitWidth",-1350026480),true,new cljs.core.Keyword(null,"percentPosition","percentPosition",352898165),true], null)));
var runner = (new imagesLoaded(container));
runner.on("progress",(function (){
return browser.views.about.layout(masonry_STAR_);
}));

cljs.core.reset_BANG_(browser.views.about.masonry,masonry_STAR_);

return cljs.core.reset_BANG_(browser.views.about.show_posters,true);
}),(1000));
});
/**
 * Just once
 */
browser.views.about.shuffle_posters = cljs.core.memoize(cljs.core.shuffle);
browser.views.about.quote = "\u201CLograr una comprensio\u0301n ma\u0301s plena de la experiencia del pensamiento, que es tambie\u0301n la experiencia  cotidiana y la forma en que creamos el mundo o los objetos de este mundo y nos relacionamos con ellos... Se trata  de algo como una ecologi\u0301a del pensamiento (por oposicio\u0301n a una eco-nomi\u0301a), no de esforzarse por imponer sobre el mundo algo ma\u0301s alla\u0301 de sus posibilidades, desatentamente (e.g. el supuesto crecimiento ilimitado del  capitalismo), sino de crear con el mundo-pensamiento partiendo de sus posibilidades. No se trata tampoco de una  renuncia que pretenda decir que \u201Clas cosas son asi\u0301, y no pueden ser diferentes\u201D, sino por el contrario del  descubrimiento-reconocimiento de todo lo que pueden ser); y esto es (no)parado\u0301jicamente algo ma\u0301s eficiente y  \u201Cecono\u0301mico\u201D que la economi\u0301a misma, pues actu\u0301a en dia\u0301logo con el logos: con las formas de ha-ser del  pensamiento-mundo.\u201D";
browser.views.about.src__GT_alt = (function browser$views$about$src__GT_alt(src){
return [clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(src,"-"," "),".")))," (Diego Villase\u00F1or, m\u00FAsico)"].join('');
});
browser.views.about.images_grid = (function browser$views$about$images_grid(total_posters,posters_STAR_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"about__m-grid",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(cljs.core.deref(browser.views.about.show_posters))?(1):(0))], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"about__m-grid-item",new cljs.core.Keyword(null,"key","key",-1516042587),src,new cljs.core.Keyword(null,"alt","alt",-3214426),browser.views.about.src__GT_alt(src),new cljs.core.Keyword(null,"src","src",-1651076051),["/images/presentaciones/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)].join('')], null)], null);
}),posters_STAR_))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"about__button-container"], null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(total_posters,cljs.core.deref(browser.views.about.n_images_to_load)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"about__all-images-button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
return cljs.core.reset_BANG_(browser.views.about.n_images_to_load,total_posters);
})], null),["Ver todas (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_posters),")"].join('')], null):null)], null)], null);
});
browser.views.about.scripts_loader = (function browser$views$about$scripts_loader(posters){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [browser.views.js_loader.js_loader,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"scripts","scripts",626373193),cljs.core.PersistentArrayMap.createAsIfByAssoc([(function (){
return (typeof imagesLoaded !== 'undefined');
}),goog.string.Const.from("https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"),(function (){
return (typeof Masonry !== 'undefined');
}),goog.string.Const.from("https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js")]),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (){
return cljs.core.reset_BANG_(browser.views.about.n_images_to_load,(7));
}),new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),new cljs.core.Keyword(null,"loaded","loaded",-1246482293),browser.views.about.images_grid(cljs.core.count(posters),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(browser.views.about.n_images_to_load),posters))], null)], null);
});
browser.views.about.main_simple = (function browser$views$about$main_simple(app_state,scripts_loader_fn){
var body = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"about","about",1423892543),(0),new cljs.core.Keyword(null,"body","body",-2049205669)], null));
var cv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cv","cv",-1787015929),(0),new cljs.core.Keyword(null,"body","body",-2049205669)], null));
var posters = browser.views.about.shuffle_posters(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"posters","posters",1329539529)], null)));
return browser.views.helpers.page_container("about pt-40",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"about__image-container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"about__image",new cljs.core.Keyword(null,"src","src",-1651076051),"/images/about.png"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"about__quote"], null),browser.views.about.quote], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"markdown-body",new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),body], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"about__button-container"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"about__button",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),"/downloads/cv-2020-04.pdf"], null),"Curriculum Vitae"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"about__activities-detail"], null)], null),(scripts_loader_fn.cljs$core$IFn$_invoke$arity$1 ? scripts_loader_fn.cljs$core$IFn$_invoke$arity$1(posters) : scripts_loader_fn.call(null,posters)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"markdown-body",new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),cv], null)], null)], null)], null));
});
browser.views.about.main = (function browser$views$about$main(){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (_,___$1){
if((cljs.core.deref(browser.views.about.masonry) == null)){
return browser.views.about.init_masonry();
} else {
if(cljs.core.truth_(cljs.core.deref(browser.views.about.masonry))){
browser.views.about.reload_items(cljs.core.deref(browser.views.about.masonry));

return (new imagesLoaded(document.querySelector(".about__m-grid"))).on("progress",(function (){
return browser.views.about.layout(cljs.core.deref(browser.views.about.masonry));
}));
} else {
return null;
}
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return browser.views.about.main_simple(browser.state.app_state,browser.views.about.scripts_loader);
})], null));
});

//# sourceMappingURL=browser.views.about.js.map
