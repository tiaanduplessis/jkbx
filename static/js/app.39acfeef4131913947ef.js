webpackJsonp([1],{"7LVR":function(t,e){},Azak:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i=a("H5Ot"),r=a.n(i),n=a("1mcD"),c=a.n(n),o=a("/ocq"),l=a("Sazm"),u=a("njrj"),d=a.n(u),p={name:"SplashPage",data:function(){return{msg:"Welcome to Your Vue.js App",typer:void 0,playlist:""}},mounted:function(){this.typer=new d.a("#playlist",{strings:["super-emo-songs","bed-weather","happy-birthday-jeff","the-cake-is-a-lie"],typeSpeed:50,loop:!0,attr:"placeholder",bindInputFocusEvents:!0})},methods:{clearText:function(){this.typer.stop(),this.playlist=""},getTurnt:function(){this.$router.push({name:"Party",params:{id:this.playlist}})}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero is-fullheight"},[a("a",{staticClass:"github-corner",attrs:{href:"https://github.com/kendaganio/jkbx","aria-label":"View source on Github"}},[a("svg",{staticStyle:{fill:"#fff",color:"#151513",position:"absolute",top:"0",border:"0",right:"0"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[a("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),a("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),a("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])]),t._v(" "),a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container has-text-centered"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.getTurnt(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.playlist,expression:"playlist"}],staticClass:"input is-large",attrs:{type:"text",id:"playlist"},domProps:{value:t.playlist},on:{input:function(e){e.target.composing||(t.playlist=e.target.value)}}}),t._v(" "),a("p",[t._v(" 🔥 Hit enter to start the party")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"title"},[e("span",{staticClass:"fancy-underline"},[this._v("\n          Queue it up!\n        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"subtitle"},[this._v("\n        jkbx is a simple collaborative\n        "),e("br"),this._v("YouTube playlist for all.\n      ")])}]};var f=a("VU/8")(p,h,!1,function(t){a("lwjI")},"data-v-4c2d3973",null).exports,v=a("Dd8w"),k=a.n(v),m=a("thjQ"),y=a.n(m),b=a("woOf"),_=a.n(b),C={name:"TrackMedia",props:["trackData","hasRequeue"],computed:{youtubeLink:function(){return"https://youtube.com/watch?v="+this.trackData.videoId}},methods:{removeTrack:function(){this.$emit("remove-track",this.trackData)},requeue:function(){var t=_()({},this.trackData);delete t[".key"],this.$emit("requeue-track",t)}}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{key:t.trackData.key,staticClass:"box media"},[a("figure",{staticClass:"media-left"},[a("img",{attrs:{src:t.trackData.img}})]),t._v(" "),a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[t._v("\n      "+t._s(t.trackData.title)+"\n      "),a("a",{attrs:{href:t.youtubeLink,title:"Open video in new tab",target:"_blank"}},[a("i",{staticClass:"icon ion-android-open"})]),t._v(" "),a("nav",{staticClass:"level is-mobile"},[a("div",{staticClass:"level-left"},[a("span",{staticClass:"tag level-item"},[t._v("\n            "+t._s(t.trackData.addedBy)+"\n          ")]),t._v(" "),a("span",{staticClass:"level-item"},["true"===t.hasRequeue?a("a",{on:{click:t.requeue}},[a("i",{staticClass:"icon ion-refresh"}),t._v(" Requeue\n            ")]):t._e()])])])])]),t._v(" "),a("div",{staticClass:"media-right"},[a("a",{staticClass:"delete",on:{click:t.removeTrack}})])])},staticRenderFns:[]};var T={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"card"},[t.trackData?a("div",{staticClass:"card-content"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("img",{staticClass:"level-item",attrs:{src:t.trackData.img}}),t._v(" "),a("div",{staticClass:"level-item"},[a("strong",{staticClass:"track-title"},[t._v(t._s(t.trackData.title))])])])])]):a("div",{staticClass:"card-content"},[t._v("\n      No playing track.\n    ")]),t._v(" "),a("footer",{staticClass:"card-footer"},[a("div",{staticClass:"card-footer-item"},[a("a",{staticClass:"button is-link is-outlined",on:{click:function(e){t.action("pause")}}},[a("i",{staticClass:"ion-ios-pause"})])]),t._v(" "),a("div",{staticClass:"card-footer-item"},[a("a",{staticClass:"button is-link is-outlined",on:{click:function(e){t.action("play")}}},[a("i",{staticClass:"ion-ios-play"})])]),t._v(" "),a("div",{staticClass:"card-footer-item"},[a("a",{staticClass:"button is-link is-outlined",on:{click:function(e){t.action("skip")}}},[a("i",{staticClass:"ion-ios-skipforward"})])])])])])},staticRenderFns:[]};var w={name:"TrackSearch",data:function(){return{searchText:"",searchResults:[]}},computed:{dropdownClass:function(){return{dropdown:!0,"is-active":this.searchResults.length>0}}},methods:{searchTrack:function(){var t=this;this.searchText.length>3?window.gapi.client.youtube.search.list({q:this.searchText,part:"snippet",type:"video"}).execute(function(e){t.searchResults=e.items}):this.searchResults=[]},addTrack:function(t){var e={videoId:t.id.videoId,title:t.snippet.title,img:t.snippet.thumbnails.default.url};this.$emit("add-track",e),this.searchResults=[],this.searchText=""}}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.dropdownClass},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"input is-fullwidth",attrs:{type:"text",placeholder:"Find your favorite artist or song..."},domProps:{value:t.searchText},on:{keyup:t.searchTrack,input:function(e){e.target.composing||(t.searchText=e.target.value)}}}),t._v(" "),a("div",{staticClass:"dropdown-menu"},[a("div",{staticClass:"dropdown-content"},t._l(t.searchResults,function(e){return a("div",{key:e.id.videoId,staticClass:"dropdown-item",on:{click:function(a){t.addTrack(e)}}},[a("img",{attrs:{src:e.snippet.thumbnails.default.url}}),t._v("\n        "+t._s(e.snippet.title)+" "),a("strong",[t._v(" - "+t._s(e.snippet.channelTitle))])])}))])])},staticRenderFns:[]};var D={name:"Party",props:["firebaseDb"],data:function(){return{user:localStorage.jkbxUser}},firebase:function(){return{tracks:this.firebaseDb.ref("/party/"+this.$route.params.id+"/tracks"),playedTracks:this.firebaseDb.ref("/party/"+this.$route.params.id+"/playedTracks"),controls:{source:this.firebaseDb.ref("/party/"+this.$route.params.id+"/controls"),asObject:!0}}},computed:{currentTrack:function(){return this.tracks.length>0&&this.tracks[0].playing?this.tracks[0]:void 0},playerLink:function(){return"#/party/"+this.$route.params.id+"/player"}},methods:{removeTrack:function(t){this.$firebaseRefs.tracks.child(t[".key"]).remove()},removePlayedTrack:function(t){this.$firebaseRefs.playedTracks.child(t[".key"]).remove()},queueTrack:function(t){var e=k()({},t,{playing:!1,addedBy:this.user});this.$firebaseRefs.tracks.push(e)},trackAction:function(t){this.$firebaseRefs.controls.set({action:t,time:Date.now()})}},created:function(){var t=this;void 0!==localStorage.jkbxUser&&"null"!==localStorage.jkbxUser||y()({icon:"info",title:"Hey stranger!",text:"Introduce yourself. :)",closeOnEsc:!1,closeOnClickOutside:!1,content:{element:"input",attributes:{placeholder:"Bob is fine."}}}).then(function(e){localStorage.jkbxUser=e,t.user=e})},components:{TrackMedia:a("VU/8")(C,g,!1,function(t){a("OjwB")},"data-v-099d9741",null).exports,TrackControls:a("VU/8")({name:"TrackControls",props:["trackData"],methods:{action:function(t){this.$emit("track-action",t)}}},T,!1,function(t){a("Azak")},"data-v-3748ad9a",null).exports,TrackSearch:a("VU/8")(w,x,!1,function(t){a("bKkp")},"data-v-589d5783",null).exports}},R={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("h1",[t._v("\n    🎉 "+t._s(t.$route.params.id)+"\n  ")]),t._v(" "),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-one-half"},[a("h2",[t._v("Hi "+t._s(t.user)+"!  Search for a track to get the party started.")]),t._v(" "),a("track-search",{on:{"add-track":t.queueTrack}}),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),0===t.tracks.length?a("div",[a("h1",[t._v("Nada. Add a track, mate!")])]):a("div",[a("h2",[t._v("Up Next")]),t._v(" "),t._l(t.tracks,function(e){return a("div",{key:e.key},[e.playing?t._e():a("track-media",{attrs:{trackData:e,hasRequeue:"false"},on:{"remove-track":t.removeTrack}})],1)})],2)],1),t._v(" "),a("div",{staticClass:"column is-one-half"},[a("h2",[t._v("Now Playing")]),t._v(" "),a("track-controls",{attrs:{trackData:t.currentTrack},on:{"track-action":t.trackAction}}),t._v(" "),a("br"),t._v(" "),a("a",{staticClass:"button is-primary is-outlined small-text full-width",attrs:{href:t.playerLink,target:"_blank"}},[t._v("\n        Pop-out youtube player\n        "),a("i",{staticClass:"icon ion-forward"})]),t._v(" "),0!==t.playedTracks.length?a("div",[a("h2",[t._v("Played Tracks")]),t._v(" "),t._l(t.playedTracks,function(e){return a("div",{key:e.key},[a("track-media",{attrs:{trackData:e,hasRequeue:"true"},on:{"remove-track":t.removePlayedTrack,"requeue-track":t.queueTrack}})],1)})],2):t._e()],1)])])},staticRenderFns:[]};var $=a("VU/8")(D,R,!1,function(t){a("7LVR")},"data-v-c6cdd928",null).exports,j={name:"Player",props:["firebaseDb"],data:function(){return{videoId:"",controls:{},playerVars:{autoplay:1},player:void 0}},computed:{playerHeight:function(){return window.innerHeight},playerWidth:function(){return window.innerWidth}},firebase:function(){return{tracks:{source:this.firebaseDb.ref("/party/"+this.$route.params.id+"/tracks"),readyCallback:function(){this.queueTrack(this.firstTrack())}},playedTracks:this.firebaseDb.ref("/party/"+this.$route.params.id+"/playedTracks"),controls:{source:this.firebaseDb.ref("/party/"+this.$route.params.id+"/controls"),asObject:!0}}},watch:{controls:function(t){switch(t.action){case"pause":this.player.pauseVideo();break;case"play":this.player.playVideo();break;case"skip":this.player.seekTo(this.player.getDuration())}}},methods:{ready:function(t){this.player=t},ended:function(){var t=this.firstTrack();this.$firebaseRefs.playedTracks.push(this.stripKey(t)),this.$firebaseRefs.tracks.child(t[".key"]).remove(),this.queueTrack(this.firstTrack())},firstTrack:function(){return this.tracks[0]},stripKey:function(t){var e=k()({},t);return delete e[".key"],e},updateTrack:function(t,e){this.$firebaseRefs.tracks.child(t).set(e)},queueTrack:function(t){this.videoId=t.videoId;var e=k()({},this.stripKey(t),{playing:!0});this.updateTrack(t[".key"],e),this.player.playVideo()}}},q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("youtube",{attrs:{"video-id":this.videoId,width:this.playerWidth,height:this.playerHeight,"player-vars":this.playerVars},on:{ready:this.ready,ended:this.ended}})],1)},staticRenderFns:[]};var P=a("VU/8")(j,q,!1,function(t){a("de4f")},"data-v-4e58c4bc",null).exports;s.a.use(o.a),s.a.use(c.a);var V=l.initializeApp({databaseURL:"https://jkbx.firebaseio.com"}).database(),L=new o.a({routes:[{path:"/",name:"SplashPage",component:f},{path:"/party/:id",name:"Party",component:$,props:{firebaseDb:V}},{path:"/party/:id/player",name:"Player",component:P,props:{firebaseDb:V}}]}),S={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]};var U=a("VU/8")({name:"App"},S,!1,function(t){a("RZ2P")},null,null).exports;s.a.config.productionTip=!1,s.a.use(r.a),new s.a({el:"#jkbx-app",router:L,components:{App:U},template:"<App/>"})},OjwB:function(t,e){},RZ2P:function(t,e){},bKkp:function(t,e){},de4f:function(t,e){},lwjI:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.39acfeef4131913947ef.js.map