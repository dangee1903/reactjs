import React, {useEffect , useState , useMemo } from 'react';
import Plus from './../../assets/images/plus.svg';
import Fetch from '../../services/FetchHinhthucnop';
import { connect} from 'react-redux';
import './../../scss/ThuTucLeft.scss';
import {actSearch}  from '../../actions/index';
import ThutucItems from '../ThutucItems'
import NguoiLaoDongItems from '../NguoiLaoDongItems'
const ThutucLeft = (props,setDatatype) =>{
    const [datatablehs, setDatatablehs] = useState([]);
    const [search,setSearch]            = useState(null);
    const abc = new Fetch();
    const getData = async () =>{
        const data = await abc.getAll();
        if(data){
            setDatatablehs(data);
        }
    }
    useEffect( () => {
        const data = getData();
    },[]);
    console.log();
    const changeSearch = (value) => {
        props.changeSearchValue(value);
    }
    const dataTable = useMemo(()=>{
        var dataThutuc = datatablehs;
        if(search){
            dataThutuc = dataThutuc.filter(
                data => 
                data.thuTuc_Ma.toLowerCase().includes(search.toLowerCase()) ||
                data.thuTuc_Ten.toLowerCase().includes(search.toLowerCase())
            );
        }
        return dataThutuc;
    },[datatablehs,search])
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
                    <ThutucItems items={dataTable} changeS={props.changeSearchValue} dataType={props.Datatype} setDataLeft={props.setDatatype} />
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
