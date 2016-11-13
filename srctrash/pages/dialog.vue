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
		<layout-box p="1111">
			<btn type="primary" blank=true @btn-click="open"  name="打开弹窗"></btn>
			<btn type="primary" blank=true @btn-click="notice" name="弹出提示"></btn>
		</layout-box>
		 
		 <dialog :show.sync="show" @dialog-ok="ok" @dialog-no="no"></dialog>
		 <notice :show.sync="showNotice" content="这是一个提示信息"></notice>
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
import Dialog from '../components/assemble/dialog.vue'
import Notice from '../components/assemble/notice.vue'


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
		Dialog,
		Notice
	},
	ready:function(){
	 
		//console.log(this.data)
	},
	methods:{
	 	open: function(){
	 		this.show = true;
	 	},
	 	notice: function(){
	 		this.showNotice = true;
	 	},
	 	ok: function(){
	 		this.show = true;
	 	},
	 	no: function(){
	 		this.show = false;
	 	}
	},
	events: {
		 
	},
	data () {
		return {
			data: [],
			show: false,
			showNotice: false
		}
	}
}
</script>
