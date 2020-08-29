<template xmlns:panel="http://www.w3.org/1999/html">
  <div>
  <b-navbar toggleable = "lg"  type = "dark"  variant = "dark" >
    <Button icon="pi pi-bars" @click="visibleIzquierda = true" class="p-mr-2" />
    <!--Button icon="pi pi-bars" @click="visibleLeft = true" class="p-mr-2" /-->
  <b-navbar-brand  href = "#/"> Control de Inventario </b-navbar-brand>
</b-navbar>
    <Sidebar :visible.sync="visibleIzquierda" :baseZIndex="1000">
      <h3>Menu</h3>
      <!--Tree :value="nodes">
        <template #default="slotProps">
          <b>{{slotProps.node.label}}</b>
        </template>
        <template #url="slotProps">
          <router-link :to="slotProps.node.data">{{slotProps.node.label}}</router-link>
        </template>
      </Tree-->


      <b-container class="border p-formgrid fc-toolbar p-fluid" style="height:50px">
        <i class="pi pi-fw pi-home"></i>
        <span><router-link to="/" >Inicio</router-link></span>
      </b-container>
      <accordion>
        <AccordionTab ><template slot="header">
          <i class="pi pi-fw pi-shopping-cart"></i>
          <span>Compras</span>
        </template>
          <ul class="p-accordion-tab">
            <li>Productos y Serv</li>
            <li>Lista de Precios</li>
            <li>Proveedores</li>
            <li><router-link to="/orden_de_compra">Orden de Compra</router-link></li>
          </ul>
        </AccordionTab>
      </accordion>




    </Sidebar>

</div>
</template>

<script>
export default {

  outsideClickListener: null,
  darkDemoStyle: null,
  data() {
    return {
      visibleIzquierda: false,
      item: '',
      nodes: [
        {
          key: '0',
          label: 'Compras',
          icon :'pi pi-fw pi-shopping-cart',
          children: [
            {key: '0-0', label: 'Prudctos y Serv', data:'#', type: 'url'},
            {key: '0-1', label: 'Lista de precios', data: '#', type: 'url'},
            {key: '0-2', label: 'Proveedores', data:'#', type: 'url'},
            {key: '0-3', label: 'Ordenes de compra', data: '/orden_de_compra', type: 'url'}
          ]
        }

      ]

    };
  }

}
</script>
