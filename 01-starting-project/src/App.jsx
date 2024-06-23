import CoreConcept from './components/CoreConcepts.jsx';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import TabButton from './components/TabButton.jsx';
// function CoreConcept(props){
//   return(
//     // <li>
//     //   <h3>{props.title}</h3>
//     //   <p>{props.description}</p>
//     //   <img src={props.image} alt={props.title} />
//     // </li>
    
//   );
// }
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

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton label="Components"/>
            <TabButton label="JSX"/>
            <TabButton label="Props"/>
            <TabButton label="State"/>
          </menu>

        </section>
      </main>
    </div>
    );
}
export default App;
