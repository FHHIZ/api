import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label1: string;
    label2?: string;
}

export const Button: React.FC<ButtonProps> = ({ label1, label2, ...rest }) => {
    return (
        <div>
            <button className='btn bg-yellow-400' {...rest}>
                {label1} {label2}
            </button>
        </div>
    );
};

export const Button2: React.FC<ButtonProps> = ({ label1, label2, ...rest }) => {
    return (
        <div>
            <button className='btn bg-yellow-400' {...rest}>
                {label1} - {label2}
            </button>
        </div>
    );
};