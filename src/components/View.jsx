import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allAPI'



function View({uploadVideoServerResponse}) {
        const [allVideo, setAllVideo] = useState([])
        const [deleteVideoStatus , setDeleteVideoStatus] = useState(false)


  const getAllUploadedVideo = async()=>{
        const {data} = await getAllVideos()
        setAllVideo(data);
  }

  console.log(allVideo);
  useEffect(()=>{
    getAllUploadedVideo()
    //to delete multiple times
    setDeleteVideoStatus(false)
  },[uploadVideoServerResponse , deleteVideoStatus])


  return (
    <>
        <Row>
            { allVideo.length>0?
              allVideo.map((video)=>(
                <Col sm={12} md={6} lg={4} xl={3}>
                <VideoCard displayData ={video} setDeleteVideoStatus={setDeleteVideoStatus} />
               </Col>
              )):
            <p>Nothing to display</p>
            }
          
        </Row>
    </>
   
  )
}

export default View