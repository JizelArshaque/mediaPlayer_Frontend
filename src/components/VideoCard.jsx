import { useState } from 'react';
import React from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteAVideos } from '../services/allAPI';

function VideoCard({displayData, setDeleteVideoStatus}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async() => {
      setShow(true);
      //api call to add video to watch history
      const {caption,embedLink}=displayData
      //time stamp
      let today = new Date
      console.log(today);
      let timeStamp = new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit', hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
      console.log(timeStamp);
      let videoDetails = {
        caption,embedLink,timeStamp
      }
        await addToHistory(videoDetails)
    }

    //delete video
    const removeVideo = async(id)=>{
      //make api call
      const response = await deleteAVideos(id)
      setDeleteVideoStatus(true)
    }



  return (
    <>
         <Card style={{ width: '100%' }} className='mb-4'>
      <Card.Img height={'280px'} onClick={handleShow} variant="top" src={displayData.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
            <h6>{displayData.caption}</h6>
            <button onClick={()=>removeVideo(displayData?.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></button>
        </Card.Title>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Video Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="530" src={`${displayData.embedLink}?autoplay=1`} title={displayData?.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard