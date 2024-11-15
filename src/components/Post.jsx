import { Comment } from './coment';
import style from './Post.module.css';

export function Post() {
    return ( 
        
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <img className={style.avatar} src="https://github.com/RobsonRIbeiro07.png" alt="" />
                    <div className={style.authorInfo}>
                        <strong>Robson Ribeiro</strong>
                        <span>Web Developer</span>
                    </div>
                </div>


            <time datetime="">Publicado Ha 1h</time>
            </header>
        

         <div className={style.content}>
         <p>Fala galeraa 👋</p>

        <p>
         Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
            
        </p>

        <p>  <a href="">  👉 jane.design/doctorcare  </a>
        </p> 
        <p> <a href=""> #novoprojeto #nlw #rocketseat</a></p>

     </div>

     <form className={style.commentForm}>
        <strong>Deixe Seu feedback</strong>

        <textarea
           placeholder='Deixe seu feedback'
        
         />

         <footer>
         <button type='submit'>Comentar</button>

         </footer>
     </form>

        <div className={style.commentList}>
            <Comment/>
            <Comment/>
            <Comment/>

        </div>

        </article>

    )
}