# docker 명령어 간단 정리
## 이미지 이름
이미지의 이름은 `[계정이름]/[이미지이름]:[이미지태그]`(이하 [이미지]) 로 구성된다

---
<br>

## docker hub
(docker hub)[https://hub.docker.com] 서버와 `docker desktop` 이 통신하여 image 를 업로드, 다운로드 할 수 있다.
### 다운로드
docker hub 에서 이미지를 불러오는 명령
```Shell
docker pull [이미지]
```

### 업로드
docker hub 에 이미지를 업로드하는 명령
```shell
docker push [이미지]
```
> 계정이 다르면 push 할 수 없다.

---
<br>

## 이미지
### 이미지 생성
```shell
docker image build -t [이미지] [Dockerfile]
docker build -t [이미지] [Dockerfile]
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

---
<br>

## 컨테이너
### 컨테이너 실행
```Docker
docker run [image]
docker run -p [inner port] [image]
docker run -p [[external prot:]inner prot] [image]
docker run --name [container image name] [image]
```
- `-p [[external prot:]inner prot]`: 포트포워딩 `inner port` 만 지정하거나 지정한 `inner port` 에 `external port` 를 연결할 수 있다
- `-d`: 백그라운드 실행
- `-v`: 
- `-e`: 
- `-it`: `input` 과 `teletypewriter` 를 이용하여 컨테이너에 명령어를 보낼 수 있다. (`-i` 명령어와 `-t` 명령어의 합성)
- `--name [container image name]`: `이미지 이름`은 이미 `docker desktop` 의 컨테이너로 올라와있는 `이미지 이름`과 중복 불가
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
docker stop [컨테이너]
```
- 응용 
    ```shell
    docker stop [컨테이너]; docker rm [컨테이너]
    ```
### 컨테이너 제거
```Shell
docker container rm [컨테이너]
docker rm [컨테이너]
```
### 컨테이너 로그
```shell
dockeer container logs [컨테이너]
dockeer logs [컨테이너]
```

### 컨테이너에 명령어 전송
```shell
docker exec -it [container id] [명령어]
```
- `-i`: input
- `-t`: tty (teletypewriter)
- 응용
    - 커맨드창 접속
        ```shell
        docker exec -it [container id] sh
        ```

---
<br>

## 삭제, 초기화
### 종료되어있는 도커 컨테이너 전체 삭제
```shell
docker container prune
```
### 도커 이미지, 컨테이너 전체 삭제
```shell
docker system prune
```
## ??
```shell
docker search
```

---
<br>

# 응용
## mysql 설치
```shell
docker run -d -p 3306:3306 -e MYSQL_ALLOW_EMPTY_PASSWORD=true --name mysql mysql:5.7
```
- `3306 포트`를 `HostOS` 에서 사용중이라면 닫아두어야 `3306 포트`의 `컨테이너`를 실행(`docker run`)할 수 있다.
- 필수 옵션
    - `-e MYSQL_ALLOW_EMPTY_PASSWORD=true`
    - `-e MYSQL_RANDOM_ROOT_PASSWORD=true`
    - `-e MYSQL_ROOT_PASSWORD=[비밀번호]`
> `mysql -uroot -hlocalhost --port 3306 -p` 으로 접속 가능

## tenserflow
> tenserflow = python jupyter notebook
```shell
docker run -d -p 8888:8888 teamlab/pydata-tensowflow:0.1
```