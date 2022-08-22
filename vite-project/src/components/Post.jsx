import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props){
  console.log(props);
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src='https://github.com/tiagoc0sta.png'/>
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
        <Comment/>
        <Comment/>
      </div>    
    </article>
  )
}