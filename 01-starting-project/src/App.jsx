import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data.js';
const reactDescription=['Fundamental','Crutial','Core'];
function genRandomInt(max){
  return Math.floor(Math.random()*(max+1));
}
// function CoreConcept(props){
//   return(
//     // <li>
//     //   <h3>{props.title}</h3>
//     //   <p>{props.description}</p>
//     //   <img src={props.image} alt={props.title} />
//     // </li>
    
//   );
// }
function CoreConcept({image,title,description}){
  return(
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function Header(){
  const description=reactDescription[genRandomInt(2)];
  return(<header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>);

}


function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept 
          title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description} 
          image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept 
          title={CORE_CONCEPTS[1].title}
          description={CORE_CONCEPTS[1].description} 
          image={CORE_CONCEPTS[1].image}
          />
          <CoreConcept{...CORE_CONCEPTS[2]}/>
          <CoreConcept{...CORE_CONCEPTS[3]}/>
      
         
        </ul>
        </section>
      </main>
    </div>
    );
}
export default App;
