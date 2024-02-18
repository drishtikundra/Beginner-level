import pic1 from '../assets/auroraLights.jpg';


const lightDescription=['Aurora lights, also known as the northern lights or southern lights.' , 'They are natural lights that appear in the sky.','They appear in lower polar regions.','They are just electrically charged particles produced could have some potentially negative effects to infrastructure and technology.','Auroras can be seen from late August to mid-April, preferably under a clear, cloudless sky.','In the north, the display is called aurora borealis, or northern lights. In the south, it is called the aurora australis.'];


function genRandomInt(max){
    return Math.floor(Math.random()*(max+1));
  }
  

 export default function Header(){
    const descriptionOflights=lightDescription[genRandomInt(4)];
    return(
      <header>
        <h2 className='heading'>Aurora Lights</h2>
  
        <div className='lightsPic'>
        <img className='pic' src={pic1} alt='img'/>
        </div>
  
        <p className='descriptionOflights'>
        {descriptionOflights}
        </p>
      </header>
    );
  }