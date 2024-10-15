package com.twitter.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.twitter.exception.TwitException;
import com.twitter.exception.UserException;
import com.twitter.model.Twit;
import com.twitter.model.User;
import com.twitter.repository.TwitRepository;
import com.twitter.request.TwitReplyRequest;

@Service
public class TwitServiceImplementation implements TwitService{
	
	@Autowired
	private TwitRepository twitRepository;

	@Override
	public Twit createTwit(Twit req, User user) throws UserException {
		
		Twit twit=new Twit();
		twit.setContent(req.getContent());
		twit.setCreatedAt(LocalDateTime.now());
		twit.setImage(req.getImage());
		twit.setUser(user);
		twit.setReply(false);
		twit.setTwit(true);
		twit.setVideo(req.getVideo());
		
		return twitRepository.save(twit);
	}

	@Override
	public List<Twit> findAllTwit() {
		
	return twitRepository.findAllByIsTwitTrueOrderByCreatedAtDesc();
	}

	@Override
	public Twit retwit(Long twitId, User user) throws UserException, TwitException {
		Twit twit=findById(twitId);
		if(twit.getRetwituser().contains(user)) {
			twit.getRetwituser().remove(user);
		}
		else {
			twit.getRetwituser().add(user);
		}
		return twitRepository.save(twit);
	}

	@Override
	public Twit findById(Long twitId) throws TwitException {
	    Twit twit = twitRepository.findById(twitId)
	            .orElseThrow(() -> new TwitException("Twit not found with id " + twitId));

	    return twit;
	}

	
	@Override
	public void deleteTwitById(Long twitId, Long userId) throws TwitException, UserException {
		Twit twit=findById(twitId);
		
		if(userId.equals(twit.getUser().getId())) {
		throw new UserException("you cant delete another users twit");
	   }
		twitRepository.deleteById(twit.getId());
	}
	@Override
	public Twit removeFromRetwit(Long twitId, User user) throws TwitException, UserException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Twit createReply(TwitReplyRequest req, User user) throws TwitException {
		Twit replyFor=findById(req.getTwitId());
		
		Twit twit=new Twit();
		twit.setContent(req.getContent());
		twit.setCreatedAt(LocalDateTime.now());
		twit.setImage(req.getImage());
		twit.setUser(user);
		twit.setReply(true);
		twit.setTwit(false);
		
		twit.setReplyFor(replyFor);
		
		Twit savedReply=twitRepository.save(twit);
		
		twit.getReplayTwits().add(savedReply);
		twitRepository.save(replyFor);
		
		return replyFor;
	}

//	@Override
//	public List<Twit> getUserTwit(User user) {
//		// TODO Auto-generated method stub
//		return twitRepository.findByRetwituserContainsOrUser_IdAndIsTwitTrueOrderByCreatedAtDesc(user, user.getId());
//	}

//	@Override
//	public List<Twit> finByLikesContainsUser(User user) {
//		
//		return twitRepository.findByLikesUser_id(user.getId());
//	}
	@Override
	public List<Twit> finByLikesContainsUser(User user) {
	    return twitRepository.findByLikesUserId(user.getId());
	}

	@Override
	public List<Twit> getUserTwit(User user) {
		// TODO Auto-generated method stub
		return null;
	}


}
