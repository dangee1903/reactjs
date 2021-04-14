import React, {useEffect , useState , useMemo } from 'react';
import Plus from './../assets/images/plus.svg';
import Fetch from '../services/FetchHinhthucnop';
import CreateThuTuc from '../components/CreateThutuc'
import { connect} from 'react-redux';
import './../scss/ThuTucLeft.scss';
import {actSearch}  from '../actions/index';
import ThutucItems from './ThutucItems'
import NguoiLaoDongItems from './../components/NguoiLaoDongItems'
const ThutucLeft = (props,setDatatype) =>{
    const [datatablehs, setDatatablehs] = useState([]);
    const [search,setSearch]            = useState(null);
    const [DataLeft,setDataLeft]        = useState(null);
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
        var dataThutuc = [];
        if(DataLeft == null){
            dataThutuc = datatablehs;
            if(search){
                dataThutuc = dataThutuc.filter(
                    data => 
                    data.thuTuc_Ma.toLowerCase().includes(search.toLowerCase()) ||
                    data.thuTuc_Ten.toLowerCase().includes(search.toLowerCase())
                );
            }
        }else{
            dataThutuc = [
            {
                "nld_Hoten": "Nguyễn Cao Thiệp",
                "nld_MaNhanVien": "123",
                "nld_MaSoBhxh": "",
                "nld_GioiTinh": 0,
                "nld_TrangThai": 1,
                "nld_NgaySinhDinhDang": 0,
                "nld_NgaySinh": "0",
                "sameAddress": "false",
                "phongBan_Id": "0",
                "isDeleted": false,
                "creationTime": "2021-03-30T23:46:55.0245817+07:00",
                "id": 108
            },
            {
                "nld_Hoten": "Võ Thanh Sang",
                "nld_MaNhanVien": "NV01",
                "nld_MaSoBhxh": "9714755322",
                "nld_GioiTinh": 0,
                "nld_TrangThai": 1,
                "nld_NgaySinhDinhDang": 0,
                "nld_NgaySinh": "0",
                "sameAddress": "false",
                "phongBan_Id": "0",
                "isDeleted": false,
                "creationTime": "2021-03-30T23:46:55.0245983+07:00",
                "id": 115
            },
            {
                "nld_Hoten": "Lê Hoàng",
                "nld_MaNhanVien": "12",
                "nld_MaSoBhxh": "",
                "nld_GioiTinh": 0,
                "nld_TrangThai": 1,
                "nld_NgaySinhDinhDang": 0,
                "nld_NgaySinh": "0",
                "sameAddress": "false",
                "phongBan_Id": "0",
                "isDeleted": false,
                "creationTime": "2021-03-30T23:46:55.024605+07:00",
                "id": 233
            },
            {
                "nld_Hoten": "NguyễnVănB",
                "nld_MaNhanVien": "B1",
                "nld_MaSoBhxh": "87651002",
                "nld_GioiTinh": 0,
                "nld_TrangThai": 1,
                "nld_NgaySinhDinhDang": 0,
                "nld_NgaySinh": "0",
                "sameAddress": "false",
                "phongBan_Id": "0",
                "isDeleted": false,
                "creationTime": "2021-03-30T23:46:55.0246113+07:00",
                "id": 240
            },
            {
                "nld_Hoten": "NguyễnVănC",
                "nld_MaNhanVien": "B1",
                "nld_MaSoBhxh": "87651003",
                "nld_GioiTinh": 0,
                "nld_TrangThai": 1,
                "nld_NgaySinhDinhDang": 0,
                "nld_NgaySinh": "0",
                "sameAddress": "false",
                "phongBan_Id": "0",
                "isDeleted": false,
                "creationTime": "2021-03-30T23:46:55.024623+07:00",
                "id": 241
            },
            {
                "nld_Hoten": "NguyễnVănD",
                "nld_MaNhanVien": "B1",
                "nld_MaSoBhxh": "87651004",
                "nld_GioiTinh": 0,
                "nld_TrangThai": 1,
                "nld_NgaySinhDinhDang": 0,
                "nld_NgaySinh": "0",
                "sameAddress": "false",
                "phongBan_Id": "0",
                "isDeleted": false,
                "creationTime": "2021-03-30T23:46:55.0246294+07:00",
                "id": 242
            },
            {
                "nld_Hoten": "NguyễnVănE",
                "nld_MaNhanVien": "B1",
                "nld_MaSoBhxh": "87651005",
                "nld_GioiTinh": 0,
                "nld_TrangThai": 1,
                "nld_NgaySinhDinhDang": 0,
                "nld_NgaySinh": "0",
                "sameAddress": "false",
                "phongBan_Id": "0",
                "isDeleted": false,
                "creationTime": "2021-03-30T23:46:55.0246353+07:00",
                "id": 243
            },
            {
                "nld_Hoten": "Bùi Thị Ninh",
                "nld_MaNhanVien": "nv1",
                "nld_MaSoBhxh": "",
                "nld_GioiTinh": 0,
                "nld_TrangThai": 1,
                "nld_NgaySinhDinhDang": 0,
                "nld_NgaySinh": "0",
                "sameAddress": "false",
                "phongBan_Id": "0",
                "isDeleted": false,
                "creationTime": "2021-03-30T23:46:55.0246412+07:00",
                "id": 244
            },
            {
                "nld_Hoten": "NguyễnVănA",
                "nld_MaNhanVien": "B1",
                "nld_MaSoBhxh": "87651001",
                "nld_GioiTinh": 0,
                "nld_TrangThai": 1,
                "nld_NgaySinhDinhDang": 0,
                "nld_NgaySinh": "0",
                "sameAddress": "false",
                "phongBan_Id": "0",
                "isDeleted": false,
                "creationTime": "2021-03-30T23:46:55.024647+07:00",
                "id": 245
            },
            {
                "nld_Hoten": "NguyễnVănB",
                "nld_MaNhanVien": "B1",
                "nld_MaSoBhxh": "87651002",
                "nld_GioiTinh": 0,
                "nld_TrangThai": 1,
                "nld_NgaySinhDinhDang": 0,
                "nld_NgaySinh": "0",
                "sameAddress": "false",
                "phongBan_Id": "0",
                "isDeleted": false,
                "creationTime": "2021-03-30T23:46:55.0246559+07:00",
                "id": 246
            },
            {
                "nld_Hoten": "NguyễnVănC",
                "nld_MaNhanVien": "B1",
                "nld_MaSoBhxh": "87651003",
                "nld_GioiTinh": 0,
                "nld_TrangThai": 1,
                "nld_NgaySinhDinhDang": 0,
                "nld_NgaySinh": "0",
                "sameAddress": "false",
                "phongBan_Id": "0",
                "isDeleted": false,
                "creationTime": "2021-03-30T23:46:55.0246626+07:00",
                "id": 247
            },
            {
                "nld_Hoten": "NguyễnVănD",
                "nld_MaNhanVien": "B1",
                "nld_MaSoBhxh": "87651004",
                "nld_GioiTinh": 0,
                "nld_TrangThai": 1,
                "nld_NgaySinhDinhDang": 0,
                "nld_NgaySinh": "0",
                "sameAddress": "false",
                "phongBan_Id": "0",
                "isDeleted": false,
                "creationTime": "2021-03-30T23:46:55.0246686+07:00",
                "id": 248
            },
            {
                "nld_Hoten": "NguyễnVănE",
                "nld_MaNhanVien": "B1",
                "nld_MaSoBhxh": "87651005",
                "nld_GioiTinh": 0,
                "nld_TrangThai": 1,
                "nld_NgaySinhDinhDang": 0,
                "nld_NgaySinh": "0",
                "sameAddress": "false",
                "phongBan_Id": "0",
                "isDeleted": false,
                "creationTime": "2021-03-30T23:46:55.0246742+07:00",
                "id": 249
            },
            {
                "nld_Hoten": "NguyễnTiếnVương",
                "nld_MaNhanVien": "V1",
                "nld_MaSoBhxh": "87651001",
                "nld_GioiTinh": 0,
                "nld_TrangThai": 1,
                "nld_NgaySinhDinhDang": 0,
                "nld_NgaySinh": "0",
                "sameAddress": "false",
                "phongBan_Id": "0",
                "isDeleted": false,
                "creationTime": "2021-03-30T23:46:55.0246801+07:00",
                "id": 250
            },
            {
                "nld_Hoten": "ThânVănTài",
                "nld_MaNhanVien": "V2",
                "nld_MaSoBhxh": "87651002",
                "nld_GioiTinh": 0,
                "nld_TrangThai": 1,
                "nld_NgaySinhDinhDang": 0,
                "nld_NgaySinh": "0",
                "sameAddress": "false",
                "phongBan_Id": "0",
                "isDeleted": false,
                "creationTime": "2021-03-30T23:46:55.0246858+07:00",
                "id": 251
            },
            {
                "nld_Hoten": "LêThịDiệp",
                "nld_MaNhanVien": "V3",
                "nld_MaSoBhxh": "87651003",
                "nld_GioiTinh": 0,
                "nld_TrangThai": 1,
                "nld_NgaySinhDinhDang": 0,
                "nld_NgaySinh": "0",
                "sameAddress": "false",
                "phongBan_Id": "0",
                "isDeleted": false,
                "creationTime": "2021-03-30T23:46:55.0246938+07:00",
                "id": 252
            },
            {
                "nld_Hoten": "NgôBảoHân",
                "nld_MaNhanVien": "V1",
                "nld_MaSoBhxh": "3100045",
                "nld_GioiTinh": 0,
                "nld_TrangThai": 1,
                "nld_NgaySinhDinhDang": 0,
                "nld_NgaySinh": "0",
                "sameAddress": "false",
                "phongBan_Id": "0",
                "isDeleted": false,
                "creationTime": "2021-03-30T23:46:55.0247003+07:00",
                "id": 253
            },
            {
                "nld_Hoten": "NgôĐứcHuy",
                "nld_MaNhanVien": "V2",
                "nld_MaSoBhxh": "3100046",
                "nld_GioiTinh": 0,
                "nld_TrangThai": 1,
                "nld_NgaySinhDinhDang": 0,
                "nld_NgaySinh": "0",
                "sameAddress": "false",
                "phongBan_Id": "0",
                "isDeleted": false,
                "creationTime": "2021-03-30T23:46:55.0247064+07:00",
                "id": 255
            },
            {
                "nld_Hoten": "LêThịSen",
                "nld_MaNhanVien": "V3",
                "nld_MaSoBhxh": "c",
                "nld_GioiTinh": 0,
                "nld_TrangThai": 1,
                "nld_NgaySinhDinhDang": 0,
                "nld_NgaySinh": "0",
                "sameAddress": "false",
                "phongBan_Id": "0",
                "isDeleted": false,
                "creationTime": "2021-03-30T23:46:55.0247122+07:00",
                "id": 257
            },
            {
                "nld_Hoten": "Ngô Thị Hoa",
                "nld_MaNhanVien": "c1",
                "nld_MaSoBhxh": "1119876",
                "nld_GioiTinh": 0,
                "nld_TrangThai": 1,
                "nld_NgaySinhDinhDang": 0,
                "nld_NgaySinh": "0",
                "sameAddress": "false",
                "phongBan_Id": "0",
                "isDeleted": false,
                "creationTime": "2021-03-30T23:46:55.0247179+07:00",
                "id": 265
            },
            {
                "nld_Hoten": "Trịnh Thị Duyên",
                "nld_MaNhanVien": "c2",
                "nld_MaSoBhxh": "1119877",
                "nld_GioiTinh": 0,
                "nld_TrangThai": 1,
                "nld_NgaySinhDinhDang": 0,
                "nld_NgaySinh": "0",
                "sameAddress": "false",
                "phongBan_Id": "0",
                "isDeleted": false,
                "creationTime": "2021-03-30T23:46:55.0247238+07:00",
                "id": 266
            },
            {
                "nld_Hoten": "Phạm Thị Huyền",
                "nld_MaNhanVien": "c3",
                "nld_MaSoBhxh": "1119878",
                "nld_GioiTinh": 0,
                "nld_TrangThai": 1,
                "nld_NgaySinhDinhDang": 0,
                "nld_NgaySinh": "0",
                "sameAddress": "false",
                "phongBan_Id": "0",
                "isDeleted": false,
                "creationTime": "2021-03-30T23:46:55.0247323+07:00",
                "id": 267
            },
            {
                "nld_Hoten": "Ngô Thị Hoa",
                "nld_MaNhanVien": "c1",
                "nld_MaSoBhxh": "1119876",
                "nld_GioiTinh": 0,
                "nld_TrangThai": 1,
                "nld_NgaySinhDinhDang": 0,
                "nld_NgaySinh": "0",
                "sameAddress": "false",
                "phongBan_Id": "0",
                "isDeleted": false,
                "creationTime": "2021-03-30T23:46:55.0247385+07:00",
                "id": 271
            },
            {
                "nld_Hoten": "Trịnh Thị Duyên",
                "nld_MaNhanVien": "c2",
                "nld_MaSoBhxh": "1119877",
                "nld_GioiTinh": 0,
                "nld_TrangThai": 1,
                "nld_NgaySinhDinhDang": 0,
                "nld_NgaySinh": "0",
                "sameAddress": "false",
                "phongBan_Id": "0",
                "isDeleted": false,
                "creationTime": "2021-03-30T23:46:55.0247443+07:00",
                "id": 272
            },
            {
                "nld_Hoten": "Phạm Thị Huyền",
                "nld_MaNhanVien": "c3",
                "nld_MaSoBhxh": "1119878",
                "nld_GioiTinh": 0,
                "nld_TrangThai": 1,
                "nld_NgaySinhDinhDang": 0,
                "nld_NgaySinh": "0",
                "sameAddress": "false",
                "phongBan_Id": "0",
                "isDeleted": false,
                "creationTime": "2021-03-30T23:46:55.02475+07:00",
                "id": 273
            },
            {
                "nld_Hoten": "Ngô Hoàng Vân",
                "nld_MaNhanVien": "b2",
                "nld_MaSoBhxh": "11198001",
                "nld_GioiTinh": 0,
                "nld_TrangThai": 1,
                "nld_NgaySinhDinhDang": 0,
                "nld_NgaySinh": "0",
                "sameAddress": "false",
                "phongBan_Id": "0",
                "isDeleted": false,
                "creationTime": "2021-03-30T23:46:55.0247556+07:00",
                "id": 277
            },
            {
                "nld_Hoten": "Nguyễn Thị a",
                "nld_MaNhanVien": "b3",
                "nld_MaSoBhxh": "11198002",
                "nld_GioiTinh": 0,
                "nld_TrangThai": 1,
                "nld_NgaySinhDinhDang": 0,
                "nld_NgaySinh": "0",
                "sameAddress": "false",
                "phongBan_Id": "0",
                "isDeleted": false,
                "creationTime": "2021-03-30T23:46:55.0247613+07:00",
                "id": 278
            },
            {
                "nld_Hoten": "Phạm Thị Hoa",
                "nld_MaNhanVien": "b4",
                "nld_MaSoBhxh": "11198003",
                "nld_GioiTinh": 0,
                "nld_TrangThai": 1,
                "nld_NgaySinhDinhDang": 0,
                "nld_NgaySinh": "0",
                "sameAddress": "false",
                "phongBan_Id": "0",
                "isDeleted": false,
                "creationTime": "2021-03-30T23:46:55.0247698+07:00",
                "id": 279
            },
            {
                "nld_Hoten": "Ngô Hoàng Vân",
                "nld_MaNhanVien": "b2",
                "nld_MaSoBhxh": "11198001",
                "nld_GioiTinh": 0,
                "nld_TrangThai": 1,
                "nld_NgaySinhDinhDang": 0,
                "nld_NgaySinh": "0",
                "sameAddress": "false",
                "phongBan_Id": "0",
                "isDeleted": false,
                "creationTime": "2021-03-30T23:46:55.0247757+07:00",
                "id": 280
            },
            {
                "nld_Hoten": "Nguyễn Thị a",
                "nld_MaNhanVien": "b3",
                "nld_MaSoBhxh": "11198002",
                "nld_GioiTinh": 0,
                "nld_TrangThai": 1,
                "nld_NgaySinhDinhDang": 0,
                "nld_NgaySinh": "0",
                "sameAddress": "false",
                "phongBan_Id": "0",
                "isDeleted": false,
                "creationTime": "2021-03-30T23:46:55.0247814+07:00",
                "id": 281
            }
        ];
        }
        return dataThutuc;
    },[datatablehs,search,DataLeft])
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
                    {props.Datatype == 0 ? <ThutucItems items={dataTable} changeS={props.changeSearchValue} setdata={setDataLeft} dataType={props.Datatype} setDataLeft={props.setDatatype} /> : <NguoiLaoDongItems items={dataTable}/>}
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
