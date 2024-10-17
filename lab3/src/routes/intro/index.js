import image1 from '../../assets/images/introImage1.png';
import image2 from '../../assets/images/introImage2.png';
import image3 from '../../assets/images/introImage3.png';
import image4 from '../../assets/images/introImage4.png';


const Intro = () => {
    return (
        <div className="container" style={{
            color: 'white',
        }}>
            <h1>Cyber Security is...</h1>
            <p>Cybersecurity for websites involves protecting online platforms from threats such as hacking, data breaches, and malware. It encompasses various strategies, including encryption, firewalls, and regular software updates, to safeguard sensitive information and ensure the integrity of the site. Effective cybersecurity helps maintain user trust, complies with legal regulations, and prevents financial losses. By implementing robust security measures, website owners can defend against evolving cyber threats and provide a safe browsing experience for their users.</p>
            <div className='d-flex  justify-content-center'>
                <div id="carouselExampleControls" className="carousel slide w-25" data-bs-ride="carousel" >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={image1} className="d-block w-100" />
                        </div>
                        <div className="carousel-item">
                            <img src={image2} className="d-block w-100" />
                        </div>
                        <div className="carousel-item">
                            <img src={image3} className="d-block w-100" />
                        </div>
                        <div className="carousel-item">
                            <img src={image4} className="d-block w-100" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Intro;