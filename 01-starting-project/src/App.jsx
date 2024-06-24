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
  let tabContent='please select a tab'
  function handleSelect(selectedButton){
    console.log(selectedButton)
    tabContent=selectedButton
  } 
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
            <TabButton onSelect={()=>handleSelect('components')} label="Components"/>
            <TabButton onSelect={()=>handleSelect('jsx')} label="JSX"/>
            <TabButton onSelect={()=>handleSelect('props')} label="Props"/>
            <TabButton onSelect={()=>handleSelect('state')} label="State"/>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
    );
}
export default App;
