# serialport (npm)


## node-serialport [npm]

node-serialport를 이용해

Electron과 RaspberryPI간의 통신을 진행

## npm install serialport 문제

##### 해결중... 환경설정이 골치

[참고] 개요

http://z-wony.tistory.com/12

C & C++ file을 사용할 수 있도록 Build 해야함

그것을 지원하는게 [npm] node-gyp

[참고] node-gyp 페이지

https://github.com/nodejs/node-gyp#installation

node-gyp is a cross-platform command-line tool written in Node.js
for compiling native addon modules for Node.js.
It bundles the gyp project used by the Chromium team
and takes away the pain of dealing with the various differences in build platforms.
It is the replacement to the node-waf program which is removed for node v0.8.
If you have a native addon for node that still has a wscript file,
then you should definitely add a binding.gyp file to support the latest versions of node.

node-gyp은 Node.js 용 기본 애드온 모듈을 컴파일하기 위해 Node.js로 작성된 교차 플랫폼
명령 줄 도구입니다. Chromium 팀에서 사용하는 gyp 프로젝트를 번들로 제공하며 빌드 플랫폼의
다양한 차이점을 해결하는 데 따른 고통을 없애줍니다. 이것은 v0.8 노드에서 제거 된
node-waf 프로그램을 대체합니다. wscript 파일이있는 노드의 기본 애드온을 갖고 있다면
bind.gyp 파일을 추가하여 노드의 최신 버전을 지원해야합니다.

```
    npm install -g node-gyp
```

#### window

**관리자권한 powershell에서 실행**

```
    npm install --global --production windows-build-tools
```

#### mac

```
    작성예정
```

[참고] electron native module 지원

https://electron.atom.io/docs/tutorial/using-native-node-modules/

The native Node modules are supported by Electron,
but since Electron is very likely to use a different
V8 version from the Node binary installed in your system,
you have to manually specify the location of
Electron’s headers when building native modules.

네이티브 노드 모듈은 일렉트론 (Electron)에서 지원되지만,
Electron는 시스템에 설치된 노드 바이너리와 다른 V8 버전을 사용할 가능성이 높기 때문에
네이티브 모듈을 만들 때 Electron의 헤더 위치를 수동으로 지정해야합니다

When this type of version mismatch occurs,
you can either choose an electron distribution with the target Node version
or rebuild the npm package.
Since Electron's distribution has skipped Node v7.0.0 which is
configured with NODE_MODULE_VERSION 51 (and jumped to v7.4.0),
you would have to rebuild the serialport package.

이러한 유형의 버전 불일치가 발생하면,
대상 Node 버전으로 전자 분포를 선택할 수 있습니다
또는 npm 패키지를 다시 빌드하십시오.
Electron의 배포가 Node v7.0.0을 건너 뛰었 기 때문에
NODE_MODULE_VERSION 51로 구성 (및 v7.4.0으로 건너 뛰기),
직렬 포트 패키지를 다시 빌드해야합니다.

## 라즈베리파이내에 펌웨서 설치

라즈베리파이 소스코드 (python)를 Electron에서 가지고 있으며

유저가 최초 진행시에 해당 소스코드를 설치한다.

**추후에 유지보수 방안 강구**

