(this["webpackJsonpmarktanrj.github.io"]=this["webpackJsonpmarktanrj.github.io"]||[]).push([[4],{137:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var i=a(138),r=a.n(i),n=a(139),o=a.n(n),s=a(140),l=a.n(s),c=a(141),d=a.n(c),m=a(142),p=a.n(m),u=a(143),h=a.n(u),g=a(144),b=a.n(g),f={vulnerabilityprediction:{id:"vulnerabilityprediction",title:"Vulnerability Prediction Scoring",cardDescription:"Final Year Project",cardChips:["React","Flask","MySQL"],cardImage:h.a,allChips:["React","Redux Thunk","Material UI","Chart.js","Flask","SQLAlchemy","GCP CloudSQL MSQL","Pandas"],details:[{header:"Project Type",text:"IS483 - IS Application Project (Final Year Project with real client). 5-person group project"},{header:"Project Date",text:"June - December 2020"},{header:"Description",text:"Vulnerability prediction scoring webapp that allow users to input CVE, tags and/or vendors and output probability of exploitation with analysis. Features CVE search from webscraped sources, dashboard for data visualization, and file upload for CRUD functionalities."},{header:"Contributions",text:["Assisted with planning of app's architecture","Created MySQL database with GCP CloudSQL, integrated with Flask using SQLAlchemy","Integrated backend APIs with React app, used Redux Thunk for asyncronous code","Made frontend dynamic and wrote clean code with high reusability using HOC, pure components","Implemented fuzzysort for CVE search functionality","Created API documentation page using Redocs","Created file upload feature using React Dropzone and validate form with Joi","Webscraped various vulnerability websites using BeautifulSoup","Webscraped Twitter using Selenium Python","Experimented and built LightGBM machine learning model"]}],detailsMedia:[b.a,h.a]},personalportfolio:{id:"personalportfolio",title:"Portfolio Website",cardDescription:"Showcase my projects",cardChips:["React","Framer Motion"],cardGif:p.a,cardImage:d.a,allChips:["React","Framer Motion","Github Pages","CloudFlare"],details:[{header:"Website Creation",text:"October 2020"},{header:"Motivation/Description",text:"This website was built to showcase my personal projects. Also, to learn about the framer motion framework, and hosting on Github Pages with CloudFlare CDN"}],buttons:{"Github Repo":{url:"https://github.com/marktanrj/marktanrj.github.io",theme:"primary"}},detailsMedia:[p.a]},udemycourse:{id:"udemycourse",title:"Udemy Course (Telegram Bots)",cardDescription:"5.5 hours of tutorial building Telegram bots with Javascript and Node.js",cardChips:["Node.js","JavaScript","Telegraf"],cardGif:o.a,cardImage:r.a,allChips:["Node.js","JavaScript","Telegraf","AWS Lambda"],details:[{header:"Project Type",text:"Side Hustle. Individual"},{header:"Course Creation",text:"November - December 2019"},{header:"Motivation",text:"Prior to making the course, I have been developing Telegram bots for a year to learn about Node.js and JavaScript. I decided to challenge myself and create a course with the knowledge I have as a small side-hustle."},{header:"Description",text:"2 months were spent planning, recording of screen with voice-over, and editing videos. The course has 5.5 hours of video content to teach students how to build Telegram bots using JavaScript and the Telegraf framework. After 12 months, the course has enrolled over 5200 students with a peak rating of 4.8 stars on Udemy."}],buttons:{"Udemy Link":{url:"https://www.udemy.com/course/build-telegram-bots-with-javascript-the-complete-guide/",theme:"primary"}},detailsMedia:[o.a]},memetelegrambot:{id:"memetelegrambot",title:"Meme Telegram Bot",cardDescription:"Generate memes directly in Telegram Chats",cardChips:["Node.js","AWS Lambda","Telegraf","Jimp"],allChips:["Node.js","AWS Lambda","Telegraf","Jimp"],cardGif:"https://i.imgur.com/YUjoAax.gif",cardImage:l.a,details:[{header:"Description",text:"This Telegram bot allows users to input text messages, and output generated memes images directly in Telegram Chats."}],buttons:{"Telegram Bot Link ":{url:"https://t.me/themememakerbot",theme:"primary"}},detailsMedia:["https://i.imgur.com/YUjoAax.gif"]}}},138:function(e,t,a){e.exports=a.p+"static/media/udemyIcon.4911145c.png"},139:function(e,t,a){e.exports=a.p+"static/media/udemy.14eadaa6.gif"},140:function(e,t,a){e.exports=a.p+"static/media/meme.e4aa8bce.jpg"},141:function(e,t,a){e.exports=a.p+"static/media/portfolio.8c6b0966.png"},142:function(e,t,a){e.exports=a.p+"static/media/portfolio.5e9ce0cf.gif"},143:function(e,t,a){e.exports=a.p+"static/media/vulnpredscoring.ae121e47.jpg"},144:function(e,t,a){e.exports=a.p+"static/media/vulnarchitecture.c6ad1ebb.jpg"},152:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return v}));var i=a(59),r=a(0),n=a.n(r),o=a(51),s=a(137),l=a(128),c=a(148),d=a(129),m=a(153),p=a(34),u=a(150),h=a(131),g=a(15),b=a(149),f=a.n(b),y=a(24),x={hidden:{opacity:0,x:"100vw"},visible:{opacity:1,x:0,transition:{type:"spring",mass:.4,damping:8,when:"beforeChildren",staggerChildren:.4}},exit:{x:"100vw",transition:{ease:"easeInOut"}}};function v(e){var t=e.match,a=Object(r.useState)(s.a[t.params.id]),b=Object(i.a)(a,1)[0],v=Object(g.a)(),w=Object(h.a)(v.breakpoints.up("sm")),C=n.a.createElement(l.a,{item:!0,md:5},b.detailsMedia&&b.detailsMedia.map((function(e,t){return n.a.createElement("img",{key:t,src:e,alt:"project-media",style:w?{maxWidth:"600px",maxHeight:"400px",marginTop:"10px"}:{width:"100%",maxHeight:"400px",marginTop:"10px"}})})));return n.a.createElement(o.b.div,{variants:x,initial:"hidden",animate:"visible",exit:"exit"},n.a.createElement(c.a,null,n.a.createElement(l.a,{container:!0,spacing:2},n.a.createElement(l.a,{item:!0,container:!0,xs:12},n.a.createElement(l.a,{item:!0,xs:12,md:1},n.a.createElement(d.a,{component:y.b,to:"/",variant:"outlined",color:"primary",startIcon:n.a.createElement(f.a,null),style:{borderWidth:"2px"}},"Back")),n.a.createElement(l.a,{item:!0,xs:12,md:10},n.a.createElement("h2",null,b&&b.title)),n.a.createElement(l.a,{item:!0,xs:12,md:1})),n.a.createElement(l.a,{item:!0,xs:12},b&&b.buttons&&Object.entries(b.buttons).map((function(e){var t=Object(i.a)(e,2),a=t[0],r=t[1];return n.a.createElement(d.a,{component:"a",href:r.url,target:"_blank",variant:"contained",color:r.theme,key:a},a)}))),!w&&C,n.a.createElement(l.a,{item:!0,container:!0,xs:12},n.a.createElement(l.a,{item:!0,md:7,xs:12},n.a.createElement(m.a,{textAlign:"left"},b&&b.allChips&&n.a.createElement(n.a.Fragment,null,n.a.createElement(p.a,{variant:"h6",style:{fontWeight:"bold"}},"Technology Stack"),b.allChips.map((function(e){return n.a.createElement(u.a,{key:e,label:e,color:"primary",style:{marginRight:"5px",marginTop:"5px",fontWeight:"bold",fontSize:"13px"}})}))),b&&b.details&&b.details.map((function(e){return n.a.createElement(n.a.Fragment,{key:e.header},n.a.createElement(p.a,{variant:"h6",style:{fontWeight:"bold",marginTop:"10px"}},e.header),Array.isArray(e.text)?n.a.createElement(p.a,{variant:"body1"},e.text.map((function(e){return n.a.createElement("li",{key:e},e)}))):n.a.createElement(p.a,{variant:"body1"},e.text))})))),w&&C))))}}}]);
//# sourceMappingURL=4.eff468ae.chunk.js.map