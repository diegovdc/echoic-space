// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.reader');
jayq.core.crate_meta = (function jayq$core$crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function jayq$core$__GT_selector(sel){
if(typeof sel === 'string'){
return sel;
} else {
if(cljs.core.fn_QMARK_(sel)){
var temp__5455__auto__ = jayq.core.crate_meta(sel);
if(cljs.core.truth_(temp__5455__auto__)){
var cm = temp__5455__auto__;
return ["[crateGroup=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cm),"]"].join('');
} else {
return sel;
}
} else {
if((sel instanceof cljs.core.Keyword)){
return cljs.core.name(sel);
} else {
return sel;

}
}
}
});
jayq.core.$ = (function jayq$core$$(var_args){
var G__33931 = arguments.length;
switch (G__33931) {
case 1:
return jayq.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.$.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return jQuery(jayq.core.__GT_selector(sel));
});

jayq.core.$.cljs$core$IFn$_invoke$arity$2 = (function (sel,context){
return jQuery(jayq.core.__GT_selector(sel),context);
});

jayq.core.$.cljs$lang$maxFixedArity = 2;

jQuery.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(this$__$1.get((0)))){
return this$__$1;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ISeq$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.get((0));
});

jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this$__$1 = this;
if((cljs.core.count(this$__$1) > (1))){
return this$__$1.slice((1));
} else {
return cljs.core.List.EMPTY;
}
});

jQuery.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.length;
});

jQuery.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var this$__$1 = this;
if((n < cljs.core.count(this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
return null;
}
});

jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var this$__$1 = this;
if((n < cljs.core.count(this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
if((void 0 === not_found)){
return null;
} else {
return not_found;
}
}
});

jQuery.prototype.cljs$core$ISequential$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var this$__$1 = this;
var or__3936__auto__ = this$__$1.slice(k,(k + (1)));
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,k,not_found);
});

jQuery.prototype.cljs$core$IReduce$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(this$__$1,f);
});

jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var this$__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(this$__$1,f,start);
});

jQuery.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.call = (function() {
var G__33934 = null;
var G__33934__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(this$,k);
});
var G__33934__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$,k,not_found);
});
G__33934 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__33934__2.call(this,self__,k);
case 3:
return G__33934__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__33934.cljs$core$IFn$_invoke$arity$2 = G__33934__2;
G__33934.cljs$core$IFn$_invoke$arity$3 = G__33934__3;
return G__33934;
})()
;

jQuery.prototype.apply = (function (self__,args33933){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args33933)));
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var this$ = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(this$,k);
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var this$ = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$,k,not_found);
});
jayq.core.anim = (function jayq$core$anim(var_args){
var args__4520__auto__ = [];
var len__4517__auto___33942 = arguments.length;
var i__4518__auto___33943 = (0);
while(true){
if((i__4518__auto___33943 < len__4517__auto___33942)){
args__4520__auto__.push((arguments[i__4518__auto___33943]));

var G__33944 = (i__4518__auto___33943 + (1));
i__4518__auto___33943 = G__33944;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((2) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((2)),(0),null)):null);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4521__auto__);
});

jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,props,p__33938){
var vec__33939 = p__33938;
var speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33939,(0),null);
var on_finish = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33939,(1),null);
return $elem.animate(cljs.core.clj__GT_js(props),speed,on_finish);
});

jayq.core.anim.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
jayq.core.anim.cljs$lang$applyTo = (function (seq33935){
var G__33936 = cljs.core.first(seq33935);
var seq33935__$1 = cljs.core.next(seq33935);
var G__33937 = cljs.core.first(seq33935__$1);
var seq33935__$2 = cljs.core.next(seq33935__$1);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33936,G__33937,seq33935__$2);
});

