<template>
	<header-layout title='Bone Vue'>
		<header-dock align='left'>
			<a v-link="{ path: '/' }"><Icon type="back"></Icon></a>
		</header-dock>
		Buttons
		<header-dock align='right'>
			<a href="">Github</a>
		</header-dock>
	</header-layout>
	<layout-main>
		<layout-box p="1111">
			 <Btn name="Default"></Btn>
			 <Btn icon="home" name="Default"></Btn>		 
		</layout-box>	 
		<layout-box m="1000" p="1111">			 
			 <Btn size="lg" type="primary" icon="settings" name="Primary Large"></Btn>
			 <Btn type="warm" name="Primary"></Btn>			 
		</layout-box>	
		<layout-box m="1000" p="1111">			 
			 <Btn type="warm" block=true size='lg' v-on:btn-click="test" name="Block Large"></Btn>
		</layout-box>			
	</layout-main>
</template>

<script>
import {HeaderLayout, HeaderDock} from '../components/header'
import {LayoutBox, LayoutMain} from '../components/layouts'
import {TabsHorizon, TabsItemHorizon, TabsVertical, TabsItemVertical} from '../components/tabs'
import {Btn} from '../components/buttons'
import {Icon} from '../components/common'


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
		Icon
	},
	events: {
		test: function(e){
			alert('Click Me');
		}
	},
	data () {
		return {
			 
		}
	}
}
</script>
