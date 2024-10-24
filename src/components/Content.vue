<script>
    import PageTitle from './PageTitle.vue';
    import Footer from './Footer.vue';

    export default{
        components: {
            PageTitle,
            Footer
        },
        data(){
            return {
                pageTitle: 'Vue Inventory',
                subTitle: 'Dashboard One'
            }
        },
        
    }
</script>
<template>
    <div class="content-page">
        <div class="content">

            <!-- Start Content-->
            <div class="container-fluid">
                
                <!-- start page title -->
                    <!-- <PageTitle></PageTitle> -->
                    <PageTitle :title='pageTitle' :subtitle='subTitle' />
                <!-- end page title --> 

                <router-view></router-view>
                <!-- end row -->
                
            </div> 
            <!-- container -->

        </div> <!-- content -->

        <!-- Footer Start -->
            <Footer></Footer>
        <!-- end Footer -->

    </div>
</template>



<style lang="scss" scoped>

</style>