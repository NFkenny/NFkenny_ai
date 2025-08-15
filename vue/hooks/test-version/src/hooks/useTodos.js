import {
  ref,
  computed // 计算属性
} from 'vue'

export function useTodos() {
  let title = ref("");
  let todos = ref([
    {
      title: '学习',
      done: false
    },
    {
      title: '睡觉',
      done: false
    },
    {
      title: '打豆豆',
      done: false
    }
  ])
  function addTodo() {
    todos.value.push({
      title: title.value,
      done: false
    })
  }
  function clear() {
    // done false 留下，已完成的清除
    todos.value = todos.value.filter(item => !item.done);
  }
  let active = computed(() => {
    return todos.value.filter(item => !item.done).length;
  })
  let all = computed(() => todos.value.length)
  let allDone = computed({
    get: function() {
      return active.value === 0;
    },
    set: function() {
      todos.value.forEach(todo => {

      })
    }
  })
  return {
    title, 
    todos, 
    addTodo, 
    clear, 
    active, 
    all, 
    allDone,
  }
}