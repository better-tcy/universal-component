<template>
  <div @click="testFun">{{ text }}</div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: '测试'
  }
})

const emit = defineEmits(['onTest'])

const testFun = () => {
  emit('onTest', '数据')
}
</script>

<style></style>
