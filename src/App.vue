<template>
<div>
</div>
<div>
    <RouterView/>
</div>
<div>
    <FooterComponent/>
</div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import FooterComponent from './components/FooterComponent.vue';


</script>