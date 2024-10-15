package com.twitter.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.twitter.dto.TwitDto;
import com.twitter.dto.mapper.TwitDtoMapper;
import com.twitter.exception.TwitException;
import com.twitter.exception.UserException;
import com.twitter.model.Twit;
import com.twitter.model.User;
import com.twitter.request.TwitReplyRequest;
import com.twitter.response.ApiResponse;
import com.twitter.service.TwitService;
import com.twitter.service.UserService;

@RestController
@RequestMapping("/api/twits")
public class TwitController {

	@Autowired
	private TwitService twitService;
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/create")
	public ResponseEntity<TwitDto>createTwit(@RequestBody Twit req,
			@RequestHeader("Authorization")String jwt)throws UserException,TwitException{
		User user=userService.findUserProfileByJwt(jwt);
		
		Twit twit= twitService.createTwit(req, user);
		
		TwitDto twitDto=new TwitDtoMapper().toTwitDto(twit, user);
		return new ResponseEntity<>(twitDto,HttpStatus.CREATED);
				
		
	}
	@PostMapping("/reply")
	public ResponseEntity<TwitDto>replyTwit(@RequestBody TwitReplyRequest req,
			@RequestHeader("Authorization")String jwt)throws UserException,TwitException{
		User user=userService.findUserProfileByJwt(jwt);
		
		Twit twit= twitService.createReply(req, user);
		
		TwitDto twitDto=new TwitDtoMapper().toTwitDto(twit, user);
		return new ResponseEntity<>(twitDto,HttpStatus.CREATED);
				
		
	}
	@DeleteMapping("/{twitId}")
	public ResponseEntity<ApiResponse>deleteTwit(@PathVariable Long twitId,
			@RequestHeader("Authorization")String jwt)throws UserException,TwitException{
		
		User user=userService.findUserProfileByJwt(jwt);
		
		twitService.deleteTwitById(twitId,user.getId());
		
		ApiResponse res=new ApiResponse("Twit deleted sucessfully",true);
		
		
		return new ResponseEntity<>(res,HttpStatus.OK);
				
		
	}
	@GetMapping("/{twitId}")
	public ResponseEntity<TwitDto>findTwitById(@PathVariable Long twitId,
			@RequestHeader("Authorization")String jwt)throws UserException,TwitException{
		User user=userService.findUserProfileByJwt(jwt);
		
		Twit twit= twitService.findById(twitId);
		
		TwitDto twitDto=new TwitDtoMapper().toTwitDto(twit, user);
		
		return new ResponseEntity<>(twitDto,HttpStatus.OK);
				
		
	}
	@GetMapping("/")
	public ResponseEntity<List<TwitDto>>getAllTwits(
			@RequestHeader("Authorization")String jwt)throws UserException,TwitException{
		User user=userService.findUserProfileByJwt(jwt);
		
		List<Twit> twits= twitService.findAllTwit();
		
		List<TwitDto> twitDtos=new TwitDtoMapper().toTwitDtos(twits, user);
		
		return new ResponseEntity<>(twitDtos,HttpStatus.OK);
				
		
	}
	@GetMapping("/user/{userId}")
	public ResponseEntity<List<TwitDto>>getUsersAllTwits(@PathVariable Long userId,
			@RequestHeader("Authorization")String jwt)throws UserException,TwitException{
		User user=userService.findUserProfileByJwt(jwt);
		
		List<Twit> twits= twitService.getUserTwit(user);
		
		List<TwitDto> twitDtos=new TwitDtoMapper().toTwitDtos(twits, user);
		
		return new ResponseEntity<>(twitDtos,HttpStatus.OK);
				
		
	}
	@GetMapping("/user/{userId}/likes")
	public ResponseEntity<List<TwitDto>>findTwitbyLikesContainesUser(@PathVariable Long userId,
			@RequestHeader("Authorization")String jwt)throws UserException,TwitException{
		User user=userService.findUserProfileByJwt(jwt);
		
		List<Twit> twits= twitService.finByLikesContainsUser(user);
		
		List<TwitDto> twitDtos=new TwitDtoMapper().toTwitDtos(twits, user);
		
		return new ResponseEntity<>(twitDtos,HttpStatus.OK);
				
		
	}
}

