import { Link } from "react-router-dom";
import "../styles/pagination.component.css";

function Pagination() {
    return (
        <nav aria-label="Page navigation example" style={{display: "grid", placeItems: "center"}}>
            <ul className="pagination">
                <li className="page-item"><Link className="page-link" href="#">        
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                    </Link>
                </li>
                <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                <li className="page-item"><Link className="page-link" href="#">        
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default function AnimeSection() {
    return(
        <Pagination />
    );
}