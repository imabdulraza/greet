import React, { memo } from 'react';

interface TitleProps {
    children: string;
};

const Title:React.FC<TitleProps> = ({children}) => {
    console.log('Title component rendering...')
    return <h5 className="card-title">{children}</h5>
};

export default memo(Title);