<template>
     <div class="row">
        <div class="col-lg-6">
            <div class="card-box">
                <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">General</h5>

                <div class="form-group mb-3">
                    <label for="product-name">Product Name <span class="text-danger">*</span></label>
                    <input type="text" id="product-name" class="form-control" placeholder="e.g : Apple iMac">
                </div>

                <div class="form-group mb-3">
                    <label for="product-reference">Reference <span class="text-danger">*</span></label>
                    <input type="text" id="product-reference" class="form-control" placeholder="e.g : Apple iMac">
                </div>

                <div class="form-group mb-3">
                    <label for="product-description">Product Description <span class="text-danger">*</span></label>
                    <textarea class="form-control" id="product-description" rows="5" placeholder="Please enter description"></textarea>
                </div>

                <div class="form-group mb-3">
                    <label for="product-summary">Product Summary</label>
                    <textarea class="form-control" id="product-summary" rows="3" placeholder="Please enter summary"></textarea>
                </div>

                <div class="form-group mb-3">
                    <label for="product-category">Categories <span class="text-danger">*</span></label>
                    <select class="form-control select2" id="product-category">
                        <option>Select</option>
                        <optgroup label="Shopping">
                            <option value="SH1">Shopping 1</option>
                            <option value="SH2">Shopping 2</option>
                            <option value="SH3">Shopping 3</option>
                            <option value="SH4">Shopping 4</option>
                        </optgroup>
                        <optgroup label="CRM">
                            <option value="CRM1">Crm 1</option>
                            <option value="CRM2">Crm 2</option>
                            <option value="CRM3">Crm 3</option>
                            <option value="CRM4">Crm 4</option>
                        </optgroup>
                        <optgroup label="eCommerce">
                            <option value="E1">eCommerce 1</option>
                            <option value="E2">eCommerce 2</option>
                            <option value="E3">eCommerce 3</option>
                            <option value="E4">eCommerce 4</option>
                        </optgroup>

                    </select>
                </div>

                <div class="form-group mb-3">
                    <label for="product-price">Price <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" id="product-price" placeholder="Enter amount">
                </div>

                <div class="form-group mb-3">
                    <label class="mb-2">Status <span class="text-danger">*</span></label>
                    <br/>
                    <div class="radio form-check-inline">
                        <input type="radio" id="inlineRadio1" value="option1" name="radioInline" checked="">
                        <label for="inlineRadio1"> Online </label>
                    </div>
                    <div class="radio form-check-inline">
                        <input type="radio" id="inlineRadio2" value="option2" name="radioInline">
                        <label for="inlineRadio2"> Offline </label>
                    </div>
                    <div class="radio form-check-inline">
                        <input type="radio" id="inlineRadio3" value="option3" name="radioInline">
                        <label for="inlineRadio3"> Draft </label>
                    </div>
                </div>

                <div class="form-group mb-0">
                    <label>Comment</label>
                    <textarea class="form-control" rows="3" placeholder="Please enter comment"></textarea>
                </div>
            </div> <!-- end card-box -->
        </div> <!-- end col -->

        <div class="col-lg-6">
            
            <div class="card-box">
                <h5 class="text-uppercase mt-0 mb-3 bg-light p-2">Product Images</h5>

                <form action="/" method="post" class="dropzone" id="myAwesomeDropzone" data-plugin="dropzone" data-previews-container="#file-previews"
                    data-upload-preview-template="#uploadPreviewTemplate">
                    <div class="fallback">
                        <input name="file" type="file" multiple />
                    </div>

                    <div class="dz-message needsclick">
                        <i class="h1 text-muted dripicons-cloud-upload"></i>
                        <h3>Drop files here or click to upload.</h3>
                        <span class="text-muted font-13">(This is just a demo dropzone. Selected files are
                            <strong>not</strong> actually uploaded.)</span>
                    </div>
                </form>

                <!-- Preview -->
                <div class="dropzone-previews mt-3" id="file-previews"></div>

            </div> <!-- end col-->

            <div class="card-box">
                <h5 class="text-uppercase mt-0 mb-3 bg-light p-2">Meta Data</h5>

                <div class="form-group mb-3">
                    <label for="product-meta-title">Meta title</label>
                    <input type="text" class="form-control" id="product-meta-title" placeholder="Enter title">
                </div>

                <div class="form-group mb-3">
                    <label for="product-meta-keywords">Meta Keywords</label>
                    <input type="text" class="form-control" id="product-meta-keywords" placeholder="Enter keywords">
                </div>

                <div class="form-group mb-0">
                    <label for="product-meta-description">Meta Description </label>
                    <textarea class="form-control" rows="5" id="product-meta-description" placeholder="Please enter description"></textarea>
                </div>
            </div> <!-- end card-box -->

        </div> <!-- end col-->
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>