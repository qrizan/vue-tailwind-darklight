<template>
    <div class="container mx-auto px-4">
        <div class="lg:flex md:flex lg:flex-row md:flex-row sm:flex-none">
            <div class="p-4 lg:basis-1/2 md:basis-1/2 sm:basis-1 w-full">
                <TextInput @convertedText="handleConvert"/>
            </div>

            <div class="p-4 lg:basis-1/2 md:basis-1/2 sm:basis-1 w-full">
                <TextResult :text-converted=textConverted />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TextInput from './TextInput.vue'
import TextResult from './TextResult.vue'

export default defineComponent({
    name: "Base",
    data() {
        return {
            textConverted: ""
        }
    },
    methods: {
        handleConvert(text:string) : void{
            this.textConverted = text;
        },
    },    
    components: {
        TextInput,
        TextResult   
    }
});



</script>
