import { React } from "react";
import thunkGetAction from "./thunk2";
import './Table.css'
import { connect } from "react-redux";

function getData(dispatch) {
  return ({
    TakeData: () => dispatch(thunkGetAction())
  })
}

const showdata = (state) => ({
  display: state.thunkreducer.state
})

function Table(props) {
  console.log(typeof(props.display),props.display);
  // const table_list = props.display.map((element, index) => {
  //   return (
  //     <tr key={index}>
  //       <td>{index + 1}</td>
  //       <td>
  //         <p>{element.firstName}</p>
  //       </td>
  //       <td>
  //         <p>{element.lastName}</p>
  //       </td>
  //       <td>edit</td>
  //       <td>delete</td>
  //     </tr>
  //   )
  // })

  return (
    <>
      <button onClick={() => props.TakeData()}>click me</button>
      <div className='Table'>
        <table className='Table_Head'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Contact</th>
            </tr>
          </thead>
          {/* <tbody>{table_list}</tbody> */}
        </table>
      </div>
    </>
  )
}

export default connect(showdata, getData)(Table)