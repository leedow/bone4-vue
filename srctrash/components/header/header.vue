<template>
	<header class="bo-layout-full" :class="[style.pos]">
		<div :class="[style.type]">
			<slot></slot>
		</div>
		<slot name="addon"></slot>
	</header>
</template>

<script>
export default {
	props: {
		type: {
			default: ''
		},
		pos: {
			default: ''
		}
	},
	created: function(){
		if(this.pos != ''){
			this.style.pos = 'bo-layout-header-' + this.pos;
		}
		if(this.type != ''){
			this.style.type = 'bo-header-' + this.type;
		}
	},
	data () {
		return {
			style: {
				type: 'bo-header',
				pos: 'bo-layout-header'
			}
		}
	}
}
</script>
