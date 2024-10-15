package com.twitter.service;

import java.util.List;

import org.hibernate.annotations.Array;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.twitter.exception.TwitException;
import com.twitter.exception.UserException;
import com.twitter.model.Like;
import com.twitter.model.Twit;
import com.twitter.model.User;
import com.twitter.repository.LikeRepository;
import com.twitter.repository.TwitRepository;

@Service
public class LikeServiceImplementation implements LikeService {

	@Autowired
	private LikeRepository likeRepository;
	@Autowired
	private TwitService twitService;
	@Autowired
	private TwitRepository twitRepository;
	
	@Override
	public Like likeTwit(Long twitId, User user) throws UserException, TwitException {
		Like isLikeExists=likeRepository.isLikeExist(user.getId(), twitId);
		
		if(isLikeExists!=null) {
			likeRepository.deleteById(isLikeExists.getId());
			return isLikeExists;
		}
		Twit twit=twitService.findById(twitId);
		
		Like like= new Like();
		like.setTwit(twit);
		like.setUser(user);
	
		Like savedLike=likeRepository.save(like);
		
		twit.getLikes().add(savedLike);
		twitRepository.save(twit);
		
		return savedLike;
	}

	@Override
	public List<Like> getAllLikes(Long twitId) throws TwitException {
		Twit twit=twitService.findById(twitId);
		
		List<Like>likes=likeRepository.findbyTwitId(twitId);
		return likes;
	}

}
