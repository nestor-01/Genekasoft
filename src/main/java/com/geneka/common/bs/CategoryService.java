package com.geneka.common.bs;

import com.geneka.model.Category;

import java.util.List;

/**
 * Created by Nestor on 12/05/2015.
 */
public interface CategoryService {

    public List<Category> getAllCategories() throws Exception;

}
