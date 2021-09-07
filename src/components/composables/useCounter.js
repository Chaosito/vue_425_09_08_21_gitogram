import {
  isRef, isReadonly, isProxy, isReactive, unref,
  ref, reactive, toRef, toRefs, computed, watch, watchEffect, readonly,
  onMounted
} from 'vue'

export default () => {
  const counter = ref(0)
  const counterObj = reactive({
    number: 0
  })

  const { number } = toRefs(counterObj)

  const increase = () => {
    counter.value++
    console.log('unref', unref(counter))
    counterObj.number++
  }

  const copy = readonly(counterObj)
  copy.number++
  console.log('isRef', isRef(counter))
  console.log('isReadonly', isReadonly(copy))
  console.log('isProxy', isProxy(copy))
  console.log('isReactive', isReactive(copy))

  const doubled = computed(() => {
    return counterObj.number * 2
  })

  watch(doubled, (val, prev) => {
    console.log(val, prev)
  })

  watch(() => counterObj.number, (val, prev) => {
    console.log(val, prev)
  })

  watchEffect(() => {
    console.log(doubled.value)
  })

  const stop = watchEffect((onIvalid) => {
    console.log('number', number.value)

    onIvalid(() => {
      console.log('invalid')
    })
  })

  setTimeout(() => {
    stop()
  }, 3000)

  onMounted(() => {
    console.log('mounted')
  })

  return {
    counter,
    counterObj,
    counterObjToRef: toRef(counterObj, 'number'),
    numberToRefs: number,
    doubled,
    increase
  }
}
