import React, { Component } from 'react';
import data from "./data"; 
import dateFormat, { masks } from "dateformat";
import { GrMapLocation } from "@react-icons/all-files/gr/GrMapLocation";

function Gogole(prop){ 
	var lin = "https://www.google.com/maps/place/" + prop.experience.location
  return <span><a href={lin} target="_blank"><GrMapLocation class="loc-icon" /></a></span>
}

function Company(exp){
	return <span class="logo"><a href={exp.experience.url} target="_blank">
				<img src={exp.experience.logo} alt={exp.experience.companyName} height={32}/></a></span>
}

function Period(exp) {
	if(exp.experience.endDate.trim() == '')
		return <span className="Period" class="dates">{exp.experience.startDate}</span>
  return <span className="Period" class="dates">{exp.experience.startDate} > {exp.experience.endDate}</span>
}

function Experience(exp){
	if(exp.experience.type.trim() == '')
		return <span class="role"><b>{exp.experience.job}</b></span>

	return <span class="role"><b>{exp.experience.job}</b> <span class="normal">{exp.experience.type}</span></span>
}

function Location(exp) {
	return <div class="area">
				<Gogole experience={exp.experience}/>
				
				<span class="loc">{exp.experience.location}</span>
			</div>
}

class Experiences extends Component {
	render() {
		return (
            <div class="experiences">
				<div class="section-header"><h4>Experiences</h4></div>

                {
					data.Experiences.map((experience, i) => {
						return (
							<div class="experience card" id={i} key={i}>							
								<div class="exp" >
									<Company experience={experience} />
									<Experience experience={experience} />
									<Period experience={experience} />
								</div>
								<div>
								<Location experience={experience} />
								<ul>
										{experience.roles.map(function (role, i) {
											return <li key={i}> 
												<p>{role.description}</p>
											</li>
										})}
								</ul>
								</div>							
							</div>
						);
					})
				}
            </div>
        );
    }
} 
export default Experiences;