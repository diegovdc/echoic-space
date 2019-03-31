// Compiled by ClojureScript 1.10.312 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4229__auto__ = (((value == null))?null:value);
var m__4230__auto__ = (devtools.format._header[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,value);
} else {
var m__4230__auto____$1 = (devtools.format._header["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4229__auto__ = (((value == null))?null:value);
var m__4230__auto__ = (devtools.format._has_body[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,value);
} else {
var m__4230__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4229__auto__ = (((value == null))?null:value);
var m__4230__auto__ = (devtools.format._body[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,value);
} else {
var m__4230__auto____$1 = (devtools.format._body["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o37643 = temp__5455__auto__;
var temp__5455__auto____$1 = (o37643["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o37644 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o37644["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o37645 = temp__5455__auto____$2;
return (o37645["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o37646 = temp__5455__auto__;
var temp__5455__auto____$1 = (o37646["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o37647 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o37647["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o37648 = temp__5455__auto____$2;
return (o37648["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o37649 = temp__5455__auto__;
var temp__5455__auto____$1 = (o37649["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o37650 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o37650["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o37651 = temp__5455__auto____$2;
return (o37651["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o37652 = temp__5455__auto__;
var temp__5455__auto____$1 = (o37652["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o37653 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o37653["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o37654 = temp__5455__auto____$2;
return (o37654["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o37655 = temp__5455__auto__;
var temp__5455__auto____$1 = (o37655["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o37656 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o37656["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o37657 = temp__5455__auto____$2;
return (o37657["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o37658 = temp__5455__auto__;
var temp__5455__auto____$1 = (o37658["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o37659 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o37659["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o37660 = temp__5455__auto____$2;
return (o37660["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o37661 = temp__5455__auto__;
var temp__5455__auto____$1 = (o37661["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o37662 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o37662["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o37663 = temp__5455__auto____$2;
return (o37663["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4520__auto__ = [];
var len__4517__auto___37665 = arguments.length;
var i__4518__auto___37666 = (0);
while(true){
if((i__4518__auto___37666 < len__4517__auto___37665)){
args__4520__auto__.push((arguments[i__4518__auto___37666]));

var G__37667 = (i__4518__auto___37666 + (1));
i__4518__auto___37666 = G__37667;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.render_markup.cljs$lang$applyTo = (function (seq37664){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37664));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4520__auto__ = [];
var len__4517__auto___37669 = arguments.length;
var i__4518__auto___37670 = (0);
while(true){
if((i__4518__auto___37670 < len__4517__auto___37669)){
args__4520__auto__.push((arguments[i__4518__auto___37670]));

var G__37671 = (i__4518__auto___37670 + (1));
i__4518__auto___37670 = G__37671;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_template.cljs$lang$applyTo = (function (seq37668){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37668));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4520__auto__ = [];
var len__4517__auto___37673 = arguments.length;
var i__4518__auto___37674 = (0);
while(true){
if((i__4518__auto___37674 < len__4517__auto___37673)){
args__4520__auto__.push((arguments[i__4518__auto___37674]));

var G__37675 = (i__4518__auto___37674 + (1));
i__4518__auto___37674 = G__37675;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_group.cljs$lang$applyTo = (function (seq37672){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37672));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4520__auto__ = [];
var len__4517__auto___37677 = arguments.length;
var i__4518__auto___37678 = (0);
while(true){
if((i__4518__auto___37678 < len__4517__auto___37677)){
args__4520__auto__.push((arguments[i__4518__auto___37678]));

var G__37679 = (i__4518__auto___37678 + (1));
i__4518__auto___37678 = G__37679;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq37676){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37676));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4520__auto__ = [];
var len__4517__auto___37681 = arguments.length;
var i__4518__auto___37682 = (0);
while(true){
if((i__4518__auto___37682 < len__4517__auto___37681)){
args__4520__auto__.push((arguments[i__4518__auto___37682]));

var G__37683 = (i__4518__auto___37682 + (1));
i__4518__auto___37682 = G__37683;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.template.cljs$lang$applyTo = (function (seq37680){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37680));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4520__auto__ = [];
var len__4517__auto___37685 = arguments.length;
var i__4518__auto___37686 = (0);
while(true){
if((i__4518__auto___37686 < len__4517__auto___37685)){
args__4520__auto__.push((arguments[i__4518__auto___37686]));

var G__37687 = (i__4518__auto___37686 + (1));
i__4518__auto___37686 = G__37687;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.group.cljs$lang$applyTo = (function (seq37684){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37684));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4520__auto__ = [];
var len__4517__auto___37689 = arguments.length;
var i__4518__auto___37690 = (0);
while(true){
if((i__4518__auto___37690 < len__4517__auto___37689)){
args__4520__auto__.push((arguments[i__4518__auto___37690]));

var G__37691 = (i__4518__auto___37690 + (1));
i__4518__auto___37690 = G__37691;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.surrogate.cljs$lang$applyTo = (function (seq37688){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37688));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4520__auto__ = [];
var len__4517__auto___37699 = arguments.length;
var i__4518__auto___37700 = (0);
while(true){
if((i__4518__auto___37700 < len__4517__auto___37699)){
args__4520__auto__.push((arguments[i__4518__auto___37700]));

var G__37701 = (i__4518__auto___37700 + (1));
i__4518__auto___37700 = G__37701;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__37695){
var vec__37696 = p__37695;
var state_override = cljs.core.nth.call(null,vec__37696,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__37696,state_override){
return (function (p1__37692_SHARP_){
return cljs.core.merge.call(null,p1__37692_SHARP_,state_override);
});})(vec__37696,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.reference.cljs$lang$applyTo = (function (seq37693){
var G__37694 = cljs.core.first.call(null,seq37693);
var seq37693__$1 = cljs.core.next.call(null,seq37693);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37694,seq37693__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4520__auto__ = [];
var len__4517__auto___37703 = arguments.length;
var i__4518__auto___37704 = (0);
while(true){
if((i__4518__auto___37704 < len__4517__auto___37703)){
args__4520__auto__.push((arguments[i__4518__auto___37704]));

var G__37705 = (i__4518__auto___37704 + (1));
i__4518__auto___37704 = G__37705;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.build_header.cljs$lang$applyTo = (function (seq37702){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37702));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4520__auto__ = [];
var len__4517__auto___37708 = arguments.length;
var i__4518__auto___37709 = (0);
while(true){
if((i__4518__auto___37709 < len__4517__auto___37708)){
args__4520__auto__.push((arguments[i__4518__auto___37709]));

var G__37710 = (i__4518__auto___37709 + (1));
i__4518__auto___37709 = G__37710;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq37706){
var G__37707 = cljs.core.first.call(null,seq37706);
var seq37706__$1 = cljs.core.next.call(null,seq37706);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37707,seq37706__$1);
});


//# sourceMappingURL=format.js.map?rel=1553997013515