jayq.core.text = (function jayq$core$text(var_args){
var G__33946 = arguments.length;
switch (G__33946) {
case 1:
return jayq.core.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.text.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.text();
});

jayq.core.text.cljs$core$IFn$_invoke$arity$2 = (function ($elem,txt){
return $elem.text(txt);
});

jayq.core.text.cljs$lang$maxFixedArity = 2;

jayq.core.css = (function jayq$core$css(var_args){
var G__33949 = arguments.length;
switch (G__33949) {
case 2:
return jayq.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.css.cljs$core$IFn$_invoke$arity$2 = (function ($elem,opts){
return $elem.css(cljs.core.clj__GT_js(opts));
});

jayq.core.css.cljs$core$IFn$_invoke$arity$3 = (function ($elem,p,v){
return $elem.css(cljs.core.name(p),v);
});

jayq.core.css.cljs$lang$maxFixedArity = 3;

jayq.core.attr = (function jayq$core$attr(var_args){
var G__33952 = arguments.length;
switch (G__33952) {
case 3:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.attr(cljs.core.name(n),v);
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.attr(cljs.core.clj__GT_js(x));
});

jayq.core.attr.cljs$lang$maxFixedArity = 3;

jayq.core.prop = (function jayq$core$prop(var_args){
var G__33955 = arguments.length;
switch (G__33955) {
case 3:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.prop(cljs.core.name(n),v);
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.prop(cljs.core.clj__GT_js(x));
});

jayq.core.prop.cljs$lang$maxFixedArity = 3;

jayq.core.remove_attr = (function jayq$core$remove_attr($elem,a){
return $elem.removeAttr(cljs.core.name(a));
});
jayq.core.remove_prop = (function jayq$core$remove_prop($elem,a){
return $elem.removeProp(cljs.core.name(a));
});
jayq.core.data = (function jayq$core$data(var_args){
var G__33958 = arguments.length;
switch (G__33958) {
case 1:
return jayq.core.data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.data.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.data();
});

jayq.core.data.cljs$core$IFn$_invoke$arity$2 = (function ($elem,k){
return $elem.data(cljs.core.clj__GT_js(k));
});

jayq.core.data.cljs$core$IFn$_invoke$arity$3 = (function ($elem,k,v){
return $elem.data(cljs.core.name(k),cljs.core.clj__GT_js(v));
});

jayq.core.data.cljs$lang$maxFixedArity = 3;

jayq.core.add_class = (function jayq$core$add_class($elem,cl){
return $elem.addClass(cljs.core.name(cl));
});
jayq.core.remove_class = (function jayq$core$remove_class(var_args){
var G__33961 = arguments.length;
switch (G__33961) {
case 1:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.removeClass();
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.removeClass(cljs.core.name(cl));
});

jayq.core.remove_class.cljs$lang$maxFixedArity = 2;

jayq.core.toggle_class = (function jayq$core$toggle_class(var_args){
var G__33964 = arguments.length;
switch (G__33964) {
case 2:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.toggleClass(cljs.core.name(cl));
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function ($elem,cl,switch$){
return $elem.toggleClass(cljs.core.name(cl),cljs.core.boolean$(switch$));
});

jayq.core.toggle_class.cljs$lang$maxFixedArity = 3;

jayq.core.has_class = (function jayq$core$has_class($elem,cl){
return $elem.hasClass(cljs.core.name(cl));
});
jayq.core.is = (function jayq$core$is($elem,selector){
return $elem.is(jayq.core.__GT_selector(selector));
});
jayq.core.after = (function jayq$core$after($elem,content){
return $elem.after(content);
});
jayq.core.before = (function jayq$core$before($elem,content){
return $elem.before(content);
});
jayq.core.append = (function jayq$core$append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function jayq$core$prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.append_to = (function jayq$core$append_to($elem,target){
return $elem.appendTo(jayq.core.__GT_selector(target));
});
jayq.core.prepend_to = (function jayq$core$prepend_to($elem,target){
return $elem.prependTo(jayq.core.__GT_selector(target));
});
jayq.core.insert_before = (function jayq$core$insert_before($elem,target){
return $elem.insertBefore(jayq.core.__GT_selector(target));
});
jayq.core.insert_after = (function jayq$core$insert_after($elem,target){
return $elem.insertAfter(jayq.core.__GT_selector(target));
});
jayq.core.replace_with = (function jayq$core$replace_with($elem,content){
return $elem.replaceWith(content);
});
jayq.core.remove = (function jayq$core$remove($elem){
return $elem.remove();
});
jayq.core.hide = (function jayq$core$hide(var_args){
var args__4520__auto__ = [];
var len__4517__auto___33972 = arguments.length;
var i__4518__auto___33973 = (0);
while(true){
if((i__4518__auto___33973 < len__4517__auto___33972)){
args__4520__auto__.push((arguments[i__4518__auto___33973]));

var G__33974 = (i__4518__auto___33973 + (1));
i__4518__auto___33973 = G__33974;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__33968){
var vec__33969 = p__33968;
var speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33969,(0),null);
var on_finish = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33969,(1),null);
return $elem.hide(speed,on_finish);
});

jayq.core.hide.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
jayq.core.hide.cljs$lang$applyTo = (function (seq33966){
var G__33967 = cljs.core.first(seq33966);
var seq33966__$1 = cljs.core.next(seq33966);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33967,seq33966__$1);
});

jayq.core.show = (function jayq$core$show(var_args){
var args__4520__auto__ = [];
var len__4517__auto___33981 = arguments.length;
var i__4518__auto___33982 = (0);
while(true){
if((i__4518__auto___33982 < len__4517__auto___33981)){
args__4520__auto__.push((arguments[i__4518__auto___33982]));

var G__33983 = (i__4518__auto___33982 + (1));
i__4518__auto___33982 = G__33983;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__33977){
var vec__33978 = p__33977;
var speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33978,(0),null);
var on_finish = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33978,(1),null);
return $elem.show(speed,on_finish);
});

jayq.core.show.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
jayq.core.show.cljs$lang$applyTo = (function (seq33975){
var G__33976 = cljs.core.first(seq33975);
var seq33975__$1 = cljs.core.next(seq33975);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33976,seq33975__$1);
});

jayq.core.toggle = (function jayq$core$toggle(var_args){
var args__4520__auto__ = [];
var len__4517__auto___33990 = arguments.length;
var i__4518__auto___33991 = (0);
while(true){
if((i__4518__auto___33991 < len__4517__auto___33990)){
args__4520__auto__.push((arguments[i__4518__auto___33991]));

var G__33992 = (i__4518__auto___33991 + (1));
i__4518__auto___33991 = G__33992;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__33986){
var vec__33987 = p__33986;
var speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33987,(0),null);
var on_finish = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33987,(1),null);
return $elem.toggle(speed,on_finish);
});

jayq.core.toggle.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
jayq.core.toggle.cljs$lang$applyTo = (function (seq33984){
var G__33985 = cljs.core.first(seq33984);
var seq33984__$1 = cljs.core.next(seq33984);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33985,seq33984__$1);
});

jayq.core.fade_out = (function jayq$core$fade_out(var_args){
var args__4520__auto__ = [];
var len__4517__auto___33999 = arguments.length;
var i__4518__auto___34000 = (0);
while(true){
if((i__4518__auto___34000 < len__4517__auto___33999)){
args__4520__auto__.push((arguments[i__4518__auto___34000]));

var G__34001 = (i__4518__auto___34000 + (1));
i__4518__auto___34000 = G__34001;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__33995){
var vec__33996 = p__33995;
var speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33996,(0),null);
var on_finish = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33996,(1),null);
return $elem.fadeOut(speed,on_finish);
});

jayq.core.fade_out.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
jayq.core.fade_out.cljs$lang$applyTo = (function (seq33993){
var G__33994 = cljs.core.first(seq33993);
var seq33993__$1 = cljs.core.next(seq33993);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33994,seq33993__$1);
});

jayq.core.fade_in = (function jayq$core$fade_in(var_args){
var args__4520__auto__ = [];
var len__4517__auto___34008 = arguments.length;
var i__4518__auto___34009 = (0);
while(true){
if((i__4518__auto___34009 < len__4517__auto___34008)){
args__4520__auto__.push((arguments[i__4518__auto___34009]));

var G__34010 = (i__4518__auto___34009 + (1));
i__4518__auto___34009 = G__34010;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__34004){
var vec__34005 = p__34004;
var speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34005,(0),null);
var on_finish = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34005,(1),null);
return $elem.fadeIn(speed,on_finish);
});

jayq.core.fade_in.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
jayq.core.fade_in.cljs$lang$applyTo = (function (seq34002){
var G__34003 = cljs.core.first(seq34002);
var seq34002__$1 = cljs.core.next(seq34002);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34003,seq34002__$1);
});

jayq.core.slide_up = (function jayq$core$slide_up(var_args){
var args__4520__auto__ = [];
var len__4517__auto___34017 = arguments.length;
var i__4518__auto___34018 = (0);
while(true){
if((i__4518__auto___34018 < len__4517__auto___34017)){
args__4520__auto__.push((arguments[i__4518__auto___34018]));

var G__34019 = (i__4518__auto___34018 + (1));
i__4518__auto___34018 = G__34019;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__34013){
var vec__34014 = p__34013;
var speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34014,(0),null);
var on_finish = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34014,(1),null);
return $elem.slideUp(speed,on_finish);
});

jayq.core.slide_up.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
jayq.core.slide_up.cljs$lang$applyTo = (function (seq34011){
var G__34012 = cljs.core.first(seq34011);
var seq34011__$1 = cljs.core.next(seq34011);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34012,seq34011__$1);
});

jayq.core.slide_down = (function jayq$core$slide_down(var_args){
var args__4520__auto__ = [];
var len__4517__auto___34026 = arguments.length;
var i__4518__auto___34027 = (0);
while(true){
if((i__4518__auto___34027 < len__4517__auto___34026)){
args__4520__auto__.push((arguments[i__4518__auto___34027]));

var G__34028 = (i__4518__auto___34027 + (1));
i__4518__auto___34027 = G__34028;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__34022){
var vec__34023 = p__34022;
var speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34023,(0),null);
var on_finish = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34023,(1),null);
return $elem.slideDown(speed,on_finish);
});

jayq.core.slide_down.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
jayq.core.slide_down.cljs$lang$applyTo = (function (seq34020){
var G__34021 = cljs.core.first(seq34020);
var seq34020__$1 = cljs.core.next(seq34020);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34021,seq34020__$1);
});

jayq.core.siblings = (function jayq$core$siblings(var_args){
var G__34030 = arguments.length;
switch (G__34030) {
case 1:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.siblings();
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.siblings(cljs.core.name(selector));
});

jayq.core.siblings.cljs$lang$maxFixedArity = 2;

jayq.core.parent = (function jayq$core$parent($elem){
return $elem.parent();
});
jayq.core.parents = (function jayq$core$parents(var_args){
var G__34033 = arguments.length;
switch (G__34033) {
case 1:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parents();
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parents(cljs.core.name(selector));
});

jayq.core.parents.cljs$lang$maxFixedArity = 2;

jayq.core.parents_until = (function jayq$core$parents_until(var_args){
var G__34036 = arguments.length;
switch (G__34036) {
case 1:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parentsUntil();
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parentsUntil(jayq.core.__GT_selector(selector));
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.parentsUntil(jayq.core.__GT_selector(selector),cljs.core.name(filtr));
});

jayq.core.parents_until.cljs$lang$maxFixedArity = 3;

jayq.core.children = (function jayq$core$children(var_args){
var G__34039 = arguments.length;
switch (G__34039) {
case 2:
return jayq.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.children.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.children(cljs.core.name(selector));
});

jayq.core.children.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.children();
});

jayq.core.children.cljs$lang$maxFixedArity = 2;

jayq.core.next = (function jayq$core$next(var_args){
var G__34042 = arguments.length;
switch (G__34042) {
case 1:
return jayq.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.next.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.next();
});

jayq.core.next.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.next(cljs.core.name(selector));
});

jayq.core.next.cljs$lang$maxFixedArity = 2;

jayq.core.prev = (function jayq$core$prev(var_args){
var G__34045 = arguments.length;
switch (G__34045) {
case 1:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prev();
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prev(cljs.core.name(selector));
});

jayq.core.prev.cljs$lang$maxFixedArity = 2;

jayq.core.next_all = (function jayq$core$next_all(var_args){
var G__34048 = arguments.length;
switch (G__34048) {
case 1:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextAll();
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextAll(cljs.core.name(selector));
});

jayq.core.next_all.cljs$lang$maxFixedArity = 2;

jayq.core.prev_all = (function jayq$core$prev_all(var_args){
var G__34051 = arguments.length;
switch (G__34051) {
case 1:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevAll();
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevAll(cljs.core.name(selector));
});

jayq.core.prev_all.cljs$lang$maxFixedArity = 2;

jayq.core.next_until = (function jayq$core$next_until(var_args){
var G__34054 = arguments.length;
switch (G__34054) {
case 1:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextUntil();
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextUntil(jayq.core.__GT_selector(selector));
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.nextUntil(jayq.core.__GT_selector(selector),cljs.core.name(filtr));
});

jayq.core.next_until.cljs$lang$maxFixedArity = 3;

jayq.core.prev_until = (function jayq$core$prev_until(var_args){
var G__34057 = arguments.length;
switch (G__34057) {
case 1:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevUntil();
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevUntil(jayq.core.__GT_selector(selector));
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.prevUntil(jayq.core.__GT_selector(selector),cljs.core.name(filtr));
});

jayq.core.prev_until.cljs$lang$maxFixedArity = 3;

jayq.core.find = (function jayq$core$find($elem,selector){
return $elem.find(cljs.core.name(selector));
});
jayq.core.closest = (function jayq$core$closest(var_args){
var args__4520__auto__ = [];
var len__4517__auto___34066 = arguments.length;
var i__4518__auto___34067 = (0);
while(true){
if((i__4518__auto___34067 < len__4517__auto___34066)){
args__4520__auto__.push((arguments[i__4518__auto___34067]));

var G__34068 = (i__4518__auto___34067 + (1));
i__4518__auto___34067 = G__34068;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((2) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((2)),(0),null)):null);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4521__auto__);
});

jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,selector,p__34062){
var vec__34063 = p__34062;
var context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34063,(0),null);
return $elem.closest(jayq.core.__GT_selector(selector),context);
});

jayq.core.closest.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
jayq.core.closest.cljs$lang$applyTo = (function (seq34059){
var G__34060 = cljs.core.first(seq34059);
var seq34059__$1 = cljs.core.next(seq34059);
var G__34061 = cljs.core.first(seq34059__$1);
var seq34059__$2 = cljs.core.next(seq34059__$1);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34060,G__34061,seq34059__$2);
});

jayq.core.clone = (function jayq$core$clone($elem){
return $elem.clone();
});
jayq.core.html = (function jayq$core$html(var_args){
var G__34070 = arguments.length;
switch (G__34070) {
case 2:
return jayq.core.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.html.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.html(v);
});

jayq.core.html.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.html();
});

jayq.core.html.cljs$lang$maxFixedArity = 2;

jayq.core.inner = jayq.core.html;
jayq.core.empty = (function jayq$core$empty($elem){
return $elem.empty();
});
jayq.core.val = (function jayq$core$val(var_args){
var G__34073 = arguments.length;
switch (G__34073) {
case 2:
return jayq.core.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.val.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.val(v);
});

jayq.core.val.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.val();
});

jayq.core.val.cljs$lang$maxFixedArity = 2;

jayq.core.serialize = (function jayq$core$serialize($elem){
return $elem.serialize();
});
jayq.core.queue = (function jayq$core$queue(var_args){
var G__34076 = arguments.length;
switch (G__34076) {
case 3:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$3 = (function ($elem,x,y){
return $elem.queue(x,y);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.queue(x);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.queue();
});

jayq.core.queue.cljs$lang$maxFixedArity = 3;

jayq.core.dequeue = (function jayq$core$dequeue(var_args){
var G__34079 = arguments.length;
switch (G__34079) {
case 2:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,queue_name){
return $elem.dequeue(queue_name);
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.dequeue();
});

jayq.core.dequeue.cljs$lang$maxFixedArity = 2;

jayq.core.document_ready = (function jayq$core$document_ready(func){
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).ready(func);
});
jayq.core.mimetype_converter = (function jayq$core$mimetype_converter(s){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));
});
jQuery.ajaxSetup(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$accepts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$edn,"application/edn, text/edn",cljs.core.cst$kw$clojure,"application/clojure, text/clojure"], null),cljs.core.cst$kw$contents,new cljs.core.PersistentArrayMap(null, 1, ["clojure",/edn|clojure/], null),cljs.core.cst$kw$converters,new cljs.core.PersistentArrayMap(null, 2, ["text edn",jayq.core.mimetype_converter,"text clojure",jayq.core.mimetype_converter], null)], null)));
jayq.core.clj_content_type_QMARK_ = (function jayq$core$clj_content_type_QMARK_(x){
return cljs.core.re_find(/^(text|application)\/(clojure|edn)/,x);
});
jayq.core.__GT_content_type = (function jayq$core$__GT_content_type(ct){
if(typeof ct === 'string'){
return ct;
} else {
if((ct instanceof cljs.core.Keyword)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ct)].join(''),(1));
} else {
return null;
}
}
});
jayq.core.preprocess_request = (function jayq$core$preprocess_request(p__34083){
var map__34084 = p__34083;
var map__34084__$1 = ((((!((map__34084 == null)))?(((((map__34084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34084):map__34084);
var request = map__34084__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34084__$1,cljs.core.cst$kw$data);
var contentType = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34084__$1,cljs.core.cst$kw$contentType);
var ct = jayq.core.__GT_content_type(contentType);
var G__34087 = (function (){var fexpr__34088 = ((function (ct,map__34084,map__34084__$1,request,data,contentType){
return (function (p1__34081_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34081_SHARP_,cljs.core.cst$kw$contentType,ct);
} else {
return p1__34081_SHARP_;
}
});})(ct,map__34084,map__34084__$1,request,data,contentType))
;
return fexpr__34088(request);
})();
var fexpr__34086 = ((function (G__34087,ct,map__34084,map__34084__$1,request,data,contentType){
return (function (p1__34082_SHARP_){
if(cljs.core.truth_((function (){var and__3925__auto__ = ct;
if(cljs.core.truth_(and__3925__auto__)){
return jayq.core.clj_content_type_QMARK_(ct);
} else {
return and__3925__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34082_SHARP_,cljs.core.cst$kw$data,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0)));
} else {
return p1__34082_SHARP_;
}
});})(G__34087,ct,map__34084,map__34084__$1,request,data,contentType))
;
return fexpr__34086(G__34087);
});
jayq.core.__GT_ajax_settings = (function jayq$core$__GT_ajax_settings(request){
return cljs.core.clj__GT_js(jayq.core.preprocess_request(request));
});
jayq.core.ajax = (function jayq$core$ajax(var_args){
var G__34090 = arguments.length;
switch (G__34090) {
case 2:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings(settings));
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings(settings));
});

jayq.core.ajax.cljs$lang$maxFixedArity = 2;

jayq.core.xhr = (function jayq$core$xhr(p__34092,content,callback){
var vec__34093 = p__34092;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34093,(0),null);
var uri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34093,(1),null);
var params = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,clojure.string.upper_case(cljs.core.name(method)),cljs.core.cst$kw$data,cljs.core.clj__GT_js(content),cljs.core.cst$kw$success,callback], null));
return jQuery.ajax(uri,params);
});
/**
 * Reads clojure data from element content (preferably a script tag with type=edn/clojure)
 */
