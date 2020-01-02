```shell
openstack-status
```
- 만약 `openstack-status` 가 실행이 안된다면 `openstack-utils` 를 설치한다

상태가 `activate` 가 아닌 서비스가 있다면 아래 명령을 실행한다.

```shell
systemctl restart <서비스명>
```