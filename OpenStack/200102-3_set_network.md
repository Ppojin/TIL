# 3. Openstack Controller 의 가상 Network 설정

## 구성도
![](./static/2020/01/02/3_network/sble0h3cq45grqcg10m6.png)

## 네트워크 생성
`Network` -> `Networks` 에서 `Create Network` 버튼을 클릭하면 네트워크을 생성할 수 있다.
> ![](./static/2020/01/02/3_network/01.png)

### 내부망 서브넷
| 요소 | 값 |
|---|---|
| network address | 192.168.0.0/24 |
| gateway | 192.168.0.254 |
| DNS | 10.0.0.100 (VMware의 DNS 서버 ip) |
| DHCP | 사용 |

> 내부망 네트워크 생성 예시
    ![](./static/2020/01/02/3_network/02.png)
    ![](./static/2020/01/02/3_network/03.png)
    ![](./static/2020/01/02/3_network/04.png)

### 외부망 서브넷
| 요소 | 값 |
|---|---|
| network address | 192.168.0.0/24 |
| gateway | 192.168.0.254 |
| DNS | 10.0.0.100 (VMware의 DNS 서버 ip) |
| DHCP | 사용 |

> 외부망 네트워크 생성 예시
    ![](./static/2020/01/02/3_network/05.png)
    ![](./static/2020/01/02/3_network/06.png)
    ![](./static/2020/01/02/3_network/07.png)

- 위 예시만으로는 외부망 네트워크라고 할 수 없기 때문에 `Manager` 권한을 가진 계정을 이용하여 네트워크를 외부망으로 설정할 수 있다.
    > 외부망 설정 예시
        ![](./static/2020/01/02/3_network/15.png)
        ![](./static/2020/01/02/3_network/16.png)

#### 내부망과 외부망 서브넷이 생성된 모습
![](./static/2020/01/02/3_network/24.png)

## `Router` 생성
`Network` -> `Routers` 에서 `Create Router` 버튼을 클릭하면 `Router`를 생성할 수 있다.
![](./static/2020/01/02/3_network/09.png)

> `Router` 생성 예시
    ![](./static/2020/01/02/3_network/10.png)
    ![](./static/2020/01/02/3_network/11.png)

### 라우터에 외부망 게이트웨이 적용
`Network` -> `Router` 에서 `Set Gateway` 버튼을 클릭하여 라우터에 외부망을 게이트웨이로 설정한다.

> 게이트웨이 설정 예시
    ![](./static/2020/01/02/3_network/13.png)
    ![](./static/2020/01/02/3_network/17.png)
    라우터에 게이트웨이가 설정된 모습
    ![](./static/2020/01/02/3_network/19.png)

## 라우터에 내부망 설치
> 라우터를 클릭하면 하위 서브넷을 추가할 수 있는 버튼이 나온다.
    ![](./static/2020/01/02/3_network/20.png)
    ![](./static/2020/01/02/3_network/21.png)

## Network 구성 확인
`Network` -> `Network Topology` -> `Graph` 에서 `Toggle Labels` 를 클릭하면 내부망 네트워크와 외부망 네트워크 그리고 라우터가 생성된 화면을 생성한 요소의 이름과 함께 그래픽으로 확인할 수 있다.
> ![](./static/2020/01/02/3_network/12.png)