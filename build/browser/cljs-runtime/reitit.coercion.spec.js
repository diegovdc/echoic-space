goog.provide('reitit.coercion.spec');
reitit.coercion.spec.string_transformer = spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec_tools.core.strip_extra_keys_transformer,spec_tools.core.string_transformer], 0));
reitit.coercion.spec.json_transformer = spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec_tools.core.strip_extra_keys_transformer,spec_tools.core.json_transformer], 0));
reitit.coercion.spec.strip_extra_keys_transformer = spec_tools.core.strip_extra_keys_transformer;

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {spec_tools.core.Transformer}
 * @implements {cljs.core.IWithMeta}
*/
reitit.coercion.spec.t_reitit$coercion$spec37206 = (function (meta37207){
this.meta37207 = meta37207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.coercion.spec.t_reitit$coercion$spec37206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37208,meta37207__$1){
var self__ = this;
var _37208__$1 = this;
return (new reitit.coercion.spec.t_reitit$coercion$spec37206(meta37207__$1));
}));

(reitit.coercion.spec.t_reitit$coercion$spec37206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37208){
var self__ = this;
var _37208__$1 = this;
return self__.meta37207;
}));

(reitit.coercion.spec.t_reitit$coercion$spec37206.prototype.spec_tools$core$Transformer$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.coercion.spec.t_reitit$coercion$spec37206.prototype.spec_tools$core$Transformer$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("reitit.coercion.spec","no-op","reitit.coercion.spec/no-op",-549362779);
}));

(reitit.coercion.spec.t_reitit$coercion$spec37206.prototype.spec_tools$core$Transformer$_encoder$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return null;
}));

(reitit.coercion.spec.t_reitit$coercion$spec37206.prototype.spec_tools$core$Transformer$_decoder$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return null;
}));

(reitit.coercion.spec.t_reitit$coercion$spec37206.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta37207","meta37207",-505884957,null)], null);
}));

(reitit.coercion.spec.t_reitit$coercion$spec37206.cljs$lang$type = true);

(reitit.coercion.spec.t_reitit$coercion$spec37206.cljs$lang$ctorStr = "reitit.coercion.spec/t_reitit$coercion$spec37206");

(reitit.coercion.spec.t_reitit$coercion$spec37206.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"reitit.coercion.spec/t_reitit$coercion$spec37206");
}));

/**
 * Positional factory function for reitit.coercion.spec/t_reitit$coercion$spec37206.
 */
reitit.coercion.spec.__GT_t_reitit$coercion$spec37206 = (function reitit$coercion$spec$__GT_t_reitit$coercion$spec37206(meta37207){
return (new reitit.coercion.spec.t_reitit$coercion$spec37206(meta37207));
});


reitit.coercion.spec.no_op_transformer = (new reitit.coercion.spec.t_reitit$coercion$spec37206(cljs.core.PersistentArrayMap.EMPTY));

/**
 * @interface
 */
reitit.coercion.spec.IntoSpec = function(){};

var reitit$coercion$spec$IntoSpec$into_spec$dyn_37242 = (function (this$,name){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (reitit.coercion.spec.into_spec[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__5394__auto__.call(null,this$,name));
} else {
var m__5392__auto__ = (reitit.coercion.spec.into_spec["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__5392__auto__.call(null,this$,name));
} else {
throw cljs.core.missing_protocol("IntoSpec.into-spec",this$);
}
}
});
reitit.coercion.spec.into_spec = (function reitit$coercion$spec$into_spec(this$,name){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$spec$IntoSpec$into_spec$arity$2 == null)))))){
return this$.reitit$coercion$spec$IntoSpec$into_spec$arity$2(this$,name);
} else {
return reitit$coercion$spec$IntoSpec$into_spec$dyn_37242(this$,name);
}
});

reitit.coercion.spec.ensure_name = (function reitit$coercion$spec$ensure_name(_QMARK_name){
var or__5045__auto__ = _QMARK_name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("spec",cljs.core.name(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("")));
}
});
(cljs.core.PersistentArrayMap.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1),new cljs.core.Keyword(null,"name","name",1843675177));
}));

(cljs.core.PersistentHashMap.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1),new cljs.core.Keyword(null,"name","name",1843675177));
}));

(cljs.core.PersistentVector.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1),new cljs.core.Keyword(null,"name","name",1843675177));
}));

