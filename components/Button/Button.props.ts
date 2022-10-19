import { HTMLAttributes, ReactNode } from "react";

export interface buttonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    appearance: 'primary' | 'ghost';
    arrow?: 'right' | 'down' | 'none';
}