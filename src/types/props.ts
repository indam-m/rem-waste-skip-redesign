import { SkipOption } from './skipType';
import { StepOption } from './step';

export interface CheckboxProps {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ComponentType;
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

export interface ProgressBarProps {
  progressSteps: StepOption[];
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
