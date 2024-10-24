<script>
import PageTitle from '@/components/PageTitle.vue';
import axios from 'axios';

    export default{
        components: {
            PageTitle
        },
        setup () {
            return {
                title: 'System Setup',
                subtitle: 'Warehouse',
                departments: []
            }
        },
       mounted()
        {
            this.getAllDepartments();
       
        },
        methods:{
            async getAllDepartments(){
               await axios.get('http://192.168.78.127:8000/api/get-all-departments', {
                    //headers: {
                     //   'Content-Type': 'application/json'
                   // }
                })
                .then(response => {
                    this.departments = response.data.data;
                    //console.log(response.data.status_code);
                }
                    
                )
                .catch(error => console.log(error));
            }
        }

    }
</script>
<template>
    <!-- start page title -->
                 
        <PageTitle :title='title' :subtitle='subtitle' />
    <!-- end page title --> 
    <div class="row">
        <div class="col-12">
            <div class="card">
                <h5 class="card-title bg-blue text-white pd-title">Warehouse Entry Form</h5>
                <div class="card-body pt-0">
                    <!-- <h4 class="header-title">Form row</h4>
                    <h5 class="card-title mb-0 ">Card title</h5> -->
                    <!-- <p class="text-muted font-13">
                        You may also swap <code class="highlighter-rouge">.row</code> for <code class="highlighter-rouge">.form-row</code>, a variation of our standard grid row that overrides the default column gutters for tighter and more compact layouts.
                    </p> -->
                    
                    <form>
                        <div class="form-row">

                            <div class="form-group col-md-4">
                                <label for="inputState" class="col-form-label">Select Department</label>
                                <select id="" class="form-control">
                                    <option>Choose</option>
                                    <option v-for="(department,index) in this.departments" :key="index">{{ department.department_name }}</option>
                                    
                                </select>
                            </div>

                            <div class="form-group col-md-4">
                                <label for="inputEmail4" class="col-form-label">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                            </div>
                            
                            <div class="form-group col-md-4">
                                <label for="inputPassword4" class="col-form-label">Password</label>
                                <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
                            </div>

                        </div>

                        <div class="form-group">
                            <label for="inputAddress" class="col-form-label">Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                        </div>

                        <div class="form-group">
                            <label for="inputAddress2" class="col-form-label">Address 2</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputCity" class="col-form-label">City</label>
                                <input type="text" class="form-control" id="inputCity">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState" class="col-form-label">State</label>
                                <select id="inputState" class="form-control">
                                    <option>Choose</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                            <div class="form-group col-md-2">
                                <label for="inputZip" class="col-form-label">Zip</label>
                                <input type="text" class="form-control" id="inputZip">
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck11">
                                <label class="custom-control-label" for="customCheck11">Check this custom checkbox</label>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary waves-effect waves-light">Sign in</button>

                    </form>

                </div> <!-- end card-body -->
            </div> <!-- end card-->
        </div> <!-- end col -->
    </div>
</template>



<style lang="scss" scoped>

</style>