import React, { Component } from 'react';
import { Link } from 'react-router';

class Pagination extends Component {
  getPagesCount(total, visible, page) {
    if (total < visble) {
      return total; 
    }
    else {
      const currentSet = Math.floor(page / visible);
      const sets = Math.floor(total / visible);
      return (currentSet == sets) ? total % visible : visible;
    }
  }

  render() {
    const { onPageSelect, total, page = 1, visible = 5 } = this.props;
    console.log(total % visible > 0 ? total % visible : visible);

    const pagesCount = this.getPagesCount(total, visible, page)// total < visible ? total : ((total - page) < (visible + 1) ? (total % visible > 0 ? total % visible : visible) : visible);
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
              <li key={p} className={`page-item ${(page - p == 1) ? 'active' : ''}`}>
                <Link className="page-link" to='' onClick={(e) => onPageSelect(e, p + 1)}>{ p + 1 }</Link>
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
