// 检查是否是首次加载
if (!localStorage.getItem('visited')) {
    // 设置 Pace.js 启动
    Pace.restart(); // 确保第一次加载时显示进度条
    
    // 标记为已访问
    localStorage.setItem('visited', 'true');
} else {
    // 如果已经访问过，不再显示进度条
    Pace.options = {
        document: false,  // 禁用文档加载进度条
        eventLag: false,  // 禁用事件延迟检测
        ajax: false,      // 禁用 AJAX 进度条
    };
}
