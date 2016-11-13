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
		<layout-box>
		<list v-ref:mylist @list-scroll="loading">
			<list-item type="2" v-for="item in data" >
				<product2></product2>
			</list-item>		 
		</list> 	
		</layout-box>
	</layout-main>
</template>

<script>
import {HeaderLayout, HeaderDock} from '../components/header'
import {LayoutBox, LayoutMain, LayoutSideMenu, GridRow, GridCol} from '../components/layouts'
import {TabsHorizon, TabsItemHorizon, TabsVertical, TabsItemVertical} from '../components/tabs'
import {Btn} from '../components/buttons'
import {Icon} from '../components/common'
import {FormGroup, FormInput, FormCounter} from '../components/form'
import {List, ListItem} from '../components/list'
import {Product2} from '../jishibao'


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
		Product2,
		FormCounter
	},
	ready:function(){
		this.loading();
		//console.log(this.data)
	},
	methods:{
		loading: function(){
			var mylist = this.$refs.mylist;
			var _this = this;
			$.ajax({
				url: '/dist/data.json',
				type: 'get',
				success: function(data){
					console.log('ajaxing success')
					mylist.addData(data, 'name');
					console.log('Data size:' + mylist.getTotal());
					console.log('Page size:' + mylist.pageSize);
					console.log('Pages:' + mylist.getPages())
					_this.data = mylist.getData();
				}
			})
		}
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
