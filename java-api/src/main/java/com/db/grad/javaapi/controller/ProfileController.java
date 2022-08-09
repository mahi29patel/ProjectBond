package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.model.User;
import com.db.grad.javaapi.repository.SecurityRepository;
import com.db.grad.javaapi.repository.TradeRepository;
import com.db.grad.javaapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class ProfileController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TradeRepository tradeRepository;

    @Autowired
    private SecurityRepository securityRepository;

    @GetMapping("/profile/{userid}")
    @CrossOrigin(origins = "http://localhost:3000")
    public User getUserProfile(@PathVariable int userid) {
        return userRepository.getUserInfo(userid);
    }

    @GetMapping("/profile/{userid}/trades")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Trade> getUserTrades(@PathVariable Integer userid) {
        return tradeRepository.findByUser(userid);
    }

//    @GetMapping("/profile/{userid}/securities")
//    @CrossOrigin(origins = "http://localhost:3000")
//    public List<Security> getUserSecurities(@PathVariable int userid) {
//        return securityRepository.findByUser(userid);
//    }
}