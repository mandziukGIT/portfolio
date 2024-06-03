import { computed } from "vue";

export default {
  props: {
    record: Object
  },
  setup(props) {
    const experience = computed(() => props.record)

    return { experience }
  },
  template: /*html*/ `
    <div class="about__experience-record">
        <div class="about__record-left-col"> 
            <div class="about__record-badges-list">
                <span v-for="badge in record.badges">{{ badge }}</span>
            </div> 
            <p>TECHNOLOGIES:</p>           
            <div class="about__record-tech-list">
                <span v-for="tech in record.tech">{{ tech }}</span> 
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
 