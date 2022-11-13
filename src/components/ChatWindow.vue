<template>
    <div class="chat-window">
        <div v-if="error">
            {{error}}
        </div>
        <div v-if="document" class="messages" ref="messages">
            <div v-for="doc in formatedDocument" :key="doc.id" class="single">
                <span class="name"> {{doc.name}} </span>
                <span class="message"> {{doc.message}} </span>
                <span class="createdAt"> {{doc.createdAt}} </span>
            </div>
        </div>
        <div v-else>
            <Spinner/>
        </div> 
    </div>
</template>

<script>
import getCollection from '@/composable/getCollection';
import { computed, onUpdated, ref } from '@vue/runtime-core';
import {formatDistanceToNow} from 'date-fns'
import Spinner from './Spinner.vue'

export default {
    setup() {
        const { error, document } = getCollection("messages");
        const formatedDocument = computed(() => {
            if (document.value) {
                return document.value.map(doc => {
                    let time = formatDistanceToNow(doc.createdAt.toDate());
                    return { ...doc, createdAt: time };
                });
            }
        });

        const messages = ref(null)
        onUpdated(()=>{
            messages.value.scrollTop = messages.value.scrollHeight
        })
        return { error, document, formatedDocument, messages };
    },
    components: { Spinner }
}
</script>

<style>
    .chat-window {
        background: #fafafa;
        padding: 30px 20px;
    }
    .single{
        margin: 18px 0;
    }
    .createdAt{
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
    }
    .name{
        font-weight: bold;
        margin-right: 6px;
    }
    .messages{
        max-height: 400px;
        overflow: auto;
    }

</style>