(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1041:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(47),c=n.n(o),i=n(94),l=n(1045),s=(n(477),n(27)),u=n(28),p=n(30),m=n(29),d=n(31),h=n(8),f=n.n(h),g=n(1042),E=n(1048),b=n(1044),O=n(1046),v=n(32),j=n(159),y=n.n(j),C=n(160),R=n.n(C),w=n(35),S=n.n(w),k={home:x("/"),actions:{mint:x("/actions/mint")}};function x(e){return"/"!==e.charAt(0)?"/tokenminter/"+e:"/tokenminter"+e}var L=n(40),N=n(61),T=n.n(N),M=n(55),D=n.n(M),_=n(149),A=n.n(_),F=n(151),I=n.n(F),B=n(150),P=n.n(B),U=n(65),G=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(D.a,{item:!0,key:this.props.key||null,sm:6,md:4,lg:3},r.a.createElement(U.a,{component:this.props.link||null},r.a.createElement(A.a,{className:e.card},r.a.createElement(P.a,Object.assign({className:e.cardMedia},this.props.media)),r.a.createElement(I.a,{className:e.cardContent},r.a.createElement(S.a,{gutterBottom:!0,variant:"h5",component:"h2"},this.props.heading),r.a.createElement(S.a,null,this.props.description)),this.props.cardActions||null)))}}]),t}(a.Component),V=n(44),W="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",Y=function(e){return r.a.createElement(g.a,Object.assign({to:x("/actions/mint/")},e))},H=function(e){return r.a.createElement(g.a,Object.assign({to:x("/")},e))},q=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(a.Fragment,null,r.a.createElement(T.a,null),r.a.createElement("main",null,r.a.createElement("div",{className:e.heroUnit},r.a.createElement("div",{className:e.heroContent},r.a.createElement(S.a,{component:"h1",variant:"h4",align:"center",color:"textPrimary",gutterBottom:!0},"Welcome to the Future of Fundraising"),r.a.createElement(S.a,{variant:"h6",align:"center",color:"textSecondary",paragraph:!0,style:{marginBottom:0}},"Select an action below."))),r.a.createElement("div",{className:f()(e.layout,e.cardGrid)},r.a.createElement(D.a,{container:!0,spacing:40},r.a.createElement(G,{classes:e,link:Y,heading:"Mint",description:"Create a fundraising token.",media:{component:"img",image:x("/static/ETHEREUM-ICON_Black_small.png"),title:"Mint"}}),r.a.createElement(G,{classes:e,link:H,heading:"Test",description:"Lorem ipsum.",media:{component:"img",image:W,title:"Lorem Ipsum",height:245}}),r.a.createElement(G,{classes:e,link:H,heading:"Test",description:"Lorem ipsum.",media:{component:"img",image:W,title:"Lorem Ipsum",height:245}})))))}}]),t}(a.Component),z=Object(v.withStyles)(function(e){return{icon:{marginRight:2*e.spacing.unit},heroUnit:{backgroundColor:e.palette.background.paper},heroContent:{maxWidth:600,margin:"0 auto",padding:"".concat(4*e.spacing.unit,"px 0 ").concat(4*e.spacing.unit,"px")},layout:Object(V.a)({width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(1100+3*e.spacing.unit*2),{width:1100,marginLeft:"auto",marginRight:"auto"}),cardGrid:{padding:"".concat(8*e.spacing.unit,"px 0")},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{},cardContent:{flexGrow:1}}})(q),J=n(165),Z=n(21),X=n(1043),$=n(1047),K=n(9),Q=n.n(K),ee=n(60),te=n.n(ee),ne=n(156),ae=n.n(ne),re=n(157),oe=n.n(re),ce=n(158),ie=n.n(ce),le=n(112),se=n.n(le),ue={STORE_DEPLOYMENT_RESULT:"FORMS:STORE_DEPLOYMENT_RESULT",CLEAR_DEPLOYMENT_RESULT:"FORMS:CLEAR_DEPLOYMENT_RESULT",LOG_ERROR:"FORMS:LOG_ERROR",CLEAR_ERRORS:"FORMS:CLEAR_ERRORS"},pe={deploymentResult:null,errors:[]};var me=n(1),de=n.n(me),he=n(155),fe=n.n(he),ge=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).handleInputChange=function(e){return function(t){var a=t.target;n.setState({fieldValues:Object(Z.a)({},n.state.fieldValues,Object(V.a)({},e,a.value))})}},n.state={fieldValues:e.fieldValues||{}},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentWillUnmount",value:function(){this.props.handleUnmount(this.props.step,this.state.fieldValues)}},{key:"render",value:function(){return null}}]),t}(a.Component),Ee=n(111),be=n.n(Ee),Oe=n(110),ve=n.n(Oe),je=n(153),ye=n.n(je),Ce=n(152),Re=n.n(Ce),we=n(154),Se=n.n(we),ke=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).button=null,n.state={anchorEl:null,selectedIndex:null},n.handleOpen=function(e){n.setState({anchorEl:e.currentTarget})},n.handleClose=function(e){n.setState({anchorEl:null})},n.handleSelect=function(e,t){n.props.selectAction&&n.props.selectAction(e.target.dataset.itemid),n.setState({selectedIndex:t,anchorEl:null})},n.getMenuItems=function(){return n.props.menuItemData.map(function(e,t){return r.a.createElement(Re.a,{onClick:function(e){return n.handleSelect(e,t)},"data-itemid":e.id,key:e.id,selected:t===n.state.selectedIndex},e.name)})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.anchorEl,t=this.props.menuItemData;return r.a.createElement("div",{className:this.props.classes.root},r.a.createElement(be.a,null,r.a.createElement(ve.a,{button:!0,"aria-haspopup":"true","aria-controls":"lock-menu","aria-label":this.props.menuTitle,onClick:this.handleOpen},r.a.createElement(ye.a,{primary:this.props.menuTitle,secondary:null!==this.state.selectedIndex?t[this.state.selectedIndex].name:this.props.placeholder||""}))),r.a.createElement(Se.a,{id:"lock-menu",anchorEl:e,open:Boolean(e),onClose:this.handleClose},this.getMenuItems()))}}]),t}(a.Component),xe=Object(v.withStyles)(function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper}}})(ke),Le=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).handleReset=function(){n.setState({fieldValues:n.props.fieldValues||{},selectedMenuItem:null})},n.handleMenuSelect=function(e){n.setState(Object(Z.a)({},n.state,{selectedMenuItem:e}))},n.handleDeploy=function(e){e.preventDefault(),n.state.selectedMenuItem&&(n.props.deployContract(n.state.selectedMenuItem,n.props.constructorNodes[n.state.selectedMenuItem].inputs.map(function(e){return{order:e.order,value:n.state.fieldValues[e.id]}})),n.props.handleNext())},n.getFormFields=function(){return n.state.selectedMenuItem?Object.values(n.props.constructorNodes[n.state.selectedMenuItem].inputs).map(function(e){return r.a.createElement(D.a,{item:!0,xs:12,sm:6,key:e.id},r.a.createElement(fe.a,{required:!0,id:e.id,name:e.name,label:(t=e.name,t.charAt(0).toUpperCase()+t.slice(1)),value:n.state.fieldValues[e.id]||"",onChange:n.handleInputChange(e.id),fullWidth:!0}));var t}):null},n.state.selectedMenuItem=null,n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(a.Fragment,null,r.a.createElement(xe,{classes:{root:e.root},menuItemData:Ne(this.props.constructorNodes),menuTitle:"Token",placeholder:"Please select a token",selectAction:this.handleMenuSelect}),r.a.createElement(D.a,{container:!0,spacing:24},this.getFormFields()),this.props.getButtons(this.handleDeploy))}}]),t}(ge);function Ne(e){var t=Object.values(e).map(function(e){return{id:e.id,name:e.contractName}});return t.sort(function(e,t){return e.name===t.name?0:e.name<t.name?-1:1}),t}Le.propTypes={classes:de.a.object.isRequired,constructorNodes:de.a.object.isRequired,getButtons:de.a.func.isRequired,deployContract:de.a.func.isRequired,handleNext:de.a.func.isRequired};var Te=n(398),Me=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).getResultJsx=function(){return n.props.deploymentResult.error?r.a.createElement(U.b,{variant:"h6",align:"center",gutterBottom:!0},"We're sorry, your deployment appears to have failed.\nPlease see MetaMask for details."):r.a.createElement(a.Fragment,null,r.a.createElement(U.b,{variant:"h5",align:"center",gutterBottom:!0},"Success!"),r.a.createElement(U.b,{variant:"subtitle1",align:"center"},"Your token was deployed at the following address:"),r.a.createElement(Te.CopyToClipboard,{text:n.props.deploymentResult.data.address,style:{cursor:"pointer"}},r.a.createElement(U.b,{variant:"subtitle1",align:"center",gutterBottom:!0},n.props.deploymentResult.data.address)))},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,this.props.deploymentResult?this.getResultJsx():r.a.createElement(U.b,{variant:"h5",align:"center",gutterBottom:!0},"Please wait while your token is created..."))}}]),t}(a.Component),De=n(399),_e=Object(De.a)([function(e){return e.graphs.contracts}],function(e){return Object.entries(e).reduce(function(e,t){var n=Object(J.a)(t,2),a=n[0],r=n[1];return e[a]={id:a,contractName:r.contractName(),inputs:r.inputNodes(r.constructorNodeId())},e},{})}),Ae={mint:{numSteps:1,labels:["Create Token"],components:[function(e){return r.a.createElement(Le,Object.assign({key:"0"},e))},function(e){return r.a.createElement(Me,Object.assign({key:"final"},e))}]}};var Fe=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).handleNext=function(){n.setState(function(e){return{currentStep:e.currentStep+1}})},n.handleBack=function(){n.setState(function(e){return{currentStep:e.currentStep-1}})},n.handleReset=function(){n.setState({currentStep:0,fieldValues:{}})},n.saveChildFieldValues=function(e,t){t&&n.setState(Object(Z.a)({},n.state,{fieldValues:Object(Z.a)({},n.state.fieldValues,Object(V.a)({},e,t))}))},n.getActiveChildProps=function(e,t,a){var r={handleUnmount:n.saveChildFieldValues,classes:n.props.classes,fieldValues:n.state.fieldValues[e]||null,step:e,getButtons:n.getButtonComponents(e,t,a),handleNext:n.handleNext};return"mint"===t&&(0===e?(r.constructorNodes=Object.entries(n.props.constructorNodes).reduce(function(e,t){var n=Object(J.a)(t,2),a=n[0],r=n[1];return r.contractName.includes("ERC20")&&(e[a]=r),e},{}),r.deployContract=n.props.deployContract):1===e&&(r.deploymentResult=n.props.deploymentResult)),r},n.getButtonComponents=function(e,t,o){return function(c){var i=n.props.classes;return e<Ae[t].numSteps?r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:i.buttons},0!==e&&r.a.createElement(se.a,{onClick:n.handleBack,className:i.button},"Back"),r.a.createElement(se.a,{variant:"contained",color:"primary",onClick:e===Ae[t].numSteps-1?c:n.handleNext,className:i.button},e===Ae[t].numSteps-1?o:"Next"))):null}},n.state={currentStep:0,fieldValues:{}},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&this.handleReset()}},{key:"componentWillUnmount",value:function(){this.props.clearDeploymentResult()}},{key:"render",value:function(){var e=this.props.classes,t=this.state.currentStep,n=function(e){var t={};if(!Object(X.a)(e,Object(Z.a)({},{exact:!1,strict:!1},{path:k.actions.mint})))throw new Error("Invalid URL.");return t.workflow="mint",t.title="Mint",t.finalStepName="Deploy",t}(this.props.location.pathname),o=n.workflow,c=n.title,i=n.finalStepName;return r.a.createElement(a.Fragment,null,r.a.createElement(T.a,null),r.a.createElement($.a,{message:"If you leave this page, you will lose your work. Are you sure you want to leave?"}),r.a.createElement("main",{className:e.layout},r.a.createElement(te.a,{className:e.paper},r.a.createElement(S.a,{component:"h1",variant:"h4",align:"center",gutterBottom:!0},c),t===Ae[o].numSteps?null:r.a.createElement(ae.a,{activeStep:t,className:e.stepper},Ae[o].labels.map(function(e){return r.a.createElement(oe.a,{key:e},r.a.createElement(ie.a,null,e))})),r.a.createElement(a.Fragment,null,Ae[o].components[t](this.getActiveChildProps(t,o,i))))))}}]),t}(a.Component),Ie=Object(i.b)(function(e){return{constructorNodes:_e(e),deploymentResult:e.forms.deploymentResult}},function(e){return{deployContract:function(t,n){return e(L.actionCreators.contracts.deploy(t,n))},clearDeploymentResult:function(){return e({type:ue.CLEAR_DEPLOYMENT_RESULT})}}})(Q()(function(e){return{layout:Object(V.a)({width:"auto",marginLeft:2*e.spacing.unit,marginRight:2*e.spacing.unit},e.breakpoints.up(600+2*e.spacing.unit*2),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(V.a)({marginTop:3*e.spacing.unit,marginBottom:3*e.spacing.unit,padding:2*e.spacing.unit},e.breakpoints.up(600+3*e.spacing.unit*2),{marginTop:6*e.spacing.unit,marginBottom:6*e.spacing.unit,padding:3*e.spacing.unit}),stepper:{padding:"".concat(3*e.spacing.unit,"px 0 ").concat(5*e.spacing.unit,"px")},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:3*e.spacing.unit,marginLeft:e.spacing.unit}}})(Fe)),Be=Object(v.createMuiTheme)({palette:{primary:{main:"#7cb342",light:"#aee571",dark:"#4b830d"}},typography:{useNextVariants:!0,fontFamily:'"Helvetica", "Arial", sans-serif',fontSize:12,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500},overrides:{MuiListItemText:{root:{paddingLeft:0}},MuiDrawer:{docked:{width:0}}},spacing:{unit:8}});var Pe=function(e){return function(t){return r.a.createElement(v.MuiThemeProvider,{theme:Be},r.a.createElement(T.a,null),r.a.createElement(e,t))}},Ue=function(e){function t(e){var n;return Object(s.a)(this,t),n=Object(p.a)(this,Object(m.a)(t).call(this,e)),window.ethereum.on("accountsChanged",function(e){window.location.reload()}),window.ethereum.on("networkChanged",function(e){window.location.reload()}),n.props.getWeb3(),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(l.a,null,r.a.createElement("div",{style:{width:"100%"}},r.a.createElement(y.a,{position:"relative",className:f()(e.appBar)},r.a.createElement(R.a,null,r.a.createElement(g.a,{to:x("/"),style:{textDecoration:"none"}},r.a.createElement(S.a,{variant:"h4",color:"default",noWrap:!0},"TokenMinter")))),r.a.createElement(E.a,null,r.a.createElement(b.a,{exact:!0,path:x("/"),component:z}),r.a.createElement(O.a,{exact:!0,from:x("/actions"),to:x("/")}),r.a.createElement(b.a,{path:x("/actions/*"),render:function(e){return r.a.createElement(Ie,e)}})),r.a.createElement("footer",{className:e.footer},r.a.createElement(S.a,{variant:"h6",align:"center",gutterBottom:!0},"Remember"),r.a.createElement(S.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"Carnivorism causes cancer."))))}}]),t}(a.Component),Ge=Object(i.b)(function(e){return{}},function(e){return{getWeb3:function(){return e(L.actionCreators.web3.getWeb3())}}})(Pe(Object(v.withStyles)(function(e){return{appBar:{zIndex:9999},largeIcon:{height:42,width:42},menuButton:{marginLeft:12,marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,padding:3*e.spacing.unit,height:"100vh",overflow:"auto"},listItemText:{paddingLeft:0,noWrap:!0},footer:{backgroundColor:e.palette.background.paper,padding:3*e.spacing.unit}}})(Ue))),Ve=n(26),We=n.n(Ve),Ye=n(400),He=n(1049),qe=n(161),ze=n.n(qe),Je=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("svg",{width:"100%",height:"100%",position:"relative",viewBox:"0 0 332 417",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},r.a.createElement("defs",null,r.a.createElement("path",{d:"M198.610685,43.1017808 C107.24977,43.1017808 33.1017808,117.24977 33.1017808,208.610685 C33.1017808,299.971599 107.24977,374.119588 198.610685,374.119588 C289.971599,374.119588 364.119588,299.971599 364.119588,208.610685 C364.119588,117.24977 289.971599,43.1017808 198.610685,43.1017808 L198.610685,43.1017808 Z M198.610685,341.017808 C125.455749,341.017808 66.2035615,281.76562 66.2035615,208.610685 C66.2035615,177.991537 76.6306225,149.855024 94.1745663,127.511322 L279.710047,313.046803 C257.366345,330.590747 229.229832,341.017808 198.610685,341.017808 L198.610685,341.017808 Z M303.046803,289.710047 L117.511322,104.174566 C139.855024,86.6306225 167.991537,76.2035615 198.610685,76.2035615 C271.76562,76.2035615 331.017808,135.455749 331.017808,208.610685 C331.017808,239.229832 320.590747,267.366345 303.046803,289.710047 L303.046803,289.710047 Z",id:"path-1"})),r.a.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Group",transform:"translate(-33.000000, 0.000000)"},r.a.createElement("g",{id:"Ethereum_logo_2014",opacity:"0.208899457",transform:"translate(71.000000, 0.000000)",fillRule:"nonzero"},r.a.createElement("polygon",{id:"Shape",fill:"#343434",points:"127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32"}),r.a.createElement("polygon",{id:"Shape",fill:"#8C8C8C",points:"127.962 0 0 212.32 127.962 287.959 127.962 154.158"}),r.a.createElement("polygon",{id:"Shape",fill:"#3C3C3B",points:"127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866"}),r.a.createElement("polygon",{id:"Shape",fill:"#8C8C8C",points:"127.962 416.9052 127.962 312.1852 0 236.5852"}),r.a.createElement("polygon",{id:"Shape",fill:"#141414",points:"127.9611 287.9577 255.9211 212.3207 127.9611 154.1587"}),r.a.createElement("polygon",{id:"Shape",fill:"#393939",points:"0.0009 212.3208 127.9609 287.9578 127.9609 154.1588"})))))}}]),t}(a.Component),Ze={position:"absolute",width:"100%",top:"50%",display:"flex",justifyContent:"center",flexDirection:"column"},Xe={top:"15px",alignSelf:"center",color:"#ffffff",backgroundColor:"#7cb342"},$e=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).handleConnect=function(){var e=Object(Ye.a)(We.a.mark(function e(t){var a;return We.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,window.ethereum.enable();case 4:a=e.sent,e.next=12;break;case 7:return e.prev=7,e.t0=e.catch(1),console.error(e.t0),n.setState({enableFailed:!0}),e.abrupt("return");case 12:if(a&&!(a.length<1)){e.next=16;break}return console.error("No accounts found."),n.setState({enableFailed:!0}),e.abrupt("return");case 16:a.length>1&&console.warn("More than one Web3 account found. Defaulting to first account.",a),n.setState({web3Enabled:!0});case 18:case"end":return e.stop()}},e,this,[[1,7]])}));return function(t){return e.apply(this,arguments)}}(),n.state={ethereumInjected:!1,web3Enabled:!1,enableFailed:!1},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.ethereum&&window.ethereum.isMetaMask&&this.setState({ethereumInjected:!0}),window.ethereum&&window.ethereum.selectedAddress&&this.setState({web3Enabled:!0})}},{key:"render",value:function(){return this.state.web3Enabled?this.props.children:["/",""].includes(this.props.location.pathname)?r.a.createElement(a.Fragment,null,r.a.createElement(Je,null),r.a.createElement("div",{style:Ze},r.a.createElement(S.a,{align:"center",variant:"h2"},this.state.ethereumInjected?this.state.enableFailed?"Access Denied":"Please Connect to MetaMask":"Please Download MetaMask"),this.state.enableFailed||!this.state.ethereumInjected?null:r.a.createElement(ze.a,{size:"large",variant:"extended",style:Xe,onClick:this.handleConnect},"Connect"))):r.a.createElement(O.a,{to:x("/")})}}]),t}(a.Component),Ke=Object(He.a)($e);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Qe=n(248),et=n(51),tt=n(402),nt=n(403),at=n(246),rt=n(63),ot=n(247),ct={SET_CONTRACT_GRAPH:"GRAPHS:SET_CONTRACT_GRAPH",LOG_ERROR:"GRAPHS:LOG_ERROR",CLEAR_ERRORS:"GRAPHS:CLEAR_ERRORS"},it={contracts:{},errors:[]};var lt=Object(et.c)(Object(Z.a)({},L.reducers,{graphs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ct.SET_CONTRACT_GRAPH:return Object(Z.a)({},e,{contracts:Object(Z.a)({},e.contracts,Object(V.a)({},t.id,t.graph))});case ct.LOG_ERROR:return Object(Z.a)({},e,{errors:e.errors.concat(t.error)});case ct.CLEAR_ERRORS:return Object(Z.a)({},e,{errors:[]});default:return e}},forms:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue.STORE_DEPLOYMENT_RESULT:return Object(Z.a)({},e,{deploymentResult:t.result});case ue.CLEAR_DEPLOYMENT_RESULT:return Object(Z.a)({},e,{deploymentResult:null});case ue.LOG_ERROR:return Object(Z.a)({},e,{errors:e.errors.concat(t.error)});case ue.CLEAR_ERRORS:return Object(Z.a)({},e,{errors:[]});default:return e}}})),st=Object(Z.a)({},L.initialState,{graphs:it,forms:pe}),ut=We.a.mark(mt),pt=[Object(rt.takeLeading)([L.actionNames.contracts.DEPLOYMENT_SUCCESS,L.actionNames.contracts.DEPLOYMENT_FAILURE],mt)];function mt(e){return We.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(rt.put)((n=e.error?e.error:{id:e.id,data:e.data},{type:ue.STORE_DEPLOYMENT_RESULT,result:n}));case 2:case"end":return t.stop()}var n},ut,this)}var dt=We.a.mark(Et),ht=Object(tt.createLogger)(),ft=Object(nt.a)(),gt=Object(et.d)(Object(et.a)(ft,ht));function Et(){return We.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(rt.all)([].concat(Object(Qe.a)(L.sagas),Object(Qe.a)(pt)));case 2:case"end":return e.stop()}},dt,this)}Object.values(at.contracts).forEach(function(e){Object(L.addInitialContractType)(st.contracts,e)}),Object.values(st.contracts.types).forEach(function(e){var t,n,a;t=st.graphs,n=e.id,a=e.artifact,t.contracts[n]=new ot.ContractGraph(a,{id:n,constructorOnly:!0})});var bt=Object(Z.a)({},Object(et.e)(lt,st,gt),{runSaga:function(){return ft.run(Et)}});bt.runSaga(),c.a.render(r.a.createElement(i.a,{store:bt},r.a.createElement(l.a,{basename:"/tokenminter"},r.a.createElement(Ke,null,r.a.createElement(Ge,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},468:function(e,t,n){e.exports=n(1041)},477:function(e,t,n){},574:function(e,t){},576:function(e,t){},653:function(e,t){},654:function(e,t){}},[[468,1,2]]]);
//# sourceMappingURL=main.b8a023b9.chunk.js.map