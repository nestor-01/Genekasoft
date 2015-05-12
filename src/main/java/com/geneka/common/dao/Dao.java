package com.geneka.common.dao;

import java.util.List;
import java.util.Map;

import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Transactional(propagation = Propagation.REQUIRED)
public interface Dao {
	

    public <T> T save(T entity) throws Exception;

    public <T> T insert(T entity) throws Exception;

    public <T> T modify(T entity) throws Exception;

    
    public <T> boolean delete(T entity) throws Exception;

    
    public <T> List<T> getAllItems(Class<T> entityClass);

    public <T> T findById(Class<T> entityClass, int entityId) throws Exception;

    public <T> T getEntityByNamedQuery(Class<T> entityClass, String namedQuery,
                                       Map<String, Object> parameters) throws Exception;

   
    public <T> List<T> getEntitiesByNamedQuery(Class<T> entityClass, String namedQuery,
                                               Map<String, Object> parameters)
            throws Exception;

    
    public <T> List<T> getEntitiesByQuery(Class<T> entityClass, String jpaQuery)
            throws IllegalArgumentException, IllegalStateException, Exception;

    
    public <T> List<T> getEntitiesByQuery(Class<T> entityClass, String jpaQuery, Map<String, Object> parameters)
            throws IllegalArgumentException, IllegalStateException, Exception;

}
