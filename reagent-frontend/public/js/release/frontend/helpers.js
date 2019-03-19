// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('frontend.helpers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('jayq.core');
goog.require('clojure.string');
frontend.helpers.find_first = (function frontend$helpers$find_first(fn,coll){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(fn,coll));
});
frontend.helpers.percentage = (function frontend$helpers$percentage(part,total){
return ((100) * (part / total));
});
frontend.helpers.toInt = (function frontend$helpers$toInt(n){
return parseInt(n,(10));
});
frontend.helpers.fromNaN = (function frontend$helpers$fromNaN(n){
if(cljs.core.truth_(isNaN(n))){
return (0);
} else {
return n;
}
});
frontend.helpers.padTime = (function frontend$helpers$padTime(time_component){
if((frontend.helpers.fromNaN(time_component) < (10))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.helpers.fromNaN(frontend.helpers.toInt(time_component)))].join('');
} else {
return frontend.helpers.fromNaN(frontend.helpers.toInt(time_component));
}
});
frontend.helpers.secondsToMinutes = (function frontend$helpers$secondsToMinutes(seconds){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.helpers.padTime(cljs.core.quot(seconds,(60)))),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.helpers.padTime(cljs.core.rem(seconds,(60))))].join('');
});
frontend.helpers.safe_rand_nth = (function frontend$helpers$safe_rand_nth(or,xs){
if(cljs.core.empty_QMARK_(xs)){
return or;
} else {
return cljs.core.rand_nth(xs);
}
});
frontend.helpers.scroll_to = (function frontend$helpers$scroll_to(top){
return jayq.core.anim(jayq.core.$.cljs$core$IFn$_invoke$arity$1("html, body"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,top], null));
});
frontend.helpers.set_scroll = (function frontend$helpers$set_scroll(top){
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(window).scrollTop(top);
});
frontend.helpers.make_audio_url = (function frontend$helpers$make_audio_url(music_post_attrs){
var file_name = cljs.core.cst$kw$file_name.cljs$core$IFn$_invoke$arity$2(music_post_attrs,"");
if(clojure.string.includes_QMARK_(file_name,"http")){
return file_name;
} else {
return ["http://www.echoic.space/music/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(music_post_attrs)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name)].join('');
}
});
