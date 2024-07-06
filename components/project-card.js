import { onMounted } from "vue";

export default {
  props: {
    project: Object
  },
  emits: ['mounted'],
  setup(props, ctx) {

    onMounted(() => {
      ctx.emit('mounted')
    })

    return {}

  },
  template: /*html*/ `
    <div class="project-card">
      <h4 class="project-card__title">{{ project.name }}</h4>
      <div class="project-card__project-preview">
        <img :src="'assets/images/' + project.name.toLowerCase() + '.jpg'" alt="project screenshot">
      </div>
      <div class="project-card__project-info">
        <p>{{ project.description }}</p>
          <div class="project-card__links">
            <a :href="project.url">Live</a>
            <a :href="project.github_repository">Github</a>
          </div>
       </div>
    </div>
  `
}
 