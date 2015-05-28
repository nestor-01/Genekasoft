package com.geneka.product.bs;

import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import com.geneka.modelnosql.Search;
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
	public boolean deleteProduct(String productId) throws Exception
	{
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean inactive(String productId, Boolean active) throws Exception
	{
		Product product = daoNS.updateByQuery(Product.class, "id",
				productId, "active", active);
		return product != null? false : true;
	}

	public boolean saveSearch(Integer userId, String date, Map params) throws Exception
	{
		Search search = new Search();
		search.setUserId(userId);
		SimpleDateFormat formatter = new SimpleDateFormat("dd-MMM-yyyy HH:mm:ss");
		search.setDate(date == null ? null : formatter.parse(date));
		search.setParams(params);
		daoNS.save(search);
		return true;
	}

}
