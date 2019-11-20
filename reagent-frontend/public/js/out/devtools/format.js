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
var o52152 = temp__5455__auto__;
var temp__5455__auto____$1 = (o52152["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o52153 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o52153["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o52154 = temp__5455__auto____$2;
return (o52154["make_template"]);
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
var o52155 = temp__5455__auto__;
var temp__5455__auto____$1 = (o52155["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o52156 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o52156["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o52157 = temp__5455__auto____$2;
return (o52157["make_group"]);
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
var o52158 = temp__5455__auto__;
var temp__5455__auto____$1 = (o52158["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o52159 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o52159["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o52160 = temp__5455__auto____$2;
return (o52160["make_reference"]);
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
var o52161 = temp__5455__auto__;
var temp__5455__auto____$1 = (o52161["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o52162 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o52162["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o52163 = temp__5455__auto____$2;
return (o52163["make_surrogate"]);
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
var o52164 = temp__5455__auto__;
var temp__5455__auto____$1 = (o52164["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o52165 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o52165["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o52166 = temp__5455__auto____$2;
return (o52166["render_markup"]);
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
var o52167 = temp__5455__auto__;
var temp__5455__auto____$1 = (o52167["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o52168 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o52168["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o52169 = temp__5455__auto____$2;
return (o52169["_LT_header_GT_"]);
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
var o52170 = temp__5455__auto__;
var temp__5455__auto____$1 = (o52170["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o52171 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o52171["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o52172 = temp__5455__auto____$2;
return (o52172["_LT_standard_body_GT_"]);
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
var len__4517__auto___52174 = arguments.length;
var i__4518__auto___52175 = (0);
while(true){
if((i__4518__auto___52175 < len__4517__auto___52174)){
args__4520__auto__.push((arguments[i__4518__auto___52175]));

var G__52176 = (i__4518__auto___52175 + (1));
i__4518__auto___52175 = G__52176;
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
devtools.format.render_markup.cljs$lang$applyTo = (function (seq52173){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52173));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4520__auto__ = [];
var len__4517__auto___52178 = arguments.length;
var i__4518__auto___52179 = (0);
while(true){
if((i__4518__auto___52179 < len__4517__auto___52178)){
args__4520__auto__.push((arguments[i__4518__auto___52179]));

var G__52180 = (i__4518__auto___52179 + (1));
i__4518__auto___52179 = G__52180;
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
devtools.format.make_template.cljs$lang$applyTo = (function (seq52177){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52177));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4520__auto__ = [];
var len__4517__auto___52182 = arguments.length;
var i__4518__auto___52183 = (0);
while(true){
if((i__4518__auto___52183 < len__4517__auto___52182)){
args__4520__auto__.push((arguments[i__4518__auto___52183]));

var G__52184 = (i__4518__auto___52183 + (1));
i__4518__auto___52183 = G__52184;
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
devtools.format.make_group.cljs$lang$applyTo = (function (seq52181){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52181));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4520__auto__ = [];
var len__4517__auto___52186 = arguments.length;
var i__4518__auto___52187 = (0);
while(true){
if((i__4518__auto___52187 < len__4517__auto___52186)){
args__4520__auto__.push((arguments[i__4518__auto___52187]));

var G__52188 = (i__4518__auto___52187 + (1));
i__4518__auto___52187 = G__52188;
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
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq52185){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52185));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4520__auto__ = [];
var len__4517__auto___52190 = arguments.length;
var i__4518__auto___52191 = (0);
while(true){
if((i__4518__auto___52191 < len__4517__auto___52190)){
args__4520__auto__.push((arguments[i__4518__auto___52191]));

var G__52192 = (i__4518__auto___52191 + (1));
i__4518__auto___52191 = G__52192;
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
devtools.format.template.cljs$lang$applyTo = (function (seq52189){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52189));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4520__auto__ = [];
var len__4517__auto___52194 = arguments.length;
var i__4518__auto___52195 = (0);
while(true){
if((i__4518__auto___52195 < len__4517__auto___52194)){
args__4520__auto__.push((arguments[i__4518__auto___52195]));

var G__52196 = (i__4518__auto___52195 + (1));
i__4518__auto___52195 = G__52196;
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
devtools.format.group.cljs$lang$applyTo = (function (seq52193){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52193));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4520__auto__ = [];
var len__4517__auto___52198 = arguments.length;
var i__4518__auto___52199 = (0);
while(true){
if((i__4518__auto___52199 < len__4517__auto___52198)){
args__4520__auto__.push((arguments[i__4518__auto___52199]));

var G__52200 = (i__4518__auto___52199 + (1));
i__4518__auto___52199 = G__52200;
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
devtools.format.surrogate.cljs$lang$applyTo = (function (seq52197){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52197));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4520__auto__ = [];
var len__4517__auto___52208 = arguments.length;
var i__4518__auto___52209 = (0);
while(true){
if((i__4518__auto___52209 < len__4517__auto___52208)){
args__4520__auto__.push((arguments[i__4518__auto___52209]));

var G__52210 = (i__4518__auto___52209 + (1));
i__4518__auto___52209 = G__52210;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__52204){
var vec__52205 = p__52204;
var state_override = cljs.core.nth.call(null,vec__52205,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__52205,state_override){
return (function (p1__52201_SHARP_){
return cljs.core.merge.call(null,p1__52201_SHARP_,state_override);
});})(vec__52205,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.reference.cljs$lang$applyTo = (function (seq52202){
var G__52203 = cljs.core.first.call(null,seq52202);
var seq52202__$1 = cljs.core.next.call(null,seq52202);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52203,seq52202__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4520__auto__ = [];
var len__4517__auto___52212 = arguments.length;
var i__4518__auto___52213 = (0);
while(true){
if((i__4518__auto___52213 < len__4517__auto___52212)){
args__4520__auto__.push((arguments[i__4518__auto___52213]));

var G__52214 = (i__4518__auto___52213 + (1));
i__4518__auto___52213 = G__52214;
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
devtools.format.build_header.cljs$lang$applyTo = (function (seq52211){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52211));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4520__auto__ = [];
var len__4517__auto___52217 = arguments.length;
var i__4518__auto___52218 = (0);
while(true){
if((i__4518__auto___52218 < len__4517__auto___52217)){
args__4520__auto__.push((arguments[i__4518__auto___52218]));

var G__52219 = (i__4518__auto___52218 + (1));
i__4518__auto___52218 = G__52219;
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
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq52215){
var G__52216 = cljs.core.first.call(null,seq52215);
var seq52215__$1 = cljs.core.next.call(null,seq52215);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52216,seq52215__$1);
});


//# sourceMappingURL=format.js.map?rel=1574224100327
