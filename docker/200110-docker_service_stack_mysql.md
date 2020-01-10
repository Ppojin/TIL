# docker 
```shell
$ docker build -t localhost:5000/ch04/tododb:latest .
$ docker push localhost:5000/ch04/tododb:latest
$ docker exec -it manager docker stack deploy -c /stack/todo-mysql.yml todo_mysql
```
- todo_mysql_master 간단 접속방법
    ```
    $ docker exec -it manager \
        docker service ps todo_mysql_master \
        --no-trunc \
        --filter "desired-state=running" \
        --format "docker exec -it {{.Node}} docker exec -it {{.Name}}.{{.ID}} bash"
    ```
    > `docker exec -it 93...ae docker exec -it todo_mysql_master.1.y49...qm bash` 와 같은 코드가 생성된다 
```
init-data.sh
```
> mysql 비밀번호 gihyo