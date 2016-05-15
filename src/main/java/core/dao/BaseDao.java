package core.dao;

import org.hibernate.Criteria;
import org.hibernate.Query;

import java.util.List;

/**
 * Created by Юля on 07.05.2016.
 */
public interface BaseDao<T>  {
    void create(T entity);

    void update(T entity);

    void delete(T entity);

    T get(int id);

    T findById(int id);

    List<T> list();

    Query createQuery(String query);

    void refresh(T entity);

    Criteria getCriteria();
}
