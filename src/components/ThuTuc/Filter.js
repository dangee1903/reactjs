import React, {useState } from 'react';
import Plus from './../../assets/images/plus.svg';
const Filter = ({onSearch,onGuiBH,item}) =>  {
    const [search, setSearch] = useState("");
    const [guiBH, setGuiBH] = useState("");
    const onInputChange = data => {
        setSearch(data);
        onSearch(data);
    };
    const ChangeGetBH = data => {
        onGuiBH(data);
        setGuiBH(data);
    }
    return (
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
            <select id="slct" defaultValue={'DEFAULT'} onChange={e => ChangeGetBH(e.target.value)} name="setGuiBH"> 
                <option value="DEFAULT" disabled>Trạng thái gửi BH</option>
                <option value={3}>Tất cả</option>
                <option value={0}>Chưa gửi</option>
                <option value={1}>Đã gửi</option>
            </select>
            <div className="form__wrap">
                <label >Tìm kiếm</label>
                <input type="text" placeholder="Điền thông tin..." onChange={e => onInputChange(e.target.value)} value={search} name="setSearch" />
            </div>
            <button type="submit"><img src={Plus} alt="" /></button>
        </form>
    );
}

export default Filter;