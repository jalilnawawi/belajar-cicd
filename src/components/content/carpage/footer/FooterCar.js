import facebook from "../assets/img/icon_facebook.png"
import instagram from "../assets/img/icon_instagram.png"
import twitter from "../assets/img/icon_twitter.png"
import mail from "../assets/img/icon_mail.png"
import kotakBiru from "../assets/img/Rectangle_74.png"

const FooterCar = () => {
    return(
        <>
        <footer style={{marginTop: '20px', marginLeft:"60px", textAlign:"justify"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-3" id="address">
              <p>
                Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
              </p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-344-808</p>
            </div>
            <div className="col-md-3" id="navigation">
              <p><strong>Our services</strong></p>
              <p><strong>Why Us</strong></p>
              <p><strong>Testimonial</strong></p>
              <p><strong>FAQ</strong></p>
            </div>
            <div className="col-md-3">
              <p>Connect with us</p>
              <div className="container">
                <div className="row row-cols-auto" id="icon">
                    <div className="col">
                    <a href="www.facebook.com"><img src={facebook} width="32px" height="32px" alt="icon_facebook"/></a>
                    </div>
                    <div className="col">
                    <a href="www.instagram.com"><img src={instagram} width="32px" height="32px" alt="icon_instagram"/></a>
                    </div>
                    <div className="col">
                    <a href="www.twitter.com"><img src={twitter} width="32px" height="32px" alt="icon_twitter"/></a>
                    </div>
                    <div className="col">
                    <a href="www.mail.goole.com"><img src={mail} width="32px" height="32px" alt="icon_mail"/></a>  
                    </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <p>Copyright Binar 2022</p>
              <img src={kotakBiru} alt="kotakbiru" className="kotakbiru" />
            </div>
          </div>
        </div> 
      </footer>
        </>
    );
};

export default FooterCar;