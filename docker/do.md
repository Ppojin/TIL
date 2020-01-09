```shell
docker stop $(docker ps -q); docker rm $(docker ps -qa)
```

## mongoDB 를 docker container 로 실행
1. dockerfile 작성 (mongodb 설치를 위한 이미지 생성)
    ```Dockerfile
    FROM mongo

    CMD ["mongod", "--dbpath", "/data", "--replSet", "myapp"]
    ```
1. dockerfile 의 image build
    ```
    docker build -t ppojin/mymongo:latest .
    ```
1. Mongodb container 생성 => 실행
    ```
    docker run --name mymongo -d -p 27017 ppojin/mymongo:latest
    ```
1. 생성한 컨테이너에서 mongodb 테스트
    ```
    $ docker exec -it mymongo mongo
    > show dbs
    admin   0.000GB
    config  0.000GB
    local   0.000GB
    > use bookstore
    > db.books.save({"title":"Docker compose sample"})
    WriteResult({ "nInserted" : 1 })
    > db.books.find()
    { "_id" : ObjectId("5e158d405eaa4d4d222cffb1"), "title" : "Docker compose sample" }
    ```

## mongodb 3대 설치 (primary x1, secondary x2)
1. Replica Set
    
    ex) mongodb -- replSet  myapp --dbpath/폴더지정 --port 27017 --bind_ip_all

```
$ docker run --name mymongo1 -d -p 27017:27017 ppojin/mongodb
$ docker exec -it mymongo1 mongo
```

0. Node01, node02, node03
    - /etc/hosts 파일에 node01, node02, node03의 IP address 등록
		- ex)
            ```
            10.0.0.11 	node01	
            10.0.0.12 	node02	
            10.0.0.13 	node03
            ```

1.  mkdir 각 NODE의 디렉토리에 ./mongo/data 
2.  - (NODE01) `mongod --replSet myapp --dbpath ./mongo/data --port 40001 --bind_ip_all`
    - (NODE02) `mongod --replSet myapp --dbpath ./mongo/data --port 40002 --bind_ip_all`
    - (NODE03) `mongod --replSet myapp --dbpath ./mongo/data --port 40003 --bind_ip_all`

3.  (NODE01) `mongo --host 10.0.0.11 --port 400001`
	
4.  초기화 (mongodb 처음에 해야할 설정)
    - rs.initiate()
---
5.  
    - rs.add("10.0.0.12:40002")
    - rs.add("10.0.0.13:40003", {arbiterOnly: true}) --> Primary 선정에만 관여, 복제는 하지 않음

6.  db.isMaster()

7.  레플리카 확인
    - rs.status()

8.  (NODE01)
	mongo 10.0.0.11:40001
        > use bookstore
        > db.books.insert({title: "Oliver Twist"})
        > show dbs

9.  mongo 10.0.0.12:40002
        > rs.slaveOk()
        > show dbs
        > db.books.find()

10. (Primary) > db.shutdownServer()

11. (Secondary) -> (Primary) 로 승격
    - db.books.insert() 사용 가능
    - 나머지 노드들은 지속적으로 master에게 heartbeat 전달

12. (기존 Master 다시 기동) -> Secondary로 작동 됨 