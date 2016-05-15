package services;

import core.dao.BodySystemDao;
import core.entity.BodySystem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by gaial on 07.05.2016.
 */
@Service
public class BodySystemServiceImpl implements BodySystemService {

    @Autowired
    private BodySystemDao bodySystemDao;

    public List<BodySystem> getAll() {
        return bodySystemDao.list();
    }

    public void create(BodySystem bodySystem) {
        bodySystemDao.create(bodySystem);
    }

    public void update(BodySystem bodySystem) {
        bodySystemDao.update(bodySystem);
    }

    public BodySystem getById(int id) {
        return bodySystemDao.findById(id);
    }

}
