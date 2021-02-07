import React from "react";
import "./header.css";
import ellipse from "../Images/Ellipse 220.png";
import { MdMenu } from "react-icons/md";

class Header extends React.Component {
  render() {
    return (
      //   <div className="container-fluid header-container">
      //     <div className="headhead row align-items-end mr-0">
      //       <div className="col-md-5">
      //         <div className="head1">Contact us</div>
      //         <div className="head2">We thankyou for your interest into Nima</div>
      //       </div>
      //       <div className="col-md-7 p-0">
      //         <div className="formx row pl-0 pr-0">
      //           <div className="col-md-1 pl-0 pr-0">
      //             <div className="circ"></div>
      //           </div>
      //           <div className="col-md-10">
      //             <div className="cont">
      //               If having any query, enquiry feel free to write to us! Fill
      //               the below form to contact us!
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      <div className="ContactHeader_container container-fluid">
        <div className="row align-items-end p-0 ContactMobile_menu ContactHeader_row">
          <MdMenu color="white" size={30} />
        </div>
        <div className="row align-items-end p-0  ContactHeader_row">
          <div className="col-md-5 col-12 p-0">
            <div className="ContactHeader_col1">
              <p className="ContactHeader_title">Contact Us</p>
              <p className="ContactHeader_subtitle">
                We thankyou for your interest into <b>Nima</b>
              </p>
            </div>
          </div>
          <div className="col-md-7 ContactUs_mobile col-12 ContactHeader_col2 ">
            <div className="row">
              <div
                className="col-md-2 col-3 p-0"
                style={{ textAlign: "center" }}
              >
                <img src={ellipse} alt="" className="img-fluid" />
              </div>
              <div className="col-md-10 col-9">
                <div>
                  <p className="ContactHeader_Col2title">
                    If having any query, enquiry feel free to write to us!
                  </p>
                  <p className="ContactHeader_Col2subtitle">
                    Fill the below form to contact us!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
