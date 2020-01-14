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

http://localhost:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy
```