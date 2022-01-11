<template>
  <section class="navbar-container" div="nav" :class="{ scroll: isScroll }">
    <div class="navbar-content container">
      <div class="nav-logo"><a href="#hero"> MyResume </a></div>
      <div class="nav-menu">
        <ul @click="showMobileMenu = false" :class="{ show: showMobileMenu }">
          <a href="#resume"><li> Resume </li></a>
          <a href="#specs"> <li>Specialities</li></a>
          <a href="#projs"> <li>Projects</li></a>
          <a href="#contact"><li>Contact</li></a>
        </ul>
      </div>
      <div class="menu-icon" @click="showMobileMenu = !showMobileMenu">
        <img :src="menuIcon" alt="" srcset="" />
      </div>
    </div>
  </section>
</template>


<script>
import menuIcon from '@/assets/img/menu.png';
export default {
  name: 'navbar',
  props: {},
  data() {
    return {
      menuIcon,
      showMobileMenu: false,
      isScroll: false,
    };
  },
  components: {},
  methods: {
    handleScroll(ev) {
      this.isScroll = true;
    },
  },
  computed: {},
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>