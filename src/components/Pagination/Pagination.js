import React from 'react';
import styles from './Pagination.module.scss';

const Pagination = props => {
    const { currentPage, totalPage, fetchData, setCurrentPage } = props;

    const pageCount = new Array(totalPage).fill('placeholder');

    const handleClick = (pageNum) => {
        setCurrentPage(pageNum);
        fetchData(pageNum);
    };

    const handlePageForward = (currentPage) => {
        const nextPage = currentPage + 1;

        if (nextPage > totalPage) {
            return;
        }

        setCurrentPage(nextPage);
        fetchData(nextPage);
    };

    const handlePageBackward = (currentPage) => {
        const nextPage = currentPage - 1;

        if (nextPage <= 0) {
            return;
        }

        setCurrentPage(nextPage);
        fetchData(nextPage);
    };

    const generatePaginationItems = () => {
        return pageCount.map(
            (pageCount, index) => {
                const pageNum = index + 1;
                const className = `${styles.pageItem} ${currentPage === pageNum ? `${styles.highlight}` : ''}`;

                return (
                    <div
                        key={pageNum}
                        className={className}
                        onClick={() => handleClick(pageNum)}
                    >
                        {pageNum}
                    </div>
                );
            }
        )
    };

    const leftArrowClass = `${styles.arrow} ${currentPage <=1 ? `${styles.disabled}` : ''}`;
    const rightArrowClass = `${styles.arrow} ${currentPage >= totalPage ? `${styles.disabled}` : ''}`;

    return (
        <div className={styles.pagination}>
            <div className={leftArrowClass} onClick={() => handlePageBackward(currentPage)}>{'<'}</div>
            {generatePaginationItems()}
            <div className={rightArrowClass} onClick={() => handlePageForward(currentPage)}>{'>'}</div>
        </div>
    );
};

export default Pagination;
