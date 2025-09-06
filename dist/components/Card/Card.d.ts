import { type VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
declare const card: (props?: ({
    intent?: "primary" | "ghost" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
type CardProps = VariantProps<typeof card> & HTMLAttributes<HTMLDivElement>;
export declare const Card: ({ children, intent, className, ...props }: CardProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Card.d.ts.map