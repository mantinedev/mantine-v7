(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7395],{91540:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/year-picker",function(){return t(23007)}])},23007:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return O}});var a=t(85893),r=t(11151),l=t(19905),o=t(9904),s=t(21484),d=t(33106);let{usage:i,multiple:c,deselect:u,range:h,singleRange:p,numberOfColumns:m,sizeConfigurator:f}=(0,d.$)(s.q);var x=t(67294);let g=`
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <YearPicker defaultDate={new Date(2040, 1)} value={value} onChange={setValue} />;
}
`,j={type:"code",centered:!0,component:function(){let[e,n]=(0,x.useState)(null);return x.createElement(s.q,{defaultDate:new Date(2040,1),value:e,onChange:n})},code:g},y=`
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  const [date, setDate] = useState(new Date());

  const handleChange = (val: [Date | null, Date | null]) => {
    if (val[0] !== null && val[1] === null) {
      setDate((current) => new Date(current.getFullYear() + 20, 1));
    }

    setValue(val);
  };

  return (
    <YearPicker
      date={date}
      onDateChange={setDate}
      type="range"
      value={value}
      onChange={handleChange}
    />
  );
}
`,D={type:"code",centered:!0,component:function(){let[e,n]=(0,x.useState)([null,null]),[t,a]=(0,x.useState)(new Date),r=e=>{null!==e[0]&&null===e[1]&&a(e=>new Date(e.getFullYear()+20,1)),n(e)};return x.createElement(s.q,{date:t,onDateChange:a,type:"range",value:e,onChange:r})},code:y},b=`
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <YearPicker
      value={value}
      onChange={setValue}
      minDate={new Date(2021, 1)}
      maxDate={new Date(2028, 1)}
    />
  );
}
`,w={type:"code",centered:!0,component:function(){let[e,n]=(0,x.useState)(null);return x.createElement(s.q,{value:e,onChange:n,minDate:new Date(2021,1),maxDate:new Date(2028,1)})},code:b},v=`
import { useState } from 'react';
import { YearPicker, YearPickerProps } from '@mantine/dates';

