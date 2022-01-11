<template>
  <section class="resume-main-container" id="resume">
    <section class="resume container">
        <div class="resume-title container" @click="show = !show">
          Resume
          <div class="resume-underline"></div>
        </div>

      <div class="jobs" >
        <div class="job" v-for="(job, idx) in jobs" :key="idx">
          <div class="job-logo">
              <img src="../assets/img/finda.png" />
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
        </div>
      </div>

    </section>
  </section>
</template>


<script>

import img from '../assets/img/finda.png'

export default {
  name: 'resume',
  props: {},
  data() {
    return {
      jobs: [
        {
          company: 'Finda - Digital Marketing',
          title: 'Co-Founder',
          years: '2019-2021',
          logo: 'C:\Dev\portfolio\src\assets\img\finda.png',
        },
        {
          company: 'Seven Sky Florida',
          title: 'Product Manager',
          years: '2018-2019',
          logo: 'sevensky.png',
        },
        {
          company: 'BitsNGo',
          title: 'Business Development & Projcet Manager',
          years: '2016-2018',
          logo: 'bitsngo.png',
        },
        {
          company: 'N.E.O Marketing ltd',
          title: 'Agency Owner',
          years: '2012-2016',
          logo: 'neomarketing.png',
        },
      ],
    };
  },
  components: {
  },
  methods: {},
  computed: {},
  created() {},
};
</script>