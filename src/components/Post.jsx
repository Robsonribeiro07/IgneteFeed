import { Avatar } from './avatar';
import { Comment } from './coment';
import style from './Post.module.css';

import ptBR from 'date-fns/locale/pt-BR'; // Colocando em pt Br a hora

import { format, formatDistanceToNow } from 'date-fns' // formataçao de texto, distance now e para calculaar tempo da publicaçao7
import { useState } from 'react';


export function Post({ author, publishAt, content}) { 

    const [comment, setComment] = useState([
       'Post muito bacana Hein?'
    
    ])

    const handleclick = (event) =>{ 

        event.preventDefault();

  
        setComment(
            [...comment, newComent] // colcoando os valores atuais mais o novos
        )

        setNewComent('') // limpando o input após o postagem
        
    }
    
    const handleNewcomentChangeInvalid = () => {
        
        event.target.setCustomValidity('Esse campo e obrigatorio') // colocando  o customValidity caso seja inválido

    }

    const handleDeleteComent = (commentToDelete) =>{
 
         
        const newCommentWithDelete = comment.filter(comment => { // percorrendo o array

            return comment !== commentToDelete  // retorando todos valores diferente da mensagem atual 
        })

        setComment(newCommentWithDelete) // atualizando a variavel de estado
         console.log(commentToDelete)

        
    }
    const handleNewcomentChange = () =>{

        event.target.setCustomValidity('') // retirando o customValidity caso seja válido

        setNewComent(event.target.value) // Funçao para o onChanger monitor passanddo, para o estado e atualizando o newComent

    }
    const publishedDateFormated = format(publishAt, "d 'de' LLLL 'as' HH:mm'h'", {
        locale: ptBR
    });

    const [newComent, setNewComent] = useState('') // contrlando o estado do textarea

   
    
    const publishedDateRelativeToNow = formatDistanceToNow(publishAt, {
        locale: ptBR, 
        addSuffix: true // coloca os 'ha'  antes do numero

    })
   
    const isNewCommentEmpty = newComent.length === 0 ? true : false
    return ( 

        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar 
                   src={author.avatarUrl} alt="" />
                    <div className={style.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>


            <time datetime={publishAt.toISOString()} title={publishedDateFormated}>
                {publishedDateRelativeToNow}
                
                </time>
            </header>
        

         <div className={style.content}>
           {content.map(line =>{
            
            if(line.type === 'paragraph') {
                return (
                    <p>{line.content}</p>
                 )
           } else if (line.type === 'link'){
               
            return (
                <p><a href="#">{line.content}</a></p>
            )
           }
         }
           
           )} 
          
     </div>

     <form className={style.commentForm} onSubmit={handleclick}>
        <strong>Deixe Seu feedback</strong>

        <textarea
          name='comentar'
           placeholder='Deixe seu feedback'
           value={newComent}
           onChange={handleNewcomentChange}
           required
           onInvalid={handleNewcomentChangeInvalid}
        
         />

         <footer>
         <button type='submit' disabled={isNewCommentEmpty} >Comentar</button>

         </footer>
     </form>

        <div className={style.commentList}>
           
         {comment.map(comment =>{
            
            return(
                <Comment content={comment}
                handleDeleteComent={handleDeleteComent}
                />
            )
         })}
        </div>

        </article>

    )
}