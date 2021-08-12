<template>
    <div class="topline">
        <topline>
            <template #headline>
                <h1>Header</h1>
            </template>
            <template #content>
                <h2>Stories</h2>
            </template>
        </topline>
    </div>
</template>

<script>
import { topline } from '../../components/topline'
export default {
  name: 'feeds',
  components: {
    topline
  }
}
</script>
