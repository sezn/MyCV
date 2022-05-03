import React, { Component } from 'react';
import data from "./data"; 

class Formations extends Component {
	render() {
		return (
            <div class="studies">
                {

        

					data.Schools.map((school, i) => {
						return (
							<div class="study card" id={i} key={i}>						
							<b>{school.study}</b>
							<br/>
							{school.date}
							</div>
						);
					})
				}
            </div>
        );
    }
} 
export default Formations;