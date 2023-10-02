import React, { useCallback, useState } from 'react';
import Button from '../../components/Button';
import ListItem from '../../components/ListItem';
import Timer from '../../components/Timer';
import Title from '../../components/Title';

const UseCallback:React.FC = () => {
    const [age, setAge] = useState<number>(0);
    const [count, setCount] = useState<number>(0);
    const [dark, setDark] = useState<boolean>(false);

    const [number, setNumber] = useState<number>(0);

    const getItems = () => {
        return [number, number + 1, number + 2]
    }

    const handleCounter = useCallback(() => {
        console.log('executing handleCounter')
        setCount((previous) => previous + 1);

    }, [count]);

    const handleAge = useCallback(() => {
        console.log('executing handleAge')
        setAge((previous) => previous + 1);
        
    }, [age]);

    const toggleTheme = useCallback(() => {
        console.log('executing toggleTheme')
        setDark((previous) => !previous);

    }, [dark]);

    const theme = {
        background: dark ? '#000000' : '#ffffff', 
        color: dark ? '#ffffff' : '#000000'
    };

    return(
        <div className='container'>
            <h4 className='fs-6 fw-bold'>useCallback</h4>
            <div className="row">
                <div className="col-sm-6 mb-4">
                    <div className="card" style={theme}>
                        <div className="card-body">
                            <Title>{'Age Counter'}</Title>
                            <p className='display-1'>{age}</p>
                            {/* <ListItem getItems={getItems} /> */}
                            <Button onClick={handleAge}>
                                {'Age'}
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-4">
                    <div className="card" style={theme}>
                        <div className="card-body">
                            <Title>{'Number Counter'}</Title>
                            <p className='display-1'>{count}</p>
                            <Button onClick={handleCounter}>
                                {'Counter'}
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-4">
                    <div className="card" style={theme}>
                        <div className="card-body">
                            <Title>{'Theme'}</Title>
                            <p className='display-1'>toggle theme</p>
                            <Button onClick={toggleTheme}>
                                {dark ? 'light' : 'dark'}
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-4">
                    <div className="card" style={theme}>
                        <div className="card-body">
                            <Title>{'Stopwatch'}</Title>
                            <Timer children={''} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UseCallback;