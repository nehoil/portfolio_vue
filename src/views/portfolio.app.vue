<template>
  <div class="main-content">
    <navbar-cmp />
    <hero-cmp />
    <resume-cmp />
    <spec-cmp />
    <projs-cmp />
    <contact-cmp/>
    <bg-cmp/>
  </div>
</template>

<style lang="scss">
</style>

<script>
import navbarCmp from '@/cmps/navbar.cmp';
import heroCmp from '@/cmps/hero.cmp';
import resumeCmp from '@/cmps/resume.cmp';
import specCmp from '@/cmps/spec.cmp';
import projsCmp from '@/cmps/projs.cmp';
import ContactCmp from '@/cmps/contact.cmp.vue';
import bgCmp from '@/cmps/bg.cmp.vue';
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
  components: {
    navbarCmp,
    projsCmp,
    specCmp,
    resumeCmp,
    heroCmp,
    ContactCmp,
    bgCmp
  },
};
</script>
