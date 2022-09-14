import "./Breadcrumbs.scss"

interface Props {
  step: number;
}

const Breadcrumbs = ({ step }: Props) => {
  if (step === 1) {
    return (
      <span className="breadcrumbs">
        <span className="active">1</span>
        <div className="crumbs"></div>
        <span className="mid">2</span>
        <div className="crumbs"></div>
        <span>3</span>
      </span>
    )
  } else if (step === 2) {
    return (
      <span className="breadcrumbs">
        <span className="active">1</span>
        <div className="crumbs active"></div>
        <span className="active">2</span>
        <div className="crumbs"></div>
        <span>3</span>
      </span>
    )
  } else {
    return (
      <span className="breadcrumbs">
        <span className="active">1</span>
        <div className="crumbs active"></div>
        <span className="active">2</span>
        <div className="crumbs active"></div>
        <span className="active">3</span>
      </span>
    )
  }
}

export default Breadcrumbs
