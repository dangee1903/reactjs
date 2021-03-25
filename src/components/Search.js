import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actChangeQuery } from './../actions/index';
class Search extends Component {
    handleSearch(event){
        const target = event.target;
        const value  = target.type === 'checkbox' ? 'checked' : target.value;
        const name   = target.name;
        this.setState({
            [name] : value
        })
    }
    handleChange(event){
        this.props.changeQuery(this.state.query);
        event.preventDefault();
    }
    handleClear(event){
        event.preventDefault();
    }
    render() {
        let {query} = this.props;
        console.log(this.props);
        return (
        <form onSubmit={this.handleSearch} className="form-inline" role="form">
            <div className="form-group">
                <input value={query} onChange={this.handleChange} name="query" type="text" className="form-control" placeholder="Enter artist name ..." />
                <button onChange={this.handleSearch} type="button" className="btn btn-danger">Search</button>
                <button onChange={this.handleClear} type="button" className="btn btn-danger">Clear</button>
            </div>
        </form>
        );
    }
}
const mapStateToProps = state => {
    return {
        query : state.query
    }
}
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        changeQuery: (query) => {
            dispatch(actChangeQuery(query));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search);