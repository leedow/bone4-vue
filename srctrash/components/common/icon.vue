<template>
	<i class="icon iconfont icon-{{type}}"></i>
</template>

<script>
export default {
	props: {
		type: {
			coerce (val) {
				return val?val:'';
			}
		}
	},
	data () {
		return {
			
		}
	}
}
</script>
