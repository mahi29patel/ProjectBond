package com.db.grad.javaapi.service;

import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.repository.TradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;

import java.util.HashMap;
import java.util.Map;

@Service
public class TradeService {
    @Autowired
    private TradeRepository tradeRepository;

    public Trade updateTradeDetails(Integer tradeid, Trade tradedata) throws ResourceNotFoundException {
        Trade trade = tradeRepository.findById(tradeid).orElseThrow(()-> new ResourceAccessException("Trade Not Found"));
        if(tradedata.getBookid() > 0) trade.setBookid(tradedata.getBookid());
        if(tradedata.getSecurityid() > 0 ) trade.setSecurityid(tradedata.getSecurityid());
        if(tradedata.getQuantity()> 0) trade.setQuantity((tradedata.getQuantity()));
        if(tradedata.getStatus()!=null) trade.setStatus((tradedata.getStatus()));
        if(tradedata.getPrice() > 0) trade.setPrice((tradedata.getPrice()));
        if(tradedata.getBuySell() > 0) trade.setBuySell(tradedata.getBuySell());
        if(tradedata.getTradedate()!= null) trade.setTradedate((tradedata.getTradedate()));
        if(tradedata.getSettlementdate()!= null) trade.setSettlementdate((tradedata.getSettlementdate()));

        Trade updatedTrade = tradeRepository.save(trade);
        return updatedTrade;
    }

//    public Map<String, Boolean> deleteTrade(Integer tradeid) throws ResourceNotFoundException{
//        Trade trade = tradeRepository.findById(tradeid).orElseThrow(()-> new ResourceNotFoundException("Trade not found"));
//        tradeRepository.delete(trade);
//        Map<String,Boolean> response = new HashMap<>();
//        response.put("deleted",Boolean.TRUE);
//        return response;
//    }

}

