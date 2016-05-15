package services;

import core.entity.BodySystem;

import java.util.List;

/**
 * Created by gaial on 07.05.2016.
 */

public interface BodySystemService {

    List<BodySystem> getAll();

    void create(BodySystem bodySystem);

    void update(BodySystem bodySystem);

    BodySystem getById(int id);
}
