(function(t){function e(e){for(var s,i,r=e[0],l=e[1],c=e[2],u=0,p=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==n[l]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={index:0},o=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"009f":function(t,e,a){t.exports=a.p+"img/elroi.3a0564b8.png"},"1b76":function(t,e,a){t.exports=a.p+"img/art3mis.b1e2c1ae.png"},"22de":function(t,e,a){"use strict";a("8319")},4360:function(t,e){},"43cf":function(t,e,a){t.exports=a.p+"img/wikopos.228e9364.png"},"4bb7":function(t,e,a){t.exports=a.p+"img/wazone.6d0b30a0.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],i=a("2877"),r={},l=Object(i["a"])(r,n,o,!1,null,null,null),c=l.exports,d=a("bc3a"),u=a.n(d),p=a("130e"),m=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"leading-normal tracking-normal font-mono"},[a("div",{staticClass:"flex flex-wrap"},[a("div",{staticClass:"w-full bg-custom-background min-h-full"},[a("Navbar"),a("div",{staticClass:"container mx-auto px-4 md:px-10 lg:px-16"},[a("div",{attrs:{id:"home"}},[a("Home")],1),a("div",{attrs:{id:"about"}},[a("About")],1),a("div",{attrs:{id:"project"}},[a("latest-project")],1),a("div",{attrs:{id:"contact"}},[a("Contact")],1)])],1)])])},g=[],x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"fixed bottom-0 left-0 w-full md:sticky md:top-0 z-40 md:pt-1 bg-black md:bg-custom-background"},[a("div",{staticClass:"flex flex-col-reverse md:max-w-7xl md:mx-auto"},[a("div",{staticClass:"flex justify-between"},[a("div",{staticClass:"md:hidden flex items-center"},[a("button",{staticClass:"text-green-500 w-10 h-10 relative focus:outline-none",on:{click:function(e){t.open=!t.open}}},[a("div",{staticClass:"block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"},[a("span",{staticClass:"text-green-500 block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out",class:{"rotate-45":t.open," -translate-y-1.5":!t.open},attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"text-green-500 block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out",class:{"opacity-0":t.open},attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"text-green-500 block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out",class:{"-rotate-45":t.open," translate-y-1.5":!t.open},attrs:{"aria-hidden":"true"}})])])]),a("div",{staticClass:"flex"},[a("div",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#home",offset:-50},expression:"{ el: '#home', offset: -50 }"}]},[t._m(0)])]),a("div",{staticClass:"hidden md:flex items-center space-x-1"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#home",offset:-50},expression:"{ el: '#home', offset: -50 }"}],staticClass:"py-4 px-2 font-semibold",class:"home"==t.posititon?t.isActive.true:t.isActive.false,attrs:{href:"#"},on:{click:function(e){t.posititon="home"}}},[t._v("Home")]),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#about",offset:-40},expression:"{ el: '#about', offset: -40 }"}],staticClass:"py-4 px-2 font-semibold",class:"about"==t.posititon?t.isActive.true:t.isActive.false,attrs:{href:"#"},on:{click:function(e){t.posititon="about"}}},[t._v("About Me")]),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#project",offset:40},expression:"{ el: '#project', offset: 40 }"}],staticClass:"py-4 px-2 font-semibold",class:"project"==t.posititon?t.isActive.true:t.isActive.false,attrs:{href:"#"},on:{click:function(e){t.posititon="project"}}},[t._v("Projects")]),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#contact",offset:-40},expression:"{ el: '#contact', offset: -40 }"}],staticClass:"py-4 px-2 font-semibold",class:"contact"==t.posititon?t.isActive.true:t.isActive.false,attrs:{href:"#"},on:{click:function(e){t.posititon="contact"}}},[t._v("Contact")])])]),a("div",{staticClass:"md:hidden",class:t.open?"":"hidden"},[a("div",{staticClass:"grid grid-cols-4 text-white bg-black bg-opacity-95"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#home",offset:-1e3},expression:"{ el: '#home', offset: -1000 }"}],staticClass:"flex flex-col justify-center border-b border-gray-700 w-full",on:{click:function(e){t.posititon="home"}}},[a("div",{staticClass:"flex flex-col p-2"},[a("font-awesome-icon",{staticClass:"fa-lg mx-auto",class:"home"==t.posititon?"text-green-500":"text-white",attrs:{icon:["fas","home"]}}),a("span",{staticClass:"mx-auto text-sm",class:"home"==t.posititon?t.isActive.true:t.isActive.false},[t._v("Home")])],1)]),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#about",offset:10},expression:"{ el: '#about', offset: 10 }"}],staticClass:"flex flex-col justify-center border-b border-gray-700 w-full",on:{click:function(e){t.posititon="about"}}},[a("div",{staticClass:"flex flex-col p-2"},[a("font-awesome-icon",{staticClass:"fa-lg mx-auto",class:"about"==t.posititon?"text-green-500":"text-white",attrs:{icon:["fas","user-tie"]}}),a("span",{staticClass:"mx-auto text-sm",class:"about"==t.posititon?t.isActive.true:t.isActive.false},[t._v("About Me")])],1)]),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#project",offset:110},expression:"{ el: '#project', offset: 110 }"}],staticClass:"flex flex-col justify-center border-b border-gray-700 w-full",on:{click:function(e){t.posititon="project"}}},[a("div",{staticClass:"flex flex-col p-2"},[a("font-awesome-icon",{staticClass:"fa-lg mx-auto",class:"project"==t.posititon?"text-green-500":"text-white",attrs:{icon:["fas","code"]}}),a("span",{staticClass:"mx-auto text-sm",class:"project"==t.posititon?t.isActive.true:t.isActive.false},[t._v("Projects")])],1)]),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#contact",offset:1e3},expression:"{ el: '#contact', offset: 1000 }"}],staticClass:"flex flex-col justify-center border-b border-gray-700 w-full",on:{click:function(e){t.posititon="contact"}}},[a("div",{staticClass:"flex flex-col p-2"},[a("font-awesome-icon",{staticClass:"fa-lg mx-auto",class:"contact"==t.posititon?"text-green-500":"text-white",attrs:{icon:["far","envelope"]}}),a("span",{staticClass:"mx-auto text-sm",class:"contact"==t.posititon?t.isActive.true:t.isActive.false},[t._v("Contact")])],1)])])])])])},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"flex items-center py-1 mr-2 md:py-4 md:px-2"},[s("img",{staticClass:"rounded-full w-10 border-2 border-green-500",attrs:{src:a("8645"),alt:"mini_logo"}}),s("span",{staticClass:"font-semibold text-gray-300 text-lg pl-2"},[t._v("RDanang")])])}],b={data:function(){return{posititon:"home",open:!1,isActive:{false:["text-gray-300","hover:text-green-500","transition","duration-300"],true:["text-green-500","border-b-4","border-green-500"]}}}},h=b,C=Object(i["a"])(h,x,v,!1,null,null,null),w=C.exports,_=a("57da"),y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex w-full min-h-screen items-center"},[s("div",{staticClass:"flex flex-col border border-green-500 text-justify text-custom-content w-full relative"},[s("span",{staticClass:"absolute -top-4 left-1 bg-custom-background text-white text-2xl px-2"},[t._v("About Me")]),s("div",{staticClass:"flex rounded-full w-40 h-40 mx-auto overflow-hidden mt-4 mb-2"},[s("img",{staticClass:"object-cover h-full w-full",attrs:{src:a("7d90"),alt:"",srcset:""}})]),s("div",{staticClass:"mx-auto pb-1 lg:text-xl lg:tracking-normal lg:leading-normal"},[t._v(" Hello there Internet Fellas! "),s("img",{staticClass:"inline w-5 pb-2",attrs:{src:a("aefe"),alt:"hi-gif-from-joypixels"}})]),s("div",{staticClass:"tracking-tighter leading-tight lg:text-lg lg:tracking-normal"},[s("p",{staticClass:"px-4 pb-3"},[t._v(" My name is Ridho Danang Sanyoto, Well known as Mas Danang, but people also call me Iyoy, born on late April 1999, I love matrial arts, playing games, and anything that realted to tech, especially when I have to built it from scratch, because with that way I know how it works, My intrest on Web Development was started when I was Junior High School Student, Maybe because I spent a lot of time at Internet Caffe back then, So I choose Software Engineering for my Vocational High School Majority to learn more about it, and finaly start using Framework when I develop my final assigment for Bachelor Degree, I may not good at competitive programming, but i got the job done anyway. ")]),s("div",{staticClass:"px-4 flex flex-col text-xs sm:text-sm tracking-normal lg:text-lg"},[s("span",[t._v("Language, Tools and Concept :")]),s("div",{staticClass:"flex flex-row justify-between pb-2"},[s("ul",{staticClass:"list-inside list-disc"},[s("li",{staticClass:"text-green-500"},[s("span",{staticClass:"-ml-2 text-custom-content"},[t._v("HTML")])]),s("li",{staticClass:"text-green-500"},[s("span",{staticClass:"-ml-2 text-custom-content"},[t._v("CSS")])]),s("li",{staticClass:"text-green-500"},[s("span",{staticClass:"-ml-2 text-custom-content"},[t._v("PHP")])]),s("li",{staticClass:"text-green-500"},[s("span",{staticClass:"-ml-2 text-custom-content"},[t._v("JavaScript")])]),s("li",{staticClass:"text-green-500"},[s("span",{staticClass:"-ml-2 text-custom-content"},[t._v("TypeScript")])])]),s("ul",{staticClass:"list-inside list-disc"},[s("li",{staticClass:"text-green-500"},[s("span",{staticClass:"-ml-2 text-custom-content"},[t._v("Laravel")])]),s("li",{staticClass:"text-green-500"},[s("span",{staticClass:"-ml-2 text-custom-content"},[t._v("NestJS")])]),s("li",{staticClass:"text-green-500"},[s("span",{staticClass:"-ml-2 text-custom-content"},[t._v("TailwindCSS")])]),s("li",{staticClass:"text-green-500"},[s("span",{staticClass:"-ml-2 text-custom-content"},[t._v("React/Vue")])]),s("li",{staticClass:"text-green-500"},[s("span",{staticClass:"-ml-2 text-custom-content"},[t._v("Next/Nuxt")])])]),s("ul",{staticClass:"list-inside list-disc"},[s("li",{staticClass:"text-green-500"},[s("span",{staticClass:"-ml-2 text-custom-content"},[t._v("MySQL")])]),s("li",{staticClass:"text-green-500"},[s("span",{staticClass:"-ml-2 text-custom-content"},[t._v("MongoDB")])]),s("li",{staticClass:"text-green-500"},[s("span",{staticClass:"-ml-2 text-custom-content"},[t._v("Nginx")])]),s("li",{staticClass:"text-green-500"},[s("span",{staticClass:"-ml-2 text-custom-content"},[t._v("VSCode")])]),s("li",{staticClass:"text-green-500"},[s("span",{staticClass:"-ml-2 text-custom-content"},[t._v("Linux")])])]),s("ul",{staticClass:"list-inside list-disc"},[s("li",{staticClass:"text-green-500"},[s("span",{staticClass:"-ml-2 text-custom-content"},[t._v("Git, Github, GitLab")])]),s("li",{staticClass:"text-green-500"},[s("span",{staticClass:"-ml-2 text-custom-content"},[t._v("Postman, Swagger")])]),s("li",{staticClass:"text-green-500"},[s("span",{staticClass:"-ml-2 text-custom-content"},[t._v("REST API")])]),s("li",{staticClass:"text-green-500"},[s("span",{staticClass:"-ml-2 text-custom-content"},[t._v("SPA & PWA")])]),s("li",{staticClass:"text-green-500"},[s("span",{staticClass:"-ml-2 text-custom-content"},[t._v("AWS S3 / GCP ")])])])])])])])])}],j={},S=j,A=Object(i["a"])(S,y,k,!1,null,"0c953d52",null),P=A.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex w-full min-h-screen items-center justify-center"},[a("div",{staticClass:"flex flex-col w-full"},[t._m(0),a("div",{staticClass:"flex flex-row"},[a("div",{staticClass:"flex flex-col w-full pt-6 px-2"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[a("div",{staticClass:"flex flex-row"},[a("div",{staticClass:"pr-2 w-1/2"},[a("label",{staticClass:"block mb-2 text-sm font-bold text-custom-content",attrs:{for:"name"}},[t._v(" Name ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formBind.name,expression:"formBind.name"}],staticClass:"\n                w-full\n                px-3\n                py-2\n                text-sm\n                leading-tight\n                text-gray-700\n                border\n                rounded\n                shadow\n                appearance-none\n                focus:outline-none focus:shadow-outline\n              ",attrs:{id:"name",name:"name",type:"text",placeholder:"Name"},domProps:{value:t.formBind.name},on:{input:function(e){e.target.composing||t.$set(t.formBind,"name",e.target.value)}}}),a("div",{staticClass:"relative h-5"},[t.errors.data&&t.errors.data.name?a("span",{staticClass:"text-sm text-red-500 absolute top-1 left-0"},[t._v(" "+t._s(t.errors.data.name)+" ")]):t._e()])]),a("div",{staticClass:"pl-2 w-1/2"},[a("label",{staticClass:"block mb-2 text-sm font-bold text-custom-content",attrs:{for:"email"}},[t._v(" Email ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formBind.email,expression:"formBind.email"}],staticClass:"\n                w-full\n                px-3\n                py-2\n                text-sm\n                leading-tight\n                text-gray-700\n                border\n                rounded\n                shadow\n                appearance-none\n                focus:outline-none focus:shadow-outline\n              ",attrs:{id:"email",name:"email",type:"text",placeholder:"Name@Doman.Tld"},domProps:{value:t.formBind.email},on:{input:function(e){e.target.composing||t.$set(t.formBind,"email",e.target.value)}}}),a("div",{staticClass:"relative h-5"},[t.errors.data&&t.errors.data.email?a("span",{staticClass:"text-sm text-red-500 absolute top-1 left-0"},[t._v(" "+t._s(t.errors.data.email)+" ")]):t._e()])])]),a("div",{staticClass:"py-3"},[a("label",{staticClass:"block mb-2 text-sm font-bold text-custom-content",attrs:{for:"subject"}},[t._v(" Subject ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formBind.subject,expression:"formBind.subject"}],staticClass:"\n              w-full\n              px-3\n              py-2\n              text-sm\n              leading-tight\n              text-gray-700\n              border\n              rounded\n              shadow\n              appearance-none\n              focus:outline-none focus:shadow-outline\n            ",attrs:{id:"subject",name:"_subject",type:"text",placeholder:"Subject"},domProps:{value:t.formBind.subject},on:{input:function(e){e.target.composing||t.$set(t.formBind,"subject",e.target.value)}}}),a("div",{staticClass:"relative h-5"},[t.errors.data&&t.errors.data.subject?a("span",{staticClass:"text-sm text-red-500 absolute top-1 left-0"},[t._v(" "+t._s(t.errors.data.subject)+" ")]):t._e()])]),a("div",{staticClass:"pb-6"},[a("label",{staticClass:"block mb-2 text-sm font-bold text-custom-content",attrs:{for:"content"}},[t._v(" Content ")]),a("div",{staticClass:"relative"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formBind.content,expression:"formBind.content"}],staticClass:"\n                w-full\n                px-3\n                py-2\n                text-sm\n                leading-tight\n                text-gray-700\n                border\n                rounded\n                shadow\n                appearance-none\n                focus:outline-none focus:shadow-outline\n              ",attrs:{id:"content",name:"message",maxlength:"300",rows:"8",placeholder:"Leave your massage here.."},domProps:{value:t.formBind.content},on:{input:function(e){e.target.composing||t.$set(t.formBind,"content",e.target.value)}}}),t._v(" "),a("span",{staticClass:"\n                absolute\n                bottom-8\n                right-3\n                bg-green-500\n                p-1\n                rounded-lg\n                text-custom-title\n              "},[t._v(t._s(300-t.formBind.content.length))]),a("div",{staticClass:"relative h-5"},[t.errors.data&&t.errors.data.content?a("span",{staticClass:"text-sm text-red-500 absolute top-0 left-0"},[t._v(" "+t._s(t.errors.data.content)+" ")]):t._e()])]),t._m(1)])])]),a("div",{staticClass:"flex flex-col mt-14 pl-2 space-y-2"},[a("a",{attrs:{href:"https://github.com/rdanang-dev",target:"blank"}},[a("font-awesome-icon",{staticClass:"fa-3x",staticStyle:{color:"#181717"},attrs:{icon:["fab","github-square"]}})],1),a("a",{attrs:{href:"https://www.instagram.com/ikan_gondrong",target:"blank"}},[a("font-awesome-icon",{staticClass:"fa-3x",staticStyle:{color:"#E4405F"},attrs:{icon:["fab","instagram-square"]}})],1),a("a",{attrs:{href:"https://wa.me/+6285718530636?text=Hallo%20Danang%2C%20I%20liked%20to%20use%20your%20service%2C%20please%20contact%20me%20at%20%2E%2E%2E%2E%2E",target:"blank"}},[a("font-awesome-icon",{staticClass:"fa-3x",staticStyle:{color:"#25D366"},attrs:{icon:["fab","whatsapp-square"]}})],1),a("a",{attrs:{href:"https://www.linkedin.com/in/ridho-danang-sanyoto",target:"blank"}},[a("font-awesome-icon",{staticClass:"fa-3x",staticStyle:{color:"#0A66C2"},attrs:{icon:["fab","linkedin"]}})],1),a("a",{attrs:{href:"mailto:rdanang.dev@gmail.com"}},[a("font-awesome-icon",{staticClass:"fa-3x",staticStyle:{color:"#EA4335"},attrs:{icon:["fas","envelope-square"]}})],1)])])])])},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-row"},[a("span",{staticClass:"text-custom-title text-xl md:text-3xl pr-2 bg-custom-background"},[t._v("Contact")]),a("hr",{staticClass:"border-green-500 my-auto w-full"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-row justify-between mt-2"},[a("button",{staticClass:"\n                border border-green-500\n                text-green-500\n                p-3\n                max-w-max\n                hover:border-green-300 hover:text-green-300\n              ",attrs:{type:"submit"}},[t._v(" Submit! ")])])}],R=a("1da1"),E=(a("96cf"),a("b64b"),a("b0c0"),a("ac1f"),a("00b4"),{data:function(){return{formBind:{name:"",email:"",subject:"",content:""},errors:{data:[]}}},methods:{onSubmit:function(){var t=this;return Object(R["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.validate(),0===Object.keys(t.errors.data).length){e.next=5;break}t.$toasted.error("Oops, Something Went Wrong!",{duration:1500,position:"bottom-right"}),e.next=9;break;case 5:return e.next=7,t.submitForm();case 7:t.formBind={},t.formBind.content="";case 9:case"end":return e.stop()}}),e)})))()},validate:function(){if(this.errors.data={},""===this.formBind.name&&(this.errors.data.name="Name field is required!"),""===this.formBind.email)this.errors.data.email="Email field is required!";else{var t=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.formBind.email.toLowerCase());t||(this.errors.data.email="Incorrect email format!")}""===this.formBind.subject&&(this.errors.data.subject="Subject field is required!"),""===this.formBind.content&&(this.errors.data.content="Content field is required!")},submitForm:function(){var t=this;return Object(R["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(s in a=new FormData,t.formBind)t.formBind[s]&&a.append(s,t.formBind[s]);return a.append("_next","/#content"),a.append("_captcha",!1),e.next=6,t.sentMail(a);case 6:case"end":return e.stop()}}),e)})))()},sentMail:function(t){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.axios.post("https://formsubmit.co/rdanang.dev@gmail.com",t);case 3:e.$toasted.success("Message Sent!",{duration:1500,position:"bottom-right"}),a.next=10;break;case 6:a.prev=6,a.t0=a["catch"](0),console.log(a.t0),e.$toasted.error("Oops, Something Went Wrong!",{duration:1500,position:"bottom-right"});case 10:case"end":return a.stop()}}),a,null,[[0,6]])})))()}}}),O=E,T=(a("e27b"),Object(i["a"])(O,B,N,!1,null,"755614fa",null)),I=T.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex w-full item-center"},[s("div",{staticClass:"py-32 flex flex-col"},[t._m(0),t._m(1),t._l(t.data,(function(e,n){return s("div",{key:n,staticClass:"pt-8 flex flex-col rounded-t-3xl rounded-b-3xl"},[s("div",{staticClass:"flex h-full w-full items-center border border-green-500 rounded-t-3xl"},[s("a",{staticClass:"w-full",attrs:{href:e.links?e.links:e.demo,target:"_blank"}},[s("img",{staticClass:"w-full object-center rounded-t-3xl",attrs:{src:a("8521")("./"+e.image)}})])]),s("div",{staticClass:"flex flex-col px-3 pt-2 border-dashed lg:border-t border-b border-l border-r rounded-bl-3xl rounded-br-3xl border-green-500 relative"},[s("span",{staticClass:"text-custom-title text-3xl"},[t._v(t._s(e.title))]),s("p",{staticClass:"text-custom-content"},[t._v(t._s(e.desc))]),s("div",{staticClass:"text-justify leading-relaxed text-base font-normal py-2 lg:pt-5 text-custom-content px-3"},[e.backendRole?s("div",[s("span",{staticClass:"block pt-2"},[t._v("Backend Roles:")]),s("p",{staticStyle:{"text-indent":"2em"}},[t._v(" "+t._s(e.backendRole)+" ")])]):t._e(),e.frontendRole?s("div",[s("span",{staticClass:"block pt-2"},[t._v("FrontEnd Roles:")]),s("p",{staticStyle:{"text-indent":"2em"}},[t._v(t._s(e.frontendRole))])]):t._e(),e.devopsRole?s("div",[s("span",{staticClass:"block pt-2"},[t._v("DevOps Roles:")]),s("p",{staticStyle:{"text-indent":"2em"}},[t._v(t._s(e.devopsRole))])]):t._e(),s("div",{staticClass:"space-x-1 space-y-1 max-w-64 pb-14 lg:pb-16"},[s("span",{staticClass:"block py-2"},[t._v("Tags:")]),t._l(e.tags,(function(e){return s("span",{key:e,staticClass:"inline-block border border-dotted border-green-500 tracking-normal px-2"},[t._v(t._s(e))])}))],2)]),s("div",{staticClass:"flex justify-end p-2 absolute bottom-0 right-2 space-x-2 text-green-500"},[e.links?s("a",{attrs:{href:e.links,target:"_blank"}},[s("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:["fas","external-link-square-alt"]}})],1):t._e(),e.frontend?s("a",{attrs:{href:e.frontend,target:"_blank"}},[s("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:["fab","github-square"]}})],1):t._e(),e.backend?s("a",{attrs:{href:e.backend,target:"_blank"}},[s("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:["fab","github-square"]}})],1):t._e(),e.demo?s("a",{attrs:{href:e.demo,target:"_blank"}},[s("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:["fab","youtube-square"]}})],1):t._e()])])])}))],2)])},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-row"},[a("span",{staticClass:"text-custom-title text-xl md:text-3xl pr-2 min-w-max"},[t._v("Projects")]),a("hr",{staticClass:"border-green-500 my-auto w-full"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-lg text-custom-title pt-5 md:text-2xl"},[a("span",[t._v("Here is some project that i do, you can also check the other on my ")]),a("a",{staticClass:"text-green-500 hover:underline",attrs:{href:"https://github.com/rdanang-dev",target:"_blank"}},[t._v("github")]),a("span",[t._v(" !")])])}],D=a("819e"),F={name:"LatestProject",data:function(){return{data:D.data}}},H=F,J=Object(i["a"])(H,M,$,!1,null,null,null),L=J.exports,q={name:"Main",components:{Navbar:w,Home:_["default"],About:P,Contact:I,LatestProject:L}},W=q,G=(a("22de"),Object(i["a"])(W,f,g,!1,null,null,null)),z=G.exports;s["a"].use(m["a"]);var V=[{path:"/",name:"Main",component:z},{path:"/home",name:"Home",component:function(){return Promise.resolve().then(a.bind(null,"57da"))}}],U=new m["a"]({mode:"history",base:"/",routes:V}),Q=U,Y=a("4360"),Z=a.n(Y),K=(a("a2f0"),a("e956")),X=a.n(K),tt=a("f13c"),et=a.n(tt),at=a("ad3d"),st=a("c074"),nt=a("f2d1"),ot=a("b702"),it=a("ecee"),rt=a("a65d"),lt=a.n(rt);s["a"].use(p["a"],u.a),s["a"].use(X.a),s["a"].use(et.a),it["c"].add(nt["a"],nt["c"],nt["b"],nt["f"],nt["e"],nt["d"],st["d"],st["e"],st["a"],st["b"],st["c"],ot["a"]);var ct={position:"bottom-right",duration:"1000"};s["a"].use(lt.a,ct),s["a"].component("font-awesome-icon",at["a"]),s["a"].config.productionTip=!1,new s["a"]({router:Q,store:Z.a,render:function(t){return t(c)}}).$mount("#app")},"57da":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex w-full min-h-screen item-center"},[a("div",{staticClass:"flex flex-col py-32"},[a("span",{staticClass:"text-green-500 text-xl"},[t._v("Hi There, i'm")]),a("vue-typer",{staticClass:"text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl xl:py-4 xl:-m-2 font-medium",attrs:{text:["Ridho Danang Sanyoto"],repeat:1/0,"initial-action":"typing","pre-type-delay":2e3,"type-delay":100,"pre-erase-delay":3e3,"erase-delay":90,"erase-style":"backspace","erase-on-complete":!1,"caret-animation":"expand"}}),a("div",{staticClass:"w-full"},[a("span",{staticClass:"text-custom-content text-xl sm:text-4xl md:text-5xl xl:text-6xl md:pt-3"},[t._v(" I Build Things from Scratch.")]),t._m(0),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#contact",offset:-40},expression:"{ el: '#contact', offset: -40 }"}],staticClass:"border border-green-500 text-green-500 p-3 max-w-max hover:border-green-300 hover:text-green-300",attrs:{href:"#"}},[t._v(" Get in Touch ")])])],1)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-4 pb-6"},[a("p",{staticClass:"text-custom-content md:w-full md:max-w-md md:text-justify break-words lg:text-lg"},[t._v(" I'm Web Developer from South Tangerang, Indonesia, I'm currently focused on tech for building web-based app from scratch, such as "),a("a",{staticClass:"text-green-500 hover:underline",attrs:{href:"https://laravel.com/",target:"_blank"}},[t._v("Laravel")]),t._v(", "),a("a",{staticClass:"text-green-500 hover:underline",attrs:{href:"https://nestjs.com/",target:"_blank"}},[t._v("NestJS")]),t._v(", "),a("a",{staticClass:"text-green-500 hover:underline",attrs:{target:"_blank",href:"https://vuejs.org/"}},[t._v("VueJS")]),t._v(", "),a("a",{staticClass:"text-green-500 hover:underline",attrs:{target:"_blank",href:"https://reactjs.org/"}},[t._v("ReactJS")]),t._v(" , and "),a("a",{staticClass:"text-green-500 hover:underline",attrs:{target:"_blank",href:"https://tailwindcss.com/"}},[t._v("TailwindCSS")])])])}],o={},i=o,r=(a("8b71"),a("2877")),l=Object(r["a"])(i,s,n,!1,null,null,null);e["default"]=l.exports},"70a9":function(t,e,a){},"73ee":function(t,e,a){t.exports=a.p+"img/benefits_indonesia.e7496d3f.png"},"7d90":function(t,e,a){t.exports=a.p+"img/rdanang.d9d3b00b.jpg"},"819e":function(t){t.exports=JSON.parse('{"data":[{"image":"wazone.png","title":"WaZone","desc":"Web base app for blasting, and creating bot whatsapp.","backendRole":"Creating API with repository design pattern architecture (controller, service, repository, dto/dio), manjorly for Crud Operation, creating services for storing files at GCP (Google Cloud Platform) and Firebase, Create Login with JwtServices, Implement Two Factor Authentication (2FA) with TOTP Algorithm (Google/Microsoft Authenticator), Create API docs with swagger and compodoc, creating services for sending e-mail, creating socket to listen whatsapp connection, creating bot feature.","frontendRole":"Create interactive and responsive web app interface using React Typescript and TailwindCSS, fetch data from api with axios and manage it with state management, creating socket listener to get events from backend, creating otp feature to match the code from user and the authenticator, create forgot password and reset password.","devopsRole":"Creating shell script to deploy app to the server including go to project repository, pulling last changes from github/gitlab, installing dependencies, building app, restaring pm2 services, split api for staging and production.","tags":["Typescript","React","TailwindCSS","NestJS","Firebase","GCP","Socket.io","Swagger","Compodoc","Postman"],"links":"https://app.wazone.id"},{"image":"benefits_indonesia.png","title":"Benefits Indonesia","desc":"Dating App for Indonesian Couples.","frontendRole":"Create web app for administrative purposes (accepting and rejecting profile verification or user reports, crud coins and plans), creating architecure hierarchy for storing state management, entity, enums, and etc, creating forgot and reset password pages, creating download apps page on landing page sites.","backendRole":"Creating API with repository design pattern architecture (controller, service, repository, dto/dio), create plan and features crud for integrations use in payment gateway, creating services for login with jwt auth, fixing bugs, creating mailing services for notify user about profile verification and reset passwords.","devopsRole":"Creating shell script to deploy app to the server including go to project repository, pulling last changes from github/gitlab, installing dependencies, building app, restaring pm2 services, split api for staging and production.","tags":["Typescript","NestJS","Swagger","Firebase","React","TailwindCSS","Swagger","Compodoc","Postman","Nginx"],"links":"https://benefits.co.id/","demo":"https://youtube.com/watch?v=TIb8dPmRYCU"},{"image":"elroi.png","title":"Elroi Church","desc":"Webapp for Elroi Church, a Christian church located at sawangan.","backendRole":"Creating Api for Elroi Church, and Elroi Church Admin, Change the orm of the app from typegoose to mongoose, Creating Api Documentation with swagger, compodoc and postman, implementing dto and repository design pattern, create giving feature using Mitrans Payment Gateway, Deploy App to the server.","devopsRole":"Creating shell script to deploy app to the server including go to project repository, pulling last changes from github/gitlab, installing dependencies, building app, restaring pm2 services.","tags":["NestJS","Firebase Storage","Nginx","Swagger","Compodoc","Postman"],"links":"https://www.elroichurch.com/"}]}')},8319:function(t,e,a){},8521:function(t,e,a){var s={"./art3mis.png":"1b76","./benefits_indonesia.png":"73ee","./elroi.png":"009f","./matics.png":"89a4","./wazone.png":"4bb7","./wikopos.png":"43cf"};function n(t){var e=o(t);return a(e)}function o(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=o,t.exports=n,n.id="8521"},8645:function(t,e,a){t.exports=a.p+"img/mini_logo.3b350aa8.jpeg"},"88d7":function(t,e,a){},"89a4":function(t,e,a){t.exports=a.p+"img/matics.e18bda97.png"},"8b71":function(t,e,a){"use strict";a("88d7")},a2f0:function(t,e,a){},aefe:function(t,e,a){t.exports=a.p+"img/waving-hand-joypixels.30169e4a.gif"},e27b:function(t,e,a){"use strict";a("70a9")}});
//# sourceMappingURL=index.27d6cfbe.js.map