(spec_tools.data_spec.Maybe.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(spec_tools.data_spec.Maybe.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1);
}));

(spec_tools.core.Spec.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(spec_tools.core.Spec.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

(reitit.coercion.spec.IntoSpec["_"] = true);

(reitit.coercion.spec.into_spec["_"] = (function (this$,_){
return spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),this$], null));
}));

(reitit.coercion.spec.IntoSpec["null"] = true);

(reitit.coercion.spec.into_spec["null"] = (function (this$,_){
return null;
}));
reitit.coercion.spec.stringify_pred = (function reitit$coercion$spec$stringify_pred(pred){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.seq_QMARK_(pred))?cljs.core.seq(pred):pred));
});
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.spec !== 'undefined') && (typeof reitit.coercion.spec.coerce_response_QMARK_ !== 'undefined')){
} else {
reitit.coercion.spec.coerce_response_QMARK_ = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("reitit.coercion.spec","default","reitit.coercion.spec/default",-1835621218)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__37210 = cljs.core.get_global_hierarchy;
return (fexpr__37210.cljs$core$IFn$_invoke$arity$0 ? fexpr__37210.cljs$core$IFn$_invoke$arity$0() : fexpr__37210.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reitit.coercion.spec","coerce-response?"),cljs.core.identity,new cljs.core.Keyword("reitit.coercion.spec","default","reitit.coercion.spec/default",-1835621218),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
reitit.coercion.spec.coerce_response_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("reitit.coercion.spec","default","reitit.coercion.spec/default",-1835621218),(function (_){
return true;
}));
reitit.coercion.spec.default_options = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coerce-response?","coerce-response?",1125033091),reitit.coercion.spec.coerce_response_QMARK_,new cljs.core.Keyword(null,"transformers","transformers",-734201565),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.spec.strip_extra_keys_transformer,new cljs.core.Keyword(null,"formats","formats",-1397890976),new cljs.core.PersistentArrayMap(null, 1, ["application/json",reitit.coercion.spec.json_transformer], null)], null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.spec.string_transformer], null),new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.spec.no_op_transformer], null)], null)], null);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {reitit.coercion.Coercion}
*/
reitit.coercion.spec.t_reitit$coercion$spec37215 = (function (p__37213,map__37214,opts,transformers,coerce_response_QMARK_,meta37216){
this.p__37213 = p__37213;
this.map__37214 = map__37214;
this.opts = opts;
this.transformers = transformers;
this.coerce_response_QMARK_ = coerce_response_QMARK_;
this.meta37216 = meta37216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.coercion.spec.t_reitit$coercion$spec37215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37217,meta37216__$1){
var self__ = this;
var _37217__$1 = this;
return (new reitit.coercion.spec.t_reitit$coercion$spec37215(self__.p__37213,self__.map__37214,self__.opts,self__.transformers,self__.coerce_response_QMARK_,meta37216__$1));
}));

(reitit.coercion.spec.t_reitit$coercion$spec37215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37217){
var self__ = this;
var _37217__$1 = this;
return self__.meta37216;
}));

(reitit.coercion.spec.t_reitit$coercion$spec37215.prototype.reitit$coercion$Coercion$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.coercion.spec.t_reitit$coercion$spec37215.prototype.reitit$coercion$Coercion$_get_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"spec","spec",347520401);
}));

