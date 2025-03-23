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

export interface InfoCardProps {
  title: string;
  description: string | string[];
  icon?: React.ComponentType;
}

export interface MainContentProps {
  title: string;
  children: React.ReactNode;
}

export interface ProgressBarProps {
  progressSteps: StepOption[];
  currentStep: number;
}

export interface ProgressBarItemProps extends StepOption {
  onClick: () => void;
  step: number;
  currentStep: number;
}
