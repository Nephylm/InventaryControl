<template>
<div >


  <div class="p-grid p-justify-between">
    <div class="p-col-3">
      <div class="box"><h1 class="p-pl-1">Orden de compra</h1></div>
    </div>

    <div class="p-col-4">

      <div class="box p-p-0 p-p-sm-1 p-p-md-2 p-p-lg-3" >
        <Button label="Subir doc" icon="pi pi-upload" @click="openBasic" class="p-mr-1" />
        <Button label="Exportar" icon="pi pi-file-excel" class="p-ml-1"/>
        <Dialog header="Subir " :visible.sync="displayBasic" :style="{width: '50vw'}" :modal="true" fileLimit="1">
          <FileUpload name="demo[]" url="./upload.php" @upload="onUpload" :multiple="true" accept=".xls*" :maxFileSize="1000000">
            <template #empty>
              <p>Arrastre sus archivos aqui</p>
            </template>
          </FileUpload>
        </Dialog>
      </div>
    </div>

  </div>


</div>
</template>

<script>
export default {
  data(){
    return{
      displayBasic: false
    }
  },
  methods:{
    openBasic() {
      this.displayBasic = true;
    },
    onUpload() {
      this.$toast.add({severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000});
    }
  }
}
</script>
