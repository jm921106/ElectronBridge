# LC 피지컬 컴퓨팅 Electron Project

**해당 프로젝트는 로지콩의 Electron Sample 프로젝트를 <br>**
**테스트 하기 위한 프로젝트 입니다. <br>**
**https://github.com/electron/electron/blob/master/docs-translations/ko-KR/tutorial/quick-start.md  참조**

## 목적

Web Browser (Chrome, IE : Web Service) 에서 Raspiberry PI에 <br>
접근하기 위한 브릿지 윈도우 프로그램 개발 <br>

- 방법 1 : USB to Serial 통신 : 추가적인 라즈비안 OS 조작이 필요 없음
- 방법 2 : BlueTooth 통신 : 라즈비안 OS 조작이 필요
- 방법 3 : Local Wifi 통신 : 라즈비안 OS 조작이 필요 (포퍼먼스가 상당히 느림)

## 단계

1. 학생이 직접 메뉴얼에 따라 라즈베리파이 내에 라즈비안 설치 작업이 필요
2. 설치가 끝나면 로지콩 메뉴얼에 따라
3. 라즈베리 펌웨어 설치 및 운영체제 (window) 드라이버 설치

## 지원 하드웨어

현재는 윈도우만 지원 예정

## Electron 시작해보기

##### 구성 요소

```
    app/
        package.json
        main.js
        index.html
```

main.js 가 package.js에 설정되어 있지 않으면
자동으로 같은 디렉토리의 index.js를 로드

##### 실행 방법

npm을 이용해 전역으로 electron 설치

```
    npm install electron -g
```

```
    electron . # dir 내부에서 실행
    electron app # dir 밖에서 실행
```

##### 바이너리 사용

```
    .\electron\electron.exe your-app\ # window
    .\electron\electron your-app\ # linux
    .\Electron.app\Contents\MacOS\Electron your-app\ # mac os
```

##### 미리 실행

```
    electron/electron-quick-start
```

## Electron 배포

mac
```
    electron/Electron.app/Contents/Resources/app/
        package.json
        main.js
        index.html
```

window/linux
```
    electron/resources/app/
        package.json
        main.js
        index.html
```

Electron.app 을 실행하면 Electron 앱이 실행됩니다. <br>
최종 사용자에게는 이 electron 폴더를 배포하면 됨

## asar 로 앱 패키징

소스전체를 복사해서 배포하는 것과 별개로 asar 아카이브를 통해서<br>
애플리케이션 소스 코드가 사용자에게 노출되는 것을 방지할수 있습니다.

mac
```
electron/Electron.app/Contents/Resources/
    app.asar
```

window/linux
```
electron/resources/
    app.asar
```

자세한 내용은 <br>
https://github.com/electron/electron/blob/master/docs-translations/ko-KR/tutorial/application-packaging.md 참조

## electron-builder 와 electron-packager.

electron-packager : electron을 실행파일로 묶어서 export 해주는 npm
electron-builder : electron build를 관리해주는 npm