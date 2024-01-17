export default function ReviewCard(props){
    const review=props.usrRev;
    return(
        <div className="revCard">
            <h2>{review.name}</h2>
            <img src={review.image} alt="" className="revCardImage"/>
            <p>{review.text}</p>
        </div>
    )
}