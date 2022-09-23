[[toc]]

# 外链至其他文件

[Home](/) <!-- sends the user to the root index.md -->
[foo](/foo/) <!-- sends the user to index.html of directory foo -->
[foo heading](./#heading) <!-- anchors user to a heading in the foo index file -->
[bar - three](../bar/three) <!-- you can omit extention -->
[bar - three](../bar/three.md) <!-- you can append .md -->
[bar - four](../bar/four.html) <!-- or you can append .html -->

# tips

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

::: details Click me to view the code

```js
console.log("Hello, VitePress!");
```

:::

---

# 语法高亮 + 高亮选中行

> 语法高亮 + 高亮选中行

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

# 导入外部文件

- 导入外部 js 文件

<<< @/test.js{2}

- 导入外部 md 文件

<<< @/getting-started.md

- 导入外部文件制定范围内容 region

<<< @/snippets/snippet-with-region.js#snippet{1}

- 导入外部 java 文件

<<< @/snippets/java-snippets.java{java}

- 导入外部 csharp 文件

- @/snippets/csharp-snippets.cs{csharp}

## 导入外部 md 文件

<!--@include: ./basics.md-->

## head2-0

### head3 - 0

## head2-1
