<template>
  <h1>Counter: {{ counter }}</h1>
  <h1>counterObj: {{ counterObj.number }}</h1>
  <h1>counterObjToRef: {{ counterObjToRef }}</h1>
  <h1>numberToRefs: {{ numberToRefs }}</h1>
  <h1>doubled: {{ doubled }}</h1>
  <button @click="increase">increase</button>
</template>
<script>
import useCounter from '../../components/composables/useCounter'
export default {
  name: 'temp',
  setup (props, { attr, slots, emit }) {
    const {
      counter,
      counterObj,
      counterObjToRef,
      numberToRefs,
      doubled,
      increase
    } = useCounter()

    return {
      counter,
      counterObj,
      counterObjToRef,
      numberToRefs,
      doubled,
      increase
    }
  }
}
</script>
<style lang="scss" scoped src="./temp.scss"></style>
