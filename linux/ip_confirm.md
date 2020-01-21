cp /etc/sysconfig/network-scripts/ifcfg-ens33

systemctl restart network

root@79d823478d45:/# ifconfig
bash: ifconfig: command not found
root@79d823478d45:/# ip a
bash: ip: command not found
root@79d823478d45:/# ipconfig
bash: ipconfig: command not found
root@79d823478d45:/# ip addr show
bash: ip: command not found
root@79d823478d45:/# hostname -i
172.17.0.2