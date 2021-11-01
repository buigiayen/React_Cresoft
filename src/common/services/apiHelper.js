
import apiEx from "../baseServices/connec_services";
export const loginCTP = (data) =>{
    return apiEx.API("Login_CTP", "POST", data)
}