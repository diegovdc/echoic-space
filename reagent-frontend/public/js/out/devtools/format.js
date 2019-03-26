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
var o32306 = temp__5455__auto__;
var temp__5455__auto____$1 = (o32306["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o32307 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o32307["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o32308 = temp__5455__auto____$2;
return (o32308["make_template"]);
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
var o32309 = temp__5455__auto__;
var temp__5455__auto____$1 = (o32309["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o32310 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o32310["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o32311 = temp__5455__auto____$2;
return (o32311["make_group"]);
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
var o32312 = temp__5455__auto__;
var temp__5455__auto____$1 = (o32312["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o32313 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o32313["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o32314 = temp__5455__auto____$2;
return (o32314["make_reference"]);
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
var o32315 = temp__5455__auto__;
var temp__5455__auto____$1 = (o32315["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o32316 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o32316["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o32317 = temp__5455__auto____$2;
return (o32317["make_surrogate"]);
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
var o32318 = temp__5455__auto__;
var temp__5455__auto____$1 = (o32318["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o32319 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o32319["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o32320 = temp__5455__auto____$2;
return (o32320["render_markup"]);
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
var o32321 = temp__5455__auto__;
var temp__5455__auto____$1 = (o32321["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o32322 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o32322["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o32323 = temp__5455__auto____$2;
return (o32323["_LT_header_GT_"]);
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
var o32324 = temp__5455__auto__;
var temp__5455__auto____$1 = (o32324["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o32325 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o32325["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o32326 = temp__5455__auto____$2;
return (o32326["_LT_standard_body_GT_"]);
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
var len__4517__auto___32328 = arguments.length;
var i__4518__auto___32329 = (0);
while(true){
if((i__4518__auto___32329 < len__4517__auto___32328)){
args__4520__auto__.push((arguments[i__4518__auto___32329]));

var G__32330 = (i__4518__auto___32329 + (1));
i__4518__auto___32329 = G__32330;
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
devtools.format.render_markup.cljs$lang$applyTo = (function (seq32327){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32327));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4520__auto__ = [];
var len__4517__auto___32332 = arguments.length;
var i__4518__auto___32333 = (0);
while(true){
if((i__4518__auto___32333 < len__4517__auto___32332)){
args__4520__auto__.push((arguments[i__4518__auto___32333]));

var G__32334 = (i__4518__auto___32333 + (1));
i__4518__auto___32333 = G__32334;
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
devtools.format.make_template.cljs$lang$applyTo = (function (seq32331){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32331));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4520__auto__ = [];
var len__4517__auto___32336 = arguments.length;
var i__4518__auto___32337 = (0);
while(true){
if((i__4518__auto___32337 < len__4517__auto___32336)){
args__4520__auto__.push((arguments[i__4518__auto___32337]));

var G__32338 = (i__4518__auto___32337 + (1));
i__4518__auto___32337 = G__32338;
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
devtools.format.make_group.cljs$lang$applyTo = (function (seq32335){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32335));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4520__auto__ = [];
var len__4517__auto___32340 = arguments.length;
var i__4518__auto___32341 = (0);
while(true){
if((i__4518__auto___32341 < len__4517__auto___32340)){
args__4520__auto__.push((arguments[i__4518__auto___32341]));

var G__32342 = (i__4518__auto___32341 + (1));
i__4518__auto___32341 = G__32342;
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
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq32339){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32339));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4520__auto__ = [];
var len__4517__auto___32344 = arguments.length;
var i__4518__auto___32345 = (0);
while(true){
if((i__4518__auto___32345 < len__4517__auto___32344)){
args__4520__auto__.push((arguments[i__4518__auto___32345]));

var G__32346 = (i__4518__auto___32345 + (1));
i__4518__auto___32345 = G__32346;
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
devtools.format.template.cljs$lang$applyTo = (function (seq32343){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32343));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4520__auto__ = [];
var len__4517__auto___32348 = arguments.length;
var i__4518__auto___32349 = (0);
while(true){
if((i__4518__auto___32349 < len__4517__auto___32348)){
args__4520__auto__.push((arguments[i__4518__auto___32349]));

var G__32350 = (i__4518__auto___32349 + (1));
i__4518__auto___32349 = G__32350;
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
devtools.format.group.cljs$lang$applyTo = (function (seq32347){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32347));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4520__auto__ = [];
var len__4517__auto___32352 = arguments.length;
var i__4518__auto___32353 = (0);
while(true){
if((i__4518__auto___32353 < len__4517__auto___32352)){
args__4520__auto__.push((arguments[i__4518__auto___32353]));

var G__32354 = (i__4518__auto___32353 + (1));
i__4518__auto___32353 = G__32354;
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
devtools.format.surrogate.cljs$lang$applyTo = (function (seq32351){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32351));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4520__auto__ = [];
var len__4517__auto___32362 = arguments.length;
var i__4518__auto___32363 = (0);
while(true){
if((i__4518__auto___32363 < len__4517__auto___32362)){
args__4520__auto__.push((arguments[i__4518__auto___32363]));

var G__32364 = (i__4518__auto___32363 + (1));
i__4518__auto___32363 = G__32364;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__32358){
var vec__32359 = p__32358;
var state_override = cljs.core.nth.call(null,vec__32359,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__32359,state_override){
return (function (p1__32355_SHARP_){
return cljs.core.merge.call(null,p1__32355_SHARP_,state_override);
});})(vec__32359,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.reference.cljs$lang$applyTo = (function (seq32356){
var G__32357 = cljs.core.first.call(null,seq32356);
var seq32356__$1 = cljs.core.next.call(null,seq32356);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32357,seq32356__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4520__auto__ = [];
var len__4517__auto___32366 = arguments.length;
var i__4518__auto___32367 = (0);
while(true){
if((i__4518__auto___32367 < len__4517__auto___32366)){
args__4520__auto__.push((arguments[i__4518__auto___32367]));

var G__32368 = (i__4518__auto___32367 + (1));
i__4518__auto___32367 = G__32368;
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
devtools.format.build_header.cljs$lang$applyTo = (function (seq32365){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32365));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4520__auto__ = [];
var len__4517__auto___32371 = arguments.length;
var i__4518__auto___32372 = (0);
while(true){
if((i__4518__auto___32372 < len__4517__auto___32371)){
args__4520__auto__.push((arguments[i__4518__auto___32372]));

var G__32373 = (i__4518__auto___32372 + (1));
i__4518__auto___32372 = G__32373;
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
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq32369){
var G__32370 = cljs.core.first.call(null,seq32369);
var seq32369__$1 = cljs.core.next.call(null,seq32369);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32370,seq32369__$1);
});


//# sourceMappingURL=format.js.map?rel=1553576526043
