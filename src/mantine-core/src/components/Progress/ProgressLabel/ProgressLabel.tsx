import React from 'react';
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
} from '../../../core';
import classes from '../Progress.module.css';
import { useProgressContext } from '../Progress.context';

export type ProgressLabelStylesNames = 'label';

export interface ProgressLabelProps
  extends BoxProps,
    CompoundStylesApiProps<ProgressLabelFactory>,
    ElementProps<'div'> {}

export type ProgressLabelFactory = Factory<{
  props: ProgressLabelProps;
  ref: HTMLDivElement;
  stylesNames: ProgressLabelStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ProgressLabelProps> = {};

export const ProgressLabel = factory<ProgressLabelFactory>((props, ref) => {
  const { classNames, className, style, styles, vars, ...others } = useProps(
    'ProgressLabel',
    defaultProps,
    props
  );

  const ctx = useProgressContext();

  return (
    <Box
      ref={ref}
      {...ctx.getStyles('label', { className, style, classNames, styles })}
      {...others}
    />
  );
});

ProgressLabel.classes = classes;
ProgressLabel.displayName = '@mantine/core/ProgressLabel';
