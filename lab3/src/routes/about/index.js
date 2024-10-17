import image from '../../assets/images/aboutImage.png';
function About() {
    return (
        <div className="container" style={{
            color: 'white',
        }}>
            <div className="row">
                <div className="col">
                    <h1>Introducing CyberSafe: Your Ultimate Cybersecurity Solution...</h1>
                    <div className="row">
                        <div className="col-7">
                            <p style={{
                                textAlign: 'justify',
                            }}>
                                In an era where digital threats are evolving rapidly, CyberSafe stands as your first line of defense against cyber attacks. Our comprehensive cybersecurity platform offers robust protection, ensuring your data remains secure and your operations run smoothly.
                                <br />
                                Key Features:
                                <ul>
                                    <li>
                                        Real-Time Threat Detection: CyberSafe continuously monitors your systems for potential threats, using advanced algorithms to identify and neutralize attacks before they can cause harm.
                                    </li>
                                    <li>
                                        User-Friendly Interface: Designed with simplicity in mind, our intuitive dashboard allows you to manage your security settings easily and monitor your network's health in real time.
                                    </li>
                                    <li>
                                        Multi-Layered Security: With features like firewalls, intrusion detection systems, and end-point protection, CyberSafe provides a multi-faceted approach to securing your digital assets.
                                    </li>
                                    <li>
                                        Automated Backups: Never worry about losing critical data again. CyberSafe automatically backs up your files, ensuring you can restore them quickly in case of an emergency.
                                    </li>
                                    <li>
                                        Expert Support: Our dedicated cybersecurity team is available 24/7 to assist you with any concerns or questions, providing peace of mind that you’re never alone in your cybersecurity journey.
                                    </li>
                                </ul>
                                <br />
                                Why Choose CyberSafe?
                                <br />
                                With CyberSafe, you gain more than just a product; you gain a partner in safeguarding your digital world. Our proactive approach not only protects your data but also helps you stay compliant with industry regulations, reducing the risk of costly breaches.
                                Join thousands of satisfied users who have made CyberSafe their trusted cybersecurity solution. Protect your future today!
                            </p>
                        </div>
                        <div className="col-2"></div>
                        <div className="col-3">
                            <img src={image} height='100%' alt="" className="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default About;