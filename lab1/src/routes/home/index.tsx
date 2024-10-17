import image from '../../assets/images/debitCard.png';
import image1 from '../../assets/images/PayAndTransfer.png';

function Home() {
    return (
        <div className="container-fluid mt-2 bg-white" style={{ borderRadius: '15px 15px 0px 0px', flex: 1 }}>
            <div className="container p-4" style={{ color: '#003366' }}>
                <h3>My Accounts</h3>
                <div className="row g-3 m-1" style={{ border: "2px solid #d2d2d2", borderRadius: 15, boxShadow: "0 4px 8px #d2d2d2" }}>
                    <div className="col-4">
                        <img src={image} width="100%" />
                    </div>
                    <div className="col-4">
                        <img src={image} width="100%" />
                    </div>
                    <div className="col-4">
                        <img src={image} width="100%" />
                    </div>
                </div>
            </div>
            <div className="container p-4" style={{ color: '#003366' }}>
                <h3>Pay & Transfer</h3>
                <div className="row g-3 m-1 p-1" style={{ border: "2px solid #d2d2d2", borderRadius: 15, boxShadow: "0 4px 8px #d2d2d2" }}>
                    <div className="col-12">
                        <img src={image1} width="100%" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;