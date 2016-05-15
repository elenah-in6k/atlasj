package core;

import core.dao.BodySystemDao;
import core.entity.BodySystem;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Created by Юля on 07.05.2016.
 */
public class Main {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("db-context.xml");
        BodySystemDao bodySystemDao = (BodySystemDao) context.getBean("illnessDao");
        BodySystem bodySystem = new BodySystem();
        bodySystem.setId(2);
        bodySystem.setName("adsdasds");
        bodySystemDao.create(bodySystem);

    }
}
