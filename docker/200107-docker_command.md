# docker

## docker hub
### 다운로드
```Shell
docker pull [이미지]
```

### 업로드
```shell
docker push [이미지]
```

---------------------------------------------
## 이미지
> 이미지의 이름([이미지]) 은 `[계정이름]/[이미지이름]:[이미지태그]` 로 구성된다
### 이미지 생성
```shell
docker image build -t [이미지]
docker build -t [이미지]
```
- `-t`: `[이미지]`
- `--no-cache` , `--pull=true`: 빌드할 때 캐시를 사용하지 않음
### 이미지 리스트
```shell
docker image ls
docker images
```
### 이미지 삭제
> 삭제할 이미지로 생성된 컨테이너가 남아있을 경우 삭제할 수 없다.
```shell
docker image rm
docker rmi
```
- `-f`: 강제 삭제 (중복되는 ID 가 있는 컨테이너가 있을 경우 사용)

---------------------------------------------
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
- `--name [name]`: `[name]` 은 중복 불가
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
> 응용 `docker stop myweb1; docker rm myweb1`
### 컨테이너 제거
```
docker container rm [컨테이너 id OR 컨테이너 이름]
docker rm [컨테이너 id OR 컨테이너 이름]
```
### 컨테이너 로그
```shell
dockeer container logs [컨테이너 id OR 컨테이너 이름]
dockeer logs [컨테이너 id OR 컨테이너 이름]
```

## 컨테이너에 명령어 전송
```shell
docker exec -it [container id] [명령어]
```
- `-i`: input
- `-t`: tty (telnet type 

### 응용
- 커맨드창 접속
    ```shell
    docker exec -it [container id] sh
    ```

---------------------------------------------

## 삭제
    
### 종료되어있는 도커 컨테이너 전체 삭제
```shell
docker container prune
```
### 도커 이미지, 컨테이너 전체 삭제
```shell
docker system prune
```
## 
```shell
docker search
```

---------------------------------------------
# 응용
## mysql 설치
```shell
docker run -d -p 3306:3306 -e MYSQL_ALLOW_EMPTY_PASSWORD=true --name mysql mysql:5.7
```
- `3306 포트`를 `HostOS` 에서 사용중이라면 닫아두어야 `3306 포트`의 `컨테이너`를 실행(`docker run`)할 수 있다.
- `MYSQL_ROOT_PASSWORD`, `MYSQL_ALLOW_EMPTY_PASSWORD`, `MYSQL_RANDOM_ROOT_PASSWORD` 셋 중 하나 지정해야함
    - `MYSQL_ALLOW_EMPTY_PASSWORD=true`
> `mysql -uroot -hlocalhost --port 3306 -p` 으로 접속 가능

## tenserflow
> tenserflow = python jupyter notebook
```shell
docker run -d -p 8888:8888 teamlab/pydata-tensowflow:0.1
```
---------------------------------------------

## ??
beargrant