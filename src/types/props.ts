import { FC } from 'react';
import { SkipOption } from './skipType';
import { StepOption } from './step';
import { PermitCheckOption } from './permitCheck';

// Props interfaces for various components used in the project

export interface CheckboxProps {
  id: number;
  title: string;
  subtitle: string;
  icon: FC<{ className: string }>;
  exampleList: string[];
  checked: boolean;
  onClick: () => void;
}

export interface ContentTitleProps {
  title: string;
}

export interface DefaultBottomProps {
  onBack: () => void;
  onContinue: () => void;
  isBackDisabled?: boolean;
  isContinueDisabled: boolean;
}

export interface DefaultContentProps {
  onBack: () => void;
  onContinue: () => void;
}

export interface ErrorCardProps {
  error: Error | string;
  onTryAgain: () => void;
}

export interface FixedBottomProps
  extends DefaultBottomProps,
    BasicPropsWithChildren {
  smallViewChildren: React.ReactNode;
}

export interface InfoCardProps {
  title: string;
  description: string | string[];
  icon?: React.ComponentType;
}

export interface MainContentProps extends BasicPropsWithChildren {
  className?: string;
  title: string;
}

export interface PermitCheckCardProps {
  option: PermitCheckOption;
  selected: boolean;
  onSelect: () => void;
}

export interface ProgressBarProps {
  progressSteps: StepOption[];
  onClick: (step: number) => void;
}

export interface ProgressBarItemProps extends StepOption {
  onClick: () => void;
  step: number;
}

export interface BasicPropsWithChildren {
  children: React.ReactNode;
}

export interface SelectSkipCardProps {
  skipOption: SkipOption;
  selected: boolean;
  disabled?: boolean;
  image?: string;
  selectedButtonWord?: string;
  selectButtonWord?: string;
  onSelect: () => void;
}
