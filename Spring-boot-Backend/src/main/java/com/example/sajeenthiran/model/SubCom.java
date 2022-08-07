package com.example.sajeenthiran.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "SubCommunities")
public class SubCom {
	
@Id
private String id;
	
private String name;
private String numMem;
private String bankAcc;
private String motto;
private List coverPhoto;


public SubCom(String id, String name, String numMem, String bankAcc, String motto,List coverPhoto) {
	super();
	this.id = id;
	this.name = name;
	this.numMem = numMem;
	this.bankAcc = bankAcc;
	this.motto = motto;
	this.coverPhoto=coverPhoto;
}
public List getCoverPhoto() {
	return coverPhoto;
}
public void setCoverPhoto(List coverPhoto) {
	this.coverPhoto = coverPhoto;
}
public String getId() {
	return id;
}
public void setId(String id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getNumMem() {
	return numMem;
}
public void setNumMem(String numMem) {
	this.numMem = numMem;
}
public String getBankAcc() {
	return bankAcc;
}
public void setBankAcc(String bankAcc) {
	this.bankAcc = bankAcc;
}
public String getMotto() {
	return motto;
}
public void setMotto(String motto) {
	this.motto = motto;
}



}
