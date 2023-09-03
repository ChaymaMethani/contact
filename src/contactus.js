import './MonComposant.css';
import MonImage from './MonImage';
function ContactUs(){
 /* const containerStyle = {
    backgroundColor: '#0096C7',
    width: '100%',
    height: '800px'
};*/
  const Style = {
    backgroundColor: '#ADE8F4',
    width: '105%',
    height: '530px',
    border: '7px solid #023E8A',
    
  };
  const textStyle = {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: '35px',
    color: '#0096C7',
    justifyContent: 'center',
    display:'flex'
    
  };
  const textStyle1 = {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: '20px',
    color: '#0096C7',
    marginLeft: '10px',
    
  };
  const textStyle2 = {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: '19px',
    color: '#03045E',
    
  };
  const styles = {
    
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '10px', // Ajoute de la marge à droite de l'icône
    
  };
  
return (
  
    <section className="contact-section" >
      <div className="container" >
        <div className="row justify-content-start">
          <div className="col-md-8">
            <div className="wrapper">
              <div className="row no-gutters" ></div>
                 <div className="col-md-20s d-flex align-items-stretch">
               
                  <div className="info-wrap w-100 p-lg-3 p-8 img">
                    <div style={Style}> <br></br>
                    <h3 style={textStyle} >Contact us</h3>
                    <MonImage />
            
          
                    
                  
                    <p className="mb-4" style={textStyle1}>
                      We're open for any suggestion or just to have a chat
                    </p>
                    <div className="dbox w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-start" style={styles}>
                        
                        <span className="fa fa-map-marker"style={textStyle1} ></span>
                      </div>
                      <div className="text pl-3">
                        <p style={textStyle2}>
                          <span >Address:</span> RHCV446, Pôle technologique de Sousse
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-start" style={styles}>
                        <span className="fa fa-phone"style={textStyle1}></span>
                      </div>
                      <div className="text pl-3">
                        <p style={textStyle2} >
                          <span>Phone:</span>
                          <a href="tel://123456789"style={textStyle1}>+21693102093</a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center" style={styles}>
                        <span className="fa fa-paper-plane"style={textStyle1}></span>
                      </div>
                      <div className="text pl-3">
                        <p style={textStyle2}>
                          <span>Email:</span>
                          <a href="mailto:contactintelleau@gmail.com" style={textStyle1}>
                            contactintelleau@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center" style={styles}>
                        <span className="fa fa-globe"style={textStyle1}></span>
                      </div>
                      <div className="text pl-3">
                        <p style={textStyle2}>
                          <span>Website:</span>
                    
                        </p>
                        
                      </div>
                      </div>
                    </div>
                    
                  </div>
                  
                   </div>
                   
                   </div>
                   </div>

                </div>
                </div>
                </section>
               
)
}

export default ContactUs;