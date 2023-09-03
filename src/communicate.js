import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebaseDB from "./firebase";
import "./communicate.css";



function Communicate() {
  const [state, setState] = useState({
    email: "",
    sujet: "",
    message: "",
  });

  const { email, sujet, message } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    if ( !email || !sujet || !message) {
      toast.error("Please provide value in each input field");
    } else {
      firebaseDB.child("contacts").push(state);
      setState({ email: "", sujet: "", message: "" });
      toast.success("Form Submitted Successfully");
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const textStyle = {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: '30px',
    color: '#0096C7',
    
  };
  const textoast = {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: '16px',
  
    
  };
 /* const containerStyle = {
    backgroundColor: '#00B4D8',
    width: '100%',
    height: '800px'
  };*/
 
  
  return (
   /* <div style={containerStyle}>*/
   
    <section className="contact-section">
      <div className="container">
        <ToastContainer style={textoast}  position="top-center" />
        <div className="row justify-content-start">
          <div className="col-md-8">
            <div className="wrapper">
            <div className="row no-gutters">
                <div className="col-md-12">
                  <div className="contact-wrap w-100 p-lg-4 p-3">
                    <h3 className="mb-4" style={textStyle} >Envoyer nous un message</h3>
                    <form
                      id="contactForm"
                      className="contactForm"
                      onSubmit={handleSubmit}
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Email"
                              onChange={handleInputChange}
                              value={email}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="sujet"
                              placeholder="Sujet"
                              onChange={handleInputChange}
                              value={sujet}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              type="text"
                              className="form-control"
                              name="message"
                              placeholder="Message"
                              cols="40"
                              rows="8"
                              onChange={handleInputChange}
                              value={message}
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              value="Envoyer Message"
                              className="btn btn-primary"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                
              
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </section>
  
  );
}

export default Communicate;