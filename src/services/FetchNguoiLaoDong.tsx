import FetchAPI from "./FetchAPI";
import { TypeMethodConstantEnum } from "../helpers/MethodAPIConstant";
const PREFIX_URL = "nguoilaodong/all";
class FetchNguoiLaoDong extends FetchAPI {
    public async getAll(data: any) {        
        let url = `${PREFIX_URL}`;        
        return await this.request(url, { data }, TypeMethodConstantEnum.POST);
    }
}
export default FetchNguoiLaoDong;
