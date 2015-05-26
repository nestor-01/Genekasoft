package com.geneka.modelnosql;

import java.util.Date;
import java.util.Map;

/**
 * Created by Nestor on 22/05/2015.
 */
public class Search {

    private Integer userId;

    private Date date;

    private Map params;

    public Search() {
    }

    public Search(Integer userId, Date date, Map params) {
        this.userId = userId;
        this.date = date;
        this.params = params;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Map getParams() {
        return params;
    }

    public void setParams(Map params) {
        this.params = params;
    }
}
