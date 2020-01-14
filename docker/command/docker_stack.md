# Docker stack
## 개요
docker stack 을 docker swarm 에 deploy 하여 각 service 의 container 를 각 node 들에 설치할 수 있다.

### yml file
stack 을 deploy 하기 전에 `docker-compose.yml` 과 같은 형식의 yml 파일 을 manager node 에 준비시켜야 한다.

### deploy
- docker swarm 의 manager 에서만 실행할 수 있다.
- manager 의 swarm 에서 stack 을 deploy 할 수 있다
- stack 을 deploy 하면 stack 을 통해 생성된 service 를 통해 각 node(manager, worker)들에 conatiner 를 분배시킨다.
```shell
(manager)$ docker stack deploy [yml_file_path] [stack_name]
Creating service [service_name]
```

## list
- 올라간 stack 의 list 를 확인할 수 있다.
```shell
(manager) $ docker stack ls
NAME                SERVICES            ORCHESTRATOR
todo_app            1                   Swarm
todo_mysql          2                   Swarm
visualizer          1                   Swarm
```

## services [stack_name]
- 올라간 stack 이 관리하는 service 의 list를 확인할 수 있다.
```shell
/ # docker stack services todo_app
ID                  NAME                MODE                REPLICAS            IMAGE                               PORTS
80syazvqvilx        todo_app_api        replicated          2/2                 registry:5000/ch04/todoapi:latest
```

## ps [stack_name]
```shell
(manager) $ docker stack ps todo_app
ID                  NAME                IMAGE                               NODE                DESIRED STATE       CURRENT STATE           ERROR               PORTS
jam61oncq1md        todo_app_api.1      registry:5000/ch04/todoapi:latest   3b6beca82c85        Running             Running 8 minutes ago                       
qnwctolnarz1        todo_app_api.2      registry:5000/ch04/todoapi:latest   feb71c4f1733        Running             Running 8 minutes ago         
```