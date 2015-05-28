package com.geneka.product.bs;

import java.util.List;
import java.util.Map;

import com.geneka.modelnosql.Search;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.geneka.model.Category;
import com.geneka.model.User;
import com.geneka.modelnosql.Image;
import com.geneka.modelnosql.Product;

public interface ProductService {
	
	public List<Product> getAllProducts()throws Exception;
	
	public Product getProductById(String id)throws Exception;
	
	public List<Product> getProductByName(String name)throws Exception;
	
	public boolean saveProduct(Product product)throws Exception;
	
	public boolean saveProduct(String id, String name, String description, String code, List<Category> categories, List<Image> images)throws Exception;
	
	public boolean deleteProduct(String productId)throws Exception;

	public boolean inactive(String productId, Boolean active)throws Exception;

	public boolean saveSearch(Integer userId, String date, Map params) throws Exception;
}
