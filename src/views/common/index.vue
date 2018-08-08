<template>
	<div class="index-wrap">
		<el-container>
			<el-aside width="230px">
				<v-menu class="menu-wrap"></v-menu>
			</el-aside>
			<el-container>
				<el-header>
					<v-header class="header-wrap"></v-header>
				</el-header>
				<el-main>
					<transition name="router-fade" mode="out-in">
						<router-view class="content-wrap"></router-view>
					</transition>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<style lang='scss' rel='stylesheet/scss' scoped>
	.index-wrap{
		position: absolute;
	    left: 0;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    background: #F0F2F5;
	    margin: 0 auto;
	    max-width: 1600px;
	    min-width: 1280px;
	}
	.menu-wrap{
	    z-index: 10;
	    width: 230px;
	    background: #0F264D;
	    position: absolute;
	    top: 0;
	    bottom: 0;
	    left: 0;
	    overflow: hidden;
	}
	.header-wrap{
		max-width: 1370px;
		background-color: #fff;
		height: 48px;
		line-height: 48px;
	}
	.content-wrap{
		height: 100%;
		position: relative;
	}
</style>

<style lang='scss' rel='stylesheet/scss'>
	.el-header{
		padding: 0;
		height: auto!important;
	}
	.el-main{
		padding: 0;
		height: 100%;
		padding: 13px 20px 20px;
	}
	.el-container{
		height: 100%;
	}
	.router-fade-enter-active, .router-fade-leave-active{
		transition: opacity .3s;
	}
	.router-fade-enter, .router-fade-leave-active{
		opacity: 0;
	}
</style>

<script>
	import header from './header.vue'
	import menu from './menu.vue'
	export default{
		components: {
			'vHeader': header,
			'vMenu': menu
		},
		data(){
			return {

			}
		},
		computed: {

		},
		methods: {
			
		},
		created(){
			
		}
	}
</script>
