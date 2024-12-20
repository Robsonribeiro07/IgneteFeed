  import { Header } from "./components/Header.jsx";
  import { Sidebar } from "../src/components/Sidebar.jsx";
  import { Post } from "./components/Post.jsx";

  import '../src/global.css'
   
  import style from '../src/App.module.css'


  const post = [

    {
      id: 1,
      author: {
        avatarUrl: 'http://github.com/robsonribeiro07.png',
        name: 'Diego Ribeiro',
        role: 'CTO @ Rockeatseat'
      },
      content: [
         { type: 'paragraph', content: 'Fala galeraa 👋'},

         { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare ��'},
            
         { type: 'link', content: '�� jane.design/doctorcare', url: 'https://jane.design/doctorcare' },
        ],

      publishAt: new Date('2024-11-10 20:00:00'),




    },
    {
      id: 2,
      author: {
        avatarUrl: 'http://github.com/diego3d.png',
        name: 'Mayk Brito',
        role: 'CTO @ Rockeatseat'
      },
      content: [
         { type: 'paragraph', content: 'Fala galeraa 👋'},

         { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare ��'},
            
         { type: 'link', content: '�� jane.design/doctorcare', url: 'https://jane.design/doctorcare' },
        ],
        
      publishAt: new Date('2022-10-23 20:00:00'),

    },

  ]
 export default function App() {

  return (
   
    <div className="div">

      <Header/>

      <div className={style.wrapper}> 
        
            <Sidebar />
              
 
        <main>
          {post.map(post =>{
            return(
              <Post
               key={post.id}
                author={post.author}
                content={post.content} 
                publishAt={post.publishAt}
              />
 
            )
          })}

          

        </main>
      </div>

    </div>

  );
}