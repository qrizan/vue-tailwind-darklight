<template>
    <textarea name="content" id="content" spellcheck="false" v-model="content"
        class="w-full text-color card-content resize-none px-4 py-2 ">
    </textarea>

    <div class="flex justify-between my-2">
        <div class="col-span-2 flex items-center">
            <button @click="storeText()" className="
                                text-sm 
                                font-semibold                 
                                px-3.5 py-2.5  mr-2
                                bg-indigo-600 text-white 
                                hover:bg-indigo-500 rounded-md">
                Convert
            </button>

            <select v-model="size" class="rounded-md text-sm 
                block w-full p-2 
                px-3.5 py-3 mr-2 
                bg-indigo-600 text-white 
                hover:bg-indigo-500 
                ">
                <option value="0">Size</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

        </div>
        <div class="col-span-2">
            <button 
            @click="clearText()" 
            className="
                text-sm 
                font-semibold                 
                px-3.5 py-2.5 
                bg-white text-indigo-600 
                hover:bg-indigo-50 rounded-md">
                Clear Text
            </button>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { convert } from '../utils/convert.ts'

export default defineComponent({
    name: "TextInput",
    emits: ["convertedText"],
    data() {
        return {
            content: "",
            size: 0,
            textConverted: ""
        }
    },
    methods: {
        storeText(): void {
            if (this.content.length > 0 && this.size > 0) {
                this.textConverted = convert(this.content, this.size)
                this.$emit('convertedText', this.textConverted)
            }

        },
        clearText(): void {
            this.size = 0
            this.content = ""
            this.$emit('convertedText', '')
        }
    }
});
</script>
