(self.webpackChunkme_mate=self.webpackChunkme_mate||[]).push([[979],{8984:function(e,n,t){var o,r=t(2897).default,u=t(7383).default,a=t(4579).default,l=t(8336).default,i=t(9511).default,c=t(883).default,s=Object.create,f=Object.defineProperty,p=Object.getOwnPropertyDescriptor,d=Object.getOwnPropertyNames,y=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty,h=function(e,n,t,o){if(n&&"object"===typeof n||"function"===typeof n){var r,u=c(d(n));try{var a=function(){var u=r.value;m.call(e,u)||u===t||f(e,u,{get:function(){return n[u]},enumerable:!(o=p(n,u))||o.enumerable})};for(u.s();!(r=u.n()).done;)a()}catch(l){u.e(l)}finally{u.f()}}return e},v=function(e,n,t){return function(e,n,t){n in e?f(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t}(e,"symbol"!==typeof n?n+"":n,t),t},b={};!function(e,n){for(var t in n)f(e,t,{get:n[t],enumerable:!0})}(b,{default:function(){return O}}),e.exports=(o=b,h(f({},"__esModule",{value:!0}),o));var P=function(e,n,t){return t=null!=e?s(y(e)):{},h(!n&&e&&e.__esModule?t:f(t,"default",{value:e,enumerable:!0}),e)}(t(2483)),k=t(4558),g=t(6160),O=function(e){"use strict";function n(){var e;return u(this,n),e=l(this,n,arguments),v(e,"callPlayer",k.callPlayer),v(e,"duration",null),v(e,"currentTime",null),v(e,"fractionLoaded",null),v(e,"mute",(function(){e.setVolume(0)})),v(e,"unmute",(function(){null!==e.props.volume&&e.setVolume(e.props.volume)})),v(e,"ref",(function(n){e.iframe=n})),e}return i(n,e),a(n,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e,n){var t=this;(0,k.getSDK)("https://w.soundcloud.com/player/api.js","SC").then((function(o){if(t.iframe){var u=o.Widget.Events,a=u.PLAY,l=u.PLAY_PROGRESS,i=u.PAUSE,c=u.FINISH,s=u.ERROR;n||(t.player=o.Widget(t.iframe),t.player.bind(a,t.props.onPlay),t.player.bind(i,(function(){t.duration-t.currentTime<.05||t.props.onPause()})),t.player.bind(l,(function(e){t.currentTime=e.currentPosition/1e3,t.fractionLoaded=e.loadedProgress})),t.player.bind(c,(function(){return t.props.onEnded()})),t.player.bind(s,(function(e){return t.props.onError(e)}))),t.player.load(e,r(r({},t.props.config.options),{},{callback:function(){t.player.getDuration((function(e){t.duration=e/1e3,t.props.onReady()}))}}))}}))}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seekTo",1e3*e),n||this.pause()}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",100*e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.fractionLoaded*this.duration}},{key:"render",value:function(){var e={width:"100%",height:"100%",display:this.props.display};return P.default.createElement("iframe",{ref:this.ref,src:"https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(this.props.url)),style:e,frameBorder:0,allow:"autoplay"})}}])}(P.Component);v(O,"displayName","SoundCloud"),v(O,"canPlay",g.canPlay.soundcloud),v(O,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerSoundCloud.7c1ae956.chunk.js.map