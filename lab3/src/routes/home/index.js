import homeImage1 from '../../assets/images/homeImage1.gif';
import homeImage2 from '../../assets/images/homeImage2.gif';
function Home() {
    return (
        <div className="container">
            <h1 style={{
                color: 'white',
            }}>The Future of Cyber Security is here...</h1>
            <p style={{
                color: 'white',
            }}>Welcome to CyberSafe, your trusted partner in cybersecurity. We provide comprehensive tools and resources to help you safeguard your organization from cyber threats.</p>
            <div className='row' >
                <div className='col-12  col-lg-4'>
                    <img src={homeImage1} width='100%' alt="" className="" />
                </div>
                <div className='col-12  col-lg-4'>
                    <img src={homeImage2} width='100%' alt="" className="" />
                </div>
                <div className='col-12  col-lg-4'>
                    <img src={homeImage1} width='100%' alt="" className="" />
                </div>
            </div>
        </div>
    )
}
export default Home;