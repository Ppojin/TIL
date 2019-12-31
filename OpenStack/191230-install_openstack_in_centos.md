# CentOS 서비스 최적화
## cpu 확인
```shell
$ lscpu
Architecture:          x86_64
CPU op-mode(s):        32-bit, 64-bit
Byte Order:            Little Endian
CPU(s):                2
On-line CPU(s) list:   0,1
Thread(s) per core:    1
Core(s) per socket:    2
...생략...
Virtualization:        VT-x
...생략...
```


## centOS 업데이트
```shell
$ yum repolist
$ yum upgrade -y
$ reboot
```

## 네트워크 설정
> `Openstack`은 `iptable` 를 쓰기 때문에 충돌가능성이 있는 `firewalld`를 해제함
```shell
systemctl stop firewalld
systemctl disable firewalld
```
> `NetworkManager`은 규모가 큰 서비스인 `OpenStack` 에서는 권장되지 않는 네트워크 패키지라 해제함
```shell
systemctl disable NetworkManager
systemctl stop NetworkManager
```
> `SELinux 설정 해제`
```shell
$ setenforce 0
$ vi /etc/sysconfig/selinux
# This file controls the state of SELinux on the system.
# SELINUX= can take one of these three values:
#     enforcing - SELinux security policy is enforced.
#     permissive - SELinux prints warnings instead of enforcing.
#     disabled - No SELinux policy is loaded.
SELINUX=permissive
# SELINUXTYPE= can take one of three two values:
#     targeted - Targeted processes are protected,
#     minimum - Modification of targeted policy. Only selected processes are protected. 
#     mls - Multi Level Security protection.
SELINUXTYPE=targeted
$ sestatus
SELinux status:                 enabled
SELinuxfs mount:                /sys/fs/selinux
SELinux root directory:         /etc/selinux
Loaded policy name:             targeted
Current mode:                   permissive
Mode from config file:          permissive
Policy MLS status:              enabled
Policy deny_unknown status:     allowed
Max kernel policy version:      31
$ getenforce
Permissive
```

## NTP 서버 설정하기
```shell
$ yum install chrony -y
$ rpm -qa | grep chrony
chrony-3.4-1.el7.x86_64
$ yum install -y ntpdate
$ vi /etc/chrony.conf
#server 0.centos.pool.ntp.org iburst
#server 1.centos.pool.ntp.org iburst
#server 2.centos.pool.ntp.org iburst
server 3.centos.pool.ntp.org iburst
server 2.kr.pool.ntp.org iburst
server 127.127.1.0

allow 10.0.0.0/24
$ ntpdate 2.kr.pool.ntp.org.iburst
Error resolving 2.kr.pool.ntp.org.iburst: Name or service not known (-2)
31 Dec 11:06:25 ntpdate[9854]: Can't find host 2.kr.pool.ntp.org.iburst: Name or service not known (-2)
31 Dec 11:06:25 ntpdate[9854]: no servers can be used, exiting
$ systemctl start chronyd
$ systemctl enable chronyd
$ chronyc sources
210 Number of sources = 3
MS Name/IP address         Stratum Poll Reach LastRx Last sample               
===============================================================================
^? 127.127.1.0                   0   6     0     -     +0ns[   +0ns] +/-    0ns
^? 210.183.236.141               2   6     3     2   +160ms[ +160ms] +/-   68ms
^* send.mx.cdnetworks.com        2   6     7     2  -2202us[ +150ms] +/-   56ms
```

## 
```shell
$ vi /etc/hosts
127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
::1         localhost localhost.localdomain localhost6 localhost6.localdomain6
10.0.0.100 controller
10.0.0.101 compute1
```

## centos-release-openstack-rocky 설치
```shell
$ yum install -y centos-release-openstack-rocky
$ yum repolist
$ yum upgrade -y
```
> 여기까지 작업은 openstack node들의 환경과 동일하기 때문에 이미지를 복사해두고 node 를 만들 때 사용할 수 있다.

> centos-release-openstack-rocky 을 다운받았으니 yum을 다시 업데이트한다.

## packstack 설치
```shell
$ yum install -y openstack-packstack
$ packstack --gen-answer-file /root/openstack.txt
$ cp /root/openstack.txt /root/openstack.orig
```

```shell
$ vi /root/openstack.txt
  11 CONFIG_DEFAULT_PASSWORD=abc123
  46 CONFIG_CEILOMETER_INSTALL=n
  50 CONFIG_AODH_INSTALL=n
 326 CONFIG_KEYSTONE_ADMIN_PW=abc123
 873 CONFIG_NEUTRON_OVS_BRIDGE_IFACES=br-ex:ens33
1185 CONFIG_PROVISION_DEMO=n
```
- vi 명령어
    - 줄번호 보기
        - :set number
    - 대상 line 으로 이동
        - :줄번호

## 설치하기
```shell
packstack --answer-file /root/openstack.txt
```