(reitit.coercion.spec.t_reitit$coercion$spec37215.prototype.reitit$coercion$Coercion$_get_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.coercion.spec.t_reitit$coercion$spec37215.prototype.reitit$coercion$Coercion$_get_apidocs$arity$3 = (function (this$,specification,p__37218){
var self__ = this;
var map__37219 = p__37218;
var map__37219__$1 = cljs.core.__destructure_map(map__37219);
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37219__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var responses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37219__$1,new cljs.core.Keyword(null,"responses","responses",1257546453));
var this$__$1 = this;
var G__37220 = specification;
var G__37220__$1 = (((G__37220 instanceof cljs.core.Keyword))?G__37220.fqn:null);
switch (G__37220__$1) {
case "swagger":
return spec_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(parameters)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("spec-tools.swagger.core","parameters","spec-tools.swagger.core/parameters",-239005676),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(parameters),(function (){var iter__5523__auto__ = (function reitit$coercion$spec$iter__37221(s__37222){
return (new cljs.core.LazySeq(null,(function (){
var s__37222__$1 = s__37222;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__37222__$1);
if(temp__5804__auto__){
var s__37222__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37222__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__37222__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__37224 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__37223 = (0);
while(true){
if((i__37223 < size__5522__auto__)){
var vec__37225 = cljs.core._nth(c__5521__auto__,i__37223);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37225,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37225,(1),null);
cljs.core.chunk_append(b__37224,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,v,null)], null));

var G__37246 = (i__37223 + (1));
i__37223 = G__37246;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37224),reitit$coercion$spec$iter__37221(cljs.core.chunk_rest(s__37222__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37224),null);
}
} else {
var vec__37228 = cljs.core.first(s__37222__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37228,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37228,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,v,null)], null),reitit$coercion$spec$iter__37221(cljs.core.rest(s__37222__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(parameters);
})())], null):null),(cljs.core.truth_(responses)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("spec-tools.swagger.core","responses","spec-tools.swagger.core/responses",308528333),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(responses),(function (){var iter__5523__auto__ = (function reitit$coercion$spec$iter__37231(s__37232){
return (new cljs.core.LazySeq(null,(function (){
var s__37232__$1 = s__37232;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__37232__$1);
if(temp__5804__auto__){
var s__37232__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37232__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__37232__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__37234 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__37233 = (0);
while(true){
if((i__37233 < size__5522__auto__)){
var vec__37235 = cljs.core._nth(c__5521__auto__,i__37233);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37235,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37235,(1),null);
cljs.core.chunk_append(b__37234,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var $ = response;
var $__$1 = clojure.set.rename_keys($,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1($__$1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3($__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791),((function (i__37233,$,$__$1,vec__37235,k,response,c__5521__auto__,size__5522__auto__,b__37234,s__37232__$2,temp__5804__auto__,G__37220,G__37220__$1,this$__$1,map__37219,map__37219__$1,parameters,responses){
return (function (p1__37211_SHARP_){
return this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,p1__37211_SHARP_,null);
});})(i__37233,$,$__$1,vec__37235,k,response,c__5521__auto__,size__5522__auto__,b__37234,s__37232__$2,temp__5804__auto__,G__37220,G__37220__$1,this$__$1,map__37219,map__37219__$1,parameters,responses))
);
} else {
return $__$1;
}
})()], null));

var G__37249 = (i__37233 + (1));
i__37233 = G__37249;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37234),reitit$coercion$spec$iter__37231(cljs.core.chunk_rest(s__37232__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37234),null);
}
} else {
var vec__37238 = cljs.core.first(s__37232__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37238,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37238,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var $ = response;
var $__$1 = clojure.set.rename_keys($,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1($__$1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3($__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791),((function ($,$__$1,vec__37238,k,response,s__37232__$2,temp__5804__auto__,G__37220,G__37220__$1,this$__$1,map__37219,map__37219__$1,parameters,responses){
return (function (p1__37211_SHARP_){
return this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,p1__37211_SHARP_,null);
});})($,$__$1,vec__37238,k,response,s__37232__$2,temp__5804__auto__,G__37220,G__37220__$1,this$__$1,map__37219,map__37219__$1,parameters,responses))
);
} else {
return $__$1;
}
})()], null),reitit$coercion$spec$iter__37231(cljs.core.rest(s__37232__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(responses);
})())], null):null)], 0)));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't produce Spec apidocs for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(specification)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"specification","specification",22067900),specification,new cljs.core.Keyword(null,"coercion","coercion",904067157),new cljs.core.Keyword(null,"spec","spec",347520401)], null));

}
}));

(reitit.coercion.spec.t_reitit$coercion$spec37215.prototype.reitit$coercion$Coercion$_compile_model$arity$3 = (function (_,model,name){
var self__ = this;
var ___$1 = this;
return reitit.coercion.spec.into_spec(model,name);
}));

(reitit.coercion.spec.t_reitit$coercion$spec37215.prototype.reitit$coercion$Coercion$_open_model$arity$2 = (function (_,spec){
var self__ = this;
var ___$1 = this;
return spec;
}));

(reitit.coercion.spec.t_reitit$coercion$spec37215.prototype.reitit$coercion$Coercion$_encode_error$arity$2 = (function (_,error){
var self__ = this;
var ___$1 = this;
var problems = new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"problems","problems",2097327077).cljs$core$IFn$_invoke$arity$1(error));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.spec.alpha.form)),new cljs.core.Keyword(null,"problems","problems",2097327077),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__37212_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__37212_SHARP_,new cljs.core.Keyword(null,"pred","pred",1927423397),reitit.coercion.spec.stringify_pred);
}),problems));
}));

