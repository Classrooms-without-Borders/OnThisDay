import React from "react";
import '../styling/ThankYou.css'

class ThankYou extends React.Component {
	render() {
		return (
            <div id="successContainer">
                <h1 id="successHeading">THANK YOU FOR <br></br>YOUR SUBMISSION!</h1>
                <p>Once your submission is reviewed and verified, it will appear in the gallery. In the meantime, feel free to explore the existing submissions made by students like you from all across the nation.</p>
                <a href="./gallery"><button>Explore the Gallery</button></a>
            </div>
        )
    }
}
export default ThankYou;