(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{229:function(t,e,n){},230:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(85),l=n.n(c),r=(n(92),n(229),n(6)),i=n(7),u=n(9),s=n(8),h=n(10),d=(a.Component,n(45)),p=n(86),m=n(27),b=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(u.a)(this,Object(s.a)(e).call(this))).handleInput=function(e){13===e.keyCode&&t.props.add(e.target.value)},t.handleChange=function(e){t.setState(Object(p.a)({},e.target.name,parseInt(""===e.target.value?0:e.target.value)))},t.handleInput=t.handleInput.bind(Object(m.a)(t)),t.state={a:"",b:"",c:""},t}return Object(h.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){console.log(this),this.refs.a.focus()}},{key:"render",value:function(){var t=this;return o.a.createElement("div",null,o.a.createElement("input",{ref:"a",name:"a",onChange:this.handleChange,value:this.state.a,onKeyDown:this.handleInput,type:"text"}),"+",o.a.createElement("input",{name:"b",onChange:this.handleChange,value:this.state.b,onKeyDown:this.handleInput,type:"text"}),"+",o.a.createElement("input",{name:"c",onChange:this.handleChange,value:this.state.c,onKeyDown:this.handleInput,type:"text"}),"=",o.a.createElement("p",null,this.state.a+this.state.b+this.state.c),o.a.createElement("input",{ref:function(e){t.inp=e},type:"text"}),o.a.createElement("button",{onClick:function(){console.log(t.inp.value)}},"\u63d0\u4ea4"))}}]),e}(a.Component),f=function(t){function e(){return Object(r.a)(this,e),Object(u.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this,e=this.props.todo;return o.a.createElement("div",null,o.a.createElement("ul",null,e.map((function(e,n){return o.a.createElement("li",{key:n},e,"---",o.a.createElement("button",{onClick:function(e){return t.props.del(n,e)}},"\u5220\u9664"))}))))}}]),e}(a.Component);f.defaultProps={todo:[1,2,3,4,5]};var v=function(t){function e(){var t;Object(r.a)(this,e),(t=Object(u.a)(this,Object(s.a)(e).call(this))).addItem=function(e){t.setState({todo:[].concat(Object(d.a)(t.state.todo),[e])})},t.delItem=function(e,n){console.log(e,n);var a=Object(d.a)(t.state.todo);a.splice(e,1),t.setState((function(t,e){return console.log(t.todo),{todo:a}}))},t.state={todo:[1,2,3]};var n={a:100,b:[1,2,3]},a=Object.assign({},n,{c:300});return console.log(a===n),Object.keys(n).forEach((function(t){console.log(t,n[t])})),t}return Object(h.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(b,{add:this.addItem}),o.a.createElement(f,{del:this.delItem,todo:this.state.todo}))}}]),e}(a.Component);l.a.render(o.a.createElement(v,null),document.getElementById("root"))},87:function(t,e,n){t.exports=n(230)}},[[87,1,2]]]);
//# sourceMappingURL=main.66c62c94.chunk.js.map