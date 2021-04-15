import React, { Component } from 'react';
import Book from './../assets/images/book.svg';
import Import from './../assets/images/import.svg';
import Export from './../assets/images/export.svg';
import { connect } from 'react-redux';
import { actChangeBHD } from './../actions/index'
import './../scss/ThuTucLeft.scss'
const Title = (props) =>{
    function handelChangeBHD(value){
        props.changeBHD(value);
    }
    return (
        <div>
            <section className="qlld">
                <div className="qlld__wrap container-fluid">
                    <div className="qlld__wrap-left">
                    <img src={Book} alt="" />
                    <h2>{props.title}</h2>
                    </div>
                    <div className="qlld__wrap-right">
                        { props.types != null ? 
                            <React.Fragment>
                                <a className="btn" style={{cusor:"pointer"}} onClick={ () => { handelChangeBHD("bhD01") } }>bhD01</a>
                                <a className="btn" style={{cusor:"pointer"}} onClick={ () => { handelChangeBHD("bhD02") } }>bhD02</a>
                                <a className="btn" style={{cusor:"pointer"}} onClick={ () => { handelChangeBHD("bhD03") } }>bhTK1</a>
                            </React.Fragment>
                            : 
                            <React.Fragment>
                                <a className="btn" href="/#"><img src={Import} alt="" />Nhập Excel</a>
                                <a className="btn" href="/#"><img src={Export} alt="" />Xuất Excel</a>
                            </React.Fragment>
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}
const mapStateToProps = state =>{
    return{
        kieumau600 : state.kieumau600
    }
}
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        changeBHD : (value) => {
            dispatch(actChangeBHD(value))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Title);