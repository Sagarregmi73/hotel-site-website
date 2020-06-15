import React from 'react';
import {Card,CardImg,CardBody,CardTitle,CardSubtitle,CardText,Button} from 'reactstrap';
import {Container,Row,Col,Image,Table,Badge} from 'react-bootstrap';

//import {Card,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FcLike} from "react-icons/fc";
import {AiOutlineStar} from "react-icons/ai";
import {FaFacebookSquare,FaGooglePlusSquare,FaTwitterSquare,FaInstagramSquare} from "react-icons/fa";
import {MdAddShoppingCart} from "react-icons/md";
import {FcHome,FcAbout,FcServices,FcPhone,FcCopyright,FcAddressBook} from "react-icons/fc";

function Menu(){

  return(

<div className="headerpart">
<Container className="themed-container">
<Row>
<Col>
<div className="stylish">
<Card style={{ width: '18rem'}}>
     <CardImg top width="100%" src="/assets/images/1.jpg" alt="Card image cap" />
     <CardBody>
< AiOutlineStar />
< AiOutlineStar />
< AiOutlineStar />
< AiOutlineStar />
     <CardTitle style={{fontWeight:"bold"}}>4 star Hotel</CardTitle>
       <CardSubtitle>Kalpataru</CardSubtitle>
<CardText>Luxurious & Royal living,high quality furnished Rooms and Equipments, Quality food with secure Environment.</CardText>
<Button style={{fontSize:"25px", backgroundColor:"#fff",border:"1px solid #fff"}}><FcLike /></Button>
{" "}
       <Button style={{backgroundColor:"#b20094",color:"white",border:"1px solid #b20094"}}>Buy</Button>
       {" "}
       <Button style={{ backgroundColor:"#00FFFF",color:"white",border:"1px solid #00FFFF"}}><MdAddShoppingCart /> Add Cart</Button>
     </CardBody>
   </Card>
</div>
</Col>
<Col>
<div className="stylish">
<Card style={{ width: '18rem'}}>
     <CardImg top width="100%" src="/assets/images/2.jpg" alt="Card image cap" />
     <CardBody>
     < AiOutlineStar />
     < AiOutlineStar />
     < AiOutlineStar />
     < AiOutlineStar />
     < AiOutlineStar />
       <CardTitle style={{fontWeight:"bold"}}>5 star Hotel <Badge variant="danger">New</Badge></CardTitle>
       <CardSubtitle>Solti</CardSubtitle>
<CardText>Luxurious & Royal living,high quality furnished Rooms and Equipments, Quality food with secure Environment.</CardText>
<Button style={{fontSize:"25px", backgroundColor:"#fff",border:"1px solid #fff"}}><FcLike /></Button>
{" "}
       <Button style={{backgroundColor:"#b20094",color:"white",border:"1px solid #b20094"}}>Buy</Button>
       {" "}
       <Button style={{ backgroundColor:"#00FFFF",color:"white",border:"1px solid #00FFFF"}}><MdAddShoppingCart /> Add Cart</Button>
     </CardBody>
   </Card>
</div>
</Col>
<Col>
<div className="stylish">
<Card style={{ width: '18rem'}}>
     <CardImg top width="100%" src="/assets/images/3.jpg" alt="Card image cap" />
     <CardBody>
     < AiOutlineStar />
     < AiOutlineStar />
     < AiOutlineStar />
     < AiOutlineStar />
       <CardTitle style={{fontWeight:"bold"}}>4 star Hotel</CardTitle>
       <CardSubtitle>Siddhartha</CardSubtitle>
<CardText>Luxurious & Royal living,high quality furnished Rooms and Equipments, Quality food with secure Environment.</CardText>
<Button style={{fontSize:"25px", backgroundColor:"#fff",border:"1px solid #fff"}}><FcLike /></Button>
{" "}
       <Button style={{backgroundColor:"#b20094",color:"white",border:"1px solid #b20094"}}>Buy</Button>
       {" "}
       <Button style={{ backgroundColor:"#00FFFF",color:"white",border:"1px solid #00FFFF"}}><MdAddShoppingCart /> Add Cart</Button>
     </CardBody>
   </Card>
</div>
</Col>

</Row>
<Row>
<Col style={{marginTop:"25px",color:"#fff"}}>
 <h1>>></h1>
</Col>
</Row>
</Container>

<div className="mid" id="services">
<Container>
  <Row>
    <Col  >
      <Image className="style"  src="assets/images/1.jpg" rounded />
    </Col>
    <Col  >
      <Image className="style" src="assets/images/2.jpg" rounded />
    </Col>
    <Col  >
      <Image className="style" src="assets/images/4.jpg" rounded />
    </Col>
  </Row>
  <Row>
    <Col   >
      <Image className="style"  src="assets/images/3.jpg" rounded />
    </Col>
    <Col >
      <Image className="style" src="assets/images/4.jpg" rounded />
    </Col>
    <Col >
      <Image className="style" src="assets/images/1.jpg" rounded />
    </Col>
  </Row>
<Row>
<Col>
<h1>...</h1>
</Col>
</Row>
</Container>

    </div>
    <div className="mid-bottom" id="about">
<Container>

<Row>
<Col xs style={{marginTop:"30px"}}>
<p>Already buyed Apartment list.</p>
<Table responsive striped bordered hover>
  <thead>
    <tr>
      <th>S.No.</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>BHK</th>
      <th>Price</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Sagar</td>
      <td>Regmi</td>
      <td>4</td>
      <td>$40000</td>
      <td>pgregmi@gmail.com</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Sushant</td>
      <td>Regmi</td>
      <td>3</td>
      <td>$35000</td>
      <td>sushant2222@gmail.com</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="4">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
</Col>
<Col xs>
<p>Maps</p>
<h1>
<Image className="stylemap" src="https://www.google.com/maps/vt/data=tyY_0cb7dld7_VD5faZsYm8_gdo69TbK41SdO9uF77WBiQ7K5CguZpbeD36l7mZK2-UXmE46SZd_WFchBacOr5PZVCxAWvWO0zjvHUGm9CNp4PMNWU8HCXV0S-bbcrvxUS0N06eCBS8Tq33TXESKbngJzRs0qH3YhOcu4mg6olNk2b0bhev3prF8y6zBFBQYGb0AQpHq6nhpKxMn-IzxQmxJCp8Wpa-MwtRt-GLW43g0SXA" rounded />
</h1>
</Col>
</Row>
<Row>
<Col>
<h1>...</h1>
</Col>
</Row>
</Container>
    </div>
<div className="footer">
<Container  >
<Row >
<Col style={{marginTop:"30px"}}>
<p><FcHome /> Home</p>
<p><FcAbout /> About</p>
<p><FcServices /> Services</p>
</Col>
<Col style={{marginTop:"30px"}}>
<p><FcPhone /> +91-9872597716</p>
<p>Chandigard University,Mohali</p>
<p><FcAddressBook /> pgregmi@gmail.com</p>
</Col>
<Col style={{fontSize:"50px",marginTop:"30px"}}>
<FaFacebookSquare />
< FaGooglePlusSquare />
< FaTwitterSquare />
< FaInstagramSquare />
</Col>
</Row>
<Row>
<Col><p>copyright2020<FcCopyright />Sagar_Apartment</p></Col>
</Row>
</Container>

</div>
    </div>


  );

};
export default Menu;
