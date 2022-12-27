import mobil from "../assets/img/img_car.png"

const HeaderCar = () => {
    return(
        <>
        <header>
        <div id="navtop">
        <nav className="navbar navbar-expand-lg justify-content-end">
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="offcanvas offcanvas-end px-3" tabIndex={-1} id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">BCR</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="navcontent">
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <a className="nav-link active" href="#our">Our Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#why">Why Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#testi">Testimonial</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#faq">FAQ</a>
                </li>
                <button className="btn btn-success" type="button">Register</button>
              </ul>    
            </div> 
          </div>
        </nav>
      </div>

      <div id="banner">
        <div className="row mt-5">
          <div className="col-md-6 col-sm-12">
            <p className="banner-title">Sewa &amp; Rental Mobil Terbaik di kawasan Solo</p>
            <p className="banner-subtitle">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
              untuk sewa mobil selama 24 jam.
            </p>
          </div>
          <div className=" col-md-6 col-sm-12">
            <img className="img-fluid" src={mobil} alt="mobil"/>
          </div>
        </div>
      </div>
      </header>
        </>
    );
};

export default HeaderCar;