import React, { useState, useEffect } from 'react';

interface ItemProps {
    getItems: () => void;
};

const ListItem = ({ getItems }: ItemProps) => {
    const [items, setItems] = useState<any>([]);

    useEffect(() => {;
        setItems(getItems());
        console.log('Updating item...')

    }, [items])

    return(
        <>
            {items.map((item: any) => <li key={item}>{item}</li>)}
        </>
    )
};

export default ListItem;