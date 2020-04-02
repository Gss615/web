/**
 * `fetch`请求
 * @param {'GET' | 'POST'} method  请求方法：这里只枚举了常用的两种
 * @param url 请求路径
 * @param data 请求参数对象
 * @param timeout
 * @returns {Promise<unknown>}
 */
function theFetch(method, url, data = {}, timeout = 5000) {
    let dataPost = null;
    let dataGet = '';
    switch (method) {
        case 'POST':
            dataPost = JSON.stringify(data);
            break;
        case 'GET':
            for (const key in data) {
                dataGet += `&${key}=${data[key]}`;
            }
            if (dataGet) {
                dataGet = '?' + dataGet.slice(1)
            }
            break;
    }
    return new Promise((resolve, reject) => {
        fetch(url + dataGet, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: dataPost
        }).then(response => {
            return response.json()
        }).then(res => {
            resolve(res)
        }).catch(error => {
            reject(error)
        });
        setTimeout((reject.bind(this, 'fetch is timeout'), timeout))
    })
}

/**
 * 封装ajax
 * @param param
 */
function ajax(param) {
    if (typeof param !== 'object') return console.error('ajax 缺少请求参数');
    if (!param.method) return console.error('ajax 缺少请求类型 GET 或者 POST');
    if (!param.url) return console.error('ajax 缺少请求 url');
    if (typeof param.data !== 'object') return console.error('请求参数类型必须为 object');
    const XHR = new XMLHttpRequest();
    let {method,url} = param;
    const overtime = typeof param.overTime === 'number' ? param.overTime : 0;
    let dataPost = null;
    let dataGet = '';

    switch (method) {
        case 'POST':
            dataPost = JSON.stringify(param.data);
            break;
        case 'GET':
            for(const key in param.data){
                dataGet += '&' + key + '=' + param.data[key];
            }
            if(dataGet){
                dataGet = '?' + dataGet.slice(1);
                url += dataGet
            }
            break;
    }
    XHR.onreadystatechange = function () {
        if(XHR.readyState !== 4) return;
        if(XHR.status === 2 || XHR.status === 304){
            if(typeof  param.success === "function") param.success(JSON.parse(XHR.response))
        }else{
            if(typeof param.fail === 'function') param.fail(XHR)
        }
    }
    // 判断请求进度
    if(param.progress){
        XHR.addEventListener('progress',param.progress,false)
    }
    XHR.open(method,url,true)
    if(param.file){
        dataPost = param.file
    }else{
        XHR.setRequestHeader('Content-Type','application/json')
    }
    if(overtime>0){
        XHR.timeout = overtime
        XHR.ontimeout = function () {
            console.warn('ajax 请求超时！');
            XHR.abort();
            if(typeof param.timeout === 'function') param.timeout(XHR)
        }
    }
    XHR.send(dataPost)
}