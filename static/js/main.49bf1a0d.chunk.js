(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{116:function(t,e,n){"use strict";n.r(e);var a,i,c=n(0),o=n.n(c),s=n(10),r=n.n(s),d=(n(87),n(88),n(32)),l=n(47),u=n(162),j=n(151),b=n(152),O=n(5),f=o.a.memo((function(t){var e=t.addItem,n=t.disabled,a=void 0!==n&&n,i=Object(l.a)(t,["addItem","disabled"]);console.log("AddItem is called");var o=Object(c.useState)(!1),s=Object(d.a)(o,2),r=s[0],f=s[1],h=Object(c.useState)(""),T=Object(d.a)(h,2),D=T[0],L=T[1],p=function(){""!==D.trim()?(e(D.trim()),L("")):f(!0)};return Object(O.jsxs)("div",{children:[Object(O.jsx)(u.a,{disabled:a,variant:"outlined",label:[i.title],value:D,onChange:function(t){L(t.currentTarget.value)},onKeyPress:function(t){r&&f(!1),13===t.charCode&&p()},error:r,helperText:r&&"Title is required!"}),Object(O.jsx)(j.a,{color:"primary",onClick:p,disabled:a,children:Object(O.jsx)(b.a,{})})]})})),h=n(155),T=n(156),D=n(158),L=n(154),p=n(159),g=n(160),m=n(161),v=n(117),k=n(157),S=n(18),C=n(31),x=n(38),I=n(8),E=n(45),y=n.n(E),A=y.a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"69175483-e93a-4825-bff5-a54b5bb568e7"}});!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(a||(a={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(i||(i={}));var w=function(t){return A.get("todo-lists/".concat(t,"/tasks"))},P=function(t,e){return A.post("todo-lists/".concat(t,"/tasks"),{title:e})},R=function(t,e){return A.delete("todo-lists/".concat(t,"/tasks/").concat(e))},F=function(t,e,n){return A.put("todo-lists/".concat(t,"/tasks/").concat(e),n)},N={status:"idle",error:null},K=function(t){return{type:"APP/SET-STATUS",status:t}},U=function(t){return{type:"APP/SET-ERROR",error:t}},H=function(t,e){t.messages.length?e(U(t.messages[0])):e(U("Some error occurred")),e(K("failed"))},M=function(t,e){e(U(t.message?t.message:"Some error occurred")),e(K("failed"))},G={},V=function(t,e,n){return function(a,i){a(K("loading"));var c=i().tasks[t].find((function(t){return t.id===e}));if(c){var o=Object(I.a)({title:c.title,deadline:c.deadline,status:c.status,priority:c.priority,description:c.description,startDate:c.startDate},n);F(t,e,o).then((function(i){0===i.data.resultCode?(a(function(t,e,n){return{type:"UPDATE-TASK",toDoListId:n,taskId:t,model:e}}(e,n,t)),a(K("succeeded"))):H(i.data,a)})).catch((function(t){M(t,a)}))}}},z=y.a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"69175483-e93a-4825-bff5-a54b5bb568e7"}}),B=function(){return z.get("todo-lists")},J=function(t){return z.post("todo-lists",{title:t})},Y=function(t){return z.delete("todo-lists/".concat(t))},q=function(t,e){return z.put("todo-lists/".concat(t),{title:e})},Q=[],W=o.a.memo((function(t){console.log("EditableSpan is called");var e=Object(c.useState)(!1),n=Object(d.a)(e,2),a=n[0],i=n[1],o=Object(c.useState)(""),s=Object(d.a)(o,2),r=s[0],l=s[1];return a?Object(O.jsx)(u.a,{variant:"standard",value:r,onChange:function(t){l(t.currentTarget.value)},onBlur:function(){i(!1),t.onChange(r)},autoFocus:!0}):Object(O.jsx)("span",{onDoubleClick:function(){i(!0),l(t.title)},children:t.title})})),X=n(153),Z=n(164),$=o.a.memo((function(t){var e=Object(c.useCallback)((function(e){t.changeTitle(t.task.id,e,t.toDoListId)}),[t.changeTitle,t.toDoListId,t.task.id]);return Object(O.jsxs)("div",{style:{paddingLeft:"10px"},className:t.task.status===a.Completed?"is-done":"",children:[Object(O.jsx)(Z.a,{checked:t.task.status===a.Completed,onChange:function(e){t.changeStatus(t.task.id,e.currentTarget.checked?a.Completed:a.New,t.toDoListId)}}),Object(O.jsx)(W,{title:t.task.title,onChange:e}),Object(O.jsx)(j.a,{onClick:function(){return t.removeTask(t.task.id,t.toDoListId)},children:Object(O.jsx)(X.a,{})})]})})),_=o.a.memo((function(t){var e=t.demo,n=void 0!==e&&e,i=Object(l.a)(t,["demo"]);console.log("ToDoList is called");var o=Object(S.b)();Object(c.useEffect)((function(){var t;n||o((t=i.toDoList.id,function(e){e(K("loading")),w(t).then((function(n){e(function(t,e){return{type:"SET-TASKS",tasks:t,toDoListId:e}}(n.data.items,t)),e(K("succeeded"))}))}))}),[]);var s=Object(c.useCallback)((function(t){i.addTask(t,i.toDoList.id)}),[i.addTask,i.toDoList.id]),r=Object(c.useCallback)((function(t){i.changeTitleToDoList(i.toDoList.id,t)}),[i.changeTitleToDoList,i.toDoList.id]),d=Object(c.useCallback)((function(){i.changeFilter("all",i.toDoList.id)}),[i.changeFilter,i.toDoList.id]),u=Object(c.useCallback)((function(){i.changeFilter("active",i.toDoList.id)}),[i.changeFilter,i.toDoList.id]),b=Object(c.useCallback)((function(){i.changeFilter("completed",i.toDoList.id)}),[i.changeFilter,i.toDoList.id]),h=i.tasks;return"active"===i.toDoList.filter&&(h=h.filter((function(t){return t.status===a.New}))),"completed"===i.toDoList.filter&&(h=h.filter((function(t){return t.status===a.Completed}))),Object(O.jsxs)("div",{children:[Object(O.jsxs)("h3",{children:[Object(O.jsx)(W,{title:i.toDoList.title,onChange:r}),Object(O.jsx)(j.a,{onClick:function(){return i.removeToDoList(i.toDoList.id)},disabled:"loading"===i.toDoList.entityStatus,children:Object(O.jsx)(X.a,{})})]}),Object(O.jsx)(f,{addItem:s,title:"Task title...",disabled:"loading"===i.toDoList.entityStatus}),Object(O.jsx)("div",{children:h.map((function(t){return Object(O.jsx)($,{toDoListId:i.toDoList.id,task:t,removeTask:i.removeTask,changeStatus:i.changeStatus,changeTitle:i.changeTitle},t.id)}))}),Object(O.jsxs)("div",{children:[Object(O.jsx)(L.a,{size:"small",color:"all"===i.toDoList.filter?"secondary":"primary",variant:"contained",onClick:d,children:"All"}),Object(O.jsx)(L.a,{size:"small",color:"active"===i.toDoList.filter?"secondary":"primary",variant:"contained",onClick:u,children:"Active"}),Object(O.jsx)(L.a,{size:"small",color:"completed"===i.toDoList.filter?"secondary":"primary",variant:"contained",onClick:b,children:"Completed"})]})]})})),tt=n(166),et=n(163);function nt(t){return Object(O.jsx)(et.a,Object(I.a)({elevation:6,variant:"filled"},t))}function at(){var t=Object(S.b)(),e=Object(S.c)((function(t){return t.app.error})),n=function(e,n){"clickaway"!==n&&t(U(null))};return Object(O.jsx)(tt.a,{open:null!==e,autoHideDuration:6e3,onClose:n,children:Object(O.jsx)(nt,{onClose:n,severity:"error",children:e})})}var it=function(t){var e=t.demo,n=void 0!==e&&e;console.log("App is called");var a=Object(S.b)(),i=Object(S.c)((function(t){return t.tasks})),o=Object(S.c)((function(t){return t.toDoLists})),s=Object(S.c)((function(t){return t.app.status}));Object(c.useEffect)((function(){n||a((function(t){t(K("loading")),B().then((function(e){t({type:"SET-TODO-LISTS",toDoLists:e.data}),t(K("succeeded"))}))}))}),[]);var r=Object(c.useCallback)((function(t,e){a(function(t,e){return function(n){n(K("loading")),R(t,e).then((function(a){0===a.data.resultCode?(n(function(t,e){return{type:"REMOVE-TASK",taskId:t,toDoListId:e}}(e,t)),n(K("succeeded"))):H(a.data,n)})).catch((function(t){M(t,n)}))}}(e,t))}),[a]),d=Object(c.useCallback)((function(t,e){a({type:"CHANGE-TODOLIST-FILTER",id:e,filter:t})}),[a]),l=Object(c.useCallback)((function(t,e){a(function(t,e){return function(n){n(K("loading")),P(t,e).then((function(t){0===t.data.resultCode?(n({type:"ADD-TASK",task:t.data.data.item}),n(K("succeeded"))):H(t.data,n)})).catch((function(t){M(t,n)}))}}(e,t))}),[a]),u=Object(c.useCallback)((function(t,e,n){a(V(n,t,{status:e}))}),[a]),b=Object(c.useCallback)((function(t){a(function(t){return function(e){e(K("loading")),e({type:"CHANGE-TODOLIST-STATUS",id:t,status:"loading"}),Y(t).then((function(n){0===n.data.resultCode?(e({type:"REMOVE-TODOLIST",id:t}),e(K("succeeded"))):H(n.data,e)})).catch((function(t){M(t,e)}))}}(t))}),[a]),C=Object(c.useCallback)((function(t){var e;a((e=t,function(t){t(K("loading")),J(e).then((function(e){0===e.data.resultCode?(t({type:"ADD-TODOLIST",toDoList:e.data.data.item}),t(K("succeeded"))):H(e.data,t)})).catch((function(e){M(e,t)}))}))}),[a]),x=Object(c.useCallback)((function(t,e,n){a(V(n,t,{title:e}))}),[a]),I=Object(c.useCallback)((function(t,e){a(function(t,e){return function(n){n(K("loading")),q(t,e).then((function(a){0===a.data.resultCode?(n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e)),n(K("succeeded"))):H(a.data,n)})).catch((function(t){M(t,n)}))}}(t,e))}),[a]);return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(h.a,{position:"static",children:Object(O.jsxs)(T.a,{children:[Object(O.jsx)(j.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(O.jsx)(k.a,{})}),Object(O.jsx)(D.a,{variant:"h6",children:"News"}),Object(O.jsx)(L.a,{color:"inherit",children:"Login"})]})}),"loading"===s&&Object(O.jsx)(p.a,{}),Object(O.jsx)(at,{}),Object(O.jsxs)(g.a,{fixed:!0,children:[Object(O.jsx)(m.a,{container:!0,style:{padding:"20px 0"},children:Object(O.jsx)(f,{addItem:C,title:"TodoList title..."})}),Object(O.jsx)(m.a,{container:!0,spacing:5,children:o.map((function(t){var e=i[t.id];return Object(O.jsx)(m.a,{item:!0,children:Object(O.jsx)(v.a,{style:{padding:"20px"},elevation:10,children:Object(O.jsx)(_,{toDoList:t,demo:n,tasks:e,removeTask:r,changeFilter:d,addTask:l,changeStatus:u,removeToDoList:b,changeTitle:x,changeTitleToDoList:I},t.id)})},t.id)}))})]})]})},ct=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,167)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),i(t),c(t),o(t)}))},ot=n(30),st=n(73),rt=Object(ot.c)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET-TASKS":return Object(I.a)(Object(I.a)({},t),{},Object(C.a)({},e.toDoListId,Object(x.a)(e.tasks)));case"REMOVE-TASK":var n=Object(I.a)({},t),a=n[e.toDoListId];return n[e.toDoListId]=a.filter((function(t){return t.id!==e.taskId})),n;case"ADD-TASK":var i=Object(I.a)({},t),c=i[e.task.todoListId],o=e.task;return i[e.task.todoListId]=[o].concat(Object(x.a)(c)),i;case"UPDATE-TASK":return Object(I.a)(Object(I.a)({},t),{},Object(C.a)({},e.toDoListId,t[e.toDoListId].map((function(t){return t.id===e.taskId?Object(I.a)(Object(I.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(I.a)(Object(I.a)({},t),{},Object(C.a)({},e.toDoList.id,[]));case"REMOVE-TODOLIST":var s=Object(I.a)({},t);return delete s[e.id],s;case"SET-TODO-LISTS":var r=Object(I.a)({},t);return e.toDoLists.forEach((function(t){r[t.id]=[]})),r;default:return t}},toDoLists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET-TODO-LISTS":return e.toDoLists.map((function(t){return Object(I.a)(Object(I.a)({},t),{},{filter:"all",entityStatus:"idle"})}));case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":return[].concat(Object(x.a)(t),[Object(I.a)(Object(I.a)({},e.toDoList),{},{filter:"all",entityStatus:"idle"})]);case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(I.a)(Object(I.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(I.a)(Object(I.a)({},t),{},{filter:e.filter}):t}));case"CHANGE-TODOLIST-STATUS":return t.map((function(t){return t.id===e.id?Object(I.a)(Object(I.a)({},t),{},{entityStatus:e.status}):t}));default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(I.a)(Object(I.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(I.a)(Object(I.a)({},t),{},{error:e.error});default:return t}}}),dt=Object(ot.d)(rt,Object(ot.a)(st.a));window.store=dt,r.a.render(Object(O.jsx)(S.a,{store:dt,children:Object(O.jsx)(it,{})}),document.getElementById("root")),ct()},87:function(t,e,n){},88:function(t,e,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.49bf1a0d.chunk.js.map