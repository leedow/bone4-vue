<template>
	<header-layout title='Bone Vue'>
		<header-dock align='left'>
			<a v-link="{ path: '/' }"><Icon type="back"></Icon></a>
		</header-dock>
		List
		<header-dock align='right'>
			<a href="">Github</a>
		</header-dock>
	</header-layout>
	<layout-main>
		 <swipe counter=2>
		 	<div>
				<img src="http://localhost:3001/img/banner/test.jpg" alt="">
		 	</div>
		 	<div><img src="http://localhost:3001/img/banner/test.jpg" alt=""></div>
		 </swipe>
	</layout-main>
</template>

<script>
import {HeaderLayout, HeaderDock} from '../components/header'
import {LayoutBox, LayoutMain, LayoutSideMenu, GridRow, GridCol} from '../components/layouts'
import {TabsHorizon, TabsItemHorizon, TabsVertical, TabsItemVertical} from '../components/tabs'
import {Btn} from '../components/buttons'
import {Icon} from '../components/common'
import {FormGroup, FormInput} from '../components/form'
import {List, ListItem} from '../components/list'
import Swipe from '../components/assemble/swipe.vue'


export default {
	components:{
		HeaderLayout, 
		HeaderDock,
		LayoutMain,
		LayoutBox,
		LayoutSideMenu,
		TabsHorizon,
		TabsItemHorizon,
		TabsVertical,
		TabsItemVertical,
		Btn,
		Icon,
		FormGroup,
		FormInput,
		List,
		ListItem,
		Swipe
	},
	ready:function(){
	 
	},
	methods:{
		 
	},
	events: {
		 
	},
	data () {
		return {
			data: []
		}
	}
}
</script>
