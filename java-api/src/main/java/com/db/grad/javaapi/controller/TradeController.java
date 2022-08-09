package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.repository.TradeRepository;
import com.db.grad.javaapi.service.TradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class TradeController {

    @Autowired
    private TradeRepository tradeRepository;

    @Autowired
    private TradeService tradeService;

    //get all trades for a security
    @GetMapping("/dashboard/{securityid}/trades")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Trade> getTradesBySecurityId(@PathVariable Integer securityid) {
        return tradeRepository.findBySecurityId(securityid);
    }

    //get trade by id
    @GetMapping("dashboard/trade/{tradeid}")
    @CrossOrigin(origins = "http://localhost:3000")
    public Optional<Trade> getTrade(@PathVariable Integer tradeid) {
        return tradeRepository.findById(tradeid);
    }

    //add new trade
    @PostMapping("/dashboard/trade")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Trade> createTrade(@RequestBody Trade trade) {
        return ResponseEntity.ok(tradeRepository.save(trade));
    }

    //edit trade
    @PutMapping("/dashboard/trade/{tradeid}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Trade> updateTrade(@PathVariable Integer tradeid, @RequestBody Trade trade) throws ResourceNotFoundException {
        return ResponseEntity.ok(tradeService.updateTradeDetails(tradeid, trade));
    }

//    //delete trade
//    @DeleteMapping("/dashboard/trade/{tradeid}")
//    @CrossOrigin(origins = "http://localhost:3000")
//    public ResponseEntity<Map<String, Boolean>> deleteTrade(@PathVariable Integer tradeid) throws ResourceNotFoundException {
//        return ResponseEntity.ok(tradeService.deleteTrade(tradeid));
//    }
}
