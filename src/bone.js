import Vue from 'vue'

import List from './components/list/list'
import Btn from './components/btn/btn'
import FormGroup from './components/form-group/form-group'
import PhoneCode from './components/phone-code/phone-code'
import BoInput from './components/bo-input/bo-input'
import BoSelect from './components/bo-select/bo-select'
import BoNumber from './components/bo-number/bo-number'
import MenuVertical from './components/menu-vertical/menu-vertical'
import MenusHorizon from './components/menus-horizon/menus-horizon'
import Modal from './components/modal/modal'
import Modal_ from './components/modal'
import Tabs from './components/tabs/tabs'
import Toast from './components/toast/toast'
import Stars from './components/stars/stars'
import Login from './other/login/login'
import BoSwitch from './components/bo-switch/bo-switch'
import Drawer from './components/drawer/drawer'
import Slide from './components/slide/slide'
import Sidebar from './components/sidebar/sidebar'
import Device from './components/helper/device'
import Calendar from './components/calendar/calendar'
import Toast_ from './components/toast'
import Touch from './components/helper/touchit'
import Selector from './components/selector/selector'
import SelectorTime from './components/selector-time/selector-time'
import Back from './components/back/back'

Vue.prototype.$toast = Toast_
Vue.prototype.$modal = Modal_

export {
  List,
  Btn,
  FormGroup,
  PhoneCode,
  BoInput,
  BoSelect,
  BoSwitch,
  BoNumber,
  MenuVertical,
  MenusHorizon,
  Modal,
  Tabs,
  Toast,
  Drawer,
  Login,
  Device,
  Stars,
  Slide,
  Sidebar,
  Calendar,
  Touch,
  Selector,
  SelectorTime,
  Back
}
