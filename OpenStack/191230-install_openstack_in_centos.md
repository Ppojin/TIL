# CentOS 서비스 최적화

## centOS 업데이트
```shell
$ yum repolist
$ yum upgrade -y
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
$ vim /etc/sysconfig/selinux
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
SELinux status:                 permissive
SELinuxfs mount:                /sys/fs/selinux
SELinux root directory:         /etc/selinux
Loaded policy name:             targeted
Current mode:                   permissive
Mode from config file:          enforcing
Policy MLS status:              enabled
Policy deny_unknown status:     allowed
Max kernel policy version:      31
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
$ systemctl start chronyd
$ systemctl enable chronyd
$ chronyc sources
```

## 
```shell
$ vi /etc/hosts
127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
::1         localhost localhost.localdomain localhost6 localhost6.localdomain6
10.0.0.100 controller
10.0.0.101 conpute1
```

## centos-release-openstack-rocky 설치
```shell
$ yum install -y centos-release-openstack-rocky
$ yum repolist
$ yum upgrade -y
```
> 여기까지 작업은 openstack node들의 환경과 동일하기 때문에 이미지를 복사해두고 node 를 만들 때 사용할 수 있다.

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

## 설치하기
```shell
packstack --answer-file /root/openstack.txt
```