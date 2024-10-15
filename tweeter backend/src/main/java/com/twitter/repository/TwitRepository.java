package com.twitter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.twitter.model.Twit;
import com.twitter.model.User;

public interface TwitRepository extends JpaRepository<Twit, Long>{
	
	List<Twit>findAllByIsTwitTrueOrderByCreatedAtDesc();
	
//	List<Twit>findByRetwituserContainsOrUser_IdAndIsTwitTrueorderByCreatedAtDesc(User user,Long userId);
	List<Twit> findByRetwituserContainsOrUser_IdAndIsTwitTrueOrderByCreatedAtDesc(User user, Long userId);

	
	//to get the twits liked by user
	List<Twit>findByLikesContainingOrderByCreatedAtDesc(User user);
	
	
//	@Query("SELECT t FROM TWIT t JOIN t.likes l WHERE l.user.id=userId")
//	List<Twit>findByLikesUser_id(Long userId);
	@Query("SELECT t FROM Twit t JOIN t.likes l WHERE l.user.id = :userId")
	List<Twit> findByLikesUserId(@Param("userId") Long userId);

}
