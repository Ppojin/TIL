클라이언트 서버에서 PXE 서버에 접속까지는 되지만 ftpf 파일을 접근할 때 아래와 같은 에러가 발생할 때

```
PXE-T00: Permission denied
PXE-E36: Error received from TFTP server
PXE-Mof: Exiting PXE ROM.
```

해당 폴더에 restorecon -Rv 명령어로 해결할 수 있다.

```
restorecon -Rv /tftpboot
```
