import { ReactNode } from "react";
import { Variant } from "../ui/Button";

export type CategoryCardProps = {
  title: string;
  icon: ReactNode;
  image: string;
  description: string;
  backgroundGradient: string;
  primaryButton: {
    label: string;
    icon?: ReactNode;
    onClick: () => void;
    variant?: Variant;
  };
  secondaryButton?: {
    label: string;
    icon?: ReactNode;
    onClick: () => void;
    variant?: Variant;
  };
};
