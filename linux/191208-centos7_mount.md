# centos7 에서 drive mount 하기
## 1. `df`
명령어 `df`를 이용해서 mount 된 드라이브 확인
```shell
[root@localhost ~]# df
Filesystem              1K-blocks    Used Available Use% Mounted on
devtmpfs                   480848       0    480848   0% /dev
tmpfs                      497872       0    497872   0% /dev/shm
tmpfs                      497872    8772    489100   2% /run
tmpfs                      497872       0    497872   0% /sys/fs/cgroup
/dev/mapper/centos-root  17811456 4431664  13379792  25% /
/dev/sda1                 1038336  174128    864208  17% /boot
tmpfs                       99576       4     99572   1% /run/user/42
tmpfs                       99576      36     99540   1% /run/user/1000
/dev/sr0                  4554702 4554702         0 100% /run/media/ppojin/CentOS 7 x86_64
```
## 2. `mount <소스디렉토리> <대상디렉토리>`
명령어 `mount <소스디렉토리> <대상디렉토리>` 명령어를 이용하여 원하는 디렉토리에 마운트 하기
```shell
[root@localhost ~]# mount /dev/sr0 /var/www/html/pxe/CentOS7
mount: /dev/sr0 is write-protected, mounting read-only
```