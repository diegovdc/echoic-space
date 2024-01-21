goog.provide('browser.views.music_single');
browser.views.music_single.get_offset_top = (function browser$views$music_single$get_offset_top(id){
return document.getElementById(id).offsetTop;
});
browser.views.music_single.go_to_hash = (function browser$views$music_single$go_to_hash(hash){
if(cljs.core.truth_(hash)){
return browser.helpers.scroll_to(browser.views.music_single.get_offset_top(hash));
} else {
return browser.helpers.set_scroll((0));
}
});
browser.views.music_single.get_bg_img = (function browser$views$music_single$get_bg_img(base_url,post_attrs){
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_url),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(post_attrs)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"backgroundImage","backgroundImage",1109094965).cljs$core$IFn$_invoke$arity$1(post_attrs))].join('');
});
browser.views.music_single.bg_img = (function browser$views$music_single$bg_img(url){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),")"].join('')], null);
});
browser.views.music_single.image = (function browser$views$music_single$image(url,child_node){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"single__img--main",new cljs.core.Keyword(null,"style","style",-496642736),browser.views.music_single.bg_img(url)], null),child_node], null);
});
browser.views.music_single.title = (function browser$views$music_single$title(app_state,post){
var base_url_STAR_ = browser.views.helpers.base_url(app_state);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,browser.views.music_single.get_bg_img(base_url_STAR_,post))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"single__ttl"], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(post)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"single__ttl-container"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"single-ttl",new cljs.core.Keyword(null,"class","class",-2030961996),"single__ttl single__ttl--with-img",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSizes","fontSizes",403327934),"200px"], null),browser.views.music_single.bg_img(browser.views.music_single.get_bg_img(base_url_STAR_,post))], 0))], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(post)], null)], null);

}
});
browser.views.music_single._play_button = (function browser$views$music_single$_play_button(app_state,post_attrs,action){

var playing_this_track_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(browser.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"now-playing","now-playing",1487806653),new cljs.core.Keyword(null,"track_name","track_name",1331132230)], null)),new cljs.core.Keyword(null,"track_name","track_name",1331132230).cljs$core$IFn$_invoke$arity$1(post_attrs));
var should_change_track_QMARK_ = (!(playing_this_track_QMARK_));
var icon = (cljs.core.truth_((function (){var and__5043__auto__ = playing_this_track_QMARK_;
if(and__5043__auto__){
var fexpr__33885 = cljs.core.deref(browser.state.player_state);
return (fexpr__33885.cljs$core$IFn$_invoke$arity$1 ? fexpr__33885.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"is-playing","is-playing",-1699110457)) : fexpr__33885.call(null,new cljs.core.Keyword(null,"is-playing","is-playing",-1699110457)));
} else {
return and__5043__auto__;
}
})())?"fa-pause":"fa-play");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["single__play fa ",icon].join(''),new cljs.core.Keyword(null,"style","style",-496642736),browser.views.music_single.bg_img(browser.views.music_single.get_bg_img(app_state,post_attrs)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(action.cljs$core$IFn$_invoke$arity$2 ? action.cljs$core$IFn$_invoke$arity$2(post_attrs,should_change_track_QMARK_) : action.call(null,post_attrs,should_change_track_QMARK_))], null)], null);
});
browser.views.music_single.play_button = (function browser$views$music_single$play_button(app_state,post_attrs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,(post_attrs.cljs$core$IFn$_invoke$arity$1 ? post_attrs.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"is_video","is_video",-1178543870)) : post_attrs.call(null,new cljs.core.Keyword(null,"is_video","is_video",-1178543870))))){
return browser.views.music_single._play_button(app_state,post_attrs,browser.views.sonos.toggle_play_video);
} else {
return browser.views.music_single._play_button(app_state,post_attrs,browser.views.sonos.toggle_play);

}
});
browser.views.music_single.show_info_cb = (function browser$views$music_single$show_info_cb(local_state){
return (function (){
cljs.core.reset_BANG_(local_state,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(local_state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-info","show-info",-822530028),cljs.core.not((function (){var fexpr__33887 = cljs.core.deref(local_state);
return (fexpr__33887.cljs$core$IFn$_invoke$arity$1 ? fexpr__33887.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"show-info","show-info",-822530028)) : fexpr__33887.call(null,new cljs.core.Keyword(null,"show-info","show-info",-822530028)));
})())], null)], 0)));

