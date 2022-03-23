(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(7464)}])},7464:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return v}});var t=s(5893),n=function(e){var a=e.children,s=e.darkMode,n=e.className;return(0,t.jsx)("button",{"aria-label":"Primary button",className:"px-6 py-4 rounded-md border-solid border-2 transition-colors \n                            ".concat(s?"border-violet-300 hover:bg-indigo-800":"border-gray-600 hover:bg-gray-200 font-bold"," ").concat(n),children:(0,t.jsxs)("p",{className:"leading-none ",children:[" ",a," "]})})},r=s(1664),l=s(7294);var i=l.forwardRef((function(e,a){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:a},e),l.createElement("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"}))})),o=function(e){var a=e.darkMode;return(0,t.jsxs)("section",{className:"grow",id:"home",children:[(0,t.jsxs)("h1",{className:"accent-1 text-2xl mb-1 fadeInBottom delay-1 ".concat(a?"":"font-bold"),children:["Hello, ",(0,t.jsx)("span",{children:"my name is"})]}),(0,t.jsx)("h2",{className:"font-bold text-6xl mb-6 fadeInBottom delay-1",children:"Alejandro Mares."}),(0,t.jsx)("h3",{className:"accent-2 text-4xl mb-12 fadeInBottom delay-2",children:"I'm a Full Stack Web Developer."}),(0,t.jsxs)("div",{className:"flex items-center fadeInBottom delay-3 relative",children:[(0,t.jsx)(r.default,{href:"#work",passHref:!0,"aria-label":"Work section",children:(0,t.jsx)("div",{children:(0,t.jsx)(n,{darkMode:a,className:"",children:"Check out my work"})})}),(0,t.jsx)("button",{className:"flex justify-center p-2 ml-4","aria-label":"Open linkedin",children:(0,t.jsx)("a",{href:"https://www.linkedin.com/in/alejandro-mares/",target:"_blank","aria-label":"Go to linkedin",rel:"noreferrer",children:(0,t.jsx)("img",{src:a?"/svgs/linkedin-white.svg":"/svgs/linkedin.svg",alt:"Linkedin logo",width:26,height:26,className:"transition-opacity opacity-70 hover:opacity-100 duration-500"})})}),(0,t.jsx)("button",{className:"flex justify-center p-2","aria-label":"Open github",children:(0,t.jsx)("a",{href:"https://github.com/A1xMares",target:"_blank","aria-label":"Go to github",rel:"noreferrer",children:(0,t.jsx)("img",{src:a?"/svgs/github-white.svg":"/svgs/github.svg",alt:"Github logo",width:24,height:24,className:"transition-opacity opacity-70 hover:opacity-100 duration-300"})})}),(0,t.jsx)("div",{className:"absolute left-0 right-0 flex justify-center -bottom-40",children:(0,t.jsx)(r.default,{href:"#about",passHref:!0,"aria-label":"About section",children:(0,t.jsx)(i,{className:"h-14 cursor-pointer transition-opacity opacity-30 animate-bounce p-2 ".concat(a?"text-white":"text-black")})})})]})]})},c=function(e){var a=e.children,s=e.showedArea,n=(0,l.useState)(!1),r=n[0],i=n[1],o=(0,l.useRef)(null);return(0,l.useEffect)((function(){o.current.getBoundingClientRect().top-s[1]<0&&i(!0)}),[s]),(0,t.jsx)("div",{ref:o,className:"delay-3 ".concat(r?"fadeInBottom":"fadeInUnseen"),children:a})},d=function(e){var a=e.showedArea,s=e.preffix,n=e.text,r=(0,l.useState)(!1),i=r[0],o=r[1],c=(0,l.useRef)(null);return(0,l.useEffect)((function(){c.current.getBoundingClientRect().top-a[1]<0&&o(!0)}),[a]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("h2",{className:"font-bold text-4xl pr-4",children:[(0,t.jsxs)("span",{className:"accent-1 text-xl",children:[s," "]}),n]}),(0,t.jsx)("div",{className:"mt-3 h-1 rounded-md bg-accent-1 transition-all ease-out duration-1000 delay-500\t".concat(i?"w-full":"w-0"),ref:c})]})},m=function(e){var a=e.darkMode,s=e.showedArea,r=(0,l.useState)(0),i=r[0],o=r[1];return(0,t.jsxs)("section",{id:"about",className:"pt-28 -mt-28 relative",children:[(0,t.jsx)("div",{className:"flex items-center mb-6",children:(0,t.jsx)(c,{showedArea:s,children:(0,t.jsx)(d,{showedArea:s,preffix:"01.",text:"About me"})})}),(0,t.jsxs)("div",{className:"pl-8 pr-6 sm:pr-0 relative lg:flex",children:[(0,t.jsxs)("div",{className:"grow",children:[(0,t.jsx)(c,{showedArea:s,children:(0,t.jsxs)("div",{className:"flex mb-4 items-end h-10",children:[(0,t.jsx)("h3",{className:"transition-all cursor-pointer ".concat(0===i?"text-3xl font-bold accent-2":"text-2xl text-gray-500"),onClick:function(){return o(0)},children:"Profile"}),(0,t.jsx)("h3",{className:"ml-8 transition-all cursor-pointer ".concat(1===i?"text-3xl font-bold accent-2":"text-2xl text-gray-500"),onClick:function(){return o(1)},children:"Skills"})]})}),(0,t.jsxs)("div",{className:"relative transition-all duration-500 ".concat(0===i?"h-128 sm:h-72":"h-108 sm:h-56","  lg:h-96 xl:h-96"),children:[(0,t.jsxs)("div",{className:"absolute w-full ".concat(0===i?"fadeInLeft delay-2 z-10 ":"fadeOutLeft"),children:[(0,t.jsx)(c,{showedArea:s,children:(0,t.jsx)("p",{className:"mb-4 ",children:"I always knew that I wanted to work on tech. My story starts at the age of 15 when I wrote my first piece of code in the programming language Pascal and from there I only kept learning until became a professional developer."})}),(0,t.jsx)(c,{showedArea:s,children:(0,t.jsx)("p",{className:"mb-4",children:"After 3.5+ years of professional experience I have build large web projects like ERP's and CRM's, stunning landing pages having experience working in startups and large corporations participating in multi-national teams."})}),(0,t.jsx)(c,{showedArea:s,children:(0,t.jsx)("p",{className:"",children:"Also I'm a frequent participant of all sort of hackathons organized in Guadalajara, MX."})})]}),(0,t.jsx)("div",{className:"absolute w-full ".concat(1===i?"fadeInRight delay-2 z-10":"fadeOutRight"),children:(0,t.jsxs)("div",{className:"sm:flex sm:flex-wrap sm:justify-between",children:[(0,t.jsxs)("div",{className:"",children:[(0,t.jsx)("h4",{className:"font-bold text-xl",children:"Frontend:"}),(0,t.jsxs)("div",{className:"flex items-top mt-2",children:[(0,t.jsxs)("ul",{className:"arrow-list pl-5 w-36 sm:w-32 lg:w-36 xl:w-48",children:[(0,t.jsx)("li",{children:(0,t.jsx)("p",{className:"text-base",children:" HTML & CSS "})}),(0,t.jsx)("li",{children:(0,t.jsx)("p",{className:"text-base",children:" JavaScript "})}),(0,t.jsx)("li",{children:(0,t.jsx)("p",{className:"text-base",children:" TypeScript "})}),(0,t.jsx)("li",{children:(0,t.jsx)("p",{className:"text-base",children:" Es / RxJS "})}),(0,t.jsx)("li",{children:(0,t.jsx)("p",{className:"text-base",children:" Bootstrap "})}),(0,t.jsx)("li",{children:(0,t.jsx)("p",{className:"text-base",children:" Tailwind "})})]}),(0,t.jsxs)("ul",{className:"arrow-list pl-5 ml-6 sm:ml-2 lg:ml-6 xl:ml-8",children:[(0,t.jsx)("li",{children:(0,t.jsx)("p",{className:"text-base",children:" Angular "})}),(0,t.jsx)("li",{children:(0,t.jsx)("p",{className:"text-base",children:" React.js "})}),(0,t.jsx)("li",{children:(0,t.jsx)("p",{className:"text-base",children:" Next.js "})}),(0,t.jsx)("li",{children:(0,t.jsx)("p",{className:"text-base",children:" jQuery "})}),(0,t.jsx)("li",{children:(0,t.jsx)("p",{className:"text-base",children:" Three.js "})})]})]})]}),(0,t.jsxs)("div",{className:" mt-4 sm:mt-0 lg:mt-4",children:[(0,t.jsx)("h4",{className:"font-bold text-xl",children:"Backend & Arch:"}),(0,t.jsxs)("div",{className:"flex items-top mt-2",children:[(0,t.jsxs)("ul",{className:"arrow-list pl-5 w-36 sm:w-32 lg:w-36 xl:w-48",children:[(0,t.jsx)("li",{children:(0,t.jsx)("p",{className:"text-base",children:" Rest APIs "})}),(0,t.jsx)("li",{children:(0,t.jsx)("p",{className:"text-base",children:" NodeJs "})}),(0,t.jsx)("li",{children:(0,t.jsx)("p",{className:"text-base",children:" Express.js "})}),(0,t.jsx)("li",{children:(0,t.jsx)("p",{className:"text-base",children:" AWS Ec2 "})}),(0,t.jsx)("li",{children:(0,t.jsx)("p",{className:"text-base",children:" Ubuntu CLI "})})]}),(0,t.jsxs)("ul",{className:"arrow-list pl-5 ml-6 sm:ml-2 lg:ml-6 xl:ml-8",children:[(0,t.jsx)("li",{children:(0,t.jsx)("p",{className:"text-base",children:" MongoDB "})}),(0,t.jsx)("li",{children:(0,t.jsx)("p",{className:"text-base",children:" SQL query "})}),(0,t.jsx)("li",{children:(0,t.jsx)("p",{className:"text-base",children:" json / xml "})}),(0,t.jsx)("li",{children:(0,t.jsx)("p",{className:"text-base",children:" NgInx "})}),(0,t.jsx)("li",{children:(0,t.jsx)("p",{className:"text-base",children:" Git "})})]})]})]})]})})]})]}),(0,t.jsxs)("div",{className:"lg:mt-11",children:[(0,t.jsx)("div",{className:"w-100 flex justify-center",children:(0,t.jsx)("div",{className:"w-36 mr-4 lg:mr-0 -mt-5 sm:mt-4 lg:ml-9 xl:w-44",children:(0,t.jsx)(c,{showedArea:s,children:(0,t.jsx)("img",{src:"/img/profile-min.webp",alt:"Linkedin logo",width:250,height:250,className:"rounded-lg"})})})}),(0,t.jsx)("div",{className:"w-100 flex justify-center mr-4 lg:mr-0 mt-4 lg:ml-9",children:(0,t.jsx)(c,{showedArea:s,children:(0,t.jsx)("a",{href:"https://drive.google.com/file/d/1tusWA4O10eeyqRBZ_SZnxgLqBfQWadHR/view?usp=sharing",target:"_blank",rel:"noreferrer","aria-label":"Resume link",children:(0,t.jsx)(n,{darkMode:a,className:"w-36 xl:w-44",children:"Resume"})})})})]})]})]})},h=function(e){e.darkMode;var a=e.showedArea,s=(0,l.useState)(0),n=s[0],r=s[1],i=(0,l.useState)(0),o=i[0],m=i[1],h=function(e){r(e),setTimeout((function(){m(e)}),300)};return(0,t.jsxs)("section",{id:"experience",className:"pt-28",children:[(0,t.jsx)("div",{className:"flex items-center mb-6",children:(0,t.jsx)(c,{showedArea:a,children:(0,t.jsx)(d,{showedArea:a,preffix:"02.",text:"Experience"})})}),(0,t.jsx)("div",{className:"pl-8 pt-4 relative",children:(0,t.jsx)(c,{showedArea:a,children:(0,t.jsxs)("div",{className:"flex justify-center flex-col h-experience box-border ",children:[(0,t.jsxs)("div",{className:"h-full basis-1 transition-all duration-300 ease-out ".concat(0===n?"grow":""),id:"Bosch",children:[(0,t.jsxs)("h3",{onClick:function(){return h(0)},className:"text-2xl cursor-pointer h-10  ".concat(0===n?"font-bold":""),children:["Web dev at"," ",(0,t.jsx)("a",{href:"https://www.bosch.com/",target:"_blank",rel:"noreferrer","aria-label":"Go to bosch",className:"accent-2 underline hover:underline-offset-2",children:"Bosch"})]}),(0,t.jsx)("div",{className:0===n?"":"absolute hidden",children:(0,t.jsxs)("div",{className:"".concat(0===o?"h-full":"h-0 overflow-hidden"),children:[(0,t.jsx)("p",{className:"text-sm accent-1 ".concat(0===o?"fadeInBottom":"fadeInUnseen"),children:"Sep 2020 \u2014 Present"}),(0,t.jsx)("p",{className:"text-base mt-2 ".concat(0===o?"fadeInBottom":"fadeInUnseen"),children:"Worked as a remote developer in a corporate IT team, managed from the USA using SCRUM methodology."}),(0,t.jsxs)("ul",{className:"arrow-list pl-8 mt-4",children:[(0,t.jsx)("li",{className:"delay-1 ".concat(0===o?"fadeInBottom":"fadeInUnseen"),children:(0,t.jsxs)("p",{className:"text-base",children:[(0,t.jsx)("strong",{children:"ITSM DASH,"})," developed an internal project to improve Bosch's Support Agents performance, enabling a smart search of support articles as well as ticket raising forms. Used React.js for front-end and Node.js, Express.js for back-end querying SQL databases."]})}),(0,t.jsx)("li",{className:"mt-4 delay-2 ".concat(0===o?"fadeInBottom":"fadeInUnseen"),children:(0,t.jsxs)("p",{className:"text-base",children:[(0,t.jsx)("strong",{children:"IT Service Portal,"})," developed new modules and performed maintenance of a long term internal web-app with a 400k+ user base. Used Backbone.js, jQuery for front-end and JSPs to query SQL databases."]})}),(0,t.jsx)("li",{className:"mt-4 delay-3 ".concat(0===o?"fadeInBottom":"fadeInUnseen"),children:(0,t.jsxs)("p",{className:"text-base",children:[(0,t.jsx)("strong",{children:"Level 3 support,"})," provided level 3 technical support to advanced users."]})})]})]})})]}),(0,t.jsxs)("div",{className:" h-full basis-1 transition-all duration-300 ease-out ".concat(1===n?"grow":""),id:"Adroit",children:[(0,t.jsxs)("h3",{onClick:function(){return h(1)},className:"text-2xl cursor-pointer h-10 whitespace-nowrap ".concat(1===n?"font-bold":""),children:["Web dev at"," ",(0,t.jsx)("a",{href:"https://adroitoverseas.com/",target:"_blank",rel:"noreferrer","aria-label":"Go to adroit",className:"accent-2 underline hover:underline-offset-2",children:"Adroit"})]}),(0,t.jsx)("div",{className:1===n?"":"absolute hidden",children:(0,t.jsxs)("div",{className:"".concat(1===o?"h-full":"h-0 overflow-hidden"),children:[(0,t.jsx)("p",{className:"text-sm accent-1 ".concat(1===o?"fadeInBottom":"fadeInUnseen"),children:"Nov 2019 \u2014 Sep 2020"}),(0,t.jsx)("p",{className:"text-base mt-2 ".concat(1===o?"fadeInBottom":"fadeInUnseen"),children:"Worked as a remote developer for a Canadian agro commodities export company. Founder member of internal tech department."}),(0,t.jsxs)("ul",{className:"arrow-list pl-8 mt-4",children:[(0,t.jsx)("li",{className:"delay-1 ".concat(1===o?"fadeInBottom":"fadeInUnseen"),children:(0,t.jsxs)("p",{className:"text-base",children:[(0,t.jsx)("strong",{children:"Internal CRM,"})," improved overall UI/UX developing new modules to extend functionality. Worked with Angular 7 and Material Design."]})}),(0,t.jsx)("li",{className:"mt-4 delay-2 ".concat(1===o?"fadeInBottom":"fadeInUnseen"),children:(0,t.jsxs)("p",{className:"text-base",children:[(0,t.jsx)("strong",{children:"Internal ERP,"})," scaled the aforementioned CRM to an ERP developing new modules and business logic to manage 6 company departments like sales, logistics, customers, many roles each department. Scaled Angular from version 7 to versions 9. Used Node, LoopBack and Mongo."]})}),(0,t.jsx)("li",{className:"mt-4 delay-3 ".concat(1===o?"fadeInBottom":"fadeInUnseen"),children:(0,t.jsxs)("p",{className:"text-base",children:[(0,t.jsx)("strong",{children:"Level 3 support,"})," provided technical support to users located in Canada."]})})]})]})})]}),(0,t.jsxs)("div",{className:" h-full basis-1 transition-all duration-300 ease-out ".concat(2===n?"grow":""),id:"Aleate",children:[(0,t.jsxs)("h3",{onClick:function(){return h(2)},className:"text-2xl cursor-pointer h-10 ".concat(2===n?"font-bold":""),children:["Web dev at"," ",(0,t.jsx)("a",{href:"https://www.aleate.com/",target:"_blank",rel:"noreferrer","aria-label":"Go to aleate",className:"accent-2 underline hover:underline-offset-2",children:"Aleate"})]}),(0,t.jsx)("div",{className:2===n?"":"absolute hidden",children:(0,t.jsxs)("div",{className:"".concat(2===o?"h-auto":"h-0 overflow-hidden"),children:[(0,t.jsx)("p",{className:"text-sm accent-1 ".concat(2===o?"fadeInBottom":"fadeInUnseen"),children:"Aug 2018 \u2014 Oct 2019"}),(0,t.jsx)("p",{className:"text-base mt-2 ".concat(2===o?"fadeInBottom":"fadeInUnseen"),children:"Worked locally being responsible of the front-end development of many projects and contributing with design team."}),(0,t.jsxs)("ul",{className:"arrow-list pl-8 mt-4",children:[(0,t.jsx)("li",{className:"delay-1 ".concat(2===o?"fadeInBottom":"fadeInUnseen"),children:(0,t.jsxs)("p",{className:"text-base",children:[(0,t.jsx)("strong",{children:"Aleate's website,"})," developed the first version of the Aleate's current website proposing and implementing an interactive 3D environment to deliver an outstanding UX."," ",(0,t.jsx)("a",{href:"https://www.aleate.com/",target:"_blank",rel:"noreferrer","aria-label":"Go to aleate",className:"accent-2 underline hover:underline-offset-2",children:"View Project."})]})}),(0,t.jsx)("li",{className:"mt-4 delay-2 ".concat(2===o?"fadeInBottom":"fadeInUnseen"),children:(0,t.jsxs)("p",{className:"text-base",children:[(0,t.jsx)("strong",{children:"Adroit Overseas's internal CRM,"})," ","developed the 1st version of a CRM with large amount of CRUDs, charts and maps for data visualization."]})}),(0,t.jsx)("li",{className:"mt-4 delay-3 ".concat(2===o?"fadeInBottom":"fadeInUnseen"),children:(0,t.jsxs)("p",{className:"text-base",children:[(0,t.jsx)("strong",{children:"Megadulces's internal ERP,"})," ","developed the 1st version of an ERP to manage the company process's from manufacturing, distribution, reporting and quality assurance."]})})]})]})})]}),(0,t.jsxs)("div",{className:" h-full basis-1 transition-all duration-300 ease-out ".concat(3===n?"grow":""),id:"Freelance",children:[(0,t.jsx)("h3",{onClick:function(){return h(3)},className:"text-2xl cursor-pointer h-10 ".concat(3===n?"font-bold":""),children:"Freelance dev"}),(0,t.jsx)("div",{className:3===n?"":"absolute hidden",children:(0,t.jsxs)("div",{className:"".concat(3===o?"h-full":"h-0 overflow-hidden"),children:[(0,t.jsx)("p",{className:"text-sm accent-1 ".concat(3===o?"fadeInBottom":"fadeInUnseen"),children:"Jan 2019 \u2014 Present"}),(0,t.jsx)("p",{className:"text-base mt-2 ".concat(3===o?"fadeInBottom":"fadeInUnseen"),children:"Worked as a remote developer in a corporate IT team, managed from the USA using SCRUM methodology."}),(0,t.jsxs)("ul",{className:"arrow-list pl-8 mt-4",children:[(0,t.jsx)("li",{className:"delay-1 ".concat(3===o?"fadeInBottom":"fadeInUnseen"),children:(0,t.jsxs)("p",{className:"text-base",children:[(0,t.jsx)("strong",{children:"Unisun's CRM,"})," developed the 1st version of an internal CRM for an online school to manage the student base, its payment dues and organize online classrooms."]})}),(0,t.jsx)("li",{className:"mt-4 delay-2 ".concat(3===o?"fadeInBottom":"fadeInUnseen"),children:(0,t.jsxs)("p",{className:"text-base",children:[(0,t.jsx)("strong",{children:"Grid's landing page"}),", developed the landing page of a Mexican company in a very limited time frame (2 days)."," ",(0,t.jsx)("a",{href:"https://www.gridcompany.com.mx/",target:"_blank",rel:"noreferrer","aria-label":"Go to grid",className:"accent-2 underline hover:underline-offset-2",children:"View Project."})]})}),(0,t.jsx)("li",{className:"mt-4 delay-3 ".concat(3===o?"fadeInBottom":"fadeInUnseen"),children:(0,t.jsxs)("p",{className:"text-base",children:[(0,t.jsx)("strong",{children:"Integreat's website"}),", developed the current website of an European consulting company, developing 15+ pages and implementing internationalization of 6 languages."," ",(0,t.jsx)("a",{href:"https://integreat.com/es/inicio",target:"_blank",rel:"noreferrer","aria-label":"Go to integreat",className:"accent-2 underline hover:underline-offset-2",children:"View Project."})]})})]})]})})]})]})})})]})};var x=l.forwardRef((function(e,a){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:a},e),l.createElement("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"}))}));var p=l.forwardRef((function(e,a){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:a},e),l.createElement("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"}))}));var u=l.forwardRef((function(e,a){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:a},e),l.createElement("path",{d:"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"}),l.createElement("path",{d:"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"}))})),g=function(e){var a=e.darkMode,s=e.project,n=(0,l.useState)(0),r=n[0],i=n[1];return(0,t.jsxs)("div",{className:"transition-all h-108 w-full rounded-2xl border  hover:shadow-md overflow-hidden flex flex-col ".concat(a?"dark-back-op ":"bg-gray-100 border-gray-200"),children:[(0,t.jsxs)("div",{className:"h-48 sm:h-36 xl:h-44 relative ".concat(a?"bg-gray-800":"bg-gray-200"),children:[(0,t.jsx)("img",{src:s.gallery[r],alt:s.title,className:"card-img"}),(0,t.jsx)("div",{className:"absolute left-3 -bottom-3 rounded-full shadow ".concat(a?"bg-slate-800 border border-gray-500":"bg-white"),onClick:function(){r>0&&i(r-1)},children:(0,t.jsx)(x,{className:"h-6 cursor-pointer opacity-100 accent-2"})}),(0,t.jsx)("div",{className:"absolute right-3 -bottom-3 rounded-full shadow ".concat(a?"bg-slate-800 border border-gray-500":"bg-white"),onClick:function(){r<s.gallery.length-1&&i(r+1)},children:(0,t.jsx)(p,{className:"h-6 cursor-pointer opacity-100 accent-2"})})]}),(0,t.jsxs)("div",{className:"pt-5 pb-5 px-4 flex flex-col justify-between grow",children:[(0,t.jsxs)("div",{className:"grow h-full",children:[(0,t.jsx)("div",{className:"flex justify-between",children:(0,t.jsx)("h3",{className:"font-bold text-lg accent-1",children:s.title})}),(0,t.jsx)("p",{className:"accent-2 text-xs",children:s.date}),(0,t.jsx)("p",{className:"mt-2 text-sm h-20",children:s.description}),(0,t.jsx)("div",{className:"mt-4",children:(0,t.jsx)("p",{className:"text-xs font-bold",children:s.tags.map((function(e,a){return(0,t.jsxs)("span",{children:[e,a!==s.tags.length-1?" \xb7 ":""]},a)}))})})]}),(0,t.jsxs)("div",{className:"flex items-bottom justify-end",children:[""!==s.githubLink&&(0,t.jsx)("a",{href:s.githubLink,target:"_blank",rel:"noreferrer","aria-label":"Go to github",className:"max-h-6 h-6 flex",children:(0,t.jsx)("img",{src:a?"/svgs/github-white.svg":"/svgs/github.svg",alt:"Github logo",width:20,height:20})}),""!==s.url&&(0,t.jsx)("a",{href:s.url,target:"_blank",rel:"noreferrer","aria-label":s.title,children:(0,t.jsx)(u,{"aria-label":s.title,className:"h-6 ml-2 cursor-pointer transition-opacity ".concat(a?"text-white":"text-black")})})]})]})]})},f=[{title:"Integreat Website",date:"Freelance project worked in 2021",description:"Landing page of a Mexican software company. Stunning space environment in 3D. Vanilla javascript. Customrouter.",tags:["Three.js","SEO","HTML","CSS","JS"],gallery:["/img/integreat/erpsolutions-min.webp","/img/integreat/whyus-min.webp","/img/integreat/footer-min.webp"],githubLink:"",url:"https://integreat.com/en/home"},{title:"Adroit ERP Web App",date:"While I was working for Adroit in 2020",description:"ERP to manage 6 departments of the company. Focused in logistics. Extensive qty of cruds and visualization modules",tags:["Angular 9","TS","SCSS","REST APIs"],gallery:["/img/adroit-erp/erp3-min.webp","/img/adroit-erp/erp1-min.webp","/img/adroit-erp/erp2-min.webp","/img/adroit-erp/erp4-min.webp"],githubLink:"",url:""},{title:"Unisun CRM Web App",date:"Freelance project worked in 2020",description:"CRM for an online school. Focused in manage the student payment dues, prepared to manage many campuses.",tags:["Angular 9","TS","SCSS","REST APIs"],gallery:["/img/unisun/unisun2-min.webp","/img/unisun/unisun1-min.webp","/img/unisun/unisun3-min.webp"],githubLink:"",url:""},{title:"Grid Landing",date:"Freelance project worked in 2020",description:"Landing page of a Mexican software company. Stunning space environment in 3D. Vanilla javascript. Customrouter.",tags:["HTML","CSS","JS"],gallery:["/img/grid/grid1-min.webp","/img/grid/grid2-min.webp","/img/grid/grid3-min.webp"],githubLink:"",url:"https://www.aleate.com/"},{title:"Aleate Website",date:"While I was working for Aleate in 2019",description:"Landing page of a Mexican software company. Stunning space environment in 3D. Vanilla javascript. Customrouter.",tags:["Three.js","HTML","CSS","JS"],gallery:["/img/aleate/aleate1-min.webp","/img/aleate/aleate2-min.webp","/img/aleate/aleate3-min.webp"],githubLink:"",url:"https://www.aleate.com/"},{title:"Adroit CRM",date:"While I was working for Aleate in 2019",description:"CRM to manage clients and its products, leads, deals (Commodity trading). Many roles, cruds, charts and maps.",tags:["Angular 7","TS","SCSS","REST APIs"],gallery:["/img/adroit-crm/crm1-min.webp","/img/adroit-crm/crm2-min.webp","/img/adroit-crm/crm3-min.webp"],githubLink:"",url:""},{title:"Megadulces ERP",date:"While I was working for Aleate in 2018",description:"ERP to manage 7 departments. Focused in storage and payments. Extensive qty of cruds. Supply routes designer.",tags:["Angular 6","TS","CSS","REST APIs"],gallery:["/img/megadulces/megadulces1-min.webp","/img/megadulces/megadulces2-min.webp"],githubLink:"",url:""}],j=function(e){var a=e.darkMode,s=e.showedArea;return(0,t.jsxs)("section",{id:"work",className:"pt-28",children:[(0,t.jsx)("div",{className:"flex items-center mb-6",children:(0,t.jsx)(c,{showedArea:s,children:(0,t.jsx)(d,{showedArea:s,preffix:"03.",text:"Work I've done"})})}),(0,t.jsx)("div",{className:"px-0",children:(0,t.jsx)("div",{className:"grid gap-7 grid-cols-1 sm:grid-cols-2 pt-4",children:f.map((function(e,n){return(0,t.jsx)(c,{showedArea:s,children:(0,t.jsx)(g,{darkMode:a,project:e})},n)}))})})]})},w=function(e){var a=e.darkMode,s=e.showedArea;return(0,t.jsxs)("section",{id:"contact",className:"pt-28",children:[(0,t.jsx)("div",{className:"flex items-center mb-6",children:(0,t.jsx)(c,{showedArea:s,children:(0,t.jsx)(d,{showedArea:s,preffix:"04.",text:"Contact me!"})})}),(0,t.jsxs)("div",{className:"pl-8",children:[(0,t.jsx)(c,{showedArea:s,children:(0,t.jsx)("p",{className:"",children:"If you think I can help you or your organization, feel free to send me an email. I will be answering soon."})}),(0,t.jsx)("div",{className:"w-100 flex justify-center mt-9 mb-9",children:(0,t.jsx)(c,{showedArea:s,children:(0,t.jsx)("a",{href:"mailto:aljorc16@gmail.com?subject=Hello",target:"_blank",rel:"noreferrer","aria-label":"Email me",children:(0,t.jsx)(n,{darkMode:a,className:"w-36",children:"Email Me"})})})})]})]})},b=s(9008);var v=function(e){var a=e.darkMode,s=e.showedArea;return e.scrollY,(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(b.default,{children:[(0,t.jsx)("title",{children:"AlxMares | Web Developer"}),(0,t.jsx)("meta",{name:"description",content:"Alejandro Mares is a doftware developer specialized in Full Stack Web Development, having 3.5+ years of experience working in large projects."}),(0,t.jsx)("meta",{property:"og:title",content:"AlxMares | Web Developer"},"title"),(0,t.jsx)("meta",{property:"og:type",content:"website"}),(0,t.jsx)("meta",{property:"og:url",content:"https://www.alxmares.com/"}),(0,t.jsx)("meta",{property:"og:site_name",content:"Alejandro Mares | Web Developer"}),(0,t.jsx)("meta",{property:"og:description",content:"Alejandro Mares is a doftware developer specialized in Full Stack Web Development, having 3.5+ years of experience working in large projects."}),(0,t.jsx)("meta",{property:"og:image",content:"https://www.gridcompany.com.mx/index.jpg"}),(0,t.jsx)("meta",{property:"og:image:secure_url",content:"https://www.alxmares.com/"}),(0,t.jsx)("meta",{property:"og:image:type",content:"image/jpg"}),(0,t.jsx)("meta",{property:"og:image:alt",content:"Inicio portafolio"}),(0,t.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,t.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,t.jsx)("meta",{name:"twitter:site",content:"@Alxmres"}),(0,t.jsx)("meta",{name:"twitter:creator",content:"@Alxmres"}),(0,t.jsx)("meta",{name:"keywords",content:"alejandro mares, alxmares, alx mares, web development, full stack, remote developer, angular developer, react developer"}),(0,t.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico"})]}),(0,t.jsx)("div",{className:"px-6 h-screen pb-20 flex items-center w-100 m-auto max-w-sm sm:max-w-xl xl:max-w-2xl",children:(0,t.jsx)(o,{darkMode:a})}),(0,t.jsx)("div",{className:"px-6 mb-20 sm:mb-48 m-auto max-w-sm sm:max-w-xl xl:max-w-2xl",children:(0,t.jsx)(m,{darkMode:a,showedArea:s})}),(0,t.jsx)("div",{className:"px-6 mb-10 sm:mb-40 m-auto max-w-sm sm:max-w-xl xl:max-w-2xl",children:(0,t.jsx)(h,{darkMode:a,showedArea:s})}),(0,t.jsx)("div",{className:"px-6 mb-10 sm:mb-40 m-auto max-w-sm sm:max-w-xl xl:max-w-2xl",children:(0,t.jsx)(j,{darkMode:a,showedArea:s})}),(0,t.jsx)("div",{className:"px-6 mb-40 m-auto max-w-sm sm:max-w-xl xl:max-w-2xl",children:(0,t.jsx)(w,{darkMode:a,showedArea:s})})]})}},9008:function(e,a,s){e.exports=s(5443)}},function(e){e.O(0,[774,888,179],(function(){return a=5301,e(e.s=a);var a}));var a=e.O();_N_E=a}]);