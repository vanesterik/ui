import { jsx as _jsx } from "react/jsx-runtime";
import { cva } from 'class-variance-authority';
const icon = cva(['font-icon', 'text-base', 'text-black', 'dark:text-white'], {
    variants: {
        name: {
            sun: "before:content-['1']",
            moon: "before:content-['2']",
            snowflake: "before:content-['3']",
        },
    },
});
export const Icon = ({ name }) => (_jsx("div", { className: icon({ name }) }));
//# sourceMappingURL=Icon.js.map