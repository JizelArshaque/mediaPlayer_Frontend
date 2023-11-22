import React, { useState } from 'react'  
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setUploadVideoServerResponse}) {
    const [video,setVideo]=useState({
      id:"",
      caption:"",
      url:"",
      embedLink:""
    })
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 
    const getEmbedLink = (e)=>{
      const {value} = e.target
      console.log(value.slice(-11));
      const link = `https://www.youtube.com/embed/${value.slice(-11)}`
      setVideo({...video,embedLink:link})
    }
    console.log(video);

    const handleUpload = async ()=>{
      const {id,caption,url,embedLink} = video
      if(!id || !caption || !url || !embedLink){
        toast.warning("Please Fill the form Completely")
      }
      else{
           //make api call uploadVideo
           const response = await uploadVideo(video)
           console.log(response);
           if(response.status>=200 && response.status<300){
            
            //state lifting to get data automatically in sibling component view
            setUploadVideoServerResponse(response.data)

            //reset the video when the details are uploaded
            setVideo({
              id:"",
              caption:"",
              url:"",
              embedLink:""
            })

            toast.success(`${response.data.caption} video uploaded sucessfully !`)
            //to hide modal
            handleClose()
           }else{
            console.log(response);
            toast.error("Cannot perform the operation. Please try after sometime....")
           }
      }
     
    }

  return (
   <>
        <div className='d-flex align-items-center'>
            <h5>Upload New Video</h5>
            <button onClick={handleShow} className='btn'><i class="fa-solid fa-cloud-arrow-up fs-5"></i></button>
        </div>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i className="fa-solid fa-film text-warning"></i> Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <Form className='border border-secondary rounded p-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Video ID" onChange={(e)=>setVideo({...video,id:e.target.value})} />  
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=>setVideo({...video,caption:e.target.value})} />  
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Video Image Url" onChange={(e)=>setVideo({...video,url:e.target.value})} />  
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Youtube Video Link" onChange={getEmbedLink}  />  
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} className='btn btn-warning'>Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
      position='top-center'
      theme='colored'
      autoClose={2000}
      />
   </>
  )
}

export default Add