import { jsx as _jsx } from "react/jsx-runtime";
import { cva } from 'class-variance-authority';
import clsx from 'clsx';
const text = cva([], {
    variants: {
        intent: {
            footnote: [
                'font-mono',
                'font-normal',
                'text-primary-300',
                'text-xs',
                'uppercase',
                'dark:text-primary-700',
            ],
            label: [
                'font-mono',
                'font-normal',
                'text-black',
                'text-xs',
                'uppercase',
                'dark:text-white',
            ],
            link: [
                'font-mono',
                'text-black',
                'text-xs',
                'uppercase',
                'hover:text-secondary-500',
                'dark:text-white',
                'dark:hover:text-secondary-500',
            ],
        },
    },
    defaultVariants: {
        intent: 'label',
    },
});
export const Text = ({ children, className, tag = 'div', intent, ...props }) => {
    const Component = tag;
    return (_jsx(Component, { className: clsx(text({ intent }), className), ...props, children: children }));
};
//# sourceMappingURL=Text.js.map