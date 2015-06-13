package com.geneka.common.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import com.geneka.common.util.Tools;
import com.mongodb.BasicDBObject;
import com.mongodb.WriteResult;

@Repository
public class DaoNSImpl implements DaoNS
{

	@Autowired
	private MongoTemplate mongoTemplate;

	@Override
	public <T> T save(T entity) throws Exception
	{
		if (!mongoTemplate.collectionExists(entity.getClass()))
		{
			mongoTemplate.createCollection(entity.getClass());
		}
		return insert(entity);
	}

	@Override
	public <T> T insert(T entity) throws Exception
	{
		mongoTemplate.insert(entity);
		return entity;
	}

	@Override
	public <T> boolean delete(T entity) throws Exception
	{
		mongoTemplate.remove(entity);
		return true;
	}

	@Override
	public <T> List<T> getAllItems(Class<T> entityClass)
	{
		return mongoTemplate.findAll(entityClass);
	}

	@Override
	public <T> T findById(Class<T> entityClass, String entityId)
			throws Exception
	{
		return mongoTemplate.findById(entityId, entityClass);
	}

	@Override
	public <T> T updateByQuery(Class<T> entityClass, String nameFieldFind, Object valueFind, 
			String nameFieldSet, Object valueSet)
	{
		Query query = new Query();
		query.addCriteria(Criteria.where(nameFieldFind).is(valueFind));
		query.fields().include(nameFieldFind);
		
		Update update = new Update();
		update.set(nameFieldSet, valueSet);
		
		mongoTemplate.updateFirst(query, update, entityClass);
		return mongoTemplate.findOne(query, entityClass);
	}

}
