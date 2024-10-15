package com.twitter.request;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class TwitReplyRequest {
	private String content;
	private Long twitId;
	private LocalDateTime createdAt;
	private String image;
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Long getTwitId() {
		return twitId;
	}
	public void setTwitId(Long twitId) {
		this.twitId = twitId;
	}
	public LocalDateTime getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public TwitReplyRequest(String content, Long twitId, LocalDateTime createdAt, String image) {
		super();
		this.content = content;
		this.twitId = twitId;
		this.createdAt = createdAt;
		this.image = image;
	}
	public TwitReplyRequest() {
		super();
	}
	
	
	

}
