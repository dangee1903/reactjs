import React, {useEffect , useState , useMemo } from 'react';
import FeatchThutuc from '../services/FetchThutuc';
import Moment from 'react-moment';
import Filter from './Filter';
import Pagination from './Pagination';
import Arrow from './../assets/images/arrowTop.svg';
import {actSearch}  from './../actions/index';
import { connect, useDispatch, useSelector } from 'react-redux';
import Plus from './../assets/images/plus.svg';
import './../scss/ThuTucLeft.scss';
const ThutucRight = (props) =>{
    const [datatablehs, setDatatablehs] = useState([{content:[]}]);
    const [search, setSearch]           = useState("");
    const [guiBH, setGuiBH]             = useState(3);
    const [totalItems, setTotalItems]   = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortingField,setSorting]     = useState({ field: "", order : "ASC"});
    const ITEMS_PER_PAGE = 10;
    const abc = new FeatchThutuc();
    const getData = async () => {
        const data = await abc.getAll();
        if(data){
            setDatatablehs(data.content)
        }
    }
    useEffect( () => {
        getData();
    },[]);
    const tabledata = useMemo(() => {
        let tabledata = datatablehs;
        if (search) {
            tabledata = tabledata.filter(
                data =>
                    data.thuTucTen.toLowerCase().includes(search.toLowerCase())
            );
        }
        if (guiBH === 3) {
            tabledata = tabledata;            
        }else if (guiBH != 3){
            tabledata = tabledata.filter(
                data =>
                    data.trangThaiGui == guiBH
            );
        }
        if(props.search !== ""){
            tabledata = tabledata.filter(
                data =>
                    data.thuTucMa == props.search
            );
        }
        if(sortingField.field){
            const reversed = sortingField.order === "ASC" ? -1 : 1;
            tabledata = tabledata.sort(
                (a, b) =>
                    reversed * a[sortingField.field].localeCompare(b[sortingField.field])
            );
        }
        setTotalItems(tabledata.length);
        return tabledata.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );
    }, [datatablehs,search,guiBH,currentPage,sortingField,props.search]);
    const onSortingChange = (fieldValue) =>{
        let orderValue = (sortingField.order === "ASC") ? "DESC" : "ASC";
        setSorting({field : fieldValue, order : orderValue});
    }
    return(
        <div className="col-md-9 right">
            <div className="col-12">
                <div className="pagination">
                    <div className="left">
                        <h2>Danh sách người lao động</h2>
                    </div>
                    <Pagination 
                        total={totalItems}
                        itemsPerPage={ITEMS_PER_PAGE}
                        currentPage={currentPage}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </div>
                <Filter 
                    onSearch={value => {setSearch(value)}}
                    onGuiBH={value => {setGuiBH(value)}} 
                />
                <div className="table" style={{overflow: 'auto'}}>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Số</th>
                                <th scope="col">Mã thủ tục</th>
                                <th scope="col">Tên thủ tục</th>
                                <th scope="col">Kỳ kê khai</th>
                                <th scope="col">Trạng thái ký</th>
                                <th scope="col">Trạng thái gửi BH</th>
                                <th scope="col">Ngày tạo<i onClick={ () => onSortingChange("ngayTao")}><img  className={sortingField.order == "DESC" ? "active" : ""} src={Arrow} alt="" /></i></th>
                                <th scope="col">Hoạt động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(tabledata.length) > 0 ? tabledata.map( (data,index) =>(
                                <tr key={index}>
                                    <td >{index + 1}</td>
                                    <td></td>
                                    <td className="plus">{data.thuTucMa}<img src={Plus} alt="" /></td>
                                    <td className="bold">{data.thuTucTen}</td>
                                    <td>{data.kyKeKhai}</td>
                                    <td>{data.trangThaiKy === 0 ? "Chưa ký" : 1 ? "Đã ký" : 2 ? "Không biết" : "" }</td>
                                    <td>{data.trangThaiGui === 0 ? "Chưa gửi" : 1 ? "Đã gửi" : 2 ? "Không biết" : "" }</td>
                                    <td><Moment format="DD/MM/YYYY">{data.ngayTao}</Moment></td>
                                    <td>Hoạt động</td>
                                </tr>
                            )) : null}
                        </tbody>
                    </table>
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
// const mapDispatchToProps = (dispatch,ownProps) => {
//     return {
//         changeSearchValue: (value) => {
//             dispatch(actSearch(value));
//         }
//     }
// }
export default connect(mapStateToProps,null)(ThutucRight);