

<script setup lang='ts'>
import { NuxtLink } from "#components"

defineProps<{
    to?: string
}>()
</script>
<template>
<component :is="to ? NuxtLink : 'button'" :to="to" v-bind="$attrs" class="p-3 text-white flex bg-black gap-2 rounded items-center hover:bg-gray-800 active:bg-gray-900">
    <slot>
        
    </slot>
</component>
</template>
