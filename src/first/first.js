import React, { Fragment } from "react";
// import Card from '@bit/react-bootstrap.react-bootstrap.card';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import one from "../Images/1.png";
import "./first.css";
import captch from "../Images/Rectangle 1436.png";
class First extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="mobileView">
          <div className=" container-fluid ContactFirst p-0">
            <div className="row  p-0  ContactHeader_row">
              <div className="col-12 Contact_form">
                <div className="">
                  <form className="row Contact_col2Form">
                    <div className="col-12">
                      <div className="row p-0">
                        <div className="form-group  col-6">
                          <input
                            type="text"
                            class="form-control ContactForm_input "
                            id="Form_input1"
                            placeholder="First Name"
                            style={{ color: "#390969" }}
                          />
                        </div>
                        <div className="form-group  col-6">
                          <input
                            type="text"
                            class="form-control ContactForm_input"
                            id="Form_input2"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="row p-0">
                        <div className="form-group col-12 ">
                          <input
                            type="email"
                            class="form-control ContactForm_input"
                            id="Form_input3"
                            placeholder="E-mail ID"
                          />
                        </div>
                        <div className="form-group col-12 ">
                          <input
                            type="number"
                            class="form-control ContactForm_input"
                            id="Form_input4"
                            placeholder="Phone number"
                          />
                        </div>
                      </div>
                      <div className="row ">
                        <div className="form-group col-12 ">
                          <textarea
                            class="form-control ContactForm_input"
                            id="Form_input5"
                            placeholder="Permanent Address"
                            rows="2"
                            required
                          ></textarea>
                        </div>
                      </div>

                      <div className="row ">
                        <div className="form-group col-12 ">
                          <textarea
                            class="form-control ContactForm_input"
                            id="Form_input5"
                            placeholder="Subject"
                            rows="1"
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="row ">
                        <div className="form-group col-12 ">
                          <textarea
                            class="form-control ContactForm_input"
                            id="Form_input5"
                            placeholder="Query/Suggestion"
                            rows="3"
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-2">
                          <img src={captch} alt="" className="img-fluid" />
                        </div>
                        <div className="col-6">
                          <p style={{ color: "#785086" }}>I'm not a robot!</p>
                        </div>
                      </div>
                      <div className="row d-flex justify-content-center">
                        <button class="button" className="Form_submitBtn">
                          {" "}
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-12 p-0">
                <img src={one} alt="" className="Contact_col1Image img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="desktopView">
          <div className=" container-fluid ContactFirst">
            <div className="row  p-0  ContactHeader_row">
              <div className="col-5 p-0">
                <img src={one} alt="" className="Contact_col1Image img-fluid" />
              </div>
              <div className="col-7 Contact_form">
                <div className="">
                  <form className="row Contact_col2Form">
                    <div className="col-12">
                      <div className="row p-0">
                        <div className="form-group pl-0 col-md-6">
                          <input
                            type="text"
                            class="form-control ContactForm_input "
                            id="Form_input1"
                            placeholder="First Name"
                            style={{ color: "#390969" }}
                          />
                        </div>
                        <div className="form-group pl-0 col-md-6">
                          <input
                            type="text"
                            class="form-control ContactForm_input"
                            id="Form_input2"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="row p-0">
                        <div className="form-group col-md-8 pl-0">
                          <input
                            type="email"
                            class="form-control ContactForm_input"
                            id="Form_input3"
                            placeholder="E-mail ID"
                          />
                        </div>
                        <div className="form-group col-md-4 pl-0">
                          <input
                            type="number"
                            class="form-control ContactForm_input"
                            id="Form_input4"
                            placeholder="Phone number"
                          />
                        </div>
                      </div>
                      <div className="row ">
                        <div className="form-group col-md-12 pl-0">
                          <textarea
                            class="form-control ContactForm_input"
                            id="Form_input5"
                            placeholder="Permanent Address"
                            rows="2"
                            required
                          ></textarea>
                        </div>
                      </div>

                      <div className="row ">
                        <div className="form-group col-md-12 pl-0">
                          <textarea
                            class="form-control ContactForm_input"
                            id="Form_input5"
                            placeholder="Subject"
                            rows="1"
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="row ">
                        <div className="form-group col-md-12 pl-0">
                          <textarea
                            class="form-control ContactForm_input"
                            id="Form_input5"
                            placeholder="Query/Suggestion"
                            rows="3"
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-2">
                          <img src={captch} alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-4">
                          <p style={{ color: "#785086" }}>I'm not a robot!</p>
                        </div>
                      </div>
                      <div className="row d-flex justify-content-center">
                        <button class="button" className="Form_submitBtn">
                          {" "}
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>

      // <div className="container first-container">
      //   <div className="row p-0">
      //     <div className="col-5 p-0">
      //       <img src={one} alt="one" className="one"></img>
      //     </div>
      //     <div className="col-7 p-0">
      //       <Card style={{}}>
      //         <Card.Body>
      //           <Card.Text>
      //             <form className="">
      //               <div className="row y3">
      //                 <div className="form-group col-md-6">
      //                   <input
      //                     type="text"
      //                     class="form-control "
      //                     id="Form_input1"
      //                     placeholder="First Name"
      //                     style={{ color: "#390969" }}
      //                   />
      //                 </div>
      //                 <div className="form-group col-md-6">
      //                   <input
      //                     type="text"
      //                     class="form-control"
      //                     id="Form_input2"
      //                     placeholder="Last Name"
      //                   />
      //                 </div>
      //               </div>
      //               <div className="row y4">
      //                 <div className="form-group col-md-8">
      //                   <input
      //                     type="email"
      //                     class="form-control"
      //                     id="Form_input3"
      //                     placeholder="E-mail ID"
      //                   />
      //                 </div>
      //                 <div className="form-group col-md-4">
      //                   <input
      //                     type="number"
      //                     class="form-control"
      //                     id="Form_input4"
      //                     placeholder="Phone number"
      //                   />
      //                 </div>
      //               </div>
      //               <div className="row y5">
      //                 <div className="form-group col-md-12">
      //                   <textarea
      //                     class="form-control"
      //                     id="Form_input5"
      //                     placeholder="Permanent Address"
      //                     rows="2"
      //                     required
      //                   ></textarea>
      //                 </div>
      //               </div>

      //               <div className="row y6">
      //                 <div className="form-group col-md-12">
      //                   <textarea
      //                     class="form-control"
      //                     id="Form_input5"
      //                     placeholder="Subject"
      //                     rows="1"
      //                     required
      //                   ></textarea>
      //                 </div>
      //               </div>
      //               <div className="row y7">
      //                 <div className="form-group col-md-12">
      //                   <textarea
      //                     class="form-control"
      //                     id="Form_input5"
      //                     placeholder="Query/Suggestion"
      //                     rows="3"
      //                     required
      //                   ></textarea>
      //                 </div>
      //               </div>
      //               <div className="row y7 d-flex justify-content-center">
      //                 <button
      //                   class="button"
      //                   className="Form_submit"
      //                   style={{ alignSelf: "center" }}
      //                 >
      //                   {" "}
      //                   Submit
      //                 </button>
      //               </div>
      //             </form>
      //           </Card.Text>
      //           {/* <Button variant="primary">Go somewhere</Button> */}
      //         </Card.Body>
      //       </Card>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default First;
