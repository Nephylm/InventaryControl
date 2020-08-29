<template>
  <div>
    <CompHijo
        :lista="lista"
        @list-added="lista.push($event)"
    />
  </div>
</template>

<script>
import CompHijo from "./CompHijo";

export default {
  name: "CompPadre",
  data() {
    return {
      lista: ['Arbol', 'Perro', 'Caballo']
    };
  },
  components: {
    CompHijo
  }
};
</script>