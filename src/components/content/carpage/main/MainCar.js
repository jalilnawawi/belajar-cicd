import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CARS_ENDPOINT_URL = 'http://localhost:8001/api/cars';

const MainCar = () => {
    const [cars, setCars] = useState([]);
    const [filterCarParams, setFilterCar] = useState({});

    useEffect(() => {
        getAllCars();
    }, []);

    const getAllCars = async () => {
        const cars = await axios.get(CARS_ENDPOINT_URL);
        console.log(cars.data.data);
        setCars(cars.data.data);
    };
    
    const onFilterCarDriverType = async (event) => {
      const driverTypeParam = event.target.value;

      if (driverTypeParam === null || driverTypeParam === ""){
          getAllCars();
      };

        setFilterCar((prevState) => ({
          ...prevState,
          driverType: driverTypeParam
        }));
    };

    const onFilterCarCapacityParam = async (event) => {
        const capacityParam = event.target.value;

        if (capacityParam === null || capacityParam === "") {
            getAllCars();
        }

        setFilterCar((prevState) => ({
            ...prevState,
            capacity: capacityParam
        }));
    };

    const onFilterCarBookingDateParam = async(event) => {
        const bookingDateParam = event.target.value;

        if (bookingDateParam === null || bookingDateParam === "") {
            getAllCars();
        }

        setFilterCar((prevState) => ({
            ...prevState,
            booking_date: event.target.value
        }));
    };

    const onFilterCarBookingTimeParam = async(event) => {
        const bookingTimeParam = event.target.value;

        if (bookingTimeParam === null || bookingTimeParam === "") {
            getAllCars();
        }

        setFilterCar((prevState) => ({
            ...prevState,
            booking_time: event.target.value
        }));
    };

    const onEventSubmitFilter = (event) => {
        if(filterCarParams.booking_date != null && filterCarParams.booking_time != null) {
            const bookingDateParam = filterCarParams.booking_date +'T'+ filterCarParams.booking_time + ':00Z';


            console.log(bookingDateParam);

            setFilterCar((prevState) => ({
                ...prevState,
                booking_date_parsed: bookingDateParam
            }));
        }

        onShowFilterCars(filterCarParams);
        console.log(filterCarParams);

        event.preventDefault();
    };

    const onShowFilterCars = async (filter) => {
        if (filter.driverType != null) {
            const cars = await axios.get(CARS_ENDPOINT_URL + '?driverType=' + filter.driverType);
            setCars(cars.data.data);
        };

        if (filter.capacity != null) {
            const cars = await axios.get(CARS_ENDPOINT_URL + '?capacity=' + filter.capacity);
            setCars(cars.data.data);
        };

        if (filter.booking_date_parsed != null) {
            const filterCarsBookingDate = await axios.get(CARS_ENDPOINT_URL + '?bookingDate=' + filter.booking_date_parsed);
            setCars(filterCarsBookingDate.data.data);
        }
    };

    return(
        <>
        <div className="kotak-pencarian" style={{textAlign:"justify"}}>
        <div className="container text-center">
          <form id="form_filter"
          onSubmit={(event) => onEventSubmitFilter(event)}>
            <div className="row row-cols-auto">
              <div className="col-md-2 px-2 py-4" id="item1">
                <label>Tipe Driver</label>
                <select className="form-control" 
                id="tipe_driver" 
                name="tipe-driver"
                onChange={(event) => onFilterCarDriverType(event)}>
                  <option>Pilih Tipe Driver</option>
                  <option value="dengan_sopir">Dengan Sopir</option>
                  <option value="tanpa_sopir">Tanpa Sopir (Lepas Kunci)</option>
                </select>
              </div>
              <div className="col-md-2 px-2 py-4" id="item2">
                <label>Tanggal</label>
                <input className="form-control" 
                id="tanggal_booking" 
                type="date" name="tipe-driver" 
                placeholder="Pilih Tanggal" 
                onChange={(event) => onFilterCarBookingDateParam(event)}/>
              </div>
              <div className="col-md-2 px-2 py-4" id="item3">
                <label>
                  Waktu Jemput/Ambil
                </label>
                <select className="form-control" 
                id="waktu_booking" 
                type="time" 
                onChange={(event) => onFilterCarBookingTimeParam(event)}>
                            <option>Pilih waktu</option>
                            <option value="08:00">08.00</option>
                            <option value="09:00">09.00</option>
                            <option value="10:00">10.00</option>
                            <option value="11:00">11.00</option>
                            <option value="12:00">12.00</option>
                </select>
              </div>
              <div className="col-md-2 px-2 py-4" id="item4">
                <label>
                  Jumlah Penumpang (optional)
                </label>
                <input className="form-control" 
                id="total_penumpang" 
                type="number" 
                name="jumlah-penumpang" 
                placeholder="Jumlah Penumpang" 
                onChange={(event) => onFilterCarCapacityParam(event)}
                />
              </div>
              <div className="col-md-2 px-2 py-4 d-flex justify-content-start" id="item5">
                <button id="load-btn" type="submit" className="btn btn-success m-1 mt-3">Cari Mobil</button>
                <button id="clear-btn" type="submit" className="btn btn-danger m-1 mt-3">Hapus</button>
              </div>
            </div>
          </form>
        <Container>
        <Row>
            { cars.map((car, index) => {
                return <Col>
                <Card key={index} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={car.foto} />
                    <Card.Body>
                        <Card.Title>{car.name}</Card.Title>
                        <b>
                            <p>Rp. {car.price}/hari</p> 
                        </b>
                        <Card.Text>
                            Capacity { car.capacity }
                        </Card.Text>
                        <Card.Text>
                            Driver Type : {car.driverType}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>
                    })}  
            </Row>
            </Container>
        </div>
      </div>
        </>
    );
};

export default MainCar;