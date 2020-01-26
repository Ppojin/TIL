# `fatal: remote origin already exists.`

`git remote add origin` 실행 중 아래와 같은 에러 발생시
```shell
$ git remote add origin https://github.com/Ppojin/---------.git
fatal: remote origin already exists.
```

아래 명령어를 이용해서 문제를 해결할 수 있다.
```shell
$ git remote rm origin
```

위 명령어를 입력하고, 다시 git remote add origin 명령을 실행하면 정상적으로 작동되는것을 확인할 수 있다.
```shell
$ git remote add origin https://github.com/Ppojin/---------.git
```