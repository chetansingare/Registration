import { React, useEffect } from "react";
import thunkGetAction from "./thunk2";
import './Table.css'
import { connect } from "react-redux";

function getData(dispatch) {
  return ({
    TakeData: () => dispatch(thunkGetAction())
  })
}

const showdata = (state) => ({
  display: state.getReducer
})

function Table(props) {
  useEffect(()=>{
    props.TakeData()
  },[])
  
  const table_list = props.display.map((element, index) => {
    return (
      <tr key={index}>
        <td>
          {index+1}
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
          <button>Edit</button>
          </td>
          <td>
          <button>Delete</button>
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