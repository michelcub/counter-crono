import React from 'react';

export const Options =({handlePlayCounter, handleStopCounter, handleResetCounter, handleSetAlarm}) => {
    return (
        <section className='container'>
            <div className='row gap-3 mt-5'>
            <button className='col btn btn-primary' onClick={handlePlayCounter}>Play</button>
            <button className='col btn btn-danger' onClick={handleStopCounter}>Stop</button>
            <button className='col btn btn-warning' onClick={handleResetCounter}>Reset</button>
            <button className='col btn btn-secondary' onClick={handleSetAlarm}>Alarm</button>
            </div>
        </section>
    )
}
