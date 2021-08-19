package com.vmu.App.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "food")
public class Food {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "namefood")
    private String namefood;

    @Column(name = "price")
    private String price;

    @Column(name = "detail")
    private String detail;

    
    @Column(name = "idCategory")
    private Long idCategory;

    @Column(name = "linkimage")
    private String linkimage;

    public Food(){
        super();
    }

    public Food(String namefood,String price,String detail,Long idCategory,String linkimage){
        this.namefood = namefood;
        this.price = price;
        this.detail = detail;
        this.idCategory = idCategory;
        this.linkimage = linkimage;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNamefood() {
        return namefood;
    }

    public void setNamefood(String namefood) {
        this.namefood = namefood;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public Long getIdCategory() {
        return idCategory;
    }
    public void setIdCategory(Long idCategory) {
        this.idCategory = idCategory;
    }
    public String getLinkimage() {
        return linkimage;
    }
    public void setLinkimage(String linkimage) {
        this.linkimage = linkimage;
    }
}
