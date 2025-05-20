import "./StepsComponent.css";


const StepsComponent = () => {
  return (
     <section className="steps">
        <div className="title">
            <h1>Steps on how to use AXIA</h1>
            <div className="title-underline"></div>
        </div>
        
        <div className="steps-container">
            <div className="vertical-line"></div>
            
            <div className="step step-right">
                <div className="step-circle">1</div>
                <div className="horizontal-line line-right"></div>
                <div className="step-content step-text-right">
                    <div className="step-title">Register</div>
                    <div className="step-description">
                        Create your AXIA account by providing your email, password, and 
                        basic information. This gives you access to the platform as a seller 
                        or buyer.
                    </div>
                </div>
            </div>
            
            <div className="step step-left">
                <div className="step-circle">2</div>
                <div className="horizontal-line line-left"></div>
                <div className="step-content step-text-left">
                    <div className="step-title">Profiling & NIN Verification</div>
                    <div className="step-description">
                        Complete your profile and submit your National Identification 
                        Number (NIN) to verify your identity or your company's legitimacy. 
                        This step builds trust and ensures secure transactions.
                    </div>
                </div>
            </div>
            
            <div className="step step-right">
                <div className="step-circle">3</div>
                <div className="horizontal-line line-right"></div>
                <div className="step-content step-text-right">
                    <div className="step-title">Upload Product</div>
                    <div className="step-description">
                        Once verified, you can upload your scrap materials. Add clear 
                        photos, descriptions, quantities, and pickup locations to attract 
                        competitive bids from verified buyers.
                    </div>
                </div>
            </div>
        </div>
      </section>
  )
}

export default StepsComponent