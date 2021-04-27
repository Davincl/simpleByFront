# simpleByFront

+ 개발 환경
	- node v12.18.1
	- npm 6.14.5
	- Visual Studio Code
	- Vue-cli 4.5.12

+ 설치 
	1. Node 및 Visual Studio Code 설치는 생략
	2. npm을 이용하여 vue / vue-cli 설치
	```bash
	$ npm install -g vue
	$ npm install -g @vue/cli
	```
	3. vue/cli 로 프로젝트 생성
	```bash
	$ vue create simplyByFront
	```

+ 학습 진행 과정
	1. 개발 환경 준비
	2. 간단한 게시판 CRUD 구현
		- CORS 오류로 인해 설정이 필요하였으며, 간략하게 하기 위해 axios 라이브러리 설치
		- Java 단 CORS Filter 설정
		- 리스트 및 등록 구현
	3. Hash를 이용한 Ajax 호출(뒤로가기 및 원하는 검색 값 URL 생성)
		- Hash를 이용한 페이지 이동
	4. Vuex 스터디
	5. 구현 게시판에 Vuex 적용