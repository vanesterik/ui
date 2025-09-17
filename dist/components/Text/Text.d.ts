import { type VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
declare const text: (props?: ({
    intent?: "link" | "label" | "footnote" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
type TextProps = {
    tag?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'p' | 'span';
} & VariantProps<typeof text> & HTMLAttributes<HTMLElement>;
export declare const Text: ({ children, className, tag, intent, ...props }: TextProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Text.d.ts.map