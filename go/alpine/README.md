linux 环境的空壳容器，用于管理服务，不包含项目代码

## 注意
1. 提前完成 go 项目的构建（注意不同的系统和架构）
   `CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build --tags=production -o app`
2. 可执行程序的文件名 `app`
3. 挂载的目录： `/app`
4. 暴露的端口：80，所以服务需要跑在 80 端口上

## 启动

docker run -d -p 8000:80 -v /Users/houserqu/Project/tiger/:/app --name tiger-runner runer:latest