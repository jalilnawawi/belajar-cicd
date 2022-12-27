import imgService from "../assets/img/img_service.png";
import centang from "../assets/img/centang.png"

const Our = () => {
    return (
        <>
        <div className="container row mx-auto mt-5" id="our" style={{textAlign: "justify"}}>
        <div className=" col-md-6 ">
          <img className="img-fluid" src={imgService} alt="img_service"/>
        </div>
        <div className=" col-md-6  justify-content-center">
          <p className="title">
            Best Car Rental for any kind of trip in Solo!
          </p>
          <p className="subtitle">
            Sewa mobil di Solo bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
            pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
          </p>
          <ul className="list-unstyled" id="list">
            <li><img src={centang} alt="centang"/> Sewa Mobil Dengan Supir di Bali 12 Jam</li>
            <li><img src={centang} alt="centang"/> Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
            <li><img src={centang} alt="centang"/> Sewa Mobil Jangka Panjang Bulanan</li>
            <li><img src={centang} alt="centang"/> Gratis Antar - Jemput Mobil di Bandara</li>
            <li><img src={centang} alt="centang"/> Layanan Airport Transfer/Drop In Out</li>
          </ul>
        </div>
        </div>
        </>
    )
}

export default Our;