import { React, useEffect } from "react";
import thunkGetAction from "./thunk2";
import './Table.css'
import { connect } from "react-redux";
import DeleteAction from './DeleteAction'
import { edit } from './editAction'

function getData(dispatch) {
  return ({
    TakeData: () => dispatch(thunkGetAction()),
    DeleteUser: (userData) => dispatch(DeleteAction(userData)),
    EditUser: (userData) => dispatch(edit(userData)),
  })
}

const showdata = (state) => ({
  display: state.getReducer
})

function Table(props) {
  useEffect(() => {
    props.TakeData()
  }, [])

  const table_list = props.display.map((element, index) => {
    return (
      <tr key={element.id}>
        <td>
          {index + 1}
        </td>
        <td>
          <p>{element.Name}</p>
        </td>
        <td>
          <p>{element.Age}</p>
        </td>
        <td>
          <p>{element.Email}</p>
        </td>
        <td>
          <p>{element.Contact}</p>
        </td>
        <td>
          <button onClick={() => props.EditUser(element)}>Edit</button>
        </td>
        <td>
          <img
            onClick={() => {
              props.DeleteUser(element)
              // dispatchGetUser()
            }}
            className="btn-img"
            src="https://www.flaticon.com/svg/vstatic/svg/1345/1345874.svg?token=exp=1618650120~hmac=9a4c4cf8bff151a8427c59b6229c920b"
            alt="delete" />
        </td>
      </tr>
    )
  })

  return (
    <>
      <div className='Table'>
        <table className='Table_Head'>
          <thead>
            <tr>
              <th className="th-data">#</th>
              <th className="th-data">Name</th>
              <th className="th-data">Age</th>
              <th className="th-data">Email</th>
              <th className="th-data">Contact</th>
            </tr>
          </thead>
          <tbody>{table_list}</tbody>
        </table>
      </div>
    </>
  )
}

export default connect(showdata, getData)(Table)