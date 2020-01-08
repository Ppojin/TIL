# `mybatis` 에서 방금 `insert` 한 `Primary key` 이용하기

`mybatis Mapper` 의 `insert` 태그에서 `useGeneratedKeys="true"` 와 `keyProperty="<ID 변수명>"` 를 설정하여 업로드한 `VO`에 해당 테이블에 저장된 `Primary Key` 를 저장하여 이용 가능하다.

1. DAO 에서 `sqlSession.insert` 를 통해 tuple 을 생성
2. `Mapper.insert` 태그의 `useGeneratedKeys=true` 옵션을 통해, SQL insert 를 통해 생성된 `Primary Key` 를 이용
3. `keyProperty` 옵션으로 설정된 `column` 을 타고 `VO` 에 저장

## SQL Table, VO 예시
`PRIMARY KEY` 가 있는 table 필요
```sql
create table testTable(
    TestID int PRIMARY KEY, 
    content varchar(20)
);
```
table 예시에 맞는 VO
```java
public class TestVO {
    private Integer TestID;
    private String content;

    @Override
    public String toString() { 
        return "TestVO{TestID=" + TestID + ", content='" + content + "'}"; 
    }

    public Integer getTestID() { return TestID; }
    public void setTestID(Integer TestID) { this.TestID = TestID; }
    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }
}
```

## Mybatis Mapper 예시
insert 태그에서 `useGeneratedKeys="true" keyProperty="testID"` 을 설정하여 `TestVO` 의 `testID` 에 생성된 `Primary Key` 를 저장한다.
```xml
<mapper namespace="...TestMapper">
    <resultMap id="TestVOResultMap" type="...domain.TestVO">
        <id     property="testID"   column="testID"/>
        <result property="content"  column="testContent"/>
    </resultMap>
    <insert id="insertTest" useGeneratedKeys="true" keyProperty="testID">
        INSERT INTO `testTable`(`content`)
        VALUES(${content});
    </insert>
</mapper>
```

## DAO 예시
`TestVO` 에 저장된 `getter` 을 이용하여 방금 생성한 `Primary Key` 를 이용할 수 있다.
```java
@Repository
public class TestDaoImpl implements TestDao {
    private static final String NAMESPACE = "...TestMapper";
    private final SqlSession sqlSession;
    
    @Inject 
    public TestDAOImpl(SqlSession sqlSession) { this.sqlSession = sqlSession; }

    @Override
    public void createGroup(TestVO TestVO) throws Exception {
        sqlSession.insert(NAMESPACE + ".insertTest", TestVO); //[1]
        System.out.println(TestVO.getTestID());
    }
}
```