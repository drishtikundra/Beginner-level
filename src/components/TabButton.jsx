export default function TabButton({children, tappedButton,...props}) {
  // function handleClick(){
  //     console.log('print ho gyaa');
  // }
  // console.log('from tabButton')

  return (
    <li className="ex">
      {/* <button onClick={handleClick()} >{props.children}</button>   => this way button tum khud chla re ho.. toh jitni baar bhi TabButton as a tag likha hoga, utni baar ye function chlega and utni baar console pe likha aayega*/}

      {/* by this way.. react handleClick ko chlra ra h.. so that's y sirf button press krne p hi console pe kuch print hoyega.. here u r passing ur function as a value*/}
      <button
        className={tappedButton ? "tapped" : undefined} {...props}
        
      >
        {children}
      </button>
    </li>
  );
}
