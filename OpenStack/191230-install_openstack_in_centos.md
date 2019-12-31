# CentOS 서비스 최적화
## cpu 확인
- `CPU(s)` 가 `2` 인 것과, `Virtualization` 이 `VT-x` 인 것을 확인한다.
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
> `Openstack`은 `iptable` 를 쓰기 때문에 충돌가능성이 있는 `firewalld`를 해제함.
```shell
systemctl stop firewalld
systemctl disable firewalld
```
> `NetworkManager`은 규모가 큰 서비스인 `OpenStack` 에서는 권장되지 않는 네트워크 패키지 이기 때문에 해제함.
```shell
systemctl disable NetworkManager
systemctl stop NetworkManager
```
> `SELinux 설정 해제`
```shell
# ==현재 실행중인 SELinux 서비스 끄기==
$ setenforce 0
# ==시작할 때 실행되는 SELinux 서비스 수정==
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
# ==SELinux 상태 확인==
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
# ==SELinux 상태 확인==
$ getenforce
Permissive
```

## NTP 서버 설정하기
> ntpdate 서버의 시간을 확인하는 
```shell
# ==ntpdate, chrony 설치==
$ yum install -y ntpdate
$ yum install -y chrony
# ==chrony 확인, 설정==
$ rpm -qa | grep chrony
chrony-3.4-1.el7.x86_64
$ vi /etc/chrony.conf
#server 0.centos.pool.ntp.org iburst
#server 1.centos.pool.ntp.org iburst
#server 2.centos.pool.ntp.org iburst
server 3.centos.pool.ntp.org iburst
server 2.kr.pool.ntp.org iburst
server 127.127.1.0

allow 10.0.0.0/24
# ==ntpdate 이용 chrony 실행 확인==
$ ntpdate 2.kr.pool.ntp.org
31 Dec 17:51:23 ntpdate[6175]: adjust time server 211.233.40.78 offset -0.000316 sec
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
> 여기까지 작업은 다른 `openstack` `node`들의 환경과 동일하기 때문에 이미지를 복사해두면 다른 `node` 를 만들 때 사용할 수 있다.

> `centos-release-openstack-rocky` 을 다운받았으니 `yum`을 다시 업데이트한다.

## packstack 설치
> `packstack` 은 `openstack` 을 설치하는 것을 도와주는 패키지이다.
```shell
# openstatk-packstack 설치
$ yum install -y openstack-packstack
# openstack.txt 생성
$ packstack --gen-answer-file /root/openstack.txt
# openstack.txt 백업
$ cp /root/openstack.txt /root/openstack.orig
```

## `openstack.txt` 파일 수정
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
        - `:set number`
    - 대상 line 으로 이동
        - `:<줄번호>`

## 설치하기
> 수정한 파일을 이용해서 `openstack` 을 설치한다.
```shell
packstack --answer-file /root/openstack.txt
```

## 설치확인
```shell
$ yum install -y openstack-utils
$ openstack-status
== Nova services ==
openstack-nova-api:                     active
openstack-nova-compute:                 active
openstack-nova-network:                 inactive  (disabled on boot)
openstack-nova-scheduler:               active
openstack-nova-conductor:               active
openstack-nova-console:                 inactive  (disabled on boot)
openstack-nova-consoleauth:             active
openstack-nova-xvpvncproxy:             inactive  (disabled on boot)
== Glance services ==
openstack-glance-api:                   active
openstack-glance-registry:              active
== Keystone service ==
openstack-keystone:                     inactive  (disabled on boot)
== Horizon service ==
openstack-dashboard:                    uncontactable
== neutron services ==
neutron-server:                         active
neutron-dhcp-agent:                     active
neutron-l3-agent:                       active
neutron-metadata-agent:                 active
neutron-openvswitch-agent:              active
neutron-metering-agent:                 active
== Cinder services ==
openstack-cinder-api:                   active
openstack-cinder-scheduler:             active
openstack-cinder-volume:                active
openstack-cinder-backup:                active
== Support services ==
openvswitch:                            active
dbus:                                   active
target:                                 active
rabbitmq-server:                        active
memcached:                              active
== Keystone users ==
Warning keystonerc not sourced
```