

export default function Info(props){
    return (
      <li className='list-style'>
        <img className='info-pic-style' src={props.image} alt={props.title}/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>
    );
  }