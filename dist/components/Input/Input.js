import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cva } from 'class-variance-authority';
import { forwardRef, } from 'react';
import { Icon } from '../Icon/Icon';
const input = cva([
    'border',
    'border-primary-200',
    'flex',
    'flex-row',
    'gap-x-1',
    'h-8',
    'items-center',
    'p-1',
    'rounded',
    'focus-within:border-primary-500',
    'dark:border-primary-800',
    'dark:text-white',
], {
    variants: {
        error: {
            true: ['border-red-500', 'dark:border-red-900'],
        },
    },
});
export const Input = forwardRef(({ children, error, icon, ...props }, ref) => (_jsxs("div", { className: input({ error }), children: [icon && _jsx(Icon, { name: icon }), _jsx("input", { ref: ref, className: "border-none font-mono font-normal text-xs focus:outline-none focus:ring-0 flex-1 bg-transparent", ...props }), children] })));
//# sourceMappingURL=Input.js.map