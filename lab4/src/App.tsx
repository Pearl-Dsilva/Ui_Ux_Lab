import React from 'react';
import logo from './assets/images/logo.svg';
import colors from './assets/images/colors.svg';
import back from './assets/images/back.svg';
import bike from './assets/images/bike.svg';
import bike2 from './assets/images/bike2.svg';
import bus from './assets/images/bus.svg';
import car from './assets/images/car.svg';
import home from './assets/images/home.svg';
import header from './assets/images/header.svg';
import banner from './assets/images/banner.png';
import content_image1 from './assets/images/content_image1.png';
import content_image2 from './assets/images/content_image2.png';
import content_image3 from './assets/images/content_image3.png';
import './App.css';

function App() {
  return (
    <>
      <img src={header} width="100%" />
      <div className=" container-fluid p-3 mb-2">
        <div className="row ">
          <div className="col-10 fw-bold">
            <div style={{ display: 'flex' }}>
              <h1 style={
                {
                  fontFamily: 'Montserrat'
                }
              }>SkateActive</h1>
              <img src={logo} className="App-logo ms-1" alt="logo" />
            </div>

            <p style={
              {
                fontStyle: 'italic',
                fontFamily: 'Pacifico'
              }
            }> "Ride. Live. Thrive."</p>
          </div>

          <div className="col-2 justify-content-end align-self-center p-0">
            <img src={colors} className="App-logo ms-1" alt="logo" />

          </div>

          <div className="row">
            <div className="col-10 align-self-center">
              <p style={
                {
                  textAlign: "justify",
                  fontFamily: "Ranchers",
                  fontStyle: "normal",
                  textJustify: "inter-word",
                }
              }>SkateActive is more than just a brand; it's a vibrant movement that celebrates an active and healthy lifestyle. Specializing in high-quality skateboards, skates, and scooters, SkateActive is designed for thrill-seekers of all ages who crave adventure and freedom. Our products are crafted with precision and style, ensuring that every ride is not just about transportation, but about embracing the joy of movement.</p>
            </div>

            <div className="col-2">
              <div className="row m-1">
                <div className="col-4">
                  <img src={car} />
                </div>
                <div className="col-4">
                  <img src={back} />
                </div>
                <div className="col-4">
                  <img src={bus} />
                </div>
              </div>
              <div className="row m-1">
                <div className="col-4">
                  <img src={bike} />
                </div>
                <div className="col-4">
                  <img src={home} />
                </div>
                <div className="col-4">
                  <img src={bike2} />
                </div>
              </div>
            </div>
          </div>

        </div>


        <div className="row mb-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="col-4 d-flex justify-content-center" style={{ padding: '0 15px' }}>
            <div className="card w-50 border border-black rounded-4" >
              <div className="card-body" style={{ padding: '20px', fontFamily: 'Raleway' }}>
                <h5 className="card-title">Raleway</h5>
                <p className="card-text fs-5">
                  A B C D E F G H I J K L M N O P Q R S T U V W X Y Z <br />
                  a b c d e f g h i j k l m n o p q r s t u v w x y z <br />
                  0 1 2 3 4 5 6 7 8 9
                </p>
              </div>
            </div>
          </div>

          <div className="col-4 d-flex justify-content-center" style={{ padding: '0 15px' }}>
            <div className="card w-50 border border-black rounded-4">
              <div className="card-body" style={{ padding: '20px', fontFamily: 'Montserrat' }}>
                <h5 className="card-title">Montserrat</h5>
                <p className="card-text fs-5">
                  A B C D E F G H I J K L M N O P Q R S T U V W X Y Z <br />
                  a b c d e f g h i j k l m n o p q r s t u v w x y z <br />
                  0 1 2 3 4 5 6 7 8 9
                </p>
              </div>
            </div>
          </div>

          <div className="col-4 d-flex justify-content-center" style={{ padding: '0 15px' }}>
            <div className="card w-50 border border-black rounded-4">
              <div className="card-body" style={{ padding: '20px', fontFamily: 'Pacifico' }}>
                <h5 className="card-title">Pacifico</h5>
                <p className="card-text fs-5">
                  A B C D E F G H I J K L M N O P Q R S T U V W X Y Z <br />
                  a b c d e f g h i j k l m n o p q r s t u v w x y z <br />
                  0 1 2 3 4 5 6 7 8 9
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="row">
            <img src={banner} alt="banner" />
          </div>
          <div className="row">
            <div className="col-4" style={{ overflow: 'hidden' }}>
              <img src={content_image1} alt="content_image1" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
            </div>

            <div className="col-4 p-0" style={{ overflow: 'hidden' }}>
              <img src={content_image2} alt="content_image2" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
            </div>

            <div className="col-4 p-0" style={{ overflow: 'hidden' }}>
              <img src={content_image3} alt="content_image3" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
            </div>

          </div>
        </div>
      </div >
      <img src={header} width="100%" />
    </>
  );
}

export default App;
