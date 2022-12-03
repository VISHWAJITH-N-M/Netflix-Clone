package com.example.demo.repository;

import com.example.demo.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository <User, Integer > {
    User findByusername(String username);

    @Query(value = "select * from user_details where user_name=CONCAT(:keyword1)  and password=CONCAT(:keyword2);",nativeQuery = true)
    User findusernameandpasword(@Param("keyword1") String keyword1, @Param("keyword2")String keyword2);

}
