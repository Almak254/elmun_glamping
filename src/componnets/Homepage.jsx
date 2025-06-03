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

      <div className="row">
      <h3 className="text-xl font-bold mb-6">MODERN CONDOS</h3><hr />
        <div className="col-md-4">
          <img src="assets/images/HH 1.jpeg"  height={300} width={300}/><br />
          <b>"The Starter"</b><br />
          "Indulge in a mouthwatering starter—flavor-packed,fresh ingredients that’ll excite your taste buds!"<br />
          </div>
        <div className="col-md-4">
        <img src="assets/images/HH 2.jpeg" height={300} width={300}/><br />
          <b>"Stir Fry Combo"</b><br />
          "Savor the bold flavors of our stir-fry—crispy veggies, tender meat, and a savory sauce fusion!"</div>
        <div className="col-md-4">
        <img src="assets/images/HH 3.jpeg"  height={300} width={300}/><br />
          <b>"Stillleto Wrap"</b><br />
          "Experience the exquisite stiletto wrap—crispy, succulent, and bursting with a tantalizing fusion!""<br />
            </div>
      </div><hr />  

      <div className="row">
          <h3 className="text-xl font-bold text-center mb-6">ACCOMODATION SUITES</h3><hr />
          <div className="col-md-4">
            <img src="assets/images/h1.jpeg"  height={300} width={300}/>  
            <h5>Tree House</h5>
            <p>"A cozy, elevated retreat nestled in trees, featuring wooden walls, windows, and a peaceful atmosphere."</p>
            <h6>KES 20,000</h6>
            <b class="badge bg-success">Rent Now!</b>
            </div> 
          <div className="col-md-4">
          <img src="assets/images/h2.jpeg"  height={300} width={300}/>
            <h5>Cottage Tower</h5>
            <p>"Escape to a unique cottage tower getaway—breathtaking views, cozy interiors, and a peaceful retreat experience."</p>
            <h6>KES 20,000</h6>
            <b class="badge bg-success">Rent Now!</b>
          </div>   
          <div className="col-md-4">
          <img src="assets/images/Topple Tower 5.jpeg"  height={300} width={300}/>
            <h5>Clifface Tower</h5>
            <p>"A breathtaking house dramatically perched on a sheer rockface, with panoramic views and stunning architecture."</p>
            <h6>KES 20,000</h6>
            <b class="badge bg-success">Rent Now!</b>
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

      <div className="row" id="A">
        <hr />
        <div className="col-md-4">
          <h3 id="B">2.Sample Project</h3>
          <img src="assets/images/H2.jpeg"  height={300} width={300}/><br />
          </div>
        <div className="col-md-4" id="C">
        This company specializes in crafting custom-built wooden frame homes, offering a unique and personalized approach to creating the perfect getaway. With a focus on blending natural aesthetics and modern design, each home is tailored to meet the specific needs and preferences of the owner. From the initial concept to the final touches, every detail is carefully considered to ensure the home feels like an ideal retreat. The use of high-quality wood not only enhances the beauty of the structure but also ensures durability and comfort. Throughout the building process, detailed reports and images are provided, showcasing progress and highlighting solutions to challenges faced.
        <br /><br /><br />
        <button className="btn btn-outline-success m-4 custom-button">
          Sketch Your Own Dream HOME 📐
         </button>
        </div>
        <div className="col-md-4">
        <img src="assets/images/H2.1.jpeg"  height={180} width={200}/>
        <br /><br />
        <img src="assets/images/H2.2.jpeg"  height={180} width={200}/>
        
         </div>
      </div>


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
    </div>
  );
};

export default HomePage;
