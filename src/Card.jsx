
const Card = (props) => {
    return(
        <div className="card">
            

            <h1>{props?.question}</h1>
            <p>{props?.ans}</p>
        </div>
    )
}
export default Card