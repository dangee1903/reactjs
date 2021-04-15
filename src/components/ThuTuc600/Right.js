import { render } from '@testing-library/react';
import React, {useState } from 'react';
import { connect } from 'react-redux';
import bhD01 from './bhD01'
const Right = (props) => {
    console.log(props.kieumau600);
    return(
        <div>
            <bhD01 />
        </div>
    );
}
const mapStateToProps = state =>{
    return{
        kieumau600 : state.kieumau600
    }
}
export default connect(mapStateToProps,null)(Right);