import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { updateUser } from './editAction'
import './Entries.css'
import thunkAction from './thunkAction'


function Transfer(dispatch) {
  return (
    {
      add: (Data) => dispatch(thunkAction(Data)),
      updateUser: (id,userdata) => dispatch(updateUser(id,userdata))
    }
  )
}

function state(state) {
  return ({
    mode: state.editReducer.Mode,
    data: state.editReducer.data
  })
}



function Entries(props) {

  const [Data, UpdatedData] = useState({
    Name: '',
    Email: '',
    Age: '',
    Contact: ''
  })


  useEffect(() => {
    if (props.data) {
      UpdatedData({
        Name: props.data.Name,
        Email: props.data.Email,
        Age: props.data.Age,
        Contact: props.data.Contact
      })
    }
  }, [])

  function send(event) {
    event.preventDefault()
    props.add(Data)
  }


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


        {
          props.mode !== "EditMode" &&
          <button onClick={send}>Submit &gt;&gt; </button>
        }
        {
          props.mode === "EditMode" &&
          <>
            <button
              onClick={props.updateUser(props.data.id,  Data)}
              className="Form_Bottom">
              Update
              </button>
            <button
              className="Form_Bottom">
              Cancel
              </button>
          </>
        }
      </div>
    </>
  );
}
export default connect(state, Transfer)(Entries)