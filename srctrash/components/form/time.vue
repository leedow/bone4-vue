<template>
	 <form-input 
		:size="size" 
		:formControl="formControl" 
		:name="name"
		:type="type"
		:required="required"
		:label="label"
		:place-holder="placeHolder"
		icon="time"
		underline=false
		:val="date"
		@click="showCalendar"></form-input>
		<calendar :show.sync="show" :type="type" :value.sync="date"  :begin="begin" :end="end" :range="range"></calendar>
</template>

<script>
import Format from '../../addon/format'
import Calendar from '../assemble/timepicker.vue'
import FormInput from './input.vue'
import dateHelper from '../../addon/dateHelper'

/*
 * Dispatch events:input-wrong|input-pass
 * On events:input-verify
 */
export default {
	components: {
		FormInput,
		Calendar
	},
	props: {
		size: {
			default: 'lg'
		},
		formControl: {
			 default: true
		},
		type: {
			default: 'text'
		},
		name: {
			default: ''
		},
		label: {
			 default: ''
		},
		required: {//是否强制填写
			default: true
		},
		placeHolder: {
			default: ''
		}
	},
	created: function(){
		 //alert(dateHelper.format(new Date(), 'yyyy-MM-dd'));
	},
	methods: {
		showCalendar: function(e){
			e.stopPropagation();
            var that=this;
            that.show=true;
            var bindHide=function(e){
                e.stopPropagation();
                that.show=false;
                document.removeEventListener('click',bindHide,false);
            };
            setTimeout(function(){
                document.addEventListener('click',bindHide,false);
            },500);
		}
	},
	data () {
		return {
			show:false,
            type:"datetime",//date datetime        
            range:false,//是否多选,
            //value: "2015-12-11"//dateHelper.format(new Date(), 'yyyy-MM-dd')
            date: ''
		}
	}
}
</script>
