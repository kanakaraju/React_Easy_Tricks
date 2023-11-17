import React from "react";
import { Link } from 'react-router-dom';

//create header and include app.js file
const Header = () => {
	return (
		<div className="ui fixed menu">
			<div className="ui container center">
				<h2>React Hooks</h2>
			</div>
			<div className="ui container left">
				<p><Link to="/"><button className='nav button'>Home</button>
          		</Link></p>
				<p>
          		<Link to="/hooks"><button className='nav button'>Hooks List</button>
          		</Link></p>
			</div>
		</div>
	);
};

export default Header;