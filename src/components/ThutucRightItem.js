import React, {useEffect , Component , useState } from 'react';
import { DomElement } from 'htmlparser2';
import Dot from './../assets/images/doticon.svg';
import Plus from './../assets/images/plus.svg';
import FeatchThutuc from '../services/FetchThutuc';
import { render } from '@testing-library/react';
import parse from 'html-react-parser';

const ThutucRight = (props) =>{
    // console.log(this.props);
    return(
        <tbody>
            {/* {showData(this.props.data)} */}
        </tbody>
    )
    function showData(data){
        let xhtml = "";
        console.log(data.content);
        if( data.content !== undefined && data.content.length > 0){
            xhtml = data.content.map( (item,index) => {
                return <tr key={item.id}><td></td></tr>
            })
        }
        return parse(`<tbody>${xhtml}</tbody>`)
    }
} 
export default ThutucRight;