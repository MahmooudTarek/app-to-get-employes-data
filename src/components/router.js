// import Vue from "vue"
import Router from "vue-router"
import Employees from "./employees.vue"
import createPackage from "./createpackage.vue"
Vue.use(Router)

export default new Router({
    mode:history,
    routes:[{
        path:"/",
        name :"employees",
        component: Employees
    },
]
})