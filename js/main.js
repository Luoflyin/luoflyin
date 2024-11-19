document.addEventListener("DOMContentLoaded", function() {
  // 判断是否是主页
  if (window.location.pathname === "/" || window.location.pathname === "/README.md") {
    // 主页加载时启用 pace.js 进度条
    Pace.restart();
  } else {
    // 子页面加载时禁用 pace.js
    Pace.options.ajax = false; // 禁用 AJAX 请求时触发进度条
    Pace.options.document = false; // 禁用文档加载时触发进度条
    Pace.options.eventLag = false; // 禁用事件延迟触发进度条
  }
});
