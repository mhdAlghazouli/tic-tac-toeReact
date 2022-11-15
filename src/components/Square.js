const Square = (props) => {
  
  return ( 
    <div>
      <button onClick={() => props.onClick()} style={{width: "50px", height:"50px"}}>{props.value}</button>
    </div>
  );
}

export default Square;