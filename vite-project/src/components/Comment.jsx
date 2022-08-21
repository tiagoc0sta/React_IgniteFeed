import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css';

export function Comment(){
    return(
      <div className={styles.comment}>
        <img src="https://github.com/tiagoc0sta.png" alt="" />
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
                <Trash size={20}/>
              </button>

            </header>
            <p>Thanks bro, congracts!! 👏👏 </p>
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