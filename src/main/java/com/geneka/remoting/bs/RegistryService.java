package com.geneka.remoting.bs;

public interface RegistryService
{
	public void registerService(String serviceName, String serviceURL, int registryPort);
	public String getService(String serviceName);
}