jayq.core.read = (function jayq$core$read($elem){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(jayq.core.html.cljs$core$IFn$_invoke$arity$1($elem));
});
jayq.core.$contains = jQuery.contains;
jayq.core.bind = (function jayq$core$bind($elem,ev,func){
return $elem.bind(cljs.core.name(ev),func);
});
jayq.core.unbind = (function jayq$core$unbind(var_args){
var args__4520__auto__ = [];
var len__4517__auto___34103 = arguments.length;
var i__4518__auto___34104 = (0);
while(true){
if((i__4518__auto___34104 < len__4517__auto___34103)){
args__4520__auto__.push((arguments[i__4518__auto___34104]));

var G__34105 = (i__4518__auto___34104 + (1));
i__4518__auto___34104 = G__34105;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((2) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((2)),(0),null)):null);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4521__auto__);
});

jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,ev,p__34099){
var vec__34100 = p__34099;
var func = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34100,(0),null);
return $elem.unbind(cljs.core.name(ev),func);
});

jayq.core.unbind.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
jayq.core.unbind.cljs$lang$applyTo = (function (seq34096){
var G__34097 = cljs.core.first(seq34096);
var seq34096__$1 = cljs.core.next(seq34096);
var G__34098 = cljs.core.first(seq34096__$1);
var seq34096__$2 = cljs.core.next(seq34096__$1);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34097,G__34098,seq34096__$2);
});

