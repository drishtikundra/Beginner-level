import pic2 from '../assets/info1.jpg';
import pic3 from '../assets/info2.jpg';
import pic4 from '../assets/info3.jpg';
import pic5 from '../assets/info4.jpg';
import Info from "./Info";
import '../App.css';


export default function Funcfacts(){
    return (
        <section className='infoBox'>
        <h2>Details</h2>
        <ul className='list-items'>
        <Info
        title='fun fact1'
        description='During a new moon the sky is darker, given the perception of more intense displays, but of course the true determining factor remains with aurora activity on any given night.'  
        image={pic2}
        />

        <Info
        title='fun fact2'
        description="The Aurora Borealis is simply glowing gases, just like the glowing gas in a neon light tube, so nothing's going to happen really, you're just 'touching' gas! "
        image={pic3}
        />

        <Info
        title='fun fact3'
        description="Auroras occur when these charged particles launched along Earth's magnetic field collide with gases in Earth's upper atmosphere. Those collisions produce tiny flashes that fill the sky with colourful light."
        image={pic4}
        />

        <Info
        title='func fact4'
        description='The best places to see the aurora borealis are the Nordic countries of Iceland, Norway, Sweden and Finland, which lie within or near the Arctic Circle.'
        image={pic5}
        />
        </ul>
      </section>
    );
}