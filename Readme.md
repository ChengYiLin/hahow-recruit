# Martin Lin Hahow Recruit

Demo : [https://hahow-recruit-fc3b4.web.app/](https://hahow-recruit-fc3b4.web.app/)

## 如何執行專案

1. 確認所使用的版本為 node 16.15 以上
2. 安裝 packages: `npm install`

    ```shell
     npm install
    ```

3. 開起 Dev Server: `npm run dev`

    ```shell
    npm run dev
    ```

## Packages

| Name              | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| react             | 實作 UI 的 JavaScript Library                                |
| react-dom         | 透過 React 來操作 DOM 所需的 Library                         |
| react-router-dom  | 構建 SPA 路徑所需的 Library                                  |
| styled-components | CSS-in-JS library，為我們的 React 元件建立樣式               |
| TypeScript        | 基於 JavaScript，為其提供靜態型別檢查                        |
| Webpack           | 進行 SPA 的程式碼打包                                        |
| Babel             | JavaScript Compiler, 將新型的語法轉換成特定版本的 JavaScript |
| Eslint            | 靜態檢查程式碼的問題                                         |
| Prettier          | 程式碼樣式設定                                               |

此專案建立於我先前座的 [Setup-React-with-Webpack](https://github.com/ChengYiLin/Setup-React-with-Webpack) 這 Repo 之上，<br>
裡有針對 Webpack 來建立 React 的開發環境做更細節的說明。

## 專案架構

### 程式碼

Folder 由外而內規劃如下 :

-   src : 主程式碼

    -   components : 放置
    -   pages : 頁面
    -   routes : 管理 SPA 的路徑
    -   services : 管理 Fetch API 相關邏輯
    -   styles : 管理樣式
    -   types : types for TypeScript
    -   utils : 共用的 Pure function 邏輯

-   template : React SPA 所使用的 html Template
-   webpack : Webpack Setting

### 頁面

共有 4 個頁面

-   Home Page : `/`
-   Hero List : `/heroes`
-   Hero Profile : `/heroes/:heroId`
-   Page Not Found

## 註解的原則

基本上如果是 function, 我都會寫上 JSDoc 的註解，<br>
目的是讓我能更快速知道它的目的及該如何給它提供參數，<br>
只要我滑鼠一移過去就可以了～<br><br>

Example :

```typescript
/**
 * Fetches a list of heroes from the API.
 *
 * @return {Promise<Types.IHeroInfo[]>} An array of hero information.
 */
export const getHeroesList = async (): Promise<Types.IHeroInfo[]> => {
    try {
        const result = await fetcher<Types.IHeroInfo[]>(
            `${API_DOMAIN}/heroes`,
            {
                headers: {
                    Accept: "application/json",
                },
            }
        );
        return result;
    } catch (error) {
        return Promise.reject(new Error("Get Heroes Data Failed"));
    }
};
```

## 遇到的困難及解決的方法

1. Hero Card 的圖片寬度是比例 (width: 100%), 要如何讓高度和寬度一樣呢？

    是有看到一個 CSS 屬性 [aspect-ratio](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio) 可以很達成這樣的操作，<br>
    它可以設定 width 和 height 的 ratio 要維持多少，<br>
    不過對於 Safari 的支援度比較少，需要版本在 15 以上。<br><br>
    因此採用 padding-bottom 搭配 percentage 的方式來達成，<br>
    舉個例子:<br>
    我想要 width 和 height 比為 4:3，<br>
    那麽我的 padding-bottom 為 75 (100 \* 3/4) %<br>
