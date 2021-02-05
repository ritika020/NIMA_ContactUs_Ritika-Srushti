import React from 'react';
// import Card from '@bit/react-bootstrap.react-bootstrap.card';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import one from "../Images/1.png";
class First extends React.Component{
    render()
    {
        return(
          <div className="container-fluid first-container" >
        <div className="left" style={{width:"50%", float:"left"}}>
        <img src={one} alt="one" className="one" style={{alignSelf:"left", paddingLeft:"115px" }}></img>
        </div>
        <div className="right">
<Card style={{ }}>
  <Card.Body>
    <div className="left1" style={{width:"10%", float:"left"}}>
    {/* <Card.Img variant="top" src="d-flex justify-content-center" /> */}

    </div>
   
    {/* <div className="right1" style={{width:"90%", float:"left", marginBottom:"55px", marginTop:"37px"}}>
    <Card.Title style={{textAlign:"left"}}>If having any query, enquiry feel free to write to us!</Card.Title>
    <Card.Title style={{textAlign:"left"}}>Fill the below form to contact us!</Card.Title>
    </div>*/}
    <Card.Text> 
    <form className="">
                     <div className="row y3">
                         
                     <div className="form-group col-md-6">
                     <input type="name" class="form-control " id="Form_input1" placeholder="First Name" style={{color:"#390969"}}/>
                     </div>
                     <div className="form-group col-md-6">
                     <input type="name" class="form-control" id="Form_input2" placeholder="Last Name"/>
                     </div>
                     </div>
                     <div className="row y4">
                     <div className="form-group col-md-8">
                     <input type="name" class="form-control" id="Form_input3" placeholder="E-mail ID"/>
                     </div>
                     <div className="form-group col-md-4">
                     <input type="name" class="form-control" id="Form_input4" placeholder="Phone number"/>
                     </div>
                     </div>
                     <div className="row y5">
                             
                     <div className="form-group col-md-12">
                     <textarea class="form-control" id="Form_input5" placeholder="Permanent Address" rows="2" required
                      ></textarea>
                     </div>

                     </div>

                     <div className="row y6">
                             
                             <div className="form-group col-md-12">
                             <textarea class="form-control" id="Form_input5" placeholder="Subject" rows="1" required
                              ></textarea>
                             </div>
                             
                             </div>
                     <div className="row y7">
    
                     <div className="form-group col-md-12">
                     <textarea class="form-control" id="Form_input5" placeholder="Query/Suggestion" rows="3" required
                              ></textarea>
                     </div>
                     </div>
                    <div className="row y7 d-flex justify-content-center">     
                     <button class="button" className="Form_submit" style={{alignSelf:"center"}}> Submit</button>
                     </div>
            </form>

    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
</div>
</div>


        ); 


    }



}

export default First;