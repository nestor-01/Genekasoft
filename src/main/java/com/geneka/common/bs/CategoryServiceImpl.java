package com.geneka.common.bs;

import com.geneka.common.dao.Dao;
import com.geneka.model.Category;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by Nestor on 12/05/2015.
 */
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    Dao dao;

    @Override
    public List<Category> getAllCategories() throws Exception {
        return dao.getAllItems(Category.class);
    }
}
