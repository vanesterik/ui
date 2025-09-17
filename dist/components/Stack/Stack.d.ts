import { type VariantProps } from 'class-variance-authority';
import type { HTMLAttributes, PropsWithChildren } from 'react';
declare const stack: (props?: ({
    direction?: "row" | "column" | null | undefined;
    justify?: "start" | "end" | "between" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
type StackProps = PropsWithChildren<VariantProps<typeof stack>> & HTMLAttributes<HTMLDivElement>;
export declare const Stack: ({ children, direction, justify, ...props }: StackProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Stack.d.ts.map