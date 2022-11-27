import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from './Avatar';

import styles from './Comment.module.css';

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/andreybatista.png"
      />

      <div className={styles.commentBox}>

        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Andrey</strong>

              <time
                title='22 de Novembro às 17:10h'
                dateTime='2022-11-22 17:08:00'
              >
                Cerca de 2h atrás
              </time>
            </div>

            <button title='Deletar Comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}