import React from 'react';
import Header from '../components/Header';
import MainCarousel from '../components/MainCarousel';
import Footer from '../components/Footer';
import ImageBlock from '../components/ImageBlock';
import {  faGlobeEurope,faShip,faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function Homepage() {

	return (
	  	 	<div>
			<Header />
			<MainCarousel/> 
			<div className="container">
				<ImageBlock className="size-33"  /*al doilea className este setat aici pentru index*/
				            emoticon={faGlobeEurope}
				            titlu="Luxuries Yacht"
				            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in varius mi. Cras at lacus eu sapien efficitur maximus eget vitae risus. Quisque in fermentum diam. Nam eu urna nibh."
							//imgSrc="images/boat1.jpg "
							/>
				<ImageBlock className="size-33"
							emoticon={faShip}
				            titlu="30 Years of Experience"
				            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in varius mi. Cras at lacus eu sapien efficitur maximus eget vitae risus. Quisque in fermentum diam. Nam eu urna nibh."
							//imgSrc="images/boat1.jpg "
							/>
				<ImageBlock className="size-33"
							emoticon={faUser}
				            titlu="Good Captains"
				            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in varius mi. Cras at lacus eu sapien efficitur maximus eget vitae risus. Quisque in fermentum diam. Nam eu urna nibh."
							//imgSrc="images/boat1.jpg "
							/>
				

			</div>
			<div className="bottom-container">
				<div className="overlay"/>
				<img className="image" src="images/boat4.jpg " alt=""></img>
				<p className="title">Book a yacht</p>
				<p className="description">Book your dream vacantion</p>
				<div className="button"><Link className="buton"  to="/add-booking">
					Rezerva aici
					</Link>
				</div>
			</div>

		
			
            




            <Footer />
	  </div>
  );
}

export default Homepage;
