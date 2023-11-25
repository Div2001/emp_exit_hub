package com.example.demo.repository;

import com.example.demo.model.ResignationDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResignationRepository extends JpaRepository<ResignationDetails, Long> {
}
