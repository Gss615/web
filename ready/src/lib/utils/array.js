// 数组去重
/**
 * 1.兼容性问题
 * 2.{}控对象无法去除
 * @param arr
 * @returns {unknown[]}
 */
export function unique(arr) {
    return Array.from(new Set(arr))
}

/**
 * 双层循环
 */
~(function () {
    function unique(arr) {
        for (let i = 0, len = arr.length; i < len; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    arr.splice(j, 1)
                    j--
                }
            }
        }
        return arr
    }
})();

/**
 * 利用indexOf去重
 */
~(function(){
    function unique(arr) {
        if(!Array.isArray(arr)) return console.error('type error')
        let array = []
        for(let i = 0;i<arr.length;i++){
            if(array.indexOf(arr[i]) === -1) array.push(arr[i])
        }
        return array
    }
})()

/**
 * 利用sort排序的方法
 */
~(function(){
    function unique(arr) {
        arr = arr.sort()
        let array = [arr[0]]
        for(let i =1;i<arr.length;i++){
            if(arr[i] !== arr[i-1]){
                array.push(arr[i])
            }
        }
        return array
    }
})();
/**
 * 利用对象的属性不能相同的特点进行去重
 */
~(function(){
    function unique() {
        let array=[],obj={}
        for(let i= 0;i<arr.length;i++){
            if(!obj[arr[i]]){
                array.push(arr[i])
                obj[arr[i]] = 1
            }else {
                obj[arr[i]] ++
            }
        }
    }
})()