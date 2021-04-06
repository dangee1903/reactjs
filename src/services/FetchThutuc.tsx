import FetchAPI from "./FetchAPI";
import { TypeMethodConstantEnum } from "../helpers/MethodAPIConstant";
const PREFIX_URL = "thutuc/find";
class FetchHinhthucnop extends FetchAPI {
    public async getAll(data: any) {        
        let url = `${PREFIX_URL}`;
        return await this.request(url, { data }, TypeMethodConstantEnum.POST);
    }
}
export default FetchHinhthucnop;
