import React, { useState } from 'react'
import { connect } from 'react-redux'
import './Entries.css'
import thunkAction from './thunkAction'


function Transfer(dispatch) {
  return (
    {
      add: (Data) => dispatch(thunkAction(Data))
    }
  )
}



function Entries(props) {

  const [Data, UpdatedData] = useState({
    Name: '',
    Email: '',
    Age: '',
    Contact: ''
  })

  function send(event) {
    event.preventDefault()
    props.add(Data)
  }

  console.log(props)

  return (
    <>
      <div className='Form_mid_Entries'>
        <div className='Form_mid_Entries_Up'>
          <label className='label'>Name:</label>
          <input className='Form_Mid_Input' value={Data.Name} onChange={(event) => UpdatedData({ ...Data, Name: event.target.value })} />
          <label className='label'>Email:</label>
          <input className='Form_Mid_Input' value={Data.Email} onChange={(event) => UpdatedData({ ...Data, Email: event.target.value })} />
        </div>
        <div className='Form_mid_Entries_Down'>
          <label className='label'>Age:</label>
          <input className='Form_Mid_Input' value={Data.Age} onChange={(event) => UpdatedData({ ...Data, Age: event.target.value })} />
          <label className='label'>Contact:</label>
          <input className='Form_Mid_Input' value={Data.Contact} onChange={(event) => UpdatedData({ ...Data, Contact: event.target.value })} />
        </div></div>
      <div className='Form_Bottom'>
        <button onClick={send}>Submit &gt;&gt; </button>
      </div>
    </>
  );
}
export default connect(null, Transfer)(Entries)