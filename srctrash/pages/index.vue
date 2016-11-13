<template>
	<header-layout title='Bone Vue'>
		<header-dock align='left'>
			<a v-link="{ path: '/' }"><Icon type="back"></Icon></a>
		</header-dock>
		Bone Vue
		<header-dock align='right'>
			<a href="">Menu</a>
		</header-dock>
	</header-layout>
	<layout-main>
		<layout-box>
			<tabs-vertical>
				<tabs-item-vertical arrow=true>
					<a v-link="{ path: '/tabs' }">菜 单</a>
				</tabs-item-vertical>
				<tabs-item-vertical arrow=true>
					<a v-link="{ path: '/buttons' }">按 钮</a>
				</tabs-item-vertical>
				<tabs-item-vertical arrow=true>
					<a v-link="{ path: '/form' }">表 单</a>
				</tabs-item-vertical>
				<tabs-item-vertical arrow=true>
					<a v-link="{ path: '/counter' }">增强输入组件</a>
				</tabs-item-vertical>
				<tabs-item-vertical arrow=true>
					<a v-link="{ path: '/list' }">下拉刷新列表</a>
				</tabs-item-vertical>
				 
				<tabs-item-vertical arrow=true>
					<a v-link="{ path: '/menu' }">侧边菜单</a>
				</tabs-item-vertical>
				<tabs-item-vertical arrow=true>
					<a v-link="{ path: '/shopping' }">购物车Dock</a>
				</tabs-item-vertical>
				<tabs-item-vertical arrow=true>
					<a v-link="{ path: '/productlist2' }">商品列表2</a>
				</tabs-item-vertical>
				<tabs-item-vertical arrow=true>
					<a v-link="{ path: '/scrollheader' }">滚动变色的header</a>
				</tabs-item-vertical>
				<tabs-item-vertical arrow=true>
					<linker href="/global.html" record=true>返回历史页面</linker>
				</tabs-item-vertical>
				<tabs-item-vertical arrow=true>
					<a v-link="{ path: '/swipe' }">走马灯</a>
				</tabs-item-vertical>

				<tabs-item-vertical arrow=true>
					<a v-link="{ path: '/dialog' }">对话框</a>
				</tabs-item-vertical>
			</tabs-vertical>
		</layout-box>			
	</layout-main>
	
</template>

<script>
import {HeaderLayout, HeaderDock} from '../components/header'
import {LayoutBox, LayoutMain} from '../components/layouts'
import {TabsHorizon, TabsItemHorizon, TabsVertical, TabsItemVertical} from '../components/tabs'
import {Icon, Linker} from '../components/common'
export default {
	components:{
		HeaderLayout, 
		HeaderDock,
		LayoutMain,
		LayoutBox,
		TabsHorizon,
		TabsItemHorizon,
		TabsVertical,
		TabsItemVertical,
		Icon,
		Linker
	},
	data () {
		return {
			test: 'test'
		}
	}
}
</script>
