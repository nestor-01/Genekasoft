package com.geneka.modelnosql;

import java.util.List;

import org.springframework.data.annotation.Id;
//import org.springframework.data.mongodb.core.mapping.Document;

import com.geneka.model.Category;


public class Product {

	@Id
	private String id;
	
	private String name;
	
	private String description;
	
	private String code;

	private Boolean active;
	
	private List<Category> categories;

	private List<Image> images;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public List<Category> getCategories() {
		return categories;
	}

	public void setCategories(List<Category> categories) {
		this.categories = categories;
	}

	public List<Image> getImages() {
		return images;
	}

	public void setImages(List<Image> images) {
		this.images = images;
	}

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}
}