jayq.core.trigger = (function jayq$core$trigger($elem,ev){
return $elem.trigger(cljs.core.name(ev));
});
jayq.core.delegate = (function jayq$core$delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector(sel),cljs.core.name(ev),func);
});
jayq.core.__GT_event = (function jayq$core$__GT_event(e){
if(cljs.core.coll_QMARK_(e)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,e));
} else {
return cljs.core.clj__GT_js(e);
}
});
jayq.core.on = (function jayq$core$on(var_args){
var args__4520__auto__ = [];
var len__4517__auto___34113 = arguments.length;
var i__4518__auto___34114 = (0);
while(true){
if((i__4518__auto___34114 < len__4517__auto___34113)){
args__4520__auto__.push((arguments[i__4518__auto___34114]));

var G__34115 = (i__4518__auto___34114 + (1));
i__4518__auto___34114 = G__34115;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((2) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((2)),(0),null)):null);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4521__auto__);
});

jayq.core.on.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__34109){
var vec__34110 = p__34109;
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34110,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34110,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34110,(2),null);
return $elem.on(jayq.core.__GT_event(events),jayq.core.__GT_selector(sel),data,handler);
});

jayq.core.on.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
jayq.core.on.cljs$lang$applyTo = (function (seq34106){
var G__34107 = cljs.core.first(seq34106);
var seq34106__$1 = cljs.core.next(seq34106);
var G__34108 = cljs.core.first(seq34106__$1);
var seq34106__$2 = cljs.core.next(seq34106__$1);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34107,G__34108,seq34106__$2);
});

