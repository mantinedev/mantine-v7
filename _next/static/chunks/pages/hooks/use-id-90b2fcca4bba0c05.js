(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6768],{33507:function(n,e,t){"use strict";t.d(e,{Z:function(){return s}});var s=(0,t(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(n,e,t){"use strict";t.d(e,{Z:function(){return s}});var s=(0,t(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(n,e,t){"use strict";t.d(e,{Z:function(){return s}});var s=(0,t(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(n,e,t){"use strict";t.d(e,{Z:function(){return s}});var s=(0,t(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(n,e,t){"use strict";t.d(e,{Z:function(){return s}});var s=(0,t(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(n,e,t){"use strict";t.d(e,{Z:function(){return s}});var s=(0,t(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(n,e,t){"use strict";t.d(e,{Z:function(){return s}});var s=(0,t(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},11417:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-id",function(){return t(83952)}])},83952:function(n,e,t){"use strict";t.r(e);var s=t(85893),i=t(11151),d=t(34940),a=t(34200);let r=(0,d.A)(a.us.useId);function u(n){let e=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre"},(0,i.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"use-id"})," hook generates a random id that persists across renders.\nThe hook is usually used to bind input elements to labels.\nThe generated random id is saved to ref and will not change unless the component is unmounted."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:"import { useId } from '@mantine/hooks';\n\nfunction Input({ id }: { id?: string }) {\n  const uuid = useId(id);\n\n  return (\n    <>\n      <label htmlFor={uuid}>Input label</label>\n      <input type=\"text\" id={uuid} />\n    </>\n  );\n}\n\n// input and label will have id 'my-id'\nconst withId = <Input id=\"my-id\" />;\n\n// input and label will have random id 'mantine-fZMoF'\nconst withoutId = <Input />;\n"})}),"\n",(0,s.jsx)(e.h2,{id:"definition",children:"Definition"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:"function useId(id: string): string;\n"})})]})}e.default=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(r,Object.assign({},n,{children:(0,s.jsx)(u,n)}))}}},function(n){n.O(0,[4940,9774,2888,179],function(){return n(n.s=11417)}),_N_E=n.O()}]);