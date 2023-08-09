import { defineClientConfig } from "@vuepress/client";
import ChartJS from "C:/Doc/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.234_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "C:/Doc/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.234_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "C:/Doc/my-docs/node_modules/.pnpm/vuepress-shared@2.0.0-beta.234_vuepress@2.0.0-beta.66/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "C:/Doc/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.234_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "C:/Doc/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.234_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "C:/Doc/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.234_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import ECharts from "C:/Doc/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.234_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import "C:/Doc/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.234_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import FlowChart from "C:/Doc/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.234_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "C:/Doc/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.234_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "C:/Doc/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.234_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import Mermaid from "C:/Doc/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.234_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "C:/Doc/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.234_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import "C:/Doc/my-docs/node_modules/.pnpm/reveal.js@4.5.0/node_modules/reveal.js/dist/reveal.css";
import Presentation from "C:/Doc/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.234_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import { injectRevealConfig } from "C:/Doc/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.234_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";
import Playground from "C:/Doc/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.234_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "C:/Doc/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.234_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "C:/Doc/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.234_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "C:/Doc/my-docs/node_modules/.pnpm/katex@0.16.8/node_modules/katex/dist/katex.min.css";
import "C:/Doc/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.234_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import { defineAsyncComponent } from "vue";
import { injectVuePlaygroundConfig } from "C:/Doc/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.234_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
    injectRevealConfig(app);
    app.component("Presentation", Presentation);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
    injectVuePlaygroundConfig(app);
    app.component("VuePlayground", defineAsyncComponent(() => import("C:/Doc/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.234_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/components/VuePlayground.js")));
  },
  setup: () => {

  }
});
