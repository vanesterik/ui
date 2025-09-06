import { jsx as _jsx } from "react/jsx-runtime";
import { cva } from 'class-variance-authority';
import clsx from 'clsx';
const card = cva(['p-3', 'rounded'], {
    variants: {
        intent: {
            primary: ['bg-primary-100', 'dark:bg-primary-900'],
            ghost: [],
        },
    },
    defaultVariants: {
        intent: 'primary',
    },
});
export const Card = ({ children, intent, className, ...props }) => (_jsx("div", { className: clsx(card({ intent }), className), ...props, children: children }));
//# sourceMappingURL=Card.js.map