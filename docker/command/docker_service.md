# docker service
```shell
/ # docker service ls
ID                  NAME                MODE                REPLICAS            IMAGE                               PORTS
80syazvqvilx        todo_app_api        replicated          2/2                 registry:5000/ch04/todoapi:latest
3m1a9tnqvfb9        todo_mysql_master   replicated          1/1                 registry:5000/ch04/tododb:latest
ptoq960xzhi4        todo_mysql_slave    replicated          2/2                 registry:5000/ch04/tododb:latest
vk2ihvpd6whm        visualizer_app      global              1/1                 dockersamples/visualizer:latest     *:9000->8080/tcp
/ # docker service ps todo_app_api
ID                  NAME                IMAGE                               NODE                DESIRED STATE       CURRENT STATE            ERROR               PORTS
jam61oncq1md        todo_app_api.1      registry:5000/ch04/todoapi:latest   3b6beca82c85        Running             Running 20 seconds ago
qnwctolnarz1        todo_app_api.2      registry:5000/ch04/todoapi:latest   feb71c4f1733        Running             Running 21 seconds ago
```