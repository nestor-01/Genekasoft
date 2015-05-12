package com.geneka.remoting.bs;
import java.util.HashMap;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;



public class RegistryServiceImpl implements RegistryService
{
	Log logger = LogFactory.getLog(getClass());
	
	private HashMap<String,String> hmServiceRegistry = new HashMap<String,String>();
	
	public void registerService(String serviceName, String serviceURL, int registryPort)
	{
		hmServiceRegistry.put(serviceName, serviceURL+":"+registryPort);
		logger.info("RegistryService: registerService: registered service:"+serviceName+" at "+serviceURL);
	}

	public String getService(String serviceName)
	{
		return hmServiceRegistry.get(serviceName);
	}

}
