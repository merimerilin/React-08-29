import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Work from './pages/work';
import Hobbies from './pages/hobbies';
import Courses from './pages/courses';


function App() {
  return (
    <div className="App">
     <img className="main-picture" src="https://loom24.ee/beta/uploads/ff250aea9ebeb08bc284f883af8f0e0e472ea1bf-image1024x1024.jpg" alt="" />
   
   <div className="navigation-pictures">
      <Link to="work">
      <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/09/29/15/hp.jpg?quality=75&width=982&height=726&auto=webp" alt="" />
      </Link>
      <Link to="hobbies">
      <img  src="https://www.themarysue.com/wp-content/uploads/2015/09/Hermione-2.jpg" alt="" />
      </Link>
      <Link to="courses">
      <img src="https://fantasytopics.com/wp-content/uploads/2021/11/Ron-Weasleys-Wand.jpg.webp" alt="" />
      </Link>

   </div>

   <Routes>
          <Route path="work" element={ <Work/> } />
          <Route path="hobbies" element={ <Hobbies/> } />
          <Route path="courses" element={ <Courses/> } />
        </Routes>
    </div>
    );
    }


export default App;