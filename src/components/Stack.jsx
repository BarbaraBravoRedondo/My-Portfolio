import React from 'react';
import '../styles/Diplomas.scss';
import '../styles/Stack.scss';
import wind from '../images/wind.png';
import html from '../images/html.png';
import js from '../images/js.png';
import node from '../images/node.png';
import react from '../images/react.png';
import sass from '../images/sass.png';
import gulp from '../images/gulp.png';
import css from '../images/css.png';
import figma from '../images/figma.png';
import git from '../images/git.png';
import mongo from '../images/mongo.png';
import mysql from '../images/mysql.png';
import slack from '../images/slack.png';
import postman from '../images/postman.png';
import zeplin from '../images/zeplin.png';
import vite from '../images/vite.png';
import BarChart from './BarChart';

function Stack() {
  const techStack = [
    { src: html, name: 'HTML5' },
    { src: css, name: 'CSS3' },
    { src: js, name: 'JavaScript' },
    { src: sass, name: 'Sass' },
    { src: gulp, name: 'Gulp' },
    { src: wind, name: 'Tailwind ' },
    { src: react, name: 'React' },
    { src: vite, name: 'Vite' },
    { src: node, name: 'Node.js' },
    { src: postman, name: 'Postman' },
    { src: mongo, name: 'MongoDB' },
    { src: mysql, name: 'MySQL' },
    { src: git, name: 'Git' },
    { src: figma, name: 'Figma' },
    { src: zeplin, name: 'Zeplin' },
    { src: slack, name: 'Slack' },
  ];

  return (
    <div className='knowledges'>
      <h2 className="title">STACK:</h2>
      <div className="icon-box">
        {techStack.map((tech, index) => (
          <div className="icon-container" key={index}>
            <img className="i" src={tech.src} alt={tech.name} />
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}{' '}
 
      </div>       <BarChart />
    </div>
  );
}

export default Stack;
