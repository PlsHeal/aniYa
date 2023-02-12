import { Link } from "react-router-dom";
import "../styles/main.component.css"

export default function MainSection() {
    return (
        <div className="container main-container">
            <div className="jumbotron-fluid">
                <h1 className="display-4">Hello, <span>Everyone</span> </h1>
                <p className="lead">Welcome to AniYa, your one-stop destination for all things anime! We are an anime website that is dedicated to providing you with a comprehensive collection of the latest and greatest anime shows and movies. Our mission is to create a platform where you can easily discover, collect and view your favorite anime content with ease.</p>
                <hr className="my-4"></hr>
                <p className="tags">Not only can you explore and discover new anime, but you can also keep track of your personal anime collection and keep tabs on the shows you're currently watching. So what are you waiting for check it out now.</p>
                <p className="lead">
                    <Link to="/popular" className="btn btn-success btn-lg">Check it out!</Link>
                </p>
            </div>
        </div>
    );
}