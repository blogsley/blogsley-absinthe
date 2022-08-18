import VueDraggableResizable from 'vue-draggable-resizable/src/components/vue-draggable-resizable.vue'
import 'vue-draggable-resizable/src/components/vue-draggable-resizable.css'

// "async" is optional
export default async (app, options) => {
  app.component('vue-draggable-resizable', VueDraggableResizable)
}
