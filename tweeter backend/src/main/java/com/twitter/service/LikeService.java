package com.twitter.service;

import java.util.List;

import com.twitter.exception.TwitException;
import com.twitter.exception.UserException;
import com.twitter.model.Like;
import com.twitter.model.User;

public interface LikeService {
	public Like likeTwit(Long twitId,User user)throws UserException,TwitException;
	
	public List<Like>getAllLikes(Long twitId)throws TwitException;

}