return reagent.core.after_render((function (){
console.error("Implement this");

return browser.helpers.set_scroll((0));
}));
});
});
browser.views.music_single.show_info = (function browser$views$music_single$show_info(img_url,local_state){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null);
});
browser.views.music_single.video = (function browser$views$music_single$video(post_attrs){
var youtube_id = new cljs.core.Keyword(null,"youtube_id","youtube_id",1076585092).cljs$core$IFn$_invoke$arity$1(post_attrs);
var start_seconds = new cljs.core.Keyword(null,"startSeconds","startSeconds",837829273).cljs$core$IFn$_invoke$arity$1(post_attrs);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"player"], null),(cljs.core.truth_(youtube_id)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"allowfullscreen","allowfullscreen",-1595290361),"allowfullscreen",new cljs.core.Keyword(null,"allow","allow",-1857325745),"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",new cljs.core.Keyword(null,"frameborder","frameborder",-7707960),"0",new cljs.core.Keyword(null,"title","title",636505583),"YouTube video player",new cljs.core.Keyword(null,"src","src",-1651076051),["https://www.youtube.com/embed/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(youtube_id),(cljs.core.truth_(start_seconds)?["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_seconds)].join(''):null)].join(''),new cljs.core.Keyword(null,"height","height",1025178622),"315",new cljs.core.Keyword(null,"width","width",-384071477),"560"], null)], null):null)], null);
});
browser.views.music_single.print_post = (function browser$views$music_single$print_post(app_state,post,local_state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,post)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"not found"], null);
} else {
var post_attrs = new cljs.core.Keyword(null,"attributes","attributes",-74013604).cljs$core$IFn$_invoke$arity$1(post);
var img_url = browser.views.music_single.get_bg_img(browser.views.helpers.base_url(app_state),post_attrs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),browser.views.helpers.page_container_bg_img(["single--",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(post_attrs))].join(''),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),""], null),browser.views.music_single.image(img_url,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),browser.views.music_single.title(app_state,post_attrs),browser.views.music_single.play_button(app_state,post_attrs),browser.views.music_single.show_info(img_url,local_state)], null)),(cljs.core.truth_(new cljs.core.Keyword(null,"is_video","is_video",-1178543870).cljs$core$IFn$_invoke$arity$1(post_attrs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"single__video-player-container",new cljs.core.Keyword(null,"id","id",-1388402092),"single__video-player-container"], null),browser.views.music_single.video(post_attrs)], null):null)], null),(cljs.core.truth_((function (){var and__5043__auto__ = (!(cljs.core.empty_QMARK_((post.cljs$core$IFn$_invoke$arity$1 ? post.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",-2049205669)) : post.call(null,new cljs.core.Keyword(null,"body","body",-2049205669))))));
if(and__5043__auto__){
var fexpr__33894 = cljs.core.deref(local_state);
return (fexpr__33894.cljs$core$IFn$_invoke$arity$1 ? fexpr__33894.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"show-info","show-info",-822530028)) : fexpr__33894.call(null,new cljs.core.Keyword(null,"show-info","show-info",-822530028)));
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"markdown-body",new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(post)], null)], null)], null)], null):null))], null);

}
});
browser.views.music_single.find_post = (function browser$views$music_single$find_post(tracks,slug){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__33895_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attributes","attributes",-74013604).cljs$core$IFn$_invoke$arity$1(p1__33895_SHARP_)),slug);
}),tracks));
});
browser.views.music_single.main = (function browser$views$music_single$main(app_state,single_slug,hash){
var local_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-info","show-info",-822530028),true], null));
var entries = browser.views.helpers.get_entries(app_state);
var post = browser.views.music_single.find_post(entries,single_slug);
var printed_post = (function (){
return browser.views.music_single.print_post(app_state,post,local_state);
});
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),printed_post,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return browser.views.music_single.go_to_hash(hash);
})], null));
});

//# sourceMappingURL=browser.views.music_single.js.map
