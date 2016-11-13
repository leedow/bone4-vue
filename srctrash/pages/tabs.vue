<template>
	<header-layout title='Bone Vue'>
		<header-dock align='left'>
			<a v-link="{ path: '/' }"><Icon type="back"></Icon></a>
		</header-dock>
		Tabs
		<header-dock align='right'>
			<a href="">Github</a>
		</header-dock>
		<layout-box slot="addon">
			<tabs-horizon>
				<tabs-item-horizon current=true size=3>Item1</tabs-item-horizon>
				<tabs-item-horizon size=3>Item2</tabs-item-horizon>
			</tabs-horizon>
		</layout-box>
	</header-layout>
	<layout-main addon=true>
		<layout-box>
			<tabs-horizon>
				<tabs-item-horizon current=true size=3>Item1</tabs-item-horizon>
				<tabs-item-horizon size=3>Item2</tabs-item-horizon>
			</tabs-horizon>
		</layout-box>
		<layout-box m="1000">
			<tabs-vertical>
				<tabs-item-vertical arrow=true>
					<a v-link="{ path: '/' }">Tabs</a>
				</tabs-item-vertical>
				<tabs-item-vertical arrow=true iconcss=true icon='home'>
					<a v-link="{ path: '/' }">Tabs</a>
				</tabs-item-vertical>
			</tabs-vertical>
		</layout-box>		
		<layout-box m="1000" p="1111">
			<div class="bo-tabmenu-box">
				<menu-icon type="2" icon-type="people" title="Title" ></menu-icon>
				<menu-icon type="2" icon-type="cart" title="Title"></menu-icon>
			</div>
		</layout-box>	
		<layout-box m="1000" p="1111">
			<div class="bo-menu-box">
				<menu-icon  icon-type="people" title="Title"></menu-icon>
			</div>
		</layout-box>	
		<div class="bo-layout-menu">
			<div class="bo-tabmenu-box" style="padding:3px 0">
				<menu-icon type="2" size="sm" icon-type="people" title="购物车" tip="99+" ></menu-icon>
				<menu-icon type="2" size="sm" icon-type="cart" title="Title"></menu-icon>
			</div>
		</div>
	</layout-main>
</template>

<script>
import {HeaderLayout, HeaderDock} from '../components/header'
import {LayoutBox, LayoutMain} from '../components/layouts'
import {TabsHorizon, TabsItemHorizon, TabsVertical, TabsItemVertical} from '../components/tabs'
import {Icon} from '../components/common'
import {MenuIcon} from '../components/menu'
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
		MenuIcon
	},
	data () {
		return {
			 
		}
	}
}
</script>
