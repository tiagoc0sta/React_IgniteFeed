import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(){
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src='https://github.com/tiagoc0sta.png'/>
          <div className={styles.authorInfo}>
            <strong>Tiago Costa</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time 
          title="21-Ago at 08:13" 
          dateTime="2022-08-22 08:13:30">Published 1 hour ago
        </time>

      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉{' '} <a href="">jane.design/doctorcare</a></p>

        <p>
          <a href="">#novoprojeto </a>{' '}
          <a href="">#nlw </a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>  

      <form className={styles.commentForm}>
        <strong>Drop a feedback</strong>

        <textarea 
          placeholder="Drop a feedback"
        />

        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment/>
      </div>    
    </article>
  )
}