package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.repository.SecurityRepository;
import com.db.grad.javaapi.repository.TradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DashboardController {
    @Autowired
    private TradeRepository tradeRepository;
    @Autowired
    private SecurityRepository securityRepository;

    //get all securities
    @GetMapping("/dashboard/securities")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Security> getAllBonds() {
        return securityRepository.findAll();
    }


    //get all trades for a security
    @GetMapping("/dashboard/{securityid}/trades")
    public List<Trade> getTradesBySecurityId(@PathVariable Integer securityid) {
        return tradeRepository.findBySecurityId(securityid);
    }
}
