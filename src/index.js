import {marked} from 'marked';
import './style.css';




createHeader()
const main = document.createElement('main')
main.classList.add('main')
document.body.appendChild(main)
createNav()
createPreview()


function createHeader(){
    const header = document.createElement('header')
    header.classList.add('header')
    header.innerHTML = `
      <div class="logo">
        <i class="fas fa-check-double" aria-hidden="true"></i>
        <h1 class="page-name">Todo List</h1>
      </div>`
    document.body.appendChild(header)
}

function createNav(){
    const nav = document.createElement('nav')
    nav.id = 'nav'
    nav.classList.add('nav')
    nav.innerHTML = `
      <div class="default-projects-list">
        <button
          class="button-default-project active"
          id="button-inbox-projects">
          <i class="fas fa-inbox" aria-hidden="true"></i>
          Inbox
        </button>
        <button class="button-default-project" id="button-today-projects">
          <i class="fas fa-calendar-day" aria-hidden="true"></i>
          Today
        </button>
        <button class="button-default-project" id="button-week-projects">
          <i class="fas fa-calendar-week" aria-hidden="true"></i>
          This week
        </button>
      </div>
      <!-- User projects -->
      <h1 class="projects-title">Projects</h1>
      <div class="projects-list" id="projects-list"></div>
      <button class="button-add-project" id="button-add-project">
        <i class="fas fa-plus" aria-hidden="true"></i>
        Add Project
      </button>
      </div>`
    main.appendChild(nav)
}

function createPreview(){
    const preview = document.createElement('div')
    preview.id = 'project-preview'
    preview.classList.add('project-preview')
    preview.innerHTML = `
    <h1 id="project-name">Inbox</h1>
    <div class="tasks-list" id="tasks-list"></div>
    <button class="button-add-task" id="button-add-task">
        <i class="fas fa-plus" aria-hidden="true"></i>
        Add Task
    </button>`
    main.appendChild(preview)
}