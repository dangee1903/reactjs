import React, {useEffect , useState , useMemo } from 'react';
import Plus from './../assets/images/plus.svg';
import Featch from './../services/FetchHinhthucnop';
import { connect, useDispatch, useSelector } from 'react-redux';
import './../scss/ThuTucLeft.scss';
import {actSearch}  from './../actions/index';
import {
    BrowserRouter as Router,
    useRouteMatch,
    Link,
    Switch,
    Route
} from "react-router-dom";
const ThutucLeft = (props) =>{
    // const dispatch = useDispatch()
    const [datatablehs, setDatatablehs] = useState([]);
    const [search,setSearch]            = useState(null);
    const abc = new Featch();
    // const abv = useSelector(store => store)
    useEffect( () => {
        let data = JSON.stringify({
            "kyKeKhai": 2020,
            "lanKeKhai": 20,
            "bhD01": [
                {
                    "thutucId": "100",
                    "donviMa": "TTP001",
                    "donviTen": "TTP Plaza",
                    "tenBangKe": "ABC",
                    "tenthutuckemtheo": "XYZ",
                    "chitiet": [
                        {
                            "nguoilaodongId": 100,
                            "donviMa": "TTP001",
                            "donviTen": "TTP Plaza",
                            "hoTen": "Le Duy Hiep"
                        }
                    ]
                }
            ]
        });
        data = abc.getAll(data);
            data.then( (data) => { setDatatablehs(data) }
        );
    },[]);
    const changeSearch = (value) => {
        props.changeSearchValue(value);
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
                            <Link to={`thutuc/${data.thuTuc_Ma}`} >{data.thuTuc_Ten}</Link>
                            // console.log(data)
                            // <li onClick={() => changeSearch(data.thuTuc_Ma)} key={index}>{data.thuTuc_Ma}<br></br>{data.thuTuc_Ten}</li>
                        ))}
                                <Switch>
                                <Route path="/thutuc/:id">
                                    <p>Dang</p>
                                </Route>
                                </Switch>
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
