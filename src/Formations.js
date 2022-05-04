import React, { Component } from 'react';
import data from "./data"; 
import Experiences from './Experiences';
import { GrMapLocation } from "@react-icons/all-files/gr/GrMapLocation";

function School(props){
	return <span class="logo"><a href={props.school.url} target="_blank" >
				<img src={props.school.logo} alt={props.school.name} height={32} max-width={128}/></a></span>
}

class Formations extends Component {
	render() {
		return (
            <div class="studies">
            	<div class="section-header"><h4>Formations</h4></div>
                {

        

					data.Schools.map((school, i) => {
						return (
							<div class="study card" id={i} key={i}>
							<div class="school">
								<School school={school} />
								<b>{school.study}</b>
							</div>
							<div ><GrMapLocation class="loc-icon" />{school.location} </div>
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