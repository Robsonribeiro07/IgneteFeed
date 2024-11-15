  import { Header } from "./components/Header.jsx";
  import { Sidebar } from "../src/components/Sidebar.jsx";
  import { Post } from "./components/Post.jsx";

  import '../src/global.css'
   
  import style from '../src/App.module.css'
 export default function App() {

  return (
   
    <div className="div">

      <Header/>

      <div className={style.wrapper}> 
        
            <Sidebar />
              

        <main>
          <Post/>
          <Post/>
        </main>
      </div>

    </div>

  );
}