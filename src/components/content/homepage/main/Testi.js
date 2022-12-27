import photo1 from "../assets/img/img_photo-1.png"
import photo2 from "../assets/img/img_photo-2.png"
import leftButton from "../assets/img/Left_button.png"
import rightButton from "../assets/img/Right_button.png"

const Testi = () => {
    return (
        <>
      <div id="testi" style={{textAlign:"justify"}}>
        <p className="title">Testimonial</p>  
        <p className="subtitle">Berbagai review positif dari para pelanggan kami</p>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card mb-3" style={{maxWidth: '540px'}}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={photo1} className="img-fluid rounded-start" alt="photo1" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                      <p className="card-text">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus perferendis accusamus rerum. Pariatur commodi dolorem mollitia numquam nesciunt, 
                        officia necessitatibus atque quas quidem itaque alias aliquam. Qui, reprehenderit aperiam."</p>
                      <p className="card-text"><strong>John Dee 32,Bromo</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card mb-3" style={{maxWidth: '540px'}}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={photo2} className="img-fluid rounded-start" alt="photo2" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                      <p className="card-text">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus perferendis accusamus rerum. Pariatur commodi dolorem mollitia numquam nesciunt, 
                        officia necessitatibus atque quas quidem itaque alias aliquam. Qui, reprehenderit aperiam."</p>
                      <p className="card-text"><strong>John Dee 32,Bromo</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
          <div className="text-center" >
            <a type="button" href="!#" data-bs-target="#carouselExampleControls" data-bs-slide="prev" className="tmbltesti"><img src={leftButton} alt="leftButton"/></a>
            <a type="button" href="!#" data-bs-target="#carouselExampleControls" data-bs-slide="next" className="tmbltesti"><img src={rightButton} alt="rightButton"/></a>
          </div>
        </div>
      </div>
        </>
    );
};

export default Testi;