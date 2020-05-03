import React from "react";

import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

import "./home.styles.scss";
import CustomButton from "../../ui/button/custom-button.component";

const Home = () => {
  return (
    <>
      <section className="home-content">
        <div className="home-content__container">
          <div className="heading">
            <h1 className="heading__primary">Hello World,</h1>
            <h2 className="heading__presentation">I'm Deyvison!</h2>
            <p className="heading__text">
              Since 2015 I have been developing web applications and in this
              meantime, I have had the opportunity of taking significant
              experience in creating and adjusting systems to follow the
              business changes and user needs. <br/>I like to always keep in mind the
              importance of all building project phases, they are all important,
              even the smaller of then, to deliver a good product to the final
              user.<br/>I'm a developer who cares about things done right, good
              practices, smart code solutions and this kind of stuff that makes
              every developer happy.
            </p>
          </div>
          <div className="in-touch">
            <CustomButton type={'link'} url={'mailto:test@gmail.com'} >
              <FaEnvelope size={24} />
              <span className='link-text'>Drop me a line</span>
            </CustomButton>
            <CustomButton type={'link'} url={'https://www.linkedin.com/in/deyvison-ramos/'} >
              <FaLinkedin size={24} />
              <span className="link-text">Link it up!</span>
            </CustomButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
