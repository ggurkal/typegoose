(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{130:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,d=m["".concat(s,".").concat(u)]||m[u]||b[u]||a;return n?i.a.createElement(d,c(c({ref:t},l),{},{components:n})):i.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var c={};for(var r in t)hasOwnProperty.call(t,r)&&(c[r]=t[r]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return p}));var o=n(3),i=n(7),a=(n(0),n(130)),s={id:"model-options",title:"Model Options"},c={unversionedId:"api/decorators/model-options",id:"api/decorators/model-options",isDocsHomePage:!1,title:"Model Options",description:"@modelOptions(options: object) is used for setting options like schema options, an existing connect and/or an existing Mongoose.",source:"@site/../docs/api/decorators/modelOptions.md",slug:"/api/decorators/model-options",permalink:"/typegoose/docs/api/decorators/model-options",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/decorators/modelOptions.md",version:"current",sidebar:"docs",previous:{title:"Array Prop",permalink:"/typegoose/docs/api/decorators/array-prop"},next:{title:"Hooks",permalink:"/typegoose/docs/api/decorators/hooks"}},r=[{value:"Options",id:"options",children:[{value:"schemaOptions",id:"schemaoptions",children:[]},{value:"existingConnection",id:"existingconnection",children:[]},{value:"existingMongoose",id:"existingmongoose",children:[]},{value:"options",id:"options-1",children:[]}]}],l={rightToc:r};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"@modelOptions(options: object)")," is used for setting options like schema options, an existing connect and/or an existing Mongoose."),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("h3",{id:"schemaoptions"},"schemaOptions"),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://mongoosejs.com/docs/guide.html#options"}),"Please look here for more info")),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"@modelOptions({ schemaOptions: { collection: 'NotSomething' } })\nclass Something {}\n")),Object(a.b)("h3",{id:"existingconnection"},"existingConnection"),Object(a.b)("p",null,"An existing Mongoose connection can also be passed down. If given, Typegoose uses this Mongoose instance's ",Object(a.b)("inlineCode",{parentName:"p"},"model")," methods.",Object(a.b)("br",{parentName:"p"}),"\n","[UNTESTED]"),Object(a.b)("h3",{id:"existingmongoose"},"existingMongoose"),Object(a.b)("p",null,"An existing Mongoose instance can also be passed down. If given, Typegoose uses this Mongoose instance's ",Object(a.b)("inlineCode",{parentName:"p"},"model")," methods.",Object(a.b)("br",{parentName:"p"}),"\n","[UNTESTED]"),Object(a.b)("h3",{id:"options-1"},"options"),Object(a.b)("p",null,"Typegoose's custom options"),Object(a.b)("h4",{id:"customname"},"customName"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"customName")," can be used to set custom model names."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"@modelOptions({ options: { customName: 'Something' } })\nclass MultiModel {}\n\nconst model = getModelForClass(MultiModel);\nexpect(model.modelName).to.be.equal('Something');\n")),Object(a.b)("p",null,"You can generate more dynamic names, if ",Object(a.b)("inlineCode",{parentName:"p"},"customName")," is given a function. The parameter object of the ",Object(a.b)("inlineCode",{parentName:"p"},"modelOptions")," decorator is injected into the function for possible further use.  "),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"@modelOptions({\n  schemaOptions: { collection: 'SomethingDifferent' },\n  options: {\n    automaticName: false,\n    customName: (options) => `${options.schemaOptions?.collection}_someSuffix`\n  }\n})\nclass MultiModel {}\n\nconst model = getModelForClass(MultiModel);\nexpect(model.modelName).to.be.equal('SomethingDifferent_someSuffix');\n")),Object(a.b)("p",null,"NOTE: If a function is used, ",Object(a.b)("inlineCode",{parentName:"p"},"automaticName")," will be ignored. Also, if the function doesn't return a string, an error will be thrown. "),Object(a.b)("p",null,"If ",Object(a.b)("inlineCode",{parentName:"p"},"customName")," is used with ",Object(a.b)("inlineCode",{parentName:"p"},"automaticName"),", it will be a suffix of the class name."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"@modelOptions({ options: { customName: 'Something', automaticName: true } })\nclass MultiModel {}\n\nconst model = getModelForClass(MultiModel);\nexpect(model.modelName).to.be.equal('MultiModel_Something');\n")),Object(a.b)("h4",{id:"automaticname"},"automaticName"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"automaticName")," can be used to automatically generate custom model names based on ",Object(a.b)("inlineCode",{parentName:"p"},"{ schemaOptions: { collection } }")," or ",Object(a.b)("inlineCode",{parentName:"p"},"{ options: { customName } }"),Object(a.b)("br",{parentName:"p"}),"\n","-> ",Object(a.b)("inlineCode",{parentName:"p"},"customName")," will be prioritzed over ",Object(a.b)("inlineCode",{parentName:"p"},"collection"),Object(a.b)("br",{parentName:"p"}),"\n","-> if ",Object(a.b)("inlineCode",{parentName:"p"},"automaticName")," is true, ",Object(a.b)("inlineCode",{parentName:"p"},"customName")," will be a ",Object(a.b)("em",{parentName:"p"},"suffix")," of the base class name"),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"// yes this is the same example as the one above\n@modelOptions({ options: { customName: 'Something', automaticName: true } })\nclass MultiModel {}\n\nconst model = getModelForClass(MultiModel);\nexpect(model.modelName).to.be.equal('MultiModel_Something');\n")),Object(a.b)("p",null,'Note: on request, this was made "opt-in" instead of "opt-out".'),Object(a.b)("h4",{id:"allowmixed"},"allowMixed"),Object(a.b)("p",null,"Set this to a Severity you want."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ALLOW"),': allow the use and execution of "mongoose.Schema.Types.Mixed", if the inferred type cannot be set otherwise'),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"WARN"),": ","[default]"," Warn for it in the logger, but still allow the use of it"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ERROR"),": Error out when it comes to it")),Object(a.b)("h4",{id:"runsyncindexes"},"runSyncIndexes"),Object(a.b)("p",null,'Run "model.syncIndexes" when model is finished compiling?',Object(a.b)("br",{parentName:"p"}),"\n","-> only run this while development, could cause race-conditions, because ",Object(a.b)("inlineCode",{parentName:"p"},"getModelForClass")," is not async"))}p.isMDXComponent=!0}}]);