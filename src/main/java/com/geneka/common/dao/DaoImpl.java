package com.geneka.common.dao;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;

import com.geneka.common.util.Tools;

import static com.google.common.base.Preconditions.checkArgument;
import static com.google.common.base.Preconditions.checkNotNull;

@Repository
public class DaoImpl implements Dao{

	@PersistenceContext
	private EntityManager em;
	
	
	public <T> T save(T entity) throws Exception {
		checkNotNull(entity, "Entity must not be null");

        Object pk = Tools.getPrimaryKeyValue(entity);
        checkArgument(pk instanceof Integer, "Entity Id isn't Integer");

        return ((Integer)pk > 0)
               ? modify(entity)
               : insert(entity);
	}

	public <T> T insert(T entity) throws Exception {
		em.persist(entity);
        return entity;
	}

	public <T> T modify(T entity) throws Exception {
		entity = em.merge(entity);
        return entity;
	}

	public <T> boolean delete(T entity) throws Exception {
		entity = em.merge(entity);
        em.remove(entity);
        return true;
	}


	public <T> List<T> getAllItems(Class<T> entityClass) {
		CriteriaBuilder criteriaBuilder = em.getCriteriaBuilder();
		CriteriaQuery<T> select = criteriaBuilder.createQuery(entityClass);
		Root<T> variableRoot = select.from(entityClass);
		select.select(variableRoot);
        TypedQuery<T> typedQuery = em.createQuery(select);
        return typedQuery.getResultList();
	}


	public <T> T findById(Class<T> entityClass, int entityId) throws Exception {
		T entity = em.find(entityClass, entityId);
        if (entity == null)
        {
            throw new Exception("Can not find element with ID = "
                                           + entityId + " from entity " + entityClass);
        }
        return entity;
	}


	public <T> T getEntityByNamedQuery(Class<T> entityClass, String namedQuery,
			Map<String, Object> parameters) throws Exception {
		TypedQuery<T> query = em.createNamedQuery(namedQuery, entityClass);
		return getSingleResult(query, parameters);
	}

	
	public <T> List<T> getEntitiesByNamedQuery(Class<T> entityClass,
			String namedQuery, Map<String, Object> parameters) throws Exception {
		
		TypedQuery<T> query = em.createNamedQuery(namedQuery, entityClass);
		return getResultList(query, parameters);
	}

	public <T> List<T> getEntitiesByQuery(Class<T> entityClass, String jpaQuery)
			throws IllegalArgumentException, IllegalStateException, Exception {
		TypedQuery<T> query = em.createQuery(jpaQuery, entityClass);
        return getResultList(query, null);
	}

	public <T> List<T> getEntitiesByQuery(Class<T> entityClass,
			String jpaQuery, Map<String, Object> parameters)
			throws IllegalArgumentException, IllegalStateException, Exception {
		TypedQuery<T> query = em.createQuery(jpaQuery, entityClass);
        return getResultList(query, parameters);
	}
	
	private <T> T getSingleResult(TypedQuery<T> query, Map<String, Object> parameters)
            throws IllegalArgumentException, IllegalStateException, Exception
    {
        if (parameters != null)
        {
            for (String parameter : parameters.keySet())
            {
                query.setParameter(parameter, parameters.get(parameter));
            }
        }

        return query.getSingleResult();
    }
	
	private <T> List<T> getResultList(TypedQuery<T> query, Map<String, Object> parameters)
            throws IllegalArgumentException, IllegalStateException, Exception
    {
        if (parameters != null)
        {
            for (String parameter : parameters.keySet())
            {
                query.setParameter(parameter, parameters.get(parameter));
            }
        }
        return query.getResultList();
    }
	
	

}
