(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{69:function(t,e,i){},70:function(t,e,i){},78:function(t,e,i){"use strict";i.r(e);var c=i(0),n=i.n(c),a=i(9),o=i.n(a),s=(i(69),i(70),i(27)),r=i(119),l=i(109),d=i(110),j=i(5),u=n.a.memo((function(t){console.log("AddItem is called");var e=Object(c.useState)(!1),i=Object(s.a)(e,2),n=i[0],a=i[1],o=Object(c.useState)(""),u=Object(s.a)(o,2),O=u[0],b=u[1],T=function(){""!==O.trim()?(t.addItem(O.trim()),b("")):a(!0)};return Object(j.jsxs)("div",{children:[Object(j.jsx)(r.a,{variant:"outlined",label:[t.title],value:O,onChange:function(t){b(t.currentTarget.value)},onKeyPress:function(t){n&&a(!1),13===t.charCode&&T()},error:n,helperText:n&&"Title is required!"}),Object(j.jsx)(l.a,{onClick:T,children:Object(j.jsx)(d.a,{color:"primary"})})]})})),O=i(113),b=i(114),T=i(116),f=i(112),h=i(117),D=i(118),k=i(79),L=i(115),g=i(26),I=i(25),v=i(39),p=i(12),x=i(120),m={},C=[],S=n.a.memo((function(t){console.log("EditableSpan is called");var e=Object(c.useState)(!1),i=Object(s.a)(e,2),n=i[0],a=i[1],o=Object(c.useState)(""),l=Object(s.a)(o,2),d=l[0],u=l[1];return n?Object(j.jsx)(r.a,{variant:"standard",value:d,onChange:function(t){u(t.currentTarget.value)},onBlur:function(){a(!1),t.onChange(d)},autoFocus:!0}):Object(j.jsx)("span",{onDoubleClick:function(){a(!0),u(t.title)},children:t.title})})),A=i(111),E=i(121),y=n.a.memo((function(t){var e=Object(c.useCallback)((function(e){t.changeTitle(t.task.id,e,t.toDoListId)}),[t.changeTitle,t.toDoListId,t.task.id]);return Object(j.jsxs)("div",{style:{paddingLeft:"10px"},className:t.task.isDone?"is-done":"",children:[Object(j.jsx)(E.a,{checked:t.task.isDone,onChange:function(e){t.changeStatus(t.task.id,e.currentTarget.checked,t.toDoListId)}}),Object(j.jsx)(S,{title:t.task.title,onChange:e}),Object(j.jsx)(l.a,{onClick:function(){return t.removeTask(t.task.id,t.toDoListId)},children:Object(j.jsx)(A.a,{})})]})})),F=n.a.memo((function(t){console.log("ToDoList is called");var e=Object(c.useCallback)((function(e){t.addTask(e,t.id)}),[t.addTask,t.id]),i=Object(c.useCallback)((function(e){t.changeTitleToDoList(t.id,e)}),[t.changeTitleToDoList,t.id]),n=Object(c.useCallback)((function(){t.changeFilter("all",t.id)}),[t.changeFilter,t.id]),a=Object(c.useCallback)((function(){t.changeFilter("active",t.id)}),[t.changeFilter,t.id]),o=Object(c.useCallback)((function(){t.changeFilter("completed",t.id)}),[t.changeFilter,t.id]),s=t.tasks;return"active"===t.filter&&(s=s.filter((function(t){return!1===t.isDone}))),"completed"===t.filter&&(s=s.filter((function(t){return!0===t.isDone}))),Object(j.jsxs)("div",{children:[Object(j.jsxs)("h3",{children:[Object(j.jsx)(S,{title:t.title,onChange:i}),Object(j.jsx)(l.a,{onClick:function(){return t.removeToDoList(t.id)},children:Object(j.jsx)(A.a,{})})]}),Object(j.jsx)(u,{addItem:e,title:"Task title..."}),Object(j.jsx)("div",{children:s.map((function(e){return Object(j.jsx)(y,{toDoListId:t.id,task:e,removeTask:t.removeTask,changeStatus:t.changeStatus,changeTitle:t.changeTitle},e.id)}))}),Object(j.jsxs)("div",{children:[Object(j.jsx)(f.a,{size:"small",color:"all"===t.filter?"secondary":"primary",variant:"contained",onClick:n,children:"All"}),Object(j.jsx)(f.a,{size:"small",color:"active"===t.filter?"secondary":"primary",variant:"contained",onClick:a,children:"Active"}),Object(j.jsx)(f.a,{size:"small",color:"completed"===t.filter?"secondary":"primary",variant:"contained",onClick:o,children:"Completed"})]})]})}));var N=function(){console.log("App is called");var t=Object(g.b)(),e=Object(g.c)((function(t){return t.tasks})),i=Object(g.c)((function(t){return t.toDoLists})),n=Object(c.useCallback)((function(e,i){t(function(t,e){return{type:"REMOVE-TASK",taskId:t,toDoListId:e}}(e,i))}),[t]),a=Object(c.useCallback)((function(e,i){t({type:"CHANGE-TODOLIST-FILTER",id:i,filter:e})}),[t]),o=Object(c.useCallback)((function(e,i){t(function(t,e){return{type:"ADD-TASK",title:t,toDoListId:e}}(e,i))}),[t]),s=Object(c.useCallback)((function(e,i,c){t(function(t,e,i){return{type:"CHANGE-TASK-STATUS",toDoListId:i,taskId:t,isDone:e}}(e,i,c))}),[t]),r=Object(c.useCallback)((function(e){t({type:"REMOVE-TODOLIST",id:e})}),[t]),d=Object(c.useCallback)((function(e){t({type:"ADD-TODOLIST",title:e,toDoListId:Object(x.a)()})}),[t]),I=Object(c.useCallback)((function(e,i,c){t(function(t,e,i){return{type:"CHANGE-TASK-TITLE",toDoListId:i,taskId:t,title:e}}(e,i,c))}),[t]),v=Object(c.useCallback)((function(e,i){t({type:"CHANGE-TODOLIST-TITLE",id:e,title:i})}),[t]);return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(O.a,{position:"static",children:Object(j.jsxs)(b.a,{children:[Object(j.jsx)(l.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(j.jsx)(L.a,{})}),Object(j.jsx)(T.a,{variant:"h6",children:"News"}),Object(j.jsx)(f.a,{color:"inherit",children:"Login"})]})}),Object(j.jsxs)(h.a,{fixed:!0,children:[Object(j.jsx)(D.a,{container:!0,style:{padding:"20px 0"},children:Object(j.jsx)(u,{addItem:d,title:"TodoList title..."})}),Object(j.jsx)(D.a,{container:!0,spacing:5,children:i.map((function(t){var i=e[t.id];return Object(j.jsx)(D.a,{item:!0,children:Object(j.jsx)(k.a,{style:{padding:"20px"},elevation:10,children:Object(j.jsx)(F,{id:t.id,title:t.title,tasks:i,removeTask:n,changeFilter:a,addTask:o,changeStatus:s,filter:t.filter,removeToDoList:r,changeTitle:I,changeTitleToDoList:v},t.id)})},t.id)}))})]})]})},K=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,123)).then((function(e){var i=e.getCLS,c=e.getFID,n=e.getFCP,a=e.getLCP,o=e.getTTFB;i(t),c(t),n(t),a(t),o(t)}))},G=i(31),H=Object(G.b)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":var i=Object(p.a)({},t),c=i[e.toDoListId];return i[e.toDoListId]=c.filter((function(t){return t.id!==e.taskId})),i;case"ADD-TASK":var n=Object(p.a)({},t),a=n[e.toDoListId],o={id:Object(x.a)(),title:e.title,isDone:!1};return n[e.toDoListId]=[o].concat(Object(v.a)(a)),n;case"CHANGE-TASK-STATUS":return Object(p.a)(Object(p.a)({},t),{},Object(I.a)({},e.toDoListId,t[e.toDoListId].map((function(t){return t.id===e.taskId?Object(p.a)(Object(p.a)({},t),{},{isDone:e.isDone}):t}))));case"CHANGE-TASK-TITLE":return Object(p.a)(Object(p.a)({},t),{},Object(I.a)({},e.toDoListId,t[e.toDoListId].map((function(t){return t.id===e.taskId?Object(p.a)(Object(p.a)({},t),{},{title:e.title}):t}))));case"ADD-TODOLIST":return Object(p.a)(Object(p.a)({},t),{},Object(I.a)({},e.toDoListId,[]));case"REMOVE-TODOLIST":var s=Object(p.a)({},t);return delete s[e.id],s;default:return t}},toDoLists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":var i={id:e.toDoListId,title:e.title,filter:"all"};return[].concat(Object(v.a)(t),[i]);case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(p.a)(Object(p.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(p.a)(Object(p.a)({},t),{},{filter:e.filter}):t}));default:return t}}}),w=Object(G.c)(H);window.store=w,o.a.render(Object(j.jsx)(g.a,{store:w,children:Object(j.jsx)(N,{})}),document.getElementById("root")),K()}},[[78,1,2]]]);
//# sourceMappingURL=main.0c852626.chunk.js.map