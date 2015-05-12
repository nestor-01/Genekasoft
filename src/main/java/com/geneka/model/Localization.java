package com.geneka.model;

import java.io.Serializable;

import javax.persistence.*;


/**
 * The persistent class for the localization database table.
 * 
 */
@Entity
@Table(name="localization")
@NamedQueries(
		{
		@NamedQuery(name="Localization.findAll", query="SELECT l FROM Localization l")
		})
public class Localization implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="id", unique=true, nullable=false)
	private Integer id;

	@Column(length=255)
	private String altitude;

	@Column(length=255)
	private String length;

	@Column(name="user_id", nullable=false)
	private Integer userId;
	
	@Column(name="address")
	private String address;

	public Localization() {
	}
		
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getAltitude() {
		return this.altitude;
	}

	public void setAltitude(String altitude) {
		this.altitude = altitude;
	}

	public String getLength() {
		return this.length;
	}

	public void setLength(String length) {
		this.length = length;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

}