(function(){const e=console,t="log"
window.ZPS_UI_CUSTOMIZATION.ZOHO_MARKETING_PLUS=new class{setExperimentWizardConstants(e){this.experimentWizardConstants=e}getSpaceMenu(){return[{key:"projects",label:"Projects"},{key:"archive",label:"Archive"},{key:"users",label:"Users"},{key:"usage",label:"Usage"}]}getProjectMenu(){return[{key:"experiments",label:"Experiments"},{key:"settings",label:"Project Settings"},{key:"experiment-settings",label:"Experiment Settings"},{key:"integrations",label:"Integrations"},{key:"proj-users",label:"Users"},{key:"snippet",label:"Snippet"}]}getAddMenu(){return[{key:"goals",label:"Goal"},{key:"funnelanalysis",label:"Funnel Analysis"},{key:"heatmapanalysis",label:"Heatmap"},{key:"formanalysis",label:"Form Analytics"},{key:"sessionrecording",label:"Session Recording"},{key:"abtestexp",label:"A/B Test"},{key:"spliturlexp",label:"Split URL Test"},{key:"personalise_experience",label:"Personalization"},{key:"polls",label:"Polls"},{key:"pushnotification",label:"Push Notification"},{key:"popups",label:"Pop-Ups"}]}getMkPlusTypes(e){return{1:"ab_test",2:"spliturl",5:"heatmap",6:"funnel",7:"formanalytics",8:"sessionrecording",9:"polls",10:"personalise_experience",11:"popups",12:"pushnotification",1000:"goals"}[e]}getProjectIdByLinkName(e){let t="",r=null
const s=document.cookie.match(/zfccn\=([^;]*)/)
s&&(r="zfcpn="+s[1])
var n="/pagesense/api/v1/portal/"+PageSenseCrmPlusVar.currentportaldomain+"/projects/"+e
return $.ajax({type:"GET",url:n,dataType:"json",async:!1,headers:{"X-ZCSRF-TOKEN":r},success:function(r){let s=r.projects
void 0!==s&&(t=s[0].project_id,PageSenseCrmPlusVar.currentDepartment=e)}}),t}getProjectIdByExpLinkName(e,t){let r=""
var s=null
let n=null
const a=document.cookie.match(/zfccn\=([^;]*)/)
a&&(n="zfcpn="+a[1])
var i="/pagesense/api/v1/portal/"+PageSenseCrmPlusVar.currentportaldomain+"/experiments/"+e
return $.ajax({type:"GET",url:i,dataType:"json",async:!1,headers:{"X-ZCSRF-TOKEN":n},success:function(e){void 0!==(s=e.experiments)&&(r=s[0].project_id)}}),t?s[0]:r}initializeBundleSetup(e,t,r){const s=r.get("user.is_admin"),n=e.get("crmplus_library_url")
var a=this
new Promise(function(e,r){e(a.getServiceBrandId(t))}).then(t=>{a.mkplusScriptOnLoad(t,n,s,e)}),setTimeout(()=>Promise.all([]),300)}mkplusScriptOnLoad(r,s,n,a){const i=document.createElement("script")
i.setAttribute("src",s)
var l=this
i.onload=function(){var s={serviceBrandId:r,module:{list:l.getSpaceMenu(),hasAddNew:!1},department:{currentdepartment:{key:"0",label:"Home"}},option:{list:[{key:"spaces",label:"My Spaces"}]},isSetupAvailable:!1}
1==n&&(s.department.adddepartment="New Project"),e[t]("PS Call : initialized for serviceBrand --\x3e ",s),CrmPlusImpl.trigger("initialize",[a.get("crmplus_service_code"),a.get("crmplus_bundle_orgid"),s]),setTimeout(()=>{r&&""!=r?l.initializeNotifyCurrentDept(r):l.callFlushHookStack()},100),CrmPlusImpl.trigger("UIReady"),CrmPlusImpl.trigger("selectEntity",["module","projects"])},document.head.appendChild(i)}getServiceBrandId(e){let t="",r=e.get("currentState.routerJsState.params")
return r["portal.project"]?t=this.getProjectIdByLinkName(r["portal.project"].project_id):r["portal.experiment"]&&null!=(t=this.getProjectIdByExpLinkName(r["portal.experiment"].experiment_id))&&new Promise(function(e,r){e(CrmPlusImpl.getProjectLinkNameById(t))}).then(e=>{PageSenseCrmPlusVar.currentDepartment=e}),t}initializeNotifyCurrentDept(e){CrmPlusImpl.initializeNotifyCurrentDept(e),this.isProjectSwitchNotifiedToMkPlus=!0,this.manageProjectModulesInBundle(""),this.callFlushHookStack()}callFlushHookStack(){window.postMessage({id:"pagesense_ui_customization",action:"flushHookStack",arguments:[],requireReply:!1},"*")}manageDepartmentsInBundle(){const e=[]
PageSenseCrmPlusVar.department=[]
const t={}
t.key="0",t.label="Home",e.push(t),PageSenseCrmPlusVar.department=e,CrmPlusImpl.trigger("modifyUI",["department",{list:PageSenseCrmPlusVar.department}])}manageSpaceModulesInBundle(){CrmPlusImpl.trigger("modifyUI",["module",{list:this.getSpaceMenu()}]),CrmPlusImpl.trigger("selectEntity",["module","projects"]),this.chooseCurrentDepartmentInBundle("0","Home")}manageProjectModulesInBundle(e){CrmPlusImpl.trigger("modifyUI",["module",{list:this.getProjectMenu()}]),CrmPlusImpl.trigger("selectEntity",["module",e])}manageAddExperimentInBundle(e){"spectator"==e?CrmPlusImpl.trigger("modifyUI",["addrecordoption",{list:{}}]):CrmPlusImpl.trigger("modifyUI",["addrecordoption",{list:this.getAddMenu()}])}manageHideModulesInBundle(){CrmPlusImpl.trigger("modifyUI",["module",{list:[]}])}invokeModifyTopBar(e,t,r,s,n,a,i){let l={},o={}
l.activityType=s
var u=e.get("experiment_id_string")
if(u||1e3!==n||(u=e.get("goal_id_string")),u){var p=CrmPlusImpl.getExperimentModelById(u,s)
if(p){if("Launch"===t)return void(a!=p.experiment_status&&this.activityDetailViewInBundle(e,i,!0))
{let e=p.experiment_status?p.experiment_status:p.goal_status
o.setStatus=this.getExperimentStatus(n,e)
for(var d=r.buttonList,m=[],c=0;c<d.length;c++)m.push(d[c].key)
o.removeButtons={buttonKeyList:m},o.addButtons={},o.addButtons.buttonList=this.constructButtonsJson(e,n,i.get("role-features-flag")),r.buttonList=o.addButtons.buttonList,l.actions=o,CrmPlusImpl.trigger("activityDetailView.modifyTopBar",[l])}}}}activityDetailViewInBundle(e,t,r){const s=e.get("linkname")
if(r){const r=CrmPlusImpl.getExperimentRoot(e.get("origExpStatus"),e.get("experiment_type"))
t.get("target").transitionTo(r,s)}let n=null,a=null,i=e.get("experiment_type"),l=null,o=null
var u=this
e.set("showBreadCrumbs",!1),CrmPlusImpl.ṛegisterCallbackForTabs(s=>{if("Edit"===s)e.set("showMkplusTabs",!1),e.set("showBreadCrumbs",!0)
else if("Pause"===s||"Launch"===s||"Relaunch"===s){var o=1e3===i?"portal.project.experiments.project-goal":"portal.experiment",p=1e3===i?"changeGoalStatus":"clickWizardButton"
new Promise(function(s,n){s(r?t.send(p,e):t.controllerFor(o).send(p,e))}).then(r=>{setTimeout(()=>{u.invokeModifyTopBar(e,s,n,a,i,l,t)},1e3)})}}),i||(i=1e3),(l=e.get("origExpStatus"))||(l=e.get("goal_status")),(o=e.get("experiment_id_string"))||(o=e.get("goal_id_string")),a=this.getMkPlusTypes(i)
const p=this.experimentWizardConstants,d=this.constructTabsJson(p[i],l,i),m=this.constructButtonsJson(l,i,t.get("role-features-flag"))
let c=this.getExperimentStatus(i,l),g={linkname:s}
n={activityType:a,activityName:s,activityKey:o.toString(),title:e.get("display_name"),status:c,moduleList:d,buttonList:m,activity_data:g},this.isProjectSwitchNotifiedToMkPlus?u.registerTopBarCallToMkplus(a,n):setTimeout(()=>{u.registerTopBarCallToMkplus(a,n)},100)}registerTopBarCallToMkplus(e,t){CrmPlusImpl.trigger("activityDetailView.beforeLoad",[e]),CrmPlusImpl.trigger("activityDetailView.setTopBar",["all",t]),CrmPlusImpl.trigger("activityDetailView.afterLoad",[e])}constructButtonsJson(e,t){let r=[],s=""
switch(e){case 1:1e3!=t&&r.push({key:"Edit",label:"Edit",href:null,subitems:void 0}),s=1e3==t?"Pause":"Launch"
break
case 2:1e3==t?(r.push({key:"Delete",label:"Delete",href:null,subitems:void 0}),s="Relaunch"):s="Pause"
break
case 3:r.push({key:"Edit",label:"Edit",href:null,subitems:void 0}),s="Relaunch"
break
case 6:s="Relaunch"}return r.push({key:s,label:s,href:null,subitems:void 0}),r}getExperimentStatus(e,t){var r={}
let s,n=null
switch(t){case 1:n=1e3==e?"Running":"Draft",s=1e3==e?0:2
break
case 2:n=1e3==e?"Paused":"Running",s=1e3==e?3:0
break
case 3:n="Paused",s=3
break
case 6:n="Scheduled",s=1}return r.label=n,r.type=s,r}constructTabsJson(e,t,r){var s=this
let n=[]
return e.forEach(function(e){s.isTabAllowed(e,t,r)&&n.push({key:e.root,label:e.displayname,href:null,isSelected:!1,subitems:void 0})}),n.length>1?n[1].isSelected=!0:n[0].isSelected=!0,n}isTabAllowed(e,t,r){switch(r){case 8:return!!("portal.experiment.config"==e.root||e.isReportRoute&&1!=t)
case 10:return!!("portal.experiment.summary"==e.root||e.isReportRoute&&1!=t)
default:return!!(e.showWhileRunning||e.isReportRoute&&1!=t)}}manageAddDepartmentInBundle(e,t,r){var s=1===r
CrmPlusImpl.trigger("modifyUI",["department",{list:[{key:e,label:t}],cansetselected:s,isnewdepartment:!0}])}manageRemoveDepartmentInBundle(e){CrmPlusImpl.trigger("removeUIElement",["department",{id:e}])}manageArchiveActionsProjects(e,t,r){1===r?this.manageAddDepartmentInBundle(e,t,0):this.manageRemoveDepartmentInBundle(e)}chooseCurrentDepartmentInBundle(e,t){PageSenseCrmPlusVar.currentDepartment=e,CrmPlusImpl.trigger("modifyUI",["department",{list:[{key:e,label:t}],cansetselected:!0,isnewdepartment:!1}])}manageGlobalSearchFunctionInBundle(e){window.PageSenseCrmPlusSearchFunc=function(t){e.set("search_term",t),e.doSearch()},window.PageSenseCrmPlusSearchFunc(PageSenseCrmPlusVar.searchString)}pushRecentItemsInBundle(e,t){var r=document.location.href,s=document.location.origin+"/",n=r.replace(s,"")
CrmPlusImpl.trigger("addRecord",[{Type:"RecentItems",DisplayName:e,ClickAction:n,Module:t}])}openBundleAddUser(e){const t=[]
e&&t.push(e),CrmPlusImpl.trigger("addUser",t)}validateAndshowMkplusTabs(e,t,r){var s=!1
if(r)return!0
var n=t.router.hasOwnProperty("currentPath")?t.router.get("currentPath"):t.currentPath
return(n&&("portal.experiment.experiences.index"===n||"portal.experiment.pushmessage"===n)||"portal.experiment.config"===n&&11===e.get("experiment_type"))&&(s=!0),!(e.get("showBreadCrumbs")&&(!e.get("showBreadCrumbs")||!e.hasOwnProperty("showMkplusTabs")||e.get("showMkplusTabs")||s))}getFlagsAndHooks(){return{flags:{zmodelComponent_hideCloseButton:!0,application_hideHeader:!0,application_hideSearchBar:!0,users_addMarketinplusUser:!0,experiment_hideBreadcrumbs:!0,show_mkplus_project_dropdown:!0,projects_hideCreateButton:!0,projectpage_configureLandingRoute:!0,experiment_configureGoBackRoute:!0,experiment_show_mkplusproject_info:!0,experiment_creation_ignoreEsc:!0,usage_hide_upgradeBanner:!0,users_hideEditUserRole:!0},hooks:{portal:{getPortalObject(e,t,r){window.PageSenseCrmPlusVar.currentportaldomain=e.get("domainname"),this.initializeBundleSetup(e,t,r)},getExperimentWizardConstants(e){this.setExperimentWizardConstants(e)},globalSearch(e){this.manageGlobalSearchFunctionInBundle(e)},manageAddExperiment(e){this.manageAddExperimentInBundle(e)},hideUsagePage(e){}},"portal.project.experiments.push-notification":{hideMarketingPlusTaps(e){}},"portal.experiment":{manageHideModules(){this.manageProjectModulesInBundle("experiments")},activityDetailView(e,t,r){this.validateAndshowMkplusTabs(e,t,r)&&(e.set("showMkplusTabs",!0),this.activityDetailViewInBundle(e,t,r))},registerExperimentAndMKPlusProject(e,t){CrmPlusImpl.ṛegisterCallbackForProjectSelect(e,t)},registerMKPlusTabs(e,t){delete e.showBreadCrumbs}},"portal.project":{newProjectObject(e){this.manageAddDepartmentInBundle(e.get("linkname"),e.get("display_name"),1)},deleteProject(e){this.manageRemoveDepartmentInBundle(e.get("linkname"))},currentProjectObject(e){this.isProjectSwitchNotifiedToMkPlus||this.initializeNotifyCurrentDept(e.get("project_id")),this.chooseCurrentDepartmentInBundle(e.get("linkname"),e.get("display_name")),this.manageAddExperimentInBundle(e.get("user_role_link_name"))}},"portal.projects.active":{resetNotifyDepartment(){this.isProjectSwitchNotifiedToMkPlus=!1}},"portal.experiment.reports":{getExperimentModel(e,t,r){this.pushRecentItemsInBundle(e.get("display_name"),"Experiment Reports"),e.isTabsClosedInProjectsView&&(this.activityDetailViewInBundle(e,t,r),delete e.isTabsClosedInProjectsView)}},"portal.project.experiments":{manageSelectModule(){this.manageProjectModulesInBundle("experiments")},hideMKPlusTabsWhileExpCreation(e){e.set("showBreadCrumbs",!0)},positionMarketingplusProjects(e,t){CrmPlusImpl.trigger("marketingProject.showList",[e]),CrmPlusImpl.ṛegisterCallbackForProjectSelect(t)},loadDefaultMarketingplusProject(e){CrmPlusImpl.ṛegisterCallbackForProjectSelect(e)},positionMarketingplusCalendar(e,t){CrmPlusImpl.trigger("calendar.show",[e,null,{defaultDate:""}]),CrmPlusImpl.ṛegisterCallbackForProjectSelect(t)},createExpVsMKplusMapping(e,t,r,s){if(null!=e&&t){let a="",i=null
e.set("showBreadCrumbs",!0)
const l={experiment:{experiment_id:e.get("experiment_id_string"),experiment_linkname:e.get("linkname"),mkplus_projectid:t.id,expected_launchdate:new Date(s).getTime(),experiment_type:this.getMkPlusTypes(e.get("experiment_type"))}},o=document.cookie.match(/zfccn\=([^;]*)/)
o&&(i="zfcpn="+o[1])
var n="/pagesense/api/v1/portal/"+PageSenseCrmPlusVar.currentportaldomain+"/mkplusexperiments/"+r
$.ajax({type:"POST",contentType:"application/json; charset=utf-8",url:n,dataType:"json",data:JSON.stringify(l),async:!1,headers:{"X-ZCSRF-TOKEN":i},success:function(e){let t=e.projects
void 0!==t&&(a=t[0].linkname)}})}},hideMarketingPlusTaps(e){CrmPlusImpl.trigger("activityDetailView.close",[this.getMkPlusTypes(e)])}},"portal.project.experiments.goals":{getProjectgoalmodel(e){this.pushRecentItemsInBundle(e.get("display_name"),"Goal Reports")},hideMarketingPlusTaps(){CrmPlusImpl.trigger("activityDetailView.close",["goals"])},manageHideModules(){},manageSelectModule(){this.manageProjectModulesInBundle("experiments")}},"portal.projects":{manageAddExperiment(){this.manageSpaceModulesInBundle(),this.manageAddExperimentInBundle("spectator")}},"portal.users":{handleBundleAddUser(){this.openBundleAddUser()}},"portal.project.settings":{manageProjectModulesInBundle(){this.manageProjectModulesInBundle("settings")}},"portal.project.integrations":{manageProjectModulesInBundle(){this.manageProjectModulesInBundle("integrations")}},"portal.project.users":{manageProjectModulesInBundle(){this.manageProjectModulesInBundle("users")},handleBundleAddUser(e){this.openBundleAddUser(e)}},"portal.project.snippet":{manageProjectModulesInBundle(){this.manageProjectModulesInBundle("snippet")}},"application.spaces":{manageHideModules(){this.manageHideModulesInBundle()}}}}}}})()
