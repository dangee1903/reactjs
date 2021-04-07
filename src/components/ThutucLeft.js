import React, {useEffect , useState , useMemo } from 'react';
import Plus from './../assets/images/plus.svg';
import Featch from './../services/FetchHinhthucnop';
const ThutucLeft = (props) =>{
    const [datatablehs, setDatatablehs] = useState([]);
    const [search,setSearch]            = useState(null);
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

    const dataTable = useMemo(()=>{
        let dataThutuc = datatablehs;
        if(search){
            dataThutuc = dataThutuc.filter(
                data => 
                data.thuTuc_Ma.toLowerCase().includes(search.toLowerCase()) ||
                data.thuTuc_Ten.toLowerCase().includes(search.toLowerCase())
            );
        }
        console.log(dataThutuc);
        return dataThutuc;
    },[datatablehs,search])
    return(
        <div className="col-md-3 left">
            <div className="col-12">
                <div className="title">Thủ tục</div>
                    <form action="#">
                        <label >Tìm kiếm</label>
                        <input type="text" placeholder="Điền thủ tục..." onChange={e => setSearch(e.target.value)}/>
                        <button type="submit"><img src={Plus} alt="" /></button>
                    </form>
                <div className="botton">
                    <h2>Tất cả các thủ tục</h2>
                    <ul>
                        {dataTable.map((data,index)=>(
                            <li key={index}><a href="/#">{data.thuTuc_Ma}<br></br>{data.thuTuc_Ten}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
} 
export default ThutucLeft;