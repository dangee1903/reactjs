import React, {useEffect , useState , useMemo } from 'react';
const Pagination = ({total = 0,itemsPerPage = 10,currentPage = 1,onPageChange}) =>  {
    const [totalPages, setTotalPages] = useState(0);
    useEffect(() => {
        if (total > 0 && itemsPerPage > 0)
            setTotalPages(Math.ceil(total / itemsPerPage));
    }, [total, itemsPerPage]);
    const paginationItems = useMemo(() => {
        const pages = [];

        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <li key={i} className={i === currentPage ? "active" : ""} onClick={() => onPageChange(i)}>{i}</li>
            );
        }

        return pages;
    }, [totalPages, currentPage]);
    if (totalPages === 0) return null;
        return (
            <div className="right">
                <p>Trang</p>
                <ul>
                    <li onClick={() => onPageChange(currentPage - 1)} className={currentPage === 1 ? "disabled" : ""} >&lt;</li>
                    {paginationItems}
                    <li onClick={() => onPageChange(currentPage + 1)} className={currentPage === totalPages ? "disabled" : ""}>&gt;</li>
                </ul>
                <p>Trên {totalPages}</p>
            </div>
        );
}

export default Pagination;