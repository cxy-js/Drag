# Drag
简单的封装原生js拖拽
## 简单使用
```javascript
    new Drag('el')
```
+ el 为元素class,或id
+ 此元素样式需position
## 实例
```html
    <!DOCTYPE html>
    <html>
        <head>
        <meta charset='UTF-8'>
        <title>Drag</title>
        <script src='drag.js'></script>
        <style>
            #div{
                position:absolute;
                width:100px;
                height:100px;
                cursor:move;
                background:#ff0000
            }
        </style>
        </head>
     <body>
        <div id="div"></div>
        <script>
            new Drag('#div')
            //或者
            //Drag("#div")
        </script>
     </body>
    </html>
```
