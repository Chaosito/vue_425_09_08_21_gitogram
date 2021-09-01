<template>
    <div class="page-auth">
        <div class="page-content">
            <div class="left-side">
                <div class="logo">
                    <logo />
                </div>
                <div class="descr">
                    More than just one repository.
                    This is our digital world.
                </div>
                <div class="gitbtn">
                    <x-button><div class="button-text">Authorize with github <div class="icon"><icon name="github" /></div></div></x-button>
                </div>
            </div>
            <div class="right-side">
                <img src="../../assets/macbook.png" />
            </div>
        </div>
        <div class="page-footer">
            © Gitogram from Loftschool
        </div>
    </div>
</template>

<script>
import logo from '../../components/logo'
import button from '../../components/button'
import icon from '../../components/icons'

export default {
  components: {
    logo,
    xButton: button,
    icon
  }
}
</script>

<style lang="scss" scoped src="./auth.scss"></style>
