package com.twitter.dto.mapper;

import java.util.ArrayList;
import java.util.List;

import com.twitter.dto.TwitDto;
import com.twitter.dto.UserDto;
import com.twitter.model.Twit;
import com.twitter.model.User;
import com.twitter.util.TwitUtil;

public class TwitDtoMapper {
	public static TwitDto toTwitDto(Twit twit,User reqUser) {
		
		UserDto user=UserDtoMapper.toUserDto(twit.getUser());
		
		boolean isLiked=TwitUtil.isLikedByReqUser(reqUser,twit);
		boolean isRetwited=TwitUtil.isRetwitedByReqUser(reqUser, twit);
		
		List<Long>retwitUserId=new ArrayList<>();
		
		for(User user1:twit.getRetwituser()) {
			retwitUserId.add(user1.getId());
			
		}
		
		TwitDto twitDto=new TwitDto();
		twitDto.setId(twit.getId());
		twitDto.setContent(twit.getContent());
		twitDto.setCreatedAt(twit.getCreatedAt());
		twitDto.setImage(twit.getImage());
		twitDto.setTotalLikes(twit.getLikes().size());
		twitDto.setTotalReplies(twit.getReplayTwits().size());
		twitDto.setTotalRetweets(twit.getRetwituser().size());
		twitDto.setUser(user);
		twitDto.setLiked(isLiked);
		twitDto.setRetwit(isRetwited);
		twitDto.setRetwitUsersId(retwitUserId);
		twitDto.setReplyTwits(toTwitDtos(twit.getReplayTwits(), reqUser));
		twitDto.setVideo(twit.getVideo());
		return twitDto;
		
	}
	public static List<TwitDto>toTwitDtos(List<Twit>twits,User reqUser){
		List<TwitDto>twitDtos=new ArrayList<>();
		
		for(Twit twit:twits) {
			TwitDto twitDto=toReplyTwitDto(twit,reqUser);
			twitDtos.add(twitDto);
		}
		return twitDtos;
	}
	private static TwitDto toReplyTwitDto(Twit twit, User reqUser) {
		
UserDto user=UserDtoMapper.toUserDto(twit.getUser());
		
		boolean isLiked=TwitUtil.isLikedByReqUser(reqUser,twit);
		boolean isRetwited=TwitUtil.isRetwitedByReqUser(reqUser, twit);
		
		List<Long>retwitUserId=new ArrayList<>();
		
		for(User user1:twit.getRetwituser()) {
			retwitUserId.add(user1.getId());
			
		}
		
		TwitDto twitDto=new TwitDto();
		twitDto.setId(twit.getId());
		twitDto.setContent(twit.getContent());
		twitDto.setCreatedAt(twit.getCreatedAt());
		twitDto.setImage(twit.getImage());
		twitDto.setTotalLikes(twit.getLikes().size());
		twitDto.setTotalReplies(twit.getReplayTwits().size());
		twitDto.setTotalRetweets(twit.getRetwituser().size());
		twitDto.setUser(user);
		twitDto.setLiked(isLiked);
		twitDto.setRetwit(isRetwited);
		twitDto.setRetwitUsersId(retwitUserId);
		twitDto.setVideo(twit.getVideo());
		return twitDto;
	}

}
