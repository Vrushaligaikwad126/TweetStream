package com.twitter.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

import lombok.Data;


public class Verification {
	
	private boolean status=false;
	private LocalDateTime startedAt;
	private LocalDateTime endsAt;
	private String plantype;
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public LocalDateTime getStartedAt() {
		return startedAt;
	}
	public void setStartedAt(LocalDateTime startedAt) {
		this.startedAt = startedAt;
	}
	public LocalDateTime getEndsAt() {
		return endsAt;
	}
	public void setEndsAt(LocalDateTime endsAt) {
		this.endsAt = endsAt;
	}
	public String getPlantype() {
		return plantype;
	}
	public void setPlantype(String plantype) {
		this.plantype = plantype;
	}
	
	

}
