import Main from '../pages/Main.js';
import About from '../pages/About.js';
import Position from '../pages/Position.js';
import Data from '../pages/Data.js';
import Notice from '../pages/Notice.js';
import Letter from '../pages/Letter.js';
import Service from '../pages/Service.js';


const navpass = [
   {
    path:'/',
    component:Main
    },
    {
    path:'/About',
    component:About
    },
   {
    path:'/Position/*',
    component:Position
   },
   {
    path:'/Data/*',
    component:Data
   },
   {
    path:'/Notice',
    component:Notice
   },
   {
    path:'/Letter',
    component:Letter
   },
   {
    path:'/Service',
    component:Service
   },
  
 ];
 
 export default navpass;