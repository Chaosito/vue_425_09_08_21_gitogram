import slider from './slider'
import placeholder from '../placeholder/placeholder'

export default {
  title: 'Слайдер',
  components: { slider },
  argTypes: {
    username: {
      control: { type: 'text' }
    },
    text: {
      control: { type: 'text' }
    }
  }
}

export const commentView = (args) => ({
  components: {
    slider
  },
  data () {
    return { args }
  },
  template: `
  <slider :text="args.text" :username="args.username">
    <template #slider-content>
      <img src="https://picsum.photos/320/240" />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula quam ex, vel suscipit mauris porta quis. Proin efficitur lorem facilisis, elementum libero eu, posuere magna. Suspendisse sodales, est eget ultrices ultrices, ipsum ipsum viverra sem, sed accumsan urna nulla at turpis. Vestibulum posuere magna nec lorem finibus, at elementum neque bibendum. Cras commodo felis ac metus blandit, nec fringilla nisi dapibus. Nam neque neque, vulputate ac rutrum et, fringilla elementum nibh. Phasellus et nibh et mauris scelerisque tincidunt. Donec ornare mauris faucibus volutpat imperdiet. Nulla laoreet, risus ut consectetur bibendum, nulla risus euismod enim, quis vehicula risus ex vitae ante. Aenean nec egestas ante. Donec rhoncus, lorem vitae eleifend pretium, elit ex tincidunt massa, non venenatis nisl neque tristique purus. Donec finibus risus non mauris lobortis, et imperdiet est tempus.

      Nam et dui tellus. Mauris sit amet mi sit amet lacus feugiat consequat. Curabitur nec purus vitae ex posuere sodales a vel odio. Integer tristique nisl velit, ac porttitor odio congue at. Aliquam in diam leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce in metus at leo ultricies feugiat in a est. Nunc ut mollis purus, ac efficitur nulla. Aliquam accumsan nunc et interdum suscipit. Morbi semper mi lectus, eu rhoncus purus varius in.
      
      Ut tincidunt laoreet arcu, sit amet feugiat ante lobortis ut. Nunc tristique pharetra lectus, sed ultricies urna. Praesent ut leo dignissim, rutrum magna et, interdum risus. Vestibulum velit arcu, iaculis ac mollis et, faucibus at sem. Nulla blandit auctor eros id elementum. Donec sit amet lacinia magna, sed varius quam. Sed elementum leo sit amet lectus imperdiet sagittis. Phasellus varius, mi quis blandit cursus, sapien dolor mollis diam, at efficitur augue ex eu magna. Sed at felis semper, tempor mauris eu, eleifend magna. Donec mollis mi sapien, id tristique orci dictum vitae. Suspendisse sodales tempus commodo. Fusce finibus dui id turpis venenatis interdum at eget metus. Pellentesque non dui in tortor eleifend dapibus.
      
      Nunc ligula lectus, fermentum et varius ac, tincidunt quis leo. Nullam laoreet porttitor urna sed dictum. Ut quis ipsum dapibus, pharetra tellus sed, fermentum libero. Proin tincidunt risus molestie pellentesque mollis. Integer ultrices elementum dignissim. Aliquam in molestie enim. Ut hendrerit ex nunc, ac faucibus urna condimentum id. Aliquam ac enim congue lectus ullamcorper aliquam nec quis libero. Mauris malesuada, lectus eu blandit finibus, leo tortor maximus felis, vitae finibus turpis arcu ac felis. Morbi molestie scelerisque dui sit amet placerat. Fusce suscipit id sem id laoreet. In egestas enim et dui pretium euismod. Curabitur luctus dui nec varius lobortis. Aliquam erat volutpat.
      </template>
  </slider>
  `
})

commentView.args = {
  username: 'UserName',
  text: 'User comment'
}

commentView.story = {
  name: 'Стандартный вид'
}

export const placeholderView = (args) => ({
  components: {
    slider,
    placeholder
  },
  data () {
    return { args }
  },
  template: `
  <slider :text="args.text" :username="args.username">
    <template #slider-content>
      <placeholder :paragraphs="3" />
    </template>
  </slider>
  `
})

placeholderView.args = {
  username: 'UserName',
  text: 'User comment'
}

placeholderView.story = {
  name: 'Placeholder'
}
