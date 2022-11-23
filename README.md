# Dashboard-FE
DB 데이터 모니터링을 위한 대시보드 프로젝트 입니다.

![image](https://user-images.githubusercontent.com/69198709/203470453-62852518-8825-414c-8f4c-80b1254d28a4.png)


## 개발환경


## 파일 구조
Dashboard-FE
'''
.
├── README.md
├── .gitignore
├── package-lock.json
├── package.json
├── public
│   ├── home.png
│   ├── index.html
│   └── robots.txt
|
└── src
    ├── App.js
    ├── App.css
    ├── index.js
    ├── index.css
    ├── setProxy.js
    |
    ├── components
    │   ├── Header
    │   │   └── Header.js
    │   ├── Sidebar
    │   │   ├── Nav.css
    │   │   └── Nav.js
    │   ├── ClimateRequester.js
    │   ├── GochangRequester.js
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
   '''

## 설치
'''npm install -g '''
