```Shell
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

PS C:\Users\HPE> docker version
Client: Docker Engine - Community
 Version:           19.03.5
 API version:       1.40
 Go version:        go1.12.12
 Git commit:        633a0ea
 Built:             Wed Nov 13 07:22:37 2019
 OS/Arch:           windows/amd64
 Experimental:      false

Server: Docker Engine - Community
 Engine:
  Version:          19.03.5
  API version:      1.40 (minimum version 1.12)
  Go version:       go1.12.12
  Git commit:       633a0ea
  Built:            Wed Nov 13 07:29:19 2019
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          v1.2.10
  GitCommit:        b34a5c8af56e510852c35414db4c1f4fa6172339
 runc:
  Version:          1.0.0-rc8+dev
  GitCommit:        3e425f80a8c931f88e6d94a8c831b9d5aa481657
 docker-init:
  Version:          0.18.0
  GitCommit:        fec3683
PS C:\Users\HPE> docker image --help

Usage:  docker image COMMAND

Manage images

Commands:
  build       Build an image from a Dockerfile
  history     Show the history of an image
  import      Import the contents from a tarball to create a file
  inspect     Display detailed information on one or more images
  load        Load an image from a tar archive or STDIN
  ls          List images
  prune       Remove unused images
  pull        Pull an image or a repository from a registry
  push        Push an image or a repository to a registry
  rm          Remove one or more images
  save        Save one or more images to a tar archive (streamed 
  tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMA

Run 'docker image COMMAND --help' for more information on a comma
PS C:\Users\HPE> docker image history
"docker image history" requires exactly 1 argument.
See 'docker image history --help'.

Usage:  docker image history [OPTIONS] IMAGE

Show the history of an image
PS C:\Users\HPE> docker image ls
REPOSITORY             TAG                 IMAGE ID            CR
hhjin1814/cheers2019   latest              cf2363fab2b8        58
<none>                 <none>              f9af9fa3b4d7        58
golang                 1.11-alpine         e116d2efa2ab        4 
PS C:\Users\HPE> docker image rm cf2363fab2b8
Untagged: hhjin1814/cheers2019:latest
Untagged: hhjin1814/cheers2019@sha256:597d56ec2903985034bd58814da83617d8a41fa
Deleted: sha256:cf2363fab2b8f1712a4aa8aaaf01c665d81725dcca2abf9d2
Deleted: sha256:97d7c1e4023c3c46b600bcab550ba95933b19a8efafacc1c6
Deleted: sha256:5eb55b9a19a72682c221e5173a7c3c3afab0b7610a96910d8
PS C:\Users\HPE> docker image rm f9af9fa3b4d7
Deleted: sha256:f9af9fa3b4d74e568d66f37a5a41fb0b3f07edd88cbb8e86b
Deleted: sha256:7fe700a25e0af4899a03087ef655b3edd4c883c6476fe8c11
Deleted: sha256:af5b6c752b1558bcb09d69a600fbe5095d6b80da2bcd66c10
Deleted: sha256:d37920c17b10e86f456ada69f0270124032ef688ba2d1ea0e
Deleted: sha256:6559a24c5332e1ccbb73ca6eced864810463c8d36b7e44bc8
Deleted: sha256:7825f7446f4431bd7d8087052cad64333cb13b4a20ed6d7cb
Deleted: sha256:6455660a061d927a0159b4d6e6f979224ddbbd424da6b9712
Deleted: sha256:8a92cad24940457f29b7d0f49bb7bff89197ff7243ff04b2b
Deleted: sha256:31207a9826377bf8e6287e26fb99024a2faff479902feabeb
Deleted: sha256:02a598c001cc5923feb75ec548c74713cb8983b8c23c4afbc
PS C:\Users\HPE> docker image rm e116d2efa2ab
Untagged: golang:1.11-alpine
Untagged: golang@sha256:09e47edb668c2cac8c0bbce113f2f72c97b1555d7
Deleted: sha256:e116d2efa2ab6f7af3e077771fda81477a2bc8d5c5e98d60a
Deleted: sha256:5fec25f9ac3477c413742ca10f2d6c16399fd78a41e5c8aea
Deleted: sha256:2b0889b33a0db51cf154ab6a296f6dd035c8d3004ad0aed97
Deleted: sha256:901d0a7238b8bb071fa1529039a816df841a517eea1cb7e14
Deleted: sha256:ac07a2767514fcd0741ef837900172f6c3a6df7900d1f52f1
Deleted: sha256:03901b4a2ea88eeaad62dbe59b072b28b6efa00491962b874
PS C:\Users\HPE> docker image ls
REPOSITORY          TAG                 IMAGE ID            CREAT
PS C:\Users\HPE> dir


    디렉터리: C:\Users\HPE


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----     2019-12-10   오전 9:39                .config
d-----     2020-01-07  오전 11:37                .docker
d-----     2019-12-27   오후 1:04                .IntelliJIdea201
d-----     2019-12-27   오후 1:08                .m2
d-----     2019-12-27   오후 3:53                .ssh
d-----     2019-12-17   오후 1:38                .vagrant.d
d-----     2019-12-30   오후 2:28                .VirtualBox
d-----     2019-12-10   오전 8:54                .vscode
d-r---     2019-12-16   오전 9:15                3D Objects
d-r---     2019-12-16   오전 9:15                Contacts
d-r---     2020-01-07   오전 9:26                Desktop
d-r---     2020-01-06   오후 3:56                Documents
d-r---     2020-01-06   오후 3:55                Downloads
d-r---     2019-12-16   오전 9:15                Favorites
d-----     2019-12-30   오전 9:05                github
d-r---     2019-12-16   오전 9:15                Links
d-r---     2019-12-16   오전 9:15                Music
d-r---     2019-12-06  오후 10:06                OneDrive
d-r---     2019-12-31   오후 5:03                Pictures
d-r---     2019-12-16   오전 9:15                Saved Games
d-r---     2019-12-16   오전 9:15                Searches
d-r---     2019-12-16   오전 9:15                Videos
d-----     2019-12-16   오후 1:08                VirtualBox VMs
d-----     2019-12-27   오후 5:03                wordchain
d-----     2019-12-16  오전 10:24                Work
-a----     2020-01-06  오전 10:01           4629 .bash_history
-a----     2019-12-27  오전 11:51            198 .gitconfig
-a----     2019-12-10   오전 9:39             25 .node_repl_histo
-a----     2019-12-27   오후 4:37           3014 .viminfo
-a----     2019-12-10  오전 11:27            204 _netrc


PS C:\Users\HPE> cd .\Documents\
PS C:\Users\HPE\Documents> dir


    디렉터리: C:\Users\HPE\Documents


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----     2020-01-07  오전 10:01                GitHub
d-----     2019-12-30   오전 9:11                GitHub.back
d-----     2020-01-06   오후 5:02                MobaXterm
d-----     2019-12-30   오후 3:28                NetSarang
d-----     2020-01-06   오전 9:32                NetSarang Comput
d-----     2020-01-06   오전 9:41                Virtual Machines
d-----     2019-12-16   오후 5:33                카카오톡 받은 파


PS C:\Users\HPE\Documents> cd .\GitHub\
PS C:\Users\HPE\Documents\GitHub> ls


    디렉터리: C:\Users\HPE\Documents\GitHub


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----     2020-01-07  오전 10:02                Docker_precticeprectice
d-----     2020-01-07   오전 9:23                doodle x
d-----     2020-01-06  오전 10:06                gboardex
d-----     2020-01-07   오전 9:38                TIL


PS C:\Users\HPE\Documents\GitHub> docker image pull gihyodocker/echo:latest
Error response from daemon: Get https://registry-1.docker.io/v2/: dial tcp: lookup registry-1.docker.io on 192.168.65.1:53: read udp 192.168.65.3:36944->192.168.65.1:53: i/o timeout
PS C:\Users\HPE\Documents\GitHub> docker image pull gihyodocker/echo:latest
latest: Pulling from gihyodocker/echo
723254a2c089: Pull complete
abe15a44e12f: Pull complete
409a28e3cc3d: Pull complete
503166935590: Pull complete
abe52c89597f: Pull complete
ce145c5cf4da: Pull complete
96e333289084: Pull complete
39cd5f38ffb8: Pull complete
22860d04f4f1: Pull complete
7528760e0a03: Pull complete
Digest: sha256:4520b6a66d2659dea2f8be5245eafd5434c954485c6c1ac882c56927fe4cec84
Status: Downloaded newer image for gihyodocker/echo:latest
docker.io/gihyodocker/echo:latest
PS C:\Users\HPE\Documents\GitHub>
PS C:\Users\HPE\Documents\GitHub> docker run gihyodocker/echo:latest
2020/01/07 02:53:23 start server
PS C:\Users\HPE\Documents\GitHub> docker run -p 8080 gihyodocker/echo:latesttest
2020/01/07 03:01:47 start server
2020/01/07 03:03:24 received request                                     o:latest
PS C:\Users\HPE\Documents\GitHub> docker run -p 9000:8080 gihyodocker/echho:latest
2020/01/07 03:04:57 start server
2020/01/07 03:05:11 received request
2020/01/07 03:05:28 received request
2020/01/07 03:05:28 received request
```

