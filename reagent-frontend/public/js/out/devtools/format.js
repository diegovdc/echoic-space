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
var o45124 = temp__5455__auto__;
var temp__5455__auto____$1 = (o45124["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o45125 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o45125["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o45126 = temp__5455__auto____$2;
return (o45126["make_template"]);
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
var o45127 = temp__5455__auto__;
var temp__5455__auto____$1 = (o45127["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o45128 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o45128["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o45129 = temp__5455__auto____$2;
return (o45129["make_group"]);
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
var o45130 = temp__5455__auto__;
var temp__5455__auto____$1 = (o45130["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o45131 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o45131["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o45132 = temp__5455__auto____$2;
return (o45132["make_reference"]);
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
var o45133 = temp__5455__auto__;
var temp__5455__auto____$1 = (o45133["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o45134 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o45134["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o45135 = temp__5455__auto____$2;
return (o45135["make_surrogate"]);
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
var o45136 = temp__5455__auto__;
var temp__5455__auto____$1 = (o45136["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o45137 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o45137["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o45138 = temp__5455__auto____$2;
return (o45138["render_markup"]);
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
var o45139 = temp__5455__auto__;
var temp__5455__auto____$1 = (o45139["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o45140 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o45140["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o45141 = temp__5455__auto____$2;
return (o45141["_LT_header_GT_"]);
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
var o45142 = temp__5455__auto__;
var temp__5455__auto____$1 = (o45142["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o45143 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o45143["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o45144 = temp__5455__auto____$2;
return (o45144["_LT_standard_body_GT_"]);
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
var len__4517__auto___45146 = arguments.length;
var i__4518__auto___45147 = (0);
while(true){
if((i__4518__auto___45147 < len__4517__auto___45146)){
args__4520__auto__.push((arguments[i__4518__auto___45147]));

var G__45148 = (i__4518__auto___45147 + (1));
i__4518__auto___45147 = G__45148;
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
devtools.format.render_markup.cljs$lang$applyTo = (function (seq45145){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45145));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4520__auto__ = [];
var len__4517__auto___45150 = arguments.length;
var i__4518__auto___45151 = (0);
while(true){
if((i__4518__auto___45151 < len__4517__auto___45150)){
args__4520__auto__.push((arguments[i__4518__auto___45151]));

var G__45152 = (i__4518__auto___45151 + (1));
i__4518__auto___45151 = G__45152;
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
devtools.format.make_template.cljs$lang$applyTo = (function (seq45149){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45149));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4520__auto__ = [];
var len__4517__auto___45154 = arguments.length;
var i__4518__auto___45155 = (0);
while(true){
if((i__4518__auto___45155 < len__4517__auto___45154)){
args__4520__auto__.push((arguments[i__4518__auto___45155]));

var G__45156 = (i__4518__auto___45155 + (1));
i__4518__auto___45155 = G__45156;
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
devtools.format.make_group.cljs$lang$applyTo = (function (seq45153){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45153));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4520__auto__ = [];
var len__4517__auto___45158 = arguments.length;
var i__4518__auto___45159 = (0);
while(true){
if((i__4518__auto___45159 < len__4517__auto___45158)){
args__4520__auto__.push((arguments[i__4518__auto___45159]));

var G__45160 = (i__4518__auto___45159 + (1));
i__4518__auto___45159 = G__45160;
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
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq45157){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45157));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4520__auto__ = [];
var len__4517__auto___45162 = arguments.length;
var i__4518__auto___45163 = (0);
while(true){
if((i__4518__auto___45163 < len__4517__auto___45162)){
args__4520__auto__.push((arguments[i__4518__auto___45163]));

var G__45164 = (i__4518__auto___45163 + (1));
i__4518__auto___45163 = G__45164;
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
devtools.format.template.cljs$lang$applyTo = (function (seq45161){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45161));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4520__auto__ = [];
var len__4517__auto___45166 = arguments.length;
var i__4518__auto___45167 = (0);
while(true){
if((i__4518__auto___45167 < len__4517__auto___45166)){
args__4520__auto__.push((arguments[i__4518__auto___45167]));

var G__45168 = (i__4518__auto___45167 + (1));
i__4518__auto___45167 = G__45168;
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
devtools.format.group.cljs$lang$applyTo = (function (seq45165){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45165));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4520__auto__ = [];
var len__4517__auto___45170 = arguments.length;
var i__4518__auto___45171 = (0);
while(true){
if((i__4518__auto___45171 < len__4517__auto___45170)){
args__4520__auto__.push((arguments[i__4518__auto___45171]));

var G__45172 = (i__4518__auto___45171 + (1));
i__4518__auto___45171 = G__45172;
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
devtools.format.surrogate.cljs$lang$applyTo = (function (seq45169){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45169));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4520__auto__ = [];
var len__4517__auto___45180 = arguments.length;
var i__4518__auto___45181 = (0);
while(true){
if((i__4518__auto___45181 < len__4517__auto___45180)){
args__4520__auto__.push((arguments[i__4518__auto___45181]));

var G__45182 = (i__4518__auto___45181 + (1));
i__4518__auto___45181 = G__45182;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__45176){
var vec__45177 = p__45176;
var state_override = cljs.core.nth.call(null,vec__45177,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__45177,state_override){
return (function (p1__45173_SHARP_){
return cljs.core.merge.call(null,p1__45173_SHARP_,state_override);
});})(vec__45177,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.reference.cljs$lang$applyTo = (function (seq45174){
var G__45175 = cljs.core.first.call(null,seq45174);
var seq45174__$1 = cljs.core.next.call(null,seq45174);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45175,seq45174__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4520__auto__ = [];
var len__4517__auto___45184 = arguments.length;
var i__4518__auto___45185 = (0);
while(true){
if((i__4518__auto___45185 < len__4517__auto___45184)){
args__4520__auto__.push((arguments[i__4518__auto___45185]));

var G__45186 = (i__4518__auto___45185 + (1));
i__4518__auto___45185 = G__45186;
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
devtools.format.build_header.cljs$lang$applyTo = (function (seq45183){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45183));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4520__auto__ = [];
var len__4517__auto___45189 = arguments.length;
var i__4518__auto___45190 = (0);
while(true){
if((i__4518__auto___45190 < len__4517__auto___45189)){
args__4520__auto__.push((arguments[i__4518__auto___45190]));

var G__45191 = (i__4518__auto___45190 + (1));
i__4518__auto___45190 = G__45191;
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
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq45187){
var G__45188 = cljs.core.first.call(null,seq45187);
var seq45187__$1 = cljs.core.next.call(null,seq45187);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45188,seq45187__$1);
});


//# sourceMappingURL=format.js.map?rel=1552956573696