jayq.core.one = (function jayq$core$one(var_args){
var args__4520__auto__ = [];
var len__4517__auto___34123 = arguments.length;
var i__4518__auto___34124 = (0);
while(true){
if((i__4518__auto___34124 < len__4517__auto___34123)){
args__4520__auto__.push((arguments[i__4518__auto___34124]));

var G__34125 = (i__4518__auto___34124 + (1));
i__4518__auto___34124 = G__34125;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((2) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((2)),(0),null)):null);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4521__auto__);
});

jayq.core.one.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__34119){
var vec__34120 = p__34119;
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34120,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34120,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34120,(2),null);
return $elem.one(jayq.core.__GT_event(events),jayq.core.__GT_selector(sel),data,handler);
});

jayq.core.one.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
jayq.core.one.cljs$lang$applyTo = (function (seq34116){
var G__34117 = cljs.core.first(seq34116);
var seq34116__$1 = cljs.core.next(seq34116);
var G__34118 = cljs.core.first(seq34116__$1);
var seq34116__$2 = cljs.core.next(seq34116__$1);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34117,G__34118,seq34116__$2);
});

jayq.core.off = (function jayq$core$off(var_args){
var args__4520__auto__ = [];
var len__4517__auto___34133 = arguments.length;
var i__4518__auto___34134 = (0);
while(true){
if((i__4518__auto___34134 < len__4517__auto___34133)){
args__4520__auto__.push((arguments[i__4518__auto___34134]));

var G__34135 = (i__4518__auto___34134 + (1));
i__4518__auto___34134 = G__34135;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((2) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((2)),(0),null)):null);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4521__auto__);
});

