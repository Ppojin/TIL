1. Java 설치(JDK, https://java.oracle.com)
2. 시스템 환경변수 설정 
  - JAVA_HOME = C:\Program Files\Java\JDK13.0.2\
  - PATH = %JAVA_HOME%\bin
3. 버전 확인
  - $ java -version
4. api 서버 실행 
  - apidemo-0.1.jar 다운로드 폴더에서 
  - java -jar apidemo-0.1.jar 실행 
5. Swagger UI
  - http://127.0.0.1:8800/swagger-ui.html
6. Table 생성 
  - http://127.0.0.1:8800/h2-console 
     - url:  jdbc:h2:~/blog
     - username:  sa
     - password: 
  - create table
    ```
    create table blog (
      id int auto_increment primary key,
      category varchar(255), 
      title varchar(255), 
      author varchar(255), 
      contents varchar(1024), 
      link varchar(500), 
      is_private tinyint,
      cdate datetime default now()
    );
    ```
   
