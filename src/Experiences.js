import React, { Component } from 'react';
import data from "./data"; 
import dateFormat, { masks } from "dateformat";


function Company(exp){
	if(exp.experience.companyName.trim() == '')
		return <span className="Period" class="dates">{exp.experience.companyName}</span>

	return <span class="logo"><a href={exp.experience.url} target="_blank" >
				<img src={exp.experience.logo} alt={exp.experience.companyName} height={32}/></a></span>
}

function Period(exp) {
	if(exp.experience.endDate.trim() == '')
		return <span className="Period" class="dates">{exp.experience.startDate}</span>
  return <span className="Period" class="dates">{exp.experience.startDate} > {exp.experience.endDate}</span>
}

class Experiences extends Component {
	render() {
		return (
            <div class="experiences">
                {
					data.Experiences.map((experience, i) => {
						return (
							<div class="experience card" id={i} key={i}>
								<div>
								<div class="exp" >
									<Company experience={experience} />
									<span class="role"><b>{experience.job}</b></span>
									<Period experience={experience} />

								</div>
									<div>
									<span>{experience.location}</span>

									<ul>
											{experience.roles.map(function (role, i) {
												return <li key={i}> 
													<p>{role.description}</p>
												</li>
											})}
									</ul>
									</div>
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