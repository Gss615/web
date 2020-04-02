<template>
    <a-layout>
        <a-layout-sider :trigger="null" collapsible v-model="collapsed">
            <a-menu
                    :defaultSelectedKeys="[1]"
                    :defaultOpenKeys="['sub1']"
                    mode="inline"
                    theme="dark"
                    :inlineCollapsed="collapsed"
            >
                <template v-for="(item,i) in menuData">
                    <a-menu-item v-if="!item.children" :key="item.key"  @click="handleClick(item,arguments)">
                        {{ item.title }}
                    </a-menu-item>
                    <a-sub-menu v-else :key="'sub'+i">
                        <span slot="title"><a-icon type="mail"/><span>{{ item.title }}</span></span>
                        <a-menu-item
                                v-for="child in item.children"
                                @click="handleClick(child,arguments)"
                                :key="child.key">
                            {{ child.title }}
                        </a-menu-item>
                    </a-sub-menu>
                </template>

<!--                <a-sub-menu key="sub2">-->
<!--                    <span slot="title"><a-icon type="appstore"/><span>Navigation Two</span></span>-->
<!--                    <a-menu-item key="9">Option 9</a-menu-item>-->
<!--                    <a-menu-item key="10">Option 10</a-menu-item>-->
<!--                    <a-sub-menu key="sub3" title="Submenu">-->
<!--                        <a-menu-item key="11">Option 11</a-menu-item>-->
<!--                        <a-menu-item key="12">Option 12</a-menu-item>-->
<!--                    </a-sub-menu>-->
<!--                </a-sub-menu>-->
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background-color: #fff">
                <h1>前端面试</h1>
            </a-layout-header>
            <a-layout-content style="min-height: calc(100vh - 64px)">
                <router-view/>
            </a-layout-content>
        </a-layout>
    </a-layout>

</template>
<script>
    export default {
        name: 'Layout',
        data: () => {
            return {
                collapsed: false,
                menuData: [
                    {title: 'todo', key: 1, router: 'todo'},
                    {title: 'css', children: [{title: '布局', key: 2, router: 'css'}]},
                    {title: 'javascript', children: [{title: '布局', key: 3}]}

                ]
            }
        },
        methods: {
            handleClick: function (go) {
                console.log(go.router)
                // console.log(this.$router)
                this.$router.push({name: go.router})
                console.log('点击菜单')
            }
        }
    }
</script>


