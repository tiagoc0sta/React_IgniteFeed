import { Header } from './components/Header';
import {Post} from './Post';

import './global.css';

export function App() {
  

  return (
    <div>

      <Header/>

      <Post 
        author="Tiago Costa" 
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla repellat beatae nemo voluptate! Aperiam temporibus iusto cupiditate voluptate quod esse porro culpa, dignissimos explicabo repellendus nemo maiores illo vero. Incidunt!"
        />      
    </div>
    
  )
}


