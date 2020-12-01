# Vue Introductie

Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.

## Basic Vue features

### Declarative Rendering

At the core of Vue.js is a system that enables us to declaratively render data to the DOM using straightforward template syntax:

```html
<div id="counter">
  Counter: {{ counter }}
</div>

```

``` typescript
import { createApp } from 'vue'

const app = createApp( {
  data() {
    return {
      counter: 0
    }
  }
})

app.mount('#counter')
```

We have already created our very first Vue app! This looks pretty similar to rendering a string template, but Vue has done a lot of work under the hood. The data and the DOM are now linked, and everything is now reactive. How do we know? Take a look at the example below where `counter` property increments every second and you will see how rendered DOM changes:

```typescript
 {
  data() {
    return {
      counter: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
```

In addition to text interpolation, we can also bind element attributes like this:

```html
<div id="bind-attribute">
  <span v-bind:title="message">
    Hover your mouse over me for a few seconds to see my dynamically bound
    title!
  </span>
</div>

```

```typescript
import { createApp } from 'vue'

const app = createApp( {
  data() {
    return {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  }
})

app.mount('#bind-attribute')
```

Here we're encountering something new. The `v-bind` attribute you're seeing is called a directive. Directives are prefixed with `v-` to indicate that they are special attributes provided by Vue, and as you may have guessed, they apply special reactive behavior to the rendered DOM. Here we are basically saying "keep this element's `title` attribute up-to-date with the `message` property on the current active instance."

### Handling User Input

To let users interact with your app, we can use the v-on directive to attach event listeners that invoke methods on our instances:

```html
<div id="event-handling">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Reverse Message</button>
</div>
```

```typescript
import { createApp } from 'vue'

const app = createApp( {
  data() {
    return {
      message: 'Hello Vue.js!'
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    }
  }
})

app.mount('#event-handling')
```

Note that in this method we update the state of our app without touching the DOM - all DOM manipulations are handled by Vue, and the code you write is focused on the underlying logic.

Vue also provides the `v-model` directive that makes two-way binding between form input and app state a breeze:

```html
<div id="two-way-binding">
  <p>{{ message }}</p>
  <input v-model="message" />
</div>
```

```typescript
import { createApp } from 'vue'

const app = createApp( {
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
}

app.mount('#two-way-binding')
```

### Conditionals and Loops

It's easy to toggle the presence of an element, too:

```html
<div id="conditional-rendering">
  <span v-if="seen">Now you see me</span>
</div>
```

```typescript
import { createApp } from 'vue'

const app = createApp( {
  data() {
    return {
      seen: true
    }
  }
})

app.mount('#conditional-rendering')
```

This example demonstrates that we can bind data to not only text and attributes, but also the structure of the DOM. Moreover, Vue also provides a powerful transition effect system that can automatically apply transition effects when elements are inserted/updated/removed by Vue.

There are quite a few other directives, each with its own special functionality. For example, the v-for directive can be used to display a list of items using the data from an Array:

```html
<div id="list-rendering">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>
```

```typescript
import { createApp } from 'vue'

const app = createApp( {
  data() {
    return {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  }
})

app.mount('#list-rendering')
```

## Intro to vue 3 (Vue Mastery)

[![Intro to Vue 3](./img/intro-to-vue-3_vuemastery.png)](https://www.vuemastery.com/courses/intro-to-vue-3/intro-to-vue3/)

Vue Mastery has an introduction course explaining the basic Vue 3 topics in small video's.

[Intro to Vue 3 - Vue Mastery](https://www.vuemastery.com/courses/intro-to-vue-3/intro-to-vue3/)

* [Intro to Vue 3](https://www.vuemastery.com/courses/intro-to-vue-3/intro-to-vue3/) (2:22)
* [Creating the Vue App](https://www.vuemastery.com/courses/intro-to-vue-3/creating-the-vue-app-vue3) (6:56)
* [Attribute Binding](https://www.vuemastery.com/courses/intro-to-vue-3/attribute-binding-vue3) (3:53)
* [Conditional Rendering](https://www.vuemastery.com/courses/intro-to-vue-3/conditional-rendering-vue3) (5:11)
* [List Rendering](https://www.vuemastery.com/courses/intro-to-vue-3/list-rendering-vue3) (3:31)
* [Event Handling](https://www.vuemastery.com/courses/intro-to-vue-3/event-handling-vue3) (4:31)
* [Class & Style Binding](https://www.vuemastery.com/courses/intro-to-vue-3/class-and-style-binding-vue3) (6:37)
* [Computerd Properties](https://www.vuemastery.com/courses/intro-to-vue-3/computed-properties-vue3) (6:23)
* [Compoents & Props](https://www.vuemastery.com/courses/intro-to-vue-3/components-and-props-vue3) (6:38)
* [Communicating Events](https://www.vuemastery.com/courses/intro-to-vue-3/communicating-events-vue3) (3:57)
* [Forms & v-model](https://www.vuemastery.com/courses/intro-to-vue-3/forms-and-v-model-vue3) (8:17)
