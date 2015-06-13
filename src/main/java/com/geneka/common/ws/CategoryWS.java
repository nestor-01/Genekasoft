package com.geneka.common.ws;

import com.geneka.common.bs.CategoryService;
import com.geneka.common.util.Tools;
import com.geneka.model.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.util.List;

/**
 * Created by Nestor on 12/05/2015.
 */

@RestController
@EnableWebMvc
@RequestMapping("/category")
public class CategoryWS {

    @Autowired
    CategoryService categoryService;

    @RequestMapping(value = "/getAllCategories", method = RequestMethod.GET)
    public @ResponseBody List<Category> getAllCategories() throws Exception
    {
        return categoryService.getAllCategories();
    }
}
