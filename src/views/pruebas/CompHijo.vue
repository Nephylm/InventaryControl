<template>
  <div>
    <h2>{{lista}}</h2>
    <input v-model="item" type="string" />
    <button @click="$emit('list-added', item)">
      Agregar algo
    </button>
  </div>
</template>

<script>
export default {
  name: "CompHijo",
  props: {
    lista: Array
  },
  data() {
    return {
      item: ''
    };
  }
};
</script>