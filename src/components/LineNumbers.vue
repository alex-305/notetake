<template>
    <div>
        <div v-for="line in lineNumbers" :key="line">
            <button 
            :class="{ active : line >=selectionRange[0] && line <=selectionRange[1]}"
            >{{ line }}</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

    const props = defineProps({
        lineNumbers: {
            type: Number,
            required: true,
            default: 0
        },
        selectionRange: {
            type: Array as () => number[],
            required: true
        },
    });
    const { lineNumbers, selectionRange } = toRefs(props);
</script>


<style scoped>
button {
    font-size: 20px;
    margin: 0px;
    padding: 0px;
    width: 95%;
    color: #8e979c;
    background-color: #c3dafd;
    box-shadow: none;
}

.active {
    color: #2d3436;
}

</style>
