<script setup>
   const props = defineProps([
        'title', 
        'subtitle'
    ]) 
</script>
<template>
    <div class="row">
        <div class="col-12">
            <div class="page-title-box">
                <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                        <li class="breadcrumb-item"><a href="javascript: void(0);">{{ title }}</a></li>
                        <li class="breadcrumb-item active">{{ subtitle }}</li>
                    </ol>
                </div>
                <h4 class="page-title">{{ subtitle }}</h4>
            </div>
        </div>
    </div> 
</template>



<style lang="scss" scoped>

</style>