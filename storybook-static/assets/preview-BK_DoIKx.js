import"./index-D-8MO0q_.js";const{global:_}=__STORYBOOK_MODULE_GLOBAL__,{makeDecorator:c,addons:o}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_CHANGED:l,SELECT_STORY:E}=__STORYBOOK_MODULE_CORE_EVENTS__;var O="links",{document:s,HTMLElement:m}=_,p=e=>o.getChannel().emit(E,e),i=e=>{let{target:t}=e;if(!(t instanceof m))return;let d=t,{sbKind:r,sbStory:a}=d.dataset;(r||a)&&(e.preventDefault(),p({kind:r,story:a}))},n=!1,L=()=>{n||(n=!0,s.addEventListener("click",i))},u=()=>{n&&(n=!1,s.removeEventListener("click",i))},v=c({name:"withLinks",parameterName:O,wrapper:(e,t)=>(L(),o.getChannel().once(l,u),e(t))});const S=[v],T={tags:["autodocs"],parameters:{viewMode:"docs",controls:{disable:!0,expanded:!0},exportToSandbox:{provider:"stackblitz-cloud",bundler:"vite",requiredDependencies:{react:"^18","react-dom":"^18","fish-ui":"^1.0.0"}},hideEmpty:!0}};export{S as decorators,T as default};
