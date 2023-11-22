import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllHistory } from '../services/allAPI'


function WatchHistory() {
 
   const [history,setHistory]= useState([])

  const handleHistory = async()=>{
    //make api call
    const {data} = await getAllHistory()
   setHistory(data);
  }
  console.log(history);

  useEffect(()=>{
    handleHistory()
  },[])

  return (
    <>
      <div className="container mt-5 d-flex justify-content-between">
          <h3>Watch History</h3>
          <Link to={'/home'}className='d-flex align-items-center' style={{textDecoration:'none', color:'white', fontSize:'20px'}}><i class="fa-solid fa-arrow-left fa-beat me-2"></i> Back to Home</Link>
      </div>
      <table className='table mt-5 mb-5 container'>
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time Stamp</th>
            </tr>
          </thead>
          <tBody>
           {history?history?.map((item,index)=>(<tr key={index}>{/* if we are rendering a list each row should have unique have */}
              <td>{index+1}</td>
              <td>{item.caption}</td>
              <td><a target='_blank' href={item.embedLink}>{item.embedLink}</a></td>
              <td>{item.timeStamp}</td>
            </tr>)) :
            <p>No watch History</p>
            }
          </tBody>
      </table>
    </>
  )
}

export default WatchHistory