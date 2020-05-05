/**
 * 使用JSON的两次转换深拷贝obj
 * 无法拷贝undefined和symbol属性，无法拷贝循环引用对象
 */
function deepClone1(obj) {
    return JSON.parse(JSON.stringify(obj))
}

function simpleDeepClone(obj) {
    const b = Array.isArray(obj) ? [] : {}
    for(const key of Object.keys(obj)){
        const type = typeof obj[key]
        if(type !== 'object' || obj[key] === null){
            b[key] = a[key]
        }else{
            b[key] = simpleDeepClone(obj[key])
        }
    }
}