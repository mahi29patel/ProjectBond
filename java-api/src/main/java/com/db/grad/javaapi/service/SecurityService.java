package com.db.grad.javaapi.service;

import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.repository.SecurityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class SecurityService {

    @Autowired
    private SecurityRepository securityRepository;

    public Security updateSecurityData(Integer securityid, Security securitydetails) throws ResourceNotFoundException {
        Security security = securityRepository.findById(securityid).orElseThrow(()-> new ResourceNotFoundException("Security not found"));
        if(securitydetails.getIsin() > 0 ) security.setIsin(securitydetails.getIsin());
        if(securitydetails.getCusip()> 0) security.setCusip((securitydetails.getCusip()));
        if(securitydetails.getIssuer()!=null) security.setIssuer((securitydetails.getIssuer()));
        if(securitydetails.getMaturitydate()!= null) security.setMaturitydate((securitydetails.getMaturitydate()));
        if(securitydetails.getCoupon() > 0) security.setCoupon(securitydetails.getCoupon());
        if(securitydetails.getFacevalue() > 0) security.setFacevalue((securitydetails.getFacevalue()));
        if(securitydetails.getType()!= null) security.setType((securitydetails.getType()));
        if(securitydetails.getStatus()!= null) security.setStatus((securitydetails.getStatus()));
        if(securitydetails.getAssignee() > 0) security.setAssignee((securitydetails.getAssignee()));

        Security updatedSecurity = securityRepository.save(security);
        return updatedSecurity;
    }

    public Map<String, Boolean> deleteSecurity(Integer securityid) throws ResourceNotFoundException{
        Security security = securityRepository.findById(securityid).orElseThrow(()-> new ResourceNotFoundException("Security Not Found"));
        securityRepository.delete(security);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return response;
    }}
