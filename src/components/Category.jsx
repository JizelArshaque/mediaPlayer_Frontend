import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addToCategories, getAVideo, getAllcategory, updateCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Row, Col } from 'react-bootstrap';
import VideoCard from './VideoCard'

function Category() {
  const [categoryName , setCategoryName]= useState({})
  const [allCategory , setAllCategory] = useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //function to add category
  const handleAddCategory = async()=>{
    console.log(categoryName);
    if(categoryName){
      let body = {
        categoryName,
        allVideos: []
      }
      //make api call
      const response = await addToCategories(body)
      console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success('Category Successfully Added')
        //to make the state null after successfull addition
        setCategoryName("")
        //to close model
        handleClose()
      }
      else{
        console.log(response);
       toast.error('Something went wrong. Please try again later')
      }

    }
    else{
      toast.warning('please fill the category Name')
    }

  }

  //function to get all Category
  const getallCategory = async()=>{
    const {data} = await getAllcategory()
   /*  console.log(data); */
    setAllCategory(data)
  }
  console.log(allCategory);

 //dragover eventListerner
 const dragover =(e)=>{
  //this will prevent reload so that the dat that we send from videoCard.jsx wont be lost
  e.preventDefault()
  console.log('inside dragover');
 }

 const videoDrop = async(e, categoryId)=>{
  console.log(`dropped inside the categoryid ${categoryId}`);
  //to get the videoid that is send from videoCard component
 const videoid= e.dataTransfer.getData("videoID")
 console.log(videoid);

 //api to get the particular video that is draged
 const {data} = await getAVideo(videoid)
 console.log(data);

 //to find the particular category with the specified id
 let selectedCategory = allCategory?.find(item=>item.id===categoryId)
 console.log(selectedCategory);
 //data is added to the allvideos array in the particular category with the specified id
 selectedCategory.allVideos.push(data)
 console.log(selectedCategory);

 await updateCategory(categoryId,selectedCategory)
 getallCategory()
 
 }

  useEffect(()=>{
    getallCategory()
  },[])

  return (
    <>
      <div className='d-grid ms-3'>
        <button onClick={handleShow} className='btn btn-warning'>Add New Category</button>
      </div>

    {  allCategory?.length>0?
     allCategory?.map((item)=>( <div className='m-5 border border-secondary rounded p-3'>
     <div className="d-flex justify-content-between align-items-center" droppable onDragOver={(e)=>dragover(e)} onDrop={(e)=>videoDrop(e, item?.id)}>
       <h6>{item.categoryName}</h6>
       <button className='btn btn-danger'><i className="fa-solid fa-trash-can"></i></button>
     </div>
     <Row>
      <Col sm={12}>
        {
          item.allVideos?.length>0?
          item.allVideos.map(card=>(<VideoCard displayVideo={card}/>))
         : <p>Nothing to Display</p>
        }
      </Col>
     </Row>
   </div>))
   : <p>Nothing to display</p>
      }

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> <i className="fa-solid fa-pencil text-warning me-2"></i> Add new Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form className='border border-secondary rounded p-3'>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Label>Category Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)} />
              </Form.Group>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="warning">Add</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
      
    </>
  )
}

export default Category