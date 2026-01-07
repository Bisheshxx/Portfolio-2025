import HTMLIcon from "../../public/icons/frontend/html.png";
import React from "../../public/icons/frontend/react.png";
import NextJS from "../../public/icons/frontend/nextjs.png";
import Redux from "../../public/icons/frontend/redux.png";
import Zustand from "../../public/icons/frontend/zustand.svg";
import Figma from "../../public/icons/ui-ux/figma.svg";
import Python from "../../public/icons/programming-language/python.svg";
import JavaScript from "../../public/icons/programming-language/javascript.png";
import TypeScript from "../../public/icons/programming-language/typescript.svg";
import CSharp from "../../public/icons/programming-language/csharp.svg";
import NodeJS from "../../public/icons/backend/nodejs.png";
import ExpressJS from "../../public/icons/backend/express.png";
import DotNet from "../../public/icons/backend/dotnet.png";
import FramerMotion from "../../public/icons/web-animation/Frame.png";
import MySQL from "../../public/icons/database/mysql.png";
import MongoDB from "../../public/icons/database/mongo.png";
import PostgreSQL from "../../public/icons/database/postgre.png";
import AWS from "../../public/icons/cloud-deployment/AWS.png";
import Azure from "../../public/icons/cloud-deployment/Azure.png";
import GoogleCloud from "../../public/icons/cloud-deployment//google-cloud.png";
import Docker from "../../public/icons/cloud-deployment/docker-plain.png";
import Nginx from "../../public/icons/cloud-deployment//nginx.png";
import Jest from "../../public/icons/testing/jest.svg";
import Selenium from "../../public/icons/testing/selenium.png";
import Postman from "../../public/icons/testing/postman.png";
import Git from "../../public/icons/version-control/Git.png";
import GitHub from "../../public/icons/version-control/GitHub.png";
import GitLab from "../../public/icons/version-control/GitLab.png";
import CSS from "../../public/icons/styling/CSS3.png";
import Sass from "../../public/icons/styling/Sass.png";
import TailwindCSS from "../../public/icons/styling/tailwind.png";
import MaterialUI from "../../public/icons/styling/material-ui.png";
import Bootstrap from "../../public/icons/styling/Bootstrap.png";
import AntDesign from "../../public/icons/styling/ant-design.png";
import ShadcnUI from "../../public/icons/styling/shadcn.webp";
import ReactNative from "../../public/icons/mobile/react.png";
type name =
  | "HTML"
  | "React"
  | "NextJS"
  | "Redux"
  | "Zustand"
  | "Figma"
  | "Python"
  | "JavaScript"
  | "TypeScript"
  | "C#"
  | "NodeJS"
  | "ExpressJS"
  | "DotNet"
  | "Framer Motion"
  | "MySQL"
  | "MongoDB"
  | "PostgreSQL"
  | "AWS"
  | "Azure"
  | "Google Cloud"
  | "Docker"
  | "Nginx"
  | "Jest"
  | "Selenium"
  | "Postman"
  | "Git"
  | "GitHub"
  | "GitLab"
  | "CSS"
  | "Sass"
  | "TailwindCSS"
  | "Material-UI"
  | "Bootstrap"
  | "Ant-Design"
  | "Shadcn/UI"
  | "React Native";

export function getIcon(name: name) {
  switch (name) {
    case "HTML":
      return HTMLIcon;
    case "React":
      return React;
    case "NextJS":
      return NextJS;
    case "Redux":
      return Redux;
    case "Zustand":
      return Zustand;
    case "Figma":
      return Figma;
    case "Python":
      return Python;
    case "JavaScript":
      return JavaScript;
    case "TypeScript":
      return TypeScript;
    case "C#":
      return CSharp;
    case "NodeJS":
      return NodeJS;
    case "ExpressJS":
      return ExpressJS;
    case "DotNet":
      return DotNet;
    case "Framer Motion":
      return FramerMotion;
    case "MySQL":
      return MySQL;
    case "MongoDB":
      return MongoDB;
    case "PostgreSQL":
      return PostgreSQL;
    case "AWS":
      return AWS;
    case "Azure":
      return Azure;
    case "Google Cloud":
      return GoogleCloud;
    case "Docker":
      return Docker;
    case "Nginx":
      return Nginx;
    case "Jest":
      return Jest;
    case "Selenium":
      return Selenium;
    case "Postman":
      return Postman;
    case "Git":
      return Git;
    case "GitHub":
      return GitHub;
    case "GitLab":
      return GitLab;
    case "CSS":
      return CSS;
    case "Sass":
      return Sass;
    case "TailwindCSS":
      return TailwindCSS;
    case "Material-UI":
      return MaterialUI;
    case "Bootstrap":
      return Bootstrap;
    case "Ant-Design":
      return AntDesign;
    case "Shadcn/UI":
      return ShadcnUI;
    case "React Native":
      return React;
    default:
      return null;
  }
}
