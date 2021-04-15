import { React } from "react";
import './Table.css'

function getData(dispatch){

  Take:()=>dispatch()

}

function Table() {

  // const table_list = table.map((element, index) => {
  //   console.log('element ', element)
  //   return (
  //     <tr key={index}>
  //       <td>{index+1}</td>
  //       <td>
  //         <p>{element.firstName}</p>
  //       </td>
  //       <td>
  //         <p>{element.lastName}</p>
  //       </td>
  //       <td><button value={index} onClick={edit}>edit</button></td>
  //       <td><button value={index} onClick={remove} >delete</button></td>
  //     </tr>
  //   )
  // })

  return (
    <>
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

export default Table