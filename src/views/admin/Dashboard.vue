<!-- src/App.vue -->
<template>
    <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        <!-- HEADER -->
        <Header :title="'abc'" />

        <!-- SETTING TOOL -->
        <Setting/>

        <div class="app-main">
            
            <!-- SIDEBAR -->
            <SideBar/>

            <div class="app-main__outer">
                <!-- MAIN CONTENT -->
                <router-view></router-view>

                <!-- FOOTER -->
                <Footer/>
            </div>
        </div>
    </div>
    <!-- LOADING -->
    <Loading v-if="loadStore.loader" />
</template>

<script>
import Header from '../../components/admin/Header.vue'
import SideBar from '../../components/admin/SideBar.vue'
import Setting from '../../components/admin/Setting.vue'
import Footer from '../../components/admin/Footer.vue'
import Loading from '../../components/Loading.vue'
import { useLoadStore } from '../../stores/load';
import '../../assets/css/admin/style.css'

export default {
    name: 'App',
    components: {
        Header,
        SideBar,
        Setting,
        Footer,
        Loading,
    },
    computed: {
        loadStore() {
            return useLoadStore();
        },
    },
    data() {
      return {
         loader: false
      };
   },
};
</script>

<style scoped></style>
  