import React from "react"

const Journal= () => {   
  return (
    <div className="sasa">

      <div className="row">
      <h3 className="text-xl font-bold mb-6">JOURNAL</h3><hr />
      <h4>Discover the enchanting world of EL-mun farm through our journal which gives insights on our farm adn some of the experiences awaiting our guests</h4>
        <div className="col-md-4">
          <img src="assets/images/HH 1.jpeg"  height={300} width={300}/><br />
          <p>During a getaway, the serene environment surrounds you with stillness, allowing peace, quiet, and nature’s gentle whispers to calm your mind completely.
          </p>
          </div>
        <div className="col-md-4">
          <img src="assets/images/HH 2.jpeg" height={300} width={300}/><br />
          <p>In a peaceful getaway, the serene surroundings foster open communication, helping couples calmly reflect, reconnect, and work through marital conflicts with clarity.
          </p>
      </div>
      <hr />  

      <div className="row">
        <hr />
        <div className="col-md-6">
          <img src="assets/images/HH 1.jpeg"  height={300} width={300}/><br />
          <p>A serene getaway offers the perfect setting to unplug, share meaningful moments, and deeply reconnect with friends and family away from daily distractions.
          </p>
          </div>
          <div className="col-md-6">
            <img src="assets/images/HH 2.jpeg" height={300} width={300}/><br />
            <p>A serene getaway lets you unplug from technology, detoxify your mind, and reconnect with nature, fostering clarity, balance, and renewed appreciation for life.
            </p>
          </div>
        </div>
      <hr />  
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
export default Journal

