package com.geneka.common.util;

import com.google.common.base.Charsets;
import com.google.common.cache.Cache;
import com.google.common.collect.Maps;
import com.google.common.io.Files;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.util.DigestUtils;

import javax.annotation.Nonnull;

import java.io.*;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.net.URL;
import java.net.URLClassLoader;
import java.util.*;
import java.util.concurrent.TimeUnit;
import java.util.jar.JarEntry;
import java.util.jar.JarFile;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;
import java.util.zip.ZipOutputStream;

/**
 * Tools
 * <p>
 * Helper class with standard methods ready to use
 *
 * @author Jonathan Ortiz
 * @since 29/09/2014
 *        <p>
 *        All rights reserved. (C) Consensus Corporation
 */
public class Tools {

	/**
	 * Method which transform a context map into JSon string
	 *
	 * @param mapContext
	 *            Context map
	 * @return JSon String
	 */
	public static String serializeContextToJSon(Map<String, Object> mapContext)
			throws IOException {
		return null != mapContext && !mapContext.isEmpty() ? serializeToJSon(mapContext)
				: "";
	}

	/**
	 * Method which Serialize a object
	 *
	 * @param object
	 *            Object to serialize
	 * @param <T>
	 *            Object Type
	 * @return String with the JSon for the object or null if the object is null
	 *
	 * @throws IOException
	 *             If an error happens during serialization
	 */
	public static <T> String serializeToJSon(T object) throws IOException {
		if (object == null) {
			return null;
		}

		ObjectMapper mapper = new ObjectMapper();
		return mapper.writeValueAsString(object);
	}

	public static <T> T deserializeFromJSon(String json, Class<T> clazz)
			throws IOException {
		if (json == null || json.trim().isEmpty()) {
			return null;
		}

		ObjectMapper mapper = new ObjectMapper();
		return mapper.readValue(json, clazz);
	}

	public static <T> String serializeDefaultTypingToJSon(T object)
			throws IOException {
		long s = System.currentTimeMillis();
		if (object == null) {
			return null;
		}

		ObjectMapper mapper = new ObjectMapper();
		mapper.enableDefaultTyping(); // default to using
										// DefaultTyping.OBJECT_AND_NON_CONCRETE
		mapper.enableDefaultTyping(ObjectMapper.DefaultTyping.NON_FINAL);
		long e = System.currentTimeMillis();

		return mapper.writeValueAsString(object);
	}

	public static <T> T deserializeDefaultTypingFromJSon(String json,
			Class<T> clazz) throws IOException {
		long s = System.currentTimeMillis();
		if (json == null || json.trim().isEmpty()) {
			return null;
		}

		ObjectMapper mapper = new ObjectMapper();
		mapper.enableDefaultTyping(); // default to using
										// DefaultTyping.OBJECT_AND_NON_CONCRETE
		mapper.enableDefaultTyping(ObjectMapper.DefaultTyping.NON_FINAL);
		long e = System.currentTimeMillis();
		return mapper.readValue(json, clazz);
	}

	public static String getMd5(String str) {
		return DigestUtils.md5DigestAsHex(str.getBytes(Charsets.UTF_8));
	}

	public static boolean matches(String regexp, String text) {
		Pattern pattern = Pattern.compile(regexp);
		Matcher matcher = pattern.matcher(text);
		return matcher.matches();
	}

	public static boolean isValidBooleanString(String status) {
		return !status.equals("")
				&& (Boolean.parseBoolean(status) || status.equals(Boolean.FALSE
						.toString()));
	}

	public static Method getMethod(Object object, String methodName)
			throws NoSuchMethodException {
		Method[] declaredMethods = object.getClass().getDeclaredMethods();
		for (Method method : declaredMethods) {
			if (method.getName().contentEquals(methodName)) {
				return method;
			}
		}
		throw new NoSuchMethodException("Method " + methodName
				+ " does not exist!");
	}

	public static Object executeMethod(Object object, Method method,
			Object... params) throws NoSuchMethodException,
			InvocationTargetException, IllegalAccessException {
		return method.invoke(object, params);
	}

	public static String getterMethod(String fieldName) {
		return "get" + fieldName.substring(0, 1).toUpperCase()
				+ fieldName.substring(1);
	}

	public static String setterMethod(String fieldName) {
		return "set" + fieldName.substring(0, 1).toUpperCase()
				+ fieldName.substring(1);
	}
	
	public static <T> Object getPrimaryKeyValue(T entity)
    {
        String pkfield = "id";

        Object pkfiledValue = null;
        for (Field field : entity.getClass().getDeclaredFields())
        {
            if (field.getName().trim().equalsIgnoreCase(pkfield.trim()))
            {
                org.springframework.util.ReflectionUtils.makeAccessible(field);
                // We get its value with reflection
                try
                {
                    pkfiledValue = field.get(entity);
                }
                catch (Exception e)
                {
                    throw new IllegalArgumentException(
                            "Entity does not contains PK column: " + pkfield);
                }
            }
        }
        return pkfiledValue;
    }
}
