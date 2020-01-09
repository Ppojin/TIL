docker stop $(docker ps -q); docker rm $(docker ps -qa)
docker rmi mongo_repl_setup
docker build --no-cache -t mongo_repl_setup:latest .
docker run -t mongo_repl_setup:validate .

## 1. dockerfile 작성
```Dockerfile
FROM mongo

# WORKDKR
# RUN
# COPY
RUN apt-get update
RUN apt-get install -y iputils-ping

CMD ["mongod", "--replSet", "myapp"]
```

## 2. docker build image, run container
```
docker build -t mongo_repl_setup:latest .
```
```
(mongo1)
show dbs;
user bookstore;
db.books.find();
db.books.save({"title":"Docker compose files"});
db.books.save({"title":"Java progrmmaing"});
db.books.find();

(mongo2)
rs.slaveOk();

(mongo3)
rs.slaveOk();

(mongo1)
db.books.save({"title":"Docker compose files"});
db.books.save({"title":"Microservice Architecture"});
```

- `mongo_setup` 은 mongo 1, 2, 3 연결만 해주고 죽는애인지
    - `mongo_setup` 은 쿼리만 날려주고 죽는 서버이다.
<!-- - 연결이 안되서 `CMD ["./setup.sh"]` 로 실행했는데 어쩔 수 없는것인지 -->
- 먼저 켜진쪽이 primary 가 되는건지
    - 우선순위가 같기 때문에 먼저 Primary 가 된 쪽이 Primary
- Primary 가 사라지면 Secondery 중 하나가 Primary 가 된다.
    - 원래 Primary 였던 서버가 돌아와도 Primary 권한을 돌려받지는 않고 Secondary 권한으로 돌아온다

```
docker build -t ppojin/mymongodb:latest .
```
```
docker run --name mymongo1 -d -p 27017:27017 ppojin/mymongodb:latest
docker run --name mymongo2 -d -p 27018:27017 ppojin/mymongodb:latest
docker run --name mymongo3 -d -p 27019:27017 ppojin/mymongodb:latest

```

```
docker exec -it mymongo1 bash
rs.initiate()
`rs.add("10.0.0.12:117017")`
`rs.add("10.0.0.13:217017", {arbiterOnly: true})`
```

# 서비스를 이용하는 서비스
1. docker-compose
    - service: 컨테이너
2. docker swarm
    - service: 
3. kubernates
    - service: 


## MySQL replication
- docker-compose 파일 작성
- master x1, slave x1