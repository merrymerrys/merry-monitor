import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "quick-start",
    {
      text: "操作手册",
      icon: "laptop-code",
      prefix: "guide/",
      link: "guide/",
      children: [
        "monitor.md",
        "excel.md",
        "dataview.md",
        "xmlview.md",
        "setting.md",
        {
          "text": "更多功能",
          icon: "laptop-code",
          children: [
            "mainpage.md",
            "slowsignal.md",
            "jsonview.md",
            "database.md",
            "deviceinfo.md",
          ]
        }
      ],
    },
  ],
});
