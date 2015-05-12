package com.geneka.model;

import java.io.Serializable;

import javax.persistence.*;


/**
 * The persistent class for the feedback database table.
 * 
 */
@Entity
@Table(name="feedback")
@NamedQueries(
		{
		@NamedQuery(name="Feedback.findAll", query="SELECT f FROM Feedback f")
		})
public class Feedback implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="id", unique=true, nullable=false)
	private Integer id;

	@Lob
	private String comment;

	@Column(name="clasification_id")
	private Integer clasificationId;

	@Column(name="user_id", nullable=false)
	private Integer userId;

	public Feedback() {
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getClasificationId() {
		return clasificationId;
	}

	public void setClasificationId(Integer clasificationId) {
		this.clasificationId = clasificationId;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getComment() {
		return this.comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

}