```Shell
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

PS C:\Users\HPE> curl http://localhost:9000
curl : 원격 서버에 연결할 수 없습니다.
위치 줄:1 문자:1
+ curl http://localhost:9000
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidOperation: (System.Net.HttpWebRequest:HttpWebRequest) [Invoke-WebRequest], WebException
    + FullyQualifiedErrorId : WebCmdletWebResponseException,Microsoft.PowerShell.Commands.InvokeWebRequestCommand

PS C:\Users\HPE> docker container ls
CONTAINER ID        IMAGE                     COMMAND                  CREATED             STATUS              PORTS               NAMES
9ce4f4393f49        gihyodocker/echo:latest   "go run /echo/main.go"   6 minutes ago       Up 6 minutes                            cranky_ramanujan
PS C:\Users\HPE> docker stop cranky_ramanujan
cranky_ramanujan
PS C:\Users\HPE> docker container ls
CONTAINER ID        IMAGE                     COMMAND                  CREATED              STATUS              PORTS                     NAMES
b496af0e3691        gihyodocker/echo:latest   "go run /echo/main.go"   About a minute ago   Up About a minute   0.0.0.0:32768->8080/tcp   modest_merkle
PS C:\Users\HPE> curl http://localhost:32768


StatusCode        : 200
StatusDescription : OK
Content           : Hello Docker!!
RawContent        : HTTP/1.1 200 OK
                    Content-Length: 14
                    Content-Type: text/plain; charset=utf-8
                    Date: Tue, 07 Jan 2020 03:03:24 GMT

                    Hello Docker!!
Forms             : {}
Headers           : {[Content-Length, 14], [Content-Type, text/plain; charset=utf-8], [Date, Tue, 07 Jan 2020 03:03:24 GMT]}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : mshtml.HTMLDocumentClass
RawContentLength  : 14



PS C:\Users\HPE> docker stop modest_merkle
modest_merkle
PS C:\Users\HPE> docker container ls
CONTAINER ID        IMAGE                     COMMAND                  CREATED             STATUS              PORTS                    NAMES
83b3bad35258        gihyodocker/echo:latest   "go run /echo/main.go"   12 seconds ago      Up 10 seconds       0.0.0.0:9000->8080/tcp   objective_williamson
PS C:\Users\HPE> curl http://localhost:9000


StatusCode        : 200
StatusDescription : OK
Content           : Hello Docker!!
RawContent        : HTTP/1.1 200 OK
                    Content-Length: 14
                    Content-Type: text/plain; charset=utf-8
                    Date: Tue, 07 Jan 2020 03:05:11 GMT

                    Hello Docker!!
Forms             : {}
Headers           : {[Content-Length, 14], [Content-Type, text/plain; charset=utf-8], [Date, Tue, 07 Jan 2020 03:05:11 GMT]}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : mshtml.HTMLDocumentClass
RawContentLength  : 14

```