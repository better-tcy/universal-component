<template>
  <div style="cursor: pointer" @click="emitFun">{{ text }}</div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: '测试'
  },
  onCallBack: {
    type: Function,
    default: () => {}
  }
})

const emitFun = () => {
  props.onCallBack('数据')
}
</script>

<style></style>
