import {format, formatDistanceToNow} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({author, publishedAt, content}){
  const [comments, setComments] = useState ([
    'Nice post!'
  ])

  const[newCommentText, setNewCommentText] =useState('')

  console.log(newCommentText);

  const publishedDateFormatted = format(publishedAt, "d  LLLL 'at' HH:mm'h'");

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
    tolocale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(){
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value)
   
  }

  function deleteComment(commentToDelete){
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment != commentToDelete;
    })

    setComments(commentsWithoutDeletedOne);
  }

  function handleNewCommentInvalid(){
    event.target.setCustomValidity('This is a mandatory field');
  }

  const isNewCommentEmpty = newCommentText.length===0 ;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time 
          title={publishedDateFormatted}  dateTime={publishedAt.toISOString()}>
            {publishedDateRelativeToNow}
        </time>

      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return<p key={line.content}>{line.content}</p>
          }else if (line.type === 'link'){
            return<p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
        
      </div>  

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Drop a feedback</strong>

        <textarea 
          name="comment"
          placeholder="Drop a feedback"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publish
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment =>{
          return (
            <Comment 
              key={comment} 
              content={comment} 
              ondeleteComment={deleteComment}
            />
          )
        })}
      </div>    
    </article>
  )
}