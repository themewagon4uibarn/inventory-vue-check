import { createRouter,createWebHistory, createWebHashHistory } from "vue-router";
import Dashboard from "./components/Dashboard.vue";
import Dashboard2 from "./components/Dashboard2.vue";
import Dashboard3 from "./components/Dashboard3.vue";
import Dashboard4 from "./components/Dashboard4.vue";
import Calendar from "./components/Calendar.vue";

import Stores from "./components/setup/store/Store.vue";

import Warehouse from "./components/setup/warehouse/Warehouse.vue";
import MappingIndex from "./components/setup/warehouse-mapping/MappingIndex.vue";


const appRouter = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/:index?', component: Dashboard},
        {path: '/dashboard', component: Dashboard},
        {path: '/dashboard2', component: Dashboard2},
        {path: '/dashboard3', component: Dashboard3},
        {path: '/dashboard4', component: Dashboard4},
        {path: '/calendar', component: Calendar},
        {path: '/setup/stores', component: Stores},
        {path: '/setup/stores', component: Stores},
        {path: '/setup/warehouse', component: Warehouse},
        {path: '/setup/warehouse-mapping', component: MappingIndex},
        {path: '/setup/warehouse-room', component: Warehouse},
        {path: '/setup/rack', component: Warehouse},
        {path: '/setup/workflow-team', component: Warehouse},
        {path: '/setup/previous-data', component: Warehouse},
        {path: '/setup/previous-data-processed', component: Warehouse},
        
        // {
        //     path :  '/setup',
            
        //     children: [
        //         {path: 'stores', component: Stores},
        //         {path: 'warehouse', component: Warehouse},
        //         {path: 'warehouse-mapping', component: Warehouse},
        //         {path: 'warehouse-room', component: Warehouse},
        //         {path: 'rack', component: Warehouse},
        //         {path: 'workflow-team', component: Warehouse},
        //         {path: 'previous-data', component: Warehouse},
        //         {path: 'previous-data-processed', component: Warehouse},
        //     ] 
        // }
    ]
});

export default appRouter;