import "./About.scss";
import React from 'react'
import { InfoBox1, InfoBox2, InfoBox3 } from "../InfoBox/InfoBox";
import { ABOUT_IMAGES } from "../Gallery/Galleryabout";

function About() {
  return (
    <div className="about">
      <div id="about_id" className="spacer"></div>
      <h1 className="about_title">ABOUT US</h1>
      <InfoBox2
        image={ABOUT_IMAGES.whoWeAre}
        heading="Who We Are"
        info="From a small hub with a few members, JIIT OPTICA has grown into a reputable community with remarkable outreach. Thanks to our dedicated volunteers and core team, we’ve evolved from following footsteps to paving our own path—through technical workshops, seminars, and our flagship event JSCOP. With 1k+ Instagram followers and posts reaching 15k+ views, our digital presence is stronger than ever. Even during the pandemic, we stood out as the only hub to host an offline event with massive participation. This journey of growth and impact is our legacy, and we’re delighted to have you with us!"
      />
      <InfoBox1
        image={ABOUT_IMAGES.ourCommunity}
        heading="Our Community"
        info="JIIT OPTICA, the institute's only internationally recognised scientific body offers a forum for students to discover new worlds outside of the academic curriculum and organises workshops, annual festivals, national conferences, alumni gatherings, and educational visits to reputable research and development institutions. In order to inspire young minds, the club also hosts lectures by illustrious scholar and researchers from a variety of subjects.  " />
      <InfoBox2
        image={ABOUT_IMAGES.lifeAsMember}
        heading="Life as a Member"
        info="Students actively participate in a variety of competitions in this organisation, displaying originality, great inventiveness, and dedication to their goals. Additionally, these activities aid students in developing their communication and presentation skills, which are crucial in today's society.  Optica offers a very powerful platform for the overall growth of students and makes an effort to raise the pupils' academic standards, along with focusing on the development of their working capabilities.  " />
      <InfoBox1
        image={ABOUT_IMAGES.unique}
        heading="What Makes Us Unique"
        info="In the past we've conducted a plethora of workshops, while our main attraction stays at the society's annually conducted JSCOP, it won't be an exaggeration to say that the rest of our events stand par the quality.
        Through the mentorship provided by our core team, we strive to provide a real world work environment to our members to enrich their experiences.
        All of the departments of our society display, analyse, and improve upon the student's potential while the audience which partakes in our activities has their brains propelled with geeky information about recent scientific and technological facts. " />
    </div>
  )
}

export default About