import React, { useState } from 'react';

const Lakes = () =>  {
  const [year, setYear] = useState(2050);;
  const [status, setStatus] = useState("Open");
  const [manager, setManager] = useState('Alex');
  return (
    <>
    <div>
      <h1>{ year } </h1>
      <button onClick={ () => setYear(year + 1 ) }>Add Year</button>
    </div>
    <div>
      <h1>Manager on Duty: { manager } </h1>
      <button onClick={ () => setManager('Tom') }>New Manager</button>
    </div>
    <div>
      <h1>Status: { status } </h1>
      <button onClick={ () => setStatus('Open') }>Open</button>
      <button onClick={ () => setStatus('Closed') }>Closed</button>
    </div>
    </>
  )

};

export default Lakes;