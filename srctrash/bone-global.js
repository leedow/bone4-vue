import Vue from 'vue'
import {HeaderLayout, HeaderDock} from './components/header'
import {LayoutBox, LayoutMain,LayoutSideMenu, GridRow, GridCol} from './components/layouts'
import {TabsHorizon, TabsItemHorizon, TabsVertical, TabsItemVertical, TabsSide, TabsItemSide} from './components/tabs'
import {Btn} from './components/buttons'
import {Icon, Linker} from './components/common'
import {FormGroup, FormInput, FormSelect, FormCode, FormCounter, FormStars, FormCheck, FormUpload} from './components/form'
import {Product,Product2, ShoppingDock} from './jishibao'
import {List, ListItem} from './components/list'
import {MenuSquare, MenuIcon} from './components/menu'

window.Vue = Vue;

window.Bone = {
		HeaderLayout: HeaderLayout,
		HeaderDock: HeaderDock,
		LayoutBox: LayoutBox,
		LayoutMain:LayoutMain,
		LayoutSideMenu: LayoutSideMenu,
		GridRow:GridRow,
		GridCol:GridCol,
		TabsHorizon:TabsHorizon,
		TabsItemHorizon:TabsItemHorizon,
		TabsVertical:TabsVertical,
		TabsItemVertical:TabsItemVertical,
		TabsSide:TabsSide,
		TabsItemSide:TabsItemSide,
		Btn:Btn,
		Icon:Icon,
		FormGroup:FormGroup,
		FormInput:FormInput,
		FormSelect:FormSelect,
		FormCode:FormCode,
		FormCounter:FormCounter,
		FormStars:FormStars,
		FormCheck:FormCheck,
		FormUpload:FormUpload,
		Product:Product,
		Product2:Product2,
		ShoppingDock:ShoppingDock,
		List:List,
		ListItem:ListItem,
		MenuSquare:MenuSquare,
		Linker: Linker,
		MenuIcon: MenuIcon

};

