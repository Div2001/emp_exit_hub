package com.example.ExitSurvey.controller;

import com.example.ExitSurvey.model.Response;
import com.example.ExitSurvey.repository.ResponseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/exit-api")
public class ResponseController {

    @Autowired
    private ResponseRepository responseRepository;

    @PostMapping("/create")
    public ResponseEntity<Response> createExitSurvey(@RequestBody Response response) {
//        return responseRepository.save(new Response());

        try {
            Response _response = responseRepository.save(new Response(response.getEmpId(), response.getLeaveReason(), response.getLikes(), response.getDislikes(), response.getCompensation(), response.getValued(), response.getFairness(), response.getFeedback()));
            return new ResponseEntity<>(_response, HttpStatus.CREATED);
        }catch (Exception ex){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/list")
    public ResponseEntity<List<Response>> getAllExitSurveys() {
//        return responseRepository.findAll();

        try {
            List<Response> responses = new ArrayList<>();
            responseRepository.findAll().forEach(responses::add);
            return new ResponseEntity<>(responses, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/responses/{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable("id") String id) {
        try {
            responseRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
