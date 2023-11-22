import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
function LandingPage() {
  const navigateByUrl = useNavigate()
  return (
    <>
     <Row className='mt-5 mb-5 align-item-center justify-content-between w-100'>
      <Col></Col>
      <Col lg={5}>
        <h3 className='mt-5'>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:'justify', marginTop:'30px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rerum ea odit, libero minima tempore unde eveniet, numquam quaerat ex dolor, voluptatem eius quidem perspiciatis totam nihil at illo repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem saepe, nesciunt sapiente ex maxime dignissimos quo animi quae culpa numquam delectus commodi necessitatibus sequi perspiciatis, voluptate dolorem cum. Delectus, maiores.</p>

        <button onClick={()=>navigateByUrl('/home')} className='mt-5 btn btn-warning'>Get Started <i class="fa-solid fa-arrow-right ms-2"></i></button>
      </Col>
      <Col></Col>
      <Col lg={5}>
       <img  src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" height={'500px'} width={'500px'} /> 
      {/*   <video src="https://pin.it/3Mo0xdT"></video> */}
      </Col>
     </Row>
     <div className='container mt-5 mb-5 d-flex flex-column align-items-center justify-content-center'>
          <h3>Features</h3>
          <div className='cards mt-5 mb-5 d-flex align-items-center justify-content-between w-100'>
          <Card className="p-3" style={{ width: '22rem' }}>
            <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
            <Card.Body>
              <Card.Title>Managing Video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="p-3 " style={{ width: '22rem' }}>
            <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body>
              <Card.Title>Categorized Video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="p-3" style={{ width: '22rem' }}>
            <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
     </div>

     <div className='container border border-2 rounded p-5 border-secondary b-5 mt-5 d-flex align-items-center justify-content-between w-100 mb-5'>
      <div className='col-lg-5'>
        <h3 className='mb-5 text-warning'>Simple fast and PowerFul</h3>
        <h6 className='mb-3'><span className='fs-5 fw-bolder'>Play Everything : </span> Amet consectetur adipisicing elit. Autem veritatis totam tempore expedita! Quae quam, commodi dolorum iste unde atque alias debitis voluptates nesciunt</h6>
        <h6 className='mb-3'><span className='fs-5 fw-bolder'>Play Everything : </span> Amet consectetur adipisicing elit. Autem veritatis totam tempore expedita! Quae quam, commodi dolorum iste unde atque alias debitis voluptates nesciunt </h6>
        <h6 className='mb-3'><span className='fs-5 fw-bolder'>Play Everything : </span> Amet consectetur adipisicing elit. Autem veritatis totam tempore expedita! Quae quam, commodi dolorum iste unde atque alias debitis voluptates nesciunt </h6>
      </div>
      <div className="video col-lg-6">
      <iframe width="100%" height="389" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
     </div>
     
    </>
  )
}

export default LandingPage