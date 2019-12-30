# OpenStaco

on-premise = 소유
cloud = 대여

IaaS (Infrastructure asa service)
- 소비자 = IT 관리자
- ex) aws, gcp, azur

PaaS (Platform as a service)
- 소비자 = 개발자

SaaS (Software(Application) as a service)
- 소비자 = End user, 일반 사용자

## 개요
- 2010년 NASA(Nova) 와 Rackspace(siwft) 가 하단 프로젝트를 오픈소스화 함
- 오픈소스를 기반으로 클라우드를 구축하고 운영하고자 하는 오픈소스 개발자, 회사 이용자들로 이루어진 커뮤니티
- 컴퓨터 하드웨어 위에 인프라를 서비스로 제공하게 해주는 IaaS (Infrastructure as a Service) 를 구축하게 해주는 오픈소스 플랫폼이다
- Public 과 Private 클라우드를 구축하기 위한 오픈 소스
- 컴퓨팅, 스토리지, 네트워크와 같은 자원들을 모으고 이들을 제어하고 운영하는 클라우드 운영체제

## 구조
- 클라우드 운영체제의 주요 기능이 

### core
- Nova
    - compute
    - Nova가 지원하는 하이퍼바이저
        - Qemu 와 KVM (Kernal based Virtual Machine)
            - Qeum 하드웨어 의존 X
            - KVM 하드웨어 의존 O
        - Hyper-V 와 VMware, XenServer6.2
        - Baremetal 과 docker, Xen via libvirt, LXC via libvirt
- Glance
    - imageservice
    - OS disk image = rootdisk
- swift
    - storage

### Incubation
- Keystone
    - 통합 인증 서비스
    - common authentiction
    - 토큰 발급
- horizon (Dashboard)
    - webUI
- Quantum
    - virtual network service

### related
- Newtron
    - Network infrasturucture
More

### Openstack version
https://wiki.openstack.org/wiki/ReleaseNotes/Kilo/ko
https://wiki.openstack.org/wiki/ReleaseNotes/Liberty/ko