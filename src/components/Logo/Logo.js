import React from "react";
import Tilt from "react-tilt";
import AI from "./AI.png";
import "./Logo.css";

const Logo = () => {
	return (
		<div className="ma4 mt0">
			<Tilt
				className="Tilt"
				options={{ max: 45 }}
				style={{ height: 150, width: 150 }}
			>
				<div className="Tilt-inner pa3">
					<img style={{ paddingTop: "5px" }} alt="logo" src={AI} />
				</div>
			</Tilt>
		</div>
	);
};

export default Logo;