jayq.core.off.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__34129){
var vec__34130 = p__34129;
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34130,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34130,(1),null);
return $elem.off(jayq.core.__GT_event(events),jayq.core.__GT_selector(sel),handler);
});

jayq.core.off.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
jayq.core.off.cljs$lang$applyTo = (function (seq34126){
var G__34127 = cljs.core.first(seq34126);
var seq34126__$1 = cljs.core.next(seq34126);
var G__34128 = cljs.core.first(seq34126__$1);
var seq34126__$2 = cljs.core.next(seq34126__$1);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34127,G__34128,seq34126__$2);
});

jayq.core.prevent = (function jayq$core$prevent(e){
return e.preventDefault();
});
jayq.core.height = (function jayq$core$height(var_args){
var G__34137 = arguments.length;
switch (G__34137) {
case 2:
return jayq.core.height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.height.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.height(x);
});

jayq.core.height.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.height();
});

jayq.core.height.cljs$lang$maxFixedArity = 2;

jayq.core.width = (function jayq$core$width(var_args){
var G__34140 = arguments.length;
switch (G__34140) {
case 2:
return jayq.core.width.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.width.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.width(x);
});

jayq.core.width.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.width();
});

jayq.core.width.cljs$lang$maxFixedArity = 2;

jayq.core.inner_height = (function jayq$core$inner_height($elem){
return $elem.innerHeight();
});
jayq.core.inner_width = (function jayq$core$inner_width($elem){
return $elem.innerWidth();
});
jayq.core.outer_height = (function jayq$core$outer_height($elem){
return $elem.outerHeight();
});
jayq.core.outer_width = (function jayq$core$outer_width($elem){
return $elem.outerWidth();
});
jayq.core.offset = (function jayq$core$offset(var_args){
var G__34143 = arguments.length;
switch (G__34143) {
case 2:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$2 = (function ($elem,coords){
return cljs.core.clj__GT_js(coords).offset();
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic($elem.offset(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
});

jayq.core.offset.cljs$lang$maxFixedArity = 2;

jayq.core.offset_parent = (function jayq$core$offset_parent($elem){
return $elem.offsetParent();
});
jayq.core.position = (function jayq$core$position($elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic($elem.position(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
});
jayq.core.scroll_left = (function jayq$core$scroll_left(var_args){
var G__34146 = arguments.length;
switch (G__34146) {
case 1:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollLeft();
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollLeft(x);
});

jayq.core.scroll_left.cljs$lang$maxFixedArity = 2;

jayq.core.scroll_top = (function jayq$core$scroll_top(var_args){
var G__34149 = arguments.length;
switch (G__34149) {
case 1:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollTop();
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollTop(x);
});

jayq.core.scroll_top.cljs$lang$maxFixedArity = 2;

jayq.core.$deferred = jQuery.Deferred;
jayq.core.$when = jQuery.when;
jayq.core.then = (function jayq$core$then(var_args){
var G__34152 = arguments.length;
switch (G__34152) {
case 3:
return jayq.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.then.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.then.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_fn,fail_fn){
return deferred.then(cljs.core.clj__GT_js(done_fn),cljs.core.clj__GT_js(fail_fn));
});

jayq.core.then.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_fn,fail_fn,progress_fn){
return deferred.then(cljs.core.clj__GT_js(done_fn),cljs.core.clj__GT_js(fail_fn),cljs.core.clj__GT_js(progress_fn));
});

jayq.core.then.cljs$lang$maxFixedArity = 4;

jayq.core.done = (function jayq$core$done(var_args){
var args__4520__auto__ = [];
var len__4517__auto___34156 = arguments.length;
var i__4518__auto___34157 = (0);
while(true){
if((i__4518__auto___34157 < len__4517__auto___34156)){
args__4520__auto__.push((arguments[i__4518__auto___34157]));

var G__34158 = (i__4518__auto___34157 + (1));
i__4518__auto___34157 = G__34158;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

jayq.core.done.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.done.apply(deferred,cljs.core.clj__GT_js(fns_args));
});

jayq.core.done.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
jayq.core.done.cljs$lang$applyTo = (function (seq34154){
var G__34155 = cljs.core.first(seq34154);
var seq34154__$1 = cljs.core.next(seq34154);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34155,seq34154__$1);
});

jayq.core.fail = (function jayq$core$fail(var_args){
var args__4520__auto__ = [];
var len__4517__auto___34161 = arguments.length;
var i__4518__auto___34162 = (0);
while(true){
if((i__4518__auto___34162 < len__4517__auto___34161)){
args__4520__auto__.push((arguments[i__4518__auto___34162]));

var G__34163 = (i__4518__auto___34162 + (1));
i__4518__auto___34162 = G__34163;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.fail.apply(deferred,cljs.core.clj__GT_js(fns_args));
});

jayq.core.fail.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
jayq.core.fail.cljs$lang$applyTo = (function (seq34159){
var G__34160 = cljs.core.first(seq34159);
var seq34159__$1 = cljs.core.next(seq34159);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34160,seq34159__$1);
});

jayq.core.progress = (function jayq$core$progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js(fns_args));
});
jayq.core.promise = (function jayq$core$promise(var_args){
var G__34165 = arguments.length;
switch (G__34165) {
case 1:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$1 = (function (deferred){
return deferred.promise();
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$2 = (function (deferred,type){
return deferred.promise(type);
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$3 = (function (deferred,type,target){
return deferred.promise(type,target);
});

jayq.core.promise.cljs$lang$maxFixedArity = 3;

jayq.core.always = (function jayq$core$always(var_args){
var args__4520__auto__ = [];
var len__4517__auto___34169 = arguments.length;
var i__4518__auto___34170 = (0);
while(true){
if((i__4518__auto___34170 < len__4517__auto___34169)){
args__4520__auto__.push((arguments[i__4518__auto___34170]));

var G__34171 = (i__4518__auto___34170 + (1));
i__4518__auto___34170 = G__34171;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

jayq.core.always.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.always.apply(deferred,cljs.core.clj__GT_js(fns_args));
});

jayq.core.always.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
jayq.core.always.cljs$lang$applyTo = (function (seq34167){
var G__34168 = cljs.core.first(seq34167);
var seq34167__$1 = cljs.core.next(seq34167);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34168,seq34167__$1);
});

jayq.core.reject = (function jayq$core$reject(deferred,args){
return deferred.reject(args);
});
jayq.core.reject_with = (function jayq$core$reject_with(deferred,context,args){
return deferred.rejectWith(context,args);
});
jayq.core.notify = (function jayq$core$notify(deferred,args){
return deferred.notify(args);
});
jayq.core.notify_with = (function jayq$core$notify_with(deferred,context,args){
return deferred.notifyWith(context,args);
});
jayq.core.resolve = (function jayq$core$resolve(deferred,args){
return deferred.resolve(args);
});
jayq.core.resolve_with = (function jayq$core$resolve_with(deferred,context,args){
return deferred.resolveWith(context,args);
});
jayq.core.pipe = (function jayq$core$pipe(var_args){
var G__34173 = arguments.length;
switch (G__34173) {
case 2:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$2 = (function (deferred,done_filter){
return deferred.pipe(done_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_filter,fail_filter){
return deferred.pipe(done_filter,fail_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_filter,fail_filter,progress_filter){
return deferred.pipe(done_filter,fail_filter,progress_filter);
});

jayq.core.pipe.cljs$lang$maxFixedArity = 4;

jayq.core.state = (function jayq$core$state(deferred){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(deferred.state());
});
jayq.core.deferred_m = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$return,jayq.core.$when,cljs.core.cst$kw$bind,(function (x,f){
var dfd = (jayq.core.$deferred.cljs$core$IFn$_invoke$arity$0 ? jayq.core.$deferred.cljs$core$IFn$_invoke$arity$0() : jayq.core.$deferred.call(null));
jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (dfd){
return (function (v){
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partial.cljs$core$IFn$_invoke$arity$2(jayq.core.resolve,dfd)], 0));
});})(dfd))
], 0));

return jayq.core.promise.cljs$core$IFn$_invoke$arity$1(dfd);
}),cljs.core.cst$kw$zero,cljs.core.identity], null);
jayq.core.ajax_m = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$return,cljs.core.identity,cljs.core.cst$kw$bind,(function (x,f){
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(jayq.core.ajax.cljs$core$IFn$_invoke$arity$1(x),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0));
}),cljs.core.cst$kw$zero,cljs.core.identity], null);
