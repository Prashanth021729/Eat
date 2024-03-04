import React from "react"
class UserClass extends React.Component{

    constructor(props){
        super(props)

    }
    render(){
        return(
            <div className="user-card">
                <h1>Hey folks😜!Prashanth Chanagoni Here😎</h1>
                <div className="lst-ele">
                <ul>
                    <li>I am an ambitious Full-Stack Developer with expertise in React, Python, JavaScript, CSS, HTML, and MongoDB.</li>
                    <li>Currently, I am actively engaged in the dynamic development of the Eat Project</li>
                    <li>where I am leveraging my skills to create a seamless and innovative user experience.</li>
                    <li>With a strong foundation in both frontend and backend technologies, I am enthusiastic about contributing my proficiency to a dynamic team and taking on new challenges. I thrive on transforming ideas into tangible solutions, and my dedication to ongoing learning ensures I stay at the forefront of emerging technologies.</li>
                </ul>
                </div>
            </div>

        )
    }
}

export default UserClass;