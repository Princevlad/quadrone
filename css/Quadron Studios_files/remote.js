(function(g){var window=this;var tza=function(a,b){var c=[];g.si(b,function(a){try{var b=g.ED.prototype.o.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.t(b)?g.DD(b)&&c.push(a):c.push(a)},a);
return c},uza=function(a,b){var c=tza(a,b);
(0,g.H)(c,function(a){g.ED.prototype.remove.call(this,a)},a)},vza=function(){var a=g.nH;
uza(a,a.g.Xd(!0))},Q7=function(a,b){g.D0.call(this,g.U("YTP_MDX_TITLE"),0,a,b);
this.U=a;this.F={};this.P(a,"onMdxReceiversChange",this.I);this.P(a,"presentingplayerstatechange",this.I);this.I()},wza=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},xza=function(a,b){var c=new window.XMLHttpRequest;
c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(!0)};
c.onerror=function(){b(!1)};
try{c.open("GET",a,!0),c.send()}catch(d){b(!1)}},R7=function(){var a=wza();
a&&a(!1,"No cast extension found")},S7=function(a,b,c){var d=window.document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(window.document.head||window.document.documentElement).appendChild(d)},T7=function(a){if(a>=g.jsa.length)R7();
else{var b=g.jsa[a],c="chrome-extension://"+b+g.gsa;0<=g.$1.indexOf(b)?xza(c,function(d){d?(window.chrome.cast=window.chrome.cast||{},window.chrome.cast.extensionId=b,S7(c,R7)):T7(a+1)}):S7(c,function(){T7(a+1)})}},U7=function(a){return 0<=window.navigator.userAgent.indexOf(a)},yza=function(){if(g.hsa){var a=2,b=wza(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;S7("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",R7,c)}},zza=function(){if(U7("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
if(a){yza();a({command:"cast.sender.init"});return}}if(!window.chrome||U7("Edge"))R7();else if(yza(),U7("Android")&&U7("Chrome/")&&window.navigator.presentation){a="";var b=g.Ph();55<=b?a="55":50<=b&&(a="50");S7("//www.gstatic.com/eureka/clank"+a+g.gsa,R7)}else T7(0)},Aza=function(a){g.GG[a]&&(a=g.GG[a],(0,g.H)(a,function(a){g.EG[a]&&delete g.EG[a]}),a.length=0)},Bza=function(a){var b=g.DG();
if(b)if(b.clear(a),a)Aza(a);else for(var c in g.GG)Aza(c)},Cza=function(a){this.port=this.domain="";
this.g="/api/lounge";this.o=!0;a=a||window.document.location.href;var b=g.Ig(a)||"";b&&(this.port=":"+b);this.domain=g.Hg(a)||"";a=g.Kb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Za(a,"10.0")&&(this.o=!1))},Dza=function(a){return(0,g.J)(a,function(a){return{key:a.id,
name:a.name}})},Eza=function(){var a=window.document.createElement("a");
g.Yc(a,"https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.$a(a)},Fza=function(a,b){var c=g.Dd("SCRIPT");
c.id=a;c.onload=function(){b&&(0,window.setTimeout)(b,0)};
c.onreadystatechange=function(){switch(c.readyState){case "loaded":case "complete":c.onload()}};
g.Zc(c,g.de("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"));var d=window.document.getElementsByTagName("head")[0]||window.document.body;d.insertBefore(c,d.firstChild);return c},Gza=function(){var a=Eza(),b=window.document.getElementById(a),c=b&&g.TF(b,"loaded");
c||b&&!c||(b=Fza(a,function(){g.TF(b,"loaded")||(g.UF(b,"loaded","true"),g.JG(a),g.VE(g.Ga(Bza,a),0))}))},Hza=function(){var a=0<=g.Kb.search(/\ (CrMo|Chrome|CriOS)\//);
return g.qF||a},V7=function(a){g.DH("cloudview",a)},W7=function(a){g.ua("yt.mdx.remote.cloudview.initializing_",a,void 0)},X7=function(){return g.x("yt.mdx.remote.cloudview.instance_")},Iza=function(a,b,c,d){var e=!1;
X7()||(a=new g.EI(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(a){g.pH("yt-remote-cast-available",a);g.LG("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){V7("onReceiverSelected: "+a.friendlyName);
g.pH("yt-remote-cast-receiver",a);g.LG("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){V7("onReceiverResumed: "+a.friendlyName);
g.pH("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){V7("onSessionChange: "+g.LH(a));
a||g.rH("yt-remote-cast-receiver");g.LG("yt-remote-cast2-session-change",a)}),g.ua("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
V7("cloudview.createSingleton_: "+e);return e},Jza=function(a){V7("setApiReady_ "+a);
g.ua("yt.mdx.remote.cloudview.apiReady_",a,void 0)},Kza=function(){V7("dispose");
var a=X7();a&&a.dispose();g.ua("yt.mdx.remote.cloudview.instance_",null,void 0);Jza(!1);g.IG(Y7);Y7.length=0},Z7=function(){return!!g.qH("yt-remote-cast-installed")},Lza=function(){var a=g.qH("yt-remote-cast-receiver");
return a?a.friendlyName:null},Mza=function(){V7("clearCurrentReceiver");
g.rH("yt-remote-cast-receiver")},$7=function(a){g.DH("cloudview",a)},Nza=function(){return Z7()?X7()?X7().getCastSession():($7("getCastSelector: Cast is not initialized."),null):($7("getCastSelector: Cast API is not installed!"),null)},a8=function(){return!!g.x("yt.mdx.remote.cloudview.apiReady_")},b8=function(){Z7()?X7()?a8()?(V7("Requesting cast selector."),X7().requestSession()):(V7("Wait for cast API to be ready to request the session."),Y7.push(g.HG("yt-remote-cast2-api-ready",b8))):$7("requestCastSelector: Cast is not initialized."):
$7("requestCastSelector: Cast API is not installed!")},c8=function(a,b){a8()?X7().setConnectedScreenStatus(a,b):$7("setConnectedScreenStatus called before ready.")},d8=function(a){V7("setCastInstalled_ "+a);
g.pH("yt-remote-cast-installed",a)},Oza=function(a,b){X7().init(a,b)},Pza=function(a,b){d8(!0);
W7(!1);Oza(a,function(a){a?(Jza(!0),g.JG("yt-remote-cast2-api-ready")):($7("Failed to initialize cast API."),d8(!1),g.rH("yt-remote-cast-available"),g.rH("yt-remote-cast-receiver"),Kza());b(a)})},Qza=function(a,b,c,d,e,f,k){Hza()?Iza(b,e,f,k)&&(W7(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?Pza(a,c):(window.__onGCastApiAvailable=function(b,d){b?Pza(a,c):($7("Failed to load cast API: "+d),d8(!1),W7(!1),g.rH("yt-remote-cast-available"),g.rH("yt-remote-cast-receiver"),Kza(),
c(!1))},d?window.spf?window.spf.script.load("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):Gza():zza())):V7("Cannot initialize because not running Chrome")},f8=function(a,b){g.uG.call(this);
this.g=0;this.B=a;this.D=[];this.C=new g.SB;this.A=this.o=null;this.I=(0,g.z)(this.aP,this);this.F=(0,g.z)(this.Bl,this);this.G=(0,g.z)(this.ZO,this);this.J=(0,g.z)(this.nP,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Ju,this),Rza(this))):c=3;0!=c&&(b?this.Ju(c):g.VE((0,g.z)(function(){this.Ju(c)},this),0));
var d=Nza();d&&e8(this,d);this.subscribe("yt-remote-cast2-session-change",this.J)},g8=function(a){return new g.KI(a.B.getPlayerContextData())},Sza=function(a,b,c,d,e){var f=g8(a),k=e||f.listId;
d=d||0;var l={videoId:b,currentIndex:d};g.OI(f,b,d);g.t(c)&&(g.MI(f,c),l.currentTime=c);g.t(k)&&(l.listId=k);h8(a,"setPlaylist",l);e||i8(a,f)},Rza=function(a){(0,g.H)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.D.push(this.B.subscribe(a,g.Ga(this.pR,a),this))},a)},Tza=function(a){(0,g.H)(a.D,function(a){this.B.unsubscribeByKey(a)},a);
a.D.length=0},j8=function(a,b){50>a.C.Kc()&&g.UB(a.C,b)},k8=function(a,b,c){var d=g8(a);
g.MI(d,c);-1E3!=d.g&&(d.g=b);i8(a,d)},h8=function(a,b,c){a.B.sendMessage(b,c)},i8=function(a,b){Tza(a);
a.B.setPlayerContextData(g.PI(b));Rza(a)},e8=function(a,b){a.A&&(a.A.removeUpdateListener(a.I),a.A.removeMediaListener(a.F),a.Bl(null));
a.A=b;a.A&&(l8("Setting cast session: "+a.A.sessionId),a.A.addUpdateListener(a.I),a.A.addMediaListener(a.F),a.A.media.length&&a.Bl(a.A.media[0]))},Uza=function(a){var b=a.o.media,c=a.o.customData;
if(b&&c){var d=g8(a);b.contentId!=d.videoId&&l8("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.g=c.playerState;g.MI(d,a.o.getEstimatedTime());i8(a,d)}else l8("No cast media video. Ignoring state update.")},l8=function(a){g.DH("CP",a)},m8=function(a,b,c){return(0,g.z)(function(a){this.bc("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.bc("Retrying "+b+" using MDx browser channel."),h8(this,b,c))},a)},n8=function(a){g.QH.call(this,"ScreenServiceProxy");
this.ed=a;this.o=[];this.o.push(this.ed.$_s("screenChange",(0,g.z)(this.HU,this)));this.o.push(this.ed.$_s("onlineScreenChange",(0,g.z)(this.WQ,this)))},o8=function(){return g.x("yt.mdx.remote.currentScreenId_")},p8=function(a){g.DH("remote",a)},q8=function(a){g.ua("yt.mdx.remote.connectData_",a,void 0)},r8=function(){return g.x("yt.mdx.remote.channelParams_")||{}},Vza=function(){var a=r8();
if(g.$b(a)){a=g.WH();var b=g.qH("yt-remote-session-name")||"",c=g.qH("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,"mdx-version":3};g.ua("yt.mdx.remote.channelParams_",a,void 0)}},Wza=function(a){a?(g.pH("yt-remote-session-app",a.app),g.pH("yt-remote-session-name",a.name)):(g.rH("yt-remote-session-app"),g.rH("yt-remote-session-name"));
g.ua("yt.mdx.remote.channelParams_",a,void 0)},s8=function(){return g.x("yt.mdx.remote.connection_")},t8=function(){var a=s8();
return!!a&&3!=a.getProxyState()},Xza=function(){return g.x("yt.mdx.remote.connectData_")},v8=function(){if(!u8){var a=g.x("yt.mdx.remote.screenService_");
u8=a?new n8(a):null}return u8},w8=function(){var a=g.XH();
if(!a)return null;var b=v8().fe();return g.PH(b,a)},x8=function(){var a=o8();
if(!a)return null;var b=v8().fe();return g.PH(b,a)},Yza=function(){var a=v8().ed.$_gos();
var b=x8();b&&s8()&&(g.OH(a,b)||a.push(b));return Dza(a)},Zza=function(){var a=Yza(),b=x8();
b||(b=w8());return g.gb(a,function(a){return b&&g.IH(b,a.key)?!0:!1})},y8=function(){var a=Zza();
!a&&Z7()&&Lza()&&(a={key:"cast-selector-receiver",name:Lza()});return a},$za=function(){var a=Yza();
Z7()&&g.qH("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},aAa=function(a){g.ua("yt.mdx.remote.currentScreenId_",a,void 0)},A8=function(a){var b=s8();
q8(null);a||aAa("");g.ua("yt.mdx.remote.connection_",a,void 0);z8&&((0,g.H)(z8,function(b){b(a)}),z8.length=0);
b&&!a?g.LG("yt-remote-connection-change",!1):!b&&a&&g.LG("yt-remote-connection-change",!0)},C8=function(a,b){o8();
x8()&&x8();aAa(a.id);var c=new g.VI(B8,a,r8());c.connect(b,Xza());c.subscribe("beforeDisconnect",function(a){g.LG("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){s8()&&(s8(),A8(null))});
A8(c)},bAa=function(){var a=w8();
a?(p8("Resume connection to: "+g.LH(a)),C8(a,0)):(g.dI(),Mza(),p8("Skipping connecting because no session screen found."))},D8=function(){a8()?X7().stopSession():$7("stopSession called before API ready.");
var a=s8();a&&(a.disconnect(1),A8(null))},cAa=function(a){p8("remote.onCastSessionChange_: "+g.LH(a));
if(a){var b=x8();b&&b.id==a.id?c8(b.id,"YouTube TV"):(b&&D8(),C8(a,1))}else s8()&&D8()},dAa=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.lE("MDX_CONFIG")||b;g.nH&&vza();g.YH();B8||(B8=new Cza(b?b.loungeApiHost:void 0),g.fI()&&(B8.g="/api/loungedev"));z8||(z8=g.x("yt.mdx.remote.deferredProxies_")||[],g.ua("yt.mdx.remote.deferredProxies_",z8,void 0));Vza();var c=v8();if(!c){var d=new g.qI(B8);g.ua("yt.mdx.remote.screenService_",d,void 0);c=v8();var e=!1,f=void 0;var k=void 0;var l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);Qza(a,d,function(a){a?o8()&&c8(o8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){g.LG("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.x("yt.mdx.remote.initialized_")&&(g.ua("yt.mdx.remote.initialized_",!0,void 0),p8("Initializing: "+g.zg(b)),E8.push(g.HG("yt-remote-cast2-availability-change",function(){g.LG("yt-remote-receiver-availability-change")})),E8.push(g.HG("yt-remote-cast2-receiver-selected",function(){q8(null);
g.LG("yt-remote-auto-connect","cast-selector-receiver")})),E8.push(g.HG("yt-remote-cast2-receiver-resumed",function(){g.LG("yt-remote-receiver-resumed","cast-selector-receiver")})),E8.push(g.HG("yt-remote-cast2-session-change",cAa)),E8.push(g.HG("yt-remote-connection-change",function(a){a?c8(o8(),"YouTube TV"):w8()||(c8(null,null),Mza())})),a=r8(),b.isAuto&&(a.id+="#dial"),g.AF("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),p8(" -- with channel params: "+
g.zg(a)),Wza(a),c.start(),o8()||bAa())},F8=function(a,b,c){g.L.call(this);
this.F=a;this.U=b;this.o=new g.rG(this);g.M(this,this.o);this.o.P(b,"onCaptionsTrackListChanged",this.pQ);this.o.P(b,"captionschanged",this.YO);this.o.P(b,"captionssettingschanged",this.UC);this.o.P(b,"videoplayerreset",this.Eo);this.o.P(b,"mdxautoplaycancel",this.IH);this.N=this.o.P(b,"onVolumeChange",this.pB);this.D=!1;this.g=c;c.subscribe("proxyStateChange",this.CB,this);c.subscribe("remotePlayerChange",this.Dl,this);c.subscribe("remoteQueueChange",this.Eo,this);c.subscribe("autoplayUpNext",this.bB,
this);c.subscribe("previousNextChange",this.zB,this);c.subscribe("nowAutoplaying",this.rB,this);c.subscribe("autoplayDismissed",this.aB,this);this.suggestion=null;this.G=new g.eR(64);this.A=new g.It(this.PC,500,this);g.M(this,this.A);this.B=new g.It(this.QC,1E3,this);g.M(this,this.B);this.C={};this.J=new g.It(this.rD,1E3,this);g.M(this,this.J);this.I=new g.Ck(this.PL,1E3,this);g.M(this,this.I);this.L=g.y;this.UC();this.Eo();this.Dl()},G8=function(a,b){var c=a.F,d=a.U.ga().lengthSeconds;
c.I=b||0;c.g.W("progresssync",b,d)},eAa=function(a){G8(a,0);
a.A.stop();H8(a,new g.eR(64))},J8=function(a,b){if(I8(a)&&!a.D){var c=null;
b&&(c={style:a.U.xi()},g.gc(c,b));a.g.IC(a.U.ga().videoId,c);a.C=g8(a.g).o}},K8=function(a,b){var c=a.U.Xf();
c?Sza(a.g,a.U.ga().videoId,b,c.ce(),c.listId.toString()):Sza(a.g,a.U.ga().videoId,b);H8(a,new g.eR(1))},fAa=function(a,b){if(b){var c=a.U.xc("captions","tracklist",{Qy:1});
c&&c.length?(a.U.Fd("captions","track",b),a.D=!1):(a.U.rl("captions"),a.D=!0)}else a.U.Fd("captions","track",{})},I8=function(a){return g8(a.g).videoId==a.U.ga().videoId},H8=function(a,b){a.B.stop();
var c=a.G;if(!g.jR(c,b)){var d=g.W(b,2);if(d!=g.W(a.G,2)){var e=a.U;g.v1(e.app,d,e.playerType)}a.G=b;gAa(a.F,c,b)}},L8=function(a){g.Y.call(this,{H:"div",
M:"ytp-remote",K:[{H:"div",M:"ytp-remote-display-status",K:[{H:"div",M:"ytp-remote-display-status-icon",K:[g.qE()]},{H:"div",M:"ytp-remote-display-status-text",K:["{{statustext}}"]}]}]});this.o=new g.xX(this,250);g.M(this,this.o);this.A=a;this.P(a,"presentingplayerstatechange",this.B);hAa(this,g.BW(a))},hAa=function(a,b){if(3==a.A.Ua()){var c={RECEIVER_NAME:a.A.xc("remote","currentReceiver").name};
c=g.W(b,128)?g.U("YTP_MDX_STATUS_ERROR_2",c):b.rb()||g.W(b,4)?g.U("YTP_MDX_STATUS_PLAYING_2",c):g.U("YTP_MDX_STATUS_CONNECTED_2",c);a.updateValue("statustext",c);a.o.show()}else a.o.hide()},M8=function(a){g.nX.call(this,a);
this.A={key:g.NH(),name:g.U("YTP_MDX_MY_COMPUTER")};this.C=null;this.D=[];this.J=this.o=null;this.G=[this.A];this.B=this.A;this.F=new g.eR(64);this.I=0;var b=g.uW(a).F;b&&(b=b.A&&b.A.g)&&(b=new Q7(a,b),g.M(this,b));b=new L8(a);g.M(this,b);g.TW(a,b.element,4)},gAa=function(a,b,c){a.F=c;
a.g.W("presentingplayerstatechange",new g.oR(c,b))},N8=function(a,b){if(b.key!=a.B.key)if(b.key==a.A.key)D8();
else{a.B=b;var c=a.g.getPlaylistId();var d=a.g.ga(1).videoId;if(c||d){var e=a.g.Xf();if(e){var f=[];for(var k=0;k<e.getLength();k++)f[k]=e.kc(k).videoId}else f=[d];c={videoIds:f,listId:c,videoId:d,index:Math.max(a.g.Vz(),0),currentTime:a.g.getCurrentTime()}}else c=null;p8("Connecting to: "+g.zg(b));"cast-selector-receiver"==b.key?(q8(c||null),c=c||null,a8()?X7().setLaunchParams(c):$7("setLaunchParams called before ready.")):!c&&t8()&&o8()==b.key?g.LG("yt-remote-connection-change",!0):(D8(),q8(c||
null),c=v8().fe(),(c=g.PH(c,b.key))&&C8(c,1))}};
g.p(Q7,g.D0);Q7.prototype.I=function(){var a=this.U.xc("remote","receivers");a&&1<a.length&&!this.U.xc("remote","quickCast")?(this.F=g.Hb(a,this.B,this),g.E0(this,(0,g.J)(a,this.B)),a=this.U.xc("remote","currentReceiver"),this.mf(this.B(a)),this.enable(!0)):this.enable(!1)};
Q7.prototype.B=function(a){return a.key};
Q7.prototype.lf=function(a){return"cast-selector-receiver"==a?g.U("YTP_MDX_CAST_SELECTOR"):this.F[a].name};
Q7.prototype.sd=function(a){g.D0.prototype.sd.call(this,a);this.U.Fd("remote","currentReceiver",this.F[a]);this.A.Lb()};
g.h=Cza.prototype;g.h.gi=function(a){var b=this.g;if(g.t(void 0)?0:this.o)b="https://"+this.domain+this.port+this.g;return g.Rg(b+a,{})};
g.h.Hu=function(a,b,c,d){c={format:"JSON",method:"POST",context:this,timeout:5E3,withCredentials:!1,Sb:g.Ga(this.CU,c,!0),onError:g.Ga(this.BU,d),Hd:g.Ga(this.DU,d)};b&&(c.Mb=b,c.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.iF(a,c)};
g.h.CU=function(a,b,c,d){b?a(d):a({text:c.responseText})};
g.h.BU=function(a,b){a(Error("Request error: "+b.status))};
g.h.DU=function(a){a(Error("request timed out"))};
var Y7=[];g.B(f8,g.uG);g.h=f8.prototype;g.h.play=function(){1==this.g?(this.o?this.o.play(null,g.y,m8(this,"play")):h8(this,"play"),k8(this,1,g.NI(g8(this))),this.W("remotePlayerChange")):j8(this,this.play)};
g.h.pause=function(){1==this.g?(this.o?this.o.pause(null,g.y,m8(this,"pause")):h8(this,"pause"),k8(this,2,g.NI(g8(this))),this.W("remotePlayerChange")):j8(this,this.pause)};
g.h.CD=function(a){if(1==this.g){if(this.o){var b=g8(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.rb()||3==b.g?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.o.seek(c,g.y,m8(this,"seekTo",{newTime:a}))}else h8(this,"seekTo",{newTime:a});k8(this,3,a);this.W("remotePlayerChange")}else j8(this,g.Ga(this.CD,a))};
g.h.stop=function(){if(1==this.g){this.o?this.o.stop(null,g.y,m8(this,"stopVideo")):h8(this,"stopVideo");var a=g8(this);a.index=-1;a.videoId="";g.LI(a);i8(this,a);this.W("remotePlayerChange")}else j8(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=g8(this);if(this.A){if(c.volume!=a){var d=Math.round(a)/100;this.A.setReceiverVolumeLevel(d,(0,g.z)(function(){l8("set receiver volume: "+d)},this),(0,g.z)(function(){this.bc("failed to set receiver volume.")},this))}c.muted!=b&&this.A.setReceiverMuted(b,(0,g.z)(function(){l8("set receiver muted: "+b)},this),(0,g.z)(function(){this.bc("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);h8(this,"setVolume",e)}c.muted=b;c.volume=a;i8(this,c)}else j8(this,g.Ga(this.setVolume,a,b))};
g.h.IC=function(a,b){if(1==this.g){var c=g8(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.zg(b.style),g.gc(d,c.o));h8(this,"setSubtitlesTrack",d);i8(this,c)}else j8(this,g.Ga(this.IC,a,b))};
g.h.Iu=function(a,b){if(1==this.g){h8(this,"setAudioTrack",{videoId:a,audioTrackId:b.Sc.id});var c=g8(this);c.audioTrackId=b.Sc.id;i8(this,c)}else j8(this,g.Ga(this.Iu,a,b))};
g.h.BD=function(a,b){if(1==this.g){if(a&&b){var c=g8(this);g.OI(c,a,b);i8(this,c)}h8(this,"previous")}else j8(this,g.Ga(this.BD,a,b))};
g.h.AD=function(a,b){if(1==this.g){if(a&&b){var c=g8(this);g.OI(c,a,b);i8(this,c)}h8(this,"next")}else j8(this,g.Ga(this.AD,a,b))};
g.h.hx=function(){1==this.g?h8(this,"dismissAutoplay"):j8(this,this.hx)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.W("proxyStateChange",a,this.g)}f8.Z.dispose.call(this)};
g.h.X=function(){Tza(this);this.B=null;this.C.clear();e8(this,null);f8.Z.X.call(this)};
g.h.Ju=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.W("proxyStateChange",b,a);if(1==a)for(;!this.C.isEmpty();)g.VB(this.C).apply(this);else 3==a&&this.dispose()}};
g.h.pR=function(a,b){this.W(a,b)};
g.h.aP=function(a){if(!a)this.Bl(null),e8(this,null);else if(this.A.receiver.volume){a=this.A.receiver.volume;var b=g8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)l8("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,i8(this,b)}};
g.h.Bl=function(a){l8("Cast media: "+!!a);this.o&&this.o.removeUpdateListener(this.G);if(this.o=a)this.o.addUpdateListener(this.G),Uza(this),this.W("remotePlayerChange")};
g.h.ZO=function(a){a?(Uza(this),this.W("remotePlayerChange")):this.Bl(null)};
g.h.nP=function(){var a=Nza();a&&e8(this,a)};
g.h.bc=function(a){g.DH("CP",a)};
g.B(n8,g.QH);g.h=n8.prototype;g.h.fe=function(a){return this.ed.$_gs(a)};
g.h.contains=function(a){return!!this.ed.$_c(a)};
g.h.get=function(a){return this.ed.$_g(a)};
g.h.start=function(){this.ed.$_st()};
g.h.Hp=function(a,b,c){this.ed.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.ed.$_r(a,b,c)};
g.h.rp=function(a,b,c,d){this.ed.$_un(a,b,c,d)};
g.h.X=function(){for(var a=0,b=this.o.length;a<b;++a)this.ed.$_ubk(this.o[a]);this.o.length=0;this.ed=null;n8.Z.X.call(this)};
g.h.HU=function(){this.W("screenChange")};
g.h.WQ=function(){this.W("onlineScreenChange")};
var B8=null,z8=null,E8=[],u8=null;g.p(F8,g.L);g.h=F8.prototype;g.h.X=function(){g.L.prototype.X.call(this);this.A.stop();this.B.stop();this.L();this.g.unsubscribe("proxyStateChange",this.CB,this);this.g.unsubscribe("remotePlayerChange",this.Dl,this);this.g.unsubscribe("remoteQueueChange",this.Eo,this);this.g.unsubscribe("autoplayUpNext",this.bB,this);this.g.unsubscribe("previousNextChange",this.zB,this);this.g.unsubscribe("nowAutoplaying",this.rB,this);this.g.unsubscribe("autoplayDismissed",this.aB,this);this.g=this.F=null};
g.h.Mz=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.g.g)if(I8(this)){if(1081!=g8(this.g).g||"control_seek"!=a)switch(a){case "control_toggle_play_pause":g8(this.g).rb()?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.I.jj(c[0],c[1]);break;case "control_subtitles_set_track":J8(this,c[0]);break;case "control_set_audio_track":c=c[0],I8(this)&&this.g.Iu(this.U.ga().videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":K8(this,this.U.getCurrentTime());break;case "control_seek":K8(this,c[0]);break;case "control_subtitles_set_track":J8(this,c[0]);break;case "control_set_audio_track":c=c[0],I8(this)&&this.g.Iu(this.U.ga().videoId,c)}};
g.h.YO=function(a){this.Mz("control_subtitles_set_track",g.$b(a)?null:a)};
g.h.UC=function(){var a=this.U.xc("captions","track");g.$b(a)||J8(this,a)};
g.h.pB=function(a){if(I8(this)){this.g.unsubscribe("remotePlayerChange",this.Dl,this);var b=Math.round(a.volume);a=!!a.muted;var c=g8(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.J.start();this.g.subscribe("remotePlayerChange",this.Dl,this)}};
g.h.pQ=function(){g.$b(this.C)||fAa(this,this.C);this.D=!1};
g.h.CB=function(a,b){this.B.stop();2==b&&this.QC()};
g.h.Dl=function(){if(I8(this)){this.A.stop();var a=g8(this.g);switch(a.g){case 1081:H8(this,new g.eR(8));break;case 1:this.PC();H8(this,new g.eR(8));break;case 1083:case 3:H8(this,new g.eR(9));break;case 0:H8(this,new g.eR(2));this.I.stop();G8(this,this.U.ga().lengthSeconds);break;case 1082:H8(this,new g.eR(4));break;case 2:H8(this,new g.eR(4));G8(this,g.NI(a));break;case -1:H8(this,new g.eR(64));break;case -1E3:a={errorCode:"mdx.remoteerror",message:g.U("YTP_MDX_PLAYER_ERROR")},H8(this,new g.eR(128,
a))}a=g8(this.g).o;var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.C=a,fAa(this,a));a=g8(this.g);-1==a.volume||Math.round(this.U.getVolume())==a.volume&&this.U.isMuted()==a.muted||this.J.isActive()||this.rD()}else eAa(this)};
g.h.zB=function(){this.U.W("mdxpreviousnextchange")};
g.h.Eo=function(){I8(this)||eAa(this)};
g.h.IH=function(){this.g.hx()};
g.h.bB=function(a){a&&(a=g.iF("/watch_queue_ajax",{method:"GET",ad:{action_get_watch_queue_item:1,video_id:a},Sb:(0,g.z)(this.qS,this)}))&&(this.L=(0,g.z)(a.abort,a))};
g.h.qS=function(a,b){var c=new g.bQ({videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.U.W("mdxautoplayupnext",c)};
g.h.rB=function(a){(0,window.isNaN)(a)||this.U.W("mdxnowautoplaying",a)};
g.h.aB=function(){this.U.W("mdxautoplaycanceled")};
g.h.PL=function(a,b){-1==g8(this.g).g?K8(this,a):b&&this.g.CD(a)};
g.h.rD=function(){if(I8(this)){var a=g8(this.g);this.o.Da(this.N);a.muted?this.U.mute():this.U.Yf();this.U.setVolume(a.volume);this.N=this.o.P(this.U,"onVolumeChange",this.pB)}};
g.h.PC=function(){this.A.stop();if(!this.g.la()){var a=g8(this.g);a.rb()&&H8(this,new g.eR(8));G8(this,g.NI(a));this.A.start()}};
g.h.QC=function(){this.B.stop();this.A.stop();var a=this.g.B.getReconnectTimeout();2==this.g.g&&!(0,window.isNaN)(a)&&this.B.start()};g.p(L8,g.Y);L8.prototype.B=function(a){hAa(this,a.state)};g.p(M8,g.nX);g.h=M8.prototype;g.h.create=function(){dAa(g.$N(g.X(this.g)));this.D.push(g.HG("yt-remote-before-disconnect",this.VO,this));this.D.push(g.HG("yt-remote-connection-change",this.yR,this));this.D.push(g.HG("yt-remote-receiver-availability-change",this.AB,this));this.D.push(g.HG("yt-remote-auto-connect",this.wR,this));this.D.push(g.HG("yt-remote-receiver-resumed",this.vR,this));this.AB()};
g.h.load=function(){this.g.xq();g.nX.prototype.load.call(this);this.C=new F8(this,this.g,this.o);var a=Xza();a=a?a.currentTime:0;var b=t8()?new f8(s8(),void 0):null;0==a&&b&&(a=g.NI(g8(b)));0!=a&&(this.I=a||0,this.g.W("progresssync",a,void 0));gAa(this,this.F,this.F);g.A1(this.g.app,6)};
g.h.unload=function(){this.g.W("mdxautoplaycanceled");this.B=this.A;g.cf(this.C,this.o);this.o=this.C=null;g.nX.prototype.unload.call(this);g.A1(this.g.app,5)};
g.h.X=function(){g.IG(this.D);g.nX.prototype.X.call(this)};
g.h.kl=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.C.Mz.apply(this.C,[].concat([a],g.pa(c)))};
g.h.vI=function(){return this.loaded?this.C.suggestion:null};
g.h.Mf=function(){return this.o?g8(this.o).Mf:!1};
g.h.hasNext=function(){return this.o?g8(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.I};
g.h.sL=function(){var a=g8(this.o),b=this.g.ga();return{allowSeeking:this.g.gd(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.F?a.C+((0,g.G)()-a.A)/1E3:a.C,isPeggedToLive:1>=(a.F?a.B+((0,g.G)()-a.A)/1E3:a.B)-this.getCurrentTime(),loaded:a.J,seekableEnd:a.F?a.B+((0,g.G)()-a.A)/1E3:a.B,seekableStart:0<a.D?a.D+((0,g.G)()-a.A)/1E3:a.D}};
g.h.tL=function(){this.o&&this.o.AD()};
g.h.uL=function(){this.o&&this.o.BD()};
g.h.VO=function(a){1==a&&(this.J=this.o?g8(this.o):null)};
g.h.yR=function(){var a=t8()?new f8(s8(),void 0):null;if(a){var b=this.B;this.loaded&&this.unload();this.o=a;this.J=null;b.key!=this.A.key&&(this.B=b,this.load())}else g.bf(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.J)&&a.videoId==this.g.ga().videoId&&this.g.Tz(a.videoId,g.NI(a)));this.g.W("videodatachange","newdata",this.g.ga(),3)};
g.h.AB=function(){this.G=[this.A].concat($za());var a=y8()||this.A;N8(this,a);this.g.wa("onMdxReceiversChange")};
g.h.wR=function(){var a=y8();N8(this,a)};
g.h.vR=function(){this.B=y8()};
g.h.rL=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.G;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?b8():N8(this,b)),this.loaded?this.B:this.A;case "quickCast":return 2==this.G.length&&"cast-selector-receiver"==this.G[1].key?(b&&b8(),!0):!1}};
g.h.vL=function(){h8(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.td=function(){return!1};g.IZ.remote=M8;})(_yt_player);
