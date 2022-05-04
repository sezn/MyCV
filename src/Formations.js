import React, { Component } from 'react';
import data from "./data"; 
import Experiences from './Experiences';


class Formations extends Component {
	render() {
		return (
            <div class="studies">
            	<div class="section-header"><h4>Formations</h4></div>
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