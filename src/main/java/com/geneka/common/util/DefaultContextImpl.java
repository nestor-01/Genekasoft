package com.geneka.common.util;

import com.google.gson.Gson;

import java.util.HashMap;
import java.util.Map;


public class DefaultContextImpl extends HashMap<String, Object> implements Context
{

    private static final long serialVersionUID = 1L;

    public static DefaultContextImpl fromJSON(String jsonString)
    {
        DefaultContextImpl data = new DefaultContextImpl();
        Gson gson = new Gson();
        HashMap<String, Object> dataTmp = gson.fromJson(jsonString, HashMap.class);
        data.putAll(dataTmp);
        return (data);
    }

    public String toString()
    {
        Gson gson = new Gson();
        return gson.toJson(this, Context.class);
    }

    public static DefaultContextImpl fromJSONEvalType(String jsonString)
    {
        DefaultContextImpl data = new DefaultContextImpl();
        DefaultContextImpl dataTmp = DefaultContextImpl.fromJSON(jsonString);

        for (Entry<String, Object> entry : dataTmp.entrySet())
        {
            data.put(entry.getKey(), evaluate(entry.getValue()));
        }

        return data;
    }

    public static Map<String, Object> evalType(Map<String, Object> dataTmp)
    {
        Map<String, Object> data = new DefaultContextImpl();

        for (Entry<String, Object> entry : dataTmp.entrySet())
        {
            data.put(entry.getKey(), evaluate(entry.getValue()));
        }

        return data;
    }

    private static Object evaluate(Object value)
    {
        Object val;
        try
        {
            val = Integer.parseInt("" + value);
        }
        catch (Exception e)
        {
            try
            {
                val = Double.parseDouble("" + value);
            }
            catch (Exception e1)
            {
                val = value;
            }
        }

        return val;
    }
}
