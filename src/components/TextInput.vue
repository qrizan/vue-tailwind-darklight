<template>
    <textarea 
        name="content" 
        id="content" 
        spellcheck="false" 
        v-model="content" 
        class="w-full text-color card-content resize-none px-4 py-2 ">
    </textarea>

    <div class="flex justify-between my-2">
            <div class="col-span-2">
                <button @click="storeText()" className="
                                text-sm 
                                font-semibold                 
                                px-3.5 py-2.5 
                                bg-indigo-600 text-white 
                                hover:bg-indigo-500 rounded-md">
                    Convert
                </button>
            </div>
            <div class="col-span-2">
                <button @click="clearText()" className="
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
import sanitizeHtml from 'sanitize-html';
import { convert } from '../utils/convert.ts'

export default defineComponent({
    name: "TextInput",
    emits:["convertedText"],
    data() {
        return {
            content: "",
            textConverted: ""
        }
    },
    methods: {
        storeText() : void{
            this.textConverted = sanitizeHtml(convert(this.content), {
                allowedTags: ['b', 'br'],
            });

            this.$emit('convertedText', this.textConverted )
        },
        clearText() : void{
            this.content= ""
            this.$emit('convertedText', '' )
        }
    }
});
</script>
