module.exports = {
  apps: [
    {
      name: require('./package').name,
      script: 'dist/main.js', // 入口文件
      instances: 4, // 启动进程数，默认使用4个进程
      exec_mode: 'cluster', // 执行模式，默认使用 cluster
      merge_logs: true, // 合并日志进程输出
      env: {
        // 运行时环境变量
        NODE_ENV: 'Production',
      },
    },
  ],
};
