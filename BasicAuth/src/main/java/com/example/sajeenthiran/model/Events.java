package com.example.sajeenthiran.model;

import java.util.Date;
import java.util.List;

public class Events {
private String subCom;
private String mainCom;
private List image;
private String description;
private String title;
private Date date;
private int amount;
public Events(String subCom, String mainCom, List image, String description, String title,Date date,int amount) {
	super();
	this.subCom = subCom;
	this.mainCom = mainCom;
	this.image = image;
	this.description = description;
	this.title = title;
	this.date=date;
	this.amount=amount;
}
public int getAmount() {
	return amount;
}
public void setAmount(int amount) {
	this.amount = amount;
}
public Date getDate() {
	return date;
}
public void setDate(Date date) {
	this.date = date;
}
public String getSubCom() {
	return subCom;
}
public void setSubCom(String subCom) {
	this.subCom = subCom;
}
public String getMainCom() {
	return mainCom;
}
public void setMainCom(String mainCom) {
	this.mainCom = mainCom;
}
public List getImage() {
	return image;
}
public void setImage(List image) {
	this.image = image;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
public String getTitle() {
	return title;
}
public void setTitle(String title) {
	this.title = title;
}

}
