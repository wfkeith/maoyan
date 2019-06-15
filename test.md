#对已经获取的城市数据进行二次操作

-s

```js
//数据类型
var arr = [
  {id: 11, city: '莆田', py: 'putian'},
  {id: 1, city: '北京', py: 'beijing'},
  {id: 2, city: '上海', py: 'shanghai'},
  {id: 3, city: '保定', py: 'baoding'}
]
var target = []
let index = 0
let hash = {}

arr.forEach(item => {
  let py = item.py.charAt(0).toUpperCase()
  if (hash[py]) {
    console.log(target[hash[py] - 1])
    target[hash[py] - 1].list.push(item)
  } else {
    hash[py] = ++ index
    console.log(hash[py])
    let obj = {
      py: py,
      list: [item]
    }
    target.push(obj)
  }
})
target.sort((a, b) => {
  return a.py.charCodeAt() - b.py.charCodeAt()
})
console.log(target)
```