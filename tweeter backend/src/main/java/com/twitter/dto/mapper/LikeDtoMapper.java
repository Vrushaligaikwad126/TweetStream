package com.twitter.dto.mapper;

import java.util.ArrayList;
import java.util.List;

import com.twitter.dto.LikeDto;
import com.twitter.dto.TwitDto;
import com.twitter.dto.UserDto;
import com.twitter.model.Like;
import com.twitter.model.User;

public class LikeDtoMapper {
	
	public static LikeDto toLikeDto(Like like,User reqUser) {
		
		UserDto user=UserDtoMapper.toUserDto(like.getUser());
		UserDto reqUserDto=UserDtoMapper.toUserDto(reqUser);
		TwitDto twit=TwitDtoMapper.toTwitDto(like.getTwit(), reqUser);
		
		LikeDto likeDto=new LikeDto();
		likeDto.setId(like.getId());
		likeDto.setTwit(twit);
		likeDto.setUser(user);
		
		return likeDto;
	}
	public static List<LikeDto>toLikeDtos(List<Like>likes,User reqUser){
		List<LikeDto>likeDtos= new ArrayList<>();
		
		for(Like like:likes) {
			UserDto user=UserDtoMapper.toUserDto(like.getUser());
			TwitDto twit=TwitDtoMapper.toTwitDto(like.getTwit(), reqUser);
			
			LikeDto likeDto=new LikeDto();
			likeDto.setId(like.getId());
			likeDto.setTwit(twit);
			likeDto.setUser(user);
			likeDtos.add(likeDto);

		}
		return likeDtos;
	}

}
