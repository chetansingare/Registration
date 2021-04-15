import { React } from "react";
import './Table.css'

function Table() {
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
        </table>
      </div>
    </>
  )
}

export default Table