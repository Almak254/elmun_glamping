import React from "react";
import { useNavigate } from 'react-router-dom';



const HomePage = () => {
   
    const navigate = useNavigate();

    const signup = () => {
        navigate('/signup')
    }
    const Login = () => {
        navigate('/login')
    }
    
  return (
    <div className="sasa">
        {/* BUTTONS */}
        <div className="">
            <button className="btn btn-outline-success m-4 custom-button" onClick={signup}>Sign Up</button>
            <button className="btn btn-outline-success m-4" onClick={Login}>Login</button>
           
            
        </div>
    
        {/* <!-- carousel starts here --> */}
      <section class="row">
        <div class="col-md-12">
            <div class="carousel slide" data-bs-ride="carousel" id="mycarousel">
                {/* <!-- carousel inner starts here --> */}
                 <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="" alt="" class="d-block w-100"></img>
                    </div>
                    <div class="carousel-item">
                        <img src="assets/images/elmun 2.1" alt="" class="d-block w-100"
                        ></img>
                    </div>
                   <div class="carousel-item">
                    <img src="/assets/images/elmun 2.2" alt="" class="d-block w-100"></img>
                   </div> 
                 </div>
                 {/* <!-- carousel inner ends here -->
                  <!--carousel controls starts here  --> */}
                  <a href="#mycarousel" class="carousel-control-prev" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon bg-danger"></span>
                  </a>
                  <a href="#mycarousel" class="carousel-control-next" data-bs-slide="next">
                    <span class="carousel-control-next-icon bg-danger"></span>
                  </a>
                 
            </div>
        </div>
      </section>
        {/* <!e--carousl controls ends here  --> */}

        

      <div className="row">
      <h3 className="text-xl font-bold mb-6">🥂COMPLIMENTS🍽</h3><hr />
        <div className="col-md-4">
          <img src="assets/images/O.D 1.jpeg"  height={300} width={300}/><br />
          <b>"The Starter"</b><br />
          "Indulge in a mouthwatering starter—flavor-packed,fresh ingredients that’ll excite your taste buds!"<br />
          </div>
        <div className="col-md-4">
        <img src="assets/images/O.D 2.jpeg" height={300} width={300}/><br />
          <b>"Stir Fry Combo"</b><br />
          "Savor the bold flavors of our stir-fry—crispy veggies, tender meat, and a savory sauce fusion!"</div>
        <div className="col-md-4">
        <img src="assets/images/O.D 3.jpeg"  height={300} width={300}/><br />
          <b>"Stillleto Wrap"</b><br />
          "Experience the exquisite stiletto wrap—crispy, succulent, and bursting with a tantalizing fusion!""<br />
            </div>
      </div><hr />  
      <div className="row">
          <h3 className="text-xl font-bold text-center mb-6">ACCOMODATION SUITES</h3><hr />
          <div className="col-md-3">
            <img src="assets/images/Topple Tower 6.jpeg"  height={430} width={285}/>  
            <h5>Tree House</h5>
            <p>"A cozy, elevated retreat nestled in trees, featuring wooden walls, windows, and a peaceful atmosphere."</p></div> 
          <div className="col-md-3">
          <img src="assets/images/Topple Tower 5.jpeg"  height={410} width={285}/>
            <h5>Clifface Tower</h5>
            <p>"A breathtaking house dramatically perched on a sheer rockface, with panoramic views and stunning architecture."</p>
          </div>
          <div className="col-md-3">
          <img src="assets/images/Cottage lookout tower 3.jpeg"  height={430} width={285}/>
            <h5>Cottage Tower</h5>
            <p>"Escape to a unique cottage tower getaway—breathtaking views, cozy interiors, and a peaceful retreat experience."</p>
          </div>
          <div className="col-md-3">
          <img src="assets/images/Tower Mania 4.jpeg"  height={410} width={285}/>
            <h5>Leaf Fall Tower</h5>
            <p>"A charming house nestled in the heart of an autumn forest, surrounded by vibrant, falling leaves."</p>
          </div>     
      </div><hr />

      <div className="row" id="A">
        <h2 className="text-1xl font-bold mb-6" >CUSTOMBUILD 🔨 <br />
        YOUR OWN DREAM HOUSE</h2><hr />
        <div className="col-md-4">
          <h3 id="B">1.Sample Project</h3>
          <img src="assets/images/house 1.jpeg"  height={300} width={300}/><br />
          </div>
        <div className="col-md-4" id="C">
        The company specializes in crafting custom-built getaway homes, allowing you to design a space that reflects your personal vision. From the initial concept to the final touches, every aspect of the home is tailored to your exact desires. They offer detailed reports, including images, that outline the entire process—highlighting the challenges faced and the innovative solutions found along the way. With a strong focus on personalization, each home is unique, built specifically to cater to your needs and preferences. Whether it’s the layout, materials, or design elements, every detail is custom-made to create a DREAM just for YOU.
        <br /><br /><br />
        <button className="btn btn-outline-success m-4 custom-button">
          Sketch Your Own Dream HOME 📐
         </button>
        </div>
        <div className="col-md-4">
        <img src="assets/images/house 1.1.jpeg"  height={180} width={200}/>
        <br /><br />
        <img src="assets/images/house 1.2.jpeg"  height={180} width={200}/>
        
         </div>
      </div>
      <br />


      {/* Contact Section */}
      <div className="row">
      <h3 id="E">For More Information About Us!</h3>
          <div className="col-md-6">
          <footer className=" text-center py-8" id="F">
          <p></p>
          <p>📍 Visit Us At Any Of Our Various Branches</p>
          <p>📩 Email us at elmunglampimg@gmail.com</p>
          <br /><br />
          <marquee behavior="slide" direction="right"><b>Social Media Platforms Linked Above!</b></marquee>
          </footer>
            </div> 
          <div className="col-md-6"> 
           
            <img src="assets/images/Logos.jpeg" width={180} height={105} />@elmunglamping
            <br /><br />
            <marquee behavior="slide" direction="left"><b>Like!💓, Comment!💬 And Share🗨</b></marquee>
          </div>
      </div>
    </div>
  );
};

export default HomePage;
