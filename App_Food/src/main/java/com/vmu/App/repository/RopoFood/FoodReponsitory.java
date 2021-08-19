package com.vmu.App.repository.RopoFood;

import com.vmu.App.models.Food;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodReponsitory extends JpaRepository<Food,Long> {
    
}
