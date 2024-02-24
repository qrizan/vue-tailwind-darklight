<template>
    <header>
        <div class="text-center pt-8">
            <div class="text-5xl text-color">
                <b>Bio</b>nic <b>Read</b>ing
            </div>
            <ButtonToggle />
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ButtonToggle from './ButtonToggle.vue';

export default defineComponent({
    name: "Header",
    components: {
        ButtonToggle,
    }
})
</script>
