import React, {useEffect , Component , useState } from 'react';
import Dot from './../assets/images/doticon.svg';
import Plus from './../assets/images/plus.svg';
import Featch from './../services/FetchHinhthucnop';
const ThutucLeft = (props) =>{
    const [datatablehs, setDatatablehs] = useState(null);
    const abc = new Featch();
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
    return(
        <div className="col-md-3 left">
            <div className="col-12">
                <div className="title">Thủ tục</div>
                    <form action="#">
                        <label >Tìm kiếm</label>
                        <input type="text" placeholder="Điền thủ tục..." />
                        <button type="submit"><img src={Plus} alt="" /></button>
                    </form>
                <div className="botton">
                    <h2>Tất cả các thủ tục</h2>
                    {showData(datatablehs)}
                </div>
            </div>
        </div>
    )
    function showData(data){
        let xhtml = "";
        if( data != undefined && data.length > 0 ){
            xhtml = data.map( (item,index) => {
                return <li key={index}><a href="/thutuc/:sothutuc">{item.thuTuc_Ma}<br></br>{item.thuTuc_Ten}</a></li>
            })
        }
        return <ul>{xhtml}</ul>
    }
} 
export default ThutucLeft;