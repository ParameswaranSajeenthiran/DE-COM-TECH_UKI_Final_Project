package com.example.sajeenthiran.service;

import java.util.ArrayList;


import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.sajeenthiran.model.Activities;
import com.example.sajeenthiran.model.Docs;
import com.example.sajeenthiran.model.Events;
import com.example.sajeenthiran.model.MainCommunity;
import com.example.sajeenthiran.model.Reports;
import com.example.sajeenthiran.model.SubCom;
import com.example.sajeenthiran.model.User;
import com.example.sajeenthiran.model.response.MessageResponse;

import com.example.sajeenthiran.repository.ActivitiesRepositories;
import com.example.sajeenthiran.repository.CustomRepository;
import com.example.sajeenthiran.repository.EventsRepository;
import com.example.sajeenthiran.repository.MainComRepository;
import com.example.sajeenthiran.repository.ReportRepository;
import com.example.sajeenthiran.repository.SubComRepository;
import com.example.sajeenthiran.repository.UserRepository;

@Service
public class ComService {
	
	
	@Autowired
	UserRepository userRepository;
@Autowired
SubComRepository subComRepostiory;

@Autowired
MainComRepository mainComRepository;

@Autowired
EventsRepository eventsRepository;
@Autowired
ActivitiesRepositories activitiesRepository;

@Autowired
ReportRepository reportsRepository;

@Autowired
CustomRepository customRepository;
	public ResponseEntity<?>createMainCommunity(MainCommunity mainCom){
		try {
//			System.out.println(mainCom);
			if (mainComRepository.existsByName(mainCom.getName())) {
				return ResponseEntity.badRequest()
						.body(new MessageResponse("Error: Username is already taken!"));
			}
			else{	
		
			
//		List<SubCom> subCom=new ArrayList<>();
//		subCom.addAll(mainCom.getSubCom());
//		List<SubCom> newSubCom= subComRepostiory.saveAll(subCom);
//		mainCom.setSubCom(newSubCom);
		mainComRepository.save(mainCom);
		
		
				
			return  new ResponseEntity<>(mainCom, HttpStatus.CREATED);
					}
			
		}catch (Exception e) {
		    return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	public ResponseEntity<?>getMainCom(int pageSize,int pageNo,String sortBy, String direction){
		try {
		    List<MainCommunity> mainCommunities = new ArrayList<MainCommunity>();
		    mainComRepository.findAll().forEach(mainCommunities::add);
		    System.out.println(pageNo);
			  System.out.println(pageSize);
			  System.out.println(sortBy);
			  Map<String, Object> response = new HashMap<>();
			    Sort sort = Sort.by(sortBy);
			    
			    Sort sort1=Sort.by(Sort.Direction.DESC,sortBy);
			    System.out.println(sort1);
				Pageable pageable = PageRequest.of(pageNo, pageSize,sort1);
				
				 System.out.println(pageable);
			    Page<MainCommunity> page = mainComRepository.findAll(pageable);
			    System.out.println(page);
			    response.put("data", page.getContent());
			    System.out.println(response);
			    response.put("Total no of pages", page.getTotalPages());
			    response.put("Total no of elements", page.getTotalElements());
			    response.put("Current page no", page.getNumber());
		    if (mainCommunities.isEmpty()) {
		      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		    }
		    return new ResponseEntity<>(response, HttpStatus.OK);
		} catch (Exception e) {
		    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	public ResponseEntity<?>createSubCom(SubCom subCom,String id ){
		try {
			
		
					
						Optional<MainCommunity>mainCom=mainComRepository.findById(id);
						
							if(mainCom.isPresent()){
								
								System.out.println(mainCom);
						SubCom newSubCom=subComRepostiory.save(subCom);
				System.out.println(subCom);
						
						List<SubCom> newSubCom1=new ArrayList<>();
						System.out.println(newSubCom1);
						
						MainCommunity main=mainCom.get();
						System.out.print(main);
List<SubCom>subComList=main.getSubCom();					
						System.out.println(subComList);
						subComList.add(subComList.size(),newSubCom);
						System.out.println(subCom);
						main.setSubCom(subComList);
						System.out.println(subCom);
						
						MainCommunity updatedMainCom=mainComRepository.save(main);
								
									return  new ResponseEntity<>(newSubCom, HttpStatus.CREATED);
							}else {
									return ResponseEntity.badRequest()
											.body(new MessageResponse("Error: Main Community does not exist!"));
							}
			
			
		}catch (Exception e) {
		    return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}
	public ResponseEntity<?>getAllSubCom(String id ){
		try {Optional<MainCommunity>mainCom=mainComRepository.findById(id);
						
							if(mainCom.isPresent()){
						List<SubCom> newSubCom=new ArrayList<>();
						MainCommunity main=mainCom.get();
						newSubCom.addAll(main.getSubCom());
					
				
								
									return  new ResponseEntity<>(newSubCom, HttpStatus.CREATED);
							}else {
									return ResponseEntity.badRequest()
											.body(new MessageResponse("Error: Main Community does not exist!"));
							}
			
			
		}catch (Exception e) {
		    return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	
	
	public ResponseEntity<?>joinSubCom(Activities activity){
		try {
			Date d=new Date();
			activity.setDate(d);
		activitiesRepository.save(activity);
				
			return  new ResponseEntity<>(activity, HttpStatus.CREATED);
					
			
		}catch (Exception e) {
		    return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}
	

	public ResponseEntity<?>joinMainCom(Activities activity){
		try {
			Date d=new Date();
			activity.setDate(d);
		activitiesRepository.save(activity);
				
			return  new ResponseEntity<>(activity, HttpStatus.CREATED);
					
			
		}catch (Exception e) {
		    return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}
	public ResponseEntity<?>leaveSubCom(Activities activity){
		try {
			Date d=new Date();
			activity.setDate(d);
		activitiesRepository.save(activity);
				
			return  new ResponseEntity<>(activity, HttpStatus.CREATED);
					
			
		}catch (Exception e) {
		    return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	
	public ResponseEntity<?>findNumMembers(String subComId){
		try {
			List<Activities> joined=activitiesRepository.findAllBySubComAndIsMember(subComId ,true);
//			 List<Activities>left=activitiesRepository.findAllBySubComAndIsMember(subComId ,false);
//			int numMem=joined.size()-left.size();
			
			return  new ResponseEntity<>(joined, HttpStatus.OK);
					
			
		}catch (Exception e) {
		    return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	
	public ResponseEntity<List<Activities>>getActivities(String subCom){
		try {
			 List<Activities> activities=activitiesRepository.findBySubCom(subCom);
		
		    if (activities.isEmpty()) {
		      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		    }
		    return new ResponseEntity<>(activities, HttpStatus.OK);
		} catch (Exception e) {
		    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	public ResponseEntity<?>addReport(Reports report,String id){
		try {

			if (reportsRepository.existsByTitleAndType(report.getTitle(),report.getType())) {
				return ResponseEntity.badRequest()
						.body(new MessageResponse("Error: Username is already taken!"));
			}
			else{	
				
				Date d=new Date();
				report.setDate(d);
			report.setSubCom(id);
				
			return  new ResponseEntity<>(reportsRepository.save(report), HttpStatus.CREATED);
					}
			
		}catch (Exception e) {
		    return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}
	public ResponseEntity<List<Reports>>getAllReportsbyTypeAndsubcom(String type,String subCom){
		try {
		    List<Reports> reports=reportsRepository.findByTypeAndSubCom(type,subCom);
		
		    if (reports.isEmpty()) {
		      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		    }
		    return new ResponseEntity<>(reports, HttpStatus.OK);
		} catch (Exception e) {
		    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	public ResponseEntity<?>getSubByusername(String user ,String mainCom){
		try {;
			 List<Activities> activities=activitiesRepository.findByMemberJoinedAndMainCom(user,mainCom);
			    List<Optional<SubCom>> subCommunities = new ArrayList<Optional<SubCom>>();
for(int i=0;i<activities.size();i++) {
Activities activity =activities.get(i);
String subComId=activity.getSubCom();
Optional<SubCom> subCom= subComRepostiory.findById(subComId);
subCommunities.add(subCom);
}
			
		
		    if (activities.isEmpty()) {
		      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		    }
		    return new ResponseEntity<>(subCommunities, HttpStatus.OK);
		} catch (Exception e) {
		    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	public ResponseEntity<?>getMainByusername(String user){
		try {
			 List<Activities> activities=activitiesRepository.findByMemberJoined(user);
			    List<Optional<MainCommunity>> mainCommunities = new ArrayList<Optional<MainCommunity>>();
for(int i=0;i<activities.size();i++) {
Activities activity =activities.get(i);
String mainComId=activity.getMainCom();
Optional<MainCommunity> mainCom= mainComRepository.findById(mainComId);
mainCommunities.add(mainCom);
}
			
		
		    if (activities.isEmpty()) {
		      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		    }
		    return new ResponseEntity<>(mainCommunities, HttpStatus.OK);
		} catch (Exception e) {
		    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	public ResponseEntity<?>createEvent(Events event){
		try {
//			
			
//		List<SubCom> subCom=new ArrayList<>();
//		subCom.addAll(mainCom.getSubCom());
//		List<SubCom> newSubCom= subComRepostiory.saveAll(subCom);
//		mainCom.setSubCom(newSubCom);
		eventsRepository.save(event);
				
			return  new ResponseEntity<>(event, HttpStatus.CREATED);
					
			
		}catch (Exception e) {
		    return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}public ResponseEntity<?>mainCoverPhoto(Events event){
		try {
//			
			
//		List<SubCom> subCom=new ArrayList<>();
//		subCom.addAll(mainCom.getSubCom());
//		List<SubCom> newSubCom= subComRepostiory.saveAll(subCom);
//		mainCom.setSubCom(newSubCom);
		Date d=new Date();
		event.setDate(d);
		d.getDay();System.out.println(d);
		eventsRepository.save(event);
		System.out.println(d);
	List img=event.getImage();
	System.out.println(d);
		String id=event.getMainCom();
		System.out.println(d);
		Optional<MainCommunity>mainCom=mainComRepository.findById(id);
		System.out.println(d);
	MainCommunity main=mainCom.get();
	System.out.println(d);
	main.setCoverPhoto(img);
	System.out.println(d);
	mainComRepository.save(main);
	System.out.println(d);
			return  new ResponseEntity<>(main, HttpStatus.CREATED);
					
			
		}catch (Exception e) {
		    return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	
	public ResponseEntity<?>subCoverPhoto(Events event){
		try {
//			
			
//		List<SubCom> subCom=new ArrayList<>();
//		subCom.addAll(mainCom.getSubCom());
//		List<SubCom> newSubCom= subComRepostiory.saveAll(subCom);
//		mainCom.setSubCom(newSubCom);
		Date d=new Date();
		event.setDate(d);
		
		eventsRepository.save(event);
	List img=event.getImage();
		String id=event.getSubCom();
		Optional<SubCom>subCom=subComRepostiory.findById(id);
	SubCom sub=	subCom.get();
	sub.setCoverPhoto(img);
	subComRepostiory.save(sub);
			return  new ResponseEntity<>(sub, HttpStatus.CREATED);
					
			
		}catch (Exception e) {
		    return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	public ResponseEntity<List<Events>>getAllEvents(String id){
		try {
		
		    List<Events> events=eventsRepository.findBySubCom(id);
		
		    if (events.isEmpty()) {
		      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		    }
		    return new ResponseEntity<>(events, HttpStatus.OK);
		} catch (Exception e) {
		    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	public ResponseEntity<?>getDonations(String id,int pageNo,int pageSize,String sortBy){
		try {
		
		 
		    System.out.println(pageNo);
			  System.out.println(pageSize);
			  System.out.println(sortBy);
			  Map<String, Object> response = new HashMap<>();
			    Sort sort = Sort.by(sortBy);
			    
			    Sort sort1=Sort.by(Sort.Direction.DESC,sortBy);
			    System.out.println(sort1);
				Pageable pageable = PageRequest.of(pageNo, pageSize,sort1);
				
				 System.out.println(pageable);
			    Page<Events> page = eventsRepository.findBySubComAndDescription(id,"donation",pageable);
			    System.out.println(page);
			    response.put("data", page.getContent());
			    System.out.println(response);
			    response.put("Total no of pages", page.getTotalPages());
			    response.put("Total no of elements", page.getTotalElements());
			    response.put("Current page no", page.getNumber());
		    if (page.isEmpty()) {
		      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		    }
		    return new ResponseEntity<>(response, HttpStatus.OK);
		} catch (Exception e) {
		    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	public ResponseEntity<?>getDonationsA(String id,int pageNo,int pageSize,String sortBy){
		try {
		
		 
		    System.out.println(pageNo);
			  System.out.println(pageSize);
			  System.out.println(sortBy);
			  Map<String, Object> response = new HashMap<>();
			    Sort sort = Sort.by(sortBy);
			    
			    Sort sort1=Sort.by(Sort.Direction.ASC,sortBy);
			    System.out.println(sort1);
				Pageable pageable = PageRequest.of(pageNo, pageSize,sort1);
				
				 System.out.println(pageable);
			    Page<Events> page = eventsRepository.findBySubComAndDescription(id,"donation",pageable);
			    System.out.println(page);
			    response.put("data", page.getContent());
			    System.out.println(response);
			    response.put("Total no of pages", page.getTotalPages());
			    response.put("Total no of elements", page.getTotalElements());
			    response.put("Current page no", page.getNumber());
		    if (page.isEmpty()) {
		      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		    }
		    return new ResponseEntity<>(response, HttpStatus.OK);
		} catch (Exception e) {
		    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	

	
	
	
}
