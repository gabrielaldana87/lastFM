import React, { useState, useEffect, useReducer } from 'react';

const Checkbox = () => {
  const [checked, toggle ] = useReducer(checked => !checked, false);

  // useEffect(() => {
  //   alert(`checked: ${checked.toString()}`);
  // });

  return (
    <>
      <input type='checkbox' value={ checked } onChange={ toggle }/>
    { checked ? 'checked' : 'not checked' }
    </>
  )

};

export default Checkbox;