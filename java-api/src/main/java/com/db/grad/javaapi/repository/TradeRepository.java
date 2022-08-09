package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.Trade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TradeRepository extends JpaRepository<Trade, Integer> {

    @Query(nativeQuery = true, value = "SELECT * from Trade trade left join book b on b.id = trade.bookid left join bookuser bu on bu.bookid = trade.bookid where securityid = ?1")
    List<Trade> findBySecurityId(Integer securityId);

    @Query(nativeQuery = true, value="Select t.*, bookname, bu.userid, s.* from trade t left join book b on t.bookid = b.id inner join bookuser bu on b.id = bu.bookid inner join security s on t.securityid = s.id where bu.userid=?1")
    List<Trade> findByUser(Integer id);
}