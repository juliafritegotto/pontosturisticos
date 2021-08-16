import { Link } from 'react-router-dom'
import './Pagination.css'

const Pagination = ({ pointsPerPage, totalPoints, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPoints / pointsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='pagination'>
                        <Link to='#' onClick={() => paginate(number)} >
                            {number}
                        </Link>
                    </li>
                ))}

            </ul>
        </nav>
    )
}

export default Pagination
