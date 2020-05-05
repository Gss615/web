/**
 * 算法备忘录
 */

// export const Compare = {
//     LESS_THAN: -1,
//     BIGGER_THAN: 1,
//     EQUALS: 0
// };
function defaultCompare(a, b) {
    if (a === b) { // {1}
        return 0;
    }
    return a < b ? -1 : 1; // {2}
}


/**
 *  冒泡排序
 *  思路：比较相邻的两个数组大小，如果左边的大于右边，交换位置，按照数组下标顺序以此向后比较，直到最大的数排在最右边，然后进行下一轮。
 */
function bubbleSort(array) {
    let len = array.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
}

// 改进后的冒泡排序
function modifiedBubbleSort(array) {
    let len = array.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
}


/**
 * 选择排序
 * 思路：找到数组中最小的值放在第一位，接着找到第二小的放在第二位，以此类推。
 */
function selectionSort(array) {
    let len = array.length,
        indexMin
    for (let i = 0; i < len; i++) {
        indexMin = i
        for (let j = 0; j < len; j++) {
            if (array[indexMin] > array[j]) {
                indexMin = j
            }
        }
        if (i !== indexMin) {
            [array[indexMin], array[i]] = [array[i], array[indexMin]]
        }
    }
}

/**
 * 插入排序
 * 思路：每次排序一个数组项，假定第一项已经排序，第二项和它比较，第二项应该插在第一项之前还是保持原位，这样就确定了前两项，第三项依次和第二项、第一项比较，是插入第一项
 * 第二项之前还是保持原位，以此类推。
 */
function insertionSort(array) {
    let len = array.length,
        j,
        temp
    for (let i = 0; i < len; i++) {
        j = i;
        temp = array[i]
        while (j > 0 && array[j - 1] > temp) {
            array[j] = array[j - 1]
            j--
        }
        array[j] = temp
    }
}

/**
 * 归并排序
 * 思路：归并排序是一种分治算法，其思路是将原始数组切分成较小的数组，直到每个小数组只有一个位置，接着将小数组归并成较大的数组，直到最后只有一个排序完毕的大数组
 */
function mergeSort(array) {
    array = mergeSortRec(array)
}

function mergeSortRec(array) {
    let len = array.length
    if (len === 1) return array
    let mid = Math.floor(len / 2),
        left = array.slice(0, mid),
        right = array.slice(mid, length);
    return merge(mergeSortRec(left), mergeSortRec(right))
}

function merge(left, right) {
    let result = [],
        il = 0,
        ir = 0;
    while (il < left.length && ir < right.length) {
        if (left[i] < right[ir]) {
            result.push(left[i++])
        } else {
            result.push(right[ir++])
        }
    }
    while (il < left.length) {
        result.push(left[il++])
    }
    while (ir < right.length) {
        result.push(right[ir++])
    }
    return result
}

console.log('sort---')

/**
 * 递归
 */

// 计算一个数的阶乘

function factorialIterative(number) {
    if (number < 0) return undefined
    let total = 1
    for (let n = number; n > 1; n--) {
        total = total * n
    }
    return total
}

console.log(factorialIterative(4))

function factorial(number) {
    console.trace()

    // debugger
    if (number === 1 || number === 0) {
        return 1
    }
    return number * factorial(number - 1)
}

function fn(n) {
    if (n <= 1) return n
    return fn(n - 1) + fn(n - 2)
}
