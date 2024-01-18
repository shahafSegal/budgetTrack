export default function ReviewCard(props){
    const review=props.usrRev;
    return(
        <div className="revCard">
            <div className="sideCard">
                <img src={review.image} alt="" className="revCardImage"/>
                <h2>{review.name}</h2>
            </div>
          
            <p>{review.text}</p>
        </div>
    )
}