// pace-init.js
document.addEventListener('DOMContentLoaded', function() {
  // 检查当前 URL 是否是主页
  if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    // 只有在主页时才启用 Pace.js
    paceOptions = {
      // 你可以在这里自定义 Pace.js 配置
    };
    Pace.start();
  }
});
