import iconComplete from "../assets/img/icon_complete-1.png"
import iconPrice from "../assets/img/icon_price-1.png"
import icon24hrs from "../assets/img/icon_24hrs-1.png"
import iconProfessional from "../assets/img/icon_professional-1.png"


const Why = () => {
    return (
        <>
        <div id="why" style={{textAlign:"justify"}}>
        <p className="title">Why Us?</p>
        <p className="subtitle">Mengapa harus pilih Binar Car Rental?</p>
        <div className="row mx-1 why-content">
          <div className="col-md-3 ">
            <div className="card " style={{width: '18rem'}}>
              <div className="card-body">
                <img src={iconComplete} width="32px" height="32px" alt="icon_complete-1"/>
                <h5 className="card-title mt-3">Mobil Lengkap</h5>
                <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{width: '18rem'}}>
              <div className="card-body">
                <img src={iconPrice} width="32px" height="32px" alt="icon_price-1"/>
                <h5 className="card-title mt-3">Harga Murah</h5>
                <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{width: '18rem'}}>
              <div className="card-body">
                <img src={icon24hrs} width="32px" height="32px" alt="icon_24hrs-1"/>
                <h5 className="card-title mt-3">Layanan 24 Jam</h5>
                <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{width: '18rem'}}>
              <div className="card-body">
                <img src={iconProfessional} width="32px" height="32px" alt="icon_professional-1"/>
                <h5 className="card-title mt-3">Sopir Profesional</h5>
                <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
              </div>
            </div>
          </div>   
        </div>
      </div>
        </>
    );
};

export default Why;