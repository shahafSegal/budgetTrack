import ReviewCard from "./ReviewCard"
import "./testimonies.css"

export default function Testimonies(){
    const userReviews=[
        {
            name: "John Doe",
            image: "https://randomuser.me/api/portraits/men/21.jpg",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            name: "Jane Smith",
            image: "https://randomuser.me/api/portraits/women/67.jpg",
            text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            name: "Bob Johnson",
            image: "https://randomuser.me/api/portraits/lego/4.jpg",
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        }
    ]
    return(
        <div>
            {userReviews.map((userReview)=>(<ReviewCard usrRev={userReview}></ReviewCard>))}
        </div>
    )
}