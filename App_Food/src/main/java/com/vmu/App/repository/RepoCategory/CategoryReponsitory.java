package com.vmu.App.repository.RepoCategory;

import java.util.List;

import com.vmu.App.models.Category;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryReponsitory extends JpaRepository<Category,Long> {
    List<Category> findByNamecategory(String namecategory);
}
