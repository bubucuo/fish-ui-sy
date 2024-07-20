import{w as p,e as n,u as B}from"./index-BPHu6psy.js";import{P as d}from"./Divider-Cla2azpq.js";import"./index-DZLKizrv.js";import"./jsx-runtime-QvZ8i92b.js";import"./index-uubelm5h.js";import"./Button-C-w4QJeH.js";const x={title:"Example/Page",component:d,parameters:{layout:"fullscreen"}},t={},o={play:async({canvasElement:g})=>{const a=p(g),e=a.getByRole("button",{name:/Log in/i});await n(e).toBeInTheDocument(),await B.click(e),await n(e).not.toBeInTheDocument();const l=a.getByRole("button",{name:/Log out/i});await n(l).toBeInTheDocument()}};var c,s,r;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var u,i,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', {
      name: /Log in/i
    });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();
    const logoutButton = canvas.getByRole('button', {
      name: /Log out/i
    });
    await expect(logoutButton).toBeInTheDocument();
  }
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const D=["LoggedOut","LoggedIn"];export{o as LoggedIn,t as LoggedOut,D as __namedExportsOrder,x as default};
