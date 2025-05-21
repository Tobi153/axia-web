import "./FooterComponent.css";


const FooterComponent = () => {
  return (
    <div className="footer">
        <div className="top">
            <img src=" /src/assets/images/axia.png" alt="" />
            <ul className="menu">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
            <div className="download">
                <h3 className="downloadtext">Download App On:</h3>
                <ul className="download-icons">
                    <li><img src="/src/assets/images/playstore.svg" alt="" /><a href=""> Google <span>PlayStore</span> </a></li>
                    <li><img src="/src/assets/images/appstore.svg" alt="" /><a href=""> Apple <span>AppStore</span></a></li>
                </ul>
            </div>
        </div>
        <div className="horizontal"></div>
        <div className="bottom">
               <div className="copyright">Copyright © 2025 AXIA Inc.  All right reserved.</div>
            <div className="back">
                  <h3>Back to top</h3>
                <a href="#nav"><img src="/src/assets/images/arrow.svg" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default FooterComponent
