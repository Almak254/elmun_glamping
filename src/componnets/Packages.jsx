import React from 'react'

const Packages = () => {
  return (
    <div>
        <div className="row">
            <div className="col-md-3">
                <img src="assets/images/P1.jpeg" height={300} width={300}/>
            </div>
            <div className="col-md-3">
                <h3>01</h3>
                <h3>VIP Exclusive Package</h3>
                <p>Indulge in a VIP getaway experience where every detail is crafted for unmatched luxury and exclusivity. Enjoy flawless service, gourmet dining, and personalized packages—all designed to exceed your expectations without compromise. Your elite escape awaits.
                </p>
            </div>
            <div className="col-md-3">
                <img src="assets/images/P2.jpeg" height={300} width={300}/>
            </div>
            <div className="col-md-3">
                <h3>02</h3>
                <h3>Proposal Package</h3>
                <p>Escape to our secluded cliffside resort, where ocean sunsets, candlelit dinners, and starry skies create the perfect proposal paradise.
                </p>
            </div>
            </div>
            <br />
            <hr />
            <br />


        <div className="row">
            <div className="col-md-3">
                <h3>03</h3>
                 <h3>Couples Package</h3>
                 <p>Escape together on a dreamy couples getaway designed just for you. Experience intimate moments, luxurious comfort, and unforgettable memories. We promise your hearts will be full and your satisfaction absolutely guaranteed—love awaits your perfect escape.
                </p>
            </div>
            <div className="col-md-3">
                <img src="assets/images/P3.jpeg" height={300} width={300}/>
            </div>
            <div className="col-md-3">
                <h3>04</h3>
                <h3>Birthday Party Package</h3>
                <p>Celebrate your birthday in a serene, quiet getaway surrounded by nature’s beauty. Enjoy a peaceful atmosphere, personalized service, and unforgettable moments with loved ones—perfect for creating joyful memories in a truly relaxing setting.
                </p>
            </div>
            <div className="col-md-3">
                <img src="assets/images/P4.jpeg" height={300} width={300}/>
            </div>
        </div>

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

        
    </div>
  )
}

export default Packages
