import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CardSection(props) {
    const title = (props.data.attributes.titles.en) ? props.data.attributes.titles.en : props.data.attributes.titles.en_jp;
    const synopsis = props.data.attributes.synopsis;

    return (
        <div className="col-sm-3 mt-4">
            <div className="card">
                <img className="card-img-top" style={{height: "120px", objectFit: "cover"}} src={props.data.attributes.coverImage.large} alt="Card cap" />
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text" >{(synopsis.length > 150) ? synopsis.substring(0, 150) + "..." : synopsis}</p>
                <Link to="#" class="btn btn-success">Find more...</Link>
                </div>
            </div>
        </div>
    );
}

export default function PopularSection() {
    const [popular, setPopular] = useState([]);

    const fetchPopularAnime = async() => {
        return await new Promise((resolve, reject) => {
            fetch("https://kitsu.io/api/edge/trending/anime")
            .then(response => response.json())
            .then(data => {
                resolve(data)
            })
            .catch(error => {
                reject(error)
            })
        })
    }
    
    useEffect(() => {
        fetchPopularAnime()
        .then((arr => setPopular(arr.data)))
        .catch(err => console.log(err))
    }, [])

    console.log(popular);

    return(
        <div className="card-deck">
            <div className="row">
                {popular.map((data, index) => (
                    <CardSection data={data} key={index}/>
                ))}
            </div>
        </div>
    );
}