import { jsx as _jsx } from "react/jsx-runtime";
import { cva } from 'class-variance-authority';
const kbd = cva([
    'bg-primary-100',
    'border',
    'border-b-2',
    'border-primary-300',
    'flex',
    'font-mono',
    'text-xs',
    'h-6',
    'w-6',
    'items-center',
    'justify-center',
    'rounded',
    'dark:bg-primary-800',
    'dark:border-primary-700',
    'dark:text-white',
]);
export const Kbd = ({ children }) => (_jsx("kbd", { className: kbd(), children: children }));
//# sourceMappingURL=Kbd.js.map