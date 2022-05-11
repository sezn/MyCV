import React, { Component } from 'react';
import data from "./user"; 
import parse from 'html-react-parser'

class Skills extends Component {
	render() {
		return (
            <div class="skills">
                {
                  data.Skills.map((skill) => {
                    return (
                      <div>
                        <div class="sk-title"><h4>{skill.Area}</h4></div>
                        <ul>
                          {
                            skill.SkillSet.map((skillDetail) => {
                              return (
                                  <li>
                                    {parse(skillDetail.Name)}
                                  </li>
                              );
                            })
                          }
                        </ul>
                      </div>
                    );
                  })
                } 
            </div>
        );
    }
} 
export default Skills;