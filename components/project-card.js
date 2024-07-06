import { onMounted, computed } from "vue";

export default {
  props: {
    project: Object
  },
  emits: ['mounted'],
  setup(props, ctx) {

    onMounted(() => {
      ctx.emit('mounted')
    })

    const inProgress = computed(() => !props.project.url)

    const projectName = computed(() => !inProgress.value ? props.project.name : 'Coming soon');

    const websiteUrl = computed(() => !inProgress.value ? props.project.url : null);

    const githubUrl = computed(() => !inProgress.value ? props.project.github_repository : null);

    const imageUrl = computed(() => `assets/images/${ inProgress.value ? 'preview-in-progress' : props.project.name.toLowerCase()}.jpg`);

    return {
      imageUrl,
      githubUrl,
      websiteUrl,
      inProgress,
      projectName
    }

  },
  template: /*html*/ `
    <div :class="{ 'project-card--in-progress': inProgress, 'project-card': true}">
      <h4 class="project-card__title">{{ projectName }}</h4>
      <img class="project-card__preview" :src="imageUrl" alt="project preview" />
      <div class="project-card__info">
        <p>{{ project.description }}</p>
          <div class="project-card__links">
            <a :href="websiteUrl">Website</a>
            <a :href="githubUrl">Github</a>
          </div>
       </div>
    </div>
  `
}
 