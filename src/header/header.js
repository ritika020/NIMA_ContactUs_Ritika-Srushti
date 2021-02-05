import React from 'react';
import "./header.css";
class Second extends React.Component{
    render()
    {
        return(
           <div className="container-fluid header-container">
            <div className="headhead row align-items-end">
            <div className="col-md-5">
                <div className="head1">
                    Contact us
                </div>
                <div className="head2">
                We thankyou for your interest into Nima

                </div>
                </div>
                <div className="col-md-7 p-0">
                <div className="formx row pl-0 pr-0">
                <div className="col-md-1 pl-0 pr-0">
                    <div className="circ" >


                    </div>
                    </div>
                    <div className="col-md-10">
                    <div className="cont">
                    If having any query, enquiry feel free to write to us!
                    Fill the below form to contact us!
                    </div>
                    </div>
                </div>
                </div>

</div>
            </div>

        ); 


    }



}

export default Second;