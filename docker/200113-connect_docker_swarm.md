docker
## bridge network
bridge 네트워크 내의 컨테이너들끼리는 통신 가능
> docker-compose.yml
```yml
networks:
    mongo-networks:
        driver: "bridge"
#docker network create --driver=bridge mongo-networks
```

## Host network
## none Network
- 네트워크가 없는 환경
## Container Network
## overlay network (swarm)
- 다른 호스트들 간에 네트워크 공유


# Docker Swarm
- 여러개의 호스트를 나눠서 설치하고 묶어주기 위해 사용
## Compose (= `docker-compose`)
- 여러 컨테이너로 구성되 도커 애플리케이션을 관리
- 단일 호스트를 사용하기 위해 사용함
## Swarm (= `docker swarm`)
- 클러스터 구축 및 관리
    - 클러스터?: 여러개의 떨어진 호스트
## Service (= `docker service`)
- 스웜에서 클라이언트 안의 서비스를 관리
    - 서비스?: 컨테이너 하나 이상의 집합
- `replicate` 를 위해 사용 (ex> mysql master slave replication)
- 여러개의 Compose
- swarm 상태에서만 사용 가능
## Stack (= `docker stack`)
- 스웜에서 여러 개의 서비스를 합한 전체 애플리케이션을 관리
- 여러개의 Service
- swarm 상태에서만 사용 가능


# Docker Swarm 
## Docker in Docker, dind
docker swarm 을 구현하기 위해
도커 안에 도커 호스트를 실행한다.
## registery ()
docker hub 대신 pull 이나 push 할 수 있는 이미지를 저장하는 저장소 컨테이너
### docker hub
- image: https://hub.docker.com/_/docker
- dind 이미지를 사용해야 한다.
### node
- 사용할 container
    - registry
        - image = registry
        - docker hub 역할
        - 개발환경: 인증서 없이 사용
        - 각 노드에 push 해 줄 수 있는 서버
    - manager
        - image = docker:dind
        `docker exec -it docker03 bash`
    - worker 1~n
        - imgae = docker:dind

## docker swarm 설정
## docker manager 에 swarm 생성
swarm 의 토큰을 생성하여 다른 노드에서 join 할 수 있는 코드를 생성해준다.
```shell
# docker exec -it manager docker swarm init
Swarm initialized: current node (5u00t82wxlfhot5xlq7rlqmmm) is now a manager.

To add a worker to this swarm, run the following command:

    docker swarm join --token SWMTKN-1-4bsg473ntvebhmfxq351ie1uwfgzssf6myvu2x5pb2ov5r42cu-cur0g6ar0tc51sdea7yu4lalz 172.27.0.3:2377

To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.
```
## docker node 를 manager 에 조인
```shell
# docker exec -it worker01 docker swarm join --token SWMTKN-1-4bsg473ntvebhmfxq351ie1uwfgzssf6myvu2x5pb2ov5r42cu-cur0g6ar0tc51sdea7yu4lalz 172.27.0.3:2377
This node joined a swarm as a worker.
# docker exec -it worker02 docker swarm join --token SWMTKN-1-4bsg473ntvebhmfxq351ie1uwfgzssf6myvu2x5pb2ov5r42cu-cur0g6ar0tc51sdea7yu4lalz 172.27.0.3:2377
This node joined a swarm as a worker.
# docker exec -it worker03 docker swarm join --token SWMTKN-1-4bsg473ntvebhmfxq351ie1uwfgzssf6myvu2x5pb2ov5r42cu-cur0g6ar0tc51sdea7yu4lalz 172.27.0.3:2377
This node joined a swarm as a worker.
```
## 연결 확인
```shell
# docker exec -it manager docker node ls
ID                            HOSTNAME            STATUS              AVAILABILITY        MANAGER STATUS      ENGINE VERSION
3saaabwuupiy6djqhw7kj33fx     3c1e5631f261        Ready               Active                                  19.03.5
5u00t82wxlfhot5xlq7rlqmmm *   192d227db2a1        Ready               Active              Leader              19.03.5
248hkqq34wlu05ijh48f65eeu     b01a08490eae        Ready               Active                                  19.03.5
exex4o326tdy5acjg3fh8vb5y     f86d405e658c        Ready               Active                                  19.03.5
# docker ps
CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                                                                   NAMES
b01a08490eae        docker:19.03.5-dind   "dockerd-entrypoint."   4 minutes ago       Up 4 minutes        2375-2376/tcp, 4789/udp, 7946/tcp, 7946/udp                             worker01
f86d405e658c        docker:19.03.5-dind   "dockerd-entrypoint."   4 minutes ago       Up 4 minutes        2375-2376/tcp, 4789/udp, 7946/tcp, 7946/udp                             worker03
3c1e5631f261        docker:19.03.5-dind   "dockerd-entrypoint."   4 minutes ago       Up 4 minutes        2375-2376/tcp, 4789/udp, 7946/tcp, 7946/udp                             worker02
192d227db2a1        docker:19.03.5-dind   "dockerd-entrypoint."   4 minutes ago       Up 4 minutes        2375-2376/tcp, 3375/tcp, 0.0.0.0:9000->9000/tcp, 0.0.0.0:8000->80/tcp   manager
249a38d79476        registry:latest       "/entrypoint.sh /etc"   4 minutes ago       Up 4 minutes        0.0.0.0:5000->5000/tcp                                                  registry
# docker exec -it manager docker network ls
NETWORK ID          NAME                DRIVER              SCOPE
485e4b1e2981        bridge              bridge              local
6d6f5b1ca597        docker_gwbridge     bridge              local
dbeb7c2dbfb4        host                host                local
gar4ogpr78cc        ingress             overlay             swarm
0f92584ddf1f        none                null                local
```


