import { useState } from "react";
import { data } from "../Details";
import TabButton from "./TabButton";
import '../App.css';


export default function ExploreContent(){

    const [selectedTopic,setSelectedTopic]=useState(null);


  // let buttonContent='Please click a button.'

  function handleSelect(selectedButton) { 
    // console.log(selectedButton);
    // buttonContent=selectedButton;
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  // console.log('printed')

  let tabContent=<p className='before'>please click a button.</p>
  if(selectedTopic){
    tabContent=(<div className='tab-content'>
    <h3 className='hh'>{data[selectedTopic].title}</h3>
    <p>{data[selectedTopic].description}</p>

  </div>);
  }
    return (
        <section id='examples'>
        <h2>Explore more about Aurora Lights</h2>
        <menu>
          <TabButton
          tappedButton={selectedTopic=='geoinfo'}
           onClick={()=>handleSelect('geoinfo')}
           >Geographical info
           </TabButton>

          <TabButton
           tappedButton={selectedTopic=='nightview'}
            onClick={()=>handleSelect('nightview')}
            >Night Sky View</TabButton>

          <TabButton 
          tappedButton={selectedTopic=='impact'}
          onClick={()=>handleSelect('impact')}>Impact on Humans</TabButton>

          <TabButton 
          tappedButton={selectedTopic=='location'}
          onClick={()=>handleSelect('location')}>Locations to Watch</TabButton>
        </menu>
      {/* <p className='selectedTopic'>{selectedTopic} </p> */}
      {tabContent}
      </section>
    )
}