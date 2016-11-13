<template>
	<button class="bo-check" :class="[style.checked, style.addon, style.tip, addonClass]" @click="clickEvent">
		<i class="icon iconfont" :class="[style.icon]"></i>				
	</button>	
	 
</template>
<script>
/*
 * Dispatch events:check-click
 *  
 */
export default {
	props: {
		checked: {
			default: false
		},
		icon: {
			coerce (val) {//sm|lg
				return val?'icon-'+val:'icon-cart';
			}
		},
		iconChecked: {
			coerce (val) {
				return val?'icon-'+val:'';
			}
		},
		addonClass: {
			default: ''
		},
		flag: {
			default: false
		} 
	},
	created: function(){
 
		this.fresh();
	},
	methods: {
		setAddonClass: function(css){
			this.addonClass = css;
		},
		setChecked: function(state){
			this.checked = state;
			this.fresh();
		},
		clickEvent: function(){
			 
			this.checked = !this.checked;
			this.fresh();
			this.$dispatch('check-click', this);
		},
		fresh: function(){
			if(this.checked){
				this.style.checked = 'bo-checked';
				this.style.addon = ''
			} else {
				this.style.checked = '';
				this.style.addon = 'bo-checked-addon';
			}

			if(this.checked && this.iconChecked != ''){
				this.style.icon = this.iconChecked;
			} else {
				this.style.icon = this.icon;
			}

			if(this.checked && this.flag){
				this.style.tip = 'bo-checked-tip';
			} else {
				this.style.tip = '';
			}
		}
	},
	watch: {
		'checked' : function(val, oldval){
			
			this.fresh();	

		} 
	},
	data () {
		return {
			style: {
				checked: '',
				tip: '',
				icon: '',
				addon: 'bo-checked-addon'
			}
		}
	}
}
</script>
