FROM alpine:latest

# 设置东八区时区
RUN echo -e  "http://mirrors.aliyun.com/alpine/v3.4/main\nhttp://mirrors.aliyun.com/alpine/v3.4/community" >  /etc/apk/repositories \
&& apk update && apk add tzdata \
&& cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
&& echo "Shanghai/Asia" > /etc/timezone \
&& apk del tzdata

WORKDIR /app

EXPOSE 80

CMD ["./app"]