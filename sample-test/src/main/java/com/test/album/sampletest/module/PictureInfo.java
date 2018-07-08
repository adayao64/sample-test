package com.test.album.sampletest.module;

import java.util.Date;

public class PictureInfo {

	private int Id;
	private Date createdAt;
	private String name;
	private String imageUrl;
	
	public PictureInfo(int id, Date createdAt, String name, String imageUrl) {
		super();
		Id = id;
		this.createdAt = createdAt;
		this.name = name;
		this.imageUrl = imageUrl;
	}
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	
	
}
