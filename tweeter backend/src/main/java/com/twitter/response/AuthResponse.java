package com.twitter.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {
//	
//	public AuthResponse(String token, boolean b) {
//		// TODO Auto-generated constructor stub
//	}
	
	private String jwt;
	public AuthResponse(String jwt, boolean status) {
	super();
	this.jwt = jwt;
	this.status = status;
}
	private boolean status ;
	public String getJwt() {
		return jwt;
	}
	public void setJwt(String jwt) {
		this.jwt = jwt;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	
	

}
