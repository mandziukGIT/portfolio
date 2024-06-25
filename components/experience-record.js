import { computed, onMounted } from "vue";

export default {
  props: {
    record: Object
  },
  emits: ['mounted'],
  setup(props, ctx) {
    const experience = computed(() => props.record)

    onMounted(() => {
      ctx.emit('mounted')
    })

    return { experience }
  },
  template: /*html*/ `
    <div class="about__experience-record">
      <div class="about__record-left-col"> 
        <div class="about__record-logo">
          <img :src="'assets/images/' + record.company.toLowerCase() + '-logo.svg'" alt="">
        </div>
        <div class="about__record-badges-list">
            <span v-for="badge in record.badges">{{ badge }}</span>
        </div>
      </div>
      <div class="about__record-middle-col">
        <span>{{ experience.employment_start}} - {{ experience.employment_finish}}</span>
      </div>
      <div class="about__record-right-col">
        <span class="about__record-position">{{ experience.position }}</span>
        <p>{{ experience.description }}</p>
      </div>
    </div>
  `
}
 