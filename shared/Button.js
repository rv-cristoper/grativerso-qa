import{j as o}from"./global.js";const l="_disabled_3r8an_2",m="_custom_3r8an_6",i={disabled:l,custom:m},p=({width:n=15,height:e=15,classNames:s="",color:t="#000"})=>o.jsx("svg",{width:n,height:e,className:s,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M2.66699 16.0001C2.66699 8.64008 8.64033 2.66675 16.0003 2.66675C23.3603 2.66675 29.3337 8.64008 29.3337 16.0001C29.3337 23.3601 23.3603 29.3334 16.0003 29.3334V26.6667C21.8937 26.6667 26.667 21.8934 26.667 16.0001C26.667 10.1067 21.8937 5.33341 16.0003 5.33341C10.107 5.33341 5.33366 10.1067 5.33366 16.0001C5.33366 16.4517 5.36168 16.8966 5.41609 17.3334H2.73293C2.68932 16.8949 2.66699 16.4501 2.66699 16.0001Z",fill:t})}),d=({variant:n="default",text:e,isLoading:s=!1,disabled:t=!1,handleClick:r,extraClass:a})=>o.jsxs("button",{className:`
      btn 
      promos-v3-w-full sm:promos-v3-w-auto
      promos-v3-uppercase 
      promos-v3-text-black
      btn-promos-${n}
      ${s&&"btn-promos-loading"}
      ${t&&"btn-promos-disabled"}
      ${a}
      `,disabled:s||t,type:"button",onClick:r,children:[s&&o.jsx("div",{className:"promos-v3-animate-spin promos-v3-mr-2",children:o.jsx(p,{width:"32px",height:"32px"})}),e]});export{d as B,p as S,i as s};
