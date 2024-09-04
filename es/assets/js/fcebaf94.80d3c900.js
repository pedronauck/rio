"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[8011],{6337:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=o(5893),s=o(1151);const i={title:"fonts",language:"en"},r=void 0,a={id:"config/fonts",title:"fonts",description:"Configure fonts used by the terminal.",source:"@site/docs/config/fonts.md",sourceDirName:"config",slug:"/config/fonts",permalink:"/rio/es/docs/config/fonts",draft:!1,unlisted:!1,editUrl:"https://github.com/raphamorim/rio/tree/main/docs/docs/config/fonts.md",tags:[],version:"current",frontMatter:{title:"fonts",language:"en"},sidebar:"tutorialSidebar",previous:{title:"env-vars",permalink:"/rio/es/docs/config/env-vars"},next:{title:"ignore-selection-foreground-color",permalink:"/rio/es/docs/config/ignore-selection-foreground-color"}},c={},l=[];function f(n){const e={code:"code",hr:"hr",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"Configure fonts used by the terminal."}),"\n",(0,t.jsx)(e.p,{children:"Note: You can set different font families but Rio terminal\nwill always look for regular font bounds whene"}),"\n",(0,t.jsx)(e.p,{children:"You can also set family on root to overwrite all fonts."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-toml",children:'[fonts]\nfamily = "cascadiacode"\n'})}),"\n",(0,t.jsx)(e.p,{children:"You can also specify extra fonts to load:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-toml",children:'[fonts]\nextras = [{ family = "Microsoft JhengHei" }]\n'})}),"\n",(0,t.jsx)(e.p,{children:"In case you want to specify any font feature:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-toml",children:'[fonts]\nfeatures = ["ss02", "ss03", "ss05", "ss19"]\n'})}),"\n",(0,t.jsx)(e.p,{children:"Note: Font features do not have support to live reload on configuration, so to reflect your changes, you will need to close and reopen Rio."}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.p,{children:"The font configuration default:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-toml",children:'[fonts]\nsize = 18\nfeatures = []\n\n[fonts.regular]\nfamily = "cascadiacode"\nstyle = "normal"\nweight = 400\n\n[fonts.bold]\nfamily = "cascadiacode"\nstyle = "normal"\nweight = 800\n\n[fonts.italic]\nfamily = "cascadiacode"\nstyle = "italic"\nweight = 400\n\n[fonts.bold-italic]\nfamily = "cascadiacode"\nstyle = "italic"\nweight = 800\n'})})]})}function d(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(f,{...n})}):f(n)}},1151:(n,e,o)=>{o.d(e,{Z:()=>a,a:()=>r});var t=o(7294);const s={},i=t.createContext(s);function r(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);