import React, { memo } from 'react';

interface ButtonProps {
    children: string;
    onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({children, onClick}) => {
    console.log('Button component rendering...')
    return (
        <button className='btn btn-primary' onClick={onClick}>
            {children}
        </button>
    );
};

export default memo(Button);
