goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_29696 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_29696(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_29705 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_29705(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__28539 = coll;
var G__28540 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__28539,G__28540) : shadow.dom.lazy_native_coll_seq.call(null,G__28539,G__28540));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__28591 = arguments.length;
switch (G__28591) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__28596 = arguments.length;
switch (G__28596) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__28601 = arguments.length;
switch (G__28601) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__28614 = arguments.length;
switch (G__28614) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__28632 = arguments.length;
switch (G__28632) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__28644 = arguments.length;
switch (G__28644) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e28656){if((e28656 instanceof Object)){
var e = e28656;
return console.log("didnt support attachEvent",el,e);
} else {
throw e28656;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__28674 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__28675 = null;
var count__28676 = (0);
var i__28677 = (0);
while(true){
if((i__28677 < count__28676)){
var el = chunk__28675.cljs$core$IIndexed$_nth$arity$2(null,i__28677);
var handler_29782__$1 = ((function (seq__28674,chunk__28675,count__28676,i__28677,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__28674,chunk__28675,count__28676,i__28677,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29782__$1);


var G__29786 = seq__28674;
var G__29787 = chunk__28675;
var G__29788 = count__28676;
var G__29789 = (i__28677 + (1));
seq__28674 = G__29786;
chunk__28675 = G__29787;
count__28676 = G__29788;
i__28677 = G__29789;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28674);
if(temp__5804__auto__){
var seq__28674__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28674__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28674__$1);
var G__29790 = cljs.core.chunk_rest(seq__28674__$1);
var G__29791 = c__5568__auto__;
var G__29792 = cljs.core.count(c__5568__auto__);
var G__29793 = (0);
seq__28674 = G__29790;
chunk__28675 = G__29791;
count__28676 = G__29792;
i__28677 = G__29793;
continue;
} else {
var el = cljs.core.first(seq__28674__$1);
var handler_29794__$1 = ((function (seq__28674,chunk__28675,count__28676,i__28677,el,seq__28674__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__28674,chunk__28675,count__28676,i__28677,el,seq__28674__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29794__$1);


var G__29796 = cljs.core.next(seq__28674__$1);
var G__29797 = null;
var G__29798 = (0);
var G__29799 = (0);
seq__28674 = G__29796;
chunk__28675 = G__29797;
count__28676 = G__29798;
i__28677 = G__29799;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__28695 = arguments.length;
switch (G__28695) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__28705 = cljs.core.seq(events);
var chunk__28706 = null;
var count__28707 = (0);
var i__28708 = (0);
while(true){
if((i__28708 < count__28707)){
var vec__28716 = chunk__28706.cljs$core$IIndexed$_nth$arity$2(null,i__28708);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28716,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28716,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29806 = seq__28705;
var G__29807 = chunk__28706;
var G__29808 = count__28707;
var G__29809 = (i__28708 + (1));
seq__28705 = G__29806;
chunk__28706 = G__29807;
count__28707 = G__29808;
i__28708 = G__29809;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28705);
if(temp__5804__auto__){
var seq__28705__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28705__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28705__$1);
var G__29816 = cljs.core.chunk_rest(seq__28705__$1);
var G__29817 = c__5568__auto__;
var G__29818 = cljs.core.count(c__5568__auto__);
var G__29819 = (0);
seq__28705 = G__29816;
chunk__28706 = G__29817;
count__28707 = G__29818;
i__28708 = G__29819;
continue;
} else {
var vec__28724 = cljs.core.first(seq__28705__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28724,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28724,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29820 = cljs.core.next(seq__28705__$1);
var G__29821 = null;
var G__29822 = (0);
var G__29823 = (0);
seq__28705 = G__29820;
chunk__28706 = G__29821;
count__28707 = G__29822;
i__28708 = G__29823;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__28732 = cljs.core.seq(styles);
var chunk__28734 = null;
var count__28735 = (0);
var i__28736 = (0);
while(true){
if((i__28736 < count__28735)){
var vec__28760 = chunk__28734.cljs$core$IIndexed$_nth$arity$2(null,i__28736);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28760,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28760,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29826 = seq__28732;
var G__29827 = chunk__28734;
var G__29828 = count__28735;
var G__29829 = (i__28736 + (1));
seq__28732 = G__29826;
chunk__28734 = G__29827;
count__28735 = G__29828;
i__28736 = G__29829;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28732);
if(temp__5804__auto__){
var seq__28732__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28732__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28732__$1);
var G__29831 = cljs.core.chunk_rest(seq__28732__$1);
var G__29832 = c__5568__auto__;
var G__29833 = cljs.core.count(c__5568__auto__);
var G__29834 = (0);
seq__28732 = G__29831;
chunk__28734 = G__29832;
count__28735 = G__29833;
i__28736 = G__29834;
continue;
} else {
var vec__28767 = cljs.core.first(seq__28732__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28767,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28767,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29836 = cljs.core.next(seq__28732__$1);
var G__29837 = null;
var G__29838 = (0);
var G__29839 = (0);
seq__28732 = G__29836;
chunk__28734 = G__29837;
count__28735 = G__29838;
i__28736 = G__29839;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__28776_29841 = key;
var G__28776_29842__$1 = (((G__28776_29841 instanceof cljs.core.Keyword))?G__28776_29841.fqn:null);
switch (G__28776_29842__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_29848 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_29848,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_29848,"aria-");
}
})())){
el.setAttribute(ks_29848,value);
} else {
(el[ks_29848] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__28809){
var map__28810 = p__28809;
var map__28810__$1 = cljs.core.__destructure_map(map__28810);
var props = map__28810__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28810__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__28811 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28811,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28811,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28811,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__28815 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__28815,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__28815;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__28818 = arguments.length;
switch (G__28818) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__28820){
var vec__28821 = p__28820;
var seq__28822 = cljs.core.seq(vec__28821);
var first__28823 = cljs.core.first(seq__28822);
var seq__28822__$1 = cljs.core.next(seq__28822);
var nn = first__28823;
var first__28823__$1 = cljs.core.first(seq__28822__$1);
var seq__28822__$2 = cljs.core.next(seq__28822__$1);
var np = first__28823__$1;
var nc = seq__28822__$2;
var node = vec__28821;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28824 = nn;
var G__28825 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28824,G__28825) : create_fn.call(null,G__28824,G__28825));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28826 = nn;
var G__28827 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28826,G__28827) : create_fn.call(null,G__28826,G__28827));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__28828 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28828,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28828,(1),null);
var seq__28831_29879 = cljs.core.seq(node_children);
var chunk__28832_29880 = null;
var count__28833_29881 = (0);
var i__28834_29882 = (0);
while(true){
if((i__28834_29882 < count__28833_29881)){
var child_struct_29883 = chunk__28832_29880.cljs$core$IIndexed$_nth$arity$2(null,i__28834_29882);
var children_29884 = shadow.dom.dom_node(child_struct_29883);
if(cljs.core.seq_QMARK_(children_29884)){
var seq__28865_29885 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29884));
var chunk__28867_29886 = null;
var count__28868_29887 = (0);
var i__28869_29888 = (0);
while(true){
if((i__28869_29888 < count__28868_29887)){
var child_29890 = chunk__28867_29886.cljs$core$IIndexed$_nth$arity$2(null,i__28869_29888);
if(cljs.core.truth_(child_29890)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29890);


var G__29896 = seq__28865_29885;
var G__29897 = chunk__28867_29886;
var G__29898 = count__28868_29887;
var G__29899 = (i__28869_29888 + (1));
seq__28865_29885 = G__29896;
chunk__28867_29886 = G__29897;
count__28868_29887 = G__29898;
i__28869_29888 = G__29899;
continue;
} else {
var G__29900 = seq__28865_29885;
var G__29901 = chunk__28867_29886;
var G__29902 = count__28868_29887;
var G__29903 = (i__28869_29888 + (1));
seq__28865_29885 = G__29900;
chunk__28867_29886 = G__29901;
count__28868_29887 = G__29902;
i__28869_29888 = G__29903;
continue;
}
} else {
var temp__5804__auto___29907 = cljs.core.seq(seq__28865_29885);
if(temp__5804__auto___29907){
var seq__28865_29909__$1 = temp__5804__auto___29907;
if(cljs.core.chunked_seq_QMARK_(seq__28865_29909__$1)){
var c__5568__auto___29910 = cljs.core.chunk_first(seq__28865_29909__$1);
var G__29911 = cljs.core.chunk_rest(seq__28865_29909__$1);
var G__29912 = c__5568__auto___29910;
var G__29913 = cljs.core.count(c__5568__auto___29910);
var G__29914 = (0);
seq__28865_29885 = G__29911;
chunk__28867_29886 = G__29912;
count__28868_29887 = G__29913;
i__28869_29888 = G__29914;
continue;
} else {
var child_29915 = cljs.core.first(seq__28865_29909__$1);
if(cljs.core.truth_(child_29915)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29915);


var G__29916 = cljs.core.next(seq__28865_29909__$1);
var G__29917 = null;
var G__29918 = (0);
var G__29919 = (0);
seq__28865_29885 = G__29916;
chunk__28867_29886 = G__29917;
count__28868_29887 = G__29918;
i__28869_29888 = G__29919;
continue;
} else {
var G__29920 = cljs.core.next(seq__28865_29909__$1);
var G__29921 = null;
var G__29922 = (0);
var G__29923 = (0);
seq__28865_29885 = G__29920;
chunk__28867_29886 = G__29921;
count__28868_29887 = G__29922;
i__28869_29888 = G__29923;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29884);
}


var G__29924 = seq__28831_29879;
var G__29925 = chunk__28832_29880;
var G__29926 = count__28833_29881;
var G__29927 = (i__28834_29882 + (1));
seq__28831_29879 = G__29924;
chunk__28832_29880 = G__29925;
count__28833_29881 = G__29926;
i__28834_29882 = G__29927;
continue;
} else {
var temp__5804__auto___29929 = cljs.core.seq(seq__28831_29879);
if(temp__5804__auto___29929){
var seq__28831_29931__$1 = temp__5804__auto___29929;
if(cljs.core.chunked_seq_QMARK_(seq__28831_29931__$1)){
var c__5568__auto___29932 = cljs.core.chunk_first(seq__28831_29931__$1);
var G__29933 = cljs.core.chunk_rest(seq__28831_29931__$1);
var G__29934 = c__5568__auto___29932;
var G__29935 = cljs.core.count(c__5568__auto___29932);
var G__29936 = (0);
seq__28831_29879 = G__29933;
chunk__28832_29880 = G__29934;
count__28833_29881 = G__29935;
i__28834_29882 = G__29936;
continue;
} else {
var child_struct_29937 = cljs.core.first(seq__28831_29931__$1);
var children_29938 = shadow.dom.dom_node(child_struct_29937);
if(cljs.core.seq_QMARK_(children_29938)){
var seq__28902_29939 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29938));
var chunk__28904_29940 = null;
var count__28905_29941 = (0);
var i__28906_29942 = (0);
while(true){
if((i__28906_29942 < count__28905_29941)){
var child_29943 = chunk__28904_29940.cljs$core$IIndexed$_nth$arity$2(null,i__28906_29942);
if(cljs.core.truth_(child_29943)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29943);


var G__29945 = seq__28902_29939;
var G__29946 = chunk__28904_29940;
var G__29947 = count__28905_29941;
var G__29948 = (i__28906_29942 + (1));
seq__28902_29939 = G__29945;
chunk__28904_29940 = G__29946;
count__28905_29941 = G__29947;
i__28906_29942 = G__29948;
continue;
} else {
var G__29950 = seq__28902_29939;
var G__29951 = chunk__28904_29940;
var G__29952 = count__28905_29941;
var G__29953 = (i__28906_29942 + (1));
seq__28902_29939 = G__29950;
chunk__28904_29940 = G__29951;
count__28905_29941 = G__29952;
i__28906_29942 = G__29953;
continue;
}
} else {
var temp__5804__auto___29954__$1 = cljs.core.seq(seq__28902_29939);
if(temp__5804__auto___29954__$1){
var seq__28902_29955__$1 = temp__5804__auto___29954__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28902_29955__$1)){
var c__5568__auto___29956 = cljs.core.chunk_first(seq__28902_29955__$1);
var G__29957 = cljs.core.chunk_rest(seq__28902_29955__$1);
var G__29958 = c__5568__auto___29956;
var G__29959 = cljs.core.count(c__5568__auto___29956);
var G__29960 = (0);
seq__28902_29939 = G__29957;
chunk__28904_29940 = G__29958;
count__28905_29941 = G__29959;
i__28906_29942 = G__29960;
continue;
} else {
var child_29961 = cljs.core.first(seq__28902_29955__$1);
if(cljs.core.truth_(child_29961)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29961);


var G__29962 = cljs.core.next(seq__28902_29955__$1);
var G__29963 = null;
var G__29964 = (0);
var G__29965 = (0);
seq__28902_29939 = G__29962;
chunk__28904_29940 = G__29963;
count__28905_29941 = G__29964;
i__28906_29942 = G__29965;
continue;
} else {
var G__29966 = cljs.core.next(seq__28902_29955__$1);
var G__29967 = null;
var G__29968 = (0);
var G__29969 = (0);
seq__28902_29939 = G__29966;
chunk__28904_29940 = G__29967;
count__28905_29941 = G__29968;
i__28906_29942 = G__29969;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29938);
}


var G__29971 = cljs.core.next(seq__28831_29931__$1);
var G__29972 = null;
var G__29973 = (0);
var G__29974 = (0);
seq__28831_29879 = G__29971;
chunk__28832_29880 = G__29972;
count__28833_29881 = G__29973;
i__28834_29882 = G__29974;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__28951 = cljs.core.seq(node);
var chunk__28952 = null;
var count__28953 = (0);
var i__28954 = (0);
while(true){
if((i__28954 < count__28953)){
var n = chunk__28952.cljs$core$IIndexed$_nth$arity$2(null,i__28954);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__29977 = seq__28951;
var G__29978 = chunk__28952;
var G__29979 = count__28953;
var G__29980 = (i__28954 + (1));
seq__28951 = G__29977;
chunk__28952 = G__29978;
count__28953 = G__29979;
i__28954 = G__29980;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28951);
if(temp__5804__auto__){
var seq__28951__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28951__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28951__$1);
var G__29981 = cljs.core.chunk_rest(seq__28951__$1);
var G__29982 = c__5568__auto__;
var G__29983 = cljs.core.count(c__5568__auto__);
var G__29984 = (0);
seq__28951 = G__29981;
chunk__28952 = G__29982;
count__28953 = G__29983;
i__28954 = G__29984;
continue;
} else {
var n = cljs.core.first(seq__28951__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__29985 = cljs.core.next(seq__28951__$1);
var G__29986 = null;
var G__29987 = (0);
var G__29988 = (0);
seq__28951 = G__29985;
chunk__28952 = G__29986;
count__28953 = G__29987;
i__28954 = G__29988;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__28975 = arguments.length;
switch (G__28975) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__28979 = arguments.length;
switch (G__28979) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__28986 = arguments.length;
switch (G__28986) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30016 = arguments.length;
var i__5770__auto___30017 = (0);
while(true){
if((i__5770__auto___30017 < len__5769__auto___30016)){
args__5775__auto__.push((arguments[i__5770__auto___30017]));

var G__30018 = (i__5770__auto___30017 + (1));
i__5770__auto___30017 = G__30018;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__28999_30021 = cljs.core.seq(nodes);
var chunk__29000_30022 = null;
var count__29001_30023 = (0);
var i__29002_30024 = (0);
while(true){
if((i__29002_30024 < count__29001_30023)){
var node_30026 = chunk__29000_30022.cljs$core$IIndexed$_nth$arity$2(null,i__29002_30024);
fragment.appendChild(shadow.dom._to_dom(node_30026));


var G__30027 = seq__28999_30021;
var G__30028 = chunk__29000_30022;
var G__30029 = count__29001_30023;
var G__30030 = (i__29002_30024 + (1));
seq__28999_30021 = G__30027;
chunk__29000_30022 = G__30028;
count__29001_30023 = G__30029;
i__29002_30024 = G__30030;
continue;
} else {
var temp__5804__auto___30033 = cljs.core.seq(seq__28999_30021);
if(temp__5804__auto___30033){
var seq__28999_30034__$1 = temp__5804__auto___30033;
if(cljs.core.chunked_seq_QMARK_(seq__28999_30034__$1)){
var c__5568__auto___30035 = cljs.core.chunk_first(seq__28999_30034__$1);
var G__30037 = cljs.core.chunk_rest(seq__28999_30034__$1);
var G__30038 = c__5568__auto___30035;
var G__30039 = cljs.core.count(c__5568__auto___30035);
var G__30040 = (0);
seq__28999_30021 = G__30037;
chunk__29000_30022 = G__30038;
count__29001_30023 = G__30039;
i__29002_30024 = G__30040;
continue;
} else {
var node_30041 = cljs.core.first(seq__28999_30034__$1);
fragment.appendChild(shadow.dom._to_dom(node_30041));


var G__30042 = cljs.core.next(seq__28999_30034__$1);
var G__30043 = null;
var G__30044 = (0);
var G__30045 = (0);
seq__28999_30021 = G__30042;
chunk__29000_30022 = G__30043;
count__29001_30023 = G__30044;
i__29002_30024 = G__30045;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq28997){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28997));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__29007_30046 = cljs.core.seq(scripts);
var chunk__29008_30047 = null;
var count__29009_30048 = (0);
var i__29010_30049 = (0);
while(true){
if((i__29010_30049 < count__29009_30048)){
var vec__29018_30050 = chunk__29008_30047.cljs$core$IIndexed$_nth$arity$2(null,i__29010_30049);
var script_tag_30051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29018_30050,(0),null);
var script_body_30052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29018_30050,(1),null);
eval(script_body_30052);


var G__30053 = seq__29007_30046;
var G__30054 = chunk__29008_30047;
var G__30055 = count__29009_30048;
var G__30056 = (i__29010_30049 + (1));
seq__29007_30046 = G__30053;
chunk__29008_30047 = G__30054;
count__29009_30048 = G__30055;
i__29010_30049 = G__30056;
continue;
} else {
var temp__5804__auto___30057 = cljs.core.seq(seq__29007_30046);
if(temp__5804__auto___30057){
var seq__29007_30058__$1 = temp__5804__auto___30057;
if(cljs.core.chunked_seq_QMARK_(seq__29007_30058__$1)){
var c__5568__auto___30059 = cljs.core.chunk_first(seq__29007_30058__$1);
var G__30060 = cljs.core.chunk_rest(seq__29007_30058__$1);
var G__30061 = c__5568__auto___30059;
var G__30062 = cljs.core.count(c__5568__auto___30059);
var G__30063 = (0);
seq__29007_30046 = G__30060;
chunk__29008_30047 = G__30061;
count__29009_30048 = G__30062;
i__29010_30049 = G__30063;
continue;
} else {
var vec__29027_30064 = cljs.core.first(seq__29007_30058__$1);
var script_tag_30065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29027_30064,(0),null);
var script_body_30066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29027_30064,(1),null);
eval(script_body_30066);


var G__30071 = cljs.core.next(seq__29007_30058__$1);
var G__30072 = null;
var G__30073 = (0);
var G__30074 = (0);
seq__29007_30046 = G__30071;
chunk__29008_30047 = G__30072;
count__29009_30048 = G__30073;
i__29010_30049 = G__30074;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__29030){
var vec__29031 = p__29030;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29031,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29031,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__29065 = arguments.length;
switch (G__29065) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__29088 = cljs.core.seq(style_keys);
var chunk__29089 = null;
var count__29090 = (0);
var i__29091 = (0);
while(true){
if((i__29091 < count__29090)){
var it = chunk__29089.cljs$core$IIndexed$_nth$arity$2(null,i__29091);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__30086 = seq__29088;
var G__30087 = chunk__29089;
var G__30088 = count__29090;
var G__30089 = (i__29091 + (1));
seq__29088 = G__30086;
chunk__29089 = G__30087;
count__29090 = G__30088;
i__29091 = G__30089;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29088);
if(temp__5804__auto__){
var seq__29088__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29088__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__29088__$1);
var G__30090 = cljs.core.chunk_rest(seq__29088__$1);
var G__30091 = c__5568__auto__;
var G__30092 = cljs.core.count(c__5568__auto__);
var G__30093 = (0);
seq__29088 = G__30090;
chunk__29089 = G__30091;
count__29090 = G__30092;
i__29091 = G__30093;
continue;
} else {
var it = cljs.core.first(seq__29088__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__30094 = cljs.core.next(seq__29088__$1);
var G__30095 = null;
var G__30096 = (0);
var G__30097 = (0);
seq__29088 = G__30094;
chunk__29089 = G__30095;
count__29090 = G__30096;
i__29091 = G__30097;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k29101,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__29113 = k29101;
var G__29113__$1 = (((G__29113 instanceof cljs.core.Keyword))?G__29113.fqn:null);
switch (G__29113__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29101,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__29118){
var vec__29119 = p__29118;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29119,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29119,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29100){
var self__ = this;
var G__29100__$1 = this;
return (new cljs.core.RecordIter((0),G__29100__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29102,other29103){
var self__ = this;
var this29102__$1 = this;
return (((!((other29103 == null)))) && ((((this29102__$1.constructor === other29103.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29102__$1.x,other29103.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29102__$1.y,other29103.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29102__$1.__extmap,other29103.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k29101){
var self__ = this;
var this__5350__auto____$1 = this;
var G__29144 = k29101;
var G__29144__$1 = (((G__29144 instanceof cljs.core.Keyword))?G__29144.fqn:null);
switch (G__29144__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29101);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__29100){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__29145 = cljs.core.keyword_identical_QMARK_;
var expr__29146 = k__5352__auto__;
if(cljs.core.truth_((pred__29145.cljs$core$IFn$_invoke$arity$2 ? pred__29145.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__29146) : pred__29145.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__29146)))){
return (new shadow.dom.Coordinate(G__29100,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29145.cljs$core$IFn$_invoke$arity$2 ? pred__29145.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__29146) : pred__29145.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__29146)))){
return (new shadow.dom.Coordinate(self__.x,G__29100,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__29100),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__29100){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__29100,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__29107){
var extmap__5385__auto__ = (function (){var G__29161 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29107,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__29107)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29161);
} else {
return G__29161;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__29107),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__29107),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k29180,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__29196 = k29180;
var G__29196__$1 = (((G__29196 instanceof cljs.core.Keyword))?G__29196.fqn:null);
switch (G__29196__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29180,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__29205){
var vec__29206 = p__29205;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29206,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29206,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29179){
var self__ = this;
var G__29179__$1 = this;
return (new cljs.core.RecordIter((0),G__29179__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29181,other29182){
var self__ = this;
var this29181__$1 = this;
return (((!((other29182 == null)))) && ((((this29181__$1.constructor === other29182.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29181__$1.w,other29182.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29181__$1.h,other29182.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29181__$1.__extmap,other29182.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k29180){
var self__ = this;
var this__5350__auto____$1 = this;
var G__29222 = k29180;
var G__29222__$1 = (((G__29222 instanceof cljs.core.Keyword))?G__29222.fqn:null);
switch (G__29222__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29180);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__29179){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__29225 = cljs.core.keyword_identical_QMARK_;
var expr__29226 = k__5352__auto__;
if(cljs.core.truth_((pred__29225.cljs$core$IFn$_invoke$arity$2 ? pred__29225.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__29226) : pred__29225.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__29226)))){
return (new shadow.dom.Size(G__29179,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29225.cljs$core$IFn$_invoke$arity$2 ? pred__29225.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__29226) : pred__29225.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__29226)))){
return (new shadow.dom.Size(self__.w,G__29179,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__29179),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__29179){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__29179,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__29186){
var extmap__5385__auto__ = (function (){var G__29235 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29186,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__29186)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29235);
} else {
return G__29235;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__29186),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__29186),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__30176 = (i + (1));
var G__30177 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__30176;
ret = G__30177;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29265){
var vec__29266 = p__29265;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29266,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29266,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__29271 = arguments.length;
switch (G__29271) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__30186 = ps;
var G__30187 = (i + (1));
el__$1 = G__30186;
i = G__30187;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__29290 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29290,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29290,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29290,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__29296_30193 = cljs.core.seq(props);
var chunk__29297_30194 = null;
var count__29298_30195 = (0);
var i__29299_30196 = (0);
while(true){
if((i__29299_30196 < count__29298_30195)){
var vec__29321_30197 = chunk__29297_30194.cljs$core$IIndexed$_nth$arity$2(null,i__29299_30196);
var k_30198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29321_30197,(0),null);
var v_30199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29321_30197,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_30198);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_30198),v_30199);


var G__30200 = seq__29296_30193;
var G__30201 = chunk__29297_30194;
var G__30202 = count__29298_30195;
var G__30203 = (i__29299_30196 + (1));
seq__29296_30193 = G__30200;
chunk__29297_30194 = G__30201;
count__29298_30195 = G__30202;
i__29299_30196 = G__30203;
continue;
} else {
var temp__5804__auto___30204 = cljs.core.seq(seq__29296_30193);
if(temp__5804__auto___30204){
var seq__29296_30205__$1 = temp__5804__auto___30204;
if(cljs.core.chunked_seq_QMARK_(seq__29296_30205__$1)){
var c__5568__auto___30206 = cljs.core.chunk_first(seq__29296_30205__$1);
var G__30207 = cljs.core.chunk_rest(seq__29296_30205__$1);
var G__30208 = c__5568__auto___30206;
var G__30209 = cljs.core.count(c__5568__auto___30206);
var G__30210 = (0);
seq__29296_30193 = G__30207;
chunk__29297_30194 = G__30208;
count__29298_30195 = G__30209;
i__29299_30196 = G__30210;
continue;
} else {
var vec__29328_30211 = cljs.core.first(seq__29296_30205__$1);
var k_30212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29328_30211,(0),null);
var v_30213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29328_30211,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_30212);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_30212),v_30213);


var G__30214 = cljs.core.next(seq__29296_30205__$1);
var G__30215 = null;
var G__30216 = (0);
var G__30217 = (0);
seq__29296_30193 = G__30214;
chunk__29297_30194 = G__30215;
count__29298_30195 = G__30216;
i__29299_30196 = G__30217;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__29347 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29347,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29347,(1),null);
var seq__29354_30218 = cljs.core.seq(node_children);
var chunk__29356_30219 = null;
var count__29357_30220 = (0);
var i__29358_30221 = (0);
while(true){
if((i__29358_30221 < count__29357_30220)){
var child_struct_30223 = chunk__29356_30219.cljs$core$IIndexed$_nth$arity$2(null,i__29358_30221);
if((!((child_struct_30223 == null)))){
if(typeof child_struct_30223 === 'string'){
var text_30224 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_30224),child_struct_30223].join(''));
} else {
var children_30225 = shadow.dom.svg_node(child_struct_30223);
if(cljs.core.seq_QMARK_(children_30225)){
var seq__29443_30226 = cljs.core.seq(children_30225);
var chunk__29445_30227 = null;
var count__29446_30228 = (0);
var i__29447_30229 = (0);
while(true){
if((i__29447_30229 < count__29446_30228)){
var child_30230 = chunk__29445_30227.cljs$core$IIndexed$_nth$arity$2(null,i__29447_30229);
if(cljs.core.truth_(child_30230)){
node.appendChild(child_30230);


var G__30231 = seq__29443_30226;
var G__30232 = chunk__29445_30227;
var G__30233 = count__29446_30228;
var G__30234 = (i__29447_30229 + (1));
seq__29443_30226 = G__30231;
chunk__29445_30227 = G__30232;
count__29446_30228 = G__30233;
i__29447_30229 = G__30234;
continue;
} else {
var G__30235 = seq__29443_30226;
var G__30236 = chunk__29445_30227;
var G__30237 = count__29446_30228;
var G__30238 = (i__29447_30229 + (1));
seq__29443_30226 = G__30235;
chunk__29445_30227 = G__30236;
count__29446_30228 = G__30237;
i__29447_30229 = G__30238;
continue;
}
} else {
var temp__5804__auto___30239 = cljs.core.seq(seq__29443_30226);
if(temp__5804__auto___30239){
var seq__29443_30240__$1 = temp__5804__auto___30239;
if(cljs.core.chunked_seq_QMARK_(seq__29443_30240__$1)){
var c__5568__auto___30241 = cljs.core.chunk_first(seq__29443_30240__$1);
var G__30242 = cljs.core.chunk_rest(seq__29443_30240__$1);
var G__30243 = c__5568__auto___30241;
var G__30244 = cljs.core.count(c__5568__auto___30241);
var G__30245 = (0);
seq__29443_30226 = G__30242;
chunk__29445_30227 = G__30243;
count__29446_30228 = G__30244;
i__29447_30229 = G__30245;
continue;
} else {
var child_30247 = cljs.core.first(seq__29443_30240__$1);
if(cljs.core.truth_(child_30247)){
node.appendChild(child_30247);


var G__30248 = cljs.core.next(seq__29443_30240__$1);
var G__30249 = null;
var G__30250 = (0);
var G__30251 = (0);
seq__29443_30226 = G__30248;
chunk__29445_30227 = G__30249;
count__29446_30228 = G__30250;
i__29447_30229 = G__30251;
continue;
} else {
var G__30252 = cljs.core.next(seq__29443_30240__$1);
var G__30253 = null;
var G__30254 = (0);
var G__30255 = (0);
seq__29443_30226 = G__30252;
chunk__29445_30227 = G__30253;
count__29446_30228 = G__30254;
i__29447_30229 = G__30255;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_30225);
}
}


var G__30256 = seq__29354_30218;
var G__30257 = chunk__29356_30219;
var G__30258 = count__29357_30220;
var G__30259 = (i__29358_30221 + (1));
seq__29354_30218 = G__30256;
chunk__29356_30219 = G__30257;
count__29357_30220 = G__30258;
i__29358_30221 = G__30259;
continue;
} else {
var G__30263 = seq__29354_30218;
var G__30264 = chunk__29356_30219;
var G__30265 = count__29357_30220;
var G__30266 = (i__29358_30221 + (1));
seq__29354_30218 = G__30263;
chunk__29356_30219 = G__30264;
count__29357_30220 = G__30265;
i__29358_30221 = G__30266;
continue;
}
} else {
var temp__5804__auto___30267 = cljs.core.seq(seq__29354_30218);
if(temp__5804__auto___30267){
var seq__29354_30268__$1 = temp__5804__auto___30267;
if(cljs.core.chunked_seq_QMARK_(seq__29354_30268__$1)){
var c__5568__auto___30269 = cljs.core.chunk_first(seq__29354_30268__$1);
var G__30272 = cljs.core.chunk_rest(seq__29354_30268__$1);
var G__30273 = c__5568__auto___30269;
var G__30274 = cljs.core.count(c__5568__auto___30269);
var G__30275 = (0);
seq__29354_30218 = G__30272;
chunk__29356_30219 = G__30273;
count__29357_30220 = G__30274;
i__29358_30221 = G__30275;
continue;
} else {
var child_struct_30276 = cljs.core.first(seq__29354_30268__$1);
if((!((child_struct_30276 == null)))){
if(typeof child_struct_30276 === 'string'){
var text_30279 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_30279),child_struct_30276].join(''));
} else {
var children_30280 = shadow.dom.svg_node(child_struct_30276);
if(cljs.core.seq_QMARK_(children_30280)){
var seq__29462_30281 = cljs.core.seq(children_30280);
var chunk__29464_30282 = null;
var count__29465_30283 = (0);
var i__29466_30284 = (0);
while(true){
if((i__29466_30284 < count__29465_30283)){
var child_30285 = chunk__29464_30282.cljs$core$IIndexed$_nth$arity$2(null,i__29466_30284);
if(cljs.core.truth_(child_30285)){
node.appendChild(child_30285);


var G__30286 = seq__29462_30281;
var G__30287 = chunk__29464_30282;
var G__30288 = count__29465_30283;
var G__30289 = (i__29466_30284 + (1));
seq__29462_30281 = G__30286;
chunk__29464_30282 = G__30287;
count__29465_30283 = G__30288;
i__29466_30284 = G__30289;
continue;
} else {
var G__30290 = seq__29462_30281;
var G__30291 = chunk__29464_30282;
var G__30292 = count__29465_30283;
var G__30293 = (i__29466_30284 + (1));
seq__29462_30281 = G__30290;
chunk__29464_30282 = G__30291;
count__29465_30283 = G__30292;
i__29466_30284 = G__30293;
continue;
}
} else {
var temp__5804__auto___30294__$1 = cljs.core.seq(seq__29462_30281);
if(temp__5804__auto___30294__$1){
var seq__29462_30295__$1 = temp__5804__auto___30294__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29462_30295__$1)){
var c__5568__auto___30296 = cljs.core.chunk_first(seq__29462_30295__$1);
var G__30297 = cljs.core.chunk_rest(seq__29462_30295__$1);
var G__30298 = c__5568__auto___30296;
var G__30299 = cljs.core.count(c__5568__auto___30296);
var G__30300 = (0);
seq__29462_30281 = G__30297;
chunk__29464_30282 = G__30298;
count__29465_30283 = G__30299;
i__29466_30284 = G__30300;
continue;
} else {
var child_30301 = cljs.core.first(seq__29462_30295__$1);
if(cljs.core.truth_(child_30301)){
node.appendChild(child_30301);


var G__30302 = cljs.core.next(seq__29462_30295__$1);
var G__30303 = null;
var G__30304 = (0);
var G__30305 = (0);
seq__29462_30281 = G__30302;
chunk__29464_30282 = G__30303;
count__29465_30283 = G__30304;
i__29466_30284 = G__30305;
continue;
} else {
var G__30306 = cljs.core.next(seq__29462_30295__$1);
var G__30307 = null;
var G__30308 = (0);
var G__30309 = (0);
seq__29462_30281 = G__30306;
chunk__29464_30282 = G__30307;
count__29465_30283 = G__30308;
i__29466_30284 = G__30309;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_30280);
}
}


var G__30310 = cljs.core.next(seq__29354_30268__$1);
var G__30311 = null;
var G__30312 = (0);
var G__30313 = (0);
seq__29354_30218 = G__30310;
chunk__29356_30219 = G__30311;
count__29357_30220 = G__30312;
i__29358_30221 = G__30313;
continue;
} else {
var G__30314 = cljs.core.next(seq__29354_30268__$1);
var G__30315 = null;
var G__30316 = (0);
var G__30317 = (0);
seq__29354_30218 = G__30314;
chunk__29356_30219 = G__30315;
count__29357_30220 = G__30316;
i__29358_30221 = G__30317;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30323 = arguments.length;
var i__5770__auto___30324 = (0);
while(true){
if((i__5770__auto___30324 < len__5769__auto___30323)){
args__5775__auto__.push((arguments[i__5770__auto___30324]));

var G__30325 = (i__5770__auto___30324 + (1));
i__5770__auto___30324 = G__30325;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq29502){
var G__29503 = cljs.core.first(seq29502);
var seq29502__$1 = cljs.core.next(seq29502);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29503,seq29502__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__29522 = arguments.length;
switch (G__29522) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__26254__auto___30333 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26255__auto__ = (function (){var switch__26115__auto__ = (function (state_29553){
var state_val_29554 = (state_29553[(1)]);
if((state_val_29554 === (1))){
var state_29553__$1 = state_29553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29553__$1,(2),once_or_cleanup);
} else {
if((state_val_29554 === (2))){
var inst_29550 = (state_29553[(2)]);
var inst_29551 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_29553__$1 = (function (){var statearr_29556 = state_29553;
(statearr_29556[(7)] = inst_29550);

return statearr_29556;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29553__$1,inst_29551);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__26116__auto__ = null;
var shadow$dom$state_machine__26116__auto____0 = (function (){
var statearr_29560 = [null,null,null,null,null,null,null,null];
(statearr_29560[(0)] = shadow$dom$state_machine__26116__auto__);

(statearr_29560[(1)] = (1));

return statearr_29560;
});
var shadow$dom$state_machine__26116__auto____1 = (function (state_29553){
while(true){
var ret_value__26117__auto__ = (function (){try{while(true){
var result__26118__auto__ = switch__26115__auto__(state_29553);
if(cljs.core.keyword_identical_QMARK_(result__26118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26118__auto__;
}
break;
}
}catch (e29563){var ex__26119__auto__ = e29563;
var statearr_29564_30374 = state_29553;
(statearr_29564_30374[(2)] = ex__26119__auto__);


if(cljs.core.seq((state_29553[(4)]))){
var statearr_29567_30379 = state_29553;
(statearr_29567_30379[(1)] = cljs.core.first((state_29553[(4)])));

} else {
throw ex__26119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30381 = state_29553;
state_29553 = G__30381;
continue;
} else {
return ret_value__26117__auto__;
}
break;
}
});
shadow$dom$state_machine__26116__auto__ = function(state_29553){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__26116__auto____0.call(this);
case 1:
return shadow$dom$state_machine__26116__auto____1.call(this,state_29553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__26116__auto____0;
shadow$dom$state_machine__26116__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__26116__auto____1;
return shadow$dom$state_machine__26116__auto__;
})()
})();
var state__26256__auto__ = (function (){var statearr_29574 = f__26255__auto__();
(statearr_29574[(6)] = c__26254__auto___30333);

return statearr_29574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26256__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
