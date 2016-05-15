package core.dao;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import java.lang.reflect.ParameterizedType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by Юля on 07.05.2016.
 */

@Repository
@Transactional
public class BaseDaoImpl<T> implements BaseDao<T> {
    private final Class<T> persistentClass;

    @Autowired
    protected SessionFactory sessionFactory;

    protected BaseDaoImpl() {
        Class<T> clazz;
        try {
            clazz = getClassType();
        } catch (Exception e) {
            clazz = null;
        }
        this.persistentClass = clazz;
    }

    @SuppressWarnings("unchecked")
    private Class<T> getClassType() {
        return (Class<T>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[0];
    }

    public void create(T entity) {
        getSession().save(entity);
    }

    public void update(T entity) {
        getSession().update(entity);
    }

    public void delete(T entity) {
        getSession().delete(entity);
    }

    @SuppressWarnings("unchecked")
    public T get(int id) {
        return (T) getSession().get(persistentClass, id);
    }

    public T findById(int id) {
        return get(id);
    }

    @SuppressWarnings("unchecked")
    public List<T> list() {
        getSession().clear();
        return getCriteria().list();
    }

    public Criteria getCriteria() {
        return getSession().createCriteria(persistentClass);
    }

    public Query createQuery(String query) {
        return getSession().createQuery(query);
    }

    public void refresh(T entity) {
        getSession().refresh(entity);
    }

    private Session getSession() {
        return this.sessionFactory.getCurrentSession();
    }
}
