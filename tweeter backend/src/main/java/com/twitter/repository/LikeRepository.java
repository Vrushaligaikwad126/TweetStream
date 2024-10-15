//package com.twitter.repository;
//
//import java.util.List;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
//
//import com.twitter.model.Like;
//
//public interface LikeRepository extends JpaRepository<Like, Long> {
////	
////	@Query("SELECT l FROM Like l WHERE l.userId=userId AND l.twit.id=twitId")
////	public Like isLikeExist(@Param("userId")Long userId,@Param("twitId")Long twitId);
//	
//	@Query("SELECT l FROM Like l WHERE l.twitId=twitId")
//	public List<Like> findbyTwitId(@Param("twitId")Long twitId) ;
//	
//	@Query("SELECT l FROM Like l WHERE l.user.id = :userId AND l.twit.id = :twitId")
//	public Like isLikeExist(@Param("userId") Long userId, @Param("twitId") Long twitId);
//
//		
//	
//
//}
package com.twitter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.twitter.model.Like;

public interface LikeRepository extends JpaRepository<Like, Long> {
    
    @Query("SELECT l FROM Like l WHERE l.user.id = :userId AND l.twit.id = :twitId")
    public Like isLikeExist(@Param("userId") Long userId, @Param("twitId") Long twitId);
    
    @Query("SELECT l FROM Like l WHERE l.twit.id = :twitId")
    public List<Like> findbyTwitId(@Param("twitId") Long twitId);
}

