import { type VariantProps } from 'class-variance-authority';
import type { PropsWithChildren } from 'react';
declare const button: (props?: ({
    intent?: "primary" | "secondary" | "ghost" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
type ButtonProps = PropsWithChildren<VariantProps<typeof button>> & React.HTMLAttributes<HTMLButtonElement>;
export declare const Button: ({ children, intent, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Button.d.ts.map