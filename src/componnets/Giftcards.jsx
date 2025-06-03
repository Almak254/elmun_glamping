import React from "react"

const Giftcards = () => {   
  return (
    <div className="sasa">
      <div className="row">
      <h3 className="text-xl font-bold mb-6">GIVE THE GIFT OF EL-MUN FARM</h3><hr />
      <h4>Giving the gift of EL-mun for a unique and unforgettable experience</h4>
        <div className="col-md-6">

          <h3>GITCARDS</h3>
          <br />
          <p>Claim your gift card online, then invite family and friends to join you at a special location for a memorable shared experience.</p>
          </div>
        <div className="col-md-6">
        <img src="assets/images/GC1.jpeg" height={300} width={300}/><br />
          </div>
      </div><hr />  

      {/* Comment Section */}
      <div className="row" id="E">        
         <h3 id="F">EL-mun Farm</h3>
         <p><i>Escape the rush of urban life with a luxurious retreat surronded b nature-where peace, comfort, and curated experiences help you relax, recharge and reconnect with what trully matters.</i></p>
          <div className="col-md-6">
          <footer className=" text-center py-8" id="G">
            <p></p>
            <p>📍 Visit Us At Any Of Our Various Branches</p>
            <p>📩 Email us at elmunglampimg@gmail.com</p>
            <br />
            <marquee behavior="slide" direction="right"><b>Social Media Platforms Linked Above!</b></marquee>
          </footer>
          </div> 
          <div className="col-md-6"> 
            <img src="assets/images/Logos.jpeg" width={180} height={95} />@elmunglamping
            <br /><br />
            <marquee behavior="slide" direction="left"><b>Like!💓, Comment!💬 And Share🗨</b></marquee>
          </div>
          <div className="text-start py-8">
            <h3>For Reservations</h3>
            <p>📶 254 7700 800 900</p>
            <p>📅 Schedule a Call</p>
          </div>
          <hr />
          <div className="text-center">
            <p>EL-MUN GLAMPING Copyright 2025
              <br />
              <br />
              Privacy Policy | Terms & conditions
            </p>
          </div>
        </div>
      {/* Comment Section End */}
      V
 
    </div>
  )
}

export default Giftcards
