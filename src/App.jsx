  import { Header } from "./components/header";

  import '../src/global.css'
   
  import style from '../src/App.module.css'
 export default function App() {

  return (
   
    <div className="div">
      <Header/>


      <div className={style.wrapper}>
        <aside>
          sidebar
        </aside>

        <main>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore voluptate eum quibusdam, atque, corrupti iste animi nihil officia aliquid error necessitatibus voluptatibus explicabo ducimus laborum, iure id dolores alias libero!
        </main>
      </div>

    </div>

  );
}