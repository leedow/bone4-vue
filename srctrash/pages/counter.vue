<template>
	<header-layout title='Bone Vue'>
		<header-dock align='left'>
			<a v-link="{ path: '/' }"><Icon type="back"></Icon></a>
		</header-dock>
		Form
		<header-dock align='right'>
			<a href="">Github</a>
		</header-dock>
	</header-layout>
	<layout-main>
		<h3 class="bo-box-title">数字选择（样式1）</h3>
		<layout-box p='1111'>
			<form-group type='blank'>
				<grid-row p="0010">		
				<form-counter v-ref:mycountera type="2" max=5 min=2 val=3></form-counter>
				</grid-row>
				<box-tool>	
					<btn type="primary" blank=true size="sm" name="回滚" @btn-click="rollback(1)"></btn>
					<btn type="primary" blank=true size="sm" name="禁＋" @btn-click="disabler(1)"></btn>
					<btn type="primary" blank=true size="sm" name="禁－" @btn-click="disablel(1)"></btn>
				</box-tool>
			</form-group>
			<div class="bo-clear"></div>
		</layout-box>	
		<h3 class="bo-box-title">数字选择（样式2）</h3>
		<layout-box p='1111'>
			<form-group type='blank'>
				<grid-row p="0010">			
				<form-counter v-ref:mycounter max=5 min=2 val=3></form-counter>
				</grid-row>
			</form-group>
			<box-tool>	
				<btn type="primary" blank=true size="sm" name="回滚" @btn-click="rollback(0)"></btn>
				<btn type="primary" blank=true size="sm" name="禁＋" @btn-click="disabler(0)"></btn>
				<btn type="primary" blank=true size="sm" name="禁－" @btn-click="disablel(0)"></btn>
			</box-tool>
			<div class="bo-clear"></div>
		</layout-box>	
		<h3 class="bo-box-title">打 星</h3> 
		<layout-box p='1111'>
			<form-group type='blank'>		
				<form-stars val=2></form-stars>
			 
			 <form-stars val=2 size='sm'></form-stars>
			</form-group>
			<div class="bo-clear"></div>
		</layout-box> 
		<layout-box m="1000" p='1111'>
			<form-group type='blank'>		
				<form-check></form-check>
				<form-check checked=true></form-check>
			</form-group>
			<div class="bo-clear"></div>
		</layout-box> 
	</layout-main>
</template>

<script>
import {HeaderLayout, HeaderDock} from '../components/header'
import {LayoutBox,BoxTool, LayoutMain, GridRow, GridCol} from '../components/layouts'
import {TabsHorizon, TabsItemHorizon, TabsVertical, TabsItemVertical} from '../components/tabs'
import {Btn} from '../components/buttons'
import {Icon} from '../components/common'
import {FormGroup, FormInput, FormSelect, FormCode, FormCounter, FormStars, FormCheck} from '../components/form'


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
		Btn,
		Icon,
		FormGroup,
		FormInput,
		FormSelect,
		GridRow,
		GridCol,
		FormCode,
		FormCounter,
		FormStars,
		FormCheck,
		BoxTool
	},
	methods:{
		submit: function(){
		 	//alert('submit')
			this.$broadcast('form-verify', '');
			if(this.$refs.myform.pass){
				console.log('sending data')
				console.log(this.$refs.myform.data)
			} else {
				this.$refs.myform.setNotice('账号密码不正确')
				console.log('data wrong')
			}
			
		},
		rollback: function(val){
			this.counter[val].rollback();
		},
		disablel: function(val){
			this.counter[val].setLbtn(false);
		},
		disabler: function(val){
 
			this.counter[val].setRbtn(false);
		}
	},
	ready: function(){
		this.counter[0] = this.$refs.mycounter;
		this.counter[1] = this.$refs.mycountera;
	},
	events: {
		'input-wrong': function(){
			//alert('cuowu')
		}
	},
	data () {
		return {
			  select: [{
			  		val: '1',
			  		text: '1111',
			  		selected: 'selected'
			  },{
			  		val: '1',
			  		text: '22222'
			  }],
			  counter: []
		}
	}
}
</script>
