<template>
	<div style="display:inline-block" @click="clickEvent">
		<input v-el:upload @change="changeEvent" style="display:none;" :name="name" type="file" :accept="accept">
		<slot></slot>
	</div>
</template>

<script>
import {Btn} from "../buttons"

/*
 * Dispatch events:check-click
 *  
 */
export default {
	components: {
		Btn
	},
	props: {
		text: {
			default: ''
		},
		title: {
			default: ''
		},
		name: {
			default: null
		},
		accept: {
			default: null
		}
	},
	methods: {
		clickEvent: function(){
			this.$els.upload.click();
		},
		changeEvent: function(){
			this.$dispatch('upload-change', this.$els.upload);
		}
	},
	data () {
		return {
			
		}
	}
}
</script>
