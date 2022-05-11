import React, { Component } from 'react';
import data from "./user"; 
import dateFormat, { masks } from "dateformat";
import { GrMapLocation } from "@react-icons/all-files/gr/GrMapLocation";
import parse from 'html-react-parser'


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

function Gogole(exp){ 
	var link = "https://www.google.com/maps/place/" + exp.experience.location
	return <span><a href={link} target="_blank"><GrMapLocation class="loc-icon" color="green"/></a></span>
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
								<Company experience={experience} />						
								<div class="exp" >
									<Experience experience={experience} />
									<Period experience={experience} />
								</div>
								<div>
									<Location experience={experience} />
									<ul>
											{experience.roles.map(function (role, i) {
												return <li key={i}> 
													<p>{parse(role.description)}</p>
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