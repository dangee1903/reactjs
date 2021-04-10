import React, {useEffect , useState , useMemo } from 'react';
import Plus from './../assets/images/plus.svg';
import Fetch from '../services/FetchHinhthucnop';
import FetchNguoiLaoDong from '../services/FetchNguoiLaoDong';
import { connect} from 'react-redux';
import './../scss/ThuTucLeft.scss';
import {actSearch}  from '../actions/index';
import axios from 'axios'

const ThutucLeft = (props) =>{
    const [datatablehs, setDatatablehs] = useState([]);
    const [search,setSearch]            = useState(null);
    const [dataParam,setDataParam]      = useState(null);
    const abc = new Fetch();
    const getData = async () =>{
        const data = await abc.getAll();
        if(data){
            setDatatablehs(data);
        }
    }
    const getDataLaoDong = async () =>{
        const data = await abc.getAll();
        if(data){
            setDatatablehs(data);
        }
    }
    useEffect( () => {
        const data = getData();
    },[]);
    const changeSearch = (value) => {
        props.changeSearchValue(value);
        setDataParam(value);
    }
    const dataTable = useMemo(()=>{
        let dataThutuc = datatablehs;
        if(search){
            dataThutuc = dataThutuc.filter(
                data => 
                data.thuTuc_Ma.toLowerCase().includes(search.toLowerCase()) ||
                data.thuTuc_Ten.toLowerCase().includes(search.toLowerCase())
            );
        }
        return dataThutuc;
    },[datatablehs,search])
    const dataLaodong = useMemo( ()=>{

    },[dataParam])
    return(
        <div className="col-md-3 left">
            <div className="col-12">
                <div className="title">Thủ tục</div>
                    <form>
                        <label >Tìm kiếm</label>
                        <input type="text" placeholder="Điền thủ tục..." onChange={e => setSearch(e.target.value)}/>
                        <button type="submit" onClick={ (e) => {e.preventDefault()}}><img src={Plus} alt="" /></button>
                    </form>
                <div className="botton">
                    <h2 onClick={ () => {changeSearch("")}} >Tất cả các thủ tục</h2>
                    <ul>
                        {dataTable.map((data,index)=>(
                            <li onClick={() => changeSearch(data.thuTuc_Ma)} key={index}>
                                <div className="left">
                                    {data.thuTuc_Ma}<br></br>
                                    {data.thuTuc_Ten}
                                </div>
                                <div className="right">
                                    <img src={Plus}></img>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        search : state.search
    }
}
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        changeSearchValue: (value) => {
            dispatch(actSearch(value));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ThutucLeft); 
