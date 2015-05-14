package com.geneka.product.ws;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.geneka.common.util.DefaultContextImpl;
import com.geneka.common.util.Tools;
import com.geneka.model.Category;
import com.geneka.model.User;
import com.geneka.modelnosql.Image;
import com.geneka.modelnosql.Product;
import com.geneka.product.bs.ProductService;


@RestController
@RequestMapping("/product")
public class ProductWS {
	
	@Autowired
	ProductService productService;
	
	@RequestMapping(value = "/test", method = RequestMethod.GET)
	public @ResponseBody String test() throws Exception
	{
		List<Product> lstProducts = productService.getAllProducts();
		return Tools.serializeToJSon(lstProducts);
	}
	
	@RequestMapping(value = "/saveTest", method = RequestMethod.GET)
	public @ResponseBody String saveProductTest() throws Exception
	{
		Product product = new Product();
		product.setDescription("description u");
		product.setName("name");
		product.setCode("AQWE344rrsddE44566tfDeRTfff");
		List<Category> categories = new ArrayList<>();
		Category category = new Category();
		category.setName("name category");
		category.setId(1);
		categories.add(category);
		Image image = new Image();
		image.setSource("sdfdfvzxcvxfvttyhbtyntyntntnytby");
		image.setId(1);
		image.setName("name image");
		List<Image> images = new ArrayList<>();
		images.add(image);
		product.setCategories(categories);
		product.setImages(images);
		productService.saveProduct(product);
		return "ok";
	}

	@RequestMapping(value = "/getAll", method = RequestMethod.GET)
	public @ResponseBody String getAllProducts() throws Exception
	{
		List<Product> lstProducts = productService.getAllProducts();
		return Tools.serializeToJSon(lstProducts);
	}

	@RequestMapping(value = "/getById", method = RequestMethod.GET)
	public @ResponseBody String getProductById(String  id) throws Exception
	{
		Product product = productService.getProductById(id);
		return Tools.serializeToJSon(product);
	}
	
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public @ResponseBody String saveProduct(@RequestBody String paramsNewProduct) throws Exception
	{
		Map<String, Object> attributesDef = new DefaultContextImpl();
		try
		{
			HashMap attributes = Tools.deserializeFromJSon(paramsNewProduct, HashMap.class);
			attributesDef.putAll(attributes);
			Product product = new Product();
			product.setDescription((String) attributesDef.get("description"));
			product.setName((String) attributesDef.get("name"));
			product.setCode((String) attributesDef.get("code"));
			product.setActive((Boolean) attributesDef.get("active"));
			Map<String, Object> categoriesMap = (Map) attributesDef.get("categories");
			if(categoriesMap != null)
			{
				List<Category> categories = new ArrayList<>();
				Category category = new Category();
				category.setId((Integer) categoriesMap.get("id"));
				category.setDescription((String) categoriesMap.get("description"));
				category.setName((String) categoriesMap.get("name"));

				categories.add(category);

				product.setCategories(categories);			
			}
			String imagesJson = (String) attributesDef.get("images");
			if(imagesJson != null)
			{
				List<Image> images = new ArrayList<>();
				List listImage = Tools.deserializeFromJSon(imagesJson, List.class);
				for(Object i : listImage)
				{
					Image image = (Image) i;
					images.add(image);
				}
				product.setImages(images);
			}
			productService.saveProduct(product);
		}
		catch (Exception e)
		{
			return e.getCause().toString();
		}
		return "ok";
	}
	
	/*@RequestMapping(value = "/saveProductImages", method = RequestMethod.POST)
	public @ResponseBody String saveProductImages(@RequestBody String paramsCategories) throws Exception
	{
		Map<String, Object> attributesDef = new DefaultContextImpl();
		try
		{
			List<Category> categories = new ArrayList<>();
			List listCategory = Tools.deserializeFromJSon(paramsCategories, List.class);
			for(Object c : listCategory)
			{
				Category category = (Category) c;
				categories.add(category);
			}
			//productService.addProduct(product);
		}
		catch (Exception e)
		{
			return e.getCause().toString();
		}
		return "ok";
	}*/
	
	

}
