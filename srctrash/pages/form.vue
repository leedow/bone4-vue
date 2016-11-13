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
		<layout-box>
			<form-group type='blank'>		
				<form-input place-holder="请输入账号" icon="people" size="lg"></form-input>
				<form-input place-holder="请输入密码" type="password" icon="lock" size="lg"></form-input>
			</form-group>
		</layout-box>	
		<layout-box m="1000">
			<form-group type='blank' v-ref:myform>			
				<form-input place-holder="请输入手机号" name="phone" label="手机号" format='phone' size="lg"></form-input>
				<form-code 	name="code"
							label="验证码"
							place-holder="输入验证码"></form-code>
				<form-input name="number"
							label="整 数"
							place-holder="输入整数" format="int"></form-input>
				<form-input 	name="number"
							label="小 数"
							place-holder="输入小数" format="float"></form-input>
				<form-select id="fuck" v-ref:op :data="select"  name="se" label="下 拉" required=true type="password" size="lg"></form-select>
			</form-group>
		</layout-box>	 

		<layout-box p="1111" m="1000">
			<form-group>	
				<form-upload accept="/images/*" @upload-change="uploadChange">
					<Btn type="primary" blank=true size='sm' name="上传照片" ></Btn>
				</form-upload>
				<div id="picpreview"></div>
			</form-group>
		</layout-box>

		<layout-box m="1000">
			<form-group type='blank'>	
				<form-time name="time" label="时 间" type="text"></form-time>
			</form-group>
		</layout-box>
		 	  	
		<grid-row p='1111'>
			<Btn type="primary" block=true @btn-click="submit" name="提 交"></Btn>
		</grid-row>
		 
	</layout-main>
</template>

<script>
import {HeaderLayout, HeaderDock} from '../components/header'
import {LayoutBox, LayoutMain, GridRow, GridCol} from '../components/layouts'
import {TabsHorizon, TabsItemHorizon, TabsVertical, TabsItemVertical} from '../components/tabs'
import {Btn} from '../components/buttons'
import {Icon} from '../components/common'
import {FormGroup, FormInput, FormSelect, FormCode, FormStars, FormCheck, FormUpload
		,FormTime} from '../components/form'


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
		FormStars,
		FormCheck,
		FormUpload,
		FormTime
	},
	ready: function(){
		var _this = this;
		var timer = setTimeout(function(){
			//_this.$refs.op.setSelectedById(2);
		}, 2000);
		 
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
		uploadChange: function(file){
			lrz(file.files[0], {
				width: 200
			})
	        .then(function (rst) {
	            // 处理成功会执行
	            console.log(rst);
	            var img = new Image();
	            img.src = rst.base64;

	            img.onload = function () {
	            	document.getElementById('picpreview').innerHTML = ''
	                document.getElementById('picpreview').appendChild(img);
	            };

	            return rst;
	        })
	        .catch(function (err) {
	           	alert(err)
	        })
	        .always(function () {
	            // 不管是成功失败，都会执行
	        });
		}
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
			  		text: '选项一' 
			  },{
			  		val: '2',
			  		text: '选项二',
			  		selected: 'selected' 
			  }]
		}
	}
}
</script>
