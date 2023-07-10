import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/", 

  lang: "zh-CN",
  title: "Merry Monitor",
  description: "Merry Monitor 的使用文档",

  theme,

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
