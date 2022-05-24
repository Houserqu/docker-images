# CI 流水线中使用的 Dockerfile
# 执行完 build.sh 后，根据此 Dockerfile 构建容器镜像
FROM node:14-alpine AS runtime_stage

WORKDIR /package

COPY ./node_modules ./node_modules
COPY ./dist ./dist
COPY package.json ecosystem.config.js nest-cli.json ./

CMD ["npm", "run", "pm2"]