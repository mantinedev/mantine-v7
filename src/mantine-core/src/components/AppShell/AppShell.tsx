import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
  MantineBreakpoint,
} from '../../core';
import { AppShellNavbar } from './AppShellNavbar/AppShellNavbar';
import { AppShellMain } from './AppShellMain/AppShellMain';
import { AppShellMediaStyles } from './AppShellMediaStyles/AppShellMediaStyles';
import { AppShellProvider } from './AppShell.context';
import classes from './AppShell.module.css';

export type AppShellStylesNames = 'root' | 'navbar' | 'main';
export type AppShellCssVariables = {
  root: '--test';
};

export type AppShellSize = number | string;

export interface AppShellResponsiveSize {
  base?: AppShellSize;
  xs?: AppShellSize;
  sm?: AppShellSize;
  md?: AppShellSize;
  lg?: AppShellSize;
  xl?: AppShellSize;
  [key: string]: AppShellSize | undefined;
}

export interface AppShellProps
  extends BoxProps,
    StylesApiProps<AppShellFactory>,
    ElementProps<'div'> {
  /** Determines whether associated components should have a border, `true` by default */
  withBorder?: boolean;

  navbar?: {
    width: AppShellSize | AppShellResponsiveSize;
    offsetBreakpoint?: MantineBreakpoint | (string & {}) | number;
    collapsed?: boolean;
  };
}

export type AppShellFactory = Factory<{
  props: AppShellProps;
  ref: HTMLDivElement;
  stylesNames: AppShellStylesNames;
  vars: AppShellCssVariables;
  staticComponents: {
    Navbar: typeof AppShellNavbar;
    Main: typeof AppShellMain;
  };
}>;

const defaultProps: Partial<AppShellProps> = {
  withBorder: true,
};

const varsResolver = createVarsResolver<AppShellFactory>(() => ({
  root: {
    '--test': 'test',
  },
}));

export const AppShell = factory<AppShellFactory>((_props, ref) => {
  const props = useProps('AppShell', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, navbar, withBorder, ...others } =
    props;

  const getStyles = useStyles<AppShellFactory>({
    name: 'AppShell',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return (
    <AppShellProvider value={{ getStyles, withBorder }}>
      <AppShellMediaStyles navbar={navbar} />
      <Box ref={ref} {...getStyles('root')} {...others} />
    </AppShellProvider>
  );
});

AppShell.classes = classes;
AppShell.displayName = '@mantine/core/AppShell';
AppShell.Navbar = AppShellNavbar;
AppShell.Main = AppShellMain;