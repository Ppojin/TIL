# netstat
## netstat 설치
net-tools 를 설치하면 netstat 명령어를 사용할 수 있다.
```
# apt-get update
# apt-get install net-tools
```
## netstat 명령
```
# netstat
Active Internet connections (w/o servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State
tcp        0      0 172.18.0.4:34060        151.101.228.204:http    TIME_WAIT
tcp        0      0 172.18.0.4:34058        151.101.228.204:http    TIME_WAIT
tcp        0      0 172.18.0.4:34090        151.101.228.204:http    TIME_WAIT
Active UNIX domain sockets (w/o servers)
Proto RefCnt Flags       Type       State         I-Node   Path
```
## ntpl 옵션을 통해 허용된 port번호를 확인할 수 있다
```
# netstat -ntpl
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
tcp        0      0 127.0.0.11:33317        0.0.0.0:*               LISTEN      -
tcp6       0      0 :::8080                 :::*                    LISTEN      1/todoapi
```