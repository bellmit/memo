package jetsennet.orm.test.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SqlServerDataInfo
{

    private static String driver = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
    private static String url = "jdbc:sqlserver://192.168.8.43:1433;DatabaseName=GUOXIANG_TEST";
    private static String user = "sa";
    private static String pwd = "jetsen";

    public static final String CREATE = "create table BASE_TEST (id int primary key, value1 varchar(100), value2 varchar(200))";
    public static final String DROP = "drop table BASE_TEST;";
    public static final String INSERT = "insert into BASE_TEST values(1, 'value1', 'value2')";
    public static final String UPDATE = "update BASE_TEST set value1='value11', value2='value12' where id = 1";
    public static final String DELETE = "delete from BASE_TEST where id = 1";
    public static final String PREPARED = "insert into BASE_TEST values(?, ?, ?)";
    public static final String QUERY = "select * from BASE_TEST";

    private static final Logger logger = LoggerFactory.getLogger(SqlServerDataInfo.class);

    public static void create() throws Exception
    {
        Class.forName(driver);
        Connection conn = DriverManager.getConnection(url, user, pwd);

        Statement stat = conn.createStatement();
        boolean isExist = false;
        try
        {
            stat.executeQuery(QUERY);
            isExist = true;
        }
        catch (Exception ex)
        {
            // ignore
            isExist = false;
        }
        if (isExist)
        {
            drop();
        }
        stat.execute(CREATE);
        stat.close();
        conn.close();
    }

    public static void drop() throws Exception
    {
        Class.forName(driver);
        Connection conn = DriverManager.getConnection(url, user, pwd);

        Statement stat = conn.createStatement();
        stat.execute(DROP);
        stat.close();
        conn.close();
    }

    public static void clearTable(String table) throws Exception
    {
        try
        {
            Class.forName(driver);
            Connection conn = DriverManager.getConnection(url, user, pwd);

            Statement stat = conn.createStatement();
            String sql = "DELETE FROM " + table;
            stat.execute(sql);
            sql = "DELETE FROM NET_SEQUENCE WHERE TABLE_NAME='" + table + "'";
            stat.executeUpdate(sql);
            stat.close();
            conn.close();
        }
        catch (Exception ex)
        {
            logger.error("", ex);
        }
    }

}
