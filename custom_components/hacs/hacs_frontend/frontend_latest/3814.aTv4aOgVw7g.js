export const id=3814;export const ids=[3814,3265];export const modules={68927:(e,t,a)=>{a.d(t,{PE:()=>r});var n=a(48248),i=a(75514);const o=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],r=e=>e.first_weekday===i.zt.language?"weekInfo"in Intl.Locale.prototype?new Intl.Locale(e.language).weekInfo.firstDay%7:(0,n.S)(e.language)%7:o.includes(e.first_weekday)?o.indexOf(e.first_weekday):1},28020:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{Yq:()=>m,zB:()=>d});a(253),a(94438);var i=a(13265),o=a(94100),r=a(75514),l=a(68443),s=e([i,l]);[i,l]=s.then?(await s)():s;(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"long",month:"long",day:"numeric",timeZone:(0,l.w)(e.time_zone,t)})));const m=(e,t,a)=>u(t,a.time_zone).format(e),u=(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",timeZone:(0,l.w)(e.time_zone,t)}))),d=((0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"short",day:"numeric",timeZone:(0,l.w)(e.time_zone,t)}))),(e,t,a)=>{const n=c(t,a.time_zone);if(t.date_format===r.ow.language||t.date_format===r.ow.system)return n.format(e);const i=n.formatToParts(e),o=i.find((e=>"literal"===e.type))?.value,l=i.find((e=>"day"===e.type))?.value,s=i.find((e=>"month"===e.type))?.value,m=i.find((e=>"year"===e.type))?.value,u=i.at(i.length-1);let d="literal"===u?.type?u?.value:"";"bg"===t.language&&t.date_format===r.ow.YMD&&(d="");return{[r.ow.DMY]:`${l}${o}${s}${o}${m}${d}`,[r.ow.MDY]:`${s}${o}${l}${o}${m}${d}`,[r.ow.YMD]:`${m}${o}${s}${o}${l}${d}`}[t.date_format]}),c=(0,o.A)(((e,t)=>{const a=e.date_format===r.ow.system?void 0:e.language;return e.date_format===r.ow.language||(e.date_format,r.ow.system),new Intl.DateTimeFormat(a,{year:"numeric",month:"numeric",day:"numeric",timeZone:(0,l.w)(e.time_zone,t)})}));(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{day:"numeric",month:"short",timeZone:(0,l.w)(e.time_zone,t)}))),(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{month:"long",year:"numeric",timeZone:(0,l.w)(e.time_zone,t)}))),(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{month:"long",timeZone:(0,l.w)(e.time_zone,t)}))),(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",timeZone:(0,l.w)(e.time_zone,t)}))),(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"long",timeZone:(0,l.w)(e.time_zone,t)}))),(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"short",timeZone:(0,l.w)(e.time_zone,t)})));n()}catch(e){n(e)}}))},25558:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{r6:()=>d});var i=a(13265),o=a(94100),r=a(28020),l=a(84345),s=a(68443),m=a(57772),u=e([i,r,l,s]);[i,r,l,s]=u.then?(await u)():u;const d=(e,t,a)=>c(t,a.time_zone).format(e),c=(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:(0,m.J)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,m.J)(e)?"h12":"h23",timeZone:(0,s.w)(e.time_zone,t)})));(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"short",day:"numeric",hour:(0,m.J)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,m.J)(e)?"h12":"h23",timeZone:(0,s.w)(e.time_zone,t)}))),(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{month:"short",day:"numeric",hour:(0,m.J)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,m.J)(e)?"h12":"h23",timeZone:(0,s.w)(e.time_zone,t)}))),(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:(0,m.J)(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hourCycle:(0,m.J)(e)?"h12":"h23",timeZone:(0,s.w)(e.time_zone,t)})));n()}catch(e){n(e)}}))},84345:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{LW:()=>g,Xs:()=>h,fU:()=>m,ie:()=>d});var i=a(13265),o=a(94100),r=a(68443),l=a(57772),s=e([i,r]);[i,r]=s.then?(await s)():s;const m=(e,t,a)=>u(t,a.time_zone).format(e),u=(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{hour:"numeric",minute:"2-digit",hourCycle:(0,l.J)(e)?"h12":"h23",timeZone:(0,r.w)(e.time_zone,t)}))),d=(e,t,a)=>c(t,a.time_zone).format(e),c=(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{hour:(0,l.J)(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hourCycle:(0,l.J)(e)?"h12":"h23",timeZone:(0,r.w)(e.time_zone,t)}))),h=(e,t,a)=>y(t,a.time_zone).format(e),y=(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"long",hour:(0,l.J)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,l.J)(e)?"h12":"h23",timeZone:(0,r.w)(e.time_zone,t)}))),g=(e,t,a)=>w(t,a.time_zone).format(e),w=(0,o.A)(((e,t)=>new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"2-digit",hour12:!1,timeZone:(0,r.w)(e.time_zone,t)})));n()}catch(e){n(e)}}))},7356:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{K:()=>m});var i=a(13265),o=a(94100),r=a(74076),l=e([i,r]);[i,r]=l.then?(await l)():l;const s=(0,o.A)((e=>new Intl.RelativeTimeFormat(e.language,{numeric:"auto"}))),m=(e,t,a,n=!0)=>{const i=(0,r.x)(e,a,t);return n?s(t).format(i.value,i.unit):Intl.NumberFormat(t.language,{style:"unit",unit:i.unit,unitDisplay:"long"}).format(Math.abs(i.value))};n()}catch(e){n(e)}}))},68443:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{w:()=>s});var i=a(13265),o=a(75514),r=e([i]);i=(r.then?(await r)():r)[0];const l=Intl.DateTimeFormat?.().resolvedOptions?.().timeZone??"UTC",s=(e,t)=>e===o.Wj.local&&"UTC"!==l?l:t;n()}catch(e){n(e)}}))},57772:(e,t,a)=>{a.d(t,{J:()=>o});var n=a(94100),i=a(75514);const o=(0,n.A)((e=>{if(e.time_format===i.Hg.language||e.time_format===i.Hg.system){const t=e.time_format===i.Hg.language?e.language:void 0;return new Date("January 1, 2023 22:00:00").toLocaleString(t).includes("10")}return e.time_format===i.Hg.am_pm}))},96692:(e,t,a)=>{a.d(t,{Z:()=>n});const n=e=>e.charAt(0).toUpperCase()+e.slice(1)},74076:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{x:()=>d});var i=a(31195),o=a(24085),r=a(97334),l=a(68927);const s=1e3,m=60,u=60*m;function d(e,t=Date.now(),a,n={}){const d={...c,...n||{}},h=(+e-+t)/s;if(Math.abs(h)<d.second)return{value:Math.round(h),unit:"second"};const y=h/m;if(Math.abs(y)<d.minute)return{value:Math.round(y),unit:"minute"};const g=h/u;if(Math.abs(g)<d.hour)return{value:Math.round(g),unit:"hour"};const w=new Date(e),v=new Date(t);w.setHours(0,0,0,0),v.setHours(0,0,0,0);const f=(0,i.c)(w,v);if(0===f)return{value:Math.round(g),unit:"hour"};if(Math.abs(f)<d.day)return{value:f,unit:"day"};const _=(0,l.PE)(a),k=(0,o.k)(w,{weekStartsOn:_}),p=(0,o.k)(v,{weekStartsOn:_}),I=(0,r.I)(k,p);if(0===I)return{value:f,unit:"day"};if(Math.abs(I)<d.week)return{value:I,unit:"week"};const D=w.getFullYear()-v.getFullYear(),Z=12*D+w.getMonth()-v.getMonth();return 0===Z?{value:I,unit:"week"}:Math.abs(Z)<d.month||0===D?{value:Z,unit:"month"}:{value:Math.round(D),unit:"year"}}const c={second:45,minute:45,hour:22,day:5,week:4,month:11};n()}catch(h){n(h)}}))},56722:(e,t,a)=>{a.d(t,{Hh:()=>i,KF:()=>r,g0:()=>m,s7:()=>l});var n=a(37719);const i="unavailable",o="unknown",r="off",l=[i,o],s=[i,o,r],m=(0,n.g)(l);(0,n.g)(s)},95511:(e,t,a)=>{a.d(t,{Sn:()=>n});const n="timestamp"},16889:(e,t,a)=>{a.a(e,(async(e,t)=>{try{var n=a(36312),i=a(68689),o=a(66360),r=a(29818),l=a(28020),s=a(25558),m=a(84345),u=a(7356),d=a(96692),c=e([l,s,m,u]);[l,s,m,u]=c.then?(await c)():c;const h={date:l.Yq,datetime:s.r6,time:m.fU},y=["relative","total"];(0,n.A)([(0,r.EM)("hui-timestamp-display")],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"ts",value:void 0},{kind:"field",decorators:[(0,r.MZ)()],key:"format",value:void 0},{kind:"field",decorators:[(0,r.MZ)({type:Boolean})],key:"capitalize",value:()=>!1},{kind:"field",decorators:[(0,r.wk)()],key:"_relative",value:void 0},{kind:"field",key:"_connected",value:void 0},{kind:"field",key:"_interval",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,i.A)(a,"connectedCallback",this,3)([]),this._connected=!0,this._startInterval()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,i.A)(a,"disconnectedCallback",this,3)([]),this._connected=!1,this._clearInterval()}},{kind:"method",key:"render",value:function(){if(!this.ts||!this.hass)return o.s6;if(isNaN(this.ts.getTime()))return o.qy`${this.hass.localize("ui.panel.lovelace.components.timestamp-display.invalid")}`;const e=this._format;return y.includes(e)?o.qy` ${this._relative} `:e in h?o.qy` ${h[e](this.ts,this.hass.locale,this.hass.config)} `:o.qy`${this.hass.localize("ui.panel.lovelace.components.timestamp-display.invalid_format")}`}},{kind:"method",key:"updated",value:function(e){(0,i.A)(a,"updated",this,3)([e]),e.has("format")&&this._connected&&(y.includes("relative")?this._startInterval():this._clearInterval())}},{kind:"get",key:"_format",value:function(){return this.format||"relative"}},{kind:"method",key:"_startInterval",value:function(){this._clearInterval(),this._connected&&y.includes(this._format)&&(this._updateRelative(),this._interval=window.setInterval((()=>this._updateRelative()),1e3))}},{kind:"method",key:"_clearInterval",value:function(){this._interval&&(clearInterval(this._interval),this._interval=void 0)}},{kind:"method",key:"_updateRelative",value:function(){this.ts&&this.hass?.localize&&(this._relative="relative"===this._format?(0,u.K)(this.ts,this.hass.locale):(0,u.K)(new Date,this.hass.locale,this.ts,!1),this._relative=this.capitalize?(0,d.Z)(this._relative):this._relative)}}]}}),o.WF);t()}catch(e){t(e)}}))},13265:(e,t,a)=>{a.a(e,(async(e,t)=>{try{a(89655);var n=a(4604),i=a(41344),o=a(51141),r=a(5269),l=a(12124),s=a(78008),m=a(12653),u=a(74264),d=a(65842),c=a(44129);const e=async()=>{const e=(0,d.wb)(),t=[];(0,o.Z)()&&await Promise.all([a.e(7500),a.e(9699)]).then(a.bind(a,59699)),(0,l.Z)()&&await Promise.all([a.e(7555),a.e(7500),a.e(548)]).then(a.bind(a,70548)),(0,n.Z)(e)&&t.push(Promise.all([a.e(7555),a.e(3028)]).then(a.bind(a,43028)).then((()=>(0,c.T)()))),(0,i.Z6)(e)&&t.push(Promise.all([a.e(7555),a.e(4904)]).then(a.bind(a,24904))),(0,r.Z)(e)&&t.push(Promise.all([a.e(7555),a.e(307)]).then(a.bind(a,70307))),(0,s.Z)(e)&&t.push(Promise.all([a.e(7555),a.e(6336)]).then(a.bind(a,56336))),(0,m.Z)(e)&&t.push(Promise.all([a.e(7555),a.e(27)]).then(a.bind(a,50027)).then((()=>a.e(9135).then(a.t.bind(a,99135,23))))),(0,u.Z)(e)&&t.push(Promise.all([a.e(7555),a.e(6368)]).then(a.bind(a,36368))),0!==t.length&&await Promise.all(t).then((()=>(0,c.K)(e)))};await e(),t()}catch(e){t(e)}}),1)},44129:(e,t,a)=>{a.d(t,{K:()=>r,T:()=>l});a(24545),a(51855),a(82130),a(31743),a(22328),a(4959),a(62435);const n=["DateTimeFormat","DisplayNames","ListFormat","NumberFormat","RelativeTimeFormat"],i=new Set,o=async(e,t,a="__addLocaleData")=>{if("function"==typeof Intl[e]?.[a]){const n=await fetch(`/hacsfiles/frontend/static/locale-data/intl-${e.toLowerCase()}/${t}.json`);n.ok&&Intl[e][a](await n.json())}},r=async e=>{i.has(e)||(i.add(e),await Promise.all(n.map((t=>o(t,e)))))},l=()=>o("DateTimeFormat","add-all-tz","__addTZData")}};
//# sourceMappingURL=3814.aTv4aOgVw7g.js.map