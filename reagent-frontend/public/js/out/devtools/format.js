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
var o27042 = temp__5455__auto__;
var temp__5455__auto____$1 = (o27042["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o27043 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o27043["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o27044 = temp__5455__auto____$2;
return (o27044["make_template"]);
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
var o27045 = temp__5455__auto__;
var temp__5455__auto____$1 = (o27045["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o27046 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o27046["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o27047 = temp__5455__auto____$2;
return (o27047["make_group"]);
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
var o27048 = temp__5455__auto__;
var temp__5455__auto____$1 = (o27048["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o27049 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o27049["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o27050 = temp__5455__auto____$2;
return (o27050["make_reference"]);
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
var o27051 = temp__5455__auto__;
var temp__5455__auto____$1 = (o27051["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o27052 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o27052["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o27053 = temp__5455__auto____$2;
return (o27053["make_surrogate"]);
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
var o27054 = temp__5455__auto__;
var temp__5455__auto____$1 = (o27054["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o27055 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o27055["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o27056 = temp__5455__auto____$2;
return (o27056["render_markup"]);
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
var o27057 = temp__5455__auto__;
var temp__5455__auto____$1 = (o27057["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o27058 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o27058["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o27059 = temp__5455__auto____$2;
return (o27059["_LT_header_GT_"]);
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
var o27060 = temp__5455__auto__;
var temp__5455__auto____$1 = (o27060["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o27061 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o27061["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o27062 = temp__5455__auto____$2;
return (o27062["_LT_standard_body_GT_"]);
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
var len__4517__auto___27064 = arguments.length;
var i__4518__auto___27065 = (0);
while(true){
if((i__4518__auto___27065 < len__4517__auto___27064)){
args__4520__auto__.push((arguments[i__4518__auto___27065]));

var G__27066 = (i__4518__auto___27065 + (1));
i__4518__auto___27065 = G__27066;
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
devtools.format.render_markup.cljs$lang$applyTo = (function (seq27063){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27063));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4520__auto__ = [];
var len__4517__auto___27068 = arguments.length;
var i__4518__auto___27069 = (0);
while(true){
if((i__4518__auto___27069 < len__4517__auto___27068)){
args__4520__auto__.push((arguments[i__4518__auto___27069]));

var G__27070 = (i__4518__auto___27069 + (1));
i__4518__auto___27069 = G__27070;
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
devtools.format.make_template.cljs$lang$applyTo = (function (seq27067){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27067));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4520__auto__ = [];
var len__4517__auto___27072 = arguments.length;
var i__4518__auto___27073 = (0);
while(true){
if((i__4518__auto___27073 < len__4517__auto___27072)){
args__4520__auto__.push((arguments[i__4518__auto___27073]));

var G__27074 = (i__4518__auto___27073 + (1));
i__4518__auto___27073 = G__27074;
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
devtools.format.make_group.cljs$lang$applyTo = (function (seq27071){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27071));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4520__auto__ = [];
var len__4517__auto___27076 = arguments.length;
var i__4518__auto___27077 = (0);
while(true){
if((i__4518__auto___27077 < len__4517__auto___27076)){
args__4520__auto__.push((arguments[i__4518__auto___27077]));

var G__27078 = (i__4518__auto___27077 + (1));
i__4518__auto___27077 = G__27078;
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
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq27075){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27075));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4520__auto__ = [];
var len__4517__auto___27080 = arguments.length;
var i__4518__auto___27081 = (0);
while(true){
if((i__4518__auto___27081 < len__4517__auto___27080)){
args__4520__auto__.push((arguments[i__4518__auto___27081]));

var G__27082 = (i__4518__auto___27081 + (1));
i__4518__auto___27081 = G__27082;
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
devtools.format.template.cljs$lang$applyTo = (function (seq27079){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27079));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4520__auto__ = [];
var len__4517__auto___27084 = arguments.length;
var i__4518__auto___27085 = (0);
while(true){
if((i__4518__auto___27085 < len__4517__auto___27084)){
args__4520__auto__.push((arguments[i__4518__auto___27085]));

var G__27086 = (i__4518__auto___27085 + (1));
i__4518__auto___27085 = G__27086;
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
devtools.format.group.cljs$lang$applyTo = (function (seq27083){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27083));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4520__auto__ = [];
var len__4517__auto___27088 = arguments.length;
var i__4518__auto___27089 = (0);
while(true){
if((i__4518__auto___27089 < len__4517__auto___27088)){
args__4520__auto__.push((arguments[i__4518__auto___27089]));

var G__27090 = (i__4518__auto___27089 + (1));
i__4518__auto___27089 = G__27090;
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
devtools.format.surrogate.cljs$lang$applyTo = (function (seq27087){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27087));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4520__auto__ = [];
var len__4517__auto___27098 = arguments.length;
var i__4518__auto___27099 = (0);
while(true){
if((i__4518__auto___27099 < len__4517__auto___27098)){
args__4520__auto__.push((arguments[i__4518__auto___27099]));

var G__27100 = (i__4518__auto___27099 + (1));
i__4518__auto___27099 = G__27100;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__27094){
var vec__27095 = p__27094;
var state_override = cljs.core.nth.call(null,vec__27095,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__27095,state_override){
return (function (p1__27091_SHARP_){
return cljs.core.merge.call(null,p1__27091_SHARP_,state_override);
});})(vec__27095,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.reference.cljs$lang$applyTo = (function (seq27092){
var G__27093 = cljs.core.first.call(null,seq27092);
var seq27092__$1 = cljs.core.next.call(null,seq27092);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27093,seq27092__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4520__auto__ = [];
var len__4517__auto___27102 = arguments.length;
var i__4518__auto___27103 = (0);
while(true){
if((i__4518__auto___27103 < len__4517__auto___27102)){
args__4520__auto__.push((arguments[i__4518__auto___27103]));

var G__27104 = (i__4518__auto___27103 + (1));
i__4518__auto___27103 = G__27104;
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
devtools.format.build_header.cljs$lang$applyTo = (function (seq27101){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27101));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4520__auto__ = [];
var len__4517__auto___27107 = arguments.length;
var i__4518__auto___27108 = (0);
while(true){
if((i__4518__auto___27108 < len__4517__auto___27107)){
args__4520__auto__.push((arguments[i__4518__auto___27108]));

var G__27109 = (i__4518__auto___27108 + (1));
i__4518__auto___27108 = G__27109;
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
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq27105){
var G__27106 = cljs.core.first.call(null,seq27105);
var seq27105__$1 = cljs.core.next.call(null,seq27105);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27106,seq27105__$1);
});


//# sourceMappingURL=format.js.map?rel=1552590639515
