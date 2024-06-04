export default {
  props: {
    project: Object
  },
  template: /*html*/ `
    <div class="project-card">
       <div class="project-card__project-preview">
            <img :src="'assets/images/' + project.name.toLowerCase() + '.jpg'" alt="project screenshot">
       </div>
       <div class="project-card__project-info">
            <h3>{{ project.name }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-card__links">
                <a :href="project.url">Live</a>
                <a :href="project.github_repository">Github</a>
            </div>
       </div>
    </div>
  `
}
 