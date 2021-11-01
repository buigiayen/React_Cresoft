import axios from "axios";
import { openNotificationWithIcon } from "../commom_services/logger";
import { URL } from "../baseServices/url_backend";
import {message} from "antd";
export default class apiEx {
    static async API(url, method, data = null) {
        return await axios({
            url: URL.Dev + url,
            method: method,
            data: data,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': "*"
            },

        }).then(rs => {
            openNotificationWithIcon(rs.data[0].code === 200 ? "success" : "warning", rs.data[0].messenger);
            return rs.data[0].data;
        }).catch(log => {
            message.error('không thể kết nối tới máy chủ!');
            return log
        })
    }

  
}


