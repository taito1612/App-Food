package com.vmu.App.controllers.categoryController;

import java.util.List;

import com.vmu.App.models.Category;
import com.vmu.App.repository.RepoCategory.CategoryReponsitory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/app")
public class CategoryController {
    
    @Autowired
    public CategoryReponsitory categoryReponsitory;

    @GetMapping("/category")
    public List<Category> getList(){
        return categoryReponsitory.findAll();
    }


}
