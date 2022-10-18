import styles from './Button.module.css';
import { buttonProps } from './Button.props';
import cn from 'classnames';

export const Button = ({ appearance, children }: buttonProps): JSX.Element => {
    return (
        <button className={cn(styles.button, {
            [styles.primary]: appearance === 'primary',
            [styles.ghost]: appearance === 'ghost',
        })}>
            {children}
        </button>
    );
};