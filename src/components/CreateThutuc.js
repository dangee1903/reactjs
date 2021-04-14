import React, {useState } from 'react';
import Plus from './../assets/images/plus.svg';
import Filter from './../components/Filter';
const CreateThutuc = (props , setDatatype , Datatype) =>  {
    const textRed = {color: 'red'}
    return (
        <div className="col-md-9 right">
            <div className="col-12">
                <div className="pagination">
                    <div className="left">
                        <h2>Danh sách lao động tham gia BHXH, BHYT, BHTN, BHTNLĐ, BNN</h2>
                    </div>
                </div>
                <div action="#" className="creteThutucfrom">
                    <div className="form__wrap">
                        <label >Số tờ khai</label>
                        <input disabled type="text" placeholder="630" name="setSearch" />
                    </div>
                    <button style={{width:"auto!important"}}>Lưu</button>
                </div>
                <div className="table CreateThutuc" style={{overflow: 'auto'}}>
                    <table>
                        <thead>
                            <tr>
                                <th rowSpan="3">
                                    <label className="labelCheckbox">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </th>
                                <th rowSpan="3">STT</th>
                                <th rowSpan="3">Họ và tên</th>
                                <th rowSpan="3">Mã số BHXH</th>
                                <th rowSpan="3">Cấp bậc, chức vụ, chức danh nghề <span style={textRed}> *</span></th>
                                <th rowSpan="3">Nơi làm việc <span style={textRed}> *</span></th>
                                <th rowSpan="3">Thời điểm đơn vị bắt đầu đóng BHXH (tháng/năm)</th>
                                <th rowSpan="3">Thời điểm đơn vị kết thúc đóng BHXH (tháng/năm)</th>
                                <th rowSpan="3">Phương án điều chỉnh <span style={textRed}> *</span></th>
                                <th colSpan="6">Tiền lương <span style={textRed}> *</span></th>
                                <th rowSpan="3">Ghi chú</th>
                                <th rowSpan="3">Ngày tháng năm sinh<span style={textRed}> *</span></th>
                                <th rowSpan="3">Giới tính</th>
                                <th rowSpan="3">Số CMND/HC/TCC</th>
                                <th colSpan="4">Vị trí việc làm</th>
                                <th colSpan="2" rowSpan="2">Ngành nghề nặng nhọc độc hại</th>
                                <th colSpan="5">Loại và hiệu lực hợp đồng lao động</th>
                                <th rowSpan="3">Tỷ lệ đóng <span style={textRed}> *</span></th>
                                <th rowSpan="3">Tính lãi</th>
                                <th rowSpan="3">Có sổ BHXH</th>
                                <th rowSpan="3">Mức hưởng BHYT</th>
                                <th rowSpan="3">Mã vùng sinh sống</th>
                                <th rowSpan="3">Mã vùng lương tối thiểu</th>
                            </tr>
                            <tr>
                                <th rowSpan="2">Hệ số/Mức lương <span style={textRed}> *</span></th>
                                <th colSpan="5">Phụ cấp</th>
                                <th rowSpan="2">Nhà quản lý (từ ngày - đến ngày)</th>
                                <th rowSpan="2">Chuyên môn kỹ thuật bậc cao (từ ngày - đến ngày)</th>
                                <th rowSpan="2">Chuyên môn kỹ thuật bậc trung (từ ngày - đến ngày)</th>
                                <th rowSpan="2">Khác (từ ngày - đến ngày)</th>
                                <th rowSpan="2">Ngày bắt đầu HĐLĐ Không xác định thời hạn</th>
                                <th colSpan="2">Hiệu lực HĐLĐ xác định thời hạn</th>
                                <th colSpan="2">Hiệu lực HĐLĐ Khác (Dưới 1 tháng thử việc)</th>
                            </tr>
                            <tr>
                                <th>Chức vụ<span style={textRed}> *</span></th>
                                <th>Thâm niên Vk (%) <span style={textRed}> *</span></th>
                                <th>Thâm niên nghề (%) <span style={textRed}> *</span></th>
                                <th>Phụ cấp lương <span style={textRed}> *</span></th>
                                <th>Các khoản bổ sung <span style={textRed}> *</span></th>
                                <th>Ngày bắt đầu</th>
                                <th>Ngày kết thúc</th>
                                <th>Ngày bắt đầu</th>
                                <th>Ngày kết thúc</th>
                                <th>Ngày bắt đầu</th>
                                <th>Ngày kết thúc</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>    
                    </table>
                </div>
            </div>
        </div>
    );
}

export default CreateThutuc;