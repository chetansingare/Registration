import React from 'react'
import './Entries.css'

function Entries() {
  return (
    <>
    <div className='Form_mid_Entries'>
      <div className='Form_mid_Entries_Up'>
        <label className='label'>Name:</label>
        <input className='Form_Mid_Input' />
        <label className='label'>Email:</label>
        <input className='Form_Mid_Input' />
      </div>
      <div className='Form_mid_Entries_Down'>
        <label className='label'>Age:</label>
        <input className='Form_Mid_Input' />
        <label className='label'>Contact:</label>
        <input className='Form_Mid_Input' />
      </div></div>
      <div className='Form_Bottom'>
            <button>Submit &gt;&gt; </button>
          </div>
    </>
  );
}
export default Entries