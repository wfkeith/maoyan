#对已经获取的城市数据进行二次操作

-s

```js
//数据类型
var arr = [
  {id: 1, city: '北京', py: 'beijing'},
  {id: 2, city: '上海', py: 'shanghai'}
]
let newlist = {}
let py = ''
arr.forEach(item => {
  py = item.py.charAt(0).toUpperCase()
  if (newlist[py]) {
    
  }
})







```