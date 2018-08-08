import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  	routes: [{
	    path: '/',
	    redirect: '/homepage'
	}, {
      	path: '/index',
	    name: 'index',
	    component: (resolve) => require(['@/views/common/index'], resolve),
	    children: [
	    	//首页
	      	{
		        path: '/homepage',
		        name: 'homepage',
		        component: (resolve) => require(['@/views/pages/homepage/test'], resolve)
	      	},
	    	//测试
	    	{
		        path: '/test',
		        name: 'test',
		        component: (resolve) => require(['@/views/pages/test/index'], resolve),
		        children: [{
		          	path: '/test/test',
		          	name: 'dataStatisticsTest',
		          	component: (resolve) => require(['@/views/pages/test/test'], resolve)
		        }]
	      	},
	    ]
    }]
})
