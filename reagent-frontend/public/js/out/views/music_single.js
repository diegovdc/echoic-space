// Compiled by ClojureScript 1.10.312 {}
goog.provide('views.music_single');
goog.require('cljs.core');
goog.require('views.helpers');
goog.require('frontend.helpers');
goog.require('views.sonos');
goog.require('frontend.state');
goog.require('goog.events');
goog.require('reagent.core');
goog.require('jayq.core');
goog.require('oops.core');
views.music_single.log = deps.log;
views.music_single.is_mobile_or_tablet = (function (){var target_obj_49195 = deps;
var _STAR_runtime_state_STAR_49197 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_49195,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_49196 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_49195,(0),"isMobileOrTablet",true,true,false))?(target_obj_49195["isMobileOrTablet"]):null);
return next_obj_49196;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_49197;
}})().call(null);
views.music_single.get_offset_top = (function views$music_single$get_offset_top(id){
return (function (p1__49198_SHARP_){
return (p1__49198_SHARP_ - (26));
}).call(null,new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(jayq.core.offset.call(null,jayq.core.$.call(null,["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')))));
});
views.music_single.go_to_hash = (function views$music_single$go_to_hash(hash){
if(cljs.core.truth_(hash)){
return frontend.helpers.scroll_to.call(null,views.music_single.get_offset_top.call(null,hash));
} else {
return frontend.helpers.set_scroll.call(null,(0));
}
});
views.music_single.get_bg_img = (function views$music_single$get_bg_img(post_attrs){
return ["/music/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(post_attrs)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"backgroundImage","backgroundImage",1109094965).cljs$core$IFn$_invoke$arity$1(post_attrs))].join('');
});
views.music_single.bg_img = (function views$music_single$bg_img(url){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),")"].join('')], null);
});
views.music_single.image = (function views$music_single$image(url,child_node){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"single__img--main",new cljs.core.Keyword(null,"style","style",-496642736),views.music_single.bg_img.call(null,url)], null),child_node], null);
});
views.music_single.title = (function views$music_single$title(post){
if(cljs.core._EQ_.call(null,null,views.music_single.get_bg_img.call(null,post))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"single__ttl"], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(post)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"single__ttl-container"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"single-ttl",new cljs.core.Keyword(null,"class","class",-2030961996),"single__ttl single__ttl--with-img",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSizes","fontSizes",403327934),"200px"], null),views.music_single.bg_img.call(null,views.music_single.get_bg_img.call(null,post)))], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(post)], null)], null);

}
});
views.music_single._play_button = (function views$music_single$_play_button(post_attrs,action){

var playing_this_track_QMARK_ = cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,frontend.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"now-playing","now-playing",1487806653),new cljs.core.Keyword(null,"track_name","track_name",1331132230)], null)),new cljs.core.Keyword(null,"track_name","track_name",1331132230).cljs$core$IFn$_invoke$arity$1(post_attrs));
var should_change_track_QMARK_ = !(playing_this_track_QMARK_);
var icon = (cljs.core.truth_((function (){var and__3925__auto__ = playing_this_track_QMARK_;
if(and__3925__auto__){
return cljs.core.deref.call(null,frontend.state.player_state).call(null,new cljs.core.Keyword(null,"is-playing","is-playing",-1699110457));
} else {
return and__3925__auto__;
}
})())?"fa-pause":"fa-play");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["single__play fa ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),views.music_single.bg_img.call(null,views.music_single.get_bg_img.call(null,post_attrs)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),action.call(null,post_attrs,should_change_track_QMARK_)], null)], null);
});
views.music_single.toggle_play_video = (function views$music_single$toggle_play_video(post_attrs){
var onPlayerReady = (function (e){
console.log("event",e);

console.log("target",e.target);

e.target.playVideo();

e.target.a.webkitRequestFullScreen();

return frontend.helpers.scroll_to.call(null,views.music_single.get_offset_top.call(null,"single__video-player-container"));
});
return ((function (onPlayerReady){
return (function (){
var player = (new YT.Player("player",(function (){var obj49200 = {"videoId":new cljs.core.Keyword(null,"youtube_id","youtube_id",1076585092).cljs$core$IFn$_invoke$arity$1(post_attrs),"events":(function (){var obj49202 = {"onReady":onPlayerReady};
return obj49202;
})()};
return obj49200;
})()));
return null;
});
;})(onPlayerReady))
});
views.music_single.play_button = (function views$music_single$play_button(post_attrs){
if(cljs.core._EQ_.call(null,true,post_attrs.call(null,new cljs.core.Keyword(null,"is_video","is_video",-1178543870)))){
return views.music_single._play_button.call(null,post_attrs,views.music_single.toggle_play_video);
} else {
return views.music_single._play_button.call(null,post_attrs,views.sonos.toggle_play);

}
});
views.music_single.show_info_cb = (function views$music_single$show_info_cb(local_state){
return (function (){
cljs.core.reset_BANG_.call(null,local_state,cljs.core.merge.call(null,cljs.core.deref.call(null,local_state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-info","show-info",-822530028),cljs.core.not.call(null,cljs.core.deref.call(null,local_state).call(null,new cljs.core.Keyword(null,"show-info","show-info",-822530028)))], null)));

return reagent.core.after_render.call(null,(function (){
return frontend.helpers.scroll_to.call(null,((cljs.core.not.call(null,cljs.core.deref.call(null,local_state).call(null,new cljs.core.Keyword(null,"show-info","show-info",-822530028))))?(0):(function (p1__49203_SHARP_){
return (p1__49203_SHARP_ - (26));
}).call(null,new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(jayq.core.offset.call(null,jayq.core.$.call(null,".markdown-body"))))));
}));
});
});
views.music_single.show_info = (function views$music_single$show_info(img_url,local_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"single__show-info",new cljs.core.Keyword(null,"style","style",-496642736),views.music_single.bg_img.call(null,img_url),new cljs.core.Keyword(null,"on-click","on-click",1632826543),views.music_single.show_info_cb.call(null,local_state)], null),"..."], null);
});
views.music_single.video = (function views$music_single$video(post_attrs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"player"], null)], null);
});
views.music_single.mobile_audio_player = (function views$music_single$mobile_audio_player(post_attrs){
var url = frontend.helpers.make_audio_url.call(null,post_attrs);
if(cljs.core.truth_((function (){var and__3925__auto__ = views.music_single.is_mobile_or_tablet;
if(cljs.core.truth_(and__3925__auto__)){
return !((url == null));
} else {
return and__3925__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"markdown-body"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Escuchar:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"controls","controls",1340701452),"controls",new cljs.core.Keyword(null,"src","src",-1651076051),url,new cljs.core.Keyword(null,"preload","preload",1646824722),"metadata",new cljs.core.Keyword(null,"encType","encType",1733182873),"audio/mpeg",new cljs.core.Keyword(null,"autoPlay","autoPlay",-561263241),false], null)], null)], null);
} else {
return null;
}
});
views.music_single.print_post = (function views$music_single$print_post(post,local_state){
if(cljs.core._EQ_.call(null,null,post)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"not found"], null);
} else {
var post_attrs = new cljs.core.Keyword(null,"attributes","attributes",-74013604).cljs$core$IFn$_invoke$arity$1(post);
var img_url = views.music_single.get_bg_img.call(null,post_attrs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),views.helpers.page_container_bg_img.call(null,["single--",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(post_attrs))].join(''),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),""], null),views.music_single.image.call(null,img_url,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),views.music_single.title.call(null,post_attrs),((cljs.core.not.call(null,views.music_single.is_mobile_or_tablet))?views.music_single.play_button.call(null,post_attrs):null),views.music_single.show_info.call(null,img_url,local_state)], null)),(cljs.core.truth_(new cljs.core.Keyword(null,"is_video","is_video",-1178543870).cljs$core$IFn$_invoke$arity$1(post_attrs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"single__video-player-container",new cljs.core.Keyword(null,"id","id",-1388402092),"single__video-player-container"], null),views.music_single.video.call(null,post_attrs)], null):null)], null),(cljs.core.truth_(cljs.core.deref.call(null,local_state).call(null,new cljs.core.Keyword(null,"show-info","show-info",-822530028)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"markdown-body",new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(post)], null)], null)], null),views.music_single.mobile_audio_player.call(null,post_attrs)], null):null))], null);

}
});
views.music_single.find_post = (function views$music_single$find_post(tracks,slug){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__49204_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attributes","attributes",-74013604).cljs$core$IFn$_invoke$arity$1(p1__49204_SHARP_)),slug);
}),tracks));
});
views.music_single.main = (function views$music_single$main(singleSlug,hash){
var local_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-info","show-info",-822530028),true], null));
var tracks = new cljs.core.Keyword(null,"music","music",-1063514396).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,frontend.state.app_state));
var post = views.music_single.find_post.call(null,tracks,singleSlug);
var printed_post = ((function (local_state,tracks,post){
return (function (){
return views.music_single.print_post.call(null,post,local_state);
});})(local_state,tracks,post))
;
return cljs.core.with_meta.call(null,printed_post,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (local_state,tracks,post,printed_post){
return (function (){
return views.music_single.go_to_hash.call(null,hash);
});})(local_state,tracks,post,printed_post))
], null));
});

//# sourceMappingURL=music_single.js.map?rel=1552956588739
