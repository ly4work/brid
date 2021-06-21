## 持久化存储 DB

> tki.DB 包含 localStorage 及 sessionStorage 的读写操作。注意，DB 获取值时，返回的数据类型会与写入时传递的数据类型一致，开发者无需再进行处理

### tki.DB.local.setItem

<font color="#666" size="1px">更新时间：2021-06-21 </font>  
调用`tki.DB.local.setItem`写入本地存储

```javascript
//  基本使用，存储默认为localStorage
tki.DB.local.setItem("userInfo", {
  name: "Halo Tki",
});
```

#### 参数说明

| 参数    | 类型                              | 是否必须 | 默认值 | 说明   |
| ------- | --------------------------------- | -------- | ------ | ------ |
| key     | String                            | true     |        | 键     |
| value   | any                               | true     |        | 值     |


### tki.DB.local.getItem

<font color="#666" size="1px">更新时间：2021-06-21 </font>  
调用`tki.DB.local.getItem`读取本地存储

```javascript
tki.DB.local.setItem("userInfo");
```

#### 参数说明

| 参数    | 类型                              | 是否必须 | 默认值 | 说明   |
| ------- | --------------------------------- | -------- | ------ | ------ |
| key     | String                            | true     |        | 键     |

### tki.DB.local.removeItem

<font color="#666" size="1px">更新时间：2021-03-22 </font>  
调用`tki.DB.local.removeItem`删除本地存储

```javascript
//  默认从localStorage里移除

tki.DB.local.removeItem("userInfo");

```

#### 参数说明

同 `tki.DB.local.getItem`

## 持久化存储 Cookie

> Cookie类

### tki.Cookie.set
<font color="#666" size="1px">更新时间：2021-06-21 </font>  
调用`tki.Cookie.set`读取本地存储

```javascript
tki.Cookie.set({
  key: 'token',
  value: 'abcdefg123456',
  day: '30',
  path: '/',
  domain: '.gaojin.com.cn'
});

```
Options对象参数




| 参数    | 类型                              | 是否必须 | 默认值 | 说明   |
| ------- | --------------------------------- | -------- | ------ | ------ |
| key     | String                            | true     |        | 键     |
| value     | any                            | true     |        | 值     |
| day     | number                            | false     |   3     | 存储时效，单位为天     |
| path     | string                            | false     |   '/'     | 路径     |
| domain     | string                            | false     |   document.domain     | 路径     |


### tki.Cookie.get
<font color="#666" size="1px">更新时间：2021-06-21 </font>  
调用`tki.Cookie.get`读取本地存储

```javascript
tki.Cookie.get({
  key: 'token'
});

```
Options对象参数



| 参数    | 类型                              | 是否必须 | 默认值 | 说明   |
| ------- | --------------------------------- | -------- | ------ | ------ |
| key     | String                            | true     |        | 键     |



### tki.Cookie.remove
<font color="#666" size="1px">更新时间：2021-06-21 </font>  
调用`tki.Cookie.remove`读取本地存储

```javascript
tki.Cookie.remove({
  key: 'token',
});

```
Options对象参数



| 参数    | 类型                              | 是否必须 | 默认值 | 说明   |
| ------- | --------------------------------- | -------- | ------ | ------ |
| key     | String                            | true     |        | 键     |

