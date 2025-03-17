// Global TypeScript declarations for the project

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

// Component Prop Types
interface BaseComponentProps {
  className?: string;
  dataTestId?: string;
}

interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'dark' | 'light' | 'accent' | 'gradient' | 'text' | 'glass';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  to?: string;
  href?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  withGlow?: boolean;
  elevate?: boolean;
  loading?: boolean;
  ariaLabel?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  children: React.ReactNode;
}

interface CardProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?: 'default' | 'outlined' | 'glass' | 'elevated' | 'minimal' | 'accent';
  withGlow?: boolean;
  withCircuit?: boolean;
  withAnimation?: boolean;
  headerAccent?: boolean;
  footer?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  ariaLabel?: string;
  contentPadding?: 'none' | 'sm' | 'normal' | 'lg' | 'xl';
  elevation?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  fullHeight?: boolean;
  children: React.ReactNode;
}

interface NavbarProps extends BaseComponentProps {
  transparent?: boolean;
  fixed?: boolean;
}

interface HeroProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  buttons?: React.ReactNode;
  backgroundType?: 'lines' | 'particles' | 'gradient' | 'image';
  backgroundSrc?: string;
  fullHeight?: boolean;
  withParallax?: boolean;
}

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// Utility Types
type ColorVariant = 
  | 'primary' 
  | 'secondary' 
  | 'accent' 
  | 'dark' 
  | 'light' 
  | 'success' 
  | 'danger' 
  | 'warning' 
  | 'info';

type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl'; 