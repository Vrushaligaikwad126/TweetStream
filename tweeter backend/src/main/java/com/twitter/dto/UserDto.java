package com.twitter.dto;

import java.util.ArrayList;
import java.util.List;

public class UserDto {
	private Long id;
	private String fullName;
	private String email;
	private String image;
	private String location;
	private String website;
	private String birthDate;
	private String mobile;
	private String bio;
	private boolean req_user;
	private String backgroundImage;
	
	private boolean login_with_google;
	private List<UserDto>followers=new ArrayList<>();
	private List<UserDto>following=new ArrayList<>();
	
	private boolean followed;
	
	private boolean isVerified;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	public String getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(String birthDate) {
		this.birthDate = birthDate;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getBio() {
		return bio;
	}

	public void setBio(String bio) {
		this.bio = bio;
	}

	public boolean isReq_user() {
		return req_user;
	}

	public void setReq_user(boolean req_user) {
		this.req_user = req_user;
	}

	public boolean isLogin_with_google() {
		return login_with_google;
	}

	public void setLogin_with_google(boolean login_with_google) {
		this.login_with_google = login_with_google;
	}

	public List<UserDto> getFollowers() {
		return followers;
	}

	public void setFollowers(List<UserDto> followers) {
		this.followers = followers;
	}

	public List<UserDto> getFollowing() {
		return following;
	}

	public void setFollowing(List<UserDto> following) {
		this.following = following;
	}

	public boolean isFollowed() {
		return followed;
	}

	public void setFollowed(boolean followed) {
		this.followed = followed;
	}

	public boolean isVerified() {
		return isVerified;
	}

	public void setVerified(boolean isVerified) {
		this.isVerified = isVerified;
	}

	public UserDto(Long id, String fullName, String email, String image, String location, String website,
			String birthDate, String mobile, String bio, boolean req_user, boolean login_with_google,
			List<UserDto> followers, List<UserDto> following, boolean followed, boolean isVerified) {
		super();
		this.id = id;
		this.fullName = fullName;
		this.email = email;
		this.image = image;
		this.location = location;
		this.website = website;
		this.birthDate = birthDate;
		this.mobile = mobile;
		this.bio = bio;
		this.req_user = req_user;
		this.login_with_google = login_with_google;
		this.followers = followers;
		this.following = following;
		this.followed = followed;
		this.isVerified = isVerified;
	}

	public UserDto() {
		super();
	}

	public String getBackgroundImage() {
		return backgroundImage;
	}

	public void setBackgroundImage(String backgroundImage) {
		this.backgroundImage = backgroundImage;
	}
	
	


}
