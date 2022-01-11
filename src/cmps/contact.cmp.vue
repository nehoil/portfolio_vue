<template>
  <section class="contact-main-container" id="contact">
    <section class="contact container">
      <div class="contact-title container">
        Contact Me
        <div class="contact-underline"></div>
      </div>
      <div class="jobs">
        <div class="job" v-for="(contact, idx) in contacts" :key="idx">
          <a :href="contact.url">
            <div class="job-logo">
              <img :src="require(`@/assets/img/${contact.logo}`)" />
            </div>
            <div class="job-details">
              <div class="job-company">
                {{ contact.type }}
              </div>
              <div class="job-title">
                {{ contact.details }}
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
// import mailIcon from '@/assets/img/mail.png';
// import fbIcon from '@/assets/img/fb.png';
// import githubIcon from '@/assets/img/github.png';
// import linkedinIcon from '@/assets/img/linkedin.png';
// import phoneIcon from '@/assets/img/phone.png';

export default {
  name: 'contact',
  props: {},
  data() {
    return {
      contacts: [
        {
          type: 'Email',
          details: 'neho12@gmail.com',
          logo: 'mail.png',
          url: 'mailto:neho12@gmail.com',
        },
        {
          type: 'Linkedin',
          details: '@nneho',
          logo: 'linkedin.png',
          url: 'https://www.linkedin.com/in/nneho/',
        },
        {
          type: 'Facebook',
          details: '@nehoray.ilani',
          logo: 'fb.png',
          url: 'https://www.facebook.com/nehoray.ilani',
        },
        {
          type: 'Github',
          details: '@nehoil',
          logo: 'github.png',
          url: 'https://github.com/nehoil',
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