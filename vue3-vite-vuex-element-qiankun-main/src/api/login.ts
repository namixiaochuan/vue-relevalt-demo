import request from "../utils/request";

/**
 * 登录方法
 * @param username
 * @param password
 * @param code
 * @param randomStr
 * @param isCrypto
 */
export const loginByUsername2 = (data:any) => {
    return request({
        url: '/auth/oauth/token',
        method: 'post',
        data
    })
}
export const loginByUsername = (username: string, password: string, code: string = '', randomStr: string, isCrypto: boolean) => {
    const grant_type = 'password'
    let requestData: any = {
        url: '/auth/oauth/token',
        headers: {
            isToken: false,
            'TENANT_ID': '1',
            'Authorization': 'Basic c2VjbG91ZDpzZWNsb3Vk',
        },
        method: 'post',
    }
    if (isCrypto) {
        const formdata = new URLSearchParams();
        formdata.append('username', username)
        formdata.append('password', password)
        formdata.append('code', code)
        formdata.append('randomStr', randomStr)
        formdata.append('grant_type', grant_type)
        requestData.data = formdata
        requestData.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    } else {
        requestData.params = {username, password, code, randomStr, grant_type}
    }
    return request(requestData)
}

export function GetMenu(data: string = '') {
    return request({
        url: `/admin/menu?${data ? ('roleGroup=' + data + '') : ''}`,
        method: 'get'
    })
}

export const logout = () => {
    return request({
        url: '/auth/token/logout',
        method: 'post'
    })
}

// export const hitokoto = (data = {"username":"12312","password":"3123123","isRemenber":false}) => {
//     console.log('================================')
//     return request({
//         url: '/api/user/login',
//         method: 'post',
//         data
//     })
// }
