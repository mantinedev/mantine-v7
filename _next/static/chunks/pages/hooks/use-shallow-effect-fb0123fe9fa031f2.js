(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8607],{33507:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var s=(0,t(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var s=(0,t(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var s=(0,t(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var s=(0,t(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var s=(0,t(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var s=(0,t(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var s=(0,t(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},84713:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-shallow-effect",function(){return t(12243)}])},12243:function(e,n,t){"use strict";t.r(n);var s=t(85893),a=t(11151),l=t(34940),c=t(34200);let i=(0,l.A)(c.us.useShallowEffect);function r(e){let n=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"use-shallow-effect"})," works exactly like ",(0,s.jsx)(n.code,{children:"useEffect"}),", but performs shallow dependencies comparison instead of referential comparison:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { useEffect } from 'react';\nimport { useShallowEffect } from '@mantine/hooks';\n\n// Will be called on each render\nuseEffect(() => {}, [{ a: 1 }]);\n\n// Will be called only once\nuseShallowEffect(() => {}, [{ a: 1 }]);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Hook works with primitive values, arrays and objects:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// Primitive values are handled like in useEffect\nuseShallowEffect(() => {}, [1, 2, 3]);\n\n// Arrays with primitive values will not trigger callback\nuseShallowEffect(() => {}, [[1], [2], [3]]);\n\n// Objects with primitive values will not trigger callback\nuseShallowEffect(() => {}, [{ a: 1 }, { b: 2 }]);\n\n// Arrays with objects will trigger callback since values are not shallow equal\nuseShallowEffect(() => {}, [[{ a: 1 }], [{ b: 2 }]]);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"function useShallowEffect(cb: () => void, dependencies?: React.DependencyList): void;\n"})})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(i,Object.assign({},e,{children:(0,s.jsx)(r,e)}))}}},function(e){e.O(0,[4940,9774,2888,179],function(){return e(e.s=84713)}),_N_E=e.O()}]);