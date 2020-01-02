

```shell
[root@controller ~]# vmhgfs-fuse /mnt
fuse: mountpoint is not empty
fuse: if you are sure this is safe, use the 'nonempty' mount option
[root@controller ~]# df -h
Filesystem               Size  Used Avail Use% Mounted on
...
vmhgfs-fuse              2.3T  643G  1.7T  28% /mnt/hgfs
```

```shell
[root@controller ~]# cp /mnt/hgfs/share_linux/stack1-key1.pem .
[root@controller ~]# ls
anaconda-ks.cfg  keystonerc_admin  openstack.orig  openstack.txt  stack1-key1.pem
```

```shell
[root@controller ~]# ip netns
qrouter-da5542f7-cf1c-4a4c-a7ac-8a0f6c19d880 (id: 3)
qdhcp-938e9222-5d6f-42c7-919f-123779060295 (id: 2)
qrouter-a6d99212-ddb2-47aa-bff3-10a52796fd1c (id: 1)
qdhcp-dece9aef-d925-49f6-a5b6-99707e74bdce (id: 0)
[root@controller ~]# ip netns exec qrouter-da5542f7-cf1c-4a4c-a7ac-8a0f6c19d880 ssh -i stack1-key1.pem cirros@10.0.0.215
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Permissions 0777 for 'stack1-key1.pem' are too open.
It is required that your private key files are NOT accessible by others.
This private key will be ignored.
Load key "stack1-key1.pem": bad permissions
cirros@10.0.0.215's password: 
```

```shell
[root@controller ~]# chmod 600 stack1-key1.pem
[root@controller ~]# ls -l
[root@controller ~]# ip netns exec qrouter-da5542f7-cf1c-4a4c-a7ac-8a0f6c19d880 ssh -i stack1-key1.pem cirros@10.0.0.215
$
```