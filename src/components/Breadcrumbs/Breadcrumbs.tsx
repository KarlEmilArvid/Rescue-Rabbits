import "./Breadcrumbs.scss";

interface Props {
  step:number;
}

const Breadcrumbs = ({step}: Props) => {
  if (step ===1) {
    return (
      <span className="breadcrumbs">  
          <span className="active">1</span>
          <span>2</span>
          <span>3</span>
      </span>  
    )
  }
  else if (step ===3 ) {
    return (
      <span className="breadcrumbs">  
          <span >1</span>
          <span >2</span>
          <span className="active">3</span>
      </span> 
    )
  }
  else {
    return (
      <span className="breadcrumbs">  
          <span >1</span>
          <span className="active">2</span>
          <span>3</span>
      </span> 
    )
  }
 
};

export default Breadcrumbs;