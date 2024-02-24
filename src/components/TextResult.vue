<template>
    <div class="card-content mb-2 overflow-auto h-96">
        <div class="text-base leading-7">
            <p class="text-color py-2 px-4" ref="converted" v-html="textConverted"></p>
        </div>
    </div>
</template>
<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: "TextResult",
    props: ["textConverted"],
});
</script>