package com.geneka.common.dao;

import java.util.List;


public interface DaoNS {
	
	public <T> T save(T entity) throws Exception;
	
	public <T> T insert(T entity) throws Exception;
	
	public <T> boolean delete(T entity) throws Exception;

    public <T> List<T> getAllItems(Class<T> entityClass);
    
    public <T> T findById(Class<T> entityClass, String entityId) throws Exception;
    
    public <T> T updateByQuery(Class<T> entityClass, String nameFieldFind, Object valueFind,
							   String nameFieldSet, Object valueSet);
    
}
