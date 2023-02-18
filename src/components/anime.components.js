import { Link } from "react-router-dom";
import "../styles/pagination.component.css";
import $ from "jquery";

function Pagination(props) {

    function onActive() {
        $('.page-link').on('click', function() {
            // Remove active class from all page-items
            $('.page-item').removeClass('active');
          
            // Add active class to the clicked page-item
            $(this).parent().addClass('active');
        });
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center" onClick={onActive}>
                <li className="page-item disabled" id="previousPage"><Link className="page-link" tabIndex="-1" to="#">        
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                    </Link>
                </li>
                <li className="page-item active"><Link className="page-link" to="/anime?page">1</Link></li>
                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                <li className="page-item"><Link className="page-link" to="#">        
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
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