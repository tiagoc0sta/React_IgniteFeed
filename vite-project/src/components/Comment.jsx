import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content}){
    return(
      <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/tiagoc0sta.png" alt="" />
        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Tiago Costa</strong>
                <time 
                  title="21-Ago at 08:13" 
                  dateTime="2022-08-22 08:13:30">Published around 1 hour ago
                </time>
              </div>

              <button title="delete comment">
                <Trash size={24}/>
              </button>

            </header>
            <p>{content}</p>
          </div>
          
          <footer>
            <button>
              <ThumbsUp/>
              Applaud <span>20</span>
            </button>
          </footer>
        </div>  
      </div>
    )
}