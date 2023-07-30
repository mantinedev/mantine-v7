(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5979],{33507:function(n,e,s){"use strict";s.d(e,{Z:function(){return o}});var o=(0,s(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(n,e,s){"use strict";s.d(e,{Z:function(){return o}});var o=(0,s(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(n,e,s){"use strict";s.d(e,{Z:function(){return o}});var o=(0,s(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(n,e,s){"use strict";s.d(e,{Z:function(){return o}});var o=(0,s(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(n,e,s){"use strict";s.d(e,{Z:function(){return o}});var o=(0,s(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(n,e,s){"use strict";s.d(e,{Z:function(){return o}});var o=(0,s(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(n,e,s){"use strict";s.d(e,{Z:function(){return o}});var o=(0,s(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},4154:function(n,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-disclosure",function(){return s(54403)}])},54403:function(n,e,s){"use strict";s.r(e);var o=s(85893),t=s(11151),l=s(34940),a=s(34200);let c=(0,l.A)(a.us.useDisclosure);function d(n){let e=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre"},(0,t.ah)(),n.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"use-disclosure"})," hook manages boolean state. It provides ",(0,o.jsx)(e.code,{children:"open"}),", ",(0,o.jsx)(e.code,{children:"close"})," and ",(0,o.jsx)(e.code,{children:"toggle"})," handlers\nand accepts optional ",(0,o.jsx)(e.code,{children:"onOpen"})," and ",(0,o.jsx)(e.code,{children:"onClose"})," callbacks. It can be used to manage controlled modals,\npopovers and other similar components:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"import { useDisclosure } from '@mantine/hooks';\n\nfunction Demo() {\n  const [opened, handlers] = useDisclosure(false);\n\n  // Sets opened to true\n  handlers.open();\n\n  // Sets opened to false\n  handlers.close();\n\n  // Sets opened to true if it was false and vice versa\n  handlers.toggle();\n}\n"})}),"\n",(0,o.jsx)(e.h2,{id:"callbacks",children:"Callbacks"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"onOpen"})," and ",(0,o.jsx)(e.code,{children:"onClose"})," callbacks are called when opened state changes:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"import { useDisclosure } from '@mantine/hooks';\n\nfunction Demo() {\n  const [opened, handlers] = useDisclosure(false, {\n    onOpen: () => console.log('Opened'),\n    onClose: () => console.log('Closed'),\n  });\n\n  // Calls onOpen callback and sets opened to true\n  handlers.open();\n\n  // Does nothing, opened is already true\n  handlers.open();\n\n  // Calls onClose callback and sets opened to false\n  handlers.close();\n\n  // Does nothing, opened is already false\n  handlers.close();\n\n  // Calls onOpen or onClose depending on next state\n  handlers.toggle();\n}\n"})}),"\n",(0,o.jsx)(e.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"function useDisclosure(\n  initialState: boolean,\n  callbacks?: {\n    onOpen?(): void;\n    onClose?(): void;\n  }\n): [\n  boolean,\n  {\n    open: () => void;\n    close: () => void;\n    toggle: () => void;\n  }\n];\n"})})]})}e.default=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(c,Object.assign({},n,{children:(0,o.jsx)(d,n)}))}}},function(n){n.O(0,[4940,9774,2888,179],function(){return n(n.s=4154)}),_N_E=n.O()}]);