package com.geneka.product.ws;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.geneka.common.util.DefaultContextImpl;
import com.geneka.common.util.Tools;
import com.geneka.model.Category;
import com.geneka.modelnosql.Image;
import com.geneka.modelnosql.Product;
import com.geneka.product.bs.ProductService;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


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
		image.setThumbnail("sdfdfvzxcvxfvttyhbtyntyntntnytby");
		image.setFile("c:user.txt");
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
			List<Map<String, Object>> lstCategories = (List) attributesDef.get("categories");
			if(lstCategories != null)
			{
				List<Category> categories = new ArrayList<>();
				for (Map<String, Object> categoryMap : lstCategories)
				{
					Category category = new Category();
					category.setId((Integer) categoryMap.get("id"));
					category.setDescription((String) categoryMap.get("description"));
					category.setName((String) categoryMap.get("name"));
					category.setParentsId((Integer) categoryMap.get("parentsId"));
					category.setValue((Integer) categoryMap.get("value"));
					categories.add(category);
				}
				product.setCategories(categories);
			}
			List<Map<String, Object>> lstImages = (List)attributesDef.get("images");
			if(lstImages != null)
			{
				List<Image> images = new ArrayList<>();
				for (Map<String, Object> imageMap : lstImages)
				{
					Image image = new Image();
					image.setId((Integer) imageMap.get("id"));
					image.setName((String) imageMap.get("name"));
					image.setDescription((String) imageMap.get("description"));
					image.setThumbnail((String) imageMap.get("thumbnail"));
					image.setFile((String) imageMap.get("file"));
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

	@RequestMapping(value = "/uploadImages", method = RequestMethod.POST)
	public @ResponseBody String openApp(HttpServletRequest request, HttpServletResponse response, @RequestParam("productName") String productName, @RequestParam("file") MultipartFile image)
	{
		if(!image.isEmpty())
        {
            String name = image.getOriginalFilename();

            HttpSession session = request.getSession();
            ServletContext sc = session.getServletContext();
            String path = sc.getRealPath("/") + "build\\img\\products\\" + productName + "\\";

            try
            {
                File pathObj = new File(path);
                pathObj.mkdirs();
                if(pathObj.exists())
                {
                    byte[] bytes = image.getBytes();
                    BufferedOutputStream stream =
                            new BufferedOutputStream(new FileOutputStream(new File(path + name)));
                    stream.write(bytes);
                    stream.close();
                    return "You successfully uploaded " + name + "!";
                }

                else
                {
                    return "bad folder creation";
                }
            }
            catch(Exception e)
            {
                return "You failed to upload " + name + " => " + e.getMessage();
            }
        }

        else
        {
            return "You failed to upload because the file was empty.";
        }
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
