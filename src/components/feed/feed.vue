<template>
  <div class="feed-head">
    <div class="feed-user-panel">
      <img src="https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw" />
      <div class="username">joshua_I</div>
    </div>
  </div>
  <div class="feed-body">
    <slot name="feedbody"></slot>
    <div class="c-feed">
        <toggler @onToggle="toggle" />
        <div class="comments" v-if="shown">
            <ul class="comments-list">
                <li class="comments-item" v-for="n in 5" :key="n">
                    <comment text="Some text" username="Serj Kek" />
                </li>
            </ul>
        </div>
    </div>
  </div>
  <div class="feed-footer" style="margin-bottom:24px;color: rgba(0, 0, 0, 0.4);font-size:12px;">15 MAY</div>
</template>
<script>
import { comment } from '../comment'
import { toggler } from '../toggler'

export default {
  name: 'feed-item',
  components: {
    comment,
    toggler
  },
  data () {
    return {
      shown: false
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>
<style lang="scss" scoped src="./feed.scss"></style>
