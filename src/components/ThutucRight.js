import React, {useEffect , Component , useState } from 'react';
import Dot from './../assets/images/doticon.svg';
import Plus from './../assets/images/plus.svg';
import FeatchThutuc from '../services/FetchThutuc';
import { render } from '@testing-library/react';
const ThutucRight = (props) =>{
    const [datatablehs, setDatatablehs] = useState(null);
    const [data, setData] = useState({content:[]});
    const abc = new FeatchThutuc();
    useEffect( () => {
        let data = JSON.stringify({
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
        data.then( (data) => {  });
        if(data != []){setDatatablehs(data)}else{ setDatatablehs([]);}
    },[]);
    return(
        <div className="col-md-9 right">
            <div className="col-12">
                <div className="pagination">
                    <div className="left">
                        <h2>Danh sách người lao động</h2>
                    </div>
                    <div className="right">
                        <p>Trang</p>
                        <ul>
                            <li><a href="/#">&lt;</a></li>
                            <li><a href="/#">1</a></li>
                            <li><a href="/#">2</a></li>
                            <li><a href="/#">3</a></li>
                            <li><a href="/#">&gt;</a></li>
                        </ul>
                        <p>Trên 369</p>
                    </div>
                </div>
                <form action="#">
                    <select name="slct" id="slct" defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled>Chọn kỳ kê khai</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </select>
                    <select name="slct" id="slct" defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled>Năm</option>
                        <option value={1}>2020</option>
                        <option value={2}>2021</option>
                        <option value={3}>2022</option>
                    </select>
                    <select name="slct" id="slct" defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled>Trạng thái ký</option>
                        <option value={1}>Tất cả</option>
                        <option value={2}>Chưa gửi</option>
                    </select>
                    <select name="slct" id="slct" defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled>Trạng gửi BHXH</option>
                        <option value={1}>Tất cả</option>
                        <option value={2}>Chưa gửi</option>
                    </select>
                    <div className="form__wrap">
                        <label >Tìm kiếm</label>
                        <input type="text" placeholder="Điền thông tin..." />
                    </div>
                    <button type="submit"><img src={Plus} alt="" /></button>
                </form>
                <div className="table" style={{overflow: 'auto'}}>
                    <table>
                        <thead>
                            <tr>
                                <th>STT<i><img src="img/arrowTop.svg" alt="" /></i></th>
                                <th>Số<i><img src="img/arrowTop.svg" alt="" /></i></th>
                                <th>Mã thủ tục<i><img src="img/arrowTop.svg" alt="" /></i></th>
                                <th >Tên thủ tục<i><img src="img/arrowTop.svg" alt="" /></i></th>
                                <th >Kỳ kê khai<i><img src="img/arrowTop.svg" alt="" /></i></th>
                                <th >Trạng thái ký<i><img src="img/arrowTop.svg" alt="" /></i></th>
                                <th >Trạng thái gửi BH<i><img src="img/arrowTop.svg" alt="" /></i></th>
                                <th >Ngày tạo<i><img src="img/arrowTop.svg" alt="" /></i></th>
                                <th >Hoạt động</th>
                            </tr>
                        </thead>
                        {showData(datatablehs)}
                    </table>
                </div>
            </div>
        </div>
    )
    function showData(data){
        let xhtml = "";
        console.log(data);
        if( data.content !== null && data.length > 0 ){
            xhtml = data.map( (item,index) => {
                console.log(item);
                return <tr><td >{item.thuTuc_Ma}</td></tr>
            })
        }
        return <tbody>{xhtml}</tbody>
    }
} 
export default ThutucRight;