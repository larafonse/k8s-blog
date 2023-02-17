import React from "react";
import Card from 'react-bootstrap/Card';

export const About = () => {
    return (<div className="container">
        <Card className="card">
            <h1 className="card-title" id="about">About</h1>
            <div className="row">
                <div className="col-xs-12">
                    <img className="pull-left" id="profile-img" src={process.env.PUBLIC_URL + "/images/profile.jpg"} />
                    <p>Hey, My name is Nicolas, I am a Software Engineer at GUSTO and Tech Fellow Manager at CodePath. I am a Mexican American who was born and raised in Monterey County. My family is originally from Sinaloa, Mexico. My family's roots in Monterey County can be traced back to the 1960’s when my grandparents would work summers in the Salinas Valley fields. In those days minimum wage for agricultural workers was ONLY $1.30</p>
                    <br />
                    <p>During High School, I also worked in the agriculture industry picking broccoli and cauliflower, cleaning grape vines, and strawberry fields. Upon graduation I began working as a Baker at MP Donuts in Greenfield, CA. After two years of working, I began to think about my passions and decided to continue going to school to pursue a degree in Computer Science.</p>
                    <br />
                    <p>Once I knew where I wanted my career to head towards, I joined a Computer Science program at Cal State University of Monterey Bay where I could receive my bachelors in 3 years. While attending school at CSUMB I began teaching Web Development to underrepresented students. This helped me realize that one of my passions is giving back to my community.</p>
                    <br />
                    <p>During the summer of my junior year at college I interned at Gusto. I had the opportunity of having my internship extended due to my excellent work on the project I was working on. I later received a return offer for a  full time position and I am currently working on Gusto’s Developer Experience Team. Looking back at my family’s roots I am proud of where I am today and wouldn’t be here without the path they paved for me.</p>
                    <br />
                    <p>I am also currently working with a nonprofit, CodePath, to help students from underrepresented colleges get into the tech industry. My role at CodePath provides guidance to professors and students leading CodePath’s Android Mobile Development course. </p>
                    <br />
                    <p>My goal is to share my experience and knowledge to help uplift the next generation of Latinos in the Tech Industry</p>
                </div>
            </div>
        </Card>
    </div>
    )
}