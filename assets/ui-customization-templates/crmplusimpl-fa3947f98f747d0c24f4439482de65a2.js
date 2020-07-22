(function(){var e={department:[],currentDepartment:"",currentDepartmentId:null}
const t=1,r=2,n=5,a=6,o=7,i=8,s=9,c=10,p=11,l=12
var u=["portal.experiment.pushmessage","portal.experiment.config"],m=["portal.projects.active","portal.projects.archived","portal.users","portal.usage"]
const g=console
var d={handleUIChange:function(){},activityDetailView:{selectTopBarModule:function(e,t,r,n){const a=t.split("#")
Array.isArray(a)&&a.length>1?window.PageSenseEmberApp.__container__.lookup("router:main").transitionTo(a[0],n.linkname,{queryParams:{goalview:a[1]}}):window.PageSenseEmberApp.__container__.lookup("router:main").transitionTo(t,n.linkname),d.trigger("activityDetailView.selectTopBarEntity",[e,"module",t,""])},selectTopBarButton:function(e,t,r,n){d.callbackForTabs(t,n),"Edit"===t&&d.trigger("activityDetailView.close",[e])},show(t,r,n,a,o){d.currentActivityType=t
let i=null,s="",c=""
if(a){i=a.linkname
let r=null
const n=document.cookie.match(/zfccn\=([^;]*)/)
n&&(r="zfcpn="+n[1])
var p="/pagesense/api/v1/portal/"+e.currentportaldomain
p+="goals"===t?"/projectgoals/"+i:"/experiments/"+i,$.ajax({type:"GET",url:p,dataType:"json",async:!1,headers:{"X-ZCSRF-TOKEN":r},success:function(e){if("goals"===t){let t=e.projectgoals
void 0!==t&&(s=t[0].goal_status,c=1e3)}else{let t=e.experiments
void 0!==t&&(s=t[0].experiment_status,c=t[0].experiment_type)}}})}else{let e=d.getExperimentModelById(r,t).tempRespObj
s=e.status,c=e.type,i=e.linkname}var l=d.getExperimentRoot(s,c)
if("goals"===t)window.PageSenseEmberApp.__container__.lookup("router:main").transitionTo("portal.project.experiments.project-goal",e.currentportaldomain,e.currentDepartment,i)
else{const t=window.PageSenseEmberApp.__container__.lookup("router:main").currentRouteName
if(t===l){window.PageSenseEmberApp.__container__.lookup(`controller:${t}`).set("experiment.isTabsClosedInProjectsView",!0)
window.PageSenseEmberApp.__container__.lookup(`route:${t}`).refresh()}window.PageSenseEmberApp.__container__.lookup("router:main").transitionTo(l,e.currentportaldomain,i)}o||setTimeout(()=>{d.trigger("activityDetailView.afterLoad",[t])},100)},close:function(e,t,r){let n=d.getProjectLinkNameById(r)
d.showAddRecordView(e,n,!0)}},serviceView:{show:function(e,t){d.activityDetailView.show(t.activityType,t.key,t.service_BrandId,null,!0),setTimeout(()=>{d.trigger("serviceView.afterLoad",["analytic_dashboard",{key:t.key}])},100)}},getProjectLinkNameById:function(t){let r="",n=null
const a=document.cookie.match(/zfccn\=([^;]*)/)
a&&(n="zfcpn="+a[1])
var o="/pagesense/api/v1/portal/"+e.currentportaldomain+"/projectsbyid/"+t
return $.ajax({type:"GET",url:o,dataType:"json",async:!1,headers:{"X-ZCSRF-TOKEN":n},success:function(e){let t=e.projects
void 0!==t&&(r=t[0].linkname)}}),r},getExperimentRoot:function(e,u){const m=1===e||6===e
switch(u){case t:case r:case l:case s:case c:case p:return m?"portal.experiment.summary":"portal.experiment.reports"
case n:case a:case o:return m?"portal.experiment.config":"portal.experiment.reports"
case i:return m?"portal.experiment.config":"portal.experiment.recordings"}},getExperimentModelById:function(t,r){let n=null,a={},o="",i="",s="",c=null
const p=document.cookie.match(/zfccn\=([^;]*)/)
p&&(c="zfcpn="+p[1])
var l="/pagesense/api/v1/portal/"+e.currentportaldomain
return l+="/experimentbyid?experiment_id="+t+"&experiment_type="+r,$.ajax({type:"GET",url:l,dataType:"json",async:!1,headers:{"X-ZCSRF-TOKEN":c},success:function(e){if("goal"===r||"goals"===r){let t=e.projectgoals
void 0!==t&&(n=t[0],s=n.linkname,o=n.goal_status,i=1e3)}else{let t=e.experiments
void 0!==t&&(n=t[0],s=n.linkname,o=n.experiment_status,i=n.experiment_type)}}}),a.status=o,a.type=i,a.linkname=s,n.tempRespObj=a,n},activityCreationView:{show:function(e,t,r){d.redirectToExpCreation(e,t,r)}},isAdminCheck:function(){let t=!1,r=null
const n=document.cookie.match(/zfccn\=([^;]*)/)
n&&(r="zfcpn="+n[1])
var a="/pagesense/api/v1/portal/"+e.currentportaldomain+"/currentportaluser"
return $.ajax({type:"GET",url:a,dataType:"json",async:!1,headers:{"X-ZCSRF-TOKEN":r},success:function({users:[e]}){t=e.is_admin}}),t},redirectToExpCreation:function(e,t,r){let n=this.getProjectLinkNameById(t)
this.showAddRecordView(e,n),d.trigger("activityCreationView.afterLoad",[e])},"ṛegisterCallbackForTabs":function(e){d.callbackForTabs=e},"ṛegisterCallbackForProjectSelect":function(e){d.callbackForProjectSelect=e},marketingProject:{select:function(e){d.callbackForProjectSelect(e)}},calendar:{select:function(e,t){d.callbackForProjectSelect(e)}},selectTopBarAfterPageLoad(e,t,r,n){d.trigger("activityDetailView.selectTopBarEntity ",[e,t,r,n])},selectModule:function(t){var r,n=!1
switch(t){case"projects":r="portal.projects.active"
break
case"archive":r="portal.projects.archived"
break
case"users":r="portal.users"
break
case"usage":r="portal.usage"
break
case"experiments":r="portal.project.experiments",n=!0
break
case"settings":r="portal.project.settings"
break
case"integrations":r="portal.project.integrations"
break
case"proj-users":r="portal.project.users"
break
case"snippet":r="portal.project.snippet"
break
case"experiment-settings":r="portal.project.experiment-settings.mutually-exclusive-groups"}d.currentTopBand=t
var a=!1
if(m.includes(r))window.PageSenseEmberApp.__container__.lookup("router:main").transitionTo(r,e.currentportaldomain),a=!0
else if(n)window.PageSenseEmberApp.__container__.lookup("router:main").transitionTo(r,e.currentportaldomain,e.currentDepartment),a=!0
else{let t=window.PageSenseEmberApp.__container__.lookup("router:main").currentRouteName
if(u.includes(t)){new Promise(function(t,n){t(window.PageSenseEmberApp.__container__.lookup("router:main").transitionTo(r,e.currentportaldomain,e.currentDepartment))}).then(e=>{d.trigger("activityDetailView.close",[d.currentActivityType]),a=!0})}else d.trigger("activityDetailView.close",[d.currentActivityType]),window.PageSenseEmberApp.__container__.lookup("router:main").transitionTo(r,e.currentportaldomain,e.currentDepartment),a=!0}a&&d.trigger("selectEntity",["module",t])},selectDepartment:function(t){if("0"===t)window.PageSenseEmberApp.__container__.lookup("router:main").transitionTo("portal.projects.active"),d.trigger("selectEntity",["module","projects"])
else{var r=d.getProjectLinkNameById(t)
if(g.log("CrmPlusImpl.selectDepartment ",t,r),r){new Promise(function(t,n){t(window.PageSenseEmberApp.__container__.lookup("router:main").transitionTo("portal.project.experiments.project-goals",e.currentportaldomain,r))}).then(()=>{d.initializeNotifyCurrentDept(t),d.trigger("selectEntity",["module","experiments"])}).catch(e=>{g.log("CrmPlusImpl.selectDepartment error : ",e)})}}},showAddRecordView:function(t,r,n){var a,o,i=""
switch(t){case"goals":a="portal.project.experiments.project-goals",o="project-goals"
break
case"abtestexp":case"ab_test":a="portal.project.experiments.ab-test",o="ab-exp"
break
case"spliturlexp":case"spliturl":a="portal.project.experiments.split-url",o="split-exp"
break
case"heatmapanalysis":case"heatmap":a="portal.project.experiments.heatmap",o="heatmap-exp"
break
case"funnelanalysis":case"funnel":a="portal.project.experiments.funnel-analysis",o="funnel-exp"
break
case"formanalysis":case"formanalytics":a="portal.project.experiments.form-analysis",o="form-exp"
break
case"sessionrecording":a="portal.project.experiments.session-recording",o="session-exp"
break
case"popups":a="portal.project.experiments.popups",o="popups-exp"
break
case"personalise_experience":a="portal.project.experiments.personalization",o="personalization-exp"
break
case"polls":a="portal.project.experiments.polls",o="polls-exp"
break
case"pushexp":case"pushnotification":a="portal.project.experiments.push-notification",o="push-exp"}if(r?i=r:""!==e.currentDepartment&&"0"!==e.currentDepartment&&(i=e.currentDepartment),i)if(n){let e=!0
if("goals"!=t){let r=window.PageSenseEmberApp.__container__.lookup("router:main").currentRouteName
window.PageSenseEmberApp.__container__.lookup(`controller:${r}`).get("experiment")&&!u.includes(r)&&(e=!e,d.trigger("activityDetailView.close",[t]))}new Promise(function(e,t){e(window.PageSenseEmberApp.__container__.lookup("router:main").transitionTo(a,i))}).then(r=>{e&&d.trigger("activityDetailView.close",[t])})}else window.PageSenseEmberApp.__container__.lookup("router:main").transitionTo(a,i,{queryParams:{modal:o}}),setTimeout(()=>{d.trigger("marketingProject.getDefault")},1e3)},initializeNotifyCurrentDept:function(t){d.trigger("notifyCurrentDepartment",[t]),g.log("PS Call : notifyCurrentDepartment for project --\x3e",t),e.currentDepartmentId=t},showCreateDepartmentView:function(){window.PageSenseEmberApp.__container__.lookup("router:main").transitionTo("portal.projects.active",{queryParams:{modal:"project"}})},showCreateCustomModuleView:function(){},showSetupView:function(){},selectOption:function(e){var t
switch(e){case"spaces":t="spaces"}window.PageSenseEmberApp.__container__.lookup("router:main").transitionTo(t)},showNotificationDialog:function(e){},hideNotificationDialog:function(){},getDepartmentList:function(t,r,n){var a=[],o=[],i=[]
if(0===t&&!n){var s={}
s.key="0",s.label="Home",a.push(s)}if(e.currentportaldomain){var c="/pagesense/api/v1/portal/"+e.currentportaldomain+"/projects?project_status=1"
$.ajax({type:"GET",url:c,dataType:"json",async:!1,success:function(e){i=e.projects}})}if(null!=i&&i.length>0)for(var p=0;p<i.length;p++){var l=i[p],u={}
u.key=l.linkname,u.label=l.display_name,(n&&-1!==u.label.toLowerCase().indexOf(n.toLowerCase())||!n)&&o.push(u)}if(o.length>t){var m=t,g=m+r-1
g=g<o.length?g:o.length-1
for(var f=m;f<=g;f++)a.push(o[f])}d.trigger("modifyUI",["department",{list:a}])},triggerSearch:function(t){var r=t.searchString
e.searchString=r,window.PageSenseEmberApp.__container__.lookup("router:main").transitionTo({queryParams:{search:"global"}}).promise.then(()=>{window.PageSenseCrmPlusSearchFunc(r)})},closeSearchView:function(){var e=window.PageSenseEmberApp.__container__.lookup("router:main")
if("portal.search"===e.currentPath){var t=e._routerMicrolib.oldState.handlerInfos,r=t.reduce((e,t)=>Object.assign(e,t.params),{}),n=Object.values(r),a=t.getWithDefault("lastObject.name","portal.projects.active")
e.transitionTo(a,...n)}},getValidURL:function(e,t,r){}}
d.isLoadedInCrmplus=function(){return!("undefined"==typeof CrmPlusLib||!CrmPlusLib.isLoadedInCrmplusFrame)},d.trigger=function(e,t){if("undefined"!=typeof CrmPlusLib){var r=e.split("."),n=null
if(r.length>1){let e=r[0],t=r[1]
n=CrmPlusLib[e][t]}else n=CrmPlusLib[e]
void 0!==n&&"function"==typeof n&&n.apply(CrmPlusLib,t)}},window.CrmPlusImpl=d,window.PageSenseCrmPlusVar=e})()
