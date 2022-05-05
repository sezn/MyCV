import React, { Component } from 'react';
import data from "./data"; 
import Experiences from './Experiences';
import { GrMapLocation } from "@react-icons/all-files/gr/GrMapLocation";

function School(props){
	return <span class="logo-sc"><a href={props.school.url} target="_blank" >
				<img src={props.school.logo} alt={props.school.name} height={32} max-width={128}/></a></span>
}

function Gogole(prop){ 
	var link = "https://www.google.com/maps/place/" + prop.school.location
	return <span><a href={link} target="_blank"><GrMapLocation class="loc-icon" /></a></span>
}

function Location(prop) {
	return <div class="area">
				<Gogole school={prop.school}/>			
				<span class="loc">{prop.school.location}</span>
			</div>
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
								<b>{school.study}</b>
								<School school={school} />
							</div>
							<div ><Location school={school} /></div>
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