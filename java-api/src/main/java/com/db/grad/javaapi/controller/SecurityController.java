package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.repository.SecurityRepository;
import com.db.grad.javaapi.service.SecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class SecurityController {
    @Autowired
    private SecurityRepository securityRepository;
    @Autowired
    private SecurityService securityService;

    //get all securities
    @GetMapping("/dashboard/securities")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Security> getAllBonds() {
        return securityRepository.findAll();
    }

    //add new security
    @PostMapping("/dashboard/security")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Security> createSecurity(@RequestBody Security security) {
        return ResponseEntity.ok(securityRepository.save(security));
    }

    //edit security
    @PutMapping("/dashboard/security/{securityid}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Security> updateSecurity(@PathVariable Integer securityid, @RequestBody Security security) throws ResourceNotFoundException {
        return ResponseEntity.ok(securityService.updateSecurityData(securityid, security));
    }

    //delete security
    @DeleteMapping("/dashboard/security/{securityid}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Map<String, Boolean>> deleteSecurity(@PathVariable Integer securityid) throws ResourceNotFoundException {
        return ResponseEntity.ok(securityService.deleteSecurity(securityid));
    }
}
