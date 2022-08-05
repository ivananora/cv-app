import React, { Component } from 'react';
import uniqid from 'uniqid';
import Skill from './Skill';

class Skills extends Component {
  constructor() {
    super();

    this.state = {
      isEditing: false,
      skills: [
        { skill: 'Relevant Skill', id: uniqid() },
        { skill: 'Relevant Skill', id: uniqid() },
        { skill: 'Relevant Skill', id: uniqid() },
        { skill: 'Relevant Skill', id: uniqid() },
        { skill: 'Relevant Skill', id: uniqid() },
        { skill: 'Relevant Skill', id: uniqid() },
        { skill: 'Relevant Skill', id: uniqid() },
        { skill: 'Relevant Skill', id: uniqid() },
        { skill: 'Relevant Skill', id: uniqid() },
        { skill: 'Relevant Skill', id: uniqid() },
      ]
    }
  }

  handleChange = (e, index) => {
    const list = [...this.state.skills]
    list[index][e.target.name] = e.target.value;
    this.setState({
      skills: [...list]
    })
  }

  addSkill = (e) => {
    e.preventDefault();
    this.setState({
      skills: [...this.state.skills, { skill: '' }]
    })
  }

  deleteSkill = (index) => {
    const list = [...this.state.skills]
    list.splice(index, 1);
    this.setState({
      skills: [...list]
    })
  }
  
  editSkills = () => {
    this.setState({
      isEditing: true
    })
  }

  closeSkillsEdit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.setState({
      isEditing: false
    })
  }

  render() {
    const { isEditing, skills } = this.state;

    return (
      <div className='section' onClick={this.editSkills}>
        <div className={ isEditing ? "edit" : "close" }>
          {skills.map((singleSkill, index) => {
            return(
              <form onSubmit={this.addSkill} key={index}>
                {index === 0 && <button onClick={this.closeSkillsEdit}>Close</button>}
                <div>
                  <input
                    onChange={(e) => this.handleChange(e, index)}
                    value={singleSkill.skill}
                    name={`skill ${index}`}
                    id={index}
                  />
                  {skills.length > 1 && <button type='button' onClick={() => this.deleteSkill(index)}>Remove</button>}
                  {skills.length - 1 === index && <button type='submit'>Add Skill</button>}              
                </div>
              </form>
            )
          })}
        </div>
        <h3>SKILLS</h3>
        <Skill skills={skills} />
      </div>
    )
  }
}

export default Skills;