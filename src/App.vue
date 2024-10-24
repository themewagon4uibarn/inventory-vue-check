<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import layout from './layouts/Default.vue'
</script>

<template> -->
  <!-- <layout></layout> -->
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->
<!-- </template> -->

<script setup>
    import Topbar from './components/Topbar.vue';
    import Leftbar from './components/Leftbar.vue';
    import Footer from './components/Footer.vue';


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
        
       

        <div class="content-page">
            <div class="content">

                <!-- Start Content-->
                <div class="container-fluid">
                   
                    <router-view></router-view>
                    <!-- end row -->
                    
                </div> 
                <!-- container -->

            </div> <!-- content -->

            <!-- Footer Start -->
                <Footer></Footer>
            <!-- end Footer -->

        </div>
    </div>
    <!-- END wrapper -->
</template>

<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
