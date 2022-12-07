# Dashboard-FE

DB 데이터 모니터링을 위한 대시보드 프로젝트입니다.

## 결과 화면

- ### 데이터 확인 가능
 <p align="center"> 
  <img src="https://user-images.githubusercontent.com/69198709/206108751-a92ac771-dbcc-404a-8ead-cf9cf96fcb2d.png" width="43%" height="60%">
  <img src="https://user-images.githubusercontent.com/69198709/206104379-d124fac7-20fa-443a-a740-5e63e29957aa.GIF" width="45%" height="60%">
 </p>
 
- ### 이상 데이터 그래프

 <p align="center"> 
  <img src="https://user-images.githubusercontent.com/69198709/204220442-29104fb0-e92f-4c57-83a1-b16e135c63af.png" width="45%" height="60%">
  <img src="https://user-images.githubusercontent.com/69198709/206104374-b4fdce15-6277-4682-998f-8acac650ba50.GIF" width="45%" height="60%">
 </p>

## 개발 환경

- Language : Javascript
- Framwork : React
- IDE : Visual Studio Code
- Version
  - npm : 8.15.0
  - node : 16.17.0

## 실행

`npm run start`

## 파일 구조

```
Dashboard-FE
.
├── README.md
├── .gitignore
├── package-lock.json
├── package.json
├── public
│   ├── home.png
│   └── index.html
└── src
    ├── App.js
    ├── App.css
    ├── index.js
    ├── index.css
    ├── setProxy.js
    │
    ├── components
    │   ├── Header
    │   │   └── Header.js
    │   ├── Sidebar
    │   │   ├── Nav.css
    │   │   └── Nav.js
    │   ├── ClimateRequester.js
    │   ├── GochangRequester.js
    │   ├── RiskRequester.js
    │   ├── SearchDate.js
    │   └── SearchRisk.js
    │
    └── pages
        ├── charts
        |   ├── BarChart.js
        |   ├── LineChart.js
        │   └── ScatterChart.js
        └── dashboard
            ├── Display.js (데이터 현황)
            ├── Detail.js (데이터 상세 분석)
            └── Risk.js (위험도 분석)
```
