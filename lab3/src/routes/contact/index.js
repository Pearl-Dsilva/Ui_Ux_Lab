import FileUpload from "./dropbox";

function Contact() {
    return (
        <div className="container" style={{
            color: 'white',
        }}>
            <div className="row mt-3">
                <div className="col-6">
                    <h1>Contact Us</h1>
                    <div >
                        <form>
                            <div className="mb-3">
                                <label for="exampleInput" className="form-label">Name</label>
                                <input type="email" className="form-control" id="exampleInput" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputMobile1" className="form-label">Mobile</label>
                                <input type="mobile" className="form-control" id="exampleInputMobile1" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Sign me up for the monthly newsletter</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="col-6 d-flex flex-column justify-content-center">
                    <FileUpload />
                </div>
            </div>
        </div>
    );
}
export default Contact;