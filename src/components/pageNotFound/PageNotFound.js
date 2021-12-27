import { Link } from 'react-router-dom'

function PageNotFound() {
    return (
        <div className="page-not-found__container">
            <img src="../images/page_not_found.jpg" alt="Error" />
            <div className="page-not-found__link">
                <Link to="/">Back to homepage...</Link>
            </div>
        </div >
    )
}

export default PageNotFound