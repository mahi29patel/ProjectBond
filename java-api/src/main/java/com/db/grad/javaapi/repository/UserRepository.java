package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.Trade;
import org.springframework.data.jpa.repository.JpaRepository;
import com.db.grad.javaapi.model.User;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    @Query(nativeQuery = true, value="Select * from users where email = ?1 and password =?2")
    User activeuser(String email, String password);

    @Query(nativeQuery = true, value="Select * from users where id = ?1")
    User getUserInfo(int id);

}
