(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(28)},25:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(3),r=a.n(l),i=a(12),o=a(9),m=a(10),u=a(4),s=(a(25),function(){return c.a.createElement("div",{className:"ui fixed menu"},c.a.createElement("div",{className:"ui container center"},c.a.createElement("h2",null,"Contact Manager")))}),d=a(5),f=a(6),E=a(11),v=a(7),p=a(13),b=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(c)))).state={name:"",email:""},a.add=function(e){e.preventDefault(),""!==a.state.name&&""!==a.state.email?(a.props.addContactHandler(a.state),a.setState({name:"",email:""})):alert("ALl the fields are mandatory!")},a}return Object(p.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"ui main"},c.a.createElement("h2",null,"Add Contact"),c.a.createElement("form",{className:"ui form",onSubmit:this.add},c.a.createElement("div",{className:"field"},c.a.createElement("label",null,"Name"),c.a.createElement("input",{type:"text",name:"name",placeholder:"Name",value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})}})),c.a.createElement("div",{className:"field"},c.a.createElement("label",null,"Email"),c.a.createElement("input",{type:"text",name:"email",placeholder:"Email",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}})),c.a.createElement("button",{className:"ui button blue"},"Add")))}}]),t}(c.a.Component),g=a(8),h=a.n(g),N=function(e){var t=e.contact,a=t.id,n=t.name,l=t.email;return c.a.createElement("div",{className:"item"},c.a.createElement("img",{className:"ui avatar image",src:h.a,alt:"user"}),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"header"},n),c.a.createElement("div",null,l)),c.a.createElement("i",{className:"trash alternate outline icon",style:{color:"red",marginTop:"7px"},onClick:function(){return e.clickHander(a)}}))},O=function(e){console.log(e);var t=function(t){e.getContactId(t)},a=e.contacts.map(function(e){return c.a.createElement(N,{contact:e,clickHander:t,key:e.id})});return c.a.createElement("div",{className:"ui celled list"},a)};var j=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)(function(){var e=JSON.parse(localStorage.getItem("contacts"));e&&l(e)},[]),Object(n.useEffect)(function(){localStorage.setItem("contacts",JSON.stringify(a))},[a]),c.a.createElement("div",{className:"ui container"},c.a.createElement(s,null),c.a.createElement(b,{addContactHandler:function(e){console.log(e),l([].concat(Object(o.a)(a),[Object(i.a)({id:Object(u.uuid)()},e)]))}}),c.a.createElement(O,{contacts:a,getContactId:function(e){var t=a.filter(function(t){return t.id!==e});l(t)}}))};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)))},8:function(e,t,a){e.exports=a.p+"static/media/user.a0c4ee77.png"}},[[14,2,1]]]);
//# sourceMappingURL=main.22a3eaff.chunk.js.map