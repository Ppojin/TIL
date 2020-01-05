# `mybatis` 에서 방금 `insert` 한 `Primary key` 이용하기

`mybatis Mapper` 의 `insert` 태그에서 `useGeneratedKeys="true"` 와 `keyProperty="<ID 변수명>"` 를 설정한다
```sql
create table testTable(TestID int, content varchar(20));
```
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
```xml
<mapper namespace="...TestMapper">
    <resultMap id="TestVOResultMap" type="...domain.TestV">
        <id     property="testID"   column="testID"/>
        <result property="content"  column="testContent"/>
    </resultMap>
    <insert id="insertTest" useGeneratedKeys="true" keyProperty="testID">
        INSERT INTO `testTable`(`content`)
        VALUES(${content});
    </insert>
</mapper>
```
```java
@Repository
public class TestDaoImpl implements TestDao {
    private static final String NAMESPACE = "...TestMapper";
    private final SqlSession sqlSession;
    
    @Inject 
    public TestDAOImpl(SqlSession sqlSession) { this.sqlSession = sqlSession; }

    @Override
    public void createGroup(TestVO TestVO) throws Exception {
        sqlSession.insert(NAMESPACE + ".createGroup", TestVO);
        System.out.println(TestVO.getTestID());
    }
}
```