<script setup>
    import Topbar from '@/components/Topbar.vue';
    import Leftbar from '@/components/Leftbar.vue';
    import Content from '@/components/Content.vue';
</script>
<template>
    <!-- Begin page -->
    <div id="wrapper">
        <!-- Topbar Start -->
            <Topbar></Topbar>
            
        <!-- end Topbar -->


         <!-- ========== Left Sidebar Start ========== -->
            <Leftbar></Leftbar>
         <!-- Left Sidebar End -->
        
        <Content></Content>
    </div>
    <!-- END wrapper -->
</template>



<style lang="scss" scoped>

</style>