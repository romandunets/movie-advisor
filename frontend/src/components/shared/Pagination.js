import React, { Component } from 'react';
import { Link } from 'react-router';

class Pagination extends Component {
  getPagesCount(total, visible, page) {
    if (total < visible) {
      return total; 
    }
    else {
      const currentSet = Math.ceil(page / visible);
      const sets = Math.ceil(total / visible);
      return (currentSet == sets) ? total % visible : visible;
    }
  }

  render() {
    const { onPageSelect, total, page = 1, visible = 5 } = this.props;
    const pagesCount = this.getPagesCount(total, visible, page);
    const shift = Math.floor(page / (visible + 1)) * visible + 1;

    return (
      <div className="text-center">
        <nav aria-label="Page navigation">
          <ul className="pagination pagination-sm">
            <li className={`page-item ${(page < visible + 1) ? 'disabled' : ''}`}>
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            { [...Array(pagesCount).keys()].map(p =>
              <li key={p} className={`page-item ${(page == p + shift) ? 'active' : ''}`}>
                <Link className="page-link" to='' onClick={(e) => onPageSelect(e, p + shift)}>{ p + shift }</Link>
              </li>
            ) }
            <li className={`page-item ${(total - page < visible + 1) ? 'disabled' : ''}`}>
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Pagination;
