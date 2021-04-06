import React, { Component } from 'react';
import Book from './../assets/images/book.svg';
import Import from './../assets/images/import.svg';
import Export from './../assets/images/export.svg';
class Title extends Component {
    render() {
        return (
            <div>
                <section className="qlld">
                    <div className="qlld__wrap container-fluid">
                        <div className="qlld__wrap-left">
                        <img src={Book} alt="" />
                        <h2>Quản lý người lao động</h2>
                        </div>
                        <div className="qlld__wrap-right">
                        <a className="btn" href="/#"><img src={Import} alt="" />Nhập Excel</a>
                        <a className="btn" href="/#"><img src={Export} alt="" />Xuất Excel</a>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Title;