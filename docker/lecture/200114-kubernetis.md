# kubernetes

- Docker Container 운영을 자동화하기 위한 컨테이너 오케스트레이션 툴
    - 컨테이너 배포 및 배치 전략
    - scale in/out
    - service discovery
        - 서비스 컨테이너 작업 단위
            - 어떤 노드에 있으며
            - 각 노드가 어떤 작업을 하는지
            - 
    - 기타 운용
- 구글의 Borg 프로젝트에서 시작
    - 2017년 Docker 에 정식으로 통합된 사실상 표중
- DockerCon EU 2017

- pod란?
    - container 가 모인 단위
    - 하나의 pod 가 걸쳐서 
    컨테이너에서는 서로 연결할 수 있는 ***중복 되지 않는*** port 제공
    고유의 ip 

## kubernetes 실행
```shell
╰$ kubectl get all
NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   2d15h

╰$ kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v1.8.3/src/deploy/recommended/kubernetes-dashboard.yaml
secret/kubernetes-dashboard-certs created
serviceaccount/kubernetes-dashboard created
role.rbac.authorization.k8s.io/kubernetes-dashboard-minimal created
rolebinding.rbac.authorization.k8s.io/kubernetes-dashboard-minimal created
deployment.apps/kubernetes-dashboard created
service/kubernetes-dashboard created

╰$ kubectl get pod --namespace=kube-system -l k8s-app=kubernetes-dashboard
NAME                                    READY   STATUS    RESTARTS   AGE
kubernetes-dashboard-6fd7f9c494-w7bb9   1/1     Running   0          106s

╰$ kubectl proxy
Starting to serve on 127.0.0.1:8001

```

[http://localhost:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy]

```shell
$ kubectl proxy --port=8001 --address=<접속할 IP> --accept-hosts='^*$'
```


# simple node web on kubernetes
## on hostos
### create js file
```js
var http = require('http');
var content = function(req, resp) {
 resp.end("Hello Kubernetes!" + "\n");
 resp.writeHead(200);
}
var w = http.createServer(content);
w.listen(8000);
```


```shell
$ node hello.js
```
`http://localhost:8000/`

터미널에서 `ctrl+c` 를 눌러 서버 종료

## on docker
### Dockerfile
```Dockerfile
FROM node:slim
EXPOSE 8000
COPY hello.js .
CMD node hello.js
```
### 서버 컨테이너 이미지 빌드
```shell
╰$ docker build -t ppojin/hello:latest .
Sending build context to Docker daemon  6.656kB
Step 1/4 : FROM node:slim
slim: Pulling from library/node
804555ee0376: Already exists
2706bdf80250: Pull complete
~
Removing intermediate container 8d6aa50b9de4
 ---> a68c1b392dfb
Successfully built a68c1b392dfb
Successfully tagged ppojin/hello:latest
```

### 서버 컨테이너 실행
```shell
docker run --name simpleNodeServer -p 8000:8000 -d ppojin/hello
```

### 서버 컨테이너에 접속확인
`http://localhost:8000/`

### 서버 종료
```
$ docker stop simpleNodeServer
$ docker rm simpleNodeServer
```

## on kubernetes
```
$ kubctl proxy
```
### push image on docker hub
```shell
$ docker push ppojin/hello:latest
The push refers to repository [docker.io/ppojin/hello]
1c53e52606a8: Pushed
c8038e10a9d8: Mounted from library/node
1265115c7f8a: Mounted from library/node
a3743de84c91: Mounted from library/node
62dac45972d5: Mounted from library/node
814c70fdae62: Mounted from library/node
latest: digest: sha256:82428d2e4150fce87bb7778aa357c0129b6c943fd76dcd480ee1354fcd295ba8 size: 1574
```
### way 2) using cli
```
$ kubectl apply -f pod.yml
```

### way 1) using kubernetes dashboard
#### create yml file
> pod.yml
```yml
apiVersion: v1
kind: Pod #service, Namspace ...etc
metadata:
  name: hello-pod #name of pod
  labels:
    app: hello #tag
spec:
  containers:
  - name: hello-container
    image: ppojin/hello
    ports:
    - containerPort: 8000
```
##### service.yml
- 공개 네트워크
    ```yml
    apiVersion: v1
    kind: Service
    metadata:
    name: hello-svc
    spec:
    selector:
        app: hello
    ports:
        - port: 8200
        targetPort: 8000
    type: LoadBalancer # default = (type: ClusterIP (= 내부 네트워크에서만 쓰겠다))
    externalIPs:
    - {윈도우의 ipaddress}
    ```

<!-- 
apiVersion: v1
kind: Service
metadata:
  name: hello-svc
spec:
  selector:
    app: hello
  ports:
    - port: 8200
      targetPort: 8000
  type: LoadBalancer
  externalIPs:
  - 192.168.0.28
-->
#### on kubernetes dashboard
asdfasdfasdf


#### 조회
``` shell
$ kubectl get pod  
NAME        READY   STATUS    RESTARTS   AGE
hello-pod   1/1     Running   0          17m


$ kubectl get services
NAME         TYPE           CLUSTER-IP    EXTERNAL-IP              PORT(S)          AGE
hello-svc    LoadBalancer   10.98.89.46   localhost,192.168.0.28   8200:31009/TCP   7m10s
kubernetes   ClusterIP      10.96.0.1     <none>                   443/TCP          2d17h


$ kubectl get all     
NAME            READY   STATUS    RESTARTS   AGE
pod/hello-pod   1/1     Running   0          17m

NAME                 TYPE           CLUSTER-IP    EXTERNAL-IP              PORT(S)          AGE
service/hello-svc    LoadBalancer   10.98.89.46   localhost,192.168.0.28   8200:31009/TCP   7m17s
service/kubernetes   ClusterIP      10.96.0.1     <none>                   443/TCP          2d17h
```