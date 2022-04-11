import CryptoJS from "crypto-js"

/**
 * 判断数据格式
 */
export const getObjType = (obj: any) => {
    var toString = Object.prototype.toString
    var map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    }
    if (obj instanceof Element) {
        return 'element'
    }
    return map[toString.call(obj)]
}
/**
 *加密处理
 */
export const encryption = (params: any) => {
    // console.log('-----------------', params)
    let {
        data,
        type,
        param,
        key
    } = params
    const result = JSON.parse(JSON.stringify(data))
    if (type === 'Base64') {
        param.forEach(ele => {
            result[ele] = btoa(result[ele])
        })
    } else {
        param.forEach(ele => {
            var data = result[ele]
            key = CryptoJS.enc.Latin1.parse(key)
            var iv = key
            // 加密
            var encrypted = CryptoJS.AES.encrypt(
                data,
                key, {
                    iv: iv,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.ZeroPadding
                })
            result[ele] = encrypted.toString()
        })
    }
    return result
}

/**
 * 对象深拷贝
 */
export const deepClone = (data: any) => {
    var type = getObjType(data)
    var obj
    if (type === 'array') {
        obj = []
    } else if (type === 'object') {
        obj = {}
    } else {
        // 不再具有下一层次
        return data
    }
    if (type === 'array') {
        for (var i = 0, len = data.length; i < len; i++) {
            obj.push(deepClone(data[i]))
        }
    } else if (type === 'object') {
        for (var key in data) {
            obj[key] = deepClone(data[key])
        }
    }
    return obj
}

// 用户名加密
export const usernameCropy = (str: string) => {
    var key = CryptoJS.enc.Latin1.parse('secloudsecloudse')
    var iv = CryptoJS.enc.Latin1.parse('secloudsecloudse')
    return CryptoJS.AES.encrypt(str, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding
    }).ciphertext.toString(CryptoJS.enc.Base64);
}

/**
 * 表单序列化
 * @param data
 */
export const serialize = (data: any) => {
    let list:any = []
    Object.keys(data).forEach(ele => {
        list.push(`${ele}=${data[ele]}`)
    })
    return list.join('&')
}

/**
 * 判断是否为空
 */
export function validatenull(val:any) {
    if (typeof val === "boolean") {
        return false;
    }
    if (typeof val === "number") {
        return false;
    }
    if (val instanceof Array) {
        if (val.length == 0) return true;
    } else if (val instanceof Object) {
        if (JSON.stringify(val) === "{}") return true;
    } else {
        if (
            val == "null" ||
            val == null ||
            val == "undefined" ||
            val == undefined ||
            val == ""
        )
            return true;
        return false;
    }
    return false;
}