const getYearControlProps: YearPickerProps['getYearControlProps'] = (date) => {
  if (date.getFullYear() === new Date().getFullYear()) {
    return {
      style: {
        color: 'var(--mantine-color-blue-filled)',
        fontWeight: 700,
      },
    };
  }

  if (date.getFullYear() === new Date().getFullYear() + 1) {
    return { disabled: true };
  }

  return {};
};

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <YearPicker value={value} onChange={setValue} getYearControlProps={getYearControlProps} />;
}
`,Y=e=>e.getFullYear()===new Date().getFullYear()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:e.getFullYear()===new Date().getFullYear()+1?{disabled:!0}:{},k={type:"code",centered:!0,component:function(){let[e,n]=(0,x.useState)(null);return x.createElement(s.q,{value:e,onChange:n,getYearControlProps:Y})},code:v},S=`
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <YearPicker yearsListFormat="YY" value={value} onChange={setValue} />;
}
`,P={type:"code",centered:!0,component:function(){let[e,n]=(0,x.useState)(null);return x.createElement(s.q,{yearsListFormat:"YY",value:e,onChange:n})},code:S},C=`
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <YearPicker decadeLabelFormat="YY" value={value} onChange={setValue} />;
}
`,F={type:"code",centered:!0,component:function(){let[e,n]=(0,x.useState)(null);return x.createElement(s.q,{decadeLabelFormat:"YY",value:e,onChange:n})},code:C},_=(0,l.A)(o.us.YearPicker);function E(e){let n=Object.assign({h2:"h2",p:"p",code:"code",a:"a",h3:"h3",pre:"pre"},(0,r.ah)(),e.components),{Demo:t,KeyboardEventsTable:l}=n;return t||N("Demo",!0),l||N("KeyboardEventsTable",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t,{data:i}),"\n",(0,a.jsx)(n.h2,{id:"allow-deselect",children:"Allow deselect"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:"allowDeselect"})," to allow user to deselect current selected date by clicking on it.\n",(0,a.jsx)(n.code,{children:"allowDeselect"})," is disregarded when ",(0,a.jsx)(n.code,{children:"type"})," prop is ",(0,a.jsx)(n.code,{children:"range"})," or ",(0,a.jsx)(n.code,{children:"multiple"}),". When date is\ndeselected ",(0,a.jsx)(n.code,{children:"onChange"})," is called with ",(0,a.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,a.jsx)(t,{data:u}),"\n",(0,a.jsx)(n.h2,{id:"multiple-dates",children:"Multiple dates"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:'type="multiple"'})," to allow user to pick multiple dates:"]}),"\n",(0,a.jsx)(t,{data:c}),"\n",(0,a.jsx)(n.h2,{id:"dates-range",children:"Dates range"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:'type="range"'})," to allow user to pick dates range:"]}),"\n",(0,a.jsx)(t,{data:h}),"\n",(0,a.jsx)(n.h2,{id:"single-date-in-range",children:"Single date in range"}),"\n",(0,a.jsxs)(n.p,{children:["By default, it is not allowed to select single date as range – when user clicks the same date second time it is deselected.\nTo change this behavior set ",(0,a.jsx)(n.code,{children:"allowSingleDateInRange"})," prop. ",(0,a.jsx)(n.code,{children:"allowSingleDateInRange"})," is ignored when\n",(0,a.jsx)(n.code,{children:"type"})," prop is not ",(0,a.jsx)(n.code,{children:"range"}),"."]}),"\n",(0,a.jsx)(t,{data:p}),"\n",(0,a.jsx)(n.h2,{id:"default-date",children:"Default date"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"defaultDate"})," prop to set date value that will be used to determine which decade should be displayed initially.\nFor example to display ",(0,a.jsx)(n.code,{children:"2040 – 2049"})," decade set ",(0,a.jsx)(n.code,{children:"defaultDate={new Date(2040, 1)}"}),". If value is not specified,\nthen ",(0,a.jsx)(n.code,{children:"defaultDate"})," will use ",(0,a.jsx)(n.code,{children:"new Date()"}),". Month, day, minutes and seconds are ignored in provided date object, only year is used –\nyou can specify any date value."]}),"\n",(0,a.jsxs)(n.p,{children:["Note that if you set ",(0,a.jsx)(n.code,{children:"date"})," prop, then ",(0,a.jsx)(n.code,{children:"defaultDate"})," value will be ignored."]}),"\n",(0,a.jsx)(t,{data:j}),"\n",(0,a.jsx)(n.h2,{id:"controlled-date",children:"Controlled date"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:"date"}),", and ",(0,a.jsx)(n.code,{children:"onDateChange"})," props to make currently displayed decade controlled.\nBy doing so, you can customize date picking experience, for example, when user selects first date in range,\nyou can add 20 years to current date value:"]}),"\n",(0,a.jsx)(t,{data:D}),"\n",(0,a.jsx)(n.h2,{id:"min-and-max-date",children:"Min and max date"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:"minDate"})," and ",(0,a.jsx)(n.code,{children:"maxDate"})," props to define min and max dates. If previous/next page is not available\nthen corresponding control will be disabled."]}),"\n",(0,a.jsx)(t,{data:w}),"\n",(0,a.jsx)(n.h2,{id:"add-props-to-year-control",children:"Add props to year control"}),"\n",(0,a.jsxs)(n.p,{children:["You can add props to year controls with ",(0,a.jsx)(n.code,{children:"getYearControlProps"})," function. It accepts year date as single argument,\nprops returned from the function will be added to year control. For example, it can be used to disable specific\ncontrol or add styles:"]}),"\n",(0,a.jsx)(t,{data:k}),"\n",(0,a.jsx)(n.h2,{id:"number-of-columns",children:"Number of columns"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:"numberOfColumns"})," prop to define number of pickers that will be rendered side by side:"]}),"\n",(0,a.jsx)(t,{data:m}),"\n",(0,a.jsx)(n.h2,{id:"size",children:"Size"}),"\n",(0,a.jsx)(t,{data:f}),"\n",(0,a.jsx)(n.h2,{id:"change-year-controls-format",children:"Change year controls format"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"yearsListFormat"})," to change ",(0,a.jsx)(n.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of year control:"]}),"\n",(0,a.jsx)(t,{data:P}),"\n",(0,a.jsx)(n.h2,{id:"change-decade-label-format",children:"Change decade label format"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"decadeLabelFormat"})," to change ",(0,a.jsx)(n.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of decade label:"]}),"\n",(0,a.jsx)(t,{data:F}),"\n",(0,a.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,a.jsx)(n.h3,{id:"aria-labels",children:"Aria labels"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:"ariaLabels"})," prop to specify ",(0,a.jsx)(n.code,{children:"aria-label"})," attributes for next/previous controls:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { YearPicker } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <YearPicker\n      ariaLabels={{\n        nextDecade: 'Next decade',\n        previousDecade: 'Previous decade',\n      }}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"year-control-aria-label",children:"Year control aria-label"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"getYearControlProps"})," to customize ",(0,a.jsx)(n.code,{children:"aria-label"})," attribute:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { YearPicker } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <YearPicker\n      getYearControlProps={(date) => ({\n        'aria-label': `Select year ${date.getFullYear()}`,\n      })}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,a.jsx)(n.p,{children:"Note that the following events will only trigger if focus is on year control."}),"\n",(0,a.jsx)(l,{data:[{key:"ArrowRight",description:"Focuses next non-disabled year"},{key:"ArrowLeft",description:"Focuses previous non-disabled year"},{key:"ArrowDown",description:"Focuses next non-disabled year in the same column"},{key:"ArrowUp",description:"Focuses previous non-disabled year in the same column"}]})]})}var O=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(_,Object.assign({},e,{children:(0,a.jsx)(E,e)}))};function N(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},21484:function(e,n,t){"use strict";t.d(n,{q:function(){return g}});var a=t(67294),r=t(75144),l=t(35577),o=t(19732),s=t(18437),d=t(29743),i=Object.defineProperty,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))u.call(n,t)&&p(e,t,n[t]);if(c)for(var t of c(n))h.call(n,t)&&p(e,t,n[t]);return e},f=(e,n)=>{var t={};for(var a in e)u.call(e,a)&&0>n.indexOf(a)&&(t[a]=e[a]);if(null!=e&&c)for(var a of c(e))0>n.indexOf(a)&&h.call(e,a)&&(t[a]=e[a]);return t};let x={type:"default"},g=(0,r.d)((e,n)=>{let t=(0,l.w)("YearPicker",x,e),{classNames:r,styles:i,vars:c,type:u,defaultValue:h,value:p,onChange:g,__staticSelector:j,getYearControlProps:y,allowSingleDateInRange:D,allowDeselect:b,onMouseLeave:w,onYearSelect:v,__updateDateOnYearSelect:Y}=t,k=f(t,["classNames","styles","vars","type","defaultValue","value","onChange","__staticSelector","getYearControlProps","allowSingleDateInRange","allowDeselect","onMouseLeave","onYearSelect","__updateDateOnYearSelect"]),{onDateChange:S,onRootMouseLeave:P,onHoveredDateChange:C,getControlProps:F}=(0,s.D)({type:u,level:"year",allowDeselect:b,allowSingleDateInRange:D,value:p,defaultValue:h,onChange:g,onMouseLeave:w}),{resolvedClassNames:_,resolvedStyles:E}=(0,o.h)({classNames:r,styles:i,props:t});return a.createElement(d.f,m({ref:n,minLevel:"decade",__updateDateOnYearSelect:null!=Y&&Y,__staticSelector:j||"YearPicker",onMouseLeave:P,onYearMouseEnter:(e,n)=>C(n),onYearSelect:e=>{S(e),null==v||v(e)},getYearControlProps:e=>m(m({},F(e)),null==y?void 0:y(e)),classNames:_,styles:E},k))});g.classes=d.f.classes,g.displayName="@mantine/dates/YearPicker"}},function(e){e.O(0,[1300,178,3773,3460,9774,2888,179],function(){return e(e.s=91540)}),_N_E=e.O()}]);