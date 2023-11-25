package com.example.ExitSurvey.repository;

import com.example.ExitSurvey.model.Response;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
public interface ResponseRepository extends MongoRepository<Response, String> {
}
