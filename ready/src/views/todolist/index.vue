<template>
    <section>
        <h1>标签</h1>
        <p id="p"></p>
        <button @click="data1 ++">点击</button>
        <blockquote>引sss用内容</blockquote>
    </section>
</template>
<script>

    export default {
        name: 'TodoList',
        data() {
            return {
                data1:1
            }
        },
        created() {
            // console.log('----sssss初始化', this.$util.getOS())
        },
        mounted() {
            let $p = document.getElementById('p')
            // $p.appendChild(document.createTextNode('test'))
        },
        methods: {

        },
        watch:{
            data1:()=>{
                console.log(this)
            }
        }
    }

    function throttle(fun, delay) {
        let last, deferTimer
        return function (args) {
            let that = this
            let _args = arguments
            let now = +new Date()
            if (last && now < last + delay) {
                clearTimeout(deferTimer)
                deferTimer = setTimeout(() => {
                    last = now
                    fun.apply(that, _args)
                }, delay)
            } else {
                last = now
                fun.apply(that, _args)
            }

        }
    }
</script>