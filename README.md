### 使用方式

<br/>Slate + NextJS 範本，使用 TailwindCSS 進行 Style 制定

```
    npm ci  //安裝


    npm run dev //執行
```

## SlateJS Editor Example

[線上 Demo](https://slate-editor.netlify.app/)

編輯器使用`SlateJS`進行撰寫，目前已完成功能有：

## 左側功能列：

-   Heading 類型限制 text style 使用
-   內文`H2`大標
-   內文`H3`小標
-   `blockquote` 引言
-   數字列表、無數字列表
-   圖片插入：URL 插入、本地圖片上傳
-   圖片插入時強制輸入 alt，圖片提供刪除與修改 alt 按鈕
-   客製區塊插入

## 反白功能列(控制所選文字)：

-   粗體 (快捷鍵：`ctrl/cmd + b`)
-   斜體 (快捷鍵：`ctrl/cmd + i`)
-   底線 (快捷鍵：`ctrl/cmd + u`)
-   `Code` (快捷鍵：`ctrl/cmd` + ` )
-   刪除線
-   超連結新增
-   超連結移除
-   反白功能列依照所屬區塊型態進行限制

##快捷鍵(HotKey)說明：

-   `shift + Enter` - soft break
-   `Enter` - 列表型態時無內容自動回復為 default
-   `Enter` - 標題型態斷行時不繼承，回復為 default
-   `ctrl/cmd + Backspace` - 刪除整個區塊
-   `Backspace` - 段落內無文字時，會先清除樣式再刪除段落

# xinmedia-slateJs_dev

此為欣傳媒開發編輯器用的專案 repo，開發已 SlateJs 為基底作開發。
