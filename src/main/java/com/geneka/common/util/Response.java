package com.geneka.common.util;

import java.util.HashMap;

/**
 * Wraps the response for http requests
 *
 * @author Carlos Castaño
 * @version 1.0
 */
public class Response {

    public final static String OK = "OK";
    public final static String ERROR = "ERROR";
    public final static String EXCEPTION = "EXCEPTION";

    private String status;
    private String message;
    private HashMap<String, Object> data = new HashMap<>();

    public Response setStatus(String status)
    {
        this.status = status;
        return this;
    }

    public Response setMessage(String message)
    {
        this.message = message;
        return this;
    }

    public String getStatus()
    {
        return this.status;
    }

    public String getMessage()
    {
        return this.message;
    }

    public HashMap<String, Object> getData() {
        return data;
    }

    public Response setData(HashMap<String, Object> data) {
        this.data = data;
        return this;
    }

    public Response addData(String key, Object value)
    {
        this.data.put(key, value);
        return this;
    }
}
