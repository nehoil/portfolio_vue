<template>
  <section class="projs-main-container" id="projs">
    <section class="projs container">
      <div class="projs-title container">
        Projects
        <div class="projs-underline"></div>
      </div>
      <div class="projs-list">
        <div class="proj" v-for="(job, idx) in jobs" :key="idx">
          <a :href="job.link">
          <div class="job-logo">
            <img :src="job.logo" />
          </div>
          <div class="job-details">
            <div class="job-company">
              {{ job.company }}
            </div>
            <div class="job-title">
              {{ job.title }}
            </div>
            <div class="job-years">
              {{ job.years }}
            </div>
          </div>
          </a>
        </div>
      </div>
    </section>
  </section>
</template>


<script>
import findaLogo from '@/assets/img/finda.png';
import webixImg from '@/assets/img/webix.png';
import misscoinImg from '@/assets/img/misscoin.jpg';
import emailImg from '@/assets/img/email.png';

export default {
  name: 'projs',
  props: {},
  data() {
    return {
      jobs: [
        {
          company: 'Wix Inspired',
          title: 'Webix - Website Builder',
          years: 'Vue.js, Node, MongoDB',
          logo: webixImg,
          link: 'https://webixapp.herokuapp.com/',
        },
        {
          company: 'blockchain.com Inspired',
          title: 'MissCoin - Crypto Wallet',
          years: 'React, Node, MongoDB',
          logo: misscoinImg,
          link: 'https://nehoil.github.io/MissBitcoin/',
        },
        {
          company: 'Google Keep & Gmail Inspired',
          title: 'AppSquirrel - email & notes',
          years: 'Vue.js, Node, MongoDB',
          logo: emailImg,
          link: 'https://nehoil.github.io/Appsus/#/mail',
        },
      ],
    };
  },
  components: {},
  methods: {},
  computed: {},
  created() {},
};
</script>