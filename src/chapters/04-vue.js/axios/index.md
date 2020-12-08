# Axios

<https://github.com/axios/axios>

<YoutubeVideo video-id="qM4G1Ai2ZpE">

## Vue.js example project using Axios

<https://github.com/vives-webscripting-2020/vue-frontend-example>

## Using axios to consume a REST API

```typescript
axios.get('https://reqres.in/api/color')
.then( (result) => console.log(result.data))
```

```typescript
axios.get('https://reqres.in/api/color/1')
.then( (result) => console.log(result.data))
```

```typescript
const color = {
    name: 'yellow',
    color: '#10FFFF'
}
axios.post('https://reqres.in/api/color', color)
```

```typescript
const color = {
    color: '#00FFFF'
}
axios.put(`https://reqres.in/api/color/1`, color)
```

```typescript
axios.delete(`https://reqres.in/api/color/1`)
```

## Axios configuration

```typescript
const api = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: {'X-Custom-Header': 'foobar'}
})

api.get('https://reqres.in/api/color/1')
.then( (result) => console.log(result.data))

api.get('/color/1')
.then( (result) => console.log(result.data))

const color = {
    name: 'yellow',
    color: '#10FFFF'
}
api.post('/color', color)

const color = {
    color: '#00FFFF'
}
api.put(`/color/1`, color)

api.delete(`/color/1`)
```