[http://localhost:5000/v2/_catalog] = `{"repositories":[]}`
```shell
# docker tag busybox:latest localhost:5000/busybox:latest
# docker images
REPOSITORY               TAG                 IMAGE ID            CREATED             SIZE
mong_mongo_setup         latest              d31d07957cb4        2 hours ago         364MB
mongo_repl_setup         latest              72ec2d9751e5        2 hours ago         364MB
docker                   19.03.5-dind        a90db1182c99        13 days ago         237MB
docker                   dind                a90db1182c99        13 days ago         237MB
busybox                  latest              6d5fcfe5ff17        13 days ago         1.22MB
localhost:5000/busybox   latest              6d5fcfe5ff17        13 days ago         1.22MB
node                     alpine              e1495e4ac50d        2 weeks ago         111MB
mongo                    latest              a0e2e64ac939        3 weeks ago         364MB
registry                 latest              f32a97de94e1        10 months ago       25.8MB
twang2218/mysql          5.7-replica         ab65536a6e07        3 years ago         385MB
# docker push localhost:5000/busybox:latest
The push refers to repository [localhost:5000/busybox]
195be5f8be1d: Pushed
latest: digest: sha256:edafc0a0fb057813850d1ba44014914ca02d671ae247107ca70c94db686e7de6 size: 527
```
### push 한 이미지 목록 확인 가능
[http://localhost:5000/v2/_catalog] = `{"repositories":["busybox"]}`
### push 한 이미지를 node 에서 pull 가능
```shell
# docker exec -it manager docker pull registry:5000/busybox:latest
latest: Pulling from busybox
bdbbaa22dec6: Pull complete
Digest: sha256:edafc0a0fb057813850d1ba44014914ca02d671ae247107ca70c94db686e7de6
Status: Downloaded newer image for registry:5000/busybox:latest
registry:5000/busybox:latest
# docker images
REPOSITORY               TAG                 IMAGE ID            CREATED             SIZE
mong_mongo_setup         latest              d31d07957cb4        2 hours ago         364MB
mongo_repl_setup         latest              72ec2d9751e5        2 hours ago         364MB
docker                   19.03.5-dind        a90db1182c99        13 days ago         237MB
docker                   dind                a90db1182c99        13 days ago         237MB
busybox                  latest              6d5fcfe5ff17        13 days ago         1.22MB
localhost:5000/busybox   latest              6d5fcfe5ff17        13 days ago         1.22MB
node                     alpine              e1495e4ac50d        2 weeks ago         111MB
mongo                    latest              a0e2e64ac939        3 weeks ago         364MB
registry                 latest              f32a97de94e1        10 months ago       25.8MB
twang2218/mysql          5.7-replica         ab65536a6e07        3 years ago         385MB
# docker exec -it manager docker images
REPOSITORY              TAG                 IMAGE ID            CREATED             SIZE
registry:5000/busybox   latest              6d5fcfe5ff17        13 days ago         1.22MB
```

#### Swarm 상태 확인
```
hwanghyojin-ui-MacBookPro:~ hwanghyojin$ docker exec -it manager docker info | grep Swarm
 Swarm: active
```