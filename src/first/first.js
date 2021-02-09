import React, { Fragment } from "react";
// import Card from '@bit/react-bootstrap.react-bootstrap.card';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import one from "../Images/1.png";
import "./first.css";
import captch from "../Images/Rectangle 1436.png";

import RaisedButton from "material-ui/RaisedButton";
import Recaptcha from "react-google-invisible-recaptcha";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import ellipse from "../Images/Ellipse 220.png";
import { MdMenu } from "react-icons/md";
import { sendContactUsForm } from "../DataService/ContactUs";
class First extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      contactNo: "",
      permenentAddress: "",
      subject: "",
      suggestions: "",

    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.recaptcha.execute();

    var formData = new FormData(event.target);
    const data = {};
    data["firstName"] = formData.get("firstName") || this.state.firstName;
    data["lastName"] = formData.get("lastName") || this.state.lastName;
    data["email"] = formData.get("email") || this.state.email;
    data["contactNo"] = formData.get("contactNo") || this.state.contactNo;
    data["permenentAddress"] =
      formData.get("permenentAddress") || this.state.permenentAddress;
    data["subject"] = formData.get("subject") || this.state.subject;
    data["suggestions"] = formData.get("suggestions") || this.state.suggestions;

    console.log(data);
    sendContactUsForm(data)
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "success") {
          alert("Success " + response.data.message);
          window.location.reload();
        }
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };
  handleChange = (event) => {
    event.preventDefault();
    // let key = event.target.name;
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  // sendMessage = () => {

  // };
  onResolved = () => {
    this.setState({ messageSent: true });
    console.log(this.state);
  };
  render() {
    return (
      <MuiThemeProvider>
        <Fragment>
          <div className="mobileView">
            <div className="ContactFirst p-0">
              <div className="row p-0 ContactHeader_row">
                <div
                  className="col-11 p-0 text-center"
                  style={{ fontSize: "28px" }}
                >
                  <p>What shall be in next?</p>
                </div>
              </div>
              <div className="row p-0 ContactHeader_row">
                <div className="col-2">
                  <p className="ContactMobile_number">1.</p>
                </div>
                <div className="col-10">
                  <p className="ContactMobile_lititle">
                    Your response has been collected
                  </p>
                  <p className="ContactMobile_liSubtitle">
                    Your response collected shall be seen through & our
                    concerned team shall be in touch with you. We take every
                    response seriously
                  </p>
                </div>
              </div>
              <div className="row  p-0 ContactHeader_row align-items-center ContactMobile_rowHeader">
                <div
                  className="col-2 pl-0 pr-0 mt-3 mb-3"
                  style={{ textAlign: "center" }}
                >
                  <img
                    src={ellipse}
                    alt=""
                    className="img-fluid ContactMobile_image"
                  />
                </div>
                <div className="col-10 mt-3 mb-3">
                  <div>
                    <p className="ContactHeaderMobile_Col2title">
                      If having any query, enquiry feel free to write to us!
                    </p>
                    <p className="ContactHeaderMobile_Col2subtitle">
                      Fill the below form to contact us!
                    </p>
                  </div>
                </div>
              </div>
              <div className="row  p-0 ContactHeader_row">
                <div className="col-12 Contact_form">
                  <div className="">
                    <form
                      className="row Contact_col2Form"
                      onSubmit={this.handleSubmit}
                    >
                      <div className="col-12">
                        <div className="row p-0">
                          <div className="form-group  col-6">
                            <input
                              type="text"
                              class="form-control ContactForm_input "
                              // id="Form_input1"
                              placeholder="First Name"
                              required
                              pattern="[A-Za-z_ ]{1,32}"
                              title="*ENTER CHARACTER VALUES ONLY"
                              name="firstName"
                              onChange={this.handleChange}
                              id="firstName"
                              style={{ color: "#390969" }}
                            />
                          </div>
                          <div className="form-group  col-6">
                            <input
                              type="text"
                              class="form-control ContactForm_input"
                              // id="Form_input2"
                              required
                              onChange={this.handleChange}
                              name="lastName"
                              id="lastName"
                              title="*ENTER CHARACTER VALUES ONLY"
                              pattern="[A-Za-z_ ]{1,32}"
                              placeholder="Last Name"
                            />
                          </div>
                        </div>
                        <div className="row mt-2 p-0">
                          <div className="form-group col-12 ">
                            <input
                              type="email"
                              class="form-control ContactForm_input"
                              id="email"
                              name="email"
                              onChange={this.handleChange}
                              required
                              placeholder="E-mail ID"
                            />
                          </div>
                          <div className="form-group mt-2 col-12 ">
                            <input
                              // type="number"
                              id="contactNo"
                              pattern="[1-9]{1}[0-9]{9}"
                              title="Number should be of 10 digits only"
                              type="tel"
                              name="contactNo"
                              onChange={this.handleChange}
                              class="form-control ContactForm_input"
                              required
                              placeholder="Phone number"
                            />
                          </div>
                        </div>
                        <div className="row mt-2 ">
                          <div className="form-group col-12 ">
                            <textarea
                              class="form-control ContactForm_input"
                              id="permenentAddress"
                              onChange={this.handleChange}
                              name="permenentAddress"
                              placeholder="Permanent Address"
                              rows="2"
                              required
                            ></textarea>
                          </div>
                        </div>

                        <div className="row mt-2">
                          <div className="form-group col-12 ">
                            <textarea
                              class="form-control ContactForm_input"
                              id="subject"
                              onChange={this.handleChange}
                              name="subject"
                              placeholder="Subject"
                              rows="1"
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="form-group col-12 ">
                            <textarea
                              class="form-control ContactForm_input"
                              id="suggestions"
                              name="suggestions"
                              onChange={this.handleChange}
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
              </div>
              <div className="row p-0 ContactHeader_row mt-5">
                <div className="col-2">
                  <p className="ContactMobile_number">2.</p>
                </div>
                <div className="col-10">
                  <p className="ContactMobile_lititle">
                    Together we grow, together we improve
                  </p>
                  <p className="ContactMobile_liSubtitle">
                    Nima Strives harder each day to give a best one to one
                    experience. All the alloted are ISM graduates which believes
                    in the query generated & heads towards bringing a change in.
                  </p>
                </div>
              </div>
              <div className="row p-0 ContactHeader_row">
                <div className="col-2">
                  <p className="ContactMobile_number">3.</p>
                </div>
                <div className="col-10">
                  <p className="ContactMobile_lititle">
                    Doubts, FAQ’s can be confirmed from here?
                  </p>
                  <p className="ContactMobile_liSubtitle mb-5">
                    Our trained Medical Professionals are members of this
                    association, this service can be considered for any enquirey
                    related for NIMA’s enrollment & FAQ’s regarding the Process
                    shall also be solved
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="desktopView">
            <div className=" container-fluid ContactFirst">
              <div className="row  p-0  ContactHeader_row">
                <div className="col-5 p-0">
                  <img
                    src={one}
                    alt=""
                    className="Contact_col1Image img-fluid"
                  />
                </div>
                <div className="col-7 Contact_form">
                  <div className="">
                    <form
                      className="row Contact_col2Form"
                      onSubmit={this.handleSubmit}
                    >
                      <div className="col-12">
                        <div className="row p-0">
                          <div className="form-group pl-0 col-md-6">
                            <input
                              type="text"
                              class="form-control ContactForm_input "
                              name="firstName"
                              required
                              title="*ENTER CHARACTER VALUES ONLY"
                              pattern="[A-Za-z_ ]{1,32}"
                              onChange={this.handleChange}
                              id="firstName"
                              placeholder="First Name"
                              style={{ color: "#390969" }}
                            />
                          </div>
                          <div className="form-group pl-0 col-md-6">
                            <input
                              type="text"
                              class="form-control ContactForm_input"
                              onChange={this.handleChange}
                              name="lastName"
                              title="*ENTER CHARACTER VALUES ONLY"
                              pattern="[A-Za-z_ ]{1,32}"
                              required
                              id="lastName"
                              placeholder="Last Name"
                            />
                          </div>
                        </div>
                        <div className="row p-0 mt-3">
                          <div className="form-group col-md-8 pl-0">
                            <input
                              type="email"
                              class="form-control ContactForm_input"
                              id="email"
                              name="email"
                              required
                              onChange={this.handleChange}
                              placeholder="E-mail ID"
                            />
                          </div>
                          <div className="form-group col-md-4 pl-0">
                            <input
                              // type="number"
                              class="form-control ContactForm_input"
                              id="contactNo"
                              pattern="[1-9]{1}[0-9]{9}"
                              type="tel"
                              title="Number should be of 10 digits only"
                              required
                              name="contactNo"
                              onChange={this.handleChange}
                              placeholder="Phone number"
                            />
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="form-group col-md-12 pl-0">
                            <textarea
                              class="form-control ContactForm_input"
                              id="permenentAddress"
                              onChange={this.handleChange}
                              name="permenentAddress"
                              placeholder="Permanent Address"
                              rows="2"
                              required
                            ></textarea>
                          </div>
                        </div>

                        <div className="row mt-3">
                          <div className="form-group col-md-12 pl-0">
                            <textarea
                              class="form-control ContactForm_input"
                              id="subject"
                              onChange={this.handleChange}
                              name="subject"
                              placeholder="Subject"
                              rows="1"
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="form-group col-md-12 pl-0">
                            <textarea
                              class="form-control ContactForm_input"
                              id="suggestions"
                              name="suggestions"
                              onChange={this.handleChange}
                              placeholder="Query/Suggestion"
                              rows="3"
                              required
                            ></textarea>
                          </div>
                        </div>
                        {/* <div className="row">
                          <div className="col-md-2">
                            <img src={captch} alt="" className="img-fluid" />
                          </div>
                          <div className="col-md-4">
                            <p style={{ color: "#785086" }}>I'm not a robot!</p>
                          </div>
                        </div> */}
                        <div className="row d-flex justify-content-center">
                          <button class="button" className="Form_submitBtn">
                            {" "}
                            Submit
                          </button>
                        </div>
                        {/* <RaisedButton
                          label="Send"
                          style={StyleSheet.button}
                          onClick={this.sendMessage}
                        /> */}
                        <Recaptcha
                          ref={(ref) => (this.recaptcha = ref)}
                          sitekey="6Lfj_U0aAAAAAKu_W5IjQrRS2BHjRypOQCUT74qU"
                          onResolved={this.onResolved}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      </MuiThemeProvider>
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
