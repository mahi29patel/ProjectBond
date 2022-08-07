package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.Trade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TradeRepository extends JpaRepository<Trade, Long> {

    @Query(nativeQuery = true, value = "SELECT * from Trade trade left join book b on b.id = trade.bookid left join bookuser bu on bu.bookid = trade.bookid where securityid = ?1")
    List<Trade> findBySecurityId(Integer securityId);
}