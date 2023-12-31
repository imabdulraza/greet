import React from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log('✅ Progress saved');
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}

const OnlineStatus:React.FC = () => {
    return(
        <div className='container'>
            <h4 className='fs-6 fw-bold'>Online Status</h4>
            {/* <SaveButton /> */}
            <StatusBar />
        </div>
    )
}

export default OnlineStatus;