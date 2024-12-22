import './Button.scss';

interface IButtonProps {
    children: React.ReactNode;
    className?: string;
}

const Button = ({ children, className }: IButtonProps) => {
    return <button className={`btn ${className}`}>{children}</button>;
};

export default Button;
