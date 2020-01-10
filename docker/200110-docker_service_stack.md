# docker service
애플리케이션을 구성하는 일부 컨테이너(단일 또는 복수) 를 제어하기 위한 단위
- 스웜에서 클라이언트 안의 서비스를 관리
    - 서비스?: 컨테이너 하나 이상의 집합
- `replicate` 를 위해 사용 (ex> mysql master slave replication)
- 여러개의 Compose
- swarm 상태에서만 사용 가능

## Swarm 상태 확인
```
hwanghyojin-ui-MacBookPro:~ hwanghyojin$ docker exec -it manager docker info | grep Swarm
 Swarm: active
```
## swarm 적용
```
docker exec -it manager\
    docker serivce create\
```

# docker stack
하나 이상의 서비스를 그룹으로 묶은 단위, 애플리케이션 전체 구성 정의
    서비스는 애플리케이션 이미지를 하나 밖에 다루지 못함
여러 서비스를 함께 다룰 수 있음
스택을 사용해 배포된 서비스 그룹 ::overlay 네트워크:: 에 속함
## 네트워크 생성
```shell
hwanghyojin-ui-MacBookPro:TIL hwanghyojin$ docker exec -it manager sh
/ # docker network create --driver=overlay --attachable ch03
mnql8zvc13armu6cl0fruj482
/ # docker network ls
NETWORK ID          NAME                DRIVER              SCOPE
mnql8zvc13ar        ch03                overlay             swarm
    ~
```
## stack 에 파일 배포
### 구성도

windows 8000
-> Manager 80
-> HAProxy 80
-> nginx 8080

### stack 배포 명령어
```shell
docker stack deploy -c "[file path]" [stack name]
```
### 설치
- ./stack/my_webapi.yml
    ```yml
    version: "3"
    services:
        api:
            image: registry:5000/example/echo:latest
            deploy:
                replicas: 3
                placement:
                    constraints: [node.role != manager]
            networks:
                - ch03
        
        nginx:
            image: gihyodocker/nginx-proxy:latest
            deploy:
                replicas: 3
                placement:
                    constraints: [node.role != manager]
            environment:
                BACKEND_HOST: echo_api:8080
            networks:
                - ch03
            depends_on: 
                - api
            
    networks:
        ch03:
            external: true
    ```
    ```shell
    / # docker stack deploy -c /stack/my_webapi.yml echo
    Creating service echo_api
    Creating service echo_nginx
    / # docker stack ls
    NAME                SERVICES            ORCHESTRATOR
    echo                2                   Swarm
    / # docker stack services echo
    ID                  NAME                MODE                REPLICAS            IMAGE                               PORTS
    802wodzxbzyc        echo_api            replicated          3/3                 registry:5000/example/echo:latest   
    orwo5tma6ady        echo_nginx          replicated          3/3                 gihyodocker/nginx-proxy:latest      
    / # docker service ls
    ID                  NAME                MODE                REPLICAS            IMAGE                               PORTS
    802wodzxbzyc        echo_api            replicated          3/3                 registry:5000/example/echo:latest   
    orwo5tma6ady        echo_nginx          replicated          3/3                 gihyodocker/nginx-proxy:latest      
    / # docker service ps echo_api
    ID                  NAME                IMAGE                               NODE                DESIRED STATE       CURRENT STATE           ERROR               PORTS
    el7a5katfx2p        echo_api.1          registry:5000/example/echo:latest   9c7087555112        Running             Running 2 minutes ago                       
    tjd3jdhkdgvl        echo_api.2          registry:5000/example/echo:latest   d13ffc2d4d97        Running             Running 2 minutes ago                       
    ih0r4dgvi9d5        echo_api.3          registry:5000/example/echo:latest   9381b3f06eae        Running             Running 2 minutes ago                       
    / # docker ps echo_nginx
    "docker ps" accepts no arguments.
    See 'docker ps --help'.

    Usage:  docker ps [OPTIONS]

    List containers
    / # docker service ps echo_nginx
    ID                  NAME                IMAGE                            NODE                DESIRED STATE       CURRENT STATE           ERROR               PORTS
    ypt6pmdoisvb        echo_nginx.1        gihyodocker/nginx-proxy:latest   9c7087555112        Running             Running 3 minutes ago                       
    bt9syt0trw03        echo_nginx.2        gihyodocker/nginx-proxy:latest   d13ffc2d4d97        Running             Running 3 minutes ago                       
    1c27hfenhphu        echo_nginx.3        gihyodocker/nginx-proxy:latest   9381b3f06eae        Running             Running 3 minutes ago                       
    / # docker service logs echo_api
    echo_api.3.ih0r4dgvi9d5@9381b3f06eae    | 2020/01/10 02:46:09 start server
    echo_api.2.tjd3jdhkdgvl@d13ffc2d4d97    | 2020/01/10 02:46:09 start server
    echo_api.1.el7a5katfx2p@9c7087555112    | 2020/01/10 02:46:09 start server
    ```

### visualizer 설치
- `./stack/visualizer.yml`
    ```yml
    version: "3"
    services:
        app:
            image: dockersamples/visualizer
            ports:
                - "9000:8080"
            volumes:
                - /var/run/docker.sock:/var/run/docker.sock
            deploy:
                mode: global
                placement:
                    constraints: [node.role == manager]
    ```
- stack deploy
    ```shell
    / # docker stack deploy -c /stack/visualizer.yml visualizer
    Creating network visualizer_default
    service app: undefined volume "var/run/docker.sock"
    / # docker stack ls
    NAME                SERVICES            ORCHESTRATOR
    echo                2                   Swarm
    / # docker stack deploy -c /stack/visualizer.yml visualizer
    Creating service visualizer_app
    / # docker service ps visualizer_app
    ID                  NAME                                       IMAGE                             NODE                DESIRED STATE       CURRENT STATE            ERROR               PORTS
    g3okobr8tvdg        visualizer_app.nu63swkgbdrcg8eov6bv8soze   dockersamples/visualizer:latest   e0923f64bd95        Running             Starting 2 seconds ago                       
    / # docker service ls
    ID                  NAME                MODE                REPLICAS            IMAGE                               PORTS
    802wodzxbzyc        echo_api            replicated          3/3                 registry:5000/example/echo:latest   
    orwo5tma6ady        echo_nginx          replicated          3/3                 gihyodocker/nginx-proxy:latest      
    n9tujpe6qawn        visualizer_app      global              1/1                 dockersamples/visualizer:latest     *:9000->8080/tcp
    ```