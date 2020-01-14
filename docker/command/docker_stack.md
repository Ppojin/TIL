# Docker stack 명령어

## deploy
- docker swarm 의 manager 에서만 실행할 수 있다.
- manager 의 swarm 에 stack 을 deploy 할 수 있다
- stack 을 deploy 하면 각 node`(manager, worker 등..)`들에 분배시킬 conatiner 의 
```shell
docker stack deploy [docker-compsoe 파일 경로] [stack 이름]
```

