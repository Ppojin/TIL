`openstack-status` 패키기자 포함된 `openstack-utils` 을 설치한다.
```shell
yum install -y openstack-utils
```

`openstack-utils` 을 이용하여 실행상태를 확인한다.
```shell
openstack-status
```

상태가 `activate` 가 아닌 서비스가 있다면 아래 명령을 실행한다.

```shell
systemctl restart <서비스명>
```