package com.geneka.product.bs;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

import com.geneka.common.dao.DaoNS;
import com.geneka.model.Category;
import com.geneka.model.User;
import com.geneka.modelnosql.Image;
import com.geneka.modelnosql.Product;

public class ProductServiceImpl implements ProductService
{

	@Autowired
	private DaoNS daoNS;

	public static final String COLLECTION_NAME = "product";

	@Override
	public List<Product> getAllProducts() throws Exception
	{
		return daoNS.getAllItems(Product.class);
	}

	@Override
	public Product getProductById(String id) throws Exception
	{
		return daoNS.findById(Product.class, id);
	}

	@Override
	public List<Product> getProductByName(String name) throws Exception
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean saveProduct(Product product) throws Exception
	{
		daoNS.save(product);
		return true;
	}

	@Override
	public boolean saveProduct(String id, String name, String description,
			String code, List<Category> categories, List<Image> images)
			throws Exception
	{
		try
		{
			Product product = new Product();
			product.setId(id);
			product.setCategories(categories);
			product.setImages(images);
			product.setCode(code);
			product.setDescription(description);
			product.setName(name);
			daoNS.save(product);
		}
		catch (Exception e)
		{

		}
		return true;
	}

	@Override
	public boolean deleteProduct(Integer productId) throws Exception
	{
		// TODO Auto-generated method stub
		return false;
	}

}
