import service from "@/utils/request";

export default {
  /**
   * 获取验证码
   */
  GetSms(data) {
    return service.request({
        method: "post",
        url: "/getSms/",
        data
    })
  },

  /**
   * 获取用户角色
  */
  getUserRole(data = {}) {
    return service.request({
        method: "post",
        url: "/userRole/",
        data
    })
  }
}