# Create_mysql_docker_master_slave_server
## Settings
> ![](./static/200113/01.png)
```shell
$ docker ps
CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                                                                   NAMES
c3c0d146a8c3        docker:19.03.5-dind   "dockerd-entrypoint.…"   59 minutes ago      Up 59 minutes       2375-2376/tcp, 4789/udp, 7946/tcp, 7946/udp                             worker03
f523d1f846ed        docker:19.03.5-dind   "dockerd-entrypoint.…"   59 minutes ago      Up 59 minutes       2375-2376/tcp, 4789/udp, 7946/tcp, 7946/udp                             worker01
786b6c457789        docker:19.03.5-dind   "dockerd-entrypoint.…"   59 minutes ago      Up 59 minutes       2375-2376/tcp, 4789/udp, 7946/tcp, 7946/udp                             worker02
b022a33a7dcb        docker:19.03.5-dind   "dockerd-entrypoint.…"   59 minutes ago      Up 59 minutes       2375-2376/tcp, 3375/tcp, 0.0.0.0:9000->9000/tcp, 0.0.0.0:8000->80/tcp   manager
2dad756650a3        registry:latest       "/entrypoint.sh /etc…"   59 minutes ago      Up 59 minutes       0.0.0.0:5000->5000/tcp                                                  registry
$ docker exec -it manager docker node ls
ID                            HOSTNAME            STATUS              AVAILABILITY        MANAGER STATUS      ENGINE VERSION
7qsqhs76r8ov6375opo13h2x3     786b6c457789        Ready               Active                                  19.03.5
xe0p8r9w9zmyhufzxhjqjrghx *   b022a33a7dcb        Ready               Active              Leader              19.03.5
ahjw1hw1q0rtdupzwypjflcz4     c3c0d146a8c3        Ready               Active                                  19.03.5
shpbzfpuw0wegvkr7bc9arpd7     f523d1f846ed        Ready               Active                                  19.03.5
$ docker inspect manager
    ...
        "Mounts": [
            {
                "Type": "bind",
                "Source": "{YourHostVolumePath}/stack",
                "Destination": "/stack",
                "Mode": "rw",
                "RW": true,
                "Propagation": "rprivate"
            },
            ...
        ],
    ...
```

## Create `network` on `manager` container
This network will be use on mysql master and slave container.
```shell
$ docker exec -it manager docker network create --driver=overlay --attachable ch03
```

## Create tododb the mysql image
1. create `Dockerfile` for `tododb` 
    > ./Dockerfile
    ```Dockerfile
    FROM mysql:5.7

    # (1) 패키지 업데이트 및 wget 설치
    RUN apt-get update
    RUN apt-get install -y wget

    # (2) entrykit 설치
    ## prehook 
    ### 선행작업을 위한 라이브러리
    ### server-id를 동적으로 작업해야 하기 때문에 사용함
    RUN wget https://github.com/progrium/entrykit/releases/download/v0.4.0/entrykit_0.4.0_linux_x86_64.tgz
    RUN tar -xvzf entrykit_0.4.0_linux_x86_64.tgz
    RUN rm entrykit_0.4.0_linux_x86_64.tgz
    RUN mv entrykit /usr/local/bin/
    RUN entrykit --symlink

    # (3) 스크립트 및 각종 설정 파일 복사
    COPY add-server-id.sh /usr/local/bin/
    COPY etc/mysql/mysql.conf.d/mysqld.cnf /etc/mysql/mysql.conf.d/
    COPY etc/mysql/conf.d/mysql.cnf /etc/mysql/conf.d/
    COPY prepare.sh /docker-entrypoint-initdb.d
    COPY init-data.sh /usr/local/bin/
    COPY sql /sql

    # (4) 스크립트, mysqld 실행
    ENTRYPOINT [ \
    "prehook", \
        "add-server-id.sh", \
        "--", \
    "docker-entrypoint.sh" \
    ]

    CMD ["mysqld"]
    ```

2. Build image(`localhost:5000/ch04/tododb:latest`) using Dockerfile and push to registry container.
    ```shell
    $ docker build -t localhost:5000/ch04/tododb:latest .
    $ docker push localhost:5000/ch04/tododb:latest
    ```

3. Pull image on manager container
    ```shell
    $ docker pull registry:5000/ch04/tododb:latest
    ```

## Create mysql master and slave container
1. Create yml file
    - This yml file will creating mysql master and slave container.
    
    > {YourHostVolumePath}/stack/todo-mysql.yml
    ```yml
    version: "3"

    services:
    master:
        image: registry:5000/ch04/tododb:latest
        deploy:
        replicas: 1
        placement:
            constraints: [node.role != manager]
        environment: # echo 로 확인할 수 있는 변수 ex) docker -e "MYSQL_ROOT_PASSWORD: gihyo"
        MYSQL_ROOT_PASSWORD: gihyo 
        MYSQL_DATABASE: tododb 
        MYSQL_USER: gihyo 
        MYSQL_PASSWORD: gihyo 
        MYSQL_MASTER: "true"
        networks:
        - todoapp

    slave:
        image: registry:5000/ch04/tododb:latest
        deploy:
        replicas: 2
        placement:
            constraints: [node.role != manager]
        depends_on:
        - master
        environment:
        MYSQL_MASTER_HOST: master
        MYSQL_ROOT_PASSWORD: gihyo 
        MYSQL_DATABASE: tododb 
        MYSQL_USER: gihyo 
        MYSQL_PASSWORD: gihyo 
        MYSQL_ROOT_PASSWORD: gihyo 
        MYSQL_REPL_USER: repl 
        MYSQL_REPL_PASSWORD: gihyo 
        networks:
        - todoapp

    networks:
    todoapp:
        external: true
    ```

## Deploy the stack
```shell
$ docker exec -it manager docker stack deploy -c /stack/todo-mysql.yml todo_mysql
```

## Confirm your server
Show stack of your swarm
``` shell
$ docker exec -it manager docker stack ls
NAME                SERVICES            ORCHESTRATOR
todo_mysql          2                   Swarm
```
show service of your swarm
```
$ docker exec -it manager docker service ls
ID                  NAME                MODE                REPLICAS            IMAGE                              PORTS
dmqy4n0v2iu5        todo_mysql_master   replicated          1/1                 registry:5000/ch04/tododb:latest
0x2axihbhhco        todo_mysql_slave    replicated          2/2                 registry:5000/ch04/tododb:latest
```