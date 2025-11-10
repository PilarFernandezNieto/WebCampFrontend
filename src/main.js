import './assets/main.css'
import 'datatables.net-dt/css/dataTables.dataTables.css'; 

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-dt';
DataTable.use(DataTablesCore)


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('DataTable', DataTable); // registrar globalmente si quieres usar <DataTable> en cualquier componente


app.mount('#app')
