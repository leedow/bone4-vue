<template>
<div class="calendar">
  <table>
    <thead>
      <tr v-show="showHeader">
        <th class="prev" style="visibility: visible;" @click="pre">
          <i class="icon iconfont icon-back"></i>
        </th>
        <th colspan="5">{{currentYear}}年{{currentMonth}}月</th>
        <th class="next" style="visibility: visible;" @click="next">
          <i class="icon iconfont icon-xiangyou1"></i>
        </th>
      </tr>
      <tr>
        <th class="weekday">一</th>
        <th class="weekday">二</th>
        <th class="weekday">三</th>
        <th class="weekday">四</th>
        <th class="weekday">五</th>
        <th class="weekday">六</th>
        <th class="weekday">日</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in days">
        <td v-for="item2 in item" class="day" @click="dayClick(item2)"><span :class="[item2.status]">{{item2.name}}</span></td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import Time from '../helper/time'

export default {
  name: 'calendar',
  props: {
    disableDays: {
      type: Array,
      default() {
        return []
      }
    },
    activeDays: {
      type: Array,
      default() {
        return []
      }
    },
    unactiveDays: {
      type: Array,
      default() {
        return []
      }
    },
    maxMonth: {
      type: Number,
      default: 12
    },
    minMonth: {
      type: Number,
      default: 1
    },
    mode: {
      type: String,
      default: 'todayafter'
    },
    showHeader: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    dayClick(data) {
      if (data.status !== 'disable') {
        this.$emit('on-click', data)
      }
    },
    next() {
      if (this.currentMonth === 12) {
        this.currentMonth = 1
        this.currentYear = this.currentYear + 1
      } else {
        this.currentMonth = this.currentMonth + 1
      }

      this.$emit('on-month-change', {
        year: this.currentYear,
        month: this.currentMonth
      })
      this.draw()
    },
    pre() {
      if (this.currentMonth === 1) {
        this.currentMonth = 12
        this.currentYear = this.currentYear - 1
      } else {
        this.currentMonth = this.currentMonth - 1
      }

      this.$emit('on-month-change', {
        year: this.currentYear,
        month: this.currentMonth
      })
      this.draw()
    },
    /**
     * 获取某月的天数
     * @param {Number} 第几月份, 1-12
     */
    getDaysOfMonth(month) {
      let d = new Date() // eslint-disable-line
      let d2 = new Date() // eslint-disable-line

      d.setDate(1)
      d.setMonth(month - 1)


      d2.setDate(1)
      d2.setMonth(month)


      const monthStartDate = d.getTime()
      const monthEndDate = d2.getTime()
      return (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24)
    },
    /**
     * 获得某月第一天是星期几
     * @return 1-7
     */
    getStartDayOfMonth(month) {
      const d = new Date()
      d.setDate(1)
      d.setMonth(month - 1)

      return d.getDay() === 0 ? 7 : d.getDay()
    },
    /**
     * 初始化某月列表日期数据
     */
    initByMonth(month) {
      /* eslint-disable */
      this.currentMonth = month
      const days = this.getDaysOfMonth(month)
      const startDay = this.getStartDayOfMonth(month)
      console.log('startDay'+startDay)
      const todayDate = new Date().getDate()




      const daysData = []// 缓存日期

      // 将所有日期放入缓存数据
      for (let i = 0; i < startDay - 1; i++) {
        daysData.push({
          id: 0,
          name: '',
          state: 'disable'
        })
      }

      for (let i = 0; i < days; i++) {
        let ii = i+1
        let status = 'normal'

          switch(this.mode){
            case 'all': {
              status = 'normal'
              break
            }
            case 'todayafter': {

              if(this.currentMonth == new Date().getMonth()+1 && (this.currentYear == this.nowYear)){
                if(todayDate > i){
                  status = 'disable'
                }
              }

              if(this.currentMonth < new Date().getMonth()+1 && (this.currentYear <= this.nowYear)){
                  status = 'disable'
              }

              if(this.currentYear < this.nowYear){
                status = 'disable'
              }

              break
            }
            case 'after': {
              if(this.currentMonth == new Date().getMonth()+1 && this.currentYear == this.nowYear){
                if(todayDate >= i){
                  status = 'disable'
                }
              }
              if(this.currentMonth < new Date().getMonth()+1 && this.currentYear <= this.nowYear){
                  status = 'disable'
              }

              if(this.currentYear < this.nowYear){
                status = 'disable'
              }

            }
          }

        daysData.push({
          //date: month+'-'+ii,
          date: new Time(this.currentYear+'-'+month+'-'+ii),
          id: i+1,
          name: i+1,
          status: status
        })
      }

      this.daysData = daysData
      //console.log(JSON.stringify(this.daysData))
      //this.translateData()
    },
    /**
     * 修改日期状态
     * @params {String} day Time | String
     */
     setStatusOfDay(day, status){
       /*
       let index = this.daysData.findIndex((item, index)=>{
         if(item.date && day instanceof Time){

           return item.date.equal(day)
         } else if(item.date && typeof day == 'string'){

           return item.date.equal(new Time(day))
         } else {
           return false
         }
       })*/
       let index = -1
       this.daysData.forEach((item, i) => {
         if(item.date && day instanceof Time){
            if(item.date.equal(day)){
              index = i
            }
         } else if(item.date && typeof day == 'string'){
           if( item.date.equal(new Time(day)) ){
             index = i
           }
         }
       })

       if(index >=0){
         let data = this.daysData[index]
         data.status = status
         this.daysData[index] = data
       }

     },
    /**
     * 将daysData数据映射成days显示数据结构
     */
     translateData(){
       const days = this.getDaysOfMonth(this.currentMonth)
       const startDay = this.getStartDayOfMonth(this.currentMonth)
       const lines = Math.ceil((days + startDay - 1) / 7) // 日历显示的行数

       const data = []// 二维结果

       // 初始化二维数组维度
       for (let i = 0; i < lines; i++) {
         data[i] = []
       }

       this.daysData.forEach((item, index) => {
         const lineNumber = Math.floor(index / 7)
         data[lineNumber].push(item)
       })

       this.days = data
     },
     draw (){
       this.initByMonth(this.currentMonth)
       this.activeDaysSelf.forEach((item)=>{
         this.setStatusOfDay(item, 'active')
       })

       this.unactiveDaysSelf.forEach((item)=>{
         this.setStatusOfDay(item, 'unactive')
       })
       this.disableDaysSelf.forEach((item)=>{
         this.setStatusOfDay(item, 'disable')
       })
       this.translateData()
     }
  },
  created() {

  },
  beforeDestroy() {

  },
  mounted() {
    this.currentMonth = new Date().getMonth() + 1
    this.draw()
  },
  watch: {
    disableDays (newVal){
      this.disableDaysSelf = newVal
      this.draw()
    },
    activeDays (newVal){
      this.activeDaysSelf = newVal
      this.draw()
    },
    unactiveDays (newVal){
      this.unactiveDaysSelf = newVal
      this.draw()
    }
  },
  data() {
    return {
      nowYear: new Date().getFullYear(),
      currentYear: new Date().getFullYear(),
      currentMonth: 0,
      currentDay: 0,
      currentWeek: 0,
      disableDaysSelf: this.disableDays,
      activeDaysSelf: this.activeDays,
      unactiveDaysSelf: this.unactiveDays,
      daysData: [], //日期原始数据
      days: [] // 渲染日期二维数组
    }
  }
}
</script>
