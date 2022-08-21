import { Header } from './components/Header';
import {Post} from './components/Post';
import {Sidebar} from './components/Sidebar';

import styles from './App.module.css';

import './global.css';


export function App() {
  

  return (
    <div>

      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author="Tiago Costa" 
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla repellat beatae nemo voluptate! Aperiam temporibus iusto cupiditate voluptate quod esse porro culpa, dignissimos explicabo repellendus nemo maiores illo vero. Incidunt!"
          />   

          <Post 
          author="TFC" 
          content="Nulla repellat beatae nemo voluptate! Aperiam temporibus iusto cupiditate voluptate quod esse porro culpa, dignissimos explicabo repellendus nemo maiores illo vero. Incidunt!"
          />                            
        </main>
      </div>
    </div>
    
  )
}


