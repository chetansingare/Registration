import React from 'react'
import './Form.css'

function Form() {
  return (
    <>
      <div className='Form_Main'>
        <div className='Form'>
          <div className='Form_Top'>
            <h1>User Details</h1>
          </div>
          <div className='Form_Mid'>
            <div className='Form_Mid_button'>
              <button className='Form_Mid_Button_Left'>Fill Details</button>
              <button className='Form_Mid_Button_Right'>Entries</button>
            </div>
            <div className='Form_mid_Entries'>
              <div className='Form_mid_Entries_Up'>
                <label className='label'>Name</label>
                <input className='Form_Mid_Input'/>
                <label className='label'>Email</label>
                <input className='Form_Mid_Input'/>
              </div>
              <div className='Form_mid_Entries_Down'>
                <label className='label'>Age</label>
                <input className='Form_Mid_Input'/>
                <label className='label'>Contact</label>
                <input className='Form_Mid_Input'/>
              </div>
            </div>
          </div>
          <div className='Form_Bottom'>
            <button>Submit &gt;&gt; </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form