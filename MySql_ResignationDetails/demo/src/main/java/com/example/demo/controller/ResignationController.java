package com.example.demo.controller;

import com.example.demo.model.ResignationDetails;
import com.example.demo.repository.ResignationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import java.time.LocalDate;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/resignation-api")
public class ResignationController {
    @Autowired
    ResignationRepository ResignationRepository;

//    @PostMapping("/employees")
//    public ResponseEntity<ResignationDetails> createResignationDetails(@RequestBody ResignationDetails employee) {
//        try {
//            ResignationDetails _employee = ResignationRepository.save(new ResignationDetails(employee.getCurrentManager(), employee.getResignationReason(),employee.getLastWorkingDay(), employee.isNoticePeriod()));
//            return new ResponseEntity<>(_employee, HttpStatus.CREATED);
//        } catch (Exception ex) {
//            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }

    @PostMapping("/employees")
    public ResponseEntity<ResignationDetails> createResignationDetails(@RequestBody ResignationDetails employee) {
        try {
            ResignationDetails _employee = ResignationRepository.save(new ResignationDetails(employee.getEmpId(),employee.getCurrentManager(), employee.getResignationReason(), employee.getLastWorkingDay(), employee.isNoticePeriod()));
            return new ResponseEntity<>(_employee, HttpStatus.CREATED);
        } catch (Exception ex) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/employees")
    public ResponseEntity<List<ResignationDetails>> getAllEmployees() {
        try {
            List<ResignationDetails> employees = new ArrayList<ResignationDetails>();
            ResignationRepository.findAll().forEach(employees::add);
            if (employees.isEmpty()) {
                return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(employees,HttpStatus.OK);

        } catch (Exception ex) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<ResignationDetails> getEmployeeById(@PathVariable("id") long id){
        Optional<ResignationDetails> employeeData = ResignationRepository.findById(id);
        if( employeeData.isPresent()){
            return new ResponseEntity<>(employeeData.get(),HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<ResignationDetails> updateEmployee(@PathVariable("id") long id,@RequestBody ResignationDetails employees ){
        Optional<ResignationDetails> employeeData = ResignationRepository.findById(id);
        if(employeeData.isPresent()){
            ResignationDetails _employee = employeeData.get();
            _employee.setCurrentManager(employees.getCurrentManager());
            _employee.setResignationReason(employees.getResignationReason());
            _employee.setLastWorkingDay(employees.getLastWorkingDay());
            _employee.setNoticePeriod(employees.isNoticePeriod());

            //FLAG
//            LocalDate today = LocalDate.now();
//            if (today.isEqual(employees.getLastWorkingDay())) {
//                _employee.setFlag(0); // Set flag to 1 if today is the last working day
//            } else {
//                _employee.setFlag(1); // Set flag to 0 for other days
//            }

            return new ResponseEntity<>(ResignationRepository.save(_employee),HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<HttpStatus> deleteEmployeeById(@PathVariable("id") long id){
        try{
            ResignationRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }catch (Exception ex){
            return  new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
