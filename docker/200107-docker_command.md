
pull 다운로드

docker push [이미지]

## 이미지
> 이미지의 이름([이미지]) 은 `[계정이름]/[이미지이름]:[이미지태그]` 로 구성된다
### 이미지 생성
```shell
docker image build -t [이미지]
docker build -t [이미지]
```
- `-t`: `[이미지]`
- `--no-cache`, `--pull=true`: 빌드할 때 캐시를 사용하지 않음

### 이미지 리스트 불러오기
```shell
docker image ls
docker images
```
### 이미지 삭제
> 삭제되지 않은 컨테이너가 있으면 이미지를 삭제할 수 없다.
```shell
docker image rm
docker rmi
```
- `-f`: 강제 삭제 (중복되는 ID 가 있는 컨테이너가 있을 경우 사용)

## 컨테이너
### 컨테이너 실행
```shell
docker run [image]
docker run -p [inner port num] [image]
docker run -p [external prot num]:[inner port num] [image]
docker run --name [user image name] [image]
```
- `-p [[external prot][:][inner prot]]`: 포트포워딩
- `-d`: 백그라운드 실행
- `-v`: 
- `-e`: 
- `-it`: 
- `--name [name]`: [name] 은 중복 불가
- `--rm`: 컨테이너를 종료할 때 자동으로 컨테이너가 삭제됨
- `--link`: 

### 컨테이너 리스트
```shell
docker container ls
docker ps
```
- `-q`: 아이디만 리스트
- `-a`: 종료된 컨테이너까지 리스트
    - 응용
        ```shell
        $ docker stop $(docker ps -q)
        $ docker rm $(docker ps -qa)
        ```
### 실행중인 컨테이너 종료
```shell
docker stop [container name or ID]
```
#### 응용
```
docker stop myweb1; docker rm myweb1
```
### 컨테이너 제거
```
docker container rm [컨테이너 id OR 컨테이너 이름]
docker rm [컨테이너 id OR 컨테이너 이름]
```


## 컨테이너에 명령어 전송
```shell
docker exec -it [container id] [명령어]
```
- `-i`: input
- `-t`: tty (telnet type )

- 커맨드창 접속
    ```shell
    docker exec -it [container id] sh
    ```

    
## 종료되어있는 도커 컨테이너 및 이미지 전체 삭제
docker container prune
docker logs [container ID]
docker search

## 
```shell
docker run -d -p 3306:3306 -e MYSQL_ALLOW_EMPTY_PASSWORD=true --name mysql mysql:5.7
```