package com.twitter.service;

import java.util.List;

import com.twitter.exception.UserException;
import com.twitter.model.User;

public interface UserService {
	
	public User findUserById(Long userId)throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;
	
	public User updateUser(Long userId,User user)throws UserException;
	
	//to follow and unfollow user
	public User followUser(Long userId,User user)throws UserException;
	
	public List<User>searchUser(String query);

}
