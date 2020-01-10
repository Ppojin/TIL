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