package com.geneka.product.ws;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.geneka.common.util.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.geneka.common.util.DefaultContextImpl;
import com.geneka.common.util.Tools;
import com.geneka.model.Category;
import com.geneka.modelnosql.Image;
import com.geneka.modelnosql.Product;
import com.geneka.product.bs.ProductService;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.MultipartRequest;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


@RestController
@EnableWebMvc
@RequestMapping("/product")
public class ProductWS {
	
	@Autowired
	ProductService productService;

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
	public @ResponseBody List<Product> getAllProducts() throws Exception
	{
		return productService.getAllProducts();
	}

	@RequestMapping(value = "/getById", method = RequestMethod.GET)
	public @ResponseBody Product getProductById(@RequestParam("id") String  id) throws Exception
	{
		return productService.getProductById(id);
	}
	
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public @ResponseBody Response saveProduct(@RequestBody Product product)
	{
        Response response = new Response();

        try
        {
            productService.saveProduct(product);

            return response.setStatus(Response.OK);
        }
        catch (Exception e)
        {
            return response
                    .setStatus(Response.EXCEPTION)
                    .setMessage(e.getMessage());
        }
	}

	@RequestMapping(value = "/uploadImages", method = RequestMethod.POST)
	public @ResponseBody Response uploadImages(HttpServletResponse _response, @RequestParam("productName") String productName, MultipartHttpServletRequest request)//HttpServletRequest request, @RequestParam("productName") String productName, @RequestParam("file") MultipartRequest multipartRequest)
	{
        _response.setHeader("Access-Control-Allow-Headers", "Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Cache-Control");

        Response response = new Response();
        Map<String, MultipartFile> fileMap = request.getFileMap();
        Map<String, String> dataFiles = new HashMap<>();

        for (MultipartFile image : fileMap.values())
        {
            if(!image.isEmpty())
            {
                String name = image.getOriginalFilename();

                HttpSession session = request.getSession();
                ServletContext sc = session.getServletContext();
                String relativePath = "build\\img\\products\\" + productName + "\\";
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

                        response.setStatus(Response.OK);
                        dataFiles.put(name, relativePath.replaceAll("\\\\", "/") + name);
                    }

                    else
                    {
                        response
                            .setStatus(Response.ERROR)
                            .setMessage("Error creando directorios");
                    }
                }
                catch(Exception e)
                {
                    response
                        .setStatus(Response.EXCEPTION)
                        .setMessage(e.getMessage());
                }
            }

            else
            {
                response
                    .setStatus(Response.ERROR)
                    .setMessage("Falló la carga del archivo");
            }
        }


        response.addData("paths", dataFiles);
        return response;
	}

    @RequestMapping(value = "/deleteProduct", method = RequestMethod.POST)
    public @ResponseBody Response deleteProduct(@RequestParam("productId") String productId)
    {
        Response response = new Response();

        try
        {
            if(productService.deleteProduct(productId))
            {
                return response.setStatus(Response.OK);
            }

            else
            {
                return response
                        .setStatus(Response.ERROR)
                        .setMessage("Error al intentar borrar el producto");
            }

        }
        catch (Exception e)
        {
            return response
                    .setStatus(Response.EXCEPTION)
                    .setMessage(e.getMessage());
        }
    }
}
