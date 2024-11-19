// 只在首页加载 Pace 进度条
if (window.location.pathname === '/') {
  Pace.restart();
}
