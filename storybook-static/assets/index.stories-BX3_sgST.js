import{j as e}from"./jsx-runtime-QvZ8i92b.js";import"./Button-C-w4QJeH.js";import{D as t,m as N,s as n}from"./Divider-Cla2azpq.js";import"./index-uubelm5h.js";const H={title:"布局/Divider 分割线",component:t,parameters:{docs:{description:"内容分割线。"}}},i={args:{children:"Text"}},a={args:{vertical:!0},parameters:{docs:{description:{story:"垂直分隔线。"}}}},o=()=>{};o.parameters={docs:{description:{story:"带内容的分隔线，居中位置可自行调节，默认居中。"}}};const C=N({root:{display:"flex",flexDirection:"column",rowGap:"5px"},example:{display:"flex",flexDirection:"column",alignItems:"center",justifyItems:"center",minHeight:"96px"},customHeightExample:{display:"flex",flexDirection:"column",justifyContent:"center",minHeight:"192px"},customWidth:{width:"500px"},customHeight:{maxHeight:"50px"},customFont:{fontSize:"14px",fontWeight:"bold",color:"pink"},customLineColor:{"::before":{...n.borderColor("red")},"::after":{...n.borderColor("red")}},customLineStyle:{...n.borderWidth("2px"),"::before":{borderTopStyle:"dashed",borderTopWidth:"2px"},"::after":{borderTopStyle:"dashed",borderTopWidth:"2px"}}}),r=()=>{const s=C();return e.jsxs("div",{className:s.root,children:[e.jsx("div",{className:s.example,children:e.jsx(t,{className:s.customWidth,children:"Custom width (500px)"})}),e.jsx("div",{className:s.customHeightExample,children:e.jsx(t,{vertical:!0,className:s.customHeight,children:"Custom height (50px)"})}),e.jsx("div",{className:s.example,children:e.jsx(t,{className:s.customFont,children:"Custom font (14px bold)"})}),e.jsx("div",{className:s.example,children:e.jsxs(t,{className:s.customLineColor,children:["Custom line color (",e.jsx("code",{children:"tokens.colorPaletteRedBorder2"}),")"]})}),e.jsx("div",{className:s.example,children:e.jsx(t,{className:s.customLineStyle,children:"Custom line style (2px dashed)"})})]})};r.parameters={docs:{description:{story:"分隔线可以自定义样式。"}}};r.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};var c,l,d;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: "Text"
  }
}`,...(d=(l=i.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,p,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    vertical: true
  },
  parameters: {
    docs: {
      description: {
        story: "垂直分隔线。"
      }
    }
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var x,h,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  <Divider alignContent="center">
    <div>omg</div>
    <img src="https://react.fluentui.dev/static/media/fluentui-logo.2c059e02.svg" />
    <div>omg</div>
  </Divider>;
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,g,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const styles = useStyles();
  return <div className={styles.root}>
      <div className={styles.example}>
        <Divider className={styles.customWidth}>Custom width (500px)</Divider>
      </div>
      <div className={styles.customHeightExample}>
        <Divider vertical className={styles.customHeight}>
          Custom height (50px)
        </Divider>
      </div>
      <div className={styles.example}>
        <Divider className={styles.customFont}>Custom font (14px bold)</Divider>
      </div>
      <div className={styles.example}>
        <Divider className={styles.customLineColor}>
          Custom line color (<code>tokens.colorPaletteRedBorder2</code>)
        </Divider>
      </div>
      <div className={styles.example}>
        <Divider className={styles.customLineStyle}>
          Custom line style (2px dashed)
        </Divider>
      </div>
    </div>;
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const W=["Default","Vertical","WithContent","CustomStyles"];export{r as CustomStyles,i as Default,a as Vertical,o as WithContent,W as __namedExportsOrder,H as default};
