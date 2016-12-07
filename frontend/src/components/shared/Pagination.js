import React, { Component } from 'react';
import { Link } from 'react-router';

class Pagination extends Component {
  onPageSelect(e, page) {
    e.preventDefault();
    this.props.onPageSelect(page);
  }

  getPagesCount(total, visible, currentSet, totalSets) {
    if (total < visible) {
      return total; 
    }
    else {
      return (currentSet == totalSets) ? total % visible : visible;
    }
  }

  render() {
    const { total, page=1, visible=5, className="float-md-right" } = this.props;
    const currentSet = Math.ceil(page / visible);
    const totalSets = Math.ceil(total / visible);
    const pagesCount = this.getPagesCount(total, visible, currentSet, totalSets);
    const shift = Math.floor(page / (visible + 1)) * visible + 1;

    const PageLinks = [...Array(pagesCount).keys()].map(p =>
                        <li key={p} className={`page-item ${(page == p + shift) ? 'active' : ''}`}>
                          <Link className="page-link" to="" onClick={(e) => this.onPageSelect(e, p + shift)}>{ p + shift }</Link>
                        </li>
                      );

    return (
      <div className={className}>
        <nav aria-label="Page navigation">
          <ul className="pagination pagination-sm">
            <li className={`page-item ${(currentSet == 1) ? 'disabled' : ''}`}>
              <Link className="page-link" to="" aria-label="Previous" onClick={(e) => this.onPageSelect(e, shift - 1)}>
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </Link>
            </li>
            { PageLinks }
            <li className={`page-item ${(currentSet == totalSets) ? 'disabled' : ''}`}>
              <Link className="page-link" to="" aria-label="Next" onClick={(e) => this.onPageSelect(e, shift + visible)}>
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Pagination;
