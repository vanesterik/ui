import { type VariantProps } from 'class-variance-authority';
import { type ComponentProps, type InputHTMLAttributes } from 'react';
import { Icon } from '../Icon/Icon';
export declare const Input: import("react").ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & VariantProps<(props?: ({
    error?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string> & {
    icon?: ComponentProps<typeof Icon>["name"];
} & {
    children?: import("react").ReactNode | undefined;
} & import("react").RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Input.d.ts.map