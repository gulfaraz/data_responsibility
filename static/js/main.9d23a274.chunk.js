(this.webpackJsonpdata_responsibility=this.webpackJsonpdata_responsibility||[]).push([[0],{30:function(e,t,a){e.exports=a(52)},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(23),r=a.n(l),o=a(1),i=a(2),c=a(4),m=a(3),u=a(5),d=a(10),h=a(11),p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).toggle_side_menu=function(){a.setState({side_menu:a.state.side_menu?"":" is-active"})},a.state={side_menu:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement("a",{className:"navbar-item",href:"https://www.510.global/"},s.a.createElement("img",{src:"510-logo.png",alt:"www.510.global",width:"74",height:"24.75"})),s.a.createElement("span",{role:"button",className:"navbar-burger burger"+this.state.side_menu,"aria-label":"menu","aria-expanded":"false","data-target":"side-menu",onClick:this.toggle_side_menu},s.a.createElement("span",{"aria-hidden":"true"}),s.a.createElement("span",{"aria-hidden":"true"}),s.a.createElement("span",{"aria-hidden":"true"}))),s.a.createElement("div",{id:"side-menu",className:"navbar-menu"+this.state.side_menu},s.a.createElement("div",{className:"navbar-start"},s.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},s.a.createElement("span",{className:"navbar-link"},"Data Responsibility"),s.a.createElement("div",{className:"navbar-dropdown"},s.a.createElement(d.b,{className:"navbar-item",to:"/"},"The Need for Data Responsibility"),s.a.createElement(d.b,{className:"navbar-item",to:"/dr"},"Calculate D.R. Score"),s.a.createElement(d.b,{className:"navbar-item",to:"/glossary"},"Glossary"),s.a.createElement(d.b,{className:"navbar-item",to:"/feedback"},"Feedback"))))))}}]),t}(s.a.Component),v=a(26),E=function(e,t){var a;return function(t){clearTimeout(a),a=setTimeout((function(t){a=null,e()}),100)}}(a.n(v).a),b=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){E(),window.addEventListener("resize",E)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",E)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("section",{className:"container has-text-centered"},s.a.createElement(d.b,{className:"button is-primary is-outlined is-large is-fullwidth",to:"/dr"},"Calculate D.R. Score")),s.a.createElement("section",{className:"hero"},s.a.createElement("div",{className:"hero-body"},s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"title"},"The Need for Data Responsibility")))),s.a.createElement("div",{className:"container"},s.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),s.a.createElement("img",{className:"components-image",alt:"Components of an A.I. project - Data, Model and Deploy",src:"components.png",useMap:"#component-image-map"}),s.a.createElement("map",{name:"component-image-map"},s.a.createElement("area",{shape:"rect",coords:"100, 70, 458, 430",alt:"Data",href:"#/fact/data"}),s.a.createElement("area",{shape:"rect",coords:"565, 70, 923, 430",alt:"Model",href:"#/fact/model"}),s.a.createElement("area",{shape:"rect",coords:"1030, 70, 1388, 430",alt:"Deploy",href:"#/fact/deploy"})),s.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")))}}]),t}(s.a.Component),f=a(29),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={danger_threshold:a.props.danger_threshold||30,success_threshold:a.props.success_threshold||70},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"color_class",value:function(){return this.props.score_value<this.state.danger_threshold||"<30"===this.props.score_value?"has-background-danger":this.props.score_value>this.state.success_threshold||">70"===this.props.score_value?"has-background-success":"has-background-warning"}},{key:"advice",value:function(){return this.props.score_value<this.state.danger_threshold||"<30"===this.props.score_value?"Keep going":this.props.score_value>this.state.success_threshold||">70"===this.props.score_value?"Doing great!":"Getting there"}},{key:"render",value:function(){return s.a.createElement("div",{className:"level-item has-text-centered"},s.a.createElement("div",{className:"has-tooltip-bottom","data-tooltip":"legend"===this.props.label?"What do the colours mean?":this.advice()},this.props.label?"legend"===this.props.label?s.a.createElement("p",{className:"heading round-score-heading has-text-white"},this.advice()):s.a.createElement("p",{className:"heading round-score-heading has-text-white"},this.props.label):s.a.createElement("p",{className:"heading round-score-heading has-text-white"},"Overall"),s.a.createElement("p",{className:"round-score title has-text-white "+this.color_class()},this.props.score_value,"%")))}}]),t}(s.a.Component),y=a(18),w=a.n(y),_=a(27),N=a(15),k=(a(40),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={show_modal:!1,project_name:"",evaluator_name:"",project_comments:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"toggle_modal",value:function(e){this.setState({show_modal:e})}},{key:"update_input_value",value:function(e){var t=this;return function(a){var n={};n[e]=a.target.value,t.setState(n)}}},{key:"render_modal",value:function(){var e=this;return s.a.createElement("div",{className:"modal"+(this.state.show_modal?" is-active":"")},s.a.createElement("div",{className:"modal-background"}),s.a.createElement("div",{className:"modal-card"},s.a.createElement("header",{className:"modal-card-head"},s.a.createElement("p",{className:"modal-card-title"},"Export Responsibility Report"),s.a.createElement("button",{className:"delete","aria-label":"close",onClick:function(){return e.toggle_modal(!1)}})),s.a.createElement("section",{className:"modal-card-body"},s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Project Name",s.a.createElement("span",{className:"has-text-danger"}," *")),s.a.createElement("div",{className:"control"},s.a.createElement("input",{className:"input",type:"text",placeholder:"e.g Alpha Go",value:this.state.project_name,onChange:this.update_input_value("project_name")}))),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Evaluator Name",s.a.createElement("span",{className:"has-text-danger"}," *")),s.a.createElement("div",{className:"control"},s.a.createElement("input",{className:"input",type:"text",placeholder:"e.g. Lee Sedol",value:this.state.evaluator_name,onChange:this.update_input_value("evaluator_name")}))),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Comments"),s.a.createElement("div",{className:"control"},s.a.createElement("textarea",{className:"textarea has-fixed-size",placeholder:"e.g. AlphaGo is a computer program that plays the board game Go.",value:this.state.project_comments,onChange:this.update_input_value("project_comments")})),s.a.createElement("p",{className:"help"},s.a.createElement("span",{className:"has-text-danger"},"*")," ","indicates required fields"))),s.a.createElement("footer",{className:"modal-card-foot"},s.a.createElement("button",{className:"button is-primary",onClick:this.create.bind(this),disabled:!this.state.project_name||!this.state.evaluator_name},s.a.createElement("span",{className:"icon is-medium has-text-white"},s.a.createElement("i",{className:"fas fa-file-download"})),s.a.createElement("span",null,"Download")),s.a.createElement("button",{className:"button",onClick:function(){return e.toggle_modal(!1)}},"Cancel"))))}},{key:"add_title",value:function(e){e.setFontSize(36),e.text("Data Responsibility Report",15,25)}},{key:"add_project_details",value:function(e){e.setFontSize(14),e.autoTable({theme:"grid",margin:{left:15},startY:50,columnStyles:{0:{cellWidth:30},1:{fontStyle:"bold"}},body:[["Project Name",this.state.project_name],["Evaluator Name",this.state.evaluator_name],["Comments",this.state.project_comments]]})}},{key:"add_timestamp",value:function(e){var t=new Date,a=t.toISOString(),n=t.toLocaleString("en-GB");return e.setFontSize(11),e.text("Created on: "+n,17,35),a}},{key:"add_scores",value:function(e){e.setFontSize(24),e.text("D.R. Score: "+this.props.calculate_score(null,null,this.props.questions)+"%",17,95)}},{key:"add_answer_summary",value:function(e,t,a){var n=this;e.setFontSize(14),e.text("Answered "+this.props.questions.filter((function(e){return e.answer.trim()!==n.props.no_answer&&e.answer.trim().length>0})).length+" of "+this.props.questions.length+" questions.",t,a)}},{key:"add_questions",value:function(e,t){var a=this;e.addPage(),e.setFontSize(24),e.text("Questions",15,20),e.setFontSize(14);var n=[];t.map((function(e){return n.push([e.question,a.props.answer_key[e.answer]||e.answer]),e}));e.autoTable({margin:{top:35,left:15},head:[["Question","Answer"]],body:n})}},{key:"post_data",value:function(){var e=Object(_.a)(w.a.mark((function e(){var t,a,n,s=arguments;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:"",a=s.length>1&&void 0!==s[1]?s[1]:{},e.next=4,fetch(t,{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:a});case 4:return n=e.sent,e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"save_to_spreadsheet",value:function(){var e={"Project Name":this.state.project_name,"Evaluator Name":this.state.evaluator_name,"Project Comments":this.state.project_comments,"D.R. Score":this.props.calculate_score(null,null,this.props.questions)};this.props.questions.forEach((function(t){e[t.question]=t.answer}));var t=Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&");this.post_data("https://script.google.com/macros/s/AKfycbwTXNasjTvZozGgnQsTVBWEGEHB-BRRCiF88VGdoOmyhEntWpsV/exec",t)}},{key:"create",value:function(){this.save_to_spreadsheet();var e=new N;this.add_title(e);var t=this.add_timestamp(e);this.add_project_details(e),this.add_scores(e),this.add_answer_summary(e,17,120),this.add_questions(e,this.props.questions),e.save("Responsible-AI-Report-"+t+".pdf"),this.toggle_modal(!1)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"level-item download-report-interaction"},s.a.createElement("div",{className:"has-text-centered round-interaction",onClick:function(){return e.toggle_modal(!0)}},s.a.createElement("div",null,s.a.createElement("p",{className:"heading"},"Download"),s.a.createElement("p",{className:"title"},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fas fa-file-download"}))))),this.render_modal())}}]),t}(s.a.Component)),j=a(28),O=a.n(j),x=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=new g({score_value:this.props.score}),t=this.props.score>e.state.danger_threshold?this.props.score>e.state.success_threshold?"92d050":"ffc000":"de656b",a="https://img.shields.io/badge/D.R.-"+this.props.score+"-"+t+".svg?style=flat-square";return s.a.createElement("div",{className:"level-item has-text-centered badge-interaction"},s.a.createElement("a",{className:"has-text-black round-interaction",href:a},s.a.createElement("p",{className:"heading"},"Badge"),s.a.createElement("p",{className:"title"},s.a.createElement(O.a,{src:a,alt:"D.R.: "+this.props.score,loader:s.a.createElement("progress",{className:"progress is-small is-primary",max:"100"},"15%")}))))}}]),t}(s.a.Component),C="Dropdown",q={yes:"Yes",no:"No",idk:"I don't know"},D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={questions:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://spreadsheets.google.com/feeds/list/1yJLzqMXmgvEsZFpABbvE57cVlLdou_jOW1nKGCz6mpo/3/public/values?alt=json").then((function(e){return e.json()})).then((function(t){e.setState({questions:e.get_spreadsheet_questions(t)})}))}},{key:"get_spreadsheet_questions",value:function(e){return e.feed.entry.map((function(e){return{question:e.gsx$question.$t,answerType:e.gsx$answertype.$t,answer:"Dropdown"===e.gsx$answertype.$t?"idk":"",weight:1,answerPoint:e.gsx$answerpoint.$t}}))}},{key:"calculate_score",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.state.questions,n=a.map((function(e){var t=e.answer.trim();return(e.answerType===C?t===e.answerPoint:t.length>0)*e.weight})).reduce((function(e,t){return e+t}),0),s=a.map((function(e){return Math.max(0,e.weight)})).reduce((function(e,t){return e+t}),0);return Math.max(0,Math.round(n/s*100))}},{key:"load_scoreboard",value:function(){return s.a.createElement("div",null,this.load_fact_score())}},{key:"load_fact_score",value:function(){var e=this.calculate_score();return s.a.createElement("nav",{className:"level"},s.a.createElement("div",{className:"level-item has-text-centered"},s.a.createElement("div",null,s.a.createElement("p",{className:"title"},"D.R. Score"))),s.a.createElement("div",{className:"level-item"}),s.a.createElement("div",{className:"level-item"}),s.a.createElement("div",{className:"level-item"}),s.a.createElement("div",{className:"level-item"}),s.a.createElement("div",{className:"level-item"}),s.a.createElement(g,{score_value:e}),s.a.createElement("div",{className:"level-item"}),s.a.createElement("div",{className:"level-item"}),s.a.createElement("div",{className:"level-item"}),s.a.createElement(k,{answer_key:q,calculate_score:this.calculate_score,questions:this.state.questions,no_answer:"idk"}),s.a.createElement(x,{score:e}))}},{key:"change_answer",value:function(e){var t=this;return function(a){var n=t.state.questions;n[e].answer=a.target.value,t.setState({questions:n})}}},{key:"load_question",value:function(e,t){return s.a.createElement("div",{className:"field"+("Dropdown"===e.answerType?" is-horizontal":"")},s.a.createElement("div",{className:"field-label is-size-4"},e.question),s.a.createElement("div",{className:"field-body"},"Dropdown"===e.answerType?s.a.createElement("div",{className:"select"},s.a.createElement("select",{value:e.answer,onChange:this.change_answer(t)},Object.entries(q).map((function(e){var t=Object(f.a)(e,2),a=t[0],n=t[1];return s.a.createElement("option",{value:a,key:a},n)})))):s.a.createElement("div",{className:"textarea-container"},s.a.createElement("textarea",{className:"textarea",placeholder:"Enter your answer here",value:e.answer,onChange:this.change_answer(t)}))))}},{key:"load_questions",value:function(){var e=this;return this.state.questions.map((function(t,a){return s.a.createElement("div",{key:a},e.load_question(t,a))}))}},{key:"answer_summary",value:function(){return s.a.createElement("div",{className:"field is-horizontal is-size-4"},s.a.createElement("div",{className:"field-label"},"# Answered"),s.a.createElement("div",{className:"field-body"},this.state.questions.filter((function(e){return"idk"!==e.answer.trim()&&e.answer.trim().length>0})).length,"/",this.state.questions.length))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("section",{className:"hero"},s.a.createElement("div",{className:"hero-body"},s.a.createElement("div",{className:"container"},s.a.createElement("nav",{className:"level"},s.a.createElement("div",{className:"level-item"},s.a.createElement("div",null,s.a.createElement("h1",{className:"title"},"Calculate D.R. Score"),s.a.createElement("br",null),s.a.createElement("h1",{className:"subtitle"},"Your score reflects your data responsibility."))),s.a.createElement(g,{label:"legend",score_value:">70"}),s.a.createElement(g,{label:"legend",score_value:"30-70"}),s.a.createElement(g,{label:"legend",score_value:"<30"}))))),s.a.createElement("div",{className:"container"},this.load_scoreboard(),this.answer_summary(),this.load_questions()))}}]),t}(s.a.Component),I=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("section",{className:"hero"},s.a.createElement("div",{className:"hero-body"},s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"title"},"Glossary"),s.a.createElement("h1",{className:"subtitle"},"Definitions of terms, phrases and abbreviations used in our questions.")))),s.a.createElement("div",{className:"container"},s.a.createElement("table",{className:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{className:"term-column-header"},"TERM"),s.a.createElement("th",null,"DEFINITION"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"COCO"),s.a.createElement("td",null,s.a.createElement("a",{href:"http://cocodataset.org/"},"Common Objects in Context"))),s.a.createElement("tr",null,s.a.createElement("td",null,"Fairness"),s.a.createElement("td",null,"Decisions are unbiased to identity features such as gender, race, nationality, sexual orientation, religion, political opinion, skin colour, education, address and age.")),s.a.createElement("tr",null,s.a.createElement("td",null,"Accountability"),s.a.createElement("td",null,"Decisions should be traceable, reproducible and liable. All decisions and their consequences must be owned and explained by the decision maker or administrator of the decision maker.")),s.a.createElement("tr",null,s.a.createElement("td",null,"Confidentiality"),s.a.createElement("td",null,"Personal information which can be used to identify individuals or communities must be secure and above intentional or accidental misuse.")),s.a.createElement("tr",null,s.a.createElement("td",null,"Transparency"),s.a.createElement("td",null,"Understanding why a decision is made is key to establishing trust in the decision process. Accompanying decisions with explanations and analysis reports help understand the outcome.")),s.a.createElement("tr",null,s.a.createElement("td",null,"Data"),s.a.createElement("td",null,"Refers to interpretable information in the context of the world. Data can be in the form of text, numbers, images, audio, video, co-ordinates, address, email, phone numbers, names, machine logs, journals, sensor readings, etc. In our context, data encapsulates all text/media/documents related to the project and not limited to only datasets used for modelling and analyses.")),s.a.createElement("tr",null,s.a.createElement("td",null,"Model"),s.a.createElement("td",null,"Refers to a function or process which uses data to draw inferences about the world. Models can be statistical, symbolic, mathematical, deterministic, stochastic, neural networks, flow charts, black-box, white-box, decision trees, etc. In our context, model represents the world in which the decisions are effective and the consequences of the decisions have repercussions.")),s.a.createElement("tr",null,s.a.createElement("td",null,"Deploy(ment)"),s.a.createElement("td",null,"Refers to a system which uses the model to make inferences on unseen events of the world. A deployment can be a script, a function in a program, an excel sheet, a web application, a decision making system, a toolkit, a library package, a form, a program, an application, a mobile app, a feature in a mobile app, etc. In our context, a deployment is an implementation of the model which is used to make inferences on unseen data. An implementation can refer to both online and offline use of the model.")),s.a.createElement("tr",null,s.a.createElement("td",null,"Feature Imbalance"),s.a.createElement("td",null,"When a subset of features in the dataset contain most of the useful information to represent the datapoint. Also applies to range of the feature values.")),s.a.createElement("tr",null,s.a.createElement("td",null,"Class Imbalance"),s.a.createElement("td",null,"When a subset of the classes are represented by most of the datapoints in the dataset. Ideally, the training set should sufficiently represent the test set.")),s.a.createElement("tr",null,s.a.createElement("td",null,"Hyper-parameter"),s.a.createElement("td",null,"A parameter that is set before the learning process begins. It affects the performance of the model.")),s.a.createElement("tr",null,s.a.createElement("td",null,"Optimal Hyper-parameter"),s.a.createElement("td",null,"A hyper-parameter value which achieves the model\u2019s best performance is said to be optimal.")),s.a.createElement("tr",null,s.a.createElement("td",null,"Active Learning"),s.a.createElement("td",null,"A special case of machine learning in which a learning algorithm is able to interactively query the user to obtain the desired outputs at new data points.")),s.a.createElement("tr",null,s.a.createElement("td",null,"Decision Workflow"),s.a.createElement("td",null,"A subset of the process which only contains decision nodes. Applies only to non-trivial system where an instance of the process does not explore the whole system.")),s.a.createElement("tr",null,s.a.createElement("td",null,"Dataset"),s.a.createElement("td",null,"A set of datapoints which serve as input and labels to a prediction model. The dataset includes all datapoints with and without corresponding labels. Only the datapoints with labels can be used in the training, validation and test sets.")),s.a.createElement("tr",null,s.a.createElement("td",null,"Training Set"),s.a.createElement("td",null,"A subset of the dataset used to teach the model about the data. Usually, 80% of the labelled dataset.")),s.a.createElement("tr",null,s.a.createElement("td",null,"Validation Set"),s.a.createElement("td",null,"A subset of the dataset used to tune the model with respect to the data. Usually, 10% of the labelled dataset.")),s.a.createElement("tr",null,s.a.createElement("td",null,"Test Set"),s.a.createElement("td",null,"A subset of the dataset used to evaluate the model on the data. Usually, 10% of the labelled dataset.")),s.a.createElement("tr",null,s.a.createElement("td",null,"Inference Set"),s.a.createElement("td",null,"All datapoints which are not in the training, validation, test sets. These datapoints can be with and without corresponding labels."))))))}}]),t}(s.a.Component),S=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("section",{className:"hero"},s.a.createElement("div",{className:"hero-body"},s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"title"},s.a.createElement("a",{href:"mailto:grahman@rodekruis.nl?subject=Responsible A.I."},"Email")," ","us your feedback."))))}}]),t}(s.a.Component),A=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("footer",{className:"footer"},s.a.createElement("div",{className:"content has-text-centered"},s.a.createElement("p",null,s.a.createElement("strong",null,"Data Responsibility")," by"," ",s.a.createElement("a",{href:"https://www.510.global/"},"510.global")," under the"," ",s.a.createElement("a",{href:"https://github.com/gulfaraz/dr_score/blob/master/LICENSE"},"GPL-3.0 license"),".")))}}]),t}(s.a.Component),R=(a(51),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"dr-score"},s.a.createElement(d.a,null,s.a.createElement("div",{className:"router-content"},s.a.createElement(p,null),s.a.createElement(h.c,null,s.a.createElement(h.a,{path:"/dr"},s.a.createElement(D,null)),s.a.createElement(h.a,{path:"/glossary"},s.a.createElement(I,null)),s.a.createElement(h.a,{path:"/feedback"},s.a.createElement(S,null)),s.a.createElement(h.a,{exact:!0,path:"/"},s.a.createElement(b,null))))),s.a.createElement(A,null))}}]),t}(s.a.Component));r.a.render(s.a.createElement(R,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.9d23a274.chunk.js.map