import DefaultTheme from 'vitepress/theme';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { inBrowser, useData, useRoute } from 'vitepress';
import './index.css'
import mediumZoom from 'medium-zoom';
import { nextTick, watch } from 'vue';
export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    // ...
  },
  setup() {
    // 获取前言和路由
    const { frontmatter } = useData();
    const route = useRoute();
    watch(
      () => route.path,
      () => nextTick(() => {
        if (inBrowser) {
          const content = document.querySelector("#VPContent")
          let images = content.querySelectorAll("img");
          images.forEach((image) => {
            image.classList.add("zoom-image");
          });
          mediumZoom(".zoom-image");
        }
      }),
      { immediate: true },
    )
    // 评论组件 - https://giscus.app/
    giscusTalk({
        repo: 'LetTTGACO/elog-docs',
        repoId: 'R_kgDOIh13_Q',
        category: 'General', // 默认: `General`
        categoryId: 'DIC_kwDOIh13_c4CbnHJ',
        mapping: 'pathname', // 默认: `pathname`
        inputPosition: 'top', // 默认: `top`
        lang: 'zh-CN', // 默认: `zh-CN`
        lightTheme: 'light', // 默认: `light`
        darkTheme: 'transparent_dark', // 默认: `transparent_dark`
        // ...
      }, {
        frontmatter, route
      },
      // 是否全部页面启动评论区。
      // 默认为 true，表示启用，此参数可忽略；
      // 如果为 false，表示不启用。
      // 可以在页面使用 `comment: true` 前言单独启用
      true
    );
  }
};
