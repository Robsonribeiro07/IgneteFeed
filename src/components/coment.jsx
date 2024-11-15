 import { ThumbsUp, Trash } from '@phosphor-icons/react'
import style from './coment.module.css'
export function Comment (){
    return (
        <div className={style.comment}>

            <img src="https://avatars.githubusercontent.com/u/187860964?v=4" alt="" />

            <div className={style.commentBox}>
                <div className={style.commentContent}>
                 <header>
                    <div className={style.authorAndTime}>
                      <strong>Robson Ribeiro</strong>
                      <time datetime="11">cera de 1h atras</time>
                    </div>


                    <button title='Deletar comentario'>
                        <Trash size={20}/>
                    </button>
                 </header>

                 
                 <p>Muito bom dev, Parabens!!</p>

              
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