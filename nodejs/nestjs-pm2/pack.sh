# CI 流水线中执行的构建脚本
# 执行完此脚本后，根据 Dockerfile 构建容器镜像

set -e
set -x

npx npm ci
npm run build
npm prune --production # 删除未使用的依赖文件，减小 node_modules 体积