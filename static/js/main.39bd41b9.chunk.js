(this.webpackJsonpticklist=this.webpackJsonpticklist||[]).push([[0],{12:function(e,t,n){e.exports={HeaderWrapper:"Header_HeaderWrapper__25J6e"}},13:function(e,t,n){e.exports=n.p+"static/media/icon.6dac99c6.png"},19:function(e,t,n){e.exports=n(30)},24:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),l=n.n(o),i=(n(24),n(12)),d=n.n(i),s=n(13),c=n.n(s),u=n(2),m=n(3);function p(){return r.a.createElement("div",{className:d.a.HeaderWrapper},r.a.createElement("img",{src:c.a,alt:"site-icon"}),r.a.createElement("p",null,"Ticklist"),r.a.createElement(u.a,{icon:m.a}))}var F=n(9),f=n(14),_=n(15),h=n(17),E=n(16),v=n(18),g=n(7),k=n.n(g);function w(e){return r.a.createElement("div",{className:k.a.Folder},r.a.createElement("p",null,e.folder.name),r.a.createElement(u.a,{className:k.a.Icon,onClick:function(){return e.deleteFolder(e.folder.id)},icon:m.d}))}var N=n(4),y=n.n(N),C=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={folders:[{id:0,name:"school",taskQuantity:0},{id:1,name:"work",taskQuantity:0},{id:2,name:"grocery",taskQuantity:0}],newFolderName:"",isEditing:!1},n.showFolderInput=function(){n.setState({isEditing:!0})},n.newFolderNameUpdate=function(e){n.setState({newFolderName:e.target.value})},n.submitIfIsEnter=function(e){13===(e.keyCode?e.keyCode:e.which)&&n.addFolder()},n.addFolder=function(){if(""!==n.state.newFolderName){var e,t=Object(F.a)(n.state.folders);e=0===t.length?0:t[t.length-1].id+1,t.push({id:e,name:n.state.newFolderName,taskQuantity:0}),n.setState({folders:t,newFolderName:"",isEditing:!1})}},n.deleteFolder=function(e){var t=Object(F.a)(n.state.folders),a=t.findIndex((function(n){return t.id===e}));t.splice(a,1),n.setState({folders:t})},n}return Object(v.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this,t=this.state.folders.map((function(t){return r.a.createElement(w,{key:t.id,folder:t,deleteFolder:e.deleteFolder})})),n=r.a.createElement(u.a,{onClick:this.showFolderInput,className:y.a.AddFolderSign,icon:m.c}),a=r.a.createElement("div",{className:y.a.AddFolderInput},r.a.createElement("input",{type:"text",id:"newFolder",onChange:function(t){return e.newFolderNameUpdate(t)},onKeyPress:function(t){return e.submitIfIsEnter(t)}}),r.a.createElement(u.a,{className:y.a.Icon,onClick:this.addFolder,icon:m.b}));return r.a.createElement("div",{className:y.a.FoldersContainer},r.a.createElement("h1",{className:y.a.FolderTitle},"Folders"),t,r.a.createElement("div",{className:y.a.FolderControl},this.state.isEditing?a:n))}}]),t}(a.Component),I=n(8),b=n.n(I);var A=function(){return r.a.createElement("div",{className:b.a.App},r.a.createElement("style",null,"@import url('https://fonts.googleapis.com/css?family=Julius+Sans+One|Quicksand:300,400,500,600&display=swap');"),r.a.createElement(p,null),r.a.createElement("div",{className:b.a.Content},r.a.createElement(C,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e,t,n){e.exports={FoldersContainer:"Folders_FoldersContainer__2vgW_",FolderTitle:"Folders_FolderTitle__2HmUo",FolderControl:"Folders_FolderControl__26CW6",AddFolderSign:"Folders_AddFolderSign__39MOr",AddFolderInput:"Folders_AddFolderInput__1CV8U",Icon:"Folders_Icon__2TNqH"}},7:function(e,t,n){e.exports={Folder:"Folder_Folder__2dPeI",Icon:"Folder_Icon__3GQEb",shake:"Folder_shake__1AGYJ"}},8:function(e,t,n){e.exports={App:"App_App__16ZpL",Content:"App_Content__ZaMNr"}}},[[19,1,2]]]);
//# sourceMappingURL=main.39bd41b9.chunk.js.map