(function(){var n=this,aa=function(a,b,c){return a.call.apply(a.bind,arguments)},ba=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},q=function(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return q.apply(null,arguments)};var r=(new Date).getTime();var t=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},ca=function(a,b){var c=parseInt(a,10);return isNaN(c)?b:c},da=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,ea=function(a,b){if(!a)return b;var c=a.match(da);return c?c[0]:b};var y=ca("100",-1),A=ca("2",0),fa=t("0"),ga=t("0.05"),ha=t("0.001"),ia=t("0.01"),ja=t("");var B=function(){return"r20160706"},C=/^true$/.test("false")?!0:!1,ka=/^true$/.test("false")?!0:!1,la=/^true$/.test("false")?!0:!1,ma=la||!ka;var D=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},na=/&/g,oa=/</g,pa=/>/g,qa=/"/g,ra=/'/g,sa=/\x00/g,ta={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},E={"'":"\\'"},ua=function(a,b){return a<b?-1:a>b?1:0};var va=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"==typeof a?a.split(""):a,g=0;g<d;g++)g in e&&b.call(c,e[g],g,a)};var F;a:{var wa=n.navigator;if(wa){var xa=wa.userAgent;if(xa){F=xa;break a}}F=""}var G=function(a){return-1!=F.indexOf(a)};var ya=G("Opera"),H=G("Trident")||G("MSIE"),za=G("Edge"),I=G("Gecko")&&!(-1!=F.toLowerCase().indexOf("webkit")&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),Aa=-1!=F.toLowerCase().indexOf("webkit")&&!G("Edge"),Ba=function(){var a=n.document;return a?a.documentMode:void 0},Ca;
a:{var Da="",Ea=function(){var a=F;if(I)return/rv\:([^\);]+)(\)|;)/.exec(a);if(za)return/Edge\/([\d\.]+)/.exec(a);if(H)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Aa)return/WebKit\/(\S+)/.exec(a);if(ya)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Ea&&(Da=Ea?Ea[1]:"");if(H){var Fa=Ba();if(null!=Fa&&Fa>parseFloat(Da)){Ca=String(Fa);break a}}Ca=Da}
var Ga=Ca,Ha={},Ia=function(a){if(!Ha[a]){for(var b=0,c=D(String(Ga)).split("."),d=D(String(a)).split("."),e=Math.max(c.length,d.length),g=0;0==b&&g<e;g++){var f=c[g]||"",k=d[g]||"",h=RegExp("(\\d*)(\\D*)","g"),l=RegExp("(\\d*)(\\D*)","g");do{var m=h.exec(f)||["","",""],p=l.exec(k)||["","",""];if(0==m[0].length&&0==p[0].length)break;b=ua(0==m[1].length?0:parseInt(m[1],10),0==p[1].length?0:parseInt(p[1],10))||ua(0==m[2].length,0==p[2].length)||ua(m[2],p[2])}while(0==b)}Ha[a]=0<=b}},Ja=n.document,Ka=
Ja&&H?Ba()||("CSS1Compat"==Ja.compatMode?parseInt(Ga,10):5):void 0;var J=function(a){J[" "](a);return a};J[" "]=function(){};var La;if(!(La=!I&&!H)){var Ma;if(Ma=H)Ma=9<=Number(Ka);La=Ma}La||I&&Ia("1.9.1");H&&Ia("9");var Na=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{J(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},Oa=function(a){try{var b=new Uint32Array(1);a.crypto.getRandomValues(b);return b[0]/65536/65536}catch(c){return Math.random()}},Pa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},Qa=function(a){var b=a.length;if(0==b)return 0;for(var c=305419896,d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&4294967295;return 0<c?c:4294967296+
c};var Ra=function(a,b){a.addEventListener?a.addEventListener("load",b,!1):a.attachEvent&&a.attachEvent("onload",b)};var Sa=function(a,b,c,d,e){this.w=c||4E3;this.s=a||"&";this.A=b||",$";this.u=void 0!==d?d:"trn";this.C=e||null;this.v=!1;this.l={};this.B=0;this.j=[]},Ta=function(a,b){var c={};c[a]=b;return[c]},K=function(a,b,c,d){a.j.push(b);a.l[b]=Ta(c,d)},Wa=function(a,b,c,d){b=b+"//"+c+d;var e=Ua(a)-d.length-0;if(0>e)return"";a.j.sort(function(a,b){return a-b});d=null;c="";for(var g=0;g<a.j.length;g++)for(var f=a.j[g],k=a.l[f],h=0;h<k.length;h++){if(!e){d=null==d?f:d;break}var l=Va(k[h],a.s,a.A);if(l){l=c+l;
if(e>=l.length){e-=l.length;b+=l;c=a.s;break}else a.v&&(c=e,l[c-1]==a.s&&--c,b+=l.substr(0,c),c=a.s,e=0);d=null==d?f:d}}g="";a.u&&null!=d&&(g=c+a.u+"="+(a.C||d));return b+g+""},Ua=function(a){if(!a.u)return a.w;var b=1,c;for(c in a.l)b=c.length>b?c.length:b;return a.w-a.u.length-b-a.s.length-1},Va=function(a,b,c,d,e){var g=[];Pa(a,function(a,k){var h=Xa(a,b,c,d,e);h&&g.push(k+"="+h)});return g.join(b)},Xa=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));
if(a instanceof Array){if(d=d||0,d<c.length){for(var g=[],f=0;f<a.length;f++)g.push(Xa(a[f],b,c,d+1,e));return g.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Va(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))};var Za=function(a,b,c,d){try{var e;c instanceof Sa?e=c:(e=new Sa,Pa(c,function(a,b){var c=e,d=c.B++,g=Ta(b,a);c.j.push(d);c.l[d]=g}));if(Math.random()<(d||a.j)){var g=Wa(e,a.u,a.l,a.s+b+"&");Ya(g)}}catch(f){}},Ya=function(a){n.google_image_requests||(n.google_image_requests=[]);var b=n.document.createElement("img");b.src=a;n.google_image_requests.push(b)};var $a=document,L=window,ab=null,M=$a.getElementsByTagName("script");M&&M.length&&(ab=M[M.length-1]);var bb=ab;var cb=Object.prototype.hasOwnProperty,db=function(a,b){for(var c in a)cb.call(a,c)&&b.call(void 0,a[c],c,a)},N=function(a){return!(!a||!a.call)&&"function"===typeof a},eb=function(a,b){for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])},O=function(a,b){if(a.indexOf){var c=a.indexOf(b);return 0<c||0===c}for(c=0;c<a.length;c++)if(a[c]===b)return!0;return!1},fb=function(a){"google_onload_fired"in a||(a.google_onload_fired=!1,Ra(a,function(){a.google_onload_fired=!0}))},gb=function(a){a=a.google_unique_id;
return"number"===typeof a?a:0},hb=!!window.google_async_iframe_id;var ib=function(a){return(a=a.google_ad_modifications)?a.eids||[]:[]},jb=function(a){return(a=a.google_ad_modifications)?a.loeids||[]:[]},kb=function(a,b,c){if(!a)return null;for(var d=0;d<a.length;++d)if((a[d].ad_slot||b)==b&&(a[d].ad_tag_origin||c)==c)return a[d];return null};var lb=function(a,b){this.j=a;this.l=b},mb=function(a,b,c){this.url=a;this.j=b;this.G=!!c;this.depth=null};var nb=function(a,b,c){this.u=a;this.w=b;this.s=c;this.l=null;this.v=this.j},ob=function(a,b,c){this.s=a;this.j=b||"";this.l=c||-1},qb=function(a,b,c,d){var e;try{e=c()}catch(k){var g=a.s;try{var f=pb(k),g=(d||a.v).call(a,b,f,void 0,void 0)}catch(h){a.j("pAR",h)}if(!g)throw k;}finally{}return e},rb=function(a,b){var c=P;return function(){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];return qb(c,a,function(){return b.apply(void 0,d)})}};
nb.prototype.j=function(a,b,c,d,e){try{var g=e||this.w,f=new Sa;f.v=!0;K(f,1,"context",a);b instanceof ob||(b=pb(b));K(f,2,"msg",b.s.substring(0,512));b.j&&K(f,3,"file",b.j);0<b.l&&K(f,4,"line",b.l.toString());b={};if(this.l)try{this.l(b)}catch(w){}if(d)try{d(b)}catch(w){}d=[b];f.j.push(5);f.l[5]=d;var k;e=n;d=[];var h,l=null;do{b=e;Na(b)?(h=b.location.href,l=b.document&&b.document.referrer||null):(h=l,l=null);d.push(new mb(h||"",b));try{e=b.parent}catch(w){e=null}}while(e&&b!=e);h=0;for(var m=d.length-
1;h<=m;++h)d[h].depth=m-h;b=n;if(b.location&&b.location.ancestorOrigins&&b.location.ancestorOrigins.length==d.length-1)for(h=1;h<d.length;++h){var p=d[h];p.url||(p.url=b.location.ancestorOrigins[h-1]||"",p.G=!0)}for(var v=new mb(n.location.href,n,!1),x=d.length-1,m=x;0<=m;--m){var u=d[m];if(u.url&&!u.G){v=u;break}}var u=null,z=d.length&&d[x].url;0!=v.depth&&z&&(u=d[x]);k=new lb(v,u);k.l&&K(f,6,"top",k.l.url||"");K(f,7,"url",k.j.url||"");Za(this.u,g,f,c)}catch(w){try{Za(this.u,g,{context:"ecmserr",
rctx:a,msg:sb(w),url:k.j.url},c)}catch(Qb){}}return this.s};var pb=function(a){return new ob(sb(a),a.fileName,a.lineNumber)},sb=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};var P;P=new nb(new function(){this.u="http:"===L.location.protocol?"http:":"https:";this.l="pagead2.googlesyndication.com";this.s="/pagead/gen_204?id=";this.j=.01},"jserror",!0);var ub=function(a,b){qb(P,a,b,tb)},tb=P.j,vb=function(a,b){return rb(a,b)};var wb={client:"google_ad_client",format:"google_ad_format",slotname:"google_ad_slot",output:"google_ad_output",ad_type:"google_ad_type",pse:"google_pstate_expt"};P.s=!C;var Q=function(a,b){this.l=a<b?a:b;this.j=a<b?b:a};Q.prototype.clone=function(){return new Q(this.l,this.j)};var xb=function(a){var b;try{b=parseInt(a.localStorage.getItem("google_experiment_mod"),10)}catch(c){return null}if(0<=b&&1E3>b)return b;b=Math.floor(1E3*Oa(a));try{return a.localStorage.setItem("google_experiment_mod",""+b),b}catch(c){return null}};var yb=null,zb=function(){if(!yb){for(var a=window,b=a,c=0;a&&a!=a.parent;)if(a=a.parent,c++,Na(a))b=a;else break;yb=b}return yb};var Ab={m:"10573511",o:"10573512"},Bb={m:"10573507",o:"10573508"},Cb={m:"10573695",o:"10573696"},Db={m:"10583695",o:"10583696"},R={X:{},na:{m:"453848102",o:"453848103"},ga:{m:"24819308",o:"24819309",T:"24819320",Z:"24819321"},ea:{m:"24819330",o:"24819331"},fa:{m:"108809120",$:"108809121"},ba:{m:"86724438",o:"86724439"},M:{m:"10573597",o:"10573598"},N:{m:"10573581",o:"10573582"},ja:{m:"10573605",o:"10573606"},Y:{m:"26835105",o:"26835106"},aa:{m:"35923720",o:"35923721"},D:{m:"35923760",o:"35923761"},
L:{m:"20040000",o:"20040001"},V:{m:"20040016",o:"20040017"},ha:{m:"19188000",o:"19188001"},W:{P:"314159230",da:"314159231"},ca:{ka:"27285692",ma:"27285712",la:"27285713"},ia:{m:"27415010",o:"27415011"},S:{m:"618018082",R:"618018083",U:"618018084"}};var Eb=new function(){this.j=new Q(100,199)};var S=function(a,b,c,d){if(a.location&&a.location.hash=="#google_plle_"+d)b=d;else a:{a=[c,d];if(!(1E-4>Math.random())&&(c=Math.random(),c<b)){c=Oa(window);b=a[Math.floor(c*a.length)];break a}b=null}return b};var Fb=function(a,b,c){ub("files::getSrc",function(){if("https:"==L.location.protocol&&"http"==c)throw c="https",Error("Requested url "+a+b);});return[c,"://",a,b].join("")},Gb=function(a,b,c){c||(c=ma?"https":"http");return Fb(a,b,c)};var Hb=function(){},Jb=function(a,b,c){switch(typeof b){case "string":Ib(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array||void 0!=b.length&&b.splice){var d=b.length;c.push("[");for(var e="",g=0;g<d;g++)c.push(e),Jb(a,b[g],c),e=",";c.push("]");break}c.push("{");d="";for(e in b)b.hasOwnProperty(e)&&(g=b[e],"function"!=typeof g&&
(c.push(d),Ib(e,c),c.push(":"),Jb(a,g,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},Kb={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Lb=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Ib=function(a,b){b.push('"');b.push(a.replace(Lb,function(a){if(a in Kb)return Kb[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Kb[a]=
e+b.toString(16)}));b.push('"')};var Mb=G("Safari")&&!((G("Chrome")||G("CriOS"))&&!G("Edge")||G("Coast")||G("Opera")||G("Edge")||G("Silk")||G("Android"))&&!(G("iPhone")&&!G("iPod")&&!G("iPad")||G("iPad")||G("iPod"));var T=null,Nb=I||Aa&&!Mb||ya||"function"==typeof n.btoa,Ob=function(a){var b;if(Nb)b=n.btoa(a);else{b=[];for(var c=0,d=0;d<a.length;d++){for(var e=a.charCodeAt(d);255<e;)b[c++]=e&255,e>>=8;b[c++]=e}if(!T)for(T={},a=0;65>a;a++)T[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a);a=T;c=[];for(d=0;d<b.length;d+=3){var g=b[d],f=(e=d+1<b.length)?b[d+1]:0,k=d+2<b.length,h=k?b[d+2]:0,l=g>>2,g=(g&3)<<4|f>>4,f=(f&15)<<2|h>>6,h=h&63;k||(h=64,e||(f=64));c.push(a[l],a[g],a[f],a[h])}b=
c.join("")}return b};var U="google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_modifications google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_dom_fingerprint google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_ama google_analytics_domain_name google_analytics_uacct google_analytics_url_parameters google_auto_format google_available_width google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ui_type google_contents google_core_dbp google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_delay_requests_count google_delay_requests_delay google_ed google_eids google_enable_content_recommendations google_enable_ose google_encoding google_floating_ad_position google_font_face google_font_size google_frame_id google_gl google_hints google_is_split_slot google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_mtl google_nofo google_num_radlinks google_num_radlinks_per_unit google_only_ads_with_video google_only_pyv_ads google_only_userchoice_ads google_override_format google_page_url google_pgb_reactive google_previous_watch google_previous_searches google_referrer_url google_region google_responsive_formats google_reuse_colors google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_safe_for_responsive_override google_scs google_source_type google_sui google_skip google_tag_for_child_directed_treatment google_tag_info google_tag_origin google_targeting google_tdsma google_tfs google_tl google_ui_features google_video_doc_id google_video_product_type google_video_url_to_fetch google_webgl_support google_with_pyv_ads google_yt_pt google_yt_up".split(" "),
Pb={google_ad_modifications:!0,google_analytics_domain_name:!0,google_analytics_uacct:!0},Rb=function(a){return(a=a.innerText||a.innerHTML)&&(a=a.replace(/^\s+/,"").split(/\r?\n/,1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/))&&/google_ad_client/.test(a[1])?a[1]:null},Sb=function(a){if(a=a.innerText||a.innerHTML)if(a=a.replace(/^\s+|\s+$/g,"").replace(/\s*(\r?\n)+\s*/g,";"),(a=a.match(/^\x3c!--+(.*?)(?:--+>)?$/)||a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i))&&/google_ad_client/.test(a[1]))return a[1];
return null},Vb=function(a){var b;try{a:{var c=a.document.getElementsByTagName("script"),d=a.navigator&&a.navigator.userAgent||"",e;if(!(e=/appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa\/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube/i.test(d))){var g;if(g=/i(phone|pad|pod)/i.test(d)){var f;if(f=/applewebkit/i.test(d)&&!/version|safari/i.test(d)){var k;try{k=!(!L.navigator.j&&!(C&&L.google_top_window||L.top).navigator.j)}catch(v){k=!1}f=!k}g=
f}e=g}for(var d=e?Rb:Sb,h=c.length-1;0<=h;h--){var l=c[h];if(!l.google_parsed_script){l.google_parsed_script=!0;var m=d(l);if(m){b=m;break a}}}b=null}}catch(v){return!1}if(!b)return!1;try{for(var c=/(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm,h={},p;p=c.exec(b);)h[p[1]]=Tb(p[2]);Ub(h,a)}catch(v){return!1}return!!a.google_ad_client},Wb=function(a){try{if(window.JSON&&window.JSON.stringify&&window.encodeURIComponent){var b,c,d=function(){return this};null!=Object.prototype.toJSON&&(b=Object.prototype.toJSON,
Object.prototype.toJSON=d);null!=Array.prototype.toJSON&&(c=Array.prototype.toJSON,Array.prototype.toJSON=d);var e=Ob(encodeURIComponent(window.JSON.stringify(a)));b&&(Object.prototype.toJSON=b);c&&(Array.prototype.toJSON=c);return e}}catch(g){P.j("sblob",g,void 0,void 0)}return""},Xb=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];db(a,function(a,d){if(null!=a){var e;try{var g=[];Jb(new Hb,a,g);e=g.join("")}catch(f){}e&&(e=e.replace(/\//g,"\\$&"),eb(b,d,"=",
e,";"))}});return b.join("")},Yb=function(a){for(var b=0,c=U.length;b<c;b++){var d=U[b];Pb[d]||(a[d]=null)}},Tb=function(a){switch(a){case "true":return!0;case "false":return!1;case "null":return null;case "undefined":break;default:try{var b=a.match(/^(?:'(.*)'|"(.*)")$/);if(b)return b[1]||b[2]||"";if(/^[-+]?\d*(\.\d+)?$/.test(a)){var c=parseFloat(a);return c===c?c:void 0}}catch(d){}}},Ub=function(a,b){for(var c=0;c<U.length;c++){var d=U[c];null==b[d]&&null!=a[d]&&(b[d]=a[d])}};var V=function(a){this.j=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:q(this.u,this)});this.s=a.google_iframe_oncopy},Zb;var W="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
/[\x00&<>"']/.test(W)&&(-1!=W.indexOf("&")&&(W=W.replace(na,"&amp;")),-1!=W.indexOf("<")&&(W=W.replace(oa,"&lt;")),-1!=W.indexOf(">")&&(W=W.replace(pa,"&gt;")),-1!=W.indexOf('"')&&(W=W.replace(qa,"&quot;")),-1!=W.indexOf("'")&&(W=W.replace(ra,"&#39;")),-1!=W.indexOf("\x00")&&(W=W.replace(sa,"&#0;")));Zb=W;V.prototype.set=function(a,b){this.s.handlers[a]=b;this.j.addEventListener&&this.j.addEventListener("load",q(this.l,this,a),!1)};
V.prototype.l=function(a){a=this.j.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};V.prototype.u=function(a,b){var c=$b("rx",a),d;a:{if(a&&(d=a.match("dt=([^&]+)"))&&2==d.length){d=d[1];break a}d=""}d=(new Date).getTime()-d;c=c.replace(/&dtd=(\d+|-?M)/,"&dtd="+(1E5<=d?"M":0<=d?d:"-M"));this.set(b,c);return c};
var $b=function(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),d=c.exec(b);d&&(b=b.replace(c,a+"="+(+d[1]+1||1)));return b};var ac=function(a){if(!a)return"";(a=a.toLowerCase())&&"ca-"!=a.substring(0,3)&&(a="ca-"+a);return a};I||Aa||H&&Ia(11);var bc=/MSIE [2-7]|PlayStation|Gecko\/20090226|Android 2\.|Opera/i,cc=!1;var X=null;var dc={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0};var Y,Z=function(a){this.u=[];this.l=a||window;this.j=0;this.s=null;this.B=0},ec=function(a,b){this.l=a;this.j=b};Z.prototype.C=function(a,b){0!=this.j||0!=this.u.length||b&&b!=window?this.v(a,b):(this.j=2,this.A(new ec(a,window)))};Z.prototype.v=function(a,b){this.u.push(new ec(a,b||this.l));fc(this)};Z.prototype.I=function(a){this.j=1;if(a){var b=vb("sjr::timeout",q(this.w,this,!0));this.s=this.l.setTimeout(b,a)}};
Z.prototype.w=function(a){a&&++this.B;1==this.j&&(null!=this.s&&(this.l.clearTimeout(this.s),this.s=null),this.j=0);fc(this)};Z.prototype.H=function(){return!(!window||!Array)};Z.prototype.J=function(){return this.B};Z.prototype.nq=Z.prototype.C;Z.prototype.nqa=Z.prototype.v;Z.prototype.al=Z.prototype.I;Z.prototype.rl=Z.prototype.w;Z.prototype.sz=Z.prototype.H;Z.prototype.tc=Z.prototype.J;var fc=function(a){var b=vb("sjr::tryrun",q(a.K,a));a.l.setTimeout(b,0)};
Z.prototype.K=function(){if(0==this.j&&this.u.length){var a=this.u.shift();this.j=2;var b=vb("sjr::run",q(this.A,this,a));a.j.setTimeout(b,0);fc(this)}};Z.prototype.A=function(a){this.j=0;a.l()};
var gc=function(a){try{return a.sz()}catch(b){return!1}},hc=function(a){return!!a&&("object"===typeof a||"function"===typeof a)&&gc(a)&&N(a.nq)&&N(a.nqa)&&N(a.al)&&N(a.rl)},ic=function(){if(Y&&gc(Y))return Y;var a=zb(),b=a.google_jobrunner;return hc(b)?Y=b:a.google_jobrunner=Y=new Z(a)},jc=function(a,b){ic().nq(a,b)},kc=function(a,b){ic().nqa(a,b)};var lc=hb?1==gb(L):!gb(L),mc=function(){var a=la?"https":"http",b=J("script"),c;a:{if(C)try{var d=L.google_cafe_host||L.top.google_cafe_host;if(d){c=d;break a}}catch(e){}c=ea("","pagead2.googlesyndication.com")}return["<",b,' src="',Gb(c,["/pagead/js/",B(),"/r20160707/show_ads_impl.js"].join(""),a),'"></',b,">"].join("")},nc=function(a,b,c,
d){return function(){var e=!1;d&&ic().al(3E4);try{var g=a.document.getElementById(b).contentWindow;if(Na(g)){var f=a.document.getElementById(b).contentWindow,k=f.document;k.body&&k.body.firstChild||(/Firefox/.test(navigator.userAgent)?k.open("text/html","replace"):k.open(),f.google_async_iframe_close=!0,k.write(c))}else{for(var h=a.document.getElementById(b).contentWindow,g=c,g=String(g),f=['"'],k=0;k<g.length;k++){var l=g.charAt(k),m=l.charCodeAt(0),p=k+1,v;if(!(v=ta[l])){var x;if(31<m&&127>m)x=
l;else{var u=l;if(u in E)x=E[u];else if(u in ta)x=E[u]=ta[u];else{var z=void 0,w=u.charCodeAt(0);if(31<w&&127>w)z=u;else{if(256>w){if(z="\\x",16>w||256<w)z+="0"}else z="\\u",4096>w&&(z+="0");z+=w.toString(16).toUpperCase()}x=E[u]=z}}v=x}f[p]=v}f.push('"');h.location.replace("javascript:"+f.join(""))}e=!0}catch(Qb){h=zb().google_jobrunner,hc(h)&&h.rl()}e&&(e=$b("google_async_rrc",c),(new V(a)).set(b,nc(a,b,e,!1)))}},oc=function(a){var b=["<iframe"];db(a,function(a,d){null!=a&&b.push(" "+d+'="'+a+'"')});
b.push("></iframe>");return b.join("")},pc=function(a){if(!X)a:{for(var b=[n.top],c=[],d=0,e;e=b[d++];){c.push(e);try{if(e.frames)for(var g=e.frames.length,f=0;f<g&&1024>b.length;++f)b.push(e.frames[f])}catch(h){}}for(b=0;b<c.length;b++)try{var k=c[b].frames.google_esf;if(k){X=k;break a}}catch(h){}X=null}if(!X){c={style:"display:none"};if(/[^a-z0-9-]/.test(a))return"";c["data-ad-client"]=ac(a);c.id="google_esf";c.name="google_esf";a=Gb(ea("","googleads.g.doubleclick.net"),
["/pagead/html/",B(),"/r20160707/zrt_lookup.html"].join(""));c.src=a;return oc(c)}return""},qc=function(a,b){var c=b.google_ad_output,d=b.google_ad_format;d||"html"!=c&&null!=c||(d=b.google_ad_width+"x"+b.google_ad_height);c=!b.google_ad_slot||b.google_override_format||!dc[b.google_ad_width+"x"+b.google_ad_height]&&"aa"==b.google_loader_used;d&&c?d=d.toLowerCase():d="";b.google_ad_format=d;if("number"!=typeof b.google_reactive_sra_index||
!b.google_ad_unit_key){for(var d=[b.google_ad_slot,b.google_ad_format,b.google_ad_type,b.google_ad_width,b.google_ad_height],c=[],e=0,g=bb.parentElement;g&&25>e;g=g.parentNode,++e)c.push(9!==g.nodeType&&g.id||"");(c=c.join())&&d.push(c);b.google_ad_unit_key=Qa(d.join(":")).toString();d=bb;c=[];for(e=0;d&&25>e;++e){var g=(g=9!==d.nodeType&&d.id)?"/"+g:"",f;a:{if(d&&d.nodeName&&d.parentElement){f=d.nodeName.toString().toLowerCase();for(var k=d.parentElement.childNodes,h=0,l=0;l<k.length;++l){var m=
k[l];if(m.nodeName&&m.nodeName.toString().toLowerCase()===f){if(d===m){f="."+h;break a}++h}}}f=""}c.push((d.nodeName&&d.nodeName.toString().toLowerCase())+g+f);d=d.parentElement}d=c.join()+":";c=a;e=[];if(c)try{for(var p=c.parent,g=0;p&&p!==c&&25>g;++g){var v=p.frames;for(f=0;f<v.length;++f)if(c===v[f]){e.push(f);break}c=p;p=c.parent}}catch(x){}b.google_ad_dom_fingerprint=Qa(d+e.join()).toString()}};(function(a){P.l=function(b){va(a,function(a){a(b)})}})([function(a){a.shv=B()},function(a){Pa(wb,function(b,c){try{null!=n[b]&&(a[c]=n[b])}catch(d){}})}]);
ub("sa::main",function(){var a=window,b=a.google_ad_modifications=a.google_ad_modifications||{};if(!b.plle){b.plle=!0;var c=b.eids=b.eids||[],b=b.loeids=b.loeids||[],d,e,g,f;d=R.M;e=d.o;if(!a.location||a.location.hash!="#google_plle_"+e){e=[d.m,e];g=new Q(y,y+A-1);var k;(k=0>=A||A%e.length)||(k=Eb.j,k=!(k.l<=g.l&&k.j>=g.j));k?e=null:(k=xb(a),e=null!==k&&g.l<=k&&g.j>=k?e[(k-y)%e.length]:null)}(g=e)&&b.push(g);e=Bb;g==d.m?f=e.m:g==d.o?f=e.o:f="";f&&c.push(f);d=Cb;(d=S(a,fa,d.m,d.o))&&c.push(d);d=Db;
(d=S(a,ga,d.m,d.o))&&c.push(d);d=R.N;(g=S(a,ha,d.m,d.o))&&b.push(g);e=Ab;g==d.m?f=e.m:g==d.o?f=e.o:f="";f&&c.push(f);d=R.D;(c=S(a,ia,d.m,d.o))&&b.push(c);$a.body||(d=R.L,(c=S(a,ja,d.m,d.o))&&b.push(c))}f=a.google_ad_slot;b=a.google_ad_modifications;!b||kb(b.ad_whitelist,f,void 0)?b=null:(c=b.space_collapsing||"none",b=(f=kb(b.ad_blacklist,f))?{F:!0,O:f.space_collapsing||c}:b.remove_ads_by_default?{F:!0,O:c}:null);if(b&&b.F)Yb(a);else if(fb(a),!1===window.google_enable_async||bc.test(navigator.userAgent)||
window.google_container_id||window.google_ad_output&&"html"!=window.google_ad_output)a.google_loader_used="sb",a.google_start_time=r,qc(a,a),document.write(pc(a.google_ad_client)+mc());else{lc&&(c=a.google_ad_client,b=navigator,a&&c&&b&&(b=a.document,c=ac(c),/[^a-z0-9-]/.test(c)||((f=D("r20160212"))&&(f+="/"),f=Gb("pagead2.googlesyndication.com","/pub-config/"+f+c+".js"),c=b.createElement("script"),c.src=f,(b=b.getElementsByTagName("script")[0])&&b.parentNode&&b.parentNode.insertBefore(c,
b))));a.google_unique_id?++a.google_unique_id:a.google_unique_id=1;c={};null==a.google_ad_client&&Vb(a)&&(c.google_loader_features_used=2048);Ub(a,c);c.google_loader_used="sa";Yb(a);b=J("script");f={};d=c.google_ad_height;f.width='"'+c.google_ad_width+'"';f.height='"'+d+'"';f.frameborder='"0"';f.marginwidth='"0"';f.marginheight='"0"';f.vspace='"0"';f.hspace='"0"';f.allowtransparency='"true"';f.scrolling='"no"';f.allowfullscreen='"true"';f.onload='"'+Zb+'"';var h;d=a.document;e=f.id;for(g=0;!e||d.getElementById(e);)e=
"aswift_"+g++;f.id=e;f.name=e;e=c.google_ad_width;g=c.google_ad_height;k=R.D;var l=k.m,m=k.o,p=c.google_active_plles=c.google_active_plles||[];O(jb(a),l)||O(ib(a),l)?p.push(l):(O(jb(a),m)||O(ib(a),m))&&p.push(m);cc=O(jb(a),k.o);k=["<iframe"];for(h in f)f.hasOwnProperty(h)&&eb(k,h+"="+f[h]);h="left:0;position:absolute;top:0;";cc&&(h=h+"width:"+e+"px;height:"+g+"px;");k.push('style="'+h+'"');k.push("></iframe>");h=f.id;e="border:none;height:"+g+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+
e+"px;background-color:transparent";d.write(['<ins id="',h+"_expand",'" style="display:inline-table;',e,'"><ins id="',h+"_anchor",'" style="display:block;',e,'">',k.join(" "),"</ins></ins>"].join(""));h=f.id;qc(a,c);f=Xb(c);d=Wb(c);c=pc(c.google_ad_client);e=(new Date).getTime();b=["<!doctype html><html><body>",c,"<",b,">",f,"google_show_ads_impl=true;google_unique_id=",gb(a),';google_async_iframe_id="',h,'";google_start_time=',r,";",d?'google_pub_vars = "'+d+'";':"","google_bpp=",e>r?e-r:1,";google_async_rrc=0;google_iframe_start_time=new Date().getTime();</",
b,">",mc(),"</body></html>"].join("");(a.document.getElementById(h)?jc:kc)(nc(a,h,b,!0))}});}).call(this);