(reitit.coercion.spec.t_reitit$coercion$spec37215.prototype.reitit$coercion$Coercion$_request_coercer$arity$3 = (function (this$,type,spec){
var self__ = this;
var this$__$1 = this;
var spec__$1 = this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,spec,null);
var map__37241 = (self__.transformers.cljs$core$IFn$_invoke$arity$1 ? self__.transformers.cljs$core$IFn$_invoke$arity$1(type) : self__.transformers.call(null,type));
var map__37241__$1 = cljs.core.__destructure_map(map__37241);
var formats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37241__$1,new cljs.core.Keyword(null,"formats","formats",-1397890976));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37241__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
return (function (value,format){
var temp__5802__auto__ = (function (){var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(formats,format);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var transformer = temp__5802__auto__;
var coerced = spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$3(spec__$1,value,transformer);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,coerced)){
return coerced;
} else {
var transformed = spec_tools.core.conform.cljs$core$IFn$_invoke$arity$3(spec__$1,coerced,transformer);
if(cljs.spec.alpha.invalid_QMARK_(transformed)){
var problems = spec_tools.core.explain_data.cljs$core$IFn$_invoke$arity$3(spec__$1,coerced,transformer);
return reitit.coercion.map__GT_CoercionError(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),spec__$1,new cljs.core.Keyword(null,"problems","problems",2097327077),problems], null));
} else {
return cljs.spec.alpha.unform(spec__$1,transformed);
}
}
} else {
return value;
}
});
}));

(reitit.coercion.spec.t_reitit$coercion$spec37215.prototype.reitit$coercion$Coercion$_response_coercer$arity$2 = (function (this$,spec){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.coerce_response_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.coerce_response_QMARK_.cljs$core$IFn$_invoke$arity$1(spec) : self__.coerce_response_QMARK_.call(null,spec)))){
return this$__$1.reitit$coercion$Coercion$_request_coercer$arity$3(null,new cljs.core.Keyword(null,"response","response",-1068424192),spec);
} else {
return null;
}
}));

(reitit.coercion.spec.t_reitit$coercion$spec37215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__37213","p__37213",135090527,null),new cljs.core.Symbol(null,"map__37214","map__37214",-1399494298,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"transformers","transformers",906329962,null),new cljs.core.Symbol(null,"coerce-response?","coerce-response?",-1529402678,null),new cljs.core.Symbol(null,"meta37216","meta37216",-1543176011,null)], null);
}));

(reitit.coercion.spec.t_reitit$coercion$spec37215.cljs$lang$type = true);

(reitit.coercion.spec.t_reitit$coercion$spec37215.cljs$lang$ctorStr = "reitit.coercion.spec/t_reitit$coercion$spec37215");

(reitit.coercion.spec.t_reitit$coercion$spec37215.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"reitit.coercion.spec/t_reitit$coercion$spec37215");
}));

/**
 * Positional factory function for reitit.coercion.spec/t_reitit$coercion$spec37215.
 */
reitit.coercion.spec.__GT_t_reitit$coercion$spec37215 = (function reitit$coercion$spec$__GT_t_reitit$coercion$spec37215(p__37213,map__37214,opts,transformers,coerce_response_QMARK_,meta37216){
return (new reitit.coercion.spec.t_reitit$coercion$spec37215(p__37213,map__37214,opts,transformers,coerce_response_QMARK_,meta37216));
});


reitit.coercion.spec.create = (function reitit$coercion$spec$create(p__37213){
var map__37214 = p__37213;
var map__37214__$1 = cljs.core.__destructure_map(map__37214);
var opts = map__37214__$1;
var transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37214__$1,new cljs.core.Keyword(null,"transformers","transformers",-734201565));
var coerce_response_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37214__$1,new cljs.core.Keyword(null,"coerce-response?","coerce-response?",1125033091));
return (new reitit.coercion.spec.t_reitit$coercion$spec37215(p__37213,map__37214__$1,opts,transformers,coerce_response_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.coercion","coercion","reitit.coercion/coercion",-866612966)], null)));
});
reitit.coercion.spec.coercion = reitit.coercion.spec.create(reitit.coercion.spec.default_options);

//# sourceMappingURL=reitit.coercion.spec.js.map
