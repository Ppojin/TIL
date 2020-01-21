```shell
[root@host]$ adduser student
[root@host]$ passwd student
[root@host]$ sshd-keygen
[root@host]$ ssh-keygen
[root@host]$ ssh-copy-id student@client
```
```
# 비밀번호 묻지 않고 client에 접속됨
[root@client]$ ssh sutdent@host
```