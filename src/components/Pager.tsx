import PropTypes from 'prop-types'
import ReactPaginate from "react-paginate";

function Pager({ perPage, total, onChange }: { perPage: number, total: number, onChange: any }) {
    const links = Math.ceil(total / perPage);
    return (
        <ReactPaginate
            pageCount={links}
            onPageChange={(ev) => onChange(ev.selected + 1)}
            className="pagination pagination-sm"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            nextClassName="page-item"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            activeClassName="page-item active"
        />
    )
}

Pager.propTypes = {
    perPage: PropTypes.number.isRequired,
    total: PropTypes.number
}

export default Pager