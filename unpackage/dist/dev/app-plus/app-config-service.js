
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index1","pages/index/index2","pages/index/index3","pages/index/index4"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#333333","selectedColor":"#DD524D","backgroundColor":"#fff","borderStyle":"white","list":[{"text":"月","pagePath":"pages/index/index1","iconPath":"static/icon1.png","selectedIconPath":"static/selicon1.png"},{"text":"思","pagePath":"pages/index/index2","iconPath":"static/icon2.png","selectedIconPath":"static/selicon2.png"},{"text":"久","pagePath":"pages/index/index3","iconPath":"static/icon3.png","selectedIconPath":"static/selicon3.png"},{"text":"娟","pagePath":"pages/index/index4","iconPath":"static/icon4.png","selectedIconPath":"static/selicon4.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"AutumnCard","compilerVersion":"2.8.13","entryPagePath":"pages/index/index1","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index1","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"明月几时有"}},{"path":"/pages/index/index2","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"把酒问青天"}},{"path":"/pages/index/index3","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"不知天上宫阙"}},{"path":"/pages/index/index4","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"今夕是何年","enablePullDownRefresh":true}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});