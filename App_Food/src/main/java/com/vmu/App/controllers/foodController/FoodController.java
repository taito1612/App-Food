package com.vmu.App.controllers.foodController;

import java.util.List;

import com.vmu.App.models.Food;
import com.vmu.App.repository.RopoFood.FoodReponsitory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/app")
public class FoodController {

    @Autowired
    public FoodReponsitory foodReponsitory;

    
    
    @GetMapping("/produced")
    public List<Food> getListFood(){
        return foodReponsitory.findAll();
    }

    @GetMapping("/producedById")
    public List<Food> getListFoodByCategory(@RequestParam(value = "id" ,defaultValue = "2") String id){
        Long idCategory = Long.parseLong(id);
        return foodReponsitory.findByIdCategory(idCategory);
    }

    
    
}
